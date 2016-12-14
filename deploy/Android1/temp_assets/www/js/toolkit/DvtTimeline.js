(function($dvt$$15$$) {
  function $DvtTimelineSeriesParser$$() {
  }
  function $DvtTimelineSeriesNode$$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) {
    this.Init($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$);
  }
  function $DvtTimelineSeriesItem$$($dvt$$15$$, $DvtTimelineSeriesParser$$) {
    this.Init($dvt$$15$$, $DvtTimelineSeriesParser$$);
  }
  function $DvtTimelineSeries$$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) {
    this.Init($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$);
  }
  function $DvtTimelineParser$$() {
  }
  function $DvtTimelineDefaults$$() {
    this.Init({alta:$DvtTimelineDefaults$$.$VERSION_1$});
  }
  function $DvtTimelineAutomation$$($dvt$$15$$) {
    this.$_timeline$ = $dvt$$15$$;
  }
  function $DvtTimelineEventManager$$($dvt$$15$$) {
    $DvtTimelineEventManager$$.$superclass$.constructor.call(this, $dvt$$15$$);
  }
  function $DvtTimelineKeyboardHandler$$($dvt$$15$$) {
    this.Init($dvt$$15$$);
  }
  var $DvtTimeUtils$$ = {$supportsTouch$:function() {
    return $dvt$$15$$.$Agent$.$isTouchDevice$();
  }};
  $dvt$$15$$.$Obj$.$createSubclass$($DvtTimeUtils$$, $dvt$$15$$.$Obj$);
  $DvtTimeUtils$$.$getDatePosition$ = function $$DvtTimeUtils$$$$getDatePosition$$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$) {
    $DvtTimelineSeriesNode$$ = ($DvtTimelineSeriesNode$$ - $dvt$$15$$) * $DvtTimelineSeriesItem$$;
    $dvt$$15$$ = $DvtTimelineSeriesParser$$ - $dvt$$15$$;
    return 0 == $DvtTimelineSeriesNode$$ || 0 == $dvt$$15$$ ? 0 : $DvtTimelineSeriesNode$$ / $dvt$$15$$;
  };
  $DvtTimeUtils$$.$getPositionDate$ = function $$DvtTimeUtils$$$$getPositionDate$$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$) {
    $DvtTimelineSeriesParser$$ = $DvtTimelineSeriesNode$$ * ($DvtTimelineSeriesParser$$ - $dvt$$15$$);
    return 0 == $DvtTimelineSeriesParser$$ || 0 == $DvtTimelineSeriesItem$$ ? $dvt$$15$$ : $DvtTimelineSeriesParser$$ / $DvtTimelineSeriesItem$$ + $dvt$$15$$;
  };
  $dvt$$15$$.$Obj$.$createSubclass$($DvtTimelineKeyboardHandler$$, $dvt$$15$$.$TimeComponentKeyboardHandler$);
  $DvtTimelineKeyboardHandler$$.$getNextNavigable$ = function $$DvtTimelineKeyboardHandler$$$$getNextNavigable$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$) {
    var $DvtTimelineSeries$$ = $DvtTimelineSeriesParser$$.$getSeries$(), $DvtTimelineParser$$ = $DvtTimelineSeriesParser$$.$getSeriesIndex$(), $DvtTimelineDefaults$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineSeries$$.$getCtx$()), $DvtTimelineSeries$$ = $DvtTimelineSeries$$.$isVertical$(), $DvtTimelineAutomation$$ = 1 < $DvtTimelineSeriesItem$$.length;
    if (!$DvtTimelineDefaults$$ && $dvt$$15$$.KeyboardEvent.$RIGHT_ARROW$ == $DvtTimelineSeriesNode$$.keyCode || $DvtTimelineDefaults$$ && $dvt$$15$$.KeyboardEvent.$LEFT_ARROW$ == $DvtTimelineSeriesNode$$.keyCode) {
      if (!$DvtTimelineSeries$$) {
        return $DvtTimelineKeyboardHandler$$.$getNextItem$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$[$DvtTimelineParser$$], !0);
      }
      if ($DvtTimelineAutomation$$ && 1 != $DvtTimelineParser$$) {
        return $DvtTimelineKeyboardHandler$$.$getClosestItem$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$[1]);
      }
    } else {
      if (!$DvtTimelineDefaults$$ && $dvt$$15$$.KeyboardEvent.$LEFT_ARROW$ == $DvtTimelineSeriesNode$$.keyCode || $DvtTimelineDefaults$$ && $dvt$$15$$.KeyboardEvent.$RIGHT_ARROW$ == $DvtTimelineSeriesNode$$.keyCode) {
        if (!$DvtTimelineSeries$$) {
          return $DvtTimelineKeyboardHandler$$.$getNextItem$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$[$DvtTimelineParser$$], !1);
        }
        if ($DvtTimelineAutomation$$ && 0 != $DvtTimelineParser$$) {
          return $DvtTimelineKeyboardHandler$$.$getClosestItem$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$[0]);
        }
      } else {
        if ($dvt$$15$$.KeyboardEvent.$DOWN_ARROW$ == $DvtTimelineSeriesNode$$.keyCode) {
          if ($DvtTimelineSeries$$) {
            return $DvtTimelineKeyboardHandler$$.$getNextItem$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$[$DvtTimelineParser$$], !0);
          }
          if ($DvtTimelineAutomation$$ && 1 != $DvtTimelineParser$$) {
            return $DvtTimelineKeyboardHandler$$.$getClosestItem$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$[1]);
          }
        } else {
          if ($dvt$$15$$.KeyboardEvent.$UP_ARROW$ == $DvtTimelineSeriesNode$$.keyCode) {
            if ($DvtTimelineSeries$$) {
              return $DvtTimelineKeyboardHandler$$.$getNextItem$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$[$DvtTimelineParser$$], !1);
            }
            if ($DvtTimelineAutomation$$ && 0 != $DvtTimelineParser$$) {
              return $DvtTimelineKeyboardHandler$$.$getClosestItem$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$[0]);
            }
          }
        }
      }
    }
    return null;
  };
  $DvtTimelineKeyboardHandler$$.$getNextItem$ = function $$DvtTimelineKeyboardHandler$$$$getNextItem$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$) {
    $DvtTimelineSeriesParser$$ = $dvt$$15$$.$ArrayUtils$.$getIndex$($DvtTimelineSeriesNode$$, $DvtTimelineSeriesParser$$) + ($DvtTimelineSeriesItem$$ ? 1 : -1);
    return 0 <= $DvtTimelineSeriesParser$$ && $DvtTimelineSeriesParser$$ < $DvtTimelineSeriesNode$$.length ? $DvtTimelineSeriesNode$$[$DvtTimelineSeriesParser$$] : null;
  };
  $DvtTimelineKeyboardHandler$$.$getClosestItem$ = function $$DvtTimelineKeyboardHandler$$$$getClosestItem$$($dvt$$15$$, $DvtTimelineSeriesParser$$) {
    if (0 < $DvtTimelineSeriesParser$$.length) {
      for (var $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$[0], $DvtTimelineSeriesItem$$ = $dvt$$15$$.$_loc$, $DvtTimelineSeries$$ = Math.abs($DvtTimelineSeriesItem$$ - $DvtTimelineSeriesNode$$.$_loc$), $DvtTimelineParser$$ = 1;$DvtTimelineParser$$ < $DvtTimelineSeriesParser$$.length;$DvtTimelineParser$$++) {
        var $DvtTimelineDefaults$$ = Math.abs($DvtTimelineSeriesItem$$ - $DvtTimelineSeriesParser$$[$DvtTimelineParser$$].$_loc$);
        $DvtTimelineDefaults$$ < $DvtTimelineSeries$$ && ($DvtTimelineSeries$$ = $DvtTimelineDefaults$$, $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$[$DvtTimelineParser$$]);
      }
      return $DvtTimelineSeriesNode$$;
    }
    return null;
  };
  $dvt$$15$$.$Obj$.$createSubclass$($DvtTimelineEventManager$$, $dvt$$15$$.$TimeComponentEventManager$);
  $DvtTimelineEventManager$$.prototype.$addListeners$ = function $$DvtTimelineEventManager$$$$$addListeners$$($DvtTimelineSeriesParser$$) {
    $DvtTimelineEventManager$$.$superclass$.$addListeners$.call(this, $DvtTimelineSeriesParser$$);
    !$dvt$$15$$.$Agent$.$isTouchDevice$() && $dvt$$15$$.$Agent$.$isPlatformIE$() && ($DvtTimelineSeriesParser$$ = this.$getCtx$().$_stage$, $DvtTimelineSeriesParser$$.$addEvtListener$("mouseenter", this.$OnMouseEnter$, !1, this), $DvtTimelineSeriesParser$$.$addEvtListener$("mouseleave", this.$OnMouseLeave$, !1, this));
  };
  $DvtTimelineEventManager$$.prototype.$removeListeners$ = function $$DvtTimelineEventManager$$$$$removeListeners$$($DvtTimelineSeriesParser$$) {
    $DvtTimelineEventManager$$.$superclass$.$removeListeners$.call(this, $DvtTimelineSeriesParser$$);
    !$dvt$$15$$.$Agent$.$isTouchDevice$() && $dvt$$15$$.$Agent$.$isPlatformIE$() && ($DvtTimelineSeriesParser$$ = this.$getCtx$().$_stage$, $DvtTimelineSeriesParser$$.$removeEvtListener$("mouseenter", this.$OnMouseEnter$, !1, this), $DvtTimelineSeriesParser$$.$removeEvtListener$("mouseleave", this.$OnMouseLeave$, !1, this));
  };
  $DvtTimelineEventManager$$.prototype.$PreOnMouseOver$ = function $$DvtTimelineEventManager$$$$$PreOnMouseOver$$($DvtTimelineSeriesParser$$) {
    this.$_mouseOutTimer$ && this.$_mouseOutTimer$.$isRunning$() && this.$_mouseOutTimer$.stop();
    $DvtTimelineEventManager$$.$superclass$.$PreOnMouseOver$.call(this, $DvtTimelineSeriesParser$$);
    $dvt$$15$$.$Agent$.$isPlatformIE$() || this.$isMouseOver$ || (this.$isMouseOver$ = !0, this.$_comp$.$showThenHideHotspots$());
  };
  $DvtTimelineEventManager$$.prototype.$OnMouseEnter$ = function $$DvtTimelineEventManager$$$$$OnMouseEnter$$() {
    this.$_mouseOutTimer$ && this.$_mouseOutTimer$.$isRunning$() && this.$_mouseOutTimer$.stop();
    this.$isMouseOver$ || (this.$isMouseOver$ = !0, this.$_comp$.$showThenHideHotspots$());
  };
  $DvtTimelineEventManager$$.prototype.$OnMouseLeave$ = function $$DvtTimelineEventManager$$$$$OnMouseLeave$$() {
    this.$_mouseOutTimer$ || (this.$_mouseOutTimer$ = new $dvt$$15$$.$Timer$(this.$getCtx$(), 10, this.$_onMouseOutTimerEnd$, this, 1));
    this.$_mouseOutTimer$.reset();
    this.$_mouseOutTimer$.start();
  };
  $DvtTimelineEventManager$$.prototype.$PreOnMouseOut$ = function $$DvtTimelineEventManager$$$$$PreOnMouseOut$$($DvtTimelineSeriesParser$$) {
    $DvtTimelineEventManager$$.$superclass$.$PreOnMouseOut$.call(this, $DvtTimelineSeriesParser$$);
    $dvt$$15$$.$Agent$.$isPlatformIE$() || (this.$_mouseOutTimer$ || (this.$_mouseOutTimer$ = new $dvt$$15$$.$Timer$(this.$getCtx$(), 10, this.$_onMouseOutTimerEnd$, this, 1)), this.$_mouseOutTimer$.reset(), this.$_mouseOutTimer$.start());
  };
  $DvtTimelineEventManager$$.prototype.$_onMouseOutTimerEnd$ = function $$DvtTimelineEventManager$$$$$_onMouseOutTimerEnd$$() {
    this.$isMouseOver$ = !1;
  };
  $DvtTimelineEventManager$$.prototype.$panBy$ = function $$DvtTimelineEventManager$$$$$panBy$$($dvt$$15$$, $DvtTimelineSeriesParser$$) {
    var $DvtTimelineSeriesNode$$ = this.$getFocus$();
    $DvtTimelineSeriesNode$$ && (this.$_comp$.$_dragPanSeries$ = $DvtTimelineSeriesNode$$.$_series$);
    $DvtTimelineEventManager$$.$superclass$.$panBy$.call(this, $dvt$$15$$, $DvtTimelineSeriesParser$$);
  };
  $dvt$$15$$.$Timeline$ = function $$dvt$$15$$$$Timeline$$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) {
    this.Init($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$);
  };
  $dvt$$15$$.$Obj$.$createSubclass$($dvt$$15$$.$Timeline$, $dvt$$15$$.$TimeComponent$);
  $dvt$$15$$.$Timeline$.$ORIENTATION_VERTICAL$ = "vertical";
  $dvt$$15$$.$Timeline$.newInstance = function $$dvt$$15$$$$Timeline$$newInstance$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$) {
    return new $dvt$$15$$.$Timeline$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$);
  };
  $dvt$$15$$.$Timeline$.prototype.Init = function $$dvt$$15$$$$Timeline$$$Init$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$) {
    $dvt$$15$$.$Timeline$.$superclass$.Init.call(this, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$);
    this.$Defaults$ = new $DvtTimelineDefaults$$;
    this.$EventManager$ = new $DvtTimelineEventManager$$(this);
    this.$EventManager$.$addListeners$(this);
    $dvt$$15$$.$Agent$.$isTouchDevice$() ? this.$_keyboardHandler$ = null : (this.$_keyboardHandler$ = new $DvtTimelineKeyboardHandler$$(this.$EventManager$), this.$EventManager$.$setKeyboardHandler$(this.$_keyboardHandler$));
  };
  $dvt$$15$$.$Timeline$.prototype.$Parse$ = function $$dvt$$15$$$$Timeline$$$$Parse$$($dvt$$15$$) {
    this.$_parser$ = new $DvtTimelineParser$$;
    return this.$_parser$.parse($dvt$$15$$);
  };
  $dvt$$15$$.$Timeline$.prototype.$_applyParsedProperties$ = function $$dvt$$15$$$$Timeline$$$$_applyParsedProperties$$($DvtTimelineSeriesParser$$) {
    var $DvtTimelineSeriesNode$$ = this.$Options$.orientation;
    this.$_isVertical$ = $DvtTimelineSeriesNode$$ && $DvtTimelineSeriesNode$$ == $dvt$$15$$.$Timeline$.$ORIENTATION_VERTICAL$ ? !0 : !1;
    this.$_hasOverview$ = $DvtTimelineSeriesParser$$.$hasOverview$;
    this.$_viewStartTime$ = $DvtTimelineSeriesParser$$.$viewStart$;
    this.$_viewEndTime$ = $DvtTimelineSeriesParser$$.$viewEnd$;
    this.$_selectionMode$ = $DvtTimelineSeriesParser$$.$selectionMode$;
    this.$SelectionHandler$ = "single" == this.$_selectionMode$ ? new $dvt$$15$$.$SelectionHandler$($dvt$$15$$.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == this.$_selectionMode$ ? new $dvt$$15$$.$SelectionHandler$($dvt$$15$$.$SelectionHandler$.$TYPE_MULTIPLE$) : null;
    this.$EventManager$.$setSelectionHandler$(this.$SelectionHandler$);
    this.$_shortDesc$ = $DvtTimelineSeriesParser$$.$shortDesc$;
    this.$_referenceObjects$ = $DvtTimelineSeriesParser$$.$referenceObjects$;
    this.$_seriesScale$ = $DvtTimelineSeriesParser$$.$seriesScale$;
    this.$_timeZoneOffsets$ = $DvtTimelineSeriesParser$$.$timeZoneOffsets$;
    this.$_seriesScale$ ? (this.$_seriesConverter$ = $DvtTimelineSeriesParser$$.$seriesConverter$, this.$_seriesTimeAxis$ = new $dvt$$15$$.$TimeAxis$(this.$getCtx$(), null, null), this.$_seriesTimeAxis$.$setIsVertical$(this.$_isVertical$), this.$_seriesTimeAxis$.$setScale$(this.$_seriesScale$), this.$_seriesTimeAxis$.$setConverter$(this.$_seriesConverter$), this.$_seriesCustomFormatScales$ = $DvtTimelineSeriesParser$$.$seriesCustomFormatScales$, this.$_dateFormatStrings$ = this.$_seriesTimeAxis$.$_dateFormatStrings$, 
    this.$_isVertical$ ? (this.$_seriesTimeAxis$.$setType$("short", this.$_dateFormatStrings$), this.$_seriesTimeAxis$.$setDefaultConverter$(this.$_resources$.converterVert)) : (this.$_seriesTimeAxis$.$setType$("long", this.$_dateFormatStrings$), this.$_seriesTimeAxis$.$setDefaultConverter$(this.$_resources$.converter)), this.$_timeZoneOffsets$ && this.$_seriesTimeAxis$.$setTimeZoneOffsets$(this.$_timeZoneOffsets$)) : this.$_seriesTimeAxis$ = null;
    this.$_defaultInversions$ = [!1, !0];
    this.$_itemPosition$ = $DvtTimelineSeriesParser$$.$itemPosition$;
    this.$_customTimeScales$ = $DvtTimelineSeriesParser$$.$customTimeScales$;
    this.$_customFormatScales$ = $DvtTimelineSeriesParser$$.$customFormatScales$;
    this.$_scale$ = $DvtTimelineSeriesParser$$.scale;
    $dvt$$15$$.$Timeline$.$superclass$.$_applyParsedProperties$.call(this, $DvtTimelineSeriesParser$$);
  };
  $dvt$$15$$.$Timeline$.prototype.$getTimeAxis$ = function $$dvt$$15$$$$Timeline$$$$getTimeAxis$$() {
    return this.$_timeAxis$;
  };
  $dvt$$15$$.$Timeline$.prototype.$getTimeAxisSize$ = function $$dvt$$15$$$$Timeline$$$$getTimeAxisSize$$() {
    return this.$_timeAxis$.$getSize$();
  };
  $dvt$$15$$.$Timeline$.prototype.$getTimeAxisVisibleSize$ = function $$dvt$$15$$$$Timeline$$$$getTimeAxisVisibleSize$$($dvt$$15$$) {
    return this.$_hasOverview$ || 1 != $dvt$$15$$ ? this.$getTimeAxisSize$() : this.$getTimeAxisSize$() - this.$_timeAxis$.$getBorderWidth$();
  };
  $dvt$$15$$.$Timeline$.prototype.select = function $$dvt$$15$$$$Timeline$$$select$($DvtTimelineSeriesParser$$) {
    this.$Options$.selection = $dvt$$15$$.$JsonUtils$.clone($DvtTimelineSeriesParser$$);
    this.$SelectionHandler$ && this.$applyInitialSelections$();
  };
  $dvt$$15$$.$Timeline$.prototype.$_bundleTimeAxisOptions$ = function $$dvt$$15$$$$Timeline$$$$_bundleTimeAxisOptions$$($dvt$$15$$) {
    this.$_timeAxisOptions$ = {start:$dvt$$15$$.start, end:$dvt$$15$$.end, _resources:$dvt$$15$$._resources, shortDesc:$dvt$$15$$.shortDesc, _tzo:$dvt$$15$$._tzo, _ip:$dvt$$15$$._ip, _cts:this.$_customTimeScales$, _cfs:this.$_customFormatScales$, orientation:$dvt$$15$$.orientation};
    var $DvtTimelineSeriesParser$$ = this.$_timeAxisOptions$._resources;
    $DvtTimelineSeriesParser$$ && ($DvtTimelineSeriesParser$$.borderTopVisible = !0, $DvtTimelineSeriesParser$$.borderRightVisible = !0, $DvtTimelineSeriesParser$$.borderBottomVisible = !0, $DvtTimelineSeriesParser$$.borderLeftVisible = !0);
    $dvt$$15$$.styleDefaults && $dvt$$15$$.styleDefaults.minorAxis && ($DvtTimelineSeriesParser$$ = $dvt$$15$$.styleDefaults.minorAxis, this.$_timeAxisOptions$.backgroundColor = $DvtTimelineSeriesParser$$.backgroundColor, this.$_timeAxisOptions$.borderColor = $DvtTimelineSeriesParser$$.borderColor, this.$_timeAxisOptions$.separatorColor = $DvtTimelineSeriesParser$$.separatorColor, this.$_timeAxisOptions$.labelStyle = $DvtTimelineSeriesParser$$.labelStyle);
    $dvt$$15$$.minorAxis && ($dvt$$15$$ = $dvt$$15$$.minorAxis, this.$_timeAxisOptions$.scale = $dvt$$15$$.scale, this.$_timeAxisOptions$.converter = $dvt$$15$$.converter, this.$_timeAxisOptions$.zoomOrder = $dvt$$15$$.zoomOrder, this.$_timeAxisOptions$.style = $dvt$$15$$.style);
  };
  $dvt$$15$$.$Timeline$.prototype.$render$ = function $$dvt$$15$$$$Timeline$$$$render$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$) {
    $DvtTimelineSeriesParser$$ ? (this.$SetOptions$($DvtTimelineSeriesParser$$), this.$StopAnimation$(), this.$Options$ && (this.$_resources$ = this.$Options$._resources, null == this.$_resources$ && (this.$_resources$ = [])), this.$Width$ = $DvtTimelineSeriesNode$$, this.$Height$ = $DvtTimelineSeriesItem$$, $DvtTimelineSeriesParser$$ = this.$Parse$(this.$Options$), this.$_applyParsedProperties$($DvtTimelineSeriesParser$$), this.$_fetchStartPos$ = 0, this.$_fetchEndPos$ = this.$_isVertical$ ? $DvtTimelineSeriesItem$$ : 
    $DvtTimelineSeriesNode$$, this.$Options$.styleDefaults && (this.$_majorAxisStyleDefaults$ = this.$Options$.styleDefaults.majorAxis, this.$_seriesStyleDefaults$ = this.$Options$.styleDefaults.series), this.$_scale$ && (this.$_bundleTimeAxisOptions$(this.$Options$), this.$applyAxisStyleValues$(), this.$_timeAxis$ || (this.$_timeAxis$ = new $dvt$$15$$.$TimeAxis$(this.$getCtx$(), null, null)), this.$_isVertical$ ? this.$_timeAxis$.$setBorderVisibility$(!1, !0, !1, !0) : this.$_timeAxis$.$setBorderVisibility$(!0, 
    !1, !0, !1), this.$_timeAxis$.$setCanvasSize$(), $DvtTimelineSeriesNode$$ = this.$_timeAxis$.$getPreferredLength$(this.$_timeAxisOptions$, this.$_canvasLength$), this.$setContentLength$($DvtTimelineSeriesNode$$), this.$prepareViewportLength$()), this.$_populateSeries$(), $DvtTimelineRenderer$$.$renderTimeline$(this), this.$UpdateAriaAttributes$(), $dvt$$15$$.$TimeAxis$.$supportsTouch$() || this.$getCtx$().$setKeyboardFocusArray$([this]), this.$Animation$ || this.$RenderComplete$()) : this.$_handleResize$($DvtTimelineSeriesNode$$, 
    $DvtTimelineSeriesItem$$);
  };
  $dvt$$15$$.$Timeline$.prototype.$hasValidSeriesItems$ = function $$dvt$$15$$$$Timeline$$$$hasValidSeriesItems$$() {
    for (var $dvt$$15$$ = 0;$dvt$$15$$ < this.$_seriesOptions$.length;$dvt$$15$$++) {
      var $DvtTimelineSeriesParser$$ = this.$_seriesOptions$[$dvt$$15$$];
      if ($DvtTimelineSeriesParser$$.items) {
        for (var $DvtTimelineSeriesNode$$ = 0;$DvtTimelineSeriesNode$$ < $DvtTimelineSeriesParser$$.items.length;$DvtTimelineSeriesNode$$++) {
          var $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesParser$$.items[$DvtTimelineSeriesNode$$], $DvtTimelineSeries$$ = (new Date($DvtTimelineSeriesItem$$.start)).getTime();
          if (!$DvtTimelineSeries$$ || $DvtTimelineSeriesItem$$.hasOwnProperty("end") && ($DvtTimelineSeriesItem$$ = (new Date($DvtTimelineSeriesItem$$.end)).getTime(), !($DvtTimelineSeriesItem$$ && $DvtTimelineSeriesItem$$ >= $DvtTimelineSeries$$))) {
            return !1;
          }
        }
      }
    }
    return !0;
  };
  $dvt$$15$$.$Timeline$.prototype.$hasValidOptions$ = function $$dvt$$15$$$$Timeline$$$$hasValidOptions$$() {
    var $DvtTimelineSeriesParser$$ = this.$_scale$ && -1 != $dvt$$15$$.$ArrayUtils$.$getIndex$($dvt$$15$$.$TimeAxis$.$_VALID_SCALES$, this.$_scale$), $DvtTimelineSeriesNode$$ = this.$_scale$ && this.$_customTimeScales$ && this.$_customTimeScales$[this.$_scale$], $DvtTimelineSeriesItem$$ = this.$_start$ && this.$_end$ && this.$_end$ > this.$_start$, $DvtTimelineSeries$$ = this.$_series$ && 0 < this.$_series$.length, $DvtTimelineParser$$ = $DvtTimelineSeries$$ ? this.$hasValidSeriesItems$() : !1, $DvtTimelineDefaults$$ = 
    this.$_seriesScale$ ? -1 != $dvt$$15$$.$ArrayUtils$.$getIndex$($dvt$$15$$.$TimeAxis$.$_VALID_SCALES$, this.$_seriesScale$) : !0, $DvtTimelineAutomation$$ = this.$_seriesScale$ ? this.$_customTimeScales$ && this.$_customTimeScales$[this.$_seriesScale$] : !0, $DvtTimelineEventManager$$ = this.$_viewStartTime$ && this.$_viewEndTime$ ? this.$_viewEndTime$ > this.$_viewStartTime$ : !0, $DvtTimeUtils$$ = this.$_viewStartTime$ ? this.$_viewStartTime$ >= this.$_start$ && this.$_viewStartTime$ < this.$_end$ : 
    !0, $DvtTimelineKeyboardHandler$$ = this.$_viewEndTime$ ? this.$_viewEndTime$ > this.$_start$ && this.$_viewEndTime$ <= this.$_end$ : !0;
    return ($DvtTimelineSeriesParser$$ || $DvtTimelineSeriesNode$$) && ($DvtTimelineDefaults$$ || $DvtTimelineAutomation$$) && $DvtTimelineSeriesItem$$ && $DvtTimelineSeries$$ && $DvtTimelineParser$$ && $DvtTimelineEventManager$$ && $DvtTimeUtils$$ && $DvtTimelineKeyboardHandler$$;
  };
  $dvt$$15$$.$Timeline$.prototype.$GetComponentDescription$ = function $$dvt$$15$$$$Timeline$$$$GetComponentDescription$$() {
    return this.$_shortDesc$ ? this.$_shortDesc$ : $dvt$$15$$.$Bundle$.$getTranslatedString$($dvt$$15$$.$Bundle$.$UTIL_PREFIX$, "TIMELINE");
  };
  $dvt$$15$$.$Timeline$.prototype.$showThenHideHotspots$ = function $$dvt$$15$$$$Timeline$$$$showThenHideHotspots$$($DvtTimelineSeriesParser$$) {
    if (this.$hasValidOptions$()) {
      for (var $DvtTimelineSeriesNode$$ = new $dvt$$15$$.$Animator$(this.$getCtx$(), $DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$(), 0, $dvt$$15$$.$Easing$.$linear$), $DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < this.$_scrollHotspots$.length;$DvtTimelineSeriesItem$$++) {
        var $DvtTimelineSeries$$ = this.$_scrollHotspots$[$DvtTimelineSeriesItem$$], $DvtTimelineParser$$ = $DvtTimelineSeries$$.getId(), $DvtTimelineDefaults$$ = !0;
        this.$_contentLength$ <= this.$_canvasLength$ && ("lhs" == $DvtTimelineParser$$ || "rhs" == $DvtTimelineParser$$) && ($DvtTimelineDefaults$$ = !1);
        var $DvtTimelineAutomation$$ = $DvtTimelineSeries$$.getParent().getId();
        $DvtTimelineAutomation$$ && ($DvtTimelineAutomation$$ = $DvtTimelineAutomation$$.substring($DvtTimelineAutomation$$.length - 1), null != $DvtTimelineSeriesParser$$ && $DvtTimelineSeriesParser$$ != $DvtTimelineAutomation$$ && ($DvtTimelineDefaults$$ = !1), this.$_series$[$DvtTimelineAutomation$$].$_maxOverflowValue$ <= this.$_seriesSize$ && ("ths" == $DvtTimelineParser$$ || "bhs" == $DvtTimelineParser$$) && ($DvtTimelineDefaults$$ = !1));
        $DvtTimelineDefaults$$ && $DvtTimelineSeriesNode$$.$addProp$($dvt$$15$$.$Animator$.$TYPE_NUMBER$, $DvtTimelineSeries$$, $DvtTimelineSeries$$.$getAlpha$, $DvtTimelineSeries$$.$setAlpha$, $DvtTimelineStyleUtils$$.$getHotspotOpacity$());
      }
      $dvt$$15$$.$Playable$.$appendOnEnd$($DvtTimelineSeriesNode$$, this.$hideHotspots$, this);
      $DvtTimelineSeriesNode$$.play();
    }
  };
  $dvt$$15$$.$Timeline$.prototype.$hideHotspots$ = function $$dvt$$15$$$$Timeline$$$$hideHotspots$$() {
    var $DvtTimelineSeriesParser$$ = this.$_scrollHotspots$.length;
    if (0 != $DvtTimelineSeriesParser$$) {
      for (var $DvtTimelineSeriesNode$$ = new $dvt$$15$$.$Animator$(this.$getCtx$(), $DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$(), 0, $dvt$$15$$.$Easing$.$linear$), $DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $DvtTimelineSeriesParser$$;$DvtTimelineSeriesItem$$++) {
        var $DvtTimelineSeries$$ = this.$_scrollHotspots$[$DvtTimelineSeriesItem$$];
        $DvtTimelineSeriesNode$$.$addProp$($dvt$$15$$.$Animator$.$TYPE_NUMBER$, $DvtTimelineSeries$$, $DvtTimelineSeries$$.$getAlpha$, $DvtTimelineSeries$$.$setAlpha$, 0);
      }
      $DvtTimelineSeriesNode$$.play();
    }
  };
  $dvt$$15$$.$Timeline$.prototype.$applyStyleValues$ = function $$dvt$$15$$$$Timeline$$$$applyStyleValues$$() {
    this.$_style$ = new $dvt$$15$$.$CSSStyle$($DvtTimelineStyleUtils$$.$getTimelineStyle$());
    if (this.$Options$.styleDefaults) {
      var $DvtTimelineSeriesParser$$ = this.$Options$.styleDefaults.borderColor;
      $DvtTimelineSeriesParser$$ && this.$_style$.$parseInlineStyle$("border-color:" + $DvtTimelineSeriesParser$$ + ";");
    }
    if (this.$_hasOverview$ && (this.$_overviewSize$ = this.$_isVertical$ ? $DvtTimelineStyleUtils$$.$getOverviewWidth$() : $DvtTimelineStyleUtils$$.$getOverviewHeight$(), $DvtTimelineSeriesParser$$ = this.$Options$.overview.style)) {
      for (var $DvtTimelineSeriesParser$$ = $DvtTimelineSeriesParser$$.split(";"), $DvtTimelineSeriesNode$$ = 0;$DvtTimelineSeriesNode$$ < $DvtTimelineSeriesParser$$.length;$DvtTimelineSeriesNode$$++) {
        var $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesParser$$[$DvtTimelineSeriesNode$$];
        if ($DvtTimelineSeriesItem$$ && 0 < $DvtTimelineSeriesItem$$.length) {
          var $DvtTimelineSeries$$ = $DvtTimelineSeriesItem$$.indexOf(":");
          if (-1 < $DvtTimelineSeries$$) {
            var $DvtTimelineParser$$ = $dvt$$15$$.$StringUtils$.trim($DvtTimelineSeriesItem$$.substring(0, $DvtTimelineSeries$$));
            if (this.$_isVertical$ && "width" == $DvtTimelineParser$$ || !this.$_isVertical$ && "height" == $DvtTimelineParser$$) {
              this.$_overviewSize$ = parseInt($dvt$$15$$.$StringUtils$.trim($DvtTimelineSeriesItem$$.substring($DvtTimelineSeries$$ + 1)), 10);
              break;
            }
          }
        }
      }
    }
    $dvt$$15$$.$Timeline$.$superclass$.$applyStyleValues$.call(this);
    $DvtTimelineSeriesParser$$ = this.$_style$.$getBorderWidth$();
    $DvtTimelineSeriesNode$$ = 2 * $DvtTimelineSeriesParser$$;
    this.$_style$.$parseInlineStyle$("border:" + $DvtTimelineSeriesNode$$ + "px;");
    this.$setStartXOffset$($DvtTimelineSeriesParser$$);
    this.$setStartYOffset$($DvtTimelineSeriesParser$$);
    this.$_backgroundWidth$ = this.$Width$;
    this.$_backgroundHeight$ = this.$Height$;
    this.$_isVertical$ ? (this.$_canvasLength$ = this.$_backgroundHeight$ - $DvtTimelineSeriesNode$$, this.$_hasOverview$ ? (this.$_canvasSize$ = this.$_backgroundWidth$ - this.$_overviewSize$ - $DvtTimelineSeriesNode$$, this.$isRTL$() && this.$setStartXOffset$($DvtTimelineSeriesParser$$ + this.$_overviewSize$)) : this.$_canvasSize$ = this.$_backgroundWidth$ - $DvtTimelineSeriesNode$$) : (this.$_canvasLength$ = this.$_backgroundWidth$ - $DvtTimelineSeriesNode$$, this.$_canvasSize$ = this.$_hasOverview$ ? 
    this.$Height$ - this.$_overviewSize$ - $DvtTimelineSeriesNode$$ : this.$Height$ - $DvtTimelineSeriesNode$$);
  };
  $dvt$$15$$.$Timeline$.prototype.$applyAxisStyleValues$ = function $$dvt$$15$$$$Timeline$$$$applyAxisStyleValues$$() {
    if (this.$_seriesStyleDefaults$ && this.$_seriesStyleDefaults$.backgroundColor) {
      var $DvtTimelineSeriesParser$$ = this.$_seriesStyleDefaults$.backgroundColor;
      $dvt$$15$$.$ColorUtils$.$getRed$($DvtTimelineSeriesParser$$);
      $dvt$$15$$.$ColorUtils$.$getGreen$($DvtTimelineSeriesParser$$);
      $dvt$$15$$.$ColorUtils$.$getBlue$($DvtTimelineSeriesParser$$);
    }
  };
  $dvt$$15$$.$Timeline$.prototype.$_populateSeries$ = function $$dvt$$15$$$$Timeline$$$$_populateSeries$$() {
    var $dvt$$15$$ = this.$Options$.series;
    if ($dvt$$15$$) {
      var $DvtTimelineSeriesParser$$ = Math.min($dvt$$15$$.length, 2);
      this.$_seriesOptions$ = [];
      if (this.$_series$) {
        if ($DvtTimelineSeriesParser$$ != this.$_series$.length) {
          for (var $DvtTimelineSeriesNode$$ = 0;$DvtTimelineSeriesNode$$ < this.$_series$.length;$DvtTimelineSeriesNode$$++) {
            this.$_timeZoomCanvas$.removeChild(this.$_series$[$DvtTimelineSeriesNode$$]);
          }
          this.$_series$ = [];
        }
      } else {
        this.$_series$ = [];
      }
      for ($DvtTimelineSeriesNode$$ = 0;$DvtTimelineSeriesNode$$ < $DvtTimelineSeriesParser$$;$DvtTimelineSeriesNode$$++) {
        var $DvtTimelineSeriesItem$$ = $dvt$$15$$[$DvtTimelineSeriesNode$$];
        $DvtTimelineSeriesItem$$.start = this.$_start$;
        $DvtTimelineSeriesItem$$.end = this.$_end$;
        $DvtTimelineSeriesItem$$.inverted = this.$_defaultInversions$[$DvtTimelineSeriesNode$$];
        $DvtTimelineSeriesItem$$.orientation = this.$Options$.orientation;
        $DvtTimelineSeriesItem$$.referenceObjects = this.$_referenceObjects$;
        $DvtTimelineSeriesItem$$.timeline = this;
        $DvtTimelineSeriesItem$$.index = $DvtTimelineSeriesNode$$;
        $DvtTimelineSeriesItem$$.animationOnDisplay = this.$Options$.animationOnDisplay;
        $DvtTimelineSeriesItem$$.animationOnDataChange = this.$Options$.animationOnDataChange;
        this.$Options$.majorAxis && ($DvtTimelineSeriesItem$$.scale = this.$Options$.majorAxis.scale, $DvtTimelineSeriesItem$$.timeAxis = this.$_seriesTimeAxis$, $DvtTimelineSeriesItem$$._cfs = this.$_seriesCustomFormatScales$);
        if ($DvtTimelineSeriesItem$$.styleDefaults = this.$Options$.styleDefaults) {
          $DvtTimelineSeriesItem$$.seriesStyleDefaults = this.$_seriesStyleDefaults$, $DvtTimelineSeriesItem$$.axisStyleDefaults = this.$_majorAxisStyleDefaults$;
        }
        $DvtTimelineSeriesItem$$._isRandomItemLayout = "random" == this.$_itemPosition$;
        $DvtTimelineSeriesItem$$._cts = this.$Options$._cts;
        this.$_seriesOptions$.push($DvtTimelineSeriesItem$$);
        null == this.$_series$[$DvtTimelineSeriesNode$$] && ($DvtTimelineSeriesItem$$ = new $DvtTimelineSeries$$(this.$getCtx$(), this.$HandleEvent$, this), this.$_series$.push($DvtTimelineSeriesItem$$));
      }
    } else {
      this.$_series$ = [];
    }
  };
  $dvt$$15$$.$Timeline$.prototype.$onAnimationEnd$ = function $$dvt$$15$$$$Timeline$$$$onAnimationEnd$$() {
    this.$AnimationStopped$ || ($dvt$$15$$.$Agent$.$isEnvironmentBrowser$() && this.$showThenHideHotspots$(), this.$RenderComplete$());
    this.$EventManager$.$addListeners$(this);
    this.$Animation$ = null;
    this.$AnimationStopped$ = !1;
  };
  $dvt$$15$$.$Timeline$.prototype.$_getOverviewObject$ = function $$dvt$$15$$$$Timeline$$$$_getOverviewObject$$() {
    var $dvt$$15$$ = {};
    $dvt$$15$$.start = this.$_start$;
    $dvt$$15$$.end = this.$_end$;
    $dvt$$15$$.renstart = this.$_viewStartTime$;
    $dvt$$15$$.width = this.$_contentLength$;
    $dvt$$15$$.ovp = "below";
    $dvt$$15$$.selmode = this.$_selectionMode$;
    $dvt$$15$$.rtl = this.$isRTL$();
    $dvt$$15$$.sid = "ts1";
    $dvt$$15$$._bts = "none";
    $dvt$$15$$._btc = "#4f4f4f";
    $dvt$$15$$._fc = "#aadd77";
    $dvt$$15$$._do = "0";
    var $DvtTimelineSeriesParser$$ = $DvtTimelineStyleUtils$$.$getOverviewWindowBackgroundColor$(this.$Options$);
    $dvt$$15$$._wbc = $DvtTimelineSeriesParser$$;
    $dvt$$15$$._hfc = $DvtTimelineSeriesParser$$;
    $DvtTimelineSeriesParser$$ = $DvtTimelineStyleUtils$$.$getOverviewWindowBorderColor$(this.$Options$);
    $dvt$$15$$._wbtc = $DvtTimelineSeriesParser$$;
    $dvt$$15$$._wbrc = $DvtTimelineSeriesParser$$;
    $dvt$$15$$._wbbc = $DvtTimelineSeriesParser$$;
    $dvt$$15$$._wblc = $DvtTimelineSeriesParser$$;
    $dvt$$15$$._wbts = "solid";
    $dvt$$15$$._wbrs = "solid";
    $dvt$$15$$._wbbs = "solid";
    $dvt$$15$$._wbls = "solid";
    $dvt$$15$$._ls = $DvtTimelineStyleUtils$$.$getOverviewLabelStyle$(this.$Options$).toString();
    $dvt$$15$$._obc = $DvtTimelineStyleUtils$$.$getOverviewBackgroundColor$(this.$Options$);
    $dvt$$15$$._ctic = $DvtTimelineStyleUtils$$.$getReferenceObjectColor$(this.$Options$);
    $dvt$$15$$._tic = "#BCC7D2";
    $dvt$$15$$._tabc = "#D9DFE3";
    $dvt$$15$$._tabo = "0";
    $dvt$$15$$._bs = "solid";
    $dvt$$15$$._bc = "#648BAF";
    $dvt$$15$$._bw = "1px";
    $dvt$$15$$._bof = "0px";
    $dvt$$15$$._dbs = "solid";
    $dvt$$15$$._dbc = "#648BAF";
    $dvt$$15$$._dbw = "1px";
    $dvt$$15$$._hbs = "solid";
    $dvt$$15$$._hbc = "#85bbe7";
    $dvt$$15$$._hbw = "2px";
    $dvt$$15$$._hbof = "0px";
    $dvt$$15$$._hgc = "#ebeced";
    $dvt$$15$$._hgo = "1";
    $dvt$$15$$._hdbs = "solid";
    $dvt$$15$$._hdbc = "#85bbe7";
    $dvt$$15$$._hdbw = "2px";
    $dvt$$15$$._sbs = "solid";
    $dvt$$15$$._sbc = "#000000";
    $dvt$$15$$._sbw = "2px";
    $dvt$$15$$._sbof = "0px";
    $dvt$$15$$._sbo = "1";
    $dvt$$15$$._sdbs = "solid";
    $dvt$$15$$._sdbc = "#000000";
    $dvt$$15$$._sdbw = "2px";
    $dvt$$15$$._asbs = "solid";
    $dvt$$15$$._asbc = "#000000";
    $dvt$$15$$._asbw = "2px";
    $dvt$$15$$._asbof = "0px";
    $dvt$$15$$._asbo = "1";
    $dvt$$15$$._asgc = "#e4f0fa";
    $dvt$$15$$._asgo = "1";
    $dvt$$15$$._asdbs = "solid";
    $dvt$$15$$._asdbc = "#000000";
    $dvt$$15$$._asdbw = "2px";
    $dvt$$15$$._aoc = "off";
    this.$_referenceObjects$ && 0 < this.$_referenceObjects$.length && this.$_referenceObjects$[0] && ($dvt$$15$$.ocd = this.$_referenceObjects$[0].getTime());
    this.$_isVertical$ ? ($dvt$$15$$.orn = "vertical", ($DvtTimelineSeriesParser$$ = this.$_resources$.overviewHandleVert) ? ($dvt$$15$$._hbi = $DvtTimelineSeriesParser$$, $dvt$$15$$._hw = "15", $dvt$$15$$._hh = "3") : $dvt$$15$$._htc = $DvtTimelineStyleUtils$$.$getOverviewHandleTextureColor$()) : ($dvt$$15$$.orn = "horizontal", ($DvtTimelineSeriesParser$$ = this.$_resources$.overviewHandleHor) ? ($dvt$$15$$._hbi = $DvtTimelineSeriesParser$$, $dvt$$15$$._hw = "3", $dvt$$15$$._hh = "15") : $dvt$$15$$._htc = 
    $DvtTimelineStyleUtils$$.$getOverviewHandleTextureColor$(), $dvt$$15$$._ds = "square", $dvt$$15$$._dsx = "1.3d", $dvt$$15$$._dsy = "0.9d");
    $dvt$$15$$.axisTicks = this.$_getOverviewAxisOptions$();
    $dvt$$15$$.markers = this.$_getOverviewMarkerOptions$();
    return $dvt$$15$$;
  };
  $dvt$$15$$.$Timeline$.prototype.$_getOverviewAxisOptions$ = function $$dvt$$15$$$$Timeline$$$$_getOverviewAxisOptions$$() {
    var $DvtTimelineSeriesParser$$ = [];
    if (this.$_seriesTimeAxis$) {
      var $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$;
      if (this.$_customTimeScales$ && this.$_customTimeScales$[this.$_seriesScale$]) {
        $DvtTimelineSeriesItem$$ = this.$_customTimeScales$[this.$_seriesScale$], $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesItem$$.times, $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesItem$$.labels;
      } else {
        if (this.$_seriesCustomFormatScales$ && this.$_seriesCustomFormatScales$[this.$_seriesScale$]) {
          $DvtTimelineSeriesItem$$ = this.$_seriesCustomFormatScales$[this.$_seriesScale$], $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesItem$$.times, $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesItem$$.labels;
        } else {
          $DvtTimelineSeriesNode$$ = [];
          $DvtTimelineSeriesItem$$ = [];
          for (var $DvtTimelineSeries$$ = this.$_start$, $DvtTimelineParser$$ = this.$_end$, $DvtTimelineDefaults$$ = this.$_isVertical$ ? this.$Height$ : this.$Width$, $DvtTimelineAutomation$$ = $dvt$$15$$.$TimeAxis$.$getPositionDate$($DvtTimelineSeries$$, $DvtTimelineParser$$, this.$_fetchStartPos$, $DvtTimelineDefaults$$), $DvtTimelineAutomation$$ = this.$_seriesTimeAxis$.$adjustDate$($DvtTimelineAutomation$$), $DvtTimelineEventManager$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeries$$, 
          $DvtTimelineParser$$, $DvtTimelineAutomation$$, $DvtTimelineDefaults$$);$DvtTimelineEventManager$$ < this.$_fetchEndPos$;) {
            $DvtTimelineSeriesItem$$.push(this.$_seriesTimeAxis$.$formatDate$($DvtTimelineAutomation$$)), $DvtTimelineSeriesNode$$.push($DvtTimelineAutomation$$.getTime()), $DvtTimelineAutomation$$ = this.$_seriesTimeAxis$.$getNextDate$($DvtTimelineAutomation$$.getTime()), $DvtTimelineEventManager$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeries$$, $DvtTimelineParser$$, $DvtTimelineAutomation$$, $DvtTimelineDefaults$$);
          }
        }
      }
      for ($DvtTimelineSeries$$ = 0;$DvtTimelineSeries$$ < $DvtTimelineSeriesItem$$.length;$DvtTimelineSeries$$++) {
        $DvtTimelineParser$$ = {}, $DvtTimelineParser$$.time = $DvtTimelineSeriesNode$$[$DvtTimelineSeries$$], $DvtTimelineParser$$.label = $DvtTimelineSeriesItem$$[$DvtTimelineSeries$$], $DvtTimelineSeriesParser$$.push($DvtTimelineParser$$);
      }
    }
    return $DvtTimelineSeriesParser$$;
  };
  $dvt$$15$$.$Timeline$.prototype.$_getOverviewMarkerOptions$ = function $$dvt$$15$$$$Timeline$$$$_getOverviewMarkerOptions$$() {
    if (this.$_series$) {
      for (var $dvt$$15$$ = [], $DvtTimelineSeriesParser$$ = this.$_series$.length, $DvtTimelineSeriesNode$$ = 0;$DvtTimelineSeriesNode$$ < $DvtTimelineSeriesParser$$;$DvtTimelineSeriesNode$$++) {
        for (var $DvtTimelineSeriesItem$$ = this.$_series$[$DvtTimelineSeriesNode$$].$_items$, $DvtTimelineSeries$$ = 0;$DvtTimelineSeries$$ < $DvtTimelineSeriesItem$$.length;$DvtTimelineSeries$$++) {
          var $DvtTimelineParser$$ = $DvtTimelineSeriesItem$$[$DvtTimelineSeries$$], $DvtTimelineDefaults$$ = {};
          $DvtTimelineDefaults$$.rk = $DvtTimelineSeries$$;
          $DvtTimelineDefaults$$.tid = $DvtTimelineParser$$.getId();
          $DvtTimelineDefaults$$.t = $DvtTimelineParser$$.$getStartTime$();
          $DvtTimelineDefaults$$._sd = "true";
          var $DvtTimelineAutomation$$ = $DvtTimelineParser$$.$getEndTime$();
          $DvtTimelineAutomation$$ && ($DvtTimelineDefaults$$.et = $DvtTimelineAutomation$$, ($DvtTimelineParser$$ = $DvtTimelineParser$$.$_durationFillColor$) && ($DvtTimelineDefaults$$.dfc = $DvtTimelineParser$$));
          $dvt$$15$$.push($DvtTimelineDefaults$$);
        }
      }
      return $dvt$$15$$;
    }
  };
  $dvt$$15$$.$Timeline$.prototype.$createViewportChangeEvent$ = function $$dvt$$15$$$$Timeline$$$$createViewportChangeEvent$$() {
    return $dvt$$15$$.$EventFactory$.$newTimelineViewportChangeEvent$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_timeAxis$.$_scale$);
  };
  $dvt$$15$$.$Timeline$.prototype.$HandleTouchStart$ = function $$dvt$$15$$$$Timeline$$$$HandleTouchStart$$($dvt$$15$$) {
    if (1 == $dvt$$15$$.touches.length) {
      if (this.$_dragPanSeries$ = this.$_findSeries$($dvt$$15$$.target)) {
        var $DvtTimelineSeriesParser$$ = this.$_series$[0] == this.$_dragPanSeries$ ? 0 : 1
      }
      this.$showThenHideHotspots$($DvtTimelineSeriesParser$$);
    }
  };
  $dvt$$15$$.$Timeline$.prototype.$HandleMouseWheel$ = function $$dvt$$15$$$$Timeline$$$$HandleMouseWheel$$($DvtTimelineSeriesParser$$) {
    $dvt$$15$$.$Timeline$.$superclass$.$HandleMouseWheel$.call(this, $DvtTimelineSeriesParser$$);
    this.$hasValidOptions$() && $DvtTimelineSeriesParser$$.$zoomWheelDelta$ && this.$handleZoomWheel$(this.$_contentLength$ * $DvtTimelineSeriesParser$$.$zoomWheelDelta$, $DvtTimelineSeriesParser$$.$zoomTime$, $DvtTimelineSeriesParser$$.$zoomCompLoc$, !0);
  };
  $dvt$$15$$.$Timeline$.prototype.$handleZoomWheel$ = function $$dvt$$15$$$$Timeline$$$$handleZoomWheel$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$) {
    $DvtTimelineSeriesParser$$ > this.$_timeAxis$.$_maxContentLength$ ? ($DvtTimelineSeriesParser$$ = this.$_timeAxis$.$_maxContentLength$, this.$disableZoomButton$(!0)) : this.$enableZoomButton$(!0);
    this.$_canvasLength$ > $DvtTimelineSeriesParser$$ ? ($DvtTimelineSeriesParser$$ = this.$_canvasLength$, this.$disableZoomButton$(!1)) : this.$enableZoomButton$(!1);
    var $DvtTimelineParser$$ = this.$_contentLength$ <= $DvtTimelineSeriesParser$$;
    $dvt$$15$$.$Timeline$.$superclass$.$handleZoomWheel$.call(this, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$);
    $DvtTimelineSeriesParser$$ = this.$_timeAxis$.$_zoomLevelLengths$;
    if ($DvtTimelineParser$$) {
      for (;0 < this.$_timeAxis$.$_zoomLevelOrder$;) {
        if ($DvtTimelineParser$$ = $DvtTimelineSeriesParser$$[this.$_timeAxis$.$_zoomLevelOrder$ - 1], this.$_contentLength$ >= $DvtTimelineParser$$) {
          this.$_timeAxis$.$setZoomLevelOrder$(this.$_timeAxis$.$_zoomLevelOrder$ - 1), this.$_timeAxis$.$decreaseScale$();
        } else {
          break;
        }
      }
    } else {
      for (;this.$_timeAxis$.$_zoomLevelOrder$ < $DvtTimelineSeriesParser$$.length - 1;) {
        if ($DvtTimelineParser$$ = $DvtTimelineSeriesParser$$[this.$_timeAxis$.$_zoomLevelOrder$], this.$_contentLength$ < $DvtTimelineParser$$) {
          this.$_timeAxis$.$setZoomLevelOrder$(this.$_timeAxis$.$_zoomLevelOrder$ + 1), this.$_timeAxis$.$increaseScale$();
        } else {
          break;
        }
      }
    }
    this.$_hasOverview$ && this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_isVertical$ ? this.$_overview$.$Height$ : this.$_overview$.$Width$);
    this.$applyAxisStyleValues$();
    $DvtTimelineRenderer$$.$_renderAxis$(this, this.$_timeZoomCanvas$);
    this.$updateSeries$();
    $DvtTimelineSeries$$ && this.dispatchEvent(this.$createViewportChangeEvent$());
  };
  $dvt$$15$$.$Timeline$.prototype.$updateSeries$ = function $$dvt$$15$$$$Timeline$$$$updateSeries$$() {
    if (this.$_series$) {
      var $DvtTimelineSeriesParser$$ = this.$_series$.length, $DvtTimelineSeriesNode$$ = this.$getTimeAxisVisibleSize$($DvtTimelineSeriesParser$$);
      this.$_seriesSize$ = (this.$_canvasSize$ - $DvtTimelineSeriesNode$$) / $DvtTimelineSeriesParser$$;
      for (var $DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $DvtTimelineSeriesParser$$;$DvtTimelineSeriesItem$$++) {
        var $DvtTimelineSeries$$ = this.$_series$[$DvtTimelineSeriesItem$$];
        $DvtTimelineSeries$$.$setClipPath$(null);
        var $DvtTimelineParser$$ = new $dvt$$15$$.$ClipPath$;
        if (this.$_isVertical$) {
          var $DvtTimelineDefaults$$ = this.$isRTL$() ? Math.abs($DvtTimelineSeriesItem$$ - 1) : $DvtTimelineSeriesItem$$;
          this.$isRTL$() && 1 == this.$_series$.length ? ($DvtTimelineParser$$.$addRect$($DvtTimelineSeriesNode$$, 0, this.$_seriesSize$, this.$_contentLength$), $DvtTimelineDefaults$$ = new $dvt$$15$$.$Matrix$(1, 0, 0, 1, $DvtTimelineSeriesNode$$, 0)) : ($DvtTimelineParser$$.$addRect$($DvtTimelineDefaults$$ * (this.$_seriesSize$ + $DvtTimelineSeriesNode$$), 0, this.$_seriesSize$, this.$_contentLength$), $DvtTimelineDefaults$$ = new $dvt$$15$$.$Matrix$(1, 0, 0, 1, $DvtTimelineDefaults$$ * (this.$_seriesSize$ + 
          $DvtTimelineSeriesNode$$), 0));
          var $DvtTimelineAutomation$$ = this.$_seriesSize$, $DvtTimelineEventManager$$ = this.$_contentLength$;
        } else {
          $DvtTimelineParser$$.$addRect$(0, $DvtTimelineSeriesItem$$ * (this.$_seriesSize$ + $DvtTimelineSeriesNode$$), this.$_contentLength$, this.$_seriesSize$), $DvtTimelineDefaults$$ = new $dvt$$15$$.$Matrix$(1, 0, 0, 1, 0, $DvtTimelineSeriesItem$$ * (this.$_seriesSize$ + $DvtTimelineSeriesNode$$)), $DvtTimelineAutomation$$ = this.$_contentLength$, $DvtTimelineEventManager$$ = this.$_seriesSize$;
        }
        $DvtTimelineSeries$$.$setClipPath$($DvtTimelineParser$$);
        $DvtTimelineSeries$$.$setMatrix$($DvtTimelineDefaults$$);
        $DvtTimelineSeries$$.$render$(null, $DvtTimelineAutomation$$, $DvtTimelineEventManager$$);
      }
    }
  };
  $dvt$$15$$.$Timeline$.prototype.$_handleResize$ = function $$dvt$$15$$$$Timeline$$$$_handleResize$$($dvt$$15$$, $DvtTimelineSeriesParser$$) {
    this.$Width$ = $dvt$$15$$;
    this.$Height$ = $DvtTimelineSeriesParser$$;
    this.$applyStyleValues$();
    this.$_fetchStartPos$ = 0;
    this.$_fetchEndPos$ = this.$_isVertical$ ? $DvtTimelineSeriesParser$$ : $dvt$$15$$;
    this.$prepareViewportLength$();
    $DvtTimelineRenderer$$.$_renderBackground$(this);
    if (this.$hasValidOptions$()) {
      if (this.$renderTimeZoomCanvas$(this.$_canvas$), this.$applyAxisStyleValues$(), this.$updateSeries$(), $DvtTimelineRenderer$$.$_renderAxis$(this, this.$_timeZoomCanvas$), $DvtTimelineRenderer$$.$_renderSeriesLabels$(this), $DvtTimelineRenderer$$.$_renderScrollHotspots$(this), $DvtTimelineRenderer$$.$_renderZoomControls$(this), this.$_hasOverview$ && ($DvtTimelineRenderer$$.$_renderOverview$(this), this.$SelectionHandler$)) {
        var $DvtTimelineSeriesNode$$ = this.$SelectionHandler$.$getSelectedIds$();
        if ($DvtTimelineSeriesNode$$ && 0 != $DvtTimelineSeriesNode$$.length) {
          for (var $DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $DvtTimelineSeriesNode$$.length;$DvtTimelineSeriesItem$$++) {
            this.$_overview$.$selSelectItem$($DvtTimelineSeriesNode$$[$DvtTimelineSeriesItem$$]);
          }
        }
      }
    } else {
      $DvtTimelineRenderer$$.$_renderEmptyText$(this);
    }
  };
  $dvt$$15$$.$Timeline$.prototype.$HandleKeyDown$ = function $$dvt$$15$$$$Timeline$$$$HandleKeyDown$$($DvtTimelineSeriesParser$$) {
    $dvt$$15$$.KeyboardEvent.$RIGHT_ARROW$ != $DvtTimelineSeriesParser$$.keyCode && $dvt$$15$$.KeyboardEvent.$LEFT_ARROW$ != $DvtTimelineSeriesParser$$.keyCode && $dvt$$15$$.KeyboardEvent.$DOWN_ARROW$ != $DvtTimelineSeriesParser$$.keyCode && $dvt$$15$$.KeyboardEvent.$UP_ARROW$ != $DvtTimelineSeriesParser$$.keyCode || this.$updateScrollForItemNavigation$(this.$EventManager$.$getFocus$());
  };
  $dvt$$15$$.$Timeline$.prototype.$HandleMouseDown$ = function $$dvt$$15$$$$Timeline$$$$HandleMouseDown$$($dvt$$15$$) {
    this.$_dragPanSeries$ = this.$_findSeries$($dvt$$15$$.target);
  };
  $dvt$$15$$.$Timeline$.prototype.$endDragPan$ = function $$dvt$$15$$$$Timeline$$$$endDragPan$$() {
    this.$_dragPanSeries$ = null;
    this.$endPan$();
  };
  $dvt$$15$$.$Timeline$.prototype.$endPan$ = function $$dvt$$15$$$$Timeline$$$$endPan$$() {
    this.$_triggerViewportChange$ && (this.$_triggerViewportChange$ = !1, this.dispatchEvent(this.$createViewportChangeEvent$()));
  };
  $dvt$$15$$.$Timeline$.prototype.$panBy$ = function $$dvt$$15$$$$Timeline$$$$panBy$$($dvt$$15$$, $DvtTimelineSeriesParser$$) {
    var $DvtTimelineSeriesNode$$ = this.$getTimeAxisVisibleSize$(this.$_series$.length);
    if (this.$_isVertical$) {
      if (this.$_dragPanSeries$) {
        var $DvtTimelineSeriesItem$$ = this.$_dragPanSeries$.$getTranslateX$() - $dvt$$15$$;
        if (1 < this.$_series$.length && (!this.$isRTL$() && this.$_dragPanSeries$.$_isInverted$ || this.$isRTL$() && !this.$_dragPanSeries$.$_isInverted$)) {
          var $DvtTimelineSeries$$ = $DvtTimelineSeriesNode$$ + 2 * this.$_dragPanSeries$.$Width$ - this.$_dragPanSeries$.$_maxOverflowValue$, $DvtTimelineSeriesNode$$ = this.$_dragPanSeries$.$Width$ + $DvtTimelineSeriesNode$$
        } else {
          this.$isRTL$() && !this.$_dragPanSeries$.$_isInverted$ ? $DvtTimelineSeries$$ = this.$_dragPanSeries$.$Width$ - this.$_dragPanSeries$.$_maxOverflowValue$ + $DvtTimelineSeriesNode$$ : ($DvtTimelineSeries$$ = 0, $DvtTimelineSeriesNode$$ = this.$_dragPanSeries$.$_maxOverflowValue$ - this.$_dragPanSeries$.$Width$);
        }
        $DvtTimelineSeriesItem$$ < $DvtTimelineSeries$$ ? $DvtTimelineSeriesItem$$ = $DvtTimelineSeries$$ : $DvtTimelineSeriesItem$$ > $DvtTimelineSeriesNode$$ && ($DvtTimelineSeriesItem$$ = $DvtTimelineSeriesNode$$);
        this.$_dragPanSeries$.$setTranslateX$($DvtTimelineSeriesItem$$);
      }
      this.$panZoomCanvasBy$($DvtTimelineSeriesParser$$);
      this.$_hasOverview$ && ($DvtTimelineSeriesItem$$ = this.$_overview$.$Height$, this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, $DvtTimelineSeriesItem$$));
    } else {
      this.$panZoomCanvasBy$($dvt$$15$$), this.$_hasOverview$ && ($DvtTimelineSeriesItem$$ = this.$_overview$.$Width$, this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, $DvtTimelineSeriesItem$$)), this.$_dragPanSeries$ && ($DvtTimelineSeriesItem$$ = this.$_dragPanSeries$.$getTranslateY$() - $DvtTimelineSeriesParser$$, this.$_dragPanSeries$.$_isInverted$ ? ($DvtTimelineSeries$$ = $DvtTimelineSeriesNode$$ + 2 * this.$_dragPanSeries$.$Height$ - this.$_dragPanSeries$.$_maxOverflowValue$, 
      $DvtTimelineSeriesNode$$ = this.$_dragPanSeries$.$Height$ + $DvtTimelineSeriesNode$$) : ($DvtTimelineSeries$$ = 0, $DvtTimelineSeriesNode$$ = this.$_dragPanSeries$.$_maxOverflowValue$ - this.$_dragPanSeries$.$Height$), $DvtTimelineSeriesItem$$ < $DvtTimelineSeries$$ ? $DvtTimelineSeriesItem$$ = $DvtTimelineSeries$$ : $DvtTimelineSeriesItem$$ > $DvtTimelineSeriesNode$$ && ($DvtTimelineSeriesItem$$ = $DvtTimelineSeriesNode$$), this.$_dragPanSeries$.$setTranslateY$($DvtTimelineSeriesItem$$));
    }
  };
  $dvt$$15$$.$Timeline$.prototype.$HandleEvent$ = function $$dvt$$15$$$$Timeline$$$$HandleEvent$$($DvtTimelineSeriesParser$$) {
    var $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.type;
    if ("selection" == $DvtTimelineSeriesNode$$ || "action" == $DvtTimelineSeriesNode$$) {
      $dvt$$15$$.$EventDispatcher$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $DvtTimelineSeriesParser$$);
    } else {
      if ("overview" == $DvtTimelineSeriesNode$$) {
        $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$getSubType$();
        if ("rangeChanging" == $DvtTimelineSeriesNode$$ || "rangeChange" == $DvtTimelineSeriesNode$$) {
          var $DvtTimelineSeriesItem$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
          this.$_viewStartTime$ = $DvtTimelineSeriesParser$$.$getNewStartTime$();
          this.$_viewEndTime$ = $DvtTimelineSeriesParser$$.$getNewEndTime$();
          var $DvtTimelineSeries$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
          if (0 < $DvtTimelineSeries$$) {
            var $DvtTimelineParser$$ = this.$_canvasLength$ / $DvtTimelineSeries$$;
            this.$setContentLength$($DvtTimelineParser$$ * (this.$_end$ - this.$_start$));
            this.$setRelativeStartPos$($DvtTimelineParser$$ * (this.$_start$ - this.$_viewStartTime$));
            $DvtTimelineParser$$ = this.$_timeAxis$.$_zoomLevelLengths$;
            if ($DvtTimelineSeriesItem$$ > $DvtTimelineSeries$$) {
              $DvtTimelineSeriesItem$$ = $DvtTimelineParser$$.length;
              for ($DvtTimelineSeries$$ = $DvtTimelineParser$$[$DvtTimelineSeriesItem$$ - 1];this.$_contentLength$ >= $DvtTimelineSeries$$ && 0 < $DvtTimelineSeriesItem$$;) {
                $DvtTimelineSeriesItem$$--, $DvtTimelineSeries$$ = $DvtTimelineParser$$[$DvtTimelineSeriesItem$$ - 1];
              }
              $DvtTimelineSeriesItem$$ == $DvtTimelineParser$$.length && $DvtTimelineSeriesItem$$--;
            } else {
              for ($DvtTimelineSeriesItem$$ = 0, $DvtTimelineSeries$$ = $DvtTimelineParser$$[$DvtTimelineSeriesItem$$];this.$_contentLength$ < $DvtTimelineSeries$$ && $DvtTimelineSeriesItem$$ < $DvtTimelineParser$$.length - 1;) {
                $DvtTimelineSeriesItem$$++, $DvtTimelineSeries$$ = $DvtTimelineParser$$[$DvtTimelineSeriesItem$$];
              }
            }
            this.$_timeAxis$.$setZoomLevelOrder$($DvtTimelineSeriesItem$$);
            this.$_timeAxis$.$setScale$(this.$_timeAxis$.$_zoomOrder$[$DvtTimelineSeriesItem$$]);
            this.$applyAxisStyleValues$();
            $DvtTimelineRenderer$$.$_renderAxis$(this, this.$_timeZoomCanvas$);
            this.$updateSeries$();
            this.$applyTimeZoomCanvasPosition$();
          }
          "rangeChange" == $DvtTimelineSeriesNode$$ && this.dispatchEvent(this.$createViewportChangeEvent$());
        }
        if ("scrollPos" == $DvtTimelineSeriesNode$$ || "scrollTime" == $DvtTimelineSeriesNode$$) {
          this.$_viewStartTime$ = $DvtTimelineSeriesParser$$.$getNewStartTime$(), this.$_viewEndTime$ = $DvtTimelineSeriesParser$$.$getNewEndTime$(), $DvtTimelineParser$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$), this.$setRelativeStartPos$($DvtTimelineParser$$ * (this.$_start$ - this.$_viewStartTime$)), this.$applyTimeZoomCanvasPosition$(), this.dispatchEvent(this.$createViewportChangeEvent$());
        }
      } else {
        if ($DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$getSubType$(), "selection" == $DvtTimelineSeriesNode$$) {
          var $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$getItemId$(), $DvtTimelineDefaults$$ = $DvtTimelineSeriesParser$$.$isMultiSelect$() && "multiple" == this.$_selectionMode$;
          for ($DvtTimelineSeriesParser$$ = 0;$DvtTimelineSeriesParser$$ < this.$_series$.length;$DvtTimelineSeriesParser$$++) {
            for ($DvtTimelineParser$$ = this.$_series$[$DvtTimelineSeriesParser$$], $DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $DvtTimelineParser$$.$_items$.length;$DvtTimelineSeriesItem$$++) {
              if ($DvtTimelineSeries$$ = $DvtTimelineParser$$.$_items$[$DvtTimelineSeriesItem$$], $DvtTimelineSeries$$.getId() == $DvtTimelineSeriesNode$$) {
                this.$SelectionHandler$.$_addToSelection$($DvtTimelineSeries$$, $DvtTimelineDefaults$$);
                this.$EventManager$.$setFocusObj$($DvtTimelineSeries$$);
                this.$updateScrollForItemSelection$($DvtTimelineSeries$$);
                break;
              }
            }
          }
        } else {
          if ("highlight" == $DvtTimelineSeriesNode$$) {
            for ($DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$getItemId$(), $DvtTimelineSeriesParser$$ = 0;$DvtTimelineSeriesParser$$ < this.$_series$.length;$DvtTimelineSeriesParser$$++) {
              for ($DvtTimelineParser$$ = this.$_series$[$DvtTimelineSeriesParser$$], $DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $DvtTimelineParser$$.$_items$.length;$DvtTimelineSeriesItem$$++) {
                if ($DvtTimelineSeries$$ = $DvtTimelineParser$$.$_items$[$DvtTimelineSeriesItem$$], $DvtTimelineSeries$$.getId() == $DvtTimelineSeriesNode$$) {
                  $DvtTimelineSeries$$.$showHoverEffect$(!0);
                  break;
                }
              }
            }
          } else {
            if ("unhighlight" == $DvtTimelineSeriesNode$$) {
              for ($DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$getItemId$(), $DvtTimelineSeriesParser$$ = 0;$DvtTimelineSeriesParser$$ < this.$_series$.length;$DvtTimelineSeriesParser$$++) {
                for ($DvtTimelineParser$$ = this.$_series$[$DvtTimelineSeriesParser$$], $DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $DvtTimelineParser$$.$_items$.length;$DvtTimelineSeriesItem$$++) {
                  if ($DvtTimelineSeries$$ = $DvtTimelineParser$$.$_items$[$DvtTimelineSeriesItem$$], $DvtTimelineSeries$$.getId() == $DvtTimelineSeriesNode$$) {
                    $DvtTimelineSeries$$.$hideHoverEffect$(!0);
                    break;
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  $dvt$$15$$.$Timeline$.prototype.$updateScrollForItemSelection$ = function $$dvt$$15$$$$Timeline$$$$updateScrollForItemSelection$$($dvt$$15$$) {
    var $DvtTimelineSeriesParser$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
    this.$_viewStartTime$ = $dvt$$15$$.$getStartTime$() - $DvtTimelineSeriesParser$$ / 2;
    this.$_viewStartTime$ < this.$_start$ ? this.$_viewStartTime$ = this.$_start$ : this.$_viewStartTime$ + $DvtTimelineSeriesParser$$ > this.$_end$ && (this.$_viewStartTime$ = this.$_end$ - $DvtTimelineSeriesParser$$);
    this.$_viewEndTime$ = this.$_viewStartTime$ + $DvtTimelineSeriesParser$$;
    this.$setRelativeStartPos$(this.$_contentLength$ / (this.$_end$ - this.$_start$) * (this.$_start$ - this.$_viewStartTime$));
    this.$applyTimeZoomCanvasPosition$();
    this.dispatchEvent(this.$createViewportChangeEvent$());
  };
  $dvt$$15$$.$Timeline$.prototype.$updateScrollForItemNavigation$ = function $$dvt$$15$$$$Timeline$$$$updateScrollForItemNavigation$$($dvt$$15$$) {
    var $DvtTimelineSeriesParser$$ = this.$_isVertical$ ? $dvt$$15$$.getHeight() : $dvt$$15$$.getWidth(), $DvtTimelineSeriesNode$$ = $DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$(), $DvtTimelineSeriesItem$$ = $dvt$$15$$.$_loc$ - (this.$_isVertical$ ? $DvtTimelineSeriesParser$$ / 2 + $DvtTimelineSeriesNode$$ : $DvtTimelineStyleUtils$$.$getBubbleOffset$() + $DvtTimelineSeriesNode$$);
    $dvt$$15$$ = this.$getRelativeStartPos$();
    this.$isRTL$() && !this.$_isVertical$ && ($DvtTimelineSeriesItem$$ -= $DvtTimelineSeriesNode$$);
    $DvtTimelineSeriesParser$$ = $DvtTimelineSeriesItem$$ + $DvtTimelineSeriesParser$$ + 2 * $DvtTimelineSeriesNode$$;
    $DvtTimelineSeriesNode$$ = $dvt$$15$$ - this.$_canvasLength$;
    -$DvtTimelineSeriesItem$$ > $dvt$$15$$ ? $dvt$$15$$ = -$DvtTimelineSeriesItem$$ : -$DvtTimelineSeriesParser$$ < $DvtTimelineSeriesNode$$ && ($dvt$$15$$ = -$DvtTimelineSeriesParser$$ + this.$_canvasLength$);
    $DvtTimelineSeriesItem$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$);
    $DvtTimelineSeriesParser$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
    this.$_viewStartTime$ = this.$_start$ - $dvt$$15$$ / $DvtTimelineSeriesItem$$;
    this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$, $dvt$$15$$ = (this.$_start$ - this.$_viewStartTime$) * $DvtTimelineSeriesItem$$);
    this.$_viewEndTime$ = this.$_viewStartTime$ + $DvtTimelineSeriesParser$$;
    this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$, this.$_viewStartTime$ = this.$_viewEndTime$ - $DvtTimelineSeriesParser$$, $dvt$$15$$ = (this.$_start$ - this.$_viewStartTime$) * $DvtTimelineSeriesItem$$);
    this.$setRelativeStartPos$($dvt$$15$$);
    this.$applyTimeZoomCanvasPosition$();
    this.$_hasOverview$ && this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_isVertical$ ? this.$_overview$.$Height$ : this.$_overview$.$Width$);
    this.dispatchEvent(this.$createViewportChangeEvent$());
  };
  $dvt$$15$$.$Timeline$.prototype.$handleShapeClick$ = function $$dvt$$15$$$$Timeline$$$$handleShapeClick$$($dvt$$15$$) {
    if ($dvt$$15$$ && ($dvt$$15$$ = this.$_findDrawable$($dvt$$15$$.target))) {
      var $DvtTimelineSeriesParser$$ = this.$_findSeries$($dvt$$15$$);
      $dvt$$15$$.$_node$ && ($DvtTimelineSeriesParser$$ = this.$_findSeries$($dvt$$15$$), $DvtTimelineSeriesParser$$.$HandleItemAction$($dvt$$15$$.$_node$));
    }
  };
  $dvt$$15$$.$Timeline$.prototype.$applyInitialSelections$ = function $$dvt$$15$$$$Timeline$$$$applyInitialSelections$$() {
    if (this.$Options$.selection) {
      for (var $dvt$$15$$ = [], $DvtTimelineSeriesParser$$ = 0;$DvtTimelineSeriesParser$$ < this.$_series$.length;$DvtTimelineSeriesParser$$++) {
        for (var $DvtTimelineSeriesNode$$ = this.$_series$[$DvtTimelineSeriesParser$$], $DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $DvtTimelineSeriesNode$$.$_items$.length;$DvtTimelineSeriesItem$$++) {
          $dvt$$15$$.push($DvtTimelineSeriesNode$$.$_items$[$DvtTimelineSeriesItem$$]);
        }
      }
    }
    this.$SelectionHandler$.$processInitialSelections$(this.$Options$.selection, $dvt$$15$$);
  };
  $dvt$$15$$.$Timeline$.prototype.$_findSeries$ = function $$dvt$$15$$$$Timeline$$$$_findSeries$$($dvt$$15$$) {
    if (this.$hasValidOptions$() && $dvt$$15$$ && $dvt$$15$$ != this) {
      var $DvtTimelineSeriesParser$$ = $dvt$$15$$.getId();
      return $dvt$$15$$ == this.$_series$[0] || 1 < this.$_series$.length && $dvt$$15$$ == this.$_series$[1] ? $dvt$$15$$ : $DvtTimelineSeriesParser$$ && "_s0" == $DvtTimelineSeriesParser$$.substring($DvtTimelineSeriesParser$$.length - 3, $DvtTimelineSeriesParser$$.length) ? this.$_series$[0] : $DvtTimelineSeriesParser$$ && "_s1" == $DvtTimelineSeriesParser$$.substring($DvtTimelineSeriesParser$$.length - 3, $DvtTimelineSeriesParser$$.length) ? this.$_series$[1] : this.$_findSeries$($dvt$$15$$.getParent());
    }
    return null;
  };
  $dvt$$15$$.$Timeline$.prototype.$_findDrawable$ = function $$dvt$$15$$$$Timeline$$$$_findDrawable$$($dvt$$15$$) {
    if ($dvt$$15$$) {
      var $DvtTimelineSeriesParser$$ = $dvt$$15$$.getId();
      if ($DvtTimelineSeriesParser$$ && "_duration_" == $DvtTimelineSeriesParser$$.substring(0, 10) && $dvt$$15$$.$_node$) {
        return $dvt$$15$$;
      }
      var $DvtTimelineSeriesNode$$ = $dvt$$15$$.getParent();
      if ($DvtTimelineSeriesNode$$) {
        if ($DvtTimelineSeriesParser$$ && "zoom" == $DvtTimelineSeriesParser$$.substring(0, 4)) {
          return $dvt$$15$$;
        }
        if ($DvtTimelineSeriesParser$$ && "_bubble_" == $DvtTimelineSeriesParser$$.substring(0, 8) && $DvtTimelineSeriesNode$$.$_node$) {
          return $DvtTimelineSeriesNode$$;
        }
        if ($dvt$$15$$ = $DvtTimelineSeriesNode$$.getParent()) {
          if ($DvtTimelineSeriesParser$$ && "_bubble_" == $DvtTimelineSeriesParser$$.substring(0, 8) && $dvt$$15$$.$_node$) {
            return $dvt$$15$$;
          }
          if (($DvtTimelineSeriesParser$$ = $dvt$$15$$.getId()) && "_bubble_" == $DvtTimelineSeriesParser$$.substring(0, 8) && $dvt$$15$$.getParent()) {
            return $dvt$$15$$.getParent();
          }
        }
      }
    }
    return null;
  };
  $dvt$$15$$.$Timeline$.prototype.$getAutomation$ = function $$dvt$$15$$$$Timeline$$$$getAutomation$$() {
    this.$Automation$ || (this.$Automation$ = new $DvtTimelineAutomation$$(this));
    return this.$Automation$;
  };
  $dvt$$15$$.$Timeline$.prototype.$clearTimeline$ = function $$dvt$$15$$$$Timeline$$$$clearTimeline$$() {
    this.$_canvas$ && this.$_canvas$.$removeChildren$();
    this.$clearOverview$();
  };
  $dvt$$15$$.$Timeline$.prototype.$clearOverview$ = function $$dvt$$15$$$$Timeline$$$$clearOverview$$() {
    this.$_overviewCanvas$ && (this.removeChild(this.$_overviewCanvas$), this.$_overviewCanvas$ = null);
  };
  $dvt$$15$$.$Obj$.$createSubclass$($DvtTimelineAutomation$$, $dvt$$15$$.$Automation$);
  $DvtTimelineAutomation$$.$TIMELINE_ITEM_STRING$ = "timelineItem";
  $DvtTimelineAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineAutomation$$$$$GetSubIdForDomElement$$($DvtTimelineSeriesParser$$) {
    if (($DvtTimelineSeriesParser$$ = this.$_timeline$.$EventManager$.$GetLogicalObject$($DvtTimelineSeriesParser$$)) && $DvtTimelineSeriesParser$$ instanceof $DvtTimelineSeriesNode$$) {
      for (var $DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < this.$_timeline$.$_series$.length;$DvtTimelineSeriesItem$$++) {
        var $DvtTimelineSeries$$ = $dvt$$15$$.$ArrayUtils$.$getIndex$(this.$_timeline$.$_series$[$DvtTimelineSeriesItem$$].$_items$, $DvtTimelineSeriesParser$$);
        if (-1 != $DvtTimelineSeries$$) {
          return $DvtTimelineAutomation$$.$TIMELINE_ITEM_STRING$ + "[" + $DvtTimelineSeriesItem$$ + "][" + $DvtTimelineSeries$$ + "]";
        }
      }
    }
    return null;
  };
  $DvtTimelineAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineAutomation$$$$$getDomElementForSubId$$($dvt$$15$$) {
    if ($dvt$$15$$) {
      var $DvtTimelineSeriesParser$$ = $dvt$$15$$.indexOf("[");
      if (0 < $DvtTimelineSeriesParser$$ && $dvt$$15$$.substring(0, $DvtTimelineSeriesParser$$) === $DvtTimelineAutomation$$.$TIMELINE_ITEM_STRING$) {
        var $DvtTimelineSeriesNode$$ = $dvt$$15$$.indexOf("]");
        if (0 < $DvtTimelineSeriesNode$$) {
          var $DvtTimelineSeriesItem$$ = parseInt($dvt$$15$$.substring($DvtTimelineSeriesNode$$ + 2, $dvt$$15$$.length - 1));
          if ($dvt$$15$$ = this.$_timeline$.$_series$[parseInt($dvt$$15$$.substring($DvtTimelineSeriesParser$$ + 1, $DvtTimelineSeriesNode$$))]) {
            if ($DvtTimelineSeriesItem$$ = $dvt$$15$$.$_items$[$DvtTimelineSeriesItem$$]) {
              return $DvtTimelineSeriesItem$$.$getDisplayables$()[0].$getElem$();
            }
          }
        }
      }
    }
    return null;
  };
  $dvt$$15$$.$Obj$.$createSubclass$($DvtTimelineDefaults$$, $dvt$$15$$.$BaseComponentDefaults$);
  $DvtTimelineDefaults$$.$VERSION_1$ = {animationOnDataChange:"none", animationOnDisplay:"none", orientation:"horizontal", overview:{rendered:"off"}, selectionMode:"none", styleDefaults:{animationDuration:500, borderColor:"#d9dfe3", item:{backgroundColor:"#ffffff", borderColor:"#648baf", descriptionStyle:new $dvt$$15$$.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; color: #084B8A; white-space: nowrap;"), hoverBorderColor:"#85bbe7", selectedBorderColor:"#000000", 
  titleStyle:new $dvt$$15$$.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: bold; color: #000000; white-space: nowrap;")}, majorAxis:{labelStyle:new $dvt$$15$$.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: bold; color: #4f4f4f; background-color: rgba(249,249,249,0.8); white-space: nowrap;"), separatorColor:"#bcc7d2"}, minorAxis:{backgroundColor:"#f9f9f9", borderColor:"#d9dfe3", labelStyle:new $dvt$$15$$.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; color: #333333;"), 
  separatorColor:"#bcc7d2"}, overview:{backgroundColor:"#e6ecf3", labelStyle:new $dvt$$15$$.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: bold; color: #4f4f4f;"), window:{backgroundColor:"#ffffff", borderColor:"#4f4f4f"}}, referenceObject:{color:"#ff591f"}, series:{backgroundColor:"#f9f9f9", colors:$dvt$$15$$.$CSSStyle$.$COLORS_ALTA$, emptyTextStyle:new $dvt$$15$$.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #333333; white-space: nowrap;"), 
  labelStyle:new $dvt$$15$$.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: bold; color: #252525; background-color: rgba(249,249,249,0.8); white-space: nowrap;")}}};
  $dvt$$15$$.$Obj$.$createSubclass$($DvtTimelineParser$$, $dvt$$15$$.$Obj$);
  $DvtTimelineParser$$.prototype.parse = function $$DvtTimelineParser$$$$parse$($dvt$$15$$) {
    var $DvtTimelineSeriesParser$$ = {};
    $DvtTimelineSeriesParser$$.start = (new Date($dvt$$15$$.start)).getTime();
    $DvtTimelineSeriesParser$$.end = (new Date($dvt$$15$$.end)).getTime();
    $dvt$$15$$.viewportStart && ($DvtTimelineSeriesParser$$.$viewStart$ = (new Date($dvt$$15$$.viewportStart)).getTime());
    $dvt$$15$$.viewportEnd && ($DvtTimelineSeriesParser$$.$viewEnd$ = (new Date($dvt$$15$$.viewportEnd)).getTime());
    $DvtTimelineSeriesParser$$.$selectionMode$ = $dvt$$15$$.selectionMode ? $dvt$$15$$.selectionMode : "none";
    $DvtTimelineSeriesParser$$.$inlineStyle$ = $dvt$$15$$.style;
    var $DvtTimelineSeriesNode$$ = $dvt$$15$$.minorAxis;
    $DvtTimelineSeriesNode$$ && ($DvtTimelineSeriesParser$$.scale = $DvtTimelineSeriesNode$$.scale, $DvtTimelineSeriesParser$$.$customFormatScales$ = $DvtTimelineSeriesNode$$._cfs);
    if ($DvtTimelineSeriesNode$$ = $dvt$$15$$.majorAxis) {
      $DvtTimelineSeriesParser$$.$seriesScale$ = $DvtTimelineSeriesNode$$.scale, $DvtTimelineSeriesParser$$.$seriesConverter$ = $DvtTimelineSeriesNode$$.converter, $DvtTimelineSeriesParser$$.$seriesCustomFormatScales$ = $DvtTimelineSeriesNode$$._cfs;
    }
    $DvtTimelineSeriesParser$$.$shortDesc$ = $dvt$$15$$.shortDesc;
    $DvtTimelineSeriesParser$$.orientation = $dvt$$15$$.orientation;
    if (($DvtTimelineSeriesNode$$ = $dvt$$15$$.referenceObjects) && 0 < $DvtTimelineSeriesNode$$.length) {
      for (var $DvtTimelineSeriesItem$$ = [], $DvtTimelineSeries$$ = 0;$DvtTimelineSeries$$ < $DvtTimelineSeriesNode$$.length;$DvtTimelineSeries$$++) {
        $DvtTimelineSeriesItem$$.push(new Date($DvtTimelineSeriesNode$$[$DvtTimelineSeries$$].value));
      }
      $DvtTimelineSeriesParser$$.$referenceObjects$ = $DvtTimelineSeriesItem$$;
    }
    $DvtTimelineSeriesNode$$ = $dvt$$15$$.overview;
    $DvtTimelineSeriesParser$$.$hasOverview$ = null != $DvtTimelineSeriesNode$$ && "on" == $DvtTimelineSeriesNode$$.rendered ? !0 : !1;
    $DvtTimelineSeriesParser$$.$timeZoneOffsets$ = $dvt$$15$$._tzo;
    $DvtTimelineSeriesParser$$.$itemPosition$ = $dvt$$15$$._ip;
    $DvtTimelineSeriesParser$$.$customTimeScales$ = $dvt$$15$$._cts;
    return $DvtTimelineSeriesParser$$;
  };
  var $DvtTimelineRenderer$$ = {};
  $dvt$$15$$.$Obj$.$createSubclass$($DvtTimelineRenderer$$, $dvt$$15$$.$Obj$);
  $DvtTimelineRenderer$$.$renderTimeline$ = function $$DvtTimelineRenderer$$$$renderTimeline$$($DvtTimelineSeriesParser$$) {
    $DvtTimelineRenderer$$.$_renderBackground$($DvtTimelineSeriesParser$$);
    $DvtTimelineRenderer$$.$_renderScrollableCanvas$($DvtTimelineSeriesParser$$);
    if ($DvtTimelineSeriesParser$$.$hasValidOptions$()) {
      $DvtTimelineSeriesParser$$.$renderTimeZoomCanvas$($DvtTimelineSeriesParser$$.$_canvas$);
      var $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$_timeZoomCanvas$;
      $DvtTimelineRenderer$$.$_renderSeries$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$);
      $DvtTimelineRenderer$$.$_renderSeriesLabels$($DvtTimelineSeriesParser$$);
      $DvtTimelineRenderer$$.$_renderAxis$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$);
      $DvtTimelineSeriesParser$$.$_hasOverview$ ? $DvtTimelineRenderer$$.$_renderOverview$($DvtTimelineSeriesParser$$) : $DvtTimelineSeriesParser$$.$clearOverview$();
      if ($DvtTimelineSeriesParser$$.$_keyboardHandler$) {
        for ($DvtTimelineSeriesNode$$ = 0;$DvtTimelineSeriesNode$$ < $DvtTimelineSeriesParser$$.$_series$.length;$DvtTimelineSeriesNode$$++) {
          var $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesParser$$.$_series$[$DvtTimelineSeriesNode$$];
          if ($DvtTimelineSeriesItem$$.$_items$ && 0 < $DvtTimelineSeriesItem$$.$_items$.length) {
            $DvtTimelineSeriesParser$$.$EventManager$.$setFocusObj$($DvtTimelineSeriesItem$$.$_items$[0]);
            break;
          }
        }
      }
      $DvtTimelineRenderer$$.$_renderScrollHotspots$($DvtTimelineSeriesParser$$);
      $DvtTimelineRenderer$$.$_renderZoomControls$($DvtTimelineSeriesParser$$);
      $DvtTimelineSeriesParser$$.$SelectionHandler$ && $DvtTimelineSeriesParser$$.$applyInitialSelections$();
      $dvt$$15$$.$TimeAxis$.$supportsTouch$() && $DvtTimelineSeriesParser$$.$_setAriaProperty$("flowto", $DvtTimelineSeriesParser$$.$_series$[0].getId());
      for ($DvtTimelineSeriesNode$$ = 0;$DvtTimelineSeriesNode$$ < $DvtTimelineSeriesParser$$.$_series$.length;$DvtTimelineSeriesNode$$++) {
        $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesParser$$.$_series$[$DvtTimelineSeriesNode$$], $DvtTimelineSeriesItem$$.$triggerAnimations$();
      }
      $dvt$$15$$.$Agent$.$isEnvironmentBrowser$() && !$DvtTimelineSeriesParser$$.$Animation$ && $DvtTimelineSeriesParser$$.$showThenHideHotspots$();
    } else {
      $DvtTimelineRenderer$$.$_renderEmptyText$($DvtTimelineSeriesParser$$);
    }
  };
  $DvtTimelineRenderer$$.$_renderBackground$ = function $$DvtTimelineRenderer$$$$_renderBackground$$($DvtTimelineSeriesParser$$) {
    $DvtTimelineSeriesParser$$.$_background$ ? ($DvtTimelineSeriesParser$$.$_background$.$setClipPath$(null), $DvtTimelineSeriesParser$$.$_background$.$setWidth$($DvtTimelineSeriesParser$$.$_backgroundWidth$), $DvtTimelineSeriesParser$$.$_background$.$setHeight$($DvtTimelineSeriesParser$$.$_backgroundHeight$)) : $DvtTimelineSeriesParser$$.$_background$ = new $dvt$$15$$.Rect($DvtTimelineSeriesParser$$.$getCtx$(), 0, 0, $DvtTimelineSeriesParser$$.$_backgroundWidth$, $DvtTimelineSeriesParser$$.$_backgroundHeight$, 
    "bg");
    $DvtTimelineSeriesParser$$.$_background$.$setCSSStyle$($DvtTimelineSeriesParser$$.$_style$);
    $DvtTimelineSeriesParser$$.$_background$.$setPixelHinting$();
    var $DvtTimelineSeriesNode$$ = new $dvt$$15$$.$ClipPath$;
    $DvtTimelineSeriesNode$$.$addRect$(0, 0, $DvtTimelineSeriesParser$$.$_backgroundWidth$, $DvtTimelineSeriesParser$$.$_backgroundHeight$);
    $DvtTimelineSeriesParser$$.$_background$.$setClipPath$($DvtTimelineSeriesNode$$);
    $DvtTimelineSeriesParser$$.$_background$.getParent() != $DvtTimelineSeriesParser$$ && $DvtTimelineSeriesParser$$.$addChild$($DvtTimelineSeriesParser$$.$_background$);
  };
  $DvtTimelineRenderer$$.$_renderScrollableCanvas$ = function $$DvtTimelineRenderer$$$$_renderScrollableCanvas$$($DvtTimelineSeriesParser$$) {
    $DvtTimelineSeriesParser$$.$_canvas$ || ($DvtTimelineSeriesParser$$.$_canvas$ = new $dvt$$15$$.$Container$($DvtTimelineSeriesParser$$.$getCtx$(), "canvas"), $DvtTimelineSeriesParser$$.$addChild$($DvtTimelineSeriesParser$$.$_canvas$));
  };
  $DvtTimelineRenderer$$.$_renderSeries$ = function $$DvtTimelineRenderer$$$$_renderSeries$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) {
    var $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesParser$$.$getTimeAxis$();
    if ($DvtTimelineSeriesParser$$.$_series$) {
      var $DvtTimelineSeries$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineSeriesParser$$.$getCtx$()), $DvtTimelineParser$$ = $DvtTimelineSeriesParser$$.$_series$.length, $DvtTimelineDefaults$$ = $DvtTimelineSeriesParser$$.$getTimeAxisVisibleSize$($DvtTimelineParser$$);
      !$DvtTimelineSeriesParser$$.$isVertical$() && 1 < $DvtTimelineParser$$ && $DvtTimelineSeriesParser$$.$_canvasSize$ % 2 != $DvtTimelineDefaults$$ % 2 && ($DvtTimelineSeriesItem$$.$setContentSize$($DvtTimelineSeriesItem$$.$_contentSize$ + 1), $DvtTimelineDefaults$$ = $DvtTimelineSeriesParser$$.$getTimeAxisVisibleSize$($DvtTimelineParser$$));
      $DvtTimelineSeriesParser$$.$_seriesSize$ = ($DvtTimelineSeriesParser$$.$_canvasSize$ - $DvtTimelineDefaults$$) / $DvtTimelineParser$$;
      for ($DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $DvtTimelineParser$$;$DvtTimelineSeriesItem$$++) {
        var $DvtTimelineAutomation$$ = $DvtTimelineSeriesParser$$.$_series$[$DvtTimelineSeriesItem$$];
        $DvtTimelineAutomation$$.$setClipPath$(null);
        var $DvtTimelineEventManager$$ = new $dvt$$15$$.$ClipPath$;
        if ($DvtTimelineSeriesParser$$.$isVertical$()) {
          var $DvtTimeUtils$$ = $DvtTimelineSeries$$ ? Math.abs($DvtTimelineSeriesItem$$ - 1) : $DvtTimelineSeriesItem$$;
          $DvtTimelineSeries$$ && 1 == $DvtTimelineSeriesParser$$.$_series$.length ? ($DvtTimelineEventManager$$.$addRect$($DvtTimelineDefaults$$, 0, $DvtTimelineSeriesParser$$.$_seriesSize$, $DvtTimelineSeriesParser$$.$_contentLength$), $DvtTimeUtils$$ = new $dvt$$15$$.$Matrix$(1, 0, 0, 1, $DvtTimelineDefaults$$, 0)) : ($DvtTimelineEventManager$$.$addRect$($DvtTimeUtils$$ * ($DvtTimelineSeriesParser$$.$_seriesSize$ + $DvtTimelineDefaults$$), 0, $DvtTimelineSeriesParser$$.$_seriesSize$, $DvtTimelineSeriesParser$$.$_contentLength$), 
          $DvtTimeUtils$$ = new $dvt$$15$$.$Matrix$(1, 0, 0, 1, $DvtTimeUtils$$ * ($DvtTimelineSeriesParser$$.$_seriesSize$ + $DvtTimelineDefaults$$), 0));
          var $DvtTimelineKeyboardHandler$$ = $DvtTimelineSeriesParser$$.$_seriesSize$, $DvtTimelineStyleUtils$$ = $DvtTimelineSeriesParser$$.$_contentLength$;
        } else {
          $DvtTimelineEventManager$$.$addRect$(0, $DvtTimelineSeriesItem$$ * ($DvtTimelineSeriesParser$$.$_seriesSize$ + $DvtTimelineDefaults$$), $DvtTimelineSeriesParser$$.$_contentLength$, $DvtTimelineSeriesParser$$.$_seriesSize$), $DvtTimeUtils$$ = new $dvt$$15$$.$Matrix$(1, 0, 0, 1, 0, $DvtTimelineSeriesItem$$ * ($DvtTimelineSeriesParser$$.$_seriesSize$ + $DvtTimelineDefaults$$)), $DvtTimelineKeyboardHandler$$ = $DvtTimelineSeriesParser$$.$_contentLength$, $DvtTimelineStyleUtils$$ = $DvtTimelineSeriesParser$$.$_seriesSize$
          ;
        }
        $DvtTimelineAutomation$$.$setClipPath$($DvtTimelineEventManager$$);
        $DvtTimelineAutomation$$.$setMatrix$($DvtTimeUtils$$);
        $DvtTimelineAutomation$$.getParent() != $DvtTimelineSeriesNode$$ && $DvtTimelineSeriesNode$$.$addChild$($DvtTimelineAutomation$$);
        $DvtTimelineAutomation$$.$render$($DvtTimelineSeriesParser$$.$_seriesOptions$[$DvtTimelineSeriesItem$$], $DvtTimelineKeyboardHandler$$, $DvtTimelineStyleUtils$$);
      }
    }
  };
  $DvtTimelineRenderer$$.$_renderSeriesLabels$ = function $$DvtTimelineRenderer$$$$_renderSeriesLabels$$($DvtTimelineSeriesParser$$) {
    if ($DvtTimelineSeriesParser$$.$_series$) {
      var $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$getCtx$(), $DvtTimelineSeriesItem$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineSeriesNode$$);
      if ($DvtTimelineSeriesParser$$.$_seriesLabels$) {
        for (var $DvtTimelineSeries$$ = 0;$DvtTimelineSeries$$ < $DvtTimelineSeriesParser$$.$_seriesLabels$.length;$DvtTimelineSeries$$++) {
          $DvtTimelineSeriesParser$$.removeChild($DvtTimelineSeriesParser$$.$_seriesLabels$[$DvtTimelineSeries$$]);
        }
      }
      $DvtTimelineSeriesParser$$.$_seriesLabels$ = [];
      for (var $DvtTimelineParser$$ = $DvtTimelineSeriesParser$$.$_series$.length, $DvtTimelineDefaults$$ = $DvtTimelineStyleUtils$$.$getSeriesLabelSpacing$(), $DvtTimelineAutomation$$ = 2 * $dvt$$15$$.$TransientButton$.$_DEFAULT_RADIUS$ + 6, $DvtTimelineEventManager$$ = 2 * $DvtTimelineDefaults$$, $DvtTimelineSeries$$ = 0;$DvtTimelineSeries$$ < $DvtTimelineParser$$;$DvtTimelineSeries$$++) {
        var $DvtTimeUtils$$ = $DvtTimelineSeriesParser$$.$_series$[$DvtTimelineSeries$$], $DvtTimelineKeyboardHandler$$ = $DvtTimeUtils$$.$getLabel$();
        if (null != $DvtTimelineKeyboardHandler$$) {
          var $DvtTimelineRenderer$$ = $DvtTimelineStyleUtils$$.$getSeriesLabelStyle$($DvtTimelineSeriesParser$$.$Options$), $DvtTimelineKeyboardHandler$$ = new $dvt$$15$$.$OutputText$($DvtTimelineSeriesNode$$, $DvtTimelineKeyboardHandler$$, 0, 0, "sl_s" + $DvtTimelineSeries$$);
          $DvtTimelineKeyboardHandler$$.$setCSSStyle$($DvtTimelineRenderer$$);
          $DvtTimelineSeriesParser$$.$addChild$($DvtTimelineKeyboardHandler$$);
          var $DvtTimelineSeriesItemRenderer$$ = $DvtTimelineKeyboardHandler$$.$getDimensions$();
          $DvtTimelineSeriesParser$$.removeChild($DvtTimelineKeyboardHandler$$);
          var $DvtTimelineSeriesRenderer$$ = $DvtTimelineSeriesParser$$.$isVertical$() ? $DvtTimelineSeriesParser$$.$_seriesSize$ : $DvtTimelineSeriesParser$$.$_canvasLength$, $DvtTimelineSeriesRenderer$$ = Math.min($DvtTimelineSeriesItemRenderer$$.$w$, $DvtTimelineSeriesRenderer$$ - ($DvtTimelineSeries$$ - 1) * -$DvtTimelineAutomation$$ - $DvtTimelineEventManager$$), $seriesLabelPadding$$ = $DvtTimelineStyleUtils$$.$getSeriesLabelPadding$(), $backgroundRect$$1$$ = new $dvt$$15$$.Rect($DvtTimelineSeriesNode$$, 
          0, 0, $DvtTimelineSeriesRenderer$$ + 2 * $seriesLabelPadding$$, $DvtTimelineSeriesItemRenderer$$.$h$ + 2 * $seriesLabelPadding$$, "slb_s" + $DvtTimelineSeries$$);
          $backgroundRect$$1$$.$setCSSStyle$($DvtTimelineRenderer$$);
          $backgroundRect$$1$$.$setCornerRadius$(3);
          if ($DvtTimelineSeriesParser$$.$isVertical$()) {
            $DvtTimelineRenderer$$ = $DvtTimelineSeriesItem$$ ? Math.abs($DvtTimelineSeries$$ - 1) * ($DvtTimelineSeriesParser$$.$_canvasSize$ - $DvtTimelineSeriesRenderer$$ - $DvtTimelineEventManager$$) + $DvtTimelineDefaults$$ + $DvtTimelineSeriesParser$$.$_startX$ + ($DvtTimelineSeries$$ - 1) * $DvtTimelineAutomation$$ : $DvtTimelineSeries$$ * ($DvtTimelineSeriesParser$$.$_canvasSize$ - $DvtTimelineSeriesRenderer$$ - $DvtTimelineEventManager$$) + $DvtTimelineDefaults$$ + $DvtTimelineSeriesParser$$.$_startX$ + 
            ($DvtTimelineSeries$$ - 1) * -$DvtTimelineAutomation$$, $posY$$3$$ = $DvtTimelineSeriesParser$$.$_startY$ + $DvtTimelineDefaults$$;
          } else {
            var $DvtTimelineRenderer$$ = $DvtTimelineSeriesItem$$ ? $DvtTimelineSeriesParser$$.$_canvasLength$ - $DvtTimelineSeriesRenderer$$ - $DvtTimelineDefaults$$ - ($DvtTimelineSeries$$ - 1) * -$DvtTimelineAutomation$$ : $DvtTimelineSeriesParser$$.$_startX$ + $DvtTimelineDefaults$$ + ($DvtTimelineSeries$$ - 1) * -$DvtTimelineAutomation$$, $posY$$3$$ = $DvtTimelineSeries$$ * ($DvtTimelineSeriesParser$$.$_canvasSize$ - $DvtTimelineSeriesItemRenderer$$.$h$ - $DvtTimelineEventManager$$) + $DvtTimelineDefaults$$ + 
            $DvtTimelineSeriesParser$$.$_startY$
          }
          $DvtTimelineSeriesItemRenderer$$ = new $dvt$$15$$.$Matrix$(1, 0, 0, 1, $DvtTimelineRenderer$$, $posY$$3$$);
          $DvtTimelineKeyboardHandler$$.$setMatrix$($DvtTimelineSeriesItemRenderer$$);
          $DvtTimelineSeriesItemRenderer$$ = new $dvt$$15$$.$Matrix$(1, 0, 0, 1, $DvtTimelineRenderer$$ - $seriesLabelPadding$$, $posY$$3$$ - $seriesLabelPadding$$);
          $backgroundRect$$1$$.$setMatrix$($DvtTimelineSeriesItemRenderer$$);
          $DvtTimelineSeriesParser$$.$addChild$($backgroundRect$$1$$);
          $dvt$$15$$.$TextUtils$.$fitText$($DvtTimelineKeyboardHandler$$, $DvtTimelineSeriesRenderer$$, Infinity, $DvtTimelineSeriesParser$$);
          $DvtTimelineSeriesParser$$.$_seriesLabels$.push($backgroundRect$$1$$);
          $DvtTimelineSeriesParser$$.$_seriesLabels$.push($DvtTimelineKeyboardHandler$$);
        }
        $DvtTimeUtils$$.$_isEmpty$ && ($DvtTimeUtils$$ = $DvtTimeUtils$$.$_emptyText$, null != $DvtTimeUtils$$ && ($DvtTimeUtils$$ = new $dvt$$15$$.$OutputText$($DvtTimelineSeriesNode$$, $DvtTimeUtils$$, 0, 0, "et_s" + $DvtTimelineSeries$$), $DvtTimeUtils$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getEmptyTextStyle$($DvtTimelineSeriesParser$$.$Options$)), $DvtTimelineSeriesParser$$.$addChild$($DvtTimeUtils$$), $DvtTimelineSeriesItemRenderer$$ = $DvtTimeUtils$$.$getDimensions$(), $DvtTimelineSeriesParser$$.removeChild($DvtTimeUtils$$), 
        $DvtTimelineSeriesItemRenderer$$ = new $dvt$$15$$.$Matrix$(1, 0, 0, 1, ($DvtTimelineSeriesParser$$.$_canvasLength$ - $DvtTimelineSeriesItemRenderer$$.$w$) / 2 + $DvtTimelineSeriesParser$$.$_startX$, $DvtTimelineSeries$$ * ($DvtTimelineSeriesParser$$.$_seriesSize$ + $DvtTimelineSeriesParser$$.$getTimeAxisVisibleSize$($DvtTimelineParser$$)) + ($DvtTimelineSeriesParser$$.$_seriesSize$ - $DvtTimelineSeriesItemRenderer$$.$h$) / 2 + $DvtTimelineSeriesParser$$.$_startY$), $DvtTimeUtils$$.$setMatrix$($DvtTimelineSeriesItemRenderer$$), 
        $DvtTimelineSeriesParser$$.$addChild$($DvtTimeUtils$$), $DvtTimelineSeriesParser$$.$_seriesLabels$.push($DvtTimeUtils$$)));
      }
    }
  };
  $DvtTimelineRenderer$$.$_renderAxis$ = function $$DvtTimelineRenderer$$$$_renderAxis$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) {
    var $DvtTimelineSeriesItem$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineSeriesParser$$.$getCtx$()), $DvtTimelineSeries$$ = $DvtTimelineSeriesParser$$.$getTimeAxis$(), $DvtTimelineParser$$ = $DvtTimelineSeriesParser$$.$_series$.length, $DvtTimelineDefaults$$ = $DvtTimelineSeriesParser$$.$getTimeAxisSize$(), $DvtTimelineAutomation$$ = $DvtTimelineSeriesParser$$.$getTimeAxisVisibleSize$($DvtTimelineParser$$), $DvtTimelineParser$$ = 1 == $DvtTimelineParser$$ ? $DvtTimelineSeriesParser$$.$_canvasSize$ - 
    $DvtTimelineAutomation$$ : $DvtTimelineSeriesParser$$.$_canvasSize$ / $DvtTimelineParser$$ - $DvtTimelineAutomation$$ / 2;
    $DvtTimelineSeriesItem$$ && $DvtTimelineSeriesParser$$.$isVertical$() && 1 == $DvtTimelineSeriesParser$$.$_series$.length && ($DvtTimelineParser$$ = 0);
    $DvtTimelineSeries$$.getParent() !== $DvtTimelineSeriesNode$$ && $DvtTimelineSeriesNode$$.$addChild$($DvtTimelineSeries$$);
    $DvtTimelineSeriesParser$$.$isVertical$() ? ($DvtTimelineSeriesItem$$ = new $dvt$$15$$.$Matrix$(1, 0, 0, 1, $DvtTimelineParser$$, 0), $DvtTimelineSeries$$.$render$(null, $DvtTimelineDefaults$$, $DvtTimelineSeriesParser$$.$_contentLength$)) : ($DvtTimelineSeriesItem$$ = new $dvt$$15$$.$Matrix$(1, 0, 0, 1, 0, $DvtTimelineParser$$), $DvtTimelineSeries$$.$render$(null, $DvtTimelineSeriesParser$$.$_contentLength$, $DvtTimelineDefaults$$));
    $DvtTimelineSeries$$.$setMatrix$($DvtTimelineSeriesItem$$);
    $DvtTimelineRenderer$$.$_renderSeriesTimeAxis$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesParser$$.$_fetchStartPos$, $DvtTimelineSeriesParser$$.$_fetchEndPos$, $DvtTimelineSeriesParser$$.$_timeZoomCanvas$, $DvtTimelineSeriesParser$$.$_contentLength$);
  };
  $DvtTimelineRenderer$$.$_renderSeriesTimeAxis$ = function $$DvtTimelineRenderer$$$$_renderSeriesTimeAxis$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$, $DvtTimelineParser$$) {
    var $DvtTimelineDefaults$$ = $DvtTimelineSeriesParser$$.$getCtx$(), $DvtTimelineAutomation$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineDefaults$$);
    if ($DvtTimelineSeriesParser$$.$_majorAxisLabels$) {
      for (var $DvtTimelineEventManager$$ = 0;$DvtTimelineEventManager$$ < $DvtTimelineSeriesParser$$.$_majorAxisLabels$.length;$DvtTimelineEventManager$$++) {
        $DvtTimelineSeries$$.removeChild($DvtTimelineSeriesParser$$.$_majorAxisLabels$[$DvtTimelineEventManager$$]);
      }
    }
    $DvtTimelineSeriesParser$$.$_majorAxisLabels$ = [];
    if ($DvtTimelineSeriesParser$$.$_seriesScale$) {
      var $DvtTimeUtils$$, $DvtTimelineKeyboardHandler$$, $DvtTimelineSeriesItemRenderer$$ = $DvtTimelineSeriesParser$$.$_start$, $DvtTimelineSeriesRenderer$$ = $DvtTimelineSeriesParser$$.$_end$;
      if ($DvtTimelineSeriesParser$$.$_customTimeScales$ && $DvtTimelineSeriesParser$$.$_customTimeScales$[$DvtTimelineSeriesParser$$.$_seriesScale$]) {
        $DvtTimelineKeyboardHandler$$ = $DvtTimelineSeriesParser$$.$_customTimeScales$[$DvtTimelineSeriesParser$$.$_seriesScale$], $DvtTimeUtils$$ = $DvtTimelineKeyboardHandler$$.times, $DvtTimelineKeyboardHandler$$ = $DvtTimelineKeyboardHandler$$.labels;
      } else {
        if ($DvtTimelineSeriesParser$$.$_seriesCustomFormatScales$ && $DvtTimelineSeriesParser$$.$_seriesCustomFormatScales$[$DvtTimelineSeriesParser$$.$_seriesScale$]) {
          $DvtTimelineKeyboardHandler$$ = $DvtTimelineSeriesParser$$.$_seriesCustomFormatScales$[$DvtTimelineSeriesParser$$.$_seriesScale$], $DvtTimeUtils$$ = $DvtTimelineKeyboardHandler$$.times, $DvtTimelineKeyboardHandler$$ = $DvtTimelineKeyboardHandler$$.labels;
        } else {
          for ($DvtTimeUtils$$ = [], $DvtTimelineKeyboardHandler$$ = [], $DvtTimelineEventManager$$ = $dvt$$15$$.$TimeAxis$.$getPositionDate$($DvtTimelineSeriesItemRenderer$$, $DvtTimelineSeriesRenderer$$, $DvtTimelineSeriesNode$$, $DvtTimelineParser$$), $DvtTimelineEventManager$$ = $DvtTimelineSeriesParser$$.$_seriesTimeAxis$.$adjustDate$($DvtTimelineEventManager$$), $DvtTimelineSeriesNode$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeriesItemRenderer$$, $DvtTimelineSeriesRenderer$$, 
          $DvtTimelineEventManager$$, $DvtTimelineParser$$), $DvtTimeUtils$$.push($DvtTimelineEventManager$$.getTime());$DvtTimelineSeriesNode$$ < $DvtTimelineSeriesItem$$;) {
            $DvtTimelineKeyboardHandler$$.push($DvtTimelineSeriesParser$$.$_seriesTimeAxis$.$formatDate$($DvtTimelineEventManager$$)), $DvtTimelineEventManager$$ = $DvtTimelineSeriesParser$$.$_seriesTimeAxis$.$getNextDate$($DvtTimelineEventManager$$.getTime()), $DvtTimelineSeriesNode$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeriesItemRenderer$$, $DvtTimelineSeriesRenderer$$, $DvtTimelineEventManager$$, $DvtTimelineParser$$), $DvtTimeUtils$$.push($DvtTimelineEventManager$$.getTime())
            ;
          }
        }
      }
      for ($DvtTimelineEventManager$$ = 0;$DvtTimelineEventManager$$ < $DvtTimelineKeyboardHandler$$.length;$DvtTimelineEventManager$$++) {
        $DvtTimelineSeriesItem$$ = $DvtTimelineKeyboardHandler$$[$DvtTimelineEventManager$$];
        $DvtTimelineSeriesNode$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeriesItemRenderer$$, $DvtTimelineSeriesRenderer$$, $DvtTimeUtils$$[$DvtTimelineEventManager$$], $DvtTimelineParser$$);
        var $maxLength$$2$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeriesItemRenderer$$, $DvtTimelineSeriesRenderer$$, $DvtTimeUtils$$[$DvtTimelineEventManager$$ + 1], $DvtTimelineParser$$) - $DvtTimelineSeriesNode$$;
        ($DvtTimelineAutomation$$ ? $DvtTimelineSeriesParser$$.$isVertical$() ? $DvtTimelineRenderer$$.$_addLabel$($DvtTimelineDefaults$$, $DvtTimelineSeries$$, $DvtTimelineSeriesParser$$.$_canvasSize$ - 5, $DvtTimelineSeriesItem$$, $maxLength$$2$$, $DvtTimelineSeriesNode$$ + 18, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($DvtTimelineSeriesParser$$.$Options$), "o_label" + $DvtTimelineSeriesNode$$ + "_s0", $DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$(), $DvtTimelineSeriesParser$$.$_majorAxisLabels$, 
        $DvtTimelineAutomation$$) : $DvtTimelineRenderer$$.$_addLabel$($DvtTimelineDefaults$$, $DvtTimelineSeries$$, $DvtTimelineParser$$ - ($DvtTimelineSeriesNode$$ + 5), $DvtTimelineSeriesItem$$, $maxLength$$2$$, $DvtTimelineSeriesParser$$.$_seriesSize$ - 2, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($DvtTimelineSeriesParser$$.$Options$), "o_label" + $DvtTimelineSeriesNode$$ + "_s0", $DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$(), $DvtTimelineSeriesParser$$.$_majorAxisLabels$, $DvtTimelineAutomation$$) : 
        $DvtTimelineSeriesParser$$.$isVertical$() ? $DvtTimelineRenderer$$.$_addLabel$($DvtTimelineDefaults$$, $DvtTimelineSeries$$, 5, $DvtTimelineSeriesItem$$, $maxLength$$2$$, $DvtTimelineSeriesNode$$ + 18, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($DvtTimelineSeriesParser$$.$Options$), "o_label" + $DvtTimelineSeriesNode$$ + "_s0", $DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$(), $DvtTimelineSeriesParser$$.$_majorAxisLabels$, $DvtTimelineAutomation$$) : $DvtTimelineRenderer$$.$_addLabel$($DvtTimelineDefaults$$, 
        $DvtTimelineSeries$$, $DvtTimelineSeriesNode$$ + 5, $DvtTimelineSeriesItem$$, $maxLength$$2$$, $DvtTimelineSeriesParser$$.$_seriesSize$ - 2, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($DvtTimelineSeriesParser$$.$Options$), "o_label" + $DvtTimelineSeriesNode$$ + "_s0", $DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$(), $DvtTimelineSeriesParser$$.$_majorAxisLabels$, $DvtTimelineAutomation$$)).time = $DvtTimeUtils$$[$DvtTimelineEventManager$$];
      }
    }
  };
  $DvtTimelineRenderer$$.$_renderOverview$ = function $$DvtTimelineRenderer$$$$_renderOverview$$($DvtTimelineSeriesParser$$) {
    var $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$getCtx$(), $DvtTimelineSeriesItem$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineSeriesNode$$);
    if (null == $DvtTimelineSeriesParser$$.$_overviewCanvas$) {
      var $DvtTimelineSeries$$ = !0;
      $DvtTimelineSeriesParser$$.$_overviewCanvas$ = new $dvt$$15$$.$Container$($DvtTimelineSeriesNode$$, "oCanvas");
    } else {
      $DvtTimelineSeriesParser$$.$_overviewCanvas$.$removeChildren$();
    }
    var $DvtTimelineParser$$ = $DvtTimelineSeriesParser$$.$_style$.$getBorderWidth$(), $DvtTimelineDefaults$$ = $DvtTimelineParser$$ / 2;
    if ($DvtTimelineSeriesParser$$.$isVertical$()) {
      var $DvtTimelineAutomation$$ = $DvtTimelineSeriesParser$$.$_overviewSize$, $DvtTimelineParser$$ = $DvtTimelineSeriesParser$$.$Height$ - $DvtTimelineParser$$;
      $DvtTimelineSeriesItem$$ ? $DvtTimelineSeriesParser$$.$_overviewCanvas$.$setTranslateX$($DvtTimelineDefaults$$) : $DvtTimelineSeriesParser$$.$_overviewCanvas$.$setTranslateX$($DvtTimelineSeriesParser$$.$Width$ - $DvtTimelineSeriesParser$$.$_overviewSize$ - $DvtTimelineDefaults$$);
      $DvtTimelineSeriesParser$$.$_overviewCanvas$.$setTranslateY$($DvtTimelineDefaults$$);
    } else {
      $DvtTimelineAutomation$$ = $DvtTimelineSeriesParser$$.$Width$ - $DvtTimelineParser$$, $DvtTimelineParser$$ = $DvtTimelineSeriesParser$$.$_overviewSize$, $DvtTimelineSeriesParser$$.$_overviewCanvas$.$setTranslateY$($DvtTimelineSeriesParser$$.$Height$ - $DvtTimelineSeriesParser$$.$_overviewSize$ - $DvtTimelineDefaults$$), $DvtTimelineSeriesParser$$.$_overviewCanvas$.$setTranslateX$($DvtTimelineDefaults$$);
    }
    $DvtTimelineSeries$$ && $DvtTimelineSeriesParser$$.$addChild$($DvtTimelineSeriesParser$$.$_overviewCanvas$);
    $DvtTimelineSeriesParser$$.$_overview$ = new $dvt$$15$$.$TimelineOverview$($DvtTimelineSeriesNode$$, $DvtTimelineSeriesParser$$.$HandleEvent$, $DvtTimelineSeriesParser$$);
    $DvtTimelineSeriesParser$$.$_overviewCanvas$.$addChild$($DvtTimelineSeriesParser$$.$_overview$);
    $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$_getOverviewObject$();
    $DvtTimelineSeriesParser$$.$_overview$.$render$($DvtTimelineSeriesNode$$, $DvtTimelineAutomation$$, $DvtTimelineParser$$);
  };
  $DvtTimelineRenderer$$.$_renderScrollHotspots$ = function $$DvtTimelineRenderer$$$$_renderScrollHotspots$$($DvtTimelineSeriesParser$$) {
    if ($DvtTimelineSeriesParser$$.$_series$) {
      var $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$getCtx$(), $DvtTimelineSeriesItem$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineSeriesNode$$), $DvtTimelineSeries$$ = $DvtTimelineSeriesParser$$.$_series$.length, $DvtTimelineParser$$ = $DvtTimelineSeriesParser$$.$getTimeAxisVisibleSize$($DvtTimelineSeries$$);
      if ($DvtTimelineSeriesParser$$.$_scrollHotspotsContainers$) {
        for (var $DvtTimelineDefaults$$ = 0;$DvtTimelineDefaults$$ < $DvtTimelineSeriesParser$$.$_scrollHotspotsContainers$.length;$DvtTimelineDefaults$$++) {
          $DvtTimelineSeriesParser$$.$_scrollHotspotsContainers$[$DvtTimelineDefaults$$].$removeChildren$();
        }
      } else {
        var $DvtTimelineAutomation$$ = !0;
        $DvtTimelineSeriesParser$$.$_scrollHotspotsContainers$ = [];
      }
      $DvtTimelineSeriesParser$$.$_scrollHotspots$ = [];
      for (var $DvtTimelineEventManager$$ = $DvtTimelineStyleUtils$$.$getHotspotPadding$(), $DvtTimeUtils$$ = $DvtTimelineStyleUtils$$.$getHotspotWidth$(), $DvtTimelineKeyboardHandler$$ = $DvtTimelineStyleUtils$$.$getHotspotHeight$(), $DvtTimelineRenderer$$ = $DvtTimelineStyleUtils$$.$getHotspotArrowWidth$(), $DvtTimelineSeriesItemRenderer$$ = $DvtTimelineStyleUtils$$.$getHotspotArrowHeight$(), $DvtTimelineSeriesRenderer$$ = $DvtTimelineStyleUtils$$.$getHotspotBackgroundColor$(), $hotspotBorderRadius$$ = 
      $DvtTimelineStyleUtils$$.$getHotspotBorderRadius$(), $DvtTimelineDefaults$$ = 0;$DvtTimelineDefaults$$ < $DvtTimelineSeries$$;$DvtTimelineDefaults$$++) {
        if ($DvtTimelineAutomation$$) {
          var $scrollHotspots$$ = new $dvt$$15$$.$Container$($DvtTimelineSeriesNode$$, "hotspots_s" + $DvtTimelineDefaults$$);
          $DvtTimelineSeriesParser$$.$addChild$($scrollHotspots$$);
          $DvtTimelineSeriesParser$$.$_scrollHotspotsContainers$.push($scrollHotspots$$);
        } else {
          $scrollHotspots$$ = $DvtTimelineSeriesParser$$.$_scrollHotspotsContainers$[$DvtTimelineDefaults$$];
        }
        if ($DvtTimelineSeriesParser$$.$isVertical$()) {
          if ($DvtTimelineSeriesItem$$) {
            if (1 == $DvtTimelineSeries$$) {
              var $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$ = 0, $arrowBottomY_arrowForwardY_axisKey$$ = 1
            } else {
              $arrowBottomY_arrowForwardY_axisKey$$ = $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$ = Math.abs($DvtTimelineDefaults$$ - 1);
            }
          } else {
            $arrowBottomY_arrowForwardY_axisKey$$ = $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$ = $DvtTimelineDefaults$$;
          }
          $forwardX_rightHotspot_topHotspot_topX$$ = $backX_bottomY$$2_leftHotspot$$ = $DvtTimelineSeriesParser$$.$_startX$ + $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$ * $DvtTimelineSeriesParser$$.$_seriesSize$ + $arrowBottomY_arrowForwardY_axisKey$$ * $DvtTimelineParser$$ + ($DvtTimelineSeriesParser$$.$_seriesSize$ - $DvtTimeUtils$$) / 2;
          $backY_topY$$1$$ = $DvtTimelineSeriesParser$$.$_startY$ + $DvtTimelineEventManager$$;
          $bottomHotspot_bottomX_forwardY$$ = $DvtTimelineSeriesParser$$.$_startY$ + $DvtTimelineSeriesParser$$.$_canvasLength$ - $DvtTimelineKeyboardHandler$$ - $DvtTimelineEventManager$$;
          $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$ = $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_bottomY$$2_leftHotspot$$ + $DvtTimelineRenderer$$ / 2;
          $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $DvtTimelineSeriesItemRenderer$$ / 2;
          $arrowBottomY_arrowForwardY_axisKey$$ = $bottomHotspot_bottomX_forwardY$$ + $DvtTimelineSeriesItemRenderer$$ / 2;
          $arrowBackResource_arrowTopResource$$ = $DvtTimelineSeriesParser$$.$_resources$.scrollUp;
          $arrowBottomResource_arrowForwardResource$$ = $DvtTimelineSeriesParser$$.$_resources$.scrollDown;
        } else {
          var $backX_bottomY$$2_leftHotspot$$ = $DvtTimelineSeriesParser$$.$_startX$ + $DvtTimelineEventManager$$, $forwardX_rightHotspot_topHotspot_topX$$ = $DvtTimelineSeriesParser$$.$_startX$ + $DvtTimelineSeriesParser$$.$_canvasLength$ - $DvtTimeUtils$$ - $DvtTimelineEventManager$$, $backY_topY$$1$$ = $DvtTimelineSeriesParser$$.$_startY$ + $DvtTimelineDefaults$$ * ($DvtTimelineSeriesParser$$.$_seriesSize$ + $DvtTimelineParser$$) + ($DvtTimelineSeriesParser$$.$_seriesSize$ - $DvtTimelineKeyboardHandler$$) / 
          2, $bottomHotspot_bottomX_forwardY$$ = $backY_topY$$1$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_bottomY$$2_leftHotspot$$ + $DvtTimelineRenderer$$ / 2, $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$ = $forwardX_rightHotspot_topHotspot_topX$$ + $DvtTimelineRenderer$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $DvtTimelineSeriesItemRenderer$$ / 2, $arrowBottomY_arrowForwardY_axisKey$$ = $arrowBackY_arrowTopY$$, $arrowBackResource_arrowTopResource$$ = $DvtTimelineSeriesParser$$.$_resources$.scrollLeft, 
          $arrowBottomResource_arrowForwardResource$$ = $DvtTimelineSeriesParser$$.$_resources$.scrollRight
        }
        $backX_bottomY$$2_leftHotspot$$ = new $dvt$$15$$.Rect($DvtTimelineSeriesNode$$, $backX_bottomY$$2_leftHotspot$$, $backY_topY$$1$$, $DvtTimeUtils$$, $DvtTimelineKeyboardHandler$$, "lhs");
        $backX_bottomY$$2_leftHotspot$$.$setSolidFill$($DvtTimelineSeriesRenderer$$, 1);
        $backX_bottomY$$2_leftHotspot$$.$setCornerRadius$($hotspotBorderRadius$$);
        $backX_bottomY$$2_leftHotspot$$.$hotspot$ = "left";
        $backX_bottomY$$2_leftHotspot$$.$setAlpha$(0);
        $backX_bottomY$$2_leftHotspot$$.$setMouseEnabled$(!1);
        $arrowBackX_arrowTopX_leftArrow_upArrow$$ = new $dvt$$15$$.Image($DvtTimelineSeriesNode$$, $arrowBackResource_arrowTopResource$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$, $arrowBackY_arrowTopY$$, $DvtTimelineRenderer$$, $DvtTimelineSeriesItemRenderer$$, "lhs_arr");
        $arrowBackX_arrowTopX_leftArrow_upArrow$$.$hotspot$ = "left";
        $backX_bottomY$$2_leftHotspot$$.$addChild$($arrowBackX_arrowTopX_leftArrow_upArrow$$);
        $forwardX_rightHotspot_topHotspot_topX$$ = new $dvt$$15$$.Rect($DvtTimelineSeriesNode$$, $forwardX_rightHotspot_topHotspot_topX$$, $bottomHotspot_bottomX_forwardY$$, $DvtTimeUtils$$, $DvtTimelineKeyboardHandler$$, "rhs");
        $forwardX_rightHotspot_topHotspot_topX$$.$setSolidFill$($DvtTimelineSeriesRenderer$$, 1);
        $forwardX_rightHotspot_topHotspot_topX$$.$setCornerRadius$($hotspotBorderRadius$$);
        $forwardX_rightHotspot_topHotspot_topX$$.$hotspot$ = "right";
        $forwardX_rightHotspot_topHotspot_topX$$.$setAlpha$(0);
        $forwardX_rightHotspot_topHotspot_topX$$.$setMouseEnabled$(!1);
        $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$ = new $dvt$$15$$.Image($DvtTimelineSeriesNode$$, $arrowBottomResource_arrowForwardResource$$, $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$, $arrowBottomY_arrowForwardY_axisKey$$, $DvtTimelineRenderer$$, $DvtTimelineSeriesItemRenderer$$, "rhs_arr");
        $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$.$hotspot$ = "right";
        $forwardX_rightHotspot_topHotspot_topX$$.$addChild$($arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$);
        $scrollHotspots$$.$addChild$($backX_bottomY$$2_leftHotspot$$);
        $DvtTimelineSeriesParser$$.$_scrollHotspots$.push($backX_bottomY$$2_leftHotspot$$);
        $scrollHotspots$$.$addChild$($forwardX_rightHotspot_topHotspot_topX$$);
        $DvtTimelineSeriesParser$$.$_scrollHotspots$.push($forwardX_rightHotspot_topHotspot_topX$$);
        $DvtTimelineSeriesParser$$.$isVertical$() ? ($DvtTimelineSeriesItem$$ ? 1 == $DvtTimelineSeries$$ ? ($arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$ = 0, $arrowBottomY_arrowForwardY_axisKey$$ = 1) : $arrowBottomY_arrowForwardY_axisKey$$ = $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$ = Math.abs($DvtTimelineDefaults$$ - 1) : $arrowBottomY_arrowForwardY_axisKey$$ = $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$ = $DvtTimelineDefaults$$, $forwardX_rightHotspot_topHotspot_topX$$ = 
        $DvtTimelineSeriesParser$$.$_startX$ + $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$ * $DvtTimelineSeriesParser$$.$_seriesSize$ + $arrowBottomY_arrowForwardY_axisKey$$ * $DvtTimelineParser$$ + $DvtTimelineEventManager$$, $bottomHotspot_bottomX_forwardY$$ = $DvtTimelineSeriesParser$$.$_startX$ + ($arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$ + 1) * $DvtTimelineSeriesParser$$.$_seriesSize$ + $arrowBottomY_arrowForwardY_axisKey$$ * $DvtTimelineParser$$ - $DvtTimeUtils$$ - 
        $DvtTimelineEventManager$$, $backX_bottomY$$2_leftHotspot$$ = $backY_topY$$1$$ = $DvtTimelineSeriesParser$$.$_startY$ + ($DvtTimelineSeriesParser$$.$_canvasLength$ - $DvtTimelineKeyboardHandler$$) / 2, $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $forwardX_rightHotspot_topHotspot_topX$$ + $DvtTimelineRenderer$$ / 2, $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$ = $bottomHotspot_bottomX_forwardY$$ + $DvtTimelineRenderer$$ / 2, $arrowBottomY_arrowForwardY_axisKey$$ = $arrowBackY_arrowTopY$$ = 
        $backY_topY$$1$$ + $DvtTimelineSeriesItemRenderer$$ / 2, $arrowBackResource_arrowTopResource$$ = $DvtTimelineSeriesParser$$.$_resources$.scrollLeft, $arrowBottomResource_arrowForwardResource$$ = $DvtTimelineSeriesParser$$.$_resources$.scrollRight) : ($bottomHotspot_bottomX_forwardY$$ = $forwardX_rightHotspot_topHotspot_topX$$ = $DvtTimelineSeriesParser$$.$_startX$ + ($DvtTimelineSeriesParser$$.$_canvasLength$ - $DvtTimeUtils$$) / 2, $backY_topY$$1$$ = $DvtTimelineSeriesParser$$.$_startY$ + 
        $DvtTimelineDefaults$$ * ($DvtTimelineSeriesParser$$.$_seriesSize$ + $DvtTimelineParser$$) + $DvtTimelineEventManager$$, $backX_bottomY$$2_leftHotspot$$ = $DvtTimelineSeriesParser$$.$_startY$ + ($DvtTimelineDefaults$$ + 1) * $DvtTimelineSeriesParser$$.$_seriesSize$ + $DvtTimelineDefaults$$ * $DvtTimelineParser$$ - $DvtTimelineKeyboardHandler$$ - $DvtTimelineEventManager$$, $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$ = $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $forwardX_rightHotspot_topHotspot_topX$$ + 
        $DvtTimelineRenderer$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $DvtTimelineSeriesItemRenderer$$ / 2, $arrowBottomY_arrowForwardY_axisKey$$ = $backX_bottomY$$2_leftHotspot$$ + $DvtTimelineSeriesItemRenderer$$ / 2, $arrowBackResource_arrowTopResource$$ = $DvtTimelineSeriesParser$$.$_resources$.scrollUp, $arrowBottomResource_arrowForwardResource$$ = $DvtTimelineSeriesParser$$.$_resources$.scrollDown);
        $forwardX_rightHotspot_topHotspot_topX$$ = new $dvt$$15$$.Rect($DvtTimelineSeriesNode$$, $forwardX_rightHotspot_topHotspot_topX$$, $backY_topY$$1$$, $DvtTimeUtils$$, $DvtTimelineKeyboardHandler$$, "ths");
        $forwardX_rightHotspot_topHotspot_topX$$.$setSolidFill$($DvtTimelineSeriesRenderer$$, 1);
        $forwardX_rightHotspot_topHotspot_topX$$.$setCornerRadius$($hotspotBorderRadius$$);
        $forwardX_rightHotspot_topHotspot_topX$$.$hotspot$ = "top";
        $forwardX_rightHotspot_topHotspot_topX$$.$setAlpha$(0);
        $forwardX_rightHotspot_topHotspot_topX$$.$setMouseEnabled$(!1);
        $arrowBackX_arrowTopX_leftArrow_upArrow$$ = new $dvt$$15$$.Image($DvtTimelineSeriesNode$$, $arrowBackResource_arrowTopResource$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$, $arrowBackY_arrowTopY$$, $DvtTimelineRenderer$$, $DvtTimelineSeriesItemRenderer$$, "ths_arr");
        $arrowBackX_arrowTopX_leftArrow_upArrow$$.$hotspot$ = "top";
        $forwardX_rightHotspot_topHotspot_topX$$.$addChild$($arrowBackX_arrowTopX_leftArrow_upArrow$$);
        $bottomHotspot_bottomX_forwardY$$ = new $dvt$$15$$.Rect($DvtTimelineSeriesNode$$, $bottomHotspot_bottomX_forwardY$$, $backX_bottomY$$2_leftHotspot$$, $DvtTimeUtils$$, $DvtTimelineKeyboardHandler$$, "bhs");
        $bottomHotspot_bottomX_forwardY$$.$setSolidFill$($DvtTimelineSeriesRenderer$$, 1);
        $bottomHotspot_bottomX_forwardY$$.$setCornerRadius$($hotspotBorderRadius$$);
        $bottomHotspot_bottomX_forwardY$$.$hotspot$ = "bottom";
        $bottomHotspot_bottomX_forwardY$$.$setAlpha$(0);
        $bottomHotspot_bottomX_forwardY$$.$setMouseEnabled$(!1);
        $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$ = new $dvt$$15$$.Image($DvtTimelineSeriesNode$$, $arrowBottomResource_arrowForwardResource$$, $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$, $arrowBottomY_arrowForwardY_axisKey$$, $DvtTimelineRenderer$$, $DvtTimelineSeriesItemRenderer$$, "bhs_arr");
        $arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$.$hotspot$ = "bottom";
        $bottomHotspot_bottomX_forwardY$$.$addChild$($arrowBottomX_arrowForwardX_downArrow_rightArrow_seriesKey$$);
        $scrollHotspots$$.$addChild$($forwardX_rightHotspot_topHotspot_topX$$);
        $DvtTimelineSeriesParser$$.$_scrollHotspots$.push($forwardX_rightHotspot_topHotspot_topX$$);
        $scrollHotspots$$.$addChild$($bottomHotspot_bottomX_forwardY$$);
        $DvtTimelineSeriesParser$$.$_scrollHotspots$.push($bottomHotspot_bottomX_forwardY$$);
      }
    }
  };
  $DvtTimelineRenderer$$.$_renderZoomControls$ = function $$DvtTimelineRenderer$$$$_renderZoomControls$$($DvtTimelineSeriesParser$$) {
    var $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$_resources$, $DvtTimelineSeriesItem$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineSeriesParser$$.$getCtx$()), $DvtTimelineSeriesNode$$ = {zoomInProps:{imageSize:16, cssUrl:$DvtTimelineSeriesNode$$.zoomIn, cssUrlHover:$DvtTimelineSeriesNode$$.zoomIn_h, cssUrlActive:$DvtTimelineSeriesNode$$.zoomIn_a, cssUrlDisabled:$DvtTimelineSeriesNode$$.zoomIn_d, enabledBackgroundColor:$DvtTimelineStyleUtils$$.$getZoomInButtonBackgroundColor$($DvtTimelineSeriesNode$$), 
    enabledBorderColor:$DvtTimelineStyleUtils$$.$getZoomInButtonBorderColor$($DvtTimelineSeriesNode$$), hoverBackgroundColor:$DvtTimelineStyleUtils$$.$getZoomInButtonHoverBackgroundColor$($DvtTimelineSeriesNode$$), hoverBorderColor:$DvtTimelineStyleUtils$$.$getZoomInButtonHoverBorderColor$($DvtTimelineSeriesNode$$), activeBackgroundColor:$DvtTimelineStyleUtils$$.$getZoomInButtonActiveBackgroundColor$($DvtTimelineSeriesNode$$), activeBorderColor:$DvtTimelineStyleUtils$$.$getZoomInButtonActiveBorderColor$($DvtTimelineSeriesNode$$), 
    disabledBackgroundColor:$DvtTimelineStyleUtils$$.$getZoomInButtonDisabledBackgroundColor$($DvtTimelineSeriesNode$$), disabledBorderColor:$DvtTimelineStyleUtils$$.$getZoomInButtonDisabledBorderColor$($DvtTimelineSeriesNode$$)}, zoomOutProps:{imageSize:16, cssUrl:$DvtTimelineSeriesNode$$.zoomOut, cssUrlHover:$DvtTimelineSeriesNode$$.zoomOut_h, cssUrlActive:$DvtTimelineSeriesNode$$.zoomOut_a, cssUrlDisabled:$DvtTimelineSeriesNode$$.zoomOut_d, enabledBackgroundColor:$DvtTimelineStyleUtils$$.$getZoomOutButtonBackgroundColor$($DvtTimelineSeriesNode$$), 
    enabledBorderColor:$DvtTimelineStyleUtils$$.$getZoomOutButtonBorderColor$($DvtTimelineSeriesNode$$), hoverBackgroundColor:$DvtTimelineStyleUtils$$.$getZoomOutButtonHoverBackgroundColor$($DvtTimelineSeriesNode$$), hoverBorderColor:$DvtTimelineStyleUtils$$.$getZoomOutButtonHoverBorderColor$($DvtTimelineSeriesNode$$), activeBackgroundColor:$DvtTimelineStyleUtils$$.$getZoomOutButtonActiveBackgroundColor$($DvtTimelineSeriesNode$$), activeBorderColor:$DvtTimelineStyleUtils$$.$getZoomOutButtonActiveBorderColor$($DvtTimelineSeriesNode$$), 
    disabledBackgroundColor:$DvtTimelineStyleUtils$$.$getZoomOutButtonDisabledBackgroundColor$($DvtTimelineSeriesNode$$), disabledBorderColor:$DvtTimelineStyleUtils$$.$getZoomOutButtonDisabledBorderColor$($DvtTimelineSeriesNode$$)}}, $DvtTimelineSeries$$ = $DvtTimelineSeriesParser$$.$_startX$ + $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_PADDING$;
    $DvtTimelineSeriesItem$$ ? ($DvtTimelineSeriesParser$$.$_isVertical$ && $DvtTimelineSeriesParser$$.$_hasOverview$ && ($DvtTimelineSeries$$ -= $DvtTimelineSeriesParser$$.$_overviewSize$), $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesParser$$.$_backgroundWidth$ - $DvtTimelineSeries$$ - $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_DIAMETER$) : $DvtTimelineSeriesItem$$ = $DvtTimelineSeries$$;
    $DvtTimelineSeriesNode$$.zoomInProps.posX = $DvtTimelineSeriesItem$$;
    $DvtTimelineSeriesNode$$.zoomOutProps.posX = $DvtTimelineSeriesItem$$;
    $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesParser$$.$_startY$ + $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_PADDING$;
    $DvtTimelineSeriesNode$$.zoomInProps.posY = $DvtTimelineSeriesItem$$;
    $DvtTimelineSeriesNode$$.zoomOutProps.posY = $DvtTimelineSeriesItem$$ + $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_DIAMETER$ + $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_SPACING$;
    $DvtTimelineSeriesParser$$.$renderZoomControls$($DvtTimelineSeriesNode$$);
  };
  $DvtTimelineRenderer$$.$_renderEmptyText$ = function $$DvtTimelineRenderer$$$$_renderEmptyText$$($DvtTimelineSeriesParser$$) {
    var $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$Options$.series ? $dvt$$15$$.$Bundle$.$getTranslatedString$($dvt$$15$$.$Bundle$.$UTIL_PREFIX$, "INVALID_DATA", null) : $dvt$$15$$.$Bundle$.$getTranslatedString$($dvt$$15$$.$Bundle$.$UTIL_PREFIX$, "NO_DATA", null);
    $DvtTimelineSeriesParser$$.$clearTimeline$();
    $dvt$$15$$.$TextUtils$.$renderEmptyText$($DvtTimelineSeriesParser$$.$_canvas$, $DvtTimelineSeriesNode$$, new $dvt$$15$$.$Rectangle$(0, 0, $DvtTimelineSeriesParser$$.$_backgroundWidth$, $DvtTimelineSeriesParser$$.$_backgroundHeight$), $DvtTimelineSeriesParser$$.$EventManager$, $DvtTimelineStyleUtils$$.$getEmptyTextStyle$($DvtTimelineSeriesParser$$.$Options$));
  };
  $DvtTimelineRenderer$$.$_addLabel$ = function $$DvtTimelineRenderer$$$$_addLabel$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$, $DvtTimelineParser$$, $DvtTimelineDefaults$$, $DvtTimelineAutomation$$, $DvtTimelineEventManager$$, $DvtTimeUtils$$, $DvtTimelineKeyboardHandler$$, $DvtTimelineStyleUtils$$) {
    $DvtTimelineSeries$$ = new $dvt$$15$$.$OutputText$($DvtTimelineSeriesParser$$, $DvtTimelineSeries$$, $DvtTimelineSeriesItem$$, 0, $DvtTimelineEventManager$$);
    null != $DvtTimelineAutomation$$ && $DvtTimelineSeries$$.$setCSSStyle$($DvtTimelineAutomation$$);
    $DvtTimelineSeriesNode$$.$addChild$($DvtTimelineSeries$$);
    var $DvtTimelineRenderer$$ = $DvtTimelineSeries$$.$getDimensions$();
    $DvtTimelineSeriesNode$$.removeChild($DvtTimelineSeries$$);
    $DvtTimelineDefaults$$ -= $DvtTimelineRenderer$$.$h$;
    $DvtTimelineSeries$$.$setY$($DvtTimelineDefaults$$);
    $DvtTimelineStyleUtils$$ && $DvtTimelineSeries$$.$setX$($DvtTimelineSeriesItem$$ - $DvtTimelineRenderer$$.$w$);
    var $DvtTimelineSeriesItemRenderer$$ = Math.min($DvtTimelineRenderer$$.$w$ + 2 * $DvtTimeUtils$$, $DvtTimelineParser$$);
    $DvtTimelineSeriesParser$$ = new $dvt$$15$$.Rect($DvtTimelineSeriesParser$$, ($DvtTimelineStyleUtils$$ ? $DvtTimelineSeriesItem$$ - $DvtTimelineSeriesItemRenderer$$ + 2 * $DvtTimeUtils$$ : $DvtTimelineSeriesItem$$) - $DvtTimeUtils$$, $DvtTimelineDefaults$$ - $DvtTimeUtils$$, $DvtTimelineSeriesItemRenderer$$, $DvtTimelineRenderer$$.$h$ + 2 * $DvtTimeUtils$$, "ob_" + $DvtTimelineEventManager$$);
    $DvtTimelineSeriesParser$$.$setCSSStyle$($DvtTimelineAutomation$$);
    $DvtTimelineSeriesParser$$.$setCornerRadius$(3);
    $DvtTimelineSeriesNode$$.$addChild$($DvtTimelineSeriesParser$$);
    $DvtTimelineKeyboardHandler$$ && $DvtTimelineKeyboardHandler$$.push($DvtTimelineSeriesParser$$);
    $dvt$$15$$.$TextUtils$.$fitText$($DvtTimelineSeries$$, $DvtTimelineParser$$, Infinity, $DvtTimelineSeriesNode$$);
    $DvtTimelineKeyboardHandler$$ && $DvtTimelineKeyboardHandler$$.push($DvtTimelineSeries$$);
    return $DvtTimelineSeries$$;
  };
  var $DvtTimelineStyleUtils$$ = {};
  $dvt$$15$$.$Obj$.$createSubclass$($DvtTimelineStyleUtils$$, $dvt$$15$$.$Obj$);
  $DvtTimelineStyleUtils$$.$_DEFAULT_TIMELINE_STYLE$ = "border:1px #d9dfe3;background-color:#f9f9f9;";
  $DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_STYLE$ = "background-color:#f9f9f9;border:1px #d9dfe3;";
  $DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_SEPARATOR_STYLE$ = "color:#bcc7d2;";
  $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_STYLE$ = "background-color:#f9f9f9;";
  $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_SPACING$ = 20;
  $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_PADDING$ = 2;
  $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_SEPARATOR_STYLE$ = "color:#bcc7d2";
  $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_LABEL_PADDING$ = 1;
  $DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_WIDTH$ = 60;
  $DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HEIGHT$ = 100;
  $DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HANDLE_TEXTURE_COLOR$ = "#B3C6DB";
  $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BACKGROUND_COLOR$ = "#000000";
  $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BORDER_RADIUS$ = 2;
  $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_OPACITY$ = .6;
  $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_WIDTH$ = 28;
  $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_HEIGHT$ = 28;
  $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_PADDING$ = 3;
  $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_WIDTH$ = 14;
  $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_HEIGHT$ = 14;
  $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ANIMATION_DURATION$ = .3;
  $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_STROKE_WIDTH$ = 1;
  $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_HOVER_STROKE_WIDTH$ = 2;
  $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_SELECTED_STROKE_WIDTH$ = 2;
  $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_FILL_COLOR$ = "rgba(249,249,249,0)";
  $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ACTIVE_INNER_STROKE_COLOR$ = "#e4f0fa";
  $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_INNER_STROKE_COLOR$ = "rgba(249,249,249,0)";
  $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_STROKE_WIDTH$ = 2;
  $DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_OFFSET$ = 20;
  $DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_SPACING$ = 15;
  $DvtTimelineStyleUtils$$.$_DEFAULT_DURATION_FEELER_OFFSET$ = 10;
  $DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_WIDTH$ = 32;
  $DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_HEIGHT$ = 32;
  $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$ = "#ffffff";
  $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$ = "#d6d7d8";
  $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_DIAMETER$ = 31;
  $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_PADDING$ = 10.5;
  $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_SPACING$ = 9;
  $DvtTimelineStyleUtils$$.$getItemDescriptionStyle$ = function $$DvtTimelineStyleUtils$$$$getItemDescriptionStyle$$($DvtTimelineSeriesParser$$) {
    var $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$_series$.$getOptions$().styleDefaults.item.descriptionStyle;
    if ($DvtTimelineSeriesParser$$ = $DvtTimelineSeriesParser$$.$getStyle$()) {
      $DvtTimelineSeriesParser$$ = new $dvt$$15$$.$CSSStyle$($DvtTimelineSeriesParser$$), $DvtTimelineSeriesNode$$.$parseInlineStyle$($DvtTimelineSeriesParser$$);
    }
    return $DvtTimelineSeriesNode$$;
  };
  $DvtTimelineStyleUtils$$.$getItemTitleStyle$ = function $$DvtTimelineStyleUtils$$$$getItemTitleStyle$$($DvtTimelineSeriesParser$$) {
    var $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$_series$.$getOptions$().styleDefaults.item.titleStyle;
    if ($DvtTimelineSeriesParser$$ = $DvtTimelineSeriesParser$$.$getStyle$()) {
      $DvtTimelineSeriesParser$$ = new $dvt$$15$$.$CSSStyle$($DvtTimelineSeriesParser$$), $DvtTimelineSeriesNode$$.$parseInlineStyle$($DvtTimelineSeriesParser$$);
    }
    return $DvtTimelineSeriesNode$$;
  };
  $DvtTimelineStyleUtils$$.$getReferenceObjectColor$ = function $$DvtTimelineStyleUtils$$$$getReferenceObjectColor$$($dvt$$15$$) {
    return $dvt$$15$$.styleDefaults.referenceObject.color;
  };
  $DvtTimelineStyleUtils$$.$getSeriesLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelStyle$$($dvt$$15$$) {
    return $dvt$$15$$.styleDefaults.series.labelStyle;
  };
  $DvtTimelineStyleUtils$$.$getSeriesLabelPadding$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelPadding$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_PADDING$;
  };
  $DvtTimelineStyleUtils$$.$getSeriesLabelSpacing$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelSpacing$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_SPACING$;
  };
  $DvtTimelineStyleUtils$$.$getEmptyTextStyle$ = function $$DvtTimelineStyleUtils$$$$getEmptyTextStyle$$($dvt$$15$$) {
    return $dvt$$15$$.styleDefaults.series.emptyTextStyle;
  };
  $DvtTimelineStyleUtils$$.$getBubbleOffset$ = function $$DvtTimelineStyleUtils$$$$getBubbleOffset$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_OFFSET$;
  };
  $DvtTimelineStyleUtils$$.$getBubbleSpacing$ = function $$DvtTimelineStyleUtils$$$$getBubbleSpacing$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_SPACING$;
  };
  $DvtTimelineStyleUtils$$.$getItemFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemFillColor$$($DvtTimelineSeriesParser$$) {
    var $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$getStyle$();
    return $DvtTimelineSeriesNode$$ && ($DvtTimelineSeriesNode$$ = (new $dvt$$15$$.$CSSStyle$($DvtTimelineSeriesNode$$)).$getStyle$($dvt$$15$$.$CSSStyle$.$BACKGROUND_COLOR$)) ? $DvtTimelineSeriesNode$$ : $DvtTimelineSeriesParser$$.$_series$.$getOptions$().styleDefaults.item.backgroundColor;
  };
  $DvtTimelineStyleUtils$$.$getItemStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemStrokeColor$$($DvtTimelineSeriesParser$$) {
    var $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$getStyle$();
    return $DvtTimelineSeriesNode$$ && ($DvtTimelineSeriesNode$$ = (new $dvt$$15$$.$CSSStyle$($DvtTimelineSeriesNode$$)).$getStyle$($dvt$$15$$.$CSSStyle$.$BORDER_COLOR$)) ? $DvtTimelineSeriesNode$$ : $DvtTimelineSeriesParser$$.$_series$.$getOptions$().styleDefaults.item.borderColor;
  };
  $DvtTimelineStyleUtils$$.$getItemStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemStrokeWidth$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_STROKE_WIDTH$;
  };
  $DvtTimelineStyleUtils$$.$getItemHoverFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemHoverFillColor$$($dvt$$15$$) {
    var $DvtTimelineSeriesParser$$ = $dvt$$15$$.$_series$.$getOptions$().styleDefaults.item.hoverBackgroundColor;
    return $DvtTimelineSeriesParser$$ ? $DvtTimelineSeriesParser$$ : $DvtTimelineStyleUtils$$.$getItemFillColor$($dvt$$15$$);
  };
  $DvtTimelineStyleUtils$$.$getItemHoverStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemHoverStrokeColor$$($dvt$$15$$) {
    var $DvtTimelineSeriesParser$$ = $dvt$$15$$.$_series$.$getOptions$().styleDefaults.item.hoverBorderColor;
    return $DvtTimelineSeriesParser$$ ? $DvtTimelineSeriesParser$$ : $DvtTimelineStyleUtils$$.$getItemStrokeColor$($dvt$$15$$);
  };
  $DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemHoverStrokeWidth$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_HOVER_STROKE_WIDTH$;
  };
  $DvtTimelineStyleUtils$$.$getItemSelectedFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedFillColor$$($dvt$$15$$) {
    var $DvtTimelineSeriesParser$$ = $dvt$$15$$.$_series$.$getOptions$().styleDefaults.item.selectedBackgroundColor;
    return $DvtTimelineSeriesParser$$ ? $DvtTimelineSeriesParser$$ : $DvtTimelineStyleUtils$$.$getItemFillColor$($dvt$$15$$);
  };
  $DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedStrokeColor$$($dvt$$15$$) {
    var $DvtTimelineSeriesParser$$ = $dvt$$15$$.$_series$.$getOptions$().styleDefaults.item.selectedBorderColor;
    return $DvtTimelineSeriesParser$$ ? $DvtTimelineSeriesParser$$ : $DvtTimelineStyleUtils$$.$getItemStrokeColor$($dvt$$15$$);
  };
  $DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedStrokeWidth$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_SELECTED_STROKE_WIDTH$;
  };
  $DvtTimelineStyleUtils$$.$getSeriesStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesStyle$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_STYLE$;
  };
  $DvtTimelineStyleUtils$$.$getColorsArray$ = function $$DvtTimelineStyleUtils$$$$getColorsArray$$($dvt$$15$$) {
    return $dvt$$15$$.styleDefaults.series.colors;
  };
  $DvtTimelineStyleUtils$$.$getDurationFeelerOffset$ = function $$DvtTimelineStyleUtils$$$$getDurationFeelerOffset$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_DURATION_FEELER_OFFSET$;
  };
  $DvtTimelineStyleUtils$$.$getThumbnailWidth$ = function $$DvtTimelineStyleUtils$$$$getThumbnailWidth$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_WIDTH$;
  };
  $DvtTimelineStyleUtils$$.$getThumbnailHeight$ = function $$DvtTimelineStyleUtils$$$$getThumbnailHeight$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_HEIGHT$;
  };
  $DvtTimelineStyleUtils$$.$getSeriesAxisSeparatorStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisSeparatorStyle$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_SEPARATOR_STYLE$;
  };
  $DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerActiveStrokeColor$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ACTIVE_INNER_STROKE_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getItemInnerFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerFillColor$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_FILL_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerStrokeColor$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_INNER_STROKE_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getItemInnerStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemInnerStrokeWidth$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_STROKE_WIDTH$;
  };
  $DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$ = function $$DvtTimelineStyleUtils$$$$getHotspotAnimationDuration$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ANIMATION_DURATION$;
  };
  $DvtTimelineStyleUtils$$.$getHotspotOpacity$ = function $$DvtTimelineStyleUtils$$$$getHotspotOpacity$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_OPACITY$;
  };
  $DvtTimelineStyleUtils$$.$getTimelineStyle$ = function $$DvtTimelineStyleUtils$$$$getTimelineStyle$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_TIMELINE_STYLE$;
  };
  $DvtTimelineStyleUtils$$.$getOverviewWidth$ = function $$DvtTimelineStyleUtils$$$$getOverviewWidth$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_WIDTH$;
  };
  $DvtTimelineStyleUtils$$.$getOverviewHeight$ = function $$DvtTimelineStyleUtils$$$$getOverviewHeight$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HEIGHT$;
  };
  $DvtTimelineStyleUtils$$.$getOverviewWindowBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewWindowBackgroundColor$$($dvt$$15$$) {
    return $dvt$$15$$.styleDefaults.overview.window.backgroundColor;
  };
  $DvtTimelineStyleUtils$$.$getOverviewWindowBorderColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewWindowBorderColor$$($dvt$$15$$) {
    return $dvt$$15$$.styleDefaults.overview.window.borderColor;
  };
  $DvtTimelineStyleUtils$$.$getOverviewBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewBackgroundColor$$($dvt$$15$$) {
    return $dvt$$15$$.styleDefaults.overview.backgroundColor;
  };
  $DvtTimelineStyleUtils$$.$getOverviewLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getOverviewLabelStyle$$($dvt$$15$$) {
    return $dvt$$15$$.styleDefaults.overview.labelStyle;
  };
  $DvtTimelineStyleUtils$$.$getOverviewHandleTextureColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewHandleTextureColor$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HANDLE_TEXTURE_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisLabelStyle$$($dvt$$15$$) {
    return $dvt$$15$$.styleDefaults.majorAxis.labelStyle;
  };
  $DvtTimelineStyleUtils$$.$getAxisSeparatorStyle$ = function $$DvtTimelineStyleUtils$$$$getAxisSeparatorStyle$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_SEPARATOR_STYLE$;
  };
  $DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisLabelPadding$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_LABEL_PADDING$;
  };
  $DvtTimelineStyleUtils$$.$getHotspotPadding$ = function $$DvtTimelineStyleUtils$$$$getHotspotPadding$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_PADDING$;
  };
  $DvtTimelineStyleUtils$$.$getHotspotWidth$ = function $$DvtTimelineStyleUtils$$$$getHotspotWidth$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_WIDTH$;
  };
  $DvtTimelineStyleUtils$$.$getHotspotHeight$ = function $$DvtTimelineStyleUtils$$$$getHotspotHeight$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_HEIGHT$;
  };
  $DvtTimelineStyleUtils$$.$getHotspotArrowWidth$ = function $$DvtTimelineStyleUtils$$$$getHotspotArrowWidth$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_WIDTH$;
  };
  $DvtTimelineStyleUtils$$.$getHotspotArrowHeight$ = function $$DvtTimelineStyleUtils$$$$getHotspotArrowHeight$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_HEIGHT$;
  };
  $DvtTimelineStyleUtils$$.$getHotspotBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getHotspotBackgroundColor$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BACKGROUND_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getHotspotBorderRadius$ = function $$DvtTimelineStyleUtils$$$$getHotspotBorderRadius$$() {
    return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BORDER_RADIUS$;
  };
  $DvtTimelineStyleUtils$$.$getAnimationDuration$ = function $$DvtTimelineStyleUtils$$$$getAnimationDuration$$($DvtTimelineSeriesParser$$) {
    return $dvt$$15$$.$StyleUtils$.$getTimeMilliseconds$($DvtTimelineSeriesParser$$.styleDefaults.animationDuration) / 1E3;
  };
  $DvtTimelineStyleUtils$$.$getZoomInButtonBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonBackgroundColor$$($dvt$$15$$) {
    return $dvt$$15$$.zoomIn_bgc ? $dvt$$15$$.zoomIn_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getZoomInButtonActiveBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonActiveBackgroundColor$$($dvt$$15$$) {
    return $dvt$$15$$.zoomIn_a_bgc ? $dvt$$15$$.zoomIn_a_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getZoomInButtonHoverBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonHoverBackgroundColor$$($dvt$$15$$) {
    return $dvt$$15$$.zoomIn_h_bgc ? $dvt$$15$$.zoomIn_h_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getZoomInButtonDisabledBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonDisabledBackgroundColor$$($dvt$$15$$) {
    return $dvt$$15$$.zoomIn_d_bgc ? $dvt$$15$$.zoomIn_d_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getZoomInButtonBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonBorderColor$$($dvt$$15$$) {
    return $dvt$$15$$.zoomIn_bc ? $dvt$$15$$.zoomIn_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getZoomInButtonActiveBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonActiveBorderColor$$($dvt$$15$$) {
    return $dvt$$15$$.zoomIn_a_bc ? $dvt$$15$$.zoomIn_a_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getZoomInButtonHoverBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonHoverBorderColor$$($dvt$$15$$) {
    return $dvt$$15$$.zoomIn_h_bc ? $dvt$$15$$.zoomIn_h_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getZoomInButtonDisabledBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonDisabledBorderColor$$($dvt$$15$$) {
    return $dvt$$15$$.zoomIn_d_bc ? $dvt$$15$$.zoomIn_d_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getZoomOutButtonBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonBackgroundColor$$($dvt$$15$$) {
    return $dvt$$15$$.zoomOut_bgc ? $dvt$$15$$.zoomOut_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getZoomOutButtonActiveBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonActiveBackgroundColor$$($dvt$$15$$) {
    return $dvt$$15$$.zoomOut_a_bgc ? $dvt$$15$$.zoomOut_a_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getZoomOutButtonHoverBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonHoverBackgroundColor$$($dvt$$15$$) {
    return $dvt$$15$$.zoomOut_h_bgc ? $dvt$$15$$.zoomOut_h_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getZoomOutButtonDisabledBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonDisabledBackgroundColor$$($dvt$$15$$) {
    return $dvt$$15$$.zoomOut_d_bgc ? $dvt$$15$$.zoomOut_d_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getZoomOutButtonBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonBorderColor$$($dvt$$15$$) {
    return $dvt$$15$$.zoomOut_bc ? $dvt$$15$$.zoomOut_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getZoomOutButtonActiveBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonActiveBorderColor$$($dvt$$15$$) {
    return $dvt$$15$$.zoomOut_a_bc ? $dvt$$15$$.zoomOut_a_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getZoomOutButtonHoverBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonHoverBorderColor$$($dvt$$15$$) {
    return $dvt$$15$$.zoomOut_h_bc ? $dvt$$15$$.zoomOut_h_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
  };
  $DvtTimelineStyleUtils$$.$getZoomOutButtonDisabledBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonDisabledBorderColor$$($dvt$$15$$) {
    return $dvt$$15$$.zoomOut_d_bc ? $dvt$$15$$.zoomOut_d_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
  };
  $dvt$$15$$.$Obj$.$createSubclass$($DvtTimelineSeries$$, $dvt$$15$$.$BaseComponent$);
  $DvtTimelineSeries$$.prototype.Init = function $$DvtTimelineSeries$$$$Init$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) {
    $DvtTimelineSeries$$.$superclass$.Init.call(this, $dvt$$15$$);
    this.$_callback$ = $DvtTimelineSeriesParser$$;
    this.$_callbackObj$ = $DvtTimelineSeriesNode$$;
    this.$_blocks$ = [];
    this.$_renderedReferenceObjects$ = [];
    this.$_seriesTicksArray$ = [];
  };
  $DvtTimelineSeries$$.prototype.$triggerAnimations$ = function $$DvtTimelineSeries$$$$$triggerAnimations$$() {
    var $DvtTimelineSeriesParser$$ = this.$getCtx$();
    this.$_rmAnimationElems$ && 0 != this.$_rmAnimationElems$.length ? (this.$_callbackObj$.$EventManager$.$removeListeners$(this.$_callbackObj$), $DvtTimelineSeriesParser$$ = new $dvt$$15$$.$ParallelPlayable$($DvtTimelineSeriesParser$$, new $dvt$$15$$.$AnimFadeOut$($DvtTimelineSeriesParser$$, this.$_rmAnimationElems$, $DvtTimelineStyleUtils$$.$getAnimationDuration$(this.$Options$))), $dvt$$15$$.$Playable$.$appendOnEnd$($DvtTimelineSeriesParser$$, this.$_onRmAnimationEnd$, this), this.$_callbackObj$.$Animation$ = 
    $DvtTimelineSeriesParser$$, $DvtTimelineSeriesParser$$.play()) : this.$_mvAnimator$ && this.$_hasMvAnimations$ ? (this.$_callbackObj$.$EventManager$.$removeListeners$(this.$_callbackObj$), $dvt$$15$$.$Playable$.$appendOnEnd$(this.$_mvAnimator$, this.$_onMvAnimationEnd$, this), this.$_callbackObj$.$Animation$ = this.$_mvAnimator$, this.$_mvAnimator$.play()) : this.$_frAnimationElems$ && 0 != this.$_frAnimationElems$.length && (this.$_callbackObj$.$EventManager$.$removeListeners$(this.$_callbackObj$), 
    $DvtTimelineSeriesParser$$ = new $dvt$$15$$.$ParallelPlayable$($DvtTimelineSeriesParser$$, new $dvt$$15$$.$AnimFadeIn$($DvtTimelineSeriesParser$$, this.$_frAnimationElems$, $DvtTimelineStyleUtils$$.$getAnimationDuration$(this.$Options$), 0)), $dvt$$15$$.$Playable$.$appendOnEnd$($DvtTimelineSeriesParser$$, this.$_onAnimationEnd$, this), this.$_callbackObj$.$Animation$ = $DvtTimelineSeriesParser$$, $DvtTimelineSeriesParser$$.play());
  };
  $DvtTimelineSeries$$.prototype.$_onRmAnimationEnd$ = function $$DvtTimelineSeries$$$$$_onRmAnimationEnd$$() {
    for (var $DvtTimelineSeriesParser$$ = 0;$DvtTimelineSeriesParser$$ < this.$_rmAnimationElems$.length;$DvtTimelineSeriesParser$$++) {
      var $DvtTimelineSeriesNode$$ = this.$_rmAnimationElems$[$DvtTimelineSeriesParser$$], $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesNode$$.getParent();
      $DvtTimelineSeriesItem$$ && $DvtTimelineSeriesItem$$.removeChild($DvtTimelineSeriesNode$$);
    }
    this.$_mvAnimator$ && this.$_hasMvAnimations$ ? (this.$_callbackObj$.$Animation$ = this.$_mvAnimator$, $dvt$$15$$.$Playable$.$appendOnEnd$(this.$_mvAnimator$, this.$_onMvAnimationEnd$, this), this.$_mvAnimator$.play()) : this.$_onMvAnimationEnd$();
  };
  $DvtTimelineSeries$$.prototype.$_onMvAnimationEnd$ = function $$DvtTimelineSeries$$$$$_onMvAnimationEnd$$() {
    if (this.$_frAnimationElems$ && 0 != this.$_frAnimationElems$.length) {
      var $DvtTimelineSeriesParser$$ = new $dvt$$15$$.$ParallelPlayable$(this.$getCtx$(), new $dvt$$15$$.$AnimFadeIn$(this.$getCtx$(), this.$_frAnimationElems$, $DvtTimelineStyleUtils$$.$getAnimationDuration$(this.$Options$), 0));
      $dvt$$15$$.$Playable$.$appendOnEnd$($DvtTimelineSeriesParser$$, this.$_onAnimationEnd$, this);
      this.$_callbackObj$.$Animation$ = $DvtTimelineSeriesParser$$;
      $DvtTimelineSeriesParser$$.play();
    } else {
      this.$_onAnimationEnd$();
    }
  };
  $DvtTimelineSeries$$.prototype.$_onAnimationEnd$ = function $$DvtTimelineSeries$$$$$_onAnimationEnd$$() {
    this.$_callbackObj$.$onAnimationEnd$();
  };
  $DvtTimelineSeries$$.prototype.$render$ = function $$DvtTimelineSeries$$$$$render$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$) {
    if ($DvtTimelineSeriesParser$$) {
      if (this.$SetOptions$($DvtTimelineSeriesParser$$), this.$_isInitialRender$ = this.$Width$ ? !1 : !0, this.$Width$ = $DvtTimelineSeriesNode$$, this.$Height$ = $DvtTimelineSeriesItem$$, ($DvtTimelineSeriesParser$$ = this.$Options$.orientation) && $DvtTimelineSeriesParser$$ == $dvt$$15$$.$Timeline$.$ORIENTATION_VERTICAL$ ? (this.$_allowUpdates$ = 0 == this.$_isVertical$ ? !1 : !0, this.$_isVertical$ = !0) : (this.$_allowUpdates$ = this.$_isVertical$ ? !1 : !0, this.$_isVertical$ = !1), this.$Options$ && 
      ($DvtTimelineSeriesParser$$ = this.$Parse$(this.$Options$), this.$_applyParsedProperties$($DvtTimelineSeriesParser$$)), this.$_fetchStartPos$ = 0, this.$_isVertical$ ? (this.$_fetchEndPos$ = $DvtTimelineSeriesItem$$, this.$_maxOverflowValue$ = $DvtTimelineSeriesNode$$, this.$_length$ = $DvtTimelineSeriesItem$$, this.$_size$ = $DvtTimelineSeriesNode$$) : (this.$_fetchEndPos$ = $DvtTimelineSeriesNode$$, this.$_maxOverflowValue$ = $DvtTimelineSeriesItem$$, this.$_length$ = $DvtTimelineSeriesNode$$, 
      this.$_size$ = $DvtTimelineSeriesItem$$), this.$_isInverted$ = this.$Options$.inverted, this.$_maxDurationSize$ = this.$_colorCount$ = 0, $DvtTimelineSeriesRenderer$$.$renderSeries$(this, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$), $dvt$$15$$.$TimeAxis$.$supportsTouch$() && 0 < this.$_items$.length && this.$_setAriaProperty$("flowto", "_bt_" + this.$_items$[0].getId()), $DvtTimelineSeriesNode$$ = this.$GetComponentDescription$()) {
        $dvt$$15$$.$ToolkitUtils$.$setAttrNullNS$(this.$getElem$(), "role", "group"), $dvt$$15$$.$ToolkitUtils$.$setAttrNullNS$(this.$getElem$(), "aria-label", $dvt$$15$$.$StringUtils$.$processAriaLabel$($DvtTimelineSeriesNode$$));
      }
    } else {
      this.$_handleResize$($DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$);
    }
  };
  $DvtTimelineSeries$$.prototype.$GetComponentDescription$ = function $$DvtTimelineSeries$$$$$GetComponentDescription$$() {
    var $DvtTimelineSeriesParser$$ = [$dvt$$15$$.$Bundle$.$getTranslatedString$($dvt$$15$$.$Bundle$.$UTIL_PREFIX$, "TIMELINE_SERIES")];
    this.$_label$ ? $DvtTimelineSeriesParser$$.push(this.$_label$) : $DvtTimelineSeriesParser$$.push(this.$Options$.index + 1);
    return $dvt$$15$$.$Bundle$.$getTranslatedString$($dvt$$15$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", $DvtTimelineSeriesParser$$);
  };
  $DvtTimelineSeries$$.prototype.$_handleResize$ = function $$DvtTimelineSeries$$$$$_handleResize$$($dvt$$15$$, $DvtTimelineSeriesParser$$) {
    this.$_canvas$.$setTranslateY$(0);
    this.$_canvas$.$setTranslateX$(0);
    this.$Width$ = $dvt$$15$$;
    this.$Height$ = $DvtTimelineSeriesParser$$;
    this.$_fetchStartPos$ = 0;
    this.$_isVertical$ ? (this.$_fetchEndPos$ = $DvtTimelineSeriesParser$$, this.$_maxOverflowValue$ = $dvt$$15$$, this.$_length$ = $DvtTimelineSeriesParser$$, this.$_size$ = $dvt$$15$$) : (this.$_fetchEndPos$ = $dvt$$15$$, this.$_maxOverflowValue$ = $DvtTimelineSeriesParser$$, this.$_length$ = $dvt$$15$$, this.$_size$ = $DvtTimelineSeriesParser$$);
    this.$_background$.$setWidth$($dvt$$15$$);
    this.$_background$.$setHeight$($DvtTimelineSeriesParser$$);
    $DvtTimelineSeriesRenderer$$.$updateSeriesForZoom$(this);
  };
  $DvtTimelineSeries$$.prototype.$applyStyleValues$ = function $$DvtTimelineSeries$$$$$applyStyleValues$$() {
    this.$_style$ = new $dvt$$15$$.$CSSStyle$($DvtTimelineStyleUtils$$.$getSeriesStyle$());
    this.$_seriesStyleDefaults$ = this.$Options$.seriesStyleDefaults;
    this.$_axisStyleDefaults$ = this.$Options$.axisStyleDefaults;
    this.$_colors$ = $DvtTimelineStyleUtils$$.$getColorsArray$(this.$Options$);
    this.$_referenceObjects$ = this.$Options$.referenceObjects;
    if (this.$_seriesStyleDefaults$) {
      var $DvtTimelineSeriesParser$$ = this.$_seriesStyleDefaults$.backgroundColor;
      $DvtTimelineSeriesParser$$ && this.$_style$.$parseInlineStyle$("background-color:" + $DvtTimelineSeriesParser$$ + ";");
    }
    this.$_style$.$parseInlineStyle$(this.$_inlineStyle$);
  };
  $DvtTimelineSeries$$.prototype.$SetOptions$ = function $$DvtTimelineSeries$$$$$SetOptions$$($dvt$$15$$) {
    this.$Options$ = $dvt$$15$$;
  };
  $DvtTimelineSeries$$.prototype.$Parse$ = function $$DvtTimelineSeries$$$$$Parse$$($dvt$$15$$) {
    this.$_parser$ = new $DvtTimelineSeriesParser$$;
    return this.$_parser$.parse($dvt$$15$$, this.$_items$);
  };
  $DvtTimelineSeries$$.prototype.$_applyParsedProperties$ = function $$DvtTimelineSeries$$$$$_applyParsedProperties$$($DvtTimelineSeriesParser$$) {
    this.$_items$ && (this.$_oldItems$ = this.$_items$);
    this.$_isEmpty$ = (this.$_items$ = $DvtTimelineSeriesParser$$.items) && 0 < this.$_items$.length ? !1 : !0;
    this.$_isIRAnimationEnabled$ = $DvtTimelineSeriesParser$$.$isIRAnimationEnabled$;
    this.$_isDCAnimationEnabled$ = $DvtTimelineSeriesParser$$.$isDCAnimationEnabled$;
    this.$_label$ = $DvtTimelineSeriesParser$$.label;
    this.$_timeAxis$ = $DvtTimelineSeriesParser$$.$timeAxis$;
    this.$_emptyText$ = $DvtTimelineSeriesParser$$.$emptyText$;
    null == this.$_emptyText$ && (this.$_emptyText$ = $dvt$$15$$.$Bundle$.$getTranslatedString$($dvt$$15$$.$Bundle$.$UTIL_PREFIX$, "NO_DATA", null));
    this.$_isTopToBottom$ = $DvtTimelineSeriesParser$$.$isTopToBottom$;
    this.$_isRandomItemLayout$ = $DvtTimelineSeriesParser$$.$isRandomItemLayout$;
    this.$_customTimeScales$ = $DvtTimelineSeriesParser$$.$customTimeScales$;
    this.$_customFormatScales$ = $DvtTimelineSeriesParser$$.$customFormatScales$;
    this.$_start$ = $DvtTimelineSeriesParser$$.start;
    this.$_end$ = $DvtTimelineSeriesParser$$.end;
    this.$_inlineStyle$ = $DvtTimelineSeriesParser$$.$inlineStyle$;
    this.$_scale$ = $DvtTimelineSeriesParser$$.scale;
    this.$_converter$ = $DvtTimelineSeriesParser$$.$converter$;
    this.$applyStyleValues$();
  };
  $DvtTimelineSeries$$.prototype.$calculateSpacing$ = function $$DvtTimelineSeries$$$$$calculateSpacing$$($dvt$$15$$, $DvtTimelineSeriesParser$$) {
    if (null != this.$_items$ && 0 != this.$_items$.length) {
      var $DvtTimelineSeriesNode$$ = this.$_maxOverflowValue$, $DvtTimelineSeriesItem$$ = $dvt$$15$$.$_spacing$;
      if (this.$_isRandomItemLayout$) {
        if (null == $DvtTimelineSeriesItem$$) {
          var $DvtTimelineSeriesNode$$ = $dvt$$15$$.getHeight(), $DvtTimelineSeriesItem$$ = this.$_initialSpacing$, $DvtTimelineSeries$$ = this.$_maxOverflowValue$ - $DvtTimelineSeriesNode$$ - $DvtTimelineSeriesItem$$;
          0 > $DvtTimelineSeries$$ && ($DvtTimelineSeries$$ = 0);
          $DvtTimelineSeriesItem$$ = Math.round(Math.random() * $DvtTimelineSeries$$) + $DvtTimelineSeriesItem$$;
          this.$_maxOverflowValue$ < $DvtTimelineSeriesItem$$ + $DvtTimelineSeriesNode$$ && (this.$_maxOverflowValue$ = $DvtTimelineSeriesItem$$ + $DvtTimelineSeriesNode$$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$());
        }
        return $DvtTimelineSeriesItem$$;
      }
      null == $DvtTimelineSeriesItem$$ && ($DvtTimelineSeriesItem$$ = this.$_initialSpacing$);
      if (this.$_isVertical$) {
        for ($DvtTimelineEventManager$$ = 0;$DvtTimelineEventManager$$ < $DvtTimelineSeriesParser$$;$DvtTimelineEventManager$$++) {
          $DvtTimeUtils$$ = this.$_items$[$DvtTimelineEventManager$$], $DvtTimelineKeyboardHandler$$ = $DvtTimeUtils$$.getWidth() + 10, $DvtTimelineSeriesNode$$ < $DvtTimelineSeriesItem$$ + $DvtTimelineKeyboardHandler$$ && ($DvtTimelineSeriesNode$$ = $DvtTimelineSeriesItem$$ + $DvtTimelineKeyboardHandler$$);
        }
      } else {
        for (var $DvtTimelineParser$$ = $dvt$$15$$.$_loc$, $DvtTimelineDefaults$$ = $dvt$$15$$.getWidth() + 10, $DvtTimelineSeries$$ = $DvtTimelineStyleUtils$$.$getBubbleSpacing$(), $DvtTimelineAutomation$$ = [], $DvtTimelineEventManager$$ = 0;$DvtTimelineEventManager$$ < $DvtTimelineSeriesParser$$;$DvtTimelineEventManager$$++) {
          var $DvtTimeUtils$$ = this.$_items$[$DvtTimelineEventManager$$], $DvtTimelineKeyboardHandler$$ = $DvtTimeUtils$$.getWidth() + 10, $DvtTimelineRenderer$$ = $DvtTimeUtils$$.$_loc$;
          ($DvtTimelineParser$$ >= $DvtTimelineRenderer$$ && $DvtTimelineParser$$ <= $DvtTimelineRenderer$$ + $DvtTimelineKeyboardHandler$$ || $DvtTimelineRenderer$$ >= $DvtTimelineParser$$ && $DvtTimelineRenderer$$ <= $DvtTimelineParser$$ + $DvtTimelineDefaults$$) && $DvtTimelineAutomation$$.push($DvtTimeUtils$$);
        }
        for ($DvtTimelineEventManager$$ = 0;$DvtTimelineEventManager$$ < $DvtTimelineAutomation$$.length;$DvtTimelineEventManager$$++) {
          $DvtTimelineParser$$ = !1;
          for ($DvtTimelineDefaults$$ = 0;$DvtTimelineDefaults$$ < $DvtTimelineAutomation$$.length;$DvtTimelineDefaults$$++) {
            var $DvtTimeUtils$$ = $DvtTimelineAutomation$$[$DvtTimelineDefaults$$], $DvtTimelineSeriesItemRenderer$$ = $DvtTimeUtils$$.getHeight(), $DvtTimeUtils$$ = $DvtTimeUtils$$.$_spacing$;
            if ($DvtTimelineSeriesItem$$ >= $DvtTimeUtils$$ && $DvtTimelineSeriesItem$$ <= $DvtTimeUtils$$ + $DvtTimelineSeriesItemRenderer$$) {
              $DvtTimelineSeriesItem$$ = $DvtTimeUtils$$ + $DvtTimelineSeriesItemRenderer$$ + $DvtTimelineSeries$$;
              $dvt$$15$$.$setSpacing$($DvtTimelineSeriesItem$$);
              $DvtTimelineParser$$ = !0;
              break;
            }
          }
          if (!$DvtTimelineParser$$) {
            break;
          }
        }
        $DvtTimelineSeriesNode$$ < $DvtTimelineSeriesItem$$ + $DvtTimelineSeriesItemRenderer$$ && ($DvtTimelineSeriesNode$$ = $DvtTimelineSeriesItem$$ + $DvtTimelineSeriesItemRenderer$$);
      }
      $DvtTimelineSeriesNode$$ > this.$_maxOverflowValue$ && (this.$_maxOverflowValue$ = $DvtTimelineSeriesNode$$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$());
      return $DvtTimelineSeriesItem$$;
    }
  };
  $DvtTimelineSeries$$.prototype.$calculateDurationSize$ = function $$DvtTimelineSeries$$$$$calculateDurationSize$$($dvt$$15$$, $DvtTimelineSeriesParser$$) {
    if (null != this.$_items$ && 0 != this.$_items$.length) {
      var $DvtTimelineSeriesNode$$ = $dvt$$15$$.$getStartTime$(), $DvtTimelineSeriesItem$$ = $dvt$$15$$.$getEndTime$();
      if ($DvtTimelineSeriesItem$$ && $DvtTimelineSeriesItem$$ != $DvtTimelineSeriesNode$$) {
        $DvtTimelineSeriesItem$$ = $dvt$$15$$.$_durationLevel$;
        null == $DvtTimelineSeriesItem$$ && ($DvtTimelineSeriesItem$$ = 1);
        for (var $DvtTimelineSeries$$ = [], $DvtTimelineParser$$ = 0;$DvtTimelineParser$$ < $DvtTimelineSeriesParser$$;$DvtTimelineParser$$++) {
          var $DvtTimelineDefaults$$ = this.$_items$[$DvtTimelineParser$$], $DvtTimelineAutomation$$ = $DvtTimelineDefaults$$.$getStartTime$(), $DvtTimelineEventManager$$ = $DvtTimelineDefaults$$.$getEndTime$();
          $DvtTimelineEventManager$$ && $DvtTimelineEventManager$$ != $DvtTimelineAutomation$$ && $DvtTimelineSeriesNode$$ >= $DvtTimelineAutomation$$ && $DvtTimelineSeriesNode$$ <= $DvtTimelineEventManager$$ && $DvtTimelineSeries$$.push($DvtTimelineDefaults$$);
        }
        for ($DvtTimelineParser$$ = 0;$DvtTimelineParser$$ < $DvtTimelineSeries$$.length;$DvtTimelineParser$$++) {
          $DvtTimelineSeriesNode$$ = !1;
          for ($DvtTimelineAutomation$$ = 0;$DvtTimelineAutomation$$ < $DvtTimelineSeries$$.length;$DvtTimelineAutomation$$++) {
            if ($DvtTimelineDefaults$$ = $DvtTimelineSeries$$[$DvtTimelineAutomation$$], $DvtTimelineDefaults$$ = $DvtTimelineDefaults$$.$_durationLevel$, $DvtTimelineSeriesItem$$ == $DvtTimelineDefaults$$) {
              $DvtTimelineSeriesItem$$ = $DvtTimelineDefaults$$ + 1;
              $dvt$$15$$.$setDurationLevel$($DvtTimelineSeriesItem$$);
              $DvtTimelineSeriesNode$$ = !0;
              break;
            }
          }
          if (!$DvtTimelineSeriesNode$$) {
            break;
          }
        }
        $DvtTimelineSeriesItem$$ > this.$_maxDurationSize$ && (this.$_maxDurationSize$ = $DvtTimelineSeriesItem$$);
        return $DvtTimelineSeriesItem$$;
      }
    }
  };
  $DvtTimelineSeries$$.prototype.$prepareDurations$ = function $$DvtTimelineSeries$$$$$prepareDurations$$() {
    for (var $dvt$$15$$ = 0;$dvt$$15$$ < this.$_items$.length;$dvt$$15$$++) {
      var $DvtTimelineSeriesParser$$ = this.$_items$[$dvt$$15$$], $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$getStartTime$(), $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesParser$$.$getEndTime$();
      $DvtTimelineSeriesItem$$ && $DvtTimelineSeriesItem$$ != $DvtTimelineSeriesNode$$ && ($DvtTimelineSeriesParser$$.$setDurationLevel$(this.$calculateDurationSize$($DvtTimelineSeriesParser$$, $dvt$$15$$)), $DvtTimelineSeriesParser$$.$setDurationSize$(22 + 10 * $DvtTimelineSeriesParser$$.$_durationLevel$ - 5), null == $DvtTimelineSeriesParser$$.$_durationFillColor$ && ($DvtTimelineSeriesParser$$.$setDurationFillColor$(this.$_colors$[this.$_colorCount$]), this.$_colorCount$++, this.$_colorCount$ == 
      this.$_colors$.length && (this.$_colorCount$ = 0)));
    }
  };
  $DvtTimelineSeries$$.prototype.$prepareItems$ = function $$DvtTimelineSeries$$$$$prepareItems$$($DvtTimelineSeriesParser$$) {
    this.$isVertical$() ? this.$_initialSpacing$ = 20 * (0 < this.$_maxDurationSize$ ? 1 : 0) + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * this.$_maxDurationSize$ : this.$_initialSpacing$ = 20 + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * this.$_maxDurationSize$;
    for (var $DvtTimelineSeriesNode$$ = 0;$DvtTimelineSeriesNode$$ < $DvtTimelineSeriesParser$$.length;$DvtTimelineSeriesNode$$++) {
      var $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesParser$$[$DvtTimelineSeriesNode$$], $DvtTimelineSeries$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$(this.$_start$, this.$_end$, $DvtTimelineSeriesItem$$.$getStartTime$(), this.$_length$), $DvtTimelineParser$$ = $DvtTimelineSeriesItem$$.$getEndTime$();
      $DvtTimelineParser$$ && $DvtTimelineParser$$ != $DvtTimelineSeriesItem$$.$getStartTime$() && ($DvtTimelineParser$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$(this.$_start$, this.$_end$, $DvtTimelineParser$$, this.$_length$) - $DvtTimelineSeries$$, $DvtTimelineSeries$$ += Math.min($DvtTimelineStyleUtils$$.$getDurationFeelerOffset$(), $DvtTimelineParser$$ / 2));
      $DvtTimelineSeriesItem$$.$setLoc$($DvtTimelineSeries$$);
    }
    for ($DvtTimelineSeriesNode$$ = 0;$DvtTimelineSeriesNode$$ < this.$_items$.length;$DvtTimelineSeriesNode$$++) {
      $DvtTimelineSeriesItem$$ = this.$_items$[$DvtTimelineSeriesNode$$], $DvtTimelineSeries$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$(this.$_start$, this.$_end$, $DvtTimelineSeriesItem$$.$getStartTime$(), this.$_length$), $DvtTimelineSeries$$ < this.$_fetchStartPos$ || $DvtTimelineSeries$$ > this.$_fetchEndPos$ || $DvtTimelineSeriesItemRenderer$$.$initializeItem$($DvtTimelineSeriesItem$$, this, $DvtTimelineSeriesNode$$);
    }
  };
  $DvtTimelineSeries$$.prototype.$getLabel$ = function $$DvtTimelineSeries$$$$$getLabel$$() {
    return this.$_label$;
  };
  $DvtTimelineSeries$$.prototype.$HandleItemAction$ = function $$DvtTimelineSeries$$$$$HandleItemAction$$($DvtTimelineSeriesParser$$) {
    var $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$getAction$();
    $DvtTimelineSeriesNode$$ && ($DvtTimelineSeriesParser$$ = $dvt$$15$$.$EventFactory$.$newActionEvent$("action", $DvtTimelineSeriesNode$$, $DvtTimelineSeriesParser$$.getId()), $dvt$$15$$.$EventDispatcher$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $DvtTimelineSeriesParser$$));
  };
  $DvtTimelineSeries$$.prototype.$isTopToBottom$ = function $$DvtTimelineSeries$$$$$isTopToBottom$$() {
    return this.$_isTopToBottom$;
  };
  $DvtTimelineSeries$$.prototype.$isVertical$ = function $$DvtTimelineSeries$$$$$isVertical$$() {
    return this.$_isVertical$;
  };
  $DvtTimelineSeries$$.prototype.$addTick$ = function $$DvtTimelineSeries$$$$$addTick$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$, $DvtTimelineParser$$, $DvtTimelineDefaults$$, $DvtTimelineAutomation$$) {
    $DvtTimelineSeriesNode$$ = new $dvt$$15$$.$Line$(this.$getCtx$(), $DvtTimelineSeriesNode$$, $DvtTimelineSeries$$, $DvtTimelineSeriesItem$$, $DvtTimelineParser$$, $DvtTimelineAutomation$$);
    $DvtTimelineSeriesNode$$.$setStroke$($DvtTimelineDefaults$$);
    $DvtTimelineSeriesNode$$.$setPixelHinting$();
    $DvtTimelineSeriesParser$$.$addChild$($DvtTimelineSeriesNode$$);
    return $DvtTimelineSeriesNode$$;
  };
  $DvtTimelineSeries$$.prototype.$setVScrollPos$ = function $$DvtTimelineSeries$$$$$setVScrollPos$$($dvt$$15$$) {
    null != this.$_canvas$ && this.$_canvas$.$setTranslateY$(0 - $dvt$$15$$);
  };
  $DvtTimelineSeries$$.prototype.$setHScrollPos$ = function $$DvtTimelineSeries$$$$$setHScrollPos$$($dvt$$15$$) {
    null != this.$_canvas$ && this.$_canvas$.$setTranslateX$(0 - $dvt$$15$$);
  };
  $dvt$$15$$.$Obj$.$createSubclass$($DvtTimelineSeriesItem$$, $dvt$$15$$.$Container$);
  $DvtTimelineSeriesItem$$.$ENABLED_STATE_KEY$ = "en";
  $DvtTimelineSeriesItem$$.$SELECTED_STATE_KEY$ = "sel";
  $DvtTimelineSeriesItem$$.$ACTIVE_SELECTED_STATE_KEY$ = "asel";
  $DvtTimelineSeriesItem$$.$HOVER_STATE_KEY$ = "hl";
  $DvtTimelineSeriesItem$$.prototype.Init = function $$DvtTimelineSeriesItem$$$$Init$($dvt$$15$$, $DvtTimelineSeriesParser$$) {
    $DvtTimelineSeriesItem$$.$superclass$.Init.call(this, $dvt$$15$$, "g", $DvtTimelineSeriesParser$$);
  };
  $DvtTimelineSeriesItem$$.prototype.$setSelected$ = function $$DvtTimelineSeriesItem$$$$$setSelected$$($dvt$$15$$) {
    this.$_isSelected$ != $dvt$$15$$ && ((this.$_isSelected$ = $dvt$$15$$) ? this.$_isShowingHoverEffect$ ? this.$applyState$($DvtTimelineSeriesItem$$.$ACTIVE_SELECTED_STATE_KEY$) : this.$applyState$($DvtTimelineSeriesItem$$.$SELECTED_STATE_KEY$) : this.$applyState$($DvtTimelineSeriesItem$$.$ENABLED_STATE_KEY$));
  };
  $DvtTimelineSeriesItem$$.prototype.$showHoverEffect$ = function $$DvtTimelineSeriesItem$$$$$showHoverEffect$$($dvt$$15$$) {
    this.$_isShowingHoverEffect$ || (this.$_isShowingHoverEffect$ = !0, this.$_isSelected$ && $dvt$$15$$ ? this.$applyState$($DvtTimelineSeriesItem$$.$ACTIVE_SELECTED_STATE_KEY$) : this.$_isSelected$ ? this.$applyState$($DvtTimelineSeriesItem$$.$SELECTED_STATE_KEY$) : this.$applyState$($DvtTimelineSeriesItem$$.$HOVER_STATE_KEY$));
  };
  $DvtTimelineSeriesItem$$.prototype.$hideHoverEffect$ = function $$DvtTimelineSeriesItem$$$$$hideHoverEffect$$($dvt$$15$$) {
    this.$_isSelected$ && $dvt$$15$$ ? this.$applyState$($DvtTimelineSeriesItem$$.$ACTIVE_SELECTED_STATE_KEY$) : this.$_isSelected$ ? this.$applyState$($DvtTimelineSeriesItem$$.$SELECTED_STATE_KEY$) : this.$applyState$($DvtTimelineSeriesItem$$.$ENABLED_STATE_KEY$);
    this.$_isShowingHoverEffect$ = !1;
  };
  $DvtTimelineSeriesItem$$.prototype.$applyState$ = function $$DvtTimelineSeriesItem$$$$$applyState$$($DvtTimelineSeriesParser$$) {
    var $DvtTimelineSeriesNode$$ = this.$_node$, $DvtTimelineSeries$$ = $DvtTimelineSeriesNode$$.$_displayable$;
    if (null != $DvtTimelineSeries$$) {
      var $DvtTimelineParser$$ = $DvtTimelineSeries$$.$getChildAt$(0), $DvtTimelineDefaults$$ = $DvtTimelineParser$$.$getChildAt$(0), $DvtTimelineSeries$$ = $DvtTimelineSeriesNode$$.$_durationBar$;
      if ($DvtTimelineSeriesParser$$ == $DvtTimelineSeriesItem$$.$ACTIVE_SELECTED_STATE_KEY$) {
        $DvtTimelineSeriesParser$$ = $DvtTimelineStyleUtils$$.$getItemSelectedFillColor$($DvtTimelineSeriesNode$$);
        var $DvtTimelineAutomation$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$($DvtTimelineSeriesNode$$), $DvtTimelineEventManager$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$(), $DvtTimeUtils$$ = $DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$();
      } else {
        $DvtTimelineSeriesParser$$ == $DvtTimelineSeriesItem$$.$SELECTED_STATE_KEY$ ? ($DvtTimelineSeriesParser$$ = $DvtTimelineStyleUtils$$.$getItemSelectedFillColor$($DvtTimelineSeriesNode$$), $DvtTimelineAutomation$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$($DvtTimelineSeriesNode$$), $DvtTimelineEventManager$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$(), $DvtTimeUtils$$ = $DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$()) : $DvtTimelineSeriesParser$$ == $DvtTimelineSeriesItem$$.$HOVER_STATE_KEY$ ? 
        ($DvtTimelineSeriesParser$$ = $DvtTimelineStyleUtils$$.$getItemHoverFillColor$($DvtTimelineSeriesNode$$), $DvtTimelineAutomation$$ = $DvtTimelineStyleUtils$$.$getItemHoverStrokeColor$($DvtTimelineSeriesNode$$), $DvtTimelineEventManager$$ = $DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$(), $DvtTimeUtils$$ = $DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$()) : ($DvtTimelineSeriesParser$$ = $DvtTimelineStyleUtils$$.$getItemFillColor$($DvtTimelineSeriesNode$$), $DvtTimelineAutomation$$ = 
        $DvtTimelineStyleUtils$$.$getItemStrokeColor$($DvtTimelineSeriesNode$$), $DvtTimelineEventManager$$ = $DvtTimelineStyleUtils$$.$getItemStrokeWidth$(), $DvtTimeUtils$$ = $DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$());
      }
      var $DvtTimelineKeyboardHandler$$ = $DvtTimelineStyleUtils$$.$getItemInnerStrokeWidth$(), $DvtTimelineAutomation$$ = new $dvt$$15$$.$SolidStroke$($DvtTimelineAutomation$$, 1, $DvtTimelineEventManager$$), $DvtTimeUtils$$ = new $dvt$$15$$.$SolidStroke$($DvtTimeUtils$$, 1, $DvtTimelineKeyboardHandler$$);
      $DvtTimelineParser$$.$setSolidFill$($DvtTimelineSeriesParser$$);
      $DvtTimelineParser$$.$setStroke$($DvtTimelineAutomation$$);
      $DvtTimelineDefaults$$.$setStroke$($DvtTimeUtils$$);
      ($DvtTimelineSeriesNode$$ = $DvtTimelineSeriesNode$$.$_feeler$) && $DvtTimelineSeriesNode$$.$setStroke$($DvtTimelineAutomation$$);
      $DvtTimelineSeries$$ && $DvtTimelineSeries$$.$setStroke$($DvtTimelineAutomation$$);
    }
  };
  var $DvtTimelineSeriesItemRenderer$$ = {};
  $dvt$$15$$.$Obj$.$createSubclass$($DvtTimelineSeriesItemRenderer$$, $dvt$$15$$.$Obj$);
  $DvtTimelineSeriesItemRenderer$$.$renderItem$ = function $$DvtTimelineSeriesItemRenderer$$$$renderItem$$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$, $DvtTimelineParser$$) {
    $dvt$$15$$.$_content$ ? ($DvtTimelineSeriesItemRenderer$$.$_renderBubble$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeries$$), $DvtTimelineSeriesItemRenderer$$.$_displayBubble$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$, null, !1)) : ($DvtTimelineSeriesParser$$.$_hasMvAnimations$ = !0, $DvtTimelineSeriesItemRenderer$$.$_displayBubble$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$, $DvtTimelineParser$$, !0));
    $DvtTimelineSeriesParser$$.$isVertical$() || ($dvt$$15$$.$_feeler$ && $DvtTimelineSeriesParser$$.$_allowUpdates$ ? $DvtTimelineSeriesItemRenderer$$.$_updateFeeler$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$, $DvtTimelineParser$$) : $DvtTimelineSeriesItemRenderer$$.$_renderFeeler$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$.$feelers$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$));
  };
  $DvtTimelineSeriesItemRenderer$$.$initializeItem$ = function $$DvtTimelineSeriesItemRenderer$$$$initializeItem$$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) {
    $dvt$$15$$.$_displayable$ && $DvtTimelineSeriesParser$$.$_allowUpdates$ ? $DvtTimelineSeriesItemRenderer$$.$_updateBubble$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) : $DvtTimelineSeriesItemRenderer$$.$_createBubble$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$);
  };
  $DvtTimelineSeriesItemRenderer$$.$_createBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_createBubble$$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) {
    var $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesItemRenderer$$.$_getBubbleContent$($dvt$$15$$, $DvtTimelineSeriesParser$$);
    $DvtTimelineSeriesParser$$.$addChild$($DvtTimelineSeriesItem$$);
    var $DvtTimelineSeries$$ = $DvtTimelineSeriesItem$$.$getDimensions$();
    $DvtTimelineSeriesParser$$.removeChild($DvtTimelineSeriesItem$$);
    $dvt$$15$$.$setWidth$($DvtTimelineSeries$$.$w$ + 10);
    $dvt$$15$$.$setHeight$($DvtTimelineSeries$$.$h$ + 10);
    $dvt$$15$$.$_content$ = $DvtTimelineSeriesItem$$;
    $DvtTimelineSeriesParser$$ = $DvtTimelineSeriesParser$$.$calculateSpacing$($dvt$$15$$, $DvtTimelineSeriesNode$$);
    $dvt$$15$$.$setSpacing$($DvtTimelineSeriesParser$$);
  };
  $DvtTimelineSeriesItemRenderer$$.$_renderBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderBubble$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeries$$, $DvtTimelineParser$$) {
    var $DvtTimelineDefaults$$ = $DvtTimelineSeriesNode$$.$getCtx$(), $DvtTimelineAutomation$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineDefaults$$), $DvtTimelineEventManager$$ = $DvtTimelineSeriesParser$$.getId(), $DvtTimeUtils$$ = $DvtTimelineSeriesParser$$.$_content$;
    $DvtTimelineSeriesParser$$.$_content$ = null;
    var $DvtTimelineKeyboardHandler$$ = $DvtTimelineSeriesParser$$.getWidth(), $DvtTimelineRenderer$$ = $DvtTimelineSeriesParser$$.getHeight(), $DvtTimelineSeriesItemRenderer$$ = "_bubble_" + $DvtTimelineEventManager$$;
    if ($DvtTimelineSeriesNode$$.$isVertical$()) {
      var $DvtTimelineSeriesRenderer$$ = $DvtTimelineRenderer$$ / 2, $startOffset$$3$$ = $DvtTimelineSeriesRenderer$$ - 6, $endOffset$$3$$ = $DvtTimelineSeriesRenderer$$ + 6;
      !$DvtTimelineAutomation$$ && $DvtTimelineSeriesNode$$.$_isInverted$ || $DvtTimelineAutomation$$ && !$DvtTimelineSeriesNode$$.$_isInverted$ ? ($DvtTimelineAutomation$$ = [0, 0, 0, $startOffset$$3$$, -6, $DvtTimelineSeriesRenderer$$, 0, $endOffset$$3$$, 0, $DvtTimelineRenderer$$, $DvtTimelineKeyboardHandler$$, $DvtTimelineRenderer$$, $DvtTimelineKeyboardHandler$$, 0, 0, 0], $DvtTimelineRenderer$$ = [2, 2, 2, $startOffset$$3$$, -4, $DvtTimelineSeriesRenderer$$, 2, $endOffset$$3$$, 2, $DvtTimelineRenderer$$ - 
      2, $DvtTimelineKeyboardHandler$$ - 2, $DvtTimelineRenderer$$ - 2, $DvtTimelineKeyboardHandler$$ - 2, 2, 2, 2]) : ($DvtTimelineAutomation$$ = [0, 0, 0, $DvtTimelineRenderer$$, $DvtTimelineKeyboardHandler$$, $DvtTimelineRenderer$$, $DvtTimelineKeyboardHandler$$, $endOffset$$3$$, $DvtTimelineKeyboardHandler$$ + 6, $DvtTimelineSeriesRenderer$$, $DvtTimelineKeyboardHandler$$, $startOffset$$3$$, $DvtTimelineKeyboardHandler$$, 0, 0, 0], $DvtTimelineRenderer$$ = [2, 2, 2, $DvtTimelineRenderer$$ - 2, 
      $DvtTimelineKeyboardHandler$$ - 2, $DvtTimelineRenderer$$ - 2, $DvtTimelineKeyboardHandler$$ - 2, $endOffset$$3$$, $DvtTimelineKeyboardHandler$$ + 4, $DvtTimelineSeriesRenderer$$, $DvtTimelineKeyboardHandler$$ - 2, $startOffset$$3$$, $DvtTimelineKeyboardHandler$$ - 2, 2, 2, 2]);
    } else {
      $DvtTimelineSeriesRenderer$$ = $DvtTimelineAutomation$$ ? $DvtTimelineKeyboardHandler$$ - $DvtTimelineStyleUtils$$.$getBubbleOffset$() : $DvtTimelineStyleUtils$$.$getBubbleOffset$(), $startOffset$$3$$ = $DvtTimelineSeriesRenderer$$ - 6, $endOffset$$3$$ = $DvtTimelineSeriesRenderer$$ + 6, $DvtTimelineSeriesNode$$.$_isInverted$ ? ($DvtTimelineAutomation$$ = [0, 0, $startOffset$$3$$, 0, $DvtTimelineSeriesRenderer$$, -6, $endOffset$$3$$, 0, $DvtTimelineKeyboardHandler$$, 0, $DvtTimelineKeyboardHandler$$, 
      $DvtTimelineRenderer$$, 0, $DvtTimelineRenderer$$, 0, 0], $DvtTimelineRenderer$$ = [2, 2, $startOffset$$3$$, 2, $DvtTimelineSeriesRenderer$$, -4, $endOffset$$3$$, 2, $DvtTimelineKeyboardHandler$$ - 2, 2, $DvtTimelineKeyboardHandler$$ - 2, $DvtTimelineRenderer$$ - 2, 2, $DvtTimelineRenderer$$ - 2, 2, 2]) : ($DvtTimelineAutomation$$ = [0, 0, 0, $DvtTimelineRenderer$$, $startOffset$$3$$, $DvtTimelineRenderer$$, $DvtTimelineSeriesRenderer$$, $DvtTimelineRenderer$$ + 6, $endOffset$$3$$, $DvtTimelineRenderer$$, 
      $DvtTimelineKeyboardHandler$$, $DvtTimelineRenderer$$, $DvtTimelineKeyboardHandler$$, 0, 0, 0], $DvtTimelineRenderer$$ = [2, 2, 2, $DvtTimelineRenderer$$ - 2, $startOffset$$3$$, $DvtTimelineRenderer$$ - 2, $DvtTimelineSeriesRenderer$$, $DvtTimelineRenderer$$ + 4, $endOffset$$3$$, $DvtTimelineRenderer$$ - 2, $DvtTimelineKeyboardHandler$$ - 2, $DvtTimelineRenderer$$ - 2, $DvtTimelineKeyboardHandler$$ - 2, 2, 2, 2]);
    }
    $DvtTimelineKeyboardHandler$$ = new $dvt$$15$$.$Polygon$($DvtTimelineDefaults$$, $DvtTimelineAutomation$$, $DvtTimelineSeriesItemRenderer$$);
    $DvtTimelineSeriesItemRenderer$$ = new $dvt$$15$$.$Polygon$($DvtTimelineDefaults$$, $DvtTimelineRenderer$$, $DvtTimelineSeriesItemRenderer$$ + "_i");
    $DvtTimelineSeriesItemRenderer$$.$setSolidFill$($DvtTimelineStyleUtils$$.$getItemInnerFillColor$());
    $DvtTimeUtils$$.$setTranslate$(5, 5);
    $DvtTimelineKeyboardHandler$$.$addChild$($DvtTimelineSeriesItemRenderer$$);
    $DvtTimelineKeyboardHandler$$.$addChild$($DvtTimeUtils$$);
    $DvtTimelineDefaults$$ = new $DvtTimelineSeriesItem$$($DvtTimelineDefaults$$, "_bt_" + $DvtTimelineEventManager$$);
    $DvtTimelineParser$$ && ($DvtTimelineDefaults$$.$setAlpha$(0), $DvtTimelineParser$$.push($DvtTimelineDefaults$$));
    $DvtTimelineDefaults$$.$addChild$($DvtTimelineKeyboardHandler$$);
    $dvt$$15$$.$TimeAxis$.$supportsTouch$() && $dvt$$15$$.$ToolkitUtils$.$setAttrNullNS$($DvtTimelineDefaults$$.$_elem$, "id", $DvtTimelineDefaults$$.$_id$);
    $DvtTimelineDefaults$$.$_node$ = $DvtTimelineSeriesParser$$;
    $DvtTimelineSeriesParser$$.$setBubble$($DvtTimelineDefaults$$);
    $DvtTimelineDefaults$$.$applyState$($DvtTimelineSeriesItem$$.$ENABLED_STATE_KEY$);
    0 <= $DvtTimelineSeriesParser$$.$_loc$ && $DvtTimelineSeries$$.$addChild$($DvtTimelineDefaults$$);
    $DvtTimelineDefaults$$.$setAriaRole$("group");
    $DvtTimelineSeriesParser$$.$_updateAriaLabel$();
    $DvtTimelineSeriesNode$$.$_callbackObj$.$EventManager$.$associate$($DvtTimelineDefaults$$, $DvtTimelineSeriesParser$$);
  };
  $DvtTimelineSeriesItemRenderer$$.$_displayBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_displayBubble$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeries$$, $DvtTimelineParser$$, $DvtTimelineDefaults$$) {
    var $DvtTimelineAutomation$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineSeriesNode$$.$getCtx$()), $DvtTimelineEventManager$$ = $DvtTimelineSeriesParser$$.$_loc$, $DvtTimeUtils$$ = $DvtTimelineSeriesParser$$.getWidth(), $DvtTimelineKeyboardHandler$$ = $DvtTimelineSeriesParser$$.getHeight(), $DvtTimelineRenderer$$ = $DvtTimelineSeriesParser$$.$_spacing$;
    $DvtTimelineSeriesParser$$ = $DvtTimelineSeriesParser$$.$_displayable$;
    $DvtTimelineDefaults$$ && $DvtTimelineSeriesParser$$.$applyState$($DvtTimelineSeriesItem$$.$ENABLED_STATE_KEY$);
    $DvtTimelineSeriesNode$$.$isVertical$() ? ($DvtTimelineKeyboardHandler$$ = $DvtTimelineEventManager$$ - $DvtTimelineKeyboardHandler$$ / 2, $DvtTimelineAutomation$$ && $DvtTimelineSeriesNode$$.$_isInverted$ || !$DvtTimelineAutomation$$ && !$DvtTimelineSeriesNode$$.$_isInverted$ ? $DvtTimelineAutomation$$ = $DvtTimelineSeriesNode$$.$_size$ - ($DvtTimeUtils$$ + $DvtTimelineSeriesNode$$.$_initialSpacing$) + $DvtTimelineSeries$$ : ($DvtTimelineAutomation$$ = $DvtTimelineSeriesNode$$.$_initialSpacing$, 
    $DvtTimelineSeries$$ = 0)) : ($DvtTimelineAutomation$$ = $DvtTimelineAutomation$$ ? $DvtTimelineSeriesNode$$.$_length$ - $DvtTimelineEventManager$$ - $DvtTimeUtils$$ + $DvtTimelineStyleUtils$$.$getBubbleOffset$() : $DvtTimelineEventManager$$ - $DvtTimelineStyleUtils$$.$getBubbleOffset$(), $DvtTimelineSeriesNode$$.$_isInverted$ ? ($DvtTimelineKeyboardHandler$$ = $DvtTimelineSeriesNode$$.$isTopToBottom$() ? $DvtTimelineRenderer$$ : $DvtTimelineSeriesNode$$.$Height$ - $DvtTimelineRenderer$$ - $DvtTimelineKeyboardHandler$$ + 
    $DvtTimelineSeries$$ + $DvtTimelineSeriesNode$$.$_initialSpacing$ - $DvtTimelineStyleUtils$$.$getBubbleSpacing$(), $DvtTimelineSeries$$ = 0) : $DvtTimelineKeyboardHandler$$ = $DvtTimelineSeriesNode$$.$isTopToBottom$() ? $DvtTimelineRenderer$$ - $DvtTimelineSeriesNode$$.$_initialSpacing$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() : $DvtTimelineSeriesNode$$.$Height$ - $DvtTimelineRenderer$$ - $DvtTimelineKeyboardHandler$$ + $DvtTimelineSeries$$);
    $DvtTimelineParser$$ ? ($DvtTimelineSeriesNode$$.$isVertical$() ? $DvtTimelineSeriesParser$$.$setTranslateX$($DvtTimelineSeriesParser$$.$getTranslateX$() + $DvtTimelineSeriesNode$$.$_canvasOffsetX$ + $DvtTimelineSeries$$) : $DvtTimelineSeriesParser$$.$setTranslateY$($DvtTimelineSeriesParser$$.$getTranslateY$() + $DvtTimelineSeriesNode$$.$_canvasOffsetY$ + $DvtTimelineSeries$$), $DvtTimelineParser$$.$addProp$($dvt$$15$$.$Animator$.$TYPE_NUMBER$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesParser$$.$getTranslateX$, 
    $DvtTimelineSeriesParser$$.$setTranslateX$, $DvtTimelineAutomation$$), $DvtTimelineParser$$.$addProp$($dvt$$15$$.$Animator$.$TYPE_NUMBER$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesParser$$.$getTranslateY$, $DvtTimelineSeriesParser$$.$setTranslateY$, $DvtTimelineKeyboardHandler$$)) : $DvtTimelineSeriesParser$$.$setTranslate$($DvtTimelineAutomation$$, $DvtTimelineKeyboardHandler$$);
  };
  $DvtTimelineSeriesItemRenderer$$.$_getBubbleContent$ = function $$DvtTimelineSeriesItemRenderer$$$$_getBubbleContent$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) {
    var $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesNode$$.$getCtx$(), $DvtTimelineSeries$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineSeriesItem$$), $DvtTimelineParser$$ = $DvtTimelineSeriesParser$$.$getTitle$(), $DvtTimelineDefaults$$ = $DvtTimelineSeriesParser$$.$_desc$, $DvtTimelineAutomation$$ = $DvtTimelineSeriesParser$$.$_thumbnail$, $DvtTimelineEventManager$$ = new $dvt$$15$$.$Container$($DvtTimelineSeriesItem$$), $DvtTimeUtils$$ = 0, $DvtTimelineKeyboardHandler$$ = 0;
    if ($DvtTimelineSeries$$) {
      $DvtTimelineParser$$ && ($DvtTimelineRenderer$$ = new $dvt$$15$$.$OutputText$($DvtTimelineSeriesItem$$, $DvtTimelineParser$$, 0, $DvtTimelineKeyboardHandler$$), $DvtTimelineRenderer$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemTitleStyle$($DvtTimelineSeriesParser$$)), $DvtTimeUtils$$ = $DvtTimelineRenderer$$.$measureDimensions$().$w$ + 2, $DvtTimelineKeyboardHandler$$ = 15, $DvtTimelineEventManager$$.$addChild$($DvtTimelineRenderer$$)), $DvtTimelineDefaults$$ && ($DvtTimelineDefaults$$ = 
      new $dvt$$15$$.$OutputText$($DvtTimelineSeriesItem$$, $DvtTimelineDefaults$$, 0, $DvtTimelineKeyboardHandler$$), $DvtTimelineDefaults$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemDescriptionStyle$($DvtTimelineSeriesParser$$)), $DvtTimelineParser$$ = $DvtTimelineDefaults$$.$measureDimensions$().$w$ + 2, 0 != $DvtTimeUtils$$ && $DvtTimelineParser$$ != $DvtTimeUtils$$ ? $DvtTimelineParser$$ > $DvtTimeUtils$$ ? ($DvtTimelineRenderer$$.$setX$($DvtTimelineParser$$ - $DvtTimeUtils$$), $DvtTimeUtils$$ = 
      $DvtTimelineParser$$) : $DvtTimelineDefaults$$.$setX$($DvtTimeUtils$$ - $DvtTimelineParser$$) : $DvtTimeUtils$$ = $DvtTimelineParser$$, $DvtTimelineEventManager$$.$addChild$($DvtTimelineDefaults$$)), $DvtTimelineAutomation$$ && ($DvtTimelineAutomation$$ = new $dvt$$15$$.Image($DvtTimelineSeriesItem$$, $DvtTimelineAutomation$$, $DvtTimeUtils$$, 0, $DvtTimelineStyleUtils$$.$getThumbnailWidth$(), $DvtTimelineStyleUtils$$.$getThumbnailHeight$(), "_tn"), $DvtTimelineAutomation$$.$setMouseEnabled$(!1), 
      $DvtTimelineEventManager$$.$addChild$($DvtTimelineAutomation$$));
    } else {
      $DvtTimelineAutomation$$ && ($DvtTimelineAutomation$$ = new $dvt$$15$$.Image($DvtTimelineSeriesItem$$, $DvtTimelineAutomation$$, 0, 0, $DvtTimelineStyleUtils$$.$getThumbnailWidth$(), $DvtTimelineStyleUtils$$.$getThumbnailHeight$(), "_tn"), $DvtTimelineAutomation$$.$setMouseEnabled$(!1), $DvtTimelineEventManager$$.$addChild$($DvtTimelineAutomation$$), $DvtTimeUtils$$ = $DvtTimelineStyleUtils$$.$getThumbnailWidth$() + 2);
      if ($DvtTimelineParser$$) {
        var $DvtTimelineRenderer$$ = new $dvt$$15$$.$OutputText$($DvtTimelineSeriesItem$$, $DvtTimelineParser$$, $DvtTimeUtils$$, $DvtTimelineKeyboardHandler$$);
        $DvtTimelineRenderer$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemTitleStyle$($DvtTimelineSeriesParser$$));
        $DvtTimelineKeyboardHandler$$ = 15;
        $DvtTimelineEventManager$$.$addChild$($DvtTimelineRenderer$$);
      }
      $DvtTimelineDefaults$$ && ($DvtTimelineDefaults$$ = new $dvt$$15$$.$OutputText$($DvtTimelineSeriesItem$$, $DvtTimelineDefaults$$, $DvtTimeUtils$$, $DvtTimelineKeyboardHandler$$), $DvtTimelineDefaults$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemDescriptionStyle$($DvtTimelineSeriesParser$$)), $DvtTimelineEventManager$$.$addChild$($DvtTimelineDefaults$$));
    }
    return $DvtTimelineEventManager$$;
  };
  $DvtTimelineSeriesItemRenderer$$.$_updateBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateBubble$$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) {
    $DvtTimelineSeriesParser$$ = $DvtTimelineSeriesParser$$.$calculateSpacing$($dvt$$15$$, $DvtTimelineSeriesNode$$);
    $dvt$$15$$.$setSpacing$($DvtTimelineSeriesParser$$);
  };
  $DvtTimelineSeriesItemRenderer$$.$_renderFeeler$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderFeeler$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$, $DvtTimelineParser$$) {
    var $DvtTimelineDefaults$$ = $DvtTimelineSeriesNode$$.$getCtx$(), $DvtTimelineAutomation$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineDefaults$$), $DvtTimelineEventManager$$ = $DvtTimelineSeriesParser$$.getId(), $DvtTimeUtils$$ = $DvtTimelineSeriesParser$$.$_loc$, $DvtTimelineKeyboardHandler$$ = $DvtTimelineSeriesParser$$.$_spacing$, $DvtTimelineEventManager$$ = "_feeler_" + $DvtTimelineEventManager$$;
    if ($DvtTimelineSeriesNode$$.$_isInverted$) {
      $DvtTimelineRenderer$$ = $DvtTimelineSeriesParser$$.$_durationSize$, $DvtTimelineSeries$$ = $DvtTimelineSeriesNode$$.$isTopToBottom$() ? $DvtTimelineKeyboardHandler$$ : $DvtTimelineSeriesNode$$.$Height$ - $DvtTimelineKeyboardHandler$$ - $DvtTimelineSeriesParser$$.getHeight() + $DvtTimelineSeries$$ + $DvtTimelineSeriesNode$$.$_initialSpacing$ - $DvtTimelineStyleUtils$$.$getBubbleSpacing$();
    } else {
      var $DvtTimelineRenderer$$ = $DvtTimelineSeriesNode$$.$Height$ + $DvtTimelineSeries$$ - $DvtTimelineSeriesParser$$.$_durationSize$;
      $DvtTimelineSeries$$ = $DvtTimelineSeriesNode$$.$isTopToBottom$() ? $DvtTimelineKeyboardHandler$$ - $DvtTimelineSeriesNode$$.$_initialSpacing$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + $DvtTimelineSeriesParser$$.getHeight() : $DvtTimelineSeriesNode$$.$Height$ - $DvtTimelineKeyboardHandler$$ + $DvtTimelineSeries$$;
    }
    $DvtTimelineSeriesNode$$ = $DvtTimelineAutomation$$ ? $DvtTimelineSeriesNode$$.$_length$ - $DvtTimeUtils$$ : $DvtTimeUtils$$;
    $DvtTimelineDefaults$$ = new $dvt$$15$$.$Line$($DvtTimelineDefaults$$, $DvtTimelineSeriesNode$$, $DvtTimelineRenderer$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeries$$, $DvtTimelineEventManager$$);
    $DvtTimelineParser$$ && ($DvtTimelineDefaults$$.$setAlpha$(0), $DvtTimelineParser$$.push($DvtTimelineDefaults$$));
    $DvtTimelineSeriesItem$$.$addChild$($DvtTimelineDefaults$$);
    $DvtTimelineSeriesItem$$ = $DvtTimelineStyleUtils$$.$getItemStrokeWidth$();
    $DvtTimelineParser$$ = $DvtTimelineStyleUtils$$.$getItemStrokeColor$($DvtTimelineSeriesParser$$);
    $DvtTimelineSeriesItem$$ = new $dvt$$15$$.$SolidStroke$($DvtTimelineParser$$, 1, $DvtTimelineSeriesItem$$);
    $DvtTimelineDefaults$$.$setStroke$($DvtTimelineSeriesItem$$);
    $DvtTimelineDefaults$$.$_node$ = $DvtTimelineSeriesParser$$;
    $DvtTimelineSeriesParser$$.$setFeeler$($DvtTimelineDefaults$$);
  };
  $DvtTimelineSeriesItemRenderer$$.$_updateFeeler$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateFeeler$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$) {
    if ($DvtTimelineSeriesNode$$.$isVertical$()) {
      $DvtTimelineSeriesParser$$.$setFeeler$(null);
    } else {
      var $DvtTimelineParser$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineSeriesNode$$.$getCtx$()), $DvtTimelineDefaults$$ = $DvtTimelineSeriesParser$$.$_feeler$;
      if ($DvtTimelineSeriesNode$$.$_isInverted$) {
        $DvtTimelineAutomation$$ = $DvtTimelineSeriesParser$$.$_durationSize$, $DvtTimelineEventManager$$ = $DvtTimelineSeriesNode$$.$isTopToBottom$() ? $DvtTimelineSeriesParser$$.$_spacing$ : $DvtTimelineSeriesNode$$.$Height$ - $DvtTimelineSeriesParser$$.$_spacing$ - $DvtTimelineSeriesParser$$.getHeight() + $DvtTimelineSeriesItem$$ + $DvtTimelineSeriesNode$$.$_initialSpacing$ - $DvtTimelineStyleUtils$$.$getBubbleSpacing$(), $DvtTimelineSeriesItem$$ = 0;
      } else {
        var $DvtTimelineAutomation$$ = $DvtTimelineSeriesNode$$.$Height$ + $DvtTimelineSeriesItem$$ - $DvtTimelineSeriesParser$$.$_durationSize$, $DvtTimelineEventManager$$ = $DvtTimelineSeriesNode$$.$isTopToBottom$() ? $DvtTimelineSeriesParser$$.$_spacing$ - $DvtTimelineSeriesNode$$.$_initialSpacing$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + $DvtTimelineSeriesParser$$.getHeight() : $DvtTimelineSeriesNode$$.$Height$ - $DvtTimelineSeriesParser$$.$_spacing$ + $DvtTimelineSeriesItem$$
      }
      $DvtTimelineSeriesParser$$ = $DvtTimelineParser$$ ? $DvtTimelineSeriesNode$$.$_length$ - $DvtTimelineSeriesParser$$.$_loc$ : $DvtTimelineSeriesParser$$.$_loc$;
      $DvtTimelineSeries$$ ? ($DvtTimelineDefaults$$.$setY1$($DvtTimelineDefaults$$.$getY1$() + $DvtTimelineSeriesNode$$.$_canvasOffsetY$ + $DvtTimelineSeriesItem$$), $DvtTimelineDefaults$$.$setY2$($DvtTimelineDefaults$$.$getY2$() + $DvtTimelineSeriesNode$$.$_canvasOffsetY$ + $DvtTimelineSeriesItem$$), $DvtTimelineSeries$$.$addProp$($dvt$$15$$.$Animator$.$TYPE_NUMBER$, $DvtTimelineDefaults$$, $DvtTimelineDefaults$$.$getX1$, $DvtTimelineDefaults$$.$setX1$, $DvtTimelineSeriesParser$$), $DvtTimelineSeries$$.$addProp$($dvt$$15$$.$Animator$.$TYPE_NUMBER$, 
      $DvtTimelineDefaults$$, $DvtTimelineDefaults$$.$getY1$, $DvtTimelineDefaults$$.$setY1$, $DvtTimelineAutomation$$), $DvtTimelineSeries$$.$addProp$($dvt$$15$$.$Animator$.$TYPE_NUMBER$, $DvtTimelineDefaults$$, $DvtTimelineDefaults$$.$getX2$, $DvtTimelineDefaults$$.$setX2$, $DvtTimelineSeriesParser$$), $DvtTimelineSeries$$.$addProp$($dvt$$15$$.$Animator$.$TYPE_NUMBER$, $DvtTimelineDefaults$$, $DvtTimelineDefaults$$.$getY2$, $DvtTimelineDefaults$$.$setY2$, $DvtTimelineEventManager$$)) : ($DvtTimelineDefaults$$.$setX1$($DvtTimelineSeriesParser$$), 
      $DvtTimelineDefaults$$.$setY1$($DvtTimelineAutomation$$), $DvtTimelineDefaults$$.$setX2$($DvtTimelineSeriesParser$$), $DvtTimelineDefaults$$.$setY2$($DvtTimelineEventManager$$));
    }
  };
  $DvtTimelineSeriesItemRenderer$$.$renderDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$renderDuration$$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$, $DvtTimelineParser$$) {
    $dvt$$15$$.$_durationBar$ ? $DvtTimelineSeriesItemRenderer$$.$_updateDuration$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$, $DvtTimelineParser$$) : $DvtTimelineSeriesItemRenderer$$.$_renderDuration$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$);
  };
  $DvtTimelineSeriesItemRenderer$$.$_renderDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderDuration$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$, $DvtTimelineParser$$) {
    var $DvtTimelineDefaults$$ = $DvtTimelineSeriesNode$$.$getCtx$(), $DvtTimelineAutomation$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineDefaults$$), $DvtTimelineEventManager$$ = $DvtTimelineSeriesParser$$.$getEndTime$(), $DvtTimeUtils$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeriesNode$$.$_start$, $DvtTimelineSeriesNode$$.$_end$, $DvtTimelineSeriesParser$$.$getStartTime$(), $DvtTimelineSeriesNode$$.$_length$), $DvtTimelineKeyboardHandler$$ = "_duration_" + $DvtTimelineSeriesParser$$.getId(), 
    $DvtTimelineRenderer$$ = 22 + 10 * $DvtTimelineSeriesParser$$.$_durationLevel$, $DvtTimelineEventManager$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeriesNode$$.$_start$, $DvtTimelineSeriesNode$$.$_end$, $DvtTimelineEventManager$$, $DvtTimelineSeriesNode$$.$_length$);
    $DvtTimelineSeriesNode$$.$isVertical$() ? (!$DvtTimelineAutomation$$ && !$DvtTimelineSeriesNode$$.$_isInverted$ || $DvtTimelineAutomation$$ && $DvtTimelineSeriesNode$$.$_isInverted$ ? $DvtTimelineDefaults$$ = new $dvt$$15$$.Rect($DvtTimelineDefaults$$, $DvtTimelineSeriesNode$$.$_size$ - $DvtTimelineRenderer$$ + 5, $DvtTimeUtils$$, $DvtTimelineRenderer$$, $DvtTimelineEventManager$$ - $DvtTimeUtils$$, $DvtTimelineKeyboardHandler$$) : ($DvtTimelineDefaults$$ = new $dvt$$15$$.Rect($DvtTimelineDefaults$$, 
    -5, $DvtTimeUtils$$, $DvtTimelineRenderer$$, $DvtTimelineEventManager$$ - $DvtTimeUtils$$, $DvtTimelineKeyboardHandler$$), $DvtTimelineSeries$$ = 0), $DvtTimelineDefaults$$.$setTranslateX$($DvtTimelineSeries$$), $DvtTimelineDefaults$$.$setY$($DvtTimeUtils$$), $DvtTimelineDefaults$$.$setWidth$($DvtTimelineRenderer$$), $DvtTimelineDefaults$$.$setHeight$($DvtTimelineEventManager$$ - $DvtTimeUtils$$)) : ($DvtTimelineEventManager$$ -= $DvtTimeUtils$$, $DvtTimeUtils$$ = $DvtTimelineAutomation$$ ? $DvtTimelineSeriesNode$$.$_length$ - 
    $DvtTimeUtils$$ - $DvtTimelineEventManager$$ : $DvtTimeUtils$$, $DvtTimelineSeriesNode$$.$_isInverted$ ? ($DvtTimelineDefaults$$ = new $dvt$$15$$.Rect($DvtTimelineDefaults$$, $DvtTimeUtils$$, -5, $DvtTimelineEventManager$$, $DvtTimelineRenderer$$, $DvtTimelineKeyboardHandler$$), $DvtTimelineDefaults$$.$setTranslateY$(0)) : ($DvtTimelineDefaults$$ = new $dvt$$15$$.Rect($DvtTimelineDefaults$$, $DvtTimeUtils$$, $DvtTimelineSeriesNode$$.$_size$ - $DvtTimelineRenderer$$ + 5, $DvtTimelineEventManager$$, 
    $DvtTimelineRenderer$$, $DvtTimelineKeyboardHandler$$), $DvtTimelineDefaults$$.$setTranslateY$($DvtTimelineSeries$$)));
    $DvtTimelineParser$$ && ($DvtTimelineDefaults$$.$setAlpha$(0), $DvtTimelineParser$$.push($DvtTimelineDefaults$$));
    $DvtTimelineDefaults$$.$setCornerRadius$(5);
    $DvtTimelineDefaults$$.$setSolidFill$($DvtTimelineSeriesParser$$.$_durationFillColor$);
    $DvtTimelineSeries$$ = $DvtTimelineStyleUtils$$.$getItemStrokeWidth$();
    $DvtTimelineParser$$ = $DvtTimelineStyleUtils$$.$getItemStrokeColor$($DvtTimelineSeriesParser$$);
    $DvtTimelineSeries$$ = new $dvt$$15$$.$SolidStroke$($DvtTimelineParser$$, 1, $DvtTimelineSeries$$);
    $DvtTimelineDefaults$$.$setStroke$($DvtTimelineSeries$$);
    $DvtTimelineDefaults$$.$_node$ = $DvtTimelineSeriesParser$$;
    $DvtTimelineSeriesNode$$.$_callbackObj$.$EventManager$.$associate$($DvtTimelineDefaults$$, $DvtTimelineSeriesParser$$);
    $DvtTimelineSeriesItem$$.$addChild$($DvtTimelineDefaults$$);
    $DvtTimelineSeriesParser$$.$setDurationBar$($DvtTimelineDefaults$$);
  };
  $DvtTimelineSeriesItemRenderer$$.$_updateDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateDuration$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$) {
    var $DvtTimelineParser$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineSeriesNode$$.$getCtx$()), $DvtTimelineDefaults$$ = $DvtTimelineSeriesParser$$.$_durationBar$;
    if (null != $DvtTimelineDefaults$$) {
      var $DvtTimelineAutomation$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeriesNode$$.$_start$, $DvtTimelineSeriesNode$$.$_end$, $DvtTimelineSeriesParser$$.$getStartTime$(), $DvtTimelineSeriesNode$$.$_length$), $DvtTimelineEventManager$$ = 22 + 10 * $DvtTimelineSeriesParser$$.$_durationLevel$, $DvtTimeUtils$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeriesNode$$.$_start$, $DvtTimelineSeriesNode$$.$_end$, $DvtTimelineSeriesParser$$.$getEndTime$(), $DvtTimelineSeriesNode$$.$_length$);
      if ($DvtTimelineSeriesNode$$.$isVertical$()) {
        $DvtTimelineSeriesParser$$ = 0;
        !$DvtTimelineParser$$ && !$DvtTimelineSeriesNode$$.$_isInverted$ || $DvtTimelineParser$$ && $DvtTimelineSeriesNode$$.$_isInverted$ ? $DvtTimelineParser$$ = $DvtTimelineSeriesNode$$.$_size$ - $DvtTimelineEventManager$$ + 5 : ($DvtTimelineParser$$ = -5, $DvtTimelineSeriesItem$$ = 0);
        var $DvtTimelineKeyboardHandler$$ = $DvtTimelineSeriesItem$$, $DvtTimelineStyleUtils$$ = $DvtTimelineAutomation$$, $DvtTimelineRenderer$$ = $DvtTimelineEventManager$$, $DvtTimelineAutomation$$ = $DvtTimeUtils$$ - $DvtTimelineAutomation$$;
      } else {
        $DvtTimelineKeyboardHandler$$ = 0, $DvtTimeUtils$$ -= $DvtTimelineAutomation$$, $DvtTimelineParser$$ = $DvtTimelineParser$$ ? $DvtTimelineSeriesNode$$.$_length$ - $DvtTimelineAutomation$$ - $DvtTimeUtils$$ : $DvtTimelineAutomation$$, $DvtTimelineSeriesNode$$.$_isInverted$ ? ($DvtTimelineSeriesParser$$ = $DvtTimelineSeriesItem$$ = 0, $DvtTimelineStyleUtils$$ = -5) : ($DvtTimelineSeriesParser$$ = $DvtTimelineSeriesItem$$, $DvtTimelineStyleUtils$$ = $DvtTimelineSeriesNode$$.$_size$ - $DvtTimelineEventManager$$ + 
        5), $DvtTimelineRenderer$$ = $DvtTimeUtils$$, $DvtTimelineAutomation$$ = $DvtTimelineEventManager$$;
      }
      $DvtTimelineSeries$$ ? ($DvtTimelineSeriesNode$$.$isVertical$() ? $DvtTimelineDefaults$$.$setTranslateX$($DvtTimelineDefaults$$.$getTranslateX$() + $DvtTimelineSeriesNode$$.$_canvasOffsetX$ + $DvtTimelineSeriesItem$$) : $DvtTimelineDefaults$$.$setTranslateY$($DvtTimelineDefaults$$.$getTranslateY$() + $DvtTimelineSeriesNode$$.$_canvasOffsetY$ + $DvtTimelineSeriesItem$$), $DvtTimelineSeries$$.$addProp$($dvt$$15$$.$Animator$.$TYPE_NUMBER$, $DvtTimelineDefaults$$, $DvtTimelineDefaults$$.$getTranslateX$, 
      $DvtTimelineDefaults$$.$setTranslateX$, $DvtTimelineKeyboardHandler$$), $DvtTimelineSeries$$.$addProp$($dvt$$15$$.$Animator$.$TYPE_NUMBER$, $DvtTimelineDefaults$$, $DvtTimelineDefaults$$.$getTranslateY$, $DvtTimelineDefaults$$.$setTranslateY$, $DvtTimelineSeriesParser$$), $DvtTimelineSeries$$.$addProp$($dvt$$15$$.$Animator$.$TYPE_NUMBER$, $DvtTimelineDefaults$$, $DvtTimelineDefaults$$.$getX$, $DvtTimelineDefaults$$.$setX$, $DvtTimelineParser$$), $DvtTimelineSeries$$.$addProp$($dvt$$15$$.$Animator$.$TYPE_NUMBER$, 
      $DvtTimelineDefaults$$, $DvtTimelineDefaults$$.$getY$, $DvtTimelineDefaults$$.$setY$, $DvtTimelineStyleUtils$$), $DvtTimelineSeries$$.$addProp$($dvt$$15$$.$Animator$.$TYPE_NUMBER$, $DvtTimelineDefaults$$, $DvtTimelineDefaults$$.getWidth, $DvtTimelineDefaults$$.$setWidth$, $DvtTimelineRenderer$$), $DvtTimelineSeries$$.$addProp$($dvt$$15$$.$Animator$.$TYPE_NUMBER$, $DvtTimelineDefaults$$, $DvtTimelineDefaults$$.getHeight, $DvtTimelineDefaults$$.$setHeight$, $DvtTimelineAutomation$$)) : ($DvtTimelineDefaults$$.$setTranslateX$($DvtTimelineKeyboardHandler$$), 
      $DvtTimelineDefaults$$.$setTranslateY$($DvtTimelineSeriesParser$$), $DvtTimelineDefaults$$.$setX$($DvtTimelineParser$$), $DvtTimelineDefaults$$.$setY$($DvtTimelineStyleUtils$$), $DvtTimelineDefaults$$.$setWidth$($DvtTimelineRenderer$$), $DvtTimelineDefaults$$.$setHeight$($DvtTimelineAutomation$$));
    }
  };
  $dvt$$15$$.$Obj$.$createSubclass$($DvtTimelineSeriesNode$$, $dvt$$15$$.$Obj$);
  $DvtTimelineSeriesNode$$.prototype.Init = function $$DvtTimelineSeriesNode$$$$Init$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) {
    this.$_timeline$ = $dvt$$15$$;
    this.$_seriesIndex$ = $DvtTimelineSeriesParser$$;
    this.$_series$ = $dvt$$15$$.$_series$[$DvtTimelineSeriesParser$$];
    this.$_id$ = $DvtTimelineSeriesNode$$.id;
    this.$_startTime$ = parseInt($DvtTimelineSeriesNode$$.startTime);
    $DvtTimelineSeriesNode$$.endTime && (this.$_endTime$ = parseInt($DvtTimelineSeriesNode$$.endTime));
    this.$_title$ = $DvtTimelineSeriesNode$$.title;
    this.$_desc$ = $DvtTimelineSeriesNode$$.$desc$;
    this.$_thumbnail$ = $DvtTimelineSeriesNode$$.$thumbnail$;
    this.$_style$ = $DvtTimelineSeriesNode$$.style;
    this.$_data$ = $DvtTimelineSeriesNode$$.data;
    this.$_action$ = $DvtTimelineSeriesNode$$.action;
    this.$_durationFillColor$ = $DvtTimelineSeriesNode$$.$durationFillColor$;
    this.$_durationSize$ = 0;
    this.$_spbs$ = $DvtTimelineSeriesNode$$.$spbs$;
  };
  $DvtTimelineSeriesNode$$.prototype.getId = function $$DvtTimelineSeriesNode$$$$getId$() {
    return this.$_id$;
  };
  $DvtTimelineSeriesNode$$.prototype.$getSeries$ = function $$DvtTimelineSeriesNode$$$$$getSeries$$() {
    return this.$_series$;
  };
  $DvtTimelineSeriesNode$$.prototype.$getSeriesIndex$ = function $$DvtTimelineSeriesNode$$$$$getSeriesIndex$$() {
    return this.$_seriesIndex$;
  };
  $DvtTimelineSeriesNode$$.prototype.$getStartTime$ = function $$DvtTimelineSeriesNode$$$$$getStartTime$$() {
    return this.$_startTime$;
  };
  $DvtTimelineSeriesNode$$.prototype.$setStartTime$ = function $$DvtTimelineSeriesNode$$$$$setStartTime$$($dvt$$15$$) {
    this.$_startTime$ = $dvt$$15$$;
  };
  $DvtTimelineSeriesNode$$.prototype.$getEndTime$ = function $$DvtTimelineSeriesNode$$$$$getEndTime$$() {
    return this.$_endTime$;
  };
  $DvtTimelineSeriesNode$$.prototype.$setEndTime$ = function $$DvtTimelineSeriesNode$$$$$setEndTime$$($dvt$$15$$) {
    this.$_endTime$ = $dvt$$15$$;
  };
  $DvtTimelineSeriesNode$$.prototype.$getTitle$ = function $$DvtTimelineSeriesNode$$$$$getTitle$$() {
    return this.$_title$;
  };
  $DvtTimelineSeriesNode$$.prototype.$getStyle$ = function $$DvtTimelineSeriesNode$$$$$getStyle$$() {
    return this.$_style$;
  };
  $DvtTimelineSeriesNode$$.prototype.$setStyle$ = function $$DvtTimelineSeriesNode$$$$$setStyle$$($dvt$$15$$) {
    this.$_style$ = $dvt$$15$$;
  };
  $DvtTimelineSeriesNode$$.prototype.getData = function $$DvtTimelineSeriesNode$$$$getData$() {
    return this.$_data$;
  };
  $DvtTimelineSeriesNode$$.prototype.$setBubble$ = function $$DvtTimelineSeriesNode$$$$$setBubble$$($dvt$$15$$) {
    this.$_displayable$ = $dvt$$15$$;
  };
  $DvtTimelineSeriesNode$$.prototype.$setFeeler$ = function $$DvtTimelineSeriesNode$$$$$setFeeler$$($dvt$$15$$) {
    this.$_feeler$ = $dvt$$15$$;
  };
  $DvtTimelineSeriesNode$$.prototype.$setDurationBar$ = function $$DvtTimelineSeriesNode$$$$$setDurationBar$$($dvt$$15$$) {
    this.$_durationBar$ = $dvt$$15$$;
  };
  $DvtTimelineSeriesNode$$.prototype.$setLoc$ = function $$DvtTimelineSeriesNode$$$$$setLoc$$($dvt$$15$$) {
    this.$_loc$ = $dvt$$15$$;
  };
  $DvtTimelineSeriesNode$$.prototype.$setSpacing$ = function $$DvtTimelineSeriesNode$$$$$setSpacing$$($dvt$$15$$) {
    this.$_spacing$ = $dvt$$15$$;
  };
  $DvtTimelineSeriesNode$$.prototype.$setDurationLevel$ = function $$DvtTimelineSeriesNode$$$$$setDurationLevel$$($dvt$$15$$) {
    this.$_durationLevel$ = $dvt$$15$$;
  };
  $DvtTimelineSeriesNode$$.prototype.$setDurationSize$ = function $$DvtTimelineSeriesNode$$$$$setDurationSize$$($dvt$$15$$) {
    this.$_durationSize$ = $dvt$$15$$;
  };
  $DvtTimelineSeriesNode$$.prototype.$setDurationFillColor$ = function $$DvtTimelineSeriesNode$$$$$setDurationFillColor$$($dvt$$15$$) {
    this.$_durationFillColor$ = $dvt$$15$$;
  };
  $DvtTimelineSeriesNode$$.prototype.$getLabel$ = function $$DvtTimelineSeriesNode$$$$$getLabel$$() {
    return null != this.$getEndTime$() ? "Start Time: " + (new Date(this.$getStartTime$())).toLocaleString() + "; End Time: " + (new Date(this.$getEndTime$())).toLocaleString() + "; Title: " + this.$getTitle$() + "; Description: " + this.$_desc$ : "Time: " + (new Date(this.$getStartTime$())).toLocaleString() + "; Title: " + this.$getTitle$() + "; Description: " + this.$_desc$;
  };
  $DvtTimelineSeriesNode$$.prototype.getWidth = function $$DvtTimelineSeriesNode$$$$getWidth$() {
    return this.$_w$;
  };
  $DvtTimelineSeriesNode$$.prototype.$setWidth$ = function $$DvtTimelineSeriesNode$$$$$setWidth$$($dvt$$15$$) {
    this.$_w$ = $dvt$$15$$;
  };
  $DvtTimelineSeriesNode$$.prototype.getHeight = function $$DvtTimelineSeriesNode$$$$getHeight$() {
    return this.$_h$;
  };
  $DvtTimelineSeriesNode$$.prototype.$setHeight$ = function $$DvtTimelineSeriesNode$$$$$setHeight$$($dvt$$15$$) {
    this.$_h$ = $dvt$$15$$;
  };
  $DvtTimelineSeriesNode$$.prototype.$getAction$ = function $$DvtTimelineSeriesNode$$$$$getAction$$() {
    return this.$_action$;
  };
  $DvtTimelineSeriesNode$$.prototype.$getNextNavigable$ = function $$DvtTimelineSeriesNode$$$$$getNextNavigable$$($DvtTimelineSeriesParser$$) {
    var $DvtTimelineSeriesNode$$ = this.$_timeline$.$EventManager$.$KeyboardHandler$;
    if ($DvtTimelineSeriesParser$$.type == $dvt$$15$$.MouseEvent.$CLICK$ || $DvtTimelineSeriesNode$$.$isMultiSelectEvent$($DvtTimelineSeriesParser$$)) {
      return this;
    }
    if ($DvtTimelineSeriesNode$$.$isNavigationEvent$($DvtTimelineSeriesParser$$)) {
      for (var $DvtTimelineSeriesNode$$ = [], $DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < this.$_timeline$.$_series$.length;$DvtTimelineSeriesItem$$++) {
        $DvtTimelineSeriesNode$$.push(this.$_timeline$.$_series$[$DvtTimelineSeriesItem$$].$_items$);
      }
      return $DvtTimelineKeyboardHandler$$.$getNextNavigable$(this, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$);
    }
    return null;
  };
  $DvtTimelineSeriesNode$$.prototype.$getTargetElem$ = function $$DvtTimelineSeriesNode$$$$$getTargetElem$$() {
    return this.$_displayable$.$getElem$();
  };
  $DvtTimelineSeriesNode$$.prototype.$getKeyboardBoundingBox$ = function $$DvtTimelineSeriesNode$$$$$getKeyboardBoundingBox$$($dvt$$15$$) {
    return this.$_displayable$.$getDimensions$($dvt$$15$$);
  };
  $DvtTimelineSeriesNode$$.prototype.$showKeyboardFocusEffect$ = function $$DvtTimelineSeriesNode$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    this.$showHoverEffect$();
    this.$_timeline$.$updateScrollForItemNavigation$(this);
  };
  $DvtTimelineSeriesNode$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtTimelineSeriesNode$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    this.$hideHoverEffect$();
  };
  $DvtTimelineSeriesNode$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtTimelineSeriesNode$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtTimelineSeriesNode$$.prototype.$getDisplayables$ = function $$DvtTimelineSeriesNode$$$$$getDisplayables$$() {
    return [this.$_displayable$];
  };
  $DvtTimelineSeriesNode$$.prototype.$getAriaLabel$ = function $$DvtTimelineSeriesNode$$$$$getAriaLabel$$() {
    var $DvtTimelineSeriesParser$$ = [];
    this.$isSelectable$() && $DvtTimelineSeriesParser$$.push($dvt$$15$$.$Bundle$.$getTranslatedString$($dvt$$15$$.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
    return $dvt$$15$$.$Displayable$.$generateAriaLabel$(this.$getLabel$(), $DvtTimelineSeriesParser$$);
  };
  $DvtTimelineSeriesNode$$.prototype.$setSelectable$ = function $$DvtTimelineSeriesNode$$$$$setSelectable$$($dvt$$15$$) {
    this.$_isSelectable$ = $dvt$$15$$;
  };
  $DvtTimelineSeriesNode$$.prototype.$isSelectable$ = function $$DvtTimelineSeriesNode$$$$$isSelectable$$() {
    return this.$_isSelectable$;
  };
  $DvtTimelineSeriesNode$$.prototype.$isSelected$ = function $$DvtTimelineSeriesNode$$$$$isSelected$$() {
    return this.$_isSelected$;
  };
  $DvtTimelineSeriesNode$$.prototype.$setSelected$ = function $$DvtTimelineSeriesNode$$$$$setSelected$$($dvt$$15$$) {
    this.$_isSelected$ = $dvt$$15$$;
    this.$_displayable$.$setSelected$($dvt$$15$$);
    this.$_updateAriaLabel$();
    this.$_timeline$.$_hasOverview$ && this.$_timeline$.$_overview$ && ($dvt$$15$$ ? this.$_timeline$.$_overview$.$selSelectItem$(this.getId()) : this.$_timeline$.$_overview$.$selUnselectItem$(this.getId()));
  };
  $DvtTimelineSeriesNode$$.prototype.$showHoverEffect$ = function $$DvtTimelineSeriesNode$$$$$showHoverEffect$$($dvt$$15$$) {
    this.$_displayable$.$showHoverEffect$(this.$_timeline$.$EventManager$.$getFocus$() == this);
    !$dvt$$15$$ && this.$_timeline$.$_hasOverview$ && this.$_timeline$.$_overview$.$highlightItem$(this.getId());
    if (this.$_timeline$.$_isVertical$ || this.$_series$.$_isRandomItemLayout$) {
      this.$_index$ || (this.$_index$ = this.$_series$.$_blocks$[0].$getChildIndex$(this.$_displayable$)), this.$_series$.$_blocks$[0].$addChild$(this.$_displayable$);
    }
  };
  $DvtTimelineSeriesNode$$.prototype.$hideHoverEffect$ = function $$DvtTimelineSeriesNode$$$$$hideHoverEffect$$($dvt$$15$$) {
    this.$_displayable$.$hideHoverEffect$(this.$_timeline$.$EventManager$.$getFocus$() == this);
    !$dvt$$15$$ && this.$_timeline$.$_hasOverview$ && this.$_timeline$.$_overview$.$unhighlightItem$(this.getId());
    (this.$_timeline$.$_isVertical$ || this.$_series$.$_isRandomItemLayout$) && this.$_index$ && !this.$_isSelected$ && this.$_series$.$_blocks$[0].$addChildAt$(this.$_displayable$, this.$_index$);
  };
  $DvtTimelineSeriesNode$$.prototype.$getShowPopupBehaviors$ = function $$DvtTimelineSeriesNode$$$$$getShowPopupBehaviors$$() {
    if (!this.$_showPopupBehaviors$ && (this.$_showPopupBehaviors$ = [], this.$_spbs$)) {
      for (var $DvtTimelineSeriesParser$$ = this.$_spbs$, $DvtTimelineSeriesNode$$ = 0;$DvtTimelineSeriesNode$$ < $DvtTimelineSeriesParser$$.length;$DvtTimelineSeriesNode$$++) {
        this.$_showPopupBehaviors$.push(new $dvt$$15$$.$ShowPopupBehavior$($DvtTimelineSeriesParser$$[$DvtTimelineSeriesNode$$].popupId, $DvtTimelineSeriesParser$$[$DvtTimelineSeriesNode$$].triggerType, $DvtTimelineSeriesParser$$[$DvtTimelineSeriesNode$$].alignId, $DvtTimelineSeriesParser$$[$DvtTimelineSeriesNode$$].align));
      }
    }
    return this.$_showPopupBehaviors$;
  };
  $DvtTimelineSeriesNode$$.prototype.$_updateAriaLabel$ = function $$DvtTimelineSeriesNode$$$$$_updateAriaLabel$$() {
    $dvt$$15$$.$Agent$.$deferAriaCreation$() || this.$_displayable$.$setAriaProperty$("label", this.$getAriaLabel$());
  };
  $dvt$$15$$.$Obj$.$createSubclass$($DvtTimelineSeriesParser$$, $dvt$$15$$.$Obj$);
  $DvtTimelineSeriesParser$$.prototype.parse = function $$DvtTimelineSeriesParser$$$$parse$($dvt$$15$$, $DvtTimelineSeriesParser$$) {
    var $DvtTimelineSeriesNode$$ = this.$buildData$($dvt$$15$$), $DvtTimelineSeriesItem$$ = {};
    $DvtTimelineSeriesItem$$.start = (new Date($dvt$$15$$.start)).getTime();
    $DvtTimelineSeriesItem$$.end = (new Date($dvt$$15$$.end)).getTime();
    $DvtTimelineSeriesItem$$.$inlineStyle$ = $dvt$$15$$.style;
    $DvtTimelineSeriesItem$$.scale = $dvt$$15$$.scale;
    $DvtTimelineSeriesItem$$.$timeAxis$ = $dvt$$15$$.timeAxis;
    $DvtTimelineSeriesItem$$.label = $dvt$$15$$.label;
    $DvtTimelineSeriesItem$$.$emptyText$ = $dvt$$15$$.emptyText;
    $DvtTimelineSeriesItem$$.$isIRAnimationEnabled$ = "auto" == $dvt$$15$$.animationOnDisplay;
    $DvtTimelineSeriesItem$$.$isDCAnimationEnabled$ = "auto" == $dvt$$15$$.animationOnDataChange;
    $DvtTimelineSeriesItem$$.items = this.$_parseDataNode$($dvt$$15$$.timeline, $dvt$$15$$.index, $DvtTimelineSeriesNode$$.data, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$.start, $DvtTimelineSeriesItem$$.end);
    $DvtTimelineSeriesItem$$.$rtl$ = "false";
    $DvtTimelineSeriesItem$$.$isRandomItemLayout$ = $dvt$$15$$._isRandomItemLayout;
    $DvtTimelineSeriesItem$$.$customTimeScales$ = $dvt$$15$$._cts;
    $DvtTimelineSeriesItem$$.$customFormatScales$ = $dvt$$15$$._cfs;
    $DvtTimelineSeriesItem$$.$isTopToBottom$ = null == $dvt$$15$$.itemLayout || "auto" == $dvt$$15$$.itemLayout ? $dvt$$15$$.inverted : "topToBottom" == $dvt$$15$$.itemLayout;
    return $DvtTimelineSeriesItem$$;
  };
  $DvtTimelineSeriesParser$$.prototype.$buildData$ = function $$DvtTimelineSeriesParser$$$$$buildData$$($dvt$$15$$) {
    var $DvtTimelineSeriesParser$$ = {}, $DvtTimelineSeriesNode$$ = [];
    if ($dvt$$15$$ = $dvt$$15$$.items) {
      for (var $DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $dvt$$15$$.length;$DvtTimelineSeriesItem$$++) {
        $DvtTimelineSeriesNode$$.push($dvt$$15$$[$DvtTimelineSeriesItem$$]);
      }
    }
    $DvtTimelineSeriesParser$$.data = $DvtTimelineSeriesNode$$;
    return $DvtTimelineSeriesParser$$;
  };
  $DvtTimelineSeriesParser$$.prototype.$_parseDataNode$ = function $$DvtTimelineSeriesParser$$$$$_parseDataNode$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$, $DvtTimelineParser$$, $DvtTimelineDefaults$$, $DvtTimelineAutomation$$) {
    var $DvtTimelineEventManager$$ = [], $DvtTimeUtils$$ = $DvtTimelineSeriesParser$$.$_series$[$DvtTimelineSeriesItem$$];
    if ($DvtTimelineSeries$$) {
      for (var $DvtTimelineKeyboardHandler$$ = 0;$DvtTimelineKeyboardHandler$$ < $DvtTimelineSeries$$.length;$DvtTimelineKeyboardHandler$$++) {
        var $DvtTimelineStyleUtils$$ = this.$ParseNodeAttributes$($DvtTimelineSeries$$[$DvtTimelineKeyboardHandler$$], $DvtTimelineDefaults$$, $DvtTimelineAutomation$$);
        if ($DvtTimelineStyleUtils$$) {
          if ($DvtTimeUtils$$.$_allowUpdates$) {
            var $DvtTimelineRenderer$$ = this.$_findExistingItem$($DvtTimelineStyleUtils$$, $DvtTimelineParser$$);
            if ($DvtTimelineRenderer$$) {
              var $DvtTimelineSeriesItemRenderer$$ = $dvt$$15$$.$ArrayUtils$.$getIndex$($DvtTimelineParser$$, $DvtTimelineRenderer$$);
              $DvtTimelineParser$$.splice($DvtTimelineSeriesItemRenderer$$, 1);
              $DvtTimelineRenderer$$.$setSpacing$(null);
              $DvtTimelineRenderer$$.$setDurationLevel$(null);
              $DvtTimelineRenderer$$.$setLoc$(null);
              $DvtTimelineRenderer$$.$setSelected$(!1);
              $DvtTimelineRenderer$$.$setStartTime$($DvtTimelineStyleUtils$$.startTime);
              $DvtTimelineRenderer$$.$setEndTime$($DvtTimelineStyleUtils$$.endTime);
              $DvtTimelineRenderer$$.$setStyle$($DvtTimelineStyleUtils$$.style);
            } else {
              $DvtTimelineRenderer$$ = new $DvtTimelineSeriesNode$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$, $DvtTimelineStyleUtils$$), $DvtTimelineRenderer$$.$setSelectable$(!0);
            }
          } else {
            $DvtTimelineRenderer$$ = new $DvtTimelineSeriesNode$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$, $DvtTimelineStyleUtils$$), $DvtTimelineRenderer$$.$setSelectable$(!0);
          }
          for (var $DvtTimelineStyleUtils$$ = $DvtTimelineRenderer$$.$getStartTime$(), $DvtTimelineSeriesItemRenderer$$ = !0, $DvtTimelineSeriesRenderer$$ = 0;$DvtTimelineSeriesRenderer$$ < $DvtTimelineEventManager$$.length;$DvtTimelineSeriesRenderer$$++) {
            if ($DvtTimelineStyleUtils$$ < $DvtTimelineEventManager$$[$DvtTimelineSeriesRenderer$$].$getStartTime$()) {
              $DvtTimelineEventManager$$.splice($DvtTimelineSeriesRenderer$$, 0, $DvtTimelineRenderer$$);
              $DvtTimelineSeriesItemRenderer$$ = !1;
              break;
            }
          }
          $DvtTimelineSeriesItemRenderer$$ && $DvtTimelineEventManager$$.push($DvtTimelineRenderer$$);
        }
      }
    }
    return $DvtTimelineEventManager$$;
  };
  $DvtTimelineSeriesParser$$.prototype.$_findExistingItem$ = function $$DvtTimelineSeriesParser$$$$$_findExistingItem$$($dvt$$15$$, $DvtTimelineSeriesParser$$) {
    if ($DvtTimelineSeriesParser$$) {
      for (var $DvtTimelineSeriesNode$$ = 0;$DvtTimelineSeriesNode$$ < $DvtTimelineSeriesParser$$.length;$DvtTimelineSeriesNode$$++) {
        var $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesParser$$[$DvtTimelineSeriesNode$$];
        if ($dvt$$15$$.id == $DvtTimelineSeriesItem$$.getId() && $dvt$$15$$.title == $DvtTimelineSeriesItem$$.$getTitle$() && $dvt$$15$$.$desc$ == $DvtTimelineSeriesItem$$.$_desc$ && $dvt$$15$$.$thumbnail$ == $DvtTimelineSeriesItem$$.$_thumbnail$) {
          return $DvtTimelineSeriesItem$$;
        }
      }
    }
  };
  $DvtTimelineSeriesParser$$.prototype.getDate = function $$DvtTimelineSeriesParser$$$$getDate$($dvt$$15$$) {
    return null == $dvt$$15$$ ? null : $dvt$$15$$.getTime ? $dvt$$15$$.getTime() : isNaN($dvt$$15$$) ? (new Date($dvt$$15$$)).getTime() + 0 : $dvt$$15$$;
  };
  $DvtTimelineSeriesParser$$.prototype.$ParseNodeAttributes$ = function $$DvtTimelineSeriesParser$$$$$ParseNodeAttributes$$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) {
    var $DvtTimelineSeriesItem$$ = {};
    $DvtTimelineSeriesItem$$.id = $dvt$$15$$.id;
    $DvtTimelineSeriesItem$$.$rowKey$ = $DvtTimelineSeriesItem$$.id;
    $DvtTimelineSeriesItem$$.startTime = this.getDate($dvt$$15$$.start);
    $DvtTimelineSeriesItem$$.endTime = this.getDate($dvt$$15$$.end);
    if (($DvtTimelineSeriesItem$$.endTime ? $DvtTimelineSeriesItem$$.endTime : $DvtTimelineSeriesItem$$.startTime) < $DvtTimelineSeriesParser$$ || $DvtTimelineSeriesItem$$.startTime > $DvtTimelineSeriesNode$$) {
      return null;
    }
    $DvtTimelineSeriesItem$$.title = $dvt$$15$$.title;
    $DvtTimelineSeriesItem$$.$desc$ = $dvt$$15$$.description;
    $DvtTimelineSeriesItem$$.$thumbnail$ = $dvt$$15$$.thumbnail;
    $DvtTimelineSeriesItem$$.data = $dvt$$15$$;
    $DvtTimelineSeriesItem$$.style = $dvt$$15$$.style;
    $DvtTimelineSeriesItem$$.action = $dvt$$15$$.action;
    $DvtTimelineSeriesItem$$.$durationFillColor$ = $dvt$$15$$.durationFillColor;
    $DvtTimelineSeriesItem$$.$spbs$ = $dvt$$15$$.showPopupBehaviors;
    return $DvtTimelineSeriesItem$$;
  };
  var $DvtTimelineSeriesRenderer$$ = {};
  $dvt$$15$$.$Obj$.$createSubclass$($DvtTimelineSeriesRenderer$$, $dvt$$15$$.$Obj$);
  $DvtTimelineSeriesRenderer$$.$renderSeries$ = function $$DvtTimelineSeriesRenderer$$$$renderSeries$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$) {
    $DvtTimelineSeriesRenderer$$.$_renderBackground$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$);
    $DvtTimelineSeriesRenderer$$.$_renderScrollableCanvas$($DvtTimelineSeriesParser$$);
    $DvtTimelineSeriesRenderer$$.$_renderReferenceObjects$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesParser$$.$_canvas$);
    $DvtTimelineSeriesRenderer$$.$_renderSeriesTicks$($DvtTimelineSeriesParser$$);
    if (null != $DvtTimelineSeriesParser$$.$_items$) {
      if (0 == $DvtTimelineSeriesParser$$.$_blocks$.length) {
        $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesParser$$.$getCtx$();
        $DvtTimelineSeriesNode$$ = new $dvt$$15$$.$Container$($DvtTimelineSeriesItem$$, "itemBlock_" + $DvtTimelineSeriesParser$$.$_fetchStartPos$ + "_" + $DvtTimelineSeriesParser$$.$_fetchEndPos$);
        $DvtTimelineSeriesNode$$.$startPos$ = $DvtTimelineSeriesParser$$.$_fetchStartPos$;
        $DvtTimelineSeriesNode$$.$endPos$ = $DvtTimelineSeriesParser$$.$_fetchEndPos$;
        var $DvtTimelineSeries$$ = new $dvt$$15$$.$Container$($DvtTimelineSeriesItem$$, "feelers");
        $DvtTimelineSeriesNode$$.$addChild$($DvtTimelineSeries$$);
        $DvtTimelineSeriesNode$$.$feelers$ = $DvtTimelineSeries$$;
        $DvtTimelineSeriesItem$$ = new $dvt$$15$$.$Container$($DvtTimelineSeriesItem$$, "durations");
        $DvtTimelineSeriesNode$$.$addChild$($DvtTimelineSeriesItem$$);
        $DvtTimelineSeriesNode$$.$durations$ = $DvtTimelineSeriesItem$$;
        $DvtTimelineSeriesParser$$.$_canvas$.$addChild$($DvtTimelineSeriesNode$$);
        $DvtTimelineSeriesParser$$.$_blocks$.push($DvtTimelineSeriesNode$$);
      } else {
        $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$_blocks$[0];
      }
      $DvtTimelineSeriesParser$$.$prepareDurations$($DvtTimelineSeriesParser$$.$_items$);
      $DvtTimelineSeriesParser$$.$prepareItems$($DvtTimelineSeriesParser$$.$_items$);
      $DvtTimelineSeriesParser$$.$_isInitialRender$ ? ($DvtTimelineSeriesParser$$.$_frAnimationElems$ = $DvtTimelineSeriesParser$$.$_isIRAnimationEnabled$ ? [] : null, $DvtTimelineSeriesParser$$.$_mvAnimator$ = null, $DvtTimelineSeriesParser$$.$_rmAnimationElems$ = null) : $DvtTimelineSeriesParser$$.$_allowUpdates$ && $DvtTimelineSeriesParser$$.$_isDCAnimationEnabled$ ? ($DvtTimelineSeriesParser$$.$_frAnimationElems$ = [], $DvtTimelineSeriesParser$$.$_mvAnimator$ = new $dvt$$15$$.$Animator$($DvtTimelineSeriesParser$$.$getCtx$(), 
      $DvtTimelineStyleUtils$$.$getAnimationDuration$($DvtTimelineSeriesParser$$.$Options$), 0, $dvt$$15$$.$Easing$.$cubicInOut$), $DvtTimelineSeriesParser$$.$_rmAnimationElems$ = []) : ($DvtTimelineSeriesParser$$.$_frAnimationElems$ = null, $DvtTimelineSeriesParser$$.$_mvAnimator$ = null, $DvtTimelineSeriesParser$$.$_rmAnimationElems$ = null);
      $DvtTimelineSeriesParser$$.$_hasMvAnimations$ = !1;
      $DvtTimelineSeriesItem$$ = Math.max(0, $DvtTimelineSeriesParser$$.$_maxOverflowValue$ - $DvtTimelineSeriesParser$$.$_size$);
      $DvtTimelineSeriesParser$$.$_overflowOffset$ = $DvtTimelineSeriesItem$$;
      $DvtTimelineSeriesRenderer$$.$_adjustBackground$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$);
      $DvtTimelineSeriesParser$$.$_oldItems$ && $DvtTimelineSeriesRenderer$$.$_removeItems$($DvtTimelineSeriesParser$$.$_oldItems$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesParser$$.$_rmAnimationElems$);
      $DvtTimelineSeriesParser$$.$_oldItems$ = null;
      $DvtTimelineSeriesParser$$.$isVertical$() && $DvtTimelineSeriesNode$$.$feelers$.$removeChildren$();
      $DvtTimelineSeriesRenderer$$.$_renderItems$($DvtTimelineSeriesParser$$.$_items$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesParser$$.$_fetchStartPos$, $DvtTimelineSeriesParser$$.$_fetchEndPos$, $DvtTimelineSeriesItem$$, $DvtTimelineSeriesParser$$.$_frAnimationElems$, $DvtTimelineSeriesParser$$.$_mvAnimator$);
      $DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$($DvtTimelineSeriesParser$$);
      $DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$($DvtTimelineSeriesParser$$);
    }
  };
  $DvtTimelineSeriesRenderer$$.$updateSeriesForZoom$ = function $$DvtTimelineSeriesRenderer$$$$updateSeriesForZoom$$($dvt$$15$$) {
    $DvtTimelineSeriesRenderer$$.$_updateItemsForZoom$($dvt$$15$$.$_items$, $dvt$$15$$);
    $DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$($dvt$$15$$);
    $DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$($dvt$$15$$);
  };
  $DvtTimelineSeriesRenderer$$.$_renderBackground$ = function $$DvtTimelineSeriesRenderer$$$$_renderBackground$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$) {
    if ($DvtTimelineSeriesParser$$.$_background$) {
      var $DvtTimelineSeries$$ = !1;
      $DvtTimelineSeriesParser$$.$_background$.$setWidth$($DvtTimelineSeriesNode$$);
      $DvtTimelineSeriesParser$$.$_background$.$setHeight$($DvtTimelineSeriesItem$$);
    } else {
      $DvtTimelineSeries$$ = !0, $DvtTimelineSeriesParser$$.$_background$ = new $dvt$$15$$.Rect($DvtTimelineSeriesParser$$.$getCtx$(), 0, 0, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, "bg");
    }
    $DvtTimelineSeriesParser$$.$_background$.$setCSSStyle$($DvtTimelineSeriesParser$$.$_style$);
    $DvtTimelineSeriesParser$$.$_background$.$setPixelHinting$();
    $DvtTimelineSeriesParser$$.$_background$.setCursor("move");
    $DvtTimelineSeries$$ && $DvtTimelineSeriesParser$$.$addChild$($DvtTimelineSeriesParser$$.$_background$);
  };
  $DvtTimelineSeriesRenderer$$.$_adjustBackground$ = function $$DvtTimelineSeriesRenderer$$$$_adjustBackground$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) {
    var $DvtTimelineSeriesItem$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineSeriesParser$$.$getCtx$());
    0 < $DvtTimelineSeriesNode$$ && ($DvtTimelineSeriesParser$$.$isVertical$() ? $DvtTimelineSeriesParser$$.$_background$.$setWidth$($DvtTimelineSeriesParser$$.$_maxOverflowValue$) : $DvtTimelineSeriesParser$$.$_background$.$setHeight$($DvtTimelineSeriesParser$$.$_maxOverflowValue$));
    if ($DvtTimelineSeriesParser$$.$isVertical$()) {
      if (!$DvtTimelineSeriesParser$$.$_isInverted$ && !$DvtTimelineSeriesItem$$ || $DvtTimelineSeriesParser$$.$_isInverted$ && $DvtTimelineSeriesItem$$) {
        $DvtTimelineSeriesParser$$.$_background$.$setTranslateX$(-$DvtTimelineSeriesNode$$), $DvtTimelineSeriesParser$$.$setHScrollPos$($DvtTimelineSeriesNode$$);
      }
    } else {
      $DvtTimelineSeriesParser$$.$_isInverted$ || ($DvtTimelineSeriesParser$$.$_background$.$setTranslateY$(-$DvtTimelineSeriesNode$$), $DvtTimelineSeriesParser$$.$setVScrollPos$($DvtTimelineSeriesNode$$));
    }
  };
  $DvtTimelineSeriesRenderer$$.$_renderScrollableCanvas$ = function $$DvtTimelineSeriesRenderer$$$$_renderScrollableCanvas$$($DvtTimelineSeriesParser$$) {
    $DvtTimelineSeriesParser$$.$_canvas$ ? ($DvtTimelineSeriesParser$$.$_canvasOffsetX$ = $DvtTimelineSeriesParser$$.$_canvas$.$getTranslateX$(), $DvtTimelineSeriesParser$$.$_canvasOffsetY$ = $DvtTimelineSeriesParser$$.$_canvas$.$getTranslateY$(), $DvtTimelineSeriesParser$$.$_canvas$.$setTranslateX$(0), $DvtTimelineSeriesParser$$.$_canvas$.$setTranslateY$(0)) : ($DvtTimelineSeriesParser$$.$_canvas$ = new $dvt$$15$$.$Container$($DvtTimelineSeriesParser$$.$getCtx$(), "canvas"), $DvtTimelineSeriesParser$$.$addChild$($DvtTimelineSeriesParser$$.$_canvas$));
  };
  $DvtTimelineSeriesRenderer$$.$_renderItems$ = function $$DvtTimelineSeriesRenderer$$$$_renderItems$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$, $DvtTimelineParser$$, $DvtTimelineDefaults$$, $DvtTimelineAutomation$$, $DvtTimelineEventManager$$) {
    for (var $DvtTimeUtils$$ = 0;$DvtTimeUtils$$ < $DvtTimelineSeriesParser$$.length;$DvtTimeUtils$$++) {
      var $DvtTimelineKeyboardHandler$$ = $DvtTimelineSeriesParser$$[$DvtTimeUtils$$], $DvtTimelineStyleUtils$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeriesNode$$.$_start$, $DvtTimelineSeriesNode$$.$_end$, $DvtTimelineKeyboardHandler$$.$getStartTime$(), $DvtTimelineSeriesNode$$.$_length$);
      $DvtTimelineStyleUtils$$ < $DvtTimelineSeries$$ || $DvtTimelineStyleUtils$$ > $DvtTimelineParser$$ || $DvtTimelineSeriesItemRenderer$$.$renderItem$($DvtTimelineKeyboardHandler$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineDefaults$$, $DvtTimelineAutomation$$, $DvtTimelineEventManager$$);
    }
    if ($dvt$$15$$.$TimeAxis$.$supportsTouch$()) {
      for ($DvtTimeUtils$$ = 0;$DvtTimeUtils$$ < $DvtTimelineSeriesParser$$.length - 1;$DvtTimeUtils$$++) {
        if ($DvtTimelineKeyboardHandler$$ = $DvtTimelineSeriesParser$$[$DvtTimeUtils$$], $DvtTimelineSeries$$ = $DvtTimelineKeyboardHandler$$.$_displayable$) {
          if ($DvtTimelineParser$$ = $DvtTimelineSeriesParser$$[$DvtTimeUtils$$ + 1], $DvtTimelineParser$$.$_displayable$) {
            $DvtTimelineSeries$$.$_setAriaProperty$("flowto", "_bt_" + $DvtTimelineParser$$.getId());
          } else {
            break;
          }
        }
      }
    }
    $DvtTimelineSeriesRenderer$$.$_renderDurations$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineDefaults$$, $DvtTimelineAutomation$$, $DvtTimelineEventManager$$);
  };
  $DvtTimelineSeriesRenderer$$.$_updateItemsForZoom$ = function $$DvtTimelineSeriesRenderer$$$$_updateItemsForZoom$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) {
    if (null != $DvtTimelineSeriesParser$$ && 0 != $DvtTimelineSeriesParser$$.length) {
      var $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesNode$$.$_fetchEndPos$, $DvtTimelineSeries$$ = $DvtTimelineSeriesNode$$.$_blocks$[0];
      $DvtTimelineSeries$$.$startPos$ = $DvtTimelineSeriesNode$$.$_fetchStartPos$;
      $DvtTimelineSeries$$.$endPos$ = $DvtTimelineSeriesItem$$;
      $DvtTimelineSeriesNode$$.$isVertical$() ? $DvtTimelineSeriesNode$$.$_initialSpacing$ = 20 * (0 < $DvtTimelineSeriesNode$$.$_maxDurationSize$ ? 1 : 0) + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $DvtTimelineSeriesNode$$.$_maxDurationSize$ : $DvtTimelineSeriesNode$$.$_initialSpacing$ = 20 + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $DvtTimelineSeriesNode$$.$_maxDurationSize$;
      for ($DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $DvtTimelineSeriesParser$$.length;$DvtTimelineSeriesItem$$++) {
        var $DvtTimelineSeries$$ = $DvtTimelineSeriesParser$$[$DvtTimelineSeriesItem$$], $DvtTimelineParser$$ = $DvtTimelineSeries$$.$getStartTime$(), $DvtTimelineDefaults$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeriesNode$$.$_start$, $DvtTimelineSeriesNode$$.$_end$, $DvtTimelineParser$$, $DvtTimelineSeriesNode$$.$_length$), $DvtTimelineAutomation$$ = $DvtTimelineSeries$$.$getEndTime$();
        $DvtTimelineAutomation$$ && $DvtTimelineAutomation$$ != $DvtTimelineParser$$ && ($DvtTimelineParser$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeriesNode$$.$_start$, $DvtTimelineSeriesNode$$.$_end$, $DvtTimelineAutomation$$, $DvtTimelineSeriesNode$$.$_length$) - $DvtTimelineDefaults$$, $DvtTimelineDefaults$$ += Math.min($DvtTimelineStyleUtils$$.$getDurationFeelerOffset$(), $DvtTimelineParser$$ / 2));
        $DvtTimelineSeries$$.$setLoc$($DvtTimelineDefaults$$);
        $DvtTimelineSeriesNode$$.$_isRandomItemLayout$ || $DvtTimelineSeries$$.$setSpacing$(null);
      }
      for ($DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $DvtTimelineSeriesParser$$.length;$DvtTimelineSeriesItem$$++) {
        $DvtTimelineSeries$$ = $DvtTimelineSeriesParser$$[$DvtTimelineSeriesItem$$], $DvtTimelineDefaults$$ = $DvtTimelineSeries$$.$getStartTime$(), $DvtTimelineDefaults$$ < $DvtTimelineSeriesNode$$.$_start$ || $DvtTimelineDefaults$$ > $DvtTimelineSeriesNode$$.$_end$ || $DvtTimelineSeriesItemRenderer$$.$_updateBubble$($DvtTimelineSeries$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$);
      }
      $DvtTimelineDefaults$$ = Math.max(0, $DvtTimelineSeriesNode$$.$_maxOverflowValue$ - $DvtTimelineSeriesNode$$.$_size$);
      $DvtTimelineSeriesRenderer$$.$_adjustBackground$($DvtTimelineSeriesNode$$, $DvtTimelineDefaults$$);
      for ($DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $DvtTimelineSeriesParser$$.length;$DvtTimelineSeriesItem$$++) {
        $DvtTimelineSeries$$ = $DvtTimelineSeriesParser$$[$DvtTimelineSeriesItem$$], $DvtTimelineSeriesItemRenderer$$.$_displayBubble$($DvtTimelineSeries$$, $DvtTimelineSeriesNode$$, $DvtTimelineDefaults$$, null, !1), $DvtTimelineSeriesItemRenderer$$.$_updateFeeler$($DvtTimelineSeries$$, $DvtTimelineSeriesNode$$, $DvtTimelineDefaults$$, null), $DvtTimelineSeriesItemRenderer$$.$_updateDuration$($DvtTimelineSeries$$, $DvtTimelineSeriesNode$$, $DvtTimelineDefaults$$, null);
      }
    }
  };
  $DvtTimelineSeriesRenderer$$.$_renderDurations$ = function $$DvtTimelineSeriesRenderer$$$$_renderDurations$$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$, $DvtTimelineParser$$) {
    $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesNode$$.$durations$;
    for (var $DvtTimelineDefaults$$ = $DvtTimelineSeriesParser$$.$_maxDurationSize$;0 < $DvtTimelineDefaults$$;$DvtTimelineDefaults$$--) {
      for (var $DvtTimelineAutomation$$ = 0;$DvtTimelineAutomation$$ < $dvt$$15$$.length;$DvtTimelineAutomation$$++) {
        var $DvtTimelineEventManager$$ = $dvt$$15$$[$DvtTimelineAutomation$$], $DvtTimeUtils$$ = $DvtTimelineEventManager$$.$getStartTime$(), $DvtTimelineKeyboardHandler$$ = $DvtTimelineEventManager$$.$getEndTime$();
        $DvtTimelineKeyboardHandler$$ && $DvtTimelineKeyboardHandler$$ != $DvtTimeUtils$$ && $DvtTimelineDefaults$$ == $DvtTimelineEventManager$$.$_durationLevel$ && $DvtTimelineSeriesItemRenderer$$.$renderDuration$($DvtTimelineEventManager$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$, $DvtTimelineParser$$);
      }
    }
  };
  $DvtTimelineSeriesRenderer$$.$_renderSeriesTicks$ = function $$DvtTimelineSeriesRenderer$$$$_renderSeriesTicks$$($DvtTimelineSeriesParser$$) {
    null == $DvtTimelineSeriesParser$$.$_seriesTicks$ ? ($DvtTimelineSeriesParser$$.$_seriesTicks$ = new $dvt$$15$$.$Container$($DvtTimelineSeriesParser$$.$getCtx$()), $DvtTimelineSeriesParser$$.$_canvas$.$addChild$($DvtTimelineSeriesParser$$.$_seriesTicks$)) : ($DvtTimelineSeriesParser$$.$_seriesTicks$.$removeChildren$(), $DvtTimelineSeriesParser$$.$_seriesTicksArray$ = []);
    if ($DvtTimelineSeriesParser$$.$_scale$ && $DvtTimelineSeriesParser$$.$_timeAxis$) {
      var $DvtTimelineSeriesNode$$ = new $dvt$$15$$.$CSSStyle$($DvtTimelineStyleUtils$$.$getSeriesAxisSeparatorStyle$());
      if ($DvtTimelineSeriesParser$$.$_axisStyleDefaults$) {
        var $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesParser$$.$_axisStyleDefaults$.separatorColor;
        $DvtTimelineSeriesItem$$ && $DvtTimelineSeriesNode$$.$parseInlineStyle$("color:" + $DvtTimelineSeriesItem$$ + ";");
      }
      $DvtTimelineSeriesParser$$.$_separatorStroke$ = new $dvt$$15$$.$SolidStroke$($DvtTimelineSeriesNode$$.$getStyle$($dvt$$15$$.$CSSStyle$.$COLOR$));
      $DvtTimelineSeriesParser$$.$_separatorStroke$.$setStyle$($dvt$$15$$.$Stroke$.$DASHED$, 3);
      $DvtTimelineSeriesRenderer$$.$_renderSeriesTimeAxis$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesParser$$.$_fetchStartPos$, $DvtTimelineSeriesParser$$.$_fetchEndPos$, $DvtTimelineSeriesParser$$.$_seriesTicks$);
    }
  };
  $DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$ = function $$DvtTimelineSeriesRenderer$$$$_updateSeriesTicks$$($DvtTimelineSeriesParser$$) {
    for (var $DvtTimelineSeriesNode$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineSeriesParser$$.$getCtx$()), $DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $DvtTimelineSeriesParser$$.$_seriesTicksArray$.length;$DvtTimelineSeriesItem$$++) {
      var $DvtTimelineSeries$$ = $DvtTimelineSeriesParser$$.$_seriesTicksArray$[$DvtTimelineSeriesItem$$], $DvtTimelineParser$$ = !$DvtTimelineSeriesParser$$.$isVertical$() && $DvtTimelineSeriesNode$$ ? $DvtTimelineSeriesParser$$.$_length$ - $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeriesParser$$.$_start$, $DvtTimelineSeriesParser$$.$_end$, $DvtTimelineSeries$$.time, $DvtTimelineSeriesParser$$.$_length$) : $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeriesParser$$.$_start$, $DvtTimelineSeriesParser$$.$_end$, 
      $DvtTimelineSeries$$.time, $DvtTimelineSeriesParser$$.$_length$);
      $DvtTimelineSeriesParser$$.$isVertical$() ? ($DvtTimelineSeries$$.$setX1$(0), $DvtTimelineSeries$$.$setY1$($DvtTimelineParser$$), $DvtTimelineSeries$$.$setX2$($DvtTimelineSeriesParser$$.$_maxOverflowValue$), $DvtTimelineSeries$$.$setY2$($DvtTimelineParser$$)) : ($DvtTimelineSeries$$.$setX1$($DvtTimelineParser$$), $DvtTimelineSeries$$.$setY1$(0), $DvtTimelineSeries$$.$setX2$($DvtTimelineParser$$), $DvtTimelineSeries$$.$setY2$($DvtTimelineSeriesParser$$.$_maxOverflowValue$));
    }
  };
  $DvtTimelineSeriesRenderer$$.$_renderSeriesTimeAxis$ = function $$DvtTimelineSeriesRenderer$$$$_renderSeriesTimeAxis$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$, $DvtTimelineSeries$$) {
    var $DvtTimelineParser$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineSeriesParser$$.$getCtx$()), $DvtTimelineDefaults$$, $DvtTimelineAutomation$$ = $DvtTimelineSeriesParser$$.$_start$, $DvtTimelineEventManager$$ = $DvtTimelineSeriesParser$$.$_end$;
    if ($DvtTimelineSeriesParser$$.$_customTimeScales$ && $DvtTimelineSeriesParser$$.$_customTimeScales$[$DvtTimelineSeriesParser$$.$_scale$]) {
      $DvtTimelineDefaults$$ = $DvtTimelineSeriesParser$$.$_customTimeScales$[$DvtTimelineSeriesParser$$.$_scale$].times;
    } else {
      if ($DvtTimelineSeriesParser$$.$_customFormatScales$ && $DvtTimelineSeriesParser$$.$_customFormatScales$[$DvtTimelineSeriesParser$$.$_scale$]) {
        $DvtTimelineDefaults$$ = $DvtTimelineSeriesParser$$.$_customFormatScales$[$DvtTimelineSeriesParser$$.$_scale$].times;
      } else {
        $DvtTimelineDefaults$$ = [];
        $DvtTimelineSeriesNode$$ = $dvt$$15$$.$TimeAxis$.$getPositionDate$($DvtTimelineAutomation$$, $DvtTimelineEventManager$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesParser$$.$_length$);
        var $DvtTimeUtils$$ = $DvtTimelineSeriesParser$$.$_timeAxis$.$adjustDate$($DvtTimelineSeriesNode$$);
        $DvtTimelineSeriesNode$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineAutomation$$, $DvtTimelineEventManager$$, $DvtTimeUtils$$, $DvtTimelineSeriesParser$$.$_length$);
        for ($DvtTimelineDefaults$$.push($DvtTimeUtils$$.getTime());$DvtTimelineSeriesNode$$ < $DvtTimelineSeriesItem$$;) {
          $DvtTimeUtils$$ = $DvtTimelineSeriesParser$$.$_timeAxis$.$getNextDate$($DvtTimeUtils$$.getTime()), $DvtTimelineSeriesNode$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineAutomation$$, $DvtTimelineEventManager$$, $DvtTimeUtils$$, $DvtTimelineSeriesParser$$.$_length$), $DvtTimelineDefaults$$.push($DvtTimeUtils$$.getTime());
        }
      }
    }
    for ($DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $DvtTimelineDefaults$$.length - 1;$DvtTimelineSeriesItem$$++) {
      $DvtTimeUtils$$ = $DvtTimelineDefaults$$[$DvtTimelineSeriesItem$$];
      $DvtTimelineSeriesNode$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineAutomation$$, $DvtTimelineEventManager$$, $DvtTimeUtils$$, $DvtTimelineSeriesParser$$.$_length$);
      var $DvtTimelineKeyboardHandler$$ = !$DvtTimelineSeriesParser$$.$isVertical$() && $DvtTimelineParser$$ ? $DvtTimelineSeriesParser$$.$_length$ - $DvtTimelineSeriesNode$$ : $DvtTimelineSeriesNode$$;
      if ($DvtTimelineSeriesParser$$.$isVertical$()) {
        var $DvtTimelineStyleUtils$$ = 0, $DvtTimelineRenderer$$ = $DvtTimelineKeyboardHandler$$, $DvtTimelineSeriesItemRenderer$$ = $DvtTimelineSeriesParser$$.$_maxOverflowValue$
      } else {
        $DvtTimelineStyleUtils$$ = $DvtTimelineKeyboardHandler$$, $DvtTimelineRenderer$$ = 0, $DvtTimelineSeriesItemRenderer$$ = $DvtTimelineKeyboardHandler$$, $DvtTimelineKeyboardHandler$$ = $DvtTimelineSeriesParser$$.$_maxOverflowValue$;
      }
      $DvtTimelineSeriesNode$$ = $DvtTimelineSeriesParser$$.$addTick$($DvtTimelineSeries$$, $DvtTimelineStyleUtils$$, $DvtTimelineSeriesItemRenderer$$, $DvtTimelineRenderer$$, $DvtTimelineKeyboardHandler$$, $DvtTimelineSeriesParser$$.$_separatorStroke$, "o_tick" + $DvtTimelineSeriesNode$$);
      $DvtTimelineSeriesNode$$.time = $DvtTimeUtils$$;
      $DvtTimelineSeriesParser$$.$_seriesTicksArray$.push($DvtTimelineSeriesNode$$);
    }
  };
  $DvtTimelineSeriesRenderer$$.$_renderReferenceObjects$ = function $$DvtTimelineSeriesRenderer$$$$_renderReferenceObjects$$($DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) {
    var $DvtTimelineSeriesItem$$ = $DvtTimelineSeriesParser$$.$getCtx$(), $DvtTimelineSeries$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineSeriesItem$$);
    null == $DvtTimelineSeriesParser$$.$_refObjectsContainer$ && ($DvtTimelineSeriesParser$$.$_refObjectsContainer$ = new $dvt$$15$$.$Container$($DvtTimelineSeriesItem$$), $DvtTimelineSeriesNode$$.$addChild$($DvtTimelineSeriesParser$$.$_refObjectsContainer$));
    var $DvtTimelineParser$$ = $DvtTimelineSeriesParser$$.$_referenceObjects$;
    if ($DvtTimelineParser$$) {
      for (var $DvtTimelineDefaults$$ = Math.min(1, $DvtTimelineParser$$.length), $DvtTimelineAutomation$$ = 0;$DvtTimelineAutomation$$ < $DvtTimelineDefaults$$;$DvtTimelineAutomation$$++) {
        var $DvtTimelineEventManager$$ = $DvtTimelineParser$$[$DvtTimelineAutomation$$];
        if ($DvtTimelineEventManager$$) {
          var $DvtTimeUtils$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeriesParser$$.$_start$, $DvtTimelineSeriesParser$$.$_end$, $DvtTimelineEventManager$$, $DvtTimelineSeriesParser$$.$_length$);
          if (0 == $DvtTimelineSeriesParser$$.$_renderedReferenceObjects$.length) {
            $DvtTimelineSeriesParser$$.$isVertical$() ? $DvtTimeUtils$$ = new $dvt$$15$$.$Line$($DvtTimelineSeriesItem$$, 0, $DvtTimeUtils$$, $DvtTimelineSeriesParser$$.$_maxOverflowValue$, $DvtTimeUtils$$, "zoomOrder[i]") : ($DvtTimelineSeries$$ && ($DvtTimeUtils$$ = $DvtTimelineSeriesParser$$.$_length$ - $DvtTimeUtils$$), $DvtTimeUtils$$ = new $dvt$$15$$.$Line$($DvtTimelineSeriesItem$$, $DvtTimeUtils$$, 0, $DvtTimeUtils$$, $DvtTimelineSeriesParser$$.$_maxOverflowValue$, "zoomOrder[i]"));
            var $DvtTimelineKeyboardHandler$$ = new $dvt$$15$$.$SolidStroke$($DvtTimelineStyleUtils$$.$getReferenceObjectColor$($DvtTimelineSeriesParser$$.$Options$));
            $DvtTimeUtils$$.$setStroke$($DvtTimelineKeyboardHandler$$);
            $DvtTimeUtils$$.$setPixelHinting$();
            $DvtTimeUtils$$.$date$ = $DvtTimelineEventManager$$;
            $DvtTimelineSeriesParser$$.$_refObjectsContainer$.$addChild$($DvtTimeUtils$$);
            $DvtTimelineSeriesParser$$.$_renderedReferenceObjects$[$DvtTimelineAutomation$$] = $DvtTimeUtils$$;
          }
        }
      }
    } else {
      $DvtTimelineSeriesParser$$.$_refObjectsContainer$.$removeChildren$(), $DvtTimelineSeriesParser$$.$_renderedReferenceObjects$ = [];
    }
  };
  $DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$ = function $$DvtTimelineSeriesRenderer$$$$_updateReferenceObjects$$($DvtTimelineSeriesParser$$) {
    for (var $DvtTimelineSeriesNode$$ = $dvt$$15$$.$Agent$.$isRightToLeft$($DvtTimelineSeriesParser$$.$getCtx$()), $DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $DvtTimelineSeriesParser$$.$_renderedReferenceObjects$.length;$DvtTimelineSeriesItem$$++) {
      var $DvtTimelineSeries$$ = $DvtTimelineSeriesParser$$.$_renderedReferenceObjects$[$DvtTimelineSeriesItem$$], $DvtTimelineParser$$ = $dvt$$15$$.$TimeAxis$.$getDatePosition$($DvtTimelineSeriesParser$$.$_start$, $DvtTimelineSeriesParser$$.$_end$, $DvtTimelineSeries$$.$date$, $DvtTimelineSeriesParser$$.$_length$);
      $DvtTimelineSeriesParser$$.$isVertical$() ? ($DvtTimelineSeries$$.$setX1$(0), $DvtTimelineSeries$$.$setY1$($DvtTimelineParser$$), $DvtTimelineSeries$$.$setX2$($DvtTimelineSeriesParser$$.$_maxOverflowValue$), $DvtTimelineSeries$$.$setY2$($DvtTimelineParser$$)) : ($DvtTimelineSeriesNode$$ && ($DvtTimelineParser$$ = $DvtTimelineSeriesParser$$.$_length$ - $DvtTimelineParser$$), $DvtTimelineSeries$$.$setX1$($DvtTimelineParser$$), $DvtTimelineSeries$$.$setY1$(0), $DvtTimelineSeries$$.$setX2$($DvtTimelineParser$$), 
      $DvtTimelineSeries$$.$setY2$($DvtTimelineSeriesParser$$.$_maxOverflowValue$));
    }
  };
  $DvtTimelineSeriesRenderer$$.$_removeItems$ = function $$DvtTimelineSeriesRenderer$$$$_removeItems$$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$, $DvtTimelineSeriesItem$$) {
    if ($DvtTimelineSeriesItem$$) {
      $DvtTimelineSeriesRenderer$$.$_animateItemRemoval$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesItem$$);
    } else {
      for ($DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $dvt$$15$$.length;$DvtTimelineSeriesItem$$++) {
        var $DvtTimelineSeries$$ = $dvt$$15$$[$DvtTimelineSeriesItem$$];
        $DvtTimelineSeriesNode$$.removeChild($DvtTimelineSeries$$.$_displayable$);
        $DvtTimelineSeriesParser$$.$isVertical$() || $DvtTimelineSeriesNode$$.$feelers$.removeChild($DvtTimelineSeries$$.$_feeler$);
        var $DvtTimelineParser$$ = $DvtTimelineSeries$$.$getStartTime$(), $DvtTimelineDefaults$$ = $DvtTimelineSeries$$.$getEndTime$();
        $DvtTimelineDefaults$$ && $DvtTimelineDefaults$$ != $DvtTimelineParser$$ && $DvtTimelineSeriesNode$$.$durations$.removeChild($DvtTimelineSeries$$.$_durationBar$);
      }
    }
  };
  $DvtTimelineSeriesRenderer$$.$_animateItemRemoval$ = function $$DvtTimelineSeriesRenderer$$$$_animateItemRemoval$$($dvt$$15$$, $DvtTimelineSeriesParser$$, $DvtTimelineSeriesNode$$) {
    for (var $DvtTimelineSeriesItem$$ = 0;$DvtTimelineSeriesItem$$ < $dvt$$15$$.length;$DvtTimelineSeriesItem$$++) {
      var $DvtTimelineSeries$$ = $dvt$$15$$[$DvtTimelineSeriesItem$$], $DvtTimelineParser$$ = $DvtTimelineSeries$$.$_displayable$;
      $DvtTimelineSeriesParser$$.$isVertical$() ? $DvtTimelineParser$$.$setTranslateX$($DvtTimelineParser$$.$getTranslateX$() + $DvtTimelineSeriesParser$$.$_canvasOffsetX$ + $DvtTimelineSeriesParser$$.$_overflowOffset$) : $DvtTimelineParser$$.$setTranslateY$($DvtTimelineParser$$.$getTranslateY$() + $DvtTimelineSeriesParser$$.$_canvasOffsetY$ + $DvtTimelineSeriesParser$$.$_overflowOffset$);
      $DvtTimelineSeriesNode$$.push($DvtTimelineParser$$);
      $DvtTimelineSeriesParser$$.$isVertical$() || ($DvtTimelineParser$$ = $DvtTimelineSeries$$.$_feeler$, $DvtTimelineParser$$.$setTranslateY$($DvtTimelineParser$$.$getTranslateY$() + $DvtTimelineSeriesParser$$.$_canvasOffsetY$ + $DvtTimelineSeriesParser$$.$_overflowOffset$), $DvtTimelineSeriesNode$$.push($DvtTimelineParser$$));
      var $DvtTimelineParser$$ = $DvtTimelineSeries$$.$getStartTime$(), $DvtTimelineDefaults$$ = $DvtTimelineSeries$$.$getEndTime$();
      $DvtTimelineDefaults$$ && $DvtTimelineDefaults$$ != $DvtTimelineParser$$ && ($DvtTimelineSeries$$ = $DvtTimelineSeries$$.$_durationBar$, $DvtTimelineSeriesParser$$.$isVertical$() ? $DvtTimelineSeries$$.$setTranslateX$($DvtTimelineSeries$$.$getTranslateX$() + $DvtTimelineSeriesParser$$.$_canvasOffsetX$ + $DvtTimelineSeriesParser$$.$_overflowOffset$) : $DvtTimelineSeries$$.$setTranslateY$($DvtTimelineSeries$$.$getTranslateY$() + $DvtTimelineSeriesParser$$.$_canvasOffsetY$ + $DvtTimelineSeriesParser$$.$_overflowOffset$), 
      $DvtTimelineSeriesNode$$.push($DvtTimelineSeries$$));
    }
  };
  $dvt$$15$$.$exportProperty$($dvt$$15$$, "Timeline", $dvt$$15$$.$Timeline$);
  $dvt$$15$$.$exportProperty$($dvt$$15$$.$Timeline$, "newInstance", $dvt$$15$$.$Timeline$.newInstance);
  $dvt$$15$$.$exportProperty$($dvt$$15$$.$Timeline$.prototype, "render", $dvt$$15$$.$Timeline$.prototype.$render$);
  $dvt$$15$$.$exportProperty$($dvt$$15$$.$Timeline$.prototype, "getAutomation", $dvt$$15$$.$Timeline$.prototype.$getAutomation$);
  $dvt$$15$$.$exportProperty$($dvt$$15$$.$Timeline$.prototype, "select", $dvt$$15$$.$Timeline$.prototype.select);
  $dvt$$15$$.$exportProperty$($DvtTimelineAutomation$$.prototype, "getDomElementForSubId", $DvtTimelineAutomation$$.prototype.$getDomElementForSubId$);
})(dvt);
