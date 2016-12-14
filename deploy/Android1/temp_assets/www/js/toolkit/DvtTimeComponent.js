(function($dvt$$14$$) {
  $dvt$$14$$.$TimeComponent$ = function $$dvt$$14$$$$TimeComponent$$($dvt$$14$$, $callback$$172$$, $callbackObj$$93$$) {
    this.Init($dvt$$14$$, $callback$$172$$, $callbackObj$$93$$);
  };
  $dvt$$14$$.$Obj$.$createSubclass$($dvt$$14$$.$TimeComponent$, $dvt$$14$$.$BaseComponent$);
  $dvt$$14$$.$TimeComponent$.$ZOOM_BY_VALUE$ = 1.5;
  $dvt$$14$$.$TimeComponent$.$SCROLL_LINE_HEIGHT$ = 15;
  $dvt$$14$$.$TimeComponent$.$WHEEL_UNITS_PER_LINE$ = 40;
  $dvt$$14$$.$TimeComponent$.prototype.Init = function $$dvt$$14$$$$TimeComponent$$$Init$($context$$423$$, $callback$$173$$, $callbackObj$$94$$) {
    $dvt$$14$$.$TimeComponent$.$superclass$.Init.call(this, $context$$423$$, $callback$$173$$, $callbackObj$$94$$);
    this.$_virtualize$ = !1;
  };
  $dvt$$14$$.$TimeComponent$.prototype.$render$ = function $$dvt$$14$$$$TimeComponent$$$$render$$($dvt$$14$$, $width$$144$$, $height$$123$$) {
    $dvt$$14$$ && (this.$_resources$ = $dvt$$14$$._resources, null == this.$_resources$ && (this.$_resources$ = []), this.$SetOptions$($dvt$$14$$));
    this.$Width$ = $width$$144$$;
    this.$Height$ = $height$$123$$;
    this.$Options$ && ($dvt$$14$$ = this.$Parse$(this.$Options$), this.$_applyParsedProperties$($dvt$$14$$));
  };
  $dvt$$14$$.$TimeComponent$.prototype.$SetOptions$ = function $$dvt$$14$$$$TimeComponent$$$$SetOptions$$($options$$323$$) {
    this.$Options$ = this.$Defaults$.$calcOptions$($options$$323$$);
    $dvt$$14$$.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none");
  };
  $dvt$$14$$.$TimeComponent$.prototype.$_applyParsedProperties$ = function $$dvt$$14$$$$TimeComponent$$$$_applyParsedProperties$$($dvt$$14$$) {
    this.$_start$ = $dvt$$14$$.start;
    this.$_end$ = $dvt$$14$$.end;
    this.$_inlineStyle$ = $dvt$$14$$.$inlineStyle$;
    this.$applyStyleValues$();
  };
  $dvt$$14$$.$TimeComponent$.prototype.$applyStyleValues$ = function $$dvt$$14$$$$TimeComponent$$$$applyStyleValues$$() {
    this.$_style$ && this.$_style$.$parseInlineStyle$(this.$_inlineStyle$);
  };
  $dvt$$14$$.$TimeComponent$.prototype.$setContentLength$ = function $$dvt$$14$$$$TimeComponent$$$$setContentLength$$($dvt$$14$$) {
    this.$_contentLength$ = this.$_canvasLength$ < $dvt$$14$$ ? $dvt$$14$$ : this.$_canvasLength$;
    this.$_virtualize$ || (this.$_fetchStartPos$ = 0, this.$_fetchEndPos$ = this.$_contentLength$);
  };
  $dvt$$14$$.$TimeComponent$.prototype.$isRTL$ = function $$dvt$$14$$$$TimeComponent$$$$isRTL$$() {
    return $dvt$$14$$.$Agent$.$isRightToLeft$(this.$getCtx$());
  };
  $dvt$$14$$.$TimeComponent$.prototype.$isVertical$ = function $$dvt$$14$$$$TimeComponent$$$$isVertical$$() {
    return this.$_isVertical$;
  };
  $dvt$$14$$.$TimeComponent$.prototype.$getTimeAxis$ = function $$dvt$$14$$$$TimeComponent$$$$getTimeAxis$$() {
    return null;
  };
  $dvt$$14$$.$TimeComponent$.prototype.$prepareViewportLength$ = function $$dvt$$14$$$$TimeComponent$$$$prepareViewportLength$$() {
    this.$setRelativeStartPos$(0);
    if (this.$_viewStartTime$ && this.$_viewEndTime$) {
      var $dvt$$14$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
      0 < $dvt$$14$$ && ($dvt$$14$$ = this.$_canvasLength$ / $dvt$$14$$, this.$setContentLength$($dvt$$14$$ * (this.$_end$ - this.$_start$)), this.$setRelativeStartPos$($dvt$$14$$ * (this.$_start$ - this.$_viewStartTime$)));
    } else {
      var $dvt$$14$$ = this.$getTimeAxis$(), $dvt$$14$$ = $dvt$$14$$.$_zoomLevelLengths$[$dvt$$14$$.$_zoomLevelOrder$], $startTime$$20$$ = this.$_start$, $endTime$$17$$ = this.$_end$;
      null == this.$_viewStartTime$ ? null != this.$_viewEndTime$ ? (this.$_viewStartTime$ = this.$_viewEndTime$ - this.$_canvasLength$ / $dvt$$14$$ * ($endTime$$17$$ - $startTime$$20$$), this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$), $dvt$$14$$ = this.$_viewEndTime$ - this.$_viewStartTime$, $dvt$$14$$ = this.$_canvasLength$ / $dvt$$14$$, this.$setContentLength$($dvt$$14$$ * (this.$_end$ - this.$_start$)), this.$setRelativeStartPos$($dvt$$14$$ * (this.$_start$ - 
      this.$_viewStartTime$))) : (this.$_viewStartTime$ = this.$_start$, this.$setRelativeStartPos$(0), this.$_viewEndTime$ = this.$_canvasLength$ / $dvt$$14$$ * ($endTime$$17$$ - $startTime$$20$$) + this.$_viewStartTime$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$)) : (this.$_viewEndTime$ = this.$_canvasLength$ / $dvt$$14$$ * ($endTime$$17$$ - $startTime$$20$$) + this.$_viewStartTime$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$), $dvt$$14$$ = 
      this.$_viewEndTime$ - this.$_viewStartTime$, $dvt$$14$$ = this.$_canvasLength$ / $dvt$$14$$, this.$setContentLength$($dvt$$14$$ * (this.$_end$ - this.$_start$)), this.$setRelativeStartPos$($dvt$$14$$ * (this.$_start$ - this.$_viewStartTime$)));
    }
  };
  $dvt$$14$$.$TimeComponent$.prototype.$renderTimeZoomCanvas$ = function $$dvt$$14$$$$TimeComponent$$$$renderTimeZoomCanvas$$($container$$192$$) {
    this.$_timeZoomCanvas$ ? this.$_timeZoomCanvas$.$setClipPath$(null) : this.$_timeZoomCanvas$ = new $dvt$$14$$.$Container$(this.$getCtx$(), "iCanvas");
    var $cp$$12$$ = new $dvt$$14$$.$ClipPath$;
    this.$isVertical$() ? ($cp$$12$$.$addRect$(this.$_startX$, this.$_startY$, this.$_canvasSize$, this.$_canvasLength$), this.$_timeZoomCanvas$.$setTranslateX$(this.$_startX$), this.$_timeZoomCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$)) : ($cp$$12$$.$addRect$(this.$_startX$, this.$_startY$, this.$_canvasLength$, this.$_canvasSize$), this.$_timeZoomCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$), this.$_timeZoomCanvas$.$setTranslateY$(this.$_startY$));
    $container$$192$$.$setClipPath$($cp$$12$$);
    this.$_timeZoomCanvas$.getParent() != $container$$192$$ && $container$$192$$.$addChild$(this.$_timeZoomCanvas$);
  };
  $dvt$$14$$.$TimeComponent$.prototype.$renderZoomControls$ = function $$dvt$$14$$$$TimeComponent$$$$renderZoomControls$$($options$$324_zoomOutOptions_zoomOutPosY$$1$$) {
    var $contentLength_context$$424$$ = this.$getCtx$(), $timeAxis$$7$$ = this.$getTimeAxis$(), $zoomInOptions_zoomInPosY$$1$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.zoomInProps, $disabledState_imageSize$$ = $zoomInOptions_zoomInPosY$$1$$.imageSize, $cssUrl_upState$$17$$ = $zoomInOptions_zoomInPosY$$1$$.cssUrl, $cssUrlHover_overState$$14$$ = $zoomInOptions_zoomInPosY$$1$$.cssUrlHover, $cssUrlActive_downState$$14$$ = $zoomInOptions_zoomInPosY$$1$$.cssUrlActive, $cssUrlDisabled_zoomOutPosX$$ = 
    $zoomInOptions_zoomInPosY$$1$$.cssUrlDisabled, $enabledBackgroundColor$$ = $zoomInOptions_zoomInPosY$$1$$.enabledBackgroundColor, $enabledBorderColor$$ = $zoomInOptions_zoomInPosY$$1$$.enabledBorderColor, $hoverBackgroundColor$$ = $zoomInOptions_zoomInPosY$$1$$.hoverBackgroundColor, $hoverBorderColor$$ = $zoomInOptions_zoomInPosY$$1$$.hoverBorderColor, $activeBackgroundColor$$ = $zoomInOptions_zoomInPosY$$1$$.activeBackgroundColor, $activeBorderColor$$ = $zoomInOptions_zoomInPosY$$1$$.activeBorderColor, 
    $disabledBackgroundColor$$ = $zoomInOptions_zoomInPosY$$1$$.disabledBackgroundColor, $disabledBorderColor$$ = $zoomInOptions_zoomInPosY$$1$$.disabledBorderColor, $cssUrl_upState$$17$$ = $dvt$$14$$.$TransientButton$.$getStateFromURL$($contentLength_context$$424$$, $cssUrl_upState$$17$$, $disabledState_imageSize$$, $disabledState_imageSize$$, $enabledBackgroundColor$$, $enabledBorderColor$$), $cssUrlHover_overState$$14$$ = $dvt$$14$$.$TransientButton$.$getStateFromURL$($contentLength_context$$424$$, 
    $cssUrlHover_overState$$14$$, $disabledState_imageSize$$, $disabledState_imageSize$$, $hoverBackgroundColor$$, $hoverBorderColor$$), $cssUrlActive_downState$$14$$ = $dvt$$14$$.$TransientButton$.$getStateFromURL$($contentLength_context$$424$$, $cssUrlActive_downState$$14$$, $disabledState_imageSize$$, $disabledState_imageSize$$, $activeBackgroundColor$$, $activeBorderColor$$), $disabledState_imageSize$$ = $dvt$$14$$.$TransientButton$.$getStateFromURL$($contentLength_context$$424$$, $cssUrlDisabled_zoomOutPosX$$, 
    $disabledState_imageSize$$, $disabledState_imageSize$$, $disabledBackgroundColor$$, $disabledBorderColor$$), $zoomInPosX$$ = $zoomInOptions_zoomInPosY$$1$$.posX, $zoomInOptions_zoomInPosY$$1$$ = $zoomInOptions_zoomInPosY$$1$$.posY;
    null == this.$zoomin$ ? (this.$zoomin$ = new $dvt$$14$$.$TransientButton$($contentLength_context$$424$$, $cssUrl_upState$$17$$, $cssUrlHover_overState$$14$$, $cssUrlActive_downState$$14$$, $disabledState_imageSize$$, this.$EventManager$, this.$EventManager$.$HandleZoomInClick$), this.$EventManager$.$associate$(this.$zoomin$, this.$zoomin$)) : (this.$zoomin$.$setUpState$($cssUrl_upState$$17$$), this.$zoomin$.$setOverState$($cssUrlHover_overState$$14$$), this.$zoomin$.$setDownState$($cssUrlActive_downState$$14$$), 
    this.$zoomin$.$setDisabledState$($disabledState_imageSize$$));
    $options$$324_zoomOutOptions_zoomOutPosY$$1$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.zoomOutProps;
    $disabledState_imageSize$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.imageSize;
    $cssUrl_upState$$17$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.cssUrl;
    $cssUrlHover_overState$$14$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.cssUrlHover;
    $cssUrlActive_downState$$14$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.cssUrlActive;
    $cssUrlDisabled_zoomOutPosX$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.cssUrlDisabled;
    $enabledBackgroundColor$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.enabledBackgroundColor;
    $enabledBorderColor$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.enabledBorderColor;
    $hoverBackgroundColor$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.hoverBackgroundColor;
    $hoverBorderColor$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.hoverBorderColor;
    $activeBackgroundColor$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.activeBackgroundColor;
    $activeBorderColor$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.activeBorderColor;
    $disabledBackgroundColor$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.disabledBackgroundColor;
    $disabledBorderColor$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.disabledBorderColor;
    $cssUrl_upState$$17$$ = $dvt$$14$$.$TransientButton$.$getStateFromURL$($contentLength_context$$424$$, $cssUrl_upState$$17$$, $disabledState_imageSize$$, $disabledState_imageSize$$, $enabledBackgroundColor$$, $enabledBorderColor$$);
    $cssUrlHover_overState$$14$$ = $dvt$$14$$.$TransientButton$.$getStateFromURL$($contentLength_context$$424$$, $cssUrlHover_overState$$14$$, $disabledState_imageSize$$, $disabledState_imageSize$$, $hoverBackgroundColor$$, $hoverBorderColor$$);
    $cssUrlActive_downState$$14$$ = $dvt$$14$$.$TransientButton$.$getStateFromURL$($contentLength_context$$424$$, $cssUrlActive_downState$$14$$, $disabledState_imageSize$$, $disabledState_imageSize$$, $activeBackgroundColor$$, $activeBorderColor$$);
    $disabledState_imageSize$$ = $dvt$$14$$.$TransientButton$.$getStateFromURL$($contentLength_context$$424$$, $cssUrlDisabled_zoomOutPosX$$, $disabledState_imageSize$$, $disabledState_imageSize$$, $disabledBackgroundColor$$, $disabledBorderColor$$);
    $cssUrlDisabled_zoomOutPosX$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.posX;
    $options$$324_zoomOutOptions_zoomOutPosY$$1$$ = $options$$324_zoomOutOptions_zoomOutPosY$$1$$.posY;
    null == this.$zoomout$ ? (this.$zoomout$ = new $dvt$$14$$.$TransientButton$($contentLength_context$$424$$, $cssUrl_upState$$17$$, $cssUrlHover_overState$$14$$, $cssUrlActive_downState$$14$$, $disabledState_imageSize$$, this.$EventManager$, this.$EventManager$.$HandleZoomOutClick$), this.$EventManager$.$associate$(this.$zoomout$, this.$zoomout$)) : (this.$zoomout$.$setUpState$($cssUrl_upState$$17$$), this.$zoomout$.$setOverState$($cssUrlHover_overState$$14$$), this.$zoomout$.$setDownState$($cssUrlActive_downState$$14$$), 
    this.$zoomout$.$setDisabledState$($disabledState_imageSize$$));
    this.$zoomin$.$setTooltip$($dvt$$14$$.$Bundle$.$getTranslatedString$($dvt$$14$$.$Bundle$.$UTIL_PREFIX$, "ZOOM_IN", null));
    this.$zoomout$.$setTooltip$($dvt$$14$$.$Bundle$.$getTranslatedString$($dvt$$14$$.$Bundle$.$UTIL_PREFIX$, "ZOOM_OUT", null));
    this.$zoomin$.$hide$();
    this.$zoomout$.$hide$();
    $dvt$$14$$.$TimeAxis$.$supportsTouch$() && ($dvt$$14$$.$ToolkitUtils$.$setAttrNullNS$(this.$zoomin$.$getElem$(), "role", "button"), $dvt$$14$$.$ToolkitUtils$.$setAttrNullNS$(this.$zoomin$.$getElem$(), "aria-label", $dvt$$14$$.$Bundle$.$getTranslatedString$($dvt$$14$$.$Bundle$.$UTIL_PREFIX$, "ZOOM_IN", null)), $dvt$$14$$.$ToolkitUtils$.$setAttrNullNS$(this.$zoomout$.$getElem$(), "role", "button"), $dvt$$14$$.$ToolkitUtils$.$setAttrNullNS$(this.$zoomout$.$getElem$(), "aria-label", $dvt$$14$$.$Bundle$.$getTranslatedString$($dvt$$14$$.$Bundle$.$UTIL_PREFIX$, 
    "ZOOM_OUT", null)));
    this.$zoomin$.$setTranslateX$($zoomInPosX$$);
    this.$zoomout$.$setTranslateX$($cssUrlDisabled_zoomOutPosX$$);
    this.$zoomin$.$setTranslateY$($zoomInOptions_zoomInPosY$$1$$);
    this.$zoomout$.$setTranslateY$($options$$324_zoomOutOptions_zoomOutPosY$$1$$);
    this.$zoomin$.getParent() != this.$_canvas$ && this.$_canvas$.$addChild$(this.$zoomin$);
    this.$zoomout$.getParent() != this.$_canvas$ && this.$_canvas$.$addChild$(this.$zoomout$);
    $contentLength_context$$424$$ = this.$_contentLength$;
    $contentLength_context$$424$$ >= $timeAxis$$7$$.$_maxContentLength$ && this.$disableZoomButton$(!0);
    this.$_canvasLength$ >= $contentLength_context$$424$$ && this.$disableZoomButton$(!1);
  };
  $dvt$$14$$.$TimeComponent$.prototype.$HandleMouseWheel$ = function $$dvt$$14$$$$TimeComponent$$$$HandleMouseWheel$$($event$$529$$) {
    $dvt$$14$$.$EventManager$.$consumeEvent$($event$$529$$);
    var $wheelDelta$$ = $event$$529$$.wheelDelta, $compLoc$$2_compPagePos_wheelEvent$$ = $event$$529$$.$getNativeEvent$();
    if (this.$hasValidOptions$() && (null != $compLoc$$2_compPagePos_wheelEvent$$.wheelDeltaX ? $event$$529$$.wheelDeltaX = $compLoc$$2_compPagePos_wheelEvent$$.wheelDeltaX / $dvt$$14$$.$TimeComponent$.$WHEEL_UNITS_PER_LINE$ : null != $compLoc$$2_compPagePos_wheelEvent$$.deltaX && ($compLoc$$2_compPagePos_wheelEvent$$.deltaMode == $compLoc$$2_compPagePos_wheelEvent$$.DOM_DELTA_LINE ? $event$$529$$.wheelDeltaX = -$compLoc$$2_compPagePos_wheelEvent$$.deltaX : $compLoc$$2_compPagePos_wheelEvent$$.deltaMode == 
    $compLoc$$2_compPagePos_wheelEvent$$.DOM_DELTA_PIXEL && ($event$$529$$.wheelDeltaX = -$compLoc$$2_compPagePos_wheelEvent$$.deltaX / $dvt$$14$$.$TimeComponent$.$SCROLL_LINE_HEIGHT$)), $wheelDelta$$)) {
      var $compLoc$$2_compPagePos_wheelEvent$$ = this.$getCtx$().$getStageAbsolutePosition$(), $compLoc$$2_compPagePos_wheelEvent$$ = this.$_isVertical$ ? $event$$529$$.pageY - $compLoc$$2_compPagePos_wheelEvent$$.y : $event$$529$$.pageX - $compLoc$$2_compPagePos_wheelEvent$$.x, $time$$20_widthFactor$$2$$ = (this.$_end$ - this.$_start$) / this.$_contentLength$, $time$$20_widthFactor$$2$$ = this.$isRTL$() && !this.$_isVertical$ ? this.$_viewEndTime$ - $time$$20_widthFactor$$2$$ * $compLoc$$2_compPagePos_wheelEvent$$ : 
      $time$$20_widthFactor$$2$$ * $compLoc$$2_compPagePos_wheelEvent$$ + this.$_viewStartTime$;
      $event$$529$$.$zoomTime$ = $time$$20_widthFactor$$2$$;
      $event$$529$$.$zoomCompLoc$ = $compLoc$$2_compPagePos_wheelEvent$$;
      $event$$529$$.$zoomWheelDelta$ = .02 * $wheelDelta$$ + 1;
    }
  };
  $dvt$$14$$.$TimeComponent$.prototype.$handleZoomWheel$ = function $$dvt$$14$$$$TimeComponent$$$$handleZoomWheel$$($dvt$$14$$, $time$$21$$, $compLoc$$3$$) {
    var $viewLength_widthFactor$$3$$ = (this.$_viewEndTime$ - this.$_viewStartTime$) / (this.$_end$ - this.$_start$) * this.$_contentLength$;
    this.$setContentLength$($dvt$$14$$);
    $dvt$$14$$ = $viewLength_widthFactor$$3$$ / this.$_contentLength$ * (this.$_end$ - this.$_start$);
    $time$$21$$ ? ($viewLength_widthFactor$$3$$ = (this.$_end$ - this.$_start$) / this.$_contentLength$, this.$isRTL$() && !this.$_isVertical$ ? (this.$_viewEndTime$ = $time$$21$$ + $compLoc$$3$$ * $viewLength_widthFactor$$3$$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$), this.$_viewStartTime$ = this.$_viewEndTime$ - $dvt$$14$$, this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$, this.$_viewEndTime$ = this.$_viewStartTime$ + $dvt$$14$$, this.$_viewEndTime$ > 
    this.$_end$ && (this.$_viewEndTime$ = this.$_end$))) : (this.$_viewStartTime$ = $time$$21$$ - $compLoc$$3$$ * $viewLength_widthFactor$$3$$, this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$), this.$_viewEndTime$ = this.$_viewStartTime$ + $dvt$$14$$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$, this.$_viewStartTime$ = this.$_viewEndTime$ - $dvt$$14$$, this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$))), this.$setRelativeStartPos$(1 / 
    $viewLength_widthFactor$$3$$ * (this.$_start$ - this.$_viewStartTime$))) : (this.$_viewStartTime$ = this.$_start$, this.$_viewEndTime$ = this.$_viewStartTime$ + $dvt$$14$$, this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$), this.$setRelativeStartPos$(0));
    this.$applyTimeZoomCanvasPosition$();
  };
  $dvt$$14$$.$TimeComponent$.prototype.$zoomBy$ = function $$dvt$$14$$$$TimeComponent$$$$zoomBy$$($dvt$$14$$) {
    var $compLoc$$4$$ = this.$_isVertical$ ? this.$Height$ / 2 : this.$Width$ / 2;
    this.$handleZoomWheel$(this.$_contentLength$ * ((1 / $dvt$$14$$ - 1) / 2 + 1), (this.$_end$ - this.$_start$) / this.$_contentLength$ * $compLoc$$4$$ + this.$_viewStartTime$, $compLoc$$4$$, !0);
  };
  $dvt$$14$$.$TimeComponent$.prototype.$beginPinchZoom$ = function $$dvt$$14$$$$TimeComponent$$$$beginPinchZoom$$($dvt$$14$$, $y1$$31$$, $x2$$42$$, $y2$$30$$) {
    this.$_initialPinchZoomLoc$ = this.$_isVertical$ ? Math.sqrt(($y1$$31$$ - $y2$$30$$) * ($y1$$31$$ - $y2$$30$$)) + ($y1$$31$$ < $y2$$30$$ ? $y1$$31$$ : $y2$$30$$) : Math.sqrt(($dvt$$14$$ - $x2$$42$$) * ($dvt$$14$$ - $x2$$42$$)) + ($dvt$$14$$ < $x2$$42$$ ? $dvt$$14$$ : $x2$$42$$);
    this.$_initialPinchZoomTime$ = (this.$_end$ - this.$_start$) / this.$_contentLength$ * this.$_initialPinchZoomLoc$ + this.$_viewStartTime$;
    this.$_initialPinchZoomDist$ = Math.sqrt(($dvt$$14$$ - $x2$$42$$) * ($dvt$$14$$ - $x2$$42$$) + ($y1$$31$$ - $y2$$30$$) * ($y1$$31$$ - $y2$$30$$));
    this.$_initialPinchZoomLength$ = this.$_contentLength$;
  };
  $dvt$$14$$.$TimeComponent$.prototype.$contPinchZoom$ = function $$dvt$$14$$$$TimeComponent$$$$contPinchZoom$$($dvt$$14$$, $y1$$32$$, $x2$$43$$, $y2$$31$$) {
    $dvt$$14$$ = Math.sqrt(($dvt$$14$$ - $x2$$43$$) * ($dvt$$14$$ - $x2$$43$$) + ($y1$$32$$ - $y2$$31$$) * ($y1$$32$$ - $y2$$31$$));
    $dvt$$14$$ != this.$_initialPinchZoomDist$ && (this.$_triggerViewportChange$ = !0);
    this.$handleZoomWheel$($dvt$$14$$ / this.$_initialPinchZoomDist$ * this.$_initialPinchZoomLength$, this.$_initialPinchZoomTime$, this.$_initialPinchZoomLoc$, !1);
  };
  $dvt$$14$$.$TimeComponent$.prototype.$endPinchZoom$ = function $$dvt$$14$$$$TimeComponent$$$$endPinchZoom$$() {
    this.$_initialPinchZoomTime$ = this.$_initialPinchZoomLength$ = this.$_initialPinchZoomLoc$ = this.$_initialPinchZoomDist$ = null;
    this.$_triggerViewportChange$ && (this.$_triggerViewportChange$ = !1, this.dispatchEvent(this.$createViewportChangeEvent$()));
  };
  $dvt$$14$$.$TimeComponent$.prototype.$panZoomCanvasBy$ = function $$dvt$$14$$$$TimeComponent$$$$panZoomCanvasBy$$($dvt$$14$$) {
    if (this.$_isVertical$) {
      $dvt$$14$$ = this.$_timeZoomCanvas$.$getTranslateY$() - $dvt$$14$$;
      var $minTranslateX_minTranslateY$$1_widthFactor$$6$$ = -(this.$_contentLength$ - this.$_canvasLength$ - this.$_startY$), $maxTranslateX_maxTranslateY$$1_viewTime$$2$$ = this.$_startY$;
      $dvt$$14$$ < $minTranslateX_minTranslateY$$1_widthFactor$$6$$ ? $dvt$$14$$ = $minTranslateX_minTranslateY$$1_widthFactor$$6$$ : $dvt$$14$$ > $maxTranslateX_maxTranslateY$$1_viewTime$$2$$ && ($dvt$$14$$ = $maxTranslateX_maxTranslateY$$1_viewTime$$2$$);
      this.$_timeZoomCanvas$.$setTranslateY$($dvt$$14$$);
      $dvt$$14$$ -= this.$_startY$;
      this.$setAbsoluteStartPos$($dvt$$14$$);
    } else {
      $dvt$$14$$ = this.$_timeZoomCanvas$.$getTranslateX$() - $dvt$$14$$, $minTranslateX_minTranslateY$$1_widthFactor$$6$$ = -(this.$_contentLength$ - this.$_canvasLength$ - this.$_startX$), $maxTranslateX_maxTranslateY$$1_viewTime$$2$$ = this.$_startX$, $dvt$$14$$ < $minTranslateX_minTranslateY$$1_widthFactor$$6$$ ? $dvt$$14$$ = $minTranslateX_minTranslateY$$1_widthFactor$$6$$ : $dvt$$14$$ > $maxTranslateX_maxTranslateY$$1_viewTime$$2$$ && ($dvt$$14$$ = $maxTranslateX_maxTranslateY$$1_viewTime$$2$$), 
      this.$_timeZoomCanvas$.$setTranslateX$($dvt$$14$$), this.$setAbsoluteStartPos$($dvt$$14$$ - this.$_startX$), $dvt$$14$$ = this.$getRelativeStartPos$();
    }
    $minTranslateX_minTranslateY$$1_widthFactor$$6$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$);
    $maxTranslateX_maxTranslateY$$1_viewTime$$2$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
    this.$_viewStartTime$ = this.$_start$ - $dvt$$14$$ / $minTranslateX_minTranslateY$$1_widthFactor$$6$$;
    this.$_viewEndTime$ = this.$_viewStartTime$ + $maxTranslateX_maxTranslateY$$1_viewTime$$2$$;
  };
  $dvt$$14$$.$TimeComponent$.prototype.$handleZoom$ = function $$dvt$$14$$$$TimeComponent$$$$handleZoom$$($zoomIn$$1$$) {
    $zoomIn$$1$$ ? this.$zoomBy$(1 / $dvt$$14$$.$TimeComponent$.$ZOOM_BY_VALUE$) : this.$zoomBy$($dvt$$14$$.$TimeComponent$.$ZOOM_BY_VALUE$);
  };
  $dvt$$14$$.$TimeComponent$.prototype.$enableZoomButton$ = function $$dvt$$14$$$$TimeComponent$$$$enableZoomButton$$($dvt$$14$$) {
    $dvt$$14$$ ? (this.$zoomin$.$setEnabled$(!0), this.$zoomin$.$drawUpState$()) : (this.$zoomout$.$setEnabled$(!0), this.$zoomout$.$drawUpState$());
  };
  $dvt$$14$$.$TimeComponent$.prototype.$disableZoomButton$ = function $$dvt$$14$$$$TimeComponent$$$$disableZoomButton$$($dvt$$14$$) {
    $dvt$$14$$ ? (this.$zoomin$.$setEnabled$(!1), this.$zoomin$.$drawDisabledState$(), this.$zoomin$.setCursor(null)) : (this.$zoomout$.$setEnabled$(!1), this.$zoomout$.$drawDisabledState$(), this.$zoomout$.setCursor(null));
  };
  $dvt$$14$$.$TimeComponent$.prototype.$applyTimeZoomCanvasPosition$ = function $$dvt$$14$$$$TimeComponent$$$$applyTimeZoomCanvasPosition$$() {
    this.$_isVertical$ ? this.$_timeZoomCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$) : this.$_timeZoomCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$);
  };
  $dvt$$14$$.$TimeComponent$.prototype.$setAbsoluteStartPos$ = function $$dvt$$14$$$$TimeComponent$$$$setAbsoluteStartPos$$($dvt$$14$$) {
    this.$_startPos$ = $dvt$$14$$;
  };
  $dvt$$14$$.$TimeComponent$.prototype.$getRelativeStartPos$ = function $$dvt$$14$$$$TimeComponent$$$$getRelativeStartPos$$() {
    return this.$isRTL$() && !this.$_isVertical$ ? this.$_canvasLength$ - this.$_contentLength$ - this.$_startPos$ : this.$_startPos$;
  };
  $dvt$$14$$.$TimeComponent$.prototype.$setRelativeStartPos$ = function $$dvt$$14$$$$TimeComponent$$$$setRelativeStartPos$$($dvt$$14$$) {
    this.$isRTL$() && !this.$_isVertical$ ? this.$_startPos$ = this.$_canvasLength$ - this.$_contentLength$ - $dvt$$14$$ : this.$_startPos$ = $dvt$$14$$;
  };
  $dvt$$14$$.$TimeComponent$.prototype.$setStartXOffset$ = function $$dvt$$14$$$$TimeComponent$$$$setStartXOffset$$($dvt$$14$$) {
    this.$_startX$ = $dvt$$14$$;
  };
  $dvt$$14$$.$TimeComponent$.prototype.$setStartYOffset$ = function $$dvt$$14$$$$TimeComponent$$$$setStartYOffset$$($dvt$$14$$) {
    this.$_startY$ = $dvt$$14$$;
  };
  $dvt$$14$$.$TimeComponent$.prototype.$processEvent$ = function $$dvt$$14$$$$TimeComponent$$$$processEvent$$($dvt$$14$$) {
    $dvt$$14$$ && this.dispatchEvent($dvt$$14$$);
  };
  $dvt$$14$$.$TimeComponent$.prototype.$createViewportChangeEvent$ = function $$dvt$$14$$$$TimeComponent$$$$createViewportChangeEvent$$() {
    return null;
  };
  $dvt$$14$$.$TimeComponent$.prototype.$HandleKeyDown$ = function $$dvt$$14$$$$TimeComponent$$$$HandleKeyDown$$() {
  };
  $dvt$$14$$.$TimeComponent$.prototype.$HandleMouseDown$ = function $$dvt$$14$$$$TimeComponent$$$$HandleMouseDown$$() {
  };
  $dvt$$14$$.$TimeComponent$.prototype.$beginDragPan$ = function $$dvt$$14$$$$TimeComponent$$$$beginDragPan$$($dvt$$14$$, $compY$$4$$) {
    this.$_currentX$ = $dvt$$14$$;
    this.$_currentY$ = $compY$$4$$;
  };
  $dvt$$14$$.$TimeComponent$.prototype.$endDragPan$ = function $$dvt$$14$$$$TimeComponent$$$$endDragPan$$() {
    this.$endPan$();
  };
  $dvt$$14$$.$TimeComponent$.prototype.$HandleTouchEnd$ = function $$dvt$$14$$$$TimeComponent$$$$HandleTouchEnd$$($dvt$$14$$) {
    "none" != this.$_selectionMode$ && this.$handleShapeClick$($dvt$$14$$, "multiple" == this.$_selectionMode$);
  };
  $dvt$$14$$.$TimeComponent$.prototype.$handleShapeClick$ = function $$dvt$$14$$$$TimeComponent$$$$handleShapeClick$$() {
  };
  $dvt$$14$$.$TimeComponent$.prototype.$HandleMouseClick$ = function $$dvt$$14$$$$TimeComponent$$$$HandleMouseClick$$($dvt$$14$$) {
    this.$handleShapeClick$($dvt$$14$$, $dvt$$14$$.ctrlKey && "multiple" == this.$_selectionMode$);
  };
  $dvt$$14$$.$TimeComponent$.prototype.$endPan$ = function $$dvt$$14$$$$TimeComponent$$$$endPan$$() {
    this.$_triggerViewportChange$ && (this.$_triggerViewportChange$ = !1, this.dispatchEvent(this.$createViewportChangeEvent$()));
  };
  $dvt$$14$$.$TimeComponent$.prototype.$contDragPan$ = function $$dvt$$14$$$$TimeComponent$$$$contDragPan$$($dvt$$14$$, $compY$$5$$) {
    if (this.$_currentX$ && this.$_currentY$) {
      var $deltaX$$18$$ = this.$_currentX$ - $dvt$$14$$, $deltaY$$18$$ = this.$_currentY$ - $compY$$5$$;
      if (0 == $deltaX$$18$$ && 0 == $deltaY$$18$$) {
        return !1;
      }
      this.$_triggerViewportChange$ = !0;
      this.$_currentX$ = $dvt$$14$$;
      this.$_currentY$ = $compY$$5$$;
      this.$panBy$($deltaX$$18$$, $deltaY$$18$$);
      return !0;
    }
    return !1;
  };
  $dvt$$14$$.$TimeComponent$.prototype.$panBy$ = function $$dvt$$14$$$$TimeComponent$$$$panBy$$($dvt$$14$$) {
    this.$panZoomCanvasBy$($dvt$$14$$);
  };
  $dvt$$14$$.$TimeComponentEventManager$ = function $$dvt$$14$$$$TimeComponentEventManager$$($dvt$$14$$) {
    this.Init($dvt$$14$$.$getCtx$(), $dvt$$14$$.$processEvent$, $dvt$$14$$);
    this.$_comp$ = $dvt$$14$$;
    this.$_isPinchZoom$ = this.$_isDragPanning$ = !1;
  };
  $dvt$$14$$.$Obj$.$createSubclass$($dvt$$14$$.$TimeComponentEventManager$, $dvt$$14$$.$EventManager$);
  $dvt$$14$$.$TimeComponentEventManager$.$GECKO_MOUSEWHEEL$ = "wheel";
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$addListeners$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$addListeners$$($displayable$$87$$) {
    $dvt$$14$$.$TimeComponentEventManager$.$superclass$.$addListeners$.call(this, $displayable$$87$$);
    $dvt$$14$$.$SvgDocumentUtils$.$addDragListeners$(this.$_comp$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
    $dvt$$14$$.$Agent$.$isTouchDevice$() || ($dvt$$14$$.$Agent$.$isPlatformGecko$() ? $displayable$$87$$.$addEvtListener$($dvt$$14$$.$TimeComponentEventManager$.$GECKO_MOUSEWHEEL$, this.$OnMouseWheel$, !1, this) : $displayable$$87$$.$addEvtListener$($dvt$$14$$.MouseEvent.$MOUSEWHEEL$, this.$OnMouseWheel$, !1, this));
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$removeListeners$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$removeListeners$$($displayable$$88$$) {
    $dvt$$14$$.$TimeComponentEventManager$.$superclass$.$removeListeners$.call(this, $displayable$$88$$);
    $dvt$$14$$.$Agent$.$isTouchDevice$() || ($dvt$$14$$.$Agent$.$isPlatformGecko$() ? $displayable$$88$$.$removeEvtListener$($dvt$$14$$.$TimeComponentEventManager$.$GECKO_MOUSEWHEEL$, this.$OnMouseWheel$, !1, this) : $displayable$$88$$.$removeEvtListener$($dvt$$14$$.MouseEvent.$MOUSEWHEEL$, this.$OnMouseWheel$, !1, this));
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$OnKeyDown$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$OnKeyDown$$($event$$536$$) {
    $dvt$$14$$.$TimeComponentEventManager$.$superclass$.$OnKeyDown$.call(this, $event$$536$$);
    this.$_comp$.$HandleKeyDown$($event$$536$$);
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$OnClick$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$OnClick$$($event$$537$$) {
    this.$_isDragPanning$ || ($dvt$$14$$.$TimeComponentEventManager$.$superclass$.$OnClick$.call(this, $event$$537$$), this.$_comp$.$HandleMouseClick$($event$$537$$));
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$PreOnMouseDown$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$PreOnMouseDown$$($event$$538$$) {
    this.$_isDragPanning$ = !1;
    $dvt$$14$$.$TimeComponentEventManager$.$superclass$.$PreOnMouseDown$.call(this, $event$$538$$);
    this.$_comp$.$HandleMouseDown$($event$$538$$);
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$OnMouseWheel$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$OnMouseWheel$$($dvt$$14$$) {
    this.$_comp$.$HandleMouseWheel$($dvt$$14$$);
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$OnTouchStartBubble$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$OnTouchStartBubble$$($event$$540$$) {
    $dvt$$14$$.$TimeComponentEventManager$.$superclass$.$OnTouchStartBubble$.call(this, $event$$540$$);
    this.$_comp$.$HandleTouchStart$($event$$540$$);
    this.$_comp$.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus();
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$OnTouchEndBubble$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$OnTouchEndBubble$$($event$$541$$) {
    $dvt$$14$$.$TimeComponentEventManager$.$superclass$.$OnTouchEndBubble$.call(this, $event$$541$$);
    this.$_comp$.$HandleTouchEnd$($event$$541$$);
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$_onDragStart$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$_onDragStart$$($event$$542$$) {
    if (this.$_comp$.$hasValidOptions$()) {
      return $dvt$$14$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragStart$($event$$542$$) : this.$_onMouseDragStart$($event$$542$$);
    }
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$_onDragMove$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$_onDragMove$$($event$$543$$) {
    return $dvt$$14$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragMove$($event$$543$$) : this.$_onMouseDragMove$($event$$543$$);
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$_onDragEnd$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$_onDragEnd$$($event$$544$$) {
    return $dvt$$14$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragEnd$($event$$544$$) : this.$_onMouseDragEnd$($event$$544$$);
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$_getRelativePosition$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$_getRelativePosition$$($pageX$$8$$, $pageY$$8$$) {
    this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = this.$_context$.$getStageAbsolutePosition$());
    return new $dvt$$14$$.$Point$($pageX$$8$$ - this.$_stageAbsolutePosition$.x, $pageY$$8$$ - this.$_stageAbsolutePosition$.y);
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$_onMouseDragStart$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$_onMouseDragStart$$($event$$545_relPos$$51$$) {
    return $event$$545_relPos$$51$$.button != $dvt$$14$$.MouseEvent.$RIGHT_CLICK_BUTTON$ ? ($event$$545_relPos$$51$$ = this.$_getRelativePosition$($event$$545_relPos$$51$$.pageX, $event$$545_relPos$$51$$.pageY), this.$_comp$.$beginDragPan$($event$$545_relPos$$51$$.x, $event$$545_relPos$$51$$.y), !0) : !1;
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$_onMouseDragMove$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$_onMouseDragMove$$($dvt$$14$$) {
    $dvt$$14$$ = this.$_getRelativePosition$($dvt$$14$$.pageX, $dvt$$14$$.pageY);
    this.$_comp$.$contDragPan$($dvt$$14$$.x, $dvt$$14$$.y) && (this.$_isDragPanning$ = !0);
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$_onMouseDragEnd$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$_onMouseDragEnd$$() {
    this.$_comp$.$endDragPan$();
    this.$_stageAbsolutePosition$ = null;
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$_onTouchDragStart$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$_onTouchDragStart$$($event$$548_relPos$$53$$) {
    var $relPos2$$2_touches$$9$$ = $event$$548_relPos$$53$$.touches;
    if (1 == $relPos2$$2_touches$$9$$.length) {
      return $event$$548_relPos$$53$$ = this.$_getRelativePosition$($relPos2$$2_touches$$9$$[0].pageX, $relPos2$$2_touches$$9$$[0].pageY), this.$_comp$.$beginDragPan$($event$$548_relPos$$53$$.x, $event$$548_relPos$$53$$.y), !0;
    }
    if (2 == $relPos2$$2_touches$$9$$.length) {
      this.$_comp$.$endDragPan$();
      this.$_isPinchZoom$ = !0;
      var $relPos1$$2$$ = this.$_getRelativePosition$($relPos2$$2_touches$$9$$[0].pageX, $relPos2$$2_touches$$9$$[0].pageY), $relPos2$$2_touches$$9$$ = this.$_getRelativePosition$($relPos2$$2_touches$$9$$[1].pageX, $relPos2$$2_touches$$9$$[1].pageY);
      this.$_comp$.$beginPinchZoom$($relPos1$$2$$.x, $relPos1$$2$$.y, $relPos2$$2_touches$$9$$.x, $relPos2$$2_touches$$9$$.y);
      $dvt$$14$$.$EventManager$.$consumeEvent$($event$$548_relPos$$53$$);
      return !0;
    }
    return !1;
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$_onTouchDragMove$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$_onTouchDragMove$$($dvt$$14$$) {
    var $relPos2$$3_touches$$10$$ = $dvt$$14$$.touches;
    if (1 == $relPos2$$3_touches$$10$$.length) {
      var $relPos$$54_relPos1$$3$$ = this.$_getRelativePosition$($relPos2$$3_touches$$10$$[0].pageX, $relPos2$$3_touches$$10$$[0].pageY);
      this.$_comp$.$contDragPan$($relPos$$54_relPos1$$3$$.x, $relPos$$54_relPos1$$3$$.y);
      $dvt$$14$$.preventDefault();
    } else {
      2 == $relPos2$$3_touches$$10$$.length && ($relPos$$54_relPos1$$3$$ = this.$_getRelativePosition$($relPos2$$3_touches$$10$$[0].pageX, $relPos2$$3_touches$$10$$[0].pageY), $relPos2$$3_touches$$10$$ = this.$_getRelativePosition$($relPos2$$3_touches$$10$$[1].pageX, $relPos2$$3_touches$$10$$[1].pageY), this.$_comp$.$contPinchZoom$($relPos$$54_relPos1$$3$$.x, $relPos$$54_relPos1$$3$$.y, $relPos2$$3_touches$$10$$.x, $relPos2$$3_touches$$10$$.y), $dvt$$14$$.preventDefault());
    }
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$_onTouchDragEnd$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$_onTouchDragEnd$$($dvt$$14$$) {
    this.$_isPinchZoom$ ? (this.$_isPinchZoom$ = !1, this.$_comp$.$endPinchZoom$()) : this.$_comp$.$endDragPan$();
    $dvt$$14$$.preventDefault();
    this.$_stageAbsolutePosition$ = null;
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$zoomBy$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$zoomBy$$($dvt$$14$$) {
    this.$_comp$.$zoomBy$($dvt$$14$$);
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$panBy$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$panBy$$($dx$$22$$, $dy$$24$$) {
    var $deltaX$$20$$ = $dx$$22$$ * this.$_comp$.$_canvasLength$ * ($dvt$$14$$.$Agent$.$isRightToLeft$(this.$_context$) ? -1 : 1), $deltaY$$20$$ = $dy$$24$$ * this.$_comp$.$_canvasSize$;
    0 != $deltaX$$20$$ && (this.$_comp$.$_triggerViewportChange$ = !0);
    this.$_comp$.$panBy$($deltaX$$20$$, $deltaY$$20$$);
    this.$_comp$.$endPan$();
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$HandleZoomInClick$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$HandleZoomInClick$$() {
    this.$_comp$.$handleZoom$(!0);
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$HandleZoomOutClick$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$HandleZoomOutClick$$() {
    this.$_comp$.$handleZoom$(!1);
  };
  $dvt$$14$$.$TimeComponentEventManager$.prototype.$GetTouchResponse$ = function $$dvt$$14$$$$TimeComponentEventManager$$$$GetTouchResponse$$() {
    return $dvt$$14$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$;
  };
  $dvt$$14$$.$TimeComponentKeyboardHandler$ = function $$dvt$$14$$$$TimeComponentKeyboardHandler$$($dvt$$14$$) {
    this.Init($dvt$$14$$);
  };
  $dvt$$14$$.$Obj$.$createSubclass$($dvt$$14$$.$TimeComponentKeyboardHandler$, $dvt$$14$$.$KeyboardHandler$);
  $dvt$$14$$.$TimeComponentKeyboardHandler$.prototype.$isSelectionEvent$ = function $$dvt$$14$$$$TimeComponentKeyboardHandler$$$$isSelectionEvent$$($dvt$$14$$) {
    return this.$isNavigationEvent$($dvt$$14$$) && !$dvt$$14$$.ctrlKey;
  };
  $dvt$$14$$.$TimeComponentKeyboardHandler$.prototype.$isMultiSelectEvent$ = function $$dvt$$14$$$$TimeComponentKeyboardHandler$$$$isMultiSelectEvent$$($event$$554$$) {
    return $event$$554$$.keyCode == $dvt$$14$$.KeyboardEvent.$SPACE$ && $event$$554$$.ctrlKey;
  };
  $dvt$$14$$.$TimeComponentKeyboardHandler$.prototype.$processKeyDown$ = function $$dvt$$14$$$$TimeComponentKeyboardHandler$$$$processKeyDown$$($event$$555$$) {
    if ($dvt$$14$$.KeyboardEvent.$isPlus$($event$$555$$)) {
      this.$_eventManager$.$HandleZoomInClick$();
    } else {
      if ($dvt$$14$$.KeyboardEvent.$isMinus$($event$$555$$)) {
        this.$_eventManager$.$HandleZoomOutClick$();
      } else {
        var $keyCode$$34$$ = $event$$555$$.keyCode;
        $keyCode$$34$$ == $dvt$$14$$.KeyboardEvent.$PAGE_UP$ ? ($event$$555$$.shiftKey ? this.$_eventManager$.$panBy$(-.25, 0) : this.$_eventManager$.$panBy$(0, -.25), $dvt$$14$$.$EventManager$.$consumeEvent$($event$$555$$)) : $keyCode$$34$$ == $dvt$$14$$.KeyboardEvent.$PAGE_DOWN$ && ($event$$555$$.shiftKey ? this.$_eventManager$.$panBy$(.25, 0) : this.$_eventManager$.$panBy$(0, .25), $dvt$$14$$.$EventManager$.$consumeEvent$($event$$555$$));
      }
    }
    return $dvt$$14$$.$TimeComponentKeyboardHandler$.$superclass$.$processKeyDown$.call(this, $event$$555$$);
  };
})(dvt);
