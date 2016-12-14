(function($dvt$$7$$) {
  function $DvtOverviewEventManager$$($dvt$$7$$) {
    this.Init($dvt$$7$$.$getCtx$(), $dvt$$7$$.$processEvent$, $dvt$$7$$);
    this.$_overview$ = $dvt$$7$$;
  }
  function $DvtOverviewParser$$($dvt$$7$$) {
    this.Init($dvt$$7$$);
  }
  $dvt$$7$$.$OverviewUtils$ = {};
  $dvt$$7$$.$OverviewUtils$.$supportsTouch$ = function $$dvt$$7$$$$OverviewUtils$$$supportsTouch$$() {
    return $dvt$$7$$.$Agent$.$isTouchDevice$();
  };
  $dvt$$7$$.$Obj$.$createSubclass$($dvt$$7$$.$OverviewUtils$, $dvt$$7$$.$Obj$);
  $dvt$$7$$.$OverviewUtils$.$getDatePosition$ = function $$dvt$$7$$$$OverviewUtils$$$getDatePosition$$($dvt$$7$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $width$$100$$) {
    $DvtOverviewParser$$ = ($DvtOverviewParser$$ - $dvt$$7$$) * $width$$100$$;
    $dvt$$7$$ = $DvtOverviewEventManager$$ - $dvt$$7$$;
    return 0 == $DvtOverviewParser$$ || 0 == $dvt$$7$$ ? 0 : $DvtOverviewParser$$ / $dvt$$7$$;
  };
  $dvt$$7$$.$OverviewUtils$.$getPositionDate$ = function $$dvt$$7$$$$OverviewUtils$$$getPositionDate$$($dvt$$7$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $width$$101$$) {
    $DvtOverviewEventManager$$ = $DvtOverviewParser$$ * ($DvtOverviewEventManager$$ - $dvt$$7$$);
    return 0 == $DvtOverviewEventManager$$ || 0 == $width$$101$$ ? $dvt$$7$$ : $DvtOverviewEventManager$$ / $width$$101$$ + $dvt$$7$$;
  };
  $dvt$$7$$.$Overview$ = function $$dvt$$7$$$$Overview$$($dvt$$7$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.Init($dvt$$7$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$);
  };
  $dvt$$7$$.$Obj$.$createSubclass$($dvt$$7$$.$Overview$, $dvt$$7$$.$Container$);
  $dvt$$7$$.$Overview$.$MIN_WINDOW_SIZE$ = 10;
  $dvt$$7$$.$Overview$.$DEFAULT_VERTICAL_TIMEAXIS_SIZE$ = 40;
  $dvt$$7$$.$Overview$.$DEFAULT_HORIZONTAL_TIMEAXIS_SIZE$ = 20;
  $dvt$$7$$.$Overview$.$HANDLE_PADDING_SIZE$ = 20;
  $dvt$$7$$.$Overview$.$_DEFAULT_AXIS_LABEL_PADDING$ = 5;
  $dvt$$7$$.$Overview$.$_DEFAULT_WINDOW_BORDER_WIDTH$ = 1;
  $dvt$$7$$.$Overview$.prototype.Init = function $$dvt$$7$$$$Overview$$$Init$($DvtOverviewParser$$, $callback$$138$$, $callbackObj$$63$$) {
    $dvt$$7$$.$Overview$.$superclass$.Init.call(this, $DvtOverviewParser$$);
    this.$_callback$ = $callback$$138$$;
    this.$_callbackObj$ = $callbackObj$$63$$;
    this.$_lastChildIndex$ = this.$isFlashEnvironment$() ? 7 : 6;
    if (null != this.$_callback$ || null != this.$_callbackObj$) {
      this.$EventManager$ = new $DvtOverviewEventManager$$(this), this.$EventManager$.$addListeners$(this), $dvt$$7$$.$OverviewUtils$.$supportsTouch$() ? (this.$addEvtListener$($dvt$$7$$.TouchEvent.$TOUCHSTART$, this.$HandleTouchStart$, !1, this), this.$addEvtListener$($dvt$$7$$.TouchEvent.$TOUCHMOVE$, this.$HandleTouchMove$, !1, this), this.$addEvtListener$($dvt$$7$$.TouchEvent.$TOUCHEND$, this.$HandleTouchEnd$, !1, this), this.$addEvtListener$($dvt$$7$$.MouseEvent.$CLICK$, this.$HandleShapeClick$, 
      !1, this)) : (this.$addEvtListener$($dvt$$7$$.MouseEvent.$MOUSEOVER$, this.$HandleShapeMouseOver$, !1, this), this.$addEvtListener$($dvt$$7$$.MouseEvent.$MOUSEOUT$, this.$HandleShapeMouseOut$, !1, this), this.$addEvtListener$($dvt$$7$$.MouseEvent.$CLICK$, this.$HandleShapeClick$, !1, this), this.$addEvtListener$($dvt$$7$$.KeyboardEvent.$KEYDOWN$, this.$HandleKeyDown$, !1, this), this.$addEvtListener$($dvt$$7$$.KeyboardEvent.$KEYUP$, this.$HandleKeyUp$, !1, this));
    }
    this.$_initPos$ = 0;
  };
  $dvt$$7$$.$Overview$.prototype.$setViewportRange$ = function $$dvt$$7$$$$Overview$$$$setViewportRange$$($dvt$$7$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    null == $DvtOverviewParser$$ && ($DvtOverviewParser$$ = this.$Width$);
    $dvt$$7$$ = this.$getDatePosition$($dvt$$7$$);
    var $slidingWindow_viewportEnd$$ = this.$getDatePosition$($DvtOverviewEventManager$$);
    $dvt$$7$$ < this.$_leftMargin$ || $slidingWindow_viewportEnd$$ > this.$getMaximumPosition$() || ($DvtOverviewEventManager$$ = Math.max($slidingWindow_viewportEnd$$ - $dvt$$7$$, this.$getMinimumWindowSize$()), 0 < $DvtOverviewEventManager$$ && 0 <= $dvt$$7$$ && $slidingWindow_viewportEnd$$ <= $DvtOverviewParser$$ && ($slidingWindow_viewportEnd$$ = this.$getSlidingWindow$(), this.$isHorizontalRTL$() ? this.$setSlidingWindowPos$($slidingWindow_viewportEnd$$, $DvtOverviewParser$$ - ($dvt$$7$$ + $DvtOverviewEventManager$$)) : 
    this.$setSlidingWindowPos$($slidingWindow_viewportEnd$$, $dvt$$7$$), this.$setSlidingWindowSize$($slidingWindow_viewportEnd$$, $DvtOverviewEventManager$$), this.$ScrollTimeAxis$()));
  };
  $dvt$$7$$.$Overview$.prototype.$isFeatureOff$ = function $$dvt$$7$$$$Overview$$$$isFeatureOff$$() {
    return null == this.$_featuresOff$ ? !1 : -1 != $dvt$$7$$.$ArrayUtils$.$getIndex$(this.$_featuresOff$, "zoom");
  };
  $dvt$$7$$.$Overview$.prototype.$isAnimationOnClick$ = function $$dvt$$7$$$$Overview$$$$isAnimationOnClick$$() {
    return "off" !== this.$_animationOnClick$;
  };
  $dvt$$7$$.$Overview$.prototype.$render$ = function $$dvt$$7$$$$Overview$$$$render$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $height$$86$$) {
    if (null == $DvtOverviewEventManager$$) {
      var $start$$39$$ = this.$_start$, $end$$21$$ = this.$_end$, $slidingWindow$$1$$ = this.$getSlidingWindow$(), $slidingWindowPos$$ = this.$getSlidingWindowPos$($slidingWindow$$1$$);
      null != $slidingWindow$$1$$ && 0 != $slidingWindowPos$$ && (this.$_renderStart$ = $dvt$$7$$.$OverviewUtils$.$getPositionDate$($start$$39$$, $end$$21$$, $slidingWindowPos$$, this.$Width$));
      this.$removeChildren$();
    }
    null != $DvtOverviewParser$$ && null != $height$$86$$ && (this.$Width$ = $DvtOverviewParser$$, this.$Height$ = $height$$86$$);
    $DvtOverviewEventManager$$ && ($DvtOverviewEventManager$$ = this.$Parse$($DvtOverviewEventManager$$), this.$_applyParsedProperties$($DvtOverviewEventManager$$));
    $DvtOverviewEventManager$$ = null != this.$_callback$ || null != this.$_callbackObj$;
    this.$createBackground$($DvtOverviewParser$$, $height$$86$$);
    $DvtOverviewEventManager$$ && this.$createSlidingWindow$($DvtOverviewParser$$, $height$$86$$);
    this.$updateTimeAxis$($DvtOverviewParser$$, $height$$86$$);
    this.$parseFilledTimeRanges$($DvtOverviewParser$$, $height$$86$$);
    this.$updateCurrentTime$($DvtOverviewParser$$, $height$$86$$);
    this.$parseDataXML$($DvtOverviewParser$$, $height$$86$$);
    $DvtOverviewEventManager$$ && (this.$createBorderAroundSlidingWindow$($DvtOverviewParser$$, $height$$86$$), this.$isFlashEnvironment$() && (this.$_resizeArrow$ = this.$createResizeArrow$()), this.$updateSlidingWindow$());
    null != this.$_initialFocusTime$ && (this.$_initPos$ = Math.max(0, $dvt$$7$$.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, this.$_initialFocusTime$, this.$_width$)));
    0 < this.$_initPos$ && this.$longScrollToPos$(this.$_initPos$);
  };
  $dvt$$7$$.$Overview$.prototype.$getParser$ = function $$dvt$$7$$$$Overview$$$$getParser$$() {
    return new $DvtOverviewParser$$(this);
  };
  $dvt$$7$$.$Overview$.prototype.$Parse$ = function $$dvt$$7$$$$Overview$$$$Parse$$($dvt$$7$$) {
    return this.$getParser$($dvt$$7$$).parse($dvt$$7$$);
  };
  $dvt$$7$$.$Overview$.prototype.$_applyParsedProperties$ = function $$dvt$$7$$$$Overview$$$$_applyParsedProperties$$($dvt$$7$$) {
    this.$_start$ = $dvt$$7$$.start;
    this.$_end$ = $dvt$$7$$.end;
    this.$_width$ = $dvt$$7$$.width;
    this.$_renderStart$ = $dvt$$7$$.$renderStart$;
    this.$_currentTime$ = $dvt$$7$$.currentTime;
    this.$_initialFocusTime$ = $dvt$$7$$.$initialFocusTime$;
    this.$_animationOnClick$ = $dvt$$7$$.$animationOnClick$;
    this.$_leftMargin$ = Math.max(0, $dvt$$7$$.$leftMargin$);
    this.$_rightMargin$ = Math.max(0, $dvt$$7$$.$rightMargin$);
    isNaN(this.$_leftMargin$) && (this.$_leftMargin$ = 0);
    isNaN(this.$_rightMargin$) && (this.$_rightMargin$ = 0);
    this.$_orientation$ = $dvt$$7$$.orientation;
    this.$_overviewPosition$ = $dvt$$7$$.$overviewPosition$;
    this.$_isRtl$ = $dvt$$7$$.$isRtl$;
    null != $dvt$$7$$.$featuresOff$ && (this.$_featuresOff$ = $dvt$$7$$.$featuresOff$.split(" "));
    null != $dvt$$7$$.$minimumWindowSize$ && 0 < $dvt$$7$$.$minimumWindowSize$ && (this.$_minimumWindowSize$ = $dvt$$7$$.$minimumWindowSize$);
    this.$_borderStyles$ = $dvt$$7$$.$borderStyles$;
    this.$_timeAxisInfo$ = $dvt$$7$$.$timeAxisInfo$;
    null != $dvt$$7$$.$timeAxisInfo$ && (this.$_ticks$ = this.$_timeAxisInfo$.$ticks$);
    this.$_formattedTimeRanges$ = $dvt$$7$$.$formattedTimeRanges$;
    this.$_borderTopStyle$ = $dvt$$7$$.borderTopStyle;
    this.$_borderTopColor$ = $dvt$$7$$.borderTopColor;
    this.$_windowBackgroundColor$ = $dvt$$7$$.$windowBackgroundColor$;
    this.$_windowBackgroundAlpha$ = $dvt$$7$$.$windowBackgroundAlpha$;
    this.$_windowBorderTopStyle$ = $dvt$$7$$.$windowBorderTopStyle$;
    this.$_windowBorderRightStyle$ = $dvt$$7$$.$windowBorderRightStyle$;
    this.$_windowBorderBottomStyle$ = $dvt$$7$$.$windowBorderBottomStyle$;
    this.$_windowBorderLeftStyle$ = $dvt$$7$$.$windowBorderLeftStyle$;
    this.$_windowBorderTopColor$ = $dvt$$7$$.$windowBorderTopColor$;
    this.$_windowBorderRightColor$ = $dvt$$7$$.$windowBorderRightColor$;
    this.$_windowBorderBottomColor$ = $dvt$$7$$.$windowBorderBottomColor$;
    this.$_windowBorderLeftColor$ = $dvt$$7$$.$windowBorderLeftColor$;
    this.$_handleTextureColor$ = $dvt$$7$$.$handleTextureColor$;
    this.$_handleFillColor$ = $dvt$$7$$.$handleFillColor$;
    this.$_handleBackgroundImage$ = $dvt$$7$$.$handleBackgroundImage$;
    this.$_handleWidth$ = $dvt$$7$$.$handleWidth$;
    this.$_handleHeight$ = $dvt$$7$$.$handleHeight$;
    this.$_overviewBackgroundColor$ = $dvt$$7$$.$overviewBackgroundColor$;
    this.$_currentTimeIndicatorColor$ = $dvt$$7$$.$currentTimeIndicatorColor$;
    this.$_timeIndicatorColor$ = $dvt$$7$$.$timeIndicatorColor$;
    this.$_timeAxisBarColor$ = $dvt$$7$$.$timeAxisBarColor$;
    this.$_timeAxisBarOpacity$ = $dvt$$7$$.$timeAxisBarOpacity$;
    this.$_leftFilterPanelColor$ = $dvt$$7$$.$leftFilterPanelColor$;
    this.$_leftFilterPanelAlpha$ = $dvt$$7$$.$leftFilterPanelAlpha$;
    this.$_rightFilterPanelColor$ = $dvt$$7$$.$rightFilterPanelColor$;
    this.$_rightFilterPanelAlpha$ = $dvt$$7$$.$rightFilterPanelAlpha$;
  };
  $dvt$$7$$.$Overview$.prototype.$getDatePosition$ = function $$dvt$$7$$$$Overview$$$$getDatePosition$$($DvtOverviewEventManager$$) {
    return Math.max(0, $dvt$$7$$.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, $DvtOverviewEventManager$$, this.$getOverviewSize$())) + this.$_leftMargin$;
  };
  $dvt$$7$$.$Overview$.prototype.$getPositionDate$ = function $$dvt$$7$$$$Overview$$$$getPositionDate$$($DvtOverviewEventManager$$) {
    return $dvt$$7$$.$OverviewUtils$.$getPositionDate$(this.$_start$, this.$_end$, Math.max(0, $DvtOverviewEventManager$$ - this.$_leftMargin$), this.$getOverviewSize$());
  };
  $dvt$$7$$.$Overview$.prototype.$isRTL$ = function $$dvt$$7$$$$Overview$$$$isRTL$$() {
    return "true" == this.$_isRtl$;
  };
  $dvt$$7$$.$Overview$.prototype.$isHorizontalRTL$ = function $$dvt$$7$$$$Overview$$$$isHorizontalRTL$$() {
    return this.$isRTL$() && !this.$isVertical$();
  };
  $dvt$$7$$.$Overview$.prototype.$isVertical$ = function $$dvt$$7$$$$Overview$$$$isVertical$$() {
    return "vertical" == this.$_orientation$;
  };
  $dvt$$7$$.$Overview$.prototype.$isOverviewAbove$ = function $$dvt$$7$$$$Overview$$$$isOverviewAbove$$() {
    return "above" == this.$_overviewPosition$;
  };
  $dvt$$7$$.$Overview$.prototype.$getOverviewSize$ = function $$dvt$$7$$$$Overview$$$$getOverviewSize$$() {
    return this.$isVertical$() ? this.$Height$ - this.$_leftMargin$ - this.$_rightMargin$ : this.$Width$ - this.$_leftMargin$ - this.$_rightMargin$;
  };
  $dvt$$7$$.$Overview$.prototype.$getMaximumPosition$ = function $$dvt$$7$$$$Overview$$$$getMaximumPosition$$() {
    return this.$isVertical$() ? this.$Height$ - this.$_rightMargin$ : this.$Width$ - this.$_rightMargin$;
  };
  $dvt$$7$$.$Overview$.prototype.$getMinimumWindowSize$ = function $$dvt$$7$$$$Overview$$$$getMinimumWindowSize$$() {
    return null != this.$_minWinSize$ ? this.$_minWinSize$ : null != this.$_minimumWindowSize$ ? this.$_minWinSize$ = $dvt$$7$$.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, this.$_start$ + this.$_minimumWindowSize$, this.$getOverviewSize$()) : $dvt$$7$$.$Overview$.$MIN_WINDOW_SIZE$;
  };
  $dvt$$7$$.$Overview$.prototype.$getHandleStart$ = function $$dvt$$7$$$$Overview$$$$getHandleStart$$() {
    return $dvt$$7$$.$OverviewUtils$.$supportsTouch$() ? this.$getHandleSize$() / 2 : 0;
  };
  $dvt$$7$$.$Overview$.prototype.$getHandleSize$ = function $$dvt$$7$$$$Overview$$$$getHandleSize$$() {
    return $dvt$$7$$.$OverviewUtils$.$supportsTouch$() ? 30 : 10;
  };
  $dvt$$7$$.$Overview$.prototype.$isHandle$ = function $$dvt$$7$$$$Overview$$$$isHandle$$($dvt$$7$$) {
    var $DvtOverviewEventManager$$ = $dvt$$7$$.getId();
    return "lh" == $DvtOverviewEventManager$$ || "rh" == $DvtOverviewEventManager$$ || "lhb" == $DvtOverviewEventManager$$ || "rhb" == $DvtOverviewEventManager$$ || "grpy" == $DvtOverviewEventManager$$ || "lbgrh" == $DvtOverviewEventManager$$ || "rbgrh" == $DvtOverviewEventManager$$ || null != $dvt$$7$$.getParent() && "grpy" == $dvt$$7$$.getParent().getId();
  };
  $dvt$$7$$.$Overview$.prototype.$getTimeAxisWidth$ = function $$dvt$$7$$$$Overview$$$$getTimeAxisWidth$$() {
    if (null == this.$_timeAxisInfo$) {
      return 0;
    }
    if (null == this.$_timeAxisWidth$) {
      var $DvtOverviewEventManager$$ = parseInt(this.$_timeAxisInfo$.width, 10);
      this.$_timeAxisWidth$ = !isNaN($DvtOverviewEventManager$$) && $DvtOverviewEventManager$$ < this.$Width$ ? $DvtOverviewEventManager$$ : $dvt$$7$$.$Overview$.$DEFAULT_VERTICAL_TIMEAXIS_SIZE$;
    }
    return this.$_timeAxisWidth$;
  };
  $dvt$$7$$.$Overview$.prototype.$getTimeAxisHeight$ = function $$dvt$$7$$$$Overview$$$$getTimeAxisHeight$$() {
    if (null == this.$_timeAxisInfo$) {
      return 0;
    }
    if (null == this.$_timeAxisHeight$) {
      var $DvtOverviewEventManager$$ = parseInt(this.$_timeAxisInfo$.height, 10);
      this.$_timeAxisHeight$ = !isNaN($DvtOverviewEventManager$$) && $DvtOverviewEventManager$$ < this.$Height$ ? $DvtOverviewEventManager$$ : $dvt$$7$$.$Overview$.$DEFAULT_HORIZONTAL_TIMEAXIS_SIZE$;
    }
    return this.$_timeAxisHeight$;
  };
  $dvt$$7$$.$Overview$.prototype.$getPageX$ = function $$dvt$$7$$$$Overview$$$$getPageX$$($DvtOverviewEventManager$$) {
    return $dvt$$7$$.$OverviewUtils$.$supportsTouch$() && null != $DvtOverviewEventManager$$.targetTouches ? 0 < $DvtOverviewEventManager$$.targetTouches.length ? $DvtOverviewEventManager$$.targetTouches[0].pageX : null : $DvtOverviewEventManager$$.pageX;
  };
  $dvt$$7$$.$Overview$.prototype.$getPageY$ = function $$dvt$$7$$$$Overview$$$$getPageY$$($DvtOverviewEventManager$$) {
    return $dvt$$7$$.$OverviewUtils$.$supportsTouch$() && null != $DvtOverviewEventManager$$.targetTouches ? 0 < $DvtOverviewEventManager$$.targetTouches.length ? $DvtOverviewEventManager$$.targetTouches[0].pageY : null : $DvtOverviewEventManager$$.pageY;
  };
  $dvt$$7$$.$Overview$.prototype.$isLeftAndRightFilterRendered$ = function $$dvt$$7$$$$Overview$$$$isLeftAndRightFilterRendered$$() {
    return !1;
  };
  $dvt$$7$$.$Overview$.prototype.$getSlidingWindow$ = function $$dvt$$7$$$$Overview$$$$getSlidingWindow$$() {
    return this.$getChildAt$(1);
  };
  $dvt$$7$$.$Overview$.prototype.$getLeftBackground$ = function $$dvt$$7$$$$Overview$$$$getLeftBackground$$() {
    return this.$isLeftAndRightFilterRendered$() ? this.$getChildAt$(3) : null;
  };
  $dvt$$7$$.$Overview$.prototype.$getRightBackground$ = function $$dvt$$7$$$$Overview$$$$getRightBackground$$() {
    return this.$isLeftAndRightFilterRendered$() ? this.$getChildAt$(4) : null;
  };
  $dvt$$7$$.$Overview$.prototype.$getLeftBackgroundHandle$ = function $$dvt$$7$$$$Overview$$$$getLeftBackgroundHandle$$() {
    return this.$isLeftAndRightFilterRendered$() && !this.$isFeatureOff$() ? this.$getChildAt$(5) : null;
  };
  $dvt$$7$$.$Overview$.prototype.$getRightBackgroundHandle$ = function $$dvt$$7$$$$Overview$$$$getRightBackgroundHandle$$() {
    return this.$isLeftAndRightFilterRendered$() && !this.$isFeatureOff$() ? this.$getChildAt$(6) : null;
  };
  $dvt$$7$$.$Overview$.prototype.$getLeftHandle$ = function $$dvt$$7$$$$Overview$$$$getLeftHandle$$() {
    return this.$getChildAt$(this.$getNumChildren$() - this.$_lastChildIndex$);
  };
  $dvt$$7$$.$Overview$.prototype.$getRightHandle$ = function $$dvt$$7$$$$Overview$$$$getRightHandle$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 1));
  };
  $dvt$$7$$.$Overview$.prototype.$getLeftTopBar$ = function $$dvt$$7$$$$Overview$$$$getLeftTopBar$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 2));
  };
  $dvt$$7$$.$Overview$.prototype.$getRightTopBar$ = function $$dvt$$7$$$$Overview$$$$getRightTopBar$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 3));
  };
  $dvt$$7$$.$Overview$.prototype.$getBottomBar$ = function $$dvt$$7$$$$Overview$$$$getBottomBar$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 4));
  };
  $dvt$$7$$.$Overview$.prototype.$getTopBar$ = function $$dvt$$7$$$$Overview$$$$getTopBar$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 5));
  };
  $dvt$$7$$.$Overview$.prototype.$setLinePos$ = function $$dvt$$7$$$$Overview$$$$setLinePos$$($dvt$$7$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$isVertical$() ? (-1 != $DvtOverviewEventManager$$ && $dvt$$7$$.$setY1$($DvtOverviewEventManager$$), -1 != $DvtOverviewParser$$ && $dvt$$7$$.$setY2$($DvtOverviewParser$$)) : (-1 != $DvtOverviewEventManager$$ && $dvt$$7$$.$setX1$($DvtOverviewEventManager$$), -1 != $DvtOverviewParser$$ && $dvt$$7$$.$setX2$($DvtOverviewParser$$));
  };
  $dvt$$7$$.$Overview$.prototype.$getLinePos1$ = function $$dvt$$7$$$$Overview$$$$getLinePos1$$($dvt$$7$$) {
    return this.$isVertical$() ? $dvt$$7$$.$getY1$() : $dvt$$7$$.$getX1$();
  };
  $dvt$$7$$.$Overview$.prototype.$_findDrawable$ = function $$dvt$$7$$$$Overview$$$$_findDrawable$$($dvt$$7$$) {
    $dvt$$7$$ = $dvt$$7$$.target;
    if (null != $dvt$$7$$) {
      var $DvtOverviewEventManager$$ = $dvt$$7$$.getId();
      if (null == $DvtOverviewEventManager$$) {
        return null;
      }
      if ("_border" == $DvtOverviewEventManager$$.substr($DvtOverviewEventManager$$.length - 7)) {
        return this.$getChildAfter$($dvt$$7$$);
      }
      if ("tick" != $DvtOverviewEventManager$$.substr(0, 4) && "ltb" != $DvtOverviewEventManager$$ && "rtb" != $DvtOverviewEventManager$$ && "bb" != $DvtOverviewEventManager$$ && "tab" != $DvtOverviewEventManager$$) {
        return $dvt$$7$$;
      }
    }
    return null;
  };
  $dvt$$7$$.$Overview$.prototype.$isMovable$ = function $$dvt$$7$$$$Overview$$$$isMovable$$($dvt$$7$$) {
    return "window" == $dvt$$7$$.getId() || "ftr" == $dvt$$7$$.getId() || "sta" == $dvt$$7$$.getId() || this.$isHandle$($dvt$$7$$) ? !0 : !1;
  };
  $dvt$$7$$.$Overview$.prototype.$isFlashEnvironment$ = function $$dvt$$7$$$$Overview$$$$isFlashEnvironment$$() {
    return window && window.$isFlashEnvironment$;
  };
  $dvt$$7$$.$Overview$.prototype.$createBackground$ = function $$dvt$$7$$$$Overview$$$$createBackground$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    var $background$$16$$ = new $dvt$$7$$.Rect(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $DvtOverviewParser$$, "bg");
    $background$$16$$.$setSolidFill$(this.$_overviewBackgroundColor$);
    $background$$16$$.$setPixelHinting$();
    this.$addChild$($background$$16$$);
    return $background$$16$$;
  };
  $dvt$$7$$.$Overview$.prototype.$createSlidingWindow$ = function $$dvt$$7$$$$Overview$$$$createSlidingWindow$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    var $leftBackgroundResizeHandle_vertical$$ = this.$isVertical$(), $leftBackground_slidingWindow$$2_timeAxisTopBar$$ = $leftBackgroundResizeHandle_vertical$$ ? new $dvt$$7$$.Rect(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, 0, "window") : new $dvt$$7$$.Rect(this.$getCtx$(), 0, 0, 0, $DvtOverviewParser$$, "window");
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setSolidFill$(this.$_windowBackgroundColor$, this.$_windowBackgroundAlpha$);
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setPixelHinting$();
    if (!this.$isFeatureOff$()) {
      var $handleSize_rightHandleBackground$$ = this.$getHandleSize$(), $handleStart_rightBackgroundResizeHandle$$ = this.$getHandleStart$();
      if ($leftBackgroundResizeHandle_vertical$$) {
        var $handleX_handleY_rightGrippy$$ = ($DvtOverviewEventManager$$ - 36) / 2, $leftHandle_leftHandleCmds$$ = $dvt$$7$$.$PathUtils$.moveTo($handleX_handleY_rightGrippy$$, 0) + $dvt$$7$$.$PathUtils$.$quadTo$($handleX_handleY_rightGrippy$$ + 3, 6, $handleX_handleY_rightGrippy$$ + 8, 8) + $dvt$$7$$.$PathUtils$.lineTo($handleX_handleY_rightGrippy$$ + 28, 8) + $dvt$$7$$.$PathUtils$.$quadTo$($handleX_handleY_rightGrippy$$ + 33, 6, $handleX_handleY_rightGrippy$$ + 36, 0);
        $dvt$$7$$.$PathUtils$.closePath();
        var $rightHandle_rightHandleCmds$$ = $dvt$$7$$.$PathUtils$.moveTo($handleX_handleY_rightGrippy$$, 0) + $dvt$$7$$.$PathUtils$.$quadTo$($handleX_handleY_rightGrippy$$ + 3, -6, $handleX_handleY_rightGrippy$$ + 8, -8) + $dvt$$7$$.$PathUtils$.lineTo($handleX_handleY_rightGrippy$$ + 28, -8) + $dvt$$7$$.$PathUtils$.$quadTo$($handleX_handleY_rightGrippy$$ + 33, -6, $handleX_handleY_rightGrippy$$ + 36, 0);
        $dvt$$7$$.$PathUtils$.closePath();
        var $leftHandleBackground_rightBackground$$ = new $dvt$$7$$.Rect(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $handleSize_rightHandleBackground$$, "lhb"), $handleSize_rightHandleBackground$$ = new $dvt$$7$$.Rect(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $handleSize_rightHandleBackground$$, "rhb"), $cursor$$ = "row-resize";
        if (this.$_handleBackgroundImage$) {
          var $leftGrippy$$ = this.$createGrippyImage$($DvtOverviewEventManager$$, 10), $handleX_handleY_rightGrippy$$ = this.$createGrippyImage$($DvtOverviewEventManager$$, 10)
        } else {
          $leftGrippy$$ = this.$createGrippy$($handleX_handleY_rightGrippy$$), $handleX_handleY_rightGrippy$$ = this.$createGrippy$($handleX_handleY_rightGrippy$$);
        }
      } else {
        $handleX_handleY_rightGrippy$$ = ($DvtOverviewParser$$ - 36) / 2, $leftHandle_leftHandleCmds$$ = $dvt$$7$$.$PathUtils$.moveTo(0, $handleX_handleY_rightGrippy$$) + $dvt$$7$$.$PathUtils$.$quadTo$(6, $handleX_handleY_rightGrippy$$ + 3, 8, $handleX_handleY_rightGrippy$$ + 8) + $dvt$$7$$.$PathUtils$.lineTo(8, $handleX_handleY_rightGrippy$$ + 28) + $dvt$$7$$.$PathUtils$.$quadTo$(6, $handleX_handleY_rightGrippy$$ + 33, 0, $handleX_handleY_rightGrippy$$ + 36), $dvt$$7$$.$PathUtils$.closePath(), $rightHandle_rightHandleCmds$$ = 
        $dvt$$7$$.$PathUtils$.moveTo(0, $handleX_handleY_rightGrippy$$) + $dvt$$7$$.$PathUtils$.$quadTo$(-6, $handleX_handleY_rightGrippy$$ + 3, -8, $handleX_handleY_rightGrippy$$ + 8) + $dvt$$7$$.$PathUtils$.lineTo(-8, $handleX_handleY_rightGrippy$$ + 28) + $dvt$$7$$.$PathUtils$.$quadTo$(-6, $handleX_handleY_rightGrippy$$ + 33, 0, $handleX_handleY_rightGrippy$$ + 36), $dvt$$7$$.$PathUtils$.closePath(), $leftHandleBackground_rightBackground$$ = new $dvt$$7$$.Rect(this.$getCtx$(), 0 - $handleStart_rightBackgroundResizeHandle$$, 
        0, $handleSize_rightHandleBackground$$, $DvtOverviewParser$$, "lhb"), $handleSize_rightHandleBackground$$ = new $dvt$$7$$.Rect(this.$getCtx$(), $handleStart_rightBackgroundResizeHandle$$, 0, $handleSize_rightHandleBackground$$, $DvtOverviewParser$$, "rhb"), $cursor$$ = "col-resize", this.$_handleBackgroundImage$ ? ($leftGrippy$$ = this.$createGrippyImage$(10, $DvtOverviewParser$$), $handleX_handleY_rightGrippy$$ = this.$createGrippyImage$(10, $DvtOverviewParser$$)) : ($leftGrippy$$ = this.$createGrippy$($handleX_handleY_rightGrippy$$), 
        $handleX_handleY_rightGrippy$$ = this.$createGrippy$($handleX_handleY_rightGrippy$$));
      }
      $leftHandleBackground_rightBackground$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $handleSize_rightHandleBackground$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $leftHandleBackground_rightBackground$$.$setPixelHinting$();
      $handleSize_rightHandleBackground$$.$setPixelHinting$();
      $leftHandle_leftHandleCmds$$ = new $dvt$$7$$.$Path$(this.$getCtx$(), $leftHandle_leftHandleCmds$$, "lh");
      $rightHandle_rightHandleCmds$$ = new $dvt$$7$$.$Path$(this.$getCtx$(), $rightHandle_rightHandleCmds$$, "rh");
      $leftHandle_leftHandleCmds$$.$setSolidFill$(this.$_handleFillColor$);
      $leftHandle_leftHandleCmds$$.$setSolidStroke$(this.$_handleFillColor$);
      $rightHandle_rightHandleCmds$$.$setSolidFill$(this.$_handleFillColor$);
      $rightHandle_rightHandleCmds$$.$setSolidStroke$(this.$_handleFillColor$);
      this.$_windowBackgroundColor$ == this.$_handleFillColor$ && ($leftHandle_leftHandleCmds$$.$setPixelHinting$(), $rightHandle_rightHandleCmds$$.$setPixelHinting$());
      $leftHandleBackground_rightBackground$$.setCursor($cursor$$);
      $handleSize_rightHandleBackground$$.setCursor($cursor$$);
      $leftHandle_leftHandleCmds$$.setCursor($cursor$$);
      $rightHandle_rightHandleCmds$$.setCursor($cursor$$);
      $leftGrippy$$.setCursor($cursor$$);
      $handleX_handleY_rightGrippy$$.setCursor($cursor$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($leftHandleBackground_rightBackground$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($leftHandle_leftHandleCmds$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($leftGrippy$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($handleSize_rightHandleBackground$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($rightHandle_rightHandleCmds$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($handleX_handleY_rightGrippy$$);
    }
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.setCursor("move");
    this.$addChild$($leftBackground_slidingWindow$$2_timeAxisTopBar$$);
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$ = $leftBackgroundResizeHandle_vertical$$ ? this.$isRTL$() ? new $dvt$$7$$.$Line$(this.$getCtx$(), this.$getTimeAxisWidth$(), 0, this.$getTimeAxisWidth$(), $DvtOverviewParser$$, "tab") : new $dvt$$7$$.$Line$(this.$getCtx$(), $DvtOverviewEventManager$$ - this.$getTimeAxisWidth$(), 0, $DvtOverviewEventManager$$ - this.$getTimeAxisWidth$(), $DvtOverviewParser$$, "tab") : this.$isOverviewAbove$() ? new $dvt$$7$$.$Line$(this.$getCtx$(), 0, this.$getTimeAxisHeight$(), 
    $DvtOverviewEventManager$$, this.$getTimeAxisHeight$(), "tab") : new $dvt$$7$$.$Line$(this.$getCtx$(), 0, $DvtOverviewParser$$ - this.$getTimeAxisHeight$(), $DvtOverviewEventManager$$, $DvtOverviewParser$$ - this.$getTimeAxisHeight$(), "tab");
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setSolidStroke$(this.$_timeAxisBarColor$, this.$_timeAxisBarOpacity$);
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setPixelHinting$();
    this.$_timeAxisTopBar$ = $leftBackground_slidingWindow$$2_timeAxisTopBar$$;
    this.$addChild$($leftBackground_slidingWindow$$2_timeAxisTopBar$$);
    this.$isLeftAndRightFilterRendered$() && ($leftBackgroundResizeHandle_vertical$$ ? ($leftBackground_slidingWindow$$2_timeAxisTopBar$$ = new $dvt$$7$$.Rect(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, 0, "lbg"), $leftHandleBackground_rightBackground$$ = new $dvt$$7$$.Rect(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, 0, "rbg")) : ($leftBackground_slidingWindow$$2_timeAxisTopBar$$ = new $dvt$$7$$.Rect(this.$getCtx$(), 0, 0, 0, $DvtOverviewParser$$, "lbg"), $leftHandleBackground_rightBackground$$ = 
    new $dvt$$7$$.Rect(this.$getCtx$(), 0, 0, 0, $DvtOverviewParser$$, "rbg")), $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setSolidFill$(this.$_leftFilterPanelColor$, this.$_leftFilterPanelAlpha$), this.$addChild$($leftBackground_slidingWindow$$2_timeAxisTopBar$$), $leftHandleBackground_rightBackground$$.$setSolidFill$(this.$_rightFilterPanelColor$, this.$_rightFilterPanelAlpha$), this.$addChild$($leftHandleBackground_rightBackground$$), $dvt$$7$$.$OverviewUtils$.$supportsTouch$() && void 0 != 
    $handleStart_rightBackgroundResizeHandle$$ && (this.$getHandleStart$(), $leftBackgroundResizeHandle_vertical$$ ? ($leftBackgroundResizeHandle_vertical$$ = new $dvt$$7$$.Rect(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $handleStart_rightBackgroundResizeHandle$$, "lbgrh"), $handleStart_rightBackgroundResizeHandle$$ = new $dvt$$7$$.Rect(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $handleStart_rightBackgroundResizeHandle$$, "rbgrh")) : ($leftBackgroundResizeHandle_vertical$$ = new $dvt$$7$$.Rect(this.$getCtx$(), 
    0, 0, $handleStart_rightBackgroundResizeHandle$$, $DvtOverviewParser$$, "lbgrh"), $handleStart_rightBackgroundResizeHandle$$ = new $dvt$$7$$.Rect(this.$getCtx$(), 0, 0, $handleStart_rightBackgroundResizeHandle$$, $DvtOverviewParser$$, "rbgrh")), $leftBackgroundResizeHandle_vertical$$.$setSolidFill$(this.$_leftFilterPanelColor$, 0), this.$addChild$($leftBackgroundResizeHandle_vertical$$), $handleStart_rightBackgroundResizeHandle$$.$setSolidFill$(this.$_rightFilterPanelColor$, 0), this.$addChild$($handleStart_rightBackgroundResizeHandle$$)));
  };
  $dvt$$7$$.$Overview$.prototype.$createGrippyImage$ = function $$dvt$$7$$$$Overview$$$$createGrippyImage$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    var $grippy$$ = new $dvt$$7$$.Image(this.$getCtx$(), this.$_handleBackgroundImage$, ($DvtOverviewEventManager$$ - this.$_handleWidth$) / 2, ($DvtOverviewParser$$ - this.$_handleHeight$) / 2, this.$_handleWidth$, this.$_handleHeight$, "grpy");
    $grippy$$.$setMouseEnabled$(!1);
    return $grippy$$;
  };
  $dvt$$7$$.$Overview$.prototype.$createGrippy$ = function $$dvt$$7$$$$Overview$$$$createGrippy$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = new $dvt$$7$$.$Container$(this.$getCtx$(), "grpy"), $color$$59$$ = this.$_handleTextureColor$;
    if (this.$isVertical$()) {
      var $startx$$1$$ = 8 + $DvtOverviewEventManager$$;
      $DvtOverviewEventManager$$ = 3;
      for (var $i$$572$$ = 0;9 > $i$$572$$;$i$$572$$++) {
        var $dot$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $startx$$1$$ + 2 * $i$$572$$, $DvtOverviewEventManager$$, $startx$$1$$ + 2 * $i$$572$$ + 1, $DvtOverviewEventManager$$, "dot1" + $i$$572$$);
        $dot$$.$setSolidStroke$($color$$59$$);
        $DvtOverviewParser$$.$addChild$($dot$$);
        $DvtOverviewEventManager$$ += 2;
        $dot$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $startx$$1$$ + 1 + 2 * $i$$572$$, $DvtOverviewEventManager$$, $startx$$1$$ + 1 + 2 * $i$$572$$ + 1, $DvtOverviewEventManager$$, "dot2" + $i$$572$$);
        $dot$$.$setSolidStroke$($color$$59$$);
        $DvtOverviewParser$$.$addChild$($dot$$);
        $DvtOverviewEventManager$$ += 2;
        $dot$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $startx$$1$$ + 2 * $i$$572$$, $DvtOverviewEventManager$$, $startx$$1$$ + 2 * $i$$572$$ + 1, $DvtOverviewEventManager$$, "dot3" + $i$$572$$);
        $dot$$.$setSolidStroke$($color$$59$$);
        $DvtOverviewParser$$.$addChild$($dot$$);
        $DvtOverviewEventManager$$ = 3;
      }
      $dot$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $startx$$1$$ + 18, $DvtOverviewEventManager$$, $startx$$1$$ + 18 + 1, $DvtOverviewEventManager$$, "dot4");
      $dot$$.$setSolidStroke$($color$$59$$);
      $DvtOverviewParser$$.$addChild$($dot$$);
      $DvtOverviewEventManager$$ += 4;
      $dot$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $startx$$1$$ + 18, $DvtOverviewEventManager$$, $startx$$1$$ + 18 + 1, $DvtOverviewEventManager$$, "dot5");
    } else {
      $startx$$1$$ = 3;
      $DvtOverviewEventManager$$ = 8 + $DvtOverviewEventManager$$;
      for ($i$$572$$ = 0;9 > $i$$572$$;$i$$572$$++) {
        $dot$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 2 * $i$$572$$, $startx$$1$$, $DvtOverviewEventManager$$ + 2 * $i$$572$$ + 1, "dot1" + $i$$572$$), $dot$$.$setSolidStroke$($color$$59$$), $DvtOverviewParser$$.$addChild$($dot$$), $startx$$1$$ += 2, $dot$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 1 + 2 * $i$$572$$, $startx$$1$$, $DvtOverviewEventManager$$ + 1 + 2 * $i$$572$$ + 1, "dot2" + $i$$572$$), $dot$$.$setSolidStroke$($color$$59$$), 
        $DvtOverviewParser$$.$addChild$($dot$$), $startx$$1$$ += 2, $dot$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 2 * $i$$572$$, $startx$$1$$, $DvtOverviewEventManager$$ + 2 * $i$$572$$ + 1, "dot3" + $i$$572$$), $dot$$.$setSolidStroke$($color$$59$$), $DvtOverviewParser$$.$addChild$($dot$$), $startx$$1$$ = 3;
      }
      $dot$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 18, $startx$$1$$, $DvtOverviewEventManager$$ + 18 + 1, "dot4");
      $dot$$.$setSolidStroke$($color$$59$$);
      $DvtOverviewParser$$.$addChild$($dot$$);
      $startx$$1$$ += 4;
      $dot$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 18, $startx$$1$$, $DvtOverviewEventManager$$ + 18 + 1, "dot5");
    }
    $dot$$.$setSolidStroke$($color$$59$$);
    $DvtOverviewParser$$.$addChild$($dot$$);
    $DvtOverviewParser$$.$setPixelHinting$();
    return $DvtOverviewParser$$;
  };
  $dvt$$7$$.$Overview$.prototype.$updateSlidingWindow$ = function $$dvt$$7$$$$Overview$$$$updateSlidingWindow$$() {
    var $DvtOverviewEventManager$$ = this.$isVertical$(), $DvtOverviewParser$$ = this.$getSlidingWindow$(), $size$$30$$ = this.$getOverviewSize$(), $actualSize$$1_newWidth$$3_rangeEndPos$$ = $DvtOverviewEventManager$$ ? this.$Height$ : this.$Width$, $rangeEndTime_timelineWidth$$ = this.$_width$, $start$$40$$ = this.$_start$, $end$$22$$ = this.$_end$, $DvtOverviewEventManager$$ = this.$_renderStart$, $rangeStartPos_rangeStartTime$$ = $dvt$$7$$.$OverviewUtils$.$getPositionDate$($start$$40$$, $end$$22$$, 
    0, $rangeEndTime_timelineWidth$$), $rangeEndTime_timelineWidth$$ = $dvt$$7$$.$OverviewUtils$.$getPositionDate$($start$$40$$, $end$$22$$, $actualSize$$1_newWidth$$3_rangeEndPos$$, $rangeEndTime_timelineWidth$$), $rangeStartPos_rangeStartTime$$ = this.$getDatePosition$($rangeStartPos_rangeStartTime$$), $actualSize$$1_newWidth$$3_rangeEndPos$$ = Math.min($actualSize$$1_newWidth$$3_rangeEndPos$$, this.$getDatePosition$($rangeEndTime_timelineWidth$$)), $DvtOverviewEventManager$$ = this.$getDatePosition$($DvtOverviewEventManager$$), 
    $actualSize$$1_newWidth$$3_rangeEndPos$$ = $actualSize$$1_newWidth$$3_rangeEndPos$$ - $rangeStartPos_rangeStartTime$$;
    this.$isHorizontalRTL$() ? this.$setSlidingWindowPos$($DvtOverviewParser$$, $size$$30$$ - $DvtOverviewEventManager$$ - $actualSize$$1_newWidth$$3_rangeEndPos$$) : this.$setSlidingWindowPos$($DvtOverviewParser$$, $DvtOverviewEventManager$$);
    this.$setSlidingWindowSize$($DvtOverviewParser$$, $actualSize$$1_newWidth$$3_rangeEndPos$$);
    this.$ScrollTimeAxis$();
    this.$_increment$ = this.$calculateIncrement$($size$$30$$);
  };
  $dvt$$7$$.$Overview$.prototype.$createBorderAroundSlidingWindow$ = function $$dvt$$7$$$$Overview$$$$createBorderAroundSlidingWindow$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    var $right$$12_slidingWindow$$3$$ = this.$getSlidingWindow$(), $halfBorderWidth_leftHandle$$1$$ = $dvt$$7$$.$Overview$.$_DEFAULT_WINDOW_BORDER_WIDTH$ / 2;
    if (this.$isVertical$()) {
      var $top$$14_topBar$$ = $right$$12_slidingWindow$$3$$.$getY$(), $topCenter$$ = $top$$14_topBar$$ + $halfBorderWidth_leftHandle$$1$$, $bottom$$9$$ = $top$$14_topBar$$ + $right$$12_slidingWindow$$3$$.getHeight(), $bottomBar_bottomCenter$$ = $bottom$$9$$ - $halfBorderWidth_leftHandle$$1$$, $left$$12$$ = 0, $leftCenter$$ = $halfBorderWidth_leftHandle$$1$$, $rightCenter$$ = $DvtOverviewEventManager$$ - $halfBorderWidth_leftHandle$$1$$, $halfBorderWidth_leftHandle$$1$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), 
      $left$$12$$, $topCenter$$, $DvtOverviewEventManager$$, $topCenter$$, "lh"), $rightHandle$$1$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $left$$12$$, $bottomBar_bottomCenter$$, $DvtOverviewEventManager$$, $bottomBar_bottomCenter$$, "rh"), $leftTopBar$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $leftCenter$$, 0, $leftCenter$$, $top$$14_topBar$$, "ltb"), $rightTopBar$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $leftCenter$$, $bottom$$9$$, $leftCenter$$, $DvtOverviewParser$$, "rtb"), $bottomBar_bottomCenter$$ = 
      new $dvt$$7$$.$Line$(this.$getCtx$(), $rightCenter$$, $top$$14_topBar$$, $rightCenter$$, $bottom$$9$$, "bb"), $top$$14_topBar$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $leftCenter$$, $top$$14_topBar$$, $leftCenter$$, $bottom$$9$$, "tb")
    } else {
      $top$$14_topBar$$ = 0, $topCenter$$ = $top$$14_topBar$$ + $halfBorderWidth_leftHandle$$1$$, $bottom$$9$$ = $DvtOverviewParser$$, $bottomBar_bottomCenter$$ = $bottom$$9$$ - $halfBorderWidth_leftHandle$$1$$, $left$$12$$ = $right$$12_slidingWindow$$3$$.$getX$(), $leftCenter$$ = $left$$12$$ + $halfBorderWidth_leftHandle$$1$$, $right$$12_slidingWindow$$3$$ = $left$$12$$ + $right$$12_slidingWindow$$3$$.getWidth(), $rightCenter$$ = $right$$12_slidingWindow$$3$$ - $halfBorderWidth_leftHandle$$1$$, 
      $halfBorderWidth_leftHandle$$1$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $leftCenter$$, $top$$14_topBar$$, $leftCenter$$, $bottom$$9$$, "lh"), $rightHandle$$1$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $rightCenter$$, $top$$14_topBar$$, $rightCenter$$, $bottom$$9$$, "rh"), $leftTopBar$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), 0, $topCenter$$, $left$$12$$ + 1, $topCenter$$, "ltb"), $rightTopBar$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $right$$12_slidingWindow$$3$$ - 1, $topCenter$$, $DvtOverviewEventManager$$, 
      $topCenter$$, "rtb"), $bottomBar_bottomCenter$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $left$$12$$, $bottomBar_bottomCenter$$, $right$$12_slidingWindow$$3$$, $bottomBar_bottomCenter$$, "bb"), $top$$14_topBar$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $left$$12$$, $topCenter$$, $right$$12_slidingWindow$$3$$, $topCenter$$, "tb");
    }
    $halfBorderWidth_leftHandle$$1$$.$setPixelHinting$();
    $rightHandle$$1$$.$setPixelHinting$();
    $leftTopBar$$.$setPixelHinting$();
    $rightTopBar$$.$setPixelHinting$();
    $bottomBar_bottomCenter$$.$setPixelHinting$();
    $top$$14_topBar$$.$setPixelHinting$();
    "none" != this.$_windowBorderLeftStyle$ && $halfBorderWidth_leftHandle$$1$$.$setSolidStroke$(this.$_windowBorderLeftColor$);
    this.$addChild$($halfBorderWidth_leftHandle$$1$$);
    "none" != this.$_windowBorderRightStyle$ && $rightHandle$$1$$.$setSolidStroke$(this.$_windowBorderRightColor$);
    this.$addChild$($rightHandle$$1$$);
    "none" != this.$_borderTopStyle$ && this.$_borderTopColor$ && ($leftTopBar$$.$setSolidStroke$(this.$_borderTopColor$), $rightTopBar$$.$setSolidStroke$(this.$_borderTopColor$));
    this.$addChild$($leftTopBar$$);
    this.$addChild$($rightTopBar$$);
    "none" != this.$_windowBorderBottomStyle$ && $bottomBar_bottomCenter$$.$setSolidStroke$(this.$_windowBorderBottomColor$);
    this.$addChild$($bottomBar_bottomCenter$$);
    "none" != this.$_windowBorderTopStyle$ && $top$$14_topBar$$.$setSolidStroke$(this.$_windowBorderTopColor$);
    this.$addChild$($top$$14_topBar$$);
  };
  $dvt$$7$$.$Overview$.prototype.$createResizeArrow$ = function $$dvt$$7$$$$Overview$$$$createResizeArrow$$() {
    var $DvtOverviewEventManager$$ = this.$isVertical$() ? $dvt$$7$$.$PathUtils$.moveTo(6, 0) + $dvt$$7$$.$PathUtils$.lineTo(0, 5) + $dvt$$7$$.$PathUtils$.lineTo(5, 5) + $dvt$$7$$.$PathUtils$.lineTo(5, 17) + $dvt$$7$$.$PathUtils$.lineTo(0, 17) + $dvt$$7$$.$PathUtils$.lineTo(6, 22) + $dvt$$7$$.$PathUtils$.lineTo(12, 17) + $dvt$$7$$.$PathUtils$.lineTo(7, 17) + $dvt$$7$$.$PathUtils$.lineTo(7, 5) + $dvt$$7$$.$PathUtils$.lineTo(12, 5) + $dvt$$7$$.$PathUtils$.closePath() : $dvt$$7$$.$PathUtils$.moveTo(5, 
    0) + $dvt$$7$$.$PathUtils$.lineTo(0, 6) + $dvt$$7$$.$PathUtils$.lineTo(5, 12) + $dvt$$7$$.$PathUtils$.lineTo(5, 7) + $dvt$$7$$.$PathUtils$.lineTo(17, 7) + $dvt$$7$$.$PathUtils$.lineTo(17, 12) + $dvt$$7$$.$PathUtils$.lineTo(22, 6) + $dvt$$7$$.$PathUtils$.lineTo(17, 0) + $dvt$$7$$.$PathUtils$.lineTo(17, 4) + $dvt$$7$$.$PathUtils$.lineTo(5, 4) + $dvt$$7$$.$PathUtils$.lineTo(5, 0) + $dvt$$7$$.$PathUtils$.closePath(), $DvtOverviewEventManager$$ = new $dvt$$7$$.$Path$(this.$getCtx$(), $DvtOverviewEventManager$$, 
    "arr");
    $DvtOverviewEventManager$$.$setSolidFill$("#ffffff");
    $DvtOverviewEventManager$$.$setSolidStroke$("#000000");
    $DvtOverviewEventManager$$.$setVisible$(!1);
    this.$addChild$($DvtOverviewEventManager$$);
    return $DvtOverviewEventManager$$;
  };
  $dvt$$7$$.$Overview$.prototype.$getRectSize$ = function $$dvt$$7$$$$Overview$$$$getRectSize$$($dvt$$7$$) {
    return this.$isVertical$() ? $dvt$$7$$.getHeight() : $dvt$$7$$.getWidth();
  };
  $dvt$$7$$.$Overview$.prototype.$setRectSize$ = function $$dvt$$7$$$$Overview$$$$setRectSize$$($dvt$$7$$, $DvtOverviewEventManager$$) {
    this.$isVertical$() ? $dvt$$7$$.$setHeight$($DvtOverviewEventManager$$) : $dvt$$7$$.$setWidth$($DvtOverviewEventManager$$);
  };
  $dvt$$7$$.$Overview$.prototype.$getSlidingWindowPos$ = function $$dvt$$7$$$$Overview$$$$getSlidingWindowPos$$($dvt$$7$$) {
    return this.$isVertical$() ? $dvt$$7$$.$getTranslateY$() : $dvt$$7$$.$getTranslateX$();
  };
  $dvt$$7$$.$Overview$.prototype.$setSlidingWindowPos$ = function $$dvt$$7$$$$Overview$$$$setSlidingWindowPos$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    $DvtOverviewParser$$ = Math.max(0, $DvtOverviewParser$$);
    this.$isVertical$() ? $DvtOverviewEventManager$$.$setTranslateY$($DvtOverviewParser$$) : $DvtOverviewEventManager$$.$setTranslateX$($DvtOverviewParser$$);
    if (this.$isLeftAndRightFilterRendered$()) {
      this.$getLeftBackground$().$setWidth$($DvtOverviewParser$$);
      var $rightStart$$ = $DvtOverviewParser$$ + this.$getSlidingWindowSize$($DvtOverviewEventManager$$), $handleStart$$1_rightBackground$$1$$ = this.$getRightBackground$();
      $handleStart$$1_rightBackground$$1$$.$setX$($rightStart$$);
      $handleStart$$1_rightBackground$$1$$.$setWidth$(Math.max(0, this.$Width$ - $rightStart$$));
      $dvt$$7$$.$OverviewUtils$.$supportsTouch$() && !this.$isFeatureOff$() && ($handleStart$$1_rightBackground$$1$$ = this.$getHandleStart$(), this.$getLeftBackgroundHandle$().$setX$($DvtOverviewParser$$ - $handleStart$$1_rightBackground$$1$$), this.$getRightBackgroundHandle$().$setX$($rightStart$$));
    }
  };
  $dvt$$7$$.$Overview$.prototype.$getSlidingWindowSize$ = function $$dvt$$7$$$$Overview$$$$getSlidingWindowSize$$($dvt$$7$$) {
    return this.$getRectSize$($dvt$$7$$);
  };
  $dvt$$7$$.$Overview$.prototype.$setSlidingWindowSize$ = function $$dvt$$7$$$$Overview$$$$setSlidingWindowSize$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    $DvtOverviewParser$$ = Math.max(this.$getMinimumWindowSize$(), $DvtOverviewParser$$);
    $DvtOverviewParser$$ = Math.min(this.$isVertical$() ? this.$Height$ : this.$Width$, $DvtOverviewParser$$);
    this.$setRectSize$($DvtOverviewEventManager$$, $DvtOverviewParser$$);
    if (this.$isLeftAndRightFilterRendered$()) {
      var $rightHandleBackground$$1_rightStart$$1$$ = this.$getSlidingWindowPos$($DvtOverviewEventManager$$) + $DvtOverviewParser$$, $rightBackground$$2_rightHandle$$2$$ = this.$getRightBackground$();
      $rightBackground$$2_rightHandle$$2$$.$setX$($rightHandleBackground$$1_rightStart$$1$$);
      $rightBackground$$2_rightHandle$$2$$.$setWidth$(Math.max(0, this.$Width$ - $rightHandleBackground$$1_rightStart$$1$$));
      $dvt$$7$$.$OverviewUtils$.$supportsTouch$() && !this.$isFeatureOff$() && this.$getRightBackgroundHandle$().$setX$($rightHandleBackground$$1_rightStart$$1$$);
    }
    if (!this.$isFeatureOff$()) {
      var $rightHandleBackground$$1_rightStart$$1$$ = $DvtOverviewEventManager$$.$getChildAt$(3), $rightBackground$$2_rightHandle$$2$$ = $DvtOverviewEventManager$$.$getChildAt$(4), $rightGrippy$$1$$ = $DvtOverviewEventManager$$.$getChildAt$(5);
      this.$isVertical$() ? ($rightBackground$$2_rightHandle$$2$$.$setTranslateY$($DvtOverviewParser$$), $rightHandleBackground$$1_rightStart$$1$$.$setTranslateY$($DvtOverviewParser$$ - this.$getHandleSize$()), $rightGrippy$$1$$.$setTranslateY$($DvtOverviewParser$$ - 10)) : ($rightBackground$$2_rightHandle$$2$$.$setTranslateX$($DvtOverviewParser$$), $rightHandleBackground$$1_rightStart$$1$$.$setTranslateX$($DvtOverviewParser$$ - this.$getHandleSize$()), $rightGrippy$$1$$.$setTranslateX$($DvtOverviewParser$$ - 
      10));
    }
  };
  $dvt$$7$$.$Overview$.prototype.$calculateIncrement$ = function $$dvt$$7$$$$Overview$$$$calculateIncrement$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = this.$_width$, $start$$41$$ = this.$_start$, $end$$23$$ = this.$_end$, $day1_pos1$$1$$ = $dvt$$7$$.$OverviewUtils$.$getPositionDate$($start$$41$$, $end$$23$$, 1, $DvtOverviewEventManager$$);
    $DvtOverviewEventManager$$ = $dvt$$7$$.$OverviewUtils$.$getPositionDate$($start$$41$$, $end$$23$$, 2, $DvtOverviewEventManager$$);
    $day1_pos1$$1$$ = $dvt$$7$$.$OverviewUtils$.$getDatePosition$($start$$41$$, $end$$23$$, $day1_pos1$$1$$, $DvtOverviewParser$$);
    return $dvt$$7$$.$OverviewUtils$.$getDatePosition$($start$$41$$, $end$$23$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) - $day1_pos1$$1$$;
  };
  $dvt$$7$$.$Overview$.prototype.$updateTimeAxis$ = function $$dvt$$7$$$$Overview$$$$updateTimeAxis$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    if (null != this.$_ticks$) {
      for (var $vertical$$2$$ = this.$isVertical$(), $size$$33$$ = this.$getOverviewSize$(), $i$$573$$ = 0;$i$$573$$ < this.$_ticks$.length;$i$$573$$++) {
        var $child$$60_label$$71$$ = this.$_ticks$[$i$$573$$], $time_pos$$ = this.$getDatePosition$(parseInt($child$$60_label$$71$$.time, 10)), $child$$60_label$$71$$ = $child$$60_label$$71$$.label, $maxWidth$$17$$ = 0, $maxWidth$$17$$ = $i$$573$$ + 1 < this.$_ticks$.length ? this.$getDatePosition$(parseInt(this.$_ticks$[$i$$573$$ + 1].time, 10)) - $time_pos$$ : $size$$33$$ - $time_pos$$;
        this.$isHorizontalRTL$() && ($time_pos$$ = $size$$33$$ - $time_pos$$);
        $vertical$$2$$ && ($maxWidth$$17$$ = this.$Width$);
        $maxWidth$$17$$ -= 2 * $dvt$$7$$.$Overview$.$_DEFAULT_AXIS_LABEL_PADDING$;
        this.$addTick$($time_pos$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, "tick" + $i$$573$$);
        this.$addLabel$($time_pos$$, $child$$60_label$$71$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $maxWidth$$17$$, "label" + $i$$573$$);
      }
    }
  };
  $dvt$$7$$.$Overview$.prototype.$addTick$ = function $$dvt$$7$$$$Overview$$$$addTick$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $height$$94$$, $id$$159$$) {
    $DvtOverviewEventManager$$ = this.$isVertical$() ? new $dvt$$7$$.$Line$(this.$getCtx$(), 0, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $DvtOverviewEventManager$$, $id$$159$$) : new $dvt$$7$$.$Line$(this.$getCtx$(), $DvtOverviewEventManager$$, 0, $DvtOverviewEventManager$$, $height$$94$$, $id$$159$$);
    $DvtOverviewParser$$ = new $dvt$$7$$.$SolidStroke$(this.$_timeIndicatorColor$);
    $DvtOverviewParser$$.$setStyle$($dvt$$7$$.$Stroke$.$DASHED$, 3);
    $DvtOverviewEventManager$$.$setStroke$($DvtOverviewParser$$);
    $DvtOverviewEventManager$$.$setPixelHinting$();
    this.$addChild$($DvtOverviewEventManager$$);
  };
  $dvt$$7$$.$Overview$.prototype.$addLabel$ = function $$dvt$$7$$$$Overview$$$$addLabel$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $padding$$29_width$$111$$, $height$$95_y$$167$$, $maxWidth$$18$$, $id$$160$$, $dim$$54_labelStyle$$21$$) {
    $dim$$54_labelStyle$$21$$ = $dim$$54_labelStyle$$21$$ || new $dvt$$7$$.$CSSStyle$("font-weight:bold");
    this.$isVertical$() ? ($DvtOverviewParser$$ = new $dvt$$7$$.$OutputText$(this.$getCtx$(), $DvtOverviewParser$$, 4, $DvtOverviewEventManager$$, $id$$160$$), $DvtOverviewParser$$.$setCSSStyle$($dim$$54_labelStyle$$21$$), this.$isRTL$() && (this.$addChild$($DvtOverviewParser$$), $dim$$54_labelStyle$$21$$ = $DvtOverviewParser$$.$getDimensions$(), this.removeChild($DvtOverviewParser$$), $DvtOverviewParser$$.$setX$(Math.max(4, this.$Width$ - $dim$$54_labelStyle$$21$$.$w$ - 4)))) : ($height$$95_y$$167$$ = 
    this.$isOverviewAbove$() ? 2 : $height$$95_y$$167$$ - this.$getTimeAxisHeight$() + 2, $padding$$29_width$$111$$ = $dvt$$7$$.$Overview$.$_DEFAULT_AXIS_LABEL_PADDING$, $DvtOverviewParser$$ = new $dvt$$7$$.$OutputText$(this.$getCtx$(), $DvtOverviewParser$$, $DvtOverviewEventManager$$ + $padding$$29_width$$111$$, $height$$95_y$$167$$, $id$$160$$), $DvtOverviewParser$$.$setCSSStyle$($dim$$54_labelStyle$$21$$), this.$isHorizontalRTL$() && (this.$addChild$($DvtOverviewParser$$), $dim$$54_labelStyle$$21$$ = 
    $DvtOverviewParser$$.$getDimensions$(), this.removeChild($DvtOverviewParser$$), $DvtOverviewParser$$.$setX$($DvtOverviewEventManager$$ - Math.min($dim$$54_labelStyle$$21$$.$w$, $maxWidth$$18$$) - $padding$$29_width$$111$$)));
    $dvt$$7$$.$TextUtils$.$fitText$($DvtOverviewParser$$, $maxWidth$$18$$, Infinity, this);
    $DvtOverviewParser$$.$_rawText$ = $DvtOverviewParser$$.$getUntruncatedTextString$();
  };
  $dvt$$7$$.$Overview$.prototype.$updateCurrentTime$ = function $$dvt$$7$$$$Overview$$$$updateCurrentTime$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    if (null != this.$_currentTime$ && !isNaN(this.$_currentTime$)) {
      var $line$$18_time_pos$$1$$ = this.$getDatePosition$(this.$_currentTime$);
      this.$isVertical$() ? $line$$18_time_pos$$1$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), 0, $line$$18_time_pos$$1$$, $DvtOverviewEventManager$$, $line$$18_time_pos$$1$$, "ocd") : (this.$isRTL$() && ($line$$18_time_pos$$1$$ = $DvtOverviewEventManager$$ - $line$$18_time_pos$$1$$), $line$$18_time_pos$$1$$ = new $dvt$$7$$.$Line$(this.$getCtx$(), $line$$18_time_pos$$1$$, 0, $line$$18_time_pos$$1$$, $DvtOverviewParser$$, "ocd"));
      $line$$18_time_pos$$1$$.$setSolidStroke$(this.$_currentTimeIndicatorColor$);
      $line$$18_time_pos$$1$$.$setPixelHinting$();
      this.$addChild$($line$$18_time_pos$$1$$);
    }
  };
  $dvt$$7$$.$Overview$.prototype.$parseFilledTimeRanges$ = function $$dvt$$7$$$$Overview$$$$parseFilledTimeRanges$$($dvt$$7$$, $DvtOverviewEventManager$$) {
    if (null != this.$_formattedTimeRanges$) {
      for (var $DvtOverviewParser$$ = 0;$DvtOverviewParser$$ < this.$_formattedTimeRanges$.length;$DvtOverviewParser$$++) {
        this.$addFilledTimeRange$(this.$_formattedTimeRanges$[$DvtOverviewParser$$], $dvt$$7$$, $DvtOverviewEventManager$$);
      }
    }
  };
  $dvt$$7$$.$Overview$.prototype.$addFilledTimeRange$ = function $$dvt$$7$$$$Overview$$$$addFilledTimeRange$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $height$$98$$) {
    var $rangeStart_rangeStart_pos$$ = parseInt($DvtOverviewEventManager$$.rs, 10), $rangeEnd_rangeWidth$$1$$ = parseInt($DvtOverviewEventManager$$.re, 10);
    $DvtOverviewEventManager$$ = $DvtOverviewEventManager$$.c;
    if (null != $rangeStart_rangeStart_pos$$ && null != $rangeEnd_rangeWidth$$1$$) {
      var $size$$34$$ = this.$getOverviewSize$(), $rangeStart_rangeStart_pos$$ = this.$getDatePosition$($rangeStart_rangeStart_pos$$), $rangeEnd_rangeWidth$$1$$ = this.$getDatePosition$($rangeEnd_rangeWidth$$1$$) - $rangeStart_rangeStart_pos$$;
      this.$isHorizontalRTL$() && ($rangeStart_rangeStart_pos$$ = $size$$34$$ - $rangeStart_rangeStart_pos$$ - $rangeEnd_rangeWidth$$1$$);
      $DvtOverviewParser$$ = this.$isVertical$() ? new $dvt$$7$$.Rect(this.$getCtx$(), 0, $rangeStart_rangeStart_pos$$, $DvtOverviewParser$$ - this.$getTimeAxisWidth$(), $rangeEnd_rangeWidth$$1$$, "ftr") : new $dvt$$7$$.Rect(this.$getCtx$(), $rangeStart_rangeStart_pos$$, this.$isOverviewAbove$() ? this.$getTimeAxisHeight$() : 0, $rangeEnd_rangeWidth$$1$$, $height$$98$$ - this.$getTimeAxisHeight$(), "ftr");
      null != $DvtOverviewEventManager$$ && $DvtOverviewParser$$.$setSolidFill$($DvtOverviewEventManager$$, .4);
      $DvtOverviewParser$$.setCursor("move");
      $DvtOverviewParser$$.$setPixelHinting$();
      this.$addChild$($DvtOverviewParser$$);
    }
  };
  $dvt$$7$$.$Overview$.prototype.$parseDataXML$ = function $$dvt$$7$$$$Overview$$$$parseDataXML$$() {
  };
  $dvt$$7$$.$Overview$.prototype.$animateSlidingWindow$ = function $$dvt$$7$$$$Overview$$$$animateSlidingWindow$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = this.$getSlidingWindow$();
    $DvtOverviewParser$$.$getChildAt$(3);
    $DvtOverviewParser$$.$getChildAt$(4);
    $DvtOverviewParser$$.$getChildAt$(5);
    if ($DvtOverviewEventManager$$ != this.$getSlidingWindowPos$($DvtOverviewParser$$)) {
      var $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = this.$getLeftHandle$(), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = this.$getRightHandle$(), $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = this.$getLeftTopBar$(), $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = this.$getRightTopBar$(), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = this.$getBottomBar$(), $rightBackgroundHandleSetter_topBar$$1$$ = 
      this.$getTopBar$();
      if (this.$isVertical$()) {
        var $posGetter$$ = $DvtOverviewParser$$.$getTranslateY$, $posSetter$$ = $DvtOverviewParser$$.$setTranslateY$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY2$, $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY2$, 
        $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY2$, $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getY2$, 
        $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setY2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getY1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setY1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY1$, $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY1$, $bottomBarPos2Getter$$ = 
        $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY2$, $topBarPos2Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY2$
      } else {
        $posGetter$$ = $DvtOverviewParser$$.$getTranslateX$, $posSetter$$ = $DvtOverviewParser$$.$setTranslateX$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX2$, $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX2$, 
        $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX2$, $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getX2$, 
        $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setX2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX1$, $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX1$, $bottomBarPos2Getter$$ = 
        $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX2$, $topBarPos2Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX2$;
      }
      var $animator$$109_minPos$$ = this.$_leftMargin$, $maxPos$$ = this.$getMaximumPosition$(), $rightStart$$2_slidingWindowSize$$ = this.$getSlidingWindowSize$($DvtOverviewParser$$);
      $DvtOverviewEventManager$$ = Math.max($animator$$109_minPos$$, Math.min($maxPos$$ - $rightStart$$2_slidingWindowSize$$, $DvtOverviewEventManager$$));
      $animator$$109_minPos$$ = this.$isAnimationOnClick$() ? new $dvt$$7$$.$Animator$(this.$getCtx$(), .5, 0, $dvt$$7$$.$Easing$.$linear$) : null;
      this.$animateProperty$($animator$$109_minPos$$, $DvtOverviewParser$$, $posGetter$$, $posSetter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$109_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos1Getter$$, $leftHandlePos1Setter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$109_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos2Getter$$, $leftHandlePos2Setter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$109_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos1Getter$$, $rightHandlePos1Setter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$);
      this.$animateProperty$($animator$$109_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos2Getter$$, $rightHandlePos2Setter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$);
      this.$animateProperty$($animator$$109_minPos$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $leftTopBarPosGetter$$, $leftTopBarPosSetter$$, $DvtOverviewEventManager$$ + 1);
      this.$animateProperty$($animator$$109_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightTopBarPosGetter$$, $rightTopBarPosSetter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$ - 1);
      this.$animateProperty$($animator$$109_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos1Getter$$, $bottomBarPos1Setter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$109_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos1Getter$$, $topBarPos1Setter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$109_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos2Getter$$, $bottomBarPos2Setter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$);
      this.$animateProperty$($animator$$109_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos2Getter$$, $topBarPos2Setter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$);
      this.$isLeftAndRightFilterRendered$() && ($DvtOverviewParser$$ = this.$getLeftBackground$(), this.$animateProperty$($animator$$109_minPos$$, $DvtOverviewParser$$, $DvtOverviewParser$$.getWidth, $DvtOverviewParser$$.$setWidth$, $DvtOverviewEventManager$$), $rightStart$$2_slidingWindowSize$$ = $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$, $DvtOverviewParser$$ = this.$getRightBackground$(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $DvtOverviewParser$$.getWidth, 
      $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $DvtOverviewParser$$.$setWidth$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $DvtOverviewParser$$.$getX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $DvtOverviewParser$$.$setX$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = this.$isVertical$() ? this.$Height$ : this.$Width$, this.$animateProperty$($animator$$109_minPos$$, $DvtOverviewParser$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, 
      $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ - $rightStart$$2_slidingWindowSize$$), this.$animateProperty$($animator$$109_minPos$$, $DvtOverviewParser$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightStart$$2_slidingWindowSize$$), $dvt$$7$$.$OverviewUtils$.$supportsTouch$() && !this.$isFeatureOff$() && ($DvtOverviewParser$$ = 
      this.$getHandleStart$(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = this.$getLeftBackgroundHandle$(), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = this.$getRightBackgroundHandle$(), 
      $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX$, $rightBackgroundHandleSetter_topBar$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX$, this.$animateProperty$($animator$$109_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, 
      $DvtOverviewEventManager$$ - $DvtOverviewParser$$), this.$animateProperty$($animator$$109_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $rightBackgroundHandleSetter_topBar$$1$$, $rightStart$$2_slidingWindowSize$$)));
      null != $animator$$109_minPos$$ && $animator$$109_minPos$$.play();
    }
  };
  $dvt$$7$$.$Overview$.prototype.$animateProperty$ = function $$dvt$$7$$$$Overview$$$$animateProperty$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $getter$$, $setter$$, $value$$192$$) {
    null != $DvtOverviewEventManager$$ ? $DvtOverviewEventManager$$.$addProp$($dvt$$7$$.$Animator$.$TYPE_NUMBER$, $DvtOverviewParser$$, $getter$$, $setter$$, $value$$192$$) : $setter$$.call($DvtOverviewParser$$, $value$$192$$);
  };
  $dvt$$7$$.$Overview$.prototype.$HandleShapeMouseOver$ = function $$dvt$$7$$$$Overview$$$$HandleShapeMouseOver$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = this.$_findDrawable$($DvtOverviewEventManager$$);
    if ($DvtOverviewParser$$ && "bg" != $DvtOverviewParser$$.getId() && "ocd" != $DvtOverviewParser$$.getId()) {
      if ("label" == $DvtOverviewParser$$.getId().substr(0, 5) && ($DvtOverviewParser$$ instanceof $dvt$$7$$.$OutputText$ || $DvtOverviewParser$$ instanceof $dvt$$7$$.$BackgroundOutputText$)) {
        $DvtOverviewParser$$.$isTruncated$() && this.$getCtx$().$getTooltipManager$().$showDatatip$($DvtOverviewEventManager$$.pageX, $DvtOverviewEventManager$$.pageY, $DvtOverviewParser$$.$_rawText$, "#000000");
      } else {
        if (null != this.$_resizeArrow$ && this.$isHandle$($DvtOverviewParser$$) && ($DvtOverviewEventManager$$ = this.$getCtx$().$pageToStageCoords$($DvtOverviewEventManager$$.pageX, $DvtOverviewEventManager$$.pageY), $DvtOverviewEventManager$$ = this.$stageToLocal$($DvtOverviewEventManager$$), this.$isVertical$() ? this.$_resizeArrow$.$setTranslate$($DvtOverviewEventManager$$.x + 6, $DvtOverviewEventManager$$.y - 10) : this.$_resizeArrow$.$setTranslate$($DvtOverviewEventManager$$.x - 6, $DvtOverviewEventManager$$.y - 
        20), this.$_resizeArrow$.$setVisible$(!0)), "window" == $DvtOverviewParser$$.getId() || "ftr" == $DvtOverviewParser$$.getId() || "arr" == $DvtOverviewParser$$.getId() || this.$isHandle$($DvtOverviewParser$$)) {
          this.$isFlashEnvironment$() && this.setCursor("move");
        } else {
          return $DvtOverviewParser$$;
        }
      }
    }
  };
  $dvt$$7$$.$Overview$.prototype.$HandleShapeMouseOut$ = function $$dvt$$7$$$$Overview$$$$HandleShapeMouseOut$$($dvt$$7$$) {
    null == this.$_moveDrawable$ && this.setCursor("default");
    $dvt$$7$$ = this.$_findDrawable$($dvt$$7$$);
    if (null != $dvt$$7$$) {
      return this.$isHandle$($dvt$$7$$) && null != this.$_resizeArrow$ && this.$_resizeArrow$.$setVisible$(!1), $dvt$$7$$;
    }
  };
  $dvt$$7$$.$Overview$.prototype.$HandleShapeClick$ = function $$dvt$$7$$$$Overview$$$$HandleShapeClick$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $evt$$50_pageY$$3_pos$$62$$) {
    $DvtOverviewEventManager$$.stopPropagation();
    var $drawable$$4_newStartTime_size$$35$$ = this.$_findDrawable$($DvtOverviewEventManager$$);
    if ($drawable$$4_newStartTime_size$$35$$ && "window" != $drawable$$4_newStartTime_size$$35$$.getId() && !this.$isHandle$($drawable$$4_newStartTime_size$$35$$)) {
      if ("bg" == $drawable$$4_newStartTime_size$$35$$.getId() || "label" == $drawable$$4_newStartTime_size$$35$$.getId().substr(0, 5) || "ocd" == $drawable$$4_newStartTime_size$$35$$.getId() || "lbg" == $drawable$$4_newStartTime_size$$35$$.getId() || "rbg" == $drawable$$4_newStartTime_size$$35$$.getId()) {
        void 0 == $DvtOverviewParser$$ && ($DvtOverviewParser$$ = $DvtOverviewEventManager$$.pageX);
        void 0 == $evt$$50_pageY$$3_pos$$62$$ && ($evt$$50_pageY$$3_pos$$62$$ = $DvtOverviewEventManager$$.pageY);
        $DvtOverviewEventManager$$ = this.$getCtx$().$pageToStageCoords$($DvtOverviewParser$$, $evt$$50_pageY$$3_pos$$62$$);
        $DvtOverviewEventManager$$ = this.$stageToLocal$($DvtOverviewEventManager$$);
        this.$isVertical$() ? ($evt$$50_pageY$$3_pos$$62$$ = $DvtOverviewEventManager$$.y, $drawable$$4_newStartTime_size$$35$$ = this.$Height$) : ($evt$$50_pageY$$3_pos$$62$$ = $DvtOverviewEventManager$$.x, $drawable$$4_newStartTime_size$$35$$ = this.$Width$);
        $DvtOverviewEventManager$$ = this.$getSlidingWindow$();
        $DvtOverviewParser$$ = $evt$$50_pageY$$3_pos$$62$$ - this.$getRectSize$($DvtOverviewEventManager$$) / 2;
        this.$animateSlidingWindow$($DvtOverviewParser$$);
        this.$isHorizontalRTL$() && ($evt$$50_pageY$$3_pos$$62$$ = this.$Width$ - $evt$$50_pageY$$3_pos$$62$$);
        var $time$$11$$ = this.$getPositionDate$($evt$$50_pageY$$3_pos$$62$$);
        $evt$$50_pageY$$3_pos$$62$$ = new $dvt$$7$$.$OverviewEvent$($dvt$$7$$.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$);
        $evt$$50_pageY$$3_pos$$62$$.setTime($time$$11$$);
        $DvtOverviewParser$$ = Math.max(0, Math.min($DvtOverviewParser$$, $drawable$$4_newStartTime_size$$35$$ - this.$getRectSize$($DvtOverviewEventManager$$)));
        this.$isHorizontalRTL$() ? ($drawable$$4_newStartTime_size$$35$$ = this.$getPositionDate$(this.$Width$ - ($DvtOverviewParser$$ + this.$getRectSize$($DvtOverviewEventManager$$))), $DvtOverviewEventManager$$ = this.$getPositionDate$(this.$Width$ - $DvtOverviewParser$$)) : ($drawable$$4_newStartTime_size$$35$$ = this.$getPositionDate$($DvtOverviewParser$$), $DvtOverviewEventManager$$ = this.$getPositionDate$($DvtOverviewParser$$ + this.$getRectSize$($DvtOverviewEventManager$$)));
        $evt$$50_pageY$$3_pos$$62$$.$setNewStartTime$($drawable$$4_newStartTime_size$$35$$);
        $evt$$50_pageY$$3_pos$$62$$.$setNewEndTime$($DvtOverviewEventManager$$);
        this.dispatchEvent($evt$$50_pageY$$3_pos$$62$$);
      } else {
        return $drawable$$4_newStartTime_size$$35$$;
      }
    }
  };
  $dvt$$7$$.$Overview$.prototype.$beginDragPan$ = function $$dvt$$7$$$$Overview$$$$beginDragPan$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $compY$$2_drawableId$$) {
    $DvtOverviewEventManager$$ = this.$_findDrawable$($DvtOverviewEventManager$$);
    if (null != $DvtOverviewEventManager$$ && this.$isMovable$($DvtOverviewEventManager$$)) {
      if ("ftr" == $DvtOverviewEventManager$$.getId() || "sta" == $DvtOverviewEventManager$$.getId()) {
        $DvtOverviewEventManager$$ = this.$getSlidingWindow$();
      }
      this.$_initX$ = $DvtOverviewParser$$;
      this.$_initY$ = $compY$$2_drawableId$$;
      if (this.$isHandle$($DvtOverviewEventManager$$)) {
        $DvtOverviewParser$$ = this.$getSlidingWindow$();
        this.$isHorizontalRTL$() ? (this.$_oldEndPos$ = this.$Width$ - $DvtOverviewParser$$.$getX$(), this.$_oldStartPos$ = this.$_oldEndPos$ - $DvtOverviewParser$$.getWidth()) : (this.$_oldStartPos$ = $DvtOverviewParser$$.$getX$(), this.$_oldEndPos$ = this.$_oldStartPos$ + $DvtOverviewParser$$.getWidth());
        "grpy" == $DvtOverviewEventManager$$.getParent().getId() && ($DvtOverviewEventManager$$ = $DvtOverviewEventManager$$.getParent());
        $compY$$2_drawableId$$ = $DvtOverviewEventManager$$.getId();
        "grpy" == $compY$$2_drawableId$$ && ($DvtOverviewEventManager$$ = $DvtOverviewParser$$.$getChildBefore$($DvtOverviewEventManager$$), $compY$$2_drawableId$$ = $DvtOverviewEventManager$$.getId());
        if ("lh" == $compY$$2_drawableId$$ || "rh" == $compY$$2_drawableId$$) {
          $DvtOverviewEventManager$$ = $DvtOverviewParser$$.$getChildBefore$($DvtOverviewEventManager$$), $compY$$2_drawableId$$ = $DvtOverviewEventManager$$.getId();
        }
        "lbgrh" == $compY$$2_drawableId$$ && ($DvtOverviewEventManager$$ = $DvtOverviewParser$$.$getChildAt$(0));
        "rbgrh" == $compY$$2_drawableId$$ && ($DvtOverviewEventManager$$ = $DvtOverviewParser$$.$getChildAt$($DvtOverviewParser$$.$getNumChildren$() - 3));
        $dvt$$7$$.$OverviewUtils$.$supportsTouch$() || (this.$isVertical$() ? ($DvtOverviewEventManager$$.$setY$(0 - $dvt$$7$$.$Overview$.$HANDLE_PADDING_SIZE$), $DvtOverviewEventManager$$.$setHeight$(2 * ($DvtOverviewEventManager$$.getHeight() + $dvt$$7$$.$Overview$.$HANDLE_PADDING_SIZE$))) : ($DvtOverviewEventManager$$.$setX$(0 - $dvt$$7$$.$Overview$.$HANDLE_PADDING_SIZE$), $DvtOverviewEventManager$$.$setWidth$(2 * ($DvtOverviewEventManager$$.getWidth() + $dvt$$7$$.$Overview$.$HANDLE_PADDING_SIZE$))));
        this.$overrideCursors$($DvtOverviewEventManager$$.getCursor());
      }
      this.$_moveDrawable$ = $DvtOverviewEventManager$$;
      $DvtOverviewEventManager$$ = new $dvt$$7$$.$OverviewEvent$($dvt$$7$$.$OverviewEvent$.$SUBTYPE_PRE_RANGECHANGE$);
      this.dispatchEvent($DvtOverviewEventManager$$);
      return !0;
    }
    return !1;
  };
  $dvt$$7$$.$Overview$.prototype.$overrideCursors$ = function $$dvt$$7$$$$Overview$$$$overrideCursors$$($dvt$$7$$) {
    var $DvtOverviewEventManager$$ = this.$getSlidingWindow$();
    null != $DvtOverviewEventManager$$ && $DvtOverviewEventManager$$.setCursor($dvt$$7$$);
    if (this.$isLeftAndRightFilterRendered$()) {
      var $DvtOverviewEventManager$$ = this.$getLeftBackground$(), $DvtOverviewParser$$ = this.$getRightBackground$();
      null != $DvtOverviewEventManager$$ && null != $DvtOverviewParser$$ && ($DvtOverviewEventManager$$.setCursor($dvt$$7$$), $DvtOverviewParser$$.setCursor($dvt$$7$$));
    }
  };
  $dvt$$7$$.$Overview$.prototype.$resetCursors$ = function $$dvt$$7$$$$Overview$$$$resetCursors$$() {
    var $dvt$$7$$ = this.$getSlidingWindow$();
    null != $dvt$$7$$ && $dvt$$7$$.setCursor("move");
    if (this.$isLeftAndRightFilterRendered$()) {
      var $dvt$$7$$ = this.$getLeftBackground$(), $DvtOverviewEventManager$$ = this.$getRightBackground$();
      null != $dvt$$7$$ && null != $DvtOverviewEventManager$$ && ($dvt$$7$$.setCursor("default"), $DvtOverviewEventManager$$.setCursor("default"));
    }
  };
  $dvt$$7$$.$Overview$.prototype.$endDragPan$ = function $$dvt$$7$$$$Overview$$$$endDragPan$$() {
    null != this.$_moveDrawable$ && ("window" == this.$_moveDrawable$.getId() ? this.$finishWindowDrag$(0, 0) : this.$isHandle$(this.$_moveDrawable$) && (this.$finishHandleDrag$(), $dvt$$7$$.$OverviewUtils$.$supportsTouch$() || (this.$isVertical$() ? (this.$_moveDrawable$.$setY$(0), this.$_moveDrawable$.$setHeight$(this.$getHandleSize$())) : (this.$_moveDrawable$.$setX$(0), this.$_moveDrawable$.$setWidth$(this.$getHandleSize$()))), this.$resetCursors$()), this.$_moveDrawable$ = null, this.$_initX$ = 
    -1);
  };
  $dvt$$7$$.$Overview$.prototype.$contDragPan$ = function $$dvt$$7$$$$Overview$$$$contDragPan$$($dvt$$7$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    if (null != this.$_moveDrawable$ && -1 != this.$_initX$) {
      var $diffX$$4$$ = $DvtOverviewEventManager$$ - this.$_initX$, $diffY$$5$$ = $DvtOverviewParser$$ - this.$_initY$;
      this.$_initX$ = $DvtOverviewEventManager$$;
      this.$_initY$ = $DvtOverviewParser$$;
      "window" == this.$_moveDrawable$.getId() ? this.$handleWindowDragPositioning$(0, $diffX$$4$$, $diffY$$5$$) : "lh" == this.$_moveDrawable$.getId() || "lhb" == this.$_moveDrawable$.getId() ? this.$handleLeftHandleDragPositioning$($dvt$$7$$, $diffX$$4$$, $diffY$$5$$) : "rh" != this.$_moveDrawable$.getId() && "rhb" != this.$_moveDrawable$.getId() || this.$handleRightHandleDragPositioning$($dvt$$7$$, $diffX$$4$$, $diffY$$5$$);
    }
  };
  $dvt$$7$$.$Overview$.prototype.$HandleTouchStart$ = function $$dvt$$7$$$$Overview$$$$HandleTouchStart$$($dvt$$7$$) {
    var $DvtOverviewEventManager$$ = $dvt$$7$$.touches;
    this.$_touchStartX$ = $DvtOverviewEventManager$$[0].pageX;
    this.$_touchStartY$ = $DvtOverviewEventManager$$[0].pageY;
    2 == $DvtOverviewEventManager$$.length && ($dvt$$7$$.preventDefault(), this.$_touchStartX2$ = $DvtOverviewEventManager$$[1].pageX, this.$_touchStartY2$ = $DvtOverviewEventManager$$[1].pageY, 20 > Math.abs(this.$_touchStartY$ - this.$_touchStartY2$) ? this.$_counter$ = 0 : this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = null);
  };
  $dvt$$7$$.$Overview$.prototype.$HandleTouchMove$ = function $$dvt$$7$$$$Overview$$$$HandleTouchMove$$($dvt$$7$$) {
    $dvt$$7$$.preventDefault();
    $dvt$$7$$ = $dvt$$7$$.touches;
    if (null != this.$_touchStartX2$ && null != this.$_touchStartY2$) {
      50 > this.$_counter$ ? this.$_counter$++ : (this.$handleRightHandleDragPositioning$(null, $dvt$$7$$[1].pageX - this.$_touchStartX2$, 0), this.$_touchStartX2$ = $dvt$$7$$[1].pageX, this.$_counter$ = 0);
    } else {
      var $DvtOverviewEventManager$$ = Math.abs(this.$_touchStartY$ - $dvt$$7$$[0].pageY);
      if (3 < Math.abs(this.$_touchStartX$ - $dvt$$7$$[0].pageX) || 3 < $DvtOverviewEventManager$$) {
        this.$_touchStartY$ = this.$_touchStartX$ = null;
      }
    }
  };
  $dvt$$7$$.$Overview$.prototype.$HandleTouchEnd$ = function $$dvt$$7$$$$Overview$$$$HandleTouchEnd$$($dvt$$7$$) {
    null != this.$_touchStartX2$ && null != this.$_touchStartY2$ ? this.$finishHandleDrag$() : null != this.$_touchStartX$ && null != this.$_touchStartY$ && this.$HandleShapeClick$($dvt$$7$$, this.$_touchStartX$, this.$_touchStartY$);
    this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = null;
  };
  $dvt$$7$$.$Overview$.prototype.$HandleKeyDown$ = function $$dvt$$7$$$$Overview$$$$HandleKeyDown$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = $DvtOverviewEventManager$$.keyCode;
    if ($DvtOverviewParser$$ === $dvt$$7$$.KeyboardEvent.$LEFT_ARROW$ || $DvtOverviewParser$$ === $dvt$$7$$.KeyboardEvent.$RIGHT_ARROW$) {
      $DvtOverviewParser$$ = $DvtOverviewParser$$ === $dvt$$7$$.KeyboardEvent.$LEFT_ARROW$ ? -1 : 1, ($DvtOverviewEventManager$$.shiftKey ? this.$handleRightHandleDragPositioning$ : this.$handleWindowDragPositioning$).call(this, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $DvtOverviewParser$$);
    }
  };
  $dvt$$7$$.$Overview$.prototype.$HandleKeyUp$ = function $$dvt$$7$$$$Overview$$$$HandleKeyUp$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = $DvtOverviewEventManager$$.keyCode;
    if ($DvtOverviewParser$$ === $dvt$$7$$.KeyboardEvent.$LEFT_ARROW$ || $DvtOverviewParser$$ === $dvt$$7$$.KeyboardEvent.$RIGHT_ARROW$) {
      $DvtOverviewParser$$ = $DvtOverviewParser$$ === $dvt$$7$$.KeyboardEvent.$LEFT_ARROW$ ? -1 : 1, ($DvtOverviewEventManager$$.shiftKey ? this.$finishHandleDrag$ : this.$finishWindowDrag$).call(this, $DvtOverviewParser$$, $DvtOverviewParser$$);
    }
  };
  $dvt$$7$$.$Overview$.prototype.$longScrollToPos$ = function $$dvt$$7$$$$Overview$$$$longScrollToPos$$($dvt$$7$$) {
    $dvt$$7$$ /= this.$_increment$;
    this.$isHorizontalRTL$() && ($dvt$$7$$ = 0 - $dvt$$7$$);
    this.$animateSlidingWindow$($dvt$$7$$);
  };
  $dvt$$7$$.$Overview$.prototype.$handleWindowDragPositioning$ = function $$dvt$$7$$$$Overview$$$$handleWindowDragPositioning$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $deltaY$$9$$) {
    this.$fireScrollEvent$($dvt$$7$$.$OverviewEvent$.$SUBTYPE_SCROLL_POS$, $DvtOverviewParser$$, $deltaY$$9$$);
  };
  $dvt$$7$$.$Overview$.prototype.$finishWindowDrag$ = function $$dvt$$7$$$$Overview$$$$finishWindowDrag$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$fireScrollEvent$($dvt$$7$$.$OverviewEvent$.$SUBTYPE_SCROLL_END$, $DvtOverviewEventManager$$, $DvtOverviewParser$$);
  };
  $dvt$$7$$.$Overview$.prototype.$fireScrollEvent$ = function $$dvt$$7$$$$Overview$$$$fireScrollEvent$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $deltaY$$11$$) {
    var $newEndTime$$1_slidingWindow$$17$$ = this.$getSlidingWindow$(), $pos$$66$$ = this.$getSlidingWindowPos$($newEndTime$$1_slidingWindow$$17$$), $newStartTime$$1_scrollTo_size$$36$$ = this.$getRectSize$($newEndTime$$1_slidingWindow$$17$$), $minPos$$1$$ = this.$_leftMargin$, $maxPos$$1$$ = this.$getMaximumPosition$();
    $DvtOverviewParser$$ = this.$isVertical$() ? $deltaY$$11$$ : $DvtOverviewParser$$;
    $pos$$66$$ + $DvtOverviewParser$$ <= $minPos$$1$$ ? (this.$setSlidingWindowPos$($newEndTime$$1_slidingWindow$$17$$, $minPos$$1$$), $newStartTime$$1_scrollTo_size$$36$$ = this.$isHorizontalRTL$() ? $dvt$$7$$.$OverviewEvent$.$END_POS$ : $dvt$$7$$.$OverviewEvent$.$START_POS$) : $pos$$66$$ + $newStartTime$$1_scrollTo_size$$36$$ + $DvtOverviewParser$$ >= $maxPos$$1$$ ? (this.$setSlidingWindowPos$($newEndTime$$1_slidingWindow$$17$$, $maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$36$$), $newStartTime$$1_scrollTo_size$$36$$ = 
    this.$isHorizontalRTL$() ? $dvt$$7$$.$OverviewEvent$.$START_POS$ : $dvt$$7$$.$OverviewEvent$.$END_POS$) : (this.$setSlidingWindowPos$($newEndTime$$1_slidingWindow$$17$$, $pos$$66$$ + $DvtOverviewParser$$), $newStartTime$$1_scrollTo_size$$36$$ = this.$isHorizontalRTL$() ? ($maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$36$$ - $pos$$66$$ - this.$_leftMargin$) * this.$_increment$ : ($pos$$66$$ - this.$_leftMargin$) * this.$_increment$);
    this.$ScrollTimeAxis$();
    $DvtOverviewEventManager$$ = new $dvt$$7$$.$OverviewEvent$($DvtOverviewEventManager$$);
    $DvtOverviewEventManager$$.setPosition($newStartTime$$1_scrollTo_size$$36$$);
    this.$isHorizontalRTL$() ? ($newStartTime$$1_scrollTo_size$$36$$ = this.$getPositionDate$(this.$Width$ - ($pos$$66$$ + this.$getRectSize$($newEndTime$$1_slidingWindow$$17$$))), $newEndTime$$1_slidingWindow$$17$$ = this.$getPositionDate$(this.$Width$ - $pos$$66$$)) : ($newStartTime$$1_scrollTo_size$$36$$ = this.$getPositionDate$($pos$$66$$), $newEndTime$$1_slidingWindow$$17$$ = this.$getPositionDate$($pos$$66$$ + this.$getRectSize$($newEndTime$$1_slidingWindow$$17$$)));
    $DvtOverviewEventManager$$.$setNewStartTime$($newStartTime$$1_scrollTo_size$$36$$);
    $DvtOverviewEventManager$$.$setNewEndTime$($newEndTime$$1_slidingWindow$$17$$);
    this.dispatchEvent($DvtOverviewEventManager$$);
  };
  $dvt$$7$$.$Overview$.prototype.$handleLeftHandleDragPositioning$ = function $$dvt$$7$$$$Overview$$$$handleLeftHandleDragPositioning$$($dvt$$7$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$handleLeftOrRightHandleDragPositioning$($dvt$$7$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, !0);
  };
  $dvt$$7$$.$Overview$.prototype.$handleRightHandleDragPositioning$ = function $$dvt$$7$$$$Overview$$$$handleRightHandleDragPositioning$$($dvt$$7$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$handleLeftOrRightHandleDragPositioning$($dvt$$7$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, !1);
  };
  $dvt$$7$$.$Overview$.prototype.$handleLeftOrRightHandleDragPositioning$ = function $$dvt$$7$$$$Overview$$$$handleLeftOrRightHandleDragPositioning$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $delta$$11_deltaY$$14$$, $isLeft$$5_newStartTime$$2$$) {
    var $evt$$53_size$$37$$ = this.$getOverviewSize$();
    $delta$$11_deltaY$$14$$ = this.$isVertical$() ? $delta$$11_deltaY$$14$$ : $DvtOverviewParser$$;
    if (0 != $delta$$11_deltaY$$14$$) {
      $DvtOverviewParser$$ = this.$getSlidingWindow$();
      var $windowPos$$ = this.$getSlidingWindowPos$($DvtOverviewParser$$), $windowSize$$ = this.$getSlidingWindowSize$($DvtOverviewParser$$);
      if ($isLeft$$5_newStartTime$$2$$) {
        if ($windowSize$$ - $delta$$11_deltaY$$14$$ <= this.$getMinimumWindowSize$() || $windowPos$$ + $delta$$11_deltaY$$14$$ <= this.$_leftMargin$) {
          return;
        }
        $DvtOverviewEventManager$$ = this.$isVertical$() ? this.$getCtx$().$pageToStageCoords$(this.$getPageX$($DvtOverviewEventManager$$), this.$getPageY$($DvtOverviewEventManager$$)).y : this.$getCtx$().$pageToStageCoords$(this.$getPageX$($DvtOverviewEventManager$$), this.$getPageY$($DvtOverviewEventManager$$)).x;
        $DvtOverviewEventManager$$ = this.$stageToLocal$($DvtOverviewEventManager$$);
        if (0 < $delta$$11_deltaY$$14$$ && $DvtOverviewEventManager$$ <= $windowPos$$ || 0 > $delta$$11_deltaY$$14$$ && $DvtOverviewEventManager$$ >= $windowPos$$) {
          return;
        }
        this.$setSlidingWindowPos$($DvtOverviewParser$$, $windowPos$$ + $delta$$11_deltaY$$14$$);
        this.$setSlidingWindowSize$($DvtOverviewParser$$, $windowSize$$ - $delta$$11_deltaY$$14$$);
      } else {
        if ($windowSize$$ + $delta$$11_deltaY$$14$$ <= this.$getMinimumWindowSize$() || $windowPos$$ + $windowSize$$ + $delta$$11_deltaY$$14$$ >= this.$getMaximumPosition$()) {
          return;
        }
        $DvtOverviewEventManager$$ = this.$isVertical$() ? this.$getCtx$().$pageToStageCoords$(this.$getPageX$($DvtOverviewEventManager$$), this.$getPageY$($DvtOverviewEventManager$$)).y : this.$getCtx$().$pageToStageCoords$(this.$getPageX$($DvtOverviewEventManager$$), this.$getPageY$($DvtOverviewEventManager$$)).x;
        $DvtOverviewEventManager$$ = this.$stageToLocal$($DvtOverviewEventManager$$);
        if (0 < $delta$$11_deltaY$$14$$ && $DvtOverviewEventManager$$ <= $windowPos$$ + $windowSize$$ || 0 > $delta$$11_deltaY$$14$$ && $DvtOverviewEventManager$$ >= $windowPos$$ + $windowSize$$) {
          return;
        }
        this.$setSlidingWindowSize$($DvtOverviewParser$$, $windowSize$$ + $delta$$11_deltaY$$14$$);
      }
      this.$ScrollTimeAxis$();
      $DvtOverviewEventManager$$ = this.$getPositionDate$(this.$getSlidingWindowSize$($DvtOverviewParser$$));
      $DvtOverviewEventManager$$ = $evt$$53_size$$37$$ * (this.$_end$ - this.$_start$) / ($DvtOverviewEventManager$$ - this.$_start$);
      $evt$$53_size$$37$$ = new $dvt$$7$$.$OverviewEvent$($dvt$$7$$.$OverviewEvent$.$SUBTYPE_RANGECHANGING$);
      $evt$$53_size$$37$$.$setNewSize$($DvtOverviewEventManager$$);
      $evt$$53_size$$37$$.$setEndHandle$(this.$isHorizontalRTL$() ? $isLeft$$5_newStartTime$$2$$ : !$isLeft$$5_newStartTime$$2$$);
      $isLeft$$5_newStartTime$$2$$ ? $evt$$53_size$$37$$.$setExpand$(0 > $delta$$11_deltaY$$14$$) : $evt$$53_size$$37$$.$setExpand$(0 < $delta$$11_deltaY$$14$$);
      this.$isHorizontalRTL$() ? ($isLeft$$5_newStartTime$$2$$ = this.$getPositionDate$(this.$Width$ - (this.$getSlidingWindowPos$($DvtOverviewParser$$) + this.$getRectSize$($DvtOverviewParser$$))), $DvtOverviewParser$$ = this.$getPositionDate$(this.$Width$ - this.$getSlidingWindowPos$($DvtOverviewParser$$))) : ($isLeft$$5_newStartTime$$2$$ = this.$getPositionDate$(this.$getSlidingWindowPos$($DvtOverviewParser$$)), $DvtOverviewParser$$ = this.$getPositionDate$(this.$getSlidingWindowPos$($DvtOverviewParser$$) + 
      this.$getRectSize$($DvtOverviewParser$$)));
      $evt$$53_size$$37$$.$setNewStartTime$($isLeft$$5_newStartTime$$2$$);
      $evt$$53_size$$37$$.$setNewEndTime$($DvtOverviewParser$$);
      this.dispatchEvent($evt$$53_size$$37$$);
    }
  };
  $dvt$$7$$.$Overview$.prototype.$finishHandleDrag$ = function $$dvt$$7$$$$Overview$$$$finishHandleDrag$$() {
    var $DvtOverviewEventManager$$ = this.$_start$, $DvtOverviewParser$$ = this.$_end$, $oldSize$$ = this.$_width$, $oldEndTime_size$$38$$ = this.$getOverviewSize$(), $newEndTime$$3_slidingWindow$$19$$ = this.$getSlidingWindow$(), $newStartTime$$3_time$$14$$ = this.$getPositionDate$(this.$getRectSize$($newEndTime$$3_slidingWindow$$19$$)), $DvtOverviewEventManager$$ = $oldEndTime_size$$38$$ * ($DvtOverviewParser$$ - $DvtOverviewEventManager$$) / ($newStartTime$$3_time$$14$$ - $DvtOverviewEventManager$$), 
    $DvtOverviewParser$$ = this.$getPositionDate$(this.$_oldStartPos$), $oldEndTime_size$$38$$ = this.$getPositionDate$(this.$_oldEndPos$);
    this.$isHorizontalRTL$() ? ($newStartTime$$3_time$$14$$ = this.$getPositionDate$(this.$Width$ - (this.$getSlidingWindowPos$($newEndTime$$3_slidingWindow$$19$$) + this.$getRectSize$($newEndTime$$3_slidingWindow$$19$$))), $newEndTime$$3_slidingWindow$$19$$ = this.$getPositionDate$(this.$Width$ - this.$getSlidingWindowPos$($newEndTime$$3_slidingWindow$$19$$))) : ($newStartTime$$3_time$$14$$ = this.$getPositionDate$(this.$getSlidingWindowPos$($newEndTime$$3_slidingWindow$$19$$)), $newEndTime$$3_slidingWindow$$19$$ = 
    this.$getPositionDate$(this.$getSlidingWindowPos$($newEndTime$$3_slidingWindow$$19$$) + this.$getRectSize$($newEndTime$$3_slidingWindow$$19$$)));
    var $evt$$54$$ = new $dvt$$7$$.$OverviewEvent$($dvt$$7$$.$OverviewEvent$.$SUBTYPE_RANGECHANGE$);
    $evt$$54$$.$setOldSize$($oldSize$$);
    $evt$$54$$.$setNewSize$($DvtOverviewEventManager$$);
    $evt$$54$$.$setOldStartTime$($DvtOverviewParser$$);
    $evt$$54$$.$setOldEndTime$($oldEndTime_size$$38$$);
    $evt$$54$$.$setNewStartTime$($newStartTime$$3_time$$14$$);
    $evt$$54$$.$setNewEndTime$($newEndTime$$3_slidingWindow$$19$$);
    this.dispatchEvent($evt$$54$$);
  };
  $dvt$$7$$.$Overview$.prototype.$ScrollTimeAxis$ = function $$dvt$$7$$$$Overview$$$$ScrollTimeAxis$$() {
    var $DvtOverviewEventManager$$ = this.$getSlidingWindow$(), $DvtOverviewParser$$ = $dvt$$7$$.$Overview$.$_DEFAULT_WINDOW_BORDER_WIDTH$ / 2, $left$$13$$ = this.$getSlidingWindowPos$($DvtOverviewEventManager$$), $leftCenter$$1$$ = $left$$13$$ + $DvtOverviewParser$$, $DvtOverviewEventManager$$ = $left$$13$$ + this.$getSlidingWindowSize$($DvtOverviewEventManager$$) - $DvtOverviewParser$$, $DvtOverviewParser$$ = this.$getLeftHandle$(), $rightHandle$$4$$ = this.$getRightHandle$(), $leftTopBar$$2$$ = 
    this.$getLeftTopBar$(), $rightTopBar$$2$$ = this.$getRightTopBar$(), $bottomBar$$2$$ = this.$getBottomBar$(), $topBar$$2$$ = this.$getTopBar$();
    this.$setLinePos$($DvtOverviewParser$$, $leftCenter$$1$$, $leftCenter$$1$$);
    this.$setLinePos$($rightHandle$$4$$, $DvtOverviewEventManager$$, $DvtOverviewEventManager$$);
    this.$setLinePos$($leftTopBar$$2$$, -1, $left$$13$$);
    this.$setLinePos$($rightTopBar$$2$$, this.$getLinePos1$($rightHandle$$4$$), -1);
    this.$setLinePos$($bottomBar$$2$$, this.$getLinePos1$($DvtOverviewParser$$), this.$getLinePos1$($rightHandle$$4$$));
    this.$setLinePos$($topBar$$2$$, this.$getLinePos1$($DvtOverviewParser$$), this.$getLinePos1$($rightHandle$$4$$));
  };
  $dvt$$7$$.$Overview$.prototype.dispatchEvent = function $$dvt$$7$$$$Overview$$$dispatchEvent$($DvtOverviewEventManager$$) {
    $dvt$$7$$.$EventDispatcher$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $DvtOverviewEventManager$$);
  };
  $dvt$$7$$.$Overview$.prototype.$destroy$ = function $$dvt$$7$$$$Overview$$$$destroy$$() {
    this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = null);
    $dvt$$7$$.$OverviewUtils$.$supportsTouch$() ? (this.$removeEvtListener$($dvt$$7$$.TouchEvent.$TOUCHSTART$, this.$HandleTouchStart$, !1, this), this.$removeEvtListener$($dvt$$7$$.TouchEvent.$TOUCHMOVE$, this.$HandleTouchMove$, !1, this), this.$removeEvtListener$($dvt$$7$$.TouchEvent.$TOUCHEND$, this.$HandleTouchEnd$, !1, this), this.$removeEvtListener$($dvt$$7$$.MouseEvent.$CLICK$, this.$HandleShapeClick$, !1, this)) : (this.$removeEvtListener$($dvt$$7$$.MouseEvent.$MOUSEOVER$, this.$HandleShapeMouseOver$, 
    !1, this), this.$removeEvtListener$($dvt$$7$$.MouseEvent.$MOUSEOUT$, this.$HandleShapeMouseOut$, !1, this), this.$removeEvtListener$($dvt$$7$$.MouseEvent.$CLICK$, this.$HandleShapeClick$, !1, this), this.$removeEvtListener$($dvt$$7$$.KeyboardEvent.$KEYDOWN$, this.$HandleKeyDown$, !1, this), this.$removeEvtListener$($dvt$$7$$.KeyboardEvent.$KEYUP$, this.$HandleKeyUp$, !1, this));
    $dvt$$7$$.$Overview$.$superclass$.$destroy$.call(this);
  };
  $dvt$$7$$.$Obj$.$createSubclass$($DvtOverviewParser$$, $dvt$$7$$.$Obj$);
  $DvtOverviewParser$$.prototype.Init = function $$DvtOverviewParser$$$$Init$($dvt$$7$$) {
    this.$_view$ = $dvt$$7$$;
  };
  $DvtOverviewParser$$.prototype.parse = function $$DvtOverviewParser$$$$parse$($dvt$$7$$) {
    return this.$ParseRootAttributes$($dvt$$7$$);
  };
  $DvtOverviewParser$$.prototype.$ParseRootAttributes$ = function $$DvtOverviewParser$$$$$ParseRootAttributes$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = {};
    $DvtOverviewParser$$.$animationOnClick$ = $DvtOverviewEventManager$$.animationOnClick;
    null != $DvtOverviewEventManager$$.startTime && ($DvtOverviewParser$$.start = $DvtOverviewEventManager$$.startTime);
    null != $DvtOverviewEventManager$$.endTime && ($DvtOverviewParser$$.end = $DvtOverviewEventManager$$.endTime);
    null == $DvtOverviewParser$$.start && ($DvtOverviewParser$$.start = (new Date).getTime());
    if (null == $DvtOverviewParser$$.end || $DvtOverviewParser$$.end <= $DvtOverviewParser$$.start) {
      $DvtOverviewParser$$.end = $DvtOverviewParser$$.start + 864E5;
    }
    null != $DvtOverviewEventManager$$.currentTime && ($DvtOverviewParser$$.currentTime = $DvtOverviewEventManager$$.currentTime);
    null != $DvtOverviewEventManager$$.initialFocusTime && ($DvtOverviewParser$$.$initialFocusTime$ = $DvtOverviewEventManager$$.initialFocusTime);
    $DvtOverviewParser$$.orientation = "horizontal";
    null != $DvtOverviewEventManager$$.orientation && ($DvtOverviewParser$$.orientation = $DvtOverviewEventManager$$.orientation);
    $DvtOverviewParser$$.$featuresOff$ = $DvtOverviewEventManager$$.featuresOff;
    $DvtOverviewParser$$.$minimumWindowSize$ = $DvtOverviewEventManager$$.minimumWindowSize;
    $DvtOverviewParser$$.$leftMargin$ = $DvtOverviewEventManager$$.leftMargin;
    $DvtOverviewParser$$.$rightMargin$ = $DvtOverviewEventManager$$.rightMargin;
    if (null != $DvtOverviewEventManager$$.viewportEndTime) {
      var $viewportEndTime$$ = $DvtOverviewEventManager$$.viewportEndTime, $viewportStartTime$$ = $DvtOverviewParser$$.start;
      null != $DvtOverviewEventManager$$.viewportStartTime && $DvtOverviewEventManager$$.viewportStartTime < $viewportEndTime$$ && ($viewportStartTime$$ = $DvtOverviewEventManager$$.viewportStartTime);
      $DvtOverviewParser$$.width = null != $DvtOverviewEventManager$$.viewportEndPos ? this.$calculateWidth$($DvtOverviewParser$$.start, $DvtOverviewParser$$.end, $viewportStartTime$$, $viewportEndTime$$, $DvtOverviewEventManager$$.viewportEndPos) : this.$calculateWidth$($DvtOverviewParser$$.start, $DvtOverviewParser$$.end, $viewportStartTime$$, $viewportEndTime$$, this.$_view$.$Width$);
      $DvtOverviewParser$$.$renderStart$ = $viewportStartTime$$;
    } else {
      $DvtOverviewParser$$.$renderStart$ = $DvtOverviewParser$$.start;
    }
    0 == $DvtOverviewParser$$.width && ($DvtOverviewParser$$.width = 1E3);
    $DvtOverviewParser$$.$overviewPosition$ = "below";
    $DvtOverviewParser$$.$selectionMode$ = "none";
    $DvtOverviewParser$$.$isRtl$ = $dvt$$7$$.$Agent$.$isRightToLeft$(this.$_view$.$getCtx$()).toString();
    null != $DvtOverviewEventManager$$.rtl && ($DvtOverviewParser$$.$isRtl$ = $DvtOverviewEventManager$$.rtl.toString());
    $DvtOverviewParser$$.$handleFillColor$ = "#FFFFFF";
    $DvtOverviewParser$$.$handleTextureColor$ = "#B3C6DB";
    $DvtOverviewParser$$.$windowBackgroundColor$ = "#FFFFFF";
    $DvtOverviewParser$$.$windowBackgroundAlpha$ = 1;
    $DvtOverviewParser$$.$windowBorderTopStyle$ = "solid";
    $DvtOverviewParser$$.$windowBorderRightStyle$ = "solid";
    $DvtOverviewParser$$.$windowBorderBottomStyle$ = "solid";
    $DvtOverviewParser$$.$windowBorderLeftStyle$ = "solid";
    $DvtOverviewParser$$.$windowBorderTopColor$ = "#4F4F4F";
    $DvtOverviewParser$$.$windowBorderRightColor$ = "#4F4F4F";
    $DvtOverviewParser$$.$windowBorderBottomColor$ = "#4F4F4F";
    $DvtOverviewParser$$.$windowBorderLeftColor$ = "#4F4F4F";
    $DvtOverviewParser$$.$overviewBackgroundColor$ = "#E6ECF3";
    $DvtOverviewParser$$.$currentTimeIndicatorColor$ = "#C000D1";
    $DvtOverviewParser$$.$timeIndicatorColor$ = "#BCC7D2";
    $DvtOverviewParser$$.$timeAxisBarColor$ = "#e5e5e5";
    $DvtOverviewParser$$.$timeAxisBarOpacity$ = 1;
    $DvtOverviewParser$$.$leftFilterPanelColor$ = "#FFFFFF";
    $DvtOverviewParser$$.$leftFilterPanelAlpha$ = .7;
    $DvtOverviewParser$$.$rightFilterPanelColor$ = "#FFFFFF";
    $DvtOverviewParser$$.$rightFilterPanelAlpha$ = .7;
    null != $DvtOverviewEventManager$$.style && (null != $DvtOverviewEventManager$$.style.handleFillColor && ($DvtOverviewParser$$.$handleFillColor$ = $DvtOverviewEventManager$$.style.handleFillColor), null != $DvtOverviewEventManager$$.style.handleTextureColor && ($DvtOverviewParser$$.$handleTextureColor$ = $DvtOverviewEventManager$$.style.handleTextureColor), null != $DvtOverviewEventManager$$.style.handleBackgroundImage && ($DvtOverviewParser$$.$handleBackgroundImage$ = $DvtOverviewEventManager$$.style.handleBackgroundImage), 
    null != $DvtOverviewEventManager$$.style.handleWidth && ($DvtOverviewParser$$.$handleWidth$ = $DvtOverviewEventManager$$.style.handleWidth), null != $DvtOverviewEventManager$$.style.handleHeight && ($DvtOverviewParser$$.$handleHeight$ = $DvtOverviewEventManager$$.style.handleHeight), null != $DvtOverviewEventManager$$.style.windowBackgroundColor && ($DvtOverviewParser$$.$windowBackgroundColor$ = $DvtOverviewEventManager$$.style.windowBackgroundColor), null != $DvtOverviewEventManager$$.style.windowBackgroundAlpha && 
    ($DvtOverviewParser$$.$windowBackgroundAlpha$ = $DvtOverviewEventManager$$.style.windowBackgroundAlpha), null != $DvtOverviewEventManager$$.style.windowBorderTopStyle && ($DvtOverviewParser$$.$windowBorderTopStyle$ = $DvtOverviewEventManager$$.style.windowBorderTopStyle), null != $DvtOverviewEventManager$$.style.windowBorderRightStyle && ($DvtOverviewParser$$.$windowBorderRightStyle$ = $DvtOverviewEventManager$$.style.windowBorderRightStyle), null != $DvtOverviewEventManager$$.style.windowBorderBottomStyle && 
    ($DvtOverviewParser$$.$windowBorderBottomStyle$ = $DvtOverviewEventManager$$.style.windowBorderBottomStyle), null != $DvtOverviewEventManager$$.style.windowBorderLeftStyle && ($DvtOverviewParser$$.$windowBorderLeftStyle$ = $DvtOverviewEventManager$$.style.windowBorderLeftStyle), null != $DvtOverviewEventManager$$.style.windowBorderTopColor && ($DvtOverviewParser$$.$windowBorderTopColor$ = $DvtOverviewEventManager$$.style.windowBorderTopColor), null != $DvtOverviewEventManager$$.style.windowBorderRightColor && 
    ($DvtOverviewParser$$.$windowBorderRightColor$ = $DvtOverviewEventManager$$.style.windowBorderRightColor), null != $DvtOverviewEventManager$$.style.windowBorderBottomColor && ($DvtOverviewParser$$.$windowBorderBottomColor$ = $DvtOverviewEventManager$$.style.windowBorderBottomColor), null != $DvtOverviewEventManager$$.style.windowBorderLeftColor && ($DvtOverviewParser$$.$windowBorderLeftColor$ = $DvtOverviewEventManager$$.style.windowBorderLeftColor), null != $DvtOverviewEventManager$$.style.overviewBackgroundColor && 
    ($DvtOverviewParser$$.$overviewBackgroundColor$ = $DvtOverviewEventManager$$.style.overviewBackgroundColor), null != $DvtOverviewEventManager$$.style.currentTimeIndicatorColor && ($DvtOverviewParser$$.$currentTimeIndicatorColor$ = $DvtOverviewEventManager$$.style.currentTimeIndicatorColor), null != $DvtOverviewEventManager$$.style.timeIndicatorColor && ($DvtOverviewParser$$.$timeIndicatorColor$ = $DvtOverviewEventManager$$.style.timeIndicatorColor), null != $DvtOverviewEventManager$$.style.leftFilterPanelColor && 
    ($DvtOverviewParser$$.$leftFilterPanelColor$ = $DvtOverviewEventManager$$.style.leftFilterPanelColor), null != $DvtOverviewEventManager$$.style.leftFilterPanelAlpha && ($DvtOverviewParser$$.$leftFilterPanelAlpha$ = $DvtOverviewEventManager$$.style.leftFilterPanelAlpha), null != $DvtOverviewEventManager$$.style.rightFilterPanelColor && ($DvtOverviewParser$$.$rightFilterPanelColor$ = $DvtOverviewEventManager$$.style.rightFilterPanelColor), null != $DvtOverviewEventManager$$.style.rightFilterPanelAlpha && 
    ($DvtOverviewParser$$.$rightFilterPanelAlpha$ = $DvtOverviewEventManager$$.style.rightFilterPanelAlpha));
    return $DvtOverviewParser$$;
  };
  $DvtOverviewParser$$.prototype.$calculateWidth$ = function $$DvtOverviewParser$$$$$calculateWidth$$($dvt$$7$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $viewportEndTime$$1$$, $viewportEndPos$$) {
    $dvt$$7$$ = $viewportEndPos$$ * ($DvtOverviewEventManager$$ - $dvt$$7$$);
    $DvtOverviewParser$$ = $viewportEndTime$$1$$ - $DvtOverviewParser$$;
    return 0 == $dvt$$7$$ || 0 == $DvtOverviewParser$$ ? 0 : $dvt$$7$$ / $DvtOverviewParser$$;
  };
  $dvt$$7$$.$OverviewEvent$ = function $$dvt$$7$$$$OverviewEvent$$($DvtOverviewEventManager$$) {
    this.Init($dvt$$7$$.$OverviewEvent$.$TYPE$);
    this.$_subtype$ = $DvtOverviewEventManager$$;
  };
  $dvt$$7$$.$Obj$.$createSubclass$($dvt$$7$$.$OverviewEvent$, $dvt$$7$$.$BaseComponentEvent$);
  $dvt$$7$$.$OverviewEvent$.$TYPE$ = "overview";
  $dvt$$7$$.$OverviewEvent$.$SUBTYPE_PRE_RANGECHANGE$ = "dropCallback";
  $dvt$$7$$.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$ = "scrollTime";
  $dvt$$7$$.$OverviewEvent$.$SUBTYPE_SCROLL_POS$ = "scrollPos";
  $dvt$$7$$.$OverviewEvent$.$SUBTYPE_SCROLL_END$ = "scrollEnd";
  $dvt$$7$$.$OverviewEvent$.$SUBTYPE_RANGECHANGE$ = "rangeChange";
  $dvt$$7$$.$OverviewEvent$.$SUBTYPE_RANGECHANGING$ = "rangeChanging";
  $dvt$$7$$.$OverviewEvent$.$TIME_KEY$ = "time";
  $dvt$$7$$.$OverviewEvent$.$POS_KEY$ = "pos";
  $dvt$$7$$.$OverviewEvent$.$OLD_SIZE_KEY$ = "oldSize";
  $dvt$$7$$.$OverviewEvent$.$NEW_SIZE_KEY$ = "newSize";
  $dvt$$7$$.$OverviewEvent$.$OLD_START_TIME_KEY$ = "oldStartTime";
  $dvt$$7$$.$OverviewEvent$.$NEW_START_TIME_KEY$ = "newStartTime";
  $dvt$$7$$.$OverviewEvent$.$OLD_END_TIME_KEY$ = "oldEndTime";
  $dvt$$7$$.$OverviewEvent$.$NEW_END_TIME_KEY$ = "newEndTime";
  $dvt$$7$$.$OverviewEvent$.$EXPAND_KEY$ = "expand";
  $dvt$$7$$.$OverviewEvent$.$END_HANDLE_KEY$ = "endHandle";
  $dvt$$7$$.$OverviewEvent$.$START_POS$ = -1;
  $dvt$$7$$.$OverviewEvent$.$END_POS$ = -2;
  $dvt$$7$$.$OverviewEvent$.prototype.$getSubType$ = function $$dvt$$7$$$$OverviewEvent$$$$getSubType$$() {
    return this.$_subtype$;
  };
  $dvt$$7$$.$OverviewEvent$.prototype.setTime = function $$dvt$$7$$$$OverviewEvent$$$setTime$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$7$$.$OverviewEvent$.$TIME_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$7$$.$OverviewEvent$.prototype.getTime = function $$dvt$$7$$$$OverviewEvent$$$getTime$() {
    return this.$getParamValue$($dvt$$7$$.$OverviewEvent$.$TIME_KEY$);
  };
  $dvt$$7$$.$OverviewEvent$.prototype.$setOldSize$ = function $$dvt$$7$$$$OverviewEvent$$$$setOldSize$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$7$$.$OverviewEvent$.$OLD_SIZE_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$7$$.$OverviewEvent$.prototype.$setNewSize$ = function $$dvt$$7$$$$OverviewEvent$$$$setNewSize$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$7$$.$OverviewEvent$.$NEW_SIZE_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$7$$.$OverviewEvent$.prototype.$setOldStartTime$ = function $$dvt$$7$$$$OverviewEvent$$$$setOldStartTime$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$7$$.$OverviewEvent$.$OLD_START_TIME_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$7$$.$OverviewEvent$.prototype.$setNewStartTime$ = function $$dvt$$7$$$$OverviewEvent$$$$setNewStartTime$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$7$$.$OverviewEvent$.$NEW_START_TIME_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$7$$.$OverviewEvent$.prototype.$getNewStartTime$ = function $$dvt$$7$$$$OverviewEvent$$$$getNewStartTime$$() {
    return this.$getParamValue$($dvt$$7$$.$OverviewEvent$.$NEW_START_TIME_KEY$);
  };
  $dvt$$7$$.$OverviewEvent$.prototype.$setOldEndTime$ = function $$dvt$$7$$$$OverviewEvent$$$$setOldEndTime$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$7$$.$OverviewEvent$.$OLD_END_TIME_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$7$$.$OverviewEvent$.prototype.$setNewEndTime$ = function $$dvt$$7$$$$OverviewEvent$$$$setNewEndTime$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$7$$.$OverviewEvent$.$NEW_END_TIME_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$7$$.$OverviewEvent$.prototype.$getNewEndTime$ = function $$dvt$$7$$$$OverviewEvent$$$$getNewEndTime$$() {
    return this.$getParamValue$($dvt$$7$$.$OverviewEvent$.$NEW_END_TIME_KEY$);
  };
  $dvt$$7$$.$OverviewEvent$.prototype.$setExpand$ = function $$dvt$$7$$$$OverviewEvent$$$$setExpand$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$7$$.$OverviewEvent$.$EXPAND_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$7$$.$OverviewEvent$.prototype.$setEndHandle$ = function $$dvt$$7$$$$OverviewEvent$$$$setEndHandle$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$7$$.$OverviewEvent$.$END_HANDLE_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$7$$.$OverviewEvent$.prototype.setPosition = function $$dvt$$7$$$$OverviewEvent$$$setPosition$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$7$$.$OverviewEvent$.$POS_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$7$$.$OverviewEvent$.prototype.$getPosition$ = function $$dvt$$7$$$$OverviewEvent$$$$getPosition$$() {
    return this.$getParamValue$($dvt$$7$$.$OverviewEvent$.$POS_KEY$);
  };
  $dvt$$7$$.$Obj$.$createSubclass$($DvtOverviewEventManager$$, $dvt$$7$$.$EventManager$);
  $DvtOverviewEventManager$$.prototype.$addListeners$ = function $$DvtOverviewEventManager$$$$$addListeners$$($DvtOverviewParser$$) {
    $DvtOverviewEventManager$$.$superclass$.$addListeners$.call(this, $DvtOverviewParser$$);
    $dvt$$7$$.$SvgDocumentUtils$.$addDragListeners$(this.$_overview$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  };
  $DvtOverviewEventManager$$.prototype.$_onDragStart$ = function $$DvtOverviewEventManager$$$$$_onDragStart$$($DvtOverviewEventManager$$) {
    return $dvt$$7$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragStart$($DvtOverviewEventManager$$) : this.$_onMouseDragStart$($DvtOverviewEventManager$$);
  };
  $DvtOverviewEventManager$$.prototype.$_onDragMove$ = function $$DvtOverviewEventManager$$$$$_onDragMove$$($DvtOverviewEventManager$$) {
    return $dvt$$7$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragMove$($DvtOverviewEventManager$$) : this.$_onMouseDragMove$($DvtOverviewEventManager$$);
  };
  $DvtOverviewEventManager$$.prototype.$_onDragEnd$ = function $$DvtOverviewEventManager$$$$$_onDragEnd$$($DvtOverviewEventManager$$) {
    return $dvt$$7$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragEnd$($DvtOverviewEventManager$$) : this.$_onMouseDragEnd$($DvtOverviewEventManager$$);
  };
  $DvtOverviewEventManager$$.prototype.$_getRelativePosition$ = function $$DvtOverviewEventManager$$$$$_getRelativePosition$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = this.$_context$.$getStageAbsolutePosition$());
    return new $dvt$$7$$.$Point$($DvtOverviewEventManager$$ - this.$_stageAbsolutePosition$.x, $DvtOverviewParser$$ - this.$_stageAbsolutePosition$.y);
  };
  $DvtOverviewEventManager$$.prototype.$_onMouseDragStart$ = function $$DvtOverviewEventManager$$$$$_onMouseDragStart$$($DvtOverviewEventManager$$) {
    if ($DvtOverviewEventManager$$.button != $dvt$$7$$.MouseEvent.$RIGHT_CLICK_BUTTON$) {
      var $DvtOverviewParser$$ = this.$_getRelativePosition$($DvtOverviewEventManager$$.pageX, $DvtOverviewEventManager$$.pageY);
      $dvt$$7$$.$EventManager$.$consumeEvent$($DvtOverviewEventManager$$);
      this.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus();
      return this.$_overview$.$beginDragPan$($DvtOverviewEventManager$$, $DvtOverviewParser$$.x, $DvtOverviewParser$$.y);
    }
    return !1;
  };
  $DvtOverviewEventManager$$.prototype.$_onMouseDragMove$ = function $$DvtOverviewEventManager$$$$$_onMouseDragMove$$($dvt$$7$$) {
    var $DvtOverviewEventManager$$ = this.$_getRelativePosition$($dvt$$7$$.pageX, $dvt$$7$$.pageY);
    $dvt$$7$$.stopPropagation();
    this.$_overview$.$contDragPan$($dvt$$7$$, $DvtOverviewEventManager$$.x, $DvtOverviewEventManager$$.y);
    return !0;
  };
  $DvtOverviewEventManager$$.prototype.$_onMouseDragEnd$ = function $$DvtOverviewEventManager$$$$$_onMouseDragEnd$$($dvt$$7$$) {
    $dvt$$7$$.stopPropagation();
    this.$_overview$.$endDragPan$();
    this.$_stageAbsolutePosition$ = null;
  };
  $DvtOverviewEventManager$$.prototype.$_onTouchDragStart$ = function $$DvtOverviewEventManager$$$$$_onTouchDragStart$$($dvt$$7$$) {
    var $DvtOverviewEventManager$$ = $dvt$$7$$.touches;
    $dvt$$7$$.stopPropagation();
    return 1 == $DvtOverviewEventManager$$.length ? ($DvtOverviewEventManager$$ = this.$_getRelativePosition$($DvtOverviewEventManager$$[0].pageX, $DvtOverviewEventManager$$[0].pageY), $dvt$$7$$.preventDefault(), this.$_overview$.$beginDragPan$($dvt$$7$$, $DvtOverviewEventManager$$.x, $DvtOverviewEventManager$$.y)) : !1;
  };
  $DvtOverviewEventManager$$.prototype.$_onTouchDragMove$ = function $$DvtOverviewEventManager$$$$$_onTouchDragMove$$($dvt$$7$$) {
    var $DvtOverviewEventManager$$ = $dvt$$7$$.touches;
    1 == $DvtOverviewEventManager$$.length && ($DvtOverviewEventManager$$ = this.$_getRelativePosition$($DvtOverviewEventManager$$[0].pageX, $DvtOverviewEventManager$$[0].pageY), this.$_overview$.$contDragPan$($dvt$$7$$, $DvtOverviewEventManager$$.x, $DvtOverviewEventManager$$.y), $dvt$$7$$.preventDefault());
    $dvt$$7$$.stopPropagation();
  };
  $DvtOverviewEventManager$$.prototype.$_onTouchDragEnd$ = function $$DvtOverviewEventManager$$$$$_onTouchDragEnd$$($DvtOverviewEventManager$$) {
    this.$_overview$.$endDragPan$();
    $dvt$$7$$.$EventManager$.$consumeEvent$($DvtOverviewEventManager$$);
    this.$_stageAbsolutePosition$ = null;
  };
  $dvt$$7$$.$exportProperty$($dvt$$7$$, "Overview", $dvt$$7$$.$Overview$);
  $dvt$$7$$.$exportProperty$($dvt$$7$$.$Overview$.prototype, "render", $dvt$$7$$.$Overview$.prototype.$render$);
})(dvt);
