/* Copyright (c) 2013, 2016, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* ------------------- amx-node.js ---------------------- */
/* ------------------------------------------------------ */

(function()
{
  var nodeToElMap = {};

  // ------ AMX Node ------ //
  /**
   * AMX node definition. The AMX node constructor is private and only the framework
   * may create new node objects.
   * (parameters TBD)
   * @constructor adf.mf.api.amx.AmxNode
   * @augments adf.mf.api.AdfObject
   */
  function AmxNode(
    parentNode,
    tag,
    key)
  {
    this.Init(parentNode, tag, key);
  }

  adf.mf.api.amx.AmxNode = AmxNode;
  adf.mf.api.AdfObject.createSubclass(adf.mf.api.amx.AmxNode, adf.mf.api.AdfObject,
    "adf.mf.api.amx.AmxNode");

  AmxNode.prototype.Init = function(
    parentNode,
    tag,
    key)
  {
    AmxNode.superclass.Init.call(this);

    this._tag = tag;
    this._parent = parentNode;
    this._children = {};
    this._facets = {};
    this._attr = {};
    this._modifiableEl = {};
    this._key = key === undefined ? null : key;
    this._state = adf.mf.api.amx.AmxNodeStates["INITIAL"];
    this._childrenCreated = false;
    this._id = null;
    this._converterTag = null;
    this._converter = null;
    this._elDependencies = null;
    this._elAttributeMap = null;

    // Store the tag instances for all children non-UI tags
    this._tagInstances = null;

    // Variables to track what EL is not yet cached that is required
    this._tagInstancesWaitingOnEl = 0;
    this._tagInstanceIdsWaitingOnEl = {};
    this._attributesWaitingOnEl = 0;
    this._attributeNamesWaitingOnEl = {};

    if (adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST))
    {
      adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
        "adf.mf.api.amx.AmxNode", "Init",
        "Created AMX node for tag " + tag.getNsPrefixedName() + " and ID attribute " +
        tag.getAttribute("id"));
    }

    // Increment the number of nodes waiting
    adf.mf.internal.amx._pageBusyTracker.increment();
  };

  /**
   * Get the unique identifier for this node. This is used as the ID on the root HTML element
   * rendered by this node.
   */
  AmxNode.prototype.getId = function()
  {
    return this._id;
  };

  /**
   * Get the AMX tag that created this node.
   * @return {adf.mf.api.amx.AmxTag} the tag that created the node
   */
  AmxNode.prototype.getTag = function()
  {
    return this._tag;
  };

  /**
   * Get the type handler for this node.
   * @return {Object} the type handler
   */
  AmxNode.prototype.getTypeHandler = function()
  {
    return this.getTag().getTypeHandler();
  };

  /**
   * Fetches the client state for this AMX node based on its ID that was previously stored.
   * TypeHandlers would call this to retrieve old state in render(), refresh(), or postDisplay().
   * @return {Object} undefined or the client state data that was previously stored in this view instance
   */
  AmxNode.prototype.getClientState = function()
  {
    var amxNodeId = this.getId();
    var stateValue = adf.mf.internal.amx._getClientStateMap();
    if (amxNodeId == null)
    {
      throw new Error(
        adf.mf.resource.getInfoString("AMXErrorBundle", "ERROR_ASSOCIATING_CLIENT_STATE",
	  			amxNodeId));
    }
    else if (stateValue == null)
    {
      // The client side state map may not be available if this call is performed on a view that
      // is being destroyed. For example, when a task flow return has been executed, the map will
      // be set to null until the new page context has been setup
      if (adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINE))
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINE,
          "adf.mf.api.amx.AmxNode", "getClientState",
          "State not able to be retrieved, client state map is not available for AmxNode " +
          amxNodeId);
      }
      return undefined;
    }
    else
    {
      var payloadJsonObject = stateValue[amxNodeId];
      return payloadJsonObject;
    }
  };

  /**
   * Stores/replaces the client state for this AMX node based on its ID (if the ID changes, you won't
   * get the same data).
   * Preferrably, TypeHandler functions would call this whenever a state change happens (i.e. something
   * you want to cache so that when the user navigates to a new page and later comes back, you will be
   * able to restore it like a scroll position).
   * However, it is not always feasible to detect when a state change happens so you may need
   * to update the state for your component just before the view is going to be
   * discarded. There are 2 possible scenarios that you will need to account for:
   * - Renderer refresh() (for navigating to the same view again)
   * - Renderer preDestroy() (for navigating to a new view and navigating back at a later time)
   * @param {String} amxNodeId the amxNode.id that uniquely identifies the stored data
   * @param {Object} payloadJsonObject the client state data to store for the lifetime of this view instance
   */
  AmxNode.prototype.setClientState = function(payloadJsonObject)
  {
    var amxNodeId = this.getId();
    var stateValue = adf.mf.internal.amx._getClientStateMap();
    if (amxNodeId == null)
    {
      throw new Error(
        adf.mf.resource.getInfoString("AMXErrorBundle", "ERROR_ASSOCIATING_CLIENT_STATE",
	  			amxNodeId));
    }
    else if (stateValue == null)
    {
      // The client side state map may not be available if this call is performed on a view that
      // is being destroyed. For example, when a task flow return has been executed, the map will
      // be set to null until the new page context has been setup
      if (adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINE))
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINE,
          "adf.mf.api.amx.AmxNode", "setClientState",
          "State not being saved, client state map is not available for AmxNode " + amxNodeId);
      }
    }
    else
    {
      stateValue[amxNodeId] = payloadJsonObject;
    }
  };

  /**
   * Fetches the volatile state for this AMX node based on its ID that was previously stored.
   * TypeHandlers would call this to retrieve old state in render(), refresh(), or postDisplay().
   * @return {Object} undefined or the volatile state data that was previously stored since the last navigation
   */
  AmxNode.prototype.getVolatileState = function()
  {
    var amxNodeId = this.getId();
    var stateValue = adf.mf.internal.amx._getVolatileStateMap();
    if (amxNodeId == null)
    {
      throw new Error(
        adf.mf.resource.getInfoString("AMXErrorBundle", "ERROR_ASSOCIATING_VOLATILE_STATE",
	  			amxNodeId));
    }
    else if (stateValue == null)
    {
      throw new Error(
        adf.mf.resource.getInfoString("AMXErrorBundle", "ERROR_VOLATILE_STATE_NOT_AVAILABLE",
	  			stateValue));
    }
    else
    {
      var payloadJsonObject = stateValue[amxNodeId];
      return payloadJsonObject;
    }
  };

  /**
   * Stores/replaces the AMX volatile state for the specified AMX node ID.
   * Preferrably, renderers would call this whenever a volatile state change happens (i.e. something you want
   * to forget when navigating to a new AMX page but might want to keep around in case a component gets redrawn.
   * @param {Object} payloadJsonObject the volatile state data to store until navigation
   */
  AmxNode.prototype.setVolatileState = function(payloadJsonObject)
  {
    var amxNodeId = this.getId();
    var stateValue = adf.mf.internal.amx._getVolatileStateMap();
    if (amxNodeId == null)
    {
      throw new Error(
        adf.mf.resource.getInfoString("AMXErrorBundle", "ERROR_ASSOCIATING_VOLATILE_STATE",
	  			amxNodeId));
    }
    else if (stateValue == null)
    {
      throw new Error(
        adf.mf.resource.getInfoString("AMXErrorBundle", "ERROR_VOLATILE_STATE_NOT_AVAILABLE",
	  			stateValue));
    }
    else
    {
      stateValue[amxNodeId] = payloadJsonObject;
    }
  };

  /**
   * Get the converter, if set, for this node.
   */
  AmxNode.prototype.getConverter = function()
  {
    return this._converter;
  };

  /**
   * Set the converter for this node.
   */
  AmxNode.prototype.setConverter = function(converter)
  {
    this._converter = converter;
  };

  /**
   * For an attribute, create and store an EL expression that may be used to set EL values
   * into the model. The value is context insensitive and may be used to set a value at any
   * time. Common use is to set a value based on user interaction. May be called by type
   * handlers.
   *
   * @param {string} name the name of the attribute
   * @return {(string|null)} the modifyable EL. Also stored on the node. Returns null if the
   *         attribute in question is not bound to an EL value.
   */
  AmxNode.prototype.storeModifyableEl = function(name)
  {
    var tag = this.getTag();
    if (tag.isAttributeElBound(name))
    {
      var el = this.getAttributeExpression(name, false, true);
      el = el.toContextFreeExpression();
      this._modifiableEl[name] = el;
      return el;
    }
    else
    {
      return null;
    }
  };

  /**
   * Initializes the node, performing any EL evaluation and any other pre-render logic.
   * Called by the framework. It is expected for the state to be WAITING_ON_EL_EVALUATION,
   * ABLE_TO_RENDER or UNRENDERED after invoking this function. This function also creates
   * the children AMX nodes once the status is WAITING_ON_EL_EVALUATION, but does not
   * initialize them.
   */
  AmxNode.prototype.init = function()
  {
    var perf = adf.mf.internal.perf.startMonitorCall("Initialize AMX node", adf.mf.log.level.FINEST, null);
    var state = this.getState();
    var tag = this.getTag();
    var attr = tag.getAttributes();
    var name = null;

    try
    {
      // Create a unique ID that is based on the stamped key, if present.
      this._createUniqueId();

      // Set Call instance name after unique id has been created
      var instanceName = tag.getName() + ":" + this.getId();
      perf.setInstanceName(instanceName);

      // TODO: although no types currently need to customize how attributes
      // are loaded, we really need a method to allow the type handlers to
      // control what attributes are processed and how they are processed.
      // Due to time constraints and the desire to make sure the API is solid,
      // it is not being added at this time.

      // Process the rendered attribute if we haven't already
      var cacheMiss = this._processAttribute("rendered");

      if (cacheMiss)
      {
        // Ensure the state is still INITIAL so that the building
        // of the node hierarchy does not continue
        this.setState(adf.mf.api.amx.AmxNodeStates["INITIAL"]);

        // At this time, only setup the data change events for the rendered attribute
        this._registerRenderedAttributeForDataChange();

        return;
      }

      if (!this.getAttribute("rendered"))
      {
        if (this.getAttributeExpression("rendered") != null)
        {
          // Hookup data change events on the rendered attribute when EL bound
          this._registerRenderedAttributeForDataChange();
        }

        // Update the state
        this.setState(adf.mf.api.amx.AmxNodeStates["UNRENDERED"]);
        return;
      }

      for (name in attr)
      {
        // ID and rendered attributes have already been processed
        if (name == "rendered" || name == "id")
        {
          continue;
        }

        this._processAttribute(name);
      }

      // Now, look for a converter tag
      this._processConverterTag();

      // Update the state to reflect if all the EL is available
      this.setState(this._tagInstancesWaitingOnEl == 0 &&
        this._attributesWaitingOnEl == 0 ?
        adf.mf.api.amx.AmxNodeStates["ABLE_TO_RENDER"] :
        adf.mf.api.amx.AmxNodeStates["WAITING_ON_EL_EVALUATION"]);

      state = this.getState();
      if (state == adf.mf.api.amx.AmxNodeStates["WAITING_ON_EL_EVALUATION"] ||
        state == adf.mf.api.amx.AmxNodeStates["ABLE_TO_RENDER"])
      {
        // Once all the necessary EL has been loaded, create the children nodes,
        // but do not initialize them
        this._createChildren();

        state = this.getState();
        if (state == adf.mf.api.amx.AmxNodeStates["WAITING_ON_EL_EVALUATION"] ||
          state == adf.mf.api.amx.AmxNodeStates["ABLE_TO_RENDER"])
        {
          if (this._processConverter())
          {
            this._convertValue();
          }
        }
      }

      // Setup validation of the input value of this node if there is one
      this._setupInputValueValidation();

      // Finally hook up the data change events
      this._elDependencies = new adf.mf.internal.amx.AmxElDependencies(
        this._getAttributesExpressionMap());
      this._postProcessForDataChangeNotification(true);
    }
    finally
    {
      perf.stop();
    }
  };

  /**
   * Get the stamp key for the AMX node. The stamp key identifies AMX nodes that are produced inside of
   * iterating containers. This is provided by the parent node. An example tag that uses stamp keys is
   * the AMX iterator tag.
   * @return {(Object|null)} the key or null if the node was not stamped
   */
  AmxNode.prototype.getStampKey = function()
  {
    return this._key;
  };

  /**
   * Get a list of the attribute names that have been defined for this node.
   * @return {Array.<string>} array of the attribute names
   */
  AmxNode.prototype.getDefinedAttributeNames = function()
  {
    var names = [];
    for (var name in this._attr)
    {
      names.push(name);
    }
    return names;
  };

  /**
   * Gets an attribute value for the attribute of the given name.
   * @param {string} name the name of the attribute
   * @return {(Object|null|undefined)} returns the value (may be null) or
   *         undefined if the attribute is not set or is not yet loaded.
   */
  AmxNode.prototype.getAttribute = function(name)
  {
    return this._attr[name];
  };

  /**
   * Given the name of an attribute, get the EL expression.
   *
   * @param {string} name the name of the attribute
   * @param {boolean=} returnStaticValue if true and the attribute is not EL bound, the string
   *        value of the attribute from the tag will be returned or undefined if the attribute is
   *        not defined on the tag
   * @param {boolean} returnEL if true, the ELExpression value of the attribute from the tag
   *        will be returned or undefined if the attribute is not defined on the tag.
   *        If false, it will return String representation of EL Expression.
   * @return {(string|null)} the EL expression if the attribute is EL bound, otherwise null.
   */
  AmxNode.prototype.getAttributeExpression = function(
    name,
    returnStaticValue,
    returnEL)
  {
    var tag = this.getTag();

    // See if this attribute is an EL expression
    if (!tag.isAttributeElBound(name))
    {
      return (returnStaticValue === true) ? tag.getAttribute(name) : null;
    }

    var expr;
    if (this._elAttributeMap != null)
    {
      expr = this._elAttributeMap[name];
      if (expr != null)
      {
        return returnEL ? expr: expr.getExpression();
      }
    }

    var value = tag.getAttribute(name);

    var expr = adf.mf.internal.el.parser.parse(value);
    expr = AmxNode.__performElSubstitutions(expr);

    if (expr != null)
    {
      if (this._elAttributeMap == null)
      {
        this._elAttributeMap = {};
      }

      this._elAttributeMap[name] = expr;
    }

    return returnEL ? expr : expr.getExpression();
  };

  /**
   * Used by the type handler or the framework to store the attribute value for an attribute onto
   * the node. This function does not update the model.
   * @param {string} name the name of the attribute
   * @param {object} value the value of the attribute
   */
  AmxNode.prototype.setAttributeResolvedValue = function(name, value)
  {
    this._attr[name] = value;
  };

  /**
   * For use by type handlers to set the value of an attribute on the model. This value will be sent
   * to the Java side to update the EL value. The value on the AMX node will not be updated by this
   * call, it is expected that a data change event will result to update the AMX node.
   * @param {string} name the name of the attribute
   * @param {object} value the new value of the attribute
   */
  AmxNode.prototype.setAttribute = function(name, value)
  {
    var that = this;
    return new adf.mf.internal.BasePromise(
      function(resolve, reject)
      {
        var el = that._modifiableEl[name];

        if (el == null)
        {
          var tag = that.getTag();

          // If the EL is null, then this will not work if the node is
          // not in context. Try to set the EL using the raw EL from the tag
          //
          // First, ensure the attribute is EL bound
          if (tag.isAttributeElBound(name))
          {
            el = that.getTag().getAttribute(name);
          }
        }

        that.setAttributeResolvedValue(name, value);

        if (el == null)
        {
          // If this attribute was not EL based, just resolve the promise
          resolve();
        }
        else
        {
          var oldValue = that.getAttribute(name);
          var p = {"name": el, "value": value};
          if (!el.indexOf) {
              p["name"] = el.getExpression();
              p["expression"] = el;
          }
          amx.setElValue(p)
            .then(
              function()
              {
                resolve();
              },
              function()
              {
                that.setAttributeResolvedValue(name, oldValue);
              });
        }
      }); // TODO We do not want to support/document that this returns a promise object resolved once the
          //      value has been set. Instead, we ought to provide success/failed callbacks as parameters.
  };

  /**
   * Check if the attribute has been specified.
   * @param {string} name the name of the attribute
   * @return {boolean} true if the attribute was defined by the user
   */
  AmxNode.prototype.isAttributeDefined = function(name)
  {
    return this._tag.getAttribute(name) !== undefined;
  };

  /**
   * Get the parent AMX node.
   * @return {(adf.mf.api.amx.AmxNode|null)} the parent node or null for the top level
   *         node.
   */
  AmxNode.prototype.getParent = function()
  {
    return this._parent;
  };

  /**
   * Adds a child AMX node to this node. Should only be called by the framework or the type handler.
   * @param {adf.mf.api.amx.AmxNode} child the child to add
   * @param {(string|null)} facetName the name of the facet or null if the child does not belong in a
   *        facet.
   */
  AmxNode.prototype.addChild = function(child, facetName)
  {
    var key = child.getStampKey();
    var children;
    if (facetName == null)
    {
      children = this._children[key];
      if (children == null)
      {
        this._children[key] = children = [];
      }
    }
    else
    {
      var facets = this._facets[key];
      if (facets == null)
      {
        facets = this._facets[key] = {};
      }
      children = facets[facetName];
      if (children == null)
      {
        facets[facetName] = children = [];
      }
    }

    children.push(child);
  };

  /**
   * Remove a child node from this node. Note that the AMX node will be removed from the hierarchy,
   * but not the DOM for that node. It is up to the caller to remove the DOM. This is to allow
   * type handlers to handle animation and other transitions when DOM is replaced.
   *
   * @param {adf.mf.api.amx.AmxNode} amxNode the node to remove
   * @return {boolean} true if the node was found and removed.
   */
  AmxNode.prototype.removeChild = function(amxNode)
  {
    var key = amxNode.getStampKey();
    var nodeId = amxNode.getId();
    var state = amxNode.getState();
    var result = this._findChildIndexAndFacetName(key, nodeId);

    if (result == null)
    {
      return false;
    }

    amxNode._removeFromDataChangeNotification(true);

    var facetName = result["facetName"];
    var childrenArray = null;
    var index = result["index"];

    if (facetName == null)
    {
      childrenArray = this._children[key];
    }
    else
    {
      childrenArray = this._facets[key][facetName];
    }

    // Splice updates the array in place
    childrenArray.splice(index, 1);

    return true;
  };

  /**
   * Removes any children that are present with the given stamp key
   * @param {object} stampKey the key to use to find the nodes
   * @return {Array.<adf.mf.api.amx.AmxNode>} array of the nodes removed
   */
  AmxNode.prototype.removeChildrenByKey = function(
    stampKey)
  {
    var removed = [];

    // Note, slice used to create a copy so it will not be modified during changes
    var children = this.getChildren(null, stampKey).slice();

    for (var c = 0, numChildren = children.length; c < numChildren; ++c)
    {
      var child = children[c];
      if (this.removeChild(child))
      {
        removed.push(child);
      }
    }

    return removed;
  };

  /**
   * Replace a child node with a new node.
   * @param {adf.mf.api.amx.AmxNode} oldNode the node to replace
   * @param {adf.mf.api.amx.AmxNode} newNode the replacement node
   * @return {boolean} true if the old node was found and replaced.
   */
  AmxNode.prototype.replaceChild = function(
    oldNode,
    newNode)
  {
    var key = oldNode.getStampKey();
    var nodeId = oldNode.getId();
    var result = this._findChildIndexAndFacetName(key, nodeId);
    if (result == null)
    {
      return false;
    }

    oldNode._removeFromDataChangeNotification(true);

    var facetName = result["facetName"];
    if (facetName == null)
    {
      this._children[key][result["index"]] = newNode;
    }
    else
    {
      var facetChildren = this._facets[key][facetName];
      facetChildren[result["index"]] = newNode;
    }

    return true;
  };

  /**
   * Get the children AMX nodes.
   * @param {(string|null|undefined)} facetName the name of the facet to retrieve the children
   *        or null to get the non-facet children.
   * @param {(Object|null|undefined)} key An optional key to specify for stamping. If provided, it will retrieve
   *        the children AMX nodes for a given stamping key.
   * @return {Array.<adf.mf.api.amx.AmxNode>} an array of the children AMX nodes. Returns an empty array
   *         if no children exist or if there are no children for the given stamp key.
   */
  AmxNode.prototype.getChildren = function(facetName, key)
  {
    if (key === undefined)
    {
      key = null;
    }

    var children;
    if (facetName == null)
    {
      children = this._children[key];
    }
    else
    {
      var facets = this._facets[key];
      if (facets == null)
      {
        return [];
      }

      children = facets[facetName];
    }

    return children == null ? [] : children;
  };

  /**
   * Get all of the facets of the AMX node.
   * @param {(Object|null|undefined)} key An optional key to specify for stamping. If provided, it will retrieve
   *        the facet AMX nodes for a given stamping key.
   * @return {Object.<string, Array.<adf.mf.api.amx.AmxNode>>} map of facets defined for the node
   */
  AmxNode.prototype.getFacets = function(key)
  {
    if (key === undefined)
    {
      key = null;
    }

    var facets = this._facets[key];
    return facets == null ? {} : facets;
  };

  /**
   * Perform a tree visitation starting from this node.
   * @param {adf.mf.api.amx.VisitContext} context the visit context
   * @param {Function} callback the callback function to invoke when visiting. Should accept
   *        the context and the node as arguments
   * @return {boolean} true if the visitation is complete and should not continue.
   */
  AmxNode.prototype.visit = function(
    context,
    callback)
  {
    var th = this.getTypeHandler();
    if (adf.mf.internal.amx.implementsFunction(th, "visit"))
    {
      return th.visit(this, context, callback);
    }

    if (context.isVisitAll() || context.getNodesToVisit().indexOf(this) >= 0)
    {
      var result = callback(context, this);
      switch (result)
      {
        case adf.mf.api.amx.VisitResult["ACCEPT"]:
          return this.visitChildren(context, callback);

        case adf.mf.api.amx.VisitResult["REJECT"]:
          return false;

        case adf.mf.api.amx.VisitResult["COMPLETE"]:
        default:
          return true;
      }
    }

    return this.visitChildren(context, callback);
  };

  /**
   * Perform a tree visitation of the children of the node.
   * @param {adf.mf.api.amx.VisitContext} context the visit context
   * @param {Function} callback the callback function to invoke when visiting. Should accept
   *        the context and the node as arguments
   * @return {boolean} true if the visitation is complete and should not continue.
   */
  AmxNode.prototype.visitChildren = function(
    context,
    callback)
  {
    var th = this.getTypeHandler();
    if (adf.mf.internal.amx.implementsFunction(th, "visitChildren"))
    {
      return th.visitChildren(this, context, callback);
    }

    return this.visitStampedChildren(null, null, null,
      context, callback);
  };

  /**
   * Convenience function for type handlers that stamp their children to
   * visit the children AMX nodes from inside of a custom visitChildren
   * function.
   *
   * @param {object} key the stamp key of the children to visit.
   * @param {(Array.<string>|null)} facetNamesToInclude list of facet names to visit.
   *        If empty the facets will not be processed for this
   *        stamp. If null, all the facets will be processed. To visit the children of
   *        non-facets, include null in the array.
   * @param {(function|null)} filterCallback an optional function to filter the children
   *        to visit. The function will be invoked with this node,
   *        the stamp key, and the child node.
   *        Function must return a boolean. If true, the tag will be used to create
   *        children, if false the tag will not be processed.
   * @param {adf.mf.api.amx.VisitContext} context the visit context
   * @param {Function} callback the callback function to invoke when visiting. Should accept
   *        the context and the node as arguments
   * @return {boolean} true if the visitation is complete and should not continue.
   */
  AmxNode.prototype.visitStampedChildren = function(
    key,
    facetNamesToInclude,
    filterCallback,
    visitContext,
    visitCallback)
  {
    var visitAll = visitContext.isVisitAll();
    var nodesToWalk = visitContext.getNodesToWalk();

    var facetNames;
    if (facetNamesToInclude == null)
    {
      facetNames = [];
      var facets = this.getFacets(key);
      for (var name in facets)
      {
        facetNames.push(name);
      }
      facetNames.push(null);
    }
    else
    {
      facetNames = facetNamesToInclude;
    }

    for (var f = 0, numFacets = facetNames.length; f < numFacets; ++f)
    {
      var facetName = facetNames[f];
      var children = this.getChildren(facetName, key);
      // Loop through all the children, note if the facet name is null
      // then we are visiting the direct (non-facet) children.
      for (var i = 0, size = children.length; i < size; ++i)
      {
        var child = children[i];
        // See if we are visiting all or if the node is one to be visited
        if (visitAll || nodesToWalk.indexOf(child) >= 0)
        {
          // If there is a filter function, call it to see if this node
          // should be visited
          if (filterCallback == null ||
            filterCallback(this, key, child))
          {
            if (child.visit(visitContext, visitCallback))
            {
              return true;
            }
          }
        }
      }
    }

    return false;
  };

  /**
   * Get the rendered children of the AMX node.
   * @param {(string|null)} facetName the name of the facet to retrieve the rendered children for
   *        or null to get the rendered children outside of the facets.
   * @param {(Object|null)} key An optional key to specify for stamping. If provided, it will
   *        retrieve the children AMX nodes for a given stamping key.
   * @return {Array.<adf.mf.api.amx.AmxNode>} the children that should be rendered for the given
   *         stamp key. This function will flatten any flattenable components and will not return
   *         any non-rendered nodes.
   */
  AmxNode.prototype.getRenderedChildren = function(facetName, key)
  {
    var result = [];
    var children = this.getChildren(facetName, key);

    for (var i = 0, size = children.length; i < size; ++i)
    {
      var vc = new adf.mf.api.amx.VisitContext();
      var child = children[i];

      child.visit(vc,
        function (context, node)
        {
          if (!node.isReadyToRender())
          {
            return adf.mf.api.amx.VisitResult["REJECT"];
          }

          // Skip over any flattened nodes. Note that this means that the type handler
          // will never be called for preDestroy and destroy as those functions are currently
          // based on DOM nodes, not AMX nodes.
          if (node.isFlattenable())
          {
            // To support the functionality of amx:facetRef, use a "__getRenderedChildren" method
            // to allow the facet reference to resolve the children to be rendered as the children
            // of the fragment facet tag. The "__" prefix is used as this should not be consumed
            // by 3rd party type handlers, it is specifically for internal use only.
            var th = node.getTypeHandler();
            if (adf.mf.internal.amx.implementsFunction(th, "__getRenderedChildren"))
            {
              var nodes = th.__getRenderedChildren(node);
              result.push.apply(result, nodes);
              return adf.mf.api.amx.VisitResult["REJECT"];
            }

            return adf.mf.api.amx.VisitResult["ACCEPT"];
          }

          result.push(node);
          return adf.mf.api.amx.VisitResult["REJECT"];
        });
    }

    return result;
  };

  /**
   * Get if the node is flattenable. A flattened node produces no HTML but instead provides
   * information to the parent or about how the children should be handled. Allows for customizing
   * the creation of children nodes as well.
   *
   * @return {boolean} true if the node is flattenable
   */
  AmxNode.prototype.isFlattenable = function()
  {
    var th = this.getTypeHandler();
    return adf.mf.internal.amx.implementsFunction(th, "isFlattenable") && th.isFlattenable(this);
  };

  /**
   * Get the current state of the node.
   * @return {int} the current state, as a constant value from adf.mf.api.amx.AmxNodeStates.
   */
  AmxNode.prototype.getState = function()
  {
    return this._state;
  };

  /**
   * Moves the state of the node. Should only be called by the framework or the node's type handler.
   * @param {int} state the new state of the node
   */
  AmxNode.prototype.setState = function(state)
  {
    var isFinestLoggingEnabled = adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST);

    if (isFinestLoggingEnabled)
    {
      adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
        "adf.mf.api.amx.AmxNode", "setState",
        "Setting state of AmxNode " + this.getId() + " to " +
        adf.mf.api.amx.AmxNodeStates.getLabelForValue(state));
    }

    // Check the new state and see if the page busy tracker needs to
    // be updated
    switch (state)
    {
      case adf.mf.api.amx.AmxNodeStates["WAITING_ON_EL_EVALUATION"]:
      case adf.mf.api.amx.AmxNodeStates["INITIAL"]:
      case adf.mf.api.amx.AmxNodeStates["PARTIALLY_RENDERED"]:
      {
        switch (this._state)
        {
          case adf.mf.api.amx.AmxNodeStates["UNRENDERED"]:
          case adf.mf.api.amx.AmxNodeStates["RENDERED"]:
          case adf.mf.api.amx.AmxNodeStates["ABLE_TO_RENDER"]:
          {
            // The node was "resolved" but now will be waiting on a condition. Mark the node as
            // being in a pending state
            adf.mf.internal.amx._pageBusyTracker.increment();
            break;
          }
        }
        break;
      }
      // ABLE_TO_RENDER, RENDERED, UNRENDERED
      default:
      {
        switch (this._state)
        {
          case adf.mf.api.amx.AmxNodeStates["WAITING_ON_EL_EVALUATION"]:
          case adf.mf.api.amx.AmxNodeStates["INITIAL"]:
          case adf.mf.api.amx.AmxNodeStates["PARTIALLY_RENDERED"]:
          {
            // The node was waiting on a condition but now is "resolved"
            adf.mf.internal.amx._pageBusyTracker.decrement();
            break;
          }
        }
        break;
      }
    }
    this._state = state;
  };

  /**
   * @deprecated use render instead
   */
  AmxNode.prototype.renderNode = function()
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "renderNode", "MSG_DEPRECATED", "amxNode.renderNode", "amxNode.render");

    var renderResult = this.render();
    return renderResult;
  };

  /**
   * Render the AmxNode.
   *
   * @return {(HTMLElement|null)} the root HTML element for this AmxNode or null if there is no type
   *   handler for this node
   */
  AmxNode.prototype.render = function()
  {
    var domNode = null;

    // facet are not rendered as they should be handled by the parent
    var tag = this.getTag();
    if (tag.isUITag())
    {
      // if there are a "rendered" property set to false, then, we do not render
      if (this.getAttribute("rendered") === false)
      {
        // domNode will be null
      }
      else
      {
        var nodeTypeHandler = this.getTypeHandler();

        // if renderer found
        if (adf.mf.internal.amx.implementsFunction(nodeTypeHandler, "render"))
        {
          var id = this.getId();
          if (adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST))
          {
            adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
              "adf.mf.api.amx.AmxNode", "renderNode",
              "Rendering AmxNode " + id);
          }

          domNode = nodeTypeHandler.render(this, id);

          // render the AmxNode
          try
          {
            domNode.setAttribute("id", id);
          }
          catch (ex)
          {
            adf.mf.log.logInfoResource("AMXInfoBundle",
              adf.mf.log.level.SEVERE, "renderNode", "MSG_AMX_NODE_RENDER_FAILED",
              this.getTag().getNsPrefixedName());

            // Only log the details at a fine level for security reasons
            if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.FINE))
            {
              adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
                "adf.mf.api.amx.AmxNode", "render",
                "Setting the ID attribute failed for tag " +
                this.getTag().getNsPrefixedName() + " with ID " + id + " error: " + ex);
            }

            return null;
          }

          try
          {
            // Add this AmxNode to init and post display queues
            if (adf.mf.internal.amx.implementsFunction(nodeTypeHandler, "init"))
            {
              amx.queueForInit(this);
            }
            if (adf.mf.internal.amx.implementsFunction(nodeTypeHandler, "postDisplay"))
            {
              amx.queueForPostDisplay(this);
            }

            adf.mf.internal.amx._setNonPrimitiveElementData(domNode, "amxNode", this);

            // add the amx classes
            domNode.classList.add("amx-node");
            if (tag._rootClassName == null)
            {
              var theNamespace = tag.getNamespace();
              if (theNamespace == adf.mf.api.amx.AmxTag.NAMESPACE_AMX)
              {
                tag._rootClassName = "amx-" + tag.getName();
              }
              else if (theNamespace == adf.mf.api.amx.AmxTag.NAMESPACE_DVTM)
              {
                tag._rootClassName = "dvtm-" + tag.getName();
              }
              else
              {
                tag._rootClassName = ""; // custom components should add their own class names
              }
            }
            if (tag._rootClassName != "")
            {
              domNode.classList.add(tag._rootClassName);
            }
            var styleClass = this.getAttribute("styleClass");
            if (styleClass != null && styleClass != "")
            {
              if (adf.mf.environment.profile.dtMode)
              {
                // if adf.mf.environment.profile.dtMode, remove el
                styleClass = styleClass.replace(/#\{(.*?)\}/ig, ' ');
              }
              var splits = styleClass.split(" ");
              for (var i=0, count=splits.length; i<count; ++i)
              {
                var split = splits[i];
                if ("" != split)
                  domNode.classList.add(split);
              }
            }
            if (adf.mf.api.amx.isValueTrue(this.getAttribute("readOnly")))
            {
              domNode.classList.add("amx-readOnly");
            }
            if (adf.mf.api.amx.isValueTrue(this.getAttribute("disabled")))
            {
              domNode.classList.add("amx-disabled");
            }
            if (typeof nodeTypeHandler.destroy === "function")
            {
              domNode.classList.add("amx-has-destroy");
            }
            if (typeof nodeTypeHandler.preDestroy === "function")
            {
              domNode.classList.add("amx-has-predestroy");
            }

            // add the eventual inlineStyle
            var inlineStyle = this.getAttribute("inlineStyle");
            if (inlineStyle)
            {
              if (adf.mf.environment.profile.dtMode)
              {
                // if adf.mf.environment.profile.dtMode, remove el
                inlineStyle = inlineStyle.replace(/#\{(.*?)\}/ig, ' ');
              }
              var existingStyle = domNode.getAttribute("style");
              if (existingStyle == null)
                domNode.setAttribute("style", inlineStyle);
              else
                domNode.setAttribute("style", existingStyle + ";" + inlineStyle);
            }

            this._applyClientListenerAssociations(domNode);
          }
          catch (ex)
          {
            adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
              "adf.mf.api.amx.AmxNode.render", "MSG_AMX_NODE_RENDER_FAILED",
              this.getTag().getNsPrefixedName());

            // Only log the details at a fine level for security reasons
            if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.FINE))
            {
              adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
                "adf.mf.api.amx.AmxNode", "render",
                "Error rendering tag " +
                this.getTag().getNsPrefixedName() + " with ID " + this.getId() + " error: " + ex);
            }
          }
        }
        else
        {
          adf.mf.log.logInfoResource("AMXInfoBundle",
            adf.mf.log.level.WARNING, "render", "MSG_NO_RENDERER",
            this.getTag().getNsPrefixedName());
        }
      }
    }

    if (this.getState() != adf.mf.api.amx.AmxNodeStates["PARTIALLY_RENDERED"])
    {
      this.setState(adf.mf.api.amx.AmxNodeStates["RENDERED"]);
    }

    return domNode;
  };

  /**
   * Apply clientListener event type associations.
   * @param {HTMLElement} rootElement the root element of this component
   */
  AmxNode.prototype._applyClientListenerAssociations = function(rootElement)
  {
    var clientListenerTypes = this.getAttribute("data-clientListenerTypes");
    if (clientListenerTypes)
    {
      var amxNodeId = this.getId();
      var th = this.getTypeHandler();
      for (var eventType in clientListenerTypes)
        th.__experimentalCLAssociation(
          this,
          amxNodeId,
          eventType,
          rootElement); // TODO what if the type or method changes due to DCEs?
    }
  };

  /**
   * @deprecated
   */
  AmxNode.prototype.renderSubNodes = function(facetName, key)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "amxNode.renderSubNodes", "MSG_DEPRECATED",
      "amxNode.renderSubNodes", "amxNode.renderDescendants");

    var arrayOfHtmlElements = this.renderDescendants(facetName, key);
    var subNodes = [];
    for (var i=0, size=arrayOfHtmlElements.length; i<size; ++i)
    {
      var elementToAdd = arrayOfHtmlElements[i];
      subNodes.push(elementToAdd);
    }
    return subNodes;
  };

  /**
   * Renders the sub-AmxNodes of this AmxNode.
   * @param {(string|null)} facetName the name of the facet to render the children for or null
   *        to render the non-facet children.
   * @param {(Object|null)} key An optional key to specify for stamping. If provided, it will render
   *        the children AMX nodes for a given stamping key.
   * @return {Array<HtmlElement>} array of all of the rendered HTML nodes
   */
  AmxNode.prototype.renderDescendants = function(facetName, key)
  {
    var arrayOfHtmlElements = [];
    var children = this.getRenderedChildren(facetName, key);
    for (var i=0, size=children.length; i<size; ++i)
    {
      var childAmxNode = children[i];
      var subElement = childAmxNode.render();
      if (subElement)
      {
        arrayOfHtmlElements.push(subElement);
      }
    }

    return arrayOfHtmlElements;
  };

  /**
   * @deprecated
   */
  AmxNode.prototype.rerenderNode = function()
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "amxNode.rerenderNode", "MSG_DEPRECATED", "amxNode.rerenderNode", "amxNode.rerender");

    this.rerender();
  };

  /**
   * Re-renders the AmxNode.
   */
  AmxNode.prototype.rerender = function()
  {
    var oldDomNode = document.getElementById(this.getId());
    if (oldDomNode == null)
    {
      var amxNode = this.__getRenderingParent().__getClosestRenderedNode();
      if (amxNode != null)
      {
        amxNode.rerender();
      }
      return;
    }

    var isFinestLoggingEnabled = adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST);
    if (isFinestLoggingEnabled)
    {
      adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
        "adf.mf.api.amx.AmxNode", "rerenderNode",
        "Re-rendering AmxNode " + this.getId());
    }

    var newDomNode = this.render();
    if (newDomNode)
    {
      oldDomNode.parentNode.insertBefore(newDomNode, oldDomNode);
    }
    adf.mf.api.amx.removeDomNode(oldDomNode);
    // rerender function is called independently from outside of the amx core so
    // init and postDisplay have to be invoked now to ensure that the node
    // will be fully initialized
    if (amx.mustProcessQueues === true)
    {
      amx.processAndCleanInitQueue();
      amx.processAndCleanPostDisplayQueue();
    }
  };

  /**
   * Checks the state of the node to see if the node was rendered or is able to be be rendered.
   * The node is considered to be renderable if it is in the ABLE_TO_RENDER,
   * RENDERED or PARTIALLY_RENDERED state.
   *
   * @return {boolean} true if the node was rendered or should be rendered.
   */
  AmxNode.prototype.isReadyToRender = function()
  {
    switch (this.getState())
    {
      case adf.mf.api.amx.AmxNodeStates["ABLE_TO_RENDER"]:
      case adf.mf.api.amx.AmxNodeStates["RENDERED"]:
      case adf.mf.api.amx.AmxNodeStates["PARTIALLY_RENDERED"]:
        return true;
      default:
        return false;
    }
  };

  /**
   * Checks if a node was rendered and the DOM is still present on the page.
   *
   * @return {boolean} true if the node was rendered and it's DOM node is present on the page
   */
  AmxNode.prototype.isRendered = function()
  {
    switch (this.getState())
    {
      // Note that WAITING_ON_EL_EVALUATION may be the state if updateAttributes set it to that
      // value after the state was previously PARTIALLY_RENDERED
      case adf.mf.api.amx.AmxNodeStates["WAITING_ON_EL_EVALUATION"]:
      case adf.mf.api.amx.AmxNodeStates["RENDERED"]:
      case adf.mf.api.amx.AmxNodeStates["PARTIALLY_RENDERED"]:
        return document.getElementById(this.getId()) != null;
      default:
        return false;
    }
  };

  /**
   * Called to refresh the HTML of a node. This method is called after the updateChildren
   * method and should be implemented by type handlers that wish to update their DOM in
   * response to a change.
   * @param {adf.mf.api.amx.AmxAttributeChange} attributeChanges the changed attributes
   * @param {(adf.mf.api.amx.AmxDescendentChanges|null)} descendentChanges the changes for any
   *        descendent nodes that need to be refreshed.
   */
  AmxNode.prototype.refresh = function(attributeChanges, descendentChanges)
  {
    var th = this.getTypeHandler();
    if (adf.mf.internal.amx.implementsFunction(th, "refresh"))
    {
      th.refresh(this, attributeChanges, descendentChanges);
    }
  };

  /**
   * Applies any attribute changes. Usually called as a result of the data change
   * framework.
   *
   * @param {Object.<string, boolean>} affectedAttributes object with keys of the
   *        attribute names that have changed and a value of true.
   * @param {Object.<string, adf.mf.api.amx.AmxCollectionChange>} collectionChanges the change
   *        details for collection attributes that have changed
   * @return {adf.mf.api.amx.AmxAttributeChange} returns the changed properties and their old
   *         values.
   */
  AmxNode.prototype.updateAttributes = function(affectedAttributes, collectionChanges)
  {
    // First, update the attributes that have changed
    var changes = new adf.mf.api.amx.AmxAttributeChange();
    var cacheMiss = false;

    // See if one of the affected attributes is the rendered attribute
    if (affectedAttributes["rendered"])
    {
      var oldValue = this.getAttribute("rendered");
      var cacheMiss = this._processAttribute("rendered");

      if (cacheMiss)
      {
        // The new value is not in the EL cache
        this.setState(adf.mf.api.amx.AmxNodeStates["INITIAL"]);
        changes.__addChangedAttribute("rendered", oldValue);
        return changes;
      }

      // Ensure a boolean type
      var newValue = this.getAttribute("rendered");
      if (oldValue != newValue)
      {
        changes.__addChangedAttribute("rendered", oldValue, null);

        if (!newValue)
        {
          // The node is no longer rendered. Remove any children and any other
          // properties that do not need to be kept anymore
          this._removeFromDataChangeNotification(false);
          this._facets = {};
          this._children = {};
          this._modifiableEl = {};
          this._childrenCreated = false;
          this._converter = null;
          this._tagInstances = null;
          this._elDependencies = null;
          this._tagInstanceIdsWaitingOnEl = {};
          this._tagInstancesWaitingOnEl = 0;

          // Update the state
          this.setState(adf.mf.api.amx.AmxNodeStates["UNRENDERED"]);

          // Register for data change events only on the rendered attribute
          this._registerRenderedAttributeForDataChange();

          // Don't process any more attribute changes on unrendered nodes.
          return changes;
        }

        // The node was not rendered but now is. Allow the rest of the attributes
        // to be process. First, change the state to INITIAL so that the children
        // may be built. This will result in the init method being called again for this
        // node.
        this.setState(adf.mf.api.amx.AmxNodeStates["INITIAL"]);

        // Return the old values to the caller
        return changes;
      }
    }

    // If the node is not rendered, then do not process any other attributes
    if (this.getState() == adf.mf.api.amx.AmxNodeStates["UNRENDERED"])
    {
      return changes;
    }

    // At this point, the rendered attribute has not changed, just process the changed
    // attributes
    for (var attrName in affectedAttributes)
    {
      if (attrName == "rendered")
      {
        continue;
      }

      var oldValue = this.getAttribute(attrName);
      cacheMiss = this._processAttribute(attrName) || cacheMiss;

      var collectionChange = collectionChanges == null ? null : collectionChanges[attrName];
      changes.__addChangedAttribute(attrName, oldValue, collectionChange);
    }

    // Update the state to reflect if all the EL is available
    if (cacheMiss && this.isReadyToRender())
    {
      // Update the state, if necessary, to reflect that the node does not have all
      // the required attributes.
      this.setState(adf.mf.api.amx.AmxNodeStates["WAITING_ON_EL_EVALUATION"]);
    }
    else if (this._tagInstancesWaitingOnEl == 0 && this._attributesWaitingOnEl == 0 &&
      this.getState() == adf.mf.api.amx.AmxNodeStates["WAITING_ON_EL_EVALUATION"])
    {
      this.setState(adf.mf.api.amx.AmxNodeStates["ABLE_TO_RENDER"]);
    }

    return changes;
  };

  /**
   * Process any necessary updates to the children AMX nodes during an attribute
   * change. This is called after the updateAttributes function and before the refresh
   * function. Type handlers may implement a function updateChildren with the amx node and
   * the old attribute values as the parameters. The implementation of the function should
   * remove any old children and create and add any new children to the AMX node. The
   * framework will initialize the children and call the refresh function on the nodes
   * once they are ready to render.
   * @param {adf.mf.api.amx.AmxAttributeChange} attributeChanges the changed attributes
   * @return {number} one of the adf.mf.api.amx.AmxNodeChangeResult constants.
   */
  AmxNode.prototype.updateChildren = function(attributeChanges)
  {
    // See if the node ever created children
    if (this._childrenCreated)
    {
      var th = this.getTypeHandler();

      // Do not call the type handler if no attributes have changed. This will happen if the
      // tag instances have changed and not any attributes
      if (attributeChanges.getSize() > 0)
      {
        if (adf.mf.internal.amx.implementsFunction(th, "updateChildren"))
        {
          // Note that the type handler should check for styleClass and
          // inlineStyle and return REFRESH for those if implementing a custom
          // updateChildren or use the result from defaultUpdateChildren
          return th.updateChildren(this, attributeChanges);
        }

        return adf.mf.api.amx.AmxNodeChangeResult["RERENDER"];
      }
      else
      {
        // Do not rerender nodes if only the tag instances have been updated
        return adf.mf.api.amx.AmxNodeChangeResult["NONE"];
      }
    }
    else
    {
      // The node never created its children, so use the _createChildren
      // method instead of the updateChildren
      state = this.getState();
      if (state == adf.mf.api.amx.AmxNodeStates["WAITING_ON_EL_EVALUATION"] ||
        this.isReadyToRender())
      {
        this._createChildren();
      }

      return adf.mf.api.amx.AmxNodeChangeResult["RERENDER"];
    }
  };

  /**
   * Convenience function for type handlers that stamp their children to
   * create the children AMX nodes from inside of a custom createChildrenNodes
   * function. It will create children for any UI tags.
   *
   * @param {object} key the stamp key to use
   * @param {(Array.<string>|null)} facetNamesToInclude list of facet names to create
   *        children for. If empty the facets will not be processed for this
   *        stamp. If null, all the facets will be processed. Include a null value
   *        inside the array to create children for non-facet tags.
   * @param {(function|null)} filterCallback an optional function to filter the children
   *        to create the children for. The function will be invoked with the node,
   *        the stamp key, the child tag and the facet name (or null for non-facets).
   *        Function must return a boolean. If true, the tag will be used to create
   *        children, if false the tag will not be processed.
   * @return {Array.<adf.mf.api.amx.AmxNode>} the children that were created
   */
  AmxNode.prototype.createStampedChildren = function(
    key,
    facetNamesToInclude,
    filterCallback)
  {
    var tag = this.getTag();
    var node, i, size;
    var created = [];

    // First create the AMX nodes for the facets
    if (facetNamesToInclude == null || facetNamesToInclude.length > 0)
    {
      var facetTags = tag.getChildrenFacetTags();
      for (i = 0, size = facetTags.length; i < size; ++i)
      {
        var facetData = facetTags[i].getFacet();
        var facetName = facetData["name"];

        if (facetNamesToInclude != null &&
          facetNamesToInclude.length > 0 &&
          facetNamesToInclude.indexOf(facetName) == -1)
        {
          continue;
        }

        var facetTagChildren = facetData["children"];

        for (var j = 0, facetChildrenSize = facetTagChildren.length;
          j < facetChildrenSize; ++j)
        {
          var facetTag = facetTagChildren[j];
          if (!facetTag.isUITag())
          {
            continue;
          }

          if (filterCallback == null ||
            filterCallback(this, key, facetTag, facetName))
          {
            node = facetTag.buildAmxNode(this, key);
            created.push(node);
            this.addChild(node, facetName);
          }
        }
      }
    }

    // Create the nodes for the children
    if (facetNamesToInclude == null ||
      facetNamesToInclude.indexOf(null) >= 0)
    {
      var childrenUiTags = tag.getChildrenUITags();
      for (i = 0, size = childrenUiTags.length; i < size; ++i)
      {
        var childTag = childrenUiTags[i];

        if (filterCallback == null ||
          filterCallback(this, key, childTag, null))
        {
          node = childTag.buildAmxNode(this, key);
          created.push(node);
          this.addChild(node);
        }
      }
    }

    return created;
  };

  /**
   * Attempts to find a parent AMX node by its tag's namespace and tag name
   *
   * @param {string} ns the namespace
   * @param {string} tagName the tag name
   * @return {(adf.mf.api.amx.AmxNode|null)} the ancestor AMX node or null if not found
   */
  AmxNode.prototype.findAncestorByTag = function(
    ns,
    tagName)
  {
    for (var amxNode = this.getParent(); amxNode != null; amxNode = amxNode.getParent())
    {
      var tag = amxNode.getTag();
      if (tag.getName() == tagName && tag.getNamespace() == ns)
      {
        return amxNode;
      }
    }

    return null;
  };

  /**
   * Attempts to find an AMX node relative to the current node by its XML ID. This will search in
   * the current naming container for the given node. If not found, it will look in the parent
   * naming container. By providing colons in the string, the code will search for children of
   * found parent nodes.
   *
   * @param {string} xmlIdSearchExpression the XML ID optionally separated by colons for a hierarchy of nodes.
   * @param {boolean} if true the code will search in parent files. If false, it will only check
   *        the current file
   * @return {(adf.mf.api.amx.AmxNode|null)} the node if found
   */
  AmxNode.prototype.findRelativeAmxNode = function(
    xmlIdSearchExpression,
    searchAcrossMultiplePages)
  {
    var namingContainerInfo = this._findNamingContainerAndStampKey();
    var idsToFind = xmlIdSearchExpression.split(":");
    var ncAmxNode = namingContainerInfo["amxNode"];
    var amxNode = ncAmxNode;

    for (var i = 0, numIds = idsToFind.length; i < numIds && amxNode != null; ++i)
    {
      amxNode = amxNode._findAmxNode(idsToFind[0], i == 0 ? namingContainerInfo["stampKey"] : null);
    }

    if (amxNode == null)
    {
      var tag = ncAmxNode.getTag();
      var parent = ncAmxNode.getParent();

      if (parent == null ||
        (tag.getName() == "fragment" && tag.getNamespace() == adf.mf.api.amx.AmxTag.NAMESPACE_AMX &&
          searchAcrossMultiplePages != true))
      {
        return null;
      }

      // Search the naming container above the current one
      return parent.findRelativeAmxNode(xmlIdSearchExpression, searchAcrossMultiplePages);
    }

    return amxNode;
  };

  /**
   * Update the tag instance attributes. This is usually called as a result of a data change
   * event. Currently internal until a formal API can be fully designed
   *
   * @param {adf.mf.api.amx.AmxNodeUpdateArguments} nodeUpdateArguments the arguments to the
   *                                                markNodeForUpdate call.
   * @ignore
   */
  AmxNode.prototype.__updateTagInstanceAttributes = function(nodeUpdateArguments)
  {
    var amxNodeId = this.getId();
    var affectedInstanceIds = nodeUpdateArguments.__getAffectedTagInstanceIds(amxNodeId);
    var numInstances = affectedInstanceIds.length;

    if (numInstances > 0)
    {
      var th = this.getTypeHandler();
      // Delegate to the type handler if the custom function has been provided
      var typeHandlerHasNotifyMethod = adf.mf.internal.amx.implementsFunction(
        th, "__tagInstanceUpdated");

      for (var i = 0; i < numInstances; ++i)
      {
        var tagInstanceId = affectedInstanceIds[i];
        var affectedAttributes = nodeUpdateArguments.__getAffectedAttributesForTagInstance(
          amxNodeId, tagInstanceId);

        if (this._tagInstances != null) // can be null if unrendered
        {
          var tagInstance = this._tagInstances[tagInstanceId];
          if (tagInstance)
          {
            tagInstance.updateAttributes(affectedAttributes);

            if (this._tagInstanceIdsWaitingOnEl[tagInstanceId] &&
              tagInstance.getState() == adf.mf.internal.amx.AmxTagInstanceStates["LOADED"])
            {
              delete this._tagInstanceIdsWaitingOnEl[tagInstanceId];
              --this._tagInstancesWaitingOnEl;
            }

            if (typeHandlerHasNotifyMethod)
            {
              // Use a temporary API to notify the type handler that a tag instance has been updated.
              // This API needs to be improved before making public (same with the entire tag instance
              // API)
              th.__tagInstanceUpdated(this, tagInstance);
            }
          }
        }
      }

      // See if the node is now ready to render (if all the EL is now loaded)
      if (this._tagInstancesWaitingOnEl == 0 && this._attributesWaitingOnEl == 0 &&
        this.getState() == adf.mf.api.amx.AmxNodeStates["WAITING_ON_EL_EVALUATION"])
      {
        this.setState(adf.mf.api.amx.AmxNodeStates["ABLE_TO_RENDER"]);
      }
    }
  };

  /**
   * Checks to see if the converter needs to be re-created and the value re-converted as a result
   * of a change.
   *
   * @param {adf.mf.api.amx.AmxNodeUpdateArguments} nodeUpdateArguments the arguments to the
   *                                                markNodeForUpdate call
   * @param {adf.mf.api.amx.AmxAttributeChange} attributeChanges the attribute changes created by
   *                                            the updateAttributes call
   */
  AmxNode.prototype.__processConverterChanges = function(
    nodeUpdateArguments,
    attributeChanges)
  {
    if (this._converterTag == null)
    {
      // There is no converter
      return;
    }

    var id = this.getId();
    var converterTagId = this._converterTag.getAttribute("id");
    var affectedTagInstanceIds = nodeUpdateArguments.__getAffectedTagInstanceIds(id);
    var converterAffected = affectedTagInstanceIds.indexOf(converterTagId) >= 0;
    var valueAffected = nodeUpdateArguments.getAffectedAttributes(id)["value"];

    var hasConverter = this.getConverter() != null;

    if (converterAffected || hasConverter == false)
    {
      // Force the re-creation of the converter, if necessary
      this._converter = null;

      if (this._processConverter())
      {
        // Check if the the node has a "value" attribute. This is a work-around for bug 17055533
        // where DVT is using converters on AMX nodes that do not have value attributes.
        if (this.getTag().getAttribute("value") !== undefined)
        {
          var oldValue = this.getAttribute("value");

          // If the value was not changed in this update and the converter was set
          // before, then we need a clean copy of the value
          if (hasConverter && valueAffected != true && !adf.mf.environment.profile.dtMode)
          {
            var valueEl = this.getAttributeExpression("value");
            this.setAttributeResolvedValue("value",
              adf.mf.internal.amx.evaluateExpression(valueEl));
          }

          this._convertValue();
          attributeChanges.__addChangedAttribute("value", oldValue, null);
        }
      }
    }
    else if (valueAffected)
    {
      this._convertValue();
    }
  };

  /**
   * The AMX facetRef allows facets to be relocated for purposes of rendering (rendered in a
   * location that they are not defined in). In these cases, the framework must be able to
   * determine the parent AMX node responsible for rendering a node instead of the one that
   * is used to define it. This function normally returns the parent, but for facets used by
   * amx:facetRef, this function will return the facetRef.
   *
   * @return {adf.mf.api.amx.AmxNode} the parent node for rendering purposes.
   */
  AmxNode.prototype.__getRenderingParent = function()
  {
    return this._renderingParent == null ? this.getParent() : this._renderingParent;
  };

  /**
   * See __getRenderingParent
   */
  AmxNode.prototype.__setRenderingParent = function(renderingParent)
  {
    this._renderingParent = renderingParent;
  };

  /**
   * Function to push a map of EL tokens that should be replaced and their replacement
   * values onto a stack. Allows EL aliasing. Used internally for amx:fragmentDef to perform
   * attribute aliasing.
   *
   * @param {Object.<string, string>} map a map with the name to replace as a key and the
   *        token replacement as a value.
   */
  AmxNode.prototype.__pushElReplacements = function(map)
  {
    AmxNode._pushElReplacements(map);
  };

  /**
   * Function to push a map of EL tokens that should be replaced and their replacement
   * values onto a stack. Allows EL aliasing. Used internally for amx:fragmentDef to perform
   * attribute aliasing.
   *
   * @param {Object.<string, string>} map a map with the name to replace as a key and the
   *        token replacement as a value.
   */
  AmxNode.prototype.__popElReplacements = function()
  {
    AmxNode._popElReplacements();
  };

  AmxNode.prototype.__getConverterTag = function()
  {
    return this._converterTag;
  };

  /**
   * Returns the node closest to the this node, which may
   * be the current node, that is rendered and returns it.
   * @param {(boolean|null)} checkAbleToRenderNodes if true nodes in the ABLE_TO_RENDER state
   *        will be checked if rendered. This is useful during the data change event processing
   *        where a node's state may have been altered
   * @return {(adf.mf.api.amx.AmxNode|null)} the closest rendered node or null if no
   *         nodes are rendered.
   */
  AmxNode.prototype.__getClosestRenderedNode = function(checkAbleToRenderNodes)
  {
    var isFinestLoggingEnabled = adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST);

    var targetNodeId = null;
    if (isFinestLoggingEnabled)
    {
      targetNodeId = this.getId();
    }

    for (var amxTargetNode = this; amxTargetNode != null;
      amxTargetNode = amxTargetNode.__getRenderingParent())
    {
      var state = amxTargetNode.getState();
      switch (state)
      {
        case adf.mf.api.amx.AmxNodeStates["PARTIALLY_RENDERED"]:
        case adf.mf.api.amx.AmxNodeStates["RENDERED"]:
        case adf.mf.api.amx.AmxNodeStates["ABLE_TO_RENDER"]:
          // If in the ABLE_TO_RENDER, only use if checkAbleToRenderNodes is true
          if (checkAbleToRenderNodes !== true &&
            state == adf.mf.api.amx.AmxNodeStates["ABLE_TO_RENDER"])
          {
            continue;
          }

          // Verify that the DOM node still exists (state is consistent)
          if (document.getElementById(amxTargetNode.getId()) != null)
          {
            if (isFinestLoggingEnabled)
            {
              adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
                "adf.mf.api.amx.AmxNode", "__getClosestRenderedNode",
                "Closest rendered ancestor node of node " + targetNodeId +
                " was found to be " + amxTargetNode.getId());
            }
            return amxTargetNode;
          }
          break;
      }
    }

    if (isFinestLoggingEnabled)
    {
      adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
        "adf.mf.api.amx.AmxNode", "__getClosestRenderedNode",
        "No rendered ancestor node could be found for node " + targetNodeId);
    }

    return null;
  };

  AmxNode.prototype.__getDescendentChangeAction = function(changes)
  {
    var th = this.getTypeHandler();
    // Delegate to the type handler if the custom function has been provided
    if (adf.mf.internal.amx.implementsFunction(th, "getDescendentChangeAction"))
    {
      return th.getDescendentChangeAction(this, changes);
    }

    // If a custom handler function has not been provided, the default behavior is
    // to re-render the closest rendered ancestor AMX node if any of the children
    // have had their rendered state changed.
    var changedAmxNodes = changes.getAffectedNodes();
    for (var i = 0, size = changedAmxNodes.length; i < size; ++i)
    {
      var descendentAmxNode = changedAmxNodes[i];
      var oldState = changes.getPreviousNodeState(descendentAmxNode);
      var rendered = descendentAmxNode.isReadyToRender();
      var wasRendered = (
          oldState == adf.mf.api.amx.AmxNodeStates["ABLE_TO_RENDER"] ||
          oldState == adf.mf.api.amx.AmxNodeStates["PARTIALLY_RENDERED"] ||
          oldState == adf.mf.api.amx.AmxNodeStates["RENDERED"]
        ) && document.getElementById(descendentAmxNode.getId()) != null;

      if ((rendered == false && wasRendered) ||
       (rendered && wasRendered == false))
      {
        // The descendent AMX node's rendered state has changed.
        // We need to re-render the ancestor to reflect the change in the UI
        // since the ancestor is not configured to handle the change itself
        return adf.mf.api.amx.AmxNodeChangeResult["RERENDER"];
      }
    }

    // If none of the changes result in a rendered state change, by default
    // we do not need to take any action.
    return adf.mf.api.amx.AmxNodeChangeResult["NONE"];
  };

  /**
   * Get the names of the attributes that are affected by a change
   * to the given EL dependency.
   * @param {adf.mf.internal.el.parser.ELExpression} valueExpression the value expression
   * @return {Array.<string>} array of attribute names.
   */
  AmxNode.prototype.__getAttributesForElDependency = function(valueExpression)
  {
    var attrs = null;
    if (this._elDependencies != null)
    {
      attrs = this._elDependencies.getAttributesForElDependency(valueExpression);
    }
    else
    {
      attrs = [];
    }

    return attrs;
  };

  /**
   * Populates the AMX node update arguments for the tag instances
   *
   * @param {adf.mf.api.amx.AmxNodeUpdateArguments} nodeUpdateArguments the object
   * @param {adf.mf.internal.el.parser.ELExpression} valueExpression the value expression
   */
  AmxNode.prototype.__processTagInstancesForElDependency = function(
    nodeUpdateArguments,
    valueExpression)
  {
    var tagInstances = this.__getAllTagInstances();
    for (var i = 0, numInstances = tagInstances.length; i < numInstances; ++i)
    {
      var tagInstance = tagInstances[i];
      var elDependencies = tagInstance.getElDependencies();
      var affectedAttributes = elDependencies.getAttributesForElDependency(valueExpression);

      for (var a = 0, numAttrbitues = affectedAttributes.length; a < numAttrbitues; ++a)
      {
        nodeUpdateArguments.__setAffectedAttributeForTagInstance(
          tagInstance, affectedAttributes[a]);
      }
    }
  };

  /**
   * Internal function to retrieve the tag instances that are present under this node for
   * a specific namespace and tag name.
   *
   * @param {string} namespace the XML namespace of the tag
   * @param {string} tagName the tag name
   * @return {Array.<adf.mf.internal.amx.AmxTagInstance>} array of all the tag instances for
   *         the given namespace and tag name
   */
  AmxNode.prototype.__getTagInstances = function(
    namespace,
    tagName)
  {
    var result = [];
    for (var id in this._tagInstances)
    {
      var instance = this._tagInstances[id];

      // Skip instances underneath another instance
      if (instance.getParentTagInstance() == null)
      {
        var tag = instance.getTag();
        if (tag.getName() == tagName &&
          tag.getNamespace() == namespace)
        {
          result.push(instance);
        }
      }
    }

    return result;
  };

  /**
   * Internal function to get an array of all the tag instances for this AMX node. Includes
   * tag instances that are nested under other tag instances as well (flattens the hierarchy).
   * Not meant to be used outside of amx-core.js.
   *
   * @return {Array.<adf.mf.internal.amx.AmxTagInstance>} array of all the tag instances
   *         for the node
   */
  AmxNode.prototype.__getAllTagInstances = function()
  {
    var result = [];
    for (var id in this._tagInstances)
    {
      result.push(this._tagInstances[id]);
    }

    return result;
  };

  AmxNode.prototype.__findPopup = function(
    popupId)
  {
    if (popupId == null)
    {
      return null;
    }

    // See if the pop-up points to a child of a fragment
    var index = popupId.indexOf(":");
    var th;

    if (index == -1)
    {
      for (var amxNode = this; amxNode != null; amxNode = amxNode.getParent())
      {
        th = amxNode.getTypeHandler();

        if (adf.mf.internal.amx.implementsFunction(th, "findPopup"))
        {
          return th.findPopup(amxNode, popupId, true);
        }
      }

      return null;
    }

    var fragmentId = popupId.substring(0, index);
    var fragmentAmxNode = this.findRelativeAmxNode(fragmentId, false);

    if (fragmentAmxNode != null)
    {
      var children = fragmentAmxNode.getChildren();
      if (children.length > 0)
      {
        var fragmentDefAmxNode = children[0];

        th = fragmentDefAmxNode.getTypeHandler();

        if (adf.mf.internal.amx.implementsFunction(th, "findPopup"))
        {
          return th.findPopup(fragmentDefAmxNode, popupId.substring(index + 1), false);
        }
      }
    }

    return null;
  };

  /**
   * Internal function to get the attribute that should be validated
   *
   * @return {string} the name of the attribute to validate or null if the node has no input
   *         value to validate.
   */
  AmxNode.prototype.__getAttributeToValidate = function()
  {
    return this._attributeToValidate;
  };

  /**
   * Find the naming container node and the stamp key for the current node.
   *
   * @return {{amxNode: adf.mf.api.amx.AmxNode, stampKey: object}} the naming container for the
   *         current node
   */
  AmxNode.prototype._findNamingContainerAndStampKey = function()
  {
    for (var amxNode = this; true; amxNode = amxNode.getParent())
    {
      var stampKey = amxNode.getStampKey();
      if (stampKey != null)
      {
        return { "amxNode": amxNode.getParent(), "stampKey": stampKey };
      }
      else if (amxNode._isNamingContainer() || amxNode.getParent() == null)
      {
        return { "amxNode": amxNode, "stampKey": null };
      }
    }

    // This code will not be reached
    return null;
  };

  AmxNode.prototype._findAmxNode = function(
    xmlId,
    stampKey)
  {
    var childrenToSearch = this.getChildren(null, stampKey);
    var facets = this.getFacets(stampKey);

    for (var facetName in facets)
    {
      childrenToSearch = childrenToSearch.concat(facets[facetName]);
    }

    var numChildren = childrenToSearch.length;
    var c;

    // Look to see if it is one of the children
    for (c = 0; c < numChildren; ++c)
    {
      var child = childrenToSearch[c];
      var tagId = child.getTag().getAttribute("id");

      if (tagId == xmlId)
      {
        return child;
      }
    }

    // Search the decedents of the children
    for (c = 0; c < numChildren; ++c)
    {
      var child = childrenToSearch[c];

      // Do not search into child naming containers
      if (child._isNamingContainer())
      {
        continue;
      }

      var amxNode = child._findAmxNode(xmlId, null);
      if (amxNode != null)
      {
        return amxNode;
      }
    }

    return null;
  };

  /**
   * Function called when there is a cache miss on the rendered attribute or the EL expression
   * for the rendered attribute resolves to false. Only wires the rendered attribute for data change
   * events and ignores other attributes.
   */
  AmxNode.prototype._registerRenderedAttributeForDataChange = function()
  {
    if (this._elDependencies == null)
    {
      var el = this.getAttributeExpression("rendered", false, true);
      this._elDependencies = new adf.mf.internal.amx.AmxElDependencies(
        { "rendered": el });
      this._postProcessForDataChangeNotification(false);
    }
  };

  var iteratorEL = adf.mf.internal.el.parser.parse ("#{iterator}");
  var nullEL = adf.mf.internal.el.parser.parse("#{null}");

  /**
   * Handles the evaluation and conversion of an attribute. Called by both the initialization
   * code as well as the update code.
   *
   * @param {string} attrName the name of the attribute to be processed
   * @return {boolean} whether an EL bound attribute had a cache miss
   */
  AmxNode.prototype._processAttribute = function(attrName)
  {
    var cacheMiss = false;

    var tag = this.getTag();
    if (!tag.isAttributeElBound(attrName))
    {
      // Do not process non-EL attributes if they have already been loaded
      if (this.getAttribute(attrName) !== undefined)
      {
        return cacheMiss;
      }

      var value = tag.getAttribute(attrName);

      // Convert the rendered to a boolean
      if (attrName == "rendered")
      {
        value = value === undefined || adf.mf.api.amx.isValueTrue(value);
      }

      // Do not process attributes not on the tag
      if (value == undefined)
      {
        return cacheMiss;
      }

      this.setAttributeResolvedValue(attrName, value);
      return cacheMiss;
    }

    var el = this.getAttributeExpression(attrName, false, true);

    if (adf.mf.environment.profile.dtMode)
    {
      this.setAttributeResolvedValue(attrName, attrName == "rendered" ? true : el.getExpression());
      return cacheMiss;
    }

    // TODO: move the acceptAttributeForElProcessing into the AmxNode class
    // instead of a global function
    //
    if (!acceptAttributeForElProcessing(attrName, el))
    {
      return cacheMiss;
    }

    var value = adf.mf.internal.amx.evaluateExpression(el);
    if (value === undefined)
    {
      cacheMiss = true;
      if (this._attributeNamesWaitingOnEl[attrName])
      {
        // If this is the second time that we had a cache miss on the same attribute,
        // check to make sure that the EL is valid. For example, a complex EL statement
        // cannot be cached within the JS EL cache and therefore the value would
        // never come back as having a value.
        var unassignableDependency = this._checkForUnassignableEl(el);
        if (unassignableDependency != null)
        {
          // First, replace the EL on the node so that we do not try to evaluate it again:
          this._elAttributeMap[attrName] = nullEL;
          // Second, throw an error to let the user/developer know that the EL is not valid
          throw new Error(adf.mf.resource.getInfoString("AMXErrorBundle",
            "ERROR_UNASSIGNABLE_ATTRIBUTE", this.getId(), attrName, unassignableDependency));
        }
      }
      else
      {
        // Record that at least one EL was not available so that we update
        // the state appropriately
        this._attributeNamesWaitingOnEl[attrName] = true;
        ++this._attributesWaitingOnEl;
      }
    }
    else
    {
      if (this._attributeNamesWaitingOnEl[attrName])
      {
        delete this._attributeNamesWaitingOnEl[attrName];
        --this._attributesWaitingOnEl;
      }

      // Convert the rendered to a boolean
      if (attrName == "rendered")
      {
        value = adf.mf.api.amx.isValueTrue(value);
      }
      // Temporary hack for backwards compatibility is needed here. The old code, when getting
      // a collection model, would first look up the collection model via EL but then use the
      // javascript iterator as the returned attribute value. As a result, we first need to
      // get the collection model (ensuring the value is not an array), and only if that is
      // not undefined, get the iterator and store that.
      else if (attrName == "value" && tag.getAttribute("var") != null &&
         value != null && !Array.isArray(value))
      {
        // If this code is reached, then the value variable is the collection model, but we
        // need the JavaScript iterator for the type handlers. Temporarily "hack" the code so that
        // we now get the iterator from EL
        var iteratorEl = el.concat(iteratorEL);
        value = adf.mf.internal.amx.evaluateExpression(iteratorEl);
        if (value === undefined)
        {
          cacheMiss = true;
        }
      }

      // Store on the node
      this.setAttributeResolvedValue(attrName, value);
    }

    return cacheMiss;
  };

  AmxNode.prototype._checkForUnassignableEl = function(el)
  {
    var elDependencies = el.dependencies();
    for (var i = 0, numDeps = elDependencies.length; i < numDeps; ++i)
    {
      var dependency = elDependencies[i];
      if (!adf.mf.internal.util.isAssignable(dependency))
      {
        return dependency;
      }
    }

    return null;
  };

  AmxNode.prototype._createChildren = function()
  {
    // By default only create the children once
    if (this._childrenCreated)
    {
      return;
    }

    this._childrenCreated = true;

    // Create the non-UI tag instances
    this._createNonUITagInstances();

    var th = this.getTypeHandler();
    // Delegate to the type handler if the custom function has been provided
    if (adf.mf.internal.amx.implementsFunction(th, "createChildrenNodes"))
    {
      var createChildrenNodesResult = th.createChildrenNodes(this);
      if (this.getState() == adf.mf.api.amx.AmxNodeStates["INITIAL"] ||
        createChildrenNodesResult == adf.mf.api.amx.AmxNodeCreateChildrenNodesResult["DEFERRED"])
      {
        // If the type handler moves the state to INITIAL, call the createChildrenNodes
        // again.
        // Similarly, also if the display is deferred (to display a temporary placeholder).
        this._childrenCreated = false;
        return;
      }

      if (createChildrenNodesResult == adf.mf.api.amx.AmxNodeCreateChildrenNodesResult["HANDLED"])
      {
        return;
      }
    }

    // Create the non-facet children (non-stamped)
    this.createStampedChildren(null, null, null);
  };

  AmxNode.prototype._processConverterTag = function()
  {
    var tags = this.getTag().getChildren(adf.mf.api.amx.AmxTag.NAMESPACE_AMX);
    for (var i = 0, size = tags.length; i < size; ++i)
    {
      var tag = tags[i];
      var tagName = tag.getName();
      if (tagName == "convertNumber" || tagName == "convertDateTime")
      {
        this._converterTag = tag;

        // TODO: make this into an official API for registering converters
        break;
      }
    }
  };

  /**
   * Create the converter if it has not already been created
   *
   * @return {boolean} true if a converter was created during this call, otherwise false
   */
  AmxNode.prototype._processConverter = function()
  {
    if (this._converter != null || this._converterTag == null ||
      adf.mf.environment.profile.dtMode == true)
    {
      return false;
    }

    var convTag = this._converterTag;
    var convTagName = convTag.getName();
    var dirty = false;

    // Only process the converter if the node is in a state ready to be rendered
    if (this.isReadyToRender())
    {
      var converterTagInstance = this._tagInstances[convTag.getAttribute("id")];

      if (convTagName == "convertNumber" && amx.createNumberConverter)
      {
        var label = this.isAttributeDefined("label") ? this.getAttribute("label") : null;
        this.setConverter(amx.createNumberConverter(converterTagInstance, label));
        dirty = true;
      }
      else if (convTagName == "convertDateTime" && amx.createDateTimeConverter)
      {
        var label = this.isAttributeDefined("label") ? this.getAttribute("label") : null;
        this.setConverter(amx.createDateTimeConverter(converterTagInstance, label));
        dirty = true;
      }

      // Notify the type handler that the converter has been changed if desired.
      // This is currently only present for DVT and not a publicly supported API at this
      // time.
      var th = this.getTypeHandler();
      if (adf.mf.internal.amx.implementsFunction(th, "__converterCreated"))
      {
        th.__converterCreated(this, this._converter);
      }
    }

    return dirty;
  };

  AmxNode.prototype._convertValue = function()
  {
    if (this._converter != null)
    {
      this.setAttributeResolvedValue("value",
        this._converter.getAsString(this.getAttribute("value")));
    }
  };

  AmxNode.prototype._isNamingContainer = function()
  {
    var tag = this.getTag();
    var ns = tag.getNamespace();
    var name = tag.getName();

    // This function only needs to return true for tags that do not stamp but need
    // to have unique name containers. So list view and the itertor tags are not needed
    // here since they are stamping nodes.
    return (name == "fragment" || name == "facetRef") &&
      ns == adf.mf.api.amx.AmxTag.NAMESPACE_AMX;
  };

  /**
   * Creates the tag instances for the node. Only creates them once, may be called
   * multiple times. Called from the _createChildren method before the AMX children nodes
   * are created.
   * @param {adf.mf.internal.amx.AmxTagInstance=} parentTagInstance the parent tag instance or null
   */
  AmxNode.prototype._createNonUITagInstances = function(parentTagInstance)
  {
    if (parentTagInstance == null)
    {
      // Only execute once per AMX node
      if (this._tagInstances != null)
      {
        return;
      }

      this._tagInstances = {};
    }

    // No need to create non-UI AmxTagInstance if in DT mode.
    if (adf.mf.environment.profile.dtMode)
    {
      return;
    }

    var tag = parentTagInstance == null ? this.getTag() : parentTagInstance.getTag();

    var children = tag.getChildren();
    for (var i = 0, size = children.length; i < size; ++i)
    {
      var childTag = children[i];
      if (childTag.isUITag() == false)
      {
        // Skip amx:facet as there is no need for that tag to have instances
        if (!(childTag.getName() == "facet" &&
          childTag.getNamespace() == adf.mf.api.amx.AmxTag.NAMESPACE_AMX))
        {
          var id = childTag.getAttribute("id");
          var instance = new adf.mf.internal.amx.AmxTagInstance(this, parentTagInstance, childTag);

          this._tagInstances[id] = instance;

          if (instance.getState() ==
            adf.mf.internal.amx.AmxTagInstanceStates["WAITING_ON_EL_EVALUATION"])
          {
            ++this._tagInstancesWaitingOnEl;
            this._tagInstanceIdsWaitingOnEl[id] = true;
          }

          // Process any nested tag instances
          this._createNonUITagInstances(instance);
        }
      }
    }

    if (this._tagInstancesWaitingOnEl > 0 && this.isReadyToRender())
    {
      // Make the node wait to render until the needed EL is loaded for all tag
      // instances
      this.setState(adf.mf.api.amx.AmxNodeStates["WAITING_ON_EL_EVALUATION"]);
    }
  };

  AmxNode.prototype._createUniqueId = function()
  {
    var id = this.getAttribute("id");
    if (id === undefined)
    {
      id = this.getTag().getAttribute("id");
      this.setAttributeResolvedValue("id", id);
    }

    var parent = this.__getRenderingParent();

    if (parent == null)
    {
      this._id = id;
    }
    else
    {
      var parentId = parent.getId();
      var stampKey = this.getStampKey();
      var parentIsNamingContainer = parent._isNamingContainer();

      if (stampKey == null || parentIsNamingContainer)
      {
        if (parentIsNamingContainer)
        {
          this._id = parentId + ":" + id;
        }
        else
        {
          // Find the portion af the parent with a colon in the ID
          var idx = parentId == null ? -1 : parentId.lastIndexOf(":");
          if (idx == -1)
          {
            // The parent is not "namespaced"
            this._id = id;
          }
          else
          {
            // Get the parent's "namespace" from the ID and use that as this node's prefix
            var prefix = parentId.substring(0, idx + 1);
            this._id = prefix + id;
          }
        }
      }
      else
      {
        var re = /[^\w\.\-]/g;
        var strVal = stampKey.toString();
        // Replace any non-ID friendly values with a sequence of characters unlikely to appear in the
        // value. This assumes that most characters
        // of the iterationKey will be valid and will therefore produce a unique key. Using a token
        // cache would address this if this assumption becomes an issue. If we end up with duplicate
        // IDs due to escaping, we'll have to create a token cache approach.
        strVal = strVal.replace(re, "._.");

        this._id = parentId + ":" + strVal + ":" + id;
      }
    }
  };

  AmxNode.prototype._findChildIndex = function(
    stampKey,
    nodeId,
    facetName)
  {
    var children = this.getChildren(facetName, stampKey);

    for (var i = 0, size = children.length; i < size; ++i)
    {
      var node = children[i];
      if (node.getId() == nodeId)
      {
        return i;
      }
    }

    return -1;
  };

  AmxNode.prototype._findChildIndexAndFacetName = function(
    stampKey,
    nodeId)
  {
    var foundFacetName = null;
    // First search for the child in the children
    var index = this._findChildIndex(stampKey, nodeId, null);
    if (index == -1)
    {
      // If it was not found as a child, look for it as a facet child
      var facets = this.getFacets(stampKey);
      for (var facetName in facets)
      {
        index = this._findChildIndex(stampKey, nodeId, facetName);
        if (index >= 0)
        {
          foundFacetName = facetName;
          break;
        }
      }
    }

    return index == -1 ? null :
      {
        "index": index,
        "facetName": foundFacetName
      };
  };

  /**
   * Function to handle any necessary code to properly notify the node of changes from the model.
   *
   * @param {boolean} includeTagInstances if true the EL in the tag instances will also be
   *        registered.
   */
  AmxNode.prototype._postProcessForDataChangeNotification = function(
    includeTagInstances)
  {
    var elTokens = this._elDependencies.getElTokens();

    if (includeTagInstances)
    {
      var tagInstances = this.__getAllTagInstances();
      for (var i = 0, numInstances = tagInstances.length; i < numInstances; ++i)
      {
        var tagInstance = tagInstances[i];
        elTokens = elTokens.concat(tagInstance.getElDependencies().getElTokens());
      }
    }

    for (var t = 0, numTokens = elTokens.length; t < numTokens; ++t)
    {
      var token = elTokens[t];
      var nodes = nodeToElMap[token];

      if (nodes == null)
      {
        nodes = [ this ];
        nodeToElMap[token] = nodes;
      }
      else
      {
        if (nodes.indexOf(this) == -1)
        {
          nodes.push(this);
        }
      }
    }

    // Cache the value for the removal code
    this._registeredElTokens = elTokens;
  };

  /**
   * Removes the node and descendents from listening to data change events.
   *
   * @param {boolean} nodeWillBeRemoved if true, the a notification will be fired
   *        to the type handler to be notified that the AMX node is going to be removed
   *        from the hierarchy.
   */
  AmxNode.prototype._removeFromDataChangeNotification = function(nodeWillBeRemoved)
  {
    // Notify the type handler this node will be removed or is now unrendered
    this._fireNotification(adf.mf.api.amx.AmxNodeNotifications[
      nodeWillBeRemoved ? "PRE_REMOVAL" : "UNRENDERED"]);

    if (nodeWillBeRemoved)
    {
      // If the state of the node is not "resolved", decrement the node waiting count
      // so that we are not waiting on a removed node
      switch (this.getState())
      {
        case adf.mf.api.amx.AmxNodeStates["INITIAL"]:
        case adf.mf.api.amx.AmxNodeStates["WAITING_ON_EL_EVALUATION"]:
        case adf.mf.api.amx.AmxNodeStates["PARTIALLY_RENDERED"]:
          adf.mf.internal.amx._pageBusyTracker.decrement();
          break;
      }
    }

    // Remove this node from notifications
    var tokens = this._registeredElTokens;

    if (tokens != null)
    {
      for (var i = 0, size = tokens.length; i < size; ++i)
      {
        var token = tokens[i];
        var nodes = nodeToElMap[token];
        if (nodes != null)
        {
          var index = nodes.indexOf(this);
          if (index >= 0)
          {
            nodes.splice(index, 1);
          }
        }
      }
    }

    this._registeredElTokens = null;

    this._removeChildrenFromDataChangeNotification();
  };

  /**
   * Removes this node's children from being notified of any data changes. Typically this is called
   * when the node is being set to an un-rendered state or when the node is being removed from the
   * node hierarchy.
   */
  AmxNode.prototype._removeChildrenFromDataChangeNotification = function()
  {
    var i, size, children, stampKey = null;

    for (stampKey in this._children)
    {
      children = this._children[stampKey];
      for (i = 0, size = children.length; i < size; ++i)
      {
        children[i]._removeFromDataChangeNotification(true);
      }
    }

    for (stampKey in this._facets)
    {
      var facets = this._facets[stampKey];
      for (var facetName in facets)
      {
        children = facets[facetName];
        for (i = 0, size = children.length; i < size; ++i)
        {
          children[i]._removeFromDataChangeNotification(true);
        }
      }
    }
  };

  /**
   * Fires a notification of an AMX node event to the type handler
   *
   * @param {string} one of the adf.mf.api.amx.AmxNodeNotifications constants
   */
  AmxNode.prototype._fireNotification = function(
    notificationType)
  {
    var th = this.getTypeHandler();
    if (adf.mf.internal.amx.implementsFunction(th, "handleNotification"))
    {
      th.handleNotification(this, notificationType);
    }
  };

  /**
   * Get the EL expression map for the node. This will get all the EL expressions with
   * replacement for any EL bound attributes.
   *
   * @return {Object.<string, string>} map of the attribute name to the replaced EL expression
   */
  AmxNode.prototype._getAttributesExpressionMap = function()
  {
    var tag = this.getTag();
    var attrs = tag.getAttributes();
    var replacedAttrs = {};
    for (var name in attrs)
    {
      var expr = this.getAttributeExpression(name, false, true);

      if (expr != null)
      {
        replacedAttrs[name] = expr;
      }
    }

    return replacedAttrs;
  };

  /**
   * Called during initialization to set the input value attribute of the node, allowing validation
   * of that parameter to take place and sets up the EL to permit context free usage during the
   * posting of the changes back to the model.
   */
  AmxNode.prototype._setupInputValueValidation = function()
  {
    // Note, if this function is changed at all, the amx-core.js function amx.registerInputValue
    // must also be changed as it has the deprecated version of this code.
    var th = this.getTypeHandler();

    if (this._attributeToValidate === undefined)
    {
      var attr = adf.mf.internal.amx.implementsFunction(th, "getInputValueAttribute") ?
        th.getInputValueAttribute() :
        null;
      this._attributeToValidate = attr;

      if (attr != null)
      {
        // Convert the EL to a context free EL string to be able to safely call back into the model
        // without any local javascript variables
        this.storeModifyableEl(attr);
      }
    }
  };

  /**
   * Given an HTML element, find the closest AMX node
   * @param {HTMLElement} element the DOM element
   * @return {adf.mf.api.amx.AmxNode|null} the node if found or null
   */
  AmxNode.getAmxNodeForElement = function(element)
  {
    for (var e = element; e != null && e.classList != null; e = e.parentNode)
    {
      if (e.classList.contains("amx-node"))
      {
        return adf.mf.internal.amx._getNonPrimitiveElementData(e, "amxNode");
      }
    }

    return null;
  };

  /**
   * Performs any EL substitutions for the given EL expression. Must be called in-context so that
   * EL variables are correctly recognized and substituted.
   *
   * @param {string} expr the EL expression
   * @return {string} the EL expression with any EL replacements made
   */
  AmxNode.__performElSubstitutions = function(expr)
  {
    if (!expr.tokens)
        expr = adf.mf.internal.el.parser.parse(expr);

    var isFinestLoggingEnabled = adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST);

    var replacementStack = AmxNode._elReplacementsStack;
    var origExpr = expr;

    try
    {
        expr = adf.mf.internal.util.stripLocalValues(expr, true, replacementStack);
    }
    catch (e)
    {
        // If the replacement fails, log the error and fall back to using the non-replaced EL.
        // This will make it easier to track down the EL expression that had caused the error.
        amx.log.error(e.message);
        return origExpr;
    }

    if (isFinestLoggingEnabled)
    {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
            "adf.mf.api.amx.AmxNode", "__performElSubstitutions",
            "Original expression: " + origExpr + ". Replacement: " + expr);
    }

    return expr;
  };

  /**
   * Pushes a new map of EL expressions onto the EL replacement stack.
   *
   * @param {Object.<string, string>} map of the EL variable name to
   *        the EL string replacement to be made.
   */
  AmxNode._pushElReplacements = function(map)
  {
    var stack = AmxNode._elReplacementsStack;
    if (stack == null)
    {
      AmxNode._elReplacementsStack = [ map ];
    }
    else
    {
      stack.unshift(map);
    }
  };

  /**
   * Removes the last EL replacement map from the stack
   *
   * @return {Object.<string, string>} the map that was removed
   */
  AmxNode._popElReplacements = function()
  {
    var stack = AmxNode._elReplacementsStack;
    var item = stack.shift();

    if (stack.length == 0)
    {
      delete AmxNode._elReplacementsStack;
    }

    return item;
  };

  /**
   * Sort nodes of in an array so that parents appear first
   * and descendents later.
   */
  AmxNode.__sortNodesByDepth = function(nodes)
  {
    function getNodeDepth(node)
    {
      var depth = 0;
      for (var n = node; n != null; n = n.getParent())
      {
        ++depth;
      }

      return depth;
    }

    function nodeCompare(n1, n2)
    {
      if (n1 == n2)
      {
        return 0;
      }

      var n1p = n1.getParent();
      var n2p = n2.getParent();

      if (n1p == n2p)
      {
        // If in the same parent, first compare the stamp keys
        var s1 = n1.getStampKey();
        var s2 = n2.getStampKey();

        if (s1 == s2)
        {
          // The nodes are in the same parent with the same stamp key,
          // return the order of the nodes in the children array
          var n1data = n1p._findChildIndexAndFacetName(s1, n1.getId());
          var n2data = n2p._findChildIndexAndFacetName(s2, n2.getId());

          var n1f = n1data["facetName"];
          var n2f = n2data["facetName"];


          if (n1f == n2f)
          {
            // They have the same facet (may be null), so just compare the
            // indexes
            return n1data["index"] - n2data["index"] < 0 ? -1 : 1;
          }
          else
          {
            if (n1f == null)
            {
              return 1;
            }
            else if (n2f == null)
            {
              return -1;
            }

            return n1f < n2f ? -1 : 1;
          }
        }
        else // The stamp keys are not the same
        {
          // Use a string comparisson of the keys
          return (("" + s1) < ("" + s2)) ? -1 : 1;
        }
      }
      else // The parents are not the same
      {
        var d1 = getNodeDepth(n1);
        var d2 = getNodeDepth(n2);

        var tmp1 = n1;
        var tmp2 = n2;
        var origD1 = d1;
        var origD2 = d2;

        // Ensure that they are the same depth
        if (d1 != d2)
        {
          while (d1 > d2)
          {
            tmp1 = tmp1.getParent();
            --d1;
          }

          while (d2 > d1)
          {
            tmp2 = tmp2.getParent();
            --d2;
          }

          if (tmp1 == tmp2)
          {
            // The nodes are the same, return the one that was more shallow
            return origD1 < origD2 ? -1 : 1;
          }

          if (tmp1.getParent() == tmp2.getParent())
          {
            // If they have the same parent at this level, then recursively
            // use this function
            return nodeCompare(tmp1, tmp2);
          }
        }

        // At this point, we have nodes at the same depth, but the parents are not the same.
        // We need to walk up the parent hierarchy until we find nodes that share the same parent.
        for (var depth = d1; depth > 0; --depth)
        {
          var tmp1p = tmp1.getParent();
          var tmp2p = tmp2.getParent();

          if (tmp1p == tmp2p)
          {
            // We found the parents that are the same, use a recursive call
            return nodeCompare(tmp1, tmp2);
          }

          // Keep looking up the ancestory chain
          tmp1 = tmp1p;
          tmp2 = tmp2p;
        }

        // We should not have reached here as there is only one root node. This would only
        // happen if the nodes are from different hierarchies, which is not valid.
        // Throw an error so that we know it failed.
        throw new Error(adf.mf.resource.getInfoString("AMXErrorBundle",
          "ERROR_FAILED_TO_SORT_AMX_NODES"));
      }
    }

    nodes.sort(nodeCompare);
  };

  /**
   * Internal function called from amx-core.js in the handling of data change events
   * @param {adf.mf.internal.el.parser.ELExpression} valueExpression
   *        the value expression to get the nodes
   * @return {Array.<adf.mf.api.amx.AmxNode>} array of nodes that are registered for the EL token
   */
  AmxNode.__getNodesDependentOnElToken = function(valueExpression)
  {
    var token = valueExpression.getIndexedRepresentation();

    // Now get the nodes
    var nodes = nodeToElMap[token];
    return nodes == null ? [] : nodes;
  };

  AmxNode.__clearBindings = function()
  {
    nodeToElMap = {};
  };

  // ------ /AMX Node ------ //

  // return true if this attribute/value needs to be EL resolved
  acceptAttributeForElProcessing.noProcessAttributes =
  {
    valueChangeListener:true,
    from:true,
    to:true,
    selectionChangeListener:true,
    actionListener:true,
    action:true,
    binding:true,
    rangeChangeListener:true
  };

  function acceptAttributeForElProcessing(attrName, attrValue)
  {
    var accept = (!acceptAttributeForElProcessing.noProcessAttributes[attrName] &&
      attrValue);
    accept = accept && (attrName.indexOf("Listener") === -1);
    return accept;
  }

  adf.mf.internal.amx.acceptAttributeForElProcessing = acceptAttributeForElProcessing;

})();
