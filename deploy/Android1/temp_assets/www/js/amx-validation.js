/* Copyright (c) 2011, 2015, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* ------------------- amx-validation.js ---------------------- */
/* ------------------------------------------------------ */

// ------ amx validations ------ //
(function()
{
  var ERROR_UPPER_STR = "ERROR";
  var WARNING_UPPER_STR = "WARNING";

  var INFO_STR = "info";
  var CONFIRMATION_STR = "confirmation";
  var WARNING_STR = "warning";
  var ERROR_STR = "error";
  var FATAL_STR = "fatal";

  // initialize display strings with fallback values - too early to load from resource bundle
  var INFO_DISPLAY_STR = "Info";
  var CONFIRMATION_DISPLAY_STR = "Confirmation";
  var WARNING_DISPLAY_STR = "Warning";
  var ERROR_DISPLAY_STR = "Error";
  var FATAL_DISPLAY_STR = "Fatal";

  var INFO_VAL = 4;
  var CONFIRMATION_VAL = 3;
  var WARNING_VAL = 2;
  var ERROR_VAL = 1;
  var FATAL_VAL = 0;

  // these maps are used to convert to and from severity string/int values
  var __severityStringToInt = {};
  __severityStringToInt[INFO_STR] = INFO_VAL;
  __severityStringToInt[CONFIRMATION_STR] = CONFIRMATION_VAL;
  __severityStringToInt[WARNING_STR] = WARNING_VAL;
  __severityStringToInt[ERROR_STR] = ERROR_VAL;
  __severityStringToInt[FATAL_STR] = FATAL_VAL;

  var __severityIntToDisplayString = {};
  __severityIntToDisplayString[INFO_VAL] = INFO_DISPLAY_STR;
  __severityIntToDisplayString[CONFIRMATION_VAL] = CONFIRMATION_DISPLAY_STR;
  __severityIntToDisplayString[WARNING_VAL] = WARNING_DISPLAY_STR;
  __severityIntToDisplayString[ERROR_VAL] = ERROR_DISPLAY_STR;
  __severityIntToDisplayString[FATAL_VAL] = FATAL_DISPLAY_STR;

  // This map is used to provide the associated resource bundle key. These ADFInfoBundle keys
  // are special cased in getResourceStringImpl(), and will always return a displayable value.
  var __severityDisplayStringBundleKey = {};
  __severityDisplayStringBundleKey[INFO_DISPLAY_STR] = "LBL_INFO_DISPLAY_STR";
  __severityDisplayStringBundleKey[CONFIRMATION_DISPLAY_STR] = "LBL_CONFIRMATION_DISPLAY_STR";
  __severityDisplayStringBundleKey[WARNING_DISPLAY_STR] = "LBL_WARNING_DISPLAY_STR";
  __severityDisplayStringBundleKey[ERROR_DISPLAY_STR] = "LBL_ERROR_DISPLAY_STR";
  __severityDisplayStringBundleKey[FATAL_DISPLAY_STR] = "LBL_FATAL_DISPLAY_STR";

  amx.validationsUnsetListEl = adf.mf.internal.el.parser.parse("#{validationScope.unsetList}");
  amx.validationsInvalidListEl = adf.mf.internal.el.parser.parse("#{validationScope.invalidList}");

  // this keeps track of the groups that have been validated
  // so that we know if we should be showing the required failures
  // or not
  var __validatedGroups = {};

  // this keeps track of whether or not we are currently validating group[s]
  var __isValidating = false;

  var validationExName = "oracle.adfmf.framework.exception.ValidationException";
  var batchValidationExName = "oracle.adfmf.framework.exception.BatchValidationException";

  adf.mf.api.amx.TypeHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX, "validationGroup").prototype.render = function(amxNode)
  {
    var rootElement = document.createElement("div");
    var descendants = amxNode.renderDescendants();
    for (var i=0, size=descendants.length; i<size; ++i)
    {
      rootElement.appendChild(descendants[i]);
    }
    return rootElement;
  };

  // data change handler for when the validationList changes
  function validationsDataChangeHandler(el)
  {
    updateValidationMessages();
  }

  /**
   * This method will go through all of the items in validationData and extract
   * the current validation exceptions for the group id and add them to the
   * error message box.
   * @param validationData the data that contains all of the validation info
   * @param groupId the current group id
  */
  function updateValidationMessagesByGroupId(validationData, groupId)
  {
      var groupValidationData = validationData[groupId];
      if (groupValidationData === undefined)
      {
        return;
      }

      var groupInvalid = groupValidationData.invalid;
      for (item in groupInvalid)
      {
        var arrayList = groupInvalid[item];
        for(var index in arrayList)
        {
          var nvp = arrayList[index];
          adf.mf.api.amx.addMessage(nvp.name.toLowerCase(), nvp.value, null, null);
        }
      }

      // check for required failures
      var groupRequired = groupValidationData.required;
      for (item in groupRequired)
      {
        var text = groupRequired[item];
        adf.mf.api.amx.addMessage(ERROR_STR, text, null, null);
      }
  }

  /**
   * This method builds up the validation data given an array
   * of group ids to check. If any validation errors are present,
   * then they will be added to the error message box
   * @param groupsToCheck  the array of groups to check for validation errors
  */
  function updateValidationMessages(groupsToCheck)
  {
    if (amx.isValidating())
    {
      return;
    }

    // get all of the groups and all of the messages
    var validationGroupElements = document.getElementsByClassName("amx-validationGroup");

    if (validationGroupElements.length == 0)
    {
      // do nothing
      return;
    }

    var always =
      function(validationData)
      {
        // now show the message box
        if (groupsToCheck !== undefined && groupsToCheck != null && groupsToCheck.length > 0)
        {
          for (var i = 0; i < groupsToCheck.length; ++i)
          {
            var groupId = groupsToCheck[i];

            var groupValidationData = validationData[groupId];
            if (groupValidationData === undefined)
            {
              // no validation data present
              continue;
            }

            updateValidationMessagesByGroupId(validationData, groupId);
          }
        }
      };
    amx.buildValidationData(validationGroupElements).then(always, always);
  }

  function getCurrentPageGroup(id)
  {
    var thisPage = adf.mf.internal.controller.ViewHistory.peek().viewId;
    if (__validatedGroups[thisPage] === undefined)
    {
      __validatedGroups[thisPage] = {};
    }

    return __validatedGroups[thisPage];
  }

  function setGroupValidated(id)
  {
    var pageGroups = getCurrentPageGroup(id);
    pageGroups[id] = true;
  }

  function isGroupValidated(id)
  {
    var pageGroups = getCurrentPageGroup(id);
    return pageGroups[id] === true;
  }


  // detect if the xmlNode is rendered, visible, and shown on the screen
  amx.isNodeRendered = function(amxNode)
  {
    if (!amxNode.isReadyToRender())
    {
      return false;
    }

    // TODO: this has no place in a global function:
    if (amxNode.getTag().getNsPrefixedName() == adf.mf.api.amx.AmxTag.NAMESPACE_AMX+":popup")
    {
      if (amxNode.getAttribute("_renderPopup"))
      {
        return true;
      }

      return false;
    }

    var attr = amxNode.getAttribute("visible");
    if(typeof attr !== "undefined")
    {
      if(adf.mf.api.amx.isValueFalse(attr))
      {
        return false;
      }
    }

    return true;
  };

  function setValidationWatchData(groupId, amxNode, watchData, addRequired)
  {
    var attributeValue = amxNode.__getAttributeToValidate();
    if (attributeValue == null)
    {
      return;
    }

    var attributeValueEl = amxNode.getAttributeExpression(attributeValue, true);

    if (amx.containsELExpressions(attributeValueEl))
    {
      if (watchData.el[attributeValueEl] === undefined)
      {
        watchData.el[attributeValueEl] = [];
      }

      if(watchData.el[attributeValueEl].indexOf(groupId) < 0)
      {
        watchData.el[attributeValueEl].push(groupId);
      }
    }

    // now check to see if this is required
    if (adf.mf.api.amx.isValueTrue(amxNode.getAttribute("required")) == false)
    {
      return;
    }

    var nodeValue = amxNode.getAttribute(attributeValue);
    // if the returned value is an array, then we will validate the length
    if (Array.isArray(nodeValue))
    {
      if (nodeValue.length > 0)
      {
        return;
      }
    }
    else if (amx.getTextValue(nodeValue) !== "")
    {
      return;
    }

    if (addRequired == false)
    {
      // this group has not been validated yet, so disregard
      return;
    }

    var tag = amxNode.getTag();
    var key;
    var nsPrefixedName = tag.getNsPrefixedName();
    if (nsPrefixedName == adf.mf.api.amx.AmxTag.NAMESPACE_AMX+":selectOneChoice" ||
        nsPrefixedName == adf.mf.api.amx.AmxTag.NAMESPACE_AMX+":selectManyChoice")
    {
      key = "MSG_MAKE_A_SELECTION";
    }
    else
    {
      key = "MSG_ENTER_A_VALUE";
    }

    var msg = adf.mf.resource.getInfoString("AMXInfoBundle", key);
    var label = amxNode.getAttribute("label");
    if (label == null)
    {
      label = "";
    }
    var text = label + ": " + msg;

    if (watchData.required[groupId] === undefined)
    {
      watchData.required[groupId] = [];
    }

    watchData.required[groupId].push(text);
  }

  // add to the passed in list an el expressions that this node
  // and this node's descendants are watching
  function buildValidationWatchData(groupId, domElement, watchData, addRequired)
  {
    return new adf.mf.internal.BasePromise(function(resolve, reject)
      {
        var childNodes = domElement.childNodes;

        if (childNodes && childNodes.length > 0)
        {
          var childPromiseArray = [];
          // for each node
          for (var i = 0; i < childNodes.length; ++i)
          {
            var childNode = childNodes[i];

            // only check for node info if this is an amx-node
            // if not, just assume this is a container for actual amx-nodes
            if (childNode.nodeType == 1/*ELEMENT_NODE*/ && childNode.classList.contains("amx-node"))
            {
              var amxNode = adf.mf.internal.amx._getNonPrimitiveElementData(childNode, "amxNode");
              if (amxNode === undefined)
              {
                continue;
              }

              if (amx.isNodeRendered(amxNode) == false)
              {
                continue;
              }

              setValidationWatchData(groupId, amxNode, watchData, addRequired);
            }

            var childPromise = buildValidationWatchData(groupId, childNode, watchData, addRequired);
            childPromiseArray.push(childPromise);
          }
          adf.mf.internal.BasePromise.all(childPromiseArray).then(
            function()
            {
              resolve();
            });
        }
        else
        {
          resolve();
        }
      });
  }

  // build a list of all the el expressions that this group/array of groups are watching
  function buildValidationGroupWatchData(groupElements, isValidating)
  {
    return new adf.mf.internal.BasePromise(function(resolve, reject)
      {
        var arrayOfPromises = [];
        var watchData = {
          el: {},
          required: {}
        };

        for (var i = 0; i < groupElements.length; ++i)
        {
          var groupElement = groupElements[i];
          if (groupElement.length != null)
          {
            groupElement = groupElement[0];
          }
          var addRequired;
          var id = adf.mf.internal.amx._getNonPrimitiveElementData(groupElement, "amxNode").getId();
          if (isValidating == true)
          {
            // add this to the list so that buildElWatchArray will return any required
            // failures for this group
            setGroupValidated(id);
            addRequired = true;
          }
          else
          {
            addRequired = isGroupValidated(id);
          }

          arrayOfPromises.push(buildValidationWatchData(id, groupElement, watchData, addRequired));
        }

        adf.mf.internal.BasePromise.all(arrayOfPromises).then(
          function()
          {
            resolve(watchData);
          });
      });
  }

  function getValidationDataForGroup(validationData, groupId, watchData)
  {
    if (validationData[groupId] === undefined)
    {
      validationData[groupId] = {
        invalid: [],
        required: []
      };
    }

    return validationData[groupId];
  }

  function buildValidationDataInternal(groupElements, isValidating, validationWatchData)
  {
    return new adf.mf.internal.BasePromise(function(resolve, reject)
      {
        if (groupElements.length == 0)
        {
          // nothing to do here, so just resolve it
          resolve();
          return;
        }
        amx.getElValue(amx.validationsInvalidListEl).then(
          function(requestAndResponse)
          {
            var response = requestAndResponse[1];
            var invalidList = response[0].value;
            var elWatchPromise =
              new adf.mf.internal.BasePromise(
                function(elWatchPromiseResolve, elWatchPromiseReject)
                {
                  if (validationWatchData == null)
                  {
                    var always = function(watchData)
                      {
                        validationWatchData = watchData;
                        elWatchPromiseResolve();
                      };
                    buildValidationGroupWatchData(groupElements, isValidating).then(always, always);
                  }
                  else
                  {
                    elWatchPromiseResolve();
                  }
                });

            var elWatchPromiseAlways = function()
            {
              var hasError = false;
              var hasWarning = false;
              var validationData = {};

              for(var item in validationWatchData.required)
              {
                if(validationWatchData.required.hasOwnProperty(item))
                {
                  hasError = true;

                  var groupValidationData = getValidationDataForGroup(validationData, item, validationWatchData);
                  // add all of these to the required list
                  groupValidationData.required = validationWatchData.required[item];
                }
              }

              // iterate through the invalid el expressions and determine if
              // the expression is in the list of el expressions that are
              // defined in descendants of the validationGroup tag
              for(var item in invalidList)
              {
                if(invalidList.hasOwnProperty(item))
                {
                  var elInfo = validationWatchData.el[item];
                  if(elInfo === undefined)
                  {
                    // not in the list
                    continue;
                  }

                  var arrayList = invalidList[item];
                  if (hasError == false)
                  {
                    for(var index in arrayList)
                    {
                      var nvp = arrayList[index];
                      if (nvp.name == ERROR_UPPER_STR)
                      {
                        hasError = true;
                        break;
                      }

                      if (nvp.name == WARNING_UPPER_STR)
                      {
                        hasWarning = true;
                      }
                    }
                  }

                  for (var group in elInfo)
                  {
                    var groupId = elInfo[group];
                    var groupValidationData = getValidationDataForGroup(validationData, groupId, validationWatchData);
                    groupValidationData.invalid.push(arrayList);
                  }
                }
              }

              if (hasError)
              {
                // let the caller know that navigation should fail
                reject(validationData);
                return;
              }

              // succeeded, but with possible warnings, so send in the data array
              resolve(validationData);
            };

            elWatchPromise.then(elWatchPromiseAlways, elWatchPromiseAlways);
          },
          function(requestAndResponse)
          {
            // failed to retrieve the invalid list - allow navigation to proceed
            resolve();
          });
      });
  }

  amx.buildValidationData = function(elementArray)
  {
    return buildValidationDataInternal(elementArray, false, null);
  };

  function getGroupsById(domElement)
  {
    var popupElement = _getClosestAncestorByClassName(domElement, "amx-popup");
    var validationGroupElements;
    if (popupElement != null)
    {
      // we are inside a popup, so we need to get a list of all of the groups in this popup
      validationGroupElements = popupElement.getElementsByClassName("amx-validationGroup");
    }
    else
    {
      validationGroupElements = document.getElementsByClassName("amx-validationGroup");
    }

    var groupsById = {};
    for (var i = 0; i < validationGroupElements.length; ++i)
    {
      var groupElement = validationGroupElements[i];
      var amxNode = adf.mf.internal.amx._getNonPrimitiveElementData(groupElement, "amxNode");
      var id = amxNode.getId();
      groupsById[id] = groupElement;
    }

    return groupsById;
  }

  // get the list of all of the groups that this control validates against
  function getValidationGroupList(domElement)
  {
    return new adf.mf.internal.BasePromise(function(resolve, reject)
      {
        var amxNode = adf.mf.internal.amx._getNonPrimitiveElementData(domElement, "amxNode");
        if (amxNode == null && adf.mf.environment.profile.mockData)
        {
          // Hosted CompGallery will experience this when changing row selection (e.g. listItemStyles.amx)
          resolve([]);
          return;
        }
        var tag = amxNode.getTag();
        var children = tag.getChildren(adf.mf.api.amx.AmxTag.NAMESPACE_AMX, "validationBehavior");
        var len = children.length;
        var groups = [];

        if (len > 0)
        {
          var groupIdArray = [];
          var propPromises = [];

          for (var i = 0; i < len; ++i)
          {
            var subTag = children[i];

            var disabledEl = subTag.getAttribute("disabled");
            if (disabledEl != null)
            {
              var propPromise = new adf.mf.internal.BasePromise(
                function(propPromiseResolve, propPromiseReject)
                {
                  amx.getElValue(disabledEl)
                    .then(
                      function(requestAndResponse)
                      {
                        var response = requestAndResponse[1];
                        var resp = response[0];
                        if (adf.mf.api.amx.isValueTrue(resp.value))
                        {
                          propPromiseResolve();
                          return;
                        }
                        var groupId = subTag.getAttribute("group");
                        if (groupIdArray.indexOf(groupId) < 0)
                        {
                          groupIdArray.push(groupId);
                        }
                        propPromiseResolve();
                      },
                      propPromiseResolve);
                  });

              propPromises.push(propPromise);
            }
            else
            {
              var groupId = subTag.getAttribute("group");
              if (groupIdArray.indexOf(groupId) < 0)
              {
                groupIdArray.push(groupId);
              }
            }
          }

          adf.mf.internal.BasePromise.all(propPromises).then(
            function()
            {
              var groupsById = getGroupsById(domElement);
              for (var i = 0; i < groupIdArray.length; ++i)
              {
                var group = groupsById[groupIdArray[i]];
                if (typeof group !== "undefined")
                {
                  groups.push(group);
                }
              }

              resolve(groups);
            });
        }
        else
        {
          resolve(groups);
        }
      }, true /* needed for jQuery-like callbacks without timeouts */);
  }

  amx.requiredControlValueChanged = function(validationGroup)
  {
    if (amx.isValidating())
    {
      return;
    }

    // mark this group as validated
    var amxNode = adf.mf.internal.amx._getNonPrimitiveElementData(validationGroup, "amxNode");
    if (amxNode)
    {
      setGroupValidated(amxNode.getId());
      updateValidationMessages();
    }
  };

  function validateBegin()
  {
    __isValidating = true;
  }

  function validateEnd(groupElements, validationData)
  {
    __isValidating = false;

    if (groupElements === undefined || groupElements.length == 0)
    {
      // no groups were validated, exit early
      return;
    }

    var groupsToCheck = [];

    if (validationData !== undefined)
    {
      // if the validationData is not undefined, then there was a failure
      // go through and create a list of the groups that may need a message box
      for (groupId in validationData)
      {
        if(validationData.hasOwnProperty(groupId) == false)
        {
          continue;
        }

        groupsToCheck.push(groupId);
      }
    }

    updateValidationMessages(groupsToCheck);
  }

  amx.isValidating = function()
  {
    return __isValidating;
  };

  function validateInternal(domElement)
  {
    return new adf.mf.internal.BasePromise(function(resolve, reject)
      {
        var always =
          function(groupElements)
          {
            // we now have the list of groups that we need to validate, so go
            // through them all and verify every el expressions is in the valid state
            if (groupElements.length == 0)
            {
              // everything is valid since there are no groups
              resolve(groupElements);
              return;
            }

            // make sure all of the unset values are validated
            amx.getElValue(amx.validationsUnsetListEl).then(
              function(requestAndResponse)
              {
                var response = requestAndResponse[1];
                var unsetList = response[0].value;
                // set this to null so that we only build up the node list when we want to
                // figure out if an item is valid or not
                var validationWatchData = null;
                var elToResolve = [];
                var unsetPromise =
                  new adf.mf.internal.BasePromise(
                    function(unsetPromiseResolve, unsetPromiseReject)
                    {
                      if (unsetList.length > 0)
                      {
                        buildValidationGroupWatchData(groupElements, true).then(function(watchData)
                        {
                          validationWatchData = watchData;
                          for (var i = 0; i < unsetList.length; ++i)
                          {
                            var item = unsetList[i];
                            if(validationWatchData.el[item] === undefined)
                            {
                              // not in the list
                              continue;
                            }

                            elToResolve.push(item);
                          }

                          if (elToResolve.length > 0)
                          {
                            amx.getElValue(elToResolve).then(
                              function(requestAndResponse)
                              {
                                var response = requestAndResponse[1];
                                // all the el expressions are resolved, so create an
                                // array of values to set
                                var setList = [];
                                // we might have more responses than just our requests, so make sure we handle that here
                                for (var i = 0; i < response.length; ++i)
                                {
                                  var item = response[i];
                                  if (elToResolve.indexOf(item.name) < 0)
                                  {
                                    // not part of what we requested
                                    continue;
                                  }

                                  setList.push({name:item.name, value:amx.getObjectValue(item.value)});
                                }
                                amx.setElValue(setList).then(
                                  function(requestAndResponse)
                                  {
                                    // success (but with possible failures), just continue
                                    // and check the invalid list later
                                    unsetPromiseResolve();
                                  },
                                  function(requestAndResponse)
                                  {
                                    // failure, just continue and check the invalid list later
                                    unsetPromiseResolve();
                                  });
                              },
                              function(requestAndResponse)
                              {
                                // failure, just continue and check the invalid list later
                                unsetPromiseResolve();
                              });
                          }
                          else
                          {
                            unsetPromiseResolve();
                          }
                        },
                        function()
                        {
                          unsetPromiseResolve();
                        });
                      }
                      else
                      {
                        unsetPromiseResolve();
                      }
                    });

                unsetPromise.then(
                  function()
                  {
                    buildValidationDataInternal(groupElements, true, validationWatchData).then(
                      function(validationData)
                      {
                        // we can navigate (may have warnings)
                        resolve([groupElements, validationData]);
                      },
                      function(validationData)
                      {
                        // we can NOT navigate
                        reject([groupElements, validationData]);
                      });
                  });
              },
              function(requestAndResponse)
              {
                // failed to retrieve the unset list - allow navigation to proceed
                resolve(groupElements);
              });
          };
        getValidationGroupList(domElement).then(always, always);
      }, true /* needed for jQuery-like callbacks without timeouts */);
  }

  /**
   * Use this when performing an operation like a navigation where you would want to prevent navigating
   * when there are unsatisfied validators (required or AMX validationBehavior).
   * The successCallback will be invoked if allowed to proceed.
   * @param {DOMNode} domNode the element whose associated validation is to be tested
   * @param {function} successCallback the function to invoke if the event should be accepted
   */
  adf.mf.api.amx.validate = function(domNode, successCallback)
  {
    amx.validate(domNode).then(function()
    {
      if (successCallback && adf.mf.api.amx.acceptEvent())
      {
        successCallback();
      }
    });
  };

  /**
   * Private, internal function.
   */
  amx.validate = function(domElement)
  {
    var perf = adf.mf.internal.perf.startMonitorCall("Validate node", adf.mf.log.level.FINER, "amx.validate");

    return new adf.mf.internal.BasePromise(function(resolve, reject)
      {
        validateBegin();
        validateInternal(domElement)
          .then(
            function(groupElementsAndValidationData)
            {
              var groupElements = groupElementsAndValidationData[0];
              validateEnd(groupElements);
              perf.stop();
              resolve();
            },
            function(groupElementsAndValidationData)
            {
              var groupElements = groupElementsAndValidationData[0];
              var validationData = groupElementsAndValidationData[1];
              validateEnd(groupElements, validationData);
              perf.stop();
              reject();
            });
      }, true /* needed for jQuery-like callbacks without timeouts */);
  };

  // register the data change handler
  adf.mf.api.addDataChangeListeners(amx.validationsInvalidListEl, validationsDataChangeHandler);

  //--------- ErrorHandler ---------//
  // taken from Trinidad.Core.js
  /**
   * Return true if the object or any of its prototypes'
   * are an instance of the specified object type.
   * @param {Object} obj the object instance
   * @param {Object} type the constructor function
   */
  function _instanceof(obj, type)
  {
    if (type == (void 0))
      return false;

    if (obj == (void 0))
      return false;

    while (typeof(obj) == "object")
    {
      if (obj.constructor == type)
        return true;

      // walk up the prototype hierarchy
      obj = obj.prototype;
    }

    return false;
  }

  /**
   * The is the home for all error handling. This gets registered as an error handler
   * in adf.mf.api.amx.loadTrinidadResources (amx-resource.js) and will extract the
   * relevant error information and call adf.mf.api.amx.addMessage
   *
   * @param request the channel request, can be null if this is called manually
   * @param response a JS Error instance, a TrConverterException or TrValidatorException instance,
   *                 or an exception in JSON form
  */
  adf.mf.internal.amx.errorHandlerImpl = function(request, response)
  {
    // detect if this is a known Trinidad error class
    if (_instanceof(response, window["TrConverterException"]) || _instanceof(response, window["TrValidatorException"]))
    {
      var facesMsg = response.getFacesMessage();
      var severity = facesMsg.getSeverity();
      var severityStr = ERROR_STR;
      if (severity == TrFacesMessage.SEVERITY_INFO)
      {
        severityStr = "info";
      }
      else if (severity == TrFacesMessage.SEVERITY_WARN)
      {
        severityStr = "warning";
      }
      else if (severity == TrFacesMessage.SEVERITY_ERROR)
      {
        severityStr = ERROR_STR;
      }
      else // if (severity == TrFacesMessage.SEVERITY_FATAL)
      {
        severityStr = "fatal";
      }
      adf.mf.api.amx.addMessage(severityStr, facesMsg.getDetail(), null, null);
      return;
    }

    // detect if this is a known js error class
    if (_instanceof(response, Error))
    {
      adf.mf.api.amx.addMessage(ERROR_STR, response.message, null, null);
      return;
    }

    // assume this is an exception from the channel
    var exceptionClassName = response[adf.mf.internal.api.constants.TYPE_PROPERTY];
    var isBatchValidation = (exceptionClassName == batchValidationExName);
    // check to see if we are in the process of validating all of the
    // el expressions contained in this group. We will go back and add
    // of the validation messages from the validationContext, so don't
    // add any that fire right now
    if (amx.isValidating())
    {
      if (isBatchValidation || exceptionClassName == validationExName)
      {
        return;
      }
    }

    if (isBatchValidation)
    {
      // loop through the the batch exceptions and add them one by one
      var batch = response.batch;
      if (batch !== undefined && batch != null)
      {
        for (var i = 0; i < batch.length; ++i)
        {
          addMessageFromException(batch[i]);
        }
      }
      return;
    }

    addMessageFromException(response);
  };

  function addMessageFromException(ex)
  {
    if (ex.exception)
      ex = ex.exception;
    var msg = ex.message;
    var severity = ex.severity;
    if (severity === undefined)
      severity = "fatal";
    adf.mf.api.amx.addMessage(severity == null ? "severe" : severity.toLowerCase(), msg, null, null);
  }

  /**
   * Adds a message to the message box (and shows it if it isn't already showing.
   * @param {string} severity the severity of the message (e.g. "fatal", "error", "warning", "confirmation", "info")
   * @param {string} summary the short title of the message (e.g. exception message)
   * @param {string} detail null or the optional long detail of the message (e.g. stack trace)
   * @param {string} clientId null or the optional client ID that uniquely identify which component instance the message should be associated with
   */
  adf.mf.api.amx.addMessage = function(severity, summary, detail, componentClientId)
  {
    messageBoxCreate().addItem(severity, summary, detail);
  };

  function severityStringToInt(severity)
  {
    var val = __severityStringToInt[severity];
    if (val == null)
    {
      val = ERROR_VAL;
    }

    return val;
  }

  function severityIntToDisplayString(severity)
  {
    var val = __severityIntToDisplayString[severity];
    if (val == null)
    {
      val = ERROR_DISPLAY_STR;
    }

    return val;
  }

  //--------- ErrorHandler ---------//

  /**
   * Get the child elements that have the specified class names.
   * @param {HTMLElement} parentElement the element whose children will be traversed
   * @param {Array.<String>} classNames the class names to search for
   * @param {boolean} searchInChildOrder whether to start looking at the first child then second, etc.
   * @return {Array} an array of found elements whose entries match the specified classNames order
   */
  function _getChildrenByClassNames(parentElement, classNames, searchInChildOrder)
  {
    var childNodes = parentElement.childNodes;
    var childNodeCount = childNodes.length;
    var classNameCount = classNames.length;
    var foundChildren = [];
    var foundCount = 0;
    if (searchInChildOrder === false) // start with the last index
    {
      for (var i = childNodeCount - 1; i >= 0 && foundCount < classNameCount; --i)
      {
        var child = childNodes[i];
        for (var j = 0; j < classNameCount; ++j)
        {
          if (child.nodeType == 1/*ELEMENT_NODE*/ && child.classList.contains(classNames[j]))
          {
            foundChildren[j] = child;
            ++foundCount;
            break; // done with this specific child
          }
        }
      }
    }
    else // start with the first index:
    {
      for (var i = 0; i < childNodeCount && foundCount < classNameCount; ++i)
      {
        var child = childNodes[i];
        for (var j = 0; j < classNameCount; ++j)
        {
          if (child.nodeType == 1/*ELEMENT_NODE*/ && child.classList.contains(classNames[j]))
          {
            foundChildren[j] = child;
            ++foundCount;
            break; // done with this specific child
          }
        }
      }
    }
    return foundChildren;
  }

  /**
   * Get the nearest ancestor element that has the specified class name (could be the specified element too).
   * @param {HTMLElement} startingElement the element (inclusive) to find the closest ancestor with the given className
   * @param {string} className the class name to search for
   * @return {HTMLElement} the found ancestor element whose or null if not found
   */
  function _getClosestAncestorByClassName(startingElement, className)
  {
    if (startingElement == null)
      return null;
    else if (startingElement.className == className)
      return startingElement;
    else
      return _getClosestAncestorByClassName(startingElement.parentNode, className);
  }

  //--------- MessageBox ---------//
  function MessageBox()
  {
  }

 /**
   * Creates or returns the header object as the first entry in the content.
  */
  MessageBox.prototype.getHeader = function()
  {
    var headerClassName = "amx-messages-header";
    // ake sure that the first item in the content is not a header
    var firstNode = this.contentElement.firstChild;
    var headerNode;
    if (firstNode == null ||
      firstNode.nodeType != 1 /*ELEMENT_NODE*/ ||
      !firstNode.classList.contains(headerClassName))
    {
      headerNode = document.createElement("div");
      headerNode.className = headerClassName;
      this.contentElement.parentNode.insertBefore(headerNode, this.contentElement);
    }
    else
    {
      headerNode = firstNode;
    }
    return headerNode;
  };

  /**
   * This updates the messagebox label if the type of message
   * is more severe than the current label severity
   * ("error" takes precedence over "warning")
   * @param type the severity of the message (e.g. "fatal", "error", "warning", "confirmation", "info")
   */
  MessageBox.prototype.setHeaderLabel = function(type)
  {
    var typeValue = severityStringToInt(type);

    if (this.headerValue == null || typeValue < this.headerValue)
    {
      this.headerValue = typeValue;
    }
    else
    {
      return;
    }

    // Ensure that we only have the most-severe header:
    var parentNode = this.contentElement.parentNode;
    var headers = parentNode.querySelectorAll(".amx-messages-header");
    for (var i=headers.length-1; i>=0; --i)
    {
      var oldHeader = headers[i];
      var oldValue = parseInt(oldHeader.getAttribute("data-value"), 10);
      if (oldValue >= this.headerValue)
      {
        adf.mf.api.amx.removeDomNode(oldHeader);
      }
    }

    var newHeader = severityIntToDisplayString(this.headerValue);
    var headerNode = this.getHeader();
    headerNode.setAttribute("data-value", this.headerValue);
    // remove the current message, if it exists
    headerNode.innerHTML = "";
    // now add the message label
    var labelNode = document.createElement("div");
    labelNode.className = "amx-messages-header-text";
    labelNode.textContent = adf.mf.resource.getInfoString(adf.mf.resource.ADFInfoBundleName, __severityDisplayStringBundleKey[newHeader]);
    labelNode.setAttribute("role", "heading");
    headerNode.appendChild(labelNode);
  };

  /**
   * This adds the passed in data to the current message box
   * Note: if the type of message is more severe than the current
   * label severity, it will be replace
   * ("error" takes precedence over "warning")
   * @param type the severity of the message (e.g. "fatal", "error", "warning", "confirmation", "info")
   * @param summary the error summary message
   * @param detail any extra detail to be shown to the user, or null
  */
  MessageBox.prototype.addItem = function(type, summary, detail)
  {
    this.setHeaderLabel(type);
    // for now, type can only be warning or error since we don't have graphics
    // for the other ones. So error will be "error" and "fatal" and all else
    // will be warnings
    var typeValue = severityStringToInt(type);
    var errorClass;
    switch (typeValue)
    {
      case INFO_VAL:
        errorClass = INFO_STR;
        break;
      case CONFIRMATION_VAL:
        errorClass = CONFIRMATION_STR;
        break;
      case WARNING_VAL:
        errorClass = WARNING_STR;
        break;
      default: // error and fatal
        errorClass = ERROR_STR;
    }
    var itemNode = document.createElement("div");
    itemNode.className = "amx-messages-item";
    itemNode.setAttribute("role", "listitem");
    var textItem1 = document.createElement("div");
    textItem1.className = "amx-messages-text amx-messages-text-" + errorClass + " amx-messages-" + errorClass;
    textItem1.textContent = summary;
    if (detail !== undefined && detail != null && detail != "")
    {
      textItem1.appendChild(document.createElement("br"));
      textItem1.appendChild(document.createTextNode(detail));
    }
    var prevMessagesItem = _getChildrenByClassNames(this.contentElement, ["amx-messages-item"], false)[0];
    var prevTextItem = null;
    if (prevMessagesItem != null)
      prevTextItem = _getChildrenByClassNames(prevMessagesItem, ["amx-messages-text"], false)[0];
    if (prevTextItem == null)
    {
      textItem1.classList.add("amx-messages-first");
    }
    else
    {
      prevTextItem.classList.remove("amx-messages-last");
    }
    // this is the last item
    textItem1.classList.add("amx-messages-last");
    itemNode.appendChild(textItem1);
    var icon = document.createElement("div");
    icon.className = "amx-messages-icon amx-messages-icon-" + errorClass;
    itemNode.appendChild(icon);
    this.contentElement.appendChild(itemNode);

    // now center the whole msg box vertically
    var messageBoxElement = this.messageBoxElement;
    var messageBoxComputedStyle = adf.mf.internal.amx.getComputedStyle(messageBoxElement);
    var messageBoxMarginTop = messageBoxComputedStyle.marginTop;
    var messageBoxMarginBottom = messageBoxComputedStyle.marginBottom;
    var messageBoxOuterHeight =
      messageBoxElement.offsetHeight +
      parseInt(messageBoxMarginTop, 10) +
      parseInt(messageBoxMarginBottom, 10);

    // In order to center the message box on the view, we need its height.
    // It is possible to display an error prior to displaying the first view so
    // in that case we should use the body height as a fallback.
    var bodyPageViews = document.getElementById("bodyPageViews");
    var firstViewContainer = _getChildrenByClassNames(bodyPageViews, ["amx-view-container"])[0];
    var viewElement = document.body;
    if (firstViewContainer != null)
      viewElement = _getChildrenByClassNames(firstViewContainer, ["amx-view"])[0];
    var viewHeight = viewElement.offsetHeight;

    var newTop;
    if (messageBoxOuterHeight < viewHeight)
    {
      newTop = (viewHeight - messageBoxOuterHeight)/2;
    }
    else
    {
      newTop = 0;
    }

    messageBoxElement.style.top = newTop + "px";
  };

  /**
   * Adds the footer than contains the OK button
  */
  MessageBox.prototype.addFooter = function(messageBoxContainer)
  {
    var footerNode = document.createElement("div");
    footerNode.className = "amx-messages-footer";
    var btnNode = document.createElement("div");
    btnNode.className = "amx-messages-btn amx-commandButton";
    // Adding WAI-ARIA Attribute for the message box commandButton role attribute
    btnNode.setAttribute("role", "button");
    var buttonLabel = document.createElement("div");
    buttonLabel.className = "amx-messages-btn-label amx-commandButton-label";

    // ADFInfoBundle[LBL_OK_DISPLAY_STR] is special cased in getResourceStringImpl(), and will always return a displayable value
    buttonLabel.textContent = adf.mf.resource.getInfoString(adf.mf.resource.ADFInfoBundleName, "LBL_OK_DISPLAY_STR");

    btnNode.appendChild(buttonLabel);
    footerNode.appendChild(btnNode);
    var mousedown = "mousedown";
    var mouseup = "mouseup";
    if (amx.hasTouch())
    {
      mousedown = "touchstart";
      mouseup = "touchend";
    }
    adf.mf.api.amx.addBubbleEventListener(btnNode, mousedown, function()
    {
      btnNode.classList.add("amx-selected");
    });
    adf.mf.api.amx.addBubbleEventListener(btnNode, mouseup, function()
    {
      btnNode.classList.remove("amx-selected");
    });
    adf.mf.api.amx.addBubbleEventListener(btnNode, "mouseout", function()
    {
      btnNode.classList.remove("amx-selected");
    });

    var extendedTarget = document.createElement("div");
    extendedTarget.className = "amx-extendedTarget";
    btnNode.appendChild(extendedTarget);

    messageBoxContainer.appendChild(footerNode);
    return btnNode;
  };

  /**
   * Creates the basic structure of this message box class
  */
  MessageBox.prototype.create = function()
  {
    var bodyPageViews = document.getElementById("bodyPageViews");
    var messageBoxElement = document.createElement("div");
    messageBoxElement.id = "amxMessageBox";
    // make sure this responds to dragging for scrolling purposes
    adf.mf.api.amx.enableScrolling(messageBoxElement);
    messageBoxElement.classList.add("messageBox");
    var messageBoxScreen = document.createElement("div");
    messageBoxScreen.className = "transparentScreen messageBoxScreen";
    bodyPageViews.appendChild(messageBoxScreen);
    bodyPageViews.appendChild(messageBoxElement);
    adf.mf.internal.amx._setNonPrimitiveElementData(messageBoxElement, "messageBox", this);
    var messageBoxObject = this;
    this.e = messageBoxElement;
    this.screen = messageBoxScreen;
    messageBoxElement.style.display = "none";
    var messageBoxContainer = document.createElement("div");
    messageBoxContainer.className = "messageBoxContainer";
    // Adding WAI-ARIA Attribute for role the message container div
    messageBoxContainer.setAttribute("role", "alertdialog");
    messageBoxElement.appendChild(messageBoxContainer);
    var messageBoxContent = document.createElement("div");
    messageBoxContent.className = "messageBoxContent";
    messageBoxContent.setAttribute("role", "list");
    messageBoxContainer.appendChild(messageBoxContent);
    this.contentElement = messageBoxContent;
    this.messageBoxElement = messageBoxElement;
    var okButton = this.addFooter(messageBoxContainer);

    /*adf.mf.api.amx.addBubbleEventListener(messageBoxScreen, "tap", function()
    {
      // this is always modal for now
      // messageBox.hide();
    });*/

    adf.mf.api.amx.addBubbleEventListener(okButton, "tap", function(event)
      {
        // Eat the event since this button is handling it:
        event.preventDefault();
        event.stopPropagation();

        // Delay the DOM removal so that the event eating doesn't fail to trigger a focus
        // on some input component behind this popup (we don't want the input's keyboard to appear):
        setTimeout(function()
        {
          messageBoxObject.hide();
        },
        0);
      });

    return messageBoxElement;
  };

  /**
   * Shows the message box to the user
  */
  MessageBox.prototype.show = function()
  {
    var messageBoxElement = this.e;
    var messageBoxScreen = this.screen;

    messageBoxScreen.style.display = "";
    messageBoxElement.style.display = "";

    // All view containers are now hidden from screen readers (we can't just
    // look for the first one because an error could occur while transitioning):
    var foundViewContainers = document.getElementsByClassName("amx-view-container");
    for (var i=0, elementCount=foundViewContainers.length; i<elementCount; i++)
    {
      foundViewContainers[i].setAttribute("aria-hidden", "true"); // Note: toggling this doesn't work on iOS 5 but does in iOS 6
    }
  };

  /**
   * Hides the message box from the user
  */
  MessageBox.prototype.hide = function()
  {
    var messageBoxElement = this.e;
    var messageBoxScreen = this.screen;

    var messageBoxContent = this.contentElement;
    messageBoxContent.innerHTML = "";

    adf.mf.api.amx.removeDomNode(messageBoxElement);
    adf.mf.api.amx.removeDomNode(messageBoxScreen);

    // All view containers are no longer hidden from screen readers (we can't just
    // look for the first one because an error could occur while transitioning):
    var foundViewContainers = document.getElementsByClassName("amx-view-container");
    for (var i=0, elementCount=foundViewContainers.length; i<elementCount; i++)
    {
      foundViewContainers[i].setAttribute("aria-hidden", "false"); // Note: toggling this doesn't work on iOS 5 but does in iOS 6
    }
  };

  function messageBoxCreate()
  {
    var messageBoxElement = null;
    var messageBoxObject = null;
    var foundMessageBoxElements = document.getElementsByClassName("messageBox");
    if (foundMessageBoxElements.length > 0)
    {
      messageBoxElement = foundMessageBoxElements[0];
      messageBoxObject = adf.mf.internal.amx._getNonPrimitiveElementData(messageBoxElement, "messageBox");
    }
    else
    {
      messageBoxObject = new MessageBox();
      messageBoxElement = messageBoxObject.create();
    }
    messageBoxObject.show();
    return messageBoxObject;
  };
  //--------- /MessageBox ---------//
})();
