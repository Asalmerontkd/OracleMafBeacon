/* Copyright (c) 2011, 2016, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* ------------------- amx-core.js ---------------------- */
/* ------------------------------------------------------ */

// ------ amx UI ------ //
(function()
{
  amx.hooks = {};

  // ------ Public API ------ //

  var initQueue = [];
  var postDisplayQueue = [];

  /**
   * This should only be called by adf.mf.api.amx.removeDomNode().
   * Remove an AMXNode for a given DOM node. Calls any pre-destroy and destroy methods
   * on the type handlers for nodes removed as a result of this call and then removes
   * the HTML from the page.
   * @param  {Node} domNode the HTML DOM node to remove. Must be a root DOM node for an
   *         AMX node.
   * @return {boolean} true if the node is a DOM node that represents an AMX node and
   *         was removed.
   */
  adf.mf.internal.amx.removeAmxDomNode = function(domNode)
  {
    var amxNode = adf.mf.internal.amx._getNonPrimitiveElementData(domNode, "amxNode");
    if (amxNode != null)
    {
      adf.mf.internal.amx.processPreDestroy(domNode);
      adf.mf.internal.amx.processDestroy(domNode);
      return true;
    }

    return false;
  };

  adf.mf.internal.amx.processPreDestroy = function(parent)
  {
    // Find all elements that have a preDestroy implementation (including parent)
    var childrenWithPreDestroy = parent.querySelectorAll(".amx-has-predestroy");

    var handlePreDestroy =
      function(domNode)
      {
        var amxNode = adf.mf.internal.amx._getNonPrimitiveElementData(domNode, "amxNode");
        var nodeTypeHandler = amxNode.getTypeHandler();
        if (nodeTypeHandler && nodeTypeHandler.preDestroy)
        {
          // Prevent duplicate preDestroy calls:
          if (domNode.getAttribute("data-predestroyed") == null)
          {
            domNode.setAttribute("data-predestroyed", true);

            /**
             * Renderer function so you can be notified just before the current view is destroyed;
             * when about to navigate to a new view.
             * @param domNode the root DOM node associated with this renderer
             * @param amxNode the AMX component object associated with this renderer
             */
            nodeTypeHandler.preDestroy(domNode, amxNode);
          }
        }
      };

    if (parent.classList.contains("amx-has-predestroy"))
      handlePreDestroy(parent);
    for (var i=0, count=childrenWithPreDestroy.length; i<count; ++i)
      handlePreDestroy(childrenWithPreDestroy[i]);
  };

  adf.mf.internal.amx.processDestroy = function(parent)
  {
    // Find all elements that have a destroy implementation (including parent)
    var childrenWithDestroy = parent.querySelectorAll(".amx-has-destroy");

    var handleDestroy =
      function(domNode)
      {
        var amxNode = adf.mf.internal.amx._getNonPrimitiveElementData(domNode, "amxNode");
        var nodeTypeHandler = amxNode.getTypeHandler();
        if (nodeTypeHandler && nodeTypeHandler.destroy)
        {
          // Prevent duplicate destroy calls:
          if (domNode.getAttribute("data-destroyed") == null)
          {
            domNode.setAttribute("data-destroyed", true);

            nodeTypeHandler.destroy(domNode, amxNode);
          }
        }
      };

    if (parent.classList.contains("amx-has-predestroy"))
      handleDestroy(parent);
    for (var i=0, count=childrenWithDestroy.length; i<count; ++i)
      handleDestroy(childrenWithDestroy[i]);
  };

  /**
   * This function processes the amxNodes registered by the amx.queueForInit and
   * calls 'init' function on their related typeHandlers.
   *
   * The processing of the queue takes place immediatelly after the rendering
   * of the amx tree or application of the updates to the amx tree.
   *
   * The amxNodes are processed in the same hierarchical order as they are
   * rendered.
   */
  amx.processAndCleanInitQueue = function()
  {
    _processAndCleanQueue(initQueue, "init");
  };

  /**
   * This function processes the amxNodes registered by the amx.queueForPostDisplay and
   * calls 'postDisplay' function on their related typeHandlers.
   *
   * The processing of the queue takes place immediatelly after the processing of the
   * init queue.
   *
   * The amxNodes are processed in the same hierarchical order as they are
   * rendered.
   *
   * The amxNodes that are currently outside of the document will not be processed.
   */
  amx.processAndCleanPostDisplayQueue = function()
  {
    _processAndCleanQueue(postDisplayQueue, "postDisplay");
  };

  /**
   * This is implementation of the queue processing used for the init and post display queues.
   *
   * The amxNodes are processed in the same hierarchical order as they are
   * rendered.
   *
   * @param queue {Array<Object>} queue which will be processed.
   * @param method {String} function to be called on typeHandler of each amxNode in the queue.
   */
  var _processAndCleanQueue = function(queue, method)
  {
    if (queue.length > 0 && method != null)
    {
      var isFinestLoggingEnabled = adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST);
      // sort queue by depth to ensure that the nodes are processed in hierarchical order
      adf.mf.api.amx.AmxNode.__sortNodesByDepth(queue);
      // processing the queue with shift enable to handle concurent addition of the
      // amxNodes into the queue
      var amxNode;
      while ((amxNode = queue.shift()) != null)
      {
        // try to get fresh domNode
        // using getElementById ensures that the domNode is already in document
        // in all other cases there is no reason to process it since it is
        // not initable or displayable amxNode
        var domNode = document.getElementById(amxNode.getId());
        if (domNode != null)
        {
          var nodeTypeHandler = amxNode.getTypeHandler();
          // verify that the typeHandler implements current method
          if (adf.mf.internal.amx.implementsFunction(nodeTypeHandler, method))
          {
            if (isFinestLoggingEnabled)
            {
              adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
                "amx", "_processAndCleanQueue",
                "Invoking the \'" + method + "\' method on the type handler for node " +
                amxNode.getId());
            }
            // invoke typeHandler function for current AmxNode
            nodeTypeHandler[method](domNode, amxNode);
          }
          else
          {
            adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.WARNING,
              "_processAndCleanQueue", "MSG_CANT_" + method.toUpperCase() + "_NODE", domNode);
          }
        }
      }
    }
  };

  /**
   * This function enques the amxNode to the end of the init processing queue.
   *
   * The queue itself will be processed after the render phase where all
   * newly rendered or rerendered amxNodes are inserted into the document.
   *
   * Nodes that are currently outside of the document will not be processed.
   *
   * The amxNodes are processed in the same hierarchical order as they are
   * rendered.
   *
   * @param amxNode {Object} node which typeHandler supports init method
   */
  amx.queueForInit = function(amxNode)
  {
    if (amxNode != null)
    {
      initQueue[initQueue.length] = amxNode;
    }
  };

  /**
   * This function enques the amxNode to the end of the post display processing queue.
   *
   * The queue itself will be processed after the init phase where all
   * amxNodes from init queue (registered by the #queueForInit function)
   * are processed.
   *
   * Nodes that are currently outside of the document will not be processed.
   *
   * The amxNodes are processed in the same hierarchical order as they are
   * rendered.
   *
   * @param amxNode {Object} node which typeHandler supports postDisplay method
   */
  amx.queueForPostDisplay = function(amxNode)
  {
    if (amxNode != null)
    {
      postDisplayQueue[postDisplayQueue.length] = amxNode;
    }
  };

  /**
   * Convenient method to sequentialy resolve each item of an array. If the itemResolver method
   * returns a promise, it will wait until resolved before processing the next element.
   * If the itemResolver returns the direct value, it will to the next item.
   *
   * @param {(Array|TreeNodeIterator)} items is the array or the TreeNodeIterator to iterate threw
   * @param {function} itemResolver(item) function that will resolve the item. Can return the value
   *        or a promise that will resolve with the value
   * @return {Promise} promise that will resolve with the array of values returned by the item
   *         resolver
   */
  amx.serialResolve = function(items,itemResolver)
  {
    var _type = null;

    try
    {
      if (adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST))
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINEST, "amx", "serialResolve",
          "items is of type: " + items.constructor.name + " or " + items[".type"]);
      }
      _type = items.constructor.name || items[".type"];
    }
    catch (te)
    {
      /* ignore */
    }

    if (_type === "TreeNodeIterator")
    {
      return amx.iteratorResolve(items, itemResolver);
    }
    else
    {
      var promiseResolve = null;
      var promiseReject = null;
      var promise = new adf.mf.internal.BasePromise(function(resolve, reject)
        {
          promiseResolve = resolve;
          promiseReject = reject;
        });
      var results = [];
      var i = 0;

      function resolveAndNext()
      {
        if (i < items.length)
        {
          var item = items[i];
          var itemResolverResult = itemResolver(item, i);

          // if it is a promise (but not a jquery object, which is also a promise), then, pipe it
          if (typeof itemResolverResult !== "undefined" && itemResolverResult !== null &&
            adf.mf.internal.amx.implementsFunction(itemResolverResult, "then") &&
            !itemResolverResult.jquery)
          {
            itemResolverResult.then(
              function(result)
            {
              results.push(result);
              i += 1;
              resolveAndNext();
              },
              function(result)
            {
              adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
                "resolveAndNext", "MSG_SERIAL_RESOLVE_DEFERRED_REJECTED", i);
                promiseReject();
            });
          }
          else
          {
            // if it is a normal object or a jqueryObject, then, just push the value and move to the next
            results.push(itemResolverResult);
            i += 1;
            resolveAndNext();
          }
        }
        else
        {
          // once we run out
          promiseResolve(results);
        }
      }
      resolveAndNext();
      return promise;
    }
  };

  /**
   * Determine if parameter is a finite number
   * @param {Object} n is the object to check
   */
  adf.mf.internal.amx.isFiniteNumber = function (n)
  {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  /**
   * Iterates over items provided by elNodeIterator and executes itemResolver for each item.  The number of iterations can be
   * limited by providing maxIterations.  If the itemResolver method returns a promise, it will wait until resolved before processing the next element.
   * If the itemResolver returns the direct value, it will do the next item.
   * @param {TreeNodeIterator} elNodeIterator is the iterator to iterate over
   * @param {function} itemResolver(item) function that will resolve the item. Can return the value or a promise that will resolve with the value
   * @param {Object} maxIterations specifies the maximum number of iterations to perform
   */
  amx.iteratorResolve = function(elNodeIterator,itemResolver,maxIterations)
  {
    var promiseResolve = null;
    var promise = new adf.mf.internal.BasePromise(function(resolve, reject)
      {
        promiseResolve = resolve;
      });
    var results = [];
    var methodNext = "first";
    var rowCount = 0;
    var _maxIterations = Infinity;
    if (maxIterations)
    {
      _maxIterations = maxIterations;
    }

    function resolveNext()
    {
      if (elNodeIterator.hasNext() && rowCount < _maxIterations)
      {
        elNodeIterator[methodNext](
          function(a,b)
        {
          methodNext = "next";
          var item = b[0].value;

          //FIXME: for now, turn this off for debugging
          var itemResolverResult = itemResolver(item,elNodeIterator.getCurrentIndex());

          // if it is a promise (but not a jquery object, which is also a promise), then, pipe it
          if (typeof itemResolverResult !== "undefined" && itemResolverResult !== null &&
            adf.mf.internal.amx.implementsFunction(itemResolverResult, "promise") &&
            !itemResolverResult.jquery)
          {
            itemResolverResult.then(function(result)
            {
              results.push(result);
              ++rowCount;
              resolveNext();
            });
          }
          else
          {
            // If it is a normal object or a jqueryObject, then, just push the value and move to
            // the next
            results.push(itemResolverResult);
            ++rowCount;
            resolveNext();
          }
          },
          function(a,b)
          {
            adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
              "resolveNext", "MSG_ITERATOR_FIRST_NEXT_ERROR");

            // Only log the exception at a fine level for security reasons
            if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.FINE))
            {
              adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
                "amx.iteratorResolve", "resolveNext", adf.mf.util.stringify(arguments));
            }
        });
      }
      else
      {
        promiseResolve(results);
      }
    }
    resolveNext();

    return promise;
  };

  // ------ /Public API ------ //

  adf.mf.internal.amx._pageBuildPromiseResolve = null;

  // --------- Rendering Logic --------- //
  /**
   * Singleton object for maintaining a stack of prefixes for IDs on HTML elements inside of
   * iterating AMX nodes.
   */
  var iterationIdStack =
  {
    _prefix: "",
    _lengthStack: [],
    // Valid ID characters are everything that NMTOKEN allows from XML minus ":" since we are using
    // colons as separators. See http://www.w3.org/TR/2000/WD-xml-2e-20000814#NT-Nmtoken
    // For now just check a sub-set of NMTOKEN as the list is quite lengthy of allowed unicode
    // characters.
    _invalidCharsRe: /[^\w\.\-]/g,

    /**
     * Get the current prefix.
     * @return {String} a non-null string to use as a prefix for node IDs
     */
    getCurrentPrefix: function()
    {
      return this._prefix;
    },

    /**
     * Push an iterator prefix onto the stack.
     * @param {string} baseId the ID of the iterating AMX node to use as the base of the ID prefix
     *                 for the iterator's children nodes.
     * @param {Object} iterationKey the object to convert to a string to uniquely identify items
     *                 in the iterator.
     */
    pushIterator: function(baseId, iterationKey)
    {
      // Save off the old prefix length so that we know the length to truncate to during the
      // pop call.
      var oldLength = this._prefix.length;
      this._lengthStack.push(oldLength);

      // Create the new prefix
      var newPrefix = baseId + ":" + this._escapeIterationKey(iterationKey);

      this._prefix += newPrefix + ":";
    },

    /**
     * Pop the prefix back to the value before the current iteration.
     */
    popIterator: function()
    {
      var newLength = this._lengthStack.pop();
      if (newLength > 0)
      {
        this._prefix = this._prefix.substr(0, newLength);
      }
      else
      {
        this._prefix = "";
      }
    },

    /**
     * Escape an iteration key for usage in an HTML ID attribute.
     * @param {Object} iterationKey the key for the current iteration
     * @return {string} an ID-safe string that may be used to identify the current iteration
     * @private
     */
    _escapeIterationKey: function(iterationKey)
    {
      // Note that we may want to consider using an ID token cache to improve memory usage
      // so that smaller strings are used. The disadvantage is that the token generation would
      // have to be repeatable so that the node state would be correctly re-applied. For now,
      // we just wish to ensure there are no invalid characters
      if (iterationKey == null)
      {
        adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE, "_escapeIterationKey",
          "MSG_INVALID_ITERATION_KEY");

        // Only log the details at a fine level for security reasons
        adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
          "iterationIdStack", "_escapeIterationKey", iterationKey);

        return "null";
      }
      var strVal = iterationKey.toString();
      // Replace any non-ID friendly values with a sequence of characters unlikely to appear in the
      // value. This assumes that most characters
      // of the iterationKey will be valid and therefore produce a unique key. Using a token
      // cache would address this if this assumption becomes an issue.
      return strVal.replace(this._invalidCharsRe, "._.");
    },

    /**
     * Determine if there is an iteration container.  Searches the prefix for ":" and returns true
     * if the character is found.
     * @return {Boolean} true if an iteration container has been set; false otherwise.
     */
    hasTopIterationContainer: function()
    {
      if (this._prefix.indexOf(":") > -1)
      {
        return true;
      }
      return false;
    },

    /**
     * Returns ID of top-most iteration container.  Finds first occurence of ":" in prefix and returns
     * substring leading up to it.
     * @return {String} ID of top-most iteration container
     */
    getTopIterationContainer: function()
    {
      if (this._prefix.indexOf(":") > -1)
      {
        return this._prefix.substr(0,this._prefix.indexOf(":"));
      }
      return "";
    }
  };

  // ------ API for TypeHandlers ------ //

  /**
   * @deprecated
   */
  amx.registerRenderers = function(theNamespace, typeHandlerMap)
  {
    var typeHandlerDetail = "";
    adf.mf.internal.amx._each(typeHandlerMap, function(key, value)
    {
      if (typeHandlerDetail != "")
        typeHandlerDetail += ", ";
      typeHandlerDetail += key;
    });

    adf.mf.log.logInfoResource("AMXInfoBundle",
      adf.mf.log.level.SEVERE, "amx.registerRenderers", "MSG_AMX_REGISTER_DEPRECATED",
      typeHandlerDetail, theNamespace);

    if (theNamespace == "amx")
    {
      adf.mf.log.logInfoResource("AMXInfoBundle",
        adf.mf.log.level.SEVERE, "amx.registerTypeHandlers", "MSG_NS_DEPRECATED",
        "amx", adf.mf.api.amx.AmxTag.NAMESPACE_AMX, typeHandlerMap);
      theNamespace = adf.mf.api.amx.AmxTag.NAMESPACE_AMX;
    }
    else if (theNamespace == "dvtm")
    {
      adf.mf.log.logInfoResource("AMXInfoBundle",
        adf.mf.log.level.SEVERE, "registerTypeHandlers", "MSG_NS_DEPRECATED",
        "dvtm", adf.mf.api.amx.AmxTag.NAMESPACE_DVTM, typeHandlerMap);
      theNamespace = adf.mf.api.amx.AmxTag.NAMESPACE_DVTM;
    }

    adf.mf.internal.amx._each(typeHandlerMap, function(tagName, deprecatedTypeHandlerObject)
    {
      // If it is a function, then, it is actually the "render" of the NodeTypeHandler
        if (deprecatedTypeHandlerObject && (typeof deprecatedTypeHandlerObject === "function"))
      {
        deprecatedTypeHandlerObject =
        {
          render: deprecatedTypeHandlerObject
        };
      }

      // Convert the old style TypeHandler objects into classes needed for the new API:
      var typeHandlerClass = adf.mf.api.amx.TypeHandler.register(theNamespace, tagName);
        adf.mf.internal.amx._each(deprecatedTypeHandlerObject,
        function(functionName, functionImplementation)
      {
        typeHandlerClass.prototype[functionName] = functionImplementation;
      });
    });
  };

  /**
   * Notify the framework that an iteration node is being processed. Should be called by iterating
   * renderers for each stamp.
   * @param {string} amxNodeId the ID of the iterating AMX node to use as the base of the ID prefix
   *                 for the iterator's children nodes.
   * @param {Object} iterationKey the object to convert to a string to uniquely identify items
   *                 in the iterator.
   */
  amx.beginIterationContainer = function(amxNodeId, iterationKey)
  {
    iterationIdStack.pushIterator(amxNodeId, iterationKey);
  };

  /**
   * Notify the framework that an iteration node has finished being processed. Should be called by
   * iterating renderers after each stamp. Must correspond to a call to beginIterationContainer.
   */
  amx.endIterationContainer = function()
  {
    iterationIdStack.popIterator();
  };

  /**
   * @deprecated
   */
  amx.renderSubNodes = function(amxNode)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "renderSubNodes", "MSG_DEPRECATED", "amx.renderSubNodes", "amxNode.renderDescendants");
    return adf.mf.api.amx.renderSubNodes.apply(this, arguments);
  };

  /**
   * @deprecated
   */
  adf.mf.api.amx.renderSubNodes = function(amxNode)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "renderSubNodes", "MSG_DEPRECATED", "adf.mf.api.amx.renderSubNodes",
      "amxNode.renderDescendants");

    return amxNode.renderSubNodes();
  };

  /**
   * @deprecated
   */
  amx.isUITag = function(nsPrefixedTagName)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "isUITag", "MSG_DEPRECATED", "amx.isUITag", "AmxTag.isUITag");

    return adf.mf.internal.amx.AmxTagHandler.__hasHandler(nsPrefixedTagName) == false;
  };

  /**
   * @deprecated
   */
  amx.renderNode = function(node)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE, "renderNode",
      "MSG_DEPRECATED", "amx.renderNode", "amxNode.render");
    return adf.mf.api.amx.renderNode.apply(this, arguments);
  };

  /**
   * Render a amxNode or the xmlNode. If it is an xmlNode, then, it will be processed before rendering it.
   * @param {(xmlNode|adf.mf.api.amx.AmxNode)} node The node for a given element. Can be the process AMXNode or the XMLNode.
   * @return the rendered DOM node or null if nothing rendered
   */
  adf.mf.api.amx.renderNode = function(node)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle",
      adf.mf.log.level.SEVERE, "renderNode", "MSG_DEPRECATED", "adf.mf.api.amx.renderNode",
      "amxNode.render");
    return node.renderNode();
  };

  // --------- Critical section --------- //
  /**
   * Singleton class to handle the critical section of updating the AMX node hierarchy
   * @private
   */
  var criticalSection =
  {
    _queue: [],
    _blockedCount: 0,
    _timeout: null,
    _running: false,

    /**
     * Queues a method to be run in the critical section
     * @private
     */
    queue: function(method)
    {
      var isFinestLoggingEnabled = adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST);

      if (isFinestLoggingEnabled)
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
          "adf.mf.internal.amx", "criticalSection.queue",
          "Queuing method");
      }

      this._queue.push(method);

      if (this._queue.length == 1 && this._blockedCount == 0 && this._running == false)
      {
        if (isFinestLoggingEnabled)
        {
          adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
            "adf.mf.internal.amx", "criticalSection.queue",
            "Running method now. Queue length is " + this._queue.length);
        }

        // If this is the only method and we are not blocked, run it synchronously
        this.run();
      }
      else
      {
        if (isFinestLoggingEnabled)
        {
          adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
            "adf.mf.internal.amx", "criticalSection.queue",
            "Scheduling execution for later. Queue length is " + this._queue.length);
        }

        // Run the method later
        this._scheduleTimeout();
      }
    },

    /**
     * Prevent any more methods from running until the resume has been called. The resume must
     * be called one time for every call to pause.
     * @private
     */
    pause: function()
    {
      ++this._blockedCount;

      if (adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST))
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
          "adf.mf.internal.amx", "criticalSection.pause",
          "Blocked count: " + this._blockedCount);
      }
    },

    /**
     * Resume after having been paused
     * @private
     */
    resume: function()
    {
      this._blockedCount = Math.max(0, this._blockedCount - 1);

      if (adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST))
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
          "adf.mf.internal.amx", "criticalSection.resume",
          "Blocked count: " + this._blockedCount);
      }

      this._scheduleTimeout();
    },

    /**
     * Runs the next function in critical section
     * @private
     */
    run: function()
    {
      var isFinestLoggingEnabled = adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST);
      if (isFinestLoggingEnabled)
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
          "adf.mf.internal.amx", "criticalSection.run",
          "Run invoked");
      }

      this._timeout = null;

      // Ensure that we are ready to run
      if (this._running || this._blockedCount > 0 || this._queue.length == 0)
      {
        if (isFinestLoggingEnabled)
        {
          adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
            "adf.mf.internal.amx", "criticalSection.run",
            (this._running ? "Run called when a method is already running" :
              (this._blockedCount ?
                ("Block count preventing run. Count: " + this._blockedCount) :
                "The queue is empty"
              )
            ));
        }

        return;
      }

      this._running = true;

      var method = this._queue.shift();

      // Some of the methods that are queued are dependent on the current view. If the navigation ID has changed, then
      // do not run the method and check the next queued method.
      while (method != null)
      {
        var navigationId = method["navigationId"];

        if (navigationId >= 0 && navigationId != adf.mf.internal.amx._navigationId)
        {
          // Do not process any methods that were queued for an old page. Go to the next
          // item in the queue. Note that shift returns undefined if the array is empty
          method = this._queue.shift();
        }
        else
        {
          break;
        }
      }

      if (method == null)
      {
        // No more queued methods to run
        return;
      }

      var methodFinished = false;

      try
      {
        var fn = method["func"];
        var params = method["params"];
        var thisObj = method["thisObj"];

        if (isFinestLoggingEnabled)
        {
          adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
            "adf.mf.internal.amx", "criticalSection.run",
            "Before critical method invocation. Queue length is now " + this._queue.length);
        }

        var result = fn.apply(thisObj, params);

        // The function is allowed to return a promise object if the task is asynchronous
        // and we need to block until it is fully finished
        if (result != null && typeof(result["then"]) == "function")
        {
          if (isFinestLoggingEnabled)
          {
            adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
              "adf.mf.internal.amx", "criticalSection.run",
              "Promise object was returned, will wait for resolution");
          }

          var callback = adf.mf.internal.getProxyFunction(this, this._promiseCallback);

          result.then(callback, callback);
        }
        else
        {
          if (isFinestLoggingEnabled)
          {
            adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
              "adf.mf.internal.amx", "criticalSection.run",
              "Method finished without a Promise object");
          }
          methodFinished = true;
        }
      }
      catch (e)
      {
        // If there was an exception, a promise object was not returned
        methodFinished = true;

        adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
          "criticalSection.run",
          "MSG_CRITICAL_SECTION_FUNCTION_EXCEPTION");

        // Only log the exception at a fine level for security reasons
        adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
          "criticalSection", "run", e);
      }
      finally
      {
        if (methodFinished)
        {
          this._running = false;
          this._scheduleTimeout();
        }
      }
    },

    /**
     * Callback when a method has returned a promise object
     * @private
     */
    _promiseCallback: function()
    {
      if (adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST))
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
          "adf.mf.internal.amx", "criticalSection._promiseCallback",
          "_promiseCallback called");
      }

      this._running = false;
      this._scheduleTimeout();
    },

    /**
     * Schedules the run method to be called when not busy
     * @private
     */
    _scheduleTimeout: function()
    {
      var isFinestLoggingEnabled = adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST);
      if (isFinestLoggingEnabled)
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
          "adf.mf.internal.amx", "criticalSection._scheduleTimeout",
          "_scheduleTimeout called");
      }

      // Ensure the critical section is ready before scheduling a callback and ensure that a
      // callback has not already been set
      if (this._running == false && this._timeout == null && this._blockedCount == 0 &&
        this._queue.length > 0)
      {
        if (isFinestLoggingEnabled)
        {
          adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
            "adf.mf.internal.amx", "criticalSection._scheduleTimeout",
            "Scheduling a timeout");
        }

        this._timeout = window.setTimeout(adf.mf.internal.getProxyFunction(this, this.run), 1);
      }
      else if (isFinestLoggingEnabled)
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
          "adf.mf.internal.amx", "criticalSection._scheduleTimeout",
          (this._running ? "A method is already running" :
            (this._timeout != null ? "Timeout was already scheduled" :
              (this._blockedCount != 0 ?
                ("Critical section is blocked. Count: " + this._blockedCount) :
                "Queue is empty"
              )
            )
          ));
      }
    }
  };

  /**
   * Allows code that needs to use the critical section to queue a callback
   * when the critical section is free. This functionality is akin to the Java synchronized
   * block.
   * @param {function} func the function to invoke. It may return a promise object which
   *        will block the critical section until resolved (or fails)
   * @param {Object} thisObject the object to use as "this" when invoking the function.
   * @param {boolean} tiedToCurrentViewId if this is true, then the function will not be run
   *        if a navigation is currently executing that will result in a new view
   * @param {...Object} var_args parameters to pass to the function.
   * @private
   */
  adf.mf.internal.amx._queueCriticalSectionFunction = function(
    func,
    thisObject,
    tiedToCurrentViewId
    /* ... arguments */)
  {
    if (adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST))
    {
      adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
        "adf.mf.internal.amx", "_queueCriticalSectionFunction",
        "Critical section function being queued");
    }

    var params = Array.prototype.slice.call(arguments, 3);

    var navigationId = tiedToCurrentViewId === true ? adf.mf.internal.amx._navigationId : -1;

    criticalSection.queue(
      {
        "func": func,
        "thisObj": (thisObject || window),
        "params": params,
        "navigationId": navigationId
      });
  };

  /**
   * Internal function for usage by type handlers to be able to pause changes to the UI.
   * Typical use case is to prevent updates to the AMX hierarchy and DOM nodes during
   * an animation. This prevents the DOM from being replaced while another task, like animation
   * is under way.
   */
  adf.mf.internal.amx.pauseUIChanges = function()
  {
    criticalSection.pause();
  };

  /**
   * Internal function for usage by type handlers to be able to resume changes to the UI.
   * See adf.mf.internal.amx.pauseUIChanges.
   */
  adf.mf.internal.amx.resumeUIChanges = function()
  {
    criticalSection.resume();
  };

  /**
   * Internal function for usage by the isLoading() API to be able to tell if
   * something is pausing UI changes.
   * See adf.mf.internal.amx.pauseUIChanges.
   */
  adf.mf.internal.amx.isUIChangePaused = function()
  {
    return criticalSection._running || criticalSection._blockedCount != 0;
  };
  // --------- /Critical section --------- //


  amx.loadBundle = function(basename, variable)
  {
    if (!adf.mf.environment.profile.mockData)
    {
      return new adf.mf.internal.BasePromise(
        function(resolve, reject)
        {
          try
          {
            // Kilgore: add a placeholder for the resources to be loaded into:
            adf.mf.el.addVariable(variable, {});
            adf.mf.api.invokeMethod("oracle.adfmf.framework.api.Model", "loadBundle", basename,
              variable,
              function()
              {
                resolve();
              },
              function(req,ex)
              {
                adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE, "loadBundle",
                  "MSG_LOADBUNDLE_FAILED");

                // Only log the details at a fine level for security reasons
                if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.FINE))
                {
                  adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
                    "amx.loadBundle", "adf.mf.api.invokeMethod", "Basename: " + basename +
                      " variable: " + variable + " exception: " + ex);
                }

                resolve();
              });
          }
          catch (ex)
          {
            adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE, "loadBundle",
              "MSG_LOADBUNDLE_EXCEPTION");

            // Only log the details at a fine level for security reasons
            if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.FINE))
            {
              adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
                "amx.loadBundle", "adf.mf.api.invokeMethod", "Basename: " + basename +
                  " variable: " + variable + " exception: " + ex);
            }
          }
        });
    }
    else
    {
      adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.WARNING, "loadBundle",
        "MSG_LOADBUNDLE_SKIPPED");

      // Only log the details at a fine level for security reasons
      if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.FINE))
      {
        adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
          "amx.loadBundle", "adf.mf.api.invokeMethod", "Basename: " + basename +
            " variable: " + variable);
      }

      return;
    }
  };

  /**
   * Take the varName and varValue and store it for this domNode.
   */
  amx.storeVariable = function(domNode, varName, varValue) // TODO is this still used?
  {
    var amxVar = adf.mf.internal.amx._getNonPrimitiveElementData(domNode, "amxVar");
    domNode.classList.add("amxVar");
    if (!amxVar)
    {
      amxVar = {};
      adf.mf.internal.amx._setNonPrimitiveElementData(domNode, "amxVar", amxVar);
    }
    amxVar.name = varName;
    amxVar.value = varValue;
  };

  //FIXME: remove this (for backward compability with the dvt team)
  amx.storeVarNameValue = amx.storeVariable; // TODO is this still used?

  /**
   * Restore iterator stamp variables for use during listener invocation.
   * May be used by component authors to reset the EL context during a callback.
   * @return a non-null (but possibly empty) array of amxVar data objects that were restored
   * @see cleanVariables
   * @deprecated use adf.mf.internal.amx.restoreContext instead
   */
  amx.restoreVariables = function(domNodes) // TODO is this still used?
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "restoreVariables", "MSG_DEPRECATED", "amx.restoreVariables",
      "adf.mf.internal.amx.restoreContext");

    if (domNodes.length == 1)
    {
      return adf.mf.internal.amx.restoreContext(domNodes);
    }
    else
    {
      var results = [];
      for (var i = 0, size = domNodes.length; i < size; ++i)
      {
        results = results.concat(adf.mf.internal.amx.restoreContext(domNodes[i]));
      }
      return results;
    }
  };

  /**
   * Use to restore rendering context of a node post-rendering.
   * May be used by component authors to reset the EL context during a callback.
   * @param {DOMNode} domNode the HTML DOM node to restore the context of.
   * @return a non-null (but possibly empty) array of amxVar data objects that were restored
   * @see cleanVariables
   */
  adf.mf.internal.amx.restoreContext = function(domNode) // TODO is this still used?
  {
    // TODO: consider allowing the type handlers for the DOM nodes
    // to have hooks for restoring the context instead of hard-coding
    // this to only support AMX variables that were introduced during
    // rendering.
    var amxVars = getAmxVars(domNode);
    for (var i = 0, size = amxVars.length; i < size; ++i)
    {
      var amxVar = amxVars[i];
      adf.mf.el.addVariable(amxVar.name, amxVar.value);
    }
    return amxVars;
  };

  /**
   * @deprecated use adf.mf.internal.amx.tearDownContext instead
   */
  amx.cleanVariables = function(varsToClean) // TODO is this still used?
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "cleanVariables", "MSG_DEPRECATED", "amx.cleanVariables",
      "adf.mf.internal.amx.tearDownContext");

    adf.mf.internal.amx.tearDownContext(varsToClean);
  };

  /**
   * Tear down the context setup by adf.mf.internal.amx.restoreContext.
   * @param {Object} contextResult the value returned from adf.mf.internal.amx.restoreContext
   * @see adf.mf.internal.amx.restoreContext
   */
  adf.mf.internal.amx.tearDownContext = function(contextResult) // TODO is this still used?
  {
    for (var i = 0, size = contextResult.length; i < size; ++i)
    {
      adf.mf.el.removeVariable(contextResult[i].name);
    }
  };

  /**
   * @deprecated
   */
  amx.isValueFalse = function(value)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE, "isValueFalse",
      "MSG_DEPRECATED", "amx.isValueFalse", "adf.mf.api.amx.isValueFalse");
    return adf.mf.api.amx.isValueFalse.apply(this, arguments);
  };

  /**
   * Returns true if the value is boolean false or string "false".
   * If undefined, returns false.
   */
  adf.mf.api.amx.isValueFalse = function(value)
  {
    if (typeof value !== "undefined")
    {
      if (value === false || value === "false" || value === 0 || value === "0")
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    else
    {
      return false;
    }
  };

  /**
   * @deprecated
   */
  amx.isValueTrue = function(value)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE, "isValueTrue",
      "MSG_DEPRECATED", "amx.isValueTrue", "adf.mf.api.amx.isValueTrue");
    return adf.mf.api.amx.isValueTrue.apply(this, arguments);
  };

  /**
   * Returns true if the value is boolean true or string "true".
   * If undefined, returns false.
   */
  adf.mf.api.amx.isValueTrue = function(value)
  {
    if (typeof value !== "undefined")
    {
      if (value === true || value === "true" || value === 1 || value === "1")
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    else
    {
      return false;
    }
  };

  /**
   * Return the list of var object {name:..,value:..} starting from this domNode up to the root document.
   */
  function getAmxVars(domNode) // TODO is this still used?
  {
    var amxVars = [];

    _getAmxVars(amxVars, domNode);

    return amxVars;
  }

  function _getAmxVars(amxVars, node)
  {
    if (node != null)
    {
      if (node.classList.contains("amxVar"))
      {
        amxVars.push(adf.mf.internal.amx._getNonPrimitiveElementData(node, "amxVar"));
      }

      _getAmxVars(amxVars, node.parentNode);
    }
  }

  // ------ API for TypeHandlers ------ //
})();
// ------ /amx UI ------ //

