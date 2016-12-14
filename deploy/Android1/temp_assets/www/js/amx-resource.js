/* Copyright (c) 2011, 2016, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* ------------------- amx-resource.js ------------------ */
/* ------------------------------------------------------ */

// base-adfel.js defines all of the other namespaces
if (!window.adf) window.adf = {};
                  adf.mf              = adf.mf              || {};
                  adf.mf.api          = adf.mf.api          || {};
/** @namespace */ adf.mf.api.amx      = adf.mf.api.amx      || {};
                  adf.mf.internal     = adf.mf.internal     || {};
/** @namespace */ adf.mf.internal.amx = adf.mf.internal.amx || {};
                  adf.mf.resource     = adf.mf.resource     || {};
if (!window.amx) window.amx = {}; /* deprecated */

// --------- Config Initialization --------- //
(function()
{
  // define the names of the 2 known message bundles here
  adf.mf.resource.AMXErrorBundleName = "AMXErrorBundle";
  adf.mf.resource.AMXInfoBundleName  = "AMXInfoBundle";
})();
// --------- /Config Initialization --------- //

// --------- Utilities --------- //
(function()
{
  /**
   * Initialize the LocaleElements data for the given locale data.
   * @param {string} baseUrl the location that contains the "resource/LocaleElements_" bundles
   * @param {Array<string>} localeList the locales to attempt
   * @param {Function} callback a function to invoke with the locale name when loaded
   */
  adf.mf.internal.loadTrinidadLocaleElements = function(baseUrl, localeList, callback)
  {
    var getLocaleElementsUrl = function(locale)
    {
      return baseUrl + "/resource/LocaleElements_" + adf.mf.locale.getJavaLanguage(locale) + ".js";
    };

    var isLocaleElementsLoaded = function(locale)
    {
      var javaLanguage = adf.mf.locale.getJavaLanguage(locale);
      if (typeof window["LocaleSymbols" + "_" + javaLanguage] !== "undefined")
      {
        return true;
      }
      return false;
    };

    adf.mf.api.amx.loadJavaScriptByLocale(
      localeList,
      getLocaleElementsUrl,
      isLocaleElementsLoaded,
      callback,
      true);
  };

  function loadTrinidadMessageBundle(baseUrl, languageList, callback)
  {
    var getMessageBundleUrl = function(language)
    {
      var url = baseUrl + "/resource/MessageBundle";
      if (language.indexOf("en") == 0)
      {
        return url + ".js";
      }
      var javaLanguage = adf.mf.locale.getJavaLanguage(language);
      return url + "_" + javaLanguage + ".js";
    };

    var isMessageBundleLoaded = function(locale)
    {
      return typeof TrMessageFactory._TRANSLATIONS !== "undefined";
    };

    adf.mf.api.amx.loadJavaScriptByLocale(
      languageList,
      getMessageBundleUrl,
      isMessageBundleLoaded,
      callback,
      true);
  }

  function loadOtherMessageBundles(baseUrl, languageList)
  {
    /* first load the ADF message bundles */
    adf.mf.resource.loadADFMessageBundles(
      baseUrl,
      languageList.slice(0),
      true);

    /* now load the AMX message bundles */
    adf.mf.resource.loadMessageBundle(
      adf.mf.resource.AMXErrorBundleName,
      baseUrl,
      languageList.slice(0),
      true);
    adf.mf.resource.loadMessageBundle(
      adf.mf.resource.AMXInfoBundleName,
      baseUrl,
      languageList.slice(0),
      true);
  }

  // --------- /Private helper methods --------- //

  // --------- Public methods --------- //

  adf.mf.api.amx.loadJavaScriptByLocale = function(localeList, constructor, predicate, callback, async)
  {
    // clone the array before calling the load method since it will actually
    // modify the array as it searches
    var clonedList = [].concat(localeList);

    var loadedResolve = null;
    var loadedPromise = new adf.mf.internal.BasePromise(
      function(resolve, reject)
      {
        loadedResolve = resolve;
      });
    var wrappedCallback = function(result)
    {
      loadedResolve();
      callback(result);
    };
    adf.mf.internal.resource.loadJavaScriptByLocale(clonedList, constructor, predicate,
      wrappedCallback, async);
    return loadedPromise;
  };

  adf.mf.api.amx.loadTrinidadResources = function(baseUrl) /* used by base-controller.js */
  {
    // before doing anything, we need to register the error handler
    adf.mf.api.addErrorHandler(adf.mf.internal.amx.errorHandlerImpl);

    // Bootstrap the Trinidad locale globals
    window._df2DYS = null;

    // Return global variable _locale if it is non-null; otherwise return the browser language
    window._locale = adf.mf.locale.getUserLocale();

    var language = adf.mf.locale.getUserLanguage();

    var localeList = adf.mf.locale.generateLocaleList(_locale, true);
    var languageList = adf.mf.locale.generateLocaleList(language, false);

    adf.mf.internal.loadTrinidadLocaleElements(baseUrl, localeList,
      function(locale)
      {
        if (locale === null)
        {
          // for this low-level method, always send in the english string (do not translate)
          if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.WARNING))
          {
            adf.mf.log.Framework.logp(adf.mf.log.level.WARNING, "amx", "loadTrinidadResources",
              "MSG_FAILED_TO_LOAD_LOCALE",
              "Failed to load LocaleElements");
          }
        }
        else
        {
          // Reassign global locale (necessary since Trinidad does not fallback to en-US).
          _locale = locale;
        }
      });

    loadTrinidadMessageBundle(baseUrl, languageList, function(language)
    {
      if (language === null)
      {
        // for this low-level method, always send in the english string (do not translate)
        if(adf.mf.log.Framework.isLoggable(adf.mf.log.level.WARNING))
        {
          adf.mf.log.Framework.logp(adf.mf.log.level.WARNING, "amx", "loadTrinidadResources",
            "Failed to load MessageBundle");
        }
      }
    });

    // load any other message bundles that the js system depends on
    loadOtherMessageBundles(baseUrl, languageList);
  };
  // --------- /Public methods --------- //

  var loadedJavaScriptResources = {};
  var loadedCssResources = {};
  var loadingCssLinks = [];
  var cssLoadingCheckInterval = null;
  var cssLoadingWaitStarted = 0;
  var cssLastCheckSheetCount = 0;

  /**
   * Internal function for loading XML files
   * @param {string} resourceName the resource to load
   * @param {boolean} async whether the request should be asynchronous
   * @param {function} successCB the XML file could be parsed
   * @param {function} errorCB the XML file could not be parsed
   * @private
   */
  adf.mf.internal.amx._loadXmlFile = function(resourceName, async, successCB, errorCB)
  {
    var perfOp = adf.mf.internal.perf.startMonitorOperation("Load XML file", adf.mf.log.level.FINE, "adf.mf.internal.amx._loadXmlFile", resourceName);
    var perf = adf.mf.internal.perf.startMonitorCall("Load XML file", adf.mf.log.level.FINER, "adf.mf.internal.amx._loadXmlFile.load");

    //  Load the XML:
    adf.mf.api.resourceFile._loadFileWithAjax(
      resourceName,
      async,
      function(responseText)
      {
        perf.stop();
        if ((responseText != null) && (responseText.length > 0))
        {
          perf = adf.mf.internal.perf.startMonitorCall("Parse XML file", adf.mf.log.level.FINER, "adf.mf.internal.amx._loadXmlFile.parse");
          var isUWP = (adf.mf.internal.amx.agent["type"] === "UWP");
          var amxPage;

          // Unfortunately Edge browser has a limit of 128 characters for attribute values.
          // This causes issues with long EL statements in UWP page. So on UWP use a native
          // xml parser
          if (!adf.mf.environment.profile.mockData && isUWP)
          {
            amxPage = new Windows.Data.Xml.Dom.XmlDocument();

            var xmlLoadSettings = new Windows.Data.Xml.Dom.XmlLoadSettings();
            xmlLoadSettings.elementContentWhiteSpace = false;

            amxPage.loadXml(responseText, xmlLoadSettings);
          }
          else
          {
            var parser = new DOMParser();
            amxPage = parser.parseFromString(responseText, "text/xml");
          }
          var firstTag = null;
          var possibleFirstTag = amxPage.firstChild;
          while (firstTag == null && possibleFirstTag != null)
          {
            if (possibleFirstTag.nodeType == 1) // an element
              firstTag = possibleFirstTag;
            else
              possibleFirstTag = possibleFirstTag.nextSibling;
          }

          perf.stop();
          if (firstTag != null)
          {
            try
            {
              perf = adf.mf.internal.perf.startMonitorCall("Parse tags", adf.mf.log.level.FINER, "adf.mf.internal.amx._loadXmlFile.parseTags");
              var amxPageTag = new adf.mf.api.amx.AmxTag(null, firstTag);
              perf.stop();

              var promise = adf.mf.internal.amx._preProcessTagTree(amxPageTag);
              promise.then(
                function()
                {
                  perfOp.stop();
                  successCB(amxPageTag);
                });
            }
            catch (e)
            {
              perfOp.stop();
              errorCB(e);
            }
          }
          else
          {
            perfOp.stop();
            errorCB("No root view tag found");
          }
        }
        else
        {
          perfOp.stop();
          if (errorCB != null)
          {
            errorCB("Empty response");
          }
        }
      },
      function()
      {
        perfOp.stop();
        if (errorCB != null)
        {
          errorCB.apply(window, arguments);
        }
      });
  };

  /**
   * Function to load a JavaScript file
   * @param {string} src the URI to the JavaScript file
   * @return {Object} a promise for when the loading is complete
   */
  amx.includeJs = function(src)
  {
    var loadState = loadedJavaScriptResources[src];
    if (loadState == null) // possibilities are null, a promise, or true
    {
      // Never attempted to load this file so load it:
      var promise = new adf.mf.internal.BasePromise(function(resolve, reject)
        {
      // Use an XHR to retrieve the JavaScript. Usage of an XHR allows us to be notified
      // of when the script has been loaded, or has failed to load to be able to correctly
          // invoke the correct promise method.
      adf.mf.api.resourceFile.loadJsFile(
        src,
        true,
        function()
        {
          loadedJavaScriptResources[src] = true;
              resolve();
        },
        function()
        {
          adf.mf.api.adf.logInfoResource(
            "AMXInfoBundle",
            adf.mf.log.level.SEVERE,
            "amx.includeJs",
            "MSG_FAILED_TO_LOAD",
            src);
              reject();
        },
        null);
        });
      loadedJavaScriptResources[src] = promise;
      return promise;
    }
    else if (loadState === true) // other options are undefined and false
    {
      // File was already loaded successfully:
      return adf.mf.internal.BasePromise.resolve();
    }
    else // a promise
    {
      // File was already requested to be loaded with this promise:
      return loadState;
    }
  };

  /**
   * Function that checks for the completion of loading CSS files
   * (polls from a callback from a window interval)
   */
  function waitTillCssLoaded()
  {
    var styleSheets = document.styleSheets;
    var numStyleSheets = styleSheets.length;

    // Don't bother checking if the count has not changed from the last poll
    if (cssLastCheckSheetCount == numStyleSheets)
    {
      return;
    }
    cssLastCheckSheetCount = numStyleSheets;
    // Loop through all the nodes that we are still waiting to finish loading
    for (var i = 0; i < loadingCssLinks.length; ++i)
    {
      var obj = loadingCssLinks[i];
      var nonLoadedNode = obj["node"];

      for (var j = 0; j < numStyleSheets; ++j)
      {
        var linkNode = styleSheets[j].ownerNode;
        // See if this style sheet is for the node we are waiting to be loaded.
        if (nonLoadedNode == linkNode)
        {
          // When the style sheet appears in the styleSheets collection,
          // it has finished loading
          obj["resolve"](linkNode);

          // Remove the item from the array
          loadingCssLinks.splice(i--, 1);

          if (loadingCssLinks.length == 0)
          {
            // We are not waiting on any more nodes
            window.clearInterval(cssLoadingCheckInterval);
            cssLoadingCheckInterval = null;
            return;
          }

          break;
        }
      }
    }

    var timeWaiting = new Date().getMilliseconds() - cssLoadingWaitStarted;
    // Since the code is not notified of CSS files that failed to load, only way for a maximum
    // of 5 seconds for all CSS files to load and then throw an error
    if (timeWaiting >= 5000)
    {
      for (var index = 0, size = loadingCssLinks.length; i < size; ++i)
      {
        var obj = loadingCssLinks[index];
        // Notify the listener that the resource failed to load
        obj["reject"]();
        adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
          "amx.includeCss",
          "MSG_FAILED_TO_LOAD", obj["path"]);
      }
      loadingCssLinks = [];
      window.clearInterval(cssLoadingCheckInterval);
      cssLoadingCheckInterval = null;
    }
  };

  /**
   * Function to load a CSS file
   * @param {string} path the URI to the CSS file
   * @return {Object} promise that is resolved once the style sheet has been loaded.
   */
  amx.includeCss = function(path)
  {
    var isFinestLoggingEnabled = adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST);
    if (loadedCssResources[path])
    {
      if (isFinestLoggingEnabled)
      {
        adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
          "amx", "includeCss",
          "CSS file has already been loaded: " + path);
      }

      // Return a promise object already resolved to indicate that the source
      // has already been loaded
      return adf.mf.internal.BasePromise.resolve();
    }

    var isUWP = (adf.mf.internal.amx.agent["type"] === "UWP");

    // Currently, the only supported means in WebKit browsers to determine if a style sheet has
    // finished loading is to check for the style sheet to appear in the document.styleSheets
    // collection. There are no events that are associated with the loading, so polling this
    // collection is the only means, at the moment, to determine this information.
    //
    // We need to use a <link> tag so that the URLs in the CSS are preserved. If we were to
    // attempt to use a <style> tag and inject the content from the CSS file into the page, the
    // relative URLs would no longer work.

    if (isFinestLoggingEnabled)
    {
      adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
        "amx", "includeCss",
        "Loading CSS file : " + path);
    }
    loadedCssResources[path] = true;

    // Create a link element
    var node = document.createElement("link");
    node.setAttribute("rel", "stylesheet");
    node.setAttribute("type", "text/css");

    var perf = null;
    // Currently UWP has issues with loading resource from local directory.
    // So we have to workaround it by loading the resource as data uri
    if (isUWP && window.AdfmfCallback && AdfmfCallback.isLocalResource(path))
    {
      perf = adf.mf.internal.perf.startMonitorCall("Include CSS file", adf.mf.log.level.FINER, "amx.includeCss");

      // use callback interface from windows to get data uri from a file
      // and return the base promise
      return AdfmfCallback.setDataURIForLocalResource(node, path).then(
        function()
        {
          // href is loaded successfully add the node to DOM
          document.head.appendChild(node);

          if (isFinestLoggingEnabled)
          {
            adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
              "amx", "includeCss",
              "Successfully loaded CSS file: " + path);
          }
          perf.stop();
        },
        function()
        {
          // append the node with the invalid href
          node.setAttribute("href", path);
          document.head.appendChild(node);

          adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
          "amx.includeCss",
          "MSG_FAILED_TO_LOAD", path);

          perf.stop();
        });
    }
    else
    {
      node.setAttribute("href", path);
      document.head.appendChild(node);
    }

    return new adf.mf.internal.BasePromise(
      function(resolve, reject)
      {
        // Store an object with the promise object to be able to notify when loaded,
        // and the node to check to see when the loading has completed.
        loadingCssLinks.push(
          {
            "path": path,
            "node": node,
            "resolve": resolve,
            "reject": reject
          });

        // See if a timer has already been started, if not start one to poll the document.styleSheets
        // collection
        if (cssLoadingCheckInterval == null)
        {
          // Use a 10ms timeout. These resources are local to the device, so it should not take long
          // for them to be loaded.
          cssLoadingCheckInterval = window.setInterval(waitTillCssLoaded, 10);
        }

        // Set or reset when we started to wait for the CSS to load. This leaves a maximum wait time
        // of 5 seconds from the last CSS file added.
        cssLoadingWaitStarted = new Date().getMilliseconds();

        // Return the promise object so that the caller may be notified once the CSS file has been
        // completely loaded
        var perf = adf.mf.internal.perf.startMonitorCall("Include CSS file", adf.mf.log.level.FINER, "amx.includeCss");
      })
      .then(
        function()
        {
          if (isFinestLoggingEnabled)
          {
            adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
              "amx", "includeCss",
              "Successfully loaded CSS file: " + path);
          }

          if (perf != null)
            perf.stop();
        });
  };

  // pageStructAndDef data by pageName
  var resourcesData = null;

  // Load the resources.json file that contains the mapping of the resources
  // needed for AMX nodes:
  var resourcesDataPromise = new adf.mf.internal.BasePromise(function(resolve, reject)
    {
      adf.mf.api.resourceFile.loadJsonFile(
        adf.wwwPath + "js/amx-resources.json",
        true,
        function(data)
        {
          resourcesData = data;
          resolve();
        },
        function()
        {
          // TODO this needs to be promoted to a formal error; do not use amx.log
          amx.log.error("Unable to load the resources JSON file.");
          reject();
        });
    });

  adf.mf.internal.amx._resourcesDataPromise = resourcesDataPromise;

  /**
   * Internal function for loading the JS files from the profile in series.
   * @param {Array.<string>} listOfFiles the list of files to load
   * @return {adf.mf.internal.BasePromise} a promise that will resolve when all Files are loaded
   */
  var loadFilesSequentialPromise = function(listOfFiles)
  {
    var promise = new adf.mf.internal.BasePromise(
      function(resolve, reject)
      {
        // Load the JS resources serially since the order is required due to dependencies:
        if (listOfFiles == null)
        {
          resolve(); // no JS files to load
        }
        else // load all of the files
        {
          _resourceLoadNextResource(resolve, listOfFiles, 0, listOfFiles.length);
        }
      });
    return promise;
  };

  adf.mf.internal.amx._loadFilesSequentialPromise = loadFilesSequentialPromise;

  var _resourceLoadNextResource = function(entrireListLoadedResolve, listOfFiles, listIndex, fileCount)
  {
    if (listIndex == fileCount)
    {
      // All jsResource files have been loaded
      entrireListLoadedResolve();
    }
    else // load the next file in the list
    {
      var theResource = listOfFiles[listIndex];
      var nextIndex = listIndex+1;
      var loadState = loadedJavaScriptResources[theResource];
      if (loadState == null) // possibilities are null, a promise, or true
      {
        // No attempt has been made yet to load this file:
        var loadedArrayResolve = null;
        var loadedArrayReject = null;
        loadedJavaScriptResources[theResource] =
          new adf.mf.internal.BasePromise(function(resolve, reject)
            {
              loadedArrayResolve = resolve;
              loadedArrayReject = reject;
            });
        adf.mf.api.resourceFile.loadJsFile(
          theResource,
          true,
          function()
          {
            loadedArrayResolve(theResource);
            loadedJavaScriptResources[theResource] = true;
            _resourceLoadNextResource(entrireListLoadedResolve, listOfFiles, nextIndex, fileCount);
          },
          function(failure)
          {
            loadedArrayReject(failure);
            loadedJavaScriptResources[theResource] = true;
            _resourceLoadNextResource(entrireListLoadedResolve, listOfFiles, nextIndex, fileCount);
          },
          null);
      }
      else if (loadState == true)
      {
        // This file was already loaded so move onto the next file
        _resourceLoadNextResource(entrireListLoadedResolve, listOfFiles, nextIndex, fileCount);
      }
      else
      {
        // Someone has already made a request for it so we need to wait on its promise
        // before we move onto the next file:
        loadState.then(
          function()
          {
            _resourceLoadNextResource(entrireListLoadedResolve, listOfFiles, nextIndex, fileCount);
          });
      }
    }
  };

  /**
   * Called from findResourcesForTag to find all the resources for a given namespace object and tag name.
   * @param {Object} nsObj resources object for a namespace from the JSON object.
   * @param {string} tagName the local AMX node name or "*" for resources global to the namespace.
   * @param {Array.<string>} fileList Array where a list of files to load will be added
   */
  function findTagNsResources(nsObj, tagName, fileList)
  {
    var tagObj = nsObj[tagName];
    if (tagObj == null)
    {
      return;
    }
    var js = tagObj["js"];
    var index, size;
    if (js != null)
    {
      // Load any required javascript files:
      if (Array.isArray(js))
      {
        for (index = 0, size = js.length; index < size; ++index)
        {
          var theResource = js[index];
          if (loadedJavaScriptResources[theResource] !== true && // if undefined or a promise, then push
            fileList.indexOf(theResource) == -1) // prevent repeats
          {
            fileList.push(theResource);
          }
        }
      }
      else
      {
        if (loadedJavaScriptResources[js] !== true) // if undefined or a promise, then push
        {
          if (fileList.indexOf(js) == -1) // prevent repeats
            fileList.push(js);
        }
      }
    }
  }

  /**
   * Function to load any JavaScript or CSS file dependencies for an AMX tag.
   * @param {adf.mf.api.amx.AmxTag} tag the AMX tag.
   * @param {Array.<string>} fileList of resource to be loaded to allow the calling function to
   *                determine when all the resources have been loaded.
   */
  function findResourcesForTag(tag, fileList)
  {
    // The first level of objects are keyed by the namespace URI of the XML node:
    var ns = tag.getNamespace();
    var nsObj = resourcesData[ns];
    if (nsObj != null)
    {
      // Load any resources for all tags in this namespace:
      findTagNsResources(nsObj, "*", fileList);

      // Second level are keyed by the tag's local name:
      findTagNsResources(nsObj, tag.getName(), fileList);
    }

    // Process all the children tags
    var children = tag.getChildren();
    for (var index = 0, size = children.length; index < size; ++index)
    {
      var childTag = children[index];
      findResourcesForTag(childTag, fileList);
    }
  }

  adf.mf.internal.amx._findResourcesForTag = findResourcesForTag;
}) ();
//--------- /Utilities --------- //
