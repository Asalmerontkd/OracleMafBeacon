/* Copyright (c) 2011, 2016, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* ------------------ amx-state.js ---------------------- */
/* ------------------------------------------------------ */

(function()
{
  /**
   * Determines whether the environmentMode is set to mobileApplicationAccelerator.
   * @return {Boolean} true if environmentMode is set to mobileApplicationAccelerator, otherwise false.
   */
  adf.mf.internal.amx.isMobileApplicationAcceleratorMode = function ()
  {
    if (adf.mf.environment.profile.environmentMode == "mobileApplicationAccelerator")
    {
      return true;
    }
    return false;
  };

  /**
   * @deprecated Use amxNode.getVolatileState instead.
   */
  adf.mf.api.amx.getVolatileState = function(amxNodeId)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "adf.mf.api.amx.getVolatileState", "MSG_DEPRECATED", "adf.mf.api.amx.getVolatileState",
      "amxNode.getVolatileState");

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
   * @deprecated Use amxNode.setVolatileState instead.
   */
  adf.mf.api.amx.setVolatileState = function(amxNodeId, payloadJsonObject)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "adf.mf.api.amx.setVolatileState", "MSG_DEPRECATED", "adf.mf.api.amx.setVolatileState",
      "amxNode.setVolatileState");

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

  adf.mf.internal.amx._getVolatileStateMap = function()
  {
    if (adf.mf.environment.profile.dtMode && adf.mf.internal.amx._volatileStateMap == null)
    {
      // This is needed because the controller will not call setMfContextInstance in DT mode:
      adf.mf.internal.amx._volatileStateMap = {};
    }
    return adf.mf.internal.amx._volatileStateMap;
  };

  /**
   * @deprecated Use amxNode.getClientState instead.
   */
  adf.mf.api.amx.getClientState = function(amxNodeId)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "adf.mf.api.amx.getClientState", "MSG_DEPRECATED", "adf.mf.api.amx.getClientState",
      "amxNode.getClientState");

    var stateValue = adf.mf.internal.amx._getClientStateMap();
    if (amxNodeId == null)
    {
      throw new Error(
        adf.mf.resource.getInfoString("AMXErrorBundle", "ERROR_ASSOCIATING_CLIENT_STATE",
          amxNodeId));
    }
    else if (stateValue == null)
    {
      throw new Error(
        adf.mf.resource.getInfoString("AMXErrorBundle", "ERROR_CLIENT_STATE_NOT_AVAILABLE",
          stateValue));
    }
    else
    {
      var payloadJsonObject = stateValue[amxNodeId];
      return payloadJsonObject;
    }
  };

  /**
   * @deprecated Use amxNode.setClientState instead.
   */
  adf.mf.api.amx.setClientState = function(amxNodeId, payloadJsonObject)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "adf.mf.api.amx.setClientState", "MSG_DEPRECATED", "adf.mf.api.amx.setClientState",
      "amxNode.setClientState");
    var stateValue = adf.mf.internal.amx._getClientStateMap();
    if (amxNodeId == null)
    {
      throw new Error(
        adf.mf.resource.getInfoString("AMXErrorBundle", "ERROR_ASSOCIATING_CLIENT_STATE",
          amxNodeId));
    }
    else if (stateValue == null)
    {
      throw new Error(
        adf.mf.resource.getInfoString("AMXErrorBundle", "ERROR_CLIENT_STATE_NOT_AVAILABLE",
          stateValue));
    }
    else
    {
      stateValue[amxNodeId] = payloadJsonObject;
    }
  };

  /**
   * Using true for the following flag results in "oracle.adfmf.framework - adf.mf.el - setValue] Since the
   * java is not available we will skip the remote write." failure messages when attempting to navigate.
   * @private
   */
  adf.mf.internal.amx._useBruceApproach = (adf.mf.api.getQueryStringParamValue(adf.mf.api.getQueryString(), "useBruceWay") == "true");

  adf.mf.internal.amx._getClientStateMap = function()
  {
    var stateValue;
    if (adf.mf.internal.amx._useBruceApproach)
    {
      var stateName = "#{bindings.amxInternalClientState}";
      if ((stateValue = adf.mf.el.getLocalValue(stateName)) === undefined)
      {
        stateValue = {};
        var getFailed  = function(req, message)
        {
          throw new Error(
            adf.mf.resource.getInfoString("AMXErrorBundle", "ERROR_CLIENT_STATE_ACCESS_FAILED",
              message));
        };
        adf.mf.el.setLocalValue({"name":stateName, "value":stateValue}, function(){}, getFailed);
      }
    }
    else // don't use Bruce's way
    {
      if (adf.mf.environment.profile.dtMode && adf.mf.internal.amx._nonBruceClientStateMap == null)
      {
        // This is needed because the controller will not call setMfContextInstance in DT mode:
        adf.mf.internal.amx._nonBruceClientStateMap = {};
      }
      stateValue = adf.mf.internal.amx._nonBruceClientStateMap;
    }

    return stateValue;
  };
})();
