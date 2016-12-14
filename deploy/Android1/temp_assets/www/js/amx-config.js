/* Copyright (c) 2011, 2016, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* ------------------ amx-config.js --------------------- */
/* ------------------------------------------------------ */

adf.mf.log.AMX = adf.mf.log.AMX ||
  new adf.mf.log.logger("oracle.adfmf.amx");

// --------- Config Initialization --------- //
(function()
{
  amx.dtmode = false; // TODO deprecated, use adf.mf.environment.profile.dtMode instead
  // this boolean value will be set directly via the Selenium scripts
  amx.testmode = amx.testmode || false;
  amx.failsafeinvoked = false;

  // GREGOR
  amx.CALL_IDX = 1;

  if (adf.mf.environment.profile.dtMode != null)
  {
    amx.dtmode = adf.mf.environment.profile.dtMode;
  }

  /**
   * Gets the agent type and version.
   * @param {string} givenUserAgentString the navigator's userAgent property
   * @return {Object} with members: a String for the agent type ("iOS", "Android", "trident",
   *                  "webkit", "gecko"), a String for the agent subtype if applicable ("Chrome",
   *                  "Generic", null), and a Number for the agent version
   * @private
   */
  function _getAgentTypeAndVersion(givenUserAgentString)
  {
    var versionParser = _parseFloatVersion;
    var agentType = "unknown";
    var agentSubtype = null;
    var agentVersion = -1;
    var incompatible = false;
    var userAgent = givenUserAgentString.toLowerCase();
    if (userAgent.indexOf("msie") != -1 || userAgent.indexOf("trident") != -1)
    {
      agentType = "trident";
      var possibleVersion = versionParser(userAgent, /trident\/(\d+[.]\d+)/);
      if (possibleVersion != -1)
      {
        // 7.0 = IE11
        // 6.0 = IE10
        // 5.0 = IE9
        // 4.0 = IE8
        agentVersion = possibleVersion;
      }
      else
      {
        possibleVersion = versionParser(userAgent, /msie (\d+\.\d+);/);
        if (possibleVersion == -1)
          possibleVersion = versionParser(userAgent, /msie (\d+\.\d+)b;/); // expression for betas
        agentVersion = possibleVersion - 4; // Trident versions are 4 behind IE numbers
      }
      if (document.documentMode != null)
      {
        // If a documentMode is provided, it would be an IE number and Trident versions are 4 behind IE numbers.
        // The actual Trident version in use would be the smaller of the 2 numbers:
        agentVersion = Math.min(agentVersion, document.documentMode - 4);
      }
      incompatible = _getReasonIfUnsupported(agentVersion, 6);
    }
    else if (userAgent.indexOf("edge") !== -1)
    {
      agentType = "UWP";

      // we do not need a agentSubtype for now since it will always be edge

      agentVersion = versionParser(userAgent, /edge\/(\d+([.]\d+)*)/);

      // for now it will be compatible until we move to a newer edge for input type="time" etc.
      incompatible = false;
    }
    else if (userAgent.indexOf("applewebkit") != -1)
    {
      agentType = "webkit";
      // 536.26.17 = Mac Desktop Safari 6.0.2
      // 535.1 = Chrome 13.0.782.1
      // 534.46 = Safari 5.1 or iOS 5
      // 525.18 = Mac/Windows Desktop Safari 3.1.1
      // 420.1 = iOS 3
      agentVersion = versionParser(userAgent, /applewebkit\/(\d+([.]\d+)*)/);
      if (userAgent.match(/ip(hone|ad|od)/))
      {
        agentType = "iOS";
        var mobileSafariVersion = versionParser(userAgent, /version\/(\d+([.]\d+)*)/);
        if (mobileSafariVersion != -1) // WebView won't contain version info
          incompatible = _getReasonIfUnsupported(mobileSafariVersion, 6.0);
      }
      else if (userAgent.match(/android/))
      {
        if (userAgent.match(/chrome\//))
        {
          agentType = "Android";
          agentSubtype = "Chrome";
        }
        else // pre-KitKat aka 4.4
        {
          agentType = "Android";
          agentSubtype = "Generic";
        }
        var androidVersion = versionParser(userAgent, /android (\d+([.]\d+)*)/);
        incompatible = _getReasonIfUnsupported(androidVersion, 4);
      }
      else if (userAgent.match(/chrome/)) // desktop Chrome
      {
        var chromeVersion = versionParser(userAgent, /chrome\/(\d+([.]\d+)*)/);
        incompatible = _getReasonIfUnsupported(chromeVersion, 29);
      }
      else // desktop Safari
      {
        var safariVersion = versionParser(userAgent, /version\/(\d+([.]\d+)*)/);
        incompatible = _getReasonIfUnsupported(safariVersion, 6.1);
      }
    }
    else if (userAgent.indexOf("gecko/")!=-1)
    {
      agentType = "gecko";
      // rv:5 = Firefox 5
      // rv:2 = Firefox 4
      // rv:1.9 = Firefox 3
      // rv:1.8.1 = Firefox 2
      // rv:1.8 = Firefox 1.5
      agentVersion = versionParser(userAgent, /rv:(\d+[.]\d+)/);
      incompatible = _getReasonIfUnsupported(agentVersion, 28);
    }

    var agentClass = " amx-" + agentType.toLowerCase();
    if (agentSubtype)
      agentClass += "-" + agentSubtype.toLowerCase();
    document.documentElement.className += agentClass;

    if (incompatible)
    {
      // Append the given User Agent string in case it is simply a matter of it
      // being in an unexpected format.
      incompatible += "; " + givenUserAgentString;
    }

    return {
      "type": agentType,
      "subtype": agentSubtype,
      "version": agentVersion,
      "incompatible": incompatible
    };
  }

  function _getReasonIfUnsupported(versionFound, versionRequired)
  {
    if (versionFound < versionRequired)
      return "" + versionFound + " < " + versionRequired;
    return false;
  }

  /**
   * Parses the float version out of of the specified agent string using
   * a regular expression to identify the version portion of the string.
   * @param {string} userAgent the lowercase navigator user agent string
   * @param {RegExp} versionNumberPattern the regular expression pattern used to extract a number that will be parsed into a float
   * @private
   */
  function _parseFloatVersion(userAgent, versionNumberPattern)
  {
    var matches = userAgent.match(versionNumberPattern);
    if (matches)
    {
      var versionString = matches[1];
      if (versionString)
        return parseFloat(versionString);
    }
    return -1;
  }

  // Add agent marker classes:
  adf.mf.internal.amx.agent = _getAgentTypeAndVersion(navigator.userAgent);

  adf.mf.internal.amx.agent.getTransitionEndEventName = function()
  {
    if (adf.mf.internal.amx.agent._transitionEndEventName == null)
    {
      var transitionEndEventName = "transitionend";
      var element = document.createElement("div");
      var transitions = {
        "WebkitTransition": "webkitTransitionEnd",
        "transition": "transitionend",
        "OTransition": "oTransitionEnd",
        "MozTransition": "transitionend"
      };

      for (var t in transitions)
      {
        if (element.style[t] !== undefined)
        {
          transitionEndEventName = transitions[t];
          break;
        }
      }
      adf.mf.internal.amx.agent._transitionEndEventName = transitionEndEventName;
    }
    return adf.mf.internal.amx.agent._transitionEndEventName;
  };

  /**
   * Internal cache of the isTransitionAfterRender result.
   */
  adf.mf.internal.amx.transitionAfterRender = null;

  /**
   * WARNING - This function and property are not supported and will be removed
   *           without any notice.
   * Internal flag that specifies whether we should render before transitioning or
   * display an empty placeholder for immediate transitioning.
   * @param {boolean} isFirstPage whether this is the initial page render
   * @return true for rendering before or false for immediate transitioning
   */
  adf.mf.internal.amx.isTransitionAfterRender = function(isFirstPage)
  {
    // See if an unsupported override was specified as an adf-property in the adf-config.xml file.
    // <adf-property name="amxTransitionMode" value="placeholder"/>
    var transitionAfterRender = adf.mf.internal.amx.transitionAfterRender;
    if (transitionAfterRender == null)
    {
      transitionAfterRender = true;

      // Get the value from the adf-config.xml object (might not be defined):
      var amxTransitionModeELExpression = adf.mf.internal.el.parser.parse ("#{applicationScope.configuration.amxTransitionMode}");
      var amxTransitionMode =
        adf.mf.environment.profile.mockData ?
          null :
        adf.mf.el.getLocalValue(amxTransitionModeELExpression);

      if ("placeholder" == amxTransitionMode)
        transitionAfterRender = false; // fast but ugly
      else
        transitionAfterRender = true; // pretty but slow

      if (isFirstPage)
      {
        // Unfortunately, applicationScope.configuration is not made available automatically
        // so we have to kick off an extra request for it so that the next time this method
        // gets called, we will know what the value is.
        // (Just before the first adf.mf.api.setContext call, we kicked off a request so
        // it will be available by the time we transition.)
        // Also, since we don't know what it is yet, we won't save off a cached result yet.
      }
      else
      {
        // Save it off so we don't have to continuously re-evaluate it.
        adf.mf.internal.amx.transitionAfterRender = transitionAfterRender;
      }
    }
    return transitionAfterRender;
  };

  amx.config =
  {
    debug:
    {
      enable: false,
      onScreen: false
    }
  };

  // TODO this and any of its uses need to be removed
  amx.log = {};

  function addToOnScreenAmxLog(text)
  {
    if (amx.config.debug.onScreen && !amx.amxDebug)
    {
      var debugDiv = document.createElement("div");
      debugDiv.setAttribute("id", "amxDebug");
      document.body.appendChild(debugDiv);
      amx.amxDebug = debugDiv;
    }

    if (amx.amxDebug)
    {
      if (amx.amxDebug.childNodes.length == 1)
        amx.amxDebug.appendChild(document.createElement("br"));
      else
        amx.amxDebug.insertBefore(document.createElement("br"), amx.amxDebug.firstChild);
      amx.amxDebug.insertBefore(document.createTextNode(text), amx.amxDebug.firstChild);
    }
  };

  amx.log.debug = function(text)
  {
    if (amx.config.debug.enable)
    {
      addToOnScreenAmxLog(text);
        console.log(text);
    }
  };

  amx.log.error = function(text)
  {
    text = "AMX-ERROR: " + text;
    addToOnScreenAmxLog(text);
    console.log(text);
  };

  amx.log.warn = function(text)
  {
    text = "AMX-WARN: " + text;
    addToOnScreenAmxLog(text);
      console.log(text);
  };

  // Add the AMX-specific loading contributors so that base-core's
  // adf.mf.api.isLoading() API will consider AMX's needs:
  adf.mf.api.addLoadingContributor(
    function()
    {
      // Return true if these things are all idle/finished or false if at least
      // one is still busy/processing.
      var isIdle =
        adf.mf.api.amx.acceptEvent() &&
        (adf.mf.internal.amx._showLoadingCalls == 0) &&
        (adf.mf.internal.getUnresolvedCallDepth() == 0) &&
        (amx.getCurrentPageName() != null) &&
        adf.mf.internal.amx._pageBuildPromiseResolve == null &&
        !adf.mf.internal.amx.isUIChangePaused();

      if (!isIdle)
        return false; // short circuit; busy, still loading

      var animatingElements = document.getElementsByClassName("amx-animating")
      var animatingElementsCount = animatingElements.length;

      if (animatingElementsCount > 0)
      {
        // We need to look at every animating element and check whether it is using
        // display none styling
        for (var i = 0; i < animatingElementsCount; ++i)
        {
          if (animatingElements[i].style.display != "none")
            return false; // short circuit; found one non-display:none animation; busy
        }
      }

      var deferredLoadingElements = document.getElementsByClassName("amx-deferred-loading")
      var deferredLoadingElementCount = deferredLoadingElements.length;
      if (deferredLoadingElementCount > 0)
      {
        // We need to look at every deferred loading element and check whether it is using
        // display  none styling
        for (var i=0; i<deferredLoadingElementCount; ++i)
        {
          if (deferredLoadingElements[i].style.display != "none")
            return false; // short circuit; found one non-display:none indicator; busy
        }
      }

      return true; // idle, not loading
    });

  /**
   * Internal function for looping over object members.
   * @private
   */
  adf.mf.internal.amx._each = function(obj, callback)
  {
    for (var key in obj)
    {
      if (obj.hasOwnProperty(key))
        callback(key, obj[key]);
    }
  };
})();
// --------- /Config Initialization --------- //
