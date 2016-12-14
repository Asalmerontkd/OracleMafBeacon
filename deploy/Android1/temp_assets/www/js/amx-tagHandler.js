/* Copyright (c) 2013, 2016, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* ----------------- amx-tagHandler.js ------------------ */
/* ------------------------------------------------------ */

(function()
{

  var handlerClassMap = {};
  var handlerInstanceMap = {};
  /**
   * The base class for handlers of non-UI tags.
   * This class is currently internal and the API is very rudimentary at the moment.
   * @constructor adf.mf.internal.amx.AmxTagHandler
   * @augments adf.mf.api.AdfObject
   */
  function AmxTagHandler()
  {
    this.Init();
  }

  // Make this internal as the API should not be exposed at this time until a full and
  // stable API can be designed.
  adf.mf.internal.amx.AmxTagHandler = AmxTagHandler;
  adf.mf.api.AdfObject.createSubclass(adf.mf.internal.amx.AmxTagHandler, adf.mf.api.AdfObject,
    "adf.mf.internal.amx.AmxTagHandler");

  /**
   * Register a tag handler with a namespace and name.
   * @param {string} namespace the xmlns for the tag
   * @param {string} tagName the name of the tag (no namespace)
   * @param {(adf.mf.internal.amx.AmxTagHandler|null)} precreatedClass optional pre-created class to
   *        register
   * @return {Function} the registered adf.mf.internal.amx.AmxTagHandler subclass
   */
  adf.mf.internal.amx.AmxTagHandler.register = function(
    namespace,
    tagName,
    precreatedClass)
  {
    // make sure that our class is initialized, since we are using a Factory Method
    adf.mf.api.AdfObject.ensureClassInitialization(AmxTagHandler);
    var registeredClass = precreatedClass;

    if (namespace != null && tagName != null)
    {
      if (registeredClass == null)
      {
        // Create the new class and make it inherit from adf.mf.internal.amx.AmxTagHandler:
        registeredClass =
          function RegisteredTagHandler()
          {
            this.Init();
          };

        adf.mf.api.AdfObject.createSubclass(
          registeredClass,
          adf.mf.internal.amx.AmxTagHandler,
          "TagHandler[" + namespace + ":" + tagName + "]");
      }

      // Make the association so we can find the class:
      var id = namespace + ":" + tagName;
      handlerClassMap[id] = registeredClass;
    }
    else // invalid registration, do not register the TagHandler class
    {
      adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
        "adf.mf.internal.amx.AmxTagHandler.register", "MSG_INVALID_TYPE_HANDLER_REGISTRATION",
        namespace, tagName);
    }

    return registeredClass;
  };

  /**
   * Function used by the tag instances to retrieve a tag handler instance.
   *
   * @param {string} nsPrefixedTagName the namespace and tag name separated by a colon
   * @return {(adf.mf.internal.amx.AmxTagHandler|null)} an instance of a tag handler if one
   *         is registered for the given name, otherwise null is returned.
   * @ignore
   */
  adf.mf.internal.amx.AmxTagHandler.__getHandler = function(
    nsPrefixedTagName)
  {
    var instance = handlerInstanceMap[nsPrefixedTagName];

    if (instance == null)
    {
      var cls = handlerClassMap[nsPrefixedTagName];

      if (cls != null)
      {
        instance = new cls();
        handlerInstanceMap[nsPrefixedTagName] = instance;
      }
    }

    return instance;
  };

  /**
   * Check if a tag handler has been specified for the prefixed name. If
   * there is no tag handler, the tag is a UI tag.
   *
   * @param {string} nsPrefixedTagName the namespace then a colon then the tag name
   * @return {boolean} true if there is a registered tag handler
   * @ignore
   */
  adf.mf.internal.amx.AmxTagHandler.__hasTagHandler = function(
    nsPrefixedTagName)
  {
    return AmxTagHandler.__getHandler(nsPrefixedTagName) != null;
  };

  adf.mf.internal.amx.AmxTagHandler.prototype.Init = function()
  {
    AmxTagHandler.superclass.Init.call(this);
  };

  /**
   * Check if the tag attribute with the given EL expression should
   * be pre-fetched during the construction of the tag instance.
   * This ensures that the value is present in the cache when the
   * value should be retrieved. It also ensures that no EL values will
   * be evaluated during rendering.
   *
   * @param {string} attrName the name of the tag attribute
   * @param {string} elExpression the EL expression for the attribute.
   *        In the case of fragments, it will already have been resolved
   *        of any fragment attribute names.
   * @return {boolean} true if the attribute should be evaluated during
   *         tag instance construction
   */
  adf.mf.internal.amx.AmxTagHandler.prototype.shouldPrefetchAttribute = function(
    attrName,
    elExpression)
  {
    // By default pre-fetch all EL bound attribute values
    return true;
  };

  /**
   * Callback after all of the attributes for the tag instance have been
   * fetched. Allows the tag handler to perform any initialization. The base
   * implementation will mark the parent AMX node as waiting on EL evaluation
   * if any of the attributes were not in the EL cache.
   *
   * @param {adf.mf.internal.amx.AmxTagInstance} tagInstance the tag instance
   *        being initialized
   */
  adf.mf.internal.amx.AmxTagHandler.prototype.initializeTagInstance = function(
    tagInstance)
  {
  };

  /**
   * Callback to notify the tag handler that an attribute has been updated on
   * the tag instance. Typically called as a result of a data change event.
   *
   * @param {adf.mf.internal.amx.AmxTagInstance} tagInstance the tag instance
   *        that was updated
   * @param {string} attributeName the name of the attribute that was updated
   * @param {Object} oldValue the old value of the attribute
   * @param {Object} newValue the new value of the attribute
   */
  adf.mf.internal.amx.AmxTagHandler.prototype.attributeUpdated = function(
    tagInstance,
    attributeName,
    oldValue,
    newValue)
  {
    var amxNode = tagInstance.getParentAmxNode();
    if (newValue == undefined && tagInstance.getAttributeExpression(attributeName) != null &&
      amxNode.isReadyToRender())
    {
      amxNode.setState(adf.mf.api.amx.AmxNodeStates["WAITING_ON_EL_EVALUATION"]);
    }
  };

})();
