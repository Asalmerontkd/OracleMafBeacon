/* Copyright (c) 2011, 2016, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* ---------------- amx-nodeUtils.js -------------------- */
/* ------------------------------------------------------ */

(function()
{
  /**
   * Object used by the functions in markNodeForUpdate to pass the state
   * of the changes between the functions.
   * @constructor
   * @private
   */
  function AmxNodeChangesResults()
  {
    this._affectedNodeIds = {};
    this._affectedNodes = [];

    this._nodesToRecreate = [];

    this._descendentChanges = {};
    this._ancestorNodes = [];

    this._attributeChanges = {};

    this._changeResult = {};

    this._initialStates = {};

    this._hasChanges = false;
  }

  adf.mf.internal.amx.AmxNodeChangesResults = AmxNodeChangesResults;

  AmxNodeChangesResults.prototype =
  {
    /**
     * Get if there are changes to any nodes
     * @return {Boolean} true if any nodes were updated
     */
    hasChanges: function()
    {
      return this._hasChanges;
    },

    /**
     * Get the array of AMX nodes that have been changed and need to
     * be visited during the application of render changes.
     * @return {Array.<adf.mf.api.amx.AmxNode>} array of AMX nodes to visit
     */
    getAffectedNodes: function()
    {
      return this._affectedNodes;
    },

    /**
     * Get the result of the updateChildren function for an affected AMX node.
     * @param {number} amxNodeId the ID of the AMX node
     * @return {(number|null)} the result or null. One of the adf.mf.api.amx.AmxNodeChangeResult
     *         constants
     */
    getChangeResult: function(amxNodeId)
    {
      return this._changeResult[amxNodeId];
    },

    /**
     * Get the change result for a given AMX node ID
     * @param {number} amxNodeId the ID of the AMX node
     * @return {(adf.mf.api.amx.AmxAttributeChange|null)} the attribute change object or null
     *         if the node was not affected
     */
    getAttributeChanges: function(amxNodeId)
    {
      return this._attributeChanges[amxNodeId];
    },

    /**
     * Get the AMX nodes that need to be re-created
     * @return {Array.<adf.mf.api.amx.AmxNode>} array of AMX nodes to re-create
     */
    getAmxNodesToRecreate: function()
    {
      return this._nodesToRecreate;
    },

    /**
     * Get the AMX nodes that have been queued to see if they can handle changes to descendents
     * @return {Array.<adf.mf.api.amx.AmxNode>} array of AMX ancestor nodes
     */
    getAmxNodesForDescendentChanges: function()
    {
      return this._ancestorNodes;
    },

    /**
     * Get the AMX descedent changes for a given ancestor AMX node ID
     * @param {number} amxNodeId the ID of the ancestor AMX node
     * @return {(adf.mf.api.amx.AmxDescendentChanges|null)} the changes object or null if the node
     *         has no descendent changes.
     */
    getDescendentChanges: function(amxNodeId)
    {
      return this._descendentChanges[amxNodeId];
    },

    /**
     * Notifies this object that a node has been recreated
     * @param {adf.mf.api.amx.AmxNode} oldAmxNode node that was re-created
     * @param {adf.mf.api.amx.AmxNode} newAmxNode re-created node
     */
    amxNodeRecreated: function(oldAmxNode, newAmxNode)
    {
      var index = this._affectedNodes.indexOf(oldAmxNode);
      if (index != -1)
      {
        this._affectedNodes[index] = newAmxNode;
      }

      var wasRendered = oldAmxNode.isRendered();

      if (wasRendered)
      {
        // If the node was rendered, and still is, we will just swap the root DOM
        // in place
        var id = newAmxNode.getId();
        if (newAmxNode.isReadyToRender())
        {
          this._changeResult[id] = adf.mf.api.amx.AmxNodeChangeResult["RERENDER"];
        }
        else
        {
          // Otherwise we need to mark the parent to be re-rendered
          var initialState = this._initialStates[id];
          var attributeChanges = this._attributeChanges[id];
          var renderedAmxNode = newAmxNode.__getClosestRenderedNode(true);

          this._markNodeAffected(renderedAmxNode);
          this._queueCallToAncestor(newAmxNode, initialState, attributeChanges, renderedAmxNode);
        }
      }
    },

    /**
     * Called after calling the ancestor nodes getDescendentChangeAction function to see how
     * a change should be handled.
     * @param {adf.mf.api.amx.AmxNode} amxNode the ancestor AMX node.
     * @param {number} descendentChangeResult the value returned from getDescendentChangeAction
     */
    setDescendentChangesResult: function(
      amxNode,
      descendentChangeResult)
    {
      var amxNodeId = amxNode.getId();
      var currentResult = this._changeResult[amxNodeId];

      // If the node is not already marked for another change or if the
      // descendent changes require a more invasive change, then store the result
      // from asking about the descendent refresh changes
      if (currentResult == null || descendentChangeResult > currentResult)
      {
        this._changeResult[amxNodeId] = descendentChangeResult;

        if (descendentChangeResult != adf.mf.api.amx.AmxNodeChangeResult["NONE"])
        {
          this._markNodeAffected(amxNode);
        }
      }
    },

    /**
     * During the application of changes, adds a change result to this object.
     * @param {adf.mf.api.amx.AmxNode} amxNode the affected AMX node
     * @param {number} initialState one of the AMX node state constants representing the node
     *        state before the attributes and children were updated
     * @param {adf.mf.api.amx.AmxAttributeChange} attributeChanges the attribute changes
     *        object for the AMX node
     * @param {number} changeResult the change result returned from updateChildren
     */
    addChangeResult: function(
      amxNode,
      initialState,
      attributeChanges,
      changeResult)
    {
      // Get the closest ancestor rendered AMX node
      var renderedAmxNode = amxNode.__getClosestRenderedNode(true);

      var id = amxNode.getId();

      this._initialStates[id] = initialState;
      this._attributeChanges[id] = attributeChanges;

      this._hasChanges = true;

      // See if this is a recreate result
      if (changeResult == adf.mf.api.amx.AmxNodeChangeResult["REPLACE"])
      {
        this._nodesToRecreate.push(amxNode);
      }

      if (renderedAmxNode == null)
      {
        // The rendered AMX node will be null if the page has not rendered yet, in that case
        // the change result does not matter
        return;
      }

      // Mark the rendered AMX node as one to visit later if the change result is not NONE
      if (changeResult != adf.mf.api.amx.AmxNodeChangeResult["NONE"])
      {
        this._markNodeAffected(renderedAmxNode);
      }

      if (renderedAmxNode === amxNode)
      {
        // Honor the change result if the affected node is currently rendered
        this._changeResult[id] = changeResult;
      }
      else
      {
        // Allow the rendered ancestor to be notified of the change
        this._queueCallToAncestor(amxNode, initialState, attributeChanges, renderedAmxNode);
      }
    },

    _markNodeAffected: function(amxNode)
    {
      var id = amxNode.getId();
      if (this._affectedNodeIds[id] !== true)
      {
        this._affectedNodeIds[id] = true;
        this._affectedNodes.push(amxNode);
      }
    },

    _queueCallToAncestor: function(
      amxNode,
      initialState,
      attributeChanges,
      renderedAmxNode)
    {
      var renderedId = renderedAmxNode.getId();

      // If the rendered AMX node is not the changed AMX node, then we need
      // to ask the rendered node if it wishes to perform a refresh instead
      // of being rerendered
      var changes = this._descendentChanges[renderedId];

      // See if this parent has already been added as one to be called
      if (changes == null)
      {
        // Create a new changes object to be used later
        changes = new adf.mf.api.amx.AmxDescendentChanges();
        this._descendentChanges[renderedId] = changes;
        this._ancestorNodes.push(renderedAmxNode);
      }

      // Add the child's attribute changes and other state to the changes object
      // so that the parent can decide if it can refresh based on the results
      changes.__addAmxNode(
        amxNode,
        initialState,
        attributeChanges);

      // Note that we do not actually call the parent at this point, that is done
      // in a later pass
    }
  };

  /**
   * @deprecated
   */
  adf.mf.internal.amx.markNodeForUpdate = function(value)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "markNodeForUpdate", "MSG_DEPRECATED", "adf.mf.internal.amx.markNodeForUpdate",
      "adf.mf.api.amx.markNodeForUpdate");
    return adf.mf.api.amx.markNodeForUpdate.apply(this, arguments);
  };

  /**
   * Function for TypeHandlers to notify the framework of a state change to an AmxNode that requires the
   * AmxNode hierarchy to be updated at that node and below. If a custom createChildrenNodes method
   * exists on the TypeHandlers, it will be called again for these AmxNode. This will allow AmxNode that
   * stamp their children to add new stamps due to a user change.
   * The refresh method will be called on the AmxNode with the provided properties if the AmxNode is
   * ready to render. If the AmxNode is not ready to render, the framework will wait for any EL to be
   * resolved and the refresh method will be called once all the data is available.
   * @param {adf.mf.api.amx.AmxNodeUpdateArguments} args the change arguments
   */
  adf.mf.api.amx.markNodeForUpdate = function(args)
  {
    // See if the function was called with the deprecated API
    if (!(args instanceof adf.mf.internal.amx.AmxNodeUpdateArguments))
    {
      adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
        "adf.mf.api.amx.markNodeForUpdate", "MSG_DEPRECATED",
        "Passing nodes and objects as arguments",
        "Pass one adf.mf.api.amx.AmxNodeUpdateArguments object");

      // Use a temporary variable until we are done reading from arguments
      var convertedArgs = new adf.mf.internal.amx.AmxNodeUpdateArguments();

      for (var arg = 0, argc = arguments.length; arg < argc; arg += 2)
      {
        amxNode = arguments[arg];
        affectedAttributes = arguments[arg + 1];

        for (var attrName in affectedAttributes)
        {
          convertedArgs.setAffectedAttribute(amxNode, attrName);
        }
      }

      // Now update the args variable
      args = convertedArgs;
    }

    adf.mf.internal.amx._queueCriticalSectionFunction(
      adf.mf.internal.amx._markNodeForUpdateImpl,
      this,
      true,
      args);
  };

  adf.mf.internal.amx._markNodeForUpdateImpl = function(
    args)
  {
    // Check if the update has been canceled since it was queued
    if (args.isCanceled())
    {
      if (adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST))
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
          "adf.mf.internal.amx._markNodeForUpdateImpl", "Canceled",
          "The node update has been canceled");
      }

      return;
    }

    // Begin tracking EL cache misses in a batch (only if not in the mock data environment)
    if (!adf.mf.environment.profile.mockData)
    {
      adf.mf.el.startGetValueBatchRequest();
    }

    var perfOp = adf.mf.internal.perf.startMonitorOperation("Mark node for update", adf.mf.log.level.FINE,
      "adf.mf.api.amx.markNodeForUpdate");

    var rootNode = adf.mf.api.amx.getPageRootNode();
    try
    {
      // First, ensure the nodes are sorted
      var amxNodes = args.getAffectedNodes();
      if (amxNodes.length > 1)
      {
        adf.mf.api.amx.AmxNode.__sortNodesByDepth(amxNodes);
      }

      // Make a first pass at the nodes. In this pass we are only applying attribute
      // changes and initializing the AMX node hierarchy, no rendering should be done
      // at this point.
      var changeResults = applyUpdatesToAmxNodeHierarchy(rootNode, args);

      // See if any nodes are marked to be re-created
      if (changeResults.getAmxNodesToRecreate().length > 0)
      {
        // Make a second pass to recreate any AMX nodes marked for recreation by
        // the type handler
        recreateRequestedAmxNodes(rootNode, changeResults);

        amxNodes = changeResults.getAffectedNodes();
        // Ensure the nodes are still in the correct hierarchical order
        if (amxNodes.length > 1)
        {
          adf.mf.api.amx.AmxNode.__sortNodesByDepth(amxNodes);
        }
      }

      // Now process any ancestor nodes that are re-rendered to handle changes
      // to descendent AMX nodes
      processDescendentChanges(
        rootNode,
        changeResults);

      var pageBuildPromiseResolve = adf.mf.internal.amx._pageBuildPromiseResolve;

      if (pageBuildPromiseResolve == null)
      {
        // Only perform re-rendering if the page has been rendered
        applyRenderChanges(
          rootNode,
          changeResults);
      }
      // If the page has not yet been rendered and nodes were affected, then go ahead and resolve
      // the page build promise so the render may take place once the update has completed
      else if (changeResults.hasChanges())
      {
        adf.mf.internal.amx._pageBuildPromiseResolve = null;
        pageBuildPromiseResolve(rootNode);
      }
    }
    catch(e)
    {
      adf.mf.internal.amx.errorHandlerImpl(null, e);
    }
    finally
    {
      try
      {
        // Flush the batch so that any missed EL are sent for loading
        if (!adf.mf.environment.profile.mockData)
        {
          adf.mf.el.flushGetValueBatchRequest();
        }
      }
      catch(e)
      {
        adf.mf.internal.amx.errorHandlerImpl(null, e);
      }

      perfOp.stop();

      adf.mf.internal.amx._pageBusyTracker.checkComplete();
    }
  };

  /**
   * Called by markNodeForUpdate to update the attributes and initialize any new nodes created
   * as a result.
   * @param {adf.mf.api.amx.AmxNode} rootNode the root AMX node of the page
   * @param {adf.mf.api.amx.AmxNodeUpdateArguments} args the information passed to the
   *        mark node for update function
   * @private
   */
  function applyUpdatesToAmxNodeHierarchy(
    rootNode,
    args)
  {
    var isFinestLoggingEnabled = adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST);
    var affectedAmxNodes = args.getAffectedNodes();
    var visitContext = new adf.mf.api.amx.VisitContext({ "amxNodes": affectedAmxNodes });
    var changes = new AmxNodeChangesResults();

    rootNode.visit(
      visitContext,
      function (
        visitContext,
        amxNode)
      {
        var nodeId = amxNode.getId();
        var affectedAttributes = args.getAffectedAttributes(nodeId);

        // Get the attributes that have changed for this node
        if (isFinestLoggingEnabled)
        {
          adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
            "adf.mf.internal.amx", "applyUpdatesToAmxNodeHierarchy",
            "Found node to apply updates. ID: " + nodeId);
        }

        var nodeWasRendered = amxNode.isRendered();

        var initialState = amxNode.getState();

        // Notify the node of the changed attributes
        var collectionChanges = args.getCollectionChanges(nodeId);
        var attributeChanges = amxNode.updateAttributes(affectedAttributes, collectionChanges);

        // Notify the tag instances
        amxNode.__updateTagInstanceAttributes(args);

        // See if the AMX node's converter was affected
        amxNode.__processConverterChanges(args, attributeChanges);

        var state = amxNode.getState();
        if (isFinestLoggingEnabled)
        {
          adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
            "adf.mf.internal.amx", "applyUpdatesToAmxNodeHierarchy",
            "Node attributes have been applied. New node state: " +
            adf.mf.api.amx.AmxNodeStates.getLabelForValue(state));
        }

        if (state == adf.mf.api.amx.AmxNodeStates["UNRENDERED"])
        {
          // Allow the rendered ancestor node to be notified of the change
          changes.addChangeResult(amxNode, initialState, attributeChanges,
            adf.mf.api.amx.AmxNodeChangeResult[nodeWasRendered ? "RERENDER" : "NONE"]);

          // Do not attempt to apply changes to nodes if a parent is not rendered.
          // The node should have removed all the children at this point, so this
          // function does not need to perform that logic.
          return adf.mf.api.amx.VisitResult["REJECT"];
        }

        var skipBuild;
        var changeResult;

        // Do not create or update the children of nodes in the initial state
        if (state != adf.mf.api.amx.AmxNodeStates["INITIAL"])
        {
          if (isFinestLoggingEnabled)
          {
            adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
              "adf.mf.internal.amx", "applyUpdatesToAmxNodeHierarchy",
              "Updating the children of the node");
          }

          // Update the children of the node only if the node is not in the
          // initial state. If it is, then the _buildVisitCallback below
          // will initialize the children
          changeResult = amxNode.updateChildren(attributeChanges);

          // Pick up any changes to the node's state as a result of the updateChildren
          // call.
          state = amxNode.getState();

          // Skip the initialization of the node and descendents if the updateChildren
          // call has caused the state of the node to go back to the initial state.
          // This means that the node's type handler changed the state back to initial
          // as a result of not being able to successfully create its children.
          skipBuild = (state == adf.mf.api.amx.AmxNodeStates["INITIAL"]);

          if (isFinestLoggingEnabled)
          {
            adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
              "adf.mf.internal.amx", "applyUpdatesToAmxNodeHierarchy",
              "New node state: " +
              adf.mf.api.amx.AmxNodeStates.getLabelForValue(state) +
              ". Should the build visit callback be skipped: " + skipBuild +
              ". Update children method returned: " +
              adf.mf.api.amx.AmxNodeChangeResult.getLabelForValue(changeResult));
          }
        }
        else
        {
          changeResult = adf.mf.api.amx.AmxNodeChangeResult["RERENDER"];
          skipBuild = false;
        }

        // Record the change result
        changes.addChangeResult(amxNode, initialState, attributeChanges, changeResult);

        // See if the node has requested to be recreated
        var resultIsRecreate = changeResult == adf.mf.api.amx.AmxNodeChangeResult["REPLACE"];
        if (resultIsRecreate)
        {
          skipBuild = true;
        }

        // Process the children tree under the node to initialize any newly
        // created nodes (does nothing if they are all already rendered or in the
        // unrendered state) as long as the node was able to create its children.
        if (skipBuild == false)
        {
          // Pass in the affected nodes into the visit context. This will allow
          // the _buildVisitCallback to skip any descendent nodes (they will be visited
          // later when they are updated). This improves performance by not visiting
          // the same nodes more than once.
          var contextData = {
            "affectedAmxNodes": affectedAmxNodes,
            "targetNode": amxNode
          };

          amxNode.visit(
            new adf.mf.api.amx.VisitContext({ "data": contextData }),
            adf.mf.internal.amx._buildVisitCallback);

          // Pick up any changes to the state as a result of initialization
          state = amxNode.getState();

          if (isFinestLoggingEnabled)
          {
            adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
              "adf.mf.internal.amx", "applyUpdatesToAmxNodeHierarchy",
              "Node state after invoking the build visit callback: " +
              adf.mf.api.amx.AmxNodeStates.getLabelForValue(state));
          }
        }

        // Do not progress down the hierarchies of nodes that are in the initial state,
        // or are not rendered or if the change result is to replace (recreate) the node
        if (resultIsRecreate ||
          state == adf.mf.api.amx.AmxNodeStates["INITIAL"] ||
          state == adf.mf.api.amx.AmxNodeStates["UNRENDERED"])
        {
          return adf.mf.api.amx.VisitResult["REJECT"];
        }
        else
        {
          return adf.mf.api.amx.VisitResult["ACCEPT"];
        }
      });

    return changes;
  }

  /**
   * Called by markNodeForUpdate to recreate any AMX nodes and their descendants.
   * @private
   */
  function recreateRequestedAmxNodes(
    rootNode,
    changeResults)
  {
    var isFinestLoggingEnabled = adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST);

    // For each node, we actually only want the parent node in context. Therefore, go through the
    // array and collect all of the parent nodes.
    var childNodesByParentId = {};
    var affectedNodeParents = [];
    var amxNode;
    var parentId;

    var amxNodes = changeResults.getAmxNodesToRecreate();

    for (var i = 0, size = amxNodes.length; i < size; ++i)
    {
      amxNode = amxNodes[i];
      if (isFinestLoggingEnabled)
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
          "adf.mf.internal.amx", "recreateRequestedAmxNodes",
          "Will attempt to recreate node with ID " + amxNode.getId());
      }

      var parent = amxNode.getParent();
      parentId = parent.getId();
      var children = childNodesByParentId[parentId];
      if (children == null)
      {
        children = [ amxNode ];
        childNodesByParentId[parentId] = children;
        affectedNodeParents.push(parent);
      }
      else
      {
        children.push(amxNode);
      }
    }

    // Now visit each parent
    rootNode.visit(
      new adf.mf.api.amx.VisitContext({ "amxNodes": affectedNodeParents }),
      function(
        visitContext,
        parentAmxNode)
      {
        var parentId = parentAmxNode.getId();
        var children = childNodesByParentId[parentId];
        var recreatedNodes = [];
        var i, size;

        // Loop through each child node that has changes
        for (i = 0, size = children.length; i < size; ++i)
        {
          var amxNode = children[i];
          if (isFinestLoggingEnabled)
          {
            adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
              "adf.mf.internal.amx", "recreateRequestedAmxNodes",
              "Re-creating node " + amxNode.getId());
          }

          var tag = amxNode.getTag();
          var stampKey = amxNode.getStampKey();
          var newAmxNode = tag.buildAmxNode(parentAmxNode, stampKey);

          // Replace the child
          if (parentAmxNode.replaceChild(amxNode, newAmxNode))
          {
            // Push the nodes onto an array to process after initialization
            recreatedNodes.push([ amxNode, newAmxNode ]);
          }
          else
          {
            // TODO: log warning
          }
        }

        // Initialize the new nodes and create their children by visiting
        // the parent so that the parent is put into context
        parentAmxNode.visit(
          new adf.mf.api.amx.VisitContext(),
          adf.mf.internal.amx._buildVisitCallback);

        // Notify the change results of the new children (has to be done after node initialization)
        for (i = 0, size = recreatedNodes.length; i < size; ++i)
        {
          var arr = recreatedNodes[i];
          // Replace the node in the change results object
          changeResults.amxNodeRecreated(arr[0], arr[1]);
        }

        // Return accept since we are visiting the parent of the node to replace and not the node
        // itself.
        return adf.mf.api.amx.VisitResult["ACCEPT"];
      });
  }

  /**
   * Called by markNodeForUpdate to see if ancestor AMX nodes wish to handle changes to non-rendered
   * descendent AMX nodes.
   * @private
   */
  function processDescendentChanges(
    rootNode,
    changeResults)
  {
    var amxNodes = changeResults.getAmxNodesForDescendentChanges();
    var visitContext = new adf.mf.api.amx.VisitContext({ "amxNodes": amxNodes });

    rootNode.visit(
      visitContext,
      function (
        visitContext,
        amxNode)
      {
        var id = amxNode.getId();
        var descendentChanges = changeResults.getDescendentChanges(id);
        var descendentChangeAction = amxNode.__getDescendentChangeAction(descendentChanges);

        // We do not support a value of REPLACE for child refresh changes
        if (descendentChangeAction == adf.mf.api.amx.AmxNodeChangeResult["REPLACE"])
        {
          // TODO: log error
          descendentChangeAction = adf.mf.api.amx.AmxNodeChangeResult["RERENDER"];
        }

        changeResults.setDescendentChangesResult(amxNode, descendentChangeAction);

        return adf.mf.api.amx.VisitResult["ACCEPT"];
      });
  }

  adf.mf.internal.amx._buildVisitCallback = function (
    visitContext,
    node)
  {
    var state = node.getState();
    var contextData = visitContext.data;
    if (contextData != null)
    {
      var targetAmxNode = contextData["targetNode"];
      if (targetAmxNode != node)
      {
        // Now see if the node being visited is actually a descendant that
        // will be visited later by another change.
        var affectedAmxNodes = contextData["affectedAmxNodes"];
        if (affectedAmxNodes.indexOf(node) >= 0)
        {
          // No need to visit this node now
          return adf.mf.api.amx.VisitResult["REJECT"];
        }
      }
    }

    if (state == adf.mf.api.amx.AmxNodeStates["UNRENDERED"])
    {
      // If the node is unrendered, nothing more needs to be done
      return adf.mf.api.amx.VisitResult["REJECT"];
    }

    if (state != adf.mf.api.amx.AmxNodeStates["INITIAL"])
    {
      // Only initialize nodes in the initial state. All other states
      // are updated by the data change framework
      return adf.mf.api.amx.VisitResult["ACCEPT"];
    }

    // Initialize the node. This will populate the attributes,
    // both static and EL driven and also create the children
    node.init();

    // Check to see the new state of the node
    switch (node.getState())
    {
      case adf.mf.api.amx.AmxNodeStates["INITIAL"]:
        // Store on the context that a cache miss occurred:
        visitContext._allNodesReadyToRender = false;

        // Do not process the children of a node in the initial state:
        return adf.mf.api.amx.VisitResult["REJECT"];

      case adf.mf.api.amx.AmxNodeStates["UNRENDERED"]:
        // Do not process the children of unrendered nodes:
        return adf.mf.api.amx.VisitResult["REJECT"];

      case adf.mf.api.amx.AmxNodeStates["WAITING_ON_EL_EVALUATION"]:
        // Store on the context that a cache miss occurred:
        visitContext._allNodesReadyToRender = false;

        // Process the children (type handlers must set the node's state
        // to initial to stop children creation and processing):
        return adf.mf.api.amx.VisitResult["ACCEPT"];

      default:
        return adf.mf.api.amx.VisitResult["ACCEPT"];
    }
  };

  /**
   * Called by markNodeForUpdate to re-render any nodes and invoke and refresh methods
   * as appropriate.
   * @private
   */
  function applyRenderChanges(
    rootNode,
    changeResults)
  {
    var isFinestLoggingEnabled = adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST);
    var affectedNodes = changeResults.getAffectedNodes();
    var visitContext = new adf.mf.api.amx.VisitContext({ "amxNodes": affectedNodes });
    var perf = adf.mf.internal.perf.startMonitorCall(
      "Apply render changes", adf.mf.log.level.FINER, "adf.mf.internal.amx:applyRenderChanges");

    // set flag to prevent independent processing of the init and postDisplay queues
    // only wait if there is some rerender event which enqueues the rendered node into
    // the processing queue and process these queues after the whole refresh is complete
    amx.mustProcessQueues = false;

    rootNode.visit(
      visitContext,
      function (
        visitContext,
        amxNode)
      {
        var id = amxNode.getId();
        var changeResult = changeResults.getChangeResult(id);

        if (isFinestLoggingEnabled)
        {
          adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
            "adf.mf.internal.amx", "applyRenderChanges",
            "Found node to apply render changes. ID: " + id +
            ". Change result: " +
            adf.mf.api.amx.AmxNodeChangeResult.getLabelForValue(changeResult));
        }

        switch (changeResult)
        {
          case adf.mf.api.amx.AmxNodeChangeResult["REFRESH"]:
            var attributeChanges = changeResults.getAttributeChanges(id);
            var descendentChanges = changeResults.getDescendentChanges(id);

            // Don't pass null as the attribute changes, but instead pass an empty object
            // so that it is easier to work with
            if (attributeChanges == null)
            {
              attributeChanges = new adf.mf.api.amx.AmxAttributeChange();
            }

            amxNode.refresh(attributeChanges, descendentChanges);
            if (isFinestLoggingEnabled)
            {
              adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
                "adf.mf.internal.amx", "applyRenderChanges",
                "Completed the refresh of node " + id);
            }
            break;

          case adf.mf.api.amx.AmxNodeChangeResult["RERENDER"]:
            amxNode.rerender();
            if (isFinestLoggingEnabled)
            {
              adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
                "adf.mf.internal.amx", "applyRenderChanges",
                "Completed the re-render of node " + id);
            }

            // Do not perform operations on the children
            return adf.mf.api.amx.VisitResult["REJECT"];
        }

        if (isFinestLoggingEnabled)
        {
          adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
            "adf.mf.internal.amx", "applyRenderChanges",
            "Completed the processing of the changes for node " + id);
        }

        return adf.mf.api.amx.VisitResult["ACCEPT"];
      });

      // now process the queues at once to init and postDisplay
      // all newly rendered nodes
      amx.processAndCleanInitQueue();
      amx.processAndCleanPostDisplayQueue();
      // set flag that the single rerender function call on the amxNode should also invoke
      // processing of the init and postDisplay queues
      amx.mustProcessQueues = true;

    perf.stop();
  }

  // ------ Node enums ------ //
  /**
   * @namespace
   */
  adf.mf.api.amx.AmxNodeStates =
  {
    /** Initial state. The node has been created but not populated */
    "INITIAL": 0,
    /** EL based attributes needed for rendering have not been fully loaded yet */
    "WAITING_ON_EL_EVALUATION": 1,
    /** EL attributes have been loaded, the node has not yet been rendered */
    "ABLE_TO_RENDER": 2,
    /**
     * The EL is not fully loaded but the node has partially rendered itself (reserved for future
     * use)
     */
    "PARTIALLY_RENDERED": 3,
    /** The node has been fully rendered */
    "RENDERED": 4,
    /** The node is not to be rendered */
    "UNRENDERED": 5,

    /**
     * Method that may be used for debugging (should not be used for normal usage) to get
     * the state label for a state value
     *
     * @param {int} state one of the node state values
     * @return {string|null} the label or null if not a valid state
     */
    getLabelForValue: function(state)
    {
      for (var label in adf.mf.api.amx.AmxNodeStates)
      {
        if (adf.mf.api.amx.AmxNodeStates[label] == state)
        {
          return label;
        }
      }

      return null;
    }
  };

  /**
   * @namespace
   */
  adf.mf.api.amx.AmxNodeChangeResult =
  {
    /**
     * Allows a type handler that is rendered to take no action in response to an attribute change
     * on a non-rendered descendent AMX node.
     */
    "NONE": 0,

    /**
     * The type handler is able to handle the change to AMX node and its children AMX nodes and
     * will be able to update DOM in response to a change after a call to the refresh method.
     */
    "REFRESH": 1,

    /**
     * The type handler is able to handle the change to the AMX node and its children AMX nodes,
     * but the HTML should only be recreated, there is no need to modify the node hierarchy. The
     * refresh method will not be called on the type handler.
     */
    "RERENDER": 2,

    /**
     * The type handler cannot handle the change. The HTML as well as the
     * node hierarchy should be recreated. This value may only be returned from the updateChildren
     * method on a type handler and cannot be returned from the getDescendentChangeAction method.
     */
    "REPLACE": 3,

    /**
     * Method that may be used for debugging (should not be used for normal usage) to get
     * the label for a constant value
     *
     * @param {int} result one of the change result values
     * @return {string|null} the label or null if not a valid change result
     */
    getLabelForValue: function(result)
    {
      for (var label in adf.mf.api.amx.AmxNodeChangeResult)
      {
        if (adf.mf.api.amx.AmxNodeChangeResult[label] == result)
        {
          return label;
        }
      }

      return null;
    }
  };

  /**
   * @namespace
   */
  adf.mf.api.amx.AmxNodeCreateChildrenNodesResult =
  {
    /**
     * The type handler could not create the children yet.
     */
    "NONE": 0,

    /**
     * The type handler created the children.
     */
    "HANDLED": 1,

    /**
     * The type handler generated a placeholder to be shown until the real children can be created.
     */
    "DEFERRED": 2,

    /**
     * Method that may be used for debugging (should not be used for normal usage) to get
     * the label for a constant value
     *
     * @param {int} result one of the children node result values
     * @return {string|null} the label or null if not a valid result
     */
    getLabelForValue: function(result)
    {
      for (var label in adf.mf.api.amx.AmxNodeCreateChildrenNodesResult)
      {
        if (adf.mf.api.amx.AmxNodeCreateChildrenNodesResult[label] == result)
        {
          return label;
        }
      }

      return null;
    }
  };

  /**
   * @namespace
   */
  adf.mf.api.amx.AmxNodeNotifications =
  {
    /**
     * Notification type broadcast to a type handler when an AMX node is about to be removed from
     * the node hierarchy.
     */
    "PRE_REMOVAL": 0,
    /**
     * Notification type broadcast to a type handler when an AMX node is going from a rendered to an
     * unrendered state.
     */
    "UNRENDERED": 1
  };
  // ------ /Node enums ------ //

  // ------ Visit ------ //
  /**
   * Constant values for visit results.
   * @namespace
   */
  adf.mf.api.amx.VisitResult =
  {
    /** Continue visiting the children of the current node. */
    "ACCEPT": 0,
    /** Skip the children of the current node but continue visiting. */
    "REJECT": 1,
    /** Stop visiting */
    "COMPLETE": 2
  };

  /**
   * A visit context object to direct tree visitation.
   * <p>
   * Parameter properties:
   * <dl>
   *   <dt>amxNodes</dt>
   *   <dd>An array of AMX nodes to visit</dd>
   * </dl>
   * @param {{amxNodes: Array.<adf.mf.api.amx.AmxNode>, data: Object}} params An object
   *        containing key/value pairs to populate the visit context. If the "data" object
   *        is passed, it may be retrieved in the callback via the "data" field value.
   * @constructor adf.mf.api.amx.VisitContext
   */
  function VisitContext(params)
  {
    this._walk = null;
    this._visit = null;

    if (params != null)
    {
      // Allow custom data to be stored on the context
      this.data = params["data"];

      var nodes = params["amxNodes"];
      if (nodes != null)
      {
        this._visit = nodes;
        this._walk = [];
        for (var i = 0, size = nodes.length; i < size; ++i)
        {
          for (var n = nodes[i]; n != null; n = n.getParent())
          {
            if (this._walk.indexOf(n) >= 0)
            {
              break;
            }

            this._walk.push(n);
          }
        }
      }
    }
    else
    {
      this.data = null;
    }
  }

  adf.mf.api.amx.VisitContext = VisitContext;

  adf.mf.api.amx.VisitContext.prototype =
  {
    /**
     * Get if all nodes should be visited.
     * @return {boolean} true if all nodes should be visited
     */
    isVisitAll: function()
    {
      return this._visit == null;
    },

    /**
     * Get the nodes that should be walked during visitation. This list does not necessarily
     * include the nodes that should be visited (callback invoked).
     * @return {Array.<adf.mf.api.amx.AmxNode>} array of nodes that should be walked.
     */
    getNodesToWalk: function()
    {
      return this._walk;
    },

    /**
     * Get the list of nodes to visit.
     * @return {Array.<adf.mf.api.amx.AmxNode>} array of nodes that should be visited.
     */
    getNodesToVisit: function()
    {
      return this._visit;
    },

    /**
     * Convenience function to determine what child AMX nodes, including facets, if any,
     * should be walked of the given parent AMX node. Allows for type handlers to optimize how to
     * walk the children if not all are being walked.
     *
     * @param {adf.mf.api.amx.AmxNode} parentNode the parent node
     * @return {(Array.<adf.mf.api.amx.AmxNode>|null)} array of the children to walk, may be empty.
     *         returns null if all the children should be visited (isVisitAll is true)
     */
    getChildrenToWalk: function(parentNode)
    {
      if (this._walk == null)
      {
        return null;
      }

      return this._walk.filter(
        function(node, index, array)
        {
          return node.getParent() == parentNode;
        });
    }
  };
  // ------ /Visit ------ //
  // ------ AMX Collection change ------ //
  function AmxCollectionChange(data)
  {
    this._itemized = data["itemized"];
    this._hasMoreKeysChanged = data["hasMoreKeysChanged"] == true;

    if (this._itemized)
    {
      this._created = [];
      this._deleted = [];
      this._updated = [];
      this._dirtied = [];

      var i;
      var size;

      var created = data["created"];
      if (created != null)
      {
        for (i = 0, size = created.length; i < size; ++i)
        {
          var obj = created[i];
          this._created.push(obj["key"]);
          // Note: In a future version we may need to pull more information off of the "obj"
        }
      }

      var updated = data["updated"];
      if (updated != null)
      {
        for (i = 0, size = updated.length; i < size; ++i)
        {
          this._updated.push(updated[i]);
        }
      }

      var deleted = data["deleted"];
      if (deleted != null)
      {
        for (i = 0, size = deleted.length; i < size; ++i)
        {
          this._deleted.push(deleted[i]);
        }
      }

      var dirtied = data["dirtied"];
      if (dirtied != null)
      {
        for (i = 0, size = dirtied.length; i < size; ++i)
        {
          this._dirtied.push(dirtied[i]);

          // It is possible for the embedded side to send both dirtied and updated
          // at the same time. Check for this, and remove the key from the updated
          // if present
          var index = this._updated.indexOf(dirtied[i]);
          if (index >= 0)
          {
            this._updated.splice(index, 1);
          }
        }
      }
    }
  }

  adf.mf.api.amx.AmxCollectionChange = AmxCollectionChange;

  AmxCollectionChange.prototype =
  {
    /**
     * Return true if the flag has changed marking if more rows are available or not
     * has changed state.
     */
    hasMoreKeysChanged: function()
    {
      return this._hasMoreKeysChanged;
    },

    /**
     * Return if the change to the collection may be itemized
     * @return {boolean} true if the change may be itemized
     */
    isItemized: function()
    {
      return this._itemized;
    },

    /**
     * Get an array of the keys that were created.
     * @return {Array.<string>|null} created keys or null if the change cannot be itemized
     */
    getCreatedKeys: function()
    {
      return this._itemized ? this._created : null;
    },

    /**
     * Get an array of the keys that were removed.
     * @return {Array.<string>|null} the array of keys or null if the change cannot be itemized
     */
    getDeletedKeys: function()
    {
      return this._itemized ? this._deleted : null;
    },

    /**
     * Get an array of the keys that were updated.
     * @return {Array.<string>|null} the array of keys or null if the change cannot be itemized
     */
    getUpdatedKeys: function()
    {
      return this._itemized ? this._updated : null;
    },

    /**
     * Get an array of the keys that were dirtied.
     * @return {Array.<string>|null} the array of keys or null if the change cannot be itemized
     */
    getDirtiedKeys: function()
    {
      return this._itemized ? this._dirtied : null;
    }
  };
  // ------ /AMX Collection change ------ //

  // ------ AMX Attribute change ------ //
  /**
   * Object to allow type handlers to determine the changes that have been made during a data change
   * event.
   */
  function AmxAttributeChange()
  {
    this._changedAttributes = {};
    this._oldValues = {};
    this._length = 0;
    this._collectionChanges = {};
    this._custom = {};
  }
  adf.mf.api.amx.AmxAttributeChange = AmxAttributeChange;

  AmxAttributeChange.prototype =
  {
    /**
     * Get a custom value stored by setCustomValue
     * @param {string} key the key
     * @return {(Object|null)} the object or null if not set
     */
    getCustomValue: function(key)
    {
      return this._custom[key];
    },

    /**
     * Set a custom value. This is useful for a type handler to "pass" information between the
     * updateChildren method and the refresh method.
     * @param {string} key the key
     * @param {Object} value the value to store
     */
    setCustomValue: function(key, value)
    {
      return this._custom[key] = value;
    },

    /**
     * Get the names of the attributes that have been affected during the current change.
     * @return {Array.<string>} array of the attribute names
     */
    getChangedAttributeNames: function()
    {
      return Object.keys(this._changedAttributes);
    },

    /**
     * Check if the attribute change is a collection change
     * @param {string} name the attribute name
     * @return {boolean} true if the change is a collection change
     */
    isCollectionChange: function(name)
    {
      return this._collectionChanges[name] != null;
    },

    /**
     * Get the collection model change information for an attribute
     * @param {string} name the attribute name
     * @return {(adf.mf.api.amx.AmxCollectionChange|null)} the change object if available
     */
    getCollectionChange: function(name)
    {
      var change = this._collectionChanges[name];
      return change == null ? null : change;
    },

    /**
     * Get the value of the attribute before the change was made
     * @param {string} name the attribute name
     */
    getOldValue: function(name)
    {
      return this._oldValues[name];
    },

    /**
     * Check if the attribute with the given name has changed.
     * @param {string} name the attribute name
     */
    hasChanged: function(name)
    {
      return this._changedAttributes[name] == true;
    },

    /**
     * Get the number of attribute changes
     */
    getSize: function()
    {
      return this._length;
    },

    /**
     * Mark an attribute as having been changed
     * @param {string} name the attribute name
     * @param {Object} oldValue the attribute's old value
     * @param {(adf.mf.api.amx.AmxCollectionChange|null)} collectionChanges the collection model
     *        change information if applicable
     * @ignore
     */
    __addChangedAttribute: function(name, oldValue, collectionChanges)
    {
      if (this.hasChanged(name) == false)
      {
        ++this._length;
        this._changedAttributes[name] = true;
      }
      this._oldValues[name] = oldValue;

      if (collectionChanges != null)
      {
        this._collectionChanges[name] = collectionChanges;
      }
    }
  };
  // ------ /AMX Attribute change ------ //

  // ------ AMX children changes ------ //
  function AmxDescendentChanges()
  {
    this._amxNodes = [];
    this._amxNodeChanges = {};
    this._previousStates = {};
  }

  adf.mf.api.amx.AmxDescendentChanges = AmxDescendentChanges;

  AmxDescendentChanges.prototype =
  {
    /**
     * Get the un-rendered changed descendent AMX nodes.
     * @return {Array.<adf.mf.api.amx.AmxNode>} array of AMX nodes that have changed
     */
    getAffectedNodes: function()
    {
      return this._amxNodes;
    },

    /**
     * Get the changes for a given AMX node.
     * @param {adf.mf.api.amx.AmxNode} amxNode the descendent AMX node that was changed
     * @return {adf.mf.api.amx.AmxAttributeChange} the changes that were made to the descendent node
     */
    getChanges: function(amxNode)
    {
      var id = amxNode.getId();
      return this._amxNodeChanges[id];
    },

    /**
     * Get the state of the descendent node before the changes were applied.
     * @param {adf.mf.api.amx.AmxNode} amxNode the descendent AMX node that was changed
     * @return {number} one of the adf.mf.api.amx.AmxNodeStates constant values
     */
    getPreviousNodeState: function(amxNode)
    {
      var id = amxNode.getId();
      return this._previousStates[id];
    },

    __addAmxNode: function(
      amxNode,
      previousState,
      attributeChanges)
    {
      var id = amxNode.getId();
      this._amxNodes.push(amxNode);
      this._previousStates[id] = previousState;
      this._amxNodeChanges[id] = attributeChanges;
    }
  };
  // ------ /AMX children changes ------ //
})();
