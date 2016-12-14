/* Copyright (c) 2011, 2016, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* --------------- amx-typeHandler.js ------------------- */
/* ------------------------------------------------------ */

(function()
{
  function getNodeTypeHandler(amxNode)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle",
      adf.mf.log.level.SEVERE, "getNodeTypeHandler", "MSG_AMX_GET_NODE_TYPE_HANDLER_DEPRECATED");

    return amxNode.getTypeHandler();
  }
  amx.getNodeTypeHandler = getNodeTypeHandler;

  /**
   * Abstraction for TypeHandler implementations.
   * To extend TypeHandler, use:
   * <pre><code>(function()
   *   {
   *     // TypeHandler for custom "x" tags:
   *     var x = adf.mf.api.amx.TypeHandler.register("http://xmlns.example.com/custom", "x");
   *
   *     x.prototype.render = function(amxNode)
   *     {
   *       var rootElement = document.createElement("div");
   *       rootElement.appendChild(document.createTextNode("Hello World"));
   *       return rootElement;
   *     };
   *
   *     // TypeHandler for custom "y" tags:
   *     var y = adf.mf.api.amx.TypeHandler.register("http://xmlns.example.com/custom", "y");
   *
   *     y.prototype.render = function(amxNode)
   *     {
   *       var rootElement = document.createElement("div");
   *       rootElement.appendChild(document.createTextNode("Goodbye World"));
   *       return rootElement;
   *     };
   *
   *   })();</code></pre>
   * @constructor adf.mf.api.amx.TypeHandler
   * @augments adf.mf.api.AdfObject
   */
  function TypeHandler()
  {
    this.Init();
  }

  // make adf.mf.api.amx.TypeHandler a subclass of adf.mf.api.AdfObject
  adf.mf.api.amx.TypeHandler = TypeHandler;
  adf.mf.api.AdfObject.createSubclass(adf.mf.api.amx.TypeHandler, adf.mf.api.AdfObject, "adf.mf.api.amx.TypeHandler");

  /**
   * Initializes the TypeHandler class
   * @protected
   */
  adf.mf.api.amx.TypeHandler.InitClass = function()
  {
    TypeHandler._classDictionary = {};
    TypeHandler._instanceDictionary = {};
  };

  /**
   * Register a TypeHandler class with a tag namespace and name.
   * @param {string} theNamespace the xmlns for the tag
   * @param {string} tagName the name of the tag (no namespace)
   * @param {adf.mf.api.amx.TypeHandler=} precreatedClass optional pre-created class to register
   * @return {function} the registered adf.mf.api.amx.TypeHandler subclass so that prototype functions can be added
   */
  adf.mf.api.amx.TypeHandler.register = function(theNamespace, tagName, precreatedClass)
  {
    // make sure that our class is initialized, since we are using a Factory Method
    adf.mf.api.AdfObject.ensureClassInitialization(TypeHandler);
    var registeredClass = precreatedClass;

    if (theNamespace != null && theNamespace.indexOf(":") != -1 && tagName != null)
    {
      if (registeredClass == null)
      {
        // Create the new class and make it inherit from adf.mf.api.amx.TypeHandler:
        registeredClass = function RegisteredTypeHandler()
        {
          this.Init();
        };
        adf.mf.api.AdfObject.createSubclass(registeredClass, adf.mf.api.amx.TypeHandler,
          "TypeHandler[" + theNamespace + ":" + tagName + "]");
      }

      // Make the association so we can find the class:
      var id = theNamespace + ":" + tagName;
      this._classDictionary[id] = registeredClass;
    }
    else // invalid registration, do not register the TypeHandler class
    {
      adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
        "adf.mf.api.amx.TypeHandler.register", "MSG_INVALID_TYPE_HANDLER_REGISTRATION",
        theNamespace, tagName);
    }

    return registeredClass;
  };

  /**
   * Renders the initial set of DOM for this component.
   * @param {adf.mf.api.amx.AmxNode} amxNode an object that describes the instance of the component to be rendered
   * @param {string} id the id of this component
   */
  adf.mf.api.amx.TypeHandler.prototype.render = function(amxNode, id)
  {
    if (this.create)
    {
      adf.mf.log.logInfoResource("AMXInfoBundle",
        adf.mf.log.level.SEVERE, "render", "MSG_DEPRECATED", "typeHandler.render",
        "Use typeHandler.prototype.render instead for " + amxNode.getTag().getNsPrefixedName());
      return this.create(amxNode, id);
    }
    else
    {
      var tag = amxNode.getTag();
      adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.WARNING, "render",
        "MSG_NO_RENDERER", tag.getNsPrefixedName());

      var rootElement = document.createElement("div");
      rootElement.appendChild(document.createTextNode(
        "Missing prototype.render function in the TypeHandler for the " + tag.getName() +
        " tag in the " + tag.getNamespace() + " namespace; id = " + id));

      return rootElement;
    }
  };

  /**
   * Function that checks to see if the attributes that have changed may be handled
   * by the refresh function. May be overridden to make custom changes to the children
   * due to an attribute change. If the sub-class only needs to react to individual
   * attribute changes, it may override only the attributeChangeResult function
   * instead.
   *
   * @param {adf.mf.api.amx.AmxNode} amxNode AMX node that has changed
   * @param {adf.mf.api.amx.AmxAttributeChange} attributeChanges the changed attributes
   * @return {number} one of the adf.mf.api.amx.AmxNodeChangeResult constants.
   */
  adf.mf.api.amx.TypeHandler.prototype.updateChildren = function(
    amxNode,
    attributeChanges)
  {
    var changedAttributes = attributeChanges.getChangedAttributeNames();
    var result = adf.mf.api.amx.AmxNodeChangeResult["NONE"];

    for (var i = 0, num = changedAttributes.length; i < num; ++i)
    {
      // The AmxNodeChangeResult is order by the least amount of changes as the lowest
      // number, so using the maximum return value will provide the desired behavior
      result = Math.max(result,
        this.attributeChangeResult(amxNode, changedAttributes[i], attributeChanges));
    }

    return result;
  };

  /**
   * Checks if the type handler can handle updating the DOM in response to a changed
   * attribute. Called from updateChildren. Currently the base implementation supports
   * styleClass and inlineStyle changes to be handled by the refresh function.
   *
   * @param {adf.mf.api.amx.AmxNode} amxNode AMX node that has changed
   * @param {string} attributeName the name of the attribute to check
   * @param {adf.mf.api.amx.AmxAttributeChange} attributeChanges the changed attributes
   * @return {number} one of the adf.mf.api.amx.AmxNodeChangeResult constants.
   */
  adf.mf.api.amx.TypeHandler.prototype.attributeChangeResult = function(
    amxNode,
    attributeName,
    attributeChanges)
  {
    return attributeName == "styleClass" || attributeName == "inlineStyle" ?
      adf.mf.api.amx.AmxNodeChangeResult["REFRESH"] :
      adf.mf.api.amx.AmxNodeChangeResult["RERENDER"];
  };

  /**
   * Called to refresh the HTML of a node. This method is called after the updateChildren
   * method and should be implemented by type handlers that wish to update their DOM in
   * response to a change.
   *
   * @param {adf.mf.api.amx.AmxNode} amxNode AMX node that has changed
   * @param {adf.mf.api.amx.AmxAttributeChange} attributeChanges the changed attributes
   * @param {(adf.mf.api.amx.AmxDescendentChanges|null)} descendentChanges the changes for any
   *        descendent nodes that need to be refreshed.
   */
  adf.mf.api.amx.TypeHandler.prototype.refresh = function(
    amxNode,
    attributeChanges,
    descendentChanges)
  {
    var styleClassChanged = attributeChanges.hasChanged("styleClass");
    var inlineStyleChanged = attributeChanges.hasChanged("inlineStyle");

    if (styleClassChanged || inlineStyleChanged)
    {
      var element = document.getElementById(amxNode.getId());
      if (element != null)
      {
        if (styleClassChanged)
        {
          this._refreshStyleClass(amxNode, attributeChanges, element);
        }

        if (inlineStyleChanged)
        {
          this._refreshInlineStyle(amxNode, attributeChanges, element);
        }
      }
    }
  };

  /**
   * Allows a DOM element to be associated to the AMX node. Necessary for
   * AmxNode.getAmxNodeForElement to function. Calling this method is only necessary
   * if the element is located outside of its parent element or under a different node's
   * element (element is not a direct descendent of a node rendered for the amxNode's
   * root element or its own children elements).
   * @param {adf.mf.api.amx.AmxNode} amxNode the AMX node
   * @param {object} elem the DOM element
   */
  adf.mf.api.amx.TypeHandler.prototype.associateElementWithAmxNode = function(amxNode, elem)
  {
    adf.mf.internal.amx._setNonPrimitiveElementData(elem, "amxNode", amxNode);
    elem.classList.add("amx-node");
  };

  /**
   * Updates the style class of the root DOM element. This function will use the difference from
   * the old value and the new value to determine what style classes to add and which to remove,
   * so all style classes that were added by other code (like the render function of AmxNode) will
   * not be affected.
   *
   * @param {adf.mf.api.amx.AmxAttributeChange} attributeChanges the changed attributes
   * @param {Element} element the DOM element to which to apply the changes
   * @return {boolean} true if the changes were made
   */
  adf.mf.api.amx.TypeHandler.prototype._refreshStyleClass = function(
    amxNode,
    attributeChanges,
    element)
  {
    var oldValue = attributeChanges.getOldValue("styleClass");
    var newValue = amxNode.getAttribute("styleClass");

    oldValue = oldValue == null || oldValue == "" ? [] : oldValue.split(" ");
    newValue = newValue == null || newValue == "" ? [] : newValue.split(" ");

    var i, num, sc;
    var classList = element.classList;

    for (i = 0, num = oldValue.length; i < num; ++i)
    {
      sc = oldValue[i];
      if (newValue.indexOf(sc) == -1 && sc != "")
      {
        classList.remove(sc);
      }
    }

    for (i = 0, num = newValue.length; i < num; ++i)
    {
      sc = newValue[i];
      if (oldValue.indexOf(sc) == -1 && sc != "")
      {
        classList.add(sc);
      }
    }
  };

  /**
   * Called from the refresh function to update the
   * inline style of the root DOM element. This function will use the difference from the old value
   * and the new value to determine what changes to apply. So all style
   * that was added by other code (like the render function of AmxNode) will not be
   * affected.
   *
   * @param {adf.mf.api.amx.AmxAttributeChange} attributeChanges the changed attributes
   * @param {Element} element the DOM element to which to apply the changes
   * @return {boolean} true if the changes were made
   */
  adf.mf.api.amx.TypeHandler.prototype._refreshInlineStyle = function(
    amxNode,
    attributeChanges,
    element)
  {
    var oldValue = attributeChanges.getOldValue("inlineStyle");
    var newValue = amxNode.getAttribute("inlineStyle");
    var style;

    if (adf.mf.environment.profile.dtMode)
    {
      // if adf.mf.environment.profile.dtMode, remove el
      newValue = newValue.replace(/#\{(.*?)\}/ig, ' ');
    }

    var newStyle = null;
    if (oldValue != null && oldValue != "")
    {
      if (style == oldValue)
      {
        newStyle = newValue;
      }
      else
      {
        style = element.getAttribute("style") || "";
        index = style.indexOf(oldValue);
        if (index >= 0)
        {
          var prefix;
          if (index == 0)
          {
            prefix = ""
          }
          else
          {
            prefix = style.substr(0, index);
          }

          var suffix;
          if (index == oldValue.length - 1)
          {
            suffix = "";
          }
          else
          {
            suffix = style.substr(index + oldValue.length);
          }

          newStyle = prefix + newValue + suffix;
        }
      }
    }
    else if (newValue != null && newValue != "")
    {
      style = element.getAttribute("style") || "";
      if (style.length > 0)
      {
        if (style.charAt(style.length - 1) === ";")
        {
          newStyle = style + newValue;
        }
        else
        {
          newStyle = style + ";" + newValue;
        }
      }
      else
      {
        newStyle = newValue;
      }
    }

    if (newStyle != null)
    {
      // Use setAttribute and not style.cssText as Safari will change the style attribute
      // and 'sanitize' the value. While not a bad thing, causes the ability to compare
      // the new value and the old value to be broken. If the style is set via the attribute,
      // the formatting is kept and the value can be used for comparisson
      element.setAttribute("style", newStyle);
    }
  };

  /**
   * DO NOT USE; this method is experimental and will be removed without notice.
   * @param {adf.mf.api.amx.AmxNode} amxNode an object that describes the instance of the component
   * @param {string} amxNodeId the id of this component
   * @param {string} eventType the event type
   * @param {HTMLElement} rootElement the root element of the component
   * @param {boolean} useDocument in some cases, the event node is the document
   */
  adf.mf.api.amx.TypeHandler.prototype.__experimentalCLAssociation = function(
    amxNode,
    amxNodeId,
    eventType,
    rootElement,
    useDocument)
  {
    // DO NOT USE; this method is experimental and will be removed without notice.
    // This is a temporary experiment for TypeHandler-speicfic clientListener implementation.
    // The idea is this can be overridden to connect a listener to a DOM element other than the
    // root (the default element bound to the event).
    var eventData =
      {
        "amxNode": amxNode,
        "amxNodeId": amxNodeId,
        "eventType": eventType
      };
    adf.mf.api.amx.addBubbleEventListener(
      useDocument ? document : rootElement,
      eventType,
      adf.mf.api.amx.TypeHandler._experimentalCLHandler,
      eventData);

    if (useDocument)
    {
      // If rootElement is document then the listener could leak so we have to
      // define an __amxRemoveFunctions entry so that it will be cleaned up when
      // the real element is removed:
      if (rootElement.__amxRemoveFunctions == null)
        rootElement.__amxRemoveFunctions = [];
      rootElement.__amxRemoveFunctions.push(
        function()
        {
          adf.mf.api.amx.removeBubbleEventListener(
            document,
            eventType,
            adf.mf.api.amx.TypeHandler._experimentalCLHandler,
            eventData);
        });
    }
  };

  /**
   * DO NOT USE; this method is experimental and will be removed without notice.
   * @param {Object} domEvent the browser's DOM event object
   */
  adf.mf.api.amx.TypeHandler._experimentalCLHandler = function(domEvent)
  {
    var data = domEvent.data;
    var amxNode = data["amxNode"];
    var amxNodeId = data["amxNodeId"];
    var eventType = data["eventType"];
    var event = new adf.mf.api.amx.DomEvent(amxNodeId, eventType, domEvent);

    adf.mf.api.amx.processAmxEvent(amxNode, eventType, undefined, undefined, event, function() {});
  };

  /**
   * Gets the attribute to be used for validation. If a non-null value is returned, the
   * AmxNode's storeModifyableEl method will be called for this attribute, so it is not necessary
   * for the type handler to manually call this method.
   *
   * @return {string|null} the name of the attribute to use for validation. By default null is
   *         returned.
   */
  adf.mf.api.amx.TypeHandler.prototype.getInputValueAttribute = function()
  {
    return null;
  };
})();
