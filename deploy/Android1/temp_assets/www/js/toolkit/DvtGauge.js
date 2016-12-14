(function($dvt$$4$$) {
  function $DvtRatingGaugeEventManager$$($dvt$$4$$) {
    this.Init($dvt$$4$$.$getCtx$(), $dvt$$4$$.dispatchEvent, $dvt$$4$$);
    this.$_gauge$ = $dvt$$4$$;
  }
  function $DvtRatingGaugePeer$$($dvt$$4$$) {
    this.Init();
    this.$_gauge$ = $dvt$$4$$;
  }
  function $DvtRatingGaugeDefaults$$() {
    this.Init({skyros:$DvtRatingGaugeDefaults$$.$VERSION_1$, alta:$DvtRatingGaugeDefaults$$.$SKIN_ALTA$});
  }
  function $DvtDialGaugeIndicator$$($dvt$$4$$) {
    this.Init($dvt$$4$$);
  }
  function $DvtDialGaugeDefaults$$() {
    this.Init({skyros:$DvtDialGaugeDefaults$$.$VERSION_1$, alta:{}});
  }
  function $DvtStatusMeterGaugeCircularIndicator$$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    this.Init($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$);
  }
  function $DvtStatusMeterGaugeIndicator$$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    this.Init($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$);
  }
  function $DvtStatusMeterGaugeDefaults$$() {
    this.Init({skyros:$DvtStatusMeterGaugeDefaults$$.$VERSION_1$, alta:$DvtStatusMeterGaugeDefaults$$.$SKIN_ALTA$});
  }
  function $DvtLedGaugeDefaults$$() {
    this.Init({skyros:$DvtLedGaugeDefaults$$.$VERSION_1$, alta:{}});
  }
  function $DvtGaugeKeyboardHandler$$($dvt$$4$$, $DvtRatingGaugeEventManager$$) {
    this.Init($dvt$$4$$, $DvtRatingGaugeEventManager$$);
  }
  function $DvtGaugeEventManager$$($dvt$$4$$) {
    this.Init($dvt$$4$$.$getCtx$(), $dvt$$4$$.dispatchEvent, $dvt$$4$$);
    this.$_gauge$ = $dvt$$4$$;
    this.$IsMouseEditing$ = !1;
  }
  function $DvtGaugeDefaults$$() {
  }
  function $DvtGaugeAutomation$$($dvt$$4$$) {
    this.$_gauge$ = $dvt$$4$$;
  }
  function $DvtGauge$$() {
  }
  $dvt$$4$$.$Obj$.$createSubclass$($DvtGauge$$, $dvt$$4$$.$BaseComponent$);
  $DvtGauge$$.$_DEFAULT_MIN_VALUE$ = 0;
  $DvtGauge$$.$_DEFAULT_MAX_VALUE$ = 100;
  $DvtGauge$$.prototype.Init = function $$DvtGauge$$$$Init$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    $DvtGauge$$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    this.$_bStaticRendering$ = $DvtDialGaugeIndicator$$;
    this.$_bStaticRendering$ || (this.$EventManager$ = this.$CreateEventManager$(), this.$EventManager$.$addListeners$(this), $dvt$$4$$.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(this.$CreateKeyboardHandler$(this.$EventManager$)), this.setId("gauge1000" + Math.floor(1E9 * Math.random())), this.$_editingOverlay$ = new $dvt$$4$$.Rect($DvtRatingGaugeEventManager$$, 0, 0), this.$_editingOverlay$.$setInvisibleFill$(), this.$addChild$(this.$_editingOverlay$));
    this.$_bResizeRender$ = this.$_bEditing$ = !1;
    this.$_oldValue$ = null;
  };
  $DvtGauge$$.prototype.$SetOptions$ = function $$DvtGauge$$$$$SetOptions$$($DvtRatingGaugeEventManager$$) {
    this.$Options$ = $DvtRatingGaugeEventManager$$;
    $dvt$$4$$.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none");
  };
  $DvtGauge$$.prototype.$render$ = function $$DvtGauge$$$$$render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $DvtRatingGaugeEventManager$$ ? this.$SetOptions$($DvtRatingGaugeEventManager$$) : this.$Options$ || this.$SetOptions$(null);
    this.$Options$.thresholds && (this.$Options$.thresholds = this.$Options$.thresholds.sort($DvtGauge$$.$_thresholdComparator$));
    isNaN($DvtRatingGaugePeer$$) || isNaN($DvtRatingGaugeDefaults$$) || (this.$_bResizeRender$ = 0 != this.$Width$ && this.$Width$ != $DvtRatingGaugePeer$$ || 0 != this.$Height$ && this.$Height$ != $DvtRatingGaugeDefaults$$ ? !0 : !1, this.$Width$ = $DvtRatingGaugePeer$$, this.$Height$ = $DvtRatingGaugeDefaults$$);
    $DvtRatingGaugeDefaults$$ = this.$__shapes$;
    this.$__shapes$ = [];
    $DvtRatingGaugePeer$$ = new $dvt$$4$$.$Container$(this.$getCtx$());
    this.$addChildAt$($DvtRatingGaugePeer$$, 0);
    this.$Render$($DvtRatingGaugePeer$$, this.$Width$, this.$Height$);
    this.$_setAnimation$($DvtRatingGaugePeer$$, null != $DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$, this.$Width$, this.$Height$);
    this.$_editingOverlay$ && (this.$_editingOverlay$.$setWidth$(this.$Width$), this.$_editingOverlay$.$setHeight$(this.$Height$), this.$getEventManager$().$associate$(this.$_editingOverlay$, this.$__getLogicalObject$(), !0));
    this.$UpdateAriaAttributes$();
    this.$_bStaticRendering$ || this.$Options$.readOnly || ($DvtRatingGaugePeer$$.$setAriaRole$("slider"), $DvtRatingGaugePeer$$.$setAriaProperty$("valuemin", this.$Options$.min), $DvtRatingGaugePeer$$.$setAriaProperty$("valuemax", this.$Options$.max), $DvtRatingGaugeEventManager$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), $DvtRatingGaugePeer$$.$setAriaProperty$("valuenow", $DvtRatingGaugeEventManager$$), $DvtRatingGaugeDefaults$$ = $DvtGaugeRenderer$$.$getTooltipString$(this), 
    $dvt$$4$$.$Agent$.$isTouchDevice$() && (this.$_container$.$setAriaProperty$("live", "assertive"), $DvtRatingGaugeEventManager$$ != $DvtRatingGaugeDefaults$$ && ($DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$ + $dvt$$4$$.$Bundle$.$getTranslatedString$($dvt$$4$$.$Bundle$.$UTIL_PREFIX$, "ARIA_LABEL_DESC_DELIMITER") + $DvtRatingGaugeDefaults$$)), $DvtRatingGaugeEventManager$$ != $DvtRatingGaugeDefaults$$ && $DvtRatingGaugePeer$$.$setAriaProperty$("label", $DvtRatingGaugeDefaults$$), this.$_renderCount$ = 
    null != this.$_renderCount$ ? this.$_renderCount$ + 1 : 0, $DvtRatingGaugeEventManager$$ = this.getId() + "_" + this.$_renderCount$, $DvtRatingGaugePeer$$.setId($DvtRatingGaugeEventManager$$), this.$getCtx$().$setActiveElement$($DvtRatingGaugePeer$$));
    this.$Options$._selectingCursor && this.setCursor("pointer");
    this.$Animation$ || this.$RenderComplete$();
  };
  $DvtGauge$$.prototype.$__getLogicalObject$ = function $$DvtGauge$$$$$__getLogicalObject$$() {
    var $DvtRatingGaugeEventManager$$ = this.$Options$.tooltip, $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$ ? $DvtRatingGaugeEventManager$$.renderer : null, $DvtRatingGaugeEventManager$$ = $DvtGaugeStyleUtils$$.$getColor$(this);
    if ($DvtRatingGaugePeer$$) {
      var $DvtRatingGaugeDefaults$$ = {component:this.$Options$._widgetConstructor, label:$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), color:$DvtRatingGaugeEventManager$$};
      return new $dvt$$4$$.$CustomDatatipPeer$(this.$getCtx$().$getTooltipManager$(), $DvtRatingGaugePeer$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    }
    $DvtRatingGaugePeer$$ = $DvtGaugeRenderer$$.$getTooltipString$(this);
    return new $dvt$$4$$.$SimpleObjPeer$(null, $DvtRatingGaugePeer$$, $DvtRatingGaugeEventManager$$);
  };
  $DvtGauge$$.prototype.$Render$ = function $$DvtGauge$$$$$Render$$() {
  };
  $DvtGauge$$.prototype.$_setAnimation$ = function $$DvtGauge$$$$$_setAnimation$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    this.$StopAnimation$();
    var $DvtStatusMeterGaugeIndicator$$ = !1, $DvtStatusMeterGaugeCircularIndicator$$ = this.$_bEditing$ || this.$_bResizeRender$ ? "none" : this.$getOptions$().animationOnDataChange, $DvtRatingGaugeRenderer$$ = this.$_bEditing$ || this.$_bResizeRender$ ? "none" : this.$getOptions$().animationOnDisplay, $DvtGaugeKeyboardHandler$$ = $dvt$$4$$.$StyleUtils$.$getTimeMilliseconds$(this.$getOptions$().animationDuration) / 1E3;
    if ($DvtRatingGaugeRenderer$$ || $DvtStatusMeterGaugeCircularIndicator$$) {
      $DvtDialGaugeIndicator$$ = new $dvt$$4$$.$Rectangle$(0, 0, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$), $DvtDialGaugeDefaults$$ = this.$getCtx$(), this.$_container$ || "none" === $DvtRatingGaugeRenderer$$ || null == this.$__shapes$[0] ? this.$_container$ && "none" != $DvtStatusMeterGaugeCircularIndicator$$ && $DvtRatingGaugePeer$$ && null != this.$__shapes$[0] && ((this.$Animation$ = $dvt$$4$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$($DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, 
      this.$_container$, $DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtGaugeKeyboardHandler$$)) ? $DvtStatusMeterGaugeIndicator$$ = !0 : this.$Animation$ = this.$CreateAnimationOnDataChange$($DvtRatingGaugeDefaults$$, this.$__shapes$, $DvtGaugeKeyboardHandler$$)) : (this.$Animation$ = $dvt$$4$$.$BlackBoxAnimationHandler$.$getInAnimation$($DvtDialGaugeDefaults$$, $DvtRatingGaugeRenderer$$, $DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtGaugeKeyboardHandler$$), this.$Animation$ || 
      (this.$Animation$ = this.$CreateAnimationOnDisplay$(this.$__shapes$, $DvtRatingGaugeRenderer$$, $DvtGaugeKeyboardHandler$$))), !$DvtStatusMeterGaugeIndicator$$ && this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$()), this.$Animation$ && (this.$Animation$.play(), this.$Animation$.$setOnEnd$(this.$_onAnimationEnd$, this)), $DvtStatusMeterGaugeIndicator$$ && (this.$_oldContainer$ = this.$_container$), this.$_container$ = $DvtRatingGaugeEventManager$$;
    }
  };
  $DvtGauge$$.prototype.$CreateAnimationOnDisplay$ = function $$DvtGauge$$$$$CreateAnimationOnDisplay$$() {
    return null;
  };
  $DvtGauge$$.prototype.$CreateAnimationOnDataChange$ = function $$DvtGauge$$$$$CreateAnimationOnDataChange$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    for (var $DvtDialGaugeIndicator$$ = [], $DvtDialGaugeDefaults$$ = 0;$DvtDialGaugeDefaults$$ < $DvtRatingGaugeEventManager$$.length;$DvtDialGaugeDefaults$$++) {
      var $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugePeer$$[$DvtDialGaugeDefaults$$], $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$[$DvtDialGaugeDefaults$$].$getAnimationParams$(), $DvtRatingGaugeRenderer$$ = $DvtStatusMeterGaugeIndicator$$.$getAnimationParams$();
      $DvtStatusMeterGaugeIndicator$$.$setAnimationParams$($DvtStatusMeterGaugeCircularIndicator$$);
      $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$4$$.$CustomAnimation$(this.$getCtx$(), $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeDefaults$$);
      $DvtStatusMeterGaugeCircularIndicator$$.$_animator$.$addProp$($dvt$$4$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeIndicator$$.$getAnimationParams$, $DvtStatusMeterGaugeIndicator$$.$setAnimationParams$, $DvtRatingGaugeRenderer$$);
      $DvtDialGaugeIndicator$$.push($DvtStatusMeterGaugeCircularIndicator$$);
    }
    return new $dvt$$4$$.$ParallelPlayable$(this.$getCtx$(), $DvtDialGaugeIndicator$$);
  };
  $DvtGauge$$.prototype.$GetValueAt$ = function $$DvtGauge$$$$$GetValueAt$$() {
    return null;
  };
  $DvtGauge$$.prototype.$renderUpdate$ = function $$DvtGauge$$$$$renderUpdate$$() {
    this.$render$();
    this.$UpdateAriaLiveValue$(this.$_container$);
  };
  $DvtGauge$$.prototype.$UpdateAriaLiveValue$ = function $$DvtGauge$$$$$UpdateAriaLiveValue$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    $DvtRatingGaugePeer$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtRatingGaugePeer$$ ? $DvtRatingGaugePeer$$ : this.$Options$.value, this);
    $DvtRatingGaugeEventManager$$.$setAriaProperty$("valuenow", $DvtRatingGaugePeer$$);
    $dvt$$4$$.$Agent$.$isTouchDevice$() && $DvtRatingGaugeEventManager$$.$setAriaProperty$("label", $DvtRatingGaugePeer$$);
  };
  $DvtGauge$$.prototype.$_onAnimationEnd$ = function $$DvtGauge$$$$$_onAnimationEnd$$() {
    this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = null);
    this.$AnimationStopped$ || this.$RenderComplete$();
    this.$Animation$ = null;
    this.$AnimationStopped$ = !1;
  };
  $DvtGauge$$.prototype.$__processValueChangeStart$ = function $$DvtGauge$$$$$__processValueChangeStart$$($dvt$$4$$, $DvtRatingGaugeEventManager$$) {
    this.$_bEditing$ = !0;
    this.$_oldValue$ = this.$Options$.value;
    this.$__processValueChangeMove$($dvt$$4$$, $DvtRatingGaugeEventManager$$);
  };
  $DvtGauge$$.prototype.$__processValueChangeMove$ = function $$DvtGauge$$$$$__processValueChangeMove$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    null != this.$_oldValue$ && (this.$Options$.value = $DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$GetValueAt$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$)), this.$renderUpdate$(), this.dispatchEvent($dvt$$4$$.$EventFactory$.$newValueChangeEvent$(this.$_oldValue$, this.$Options$.value, !1)));
  };
  $DvtGauge$$.prototype.$__processValueChangeEnd$ = function $$DvtGauge$$$$$__processValueChangeEnd$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    this.$__processValueChangeMove$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$);
    if ($dvt$$4$$.$Agent$.$isTouchDevice$()) {
      var $DvtRatingGaugeDefaults$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), $DvtDialGaugeIndicator$$ = $DvtGaugeRenderer$$.$getTooltipString$(this);
      $DvtRatingGaugeDefaults$$ != $DvtDialGaugeIndicator$$ && ($DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$ + $dvt$$4$$.$Bundle$.$getTranslatedString$($dvt$$4$$.$Bundle$.$UTIL_PREFIX$, "ARIA_LABEL_DESC_DELIMITER") + $DvtDialGaugeIndicator$$, this.$_container$.$setAriaProperty$("label", $DvtDialGaugeIndicator$$));
    }
    this.dispatchEvent($dvt$$4$$.$EventFactory$.$newValueChangeEvent$(this.$_oldValue$, this.$Options$.value, !0));
    this.$_bEditing$ = !1;
    this.$_oldValue$ = null;
  };
  $DvtGauge$$.prototype.$__increaseValue$ = function $$DvtGauge$$$$$__increaseValue$$() {
    if (!this.$Options$.readOnly) {
      var $DvtRatingGaugeEventManager$$ = this.$Options$.value;
      this.$Options$.value = null != this.$Options$.step ? $DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$Options$.value + this.$Options$.step) : Math.min(Math.max(this.$Options$.value + (this.$Options$.max - this.$Options$.min) / 100, this.$Options$.min), this.$Options$.max);
      this.$render$();
      this.dispatchEvent($dvt$$4$$.$EventFactory$.$newValueChangeEvent$($DvtRatingGaugeEventManager$$, this.$Options$.value, !0));
    }
  };
  $DvtGauge$$.prototype.$__decreaseValue$ = function $$DvtGauge$$$$$__decreaseValue$$() {
    if (!this.$Options$.readOnly) {
      var $DvtRatingGaugeEventManager$$ = this.$Options$.value;
      this.$Options$.value = null != this.$Options$.step ? $DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$Options$.value - this.$Options$.step) : Math.min(Math.max(this.$Options$.value - (this.$Options$.max - this.$Options$.min) / 100, this.$Options$.min), this.$Options$.max);
      this.$render$();
      this.dispatchEvent($dvt$$4$$.$EventFactory$.$newValueChangeEvent$($DvtRatingGaugeEventManager$$, this.$Options$.value, !0));
    }
  };
  $DvtGauge$$.prototype.$CreateEventManager$ = function $$DvtGauge$$$$$CreateEventManager$$() {
    return new $DvtGaugeEventManager$$(this);
  };
  $DvtGauge$$.$_thresholdComparator$ = function $$DvtGauge$$$$_thresholdComparator$$($dvt$$4$$, $DvtRatingGaugeEventManager$$) {
    return null != $dvt$$4$$.max && null != $DvtRatingGaugeEventManager$$.max ? $dvt$$4$$.max - $DvtRatingGaugeEventManager$$.max : $dvt$$4$$.max ? -Infinity : Infinity;
  };
  $DvtGauge$$.prototype.$getAutomation$ = function $$DvtGauge$$$$$getAutomation$$() {
    return new $DvtGaugeAutomation$$(this);
  };
  $DvtGauge$$.prototype.$CreateKeyboardHandler$ = function $$DvtGauge$$$$$CreateKeyboardHandler$$($dvt$$4$$) {
    return new $DvtGaugeKeyboardHandler$$($dvt$$4$$, this);
  };
  $DvtGauge$$.prototype.$GetComponentDescription$ = function $$DvtGauge$$$$$GetComponentDescription$$() {
    return $dvt$$4$$.$Bundle$.$getTranslation$(this.$getOptions$(), "componentName", $dvt$$4$$.$Bundle$.$UTIL_PREFIX$, "GAUGE");
  };
  $DvtGauge$$.prototype.$UpdateAriaAttributes$ = function $$DvtGauge$$$$$UpdateAriaAttributes$$() {
    if (!this.$_bStaticRendering$) {
      var $DvtRatingGaugeEventManager$$ = $DvtGaugeRenderer$$.$getTooltipString$(this);
      this.$IsParentRoot$() ? this.$Options$.readOnly ? (this.$getCtx$().$setAriaRole$("img"), this.$getCtx$().$setAriaLabel$($dvt$$4$$.$Bundle$.$getTranslatedString$($dvt$$4$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$4$$.$Bundle$.$getTranslatedString$($dvt$$4$$.$Bundle$.$UTIL_PREFIX$, "DATA_VISUALIZATION"), $dvt$$4$$.$Displayable$.$generateAriaLabel$($dvt$$4$$.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$()), $DvtRatingGaugeEventManager$$ ? [$DvtRatingGaugeEventManager$$] : 
      null)]))) : (this.$getCtx$().$setAriaRole$("application"), this.$getCtx$().$setAriaLabel$($dvt$$4$$.$Bundle$.$getTranslatedString$($dvt$$4$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$4$$.$Bundle$.$getTranslatedString$($dvt$$4$$.$Bundle$.$UTIL_PREFIX$, "DATA_VISUALIZATION"), $dvt$$4$$.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$())]))) : this.$Options$.readOnly && (this.$setAriaRole$("img"), this.$setAriaProperty$("label", $dvt$$4$$.$Displayable$.$generateAriaLabel$($dvt$$4$$.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$()), 
      $DvtRatingGaugeEventManager$$ ? [$DvtRatingGaugeEventManager$$] : null)));
    }
  };
  $dvt$$4$$.$Obj$.$createSubclass$($DvtGaugeAutomation$$, $dvt$$4$$.$Automation$);
  $DvtGaugeAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtGaugeAutomation$$$$$getDomElementForSubId$$($DvtRatingGaugeEventManager$$) {
    if ($DvtRatingGaugeEventManager$$ == $dvt$$4$$.$Automation$.$TOOLTIP_SUBID$) {
      return this.$GetTooltipElement$(this.$_gauge$);
    }
    if (0 == $DvtRatingGaugeEventManager$$.indexOf("item")) {
      var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.indexOf("["), $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.indexOf("]");
      if (0 < $DvtRatingGaugePeer$$ && 0 < $DvtRatingGaugeDefaults$$ && ($DvtRatingGaugeEventManager$$ = this.$_gauge$.$__getRatingGaugeItem$($DvtRatingGaugeEventManager$$.substring($DvtRatingGaugePeer$$ + 1, $DvtRatingGaugeDefaults$$)))) {
        return $DvtRatingGaugeEventManager$$.$getElem$();
      }
    }
    return null;
  };
  $DvtGaugeAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtGaugeAutomation$$$$$GetSubIdForDomElement$$($dvt$$4$$) {
    for (var $DvtRatingGaugeEventManager$$ = this.$_gauge$.$getOptions$(), $DvtRatingGaugePeer$$ = 0;$DvtRatingGaugePeer$$ < $DvtRatingGaugeEventManager$$.max;$DvtRatingGaugePeer$$++) {
      if (this.$_gauge$.$__getRatingGaugeItem$($DvtRatingGaugePeer$$) == $dvt$$4$$) {
        return "item[" + $DvtRatingGaugePeer$$ + "]";
      }
    }
    return null;
  };
  $DvtGaugeAutomation$$.prototype.getValue = function $$DvtGaugeAutomation$$$$getValue$() {
    return this.$_gauge$.$getOptions$().value;
  };
  $DvtGaugeAutomation$$.prototype.$getMetricLabel$ = function $$DvtGaugeAutomation$$$$$getMetricLabel$$() {
    return $DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.getValue(), this.$_gauge$);
  };
  $dvt$$4$$.$Bundle$.$addDefaultStrings$($dvt$$4$$.$Bundle$.$GAUGE_PREFIX$, {});
  $dvt$$4$$.$Obj$.$createSubclass$($DvtGaugeDefaults$$, $dvt$$4$$.$BaseComponentDefaults$);
  $DvtGaugeDefaults$$.$SKIN_ALTA$ = {skin:$dvt$$4$$.$CSSStyle$.$SKIN_ALTA$, color:"#393737", metricLabel:{style:new $dvt$$4$$.$CSSStyle$($dvt$$4$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}, _statusMessageStyle:new $dvt$$4$$.$CSSStyle$($dvt$$4$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$), title:{style:new $dvt$$4$$.$CSSStyle$($dvt$$4$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}, _thresholdColors:["#ed6647", "#fad55c", "#68c182"]};
  $DvtGaugeDefaults$$.$VERSION_1$ = {skin:$dvt$$4$$.$CSSStyle$.$SKIN_SKYROS$, min:0, max:100, center:{}, color:"#313842", borderColor:null, visualEffects:"auto", emptyText:null, animationOnDataChange:"none", animationOnDisplay:"none", animationDuration:500, readOnly:"true", metricLabel:{rendered:"auto", scaling:"auto", style:new $dvt$$4$$.$CSSStyle$($dvt$$4$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$), textType:"number"}, _statusMessageStyle:new $dvt$$4$$.$CSSStyle$($dvt$$4$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$), 
  title:{style:new $dvt$$4$$.$CSSStyle$($dvt$$4$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$), position:"auto"}, _thresholdColors:["#D62800", "#FFCF21", "#84AE31"], __layout:{outerGap:1, labelGap:5}};
  $DvtGaugeDefaults$$.prototype.Init = function $$DvtGaugeDefaults$$$$Init$($DvtRatingGaugeEventManager$$) {
    $DvtRatingGaugeEventManager$$ = {skyros:$dvt$$4$$.$JsonUtils$.$merge$($DvtRatingGaugeEventManager$$.skyros, $DvtGaugeDefaults$$.$VERSION_1$), alta:$dvt$$4$$.$JsonUtils$.$merge$($DvtRatingGaugeEventManager$$.alta, $DvtGaugeDefaults$$.$SKIN_ALTA$)};
    $DvtGaugeDefaults$$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$);
  };
  $DvtGaugeDefaults$$.$isSkyrosSkin$ = function $$DvtGaugeDefaults$$$$isSkyrosSkin$$($DvtRatingGaugeEventManager$$) {
    return $DvtRatingGaugeEventManager$$.$getOptions$().skin == $dvt$$4$$.$CSSStyle$.$SKIN_SKYROS$;
  };
  var $DvtGaugeDataUtils$$ = {};
  $dvt$$4$$.$Obj$.$createSubclass$($DvtGaugeDataUtils$$, $dvt$$4$$.$Obj$);
  $DvtGaugeDataUtils$$.$hasData$ = function $$DvtGaugeDataUtils$$$$hasData$$($dvt$$4$$) {
    var $DvtRatingGaugeEventManager$$ = $dvt$$4$$.$getOptions$();
    return $DvtRatingGaugeEventManager$$ && null != $DvtRatingGaugeEventManager$$.value && $DvtGaugeDataUtils$$.$hasValidData$($dvt$$4$$);
  };
  $DvtGaugeDataUtils$$.$hasValidData$ = function $$DvtGaugeDataUtils$$$$hasValidData$$($dvt$$4$$) {
    $dvt$$4$$ = $dvt$$4$$.$getOptions$();
    return Number($dvt$$4$$.min) < Number($dvt$$4$$.max);
  };
  $DvtGaugeDataUtils$$.$getValueThresholdIndex$ = function $$DvtGaugeDataUtils$$$$getValueThresholdIndex$$($dvt$$4$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $dvt$$4$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = null != $DvtRatingGaugeEventManager$$ ? $DvtRatingGaugeEventManager$$ : $DvtRatingGaugePeer$$.value, $DvtRatingGaugePeer$$ = $DvtRatingGaugePeer$$.thresholds;
    if (!$DvtRatingGaugePeer$$) {
      return -1;
    }
    for (var $DvtDialGaugeIndicator$$ = 0;$DvtDialGaugeIndicator$$ < $DvtRatingGaugePeer$$.length;$DvtDialGaugeIndicator$$++) {
      if ($DvtRatingGaugeDefaults$$ <= $DvtRatingGaugePeer$$[$DvtDialGaugeIndicator$$].max) {
        return $DvtDialGaugeIndicator$$;
      }
    }
    return $DvtRatingGaugePeer$$.length - 1;
  };
  $DvtGaugeDataUtils$$.$getThreshold$ = function $$DvtGaugeDataUtils$$$$getThreshold$$($dvt$$4$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $dvt$$4$$.$getOptions$().thresholds;
    return $DvtRatingGaugePeer$$ && 0 <= $DvtRatingGaugeEventManager$$ && $DvtRatingGaugeEventManager$$ < $DvtRatingGaugePeer$$.length ? $DvtRatingGaugePeer$$[$DvtRatingGaugeEventManager$$] : null;
  };
  $DvtGaugeDataUtils$$.$getReferenceObject$ = function $$DvtGaugeDataUtils$$$$getReferenceObject$$($dvt$$4$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $dvt$$4$$.$getOptions$().referenceLines;
    return $DvtRatingGaugePeer$$ && 0 <= $DvtRatingGaugeEventManager$$ && $DvtRatingGaugeEventManager$$ < $DvtRatingGaugePeer$$.length ? $DvtRatingGaugePeer$$[$DvtRatingGaugeEventManager$$] : null;
  };
  $dvt$$4$$.$Obj$.$createSubclass$($DvtGaugeEventManager$$, $dvt$$4$$.$EventManager$);
  $DvtGaugeEventManager$$.prototype.$OnMouseDown$ = function $$DvtGaugeEventManager$$$$$OnMouseDown$$($dvt$$4$$) {
    if (!1 === this.$_gauge$.$getOptions$().readOnly) {
      this.$IsMouseEditing$ = !0;
      this.$hideTooltip$();
      var $DvtRatingGaugeEventManager$$ = this.$GetRelativePosition$($dvt$$4$$.pageX, $dvt$$4$$.pageY);
      this.$_gauge$.$__processValueChangeStart$($DvtRatingGaugeEventManager$$.x, $DvtRatingGaugeEventManager$$.y);
      $dvt$$4$$.preventDefault();
    } else {
      $DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $dvt$$4$$);
    }
  };
  $DvtGaugeEventManager$$.prototype.$OnMouseUp$ = function $$DvtGaugeEventManager$$$$$OnMouseUp$$($dvt$$4$$) {
    this.$IsMouseEditing$ ? (this.$IsMouseEditing$ = !1, $dvt$$4$$ = this.$GetRelativePosition$($dvt$$4$$.pageX, $dvt$$4$$.pageY), this.$_gauge$.$__processValueChangeEnd$($dvt$$4$$.x, $dvt$$4$$.y)) : $DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $dvt$$4$$);
  };
  $DvtGaugeEventManager$$.prototype.$OnMouseMove$ = function $$DvtGaugeEventManager$$$$$OnMouseMove$$($dvt$$4$$) {
    if (this.$IsMouseEditing$) {
      var $DvtRatingGaugeEventManager$$ = this.$GetRelativePosition$($dvt$$4$$.pageX, $dvt$$4$$.pageY);
      this.$_gauge$.$__processValueChangeMove$($DvtRatingGaugeEventManager$$.x, $DvtRatingGaugeEventManager$$.y);
    }
    !this.$IsShowingTooltipWhileEditing$() && this.$IsMouseEditing$ || $DvtGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $dvt$$4$$);
  };
  $DvtGaugeEventManager$$.prototype.$IsShowingTooltipWhileEditing$ = function $$DvtGaugeEventManager$$$$$IsShowingTooltipWhileEditing$$() {
    return !1;
  };
  $DvtGaugeEventManager$$.prototype.$PreEventBubble$ = function $$DvtGaugeEventManager$$$$$PreEventBubble$$($DvtRatingGaugeEventManager$$) {
    if ($dvt$$4$$.TouchEvent.$TOUCHSTART$ === $DvtRatingGaugeEventManager$$.type && !1 === this.$_gauge$.$getOptions$().readOnly) {
      this.$IsMouseEditing$ = !0;
      var $DvtRatingGaugePeer$$ = this.$GetRelativePosition$($DvtRatingGaugeEventManager$$.touches[0].pageX, $DvtRatingGaugeEventManager$$.touches[0].pageY);
      this.$_gauge$.$__processValueChangeStart$($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y);
      $DvtRatingGaugeEventManager$$.preventDefault();
    } else {
      $dvt$$4$$.TouchEvent.$TOUCHMOVE$ === $DvtRatingGaugeEventManager$$.type && this.$IsMouseEditing$ ? ($DvtRatingGaugePeer$$ = this.$GetRelativePosition$($DvtRatingGaugeEventManager$$.touches[0].pageX, $DvtRatingGaugeEventManager$$.touches[0].pageY), this.$_gauge$.$__processValueChangeMove$($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y), $DvtRatingGaugeEventManager$$.preventDefault()) : $dvt$$4$$.TouchEvent.$TOUCHEND$ === $DvtRatingGaugeEventManager$$.type && this.$IsMouseEditing$ && (this.$IsMouseEditing$ = 
      !1, $DvtRatingGaugePeer$$ = this.$GetRelativePosition$($DvtRatingGaugeEventManager$$.changedTouches[0].pageX, $DvtRatingGaugeEventManager$$.changedTouches[0].pageY), this.$_gauge$.$__processValueChangeEnd$($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y), $DvtRatingGaugeEventManager$$.preventDefault());
    }
    this.$IsMouseEditing$ && !this.$IsShowingTooltipWhileEditing$() || $DvtGaugeEventManager$$.$superclass$.$PreEventBubble$.call(this, $DvtRatingGaugeEventManager$$);
  };
  $DvtGaugeEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtGaugeEventManager$$$$$ProcessKeyboardEvent$$($DvtRatingGaugeEventManager$$) {
    if (!this.$KeyboardHandler$) {
      return !1;
    }
    this.$KeyboardHandler$.$processKeyDown$($DvtRatingGaugeEventManager$$);
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.keyCode;
    if ($DvtRatingGaugePeer$$ == $dvt$$4$$.KeyboardEvent.$UP_ARROW$ || $DvtRatingGaugePeer$$ == $dvt$$4$$.KeyboardEvent.$LEFT_ARROW$ || $DvtRatingGaugePeer$$ == $dvt$$4$$.KeyboardEvent.$DOWN_ARROW$ || $DvtRatingGaugePeer$$ == $dvt$$4$$.KeyboardEvent.$RIGHT_ARROW$ || $DvtRatingGaugePeer$$ == $dvt$$4$$.KeyboardEvent.$TAB$) {
      $DvtRatingGaugePeer$$ = this.$_gauge$.$getCtx$().$getStageAbsolutePosition$(), this.$ProcessObjectTooltip$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y, this.$_gauge$.$__getLogicalObject$(), this.$_gauge$);
    }
    return !1;
  };
  $DvtGaugeEventManager$$.prototype.$OnBlur$ = function $$DvtGaugeEventManager$$$$$OnBlur$$($dvt$$4$$) {
    $DvtGaugeEventManager$$.$superclass$.$OnBlur$.call(this, $dvt$$4$$);
    this.$hideTooltip$();
  };
  $DvtGaugeEventManager$$.prototype.$GetRelativePosition$ = function $$DvtGaugeEventManager$$$$$GetRelativePosition$$($dvt$$4$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = this.$getCtx$().$pageToStageCoords$($dvt$$4$$, $DvtRatingGaugeEventManager$$);
    return this.$_gauge$.$stageToLocal$($DvtRatingGaugePeer$$);
  };
  $DvtGaugeEventManager$$.prototype.$UpdateActiveElement$ = function $$DvtGaugeEventManager$$$$$UpdateActiveElement$$() {
  };
  $dvt$$4$$.$Obj$.$createSubclass$($DvtGaugeKeyboardHandler$$, $dvt$$4$$.$KeyboardHandler$);
  $DvtGaugeKeyboardHandler$$.prototype.Init = function $$DvtGaugeKeyboardHandler$$$$Init$($dvt$$4$$, $DvtRatingGaugeEventManager$$) {
    $DvtGaugeKeyboardHandler$$.$superclass$.Init.call(this, $dvt$$4$$);
    this.$_gauge$ = $DvtRatingGaugeEventManager$$;
  };
  $DvtGaugeKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtGaugeKeyboardHandler$$$$$processKeyDown$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.keyCode, $DvtRatingGaugeDefaults$$ = $dvt$$4$$.$Agent$.$isRightToLeft$(this.$_gauge$.$getCtx$());
    if ($DvtRatingGaugePeer$$ == $dvt$$4$$.KeyboardEvent.$UP_ARROW$ || $DvtRatingGaugePeer$$ == ($DvtRatingGaugeDefaults$$ ? $dvt$$4$$.KeyboardEvent.$LEFT_ARROW$ : $dvt$$4$$.KeyboardEvent.$RIGHT_ARROW$)) {
      this.$_gauge$.$__increaseValue$(), $dvt$$4$$.$EventManager$.$consumeEvent$($DvtRatingGaugeEventManager$$);
    } else {
      if ($DvtRatingGaugePeer$$ == $dvt$$4$$.KeyboardEvent.$DOWN_ARROW$ || $DvtRatingGaugePeer$$ == ($DvtRatingGaugeDefaults$$ ? $dvt$$4$$.KeyboardEvent.$RIGHT_ARROW$ : $dvt$$4$$.KeyboardEvent.$LEFT_ARROW$)) {
        this.$_gauge$.$__decreaseValue$(), $dvt$$4$$.$EventManager$.$consumeEvent$($DvtRatingGaugeEventManager$$);
      }
    }
  };
  var $DvtGaugeStyleUtils$$ = {};
  $dvt$$4$$.$Obj$.$createSubclass$($DvtGaugeStyleUtils$$, $dvt$$4$$.$Obj$);
  $DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$ = ["#ed6647", "#fad55c", "#68c182"];
  $DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
  $DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:80, y:86, width:40, height:34}, indicatorLength:.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ALTA_DOME$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:82, y:133, width:36, height:34}, indicatorLength:.85, tickLabelHeight:20, tickLabelWidth:30, radius:61, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ = {startAngle:195.5, angleExtent:210.8, anchorX:100, anchorY:100, metricLabelBounds:{x:84, y:135, width:32, height:35}, indicatorLength:.98, tickLabelHeight:20, tickLabelWidth:30, radius:63, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ = {startAngle:207.6, angleExtent:235, anchorX:100, anchorY:95.8, metricLabelBounds:{x:83, y:125, width:34, height:40}, indicatorLength:1.05, tickLabelHeight:20, tickLabelWidth:30, radius:64, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:.82, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_LIGHT_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:70, width:41, height:39}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ = {startAngle:211, angleExtent:242, anchorX:100, anchorY:91.445, metricLabelBounds:{x:78, y:75, width:44, height:38}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ = {startAngle:220.5, angleExtent:261.5, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_DARK_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:73, width:40, height:36}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:99.5, metricLabelBounds:{x:80, y:83, width:41, height:36}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ = {anchorX:42, anchorY:510};
  $DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$ = {anchorX:187, anchorY:388};
  $DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ = {anchorX:227, anchorY:425};
  $DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ = {anchorX:227, anchorY:425};
  $DvtGaugeStyleUtils$$.$getColor$ = function $$DvtGaugeStyleUtils$$$$getColor$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($DvtRatingGaugeEventManager$$), $DvtDialGaugeIndicator$$ = $DvtGaugeDataUtils$$.$getThreshold$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    return !$DvtDialGaugeIndicator$$ || $DvtRatingGaugeEventManager$$ instanceof $dvt$$4$$.$StatusMeterGauge$ && !($DvtRatingGaugeEventManager$$ instanceof $dvt$$4$$.$StatusMeterGauge$ && "onIndicator" == $DvtRatingGaugePeer$$.thresholdDisplay) ? $DvtRatingGaugePeer$$.color : $DvtGaugeStyleUtils$$.$getThresholdColor$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$);
  };
  $DvtGaugeStyleUtils$$.$getBorderColor$ = function $$DvtGaugeStyleUtils$$$$getBorderColor$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($DvtRatingGaugeEventManager$$);
    return ($DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getThreshold$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$)) && $DvtRatingGaugeDefaults$$.borderColor && (!($DvtRatingGaugeEventManager$$ instanceof $dvt$$4$$.$StatusMeterGauge$) || $DvtRatingGaugeEventManager$$ instanceof $dvt$$4$$.$StatusMeterGauge$ && "onIndicator" == $DvtRatingGaugePeer$$.thresholdDisplay) ? $DvtRatingGaugeDefaults$$.borderColor : $DvtRatingGaugePeer$$.borderColor;
  };
  $DvtGaugeStyleUtils$$.$getPlotAreaColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaColor$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($DvtRatingGaugeEventManager$$), $DvtDialGaugeIndicator$$ = $DvtGaugeDataUtils$$.$getThreshold$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    return !$DvtDialGaugeIndicator$$ || $DvtRatingGaugeEventManager$$ instanceof $dvt$$4$$.$StatusMeterGauge$ && !($DvtRatingGaugeEventManager$$ instanceof $dvt$$4$$.$StatusMeterGauge$ && "onIndicator" != $DvtRatingGaugePeer$$.thresholdDisplay) ? $DvtRatingGaugePeer$$.plotArea.color : $DvtGaugeStyleUtils$$.$getThresholdColor$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$);
  };
  $DvtGaugeStyleUtils$$.$getPlotAreaBorderColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaBorderColor$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $DvtRatingGaugePeer$$.plotArea.borderColor;
    return $DvtRatingGaugeEventManager$$ instanceof $dvt$$4$$.$StatusMeterGauge$ && "circular" != $DvtRatingGaugePeer$$.orientation && null == $DvtRatingGaugeDefaults$$ ? "skyros" == $DvtRatingGaugePeer$$.skin ? "#C6C6C6" : "#D6DFE6" : $DvtRatingGaugeDefaults$$;
  };
  $DvtGaugeStyleUtils$$.$getThresholdColor$ = function $$DvtGaugeStyleUtils$$$$getThresholdColor$$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    if ($DvtRatingGaugeEventManager$$.color) {
      return $DvtRatingGaugeEventManager$$.color;
    }
    $dvt$$4$$ = $dvt$$4$$.$getOptions$();
    return $dvt$$4$$._thresholdColors[$DvtRatingGaugePeer$$ % $dvt$$4$$._thresholdColors.length];
  };
  $DvtGaugeStyleUtils$$.$getDialBackground$ = function $$DvtGaugeStyleUtils$$$$getDialBackground$$($dvt$$4$$) {
    return "rectangleAlta" === $dvt$$4$$ ? $DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ : "domeAlta" === $dvt$$4$$ ? $DvtGaugeStyleUtils$$.$_ALTA_DOME$ : "circleAntique" === $dvt$$4$$ ? $DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ : "rectangleAntique" === $dvt$$4$$ ? $DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ : "domeAntique" === $dvt$$4$$ ? $DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ : "circleLight" === $dvt$$4$$ ? $DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ : "rectangleLight" === $dvt$$4$$ ? $DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ : 
    "domeLight" === $dvt$$4$$ ? $DvtGaugeStyleUtils$$.$_LIGHT_DOME$ : "circleDark" === $dvt$$4$$ ? $DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ : "rectangleDark" === $dvt$$4$$ ? $DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ : "domeDark" === $dvt$$4$$ ? $DvtGaugeStyleUtils$$.$_DARK_DOME$ : $DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$;
  };
  $DvtGaugeStyleUtils$$.$getDialIndicator$ = function $$DvtGaugeStyleUtils$$$$getDialIndicator$$($dvt$$4$$) {
    return "needleAntique" === $dvt$$4$$ ? $DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ : "needleLight" === $dvt$$4$$ ? $DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ : "needleDark" === $dvt$$4$$ ? $DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ : $DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$;
  };
  $DvtGaugeStyleUtils$$.$hasTitle$ = function $$DvtGaugeStyleUtils$$$$hasTitle$$($dvt$$4$$) {
    return !!$dvt$$4$$.title.text;
  };
  var $DvtGaugeRenderer$$ = {};
  $dvt$$4$$.$Obj$.$createSubclass$($DvtGaugeRenderer$$, $dvt$$4$$.$Obj$);
  $DvtGaugeRenderer$$.$renderEmptyText$ = function $$DvtGaugeRenderer$$$$renderEmptyText$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeDefaults$$ = $DvtDialGaugeIndicator$$.emptyText;
    $DvtDialGaugeDefaults$$ || ($DvtDialGaugeDefaults$$ = $dvt$$4$$.$Bundle$.$getTranslation$($DvtDialGaugeIndicator$$, "labelNoData", $dvt$$4$$.$Bundle$.$UTIL_PREFIX$, "NO_DATA", null));
    $DvtGaugeDataUtils$$.$hasValidData$($DvtRatingGaugeEventManager$$) || ($DvtDialGaugeDefaults$$ = $dvt$$4$$.$Bundle$.$getTranslation$($DvtDialGaugeIndicator$$, "labelInvalidData", $dvt$$4$$.$Bundle$.$UTIL_PREFIX$, "INVALID_DATA", null));
    $DvtDialGaugeIndicator$$ = $DvtDialGaugeIndicator$$._statusMessageStyle;
    $DvtDialGaugeIndicator$$.$getStyle$("font-size") || $DvtDialGaugeIndicator$$.$setStyle$("font-size", "13px");
    if ($DvtRatingGaugeEventManager$$ instanceof $dvt$$4$$.$StatusMeterGauge$) {
      var $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeIndicator$$.$getStyle$("color");
      $DvtDialGaugeIndicator$$.$setStyle$("color", $DvtStatusMeterGaugeIndicator$$ ? $DvtStatusMeterGaugeIndicator$$ : "#333333");
    }
    $dvt$$4$$.$TextUtils$.$renderEmptyText$($DvtRatingGaugePeer$$, $DvtDialGaugeDefaults$$, new $dvt$$4$$.$Rectangle$($DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$), $DvtRatingGaugeEventManager$$.$getEventManager$(), $DvtDialGaugeIndicator$$);
  };
  $DvtGaugeRenderer$$.$getFormattedMetricLabel$ = function $$DvtGaugeRenderer$$$$getFormattedMetricLabel$$($dvt$$4$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    return $DvtRatingGaugePeer$$.metricLabel.text ? $DvtRatingGaugePeer$$.metricLabel.text : $DvtGaugeRenderer$$.$_formatLabelValue$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$.metricLabel.converter, $DvtRatingGaugePeer$$.metricLabel.scaling, $DvtRatingGaugePeer$$.metricLabel.autoPrecision ? $DvtRatingGaugePeer$$.metricLabel.autoPrecision : "on", "percent" == $DvtRatingGaugePeer$$.metricLabel.textType);
  };
  $DvtGaugeRenderer$$.$formatTickLabelValue$ = function $$DvtGaugeRenderer$$$$formatTickLabelValue$$($dvt$$4$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = null, $DvtDialGaugeIndicator$$ = "percent" == $DvtRatingGaugePeer$$.tickLabel.textType;
    "on" == $DvtRatingGaugePeer$$.tickLabel.rendered && $DvtRatingGaugePeer$$.tickLabel.converter && ($DvtRatingGaugeDefaults$$ = $DvtRatingGaugePeer$$.tickLabel.converter);
    var $DvtDialGaugeDefaults$$ = null;
    "on" == $DvtRatingGaugePeer$$.tickLabel.rendered && $DvtRatingGaugePeer$$.tickLabel.scaling && ($DvtDialGaugeDefaults$$ = $DvtRatingGaugePeer$$.tickLabel.scaling);
    return $DvtGaugeRenderer$$.$_formatLabelValue$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugePeer$$.tickLabel.autoPrecision ? $DvtRatingGaugePeer$$.tickLabel.autoPrecision : "on", $DvtDialGaugeIndicator$$);
  };
  $DvtGaugeRenderer$$.$_formatLabelValue$ = function $$DvtGaugeRenderer$$$$_formatLabelValue$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$) {
    var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugePeer$$.$getOptions$(), $DvtRatingGaugeRenderer$$ = $DvtStatusMeterGaugeCircularIndicator$$.min, $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeCircularIndicator$$.max, $DvtStatusMeterGaugeDefaults$$ = $DvtGaugeKeyboardHandler$$ - $DvtRatingGaugeRenderer$$, $DvtLedGaugeDefaults$$ = null;
    isNaN($DvtStatusMeterGaugeDefaults$$) || ($DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$ / (1E3 > $DvtStatusMeterGaugeDefaults$$ ? 100 : 1E3));
    $DvtStatusMeterGaugeIndicator$$ && ($DvtRatingGaugeEventManager$$ = $DvtGaugeRenderer$$.$getFillPercentage$($DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$.min, $DvtRatingGaugeEventManager$$, !0));
    $DvtRatingGaugePeer$$ = new $dvt$$4$$.$LinearScaleAxisValueFormatter$($DvtRatingGaugePeer$$.$getCtx$(), $DvtRatingGaugeRenderer$$, $DvtGaugeKeyboardHandler$$, $DvtLedGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$);
    $DvtRatingGaugeEventManager$$ = $DvtRatingGaugeDefaults$$ && $DvtRatingGaugeDefaults$$.getAsString ? $DvtRatingGaugePeer$$.format($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$) : $DvtRatingGaugeDefaults$$ && $DvtRatingGaugeDefaults$$.format ? $DvtRatingGaugePeer$$.format($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$) : $DvtStatusMeterGaugeIndicator$$ ? Math.round(100 * $DvtRatingGaugeEventManager$$) : $DvtRatingGaugePeer$$.format($DvtRatingGaugeEventManager$$);
    return $DvtStatusMeterGaugeIndicator$$ ? String($DvtRatingGaugeEventManager$$) + "%" : $DvtRatingGaugeEventManager$$;
  };
  $DvtGaugeRenderer$$.$getFillPercentage$ = function $$DvtGaugeRenderer$$$$getFillPercentage$$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $dvt$$4$$ = ($DvtRatingGaugePeer$$ - $DvtRatingGaugeEventManager$$) / ($dvt$$4$$.max - $dvt$$4$$.min);
    return $dvt$$4$$ = $DvtRatingGaugeDefaults$$ ? $dvt$$4$$ : Math.min(Math.max(0, $dvt$$4$$), 1);
  };
  $DvtGaugeRenderer$$.$getTooltipString$ = function $$DvtGaugeRenderer$$$$getTooltipString$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($DvtRatingGaugeEventManager$$), $DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getThreshold$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    $DvtRatingGaugeEventManager$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtRatingGaugePeer$$.value, $DvtRatingGaugeEventManager$$);
    return $DvtRatingGaugeDefaults$$ && null != $DvtRatingGaugeDefaults$$.shortDesc ? $DvtRatingGaugeDefaults$$.shortDesc : null != $DvtRatingGaugePeer$$.shortDesc ? $DvtRatingGaugePeer$$.shortDesc : $DvtRatingGaugePeer$$.title.text ? $dvt$$4$$.$Bundle$.$getTranslatedString$($dvt$$4$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtRatingGaugePeer$$.title.text, $DvtRatingGaugeEventManager$$]) : $DvtRatingGaugeEventManager$$;
  };
  $DvtGaugeRenderer$$.$renderLabel$ = function $$DvtGaugeRenderer$$$$renderLabel$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$) {
    var $DvtRatingGaugeRenderer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtGaugeKeyboardHandler$$ = !1;
    if ("on" == $DvtRatingGaugeRenderer$$.metricLabel.rendered || $DvtStatusMeterGaugeCircularIndicator$$ && "off" != $DvtRatingGaugeRenderer$$.metricLabel.rendered) {
      $DvtStatusMeterGaugeCircularIndicator$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtRatingGaugeRenderer$$.value, $DvtRatingGaugeEventManager$$);
      var $DvtGaugeKeyboardHandler$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtRatingGaugeRenderer$$.min, $DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeDefaults$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtRatingGaugeRenderer$$.max, $DvtRatingGaugeEventManager$$);
      $DvtRatingGaugeEventManager$$ = new $dvt$$4$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2);
      $DvtRatingGaugeEventManager$$.$setCSSStyle$($DvtRatingGaugeRenderer$$.metricLabel.style);
      $DvtRatingGaugeRenderer$$ = ($DvtRatingGaugeRenderer$$ = $DvtRatingGaugeRenderer$$.metricLabel.style.$getStyle$("font-size")) ? parseInt($DvtRatingGaugeRenderer$$) : null;
      $DvtRatingGaugeRenderer$$ || ($DvtRatingGaugeRenderer$$ = $DvtGaugeRenderer$$.$calcLabelFontSize$([$DvtStatusMeterGaugeCircularIndicator$$, $DvtGaugeKeyboardHandler$$, $DvtStatusMeterGaugeDefaults$$], $DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$), $DvtRatingGaugeEventManager$$.$setTextString$($DvtStatusMeterGaugeCircularIndicator$$), $DvtRatingGaugeEventManager$$.$setFontSize$($DvtRatingGaugeRenderer$$));
      "top" == $DvtStatusMeterGaugeIndicator$$ ? ($DvtRatingGaugeEventManager$$.$setY$($DvtRatingGaugeDefaults$$.y), $DvtRatingGaugeEventManager$$.$alignTop$()) : "middle" == $DvtStatusMeterGaugeIndicator$$ ? $dvt$$4$$.$TextUtils$.$centerTextVertically$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2) : "bottom" == $DvtStatusMeterGaugeIndicator$$ && ($DvtRatingGaugeEventManager$$.$setY$($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$), $DvtRatingGaugeEventManager$$.$alignBottom$());
      "center" == $DvtDialGaugeDefaults$$ ? $DvtRatingGaugeEventManager$$.$alignCenter$() : "left" == $DvtDialGaugeDefaults$$ ? ($DvtRatingGaugeEventManager$$.$setX$($DvtRatingGaugeDefaults$$.x), $DvtRatingGaugeEventManager$$.$alignLeft$()) : "right" == $DvtDialGaugeDefaults$$ && ($DvtRatingGaugeEventManager$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$), $DvtRatingGaugeEventManager$$.$alignRight$());
      null != $DvtDialGaugeIndicator$$ && $DvtRatingGaugeEventManager$$.$setSolidFill$($DvtDialGaugeIndicator$$);
      $DvtGaugeKeyboardHandler$$ = $dvt$$4$$.$TextUtils$.$fitText$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$, $DvtRatingGaugePeer$$);
    }
    return $DvtGaugeKeyboardHandler$$;
  };
  $DvtGaugeRenderer$$.$renderTitle$ = function $$DvtGaugeRenderer$$$$renderTitle$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    var $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeCircularIndicator$$ = !1;
    if ($DvtGaugeStyleUtils$$.$hasTitle$($DvtStatusMeterGaugeIndicator$$)) {
      var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtStatusMeterGaugeIndicator$$.title.text, $DvtRatingGaugeRenderer$$ = $DvtStatusMeterGaugeIndicator$$.title.style, $DvtStatusMeterGaugeIndicator$$ = new $dvt$$4$$.$MultilineText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeCircularIndicator$$), $DvtGaugeKeyboardHandler$$ = $DvtRatingGaugeRenderer$$.clone();
      $DvtStatusMeterGaugeIndicator$$.$setCSSStyle$($DvtRatingGaugeRenderer$$);
      var $DvtStatusMeterGaugeDefaults$$ = $DvtRatingGaugeRenderer$$.$getStyle$("font-size"), $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$ ? parseInt($DvtStatusMeterGaugeDefaults$$) : null;
      $DvtStatusMeterGaugeDefaults$$ || ($DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$4$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeCircularIndicator$$, 0, 0), $DvtStatusMeterGaugeCircularIndicator$$.$setCSSStyle$($DvtRatingGaugeRenderer$$), $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$.$getOptimalFontSize$($DvtRatingGaugeDefaults$$), $DvtGaugeKeyboardHandler$$.$setFontSize$("font-size", $DvtStatusMeterGaugeDefaults$$.toString()));
      null != $DvtDialGaugeIndicator$$ && $DvtGaugeKeyboardHandler$$.$setStyle$("color", $DvtDialGaugeIndicator$$);
      $DvtStatusMeterGaugeIndicator$$.$setCSSStyle$($DvtGaugeKeyboardHandler$$);
      $DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$4$$.$TextUtils$.$fitText$($DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$, $DvtRatingGaugeEventManager$$);
      $DvtRatingGaugeEventManager$$ = $dvt$$4$$.$TextUtils$.$getTextHeight$($DvtStatusMeterGaugeIndicator$$);
      "top" == $DvtDialGaugeDefaults$$ ? $DvtStatusMeterGaugeIndicator$$.$setY$($DvtRatingGaugeDefaults$$.y) : "bottom" == $DvtDialGaugeDefaults$$ ? $DvtStatusMeterGaugeIndicator$$.$setY$($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ - $DvtRatingGaugeEventManager$$) : $DvtStatusMeterGaugeIndicator$$.$setY$($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2 - $DvtRatingGaugeEventManager$$ / 2);
      $DvtStatusMeterGaugeIndicator$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2);
      $DvtStatusMeterGaugeIndicator$$.$alignCenter$();
      $DvtRatingGaugePeer$$.$addChild$($DvtStatusMeterGaugeIndicator$$);
    }
    return $DvtStatusMeterGaugeCircularIndicator$$;
  };
  $DvtGaugeRenderer$$.$calcLabelFontSize$ = function $$DvtGaugeRenderer$$$$calcLabelFontSize$$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    for (var $DvtRatingGaugeDefaults$$ = 0, $DvtDialGaugeIndicator$$ = null, $DvtDialGaugeDefaults$$ = 0, $DvtStatusMeterGaugeIndicator$$ = 0;$DvtStatusMeterGaugeIndicator$$ < $dvt$$4$$.length;$DvtStatusMeterGaugeIndicator$$++) {
      $DvtRatingGaugeEventManager$$.$setTextString$($dvt$$4$$[$DvtStatusMeterGaugeIndicator$$]), $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$measureDimensions$().$w$, $DvtDialGaugeDefaults$$ > $DvtRatingGaugeDefaults$$ && ($DvtDialGaugeIndicator$$ = $dvt$$4$$[$DvtStatusMeterGaugeIndicator$$], $DvtRatingGaugeDefaults$$ = $DvtDialGaugeDefaults$$);
    }
    $DvtRatingGaugeEventManager$$.$setTextString$($DvtDialGaugeIndicator$$);
    return $DvtRatingGaugeEventManager$$.$getOptimalFontSize$($DvtRatingGaugePeer$$);
  };
  $DvtGaugeRenderer$$.$adjustForStep$ = function $$DvtGaugeRenderer$$$$adjustForStep$$($dvt$$4$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = Number($dvt$$4$$.step);
    if ($DvtRatingGaugePeer$$ && 0 < $DvtRatingGaugePeer$$) {
      var $DvtRatingGaugeDefaults$$ = ($DvtRatingGaugeEventManager$$ - $dvt$$4$$.min) / $DvtRatingGaugePeer$$;
      return .5 < $DvtRatingGaugeDefaults$$ ? Math.max(Math.min($dvt$$4$$.max, Math.round($DvtRatingGaugeDefaults$$) * $DvtRatingGaugePeer$$ + $dvt$$4$$.min), $dvt$$4$$.min) : $dvt$$4$$.min;
    }
    return $DvtRatingGaugeEventManager$$;
  };
  $dvt$$4$$.$LedGauge$ = function $$dvt$$4$$$$LedGauge$$() {
  };
  $dvt$$4$$.$Obj$.$createSubclass$($dvt$$4$$.$LedGauge$, $DvtGauge$$);
  $dvt$$4$$.$LedGauge$.newInstance = function $$dvt$$4$$$$LedGauge$$newInstance$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    var $DvtDialGaugeDefaults$$ = new $dvt$$4$$.$LedGauge$;
    $DvtDialGaugeDefaults$$.Init($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    return $DvtDialGaugeDefaults$$;
  };
  $dvt$$4$$.$LedGauge$.prototype.Init = function $$dvt$$4$$$$LedGauge$$$Init$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    $dvt$$4$$.$LedGauge$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    this.$Defaults$ = new $DvtLedGaugeDefaults$$;
  };
  $dvt$$4$$.$LedGauge$.prototype.$SetOptions$ = function $$dvt$$4$$$$LedGauge$$$$SetOptions$$($DvtRatingGaugeEventManager$$) {
    $dvt$$4$$.$LedGauge$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($DvtRatingGaugeEventManager$$));
    "auto" == this.$Options$.animationOnDisplay && (this.$Options$.animationOnDisplay = "zoom");
    "auto" == this.$Options$.animationOnDataChange && (this.$Options$.animationOnDataChange = "alphaFade");
    this.$Options$.readOnly = !0;
  };
  $dvt$$4$$.$LedGauge$.prototype.$Render$ = function $$dvt$$4$$$$LedGauge$$$$Render$$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    $DvtLedGaugeRenderer$$.$render$(this, $dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$);
  };
  $dvt$$4$$.$Obj$.$createSubclass$($DvtLedGaugeDefaults$$, $DvtGaugeDefaults$$);
  $DvtLedGaugeDefaults$$.$VERSION_1$ = {type:"circle"};
  var $DvtLedGaugeRenderer$$ = {};
  $dvt$$4$$.$Obj$.$createSubclass$($DvtLedGaugeRenderer$$, $dvt$$4$$.$Obj$);
  $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ = "M-42,36.6Q-50,36.6,-46.54,28.6L-4,-43.07Q0,-50,4,-43.07L46.54,28.6Q50,36.6,42,36.6Z";
  $DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
  $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
  $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ = [-13.05, -12.94, -50, -11.13, -21.06, 11.9, -30.74, 47.6, .1, 27.18, 31.06, 47.44, 21.17, 11.79, 50, -11.39, 13.05, -13.01, -.06, -47.59];
  $DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ = [-50, -11.22, -16.69, -17.94, 0, -47.55, 16.69, -17.94, 50, -11.22, 26.69, 13.8, 30.9, 47.56, 0, 33.42, -30.9, 47.56, -26.69, 13.8];
  $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ = "M0,45L21,45Q24.414,44.414,25,41L25,10L42,10Q48.5,9.1,45,4L2,-38Q0,-39,-2,-38L-45,4Q-48.5,9.1,-42,10L-25,10L-25,41Q-24.414,44.414,-21,45Z";
  $DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
  $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
  $DvtLedGaugeRenderer$$.$_SHAPE_HUMAN_CMDS$ = "M -0.06059525142297417 -50.86842065108466 C -11.4496388584463 -50.86842065108466 -20.708163169810554 -39.024253028220556 -20.708163169810554 -24.413724255650386 C -20.708163169810554 -9.803195483080515 -11.4496388584463 2.040972139783591 -0.06059525142297417 2.040972139783591 C 11.328499974520241 2.040972139783591 20.586972666964613 -9.803195483080515 20.586972666964613 -24.413724255650386 C 20.586972666964613 -39.024253028220556 11.328499974520241 -50.86842065108466 -0.06059525142297417 -50.86842065108466 z M -23.93434565705865 -2.959610715450779 C -30.908061721494278 3.3998402034127153 -42.00096758564793 18.817121073473572 -38.77478509839983 33.65756051481475 C -20.651382358034887 47.30044101688934 14.372054723529814 49.13162219665128 39.298831093003386 32.85101489300273 C 40.26410489318826 16.477493533721187 32.34060070450674 4.7883891459240715 23.167918656763206 -2.959610715450779 C 11.553661702670112 21.074158341552575 -11.029615708066558 16.237465556670102 -23.93434565705865 -2.959610715450779 z ";
  $DvtLedGaugeRenderer$$.$render$ = function $$DvtLedGaugeRenderer$$$$render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    if ($DvtGaugeDataUtils$$.$hasData$($DvtRatingGaugeEventManager$$)) {
      var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeDefaults$$.__layout.outerGap, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeDefaults$$ && (0 <= $DvtDialGaugeDefaults$$.size || 1 > $DvtDialGaugeDefaults$$.size) ? Math.sqrt($DvtDialGaugeDefaults$$.size) : 1;
      $DvtDialGaugeIndicator$$ = new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$ + ($DvtRatingGaugeDefaults$$ - 2 * $DvtStatusMeterGaugeIndicator$$) * (1 - $DvtStatusMeterGaugeCircularIndicator$$) / 2, $DvtStatusMeterGaugeIndicator$$ + ($DvtDialGaugeIndicator$$ - 2 * $DvtStatusMeterGaugeIndicator$$) * (1 - $DvtStatusMeterGaugeCircularIndicator$$) / 2, ($DvtRatingGaugeDefaults$$ - 2 * $DvtStatusMeterGaugeIndicator$$) * $DvtStatusMeterGaugeCircularIndicator$$, ($DvtDialGaugeIndicator$$ - 
      2 * $DvtStatusMeterGaugeIndicator$$) * $DvtStatusMeterGaugeCircularIndicator$$);
      $DvtLedGaugeRenderer$$.$_renderShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$);
      $DvtLedGaugeRenderer$$.$_renderVisualEffects$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$);
      $DvtStatusMeterGaugeIndicator$$ = !1;
      $DvtRatingGaugeDefaults$$ = $dvt$$4$$.$ColorUtils$.$getContrastingTextColor$($DvtGaugeStyleUtils$$.$getColor$($DvtRatingGaugeEventManager$$));
      $DvtGaugeStyleUtils$$.$hasTitle$($DvtDialGaugeDefaults$$) && ($DvtStatusMeterGaugeIndicator$$ = "middle", $DvtStatusMeterGaugeCircularIndicator$$ = $DvtLedGaugeRenderer$$.$_getLabelBounds$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$), "on" == $DvtDialGaugeDefaults$$.metricLabel.rendered && ($DvtStatusMeterGaugeCircularIndicator$$.y += .6 * $DvtStatusMeterGaugeCircularIndicator$$.$h$, $DvtStatusMeterGaugeCircularIndicator$$.$h$ *= .4, $DvtStatusMeterGaugeIndicator$$ = "top"), $DvtStatusMeterGaugeIndicator$$ = 
      $dvt$$4$$.$Agent$.$isHighContrast$() || null == $DvtDialGaugeDefaults$$.title.style.$getStyle$("color") ? $DvtGaugeRenderer$$.$renderTitle$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$) : $DvtGaugeRenderer$$.$renderTitle$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeCircularIndicator$$, null, $DvtStatusMeterGaugeIndicator$$));
      "on" == $DvtDialGaugeDefaults$$.metricLabel.rendered && ($DvtDialGaugeIndicator$$ = $DvtLedGaugeRenderer$$.$_getLabelBounds$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$), $DvtStatusMeterGaugeCircularIndicator$$ = "middle", $DvtStatusMeterGaugeIndicator$$ && ($DvtDialGaugeIndicator$$.$h$ *= .55, $DvtStatusMeterGaugeCircularIndicator$$ = "bottom"), $dvt$$4$$.$Agent$.$isHighContrast$() || null == $DvtDialGaugeDefaults$$.metricLabel.style.$getStyle$("color") ? $DvtGaugeRenderer$$.$renderLabel$($DvtRatingGaugeEventManager$$, 
      $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$, "center", $DvtStatusMeterGaugeCircularIndicator$$) : $DvtGaugeRenderer$$.$renderLabel$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$, null, "center", $DvtStatusMeterGaugeCircularIndicator$$));
    } else {
      $DvtGaugeRenderer$$.$renderEmptyText$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, new $dvt$$4$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$));
    }
  };
  $DvtLedGaugeRenderer$$.$_renderShape$ = function $$DvtLedGaugeRenderer$$$$_renderShape$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeDefaults$$.type, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtGaugeStyleUtils$$.$getColor$($DvtRatingGaugeEventManager$$), $DvtRatingGaugeRenderer$$ = $DvtGaugeStyleUtils$$.$getBorderColor$($DvtRatingGaugeEventManager$$), $DvtGaugeKeyboardHandler$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 
    2, $DvtStatusMeterGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2, $DvtLedGaugeDefaults$$ = Math.min($DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$) / 2, $DvtStatusMeterGaugeRenderer$$ = $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$);
    $DvtLedGaugeRenderer$$.$_cache$ || ($DvtLedGaugeRenderer$$.$_cache$ = new $dvt$$4$$.Cache(50));
    var $DvtGaugeDataUtils$$ = Math.min($DvtRatingGaugeDefaults$$.$w$ / 100, $DvtRatingGaugeDefaults$$.$h$ / 100);
    "square" == $DvtStatusMeterGaugeIndicator$$ ? $DvtGaugeKeyboardHandler$$ = new $dvt$$4$$.Rect($DvtDialGaugeIndicator$$, $DvtGaugeKeyboardHandler$$ - $DvtLedGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$ - $DvtLedGaugeDefaults$$, 2 * $DvtLedGaugeDefaults$$, 2 * $DvtLedGaugeDefaults$$) : "rectangle" == $DvtStatusMeterGaugeIndicator$$ ? $DvtGaugeKeyboardHandler$$ = new $dvt$$4$$.Rect($DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtRatingGaugeDefaults$$.$w$, 
    $DvtRatingGaugeDefaults$$.$h$) : "diamond" == $DvtStatusMeterGaugeIndicator$$ ? $DvtGaugeKeyboardHandler$$ = new $dvt$$4$$.$Polygon$($DvtDialGaugeIndicator$$, [$DvtGaugeKeyboardHandler$$ - $DvtLedGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$, $DvtGaugeKeyboardHandler$$, $DvtStatusMeterGaugeDefaults$$ - $DvtLedGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ + $DvtLedGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$, $DvtGaugeKeyboardHandler$$, $DvtStatusMeterGaugeDefaults$$ + $DvtLedGaugeDefaults$$]) : 
    "circle" == $DvtStatusMeterGaugeIndicator$$ ? $DvtGaugeKeyboardHandler$$ = new $dvt$$4$$.$Circle$($DvtDialGaugeIndicator$$, $DvtGaugeKeyboardHandler$$, $DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$) : ("star" == $DvtStatusMeterGaugeIndicator$$ ? $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeRenderer$$ ? $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ : $DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ : "triangle" == $DvtStatusMeterGaugeIndicator$$ ? $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeRenderer$$ ? 
    $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ : $DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ : "arrow" == $DvtStatusMeterGaugeIndicator$$ ? $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeRenderer$$ ? $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ : $DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ : "human" == $DvtStatusMeterGaugeIndicator$$ ? $DvtGaugeKeyboardHandler$$ = $DvtLedGaugeRenderer$$.$_SHAPE_HUMAN_CMDS$ : ($DvtGaugeKeyboardHandler$$ = $DvtLedGaugeRenderer$$.$_cache$.get($DvtStatusMeterGaugeIndicator$$), 
    $DvtGaugeKeyboardHandler$$ || ($DvtGaugeKeyboardHandler$$ = new $dvt$$4$$.$Path$($DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeIndicator$$), $DvtGaugeKeyboardHandler$$ = $dvt$$4$$.$DisplayableUtils$.$getDimForced$($DvtDialGaugeIndicator$$, $DvtGaugeKeyboardHandler$$), $DvtStatusMeterGaugeDefaults$$ = 100 / Math.max($DvtGaugeKeyboardHandler$$.$w$, $DvtGaugeKeyboardHandler$$.$h$), $DvtGaugeKeyboardHandler$$ = $dvt$$4$$.$PathUtils$.$transformPath$($DvtStatusMeterGaugeIndicator$$, -$DvtStatusMeterGaugeDefaults$$ * 
    ($DvtGaugeKeyboardHandler$$.x + $DvtGaugeKeyboardHandler$$.$w$ / 2), -$DvtStatusMeterGaugeDefaults$$ * ($DvtGaugeKeyboardHandler$$.y + $DvtGaugeKeyboardHandler$$.$h$ / 2), $DvtStatusMeterGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$), $DvtLedGaugeRenderer$$.$_cache$.put($DvtStatusMeterGaugeIndicator$$, $DvtGaugeKeyboardHandler$$))), ($DvtStatusMeterGaugeRenderer$$ || "triangle" != $DvtStatusMeterGaugeIndicator$$ && "arrow" != $DvtStatusMeterGaugeIndicator$$) && "star" != $DvtStatusMeterGaugeIndicator$$ ? 
    ($DvtGaugeKeyboardHandler$$ = $dvt$$4$$.$PathUtils$.$transformPath$($DvtGaugeKeyboardHandler$$, $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2, $DvtGaugeDataUtils$$, $DvtGaugeDataUtils$$), $DvtGaugeKeyboardHandler$$ = new $dvt$$4$$.$Path$($DvtDialGaugeIndicator$$, $DvtGaugeKeyboardHandler$$)) : ($DvtGaugeKeyboardHandler$$ = $dvt$$4$$.$PolygonUtils$.scale($DvtGaugeKeyboardHandler$$, $DvtGaugeDataUtils$$, $DvtGaugeDataUtils$$), 
    $DvtGaugeKeyboardHandler$$ = $dvt$$4$$.$PolygonUtils$.translate($DvtGaugeKeyboardHandler$$, $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2), $DvtGaugeKeyboardHandler$$ = new $dvt$$4$$.$Polygon$($DvtDialGaugeIndicator$$, $DvtGaugeKeyboardHandler$$)));
    $DvtStatusMeterGaugeRenderer$$ || "none" == $DvtDialGaugeDefaults$$.visualEffects ? $DvtGaugeKeyboardHandler$$.$setSolidFill$($DvtStatusMeterGaugeCircularIndicator$$) : ($DvtDialGaugeIndicator$$ = [$dvt$$4$$.$ColorUtils$.$adjustHSL$($DvtStatusMeterGaugeCircularIndicator$$, -.09, .04), $dvt$$4$$.$ColorUtils$.$adjustHSL$($DvtStatusMeterGaugeCircularIndicator$$, -.04, -.05)], $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeDefaults$$ && 0 == $DvtDialGaugeDefaults$$.rotation % 90 ? $DvtDialGaugeDefaults$$.rotation : 
    0, $DvtGaugeKeyboardHandler$$.$setFill$(new $dvt$$4$$.$LinearGradientFill$("arrow" == $DvtStatusMeterGaugeIndicator$$ || "star" == $DvtStatusMeterGaugeIndicator$$ || "triangle" == $DvtStatusMeterGaugeIndicator$$ ? $DvtStatusMeterGaugeCircularIndicator$$ - 90 : 270, $DvtDialGaugeIndicator$$, [1, 1], [0, 1])));
    $DvtRatingGaugeRenderer$$ && $DvtGaugeKeyboardHandler$$.$setSolidStroke$($DvtRatingGaugeRenderer$$);
    $DvtGaugeKeyboardHandler$$.$setClassName$($DvtDialGaugeDefaults$$.className);
    $DvtGaugeKeyboardHandler$$.$setStyle$($DvtDialGaugeDefaults$$.style);
    ($DvtStatusMeterGaugeCircularIndicator$$ = $DvtStatusMeterGaugeRenderer$$ ? $DvtDialGaugeDefaults$$.rotation + 90 : $DvtDialGaugeDefaults$$.rotation) && ("arrow" == $DvtStatusMeterGaugeIndicator$$ || "triangle" == $DvtStatusMeterGaugeIndicator$$ || $DvtGaugeKeyboardHandler$$ instanceof $dvt$$4$$.$Path$ && "human" != $DvtStatusMeterGaugeIndicator$$) && ($DvtGaugeKeyboardHandler$$ = $DvtLedGaugeRenderer$$.$_rotate$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtGaugeKeyboardHandler$$, 
    $DvtRatingGaugeDefaults$$));
    $DvtRatingGaugePeer$$.$addChild$($DvtGaugeKeyboardHandler$$);
  };
  $DvtLedGaugeRenderer$$.$_rotate$ = function $$DvtLedGaugeRenderer$$$$_rotate$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    $DvtRatingGaugeEventManager$$ = new $dvt$$4$$.$Container$($DvtRatingGaugeEventManager$$.$getCtx$());
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeEventManager$$);
    $DvtRatingGaugeEventManager$$.$addChild$($DvtRatingGaugeDefaults$$);
    $DvtRatingGaugePeer$$ = $DvtDialGaugeDefaults$$ && 0 == $DvtDialGaugeDefaults$$.rotation % 90 ? $DvtDialGaugeDefaults$$.rotation : 0;
    $DvtDialGaugeDefaults$$ = new $dvt$$4$$.$Matrix$;
    $DvtDialGaugeDefaults$$.rotate(Math.PI * $DvtRatingGaugePeer$$ / 180);
    $DvtRatingGaugeDefaults$$.$setMatrix$($DvtDialGaugeDefaults$$);
    $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getDimensions$();
    $DvtRatingGaugeDefaults$$ = $DvtDialGaugeIndicator$$.x + $DvtDialGaugeIndicator$$.$w$ / 2 - ($DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ / 2);
    $DvtDialGaugeIndicator$$ = $DvtDialGaugeIndicator$$.y + $DvtDialGaugeIndicator$$.$h$ / 2 - ($DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$ / 2);
    $DvtRatingGaugePeer$$ = new $dvt$$4$$.$Matrix$;
    $DvtRatingGaugePeer$$.translate($DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    $DvtRatingGaugeEventManager$$.$setMatrix$($DvtRatingGaugePeer$$);
    return $DvtRatingGaugeEventManager$$;
  };
  $DvtLedGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtLedGaugeRenderer$$$$_renderVisualEffects$$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $dvt$$4$$.$getOptions$(), $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.type;
    "none" != $DvtRatingGaugeDefaults$$.visualEffects && $DvtGaugeDefaults$$.$isSkyrosSkin$($dvt$$4$$) && ("circle" == $DvtDialGaugeIndicator$$ ? $DvtLedGaugeRenderer$$.$_renderOverlayCircle$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) : "diamond" == $DvtDialGaugeIndicator$$ ? $DvtLedGaugeRenderer$$.$_renderOverlayDiamond$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) : "triangle" == $DvtDialGaugeIndicator$$ ? $DvtLedGaugeRenderer$$.$_renderOverlayTriangle$($dvt$$4$$, 
    $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) : "arrow" == $DvtDialGaugeIndicator$$ ? $DvtLedGaugeRenderer$$.$_renderOverlayArrow$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) : $DvtLedGaugeRenderer$$.$_renderOverlayRectangle$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$));
  };
  $DvtLedGaugeRenderer$$.$_renderOverlayRectangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayRectangle$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = .04 * $DvtRatingGaugeDefaults$$.$w$, $DvtDialGaugeDefaults$$ = .04 * $DvtRatingGaugeDefaults$$.$h$;
    $DvtRatingGaugeDefaults$$ = new $dvt$$4$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$.$w$ - 2 * $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$h$ - 2 * $DvtDialGaugeDefaults$$);
    $DvtRatingGaugeEventManager$$ = new $dvt$$4$$.Rect($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$);
    $DvtRatingGaugeEventManager$$.$setMouseEnabled$(!1);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeEventManager$$);
    $DvtRatingGaugePeer$$ = new $dvt$$4$$.$LinearGradientFill$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [.75, .5, .15, 0, .2, .4, .2], [0, .05, .4, .6, .8, .9, 1]);
    $DvtRatingGaugeEventManager$$.$setFill$($DvtRatingGaugePeer$$);
  };
  $DvtLedGaugeRenderer$$.$_renderOverlayDiamond$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayDiamond$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = .05 * $DvtRatingGaugeDefaults$$.$w$, $DvtDialGaugeDefaults$$ = .05 * $DvtRatingGaugeDefaults$$.$h$, $DvtDialGaugeDefaults$$ = new $dvt$$4$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$.$w$ - 2 * $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$h$ - 2 * $DvtDialGaugeDefaults$$);
    $DvtRatingGaugeDefaults$$ = $DvtDialGaugeDefaults$$.x + $DvtDialGaugeDefaults$$.$w$ / 2;
    $DvtDialGaugeIndicator$$ = $DvtDialGaugeDefaults$$.y + $DvtDialGaugeDefaults$$.$h$ / 2;
    $DvtDialGaugeDefaults$$ = Math.min($DvtDialGaugeDefaults$$.$w$, $DvtDialGaugeDefaults$$.$h$) / 2;
    $DvtRatingGaugeEventManager$$ = new $dvt$$4$$.$Polygon$($DvtRatingGaugeEventManager$$.$getCtx$(), [$DvtRatingGaugeDefaults$$ - $DvtDialGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$ - $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$ + $DvtDialGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$ + $DvtDialGaugeDefaults$$]);
    $DvtRatingGaugeEventManager$$.$setMouseEnabled$(!1);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeEventManager$$);
    $DvtRatingGaugePeer$$ = new $dvt$$4$$.$LinearGradientFill$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [.75, .5, .15, 0, .2, .4, .2], [0, .05, .4, .6, .8, .9, 1]);
    $DvtRatingGaugeEventManager$$.$setFill$($DvtRatingGaugePeer$$);
  };
  $DvtLedGaugeRenderer$$.$_renderOverlayTriangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayTriangle$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = .05 * $DvtRatingGaugeDefaults$$.$w$, $DvtDialGaugeDefaults$$ = .05 * $DvtRatingGaugeDefaults$$.$h$, $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$), $DvtDialGaugeIndicator$$ = new $dvt$$4$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$.$w$ - 2 * $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$h$ - 2 * $DvtDialGaugeDefaults$$), 
    $DvtDialGaugeDefaults$$ = $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$, $DvtStatusMeterGaugeCircularIndicator$$ = Math.min($DvtDialGaugeIndicator$$.$w$ / 100, $DvtDialGaugeIndicator$$.$h$ / 100), $DvtDialGaugeDefaults$$ = $dvt$$4$$.$PolygonUtils$.scale($DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$), $DvtDialGaugeDefaults$$ = $dvt$$4$$.$PolygonUtils$.translate($DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 
    2, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2);
    $DvtRatingGaugeDefaults$$ = new $dvt$$4$$.$Polygon$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeDefaults$$);
    $DvtDialGaugeDefaults$$ = ($DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$()) && 0 == $DvtDialGaugeDefaults$$.rotation % 90 ? $DvtDialGaugeDefaults$$.rotation : 0;
    $DvtStatusMeterGaugeIndicator$$ = new $dvt$$4$$.$LinearGradientFill$($DvtStatusMeterGaugeIndicator$$ ? $DvtDialGaugeDefaults$$ - 90 : 360 - $DvtDialGaugeDefaults$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [.3, .55, 0, .25, .1], [0, .05, .4, .9, 1]);
    $DvtRatingGaugeDefaults$$.$setFill$($DvtStatusMeterGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$ = $DvtLedGaugeRenderer$$.$_rotate$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$.$setMouseEnabled$(!1);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeDefaults$$);
  };
  $DvtLedGaugeRenderer$$.$_renderOverlayArrow$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayArrow$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = .05 * $DvtRatingGaugeDefaults$$.$w$, $DvtDialGaugeDefaults$$ = .05 * $DvtRatingGaugeDefaults$$.$h$, $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$), $DvtDialGaugeIndicator$$ = new $dvt$$4$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$.$w$ - 2 * $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$h$ - 2 * $DvtDialGaugeDefaults$$), 
    $DvtDialGaugeDefaults$$ = $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$, $DvtStatusMeterGaugeCircularIndicator$$ = Math.min($DvtDialGaugeIndicator$$.$w$ / 100, $DvtDialGaugeIndicator$$.$h$ / 100), $DvtDialGaugeDefaults$$ = $dvt$$4$$.$PolygonUtils$.scale($DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$), $DvtDialGaugeDefaults$$ = $dvt$$4$$.$PolygonUtils$.translate($DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 
    2, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2);
    $DvtRatingGaugeDefaults$$ = new $dvt$$4$$.$Polygon$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeDefaults$$);
    $DvtDialGaugeDefaults$$ = ($DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$()) && 0 == $DvtDialGaugeDefaults$$.rotation % 90 ? $DvtDialGaugeDefaults$$.rotation : 0;
    $DvtStatusMeterGaugeIndicator$$ = new $dvt$$4$$.$LinearGradientFill$($DvtStatusMeterGaugeIndicator$$ ? $DvtDialGaugeDefaults$$ - 90 : 360 - $DvtDialGaugeDefaults$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [.3, .55, 0, .25, .1], [0, .05, .4, .9, 1]);
    $DvtRatingGaugeDefaults$$.$setFill$($DvtStatusMeterGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$ = $DvtLedGaugeRenderer$$.$_rotate$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$.$setMouseEnabled$(!1);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeDefaults$$);
  };
  $DvtLedGaugeRenderer$$.$_renderOverlayCircle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayCircle$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = .05 * $DvtRatingGaugeDefaults$$.$w$, $DvtDialGaugeDefaults$$ = .05 * $DvtRatingGaugeDefaults$$.$h$;
    $DvtRatingGaugeDefaults$$ = new $dvt$$4$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$.$w$ - 2 * $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$h$ - 2 * $DvtDialGaugeDefaults$$);
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2, $DvtDialGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2, $DvtStatusMeterGaugeIndicator$$ = Math.min($DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$) / 2, $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$4$$.$Circle$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$);
    $DvtStatusMeterGaugeCircularIndicator$$.$setMouseEnabled$(!1);
    $DvtRatingGaugePeer$$.$addChild$($DvtStatusMeterGaugeCircularIndicator$$);
    var $DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$RadialGradientFill$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, .25, .5], [.15, .7, .95], $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$ - .6 * $DvtStatusMeterGaugeIndicator$$, 1.5 * $DvtStatusMeterGaugeIndicator$$, [$DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$]);
    $DvtStatusMeterGaugeCircularIndicator$$.$setFill$($DvtRatingGaugeRenderer$$);
    $DvtStatusMeterGaugeCircularIndicator$$ = .6 * $DvtStatusMeterGaugeIndicator$$;
    $DvtStatusMeterGaugeIndicator$$ *= .4;
    $DvtDialGaugeDefaults$$ -= .3 * $DvtStatusMeterGaugeIndicator$$;
    $DvtRatingGaugeEventManager$$ = new $dvt$$4$$.$Oval$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$ - $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$);
    $DvtRatingGaugeEventManager$$.$setMouseEnabled$(!1);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeEventManager$$);
    $DvtRatingGaugePeer$$ = new $dvt$$4$$.$RadialGradientFill$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, .2, .5], [.6, .8, 1], $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, [$DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$]);
    $DvtRatingGaugeEventManager$$.$setFill$($DvtRatingGaugePeer$$);
  };
  $DvtLedGaugeRenderer$$.$_getLabelBounds$ = function $$DvtLedGaugeRenderer$$$$_getLabelBounds$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.type, $DvtRatingGaugeDefaults$$ = 0 == $DvtRatingGaugeDefaults$$.rotation % 90 ? $DvtRatingGaugeDefaults$$.rotation : 0, $DvtDialGaugeDefaults$$ = Math.min($DvtRatingGaugePeer$$.$w$, $DvtRatingGaugePeer$$.$h$), $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ / 2 - $DvtDialGaugeDefaults$$ / 2, $DvtStatusMeterGaugeCircularIndicator$$ = 
    $DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$ / 2 - $DvtDialGaugeDefaults$$ / 2, $DvtRatingGaugeRenderer$$ = $DvtDialGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ = $DvtDialGaugeDefaults$$;
    "triangle" == $DvtDialGaugeIndicator$$ ? 0 == $DvtRatingGaugeDefaults$$ ? ($DvtStatusMeterGaugeIndicator$$ += .2 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$ += .25 * $DvtDialGaugeDefaults$$, $DvtRatingGaugeRenderer$$ -= .4 * $DvtDialGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ -= .3 * $DvtDialGaugeDefaults$$) : 90 == $DvtRatingGaugeDefaults$$ ? ($DvtStatusMeterGaugeIndicator$$ += .05 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$ += .2 * $DvtDialGaugeDefaults$$, 
    $DvtRatingGaugeRenderer$$ -= .3 * $DvtDialGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ -= .4 * $DvtDialGaugeDefaults$$) : 180 == $DvtRatingGaugeDefaults$$ ? ($DvtStatusMeterGaugeIndicator$$ += .2 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$ += .05 * $DvtDialGaugeDefaults$$, $DvtRatingGaugeRenderer$$ -= .4 * $DvtDialGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ -= .3 * $DvtDialGaugeDefaults$$) : 270 == $DvtRatingGaugeDefaults$$ && ($DvtStatusMeterGaugeIndicator$$ += .25 * $DvtDialGaugeDefaults$$, 
    $DvtStatusMeterGaugeCircularIndicator$$ += .2 * $DvtDialGaugeDefaults$$, $DvtRatingGaugeRenderer$$ -= .3 * $DvtDialGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ -= .4 * $DvtDialGaugeDefaults$$) : "arrow" == $DvtDialGaugeIndicator$$ ? 0 == $DvtRatingGaugeDefaults$$ ? ($DvtStatusMeterGaugeIndicator$$ += .2 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$ += .2 * $DvtDialGaugeDefaults$$, $DvtRatingGaugeRenderer$$ -= .4 * $DvtDialGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ -= .4 * 
    $DvtDialGaugeDefaults$$) : 90 == $DvtRatingGaugeDefaults$$ ? ($DvtStatusMeterGaugeIndicator$$ += .05 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$ += .2 * $DvtDialGaugeDefaults$$, $DvtRatingGaugeRenderer$$ -= .28 * $DvtDialGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ -= .4 * $DvtDialGaugeDefaults$$) : 180 == $DvtRatingGaugeDefaults$$ ? ($DvtStatusMeterGaugeIndicator$$ += .2 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$ += .2 * $DvtDialGaugeDefaults$$, 
    $DvtRatingGaugeRenderer$$ -= .4 * $DvtDialGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ -= .4 * $DvtDialGaugeDefaults$$) : 270 == $DvtRatingGaugeDefaults$$ && ($DvtStatusMeterGaugeIndicator$$ += .23 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$ += .2 * $DvtDialGaugeDefaults$$, $DvtRatingGaugeRenderer$$ -= .28 * $DvtDialGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ -= .4 * $DvtDialGaugeDefaults$$) : "star" == $DvtDialGaugeIndicator$$ ? ($DvtStatusMeterGaugeIndicator$$ += .25 * 
    $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$ += .25 * $DvtDialGaugeDefaults$$, $DvtRatingGaugeRenderer$$ -= .5 * $DvtDialGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ -= .4 * $DvtDialGaugeDefaults$$) : "diamond" == $DvtDialGaugeIndicator$$ ? ($DvtStatusMeterGaugeIndicator$$ += .15 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$ += .15 * $DvtDialGaugeDefaults$$, $DvtRatingGaugeRenderer$$ -= .3 * $DvtDialGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ -= .3 * $DvtDialGaugeDefaults$$) : 
    "rectangle" == $DvtDialGaugeIndicator$$ ? ($DvtStatusMeterGaugeIndicator$$ += .1 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$ += .1 * $DvtDialGaugeDefaults$$, $DvtRatingGaugeRenderer$$ -= .2 * $DvtDialGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ -= .2 * $DvtDialGaugeDefaults$$) : ($DvtStatusMeterGaugeIndicator$$ += .15 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$ += .15 * $DvtDialGaugeDefaults$$, $DvtRatingGaugeRenderer$$ -= .3 * $DvtDialGaugeDefaults$$, 
    $DvtGaugeKeyboardHandler$$ -= .3 * $DvtDialGaugeDefaults$$);
    return new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeRenderer$$, $DvtGaugeKeyboardHandler$$);
  };
  $dvt$$4$$.$StatusMeterGauge$ = function $$dvt$$4$$$$StatusMeterGauge$$() {
  };
  $dvt$$4$$.$Obj$.$createSubclass$($dvt$$4$$.$StatusMeterGauge$, $DvtGauge$$);
  $dvt$$4$$.$StatusMeterGauge$.newInstance = function $$dvt$$4$$$$StatusMeterGauge$$newInstance$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = new $dvt$$4$$.$StatusMeterGauge$;
    $DvtDialGaugeIndicator$$.Init($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    return $DvtDialGaugeIndicator$$;
  };
  $dvt$$4$$.$StatusMeterGauge$.prototype.Init = function $$dvt$$4$$$$StatusMeterGauge$$$Init$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $dvt$$4$$.$StatusMeterGauge$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    this.$Defaults$ = new $DvtStatusMeterGaugeDefaults$$;
    this.$__axisInfo$ = null;
  };
  $dvt$$4$$.$StatusMeterGauge$.prototype.$SetOptions$ = function $$dvt$$4$$$$StatusMeterGauge$$$$SetOptions$$($DvtRatingGaugeEventManager$$) {
    $dvt$$4$$.$StatusMeterGauge$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($DvtRatingGaugeEventManager$$));
  };
  $dvt$$4$$.$StatusMeterGauge$.prototype.$Render$ = function $$dvt$$4$$$$StatusMeterGauge$$$$Render$$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    $DvtStatusMeterGaugeRenderer$$.$render$(this, $dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$);
  };
  $dvt$$4$$.$StatusMeterGauge$.prototype.$CreateAnimationOnDisplay$ = function $$dvt$$4$$$$StatusMeterGauge$$$$CreateAnimationOnDisplay$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $DvtRatingGaugePeer$$ = [];
    for (var $DvtDialGaugeIndicator$$ = 0;$DvtDialGaugeIndicator$$ < $DvtRatingGaugeEventManager$$.length;$DvtDialGaugeIndicator$$++) {
      var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$[$DvtDialGaugeIndicator$$], $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeDefaults$$.$getAnimationParams$();
      "horizontal" == this.$Options$.orientation ? $DvtDialGaugeDefaults$$.$setAnimationParams$([$DvtStatusMeterGaugeIndicator$$[0], $DvtStatusMeterGaugeIndicator$$[0], $DvtStatusMeterGaugeIndicator$$[2], $DvtStatusMeterGaugeIndicator$$[3]]) : "vertical" == this.$Options$.orientation ? $DvtDialGaugeDefaults$$.$setAnimationParams$([$DvtStatusMeterGaugeIndicator$$[0], $DvtStatusMeterGaugeIndicator$$[1], $DvtStatusMeterGaugeIndicator$$[3], $DvtStatusMeterGaugeIndicator$$[3]]) : "circular" == this.$Options$.orientation && 
      $DvtDialGaugeDefaults$$.$setAnimationParams$([$DvtStatusMeterGaugeIndicator$$[0], $DvtStatusMeterGaugeIndicator$$[1], 0, $DvtStatusMeterGaugeIndicator$$[3], $DvtStatusMeterGaugeIndicator$$[4]]);
      var $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$4$$.$CustomAnimation$(this.$getCtx$(), $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$);
      $DvtStatusMeterGaugeCircularIndicator$$.$_animator$.$addProp$($dvt$$4$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$.$getAnimationParams$, $DvtDialGaugeDefaults$$.$setAnimationParams$, $DvtStatusMeterGaugeIndicator$$);
      $DvtStatusMeterGaugeCircularIndicator$$.$_animator$.$setEasing$(function($DvtRatingGaugeEventManager$$) {
        return $dvt$$4$$.$Easing$.$backOut$($DvtRatingGaugeEventManager$$, .7);
      });
      $DvtRatingGaugePeer$$.push($DvtStatusMeterGaugeCircularIndicator$$);
    }
    return new $dvt$$4$$.$ParallelPlayable$(this.$getCtx$(), $DvtRatingGaugePeer$$);
  };
  $dvt$$4$$.$StatusMeterGauge$.prototype.$GetValueAt$ = function $$dvt$$4$$$$StatusMeterGauge$$$$GetValueAt$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = this.$Options$, $DvtDialGaugeIndicator$$ = $dvt$$4$$.$Agent$.$isRightToLeft$(this.$getCtx$());
    if ("horizontal" == $DvtRatingGaugeDefaults$$.orientation) {
      return this.$__axisInfo$.$getBoundedValueAt$($DvtRatingGaugeEventManager$$);
    }
    if ("vertical" == $DvtRatingGaugeDefaults$$.orientation) {
      return this.$__axisInfo$.$getBoundedValueAt$($DvtRatingGaugePeer$$);
    }
    if ("circular" == $DvtRatingGaugeDefaults$$.orientation) {
      var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.angleExtent, $DvtStatusMeterGaugeIndicator$$ = Math.atan2($DvtRatingGaugePeer$$ - this.$cy$, $DvtRatingGaugeEventManager$$ - this.$cx$), $DvtDialGaugeIndicator$$ = $DvtDialGaugeIndicator$$ ? 180 - ($dvt$$4$$.Math.$radsToDegrees$($DvtStatusMeterGaugeIndicator$$) - $DvtRatingGaugeDefaults$$.startAngle) : $dvt$$4$$.Math.$radsToDegrees$($DvtStatusMeterGaugeIndicator$$) - (360 - $DvtRatingGaugeDefaults$$.startAngle), $DvtDialGaugeIndicator$$ = 
      ($DvtDialGaugeIndicator$$ + 720) % 360, $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.min, $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.max, $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeIndicator$$ / $DvtDialGaugeDefaults$$ * ($DvtRatingGaugeDefaults$$ - $DvtStatusMeterGaugeIndicator$$) + $DvtStatusMeterGaugeIndicator$$;
      $DvtDialGaugeIndicator$$ > $DvtDialGaugeDefaults$$ && ($DvtStatusMeterGaugeIndicator$$ = .5 < ($DvtDialGaugeIndicator$$ - $DvtDialGaugeDefaults$$) / (360 - $DvtDialGaugeDefaults$$) ? 0 : $DvtRatingGaugeDefaults$$);
      return $DvtStatusMeterGaugeIndicator$$;
    }
  };
  $dvt$$4$$.$Obj$.$createSubclass$($DvtStatusMeterGaugeDefaults$$, $DvtGaugeDefaults$$);
  $DvtStatusMeterGaugeDefaults$$.$SKIN_ALTA$ = {color:"#393737", metricLabel:{style:new $dvt$$4$$.$CSSStyle$($dvt$$4$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}, plotArea:{color:"#E4E8EA"}};
  $DvtStatusMeterGaugeDefaults$$.$VERSION_1$ = {angleExtent:360, borderRadius:"auto", color:"#313842", indicatorSize:1, innerRadius:.7, metricLabel:{style:new $dvt$$4$$.$CSSStyle$($dvt$$4$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$), position:"auto"}, orientation:"horizontal", plotArea:{color:"#AAAAAA", rendered:"auto", borderRadius:"auto"}, startAngle:90, thresholdDisplay:"onIndicator"};
  var $DvtStatusMeterGaugeRenderer$$ = {};
  $dvt$$4$$.$Obj$.$createSubclass$($DvtStatusMeterGaugeRenderer$$, $dvt$$4$$.$Obj$);
  $DvtStatusMeterGaugeRenderer$$.$render$ = function $$DvtStatusMeterGaugeRenderer$$$$render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    if ($DvtGaugeDataUtils$$.$hasData$($DvtRatingGaugeEventManager$$)) {
      var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeDefaults$$.__layout.outerGap;
      $DvtRatingGaugeDefaults$$ = new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeDefaults$$ - 2 * $DvtStatusMeterGaugeIndicator$$, $DvtDialGaugeIndicator$$ - 2 * $DvtStatusMeterGaugeIndicator$$);
      "horizontal" == $DvtDialGaugeDefaults$$.orientation || "vertical" == $DvtDialGaugeDefaults$$.orientation ? ($DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($DvtDialGaugeDefaults$$) && $DvtStatusMeterGaugeRenderer$$.$_renderLabelOutsidePlotArea$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$), $DvtStatusMeterGaugeRenderer$$.$_renderShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$)) : "circular" == $DvtDialGaugeDefaults$$.orientation && 
      $DvtStatusMeterGaugeRenderer$$.$_renderCircularGauge$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    } else {
      $DvtGaugeRenderer$$.$renderEmptyText$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, new $dvt$$4$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$));
    }
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderCircularGauge$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderCircularGauge$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.clone(), $DvtStatusMeterGaugeIndicator$$ = $dvt$$4$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtStatusMeterGaugeCircularIndicator$$ = 0, $DvtRatingGaugeRenderer$$ = null, $DvtGaugeKeyboardHandler$$ = $DvtDialGaugeIndicator$$.value, $DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeIndicator$$.innerRadius, $DvtLedGaugeDefaults$$ = $DvtDialGaugeIndicator$$.thresholds, 
    $DvtGaugeDataUtils$$, $DvtDialGaugeRenderer$$ = null, $DvtGaugeDefaults$$ = $dvt$$4$$.Math.$TWO_PI$ - $dvt$$4$$.Math.$degreesToRads$($DvtDialGaugeIndicator$$.startAngle), $DvtGaugeEventManager$$ = $dvt$$4$$.Math.$degreesToRads$($DvtDialGaugeIndicator$$.angleExtent), $DvtGaugeAutomation$$ = ($DvtGaugeDefaults$$ + $DvtGaugeEventManager$$) % (2 * Math.PI);
    $DvtRatingGaugeEventManager$$.$cx$ = $DvtRatingGaugeDefaults$$.$w$ / 2;
    $DvtRatingGaugeEventManager$$.$cy$ = $DvtRatingGaugeDefaults$$.$h$ / 2;
    $DvtGaugeEventManager$$ != 2 * Math.PI && ($DvtRatingGaugeRenderer$$ = $DvtStatusMeterGaugeRenderer$$.$_adjustCenterAndBounds$($DvtRatingGaugeEventManager$$, $DvtStatusMeterGaugeDefaults$$, $DvtGaugeDefaults$$, $DvtGaugeEventManager$$, $DvtGaugeAutomation$$, $DvtRatingGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$), $DvtDialGaugeRenderer$$ = $DvtRatingGaugeEventManager$$.$maxInnerDiameter$);
    $DvtGaugeDataUtils$$ = $DvtGaugeDataUtils$$ ? $DvtGaugeDataUtils$$ : Math.min($DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$);
    var $DvtStatusMeterGaugeIndicator$$ = .5 * $DvtGaugeDataUtils$$ * $DvtStatusMeterGaugeDefaults$$, $DvtGaugeAutomation$$ = .5 * $DvtGaugeDataUtils$$, $DvtGauge$$ = $DvtDialGaugeIndicator$$.indicatorSize;
    if ($DvtGauge$$ && 1 < $DvtGauge$$) {
      var $DvtLedGaugeRenderer$$ = (1 - 1 / $DvtGauge$$) / 2 * ($DvtGaugeAutomation$$ - $DvtStatusMeterGaugeIndicator$$), $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeIndicator$$ + $DvtLedGaugeRenderer$$, $DvtGaugeAutomation$$ = $DvtGaugeAutomation$$ - $DvtLedGaugeRenderer$$
    }
    $DvtLedGaugeRenderer$$ = "middle";
    $DvtRatingGaugeRenderer$$ || ($DvtDialGaugeRenderer$$ = Math.min($DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$) * $DvtStatusMeterGaugeDefaults$$, $DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2 - 3 / 7 * $DvtDialGaugeRenderer$$, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2 - 2.5 / 7 * $DvtDialGaugeRenderer$$, 6 / 7 * $DvtDialGaugeRenderer$$, 5 / 7 * $DvtDialGaugeRenderer$$));
    var $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = !1;
    if ($DvtGaugeStyleUtils$$.$hasTitle$($DvtDialGaugeIndicator$$)) {
      var $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = "middle", $thresholdColor_titleSpace$$3$$ = new $dvt$$4$$.$Rectangle$($DvtRatingGaugeRenderer$$.x, $DvtRatingGaugeRenderer$$.y, $DvtRatingGaugeRenderer$$.$w$, $DvtRatingGaugeRenderer$$.$h$);
      "off" != $DvtDialGaugeIndicator$$.metricLabel.rendered && ($thresholdColor_titleSpace$$3$$.y += .6 * $thresholdColor_titleSpace$$3$$.$h$, $thresholdColor_titleSpace$$3$$.$h$ *= .4, $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = "top");
      ($bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = $DvtGaugeRenderer$$.$renderTitle$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $thresholdColor_titleSpace$$3$$, null, $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$)) && "off" != $DvtDialGaugeIndicator$$.metricLabel.rendered && ($DvtRatingGaugeRenderer$$.$h$ *= .55, $DvtLedGaugeRenderer$$ = "bottom");
    }
    $DvtGaugeRenderer$$.$renderLabel$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeRenderer$$, null, "center", $DvtLedGaugeRenderer$$, !0);
    $DvtLedGaugeRenderer$$ = $DvtGaugeDefaults$$;
    $DvtStatusMeterGaugeCircularIndicator$$ *= $DvtGaugeEventManager$$;
    $DvtRatingGaugeRenderer$$ = $DvtGaugeStyleUtils$$.$getPlotAreaBorderColor$($DvtRatingGaugeEventManager$$);
    if ($DvtLedGaugeDefaults$$ && "off" != $DvtDialGaugeIndicator$$.plotArea.rendered && "all" == $DvtDialGaugeIndicator$$.thresholdDisplay) {
      for ($bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = 0;$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ < $DvtLedGaugeDefaults$$.length;$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$++) {
        var $thresholdColor_titleSpace$$3$$ = $DvtGaugeStyleUtils$$.$getThresholdColor$($DvtRatingGaugeEventManager$$, $DvtLedGaugeDefaults$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$], $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtLedGaugeDefaults$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$].max < $DvtDialGaugeIndicator$$.max ? $DvtLedGaugeDefaults$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$].max : 
        $DvtDialGaugeIndicator$$.max, $min$$14_thresholdborderColor$$ = 0 == $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ ? $DvtDialGaugeIndicator$$.min : $DvtLedGaugeDefaults$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ - 1].max, $DvtLedGaugeRenderer$$ = $DvtGaugeDefaults$$ + $DvtGaugeEventManager$$ * $DvtGaugeRenderer$$.$getFillPercentage$($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$.min, $min$$14_thresholdborderColor$$), $DvtStatusMeterGaugeCircularIndicator$$ = 
        $DvtGaugeRenderer$$.$getFillPercentage$($DvtDialGaugeIndicator$$, $min$$14_thresholdborderColor$$, $DvtStatusMeterGaugeCircularIndicator$$), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtStatusMeterGaugeCircularIndicator$$ * $DvtGaugeEventManager$$, $min$$14_thresholdborderColor$$ = $DvtLedGaugeDefaults$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$].borderColor;
        $DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtLedGaugeRenderer$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$, $DvtGaugeAutomation$$, $thresholdColor_titleSpace$$3$$, !0, $min$$14_thresholdborderColor$$ ? $min$$14_thresholdborderColor$$ : $DvtRatingGaugeRenderer$$);
      }
    } else {
      "off" != $DvtDialGaugeIndicator$$.plotArea.rendered && "all" != $DvtDialGaugeIndicator$$.thresholdDisplay && ($DvtLedGaugeDefaults$$ = $DvtGaugeStyleUtils$$.$getPlotAreaColor$($DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtGaugeDefaults$$, $DvtGaugeEventManager$$, $DvtStatusMeterGaugeIndicator$$, $DvtGaugeAutomation$$, $DvtLedGaugeDefaults$$, !0, $DvtRatingGaugeRenderer$$))
      ;
    }
    $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeDataUtils$$ * $DvtStatusMeterGaugeDefaults$$ * .5;
    $DvtGaugeAutomation$$ = .5 * $DvtGaugeDataUtils$$;
    $DvtGauge$$ && 1 > $DvtGauge$$ && ($DvtStatusMeterGaugeDefaults$$ = (1 - $DvtGauge$$) / 2 * ($DvtGaugeAutomation$$ - $DvtStatusMeterGaugeIndicator$$), $DvtStatusMeterGaugeIndicator$$ += $DvtStatusMeterGaugeDefaults$$, $DvtGaugeAutomation$$ -= $DvtStatusMeterGaugeDefaults$$);
    $DvtStatusMeterGaugeCircularIndicator$$ = $DvtGaugeRenderer$$.$getFillPercentage$($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$.min, $DvtGaugeKeyboardHandler$$);
    $DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$ * $DvtGaugeEventManager$$, $DvtStatusMeterGaugeIndicator$$, $DvtGaugeAutomation$$, $DvtGaugeStyleUtils$$.$getColor$($DvtRatingGaugeEventManager$$), !1);
    if ($DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeIndicator$$.referenceLines) {
      for ($DvtGaugeDataUtils$$ = 0;$DvtGaugeDataUtils$$ < $DvtStatusMeterGaugeDefaults$$.length;$DvtGaugeDataUtils$$++) {
        $DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$[$DvtGaugeDataUtils$$].color ? $DvtStatusMeterGaugeDefaults$$[$DvtGaugeDataUtils$$].color : "black", $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeDefaults$$[$DvtGaugeDataUtils$$].lineWidth ? $DvtStatusMeterGaugeDefaults$$[$DvtGaugeDataUtils$$].lineWidth : 2, $DvtGaugeAutomation$$ = $DvtStatusMeterGaugeDefaults$$[$DvtGaugeDataUtils$$].lineStyle, $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeDefaults$$[$DvtGaugeDataUtils$$].value, 
        $DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtGaugeDefaults$$ + $DvtGaugeRenderer$$.$getFillPercentage$($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$.min, $DvtGaugeKeyboardHandler$$) * $DvtGaugeEventManager$$, $DvtLedGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtGaugeAutomation$$);
      }
    }
    $DvtDialGaugeIndicator$$.center.renderer && $DvtStatusMeterGaugeRenderer$$.$_renderCenterContent$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeDefaults$$, $DvtDialGaugeRenderer$$);
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderShape$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeDefaults$$ = $dvt$$4$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtStatusMeterGaugeCircularIndicator$$ = "vertical" == $DvtDialGaugeIndicator$$.orientation, $DvtRatingGaugeRenderer$$ = {layout:{}};
    $DvtRatingGaugeRenderer$$.layout.gapRatio = 0;
    $DvtRatingGaugeRenderer$$.timeAxisType = "disabled";
    $DvtRatingGaugeRenderer$$.position = $DvtStatusMeterGaugeCircularIndicator$$ ? "left" : "bottom";
    $DvtRatingGaugeRenderer$$.min = $DvtDialGaugeIndicator$$.min;
    $DvtRatingGaugeRenderer$$.max = $DvtDialGaugeIndicator$$.max;
    $DvtRatingGaugeRenderer$$.dataMin = $DvtDialGaugeIndicator$$.min;
    $DvtRatingGaugeRenderer$$.dataMax = $DvtDialGaugeIndicator$$.max;
    $DvtRatingGaugeRenderer$$.tickLabel = {rendered:"off"};
    $DvtRatingGaugeRenderer$$ = $dvt$$4$$.$AxisInfo$.newInstance($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtRatingGaugeRenderer$$, $DvtRatingGaugeDefaults$$);
    $DvtRatingGaugeEventManager$$.$__axisInfo$ = $DvtRatingGaugeRenderer$$;
    var $DvtGaugeKeyboardHandler$$ = 0;
    0 >= $DvtDialGaugeIndicator$$.max ? $DvtGaugeKeyboardHandler$$ = $DvtDialGaugeIndicator$$.max : 0 <= $DvtDialGaugeIndicator$$.min && ($DvtGaugeKeyboardHandler$$ = $DvtDialGaugeIndicator$$.min);
    var $DvtStatusMeterGaugeDefaults$$ = $DvtRatingGaugeRenderer$$.$getCoordAt$($DvtGaugeKeyboardHandler$$);
    "off" == $DvtDialGaugeIndicator$$.plotArea.rendered || "auto" == $DvtDialGaugeIndicator$$.plotArea.rendered && "onIndicator" == $DvtDialGaugeIndicator$$.thresholdDisplay || ($DvtStatusMeterGaugeDefaults$$ = $DvtRatingGaugeRenderer$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.min));
    var $DvtLedGaugeDefaults$$ = $DvtRatingGaugeRenderer$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.value), $DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$ ? Math.max($DvtRatingGaugeDefaults$$.y, Math.min($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$, $DvtLedGaugeDefaults$$)) : Math.max($DvtRatingGaugeDefaults$$.x, Math.min($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$, $DvtLedGaugeDefaults$$)), $DvtGaugeDataUtils$$ = $DvtDialGaugeIndicator$$.indicatorSize, 
    $DvtDialGaugeRenderer$$, $DvtGaugeEventManager$$, $DvtGaugeRenderer$$, $DvtGaugeAutomation$$, $DvtGauge$$, $DvtLedGaugeRenderer$$, $drawnPlotSize_plotY2$$ = 0, $drawnPlotSize_plotY2$$ = 1 > $DvtGaugeDataUtils$$ ? 1 : $DvtGaugeDataUtils$$;
    $DvtGaugeRenderer$$ = 1 < $DvtGaugeDataUtils$$ ? 1 : $DvtGaugeDataUtils$$;
    $DvtStatusMeterGaugeCircularIndicator$$ ? ($DvtGaugeKeyboardHandler$$ = $DvtRatingGaugeDefaults$$.x + (1 - $DvtGaugeRenderer$$) / 2 * $DvtRatingGaugeDefaults$$.$w$ + .5, $DvtDialGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ * (1 + $DvtGaugeRenderer$$) / 2 - .5, $DvtGaugeRenderer$$ = $DvtStatusMeterGaugeDefaults$$ - .5, $DvtGaugeEventManager$$ = $DvtLedGaugeDefaults$$ + .5, $DvtGaugeAutomation$$ = $DvtRatingGaugeDefaults$$.x + (1 - 1 / $drawnPlotSize_plotY2$$) / 
    2 * $DvtRatingGaugeDefaults$$.$w$, $DvtGauge$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ * (1 + 1 / $drawnPlotSize_plotY2$$) / 2, $DvtLedGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.y, $drawnPlotSize_plotY2$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$) : ($DvtGaugeKeyboardHandler$$ = $DvtDialGaugeDefaults$$ ? $DvtStatusMeterGaugeDefaults$$ - .5 : $DvtStatusMeterGaugeDefaults$$ + .5, $DvtDialGaugeRenderer$$ = $DvtDialGaugeDefaults$$ ? $DvtLedGaugeDefaults$$ + 
    .5 : $DvtLedGaugeDefaults$$ - .5, $DvtGaugeEventManager$$ = $DvtRatingGaugeDefaults$$.y + (1 - $DvtGaugeRenderer$$) / 2 * $DvtRatingGaugeDefaults$$.$h$ + .5, $DvtGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ * (1 + $DvtGaugeRenderer$$) / 2 - .5, $DvtGaugeAutomation$$ = $DvtRatingGaugeDefaults$$.x, $DvtGauge$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$, $DvtLedGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.y + (1 - 1 / $drawnPlotSize_plotY2$$) / 
    2 * $DvtRatingGaugeDefaults$$.$h$, $drawnPlotSize_plotY2$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ * (1 + 1 / $drawnPlotSize_plotY2$$) / 2);
    $DvtGaugeDataUtils$$ = !0;
    $DvtLedGaugeDefaults$$ == $DvtStatusMeterGaugeDefaults$$ && ($DvtStatusMeterGaugeCircularIndicator$$ ? $DvtGaugeEventManager$$ = $DvtGaugeRenderer$$ : $DvtGaugeKeyboardHandler$$ = $DvtDialGaugeRenderer$$, $DvtGaugeDataUtils$$ = !1);
    var $borderColor$$24_refColor_shadow$$2_stroke$$56$$ = $DvtGaugeStyleUtils$$.$getBorderColor$($DvtRatingGaugeEventManager$$), $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$14$$ = $DvtGaugeStyleUtils$$.$getPlotAreaBorderColor$($DvtRatingGaugeEventManager$$), $thresholds$$4_value$$176$$ = $DvtDialGaugeIndicator$$.thresholds, $DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$ ? 0 : 270;
    if ($thresholds$$4_value$$176$$ && "off" != $DvtDialGaugeIndicator$$.plotArea.rendered && "all" == $DvtDialGaugeIndicator$$.thresholdDisplay) {
      for ($DvtStatusMeterGaugeDefaults$$ = $thresholds$$4_value$$176$$.length - 1;0 <= $DvtStatusMeterGaugeDefaults$$;$DvtStatusMeterGaugeDefaults$$--) {
        var $currentThresholdIndex$$1$$ = $DvtStatusMeterGaugeDefaults$$, $plotArea$$5_referenceLineSize$$ = $DvtStatusMeterGaugeRenderer$$.$_createShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeAutomation$$, $DvtGauge$$, $DvtLedGaugeRenderer$$, $drawnPlotSize_plotY2$$), $cp$$6_thresholdBorderColor$$ = new $dvt$$4$$.$ClipPath$("pacp" + $DvtRatingGaugeEventManager$$.getId());
        if ($DvtStatusMeterGaugeDefaults$$ == $thresholds$$4_value$$176$$.length - 1) {
          !$DvtStatusMeterGaugeCircularIndicator$$ && $DvtDialGaugeDefaults$$ ? $cp$$6_thresholdBorderColor$$.$addRect$($DvtRatingGaugeRenderer$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.max) + 1, 0, $DvtRatingGaugeDefaults$$.$w$ + 2, $DvtRatingGaugeDefaults$$.$h$ + 2, 0, 0) : $cp$$6_thresholdBorderColor$$.$addRect$(0, 0, $DvtRatingGaugeDefaults$$.$w$ + 2, $DvtRatingGaugeDefaults$$.$h$ + 2, 0, 0);
        } else {
          if ($DvtStatusMeterGaugeCircularIndicator$$) {
            $cp$$6_thresholdBorderColor$$.$addRect$(0, $DvtRatingGaugeRenderer$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.max), $DvtRatingGaugeDefaults$$.$w$ + 2, 1 * ($DvtDialGaugeIndicator$$.max - $thresholds$$4_value$$176$$[$thresholds$$4_value$$176$$.length - 2 - $currentThresholdIndex$$1$$].max) / Math.abs($DvtDialGaugeIndicator$$.min - $DvtDialGaugeIndicator$$.max) * $DvtRatingGaugeDefaults$$.$h$, 0, 0);
          } else {
            if ($DvtDialGaugeDefaults$$) {
              var $thresholdMax$$ = null == $thresholds$$4_value$$176$$[$thresholds$$4_value$$176$$.length - 2 - $currentThresholdIndex$$1$$].max ? 100 : $thresholds$$4_value$$176$$[$thresholds$$4_value$$176$$.length - 2 - $currentThresholdIndex$$1$$].max;
              $cp$$6_thresholdBorderColor$$.$addRect$($DvtRatingGaugeRenderer$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.max), 0, 1 * ($DvtDialGaugeIndicator$$.max - $thresholdMax$$) / Math.abs($DvtDialGaugeIndicator$$.min - $DvtDialGaugeIndicator$$.max) * $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$ + 2, 0, 0);
            } else {
              $cp$$6_thresholdBorderColor$$.$addRect$(0, 0, 1 * ($thresholds$$4_value$$176$$[$currentThresholdIndex$$1$$].max - $DvtDialGaugeIndicator$$.min) / Math.abs($DvtDialGaugeIndicator$$.min - $DvtDialGaugeIndicator$$.max) * $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$ + 2, 0, 0);
            }
          }
        }
        $plotArea$$5_referenceLineSize$$.$setClipPath$($cp$$6_thresholdBorderColor$$);
        if ($DvtDialGaugeDefaults$$ || $DvtStatusMeterGaugeCircularIndicator$$) {
          $currentThresholdIndex$$1$$ = $thresholds$$4_value$$176$$.length - 1 - $DvtStatusMeterGaugeDefaults$$;
        }
        $plotArea$$5_referenceLineSize$$.$setSolidFill$($DvtGaugeStyleUtils$$.$getThresholdColor$($DvtRatingGaugeEventManager$$, $thresholds$$4_value$$176$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$));
        $cp$$6_thresholdBorderColor$$ = $thresholds$$4_value$$176$$[$currentThresholdIndex$$1$$].borderColor;
        $plotArea$$5_referenceLineSize$$.$setSolidStroke$($cp$$6_thresholdBorderColor$$ ? $cp$$6_thresholdBorderColor$$ : $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$14$$);
        $DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $plotArea$$5_referenceLineSize$$, $DvtGaugeStyleUtils$$.$getThresholdColor$($DvtRatingGaugeEventManager$$, $thresholds$$4_value$$176$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$), $DvtLedGaugeDefaults$$);
      }
    } else {
      "off" == $DvtDialGaugeIndicator$$.plotArea.rendered || "auto" == $DvtDialGaugeIndicator$$.plotArea.rendered && "onIndicator" == $DvtDialGaugeIndicator$$.thresholdDisplay || "all" == $DvtDialGaugeIndicator$$.thresholdDisplay || ($plotArea$$5_referenceLineSize$$ = $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtStatusMeterGaugeRenderer$$.$_createShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeAutomation$$, $DvtGauge$$, $DvtRatingGaugeRenderer$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.max), 
      $DvtRatingGaugeRenderer$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.min)) : $DvtStatusMeterGaugeRenderer$$.$_createShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtRatingGaugeRenderer$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.min), $DvtRatingGaugeRenderer$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.max), $DvtLedGaugeRenderer$$, $drawnPlotSize_plotY2$$), $DvtStatusMeterGaugeDefaults$$ = $DvtGaugeStyleUtils$$.$getPlotAreaColor$($DvtRatingGaugeEventManager$$), 
      $plotArea$$5_referenceLineSize$$.$setSolidFill$($DvtStatusMeterGaugeDefaults$$), $plotArea$$5_referenceLineSize$$.$setSolidStroke$($arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$14$$), $DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $plotArea$$5_referenceLineSize$$, $DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$));
    }
    $DvtStatusMeterGaugeDefaults$$ = new $DvtStatusMeterGaugeIndicator$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeKeyboardHandler$$, $DvtDialGaugeRenderer$$, $DvtGaugeEventManager$$, $DvtGaugeRenderer$$);
    $DvtRatingGaugeEventManager$$.$__shapes$.push($DvtStatusMeterGaugeDefaults$$);
    $DvtDialGaugeDefaults$$ = $DvtGaugeStyleUtils$$.$getColor$($DvtRatingGaugeEventManager$$);
    $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$) || "none" == $DvtDialGaugeIndicator$$.visualEffects ? $DvtStatusMeterGaugeDefaults$$.$setSolidFill$($DvtDialGaugeDefaults$$) : ($arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$14$$ = [$dvt$$4$$.$ColorUtils$.$adjustHSL$($DvtDialGaugeDefaults$$, -.09, .04), $dvt$$4$$.$ColorUtils$.$adjustHSL$($DvtDialGaugeDefaults$$, -.04, -.05)], $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$14$$ = new $dvt$$4$$.$LinearGradientFill$($DvtLedGaugeDefaults$$, 
    $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$14$$, [1, 1], [0, 1]), $DvtStatusMeterGaugeDefaults$$.$setFill$($arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$14$$));
    $borderColor$$24_refColor_shadow$$2_stroke$$56$$ && $DvtStatusMeterGaugeDefaults$$.$setSolidStroke$($borderColor$$24_refColor_shadow$$2_stroke$$56$$);
    $DvtStatusMeterGaugeDefaults$$.$setClassName$($DvtDialGaugeIndicator$$.className);
    $DvtStatusMeterGaugeDefaults$$.$setStyle$($DvtDialGaugeIndicator$$.style);
    $DvtGaugeDataUtils$$ && $DvtRatingGaugePeer$$.$addChild$($DvtStatusMeterGaugeDefaults$$);
    $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeRenderer$$.$_createShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeKeyboardHandler$$, $DvtDialGaugeRenderer$$, $DvtGaugeEventManager$$, $DvtGaugeRenderer$$);
    $DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeDefaults$$, $DvtGaugeDataUtils$$, $DvtLedGaugeDefaults$$);
    if ($DvtLedGaugeDefaults$$ = $DvtDialGaugeIndicator$$.referenceLines) {
      for ($DvtStatusMeterGaugeDefaults$$ = 0;$DvtStatusMeterGaugeDefaults$$ < $DvtLedGaugeDefaults$$.length;$DvtStatusMeterGaugeDefaults$$++) {
        $borderColor$$24_refColor_shadow$$2_stroke$$56$$ = $DvtLedGaugeDefaults$$[$DvtStatusMeterGaugeDefaults$$].color ? $DvtLedGaugeDefaults$$[$DvtStatusMeterGaugeDefaults$$].color : "white", $thresholds$$4_value$$176$$ = $DvtLedGaugeDefaults$$[$DvtStatusMeterGaugeDefaults$$].value, $DvtGaugeDataUtils$$ = $DvtDialGaugeIndicator$$.indicatorSize, $DvtStatusMeterGaugeCircularIndicator$$ ? ($plotArea$$5_referenceLineSize$$ = ((1 - $DvtGaugeDataUtils$$) / 2 + $DvtGaugeDataUtils$$) * $DvtRatingGaugeDefaults$$.$w$, 
        $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$14$$ = $DvtRatingGaugeDefaults$$.x + (1 - $DvtGaugeDataUtils$$) / 4 * $DvtRatingGaugeDefaults$$.$w$, $DvtGaugeDataUtils$$ = $DvtRatingGaugeRenderer$$.$getUnboundedCoordAt$($thresholds$$4_value$$176$$), $DvtGaugeDataUtils$$ = new $dvt$$4$$.$Line$($DvtRatingGaugeEventManager$$.$getCtx$(), $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$14$$, $DvtGaugeDataUtils$$, $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$14$$ + 
        $plotArea$$5_referenceLineSize$$, $DvtGaugeDataUtils$$)) : ($plotArea$$5_referenceLineSize$$ = ((1 - $DvtGaugeDataUtils$$) / 2 + $DvtGaugeDataUtils$$) * $DvtRatingGaugeDefaults$$.$h$, $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$14$$ = $DvtRatingGaugeRenderer$$.$getUnboundedCoordAt$($thresholds$$4_value$$176$$), $DvtGaugeDataUtils$$ = $DvtRatingGaugeDefaults$$.y + (1 - $DvtGaugeDataUtils$$) / 4 * $DvtRatingGaugeDefaults$$.$h$, $DvtGaugeDataUtils$$ = new $dvt$$4$$.$Line$($DvtRatingGaugeEventManager$$.$getCtx$(), 
        $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$14$$, $DvtGaugeDataUtils$$, $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$14$$, $DvtGaugeDataUtils$$ + $plotArea$$5_referenceLineSize$$)), $borderColor$$24_refColor_shadow$$2_stroke$$56$$ = new $dvt$$4$$.$SolidStroke$($borderColor$$24_refColor_shadow$$2_stroke$$56$$, 1, $DvtLedGaugeDefaults$$[$DvtStatusMeterGaugeDefaults$$].lineWidth ? $DvtLedGaugeDefaults$$[$DvtStatusMeterGaugeDefaults$$].lineWidth : 2), $DvtLedGaugeDefaults$$[$DvtStatusMeterGaugeDefaults$$].lineStyle && 
        $borderColor$$24_refColor_shadow$$2_stroke$$56$$.$setStyle$($dvt$$4$$.$Stroke$.$convertTypeString$($DvtLedGaugeDefaults$$[$DvtStatusMeterGaugeDefaults$$].lineStyle)), $DvtGaugeDataUtils$$.$setStroke$($borderColor$$24_refColor_shadow$$2_stroke$$56$$), $DvtRatingGaugePeer$$.$addChild$($DvtGaugeDataUtils$$), $dvt$$4$$.$Agent$.$isPlatformIE$() || "none" == $DvtDialGaugeIndicator$$.visualEffects || ($borderColor$$24_refColor_shadow$$2_stroke$$56$$ = new $dvt$$4$$.$Shadow$($dvt$$4$$.$ColorUtils$.$makeRGBA$(0, 
        0, 0, .8), .75, 3, 3, 50, 1, 2, !1, !1, !1), $DvtGaugeDataUtils$$.$addDrawEffect$($borderColor$$24_refColor_shadow$$2_stroke$$56$$));
      }
    }
    $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeIndicator$$.metricLabel.position;
    "on" != $DvtDialGaugeIndicator$$.metricLabel.rendered || $DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($DvtDialGaugeIndicator$$) || $DvtGaugeStyleUtils$$.$hasTitle$($DvtDialGaugeIndicator$$) ? $DvtGaugeStyleUtils$$.$hasTitle$($DvtDialGaugeIndicator$$) && $DvtStatusMeterGaugeRenderer$$.$_renderTitle$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$) : $DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($DvtRatingGaugeEventManager$$, 
    $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, {$x1$:$DvtGaugeKeyboardHandler$$, $x2$:$DvtDialGaugeRenderer$$, $y1$:$DvtGaugeEventManager$$, $y2$:$DvtGaugeRenderer$$}, {$x1$:$DvtGaugeAutomation$$, $x2$:$DvtGauge$$, $y1$:$DvtLedGaugeRenderer$$, $y2$:$drawnPlotSize_plotY2$$});
  };
  $DvtStatusMeterGaugeRenderer$$.$_createShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_createShape$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$) {
    var $DvtStatusMeterGaugeCircularIndicator$$ = Math.min($DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$), $DvtRatingGaugeRenderer$$ = Math.min($DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$ = Math.abs($DvtRatingGaugeDefaults$$ - $DvtDialGaugeIndicator$$);
    $DvtDialGaugeDefaults$$ = Math.abs($DvtStatusMeterGaugeIndicator$$ - $DvtDialGaugeDefaults$$);
    $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    $DvtDialGaugeIndicator$$ = "vertical" == $DvtStatusMeterGaugeIndicator$$.orientation ? $DvtRatingGaugeDefaults$$ : $DvtDialGaugeDefaults$$;
    $DvtRatingGaugeEventManager$$ = $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$) ? "25%" : "15%";
    $DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$4$$.$PathUtils$.$rectangleWithBorderRadius$($DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeRenderer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeDefaults$$, "auto" != $DvtStatusMeterGaugeIndicator$$.plotArea.borderRadius ? $DvtStatusMeterGaugeIndicator$$.plotArea.borderRadius : $DvtStatusMeterGaugeIndicator$$.borderRadius, $DvtDialGaugeIndicator$$, $DvtRatingGaugeEventManager$$);
    return new $dvt$$4$$.$Path$($DvtRatingGaugePeer$$, $DvtStatusMeterGaugeCircularIndicator$$);
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderVisualEffects$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    "none" != $DvtRatingGaugeEventManager$$.$getOptions$().visualEffects && $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$) && ($DvtDialGaugeDefaults$$ = new $dvt$$4$$.$LinearGradientFill$($DvtDialGaugeDefaults$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF"], [.5, .3125, 0], [0, .3, 1]), $DvtRatingGaugeDefaults$$.$setFill$($DvtDialGaugeDefaults$$), $DvtRatingGaugeEventManager$$.$__shapes$.push($DvtRatingGaugeDefaults$$), $DvtRatingGaugeDefaults$$.$setMouseEnabled$(!1), $DvtDialGaugeIndicator$$ && 
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeDefaults$$));
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderPlotAreaVisualEffects$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    var $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    $DvtRatingGaugeDefaults$$.$setMouseEnabled$(!1);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeDefaults$$);
    "none" != $DvtStatusMeterGaugeIndicator$$.visualEffects && ($DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$) ? ($DvtRatingGaugeEventManager$$ = [$dvt$$4$$.$ColorUtils$.$getDarker$($DvtDialGaugeIndicator$$, .1), $DvtDialGaugeIndicator$$, $dvt$$4$$.$ColorUtils$.$getBrighter$($DvtDialGaugeIndicator$$, .7)], $DvtDialGaugeDefaults$$ = new $dvt$$4$$.$LinearGradientFill$($DvtDialGaugeDefaults$$, $DvtRatingGaugeEventManager$$, [1, 1, 1], [0, .04, .73])) : ($DvtRatingGaugeEventManager$$ = 
    [$dvt$$4$$.$ColorUtils$.$adjustHSL$($DvtDialGaugeIndicator$$, -.04, -.05), $dvt$$4$$.$ColorUtils$.$adjustHSL$($DvtDialGaugeIndicator$$, -.09, .04)], $DvtDialGaugeDefaults$$ = new $dvt$$4$$.$LinearGradientFill$($DvtDialGaugeDefaults$$, $DvtRatingGaugeEventManager$$, [1, 1], [0, 1])), $DvtRatingGaugeDefaults$$.$setFill$($DvtDialGaugeDefaults$$), $DvtRatingGaugeDefaults$$.$setClassName$($DvtStatusMeterGaugeIndicator$$.plotArea.className), $DvtRatingGaugeDefaults$$.$setStyle$($DvtStatusMeterGaugeIndicator$$.plotArea.style));
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderLabelOutsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabelOutsidePlotArea$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeDefaults$$ = $dvt$$4$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtStatusMeterGaugeIndicator$$ = "vertical" == $DvtDialGaugeIndicator$$.orientation, $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$4$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), ""), $DvtRatingGaugeRenderer$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.value, $DvtRatingGaugeEventManager$$), 
    $DvtGaugeKeyboardHandler$$ = $DvtDialGaugeIndicator$$.__layout.labelGap, $DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeIndicator$$.metricLabel.style, $DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$.$getStyle$("color"), $DvtLedGaugeDefaults$$ = $DvtLedGaugeDefaults$$ ? $DvtLedGaugeDefaults$$ : "#333333", $DvtStatusMeterGaugeRenderer$$ = null;
    $DvtStatusMeterGaugeCircularIndicator$$.$setCSSStyle$($DvtStatusMeterGaugeDefaults$$);
    $DvtStatusMeterGaugeCircularIndicator$$.$setSolidFill$($DvtLedGaugeDefaults$$);
    if ($DvtStatusMeterGaugeIndicator$$ && "on" == $DvtDialGaugeIndicator$$.metricLabel.rendered) {
      var $DvtGaugeDataUtils$$ = 0 < $DvtDialGaugeIndicator$$.max ? $DvtDialGaugeIndicator$$.max : $DvtDialGaugeIndicator$$.min, $DvtGaugeDataUtils$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtGaugeDataUtils$$, $DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeRenderer$$ = new $dvt$$4$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeDataUtils$$);
      $DvtStatusMeterGaugeRenderer$$.$setCSSStyle$($DvtStatusMeterGaugeDefaults$$);
      $DvtDialGaugeIndicator$$ = new $dvt$$4$$.$Rectangle$($DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y + .8 * $DvtRatingGaugeDefaults$$.$h$, $DvtRatingGaugeDefaults$$.$w$, .2 * $DvtRatingGaugeDefaults$$.$h$);
      $DvtStatusMeterGaugeIndicator$$ = ($DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeDefaults$$.$getStyle$("font-size")) ? parseInt($DvtStatusMeterGaugeIndicator$$) : $DvtStatusMeterGaugeRenderer$$.$getOptimalFontSize$($DvtDialGaugeIndicator$$);
      $DvtStatusMeterGaugeRenderer$$ = $DvtStatusMeterGaugeRenderer$$.$measureDimensions$();
      $DvtRatingGaugeDefaults$$.$h$ -= $DvtStatusMeterGaugeRenderer$$.$h$;
      $DvtGaugeDataUtils$$ = $DvtStatusMeterGaugeRenderer$$.$w$;
      $DvtStatusMeterGaugeCircularIndicator$$.$setFontSize$($DvtStatusMeterGaugeIndicator$$);
      $DvtStatusMeterGaugeCircularIndicator$$.$setTextString$($DvtRatingGaugeRenderer$$);
      $DvtStatusMeterGaugeCircularIndicator$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2);
      $DvtStatusMeterGaugeCircularIndicator$$.$setY$($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$);
      $DvtRatingGaugeDefaults$$.$h$ -= $DvtGaugeKeyboardHandler$$;
      $DvtStatusMeterGaugeCircularIndicator$$.$alignCenter$();
      $dvt$$4$$.$TextUtils$.$fitText$($DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$, $DvtRatingGaugePeer$$);
    } else {
      if (!$DvtStatusMeterGaugeIndicator$$ && "on" == $DvtDialGaugeIndicator$$.metricLabel.rendered) {
        $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeDefaults$$.$getStyle$("font-size");
        $DvtLedGaugeDefaults$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.min, $DvtRatingGaugeEventManager$$);
        $DvtStatusMeterGaugeRenderer$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.max, $DvtRatingGaugeEventManager$$);
        void 0 === $DvtStatusMeterGaugeIndicator$$ && 18 > $DvtRatingGaugeDefaults$$.$h$ && ($DvtStatusMeterGaugeIndicator$$ = $DvtGaugeRenderer$$.$calcLabelFontSize$([$DvtRatingGaugeRenderer$$, $DvtLedGaugeDefaults$$, $DvtStatusMeterGaugeRenderer$$], $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$));
        $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeIndicator$$ ? parseInt($DvtStatusMeterGaugeIndicator$$) : 13;
        $DvtStatusMeterGaugeCircularIndicator$$.$setFontSize$($DvtStatusMeterGaugeIndicator$$);
        var $DvtDialGaugeRenderer$$;
        if (0 < $DvtDialGaugeIndicator$$.max || "off" != $DvtDialGaugeIndicator$$.plotArea.rendered || "auto" != $DvtDialGaugeIndicator$$.plotArea.rendered || "onIndicator" != $DvtDialGaugeIndicator$$.thresholdDisplay) {
          $DvtGaugeDataUtils$$ = 0 < $DvtDialGaugeIndicator$$.max ? $DvtDialGaugeIndicator$$.max : $DvtDialGaugeIndicator$$.min, $DvtGaugeDataUtils$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtGaugeDataUtils$$, $DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeRenderer$$ = new $dvt$$4$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeDataUtils$$), $DvtStatusMeterGaugeRenderer$$.$setCSSStyle$($DvtStatusMeterGaugeDefaults$$), $DvtStatusMeterGaugeRenderer$$.$setFontSize$($DvtStatusMeterGaugeIndicator$$), 
          $DvtStatusMeterGaugeRenderer$$ = $DvtStatusMeterGaugeRenderer$$.$measureDimensions$(), $DvtStatusMeterGaugeRenderer$$.$w$ = Math.min($DvtStatusMeterGaugeRenderer$$.$w$, $DvtRatingGaugeDefaults$$.$w$), $DvtDialGaugeRenderer$$ = $DvtDialGaugeDefaults$$ ? $DvtRatingGaugeDefaults$$.x + $DvtStatusMeterGaugeRenderer$$.$w$ : $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$, $DvtGaugeDataUtils$$ = $DvtStatusMeterGaugeRenderer$$.$w$, $DvtDialGaugeDefaults$$ && ($DvtRatingGaugeDefaults$$.x += 
          $DvtStatusMeterGaugeRenderer$$.$w$ + $DvtGaugeKeyboardHandler$$), $DvtRatingGaugeDefaults$$.$w$ -= $DvtStatusMeterGaugeRenderer$$.$w$ + $DvtGaugeKeyboardHandler$$;
        }
        if (0 > $DvtDialGaugeIndicator$$.min && "on" != $DvtDialGaugeIndicator$$.plotArea.rendered && ("auto" != $DvtDialGaugeIndicator$$.plotArea.rendered || "onIndicator" != $DvtDialGaugeIndicator$$.thresholdDisplay)) {
          $DvtStatusMeterGaugeRenderer$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.min, $DvtRatingGaugeEventManager$$);
          $DvtLedGaugeDefaults$$ = new $dvt$$4$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeRenderer$$);
          $DvtLedGaugeDefaults$$.$setCSSStyle$($DvtStatusMeterGaugeDefaults$$);
          $DvtLedGaugeDefaults$$.$setFontSize$($DvtStatusMeterGaugeIndicator$$);
          $DvtStatusMeterGaugeDefaults$$ = $DvtLedGaugeDefaults$$.$measureDimensions$();
          if (0 > $DvtDialGaugeIndicator$$.value || 0 >= $DvtDialGaugeIndicator$$.max) {
            $DvtDialGaugeRenderer$$ = $DvtDialGaugeDefaults$$ ? $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ : $DvtRatingGaugeDefaults$$.x + $DvtStatusMeterGaugeDefaults$$.$w$, $DvtGaugeDataUtils$$ = $DvtStatusMeterGaugeDefaults$$.$w$;
          }
          $DvtDialGaugeDefaults$$ || ($DvtRatingGaugeDefaults$$.x += $DvtStatusMeterGaugeDefaults$$.$w$ + $DvtGaugeKeyboardHandler$$);
          $DvtRatingGaugeDefaults$$.$w$ -= $DvtStatusMeterGaugeDefaults$$.$w$ + $DvtGaugeKeyboardHandler$$;
        }
        $DvtStatusMeterGaugeCircularIndicator$$.$setTextString$($DvtRatingGaugeRenderer$$);
        $DvtStatusMeterGaugeCircularIndicator$$.$setX$($DvtDialGaugeRenderer$$);
        $dvt$$4$$.$TextUtils$.$centerTextVertically$($DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2);
        $DvtStatusMeterGaugeCircularIndicator$$.$alignRight$();
        $dvt$$4$$.$TextUtils$.$fitText$($DvtStatusMeterGaugeCircularIndicator$$, $DvtGaugeDataUtils$$, $DvtRatingGaugeDefaults$$.$h$, $DvtRatingGaugePeer$$);
      }
    }
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabelInsidePlotArea$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeRenderer$$) {
    var $DvtGaugeKeyboardHandler$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeDefaults$$ = $dvt$$4$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtLedGaugeDefaults$$ = "vertical" == $DvtGaugeKeyboardHandler$$.orientation, $DvtGaugeDataUtils$$ = "on" == $DvtGaugeKeyboardHandler$$.plotArea.rendered, $DvtDialGaugeRenderer$$ = "center", $DvtGaugeDefaults$$ = "middle", $DvtGaugeEventManager$$ = new $dvt$$4$$.$Rectangle$(Math.min($DvtStatusMeterGaugeIndicator$$.$x1$, 
    $DvtStatusMeterGaugeIndicator$$.$x2$), Math.min($DvtStatusMeterGaugeIndicator$$.$y1$, $DvtStatusMeterGaugeIndicator$$.$y2$), Math.abs($DvtStatusMeterGaugeIndicator$$.$x2$ - $DvtStatusMeterGaugeIndicator$$.$x1$), Math.abs($DvtStatusMeterGaugeIndicator$$.$y2$ - $DvtStatusMeterGaugeIndicator$$.$y1$)), $DvtGaugeKeyboardHandler$$ = $DvtGaugeKeyboardHandler$$.metricLabel.style.$getStyle$("color");
    "center" == $DvtDialGaugeDefaults$$ ? ($DvtGaugeKeyboardHandler$$ = $DvtGaugeKeyboardHandler$$ ? $DvtGaugeKeyboardHandler$$ : $dvt$$4$$.$ColorUtils$.$getContrastingTextColor$($DvtDialGaugeIndicator$$), $DvtLedGaugeDefaults$$ ? ($DvtGaugeEventManager$$.$h$ -= $DvtGaugeEventManager$$.$w$, $DvtGaugeEventManager$$.y += $DvtGaugeEventManager$$.$w$ / 2) : ($DvtGaugeEventManager$$.$w$ -= $DvtGaugeEventManager$$.$h$, $DvtGaugeEventManager$$.x += $DvtGaugeEventManager$$.$h$ / 2)) : "insideIndicatorEdge" == 
    $DvtDialGaugeDefaults$$ ? ($DvtGaugeKeyboardHandler$$ = $DvtGaugeKeyboardHandler$$ ? $DvtGaugeKeyboardHandler$$ : $dvt$$4$$.$ColorUtils$.$getContrastingTextColor$($DvtDialGaugeIndicator$$), $DvtLedGaugeDefaults$$ ? ($DvtGaugeEventManager$$.$h$ -= $DvtGaugeEventManager$$.$w$, $DvtGaugeEventManager$$.y += $DvtGaugeEventManager$$.$w$ / 2, $DvtGaugeDefaults$$ = !$DvtGaugeDataUtils$$ && $DvtStatusMeterGaugeIndicator$$.$y1$ > $DvtStatusMeterGaugeIndicator$$.$y2$ ? "bottom" : "top") : ($DvtGaugeEventManager$$.$w$ -= 
    $DvtGaugeEventManager$$.$h$, $DvtGaugeEventManager$$.x += $DvtGaugeEventManager$$.$h$ / 2, $DvtDialGaugeRenderer$$ = $DvtStatusMeterGaugeDefaults$$ ? !$DvtGaugeDataUtils$$ && $DvtStatusMeterGaugeIndicator$$.$x1$ < $DvtStatusMeterGaugeIndicator$$.$x2$ ? "right" : "left" : !$DvtGaugeDataUtils$$ && $DvtStatusMeterGaugeIndicator$$.$x1$ > $DvtStatusMeterGaugeIndicator$$.$x2$ ? "left" : "right")) : "outsideIndicatorEdge" == $DvtDialGaugeDefaults$$ && ($DvtLedGaugeDefaults$$ ? ($DvtGaugeEventManager$$.$h$ = 
    Math.abs($DvtStatusMeterGaugeCircularIndicator$$.$y1$ - $DvtStatusMeterGaugeIndicator$$.$y1$) - $DvtGaugeEventManager$$.$w$, $DvtGaugeEventManager$$.y = $DvtStatusMeterGaugeCircularIndicator$$.$y1$ + $DvtGaugeEventManager$$.$w$ / 2, $DvtGaugeDefaults$$ = "bottom", !$DvtGaugeDataUtils$$ && $DvtStatusMeterGaugeIndicator$$.$y1$ > $DvtStatusMeterGaugeIndicator$$.$y2$ && ($DvtGaugeEventManager$$.$h$ = Math.abs($DvtStatusMeterGaugeCircularIndicator$$.$y1$ - $DvtStatusMeterGaugeIndicator$$.$y1$) - $DvtGaugeEventManager$$.$w$, 
    $DvtGaugeEventManager$$.y = $DvtStatusMeterGaugeIndicator$$.$y1$ + $DvtGaugeEventManager$$.$w$ / 2, $DvtGaugeDefaults$$ = "top")) : $DvtStatusMeterGaugeDefaults$$ ? !$DvtGaugeDataUtils$$ && $DvtStatusMeterGaugeIndicator$$.$x1$ < $DvtStatusMeterGaugeIndicator$$.$x2$ ? ($DvtGaugeEventManager$$.$w$ = Math.abs($DvtStatusMeterGaugeCircularIndicator$$.$x2$ - $DvtStatusMeterGaugeIndicator$$.$x2$) - $DvtGaugeEventManager$$.$h$, $DvtGaugeEventManager$$.x = $DvtStatusMeterGaugeIndicator$$.$x2$ + $DvtGaugeEventManager$$.$h$ / 
    2, $DvtDialGaugeRenderer$$ = "left") : ($DvtGaugeEventManager$$.$w$ = Math.abs($DvtStatusMeterGaugeCircularIndicator$$.$x1$ - $DvtStatusMeterGaugeIndicator$$.$x2$) - $DvtGaugeEventManager$$.$h$, $DvtGaugeEventManager$$.x = $DvtStatusMeterGaugeCircularIndicator$$.$x1$ + $DvtGaugeEventManager$$.$h$ / 2, $DvtDialGaugeRenderer$$ = "right") : !$DvtGaugeDataUtils$$ && $DvtStatusMeterGaugeIndicator$$.$x1$ > $DvtStatusMeterGaugeIndicator$$.$x2$ ? ($DvtGaugeEventManager$$.$w$ = Math.abs($DvtStatusMeterGaugeCircularIndicator$$.$x1$ - 
    $DvtStatusMeterGaugeIndicator$$.$x2$) - $DvtGaugeEventManager$$.$h$, $DvtGaugeEventManager$$.x = $DvtStatusMeterGaugeCircularIndicator$$.$x1$ + $DvtGaugeEventManager$$.$h$ / 2, $DvtDialGaugeRenderer$$ = "right") : ($DvtGaugeEventManager$$.$w$ = Math.abs($DvtStatusMeterGaugeCircularIndicator$$.$x2$ - $DvtStatusMeterGaugeIndicator$$.$x2$) - $DvtGaugeEventManager$$.$h$, $DvtGaugeEventManager$$.x = $DvtStatusMeterGaugeIndicator$$.$x2$ + $DvtGaugeEventManager$$.$h$ / 2, $DvtDialGaugeRenderer$$ = "left"));
    $DvtGaugeRenderer$$.$renderLabel$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtGaugeEventManager$$, $DvtGaugeKeyboardHandler$$, $DvtDialGaugeRenderer$$, $DvtGaugeDefaults$$) || $DvtRatingGaugeRenderer$$ || ("outsideIndicatorEdge" == $DvtDialGaugeDefaults$$ ? $DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, "insideIndicatorEdge", $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, 
    !0) : "insideIndicatorEdge" != $DvtDialGaugeDefaults$$ && "center" != $DvtDialGaugeDefaults$$ || $DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, "outsideIndicatorEdge", $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, !0));
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderTitle$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderTitle$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $dvt$$4$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeIndicator$$ = "vertical" == $DvtDialGaugeDefaults$$.orientation, $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$4$$.$Rectangle$($DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtStatusMeterGaugeIndicator$$ ? $DvtRatingGaugeDefaults$$.$w$ : $DvtRatingGaugeDefaults$$.$w$ - $DvtRatingGaugeDefaults$$.$h$, 
    $DvtStatusMeterGaugeIndicator$$ ? $DvtRatingGaugeDefaults$$.$h$ - $DvtRatingGaugeDefaults$$.$w$ : $DvtRatingGaugeDefaults$$.$h$), $DvtRatingGaugeRenderer$$ = $DvtDialGaugeDefaults$$.title.text;
    if (!$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($DvtDialGaugeDefaults$$) && "on" == $DvtDialGaugeDefaults$$.metricLabel.rendered) {
      var $DvtGaugeKeyboardHandler$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeDefaults$$.value, $DvtRatingGaugeEventManager$$), $DvtRatingGaugeRenderer$$ = $dvt$$4$$.$Bundle$.$getTranslatedString$($dvt$$4$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtRatingGaugeRenderer$$, $DvtGaugeKeyboardHandler$$])
    }
    var $DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeDefaults$$.title.style, $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeDefaults$$.clone(), $DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$.$getStyle$("font-size");
    $DvtLedGaugeDefaults$$ || ($DvtLedGaugeDefaults$$ = new $dvt$$4$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtRatingGaugeRenderer$$, 0, 0), $DvtLedGaugeDefaults$$.$setCSSStyle$($DvtStatusMeterGaugeDefaults$$), $DvtLedGaugeDefaults$$.$setTextString$($DvtRatingGaugeRenderer$$), $DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeIndicator$$ ? $DvtLedGaugeDefaults$$.$getOptimalFontSize$(new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$.x, $DvtStatusMeterGaugeCircularIndicator$$.y, 
    $DvtStatusMeterGaugeCircularIndicator$$.$w$, Number.MAX_VALUE)) : $DvtLedGaugeDefaults$$.$getOptimalFontSize$(new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$.x, $DvtStatusMeterGaugeCircularIndicator$$.y, Number.MAX_VALUE, $DvtStatusMeterGaugeCircularIndicator$$.$h$)));
    $DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$MultilineText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtRatingGaugeRenderer$$);
    $DvtGaugeKeyboardHandler$$.$setFontSize$("font-size", $DvtLedGaugeDefaults$$.toString());
    $DvtRatingGaugeRenderer$$.$setCSSStyle$($DvtGaugeKeyboardHandler$$);
    $dvt$$4$$.$TextUtils$.$fitText$($DvtRatingGaugeRenderer$$, $DvtStatusMeterGaugeCircularIndicator$$.$w$, $DvtStatusMeterGaugeCircularIndicator$$.$h$, $DvtRatingGaugeEventManager$$);
    "center" == $DvtDialGaugeDefaults$$.title.position || "auto" == $DvtDialGaugeDefaults$$.title.position && $DvtStatusMeterGaugeIndicator$$ ? ($dvt$$4$$.$TextUtils$.$centerTextVertically$($DvtRatingGaugeRenderer$$, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2), $DvtRatingGaugeRenderer$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2), $DvtRatingGaugeRenderer$$.$alignCenter$()) : ($dvt$$4$$.$TextUtils$.$centerTextVertically$($DvtRatingGaugeRenderer$$, $DvtRatingGaugeDefaults$$.y + 
    $DvtRatingGaugeDefaults$$.$h$ / 2), !$DvtStatusMeterGaugeIndicator$$ && $DvtDialGaugeIndicator$$) ? ($DvtRatingGaugeRenderer$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ - $DvtStatusMeterGaugeCircularIndicator$$.$h$ / 2), $DvtRatingGaugeRenderer$$.$alignRight$()) : $DvtStatusMeterGaugeIndicator$$ || $DvtDialGaugeIndicator$$ ? $DvtStatusMeterGaugeIndicator$$ && ($DvtRatingGaugeRenderer$$.$setY$($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ - $DvtRatingGaugeRenderer$$.$getDimensions$().$h$ - 
    $DvtStatusMeterGaugeCircularIndicator$$.$w$ / 2), $DvtRatingGaugeRenderer$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2), $DvtRatingGaugeRenderer$$.$alignCenter$()) : ($DvtRatingGaugeRenderer$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtStatusMeterGaugeCircularIndicator$$.$h$ / 2), $DvtRatingGaugeRenderer$$.$alignLeft$());
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeRenderer$$);
  };
  $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_calcPointOnArc$$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    return {x:Math.cos($DvtRatingGaugePeer$$) * $DvtRatingGaugeEventManager$$ + $dvt$$4$$.$w$ / 2 + $dvt$$4$$.x, y:Math.sin($DvtRatingGaugePeer$$) * $DvtRatingGaugeEventManager$$ + $dvt$$4$$.$h$ / 2 + $dvt$$4$$.y};
  };
  $DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularArc$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeRenderer$$, $DvtGaugeKeyboardHandler$$, $DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$) {
    var $DvtGaugeDataUtils$$ = $DvtRatingGaugeEventManager$$.$getCtx$();
    $dvt$$4$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()) && ($DvtDialGaugeIndicator$$ = Math.PI - $DvtDialGaugeIndicator$$ - $DvtDialGaugeDefaults$$, $DvtDialGaugeIndicator$$ = 0 < $DvtDialGaugeIndicator$$ ? $DvtDialGaugeIndicator$$ : $DvtDialGaugeIndicator$$ + 2 * Math.PI);
    $DvtStatusMeterGaugeDefaults$$ ? $DvtRatingGaugeDefaults$$ = new $dvt$$4$$.$Path$($DvtGaugeDataUtils$$, $DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeRenderer$$)) : ($DvtRatingGaugeDefaults$$ = new $DvtStatusMeterGaugeCircularIndicator$$($DvtGaugeDataUtils$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, 
    $DvtRatingGaugeRenderer$$), $DvtRatingGaugeEventManager$$.$__shapes$.push($DvtRatingGaugeDefaults$$));
    $DvtRatingGaugeDefaults$$.$setSolidFill$($DvtGaugeKeyboardHandler$$);
    ($DvtGaugeKeyboardHandler$$ = $DvtGaugeStyleUtils$$.$getBorderColor$($DvtRatingGaugeEventManager$$)) && !$DvtStatusMeterGaugeDefaults$$ ? $DvtRatingGaugeDefaults$$.$setSolidStroke$($DvtGaugeKeyboardHandler$$) : $DvtStatusMeterGaugeDefaults$$ && $DvtLedGaugeDefaults$$ && $DvtRatingGaugeDefaults$$.$setSolidStroke$($DvtLedGaugeDefaults$$);
    $DvtRatingGaugeEventManager$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    $DvtRatingGaugeDefaults$$.$setClassName$($DvtStatusMeterGaugeDefaults$$ ? $DvtRatingGaugeEventManager$$.plotArea.className : $DvtRatingGaugeEventManager$$.className);
    $DvtRatingGaugeDefaults$$.$setStyle$($DvtStatusMeterGaugeDefaults$$ ? $DvtRatingGaugeEventManager$$.plotArea.style : $DvtRatingGaugeEventManager$$.style);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeDefaults$$);
  };
  $DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularReferenceLine$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$) {
    var $DvtRatingGaugeRenderer$$ = $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeKeyboardHandler$$ = Math.min($DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$), $DvtStatusMeterGaugeDefaults$$ = .275 * $DvtGaugeKeyboardHandler$$, $DvtGaugeKeyboardHandler$$ = .5 * $DvtGaugeKeyboardHandler$$;
    $dvt$$4$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()) && ($DvtDialGaugeIndicator$$ = Math.PI - $DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$ = 0 < $DvtDialGaugeIndicator$$ ? $DvtDialGaugeIndicator$$ : $DvtDialGaugeIndicator$$ + 2 * Math.PI);
    $DvtRatingGaugeEventManager$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeDefaults$$, $DvtGaugeKeyboardHandler$$, $DvtDialGaugeIndicator$$);
    $DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$Line$($DvtRatingGaugeRenderer$$, $DvtRatingGaugeEventManager$$.x, $DvtRatingGaugeEventManager$$.y, $DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y);
    $DvtDialGaugeDefaults$$ = new $dvt$$4$$.$SolidStroke$($DvtDialGaugeDefaults$$, 1, $DvtStatusMeterGaugeIndicator$$);
    $DvtStatusMeterGaugeCircularIndicator$$ && $DvtDialGaugeDefaults$$.$setStyle$($dvt$$4$$.$Stroke$.$convertTypeString$($DvtStatusMeterGaugeCircularIndicator$$));
    $DvtRatingGaugeRenderer$$.$setStroke$($DvtDialGaugeDefaults$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeRenderer$$);
  };
  $DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$ = function $$DvtStatusMeterGaugeRenderer$$$$createCircularPathCmd$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    var $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeRenderer$$;
    $DvtRatingGaugeDefaults$$ < $dvt$$4$$.Math.$TWO_PI$ ? ($DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugePeer$$), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugePeer$$ + $DvtRatingGaugeDefaults$$), $DvtRatingGaugeRenderer$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, 
    $DvtDialGaugeIndicator$$, $DvtRatingGaugePeer$$ + $DvtRatingGaugeDefaults$$), $DvtRatingGaugeEventManager$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugePeer$$), $DvtDialGaugeDefaults$$ = $dvt$$4$$.$PathUtils$.moveTo($DvtStatusMeterGaugeIndicator$$.x, $DvtStatusMeterGaugeIndicator$$.y) + $dvt$$4$$.$PathUtils$.arcTo($DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$, 1, $DvtStatusMeterGaugeCircularIndicator$$.x, 
    $DvtStatusMeterGaugeCircularIndicator$$.y) + $dvt$$4$$.$PathUtils$.lineTo($DvtRatingGaugeRenderer$$.x, $DvtRatingGaugeRenderer$$.y) + $dvt$$4$$.$PathUtils$.arcTo($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$, 0, $DvtRatingGaugeEventManager$$.x, $DvtRatingGaugeEventManager$$.y) + $dvt$$4$$.$PathUtils$.closePath()) : ($DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugePeer$$), 
    $DvtStatusMeterGaugeCircularIndicator$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugePeer$$ + $DvtRatingGaugeDefaults$$ / 2), $DvtRatingGaugeRenderer$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugePeer$$), $DvtRatingGaugeEventManager$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, 
    $DvtRatingGaugePeer$$ + $DvtRatingGaugeDefaults$$ / 2), $DvtDialGaugeDefaults$$ = $dvt$$4$$.$PathUtils$.moveTo($DvtStatusMeterGaugeIndicator$$.x, $DvtStatusMeterGaugeIndicator$$.y) + $dvt$$4$$.$PathUtils$.arcTo($DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$ / 2, 1, $DvtStatusMeterGaugeCircularIndicator$$.x, $DvtStatusMeterGaugeCircularIndicator$$.y) + $dvt$$4$$.$PathUtils$.arcTo($DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$ / 2, 1, $DvtStatusMeterGaugeIndicator$$.x, 
    $DvtStatusMeterGaugeIndicator$$.y), 0 < $DvtDialGaugeIndicator$$ && ($DvtDialGaugeDefaults$$ += $dvt$$4$$.$PathUtils$.moveTo($DvtRatingGaugeEventManager$$.x, $DvtRatingGaugeEventManager$$.y) + $dvt$$4$$.$PathUtils$.arcTo($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$ / 2, 0, $DvtRatingGaugeRenderer$$.x, $DvtRatingGaugeRenderer$$.y) + $dvt$$4$$.$PathUtils$.arcTo($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$ / 2, 0, $DvtRatingGaugeEventManager$$.x, 
    $DvtRatingGaugeEventManager$$.y)), $DvtDialGaugeDefaults$$ += $dvt$$4$$.$PathUtils$.closePath());
    return $DvtDialGaugeDefaults$$;
  };
  $DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$ = function $$DvtStatusMeterGaugeRenderer$$$$getAngleQuadrant$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = 1;
    if ($DvtRatingGaugePeer$$) {
      $DvtRatingGaugeEventManager$$ >= $dvt$$4$$.Math.$HALF_PI$ && $DvtRatingGaugeEventManager$$ < Math.PI ? $DvtRatingGaugeDefaults$$ = 2 : $DvtRatingGaugeEventManager$$ >= Math.PI && $DvtRatingGaugeEventManager$$ < 1.5 * Math.PI ? $DvtRatingGaugeDefaults$$ = 3 : $DvtRatingGaugeEventManager$$ >= 1.5 * Math.PI && $DvtRatingGaugeEventManager$$ < $dvt$$4$$.Math.$TWO_PI$ && ($DvtRatingGaugeDefaults$$ = 4);
    } else {
      if ($DvtRatingGaugeEventManager$$ > $dvt$$4$$.Math.$HALF_PI$ && $DvtRatingGaugeEventManager$$ <= Math.PI) {
        $DvtRatingGaugeDefaults$$ = 2;
      } else {
        if ($DvtRatingGaugeEventManager$$ > Math.PI && $DvtRatingGaugeEventManager$$ <= 1.5 * Math.PI) {
          $DvtRatingGaugeDefaults$$ = 3;
        } else {
          if ($DvtRatingGaugeEventManager$$ > 1.5 * Math.PI && $DvtRatingGaugeEventManager$$ < $dvt$$4$$.Math.$TWO_PI$ || 0 == $DvtRatingGaugeEventManager$$) {
            $DvtRatingGaugeDefaults$$ = 4;
          }
        }
      }
    }
    return $DvtRatingGaugeDefaults$$;
  };
  $DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_hasMetricLabelOutsidePlotArea$$($dvt$$4$$) {
    var $DvtRatingGaugeEventManager$$ = $dvt$$4$$.metricLabel.position;
    return "auto" == $DvtRatingGaugeEventManager$$ || "outsidePlotArea" == $DvtRatingGaugeEventManager$$ || "withTitle" == $DvtRatingGaugeEventManager$$ && !$DvtGaugeStyleUtils$$.$hasTitle$($dvt$$4$$);
  };
  $DvtStatusMeterGaugeRenderer$$.$_adjustCenterAndBounds$ = function $$DvtStatusMeterGaugeRenderer$$$$_adjustCenterAndBounds$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$) {
    var $DvtRatingGaugeRenderer$$ = null, $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$($DvtRatingGaugeDefaults$$, !0), $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$($DvtDialGaugeDefaults$$, !1), $DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeIndicator$$.$w$, $DvtGaugeDataUtils$$ = $DvtStatusMeterGaugeIndicator$$.$h$, $DvtDialGaugeRenderer$$ = $DvtLedGaugeDefaults$$ / 2, $DvtGaugeEventManager$$ = $DvtGaugeDataUtils$$ / 2, $DvtGaugeDefaults$$;
    if ($DvtGaugeKeyboardHandler$$ == $DvtStatusMeterGaugeDefaults$$ && $DvtDialGaugeIndicator$$ <= $dvt$$4$$.Math.$HALF_PI$) {
      if ($DvtRatingGaugeDefaults$$ = 2 * Math.min($DvtStatusMeterGaugeIndicator$$.$w$, $DvtStatusMeterGaugeIndicator$$.$h$), $DvtStatusMeterGaugeIndicator$$.$w$ += $DvtRatingGaugeDefaults$$ / 2, $DvtStatusMeterGaugeIndicator$$.$h$ += $DvtRatingGaugeDefaults$$ / 2, $DvtGaugeDefaults$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, !$DvtStatusMeterGaugeCircularIndicator$$ && 1 == $DvtGaugeKeyboardHandler$$ || $DvtStatusMeterGaugeCircularIndicator$$ && 2 == $DvtGaugeKeyboardHandler$$) {
        $DvtStatusMeterGaugeIndicator$$.x -= $DvtRatingGaugeDefaults$$ / 2, $DvtStatusMeterGaugeIndicator$$.y -= $DvtRatingGaugeDefaults$$ / 2, $DvtDialGaugeRenderer$$ = $DvtLedGaugeDefaults$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1, $DvtGaugeEventManager$$ = $DvtGaugeDataUtils$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1, $DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$.x + $DvtStatusMeterGaugeIndicator$$.$w$ / 2 - 1, $DvtStatusMeterGaugeIndicator$$.y + $DvtStatusMeterGaugeIndicator$$.$h$ / 
        2 - 1, 3 / 7 * $DvtGaugeDefaults$$ - 2, 2.5 / 7 * $DvtGaugeDefaults$$ - 2);
      } else {
        if (!$DvtStatusMeterGaugeCircularIndicator$$ && 2 == $DvtGaugeKeyboardHandler$$ || $DvtStatusMeterGaugeCircularIndicator$$ && 1 == $DvtGaugeKeyboardHandler$$) {
          $DvtStatusMeterGaugeIndicator$$.y -= $DvtRatingGaugeDefaults$$ / 2, $DvtDialGaugeRenderer$$ = $DvtLedGaugeDefaults$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1, $DvtGaugeEventManager$$ = $DvtGaugeDataUtils$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1, $DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$.x + $DvtStatusMeterGaugeIndicator$$.$w$ / 2 - 3 / 7 * $DvtGaugeDefaults$$ + 1, $DvtStatusMeterGaugeIndicator$$.y + $DvtStatusMeterGaugeIndicator$$.$h$ / 2 - 1, 
          3 / 7 * $DvtGaugeDefaults$$ - 2, 2.5 / 7 * $DvtGaugeDefaults$$ - 2);
        } else {
          if (!$DvtStatusMeterGaugeCircularIndicator$$ && 3 == $DvtGaugeKeyboardHandler$$ || $DvtStatusMeterGaugeCircularIndicator$$ && 4 == $DvtGaugeKeyboardHandler$$) {
            $DvtDialGaugeRenderer$$ = $DvtLedGaugeDefaults$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1, $DvtGaugeEventManager$$ = $DvtGaugeDataUtils$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1, $DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$.x + $DvtStatusMeterGaugeIndicator$$.$w$ / 2 - 3 / 7 * $DvtGaugeDefaults$$ + 1, $DvtStatusMeterGaugeIndicator$$.y + $DvtStatusMeterGaugeIndicator$$.$h$ / 2 - 2.5 / 7 * $DvtGaugeDefaults$$ + 1, 3 / 7 * $DvtGaugeDefaults$$ - 2, 
            2.5 / 7 * $DvtGaugeDefaults$$ - 2);
          } else {
            if (!$DvtStatusMeterGaugeCircularIndicator$$ && 4 == $DvtGaugeKeyboardHandler$$ || $DvtStatusMeterGaugeCircularIndicator$$ && 3 == $DvtGaugeKeyboardHandler$$) {
              $DvtStatusMeterGaugeIndicator$$.x -= $DvtRatingGaugeDefaults$$ / 2, $DvtDialGaugeRenderer$$ = $DvtLedGaugeDefaults$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1, $DvtGaugeEventManager$$ = $DvtGaugeDataUtils$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1, $DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$.x + $DvtStatusMeterGaugeIndicator$$.$w$ / 2 - 1, $DvtStatusMeterGaugeIndicator$$.y + $DvtStatusMeterGaugeIndicator$$.$h$ / 2 - 2.5 / 7 * $DvtGaugeDefaults$$ + 
              1, 3 / 7 * $DvtGaugeDefaults$$ - 2, 2.5 / 7 * $DvtGaugeDefaults$$ - 2);
            }
          }
        }
      }
    } else {
      $DvtGaugeKeyboardHandler$$ % 4 + 1 == $DvtStatusMeterGaugeDefaults$$ && $DvtDialGaugeIndicator$$ <= Math.PI ? 1 == $DvtGaugeKeyboardHandler$$ || 3 == $DvtGaugeKeyboardHandler$$ ? ($DvtRatingGaugeDefaults$$ = Math.min($DvtStatusMeterGaugeIndicator$$.$w$, 2 * $DvtStatusMeterGaugeIndicator$$.$h$), $DvtGaugeDefaults$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeIndicator$$.$w$ > $DvtStatusMeterGaugeIndicator$$.$h$ && ($DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$.x + 
      $DvtStatusMeterGaugeIndicator$$.$w$ / 2 - 3 / 7 * $DvtGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$.y + $DvtStatusMeterGaugeIndicator$$.$h$ - ($DvtStatusMeterGaugeIndicator$$.$h$ - $DvtRatingGaugeDefaults$$ / 2) / 2 - 2.75 / 7 * $DvtGaugeDefaults$$, 6 / 7 * $DvtGaugeDefaults$$, 2.5 / 7 * $DvtGaugeDefaults$$), 1 == $DvtGaugeKeyboardHandler$$ ? ($DvtRatingGaugeRenderer$$.y = $DvtStatusMeterGaugeIndicator$$.y + ($DvtStatusMeterGaugeIndicator$$.$h$ - $DvtRatingGaugeDefaults$$ / 2) / 2 + .5 / 
      7 * $DvtGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$.y -= $DvtRatingGaugeDefaults$$ / 2 - ($DvtStatusMeterGaugeIndicator$$.$h$ - $DvtRatingGaugeDefaults$$ / 2) / 2, $DvtGaugeEventManager$$ = $DvtGaugeDataUtils$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1) : ($DvtStatusMeterGaugeIndicator$$.y += ($DvtStatusMeterGaugeIndicator$$.$h$ - $DvtRatingGaugeDefaults$$ / 2) / 2, $DvtGaugeEventManager$$ = $DvtGaugeDataUtils$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1), $DvtStatusMeterGaugeIndicator$$.$h$ = 
      $DvtRatingGaugeDefaults$$)) : ($DvtRatingGaugeDefaults$$ = Math.min(2 * $DvtStatusMeterGaugeIndicator$$.$w$, $DvtStatusMeterGaugeIndicator$$.$h$), $DvtGaugeDefaults$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeIndicator$$.$w$ < $DvtStatusMeterGaugeIndicator$$.$h$ && ($DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$.x + $DvtStatusMeterGaugeIndicator$$.$w$ - ($DvtStatusMeterGaugeIndicator$$.$w$ - $DvtRatingGaugeDefaults$$ / 2) / 
      2 - 3.25 / 7 * $DvtGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$.y + $DvtStatusMeterGaugeIndicator$$.$h$ / 2 - 2.5 / 7 * $DvtGaugeDefaults$$, 3 / 7 * $DvtGaugeDefaults$$, 5 / 7 * $DvtGaugeDefaults$$), !$DvtStatusMeterGaugeCircularIndicator$$ && 4 == $DvtGaugeKeyboardHandler$$ || $DvtStatusMeterGaugeCircularIndicator$$ && 2 == $DvtGaugeKeyboardHandler$$ ? ($DvtRatingGaugeRenderer$$.x = $DvtStatusMeterGaugeIndicator$$.x + ($DvtStatusMeterGaugeIndicator$$.$w$ - $DvtRatingGaugeDefaults$$ / 2) / 
      2 + .25 / 7 * $DvtGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$.x -= $DvtRatingGaugeDefaults$$ / 2 - ($DvtStatusMeterGaugeIndicator$$.$w$ - $DvtRatingGaugeDefaults$$ / 2) / 2, $DvtDialGaugeRenderer$$ = $DvtLedGaugeDefaults$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1) : ($DvtStatusMeterGaugeIndicator$$.x += ($DvtStatusMeterGaugeIndicator$$.$w$ - $DvtRatingGaugeDefaults$$ / 2) / 2, $DvtDialGaugeRenderer$$ = $DvtLedGaugeDefaults$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1), $DvtStatusMeterGaugeIndicator$$.$w$ = 
      $DvtRatingGaugeDefaults$$)) : $DvtStatusMeterGaugeDefaults$$ % 4 + 1 == $DvtGaugeKeyboardHandler$$ && $DvtDialGaugeIndicator$$ > Math.PI && (1 == $DvtGaugeKeyboardHandler$$ && $DvtStatusMeterGaugeIndicator$$.$h$ > $DvtStatusMeterGaugeIndicator$$.$w$ ? ($DvtRatingGaugeDefaults$$ = Math.min($DvtStatusMeterGaugeIndicator$$.$w$ / (Math.cos($DvtRatingGaugeDefaults$$) + 1) * 2, $DvtStatusMeterGaugeIndicator$$.$w$ / (Math.sin($DvtDialGaugeDefaults$$ - 1.5 * Math.PI) + 1) * 2, $DvtStatusMeterGaugeIndicator$$.$h$), 
      $DvtGaugeDefaults$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtRatingGaugePeer$$ = 3 / 7 * $DvtGaugeDefaults$$ * (2 * $DvtStatusMeterGaugeIndicator$$.$w$ / $DvtRatingGaugeDefaults$$ - 1), $DvtStatusMeterGaugeCircularIndicator$$ ? ($DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$.x + $DvtStatusMeterGaugeIndicator$$.$w$ - $DvtRatingGaugeDefaults$$ / 2 - $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeIndicator$$.y + $DvtStatusMeterGaugeIndicator$$.$h$ / 
      2 - 2.5 / 7 * $DvtGaugeDefaults$$, 3 / 7 * $DvtGaugeDefaults$$ + $DvtRatingGaugePeer$$, 5 / 7 * $DvtGaugeDefaults$$), $DvtStatusMeterGaugeIndicator$$.x -= $DvtRatingGaugeDefaults$$ - $DvtStatusMeterGaugeIndicator$$.$w$, $DvtDialGaugeRenderer$$ = -$DvtRatingGaugeDefaults$$ / 2 + $DvtLedGaugeDefaults$$) : ($DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$.x + $DvtRatingGaugeDefaults$$ / 2 - 3 / 7 * $DvtGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$.y + $DvtStatusMeterGaugeIndicator$$.$h$ / 
      2 - 2.5 / 7 * $DvtGaugeDefaults$$, 3 / 7 * $DvtGaugeDefaults$$ * (1 + (2 * $DvtStatusMeterGaugeIndicator$$.$w$ / $DvtRatingGaugeDefaults$$ - 1)), 5 / 7 * $DvtGaugeDefaults$$), $DvtDialGaugeRenderer$$ = $DvtRatingGaugeDefaults$$ / 2), $DvtStatusMeterGaugeIndicator$$.$w$ = $DvtRatingGaugeDefaults$$) : 2 == $DvtGaugeKeyboardHandler$$ && $DvtStatusMeterGaugeIndicator$$.$h$ < $DvtStatusMeterGaugeIndicator$$.$w$ ? ($DvtRatingGaugeDefaults$$ = Math.min($DvtStatusMeterGaugeIndicator$$.$h$ / (Math.cos($DvtRatingGaugeDefaults$$ - 
      $dvt$$4$$.Math.$HALF_PI$) + 1) * 2, $DvtStatusMeterGaugeIndicator$$.$h$ / (Math.sin($DvtDialGaugeDefaults$$) + 1) * 2, $DvtStatusMeterGaugeIndicator$$.$w$), $DvtGaugeDefaults$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$.x + $DvtStatusMeterGaugeIndicator$$.$w$ / 2 - 3 / 7 * $DvtGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$.y + $DvtRatingGaugeDefaults$$ / 2 - 2.5 / 7 * $DvtGaugeDefaults$$, 6 / 7 * 
      $DvtGaugeDefaults$$, 2.5 / 7 * $DvtGaugeDefaults$$ * (1 + (2 * $DvtStatusMeterGaugeIndicator$$.$h$ / $DvtRatingGaugeDefaults$$ - 1))), $DvtStatusMeterGaugeIndicator$$.$h$ = $DvtRatingGaugeDefaults$$, $DvtGaugeEventManager$$ = $DvtRatingGaugeDefaults$$ / 2) : 3 == $DvtGaugeKeyboardHandler$$ && $DvtStatusMeterGaugeIndicator$$.$h$ > $DvtStatusMeterGaugeIndicator$$.$w$ ? ($DvtRatingGaugeDefaults$$ = Math.min($DvtStatusMeterGaugeIndicator$$.$w$ / (Math.cos($DvtRatingGaugeDefaults$$ - Math.PI) + 
      1) * 2, $DvtStatusMeterGaugeIndicator$$.$w$ / (Math.sin($DvtDialGaugeDefaults$$ - $dvt$$4$$.Math.$HALF_PI$) + 1) * 2, $DvtStatusMeterGaugeIndicator$$.$h$), $DvtGaugeDefaults$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtRatingGaugePeer$$ = 3 / 7 * $DvtGaugeDefaults$$ * (2 * $DvtStatusMeterGaugeIndicator$$.$w$ / $DvtRatingGaugeDefaults$$ - 1), $DvtStatusMeterGaugeCircularIndicator$$ ? ($DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$.x + $DvtRatingGaugeDefaults$$ / 
      2 - 3 / 7 * $DvtGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$.y + $DvtStatusMeterGaugeIndicator$$.$h$ / 2 - 2.5 / 7 * $DvtGaugeDefaults$$, 3 / 7 * $DvtGaugeDefaults$$ * (1 + (2 * $DvtStatusMeterGaugeIndicator$$.$w$ / $DvtRatingGaugeDefaults$$ - 1)), 5 / 7 * $DvtGaugeDefaults$$), $DvtDialGaugeRenderer$$ = $DvtRatingGaugeDefaults$$ / 2) : ($DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$.x + $DvtStatusMeterGaugeIndicator$$.$w$ - $DvtRatingGaugeDefaults$$ / 
      2 - $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeIndicator$$.y + $DvtStatusMeterGaugeIndicator$$.$h$ / 2 - 2.5 / 7 * $DvtGaugeDefaults$$, 3 / 7 * $DvtGaugeDefaults$$ + $DvtRatingGaugePeer$$, 5 / 7 * $DvtGaugeDefaults$$), $DvtStatusMeterGaugeIndicator$$.x -= $DvtRatingGaugeDefaults$$ - $DvtStatusMeterGaugeIndicator$$.$w$, $DvtDialGaugeRenderer$$ = -$DvtRatingGaugeDefaults$$ / 2 + $DvtLedGaugeDefaults$$), $DvtStatusMeterGaugeIndicator$$.$w$ = $DvtRatingGaugeDefaults$$) : 4 == $DvtGaugeKeyboardHandler$$ && 
      $DvtStatusMeterGaugeIndicator$$.$h$ < $DvtStatusMeterGaugeIndicator$$.$w$ && ($DvtRatingGaugeDefaults$$ = Math.min($DvtStatusMeterGaugeIndicator$$.$h$ / (Math.cos($DvtRatingGaugeDefaults$$ - 1.5 * Math.PI) + 1) * 2, $DvtStatusMeterGaugeIndicator$$.$h$ / (Math.sin($dvt$$4$$.Math.$TWO_PI$ - $DvtDialGaugeDefaults$$) + 1) * 2, $DvtStatusMeterGaugeIndicator$$.$w$), $DvtGaugeDefaults$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtRatingGaugePeer$$ = 2.5 / 7 * $DvtGaugeDefaults$$ * (2 * 
      $DvtStatusMeterGaugeIndicator$$.$h$ / $DvtRatingGaugeDefaults$$ - 1), $DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$.x + $DvtStatusMeterGaugeIndicator$$.$w$ / 2 - 3 / 7 * $DvtGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$.y + $DvtStatusMeterGaugeIndicator$$.$h$ - $DvtRatingGaugeDefaults$$ / 2 - $DvtRatingGaugePeer$$, 6 / 7 * $DvtGaugeDefaults$$, 2.5 / 7 * $DvtGaugeDefaults$$ + $DvtRatingGaugePeer$$), $DvtStatusMeterGaugeIndicator$$.y -= $DvtRatingGaugeDefaults$$ - 
      $DvtStatusMeterGaugeIndicator$$.$h$, $DvtStatusMeterGaugeIndicator$$.$h$ = $DvtRatingGaugeDefaults$$, $DvtGaugeEventManager$$ = -$DvtRatingGaugeDefaults$$ / 2 + $DvtGaugeDataUtils$$));
    }
    $DvtRatingGaugeEventManager$$.$cx$ = $DvtDialGaugeRenderer$$;
    $DvtRatingGaugeEventManager$$.$cy$ = $DvtGaugeEventManager$$;
    $DvtRatingGaugeEventManager$$.$maxInnerDiameter$ = $DvtGaugeDefaults$$;
    return $DvtRatingGaugeRenderer$$;
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderCenterContent$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderCenterContent$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    var $DvtStatusMeterGaugeIndicator$$ = new $dvt$$4$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + .5 * ($DvtRatingGaugeDefaults$$.$w$ - $DvtDialGaugeDefaults$$), $DvtRatingGaugeDefaults$$.y + .5 * ($DvtRatingGaugeDefaults$$.$h$ - $DvtDialGaugeDefaults$$), $DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$), $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeIndicator$$.$getIntersection$($DvtDialGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$ = new $dvt$$4$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + .5 * ($DvtRatingGaugeDefaults$$.$w$ - $DvtDialGaugeDefaults$$ / Math.sqrt(2)), $DvtRatingGaugeDefaults$$.y + .5 * ($DvtRatingGaugeDefaults$$.$h$ - $DvtDialGaugeDefaults$$ / Math.sqrt(2)), $DvtDialGaugeDefaults$$ / Math.sqrt(2), $DvtDialGaugeDefaults$$ / Math.sqrt(2));
    $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.$getIntersection$($DvtDialGaugeIndicator$$);
    if ($DvtDialGaugeIndicator$$ = $DvtRatingGaugePeer$$.center.renderer) {
      if ($DvtRatingGaugeDefaults$$ = {outerBounds:{x:$DvtStatusMeterGaugeIndicator$$.x, y:$DvtStatusMeterGaugeIndicator$$.y, width:$DvtStatusMeterGaugeIndicator$$.$w$, height:$DvtStatusMeterGaugeIndicator$$.$h$}, innerBounds:{x:$DvtRatingGaugeDefaults$$.x, y:$DvtRatingGaugeDefaults$$.y, width:$DvtRatingGaugeDefaults$$.$w$, height:$DvtRatingGaugeDefaults$$.$h$}, metricLabel:$DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtRatingGaugePeer$$.value, $DvtRatingGaugeEventManager$$), component:$DvtRatingGaugePeer$$._widgetConstructor}, 
      $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugePeer$$.$_parentDiv$, ($DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$centerDiv$) && $DvtStatusMeterGaugeIndicator$$.removeChild($DvtDialGaugeDefaults$$), $DvtRatingGaugeDefaults$$ = $DvtDialGaugeIndicator$$($DvtRatingGaugeDefaults$$)) {
        $DvtDialGaugeIndicator$$ = $DvtRatingGaugePeer$$.$createOverlayDiv$(), $DvtDialGaugeIndicator$$.appendChild($DvtRatingGaugeDefaults$$), $DvtRatingGaugeEventManager$$.$centerDiv$ = $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeIndicator$$.appendChild($DvtDialGaugeIndicator$$), ($DvtRatingGaugeEventManager$$ = $DvtRatingGaugePeer$$.$_overlayAttachedCallback$) && $DvtRatingGaugeEventManager$$($DvtDialGaugeIndicator$$);
      }
    }
  };
  $dvt$$4$$.$Obj$.$createSubclass$($DvtStatusMeterGaugeIndicator$$, $dvt$$4$$.$Path$);
  $DvtStatusMeterGaugeIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeIndicator$$$$Init$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    $DvtStatusMeterGaugeIndicator$$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$);
    this.$_gauge$ = $dvt$$4$$;
    this.$setCoords$($DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$);
  };
  $DvtStatusMeterGaugeIndicator$$.prototype.$setCoords$ = function $$DvtStatusMeterGaugeIndicator$$$$$setCoords$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    this.$_x1$ = $DvtRatingGaugeEventManager$$;
    this.$_x2$ = $DvtRatingGaugePeer$$;
    this.$_y1$ = $DvtRatingGaugeDefaults$$;
    this.$_y2$ = $DvtDialGaugeIndicator$$;
    var $DvtDialGaugeDefaults$$ = Math.min($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$), $DvtStatusMeterGaugeIndicator$$ = Math.min($DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    $DvtRatingGaugeEventManager$$ = Math.abs($DvtRatingGaugeEventManager$$ - $DvtRatingGaugePeer$$);
    $DvtRatingGaugeDefaults$$ = Math.abs($DvtDialGaugeIndicator$$ - $DvtRatingGaugeDefaults$$);
    $DvtDialGaugeIndicator$$ = this.$_gauge$.$getOptions$();
    $DvtRatingGaugePeer$$ = "vertical" == $DvtDialGaugeIndicator$$.orientation ? $DvtRatingGaugeEventManager$$ : $DvtRatingGaugeDefaults$$;
    var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtGaugeDefaults$$.$isSkyrosSkin$(this.$_gauge$) ? "25%" : "15%", $DvtDialGaugeDefaults$$ = $dvt$$4$$.$PathUtils$.$rectangleWithBorderRadius$($DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$.borderRadius, $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeCircularIndicator$$);
    this.$setCmds$($DvtDialGaugeDefaults$$);
  };
  $DvtStatusMeterGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$getAnimationParams$$() {
    return [this.$_x1$, this.$_x2$, this.$_y1$, this.$_y2$];
  };
  $DvtStatusMeterGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$setAnimationParams$$($dvt$$4$$) {
    $dvt$$4$$ && 4 == $dvt$$4$$.length && this.$setCoords$($dvt$$4$$[0], $dvt$$4$$[1], $dvt$$4$$[2], $dvt$$4$$[3]);
  };
  $dvt$$4$$.$Obj$.$createSubclass$($DvtStatusMeterGaugeCircularIndicator$$, $dvt$$4$$.$Path$);
  $DvtStatusMeterGaugeCircularIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeCircularIndicator$$$$Init$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    $DvtStatusMeterGaugeCircularIndicator$$.$superclass$.Init.call(this, $dvt$$4$$);
    this.$setPath$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$);
  };
  $DvtStatusMeterGaugeCircularIndicator$$.prototype.$setPath$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$setPath$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    $DvtRatingGaugeEventManager$$ && $DvtRatingGaugeEventManager$$ instanceof $dvt$$4$$.$Rectangle$ ? this.$_bounds$ = $DvtRatingGaugeEventManager$$ : $DvtRatingGaugeEventManager$$ = this.$_bounds$;
    this.$_startAngle$ = $DvtRatingGaugePeer$$;
    this.$_angleExtent$ = $DvtRatingGaugeDefaults$$;
    this.$_innerRadius$ = $DvtDialGaugeIndicator$$;
    this.$_outerRadius$ = $DvtDialGaugeDefaults$$;
    this.$setCmds$($DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$));
  };
  $DvtStatusMeterGaugeCircularIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$getAnimationParams$$() {
    return [this.$_bounds$, this.$_startAngle$, this.$_angleExtent$, this.$_innerRadius$, this.$_outerRadius$];
  };
  $DvtStatusMeterGaugeCircularIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$setAnimationParams$$($dvt$$4$$) {
    $dvt$$4$$ && 5 == $dvt$$4$$.length && this.$setPath$($dvt$$4$$[0], $dvt$$4$$[1], $dvt$$4$$[2], $dvt$$4$$[3], $dvt$$4$$[4]);
  };
  $dvt$$4$$.$DialGauge$ = function $$dvt$$4$$$$DialGauge$$() {
  };
  $dvt$$4$$.$Obj$.$createSubclass$($dvt$$4$$.$DialGauge$, $DvtGauge$$);
  $dvt$$4$$.$DialGauge$.newInstance = function $$dvt$$4$$$$DialGauge$$newInstance$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = new $dvt$$4$$.$DialGauge$;
    $DvtDialGaugeIndicator$$.Init($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    return $DvtDialGaugeIndicator$$;
  };
  $dvt$$4$$.$DialGauge$.prototype.Init = function $$dvt$$4$$$$DialGauge$$$Init$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $dvt$$4$$.$DialGauge$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    this.$Defaults$ = new $DvtDialGaugeDefaults$$;
    this.$__anchorPt$ = null;
  };
  $dvt$$4$$.$DialGauge$.prototype.$SetOptions$ = function $$dvt$$4$$$$DialGauge$$$$SetOptions$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.background, $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.indicator;
    "string" === typeof $DvtRatingGaugePeer$$ && ($DvtRatingGaugeEventManager$$.background = $DvtGaugeStyleUtils$$.$getDialBackground$($DvtRatingGaugePeer$$), $DvtRatingGaugeEventManager$$.background.images = $DvtRatingGaugeEventManager$$._backgroundImages);
    "string" === typeof $DvtRatingGaugeDefaults$$ && ($DvtRatingGaugeEventManager$$.indicator = $DvtGaugeStyleUtils$$.$getDialIndicator$($DvtRatingGaugeDefaults$$), $DvtRatingGaugeEventManager$$.indicator.images = $DvtRatingGaugeEventManager$$._indicatorImages);
    $dvt$$4$$.$DialGauge$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($DvtRatingGaugeEventManager$$));
  };
  $dvt$$4$$.$DialGauge$.prototype.$Render$ = function $$dvt$$4$$$$DialGauge$$$$Render$$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    $DvtDialGaugeRenderer$$.$render$(this, $dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$);
  };
  $dvt$$4$$.$DialGauge$.prototype.$renderUpdate$ = function $$dvt$$4$$$$DialGauge$$$$renderUpdate$$() {
    $DvtDialGaugeRenderer$$.$updateIndicatorAndLabel$(this, this.$_container$, this.$Width$, this.$Height$);
    var $dvt$$4$$ = this.$getEventManager$();
    $dvt$$4$$ && $dvt$$4$$.$associate$(this.$_editingOverlay$, this.$__getLogicalObject$(), !0);
    this.$UpdateAriaLiveValue$(this.$_container$);
  };
  $dvt$$4$$.$DialGauge$.prototype.$CreateAnimationOnDisplay$ = function $$dvt$$4$$$$DialGauge$$$$CreateAnimationOnDisplay$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $DvtRatingGaugePeer$$ = [];
    for (var $DvtDialGaugeIndicator$$ = 0;$DvtDialGaugeIndicator$$ < $DvtRatingGaugeEventManager$$.length;$DvtDialGaugeIndicator$$++) {
      var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$[$DvtDialGaugeIndicator$$], $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeDefaults$$.$getAnimationParams$(), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeRenderer$$.$__getStartAngle$(this);
      $DvtDialGaugeDefaults$$.$setAngle$($DvtStatusMeterGaugeCircularIndicator$$);
      $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$4$$.$CustomAnimation$(this.$getCtx$(), $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$);
      $DvtStatusMeterGaugeCircularIndicator$$.$_animator$.$addProp$($dvt$$4$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$.$getAnimationParams$, $DvtDialGaugeDefaults$$.$setAnimationParams$, $DvtStatusMeterGaugeIndicator$$);
      $DvtStatusMeterGaugeCircularIndicator$$.$_animator$.$setEasing$(function($DvtRatingGaugeEventManager$$) {
        return $dvt$$4$$.$Easing$.$backOut$($DvtRatingGaugeEventManager$$, .7);
      });
      $DvtRatingGaugePeer$$.push($DvtStatusMeterGaugeCircularIndicator$$);
    }
    return new $dvt$$4$$.$ParallelPlayable$(this.$getCtx$(), $DvtRatingGaugePeer$$);
  };
  $dvt$$4$$.$DialGauge$.prototype.$GetValueAt$ = function $$dvt$$4$$$$DialGauge$$$$GetValueAt$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $dvt$$4$$.Math.$radsToDegrees$(Math.atan2($DvtRatingGaugePeer$$ - this.$__anchorPt$.y, $DvtRatingGaugeEventManager$$ - this.$__anchorPt$.x));
    0 >= $DvtRatingGaugeDefaults$$ && ($DvtRatingGaugeDefaults$$ += 360);
    var $DvtDialGaugeIndicator$$ = $dvt$$4$$.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtDialGaugeDefaults$$ = this.$getOptions$().background, $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeIndicator$$ ? 180 + $DvtDialGaugeDefaults$$.startAngle : 360 - $DvtDialGaugeDefaults$$.startAngle, $DvtDialGaugeDefaults$$ = $DvtDialGaugeDefaults$$.angleExtent, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtStatusMeterGaugeIndicator$$ + $DvtDialGaugeDefaults$$;
    if ($DvtDialGaugeIndicator$$) {
      for ($DvtStatusMeterGaugeCircularIndicator$$ = $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeIndicator$$ -= $DvtDialGaugeDefaults$$;0 > $DvtStatusMeterGaugeIndicator$$;) {
        $DvtStatusMeterGaugeIndicator$$ += 360, $DvtStatusMeterGaugeCircularIndicator$$ += 360;
      }
    }
    $DvtRatingGaugeDefaults$$ + 360 >= $DvtStatusMeterGaugeIndicator$$ && $DvtRatingGaugeDefaults$$ + 360 <= $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtRatingGaugeDefaults$$ += 360 : $DvtRatingGaugeDefaults$$ >= $DvtStatusMeterGaugeIndicator$$ && $DvtRatingGaugeDefaults$$ <= $DvtStatusMeterGaugeCircularIndicator$$ || ($DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$ > $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtStatusMeterGaugeIndicator$$ + 360 - $DvtRatingGaugeDefaults$$ < $DvtRatingGaugeDefaults$$ - 
    $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtStatusMeterGaugeIndicator$$ : $DvtStatusMeterGaugeCircularIndicator$$ : $DvtStatusMeterGaugeIndicator$$ - $DvtRatingGaugeDefaults$$ < $DvtRatingGaugeDefaults$$ + 360 - $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtStatusMeterGaugeIndicator$$ : $DvtStatusMeterGaugeCircularIndicator$$);
    $DvtRatingGaugeDefaults$$ = ($DvtRatingGaugeDefaults$$ - $DvtStatusMeterGaugeIndicator$$) / $DvtDialGaugeDefaults$$;
    $DvtDialGaugeIndicator$$ && ($DvtRatingGaugeDefaults$$ = 1 - $DvtRatingGaugeDefaults$$);
    $DvtDialGaugeIndicator$$ = this.$Options$.min;
    return $DvtRatingGaugeDefaults$$ * (this.$Options$.max - $DvtDialGaugeIndicator$$) + $DvtDialGaugeIndicator$$;
  };
  $dvt$$4$$.$Obj$.$createSubclass$($DvtDialGaugeDefaults$$, $DvtGaugeDefaults$$);
  $DvtDialGaugeDefaults$$.$VERSION_1$ = {background:{startAngle:180, angleExtent:180, indicatorLength:.7}, metricLabel:{style:new $dvt$$4$$.$CSSStyle$($dvt$$4$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}, tickLabel:{scaling:"auto", style:new $dvt$$4$$.$CSSStyle$($dvt$$4$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}};
  var $DvtDialGaugeRenderer$$ = {};
  $dvt$$4$$.$Obj$.$createSubclass$($DvtDialGaugeRenderer$$, $dvt$$4$$.$Obj$);
  $DvtDialGaugeRenderer$$.$render$ = function $$DvtDialGaugeRenderer$$$$render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    $DvtGaugeDataUtils$$.$hasData$($DvtRatingGaugeEventManager$$) ? ($DvtRatingGaugeDefaults$$ = new $dvt$$4$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$), $DvtDialGaugeRenderer$$.$_renderShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$), $DvtDialGaugeRenderer$$.$_renderLabel$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$)) : $DvtGaugeRenderer$$.$renderEmptyText$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, 
    new $dvt$$4$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$));
  };
  $DvtDialGaugeRenderer$$.$updateIndicatorAndLabel$ = function $$DvtDialGaugeRenderer$$$$updateIndicatorAndLabel$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    $DvtRatingGaugeEventManager$$.$__indicatorContainer$.$setAngle$($DvtDialGaugeRenderer$$.$_getRotation$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getOptions$().value));
    $DvtRatingGaugePeer$$.removeChild($DvtRatingGaugeEventManager$$.$__label$);
    $DvtDialGaugeRenderer$$.$_renderLabel$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, new $dvt$$4$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$));
  };
  $DvtDialGaugeRenderer$$.$_renderShape$ = function $$DvtDialGaugeRenderer$$$$_renderShape$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeRenderer$$.$_createBackground$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtStatusMeterGaugeIndicator$$);
    $DvtDialGaugeDefaults$$.background.majorTickCount && $DvtDialGaugeDefaults$$.background.radius && $DvtDialGaugeRenderer$$.$_renderTickLabels$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    var $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeRenderer$$.$_createIndicator$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$), $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$4$$.$Container$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtRatingGaugeRenderer$$ = new $DvtDialGaugeIndicator$$($DvtRatingGaugeEventManager$$.$getCtx$());
    $DvtRatingGaugePeer$$.$addChild$($DvtStatusMeterGaugeCircularIndicator$$);
    $DvtStatusMeterGaugeCircularIndicator$$.$addChild$($DvtRatingGaugeRenderer$$);
    $DvtRatingGaugeRenderer$$.$addChild$($DvtStatusMeterGaugeIndicator$$);
    var $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeIndicator$$.$getDimensions$(), $DvtDialGaugeDefaults$$ = $DvtDialGaugeRenderer$$.$_getRotation$($DvtRatingGaugeEventManager$$, $DvtDialGaugeDefaults$$.value);
    $DvtRatingGaugePeer$$ = $DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    var $DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$($DvtRatingGaugeEventManager$$, $DvtGaugeKeyboardHandler$$);
    $DvtRatingGaugeDefaults$$ = $DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$, $DvtGaugeKeyboardHandler$$);
    $DvtGaugeKeyboardHandler$$ = new $dvt$$4$$.$Matrix$;
    $DvtGaugeKeyboardHandler$$.translate(-$DvtStatusMeterGaugeDefaults$$.x, -$DvtStatusMeterGaugeDefaults$$.y);
    $DvtGaugeKeyboardHandler$$.scale($DvtRatingGaugeDefaults$$, $DvtRatingGaugeDefaults$$);
    $DvtStatusMeterGaugeIndicator$$.$setMatrix$($DvtGaugeKeyboardHandler$$);
    $DvtRatingGaugeRenderer$$.$setAngle$($DvtDialGaugeDefaults$$);
    $DvtGaugeKeyboardHandler$$ = new $dvt$$4$$.$Matrix$;
    $DvtGaugeKeyboardHandler$$.translate($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y);
    $DvtStatusMeterGaugeCircularIndicator$$.$setMatrix$($DvtGaugeKeyboardHandler$$);
    $DvtRatingGaugeEventManager$$.$__shapes$.push($DvtRatingGaugeRenderer$$);
    $DvtRatingGaugeEventManager$$.$__indicatorContainer$ = $DvtRatingGaugeRenderer$$;
    $DvtRatingGaugeEventManager$$.$__anchorPt$ = $DvtRatingGaugePeer$$;
  };
  $DvtDialGaugeRenderer$$.$_createBackground$ = function $$DvtDialGaugeRenderer$$$$_createBackground$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$().background, $DvtDialGaugeIndicator$$ = $dvt$$4$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtDialGaugeDefaults$$ = $dvt$$4$$.$Agent$.$isTouchDevice$(), $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeDefaults$$ ? 2 * $DvtRatingGaugePeer$$.$w$ : $DvtRatingGaugePeer$$.$w$, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeDefaults$$ ? 2 * $DvtRatingGaugePeer$$.$h$ : $DvtRatingGaugePeer$$.$h$, 
    $DvtRatingGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.images;
    if ($DvtRatingGaugeRenderer$$ && 0 < $DvtRatingGaugeRenderer$$.length) {
      var $DvtGaugeKeyboardHandler$$, $DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$, $DvtDialGaugeDefaults$$ = [];
      for ($DvtGaugeKeyboardHandler$$ = 0;$DvtGaugeKeyboardHandler$$ < $DvtRatingGaugeRenderer$$.length;$DvtGaugeKeyboardHandler$$++) {
        var $DvtStatusMeterGaugeRenderer$$ = "rtl" == $DvtRatingGaugeRenderer$$[$DvtGaugeKeyboardHandler$$].dir;
        $DvtDialGaugeIndicator$$ && $DvtStatusMeterGaugeRenderer$$ ? $DvtDialGaugeDefaults$$.push($DvtRatingGaugeRenderer$$[$DvtGaugeKeyboardHandler$$]) : $DvtDialGaugeIndicator$$ || $DvtStatusMeterGaugeRenderer$$ || $DvtDialGaugeDefaults$$.push($DvtRatingGaugeRenderer$$[$DvtGaugeKeyboardHandler$$]);
      }
      $DvtRatingGaugeRenderer$$ = 0 < $DvtDialGaugeDefaults$$.length ? $DvtDialGaugeDefaults$$ : $DvtRatingGaugeRenderer$$;
      for ($DvtGaugeKeyboardHandler$$ = 0;$DvtGaugeKeyboardHandler$$ < $DvtRatingGaugeRenderer$$.length;$DvtGaugeKeyboardHandler$$++) {
        var $DvtGaugeDataUtils$$ = $DvtRatingGaugeRenderer$$[$DvtGaugeKeyboardHandler$$], $DvtStatusMeterGaugeRenderer$$ = $DvtGaugeDataUtils$$.src, $DvtDialGaugeDefaults$$ = $DvtGaugeDataUtils$$.width, $DvtGaugeDataUtils$$ = $DvtGaugeDataUtils$$.height, $DvtDialGaugeRenderer$$ = $DvtStatusMeterGaugeRenderer$$ && -1 < $DvtStatusMeterGaugeRenderer$$.search(".svg");
        0 == $DvtGaugeKeyboardHandler$$ && ($DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeDefaults$$, $DvtLedGaugeDefaults$$ = $DvtGaugeDataUtils$$);
        if ($DvtDialGaugeRenderer$$ || $DvtDialGaugeDefaults$$ >= $DvtStatusMeterGaugeIndicator$$ && $DvtGaugeDataUtils$$ >= $DvtStatusMeterGaugeCircularIndicator$$ || $DvtGaugeKeyboardHandler$$ == $DvtRatingGaugeRenderer$$.length - 1) {
          var $DvtStatusMeterGaugeIndicator$$ = new $dvt$$4$$.Image($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeRenderer$$, 0, 0, $DvtDialGaugeDefaults$$, $DvtGaugeDataUtils$$), $DvtGaugeDefaults$$ = new $dvt$$4$$.$Matrix$, $DvtStatusMeterGaugeCircularIndicator$$ = Math.min($DvtRatingGaugePeer$$.$w$ / $DvtDialGaugeDefaults$$, $DvtRatingGaugePeer$$.$h$ / $DvtGaugeDataUtils$$), $DvtRatingGaugeRenderer$$ = ($DvtRatingGaugePeer$$.$w$ - $DvtStatusMeterGaugeCircularIndicator$$ * $DvtDialGaugeDefaults$$) / 
          2;
          $DvtGaugeKeyboardHandler$$ = ($DvtRatingGaugePeer$$.$h$ - $DvtStatusMeterGaugeCircularIndicator$$ * $DvtGaugeDataUtils$$) / 2;
          $DvtGaugeDefaults$$.scale($DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$);
          $DvtGaugeDefaults$$.translate($DvtRatingGaugeRenderer$$, $DvtGaugeKeyboardHandler$$);
          $DvtStatusMeterGaugeIndicator$$.$setMatrix$($DvtGaugeDefaults$$);
          $DvtDialGaugeRenderer$$ && $dvt$$4$$.$Agent$.$isPlatformWebkit$() && ($DvtStatusMeterGaugeRenderer$$ = $dvt$$4$$.$ImageLoader$.$loadImage$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeRenderer$$, $dvt$$4$$.$Obj$.$createCallback$($DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeIndicator$$.$__setDimensions$))) && $DvtStatusMeterGaugeIndicator$$.$__setDimensions$($DvtStatusMeterGaugeRenderer$$);
          $DvtRatingGaugePeer$$.x += $DvtRatingGaugeRenderer$$;
          $DvtRatingGaugePeer$$.y += $DvtGaugeKeyboardHandler$$;
          $DvtRatingGaugePeer$$.$w$ = $DvtStatusMeterGaugeCircularIndicator$$ * $DvtDialGaugeDefaults$$;
          $DvtRatingGaugePeer$$.$h$ = $DvtStatusMeterGaugeCircularIndicator$$ * $DvtGaugeDataUtils$$;
          isNaN($DvtRatingGaugeDefaults$$.anchorX) || isNaN($DvtRatingGaugeDefaults$$.anchorY) || ($DvtRatingGaugeDefaults$$._anchorX = $DvtDialGaugeIndicator$$ ? $DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ - $DvtRatingGaugePeer$$.$w$ * $DvtRatingGaugeDefaults$$.anchorX / $DvtStatusMeterGaugeDefaults$$ : $DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ * $DvtRatingGaugeDefaults$$.anchorX / $DvtStatusMeterGaugeDefaults$$, $DvtRatingGaugeDefaults$$._anchorY = $DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$ * 
          $DvtRatingGaugeDefaults$$.anchorY / $DvtLedGaugeDefaults$$);
          $DvtRatingGaugeDefaults$$.metricLabelBounds && ($DvtDialGaugeDefaults$$ = {}, $DvtDialGaugeDefaults$$.width = $DvtRatingGaugePeer$$.$w$ * $DvtRatingGaugeDefaults$$.metricLabelBounds.width / $DvtStatusMeterGaugeDefaults$$, $DvtDialGaugeDefaults$$.height = $DvtRatingGaugePeer$$.$h$ * $DvtRatingGaugeDefaults$$.metricLabelBounds.height / $DvtLedGaugeDefaults$$, $DvtDialGaugeDefaults$$.y = $DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$ * $DvtRatingGaugeDefaults$$.metricLabelBounds.y / $DvtLedGaugeDefaults$$, 
          $DvtDialGaugeDefaults$$.x = $DvtDialGaugeIndicator$$ ? $DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ - $DvtRatingGaugePeer$$.$w$ * $DvtRatingGaugeDefaults$$.metricLabelBounds.x / $DvtStatusMeterGaugeDefaults$$ - $DvtDialGaugeDefaults$$.width : $DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ * $DvtRatingGaugeDefaults$$.metricLabelBounds.x / $DvtStatusMeterGaugeDefaults$$, $DvtRatingGaugeDefaults$$._metricLabelBounds = $DvtDialGaugeDefaults$$);
          $DvtRatingGaugeDefaults$$._radius = $DvtRatingGaugeDefaults$$.radius * Math.min($DvtRatingGaugePeer$$.$w$ / $DvtStatusMeterGaugeDefaults$$, $DvtRatingGaugePeer$$.$h$ / $DvtLedGaugeDefaults$$);
          $DvtRatingGaugeDefaults$$._tickLabelHeight = $DvtRatingGaugeDefaults$$.tickLabelHeight * $DvtRatingGaugePeer$$.$h$ / $DvtLedGaugeDefaults$$;
          $DvtRatingGaugeDefaults$$._tickLabelWidth = $DvtRatingGaugeDefaults$$.tickLabelWidth * $DvtRatingGaugePeer$$.$w$ / $DvtStatusMeterGaugeDefaults$$;
          return $DvtStatusMeterGaugeIndicator$$;
        }
      }
    }
    return null;
  };
  $DvtDialGaugeRenderer$$.$_createIndicator$ = function $$DvtDialGaugeRenderer$$$$_createIndicator$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$().indicator, $DvtDialGaugeIndicator$$ = $DvtDialGaugeRenderer$$.$_getIndicatorLength$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$), $DvtDialGaugeDefaults$$ = $dvt$$4$$.$Agent$.$isTouchDevice$() ? 2 * $DvtDialGaugeIndicator$$ : $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.images;
    if ($DvtRatingGaugeRenderer$$ && 0 < $DvtRatingGaugeRenderer$$.length) {
      for (var $DvtGaugeKeyboardHandler$$ = 0;$DvtGaugeKeyboardHandler$$ < $DvtRatingGaugeRenderer$$.length;$DvtGaugeKeyboardHandler$$++) {
        var $DvtStatusMeterGaugeDefaults$$ = $DvtRatingGaugeRenderer$$[$DvtGaugeKeyboardHandler$$], $DvtDialGaugeIndicator$$ = $DvtStatusMeterGaugeDefaults$$.src, $DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$.width, $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$.height, $DvtStatusMeterGaugeRenderer$$ = $DvtDialGaugeIndicator$$ && -1 < $DvtDialGaugeIndicator$$.search(".svg");
        0 == $DvtGaugeKeyboardHandler$$ && ($DvtStatusMeterGaugeIndicator$$ = $DvtLedGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtStatusMeterGaugeDefaults$$);
        if ($DvtStatusMeterGaugeRenderer$$ || $DvtStatusMeterGaugeDefaults$$ >= $DvtDialGaugeDefaults$$ || $DvtGaugeKeyboardHandler$$ == $DvtRatingGaugeRenderer$$.length - 1) {
          return $DvtDialGaugeDefaults$$ = new $dvt$$4$$.Image($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeIndicator$$, 0, 0, $DvtLedGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$), $DvtStatusMeterGaugeRenderer$$ && $dvt$$4$$.$Agent$.$isPlatformWebkit$() && $dvt$$4$$.$ImageLoader$.$loadImage$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeIndicator$$, $dvt$$4$$.$Obj$.$createCallback$($DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$.$__setDimensions$)) && ($DvtDialGaugeDefaults$$.$setWidth$($DvtLedGaugeDefaults$$), 
          $DvtDialGaugeDefaults$$.$setHeight$($DvtStatusMeterGaugeDefaults$$)), isNaN($DvtRatingGaugeDefaults$$.anchorX) || isNaN($DvtRatingGaugeDefaults$$.anchorY) || ($DvtRatingGaugeDefaults$$._anchorX = $DvtRatingGaugeDefaults$$.anchorX * $DvtLedGaugeDefaults$$ / $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeDefaults$$._anchorY = $DvtRatingGaugeDefaults$$.anchorY * $DvtStatusMeterGaugeDefaults$$ / $DvtStatusMeterGaugeCircularIndicator$$), $DvtDialGaugeDefaults$$;
        }
      }
    }
    return null;
  };
  $DvtDialGaugeRenderer$$.$__getStartAngle$ = function $$DvtDialGaugeRenderer$$$$__getStartAngle$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$().background;
    $DvtRatingGaugeEventManager$$ = $dvt$$4$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()) ? 180 - $DvtRatingGaugePeer$$.startAngle : $DvtRatingGaugePeer$$.startAngle;
    return Math.PI * (90 - $DvtRatingGaugeEventManager$$) / 180;
  };
  $DvtDialGaugeRenderer$$.$_getRotation$ = function $$DvtDialGaugeRenderer$$$$_getRotation$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.background, $DvtDialGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.min, $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.max;
    $DvtRatingGaugePeer$$ = Math.max(Math.min($DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$), $DvtDialGaugeDefaults$$);
    $DvtDialGaugeDefaults$$ = ($DvtRatingGaugePeer$$ - $DvtDialGaugeDefaults$$) / ($DvtRatingGaugeDefaults$$ - $DvtDialGaugeDefaults$$);
    $DvtRatingGaugeDefaults$$ = $dvt$$4$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$());
    return Math.PI * (90 - (($DvtRatingGaugeDefaults$$ ? 180 - $DvtDialGaugeIndicator$$.startAngle : $DvtDialGaugeIndicator$$.startAngle) - $DvtDialGaugeDefaults$$ * ($DvtRatingGaugeDefaults$$ ? -$DvtDialGaugeIndicator$$.angleExtent : $DvtDialGaugeIndicator$$.angleExtent))) / 180;
  };
  $DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getBackgroundAnchorPoint$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$().background, $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$._anchorX, $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$._anchorY;
    return isNaN($DvtDialGaugeIndicator$$) || isNaN($DvtRatingGaugeDefaults$$) ? new $dvt$$4$$.$Point$($DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ / 2, $DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$ / 2) : new $dvt$$4$$.$Point$($DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$);
  };
  $DvtDialGaugeRenderer$$.$_getIndicatorLength$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorLength$$($dvt$$4$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = Math.min($DvtRatingGaugeEventManager$$.$w$, $DvtRatingGaugeEventManager$$.$h$) / 2;
    return $dvt$$4$$.$getOptions$().background.indicatorLength * $DvtRatingGaugePeer$$;
  };
  $DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorAnchorPoint$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$().indicator, $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$._anchorX, $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$._anchorY;
    return isNaN($DvtDialGaugeIndicator$$) || isNaN($DvtRatingGaugeDefaults$$) ? new $dvt$$4$$.$Point$($DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ / 2, $DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$) : new $dvt$$4$$.$Point$($DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$);
  };
  $DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorScaleFactor$$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    return $DvtDialGaugeRenderer$$.$_getIndicatorLength$($dvt$$4$$, $DvtRatingGaugeEventManager$$) / $DvtRatingGaugePeer$$.$h$;
  };
  $DvtDialGaugeRenderer$$.$_renderLabel$ = function $$DvtDialGaugeRenderer$$$$_renderLabel$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    if ("on" == $DvtDialGaugeIndicator$$.metricLabel.rendered) {
      var $DvtDialGaugeDefaults$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.value, $DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.min, $DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.max, $DvtRatingGaugeEventManager$$), $DvtRatingGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 
      2, $DvtGaugeKeyboardHandler$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2, $DvtStatusMeterGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.$w$, $DvtLedGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.$h$, $DvtStatusMeterGaugeRenderer$$ = $DvtDialGaugeIndicator$$.background._metricLabelBounds;
      $DvtStatusMeterGaugeRenderer$$ && ($DvtRatingGaugeRenderer$$ = $DvtStatusMeterGaugeRenderer$$.x + $DvtStatusMeterGaugeRenderer$$.width / 2, $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeRenderer$$.y + $DvtStatusMeterGaugeRenderer$$.height / 2, $DvtRatingGaugeDefaults$$.$w$ = $DvtStatusMeterGaugeRenderer$$.width, $DvtRatingGaugeDefaults$$.$h$ = $DvtStatusMeterGaugeRenderer$$.height);
      $DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeDefaults$$, $DvtRatingGaugeRenderer$$, $DvtGaugeKeyboardHandler$$);
      !$DvtDialGaugeIndicator$$.metricLabel.style.$getStyle$("color") && $DvtDialGaugeIndicator$$.background._isDark && $DvtDialGaugeIndicator$$.metricLabel.style.$setStyle$("color", "#CCCCCC");
      $DvtRatingGaugeRenderer$$.$setCSSStyle$($DvtDialGaugeIndicator$$.metricLabel.style);
      $DvtDialGaugeIndicator$$ = ($DvtDialGaugeIndicator$$ = parseInt($DvtDialGaugeIndicator$$.metricLabel.style.$getFontSize$())) ? parseInt($DvtDialGaugeIndicator$$) : null;
      $DvtDialGaugeIndicator$$ || ($DvtDialGaugeIndicator$$ = $DvtGaugeRenderer$$.$calcLabelFontSize$([$DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$], $DvtRatingGaugeRenderer$$, $DvtRatingGaugeDefaults$$), $DvtRatingGaugeRenderer$$.$setTextString$($DvtDialGaugeDefaults$$), $DvtRatingGaugeRenderer$$.$setFontSize$($DvtDialGaugeIndicator$$));
      $DvtRatingGaugeRenderer$$.$alignCenter$();
      $DvtRatingGaugeRenderer$$.$alignMiddle$();
      $dvt$$4$$.$TextUtils$.$fitText$($DvtRatingGaugeRenderer$$, $DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$, $DvtRatingGaugePeer$$) && ($DvtRatingGaugeEventManager$$.$__label$ = $DvtRatingGaugeRenderer$$);
    }
  };
  $DvtDialGaugeRenderer$$.$_renderTickLabels$ = function $$DvtDialGaugeRenderer$$$$_renderTickLabels$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeDefaults$$ = $dvt$$4$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$());
    if ($DvtDialGaugeIndicator$$.background.radius && $DvtDialGaugeIndicator$$.background.majorTickCount) {
      var $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeIndicator$$.background._radius, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeIndicator$$.min, $DvtRatingGaugeRenderer$$ = $DvtDialGaugeIndicator$$.max, $DvtGaugeKeyboardHandler$$ = $DvtDialGaugeIndicator$$.background.majorTickCount, $DvtStatusMeterGaugeDefaults$$ = 12, $DvtLedGaugeDefaults$$ = new $dvt$$4$$.$Rectangle$($DvtGaugeDefaults$$, $DvtGaugeEventManager$$, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$), $DvtStatusMeterGaugeRenderer$$ = 
      $DvtDialGaugeIndicator$$.metricLabel.style.$getStyle$("font-size");
      $DvtDialGaugeIndicator$$.background._tickLabelHeight && !$DvtStatusMeterGaugeRenderer$$ && ($DvtLedGaugeDefaults$$.$h$ = $DvtDialGaugeIndicator$$.background._tickLabelHeight);
      $DvtDialGaugeIndicator$$.background._tickLabelWidth && !$DvtStatusMeterGaugeRenderer$$ && ($DvtLedGaugeDefaults$$.$w$ = $DvtDialGaugeIndicator$$.background._tickLabelWidth);
      if (!$DvtStatusMeterGaugeRenderer$$) {
        var $DvtGaugeDataUtils$$ = new $dvt$$4$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), "", $DvtGaugeDefaults$$, $DvtGaugeEventManager$$), $DvtStatusMeterGaugeDefaults$$ = $DvtGaugeRenderer$$.$calcLabelFontSize$([$DvtGaugeRenderer$$.$formatTickLabelValue$($DvtDialGaugeIndicator$$.max, $DvtRatingGaugeEventManager$$), $DvtGaugeRenderer$$.$formatTickLabelValue$($DvtDialGaugeIndicator$$.min, $DvtRatingGaugeEventManager$$)], $DvtGaugeDataUtils$$, $DvtLedGaugeDefaults$$)
      }
      for ($DvtStatusMeterGaugeRenderer$$ = 0;$DvtStatusMeterGaugeRenderer$$ < $DvtGaugeKeyboardHandler$$;$DvtStatusMeterGaugeRenderer$$++) {
        var $DvtGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$ + Math.abs($DvtRatingGaugeRenderer$$ - $DvtStatusMeterGaugeCircularIndicator$$) * $DvtStatusMeterGaugeRenderer$$ / ($DvtGaugeKeyboardHandler$$ - 1);
        $DvtDialGaugeDefaults$$ && ($DvtGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$ + Math.abs($DvtRatingGaugeRenderer$$ - $DvtStatusMeterGaugeCircularIndicator$$) * ($DvtGaugeKeyboardHandler$$ - 1 - $DvtStatusMeterGaugeRenderer$$) / ($DvtGaugeKeyboardHandler$$ - 1));
        var $DvtGaugeDataUtils$$ = $DvtGaugeRenderer$$.$formatTickLabelValue$($DvtGaugeDefaults$$, $DvtRatingGaugeEventManager$$), $DvtGaugeEventManager$$ = $DvtDialGaugeRenderer$$.$_getRotation$($DvtRatingGaugeEventManager$$, $DvtGaugeDefaults$$), $DvtGaugeAutomation$$ = $DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$), $DvtGaugeDefaults$$ = $DvtGaugeAutomation$$.x + $DvtStatusMeterGaugeIndicator$$ * Math.cos($DvtGaugeEventManager$$ - 
        Math.PI / 2), $DvtGaugeEventManager$$ = $DvtGaugeAutomation$$.y + $DvtStatusMeterGaugeIndicator$$ * Math.sin($DvtGaugeEventManager$$ - Math.PI / 2), $DvtGaugeDataUtils$$ = new $dvt$$4$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeDataUtils$$, $DvtGaugeDefaults$$, $DvtGaugeEventManager$$);
        !$DvtDialGaugeIndicator$$.tickLabel.style.$getStyle$("color") && $DvtDialGaugeIndicator$$.background._isDark && $DvtDialGaugeIndicator$$.tickLabel.style.$setStyle$("color", "#CCCCCC");
        $DvtGaugeDataUtils$$.$setCSSStyle$($DvtDialGaugeIndicator$$.tickLabel.style);
        $DvtDialGaugeIndicator$$.tickLabel.style.$getStyle$("font-size") || $DvtGaugeDataUtils$$.$setFontSize$($DvtStatusMeterGaugeDefaults$$);
        $DvtGaugeDataUtils$$.$alignCenter$();
        $DvtGaugeDataUtils$$.$alignMiddle$();
        $dvt$$4$$.$TextUtils$.$fitText$($DvtGaugeDataUtils$$, $DvtLedGaugeDefaults$$.$w$ + .5, $DvtLedGaugeDefaults$$.$h$ + .5, $DvtRatingGaugePeer$$);
      }
    }
  };
  $dvt$$4$$.$Obj$.$createSubclass$($DvtDialGaugeIndicator$$, $dvt$$4$$.$Container$);
  $DvtDialGaugeIndicator$$.prototype.$setAngle$ = function $$DvtDialGaugeIndicator$$$$$setAngle$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = new $dvt$$4$$.$Matrix$;
    $DvtRatingGaugePeer$$.rotate($DvtRatingGaugeEventManager$$);
    this.$setMatrix$($DvtRatingGaugePeer$$);
    this.$_angleRads$ = $DvtRatingGaugeEventManager$$;
  };
  $DvtDialGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$getAnimationParams$$() {
    return [this.$_angleRads$];
  };
  $DvtDialGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$setAnimationParams$$($dvt$$4$$) {
    $dvt$$4$$ && 1 == $dvt$$4$$.length && this.$setAngle$($dvt$$4$$[0]);
  };
  $dvt$$4$$.$RatingGauge$ = function $$dvt$$4$$$$RatingGauge$$() {
  };
  $dvt$$4$$.$Obj$.$createSubclass$($dvt$$4$$.$RatingGauge$, $DvtGauge$$);
  $dvt$$4$$.$RatingGauge$.newInstance = function $$dvt$$4$$$$RatingGauge$$newInstance$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = new $dvt$$4$$.$RatingGauge$;
    $DvtDialGaugeIndicator$$.Init($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    return $DvtDialGaugeIndicator$$;
  };
  $dvt$$4$$.$RatingGauge$.prototype.Init = function $$dvt$$4$$$$RatingGauge$$$Init$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$) {
    $dvt$$4$$.$RatingGauge$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$);
    this.$Defaults$ = new $DvtRatingGaugeDefaults$$;
  };
  $dvt$$4$$.$RatingGauge$.prototype.$SetOptions$ = function $$dvt$$4$$$$RatingGauge$$$$SetOptions$$($DvtRatingGaugeEventManager$$) {
    $dvt$$4$$.$RatingGauge$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($DvtRatingGaugeEventManager$$));
  };
  $dvt$$4$$.$RatingGauge$.prototype.$Render$ = function $$dvt$$4$$$$RatingGauge$$$$Render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = this.$Options$.__layout.outerGap, $DvtDialGaugeDefaults$$ = this.$Options$.max, $DvtStatusMeterGaugeIndicator$$ = "vertical" == this.$Options$.orientation, $DvtStatusMeterGaugeCircularIndicator$$ = "none" != this.$Options$.preserveAspectRatio;
    this.$Options$.selectedState.source && $DvtStatusMeterGaugeCircularIndicator$$ ? $dvt$$4$$.$ImageLoader$.$loadImage$(this.$getCtx$(), this.$Options$.selectedState.source, $dvt$$4$$.$Obj$.$createCallback$(this, function($DvtStatusMeterGaugeCircularIndicator$$) {
      $dvt$$4$$.$Agent$.$isPlatformIE$() && 11 == $dvt$$4$$.$Agent$.$getVersion$() && $DvtStatusMeterGaugeCircularIndicator$$ && 0 == $DvtStatusMeterGaugeCircularIndicator$$.width && 0 == $DvtStatusMeterGaugeCircularIndicator$$.height && ($DvtStatusMeterGaugeCircularIndicator$$.width = 1, $DvtStatusMeterGaugeCircularIndicator$$.height = 1);
      $DvtStatusMeterGaugeCircularIndicator$$ && $DvtStatusMeterGaugeCircularIndicator$$.width && $DvtStatusMeterGaugeCircularIndicator$$.height && ($DvtStatusMeterGaugeCircularIndicator$$ = $DvtStatusMeterGaugeCircularIndicator$$.width / $DvtStatusMeterGaugeCircularIndicator$$.height, this.$__shapeWidth$ = $DvtStatusMeterGaugeIndicator$$ ? Math.min($DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$, ($DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$) * $DvtStatusMeterGaugeCircularIndicator$$ / 
      $DvtDialGaugeDefaults$$) : Math.min(($DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$) * $DvtStatusMeterGaugeCircularIndicator$$, ($DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$) / $DvtDialGaugeDefaults$$), this.$__shapeHeight$ = this.$__shapeWidth$ / $DvtStatusMeterGaugeCircularIndicator$$, this.$__bounds$ = $DvtStatusMeterGaugeIndicator$$ ? new $dvt$$4$$.$Rectangle$($DvtDialGaugeIndicator$$, ($DvtRatingGaugeDefaults$$ - this.$__shapeHeight$ * $DvtDialGaugeDefaults$$) / 2, $DvtRatingGaugePeer$$ - 
      2 * $DvtDialGaugeIndicator$$, this.$__shapeHeight$ * $DvtDialGaugeDefaults$$) : new $dvt$$4$$.$Rectangle$(($DvtRatingGaugePeer$$ - this.$__shapeWidth$ * $DvtDialGaugeDefaults$$) / 2, $DvtDialGaugeIndicator$$, this.$__shapeWidth$ * $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$), $DvtRatingGaugeRenderer$$.$render$(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$));
    })) : ($DvtStatusMeterGaugeCircularIndicator$$ ? this.$__shapeHeight$ = this.$__shapeWidth$ = $DvtStatusMeterGaugeIndicator$$ ? Math.min($DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$, ($DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$) / $DvtDialGaugeDefaults$$) : Math.min($DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$, ($DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$) / $DvtDialGaugeDefaults$$) : (this.$__shapeWidth$ = $DvtStatusMeterGaugeIndicator$$ ? $DvtRatingGaugePeer$$ - 
    2 * $DvtDialGaugeIndicator$$ : ($DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$) / $DvtDialGaugeDefaults$$, this.$__shapeHeight$ = $DvtStatusMeterGaugeIndicator$$ ? ($DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$) / $DvtDialGaugeDefaults$$ : $DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$), this.$__bounds$ = $DvtStatusMeterGaugeIndicator$$ ? new $dvt$$4$$.$Rectangle$($DvtDialGaugeIndicator$$, ($DvtRatingGaugeDefaults$$ - this.$__shapeHeight$ * $DvtDialGaugeDefaults$$) / 
    2, $DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$, this.$__shapeHeight$ * $DvtDialGaugeDefaults$$) : new $dvt$$4$$.$Rectangle$(($DvtRatingGaugePeer$$ - this.$__shapeWidth$ * $DvtDialGaugeDefaults$$) / 2, $DvtDialGaugeIndicator$$, this.$__shapeWidth$ * $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$), $DvtRatingGaugeRenderer$$.$render$(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$));
  };
  $dvt$$4$$.$RatingGauge$.prototype.$__getLogicalObject$ = function $$dvt$$4$$$$RatingGauge$$$$__getLogicalObject$$() {
    var $DvtRatingGaugeEventManager$$ = this.$Options$.tooltip, $DvtRatingGaugeEventManager$$ = $DvtRatingGaugeEventManager$$ ? $DvtRatingGaugeEventManager$$.renderer : null, $DvtRatingGaugeDefaults$$ = $DvtGaugeStyleUtils$$.$getColor$(this);
    if ($DvtRatingGaugeEventManager$$) {
      var $DvtDialGaugeIndicator$$ = {component:this.$Options$._widgetConstructor, label:$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), color:$DvtRatingGaugeDefaults$$};
      return new $dvt$$4$$.$CustomDatatipPeer$(this.$getCtx$().$getTooltipManager$(), $DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    }
    return new $DvtRatingGaugePeer$$(this);
  };
  $dvt$$4$$.$RatingGauge$.prototype.$GetValueAt$ = function $$dvt$$4$$$$RatingGauge$$$$GetValueAt$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = "vertical" == this.$Options$.orientation ? this.$__shapeHeight$ : this.$__shapeWidth$;
    if ($DvtGaugeDataUtils$$.$hasData$(this)) {
      if ("vertical" == this.$Options$.orientation) {
        $DvtRatingGaugePeer$$ = Math.max(Math.min($DvtRatingGaugePeer$$, this.$__bounds$.y + this.$__bounds$.$h$), this.$__bounds$.y), $DvtDialGaugeIndicator$$ = Math.max((this.$__bounds$.y + this.$__bounds$.$h$ - $DvtRatingGaugePeer$$) / $DvtRatingGaugeDefaults$$, this.$Options$.min);
      } else {
        $DvtRatingGaugeEventManager$$ = Math.max(Math.min($DvtRatingGaugeEventManager$$, this.$__bounds$.x + this.$__bounds$.$w$), this.$__bounds$.x);
        var $DvtDialGaugeIndicator$$ = 0, $DvtDialGaugeIndicator$$ = $dvt$$4$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? Math.max((this.$__bounds$.x + this.$__bounds$.$w$ - $DvtRatingGaugeEventManager$$) / $DvtRatingGaugeDefaults$$, this.$Options$.min) : Math.max(($DvtRatingGaugeEventManager$$ - this.$__bounds$.x) / $DvtRatingGaugeDefaults$$, this.$Options$.min);
      }
      return $DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, $DvtDialGaugeIndicator$$);
    }
    return null;
  };
  $dvt$$4$$.$RatingGauge$.prototype.$__processHoverEnd$ = function $$dvt$$4$$$$RatingGauge$$$$__processHoverEnd$$() {
    this.$__updateClipRects$(this.$Options$.value, "render");
    this.dispatchEvent($dvt$$4$$.$EventFactory$.$newValueChangeEvent$(this.$Options$.value, this.$Options$.value, !1));
  };
  $dvt$$4$$.$RatingGauge$.prototype.$__processValueChangeStart$ = function $$dvt$$4$$$$RatingGauge$$$$__processValueChangeStart$$($dvt$$4$$, $DvtRatingGaugeEventManager$$) {
    this.$__processValueChangeMove$($dvt$$4$$, $DvtRatingGaugeEventManager$$);
  };
  $dvt$$4$$.$RatingGauge$.prototype.$__processValueChangeMove$ = function $$dvt$$4$$$$RatingGauge$$$$__processValueChangeMove$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = this.$GetValueAt$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$);
    this.$__updateClipRects$($DvtRatingGaugeDefaults$$, "hover");
    this.dispatchEvent($dvt$$4$$.$EventFactory$.$newValueChangeEvent$(this.$Options$.value, $DvtRatingGaugeDefaults$$, !1));
  };
  $dvt$$4$$.$RatingGauge$.prototype.$__processValueChangeEnd$ = function $$dvt$$4$$$$RatingGauge$$$$__processValueChangeEnd$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = this.$Options$.value;
    this.$Options$.value = this.$GetValueAt$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$);
    this.$Options$.changed = !0;
    this.$render$();
    this.dispatchEvent($dvt$$4$$.$EventFactory$.$newValueChangeEvent$($DvtRatingGaugeDefaults$$, this.$Options$.value, !1));
    this.dispatchEvent($dvt$$4$$.$EventFactory$.$newValueChangeEvent$($DvtRatingGaugeDefaults$$, this.$Options$.value, !0));
  };
  $dvt$$4$$.$RatingGauge$.prototype.$__updateClipRects$ = function $$dvt$$4$$$$RatingGauge$$$$__updateClipRects$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    if ($DvtGaugeDataUtils$$.$hasData$(this)) {
      $DvtRatingGaugeDefaults$$ || ($DvtRatingGaugeDefaults$$ = this.$_container$);
      var $DvtDialGaugeIndicator$$ = $dvt$$4$$.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtDialGaugeDefaults$$ = "vertical" == this.$Options$.orientation, $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeDefaults$$ ? this.$__shapeHeight$ : this.$__shapeWidth$;
      $DvtRatingGaugeEventManager$$ = Math.max(Math.min($DvtRatingGaugeEventManager$$, this.$Options$.max), 0);
      var $DvtStatusMeterGaugeCircularIndicator$$ = 0, $DvtRatingGaugeRenderer$$ = $DvtRatingGaugeEventManager$$ * $DvtStatusMeterGaugeIndicator$$, $DvtGaugeKeyboardHandler$$ = $DvtRatingGaugeEventManager$$ * $DvtStatusMeterGaugeIndicator$$;
      "render" == $DvtRatingGaugePeer$$ && ($DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$ * $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeRenderer$$ = 0);
      if ($DvtDialGaugeDefaults$$) {
        if ($DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(0), $DvtDialGaugeIndicator$$ = new $dvt$$4$$.$ClipPath$, $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x, this.$__bounds$.y, this.$__bounds$.$w$, this.$__bounds$.$h$ - $DvtGaugeKeyboardHandler$$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(1), $DvtDialGaugeIndicator$$ = new $dvt$$4$$.$ClipPath$, $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x, 
        this.$__bounds$.y + this.$__bounds$.$h$ - $DvtStatusMeterGaugeCircularIndicator$$, this.$__bounds$.$w$, $DvtStatusMeterGaugeCircularIndicator$$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(2)) {
          $DvtRatingGaugePeer$$ = new $dvt$$4$$.$ClipPath$, $DvtRatingGaugePeer$$.$addRect$(this.$__bounds$.x, this.$__bounds$.y + this.$__bounds$.$h$ - $DvtRatingGaugeRenderer$$, this.$__bounds$.$w$, $DvtRatingGaugeRenderer$$), $DvtStatusMeterGaugeCircularIndicator$$.$setClipPath$($DvtRatingGaugePeer$$);
        }
      } else {
        if ($DvtDialGaugeIndicator$$) {
          if ($DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(0), $DvtDialGaugeIndicator$$ = new $dvt$$4$$.$ClipPath$, $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x, this.$__bounds$.y, this.$__bounds$.$w$ - $DvtGaugeKeyboardHandler$$, this.$__bounds$.$h$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(1), $DvtDialGaugeIndicator$$ = new $dvt$$4$$.$ClipPath$, $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x + 
          this.$__bounds$.$w$ - $DvtGaugeKeyboardHandler$$, this.$__bounds$.y, $DvtStatusMeterGaugeCircularIndicator$$, this.$__bounds$.$h$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(2)) {
            $DvtRatingGaugePeer$$ = new $dvt$$4$$.$ClipPath$, $DvtRatingGaugePeer$$.$addRect$(this.$__bounds$.x + this.$__bounds$.$w$ - $DvtGaugeKeyboardHandler$$, this.$__bounds$.y, $DvtRatingGaugeRenderer$$, this.$__bounds$.$h$), $DvtStatusMeterGaugeCircularIndicator$$.$setClipPath$($DvtRatingGaugePeer$$);
          }
        } else {
          if ($DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(0), $DvtDialGaugeIndicator$$ = new $dvt$$4$$.$ClipPath$, $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x + $DvtGaugeKeyboardHandler$$, this.$__bounds$.y, this.$__bounds$.$w$ - $DvtGaugeKeyboardHandler$$, this.$__bounds$.$h$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(1), $DvtDialGaugeIndicator$$ = new $dvt$$4$$.$ClipPath$, $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x, 
          this.$__bounds$.y, $DvtStatusMeterGaugeCircularIndicator$$, this.$__bounds$.$h$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(2)) {
            $DvtRatingGaugePeer$$ = new $dvt$$4$$.$ClipPath$, $DvtRatingGaugePeer$$.$addRect$(this.$__bounds$.x, this.$__bounds$.y, $DvtRatingGaugeRenderer$$, this.$__bounds$.$h$), $DvtStatusMeterGaugeCircularIndicator$$.$setClipPath$($DvtRatingGaugePeer$$);
          }
        }
      }
      this.$UpdateAriaLiveValue$($DvtRatingGaugeDefaults$$, $DvtRatingGaugeEventManager$$);
    }
  };
  $dvt$$4$$.$RatingGauge$.prototype.$__getRatingGaugeItem$ = function $$dvt$$4$$$$RatingGauge$$$$__getRatingGaugeItem$$($dvt$$4$$) {
    return this.$_container$.$getChildAt$(0).$getChildAt$($dvt$$4$$);
  };
  $dvt$$4$$.$RatingGauge$.prototype.$CreateEventManager$ = function $$dvt$$4$$$$RatingGauge$$$$CreateEventManager$$() {
    return new $DvtRatingGaugeEventManager$$(this);
  };
  $dvt$$4$$.$Obj$.$createSubclass$($DvtRatingGaugeDefaults$$, $DvtGaugeDefaults$$);
  $DvtRatingGaugeDefaults$$.$SKIN_ALTA$ = {unselectedState:{shape:"star", color:"#C4CED7", borderColor:null}, selectedState:{shape:"star", color:"#F8C15A", borderColor:null}, hoverState:{shape:"star", color:"#007CC8", borderColor:null}, changedState:{shape:"star", color:"#ED2C02", borderColor:null}};
  $DvtRatingGaugeDefaults$$.$VERSION_1$ = {min:0, max:5, orientation:"horizontal", unselectedState:{shape:"star", color:"#F2F2F2", borderColor:"#B6B6B6"}, selectedState:{shape:"star", color:"#F8C15A", borderColor:"#F5A700"}, hoverState:{shape:"star", color:"#66A7DA", borderColor:"#4A86C5"}, changedState:{shape:"star", color:"#F8C15A", borderColor:"#959595"}, preserveAspectRatio:"meet", step:1};
  $dvt$$4$$.$Obj$.$createSubclass$($DvtRatingGaugePeer$$, $dvt$$4$$.$SimpleObjPeer$);
  $DvtRatingGaugePeer$$.prototype.$getDatatip$ = function $$DvtRatingGaugePeer$$$$$getDatatip$$($dvt$$4$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    $dvt$$4$$ = this.$_gauge$.$getOptions$();
    $DvtRatingGaugeEventManager$$ = this.$_gauge$.$getEventManager$().$IsMouseEditing$ ? $DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$, this.$_gauge$.$GetValueAt$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$)) : $DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$);
    return ($DvtRatingGaugeEventManager$$ = $DvtGaugeDataUtils$$.$getThreshold$(this.$_gauge$, $DvtRatingGaugeEventManager$$)) && $DvtRatingGaugeEventManager$$.shortDesc ? $DvtRatingGaugeEventManager$$.shortDesc : $dvt$$4$$.shortDesc;
  };
  var $DvtRatingGaugeRenderer$$ = {};
  $dvt$$4$$.$Obj$.$createSubclass$($DvtRatingGaugeRenderer$$, $dvt$$4$$.$Obj$);
  $DvtRatingGaugeRenderer$$.$render$ = function $$DvtRatingGaugeRenderer$$$$render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    if ($DvtGaugeDataUtils$$.$hasData$($DvtRatingGaugeEventManager$$)) {
      $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
      $DvtDialGaugeIndicator$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($DvtRatingGaugeEventManager$$);
      $DvtDialGaugeIndicator$$ = $DvtGaugeDataUtils$$.$getThreshold$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$);
      var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.selectedState.color, $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.changedState.color, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeDefaults$$.selectedState.borderColor, $DvtGaugeKeyboardHandler$$ = $DvtRatingGaugeDefaults$$.changedState.borderColor;
      $DvtDialGaugeIndicator$$ && $DvtDialGaugeIndicator$$.color && ($DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeDefaults$$ = $DvtDialGaugeIndicator$$.color);
      $DvtDialGaugeIndicator$$ && $DvtDialGaugeIndicator$$.borderColor && ($DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeIndicator$$.borderColor);
      $DvtDialGaugeIndicator$$ = {value:0, type:$DvtRatingGaugeDefaults$$.unselectedState.shape, color:$DvtRatingGaugeDefaults$$.unselectedState.color, borderColor:$DvtRatingGaugeDefaults$$.unselectedState.borderColor, visualEffects:$DvtRatingGaugeDefaults$$.visualEffects, source:$DvtRatingGaugeDefaults$$.unselectedState.source, className:$DvtRatingGaugeDefaults$$.unselectedState.className, style:$DvtRatingGaugeDefaults$$.unselectedState.style};
      $DvtDialGaugeDefaults$$ = {value:0, type:$DvtRatingGaugeDefaults$$.selectedState.shape, color:$DvtDialGaugeDefaults$$, borderColor:$DvtStatusMeterGaugeCircularIndicator$$, visualEffects:$DvtRatingGaugeDefaults$$.visualEffects, source:$DvtRatingGaugeDefaults$$.selectedState.source, className:$DvtRatingGaugeDefaults$$.selectedState.className, style:$DvtRatingGaugeDefaults$$.selectedState.style};
      $DvtStatusMeterGaugeIndicator$$ = {value:0, type:$DvtRatingGaugeDefaults$$.changedState.shape, color:$DvtStatusMeterGaugeIndicator$$, borderColor:$DvtGaugeKeyboardHandler$$, visualEffects:$DvtRatingGaugeDefaults$$.visualEffects, source:$DvtRatingGaugeDefaults$$.changedState.source, className:$DvtRatingGaugeDefaults$$.changedState.className, style:$DvtRatingGaugeDefaults$$.changedState.style};
      $DvtGaugeKeyboardHandler$$ = {value:0, type:$DvtRatingGaugeDefaults$$.hoverState.shape, color:$DvtRatingGaugeDefaults$$.hoverState.color, borderColor:$DvtRatingGaugeDefaults$$.hoverState.borderColor, visualEffects:$DvtRatingGaugeDefaults$$.visualEffects, source:$DvtRatingGaugeDefaults$$.hoverState.source, className:$DvtRatingGaugeDefaults$$.hoverState.className, style:$DvtRatingGaugeDefaults$$.hoverState.style};
      "dot" == $DvtRatingGaugeDefaults$$.unselectedState.shape && ($DvtDialGaugeIndicator$$.type = "circle", $DvtDialGaugeIndicator$$.visualEffects = "none", $DvtDialGaugeIndicator$$.size = .05);
      $DvtRatingGaugeRenderer$$.$_createShapes$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$);
      $DvtRatingGaugeRenderer$$.$_createShapes$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$.changed ? $DvtStatusMeterGaugeIndicator$$ : $DvtDialGaugeDefaults$$);
      $DvtRatingGaugeDefaults$$.readOnly || $DvtRatingGaugeRenderer$$.$_createShapes$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtGaugeKeyboardHandler$$);
      $DvtRatingGaugeEventManager$$.$__updateClipRects$($DvtRatingGaugeDefaults$$.value, "render", $DvtRatingGaugePeer$$);
    } else {
      $DvtGaugeRenderer$$.$renderEmptyText$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, new $dvt$$4$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$));
    }
  };
  $DvtRatingGaugeRenderer$$.$_createShapes$ = function $$DvtRatingGaugeRenderer$$$$_createShapes$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeDefaults$$ = new $dvt$$4$$.$Container$($DvtDialGaugeIndicator$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtDialGaugeDefaults$$);
    $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    var $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$__bounds$, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$.$__shapeWidth$;
    $DvtRatingGaugeEventManager$$ = $DvtRatingGaugeEventManager$$.$__shapeHeight$;
    var $DvtRatingGaugeRenderer$$;
    $DvtRatingGaugeDefaults$$.source ? ($DvtRatingGaugeRenderer$$ = new $dvt$$4$$.$ImageMarker$($DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$ / 2, $DvtRatingGaugeEventManager$$ / 2, $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeEventManager$$, null, $DvtRatingGaugeDefaults$$.source), $DvtRatingGaugeRenderer$$.$setPreserveAspectRatio$("none")) : "none" != $DvtRatingGaugeDefaults$$.type && ($DvtRatingGaugeRenderer$$ = $dvt$$4$$.$LedGauge$.newInstance($DvtDialGaugeIndicator$$, 
    null, null, !0), $DvtRatingGaugeRenderer$$.$render$($DvtRatingGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeEventManager$$));
    for ($DvtRatingGaugeDefaults$$ = 0;$DvtRatingGaugeDefaults$$ < $DvtRatingGaugePeer$$.max;$DvtRatingGaugeDefaults$$++) {
      var $DvtGaugeKeyboardHandler$$, $DvtStatusMeterGaugeDefaults$$;
      "vertical" == $DvtRatingGaugePeer$$.orientation ? ($DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeIndicator$$.x + $DvtStatusMeterGaugeIndicator$$.$w$ / 2 - $DvtStatusMeterGaugeCircularIndicator$$ / 2, $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeIndicator$$.y + $DvtStatusMeterGaugeIndicator$$.$h$ - ($DvtRatingGaugeDefaults$$ + 1) * $DvtRatingGaugeEventManager$$) : ($DvtGaugeKeyboardHandler$$ = $dvt$$4$$.$Agent$.$isRightToLeft$($DvtDialGaugeIndicator$$) ? $DvtStatusMeterGaugeIndicator$$.x + 
      $DvtStatusMeterGaugeIndicator$$.$w$ - ($DvtRatingGaugeDefaults$$ + 1) * $DvtStatusMeterGaugeCircularIndicator$$ : $DvtStatusMeterGaugeIndicator$$.x + $DvtRatingGaugeDefaults$$ * $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeIndicator$$.y + $DvtStatusMeterGaugeIndicator$$.$h$ / 2 - $DvtRatingGaugeEventManager$$ / 2);
      $DvtRatingGaugeRenderer$$ && ($DvtRatingGaugeRenderer$$.$setClassName$($DvtRatingGaugePeer$$.className), $DvtRatingGaugeRenderer$$.$setStyle$($DvtRatingGaugePeer$$.style), $DvtGaugeKeyboardHandler$$ = new $dvt$$4$$.$Use$($DvtDialGaugeIndicator$$, $DvtGaugeKeyboardHandler$$, $DvtStatusMeterGaugeDefaults$$, $DvtRatingGaugeRenderer$$), $DvtDialGaugeDefaults$$.$addChild$($DvtGaugeKeyboardHandler$$));
    }
  };
  $dvt$$4$$.$Obj$.$createSubclass$($DvtRatingGaugeEventManager$$, $DvtGaugeEventManager$$);
  $DvtRatingGaugeEventManager$$.prototype.$OnMouseOver$ = function $$DvtRatingGaugeEventManager$$$$$OnMouseOver$$($dvt$$4$$) {
    if (!1 === this.$_gauge$.$getOptions$().readOnly) {
      var $DvtRatingGaugePeer$$ = this.$GetRelativePosition$($dvt$$4$$.pageX, $dvt$$4$$.pageY);
      this.$_gauge$.$__processValueChangeStart$($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y);
      this.$IsMouseEditing$ = !0;
    }
    $DvtRatingGaugeEventManager$$.$superclass$.$OnMouseOver$.call(this, $dvt$$4$$);
  };
  $DvtRatingGaugeEventManager$$.prototype.$OnMouseOut$ = function $$DvtRatingGaugeEventManager$$$$$OnMouseOut$$($dvt$$4$$) {
    !1 === this.$_gauge$.$getOptions$().readOnly && (this.$GetRelativePosition$($dvt$$4$$.pageX, $dvt$$4$$.pageY), this.$_gauge$.$__processHoverEnd$(), this.$IsMouseEditing$ = !1);
    $DvtRatingGaugeEventManager$$.$superclass$.$OnMouseOut$.call(this, $dvt$$4$$);
  };
  $DvtRatingGaugeEventManager$$.prototype.$OnMouseMove$ = function $$DvtRatingGaugeEventManager$$$$$OnMouseMove$$($dvt$$4$$) {
    var $DvtRatingGaugePeer$$ = this.$GetRelativePosition$($dvt$$4$$.pageX, $dvt$$4$$.pageY);
    !1 !== this.$_gauge$.$getOptions$().readOnly || this.$IsMouseEditing$ || this.$_gauge$.$getOptions$().value == this.$_gauge$.$GetValueAt$($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y) || (this.$IsMouseEditing$ = !0);
    $DvtRatingGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $dvt$$4$$);
  };
  $DvtRatingGaugeEventManager$$.prototype.$OnMouseDown$ = function $$DvtRatingGaugeEventManager$$$$$OnMouseDown$$($dvt$$4$$) {
    $DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $dvt$$4$$);
  };
  $DvtRatingGaugeEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtRatingGaugeEventManager$$$$$ProcessKeyboardEvent$$($dvt$$4$$) {
    this.$IsMouseEditing$ = !1;
    return $DvtRatingGaugeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $dvt$$4$$);
  };
  $DvtRatingGaugeEventManager$$.prototype.$IsShowingTooltipWhileEditing$ = function $$DvtRatingGaugeEventManager$$$$$IsShowingTooltipWhileEditing$$() {
    return !0;
  };
  $dvt$$4$$.$exportProperty$($dvt$$4$$, "DialGauge", $dvt$$4$$.$DialGauge$);
  $dvt$$4$$.$exportProperty$($dvt$$4$$, "LedGauge", $dvt$$4$$.$LedGauge$);
  $dvt$$4$$.$exportProperty$($dvt$$4$$, "RatingGauge", $dvt$$4$$.$RatingGauge$);
  $dvt$$4$$.$exportProperty$($dvt$$4$$, "StatusMeterGauge", $dvt$$4$$.$StatusMeterGauge$);
  $dvt$$4$$.$exportProperty$($dvt$$4$$.$DialGauge$, "DialGauge", $dvt$$4$$.$DialGauge$);
  $dvt$$4$$.$exportProperty$($dvt$$4$$.$DialGauge$, "LedGauge", $dvt$$4$$.$LedGauge$);
  $dvt$$4$$.$exportProperty$($dvt$$4$$.$DialGauge$, "RatingGauge", $dvt$$4$$.$RatingGauge$);
  $dvt$$4$$.$exportProperty$($dvt$$4$$.$DialGauge$, "StatusMeterGauge", $dvt$$4$$.$StatusMeterGauge$);
  $dvt$$4$$.$exportProperty$($DvtGauge$$.prototype, "getAutomation", $DvtGauge$$.prototype.$getAutomation$);
  $dvt$$4$$.$exportProperty$($DvtGauge$$.prototype, "destroy", $DvtGauge$$.prototype.$destroy$);
  $dvt$$4$$.$exportProperty$($DvtGauge$$.prototype, "render", $DvtGauge$$.prototype.$render$);
  $dvt$$4$$.$exportProperty$($DvtGaugeAutomation$$.prototype, "getDomElementForSubId", $DvtGaugeAutomation$$.prototype.$getDomElementForSubId$);
  $dvt$$4$$.$exportProperty$($DvtGaugeAutomation$$.prototype, "getValue", $DvtGaugeAutomation$$.prototype.getValue);
  $dvt$$4$$.$exportProperty$($DvtGaugeAutomation$$.prototype, "getMetricLabel", $DvtGaugeAutomation$$.prototype.$getMetricLabel$);
  $dvt$$4$$.$LedGaugeRenderer$ = $DvtLedGaugeRenderer$$;
})(dvt);
