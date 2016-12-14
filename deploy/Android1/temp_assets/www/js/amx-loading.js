/* Copyright (c) 2011, 2016, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* ------------------ amx-loading.js -------------------- */
/* ------------------------------------------------------ */

(function()
{
  /**
   * A counter for the numnber of calls made to showLoading indicator. This is required because there are several starting
   * points that can occur for long operations. The issue is that they can overlap so you are calling the start more then
   * once. The solution to this problem is to keep a count of the number of calls to start and increment this value. There
   * will be a corresponding number if calls to hide and when we get to zero we will do hiding.
   * @type {number}
   * @private
   */
  adf.mf.internal.amx._showLoadingCalls = 0;

  /**
   * Internal function called to bring up the loading indicator.
   * @private
   */
  adf.mf.internal.amx._showLoadingIndicator = function()
  {
    var loadingDiv = document.getElementById("amx-loading");
    var cl = loadingDiv.classList;
    cl.remove("hidden");        // get rid of the display:none
    cl.add("beforeShowing");    // now at display:block but with opacity:0
    cl.remove("beforeShowing"); // get rid of opacity:0
    cl.add("showing");          // animate to opacity:1

    // Let WAI-ARIA users know the page is loading
    var loadingLiveRegion = document.getElementById("amx-loading-live-region");
    if (loadingLiveRegion != null)
    {
      var msgLoading = adf.mf.resource.getInfoString("AMXInfoBundle", "MSG_LOADING");
      if (msgLoading == null) // will be null if too soon (e.g. initial page load)
        msgLoading = "Loading";
      loadingLiveRegion.textContent = msgLoading;
    }
  };

  /**
   * This function shows the busy indicator.
   * You are responsible for hiding the indicator or else it will be shown longer than necessary.
   * First consider whether you really need to use this API.
   * This function is generally targeted for component developers.
   * If you are an app developer, you might simply need to use amx:loadingIndicatorBehavior tag in
   * your page with its failSafeDuration attribute.
   * @param {number} failSafeDuration The approximate duration (non-negative integer in milliseconds) that the framework
   *                                  will wait between showing and hiding the loading indicator (assuming some other
   *                                  trigger has not already shown the indicator); if null or not specified, 10000 (10
   *                                  seconds) will be used instead.
   * @param {function() : string} failSafeClientHandler The optional JavaScript function that will be invoked when the failSafeDuration
   *                                         has been reached. This function can be used to decide how to proceed. This
   *                                         function must return a String that is one of these values:
   *                                         (a) "hide" (meaning just hide the indicator like the default fail-safe),
   *                                         (b) "repeat" (meaning restart the timer for another duration where the function
   *                                             may get invoked again), or
   *                                         (c) "freeze" (meaning keep the indicator up and wait indefinitely; the page may
   *                                             become stuck in a frozen state until restarted).
   */
  adf.mf.api.amx.showLoadingIndicator = function(failSafeDuration, failSafeClientHandler)
  {
    // This will set a timer to actually launch the busy indicator.
    // This is set on a timer to allow us to cancel this and not show any busy indicator if the action being
    // performed is less then 250ms.

    // If this is the first call to showing the Loading/Busy Indicator and we are not starting of the feature
    // then we have to set the timer to show the loading/busy indicator.
    if (adf.mf.internal.amx._showLoadingCalls == 0 && adf.mf.internal.amx._loadingIndicatorNotFirstTime == true)
    {
      adf.mf.internal.amx._showLoadingIndicator();

      // Need a failsafe timer that will guarantee that the loading indicator is removed.

      // The amx:view tag supports an amx:loadingIndicatorBehavior which lets you
      // define defaults for the page (see amx:view's render() function):
      var actualFailSafeDuration = adf.mf.internal.amx._failSafeDuration; // default is 10 seconds (10,000 ms)
      var actualFailSafeClientHandler = adf.mf.internal.amx._failSafeClientHandler;

      // If passed-in overrides were given, use those instead of the defaults:
      if (failSafeDuration !== undefined)
        actualFailSafeDuration = failSafeDuration;
      if (failSafeClientHandler !== undefined)
        actualFailSafeClientHandler = failSafeClientHandler;

      var failSafeTimerHandler = function()
      {
        var result = "hide";
        try
        {
          if (actualFailSafeClientHandler != null)
            result = actualFailSafeClientHandler();
        }
        catch (problem)
        {
          adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
            "adf.mf.api.amx.showLoadingIndicator", "MSG_PROBLEM_WHILE_INVOKING_FAIL_SAFE_HANDLER");

          // Only log the exception at a fine level for security reasons
          adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
            "adf.mf.api.amx", "showLoadingIndicator", problem);
        }

        if (adf.mf.internal.amx._failSafeTimer != null) // if still applicable
        {
          if (result == "freeze")
            return;
          else if (result == "repeat")
            adf.mf.internal.amx._failSafeTimer =
              window.setTimeout(failSafeTimerHandler, actualFailSafeDuration);
          else // "hide"
            adf.mf.internal.amx.killLoadingIndicator();
        }
      };

      adf.mf.internal.amx._failSafeTimer =
        window.setTimeout(failSafeTimerHandler, actualFailSafeDuration);
      // Set the number of calls to 1
      adf.mf.internal.amx._showLoadingCalls = 1;
    }
    else
    {
      // This is not the first call so we need to just increase the number of calls. This is neeeded as we will decrement
      // this value and when we hit zero then we will remove the loading/busy indicator.
      adf.mf.internal.amx._showLoadingCalls = adf.mf.internal.amx._showLoadingCalls + 1;
    }
  };

  /**
   * To ensure that the loading/busy indicator for some unknown reason is removed we have a failsafe timer that will
   * ensure that this is removed. This is required because the user will be unable to interact with the page as loading/
   * busy indicator is blocking all input.
   */
  adf.mf.internal.amx.killLoadingIndicator = function()
  {
    // Since the failsafe had to kick in we need to clear the timer and also delete the old timer.
    // Clear the timer so it is not called again.
    window.clearTimeout(adf.mf.internal.amx._failSafeTimer);
    // Need to delete the old timer
    delete adf.mf.internal.amx._failSafeTimer;
    // Need to reset the calls to 0
    adf.mf.internal.amx._showLoadingCalls = 0;
    // Transition the loading/busy indicator off.
    var loadingDiv = document.getElementById("amx-loading");
    var transitionEndFunction =
      function()
      {
        loadingDiv.classList.remove("hiding"); // no longer animating
        loadingDiv.classList.add("hidden");    // set display:none

        // Blank out the loading WAI-ARIA live region so that you won't hear the text when not loading
        var loadingLiveRegion = document.getElementById("amx-loading-live-region");
        if (loadingLiveRegion != null)
        {
          loadingLiveRegion.textContent = "";
        }

        // We are done with showing the initial HTML for the page:
        adf.mf.internal.api.queueShowPageComplete();
        adf.mf.internal.amx.addBuildGestureIfApplicable();
      };
    adf.shared.impl.animationUtils.addOneTimeTransitionEndWithFailsafe(
      loadingDiv,
      transitionEndFunction);

    loadingDiv.classList.remove("showing"); // get rid of opacity:1
    loadingDiv.classList.add("hiding");     // animate to opacity:0

    // if we are in test mode, then set the failsafe invoked flag
    if (amx.testmode)
    {
      amx.failsafeinvoked = true;
    }
  };

  /**
   * Hides one instance of the loading indicator.
   */
  adf.mf.api.amx.hideLoadingIndicator = function()
  {
    // This function will decrement the showLoadingIndicator calls.
    // Once attribute and when it goes to zero will start the process for hiding the loading/busy indicator.

    if (adf.mf.internal.amx._showLoadingCalls == 0)
      return;

    adf.mf.internal.amx._showLoadingCalls = adf.mf.internal.amx._showLoadingCalls - 1;
    if (adf.mf.internal.amx._showLoadingCalls == 0)
    {
      var loadingDiv = document.getElementById("amx-loading");
      var cl = loadingDiv.classList;
      cl.remove("showing"); // get rid of opacity:1
      cl.add("hiding");     // animate to opacity:0
      cl.remove("hiding");  // no longer animating
      cl.add("hidden");     // set display:none

      // Clear the failsafe timer so it is not called.
      window.clearTimeout(adf.mf.internal.amx._failSafeTimer);

      // Need to delete the old failsafe timer
      delete adf.mf.internal.amx._failSafeTimer;

      // Blank out the loading WAI-ARIA live region so that you won't hear the text when not loading
      var loadingLiveRegion = document.getElementById("amx-loading-live-region");
      if (loadingLiveRegion != null)
      {
        loadingLiveRegion.textContent = "";
      }
    }
  };

  /**
   * This is a special case for clearing the loading/busy indicator. On the initial load of the feature we set the style
   * on the DIV to show the loading indicator. This means there will be no call to hiding and instead call this function.
   * Unfortunalty this function will get called multiple times based on where this call had to put. This means we need
   * to make sure this is only called the once and we rely on the attribute being set for this.
   */
  adf.mf.api.amx.hideLoadingIndicatorOnlyIfFirstTime = function()
  {
    // If this is the first time this function is called then we will hide the loading/busy indicator.
    if (adf.mf.internal.amx._loadingIndicatorNotFirstTime == null)
    {
      // Based on the path taken to all this function there may have been other calls to showing. We need to ensure that
      // the counter has been set back to zero.
      adf.mf.internal.amx._showLoadingCalls = 0;
      adf.mf.internal.amx._loadingIndicatorNotFirstTime = true;
      var loadingDiv = document.getElementById("amx-loading");
      var transitionEndFunction = function()
        {
          loadingDiv.classList.remove("hiding"); // no longer animating
          loadingDiv.classList.add("hidden");    // set display:none

          // We are done with showing the initial HTML for the page:
          adf.mf.internal.api.queueShowPageComplete();
          adf.mf.internal.amx.addBuildGestureIfApplicable();
        };
      adf.shared.impl.animationUtils.addOneTimeTransitionEndWithFailsafe(
        loadingDiv,
        transitionEndFunction);

      loadingDiv.classList.remove("showing"); // get rid of opacity:1
      loadingDiv.classList.add("hiding");     // animate to opacity:0

      // MAX's use of iframes makes computed styles unfeasible; this may cause
      // other problems for MAX.
      if (adf.mf.internal.amx.getComputedStyle(loadingDiv).opacity == 0 ||
          adf.mf.internal.amx.isMobileApplicationAcceleratorMode())
      {
        // Already at zero opacity so no transition will take place, clean up now:
        transitionEndFunction();
      }

      var incompatible = adf.mf.internal.amx.agent["incompatible"];
      if (incompatible)
      {
        // Log the warning:
        adf.mf.log.logInfoResource(
          "AMXInfoBundle",
          adf.mf.log.level.SEVERE,
          "_getAgentTypeAndVersion",
          "MSG_ERROR_UNSUPPORTED_BROWSER",
          incompatible);

        // Show the warning to the user so they can take action:
        if (!adf.mf.environment.profile.dtMode && // not in DT mode
          !adf.suppressUnsupportedBrowserError) // isn't suppressing the warning
        {
          var unsupportedBrowserError =
            adf.mf.resource.getInfoString(
              "AMXInfoBundle",
              "MSG_ERROR_UNSUPPORTED_BROWSER",
              incompatible);
          alert(unsupportedBrowserError);
        }
      }
    }
    else
    {
      adf.mf.api.amx.hideLoadingIndicator();
    }
  };

  /**
   * When an app is deployed using debug mode, allow repeated taps on the page
   * that occur within a set time limit to cause build information to be displayed
   * to the user.
   */
  adf.mf.internal.amx.addBuildGestureIfApplicable = function()
  {
    if (adf._debugBodyPageTapCount == null)
    {
      adf._debugBodyPageTapCount = [ 0, 0 ]; // tap count, timestamp
      var bodyPage = document.getElementById("bodyPage");
      if (bodyPage != null &&
          bodyPage.classList.contains("amx-debug"))
      {
        adf.mf.api.amx.addBubbleEventListener(
          bodyPage,
          "touchend",
          function(event)
          {
            var currentTime = (new Date()).getTime();

            // Have we surpassed the limit for repeated tapping?
            if (currentTime - adf._debugBodyPageTapCount[1] > 3000)
              adf._debugBodyPageTapCount = [ 1, currentTime ]; // exceeded time limit
            else
              ++adf._debugBodyPageTapCount[0]; // increment the tap counter

            if (adf._debugBodyPageTapCount[0] == 10) // tapped enough times
            {
              var buildInfo = adf.mf.internal.BUILD_INFO;
              if (buildInfo != null)
              {
                var productVersion = buildInfo["PRODUCT_VERSION"];
                var jobName = buildInfo["JOB_NAME"];
                var buildNumber = buildInfo["BUILD_NUMBER"];

                // Do not show an alert if there is nothing to display or if we are
                // in automation mode (don't want to interfere with testing when
                // rapidly tapping).
                if (productVersion != "?" &&
                  document.getElementById("bodyPage").className.indexOf("amx-automation") == -1)
                {
                  var buildInfo = "Oracle MAF " + productVersion + " - " + jobName + " " + buildNumber;
                  adf.mf.api.amx.addMessage("info", buildInfo, null, null);
                }
              }
            }
          });
      }
    }
  };

  /**
   * Object to track AMX nodes that are busy. This is used for performance to track when a page has
   * fully loaded or after a page has fully reacted to a data change event after an AMX event has
   * been queued.
   *
   * @constructor
   */
  function PageBusyTracker()
  {
    this._operations = [];
    this._nodeCount = 0;
  }

  /**
   * Sets the node count to zero. Used when a new page is being loaded
   */
  PageBusyTracker.prototype.reset = function()
  {
    this._nodeCount = 0;

    adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
      "adf.mf.internal.amx._pageWaitingInformation", "reset",
      "Node count has been reset");
  };

  /**
   * Increments the number of nodes waiting on a condition.
   */
  PageBusyTracker.prototype.increment = function()
  {
    ++this._nodeCount;

    if (adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST))
    {
      adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
        "adf.mf.internal.amx._pageWaitingInformation", "increment",
        "Nodes in a waiting state is now " + this._nodeCount);
    }
  };

  /**
   * Decrements the number of nodes waiting on a condition.
   */
  PageBusyTracker.prototype.decrement = function()
  {
    --this._nodeCount;

    if (adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST))
    {
      adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
        "adf.mf.internal.amx._pageWaitingInformation", "decrement",
        "Nodes in a waiting state is now " + this._nodeCount);
    }
  };

  /**
   * Notifies the tracker that a top level operation has begun that should not be stopped until all
   * the nodes are in a resolved state (not INITIAL, WAITING_ON_EL_EVALUATION or
   * PARTIALLY_RENDERED).
   *
   * @param {boolean} stopCurrent if true and there already is an active operation, it will be
   *        stopped as part of this call. If not, the new operation will be stopped along with
   *        the current one.
   * @param {string} operationName the name of the operation
   * @param {Object} the logging level for this operation
   * @param {string} operationDescription the description of the operation
   * @param {string} instance name for this operation. For example, event name
   */
  PageBusyTracker.prototype.startOperation = function(
    stopCurrent,
    operationName,
    level,
    operationDescription,
    instanceName)
  {
    var numOper = this._operations.length;
    if (numOper)
    {
      if (adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST))
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
          "adf.mf.internal.amx._pageWaitingInformation", "startOperation",
          "An operation was already running: " + this.getActiveOperation() +
          "\n  New operation: " + operationName + " " + instanceName);
      }

      if (stopCurrent)
      {
        for (var i = 0; i < numOper; ++i)
        {
          this._operations[i].stop();
        }

        this._operations = [];
      }
    }

    var oper = adf.mf.internal.perf.startMonitorOperation(operationName, level, operationDescription, instanceName);
    this._operations.push(oper);
  };

  /**
   * Checks if all AMX nodes are in a resolved state, and if so, stops any ongoing operations.
   */
  PageBusyTracker.prototype.checkComplete = function()
  {
    var numOper = this._operations.length;
    if (numOper && this._nodeCount == 0)
    {
      if (adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST))
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
          "adf.mf.internal.amx._pageWaitingInformation", "checkComplete",
          "Operation is complete: " + this.getActiveOperation());
      }

      for (var i = 0; i < numOper; ++i)
      {
        this._operations[i].stop();
      }

      this._operations = [];
    }
    else if (numOper)
    {
      if (adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST))
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
          "adf.mf.internal.amx._pageWaitingInformation", "checkComplete",
          "Operation is not complete yet. Waiting count: " + this._nodeCount);
      }
    }
    else
    {
      adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
        "adf.mf.internal.amx._pageWaitingInformation", "checkComplete",
        "checkComplete called when there was no active operation");
    }
  };

  /**
   * Gets if an operation is active
   *
   * @return {boolean} true if there is an active operation
   */
  PageBusyTracker.prototype.isOperationActive = function()
  {
    return this._operations.length > 0;
  };

  /**
   * Get the active operation if there is one
   *
   * @return {Object|null} the active operation or null
   */
  PageBusyTracker.prototype.getActiveOperation = function()
  {
    return this.isOperationActive() ? this._operations[0] : null;
  };

  /**
   * Check if there are any AMX nodes in a waiting state
   *
   * @return {boolean} true if there are nodes waiting
   */
  PageBusyTracker.prototype.areNodesWaiting = function()
  {
    return this._nodeCount > 0;
  };

  adf.mf.internal.amx._pageBusyTracker = new PageBusyTracker();



  function initUI()
  {
    if (initPromise)
    {
      return initPromise;
    }
    else
    {
      initPromise = new adf.mf.internal.BasePromise(
        function(resolve, reject)
        {
          // adf.mf.environment.profile.mockData=true for the DT as well as the RT test harness mode. The DT
          // requires that featureLevelIncludes.jso be in the feature root, NOT relative
          // to the directory of the AMX
          if (adf.mf.environment.profile.mockData)
          {
            adf.mf.api.resourceFile.loadJsonFile(
              adfc.Util.addFeatureRootPrefix("featureLevelIncludes.jso"),
              true,
              function(data)
              {
                loadIncludes(data);
                resolve();
              },
              function()
              {
                // do nothing, no config.
                resolve();
              });
          }
          else
          {
            container.internal.device.integration.getAmxIncludeList(
              function(includes)
              {
                loadIncludes(includes);
                resolve();
              },
              function(er)
              {
                adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
                  "initUI", "MSG_AMX_INCLUDE_FAILED");

                // Only log the exception at a fine level for security reasons
                adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
                  "initUI", "container.internal.device.integration.getAmxIncludeList", er);
                resolve();
              });
          }
        });

      return initPromise;
    }
  }

  function loadIncludes(includes)
  {
    if (includes)
    {
      adf.mf.internal.amx._each(includes, function(idx, include)
      {
        var file = include.file;
        if (!amx.hasProtocol(file))
        {
          file = adfc.Util.addFeatureRootPrefix(include.file);
        }
        if (include.type == "StyleSheet")
        {
          amx.includeCss(file);
        }
        else if (include.type == "JavaScript")
        {
          amx.includeJs(file);
        }
      });
    }
  }

  function initData(amxPageName)
  {
    return mockInitData(amxPageName);
  }

  var initDataDone = false;

  function mockInitData(pagename)
  {
    return new adf.mf.internal.BasePromise(
      function(resolve, reject)
      {
        // if the data has not been initialized, and we are not in the Oracle Shell (ADFMobile undefined), then, we load the model.jso
        //TODO: need to add condition for :  typeof ADFMobile === "undefined" & and !forceInitDataMock
        if (!initDataDone && adf.mf.environment.profile.mockData)
        {
          // before we do anything, make sure all of the el gets set up by trying to retrieve the application scope
          // this will allow any data in model.jso that isn't bindings related to not get over-written
          adf.mf.el.getLocalValue("#{applicationScope}");
          pagename = pagename || "nopage";
          // adf.mf.environment.profile.mockData=true for the DT as well as the RT test harness mode. The DT
          // requires that model.jso be in the feature root, NOT relative
          // to the directory of the AMX
          adf.mf.api.resourceFile.loadJsonFile(
            adfc.Util.addFeatureRootPrefix("model.jso"),
            true,
            function(data)
            {
              if (data)
              {
                //model = data;
                //adf.mf.el.addVariable("bindings", data);
                adf.mf.internal.amx._each(data,
                  function(key,value)
                  {
                    adf.mf.el.addVariable(key, value);
                  });

                adf.mf.el.addVariable("applicationScope", {});
                adf.mf.el.addVariable("pageFlowScope", {});
                initDataDone = true;
                adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.INFO, "mockInitData-a",
                  "MSG_AMX_MODEL_JSO_LOADED");
                initContext(pagename, resolve);
              }
              else
              {
                adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
                  "mockInitData-b", "MSG_NO_MODEL_JSO_FOUND");
                adf.mf.environment.profile.mockData = false;
                  initContext(pagename, resolve);
              }
            },
            function(error)
            {
              adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
                "mockInitData-c", "MSG_NO_MODEL_JSO_FOUND");

              // Only log the exception at a fine level for security reasons
              adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
                "mockInitData", "adf.mf.api.resourceFile.loadJsonFile", error);

              adf.mf.environment.profile.mockData = false;
              initContext(pagename, resolve);
            });
        }
        else
        {
          initContext(pagename, resolve);
        }
      });
  }

  var amxTransitionModeELExpression = adf.mf.internal.el.parser.parse ("#{applicationScope.configuration.amxTransitionMode}");

  function initContext(amxPageName, callback)
  {
    var promise = new adf.mf.internal.BasePromise(function (resolve, reject)
    {
      if (!adf.mf.environment.profile.mockData)
      {
        var perf = adf.mf.internal.perf.startMonitorCall("Initialize context for",
          adf.mf.log.level.FINER, "adf.mf.internal.amx:initContext", amxPageName);

        // Prime the EL values for the a variable that will be used in
        // adf.mf.internal.amx.isTransitionAfterRender:
        if (!adf.mf.environment.profile.mockData)
          amx.getElValue(amxTransitionModeELExpression, true);

        //
        //  Set the current context.
        //
        var newViewScope = adf.mf.internal.lastNavIsDifferentView;
        adf.mf.api.setCurrentContext(amxPageName, true, true, newViewScope, function ()
        {
          perf.stop();
          resolve();
        },
        function (ex)
        {
          adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.WARNING, "initContext",
            "MSG_SET_CONTEXT_FAILED", amxPageName);

          // Only log the exception at a fine level for security reasons
          adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
            "initContext", "adf.mf.api.setCurrentContext", ex);

          perf.stop();
          resolve();
        });
      }
      else
      {
        resolve();
      }
    });
    promise.then(function ()
    {
      callback();
    });
  }

  /**
   * Load a new instance of the amxPage JSON structure.
   * Returns a promise that will resolve with the amxPage JSON Structure. <br />
   *
   * @param {Object} uri the URI to the AMX page
   */
  function loadAmxPage(uri)
  {
    return new adf.mf.internal.BasePromise(
      function(resolve, reject)
      {
        adf.mf.internal.amx._resourcesDataPromise.then(
          function()
          {
            adf.mf.internal.amx._loadXmlFile(
              uri,
              true,
              function(data)
              {
                resolve(data);
              },
              function(e)
              {
                reject("Unable to load the XML file: " + uri, e);
              });
          });
      });
  }

  /**
   * Reloads the current AMX page UI.
   * It should only be invoked in MobileApplicationAcceleratorMode.
   * This function does not reload the feature or page,
   * nor it affects any of the bindings, scopes, etc.
   *
   * This is an internal API and it is used by MAX.
   *
   * @return {Promise}
   */
  adf.mf.internal.amx.softReloadCurrentAmxPage = function ()
  {
    var that = this;
    return new adf.mf.internal.BasePromise(
      function(resolve, reject)
      {
        adf.mf.api.finishAnyLoading().then(
          function ()
          {
            adf.mf.api.amx.showLoadingIndicator();

            adf.mf.internal.amx._queueCriticalSectionFunction(
              softReloadCurrentAmxPageImpl,
              that,
              true,
              {
                "resolve": resolve,
                "reject": reject
              });
          });
      });
  };

  function softReloadCurrentAmxPageImpl(promiseCallbacks)
  {
    var amxPage = amx.getCurrentPageName();

    // if current page path is null
    // or the environmentMode is not set to MobileApplicationAccelerator
    // hide the loading indicator and do nothing
    if (amxPage == null || !adf.mf.internal.amx.isMobileApplicationAcceleratorMode())
    {
      adf.mf.api.amx.hideLoadingIndicator();
      promiseCallbacks["reject"]();
    }
    else
    {
      // NOTE: amx-popup is lazily loaded, so we must check for the existence
      // of the function before calling it
      if (adf.mf.internal.amx.closePopups)
      {
        adf.mf.internal.amx.closePopups();
      }

      // Before we strip off the IDs, call the destroy methods on any AMX nodes
      var current = document.querySelector("#bodyPageViews > .current");
      adf.mf.internal.amx.processDestroy(current);

      // Strip off any ID attributes on the page's elements.
      if (current != null)
      {
        adf.mf.internal.amx.stripIds(current);
      }

      // Purge any elements that might be disconnected from the bodyPage:
      adf.mf.internal.amx._purgeOnNav();

      // invoke displayAmxPage to reload the amxPage
      adf.mf.api.amx.displayAmxPage(amxPage).then(
        function(newPage)
        {
          current.classList.remove("current");
          current.classList.add("old");
          newPage.classList.remove("new");
          newPage.classList.add("current");
          adf.mf.internal.amx.processDestroy(current);
          adf.mf.api.amx.removeDomNode(current);
          adf.mf.api.amx.hideLoadingIndicator();
          promiseCallbacks["resolve"]();
        });

      // if debug mode...
      // Check for window event leaks
      adf.mf.internal.amx._checkForWindowsEventLeaks("softReloadCurrentAmxPage");
    }
  };

  /**
   * Removes all element IDs from the given subtree (root included).
   * @param {Element} root the root element of the subtree whose IDs are to be removed
   */
  adf.mf.internal.amx.stripIds = function(root)
  {
    // Strip off any ID attributes on the old page's elements. This will prevent any issues
    // with getElementById finding elements on the old page instead of the new page.
    var treeWalker =
     document.createTreeWalker(
       root,
       NodeFilter.SHOW_ELEMENT,
       function(node)
       {
         return (node.hasAttribute("id")) ?
           NodeFilter.FILTER_ACCEPT :
           NodeFilter.FILTER_SKIP;
       },
       false);

    while (treeWalker.nextNode())
    {
      treeWalker.currentNode.removeAttribute("id");
    }

    root.removeAttribute("id"); // remove it from the root too
  };

  var amxTagForPagePromiseMap = {};
  var amxPages = {};
  var amxPageRootNode = null;

  /**
   * Builds the AMX node hierarchy.
   *
   * @private
   * @param {string} amxPageName the name of the page that is being loaded.
   * @param {adf.mf.api.amx.AmxTag} rootTag the root AMX tag of the page
   * @return {Object} promise object resolved with the root AMX node once the page
   *         is ready to render.
   */
  function buildAmxNodeTree(
    amxPageName,
    rootTag)
  {
    var promise = new adf.mf.internal.BasePromise(
      function(resolve, reject)
      {
        var visitContext = null;

        var perf = adf.mf.internal.perf.startMonitorCall("Build AMX node tree", adf.mf.log.level.FINER, "adf.mf.internal.amx:buildAmxNodeTree");
        try
        {
          // Store off the promise object so that we can use it during the first data
          // change event
          adf.mf.internal.amx._pageBuildPromiseResolve = resolve;

          visitContext = new adf.mf.api.amx.VisitContext();
          visitContext._allNodesReadyToRender = true;

          if (amxPageName == null)
          {
            var viewHistory = adf.mf.internal.controller.ViewHistory.peek();
            amxPageName = viewHistory["amxPage"];
          }

          if (rootTag == null)
          {
            rootTag = amxPages[amxPageName];
          }

          amxPageRootNode = rootTag.buildAmxNode(null, null);

          if (!adf.mf.environment.profile.mockData)
          {
            adf.mf.el.startGetValueBatchRequest(); // prevent chatty getValue calls

            // we want to make sure we always are updated with the current values for
            // availableHeight and availableWidth, so we attempt to retrieve the values
            // here and then we can just call getLocalValue in any place afterwards
            adf.mf.internal.amx.evaluateExpression("#{deviceScope.hardware.screen.availableHeight}");
            adf.mf.internal.amx.evaluateExpression("#{deviceScope.hardware.screen.availableWidth}");
          }

          amxPageRootNode.visit(
            visitContext,
            adf.mf.internal.amx._buildVisitCallback);
        }
        catch(e)
        {
          adf.mf.internal.amx.errorHandlerImpl(null, e);
        }
        finally
        {
          perf.stop();
        }

        try
        {
          if (!adf.mf.environment.profile.mockData)
          {
            adf.mf.el.flushGetValueBatchRequest(); // done preventing chatty getValue calls
          }
        }
        catch(e)
        {
          adf.mf.internal.amx.errorHandlerImpl(null, e);
        }

        if (visitContext._allNodesReadyToRender)
        {
          // If there were no cache misses, then do not wait for a data change event
          // and render immediately
              adf.mf.internal.amx._pageBuildPromiseResolve = null;
              resolve(amxPageRootNode);
        }

        // Do not resolve the promise if the node tree has not yet been rendered.
        // We will wait for the first data change event that delivers the first batch
        // of EL values to the cache to render the page.
      },
      true /* needed for jQuery-like callbacks without timeouts */);

    return promise;
  }

  function debugPrintAmxTagTree(tag, prefix)
  {
    if (prefix == null)
    {
      prefix = "";
    }

    var str = prefix + "<" + tag._prefixedName;
    var attr = tag.getAttributes();
    for (var name in attr)
    {
      str += " " + name + "=\"" + attr[name] + "\"";
    }

    var children = tag.getChildren();
    if (children.length == 0)
    {
      str += "/>";
      console.log(str);
      return;
    }

    str += ">";
    console.log(str);
    for (var i = 0, size = children.length; i < size; ++i)
    {
      var childTag = children[i];
      debugPrintAmxTagTree(childTag, prefix + "  ");
    }

    console.log(prefix + "</" + tag._prefixedName + ">");
  }

  function debugPrintAmxNodeTree(rootNode)
  {
    rootNode.visit(
      new adf.mf.api.amx.VisitContext(),
      function(
        visitContext,
        node)
      {
        var prefix = "";
        for (var p = node.getParent(); p != null; p = p.getParent())
        {
          prefix += "  ";
        }
        var str = "AmxNode(" + node.getId() +"): ";
        var attrNames = node.getDefinedAttributeNames();
        for (var i in attrNames)
        {
          str += (attrNames[i] + ":" + node.getAttribute(attrNames[i])) + " ";
        }
        console.log(prefix + str);

        return adf.mf.api.amx.VisitResult["ACCEPT"];
      });
  }

  /**
   * Return a promise object (or cached tag) that will get resolved with the amxPage root tag.
   * This will first try to get it from the cache, or load it if needed.
   *
   * @param {Object} uri The URI of the page to load
   * @param {Boolean} getCacheInsteadOfPromise whether to get the cached tag or a promise
   * @return {Object} either a promise object or a possibly undefined adf.mf.api.amx.AmxTag
   */
  function getAmxTagForPage(uri, getCacheInsteadOfPromise)
  {
    // Note that we are caching the tag hierarchy per page. If there is ever a problem with the
    // retained AMX tag hierarchies taking up too much RAM, then we should remove the cache and
    // regenerate the tags from the XML each time.

    // Get the base URI to resolve the relative path
    var prefix = adfc.Util.addFeatureRootPrefix("/");
    var relUri = uri;
    if (relUri.substring(0, prefix.length) == prefix)
    {
      relUri = relUri.substring(prefix.length);
    }

    var amxPageTag = amxPages[relUri];
    if (getCacheInsteadOfPromise)
    {
      return amxPageTag;
    }

    var promise;

    if (amxPageTag)
    {
      promise = new adf.mf.internal.BasePromise(
        function(resolve, reject)
        {
          if (amxPageTag instanceof adf.mf.api.amx.AmxTag)
          {
            resolve(amxPageTag);
          }
          else
          {
            // The tag is not actually a tag, but the error arguments stored in the map
            reject(amxPageTag);
          }
        });
    }
    else
    {
      promise = amxTagForPagePromiseMap[relUri];
      if (promise == null)
      {
        promise = new adf.mf.internal.BasePromise(
          function(resolve, reject)
          {
            loadAmxPage(uri).then(
            function(amxPageTag)
            {
              // do not cache if in MAX Mode
              if(!adf.mf.internal.amx.isMobileApplicationAcceleratorMode())
              {
                amxPages[relUri] = amxPageTag;
              }

              delete amxTagForPagePromiseMap[relUri];

              resolve(amxPageTag);
            },
            function(msgAndE)
            {
              var msg = msgAndE[0];
              var e = msgAndE[1];

              amxPages[relUri] = [ msg, e ];
              delete amxTagForPagePromiseMap[relUri];

              // forward the failure argument to the promise
              var args = Array.prototype.slice.call(arguments);

              reject.apply(null, args);
            });
          });

        amxTagForPagePromiseMap[relUri] = promise;
      }
    }

    return promise;
  }

  // Expose for use by the amx:fragment
  adf.mf.internal.amx.__getAmxTagForPage = getAmxTagForPage;

  /**
   * Get the AmxNode root node for the currently loaded page.
   *
   * @return {(adf.mf.api.amx.AmxNode|null)} the amx node or null if the
   *         page is not loaded.
   */
  adf.mf.api.amx.getPageRootNode = function()
  {
    return amxPageRootNode;
  };

  // this tells if the app is transitioning something (events should be frozen when doing so)
  amx.transitioning = false;

  amx.acceptEvent = function()
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "amx.acceptEvent", "MSG_DEPRECATED", "amx.acceptEvent", "adf.mf.api.amx.acceptEvent");
    return adf.mf.api.amx.acceptEvent();
  };

  /**
   * Determines whether an event can be processed.
   * @return {Boolean} whether it is safe to proceed with event processing (not in the middle of a transition)
   */
  adf.mf.api.amx.acceptEvent = function()
  {
    return !amx.transitioning && !adf.mf.environment.profile.dtMode;
  };

  amx.getCurrentPageName = function()
  {
    var currentPage = document.querySelector(".amx-view-container.current");
    if (currentPage != null)
      return currentPage.getAttribute("data-pagename");
    return null;
  };

  amx.hooks = {};

  var isFirstPage = true;
  var initPromise = null;

  //  Let the navigation handler manage view history and the MfContextInstance.
  adf.mf.internal.useNavHandlerViewHistory = true;

  /**
   * Establish (or re-establish) the mfContext instance for the page that the user will now be interacting with.
   * Used by the controller's navigation handler during tansition to a new view.
   * @param viewHistoryItem  the view history stack entry associtated with the current view.
   * @param brandNewInstance is this a new view instance or an existing one (e.g. a back navigation)?
   * @export
   */
  adf.mf.internal.amx.setMfContextInstance = function(viewHistoryItem, brandNewInstance)
  {
    // Prepare the client state map (the bucket that survives navigation):
    if (adf.mf.internal.amx._useBruceApproach)
    {
      var pageDef    = viewHistoryItem.amxPage;
      var resetState = false; // per Bruce, use false here (may in the future consider how brandNewInstance plays into it)
      var reSync     = false; // per Bruce, use false here (may in the future consider how brandNewInstance plays into it)
      var resetViewScope = adf.mf.internal.lastNavIsDifferentView;
      var setFailed  = function(req, message)
      {
        throw new Error(
          adf.mf.resource.getInfoString("AMXErrorBundle", "ERROR_MF_CONTEXT_SET_FAILED",
            message));
      };
      adf.mf.api.setCurrentContext(pageDef, resetState, reSync, resetViewScope, function(){}, setFailed);
    }
    else // don't use Bruce's way
    {
      if (viewHistoryItem._nonBruceClientStateMap == null)
      {
        viewHistoryItem._nonBruceClientStateMap = {};
      }
      adf.mf.internal.amx._nonBruceClientStateMap = viewHistoryItem._nonBruceClientStateMap;
    }

    // Prepare a fresh volatile state map (the bucket that resets at navigation):
    adf.mf.internal.amx._volatileStateMap = {};
  };

  /**
   * Remove the mfContext instance for the page that the user will now be leaving.
   * Used by the controller's navigation handler during tansition to a new view.
   * @param viewHistoryItem  the view history stack entry associtated with the view to be removed.
   * @export
   */
  adf.mf.internal.amx.removeMfContextInstance = function(viewHistoryItem)
  {
    // Purge the client state map (the bucket that survives navigation) since this instance will never be used again:
    if (adf.mf.internal.amx._useBruceApproach)
    {
      var pageDef      = viewHistoryItem.amxPage;
      var instanceId   = viewHistoryItem.itemId;
      var removeFailed = function(req, message)
      {
        throw new Error(
          adf.mf.resource.getInfoString("AMXErrorBundle", "ERROR_MF_CONTEXT_REMOVE_FAILED",
            message));
      };
      adf.mf.api.removeContextInstance(pageDef, instanceId, function(){}, removeFailed);
    }
    else // don't use Bruce's way
    {
      adf.mf.internal.amx._nonBruceClientStateMap = null;
    }
  };

  adf.mf.internal.amx._purgeOnNav = function()
  {
    // Purge any elements that might be disconnected from the bodyPage.
    // Examples: inputDate and selectManyChoice pickers on Android.
    var elementsToPurge = document.getElementsByClassName("amx-purge-on-nav");
    for (var i=elementsToPurge.length-1; i>=0; --i)
      adf.mf.api.amx.removeDomNode(elementsToPurge[i]);
  };

  adf.mf.internal.amx._handlePageTransition = function(transitionType, isBack, currentElement, newElement, alwaysFunction)
  {
    if (adf.mf.internal.amx._pageTransitionCancelFunction != null)
      adf.mf.internal.amx._pageTransitionCancelFunction();

    // Ensure prerequisites are met:
    currentElement.style.display = "block";
    newElement.style.display = "block";
    newElement.classList.remove("new");
    newElement.classList.add("current");

    var properties = {};
    properties["parentFlipAllowed"] = true; // no other visible siblings plus parent and grandparent have equal dimensions
    properties["dimensionsFromParent"] = true;
    properties["finishedFunction"] = alwaysFunction;
    properties["callbackParams"] = [];
    properties["animationEnabled"] = true;
    properties["isRtl"] = document.documentElement.dir == "rtl";
    properties["fineLogger"] = function(message)
    {
      adf.mf.log.AMX.logp(adf.mf.log.level.FINER,
        "adf.mf.internal.amx", "_handlePageTransition", message);
    };

    if (isBack)
    {
      if (transitionType.indexOf("Start") != -1)
        transitionType = transitionType.replace(/Start/, "End");
      else if (transitionType.indexOf("End") != -1)
        transitionType = transitionType.replace(/End/, "Start");
      else if (transitionType.indexOf("Left") != -1)
        transitionType = transitionType.replace(/Left/, "Right");
      else if (transitionType.indexOf("Right") != -1)
        transitionType = transitionType.replace(/Right/, "Left");
      else if (transitionType.indexOf("Up") != -1)
        transitionType = transitionType.replace(/Up/, "Down");
      else if (transitionType.indexOf("Down") != -1)
        transitionType = transitionType.replace(/Down/, "Up");
      else if ("slide" == transitionType)
        transitionType = "slideEnd";
      else if ("flip" == transitionType)
        transitionType = "flipEnd";
    }

    adf.mf.internal.amx._pageTransitionCancelFunction =
      adf.shared.impl.animationUtils.transition( // WARNING this is impl (not a public API) and will change without notice
        transitionType,
        currentElement,
        newElement,
        properties);
  };

  /**
   * Checks and logs windows event leaks in debug mode.
   * @param callerFunctionName name of caller function to display in log
   * @private
   */
  adf.mf.internal.amx._checkForWindowsEventLeaks = function(callerFunctionName)
  {
      if ("release" != adf.mf.internal.BUILD_CONFIGURATION) // if debug mode...
      {
        // Check for window event leaks:
        var windowEventDebugString = adf.mf.api.amx.getEventDebugString(window, 200);
        if ("DOM events: \n  n/a\nSpecial events:\n  n/a" != windowEventDebugString)
        {
          adf.mf.log.logInfoResource("AMXInfoBundle",
                                      adf.mf.log.level.SEVERE,
                                      callerFunctionName,
                                      "MSG_WINDOW_EVENT_LEAKS",
                                      "\n" + windowEventDebugString);
        }
      }
  };

  /**
   * @deprecated
   */
  amx.doNavigation = function(outcome)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.WARNING, "doNavigation",
      "MSG_DEPRECATED", "amx.doNavigation", "adf.mf.api.amx.doNavigation");
    adf.mf.api.amx.doNavigation.apply(this, arguments);
  };

  adf.mf.api.amx.doNavigation = function(outcome)
  {
    // Trigger the amxnavigatestart event prior to the critical section lock
    adf.mf.internal.triggerEvent(
      document,
      "Events",
      "amxnavigatestart",
      false,
      false,
      null,
      {
        "outcome": outcome
      });

    adf.mf.internal.amx._queueCriticalSectionFunction(
      doNavigationImpl,
      this,
      false,
      outcome);
  };

  // Global value to indicate if the last navigation resulted in a different view.
  adf.mf.internal.lastNavIsDifferentView = true;

  function doNavigationImpl(outcome)
  {
    var perfOp = adf.mf.internal.perf.startMonitorOperation("Perform navigation", adf.mf.log.level.FINE, "adf.mf.api.amx.doNavigation");
    adf.mf.api.amx.showLoadingIndicator();

    var promise = new adf.mf.internal.BasePromise(function(resolve, reject)
      {
    if (!amx.containsELExpressions (outcome))
    {
      // no el expressions detected, just pass outcome as-is
          resolve(outcome);
    }
    else
    {
      var invokeCallback = function(req,res)
      {
            resolve(res);
      };
      try
      {
        // Assume that this is a method expression that returns a String.
        // Also, we do not care if it is a success or failure - any exception passed back
        // will be converted properly below via the amx.getObjectValue call.
        adf.mf.el.invoke(outcome,[],"java.lang.String",[], invokeCallback, invokeCallback);
      }
      catch(e)
      {
        // just invoke the callback
        invokeCallback(outcome, e);
      }
    }
      });

    promise.then(
      function(outcome)
      {
        var navRequest = {};
        navRequest.currentViewId = adf.mf.internal.controller.ViewHistory.peek().viewId;
        // be sure to convert from any json type structures to something
        // usable by javascript
        navRequest.outcome = amx.getObjectValue(outcome);

        var navSuccess = function(req, result)
        {
          var transitionType = result.getTransitionType();
          var amxPage = result.getVdlDocumentPath();
          var isBack = result.isBackNavigation();
          adf.mf.internal.lastNavIsDifferentView = result.isDifferentViewId();

          if (transitionType == "none")
            transitionType = null;

          // We did not find a target for navigation, so exit early. This is a valid case
          // and Faces behaves similarly. It allows developers to return "null" or an invalid
          // target and stay on the same page. If we do not exit here, the bindings will be
          // cleared and not re-initialized
          if (amxPage == null)
          {
            adf.mf.api.amx.hideLoadingIndicator();
            return;
          }

          // before attempting to navigate, make sure all popups are closed
          // NOTE: amx-popup is lazily loaded, so we must check for the existence
          // of the function before calling it
          if (adf.mf.internal.amx.closePopups)
          {
            adf.mf.internal.amx.closePopups();
          }

          // Before we strip off the IDs, call the destroy methods on any AMX nodes
            var current = document.querySelector("#bodyPageViews > .current");
            adf.mf.internal.amx.processDestroy(current);

          // Strip off any ID attributes on the old page's elements. This will prevent any issues
          // with getElementById finding elements on the old page instead of the new page.
            if (current != null)
          {
            adf.mf.internal.amx.stripIds(current);
          }

          if (adf.mf.internal.amx.isTransitionAfterRender(false)) // render before transitioning
          {
            adf.mf.api.amx.displayAmxPage(amxPage).then(
              function(page)
              {
                var perf = adf.mf.internal.perf.startMonitorCall(
                  "Transition to page", adf.mf.log.level.FINER, "adf.mf.api.amx.doNavigation:transition");

                try
                {
                  var newPage = page;

                  if (transitionType != null)
                  {
                    amx.transitioning = true;

                    // Purge any elements that might be disconnected from the bodyPage:
                    adf.mf.internal.amx._purgeOnNav();

                    adf.mf.internal.amx._handlePageTransition(
                      transitionType,
                      isBack,
                      current,
                      newPage,
                      function()
                      {
                        amx.transitioning = false;
                        adf.mf.api.amx.hideLoadingIndicator();
                          adf.mf.api.amx.removeDomNode(current);
                        adf.mf.internal.amx._pageTransitionCancelFunction = null;
                        adf.mf.internal.triggerEvent(
                          document,
                          "Events",
                          "amxnavigateend",
                          false,
                          false,
                          null,
                          {
                            "outcome": outcome,
                            "amxPage": amxPage
                          });

                        perf.stop();
                      });
                  }
                  else
                  {
                    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.WARNING,
                      "doNavigation", "MSG_NOT_TRANSITIONING");
                    amx.transitioning = true;

                    // Purge any elements that might be disconnected from the bodyPage:
                    adf.mf.internal.amx._purgeOnNav();

                    // we just show it.
                    current.classList.remove("current");
                    current.classList.add("old");
                    newPage.classList.remove("new");
                    newPage.classList.add("current");
                    adf.mf.internal.amx.processDestroy(current);
                    adf.mf.api.amx.removeDomNode(current);
                    amx.transitioning = false;
                    adf.mf.api.amx.hideLoadingIndicator();
                    adf.mf.internal.triggerEvent(
                      document,
                      "Events",
                      "amxnavigateend",
                      false,
                      false,
                      null,
                      {
                        "outcome": outcome,
                        "amxPage": amxPage
                      });
                    perf.stop();
                  }
                }
                catch (e)
                {
                  perf.stop();
                  throw e;
                }
              });
          }
          else // use placeholder transitioning
          {
            // Transition to blank immediately, don't wait for the new page to be present:
            amx.transitioning = true;

            // Purge any elements that might be disconnected from the bodyPage:
            adf.mf.internal.amx._purgeOnNav();

            amx._stillTransitioningAway = true;
            amx._stillDisplayingAmxPage = true;

            var viewContainerElement = adf.mf.internal.amx._createViewContainerElement();
            var newPage = viewContainerElement;

            if (transitionType != null)
            {
              adf.mf.internal.amx._handlePageTransition(
                transitionType,
                isBack,
                current,
                viewContainerElement,
                function()
                {
                  amx._stillTransitioningAway = false;
                  amx.transitioning = (amx._stillDisplayingAmxPage || amx._transitioningAway);
                    adf.mf.api.amx.removeDomNode(current);
                  adf.mf.internal.amx._pageTransitionCancelFunction = null;
                });
            }
            else
            {
              adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.WARNING, "doNavigation",
                "MSG_NOT_TRANSITIONING");
              amx._stillTransitioningAway = false;

              // we just show it.
              current.classList.remove("current");
              current.classList.add("old");
              newPage.classList.remove("new");
              newPage.classList.add("current");
              adf.mf.internal.amx.processDestroy(current);
              adf.mf.api.amx.removeDomNode(current);
            }

            adf.mf.api.amx.displayAmxPage(amxPage).then(
              function(page)
              {
                amx._stillDisplayingAmxPage = false;
                amx.transitioning = (amx._stillDisplayingAmxPage || amx._stillTransitioningAway);
                adf.mf.api.amx.hideLoadingIndicator();
                adf.mf.internal.triggerEvent(
                  document,
                  "Events",
                  "amxnavigateend",
                  false,
                  false,
                  null,
                  {
                    "outcome": outcome,
                    "amxPage": amxPage
                  });
              });
          }
        };

        var navFailed = function(req, message)
        {
          adf.mf.api.amx.hideLoadingIndicator();
          throw new Error(
            adf.mf.resource.getInfoString("AMXErrorBundle", "ERROR_NAVIGATION_FAILED", message));
        };

        // Give renderers a chance to save off anything they want to preserve (e.g. scroll positions):
        var current = document.querySelector("#bodyPageViews > .current");

        adf.mf.internal.amx.processPreDestroy(current);

        // if debug mode...
        // Check for window event leaks
        adf.mf.internal.amx._checkForWindowsEventLeaks("doNavigation");

        adfc.NavigationHandler.handleNavigation(navRequest, navSuccess, navFailed);

        perfOp.stop();
      },
    function()
    {
      perfOp.stop();
    });

    return promise;
  }

  /**
   * Processes all the bundles on the page
   * @private
   * @param {adf.mf.api.amx.AmxTag} amxTag the root tag of the page
   * @return {Object} promise object that is resolved once all bundles have been loaded
   */
  function loadBundles(amxTag)
  {
    return new adf.mf.internal.BasePromise(
      function(resolve, reject)
      {
        if (adf.mf.environment.profile.dtMode)
        {
          resolve();
        }
        else
        {
          // amx:loadBundle only allowed under the root tag of the page
          // or the fragment
          var bundles = amxTag.getChildren(
            adf.mf.api.amx.AmxTag.NAMESPACE_AMX,
            "loadBundle");

          var childPromises = [];
          var numBundles = bundles.length;

          if (numBundles == 0)
          {
            resolve();
          }
          else
          {
            for (var i = 0; i < numBundles; ++i)
            {
              var bundleTag = bundles[i];
              var basename = bundleTag.getAttribute("basename");
              var variable = bundleTag.getAttribute("var");

              var loadPromise = amx.loadBundle(basename, variable);
              childPromises.push(loadPromise);

              adf.mf.internal.BasePromise.all(childPromises).then(
              function()
              {
                resolve();
              },
              function()
              {
                reject.apply(null, arguments);
              });
            }
          }
        }
      });
  }

  /**
   * Load and display an AMX page.
   * @param {Object} amxPageName the name of the page to load
   * @return {Object} promise object that is resolved once the page has been rendered. Currently
   *         resolved with the DOM node for the view container element
   */
  adf.mf.api.amx.displayAmxPage = function(amxPageName) /* used by base-controller.js */
  {
    adf.mf.api.amx.showLoadingIndicator();
    var that = this;
    return new adf.mf.internal.BasePromise(function(resolve, reject)
      {
        adf.mf.internal.amx._queueCriticalSectionFunction(
          displayAmxPageImpl,
          that,
          false,
          amxPageName,
          {
            "resolve": resolve,
            "reject": reject
          });
      });
  };

  function displayAmxPageImpl(amxPageName, promiseCallbacks)
  {
    // Return a promise object that holds the critical section
    // as long as needed
    return new adf.mf.internal.BasePromise(
      function(resolve, reject)
      {
        // Start a new page off with a node waiting count of 0
        adf.mf.internal.amx._pageBusyTracker.reset();

        adf.mf.internal.amx._pageBusyTracker.startOperation(
          false,
          "Load page",
          adf.mf.log.level.INFO,
          "Time to fully render the page", amxPageName);

        // Track the time to the initial page rendering (not fully-loaded)
        var perfOp = adf.mf.internal.perf.startMonitorOperation(
          "Initial page render",
          adf.mf.log.level.FINE,
          "adf.mf.api.amx.displayAmxPage");

        adf.mf.api.addBatchDataChangeListener(adf.mf.internal.amx._handleBatchDataChangeListener);

        // Store the current page name. This is used by the fragment to resolve relative URIs
        adf.mf.internal.amx._currentPageName = amxPageName;

        // Get the page (this must be a promise because it is an AJAX call)
        var amxPageTagPromise = adf.mf.internal.amx.__getAmxTagForPage(
          adfc.Util.addFeatureRootPrefix(amxPageName), false);

        var initDataPromise = initData(amxPageName); // initializes the context

        // clear the bindings
        amx.clearBindings();

        // When amxPage, initData, and initUI resolve, we continue:
        var promises = [ amxPageTagPromise, initDataPromise, initUI() ];
        adf.mf.internal.BasePromise.all(promises).then(
          function(params)
          {
            // Load the message bundles before evaluating any EL
            var amxPageTag = params[0];
            loadBundles(amxPageTag).then(
              function()
              {
                // Build the AMX node tree once the tags have been loaded
                var buildAmxNodeTreePromise = buildAmxNodeTree(amxPageName, amxPageTag);

                // Resume any queued critical section requests, from this point
                // on we are not operating in the critical section
                resolve();

                // Wait for the EL to arrive so that we may render the page
                buildAmxNodeTreePromise.then(
                  function(amxPageNode)
                  {
                    //debugPrintAmxNodeTree(amxPageNode);

                    // We render the page
                    var perfRender = adf.mf.internal.perf.startMonitorCall("Render AMX page",
                       adf.mf.log.level.FINER, "adf.mf.api.amx.displayAmxPage:render", amxPageName);
                    var pageContentElement;

                    // set flag to prevent independent processing of the init and postDisplay queues
                    // only wait if there is some render event which enqueues the rendered node into
                    // the processing queue and process these queues after the whole render phase is complete
                    amx.mustProcessQueues = false;
                    try
                    {
                      pageContentElement = amxPageNode.render();
                    }
                    finally
                    {
                      perfRender.stop();
                    }

                    var perfAfterRender =
                      adf.mf.internal.perf.startMonitorCall(
                        "After render AMX page",
                        adf.mf.log.level.FINER,
                        "adf.mf.api.amx.displayAmxPage:afterRender",
                        amxPageName);

                    try
                    {
                      var viewContainer;

                      if (adf.mf.internal.amx.isTransitionAfterRender(isFirstPage)) // render before transitioning
                      {
                        // TODO: remove jQ code and stop using string concatination with HTML
                        viewContainer = document.createElement("div");
                        viewContainer.setAttribute("data-pageName", amxPageName);
                        viewContainer.className = "amx-view-container";
                        viewContainer.classList.add("new");

                        document.getElementById("bodyPageViews").appendChild(viewContainer);
                      }
                      else // use placeholder transitioning
                      {
                        var viewContainerElement;
                        if (isFirstPage)
                        {
                          // Since we are not doing a navigation, we have to create the element ourselves:
                          viewContainerElement = adf.mf.internal.amx._createViewContainerElement();
                        }
                        else
                        {
                          // The element was already created in the doNavigation code (where it might kick off a
                          // transition animation) so just get it and use it:
                          var viewContainerElements = document.getElementsByClassName("amx-view-container");
                          viewContainerElement = viewContainerElements[viewContainerElements.length - 1];
                        }
                        viewContainerElement.setAttribute("data-pageName", amxPageName);
                        adf.mf.api.amx.emptyHtmlElement(viewContainerElement);
                      }

                      if (pageContentElement != null)
                        viewContainer.appendChild(pageContentElement);

                      //TODO: needs to move this refresh above
                      // We process and clean the initQueue
                      amx.processAndCleanInitQueue();

                      //If it is the first page, we handler the display
                      if (isFirstPage)
                      {
                        viewContainer.classList.remove("new");
                        viewContainer.classList.add("current");
                        isFirstPage = false;
                      }

                      amx.processAndCleanPostDisplayQueue();

                      promiseCallbacks["resolve"](viewContainer);
                    }
                    finally
                    {
                      perfAfterRender.stop();
                      adf.mf.api.amx.hideLoadingIndicatorOnlyIfFirstTime();
                      perfOp.stop();
                      // reset mustProcessQueues to true
                      // every call of the rerender outside of the data change event
                      // will immediatelly trigger processing of the init and postDisplay
                      // queues
                      amx.mustProcessQueues = true;
                      // Check if the page has finished rendering
                      adf.mf.internal.amx._pageBusyTracker.checkComplete();
                    }
                  },
                  function()
                  {
                    perfOp.stop();
                    adf.mf.internal.amx._pageBusyTracker.checkComplete();
                 });
               },
               function()
               {
                 perfOp.stop();
                 adf.mf.internal.amx._pageBusyTracker.checkComplete();

                 // Reject the promise return
                 reject();
               });
          },
          function()
          {
            // TODO: print error
            adf.mf.api.amx.hideLoadingIndicator();
            perfOp.stop();

            // Reject the promise return
            reject();
          });
      });
  }

  /**
   * Function called for each time a page has been loaded. Walks the entire tag tree and
   * performs any necessary initialization.
   * @param {adf.mf.api.amx.AmxTag} rootTag the root AMX tag of the page
   * @return {Object} Promise object that is resolved once the processing has been
   *         completed.
   * @private
   */
  adf.mf.internal.amx._preProcessTagTree = function(rootTag)
  {
    var fileArray = [];

    var perf = adf.mf.internal.perf.startMonitorCall(
      "Process tag tree", adf.mf.log.level.FINER, "adf.mf.internal.amx._preProcessTagTree");
    adf.mf.internal.amx._findResourcesForTag(rootTag, fileArray);

    // Create a promise to load all the resources serially.
    var loadResourcePromise = adf.mf.internal.amx._loadFilesSequentialPromise(fileArray);

    // Hook to load additional files for the page when in automation mode. This function
    // will only exist if amx-automation.js has been loaded
    if (adf.mf.internal.amx.getAutomationResourcesForHierarchy != null)
    {
      // Save off the base promise
      var basePromise = loadResourcePromise;

      // Setup a new promise to return
      loadResourcePromise = new adf.mf.internal.BasePromise(
        function (resolve, reject)
        {
          // Wait for the base files to load
          basePromise.then(
            function()
            {
              // Now that the type handlers have loaded, load any needed automation files
              var automationFiles = adf.mf.internal.amx.getAutomationResourcesForHierarchy(rootTag);
              adf.mf.internal.amx._loadFilesSequentialPromise(automationFiles).then(
                function()
                {
                  // Resolve the promise for performance and the code waiting on the processing
                  resolve();
                });
            });

        });
    }

    return loadResourcePromise.then(
      function()
      {
        perf.stop();
      });
  };

  /**
   * Listener for the controller navigation events
   */
  function navigationListener(event)
  {
    if (event.isNavigationStart())
    {
      adf.mf.internal.amx._navigationInProgress = true;

      // Stop any critical section functions from running while a navigation is being processed
      adf.mf.internal.amx.pauseUIChanges();
    }
    else if (event.isNavigationEnd())
    {
      var navResult = event.getNavigationResult();

      if (navResult.isDifferentViewId())
      {
        var navigationId = adf.mf.internal.amx._navigationId;

        // Increment the navigationId
        adf.mf.internal.amx._navigationId = navigationId > 1000000 ? 0 : navigationId + 1;

        // Remove any queued data changes for the old view
        adf.mf.internal.amx._clearDataChangeQueue();
      }

      adf.mf.internal.amx._navigationInProgress = false;

      // Resume the critical section queue
      adf.mf.internal.amx.resumeUIChanges();
    }
  }

  // The 'adfc' window object is loaded after amx-core, so delay the addition if the listener until
  // after the page finishes loading
  document.addEventListener("showpagecomplete",
    function ()
    {
      adfc.NavigationHandler.addNavigationListener(navigationListener);
    }, false);
})();
