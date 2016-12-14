/* Copyright (c) 2013, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* ---------------- amx-tagInstance.js ------------------ */
/* ------------------------------------------------------ */

(function()
{
  /**
   * @namespace
   */
  adf.mf.internal.amx.AmxTagInstanceStates =
  {
    /** EL based attributes needed for rendering have not been fully loaded yet */
    "WAITING_ON_EL_EVALUATION": 0,
    /** EL attributes have been loaded, the node has not yet been rendered */
    "LOADED": 1
  };

  /**
   * Constructor for a tag instance. The tag instance represents a non-UI tag of an AMX
   * node and store node specific information. In the case of fragments, the tag instance
   * holds onto replaced EL strings that are specific to each individual node.
   *
   * @param {adf.mf.api.amx.AmxNode} parentAmxNode the AMX node that this tag instance
   *        belongs to
   * @param {adf.mf.internal.amx.AmxTagInstance} parentTagInstance the parent tag instance if
   *        nested
   * @param {adf.mf.api.amx.AmxTag} tag the refence to the tag for this instance
   * @constructor adf.mf.internal.amx.AmxTagInstance
   * @augments adf.mf.api.AdfObject
   */
  function AmxTagInstance(
    parentAmxNode,
    parentTagInstance,
    tag)
  {
    this.Init(parentAmxNode, parentTagInstance, tag);
  }

  adf.mf.internal.amx.AmxTagInstance = AmxTagInstance;
  adf.mf.api.AdfObject.createSubclass(adf.mf.internal.amx.AmxTagInstance, adf.mf.api.AdfObject,
    "adf.mf.internal.amx.AmxTagInstance");

  /**
   * Initialize the tag instance. This function will evaluate the EL expressions, storing the
   * cached values into the object so that the values may be retrieved later without EL
   * evaluation. It also sets up the EL dependencies that will be used for data change events
   * to ensure the cached values are kept up to date.
   *
   * @param {adf.mf.api.amx.AmxNode} parentAmxNode the AMX node that this tag instance
   *        belongs to
   * @param {adf.mf.internal.amx.AmxTagInstance} parentTagInstance the parent tag instance if
   *        nested
   * @param {adf.mf.api.amx.AmxTag} tag the refence to the tag for this instance
   */
  adf.mf.internal.amx.AmxTagInstance.prototype.Init = function(
    parentAmxNode,
    parentTagInstance,
    tag)
  {
    AmxTagInstance.superclass.Init.call(this);

    this._parentAmxNode = parentAmxNode;
    this._parentTagInstance = parentTagInstance;
    this._tag = tag;
    this._elAttributeMap = {}; // maps string (attribute name) to ELExpression (attribute value)
    this._tagHandler = adf.mf.internal.amx.AmxTagHandler.__getHandler(
      tag.getNsPrefixedName());

    this._attributesWaitingOnEl = 0;
    this._attributeNamesWaitingOnEl = {};
    this._state = adf.mf.internal.amx.AmxTagInstanceStates["LOADED"];

    // Create a set of the attributes that have their values stored on the tag instance
    this._cachedAttributes = {};

    // A map of the local (cached) attribute values
    this._attrs = {};

    var attrs = tag.getAttributes();
    for (var attrName in attrs)
    {
      var value = attrs[attrName];

      if (attrName != "id" && adf.mf.api.amx.AmxTag.__isELExpression(value))
      {
        var elExpression = adf.mf.internal.el.parser.parse(value);
        var expr = adf.mf.api.amx.AmxNode.__performElSubstitutions(elExpression);
        this._elAttributeMap[attrName] = expr;

        if (this._tagHandler.shouldPrefetchAttribute(attrName, expr))
        {
          var value = adf.mf.internal.amx.evaluateExpression(expr);
          this._attrs[attrName] = value;
          this._cachedAttributes[attrName] = true;
          if (value === undefined)
          {
            this._state = adf.mf.internal.amx.AmxTagInstanceStates["WAITING_ON_EL_EVALUATION"];
            ++this._attributesWaitingOnEl;
            this._attributeNamesWaitingOnEl[attrName] = true;
          }
        }
      }
    }

    this._elDependencies = new adf.mf.internal.amx.AmxElDependencies(this._elAttributeMap);

    this._tagHandler.initializeTagInstance(this);

    this._children = [];

    if (parentTagInstance != null)
    {
      parentTagInstance._children.push(this);
    }
  };

  /**
   * @return {adf.mf.api.amx.AmxNode} get the AMX node that this tag instance belongs to
   */
  adf.mf.internal.amx.AmxTagInstance.prototype.getParentAmxNode = function()
  {
    return this._parentAmxNode;
  };

  /**
   * @return {(adf.mf.internal.amx.AmxTagInstance|null)} get the parent tag instance
   */
  adf.mf.internal.amx.AmxTagInstance.prototype.getParentTagInstance = function()
  {
    return this._parentTagInstance;
  };

  /**
   * @return {adf.mf.api.amx.AmxTag} get the tag for this instance
   */
  adf.mf.internal.amx.AmxTagInstance.prototype.getTag = function()
  {
    return this._tag;
  };

  /**
   * @param {(string|null)} namespace the namespace to filter the children by
   * @param {(string|null)} tagName the tag name to filter the children by (requires namespace to be
   *        provided)
   * @return {Array.<adf.mf.internal.amx.AmxTagInstance>} the children tag instances
   */
  adf.mf.internal.amx.AmxTagInstance.prototype.getChildren = function(
    namespace,
    tagName)
  {
    var children = [];
    for (var i = 0, size = this._children.length; i < size; ++i)
    {
      var child = this._children[i];
      if (namespace != null)
      {
        var tag = child.getTag();
        if ((tagName != null && tagName != tag.getName()) ||
          namespace != tag.getNamespace())
        {
          continue;
        }
      }

      children.push(child);
    }
    return children;
  };

  /**
   * Get an EL expression for an attribute. For fragments, the EL expression will be already
   * replaced.
   *
   * @return {(ELExpression|null)} for EL bound attributes, returns the ELExpression of an attribute.
   *         Returns undefined for attributes that are not EL bound.
   */
  adf.mf.internal.amx.AmxTagInstance.prototype.getAttributeExpression = function(name)
  {
    return this._elAttributeMap[name];
  };

  /**
   * Get an attribute value
   *
   * @param {string} name the name of the attribute to get the value
   * @param {boolean=} evaluateEl if not given, or true EL based attributes will be evaluated. If
   *        false, the EL string will be returned for EL based attributes.
   * @return {(Object|string)} returns the attribute value or the EL expression for the attribute.
   */
  adf.mf.internal.amx.AmxTagInstance.prototype.getAttribute = function(
    name,
    evaluateEl)
  {
    // Default evaluateEl not being passed to a true value
    if (evaluateEl === undefined)
    {
      evaluateEl = true;
    }

    // Check to see if this is an attribute that has its value cached
    if (evaluateEl && this._cachedAttributes[name] == true)
    {
      return this._attrs[name];
    }

    var expr = this.getAttributeExpression(name);
    if (expr == null)
    {
      return this.getTag().getAttribute(name);
    }

    // If not evaluating the EL, return the expression
    return evaluateEl ? adf.mf.internal.amx.evaluateExpression(expr) : expr.getExpression ();
  };

  /**
   * Called from the node when a markNodeForUpdate call is being processed. This is
   * usually called as a result of a data change event.
   *
   * @param {Array.<string>} attributeNames the names of the attributes that should be
   *        updated. Any cached attributes in this array will re-evaluate their EL
   *        values to get the current values.
   */
  adf.mf.internal.amx.AmxTagInstance.prototype.updateAttributes = function(
    attributeNames)
  {
    var oldValues = {};

    for (var a = 0, numAttrs = attributeNames.length; a < numAttrs; ++a)
    {
      var attrName = attributeNames[a];

      if (this._cachedAttributes[attrName] == true)
      {
        var expr = this.getAttributeExpression(attrName);
        var val = adf.mf.internal.amx.evaluateExpression(expr);

        var oldValue = this._attrs[attrName];
        oldValues[attrName] = oldValue;

        this._attrs[attrName] = val;

        // Notify the tag handler that a cached attribute's value has been changed
        this._tagHandler.attributeUpdated(this, attrName, oldValue, val);

        if (val !== undefined && this._attributeNamesWaitingOnEl[attrName])
        {
          delete this._attributeNamesWaitingOnEl[attrName];
          if (--this._attributesWaitingOnEl == 0)
          {
            this._state = adf.mf.internal.amx.AmxTagInstanceStates["LOADED"];
          }
        }
      }
    }
  };

  /**
   * Set a local value for an attribute on a tag instance. Allows type handlers and
   * tag instance handlers to store attributes on a tag instance
   *
   * @param {string} attributeName the name of the attribute
   * @param {Object} value the value to store. If undefined is passed, the attribute
   *        is removed from the cache
   */
  adf.mf.internal.amx.AmxTagInstance.prototype.setAttribute = function(
    attributeName,
    value)
  {
    if (value === undefined)
    {
      delete this._cachedAttributes[attributeName];
      delete this._attrs[attributeName];
    }
    else
    {
      this._cachedAttributes[attributeName] = true;
      this._attrs[attributeName] = value;
    }
  };

  /**
   * Get the EL dependencies of this tag instance
   *
   * @return {adf.mf.internal.amx.AmxElDependencies} EL dependencies object
   */
  adf.mf.internal.amx.AmxTagInstance.prototype.getElDependencies = function()
  {
    return this._elDependencies;
  };

  adf.mf.internal.amx.AmxTagInstance.prototype.getState = function()
  {
    return this._state;
  };
})();
