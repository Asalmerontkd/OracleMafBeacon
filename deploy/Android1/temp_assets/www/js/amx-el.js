/* Copyright (c) 2011, 2016, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* --------------------- amx-el.js ---------------------- */
/* ------------------------------------------------------ */

(function()
{
  // Helper method
  // return boolean
  amx.containsELExpressions = function(elString)
  {
		if (!elString)
			return false;
		if (elString.getExpression)
			return true;
		return amx.getElsFromString(elString).length > 0;
  };

  // Helper method
  // return an array
  amx.getElsFromString = function(elString)
  {
    var result = [];

    if (elString != null)
    {
      var regEx = /[#,$]{.*?}/g;
      var m = regEx.exec(elString);

      while (m != null)
      {
        if (result.indexOf(m[0]) < 0)
        {
          result.push(m[0]);
        }

        m = regEx.exec(elString);
      }
    }

    return result;
  };

  /**
   * Internal function. Calls adf.mf.el.getLocalValue and processes the resulting value, performing
   * any conversions if necessary. Currently converts JS objects with a ".null" property to a null
   * value.
   *
   * @param {string} expr The EL expression
   * @return {Object} the result
   */
  adf.mf.internal.amx.evaluateExpression = function(expr)
  {
    var value = adf.mf.el.getLocalValue(expr);

    return (value != null && value[".null"] === true) ? null : value;
  };

  /**
   * adf.mf.el.getValue wrapper using the promise for asynchronous
   * .then(requestAndResponse)  - response is an array of the values in the
   *                            same order as the el values passed in
   * .catch(requestAndException) - never invoked
   * @param {boolean=} ignoreErrors if true, causes EL errors to be ignored.
   *                   use sparingly for pre-loading data into the client side
   *                   EL cache. Primary goal is to ignore loop based variables
   *                   during pre-fetching of data while not stamping.
   */
  amx.getElValue = function (singleOrArrayOfEls, ignoreErrors)
  {
    return new adf.mf.internal.BasePromise(
      function(resolve, reject)
      {
        if (!adf.mf.environment.profile.dtMode)
        {
          var arrayOfEls = (adf.mf.internal.util.is_array(singleOrArrayOfEls)) ?
            singleOrArrayOfEls : [singleOrArrayOfEls];

          arrayOfEls = arrayToEL (arrayOfEls);

          var perf = adf.mf.internal.perf.startMonitorCall("AMX get EL value",
            adf.mf.log.level.FINER, "amx:getElValue");

          // this function will help convert the response from a call to adf.mf.el.getValue
          // to an array of objects that is exactly the length of the request el.
          // This handles full failure, full success, and partial success situations
          var makeResponseArray = function(partialResponses)
          {
            // in a full failure case, the partialResponses will be undefined
            if (partialResponses === undefined)
            {
              partialResponses = [];
            }

            var partialResponseIndex = 0;

            var resultArray = [];

            for (var i = 0; i < arrayOfEls.length; ++i)
            {
              var currentEl = arrayOfEls[i];
              var val = null;
              // we are guaranteed that any successes will be in the order of the request/ However,
              // we are not guaranteed that the length of the response array is the length of the
              // request array, so we keep state to know which partial response index we are on and
              // we will use that value instead of making the slightly more costly call of
              // getLocalValue
              var isException = true;
              if (partialResponseIndex < partialResponses.length &&
                partialResponses[partialResponseIndex].name == currentEl.getExpression())
              {
                var nvp = partialResponses[partialResponseIndex];
                if (nvp !== null &&
                  nvp[adf.mf.internal.api.constants.EXCEPTION_FLAG_PROPERTY] === undefined)
                {
                  isException = false;
                  val = nvp.value;
                      // we found a match, so increment the partial response index for when we loop
                      // back around
                  ++partialResponseIndex;
                }
              }

              if (isException)
              {
                try
                {
                  // we don't have any data for what this EL is, so call getLocalValue and use what
                  // is cached
                  val = adf.mf.el.getLocalValue(currentEl);
                }
                catch(innerEx)
                {
                  // if this throws an exception, then do nothing, since val will be undefined
                  // and we will set it to null in the check below
                  ;
                }
              }

              // make sure we never return an "undefined" value - make sure it is just a json null
              // struct
              if (val === undefined)
              {
                val = {".null" : true};
              }

              resultArray.push(
                { name: currentEl.getExpression(), expression: currentEl, value: val });
            }

            return resultArray;
          };

          var successFunc = function(request,response)
          {
            var resultArray;
            try
            {
              resultArray = makeResponseArray(response);
            }
            finally
            {
              perf.stop();
            }

            resolve([request,resultArray]);
          };

          var failureFunc = function(request,exception)
          {
            var resultArray;

            try
            {
              adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE, "getElValue",
                "MSG_GETVALUE_FAILED");

              // For security purposes, only log at FINE level
              if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.FINE))
              {
                adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
                  "amx", "getElValue",
                  "Request that failed: " + request + " exception: " + exception);
              }

              resultArray = makeResponseArray();
            }
            finally
            {
              perf.stop();
            }

            resolve([request,resultArray]);
          };

          try
          {
            adf.mf.el.getValue(arrayOfEls, successFunc, failureFunc, ignoreErrors);
          }
          catch (ex)
          {
            adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE, "getElValue",
              "MSG_GETVALUE_EXCEPTION");

            // For security purposes, only log at FINE level
            if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.FINE))
            {
              adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
                "amx", "getElValue",
                "EL strings: " + adf.mf.util.stringify(arrayOfEls) + " error: " + ex);
            }

            // call the failure function to handle resolving the promise object
            failureFunc(arrayOfEls, ex);
          }
        }
        else
        {
          // if adf.mf.environment.profile.dtMode then, return the result
          var response = [{value:singleOrArrayOfEls}];
              resolve([singleOrArrayOfEls,response]);
        }
      });
  };

  /**
   * Converts array of strings to array of ELExpressions.
   *
   * @param {type} expressions
   * @returns {Array}
   */
  function arrayToEL(expressions)
  {
    if (expressions[0].tokens)
      return expressions;

    var elExpressions = [];

    for (var i = 0; i < expressions.length; i++)
    {
      elExpressions.push (adf.mf.internal.el.parser.parse (expressions[i]));
    }

    return elExpressions;
  }

  /**
   * adf.mf.el.setValue wrapper using the promise for asynchronous
   */
  amx.setElValue = function(nameValues)
  {
    return new adf.mf.internal.BasePromise(
      function(resolve, reject)
      {
        if (!adf.mf.environment.profile.dtMode)
        {
          var perf = adf.mf.internal.perf.startMonitorCall("AMX set EL value",
            adf.mf.log.level.FINER, "amx:setElValue");

          try
          {
            adf.mf.el.setValue(nameValues,
              function(request, response)
              {
                perf.stop();
                resolve([request,response]);
              },
              function(request, exception)
              {
                perf.stop();
                adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE, "setElValue",
                  "MSG_SETVALUE_FAILED");

                // For security purposes, only log at FINE level
                if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.FINE))
                {
                  adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
                    "amx", "setElValue",
                    "Request arguments: " + adf.mf.util.stringify(nameValues) +
                    " exception: " + exception);
                }

                reject([request,exception]);
              });
          }
          catch (ex)
          {
            perf.stop();

            adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE, "setElValue",
              "MSG_SETVALUE_EXCEPTION");

            // For security purposes, only log at FINE level
            if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.FINE))
            {
              adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
                "amx", "setElValue",
                "Name: " + nameValues.name + " error: " + ex);
            }

            // TODO: why is this resolve and not reject?
            resolve();
          }
        }
        else
        {
          // if adf.mf.environment.profile.dtMode, just resolve
          resolve();
        }
      });
  };

  /**
   * @deprecated
   */
  amx.invokeEl = function(expression, params, returnType, types)
  {
    if (expression && expression.getExpression)
      expression = expression.getExpression ();

    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
      "amx.invokeEl", "MSG_DEPRECATED", "amx.invokeEl", "adf.mf.api.amx.invokeEl");

    return new adf.mf.internal.BasePromise(
      function(resolve, reject)
      {
        try
        {
          if (expression && !adf.mf.environment.profile.dtMode)
          {
            if (!adf.mf.environment.profile.mockData)
            {
              //TODO: needs to inject correct params, and handle return type
              adf.mf.el.invoke(
                expression,
                params,
                "void",
                types,
                function(req,res)
                {
                  resolve(res);
                },
                function(req,exp)
                {
                  reject(exp);
                });
            }
            else
            {
              adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.INFO, "invokeEl",
                "MSG_AMX_DO_NOT_CALL_ADFMF_EL_INVOKE");

              // For security purposes, only log at FINE level
              if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.FINE))
              {
                adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
                  "amx", "invokeEl",
                  "Deprecated call with expression: " + expression);
              }

              resolve();
            }
          }
          else
          {
            resolve();
          }
        }
        catch (ex)
        {
          adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE, "invokeEl",
            "MSG_INVOKEEL_EXCEPTION");

          // For security purposes, only log at FINE level
          if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.FINE))
          {
            adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
              "amx", "invokeEl",
              "Call failed. Expression: " + expression  + " error: " + ex);
          }

          resolve();
        }
      });
  };

  /**
   * Utility similar to adf.mf.el.invoke() for invoking an EL method but will refrain execution in
   * environments such as design time previews.
   *
   * @param {string} expression the EL method to invoke
   * @param {Array.<string>} params an array of parameters to send to the method
   * @param {string} returnType null or the return type for the method
   * @param {Array.<string>} paramTypes an array of types for each parameter in the params array
   * @param {function} successCallback optional function to call when the method is invoked
   * @param {function} failureCallback optional function to call if something failed while
   *   attempting to invoke the method
   */
  adf.mf.api.amx.invokeEl = function(expression, params, returnType, paramTypes, successCallback,
    failureCallback)
  {
    try
    {
      if (expression && expression.getExpression)
        expression = expression.getExpression ();

      if (expression && !adf.mf.environment.profile.dtMode)
      {
        if (!adf.mf.environment.profile.mockData)
        {
          //TODO: needs to inject correct params, and handle return type
          if (returnType == null)
            returnType = "void";
          adf.mf.el.invoke(expression, params, returnType, paramTypes, successCallback,
            failureCallback);
        }
        else
        {
          adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.INFO, "invokeEl",
            "MSG_AMX_DO_NOT_CALL_ADFMF_EL_INVOKE");

          // For security purposes, only log at FINE level
          if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.FINE))
          {
            adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
              "adf.mf.api.amx", "invokeEl",
              "invokeEl called in mock mode with expression: " + expression);
          }

          if (successCallback)
            successCallback();
        }
      }
      else
      {
        if (successCallback)
          successCallback();
      }
    }
    catch (ex)
    {
      adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE, "invokeEl",
        "MSG_INVOKEEL_EXCEPTION");

      // For security purposes, only log at FINE level
      if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.FINE))
      {
        adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
          "adf.mf.api.amx", "invokeEl",
          "Call failed. Expression: " + expression + " error: " + ex);
      }
      if (failureCallback)
        failureCallback();
    }
  };
})();
