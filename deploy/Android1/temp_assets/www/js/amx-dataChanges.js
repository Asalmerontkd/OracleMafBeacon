/* Copyright (c) 2011, 2016, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* -------------- amx-dataChanges.js -------------------- */
/* ------------------------------------------------------ */

(function()
{
  // On Android 4.0.x releases, we have noticed that the UI will not always repaint after the DOM
  // has been changed in a data change listener. As a result, we need to check the user agent
  // to see if this is an Android 4.0 device.
  var requiresUiInValidation = false;
  if (adf.mf.internal.amx.agent["type"] == "Android")
  {
    // Example user agent string we want to match:
    // Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30
    var ua = navigator.userAgent;
    if (/Android 4\.0(\.\d+)?;/.test(ua))
    {
      requiresUiInValidation = true;
    }
  }

  /**
   * Callback used to handle batch data changes.
   * @param {Array} dependencyArray an Array of EL expression dependency strings that have changed
   *        (not full expressions)
   * @see adf.mf.api.addBatchDataChangeListener
   * @private
   */
  adf.mf.internal.amx._handleBatchDataChangeListener = function(
    dependencyArray,
    collectionModelChanges)
  {
    if (dependencyArray != null)
    {
      // If there is no root node, then we are getting a data change during navigation, or during
      // the building of the tree. Since we have not yet built the node hierarchy, we do not need
      // to process the change at this time.
      var rootAmxNode = adf.mf.api.amx.getPageRootNode();

      if (rootAmxNode == null)
      {
        return;
      }

      // Queue the work onto a critical section function
      queueBatchDataChange(dependencyArray, collectionModelChanges);
    }
  }

  /**
   * Process the work of _handleBatchDataChangeListener. This is called from
   * processBatchDataChangeQueue which is run from the critical section.
   * This method should never be called directly, but always from a critical section
   */
  function handleDataChangeImpl(dependencyArray, collectionModelChanges)
  {
    var perfOp = adf.mf.internal.perf.startMonitorOperation("Process data change event", adf.mf.log.level.FINE,
      "adf.mf.internal.amx._handleBatchDataChangeListener");

    var affectedNodeCount = 0;
    try
    {
      var isFinestLoggingEnabled = adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST);

      if (isFinestLoggingEnabled)
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
          "adf.mf.internal.amx", "_handleBatchDataChangeListener",
          adf.mf.util.stringify(dependencyArray));
      }

      var markNodeForUpdateArgs = new adf.mf.internal.amx.AmxNodeUpdateArguments();
      var hasCollectionModelChanges = collectionModelChanges != null;
      var collectionChangesElMap = null;

      if (hasCollectionModelChanges)
      {
        collectionChangesElMap = {};
        for (var el in collectionModelChanges)
        {
          var data = collectionModelChanges[el];
          collectionChangesElMap[el] = new adf.mf.api.amx.AmxCollectionChange(data);
        }
      }

      for (var i = 0, size = dependencyArray.length; i < size; ++i)
      {
        var el = dependencyArray[i];
        var valueExpr = adf.mf.internal.el.parser.parse("#{" + el + "}");
        var nodes = adf.mf.api.amx.AmxNode.__getNodesDependentOnElToken(valueExpr);

        for (var n = 0, nodeSize = nodes.length; n < nodeSize; ++n)
        {
          var node = nodes[n];
          var nodeId = node.getId();

          if (isFinestLoggingEnabled)
          {
            adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
              "adf.mf.internal.amx", "_handleBatchDataChangeListener",
              "Node affected by change to EL #{" + el + "}: "+ nodeId);
          }

          var attrNames = node.__getAttributesForElDependency(valueExpr);

          for (var a = 0, asize = attrNames.length; a < asize; ++a)
          {
            var attrName = attrNames[a];

            if (isFinestLoggingEnabled)
            {
              adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
                "adf.mf.internal.amx", "_handleBatchDataChangeListener",
                "Affected attribute: " + attrName);
            }

            markNodeForUpdateArgs.setAffectedAttribute(node, attrName);

            if (hasCollectionModelChanges)
            {
              var collectionChange = collectionChangesElMap[el];

              if (collectionChange != null)
              {
                markNodeForUpdateArgs.setCollectionChanges(nodeId, attrName, collectionChange);
              }
            }
          }

          node.__processTagInstancesForElDependency(markNodeForUpdateArgs, valueExpr);
        }
      }

      affectedNodeCount = markNodeForUpdateArgs.getAffectedNodes().length;
      if (affectedNodeCount > 0)
      {
        if (isFinestLoggingEnabled)
        {
          adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
            "adf.mf.internal.amx", "_handleBatchDataChangeListener",
            affectedNodeCount + " nodes have been affected by the data changes");
        }

        // Call the internal mark node for update function which does not check for being in
        // the critical section since we are already in the critical section
        adf.mf.internal.amx._markNodeForUpdateImpl(markNodeForUpdateArgs);

        // On Android, there is a bug in the web view that changes from the data change events may
        // not be redrawn. So, invoke a callback to invalidate the WebView, forcing the repainting of
        // the WebView. Bug seen in at least the 4.0.3 Android version of the WebView
        if (requiresUiInValidation && window["AdfmfCallback"] != null)
        {
          window.AdfmfCallback.invalidateUi();
        }
      }
    }
    catch (ex)
    {
      adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
        "handleDataChangeImpl", "MSG_BATCH_DATA_CHANGE_FAILED");

      // Only log the exception at a fine level for security reasons
      adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
        "AMX", "handleDataChangeImpl", ex);
    }
    finally
    {
      perfOp.stop();
    }
  };

  amx.clearBindings = function()
  {
    adf.mf.api.amx.AmxNode.__clearBindings();
  };

  var queuedBatchDataChanges = [];
  var queuedCollectionModelChanges = {};

  // Used to prevent bulk loads and queued critical section functions from being processed across navigation boundaries.
  adf.mf.internal.amx._navigationId = 0;
  adf.mf.internal.amx._navigationInProgress = false;

  /**
   * Process the data change queue once the critical section is available.
   * Method is only to be called from the critical section
   * @private
   */
  function processBatchDataChangeQueue()
  {
    // Ensure that there are queued changes
    if (queuedBatchDataChanges.length == 0)
    {
      return;
    }

    var q = queuedBatchDataChanges;
    var cmc = queuedCollectionModelChanges;

    queuedBatchDataChanges = [];
    queuedCollectionModelChanges = {};

    // Process the changes
    handleDataChangeImpl(q, cmc);
  }

  /**
   * Function called from the navigation listener to throw out any queued data changes when
   * a navigation has taken place.
   */
  adf.mf.internal.amx._clearDataChangeQueue = function()
  {
    queuedBatchDataChanges = [];
    queuedCollectionModelChanges = {};
  };

  /**
   * Queue batch data changes and schedule the callback to the processBatchDataChangeQueue.
   * @param {Array.<string>} dependencyArray the array of EL to queue.
   * @param {Object} collectionModelChanges collection model changes
   */
  function queueBatchDataChange(dependencyArray, collectionModelChanges)
  {
    var initialLength = queuedBatchDataChanges.length;

    for (var i = 0, size = dependencyArray.length; i < size; ++i)
    {
      var el = dependencyArray[i];
      // Ensure the EL is only added once
      if (queuedBatchDataChanges.indexOf(el) < 0)
      {
        queuedBatchDataChanges.push(el);
      }

      if (collectionModelChanges != null)
      {
        var collectionChanges = collectionModelChanges[el];
        if (collectionChanges != null)
        {
          var currentCollectionModelChanges = queuedCollectionModelChanges[el];
          if (currentCollectionModelChanges != null)
          {
            // If a value is already present, we cannot merge the changes, so ensure that
            // itemized is false.
            queuedCollectionModelChanges[el] = { "itemized": false };
          }
          else
          {
            queuedCollectionModelChanges[el] = collectionChanges;
          }
        }
      }
    }

    // If the queue was empty, queue the callback to the process function
    // to handle the queued changes once the critical section is available
    if (initialLength == 0)
    {
      adf.mf.internal.amx._queueCriticalSectionFunction(
        processBatchDataChangeQueue,
        this,
        false);
    }
  }
})();
