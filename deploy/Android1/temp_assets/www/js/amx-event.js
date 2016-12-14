/* Copyright (c) 2011, 2016, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* --------------------- amx-event.js ------------------- */
/* ------------------------------------------------------ */

(function()
{
  var _currentFocusDomNode = null;
  var _focusBlurEventData = {}; // allows these focus/blur events to be unique from other focus/blur events

  /**
   * Internal method to bind to the focus method and be notified when another control gains focus
   */
  adf.mf.internal.amx.registerFocus = function(domNode, callback)
  {
    adf.mf.api.amx.addBubbleEventListener(
      domNode,
      "focus",
      function(event)
      {
        // register this node in order to receive events when another control is tapped
        _currentFocusDomNode = domNode;
        if (callback)
        {
          callback(event);
        }
      },
      _focusBlurEventData);
  };

  /**
   * Internal method to bind to the blur method and be notified when another control gains focus
   */
  adf.mf.internal.amx.registerBlur = function(domNode, callback)
  {
    adf.mf.api.amx.addBubbleEventListener(
      domNode,
      "blur",
      function(event)
      {
        // unregister this node - no more need to receive events when another control is tapped
        if (_currentFocusDomNode == domNode)
        {
          _currentFocusDomNode = null;
        }
        if (callback)
        {
          callback(event);
        }
      },
      _focusBlurEventData);
  };

  // this method calls blur on the currentFocus node
  // in order to give it a chance to saved its internal changes
  // first we will blur the node in order to trigger value change events etc
  // then we restore focus back so that we don't accidently cause the user to get the
  // wrong focus - due to keyboard hiding/showing in other words, so that the touchstart &
  // touchend events occur on the same element
  function blurCurrentNode()
  {
    var oldCurrentNode = _currentFocusDomNode;
    var oldActiveElement = document.activeElement;

    if (_currentFocusDomNode != null)
      adf.mf.api.amx.triggerBubbleEventListener(_currentFocusDomNode, "blur");

    if (document.activeElement != null && document.activeElement.blur != null)
      document.activeElement.blur();

    if (oldCurrentNode != null)
    {
      if (oldCurrentNode.tagName == "SELECT" || oldCurrentNode.tagName == "INPUT")
        adf.mf.api.amx.triggerBubbleEventListener(oldCurrentNode, "focus");
    }

    if (oldActiveElement != null && oldActiveElement.focus != null)
    {
      if (oldActiveElement.tagName == "SELECT" || oldActiveElement.tagName == "INPUT")
        oldActiveElement.focus();
    }

  }

  function triggerEvent(eventTarget, eventName, triggerExtra)
  {
    if (eventName == "tap")
    {
      // "tap" is not a real event so we need to trigger the real events for it
      var tapEvents = _getTapEvents();
      triggerEvent(eventTarget, tapEvents.start, triggerExtra);
      triggerEvent(eventTarget, tapEvents.end, triggerExtra);
    }
    else if (eventName == "taphold")
    {
      // "taphold" is not a real event so we need to trigger the real events for
      // it (the 2nd event needs to take place after the underlying 1st event's
      // timeout occurs hence the addition of 1 to the threshold).
      var tapHoldEvents = _getTapEvents();
      triggerEvent(eventTarget, tapHoldEvents.start, triggerExtra);
      setTimeout(
        function()
        {
          triggerEvent(eventTarget, tapHoldEvents.end, triggerExtra);
        },
        1+holdThreshold);
    }
    else
    {
      adf.mf.internal.triggerEvent(
        eventTarget,
        "HTMLEvents",
        eventName,
        true,
        true,
        triggerExtra);
    }
  }

  function _isSimpleObject(o)
  {
    return Object.prototype.toString.call(o) == "[object Object]";
  }

  /**
   * Utility to merge an arbitrary list of simple objects onto the given base object.
   * If any of the given objects is determined to not be a simple object, the merging
   * will cease and false is returned.
   * @param {Object} baseObject the simple object that the remaining objects will be added to (in order)
   * @return {Boolean} whether the full set of objects was merged
   */
  function _mergeSimpleObjects(baseObject)
  {
    if (!_isSimpleObject(baseObject))
      return false;

    // Loop through the rest of the arguments to merge their properties into the base object
    var args = Array.prototype.slice.call(arguments);
    for (var i=1, count=args.length; i<count; ++i)
    {
      var objectToMerge = args[i];

      if (!_isSimpleObject(objectToMerge))
        return false;

      for (var key in objectToMerge)
        baseObject[key] = objectToMerge[key];
    }

    return true;
  }

  var tapPendingIds = {};

  function cancelPendingTap()
  {
    tapPendingIds = {};
  }

  var _tapEvents = null;
  var _getTapEvents = function()
  {
    if (_tapEvents == null)
      _tapEvents = amx.hasTouch() ? { start: "touchstart", end: "touchend", cancel: "touchcancel" } : { start: "mousedown", end: "mouseup", cancel: "" };
    return _tapEvents;
  };

  var _addSpecialTapBubbleEventListener = function(domNode, eventType, listener, eventData)
  {
    var tapEvents = _getTapEvents();
    var tapId = null;
    var originalPosition = null;
    var startListener = function(event)
    {
      // if there is a node that registered its focus, then
      // the first thing to do is blur that focus here
      var newFocusedTagName = domNode.tagName;
      if (newFocusedTagName != "INPUT" && newFocusedTagName != "SELECT") // virtual keyboard elements
        blurCurrentNode();
      tapId = amx.uuid(); // TODO don't use amx.foo!
      tapPendingIds[tapId] = true;
      originalPosition = _getEventPagePosition(event);
    };
    var endListener = function(event)
    {
      if (tapPendingIds[tapId])
      {
        // Ignore taps if the finger moves too much between start and end.
        // The points might be null in automated testing mode so allow the tap
        // if points cannot be determined.
        var newPosition = _getEventPagePosition(event);
        var pointsCloseEnough =
          Math.abs(originalPosition["pageX"] - newPosition["pageX"]) < 25 &&
          Math.abs(originalPosition["pageY"] - newPosition["pageY"]) < 25;
        if (pointsCloseEnough ||
           originalPosition["pageX"] == null ||
           originalPosition["pageY"] == null ||
           newPosition["pageX"] == null ||
           newPosition["pageY"] == null)
        {
          adf.mf.api.amx.showLoadingIndicator();
          listener.call(this, event);
          adf.mf.api.amx.hideLoadingIndicator();
        }
        originalPosition = null;
        delete tapPendingIds[tapId];
        cancelPendingDrag(true, false);
      }
    };
    var cancelListener = function(event)
    {
      // Starting in Android 4.4, sometimes the browser will trigger a cancel
      // event before you lift your finger. In such cases, we can't reliably
      // honor the gesture as a tap because the 2 points are inaccurate.
      if (tapPendingIds[tapId])
      {
        originalPosition = null;
        delete tapPendingIds[tapId];
        cancelPendingDrag(true, false);
      }
    };
    // We used to ignore tap cancel but this is no longer valid with the new Chrome WebView in 4.4. Like native Chrome,
    // this will generate the cancel event if the preventDefault is not registered within 250ms. Since we get a touchStart
    // we need to figure out what the intent of the touch is (tap and hold or just tap or drag and drop). The issue
    // is the 250ms is a system time (outside the WebView) and when the WebView is busy (over long runs in Selenium), or
    // lots of open features then we start to slow down where some of the clicks are not addressed in time and we get a
    // touch cancel. What we do instead is treat the cancel like a touch end.
    if (tapEvents.cancel != "")
    {
      _addSpecialBubbleEventListener(
        domNode,
        eventType,
        listener,
        eventData,
        [
          [ tapEvents.start,  startListener ],
          [ tapEvents.end,    endListener ],
          [ tapEvents.cancel, cancelListener ]
        ]);
    }
    else
    {
      _addSpecialBubbleEventListener(
        domNode,
        eventType,
        listener,
        eventData,
        [
          [ tapEvents.start, startListener ],
          [ tapEvents.end,   endListener ]
        ]);
    }
  };
  // --------- /Tap Event --------- //

  // --------- Tap Hold --------- //
  var tapHoldPendingIds = {};

  function cancelPendingTapHold()
  {
    tapHoldPendingIds = {};
  }

  var holdThreshold = 800;

  var _addSpecialTapHoldBubbleEventListener = function(domNode, eventType, listener, eventData)
  {
    var tapEvents = _getTapEvents();
    var tapId = null;
    var startListener = function(event)
    {
      tapId = amx.uuid(); // TODO don't use amx.foo!
      tapHoldPendingIds[tapId] = new Date().getTime();

      // Since we are using a timer, we need to fetch our eventData now for reapplication in the timer
      var eventData = event.data;

      setTimeout(function()
      {
        // Note: here we double check if the time is greater than the threshold. This is useful since sometime timeout
        //       is not really reliable.
        if (tapHoldPendingIds[tapId] > 0)
        {
          var timeOffset = new Date().getTime() - tapHoldPendingIds[tapId];
          if (timeOffset >= holdThreshold)
          {
            // Call the listener but make sure our eventData is used:
            var eventDataToRestore = event.data;
            event.data = eventData;
            var result = listener.call(domNode, event);
            event.data = eventDataToRestore;

            // if the handler consumes the tapHold, remove it from the tapPendingIds so that it does not count like a tap
            if (result === "consumeTapHold")
            {
              // Android requires that we preventDefault, otherwise native select/edit text mode can be triggered
              // This code does also fixes softKeyboard show/hide bug and let's user select/edit text for inputText component
              var agent = adf.mf.internal.amx.agent;
              if (agent["type"] == "Android")
              {
                event.preventDefault();
              }
              cancelPendingTap();
              cancelPendingTapHold();
              cancelPendingDrag(false, false);
            }
          }
          delete tapHoldPendingIds[tapId];
        }

      }, holdThreshold);
    };
    var endListener = function(event)
    {
      if (tapHoldPendingIds[tapId])
      {
        delete tapHoldPendingIds[tapId];
      }
    };
    _addSpecialBubbleEventListener(
      domNode,
      eventType,
      listener,
      eventData,
      [
        [ tapEvents.start, startListener ],
        [ tapEvents.end, endListener ]
      ]);
  };
  // --------- /Tap Hold --------- //

  // --------- Drag Event --------- //
  var dragPendingIds = {};
  var dragEvents = null;

  function cancelPendingDrag(releaseLocks, triggerCancelOrEndBeforeRemove)
  {
    if (!triggerCancelOrEndBeforeRemove)
      dragPendingIds = {};

    if (releaseLocks)
    {
      if (!dragEvents)
        dragEvents = amx.hasTouch() ? touchDragEvents : mouseDragEvents;

      if (triggerCancelOrEndBeforeRemove)
      {
        // If a container is listening to drag events but a descendant gets removed, we need to
        // trigger the cancel/end listeners or else that container could get in a corrupt state:
        if (dragEvents.cancel != "")
          adf.mf.api.amx.triggerBubbleEventListener(document.documentElement, dragEvents.cancel);
        else
          adf.mf.api.amx.triggerBubbleEventListener(document.documentElement, dragEvents.end);
      }

      adf.mf.api.amx.removeBubbleEventListener(document.documentElement, dragEvents.drag, documentDragDrag);
      adf.mf.api.amx.removeBubbleEventListener(document.documentElement, dragEvents.end, documentDragEnd);
      if (dragEvents.cancel != "")
        adf.mf.api.amx.removeBubbleEventListener(document.documentElement, dragEvents.cancel, documentDragCancel);
      releaseDragLock();

      // delete the dragContext since it no longer applies
      adf.mf.internal.amx._setNonPrimitiveElementData(document.documentElement, "dragCtx", null);
    }
  }

  var DRAGSTART = "amxdragstart";
  var DRAGDRAG = "amxdragdrag";
  var DRAGEND = "amxdragend";

  /**
   * Options optional method implementation:
   */
  var mouseDragEvents =
  {
    start: "mousedown",
    drag: "mousemove",
    end: "mouseup",
    cancel: ""
  };

  var touchDragEvents =
  {
    start: "touchstart",
    drag: "touchmove",
    end: "touchend",
    cancel: "touchcancel"
  };

  // Handler for the event DRAGSTART event.
  function handleDragEvent(e, options)
  {
    var domNode = this;
    var id = "_" + amx.uuid(); // TODO don't use amx.foo!

    dragPendingIds[id] = true;

    var startEvent = e;
    var startPagePos = _getEventPagePosition(startEvent);

    // so far, we prevent the default, otherwise, we see some text select which can be of a distracting
    // since we create "meta events" we consume this one
    // e.preventDefault();
    // e.stopPropagation();

    var documentDragData = {
      "options": options,
      "domNode": domNode,
      "id": id,
      "startEvent": startEvent,
      "startPagePos": startPagePos,
      "dragStarted": false
    };

    if (!dragEvents)
      dragEvents = amx.hasTouch() ? touchDragEvents : mouseDragEvents;

    // We use the documentElement for the following 2 events so that the dragging doesn't stop when leaving the domNode.
    // In order to uniquely identify these listeners for removal the documentDragData will be passed in so that other
    // events of the same names on the document don't get lost.

    // drag
    adf.mf.api.amx.addBubbleEventListener(document.documentElement, dragEvents.drag, documentDragDrag, documentDragData);

    // drag end
    adf.mf.api.amx.addBubbleEventListener(document.documentElement, dragEvents.end, documentDragEnd, documentDragData);

    // drag cancel
    if (dragEvents.cancel != "")
      adf.mf.api.amx.addBubbleEventListener(document.documentElement, dragEvents.cancel, documentDragCancel, documentDragData);
  }

  function documentDragDrag(e)
  {
    var documentDragData = e.data;
    var options = documentDragData["options"];
    var domNode = documentDragData["domNode"];
    var id = documentDragData["id"];
    var startEvent = documentDragData["startEvent"];
    var startPagePos = documentDragData["startPagePos"];

    // if the drag has not started, check if we need to start it
    if (!documentDragData["dragStarted"] && dragPendingIds[id])
    {
      var currentPagePos = _getEventPagePosition(e);
      var offsetX = (startPagePos.pageX - currentPagePos.pageX);
      var offsetY = (startPagePos.pageY - currentPagePos.pageY);

      // if the diff > threshold, then, we start the drag
      if (Math.abs(offsetX) > options.threshold || Math.abs(offsetY) > options.threshold)
      {
        var dragCtx = adf.mf.internal.amx._getNonPrimitiveElementData(document.documentElement, "dragCtx");
        if (dragCtx == null) // if no drag is already in progress on the element...
        {
          documentDragData["dragStarted"] = true;

          // we cancel any pending tap event
          cancelPendingTap();
          cancelPendingTapHold();

          // create the dragCtx
          adf.mf.internal.amx._setNonPrimitiveElementData(document.documentElement, "dragCtx", {});

          var dragStartExtra = buildDragExtra(startEvent, domNode, DRAGSTART, startPagePos, currentPagePos);
          triggerEvent(domNode, DRAGSTART, dragStartExtra);
        }
      }
    }

    if (documentDragData["dragStarted"] && dragPendingIds[id])
    {
      // making sure they they are canceled
      cancelPendingTap();
      cancelPendingTapHold();

      var dragExtra = buildDragExtra(e, domNode, DRAGDRAG);
      triggerEvent(domNode, DRAGDRAG, dragExtra);

      // since we create "meta events" we consume this event if the meta event was consumed
      if (dragExtra.preventDefault)
        e.preventDefault();
      if (dragExtra.stopPropagation)
        e.stopPropagation();
    }
  }

  function documentDragEnd(e)
  {
    _documentDragFinish(e);
  }

  function documentDragCancel(e)
  {
    _documentDragFinish(e);
  }

  function _documentDragFinish(e)
  {
    var documentDragData = e.data;
    var domNode = documentDragData["domNode"];
    var id = documentDragData["id"];

    if (documentDragData["dragStarted"] && dragPendingIds[id])
    {
      var extra = buildDragExtra(e, domNode, DRAGEND);
      triggerEvent(domNode, DRAGEND, extra);

      // since we create "meta events" we consume this event if the meta event was consumed
      if (extra.preventDefault)
        e.preventDefault();
      if (extra.stopPropagation)
        e.stopPropagation();

      // Let other elements have a chance at handling drag events:
      extra.releaseDragLock();
    }

    // unbind the document event that is specifically tied to this documentDragData instance
    adf.mf.api.amx.removeBubbleEventListener(document.documentElement, dragEvents.drag, documentDragDrag, documentDragData);
    adf.mf.api.amx.removeBubbleEventListener(document.documentElement, dragEvents.end, documentDragEnd, documentDragData);
    if (dragEvents.cancel != "")
      adf.mf.api.amx.removeBubbleEventListener(document.documentElement, dragEvents.cancel, documentDragCancel, documentDragData);
    delete dragPendingIds[id];

    // delete the dragContext
    adf.mf.internal.amx._setNonPrimitiveElementData(document.documentElement, "dragCtx", null);
  }

  var currentDragElementH = null;
  var currentDragElementV = null;

  /**
   * Mechanism to release a reservation for horizontal and/or vertical drag behavior for the given element.
   * @param {HTMLElement} element the element that no longer wants to consume the specified drag events
   * @param {Boolean} horizontal whether you want to reserve drag events for the horizontal axis
   * @param {Boolean} vertical whether you want to reserve drag events for the horizontal axis
   * @return {Boolean} whether your release request was successful for the specified axes
   */
  function releaseDragLock(element, horizontal, vertical)
  {
    var releasedTheLock = false;

    if (element)
    {
      releasedTheLock = true;

      if (horizontal)
      {
        if (currentDragElementH == null || currentDragElementH == element)
          currentDragElementH = null;
        else
          releasedTheLock = false;
        }

      if (vertical)
      {
        if (currentDragElementV == null || currentDragElementV == element)
          currentDragElementV = null;
        else
          releasedTheLock = false;
        }
      }
    else // purge all
    {
      releasedTheLock = true;
      currentDragElementH = null;
      currentDragElementV = null;
    }

    return releasedTheLock;
  }

  /**
   * Mechanism to establish a reservation for horizontal and/or vertical drag behavior for the given element.
   * @param {HTMLElement} element the element that wants to consume the specified drag events
   * @param {Boolean} horizontal whether you want to reserve drag events for the horizontal axis
   * @param {Boolean} vertical whether you want to reserve drag events for the horizontal axis
   * @return {Boolean} whether your reservation request was granted for the specified axes
   */
  function requestDragLock(element, horizontal, vertical)
  {
    var gotTheLock = false;

    if (element)
    {
      gotTheLock = true;

      if (horizontal)
      {
        if (currentDragElementH == null || currentDragElementH == element)
          currentDragElementH = element;
        else
          gotTheLock = false;
      }

      if (vertical)
      {
        if (currentDragElementV == null || currentDragElementV == element)
          currentDragElementV = element;
        else
          gotTheLock = false;
      }
    }

    return gotTheLock;
  }

  /**
   * Build the extra event info for the drag event.
   * @param {Object} event TODO
   * @param {HTMLElement} domNode the dragged element
   * @param {String} dragType the custom drag event name
   * @param {Object} startPagePos optional argument with pageX and pageY properties
   * @param {Object} currentPagePos optional argument with pageX and pageY properties
   */
  function buildDragExtra(event, domNode, dragType, startPagePos, currentPagePos)
  {
    var hasTouch = amx.hasTouch(); // TODO don't use amx.foo!
    var extra = _getEventPagePosition(event); // fetch the pageX and pageY as appropriate
    extra["eventSource"] = event;
    extra["preventDefault"] = false;
    extra["stopPropagation"] = false;
    extra["releaseDragLock"] = releaseDragLock;
    extra["requestDragLock"] = requestDragLock;

    if (hasTouch)
    {
      extra.touches = event.touches;
    }

    var dragCtx = adf.mf.internal.amx._getNonPrimitiveElementData(document.documentElement, "dragCtx");
    if (dragCtx)
    {
      if (dragType === DRAGSTART)
      {
        dragCtx.startPageX = extra.startPageX = extra.pageX;
        dragCtx.startPageY = extra.startPageY = extra.pageY;

        dragCtx.lastPageX = dragCtx.startPageX = extra.startPageX;
        dragCtx.lastPageY = dragCtx.startPageY = extra.startPageY;
      }
      else if (dragType === DRAGEND)
      {
        // because, on iOS, the touchEnd event does not have the .touches[0].pageX
        extra.pageX = dragCtx.lastPageX;
        extra.pageY = dragCtx.lastPageY;
      }

      if (startPagePos != null && dragCtx.originalAngle == null)
      {
        // Calculate, using the start page event location, the angle that the user moved their
        // finger. Allows callers to determine the directionality that the user intends to scroll.
        var diffX = currentPagePos.pageX - startPagePos.pageX;
        var diffY = startPagePos.pageY - currentPagePos.pageY; // Y direction is reversed;

        // Determine the angle
        // angle = arctan(opposite/adjacent) (converted from radians to degrees)
        // Note that this computation uses 0 degrees as east, 90 is north.
        // Angles to the south and west are negative (-90 is south)
        dragCtx.originalAngle = Math.round(Math.atan2(diffY, diffX) * 180 / Math.PI);
      }

      extra.originalAngle = dragCtx.originalAngle;
      extra.startPageX = dragCtx.startPageX;
      extra.startPageY = dragCtx.startPageY;
      extra.deltaPageX = extra.pageX - dragCtx.lastPageX;
      extra.deltaPageY = extra.pageY - dragCtx.lastPageY;

      dragCtx.lastPageX = extra.pageX;
      dragCtx.lastPageY = extra.pageY;
    }
    else
    {
      adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.WARNING, "buildDragExtra",
        "MSG_DRAG_CTX_NULL");
    }

    return extra;
  }

  function _getEventPagePosition(e)
  {
    var pageX, pageY;
    if (e.changedTouches && e.changedTouches.length > 0)
    {
      pageX = e.changedTouches[0].pageX;
      pageY = e.changedTouches[0].pageY;
    }
    else if (e.touches && e.touches.length > 0)
    {
      pageX = e.touches[0].pageX;
      pageY = e.touches[0].pageY;
    }
    else
    {
      pageX = e.pageX;
      pageY = e.pageY;
    }

    return {
      "pageX": pageX,
      "pageY": pageY
    };
  }

  // --------- /Drag Event --------- //

  // -------- Swipe Event --------- //

  var swipeThreshold = 5;

  /**
   * Determine if it is a swipe event, and if yes, build the swipeExtra
   */
  function buildSwipeExtra(domNode, event, dragExtra)
  {
    var swipeExtra = null;
    var swipeDone = domNode.getAttribute("data-swipeDone");

    if (swipeDone != "true" && dragExtra)
    {
      var offsetX = (dragExtra.pageX - dragExtra.startPageX);
      var offsetY = (dragExtra.pageY - dragExtra.startPageY);
      var absOffsetX = Math.abs(offsetX);
      var absOffsetY = Math.abs(offsetY);
      if (absOffsetX >= absOffsetY && absOffsetX > swipeThreshold)
      {
        // Only consider it a drag if the angle of the drag is within 30 degrees of due horizontal
        var angle = Math.abs(dragExtra.originalAngle);
        if (angle <= 30 || angle >= 150)
        {
          swipeExtra = {};
          swipeExtra.swipeType = (offsetX > -1)?"swipeRight":"swipeLeft";
          domNode.setAttribute("data-swipeDone", "true");
        }
      }
      else if (absOffsetY >= absOffsetX && absOffsetY > swipeThreshold)
      {
        // Only consider it a drag if the angle of the drag is within 30 degrees of due vertical
        var ang = Math.abs(dragExtra.originalAngle);
        if (ang >= 60 && ang <= 120)
        {
          swipeExtra = {};
          swipeExtra.swipeType = (offsetY > -1)?"swipeDown":"swipeUp";
          domNode.setAttribute("data-swipeDone", "true");
        }
      }
    }

    return swipeExtra;
  }
  // -------- /Swipe Event --------- //

// --------- /events --------- //

// --------- Event Enabler --------- //

  /**
   * Triggers an HTML bubble event listener (e.g. tap, taphold, keydown,
   * touchstart, touchmove, touchend, focus, blur, resize, etc.).
   * It is important to note that web browsers do not support all event types on
   * all DOM nodes. Refer to browser documentation for specifics.
   * @param {DOMNode} eventTarget the target DOM node for this event
   * @param {String} eventName the name of the HTML event to listen for
   */
  adf.mf.api.amx.triggerBubbleEventListener = function(eventTarget, eventName)
  {
    triggerEvent(eventTarget, eventName);
  };

  /**
   * Register a bubble event listener (e.g. tap, taphold, keydown, touchstart, touchmove, touchend, focus,
   * blur, resize, etc.). It is important to note that web browsers do not support all event types on all
   * DOM nodes. Refer to browser documentation for specifics. The eventData is optional and
   * serves as extra data to be made available to your listener function.
   * @param {DOMNode} domNode the target element for this event
   * @param {String} eventType the name of the event to listen for
   * @param {Function} listener the function that will be invoked when the specified element encounters this event (with a parameter that is the DOM event object)
   * @param {Object} eventData extra event data that will be made available on the "data" member of the event object
   */
  adf.mf.api.amx.addBubbleEventListener = function(domNode, eventType, listener, eventData)
  {
    // For special events (ones we made up that delegate to other real events), we have more
    // work to do in order to add the listeners:
    if ("tap" == eventType)
    {
      _addSpecialTapBubbleEventListener(domNode, eventType, listener, eventData);
    }
    else if ("taphold" == eventType)
    {
      _addSpecialTapHoldBubbleEventListener(domNode, eventType, listener, eventData);
    }
    else
    {
      // Adding a real event listener:
      _addBubbleEventListener(domNode, eventType, listener, eventData);
    }
  };

  var _addBubbleEventListener = function(domNode, eventType, listener, eventData)
  {
    // Internal note: we will support eventData using a technique similar to this:
    // domNode.addEventListener("click", function() { var tempData = eventData; yourListener(tempData); }, false)
    // but we need to follow the removeEventListener "handleEvent" guidance noted here and we will need a
    // mechanism to remove all listeners at once (for the removeDomNode function) so that means we need to
    // track the listeners using some ID mechanism).

    if (domNode != null && listener != null)
    {
      var actualListener = function(event)
      {
// TODO integrate .registerFocus and .registerBlur here
        var oldData = event.data;
        if (eventData != null)
        {
          if (oldData == null)
          {
            // No merging necessary (only new data)
            event.data = eventData;
          }
          else // Try merging the 2 pieces of data
          {
            var merged = {};
            if (_mergeSimpleObjects(merged, oldData, eventData))
              event.data = merged; // Use the merged result
            else
              event.data = eventData; // Both are not objects so we can't merge; use only new data
          }
        }
        var result = listener.call(this, event, event.triggerExtra);
        event.data = oldData;
        if (result !== undefined)
        {
          if ((event.result = result) === false)
          {
            // Stop the event from continuing (e.g. max length hit in an inputText)
            event.preventDefault();
            event.stopPropagation();
          }
        }
      };
      var newListener = {
        "actualListener": actualListener,
        "eventType": eventType,
        "listener": listener,
        "eventData": eventData
      };
      if (domNode._amxListeners == null)
        domNode._amxListeners = [];
      domNode._amxListeners.push(newListener);
      domNode.addEventListener(eventType, actualListener, false);
    }
  };

  var _addSpecialBubbleEventListener = function(domNode, eventType, eventKey, eventData, backingListeners)
  {
    // specialEventsMap is a map with keys like "tap", "taphold", "amxdrag":
    var specialEventsMap = domNode._amxSpecialEvents;
    if (specialEventsMap == null)
    {
      specialEventsMap = {};
      domNode._amxSpecialEvents = specialEventsMap;
    }

    // Since there can be multiple instances of each special event type, each type points to an instance map.
    // The eventKeysMap is keyed by something that allows unique removal.
    // This key could be the developer's passed-in listener function (in the case of "tap" and "taphold") or
    // the developer's payload object (in the case of "amxdrag").
    var eventKeysMap = specialEventsMap[eventType];
    if (eventKeysMap == null)
    {
      eventKeysMap = {};
      specialEventsMap[eventType] = eventKeysMap;
    }

    // Each entry in eventKeysMap is a map keyed by the event data (possibly null):
    var eventDataMap = eventKeysMap[eventKey];
    if (eventDataMap == null)
    {
      eventDataMap = {};
      eventKeysMap[eventKey] = eventDataMap;
    }

    // Each entry in eventDataMap is an array of instance listeners.
    var instanceListenersArray = eventDataMap[eventData];
    if (instanceListenersArray == null)
    {
      instanceListenersArray = [];
      eventDataMap[eventData] = instanceListenersArray;
    }

    // Each member of instanceListeners is a backing listener array where index 0 is an
    // DOM event type and index 1 is a DOM event handler function.
    for (var i=0, count=backingListeners.length; i<count; ++i)
    {
      var backingListener = backingListeners[i];
      _addBubbleEventListener(domNode, backingListener[0], backingListener[1], eventData);
      instanceListenersArray.push(backingListener);
    }
  };

  /**
   * Unregister a bubble event listener that was added via adf.mf.api.amx.addBubbleEventListener.
   * If eventType is not specified, all listeners registered by the add function will be removed.
   * If listener is not specified, all listeners registered by the add function of the given type will be removed.
   * @param {DOMNode} domNode the target element for which an event listener was previously added
   * @param {String} eventType the name of the event
   * @param {Function} listener the event listener function
   * @param {Object} eventData the extra event data
   */
  adf.mf.api.amx.removeBubbleEventListener = function(
    domNode,
    eventType,
    listener,
    eventData)
  {
    if (domNode != null)
    {
      if (eventType == null)
      {
        // Remove all special event listeners:
        _removeSpecialBubbleEventListener(domNode);
        delete domNode._amxSpecialEvents;

        // Remove all real event listeners:
        _removeBubbleEventListener(domNode);
      }
      else if ("tap" == eventType || "taphold" == eventType || "amxdrag" == eventType)
      {
        // For special events (ones we made up that delegate to other real events), we have more
        // work to do in order to remove the listeners:
        var eventKey = listener; // for "tap" and "taphold", the listener is the eventKey
        _removeSpecialBubbleEventListener(domNode, eventType, eventKey, eventData);
      }
      else
      {
        // Removing a real event listener:
        _removeBubbleEventListener(domNode, eventType, listener, eventData);
      }
    }
  };

  /**
   * Remove a bubble event listener.
   * @param {DOMNode} domNode the DOM node that owns the event listeners
   * @param {String} eventType the DOM event type (if not specified, all events will be removed)
   * @param {Function} listener the DOM event listener (if not specified, all events of the given type will be removed)
   * @param {Object} eventData the optional event data that is bundled with the event listener
   */
  var _removeBubbleEventListener = function(domNode, eventType, listener, eventData)
  {
    if (domNode != null && listener != null)
    {
      // Account for listeners not added via adf.mf.api.amx.addBubbleEventListener:
      domNode.removeEventListener(eventType, listener, false);
    }

    if (domNode != null && domNode._amxListeners != null)
    {
      // Account for listeners added via adf.mf.api.amx.addBubbleEventListener:
      var savedListeners = domNode._amxListeners;
      var savedListenerCount = savedListeners.length;
      for (var i=savedListenerCount-1; i>=0; --i)
      {
        var savedListener = savedListeners[i];
        var removeThisListener = false;
        if (eventType === undefined) // remove all saved listeners
        {
          eventType = savedListener["eventType"];
          removeThisListener = true;
        }
        else if (listener === undefined) // remove all saved listeners of this event type
          removeThisListener = savedListener["eventType"] == eventType;
        else if (eventData === undefined) // remove all saved listeners of this event type and listener function
          removeThisListener = savedListener["eventType"] == eventType && savedListener["listener"] == listener;
        else // remove only listeners that match this type, listener function, and event data
          removeThisListener = savedListener["eventType"] == eventType && savedListener["listener"] == listener && savedListener["eventData"] == eventData;

        if (removeThisListener)
        {
          domNode.removeEventListener(eventType, savedListener["actualListener"], false);
          savedListeners.splice(i, 1); // remove that listener from the array
        }
      }

      if (domNode._amxListeners.length == 0)
        delete domNode._amxListeners;
    }
  };

  /**
   * Remove any special event listeners associated with the given information.
   * @param {DOMNode} domNode the DOM node that owns the event listeners
   * @param {String} eventType optional eventType to limit what gets removed
   * @param {Object} eventKey optional eventKey to limit what gets removed
   * @param {Object} eventData optional eventData to limit what gets removed
   */
  var _removeSpecialBubbleEventListener = function(domNode, eventType, eventKey, eventData)
  {
    var specialEventsMap = domNode._amxSpecialEvents;
    if (specialEventsMap == null)
    {
      return; // nothing was registered so nothing to remove
    }

    if (eventType == null)
    {
      // Remove for all possible special eventType values
      for (var foundEventType in specialEventsMap)
      {
        _removeSpecialEventForKeyAndData(domNode, specialEventsMap[foundEventType]);
        delete specialEventsMap[foundEventType];
      }
    }
    else
    {
      // Restrict removal to just this special eventType
      var eventKeysMap = specialEventsMap[eventType];
      _removeSpecialEventForKeyAndData(domNode, eventKeysMap, eventKey, eventData);
      if (Object.keys(eventKeysMap).length == 0)
        delete specialEventsMap[eventType]; // no more keys for this event type
    }

    if (Object.keys(specialEventsMap).length == 0)
      delete domNode._amxSpecialEvents; // no more special events of any type
  };

  /**
   * Remove special event listeners of a specific type associated with the given information.
   * @param {DOMNode} domNode the DOM node that owns the event listeners
   * @param {Object} eventKeysMap map of all special event keys for a particular eventType
   * @param {Object} eventKey optional eventKey to limit what gets removed
   * @param {Object} eventData optional eventData to limit what gets removed
   */
  var _removeSpecialEventForKeyAndData = function(domNode, eventKeysMap, eventKey, eventData)
  {
    if (eventKeysMap == null)
    {
      return; // nothing was registered so nothing to remove
    }

    if (eventKey == null)
    {
      // Remove all instances of this special eventType
      for (var foundEventKey in eventKeysMap)
      {
        _removeSpecialEventForData(domNode, eventKeysMap[foundEventKey]);
        delete eventKeysMap[foundEventKey];
      }
    }
    else
    {
      // Restrict removal to just this eventKey
      var eventDataMap = eventKeysMap[eventKey];
      _removeSpecialEventForData(domNode, eventDataMap, eventData);
      if (Object.keys(eventDataMap).length == 0)
        delete eventKeysMap[eventKey]; // no more keys for this event type and key combo
    }
  };

  /**
   * Remove special event listeners of a specific eventData associated with the given information.
   * @param {DOMNode} domNode the DOM node that owns the event listeners
   * @param {Object} eventDataMap map of all special eventData for a particular eventType and eventKey
   * @param {Object} eventData optional eventData to limit what gets removed
   * @return {Boolean} whether the specified listeners were removed
   */
  var _removeSpecialEventForData = function(domNode, eventDataMap, eventData)
  {
    if (eventDataMap == null)
    {
      return; // nothing was registered so nothing to remove
    }

    if (eventData == null)
    {
      // Remove all instances of this special eventData
      for (var foundEventData in eventDataMap)
      {
        _removeSpecialEventInstanceListeners(domNode, eventDataMap[foundEventData], foundEventData);
        delete eventDataMap[foundEventData];
      }
    }
    else
    {
      // Restrict removal to just this eventData
      var instanceListeners = eventDataMap[eventData];
      _removeSpecialEventInstanceListeners(domNode, instanceListeners, eventData);
      delete eventDataMap[eventData]; // no more keys for this event type and key combo
    }
  };

  /**
   * Remove special event listeners of associated with the given information.
   * @param {DOMNode} domNode the DOM node that owns the event listeners
   * @param {Object} instanceListeners the backing listener array
   * @param {Object} eventData optional eventData to limit what gets removed
   */
  var _removeSpecialEventInstanceListeners = function(domNode, instanceListeners, eventData)
  {
    if (instanceListeners == null)
    {
      return; // nothing was registered so nothing to remove
    }

    // Remove the real underlying events for this custom event listener
    for (var i=instanceListeners.length-1; i>=0; --i)
    {
      var backingListener = instanceListeners[i];
      // Note, for now we are not passing along eventData so that callers can delete references to
      // instanceListeners.
      _removeBubbleEventListener(domNode, backingListener[0], backingListener[1], eventData);
    }
  };

  /**
   * Allow a DOM node to trigger custom AMX events for amx:showPopupBehavior, amx:setPropertyListener, etc.
   * like "tapHold" and the "swipe".
   * @param {adf.mf.api.amx.AmxNode} amxNode the AmxNode that owns the DOM for the event
   * @param {DOMNode} domNode the DOM node that can trigger the event
   * @param {String} eventType the type of event being associated; either "tapHold" or "swipe"
   */
  adf.mf.api.amx.enableAmxEvent = function(amxNode, domNode, eventType)
  {
    if (eventType == "swipe")
      _enableSwipe(amxNode, domNode);
    else if (eventType == "tapHold")
      _enableTapHold(amxNode, domNode);
  };

  var _enableSwipe = function(amxNode, domNode)
  {
    var handler = function(event, swipeExtra)
    {
      var tag = amxNode.getTag();
      var swipeType = swipeExtra.swipeType;

      // check that we have at least one action with this type
      var childrenTags = tag.getChildren();
      for (var i=0, size=childrenTags.length; i<size; ++i)
      {
        var childTag = childrenTags[i];
        var childType = childTag.getAttribute("type");

        // The event processing doesn't know about start/end so use left/right if applicable:
        if (childType == "swipeStart")
        {
          if (document.documentElement.dir == "rtl")
            childType = "swipeRight";
          else
            childType = "swipeLeft";
        }
        else if (childType == "swipeEnd")
        {
          if (document.documentElement.dir == "rtl")
            childType = "swipeLeft";
          else
            childType = "swipeRight";
        }

        if (childType == swipeType)
        {
          var event = new amx.ActionEvent(); // TODO don't use amx.foo!
          adf.mf.api.amx.processAmxEvent(amxNode, swipeType, undefined, undefined, event);
          return "consumeSwipe";
        }
      }
    };

    var swipeConsumed = false;
    adf.mf.api.amx.addDragListener(
      domNode,
      {
        start: function(event, dragExtra) {},

        drag: function(event, dragExtra)
        {
          if (!swipeConsumed)
          {
            var swipeExtra = buildSwipeExtra(domNode, event, dragExtra);
            if (swipeExtra)
            {
              var result = handler.call(this, event, swipeExtra);
              if (result === "consumeSwipe")
              {
                swipeConsumed = true;
                domNode.removeAttribute("data-swipeDone");
              }
            }
           }
        },

        end: function(event, dragExtra)
        {
          swipeConsumed = false;
          domNode.removeAttribute("data-swipeDone");
        },

        threshold: 5
      });
  };

  var _enableTapHold = function(amxNode, domNode)
  {
    adf.mf.api.amx.addBubbleEventListener(
      domNode,
      "taphold",
      function(event)
      {
        var tag = amxNode.getTag();

        // check that we have at least one action with this type
        var childrenTags = tag.getChildren();
        for (var i=0, size=childrenTags.length; i<size; ++i)
        {
          var childTag = childrenTags[i];
          if (childTag.getAttribute("type") == "tapHold")
          {
            var event = new amx.ActionEvent(); // TODO don't use amx.foo!
            adf.mf.api.amx.processAmxEvent(amxNode, "tapHold", undefined, undefined, event);
            return "consumeTapHold";
          }
        }
      });
  };

  /**
   * Allow a DOM node to trigger AMX drag events.
   * The payload object defines 3 member functions: "start", "drag", "end" where each one's first parameter
   * is the DOM event, the second parameter is a "dragExtra" object with members: "eventSource" (the DOM event
   * source), "pageX" (the x coordinate of the event, "pageY" the y coordinate of the event, "startPageX" (the
   * original pageX), "startPageY" (the original pageY), "deltaPageX" (the change in pageX), "deltaPageY" (the
   * change in pageY), "originalAngle" (if available, it will be the original angle of the drag in degrees
   * where 0 degrees as east, 90 is north, -90 is south, 180 is west), and modifiable member flags:
   * "preventDefault", and "stopPropagation".
   * @param {DOMNode} domNode the DOM node that can trigger the drag event
   * @param {Object} playload the specifics about the drag event
   * @param {Object} eventData the extra event data
   */
  adf.mf.api.amx.addDragListener = function(domNode, payload, eventData)
  {
    var options =
    {
      threshold: 5
    };
    _mergeSimpleObjects(options, payload);

    var backingListeners = [];
    if (options.start)
      backingListeners.push([ DRAGSTART, options.start ]);
    if (options.drag)
      backingListeners.push([ DRAGDRAG, options.drag ]);
    if (options.end)
      backingListeners.push([ DRAGEND, options.end ]);

    var dragEvents = amx.hasTouch() ? touchDragEvents : mouseDragEvents;

    backingListeners.push([ dragEvents.start, function(e)
      {
        domNode.setAttribute("data-amxDragInProgress", "yes");
        handleDragEvent.call(domNode, e, options);
      }]);
    backingListeners.push([ dragEvents.end, function(e)
      {
        cleanElementsWithDragInProgress();
      }]);
    if (dragEvents.cancel != "")
    {
      backingListeners.push([ dragEvents.cancel, function(e)
        {
          cleanElementsWithDragInProgress();
        }]);
    }

    _addSpecialBubbleEventListener(
      domNode,
      "amxdrag",
      payload,
      eventData,
      backingListeners);
  };

  function cleanElementsWithDragInProgress()
  {
    // Since we are not guaranteed to get an "end" for a "start" (e.g. the drag ended
    // on a different element than the start element) then we need to find all drag
    // elements and remove their "in-progress" markers:
    var elementsWithDragInProgress = document.querySelectorAll("*[data-amxDragInProgress]");
    for (var i = 0, count = elementsWithDragInProgress.length; i < count; ++i)
      elementsWithDragInProgress[i].removeAttribute("data-amxDragInProgress");

    // Ensure the drag is concluded:
    cancelPendingDrag(true, true);
  }

  /**
   * Apply innerHTML upon on element (this will call adf.mf.api.amx.emptyHtmlElement for
   * you).
   * @param {HTMLElement} parentElement the parent HTML element whose innerHTML is to be applied
   * @param {string} innerHtml the HTML to apply in the parentElement
   * @param {boolean} scriptEval whether script tags should be evaluated
   */
  adf.mf.api.amx.applyInnerHtml = function(parentElement, innerHtml, scriptEval)
  {
    adf.mf.api.amx.emptyHtmlElement(parentElement);
    parentElement.innerHTML = innerHtml;
    if (scriptEval)
    {
      // Loop through all script nodes in the parent (might be more than just innerHTML's):
      var scriptNodes = parentElement.querySelectorAll("script");
      for (var i = 0; i < scriptNodes.length; i++)
      {
        // Clone the node (if not previously-cloned)
        var scriptNode = scriptNodes[i];
        var scriptClone = cloneScriptNode(scriptNode);
        if (scriptClone)
          scriptNode.parentNode.replaceChild(scriptClone, scriptNode);
      }
    }
  };

  function cloneScriptNode(oldNode)
  {
    if (oldNode == null)
      return oldNode;
    var newNode = document.createElement("script");
    var cloneIdentifier = "data-amx-script-clone";
    newNode.setAttribute(cloneIdentifier, "yes"); // marker to prevent re-cloning
    newNode.text = oldNode.innerHTML;
    var attrs = oldNode.attributes;
    for (var i = attrs.length-1; i >= 0; i--)
    {
      var attr = oldNode.attributes[i];
      var attrName = attr.name;
      if (attrName == cloneIdentifier)
        return null; // found a script node that was previously-cloned
      newNode.setAttribute(attrName, attr.value);
    }
    return newNode;
  }

  /**
   * Remove a DOM node (and its children) but first removes event listeners
   * that were added via adf.mf.api.amx.addBubbleEventListener and ensures any
   * components inside it get cleaned up properly.
   * @param {DOMNode} domNode the DOM node to remove
   */
  adf.mf.api.amx.removeDomNode = function(domNode)
  {
    var i;

    // We need to proceed depth-first:
    if (domNode != null)
    {
      // Cancel pending drags if applicable
      // We need to cancel pending drags because they may have been abandoned
      // due to element removal during their "dragdrag" handlers.
      // This is needed for bug 18775524 but means we can't have a navigationDragBehavior.
      if (domNode.getAttribute && "yes" == domNode.getAttribute("data-amxDragInProgress"))
      {
        cancelPendingDrag(true, true);
      }

      // First we need to clean up any associated AMXNodes before the DOM is
      // removed or else the destroy handlers might lose important context.
      adf.mf.internal.amx.removeAmxDomNode(domNode);

      // Going depth-first, clean up the children:
      var children = domNode.childNodes;
      if (children != null)
      {
        for (i = children.length - 1; i >= 0; --i)
        {
          adf.mf.api.amx.removeDomNode(children[i]);
        }
      }

      // Unregister the event listeners:
      adf.mf.api.amx.removeBubbleEventListener(domNode);

      // In some cases an element delegates event listeners to the document like
      // amx:view for some document events. We need to make sure those get
      // unregistered too or else there would be a leak:
      if (domNode.__amxRemoveFunctions != null)
      {
        var removeFunctionCount = domNode.__amxRemoveFunctions.length;
        for (i = removeFunctionCount - 1; i >= 0; --i)
        {
          var removeFunc = domNode.__amxRemoveFunctions[i];
          try
          {
            removeFunc();
          }
          catch (problem)
          {
            adf.mf.log.logInfoResource(
              "AMXInfoBundle",
              adf.mf.log.level.SEVERE,
              "adf.mf.api.amx.removeDomNode",
              "MSG_ERROR_REMOVE_DOM_NODE_SCRIPT");

            // Only log the details at a fine level for security reasons
            if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.FINE))
            {
              adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
                "adf.mf.api.amx", "removeDomNode",
                "Error in function: " + removeFunc + " error: " + problem);
            }
          }
        }
        domNode.__amxRemoveFunctions = null;
      }

      // Remove the node:
      if (domNode.parentNode != null)
        domNode.parentNode.removeChild(domNode);
    }
  };

  /**
   * Empty an HTML element by removing children DOM nodes and calling adf.mf.api.amx.removeDomNode on each
   * of the children nodes.
   * @param {HTMLElement} element the HTML element to empty
   */
  adf.mf.api.amx.emptyHtmlElement = function(element)
  {
    // HTMLElement element
    if (element != null)
    {
      var children = element.childNodes;
      if (children != null)
      {
        for (var i=children.length-1; i>=0; --i)
          adf.mf.api.amx.removeDomNode(children[i]);
      }
    }
  };

  /**
   * Enable scrolling for the given element.
   * This operation may append a style class to the element so ensure that you
   * do not overwrite the element class name after calling this API.
   */
  adf.mf.api.amx.enableScrolling = function(element)
  {
    // Disable old scrolling strategies and enable new
    adf.mf.api.amx.disableScrolling(element);

    var scrollPolicyClassName = "amx-scrollable";

    // In legacy skins, scrolling is much more aggressive so we have a different class name:
    var args = Array.prototype.slice.call(arguments);
    if (args.length == 2)
    {
      if (args[1] === true) // 2nd magic argument is whether you need legacy scrolling support
        scrollPolicyClassName = "amx-scrollPolicy-auto";
    }

    // Apply the class name:
    element.classList.add(scrollPolicyClassName);
  };

  /**
   * Disable scrolling for the given element.
   * This operation removes the style classes added to the element
   * by adf.mf.api.amx.enableScrolling function.
   */
  adf.mf.api.amx.disableScrolling = function(element)
  {
    // remove class names
    element.classList.remove("amx-scrollable", "amx-scrollPolicy-auto");
  };

  function _shorten(object, limit)
  {
    var result;

    if (object == null)
    {
      result = object;
    }
    else
    {
      var string = "" + object;

      if (string.length > limit)
        result = string.substring(0, limit-3).trim() + "...";
      else
        result = string;

      result = result.replace(/\n/g, " ").trim();
      result = result.replace(/[\s]+/g, " "); // collapse all spaces
    }

    return result;
  }

  /**
   * Generate a debugging string for events associated with a given HTML element.
   * @param {HTMLElement} element the HTML element whose event detail will be generated
   * @param {Number} shortenLimit optional number that can change the limit to the length of debug listener or data text
   * @return {String} a debugging string representing details about events associated with the given HTML element
   */
  adf.mf.api.amx.getEventDebugString = function(element, shortenLimit)
  {
    if (element == null)
      return element;

    if (shortenLimit === undefined)
      shortenLimit = 25;

    var domEventsMessage = "\n  n/a";
    var domListeners = element._amxListeners;
    if (domListeners != null)
    {
      var domListeners = element._amxListeners;
      var domListenerCount = domListeners.length;
      domEventsMessage = "";
      for (var i=0; i<domListenerCount; ++i)
      {
        var domListener = domListeners[i];
        var firstPrefix = "  " + (1+i) + " - ";
        var otherPrefix = Array(1+firstPrefix.length).join(" "); // empty spaces of equal length
        domEventsMessage += "\n" + firstPrefix + "type: " + domListener["eventType"];
        domEventsMessage += "\n" + otherPrefix + "listener: " + _shorten(domListener["listener"], shortenLimit);
        domEventsMessage += "\n" + otherPrefix + "data: " + _shorten(domListener["eventData"], shortenLimit);
      }
    }

    var specialEventsMessage = "\n  n/a";
    var specialEventsMap = element._amxSpecialEvents;
    if (specialEventsMap != null)
    {
      specialEventsMessage = "";
      var eventTypeCounter = 0;
      for (var eventType in specialEventsMap)
      {
        // Since there can be multiple instances of each special event type, each type points to an event key map.
        // The eventKeysMap is keyed by something that allows unique removal.
        // This key could be the developer's passed-in listener function (in the case of "tap" and "taphold") or
        // the developer's payload object (in the case of "amxdrag").
        var eventKeysMap = specialEventsMap[eventType];
        specialEventsMessage += "\n  " + ++eventTypeCounter + " - type: " + eventType;
        var eventKeyCounter = 0;
        for (var eventKey in eventKeysMap)
        {
          // Each entry in eventKeysMap is a eventDataMap.
          var eventDataMap = eventKeysMap[eventKey];
          specialEventsMessage += "\n    " + eventTypeCounter + "." + ++eventKeyCounter + " - key: " + _shorten(eventKey, shortenLimit);
          var eventDataCounter = 0;
          for (var eventData in eventDataMap)
          {
            // Each entry in eventDataMap is an array of instance listeners.
            var instanceListenersArray = eventDataMap[eventData];
            var instanceListenerCount = instanceListenersArray.length;
            specialEventsMessage += "\n      " + eventTypeCounter + "." + eventKeyCounter + "." + ++eventDataCounter + " - data: " + _shorten(eventData, shortenLimit);
            for (var i=0; i<instanceListenerCount; ++i)
            {
              // Each member of instanceListenersArray is a backing listener array where index 0 is an
              // DOM event type and index 1 is a DOM event handler function.
              specialEventsMessage += "\n        " + eventTypeCounter + "." + eventKeyCounter + "." + eventDataCounter + "." + (1+i) + " - DOM type: " + instanceListenersArray[i][0];
            }
          }
        }
      }
    }

    var message =
      "DOM events: " + domEventsMessage +
      "\nSpecial events:" + specialEventsMessage;
    return message;
  };

  //NOTE: The body of this function was removed to allow use of native scrolling in iOS 5.0 by
  // the use of the CSS "-webkit-overflow-scrolling: touch" on the amx-scrollable class, but the
  // binding itself remains because removing it causes AMX-processed touch events to fail
  // altogether.
  //TODO : Do we still need this (was in a jQuery load of amx-core)?
  adf.mf.api.amx.addBubbleEventListener(document.body, "touchmove", function(event) {});

  adf.mf.api.finishAnyLoading().then(
    function()
    {
      // Android workaround for form elements not appearing within visible part of the display
      // when a keyboard is shown (they would otherwise be covered up by the keyboard).
      if (adf.mf.internal.amx.agent["type"] == "Android")
      {
        var lastShowKeyboardTime = 0;
        var lastResizeTime = 0;
        var timeOutRunning = false;

        var scrollActiveElementIntoView = function()
        {
          timeOutRunning = false;

          var ae = document.activeElement;

          // Ignore the document body (when the active element has not been set).
          if (ae != document.body)
          {
            // Not every browser implements scrollIntoViewIfNeeded. The mobile browsers mostly
            // implement it, but check first before falling back on scrollIntoView.
            ae["scrollIntoViewIfNeeded"] ? ae.scrollIntoViewIfNeeded() : ae.scrollIntoView();
          }
        };

        var scrollActiveElementIntoViewIfAppropriate = function(newerTime, olderTime)
        {
          // Determine how long between the most recent showkeyboard and resize events.
          var timeDiff = newerTime - olderTime;

          // Is this resize due to the keyboard (close in time to the event)?
          if (timeDiff <= 750 && !timeOutRunning)
          {
            timeOutRunning = true;

            // Use a timeout to allow the browser time to redraw before trying to bring the
            // element into view.
            window.setTimeout(scrollActiveElementIntoView, 150);
          }
        };

        // Note: showkeyboard is only called on Android and it is called several times per one
        // showing of the keyboard for some unknown reason.
        document.addEventListener("showkeyboard",
          function(event)
          {
            // Record when the event was generated
            lastShowKeyboardTime = (new Date()).getTime();

            scrollActiveElementIntoViewIfAppropriate(lastShowKeyboardTime, lastResizeTime);
          });

        // The android:windowSoftInputMode is set to adjustResize, so the window will resize
        // to fit to the space left without the keyboard. Listen for this event so that we can
        // catch the resize event that happens after the showkeyboard event.
        window.addEventListener("resize",
          function(event)
          {
            // Record when the event was generated
            lastResizeTime = (new Date()).getTime();

            scrollActiveElementIntoViewIfAppropriate(lastResizeTime, lastShowKeyboardTime);
          });
      }
    });

  function _getClosestWithClass(domNode, classNameToMatch)
  {
    // Find the closest ancestor (including self that uses the given class name)
    if (domNode == null || (domNode.classList && domNode.classList.contains(classNameToMatch)))
    {
      return domNode;
    }
    else
    {
      return _getClosestWithClass(domNode.parentNode, classNameToMatch);
    }
  }

  /**
   * An event triggering an outcome-based navigation.
   * See also the Java API oracle.adfmf.amx.event.ActionEvent.
   * @constructor
   */
  adf.mf.api.amx.ActionEvent = function()
  {
    this[".type"] = "oracle.adfmf.amx.event.ActionEvent";
  };
  amx.ActionEvent = adf.mf.api.amx.ActionEvent; // deprecated syntax

  /**
   * A DOM event.
   * @param {string} amxNodeId the component ID
   * @param {Object} eventType the type of event
   * @param {Event} originalEvent the original DOM event object
   * @constructor
   */
  adf.mf.api.amx.DomEvent = function(amxNodeId, eventType, originalEvent)
  {
    this[".type"] = "oracle.adfmf.amx.event.DomEvent";
    this.amxNodeId = amxNodeId;
    this.eventType = eventType;
    this.source = originalEvent.target;
    this.currentTarget = originalEvent.currentTarget;
    this.originalEvent = originalEvent;
  };

  /**
   * An event for notifying that a specified row has been moved.
   * It contains the key for the row that was moved along with the key for the row it was inserted before.
   * See also the Java API oracle.adfmf.amx.event.MoveEvent.
   * @param {Object} rowKeyMoved the rowKey that was moved
   * @param {Object} rowKeyInsertedBefore the rowKey that the moved row was inserted before
   * @constructor
   */
  adf.mf.api.amx.MoveEvent = function(rowKeyMoved, rowKeyInsertedBefore)
  {
    this[".type"] = "oracle.adfmf.amx.event.MoveEvent";
    this.rowKeyMoved = rowKeyMoved;
    this.rowKeyInsertedBefore = rowKeyInsertedBefore;
  };
  adf.mf.internal.amx.MoveEvent = adf.mf.api.amx.MoveEvent; // deprecated syntax

  /**
   * An event for changes of selection for a component.
   * See also the Java API oracle.adfmf.amx.event.SelectionEvent.
   * @param {Object} oldRowKey the rowKey that has just been unselected
   * @param {Array<Object>} selectedRowKeys the array of rowKeys that have just been selected.
   * @constructor
   */
  adf.mf.api.amx.SelectionEvent = function(oldRowKey, selectedRowKeys)
  {
    this.oldRowKey = oldRowKey;
    this.selectedRowKeys = selectedRowKeys;
    this[".type"] = "oracle.adfmf.amx.event.SelectionEvent";
  };
  amx.SelectionEvent = adf.mf.api.amx.SelectionEvent; // deprecated syntax

  /**
   * An event for changes of value for a component.
   * See also the Java API oracle.adfmf.amx.event.ValueChangeEvent.
   * @param {Object} oldValue the previous value of the component.
   * @param {Object} newValue the new value of the component.
   * @constructor
   */
  adf.mf.api.amx.ValueChangeEvent = function(oldValue, newValue)
  {
    this.oldValue = oldValue;
    this.newValue = newValue;
    this[".type"] = "oracle.adfmf.amx.event.ValueChangeEvent";
  };
  amx.ValueChangeEvent = adf.mf.api.amx.ValueChangeEvent; // deprecated syntax

  /**
   * An event for range changes for a component (e.g. load more rows in listView).
   * See also the Java API oracle.adfmf.amx.event.RangeChangeEvent.
   * @param {string} eventSourceId the source ID of the event
   * @param {string} contextFreeValue the context-free value expression or null if not available
   * @param {Object} lastLoadedRowKey the row key of the last row loaded before the requested range or null if not available
   * @param {number} fetchSize the size to fetch or null if not available
   * @constructor
   */
  adf.mf.api.amx.RangeChangeEvent = function(
    eventSourceId,
    contextFreeValue,
    lastLoadedRowKey,
    fetchSize)
  {
    this.eventSourceId = eventSourceId;
    this.contextFreeValue = contextFreeValue;
    this.lastLoadedRowKey = lastLoadedRowKey;
    this.fetchSize = fetchSize;
    this[".type"] = "oracle.adfmf.amx.event.RangeChangeEvent";
    // Consider using: this[".type"] = "oracle.adfmf.framework.event.RangeChangeEvent";
  };

  /**
   * Process an AMX Event. Change the value if attributeValueName is defined, process the appropriate
   * setPropertyListener and actionListener sub tags and then process the [amxEventType]Listener attribute.
   * @param {adf.mf.api.amx.AmxNode} amxNode The node to process the event on.
   * @param {string} amxEventType String that represents the event type that triggered the call.
   * @param {string} attributeValueName The name of the attribute whose value will be changed (or undefined if not applicable).
   * @param {string} newValue The new value to be applied to the attribute sent in (or undefined if not applicable).
   * @param {Object} amxEvent The new AmxEvent being queued.
   * @param {Object} finishedCallback The optional function to invoke once the event has been processed.
   * @deprecated
   */
  amx.processAmxEvent = function(
    amxNode,
    amxEventType,
    attributeValueName,
    newValue,
    amxEvent,
    finishedCallback)
  {
    adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.WARNING, "processAmxEvent",
      "MSG_DEPRECATED", "amx.processAmxEvent", "amxNode.processAmxEvent");
    return adf.mf.api.amx.processAmxEvent(amxNode, amxEventType,
      attributeValueName, newValue, amxEvent, finishedCallback);
  };

  //adf.mf.internal.amx._useBatchProcessing = false;

  /**
   * Process an AMX Event. Change the value if attributeValueName is defined, process the
   * appropriate setPropertyListener and actionListener sub tags and then process the
   * [amxEventType]Listener attribute. For valueChange events, the attribute must have already
   * been registered on the node as the input value. Use getInputValueAttribute on the type handler
   * of the AMX node to return the attribute name that accepts the input value for which value
   * changes occur.
   *
   * @param {adf.mf.api.amx.AmxNode} amxNode The node to process the event on.
   * @param {string} amxEventType String that represents the event type that triggered the call.
   * @param {(string|undefined)} attributeValueName The name of the attribute whose value will be
   *        changed (or undefined if not applicable).
   * @param {(string|undefined)} newValue The new value to be applied to the attribute sent in
   *        (or undefined if not applicable).
   * @param {Object} amxEvent The new AmxEvent being queued.
   * @param {function=} successfulCallback An optional function to invoke once the event has been
   *        successfully processed.
   * @param {function=} failureCallback Optional callback function if the processing of the event
   *        fails
   */
  adf.mf.api.amx.processAmxEvent = function(
    amxNode,
    amxEventType,
    attributeValueName,
    newValue,
    amxEvent,
    successfulCallback,
    failureCallback)
  {
    // Show the loading indicator as this could take some time to process.
    adf.mf.api.amx.showLoadingIndicator();

    // Need a wrapper promise incase we are in design time and we will resolve this either in the else
    // or end of phase 4.
    var that = this;
    var promise = new adf.mf.internal.BasePromise(
      function(resolve, reject)
      {
        var currPage = amx.getCurrentPageName();
        var nodeId = amxNode.getId();

        adf.mf.internal.amx._pageBusyTracker.startOperation(
          true,
          "Process AMX event",
          adf.mf.log.level.INFO,
          "Time to process event",
          "Page: " + currPage + " event of type " + amxEventType + " on node " + nodeId);

        // No adf.mf.internal.amx._pageBusyTracker.checkComplete will be called from this method. This
        // allows any subsequent data change events to be tracked and included in the current operation

        if (adf.mf.api.amx.getPageRootNode() == null)
        {
          // Do not process any events after the page has been unloaded.
          // This may happen if an event kicks off a navigation and other events are still being
          // delivered.
          reject();
        }
        else
        {
          var funcType = adf.mf.internal.amx.processAmxEventImplSerial;

          if (adf.mf.environment.profile.useBatchProcessing && !adf.mf.environment.profile.mockData)
          {
            funcType = adf.mf.internal.amx.processAmxEventImplBatch;
          }

          adf.mf.internal.amx._queueCriticalSectionFunction(
            funcType,
            that,
            true,
            amxNode,
            amxEventType,
            attributeValueName,
            newValue,
            amxEvent,
            {
              "resolve": resolve,
              "reject": reject
            });
        }
      });

    if (successfulCallback != null)
    {
      promise.then(successfulCallback);
    }

    if (failureCallback != null)
    {
      promise["catch"](failureCallback);
    }

    // Hide the loading indicator once the event is fully done and the callbacks have been fired
    promise.then(adf.mf.api.amx.hideLoadingIndicator, adf.mf.api.amx.hideLoadingIndicator);

    return promise;
  };

  // TODO: this method is gross. We need to refactor it to fit into one screen and break out the internals into
  // several functions so that it is readable
  adf.mf.internal.amx.processAmxEventImplBatch = function(
    amxNode,
    amxEventType,
    attributeValueName,
    newValue,
    amxEvent,
    promiseArgs)
  {
    // Return a promise object to the critical section
    return new adf.mf.internal.BasePromise(
      function(batchResolve, batchReject)
      {
        // Perform a visit to the node to put it back into context
        // TODO: find a way to get context free EL for listener tags so that we do not need to
        // re-establish context
        var rootNode = adf.mf.api.amx.getPageRootNode();
        if (rootNode == null)
        {
          // Do not process any events after the page has been unloaded.
          // This may happen if an event kicks off a navigation and other events are still being
          // delivered.
          promiseArgs["reject"]();
          batchReject();
          return;
        }

        var perf = adf.mf.internal.perf.startMonitorCall("Process AMX batch",
          adf.mf.log.level.FINER, "adf.mf.internal.amx.processAmxEventImplBatch");

        // Check if the deprecated API is in use (passing the AMX node as a jQuery object with the
        // root DOM element)
        if (amxNode != null && amxNode.jquery)
        {
          adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.WARNING,
                "processAmxEventImplBatch", "MSG_AMX_EVENT_JQUERY_DEPRECATED");
          amxNode = amxNode.data("amxNode");
        }

        // We need to use visit pattern to set up the context for this node the event is attached to
        var nodeFound = rootNode.visit(
          new adf.mf.api.amx.VisitContext({ "amxNodes": [ amxNode ] }),
          function (visitContext, amxNode)
          {
            // This function is only called when the node has been found and the context setup.
            var validationGroup = null;
            var popupActions = [];

            if (!adf.mf.environment.profile.dtMode)
            {
              // Start the batch request. This is to prevent us from doing all the set property and
              // action event one at a time and instead process all all the children at once we
              // queue up all the EL that needs to be proccessed in order. Once
              // completed the flush will process all the EL in one round trip.
              adf.mf.util.startBatchRequest();

              adf.mf.internal.pushNonBlockingCall();

              // detect if we might need to refresh the validation message area
              if (amxEventType === "valueChange" &&
                attributeValueName === amxNode.__getAttributeToValidate())
              {
                // First find the closest rendered node for validation group purposes
                var domNode = null;
                var renderedAmxNode = amxNode.__getClosestRenderedNode();

                if (renderedAmxNode != null)
                {
                  domNode = document.getElementById(renderedAmxNode.getId());
                }

                // We need to retrieve this here because calling setElValue will cause this domNode
                // to potentially be swapped out with a new one if the control doesn't support the
                // refresh method
                validationGroup = _getClosestWithClass(domNode, "amx-validationGroup");
              }

              // If this is a value change event then we need to convert the new value first before
              // we continue to process.
              var converter = amxNode.getConverter();
              if (converter && amxEventType === "valueChange" && attributeValueName === "value")
              {
                var rawValue = newValue;

                newValue = converter.getAsObject(newValue);

                if (newValue === "" && rawValue !== "")
                {
                  // There was a conversion error, do not process the event
                  return adf.mf.api.amx.VisitResult["COMPLETE"];
                }
              }

              // Phase 1) Set the new value on the attribute. We need to first fetch the current
              //          value of the attribute (this has to be an EL Expression so we assume it is
              //          and let the setELValue figure out where it really needs to go. For our
              //          part we just get the value for this attribute that get returned and assume
              //          it is an EL expression for this attribute. This is  different from the
              //          rich client. First we know what the type (EL Expression or literal) and
              //          set the value immediatly if this is a literal. Once the "value" has been
              //          fetched for this attribute then the assumed EL expression and send off in
              //          another request for to be updated with the new value.

              // Make sure we have an attribute value name we are looking to update.
              if (attributeValueName)
              {
                // TODO: Need to change this into a non-promise call as we are in batch mode here.
                amxNode.setAttribute(attributeValueName, newValue);
              }

              // Phase 2) Process the setPropertyListeners and actionListeners of this node passed
              //          in. Since any component can have other types of components we are going to
              //          be looking for specific component types. We need to create a
              //          childrenPromise to make sure we can wait on this before we go to the next
              //          phase.
              // Get all the child tag instances from the AMX node.
              var tagInstances = amxNode.__getAllTagInstances();
              // Loop over all the children
              // Looking for one of five specific AMX tags here.
              //   1) setPropertyListener
              //   2) actionListener
              //   3) clientListener
              //   4) showPopupBehavior
              //   5) closePopupBehavior
              for (var i=0, length = tagInstances.length; i < length; i++)
              {
                var tagInstance = tagInstances[i];
                // Get the attribute type. If none is specified assume an action attribute.
                // TODO: Not sure thie assumption is correct as it assumes a type when none existis.
                //       I would expect a type would always be specified but because you are looking
                //       at AMX XML nodes we only see what is defined.
                var attrType;
                var type = tagInstance.getAttribute("type");
                if (type != null)
                {
                  attrType = adf.mf.internal._getEventTypeResolvedForBidi(type);
                }
                else
                {
                  // use default type
                  attrType = "action";
                }

                var subTag = tagInstance.getTag();

                if ((subTag.getNsPrefixedName() ===
                    adf.mf.api.amx.AmxTag.NAMESPACE_AMX + ":setPropertyListener") &&
                  attrType === amxEventType)
                {
                  // Get the from expression
                  var from = tagInstance.getAttributeExpression("from");
                  var isEl = false;
                  if (from)
                  {
                    from = from.toContextFreeExpression().getExpression();
                    isEl = true;
                  }
                  else
                  {
                    from = tagInstance.getAttribute("from", false);
                  }

                  if (from != null)
                  {
                    // Get a context free EL expression for the "to" so that we do not need to
                    // perform another visit to set the value
                    var toEl = tagInstance.getAttributeExpression("to").toContextFreeExpression();

                    // Set the value without trying to resolve the "from" value.
                    var setObject =
                    {
                      "name": toEl.getExpression(),
                      "expression": toEl,
                      "value": from
                    };

                    if (isEl)
                    {
                      // "from" is just a reference alias
                      setObject[adf.mf.internal.api.constants["VALUE_REF_PROPERTY"]] = true;
                    }

                    amx.setElValue(setObject);
                  }
                }
                else if (subTag.getNsPrefixedName() === adf.mf.api.amx.AmxTag.NAMESPACE_AMX +
                  ":actionListener")
                {
                  // Process the action listener tag if there is an amxEventType passed matches the
                  // attribute type.
                  if (attrType == amxEventType)
                  {
                    // Create the arrays of paramaters and and paramater types.
                    var params     = [];
                    var paramTypes = [];
                    if (amxEvent)
                    {
                      params.push(amxEvent);
                      paramTypes.push(amxEvent[".type"]);
                    }

                        // Invoke the action event. This returns a promise.
                    var expr = tagInstance.getAttributeExpression("binding");
                    adf.mf.api.amx.invokeEl(expr, params, null, paramTypes);
                  }
                }
                else if ((subTag.getNsPrefixedName() ===
                    adf.mf.api.amx.AmxTag.NAMESPACE_AMX + ":clientListener") &&
                  attrType === amxEventType)
                {
                  // Execute it:
                  adf.mf.internal._processClientListener(attrType, amxEvent, amxNode, tagInstance);
                }
                else if (subTag.getNsPrefixedName() === adf.mf.api.amx.AmxTag.NAMESPACE_AMX +
                  ":showPopupBehavior")
                {
                  // Process the show popup behavior tag if there is an amxEventType passed in
                  // matches the attribute type.
                  if (attrType === amxEventType)
                  {
                    popupActions.push(
                      { "type": "show", "node": amxNode, "tagInstance": tagInstance });
                  }
                }
                else if (subTag.getNsPrefixedName() === adf.mf.api.amx.AmxTag.NAMESPACE_AMX +
                  ":closePopupBehavior")
                {
                  // Process the close popup behavior tag if there is an amxEventType passed in
                  // matches the attribute type.
                  if (attrType === amxEventType)
                  {
                    popupActions.push({ "type": "close", "node": amxNode, "tagInstance": tagInstance });
                  }
                }
              }
              // Start of Phase 3.
              // Process the listener if there is an amxEvent passed in and we have a listener
              // attribute on the compoenent.
              if (amxEvent)
              {
                var attParams     = [];
                var attParamTypes = [];
                attParams.push(amxEvent);
                attParamTypes.push(amxEvent[".type"]);

                var el = amxNode.getAttributeExpression(amxEventType + "Listener");
                adf.mf.api.amx.invokeEl(el, attParams, null, attParamTypes);
              }

              var scb = function(request, response)
              {
                // Check if an exception was returned (the success callback is still invoked in
                // these cases, so this callback must process the presence of an exception)
                if (Array.isArray(response) && response.length >= 1)
                {
                  var rl = response.length;
                  for (var r=0; r < rl; r++)
                  {
                    var obj = response[r];
                    if (obj != null &&
                      obj[adf.mf.internal.api.constants.EXCEPTION_FLAG_PROPERTY] === true)
                    {
                      // Call the failure callback instead
                      fcb(request, response);
                      return;
                    }
                  }
                }

                // Have a call back from all the events being proccessed. Now need to go over the
                // popup stack and process them
                for (var j = 0, len = popupActions.length; j < len; j++)
                {
                  amxNode = popupActions[j]["node"];
                  var tagInstance = popupActions[j]["tagInstance"];
                  var type = popupActions[j]["type"];

                  // we want to show the popup
                  rootNode.visit(
                    new adf.mf.api.amx.VisitContext({ "amxNodes": [ amxNode ] }),
                    function (visitContext, amxNode)
                    {
                      // Invoke the show popup behavior. This returns a promise to the calling function.
                      if (type == "show")
                      {
                        amx.processShowPopupBehavior(amxNode, tagInstance);
                      }
                      else
                      {
                        amx.processClosePopupBehavior(amxNode, tagInstance);
                      }

                      return adf.mf.api.amx.VisitResult["COMPLETE"];
                    });
                }

                // Phase 4) Required Validations process the required validators. First we will wait
                //          for the previous phase to complete.
                // detect if we need to refresh the validation message area
                if (validationGroup !== undefined &&
                  adf.mf.api.amx.isValueTrue(amxNode.getAttribute("required")))
                {
                  // Due to the fact that we have been called back both by the setAttribute promise
                  // object as well as the serialResolve being used to iterate the children, we have
                  // lost the context of the amxNode. Use a visit to re-obtain the context so that
                  // iterating EL expressions may be correctly evaluated.
                  rootNode.visit(
                    new adf.mf.api.amx.VisitContext({ "amxNodes": [ amxNode ] }),
                    function (visitContext, amxNode)
                    {
                      // this is a required value, so refresh the messages for this group
                      // let the validation context know that this group has been modified
                      // this method is defined in amx-validation.js
                      amx.requiredControlValueChanged(validationGroup);

                      return adf.mf.api.amx.VisitResult["COMPLETE"];
                    });
                }

                // resolve the root promise
                promiseArgs["resolve"]();
                batchResolve();
                adf.mf.internal.popNonBlockingCall();
              };

              var fcb = function()
              {
                // resolve the root promise
                promiseArgs["reject"].apply(null, arguments);
                batchReject.apply(null, arguments);
                adf.mf.internal.popNonBlockingCall();
                // TODO: Need to do something here. Not sure what
              };

              // Done processing all the events in batch mode. Time to send them over to the java
              // side to be processed
              perf.stop();
              adf.mf.util.flushBatchRequest(false, [scb], [fcb]);
            }
            else
            {
              perf.stop();

              // if adf.mf.environment.profile.dtMode, just resolve the promise
              promiseArgs["resolve"]();
              batchResolve();
            }

            return adf.mf.api.amx.VisitResult["COMPLETE"];
          });

        if (nodeFound == false)
        {
          perf.stop();

          // This may happen if an AMX event is processed after a navigation takes place. If so,
          // then just resolve the promise and hide the loading indicator
          promiseArgs["reject"]();
          batchReject();
        }
      });
  };

  // TODO: this method is gross. We need to refactor it to fit into one screen and break out the internals into
  // several functions so that it is readable
  adf.mf.internal.amx.processAmxEventImplSerial = function(
    amxNode,
    amxEventType,
    attributeValueName,
    newValue,
    amxEvent,
    promiseArgs)
  {
    return new adf.mf.internal.BasePromise(
      function(serialPromiseResolve, serialPromiseReject)
      {
        // Perform a visit to the node to put it back into context
        // TODO: find a way to get context free EL for listener tags so that we do not need to re-establish context
        var rootNode = adf.mf.api.amx.getPageRootNode();
        if (rootNode == null)
        {
          // Do not process any events after the page has been unloaded.
          // This may happen if an event kicks off a navigation and other events are still being delivered.
          promiseArgs["reject"]();
          serialPromiseReject();
          return;
        }

        // Prevent any data change events from processing while the event is being processed.
        // This is necessary to stop the AMX node hierarchy from being modified as we are
        // processing the child tags and nodes of the target node. If we remove the target,
        // we are no longer able to setup context of the node using visiting.
        var perf = adf.mf.internal.perf.startMonitorCall("Process AMX event", adf.mf.log.level.FINER,
          "adf.mf.internal.amx.processAmxEventImplSerial");

        // Check if the deprecated API is in use (passing the AMX node as a jQuery object with the
        // root DOM element)
        if (amxNode != null && amxNode.jquery)
        {
          adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.WARNING,
            "processAmxEventImplSerial", "MSG_AMX_EVENT_JQUERY_DEPRECATED");
          amxNode = amxNode.data("amxNode");
        }

        // We need to use visit pattern to set up the context for this node the event is attached to.
        var nodeFound = rootNode.visit(
          new adf.mf.api.amx.VisitContext({ "amxNodes": [ amxNode ] }),
          function (visitContext, amxNode)
          {
            var validationGroup = null;
            if (!adf.mf.environment.profile.dtMode)
            {
              adf.mf.internal.pushNonBlockingCall();
              // detect if we might need to refresh the validation message area
              if (amxEventType === "valueChange" &&
                attributeValueName === amxNode.__getAttributeToValidate())
              {
                // First find the closest rendered node for validation group purposes
                var domNode = null;
                var renderedAmxNode = amxNode.__getClosestRenderedNode();
                if (renderedAmxNode != null)
                {
                  domNode = document.getElementById(renderedAmxNode.getId());
                }

                // we need to retrieve this here because calling setElValue will cause this domNode
                // to potentially be swapped out with a new one if the control doesn't support the
                // refresh method
                validationGroup = _getClosestWithClass(domNode, "amx-validationGroup");
              }

              // If this is a value change event then we need to convert the new value first before
              // we continue to process.
              if (amxNode.getConverter() && amxEventType === "valueChange" &&
                attributeValueName === "value")
              {
                newValue = amxNode.getConverter().getAsObject(newValue);
              }

              // Phase 1) Set the new value on the attribute. We need to first fetch the current
              //          value of the attribute (this has to be an EL Expression so we assume it is
              //          and let the setELValue figure out where it really needs to go. For our
              //          part we just get the value for this attribute that get returned and assume
              //          it is an EL expression for this attribute. This is  different from the
              //          rich client. First we know what the type (EL Expression or literal) and
              //          set the value immediatly if this is a literal. Once the "value" has been
              //          fetched for this attribute then the assumed EL expression and send off in
              //          another request for to be updated with the new value.
              // TODO: I do not know what this means for input values as they are most likly never
              //       EL bound. Another question is what does this mean for disclosure state? In
              //       the rich client EL driven disclosure state is only driven the first time it
              //       is evaluated and from then on it is controlled by the component (or the
              //       developer) who set the value in JS.

              // Need a new promise to represent when the set has completed. Since this can go to
              // Java that means this operation may happen asynchronously and we need to wait for it
              // to finish. This will be initialized later but we need this defined here for scoping
              // purposes as this is used below in the promise.all.
              var setValuePromise = [];

              // Make sure we have an attribute value name we are looking to update.
              if (attributeValueName)
              {
                setValuePromise.push(amxNode.setAttribute(attributeValueName, newValue));
              }

              // Wait for Phase 1 to complete.
              // Note: when setValuePromise is undefined, then, the promise.all will resolve
              // immediately (which is what we want).
              // Other wise we will continue to wait until the set value has completed.
              var childrenPromise = null;
              adf.mf.internal.BasePromise.all(setValuePromise)["catch"](
                function()
                {
                  // bug 16371894: setValuePromise failed so we abort further processing and reject
                  // childrenPromise
                  adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
                    "adf.mf.internal.amx.processAmxEventImplSerial",
                    "MSG_PROCESS_AMX_EVENT_SET_VALUE_REJECTED");

                  // For security purposes, only log at FINE level
                  if (adf.mf.log.Framework.isLoggable(adf.mf.log.level.FINE))
                  {
                    adf.mf.log.Framework.logp(adf.mf.log.level.FINE,
                      "adf.mf.internal.amx", "processAmxEventImplSerial",
                      "Value rejected: " + newValue);
                  }

                  childrenPromise = new adf.mf.internal.BasePromise(
                    function(resolve, reject)
                    {
                      reject();
                    });
                })
                .then(
                  function()
                  {
                    // Phase 2) Process the setPropertyListeners and actionListeners of this node
                    // passed in. Since any component can have other types of components we are
                    // going to be looking for specific component types. We need to create a
                    // childrenPromise to make sure we can wait on this before we go to the next
                    // phase.
                    // Get all the child tag instances from the AMX node.
                    var tagInstances = amxNode.__getAllTagInstances();

                    // Need a new promise variable as proccessing the child components action, set
                    // property, show popup, close popup behaviors may require calls into the Java
                    // engine and this will always be done Asynchronously.
                    if (tagInstances.length > 0)
                    {
                      // Restore the child variables if this is an iterator or stamped component.
                      // This is required in order to process the specific children in the same and
                      // have thier attribute EL or values. Call serialResolve on the chidlren and
                      // pass it the anonyos function to be applied to all the children.
                      // The returned promise will be used to make sure to wait on it before
                      // performing the next phase.
                      // TODO: Break this our into its own function. This should be a simple case
                      //       statement that calls the specific function for the type of component.
                      childrenPromise = amx.serialResolve(tagInstances,
                        function(tagInstance, i)
                        {
                          // Get the attribute type. If none is specified assume an action attribute
                          // TODO: Not sure thie assumption is correct as it assumes a type when
                          //       none exists. I would expect a type would always be specified but
                          //       because you are looking at AMX XML nodes we only see what is
                          //       defined.
                          var attrType;
                          if (tagInstance.getAttribute("type") != null)
                          {
                            attrType = adf.mf.internal._getEventTypeResolvedForBidi(
                              tagInstance.getAttribute("type"));
                          }
                          else
                          {
                            // use default type
                            attrType = "action";
                          }

                          var subTag = tagInstance.getTag();

                          // Looking for one of five specific AMX tags here.
                          //   1) setPropertyListener
                          //   2) actionListener
                          //   3) clientListener
                          //   4) showPopupBehavior
                          //   5) closePopupBehavior
                          // TODO: this code could explode as more behaviors are added. This needs
                          // to be broken out into a core behavior class that is subclassed by the
                          // specific behaviors. and then just call the function on the behavior.
                          // Maybe this should be an interface that we look for and then execute the
                          // function if it is defined.
                          if (subTag.getNsPrefixedName() ===
                              adf.mf.api.amx.AmxTag.NAMESPACE_AMX + ":setPropertyListener" &&
                            attrType === amxEventType)
                          {
                            // Need a new promise as set property listener has two phases. One to
                            // retrieve the data "from" and one to set the "to".
                            var propPromiseResolve = null;
                            var propPromise = new adf.mf.internal.BasePromise(
                              function(resolve, reject)
                              {
                                propPromiseResolve =
                                  function()
                                  {
                                    resolve();
                                  };
                              });

                            // Due to the fact that we have been called back both by the
                            // setAttribute promise object as well as the serialResolve being used
                            // to iterate the children, we have lost the context of the amxNode. Use
                            // a visit to re-obtain the context so that iterating EL expressions may
                            // be correctly evaluated.
                            var nestedVisitNodeFound = rootNode.visit(
                              new adf.mf.api.amx.VisitContext({ "amxNodes": [ amxNode ] }),
                              function (visitContext, amxNode)
                              {
                                // Get the from expression
                                var fromEL = tagInstance.getAttributeExpression("from");

                                if (fromEL)
                                {
                                  // Get a context free EL expression for the "to" so that we do not
                                  // need to perform another visit to set the value.
                                  var toEl = tagInstance.getAttributeExpression("to")
                                    .toContextFreeExpression();

                                  // Get the value and when it has been retieved the always function
                                  // will be invoked and this is where we will set the value we just
                                  // retrieved.
                                  var getAlways =
                                    function(requestAndResponse)
                                    {
                                      var response = requestAndResponse[1];

                                      // Have the new value now set it based on the EL binding for
                                      // the element
                                      amx.setElValue(
                                        {
                                          "name": toEl.getExpression(),
                                          "expression": toEl,
                                          "value": response[0].value
                                        }).then(propPromiseResolve, propPromiseResolve);
                                    };

                                  amx.getElValue(fromEL).then(getAlways, getAlways);
                                }
                                else
                                {
                                  var from = tagInstance.getAttribute("from", false);
                                  // Get a context free EL expression for the "to" so that we do not
                                  // need to perform another visit to set the value.
                                  var toEl = tagInstance.getAttributeExpression("to")
                                    .toContextFreeExpression();
                                  amx.setElValue(
                                    {
                                      "name": toEl.getExpression(),
                                      "expression": toEl,
                                      "value": from
                                    })
                                    .then(propPromiseResolve, propPromiseResolve);
                                }

                                return adf.mf.api.amx.VisitResult["COMPLETE"];
                              });

                            if (nestedVisitNodeFound == false)
                            {
                              // Resolve the promise if the node could no longer be found
                              propPromiseResolve();
                            }

                            // Return the promise to the calling function (This is within the
                            // amx.serialResolve). It needs this as it will wait for this to finish
                            // before going to the next child in the hiearchy.
                            return propPromise;
                          }
                          else if (subTag.getNsPrefixedName() ===
                              adf.mf.api.amx.AmxTag.NAMESPACE_AMX + ":actionListener")
                          {
                            // Process the action listener tag if there is an amxEventType passed
                            // matches the attribute type
                            if (attrType == amxEventType)
                            {
                              // Create the arrays of paramaters and and paramater types
                              var params     = [];
                              var paramTypes = [];

                              if (amxEvent)
                              {
                                params.push(amxEvent);
                                paramTypes.push(amxEvent[".type"]);
                              }

                              var actionListenerPromise = null;

                              // Due to the fact that we have been called back both by the
                              // setAttribute promise object as well as the serialResolve being used
                              // to iterate the children, we have lost the context of the amxNode.
                              // Use a visit to re-obtain the context so that iterating EL
                              // expressions may be correctly evaluated.
                              rootNode.visit(
                                new adf.mf.api.amx.VisitContext({ "amxNodes": [ amxNode ] }),
                                function (visitContext, amxNode)
                                {
                                  // Invoke the action event. This returns a promise.
                                  var expr = tagInstance.getAttribute("binding");
                                  actionListenerPromise = adf.mf.api.amx.invokeEl(
                                    expr,
                                    params,
                                    null,
                                    paramTypes);

                                  return adf.mf.api.amx.VisitResult["COMPLETE"];
                                });

                              return actionListenerPromise;
                            }
                            else
                            {
                              // Returning null allows any calling function to resolve immediately
                              return null;
                            }
                          }
                          else if (subTag.getNsPrefixedName() ===
                              adf.mf.api.amx.AmxTag.NAMESPACE_AMX + ":clientListener")
                          {
                            // Process the clientListener tag if there is an amxEventType passed in
                            // matches the attribute type
                            if (attrType === amxEventType)
                            {
                              // Due to the fact that we have been called back both by the
                              // setAttribute promise object as well as the serialResolve being used
                              // to iterate the children, we have lost the context of the amxNode.
                              // Use a visit to re-obtain the context so that iterating EL
                              // expressions may be correctly evaluated.
                              rootNode.visit(
                                new adf.mf.api.amx.VisitContext({ "amxNodes": [ amxNode ] }),
                                function (visitContext, amxNode)
                                {
                                  // Invoke the clientListener.
                                            adf.mf.internal._processClientListener(attrType, amxEvent,
                                              amxNode, tagInstance);
                                  return adf.mf.api.amx.VisitResult["COMPLETE"];
                                });

                              return null;
                            }
                            else
                            {
                              // Returning allows any calling function to resolve immediately
                              return null;
                            }
                          }
                          else if (subTag.getNsPrefixedName() ===
                              adf.mf.api.amx.AmxTag.NAMESPACE_AMX + ":showPopupBehavior")
                          {
                            // Process the show popup behavior tag if there is an amxEventType
                            // passed in matches the attribute type.
                            if (attrType === amxEventType)
                            {
                              var showPopupPromise = null;

                              // Due to the fact that we have been called back both by the
                              // setAttribute promise object as well as the serialResolve being used
                              // to iterate the children, we have lost the context of the amxNode.
                              // Use a visit to re-obtain the context so that iterating EL
                              // expressions may be correctly evaluated.
                              rootNode.visit(
                                new adf.mf.api.amx.VisitContext({ "amxNodes": [ amxNode ] }),
                                function (visitContext, amxNode)
                                {
                                  // Invoke the show popup behavior. This returns a promise to the calling function.
                                  showPopupPromise = amx.processShowPopupBehavior(amxNode, tagInstance);

                                  return adf.mf.api.amx.VisitResult["COMPLETE"];
                                });

                              return showPopupPromise;
                            }
                            else
                            {
                              // Returning null allows any calling function to resolve immediately
                              return null;
                            }
                          }
                          else if (subTag.getNsPrefixedName() ===
                              adf.mf.api.amx.AmxTag.NAMESPACE_AMX + ":closePopupBehavior")
                          {
                            // Process the close popup behavior tag if there is an amxEventType
                            // passed in matches the attribute type.
                            if (attrType === amxEventType)
                            {
                              var closePopupPromise = null;

                              // Due to the fact that we have been called back both by the
                              // setAttribute promise object as well as the serialResolve being used
                              // to iterate the children, we have lost the context of the amxNode.
                              // Use a visit to re-obtain the context so that iterating EL
                              // expressions may be correctly evaluated.
                              rootNode.visit(
                                new adf.mf.api.amx.VisitContext({ "amxNodes": [ amxNode ] }),
                                function (visitContext, amxNode)
                                {
                                  // Invoke the close popup behavior. This returns a promise to the
                                  // calling function.
                                  closePopupPromise = amx.processClosePopupBehavior(amxNode, tagInstance);

                                  return adf.mf.api.amx.VisitResult["COMPLETE"];
                                });

                              return closePopupPromise;
                          }
                          else
                          {
                            // Returning null allows any calling function to resolve immediately
                            return null;
                          }
                        }
                        else
                        {
                          // Returning null if there are no match to any tag (this is the catch
                          // all). This allows any calling function to resolve immediately.
                          return null;
                        }
                      });
                    }
                    else
                    {
                      // There are no children so we need to create an empty promise and resolve it.
                      // This is because we will be waiting on this before going to the next phase.
                      childrenPromise = new adf.mf.internal.BasePromise(
                        function(resolve, reject)
                        {
                          resolve();
                        });
                    }
                  });

              // Phase 3) process the listeners. First we will wait for the previous phase to finish
              // before we continue on. Need to create another promise for the listeners. This is
              // required to be able to wait for the this phase to complete.
              var listenerPromiseResolve = null;
              var listenerPromiseReject = null;
              var listenerPromise = new adf.mf.internal.BasePromise(
                function(resolve, reject)
                {
                  listenerPromiseResolve = resolve;
                  listenerPromiseReject = reject;
                });

              // Wait for phase 2 to complete.
              adf.mf.internal.BasePromise.all([childrenPromise])["catch"](
                function()
                {
                  // Bug 16371894: childrenPromise was rejected so we abort further processing and
                  // reject listenerPromise
                  adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
                    "adf.mf.internal.amx.processAmxEventImplSerial",
                    "MSG_PROCESS_AMX_EVENT_CHILDREN_REJECTED");
                  listenerPromiseReject();
                })
                .then(
                  function()
                  {
                    // Start of Phase 3.
                    // Process the listener if there is an amxEvent passed in.
                    if (amxEvent)
                    {
                      var params     = [];
                      var paramTypes = [];

                      params.push(amxEvent);
                      paramTypes.push(amxEvent[".type"]);

                      // Due to the fact that we have been called back both by the setAttribute
                      // promise object as well as the serialResolve being used to iterate the
                      // children, we have lost the context of the amxNode. Use a visit to re-obtain
                      // the context so that iterating EL expressions may be correctly evaluated.
                      var nestedVisitNodeFound = rootNode.visit(
                        new adf.mf.api.amx.VisitContext({ "amxNodes": [ amxNode ] }),
                        function (visitContext, amxNode)
                        {
                          var el = amxNode.getAttributeExpression(amxEventType + "Listener");

                          adf.mf.api.amx.invokeEl(
                            el,
                            params,
                            null,
                            paramTypes,
                            function()
                            {
                              listenerPromiseResolve();
                            },
                            function()
                            {
                              listenerPromiseResolve();
                            });

                          return adf.mf.api.amx.VisitResult["COMPLETE"];
                        });

                      if (nestedVisitNodeFound == false)
                      {
                        // Resolve the promise if the node could no longer be found
                        listenerPromiseResolve();
                      }
                    }
                    else
                    {
                      listenerPromiseResolve();
                    }
                  });

              // Phase 4) Required Validations process the required validators. First we will wait
              // for the previous phase to complete.
              adf.mf.internal.BasePromise.all([listenerPromise])["catch"](
                function()
                {
                  // bug 16371894: listenerPromise failed so skip validation.  We are done at this
                  // point so reject promise and clean up
                  adf.mf.log.logInfoResource("AMXInfoBundle", adf.mf.log.level.SEVERE,
                    "adf.mf.internal.amx.processAmxEventImplSerial",
                    "MSG_PROCESS_AMX_EVENT_LISTENERS_REJECTED");
                  perf.stop();
                  adf.mf.internal.popNonBlockingCall();

                  // reject the root promise
                  promiseArgs["reject"]();
                  serialPromiseReject();
              })
              .then(
                function()
                {
                  // detect if we need to refresh the validation message area
                  if (validationGroup !== undefined &&
                      adf.mf.api.amx.isValueTrue(amxNode.getAttribute("required")))
                  {
                    // Due to the fact that we have been called back both by the setAttribute
                    // promise object as well as the serialResolve being used to iterate the
                    // children, we have lost the context of the amxNode. Use a visit to re-obtain
                    // the context so that iterating EL expressions may be correctly evaluated.
                    rootNode.visit(
                      new adf.mf.api.amx.VisitContext({ "amxNodes": [ amxNode ] }),
                      function (visitContext, amxNode)
                      {
                        // this is a required value, so refresh the messages for this group
                        // let the validation context know that this group has been modified
                        // this method is defined in amx-validation.js
                        amx.requiredControlValueChanged(validationGroup);

                        return adf.mf.api.amx.VisitResult["COMPLETE"];
                      });
                  }

                  perf.stop();

                  // resolve the root promise
                  promiseArgs["resolve"]();
                  serialPromiseResolve();
                  adf.mf.internal.popNonBlockingCall();
                });
            }
            else
            {
              perf.stop();

              // If adf.mf.environment.profile.dtMode, just resolve the promise
              promiseArgs["resolve"]();
              serialPromiseResolve();
            }

            return adf.mf.api.amx.VisitResult["COMPLETE"];
          });

        if (nodeFound == false)
        {
          perf.stop();

          // This may happen if an AMX event is processed after a navigation takes place. If so,
          // then just resolve the promise and hide the loading indicator
          promiseArgs["reject"]();
          serialPromiseReject();
        }
      });
  };

  /**
   * Internal function to invoke a clientListener.
   * @param {string} type the event type that occurred
   * @param {Object} amxEvent the AMX event that occurred
   * @param {adf.mf.api.amx.AmxNode} amxNode the AMX node of the component that triggered the event
   * @param {adf.mf.internal.amx.AmxTagInstance} clientListenerTagInstance the AMX tag instance of
   *  the clientListener
   */
  adf.mf.internal._processClientListener = function(
    type,
    amxEvent,
    amxNode,
    clientListenerTagInstance)
  {
    var method = clientListenerTagInstance.getAttribute("method");

    if (method != null && method.length > 0)
    {
      try
      {
        // Produce the client event object by copying over the AMX event properties to it.
        var timeStamp = (new Date()).getTime();
        var clientEvent =
        {
          "toString": function()
          {
            var result = "oracle.adfmf.amx.event.ClientEvent{ ";

            // Always start with these properties (in this order):

            // The ID of the AMX Node
            var value = clientEvent["amxNodeId"];
            if (value != null)
              result += "amxNodeId:\"" + value + "\"";
            else
            {
              value = clientEvent["amxNode"];
              if (value != null && value.getId)
                result += "amxNode.getId():\"" + value.getId() + "\"";
              else
                result += "(no amxNode.getId)";
            }

            // The type
            value = clientEvent["type"];
            if (value != null)
              result += ", type:\"" + clientEvent["type"] + "\"";

            // The timeStamp
            value = clientEvent["timeStamp"];
            if (value != null)
              result += ", timeStamp:\"" + clientEvent["timeStamp"] + "\"";

            // Print the rest of the properties (order not guaranteed):
            for (var key in clientEvent)
            {
              if (key != "amxNodeId" && key != "type" && key != "timeStamp")
              {
                value = clientEvent[key];
                var valueType = typeof value;
                if (valueType != "function")
                {
                  result += ", " + key + ":";
                  if (valueType == "string")
                    result += "\"";
                  result += value;
                  if (valueType == "string")
                    result += "\"";
                }
              }
            }

            result += " }";
            return result;
          }
        };

        for (var key in amxEvent)
        {
          clientEvent[key] = amxEvent[key];
        }

        // Add some additional properties if they don't overwrite ones of the same name from the
        // AMX event.
        if (clientEvent["type"] === undefined)
          clientEvent["type"] = type;

        if (clientEvent["amxNode"] === undefined)
          clientEvent["amxNode"] = amxNode;

        if (clientEvent["timeStamp"] === undefined)
          clientEvent["timeStamp"] = timeStamp;

        // Invoke the clientListener's method as a function.
        // If it is not already a function (e.g. a use case for MAX) then we
        // need to sandbox-convert it to a function via new Function:
        if (typeof method != "function")
          method = (new Function("return " + method))();

        method(clientEvent);
      }
      catch (problem)
      {
        var message = "Problem with clientListener type=\"" + type + "\" method=\"" + method + "\":\n\n";
        alert(message + problem);
      }
    }
  };

  /**
   * Internal function to convert bidi types so both bidi and non-bidi equivalents are handled
   * with the same event.
   * @param {string} rawEventType the application developer-specified event type
   * @return {string} the resolved direction-explicit event type
   * @private
   */
  adf.mf.internal._getEventTypeResolvedForBidi = function(rawEventType)
  {
    var resolvedEventType = rawEventType;
    if (resolvedEventType == "swipeStart")
    {
      if (document.documentElement.dir == "rtl")
        resolvedEventType = "swipeRight";
      else
        resolvedEventType = "swipeLeft";
    }
    else if (resolvedEventType == "swipeEnd")
    {
      if (document.documentElement.dir == "rtl")
        resolvedEventType = "swipeLeft";
      else
        resolvedEventType = "swipeRight";
    }
    return resolvedEventType;
  };
})();
