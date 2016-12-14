/* Copyright (c) 2013, 2014, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* ---------------- amx-tagHandlers.js ------------------ */
/* ------------------------------------------------------ */

(function()
{
  // This file houses the built in tag (non-UI) handlers. The tag handlers are currently mostly
  // place holders until a full tag API can be designed.

  var AmxTagHandler = adf.mf.internal.amx.AmxTagHandler;

  // --------- Temporary handlers --------- //
  // Register tag handlers for tags that have no behavior in this file (other tags
  // handle the logic)
  AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX, "attributeList",
    AmxTagHandler);
  AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX, "attributeSet",
    AmxTagHandler);
  AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX, "facet", AmxTagHandler);
  AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX, "transition", AmxTagHandler);
  AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX, "loadingIndicatorBehavior",
    AmxTagHandler);
  AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX, "validationBehavior",
    AmxTagHandler);

  // TODO: introduce a special API for converters. For now, just let them use the default handler
  AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX, "convertNumber", AmxTagHandler);
  AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX, "convertDateTime", AmxTagHandler);

  // TODO: introduce an action/behavior tag to process events. For now, use the default
  AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX, "showPopupBehavior", AmxTagHandler);
  AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX, "closePopupBehavior", AmxTagHandler);
  // --------- /Temporary handlers --------- //

  // --------- attribute --------- //
  // Tag handler for AMX fragment attributes. Prevent the fetching of the value attribute by default
  // in case the EL points to a method and not a value expression.
  var attributeTagHandler = AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX, "attribute",
    AmxTagHandler);
  attributeTagHandler.prototype.shouldPrefetchAttribute = function(name)
  {
    return name != "value";
  };
  // --------- /attribute --------- //


  // --------- actionListener --------- //
  // Use a custom tag handler for the actionListener tag to prevent the EL evaluation of the binding
  // attribute during tag instance construction
  var actionListenerTagHandler = AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX,
    "actionListener");

  actionListenerTagHandler.prototype.shouldPrefetchAttribute = function(name)
  {
    return name != "binding";
  };
  // --------- /actionListener --------- //

  // --------- clientListener --------- //
  var clientListenerTagHandler = AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX,
    "clientListener");

  clientListenerTagHandler._NON_DOM_EVENT_TYPES = {
    "move": true,
    "rangeChange": true,
    "selection": true,
    "valueChange": true
  };

  clientListenerTagHandler.prototype.initializeTagInstance = function(tagInstance)
  {
    // Get the attribute type. If none is specified assume an action attribute.
    var attrType;
    var type = tagInstance.getAttribute("type");
    if (type != null)
      attrType = adf.mf.internal._getEventTypeResolvedForBidi(type);
    else // use default type
      attrType = "action";

    // Only add types that are DOM events (non-DOM events are already handled):
    if (!clientListenerTagHandler._NON_DOM_EVENT_TYPES[attrType])
    {
      // The parent AMX node will have a list without duplication (map with dummy keys) that indicate
      // which clientListener events the app developer wants the TypeHandler to support.
      var parentAmxNode = tagInstance.getParentAmxNode();
      var clientListenerTypesKey = "data-clientListenerTypes";
      var clientListenerTypes = parentAmxNode.getAttribute(clientListenerTypesKey);
      if (clientListenerTypes == null)
      {
        clientListenerTypes = {};
        parentAmxNode.setAttributeResolvedValue(clientListenerTypesKey, clientListenerTypes);
      }

      clientListenerTypes[attrType] = true;
    }
  };
  // --------- /clientListener --------- //

  // --------- navigationDragBehavior --------- //
  // Use a custom tag handler for the navigationDragBehavior tag to prevent the EL evaluation of the action
  // attribute during tag instance construction
  var navigationDragBehaviorTagHandler = AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX,
    "navigationDragBehavior");

  navigationDragBehaviorTagHandler.prototype.shouldPrefetchAttribute = function(name)
  {
    return name != "action";
  };
  // --------- /navigationDragBehavior --------- //
  
  // --------- setPropertyListener --------- //
  // Use a custom tag handler for the setPropertyListener tag to prevent the EL evaluation of the
  // attributes during tag instance construction
  var setPropertyListenerTagHandler = AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX,
    "setPropertyListener");

  setPropertyListenerTagHandler.prototype.shouldPrefetchAttribute = function(name)
  {
    return false;
  };
  // --------- /setPropertyListener --------- //

  // --------- loadBundle --------- //
  // Use a custom tag handler for the loadBundle tag to prevent the EL evaluation of the
  // basename attribute during tag instance construction
  var loadBundleTagHandler = AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX,
    "loadBundle");

  loadBundleTagHandler.prototype.shouldPrefetchAttribute = function(name)
  {
    return name != "basename";
  };
  // --------- /loadBundle --------- //
  
  // --------- systemActionBehavior --------- //
  // Use a custom tag handler for the systemActionBehavior tag to prevent the EL evaluation of the actionListener
  // and action attributes during tag instance construction
  var systemActionBehaviorTagHandler = AmxTagHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX,
    "systemActionBehavior");

  systemActionBehaviorTagHandler.prototype.shouldPrefetchAttribute = function(name)
  {
    return (name != "actionListener" && name != "action");
  };
  // --------- /systemActionBehavior --------- //
})();
