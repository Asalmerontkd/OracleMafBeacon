(function($dvt$$13$$) {
  function $DvtTimeAxisParser$$() {
  }
  function $DvtTimeAxisFormatter$$($dvt$$13$$, $DvtTimeAxisParser$$) {
    this.Init($dvt$$13$$, $DvtTimeAxisParser$$);
  }
  function $DvtTimeAxisDefaults$$() {
    this.Init({alta:$DvtTimeAxisDefaults$$.$VERSION_1$});
  }
  function $DvtTimeAxisCalendar$$($dvt$$13$$) {
    this.Init($dvt$$13$$);
  }
  $dvt$$13$$.$TimeAxis$ = function $$dvt$$13$$$$TimeAxis$$($dvt$$13$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$) {
    this.Init($dvt$$13$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$);
  };
  $dvt$$13$$.$Obj$.$createSubclass$($dvt$$13$$.$TimeAxis$, $dvt$$13$$.$BaseComponent$);
  $dvt$$13$$.$TimeAxis$.$ORIENTATION_VERTICAL$ = "vertical";
  $dvt$$13$$.$TimeAxis$.$supportsTouch$ = function $$dvt$$13$$$$TimeAxis$$$supportsTouch$$() {
    return $dvt$$13$$.$Agent$.$isTouchDevice$();
  };
  $dvt$$13$$.$TimeAxis$.$getDatePosition$ = function $$dvt$$13$$$$TimeAxis$$$getDatePosition$$($dvt$$13$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$) {
    $DvtTimeAxisFormatter$$ = ($DvtTimeAxisFormatter$$ - $dvt$$13$$) * $DvtTimeAxisDefaults$$;
    $dvt$$13$$ = $DvtTimeAxisParser$$ - $dvt$$13$$;
    return 0 == $DvtTimeAxisFormatter$$ || 0 == $dvt$$13$$ ? 0 : $DvtTimeAxisFormatter$$ / $dvt$$13$$;
  };
  $dvt$$13$$.$TimeAxis$.$getPositionDate$ = function $$dvt$$13$$$$TimeAxis$$$getPositionDate$$($dvt$$13$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$) {
    $DvtTimeAxisParser$$ = $DvtTimeAxisFormatter$$ * ($DvtTimeAxisParser$$ - $dvt$$13$$);
    return 0 == $DvtTimeAxisParser$$ || 0 == $DvtTimeAxisDefaults$$ ? $dvt$$13$$ : $DvtTimeAxisParser$$ / $DvtTimeAxisDefaults$$ + $dvt$$13$$;
  };
  $dvt$$13$$.$TimeAxis$.newInstance = function $$dvt$$13$$$$TimeAxis$$newInstance$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$) {
    return new $dvt$$13$$.$TimeAxis$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$);
  };
  $dvt$$13$$.$TimeAxis$.$_VALID_SCALES$ = "seconds minutes hours days weeks months quarters years".split(" ");
  $dvt$$13$$.$TimeAxis$.prototype.Init = function $$dvt$$13$$$$TimeAxis$$$Init$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisRenderer$$) {
    $dvt$$13$$.$TimeAxis$.$superclass$.Init.call(this, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisRenderer$$);
    this.$_calendar$ = new $DvtTimeAxisCalendar$$;
    this.$_borderWidth$ = $DvtTimeAxisStyleUtils$$.$DEFAULT_BORDER_WIDTH$;
    this.$setBorderVisibility$(!1, !1, !1, !1);
    this.$_dateToIsoConverter$ = $DvtTimeAxisParser$$.$getLocaleHelpers$().dateToIsoConverter;
    this.$_dateFormatStrings$ = {$dayNames$:[$dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_SUNDAY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_MONDAY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_TUESDAY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_WEDNESDAY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, 
    "DAY_SHORT_THURSDAY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_FRIDAY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_SATURDAY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "DAY_SUNDAY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "DAY_MONDAY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, 
    "DAY_TUESDAY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "DAY_WEDNESDAY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "DAY_THURSDAY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "DAY_FRIDAY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "DAY_SATURDAY", null)], $monthNames$:[$dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, 
    "MONTH_SHORT_JANUARY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_FEBRUARY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_MARCH", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_APRIL", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_MAY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, 
    "MONTH_SHORT_JUNE", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_JULY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_AUGUST", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_SEPTEMBER", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_OCTOBER", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, 
    "MONTH_SHORT_NOVEMBER", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_DECEMBER", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_JANUARY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_FEBRUARY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_MARCH", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, 
    "MONTH_APRIL", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_MAY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_JUNE", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_JULY", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_AUGUST", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SEPTEMBER", 
    null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_OCTOBER", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_NOVEMBER", null), $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "MONTH_DECEMBER", null)]};
    this.$Defaults$ = new $DvtTimeAxisDefaults$$;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$SetOptions$ = function $$dvt$$13$$$$TimeAxis$$$$SetOptions$$($dvt$$13$$) {
    this.$Options$ = this.$Defaults$.$calcOptions$($dvt$$13$$);
  };
  $dvt$$13$$.$TimeAxis$.prototype.$Parse$ = function $$dvt$$13$$$$TimeAxis$$$$Parse$$($dvt$$13$$) {
    this.$_parser$ = new $DvtTimeAxisParser$$;
    return this.$_parser$.parse($dvt$$13$$);
  };
  $dvt$$13$$.$TimeAxis$.prototype.$_applyParsedProperties$ = function $$dvt$$13$$$$TimeAxis$$$$_applyParsedProperties$$($DvtTimeAxisParser$$) {
    var $DvtTimeAxisFormatter$$ = $DvtTimeAxisParser$$.orientation;
    this.$_isVertical$ = $DvtTimeAxisFormatter$$ && $DvtTimeAxisFormatter$$ == $dvt$$13$$.$TimeAxis$.$ORIENTATION_VERTICAL$ ? !0 : !1;
    this.$setIsVertical$(this.$_isVertical$);
    this.$_shortDesc$ = $DvtTimeAxisParser$$.$shortDesc$;
    this.$_zoomOrder$ = $DvtTimeAxisParser$$.$zoomOrder$ ? $DvtTimeAxisParser$$.$zoomOrder$.reverse() : [$DvtTimeAxisParser$$.scale];
    this.$_timeZoneOffsets$ = $DvtTimeAxisParser$$.$timeZoneOffsets$;
    this.$_customTimeScales$ = $DvtTimeAxisParser$$.$customTimeScales$;
    this.$_customFormatScales$ = $DvtTimeAxisParser$$.$customFormatScales$;
    this.$_start$ = $DvtTimeAxisParser$$.start;
    this.$_end$ = $DvtTimeAxisParser$$.end;
    this.$_inlineStyle$ = $DvtTimeAxisParser$$.$inlineStyle$;
    this.$_scale$ = $DvtTimeAxisParser$$.scale;
    this.$_converter$ = $DvtTimeAxisParser$$.$converter$;
    this.$applyStyleValues$();
  };
  $dvt$$13$$.$TimeAxis$.prototype.$setContentLength$ = function $$dvt$$13$$$$TimeAxis$$$$setContentLength$$($dvt$$13$$, $DvtTimeAxisParser$$) {
    if ("undefined" === typeof $DvtTimeAxisParser$$ || null === $DvtTimeAxisParser$$) {
      $DvtTimeAxisParser$$ = this.$_canvasLength$;
    }
    this.$_contentLength$ = $DvtTimeAxisParser$$ < $dvt$$13$$ ? $dvt$$13$$ : $DvtTimeAxisParser$$;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$isRTL$ = function $$dvt$$13$$$$TimeAxis$$$$isRTL$$() {
    return $dvt$$13$$.$Agent$.$isRightToLeft$(this.$getCtx$());
  };
  $dvt$$13$$.$TimeAxis$.prototype.$isVertical$ = function $$dvt$$13$$$$TimeAxis$$$$isVertical$$() {
    return this.$_isVertical$;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$render$ = function $$dvt$$13$$$$TimeAxis$$$$render$$($dvt$$13$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$) {
    $dvt$$13$$ && !this.$Options$ && (this.$Width$ = $DvtTimeAxisParser$$, this.$Height$ = $DvtTimeAxisFormatter$$, this.$_prepareCanvasViewport$(), this.$getPreferredLength$($dvt$$13$$, this.$_canvasLength$));
    this.$_handleResize$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$);
  };
  $dvt$$13$$.$TimeAxis$.prototype.$getPreferredLength$ = function $$dvt$$13$$$$TimeAxis$$$$getPreferredLength$$($dvt$$13$$, $DvtTimeAxisParser$$) {
    this.$SetOptions$($dvt$$13$$);
    this.$_resources$ = this.$Options$._resources;
    null == this.$_resources$ && (this.$_resources$ = []);
    var $DvtTimeAxisFormatter$$ = this.$_resources$.firstDayOfWeek;
    null == $DvtTimeAxisFormatter$$ && ($DvtTimeAxisFormatter$$ = 0);
    this.$_calendar$.$setFirstDayOfWeek$($DvtTimeAxisFormatter$$);
    this.$_dateToIsoConverter$ || (this.$_dateToIsoConverter$ = this.$getCtx$().$getLocaleHelpers$().dateToIsoConverter);
    $DvtTimeAxisFormatter$$ = this.$Parse$(this.$Options$);
    this.$_applyParsedProperties$($DvtTimeAxisFormatter$$);
    this.$_scale$ && this.$prepareTimeAxisZoomLevelIntervals$(this.$_start$, this.$_end$, $DvtTimeAxisParser$$);
    return this.$_contentLength$;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$hasValidOptions$ = function $$dvt$$13$$$$TimeAxis$$$$hasValidOptions$$() {
    var $DvtTimeAxisParser$$ = this.$_scale$ && -1 != $dvt$$13$$.$ArrayUtils$.$getIndex$($dvt$$13$$.$TimeAxis$.$_VALID_SCALES$, this.$_scale$), $DvtTimeAxisFormatter$$ = this.$_scale$ && this.$_customTimeScales$ && this.$_customTimeScales$[this.$_scale$], $DvtTimeAxisDefaults$$ = this.$_start$ && this.$_end$ && this.$_end$ > this.$_start$;
    return ($DvtTimeAxisParser$$ || $DvtTimeAxisFormatter$$) && $DvtTimeAxisDefaults$$;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$GetComponentDescription$ = function $$dvt$$13$$$$TimeAxis$$$$GetComponentDescription$$() {
    return this.$_shortDesc$ ? this.$_shortDesc$ : $dvt$$13$$.$Bundle$.$getTranslatedString$($dvt$$13$$.$Bundle$.$UTIL_PREFIX$, "TIMEAXIS");
  };
  $dvt$$13$$.$TimeAxis$.prototype.$applyStyleValues$ = function $$dvt$$13$$$$TimeAxis$$$$applyStyleValues$$() {
    this.$_axisStyle$ = new $dvt$$13$$.$CSSStyle$($DvtTimeAxisStyleUtils$$.$getAxisStyle$(this.$Options$));
    this.$_axisStyle$.$parseInlineStyle$(this.$_inlineStyle$);
    var $DvtTimeAxisParser$$ = this.$_axisStyle$.$getBorderWidth$();
    this.$_axisStyle$.$parseInlineStyle$("border:" + 2 * $DvtTimeAxisParser$$ + "px;");
    this.$setBorderWidth$($DvtTimeAxisParser$$);
  };
  $dvt$$13$$.$TimeAxis$.prototype.$_prepareCanvasViewport$ = function $$dvt$$13$$$$TimeAxis$$$$_prepareCanvasViewport$$() {
    this.$_isVertical$ ? (this.$_canvasLength$ = this.$Height$, this.$_canvasSize$ = this.$Width$) : (this.$_canvasLength$ = this.$Width$, this.$_canvasSize$ = this.$Height$);
  };
  $dvt$$13$$.$TimeAxis$.prototype.$_setAxisDimensions$ = function $$dvt$$13$$$$TimeAxis$$$$_setAxisDimensions$$() {
    null !== this.$_canvasSize$ && this.$setContentSize$(this.$_canvasSize$ - this.$getSizeBorderWidth$());
    this.$_axisLength$ = this.$_contentLength$ + this.$getSizeBorderWidth$() - $DvtTimeAxisStyleUtils$$.$DEFAULT_SEPARATOR_WIDTH$;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$_updateDimensions$ = function $$dvt$$13$$$$TimeAxis$$$$_updateDimensions$$($dvt$$13$$, $DvtTimeAxisParser$$) {
    this.$Width$ = $dvt$$13$$;
    this.$Height$ = $DvtTimeAxisParser$$;
    this.$_prepareCanvasViewport$();
    this.$setContentLength$(this.$_canvasLength$);
    this.$_setAxisDimensions$();
  };
  $dvt$$13$$.$TimeAxis$.prototype.$_handleResize$ = function $$dvt$$13$$$$TimeAxis$$$$_handleResize$$($dvt$$13$$, $DvtTimeAxisParser$$) {
    this.$_updateDimensions$($dvt$$13$$, $DvtTimeAxisParser$$);
    $DvtTimeAxisRenderer$$.$renderTimeAxis$(this);
  };
  $dvt$$13$$.$TimeAxis$.prototype.$prepareTimeAxisZoomLevelIntervals$ = function $$dvt$$13$$$$TimeAxis$$$$prepareTimeAxisZoomLevelIntervals$$($dvt$$13$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$) {
    this.$setConverter$(this.$_converter$);
    this.$setType$("short", this.$_dateFormatStrings$);
    this.$_dates$ = [];
    this.$_labels$ = [];
    this.$_zoomLevelLengths$ = [];
    this.$_isVertical$ ? this.$setDefaultConverter$(this.$_resources$.converterVert) : this.$setDefaultConverter$(this.$_resources$.converter);
    this.$_timeZoneOffsets$ && this.$setTimeZoneOffsets$(this.$_timeZoneOffsets$);
    for (var $DvtTimeAxisDefaults$$ = this.$_scale$, $DvtTimeAxisCalendar$$ = 0;$DvtTimeAxisCalendar$$ < this.$_zoomOrder$.length;$DvtTimeAxisCalendar$$++) {
      var $DvtTimeAxisRenderer$$ = this.$_zoomOrder$[$DvtTimeAxisCalendar$$], $DvtTimeAxisStyleUtils$$ = this.$_prepareScaleDatesLabels$($DvtTimeAxisRenderer$$, $DvtTimeAxisDefaults$$, $dvt$$13$$, $DvtTimeAxisParser$$);
      this.$_prepareZoomLevelLengths$($DvtTimeAxisCalendar$$, $DvtTimeAxisRenderer$$, $dvt$$13$$, $DvtTimeAxisParser$$, $DvtTimeAxisStyleUtils$$, $DvtTimeAxisFormatter$$);
    }
    this.$setScale$($DvtTimeAxisDefaults$$);
  };
  $dvt$$13$$.$TimeAxis$.prototype.$_prepareScaleDatesLabels$ = function $$dvt$$13$$$$TimeAxis$$$$_prepareScaleDatesLabels$$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$, $DvtTimeAxisCalendar$$) {
    this.$setScale$($DvtTimeAxisParser$$);
    var $DvtTimeAxisRenderer$$ = Infinity, $maxSize$$5$$ = 0, $customFormatScale_customScale_labelTexts$$;
    if (this.$_customTimeScales$ && this.$_customTimeScales$[$DvtTimeAxisParser$$]) {
      $customFormatScale_customScale_labelTexts$$ = this.$_customTimeScales$[$DvtTimeAxisParser$$], $DvtTimeAxisParser$$ = $customFormatScale_customScale_labelTexts$$.times, $customFormatScale_customScale_labelTexts$$ = $customFormatScale_customScale_labelTexts$$.labels;
    } else {
      if (this.$_customFormatScales$ && this.$_customFormatScales$[$DvtTimeAxisParser$$]) {
        $customFormatScale_customScale_labelTexts$$ = this.$_customFormatScales$[$DvtTimeAxisParser$$], $DvtTimeAxisParser$$ = $customFormatScale_customScale_labelTexts$$.times, $customFormatScale_customScale_labelTexts$$ = $customFormatScale_customScale_labelTexts$$.labels;
      } else {
        for ($DvtTimeAxisParser$$ = [], $customFormatScale_customScale_labelTexts$$ = [], $DvtTimeAxisDefaults$$ = this.$adjustDate$($DvtTimeAxisDefaults$$).getTime(), $DvtTimeAxisParser$$.push($DvtTimeAxisDefaults$$);$DvtTimeAxisDefaults$$ < $DvtTimeAxisCalendar$$;) {
          $customFormatScale_customScale_labelTexts$$.push(this.$formatDate$(new Date($DvtTimeAxisDefaults$$))), $DvtTimeAxisDefaults$$ = this.$getNextDate$($DvtTimeAxisDefaults$$).getTime(), $DvtTimeAxisParser$$.push($DvtTimeAxisDefaults$$);
        }
      }
    }
    $DvtTimeAxisCalendar$$ = [];
    for (var $j$$101$$ = 0;$j$$101$$ < $customFormatScale_customScale_labelTexts$$.length;$j$$101$$++) {
      $DvtTimeAxisDefaults$$ = $DvtTimeAxisParser$$[$j$$101$$];
      var $label$$106$$ = new $dvt$$13$$.$OutputText$(this.$getCtx$(), $customFormatScale_customScale_labelTexts$$[$j$$101$$], 0, 0, "s_label" + $DvtTimeAxisDefaults$$);
      $label$$106$$.$setCSSStyle$($DvtTimeAxisStyleUtils$$.$getAxisLabelStyle$(this.$Options$));
      $label$$106$$.time = $DvtTimeAxisDefaults$$;
      var $nextTime$$ = $DvtTimeAxisParser$$[$j$$101$$ + 1];
      this.$addChild$($label$$106$$);
      var $dim$$76_sizeDim$$ = $label$$106$$.$getDimensions$();
      this.removeChild($label$$106$$);
      if (this.$_isVertical$) {
        var $lengthDim$$ = $dim$$76_sizeDim$$.$h$, $dim$$76_sizeDim$$ = $dim$$76_sizeDim$$.$w$, $defaultLength$$ = $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_HEIGHT$
      } else {
        $lengthDim$$ = $dim$$76_sizeDim$$.$w$, $dim$$76_sizeDim$$ = $dim$$76_sizeDim$$.$h$, $defaultLength$$ = $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_WIDTH$;
      }
      $DvtTimeAxisDefaults$$ = ($nextTime$$ - $DvtTimeAxisDefaults$$) / Math.max($defaultLength$$, $lengthDim$$ + 2 * $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_PADDING$);
      $DvtTimeAxisDefaults$$ < $DvtTimeAxisRenderer$$ && ($DvtTimeAxisRenderer$$ = $DvtTimeAxisDefaults$$);
      $dim$$76_sizeDim$$ > $maxSize$$5$$ && ($maxSize$$5$$ = $dim$$76_sizeDim$$);
      $DvtTimeAxisCalendar$$.push($label$$106$$);
    }
    this.$setContentSize$($maxSize$$5$$ + 2 * $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_PADDING$);
    this.$_dates$.push($DvtTimeAxisParser$$);
    this.$_labels$.push($DvtTimeAxisCalendar$$);
    this.$setScale$($DvtTimeAxisFormatter$$);
    return $DvtTimeAxisRenderer$$;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$_prepareZoomLevelLengths$ = function $$dvt$$13$$$$TimeAxis$$$$_prepareZoomLevelLengths$$($dvt$$13$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$, $DvtTimeAxisCalendar$$, $DvtTimeAxisRenderer$$) {
    $DvtTimeAxisFormatter$$ = null !== this.$_canvasSize$ ? $DvtTimeAxisRenderer$$ : ($DvtTimeAxisDefaults$$ - $DvtTimeAxisFormatter$$) / $DvtTimeAxisCalendar$$;
    this.$_zoomLevelLengths$.push($DvtTimeAxisFormatter$$);
    $DvtTimeAxisParser$$ == this.$_scale$ && (this.$_zoomLevelOrder$ = $dvt$$13$$, this.$setContentLength$($DvtTimeAxisFormatter$$, $DvtTimeAxisRenderer$$));
    0 == $dvt$$13$$ && (this.$_maxContentLength$ = this.$_labels$[this.$_labels$.length - 1].length * $DvtTimeAxisRenderer$$);
  };
  $dvt$$13$$.$TimeAxis$.prototype.$setScale$ = function $$dvt$$13$$$$TimeAxis$$$$setScale$$($dvt$$13$$) {
    this.$_scale$ = $dvt$$13$$;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$setTimeZoneOffsets$ = function $$dvt$$13$$$$TimeAxis$$$$setTimeZoneOffsets$$($dvt$$13$$) {
    this.$_timeZoneOffsets$ = $dvt$$13$$;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$increaseScale$ = function $$dvt$$13$$$$TimeAxis$$$$increaseScale$$() {
    for (var $dvt$$13$$ = 0;$dvt$$13$$ < this.$_zoomOrder$.length - 1;$dvt$$13$$++) {
      if (this.$_zoomOrder$[$dvt$$13$$] == this.$_scale$) {
        this.$_scale$ = this.$_zoomOrder$[$dvt$$13$$ + 1];
        break;
      }
    }
  };
  $dvt$$13$$.$TimeAxis$.prototype.$decreaseScale$ = function $$dvt$$13$$$$TimeAxis$$$$decreaseScale$$() {
    for (var $dvt$$13$$ = 1;$dvt$$13$$ < this.$_zoomOrder$.length;$dvt$$13$$++) {
      if (this.$_zoomOrder$[$dvt$$13$$] == this.$_scale$) {
        this.$_scale$ = this.$_zoomOrder$[$dvt$$13$$ - 1];
        break;
      }
    }
  };
  $dvt$$13$$.$TimeAxis$.prototype.$setConverter$ = function $$dvt$$13$$$$TimeAxis$$$$setConverter$$($dvt$$13$$) {
    this.$_converter$ = $dvt$$13$$;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$setDefaultConverter$ = function $$dvt$$13$$$$TimeAxis$$$$setDefaultConverter$$($dvt$$13$$) {
    this.$_defaultConverter$ = $dvt$$13$$;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$setContentSize$ = function $$dvt$$13$$$$TimeAxis$$$$setContentSize$$($dvt$$13$$) {
    $dvt$$13$$ > this.$_contentSize$ && (this.$_contentSize$ = $dvt$$13$$);
  };
  $dvt$$13$$.$TimeAxis$.prototype.$getTimeAxisWidth$ = function $$dvt$$13$$$$TimeAxis$$$$getTimeAxisWidth$$() {
    null == this.$_timeAxisWidth$ && (this.$_timeAxisWidth$ = 30);
    return this.$_timeAxisWidth$;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$setBorderWidth$ = function $$dvt$$13$$$$TimeAxis$$$$setBorderWidth$$($dvt$$13$$) {
    this.$_borderWidth$ = $dvt$$13$$;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$setBorderVisibility$ = function $$dvt$$13$$$$TimeAxis$$$$setBorderVisibility$$($dvt$$13$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$) {
    this.$_borderTopWidth$ = ($dvt$$13$$ | 0) * this.$_borderWidth$;
    this.$_borderRightWidth$ = ($DvtTimeAxisParser$$ | 0) * this.$_borderWidth$;
    this.$_borderBottomWidth$ = ($DvtTimeAxisFormatter$$ | 0) * this.$_borderWidth$;
    this.$_borderLeftWidth$ = ($DvtTimeAxisDefaults$$ | 0) * this.$_borderWidth$;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$calcStrokeDashArray$ = function $$dvt$$13$$$$TimeAxis$$$$calcStrokeDashArray$$() {
    for (var $dvt$$13$$ = this.$_isVertical$ ? {top:this.$getSize$(), right:this.$_axisLength$, bottom:this.$getSize$(), left:this.$_axisLength$} : {top:this.$_axisLength$, right:this.$getSize$(), bottom:this.$_axisLength$, left:this.$getSize$()}, $DvtTimeAxisParser$$ = [], $DvtTimeAxisFormatter$$ = 0, $DvtTimeAxisDefaults$$ = 1, $DvtTimeAxisCalendar$$ = ["top", "right", "bottom", "left"], $DvtTimeAxisRenderer$$ = 0;$DvtTimeAxisRenderer$$ < $DvtTimeAxisCalendar$$.length;$DvtTimeAxisRenderer$$++) {
      0 < this.$getBorderWidth$($DvtTimeAxisCalendar$$[$DvtTimeAxisRenderer$$]) == $DvtTimeAxisDefaults$$ ? $DvtTimeAxisFormatter$$ += $dvt$$13$$[$DvtTimeAxisCalendar$$[$DvtTimeAxisRenderer$$]] : ($DvtTimeAxisParser$$.push($DvtTimeAxisFormatter$$), $DvtTimeAxisFormatter$$ = $dvt$$13$$[$DvtTimeAxisCalendar$$[$DvtTimeAxisRenderer$$]], $DvtTimeAxisDefaults$$ = Math.abs($DvtTimeAxisDefaults$$ - 1));
    }
    $DvtTimeAxisParser$$.push($DvtTimeAxisFormatter$$);
    return $DvtTimeAxisParser$$.toString();
  };
  $dvt$$13$$.$TimeAxis$.prototype.$getSizeBorderWidth$ = function $$dvt$$13$$$$TimeAxis$$$$getSizeBorderWidth$$() {
    return this.$_borderTopWidth$ + this.$_borderBottomWidth$;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$getBorderWidth$ = function $$dvt$$13$$$$TimeAxis$$$$getBorderWidth$$($dvt$$13$$) {
    switch($dvt$$13$$) {
      case "top":
        return this.$_borderTopWidth$;
      case "right":
        return this.$_borderRightWidth$;
      case "bottom":
        return this.$_borderBottomWidth$;
      case "left":
        return this.$_borderLeftWidth$;
      default:
        return this.$_borderWidth$;
    }
  };
  $dvt$$13$$.$TimeAxis$.prototype.$getSize$ = function $$dvt$$13$$$$TimeAxis$$$$getSize$$() {
    return this.$_contentSize$ + this.$getSizeBorderWidth$();
  };
  $dvt$$13$$.$TimeAxis$.prototype.$setType$ = function $$dvt$$13$$$$TimeAxis$$$$setType$$($dvt$$13$$, $DvtTimeAxisParser$$) {
    this.$_formatter$ = new $DvtTimeAxisFormatter$$("short" == $dvt$$13$$ ? $DvtTimeAxisFormatter$$.SHORT : $DvtTimeAxisFormatter$$.$LONG$, $DvtTimeAxisParser$$);
  };
  $dvt$$13$$.$TimeAxis$.prototype.$adjustDate$ = function $$dvt$$13$$$$TimeAxis$$$$adjustDate$$($dvt$$13$$) {
    return this.$_calendar$.$adjustDate$(new Date($dvt$$13$$), this.$_scale$);
  };
  $dvt$$13$$.$TimeAxis$.prototype.$getNextDate$ = function $$dvt$$13$$$$TimeAxis$$$$getNextDate$$($dvt$$13$$) {
    return this.$_calendar$.$getNextDate$($dvt$$13$$, this.$_scale$);
  };
  $dvt$$13$$.$TimeAxis$.prototype.$formatDate$ = function $$dvt$$13$$$$TimeAxis$$$$formatDate$$($dvt$$13$$) {
    if (this.$_converter$) {
      var $DvtTimeAxisParser$$;
      $DvtTimeAxisParser$$ = this.$_converter$[this.$_scale$] ? this.$_converter$[this.$_scale$] : this.$_converter$["default"] ? this.$_converter$["default"] : this.$_converter$;
      if ($DvtTimeAxisParser$$.format) {
        return $DvtTimeAxisParser$$.format(this.$_dateToIsoConverter$ ? this.$_dateToIsoConverter$($dvt$$13$$) : $dvt$$13$$);
      }
      if ($DvtTimeAxisParser$$.getAsString) {
        return $DvtTimeAxisParser$$.getAsString($dvt$$13$$);
      }
    }
    if (this.$_defaultConverter$ && this.$_defaultConverter$[this.$_scale$]) {
      $DvtTimeAxisParser$$ = this.$_defaultConverter$[this.$_scale$];
      if ($DvtTimeAxisParser$$.format) {
        return $DvtTimeAxisParser$$.format(this.$_dateToIsoConverter$ ? this.$_dateToIsoConverter$($dvt$$13$$) : $dvt$$13$$);
      }
      if ($DvtTimeAxisParser$$.getAsString) {
        return $DvtTimeAxisParser$$.getAsString($dvt$$13$$);
      }
    }
    return this.$_formatter$.format($dvt$$13$$, this.$_scale$, this.$_timeZoneOffsets$);
  };
  $dvt$$13$$.$TimeAxis$.prototype.$setIsVertical$ = function $$dvt$$13$$$$TimeAxis$$$$setIsVertical$$($dvt$$13$$) {
    this.$_contentSize$ = $dvt$$13$$ ? $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_WIDTH$ : $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_HEIGHT$;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$setCanvasSize$ = function $$dvt$$13$$$$TimeAxis$$$$setCanvasSize$$() {
    this.$_canvasSize$ = null;
  };
  $dvt$$13$$.$TimeAxis$.prototype.$setZoomLevelOrder$ = function $$dvt$$13$$$$TimeAxis$$$$setZoomLevelOrder$$($dvt$$13$$) {
    this.$_zoomLevelOrder$ = $dvt$$13$$;
  };
  $dvt$$13$$.$Obj$.$createSubclass$($DvtTimeAxisCalendar$$, $dvt$$13$$.$Obj$);
  $DvtTimeAxisCalendar$$.prototype.Init = function $$DvtTimeAxisCalendar$$$$Init$() {
    this.$_dayInMillis$ = 864E5;
    this.$_firstDayOfWeek$ = 0;
  };
  $DvtTimeAxisCalendar$$.prototype.$setFirstDayOfWeek$ = function $$DvtTimeAxisCalendar$$$$$setFirstDayOfWeek$$($dvt$$13$$) {
    this.$_firstDayOfWeek$ = $dvt$$13$$;
  };
  $DvtTimeAxisCalendar$$.prototype.$adjustDate$ = function $$DvtTimeAxisCalendar$$$$$adjustDate$$($dvt$$13$$, $DvtTimeAxisParser$$) {
    var $DvtTimeAxisFormatter$$ = new Date($dvt$$13$$.getTime());
    if ("weeks" == $DvtTimeAxisParser$$) {
      $DvtTimeAxisFormatter$$.setHours(0, 0, 0);
      var $DvtTimeAxisDefaults$$ = ($dvt$$13$$.getDay() - this.$_firstDayOfWeek$ + 7) % 7;
      0 < $DvtTimeAxisDefaults$$ && $DvtTimeAxisFormatter$$.setTime($DvtTimeAxisFormatter$$.getTime() - $DvtTimeAxisDefaults$$ * this.$_dayInMillis$);
    } else {
      "months" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setDate(1) : "days" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setHours(0, 0, 0) : "hours" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setMinutes(0, 0, 0) : "minutes" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setSeconds(0, 0) : "seconds" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setMilliseconds(0) : "quarters" == $DvtTimeAxisParser$$ ? ($DvtTimeAxisFormatter$$.setDate(1), $DvtTimeAxisDefaults$$ = 2 - ($dvt$$13$$.getMonth() + 
      11) % 3, 0 < $DvtTimeAxisDefaults$$ && $DvtTimeAxisFormatter$$.setMonth($DvtTimeAxisFormatter$$.getMonth() + $DvtTimeAxisDefaults$$)) : "halfyears" == $DvtTimeAxisParser$$ ? ($DvtTimeAxisFormatter$$.setDate(1), $DvtTimeAxisDefaults$$ = 5 - ($dvt$$13$$.getMonth() + 11) % 6, 0 < $DvtTimeAxisDefaults$$ && $DvtTimeAxisFormatter$$.setMonth($DvtTimeAxisFormatter$$.getMonth() + $DvtTimeAxisDefaults$$)) : "years" == $DvtTimeAxisParser$$ ? ($DvtTimeAxisFormatter$$.setMonth(0), $DvtTimeAxisFormatter$$.setDate(1)) : 
      "twoyears" == $DvtTimeAxisParser$$ && ($DvtTimeAxisFormatter$$.setMonth(0), $DvtTimeAxisFormatter$$.setDate(1));
    }
    return $DvtTimeAxisFormatter$$;
  };
  $DvtTimeAxisCalendar$$.prototype.$getNextDate$ = function $$DvtTimeAxisCalendar$$$$$getNextDate$$($dvt$$13$$, $DvtTimeAxisParser$$) {
    if ("seconds" == $DvtTimeAxisParser$$) {
      return new Date($dvt$$13$$ + 1E3);
    }
    if ("minutes" == $DvtTimeAxisParser$$) {
      return new Date($dvt$$13$$ + 6E4);
    }
    if ("hours" == $DvtTimeAxisParser$$) {
      return new Date($dvt$$13$$ + 36E5);
    }
    var $DvtTimeAxisFormatter$$ = new Date($dvt$$13$$);
    "days" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setDate($DvtTimeAxisFormatter$$.getDate() + 1) : "weeks" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setDate($DvtTimeAxisFormatter$$.getDate() + 7) : "months" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setMonth($DvtTimeAxisFormatter$$.getMonth() + 1) : "quarters" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setMonth($DvtTimeAxisFormatter$$.getMonth() + 3) : "halfyears" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setMonth($DvtTimeAxisFormatter$$.getMonth() + 
    6) : "years" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setFullYear($DvtTimeAxisFormatter$$.getFullYear() + 1) : "twoyears" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setFullYear($DvtTimeAxisFormatter$$.getFullYear() + 2) : $DvtTimeAxisFormatter$$.setYear($DvtTimeAxisFormatter$$.getYear() + 1);
    return $DvtTimeAxisFormatter$$;
  };
  $dvt$$13$$.$Obj$.$createSubclass$($DvtTimeAxisDefaults$$, $dvt$$13$$.$BaseComponentDefaults$, "DvtTimeAxisDefaults");
  $DvtTimeAxisDefaults$$.$VERSION_1$ = {backgroundColor:"rgba(255,255,255,0)", borderColor:"#d9dfe3", separatorColor:"#bcc7d2", labelStyle:new $dvt$$13$$.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; color: #333333;")};
  $dvt$$13$$.$Obj$.$createSubclass$($DvtTimeAxisFormatter$$, $dvt$$13$$.$Obj$);
  $DvtTimeAxisFormatter$$.$LONG$ = 0;
  $DvtTimeAxisFormatter$$.SHORT = 1;
  $DvtTimeAxisFormatter$$.prototype.Init = function $$DvtTimeAxisFormatter$$$$Init$($dvt$$13$$, $DvtTimeAxisParser$$) {
    this.$_type$ = $dvt$$13$$;
    this.$_dateFormatStrings$ = $DvtTimeAxisParser$$;
    this.$_formats$ = [];
    this.$_formats$[0] = {};
    this.$_formats$[0].seconds = "HH:MM:ss";
    this.$_formats$[0].minutes = "HH:MM";
    this.$_formats$[0].hours = "HH:MM";
    this.$_formats$[0].days = "dddd";
    this.$_formats$[0].weeks = "m/dd";
    this.$_formats$[0].months = "mmmm";
    this.$_formats$[0].quarters = "mmmm";
    this.$_formats$[0].halfyears = "yyyy";
    this.$_formats$[0].years = "yyyy";
    this.$_formats$[0].twoyears = "yyyy";
    this.$_formats$[1] = {};
    this.$_formats$[1].seconds = "HH:MM:ss";
    this.$_formats$[1].minutes = "HH:MM";
    this.$_formats$[1].hours = "HH:MM";
    this.$_formats$[1].days = "m/dd";
    this.$_formats$[1].weeks = "m/dd";
    this.$_formats$[1].months = "mmm";
    this.$_formats$[1].quarters = "mmm";
    this.$_formats$[1].halfyears = "yy";
    this.$_formats$[1].years = "yy";
    this.$_formats$[1].twoyears = "yy";
  };
  $DvtTimeAxisFormatter$$.prototype.format = function $$DvtTimeAxisFormatter$$$$format$($dvt$$13$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$) {
    $DvtTimeAxisParser$$ = this.$_formats$[this.$_type$][$DvtTimeAxisParser$$];
    if (null != $DvtTimeAxisParser$$) {
      var $DvtTimeAxisDefaults$$ = !1;
      if ($DvtTimeAxisFormatter$$) {
        $dvt$$13$$ = $dvt$$13$$.getTime();
        for (var $DvtTimeAxisDefaults$$ = Object.keys($DvtTimeAxisFormatter$$), $DvtTimeAxisCalendar$$ = 0, $DvtTimeAxisRenderer$$ = 0;$DvtTimeAxisRenderer$$ < $DvtTimeAxisDefaults$$.length;$DvtTimeAxisRenderer$$++) {
          $dvt$$13$$ >= parseInt($DvtTimeAxisDefaults$$[$DvtTimeAxisRenderer$$], 10) && ($DvtTimeAxisCalendar$$ = $DvtTimeAxisFormatter$$[$DvtTimeAxisDefaults$$[$DvtTimeAxisRenderer$$]]);
        }
        $dvt$$13$$ = new Date($dvt$$13$$ + $DvtTimeAxisCalendar$$);
        $DvtTimeAxisDefaults$$ = !0;
      }
      if (-1 != $DvtTimeAxisParser$$.indexOf(":")) {
        var $DvtTimeAxisStyleUtils$$ = ":"
      } else {
        -1 != $DvtTimeAxisParser$$.indexOf("/") && ($DvtTimeAxisStyleUtils$$ = "/");
      }
      if ($DvtTimeAxisStyleUtils$$) {
        $DvtTimeAxisParser$$ = $DvtTimeAxisParser$$.split($DvtTimeAxisStyleUtils$$);
        $DvtTimeAxisFormatter$$ = this.$getDateFormatValue$($dvt$$13$$, $DvtTimeAxisParser$$[0], $DvtTimeAxisDefaults$$);
        for ($DvtTimeAxisRenderer$$ = 1;$DvtTimeAxisRenderer$$ < $DvtTimeAxisParser$$.length;$DvtTimeAxisRenderer$$++) {
          $DvtTimeAxisFormatter$$ += $DvtTimeAxisStyleUtils$$ + this.$getDateFormatValue$($dvt$$13$$, $DvtTimeAxisParser$$[$DvtTimeAxisRenderer$$], $DvtTimeAxisDefaults$$);
        }
        return $DvtTimeAxisFormatter$$;
      }
      return this.$getDateFormatValue$($dvt$$13$$, $DvtTimeAxisParser$$, $DvtTimeAxisDefaults$$);
    }
    return $dvt$$13$$.toLocaleString();
  };
  $DvtTimeAxisFormatter$$.prototype.$getDateFormatValue$ = function $$DvtTimeAxisFormatter$$$$$getDateFormatValue$$($dvt$$13$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$) {
    if ($DvtTimeAxisFormatter$$) {
      switch($DvtTimeAxisParser$$) {
        case "ss":
          return $dvt$$13$$ = $dvt$$13$$.getUTCSeconds(), 10 > $dvt$$13$$ ? "0" + $dvt$$13$$ : $dvt$$13$$;
        case "HH":
          return $dvt$$13$$ = $dvt$$13$$.getUTCHours(), 10 > $dvt$$13$$ ? "0" + $dvt$$13$$ : $dvt$$13$$;
        case "MM":
          return $dvt$$13$$ = $dvt$$13$$.getUTCMinutes(), 10 > $dvt$$13$$ ? "0" + $dvt$$13$$ : $dvt$$13$$;
        case "dd":
          return $dvt$$13$$ = $dvt$$13$$.getUTCDate(), 10 > $dvt$$13$$ ? "0" + $dvt$$13$$ : $dvt$$13$$;
        case "dddd":
          return this.$_dateFormatStrings$.$dayNames$[$dvt$$13$$.getUTCDay() + 7];
        case "m":
          return $dvt$$13$$.getUTCMonth() + 1;
        case "mmm":
          return this.$_dateFormatStrings$.$monthNames$[$dvt$$13$$.getUTCMonth()];
        case "mmmm":
          return this.$_dateFormatStrings$.$monthNames$[$dvt$$13$$.getUTCMonth() + 12];
        case "yy":
          return $dvt$$13$$.getUTCFullYear().toString().substring(2, 4);
        default:
          return $dvt$$13$$.getUTCFullYear();
      }
    } else {
      switch($DvtTimeAxisParser$$) {
        case "ss":
          return $dvt$$13$$ = $dvt$$13$$.getSeconds(), 10 > $dvt$$13$$ ? "0" + $dvt$$13$$ : $dvt$$13$$;
        case "HH":
          return $dvt$$13$$ = $dvt$$13$$.getHours(), 10 > $dvt$$13$$ ? "0" + $dvt$$13$$ : $dvt$$13$$;
        case "MM":
          return $dvt$$13$$ = $dvt$$13$$.getMinutes(), 10 > $dvt$$13$$ ? "0" + $dvt$$13$$ : $dvt$$13$$;
        case "dd":
          return $dvt$$13$$ = $dvt$$13$$.getDate(), 10 > $dvt$$13$$ ? "0" + $dvt$$13$$ : $dvt$$13$$;
        case "dddd":
          return this.$_dateFormatStrings$.$dayNames$[$dvt$$13$$.getDay() + 7];
        case "m":
          return $dvt$$13$$.getMonth() + 1;
        case "mmm":
          return this.$_dateFormatStrings$.$monthNames$[$dvt$$13$$.getMonth()];
        case "mmmm":
          return this.$_dateFormatStrings$.$monthNames$[$dvt$$13$$.getMonth() + 12];
        case "yy":
          return $dvt$$13$$.getFullYear().toString().substring(2, 4);
        default:
          return $dvt$$13$$.getFullYear();
      }
    }
  };
  $dvt$$13$$.$Obj$.$createSubclass$($DvtTimeAxisParser$$, $dvt$$13$$.$Obj$, "DvtTimeAxisParser");
  $DvtTimeAxisParser$$.prototype.parse = function $$DvtTimeAxisParser$$$$parse$($dvt$$13$$) {
    this.$_startTime$ = new Date($dvt$$13$$.start);
    this.$_endTime$ = new Date($dvt$$13$$.end);
    var $DvtTimeAxisParser$$ = this.$ParseRootAttributes$();
    $DvtTimeAxisParser$$.$inlineStyle$ = $dvt$$13$$.style;
    $DvtTimeAxisParser$$.id = $dvt$$13$$.id;
    $DvtTimeAxisParser$$.$shortDesc$ = $dvt$$13$$.shortDesc;
    $DvtTimeAxisParser$$.$timeZoneOffsets$ = $dvt$$13$$._tzo;
    $DvtTimeAxisParser$$.$itemPosition$ = $dvt$$13$$._ip;
    $DvtTimeAxisParser$$.$customTimeScales$ = $dvt$$13$$._cts;
    $DvtTimeAxisParser$$.$customFormatScales$ = $dvt$$13$$._cfs;
    $DvtTimeAxisParser$$.scale = $dvt$$13$$.scale;
    $DvtTimeAxisParser$$.$converter$ = $dvt$$13$$.converter;
    $DvtTimeAxisParser$$.$zoomOrder$ = $dvt$$13$$.zoomOrder ? $dvt$$13$$.zoomOrder : null;
    $DvtTimeAxisParser$$.orientation = $dvt$$13$$.orientation ? $dvt$$13$$.orientation : "horizontal";
    return $DvtTimeAxisParser$$;
  };
  $DvtTimeAxisParser$$.prototype.$ParseRootAttributes$ = function $$DvtTimeAxisParser$$$$$ParseRootAttributes$$() {
    var $dvt$$13$$ = {};
    $dvt$$13$$.start = this.$_startTime$.getTime();
    $dvt$$13$$.end = this.$_endTime$.getTime();
    return $dvt$$13$$;
  };
  var $DvtTimeAxisRenderer$$ = {};
  $dvt$$13$$.$Obj$.$createSubclass$($DvtTimeAxisRenderer$$, $dvt$$13$$.$Obj$, "DvtTimeAxisRenderer");
  $DvtTimeAxisRenderer$$.$renderTimeAxis$ = function $$DvtTimeAxisRenderer$$$$renderTimeAxis$$($dvt$$13$$) {
    if ($dvt$$13$$.$hasValidOptions$()) {
      var $DvtTimeAxisParser$$ = $dvt$$13$$.$getSize$();
      $DvtTimeAxisRenderer$$.$_renderAxisBlock$($dvt$$13$$, $DvtTimeAxisParser$$, $DvtTimeAxisStyleUtils$$.$getAxisSeparatorStyle$($dvt$$13$$.$Options$));
    }
  };
  $DvtTimeAxisRenderer$$.$_renderAxisBlock$ = function $$DvtTimeAxisRenderer$$$$_renderAxisBlock$$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$) {
    var $DvtTimeAxisCalendar$$ = 0, $context$$419$$ = $DvtTimeAxisParser$$.$getCtx$();
    if (null == $DvtTimeAxisParser$$.$_axis$) {
      var $cp$$11$$ = new $dvt$$13$$.$ClipPath$;
      $DvtTimeAxisParser$$.$isVertical$() ? ($DvtTimeAxisParser$$.$_axis$ = new $dvt$$13$$.Rect($context$$419$$, $DvtTimeAxisCalendar$$, -$DvtTimeAxisParser$$.$getBorderWidth$("top"), $DvtTimeAxisFormatter$$, $DvtTimeAxisParser$$.$_axisLength$, "axis"), $cp$$11$$.$addRect$($DvtTimeAxisCalendar$$, 0, $DvtTimeAxisFormatter$$, $DvtTimeAxisParser$$.$_contentLength$)) : ($DvtTimeAxisParser$$.$_axis$ = new $dvt$$13$$.Rect($context$$419$$, -$DvtTimeAxisParser$$.$getBorderWidth$("left"), $DvtTimeAxisCalendar$$, 
      $DvtTimeAxisParser$$.$_axisLength$, $DvtTimeAxisFormatter$$, "axis"), $cp$$11$$.$addRect$(0, $DvtTimeAxisCalendar$$, $DvtTimeAxisParser$$.$_contentLength$, $DvtTimeAxisFormatter$$));
      $DvtTimeAxisParser$$.$_axis$.$setCSSStyle$($DvtTimeAxisParser$$.$_axisStyle$);
      $DvtTimeAxisParser$$.$_axis$.$setPixelHinting$();
      $DvtTimeAxisParser$$.$_axis$.$setClipPath$($cp$$11$$);
      $DvtTimeAxisParser$$.$addChild$($DvtTimeAxisParser$$.$_axis$);
      ($DvtTimeAxisFormatter$$ = $DvtTimeAxisStyleUtils$$.$getAxisClass$($DvtTimeAxisParser$$.$Options$)) && $DvtTimeAxisParser$$.$_axis$.$getImpl$().$getElem$().setAttribute("class", $DvtTimeAxisFormatter$$);
    } else {
      $DvtTimeAxisParser$$.$_axis$.$setClipPath$(null), $cp$$11$$ = new $dvt$$13$$.$ClipPath$, $DvtTimeAxisParser$$.$isVertical$() ? ($DvtTimeAxisParser$$.$_axis$.$setX$($DvtTimeAxisCalendar$$), $DvtTimeAxisParser$$.$_axis$.$setY$(-$DvtTimeAxisParser$$.$getBorderWidth$("top")), $DvtTimeAxisParser$$.$_axis$.$setWidth$($DvtTimeAxisFormatter$$), $DvtTimeAxisParser$$.$_axis$.$setHeight$($DvtTimeAxisParser$$.$_axisLength$), $cp$$11$$.$addRect$($DvtTimeAxisCalendar$$, 0, $DvtTimeAxisFormatter$$, $DvtTimeAxisParser$$.$_contentLength$)) : 
      ($DvtTimeAxisParser$$.$_axis$.$setX$(-$DvtTimeAxisParser$$.$getBorderWidth$("left")), $DvtTimeAxisParser$$.$_axis$.$setY$($DvtTimeAxisCalendar$$), $DvtTimeAxisParser$$.$_axis$.$setWidth$($DvtTimeAxisParser$$.$_axisLength$), $DvtTimeAxisParser$$.$_axis$.$setHeight$($DvtTimeAxisFormatter$$), $cp$$11$$.$addRect$(0, $DvtTimeAxisCalendar$$, $DvtTimeAxisParser$$.$_contentLength$, $DvtTimeAxisFormatter$$)), $DvtTimeAxisParser$$.$_axis$.$setClipPath$($cp$$11$$);
    }
    $DvtTimeAxisParser$$.$_axis$.$removeChildren$();
    $DvtTimeAxisParser$$.$_axis$.$getImpl$().$getElem$().setAttribute("stroke-dasharray", $DvtTimeAxisParser$$.$calcStrokeDashArray$());
    $DvtTimeAxisDefaults$$ = new $dvt$$13$$.$CSSStyle$($DvtTimeAxisDefaults$$);
    $DvtTimeAxisParser$$.$_separatorStroke$ = new $dvt$$13$$.$SolidStroke$($DvtTimeAxisDefaults$$.$getStyle$($dvt$$13$$.$CSSStyle$.$COLOR$));
    $DvtTimeAxisFormatter$$ = $DvtTimeAxisParser$$.$_contentSize$;
    $DvtTimeAxisCalendar$$ = $DvtTimeAxisCalendar$$ + $DvtTimeAxisParser$$.$isVertical$() ? $DvtTimeAxisParser$$.$getBorderWidth$("left") : $DvtTimeAxisParser$$.$getBorderWidth$("top");
    $DvtTimeAxisRenderer$$.$_renderAxisTicksLabels$($DvtTimeAxisParser$$, $DvtTimeAxisParser$$.$_canvasSize$, $DvtTimeAxisParser$$.$_axis$, $DvtTimeAxisParser$$.$_contentLength$, $DvtTimeAxisCalendar$$ + $DvtTimeAxisFormatter$$, $DvtTimeAxisCalendar$$, $DvtTimeAxisCalendar$$);
  };
  $DvtTimeAxisRenderer$$.$_renderAxisTicksLabels$ = function $$DvtTimeAxisRenderer$$$$_renderAxisTicksLabels$$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$, $DvtTimeAxisCalendar$$, $axisEnd$$1$$, $tickStart$$, $labelStart$$) {
    var $context$$420$$ = $DvtTimeAxisParser$$.$getCtx$(), $isRTL$$53$$ = $dvt$$13$$.$Agent$.$isRightToLeft$($context$$420$$), $block$$ = new $dvt$$13$$.$Container$($context$$420$$, "block_0_" + $DvtTimeAxisFormatter$$);
    $block$$.$startPos$ = 0;
    $block$$.$endPos$ = $DvtTimeAxisFormatter$$;
    $DvtTimeAxisDefaults$$.$addChild$($block$$);
    $DvtTimeAxisFormatter$$ = $DvtTimeAxisStyleUtils$$.$getAxisLabelClass$($DvtTimeAxisParser$$.$Options$);
    $DvtTimeAxisDefaults$$ = $DvtTimeAxisStyleUtils$$.$getAxisSeparatorClass$($DvtTimeAxisParser$$.$Options$);
    for (var $dates$$2$$ = $DvtTimeAxisParser$$.$_dates$[$DvtTimeAxisParser$$.$_zoomLevelOrder$], $labels$$32$$ = $DvtTimeAxisParser$$.$_labels$[$DvtTimeAxisParser$$.$_zoomLevelOrder$], $i$$672$$ = 0;$i$$672$$ < $dates$$2$$.length - 1;$i$$672$$++) {
      var $date$$19$$ = $dates$$2$$[$i$$672$$], $next$$16_nextPos$$ = $dates$$2$$[$i$$672$$ + 1], $currentPos$$ = $dvt$$13$$.$TimeAxis$.$getDatePosition$($DvtTimeAxisParser$$.$_start$, $DvtTimeAxisParser$$.$_end$, $date$$19$$, $DvtTimeAxisCalendar$$), $next$$16_nextPos$$ = $dvt$$13$$.$TimeAxis$.$getDatePosition$($DvtTimeAxisParser$$.$_start$, $DvtTimeAxisParser$$.$_end$, $next$$16_nextPos$$, $DvtTimeAxisCalendar$$), $maxLength$$ = $next$$16_nextPos$$ - $currentPos$$;
      0 != $currentPos$$ && (($DvtTimeAxisParser$$.$isVertical$() ? $DvtTimeAxisRenderer$$.$_addTick$($context$$420$$, $block$$, $axisEnd$$1$$, $tickStart$$, $currentPos$$, $currentPos$$, $DvtTimeAxisParser$$.$_separatorStroke$, "s_tick" + $date$$19$$, $DvtTimeAxisDefaults$$) : $isRTL$$53$$ ? $DvtTimeAxisRenderer$$.$_addTick$($context$$420$$, $block$$, $DvtTimeAxisCalendar$$ - $currentPos$$, $DvtTimeAxisCalendar$$ - $currentPos$$, $axisEnd$$1$$, $tickStart$$, $DvtTimeAxisParser$$.$_separatorStroke$, 
      "s_tick" + $date$$19$$, $DvtTimeAxisDefaults$$) : $DvtTimeAxisRenderer$$.$_addTick$($context$$420$$, $block$$, $currentPos$$, $currentPos$$, $axisEnd$$1$$, $tickStart$$, $DvtTimeAxisParser$$.$_separatorStroke$, "s_tick" + $date$$19$$, $DvtTimeAxisDefaults$$)).time = $date$$19$$);
      $DvtTimeAxisParser$$.$isVertical$() ? $DvtTimeAxisRenderer$$.$_addAxisLabel$($block$$, $labels$$32$$[$i$$672$$], $labelStart$$ + ($axisEnd$$1$$ - $labelStart$$) / 2, $currentPos$$ + ($next$$16_nextPos$$ - $currentPos$$) / 2, $axisEnd$$1$$ - $labelStart$$, $DvtTimeAxisFormatter$$) : $isRTL$$53$$ ? $DvtTimeAxisRenderer$$.$_addAxisLabel$($block$$, $labels$$32$$[$i$$672$$], $DvtTimeAxisCalendar$$ - ($currentPos$$ + ($next$$16_nextPos$$ - $currentPos$$) / 2), $labelStart$$ + ($axisEnd$$1$$ - $labelStart$$) / 
      2, $maxLength$$, $DvtTimeAxisFormatter$$) : $DvtTimeAxisRenderer$$.$_addAxisLabel$($block$$, $labels$$32$$[$i$$672$$], $currentPos$$ + ($next$$16_nextPos$$ - $currentPos$$) / 2, $labelStart$$ + ($axisEnd$$1$$ - $labelStart$$) / 2, $maxLength$$, $DvtTimeAxisFormatter$$);
    }
  };
  $DvtTimeAxisRenderer$$.$_addAxisLabel$ = function $$DvtTimeAxisRenderer$$$$_addAxisLabel$$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$, $DvtTimeAxisCalendar$$, $DvtTimeAxisRenderer$$, $DvtTimeAxisStyleUtils$$) {
    $DvtTimeAxisFormatter$$.$setX$($DvtTimeAxisDefaults$$);
    $DvtTimeAxisFormatter$$.$setY$($DvtTimeAxisCalendar$$);
    $DvtTimeAxisFormatter$$.$isTruncated$() && $DvtTimeAxisFormatter$$.$setTextString$($DvtTimeAxisFormatter$$.$getUntruncatedTextString$());
    $dvt$$13$$.$TextUtils$.$fitText$($DvtTimeAxisFormatter$$, $DvtTimeAxisRenderer$$, Infinity, $DvtTimeAxisParser$$);
    $DvtTimeAxisFormatter$$.$alignCenter$();
    $dvt$$13$$.$TextUtils$.$centerTextVertically$($DvtTimeAxisFormatter$$, $DvtTimeAxisCalendar$$);
    $DvtTimeAxisStyleUtils$$ && $DvtTimeAxisFormatter$$.$getImpl$().$getElem$().setAttribute("class", $DvtTimeAxisStyleUtils$$);
  };
  $DvtTimeAxisRenderer$$.$_addTick$ = function $$DvtTimeAxisRenderer$$$$_addTick$$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$, $DvtTimeAxisCalendar$$, $DvtTimeAxisRenderer$$, $DvtTimeAxisStyleUtils$$, $stroke$$99$$, $id$$217$$, $tickClass$$) {
    $DvtTimeAxisParser$$ = new $dvt$$13$$.$Line$($DvtTimeAxisParser$$, $DvtTimeAxisDefaults$$, $DvtTimeAxisRenderer$$, $DvtTimeAxisCalendar$$, $DvtTimeAxisStyleUtils$$, $id$$217$$);
    $DvtTimeAxisParser$$.$setStroke$($stroke$$99$$);
    $DvtTimeAxisParser$$.$setPixelHinting$();
    $DvtTimeAxisFormatter$$.$addChild$($DvtTimeAxisParser$$);
    $tickClass$$ && $DvtTimeAxisParser$$.$getImpl$().$getElem$().setAttribute("class", $tickClass$$);
    return $DvtTimeAxisParser$$;
  };
  var $DvtTimeAxisStyleUtils$$ = {};
  $dvt$$13$$.$Obj$.$createSubclass$($DvtTimeAxisStyleUtils$$, $dvt$$13$$.$Obj$, "DvtTimeAxisStyleUtils");
  $DvtTimeAxisStyleUtils$$.$DEFAULT_BORDER_WIDTH$ = 1;
  $DvtTimeAxisStyleUtils$$.$DEFAULT_SEPARATOR_WIDTH$ = 1;
  $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_WIDTH$ = 50;
  $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_HEIGHT$ = 21;
  $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_PADDING$ = 2;
  $DvtTimeAxisStyleUtils$$.$getAxisStyle$ = function $$DvtTimeAxisStyleUtils$$$$getAxisStyle$$($dvt$$13$$) {
    var $DvtTimeAxisParser$$ = "", $DvtTimeAxisFormatter$$ = $DvtTimeAxisStyleUtils$$.$getBackgroudColor$($dvt$$13$$);
    $DvtTimeAxisFormatter$$ && ($DvtTimeAxisParser$$ = $DvtTimeAxisParser$$ + "background-color:" + $DvtTimeAxisFormatter$$ + ";");
    ($DvtTimeAxisFormatter$$ = $DvtTimeAxisStyleUtils$$.$getBorderColor$($dvt$$13$$)) && ($DvtTimeAxisParser$$ = $DvtTimeAxisParser$$ + "border-color:" + $DvtTimeAxisFormatter$$ + ";");
    ($DvtTimeAxisFormatter$$ = $DvtTimeAxisStyleUtils$$.$getBorderWidth$()) && ($DvtTimeAxisParser$$ = $DvtTimeAxisParser$$ + "border-width:" + $DvtTimeAxisFormatter$$ + ";");
    return $DvtTimeAxisParser$$;
  };
  $DvtTimeAxisStyleUtils$$.$getBackgroudColor$ = function $$DvtTimeAxisStyleUtils$$$$getBackgroudColor$$($dvt$$13$$) {
    return $dvt$$13$$.backgroundColor;
  };
  $DvtTimeAxisStyleUtils$$.$getBorderColor$ = function $$DvtTimeAxisStyleUtils$$$$getBorderColor$$($dvt$$13$$) {
    return $dvt$$13$$.borderColor;
  };
  $DvtTimeAxisStyleUtils$$.$getBorderWidth$ = function $$DvtTimeAxisStyleUtils$$$$getBorderWidth$$() {
    return $DvtTimeAxisStyleUtils$$.$DEFAULT_BORDER_WIDTH$;
  };
  $DvtTimeAxisStyleUtils$$.$getAxisLabelStyle$ = function $$DvtTimeAxisStyleUtils$$$$getAxisLabelStyle$$($dvt$$13$$) {
    return $dvt$$13$$.labelStyle;
  };
  $DvtTimeAxisStyleUtils$$.$getSeparatorColor$ = function $$DvtTimeAxisStyleUtils$$$$getSeparatorColor$$($dvt$$13$$) {
    return $dvt$$13$$.separatorColor;
  };
  $DvtTimeAxisStyleUtils$$.$getAxisSeparatorStyle$ = function $$DvtTimeAxisStyleUtils$$$$getAxisSeparatorStyle$$($dvt$$13$$) {
    var $DvtTimeAxisParser$$ = "";
    ($dvt$$13$$ = $DvtTimeAxisStyleUtils$$.$getSeparatorColor$($dvt$$13$$)) && ($DvtTimeAxisParser$$ = $DvtTimeAxisParser$$ + "color:" + $dvt$$13$$ + ";");
    return $DvtTimeAxisParser$$;
  };
  $DvtTimeAxisStyleUtils$$.$getAxisClass$ = function $$DvtTimeAxisStyleUtils$$$$getAxisClass$$($dvt$$13$$) {
    return $dvt$$13$$._resources ? $dvt$$13$$._resources.axisClass : void 0;
  };
  $DvtTimeAxisStyleUtils$$.$getAxisBorderClass$ = function $$DvtTimeAxisStyleUtils$$$$getAxisBorderClass$$($dvt$$13$$) {
    return $dvt$$13$$._resources ? $dvt$$13$$._resources.axisBorderClass : void 0;
  };
  $DvtTimeAxisStyleUtils$$.$getAxisLabelClass$ = function $$DvtTimeAxisStyleUtils$$$$getAxisLabelClass$$($dvt$$13$$) {
    return $dvt$$13$$._resources ? $dvt$$13$$._resources.axisLabelClass : void 0;
  };
  $DvtTimeAxisStyleUtils$$.$getAxisSeparatorClass$ = function $$DvtTimeAxisStyleUtils$$$$getAxisSeparatorClass$$($dvt$$13$$) {
    return $dvt$$13$$._resources ? $dvt$$13$$._resources.axisSeparatorClass : void 0;
  };
  $DvtTimeAxisStyleUtils$$.$isBorderTopVisible$ = function $$DvtTimeAxisStyleUtils$$$$isBorderTopVisible$$($dvt$$13$$) {
    return $dvt$$13$$._resources ? $dvt$$13$$._resources.borderTopVisible : !1;
  };
  $DvtTimeAxisStyleUtils$$.$isBorderRightVisible$ = function $$DvtTimeAxisStyleUtils$$$$isBorderRightVisible$$($dvt$$13$$) {
    return $dvt$$13$$._resources ? $dvt$$13$$._resources.borderRightVisible : !1;
  };
  $DvtTimeAxisStyleUtils$$.$isBorderBottomVisible$ = function $$DvtTimeAxisStyleUtils$$$$isBorderBottomVisible$$($dvt$$13$$) {
    return $dvt$$13$$._resources ? $dvt$$13$$._resources.borderBottomVisible : !1;
  };
  $DvtTimeAxisStyleUtils$$.$isBorderLeftVisible$ = function $$DvtTimeAxisStyleUtils$$$$isBorderLeftVisible$$($dvt$$13$$) {
    return $dvt$$13$$._resources ? $dvt$$13$$._resources.borderLeftVisible : !1;
  };
  $dvt$$13$$.$exportProperty$($dvt$$13$$, "TimeAxis", $dvt$$13$$.$TimeAxis$);
  $dvt$$13$$.$exportProperty$($dvt$$13$$.$TimeAxis$, "newInstance", $dvt$$13$$.$TimeAxis$.newInstance);
  $dvt$$13$$.$exportProperty$($dvt$$13$$.$TimeAxis$.prototype, "render", $dvt$$13$$.$TimeAxis$.prototype.$render$);
})(dvt);
