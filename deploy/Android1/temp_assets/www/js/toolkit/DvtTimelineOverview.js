(function($dvt$$16$$) {
  function $DvtTimelineOverviewAutomation$$($dvt$$16$$) {
    this.$_overview$ = $dvt$$16$$;
  }
  function $DvtTimelineOverviewEvent$$($dvt$$16$$) {
    this.Init($DvtTimelineOverviewEvent$$.$TYPE$);
    this.$_subtype$ = $dvt$$16$$;
  }
  function $DvtTimelineOverviewNode$$($dvt$$16$$, $DvtTimelineOverviewAutomation$$) {
    this.Init($dvt$$16$$, $DvtTimelineOverviewAutomation$$);
  }
  function $DvtTimelineOverviewParser$$($dvt$$16$$) {
    this.Init($dvt$$16$$);
  }
  $dvt$$16$$.$TimelineOverview$ = function $$dvt$$16$$$$TimelineOverview$$($dvt$$16$$, $DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$) {
    this.Init($dvt$$16$$, $DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$);
  };
  $dvt$$16$$.$Obj$.$createSubclass$($dvt$$16$$.$TimelineOverview$, $dvt$$16$$.$Overview$);
  $dvt$$16$$.$TimelineOverview$.$ENABLED_STATE$ = "_";
  $dvt$$16$$.$TimelineOverview$.$HOVER_STATE$ = "_h";
  $dvt$$16$$.$TimelineOverview$.$SELECTED_STATE$ = "_s";
  $dvt$$16$$.$TimelineOverview$.$ACTIVE_SELECTED_STATE$ = "_as";
  $dvt$$16$$.$TimelineOverview$.$BORDER_STYLE$ = "bs";
  $dvt$$16$$.$TimelineOverview$.$BORDER_COLOR$ = "bc";
  $dvt$$16$$.$TimelineOverview$.$BORDER_WIDTH$ = "bw";
  $dvt$$16$$.$TimelineOverview$.$DURATION_BORDER_STYLE$ = "dbs";
  $dvt$$16$$.$TimelineOverview$.$DURATION_BORDER_COLOR$ = "dbc";
  $dvt$$16$$.$TimelineOverview$.$DURATION_BORDER_WIDTH$ = "dbw";
  $dvt$$16$$.$TimelineOverview$.$BORDER_OFFSET$ = "bof";
  $dvt$$16$$.$TimelineOverview$.$BORDER_OPACITY$ = "bo";
  $dvt$$16$$.$TimelineOverview$.$GLOW_COLOR$ = "gc";
  $dvt$$16$$.$TimelineOverview$.$GLOW_OPACITY$ = "go";
  $dvt$$16$$.$TimelineOverview$.$FILL_COLOR$ = "fc";
  $dvt$$16$$.$TimelineOverview$.newInstance = function $$dvt$$16$$$$TimelineOverview$$newInstance$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$) {
    return new $dvt$$16$$.$TimelineOverview$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$);
  };
  $dvt$$16$$.$TimelineOverview$.prototype.Init = function $$dvt$$16$$$$TimelineOverview$$$Init$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$) {
    $dvt$$16$$.$TimelineOverview$.$superclass$.Init.call(this, $DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$);
    $DvtTimelineOverviewAutomation$$ = [$dvt$$16$$.$ColorUtils$.$getPound$($dvt$$16$$.$ColorUtils$.$getBrighter$("#aadd77", .35)), "#aadd77", $dvt$$16$$.$ColorUtils$.$getPound$($dvt$$16$$.$ColorUtils$.$getDarker$("#aadd77", .5))];
    $dvt$$16$$.$OverviewUtils$.$supportsTouch$() && ($DvtTimelineOverviewAutomation$$ = ["#aadd77"]);
    this.$_defColors$ = $DvtTimelineOverviewAutomation$$;
    this.$_markerBorderFill$ = $dvt$$16$$.$SolidFill$.$invisibleFill$();
    this.$_markerSize$ = 12;
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$render$ = function $$dvt$$16$$$$TimelineOverview$$$$render$$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$) {
    "string" === typeof $DvtTimelineOverviewAutomation$$ ? $dvt$$16$$.$TimelineOverview$.$superclass$.$render$.call(this, this.$_getConvertedOptions$($DvtTimelineOverviewAutomation$$), $DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$) : $dvt$$16$$.$TimelineOverview$.$superclass$.$render$.call(this, $DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$);
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$_getConvertedOptions$ = function $$dvt$$16$$$$TimelineOverview$$$$_getConvertedOptions$$($DvtTimelineOverviewAutomation$$) {
    var $DvtTimelineOverviewEvent$$ = {}, $DvtTimelineOverviewNode$$ = (new $dvt$$16$$.$XmlParser$(this.$getCtx$())).parse($DvtTimelineOverviewAutomation$$);
    $DvtTimelineOverviewAutomation$$ = $DvtTimelineOverviewNode$$.getAttributes();
    for (var $DvtTimelineOverviewParser$$ = 0;$DvtTimelineOverviewParser$$ < $DvtTimelineOverviewAutomation$$.length;$DvtTimelineOverviewParser$$++) {
      var $attr$$23$$ = $DvtTimelineOverviewAutomation$$[$DvtTimelineOverviewParser$$];
      $DvtTimelineOverviewEvent$$[$attr$$23$$.name] = $attr$$23$$.value;
    }
    for (var $childNodes$$25_formattedTimeRangeNodes$$ = $DvtTimelineOverviewNode$$.$getChildNodes$(), $formattedTimeRanges_markers$$15_ticks$$ = [], $markerNodes_tickNodes_timeRange$$ = $childNodes$$25_formattedTimeRangeNodes$$[0].$getChildNodes$(), $DvtTimelineOverviewParser$$ = 0;$DvtTimelineOverviewParser$$ < $markerNodes_tickNodes_timeRange$$.length;$DvtTimelineOverviewParser$$++) {
      var $marker$$19_tick$$1$$ = {};
      $DvtTimelineOverviewAutomation$$ = $markerNodes_tickNodes_timeRange$$[$DvtTimelineOverviewParser$$].getAttributes();
      for ($DvtTimelineOverviewNode$$ = 0;$DvtTimelineOverviewNode$$ < $DvtTimelineOverviewAutomation$$.length;$DvtTimelineOverviewNode$$++) {
        $attr$$23$$ = $DvtTimelineOverviewAutomation$$[$DvtTimelineOverviewNode$$], $marker$$19_tick$$1$$[$attr$$23$$.name] = $attr$$23$$.value;
      }
      $formattedTimeRanges_markers$$15_ticks$$.push($marker$$19_tick$$1$$);
    }
    $DvtTimelineOverviewEvent$$.axisTicks = $formattedTimeRanges_markers$$15_ticks$$;
    $formattedTimeRanges_markers$$15_ticks$$ = [];
    $markerNodes_tickNodes_timeRange$$ = $childNodes$$25_formattedTimeRangeNodes$$[1].$getChildNodes$();
    for ($DvtTimelineOverviewParser$$ = 0;$DvtTimelineOverviewParser$$ < $markerNodes_tickNodes_timeRange$$.length;$DvtTimelineOverviewParser$$++) {
      $marker$$19_tick$$1$$ = {};
      $DvtTimelineOverviewAutomation$$ = $markerNodes_tickNodes_timeRange$$[$DvtTimelineOverviewParser$$].getAttributes();
      for ($DvtTimelineOverviewNode$$ = 0;$DvtTimelineOverviewNode$$ < $DvtTimelineOverviewAutomation$$.length;$DvtTimelineOverviewNode$$++) {
        $attr$$23$$ = $DvtTimelineOverviewAutomation$$[$DvtTimelineOverviewNode$$], $marker$$19_tick$$1$$[$attr$$23$$.name] = $attr$$23$$.value;
      }
      $formattedTimeRanges_markers$$15_ticks$$.push($marker$$19_tick$$1$$);
    }
    $DvtTimelineOverviewEvent$$.markers = $formattedTimeRanges_markers$$15_ticks$$;
    if (2 < $childNodes$$25_formattedTimeRangeNodes$$.length) {
      $formattedTimeRanges_markers$$15_ticks$$ = [];
      $childNodes$$25_formattedTimeRangeNodes$$ = $childNodes$$25_formattedTimeRangeNodes$$[2].$getChildNodes$();
      for ($DvtTimelineOverviewParser$$ = 0;$DvtTimelineOverviewParser$$ < $childNodes$$25_formattedTimeRangeNodes$$.length;$DvtTimelineOverviewParser$$++) {
        $markerNodes_tickNodes_timeRange$$ = {};
        $DvtTimelineOverviewAutomation$$ = $childNodes$$25_formattedTimeRangeNodes$$[$DvtTimelineOverviewParser$$].getAttributes();
        for ($DvtTimelineOverviewNode$$ = 0;$DvtTimelineOverviewNode$$ < $DvtTimelineOverviewAutomation$$.length;$DvtTimelineOverviewNode$$++) {
          $attr$$23$$ = $DvtTimelineOverviewAutomation$$[$DvtTimelineOverviewNode$$], $markerNodes_tickNodes_timeRange$$[$attr$$23$$.name] = $attr$$23$$.value;
        }
        $formattedTimeRanges_markers$$15_ticks$$.push($markerNodes_tickNodes_timeRange$$);
      }
      $DvtTimelineOverviewEvent$$.formattedTimeRanges = $formattedTimeRanges_markers$$15_ticks$$;
    }
    return $DvtTimelineOverviewEvent$$;
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$getParser$ = function $$dvt$$16$$$$TimelineOverview$$$$getParser$$() {
    return new $DvtTimelineOverviewParser$$(this);
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$_applyParsedProperties$ = function $$dvt$$16$$$$TimelineOverview$$$$_applyParsedProperties$$($DvtTimelineOverviewAutomation$$) {
    $dvt$$16$$.$TimelineOverview$.$superclass$.$_applyParsedProperties$.call(this, $DvtTimelineOverviewAutomation$$);
    this.$_selectionMode$ = $DvtTimelineOverviewAutomation$$.$selectionMode$;
    this.$_markers$ = $DvtTimelineOverviewAutomation$$.$markers$;
    this.$_seriesIds$ = $DvtTimelineOverviewAutomation$$.$seriesIds$;
    this.$_defaultMarkerStyles$ = $DvtTimelineOverviewAutomation$$.$defaultMarkerStyles$;
    this.$_durationColors$ = "#267DB3 #68C182 #FAD55C #ED6647 #8561C8 #6DDBDB #FFB54D #E371B2 #47BDEF #A2BF39 #A75DBA #F7F37B".split(" ");
    $DvtTimelineOverviewAutomation$$.$labelStyle$ && (this.$_labelStyle$ = new $dvt$$16$$.$CSSStyle$($DvtTimelineOverviewAutomation$$.$labelStyle$));
    $DvtTimelineOverviewAutomation$$ = "solid" == this.$getStyle$($dvt$$16$$.$TimelineOverview$.$ENABLED_STATE$, $dvt$$16$$.$TimelineOverview$.$BORDER_STYLE$) ? parseInt(this.$getStyle$($dvt$$16$$.$TimelineOverview$.$ENABLED_STATE$, $dvt$$16$$.$TimelineOverview$.$BORDER_OFFSET$), 10) : 1;
    var $DvtTimelineOverviewEvent$$ = "solid" == this.$getStyle$($dvt$$16$$.$TimelineOverview$.$ACTIVE_SELECTED_STATE$, $dvt$$16$$.$TimelineOverview$.$BORDER_STYLE$) ? parseInt(this.$getStyle$($dvt$$16$$.$TimelineOverview$.$ACTIVE_SELECTED_STATE$, $dvt$$16$$.$TimelineOverview$.$BORDER_OFFSET$), 10) : 1, $DvtTimelineOverviewNode$$ = "solid" == this.$getStyle$($dvt$$16$$.$TimelineOverview$.$SELECTED_STATE$, $dvt$$16$$.$TimelineOverview$.$BORDER_STYLE$) ? parseInt(this.$getStyle$($dvt$$16$$.$TimelineOverview$.$SELECTED_STATE$, 
    $dvt$$16$$.$TimelineOverview$.$BORDER_OFFSET$), 10) : 1;
    this.$_markerSpacingOffset$ = this.$isItemSelectionEnabled$() ? Math.max($DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$, $DvtTimelineOverviewAutomation$$, 1) / 2 + 1 : 1;
    this.$_defOpacity$ = this.$isVertical$() ? 0 : .75;
    this.$_defAlphas$ = [this.$_defOpacity$, this.$_defOpacity$, this.$_defOpacity$];
    this.$_radialFill$ = new $dvt$$16$$.$LinearGradientFill$(250, this.$_defColors$, this.$_defAlphas$);
    this.$_linearFill$ = new $dvt$$16$$.$LinearGradientFill$(180, this.$_defColors$, this.$_defAlphas$);
    $DvtTimelineOverviewAutomation$$ = this.$isVertical$() ? 0 : 1;
    this.$_border$ = new $dvt$$16$$.$SolidStroke$("#aadd77", $DvtTimelineOverviewAutomation$$);
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$getSeriesIds$ = function $$dvt$$16$$$$TimelineOverview$$$$getSeriesIds$$() {
    return null == this.$_seriesIds$ ? null : this.$_seriesIds$.split(" ");
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$addLabel$ = function $$dvt$$16$$$$TimelineOverview$$$$addLabel$$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$, $DvtTimelineOverviewParser$$, $maxWidth$$26$$, $id$$227$$) {
    $dvt$$16$$.$TimelineOverview$.$superclass$.$addLabel$.call(this, $DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$, $DvtTimelineOverviewParser$$, $maxWidth$$26$$, $id$$227$$, this.$_labelStyle$);
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$isItemSelectionEnabled$ = function $$dvt$$16$$$$TimelineOverview$$$$isItemSelectionEnabled$$() {
    return "none" != this.$_selectionMode$;
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$getDrawableById$ = function $$dvt$$16$$$$TimelineOverview$$$$getDrawableById$$($dvt$$16$$) {
    var $DvtTimelineOverviewAutomation$$ = "_mrk_" + $dvt$$16$$;
    $dvt$$16$$ = "_drn_" + $dvt$$16$$;
    for (var $DvtTimelineOverviewEvent$$ = this.$getNumChildren$(), $DvtTimelineOverviewNode$$ = 0;$DvtTimelineOverviewNode$$ < $DvtTimelineOverviewEvent$$;$DvtTimelineOverviewNode$$++) {
      var $DvtTimelineOverviewParser$$ = this.$getChildAt$($DvtTimelineOverviewNode$$);
      if (null != $DvtTimelineOverviewParser$$ && ($DvtTimelineOverviewAutomation$$ == $DvtTimelineOverviewParser$$.getId() || $dvt$$16$$ == $DvtTimelineOverviewParser$$.getId())) {
        return $DvtTimelineOverviewParser$$;
      }
    }
    return null;
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$getItemId$ = function $$dvt$$16$$$$TimelineOverview$$$$getItemId$$($dvt$$16$$) {
    return $dvt$$16$$.getId().substr(5);
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$getStyle$ = function $$dvt$$16$$$$TimelineOverview$$$$getStyle$$($dvt$$16$$, $DvtTimelineOverviewAutomation$$) {
    return this.$_borderStyles$[$dvt$$16$$ + $DvtTimelineOverviewAutomation$$];
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$getX$ = function $$dvt$$16$$$$TimelineOverview$$$$getX$$($dvt$$16$$) {
    return null != $dvt$$16$$.$_node$ ? $dvt$$16$$.$_node$.$getX$() : $dvt$$16$$.$getMatrix$().$_tx$;
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$getY$ = function $$dvt$$16$$$$TimelineOverview$$$$getY$$($dvt$$16$$) {
    return null != $dvt$$16$$.$_node$ ? $dvt$$16$$.$_node$.$getY$() : $dvt$$16$$.$getMatrix$().$_ty$;
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$getScaleX$ = function $$dvt$$16$$$$TimelineOverview$$$$getScaleX$$($dvt$$16$$) {
    $dvt$$16$$ = $dvt$$16$$.$getScaleX$();
    null == $dvt$$16$$ && ($dvt$$16$$ = this.$isVertical$() ? (this.$Width$ - this.$getTimeAxisWidth$() - 4) / 2 : 1);
    return $dvt$$16$$;
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$getScaleY$ = function $$dvt$$16$$$$TimelineOverview$$$$getScaleY$$($dvt$$16$$) {
    $dvt$$16$$ = $dvt$$16$$.$getScaleY$();
    null == $dvt$$16$$ && ($dvt$$16$$ = 1);
    return $dvt$$16$$;
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$parseDataXML$ = function $$dvt$$16$$$$TimelineOverview$$$$parseDataXML$$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$) {
    $dvt$$16$$.$TimelineOverview$.$superclass$.$parseDataXML$.call(this, $DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$);
    if (null != this.$_markers$) {
      for (var $DvtTimelineOverviewNode$$ = this.$calculateOptimalSize$(this.$_start$, this.$_end$, $DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, this.$_markerSize$), $DvtTimelineOverviewParser$$ = [], $j$$112$$ = 0;$j$$112$$ < this.$_markers$.length;$j$$112$$++) {
        var $marker$$20$$ = this.$_markers$[$j$$112$$];
        null == $marker$$20$$.$_endTime$ ? this.$addMarker$($marker$$20$$, $DvtTimelineOverviewNode$$) : $DvtTimelineOverviewParser$$[$DvtTimelineOverviewParser$$.length] = $marker$$20$$;
      }
      this.$prepareDurations$($DvtTimelineOverviewParser$$);
      this.$addDurations$($DvtTimelineOverviewParser$$);
      this.$_markerSize$ = $DvtTimelineOverviewNode$$;
    }
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$prepareDurations$ = function $$dvt$$16$$$$TimelineOverview$$$$prepareDurations$$($dvt$$16$$) {
    this.$_maxDurationY$ = 0;
    var $DvtTimelineOverviewAutomation$$ = null;
    null == this.$_durationColorMap$ && (this.$_durationColorMap$ = {});
    for (var $DvtTimelineOverviewEvent$$ = 0;$DvtTimelineOverviewEvent$$ < $dvt$$16$$.length;$DvtTimelineOverviewEvent$$++) {
      var $DvtTimelineOverviewNode$$ = $dvt$$16$$[$DvtTimelineOverviewEvent$$], $DvtTimelineOverviewParser$$ = $DvtTimelineOverviewNode$$.getId(), $sId$$2$$ = $DvtTimelineOverviewParser$$.substring($DvtTimelineOverviewParser$$.indexOf(":") + 1, $DvtTimelineOverviewParser$$.length), $sId$$2$$ = $sId$$2$$.substring(0, $sId$$2$$.indexOf(":"));
      $sId$$2$$ != $DvtTimelineOverviewAutomation$$ && (this.$_colorCount$ = 0, $DvtTimelineOverviewAutomation$$ = $sId$$2$$);
      $DvtTimelineOverviewNode$$.$_durationLevel$ = this.$calculateDurationY$($DvtTimelineOverviewNode$$, $dvt$$16$$);
      null == $DvtTimelineOverviewNode$$.$_durationFillColor$ && (null == this.$_durationColorMap$[$DvtTimelineOverviewParser$$] ? (this.$_durationColorMap$[$DvtTimelineOverviewParser$$] = this.$_colorCount$, $DvtTimelineOverviewNode$$.$_durationFillColor$ = this.$_durationColors$[this.$_colorCount$], this.$_colorCount$++, this.$_colorCount$ == this.$_durationColors$.length && (this.$_colorCount$ = 0)) : $DvtTimelineOverviewNode$$.$_durationFillColor$ = this.$_durationColors$[this.$_durationColorMap$[$DvtTimelineOverviewParser$$]]);
    }
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$getDurationColorMap$ = function $$dvt$$16$$$$TimelineOverview$$$$getDurationColorMap$$() {
    return this.$_durationColorMap$ ? this.$_durationColorMap$ : null;
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$calculateOptimalSize$ = function $$dvt$$16$$$$TimelineOverview$$$$calculateOptimalSize$$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$, $DvtTimelineOverviewParser$$, $size$$41$$) {
    for (var $result$$2$$ = {max:1, $arr$:[]}, $canvasSize$$1$$ = this.$isVertical$() ? $DvtTimelineOverviewParser$$ : $DvtTimelineOverviewNode$$, $i$$712$$ = 0;$i$$712$$ < this.$_markers$.length;$i$$712$$++) {
      var $marker$$22$$ = this.$_markers$[$i$$712$$];
      if (null != $marker$$22$$.$_endTime$) {
        var $x$$231$$ = $dvt$$16$$.$OverviewUtils$.$getDatePosition$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, $marker$$22$$.getTime(), $canvasSize$$1$$);
        this.$isHorizontalRTL$() && ($x$$231$$ = $canvasSize$$1$$ - $x$$231$$);
        $marker$$22$$.$setX$($x$$231$$);
      } else {
        if (this.$calculateSize$($marker$$22$$, $DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, $canvasSize$$1$$, $size$$41$$ / 2, $result$$2$$, $DvtTimelineOverviewParser$$), $result$$2$$.max > $DvtTimelineOverviewParser$$) {
          break;
        }
      }
    }
    return $result$$2$$.max > $DvtTimelineOverviewParser$$ && 1 < $size$$41$$ ? this.$calculateOptimalSize$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$, $DvtTimelineOverviewParser$$, $size$$41$$ - 1) : $size$$41$$;
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$addMarker$ = function $$dvt$$16$$$$TimelineOverview$$$$addMarker$$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$) {
    var $DvtTimelineOverviewNode$$ = "_mrk_" + $DvtTimelineOverviewAutomation$$.getId(), $DvtTimelineOverviewParser$$ = $DvtTimelineOverviewAutomation$$.$getColor$(), $fill$$65_isGradient$$ = $DvtTimelineOverviewAutomation$$.$_gradient$, $lastChild$$1_opacity$$4$$ = $DvtTimelineOverviewAutomation$$.$getOpacity$();
    null == $lastChild$$1_opacity$$4$$ && ($lastChild$$1_opacity$$4$$ = this.$_defOpacity$, 0 == $lastChild$$1_opacity$$4$$ && null != $DvtTimelineOverviewParser$$ && ($lastChild$$1_opacity$$4$$ = 1));
    var $colors$$5_lighter_scaleX$$6_width$$166$$ = this.$getScaleX$($DvtTimelineOverviewAutomation$$), $alphas_darker_height$$137_scaleY$$6$$ = this.$getScaleY$($DvtTimelineOverviewAutomation$$), $marker$$23$$ = $DvtTimelineOverviewAutomation$$.$getShape$();
    if (this.$isVertical$()) {
      var $marker$$23$$ = $dvt$$16$$.$SimpleMarker$.$RECTANGLE$, $colors$$5_lighter_scaleX$$6_width$$166$$ = 2 * $colors$$5_lighter_scaleX$$6_width$$166$$, $alphas_darker_height$$137_scaleY$$6$$ = 2 * $alphas_darker_height$$137_scaleY$$6$$, $cx$$34$$ = $DvtTimelineOverviewAutomation$$.$getY$() + $colors$$5_lighter_scaleX$$6_width$$166$$ / 2, $cy$$35$$ = $DvtTimelineOverviewAutomation$$.$getX$() + $alphas_darker_height$$137_scaleY$$6$$ / 2
    } else {
      $colors$$5_lighter_scaleX$$6_width$$166$$ *= $DvtTimelineOverviewEvent$$, $alphas_darker_height$$137_scaleY$$6$$ *= $DvtTimelineOverviewEvent$$, $cx$$34$$ = $DvtTimelineOverviewAutomation$$.$getX$() + $colors$$5_lighter_scaleX$$6_width$$166$$ / 2, $cy$$35$$ = $DvtTimelineOverviewAutomation$$.$getY$() + $alphas_darker_height$$137_scaleY$$6$$ / 2;
    }
    $DvtTimelineOverviewNode$$ = new $dvt$$16$$.$SimpleMarker$(this.$getCtx$(), $marker$$23$$, null, $cx$$34$$, $cy$$35$$, $colors$$5_lighter_scaleX$$6_width$$166$$, $alphas_darker_height$$137_scaleY$$6$$, null, null, null, $DvtTimelineOverviewNode$$);
    $DvtTimelineOverviewNode$$.$_node$ = $DvtTimelineOverviewAutomation$$;
    null == $DvtTimelineOverviewParser$$ && $lastChild$$1_opacity$$4$$ == this.$_defOpacity$ && null == $fill$$65_isGradient$$ ? ($fill$$65_isGradient$$ = $marker$$23$$ == $dvt$$16$$.$SimpleMarker$.$CIRCLE$ ? this.$_radialFill$ : this.$_linearFill$, $DvtTimelineOverviewParser$$ = this.$_border$) : ($colors$$5_lighter_scaleX$$6_width$$166$$ = this.$_defColors$, null != $DvtTimelineOverviewParser$$ && ($dvt$$16$$.$OverviewUtils$.$supportsTouch$() ? $colors$$5_lighter_scaleX$$6_width$$166$$ = [$DvtTimelineOverviewParser$$] : 
    ($colors$$5_lighter_scaleX$$6_width$$166$$ = $dvt$$16$$.$ColorUtils$.$getBrighter$($DvtTimelineOverviewParser$$, .5), $alphas_darker_height$$137_scaleY$$6$$ = $dvt$$16$$.$ColorUtils$.$getDarker$($DvtTimelineOverviewParser$$, .5), $colors$$5_lighter_scaleX$$6_width$$166$$ = [$colors$$5_lighter_scaleX$$6_width$$166$$, $DvtTimelineOverviewParser$$, $alphas_darker_height$$137_scaleY$$6$$])), $alphas_darker_height$$137_scaleY$$6$$ = [$lastChild$$1_opacity$$4$$, $lastChild$$1_opacity$$4$$, $lastChild$$1_opacity$$4$$], 
    $fill$$65_isGradient$$ = null == $fill$$65_isGradient$$ ? $marker$$23$$ == $dvt$$16$$.$SimpleMarker$.$CIRCLE$ ? new $dvt$$16$$.$LinearGradientFill$(250, $colors$$5_lighter_scaleX$$6_width$$166$$, $alphas_darker_height$$137_scaleY$$6$$) : new $dvt$$16$$.$LinearGradientFill$(180, $colors$$5_lighter_scaleX$$6_width$$166$$, $alphas_darker_height$$137_scaleY$$6$$) : new $dvt$$16$$.$SolidFill$($DvtTimelineOverviewParser$$, $alphas_darker_height$$137_scaleY$$6$$[0]), $DvtTimelineOverviewParser$$ = new $dvt$$16$$.$SolidStroke$($DvtTimelineOverviewParser$$, 
    $lastChild$$1_opacity$$4$$));
    $DvtTimelineOverviewNode$$.$setFill$($fill$$65_isGradient$$);
    $DvtTimelineOverviewNode$$.$setStroke$($DvtTimelineOverviewParser$$);
    this.$isItemSelectionEnabled$() && $DvtTimelineOverviewNode$$.$setSelectable$(!0);
    $DvtTimelineOverviewParser$$ = this.$getNumChildren$();
    $lastChild$$1_opacity$$4$$ = this.$getChildAt$($DvtTimelineOverviewParser$$ - 1);
    $DvtTimelineOverviewParser$$ > this.$_lastChildIndex$ && ("tb" == $lastChild$$1_opacity$$4$$.getId() || "arr" == $lastChild$$1_opacity$$4$$.getId()) ? this.$addChildAt$($DvtTimelineOverviewNode$$, $DvtTimelineOverviewParser$$ - this.$_lastChildIndex$) : this.$addChild$($DvtTimelineOverviewNode$$);
    $DvtTimelineOverviewAutomation$$.$setDisplayable$($DvtTimelineOverviewNode$$);
    this.$applyState$($DvtTimelineOverviewNode$$, $dvt$$16$$.$TimelineOverview$.$ENABLED_STATE$);
    !this.$isVertical$() && $marker$$23$$ != $dvt$$16$$.$SimpleMarker$.$RECTANGLE$ && $marker$$23$$ != $dvt$$16$$.$SimpleMarker$.$DIAMOND$ && $marker$$23$$ != $dvt$$16$$.$SimpleMarker$.$TRIANGLE_UP$ && $marker$$23$$ != $dvt$$16$$.$SimpleMarker$.$TRIANGLE_DOWN$ && $marker$$23$$ != $dvt$$16$$.$SimpleMarker$.$PLUS$ || "false" == this.$_defaultMarkerStyles$.$pixelHinting$ || $DvtTimelineOverviewNode$$.$setPixelHinting$();
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$addDurations$ = function $$dvt$$16$$$$TimelineOverview$$$$addDurations$$($DvtTimelineOverviewAutomation$$) {
    for (var $DvtTimelineOverviewEvent$$ = this.$getCtx$(), $DvtTimelineOverviewNode$$ = this.$_maxDurationY$;0 < $DvtTimelineOverviewNode$$;$DvtTimelineOverviewNode$$--) {
      for (var $DvtTimelineOverviewParser$$ = 0;$DvtTimelineOverviewParser$$ < $DvtTimelineOverviewAutomation$$.length;$DvtTimelineOverviewParser$$++) {
        var $node$$310$$ = $DvtTimelineOverviewAutomation$$[$DvtTimelineOverviewParser$$];
        if ($DvtTimelineOverviewNode$$ == $node$$310$$.$_durationLevel$) {
          var $duration$$48_x$$232$$ = $dvt$$16$$.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, $node$$310$$.getTime(), this.$isVertical$() ? this.$Height$ : this.$Width$), $durationId$$2_feelerStroke$$1$$ = "_drn_" + $node$$310$$.getId(), $durationY$$1$$ = 9 + 5 * $node$$310$$.$_durationLevel$, $x2$$46$$ = $dvt$$16$$.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, $node$$310$$.$getEndTime$(), this.$isVertical$() ? this.$Height$ : this.$Width$), $duration$$48_x$$232$$ = 
          this.$isVertical$() ? this.$isRTL$() ? new $dvt$$16$$.Rect($DvtTimelineOverviewEvent$$, 0, $duration$$48_x$$232$$, $durationY$$1$$, $x2$$46$$ - $duration$$48_x$$232$$, $durationId$$2_feelerStroke$$1$$) : new $dvt$$16$$.Rect($DvtTimelineOverviewEvent$$, this.$Width$ - $durationY$$1$$, $duration$$48_x$$232$$, $durationY$$1$$, $x2$$46$$ - $duration$$48_x$$232$$, $durationId$$2_feelerStroke$$1$$) : this.$isRTL$() ? new $dvt$$16$$.Rect($DvtTimelineOverviewEvent$$, this.$Width$ - $x2$$46$$, this.$Height$ - 
          $durationY$$1$$ - 20, $x2$$46$$ - $duration$$48_x$$232$$, $durationY$$1$$, $durationId$$2_feelerStroke$$1$$) : new $dvt$$16$$.Rect($DvtTimelineOverviewEvent$$, $duration$$48_x$$232$$, this.$Height$ - $durationY$$1$$ - 20, $x2$$46$$ - $duration$$48_x$$232$$, $durationY$$1$$, $durationId$$2_feelerStroke$$1$$);
          $duration$$48_x$$232$$.$setFill$(new $dvt$$16$$.$SolidFill$($node$$310$$.$_durationFillColor$));
          $durationId$$2_feelerStroke$$1$$ = new $dvt$$16$$.$SolidStroke$(this.$getStyle$($dvt$$16$$.$TimelineOverview$.$ENABLED_STATE$, $dvt$$16$$.$TimelineOverview$.$DURATION_BORDER_COLOR$), 1, 1);
          $duration$$48_x$$232$$.$setStroke$($durationId$$2_feelerStroke$$1$$);
          $duration$$48_x$$232$$.$setPixelHinting$();
          $duration$$48_x$$232$$.$_node$ = $node$$310$$;
          this.$addChild$($duration$$48_x$$232$$);
          $node$$310$$.$_durationBar$ = $duration$$48_x$$232$$;
          $node$$310$$.$_durationY$ = $durationY$$1$$ - 2;
        }
      }
    }
    this.removeChild(this.$_timeAxisTopBar$);
    this.$addChild$(this.$_timeAxisTopBar$);
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$calculateSize$ = function $$dvt$$16$$$$TimelineOverview$$$$calculateSize$$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$, $DvtTimelineOverviewParser$$, $borderOffset_hsz$$, $result$$3$$, $maxHeight$$15$$) {
    var $hszx$$ = $borderOffset_hsz$$ * this.$getScaleX$($DvtTimelineOverviewAutomation$$) + this.$_markerSpacingOffset$, $hszy$$ = $borderOffset_hsz$$ * this.$getScaleY$($DvtTimelineOverviewAutomation$$) + this.$_markerSpacingOffset$;
    $DvtTimelineOverviewEvent$$ = $dvt$$16$$.$OverviewUtils$.$getDatePosition$($DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$, $DvtTimelineOverviewAutomation$$.getTime(), $DvtTimelineOverviewParser$$);
    this.$isHorizontalRTL$() && ($DvtTimelineOverviewEvent$$ = $DvtTimelineOverviewParser$$ - $DvtTimelineOverviewEvent$$ - 2 * $hszx$$);
    if (this.$isVertical$()) {
      $borderOffset_hsz$$ = 0, "solid" == this.$getStyle$($dvt$$16$$.$TimelineOverview$.$ENABLED_STATE$, $dvt$$16$$.$TimelineOverview$.$BORDER_STYLE$) && ($borderOffset_hsz$$ = parseInt(this.$getStyle$($dvt$$16$$.$TimelineOverview$.$ENABLED_STATE$, $dvt$$16$$.$TimelineOverview$.$BORDER_WIDTH$), 10)), $DvtTimelineOverviewParser$$ = this.$isRTL$() ? $borderOffset_hsz$$ + 4 : this.$Width$ - 2 * this.$getScaleX$($DvtTimelineOverviewAutomation$$) - $borderOffset_hsz$$ - 4;
    } else {
      $DvtTimelineOverviewParser$$ = 3;
      this.$isOverviewAbove$() && ($DvtTimelineOverviewParser$$ += this.$getTimeAxisHeight$());
      var $maxy$$ = 0;
      $DvtTimelineOverviewNode$$ = [];
      for (var $i$$714$$ = 0;$i$$714$$ < $result$$3$$.$arr$.length;$i$$714$$++) {
        var $obj$$234_prevMarker$$ = $result$$3$$.$arr$[$i$$714$$], $prevX$$3$$ = $obj$$234_prevMarker$$.$getX$(), $prevScaleX$$ = this.$getScaleX$($obj$$234_prevMarker$$);
        Math.abs($DvtTimelineOverviewEvent$$ - $prevX$$3$$) < $borderOffset_hsz$$ * $prevScaleX$$ + this.$_markerSpacingOffset$ + $hszx$$ && $DvtTimelineOverviewNode$$.push($obj$$234_prevMarker$$);
      }
      for ($i$$714$$ = 0;$i$$714$$ < $DvtTimelineOverviewNode$$.length;$i$$714$$++) {
        if ($obj$$234_prevMarker$$ = this.$calculateY$($DvtTimelineOverviewNode$$, $DvtTimelineOverviewAutomation$$.$getShape$(), $DvtTimelineOverviewEvent$$, $DvtTimelineOverviewParser$$, $hszx$$, $hszy$$, $maxy$$, $borderOffset_hsz$$, $maxHeight$$15$$), $maxy$$ = $obj$$234_prevMarker$$.maxy, $obj$$234_prevMarker$$.cy == $DvtTimelineOverviewParser$$) {
          $DvtTimelineOverviewParser$$ = $obj$$234_prevMarker$$.cy;
          break;
        } else {
          $DvtTimelineOverviewParser$$ = $obj$$234_prevMarker$$.cy;
        }
      }
    }
    $DvtTimelineOverviewAutomation$$.$setX$($DvtTimelineOverviewEvent$$);
    $DvtTimelineOverviewAutomation$$.$setY$($DvtTimelineOverviewParser$$);
    $result$$3$$.$arr$.push($DvtTimelineOverviewAutomation$$);
    $maxy$$ > $result$$3$$.max && ($result$$3$$.max = $maxy$$);
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$calculateY$ = function $$dvt$$16$$$$TimelineOverview$$$$calculateY$$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$, $DvtTimelineOverviewParser$$, $hszx$$1$$, $hszy$$1$$, $maxy$$1$$, $hsz$$1$$, $maxHeight$$16$$) {
    for (var $i$$715$$ = 0;$i$$715$$ < $DvtTimelineOverviewAutomation$$.length;$i$$715$$++) {
      var $prevMarker$$1_prevScaleY$$ = $DvtTimelineOverviewAutomation$$[$i$$715$$], $prevX$$4_xDist$$1$$ = $prevMarker$$1_prevScaleY$$.$getX$(), $prevY$$3$$ = $prevMarker$$1_prevScaleY$$.$getY$(), $prevShape$$ = $prevMarker$$1_prevScaleY$$.$getShape$(), $height$$138_minDist$$1_prevScaleX$$1$$ = this.$getScaleX$($prevMarker$$1_prevScaleY$$), $prevMarker$$1_prevScaleY$$ = this.$getScaleY$($prevMarker$$1_prevScaleY$$);
      $DvtTimelineOverviewEvent$$ == $dvt$$16$$.$SimpleMarker$.$CIRCLE$ && $prevShape$$ == $dvt$$16$$.$SimpleMarker$.$CIRCLE$ && $hszx$$1$$ == $hszy$$1$$ && $height$$138_minDist$$1_prevScaleX$$1$$ == $prevMarker$$1_prevScaleY$$ ? ($prevX$$4_xDist$$1$$ = Math.abs($DvtTimelineOverviewNode$$ - $prevX$$4_xDist$$1$$), $height$$138_minDist$$1_prevScaleX$$1$$ = $hsz$$1$$ * $height$$138_minDist$$1_prevScaleX$$1$$ + this.$_markerSpacingOffset$ + $hszx$$1$$, $height$$138_minDist$$1_prevScaleX$$1$$ = Math.sqrt($height$$138_minDist$$1_prevScaleX$$1$$ * 
      $height$$138_minDist$$1_prevScaleX$$1$$ - $prevX$$4_xDist$$1$$ * $prevX$$4_xDist$$1$$)) : $height$$138_minDist$$1_prevScaleX$$1$$ = $hsz$$1$$ * $prevMarker$$1_prevScaleY$$ + this.$_markerSpacingOffset$ + $hszy$$1$$;
      if ($height$$138_minDist$$1_prevScaleX$$1$$ > Math.abs($DvtTimelineOverviewParser$$ - $prevY$$3$$) && ($DvtTimelineOverviewParser$$ = $prevY$$3$$ + $height$$138_minDist$$1_prevScaleX$$1$$, $maxy$$1$$ = Math.max($maxy$$1$$, $DvtTimelineOverviewParser$$ + $height$$138_minDist$$1_prevScaleX$$1$$), 1 <= $hsz$$1$$ && void 0 != $maxHeight$$16$$ && $maxy$$1$$ > $maxHeight$$16$$)) {
        break;
      }
    }
    return {cy:$DvtTimelineOverviewParser$$, maxy:$maxy$$1$$};
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$calculateDurationY$ = function $$dvt$$16$$$$TimelineOverview$$$$calculateDurationY$$($dvt$$16$$, $DvtTimelineOverviewAutomation$$) {
    var $DvtTimelineOverviewEvent$$ = $DvtTimelineOverviewAutomation$$.length, $DvtTimelineOverviewNode$$ = $dvt$$16$$.getTime(), $DvtTimelineOverviewParser$$ = $dvt$$16$$.$_durationLevel$;
    null == $DvtTimelineOverviewParser$$ && ($DvtTimelineOverviewParser$$ = 1);
    for (var $i$$716$$ = 0;$i$$716$$ < $DvtTimelineOverviewEvent$$;$i$$716$$++) {
      var $currItem$$2_curry$$ = $DvtTimelineOverviewAutomation$$[$i$$716$$];
      if ($currItem$$2_curry$$ != $dvt$$16$$) {
        var $currEndTime$$1$$ = $currItem$$2_curry$$.$getEndTime$();
        if (null != $currEndTime$$1$$) {
          var $currStartTime$$1$$ = $currItem$$2_curry$$.getTime(), $currItem$$2_curry$$ = $currItem$$2_curry$$.$_durationLevel$;
          null == $currItem$$2_curry$$ && ($currItem$$2_curry$$ = 1);
          $DvtTimelineOverviewNode$$ >= $currStartTime$$1$$ && $DvtTimelineOverviewNode$$ <= $currEndTime$$1$$ && $DvtTimelineOverviewParser$$ == $currItem$$2_curry$$ && ($DvtTimelineOverviewParser$$ = $currItem$$2_curry$$ + 1, $dvt$$16$$.$_durationLevel$ = $DvtTimelineOverviewParser$$, $DvtTimelineOverviewParser$$ = this.$calculateDurationY$($dvt$$16$$, $DvtTimelineOverviewAutomation$$));
        }
      }
    }
    $DvtTimelineOverviewParser$$ > this.$_maxDurationY$ && (this.$_maxDurationY$ = $DvtTimelineOverviewParser$$);
    return $DvtTimelineOverviewParser$$;
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$HandleShapeMouseOver$ = function $$dvt$$16$$$$TimelineOverview$$$$HandleShapeMouseOver$$($DvtTimelineOverviewAutomation$$) {
    var $DvtTimelineOverviewNode$$ = $dvt$$16$$.$TimelineOverview$.$superclass$.$HandleShapeMouseOver$.call(this, $DvtTimelineOverviewAutomation$$);
    if (null != $DvtTimelineOverviewNode$$) {
      if (null != $DvtTimelineOverviewNode$$.$_node$) {
        var $DvtTimelineOverviewParser$$ = $DvtTimelineOverviewNode$$.$_node$.$_desc$;
        null != $DvtTimelineOverviewParser$$ && this.$getCtx$().$getTooltipManager$().$showDatatip$($DvtTimelineOverviewAutomation$$.pageX, $DvtTimelineOverviewAutomation$$.pageY, $DvtTimelineOverviewParser$$, "#000000");
        this.$isFlashEnvironment$() && this.setCursor("pointer");
      }
      if (this.$isItemSelectionEnabled$()) {
        $DvtTimelineOverviewAutomation$$ = !1;
        if (null != this.$_selectedMarkers$) {
          for ($DvtTimelineOverviewParser$$ = 0;$DvtTimelineOverviewParser$$ < this.$_selectedMarkers$.length;$DvtTimelineOverviewParser$$++) {
            if ($DvtTimelineOverviewNode$$ == this.$_selectedMarkers$[$DvtTimelineOverviewParser$$]) {
              $DvtTimelineOverviewAutomation$$ = !0;
              break;
            }
          }
        }
        $DvtTimelineOverviewAutomation$$ || ($DvtTimelineOverviewAutomation$$ = this.$getItemId$($DvtTimelineOverviewNode$$), $DvtTimelineOverviewParser$$ = new $DvtTimelineOverviewEvent$$($DvtTimelineOverviewEvent$$.$SUBTYPE_HIGHLIGHT$), $DvtTimelineOverviewParser$$.$setItemId$($DvtTimelineOverviewAutomation$$), this.dispatchEvent($DvtTimelineOverviewParser$$), this.$highlightMarker$($DvtTimelineOverviewNode$$));
      }
    }
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$HandleShapeMouseOut$ = function $$dvt$$16$$$$TimelineOverview$$$$HandleShapeMouseOut$$($DvtTimelineOverviewAutomation$$) {
    $DvtTimelineOverviewAutomation$$ = $dvt$$16$$.$TimelineOverview$.$superclass$.$HandleShapeMouseOut$.call(this, $DvtTimelineOverviewAutomation$$);
    if (null != $DvtTimelineOverviewAutomation$$ && !this.$isMovable$($DvtTimelineOverviewAutomation$$)) {
      this.$getCtx$().$getTooltipManager$().$hideTooltip$();
      var $DvtTimelineOverviewNode$$ = !1;
      if (null != this.$_selectedMarkers$) {
        for (var $DvtTimelineOverviewParser$$ = 0;$DvtTimelineOverviewParser$$ < this.$_selectedMarkers$.length;$DvtTimelineOverviewParser$$++) {
          if ($DvtTimelineOverviewAutomation$$ == this.$_selectedMarkers$[$DvtTimelineOverviewParser$$]) {
            $DvtTimelineOverviewNode$$ = !0;
            break;
          }
        }
      }
      $DvtTimelineOverviewNode$$ || ($DvtTimelineOverviewNode$$ = this.$getItemId$($DvtTimelineOverviewAutomation$$), $DvtTimelineOverviewParser$$ = new $DvtTimelineOverviewEvent$$($DvtTimelineOverviewEvent$$.$SUBTYPE_UNHIGHLIGHT$), $DvtTimelineOverviewParser$$.$setItemId$($DvtTimelineOverviewNode$$), this.dispatchEvent($DvtTimelineOverviewParser$$), this.$unhighlightMarker$($DvtTimelineOverviewAutomation$$));
    }
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$HandleShapeClick$ = function $$dvt$$16$$$$TimelineOverview$$$$HandleShapeClick$$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$) {
    $DvtTimelineOverviewEvent$$ = $dvt$$16$$.$TimelineOverview$.$superclass$.$HandleShapeClick$.call(this, $DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$, $DvtTimelineOverviewNode$$);
    null != $DvtTimelineOverviewEvent$$ && this.$HandleMarkerClick$($DvtTimelineOverviewEvent$$, $DvtTimelineOverviewAutomation$$.ctrlKey || $DvtTimelineOverviewAutomation$$.shiftKey || $dvt$$16$$.$Agent$.$isTouchDevice$());
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$HandleMarkerClick$ = function $$dvt$$16$$$$TimelineOverview$$$$HandleMarkerClick$$($dvt$$16$$, $DvtTimelineOverviewAutomation$$) {
    if (this.$isItemSelectionEnabled$()) {
      this.$selectItem$($dvt$$16$$, $DvtTimelineOverviewAutomation$$);
      var $DvtTimelineOverviewNode$$ = $dvt$$16$$.$_node$.getTime();
      if (null != $DvtTimelineOverviewNode$$) {
        var $DvtTimelineOverviewParser$$ = new $DvtTimelineOverviewEvent$$($DvtTimelineOverviewEvent$$.$SUBTYPE_SCROLL_TIME$);
        $DvtTimelineOverviewParser$$.setTime($DvtTimelineOverviewNode$$);
        this.dispatchEvent($DvtTimelineOverviewParser$$);
        $DvtTimelineOverviewNode$$ = this.$getSlidingWindow$();
        $DvtTimelineOverviewNode$$ = this.$isVertical$() ? this.$getX$($dvt$$16$$) - $DvtTimelineOverviewNode$$.getHeight() / 2 : this.$getX$($dvt$$16$$) - $DvtTimelineOverviewNode$$.getWidth() / 2;
        this.$animateSlidingWindow$($DvtTimelineOverviewNode$$);
      }
    }
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$highlightItem$ = function $$dvt$$16$$$$TimelineOverview$$$$highlightItem$$($dvt$$16$$) {
    $dvt$$16$$ = this.$getDrawableById$($dvt$$16$$);
    null != $dvt$$16$$ && this.$highlightMarker$($dvt$$16$$);
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$unhighlightItem$ = function $$dvt$$16$$$$TimelineOverview$$$$unhighlightItem$$($dvt$$16$$) {
    $dvt$$16$$ = this.$getDrawableById$($dvt$$16$$);
    null != $dvt$$16$$ && this.$unhighlightMarker$($dvt$$16$$);
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$highlightMarker$ = function $$dvt$$16$$$$TimelineOverview$$$$highlightMarker$$($DvtTimelineOverviewAutomation$$) {
    if (null != this.$_selectedMarkers$) {
      for (var $DvtTimelineOverviewEvent$$ = 0;$DvtTimelineOverviewEvent$$ < this.$_selectedMarkers$.length;$DvtTimelineOverviewEvent$$++) {
        if ($DvtTimelineOverviewAutomation$$ == this.$_selectedMarkers$[$DvtTimelineOverviewEvent$$]) {
          return;
        }
      }
    }
    this.$applyState$($DvtTimelineOverviewAutomation$$, $dvt$$16$$.$TimelineOverview$.$HOVER_STATE$);
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$unhighlightMarker$ = function $$dvt$$16$$$$TimelineOverview$$$$unhighlightMarker$$($DvtTimelineOverviewAutomation$$) {
    if (null != this.$_selectedMarkers$) {
      for (var $DvtTimelineOverviewEvent$$ = 0;$DvtTimelineOverviewEvent$$ < this.$_selectedMarkers$.length;$DvtTimelineOverviewEvent$$++) {
        if ($DvtTimelineOverviewAutomation$$ == this.$_selectedMarkers$[$DvtTimelineOverviewEvent$$]) {
          return;
        }
      }
    }
    this.$applyState$($DvtTimelineOverviewAutomation$$, $dvt$$16$$.$TimelineOverview$.$ENABLED_STATE$);
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$selSelectItem$ = function $$dvt$$16$$$$TimelineOverview$$$$selSelectItem$$($dvt$$16$$) {
    $dvt$$16$$ = this.$getDrawableById$($dvt$$16$$);
    null != $dvt$$16$$ && this.$addSelectedMarker$($dvt$$16$$);
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$selUnselectItem$ = function $$dvt$$16$$$$TimelineOverview$$$$selUnselectItem$$($dvt$$16$$) {
    $dvt$$16$$ = this.$getDrawableById$($dvt$$16$$);
    null != $dvt$$16$$ && this.$removeSelectedMarker$($dvt$$16$$);
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$selectItem$ = function $$dvt$$16$$$$TimelineOverview$$$$selectItem$$($dvt$$16$$, $DvtTimelineOverviewAutomation$$) {
    var $DvtTimelineOverviewNode$$ = this.$getItemId$($dvt$$16$$), $DvtTimelineOverviewParser$$ = new $DvtTimelineOverviewEvent$$($DvtTimelineOverviewEvent$$.$SUBTYPE_SELECTION$);
    $DvtTimelineOverviewParser$$.$setItemId$($DvtTimelineOverviewNode$$);
    $DvtTimelineOverviewParser$$.$setMultiSelect$($DvtTimelineOverviewAutomation$$);
    this.dispatchEvent($DvtTimelineOverviewParser$$);
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$addSelectedMarker$ = function $$dvt$$16$$$$TimelineOverview$$$$addSelectedMarker$$($DvtTimelineOverviewAutomation$$) {
    null == this.$_selectedMarkers$ && (this.$_selectedMarkers$ = []);
    var $DvtTimelineOverviewEvent$$ = null;
    0 < this.$_selectedMarkers$.length && ($DvtTimelineOverviewEvent$$ = this.$_selectedMarkers$[this.$_selectedMarkers$.length - 1]);
    this.$_selectedMarkers$.push($DvtTimelineOverviewAutomation$$);
    null != $DvtTimelineOverviewEvent$$ && this.$applyState$($DvtTimelineOverviewEvent$$, $dvt$$16$$.$TimelineOverview$.$SELECTED_STATE$);
    this.$applyState$($DvtTimelineOverviewAutomation$$, $dvt$$16$$.$TimelineOverview$.$ACTIVE_SELECTED_STATE$);
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$removeSelectedMarker$ = function $$dvt$$16$$$$TimelineOverview$$$$removeSelectedMarker$$($DvtTimelineOverviewAutomation$$) {
    if (null != this.$_selectedMarkers$) {
      for (var $DvtTimelineOverviewEvent$$ = -1, $DvtTimelineOverviewNode$$ = 0;$DvtTimelineOverviewNode$$ < this.$_selectedMarkers$.length;$DvtTimelineOverviewNode$$++) {
        if ($DvtTimelineOverviewAutomation$$ == this.$_selectedMarkers$[$DvtTimelineOverviewNode$$]) {
          $DvtTimelineOverviewEvent$$ = $DvtTimelineOverviewNode$$;
          break;
        }
      }
      -1 != $DvtTimelineOverviewEvent$$ && (this.$applyState$($DvtTimelineOverviewAutomation$$, $dvt$$16$$.$TimelineOverview$.$ENABLED_STATE$), this.$_selectedMarkers$.splice($DvtTimelineOverviewEvent$$, 1));
    }
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$applyState$ = function $$dvt$$16$$$$TimelineOverview$$$$applyState$$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$) {
    if ($DvtTimelineOverviewAutomation$$ instanceof $dvt$$16$$.$SimpleMarker$) {
      var $DvtTimelineOverviewNode$$ = !1, $DvtTimelineOverviewParser$$ = !1;
      if ("solid" == this.$getStyle$($DvtTimelineOverviewEvent$$, $dvt$$16$$.$TimelineOverview$.$BORDER_STYLE$)) {
        var $DvtTimelineOverviewNode$$ = !0, $borderColor$$48_stroke$$103$$ = this.$getStyle$($DvtTimelineOverviewEvent$$, $dvt$$16$$.$TimelineOverview$.$BORDER_COLOR$);
        null == $borderColor$$48_stroke$$103$$ && ($borderColor$$48_stroke$$103$$ = "#000000");
        var $glowColor_glowStroke$$ = this.$getStyle$($DvtTimelineOverviewEvent$$, $dvt$$16$$.$TimelineOverview$.$GLOW_COLOR$);
        null != $glowColor_glowStroke$$ && "none" != $glowColor_glowStroke$$ && ($DvtTimelineOverviewParser$$ = !0);
      }
      var $borderMarker$$ = $DvtTimelineOverviewAutomation$$.$_borderMarker$, $glowMarker_glowOffset$$ = $DvtTimelineOverviewAutomation$$.$_glowMarker$;
      $DvtTimelineOverviewNode$$ || null == $borderMarker$$ ? $DvtTimelineOverviewParser$$ || null == $glowMarker_glowOffset$$ || (this.removeChild($glowMarker_glowOffset$$), $DvtTimelineOverviewAutomation$$.$_glowMarker$ = null) : (this.removeChild($borderMarker$$), $DvtTimelineOverviewAutomation$$.$_borderMarker$ = null, null != $glowMarker_glowOffset$$ && (this.removeChild($glowMarker_glowOffset$$), $DvtTimelineOverviewAutomation$$.$_glowMarker$ = null));
      var $id$$230_markerType$$1$$ = $DvtTimelineOverviewAutomation$$.$getType$();
      if ($DvtTimelineOverviewNode$$) {
        var $DvtTimelineOverviewNode$$ = parseInt(this.$getStyle$($DvtTimelineOverviewEvent$$, $dvt$$16$$.$TimelineOverview$.$BORDER_WIDTH$), 10), $borderOffset$$1$$ = parseInt(this.$getStyle$($DvtTimelineOverviewEvent$$, $dvt$$16$$.$TimelineOverview$.$BORDER_OFFSET$), 10);
        if (null == $borderMarker$$) {
          if ($id$$230_markerType$$1$$ == $dvt$$16$$.$SimpleMarker$.$CIRCLE$) {
            this.$isFlashEnvironment$() && ($borderOffset$$1$$ = 0);
            var $width$$168$$ = ($DvtTimelineOverviewAutomation$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$) * $DvtTimelineOverviewAutomation$$.$getScaleX$(), $height$$139$$ = ($DvtTimelineOverviewAutomation$$.$getDimensions$().$h$ + 2 * $borderOffset$$1$$) * $DvtTimelineOverviewAutomation$$.$getScaleY$(), $cx$$37$$ = this.$getX$($DvtTimelineOverviewAutomation$$) - $borderOffset$$1$$ + $width$$168$$ / 2, $cy$$38$$ = this.$getY$($DvtTimelineOverviewAutomation$$) - $borderOffset$$1$$ + $height$$139$$ / 
            2;
          } else {
            this.$isVertical$() ? ($width$$168$$ = ($DvtTimelineOverviewAutomation$$.$getDimensions$().$w$ + ($DvtTimelineOverviewNode$$ + 1)) * $DvtTimelineOverviewAutomation$$.$getScaleX$(), $height$$139$$ = ($DvtTimelineOverviewAutomation$$.$getDimensions$().$h$ + ($DvtTimelineOverviewNode$$ + 1)) * $DvtTimelineOverviewAutomation$$.$getScaleY$(), $cx$$37$$ = this.$getY$($DvtTimelineOverviewAutomation$$) - ($DvtTimelineOverviewNode$$ + 1) / 2 + $width$$168$$ / 2, $cy$$38$$ = this.$getX$($DvtTimelineOverviewAutomation$$) - 
            ($DvtTimelineOverviewNode$$ + 1) / 2 + $height$$139$$ / 2) : ($width$$168$$ = ($DvtTimelineOverviewAutomation$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$) * $DvtTimelineOverviewAutomation$$.$getScaleX$(), $height$$139$$ = ($DvtTimelineOverviewAutomation$$.$getDimensions$().$h$ + 2 * $borderOffset$$1$$) * $DvtTimelineOverviewAutomation$$.$getScaleY$(), $cx$$37$$ = this.$getX$($DvtTimelineOverviewAutomation$$) - $borderOffset$$1$$ + $width$$168$$ / 2, $cy$$38$$ = this.$getY$($DvtTimelineOverviewAutomation$$) - 
            $borderOffset$$1$$ + $height$$139$$ / 2);
          }
          $borderMarker$$ = new $dvt$$16$$.$SimpleMarker$(this.$getCtx$(), $id$$230_markerType$$1$$, null, $cx$$37$$, $cy$$38$$, $width$$168$$, $height$$139$$, null, null, null, $DvtTimelineOverviewAutomation$$.getId() + "_border");
          this.$addChildAt$($borderMarker$$, this.$getChildIndex$($DvtTimelineOverviewAutomation$$));
          $DvtTimelineOverviewAutomation$$.$_borderMarker$ = $borderMarker$$;
          $borderMarker$$.$setFill$(this.$_markerBorderFill$);
        }
        $borderColor$$48_stroke$$103$$ = new $dvt$$16$$.$SolidStroke$($borderColor$$48_stroke$$103$$, this.$getStyle$($DvtTimelineOverviewEvent$$, $dvt$$16$$.$TimelineOverview$.$BORDER_OPACITY$), $DvtTimelineOverviewNode$$);
        $borderMarker$$.$setStroke$($borderColor$$48_stroke$$103$$);
        !this.$isVertical$() && $id$$230_markerType$$1$$ != $dvt$$16$$.$SimpleMarker$.$RECTANGLE$ && $id$$230_markerType$$1$$ != $dvt$$16$$.$SimpleMarker$.$DIAMOND$ && $id$$230_markerType$$1$$ != $dvt$$16$$.$SimpleMarker$.$TRIANGLE_UP$ && $id$$230_markerType$$1$$ != $dvt$$16$$.$SimpleMarker$.$TRIANGLE_DOWN$ && $id$$230_markerType$$1$$ != $dvt$$16$$.$SimpleMarker$.$PLUS$ || "false" == this.$_defaultMarkerStyles$.$pixelHinting$ || $borderMarker$$.$setPixelHinting$();
        $DvtTimelineOverviewParser$$ && (null == $glowMarker_glowOffset$$ && ($glowMarker_glowOffset$$ = $borderOffset$$1$$ - $DvtTimelineOverviewNode$$, $id$$230_markerType$$1$$ == $dvt$$16$$.$SimpleMarker$.$CIRCLE$ ? (this.$isFlashEnvironment$() && ($glowMarker_glowOffset$$ = 0), $width$$168$$ = ($DvtTimelineOverviewAutomation$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$) * $DvtTimelineOverviewAutomation$$.$getScaleX$(), $height$$139$$ = ($DvtTimelineOverviewAutomation$$.$getDimensions$().$h$ + 
        2 * $glowMarker_glowOffset$$) * $DvtTimelineOverviewAutomation$$.$getScaleY$(), $cx$$37$$ = this.$getX$($DvtTimelineOverviewAutomation$$) - $glowMarker_glowOffset$$ + $width$$168$$ / 2, $cy$$38$$ = this.$getY$($DvtTimelineOverviewAutomation$$) - $glowMarker_glowOffset$$ + $height$$139$$ / 2) : this.$isVertical$() ? ($width$$168$$ = ($DvtTimelineOverviewAutomation$$.$getDimensions$().$w$ + 3) * $DvtTimelineOverviewAutomation$$.$getScaleX$(), $height$$139$$ = ($DvtTimelineOverviewAutomation$$.$getDimensions$().$h$ + 
        3) * $DvtTimelineOverviewAutomation$$.$getScaleY$(), $cx$$37$$ = this.$getY$($DvtTimelineOverviewAutomation$$) + $width$$168$$ / 2, $cy$$38$$ = this.$getX$($DvtTimelineOverviewAutomation$$) - 1 + $height$$139$$ / 2) : ($width$$168$$ = ($DvtTimelineOverviewAutomation$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$) * $DvtTimelineOverviewAutomation$$.$getScaleX$(), $height$$139$$ = ($DvtTimelineOverviewAutomation$$.$getDimensions$().$h$ + 2 * $glowMarker_glowOffset$$) * $DvtTimelineOverviewAutomation$$.$getScaleY$(), 
        $cx$$37$$ = this.$getX$($DvtTimelineOverviewAutomation$$) - $glowMarker_glowOffset$$ + $width$$168$$ / 2, $cy$$38$$ = this.$getY$($DvtTimelineOverviewAutomation$$) - $glowMarker_glowOffset$$ + $height$$139$$ / 2), $glowMarker_glowOffset$$ = new $dvt$$16$$.$SimpleMarker$(this.$getCtx$(), $id$$230_markerType$$1$$, null, $cx$$37$$, $cy$$38$$, $width$$168$$, $height$$139$$, null, null, null, $DvtTimelineOverviewAutomation$$.getId() + "_glow"), this.$addChildAt$($glowMarker_glowOffset$$, this.$getChildIndex$($borderMarker$$)), 
        $DvtTimelineOverviewAutomation$$.$_glowMarker$ = $glowMarker_glowOffset$$, $glowMarker_glowOffset$$.$setFill$(this.$_markerBorderFill$)), $glowColor_glowStroke$$ = new $dvt$$16$$.$SolidStroke$($glowColor_glowStroke$$, this.$getStyle$($DvtTimelineOverviewEvent$$, $dvt$$16$$.$TimelineOverview$.$GLOW_OPACITY$), 4), $glowMarker_glowOffset$$.$setStroke$($glowColor_glowStroke$$), !this.$isVertical$() && $id$$230_markerType$$1$$ != $dvt$$16$$.$SimpleMarker$.$RECTANGLE$ && $id$$230_markerType$$1$$ != 
        $dvt$$16$$.$SimpleMarker$.$DIAMOND$ && $id$$230_markerType$$1$$ != $dvt$$16$$.$SimpleMarker$.$TRIANGLE_UP$ && $id$$230_markerType$$1$$ != $dvt$$16$$.$SimpleMarker$.$TRIANGLE_DOWN$ && $id$$230_markerType$$1$$ != $dvt$$16$$.$SimpleMarker$.$PLUS$ || "false" == this.$_defaultMarkerStyles$.$pixelHinting$ || $glowMarker_glowOffset$$.$setPixelHinting$());
      }
    } else {
      ($id$$230_markerType$$1$$ = $DvtTimelineOverviewAutomation$$.getId()) && "_drn_" == $id$$230_markerType$$1$$.substring(0, 5) && this.$applyDurationState$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$);
    }
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$applyDurationState$ = function $$dvt$$16$$$$TimelineOverview$$$$applyDurationState$$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$) {
    var $DvtTimelineOverviewNode$$ = this.$getStyle$($DvtTimelineOverviewEvent$$, $dvt$$16$$.$TimelineOverview$.$DURATION_BORDER_COLOR$);
    null == $DvtTimelineOverviewNode$$ && ($DvtTimelineOverviewNode$$ = "#000000");
    var $DvtTimelineOverviewParser$$ = parseInt(this.$getStyle$($DvtTimelineOverviewEvent$$, $dvt$$16$$.$TimelineOverview$.$DURATION_BORDER_WIDTH$), 10);
    $DvtTimelineOverviewAutomation$$.$setStroke$(new $dvt$$16$$.$SolidStroke$($DvtTimelineOverviewNode$$, 1, $DvtTimelineOverviewParser$$));
  };
  $dvt$$16$$.$TimelineOverview$.prototype.$getAutomation$ = function $$dvt$$16$$$$TimelineOverview$$$$getAutomation$$() {
    this.$_Automation$ || (this.$_Automation$ = new $DvtTimelineOverviewAutomation$$(this));
    return this.$_Automation$;
  };
  $dvt$$16$$.$Obj$.$createSubclass$($DvtTimelineOverviewParser$$, $dvt$$16$$.$Obj$);
  $DvtTimelineOverviewParser$$.prototype.Init = function $$DvtTimelineOverviewParser$$$$Init$($DvtTimelineOverviewAutomation$$) {
    this.$_view$ = $DvtTimelineOverviewAutomation$$;
    this.$_parser$ = new $dvt$$16$$.$XmlParser$($DvtTimelineOverviewAutomation$$.$getCtx$());
  };
  $DvtTimelineOverviewParser$$.prototype.parse = function $$DvtTimelineOverviewParser$$$$parse$($dvt$$16$$) {
    var $DvtTimelineOverviewAutomation$$ = this.$ParseRootAttributes$($dvt$$16$$);
    $DvtTimelineOverviewAutomation$$.$timeAxisInfo$ = this.$_parseTimeAxis$($dvt$$16$$.axisTicks);
    $DvtTimelineOverviewAutomation$$.$markers$ = this.$_parseDataNode$($dvt$$16$$.markers, $DvtTimelineOverviewAutomation$$.$defaultMarkerStyles$);
    $DvtTimelineOverviewAutomation$$.$formattedTimeRanges$ = $dvt$$16$$.formattedTimeRanges;
    return $DvtTimelineOverviewAutomation$$;
  };
  $DvtTimelineOverviewParser$$.prototype.$ParseRootAttributes$ = function $$DvtTimelineOverviewParser$$$$$ParseRootAttributes$$($dvt$$16$$) {
    var $DvtTimelineOverviewAutomation$$ = {};
    $DvtTimelineOverviewAutomation$$.start = parseInt($dvt$$16$$.start);
    $DvtTimelineOverviewAutomation$$.end = parseInt($dvt$$16$$.end);
    $DvtTimelineOverviewAutomation$$.width = parseInt($dvt$$16$$.width);
    $DvtTimelineOverviewAutomation$$.$renderStart$ = parseInt($dvt$$16$$.renstart);
    $DvtTimelineOverviewAutomation$$.currentTime = parseInt($dvt$$16$$.ocd);
    $DvtTimelineOverviewAutomation$$.orientation = $dvt$$16$$.orn;
    $DvtTimelineOverviewAutomation$$.$overviewPosition$ = $dvt$$16$$.ovp;
    $DvtTimelineOverviewAutomation$$.$selectionMode$ = $dvt$$16$$.selmode;
    $DvtTimelineOverviewAutomation$$.$isRtl$ = $dvt$$16$$.rtl.toString();
    $DvtTimelineOverviewAutomation$$.borderTopStyle = $dvt$$16$$._bts;
    $DvtTimelineOverviewAutomation$$.borderTopColor = $dvt$$16$$._btc;
    $DvtTimelineOverviewAutomation$$.$seriesIds$ = $dvt$$16$$.sid;
    $DvtTimelineOverviewAutomation$$.$animationOnClick$ = $dvt$$16$$._aoc;
    var $DvtTimelineOverviewEvent$$ = {};
    $DvtTimelineOverviewEvent$$.shape = $dvt$$16$$._ds;
    $DvtTimelineOverviewEvent$$.$scaleX$ = $dvt$$16$$._dsx;
    $DvtTimelineOverviewEvent$$.$scaleY$ = $dvt$$16$$._dsy;
    $DvtTimelineOverviewEvent$$.opacity = $dvt$$16$$._do;
    $DvtTimelineOverviewEvent$$.color = $dvt$$16$$._fc;
    $DvtTimelineOverviewEvent$$.$pixelHinting$ = $dvt$$16$$._ph;
    $DvtTimelineOverviewAutomation$$.$defaultMarkerStyles$ = $DvtTimelineOverviewEvent$$;
    $DvtTimelineOverviewAutomation$$.$handleFillColor$ = $dvt$$16$$._hfc;
    $DvtTimelineOverviewAutomation$$.$handleTextureColor$ = $dvt$$16$$._htc;
    $DvtTimelineOverviewAutomation$$.$handleBackgroundImage$ = $dvt$$16$$._hbi;
    $DvtTimelineOverviewAutomation$$.$handleWidth$ = $dvt$$16$$._hw;
    $DvtTimelineOverviewAutomation$$.$handleHeight$ = $dvt$$16$$._hh;
    $DvtTimelineOverviewAutomation$$.$windowBackgroundColor$ = $dvt$$16$$._wbc;
    $DvtTimelineOverviewAutomation$$.$windowBorderTopStyle$ = $dvt$$16$$._wbts;
    $DvtTimelineOverviewAutomation$$.$windowBorderRightStyle$ = $dvt$$16$$._wbrs;
    $DvtTimelineOverviewAutomation$$.$windowBorderBottomStyle$ = $dvt$$16$$._wbbs;
    $DvtTimelineOverviewAutomation$$.$windowBorderLeftStyle$ = $dvt$$16$$._wbls;
    $DvtTimelineOverviewAutomation$$.$windowBorderTopColor$ = $dvt$$16$$._wbtc;
    $DvtTimelineOverviewAutomation$$.$windowBorderRightColor$ = $dvt$$16$$._wbrc;
    $DvtTimelineOverviewAutomation$$.$windowBorderBottomColor$ = $dvt$$16$$._wbbc;
    $DvtTimelineOverviewAutomation$$.$windowBorderLeftColor$ = $dvt$$16$$._wblc;
    $DvtTimelineOverviewAutomation$$.$overviewBackgroundColor$ = $dvt$$16$$._obc;
    $DvtTimelineOverviewAutomation$$.$currentTimeIndicatorColor$ = $dvt$$16$$._ctic;
    $DvtTimelineOverviewAutomation$$.$timeIndicatorColor$ = $dvt$$16$$._tic;
    $DvtTimelineOverviewAutomation$$.$timeAxisBarColor$ = $dvt$$16$$._tabc;
    $DvtTimelineOverviewAutomation$$.$timeAxisBarOpacity$ = $dvt$$16$$._tabo;
    $DvtTimelineOverviewAutomation$$.$labelStyle$ = $dvt$$16$$._ls;
    $DvtTimelineOverviewEvent$$ = {};
    $DvtTimelineOverviewEvent$$._bs = $dvt$$16$$._bs;
    $DvtTimelineOverviewEvent$$._bc = $dvt$$16$$._bc;
    $DvtTimelineOverviewEvent$$._bw = $dvt$$16$$._bw;
    $DvtTimelineOverviewEvent$$._bof = $dvt$$16$$._bof;
    $DvtTimelineOverviewEvent$$._bo = $dvt$$16$$._bo;
    $DvtTimelineOverviewEvent$$._gc = $dvt$$16$$._gc;
    $DvtTimelineOverviewEvent$$._go = $dvt$$16$$._go;
    $DvtTimelineOverviewEvent$$._dbs = $dvt$$16$$._dbs;
    $DvtTimelineOverviewEvent$$._dbc = $dvt$$16$$._dbc;
    $DvtTimelineOverviewEvent$$._dbw = $dvt$$16$$._dbw;
    $DvtTimelineOverviewEvent$$._hbs = $dvt$$16$$._hbs;
    $DvtTimelineOverviewEvent$$._hbc = $dvt$$16$$._hbc;
    $DvtTimelineOverviewEvent$$._hbw = $dvt$$16$$._hbw;
    $DvtTimelineOverviewEvent$$._hbof = $dvt$$16$$._hbof;
    $DvtTimelineOverviewEvent$$._hbo = $dvt$$16$$._hbo;
    $DvtTimelineOverviewEvent$$._hgc = $dvt$$16$$._hgc;
    $DvtTimelineOverviewEvent$$._hgo = $dvt$$16$$._hgo;
    $DvtTimelineOverviewEvent$$._hdbs = $dvt$$16$$._hdbs;
    $DvtTimelineOverviewEvent$$._hdbc = $dvt$$16$$._hdbc;
    $DvtTimelineOverviewEvent$$._hdbw = $dvt$$16$$._hdbw;
    $DvtTimelineOverviewEvent$$._sbs = $dvt$$16$$._sbs;
    $DvtTimelineOverviewEvent$$._sbc = $dvt$$16$$._sbc;
    $DvtTimelineOverviewEvent$$._sbw = $dvt$$16$$._sbw;
    $DvtTimelineOverviewEvent$$._sbof = $dvt$$16$$._sbof;
    $DvtTimelineOverviewEvent$$._sbo = $dvt$$16$$._sbo;
    $DvtTimelineOverviewEvent$$._sgc = $dvt$$16$$._sgc;
    $DvtTimelineOverviewEvent$$._sgo = $dvt$$16$$._sgo;
    $DvtTimelineOverviewEvent$$._sdbs = $dvt$$16$$._sdbs;
    $DvtTimelineOverviewEvent$$._sdbc = $dvt$$16$$._sdbc;
    $DvtTimelineOverviewEvent$$._sdbw = $dvt$$16$$._sdbw;
    $DvtTimelineOverviewEvent$$._asbs = $dvt$$16$$._asbs;
    $DvtTimelineOverviewEvent$$._asbc = $dvt$$16$$._asbc;
    $DvtTimelineOverviewEvent$$._asbw = $dvt$$16$$._asbw;
    $DvtTimelineOverviewEvent$$._asbof = $dvt$$16$$._asbof;
    $DvtTimelineOverviewEvent$$._asbo = $dvt$$16$$._asbo;
    $DvtTimelineOverviewEvent$$._asgc = $dvt$$16$$._asgc;
    $DvtTimelineOverviewEvent$$._asgo = $dvt$$16$$._asgo;
    $DvtTimelineOverviewEvent$$._asdbs = $dvt$$16$$._asdbs;
    $DvtTimelineOverviewEvent$$._asdbc = $dvt$$16$$._asdbc;
    $DvtTimelineOverviewEvent$$._asdbw = $dvt$$16$$._asdbw;
    $DvtTimelineOverviewAutomation$$.$borderStyles$ = $DvtTimelineOverviewEvent$$;
    return $DvtTimelineOverviewAutomation$$;
  };
  $DvtTimelineOverviewParser$$.prototype.$_parseDataNode$ = function $$DvtTimelineOverviewParser$$$$$_parseDataNode$$($dvt$$16$$, $DvtTimelineOverviewAutomation$$) {
    if ($dvt$$16$$) {
      for (var $DvtTimelineOverviewEvent$$ = [], $DvtTimelineOverviewParser$$ = 0;$DvtTimelineOverviewParser$$ < $dvt$$16$$.length;$DvtTimelineOverviewParser$$++) {
        var $props$$24_treeNode$$1$$ = this.$ParseNodeAttributes$($dvt$$16$$[$DvtTimelineOverviewParser$$], $DvtTimelineOverviewAutomation$$), $props$$24_treeNode$$1$$ = new $DvtTimelineOverviewNode$$(this.$_view$, $props$$24_treeNode$$1$$);
        $DvtTimelineOverviewEvent$$.push($props$$24_treeNode$$1$$);
      }
      return $DvtTimelineOverviewEvent$$;
    }
    return null;
  };
  $DvtTimelineOverviewParser$$.prototype.$ParseNodeAttributes$ = function $$DvtTimelineOverviewParser$$$$$ParseNodeAttributes$$($dvt$$16$$, $DvtTimelineOverviewAutomation$$) {
    var $DvtTimelineOverviewEvent$$ = {}, $DvtTimelineOverviewNode$$ = "true" == $dvt$$16$$._sd;
    $DvtTimelineOverviewEvent$$.id = $dvt$$16$$.tid;
    $DvtTimelineOverviewEvent$$.$rowKey$ = $dvt$$16$$.rk;
    $DvtTimelineOverviewEvent$$.time = $dvt$$16$$.t;
    $DvtTimelineOverviewEvent$$.endTime = $dvt$$16$$.et;
    $DvtTimelineOverviewEvent$$.shape = $dvt$$16$$.s;
    $DvtTimelineOverviewNode$$ && null == $DvtTimelineOverviewEvent$$.shape && ($DvtTimelineOverviewEvent$$.shape = $DvtTimelineOverviewAutomation$$.shape);
    $DvtTimelineOverviewEvent$$.$desc$ = $dvt$$16$$.d;
    $DvtTimelineOverviewEvent$$.color = $dvt$$16$$.c;
    $DvtTimelineOverviewEvent$$.$durationFillColor$ = $dvt$$16$$.dfc;
    $DvtTimelineOverviewNode$$ && null == $DvtTimelineOverviewEvent$$.color && ($DvtTimelineOverviewEvent$$.color = $DvtTimelineOverviewAutomation$$.color);
    $DvtTimelineOverviewEvent$$.$scaleX$ = $dvt$$16$$.sx;
    $DvtTimelineOverviewNode$$ && null == $DvtTimelineOverviewEvent$$.$scaleX$ && ($DvtTimelineOverviewEvent$$.$scaleX$ = $DvtTimelineOverviewAutomation$$.$scaleX$);
    $DvtTimelineOverviewEvent$$.$scaleY$ = $dvt$$16$$.sy;
    $DvtTimelineOverviewNode$$ && null == $DvtTimelineOverviewEvent$$.$scaleY$ && ($DvtTimelineOverviewEvent$$.$scaleY$ = $DvtTimelineOverviewAutomation$$.$scaleY$);
    $DvtTimelineOverviewEvent$$.$gradient$ = $dvt$$16$$.g;
    $DvtTimelineOverviewEvent$$.opacity = $dvt$$16$$.o;
    $DvtTimelineOverviewNode$$ && null == $DvtTimelineOverviewEvent$$.opacity && ($DvtTimelineOverviewEvent$$.opacity = $DvtTimelineOverviewAutomation$$.opacity);
    return $DvtTimelineOverviewEvent$$;
  };
  $DvtTimelineOverviewParser$$.prototype.$_parseTimeAxis$ = function $$DvtTimelineOverviewParser$$$$$_parseTimeAxis$$($dvt$$16$$) {
    if ($dvt$$16$$) {
      var $DvtTimelineOverviewAutomation$$ = {width:null, height:null};
      $DvtTimelineOverviewAutomation$$.$ticks$ = $dvt$$16$$;
      return $DvtTimelineOverviewAutomation$$;
    }
    return null;
  };
  $dvt$$16$$.$Obj$.$createSubclass$($DvtTimelineOverviewNode$$, $dvt$$16$$.$Obj$);
  $DvtTimelineOverviewNode$$.prototype.Init = function $$DvtTimelineOverviewNode$$$$Init$($DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$) {
    this.$_view$ = $DvtTimelineOverviewAutomation$$;
    this.$_id$ = $DvtTimelineOverviewEvent$$.id;
    this.$_time$ = parseInt($DvtTimelineOverviewEvent$$.time);
    this.$_endTime$ = null == $DvtTimelineOverviewEvent$$.endTime ? null : parseInt($DvtTimelineOverviewEvent$$.endTime);
    this.$_shape$ = $dvt$$16$$.$SimpleMarker$.$CIRCLE$;
    "square" == $DvtTimelineOverviewEvent$$.shape ? this.$_shape$ = $dvt$$16$$.$SimpleMarker$.$RECTANGLE$ : "plus" == $DvtTimelineOverviewEvent$$.shape ? this.$_shape$ = $dvt$$16$$.$SimpleMarker$.$PLUS$ : "diamond" == $DvtTimelineOverviewEvent$$.shape ? this.$_shape$ = $dvt$$16$$.$SimpleMarker$.$DIAMOND$ : "triangleUp" == $DvtTimelineOverviewEvent$$.shape ? this.$_shape$ = $dvt$$16$$.$SimpleMarker$.$TRIANGLE_UP$ : "triangleDown" == $DvtTimelineOverviewEvent$$.shape && (this.$_shape$ = $dvt$$16$$.$SimpleMarker$.$TRIANGLE_DOWN$);
    this.$_desc$ = $DvtTimelineOverviewEvent$$.$desc$;
    this.$_color$ = $DvtTimelineOverviewEvent$$.color;
    this.$_gradient$ = $DvtTimelineOverviewEvent$$.$gradient$;
    null != $DvtTimelineOverviewEvent$$.opacity && (this.$_opacity$ = parseFloat($DvtTimelineOverviewEvent$$.opacity));
    null != $DvtTimelineOverviewEvent$$.$scaleX$ && (this.$_scaleX$ = parseFloat($DvtTimelineOverviewEvent$$.$scaleX$));
    null != $DvtTimelineOverviewEvent$$.$scaleY$ && (this.$_scaleY$ = parseFloat($DvtTimelineOverviewEvent$$.$scaleY$));
    null != $DvtTimelineOverviewEvent$$.$durationFillColor$ && (this.$_durationFillColor$ = $DvtTimelineOverviewEvent$$.$durationFillColor$);
  };
  $DvtTimelineOverviewNode$$.prototype.getId = function $$DvtTimelineOverviewNode$$$$getId$() {
    return this.$_id$;
  };
  $DvtTimelineOverviewNode$$.prototype.getTime = function $$DvtTimelineOverviewNode$$$$getTime$() {
    return this.$_time$;
  };
  $DvtTimelineOverviewNode$$.prototype.$getEndTime$ = function $$DvtTimelineOverviewNode$$$$$getEndTime$$() {
    return this.$_endTime$;
  };
  $DvtTimelineOverviewNode$$.prototype.$getScaleX$ = function $$DvtTimelineOverviewNode$$$$$getScaleX$$() {
    return this.$_scaleX$;
  };
  $DvtTimelineOverviewNode$$.prototype.$getScaleY$ = function $$DvtTimelineOverviewNode$$$$$getScaleY$$() {
    return this.$_scaleY$;
  };
  $DvtTimelineOverviewNode$$.prototype.$getColor$ = function $$DvtTimelineOverviewNode$$$$$getColor$$() {
    return this.$_color$;
  };
  $DvtTimelineOverviewNode$$.prototype.$getShape$ = function $$DvtTimelineOverviewNode$$$$$getShape$$() {
    return this.$_shape$;
  };
  $DvtTimelineOverviewNode$$.prototype.$getOpacity$ = function $$DvtTimelineOverviewNode$$$$$getOpacity$$() {
    return this.$_opacity$;
  };
  $DvtTimelineOverviewNode$$.prototype.$getDisplayable$ = function $$DvtTimelineOverviewNode$$$$$getDisplayable$$() {
    return this.$_displayable$;
  };
  $DvtTimelineOverviewNode$$.prototype.$setDisplayable$ = function $$DvtTimelineOverviewNode$$$$$setDisplayable$$($dvt$$16$$) {
    this.$_displayable$ = $dvt$$16$$;
  };
  $DvtTimelineOverviewNode$$.prototype.$getX$ = function $$DvtTimelineOverviewNode$$$$$getX$$() {
    return this.$_x$;
  };
  $DvtTimelineOverviewNode$$.prototype.$setX$ = function $$DvtTimelineOverviewNode$$$$$setX$$($dvt$$16$$) {
    this.$_x$ = $dvt$$16$$;
  };
  $DvtTimelineOverviewNode$$.prototype.$getY$ = function $$DvtTimelineOverviewNode$$$$$getY$$() {
    return this.$_y$;
  };
  $DvtTimelineOverviewNode$$.prototype.$setY$ = function $$DvtTimelineOverviewNode$$$$$setY$$($dvt$$16$$) {
    this.$_y$ = $dvt$$16$$;
  };
  $dvt$$16$$.$Obj$.$createSubclass$($DvtTimelineOverviewEvent$$, $dvt$$16$$.$OverviewEvent$);
  $DvtTimelineOverviewEvent$$.$TYPE$ = "timeline";
  $DvtTimelineOverviewEvent$$.$SUBTYPE_HIGHLIGHT$ = "highlight";
  $DvtTimelineOverviewEvent$$.$SUBTYPE_UNHIGHLIGHT$ = "unhighlight";
  $DvtTimelineOverviewEvent$$.$SUBTYPE_SELECTION$ = "selection";
  $DvtTimelineOverviewEvent$$.$SUBTYPE_SCROLL_TIME$ = $dvt$$16$$.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$;
  $DvtTimelineOverviewEvent$$.$SUBTYPE_SCROLL_POS$ = $dvt$$16$$.$OverviewEvent$.$SUBTYPE_SCROLL_POS$;
  $DvtTimelineOverviewEvent$$.$SUBTYPE_RANGECHANGE$ = $dvt$$16$$.$OverviewEvent$.$SUBTYPE_RANGECHANGE$;
  $DvtTimelineOverviewEvent$$.$SUBTYPE_RANGECHANGING$ = "rangeChanging";
  $DvtTimelineOverviewEvent$$.$SUBTYPE_DROPCALLBACK$ = $dvt$$16$$.$OverviewEvent$.$SUBTYPE_PRE_RANGECHANGE$;
  $DvtTimelineOverviewEvent$$.$ITEM_ID_KEY$ = "itemId";
  $DvtTimelineOverviewEvent$$.$MULTI_SELECT_KEY$ = "multiSelect";
  $DvtTimelineOverviewEvent$$.$START_POS$ = $dvt$$16$$.$OverviewEvent$.$START_POS$;
  $DvtTimelineOverviewEvent$$.$END_POS$ = $dvt$$16$$.$OverviewEvent$.$END_POS$;
  $DvtTimelineOverviewEvent$$.prototype.$setItemId$ = function $$DvtTimelineOverviewEvent$$$$$setItemId$$($dvt$$16$$) {
    this.$addParam$($DvtTimelineOverviewEvent$$.$ITEM_ID_KEY$, $dvt$$16$$);
  };
  $DvtTimelineOverviewEvent$$.prototype.$getItemId$ = function $$DvtTimelineOverviewEvent$$$$$getItemId$$() {
    return this.$getParamValue$($DvtTimelineOverviewEvent$$.$ITEM_ID_KEY$);
  };
  $DvtTimelineOverviewEvent$$.prototype.$setMultiSelect$ = function $$DvtTimelineOverviewEvent$$$$$setMultiSelect$$($dvt$$16$$) {
    this.$addParam$($DvtTimelineOverviewEvent$$.$MULTI_SELECT_KEY$, $dvt$$16$$);
  };
  $DvtTimelineOverviewEvent$$.prototype.$isMultiSelect$ = function $$DvtTimelineOverviewEvent$$$$$isMultiSelect$$() {
    var $dvt$$16$$ = this.$getParamValue$($DvtTimelineOverviewEvent$$.$MULTI_SELECT_KEY$);
    return null != $dvt$$16$$ ? $dvt$$16$$ : !1;
  };
  $dvt$$16$$.$Obj$.$createSubclass$($DvtTimelineOverviewAutomation$$, $dvt$$16$$.$Automation$);
  $DvtTimelineOverviewAutomation$$.$NODE_ID_PREFIX$ = "marker";
  $DvtTimelineOverviewAutomation$$.$WINDOW_ID$ = "range_window";
  $DvtTimelineOverviewAutomation$$.$START_HANDLE_ID$ = "range_start_handle";
  $DvtTimelineOverviewAutomation$$.$END_HANDLE_ID$ = "range_end_handle";
  $DvtTimelineOverviewAutomation$$.$AUTOMATION_NO_EVENT$ = -1;
  $DvtTimelineOverviewAutomation$$.$AUTOMATION_MOUSE_CLICK$ = 0;
  $DvtTimelineOverviewAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineOverviewAutomation$$$$$GetSubIdForDomElement$$($DvtTimelineOverviewEvent$$) {
    var $DvtTimelineOverviewNode$$ = $DvtTimelineOverviewEvent$$.getId();
    if ($DvtTimelineOverviewEvent$$ instanceof $dvt$$16$$.$SimpleMarker$) {
      $DvtTimelineOverviewEvent$$ = $DvtTimelineOverviewNode$$.split(":");
      if (4 != $DvtTimelineOverviewEvent$$.length) {
        return null;
      }
      $DvtTimelineOverviewNode$$ = this.$_overview$.$getSeriesIds$();
      if (null != $DvtTimelineOverviewNode$$ && ($DvtTimelineOverviewNode$$ = $dvt$$16$$.$ArrayUtils$.$getIndex$($DvtTimelineOverviewNode$$, $DvtTimelineOverviewEvent$$[1]), -1 < $DvtTimelineOverviewNode$$)) {
        return "marker[" + $DvtTimelineOverviewNode$$ + "][" + $DvtTimelineOverviewEvent$$[2] + "]";
      }
    } else {
      if ("window" == $DvtTimelineOverviewNode$$) {
        return $DvtTimelineOverviewAutomation$$.$WINDOW_ID$;
      }
      if ("lh" == $DvtTimelineOverviewNode$$ || "lhb" == $DvtTimelineOverviewNode$$ || "lbgrh" == $DvtTimelineOverviewNode$$) {
        return $DvtTimelineOverviewAutomation$$.$START_HANDLE_ID$;
      }
      if ("rh" == $DvtTimelineOverviewNode$$ || "rhb" == $DvtTimelineOverviewNode$$ || "rbgrh" == $DvtTimelineOverviewNode$$) {
        return $DvtTimelineOverviewAutomation$$.$END_HANDLE_ID$;
      }
      if ("grpy" == $DvtTimelineOverviewNode$$) {
        return $DvtTimelineOverviewEvent$$ = $DvtTimelineOverviewEvent$$.getParent().$getChildBefore$($DvtTimelineOverviewEvent$$), this.$GetSubIdForDomElement$($DvtTimelineOverviewEvent$$);
      }
    }
    return null;
  };
  $DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineOverviewAutomation$$$$$getDomElementForSubId$$($dvt$$16$$) {
    var $DvtTimelineOverviewEvent$$ = $DvtTimelineOverviewAutomation$$.$_convertSubIdToArray$($dvt$$16$$);
    if ($DvtTimelineOverviewEvent$$ && 3 == $DvtTimelineOverviewEvent$$.length && $DvtTimelineOverviewEvent$$[0] == $DvtTimelineOverviewAutomation$$.$NODE_ID_PREFIX$) {
      if ($dvt$$16$$ = this.$_overview$.$getSeriesIds$(), null != $dvt$$16$$) {
        var $DvtTimelineOverviewNode$$ = parseInt($DvtTimelineOverviewEvent$$[1], 10);
        if (-1 < $DvtTimelineOverviewNode$$ && $DvtTimelineOverviewNode$$ < $dvt$$16$$.length) {
          return ($DvtTimelineOverviewEvent$$ = $DvtTimelineOverviewAutomation$$.$_findMarker$(this.$_overview$.$_markers$, $dvt$$16$$[$DvtTimelineOverviewNode$$], $DvtTimelineOverviewEvent$$[2])) ? $DvtTimelineOverviewEvent$$.$getDisplayable$().$getElem$() : null;
        }
      }
    } else {
      if ($dvt$$16$$ == $DvtTimelineOverviewAutomation$$.$WINDOW_ID$) {
        return this.$_overview$.$getSlidingWindow$().$getElem$();
      }
      if ($dvt$$16$$ == $DvtTimelineOverviewAutomation$$.$START_HANDLE_ID$) {
        return this.$_overview$.$getLeftHandle$().$getElem$();
      }
      if ($dvt$$16$$ == $DvtTimelineOverviewAutomation$$.$END_HANDLE_ID$) {
        return this.$_overview$.$getRightHandle$().$getElem$();
      }
    }
    return null;
  };
  $DvtTimelineOverviewAutomation$$.prototype.click = function $$DvtTimelineOverviewAutomation$$$$click$($dvt$$16$$) {
    this.$processSubId$($dvt$$16$$, $DvtTimelineOverviewAutomation$$.$AUTOMATION_MOUSE_CLICK$);
  };
  $DvtTimelineOverviewAutomation$$.prototype.$processSubId$ = function $$DvtTimelineOverviewAutomation$$$$$processSubId$$($dvt$$16$$, $DvtTimelineOverviewEvent$$) {
    void 0 === $DvtTimelineOverviewEvent$$ && ($DvtTimelineOverviewEvent$$ = $DvtTimelineOverviewAutomation$$.$AUTOMATION_NO_EVENT$);
    if (null != $dvt$$16$$ && $DvtTimelineOverviewEvent$$ != $DvtTimelineOverviewAutomation$$.$AUTOMATION_NO_EVENT$ && $DvtTimelineOverviewEvent$$ == $DvtTimelineOverviewAutomation$$.$AUTOMATION_MOUSE_CLICK$) {
      var $DvtTimelineOverviewNode$$ = $DvtTimelineOverviewAutomation$$.$_convertSubIdToArray$($dvt$$16$$);
      $DvtTimelineOverviewNode$$ && 3 == $DvtTimelineOverviewNode$$.length && $DvtTimelineOverviewNode$$[0] == $DvtTimelineOverviewAutomation$$.$NODE_ID_PREFIX$ && ($DvtTimelineOverviewNode$$ = $DvtTimelineOverviewAutomation$$.$_findMarker$(this.$_overview$.$_markers$, $DvtTimelineOverviewNode$$[1], $DvtTimelineOverviewNode$$[2])) && this.$_overview$.$HandleMarkerClick$($DvtTimelineOverviewNode$$.$getDisplayable$(), !1);
    }
  };
  $DvtTimelineOverviewAutomation$$.$_convertSubIdToArray$ = function $$DvtTimelineOverviewAutomation$$$$_convertSubIdToArray$$($dvt$$16$$) {
    $dvt$$16$$ = $dvt$$16$$.split("[");
    for (var $DvtTimelineOverviewAutomation$$ = $dvt$$16$$.length, $DvtTimelineOverviewEvent$$ = 1;$DvtTimelineOverviewEvent$$ < $DvtTimelineOverviewAutomation$$;$DvtTimelineOverviewEvent$$++) {
      var $DvtTimelineOverviewNode$$ = $dvt$$16$$[$DvtTimelineOverviewEvent$$], $DvtTimelineOverviewNode$$ = $DvtTimelineOverviewNode$$.substr(0, $DvtTimelineOverviewNode$$.length - 1), $DvtTimelineOverviewParser$$ = parseFloat($DvtTimelineOverviewNode$$), $DvtTimelineOverviewNode$$ = isNaN($DvtTimelineOverviewParser$$) ? $DvtTimelineOverviewNode$$ : $DvtTimelineOverviewParser$$;
      $dvt$$16$$[$DvtTimelineOverviewEvent$$] = $DvtTimelineOverviewNode$$;
    }
    return $dvt$$16$$;
  };
  $DvtTimelineOverviewAutomation$$.$_findMarker$ = function $$DvtTimelineOverviewAutomation$$$$_findMarker$$($dvt$$16$$, $DvtTimelineOverviewAutomation$$, $DvtTimelineOverviewEvent$$) {
    $DvtTimelineOverviewAutomation$$ = "tl1:" + $DvtTimelineOverviewAutomation$$ + ":" + $DvtTimelineOverviewEvent$$ + ":";
    for ($DvtTimelineOverviewEvent$$ = 0;$DvtTimelineOverviewEvent$$ < $dvt$$16$$.length;$DvtTimelineOverviewEvent$$++) {
      var $DvtTimelineOverviewNode$$ = $dvt$$16$$[$DvtTimelineOverviewEvent$$], $DvtTimelineOverviewParser$$ = $DvtTimelineOverviewNode$$.getId();
      if (null != $DvtTimelineOverviewParser$$ && 0 == $DvtTimelineOverviewParser$$.indexOf($DvtTimelineOverviewAutomation$$)) {
        return $DvtTimelineOverviewNode$$;
      }
    }
    return null;
  };
  $dvt$$16$$.$exportProperty$($dvt$$16$$, "TimelineOverview", $dvt$$16$$.$TimelineOverview$);
  $dvt$$16$$.$exportProperty$($dvt$$16$$.$TimelineOverview$, "newInstance", $dvt$$16$$.$TimelineOverview$.newInstance);
  $dvt$$16$$.$exportProperty$($dvt$$16$$.$TimelineOverview$.prototype, "render", $dvt$$16$$.$TimelineOverview$.prototype.$render$);
  $dvt$$16$$.$exportProperty$($dvt$$16$$.$TimelineOverview$.prototype, "getAutomation", $dvt$$16$$.$TimelineOverview$.prototype.$getAutomation$);
  $dvt$$16$$.$exportProperty$($dvt$$16$$.$TimelineOverview$.prototype, "getDurationColorMap", $dvt$$16$$.$TimelineOverview$.prototype.$getDurationColorMap$);
  $dvt$$16$$.$exportProperty$($DvtTimelineOverviewAutomation$$.prototype, "getDomElementForSubId", $DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$);
})(dvt);