// --------- amx UA --------- //
(function()
{
  var _hasTouch = null;

  amx.hasTouch = function()
  {
    if (_hasTouch === null)
    {
      _hasTouch = isEventSupported("touchstart");

      if (_hasTouch &&
        adf.mf.environment.profile.mockData &&
        navigator.userAgent.indexOf("Windows") != -1)
      {
        // Mock mode for browsers (e.g. Chrome) on UWP is better when using mouse events:
        _hasTouch = false;
      }
    }
    return _hasTouch;
  };

  var isEventSupported = (function()
  {
    var TAGNAMES =
    {
      'select' : 'input',
      'change' : 'input',
      'submit' : 'form',
      'reset' : 'form',
      'error' : 'img',
      'load' : 'img',
      'abort' : 'img'
    };

    function isEventSupported(eventName)
    {
      var el = document.createElement(TAGNAMES[eventName] || 'div');
      eventName = 'on' + eventName;
      var isSupported = (eventName in el);
      if (!isSupported)
      {
        el.setAttribute(eventName, 'return;');
        isSupported = typeof el[eventName] == 'function';
      }
      el = null;
      return isSupported;
    }
    return isEventSupported;
  })();
})();
// --------- /amx UA --------- //

// --------- Utilities --------- //
(function()
{
  // Private array of chars to use
  var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

  amx.uuid = function(len)
  {
    len = len || 10;
    var chars = CHARS, uuid = [];
    var radix = chars.length;

    for (var i = 0; i < len; i++)
      uuid[i] = chars[0 | Math.random()*radix];

    return uuid.join('');
  };

  amx.arrayRemove = function(a, from, to)
  {
    var rest = a.slice((to || from) + 1 || a.length);
    a.length = from < 0 ? a.length + from : from;
    return a.push.apply(a, rest);
  };

  /**
   * @deprecated use adf.mf.api.amx.TypeHandler.prototype.getInputValueAttribute instead
   */
  amx.registerInputValue = function(amxNode, attrName)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE, "registerInputValue",
      "MSG_DEPRECATED", "amx.registerInputValue",
      "adf.mf.api.amx.TypeHandler.prototype.getInputValueAttribute");

    // Mirror the code in AmxNode's _setupInputValueValidation without calling the type handler
    if (amxNode._attributeToValidate === undefined)
    {
      amxNode._attributeToValidate = attrName;
      amxNode.storeModifyableEl(attrName);
    }
  };

  /**
   * Rendrer would call this function to change the style of showRequired attribute
   * @param {Object} amxNode This is the amxNode object
   * @param {Object} field This object is returned from createField method and must have a
   *   "fieldRoot" property
   * @see See also the definition of amx.createField method inside amx-commonTags.js
   */
  adf.mf.api.amx.applyRequiredMarker = function(amxNode, field)
  {
    if (adf.mf.api.amx.isValueTrue(amxNode.getAttribute("showRequired")) ||
      adf.mf.api.amx.isValueTrue(amxNode.getAttribute("required")))
    {
      field.fieldRoot.classList.add("required");
    }
  };

  // safely return the value, handling json null objects,
  // undefined objects, and null objects by returning null
  amx.getObjectValue = function(value)
  {
    if (value == null)
    {
      return null;
    }

    if (typeof value === "undefined")
    {
      return null;
    }

    if (typeof value[".null"] !== "undefined")
    {
      adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.INFO, "getObjectValue",
        "MSG_UNHANDLED_NULL");

      if (value[".null"] == true)
      {
        return null;
      }
    }

    return value;
  };

  /**
   * Get the value as a string. Null or undefined objects will
   * be returned as an empty string.
   * @param {Object} value the value
   * @return {string} the value as a string.
   */
  amx.getTextValue = function(value)
  {
    value = amx.getObjectValue(value);
    if (value == null)
    {
      return "";
    }

    // Ensure the value is a string
    return "" + value;
  };

  // Gets the amx_dtfolderpath if it is on the URL
  amx.getDtFolderPath = function()
  {
    var queryString = adf.mf.api.getQueryString();
    var amx_dtfolderpath = adf.mf.api.getQueryStringParamValue(queryString, "amx_dtfolderpath", null);
    return amx_dtfolderpath;
  };

  // Builds a string that is the relative path to
  // the folder containing the amx page we are currently
  // viewing.
  amx.currentPageContainingFolder = function()
  {
    try
    {
      // Check for DT folder path
      var amx_dtfolderpath = amx.getDtFolderPath();
      if(amx_dtfolderpath !== null)
      {
        return amx_dtfolderpath;
      }
      // Get current amx filename
      var amxPage = adf.mf.internal.controller.ViewHistory.peek().amxPage;
      // Break up the filename so we can get the length
      // of just the filename.
      var parts = amxPage.split("/");
      // Add the feature root prefix to the filename
      var amxPageFullPath = adfc.Util.addFeatureRootPrefix(amxPage);
    }
    catch (ex)
    {
      adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
        "amx.currentPageContainingFolder", "MSG_CURRENT_PAGE_FOLDER_FAILED");

      // Only log the exception at a fine level for security reasons
      adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
        "amx", "currentPageContainingFolder", ex);

      return "";
    }
    // Strip off the filename
    return amxPageFullPath.substr(0,
      amxPageFullPath.length - parts[parts.length - 1].length);
  };

  // Determines if the tartget string has a protocol
  amx.hasProtocol = function(url)
  {
    return /^(:?ms-app*|\w+:)/.test(url);
  };

  // Builds the relative path based to the specified
  // resource assuming it is relative to the current
  // amx page.  If there is a protocol on the resource
  // then it is assumed to be an absolute path and
  // left unmodified
  amx.buildRelativePath = function(url)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE, "buildRelativePath",
      "MSG_DEPRECATED", "amx.buildRelativePath", "adf.mf.api.amx.buildRelativePath");

    return adf.mf.api.amx.buildRelativePath.apply(this, arguments);
  };

  /**
   * Builds the relative path based to the specified resource assuming it is relative to the current
   * AMX page. If there is a protocol on the resource then it is assumed to be an absolute path and
   * left unmodified.
   * @param {string} url the location of the specified resource
   * @return {string} the resolved path
   */
  adf.mf.api.amx.buildRelativePath = function(url)
  {
    if(amx.hasProtocol(url))
    {
      return url;
    }

    url = url.replace("\\", "/");
    if(url.charAt(0) == "/")
    {
        // Check for DT folder path
        var amx_dtfolderpath = amx.getDtFolderPath();
        if (amx_dtfolderpath !== null)
        {
            var publicHtmlString = 'public_html/';
            var publicHtmlIndex    = amx_dtfolderpath.indexOf(publicHtmlString);

            return (amx_dtfolderpath.substring(0, publicHtmlIndex + publicHtmlString.length)) + url.substring(1);
        }
        else
        {
            return adfc.Util.addFeatureRootPrefix(url.substring(1));
        }
    }

    return amx.currentPageContainingFolder() + url;
  };

  /**
   * Adds a CSS className to the dom node if it doesn't already exist in the classNames list and
   * returns <code>true</code> if the class name was added.
   * @param {HTMLElement} domElement DOM Element to add style class name to
   * @param {string} className Name of style class to add
   * @return {boolean} <code>true</code> if the style class was added
   * @deprecated Use domElement.classList.add instead.
   */
  adf.mf.internal.amx.addCSSClassName = function(domElement, className) // TODO move into some "domutils" class
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "adf.mf.internal.amx.addCSSClassName", "MSG_DEPRECATED",
      "adf.mf.internal.amx.addCSSClassName",
      "domElement.classList.add");

    // TODO AdfAssert.assertDomElement(domElement);
    var added = false;

    if (className != null)
    {
      var classNames = className.split(" ");
      for (var i = 0, num = classNames.length; i < num; ++i)
      {
        var className = classNames[i];
        if (!domElement.classList.contains(className))
        {
          domElement.classList.add(className);
          added = true;
        }
      }
    }

    return added;
  };

  /**
   * Removes a CSS className to the dom node if it existd in the classNames list and
   * returns <code>true</code> if the class name was removed.
   * @param {HTMLElement} domElement DOM Element to remove style class name from
   * @param {string} className Name of style class to remove
   * @return {boolean} <code>true</code> if the style class was removed
   * @deprecated Use domElement.classList.remove instead.
   */
  adf.mf.internal.amx.removeCSSClassName = function(domElement, className) // TODO move into some "domutils" class
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "adf.mf.internal.amx.removeCSSClassName", "MSG_DEPRECATED",
      "adf.mf.internal.amx.removeCSSClassName",
      "domElement.classList.remove");
    // TODO AdfAssert.assertDomElement(domElement);

    var removed = false;

    if (className != null)
    {
      var classNames = className.split(" ");
      for (var i = 0, num = classNames.length; i < num; ++i)
      {
        var className = classNames[i];
        if (domElement.classList.contains(className))
        {
          domElement.classList.remove(className);
          removed = true;
        }
      }
    }

    return removed;
  };

  /**
   * Convenient function to add or removes a CSS className from the dom node. Will be deprecated
   * once all supported browsers support the classList.toggle function fully (IE 10 and 11
   * do not support the second argument of toggle).
   *
   * @param {boolean} add boolean value if we should do an add of a CSS className
   * @param {HTMLElement} domElement DOM Element to remove style class name from
   * @param {string} className the CSS className which should be added or removed
   * @return {boolean} <code>true</code> if the element's style class list changed
   */
  adf.mf.internal.amx.addOrRemoveCSSClassName = function(
    add,
    domElement,
    className) // TODO move into some "domutils" class
  {
    // For backward compatibility usage, check for spaces in the name
    var classNames = className.split(" ");

    var contains = false;
    var num = classNames.length;
    var classList = domElement.classList;

    for (var i = 0; i < num; ++i)
    {
      if (classList.contains(classNames[i]))
      {
        contains = true;
        break;
      }
    }

    if (add && !contains)
    {
      classList.add.apply(classList, classNames);

      return true;
    }
    else if (!add && contains)
    {
      classList.remove.apply(classList, classNames);

      return true;
    }

    return false;
  };

  /**
   * Check if the dom node contains the className
   * @param {HTMLElement} domElement DOM Element to remove style class name from
   * @param {string} className Name of style class to remove
   * @return {boolean} <code>true</code> if the style class is on the domElement
   * @deprecated Use domElement.classList.contains instead.
   */
  adf.mf.internal.amx.containsCSSClassName = function(domElement, className) // TODO move into some "domutils" class
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "adf.mf.internal.amx.containsCSSClassName", "MSG_DEPRECATED",
      "adf.mf.internal.amx.containsCSSClassName",
      "domElement.classList.contains");
    var classNames = className.split(" ");
    var containsAll = true;

    for (var i = 0, num = classNames.length; i < num; ++i)
    {
      var className = classNames[i];
      if (!domElement.classList.contains(className))
      {
        containsAll = false;
        break;
      }
    }

    return containsAll;
  };

  /**
   * Returns the index at which <code>className</code> appears within <code>currentClassName</code>
   * with either a space or the beginning or end of <code>currentClassName</code> on either side.
   * This function optimizes the runtime speed by not creating objects in most cases and assuming
   * 1) It is OK to only check for spaces as whitespace characters
   * 2) It is rare for the searched className to be a substring of another className, therefore
   *    if we get a hit on indexOf, we have almost certainly found our className
   * 3) It is even rarer for the searched className to be a substring of more than one className,
   *    therefore, repeating the search from the end of the string should almost always either return
   *    our className or the original search hit from indexOf
   * @param {string} currentClassName Space-separated class name string to search
   * @param {string} className String to search for within currentClassName
   * @return {number} index of className in currentClassName, or -1 if it doesn't exist
   * @deprecated Use domElement.classList instead.
   */
  adf.mf.internal.amx.getCSSClassNameIndex = function(currentClassName, className) // TODO move into some "domutils" class
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "adf.mf.internal.amx.getCSSClassNameIndex", "MSG_DEPRECATED",
      "adf.mf.internal.amx.getCSSClassNameIndex",
      "domElement.classList");
    // if no current class
    if (!currentClassName)
      return -1;
    else
    {
      // if the strings are equivalent, then the start index is the beginning of the string
      if (className === currentClassName)
        return 0;
      else
      {
        var classNameLength = className.length;
        var currentClassNameLength = currentClassName.length;

        // check if our substring exists in the string at all
        var nameIndex = currentClassName.indexOf(className);

        // if our substring exists then our class exists if either:
        // 1) It is at the beginning of the classNames String and has a following space
        // 2) It is at the end of the classNames String and has a leading space
        // 3) It has a space on either side
        if (nameIndex >= 0)
        {
          var hasStart = (nameIndex == 0) || (currentClassName.charAt(nameIndex - 1) == " ");
          var endIndex = nameIndex + classNameLength;
          var hasEnd = (endIndex == currentClassNameLength) || (currentClassName.charAt(endIndex) == " ");

          //one of the three condition above has been met so our string is in the parent string
          if (hasStart && hasEnd)
            return nameIndex;
          else
          {
            // our substring exists in the parent string but didn't meet the above conditions,  Were
            // going to be lazy and retest, searchig for our substring from the back of the classNames
            // string
            var lastNameIndex = currentClassName.lastIndexOf(className);

            // if we got the same index as the search from the beginning then we aren't in here
            if (lastNameIndex != nameIndex)
            {
              // recheck the three match cases
              hasStart = currentClassName.charAt(lastNameIndex - 1);
              endIndex = lastNameIndex + classNameLength;
              hasEnd =  (endIndex == currentClassNameLength) || (currentClassName.charAt(endIndex) == " ");

              if (hasStart && hasEnd)
                return lastNameIndex;
              else
              {
                // this should only happen if the searched for className is a substring of more
                // than one className in the classNames list, so it is OK for this to be slow.  We
                // also know at this point that we definitely didn't get a match at either the very
                // beginning or very end of the classNames string, so we can safely append spaces
                // at either end
                return currentClassName.indexOf(" " + className + " ");
              }
            }
          }
        }

        // no match
        return -1;
      }
    }
  };

  /**
   * Returns the element's right side in Window coordinates.
   * @param {HTMLElement} domElement the DOM Element to look at
   * @return {number} the element's right side position in Window coordinates
   */
  adf.mf.internal.amx.getElementRight = function(domElement) // TODO move into some "agent" class
  {
    var documentElementOffsetWidth = document.documentElement.offsetWidth;
    var domElementOffsetWidth = domElement.offsetWidth;
    var domElementLeft = adf.mf.internal.amx.getElementLeft(domElement);
    var domElementRight = documentElementOffsetWidth - domElementLeft - domElementOffsetWidth;
    return domElementRight;
  };

  /**
   * Returns the element's left side in Window coordinates.
   * @param {HTMLElement} domElement the DOM Element to look at
   * @return {number} the element's left side position in Window coordinates
   */
  adf.mf.internal.amx.getElementLeft = function(domElement) // TODO move into some "agent" class
  {
    if (navigator.userAgent.toLowerCase().indexOf("applewebkit") != -1)
      return adf.mf.internal.amx._webkitGetElementLeft(domElement);
    return adf.mf.internal.amx._baseGetElementLeft(domElement);
  };

  adf.mf.internal.amx._baseGetElementLeft = function(element) // TODO move into some "agent" class
  {
    // TODO AmxRcfAssert.assertDomNode(element);

    var bodyElement = element.ownerDocument.body;
    var currParent  = element.offsetParent;
    var currLeft    = element.offsetLeft;

    while (currParent)
    {
      element = currParent;
      currLeft += element.offsetLeft;

      if (element != bodyElement)
        currLeft -= element.scrollLeft;

      currParent = currParent.offsetParent;
    }

    return currLeft;
  };

  adf.mf.internal.amx._webkitGetElementLeft = function(element) // TODO move into some "agent" class
  {
    // TODO AmxRcfAssert.assertDomElement(element);

    // getBoundingClientRect was added in safari 4, webkit version 533
    // just look for the API versus the version
    if (!element.getBoundingClientRect)
      return this._baseGetElementLeft(element);

    var boundingRect = element.getBoundingClientRect();
    var elemLeft = boundingRect.left;
    var docElement = element.ownerDocument.documentElement;

    // adjust for the document scroll positions and window borders
    elemLeft -= (docElement.clientLeft - adf.mf.internal.amx.getBrowserViewportScrollLeft());
    return elemLeft;
  };

  /**
   * Returns the element's top side in Window coordinates.
   * @param {HTMLElement} domElement the DOM Element to look at
   * @return {number} the element's top side position in Window coordinates
   */
  adf.mf.internal.amx.getElementTop = function(domElement) // TODO move into some "agent" class
  {
    if (navigator.userAgent.toLowerCase().indexOf("applewebkit") != -1)
      return adf.mf.internal.amx._webkitGetElementTop(domElement);
    return adf.mf.internal.amx._baseGetElementTop(domElement);
  };

  adf.mf.internal.amx._baseGetElementTop = function(element) // TODO move into some "agent" class
  {
    // TODO AmxRcfAssert.assertDomNode(element);

    var bodyElement = element.ownerDocument.body;
    var currParent  = element.offsetParent;
    var currTop     = element.offsetTop;

    //In safari/opera position absolute incorrectly account for body offsetTop
    if (adf.mf.internal.amx.getComputedStyle(element).position == "absolute")
    {
      currTop -= bodyElement.offsetTop;
    }

    while (currParent)
    {
      element = currParent;
      currTop += element.offsetTop;

      if (element != bodyElement)
        currTop -= element.scrollTop;

      currParent = currParent.offsetParent;
    }

    return currTop;
  };

  adf.mf.internal.amx._webkitGetElementTop = function(element) // TODO move into some "agent" class
  {
    // TODO AmxRcfAssert.assertDomElement(element);

    // getBoundingClientRect was added in safari 4, webkit version 533
    // just look for the API versus the version
    if (!element.getBoundingClientRect)
      return adf.mf.internal.amx._baseGetElementTop(element);

    var boundingRect = element.getBoundingClientRect();
    var elemTop = boundingRect.top;
    var docElement = element.ownerDocument.documentElement;

    // adjust for the document scroll positions and window borders
    elemTop -= (docElement.clientTop - adf.mf.internal.amx.getBrowserViewportScrollTop());
    return elemTop;
  };

  /**
   * @return {Number} returns the starting position on the canvas of the viewport
   */
  adf.mf.internal.amx.getBrowserViewportScrollLeft = function() // TODO move into some "agent" class
  {
    if (navigator.userAgent.toLowerCase().indexOf("applewebkit") != -1)
      return this._webkitGetBrowserViewportScrollLeft();
    return this._baseGetBrowserViewportScrollLeft();
  };

  adf.mf.internal.amx._baseGetBrowserViewportScrollLeft = function() // TODO move into some "agent" class
  {
    return document.documentElement.scrollLeft;
  };

  adf.mf.internal.amx._webkitGetBrowserViewportScrollLeft = function() // TODO move into some "agent" class
  {
    return document.body.scrollLeft;
  };

  /**
   * @return {Number} returns the top position on the canvas the viewport begins
   */
  adf.mf.internal.amx.getBrowserViewportScrollTop = function() // TODO use adf.mf.internal.amx.getBrowserViewportScrollTop
  {
    if (navigator.userAgent.toLowerCase().indexOf("applewebkit") != -1)
      return this._webkitGetBrowserViewportScrollTop();
    return this._baseGetBrowserViewportScrollTop();
  };

  adf.mf.internal.amx._baseGetBrowserViewportScrollTop = function() // TODO move into some "agent" class
  {
    return document.documentElement.scrollTop;
  };

  adf.mf.internal.amx._webkitGetBrowserViewportScrollTop = function() // TODO move into some "agent" class
  {
    return document.body.scrollTop;
  };

  /**
   * Tries to return the current style, taking into account the inline styles and style sheets.
   * @param {HTMLElement} element the element in question
   * @param {string} pseudoElement the name of the pseudo-element e.g. ":after" or null if not applicable
   * @return {Object} the style computed style object
   */
  adf.mf.internal.amx.getComputedStyle = function(element, pseudoElement) // TODO move into some "agent" class
  {
    return element.ownerDocument.defaultView.getComputedStyle(element, pseudoElement);
  };

  /**
   * Checks to see if the "ancestorNode" is a ancestor of "node" or if they are the same.
   * Called from our test code
   * @export
   * @param {DOMNode} ancestorNode the potential ancestor or possibly same node as the descendant
   * @param {DOMNode} node the potential descendant or same node as the ancestor
   * @return whether the ancestorNode is an ancestor of the node or they are the same nodes
   */
  adf.mf.internal.amx.isAncestorOrSelf = function(ancestorNode, node)
  {
    return (node == ancestorNode) ? true : adf.mf.internal.amx.isAncestor(ancestorNode, node);
  };

  /**
   * Checks to see if the "ancestorNode" is a ancestor of "node".
   * @param {DOMNode} ancestorNode the potential ancestor
   * @param {DOMNode} node the potential descendant
   * @return whether the ancestorNode is an ancestor of the node
   */
  adf.mf.internal.amx.isAncestor = function(ancestorNode, node)
  {
    if (node == null)
      return false;
    var parentNode = node.parentNode;
    while (parentNode)
    {
      if (parentNode == ancestorNode)
        return true;
      parentNode = parentNode.parentNode;
    }
    return false;
  };

  /**
   * Temporary solution for getting non-primitive element data.
   * @param {HTMLElement} domElement the DOM element the data is associated with
   * @param {string} key the data key
   * @return {Object} the non-primitive data
   * @private
   */
  adf.mf.internal.amx._getNonPrimitiveElementData = function(domElement, key)
  {
    if (domElement == null) return undefined;
    if (domElement._amxNonPrimitiveData == null)
      return undefined;
    return domElement._amxNonPrimitiveData[key];
  };

  /**
   * Temporary solution for setting non-primitive element data.
   * @param {HTMLElement} domElement the DOM element the data is associated with
   * @param {string} key the data key
   * @param {Object} nonPrimitiveData the non-primitive data
   * @private
   */
  adf.mf.internal.amx._setNonPrimitiveElementData = function(domElement, key, nonPrimitiveData)
  {
    if (domElement == null) return;
    if (domElement._amxNonPrimitiveData == null)
      domElement._amxNonPrimitiveData = {};
    domElement._amxNonPrimitiveData[key] = nonPrimitiveData;
  };

  /**
   * Adds padding to a number string.  Does nothing if number is longer than paddingLength.
   * @param {number} number to be padded
   * @param {number} paddingLength specifies length to which to pad
   * @return {string} padded number at least paddingLength long
   */
  adf.mf.internal.amx.addPadding = function(number, paddingLength)
  {
    var padded = "" + number;
    for (var i = padded.length; i < paddingLength; ++i)
    {
      padded = "0" + padded;
    }
    return padded;
  };

  /**
   * Extracts time portion from date object and returns it as "HH:mm:ss"
   * @param {Date} dateObject
   * @return {string} returns time as "HH:mm:ss"
   */
  adf.mf.internal.amx.extractTimeFromDateObject = function(dateObject)
  {
    var time = adf.mf.internal.amx.addPadding(dateObject.getHours(), 2) + ":" +
      adf.mf.internal.amx.addPadding(dateObject.getMinutes(), 2) + ":" +
      adf.mf.internal.amx.addPadding(dateObject.getSeconds(), 2) + "." +
      adf.mf.internal.amx.addPadding(dateObject.getMilliseconds(), 3);
    return time;
  };

  /**
   * Extracts date portion from date object and returns it as "yyyy-MM-dd"
   * @param {Date} dateObject
   * @return {string} returns date as "yyyy-MM-dd"
   */
  adf.mf.internal.amx.extractDateFromDateObject = function(dateObject)
  {
    var time = adf.mf.internal.amx.addPadding(dateObject.getFullYear(), 4) + "-" +
      adf.mf.internal.amx.addPadding(dateObject.getMonth() + 1, 2) + "-" +
      adf.mf.internal.amx.addPadding(dateObject.getDate(), 2);
    return time;
  };

  /**
   * Updates time portion of date object with given time.
   * @param {Date} dateObject is the Date to be updated
   * @param {string} time is a string with this format: "hh:mm"
   */
  adf.mf.internal.amx.updateTime = function(dateObject, time)
  {
    if (time != null && typeof time !== "undefined" && time.length > 4)
    {
      var h = time.substring(0,2);
      var m = time.substring(3,5);
      dateObject.setHours(h);
      dateObject.setMinutes(m);
    }
  };

  /**
   * Updates date portion of date object with given date.
   * @param {Date} dateObject is the Date to be updated
   * @param {string} date is a string with this format: "yyyy-MM-dd".  The year must be full length (e.g. 1999, not 99)
   */
  adf.mf.internal.amx.updateDate = function(dateObject, date)
  {
    if (date != null && typeof date !== "undefined" && date.length > 9)
    {
      var i = date.indexOf("-");
      if (i > 3)
      {
        var year = date.substring(0, i);
        var j = date.indexOf("-", i+1);
        if (j > -1)
        {
          var month = date.substring(i+1, j) - 1;
          var day = date.substring(j+1, date.length);
          dateObject.setFullYear(year);
          dateObject.setMonth(month);
          dateObject.setDate(day);
        }
      }
    }
  };

  /**
   * Check if an object implements a function
   *
   * @param {(Object|null)} obj the object to check.
   * @param {string} name the name of the function to look for
   * @return {boolean} true if the object is non-null and implements a function by the given name
   */
  adf.mf.internal.amx.implementsFunction = function(
    obj,
    name)
  {
    return obj != null && typeof obj[name] === "function";
  };

  adf.mf.internal.NONBLOCKING_CALL_COUNTER = 0;
  adf.mf.internal.pushNonBlockingCall = function()
  {
    ++adf.mf.internal.NONBLOCKING_CALL_COUNTER;
  };

  adf.mf.internal.popNonBlockingCall = function()
  {
    --adf.mf.internal.NONBLOCKING_CALL_COUNTER;
  };

  adf.mf.internal.getUnresolvedCallDepth = function()
  {
    return adf.mf.internal.NONBLOCKING_CALL_COUNTER;
  };
})();
