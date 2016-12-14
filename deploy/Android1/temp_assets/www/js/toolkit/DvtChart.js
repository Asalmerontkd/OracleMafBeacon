(function($dvt$$2$$) {
  function $DvtSparkChartEventManager$$($dvt$$2$$) {
    this.Init($dvt$$2$$.$getCtx$(), $dvt$$2$$.dispatchEvent, $dvt$$2$$);
    this.$_sparkChart$ = $dvt$$2$$;
  }
  function $DvtSparkChartDefaults$$() {
    this.Init({skyros:$DvtSparkChartDefaults$$.$VERSION_1$, alta:$DvtSparkChartDefaults$$.$SKIN_ALTA$});
  }
  function $DvtSparkChartAutomation$$($dvt$$2$$) {
    this.$_sparkChart$ = $dvt$$2$$;
  }
  function $DvtChartPieLabelUtils$$() {
  }
  function $DvtChartPieLabelInfo$$() {
    this.$_init$();
  }
  function $DvtChartPieRenderUtils$$() {
  }
  function $DvtChartDataChangePyramidSlice$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartDataChangeFunnelSlice$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartDataChangeRangeMarker$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartDataChangeMarker$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartDataChangeLineArea$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartDataChangeBoxAndWhisker$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartDataChangeBar$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartDataChangeAbstract$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartDataChange$$($DvtSparkChartEventManager$$) {
    this.$Options$ = $DvtSparkChartEventManager$$.$Options$;
    this.$Peers$ = $DvtSparkChartEventManager$$.$Peers$;
    this.$SeriesStyleArray$ = $DvtSparkChartEventManager$$.$SeriesStyleArray$;
    this.Cache = $DvtSparkChartEventManager$$.Cache;
    this.$pieChart$ = $DvtSparkChartEventManager$$.$pieChart$;
    this.$_optionsCache$ = new $dvt$$2$$.$BaseComponentCache$;
    this.$_cache$ = new $dvt$$2$$.$BaseComponentCache$;
  }
  function $DvtChartAnimOnDC$$() {
  }
  function $DvtChartAnimOnDisplay$$() {
  }
  function $DvtChartPieSlice$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartPie$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
  }
  function $DvtChartPyramidSlice$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$);
  }
  function $DvtChartFunnelSlice$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$);
  }
  function $DvtChartDataCursor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  }
  function $DvtChartRangeMarker$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$) {
    this.Init($dvt$$2$$);
    this.$_markerSize$ = $DvtChartAxisUtils$$;
    this.$_isInvisible$ = $DvtChartPieLabelUtils$$;
    this.$_drawPath$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
  }
  function $DvtChartPolarBar$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$) {
    this.Init($dvt$$2$$.$getCtx$());
    this.$_axisCoord$ = $DvtSparkChartEventManager$$;
    this.$_availSpace$ = $DvtChartPieLabelUtils$$.clone();
    this.$_bbox$ = null;
    this.$_dataItemGaps$ = $DvtChartStyleUtils$$.$getDataItemGaps$($dvt$$2$$) * $DvtChartPolarBar$$.$_MAX_DATA_ITEM_GAP$;
    this.$_setBarCoords$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$);
  }
  function $DvtChartOverview$$($dvt$$2$$) {
    this.Init($dvt$$2$$.$getCtx$(), $dvt$$2$$.$processEvent$, $dvt$$2$$);
    this.$_parentChart$ = $dvt$$2$$;
    this.$_chart$ = $dvt$$2$$.$overview$ ? $dvt$$2$$.$overview$.$_chart$ : null;
    this.$_id$ = $dvt$$2$$.getId() + "_overview";
  }
  function $DvtChartLineMarker$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, null, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartRefObjUtils$$, null, null, !0);
    $DvtChartAxisUtils$$ && this.$setStroke$($DvtChartLineMarker$$.$DEFAULT_STROKE$);
  }
  function $DvtChartLineArea$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$) {
    this.Init($dvt$$2$$.$getCtx$());
    this.$_chart$ = $dvt$$2$$;
    this.$_bArea$ = $DvtSparkChartEventManager$$;
    this.$_availSpace$ = $DvtSparkChartDefaults$$;
    this.$_baseline$ = $DvtSparkChartAutomation$$;
    this.$_style$ = $DvtChartRefObjUtils$$;
    this.$_className$ = $DvtChartAxisUtils$$;
    this.$_fill$ = $DvtChartPieLabelUtils$$;
    this.$_stroke$ = $DvtChartPieLabelInfo$$;
    this.$_type$ = $DvtChartPieRenderUtils$$;
    this.$_baseType$ = $DvtChartSeriesEffectUtils$$ ? $DvtChartSeriesEffectUtils$$ : $DvtChartPieRenderUtils$$;
    this.$_indicatorMap$ = {};
    this.$setCoords$($DvtChartDataChangePyramidSlice$$, $DvtChartRangeMarker$$);
  }
  function $DvtChartCoord$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    this.x = $dvt$$2$$;
    this.$y1$ = $DvtSparkChartEventManager$$;
    this.$y2$ = $DvtSparkChartDefaults$$;
    this.$groupIndex$ = $DvtSparkChartAutomation$$;
    this.group = $DvtChartRefObjUtils$$;
    this.$filtered$ = $DvtChartAxisUtils$$;
  }
  function $DvtChartCandlestick$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$) {
    this.Init($dvt$$2$$);
    $DvtSparkChartDefaults$$ = Math.max(2 * Math.round($DvtSparkChartDefaults$$ / 2), 1);
    var $DvtChartPieLabelInfo$$ = Math.min(2 * Math.ceil($DvtChartCandlestick$$.$_BAR_WIDTH$ * $DvtSparkChartDefaults$$ / 2), $DvtSparkChartDefaults$$), $DvtChartPieRenderUtils$$ = Math.round($DvtSparkChartEventManager$$) - $DvtSparkChartDefaults$$ / 2;
    $DvtSparkChartDefaults$$ = $DvtChartPieRenderUtils$$ + $DvtSparkChartDefaults$$;
    null != $DvtChartAxisUtils$$ && null != $DvtChartPieLabelUtils$$ && ($DvtSparkChartEventManager$$ = Math.round($DvtSparkChartEventManager$$) - $DvtChartPieLabelInfo$$ / 2, $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$ + $DvtChartPieLabelInfo$$, this.$_rangeShape$ = new $DvtChartSelectableRectangularPolygon$$($dvt$$2$$, [$DvtSparkChartEventManager$$, $DvtChartAxisUtils$$, $DvtChartPieLabelInfo$$, $DvtChartAxisUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, 
    $DvtChartPieLabelUtils$$]), this.$addChild$(this.$_rangeShape$));
    this.$_changeShape$ = new $DvtChartSelectableRectangularPolygon$$($dvt$$2$$, [$DvtChartPieRenderUtils$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$, $DvtChartPieRenderUtils$$, $DvtChartRefObjUtils$$]);
    this.$addChild$(this.$_changeShape$);
    this.$setPixelHinting$();
  }
  function $DvtChartBoxAndWhisker$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangePyramidSlice$$) {
    this.Init($DvtSparkChartEventManager$$.$getCtx$());
    this.$_chart$ = $DvtSparkChartEventManager$$;
    this.$_bHoriz$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$);
    this.$_styleOptions$ = $DvtChartDataChangePyramidSlice$$;
    this.$_innerColor$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$(this.$_chart$);
    this.$_outerColor$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$);
    this.$_hoverColor$ = $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$(this.$_styleOptions$._color);
    $DvtChartDataChangePyramidSlice$$ = $DvtSparkChartDefaults$$ - $DvtSparkChartAutomation$$ / 2;
    $DvtSparkChartDefaults$$ += $DvtSparkChartAutomation$$ / 2;
    0 < $DvtChartStyleUtils$$.$getDataItemGaps$($DvtSparkChartEventManager$$) && $DvtSparkChartAutomation$$ > $DvtChartBar$$.$_MIN_BAR_WIDTH_FOR_GAPS$ && $DvtSparkChartDefaults$$--;
    this.$_render$($DvtChartDataChangePyramidSlice$$, $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$);
  }
  function $DvtChartBar$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    this.Init($dvt$$2$$.$getCtx$());
    this.$_bHoriz$ = $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$);
    this.$_bStacked$ = $DvtChartTypeUtils$$.$isStacked$($dvt$$2$$);
    this.$_barGapRatio$ = $DvtChartStyleUtils$$.$getBarGapRatio$($dvt$$2$$);
    this.$_dataItemGaps$ = $DvtChartStyleUtils$$.$getDataItemGaps$($dvt$$2$$);
    this.$_axisCoord$ = $DvtSparkChartEventManager$$;
    this.$_setBarCoords$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, !0);
  }
  function $DvtChartAxis$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  }
  function $DvtChartSelectableRectangularPolygon$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.$_x1$ = Math.min($DvtSparkChartEventManager$$[0], $DvtSparkChartEventManager$$[4]);
    this.$_x2$ = Math.max($DvtSparkChartEventManager$$[0], $DvtSparkChartEventManager$$[4]);
    this.$_y1$ = Math.min($DvtSparkChartEventManager$$[1], $DvtSparkChartEventManager$$[5]);
    this.$_y2$ = Math.max($DvtSparkChartEventManager$$[1], $DvtSparkChartEventManager$$[5]);
    this.Init($dvt$$2$$, [this.$_x1$, this.$_y1$, this.$_x2$, this.$_y1$, this.$_x2$, this.$_y2$, this.$_x1$, this.$_y2$], $DvtSparkChartDefaults$$);
  }
  function $DvtChartSelectableWedge$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangePyramidSlice$$) {
    this.Init($dvt$$2$$, null, $DvtChartDataChangePyramidSlice$$);
    this.$setWedgeParams$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$);
  }
  function $DvtChartDataCursorHandler$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartDefaults$$() {
    this.Init({skyros:$DvtChartDefaults$$.$VERSION_1$, alta:$DvtChartDefaults$$.$SKIN_ALTA$, next:$DvtChartDefaults$$.$SKIN_NEXT$});
  }
  function $DvtChartDataItem$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.id = $dvt$$2$$;
    this.series = $DvtSparkChartEventManager$$;
    this.group = $DvtSparkChartDefaults$$;
  }
  function $DvtChartRefObjPeer$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
  }
  function $DvtChartObjPeer$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$);
  }
  function $DvtChartKeyboardHandler$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartEventManager$$($DvtSparkChartEventManager$$) {
    $DvtChartEventManager$$.$superclass$.Init.call(this, $DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
    this.$_chart$ = $DvtSparkChartEventManager$$;
    this.$_dragMode$ = null;
    this.$_dragButtonsVisible$ = $dvt$$2$$.$Agent$.$isTouchDevice$();
    this.$_stageAbsolutePosition$ = this.$_marqueeSelectHandler$ = this.$_marqueeZoomHandler$ = this.$_panZoomHandler$ = this.$_dataCursorHandler$ = this.$selectButton$ = this.$zoomButton$ = this.$panButton$ = null;
  }
  function $DvtChartAutomation$$($dvt$$2$$) {
    this.$_chart$ = $dvt$$2$$;
    this.$_options$ = this.$_chart$.$getOptions$();
    this.$_legend$ = this.$_chart$.$legend$;
    this.$_xAxis$ = this.$_chart$.$xAxis$;
    this.$_yAxis$ = this.$_chart$.$yAxis$;
    this.$_y2Axis$ = this.$_chart$.$y2Axis$;
    this.$_legendAutomation$ = this.$_legend$ ? this.$_legend$.$getAutomation$() : null;
    this.$_xAxisAutomation$ = this.$_xAxis$ ? this.$_xAxis$.$getAutomation$() : null;
    this.$_yAxisAutomation$ = this.$_yAxis$ ? this.$_yAxis$.$getAutomation$() : null;
    this.$_y2AxisAutomation$ = this.$_y2Axis$ ? this.$_y2Axis$.$getAutomation$() : null;
  }
  $dvt$$2$$.$Chart$ = function $$dvt$$2$$$$Chart$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $dvt$$2$$.$Obj$.$createSubclass$($dvt$$2$$.$Chart$, $dvt$$2$$.$BaseComponent$);
  $dvt$$2$$.$Chart$.newInstance = function $$dvt$$2$$$$Chart$$newInstance$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return new $dvt$$2$$.$Chart$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
  };
  $dvt$$2$$.$Chart$.$getDefaults$ = function $$dvt$$2$$$$Chart$$$getDefaults$$($dvt$$2$$) {
    return (new $DvtChartDefaults$$).$getDefaults$($dvt$$2$$);
  };
  $dvt$$2$$.$Chart$.prototype.Init = function $$dvt$$2$$$$Chart$$$Init$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $dvt$$2$$.$Chart$.$superclass$.Init.call(this, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    this.$Defaults$ = new $DvtChartDefaults$$;
    this.$EventManager$ = new $DvtChartEventManager$$(this);
    this.$EventManager$.$addListeners$(this);
    $dvt$$2$$.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(this.$CreateKeyboardHandler$(this.$EventManager$));
    this.setId("chart1000" + Math.floor(1E9 * Math.random()));
    this.$pieCenterDiv$ = this.$pieChart$ = this.$dragButtons$ = this.$yScrollbar$ = this.$xScrollbar$ = this.$overview$ = this.$y2Axis$ = this.$yAxis$ = this.$xAxis$ = this.$legend$ = null;
    this.$Peers$ = [];
    this.$SeriesStyleArray$ = [];
    this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0;
    this.$_rawOptions$ = this.$_dataLabels$ = null;
  };
  $dvt$$2$$.$Chart$.prototype.$GetComponentDescription$ = function $$dvt$$2$$$$Chart$$$$GetComponentDescription$$() {
    var $DvtSparkChartEventManager$$ = this.$getOptions$(), $DvtSparkChartDefaults$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartEventManager$$, "componentName", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "CHART"), $DvtSparkChartAutomation$$ = "", $DvtChartRefObjUtils$$ = $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "ARIA_LABEL_DESC_DELIMITER");
    $DvtSparkChartEventManager$$.title.text && ($DvtSparkChartAutomation$$ += this.$Options$.title.text, $DvtSparkChartEventManager$$.subtitle.text && ($DvtSparkChartAutomation$$ += $DvtChartRefObjUtils$$ + this.$Options$.subtitle.text));
    $DvtSparkChartEventManager$$.footnote.text && ($DvtSparkChartAutomation$$ = 0 == $DvtSparkChartAutomation$$.length ? this.$Options$.footnote.text : $DvtSparkChartAutomation$$.concat($DvtChartRefObjUtils$$, this.$Options$.footnote.text));
    return 0 < $DvtSparkChartAutomation$$.length ? $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartEventManager$$, "labelAndValue", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$]) : $DvtSparkChartDefaults$$;
  };
  $dvt$$2$$.$Chart$.prototype.$SetOptions$ = function $$dvt$$2$$$$Chart$$$$SetOptions$$($DvtSparkChartEventManager$$) {
    if ($DvtSparkChartEventManager$$) {
      if (this.$_rawOptions$ = $DvtSparkChartEventManager$$, this.$Options$ = this.$Defaults$.$calcOptions$($DvtSparkChartEventManager$$), "horizontalBar" == this.$Options$.type && (this.$Options$.type = "bar", this.$Options$.orientation = "horizontal"), this.$_optionsCache$.$clearCache$(), $DvtChartDataUtils$$.$processDataObject$(this), !$dvt$$2$$.$Agent$.$isEnvironmentBrowser$() || $DvtChartDataUtils$$.$hasData$(this) && 5E3 < $DvtChartDataUtils$$.$getSeriesCount$(this) * $DvtChartDataUtils$$.$getGroupCount$(this)) {
        this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none";
      }
    } else {
      this.$Options$ || (this.$Options$ = this.$GetDefaults$());
    }
    $DvtSparkChartEventManager$$ = this.$Options$.selectionMode;
    this.$_selectionHandler$ = "single" == $DvtSparkChartEventManager$$ ? new $dvt$$2$$.$SelectionHandler$($dvt$$2$$.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == $DvtSparkChartEventManager$$ ? new $dvt$$2$$.$SelectionHandler$($dvt$$2$$.$SelectionHandler$.$TYPE_MULTIPLE$) : null;
    this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$);
    if ($DvtSparkChartEventManager$$ = this.$Options$._spb) {
      this.$_popupBehaviors$ = {};
      for (var $DvtSparkChartDefaults$$ in $DvtSparkChartEventManager$$) {
        for (var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$], $DvtChartRefObjUtils$$ = 0;$DvtChartRefObjUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartRefObjUtils$$++) {
          this.$_popupBehaviors$[$DvtSparkChartDefaults$$] || (this.$_popupBehaviors$[$DvtSparkChartDefaults$$] = []);
          var $DvtChartAxisUtils$$ = $DvtSparkChartAutomation$$[$DvtChartRefObjUtils$$];
          this.$_popupBehaviors$[$DvtSparkChartDefaults$$].push(new $dvt$$2$$.$ShowPopupBehavior$($DvtChartAxisUtils$$.popupId, $DvtChartAxisUtils$$.triggerType, $DvtChartAxisUtils$$.alignId, $DvtChartAxisUtils$$.align));
        }
      }
    }
  };
  $dvt$$2$$.$Chart$.prototype.$render$ = function $$dvt$$2$$$$Chart$$$$render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    this.$_cache$.$clearCache$();
    var $DvtChartRefObjUtils$$ = this.$getCtx$(), $DvtChartAxisUtils$$ = this.$Options$ ? this.$Options$.animationOnDataChange : "none", $DvtChartPieLabelUtils$$ = "none" != $DvtChartAxisUtils$$ ? new $DvtChartDataChange$$(this) : null, $DvtChartPieLabelInfo$$ = this.$__cacheChartFocus$();
    this.$_container$ && this.$__cleanUp$();
    this.$SetOptions$($DvtSparkChartEventManager$$);
    isNaN($DvtSparkChartDefaults$$) || isNaN($DvtSparkChartAutomation$$) || (this.$Width$ = $DvtSparkChartDefaults$$, this.$Height$ = $DvtSparkChartAutomation$$);
    $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Container$($DvtChartRefObjUtils$$);
    this.$addChild$($DvtSparkChartDefaults$$);
    $DvtChartRenderer$$.$render$(this, $DvtSparkChartDefaults$$, new $dvt$$2$$.$Rectangle$(0, 0, this.$Width$, this.$Height$));
    $DvtChartTypeUtils$$.$isSpark$(this) && this.$EventManager$.$removeListeners$(this);
    this.$StopAnimation$();
    var $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.$getAnimationOnDisplay$(this);
    $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getAnimationDuration$(this);
    var $DvtChartDataChangePyramidSlice$$ = new $dvt$$2$$.$Rectangle$(0, 0, this.$Width$, this.$Height$), $DvtChartSeriesEffectUtils$$ = !1;
    this.$_container$ ? "none" != $DvtChartAxisUtils$$ && $DvtSparkChartEventManager$$ && ((this.$Animation$ = $dvt$$2$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$($DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, this.$_container$, $DvtSparkChartDefaults$$, $DvtChartDataChangePyramidSlice$$, $DvtSparkChartAutomation$$)) ? $DvtChartSeriesEffectUtils$$ = !0 : "auto" == $DvtChartAxisUtils$$ && this.$getPlotArea$() && ($DvtSparkChartEventManager$$ = this.$_plotAreaSpace$, this.$_delContainer$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$(this, 
    this.$_container$, new $dvt$$2$$.$Rectangle$(0, 0, $DvtSparkChartEventManager$$.$w$, $DvtSparkChartEventManager$$.$h$)), this.$Animation$ = $DvtChartAnimOnDC$$.$createAnimation$($DvtChartPieLabelUtils$$, this, $DvtChartAxisUtils$$, $DvtSparkChartAutomation$$, this.$_delContainer$), 0 < this.$_delContainer$.$getNumChildren$() && this.$getPlotArea$().$addChild$(this.$_delContainer$))) : "none" != $DvtChartPieRenderUtils$$ && (this.$Animation$ = $dvt$$2$$.$BlackBoxAnimationHandler$.$getInAnimation$($DvtChartRefObjUtils$$, 
    $DvtChartPieRenderUtils$$, $DvtSparkChartDefaults$$, $DvtChartDataChangePyramidSlice$$, $DvtSparkChartAutomation$$), this.$Animation$ || "auto" != $DvtChartPieRenderUtils$$ || (this.$Animation$ = $DvtChartAnimOnDisplay$$.$createAnimation$(this, $DvtChartPieRenderUtils$$, $DvtSparkChartAutomation$$)));
    this.$Animation$ && (this.$EventManager$.$removeListeners$(this), $dvt$$2$$.$Playable$.$appendOnEnd$(this.$Animation$, this.$_onAnimationEnd$, this), this.$Animation$.play());
    $DvtChartSeriesEffectUtils$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$(), this.$_container$ = null);
    this.$_container$ = $DvtSparkChartDefaults$$;
    this.$_dataCursor$ = $DvtChartRenderer$$.$renderDataCursor$(this);
    this.$UpdateAriaAttributes$();
    this.$__restoreChartFocus$($DvtChartPieLabelInfo$$);
    this.$Animation$ || this.$RenderComplete$();
  };
  $dvt$$2$$.$Chart$.prototype.$__cleanUp$ = function $$dvt$$2$$$$Chart$$$$__cleanUp$$() {
    this.$_dataCursor$ && (this.removeChild(this.$_dataCursor$), this.$_dataCursor$ = null);
    this.$EventManager$ && (this.$EventManager$.$hideHoverFeedback$(), this.$EventManager$.$setPanZoomHandler$(null), this.$EventManager$.$setMarqueeZoomHandler$(null), this.$EventManager$.$setMarqueeSelectHandler$(null), this.$EventManager$.$panButton$ = null, this.$EventManager$.$zoomButton$ = null, this.$EventManager$.$selectButton$ = null);
    this.$pieCenterDiv$ && (this.$getCtx$().$_parentDiv$.removeChild(this.$pieCenterDiv$), this.$pieCenterDiv$ = null);
    this.$Peers$ = [];
    this.$yScrollbar$ = this.$xScrollbar$ = null;
    this.$dragButtons$ && (this.removeChild(this.$dragButtons$), this.$dragButtons$.$destroy$(), this.$dragButtons$ = null);
    this.$_dataLabels$ = this.$_areaContainer$ = this.$_plotArea$ = null;
    this.$_cache$.$clearCache$();
  };
  $dvt$$2$$.$Chart$.prototype.$__cleanUpAxisAndPlotArea$ = function $$dvt$$2$$$$Chart$$$$__cleanUpAxisAndPlotArea$$() {
    this.$EventManager$.$hideHoverFeedback$();
    this.$Peers$ = [];
    this.$_container$.removeChild(this.$xAxis$);
    this.$_container$.removeChild(this.$yAxis$);
    this.$_container$.removeChild(this.$y2Axis$);
    this.$_plotArea$ && this.$_plotArea$ == this.$_panZoomTarget$ ? this.$_plotArea$.$setVisible$(!1) : this.$_container$.removeChild(this.$_plotArea$);
    this.$_plotArea$ = null;
    this.$_cache$.$clearCache$();
  };
  $dvt$$2$$.$Chart$.prototype.$_onAnimationEnd$ = function $$dvt$$2$$$$Chart$$$$_onAnimationEnd$$() {
    this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = null);
    this.$_delContainer$ && 0 < this.$_delContainer$.$getNumChildren$() && this.$getPlotArea$().removeChild(this.$_delContainer$);
    this.$_delContainer$ = null;
    this.$AnimationStopped$ || this.$RenderComplete$();
    this.$EventManager$.$addListeners$(this);
    this.$Animation$ = null;
    this.$AnimationStopped$ = !1;
  };
  $dvt$$2$$.$Chart$.prototype.$CreateKeyboardHandler$ = function $$dvt$$2$$$$Chart$$$$CreateKeyboardHandler$$($dvt$$2$$) {
    return new $DvtChartKeyboardHandler$$($dvt$$2$$, this);
  };
  $dvt$$2$$.$Chart$.prototype.$getAutomation$ = function $$dvt$$2$$$$Chart$$$$getAutomation$$() {
    return new $DvtChartAutomation$$(this);
  };
  $dvt$$2$$.$Chart$.prototype.$getValuesAt$ = function $$dvt$$2$$$$Chart$$$$getValuesAt$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$_plotAreaSpace$, $DvtSparkChartAutomation$$ = $dvt$$2$$ - $DvtSparkChartDefaults$$.x, $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$ - $DvtSparkChartDefaults$$.y, $DvtChartAxisUtils$$ = $DvtChartTypeUtils$$.$isPolar$(this), $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$(this);
    return $DvtChartAxisUtils$$ ? ($DvtSparkChartAutomation$$ -= $DvtSparkChartDefaults$$.$w$ / 2, $DvtChartRefObjUtils$$ -= $DvtSparkChartDefaults$$.$h$ / 2, $DvtSparkChartDefaults$$ = Math.sqrt($DvtSparkChartAutomation$$ * $DvtSparkChartAutomation$$ + $DvtChartRefObjUtils$$ * $DvtChartRefObjUtils$$), $DvtSparkChartAutomation$$ = Math.atan2($DvtSparkChartAutomation$$, -$DvtChartRefObjUtils$$), 0 > $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ += 2 * Math.PI), {x:this.$xAxis$ ? this.$xAxis$.$getValueAt$($DvtSparkChartAutomation$$) : 
    null, y:this.$yAxis$ ? this.$yAxis$.$getValueAt$($DvtSparkChartDefaults$$) : null}) : {x:this.$xAxis$ ? this.$xAxis$.$getValueAt$($DvtChartPieLabelUtils$$ ? $DvtChartRefObjUtils$$ : $DvtSparkChartAutomation$$) : null, y:this.$yAxis$ ? this.$yAxis$.$getValueAt$($DvtChartPieLabelUtils$$ ? $DvtSparkChartAutomation$$ : $DvtChartRefObjUtils$$) : null, y2:this.$y2Axis$ ? this.$y2Axis$.$getValueAt$($DvtChartPieLabelUtils$$ ? $DvtSparkChartAutomation$$ : $DvtChartRefObjUtils$$) : null};
  };
  $dvt$$2$$.$Chart$.prototype.filter = function $$dvt$$2$$$$Chart$$$filter$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartEventUtils$$.$setVisibility$(this, $dvt$$2$$, "out" == $DvtSparkChartEventManager$$ ? "hidden" : "visible");
    this.$render$(this.$Options$);
  };
  $dvt$$2$$.$Chart$.prototype.$highlight$ = function $$dvt$$2$$$$Chart$$$$highlight$$($DvtSparkChartEventManager$$) {
    this.$getOptions$().highlightedCategories = $dvt$$2$$.$JsonUtils$.clone($DvtSparkChartEventManager$$);
    $dvt$$2$$.$CategoryRolloverHandler$.$highlight$($DvtSparkChartEventManager$$, this.$getObjects$(), "any" == this.$getOptions$().highlightMatch);
    this.$legend$ && this.$legend$.$highlight$($DvtSparkChartEventManager$$);
    this.$pieChart$ && this.$pieChart$.$highlight$($DvtSparkChartEventManager$$);
    this.$overview$ && this.$overview$.$_chart$.$highlight$($DvtSparkChartEventManager$$);
  };
  $dvt$$2$$.$Chart$.prototype.select = function $$dvt$$2$$$$Chart$$$select$($DvtSparkChartEventManager$$) {
    this.$getOptions$().selection = $dvt$$2$$.$JsonUtils$.clone($DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getInitialSelection$(this);
    $DvtChartEventUtils$$.$setInitialSelection$(this, $DvtSparkChartEventManager$$);
    this.$pieChart$ && this.$pieChart$.$setInitialSelection$();
  };
  $dvt$$2$$.$Chart$.prototype.$positionDataCursor$ = function $$dvt$$2$$$$Chart$$$$positionDataCursor$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$getEventManager$().$_dataCursorHandler$;
    if ($DvtSparkChartDefaults$$) {
      if ($DvtSparkChartEventManager$$) {
        var $DvtSparkChartAutomation$$ = this.$xAxis$ && null != $DvtSparkChartEventManager$$.x ? this.$xAxis$.$getCoordAt$($DvtSparkChartEventManager$$.x) : null, $DvtChartRefObjUtils$$ = null;
        $DvtChartTypeUtils$$.$isBLAC$(this) ? this.$yAxis$ && null != $DvtSparkChartEventManager$$.y ? $DvtChartRefObjUtils$$ = this.$yAxis$.$getBoundedCoordAt$($DvtSparkChartEventManager$$.y) : this.$y2Axis$ && null != $DvtSparkChartEventManager$$.y2 && ($DvtChartRefObjUtils$$ = this.$yAxis$.$getBoundedCoordAt$($DvtSparkChartEventManager$$.y2)) : $DvtChartRefObjUtils$$ = this.$yAxis$ && null != $DvtSparkChartEventManager$$.y ? this.$yAxis$.$getCoordAt$($DvtSparkChartEventManager$$.y) : null;
        if (null != $DvtSparkChartAutomation$$ && null != $DvtChartRefObjUtils$$) {
          $DvtSparkChartEventManager$$ = this.$_plotAreaSpace$;
          $DvtSparkChartAutomation$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$(this, new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$), $DvtSparkChartEventManager$$);
          $DvtSparkChartDefaults$$.$processMove$(new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$.x + $DvtSparkChartAutomation$$.x, $DvtSparkChartEventManager$$.y + $DvtSparkChartAutomation$$.y), !0);
          return;
        }
      }
      $DvtSparkChartDefaults$$.$processEnd$(!0);
    }
  };
  $dvt$$2$$.$Chart$.prototype.$processEvent$ = function $$dvt$$2$$$$Chart$$$$processEvent$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.type;
    if ("categoryHide" == $DvtSparkChartAutomation$$ || "categoryShow" == $DvtSparkChartAutomation$$) {
      this.filter($DvtSparkChartEventManager$$.category, "categoryHide" == $DvtSparkChartAutomation$$ ? "out" : "in");
    } else {
      if ("categoryHighlight" == $DvtSparkChartAutomation$$) {
        this != $DvtSparkChartDefaults$$ && this.$highlight$($DvtSparkChartEventManager$$.categories), this.$legend$ && this.$legend$ != $DvtSparkChartDefaults$$ && this.$legend$.$processEvent$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      } else {
        if ("selection" == $DvtSparkChartAutomation$$) {
          $DvtSparkChartEventManager$$ = this.$_processSelectionEvent$($DvtSparkChartEventManager$$);
        } else {
          if ($DvtSparkChartAutomation$$ == $dvt$$2$$.$PanZoomEvent$.$TYPE$) {
            $DvtSparkChartEventManager$$ = this.$_processPanZoomEvent$($DvtSparkChartEventManager$$);
          } else {
            if ($DvtSparkChartAutomation$$ == $dvt$$2$$.$MarqueeEvent$.$TYPE$) {
              $DvtSparkChartEventManager$$ = this.$_processMarqueeEvent$($DvtSparkChartEventManager$$);
            } else {
              if ($DvtSparkChartAutomation$$ == $dvt$$2$$.$OverviewEvent$.$TYPE$) {
                $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getSubType$();
                if ($DvtSparkChartAutomation$$ == $dvt$$2$$.$OverviewEvent$.$SUBTYPE_PRE_RANGECHANGE$) {
                  return;
                }
                $DvtSparkChartEventManager$$ = this.$_processScrollbarEvent$($DvtSparkChartEventManager$$.$getNewStartTime$(), $DvtSparkChartEventManager$$.$getNewEndTime$(), $DvtSparkChartAutomation$$ == $dvt$$2$$.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$ || $DvtSparkChartAutomation$$ == $dvt$$2$$.$OverviewEvent$.$SUBTYPE_SCROLL_END$ || $DvtSparkChartAutomation$$ == $dvt$$2$$.$OverviewEvent$.$SUBTYPE_RANGECHANGE$, $DvtSparkChartDefaults$$);
              } else {
                $DvtSparkChartAutomation$$ == $dvt$$2$$.$SimpleScrollbarEvent$.$TYPE$ ? $DvtSparkChartEventManager$$ = this.$_processScrollbarEvent$($DvtSparkChartEventManager$$.$_newMin$, $DvtSparkChartEventManager$$.$_newMax$, $DvtSparkChartEventManager$$.$getSubtype$() == $dvt$$2$$.$SimpleScrollbarEvent$.$SUBTYPE_END$, $DvtSparkChartDefaults$$) : "adfShowPopup" == $DvtSparkChartAutomation$$ && ($DvtSparkChartEventManager$$ = this.$_processShowPopupEvent$($DvtSparkChartEventManager$$));
              }
            }
          }
        }
      }
    }
    if ($DvtSparkChartEventManager$$) {
      $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.type;
      if ("selection" == $DvtSparkChartAutomation$$) {
        var $DvtChartRefObjUtils$$ = this.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtChartRefObjUtils$$.selection, $DvtChartAxisUtils$$ = $DvtChartDataUtils$$.$getCurrentSelection$(this);
        $DvtSparkChartEventManager$$.complete && ($DvtChartRefObjUtils$$.selection = $DvtChartAxisUtils$$);
        var $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$ ? $DvtSparkChartAutomation$$ : [], $DvtChartAxisUtils$$ = $DvtChartAxisUtils$$ ? $DvtChartAxisUtils$$ : [], $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$ = {};
        for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartPieLabelUtils$$++) {
          $DvtChartPieLabelInfo$$[$DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$].id] = !0;
        }
        $DvtChartRefObjUtils$$ = {};
        for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartAxisUtils$$.length;$DvtChartPieLabelUtils$$++) {
          $DvtChartRefObjUtils$$[$DvtChartAxisUtils$$[$DvtChartPieLabelUtils$$].id] = !0;
        }
        var $DvtChartPieRenderUtils$$ = {};
        for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartAxisUtils$$.length;$DvtChartPieLabelUtils$$++) {
          var $DvtChartDataChangePyramidSlice$$ = $DvtChartAxisUtils$$[$DvtChartPieLabelUtils$$].id;
          $DvtChartPieLabelInfo$$[$DvtChartDataChangePyramidSlice$$] || ($DvtChartPieRenderUtils$$[$DvtChartDataChangePyramidSlice$$] = !0);
        }
        $DvtChartAxisUtils$$ = {};
        for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartPieLabelUtils$$++) {
          $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$].id, $DvtChartRefObjUtils$$[$DvtChartPieLabelInfo$$] || ($DvtChartAxisUtils$$[$DvtChartPieLabelInfo$$] = !0);
        }
        $DvtSparkChartEventManager$$.addedSet = $DvtChartPieRenderUtils$$;
        $DvtSparkChartEventManager$$.removedSet = $DvtChartAxisUtils$$;
        for ($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.selection.length;$DvtSparkChartAutomation$$++) {
          $DvtChartEventUtils$$.$addEventData$(this, $DvtSparkChartEventManager$$.selection[$DvtSparkChartAutomation$$]);
        }
        $DvtSparkChartEventManager$$.component = this.$getOptions$()._widgetConstructor;
      } else {
        "drill" == $DvtSparkChartAutomation$$ && ($DvtChartEventUtils$$.$addEventData$(this, $DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$.component = this.$getOptions$()._widgetConstructor);
      }
      this.dispatchEvent($DvtSparkChartEventManager$$);
    }
  };
  $dvt$$2$$.$Chart$.prototype.$_processSelectionEvent$ = function $$dvt$$2$$$$Chart$$$$_processSelectionEvent$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$processIds$(this, $DvtSparkChartEventManager$$.selection);
    this.$_updateOverviewSelection$();
    return $dvt$$2$$.$EventFactory$.$newChartSelectionEvent$($DvtSparkChartEventManager$$, !0);
  };
  $dvt$$2$$.$Chart$.prototype.$_processPanZoomEvent$ = function $$dvt$$2$$$$Chart$$$$_processPanZoomEvent$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getSubtype$(), $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$ == $dvt$$2$$.$PanZoomEvent$.$SUBTYPE_PAN_END$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.$PanZoomEvent$.$SUBTYPE_ZOOM$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.$PanZoomEvent$.$SUBTYPE_PINCH_END$, $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ == $dvt$$2$$.$PanZoomEvent$.$SUBTYPE_PAN_START$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.$PanZoomEvent$.$SUBTYPE_PINCH_START$;
    $dvt$$2$$.$Agent$.$isTouchDevice$() && $DvtSparkChartDefaults$$ && this.$_panZoomTarget$ != this.$_plotArea$ && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = this.$_plotArea$);
    $DvtChartEventUtils$$.$isLiveScroll$(this) ? ($DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $DvtSparkChartEventManager$$.$dxMin$, $DvtSparkChartEventManager$$.$dxMax$, $DvtSparkChartEventManager$$.$dyMin$, $DvtSparkChartEventManager$$.$dyMax$), $DvtSparkChartDefaults$$ || (this.$_setViewport$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), this.$_setScrollbarViewport$($DvtSparkChartEventManager$$))) : ($DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, 
    $DvtSparkChartEventManager$$.$dxMinTotal$, $DvtSparkChartEventManager$$.$dxMaxTotal$, $DvtSparkChartEventManager$$.$dyMinTotal$, $DvtSparkChartEventManager$$.$dyMaxTotal$), this.$_setScrollbarViewport$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ && this.$_setViewport$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$));
    $DvtSparkChartAutomation$$ && ($DvtChartRenderer$$.$_setEventHandlers$(this), this.$_panZoomTarget$ != this.$_plotArea$ && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = null));
    return $DvtChartTypeUtils$$.$isBLAC$(this) ? $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$($DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$, $DvtSparkChartEventManager$$.$startGroup$, $DvtSparkChartEventManager$$.$endGroup$, null, null) : $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$($DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$, null, null, $DvtSparkChartEventManager$$.$yMin$, 
    $DvtSparkChartEventManager$$.$yMax$);
  };
  $dvt$$2$$.$Chart$.prototype.$_processMarqueeEvent$ = function $$dvt$$2$$$$Chart$$$$_processMarqueeEvent$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getSubtype$(), $DvtSparkChartAutomation$$ = this.$EventManager$;
    $DvtChartEventUtils$$.$adjustBounds$($DvtSparkChartEventManager$$);
    if ($DvtSparkChartAutomation$$.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_SELECT$) {
      $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$.$getSelectionHandler$();
      if ($DvtSparkChartDefaults$$ == $dvt$$2$$.$MarqueeEvent$.$SUBTYPE_START$) {
        this.$_initSelection$ = $DvtSparkChartEventManager$$.ctrlKey ? $DvtSparkChartAutomation$$.$getSelectedIds$() : [];
      } else {
        var $DvtChartRefObjUtils$$ = $DvtChartEventUtils$$.$getBoundedObjects$(this, $DvtSparkChartEventManager$$);
        $DvtSparkChartAutomation$$.$processInitialSelections$(this.$_initSelection$, this.$getChartObjPeers$());
        $DvtSparkChartAutomation$$.$processGroupSelection$($DvtChartRefObjUtils$$);
      }
      $DvtSparkChartAutomation$$ = $DvtChartEventUtils$$.$getSelectedObjects$(this, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
      $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getAxisBounds$(this, $DvtSparkChartEventManager$$, !1);
      $DvtSparkChartEventManager$$ = $dvt$$2$$.$EventFactory$.$newChartSelectionEvent$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$ == $dvt$$2$$.$MarqueeEvent$.$SUBTYPE_END$ ? !0 : !1, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$, $DvtSparkChartEventManager$$.$startGroup$, $DvtSparkChartEventManager$$.$endGroup$, $DvtSparkChartEventManager$$.$yMin$, $DvtSparkChartEventManager$$.$yMax$, $DvtSparkChartEventManager$$.$y2Min$, $DvtSparkChartEventManager$$.$y2Max$);
      $DvtSparkChartDefaults$$ == $dvt$$2$$.$MarqueeEvent$.$SUBTYPE_END$ && this.$_updateOverviewSelection$();
      return $DvtSparkChartEventManager$$;
    }
    if ($DvtSparkChartAutomation$$.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_ZOOM$) {
      if ($DvtSparkChartDefaults$$ != $dvt$$2$$.$MarqueeEvent$.$SUBTYPE_END$) {
        return null;
      }
      $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getAxisBounds$(this, $DvtSparkChartEventManager$$, !0);
      this.$_setViewport$($DvtSparkChartEventManager$$, !0);
      this.$_setScrollbarViewport$($DvtSparkChartEventManager$$);
      $DvtChartRenderer$$.$_setEventHandlers$(this);
      return $DvtChartTypeUtils$$.$isBLAC$(this) ? $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$(!0, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$, $DvtSparkChartEventManager$$.$startGroup$, $DvtSparkChartEventManager$$.$endGroup$, null, null) : $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$(!0, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$, null, null, $DvtSparkChartEventManager$$.$yMin$, $DvtSparkChartEventManager$$.$yMax$);
    }
    return null;
  };
  $dvt$$2$$.$Chart$.prototype.$_processScrollbarEvent$ = function $$dvt$$2$$$$Chart$$$$_processScrollbarEvent$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$ == this.$yScrollbar$ ? this.$yAxis$ : this.$xAxis$;
    $DvtSparkChartEventManager$$ = $DvtChartAxisUtils$$.$linearToActual$($DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$ = $DvtChartAxisUtils$$.$linearToActual$($DvtSparkChartDefaults$$);
    if ($DvtChartEventUtils$$.$isLiveScroll$(this) || $DvtSparkChartAutomation$$) {
      $DvtChartRefObjUtils$$ == this.$yScrollbar$ ? this.$_setViewport$({$yMin$:$DvtSparkChartEventManager$$, $yMax$:$DvtSparkChartDefaults$$}, $DvtSparkChartAutomation$$) : this.$_setViewport$({$xMin$:$DvtSparkChartEventManager$$, $xMax$:$DvtSparkChartDefaults$$}, $DvtSparkChartAutomation$$);
    }
    if ($DvtChartRefObjUtils$$ == this.$yScrollbar$) {
      return $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$($DvtSparkChartAutomation$$, null, null, null, null, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    }
    $DvtChartRefObjUtils$$ = $DvtChartEventUtils$$.$getAxisStartEndGroup$(this.$xAxis$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$($DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$.$startGroup$, $DvtChartRefObjUtils$$.$endGroup$, null, null);
  };
  $dvt$$2$$.$Chart$.prototype.$_processShowPopupEvent$ = function $$dvt$$2$$$$Chart$$$$_processShowPopupEvent$$($DvtSparkChartEventManager$$) {
    if ("mouseHover" != $DvtSparkChartEventManager$$.triggerType && this.$isSelectionSupported$() && 0 < this.$getSelectionHandler$().$_selection$.length) {
      var $DvtSparkChartDefaults$$ = $DvtChartEventUtils$$.$processIds$(this, this.$getSelectionHandler$().$getSelectedIds$());
      $DvtSparkChartEventManager$$ = $dvt$$2$$.$EventFactory$.$newAdfShowPopupEvent$($DvtSparkChartEventManager$$.showPopupBehavior, $DvtSparkChartEventManager$$.launcherBounds, $DvtSparkChartEventManager$$.launcherId);
      $DvtSparkChartEventManager$$[$dvt$$2$$.$BaseComponentEvent$.$CLIENT_ROW_KEY$] = $DvtSparkChartDefaults$$;
    }
    return $DvtSparkChartEventManager$$;
  };
  $dvt$$2$$.$Chart$.prototype.$_updateOverviewSelection$ = function $$dvt$$2$$$$Chart$$$$_updateOverviewSelection$$() {
    if (this.$overview$) {
      var $dvt$$2$$ = this.$overview$.$_chart$;
      $dvt$$2$$.$getOptions$().selection = $DvtChartDataUtils$$.$getCurrentSelection$(this);
      $dvt$$2$$.$render$();
    }
  };
  $dvt$$2$$.$Chart$.prototype.$changeOption$ = function $$dvt$$2$$$$Chart$$$$changeOption$$($DvtSparkChartEventManager$$) {
    this.$getOptions$().dataCursorPosition = $DvtSparkChartEventManager$$;
    this.dispatchEvent($dvt$$2$$.$EventFactory$.$newOptionChangeEvent$($DvtSparkChartEventManager$$));
  };
  $dvt$$2$$.$Chart$.prototype.$registerObject$ = function $$dvt$$2$$$$Chart$$$$registerObject$$($dvt$$2$$) {
    this.$Peers$.push($dvt$$2$$);
  };
  $dvt$$2$$.$Chart$.prototype.$getObjects$ = function $$dvt$$2$$$$Chart$$$$getObjects$$() {
    return this.$Peers$;
  };
  $dvt$$2$$.$Chart$.prototype.$getChartObjPeers$ = function $$dvt$$2$$$$Chart$$$$getChartObjPeers$$() {
    for (var $dvt$$2$$ = [], $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < this.$Peers$.length;$DvtSparkChartEventManager$$++) {
      this.$Peers$[$DvtSparkChartEventManager$$] instanceof $DvtChartObjPeer$$ && $dvt$$2$$.push(this.$Peers$[$DvtSparkChartEventManager$$]);
    }
    return $dvt$$2$$;
  };
  $dvt$$2$$.$Chart$.prototype.$getRefObjPeers$ = function $$dvt$$2$$$$Chart$$$$getRefObjPeers$$() {
    for (var $dvt$$2$$ = [], $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < this.$Peers$.length;$DvtSparkChartEventManager$$++) {
      this.$Peers$[$DvtSparkChartEventManager$$] instanceof $DvtChartRefObjPeer$$ && $dvt$$2$$.push(this.$Peers$[$DvtSparkChartEventManager$$]);
    }
    return $dvt$$2$$;
  };
  $dvt$$2$$.$Chart$.prototype.$getObject$ = function $$dvt$$2$$$$Chart$$$$getObject$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < this.$Peers$.length;$DvtSparkChartDefaults$$++) {
      if (this.$Peers$[$DvtSparkChartDefaults$$] instanceof $DvtChartObjPeer$$ && this.$Peers$[$DvtSparkChartDefaults$$].$getSeriesIndex$() == $dvt$$2$$ && this.$Peers$[$DvtSparkChartDefaults$$].$getGroupIndex$() == $DvtSparkChartEventManager$$) {
        return this.$Peers$[$DvtSparkChartDefaults$$];
      }
    }
    return null;
  };
  $dvt$$2$$.$Chart$.prototype.getWidth = function $$dvt$$2$$$$Chart$$$getWidth$() {
    return this.$Width$;
  };
  $dvt$$2$$.$Chart$.prototype.getHeight = function $$dvt$$2$$$$Chart$$$getHeight$() {
    return this.$Height$;
  };
  $dvt$$2$$.$Chart$.prototype.$getPlotArea$ = function $$dvt$$2$$$$Chart$$$$getPlotArea$$() {
    return this.$_plotArea$;
  };
  $dvt$$2$$.$Chart$.prototype.$setPlotArea$ = function $$dvt$$2$$$$Chart$$$$setPlotArea$$($dvt$$2$$) {
    this.$_plotArea$ = $dvt$$2$$;
  };
  $dvt$$2$$.$Chart$.prototype.$getType$ = function $$dvt$$2$$$$Chart$$$$getType$$() {
    return this.$getOptions$().type;
  };
  $dvt$$2$$.$Chart$.prototype.$getSkin$ = function $$dvt$$2$$$$Chart$$$$getSkin$$() {
    return this.$getOptions$().skin;
  };
  $dvt$$2$$.$Chart$.prototype.$getGapWidthRatio$ = function $$dvt$$2$$$$Chart$$$$getGapWidthRatio$$() {
    var $dvt$$2$$ = this.$getOptions$();
    return null !== $dvt$$2$$.layout.gapWidthRatio ? $dvt$$2$$.layout.gapWidthRatio : Math.min(this.$Width$ / 400, 1);
  };
  $dvt$$2$$.$Chart$.prototype.$getGapHeightRatio$ = function $$dvt$$2$$$$Chart$$$$getGapHeightRatio$$() {
    var $dvt$$2$$ = this.$getOptions$();
    return null !== $dvt$$2$$.layout.gapHeightRatio ? $dvt$$2$$.layout.gapHeightRatio : Math.min(this.$Height$ / 300, 1);
  };
  $dvt$$2$$.$Chart$.prototype.$getSelectionHandler$ = function $$dvt$$2$$$$Chart$$$$getSelectionHandler$$() {
    return this.$_selectionHandler$;
  };
  $dvt$$2$$.$Chart$.prototype.$isSelectionSupported$ = function $$dvt$$2$$$$Chart$$$$isSelectionSupported$$() {
    return this.$_selectionHandler$ ? !0 : !1;
  };
  $dvt$$2$$.$Chart$.prototype.$getShowPopupBehaviors$ = function $$dvt$$2$$$$Chart$$$$getShowPopupBehaviors$$($dvt$$2$$) {
    return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$dvt$$2$$] : null;
  };
  $dvt$$2$$.$Chart$.prototype.$bringToFrontOfSelection$ = function $$dvt$$2$$$$Chart$$$$bringToFrontOfSelection$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.getParent();
    if ($DvtSparkChartEventManager$$) {
      var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getNumChildren$();
      1 < $DvtSparkChartDefaults$$ - this.$_numFrontObjs$ && ($DvtSparkChartEventManager$$.removeChild($dvt$$2$$), $DvtSparkChartEventManager$$.$addChildAt$($dvt$$2$$, $DvtSparkChartDefaults$$ - this.$_numFrontObjs$ - 1));
    }
    $dvt$$2$$.$isSelected$() && $dvt$$2$$.$IsShowingHoverEffect$ || this.$_numSelectedObjsInFront$++;
  };
  $dvt$$2$$.$Chart$.prototype.$pushToBackOfSelection$ = function $$dvt$$2$$$$Chart$$$$pushToBackOfSelection$$($dvt$$2$$) {
    0 < this.$_numSelectedObjsInFront$ && this.$_numSelectedObjsInFront$--;
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.getParent();
    if ($DvtSparkChartEventManager$$) {
      var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$;
      0 <= $DvtSparkChartDefaults$$ && ($DvtSparkChartEventManager$$.removeChild($dvt$$2$$), $DvtSparkChartEventManager$$.$addChildAt$($dvt$$2$$, $DvtSparkChartDefaults$$));
    }
  };
  $dvt$$2$$.$Chart$.prototype.$_setViewport$ = function $$dvt$$2$$$$Chart$$$$_setViewport$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    null != $dvt$$2$$.$xMax$ && (this.$Options$.xAxis.viewportMax = $dvt$$2$$.$xMax$);
    null != $dvt$$2$$.$xMin$ && (this.$Options$.xAxis.viewportMin = $dvt$$2$$.$xMin$);
    $DvtChartTypeUtils$$.$isBLAC$(this) ? (this.$Options$.xAxis.viewportStartGroup = null, this.$Options$.xAxis.viewportEndGroup = null, this.$Options$._initialZoomed = !1) : (null != $dvt$$2$$.$yMax$ && (this.$Options$.yAxis.viewportMax = $dvt$$2$$.$yMax$), null != $dvt$$2$$.$yMin$ && (this.$Options$.yAxis.viewportMin = $dvt$$2$$.$yMin$));
    this.$Options$._duringAnimation = !$DvtSparkChartEventManager$$;
    $DvtChartRenderer$$.$rerenderAxisAndPlotArea$(this, this.$_container$);
  };
  $dvt$$2$$.$Chart$.prototype.$_setScrollbarViewport$ = function $$dvt$$2$$$$Chart$$$$_setScrollbarViewport$$($dvt$$2$$) {
    if (this.$xAxis$ && null != $dvt$$2$$.$xMin$ && null != $dvt$$2$$.$xMax$) {
      var $DvtSparkChartEventManager$$ = this.$xAxis$.$actualToLinear$($dvt$$2$$.$xMin$), $DvtSparkChartDefaults$$ = this.$xAxis$.$actualToLinear$($dvt$$2$$.$xMax$);
      this.$overview$ && this.$overview$.$setViewportRange$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      this.$xScrollbar$ && this.$xScrollbar$.$setViewportRange$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    }
    this.$yAxis$ && null != $dvt$$2$$.$yMin$ && null != $dvt$$2$$.$yMax$ && ($DvtSparkChartEventManager$$ = this.$yAxis$.$actualToLinear$($dvt$$2$$.$yMin$), $dvt$$2$$ = this.$yAxis$.$actualToLinear$($dvt$$2$$.$yMax$), this.$yScrollbar$ && this.$yScrollbar$.$setViewportRange$($DvtSparkChartEventManager$$, $dvt$$2$$));
  };
  $dvt$$2$$.$Chart$.prototype.$__setAxisSpace$ = function $$dvt$$2$$$$Chart$$$$__setAxisSpace$$($dvt$$2$$) {
    this.$_axisSpace$ = $dvt$$2$$;
    var $DvtSparkChartEventManager$$;
    $DvtChartAxisUtils$$.$isAxisRendered$(this, "x") ? ($DvtSparkChartEventManager$$ = .8 * $dvt$$2$$.$w$, $dvt$$2$$ = $dvt$$2$$.$h$ - 4 * $DvtChartAxisUtils$$.$getTickLabelHeight$(this, "x")) : $DvtChartAxisUtils$$.$isAxisRendered$(this, "y") ? ($DvtSparkChartEventManager$$ = $dvt$$2$$.$w$, $dvt$$2$$ = $dvt$$2$$.$h$ - $DvtChartAxisUtils$$.$getTickLabelHeight$(this, "y")) : ($DvtSparkChartEventManager$$ = $dvt$$2$$.$w$, $dvt$$2$$ = $dvt$$2$$.$h$);
    this.$_radius$ = Math.min($DvtSparkChartEventManager$$, $dvt$$2$$) / 2;
  };
  $dvt$$2$$.$Chart$.prototype.$__setPlotAreaSpace$ = function $$dvt$$2$$$$Chart$$$$__setPlotAreaSpace$$($dvt$$2$$) {
    this.$_plotAreaSpace$ = $dvt$$2$$;
  };
  $dvt$$2$$.$Chart$.prototype.$__setAreaContainer$ = function $$dvt$$2$$$$Chart$$$$__setAreaContainer$$($dvt$$2$$) {
    this.$_areaContainer$ = $dvt$$2$$;
  };
  $dvt$$2$$.$Chart$.prototype.$getRadius$ = function $$dvt$$2$$$$Chart$$$$getRadius$$() {
    return this.$_radius$;
  };
  $dvt$$2$$.$Chart$.prototype.$showDragButtons$ = function $$dvt$$2$$$$Chart$$$$showDragButtons$$() {
    this.$dragButtons$ && this.$dragButtons$.$setVisible$(!0);
  };
  $dvt$$2$$.$Chart$.prototype.$hideDragButtons$ = function $$dvt$$2$$$$Chart$$$$hideDragButtons$$() {
    this.$dragButtons$ && this.$dragButtons$.$setVisible$(!1);
  };
  $dvt$$2$$.$Chart$.prototype.$addDataLabel$ = function $$dvt$$2$$$$Chart$$$$addDataLabel$$($dvt$$2$$) {
    this.$getDataLabels$().push($dvt$$2$$);
  };
  $dvt$$2$$.$Chart$.prototype.$getDataLabels$ = function $$dvt$$2$$$$Chart$$$$getDataLabels$$() {
    this.$_dataLabels$ || (this.$_dataLabels$ = []);
    return this.$_dataLabels$;
  };
  $dvt$$2$$.$Chart$.prototype.$__cacheChartFocus$ = function $$dvt$$2$$$$Chart$$$$__cacheChartFocus$$() {
    var $dvt$$2$$ = this.$EventManager$.$getFocus$();
    if ($dvt$$2$$) {
      var $DvtSparkChartEventManager$$ = $dvt$$2$$.$isShowingKeyboardFocusEffect$()
    }
    if (this.$xAxis$) {
      var $DvtSparkChartDefaults$$ = this.$xAxis$.$getKeyboardFocus$();
      if ($DvtSparkChartDefaults$$) {
        var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$isShowingKeyboardFocusEffect$()
      }
    }
    if (this.$legend$) {
      var $DvtChartRefObjUtils$$ = this.$legend$.$getKeyboardFocus$();
      if ($DvtChartRefObjUtils$$) {
        var $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$.$isShowingKeyboardFocusEffect$()
      }
    }
    return {$chartFocus$:$dvt$$2$$, $chartShowingFocusEffect$:$DvtSparkChartEventManager$$, $axisFocus$:$DvtSparkChartDefaults$$, $axisShowingFocusEffect$:$DvtSparkChartAutomation$$, $legendFocus$:$DvtChartRefObjUtils$$, $legendShowingFocusEffect$:$DvtChartAxisUtils$$};
  };
  $dvt$$2$$.$Chart$.prototype.$__restoreChartFocus$ = function $$dvt$$2$$$$Chart$$$$__restoreChartFocus$$($dvt$$2$$) {
    if (!$DvtChartTypeUtils$$.$isOverview$(this) && !$DvtChartTypeUtils$$.$isSpark$(this)) {
      var $DvtSparkChartEventManager$$ = [this];
      this.$xAxis$ && this.$xAxis$.$isNavigable$() && $DvtSparkChartEventManager$$.push(this.$xAxis$);
      this.$legend$ && this.$legend$.$isNavigable$() && $DvtSparkChartEventManager$$.push(this.$legend$);
      this.$getCtx$().$setKeyboardFocusArray$($DvtSparkChartEventManager$$);
      if ($dvt$$2$$.$chartFocus$) {
        for (var $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getKeyboardNavigables$(this), $DvtSparkChartDefaults$$ = !1, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
          var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].getId();
          if ($DvtChartRefObjUtils$$ instanceof $DvtChartDataItem$$ && $DvtChartRefObjUtils$$.$equals$($dvt$$2$$.$chartFocus$.getId())) {
            this.$EventManager$.$setFocusObj$($DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$]);
            $dvt$$2$$.$chartShowingFocusEffect$ && $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$showKeyboardFocusEffect$();
            $DvtSparkChartDefaults$$ = !0;
            break;
          }
        }
        $DvtSparkChartDefaults$$ || this.$EventManager$.$setFocusObj$(this.$EventManager$.$KeyboardHandler$.$getDefaultNavigable$($DvtSparkChartEventManager$$));
      }
      $dvt$$2$$.$axisFocus$ && (this.$xAxis$.$setKeyboardFocus$($dvt$$2$$.$axisFocus$, $dvt$$2$$.$axisShowingFocusEffect$), $dvt$$2$$.$axisShowingFocusEffect$ && this.$getCtx$().$setCurrentKeyboardFocus$(this.$xAxis$));
      $dvt$$2$$.$legendFocus$ && (this.$legend$.$setKeyboardFocus$($dvt$$2$$.$legendFocus$, $dvt$$2$$.$legendShowingFocusEffect$), $dvt$$2$$.$legendShowingFocusEffect$ && this.$getCtx$().$setCurrentKeyboardFocus$(this.$legend$));
    }
  };
  $dvt$$2$$.$Chart$.$_copyActiveDataProperties$ = function $$dvt$$2$$$$Chart$$$_copyActiveDataProperties$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ in $dvt$$2$$) {
      $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$] = $dvt$$2$$[$DvtSparkChartDefaults$$];
    }
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAutomation$$, $dvt$$2$$.$Automation$);
  $DvtChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtChartAutomation$$$$$GetSubIdForDomElement$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = null;
    if ($dvt$$2$$.$isDescendantOf$(this.$_xAxis$)) {
      return ($DvtSparkChartEventManager$$ = this.$_xAxisAutomation$.$GetSubIdForDomElement$($dvt$$2$$)) ? this.$_convertAxisSubIdToChartSubId$($DvtSparkChartEventManager$$, "xAxis") : null;
    }
    if ($dvt$$2$$.$isDescendantOf$(this.$_yAxis$)) {
      return ($DvtSparkChartEventManager$$ = this.$_yAxisAutomation$.$GetSubIdForDomElement$($dvt$$2$$)) ? this.$_convertAxisSubIdToChartSubId$($DvtSparkChartEventManager$$, "yAxis") : null;
    }
    if ($dvt$$2$$.$isDescendantOf$(this.$_y2Axis$)) {
      return ($DvtSparkChartEventManager$$ = this.$_y2AxisAutomation$.$GetSubIdForDomElement$($dvt$$2$$)) ? this.$_convertAxisSubIdToChartSubId$($DvtSparkChartEventManager$$, "y2Axis") : null;
    }
    if ($dvt$$2$$.$isDescendantOf$(this.$_legend$)) {
      return ($dvt$$2$$ = this.$_legendAutomation$.$GetSubIdForDomElement$($dvt$$2$$)) ? this.$_convertLegendSubIdToChartSubId$($dvt$$2$$) : null;
    }
    if (($dvt$$2$$ = this.$_chart$.$getEventManager$().$GetLogicalObject$($dvt$$2$$)) && "pie" == this.$_options$.type) {
      return "dataItem[" + $dvt$$2$$.$getSeriesIndex$() + "]";
    }
    if ($dvt$$2$$ instanceof $DvtChartObjPeer$$) {
      $DvtSparkChartEventManager$$ = $dvt$$2$$.$getSeriesIndex$();
      $dvt$$2$$ = $dvt$$2$$.$getGroupIndex$();
      if (null != $DvtSparkChartEventManager$$ && 0 <= $dvt$$2$$ && ("funnel" != this.$_options$.type || "pyramid" != this.$_options$.type)) {
        return "dataItem[" + $DvtSparkChartEventManager$$ + "][" + $dvt$$2$$ + "]";
      }
      if (null != $DvtSparkChartEventManager$$ && $dvt$$2$$ == $DvtChartFunnelRenderer$$.$_GROUP_INDEX$ && ("funnel" == this.$_options$.type || "pyramid" == this.$_options$.type)) {
        return "dataItem[" + $DvtSparkChartEventManager$$ + "]";
      }
      if (null != $DvtSparkChartEventManager$$ && (null == $dvt$$2$$ || 0 > $dvt$$2$$)) {
        return "series[" + $DvtSparkChartEventManager$$ + "]";
      }
    } else {
      if ($dvt$$2$$ instanceof $DvtChartRefObjPeer$$) {
        return $DvtSparkChartEventManager$$ = $dvt$$2$$.$_axisType$, $dvt$$2$$ = $dvt$$2$$.$getIndex$(), $DvtSparkChartEventManager$$ && 0 <= $dvt$$2$$ ? $DvtSparkChartEventManager$$ + ":referenceObject[" + $dvt$$2$$ + "]" : null;
      }
    }
    return null;
  };
  $DvtChartAutomation$$.prototype.$_convertLegendSubIdToChartSubId$ = function $$DvtChartAutomation$$$$$_convertLegendSubIdToChartSubId$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_legend$.$getOptions$();
    if ($DvtSparkChartEventManager$$ = this.$_legendAutomation$.$getLegendItem$($DvtSparkChartEventManager$$, $dvt$$2$$)) {
      for (var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < this.$_options$.series.length;$DvtSparkChartDefaults$$++) {
        if (this.$_options$.series[$DvtSparkChartDefaults$$].name == $DvtSparkChartEventManager$$.text) {
          return "series[" + $DvtSparkChartDefaults$$ + "]";
        }
      }
      return "legend:" + $dvt$$2$$;
    }
    return null;
  };
  $DvtChartAutomation$$.prototype.$_convertAxisSubIdToChartSubId$ = function $$DvtChartAutomation$$$$$_convertAxisSubIdToChartSubId$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ("title" == $dvt$$2$$ && $DvtSparkChartEventManager$$) {
      return $DvtSparkChartEventManager$$ + ":" + $dvt$$2$$;
    }
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.substring($dvt$$2$$.indexOf("["));
    return $DvtSparkChartDefaults$$ ? "group" + $DvtSparkChartDefaults$$ : null;
  };
  $DvtChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtChartAutomation$$$$$getDomElementForSubId$$($DvtSparkChartEventManager$$) {
    if ($DvtSparkChartEventManager$$ == $dvt$$2$$.$Automation$.$TOOLTIP_SUBID$) {
      return this.$GetTooltipElement$(this.$_chart$, $DvtChartTooltipUtils$$.$isDataCursorEnabled$(this.$_chart$) ? $DvtChartDataCursor$$.$TOOLTIP_ID$ : null);
    }
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.indexOf("["), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.indexOf("]"), $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.indexOf(":");
    if (0 < $DvtSparkChartDefaults$$ && 0 < $DvtSparkChartAutomation$$ || 0 < $DvtChartPieLabelUtils$$) {
      $DvtChartRefObjUtils$$ = 0 > $DvtChartPieLabelUtils$$ ? $DvtSparkChartEventManager$$.substring(0, $DvtSparkChartDefaults$$) : $DvtSparkChartEventManager$$.substring(0, $DvtChartPieLabelUtils$$);
      if ("group" == $DvtChartRefObjUtils$$) {
        return this.$_xAxisAutomation$.$getDomElementForSubId$($DvtSparkChartEventManager$$);
      }
      if ("series" == $DvtChartRefObjUtils$$) {
        return $DvtSparkChartEventManager$$ = this.$_convertToLegendSubId$($DvtSparkChartEventManager$$), this.$_legendAutomation$.$getDomElementForSubId$($DvtSparkChartEventManager$$);
      }
      if ("legend" == $DvtSparkChartEventManager$$.substring(0, $DvtChartPieLabelUtils$$)) {
        return $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.substring($DvtChartPieLabelUtils$$ + 1), this.$_legendAutomation$.$getDomElementForSubId$($DvtSparkChartEventManager$$);
      }
      $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.substring($DvtSparkChartDefaults$$ + 1, $DvtSparkChartAutomation$$);
      if ("xAxis" == $DvtChartRefObjUtils$$ || "yAxis" == $DvtChartRefObjUtils$$ || "y2Axis" == $DvtChartRefObjUtils$$) {
        if ($DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.substring($DvtChartPieLabelUtils$$ + 1), "title" == $DvtChartPieLabelUtils$$) {
          if ("xAxis" == $DvtChartRefObjUtils$$) {
            return this.$_xAxisAutomation$.$getDomElementForSubId$($DvtChartPieLabelUtils$$);
          }
          if ("yAxis" == $DvtChartRefObjUtils$$) {
            return this.$_yAxisAutomation$.$getDomElementForSubId$($DvtChartPieLabelUtils$$);
          }
          if ("y2Axis" == $DvtChartRefObjUtils$$) {
            return this.$_y2AxisAutomation$.$getDomElementForSubId$($DvtChartPieLabelUtils$$);
          }
        } else {
          if ($DvtChartRefObjUtils$$ = $DvtChartPieLabelUtils$$.indexOf("["), $DvtChartAxisUtils$$ = $DvtChartPieLabelUtils$$.indexOf("]"), "referenceObject" == $DvtChartPieLabelUtils$$.substring(0, $DvtChartRefObjUtils$$) && ($DvtChartRefObjUtils$$ = this.$_getRefObjPeer$($DvtChartPieLabelUtils$$.substring($DvtChartRefObjUtils$$ + 1, $DvtChartAxisUtils$$)))) {
            return $DvtChartRefObjUtils$$.$getDisplayables$()[0].$getElem$();
          }
        }
      }
      if ("pie" == this.$_options$.type && ($DvtChartRefObjUtils$$ = this.$_chart$.$pieChart$.$getSliceDisplayable$($DvtSparkChartDefaults$$))) {
        return $DvtChartRefObjUtils$$.$getElem$();
      }
      var $DvtChartPieLabelInfo$$;
      "funnel" == this.$_options$.type ? $DvtChartPieLabelInfo$$ = $DvtChartFunnelRenderer$$.$_GROUP_INDEX$ : "pyramid" == this.$_options$.type ? $DvtChartPieLabelInfo$$ = $DvtChartPyramidRenderer$$.$_GROUP_INDEX$ : ($DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.substring($DvtSparkChartAutomation$$ + 1), $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.indexOf("["), $DvtChartAxisUtils$$ = $DvtSparkChartEventManager$$.indexOf("]"), 0 <= $DvtChartRefObjUtils$$ && 0 <= $DvtChartAxisUtils$$ && 
      ($DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.substring($DvtChartRefObjUtils$$ + 1, $DvtChartAxisUtils$$)));
      if ($DvtChartRefObjUtils$$ = this.$_getChartObjPeer$($DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$)) {
        return $DvtChartRefObjUtils$$.$getDisplayables$()[0].$getElem$();
      }
    }
    return null;
  };
  $DvtChartAutomation$$.prototype.$_getChartObjPeer$ = function $$DvtChartAutomation$$$$$_getChartObjPeer$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = this.$_chart$.$getChartObjPeers$(), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$getSeriesIndex$(), $DvtChartAxisUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$getGroupIndex$();
      if ($DvtChartRefObjUtils$$ == $dvt$$2$$ && $DvtChartAxisUtils$$ == $DvtSparkChartEventManager$$) {
        return $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$];
      }
    }
    return null;
  };
  $DvtChartAutomation$$.prototype.$_getRefObjPeer$ = function $$DvtChartAutomation$$$$$_getRefObjPeer$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = this.$_chart$.$getRefObjPeers$(), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartDefaults$$++) {
      if ($dvt$$2$$ == $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].$getIndex$()) {
        return $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$];
      }
    }
    return null;
  };
  $DvtChartAutomation$$.prototype.$_convertToLegendSubId$ = function $$DvtChartAutomation$$$$$_convertToLegendSubId$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.substring($dvt$$2$$.indexOf("[") + 1, $dvt$$2$$.indexOf("]"));
    var $DvtSparkChartEventManager$$ = this.$_legend$.$getOptions$();
    return "section" + this.$_legendAutomation$.$getIndicesFromSeries$(this.$_options$.series[$dvt$$2$$], $DvtSparkChartEventManager$$);
  };
  $DvtChartAutomation$$.prototype.$getDataItem$ = function $$DvtChartAutomation$$$$$getDataItem$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ("pie" == this.$_options$.type || "funnel" == this.$_options$.type || "pyramid" == this.$_options$.type) {
      $DvtSparkChartEventManager$$ = 0;
    }
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ ? {borderColor:$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), color:$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), label:$DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), targetValue:$DvtChartDataUtils$$.$getTargetValue$(this.$_chart$, $dvt$$2$$), tooltip:$DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$, 
    null, !1), value:$DvtChartDataUtils$$.getValue(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), open:$DvtSparkChartDefaults$$.open, close:$DvtSparkChartDefaults$$.close, high:$DvtChartDataUtils$$.$getHighValue$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), low:$DvtChartDataUtils$$.$getLowValue$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), volume:$DvtSparkChartDefaults$$.volume, x:$DvtChartDataUtils$$.$getXValue$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), 
    y:$DvtSparkChartDefaults$$.y, z:$DvtSparkChartDefaults$$.z, min:$DvtSparkChartDefaults$$.min, max:$DvtSparkChartDefaults$$.max, group:$DvtChartDataUtils$$.$getGroup$(this.$_chart$, $DvtSparkChartEventManager$$), series:$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $dvt$$2$$), selected:$DvtChartDataUtils$$.$isDataSelected$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$)} : null;
  };
  $DvtChartAutomation$$.prototype.$getGroup$ = function $$DvtChartAutomation$$$$$getGroup$$($dvt$$2$$) {
    return $DvtChartDataUtils$$.$getGroup$(this.$_chart$, $dvt$$2$$);
  };
  $DvtChartAutomation$$.prototype.$getSeries$ = function $$DvtChartAutomation$$$$$getSeries$$($dvt$$2$$) {
    return this.$_options$.series[$dvt$$2$$].name;
  };
  $DvtChartAutomation$$.prototype.$getGroupCount$ = function $$DvtChartAutomation$$$$$getGroupCount$$() {
    return $DvtChartDataUtils$$.$getGroupCount$(this.$_chart$);
  };
  $DvtChartAutomation$$.prototype.$getSeriesCount$ = function $$DvtChartAutomation$$$$$getSeriesCount$$() {
    return this.$_options$.series.length;
  };
  $DvtChartAutomation$$.prototype.$getTitle$ = function $$DvtChartAutomation$$$$$getTitle$$() {
    return this.$_options$.title.text;
  };
  $DvtChartAutomation$$.prototype.$getLegend$ = function $$DvtChartAutomation$$$$$getLegend$$() {
    var $DvtSparkChartEventManager$$ = this.$_legend$.$_bounds$, $DvtSparkChartDefaults$$ = this.$_legend$.$localToStage$(new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y));
    return {bounds:{x:$DvtSparkChartDefaults$$.x, y:$DvtSparkChartDefaults$$.y, width:$DvtSparkChartEventManager$$.$w$, height:$DvtSparkChartEventManager$$.$h$}, title:this.$_legend$.$getOptions$().title};
  };
  $DvtChartAutomation$$.prototype.$getPlotArea$ = function $$DvtChartAutomation$$$$$getPlotArea$$() {
    var $dvt$$2$$ = this.$_chart$.$_plotAreaSpace$;
    return {bounds:{x:$dvt$$2$$.x, y:$dvt$$2$$.y, width:$dvt$$2$$.$w$, height:$dvt$$2$$.$h$}};
  };
  $DvtChartAutomation$$.prototype.$getXAxis$ = function $$DvtChartAutomation$$$$$getXAxis$$() {
    return this.$_getAxis$("x");
  };
  $DvtChartAutomation$$.prototype.$getYAxis$ = function $$DvtChartAutomation$$$$$getYAxis$$() {
    return this.$_getAxis$("y");
  };
  $DvtChartAutomation$$.prototype.$getY2Axis$ = function $$DvtChartAutomation$$$$$getY2Axis$$() {
    return this.$_getAxis$("y2");
  };
  $DvtChartAutomation$$.prototype.$_getAxis$ = function $$DvtChartAutomation$$$$$_getAxis$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = "x" == $DvtSparkChartEventManager$$ ? this.$_xAxis$ : "y" == $DvtSparkChartEventManager$$ ? this.$_yAxis$ : this.$_y2Axis$;
    if ($DvtSparkChartDefaults$$) {
      var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$_bounds$, $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$.$localToStage$(new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y)), $DvtChartPieLabelUtils$$ = this.$_chart$;
      return {bounds:{x:$DvtChartRefObjUtils$$.x, y:$DvtChartRefObjUtils$$.y, width:$DvtSparkChartAutomation$$.$w$, height:$DvtSparkChartAutomation$$.$h$}, title:this.$_options$[$DvtSparkChartEventManager$$ + "Axis"].title, getPreferredSize:function($dvt$$2$$, $DvtSparkChartAutomation$$) {
        var $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$.$getOptions$(), $DvtChartPieLabelInfo$$ = $DvtChartRefObjUtils$$.position, $DvtChartPieRenderUtils$$ = $DvtChartAxisUtils$$.$getTickLabelGapSize$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$), $DvtChartDataChangePyramidSlice$$ = $DvtChartTypeUtils$$.$isStandaloneXAxis$($DvtChartPieLabelUtils$$) || $DvtChartTypeUtils$$.$isStandaloneYAxis$($DvtChartPieLabelUtils$$) || $DvtChartTypeUtils$$.$isStandaloneY2Axis$($DvtChartPieLabelUtils$$) ? 
        2 : 0;
        "top" == $DvtChartPieLabelInfo$$ || "bottom" == $DvtChartPieLabelInfo$$ ? ($DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$.$getPreferredSize$($DvtChartRefObjUtils$$, $dvt$$2$$, $DvtSparkChartAutomation$$ - $DvtChartPieRenderUtils$$ - $DvtChartDataChangePyramidSlice$$), $DvtChartRefObjUtils$$.$h$ = Math.ceil($DvtChartRefObjUtils$$.$h$ + $DvtChartPieRenderUtils$$ + $DvtChartDataChangePyramidSlice$$)) : ($DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$.$getPreferredSize$($DvtChartRefObjUtils$$, 
        $dvt$$2$$ - $DvtChartPieRenderUtils$$ - $DvtChartDataChangePyramidSlice$$, $DvtSparkChartAutomation$$), $DvtChartRefObjUtils$$.$w$ = Math.ceil($DvtChartRefObjUtils$$.$w$ + $DvtChartPieRenderUtils$$ + $DvtChartDataChangePyramidSlice$$));
        return {width:$DvtChartRefObjUtils$$.$w$, height:$DvtChartRefObjUtils$$.$h$};
      }};
    }
    return null;
  };
  $dvt$$2$$.$Automation$.prototype.$IsTooltipElement$ = function $$dvt$$2$$$$Automation$$$$IsTooltipElement$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.getAttribute("id");
    return !$DvtSparkChartEventManager$$ || 0 != $DvtSparkChartEventManager$$.indexOf($DvtChartDataCursor$$.$TOOLTIP_ID$) && 0 != $DvtSparkChartEventManager$$.indexOf($dvt$$2$$.$HtmlTooltipManager$.$_TOOLTIP_DIV_ID$) ? !1 : !0;
  };
  $dvt$$2$$.$Bundle$.$addDefaultStrings$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, {DEFAULT_GROUP_NAME:"Group {0}", LABEL_SERIES:"Series", LABEL_GROUP:"Group", LABEL_VALUE:"Value", LABEL_TARGET_VALUE:"Target", LABEL_X:"X", LABEL_Y:"Y", LABEL_Z:"Z", LABEL_PERCENTAGE:"Percentage", LABEL_MIN:"Min", LABEL_MAX:"Max", LABEL_HIGH:"High", LABEL_LOW:"Low", LABEL_OPEN:"Open", LABEL_CLOSE:"Close", LABEL_VOLUME:"Volume", LABEL_Q1:"Q1", LABEL_Q2:"Q2", LABEL_Q3:"Q3", LABEL_OTHER:"Other", MARQUEE_SELECT:"Marquee select", 
  MARQUEE_ZOOM:"Marquee zoom", PAN:"Pan"});
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartEventManager$$, $dvt$$2$$.$EventManager$);
  $DvtChartEventManager$$.$DRAG_MODE_PAN$ = "pan";
  $DvtChartEventManager$$.$DRAG_MODE_ZOOM$ = "zoom";
  $DvtChartEventManager$$.$DRAG_MODE_SELECT$ = "select";
  $DvtChartEventManager$$.$DRAG_MODE_OFF$ = "off";
  $DvtChartEventManager$$.prototype.$getComponent$ = function $$DvtChartEventManager$$$$$getComponent$$() {
    return this.$_chart$;
  };
  $DvtChartEventManager$$.prototype.$addListeners$ = function $$DvtChartEventManager$$$$$addListeners$$($DvtSparkChartEventManager$$) {
    $dvt$$2$$.$SvgDocumentUtils$.$addDragListeners$(this.$_chart$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
    $DvtChartEventManager$$.$superclass$.$addListeners$.call(this, $DvtSparkChartEventManager$$);
    $dvt$$2$$.$Agent$.$isTouchDevice$() || $DvtSparkChartEventManager$$.$addEvtListener$($dvt$$2$$.MouseEvent.$MOUSEWHEEL$, this.$OnMouseWheel$, !1, this);
  };
  $DvtChartEventManager$$.prototype.$removeListeners$ = function $$DvtChartEventManager$$$$$removeListeners$$($DvtSparkChartEventManager$$) {
    $DvtChartEventManager$$.$superclass$.$removeListeners$.call(this, $DvtSparkChartEventManager$$);
    $dvt$$2$$.$Agent$.$isTouchDevice$() || $DvtSparkChartEventManager$$.$removeEvtListener$($dvt$$2$$.MouseEvent.$MOUSEWHEEL$, this.$OnMouseWheel$, !1, this);
  };
  $DvtChartEventManager$$.prototype.$getLogicalObject$ = function $$DvtChartEventManager$$$$$getLogicalObject$$($dvt$$2$$) {
    return this.$GetLogicalObject$($dvt$$2$$, !0);
  };
  $DvtChartEventManager$$.prototype.$_getRelativePosition$ = function $$DvtChartEventManager$$$$$_getRelativePosition$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = this.$_context$.$getStageAbsolutePosition$());
    return new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$ - this.$_stageAbsolutePosition$.x, $DvtSparkChartDefaults$$ - this.$_stageAbsolutePosition$.y);
  };
  $DvtChartEventManager$$.prototype.$_getDragHandler$ = function $$DvtChartEventManager$$$$$_getDragHandler$$($dvt$$2$$) {
    $dvt$$2$$ && "user" == this.$_chart$.$getOptions$().dragMode && $DvtChartTypeUtils$$.$isBLAC$(this.$_chart$) && (this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_PAN$ || this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_ZOOM$) && (this.$_panZoomHandler$.$isWithinBounds$($dvt$$2$$) ? this.$_dragMode$ = $DvtChartEventManager$$.$DRAG_MODE_PAN$ : this.$_dragMode$ = $DvtChartEventManager$$.$DRAG_MODE_ZOOM$);
    return this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_PAN$ ? this.$_panZoomHandler$ : this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_ZOOM$ ? this.$_marqueeZoomHandler$ : this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_SELECT$ ? this.$_marqueeSelectHandler$ : null;
  };
  $DvtChartEventManager$$.prototype.$_onDragStart$ = function $$DvtChartEventManager$$$$$_onDragStart$$($DvtSparkChartEventManager$$) {
    return $dvt$$2$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragStart$($DvtSparkChartEventManager$$) : this.$_onMouseDragStart$($DvtSparkChartEventManager$$);
  };
  $DvtChartEventManager$$.prototype.$_onDragMove$ = function $$DvtChartEventManager$$$$$_onDragMove$$($DvtSparkChartEventManager$$) {
    return $dvt$$2$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragMove$($DvtSparkChartEventManager$$) : this.$_onMouseDragMove$($DvtSparkChartEventManager$$);
  };
  $DvtChartEventManager$$.prototype.$_onDragEnd$ = function $$DvtChartEventManager$$$$$_onDragEnd$$($DvtSparkChartEventManager$$) {
    return $dvt$$2$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragEnd$($DvtSparkChartEventManager$$) : this.$_onMouseDragEnd$($DvtSparkChartEventManager$$);
  };
  $DvtChartEventManager$$.prototype.$_onMouseDragStart$ = function $$DvtChartEventManager$$$$$_onMouseDragStart$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY), $DvtSparkChartDefaults$$ = this.$_getDragHandler$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$2$$));
    $DvtChartRefObjUtils$$ && $DvtChartRefObjUtils$$.$isSelectable$ && $DvtChartRefObjUtils$$.$isSelectable$() || 0 != $dvt$$2$$.button || !$DvtSparkChartDefaults$$ || (($DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$processDragStart$($DvtSparkChartEventManager$$, $dvt$$2$$.ctrlKey)) && this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartAutomation$$), this.$_chart$.setCursor($DvtSparkChartDefaults$$.getCursor($DvtSparkChartEventManager$$)), this.$setDragButtonsVisible$(!1), this.$_chart$ != 
    this.$getCtx$().$getCurrentKeyboardFocus$() && this.$getCtx$().$setCurrentKeyboardFocus$(this.$_chart$));
    return $DvtSparkChartAutomation$$ ? (this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processEnd$(), !0) : !1;
  };
  $DvtChartEventManager$$.prototype.$_onMouseDragMove$ = function $$DvtChartEventManager$$$$$_onMouseDragMove$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY), $DvtSparkChartDefaults$$ = this.$_getDragHandler$(), $DvtSparkChartAutomation$$;
    $DvtSparkChartDefaults$$ && ($DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$processDragMove$($DvtSparkChartEventManager$$, $dvt$$2$$.ctrlKey)) && (this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartAutomation$$), this.$setDragButtonsVisible$(!1));
    $DvtSparkChartAutomation$$ && $dvt$$2$$.stopPropagation();
  };
  $DvtChartEventManager$$.prototype.$_onMouseDragEnd$ = function $$DvtChartEventManager$$$$$_onMouseDragEnd$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY), $DvtSparkChartDefaults$$ = this.$_getDragHandler$();
    if ($DvtSparkChartDefaults$$) {
      if ($dvt$$2$$ = $DvtSparkChartDefaults$$.$processDragEnd$($DvtSparkChartEventManager$$, $dvt$$2$$.ctrlKey)) {
        this.$_callback$.call(this.$_callbackObj$, $dvt$$2$$), this.$autoToggleZoomButton$();
      }
      this.$_chart$.setCursor($DvtSparkChartDefaults$$.getCursor($DvtSparkChartEventManager$$));
      ($DvtSparkChartDefaults$$ = this.$_chart$.$_axisSpace$) && this.$setDragButtonsVisible$($DvtSparkChartDefaults$$.$containsPoint$($DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y));
    }
    this.$_stageAbsolutePosition$ = null;
  };
  $DvtChartEventManager$$.prototype.$OnMouseMove$ = function $$DvtChartEventManager$$$$$OnMouseMove$$($DvtSparkChartEventManager$$) {
    $DvtChartEventManager$$.$superclass$.$OnMouseMove$.call(this, $DvtSparkChartEventManager$$);
    var $DvtSparkChartDefaults$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$.pageX, $DvtSparkChartEventManager$$.pageY);
    this.$_dataCursorHandler$ && (this.$GetCurrentTargetForEvent$($DvtSparkChartEventManager$$) instanceof $dvt$$2$$.$Button$ ? this.$_dataCursorHandler$.$processEnd$() : this.$_dataCursorHandler$.$processMove$($DvtSparkChartDefaults$$));
    ($DvtSparkChartEventManager$$ = this.$_getDragHandler$($DvtSparkChartDefaults$$)) ? this.$_chart$.setCursor($DvtSparkChartEventManager$$.getCursor($DvtSparkChartDefaults$$)) : this.$_chart$.setCursor("default");
  };
  $DvtChartEventManager$$.prototype.$OnMouseOut$ = function $$DvtChartEventManager$$$$$OnMouseOut$$($dvt$$2$$) {
    $DvtChartEventManager$$.$superclass$.$OnMouseOut$.call(this, $dvt$$2$$);
    var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY), $DvtSparkChartDefaults$$ = this.$_chart$.$_axisSpace$;
    $DvtSparkChartDefaults$$ && this.$setDragButtonsVisible$($DvtSparkChartDefaults$$.$containsPoint$($DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y));
    this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processOut$($DvtSparkChartEventManager$$);
    this.$_stageAbsolutePosition$ = null;
    this.$GetLogicalObject$($dvt$$2$$.target);
  };
  $DvtChartEventManager$$.prototype.$OnMouseWheel$ = function $$DvtChartEventManager$$$$$OnMouseWheel$$($dvt$$2$$) {
    if ($DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
      var $DvtSparkChartEventManager$$ = null != $dvt$$2$$.wheelDelta ? $dvt$$2$$.wheelDelta : 0, $DvtSparkChartDefaults$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY);
      this.$_panZoomHandler$ && ($DvtSparkChartEventManager$$ = this.$_panZoomHandler$.$processMouseWheel$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$)) && ($dvt$$2$$.preventDefault(), $dvt$$2$$.stopPropagation(), this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartEventManager$$), this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processMove$($DvtSparkChartDefaults$$));
    }
  };
  $DvtChartEventManager$$.prototype.$ShowFocusEffect$ = function $$DvtChartEventManager$$$$$ShowFocusEffect$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if (this.$_dataCursorHandler$) {
      var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$_dataPos$;
      if ($DvtSparkChartAutomation$$) {
        var $DvtChartRefObjUtils$$ = this.$_chart$.$_plotAreaSpace$;
        this.$_dataCursorHandler$.$processMove$(new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$.x + $DvtChartRefObjUtils$$.x, $DvtSparkChartAutomation$$.y + $DvtChartRefObjUtils$$.y));
      }
    }
    $DvtChartEventManager$$.$superclass$.$ShowFocusEffect$.call(this, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartEventManager$$.prototype.$OnBlur$ = function $$DvtChartEventManager$$$$$OnBlur$$($dvt$$2$$) {
    this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processEnd$();
    $DvtChartEventManager$$.$superclass$.$OnBlur$.call(this, $dvt$$2$$);
  };
  $DvtChartEventManager$$.prototype.$OnClickInternal$ = function $$DvtChartEventManager$$$$$OnClickInternal$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$GetLogicalObject$($dvt$$2$$.target);
    $dvt$$2$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY);
    this.$SeriesFocusHandler$ && this.$SeriesFocusHandler$.$processSeriesFocus$($dvt$$2$$, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$ && (this.$processActionEvent$($DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$.$isSelectable$ && $DvtSparkChartEventManager$$.$isSelectable$() || this.$processDrillEvent$($DvtSparkChartEventManager$$));
  };
  $DvtChartEventManager$$.prototype.$OnDblClickInternal$ = function $$DvtChartEventManager$$$$$OnDblClickInternal$$($dvt$$2$$) {
    ($dvt$$2$$ = this.$GetLogicalObject$($dvt$$2$$.target)) && $dvt$$2$$.$isSelectable$ && $dvt$$2$$.$isSelectable$() && this.$processDrillEvent$($dvt$$2$$);
  };
  $DvtChartEventManager$$.prototype.$HandleTouchHoverStartInternal$ = function $$DvtChartEventManager$$$$$HandleTouchHoverStartInternal$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$GetLogicalObject$($dvt$$2$$.target);
    this.$TouchManager$.$setTooltipEnabled$($dvt$$2$$.$touch$.identifier, this.$getTooltipsEnabled$($DvtSparkChartEventManager$$));
    return !1;
  };
  $DvtChartEventManager$$.prototype.$HandleTouchHoverMoveInternal$ = function $$DvtChartEventManager$$$$$HandleTouchHoverMoveInternal$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$GetLogicalObject$($dvt$$2$$.target);
    this.$TouchManager$.$setTooltipEnabled$($dvt$$2$$.$touch$.identifier, this.$getTooltipsEnabled$($DvtSparkChartEventManager$$));
    return !1;
  };
  $DvtChartEventManager$$.prototype.$HandleTouchHoverEndInternal$ = function $$DvtChartEventManager$$$$$HandleTouchHoverEndInternal$$($dvt$$2$$) {
    if ($dvt$$2$$ = this.$GetLogicalObject$($dvt$$2$$.target)) {
      this.$processActionEvent$($dvt$$2$$), $dvt$$2$$.$isSelectable$ && $dvt$$2$$.$isSelectable$() || this.$processDrillEvent$($dvt$$2$$);
    }
  };
  $DvtChartEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtChartEventManager$$$$$HandleTouchClickInternal$$($dvt$$2$$) {
    if ($dvt$$2$$ = this.$GetLogicalObject$($dvt$$2$$.target)) {
      this.$processActionEvent$($dvt$$2$$), $dvt$$2$$.$isSelectable$ && $dvt$$2$$.$isSelectable$() || this.$processDrillEvent$($dvt$$2$$);
    }
  };
  $DvtChartEventManager$$.prototype.$HandleTouchDblClickInternal$ = function $$DvtChartEventManager$$$$$HandleTouchDblClickInternal$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$GetLogicalObject$($dvt$$2$$.target);
    $DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$.$isSelectable$ && $DvtSparkChartEventManager$$.$isSelectable$() && ($dvt$$2$$.preventDefault(), $dvt$$2$$.stopPropagation(), this.$processDrillEvent$($DvtSparkChartEventManager$$));
  };
  $DvtChartEventManager$$.prototype.$processActionEvent$ = function $$DvtChartEventManager$$$$$processActionEvent$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$.$getAction$ && $DvtSparkChartEventManager$$.$getAction$() && this.$FireEvent$($dvt$$2$$.$EventFactory$.$newActionEvent$("action", $DvtSparkChartEventManager$$.$getAction$(), $DvtSparkChartEventManager$$.getId()));
  };
  $DvtChartEventManager$$.prototype.$processDrillEvent$ = function $$DvtChartEventManager$$$$$processDrillEvent$$($DvtSparkChartEventManager$$) {
    if ($DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$.$isDrillable$ && $DvtSparkChartEventManager$$.$isDrillable$()) {
      var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.getId();
      $DvtSparkChartEventManager$$ instanceof $DvtChartObjPeer$$ ? this.$FireEvent$($dvt$$2$$.$EventFactory$.$newChartDrillEvent$($DvtSparkChartDefaults$$.getId ? $DvtSparkChartDefaults$$.getId() : $DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$.$getSeries$(), $DvtSparkChartEventManager$$.$getGroup$())) : $DvtSparkChartEventManager$$ instanceof $DvtChartPieSlice$$ && this.$FireEvent$($dvt$$2$$.$EventFactory$.$newChartDrillEvent$($DvtSparkChartDefaults$$.getId(), $DvtSparkChartDefaults$$.$getSeries$(), 
      $DvtSparkChartDefaults$$.$getGroup$()));
    }
  };
  $DvtChartEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtChartEventManager$$$$$ProcessRolloverEvent$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartEventManager$$ = this.$_chart$.$getOptions$();
    if ("dim" == $DvtChartEventUtils$$.$getHoverBehavior$(this.$_chart$)) {
      $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$getCategories$ ? $DvtSparkChartDefaults$$.$getCategories$() : [];
      $DvtSparkChartEventManager$$.highlightedCategories = $DvtSparkChartAutomation$$ ? $DvtSparkChartDefaults$$.slice() : null;
      $DvtSparkChartAutomation$$ = $dvt$$2$$.$EventFactory$.$newCategoryHighlightEvent$($DvtSparkChartEventManager$$.highlightedCategories, $DvtSparkChartAutomation$$);
      $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$getHoverBehaviorDelay$(this.$_chart$);
      var $DvtChartRefObjUtils$$ = this.$_chart$.$getObjects$();
      this.$_chart$.$pieChart$ && ($DvtChartRefObjUtils$$ = $DvtChartRefObjUtils$$.concat(this.$_chart$.$pieChart$.$_slices$));
      this.$RolloverHandler$.$processEvent$($DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtSparkChartDefaults$$, "any" == $DvtSparkChartEventManager$$.highlightMatch);
    }
  };
  $DvtChartEventManager$$.prototype.$_onTouchDragStart$ = function $$DvtChartEventManager$$$$$_onTouchDragStart$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.touches, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$;
    if (1 == $DvtSparkChartEventManager$$.length) {
      var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[0].pageX, $DvtSparkChartEventManager$$[0].pageY), $DvtChartRefObjUtils$$ = this.$_getDragHandler$();
      $DvtChartRefObjUtils$$ ? $DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$.$processDragStart$($DvtSparkChartEventManager$$, !0) : this.$_dataCursorHandler$ && (this.$_dataCursorHandler$.$processMove$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = !0);
    } else {
      2 == $DvtSparkChartEventManager$$.length && this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && (this.$endDrag$(), $DvtSparkChartDefaults$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[0].pageX, $DvtSparkChartEventManager$$[0].pageY), $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[1].pageX, $DvtSparkChartEventManager$$[1].pageY), $DvtSparkChartDefaults$$ = this.$_panZoomHandler$.$processPinchStart$($DvtSparkChartDefaults$$, 
      $DvtSparkChartEventManager$$));
    }
    $DvtSparkChartDefaults$$ && (this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartDefaults$$), this.$getCtx$().$getTooltipManager$().$hideTooltip$());
    return $DvtSparkChartDefaults$$ || $DvtSparkChartAutomation$$ ? ($dvt$$2$$.preventDefault(), $dvt$$2$$.stopPropagation(), this.$setDragButtonsVisible$(!1), !0) : !1;
  };
  $DvtChartEventManager$$.prototype.$_onTouchDragMove$ = function $$DvtChartEventManager$$$$$_onTouchDragMove$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.touches, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$;
    if (1 == $DvtSparkChartEventManager$$.length) {
      var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[0].pageX, $DvtSparkChartEventManager$$[0].pageY), $DvtChartRefObjUtils$$ = this.$_getDragHandler$();
      $DvtChartRefObjUtils$$ ? $DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$.$processDragMove$($DvtSparkChartEventManager$$, !0) : this.$_dataCursorHandler$ && (this.$_dataCursorHandler$.$processMove$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = !0);
    } else {
      2 == $DvtSparkChartEventManager$$.length && this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && ($DvtSparkChartDefaults$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[0].pageX, $DvtSparkChartEventManager$$[0].pageY), $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[1].pageX, $DvtSparkChartEventManager$$[1].pageY), $DvtSparkChartDefaults$$ = this.$_panZoomHandler$.$processPinchMove$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$))
      ;
    }
    ($DvtSparkChartDefaults$$ || $DvtSparkChartAutomation$$) && $dvt$$2$$.preventDefault();
    $DvtSparkChartDefaults$$ && (this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartDefaults$$), this.$getCtx$().$getTooltipManager$().$hideTooltip$());
  };
  $DvtChartEventManager$$.prototype.$_onTouchDragEnd$ = function $$DvtChartEventManager$$$$$_onTouchDragEnd$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$endDrag$(), $DvtSparkChartDefaults$$;
    this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && ($DvtSparkChartDefaults$$ = this.$_panZoomHandler$.$processPinchEnd$()) && this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartDefaults$$);
    if ($DvtSparkChartEventManager$$ || $DvtSparkChartDefaults$$) {
      $dvt$$2$$.preventDefault(), this.$getCtx$().$getTooltipManager$().$hideTooltip$();
    }
    this.$_stageAbsolutePosition$ = null;
    this.$setDragButtonsVisible$(!0);
  };
  $DvtChartEventManager$$.prototype.$endDrag$ = function $$DvtChartEventManager$$$$$endDrag$$() {
    var $dvt$$2$$ = this.$_getDragHandler$(), $DvtSparkChartEventManager$$;
    $dvt$$2$$ && ($DvtSparkChartEventManager$$ = $dvt$$2$$.$processDragEnd$(null, !0)) && this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartEventManager$$);
    this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processEnd$();
    $DvtSparkChartEventManager$$ && this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartEventManager$$.prototype.$zoomBy$ = function $$DvtChartEventManager$$$$$zoomBy$$($dvt$$2$$) {
    this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && ($dvt$$2$$ = this.$_panZoomHandler$.$zoomBy$($dvt$$2$$)) && this.$_callback$.call(this.$_callbackObj$, $dvt$$2$$);
  };
  $DvtChartEventManager$$.prototype.$panBy$ = function $$DvtChartEventManager$$$$$panBy$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if (this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isScrollable$(this.$_chart$)) {
      var $DvtSparkChartDefaults$$ = this.$_panZoomHandler$.$panBy$($dvt$$2$$, $DvtSparkChartEventManager$$);
      $DvtSparkChartDefaults$$ && this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartDefaults$$);
    }
  };
  $DvtChartEventManager$$.prototype.$hideHoverFeedback$ = function $$DvtChartEventManager$$$$$hideHoverFeedback$$() {
    this.$hideTooltip$();
    this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processEnd$();
  };
  $DvtChartEventManager$$.prototype.$hideTooltip$ = function $$DvtChartEventManager$$$$$hideTooltip$$() {
    this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$_dataCursorShown$ || $DvtChartEventManager$$.$superclass$.$hideTooltip$.call(this);
  };
  $DvtChartEventManager$$.prototype.$getTooltipsEnabled$ = function $$DvtChartEventManager$$$$$getTooltipsEnabled$$($dvt$$2$$) {
    return this.$_dataCursorHandler$ && ($dvt$$2$$ instanceof $DvtChartObjPeer$$ || $dvt$$2$$ instanceof $DvtChartRefObjPeer$$ || this.$_dataCursorHandler$.$_dataCursorShown$) ? !1 : $DvtChartEventManager$$.$superclass$.$getTooltipsEnabled$.call(this);
  };
  $DvtChartEventManager$$.prototype.$setDataCursorHandler$ = function $$DvtChartEventManager$$$$$setDataCursorHandler$$($dvt$$2$$) {
    this.$_dataCursorHandler$ = $dvt$$2$$;
  };
  $DvtChartEventManager$$.prototype.$setPanZoomHandler$ = function $$DvtChartEventManager$$$$$setPanZoomHandler$$($dvt$$2$$) {
    this.$_panZoomHandler$ = $dvt$$2$$;
  };
  $DvtChartEventManager$$.prototype.$setMarqueeZoomHandler$ = function $$DvtChartEventManager$$$$$setMarqueeZoomHandler$$($dvt$$2$$) {
    this.$_marqueeZoomHandler$ = $dvt$$2$$;
  };
  $DvtChartEventManager$$.prototype.$setMarqueeSelectHandler$ = function $$DvtChartEventManager$$$$$setMarqueeSelectHandler$$($dvt$$2$$) {
    this.$_marqueeSelectHandler$ = $dvt$$2$$;
  };
  $DvtChartEventManager$$.prototype.$cancelMarquee$ = function $$DvtChartEventManager$$$$$cancelMarquee$$($dvt$$2$$) {
    this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_ZOOM$ ? this.$_marqueeZoomHandler$.$cancelMarquee$() && $dvt$$2$$.preventDefault() : this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_SELECT$ && this.$_marqueeSelectHandler$ && this.$_marqueeSelectHandler$.$cancelMarquee$() && this.$_chart$.$render$();
  };
  $DvtChartEventManager$$.prototype.$setDragMode$ = function $$DvtChartEventManager$$$$$setDragMode$$($dvt$$2$$) {
    this.$_dragMode$ = null == $dvt$$2$$ ? this.$_getDefaultDragMode$() : $dvt$$2$$;
    !this.$_chart$.$xAxis$.$isFullViewport$() || this.$_chart$.$yAxis$ && !this.$_chart$.$yAxis$.$isFullViewport$() || this.$autoToggleZoomButton$();
  };
  $DvtChartEventManager$$.prototype.$_getDefaultDragMode$ = function $$DvtChartEventManager$$$$$_getDefaultDragMode$$() {
    return $dvt$$2$$.$Agent$.$isTouchDevice$() ? $DvtChartEventManager$$.$DRAG_MODE_OFF$ : $DvtChartEventUtils$$.$isScrollable$(this.$_chart$) ? $DvtChartEventManager$$.$DRAG_MODE_PAN$ : "multiple" == this.$_chart$.$getOptions$().selectionMode ? $DvtChartEventManager$$.$DRAG_MODE_SELECT$ : null;
  };
  $DvtChartEventManager$$.prototype.$onZoomButtonClick$ = function $$DvtChartEventManager$$$$$onZoomButtonClick$$() {
    this.$zoomButton$.$_bToggled$ ? (this.$selectButton$ && this.$selectButton$.$setToggled$(!1), this.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_ZOOM$)) : this.$setDragMode$(null);
  };
  $DvtChartEventManager$$.prototype.$onPanButtonClick$ = function $$DvtChartEventManager$$$$$onPanButtonClick$$() {
    this.$panButton$.$_bToggled$ ? (this.$selectButton$ && this.$selectButton$.$setToggled$(!1), this.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_PAN$)) : this.$setDragMode$(null);
  };
  $DvtChartEventManager$$.prototype.$onSelectButtonClick$ = function $$DvtChartEventManager$$$$$onSelectButtonClick$$() {
    this.$selectButton$.$_bToggled$ ? (this.$zoomButton$ && this.$zoomButton$.$setToggled$(!1), this.$panButton$ && this.$panButton$.$setToggled$(!1), this.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_SELECT$)) : this.$setDragMode$(null);
  };
  $DvtChartEventManager$$.prototype.$setDragButtonsVisible$ = function $$DvtChartEventManager$$$$$setDragButtonsVisible$$($dvt$$2$$) {
    $dvt$$2$$ && !this.$_dragButtonsVisible$ ? (this.$_chart$.$showDragButtons$(), this.$_dragButtonsVisible$ = !0) : !$dvt$$2$$ && this.$_dragButtonsVisible$ && (this.$_chart$.$hideDragButtons$(), this.$_dragButtonsVisible$ = !1);
  };
  $DvtChartEventManager$$.prototype.$autoToggleZoomButton$ = function $$DvtChartEventManager$$$$$autoToggleZoomButton$$() {
    !$dvt$$2$$.$Agent$.$isTouchDevice$() && this.$zoomButton$ && (this.$_chart$.$xAxis$.$isFullViewport$() && this.$_chart$.$yAxis$.$isFullViewport$() ? this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_PAN$ && (this.$zoomButton$.$setToggled$(!0), this.$onZoomButtonClick$()) : this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_ZOOM$ && (this.$zoomButton$.$setToggled$(!1), this.$onZoomButtonClick$()));
  };
  $DvtChartEventManager$$.prototype.$GetTouchResponse$ = function $$DvtChartEventManager$$$$$GetTouchResponse$$() {
    return this.$_dragMode$ && this.$_dragMode$ != $DvtChartEventManager$$.$DRAG_MODE_OFF$ ? $dvt$$2$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : this.$_chart$.$getOptions$().touchResponse;
  };
  $DvtChartEventManager$$.prototype.$isDndSupported$ = function $$DvtChartEventManager$$$$$isDndSupported$$() {
    return !0;
  };
  $DvtChartEventManager$$.prototype.$GetDragSourceType$ = function $$DvtChartEventManager$$$$$GetDragSourceType$$() {
    var $dvt$$2$$ = this.$DragSource$.$_dragObj$;
    return $dvt$$2$$ instanceof $DvtChartObjPeer$$ && 0 <= $dvt$$2$$.$getSeriesIndex$() && 0 <= $dvt$$2$$.$getGroupIndex$() || $dvt$$2$$ instanceof $DvtChartPieSlice$$ ? "items" : null;
  };
  $DvtChartEventManager$$.prototype.$GetDragDataContexts$ = function $$DvtChartEventManager$$$$$GetDragDataContexts$$() {
    if (this.$_chart$.$isSelectionSupported$() && 1 < this.$_chart$.$getSelectionHandler$().$_selection$.length) {
      for (var $dvt$$2$$ = this.$_chart$.$getSelectionHandler$().getSelection(), $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
        var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataContext$(this.$_chart$, $dvt$$2$$[$DvtSparkChartDefaults$$].$getSeriesIndex$(), $dvt$$2$$[$DvtSparkChartDefaults$$].$getGroupIndex$(), $dvt$$2$$[$DvtSparkChartDefaults$$].$getNestedDataItemIndex$());
        $DvtSparkChartEventManager$$.push($DvtSparkChartAutomation$$);
      }
      return $DvtSparkChartEventManager$$;
    }
    $dvt$$2$$ = this.$DragSource$.$_dragObj$;
    return $dvt$$2$$ instanceof $DvtChartObjPeer$$ ? [$DvtChartDataUtils$$.$getDataContext$(this.$_chart$, $dvt$$2$$.$getSeriesIndex$(), $dvt$$2$$.$getGroupIndex$(), $dvt$$2$$.$getNestedDataItemIndex$())] : $dvt$$2$$ instanceof $DvtChartPieSlice$$ ? [$DvtChartDataUtils$$.$getDataContext$(this.$_chart$, $dvt$$2$$.$getSeriesIndex$(), 0)] : null;
  };
  $DvtChartEventManager$$.prototype.$GetDropOffset$ = function $$DvtChartEventManager$$$$$GetDropOffset$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$DragSource$.$_dragObj$;
    return $DvtSparkChartDefaults$$ instanceof $DvtChartObjPeer$$ && ($DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$_dataPos$) ? ($DvtSparkChartDefaults$$ = this.$_chart$.$getPlotArea$().$localToStage$($DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$.pageX, $DvtSparkChartEventManager$$.pageY), new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.x - $DvtSparkChartEventManager$$.x, $DvtSparkChartDefaults$$.y - $DvtSparkChartEventManager$$.y)) : 
    null;
  };
  $DvtChartEventManager$$.prototype.$GetDropTargetType$ = function $$DvtChartEventManager$$$$$GetDropTargetType$$($dvt$$2$$) {
    $dvt$$2$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY);
    return this.$_chart$.$_plotAreaSpace$.$containsPoint$($dvt$$2$$.x, $dvt$$2$$.y) ? "plotArea" : $DvtChartAxisUtils$$.$isAxisRendered$(this.$_chart$, "x") && $DvtChartAxisUtils$$.$axisContainsPoint$(this.$_chart$.$xAxis$, $dvt$$2$$) ? "xAxis" : $DvtChartAxisUtils$$.$isAxisRendered$(this.$_chart$, "y") && $DvtChartAxisUtils$$.$axisContainsPoint$(this.$_chart$.$yAxis$, $dvt$$2$$) ? "yAxis" : $DvtChartAxisUtils$$.$isAxisRendered$(this.$_chart$, "y2") && $DvtChartAxisUtils$$.$axisContainsPoint$(this.$_chart$.$y2Axis$, 
    $dvt$$2$$) ? "y2Axis" : null;
  };
  $DvtChartEventManager$$.prototype.$GetDropEventPayload$ = function $$DvtChartEventManager$$$$$GetDropEventPayload$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getNativeEvent$().dataTransfer, $DvtSparkChartAutomation$$ = Number($DvtSparkChartDefaults$$.getData($dvt$$2$$.$EventManager$.$DROP_OFFSET_X_DATA_TYPE$)) || 0, $DvtSparkChartDefaults$$ = Number($DvtSparkChartDefaults$$.getData($dvt$$2$$.$EventManager$.$DROP_OFFSET_Y_DATA_TYPE$)) || 0;
    $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$.pageX, $DvtSparkChartEventManager$$.pageY);
    return this.$_chart$.$getValuesAt$($DvtSparkChartEventManager$$.x + $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$.y + $DvtSparkChartDefaults$$);
  };
  $DvtChartEventManager$$.prototype.$ShowDropEffect$ = function $$DvtChartEventManager$$$$$ShowDropEffect$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$GetDropTargetType$($dvt$$2$$);
    $dvt$$2$$ = this.$_chart$.$getOptions$()._dropColor;
    "plotArea" == $DvtSparkChartEventManager$$ ? ($DvtSparkChartEventManager$$ = this.$_chart$.$_cache$.$getFromCache$("plotAreaBackground")) && $DvtSparkChartEventManager$$.$setSolidFill$($dvt$$2$$) : "xAxis" == $DvtSparkChartEventManager$$ ? this.$_chart$.$xAxis$.$_cache$.$getFromCache$("background").$setSolidFill$($dvt$$2$$) : "yAxis" == $DvtSparkChartEventManager$$ ? this.$_chart$.$yAxis$.$_cache$.$getFromCache$("background").$setSolidFill$($dvt$$2$$) : "y2Axis" == $DvtSparkChartEventManager$$ && 
    this.$_chart$.$y2Axis$.$_cache$.$getFromCache$("background").$setSolidFill$($dvt$$2$$);
  };
  $DvtChartEventManager$$.prototype.$ClearDropEffect$ = function $$DvtChartEventManager$$$$$ClearDropEffect$$() {
    function $dvt$$2$$($DvtSparkChartEventManager$$) {
      $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$_cache$.$getFromCache$("background")) && $DvtSparkChartEventManager$$.$setInvisibleFill$();
    }
    var $DvtSparkChartEventManager$$ = this.$_chart$.$_cache$.$getFromCache$("plotAreaBackground");
    if ($DvtSparkChartEventManager$$) {
      var $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$getBackgroundColor$(this.$_chart$);
      $DvtSparkChartDefaults$$ ? $DvtSparkChartEventManager$$.$setSolidFill$($DvtSparkChartDefaults$$) : $DvtSparkChartEventManager$$.$setInvisibleFill$();
    }
    $dvt$$2$$(this.$_chart$.$xAxis$);
    $dvt$$2$$(this.$_chart$.$yAxis$);
    $dvt$$2$$(this.$_chart$.$y2Axis$);
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartKeyboardHandler$$, $dvt$$2$$.$KeyboardHandler$);
  $DvtChartKeyboardHandler$$.prototype.Init = function $$DvtChartKeyboardHandler$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartKeyboardHandler$$.$superclass$.Init.call(this, $dvt$$2$$);
    this.$_chart$ = $DvtSparkChartEventManager$$;
  };
  $DvtChartKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtChartKeyboardHandler$$$$$isSelectionEvent$$($dvt$$2$$) {
    return this.$isNavigationEvent$($dvt$$2$$) && !$dvt$$2$$.ctrlKey;
  };
  $DvtChartKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtChartKeyboardHandler$$$$$isMultiSelectEvent$$($DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.keyCode == $dvt$$2$$.KeyboardEvent.$SPACE$ && $DvtSparkChartEventManager$$.ctrlKey;
  };
  $DvtChartKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtChartKeyboardHandler$$$$$processKeyDown$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.keyCode;
    if ($DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$TAB$) {
      if ($DvtSparkChartDefaults$$ = this.$_eventManager$.$getFocus$()) {
        return $dvt$$2$$.$EventManager$.$consumeEvent$($DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$;
      }
      $DvtSparkChartDefaults$$ = $DvtChartEventUtils$$.$getKeyboardNavigables$(this.$_chart$);
      if (0 < $DvtSparkChartDefaults$$.length) {
        return $dvt$$2$$.$EventManager$.$consumeEvent$($DvtSparkChartEventManager$$), this.$getDefaultNavigable$($DvtSparkChartDefaults$$);
      }
    } else {
      if ($DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$ENTER$) {
        if ($DvtSparkChartDefaults$$ = this.$_eventManager$.$getFocus$()) {
          return this.$_eventManager$.$processActionEvent$($DvtSparkChartDefaults$$), this.$_eventManager$.$processDrillEvent$($DvtSparkChartDefaults$$), $dvt$$2$$.$EventManager$.$consumeEvent$($DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$;
        }
      } else {
        $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$ESCAPE$ ? this.$_eventManager$.$cancelMarquee$($DvtSparkChartEventManager$$) : $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$PAGE_UP$ ? (($DvtSparkChartEventManager$$.ctrlKey || $DvtSparkChartEventManager$$.shiftKey || $DvtChartTypeUtils$$.$isBLAC$(this.$_chart$)) && $DvtChartTypeUtils$$.$isVertical$(this.$_chart$) ? this.$_eventManager$.$panBy$(-.25, 0) : this.$_eventManager$.$panBy$(0, -.25), $dvt$$2$$.$EventManager$.$consumeEvent$($DvtSparkChartEventManager$$)) : 
        $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$PAGE_DOWN$ ? (($DvtSparkChartEventManager$$.ctrlKey || $DvtSparkChartEventManager$$.shiftKey || $DvtChartTypeUtils$$.$isBLAC$(this.$_chart$)) && $DvtChartTypeUtils$$.$isVertical$(this.$_chart$) ? this.$_eventManager$.$panBy$(.25, 0) : this.$_eventManager$.$panBy$(0, .25), $dvt$$2$$.$EventManager$.$consumeEvent$($DvtSparkChartEventManager$$)) : $dvt$$2$$.KeyboardEvent.$isEquals$($DvtSparkChartEventManager$$) || $dvt$$2$$.KeyboardEvent.$isPlus$($DvtSparkChartEventManager$$) ? 
        this.$_eventManager$.$zoomBy$(1.5) : ($dvt$$2$$.KeyboardEvent.$isMinus$($DvtSparkChartEventManager$$) || $dvt$$2$$.KeyboardEvent.$isUnderscore$($DvtSparkChartEventManager$$)) && this.$_eventManager$.$zoomBy$(1 / 1.5);
      }
    }
    return $DvtChartKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtSparkChartEventManager$$);
  };
  $DvtChartKeyboardHandler$$.prototype.$getDefaultNavigable$ = function $$DvtChartKeyboardHandler$$$$$getDefaultNavigable$$($dvt$$2$$) {
    if (!$dvt$$2$$ || 0 >= $dvt$$2$$.length) {
      return null;
    }
    for (var $DvtSparkChartEventManager$$ = $DvtChartTypeUtils$$.$isPie$(this.$_chart$), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $dvt$$2$$.length;$DvtChartPieLabelUtils$$++) {
      $DvtChartAxisUtils$$ = $dvt$$2$$[$DvtChartPieLabelUtils$$], !$DvtSparkChartDefaults$$ || $DvtChartAxisUtils$$.$getSeriesIndex$() < $DvtSparkChartAutomation$$ ? ($DvtSparkChartDefaults$$ = $DvtChartAxisUtils$$, $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$.$getSeriesIndex$(), $DvtSparkChartEventManager$$ || ($DvtChartRefObjUtils$$ = $DvtChartAxisUtils$$.$getGroupIndex$())) : !$DvtSparkChartEventManager$$ && $DvtChartAxisUtils$$.$getGroupIndex$() < $DvtChartRefObjUtils$$ && ($DvtSparkChartDefaults$$ = 
      $DvtChartAxisUtils$$, $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$.$getSeriesIndex$(), $DvtChartRefObjUtils$$ = $DvtChartAxisUtils$$.$getGroupIndex$());
    }
    return $DvtSparkChartDefaults$$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartObjPeer$$, $dvt$$2$$.$Obj$);
  $DvtChartObjPeer$$.prototype.Init = function $$DvtChartObjPeer$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    this.$_chart$ = $dvt$$2$$;
    this.$_displayables$ = $DvtSparkChartEventManager$$;
    this.$_seriesIndex$ = null != $DvtSparkChartDefaults$$ && 0 <= $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$ : -1;
    this.$_groupIndex$ = null != $DvtSparkChartAutomation$$ && 0 <= $DvtSparkChartAutomation$$ ? $DvtSparkChartAutomation$$ : -1;
    this.$_itemIndex$ = null != $DvtChartRefObjUtils$$ && 0 <= $DvtChartRefObjUtils$$ ? $DvtChartRefObjUtils$$ : -1;
    this.$_dataPos$ = $DvtChartAxisUtils$$;
    this.$_isShowingKeyboardFocusEffect$ = this.$_isSelected$ = !1;
    this.$_series$ = $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartDefaults$$);
    this.$_group$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtSparkChartAutomation$$);
    this.$_categories$ = $DvtChartDataUtils$$.$getCategories$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
    if (-1 != this.$_itemIndex$) {
      this.$_dataItemId$ = $DvtChartDataUtils$$.$getNestedDataItemId$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$), this.$_drillable$ = $DvtChartEventUtils$$.$isDataItemDrillable$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
    } else {
      if (-1 != this.$_groupIndex$) {
        if ($DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) {
          this.$_dataItemId$ = $DvtChartDataUtils$$.$getDataItemId$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), this.$_action$ = $DvtChartRefObjUtils$$.action, this.$_drillable$ = $DvtChartEventUtils$$.$isDataItemDrillable$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), this.$_stampId$ = $DvtChartRefObjUtils$$._id;
        }
      } else {
        if ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartDefaults$$)) {
          this.$_action$ = $DvtSparkChartAutomation$$.action, this.$_drillable$ = $DvtChartEventUtils$$.$isSeriesDrillable$($dvt$$2$$, $DvtSparkChartDefaults$$), this.$_stampId$ = $DvtSparkChartAutomation$$._id;
        }
      }
    }
    if (this.$_action$ || this.$_drillable$) {
      for ($dvt$$2$$ = 0;$dvt$$2$$ < this.$_displayables$.length;$dvt$$2$$++) {
        this.$_displayables$[$dvt$$2$$].setCursor("pointer");
      }
    }
    for ($dvt$$2$$ = 0;$dvt$$2$$ < $DvtSparkChartEventManager$$.length;$dvt$$2$$++) {
      $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$[$dvt$$2$$], $DvtSparkChartDefaults$$ instanceof $DvtChartLineArea$$ || $DvtSparkChartDefaults$$.$setAriaRole$("img"), this.$_updateAriaLabel$($DvtSparkChartDefaults$$);
    }
  };
  $DvtChartObjPeer$$.$associate$ = function $$DvtChartObjPeer$$$$associate$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    $dvt$$2$$ && ($DvtSparkChartDefaults$$ = new $DvtChartObjPeer$$($DvtSparkChartEventManager$$, [$dvt$$2$$], $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$), $DvtSparkChartEventManager$$.$registerObject$($DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$.$getEventManager$().$associate$($dvt$$2$$, $DvtSparkChartDefaults$$));
  };
  $DvtChartObjPeer$$.prototype.getId = function $$DvtChartObjPeer$$$$getId$() {
    return 0 <= this.$_seriesIndex$ && 0 <= this.$_groupIndex$ ? new $DvtChartDataItem$$(this.$_dataItemId$, this.$getSeries$(), this.$getGroup$()) : 0 <= this.$_seriesIndex$ ? this.$getSeries$() : null;
  };
  $DvtChartObjPeer$$.prototype.$getDataItemId$ = function $$DvtChartObjPeer$$$$$getDataItemId$$() {
    return this.$_dataItemId$;
  };
  $DvtChartObjPeer$$.prototype.$getNestedDataItemIndex$ = function $$DvtChartObjPeer$$$$$getNestedDataItemIndex$$() {
    return this.$_itemIndex$;
  };
  $DvtChartObjPeer$$.prototype.$getSeries$ = function $$DvtChartObjPeer$$$$$getSeries$$() {
    return this.$_series$;
  };
  $DvtChartObjPeer$$.prototype.$getSeriesIndex$ = function $$DvtChartObjPeer$$$$$getSeriesIndex$$() {
    return this.$_seriesIndex$;
  };
  $DvtChartObjPeer$$.prototype.$getGroup$ = function $$DvtChartObjPeer$$$$$getGroup$$() {
    return this.$_group$;
  };
  $DvtChartObjPeer$$.prototype.$getGroupIndex$ = function $$DvtChartObjPeer$$$$$getGroupIndex$$() {
    return this.$_groupIndex$;
  };
  $DvtChartObjPeer$$.prototype.$getAction$ = function $$DvtChartObjPeer$$$$$getAction$$() {
    return this.$_action$;
  };
  $DvtChartObjPeer$$.prototype.$isDrillable$ = function $$DvtChartObjPeer$$$$$isDrillable$$() {
    return this.$_drillable$;
  };
  $DvtChartObjPeer$$.prototype.$isDoubleClickable$ = function $$DvtChartObjPeer$$$$$isDoubleClickable$$() {
    return this.$isSelectable$() && this.$isDrillable$();
  };
  $DvtChartObjPeer$$.prototype.$getSeriesType$ = function $$DvtChartObjPeer$$$$$getSeriesType$$() {
    return $DvtChartStyleUtils$$.$getSeriesType$(this.$_chart$, this.$_seriesIndex$);
  };
  $DvtChartObjPeer$$.prototype.$getSeriesItem$ = function $$DvtChartObjPeer$$$$$getSeriesItem$$() {
    return $DvtChartDataUtils$$.$getSeriesItem$(this.$_chart$, this.$_seriesIndex$);
  };
  $DvtChartObjPeer$$.prototype.$getDatatip$ = function $$DvtChartObjPeer$$$$$getDatatip$$() {
    return $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$, this.$_itemIndex$, !0);
  };
  $DvtChartObjPeer$$.prototype.$getDatatipColor$ = function $$DvtChartObjPeer$$$$$getDatatipColor$$() {
    return $DvtChartTooltipUtils$$.$getDatatipColor$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$, this.$_itemIndex$);
  };
  $DvtChartObjPeer$$.prototype.$isSelectable$ = function $$DvtChartObjPeer$$$$$isSelectable$$() {
    return $DvtChartStyleUtils$$.$isSelectable$(this.$_chart$, this.$getSeriesIndex$(), this.$getGroupIndex$());
  };
  $DvtChartObjPeer$$.prototype.$isSelected$ = function $$DvtChartObjPeer$$$$$isSelected$$() {
    return this.$_isSelected$;
  };
  $DvtChartObjPeer$$.prototype.$setSelected$ = function $$DvtChartObjPeer$$$$$setSelected$$($dvt$$2$$) {
    this.$_isSelected$ = $dvt$$2$$;
    for (var $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < this.$_displayables$.length;$DvtSparkChartEventManager$$++) {
      this.$_displayables$[$DvtSparkChartEventManager$$].$setSelected$ && (this.$_displayables$[$DvtSparkChartEventManager$$].$setSelected$($dvt$$2$$), this.$_updateAriaLabel$(this.$_displayables$[$DvtSparkChartEventManager$$]));
    }
  };
  $DvtChartObjPeer$$.prototype.$showHoverEffect$ = function $$DvtChartObjPeer$$$$$showHoverEffect$$() {
    for (var $dvt$$2$$ = 0;$dvt$$2$$ < this.$_displayables$.length;$dvt$$2$$++) {
      this.$_displayables$[$dvt$$2$$].$showHoverEffect$ && this.$_displayables$[$dvt$$2$$].$showHoverEffect$();
    }
  };
  $DvtChartObjPeer$$.prototype.$hideHoverEffect$ = function $$DvtChartObjPeer$$$$$hideHoverEffect$$() {
    for (var $dvt$$2$$ = 0;$dvt$$2$$ < this.$_displayables$.length;$dvt$$2$$++) {
      this.$_displayables$[$dvt$$2$$].$hideHoverEffect$ && this.$_displayables$[$dvt$$2$$].$hideHoverEffect$();
    }
  };
  $DvtChartObjPeer$$.prototype.$getShowPopupBehaviors$ = function $$DvtChartObjPeer$$$$$getShowPopupBehaviors$$() {
    return this.$_chart$.$getShowPopupBehaviors$(this.$_stampId$);
  };
  $DvtChartObjPeer$$.prototype.$getDisplayables$ = function $$DvtChartObjPeer$$$$$getDisplayables$$() {
    return this.$_displayables$;
  };
  $DvtChartObjPeer$$.prototype.$getAriaLabel$ = function $$DvtChartObjPeer$$$$$getAriaLabel$$() {
    var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = this.$_chart$.$getOptions$();
    this.$isSelectable$() && $DvtSparkChartEventManager$$.push($dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, this.$isSelected$() ? "stateSelected" : "stateUnselected", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
    this.$isDrillable$() && $DvtSparkChartEventManager$$.push($dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, "stateDrillable", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
    $DvtSparkChartDefaults$$ = $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$, this.$_itemIndex$, !1);
    null == $DvtSparkChartDefaults$$ && 0 > this.$_groupIndex$ && 0 < $DvtSparkChartEventManager$$.length && ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$));
    return $dvt$$2$$.$Displayable$.$generateAriaLabel$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$);
  };
  $DvtChartObjPeer$$.prototype.$_updateAriaLabel$ = function $$DvtChartObjPeer$$$$$_updateAriaLabel$$($DvtSparkChartEventManager$$) {
    $dvt$$2$$.$Agent$.$deferAriaCreation$() || $DvtSparkChartEventManager$$.$setAriaProperty$("label", this.$getAriaLabel$());
  };
  $DvtChartObjPeer$$.prototype.$getCategories$ = function $$DvtChartObjPeer$$$$$getCategories$$() {
    return this.$_categories$;
  };
  $DvtChartObjPeer$$.prototype.$getNextNavigable$ = function $$DvtChartObjPeer$$$$$getNextNavigable$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$;
    $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.keyCode;
    if ($DvtSparkChartEventManager$$.type == $dvt$$2$$.MouseEvent.$CLICK$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$SPACE$ && $DvtSparkChartEventManager$$.ctrlKey) {
      return this;
    }
    $DvtSparkChartDefaults$$ = this.$_chart$;
    for (var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getChartObjPeers$(), $DvtChartRefObjUtils$$ = [], $DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartAxisUtils$$++) {
      $DvtSparkChartAutomation$$[$DvtChartAxisUtils$$].$isNavigable$() && $DvtChartRefObjUtils$$.push($DvtSparkChartAutomation$$[$DvtChartAxisUtils$$]);
    }
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.keyCode == $dvt$$2$$.KeyboardEvent.$UP_ARROW$ || $DvtSparkChartEventManager$$.keyCode == $dvt$$2$$.KeyboardEvent.$DOWN_ARROW$, $DvtChartAxisUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartDefaults$$.$getCtx$());
    $DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartDefaults$$) || $DvtChartTypeUtils$$.$isBoxPlot$($DvtSparkChartDefaults$$) && ($DvtSparkChartAutomation$$ && !$DvtChartAxisUtils$$ || !$DvtSparkChartAutomation$$ && $DvtChartAxisUtils$$) ? $DvtSparkChartEventManager$$ = $dvt$$2$$.$KeyboardHandler$.$getNextAdjacentNavigable$(this, $DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$) : $DvtChartTypeUtils$$.$isLineArea$($DvtSparkChartDefaults$$) || $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartDefaults$$) || 
    $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$) ? $DvtSparkChartEventManager$$ = this.$_findNextNavigable$($DvtSparkChartEventManager$$) : $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartDefaults$$) && $DvtSparkChartAutomation$$ ? ($DvtSparkChartEventManager$$.keyCode = $DvtChartPieLabelUtils$$ && !$DvtChartAxisUtils$$ ? $DvtSparkChartEventManager$$.keyCode == $dvt$$2$$.KeyboardEvent.$UP_ARROW$ ? $dvt$$2$$.KeyboardEvent.$RIGHT_ARROW$ : $dvt$$2$$.KeyboardEvent.$LEFT_ARROW$ : $DvtSparkChartEventManager$$.keyCode - 
    1, $DvtSparkChartEventManager$$ = $dvt$$2$$.$KeyboardHandler$.$getNextNavigable$(this, $DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$)) : $DvtChartTypeUtils$$.$isPyramid$($DvtSparkChartDefaults$$) && !$DvtSparkChartAutomation$$ ? ($DvtSparkChartEventManager$$.keyCode = $DvtChartPieLabelUtils$$ ? $DvtSparkChartEventManager$$.keyCode == $dvt$$2$$.KeyboardEvent.$RIGHT_ARROW$ ? $dvt$$2$$.KeyboardEvent.$DOWN_ARROW$ : $dvt$$2$$.KeyboardEvent.$UP_ARROW$ : $DvtSparkChartEventManager$$.keyCode == 
    $dvt$$2$$.KeyboardEvent.$RIGHT_ARROW$ ? $dvt$$2$$.KeyboardEvent.$UP_ARROW$ : $dvt$$2$$.KeyboardEvent.$DOWN_ARROW$, $DvtSparkChartEventManager$$ = $dvt$$2$$.$KeyboardHandler$.$getNextNavigable$(this, $DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$)) : $DvtSparkChartEventManager$$ = $dvt$$2$$.$KeyboardHandler$.$getNextNavigable$(this, $DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, !0);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartObjPeer$$.prototype.$getKeyboardBoundingBox$ = function $$DvtChartObjPeer$$$$$getKeyboardBoundingBox$$($DvtSparkChartEventManager$$) {
    return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($DvtSparkChartEventManager$$) : new $dvt$$2$$.$Rectangle$(0, 0, 0, 0);
  };
  $DvtChartObjPeer$$.prototype.$getTargetElem$ = function $$DvtChartObjPeer$$$$$getTargetElem$$() {
    return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : null;
  };
  $DvtChartObjPeer$$.prototype.$showKeyboardFocusEffect$ = function $$DvtChartObjPeer$$$$$showKeyboardFocusEffect$$() {
    this.$isNavigable$() && (this.$_isShowingKeyboardFocusEffect$ = !0, this.$showHoverEffect$());
  };
  $DvtChartObjPeer$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtChartObjPeer$$$$$hideKeyboardFocusEffect$$() {
    this.$isNavigable$() && (this.$_isShowingKeyboardFocusEffect$ = !1, this.$hideHoverEffect$());
  };
  $DvtChartObjPeer$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtChartObjPeer$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtChartObjPeer$$.prototype.$isNavigable$ = function $$DvtChartObjPeer$$$$$isNavigable$$() {
    return -1 != this.$getGroupIndex$() && -1 != this.$getSeriesIndex$();
  };
  $DvtChartObjPeer$$.prototype.$_findNextNavigable$ = function $$DvtChartObjPeer$$$$$_findNextNavigable$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.keyCode;
    var $DvtSparkChartDefaults$$ = this.$_chart$, $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getCtx$(), $DvtChartRefObjUtils$$ = this.$getSeriesIndex$(), $DvtChartAxisUtils$$ = this.$getGroupIndex$(), $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartDefaults$$), $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangePyramidSlice$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartDefaults$$), $DvtChartSeriesEffectUtils$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$), 
    $DvtSparkChartAutomation$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartAutomation$$), $DvtChartRangeMarker$$ = $DvtChartDataChangePyramidSlice$$ ? $DvtSparkChartAutomation$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$RIGHT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$LEFT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$DOWN_ARROW$, $DvtChartStyleUtils$$ = $DvtChartDataChangePyramidSlice$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$UP_ARROW$ : 
    $DvtSparkChartAutomation$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$RIGHT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$LEFT_ARROW$, $DvtChartPolarBar$$ = $DvtChartDataChangePyramidSlice$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$DOWN_ARROW$ : $DvtSparkChartAutomation$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$LEFT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$RIGHT_ARROW$;
    if ($DvtChartDataChangePyramidSlice$$ ? $DvtSparkChartAutomation$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$LEFT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$RIGHT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$UP_ARROW$) {
      $DvtChartPieRenderUtils$$ = $DvtChartAxisUtils$$, $DvtChartPieLabelInfo$$ = this.$_findNextUpSeries$($DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$);
    } else {
      if ($DvtChartRangeMarker$$) {
        $DvtChartPieRenderUtils$$ = $DvtChartAxisUtils$$, $DvtChartPieLabelInfo$$ = this.$_findNextDownSeries$($DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$);
      } else {
        if ($DvtChartPolarBar$$) {
          $DvtChartPieLabelInfo$$ = $DvtChartRefObjUtils$$;
          $DvtChartPieRenderUtils$$ = $DvtChartAxisUtils$$;
          do {
            $DvtChartPieRenderUtils$$++, $DvtChartSeriesEffectUtils$$ && $DvtChartPieRenderUtils$$ >= $DvtChartPieLabelUtils$$ && ($DvtChartPieRenderUtils$$ = 0);
          } while (null == $DvtSparkChartDefaults$$.$getObject$($DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$) && $DvtChartPieRenderUtils$$ < $DvtChartPieLabelUtils$$);
        } else {
          if ($DvtChartStyleUtils$$) {
            $DvtChartPieLabelInfo$$ = $DvtChartRefObjUtils$$;
            $DvtChartPieRenderUtils$$ = $DvtChartAxisUtils$$;
            do {
              $DvtChartPieRenderUtils$$--, $DvtChartSeriesEffectUtils$$ && 0 > $DvtChartPieRenderUtils$$ && ($DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$ - 1);
            } while (null == $DvtSparkChartDefaults$$.$getObject$($DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$) && -1 < $DvtChartPieRenderUtils$$);
          }
        }
      }
    }
    return ($DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.$getObject$($DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$)) && $DvtChartPieLabelInfo$$.$isNavigable$() ? $DvtChartPieLabelInfo$$ : this;
  };
  $DvtChartObjPeer$$.prototype.$_findNextUpSeries$ = function $$DvtChartObjPeer$$$$$_findNextUpSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for (var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartAxisUtils$$ = null, $DvtChartPieLabelUtils$$ = null, $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtSparkChartAutomation$$;$DvtChartPieLabelInfo$$++) {
      if ($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartPieLabelInfo$$)) {
        var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtChartPieLabelInfo$$, $DvtSparkChartDefaults$$);
        if ($DvtChartPieRenderUtils$$ > $DvtChartRefObjUtils$$ || $DvtChartPieRenderUtils$$ == $DvtChartRefObjUtils$$ && $DvtChartPieLabelInfo$$ > $DvtSparkChartEventManager$$) {
          if (null !== $DvtChartAxisUtils$$ && $DvtChartPieRenderUtils$$ < $DvtChartAxisUtils$$ || null == $DvtChartAxisUtils$$) {
            $DvtChartAxisUtils$$ = $DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$ = $DvtChartPieLabelInfo$$;
          }
        }
      }
    }
    return $DvtChartPieLabelUtils$$;
  };
  $DvtChartObjPeer$$.prototype.$_findNextDownSeries$ = function $$DvtChartObjPeer$$$$$_findNextDownSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for (var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartAxisUtils$$ = null, $DvtChartPieLabelUtils$$ = null, $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$ - 1;0 <= $DvtSparkChartAutomation$$;$DvtSparkChartAutomation$$--) {
      if ($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartAutomation$$)) {
        var $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$);
        if ($DvtChartPieLabelInfo$$ < $DvtChartRefObjUtils$$ || $DvtChartPieLabelInfo$$ == $DvtChartRefObjUtils$$ && $DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$) {
          if (null !== $DvtChartAxisUtils$$ && $DvtChartPieLabelInfo$$ > $DvtChartAxisUtils$$ || null == $DvtChartAxisUtils$$) {
            $DvtChartAxisUtils$$ = $DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$;
          }
        }
      }
    }
    return $DvtChartPieLabelUtils$$;
  };
  $DvtChartObjPeer$$.prototype.$isDragAvailable$ = function $$DvtChartObjPeer$$$$$isDragAvailable$$() {
    return !0;
  };
  $DvtChartObjPeer$$.prototype.$getDragTransferable$ = function $$DvtChartObjPeer$$$$$getDragTransferable$$() {
    return [this.getId()];
  };
  $DvtChartObjPeer$$.prototype.$getDragFeedback$ = function $$DvtChartObjPeer$$$$$getDragFeedback$$() {
    if (this.$_chart$.$isSelectionSupported$() && 1 < this.$_chart$.$getSelectionHandler$().$_selection$.length) {
      for (var $dvt$$2$$ = this.$_chart$.$getSelectionHandler$().getSelection(), $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
        $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.concat($dvt$$2$$[$DvtSparkChartDefaults$$].$getDisplayables$());
      }
      return $DvtSparkChartEventManager$$;
    }
    return this.$_displayables$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartRefObjPeer$$, $dvt$$2$$.$Obj$);
  $DvtChartRefObjPeer$$.prototype.Init = function $$DvtChartRefObjPeer$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartAxisUtils$$) {
    this.$_chart$ = $dvt$$2$$;
    this.$_displayables$ = $DvtSparkChartEventManager$$;
    this.$_refObj$ = $DvtSparkChartDefaults$$;
    this.$_categories$ = $DvtChartRefObjUtils$$.$getRefObjCategories$(this.$_refObj$);
    this.$_index$ = $DvtSparkChartAutomation$$;
    this.$_axisType$ = $DvtChartAxisUtils$$;
    for ($dvt$$2$$ = 0;$dvt$$2$$ < $DvtSparkChartEventManager$$.length;$dvt$$2$$++) {
      $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$[$dvt$$2$$], $DvtSparkChartAutomation$$.$setAriaRole$("img"), $DvtSparkChartAutomation$$.$setAriaProperty$("label", $DvtSparkChartDefaults$$.shortDesc);
    }
  };
  $DvtChartRefObjPeer$$.prototype.$getCategories$ = function $$DvtChartRefObjPeer$$$$$getCategories$$() {
    return this.$_categories$;
  };
  $DvtChartRefObjPeer$$.prototype.$getDisplayables$ = function $$DvtChartRefObjPeer$$$$$getDisplayables$$() {
    return this.$_displayables$;
  };
  $DvtChartRefObjPeer$$.prototype.$getIndex$ = function $$DvtChartRefObjPeer$$$$$getIndex$$() {
    return this.$_index$;
  };
  $DvtChartRefObjPeer$$.prototype.$getDatatip$ = function $$DvtChartRefObjPeer$$$$$getDatatip$$() {
    return $DvtChartTooltipUtils$$.$getRefObjTooltip$(this.$_chart$, this.$_refObj$, this.$_axisType$, this.$_index$);
  };
  $DvtChartRefObjPeer$$.prototype.$getDatatipColor$ = function $$DvtChartRefObjPeer$$$$$getDatatipColor$$() {
    return $DvtChartRefObjUtils$$.$getColor$(this.$_refObj$);
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataItem$$, $dvt$$2$$.$Obj$);
  $DvtChartDataItem$$.prototype.getId = function $$DvtChartDataItem$$$$getId$() {
    return this.id;
  };
  $DvtChartDataItem$$.prototype.$getSeries$ = function $$DvtChartDataItem$$$$$getSeries$$() {
    return this.series;
  };
  $DvtChartDataItem$$.prototype.$getGroup$ = function $$DvtChartDataItem$$$$$getGroup$$() {
    return this.group;
  };
  $DvtChartDataItem$$.prototype.$equals$ = function $$DvtChartDataItem$$$$$equals$$($dvt$$2$$) {
    return $dvt$$2$$ instanceof $DvtChartDataItem$$ ? null != this.id || null != $dvt$$2$$.id ? $DvtChartDataUtils$$.$isEqualId$(this.id, $dvt$$2$$.id) : $DvtChartDataUtils$$.$isEqualId$(this.series, $dvt$$2$$.series) && $DvtChartDataUtils$$.$isEqualId$(this.group, $dvt$$2$$.group) : !1;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDefaults$$, $dvt$$2$$.$BaseComponentDefaults$);
  $DvtChartDefaults$$.$SKIN_NEXT$ = {skin:$dvt$$2$$.$CSSStyle$.$SKIN_NEXT$, styleDefaults:{dataItemGaps:"auto", markerSize:10, marqueeColor:"rgba(255,255,255,0.4)", marqueeBorderColor:"#0572ce"}, yAxis:{axisLine:{rendered:"auto"}}, y2Axis:{axisLine:{rendered:"auto"}}, layout:{titlePlotAreaGap:16, footnoteGap:10, legendGapWidth:15, legendGapHeight:10, tickLabelGapHeight:8, tickLabelGapWidth:9}};
  $DvtChartDefaults$$.$SKIN_ALTA$ = {skin:$dvt$$2$$.$CSSStyle$.$SKIN_ALTA$, title:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_13$ + "color: #252525;")}, subtitle:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$ + "color: #252525;")}, footnote:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_11$)}, _statusMessageStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_13$ + 
  "color: #252525;"), pieCenter:{labelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}, styleDefaults:{seriesEffect:"color", colors:$dvt$$2$$.$CSSStyle$.$COLORS_ALTA$, dataLabelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$), stackLabelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD$), stockRisingColor:"#6b6f74", stockFallingColor:"#ED6647"}};
  $DvtChartDefaults$$.$VERSION_1$ = {skin:$dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$, emptyText:null, type:"bar", stack:"off", stackLabel:"off", orientation:"vertical", polarGridShape:"circle", selectionMode:"none", hideAndShowBehavior:"none", hoverBehavior:"none", zoomAndScroll:"off", zoomDirection:"auto", initialZooming:"none", dragMode:"user", sorting:"off", otherThreshold:0, animationOnDataChange:"none", animationOnDisplay:"none", __sparkBarSpacing:"subpixel", __spark:!1, dataCursor:"auto", dataCursorBehavior:"auto", 
  drilling:"off", highlightMatch:"all", series:[], groups:[], title:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 12px; color: #003d5b; font-weight: bold"), halign:"start"}, subtitle:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 12px; color: #003d5b;")}, footnote:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 10px; color: #333333;"), halign:"start"}, 
  titleSeparator:{upperColor:"#74779A", lowerColor:"#FFFFFF", rendered:"off"}, touchResponse:"auto", _statusMessageStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 12px; color: #003d5b; font-weight: bold"), _dropColor:"#D9F4FA", xAxis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"auto"}, axisLine:{rendered:"on"}, scale:"linear", maxSize:.33}, yAxis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"auto"}, 
  axisLine:{rendered:"on"}, scale:"linear", maxSize:.33}, y2Axis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"auto"}, axisLine:{rendered:"on"}, scale:"linear", maxSize:.33, alignTickMarks:"on"}, zAxis:{}, pieCenter:{labelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$)}, plotArea:{backgroundColor:null}, legend:{position:"auto", rendered:"auto", maxSize:.3, layout:{gapRatio:1}, seriesSection:{}, referenceObjectSection:{}, sections:[]}, 
  overview:{rendered:"off"}, dnd:{drag:{items:{}, series:{}, groups:{}}, drop:{plotArea:{}, xAxis:{}, yAxis:{}, y2Axis:{}, legend:{}}}, styleDefaults:{colors:$dvt$$2$$.$CSSStyle$.$COLORS_SKYROS$, borderColor:"auto", borderWidth:"auto", patterns:"smallDiagonalRight smallChecker smallDiagonalLeft smallTriangle smallCrosshatch smallDiamond largeDiagonalRight largeChecker largeDiagonalLeft largeTriangle largeCrosshatch largeDiamond".split(" "), shapes:"square circle diamond plus triangleDown triangleUp".split(" "), 
  seriesEffect:"gradient", threeDEffect:"off", selectionEffect:"highlight", animationDuration:1E3, animationIndicators:"all", animationUpColor:"#0099FF", animationDownColor:"#FF3300", lineStyle:"solid", lineType:"auto", markerDisplayed:"auto", markerColor:null, markerShape:"auto", markerSize:8, marqueeColor:"rgba(255,255,255,0.5)", marqueeBorderColor:"rgba(0,0,0,0.2)", pieFeelerColor:"#BAC5D6", pieInnerRadius:0, selectedInnerColor:"#ffffff", selectedOuterColor:"#5a5a5a", sliceLabelType:"percent", 
  otherColor:"#4b4b4b", stockRisingColor:"#006666", stockFallingColor:"#CC3300", stockRangeColor:"#B8B8B8", dataItemGaps:"0%", dataLabelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + $dvt$$2$$.$BaseComponentDefaults$.$FONT_SIZE_11$), dataLabelPosition:"auto", funnelBackgroundColor:"#EDEDED", x1Format:{}, y1Format:{}, y2Format:{}, zFormat:{}, _defaultSliceLabelColor:"#333333", _scrollbarHeight:3, _scrollbarTrackColor:"#F0F0F0", _scrollbarHandleColor:"#9E9E9E", 
  hoverBehaviorDelay:200, dataCursor:{markerSize:8, markerDisplayed:"on", lineColor:"#5a5a5a", lineWidth:2, lineStyle:"solid"}, groupSeparators:{rendered:"on", color:"rgba(138,141,172,0.4)"}, padding:"auto", _tooltipStyle:new $dvt$$2$$.$CSSStyle$("border-collapse: separate; border-spacing: 2px; overflow: hidden; display: block;"), tooltipLabelStyle:new $dvt$$2$$.$CSSStyle$("color: #666666; padding: 0px 2px; white-space: nowrap;"), tooltipValueStyle:new $dvt$$2$$.$CSSStyle$("color: #333333; padding: 0px 2px;"), 
  stackLabelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + $dvt$$2$$.$BaseComponentDefaults$.$FONT_SIZE_11$), boxPlot:{whiskerStyle:{}, whiskerEndStyle:{strokeWidth:2}, whiskerEndLength:9, medianStyle:{strokeWidth:3}}}, layout:{gapWidthRatio:null, gapHeightRatio:null, outerGapWidth:10, outerGapHeight:8, titleSubtitleGapWidth:14, titleSubtitleGapHeight:4, titleSeparatorGap:6, titlePlotAreaGap:10, footnoteGap:7, verticalAxisGap:6, legendGapWidth:10, legendGapHeight:10, 
  tickLabelGapHeight:5, tickLabelGapWidth:7}, _locale:"en-us", _resources:{}};
  $DvtChartDefaults$$.$getGapWidth$ = function $$DvtChartDefaults$$$$getGapWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return Math.ceil($DvtSparkChartEventManager$$ * $dvt$$2$$.$getGapWidthRatio$());
  };
  $DvtChartDefaults$$.$getGapHeight$ = function $$DvtChartDefaults$$$$getGapHeight$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return Math.ceil($DvtSparkChartEventManager$$ * $dvt$$2$$.$getGapHeightRatio$());
  };
  $DvtChartDefaults$$.$isSkyrosSkin$ = function $$DvtChartDefaults$$$$isSkyrosSkin$$($DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.$getSkin$() == $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$;
  };
  $DvtChartDefaults$$.$isPostAltaSkin$ = function $$DvtChartDefaults$$$$isPostAltaSkin$$($DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.$getSkin$() != $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ && $DvtSparkChartEventManager$$.$getSkin$() != $dvt$$2$$.$CSSStyle$.$SKIN_ALTA$;
  };
  $DvtChartDefaults$$.prototype.$getNoCloneObject$ = function $$DvtChartDefaults$$$$$getNoCloneObject$$() {
    return {};
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataCursorHandler$$, $dvt$$2$$.$Obj$);
  $DvtChartDataCursorHandler$$.prototype.Init = function $$DvtChartDataCursorHandler$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_context$ = $dvt$$2$$.$getCtx$();
    this.$_dataCursorShown$ = !1;
    this.$_dataCursor$ = $DvtSparkChartEventManager$$;
    this.$_chart$ = $dvt$$2$$;
  };
  $DvtChartDataCursorHandler$$.prototype.$processMove$ = function $$DvtChartDataCursorHandler$$$$$processMove$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$_chart$.$_plotAreaSpace$;
    $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.$containsPoint$($dvt$$2$$.x, $dvt$$2$$.y) ? this.$_showDataCursor$($DvtSparkChartDefaults$$, $dvt$$2$$.x, $dvt$$2$$.y, $DvtSparkChartEventManager$$) : this.$_removeDataCursor$($DvtSparkChartEventManager$$);
  };
  $DvtChartDataCursorHandler$$.prototype.$processEnd$ = function $$DvtChartDataCursorHandler$$$$$processEnd$$($dvt$$2$$) {
    this.$_removeDataCursor$($dvt$$2$$);
  };
  $DvtChartDataCursorHandler$$.prototype.$processOut$ = function $$DvtChartDataCursorHandler$$$$$processOut$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_chart$.$_plotAreaSpace$;
    $DvtSparkChartEventManager$$ && !$DvtSparkChartEventManager$$.$containsPoint$($dvt$$2$$.x, $dvt$$2$$.y) && this.$_removeDataCursor$(void 0);
  };
  $DvtChartDataCursorHandler$$.prototype.$_showDataCursor$ = function $$DvtChartDataCursorHandler$$$$$_showDataCursor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if (this.$_context$.$isOffscreen$()) {
      this.$_removeDataCursor$($DvtSparkChartAutomation$$);
    } else {
      var $DvtChartRefObjUtils$$ = this.$_dataCursor$, $DvtChartAxisUtils$$ = this.$_getClosestMatch$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      if (null == $DvtChartAxisUtils$$) {
        this.$_removeDataCursor$($DvtSparkChartAutomation$$);
      } else {
        var $DvtChartPieLabelUtils$$ = $DvtChartAxisUtils$$.$matchRegion$.$getCenter$(), $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$;
        $DvtChartRefObjUtils$$.$getBehavior$() == $DvtChartDataCursor$$.$BEHAVIOR_SNAP$ && ($DvtChartRefObjUtils$$.$isHorizontal$() ? $DvtChartPieRenderUtils$$ = Math.min(Math.max($DvtChartPieLabelUtils$$.y, $dvt$$2$$.y), $dvt$$2$$.y + $dvt$$2$$.$h$) : $DvtChartPieLabelInfo$$ = Math.min(Math.max($DvtChartPieLabelUtils$$.x, $dvt$$2$$.x), $dvt$$2$$.x + $dvt$$2$$.$w$));
        var $DvtChartDataChangePyramidSlice$$ = $DvtChartAxisUtils$$.$logicalObject$, $DvtChartAxisUtils$$ = $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, $DvtChartDataChangePyramidSlice$$.$getSeriesIndex$(), $DvtChartDataChangePyramidSlice$$.$getGroupIndex$(), $DvtChartDataChangePyramidSlice$$.$getNestedDataItemIndex$(), !0);
        null == $DvtChartAxisUtils$$ ? $DvtChartRefObjUtils$$.$setVisible$(!1) : ($DvtChartRefObjUtils$$.$setVisible$(!0), $DvtChartDataChangePyramidSlice$$ = $DvtChartTooltipUtils$$.$getDatatipColor$(this.$_chart$, $DvtChartDataChangePyramidSlice$$.$getSeriesIndex$(), $DvtChartDataChangePyramidSlice$$.$getGroupIndex$(), $DvtChartDataChangePyramidSlice$$.$getNestedDataItemIndex$()), $DvtChartPieLabelInfo$$ = $DvtChartRefObjUtils$$.$isHorizontal$() ? $DvtChartPieRenderUtils$$ : $DvtChartPieLabelInfo$$, 
        $DvtChartRefObjUtils$$.$render$($dvt$$2$$, $DvtChartPieLabelUtils$$.x, $DvtChartPieLabelUtils$$.y, $DvtChartPieLabelInfo$$, $DvtChartAxisUtils$$, $DvtChartDataChangePyramidSlice$$), this.$_dataCursorShown$ = !0, $DvtSparkChartAutomation$$ || ($dvt$$2$$ = this.$_chart$.$getValuesAt$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), this.$_chart$.$changeOption$($dvt$$2$$)));
      }
    }
  };
  $DvtChartDataCursorHandler$$.prototype.$_removeDataCursor$ = function $$DvtChartDataCursorHandler$$$$$_removeDataCursor$$($dvt$$2$$) {
    this.$_dataCursor$.$_bVisible$ && this.$_dataCursor$.$setVisible$(!1);
    this.$_context$.$getTooltipManager$($DvtChartDataCursor$$.$TOOLTIP_ID$).$hideTooltip$();
    this.$_dataCursorShown$ = !1;
    $dvt$$2$$ || this.$_chart$.$changeOption$(null);
  };
  $DvtChartDataCursorHandler$$.$_getClosestMatchSecondDirection$ = function $$DvtChartDataCursorHandler$$$$_getClosestMatchSecondDirection$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for (var $DvtChartRefObjUtils$$ = null, $DvtChartAxisUtils$$ = Infinity, $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $dvt$$2$$.length;$DvtChartPieLabelUtils$$++) {
      var $DvtChartPieLabelInfo$$ = $dvt$$2$$[$DvtChartPieLabelUtils$$], $DvtChartPieRenderUtils$$ = Math.round(Math.abs((($DvtSparkChartEventManager$$ ? $DvtChartPieLabelInfo$$.$matchRegion$.x : $DvtChartPieLabelInfo$$.$matchRegion$.y) + ($DvtSparkChartEventManager$$ ? $DvtChartPieLabelInfo$$.$matchRegion$.x + $DvtChartPieLabelInfo$$.$matchRegion$.$w$ : $DvtChartPieLabelInfo$$.$matchRegion$.y + $DvtChartPieLabelInfo$$.$matchRegion$.$h$)) / 2 - ($DvtSparkChartEventManager$$ ? $DvtSparkChartDefaults$$ : 
      $DvtSparkChartAutomation$$)));
      $DvtChartPieRenderUtils$$ < $DvtChartAxisUtils$$ && ($DvtChartAxisUtils$$ = $DvtChartPieRenderUtils$$, $DvtChartRefObjUtils$$ = $DvtChartPieLabelInfo$$);
    }
    return $DvtChartRefObjUtils$$;
  };
  $DvtChartDataCursorHandler$$.$_getClosestMatchesFirstDirection$ = function $$DvtChartDataCursorHandler$$$$_getClosestMatchesFirstDirection$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for (var $DvtChartRefObjUtils$$ = Infinity, $DvtChartAxisUtils$$ = [], $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $dvt$$2$$.length;$DvtChartPieLabelUtils$$++) {
      var $DvtChartPieLabelInfo$$ = $dvt$$2$$[$DvtChartPieLabelUtils$$], $DvtChartPieRenderUtils$$ = Math.round(Math.abs((($DvtSparkChartEventManager$$ ? $DvtChartPieLabelInfo$$.$matchRegion$.y : $DvtChartPieLabelInfo$$.$matchRegion$.x) + ($DvtSparkChartEventManager$$ ? $DvtChartPieLabelInfo$$.$matchRegion$.y + $DvtChartPieLabelInfo$$.$matchRegion$.$h$ : $DvtChartPieLabelInfo$$.$matchRegion$.x + $DvtChartPieLabelInfo$$.$matchRegion$.$w$)) / 2 - ($DvtSparkChartEventManager$$ ? $DvtSparkChartAutomation$$ : 
      $DvtSparkChartDefaults$$)));
      $DvtChartPieRenderUtils$$ <= $DvtChartRefObjUtils$$ && ($DvtChartPieRenderUtils$$ < $DvtChartRefObjUtils$$ && ($DvtChartAxisUtils$$ = []), $DvtChartAxisUtils$$.push($DvtChartPieLabelInfo$$), $DvtChartRefObjUtils$$ = $DvtChartPieRenderUtils$$);
    }
    return $DvtChartAxisUtils$$;
  };
  $DvtChartDataCursorHandler$$.prototype.$_findMatches$ = function $$DvtChartDataCursorHandler$$$$$_findMatches$$() {
    var $dvt$$2$$ = this.$_context$.$_stage$, $DvtSparkChartEventManager$$ = this.$_chart$.$getEventManager$(), $DvtSparkChartDefaults$$ = [];
    if (!this.$_chart$.$_currentMarkers$) {
      return null;
    }
    for (var $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < this.$_chart$.$_currentMarkers$.length;$DvtSparkChartAutomation$$++) {
      for (var $DvtChartRefObjUtils$$ = this.$_chart$.$_currentMarkers$[$DvtSparkChartAutomation$$], $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$.length, $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartAxisUtils$$;$DvtChartPieLabelUtils$$++) {
        var $DvtChartPieLabelInfo$$ = $DvtChartRefObjUtils$$[$DvtChartPieLabelUtils$$], $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.$GetLogicalObject$($DvtChartPieLabelInfo$$), $DvtChartPieLabelInfo$$ = {$matchRegion$:$DvtChartPieLabelInfo$$.$getDimensionsSelf$ ? $DvtChartPieLabelInfo$$.$getDimensionsSelf$($dvt$$2$$) : $DvtChartPieLabelInfo$$.$getDimensions$($dvt$$2$$), $logicalObject$:$DvtChartPieRenderUtils$$};
        $DvtSparkChartDefaults$$.push($DvtChartPieLabelInfo$$);
      }
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartDataCursorHandler$$.prototype.$_getClosestMatch$ = function $$DvtChartDataCursorHandler$$$$$_getClosestMatch$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartTypeUtils$$.$isHorizontal$(this.$_chart$), $DvtSparkChartAutomation$$ = $DvtChartTypeUtils$$.$isLineArea$(this.$_chart$) && !$DvtChartAxisUtils$$.$isMixedFrequency$(this.$_chart$), $DvtChartRefObjUtils$$ = this.$_findMatches$(), $DvtChartPieLabelUtils$$ = $DvtChartDataCursorHandler$$.$_getClosestMatchesFirstDirection$($DvtChartRefObjUtils$$, $DvtSparkChartDefaults$$, $dvt$$2$$, $DvtSparkChartEventManager$$);
    if (!$DvtChartTypeUtils$$.$isScatterBubble$(this.$_chart$)) {
      for (var $DvtChartPieLabelInfo$$ = Infinity, $DvtChartPieRenderUtils$$ = -Infinity, $DvtChartDataChangePyramidSlice$$ = null, $DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtChartPieLabelUtils$$.length;$DvtChartSeriesEffectUtils$$++) {
        $DvtChartDataChangePyramidSlice$$ = $DvtChartPieLabelUtils$$[$DvtChartSeriesEffectUtils$$], $DvtChartPieLabelInfo$$ = Math.min($DvtChartPieLabelInfo$$, $DvtSparkChartDefaults$$ ? $DvtChartDataChangePyramidSlice$$.$matchRegion$.y : $DvtChartDataChangePyramidSlice$$.$matchRegion$.x), $DvtChartPieRenderUtils$$ = Math.max($DvtChartPieRenderUtils$$, $DvtSparkChartDefaults$$ ? $DvtChartDataChangePyramidSlice$$.$matchRegion$.y + $DvtChartDataChangePyramidSlice$$.$matchRegion$.$h$ : $DvtChartDataChangePyramidSlice$$.$matchRegion$.x + 
        $DvtChartDataChangePyramidSlice$$.$matchRegion$.$w$), $DvtChartDataChangePyramidSlice$$ = $DvtChartDataChangePyramidSlice$$.$logicalObject$.$getGroupIndex$();
      }
      for ($DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtChartRefObjUtils$$.length;$DvtChartSeriesEffectUtils$$++) {
        var $DvtChartRangeMarker$$ = $DvtChartRefObjUtils$$[$DvtChartSeriesEffectUtils$$], $DvtChartStyleUtils$$ = $DvtChartRangeMarker$$.$logicalObject$.$getGroupIndex$();
        $DvtSparkChartAutomation$$ ? $DvtChartDataChangePyramidSlice$$ == $DvtChartStyleUtils$$ && $DvtChartPieLabelUtils$$.push($DvtChartRangeMarker$$) : ($DvtChartStyleUtils$$ = (($DvtSparkChartDefaults$$ ? $DvtChartRangeMarker$$.$matchRegion$.y : $DvtChartRangeMarker$$.$matchRegion$.x) + ($DvtSparkChartDefaults$$ ? $DvtChartRangeMarker$$.$matchRegion$.y + $DvtChartRangeMarker$$.$matchRegion$.$h$ : $DvtChartRangeMarker$$.$matchRegion$.x + $DvtChartRangeMarker$$.$matchRegion$.$w$)) / 2, $DvtChartPieRenderUtils$$ >= 
        $DvtChartStyleUtils$$ && $DvtChartPieLabelInfo$$ <= $DvtChartStyleUtils$$ && $DvtChartPieLabelUtils$$.push($DvtChartRangeMarker$$));
      }
    }
    return $DvtChartDataCursorHandler$$.$_getClosestMatchSecondDirection$($DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$, $dvt$$2$$, $DvtSparkChartEventManager$$);
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartSelectableWedge$$, $dvt$$2$$.$Path$);
  $DvtChartSelectableWedge$$.$_OUTER_BORDER_WIDTH$ = 2;
  $DvtChartSelectableWedge$$.$_OUTER_BORDER_WIDTH_HOVER$ = 1.25;
  $DvtChartSelectableWedge$$.$_INNER_BORDER_WIDTH$ = 1;
  $DvtChartSelectableWedge$$.prototype.Init = function $$DvtChartSelectableWedge$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartSelectableWedge$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartSelectableWedge$$.prototype.$setWedgeParams$ = function $$DvtChartSelectableWedge$$$$$setWedgeParams$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) {
    this.$_cx$ = $dvt$$2$$;
    this.$_cy$ = $DvtSparkChartEventManager$$;
    this.$_rx$ = $DvtSparkChartDefaults$$;
    this.$_ry$ = $DvtSparkChartAutomation$$;
    this.$_sa$ = $DvtChartRefObjUtils$$;
    this.$_ae$ = $DvtChartAxisUtils$$;
    this.$_gap$ = $DvtChartPieLabelUtils$$;
    this.$_ir$ = $DvtChartPieLabelInfo$$;
    $dvt$$2$$ = this.$_makeWedgePath$(0);
    this.$setCmds$($dvt$$2$$);
  };
  $DvtChartSelectableWedge$$.prototype.$_makeWedgePath$ = function $$DvtChartSelectableWedge$$$$$_makeWedgePath$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = Math.max(this.$_rx$ - $DvtSparkChartEventManager$$, 0), $DvtSparkChartAutomation$$ = Math.max(this.$_ry$ - $DvtSparkChartEventManager$$, 0), $DvtChartRefObjUtils$$ = this.$_ir$ ? this.$_ir$ + $DvtSparkChartEventManager$$ : 0, $DvtChartAxisUtils$$ = 360 == this.$_ae$ ? $dvt$$2$$.Math.$degreesToRads$(359.99) : $dvt$$2$$.Math.$degreesToRads$(this.$_ae$), $DvtChartPieLabelUtils$$ = $dvt$$2$$.Math.$degreesToRads$(this.$_sa$), $DvtChartPieLabelInfo$$ = (360 == this.$_ae$ || 
    $DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$ ? 0 : this.$_gap$ + 2 * $DvtSparkChartEventManager$$) / 2, $DvtChartPieRenderUtils$$ = $DvtChartPieLabelInfo$$ < $DvtSparkChartDefaults$$ ? Math.asin($DvtChartPieLabelInfo$$ / $DvtSparkChartDefaults$$) : 0;
    $DvtSparkChartEventManager$$ = -$DvtChartAxisUtils$$ / 2 - $DvtChartPieLabelUtils$$;
    var $DvtChartDataChangePyramidSlice$$ = Math.min(5 * $DvtChartPieLabelInfo$$, 0 < $DvtChartAxisUtils$$ ? Math.abs($DvtChartPieLabelInfo$$ / Math.sin($DvtChartAxisUtils$$ / 2)) : 0), $DvtChartSeriesEffectUtils$$ = this.$_cx$ + Math.cos($DvtSparkChartEventManager$$) * $DvtChartDataChangePyramidSlice$$, $DvtChartRangeMarker$$ = this.$_cy$ + Math.sin($DvtSparkChartEventManager$$) * (0 == $DvtSparkChartDefaults$$ ? $DvtChartDataChangePyramidSlice$$ : $DvtChartDataChangePyramidSlice$$ * $DvtSparkChartAutomation$$ / 
    $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$ = this.$_cx$ + Math.cos(-$DvtChartPieRenderUtils$$ - $DvtChartPieLabelUtils$$) * $DvtSparkChartDefaults$$;
    var $DvtChartDataChangePyramidSlice$$ = this.$_cy$ + Math.sin(-$DvtChartPieRenderUtils$$ - $DvtChartPieLabelUtils$$) * $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$ = this.$_cx$ + Math.cos(-$DvtChartPieLabelUtils$$ - $DvtChartAxisUtils$$ + $DvtChartPieRenderUtils$$) * $DvtSparkChartDefaults$$, $DvtChartPieRenderUtils$$ = this.$_cy$ + Math.sin(-$DvtChartPieLabelUtils$$ - $DvtChartAxisUtils$$ + $DvtChartPieRenderUtils$$) * $DvtSparkChartAutomation$$;
    if (0 < $DvtChartRefObjUtils$$) {
      var $DvtChartPolarBar$$ = $DvtChartPieLabelInfo$$ < $DvtChartRefObjUtils$$ ? Math.asin($DvtChartPieLabelInfo$$ / $DvtChartRefObjUtils$$) : 0, $DvtChartPieLabelInfo$$ = this.$_cx$ + Math.cos(-$DvtChartPolarBar$$ - $DvtChartPieLabelUtils$$) * $DvtChartRefObjUtils$$, $DvtChartSeriesEffectUtils$$ = this.$_cy$ + Math.sin(-$DvtChartPolarBar$$ - $DvtChartPieLabelUtils$$) * $DvtChartRefObjUtils$$, $DvtChartRangeMarker$$ = this.$_cx$ + Math.cos(-$DvtChartPieLabelUtils$$ - $DvtChartAxisUtils$$ + $DvtChartPolarBar$$) * 
      $DvtChartRefObjUtils$$, $DvtChartPolarBar$$ = this.$_cy$ + Math.sin(-$DvtChartPieLabelUtils$$ - $DvtChartAxisUtils$$ + $DvtChartPolarBar$$) * $DvtChartRefObjUtils$$;
      360 == this.$_ae$ ? ($DvtChartPieLabelUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartStyleUtils$$, $DvtChartPieRenderUtils$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartAxisUtils$$, 1, $DvtSparkChartEventManager$$, $DvtChartDataChangePyramidSlice$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartStyleUtils$$, $DvtChartPieRenderUtils$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.moveTo($DvtChartPieLabelInfo$$, 
      $DvtChartSeriesEffectUtils$$)) : ($DvtChartPieLabelUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartRangeMarker$$, $DvtChartPolarBar$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartStyleUtils$$, $DvtChartPieRenderUtils$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartAxisUtils$$, 1, $DvtSparkChartEventManager$$, $DvtChartDataChangePyramidSlice$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartPieLabelInfo$$, 
      $DvtChartSeriesEffectUtils$$));
      $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartRefObjUtils$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, 0, $DvtChartRangeMarker$$, $DvtChartPolarBar$$);
    } else {
      360 == this.$_ae$ ? $DvtChartPieLabelUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartStyleUtils$$, $DvtChartPieRenderUtils$$) : ($DvtChartPieLabelUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartStyleUtils$$, $DvtChartPieRenderUtils$$)), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartAxisUtils$$, 1, $DvtSparkChartEventManager$$, 
      $DvtChartDataChangePyramidSlice$$);
    }
    return $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.closePath();
  };
  $DvtChartSelectableWedge$$.prototype.$_initializeSelectionEffects$ = function $$DvtChartSelectableWedge$$$$$_initializeSelectionEffects$$() {
    var $DvtSparkChartEventManager$$ = this.$isSelected$() ? $DvtChartSelectableWedge$$.$_OUTER_BORDER_WIDTH$ : $DvtChartSelectableWedge$$.$_OUTER_BORDER_WIDTH_HOVER$, $DvtSparkChartDefaults$$ = this.$_makeWedgePath$($DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$ = this.$_makeWedgePath$($DvtSparkChartEventManager$$ + $DvtChartSelectableWedge$$.$_INNER_BORDER_WIDTH$);
    this.$OuterChild$ ? (this.$OuterChild$.$setCmds$($DvtSparkChartDefaults$$), this.$InnerChild$.$setCmds$($DvtSparkChartEventManager$$)) : (this.$OuterChild$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtSparkChartDefaults$$), this.$OuterChild$.$setInvisibleFill$(), this.$OuterChild$.$setMouseEnabled$(!0), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtSparkChartEventManager$$), this.$InnerChild$.$setInvisibleFill$(), this.$InnerChild$.$setMouseEnabled$(!0), 
    this.$addChild$(this.$InnerChild$));
  };
  $DvtChartSelectableWedge$$.prototype.$_showNestedBorders$ = function $$DvtChartSelectableWedge$$$$$_showNestedBorders$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_initializeSelectionEffects$();
    $DvtSparkChartEventManager$$ ? (this.$setSolidFill$($dvt$$2$$), this.$setStroke$(null), this.$setClassName$().$setStyle$(), this.$OuterChild$.$setSolidFill$($DvtSparkChartEventManager$$), this.$OuterChild$.$setClassName$().$setStyle$(), this.$InnerChild$.$setFill$(this.$_fill$), this.$InnerChild$.$setClassName$(this.$_shapeClassName$).$setStyle$(this.$_shapeStyle$)) : ($dvt$$2$$ ? (this.$setSolidFill$($dvt$$2$$), this.$setStroke$(null), this.$setClassName$().$setStyle$(), this.$OuterChild$.$setFill$(this.$_fill$), 
    this.$OuterChild$.$setClassName$(this.$_shapeClassName$).$setStyle$(this.$_shapeStyle$)) : (this.$setFill$(this.$_fill$), this.$setStroke$(this.$_shapeStroke$), this.$setClassName$(this.$_shapeClassName$).$setStyle$(this.$_shapeStyle$), this.$OuterChild$.$setInvisibleFill$(), this.$OuterChild$.$setClassName$().$setStyle$()), this.$InnerChild$.$setInvisibleFill$(), this.$InnerChild$.$setClassName$().$setStyle$());
  };
  $DvtChartSelectableWedge$$.prototype.$setStyleProperties$ = function $$DvtChartSelectableWedge$$$$$setStyleProperties$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) {
    this.$_fill$ = $DvtSparkChartEventManager$$;
    this.$_shapeStroke$ = $DvtSparkChartDefaults$$;
    this.$_hoverColor$ = $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$($DvtSparkChartAutomation$$);
    this.$_innerColor$ = $DvtChartRefObjUtils$$;
    this.$_outerColor$ = $DvtChartAxisUtils$$;
    this.$_shapeClassName$ = $DvtChartPieLabelUtils$$;
    this.$_shapeStyle$ = $DvtChartPieLabelInfo$$;
    this.$setStyle$($DvtChartPieLabelInfo$$).$setClassName$($DvtChartPieLabelUtils$$);
    this.$setFill$($DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$ && this.$setStroke$($DvtSparkChartDefaults$$);
  };
  $DvtChartSelectableWedge$$.prototype.$showHoverEffect$ = function $$DvtChartSelectableWedge$$$$$showHoverEffect$$() {
    this.$IsShowingHoverEffect$ = !0;
    this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$);
  };
  $DvtChartSelectableWedge$$.prototype.$hideHoverEffect$ = function $$DvtChartSelectableWedge$$$$$hideHoverEffect$$() {
    this.$IsShowingHoverEffect$ = !1;
    this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$();
  };
  $DvtChartSelectableWedge$$.prototype.$setSelected$ = function $$DvtChartSelectableWedge$$$$$setSelected$$($dvt$$2$$) {
    this.$IsSelected$ != $dvt$$2$$ && (this.$IsSelected$ = $dvt$$2$$, this.$IsShowingHoverEffect$ ? this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$) : this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$());
  };
  $DvtChartSelectableWedge$$.prototype.$UpdateSelectionEffect$ = function $$DvtChartSelectableWedge$$$$$UpdateSelectionEffect$$() {
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartSelectableRectangularPolygon$$, $dvt$$2$$.$Polygon$);
  $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$ = 2;
  $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH_HOVER$ = 1.25;
  $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$ = 1;
  $DvtChartSelectableRectangularPolygon$$.prototype.$setStyleProperties$ = function $$DvtChartSelectableRectangularPolygon$$$$$setStyleProperties$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) {
    this.$_fill$ = $DvtSparkChartEventManager$$;
    this.$_borderStroke$ = $DvtSparkChartDefaults$$;
    this.$_hoverColor$ = $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$($DvtSparkChartAutomation$$);
    this.$_innerColor$ = $DvtChartRefObjUtils$$;
    this.$_outerColor$ = $DvtChartAxisUtils$$;
    this.$_shapeClassName$ = $DvtChartPieLabelUtils$$;
    this.$_shapeStyle$ = $DvtChartPieLabelInfo$$;
    this.$setStyle$($DvtChartPieLabelInfo$$).$setClassName$($DvtChartPieLabelUtils$$);
    this.$setFill$($DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$ && this.$setStroke$($DvtSparkChartDefaults$$);
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$setAnimationParams$ = function $$DvtChartSelectableRectangularPolygon$$$$$setAnimationParams$$($dvt$$2$$) {
    this.$_x1$ = Math.min($dvt$$2$$[0], $dvt$$2$$[4]);
    this.$_x2$ = Math.max($dvt$$2$$[0], $dvt$$2$$[4]);
    this.$_y1$ = Math.min($dvt$$2$$[1], $dvt$$2$$[5]);
    this.$_y2$ = Math.max($dvt$$2$$[1], $dvt$$2$$[5]);
    this.$setPoints$($dvt$$2$$);
    this.$_initializeSelectionEffects$();
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$showHoverEffect$ = function $$DvtChartSelectableRectangularPolygon$$$$$showHoverEffect$$() {
    this.$IsShowingHoverEffect$ || (this.$IsShowingHoverEffect$ = !0, this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$));
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$hideHoverEffect$ = function $$DvtChartSelectableRectangularPolygon$$$$$hideHoverEffect$$() {
    this.$IsShowingHoverEffect$ && (this.$IsShowingHoverEffect$ = !1, this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$());
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$setSelected$ = function $$DvtChartSelectableRectangularPolygon$$$$$setSelected$$($dvt$$2$$) {
    this.$IsSelected$ != $dvt$$2$$ && (this.$IsSelected$ = $dvt$$2$$, this.$IsShowingHoverEffect$ ? this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$) : this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$());
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$UpdateSelectionEffect$ = function $$DvtChartSelectableRectangularPolygon$$$$$UpdateSelectionEffect$$() {
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$getPrimaryFill$ = function $$DvtChartSelectableRectangularPolygon$$$$$getPrimaryFill$$() {
    return this.$_fill$;
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$_initializeSelectionEffects$ = function $$DvtChartSelectableRectangularPolygon$$$$$_initializeSelectionEffects$$() {
    var $DvtSparkChartEventManager$$ = this.$isSelected$() ? $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$ : $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH_HOVER$, $DvtSparkChartDefaults$$ = this.$_createPointsArray$($DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$ = this.$_createPointsArray$($DvtSparkChartEventManager$$ + $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$);
    this.$OuterChild$ ? (this.$OuterChild$.$setPoints$($DvtSparkChartDefaults$$), this.$InnerChild$.$setPoints$($DvtSparkChartEventManager$$)) : (this.$OuterChild$ = new $dvt$$2$$.$Polygon$(this.$getCtx$(), $DvtSparkChartDefaults$$), this.$OuterChild$.$setInvisibleFill$(), this.$OuterChild$.$setMouseEnabled$(!0), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new $dvt$$2$$.$Polygon$(this.$getCtx$(), $DvtSparkChartEventManager$$), this.$InnerChild$.$setInvisibleFill$(), this.$InnerChild$.$setMouseEnabled$(!0), 
    this.$addChild$(this.$InnerChild$));
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$_showNestedBorders$ = function $$DvtChartSelectableRectangularPolygon$$$$$_showNestedBorders$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_initializeSelectionEffects$();
    $DvtSparkChartEventManager$$ ? (this.$setSolidFill$($dvt$$2$$), this.$setStroke$(null), this.$setClassName$().$setStyle$(), this.$OuterChild$.$setSolidFill$($DvtSparkChartEventManager$$), this.$OuterChild$.$setClassName$().$setStyle$(), this.$InnerChild$.$setFill$(this.$_fill$), this.$InnerChild$.$setClassName$(this.$_shapeClassName$).$setStyle$(this.$_shapeStyle$)) : ($dvt$$2$$ ? (this.$setSolidFill$($dvt$$2$$), this.$setStroke$(null), this.$setClassName$().$setStyle$(), this.$OuterChild$.$setFill$(this.$_fill$), 
    this.$OuterChild$.$setClassName$(this.$_shapeClassName$).$setStyle$(this.$_shapeStyle$)) : (this.$setFill$(this.$_fill$), this.$setStroke$(this.$_borderStroke$), this.$setClassName$(this.$_shapeClassName$).$setStyle$(this.$_shapeStyle$), this.$OuterChild$.$setInvisibleFill$(), this.$OuterChild$.$setClassName$().$setStyle$()), this.$InnerChild$.$setInvisibleFill$(), this.$InnerChild$.$setClassName$().$setStyle$());
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$_createPointsArray$ = function $$DvtChartSelectableRectangularPolygon$$$$$_createPointsArray$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_x1$ + $dvt$$2$$, $DvtSparkChartDefaults$$ = this.$_x2$ - $dvt$$2$$, $DvtSparkChartAutomation$$ = this.$_y1$ + $dvt$$2$$;
    $dvt$$2$$ = this.$_y2$ - $dvt$$2$$;
    return [$DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$];
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAxis$$, $dvt$$2$$.$Axis$);
  $DvtChartAxis$$.prototype.$axisToPlotArea$ = function $$DvtChartAxis$$$$$axisToPlotArea$$($dvt$$2$$) {
    if ("tangential" == this.$getOptions$().position) {
      return $dvt$$2$$;
    }
    if (null == $dvt$$2$$) {
      return null;
    }
    $dvt$$2$$ -= this.$getLeftOverflow$();
    return Math.round(10 * $dvt$$2$$) / 10;
  };
  $DvtChartAxis$$.prototype.$plotAreaToAxis$ = function $$DvtChartAxis$$$$$plotAreaToAxis$$($dvt$$2$$) {
    if ("tangential" == this.$getOptions$().position) {
      return $dvt$$2$$;
    }
    if (null == $dvt$$2$$) {
      return null;
    }
    $dvt$$2$$ += this.$getLeftOverflow$();
    return Math.round($dvt$$2$$);
  };
  $DvtChartAxis$$.prototype.$linearToActual$ = function $$DvtChartAxis$$$$$linearToActual$$($dvt$$2$$) {
    return this.$Info$.$linearToActual$($dvt$$2$$);
  };
  $DvtChartAxis$$.prototype.$actualToLinear$ = function $$DvtChartAxis$$$$$actualToLinear$$($dvt$$2$$) {
    return this.$Info$.$actualToLinear$($dvt$$2$$);
  };
  $DvtChartAxis$$.prototype.$getValueAt$ = function $$DvtChartAxis$$$$$getValueAt$$($dvt$$2$$) {
    return this.$Info$.$getValueAt$(this.$plotAreaToAxis$($dvt$$2$$));
  };
  $DvtChartAxis$$.prototype.$getCoordAt$ = function $$DvtChartAxis$$$$$getCoordAt$$($dvt$$2$$) {
    return this.$axisToPlotArea$(this.$Info$.$getCoordAt$($dvt$$2$$));
  };
  $DvtChartAxis$$.prototype.$getBoundedValueAt$ = function $$DvtChartAxis$$$$$getBoundedValueAt$$($dvt$$2$$) {
    return this.$Info$.$getBoundedValueAt$(this.$plotAreaToAxis$($dvt$$2$$));
  };
  $DvtChartAxis$$.prototype.$getBoundedCoordAt$ = function $$DvtChartAxis$$$$$getBoundedCoordAt$$($dvt$$2$$) {
    return this.$axisToPlotArea$(this.$Info$.$getBoundedCoordAt$($dvt$$2$$));
  };
  $DvtChartAxis$$.prototype.$getUnboundedValueAt$ = function $$DvtChartAxis$$$$$getUnboundedValueAt$$($dvt$$2$$) {
    return this.$Info$.$getUnboundedValueAt$(this.$plotAreaToAxis$($dvt$$2$$));
  };
  $DvtChartAxis$$.prototype.$getUnboundedCoordAt$ = function $$DvtChartAxis$$$$$getUnboundedCoordAt$$($dvt$$2$$) {
    return this.$axisToPlotArea$(this.$Info$.$getUnboundedCoordAt$($dvt$$2$$));
  };
  $DvtChartAxis$$.prototype.$getBaselineCoord$ = function $$DvtChartAxis$$$$$getBaselineCoord$$() {
    return this.$axisToPlotArea$(this.$Info$.$getBaselineCoord$());
  };
  $DvtChartAxis$$.prototype.$getPosition$ = function $$DvtChartAxis$$$$$getPosition$$() {
    return this.$getOptions$().position;
  };
  $DvtChartAxis$$.prototype.$isGroupAxis$ = function $$DvtChartAxis$$$$$isGroupAxis$$() {
    return this.$Info$ instanceof $dvt$$2$$.$GroupAxisInfo$;
  };
  $DvtChartAxis$$.prototype.$getMajorTickCoords$ = function $$DvtChartAxis$$$$$getMajorTickCoords$$() {
    for (var $dvt$$2$$ = this.$Info$ ? this.$Info$.$getMajorTickCoords$() : [], $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $dvt$$2$$.length;$DvtSparkChartEventManager$$++) {
      $dvt$$2$$[$DvtSparkChartEventManager$$] = this.$axisToPlotArea$($dvt$$2$$[$DvtSparkChartEventManager$$]);
    }
    return $dvt$$2$$;
  };
  $DvtChartAxis$$.prototype.$getMinorTickCoords$ = function $$DvtChartAxis$$$$$getMinorTickCoords$$() {
    for (var $dvt$$2$$ = this.$Info$ ? this.$Info$.$getMinorTickCoords$() : [], $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $dvt$$2$$.length;$DvtSparkChartEventManager$$++) {
      $dvt$$2$$[$DvtSparkChartEventManager$$] = this.$axisToPlotArea$($dvt$$2$$[$DvtSparkChartEventManager$$]);
    }
    return $dvt$$2$$;
  };
  $DvtChartAxis$$.prototype.$getBaselineCoord$ = function $$DvtChartAxis$$$$$getBaselineCoord$$() {
    return this.$axisToPlotArea$(this.$Info$.$getBaselineCoord$());
  };
  $DvtChartAxis$$.prototype.$getLinearGlobalMin$ = function $$DvtChartAxis$$$$$getLinearGlobalMin$$() {
    return this.$actualToLinear$(this.$Info$.$GlobalMin$);
  };
  $DvtChartAxis$$.prototype.$getLinearGlobalMax$ = function $$DvtChartAxis$$$$$getLinearGlobalMax$$() {
    return this.$actualToLinear$(this.$Info$.$GlobalMax$);
  };
  $DvtChartAxis$$.prototype.$getLinearViewportMin$ = function $$DvtChartAxis$$$$$getLinearViewportMin$$() {
    return this.$actualToLinear$(this.$Info$.$MinValue$);
  };
  $DvtChartAxis$$.prototype.$getLinearViewportMax$ = function $$DvtChartAxis$$$$$getLinearViewportMax$$() {
    return this.$actualToLinear$(this.$Info$.$MaxValue$);
  };
  $DvtChartAxis$$.prototype.$getUnboundedLinearValueAt$ = function $$DvtChartAxis$$$$$getUnboundedLinearValueAt$$($dvt$$2$$) {
    return this.$Info$.$actualToLinear$(this.$getUnboundedValueAt$($dvt$$2$$));
  };
  $DvtChartAxis$$.prototype.$isFullViewport$ = function $$DvtChartAxis$$$$$isFullViewport$$() {
    return this.$Info$.$MinValue$ == this.$Info$.$GlobalMin$ && this.$Info$.$MaxValue$ == this.$Info$.$GlobalMax$;
  };
  $DvtChartAxis$$.prototype.$getLeftOverflow$ = function $$DvtChartAxis$$$$$getLeftOverflow$$() {
    return $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$Info$.$getEndOverflow$() : this.$Info$.$getStartOverflow$();
  };
  $DvtChartAxis$$.prototype.$getRightOverflow$ = function $$DvtChartAxis$$$$$getRightOverflow$$() {
    return $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$Info$.$getStartOverflow$() : this.$Info$.$getEndOverflow$();
  };
  $DvtChartAxis$$.prototype.$getMinCoord$ = function $$DvtChartAxis$$$$$getMinCoord$$() {
    return this.$axisToPlotArea$(Math.min(this.$Info$.$getStartCoord$(), this.$Info$.$getEndCoord$()));
  };
  $DvtChartAxis$$.prototype.$getMaxCoord$ = function $$DvtChartAxis$$$$$getMaxCoord$$() {
    return this.$axisToPlotArea$(Math.max(this.$Info$.$getStartCoord$(), this.$Info$.$getEndCoord$()));
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartBar$$, $DvtChartSelectableRectangularPolygon$$);
  $DvtChartBar$$.$_INDICATOR_OFFSET$ = 8;
  $DvtChartBar$$.$_MIN_BAR_WIDTH_FOR_GAPS$ = 5;
  $DvtChartBar$$.$_MIN_BAR_WIDTH_FOR_GAPS_PIXEL_HINTING$ = 15;
  $DvtChartBar$$.$_MIN_BAR_LENGTH_FOR_GAPS$ = 5;
  $DvtChartBar$$.$_MAX_GAP_SIZE$ = 2;
  $DvtChartBar$$.prototype.$setSelected$ = function $$DvtChartBar$$$$$setSelected$$($dvt$$2$$) {
    this.$IsSelected$ != $dvt$$2$$ && (this.$IsSelected$ = $dvt$$2$$, this.$isSelected$() ? (this.$_tempX1$ = this.$_x1$, this.$_tempX2$ = this.$_x2$, this.$_tempBaselineCoord$ = this.$_baselineCoord$, this.$_x1$ = this.$_origX1$, this.$_x2$ = this.$_origX2$, this.$_baselineCoord$ = this.$_origBaselineCoord$, this.$setPoints$(this.$_createPointsArray$()), this.$_showNestedBorders$(this.$IsShowingHoverEffect$ ? this.$_hoverColor$ : this.$_outerColor$, this.$_innerColor$)) : (this.$_x1$ = this.$_tempX1$, 
    this.$_x2$ = this.$_tempX2$, this.$_baselineCoord$ = this.$_tempBaselineCoord$, this.$setPoints$(this.$_createPointsArray$()), this.$_showNestedBorders$(this.$IsShowingHoverEffect$ ? this.$_hoverColor$ : null)));
  };
  $DvtChartBar$$.prototype.$getAnimationParams$ = function $$DvtChartBar$$$$$getAnimationParams$$($dvt$$2$$) {
    return $dvt$$2$$ ? this.$_bHoriz$ ? [this.$_x2$, this.$_x1$, this.$_baselineCoord$, this.$_endCoord$] : [this.$_x1$, this.$_x2$, this.$_endCoord$, this.$_baselineCoord$] : [this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$];
  };
  $DvtChartBar$$.prototype.$setAnimationParams$ = function $$DvtChartBar$$$$$setAnimationParams$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_setBarCoords$($dvt$$2$$[0], $dvt$$2$$[1], $dvt$$2$$[2], $dvt$$2$$[3], !1);
    if ($DvtSparkChartEventManager$$) {
      var $DvtSparkChartDefaults$$ = this.$getIndicatorPosition$();
      $DvtSparkChartEventManager$$.$setTranslate$($DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y);
      $DvtSparkChartEventManager$$.$setAlpha$(1);
      $DvtSparkChartEventManager$$.getParent().$addChild$($DvtSparkChartEventManager$$);
    }
  };
  $DvtChartBar$$.prototype.$getDisplayAnimation$ = function $$DvtChartBar$$$$$getDisplayAnimation$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$getAnimationParams$();
    this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, this.$_x1$, this.$_x2$]);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartBar$$.prototype.$getDeleteAnimation$ = function $$DvtChartBar$$$$$getDeleteAnimation$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 0);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartBar$$.prototype.$getInsertAnimation$ = function $$DvtChartBar$$$$$getInsertAnimation$$($DvtSparkChartEventManager$$) {
    this.$setAlpha$(0);
    $DvtSparkChartEventManager$$ = this.$getDisplayAnimation$($DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 1);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartBar$$.prototype.$getIndicatorPosition$ = function $$DvtChartBar$$$$$getIndicatorPosition$$() {
    var $DvtSparkChartEventManager$$ = (this.$_x1$ + this.$_x2$) / 2, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ = this.$_bStacked$ ? (this.$_endCoord$ + this.$_baselineCoord$) / 2 : this.$_endCoord$ >= this.$_baselineCoord$ ? this.$_endCoord$ + $DvtChartBar$$.$_INDICATOR_OFFSET$ : this.$_endCoord$ - $DvtChartBar$$.$_INDICATOR_OFFSET$;
    $DvtSparkChartDefaults$$ = this.$_bHoriz$ ? $DvtSparkChartAutomation$$ : $DvtSparkChartEventManager$$;
    $DvtSparkChartEventManager$$ = this.$_bHoriz$ ? $DvtSparkChartEventManager$$ : $DvtSparkChartAutomation$$;
    return new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$);
  };
  $DvtChartBar$$.prototype.$_setBarCoords$ = function $$DvtChartBar$$$$$_setBarCoords$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    this.$_baselineCoord$ = $DvtSparkChartEventManager$$;
    this.$_endCoord$ = $DvtSparkChartDefaults$$;
    this.$_x1$ = $DvtSparkChartAutomation$$;
    this.$_x2$ = $DvtChartRefObjUtils$$;
    this.$_origX1$ = this.$_x1$;
    this.$_origX2$ = this.$_x2$;
    this.$_origBaselineCoord$ = this.$_baselineCoord$;
    0 < this.$_dataItemGaps$ && $DvtChartAxisUtils$$ && !this.$isSelected$() && ($DvtSparkChartEventManager$$ = Math.ceil($DvtChartBar$$.$_MAX_GAP_SIZE$ * this.$_dataItemGaps$), $DvtSparkChartDefaults$$ = this.$_x2$ - this.$_x1$, $DvtSparkChartAutomation$$ = this.$_axisCoord$ == this.$_baselineCoord$, Math.abs(this.$_baselineCoord$ - this.$_endCoord$) >= $DvtChartBar$$.$_MIN_BAR_LENGTH_FOR_GAPS$ && this.$_bStacked$ && !$DvtSparkChartAutomation$$ && (this.$_baselineCoord$ += this.$_endCoord$ > this.$_baselineCoord$ ? 
    $DvtSparkChartEventManager$$ : -$DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$ >= $DvtChartBar$$.$_MIN_BAR_WIDTH_FOR_GAPS$ && (1 == $dvt$$2$$.$Agent$.$getDevicePixelRatio$() && 0 < this.$_barGapRatio$ && $DvtSparkChartDefaults$$ > $DvtChartBar$$.$_MIN_BAR_WIDTH_FOR_GAPS_PIXEL_HINTING$ ? ($dvt$$2$$.$Agent$.$isPlatformGecko$() || this.$setPixelHinting$(), this.$_x1$ = Math.round(this.$_x1$), this.$_x2$ = Math.round(this.$_x2$), this.$_origX1$ = this.$_x1$, this.$_origX2$ = this.$_x2$, 
    this.$_x2$ -= $DvtSparkChartEventManager$$) : (this.$_x1$ += $DvtSparkChartEventManager$$ / 2, this.$_x2$ -= $DvtSparkChartEventManager$$ / 2)));
    this.$setPoints$(this.$_createPointsArray$());
    this.$OuterChild$ && this.$OuterChild$.$setPoints$(this.$_createPointsArray$($DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$));
    this.$InnerChild$ && this.$InnerChild$.$setPoints$(this.$_createPointsArray$($DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$ + $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$));
  };
  $DvtChartBar$$.prototype.$_createPointsArray$ = function $$DvtChartBar$$$$$_createPointsArray$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_baselineCoord$, $DvtSparkChartDefaults$$ = this.$_endCoord$, $DvtSparkChartAutomation$$ = this.$_x1$, $DvtChartRefObjUtils$$ = this.$_x2$;
    if (0 < $dvt$$2$$) {
      if (Math.abs($DvtSparkChartAutomation$$ - $DvtChartRefObjUtils$$) < 2 * $dvt$$2$$ || Math.abs($DvtSparkChartEventManager$$ - $DvtSparkChartDefaults$$) < 2 * $dvt$$2$$) {
        return [];
      }
      $DvtSparkChartAutomation$$ += $dvt$$2$$;
      $DvtChartRefObjUtils$$ -= $dvt$$2$$;
      $DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$ ? ($DvtSparkChartEventManager$$ -= $dvt$$2$$, $DvtSparkChartDefaults$$ += $dvt$$2$$) : ($DvtSparkChartEventManager$$ += $dvt$$2$$, $DvtSparkChartDefaults$$ -= $dvt$$2$$);
    }
    return this.$_bHoriz$ ? [$DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$, $DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$] : [$DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$, $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$];
  };
  $DvtChartBar$$.prototype.$getBoundingBox$ = function $$DvtChartBar$$$$$getBoundingBox$$() {
    var $DvtSparkChartEventManager$$ = Math.min(this.$_x2$, this.$_x1$), $DvtSparkChartDefaults$$ = Math.min(this.$_endCoord$, this.$_baselineCoord$), $DvtSparkChartAutomation$$ = Math.abs(this.$_x2$ - this.$_x1$), $DvtChartRefObjUtils$$ = Math.abs(this.$_endCoord$ - this.$_baselineCoord$);
    return this.$_bHoriz$ ? new $dvt$$2$$.$Rectangle$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, $DvtSparkChartAutomation$$) : new $dvt$$2$$.$Rectangle$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
  };
  $DvtChartBar$$.prototype.$getDimensionsSelf$ = function $$DvtChartBar$$$$$getDimensionsSelf$$($dvt$$2$$) {
    return this.$ConvertCoordSpaceRect$(this.$getBoundingBox$(), $dvt$$2$$);
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartBoxAndWhisker$$, $dvt$$2$$.$Shape$);
  $DvtChartBoxAndWhisker$$.prototype.$_render$ = function $$DvtChartBoxAndWhisker$$$$$_render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) {
    this.$_cleanUp$();
    var $DvtChartPieRenderUtils$$ = this.$getCtx$();
    this.$_x1$ = Math.round($DvtSparkChartEventManager$$);
    this.$_x2$ = Math.round($DvtSparkChartDefaults$$);
    this.$_low$ = Math.round($DvtSparkChartAutomation$$);
    this.$_q1$ = Math.round($DvtChartRefObjUtils$$);
    this.$_q2$ = Math.round($DvtChartAxisUtils$$);
    this.$_q3$ = Math.round($DvtChartPieLabelUtils$$);
    this.$_high$ = Math.round($DvtChartPieLabelInfo$$);
    $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$ - $DvtSparkChartEventManager$$;
    $DvtChartRefObjUtils$$ = $DvtChartStyleUtils$$.$getSizeInPixels$(this.$_styleOptions$.whiskerEndLength, $DvtSparkChartAutomation$$);
    $DvtChartRefObjUtils$$ = Math.min($DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
    $DvtChartRefObjUtils$$ = 2 * Math.floor(($DvtChartRefObjUtils$$ - 1) / 2) + 1;
    $dvt$$2$$.$Agent$.$isBrowserSafari$() || $dvt$$2$$.$Agent$.$isPlatformGecko$() && $dvt$$2$$.$Agent$.$getOS$() != $dvt$$2$$.$Agent$.$MAC_OS$ ? ($DvtSparkChartEventManager$$ = Math.ceil(($DvtSparkChartEventManager$$ + $DvtSparkChartDefaults$$) / 2), $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$ - Math.ceil($DvtChartRefObjUtils$$ / 2), $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$ + Math.floor($DvtChartRefObjUtils$$ / 2)) : ($DvtSparkChartEventManager$$ = Math.floor(($DvtSparkChartEventManager$$ + 
    $DvtSparkChartDefaults$$) / 2), $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$ - Math.floor($DvtChartRefObjUtils$$ / 2), $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$ + Math.ceil($DvtChartRefObjUtils$$ / 2), (this.$_bHoriz$ && $dvt$$2$$.$Agent$.$isPlatformGecko$() || $dvt$$2$$.$Agent$.$isPlatformIE$()) && $DvtChartRefObjUtils$$--);
    this.$_drawLine$($DvtSparkChartEventManager$$, this.$_low$, $DvtSparkChartEventManager$$, this.$_high$, "whisker");
    this.$_drawLine$($DvtSparkChartDefaults$$, this.$_low$, $DvtChartRefObjUtils$$, this.$_low$, "whiskerEnd");
    this.$_drawLine$($DvtSparkChartDefaults$$, this.$_high$, $DvtChartRefObjUtils$$, this.$_high$, "whiskerEnd");
    this.$_q2Box$ = new $dvt$$2$$.$Polygon$($DvtChartPieRenderUtils$$, this.$_createQ2PointsArray$(0));
    $DvtSparkChartEventManager$$ = $DvtChartSeriesEffectUtils$$.$getRectangleFill$(this.$_chart$, this.$_styleOptions$.q2Color, this.$_styleOptions$._q2Pattern, $DvtSparkChartAutomation$$);
    this.$_q2Box$.$setFill$($DvtSparkChartEventManager$$);
    this.$_applyCustomStyle$(this.$_q2Box$, "q2");
    this.$addChild$(this.$_q2Box$);
    this.$_q3Box$ = new $dvt$$2$$.$Polygon$($DvtChartPieRenderUtils$$, this.$_createQ3PointsArray$(0));
    $DvtChartPieRenderUtils$$ = $DvtChartSeriesEffectUtils$$.$getRectangleFill$(this.$_chart$, this.$_styleOptions$.q3Color, this.$_styleOptions$._q3Pattern, $DvtSparkChartAutomation$$);
    this.$_q3Box$.$setFill$($DvtChartPieRenderUtils$$);
    this.$_applyCustomStyle$(this.$_q3Box$, "q3");
    this.$addChild$(this.$_q3Box$);
    this.$_drawMedianLine$(0);
    if (this.$_borderColor$ = this.$_styleOptions$.borderColor) {
      this.$_borderWidth$ = this.$_styleOptions$.borderWidth, this.$_drawBorders$(this.$_borderColor$, this.$_borderWidth$);
    }
    this.$IsSelected$ && (this.$IsSelected$ = !1, this.$setSelected$(!0));
  };
  $DvtChartBoxAndWhisker$$.prototype.$showHoverEffect$ = function $$DvtChartBoxAndWhisker$$$$$showHoverEffect$$() {
    this.$IsShowingHoverEffect$ || (this.$IsShowingHoverEffect$ = !0, this.$isSelected$() ? this.$_drawBorders$(this.$_hoverColor$, $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$, this.$_innerColor$, $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$) : this.$_drawBorders$(this.$_hoverColor$, $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH_HOVER$, this.$_innerColor$, $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$));
  };
  $DvtChartBoxAndWhisker$$.prototype.$hideHoverEffect$ = function $$DvtChartBoxAndWhisker$$$$$hideHoverEffect$$() {
    this.$IsShowingHoverEffect$ && (this.$IsShowingHoverEffect$ = !1, this.$isSelected$() ? this.$_drawBorders$(this.$_outerColor$, $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$, this.$_innerColor$, $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$) : this.$_drawBorders$(this.$_borderColor$, this.$_borderWidth$));
  };
  $DvtChartBoxAndWhisker$$.prototype.$setSelected$ = function $$DvtChartBoxAndWhisker$$$$$setSelected$$($dvt$$2$$) {
    this.$IsSelected$ != $dvt$$2$$ && (this.$IsSelected$ = $dvt$$2$$, this.$IsShowingHoverEffect$ ? $dvt$$2$$ ? this.$_drawBorders$(this.$_hoverColor$, $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$, this.$_innerColor$, $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$) : this.$_drawBorders$(this.$_hoverColor$, $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH_HOVER$, this.$_innerColor$, $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$) : $dvt$$2$$ ? 
    this.$_drawBorders$(this.$_outerColor$, $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$, this.$_innerColor$, $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$) : this.$_drawBorders$(this.$_borderColor$, this.$_borderWidth$));
  };
  $DvtChartBoxAndWhisker$$.prototype.$UpdateSelectionEffect$ = function $$DvtChartBoxAndWhisker$$$$$UpdateSelectionEffect$$() {
  };
  $DvtChartBoxAndWhisker$$.prototype.$getDisplayAnimation$ = function $$DvtChartBoxAndWhisker$$$$$getDisplayAnimation$$($dvt$$2$$) {
    return this.$getInsertAnimation$($dvt$$2$$);
  };
  $DvtChartBoxAndWhisker$$.prototype.$getDeleteAnimation$ = function $$DvtChartBoxAndWhisker$$$$$getDeleteAnimation$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, [this.$_x1$, this.$_x2$, this.$_q2$, this.$_q2$, this.$_q2$, this.$_q2$, this.$_q2$]);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 0);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartBoxAndWhisker$$.prototype.$getInsertAnimation$ = function $$DvtChartBoxAndWhisker$$$$$getInsertAnimation$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    var $DvtSparkChartDefaults$$ = this.$_getAnimationParams$();
    this.$_setAnimationParams$([this.$_x1$, this.$_x2$, this.$_q2$, this.$_q2$, this.$_q2$, this.$_q2$, this.$_q2$]);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, $DvtSparkChartDefaults$$);
    this.$setAlpha$(0);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 1);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartBoxAndWhisker$$.prototype.$getUpdateAnimation$ = function $$DvtChartBoxAndWhisker$$$$$getUpdateAnimation$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$), $DvtChartRefObjUtils$$ = this.$_getQ2Fill$();
    this.$_setQ2Fill$($DvtSparkChartDefaults$$.$_getQ2Fill$());
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_FILL$, this, this.$_getQ2Fill$, this.$_setQ2Fill$, $DvtChartRefObjUtils$$);
    $DvtChartRefObjUtils$$ = this.$_getQ3Fill$();
    this.$_setQ3Fill$($DvtSparkChartDefaults$$.$_getQ3Fill$());
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_FILL$, this, this.$_getQ3Fill$, this.$_setQ3Fill$, $DvtChartRefObjUtils$$);
    $DvtChartRefObjUtils$$ = this.$_getAnimationParams$();
    this.$_setAnimationParams$($DvtSparkChartDefaults$$.$_getAnimationParams$());
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, $DvtChartRefObjUtils$$);
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartBoxAndWhisker$$.prototype.$_getAnimationParams$ = function $$DvtChartBoxAndWhisker$$$$$_getAnimationParams$$() {
    return [this.$_x1$, this.$_x2$, this.$_low$, this.$_q1$, this.$_q2$, this.$_q3$, this.$_high$];
  };
  $DvtChartBoxAndWhisker$$.prototype.$_setAnimationParams$ = function $$DvtChartBoxAndWhisker$$$$$_setAnimationParams$$($dvt$$2$$) {
    this.$_render$($dvt$$2$$[0], $dvt$$2$$[1], $dvt$$2$$[2], $dvt$$2$$[3], $dvt$$2$$[4], $dvt$$2$$[5], $dvt$$2$$[6]);
  };
  $DvtChartBoxAndWhisker$$.prototype.$_getQ2Fill$ = function $$DvtChartBoxAndWhisker$$$$$_getQ2Fill$$() {
    return new $dvt$$2$$.$SolidFill$(this.$_styleOptions$.q2Color);
  };
  $DvtChartBoxAndWhisker$$.prototype.$_setQ2Fill$ = function $$DvtChartBoxAndWhisker$$$$$_setQ2Fill$$($dvt$$2$$) {
    this.$_styleOptions$.q2Color = $dvt$$2$$.$getColor$();
  };
  $DvtChartBoxAndWhisker$$.prototype.$_getQ3Fill$ = function $$DvtChartBoxAndWhisker$$$$$_getQ3Fill$$() {
    return new $dvt$$2$$.$SolidFill$(this.$_styleOptions$.q3Color);
  };
  $DvtChartBoxAndWhisker$$.prototype.$_setQ3Fill$ = function $$DvtChartBoxAndWhisker$$$$$_setQ3Fill$$($dvt$$2$$) {
    this.$_styleOptions$.q3Color = $dvt$$2$$.$getColor$();
  };
  $DvtChartBoxAndWhisker$$.prototype.$_drawLine$ = function $$DvtChartBoxAndWhisker$$$$$_drawLine$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    $DvtSparkChartEventManager$$ = this.$_bHoriz$ ? new $dvt$$2$$.$Line$(this.$getCtx$(), $DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, $DvtSparkChartAutomation$$) : new $dvt$$2$$.$Line$(this.$getCtx$(), $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
    this.$_applyCustomStyle$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$);
    $DvtSparkChartEventManager$$.$setPixelHinting$();
    this.$addChild$($DvtSparkChartEventManager$$);
  };
  $DvtChartBoxAndWhisker$$.prototype.$_drawMedianLine$ = function $$DvtChartBoxAndWhisker$$$$$_drawMedianLine$$($DvtSparkChartEventManager$$) {
    if (!this.$_medianLine$) {
      var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Line$(this.$getCtx$(), 0, 0, 0, 0);
      this.$_applyCustomStyle$($DvtSparkChartDefaults$$, "median");
      $DvtSparkChartDefaults$$.$setPixelHinting$();
      this.$addChild$($DvtSparkChartDefaults$$);
      this.$_medianLine$ = $DvtSparkChartDefaults$$;
    }
    $DvtSparkChartDefaults$$ = this.$_x1$ + $DvtSparkChartEventManager$$;
    $DvtSparkChartEventManager$$ = this.$_x2$ - $DvtSparkChartEventManager$$;
    var $DvtSparkChartAutomation$$ = this.$_q2$;
    this.$_bHoriz$ ? (this.$_medianLine$.$setX1$($DvtSparkChartAutomation$$), this.$_medianLine$.$setX2$($DvtSparkChartAutomation$$), this.$_medianLine$.$setY1$($DvtSparkChartDefaults$$), this.$_medianLine$.$setY2$($DvtSparkChartEventManager$$)) : (this.$_medianLine$.$setY1$($DvtSparkChartAutomation$$), this.$_medianLine$.$setY2$($DvtSparkChartAutomation$$), this.$_medianLine$.$setX1$($DvtSparkChartDefaults$$), this.$_medianLine$.$setX2$($DvtSparkChartEventManager$$));
  };
  $DvtChartBoxAndWhisker$$.prototype.$_drawBorders$ = function $$DvtChartBoxAndWhisker$$$$$_drawBorders$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    if (!this.$_outerBorderShape$) {
      var $DvtChartAxisUtils$$ = this.$getChildIndex$(this.$_q2Box$);
      this.$_innerBorderShape$ = new $dvt$$2$$.$Polygon$(this.$getCtx$());
      this.$_innerBorderShape$.$setInvisibleFill$();
      this.$addChildAt$(this.$_innerBorderShape$, $DvtChartAxisUtils$$);
      this.$_outerBorderShape$ = new $dvt$$2$$.$Polygon$(this.$getCtx$());
      this.$_outerBorderShape$.$setInvisibleFill$();
      this.$addChildAt$(this.$_outerBorderShape$, $DvtChartAxisUtils$$);
    }
    $DvtChartAxisUtils$$ = 0;
    $DvtSparkChartDefaults$$ ? (this.$_outerBorderShape$.$setPoints$(this.$_createBoxPointsArray$(0)), this.$_outerBorderShape$.$setSolidFill$($DvtSparkChartEventManager$$), $DvtChartAxisUtils$$ += $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$ ? (this.$_innerBorderShape$.$setPoints$(this.$_createBoxPointsArray$($DvtSparkChartDefaults$$)), this.$_innerBorderShape$.$setSolidFill$($DvtSparkChartAutomation$$), $DvtChartAxisUtils$$ += $DvtChartRefObjUtils$$) : this.$_innerBorderShape$.$setInvisibleFill$()) : 
    (this.$_outerBorderShape$.$setInvisibleFill$(), this.$_innerBorderShape$.$setInvisibleFill$());
    this.$_q2Box$.$setPoints$(this.$_createQ2PointsArray$($DvtChartAxisUtils$$));
    this.$_q3Box$.$setPoints$(this.$_createQ3PointsArray$($DvtChartAxisUtils$$));
    this.$_drawMedianLine$($DvtChartAxisUtils$$);
  };
  $DvtChartBoxAndWhisker$$.prototype.$_createBoxPointsArray$ = function $$DvtChartBoxAndWhisker$$$$$_createBoxPointsArray$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_x1$ + $dvt$$2$$, $DvtSparkChartDefaults$$ = this.$_x2$ - $dvt$$2$$, $DvtSparkChartAutomation$$;
    this.$_q1$ < this.$_q3$ ? ($DvtSparkChartAutomation$$ = this.$_q1$ + $dvt$$2$$, $dvt$$2$$ = this.$_q3$ - $dvt$$2$$) : ($DvtSparkChartAutomation$$ = this.$_q1$ - $dvt$$2$$, $dvt$$2$$ = this.$_q3$ + $dvt$$2$$);
    return this.$_createPointsArray$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $dvt$$2$$);
  };
  $DvtChartBoxAndWhisker$$.prototype.$_createQ3PointsArray$ = function $$DvtChartBoxAndWhisker$$$$$_createQ3PointsArray$$($dvt$$2$$) {
    return this.$_createPointsArray$(this.$_x1$ + $dvt$$2$$, this.$_x2$ - $dvt$$2$$, this.$_q2$, this.$_q2$ < this.$_q3$ ? this.$_q3$ - $dvt$$2$$ : this.$_q3$ + $dvt$$2$$);
  };
  $DvtChartBoxAndWhisker$$.prototype.$_createQ2PointsArray$ = function $$DvtChartBoxAndWhisker$$$$$_createQ2PointsArray$$($dvt$$2$$) {
    return this.$_createPointsArray$(this.$_x1$ + $dvt$$2$$, this.$_x2$ - $dvt$$2$$, this.$_q2$ < this.$_q1$ ? this.$_q1$ - $dvt$$2$$ : this.$_q1$ + $dvt$$2$$, this.$_q2$);
  };
  $DvtChartBoxAndWhisker$$.prototype.$_createPointsArray$ = function $$DvtChartBoxAndWhisker$$$$$_createPointsArray$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return this.$_bHoriz$ ? [$DvtSparkChartDefaults$$, $dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $dvt$$2$$] : [$dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $dvt$$2$$, $DvtSparkChartAutomation$$];
  };
  $DvtChartBoxAndWhisker$$.prototype.$_applyCustomStyle$ = function $$DvtChartBoxAndWhisker$$$$$_applyCustomStyle$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $dvt$$2$$.$setStyle$(this.$_styleOptions$[$DvtSparkChartEventManager$$ + "Style"], !0);
    $dvt$$2$$.$setClassName$(this.$_styleOptions$[$DvtSparkChartEventManager$$ + "ClassName"], !0);
  };
  $DvtChartBoxAndWhisker$$.prototype.$_cleanUp$ = function $$DvtChartBoxAndWhisker$$$$$_cleanUp$$() {
    this.$removeChildren$();
    this.$_innerBorderShape$ = this.$_outerBorderShape$ = this.$_medianLine$ = this.$_q3Box$ = this.$_q2Box$ = null;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartCandlestick$$, $dvt$$2$$.$Container$);
  $DvtChartCandlestick$$.$_BAR_WIDTH$ = .3;
  $DvtChartCandlestick$$.prototype.$setChangeStyle$ = function $$DvtChartCandlestick$$$$$setChangeStyle$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    this.$_changeShape$.$setStyleProperties$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
  };
  $DvtChartCandlestick$$.prototype.$setRangeStyle$ = function $$DvtChartCandlestick$$$$$setRangeStyle$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    this.$_rangeShape$ && this.$_rangeShape$.$setStyleProperties$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, null, $DvtSparkChartAutomation$$);
  };
  $DvtChartCandlestick$$.prototype.$setSelected$ = function $$DvtChartCandlestick$$$$$setSelected$$($dvt$$2$$) {
    this.$_changeShape$.$setSelected$($dvt$$2$$);
    this.$_rangeShape$ && this.$_rangeShape$.$setSelected$($dvt$$2$$);
  };
  $DvtChartCandlestick$$.prototype.$showHoverEffect$ = function $$DvtChartCandlestick$$$$$showHoverEffect$$() {
    this.$_changeShape$.$showHoverEffect$();
    this.$_rangeShape$ && this.$_rangeShape$.$showHoverEffect$();
  };
  $DvtChartCandlestick$$.prototype.$hideHoverEffect$ = function $$DvtChartCandlestick$$$$$hideHoverEffect$$() {
    this.$_changeShape$.$hideHoverEffect$();
    this.$_rangeShape$ && this.$_rangeShape$.$hideHoverEffect$();
  };
  $DvtChartCandlestick$$.prototype.$getDisplayAnimation$ = function $$DvtChartCandlestick$$$$$getDisplayAnimation$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    var $DvtSparkChartDefaults$$ = this.$_changeShape$.$getPoints$();
    this.$_changeShape$.$setPoints$($DvtChartCandlestick$$.$_getInitialPoints$($DvtSparkChartDefaults$$));
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $DvtSparkChartDefaults$$);
    this.$_rangeShape$ && ($DvtSparkChartDefaults$$ = this.$_rangeShape$.$getPoints$(), this.$_rangeShape$.$setPoints$($DvtChartCandlestick$$.$_getInitialPoints$($DvtSparkChartDefaults$$)), $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $DvtSparkChartDefaults$$));
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartCandlestick$$.prototype.$getDeleteAnimation$ = function $$DvtChartCandlestick$$$$$getDeleteAnimation$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $DvtChartCandlestick$$.$_getInitialPoints$(this.$_changeShape$.$getPoints$()));
    this.$_rangeShape$ && $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $DvtChartCandlestick$$.$_getInitialPoints$(this.$_rangeShape$.$getPoints$()));
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 0);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartCandlestick$$.prototype.$getInsertAnimation$ = function $$DvtChartCandlestick$$$$$getInsertAnimation$$($DvtSparkChartEventManager$$) {
    this.$setAlpha$(0);
    $DvtSparkChartEventManager$$ = this.$getDisplayAnimation$($DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 1);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartCandlestick$$.prototype.$getUpdateAnimation$ = function $$DvtChartCandlestick$$$$$getUpdateAnimation$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$), $DvtChartRefObjUtils$$ = this.$_changeShape$.$getPoints$();
    this.$_changeShape$.$setPoints$($DvtSparkChartDefaults$$.$_changeShape$.$getPoints$());
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $DvtChartRefObjUtils$$);
    var $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$.$_changeShape$.$isSelected$() || this.$_changeShape$.$isSelected$(), $DvtChartAxisUtils$$ = $DvtSparkChartDefaults$$.$_changeShape$.$getPrimaryFill$().clone(), $DvtChartPieLabelUtils$$ = this.$_changeShape$.$getPrimaryFill$();
    $DvtChartRefObjUtils$$ || (this.$_changeShape$.$setFill$($DvtChartAxisUtils$$), $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_FILL$, this.$_changeShape$, this.$_changeShape$.$getFill$, this.$_changeShape$.$setFill$, $DvtChartPieLabelUtils$$));
    this.$_rangeShape$ && $DvtSparkChartDefaults$$.$_rangeShape$ && ($DvtChartRefObjUtils$$ = this.$_rangeShape$.$getPoints$(), this.$_rangeShape$.$setPoints$($DvtSparkChartDefaults$$.$_rangeShape$.$getPoints$()), $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $DvtChartRefObjUtils$$));
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartCandlestick$$.prototype.$UpdateSelectionEffect$ = function $$DvtChartCandlestick$$$$$UpdateSelectionEffect$$() {
  };
  $DvtChartCandlestick$$.$_getInitialPoints$ = function $$DvtChartCandlestick$$$$_getInitialPoints$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$[0], $DvtSparkChartDefaults$$ = $dvt$$2$$[2];
    $dvt$$2$$ = ($dvt$$2$$[1] + $dvt$$2$$[5]) / 2;
    return [$DvtSparkChartEventManager$$, $dvt$$2$$, $DvtSparkChartDefaults$$, $dvt$$2$$, $DvtSparkChartDefaults$$, $dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$];
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartCoord$$, $dvt$$2$$.$Obj$);
  $DvtChartCoord$$.prototype.$isUpstep$ = function $$DvtChartCoord$$$$$isUpstep$$($dvt$$2$$) {
    return Math.abs(this.$y2$ - $dvt$$2$$) > Math.abs(this.$y1$ - $dvt$$2$$);
  };
  $DvtChartCoord$$.prototype.clone = function $$DvtChartCoord$$$$clone$() {
    return new $DvtChartCoord$$(this.x, this.$y1$, this.$y2$, this.$groupIndex$, this.group, this.$filtered$);
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartLineArea$$, $dvt$$2$$.$Container$);
  $DvtChartLineArea$$.$_INDICATOR_OFFSET$ = 8;
  $DvtChartLineArea$$.prototype.$setCoords$ = function $$DvtChartLineArea$$$$$setCoords$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_arCoord$ = $dvt$$2$$;
    $DvtSparkChartEventManager$$ && (this.$_arBaseCoord$ = $DvtSparkChartEventManager$$);
    this.$removeChildren$();
    this.$_bArea$ ? this.$_renderAreas$() : this.$_renderLines$();
    this.$_positionIndicators$();
  };
  $DvtChartLineArea$$.prototype.$isArea$ = function $$DvtChartLineArea$$$$$isArea$$() {
    return this.$_bArea$;
  };
  $DvtChartLineArea$$.prototype.$_getPointArrays$ = function $$DvtChartLineArea$$$$$_getPointArrays$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = [], $DvtChartRefObjUtils$$ = [];
    $DvtSparkChartAutomation$$.push($DvtChartRefObjUtils$$);
    $DvtSparkChartEventManager$$ = $DvtChartLineArea$$.$_convertToPointCoords$($DvtSparkChartEventManager$$);
    var $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$isPolar$(this.$_chart$), $DvtChartPieLabelInfo$$ = "centeredStepped" == $DvtSparkChartDefaults$$ || "centeredSegmented" == $DvtSparkChartDefaults$$, $DvtChartPieRenderUtils$$ = $DvtChartPieLabelInfo$$ || "stepped" == $DvtSparkChartDefaults$$ || "segmented" == $DvtSparkChartDefaults$$, $DvtChartDataChangePyramidSlice$$ = $DvtChartStyleUtils$$.$getGroupWidth$(this.$_chart$), $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) && 
    $DvtChartTypeUtils$$.$isVertical$(this.$_chart$) ? -1 : 1, $DvtChartRangeMarker$$;
    $DvtChartPieLabelUtils$$ && ($DvtChartRangeMarker$$ = $DvtSparkChartEventManager$$[$DvtSparkChartEventManager$$.length - 1]);
    for (var $DvtChartPolarBar$$, $DvtChartFunnelSlice$$, $DvtChartDataCursor$$, $DvtChartDataChange$$ = !1, $DvtChartPie$$ = 0;$DvtChartPie$$ < $DvtSparkChartEventManager$$.length;$DvtChartPie$$++) {
      null == $DvtSparkChartEventManager$$[$DvtChartPie$$] ? ($DvtChartAxisUtils$$.$isMixedFrequency$(this.$_chart$) || !$DvtChartPieRenderUtils$$ || $DvtChartPieLabelUtils$$ || !$DvtChartRangeMarker$$ || $DvtChartDataCursor$$ || ($DvtChartPolarBar$$ = $DvtChartPieLabelInfo$$ ? $DvtChartRangeMarker$$.x + .5 * $DvtChartDataChangePyramidSlice$$ * $DvtChartSeriesEffectUtils$$ : $DvtChartRangeMarker$$.x + $DvtChartDataChangePyramidSlice$$ * $DvtChartSeriesEffectUtils$$, this.$_pushCoord$($DvtChartRefObjUtils$$, 
      $DvtChartPolarBar$$, $DvtChartRangeMarker$$.y)), "jet" != this.$_chart$.$getOptions$()._environment && $DvtChartAxisUtils$$.$isMixedFrequency$(this.$_chart$) || ($DvtChartRefObjUtils$$ = [], $DvtSparkChartAutomation$$.push($DvtChartRefObjUtils$$), $DvtChartRangeMarker$$ = null)) : ($DvtChartPolarBar$$ = $DvtSparkChartEventManager$$[$DvtChartPie$$], $DvtChartDataCursor$$ = $DvtSparkChartEventManager$$[$DvtChartPie$$].$_isY2$, $DvtChartFunnelSlice$$ = $DvtChartPieLabelInfo$$ ? $DvtChartPolarBar$$.x - 
      $DvtChartDataChangePyramidSlice$$ / 2 * $DvtChartSeriesEffectUtils$$ : $DvtChartPolarBar$$.x, $DvtChartDataCursor$$ && ($DvtChartDataChange$$ && $DvtChartPieRenderUtils$$ && ($DvtChartFunnelSlice$$ += $DvtChartDataChangePyramidSlice$$ * $DvtChartSeriesEffectUtils$$), $DvtChartDataChange$$ = !$DvtChartDataChange$$), "curved" == $DvtSparkChartDefaults$$ && $DvtChartDataCursor$$ && $DvtChartRefObjUtils$$.push(null, null), $DvtChartRangeMarker$$ && $DvtChartPieRenderUtils$$ && this.$_pushCoord$($DvtChartRefObjUtils$$, 
      $DvtChartFunnelSlice$$, $DvtChartRangeMarker$$.y), this.$_bArea$ || "segmented" != $DvtSparkChartDefaults$$ && "centeredSegmented" != $DvtSparkChartDefaults$$ || ($DvtChartRefObjUtils$$ = [], $DvtSparkChartAutomation$$.push($DvtChartRefObjUtils$$)), this.$_pushCoord$($DvtChartRefObjUtils$$, $DvtChartFunnelSlice$$, $DvtChartPolarBar$$.y), $DvtChartRangeMarker$$ = $DvtChartPolarBar$$);
    }
    $DvtChartPieRenderUtils$$ && !$DvtChartPieLabelUtils$$ && $DvtChartRangeMarker$$ && !$DvtChartDataCursor$$ && ($DvtChartPolarBar$$ = $DvtChartPieLabelInfo$$ ? $DvtChartRangeMarker$$.x + .5 * $DvtChartDataChangePyramidSlice$$ * $DvtChartSeriesEffectUtils$$ : $DvtChartRangeMarker$$.x + $DvtChartDataChangePyramidSlice$$ * $DvtChartSeriesEffectUtils$$, this.$_pushCoord$($DvtChartRefObjUtils$$, $DvtChartPolarBar$$, $DvtChartRangeMarker$$.y));
    $DvtChartPieLabelUtils$$ && 1 < $DvtSparkChartAutomation$$.length && ($DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.pop(), $DvtSparkChartAutomation$$[0] = $DvtChartRefObjUtils$$.concat($DvtSparkChartAutomation$$[0]));
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartLineArea$$.prototype.$_pushCoord$ = function $$DvtChartLineArea$$$$$_pushCoord$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartDefaults$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$(this.$_chart$, new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), this.$_availSpace$);
    $DvtSparkChartEventManager$$.push(Math.round(10 * $DvtSparkChartDefaults$$.x) / 10, Math.round(10 * $DvtSparkChartDefaults$$.y) / 10);
  };
  $DvtChartLineArea$$.prototype.$_isRing$ = function $$DvtChartLineArea$$$$$_isRing$$() {
    if (!$DvtChartTypeUtils$$.$isPolar$(this.$_chart$) || !$DvtChartAxisUtils$$.$hasGroupAxis$(this.$_chart$) || this.$_arCoord$.length < $DvtChartDataUtils$$.$getGroupCount$(this.$_chart$)) {
      return !1;
    }
    for (var $dvt$$2$$ = 0;$dvt$$2$$ < this.$_arCoord$.length;$dvt$$2$$++) {
      if (null == this.$_arCoord$[$dvt$$2$$].x) {
        return !1;
      }
    }
    return !0;
  };
  $DvtChartLineArea$$.prototype.$_getSplineType$ = function $$DvtChartLineArea$$$$$_getSplineType$$() {
    return $DvtChartTypeUtils$$.$isScatterBubble$(this.$_chart$) ? $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_CARDINAL$ : $DvtChartTypeUtils$$.$isPolar$(this.$_chart$) ? this.$_isRing$() ? $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_CARDINAL_CLOSED$ : $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_CARDINAL$ : $DvtChartTypeUtils$$.$isHorizontal$(this.$_chart$) ? $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_MONOTONE_HORIZONTAL$ : $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_MONOTONE_VERTICAL$;
  };
  $DvtChartLineArea$$.prototype.$_renderLines$ = function $$DvtChartLineArea$$$$$_renderLines$$() {
    for (var $DvtSparkChartEventManager$$ = this.$_getPointArrays$(this.$_arCoord$, this.$_type$), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      ($DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$]) && 1 < $DvtSparkChartDefaults$$.length && ("curved" == this.$_type$ ? ($DvtSparkChartDefaults$$ = $DvtChartLineArea$$.$_getCurvedPathCommands$($DvtSparkChartDefaults$$, !1, this.$_getSplineType$()), $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtSparkChartDefaults$$), $DvtSparkChartDefaults$$.$setFill$(null)) : this.$_isRing$() ? ($DvtSparkChartDefaults$$ = new $dvt$$2$$.$Polygon$(this.$getCtx$(), 
      $DvtSparkChartDefaults$$), $DvtSparkChartDefaults$$.$setFill$(null)) : $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Polyline$(this.$getCtx$(), $DvtSparkChartDefaults$$), $DvtSparkChartDefaults$$.$setStroke$(this.$_stroke$), $DvtSparkChartDefaults$$.$setClassName$(this.$_className$).$setStyle$(this.$_style$), this.$addChild$($DvtSparkChartDefaults$$));
    }
  };
  $DvtChartLineArea$$.prototype.$_renderAreas$ = function $$DvtChartLineArea$$$$$_renderAreas$$() {
    var $DvtSparkChartEventManager$$ = this.$_arCoord$, $DvtSparkChartDefaults$$ = this.$_arBaseCoord$;
    !$DvtChartTypeUtils$$.$isPolar$(this.$_chart$) && 0 < $DvtSparkChartEventManager$$.length && 0 < $DvtSparkChartDefaults$$.length && ($DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.slice(0), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.slice(0), null != $DvtSparkChartEventManager$$[0].x && null != $DvtSparkChartDefaults$$[0].x && ($DvtChartLineArea$$.$_removeAreaEdge$($DvtSparkChartEventManager$$, 0, this.$_baseline$), $DvtChartLineArea$$.$_removeAreaEdge$($DvtSparkChartDefaults$$, 
    0, this.$_baseline$), $DvtSparkChartDefaults$$[0].x = $DvtSparkChartEventManager$$[0].x), null != $DvtSparkChartEventManager$$[$DvtSparkChartEventManager$$.length - 1].x && null != $DvtSparkChartDefaults$$[$DvtSparkChartDefaults$$.length - 1].x && ($DvtChartLineArea$$.$_removeAreaEdge$($DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$.length - 1, this.$_baseline$), $DvtChartLineArea$$.$_removeAreaEdge$($DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.length - 1, this.$_baseline$), 
    $DvtSparkChartDefaults$$[$DvtSparkChartDefaults$$.length - 1].x = $DvtSparkChartEventManager$$[$DvtSparkChartEventManager$$.length - 1].x));
    $DvtSparkChartEventManager$$ = this.$_getPointArrays$($DvtSparkChartEventManager$$, this.$_type$);
    $DvtSparkChartDefaults$$ = this.$_getPointArrays$($DvtSparkChartDefaults$$, this.$_baseType$);
    if ($DvtSparkChartEventManager$$.length == $DvtSparkChartDefaults$$.length) {
      for (var $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$ = 0;$DvtChartRefObjUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartRefObjUtils$$++) {
        var $DvtChartAxisUtils$$ = $DvtSparkChartEventManager$$[$DvtChartRefObjUtils$$], $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$[$DvtChartRefObjUtils$$];
        if (!(2 > $DvtChartAxisUtils$$.length)) {
          var $DvtChartPieLabelInfo$$ = "curved" == this.$_type$;
          $DvtSparkChartAutomation$$ = "curved" == this.$_baseType$;
          this.$_isRing$() && ($DvtChartPieLabelInfo$$ || $DvtChartAxisUtils$$.push($DvtChartAxisUtils$$[0], $DvtChartAxisUtils$$[1]), 2 <= $DvtChartPieLabelUtils$$.length && !$DvtSparkChartAutomation$$ && $DvtChartPieLabelUtils$$.push($DvtChartPieLabelUtils$$[0], $DvtChartPieLabelUtils$$[1]));
          for (var $DvtChartPieRenderUtils$$ = [], $DvtChartDataChangePyramidSlice$$ = 0;$DvtChartDataChangePyramidSlice$$ < $DvtChartPieLabelUtils$$.length;$DvtChartDataChangePyramidSlice$$ += 2) {
            $DvtChartPieRenderUtils$$.unshift($DvtChartPieLabelUtils$$[$DvtChartDataChangePyramidSlice$$], $DvtChartPieLabelUtils$$[$DvtChartDataChangePyramidSlice$$ + 1]);
          }
          $DvtChartPieLabelInfo$$ || $DvtSparkChartAutomation$$ ? ($DvtChartPieLabelUtils$$ = this.$_getSplineType$(), $DvtChartAxisUtils$$ = $DvtChartPieLabelInfo$$ ? $DvtChartLineArea$$.$_getCurvedPathCommands$($DvtChartAxisUtils$$, !1, $DvtChartPieLabelUtils$$) : $dvt$$2$$.$PathUtils$.$polyline$($DvtChartAxisUtils$$, !1), $DvtChartAxisUtils$$ += $DvtSparkChartAutomation$$ ? $DvtChartLineArea$$.$_getCurvedPathCommands$($DvtChartPieRenderUtils$$, !0, $DvtChartPieLabelUtils$$) : $dvt$$2$$.$PathUtils$.$polyline$($DvtChartPieRenderUtils$$, 
          !0), $DvtChartAxisUtils$$ += $dvt$$2$$.$PathUtils$.closePath(), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtChartAxisUtils$$)) : ($DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.concat($DvtChartAxisUtils$$), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Polygon$(this.$getCtx$(), $DvtSparkChartAutomation$$));
          $DvtSparkChartAutomation$$.$setFill$(this.$_fill$);
          $DvtSparkChartAutomation$$.$setClassName$(this.$_className$).$setStyle$(this.$_style$);
          this.$_stroke$ && $DvtSparkChartAutomation$$.$setStroke$(this.$_stroke$);
          this.$addChild$($DvtSparkChartAutomation$$);
        }
      }
    }
  };
  $DvtChartLineArea$$.prototype.$_positionIndicators$ = function $$DvtChartLineArea$$$$$_positionIndicators$$() {
    for (var $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$ = 0;$DvtChartRefObjUtils$$ < this.$_arCoord$.length;$DvtChartRefObjUtils$$++) {
      $DvtSparkChartAutomation$$ = this.$_arCoord$[$DvtChartRefObjUtils$$], ($DvtSparkChartEventManager$$ = this.$_indicatorMap$[$DvtSparkChartAutomation$$.$groupIndex$]) && $DvtSparkChartEventManager$$.$indicator$ && ($DvtSparkChartDefaults$$ = ($DvtSparkChartAutomation$$.$isUpstep$(this.$_baseline$) ? $DvtSparkChartAutomation$$.$y2$ : $DvtSparkChartAutomation$$.$y1$) + $DvtChartLineArea$$.$_INDICATOR_OFFSET$ * ($DvtSparkChartEventManager$$.direction == $DvtChartDataChangeUtils$$.$DIR_UP$ ? -1 : 
      1), $DvtSparkChartDefaults$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$(this.$_chart$, new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$.x, $DvtSparkChartDefaults$$), this.$_availSpace$), $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$indicator$, $DvtSparkChartEventManager$$.$setTranslate$($DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y), $DvtSparkChartEventManager$$.$setAlpha$(1), $DvtSparkChartEventManager$$.getParent().$addChild$($DvtSparkChartEventManager$$));
    }
  };
  $DvtChartLineArea$$.prototype.$getAnimationParams$ = function $$DvtChartLineArea$$$$$getAnimationParams$$($dvt$$2$$) {
    return $DvtChartLineArea$$.$_coordsToAnimationParams$(this.$_arCoord$, $dvt$$2$$ ? $dvt$$2$$.$_arCoord$ : null, this.$_baseline$);
  };
  $DvtChartLineArea$$.prototype.$setAnimationParams$ = function $$DvtChartLineArea$$$$$setAnimationParams$$($dvt$$2$$) {
    $dvt$$2$$ = $DvtChartLineArea$$.$_animationParamsToCoords$($dvt$$2$$);
    this.$setCoords$($dvt$$2$$);
  };
  $DvtChartLineArea$$.prototype.$getBaseAnimationParams$ = function $$DvtChartLineArea$$$$$getBaseAnimationParams$$($dvt$$2$$) {
    return $DvtChartLineArea$$.$_coordsToAnimationParams$(this.$_arBaseCoord$, $dvt$$2$$ ? $dvt$$2$$.$_arBaseCoord$ : null, this.$_baseline$);
  };
  $DvtChartLineArea$$.prototype.$setBaseAnimationParams$ = function $$DvtChartLineArea$$$$$setBaseAnimationParams$$($dvt$$2$$) {
    this.$_arBaseCoord$ = $DvtChartLineArea$$.$_animationParamsToCoords$($dvt$$2$$);
  };
  $DvtChartLineArea$$.prototype.$getCommonGroupIndices$ = function $$DvtChartLineArea$$$$$getCommonGroupIndices$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < this.$_arCoord$.length;$DvtSparkChartDefaults$$++) {
      if (!this.$_arCoord$[$DvtSparkChartDefaults$$].$filtered$ && null != this.$_arCoord$[$DvtSparkChartDefaults$$].x) {
        for (var $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $dvt$$2$$.$_arCoord$.length;$DvtSparkChartAutomation$$++) {
          if (!$dvt$$2$$.$_arCoord$[$DvtSparkChartAutomation$$].$filtered$ && null != $dvt$$2$$.$_arCoord$[$DvtSparkChartAutomation$$].x && this.$_arCoord$[$DvtSparkChartDefaults$$].group == $dvt$$2$$.$_arCoord$[$DvtSparkChartAutomation$$].group) {
            $DvtSparkChartEventManager$$.push(this.$_arCoord$[$DvtSparkChartDefaults$$].$groupIndex$);
            break;
          }
        }
      }
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartLineArea$$.prototype.$addIndicator$ = function $$DvtChartLineArea$$$$$addIndicator$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$.$setAlpha$(0);
    this.$_indicatorMap$[$dvt$$2$$] = {direction:$DvtSparkChartEventManager$$, $indicator$:$DvtSparkChartDefaults$$};
  };
  $DvtChartLineArea$$.prototype.$removeIndicators$ = function $$DvtChartLineArea$$$$$removeIndicators$$() {
    for (var $dvt$$2$$ in this.$_indicatorMap$) {
      var $DvtSparkChartEventManager$$ = this.$_indicatorMap$[$dvt$$2$$].$indicator$;
      $DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$.getParent().removeChild($DvtSparkChartEventManager$$);
    }
    this.$_indicatorMap$ = {};
  };
  $DvtChartLineArea$$.$_convertToPointCoords$ = function $$DvtChartLineArea$$$$_convertToPointCoords$$($DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      if (!$DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$filtered$) {
        if (null == $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].x) {
          $DvtSparkChartDefaults$$.push(null);
        } else {
          if ($DvtSparkChartDefaults$$.push(new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].x, $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$y1$)), $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$y1$ != $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$y2$) {
            var $DvtChartRefObjUtils$$ = new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].x, $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$y2$);
            $DvtChartRefObjUtils$$.$_isY2$ = !0;
            $DvtSparkChartDefaults$$.push($DvtChartRefObjUtils$$);
          }
        }
      }
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartLineArea$$.$_coordsToAnimationParams$ = function $$DvtChartLineArea$$$$_coordsToAnimationParams$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if ($DvtSparkChartDefaults$$ && 0 < $DvtSparkChartDefaults$$.length) {
      if ($DvtSparkChartEventManager$$ && 0 < $DvtSparkChartEventManager$$.length) {
        $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.slice(0);
        $DvtSparkChartDefaults$$ = $DvtChartLineArea$$.$_coordsToGroups$($DvtSparkChartDefaults$$);
        for (var $DvtChartRefObjUtils$$ = $DvtChartLineArea$$.$_coordsToGroups$($DvtSparkChartEventManager$$), $DvtChartAxisUtils$$ = $DvtSparkChartEventManager$$.length, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.length - 1;0 <= $DvtChartPieLabelInfo$$;$DvtChartPieLabelInfo$$--) {
          $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$[$DvtChartPieLabelInfo$$], $DvtChartPieLabelUtils$$ = $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$), -1 == $DvtChartPieLabelUtils$$ ? (0 == $DvtChartAxisUtils$$ ? ($DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$[0].clone(), $DvtSparkChartEventManager$$[0] = $DvtSparkChartEventManager$$[0].clone(), $DvtChartLineArea$$.$_removeCoordJump$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$[0], 
          $DvtSparkChartAutomation$$)) : ($DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$[$DvtChartAxisUtils$$ - 1].clone(), $DvtSparkChartEventManager$$[$DvtChartAxisUtils$$ - 1] = $DvtSparkChartEventManager$$[$DvtChartAxisUtils$$ - 1].clone(), $DvtChartLineArea$$.$_removeCoordJump$($DvtSparkChartEventManager$$[$DvtChartAxisUtils$$ - 1], $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$)), $DvtChartPieLabelUtils$$.$groupIndex$ = -1, $DvtSparkChartEventManager$$.splice($DvtChartAxisUtils$$, 
          0, $DvtChartPieLabelUtils$$)) : $DvtChartAxisUtils$$ = $DvtChartPieLabelUtils$$;
        }
      } else {
        for ($DvtSparkChartEventManager$$ = [], $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtSparkChartDefaults$$.length;$DvtChartPieLabelInfo$$++) {
          $DvtSparkChartEventManager$$.push(new $DvtChartCoord$$($DvtSparkChartDefaults$$[$DvtChartPieLabelInfo$$].x, $DvtSparkChartAutomation$$, $DvtSparkChartAutomation$$));
        }
      }
    }
    $DvtSparkChartAutomation$$ = [];
    for ($DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtSparkChartEventManager$$.length;$DvtChartPieLabelInfo$$++) {
      $DvtSparkChartEventManager$$[$DvtChartPieLabelInfo$$].$filtered$ || (null == $DvtSparkChartEventManager$$[$DvtChartPieLabelInfo$$].x ? ($DvtSparkChartAutomation$$.push(Infinity), $DvtSparkChartAutomation$$.push(Infinity), $DvtSparkChartAutomation$$.push(Infinity)) : ($DvtSparkChartAutomation$$.push($DvtSparkChartEventManager$$[$DvtChartPieLabelInfo$$].x), $DvtSparkChartAutomation$$.push($DvtSparkChartEventManager$$[$DvtChartPieLabelInfo$$].$y1$), $DvtSparkChartAutomation$$.push($DvtSparkChartEventManager$$[$DvtChartPieLabelInfo$$].$y2$)), 
      $DvtSparkChartAutomation$$.push($DvtSparkChartEventManager$$[$DvtChartPieLabelInfo$$].$groupIndex$));
    }
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartLineArea$$.$_animationParamsToCoords$ = function $$DvtChartLineArea$$$$_animationParamsToCoords$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$ += 4) {
      Infinity == $dvt$$2$$[$DvtSparkChartDefaults$$] || isNaN($dvt$$2$$[$DvtSparkChartDefaults$$]) ? $DvtSparkChartEventManager$$.push(new $DvtChartCoord$$(null, null, null, $dvt$$2$$[$DvtSparkChartDefaults$$ + 3])) : $DvtSparkChartEventManager$$.push(new $DvtChartCoord$$($dvt$$2$$[$DvtSparkChartDefaults$$], $dvt$$2$$[$DvtSparkChartDefaults$$ + 1], $dvt$$2$$[$DvtSparkChartDefaults$$ + 2], $dvt$$2$$[$DvtSparkChartDefaults$$ + 3]));
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartLineArea$$.$_coordsToGroups$ = function $$DvtChartLineArea$$$$_coordsToGroups$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
      $dvt$$2$$[$DvtSparkChartDefaults$$].$filtered$ || $DvtSparkChartEventManager$$.push($dvt$$2$$[$DvtSparkChartDefaults$$].group);
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartLineArea$$.$_removeCoordJump$ = function $$DvtChartLineArea$$$$_removeCoordJump$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $dvt$$2$$.$isUpstep$($DvtSparkChartDefaults$$) ? $DvtSparkChartEventManager$$.$y1$ = $DvtSparkChartEventManager$$.$y2$ : $dvt$$2$$.$y2$ = $dvt$$2$$.$y1$;
  };
  $DvtChartLineArea$$.$_getCurvedPathCommands$ = function $$DvtChartLineArea$$$$_getCurvedPathCommands$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = [], $DvtChartAxisUtils$$ = [];
    $DvtChartRefObjUtils$$.push($DvtChartAxisUtils$$);
    for (var $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartPieLabelUtils$$ += 2) {
      null == $DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$] ? ($DvtChartAxisUtils$$ = [], $DvtChartRefObjUtils$$.push($DvtChartAxisUtils$$)) : $DvtChartAxisUtils$$.push($DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$], $DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$ + 1]);
    }
    $DvtSparkChartAutomation$$ == $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_CARDINAL_CLOSED$ && 1 < $DvtChartRefObjUtils$$.length && ($DvtSparkChartAutomation$$ = $DvtChartRefObjUtils$$.pop(), $DvtChartRefObjUtils$$[0] = $DvtSparkChartAutomation$$.concat($DvtChartRefObjUtils$$[0]), $DvtSparkChartAutomation$$ = $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_CARDINAL$);
    $DvtSparkChartEventManager$$ = "";
    for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartRefObjUtils$$.length;$DvtChartPieLabelUtils$$++) {
      $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$[$DvtChartPieLabelUtils$$], $DvtSparkChartEventManager$$ += $dvt$$2$$.$PathUtils$.$curveThroughPoints$($DvtChartAxisUtils$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtSparkChartDefaults$$ = !0;
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartLineArea$$.$_removeAreaEdge$ = function $$DvtChartLineArea$$$$_removeAreaEdge$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$[$DvtSparkChartEventManager$$].clone();
    $DvtSparkChartAutomation$$.$isUpstep$($DvtSparkChartDefaults$$) ? $DvtSparkChartAutomation$$.$y1$ = $DvtSparkChartAutomation$$.$y2$ : $DvtSparkChartAutomation$$.$y2$ = $DvtSparkChartAutomation$$.$y1$;
    $dvt$$2$$[$DvtSparkChartEventManager$$] = $DvtSparkChartAutomation$$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartLineMarker$$, $dvt$$2$$.$SimpleMarker$);
  $DvtChartLineMarker$$.$DEFAULT_STROKE$ = new $dvt$$2$$.$SolidStroke$("none");
  $DvtChartLineMarker$$.$SELECTED_FILL$ = new $dvt$$2$$.$SolidFill$("#FFFFFF");
  $DvtChartLineMarker$$.$SELECTED_STROKE$ = new $dvt$$2$$.$SolidStroke$("#5A5A5A", 1, 1.5);
  $DvtChartLineMarker$$.prototype.$setDataColor$ = function $$DvtChartLineMarker$$$$$setDataColor$$($DvtSparkChartEventManager$$) {
    this.$_dataColor$ = $DvtSparkChartEventManager$$;
    this.$_hoverStroke$ = new $dvt$$2$$.$SolidStroke$($DvtSparkChartEventManager$$, 1, 1.5);
  };
  $DvtChartLineMarker$$.prototype.$showHoverEffect$ = function $$DvtChartLineMarker$$$$$showHoverEffect$$() {
    this.$IsShowingHoverEffect$ = !0;
    this.$setStroke$(this.$_hoverStroke$);
  };
  $DvtChartLineMarker$$.prototype.$hideHoverEffect$ = function $$DvtChartLineMarker$$$$$hideHoverEffect$$() {
    this.$IsShowingHoverEffect$ = !1;
    this.$setStroke$(this.$isSelected$() ? $DvtChartLineMarker$$.$SELECTED_STROKE$ : $DvtChartLineMarker$$.$DEFAULT_STROKE$);
  };
  $DvtChartLineMarker$$.prototype.$setSelected$ = function $$DvtChartLineMarker$$$$$setSelected$$($dvt$$2$$) {
    this.$IsSelected$ != $dvt$$2$$ && (this.$IsSelected$ = $dvt$$2$$, this.$isSelected$() ? (this.$setFill$($DvtChartLineMarker$$.$SELECTED_FILL$), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : $DvtChartLineMarker$$.$SELECTED_STROKE$)) : (this.$setInvisibleFill$(), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : $DvtChartLineMarker$$.$DEFAULT_STROKE$)));
  };
  $DvtChartLineMarker$$.prototype.$UpdateSelectionEffect$ = function $$DvtChartLineMarker$$$$$UpdateSelectionEffect$$() {
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartOverview$$, $dvt$$2$$.$Overview$);
  $DvtChartOverview$$.prototype.$_renderChart$ = function $$DvtChartOverview$$$$$_renderChart$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    this.$_chartContainer$ = new $dvt$$2$$.$Container$(this.$getCtx$());
    this.$addChild$(this.$_chartContainer$);
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$JsonUtils$.$merge$({legend:{rendered:"off", size:null}, xAxis:{viewportMin:null, viewportMax:null, viewportStartGroup:null, viewportEndGroup:null, axisLine:{rendered:"off"}, size:null, maxSize:.5, title:null}, yAxis:{rendered:"off", size:null}, y2Axis:{rendered:"off", size:null}, splitDualY:"off", title:{text:null}, subtitle:{text:null}, footnote:{text:null}, titleSeparator:{rendered:"off"}, styleDefaults:{animationIndicators:"none"}, layout:{outerGapWidth:0, 
    outerGapHeight:0}, _isOverview:!0}, $DvtSparkChartEventManager$$);
    $DvtChartAxisUtils$$.$hasGroupAxis$(this.$_parentChart$) && ($DvtSparkChartEventManager$$.xAxis.tickLabel.rendered = "off");
    $DvtChartTypeUtils$$.$isStock$(this.$_parentChart$) && $DvtSparkChartEventManager$$.series && $DvtSparkChartEventManager$$.series[0] && ($DvtSparkChartEventManager$$.series = [$DvtSparkChartEventManager$$.series[0]], $DvtSparkChartEventManager$$.series[0].type = "lineWithArea");
    var $DvtChartRefObjUtils$$ = this.$_parentChart$.$getOptions$().overview.content;
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$JsonUtils$.$merge$($DvtChartRefObjUtils$$, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.zoomAndScroll = "off";
    this.$_chart$ || (this.$_chart$ = $dvt$$2$$.$Chart$.newInstance(this.$getCtx$()), this.$_chart$.setId(this.$_id$));
    this.$_chartContainer$.$addChild$(this.$_chart$);
    this.$_chart$.$render$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.Rect(this.$getCtx$(), 0, 0, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$.$setInvisibleFill$();
    this.$_chartContainer$.$addChild$($DvtSparkChartEventManager$$);
    this.$_chart$.$getEventManager$().$setKeyboardHandler$(null);
    return this.$_chart$.$_plotAreaSpace$.$h$;
  };
  $DvtChartOverview$$.prototype.$createBackground$ = function $$DvtChartOverview$$$$$createBackground$$() {
  };
  $DvtChartOverview$$.prototype.$render$ = function $$DvtChartOverview$$$$$render$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $dvt$$2$$.style = {overviewBackgroundColor:"rgba(0,0,0,0)", windowBackgroundColor:"rgba(0,0,0,0)", windowBorderTopColor:"#333333", windowBorderRightColor:"#333333", windowBorderBottomColor:"#333333", windowBorderLeftColor:"#333333", leftFilterPanelColor:"rgba(5,65,135,0.1)", rightFilterPanelColor:"rgba(5,65,135,0.1)", handleBackgroundImage:$dvt$$2$$.chart._resources.overviewGrippy, handleWidth:3, handleHeight:15, handleFillColor:"rgba(0,0,0,0)"};
    $dvt$$2$$.animationOnClick = "off";
    $DvtSparkChartDefaults$$ = this.$_renderChart$($dvt$$2$$.chart, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartOverview$$.$superclass$.$render$.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartOverview$$.prototype.$destroy$ = function $$DvtChartOverview$$$$$destroy$$() {
    $DvtChartOverview$$.$superclass$.$destroy$.call(this);
    this.$_chart$ = this.$_parentChart$ = null;
  };
  $DvtChartOverview$$.prototype.$isLeftAndRightFilterRendered$ = function $$DvtChartOverview$$$$$isLeftAndRightFilterRendered$$() {
    return !0;
  };
  $DvtChartOverview$$.prototype.$HandleKeyDown$ = function $$DvtChartOverview$$$$$HandleKeyDown$$() {
  };
  $DvtChartOverview$$.prototype.$HandleKeyUp$ = function $$DvtChartOverview$$$$$HandleKeyUp$$() {
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPolarBar$$, $DvtChartSelectableWedge$$);
  $DvtChartPolarBar$$.$_MIN_BAR_LENGTH_FOR_GAPS$ = 4;
  $DvtChartPolarBar$$.$_MAX_DATA_ITEM_GAP$ = 3;
  $DvtChartPolarBar$$.prototype.$getAnimationParams$ = function $$DvtChartPolarBar$$$$$getAnimationParams$$() {
    return [this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$];
  };
  $DvtChartPolarBar$$.prototype.$setAnimationParams$ = function $$DvtChartPolarBar$$$$$setAnimationParams$$($dvt$$2$$) {
    this.$_setBarCoords$($dvt$$2$$[0], $dvt$$2$$[1], $dvt$$2$$[2], $dvt$$2$$[3]);
  };
  $DvtChartPolarBar$$.prototype.$getPrimaryFill$ = function $$DvtChartPolarBar$$$$$getPrimaryFill$$() {
    return this.$getFill$();
  };
  $DvtChartPolarBar$$.prototype.$getDisplayAnimation$ = function $$DvtChartPolarBar$$$$$getDisplayAnimation$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$getAnimationParams$();
    this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, 0, 0]);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartPolarBar$$.prototype.$getDeleteAnimation$ = function $$DvtChartPolarBar$$$$$getDeleteAnimation$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 0);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartPolarBar$$.prototype.$getInsertAnimation$ = function $$DvtChartPolarBar$$$$$getInsertAnimation$$($DvtSparkChartEventManager$$) {
    this.$setAlpha$(0);
    var $DvtSparkChartDefaults$$ = this.$getAnimationParams$();
    this.$setAnimationParams$([this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$]);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 1);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartPolarBar$$.prototype.$_setBarCoords$ = function $$DvtChartPolarBar$$$$$_setBarCoords$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartAxisUtils$$ = Math.max($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$);
    this.$setWedgeParams$(this.$_availSpace$.x + this.$_availSpace$.$w$ / 2, this.$_availSpace$.y + this.$_availSpace$.$h$ / 2, $DvtChartAxisUtils$$, $DvtChartAxisUtils$$, 360 - $dvt$$2$$.Math.$radsToDegrees$(Math.max($DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$)) + 90, $dvt$$2$$.Math.$radsToDegrees$(Math.abs($DvtChartRefObjUtils$$ - $DvtSparkChartAutomation$$)), this.$_dataItemGaps$, Math.abs($DvtSparkChartDefaults$$ - $DvtSparkChartEventManager$$) >= $DvtChartPolarBar$$.$_MIN_BAR_LENGTH_FOR_GAPS$ && 
    this.$_axisCoord$ != $DvtSparkChartEventManager$$ ? Math.min($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$) + this.$_dataItemGaps$ : Math.min($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$));
    var $DvtChartAxisUtils$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, this.$_availSpace$), $DvtChartPieLabelUtils$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, this.$_availSpace$), $DvtChartPieLabelInfo$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, this.$_availSpace$), $DvtChartPieRenderUtils$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$, 
    $DvtChartRefObjUtils$$, this.$_availSpace$), $DvtChartDataChangePyramidSlice$$ = Math.min($DvtChartAxisUtils$$.x, $DvtChartPieLabelUtils$$.x, $DvtChartPieLabelInfo$$.x, $DvtChartPieRenderUtils$$.x), $DvtChartSeriesEffectUtils$$ = Math.min($DvtChartAxisUtils$$.y, $DvtChartPieLabelUtils$$.y, $DvtChartPieLabelInfo$$.y, $DvtChartPieRenderUtils$$.y);
    this.$_bbox$ = new $dvt$$2$$.$Rectangle$($DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$, Math.max($DvtChartAxisUtils$$.x, $DvtChartPieLabelUtils$$.x, $DvtChartPieLabelInfo$$.x, $DvtChartPieRenderUtils$$.x) - $DvtChartDataChangePyramidSlice$$, Math.max($DvtChartAxisUtils$$.y, $DvtChartPieLabelUtils$$.y, $DvtChartPieLabelInfo$$.y, $DvtChartPieRenderUtils$$.y) - $DvtChartSeriesEffectUtils$$);
    this.$_baselineCoord$ = $DvtSparkChartEventManager$$;
    this.$_endCoord$ = $DvtSparkChartDefaults$$;
    this.$_x1$ = $DvtSparkChartAutomation$$;
    this.$_x2$ = $DvtChartRefObjUtils$$;
  };
  $DvtChartPolarBar$$.prototype.$getBoundingBox$ = function $$DvtChartPolarBar$$$$$getBoundingBox$$() {
    return this.$_bbox$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartRangeMarker$$, $dvt$$2$$.$Path$);
  $DvtChartRangeMarker$$.prototype.$_drawPath$ = function $$DvtChartRangeMarker$$$$$_drawPath$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartAxisUtils$$ = Math.atan2($DvtChartRefObjUtils$$ - $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ - $DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = this.$_markerSize$ / 2, $DvtChartPieLabelInfo$$ = Math.PI / 8, $DvtChartAxisUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtSparkChartEventManager$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartAxisUtils$$ + $DvtChartPieLabelInfo$$), $DvtSparkChartDefaults$$ + $DvtChartPieLabelUtils$$ * Math.sin($DvtChartAxisUtils$$ + $DvtChartPieLabelInfo$$)) + 
    $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$, 2 * (Math.PI - $DvtChartPieLabelInfo$$), 1, $DvtSparkChartEventManager$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartAxisUtils$$ - $DvtChartPieLabelInfo$$), $DvtSparkChartDefaults$$ + $DvtChartPieLabelUtils$$ * Math.sin($DvtChartAxisUtils$$ - $DvtChartPieLabelInfo$$)) + $dvt$$2$$.$PathUtils$.lineTo($DvtSparkChartAutomation$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartAxisUtils$$ + $DvtChartPieLabelInfo$$), 
    $DvtChartRefObjUtils$$ - $DvtChartPieLabelUtils$$ * Math.sin($DvtChartAxisUtils$$ + $DvtChartPieLabelInfo$$)) + $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$, 2 * (Math.PI - $DvtChartPieLabelInfo$$), 1, $DvtSparkChartAutomation$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartAxisUtils$$ - $DvtChartPieLabelInfo$$), $DvtChartRefObjUtils$$ - $DvtChartPieLabelUtils$$ * Math.sin($DvtChartAxisUtils$$ - $DvtChartPieLabelInfo$$)) + $dvt$$2$$.$PathUtils$.closePath();
    this.$setCmds$($DvtChartAxisUtils$$);
    this.$_x1$ = $DvtSparkChartEventManager$$;
    this.$_y1$ = $DvtSparkChartDefaults$$;
    this.$_x2$ = $DvtSparkChartAutomation$$;
    this.$_y2$ = $DvtChartRefObjUtils$$;
  };
  $DvtChartRangeMarker$$.prototype.$setStyleProperties$ = function $$DvtChartRangeMarker$$$$$setStyleProperties$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    this.$_dataColor$ = $DvtSparkChartAutomation$$;
    $DvtSparkChartAutomation$$ = $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$($DvtSparkChartAutomation$$);
    this.$_isInvisible$ ? (this.$setInvisibleFill$(), this.$_hoverStroke$ = new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 1.5)) : (this.$setFill$($DvtSparkChartEventManager$$), this.$setStroke$($DvtSparkChartDefaults$$), this.$setHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartRefObjUtils$$, 1, 1), new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 3.5)), this.$setSelectedStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartRefObjUtils$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtChartAxisUtils$$, 
    1, 4.5)), this.$setSelectedHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartRefObjUtils$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 4.5)));
  };
  $DvtChartRangeMarker$$.prototype.$showHoverEffect$ = function $$DvtChartRangeMarker$$$$$showHoverEffect$$() {
    this.$_isInvisible$ ? (this.$IsShowingHoverEffect$ = !0, this.$setStroke$(this.$_hoverStroke$)) : $DvtChartRangeMarker$$.$superclass$.$showHoverEffect$.call(this);
  };
  $DvtChartRangeMarker$$.prototype.$hideHoverEffect$ = function $$DvtChartRangeMarker$$$$$hideHoverEffect$$() {
    this.$_isInvisible$ ? (this.$IsShowingHoverEffect$ = !1, this.$setStroke$(this.$isSelected$() ? $DvtChartLineMarker$$.$SELECTED_STROKE$ : $DvtChartLineMarker$$.$DEFAULT_STROKE$)) : $DvtChartRangeMarker$$.$superclass$.$hideHoverEffect$.call(this);
  };
  $DvtChartRangeMarker$$.prototype.$setSelected$ = function $$DvtChartRangeMarker$$$$$setSelected$$($dvt$$2$$) {
    this.$_isInvisible$ ? this.$IsSelected$ != $dvt$$2$$ && (this.$IsSelected$ = $dvt$$2$$, this.$isSelected$() ? (this.$setFill$($DvtChartLineMarker$$.$SELECTED_FILL$), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : $DvtChartLineMarker$$.$SELECTED_STROKE$)) : (this.$setInvisibleFill$(), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : $DvtChartLineMarker$$.$DEFAULT_STROKE$))) : $DvtChartRangeMarker$$.$superclass$.$setSelected$.call(this, $dvt$$2$$);
  };
  $DvtChartRangeMarker$$.prototype.$UpdateSelectionEffect$ = function $$DvtChartRangeMarker$$$$$UpdateSelectionEffect$$() {
    this.$_isInvisible$ || $DvtChartRangeMarker$$.$superclass$.$UpdateSelectionEffect$.call(this);
  };
  $DvtChartRangeMarker$$.prototype.$getAnimationParams$ = function $$DvtChartRangeMarker$$$$$getAnimationParams$$() {
    return [this.$_x1$, this.$_y1$, this.$_x2$, this.$_y2$];
  };
  $DvtChartRangeMarker$$.prototype.$setAnimationParams$ = function $$DvtChartRangeMarker$$$$$setAnimationParams$$($dvt$$2$$) {
    this.$_drawPath$($dvt$$2$$[0], $dvt$$2$$[1], $dvt$$2$$[2], $dvt$$2$$[3]);
  };
  $DvtChartRangeMarker$$.prototype.$getBoundingBox$ = function $$DvtChartRangeMarker$$$$$getBoundingBox$$() {
    return this.$getBoundingBox1$().$getUnion$(this.$getBoundingBox2$());
  };
  $DvtChartRangeMarker$$.prototype.$getBoundingBox1$ = function $$DvtChartRangeMarker$$$$$getBoundingBox1$$() {
    return new $dvt$$2$$.$Rectangle$(this.$_x1$ - this.$_markerSize$ / 2, this.$_y1$ - this.$_markerSize$ / 2, this.$_markerSize$, this.$_markerSize$);
  };
  $DvtChartRangeMarker$$.prototype.$getBoundingBox2$ = function $$DvtChartRangeMarker$$$$$getBoundingBox2$$() {
    return new $dvt$$2$$.$Rectangle$(this.$_x2$ - this.$_markerSize$ / 2, this.$_y2$ - this.$_markerSize$ / 2, this.$_markerSize$, this.$_markerSize$);
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataCursor$$, $dvt$$2$$.$Container$);
  $DvtChartDataCursor$$.$BEHAVIOR_SNAP$ = "SNAP";
  $DvtChartDataCursor$$.$BEHAVIOR_SMOOTH$ = "SMOOTH";
  $DvtChartDataCursor$$.$BEHAVIOR_AUTO$ = "AUTO";
  $DvtChartDataCursor$$.$TOOLTIP_ID$ = "_dvtDataCursor";
  $DvtChartDataCursor$$.prototype.Init = function $$DvtChartDataCursor$$$$Init$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtChartDataCursor$$.$superclass$.Init.call(this, $DvtSparkChartEventManager$$);
    this.$_bHoriz$ = $DvtSparkChartAutomation$$;
    this.$_options$ = $DvtSparkChartDefaults$$;
    this.$setMouseEnabled$(!1);
    this.$setVisible$(!1);
    $DvtSparkChartEventManager$$ = $DvtSparkChartDefaults$$.lineWidth;
    $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.lineColor;
    var $DvtChartRefObjUtils$$ = $dvt$$2$$.$Stroke$.$convertTypeString$($DvtSparkChartDefaults$$.lineStyle), $DvtChartAxisUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, $DvtSparkChartEventManager$$);
    $DvtChartAxisUtils$$.$setStyle$($DvtChartRefObjUtils$$);
    this.$_cursorLine$ = new $dvt$$2$$.$Line$(this.$getCtx$(), 0, 0, 0, 0, "dcLine");
    this.$_cursorLine$.$setStroke$($DvtChartAxisUtils$$);
    this.$addChild$(this.$_cursorLine$);
    "off" != $DvtSparkChartDefaults$$.markerDisplayed && (this.$_marker$ = new $dvt$$2$$.$Container$(this.$_context$), this.$_marker$.$setMouseEnabled$(!1), this.$addChild$(this.$_marker$), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.markerSize, $DvtChartRefObjUtils$$ = new $dvt$$2$$.$SimpleMarker$(this.$_context$, $dvt$$2$$.$SimpleMarker$.$CIRCLE$, null, 0, 0, $DvtSparkChartDefaults$$ + 4 * $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ + 4 * $DvtSparkChartEventManager$$), $DvtChartRefObjUtils$$.$setSolidFill$($DvtSparkChartAutomation$$), 
    this.$_marker$.$addChild$($DvtChartRefObjUtils$$), $DvtSparkChartEventManager$$ = new $dvt$$2$$.$SimpleMarker$(this.$_context$, $dvt$$2$$.$SimpleMarker$.$CIRCLE$, null, 0, 0, $DvtSparkChartDefaults$$ + 2 * $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ + 2 * $DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$.$setSolidFill$("white"), this.$_marker$.$addChild$($DvtSparkChartEventManager$$), this.$_markerInnerCircle$ = new $dvt$$2$$.$SimpleMarker$(this.$_context$, $dvt$$2$$.$SimpleMarker$.$CIRCLE$, 
    null, 0, 0, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$), this.$_marker$.$addChild$(this.$_markerInnerCircle$));
  };
  $DvtChartDataCursor$$.prototype.$render$ = function $$DvtChartDataCursor$$$$$render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieLabelInfo$$ = this.$isHorizontal$(), $DvtChartPieRenderUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtChartDataChangePyramidSlice$$;
    if (null != $DvtChartAxisUtils$$ && "" != $DvtChartAxisUtils$$) {
      var $DvtChartSeriesEffectUtils$$ = this.$getCtx$().$getStageAbsolutePosition$(), $DvtChartRangeMarker$$ = this.$getCtx$().$getTooltipManager$($DvtChartDataCursor$$.$TOOLTIP_ID$);
      $DvtChartRangeMarker$$.$showDatatip$($DvtSparkChartDefaults$$ + $DvtChartSeriesEffectUtils$$.x, $DvtSparkChartAutomation$$ + $DvtChartSeriesEffectUtils$$.y, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, !1);
      $DvtChartDataChangePyramidSlice$$ = $DvtChartRangeMarker$$.$getTooltipBounds$();
      $DvtChartAxisUtils$$ = this.$_options$.markerSize + 4 * this.$_options$.lineWidth;
      var $DvtChartStyleUtils$$, $DvtChartPolarBar$$;
      $DvtChartPieLabelInfo$$ ? ($DvtChartStyleUtils$$ = $DvtChartPieRenderUtils$$ ? $DvtSparkChartEventManager$$.x - .75 * $DvtChartDataChangePyramidSlice$$.$w$ : $DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$ - $DvtChartDataChangePyramidSlice$$.$w$ / 4, $DvtChartPolarBar$$ = $DvtChartRefObjUtils$$ - $DvtChartDataChangePyramidSlice$$.$h$ / 2, !$DvtChartPieRenderUtils$$ && $DvtChartStyleUtils$$ - $DvtSparkChartDefaults$$ < $DvtChartAxisUtils$$ ? $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$ + 
      $DvtChartAxisUtils$$ : $DvtChartPieRenderUtils$$ && $DvtSparkChartDefaults$$ - ($DvtChartStyleUtils$$ + $DvtChartDataChangePyramidSlice$$.$w$) < $DvtChartAxisUtils$$ && ($DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$ - $DvtChartAxisUtils$$ - $DvtChartDataChangePyramidSlice$$.$w$)) : ($DvtChartStyleUtils$$ = $DvtChartRefObjUtils$$ - $DvtChartDataChangePyramidSlice$$.$w$ / 2, $DvtChartPolarBar$$ = $DvtSparkChartEventManager$$.y - .75 * $DvtChartDataChangePyramidSlice$$.$h$, $DvtSparkChartAutomation$$ - 
      ($DvtChartPolarBar$$ + $DvtChartDataChangePyramidSlice$$.$h$) < $DvtChartAxisUtils$$ && ($DvtChartPolarBar$$ = $DvtSparkChartAutomation$$ - $DvtChartAxisUtils$$ - $DvtChartDataChangePyramidSlice$$.$h$));
      $DvtChartRangeMarker$$.$positionTip$($DvtChartStyleUtils$$ + $DvtChartSeriesEffectUtils$$.x, $DvtChartPolarBar$$ + $DvtChartSeriesEffectUtils$$.y);
      $DvtChartDataChangePyramidSlice$$ = $DvtChartRangeMarker$$.$getTooltipBounds$();
      $DvtChartDataChangePyramidSlice$$.x -= $DvtChartSeriesEffectUtils$$.x;
      $DvtChartDataChangePyramidSlice$$.y -= $DvtChartSeriesEffectUtils$$.y;
    }
    $DvtChartPieLabelInfo$$ ? (this.$_cursorLine$.$setTranslateY$($DvtChartRefObjUtils$$), $DvtChartPieRenderUtils$$ ? (this.$_cursorLine$.$setX1$($DvtChartDataChangePyramidSlice$$ ? $DvtChartDataChangePyramidSlice$$.x + $DvtChartDataChangePyramidSlice$$.$w$ - 1 : $DvtSparkChartEventManager$$.x), this.$_cursorLine$.$setX2$($DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$)) : (this.$_cursorLine$.$setX1$($DvtSparkChartEventManager$$.x), this.$_cursorLine$.$setX2$($DvtChartDataChangePyramidSlice$$ ? 
    $DvtChartDataChangePyramidSlice$$.x + 1 : $DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$))) : (this.$_cursorLine$.$setTranslateX$($DvtChartRefObjUtils$$), this.$_cursorLine$.$setY1$($DvtChartDataChangePyramidSlice$$ ? $DvtChartDataChangePyramidSlice$$.y + $DvtChartDataChangePyramidSlice$$.$h$ - 1 : $DvtSparkChartEventManager$$.y), this.$_cursorLine$.$setY2$($DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$));
    this.$_marker$ && (this.$_marker$.$setTranslate$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtSparkChartEventManager$$ = this.$_options$.markerColor, this.$_markerInnerCircle$.$setSolidFill$($DvtSparkChartEventManager$$ ? $DvtSparkChartEventManager$$ : $DvtChartPieLabelUtils$$), $dvt$$2$$.$Agent$.$workaroundFirefoxRepaint$(this.$_marker$));
  };
  $DvtChartDataCursor$$.prototype.$isHorizontal$ = function $$DvtChartDataCursor$$$$$isHorizontal$$() {
    return this.$_bHoriz$;
  };
  $DvtChartDataCursor$$.prototype.$getBehavior$ = function $$DvtChartDataCursor$$$$$getBehavior$$() {
    return this.$_behavior$ ? this.$_behavior$ : $DvtChartDataCursor$$.$BEHAVIOR_AUTO$;
  };
  $DvtChartDataCursor$$.prototype.$setBehavior$ = function $$DvtChartDataCursor$$$$$setBehavior$$($dvt$$2$$) {
    this.$_behavior$ = $dvt$$2$$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartFunnelSlice$$, $dvt$$2$$.$Path$);
  $DvtChartFunnelSlice$$.prototype.Init = function $$DvtChartFunnelSlice$$$$Init$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangePyramidSlice$$) {
    $DvtChartFunnelSlice$$.$superclass$.Init.call(this, $DvtSparkChartEventManager$$.$getCtx$());
    this.$_chart$ = $DvtSparkChartEventManager$$;
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults;
    this.$_seriesIndex$ = $DvtSparkChartDefaults$$;
    this.$_numDrawnSeries$ = $DvtSparkChartAutomation$$;
    this.$_funnelWidth$ = $DvtChartRefObjUtils$$;
    this.$_funnelHeight$ = $DvtChartAxisUtils$$;
    this.$_startPercent$ = $DvtChartPieLabelUtils$$;
    this.$_valuePercent$ = $DvtChartPieLabelInfo$$;
    this.$_fillPercent$ = $DvtChartPieRenderUtils$$;
    this.$_3dRatio$ = "on" == $DvtSparkChartEventManager$$.threeDEffect ? 1 : 0;
    this.$_gap$ = $DvtChartDataChangePyramidSlice$$;
    $DvtSparkChartDefaults$$ = this.$_getPath$();
    this.$_dataColor$ = $DvtChartStyleUtils$$.$getColor$(this.$_chart$, this.$_seriesIndex$, 0);
    this.$_backgroundColor$ = $DvtSparkChartEventManager$$.backgroundColor ? $DvtSparkChartEventManager$$.backgroundColor : $DvtSparkChartEventManager$$.funnelBackgroundColor;
    this.$setCmds$($DvtSparkChartDefaults$$.slice);
    $DvtSparkChartDefaults$$.bar && (this.$_bar$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtSparkChartDefaults$$.bar), this.$addChild$(this.$_bar$), this.$_bar$.$setMouseEnabled$(!1));
    this.$_setColorProperties$($DvtSparkChartDefaults$$.sliceBounds);
    this.$_label$ = this.$_getSliceLabel$($DvtSparkChartDefaults$$.sliceBounds, $DvtSparkChartDefaults$$.barBounds);
    null != this.$_label$ && (this.$_label$.$setMouseEnabled$(!1), this.$addChild$(this.$_label$));
  };
  $DvtChartFunnelSlice$$.$_FUNNEL_3D_WIDTH_RATIO$ = .08;
  $DvtChartFunnelSlice$$.$_FUNNEL_ANGLE_2D$ = 36;
  $DvtChartFunnelSlice$$.$_FUNNEL_RATIO$ = 1 / 3;
  $DvtChartFunnelSlice$$.$_BORDER_COLOR$ = "#FFFFFF";
  $DvtChartFunnelSlice$$.$_MIN_CHARS_DATA_LABEL$ = 3;
  $DvtChartFunnelSlice$$.$_LINE_FRACTION$ = 2 / 3;
  $DvtChartFunnelSlice$$.$_AREA_FRACTION$ = .41;
  $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$ = .28;
  $DvtChartFunnelSlice$$.$_LINE_FRACTION_2$ = .4;
  $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$ = .8;
  $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$ = .7;
  $DvtChartFunnelSlice$$.prototype.$_getPath$ = function $$DvtChartFunnelSlice$$$$$_getPath$$() {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesCount$(this.$_chart$), $DvtSparkChartAutomation$$ = (this.$_numDrawnSeries$ + 1) * this.$_gap$, $DvtChartRefObjUtils$$ = $dvt$$2$$.Math.$degreesToRads$($DvtChartFunnelSlice$$.$_FUNNEL_ANGLE_2D$ - 2 * this.$_3dRatio$), $DvtChartAxisUtils$$ = this.$_funnelWidth$ - $DvtSparkChartDefaults$$ * this.$_gap$, $DvtSparkChartDefaults$$ = $DvtChartAxisUtils$$ / 
    Math.sin($dvt$$2$$.Math.$degreesToRads$($DvtChartFunnelSlice$$.$_FUNNEL_ANGLE_2D$)), $DvtChartPieLabelUtils$$ = this.$_funnelHeight$ / Math.sin($DvtChartRefObjUtils$$), $DvtChartPieLabelInfo$$ = this.$_3dRatio$ * this.$_funnelWidth$ / this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_FUNNEL_3D_WIDTH_RATIO$;
    1E-5 > $DvtChartPieLabelInfo$$ && ($DvtChartPieLabelInfo$$ = 0);
    var $DvtChartPieRenderUtils$$ = this.$_funnelHeight$, $DvtChartDataChangePyramidSlice$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_FUNNEL_RATIO$, $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$, $DvtChartStyleUtils$$, $DvtChartPolarBar$$, $DvtChartDataCursor$$, $DvtChartDataChange$$, $DvtChartPie$$, $DvtChartDataChangeMarker$$, $DvtChartDataChangeFunnelSlice$$;
    this.$_startPercent$ < $DvtChartFunnelSlice$$.$_AREA_FRACTION$ ? ($DvtChartSeriesEffectUtils$$ = this.$_startPercent$, $DvtChartRangeMarker$$ = $DvtChartPieRenderUtils$$, $DvtChartStyleUtils$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION$, $DvtChartDataCursor$$ = $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartPie$$ = $DvtChartAxisUtils$$ * $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$, $DvtChartDataChangeFunnelSlice$$ = $DvtChartAxisUtils$$ * (1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$)) : 
    this.$_startPercent$ < $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$ ? ($DvtChartSeriesEffectUtils$$ = this.$_startPercent$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartRangeMarker$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION$, $DvtChartStyleUtils$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION_2$, $DvtChartDataCursor$$ = $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartPie$$ = $DvtChartAxisUtils$$ * ($DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$ - 
    $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartAxisUtils$$ * (1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$)) : ($DvtChartSeriesEffectUtils$$ = this.$_startPercent$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$, $DvtChartRangeMarker$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION_2$, $DvtChartStyleUtils$$ = $DvtChartDataChangePyramidSlice$$, $DvtChartDataCursor$$ = 1 - $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$, $DvtChartPie$$ = $DvtChartAxisUtils$$ * 
    (1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$), $DvtChartDataChangeFunnelSlice$$ = 0);
    this.$_startPercent$ + this.$_valuePercent$ < $DvtChartFunnelSlice$$.$_AREA_FRACTION$ ? ($DvtChartPolarBar$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION$, $DvtChartDataChangePyramidSlice$$ = this.$_startPercent$ + this.$_valuePercent$, $DvtChartDataChange$$ = $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartDataChangeMarker$$ = $DvtChartAxisUtils$$ * $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$, $DvtChartAxisUtils$$ *= 1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$) : this.$_startPercent$ + 
    this.$_valuePercent$ < $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$ ? ($DvtChartPieRenderUtils$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION$, $DvtChartPolarBar$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION_2$, $DvtChartDataChangePyramidSlice$$ = this.$_startPercent$ + this.$_valuePercent$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartDataChange$$ = $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartDataChangeMarker$$ = 
    $DvtChartAxisUtils$$ * ($DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$ - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$), $DvtChartAxisUtils$$ *= 1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$) : ($DvtChartPieRenderUtils$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION_2$, $DvtChartPolarBar$$ = $DvtChartDataChangePyramidSlice$$, $DvtChartDataChangePyramidSlice$$ = this.$_startPercent$ + this.$_valuePercent$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$, $DvtChartDataChange$$ = 1 - $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$, 
    $DvtChartDataChangeMarker$$ = $DvtChartAxisUtils$$ * (1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$), $DvtChartAxisUtils$$ = 0);
    $DvtChartSeriesEffectUtils$$ = .98 * Math.asin(((Math.sqrt(($DvtChartDataCursor$$ - $DvtChartSeriesEffectUtils$$) / $DvtChartDataCursor$$ * $DvtChartRangeMarker$$ * $DvtChartRangeMarker$$ + $DvtChartSeriesEffectUtils$$ / $DvtChartDataCursor$$ * $DvtChartStyleUtils$$ * $DvtChartStyleUtils$$) - $DvtChartStyleUtils$$) * $DvtChartPie$$ / ($DvtChartRangeMarker$$ - $DvtChartStyleUtils$$) + $DvtChartDataChangeFunnelSlice$$) / $DvtSparkChartDefaults$$);
    $DvtChartRangeMarker$$ = .98 * Math.asin(((Math.sqrt(($DvtChartDataChange$$ - $DvtChartDataChangePyramidSlice$$) / $DvtChartDataChange$$ * $DvtChartPieRenderUtils$$ * $DvtChartPieRenderUtils$$ + $DvtChartDataChangePyramidSlice$$ / $DvtChartDataChange$$ * $DvtChartPolarBar$$ * $DvtChartPolarBar$$) - $DvtChartPolarBar$$) * $DvtChartDataChangeMarker$$ / ($DvtChartPieRenderUtils$$ - $DvtChartPolarBar$$) + $DvtChartAxisUtils$$) / $DvtSparkChartDefaults$$);
    $DvtChartPieRenderUtils$$ = (1 + $DvtChartFunnelSlice$$.$_FUNNEL_RATIO$) / 2 * this.$_funnelHeight$ + $DvtChartPieLabelUtils$$;
    $DvtChartStyleUtils$$ = (1 - $DvtChartFunnelSlice$$.$_FUNNEL_RATIO$) / 2 * this.$_funnelHeight$ - $DvtChartPieLabelUtils$$;
    $DvtSparkChartEventManager$$ ? ($DvtSparkChartAutomation$$ = [$DvtSparkChartDefaults$$ * Math.sin($DvtChartSeriesEffectUtils$$) + $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartSeriesEffectUtils$$), $DvtSparkChartDefaults$$ * Math.sin($DvtChartRangeMarker$$) + $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartRangeMarker$$), $DvtSparkChartDefaults$$ * Math.sin($DvtChartRangeMarker$$) + $DvtSparkChartAutomation$$, 
    $DvtChartStyleUtils$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartRangeMarker$$), $DvtSparkChartDefaults$$ * Math.sin($DvtChartSeriesEffectUtils$$) + $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartSeriesEffectUtils$$)], $DvtChartSeriesEffectUtils$$ = 0, $DvtChartRangeMarker$$ = 1) : ($DvtSparkChartAutomation$$ = [this.$_funnelWidth$ - $DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$ * Math.sin($DvtChartSeriesEffectUtils$$), $DvtChartPieRenderUtils$$ - 
    $DvtChartPieLabelUtils$$ * Math.cos($DvtChartSeriesEffectUtils$$), this.$_funnelWidth$ - $DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$ * Math.sin($DvtChartRangeMarker$$), $DvtChartPieRenderUtils$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartRangeMarker$$), this.$_funnelWidth$ - $DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$ * Math.sin($DvtChartRangeMarker$$), $DvtChartStyleUtils$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartRangeMarker$$), this.$_funnelWidth$ - $DvtSparkChartAutomation$$ - 
    $DvtSparkChartDefaults$$ * Math.sin($DvtChartSeriesEffectUtils$$), $DvtChartStyleUtils$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartSeriesEffectUtils$$)], $DvtChartSeriesEffectUtils$$ = 1, $DvtChartRangeMarker$$ = 0);
    $DvtChartPieRenderUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[1]);
    $DvtChartStyleUtils$$ = null;
    $DvtChartPieRenderUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelInfo$$ * ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, Math.PI, $DvtChartRangeMarker$$, $DvtSparkChartAutomation$$[6], $DvtSparkChartAutomation$$[7]);
    $DvtChartPieRenderUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelInfo$$ * ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, Math.PI, $DvtChartRangeMarker$$, $DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[1]);
    $DvtChartPieRenderUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartRefObjUtils$$, $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$[2], $DvtSparkChartAutomation$$[3]);
    $DvtChartPieRenderUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelInfo$$ * ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2, ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2, Math.PI, $DvtChartRangeMarker$$, $DvtSparkChartAutomation$$[4], $DvtSparkChartAutomation$$[5]);
    $DvtChartPieRenderUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartRefObjUtils$$, $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$[6], $DvtSparkChartAutomation$$[7]);
    $DvtChartDataCursor$$ = new $dvt$$2$$.$Rectangle$(Math.min($DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[2]), $DvtSparkChartAutomation$$[5], Math.abs($DvtSparkChartAutomation$$[0] - $DvtSparkChartAutomation$$[2]), Math.abs($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]));
    if (null != this.$_fillPercent$) {
      var $DvtChartDataChangeRangeMarker$$ = Math.max(Math.min(this.$_fillPercent$, 1), 0), $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$ ? -$DvtChartDataChangeRangeMarker$$ * Math.PI : $DvtChartDataChangeRangeMarker$$ * Math.PI;
      $DvtChartStyleUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[1]);
      $DvtChartStyleUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartRefObjUtils$$, $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$[2], $DvtSparkChartAutomation$$[3]);
      $DvtChartStyleUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelInfo$$ * ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2, ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2, $DvtSparkChartEventManager$$, $DvtChartRangeMarker$$, $DvtSparkChartAutomation$$[2] + $DvtChartPieLabelInfo$$ * ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2 * Math.sin($DvtSparkChartEventManager$$), ($DvtSparkChartAutomation$$[5] + $DvtSparkChartAutomation$$[3]) / 
      2 + ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2 * Math.cos($DvtSparkChartEventManager$$));
      $DvtChartStyleUtils$$ = .95 < this.$_fillPercent$ ? $DvtChartStyleUtils$$ + $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartRefObjUtils$$, $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$[6], $DvtSparkChartAutomation$$[1] + $DvtChartDataChangeRangeMarker$$ * ($DvtSparkChartAutomation$$[7] - $DvtSparkChartAutomation$$[1])) : .05 > this.$_fillPercent$ ? $DvtChartStyleUtils$$ + $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, 
      $DvtChartRefObjUtils$$, $DvtChartRangeMarker$$, $DvtSparkChartAutomation$$[6], $DvtSparkChartAutomation$$[1] + $DvtChartDataChangeRangeMarker$$ * ($DvtSparkChartAutomation$$[7] - $DvtSparkChartAutomation$$[1])) : $DvtChartStyleUtils$$ + $dvt$$2$$.$PathUtils$.lineTo($DvtSparkChartAutomation$$[6] + $DvtChartPieLabelInfo$$ * ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2 * Math.sin($DvtSparkChartEventManager$$), ($DvtSparkChartAutomation$$[7] + $DvtSparkChartAutomation$$[1]) / 
      2 + ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2 * Math.cos($DvtSparkChartEventManager$$));
      $DvtChartStyleUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelInfo$$ * ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, $DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[1]);
      $DvtChartStyleUtils$$ += $dvt$$2$$.$PathUtils$.closePath();
      $DvtChartDataChangeRangeMarker$$ = new $dvt$$2$$.$Rectangle$(Math.min($DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[2]), $DvtSparkChartAutomation$$[5] + Math.abs($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) * (1 - $DvtChartDataChangeRangeMarker$$), Math.abs($DvtSparkChartAutomation$$[0] - $DvtSparkChartAutomation$$[2]), Math.abs($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) * $DvtChartDataChangeRangeMarker$$);
    }
    return {slice:$DvtChartPieRenderUtils$$, bar:$DvtChartStyleUtils$$, sliceBounds:$DvtChartDataCursor$$, barBounds:$DvtChartStyleUtils$$ ? $DvtChartDataChangeRangeMarker$$ : $DvtChartDataCursor$$};
  };
  $DvtChartFunnelSlice$$.prototype.$_getSliceLabel$ = function $$DvtChartFunnelSlice$$$$$_getSliceLabel$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, this.$_seriesIndex$, 0);
    $DvtSparkChartAutomation$$ || ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$));
    if ($DvtSparkChartAutomation$$ && "none" != $DvtChartStyleUtils$$.$getDataLabelPosition$(this.$_chart$, this.$_seriesIndex$, 0)) {
      var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$MultilineText$(this.$getCtx$(), $DvtSparkChartAutomation$$, 0, 0), $DvtChartRefObjUtils$$ = null != $DvtChartStyleUtils$$.$getPattern$(this.$_chart$, this.$_seriesIndex$, 0), $DvtChartAxisUtils$$ = [this.$_chart$.$getOptions$().styleDefaults.dataLabelStyle, new $dvt$$2$$.$CSSStyle$(this.$_chart$.$getOptions$().styleDefaults.sliceLabelStyle), new $dvt$$2$$.$CSSStyle$($DvtChartDataUtils$$.$getDataItem$(this.$_chart$, this.$_seriesIndex$, 0).labelStyle)], 
      $DvtChartAxisUtils$$ = $dvt$$2$$.$CSSStyle$.$mergeStyles$($DvtChartAxisUtils$$);
      $DvtSparkChartAutomation$$.$setCSSStyle$($DvtChartAxisUtils$$);
      if ($dvt$$2$$.$TextUtils$.$fitText$($DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$.$h$ - this.$_3dRatio$ * (.8 - this.$_valuePercent$) * 50, $DvtSparkChartEventManager$$.$w$, this, $DvtChartFunnelSlice$$.$_MIN_CHARS_DATA_LABEL$)) {
        var $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.$measureDimensions$(), $DvtChartPieLabelInfo$$ = this.$_getLabelPosition$($DvtSparkChartEventManager$$);
        if ($DvtChartRefObjUtils$$) {
          var $DvtChartPieRenderUtils$$ = .15 * $DvtChartPieLabelUtils$$.$h$, $DvtChartDataChangePyramidSlice$$ = $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? .5 : -.5, $DvtChartPieRenderUtils$$ = $dvt$$2$$.$PathUtils$.$roundedRectangle$($DvtChartPieLabelUtils$$.x - $DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$.y, $DvtChartPieLabelUtils$$.$w$ + 2 * $DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$.$h$, 2, 2, 2, 2), $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$Path$(this.$getCtx$(), 
          $DvtChartPieRenderUtils$$);
          $DvtChartPieRenderUtils$$.$setSolidFill$("#FFFFFF", .9);
          $DvtChartPieLabelInfo$$.translate($DvtChartDataChangePyramidSlice$$ * $DvtChartPieLabelUtils$$.$h$, -$DvtChartDataChangePyramidSlice$$ * $DvtChartPieLabelUtils$$.$w$);
          $DvtChartPieRenderUtils$$.$setMatrix$($DvtChartPieLabelInfo$$);
          this.$addChild$($DvtChartPieRenderUtils$$);
        }
        $DvtChartRefObjUtils$$ = $DvtChartRefObjUtils$$ ? "#000000" : $DvtSparkChartDefaults$$.$containsPoint$($DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y + ($DvtSparkChartEventManager$$.$h$ - $DvtChartPieLabelUtils$$.$w$) / 2) ? $dvt$$2$$.$ColorUtils$.$getContrastingTextColor$(this.$_dataColor$) : $dvt$$2$$.$ColorUtils$.$getContrastingTextColor$(this.$_backgroundColor$);
        $DvtChartAxisUtils$$.$getStyle$("color") && !$dvt$$2$$.$Agent$.$isHighContrast$() || $DvtSparkChartAutomation$$.$setCSSStyle$($DvtChartAxisUtils$$.$setStyle$("color", $DvtChartRefObjUtils$$));
        $DvtSparkChartAutomation$$.$setMatrix$(this.$_getLabelPosition$($DvtSparkChartEventManager$$));
        $DvtSparkChartAutomation$$.$alignCenter$();
        $DvtSparkChartAutomation$$.$alignMiddle$();
        return $DvtSparkChartAutomation$$;
      }
    }
  };
  $DvtChartFunnelSlice$$.prototype.$_getLabelPosition$ = function $$DvtChartFunnelSlice$$$$$_getLabelPosition$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$h$ * this.$_funnelWidth$ / this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_FUNNEL_3D_WIDTH_RATIO$ / 2 * this.$_3dRatio$, $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Matrix$;
    $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? ($DvtSparkChartAutomation$$.rotate(Math.PI / 2), $DvtSparkChartAutomation$$.translate($DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$ / 2 - $DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$ / 2)) : ($DvtSparkChartAutomation$$.rotate(3 * Math.PI / 2), $DvtSparkChartAutomation$$.translate($DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$ / 2 + $DvtSparkChartDefaults$$, 
    $DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$ / 2));
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartFunnelSlice$$.prototype.$_setColorProperties$ = function $$DvtChartFunnelSlice$$$$$_setColorProperties$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartSeriesEffectUtils$$.$getFunnelPyramidSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_dataColor$, $DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, this.$_seriesIndex$, 0);
    null == $DvtSparkChartAutomation$$ && 0 < this.$_3dRatio$ && ($DvtSparkChartAutomation$$ = $DvtChartFunnelSlice$$.$_BORDER_COLOR$);
    var $DvtChartRefObjUtils$$ = $DvtChartStyleUtils$$.$getBorderWidth$(this.$_chart$, this.$_seriesIndex$, 0), $DvtChartAxisUtils$$ = $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$(this.$_dataColor$);
    $DvtSparkChartEventManager$$ = $DvtChartSeriesEffectUtils$$.$getFunnelPyramidSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_backgroundColor$, $DvtSparkChartEventManager$$, !0);
    this.$_bar$ ? (this.$setFill$($DvtSparkChartEventManager$$), this.$_bar$.$setFill$($DvtSparkChartDefaults$$), this.$_bar$.$setStyle$($DvtChartStyleUtils$$.$getStyle$(this.$_chart$, this.$_seriesIndex$, 0)), this.$_bar$.$setClassName$($DvtChartStyleUtils$$.$getClassName$(this.$_chart$, this.$_seriesIndex$, 0))) : (this.$setFill$($DvtSparkChartDefaults$$), this.$setStyle$($DvtChartStyleUtils$$.$getStyle$(this.$_chart$, this.$_seriesIndex$, 0)), this.$setClassName$($DvtChartStyleUtils$$.$getClassName$(this.$_chart$, 
    this.$_seriesIndex$, 0)));
    $DvtSparkChartAutomation$$ && this.$setSolidStroke$($DvtSparkChartAutomation$$, null, $DvtChartRefObjUtils$$);
    this.$OriginalStroke$ = this.$getStroke$();
    $DvtSparkChartDefaults$$ = null != this.$_bar$ ? this.$_bar$ : this;
    $DvtSparkChartDefaults$$.$setHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartAxisUtils$$, 1, 2));
    this.$_chart$.$isSelectionSupported$() && ($DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$(this.$_chart$), $DvtChartRefObjUtils$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) ? $DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) : this.$_dataColor$, $DvtSparkChartDefaults$$.$setSelectedStroke$(new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtChartRefObjUtils$$, 1, 4.5)), $DvtSparkChartDefaults$$.$setSelectedHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 
    1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtChartAxisUtils$$, 1, 4.5)), this.setCursor("pointer"));
  };
  $DvtChartFunnelSlice$$.prototype.$getAnimationParams$ = function $$DvtChartFunnelSlice$$$$$getAnimationParams$$() {
    return [this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$getAlpha$(), this.$_3dRatio$];
  };
  $DvtChartFunnelSlice$$.prototype.$setAnimationParams$ = function $$DvtChartFunnelSlice$$$$$setAnimationParams$$($dvt$$2$$) {
    this.$_startPercent$ = $dvt$$2$$[0];
    this.$_valuePercent$ = $dvt$$2$$[1];
    this.$_fillPercent$ = null != this.$_fillPercent$ ? $dvt$$2$$[2] : null;
    this.$setAlpha$($dvt$$2$$[3]);
    this.$_3dRatio$ = $dvt$$2$$[4];
    $dvt$$2$$ = this.$_getPath$();
    this.$setCmds$($dvt$$2$$.slice);
    $dvt$$2$$.bar && this.$_bar$ && this.$_bar$.$setCmds$($dvt$$2$$.bar);
    this.$_label$ && this.$_label$.$setMatrix$(this.$_getLabelPosition$($dvt$$2$$.sliceBounds));
  };
  $DvtChartFunnelSlice$$.prototype.$setSelected$ = function $$DvtChartFunnelSlice$$$$$setSelected$$($dvt$$2$$) {
    if (null != this.$_bar$) {
      if (this.$IsSelected$ == $dvt$$2$$) {
        return;
      }
      this.$IsSelected$ = $dvt$$2$$;
      this.$_bar$.$setSelected$($dvt$$2$$);
    } else {
      $DvtChartFunnelSlice$$.$superclass$.$setSelected$.call(this, $dvt$$2$$);
    }
    var $DvtSparkChartEventManager$$ = this.$getDimensions$(), $DvtSparkChartDefaults$$ = null != this.$_bar$ ? this.$_bar$ : this, $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$w$;
    $dvt$$2$$ ? ($DvtSparkChartDefaults$$.$setScaleX$(($DvtSparkChartAutomation$$ - 3) / $DvtSparkChartAutomation$$), $DvtSparkChartDefaults$$.$setTranslateX$(Math.ceil(1.5) + 3 / $DvtSparkChartAutomation$$ * $DvtSparkChartEventManager$$.x)) : ($DvtSparkChartDefaults$$.$setScaleX$(1), $DvtSparkChartDefaults$$.$setTranslateX$(0));
  };
  $DvtChartFunnelSlice$$.prototype.$showHoverEffect$ = function $$DvtChartFunnelSlice$$$$$showHoverEffect$$() {
    null != this.$_bar$ ? this.$_bar$.$showHoverEffect$() : $DvtChartFunnelSlice$$.$superclass$.$showHoverEffect$.call(this);
  };
  $DvtChartFunnelSlice$$.prototype.$hideHoverEffect$ = function $$DvtChartFunnelSlice$$$$$hideHoverEffect$$() {
    null != this.$_bar$ ? this.$_bar$.$hideHoverEffect$() : $DvtChartFunnelSlice$$.$superclass$.$hideHoverEffect$.call(this);
  };
  $DvtChartFunnelSlice$$.prototype.$copyShape$ = function $$DvtChartFunnelSlice$$$$$copyShape$$() {
    return new $DvtChartFunnelSlice$$(this.$_chart$, this.$_seriesIndex$, this.$_numDrawnSeries$, this.$_funnelWidth$, this.$_funnelHeight$, this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$_gap$);
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPyramidSlice$$, $dvt$$2$$.$Path$);
  $DvtChartPyramidSlice$$.prototype.Init = function $$DvtChartPyramidSlice$$$$Init$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$) {
    $DvtChartPyramidSlice$$.$superclass$.Init.call(this, $DvtSparkChartEventManager$$.$getCtx$());
    this.$_chart$ = $DvtSparkChartEventManager$$;
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults;
    this.$_seriesIndex$ = $DvtSparkChartDefaults$$;
    this.$_numDrawnSeries$ = $DvtSparkChartAutomation$$;
    this.$_pyramidWidth$ = $DvtChartRefObjUtils$$;
    this.$_pyramidHeight$ = $DvtChartAxisUtils$$;
    this.$_startPercent$ = $DvtChartPieLabelUtils$$;
    this.$_valuePercent$ = $DvtChartPieLabelInfo$$;
    this.$_3dRatio$ = "on" == $DvtSparkChartEventManager$$.threeDEffect ? 1 : 0;
    this.$_gap$ = $DvtChartPieRenderUtils$$;
    $DvtSparkChartDefaults$$ = this.$_getPath$();
    this.$_dataColor$ = $DvtChartStyleUtils$$.$getColor$(this.$_chart$, this.$_seriesIndex$, 0);
    0 < this.$_3dRatio$ ? (this.$setCmds$($DvtSparkChartDefaults$$.threeDPathTop), this.$_threeDPathSide$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtSparkChartDefaults$$.threeDPathSide), this.$_mainFace$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtSparkChartDefaults$$.slice), this.$addChild$(this.$_threeDPathSide$), this.$addChild$(this.$_mainFace$)) : this.$setCmds$($DvtSparkChartDefaults$$.slice);
    this.$_setColorProperties$($DvtSparkChartDefaults$$.sliceBounds);
    this.$_label$ = this.$_getSliceLabel$($DvtSparkChartDefaults$$.sliceBounds);
    null != this.$_label$ && (this.$_label$.$setMouseEnabled$(!1), this.$addChild$(this.$_label$));
  };
  $DvtChartPyramidSlice$$.$_BORDER_COLOR$ = "#FFFFFF";
  $DvtChartPyramidSlice$$.$_MIN_CHARS_DATA_LABEL$ = 3;
  $DvtChartPyramidSlice$$.$_TOP_SLICE_LABEL_OFFSET$ = .4;
  $DvtChartPyramidSlice$$.$_3D_WIDTH_FACTOR$ = .2;
  $DvtChartPyramidSlice$$.prototype.$_getPath$ = function $$DvtChartPyramidSlice$$$$$_getPath$$() {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesCount$(this.$_chart$), $DvtSparkChartAutomation$$ = ($DvtSparkChartDefaults$$ - this.$_numDrawnSeries$) * this.$_gap$, $DvtChartRefObjUtils$$ = this.$_3dRatio$ * $DvtChartPyramidSlice$$.$_3D_WIDTH_FACTOR$ * .98 * this.$_pyramidWidth$, $DvtChartAxisUtils$$ = Math.sqrt(Math.pow(this.$_pyramidHeight$ - ($DvtSparkChartDefaults$$ - 1) * this.$_gap$, 2) * 
    (1 - this.$_startPercent$)), $DvtChartPieLabelUtils$$ = 1 <= this.$_startPercent$ + this.$_valuePercent$ ? 0 : Math.sqrt(Math.pow(this.$_pyramidHeight$ - ($DvtSparkChartDefaults$$ - 1) * this.$_gap$, 2) * (1 - this.$_startPercent$ - this.$_valuePercent$)), $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$ / this.$_pyramidHeight$ * (1 - this.$_3dRatio$ * $DvtChartPyramidSlice$$.$_3D_WIDTH_FACTOR$) * this.$_pyramidWidth$ * .98, $DvtChartPieRenderUtils$$ = (0 == this.$_numDrawnSeries$ ? $DvtChartAxisUtils$$ : 
    $DvtChartAxisUtils$$ - this.$_gap$) / this.$_pyramidHeight$ * (1 - this.$_3dRatio$ * $DvtChartPyramidSlice$$.$_3D_WIDTH_FACTOR$) * this.$_pyramidWidth$ * .98, $DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$, $DvtChartStyleUtils$$;
    $DvtSparkChartEventManager$$ ? ($DvtChartSeriesEffectUtils$$ = [this.$_pyramidWidth$ - .5 * this.$_pyramidWidth$ + $DvtChartRefObjUtils$$ / 2 - $DvtChartPieLabelInfo$$ / 2, $DvtSparkChartAutomation$$ + $DvtChartPieLabelUtils$$], $DvtChartStyleUtils$$ = [this.$_pyramidWidth$ - .5 * this.$_pyramidWidth$ + $DvtChartRefObjUtils$$ / 2 - $DvtChartPieRenderUtils$$ / 2, $DvtSparkChartAutomation$$ + $DvtChartAxisUtils$$], $DvtChartRangeMarker$$ = [this.$_pyramidWidth$ - .5 * this.$_pyramidWidth$ + $DvtChartRefObjUtils$$ / 
    2 + $DvtChartPieRenderUtils$$ / 2, $DvtSparkChartAutomation$$ + $DvtChartAxisUtils$$], $DvtChartDataChangePyramidSlice$$ = [this.$_pyramidWidth$ - .5 * this.$_pyramidWidth$ + $DvtChartRefObjUtils$$ / 2 + $DvtChartPieLabelInfo$$ / 2, $DvtSparkChartAutomation$$ + $DvtChartPieLabelUtils$$]) : ($DvtChartDataChangePyramidSlice$$ = [.5 * this.$_pyramidWidth$ - $DvtChartRefObjUtils$$ / 2 - $DvtChartPieLabelInfo$$ / 2, $DvtSparkChartAutomation$$ + $DvtChartPieLabelUtils$$], $DvtChartRangeMarker$$ = [.5 * 
    this.$_pyramidWidth$ - $DvtChartRefObjUtils$$ / 2 - $DvtChartPieRenderUtils$$ / 2, $DvtSparkChartAutomation$$ + $DvtChartAxisUtils$$], $DvtChartStyleUtils$$ = [.5 * this.$_pyramidWidth$ - $DvtChartRefObjUtils$$ / 2 + $DvtChartPieRenderUtils$$ / 2, $DvtSparkChartAutomation$$ + $DvtChartAxisUtils$$], $DvtChartSeriesEffectUtils$$ = [.5 * this.$_pyramidWidth$ - $DvtChartRefObjUtils$$ / 2 + $DvtChartPieLabelInfo$$ / 2, $DvtSparkChartAutomation$$ + $DvtChartPieLabelUtils$$]);
    var $DvtChartPolarBar$$, $DvtChartFunnelSlice$$;
    "on" == this.$_chart$.$getOptions$().styleDefaults.threeDEffect && ($DvtSparkChartAutomation$$ = this.$_3dRatio$ * $DvtChartPyramidSlice$$.$_3D_WIDTH_FACTOR$ * $DvtChartPieRenderUtils$$ * Math.sqrt(2) / 2, $DvtChartPieLabelInfo$$ = this.$_3dRatio$ * $DvtChartPyramidSlice$$.$_3D_WIDTH_FACTOR$ * $DvtChartPieLabelInfo$$ * Math.sqrt(2) / 2, $DvtChartPolarBar$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartSeriesEffectUtils$$[0], $DvtChartSeriesEffectUtils$$[1]), $DvtChartPolarBar$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartSeriesEffectUtils$$[0] + 
    ($DvtSparkChartEventManager$$ ? -1 : 1) * Math.max($DvtChartPieLabelInfo$$, 1), $DvtChartSeriesEffectUtils$$[1] - Math.max($DvtChartPieLabelInfo$$, .5)), $DvtChartPolarBar$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartDataChangePyramidSlice$$[0] + ($DvtSparkChartEventManager$$ ? -1 : 1) * Math.max($DvtChartPieLabelInfo$$, 1), $DvtChartDataChangePyramidSlice$$[1] - Math.max($DvtChartPieLabelInfo$$, .5)), $DvtChartPolarBar$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartDataChangePyramidSlice$$[0], $DvtChartDataChangePyramidSlice$$[1]), 
    $DvtChartPolarBar$$ += $dvt$$2$$.$PathUtils$.closePath(), $DvtChartFunnelSlice$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartSeriesEffectUtils$$[0], $DvtChartSeriesEffectUtils$$[1]), $DvtChartFunnelSlice$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartSeriesEffectUtils$$[0] + ($DvtSparkChartEventManager$$ ? -1 : 1) * Math.max($DvtChartPieLabelInfo$$, 1), $DvtChartSeriesEffectUtils$$[1] - Math.max($DvtChartPieLabelInfo$$, .5)), $DvtChartFunnelSlice$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartStyleUtils$$[0] + 
    ($DvtSparkChartEventManager$$ ? -1 : 1) * $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$[1] - $DvtSparkChartAutomation$$), $DvtChartFunnelSlice$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartStyleUtils$$[0], $DvtChartStyleUtils$$[1]), $DvtChartFunnelSlice$$ += $dvt$$2$$.$PathUtils$.closePath());
    $DvtChartPieLabelInfo$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartSeriesEffectUtils$$[0], $DvtChartSeriesEffectUtils$$[1]);
    $DvtChartPieLabelInfo$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartStyleUtils$$[0], $DvtChartStyleUtils$$[1]);
    $DvtChartPieLabelInfo$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartRangeMarker$$[0], $DvtChartRangeMarker$$[1]);
    $DvtChartPieLabelInfo$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartDataChangePyramidSlice$$[0], $DvtChartDataChangePyramidSlice$$[1]);
    $DvtChartPieLabelInfo$$ += $dvt$$2$$.$PathUtils$.closePath();
    $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ == this.$_numDrawnSeries$ + 1;
    return {slice:$DvtChartPieLabelInfo$$, sliceBounds:new $dvt$$2$$.$Rectangle$($DvtSparkChartDefaults$$ ? $DvtChartRangeMarker$$[0] + ($DvtSparkChartEventManager$$ ? -1 : 1) * $DvtChartPieRenderUtils$$ / 4 : $DvtChartDataChangePyramidSlice$$[0], Math.min($DvtChartDataChangePyramidSlice$$[1], $DvtChartRangeMarker$$[1]) + ($DvtSparkChartDefaults$$ ? $DvtChartPyramidSlice$$.$_TOP_SLICE_LABEL_OFFSET$ * ($DvtChartAxisUtils$$ - $DvtChartPieLabelUtils$$) : 0), $DvtSparkChartDefaults$$ ? $DvtChartPieRenderUtils$$ / 
    2 : Math.abs($DvtChartSeriesEffectUtils$$[0] - $DvtChartDataChangePyramidSlice$$[0]), $DvtSparkChartDefaults$$ ? Math.abs($DvtChartDataChangePyramidSlice$$[1] - $DvtChartRangeMarker$$[1]) / 2 : Math.abs($DvtChartDataChangePyramidSlice$$[1] - $DvtChartRangeMarker$$[1])), threeDPathTop:$DvtChartPolarBar$$, threeDPathSide:$DvtChartFunnelSlice$$};
  };
  $DvtChartPyramidSlice$$.prototype.$_getSliceLabel$ = function $$DvtChartPyramidSlice$$$$$_getSliceLabel$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, this.$_seriesIndex$, 0);
    $DvtSparkChartDefaults$$ || ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$));
    if ($DvtSparkChartDefaults$$ && "none" != $DvtChartStyleUtils$$.$getDataLabelPosition$(this.$_chart$, this.$_seriesIndex$, 0)) {
      var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$MultilineText$(this.$getCtx$(), $DvtSparkChartDefaults$$, 0, 0), $DvtSparkChartAutomation$$ = null != $DvtChartStyleUtils$$.$getPattern$(this.$_chart$, this.$_seriesIndex$, 0), $DvtChartRefObjUtils$$ = [this.$_chart$.$getOptions$().styleDefaults.dataLabelStyle, new $dvt$$2$$.$CSSStyle$(this.$_chart$.$getOptions$().styleDefaults.sliceLabelStyle), new $dvt$$2$$.$CSSStyle$($DvtChartDataUtils$$.$getDataItem$(this.$_chart$, this.$_seriesIndex$, 0).labelStyle)], 
      $DvtChartRefObjUtils$$ = $dvt$$2$$.$CSSStyle$.$mergeStyles$($DvtChartRefObjUtils$$);
      $DvtSparkChartDefaults$$.$setCSSStyle$($DvtChartRefObjUtils$$);
      if ($dvt$$2$$.$TextUtils$.$fitText$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$.$w$, $DvtSparkChartEventManager$$.$h$, this, $DvtChartPyramidSlice$$.$_MIN_CHARS_DATA_LABEL$)) {
        var $DvtChartAxisUtils$$ = $DvtSparkChartDefaults$$.$measureDimensions$(), $DvtChartPieLabelUtils$$ = this.$_getLabelPosition$($DvtSparkChartEventManager$$);
        if ($DvtSparkChartAutomation$$) {
          var $DvtChartPieLabelInfo$$ = .15 * $DvtChartAxisUtils$$.$h$, $DvtChartPieLabelInfo$$ = $dvt$$2$$.$PathUtils$.$roundedRectangle$($DvtChartAxisUtils$$.x - $DvtChartPieLabelInfo$$, $DvtChartAxisUtils$$.y, $DvtChartAxisUtils$$.$w$ + 2 * $DvtChartPieLabelInfo$$, $DvtChartAxisUtils$$.$h$, 2, 2, 2, 2), $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtChartPieLabelInfo$$);
          $DvtChartPieLabelInfo$$.$setSolidFill$("#FFFFFF", .9);
          $DvtChartPieLabelUtils$$.translate(-.5 * $DvtChartAxisUtils$$.$w$, -.5 * $DvtChartAxisUtils$$.$h$);
          $DvtChartPieLabelInfo$$.$setMatrix$($DvtChartPieLabelUtils$$);
          this.$addChild$($DvtChartPieLabelInfo$$);
        }
        $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$ ? "#000000" : $DvtSparkChartEventManager$$.$containsPoint$($DvtSparkChartEventManager$$.x + ($DvtSparkChartEventManager$$.$w$ - $DvtChartAxisUtils$$.$w$) / 2, $DvtSparkChartEventManager$$.y) ? $dvt$$2$$.$ColorUtils$.$getContrastingTextColor$(this.$_dataColor$) : $dvt$$2$$.$ColorUtils$.$getContrastingTextColor$(null);
        $DvtChartRefObjUtils$$.$getStyle$("color") && !$dvt$$2$$.$Agent$.$isHighContrast$() || $DvtSparkChartDefaults$$.$setCSSStyle$($DvtChartRefObjUtils$$.$setStyle$("color", $DvtSparkChartAutomation$$));
        $DvtSparkChartDefaults$$.$setMatrix$(this.$_getLabelPosition$($DvtSparkChartEventManager$$));
        $DvtSparkChartDefaults$$.$alignCenter$();
        $DvtSparkChartDefaults$$.$alignMiddle$();
        return $DvtSparkChartDefaults$$;
      }
    }
  };
  $DvtChartPyramidSlice$$.prototype.$_getLabelPosition$ = function $$DvtChartPyramidSlice$$$$$_getLabelPosition$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Matrix$;
    $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? $DvtSparkChartDefaults$$.translate($DvtSparkChartEventManager$$.x - $DvtSparkChartEventManager$$.$w$ / 2, $DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$ / 2) : $DvtSparkChartDefaults$$.translate($DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$ / 2, $DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$ / 2);
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartPyramidSlice$$.prototype.$_setColorProperties$ = function $$DvtChartPyramidSlice$$$$$_setColorProperties$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartSeriesEffectUtils$$.$getFunnelPyramidSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_dataColor$, $DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, this.$_seriesIndex$, 0);
    null == $DvtSparkChartAutomation$$ && 0 < this.$_3dRatio$ && ($DvtSparkChartAutomation$$ = $DvtChartPyramidSlice$$.$_BORDER_COLOR$);
    var $DvtChartRefObjUtils$$ = $DvtChartStyleUtils$$.$getBorderWidth$(this.$_chart$, this.$_seriesIndex$, 0);
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$(this.$_dataColor$);
    if (0 < this.$_3dRatio$) {
      var $DvtChartAxisUtils$$ = !$DvtSparkChartDefaults$$.$getPattern$ && !$DvtSparkChartDefaults$$.$getAlphas$;
      this.$_mainFace$.$setFill$($DvtSparkChartDefaults$$);
      this.$_mainFace$.$setStyle$($DvtChartStyleUtils$$.$getStyle$(this.$_chart$, this.$_seriesIndex$, 0));
      this.$_mainFace$.$setClassName$($DvtChartStyleUtils$$.$getClassName$(this.$_chart$, this.$_seriesIndex$, 0));
      this.$_threeDPathSide$.$setFill$($DvtChartAxisUtils$$ ? new $dvt$$2$$.$SolidFill$($dvt$$2$$.$ColorUtils$.$getDarker$($DvtSparkChartDefaults$$.$getColor$(), .3)) : $DvtSparkChartDefaults$$);
      this.$_threeDPathSide$.$setStyle$($DvtChartStyleUtils$$.$getStyle$(this.$_chart$, this.$_seriesIndex$, 0));
      this.$_threeDPathSide$.$setClassName$($DvtChartStyleUtils$$.$getClassName$(this.$_chart$, this.$_seriesIndex$, 0));
      this.$setFill$($DvtChartAxisUtils$$ ? new $dvt$$2$$.$SolidFill$($dvt$$2$$.$ColorUtils$.$getDarker$($DvtSparkChartDefaults$$.$getColor$(), .3)) : $DvtSparkChartDefaults$$);
    } else {
      this.$setFill$($DvtSparkChartDefaults$$);
    }
    this.$setStyle$($DvtChartStyleUtils$$.$getStyle$(this.$_chart$, this.$_seriesIndex$, 0));
    this.$setClassName$($DvtChartStyleUtils$$.$getClassName$(this.$_chart$, this.$_seriesIndex$, 0));
    $DvtSparkChartAutomation$$ && (this.$setSolidStroke$($DvtSparkChartAutomation$$, null, $DvtChartRefObjUtils$$), 0 < this.$_3dRatio$ && (this.$_threeDPathSide$.$setSolidStroke$($DvtSparkChartAutomation$$, null, $DvtChartRefObjUtils$$), this.$_mainFace$.$setSolidStroke$($DvtSparkChartAutomation$$, null, $DvtChartRefObjUtils$$)));
    this.$OriginalStroke$ = this.$getStroke$();
    this.$setHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtSparkChartEventManager$$, 1, 2));
    0 < this.$_3dRatio$ && (this.$_threeDPathSide$.$setHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtSparkChartEventManager$$, 1, 2)), this.$_mainFace$.$setHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtSparkChartEventManager$$, 1, 2)));
    this.$_chart$.$isSelectionSupported$() && ($DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$(this.$_chart$), $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) ? $DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) : this.$_dataColor$, 0 < this.$_3dRatio$ ? (this.$_mainFace$.$setSelectedStroke$(new $dvt$$2$$.$SolidStroke$($DvtSparkChartDefaults$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 4.5)), this.$_mainFace$.$setSelectedHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtSparkChartDefaults$$, 
    1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtSparkChartEventManager$$, 1, 4.5)), this.$_mainFace$.setCursor("pointer"), this.$_threeDPathSide$.setCursor("pointer")) : (this.$setSelectedStroke$(new $dvt$$2$$.$SolidStroke$($DvtSparkChartDefaults$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 4.5)), this.$setSelectedHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtSparkChartDefaults$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtSparkChartEventManager$$, 1, 4.5))), this.setCursor("pointer"));
  };
  $DvtChartPyramidSlice$$.prototype.$getAnimationParams$ = function $$DvtChartPyramidSlice$$$$$getAnimationParams$$() {
    return [this.$_startPercent$, this.$_valuePercent$, this.$getAlpha$(), this.$_3dRatio$];
  };
  $DvtChartPyramidSlice$$.prototype.$setAnimationParams$ = function $$DvtChartPyramidSlice$$$$$setAnimationParams$$($dvt$$2$$) {
    this.$_startPercent$ = $dvt$$2$$[0];
    this.$_valuePercent$ = $dvt$$2$$[1];
    this.$setAlpha$($dvt$$2$$[2]);
    this.$_3dRatio$ = $dvt$$2$$[3];
    $dvt$$2$$ = this.$_getPath$();
    this.$_threeDPathSide$ && this.$_mainFace$ ? (this.$setCmds$($dvt$$2$$.threeDPathTop), this.$_threeDPathSide$.$setCmds$($dvt$$2$$.threeDPathSide), this.$_mainFace$.$setCmds$($dvt$$2$$.slice)) : this.$setCmds$($dvt$$2$$.slice);
    this.$_label$ && this.$_label$.$setMatrix$(this.$_getLabelPosition$($dvt$$2$$.sliceBounds));
  };
  $DvtChartPyramidSlice$$.prototype.$setSelected$ = function $$DvtChartPyramidSlice$$$$$setSelected$$($dvt$$2$$) {
    if (0 < this.$_3dRatio$) {
      if (this.$_mainFace$.$setSelected$($dvt$$2$$), $dvt$$2$$) {
        $dvt$$2$$ = this.$getDimensions$();
        var $DvtSparkChartEventManager$$ = $dvt$$2$$.$w$, $DvtSparkChartDefaults$$ = $dvt$$2$$.$h$, $DvtSparkChartAutomation$$ = ($DvtSparkChartDefaults$$ - 5) / $DvtSparkChartDefaults$$;
        this.$_mainFace$.$setScaleX$(($DvtSparkChartEventManager$$ - 3) / $DvtSparkChartEventManager$$);
        this.$_mainFace$.$setScaleY$($DvtSparkChartAutomation$$);
        this.$_mainFace$.$setTranslateX$(Math.ceil(1.5) + 3 / $DvtSparkChartEventManager$$ * $dvt$$2$$.x);
        this.$_mainFace$.$setTranslateY$(Math.ceil(2.5) + 5 / $DvtSparkChartDefaults$$ * $dvt$$2$$.y);
      } else {
        this.$_mainFace$.$setScaleX$(1), this.$_mainFace$.$setScaleY$(1), this.$_mainFace$.$setTranslateX$(0), this.$_mainFace$.$setTranslateY$(0);
      }
    } else {
      $DvtChartPyramidSlice$$.$superclass$.$setSelected$.call(this, $dvt$$2$$);
    }
  };
  $DvtChartPyramidSlice$$.prototype.$showHoverEffect$ = function $$DvtChartPyramidSlice$$$$$showHoverEffect$$() {
    $DvtChartPyramidSlice$$.$superclass$.$showHoverEffect$.call(this);
    0 < this.$_3dRatio$ && (this.$_threeDPathSide$.$showHoverEffect$(), this.$_mainFace$.$showHoverEffect$());
  };
  $DvtChartPyramidSlice$$.prototype.$hideHoverEffect$ = function $$DvtChartPyramidSlice$$$$$hideHoverEffect$$() {
    $DvtChartPyramidSlice$$.$superclass$.$hideHoverEffect$.call(this);
    0 < this.$_3dRatio$ && (this.$_threeDPathSide$.$hideHoverEffect$(), this.$_mainFace$.$hideHoverEffect$());
  };
  $DvtChartPyramidSlice$$.prototype.$copyShape$ = function $$DvtChartPyramidSlice$$$$$copyShape$$() {
    return new $DvtChartPyramidSlice$$(this.$_chart$, this.$_seriesIndex$, this.$_numDrawnSeries$, this.$_pyramidWidth$, this.$_pyramidHeight$, this.$_startPercent$, this.$_valuePercent$, this.$_gap$);
  };
  $DvtChartPyramidSlice$$.prototype.$getPrimaryFill$ = function $$DvtChartPyramidSlice$$$$$getPrimaryFill$$() {
    return this.$_mainFace$ ? this.$_mainFace$.$getFill$() : this.$getFill$();
  };
  $DvtChartPie$$.$_THREED_TILT$ = .59;
  $DvtChartPie$$.$_THREED_DEPTH$ = .1;
  $DvtChartPie$$.$_RADIUS$ = .45;
  $DvtChartPie$$.$_RADIUS_LABELS$ = .38;
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPie$$, $dvt$$2$$.$Container$);
  $DvtChartPie$$.prototype.Init = function $$DvtChartPie$$$$Init$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartPie$$.$superclass$.Init.call(this, $DvtSparkChartEventManager$$.$getCtx$());
    this.$chart$ = $DvtSparkChartEventManager$$;
    this.$_options$ = $DvtSparkChartEventManager$$.$getOptions$();
    this.$_frame$ = $DvtSparkChartDefaults$$.clone();
    $DvtSparkChartEventManager$$.$pieChart$ = this;
    for (var $DvtSparkChartAutomation$$ = this.$getLabelPosition$(), $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$), $DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtChartRefObjUtils$$;$DvtChartAxisUtils$$++) {
      var $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$, 0);
      !$DvtChartPieLabelUtils$$ || "center" != $DvtSparkChartAutomation$$ && "none" != $DvtSparkChartAutomation$$ || "outsideSlice" != $DvtChartPieLabelUtils$$.labelPosition || ($DvtSparkChartAutomation$$ = "outsideSlice");
    }
    this.$_center$ = new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.x + Math.floor($DvtSparkChartDefaults$$.$w$ / 2), $DvtSparkChartDefaults$$.y + Math.floor($DvtSparkChartDefaults$$.$h$ / 2));
    this.$_radiusY$ = this.$_radiusX$ = Math.floor(Math.min($DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$) * ("center" == $DvtSparkChartAutomation$$ || "none" == $DvtSparkChartAutomation$$ ? $DvtChartPie$$.$_RADIUS$ : $DvtChartPie$$.$_RADIUS_LABELS$));
    this.$_depth$ = 0;
    this.$_anchorOffset$ = 90;
    this.$is3D$() && (this.$_depth$ = $DvtSparkChartDefaults$$.$h$ * $DvtChartPie$$.$_THREED_DEPTH$, this.$_center$.y -= Math.floor(this.$_depth$ / 2), this.$_radiusY$ *= $DvtChartPie$$.$_THREED_TILT$);
    this.$_slices$ = this.$_createSlices$();
    this.$_shapesContainer$ = new $dvt$$2$$.$Container$(this.$getCtx$());
    this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0;
  };
  $DvtChartPie$$.prototype.$getOptions$ = function $$DvtChartPie$$$$$getOptions$$() {
    return this.$_options$;
  };
  $DvtChartPie$$.prototype.$highlight$ = function $$DvtChartPie$$$$$highlight$$($DvtSparkChartEventManager$$) {
    $dvt$$2$$.$CategoryRolloverHandler$.$highlight$($DvtSparkChartEventManager$$, this.$_slices$, "any" == this.$getOptions$().highlightMatch);
  };
  $DvtChartPie$$.prototype.$_createSlices$ = function $$DvtChartPie$$$$$_createSlices$$() {
    for (var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ = $DvtChartPieUtils$$.$getRenderedSeriesIndices$(this.$chart$), $DvtChartRefObjUtils$$ = $DvtChartPieUtils$$.$getOtherValue$(this.$chart$), $DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartAxisUtils$$++) {
      $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$[$DvtChartAxisUtils$$], $DvtChartStyleUtils$$.$isDataItemRendered$(this.$chart$, $DvtSparkChartDefaults$$) && ($DvtSparkChartDefaults$$ = new $DvtChartPieSlice$$(this, $DvtSparkChartDefaults$$), 0 >= $DvtSparkChartDefaults$$.getValue() || $DvtSparkChartEventManager$$.push($DvtSparkChartDefaults$$));
    }
    $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getHiddenCategories$(this.$chart$);
    $DvtSparkChartAutomation$$ = 0 <= $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtSparkChartAutomation$$, $DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$);
    0 < $DvtChartRefObjUtils$$ && !$DvtSparkChartAutomation$$ && ($DvtChartRefObjUtils$$ = new $DvtChartPieSlice$$(this), "ascending" == this.$chart$.$getOptions$().sorting ? $DvtSparkChartEventManager$$.unshift($DvtChartRefObjUtils$$) : $DvtSparkChartEventManager$$.push($DvtChartRefObjUtils$$));
    $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) && $DvtSparkChartEventManager$$.reverse();
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartPie$$.prototype.$setInitialSelection$ = function $$DvtChartPie$$$$$setInitialSelection$$() {
    var $dvt$$2$$ = this.$chart$.$getSelectionHandler$();
    if ($dvt$$2$$) {
      for (var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getInitialSelection$(this.$chart$), $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
        for (var $DvtChartRefObjUtils$$ = 0;$DvtChartRefObjUtils$$ < this.$_slices$.length;$DvtChartRefObjUtils$$++) {
          var $DvtChartAxisUtils$$ = this.$_slices$[$DvtChartRefObjUtils$$].getId();
          $DvtChartAxisUtils$$ && ($DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].id && $DvtChartAxisUtils$$.getId() == $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].id || $DvtChartAxisUtils$$.$getSeries$() == $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].series && $DvtChartAxisUtils$$.$getGroup$() == $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].group) && $DvtSparkChartDefaults$$.push($DvtChartAxisUtils$$);
        }
      }
      $DvtChartPieUtils$$.$isOtherSliceSelected$(this.$chart$, $DvtSparkChartEventManager$$) && ($DvtSparkChartEventManager$$ = $DvtChartPieUtils$$.$getOtherSliceId$(this.$chart$), $DvtSparkChartDefaults$$.push($DvtSparkChartEventManager$$));
      $dvt$$2$$.$processInitialSelections$($DvtSparkChartDefaults$$, this.$_slices$);
    }
  };
  $DvtChartPie$$.prototype.$render$ = function $$DvtChartPie$$$$$render$$() {
    var $DvtSparkChartEventManager$$;
    this.contains(this.$_shapesContainer$) || (this.$_shapesContainer$ || (this.$_shapesContainer$ = new $dvt$$2$$.$Container$(this.$getCtx$())), this.$addChild$(this.$_shapesContainer$), this.$is3D$() || this.$getSkin$() != $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ || ($DvtSparkChartEventManager$$ = new $dvt$$2$$.$Shadow$($dvt$$2$$.$ColorUtils$.$makeRGBA$(78, 87, 101, .45), 4, 7, 7, 54, 2, 3, !1, !1, !1)));
    $DvtChartPie$$.$_layoutSlices$(this.$_slices$, this.$_anchorOffset$);
    for (var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < this.$_slices$.length;$DvtSparkChartDefaults$$++) {
      this.$_slices$[$DvtSparkChartDefaults$$].$preRender$();
    }
    var $DvtSparkChartAutomation$$ = $DvtChartPie$$.$_orderSlicesForRendering$(this.$_slices$);
    this.$_duringDisplayAnim$ || ($DvtChartPieLabelUtils$$.$createPieCenter$(this), $DvtChartPieLabelUtils$$.$layoutLabelsAndFeelers$(this));
    for ($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartAutomation$$.length;$DvtSparkChartDefaults$$++) {
      $DvtSparkChartAutomation$$[$DvtSparkChartDefaults$$].$render$(this.$_duringDisplayAnim$);
    }
    $dvt$$2$$.$Agent$.$isPlatformWebkit$() || $DvtSparkChartEventManager$$ && this.$_shapesContainer$.$addDrawEffect$($DvtSparkChartEventManager$$);
    this.$setInitialSelection$();
    this.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$(this.$chart$));
  };
  $DvtChartPie$$.prototype.$getTotalValue$ = function $$DvtChartPie$$$$$getTotalValue$$() {
    for (var $dvt$$2$$ = 0, $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < this.$_slices$.length;$DvtSparkChartEventManager$$++) {
      var $DvtSparkChartDefaults$$ = this.$_slices$[$DvtSparkChartEventManager$$].getValue();
      0 <= $DvtSparkChartDefaults$$ && ($dvt$$2$$ += $DvtSparkChartDefaults$$);
    }
    return $dvt$$2$$;
  };
  $DvtChartPie$$.$_layoutSlices$ = function $$DvtChartPie$$$$_layoutSlices$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$ = 0, $DvtChartPieLabelUtils$$ = $dvt$$2$$ ? $dvt$$2$$.length : 0;
    360 < $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$ -= 360);
    0 > $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$ += 360);
    var $DvtChartPieLabelInfo$$ = $DvtChartRefObjUtils$$ = 0;
    0 < $DvtChartPieLabelUtils$$ && ($DvtChartPieLabelInfo$$ = $dvt$$2$$[0].$_pieChart$.$getTotalValue$());
    for ($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtChartPieLabelUtils$$;$DvtSparkChartDefaults$$++) {
      $DvtSparkChartAutomation$$ = $dvt$$2$$[$DvtSparkChartDefaults$$], $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.getValue(), $DvtChartRefObjUtils$$ = $DvtChartRefObjUtils$$ == $DvtChartPieLabelInfo$$ ? 100 : 0 == $DvtChartPieLabelInfo$$ ? 0 : Math.min($DvtChartRefObjUtils$$ / $DvtChartPieLabelInfo$$ * 100, 99.99), $DvtChartAxisUtils$$ = 3.6 * $DvtChartRefObjUtils$$, $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$ - $DvtChartAxisUtils$$, 0 > $DvtChartRefObjUtils$$ && ($DvtChartRefObjUtils$$ += 
      360), $DvtSparkChartAutomation$$.$setAngleStart$($DvtChartRefObjUtils$$), $DvtSparkChartAutomation$$.$setAngleExtent$($DvtChartAxisUtils$$), $DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.$getAngleStart$();
    }
  };
  $DvtChartPie$$.$_orderSlicesForRendering$ = function $$DvtChartPie$$$$_orderSlicesForRendering$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ = $dvt$$2$$ ? $dvt$$2$$.length : 0, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$ = -1, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$;
    for ($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartAutomation$$;$DvtSparkChartDefaults$$++) {
      if ($DvtChartRefObjUtils$$ = $dvt$$2$$[$DvtSparkChartDefaults$$], $DvtChartPieLabelUtils$$ = $DvtChartRefObjUtils$$.$getAngleStart$(), $DvtChartRefObjUtils$$ = $DvtChartRefObjUtils$$.$getAngleExtent$(), $DvtChartRefObjUtils$$ = $DvtChartPieLabelUtils$$ + $DvtChartRefObjUtils$$, 360 < $DvtChartRefObjUtils$$ && ($DvtChartRefObjUtils$$ -= 360), 0 > $DvtChartRefObjUtils$$ && ($DvtChartRefObjUtils$$ += 360), 90 == $DvtChartRefObjUtils$$ || 90 > $DvtChartPieLabelUtils$$ && 90 < $DvtChartRefObjUtils$$) {
        $DvtChartAxisUtils$$ = $DvtSparkChartDefaults$$;
        $DvtChartPieLabelInfo$$ = $DvtChartRefObjUtils$$ - 90;
        break;
      }
    }
    $DvtChartPieLabelUtils$$ = [];
    for ($DvtSparkChartDefaults$$ = $DvtChartAxisUtils$$;$DvtSparkChartDefaults$$ < $DvtSparkChartAutomation$$;$DvtSparkChartDefaults$$++) {
      $DvtChartPieLabelUtils$$.push($dvt$$2$$[$DvtSparkChartDefaults$$]);
    }
    for ($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtChartAxisUtils$$;$DvtSparkChartDefaults$$++) {
      $DvtChartPieLabelUtils$$.push($dvt$$2$$[$DvtSparkChartDefaults$$]);
    }
    $DvtChartAxisUtils$$ = $dvt$$2$$ = 0;
    $DvtChartPieLabelInfo$$ = 180 + $DvtChartPieLabelInfo$$;
    for ($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartAutomation$$;$DvtSparkChartDefaults$$++) {
      if ($DvtChartRefObjUtils$$ = $DvtChartPieLabelUtils$$[$DvtSparkChartDefaults$$]) {
        if ($dvt$$2$$ + $DvtChartRefObjUtils$$.$getAngleExtent$() > $DvtChartPieLabelInfo$$) {
          $DvtChartAxisUtils$$ = $DvtSparkChartDefaults$$;
          break;
        }
        $DvtSparkChartEventManager$$.push($DvtChartRefObjUtils$$);
        $dvt$$2$$ += $DvtChartRefObjUtils$$.$getAngleExtent$();
      }
    }
    for ($DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$ - 1;$DvtSparkChartDefaults$$ >= $DvtChartAxisUtils$$;$DvtSparkChartDefaults$$--) {
      ($DvtChartRefObjUtils$$ = $DvtChartPieLabelUtils$$[$DvtSparkChartDefaults$$]) && $DvtSparkChartEventManager$$.push($DvtChartRefObjUtils$$);
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartPie$$.prototype.$is3D$ = function $$DvtChartPie$$$$$is3D$$() {
    return "on" == this.$_options$.styleDefaults.threeDEffect;
  };
  $DvtChartPie$$.prototype.$__calcMaxExplodeDistance$ = function $$DvtChartPie$$$$$__calcMaxExplodeDistance$$() {
    return this.$_radiusX$ * (.5 / $DvtChartPie$$.$_RADIUS$ - 1);
  };
  $DvtChartPie$$.prototype.$getAnimationDuration$ = function $$DvtChartPie$$$$$getAnimationDuration$$() {
    return $DvtChartStyleUtils$$.$getAnimationDuration$(this.$chart$);
  };
  $DvtChartPie$$.prototype.$getDisplayAnimation$ = function $$DvtChartPie$$$$$getDisplayAnimation$$() {
    this.$_duringDisplayAnim$ = !0;
    var $DvtSparkChartEventManager$$ = new $dvt$$2$$.$DataAnimationHandler$(this.$getCtx$(), this), $DvtSparkChartDefaults$$ = this.$getAnimationDuration$(), $DvtSparkChartAutomation$$ = $DvtChartPieSlice$$.$createFillerSlice$(this, this.$getTotalValue$());
    this.$_slices$.push($DvtSparkChartAutomation$$);
    var $DvtChartRefObjUtils$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$);
    $DvtChartRefObjUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartAutomation$$, $DvtSparkChartAutomation$$.$GetAnimationParams$, $DvtSparkChartAutomation$$.$SetAnimationParams$, $DvtSparkChartAutomation$$.$getDeletedAnimationParams$());
    $DvtChartRefObjUtils$$.$setOnEnd$($DvtSparkChartAutomation$$.$_removeDeletedSlice$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$.add($DvtChartRefObjUtils$$, 0);
    for ($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < this.$_slices$.length - 1;$DvtSparkChartAutomation$$++) {
      this.$_slices$[$DvtSparkChartAutomation$$].$animateInsert$($DvtSparkChartEventManager$$);
    }
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0);
    $DvtChartRefObjUtils$$ = [];
    for ($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < this.$_slices$.length;$DvtSparkChartAutomation$$++) {
      $DvtChartRefObjUtils$$ = $DvtChartRefObjUtils$$.concat(this.$_slices$[$DvtSparkChartAutomation$$].$getLabelAndFeeler$());
    }
    $DvtSparkChartDefaults$$ = new $dvt$$2$$.$AnimFadeIn$(this.$_context$, $DvtChartRefObjUtils$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 0);
    this.$_setAnimationParams$();
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getAnimation$(!0);
    $DvtSparkChartEventManager$$.$setOnEnd$(this.$_onEnd$, this);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartPie$$.prototype.$_onEnd$ = function $$DvtChartPie$$$$$_onEnd$$() {
    this.$_duringDisplayAnim$ = !1;
    this.$_setAnimationParams$();
  };
  $DvtChartPie$$.prototype.$getCenter$ = function $$DvtChartPie$$$$$getCenter$$() {
    return this.$_center$;
  };
  $DvtChartPie$$.prototype.$getInnerRadius$ = function $$DvtChartPie$$$$$getInnerRadius$$() {
    return this.$is3D$() ? 0 : this.$_options$.styleDefaults.pieInnerRadius * Math.min(this.$_radiusX$, this.$_radiusY$) * .95;
  };
  $DvtChartPie$$.prototype.getDepth = function $$DvtChartPie$$$$getDepth$() {
    return this.$_depth$;
  };
  $DvtChartPie$$.prototype.$getSliceDisplayable$ = function $$DvtChartPie$$$$$getSliceDisplayable$$($dvt$$2$$) {
    return ($dvt$$2$$ = $DvtChartPieUtils$$.$getSliceBySeriesIndex$(this.$chart$, $dvt$$2$$)) ? $dvt$$2$$.$getTopDisplayable$() : null;
  };
  $DvtChartPie$$.prototype.$animateUpdate$ = function $$DvtChartPie$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$DataAnimationHandler$(this.$getCtx$(), this);
    $DvtSparkChartAutomation$$.$constructAnimation$($DvtSparkChartDefaults$$.$_slices$, this.$_slices$);
    var $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$.$getAnimation$(!0), $DvtChartRefObjUtils$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, this.$getAnimationDuration$());
    $DvtChartRefObjUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$ParallelPlayable$(this.$getCtx$(), $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
    $DvtSparkChartAutomation$$.$setOnEnd$(this.$_setAnimationParams$, this);
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0);
    this.$_setAnimationParams$([$DvtSparkChartDefaults$$.getDepth(), $DvtSparkChartDefaults$$.$_radiusY$, $DvtSparkChartDefaults$$.$getCenter$().y]);
  };
  $DvtChartPie$$.prototype.$animateInsert$ = function $$DvtChartPie$$$$$animateInsert$$() {
  };
  $DvtChartPie$$.prototype.$animateDelete$ = function $$DvtChartPie$$$$$animateDelete$$() {
  };
  $DvtChartPie$$.prototype.$_getAnimationParams$ = function $$DvtChartPie$$$$$_getAnimationParams$$() {
    return [this.$_depth$, this.$_radiusY$, this.$_center$.y];
  };
  $DvtChartPie$$.prototype.$_setAnimationParams$ = function $$DvtChartPie$$$$$_setAnimationParams$$($dvt$$2$$) {
    this.$removeChildren$();
    this.$_shapesContainer$ && this.$_shapesContainer$.$destroy$();
    this.$_shapesContainer$ = null;
    $dvt$$2$$ && (this.$_depth$ = $dvt$$2$$[0], this.$_radiusY$ = $dvt$$2$$[1], this.$_center$.y = $dvt$$2$$[2]);
    this.$render$();
  };
  $DvtChartPie$$.prototype.$bringToFrontOfSelection$ = function $$DvtChartPie$$$$$bringToFrontOfSelection$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_pieChart$.$_shapesContainer$;
    if ($DvtSparkChartEventManager$$) {
      var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getNumChildren$();
      1 < $DvtSparkChartDefaults$$ - this.$_numFrontObjs$ && ($DvtSparkChartEventManager$$.removeChild($dvt$$2$$.$_topSurface$[0]), $DvtSparkChartEventManager$$.$addChildAt$($dvt$$2$$.$_topSurface$[0], $DvtSparkChartDefaults$$ - this.$_numFrontObjs$ - 1));
    }
  };
  $DvtChartPie$$.prototype.$pushToBackOfSelection$ = function $$DvtChartPie$$$$$pushToBackOfSelection$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = this.$_slices$.length, $DvtSparkChartDefaults$$ = 0, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$;$DvtSparkChartAutomation$$++) {
      this.$_slices$[$DvtSparkChartAutomation$$].$isSelected$() && $DvtSparkChartDefaults$$++;
    }
    this.$_numSelectedObjsInFront$ = $DvtSparkChartDefaults$$;
    if ($DvtSparkChartEventManager$$ = $dvt$$2$$.$_pieChart$.$_shapesContainer$) {
      $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$, 0 <= $DvtSparkChartDefaults$$ && ($DvtSparkChartEventManager$$.removeChild($dvt$$2$$.$_topSurface$[0]), $DvtSparkChartEventManager$$.$addChildAt$($dvt$$2$$.$_topSurface$[0], $DvtSparkChartDefaults$$));
    }
  };
  $DvtChartPie$$.prototype.$getLabelPosition$ = function $$DvtChartPie$$$$$getLabelPosition$$() {
    var $dvt$$2$$ = this.$_options$.styleDefaults.sliceLabelPosition;
    $dvt$$2$$ || ($dvt$$2$$ = this.$_options$.styleDefaults.dataLabelPosition);
    return $DvtChartPie$$.$parseLabelPosition$($dvt$$2$$);
  };
  $DvtChartPie$$.prototype.$getSeriesLabelPosition$ = function $$DvtChartPie$$$$$getSeriesLabelPosition$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$getLabelPosition$();
    ($dvt$$2$$ = $DvtChartDataUtils$$.$getDataItem$(this.$chart$, $dvt$$2$$, 0)) && $dvt$$2$$.labelPosition && ($DvtSparkChartEventManager$$ = $dvt$$2$$.labelPosition);
    return $DvtChartPie$$.$parseLabelPosition$($DvtSparkChartEventManager$$);
  };
  $DvtChartPie$$.$parseLabelPosition$ = function $$DvtChartPie$$$$parseLabelPosition$$($dvt$$2$$) {
    return "center" == $dvt$$2$$ || "inside" == $dvt$$2$$ ? "center" : "outsideSlice" == $dvt$$2$$ || "outside" == $dvt$$2$$ ? "outsideSlice" : "none" == $dvt$$2$$ ? "none" : "auto";
  };
  $DvtChartPie$$.prototype.$getSkin$ = function $$DvtChartPie$$$$$getSkin$$() {
    return this.$_options$.skin;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPieSlice$$, $dvt$$2$$.$Obj$);
  $DvtChartPieSlice$$.prototype.Init = function $$DvtChartPieSlice$$$$Init$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.$_pieChart$ = $DvtSparkChartEventManager$$;
    this.$_chart$ = $DvtSparkChartEventManager$$.$chart$;
    this.$_angleExtent$ = this.$_angleStart$ = 0;
    this.$_crustSurface$ = this.$_rightSurface$ = this.$_leftSurface$ = this.$_topSurface$ = null;
    this.$_explodeOffsetY$ = this.$_explodeOffsetX$ = 0;
    this.$_sliceLabelString$ = this.$_sliceLabel$ = null;
    this.$_hasFeeler$ = !1;
    this.$_outsideFeelerEnd$ = this.$_outsideFeelerMid$ = this.$_outsideFeelerStart$ = this.$_feelerHoriz$ = this.$_feelerRad$ = null;
    this.$_selecting$ = this.$_selected$ = !1;
    this.$_centerX$ = this.$_pieChart$.$getCenter$().x;
    this.$_centerY$ = this.$_pieChart$.$getCenter$().y;
    this.$_radiusX$ = this.$_pieChart$.$_radiusX$;
    this.$_radiusY$ = this.$_pieChart$.$_radiusY$;
    this.$_depth$ = this.$_pieChart$.getDepth();
    var $DvtSparkChartAutomation$$ = this.$_chart$.$getOptions$();
    null != $DvtSparkChartDefaults$$ ? ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $DvtSparkChartDefaults$$, 0), this.$_value$ = $DvtChartDataUtils$$.getValue(this.$_chart$, $DvtSparkChartDefaults$$, 0), this.$_explode$ = $DvtChartPieUtils$$.$getSliceExplode$(this.$_chart$, $DvtSparkChartDefaults$$), this.$_fillColor$ = $DvtChartStyleUtils$$.$getColor$(this.$_chart$, $DvtSparkChartDefaults$$, 0), this.$_fillPattern$ = $DvtChartStyleUtils$$.$getPattern$(this.$_chart$, 
    $DvtSparkChartDefaults$$, 0), this.$_strokeColor$ = $DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $DvtSparkChartDefaults$$), this.$_borderWidth$ = $DvtChartStyleUtils$$.$getBorderWidth$(this.$_chart$, $DvtSparkChartDefaults$$), this.$_customLabel$ = $DvtSparkChartAutomation$$.label, this.$_seriesLabel$ = $DvtChartDataUtils$$.$getSeries$(this.$_chart$, $DvtSparkChartDefaults$$), this.$_action$ = $DvtSparkChartAutomation$$.action, this.$_drillable$ = $DvtChartEventUtils$$.$isDataItemDrillable$(this.$_chart$, 
    $DvtSparkChartDefaults$$, 0), this.$_showPopupBehaviors$ = this.$_chart$.$getShowPopupBehaviors$($DvtSparkChartAutomation$$._id), this.$_id$ = $DvtChartPieUtils$$.$getSliceId$(this.$_chart$, $DvtSparkChartDefaults$$), this.$_seriesIndex$ = $DvtSparkChartDefaults$$, this.$_categories$ = $DvtChartDataUtils$$.$getCategories$(this.$_chart$, $DvtSparkChartDefaults$$, 0)) : (this.$_value$ = $DvtChartPieUtils$$.$getOtherValue$(this.$_chart$), this.$_explode$ = 0, this.$_fillColor$ = $DvtSparkChartAutomation$$.styleDefaults.otherColor, 
    this.$_fillPattern$ = null, this.$_strokeColor$ = $DvtSparkChartAutomation$$.styleDefaults.borderColor, this.$_borderWidth$ = $DvtSparkChartAutomation$$.styleDefaults.borderWidth, this.$_customLabel$ = null, this.$_seriesLabel$ = $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_OTHER", null), this.$_action$ = null, this.$_drillable$ = !1, this.$_showPopupBehaviors$ = $DvtChartPieUtils$$.$getOtherSliceShowPopupBehaviors$(this.$_chart$), this.$_id$ = $DvtChartPieUtils$$.$getOtherSliceId$(this.$_chart$));
  };
  $DvtChartPieSlice$$.prototype.$render$ = function $$DvtChartPieSlice$$$$$render$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = $DvtChartPieSlice$$.$_sortPieSurfaces$(this.$_topSurface$, this.$_leftSurface$, this.$_rightSurface$, this.$_crustSurface$, this.$_angleStart$, this.$_angleExtent$), $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.length, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$;$DvtSparkChartAutomation$$++) {
      for (var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$], $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$.length, $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartAxisUtils$$;$DvtChartPieLabelUtils$$++) {
        this.$_pieChart$.$_shapesContainer$.$addChild$($DvtChartRefObjUtils$$[$DvtChartPieLabelUtils$$]), $DvtChartRefObjUtils$$[$DvtChartPieLabelUtils$$].$render$ && $DvtChartRefObjUtils$$[$DvtChartPieLabelUtils$$].$render$();
      }
    }
    this.$_sliceLabel$ && (this.$_pieChart$.$addChild$(this.$_sliceLabel$), $DvtChartPieRenderUtils$$.$associate$(this, [this.$_sliceLabel$]), $dvt$$2$$ ? (this.$_pieChart$.$addChild$(this.$_feelerRad$), this.$_pieChart$.$addChild$(this.$_feelerHoriz$)) : this.$_renderOutsideFeeler$());
    this.$_explodeSlice$();
    if (this.$_action$ || this.$_drillable$ || this.$_pieChart$.$chart$.$isSelectionSupported$()) {
      for ($dvt$$2$$ = this.$getDisplayables$(), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $dvt$$2$$.length;$DvtSparkChartAutomation$$++) {
        $dvt$$2$$[$DvtSparkChartAutomation$$].setCursor("pointer");
      }
    }
    if ($DvtSparkChartAutomation$$ = this.$getTopDisplayable$()) {
      $DvtSparkChartAutomation$$.$setAriaRole$("img"), this.$_updateAriaLabel$();
    }
  };
  $DvtChartPieSlice$$.prototype.$_feelerFromPts$ = function $$DvtChartPieSlice$$$$$_feelerFromPts$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Line$(this.$_pieChart$.$getCtx$(), $DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y), $DvtChartRefObjUtils$$ = this.$_pieChart$.$getOptions$().styleDefaults.pieFeelerColor, $DvtChartRefObjUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtChartRefObjUtils$$);
    $DvtSparkChartAutomation$$.$setStroke$($DvtChartRefObjUtils$$);
    this.$_pieChart$.$addChild$($DvtSparkChartAutomation$$);
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartPieSlice$$.prototype.$_renderOutsideFeeler$ = function $$DvtChartPieSlice$$$$$_renderOutsideFeeler$$() {
    if (this.$_hasFeeler$) {
      var $dvt$$2$$ = this.$_feelerFromPts$(this.$_outsideFeelerStart$, this.$_outsideFeelerMid$), $DvtSparkChartEventManager$$ = this.$_feelerFromPts$(this.$_outsideFeelerMid$, this.$_outsideFeelerEnd$);
      this.$_feelerRad$ = $dvt$$2$$;
      this.$_feelerHoriz$ = $DvtSparkChartEventManager$$;
    }
  };
  $DvtChartPieSlice$$.prototype.$preRender$ = function $$DvtChartPieSlice$$$$$preRender$$() {
    var $DvtSparkChartEventManager$$ = this.$_bFillerSlice$ ? "color" : $DvtChartStyleUtils$$.$getSeriesEffect$(this.$_chart$), $DvtSparkChartDefaults$$ = this.$getFillColor$(), $DvtSparkChartAutomation$$ = this.$getFillPattern$();
    if ("pattern" == $DvtSparkChartEventManager$$ || null != $DvtSparkChartAutomation$$) {
      $DvtSparkChartAutomation$$ = new $dvt$$2$$.$PatternFill$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = "pattern";
    } else {
      if ("gradient" == $DvtSparkChartEventManager$$) {
        var $DvtSparkChartAutomation$$ = this.$_pieChart$.$getSkin$(), $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$ == $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ ? 297 : 270, $DvtChartAxisUtils$$ = this.$_pieChart$.$is3D$() ? "3D" : "2D", $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$.$getGradientColors$($dvt$$2$$.$ColorUtils$.$getRGB$($DvtSparkChartDefaults$$), $DvtChartAxisUtils$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelInfo$$ = $DvtChartPieRenderUtils$$.$getGradientAlphas$($dvt$$2$$.$ColorUtils$.$getAlpha$($DvtSparkChartDefaults$$), 
        $DvtChartAxisUtils$$), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$LinearGradientFill$($DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$.$getGradientRatios$($DvtChartAxisUtils$$, $DvtSparkChartAutomation$$), [Math.floor(this.$_centerX$ - this.$_radiusX$), Math.floor(this.$_centerY$ - this.$_radiusY$), Math.ceil(2 * this.$_radiusX$), Math.ceil(2 * this.$_radiusY$)])
      } else {
        $DvtSparkChartAutomation$$ = new $dvt$$2$$.$SolidFill$($DvtSparkChartDefaults$$);
      }
    }
    this.$_topSurface$ = $DvtChartPieRenderUtils$$.$createTopSurface$(this, $DvtSparkChartAutomation$$);
    if (0 < this.$_depth$ || this.$_radiusX$ != this.$_radiusY$) {
      $DvtSparkChartEventManager$$ = "gradient" == $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$ = new $dvt$$2$$.$SolidFill$($dvt$$2$$.$ColorUtils$.$getDarker$($DvtSparkChartDefaults$$, .4)), $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$ ? $DvtChartPieRenderUtils$$.$generateLateralGradientFill$(this, $DvtChartPieRenderUtils$$.$SIDE$) : $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$ ? $DvtChartPieRenderUtils$$.$generateLateralGradientFill$(this, 
      $DvtChartPieRenderUtils$$.$CRUST$) : $DvtSparkChartAutomation$$, this.$_leftSurface$ = $DvtChartPieRenderUtils$$.$createLateralSurface$(this, $DvtChartPieRenderUtils$$.$SURFACE_LEFT$, $DvtSparkChartDefaults$$), this.$_rightSurface$ = $DvtChartPieRenderUtils$$.$createLateralSurface$(this, $DvtChartPieRenderUtils$$.$SURFACE_RIGHT$, $DvtSparkChartDefaults$$), this.$_crustSurface$ = $DvtChartPieRenderUtils$$.$createLateralSurface$(this, $DvtChartPieRenderUtils$$.$SURFACE_CRUST$, $DvtSparkChartEventManager$$)
      ;
    }
  };
  $DvtChartPieSlice$$.$_sortPieSurfaces$ = function $$DvtChartPieSlice$$$$_sortPieSurfaces$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    var $DvtChartPieLabelUtils$$ = [];
    $DvtSparkChartEventManager$$ && $DvtSparkChartDefaults$$ && $DvtSparkChartAutomation$$ && (270 >= $DvtChartRefObjUtils$$ && 270 < $DvtChartRefObjUtils$$ + $DvtChartAxisUtils$$ ? ($DvtChartPieLabelUtils$$.push($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$.push($DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$.push($DvtSparkChartAutomation$$)) : 270 < $DvtChartRefObjUtils$$ || 90 >= $DvtChartRefObjUtils$$ + $DvtChartAxisUtils$$ ? ($DvtChartPieLabelUtils$$.push($DvtSparkChartEventManager$$), 
    $DvtChartPieLabelUtils$$.push($DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$.push($DvtSparkChartDefaults$$)) : ($DvtChartPieLabelUtils$$.push($DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$.push($DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$.push($DvtSparkChartEventManager$$)));
    $DvtChartPieLabelUtils$$.push($dvt$$2$$);
    return $DvtChartPieLabelUtils$$;
  };
  $DvtChartPieSlice$$.$oppositeDirection$ = function $$DvtChartPieSlice$$$$oppositeDirection$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return 0 < $dvt$$2$$ - $DvtSparkChartEventManager$$ != 0 < $dvt$$2$$ - $DvtSparkChartDefaults$$;
  };
  $DvtChartPieSlice$$.prototype.$_explodeSlice$ = function $$DvtChartPieSlice$$$$$_explodeSlice$$() {
    if (0 != this.$_explode$) {
      var $DvtSparkChartEventManager$$ = (360 - (this.$_angleStart$ + this.$_angleExtent$ / 2)) * $dvt$$2$$.Math.$RADS_PER_DEGREE$, $DvtSparkChartDefaults$$ = this.$_pieChart$.$is3D$() ? $DvtChartPie$$.$_THREED_TILT$ : 1, $DvtSparkChartAutomation$$ = this.$_explode$ * this.$_pieChart$.$__calcMaxExplodeDistance$();
      this.$_explodeOffsetX$ = Math.cos($DvtSparkChartEventManager$$) * $DvtSparkChartAutomation$$;
      this.$_explodeOffsetY$ = Math.sin($DvtSparkChartEventManager$$) * $DvtSparkChartDefaults$$ * $DvtSparkChartAutomation$$;
      $dvt$$2$$.$Agent$.$isPlatformWebkit$() && (this.$_explodeOffsetX$ = Math.round(this.$_explodeOffsetX$), this.$_explodeOffsetY$ = Math.round(this.$_explodeOffsetY$));
    } else {
      this.$_explodeOffsetY$ = this.$_explodeOffsetX$ = 0;
    }
    this.$_topSurface$ && ($DvtSparkChartEventManager$$ = this.$_pieChart$.$is3D$() && this.$_topSurface$[0].$getSelectionOffset$ ? this.$_topSurface$[0].$getSelectionOffset$() : [], $DvtChartPieSlice$$.$_translateShapes$(this.$_topSurface$, $DvtSparkChartEventManager$$[0] ? $DvtSparkChartEventManager$$[0] + this.$_explodeOffsetX$ : this.$_explodeOffsetX$, $DvtSparkChartEventManager$$[1] ? $DvtSparkChartEventManager$$[1] + this.$_explodeOffsetY$ : this.$_explodeOffsetY$));
    this.$_rightSurface$ && $DvtChartPieSlice$$.$_translateShapes$(this.$_rightSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
    this.$_leftSurface$ && $DvtChartPieSlice$$.$_translateShapes$(this.$_leftSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
    this.$_crustSurface$ && $DvtChartPieSlice$$.$_translateShapes$(this.$_crustSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
    if (this.$_hasFeeler$) {
      var $DvtSparkChartEventManager$$ = this.$_outsideFeelerStart$.x, $DvtSparkChartDefaults$$ = this.$_outsideFeelerStart$.y, $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$ + this.$_explodeOffsetX$, $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$ + this.$_explodeOffsetY$;
      this.$_feelerRad$.$setX1$($DvtSparkChartAutomation$$);
      this.$_feelerRad$.$setY1$($DvtChartRefObjUtils$$);
      var $DvtChartAxisUtils$$ = this.$_outsideFeelerMid$.x, $DvtChartPieLabelUtils$$ = this.$_outsideFeelerMid$.y;
      $DvtChartPieSlice$$.$oppositeDirection$($DvtChartAxisUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) ? (this.$_feelerRad$.$setX2$($DvtSparkChartAutomation$$), this.$_feelerHoriz$.$setX1$($DvtSparkChartAutomation$$)) : (this.$_feelerRad$.$setX2$($DvtChartAxisUtils$$), this.$_feelerHoriz$.$setX1$($DvtChartAxisUtils$$));
      $DvtChartPieSlice$$.$oppositeDirection$($DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$) ? (this.$_feelerRad$.$setY2$($DvtChartRefObjUtils$$), this.$_feelerHoriz$.$setY1$($DvtChartRefObjUtils$$)) : (this.$_feelerRad$.$setY2$($DvtChartPieLabelUtils$$), this.$_feelerHoriz$.$setY1$($DvtChartPieLabelUtils$$));
    }
    this.$_sliceLabel$ && !this.$_hasFeeler$ && this.$_sliceLabel$.$setTranslate$(this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  };
  $DvtChartPieSlice$$.$_translateShapes$ = function $$DvtChartPieSlice$$$$_translateShapes$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if ($dvt$$2$$) {
      for (var $DvtSparkChartAutomation$$ = $dvt$$2$$.length, $DvtChartRefObjUtils$$ = 0;$DvtChartRefObjUtils$$ < $DvtSparkChartAutomation$$;$DvtChartRefObjUtils$$++) {
        $dvt$$2$$[$DvtChartRefObjUtils$$].$setTranslate$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      }
    }
  };
  $DvtChartPieSlice$$.prototype.$getCenter$ = function $$DvtChartPieSlice$$$$$getCenter$$() {
    return new $dvt$$2$$.$Point$(this.$_centerX$, this.$_centerY$);
  };
  $DvtChartPieSlice$$.prototype.getDepth = function $$DvtChartPieSlice$$$$getDepth$() {
    return this.$_depth$;
  };
  $DvtChartPieSlice$$.prototype.$getAngleExtent$ = function $$DvtChartPieSlice$$$$$getAngleExtent$$() {
    return this.$_angleExtent$;
  };
  $DvtChartPieSlice$$.prototype.$setAngleExtent$ = function $$DvtChartPieSlice$$$$$setAngleExtent$$($dvt$$2$$) {
    this.$_angleExtent$ = $dvt$$2$$;
  };
  $DvtChartPieSlice$$.prototype.$getAngleStart$ = function $$DvtChartPieSlice$$$$$getAngleStart$$() {
    return this.$_angleStart$;
  };
  $DvtChartPieSlice$$.prototype.$setAngleStart$ = function $$DvtChartPieSlice$$$$$setAngleStart$$($dvt$$2$$) {
    this.$_angleStart$ = $dvt$$2$$;
  };
  $DvtChartPieSlice$$.prototype.$setOutsideFeelerPoints$ = function $$DvtChartPieSlice$$$$$setOutsideFeelerPoints$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.$_outsideFeelerStart$ = $dvt$$2$$;
    this.$_outsideFeelerMid$ = $DvtSparkChartEventManager$$;
    this.$_outsideFeelerEnd$ = $DvtSparkChartDefaults$$;
    this.$_hasFeeler$ = !0;
  };
  $DvtChartPieSlice$$.prototype.$setNoOutsideFeeler$ = function $$DvtChartPieSlice$$$$$setNoOutsideFeeler$$() {
    this.$_outsideFeelerEnd$ = this.$_outsideFeelerMid$ = this.$_outsideFeelerStart$ = null;
    this.$_hasFeeler$ = !1;
  };
  $DvtChartPieSlice$$.prototype.$getLabelAndFeeler$ = function $$DvtChartPieSlice$$$$$getLabelAndFeeler$$() {
    var $dvt$$2$$ = [];
    this.$_sliceLabel$ && $dvt$$2$$.push(this.$_sliceLabel$);
    this.$_feelerRad$ && $dvt$$2$$.push(this.$_feelerRad$);
    this.$_feelerHoriz$ && $dvt$$2$$.push(this.$_feelerHoriz$);
    return $dvt$$2$$;
  };
  $DvtChartPieSlice$$.prototype.$setSliceLabel$ = function $$DvtChartPieSlice$$$$$setSliceLabel$$($dvt$$2$$) {
    this.$_sliceLabel$ = $dvt$$2$$;
  };
  $DvtChartPieSlice$$.prototype.$setSliceLabelString$ = function $$DvtChartPieSlice$$$$$setSliceLabelString$$($dvt$$2$$) {
    this.$_sliceLabelString$ = $dvt$$2$$;
  };
  $DvtChartPieSlice$$.prototype.getValue = function $$DvtChartPieSlice$$$$getValue$() {
    return this.$_value$;
  };
  $DvtChartPieSlice$$.prototype.getId = function $$DvtChartPieSlice$$$$getId$() {
    return this.$_id$;
  };
  $DvtChartPieSlice$$.prototype.$getSeriesIndex$ = function $$DvtChartPieSlice$$$$$getSeriesIndex$$() {
    return this.$_seriesIndex$;
  };
  $DvtChartPieSlice$$.$containsRect$ = function $$DvtChartPieSlice$$$$containsRect$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.contains($dvt$$2$$.x, $dvt$$2$$.y) && $DvtSparkChartEventManager$$.contains($dvt$$2$$.x + $dvt$$2$$.$w$, $dvt$$2$$.y) && $DvtSparkChartEventManager$$.contains($dvt$$2$$.x + $dvt$$2$$.$w$, $dvt$$2$$.y + $dvt$$2$$.$h$) && $DvtSparkChartEventManager$$.contains($dvt$$2$$.x, $dvt$$2$$.y + $dvt$$2$$.$h$);
  };
  $DvtChartPieSlice$$.$_shapeIsSelectable$ = function $$DvtChartPieSlice$$$$_shapeIsSelectable$$($dvt$$2$$) {
    return $dvt$$2$$ instanceof $DvtChartSelectableWedge$$;
  };
  $DvtChartPieSlice$$.prototype.contains = function $$DvtChartPieSlice$$$$contains$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = this.$_pieChart$.$getInnerRadius$(), $DvtSparkChartAutomation$$ = this.$_pieChart$.$getCenter$(), $DvtChartRefObjUtils$$ = ($dvt$$2$$ - $DvtSparkChartAutomation$$.x) / this.$_radiusX$, $DvtChartAxisUtils$$ = ($DvtSparkChartEventManager$$ - $DvtSparkChartAutomation$$.y) / this.$_radiusY$, $DvtSparkChartAutomation$$ = 180 / Math.PI * -Math.atan2($DvtChartAxisUtils$$, $DvtChartRefObjUtils$$);$DvtSparkChartAutomation$$ < this.$_angleStart$;) {
      $DvtSparkChartAutomation$$ += 360;
    }
    for (;360 <= $DvtSparkChartAutomation$$ - this.$_angleStart$;) {
      $DvtSparkChartAutomation$$ -= 360;
    }
    $DvtChartRefObjUtils$$ = Math.pow($DvtChartRefObjUtils$$, 2) + Math.pow($DvtChartAxisUtils$$, 2);
    $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$ <= this.$_angleStart$ + this.$_angleExtent$;
    return Math.sqrt($DvtChartRefObjUtils$$) > $DvtSparkChartDefaults$$ / this.$_radiusX$ && 1 >= $DvtChartRefObjUtils$$ && $DvtSparkChartAutomation$$;
  };
  $DvtChartPieSlice$$.prototype.$GetAnimationParams$ = function $$DvtChartPieSlice$$$$$GetAnimationParams$$() {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$ColorUtils$.$getRed$(this.$_fillColor$), $DvtSparkChartDefaults$$ = $dvt$$2$$.$ColorUtils$.$getGreen$(this.$_fillColor$), $DvtSparkChartAutomation$$ = $dvt$$2$$.$ColorUtils$.$getBlue$(this.$_fillColor$), $DvtChartRefObjUtils$$ = $dvt$$2$$.$ColorUtils$.$getAlpha$(this.$_fillColor$);
    return [this.$_value$, this.$_radiusX$, this.$_radiusY$, this.$_explode$, this.$_centerX$, this.$_centerY$, this.$_depth$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$];
  };
  $DvtChartPieSlice$$.prototype.$SetAnimationParams$ = function $$DvtChartPieSlice$$$$$SetAnimationParams$$($DvtSparkChartEventManager$$) {
    this.$_value$ = $DvtSparkChartEventManager$$[0];
    this.$_radiusX$ = $DvtSparkChartEventManager$$[1];
    this.$_radiusY$ = $DvtSparkChartEventManager$$[2];
    this.$_explode$ = $DvtSparkChartEventManager$$[3];
    this.$_centerX$ = $DvtSparkChartEventManager$$[4];
    this.$_centerY$ = $DvtSparkChartEventManager$$[5];
    this.$_depth$ = $DvtSparkChartEventManager$$[6];
    this.$_fillColor$ = $dvt$$2$$.$ColorUtils$.$makeRGBA$(Math.round($DvtSparkChartEventManager$$[7]), Math.round($DvtSparkChartEventManager$$[8]), Math.round($DvtSparkChartEventManager$$[9]), Math.round($DvtSparkChartEventManager$$[10]));
  };
  $DvtChartPieSlice$$.prototype.$getDeletedAnimationParams$ = function $$DvtChartPieSlice$$$$$getDeletedAnimationParams$$() {
    var $dvt$$2$$ = this.$GetAnimationParams$();
    $dvt$$2$$[0] = 0;
    $dvt$$2$$[1] = this.$getInnerRadius$();
    $dvt$$2$$[2] = this.$getInnerRadius$();
    $dvt$$2$$[3] = 0;
    return $dvt$$2$$;
  };
  $DvtChartPieSlice$$.prototype.$animateUpdate$ = function $$DvtChartPieSlice$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$GetAnimationParams$(), $DvtChartRefObjUtils$$ = this.$GetAnimationParams$();
    if (!$dvt$$2$$.$ArrayUtils$.$equals$($DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$)) {
      var $DvtChartAxisUtils$$ = new $dvt$$2$$.$CustomAnimation$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
      $DvtChartAxisUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$GetAnimationParams$, this.$SetAnimationParams$, $DvtChartRefObjUtils$$);
      $DvtSparkChartEventManager$$.add($DvtChartAxisUtils$$, 0);
      this.$SetAnimationParams$($DvtSparkChartAutomation$$);
    }
  };
  $DvtChartPieSlice$$.prototype.$animateInsert$ = function $$DvtChartPieSlice$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$CustomAnimation$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
    $DvtSparkChartDefaults$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$GetAnimationParams$, this.$SetAnimationParams$, this.$GetAnimationParams$());
    $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 0);
    this.$SetAnimationParams$(this.$getDeletedAnimationParams$());
  };
  $DvtChartPieSlice$$.prototype.$animateDelete$ = function $$DvtChartPieSlice$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$_slices$, $DvtChartRefObjUtils$$ = this.$_pieChart$.$_slices$, $DvtChartAxisUtils$$ = $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartRefObjUtils$$, this) - 1;
    if (0 <= $DvtChartAxisUtils$$) {
      for ($DvtChartRefObjUtils$$ = $DvtChartRefObjUtils$$[$DvtChartAxisUtils$$].getId(), $DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartAxisUtils$$++) {
        if ($DvtSparkChartAutomation$$[$DvtChartAxisUtils$$].getId().$equals$($DvtChartRefObjUtils$$)) {
          $DvtSparkChartAutomation$$.splice($DvtChartAxisUtils$$ + 1, 0, this);
          break;
        }
      }
    } else {
      $DvtSparkChartAutomation$$.splice(0, 0, this);
    }
    this.$_pieChart$ = $DvtSparkChartDefaults$$;
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartDefaults$$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$GetAnimationParams$, this.$SetAnimationParams$, this.$getDeletedAnimationParams$());
    $DvtSparkChartAutomation$$.$setOnEnd$(this.$_removeDeletedSlice$, this);
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0);
  };
  $DvtChartPieSlice$$.prototype.$_removeDeletedSlice$ = function $$DvtChartPieSlice$$$$$_removeDeletedSlice$$() {
    var $DvtSparkChartEventManager$$ = this.$_pieChart$.$_slices$, $DvtSparkChartDefaults$$ = $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtSparkChartEventManager$$, this);
    0 <= $DvtSparkChartDefaults$$ && $DvtSparkChartEventManager$$.splice($DvtSparkChartDefaults$$, 1);
  };
  $DvtChartPieSlice$$.prototype.$getDisplayables$ = function $$DvtChartPieSlice$$$$$getDisplayables$$() {
    var $dvt$$2$$ = [];
    this.$_topSurface$ && ($dvt$$2$$ = $dvt$$2$$.concat(this.$_topSurface$));
    this.$_leftSurface$ && ($dvt$$2$$ = $dvt$$2$$.concat(this.$_leftSurface$));
    this.$_rightSurface$ && ($dvt$$2$$ = $dvt$$2$$.concat(this.$_rightSurface$));
    this.$_crustSurface$ && ($dvt$$2$$ = $dvt$$2$$.concat(this.$_crustSurface$));
    this.$_sliceLabel$ && $dvt$$2$$.push(this.$_sliceLabel$);
    this.$_feelerRad$ && $dvt$$2$$.push(this.$_feelerRad$);
    this.$_feelerHoriz$ && $dvt$$2$$.push(this.$_feelerHoriz$);
    return $dvt$$2$$;
  };
  $DvtChartPieSlice$$.prototype.$getAriaLabel$ = function $$DvtChartPieSlice$$$$$getAriaLabel$$() {
    var $DvtSparkChartEventManager$$;
    $DvtSparkChartEventManager$$ = null == this.$_seriesIndex$ ? $DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$, !1) : $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, 0, null, !1);
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_PERCENTAGE", null), $DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$.$generateSliceLabelString$(this, "percent");
    $DvtSparkChartEventManager$$ += "; " + $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$]);
    $DvtSparkChartDefaults$$ = [];
    this.$isSelectable$() && $DvtSparkChartDefaults$$.push($dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
    $DvtChartEventUtils$$.$isDataItemDrillable$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$) && $DvtSparkChartDefaults$$.push($dvt$$2$$.$Bundle$.$getTranslation$(this.$_pieChart$.$getOptions$(), "stateDrillable", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
    return $dvt$$2$$.$Displayable$.$generateAriaLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartPieSlice$$.prototype.$_updateAriaLabel$ = function $$DvtChartPieSlice$$$$$_updateAriaLabel$$() {
    var $DvtSparkChartEventManager$$ = this.$getTopDisplayable$();
    $DvtSparkChartEventManager$$ && !$dvt$$2$$.$Agent$.$deferAriaCreation$() && $DvtSparkChartEventManager$$.$setAriaProperty$("label", this.$getAriaLabel$());
  };
  $DvtChartPieSlice$$.prototype.$getTopDisplayable$ = function $$DvtChartPieSlice$$$$$getTopDisplayable$$() {
    return this.$_topSurface$ && 0 < this.$_topSurface$.length ? this.$_topSurface$[0] : null;
  };
  $DvtChartPieSlice$$.prototype.$isSelectable$ = function $$DvtChartPieSlice$$$$$isSelectable$$() {
    return this.$_chart$.$isSelectionSupported$();
  };
  $DvtChartPieSlice$$.prototype.$isSelected$ = function $$DvtChartPieSlice$$$$$isSelected$$() {
    return this.$_selected$;
  };
  $DvtChartPieSlice$$.prototype.$setSelected$ = function $$DvtChartPieSlice$$$$$setSelected$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    (this.$_selected$ = $DvtSparkChartEventManager$$) ? this.$_pieChart$.$bringToFrontOfSelection$(this) : this.$_selecting$ || this.$_pieChart$.$pushToBackOfSelection$(this);
    if ($DvtChartStyleUtils$$.$isSelectionHighlighted$(this.$_chart$)) {
      for (var $DvtSparkChartAutomation$$ = this.$getDisplayables$(), $DvtChartRefObjUtils$$ = 0;$DvtChartRefObjUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartRefObjUtils$$++) {
        $DvtChartPieSlice$$.$_shapeIsSelectable$($DvtSparkChartAutomation$$[$DvtChartRefObjUtils$$]) && $DvtSparkChartAutomation$$[$DvtChartRefObjUtils$$].$setSelected$($DvtSparkChartEventManager$$);
      }
    }
    $DvtChartStyleUtils$$.$isSelectionExploded$(this.$_chart$) && ($DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$ ? 1 : 0, $DvtSparkChartDefaults$$ || "none" == $DvtChartStyleUtils$$.$getAnimationOnDataChange$(this.$_chart$) ? this.$setExplode$($DvtSparkChartAutomation$$) : ($DvtChartRefObjUtils$$ = new $dvt$$2$$.$CustomAnimation$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$() / 2), $DvtChartRefObjUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, 
    this, this.$getExplode$, this.$setExplode$, $DvtSparkChartAutomation$$), $DvtChartRefObjUtils$$.play()));
    this.$_updateAriaLabel$();
  };
  $DvtChartPieSlice$$.prototype.$showHoverEffect$ = function $$DvtChartPieSlice$$$$$showHoverEffect$$() {
    this.$_selecting$ = !0;
    this.$_pieChart$.$bringToFrontOfSelection$(this);
    for (var $dvt$$2$$ = this.$getDisplayables$(), $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $dvt$$2$$.length;$DvtSparkChartEventManager$$++) {
      $DvtChartPieSlice$$.$_shapeIsSelectable$($dvt$$2$$[$DvtSparkChartEventManager$$]) && $dvt$$2$$[$DvtSparkChartEventManager$$].$showHoverEffect$();
    }
  };
  $DvtChartPieSlice$$.prototype.$hideHoverEffect$ = function $$DvtChartPieSlice$$$$$hideHoverEffect$$() {
    this.$_selecting$ = !1;
    this.$_selected$ || this.$_pieChart$.$pushToBackOfSelection$(this);
    for (var $dvt$$2$$ = this.$getDisplayables$(), $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $dvt$$2$$.length;$DvtSparkChartEventManager$$++) {
      $DvtChartPieSlice$$.$_shapeIsSelectable$($dvt$$2$$[$DvtSparkChartEventManager$$]) && $dvt$$2$$[$DvtSparkChartEventManager$$].$hideHoverEffect$();
    }
  };
  $DvtChartPieSlice$$.prototype.$getDatatip$ = function $$DvtChartPieSlice$$$$$getDatatip$$($dvt$$2$$) {
    return $dvt$$2$$ == this.$_sliceLabel$ && this.$_sliceLabel$ && this.$_sliceLabel$.$isTruncated$() ? this.$_sliceLabelString$ : this.$getTooltip$();
  };
  $DvtChartPieSlice$$.prototype.$getDatatipColor$ = function $$DvtChartPieSlice$$$$$getDatatipColor$$() {
    return this.$getFillColor$();
  };
  $DvtChartPieSlice$$.prototype.$getCategories$ = function $$DvtChartPieSlice$$$$$getCategories$$() {
    return this.$_categories$ && 0 < this.$_categories$.length ? this.$_categories$ : [this.getId().$getSeries$()];
  };
  $DvtChartPieSlice$$.prototype.$getNextNavigable$ = function $$DvtChartPieSlice$$$$$getNextNavigable$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.keyCode;
    if ($DvtSparkChartEventManager$$.type == $dvt$$2$$.MouseEvent.$CLICK$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$SPACE$ && $DvtSparkChartEventManager$$.ctrlKey) {
      return this;
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$Agent$.$isRightToLeft$(this.$_chart$.$getCtx$());
    var $DvtSparkChartAutomation$$ = this.$_pieChart$.$_slices$, $DvtChartRefObjUtils$$ = $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtSparkChartAutomation$$, this), $DvtChartAxisUtils$$ = null;
    if ($DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$RIGHT_ARROW$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$DOWN_ARROW$ && !$DvtSparkChartEventManager$$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$UP_ARROW$ && $DvtSparkChartEventManager$$) {
      $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$ < $DvtSparkChartAutomation$$.length - 1 ? $DvtSparkChartAutomation$$[$DvtChartRefObjUtils$$ + 1] : $DvtSparkChartAutomation$$[0];
    } else {
      if ($DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$LEFT_ARROW$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$DOWN_ARROW$ && $DvtSparkChartEventManager$$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$UP_ARROW$ && !$DvtSparkChartEventManager$$) {
        $DvtChartAxisUtils$$ = 0 == $DvtChartRefObjUtils$$ ? $DvtSparkChartAutomation$$[$DvtSparkChartAutomation$$.length - 1] : $DvtSparkChartAutomation$$[$DvtChartRefObjUtils$$ - 1];
      }
    }
    return $DvtChartAxisUtils$$;
  };
  $DvtChartPieSlice$$.prototype.$getKeyboardBoundingBox$ = function $$DvtChartPieSlice$$$$$getKeyboardBoundingBox$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$getDisplayables$();
    return $DvtSparkChartDefaults$$[0] ? $DvtSparkChartDefaults$$[0].$getDimensions$($DvtSparkChartEventManager$$) : new $dvt$$2$$.$Rectangle$(0, 0, 0, 0);
  };
  $DvtChartPieSlice$$.prototype.$getTargetElem$ = function $$DvtChartPieSlice$$$$$getTargetElem$$() {
    var $dvt$$2$$ = this.$getDisplayables$();
    return $dvt$$2$$[0] ? $dvt$$2$$[0].$getElem$() : null;
  };
  $DvtChartPieSlice$$.prototype.$showKeyboardFocusEffect$ = function $$DvtChartPieSlice$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    this.$showHoverEffect$();
  };
  $DvtChartPieSlice$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtChartPieSlice$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    this.$hideHoverEffect$();
  };
  $DvtChartPieSlice$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtChartPieSlice$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtChartPieSlice$$.prototype.$isDragAvailable$ = function $$DvtChartPieSlice$$$$$isDragAvailable$$() {
    return !0;
  };
  $DvtChartPieSlice$$.prototype.$getDragTransferable$ = function $$DvtChartPieSlice$$$$$getDragTransferable$$() {
    return [this.getId()];
  };
  $DvtChartPieSlice$$.prototype.$getDragFeedback$ = function $$DvtChartPieSlice$$$$$getDragFeedback$$() {
    if (this.$_chart$.$isSelectionSupported$() && 1 < this.$_chart$.$getSelectionHandler$().$_selection$.length) {
      for (var $dvt$$2$$ = this.$_chart$.$getSelectionHandler$().getSelection(), $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
        $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.concat($dvt$$2$$[$DvtSparkChartDefaults$$].$getDisplayables$());
      }
      return $DvtSparkChartEventManager$$;
    }
    return this.$getDisplayables$();
  };
  $DvtChartPieSlice$$.prototype.$getExplode$ = function $$DvtChartPieSlice$$$$$getExplode$$() {
    return this.$_explode$;
  };
  $DvtChartPieSlice$$.prototype.$setExplode$ = function $$DvtChartPieSlice$$$$$setExplode$$($dvt$$2$$) {
    this.$_explode$ = $dvt$$2$$;
    this.$_explodeSlice$();
  };
  $DvtChartPieSlice$$.prototype.$getSeriesLabel$ = function $$DvtChartPieSlice$$$$$getSeriesLabel$$() {
    return this.$_seriesLabel$;
  };
  $DvtChartPieSlice$$.prototype.$getFillColor$ = function $$DvtChartPieSlice$$$$$getFillColor$$() {
    return this.$_fillColor$;
  };
  $DvtChartPieSlice$$.prototype.$getFillPattern$ = function $$DvtChartPieSlice$$$$$getFillPattern$$() {
    return this.$_fillPattern$;
  };
  $DvtChartPieSlice$$.prototype.$getStrokeColor$ = function $$DvtChartPieSlice$$$$$getStrokeColor$$() {
    return this.$_strokeColor$;
  };
  $DvtChartPieSlice$$.prototype.$getBorderWidth$ = function $$DvtChartPieSlice$$$$$getBorderWidth$$() {
    return this.$_borderWidth$;
  };
  $DvtChartPieSlice$$.prototype.$getSliceGaps$ = function $$DvtChartPieSlice$$$$$getSliceGaps$$() {
    return 0 == this.$_depth$ ? 3 * $DvtChartStyleUtils$$.$getDataItemGaps$(this.$_chart$) : 0;
  };
  $DvtChartPieSlice$$.prototype.$getInnerRadius$ = function $$DvtChartPieSlice$$$$$getInnerRadius$$() {
    return this.$_pieChart$.$getInnerRadius$();
  };
  $DvtChartPieSlice$$.prototype.$getTooltip$ = function $$DvtChartPieSlice$$$$$getTooltip$$() {
    return null == this.$_seriesIndex$ ? $DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$, !0) : $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, 0, null, !0);
  };
  $DvtChartPieSlice$$.prototype.$getAction$ = function $$DvtChartPieSlice$$$$$getAction$$() {
    return this.$_action$;
  };
  $DvtChartPieSlice$$.prototype.$isDrillable$ = function $$DvtChartPieSlice$$$$$isDrillable$$() {
    return this.$_drillable$;
  };
  $DvtChartPieSlice$$.prototype.$getShowPopupBehaviors$ = function $$DvtChartPieSlice$$$$$getShowPopupBehaviors$$() {
    return this.$_showPopupBehaviors$;
  };
  $DvtChartPieSlice$$.$createFillerSlice$ = function $$DvtChartPieSlice$$$$createFillerSlice$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = new $DvtChartPieSlice$$($dvt$$2$$);
    $DvtSparkChartDefaults$$.$_value$ = $DvtSparkChartEventManager$$;
    $DvtSparkChartDefaults$$.$_bFillerSlice$ = !0;
    $DvtSparkChartDefaults$$.$_centerX$ = $dvt$$2$$.$getCenter$().x;
    $DvtSparkChartDefaults$$.$_centerY$ = $dvt$$2$$.$getCenter$().y;
    $DvtSparkChartDefaults$$.$_fillColor$ = "rgba(255,255,255,0)";
    $DvtSparkChartDefaults$$.$_strokeColor$ = "rgba(255,255,255,0)";
    $DvtSparkChartDefaults$$.$_id$ = new $DvtChartDataItem$$(null, null, null);
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartPieSlice$$.prototype.$getSeriesIndex$ = function $$DvtChartPieSlice$$$$$getSeriesIndex$$() {
    return this.$_seriesIndex$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAnimOnDisplay$$, $dvt$$2$$.$Obj$);
  $DvtChartAnimOnDisplay$$.$createAnimation$ = function $$DvtChartAnimOnDisplay$$$$createAnimation$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartDefaults$$ = [];
    if ($DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$)) {
      $DvtChartAnimOnDisplay$$.$_animBarLineArea$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$);
    } else {
      if ($DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isPyramid$($DvtSparkChartEventManager$$)) {
        $DvtChartAnimOnDisplay$$.$_animBubbleScatterFunnelPyramid$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$);
      } else {
        if ($DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) && $DvtSparkChartEventManager$$.$pieChart$) {
          return $DvtSparkChartEventManager$$.$pieChart$.$getDisplayAnimation$();
        }
      }
    }
    return 0 < $DvtSparkChartDefaults$$.length ? new $dvt$$2$$.$ParallelPlayable$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartDefaults$$) : null;
  };
  $DvtChartAnimOnDisplay$$.$_animBarLineArea$ = function $$DvtChartAnimOnDisplay$$$$_animBarLineArea$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$getChartObjPeers$(), $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$ ? $DvtChartRefObjUtils$$.length : 0;
    if ($DvtChartAxisUtils$$) {
      for (var $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtChartAxisUtils$$;$DvtChartPieRenderUtils$$++) {
        $DvtChartPieLabelInfo$$ = $DvtChartRefObjUtils$$[$DvtChartPieRenderUtils$$];
        $DvtChartPieLabelUtils$$ = $DvtChartPieLabelInfo$$.$getDisplayables$()[0];
        var $DvtChartDataChangePyramidSlice$$ = $DvtChartPieLabelInfo$$.$getSeriesType$();
        $DvtChartPieLabelInfo$$ = null;
        if ($DvtChartPieLabelUtils$$ instanceof $DvtChartBar$$ || $DvtChartPieLabelUtils$$ instanceof $DvtChartPolarBar$$ || $DvtChartPieLabelUtils$$ instanceof $DvtChartCandlestick$$ || $DvtChartPieLabelUtils$$ instanceof $DvtChartBoxAndWhisker$$) {
          $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.$getDisplayAnimation$($DvtSparkChartDefaults$$);
        } else {
          if ($DvtChartPieLabelUtils$$ instanceof $DvtChartLineArea$$) {
            $DvtChartPieLabelInfo$$ = "line" == $DvtChartDataChangePyramidSlice$$ ? $DvtChartAnimOnDisplay$$.$_getLinePlayable$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$) : $DvtChartAnimOnDisplay$$.$_getAreaPlayable$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$);
          } else {
            if ($DvtChartPieLabelUtils$$ instanceof $dvt$$2$$.$SimpleMarker$ || $DvtChartPieLabelUtils$$ instanceof $DvtChartRangeMarker$$) {
              if ($DvtChartPieLabelUtils$$ instanceof $DvtChartLineMarker$$ && !$DvtChartPieLabelUtils$$.$isSelected$()) {
                continue;
              }
              $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$AnimFadeIn$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$ - .8, .8);
            }
          }
        }
        $DvtChartPieLabelInfo$$ && $DvtSparkChartAutomation$$.push($DvtChartPieLabelInfo$$);
      }
    }
  };
  $DvtChartAnimOnDisplay$$.$_animBubbleScatterFunnelPyramid$ = function $$DvtChartAnimOnDisplay$$$$_animBubbleScatterFunnelPyramid$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$getObjects$(), $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$ ? $DvtChartRefObjUtils$$.length : 0;
    if ($DvtChartAxisUtils$$) {
      for (var $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtChartAxisUtils$$;$DvtChartPieRenderUtils$$++) {
        $DvtChartPieLabelUtils$$ = $DvtChartRefObjUtils$$[$DvtChartPieRenderUtils$$];
        $DvtChartPieLabelUtils$$ = $DvtChartPieLabelUtils$$.$getDisplayables$()[0];
        if ($DvtChartPieLabelUtils$$ instanceof $dvt$$2$$.$SimpleMarker$) {
          $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$AnimPopIn$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieLabelUtils$$, !0, $DvtSparkChartDefaults$$);
        } else {
          if ($DvtChartPieLabelUtils$$ instanceof $DvtChartFunnelSlice$$ || $DvtChartPieLabelUtils$$ instanceof $DvtChartPyramidSlice$$) {
            $DvtChartPieLabelInfo$$ = $DvtChartAnimOnDisplay$$.$_getFunnelPyramidPlayable$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$);
          }
        }
        $DvtChartPieLabelInfo$$ && $DvtSparkChartAutomation$$.push($DvtChartPieLabelInfo$$);
      }
    }
  };
  $DvtChartAnimOnDisplay$$.$_getAreaPlayable$ = function $$DvtChartAnimOnDisplay$$$$_getAreaPlayable$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$getCtx$(), $DvtChartAxisUtils$$ = $DvtSparkChartDefaults$$.$_baseline$, $DvtChartPieLabelUtils$$;
    if ($DvtSparkChartDefaults$$.$isArea$()) {
      var $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.$_arBaseCoord$;
      $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.$getBaseAnimationParams$();
      for (var $DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$.slice(0), $DvtChartDataChangePyramidSlice$$ = 0;$DvtChartDataChangePyramidSlice$$ < $DvtChartPieLabelUtils$$.length;$DvtChartDataChangePyramidSlice$$++) {
        if (1 == $DvtChartDataChangePyramidSlice$$ % 4 || 2 == $DvtChartDataChangePyramidSlice$$ % 4) {
          $DvtChartPieLabelUtils$$[$DvtChartDataChangePyramidSlice$$] = $DvtChartAxisUtils$$;
        }
      }
      $DvtSparkChartDefaults$$.$setBaseAnimationParams$($DvtChartPieLabelUtils$$);
      $DvtChartPieLabelUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtChartRefObjUtils$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      $DvtChartPieLabelUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getBaseAnimationParams$, $DvtSparkChartDefaults$$.$setBaseAnimationParams$, $DvtChartPieRenderUtils$$);
    }
    for (var $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$.$_arCoord$, $DvtChartRangeMarker$$ = $DvtSparkChartDefaults$$.$getAnimationParams$(), $DvtChartPieRenderUtils$$ = $DvtChartRangeMarker$$.slice(0), $DvtChartDataChangePyramidSlice$$ = 0;$DvtChartDataChangePyramidSlice$$ < $DvtChartRangeMarker$$.length;$DvtChartDataChangePyramidSlice$$++) {
      if (1 == $DvtChartDataChangePyramidSlice$$ % 4 || 2 == $DvtChartDataChangePyramidSlice$$ % 4) {
        $DvtChartRangeMarker$$[$DvtChartDataChangePyramidSlice$$] = $DvtChartAxisUtils$$;
      }
    }
    $DvtSparkChartDefaults$$.$setAnimationParams$($DvtChartRangeMarker$$);
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$($DvtChartRefObjUtils$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getAnimationParams$, $DvtSparkChartDefaults$$.$setAnimationParams$, $DvtChartPieRenderUtils$$);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$ParallelPlayable$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$.$setOnEnd$(function() {
      $DvtSparkChartDefaults$$.$setCoords$($DvtChartSeriesEffectUtils$$, $DvtChartPieLabelInfo$$);
    });
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartAnimOnDisplay$$.$_getFunnelPyramidPlayable$ = function $$DvtChartAnimOnDisplay$$$$_getFunnelPyramidPlayable$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$getCtx$(), $DvtChartAxisUtils$$ = $DvtSparkChartDefaults$$.$getAnimationParams$(), $DvtChartPieLabelUtils$$ = $DvtChartAxisUtils$$.slice(0), $DvtChartPieLabelInfo$$ = $DvtChartAxisUtils$$.slice(0);
    $DvtChartAxisUtils$$[0] = 0;
    $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$) && ($DvtChartAxisUtils$$[2] = 0, $DvtChartPieLabelUtils$$[2] = 0);
    $DvtSparkChartDefaults$$.$setAnimationParams$($DvtChartAxisUtils$$);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$($DvtChartRefObjUtils$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ / 2);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getAnimationParams$, $DvtSparkChartDefaults$$.$setAnimationParams$, $DvtChartPieLabelUtils$$);
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$($DvtChartRefObjUtils$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ / 2);
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getAnimationParams$, $DvtSparkChartDefaults$$.$setAnimationParams$, $DvtChartPieLabelInfo$$);
    return new $dvt$$2$$.$SequentialPlayable$($DvtChartRefObjUtils$$, [$DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$]);
  };
  $DvtChartAnimOnDisplay$$.$_getLinePlayable$ = function $$DvtChartAnimOnDisplay$$$$_getLinePlayable$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$.$_arCoord$, $DvtChartAxisUtils$$ = $DvtSparkChartDefaults$$.$getAnimationParams$(), $DvtChartPieLabelUtils$$ = $DvtChartAxisUtils$$.slice(0);
    $DvtChartAnimOnDisplay$$.$_getMeanPoints$($DvtChartAxisUtils$$);
    $DvtSparkChartDefaults$$.$setAnimationParams$($DvtChartAxisUtils$$);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getAnimationParams$, $DvtSparkChartDefaults$$.$setAnimationParams$, $DvtChartPieLabelUtils$$);
    $DvtSparkChartEventManager$$.$setOnEnd$(function() {
      $DvtSparkChartDefaults$$.$setCoords$($DvtChartRefObjUtils$$);
    });
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartAnimOnDisplay$$.$_getMeanPoints$ = function $$DvtChartAnimOnDisplay$$$$_getMeanPoints$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = 0, $DvtSparkChartDefaults$$ = Number.MAX_VALUE, $DvtSparkChartAutomation$$ = Number.MIN_VALUE, $DvtChartRefObjUtils$$ = $dvt$$2$$.length, $DvtChartAxisUtils$$;
    for ($DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtChartRefObjUtils$$;$DvtChartAxisUtils$$++) {
      var $DvtChartPieLabelUtils$$ = $dvt$$2$$[$DvtChartAxisUtils$$];
      0 != $DvtChartAxisUtils$$ % 4 && 3 != $DvtChartAxisUtils$$ % 4 && Infinity != $DvtChartPieLabelUtils$$ && ($DvtChartPieLabelUtils$$ < $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = $DvtChartPieLabelUtils$$), $DvtChartPieLabelUtils$$ > $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$), $DvtSparkChartEventManager$$ += $DvtChartPieLabelUtils$$);
    }
    $DvtSparkChartEventManager$$ = 8 < $DvtChartRefObjUtils$$ ? ($DvtSparkChartEventManager$$ - 2 * $DvtSparkChartDefaults$$ - 2 * $DvtSparkChartAutomation$$) / ($DvtChartRefObjUtils$$ / 2 - 4) : $DvtSparkChartEventManager$$ / ($DvtChartRefObjUtils$$ / 2);
    for ($DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtChartRefObjUtils$$;$DvtChartAxisUtils$$++) {
      if (1 == $DvtChartAxisUtils$$ % 4 || 2 == $DvtChartAxisUtils$$ % 4) {
        $dvt$$2$$[$DvtChartAxisUtils$$] = $DvtSparkChartEventManager$$;
      }
    }
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAnimOnDC$$, $dvt$$2$$.$Obj$);
  $DvtChartAnimOnDC$$.$createAnimation$ = function $$DvtChartAnimOnDC$$$$createAnimation$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    if (!$DvtChartAnimOnDC$$.$_canAnimate$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      return null;
    }
    $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getCtx$();
    var $DvtChartPieLabelUtils$$ = [], $DvtChartPieLabelInfo$$ = [];
    $DvtChartTypeUtils$$.$isPie$($DvtSparkChartDefaults$$) ? ($DvtChartPieLabelUtils$$.push($DvtSparkChartEventManager$$.$pieChart$), $DvtChartPieLabelInfo$$.push($DvtSparkChartDefaults$$.$pieChart$)) : $DvtChartAnimOnDC$$.$_buildAnimLists$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$, $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$);
    var $DvtChartPieRenderUtils$$;
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$DataAnimationHandler$($DvtSparkChartAutomation$$, $DvtChartAxisUtils$$);
    $DvtSparkChartEventManager$$.$constructAnimation$($DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$);
    0 < $DvtSparkChartEventManager$$.$_playables$.length && ($DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.$getAnimation$(!0));
    $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$getDataLabels$();
    if ($DvtChartPieRenderUtils$$ && 0 < $DvtSparkChartDefaults$$.length) {
      for ($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartEventManager$$++) {
        $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].$setAlpha$(0);
      }
      $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$SequentialPlayable$($DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$, new $dvt$$2$$.$AnimFadeIn$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$ / 4));
    }
    return $DvtChartPieRenderUtils$$;
  };
  $DvtChartAnimOnDC$$.$_buildAnimLists$ = function $$DvtChartAnimOnDC$$$$_buildAnimLists$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    var $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.$getChartObjPeers$(), $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$, $DvtChartStyleUtils$$, $DvtChartDataCursor$$;
    for ($DvtSparkChartEventManager$$ = 0;2 > $DvtSparkChartEventManager$$;$DvtSparkChartEventManager$$++) {
      for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartPieLabelInfo$$.length;$DvtChartPieLabelUtils$$++) {
        $DvtChartSeriesEffectUtils$$ = $DvtChartPieLabelInfo$$[$DvtChartPieLabelUtils$$];
        $DvtChartStyleUtils$$ = $DvtChartSeriesEffectUtils$$.$getDisplayables$()[0];
        $DvtChartDataCursor$$ = null;
        if ($DvtChartStyleUtils$$ instanceof $DvtChartFunnelSlice$$) {
          $DvtChartDataCursor$$ = new $DvtChartDataChangeFunnelSlice$$($DvtChartSeriesEffectUtils$$, $DvtChartAxisUtils$$);
        } else {
          if ($DvtChartStyleUtils$$ instanceof $DvtChartPyramidSlice$$) {
            $DvtChartDataCursor$$ = new $DvtChartDataChangePyramidSlice$$($DvtChartSeriesEffectUtils$$, $DvtChartAxisUtils$$);
          } else {
            if ($DvtChartStyleUtils$$ instanceof $DvtChartBar$$ || $DvtChartStyleUtils$$ instanceof $DvtChartPolarBar$$) {
              $DvtChartDataCursor$$ = new $DvtChartDataChangeBar$$($DvtChartSeriesEffectUtils$$, $DvtChartAxisUtils$$);
            } else {
              if ($DvtChartStyleUtils$$ instanceof $DvtChartLineArea$$) {
                $DvtChartDataCursor$$ = new $DvtChartDataChangeLineArea$$($DvtChartSeriesEffectUtils$$, $DvtChartAxisUtils$$);
              } else {
                if ($DvtChartStyleUtils$$ instanceof $dvt$$2$$.$SimpleMarker$) {
                  if ($DvtChartStyleUtils$$ instanceof $DvtChartLineMarker$$ && !$DvtChartStyleUtils$$.$isSelected$()) {
                    continue;
                  }
                  $DvtChartDataCursor$$ = new $DvtChartDataChangeMarker$$($DvtChartSeriesEffectUtils$$, $DvtChartAxisUtils$$);
                } else {
                  if ($DvtChartStyleUtils$$ instanceof $DvtChartRangeMarker$$) {
                    if ($DvtChartStyleUtils$$.$_isInvisible$ && !$DvtChartStyleUtils$$.$isSelected$()) {
                      continue;
                    }
                    $DvtChartDataCursor$$ = new $DvtChartDataChangeRangeMarker$$($DvtChartSeriesEffectUtils$$, $DvtChartAxisUtils$$);
                  } else {
                    $DvtChartStyleUtils$$ instanceof $DvtChartCandlestick$$ ? $DvtChartDataCursor$$ = new $DvtChartDataChangeAbstract$$($DvtChartSeriesEffectUtils$$, $DvtChartAxisUtils$$) : $DvtChartStyleUtils$$ instanceof $DvtChartBoxAndWhisker$$ && ($DvtChartDataCursor$$ = new $DvtChartDataChangeBoxAndWhisker$$($DvtChartSeriesEffectUtils$$, $DvtChartAxisUtils$$));
                  }
                }
              }
            }
          }
        }
        $DvtChartDataCursor$$ && ($DvtChartPieRenderUtils$$.push($DvtChartDataCursor$$), $DvtChartDataCursor$$.$setOldChart$($DvtSparkChartDefaults$$));
      }
      $DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$;
      $DvtChartPieLabelInfo$$ = $DvtChartRefObjUtils$$.$getChartObjPeers$();
    }
  };
  $DvtChartAnimOnDC$$.$_canAnimate$ = function $$DvtChartAnimOnDC$$$$_canAnimate$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtChartTypeUtils$$.$isPie$($dvt$$2$$) && $DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) ? $dvt$$2$$ && $DvtSparkChartEventManager$$ : $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) != $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$) ? !1 : $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$) ? !0 : $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) && $DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartEventManager$$) ? 
    !0 : $dvt$$2$$.$getType$() == $DvtSparkChartEventManager$$.$getType$() ? !0 : !1;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChange$$, $dvt$$2$$.$Chart$);
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeAbstract$$, $dvt$$2$$.$Obj$);
  $DvtChartDataChangeAbstract$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeAbstract$$$$$animateUpdate$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$_shape$;
    this.$_shape$ && this.$_shape$.$getUpdateAnimation$ && $dvt$$2$$.add(this.$_shape$.$getUpdateAnimation$(this.$_updateDuration$, $DvtSparkChartDefaults$$), 1);
  };
  $DvtChartDataChangeAbstract$$.prototype.$animateInsert$ = function $$DvtChartDataChangeAbstract$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    if (this.$_shape$ && this.$_shape$.$getInsertAnimation$) {
      $DvtSparkChartEventManager$$.add(this.$_shape$.$getInsertAnimation$(this.$_insertDuration$), 2);
    } else {
      var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$AnimFadeIn$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
      $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 0);
    }
  };
  $DvtChartDataChangeAbstract$$.prototype.$animateDelete$ = function $$DvtChartDataChangeAbstract$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$.$addChild$(this.$_shape$);
    if (this.$_shape$ && this.$_shape$.$getDeleteAnimation$) {
      $DvtSparkChartEventManager$$.add(this.$_shape$.$getDeleteAnimation$(this.$_deleteDuration$), 0);
    } else {
      var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$AnimFadeOut$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
      $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0);
    }
  };
  $DvtChartDataChangeAbstract$$.prototype.getId = function $$DvtChartDataChangeAbstract$$$$getId$() {
    return this.$_animId$;
  };
  $DvtChartDataChangeAbstract$$.prototype.Init = function $$DvtChartDataChangeAbstract$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_peer$ = $dvt$$2$$;
    this.$_updateDuration$ = .75 * $DvtSparkChartEventManager$$;
    this.$_insertDuration$ = .5 * $DvtSparkChartEventManager$$;
    this.$_deleteDuration$ = .5 * $DvtSparkChartEventManager$$;
    this.$_shape$ = $dvt$$2$$.$getDisplayables$()[0];
    this.$_animId$ = $dvt$$2$$.$getSeries$() + "/" + $dvt$$2$$.$getGroup$();
  };
  $DvtChartDataChangeAbstract$$.prototype.$setOldChart$ = function $$DvtChartDataChangeAbstract$$$$$setOldChart$$($dvt$$2$$) {
    this.$_oldChart$ = $dvt$$2$$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeBar$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangeBar$$.prototype.Init = function $$DvtChartDataChangeBar$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangeBar$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_indicator$ = null;
    this.$_animId$ += "/bar";
  };
  $DvtChartDataChangeBar$$.prototype.$animateInsert$ = function $$DvtChartDataChangeBar$$$$$animateInsert$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_shape$.$getInsertAnimation$(this.$_insertDuration$);
    $dvt$$2$$.add($DvtSparkChartEventManager$$, 2);
  };
  $DvtChartDataChangeBar$$.prototype.$animateDelete$ = function $$DvtChartDataChangeBar$$$$$animateDelete$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$.$addChild$(this.$_shape$);
    var $DvtSparkChartDefaults$$ = this.$_shape$.$getDeleteAnimation$(this.$_deleteDuration$);
    $dvt$$2$$.add($DvtSparkChartDefaults$$, 0);
  };
  $DvtChartDataChangeBar$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeBar$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = this.$_oldChart$, $DvtChartRefObjUtils$$ = this.$_peer$.$_chart$, $DvtChartAxisUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartAutomation$$) != $DvtChartTypeUtils$$.$isHorizontal$($DvtChartRefObjUtils$$), $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.$_getAnimationParams$($DvtChartAxisUtils$$), $DvtChartAxisUtils$$ = this.$_getAnimationParams$(), $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.$_shape$.$isSelected$() || this.$_shape$.$isSelected$(), 
    $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.$_shape$.$getPrimaryFill$().clone(), $DvtChartDataChangePyramidSlice$$ = this.$_shape$.$getPrimaryFill$();
    if (!$dvt$$2$$.$ArrayUtils$.$equals$($DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$) || !$DvtChartPieRenderUtils$$.$equals$($DvtChartDataChangePyramidSlice$$)) {
      var $DvtChartSeriesEffectUtils$$ = this.$_peer$.$getSeriesIndex$(), $DvtChartRangeMarker$$ = $DvtSparkChartDefaults$$.$_peer$.$getSeriesIndex$(), $DvtChartPolarBar$$ = this.$_peer$.$getGroupIndex$(), $DvtChartFunnelSlice$$ = $DvtSparkChartDefaults$$.$_peer$.$getGroupIndex$();
      "none" !== $DvtChartStyleUtils$$.$getAnimationIndicators$($DvtChartRefObjUtils$$) && (this.$_indicator$ = $DvtChartDataChangeUtils$$.$makeIndicator$($DvtSparkChartAutomation$$, $DvtChartRangeMarker$$, $DvtChartFunnelSlice$$, $DvtChartRefObjUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPolarBar$$));
      this.$_setAnimationParams$($DvtChartPieLabelUtils$$);
      $DvtChartPieLabelInfo$$ || this.$_shape$.$setFill$($DvtChartPieRenderUtils$$);
      $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
      $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, $DvtChartAxisUtils$$);
      $DvtChartPieLabelInfo$$ || $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_FILL$, this.$_shape$, this.$_shape$.$getFill$, this.$_shape$.$setFill$, $DvtChartDataChangePyramidSlice$$);
      this.$_indicator$ && ($DvtSparkChartAutomation$$.$setOnEnd$(this.$_onEndAnimation$, this), this.$_indicator$.$setAlpha$(0));
      $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 1);
    }
  };
  $DvtChartDataChangeBar$$.prototype.$_getAnimationParams$ = function $$DvtChartDataChangeBar$$$$$_getAnimationParams$$($dvt$$2$$) {
    return this.$_shape$.$getAnimationParams$($dvt$$2$$);
  };
  $DvtChartDataChangeBar$$.prototype.$_setAnimationParams$ = function $$DvtChartDataChangeBar$$$$$_setAnimationParams$$($dvt$$2$$) {
    this.$_shape$.$setAnimationParams$($dvt$$2$$, this.$_indicator$);
  };
  $DvtChartDataChangeBar$$.prototype.$_onEndAnimation$ = function $$DvtChartDataChangeBar$$$$$_onEndAnimation$$() {
    this.$_indicator$.getParent().removeChild(this.$_indicator$);
    this.$_indicator$ = null;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeBoxAndWhisker$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangeBoxAndWhisker$$.prototype.Init = function $$DvtChartDataChangeBoxAndWhisker$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangeBoxAndWhisker$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_animId$ += "/boxAndWhisker";
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeLineArea$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangeLineArea$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeLineArea$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.$_baseCoords$ = this.$_shape$.$_arBaseCoord$;
    this.$_coords$ = this.$_shape$.$_arCoord$;
    var $DvtSparkChartAutomation$$ = this.$_shape$.$isArea$(), $DvtChartRefObjUtils$$ = this.$_oldChart$, $DvtChartAxisUtils$$ = this.$_chart$, $DvtChartPieLabelUtils$$ = this.$_peer$.$getSeriesIndex$(), $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.$_peer$.$getSeriesIndex$(), $DvtChartPieRenderUtils$$ = this.$_shape$.$getCommonGroupIndices$($DvtSparkChartDefaults$$.$_shape$), $DvtChartDataChangePyramidSlice$$ = $DvtSparkChartDefaults$$.$_shape$.$getCommonGroupIndices$(this.$_shape$), $DvtChartSeriesEffectUtils$$;
    if ($DvtSparkChartAutomation$$) {
      var $DvtChartRangeMarker$$ = $DvtSparkChartDefaults$$.$_getBaseAnimationParams$(this.$_shape$), $DvtChartPolarBar$$ = this.$_getBaseAnimationParams$($DvtSparkChartDefaults$$.$_shape$);
      $DvtChartDataChangeLineArea$$.$_matchGroupIndices$($DvtChartRangeMarker$$, $DvtChartPolarBar$$);
      $dvt$$2$$.$ArrayUtils$.$equals$($DvtChartRangeMarker$$, $DvtChartPolarBar$$) || (this.$_setBaseAnimationParams$($DvtChartRangeMarker$$), $DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$CustomAnimation$(this.$_context$, this, this.$_updateDuration$), $DvtChartSeriesEffectUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getBaseAnimationParams$, this.$_setBaseAnimationParams$, $DvtChartPolarBar$$));
    }
    var $DvtChartFunnelSlice$$, $DvtChartRangeMarker$$ = $DvtSparkChartDefaults$$.$_getAnimationParams$(this.$_shape$), $DvtChartPolarBar$$ = this.$_getAnimationParams$($DvtSparkChartDefaults$$.$_shape$);
    $DvtChartDataChangeLineArea$$.$_matchGroupIndices$($DvtChartRangeMarker$$, $DvtChartPolarBar$$);
    $dvt$$2$$.$ArrayUtils$.$equals$($DvtChartRangeMarker$$, $DvtChartPolarBar$$) || (this.$_setAnimationParams$($DvtChartRangeMarker$$), $DvtChartFunnelSlice$$ = new $dvt$$2$$.$CustomAnimation$(this.$_context$, this, this.$_updateDuration$), $DvtChartFunnelSlice$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, $DvtChartPolarBar$$));
    if ("none" !== $DvtChartStyleUtils$$.$getAnimationIndicators$($DvtChartAxisUtils$$) && (!$DvtSparkChartAutomation$$ || "lineWithArea" != this.$_peer$.$getSeriesType$())) {
      for ($DvtChartPolarBar$$ = 0;$DvtChartPolarBar$$ < $DvtChartPieRenderUtils$$.length;$DvtChartPolarBar$$++) {
        $DvtSparkChartAutomation$$ = $DvtChartDataChangeUtils$$.$getDirection$($DvtChartRefObjUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangePyramidSlice$$[$DvtChartPolarBar$$], $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$[$DvtChartPolarBar$$]), ($DvtChartRangeMarker$$ = $DvtChartDataChangeUtils$$.$makeIndicator$($DvtChartRefObjUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangePyramidSlice$$[$DvtChartPolarBar$$], $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, 
        $DvtChartPieRenderUtils$$[$DvtChartPolarBar$$])) && this.$_shape$.$addIndicator$($DvtChartPieRenderUtils$$[$DvtChartPolarBar$$], $DvtSparkChartAutomation$$, $DvtChartRangeMarker$$);
      }
    }
    if ($DvtChartSeriesEffectUtils$$ || $DvtChartFunnelSlice$$) {
      $DvtChartRefObjUtils$$ = new $dvt$$2$$.$ParallelPlayable$(this.$_context$, $DvtChartSeriesEffectUtils$$, $DvtChartFunnelSlice$$), $DvtChartRefObjUtils$$.$setOnEnd$(this.$_onAnimationEnd$, this), $DvtSparkChartEventManager$$.add($DvtChartRefObjUtils$$, 1);
    }
  };
  $DvtChartDataChangeLineArea$$.prototype.$animateInsert$ = function $$DvtChartDataChangeLineArea$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    this.$_shape$.$setAlpha$(0);
    var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$AnimFadeIn$(this.$_context$, this.$_shape$, this.$_insertDuration$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 2);
  };
  $DvtChartDataChangeLineArea$$.prototype.$animateDelete$ = function $$DvtChartDataChangeLineArea$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$;
    "area" == $DvtChartStyleUtils$$.$getSeriesType$(this.$_oldChart$, this.$_peer$.$getSeriesIndex$()) ? ($DvtSparkChartAutomation$$ = this.$_chart$.$_areaContainer$, this.$_deletedAreas$ = this.$_shape$.getParent().getParent(), $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$.$addChild$(this.$_deletedAreas$), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$AnimFadeOut$(this.$_context$, this.$_deletedAreas$, this.$_deleteDuration$), $DvtSparkChartAutomation$$.$setOnEnd$(this.$_removeDeletedAreas$, 
    this), $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0))) : ($DvtSparkChartDefaults$$.$addChild$(this.$_shape$), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$AnimFadeOut$(this.$_context$, this.$_shape$, this.$_deleteDuration$), $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0));
  };
  $DvtChartDataChangeLineArea$$.prototype.$_removeDeletedAreas$ = function $$DvtChartDataChangeLineArea$$$$$_removeDeletedAreas$$() {
    var $dvt$$2$$ = this.$_chart$.$_areaContainer$;
    $dvt$$2$$ && $dvt$$2$$.removeChild(this.$_deletedAreas$);
  };
  $DvtChartDataChangeLineArea$$.prototype.$_getAnimationParams$ = function $$DvtChartDataChangeLineArea$$$$$_getAnimationParams$$($dvt$$2$$) {
    return this.$_shape$.$getAnimationParams$($dvt$$2$$);
  };
  $DvtChartDataChangeLineArea$$.prototype.$_setAnimationParams$ = function $$DvtChartDataChangeLineArea$$$$$_setAnimationParams$$($dvt$$2$$) {
    this.$_shape$.$setAnimationParams$($dvt$$2$$);
  };
  $DvtChartDataChangeLineArea$$.prototype.$_getBaseAnimationParams$ = function $$DvtChartDataChangeLineArea$$$$$_getBaseAnimationParams$$($dvt$$2$$) {
    return this.$_shape$.$getBaseAnimationParams$($dvt$$2$$);
  };
  $DvtChartDataChangeLineArea$$.prototype.$_setBaseAnimationParams$ = function $$DvtChartDataChangeLineArea$$$$$_setBaseAnimationParams$$($dvt$$2$$) {
    this.$_shape$.$setBaseAnimationParams$($dvt$$2$$);
  };
  $DvtChartDataChangeLineArea$$.prototype.$_onAnimationEnd$ = function $$DvtChartDataChangeLineArea$$$$$_onAnimationEnd$$() {
    this.$_shape$.$removeIndicators$();
    this.$_shape$.$setCoords$(this.$_coords$, this.$_baseCoords$);
  };
  $DvtChartDataChangeLineArea$$.$_matchGroupIndices$ = function $$DvtChartDataChangeLineArea$$$$_matchGroupIndices$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = 3;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$ += 4) {
      $dvt$$2$$[$DvtSparkChartDefaults$$] = $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$];
    }
  };
  $DvtChartDataChangeLineArea$$.prototype.Init = function $$DvtChartDataChangeLineArea$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangeLineArea$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_context$ = this.$_shape$.$getCtx$();
    this.$_chart$ = this.$_peer$.$_chart$;
    this.$_animId$ += "/" + (this.$_shape$.$isArea$() ? "area" : "line");
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeMarker$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangeMarker$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeMarker$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$_shape$.$getCenterDimensions$(), $DvtChartRefObjUtils$$ = this.$_shape$.$getCenterDimensions$();
    if (!$DvtChartRefObjUtils$$.$equals$($DvtSparkChartAutomation$$)) {
      this.$_shape$.$setCenterDimensions$($DvtSparkChartAutomation$$);
      var $DvtChartAxisUtils$$ = new $dvt$$2$$.$CustomAnimation$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
      $DvtChartAxisUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_RECTANGLE$, this.$_shape$, this.$_shape$.$getCenterDimensions$, this.$_shape$.$setCenterDimensions$, $DvtChartRefObjUtils$$);
      var $DvtChartPieLabelUtils$$ = this.$_peer$.$_chart$;
      this.$isValueChange$($DvtSparkChartDefaults$$) && "none" != $DvtChartStyleUtils$$.$getAnimationIndicators$($DvtChartPieLabelUtils$$) && $DvtChartTypeUtils$$.$isScatterBubble$($DvtChartPieLabelUtils$$) && ($DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.$_shape$, $DvtChartPieLabelUtils$$.$setSolidFill$("#FFFF2B", .9), $DvtChartPieLabelUtils$$.$setCenterDimensions$($DvtSparkChartAutomation$$), this.$_peer$.$_chart$.$getPlotArea$().$addChild$($DvtChartPieLabelUtils$$), $DvtChartAxisUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_RECTANGLE$, 
      $DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$.$getCenterDimensions$, $DvtChartPieLabelUtils$$.$setCenterDimensions$, $DvtChartRefObjUtils$$), $DvtChartAxisUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$.$getAlpha$, $DvtChartPieLabelUtils$$.$setAlpha$, 0), this.$_overlay$ = $DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$.$setOnEnd$(this.$_onEndAnimation$, this));
      $DvtSparkChartEventManager$$.add($DvtChartAxisUtils$$, 1);
    }
  };
  $DvtChartDataChangeMarker$$.prototype.$animateInsert$ = function $$DvtChartDataChangeMarker$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    this.$_shape$.$setAlpha$(0);
    var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$AnimFadeIn$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 2);
  };
  $DvtChartDataChangeMarker$$.prototype.$animateDelete$ = function $$DvtChartDataChangeMarker$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$.$addChild$(this.$_shape$);
    var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$AnimFadeOut$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0);
  };
  $DvtChartDataChangeMarker$$.prototype.$isValueChange$ = function $$DvtChartDataChangeMarker$$$$$isValueChange$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = !1;
    if ($dvt$$2$$) {
      var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_peer$.$getSeriesIndex$(), $DvtSparkChartDefaults$$ = $dvt$$2$$.$_peer$.$getGroupIndex$(), $DvtSparkChartAutomation$$ = this.$_peer$.$getSeriesIndex$(), $DvtChartRefObjUtils$$ = this.$_peer$.$getGroupIndex$();
      $dvt$$2$$ = $dvt$$2$$.$_oldChart$.$getOptions$();
      var $DvtChartAxisUtils$$ = this.$_peer$.$_chart$.$getOptions$(), $DvtChartPieLabelUtils$$ = $dvt$$2$$.series[$DvtSparkChartEventManager$$].items[$DvtSparkChartDefaults$$].y, $DvtChartPieLabelInfo$$ = $dvt$$2$$.series[$DvtSparkChartEventManager$$].items[$DvtSparkChartDefaults$$].z, $DvtChartPieRenderUtils$$ = $DvtChartAxisUtils$$.series[$DvtSparkChartAutomation$$].items[$DvtChartRefObjUtils$$].y, $DvtChartDataChangePyramidSlice$$ = $DvtChartAxisUtils$$.series[$DvtSparkChartAutomation$$].items[$DvtChartRefObjUtils$$].z, 
      $DvtSparkChartEventManager$$ = $DvtChartAxisUtils$$.series[$DvtSparkChartAutomation$$].items[$DvtChartRefObjUtils$$].x !== $dvt$$2$$.series[$DvtSparkChartEventManager$$].items[$DvtSparkChartDefaults$$].x || $DvtChartPieRenderUtils$$ !== $DvtChartPieLabelUtils$$ || $DvtChartDataChangePyramidSlice$$ !== $DvtChartPieLabelInfo$$;
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartDataChangeMarker$$.prototype.$_onEndAnimation$ = function $$DvtChartDataChangeMarker$$$$$_onEndAnimation$$() {
    this.$_overlay$ && (this.$_peer$.$_chart$.$getPlotArea$().removeChild(this.$_overlay$), this.$_overlay$ = null);
  };
  $DvtChartDataChangeMarker$$.prototype.Init = function $$DvtChartDataChangeMarker$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangeMarker$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_animId$ += "/marker";
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangeRangeMarker$$.prototype.Init = function $$DvtChartDataChangeRangeMarker$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangeRangeMarker$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_animId$ += "/rangeMarker";
  };
  $DvtChartDataChangeRangeMarker$$.prototype.$animateInsert$ = function $$DvtChartDataChangeRangeMarker$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    this.$_shape$.$setAlpha$(0);
    var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$AnimFadeIn$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 2);
  };
  $DvtChartDataChangeRangeMarker$$.prototype.$animateDelete$ = function $$DvtChartDataChangeRangeMarker$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$.$addChild$(this.$_shape$);
    var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$AnimFadeOut$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0);
  };
  $DvtChartDataChangeRangeMarker$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeRangeMarker$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$_shape$.$getAnimationParams$(), $DvtChartRefObjUtils$$ = this.$_shape$.$getAnimationParams$();
    this.$_shape$.$setAnimationParams$($DvtSparkChartAutomation$$);
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_shape$, this.$_shape$.$getAnimationParams$, this.$_shape$.$setAnimationParams$, $DvtChartRefObjUtils$$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 1);
  };
  var $DvtChartDataChangeUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartDataChangeUtils$$.$DIR_UP$ = 0;
  $DvtChartDataChangeUtils$$.$DIR_DOWN$ = 1;
  $DvtChartDataChangeUtils$$.$DIR_NOCHANGE$ = 2;
  $DvtChartDataChangeUtils$$.$makeIndicator$ = function $$DvtChartDataChangeUtils$$$$makeIndicator$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    if ($DvtChartTypeUtils$$.$isPolar$($DvtSparkChartAutomation$$)) {
      return null;
    }
    $dvt$$2$$ = $DvtChartDataChangeUtils$$.$getDirection$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$);
    if ($dvt$$2$$ == $DvtChartDataChangeUtils$$.$DIR_NOCHANGE$) {
      return null;
    }
    $DvtSparkChartEventManager$$ = ($dvt$$2$$ = $dvt$$2$$ === $DvtChartDataChangeUtils$$.$DIR_DOWN$) ? $DvtChartStyleUtils$$.$getAnimationDownColor$($DvtSparkChartAutomation$$) : $DvtChartStyleUtils$$.$getAnimationUpColor$($DvtSparkChartAutomation$$);
    $dvt$$2$$ = $DvtChartDataChangeUtils$$.$_drawIndicator$($DvtSparkChartAutomation$$.$getCtx$(), $dvt$$2$$, $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartAutomation$$), $DvtSparkChartEventManager$$);
    $DvtSparkChartAutomation$$.$getPlotArea$().$addChild$($dvt$$2$$);
    return $dvt$$2$$;
  };
  $DvtChartDataChangeUtils$$.$getDirection$ = function $$DvtChartDataChangeUtils$$$$getDirection$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    $dvt$$2$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$);
    return null == $DvtSparkChartAutomation$$ || null == $dvt$$2$$ || $DvtSparkChartAutomation$$ == $dvt$$2$$ ? $DvtChartDataChangeUtils$$.$DIR_NOCHANGE$ : $DvtSparkChartAutomation$$ > $dvt$$2$$ ? $DvtChartDataChangeUtils$$.$DIR_UP$ : $DvtChartDataChangeUtils$$.$DIR_DOWN$;
  };
  $DvtChartDataChangeUtils$$.$_drawIndicator$ = function $$DvtChartDataChangeUtils$$$$_drawIndicator$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$ ? ($dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$) ? !$DvtSparkChartDefaults$$ : $DvtSparkChartDefaults$$) ? "M3.5,-5L3.5,5L-3.5,0L3.5,-5" : "M-3.5,-5L-3.5,5L3.5,0L-3.5,-5" : $DvtSparkChartDefaults$$ ? "M-5,-3.5L5,-3.5L0,3.5L-5,-3.5Z" : "M-5,3.5L5,3.5L0,-3.5L-5,3.5Z";
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$Path$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.$setSolidFill$($DvtChartRefObjUtils$$);
    return $DvtSparkChartEventManager$$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangeFunnelSlice$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeFunnelSlice$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = this.$_shape$, $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$.$_shape$.$getAnimationParams$(), $DvtChartAxisUtils$$ = $DvtSparkChartAutomation$$.$getAnimationParams$(), $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.$_shape$.$getFill$().clone(), $DvtChartPieLabelInfo$$ = this.$_shape$.$getFill$();
    $dvt$$2$$.$ArrayUtils$.$equals$($DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) && $DvtChartPieLabelUtils$$.$equals$($DvtChartPieLabelInfo$$) || ($DvtSparkChartAutomation$$.$setAnimationParams$($DvtChartRefObjUtils$$), this.$_shape$.$setFill$($DvtChartPieLabelUtils$$), $DvtChartRefObjUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartAutomation$$.$getCtx$(), this, this.$_updateDuration$), $DvtChartRefObjUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartAutomation$$, 
    $DvtSparkChartAutomation$$.$getAnimationParams$, $DvtSparkChartAutomation$$.$setAnimationParams$, $DvtChartAxisUtils$$), $DvtChartRefObjUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_FILL$, this.$_shape$, this.$_shape$.$getFill$, this.$_shape$.$setFill$, $DvtChartPieLabelInfo$$), this.$_indicator$ && $DvtChartRefObjUtils$$.$setOnEnd$(this.$_onEndAnimation$, this), $DvtSparkChartEventManager$$.add($DvtChartRefObjUtils$$, 1));
  };
  $DvtChartDataChangeFunnelSlice$$.prototype.$animateInsert$ = function $$DvtChartDataChangeFunnelSlice$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$_shape$, $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getAnimationParams$(), $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.slice(0);
    $DvtChartRefObjUtils$$[0] += $DvtChartRefObjUtils$$[1] / 2;
    $DvtChartRefObjUtils$$[1] = 0;
    $DvtChartRefObjUtils$$[3] = 0;
    $DvtSparkChartDefaults$$.$setAnimationParams$($DvtChartRefObjUtils$$);
    $DvtChartRefObjUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartDefaults$$.$getCtx$(), this, this.$_insertDuration$);
    $DvtChartRefObjUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getAnimationParams$, $DvtSparkChartDefaults$$.$setAnimationParams$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$.add($DvtChartRefObjUtils$$, 2);
  };
  $DvtChartDataChangeFunnelSlice$$.prototype.$animateDelete$ = function $$DvtChartDataChangeFunnelSlice$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = this.$_shape$;
    $DvtSparkChartDefaults$$.$setClipPath$(null);
    $DvtSparkChartDefaults$$.$addChild$($DvtSparkChartAutomation$$);
    var $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.$getAnimationParams$(), $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$.slice(0);
    $DvtChartAxisUtils$$[0] += $DvtChartRefObjUtils$$[1] / 2;
    $DvtChartAxisUtils$$[1] = 0;
    $DvtChartAxisUtils$$[3] = 0;
    $DvtChartRefObjUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartAutomation$$.$getCtx$(), this, this.$_deleteDuration$);
    $DvtChartRefObjUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartAutomation$$, $DvtSparkChartAutomation$$.$getAnimationParams$, $DvtSparkChartAutomation$$.$setAnimationParams$, $DvtChartAxisUtils$$);
    $DvtSparkChartEventManager$$.add($DvtChartRefObjUtils$$, 0);
  };
  $DvtChartDataChangeFunnelSlice$$.prototype.Init = function $$DvtChartDataChangeFunnelSlice$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangeFunnelSlice$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_animId$ += "/funnel";
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangePyramidSlice$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangePyramidSlice$$.prototype.$animateUpdate$ = function $$DvtChartDataChangePyramidSlice$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = this.$_shape$, $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$.$_shape$.$getAnimationParams$(), $DvtChartAxisUtils$$ = $DvtSparkChartAutomation$$.$getAnimationParams$(), $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.$_shape$.$getPrimaryFill$(), $DvtChartPieLabelInfo$$ = this.$_shape$.$getPrimaryFill$();
    $dvt$$2$$.$ArrayUtils$.$equals$($DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) && $DvtChartPieLabelUtils$$.$equals$($DvtChartPieLabelInfo$$) || ($DvtSparkChartAutomation$$.$setAnimationParams$($DvtChartRefObjUtils$$), this.$_shape$.$setFill$($DvtChartPieLabelUtils$$), $DvtChartRefObjUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartAutomation$$.$getCtx$(), this, this.$_updateDuration$), $DvtChartRefObjUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartAutomation$$, 
    $DvtSparkChartAutomation$$.$getAnimationParams$, $DvtSparkChartAutomation$$.$setAnimationParams$, $DvtChartAxisUtils$$), $DvtChartRefObjUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_FILL$, $DvtSparkChartAutomation$$, $DvtSparkChartAutomation$$.$getFill$, $DvtSparkChartAutomation$$.$setFill$, $DvtChartPieLabelInfo$$), $DvtSparkChartEventManager$$.add($DvtChartRefObjUtils$$, 1));
  };
  $DvtChartDataChangePyramidSlice$$.prototype.$animateInsert$ = function $$DvtChartDataChangePyramidSlice$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$_shape$, $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getAnimationParams$(), $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.slice(0);
    $DvtChartRefObjUtils$$[1] = 0;
    $DvtChartRefObjUtils$$[2] = 0;
    $DvtSparkChartDefaults$$.$setAnimationParams$($DvtChartRefObjUtils$$);
    $DvtChartRefObjUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartDefaults$$.$getCtx$(), this, this.$_insertDuration$);
    $DvtChartRefObjUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getAnimationParams$, $DvtSparkChartDefaults$$.$setAnimationParams$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$.add($DvtChartRefObjUtils$$, 2);
  };
  $DvtChartDataChangePyramidSlice$$.prototype.$animateDelete$ = function $$DvtChartDataChangePyramidSlice$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = this.$_shape$;
    $DvtSparkChartDefaults$$.$setClipPath$(null);
    $DvtSparkChartDefaults$$.$addChild$($DvtSparkChartAutomation$$);
    var $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.$getAnimationParams$().slice(0);
    $DvtChartRefObjUtils$$[1] = 0;
    $DvtChartRefObjUtils$$[2] = 0;
    var $DvtChartAxisUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartAutomation$$.$getCtx$(), this, this.$_deleteDuration$);
    $DvtChartAxisUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartAutomation$$, $DvtSparkChartAutomation$$.$getAnimationParams$, $DvtSparkChartAutomation$$.$setAnimationParams$, $DvtChartRefObjUtils$$);
    $DvtSparkChartEventManager$$.add($DvtChartAxisUtils$$, 0);
  };
  $DvtChartDataChangePyramidSlice$$.prototype.Init = function $$DvtChartDataChangePyramidSlice$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangePyramidSlice$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_animId$ += "/pyramid";
  };
  var $DvtChartAxisUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAxisUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartAxisUtils$$.$getXAxisPosition$ = function $$DvtChartAxisUtils$$$$getXAxisPosition$$($DvtSparkChartEventManager$$) {
    return $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$) ? "tangential" : $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? "right" : "left" : "bottom";
  };
  $DvtChartAxisUtils$$.$getBaselineScaling$ = function $$DvtChartAxisUtils$$$$getBaselineScaling$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$ + "Axis", $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartDefaults$$].baselineScaling;
    return !$DvtSparkChartDefaults$$ || "zero" != $DvtSparkChartDefaults$$ && "min" != $DvtSparkChartDefaults$$ ? $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? "min" : "zero" : $DvtSparkChartDefaults$$;
  };
  $DvtChartAxisUtils$$.$getYAxisPosition$ = function $$DvtChartAxisUtils$$$$getYAxisPosition$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$().yAxis.position;
    if ($DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$)) {
      return "radial";
    }
    if ($DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$)) {
      return !$DvtSparkChartDefaults$$ || "top" != $DvtSparkChartDefaults$$ && "bottom" != $DvtSparkChartDefaults$$ ? "bottom" : $DvtSparkChartDefaults$$;
    }
    $DvtChartTypeUtils$$.$isStock$($DvtSparkChartEventManager$$) && ($DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$ : "end");
    return $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? $DvtSparkChartDefaults$$ && "end" == $DvtSparkChartDefaults$$ ? "left" : "right" : $DvtSparkChartDefaults$$ && "end" == $DvtSparkChartDefaults$$ ? "right" : "left";
  };
  $DvtChartAxisUtils$$.$getY2AxisPosition$ = function $$DvtChartAxisUtils$$$$getY2AxisPosition$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$().y2Axis.position;
    return $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? !$DvtSparkChartDefaults$$ || "top" != $DvtSparkChartDefaults$$ && "bottom" != $DvtSparkChartDefaults$$ ? "top" : $DvtSparkChartDefaults$$ : $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? $DvtSparkChartDefaults$$ && "start" == $DvtSparkChartDefaults$$ ? "right" : "left" : $DvtSparkChartDefaults$$ && "start" == $DvtSparkChartDefaults$$ ? "left" : "right";
  };
  $DvtChartAxisUtils$$.$hasTimeAxis$ = function $$DvtChartAxisUtils$$$$hasTimeAxis$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && "disabled" != $DvtChartAxisUtils$$.$getTimeAxisType$($dvt$$2$$);
  };
  $DvtChartAxisUtils$$.$hasGroupAxis$ = function $$DvtChartAxisUtils$$$$hasGroupAxis$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && "disabled" == $DvtChartAxisUtils$$.$getTimeAxisType$($dvt$$2$$);
  };
  $DvtChartAxisUtils$$.$getTimeAxisType$ = function $$DvtChartAxisUtils$$$$getTimeAxisType$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().timeAxisType;
    return $DvtSparkChartEventManager$$ && "auto" != $DvtSparkChartEventManager$$ && $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? $DvtSparkChartEventManager$$ : $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? "skipGaps" : "disabled";
  };
  $DvtChartAxisUtils$$.$isMixedFrequency$ = function $$DvtChartAxisUtils$$$$isMixedFrequency$$($dvt$$2$$) {
    return "mixedFrequency" == $DvtChartAxisUtils$$.$getTimeAxisType$($dvt$$2$$);
  };
  $DvtChartAxisUtils$$.$getAxisOffset$ = function $$DvtChartAxisUtils$$$$getAxisOffset$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_cache$.$getFromCache$("axisOffset");
    if (null != $DvtSparkChartEventManager$$) {
      return $DvtSparkChartEventManager$$;
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().styleDefaults.groupSeparators;
    $DvtChartAxisUtils$$.$hasGroupAxis$($dvt$$2$$) && 1 < $DvtChartDataUtils$$.$getNumLevels$($dvt$$2$$) && "on" == $DvtSparkChartEventManager$$.rendered ? $DvtSparkChartEventManager$$ = .5 : $DvtChartTypeUtils$$.$hasBarSeries$($dvt$$2$$) || $DvtChartTypeUtils$$.$hasCenteredSeries$($dvt$$2$$) || $DvtChartTypeUtils$$.$hasCandlestickSeries$($dvt$$2$$) || $DvtChartTypeUtils$$.$hasBoxPlotSeries$($dvt$$2$$) || $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && 1 == $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$) ? 
    $DvtSparkChartEventManager$$ = .5 : !$DvtChartDefaults$$.$isPostAltaSkin$($dvt$$2$$) || $DvtChartTypeUtils$$.$isSpark$($dvt$$2$$) || $DvtChartEventUtils$$.$isScrollable$($dvt$$2$$) || $DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) ? $DvtSparkChartEventManager$$ = 0 : ($DvtSparkChartEventManager$$ = $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$) ? .2 : .5, $DvtSparkChartEventManager$$ -= $DvtSparkChartEventManager$$ / Math.sqrt($DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$)));
    $dvt$$2$$.$_cache$.$putToCache$("axisOffset", $DvtSparkChartEventManager$$);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartAxisUtils$$.$isGridShifted$ = function $$DvtChartAxisUtils$$$$isGridShifted$$($dvt$$2$$) {
    if (!$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$)) {
      return !1;
    }
    for (var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$;$DvtSparkChartDefaults$$++) {
      if ($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartDefaults$$)) {
        var $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartDefaults$$), $DvtChartRefObjUtils$$ = $DvtChartStyleUtils$$.$getLineType$($dvt$$2$$, $DvtSparkChartDefaults$$);
        if ("bar" != $DvtSparkChartAutomation$$ && "centeredSegmented" != $DvtChartRefObjUtils$$ && "centeredStepped" != $DvtChartRefObjUtils$$) {
          return !1;
        }
      }
    }
    return !0;
  };
  $DvtChartAxisUtils$$.$isGridPolygonal$ = function $$DvtChartAxisUtils$$$$isGridPolygonal$$($dvt$$2$$) {
    return !$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) || $DvtChartTypeUtils$$.$hasBarSeries$($dvt$$2$$) ? !1 : "polygon" == $dvt$$2$$.$getOptions$().polarGridShape;
  };
  $DvtChartAxisUtils$$.$isAxisRendered$ = function $$DvtChartAxisUtils$$$$isAxisRendered$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ("y" == $DvtSparkChartEventManager$$ && $DvtChartTypeUtils$$.$hasY2DataOnly$($dvt$$2$$) || "y2" == $DvtSparkChartEventManager$$ && !$DvtChartTypeUtils$$.$hasY2Data$($dvt$$2$$)) {
      return !1;
    }
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"];
    return "off" == $DvtSparkChartDefaults$$.rendered || "off" == $DvtSparkChartDefaults$$.tickLabel.rendered && !$DvtSparkChartDefaults$$.title ? !1 : !0;
  };
  $DvtChartAxisUtils$$.$isAxisLineRendered$ = function $$DvtChartAxisUtils$$$$isAxisLineRendered$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"];
    return "off" == $DvtSparkChartDefaults$$.rendered || "off" == $DvtSparkChartDefaults$$.axisLine.rendered ? !1 : "auto" == $DvtSparkChartDefaults$$.axisLine.rendered && "x" != $DvtSparkChartEventManager$$ && $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? !1 : !0;
  };
  $DvtChartAxisUtils$$.$isMajorTickRendered$ = function $$DvtChartAxisUtils$$$$isMajorTickRendered$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"];
    return "off" == $DvtSparkChartDefaults$$.rendered || "off" == $DvtSparkChartDefaults$$.majorTick.rendered ? !1 : "auto" == $DvtSparkChartDefaults$$.majorTick.rendered && "x" == $DvtSparkChartEventManager$$ && $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? !1 : !0;
  };
  $DvtChartAxisUtils$$.$isMinorTickRendered$ = function $$DvtChartAxisUtils$$$$isMinorTickRendered$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"];
    return "off" == $DvtSparkChartDefaults$$.rendered || "off" == $DvtSparkChartDefaults$$.minorTick.rendered ? !1 : "on" == $DvtSparkChartDefaults$$.minorTick.rendered ? !0 : $DvtChartAxisUtils$$.$isLog$($dvt$$2$$, $DvtSparkChartEventManager$$);
  };
  $DvtChartAxisUtils$$.$isLog$ = function $$DvtChartAxisUtils$$$$isLog$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return "log" == $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"].scale;
  };
  $DvtChartAxisUtils$$.$getTickLabelHeight$ = function $$DvtChartAxisUtils$$$$getTickLabelHeight$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$[$DvtSparkChartDefaults$$ + "Axis"].tickLabel.style;
    $DvtChartRefObjUtils$$ instanceof $dvt$$2$$.$CSSStyle$ || ($DvtChartRefObjUtils$$ = new $dvt$$2$$.$CSSStyle$($DvtChartRefObjUtils$$));
    $DvtChartRefObjUtils$$.$mergeUnder$($dvt$$2$$.$Axis$.$getDefaults$($DvtSparkChartAutomation$$.skin).tickLabel.style);
    return $dvt$$2$$.$TextUtils$.$getTextStringHeight$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartRefObjUtils$$);
  };
  $DvtChartAxisUtils$$.$getTickLabelGapSize$ = function $$DvtChartAxisUtils$$$$getTickLabelGapSize$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ($DvtChartAxisUtils$$.$isTickLabelInside$($dvt$$2$$, $DvtSparkChartEventManager$$)) {
      return 0;
    }
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$), $DvtChartRefObjUtils$$ = $DvtChartAxisUtils$$.$getGapScalingFactor$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = Math.ceil($DvtSparkChartDefaults$$.layout.tickLabelGapWidth * $DvtChartRefObjUtils$$), $DvtSparkChartDefaults$$ = Math.ceil($DvtSparkChartDefaults$$.layout.tickLabelGapHeight * $DvtChartRefObjUtils$$);
    return "x" == $DvtSparkChartEventManager$$ ? $DvtSparkChartAutomation$$ ? $DvtChartPieLabelUtils$$ : $DvtSparkChartDefaults$$ : $DvtSparkChartAutomation$$ ? $DvtSparkChartDefaults$$ : $DvtChartPieLabelUtils$$;
  };
  $DvtChartAxisUtils$$.$getGapScalingFactor$ = function $$DvtChartAxisUtils$$$$getGapScalingFactor$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, $DvtSparkChartEventManager$$) ? $DvtChartAxisUtils$$.$getTickLabelHeight$($dvt$$2$$, $DvtSparkChartEventManager$$) / 14 : 0;
  };
  $DvtChartAxisUtils$$.$isTickLabelInside$ = function $$DvtChartAxisUtils$$$$isTickLabelInside$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) || $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) || $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && "x" == $DvtSparkChartEventManager$$ ? !1 : "inside" == $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"].tickLabel.position;
  };
  $DvtChartAxisUtils$$.$getXAxisViewportMinMax$ = function $$DvtChartAxisUtils$$$$getXAxisViewportMinMax$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$().xAxis, $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$.$hasGroupAxis$($dvt$$2$$), $DvtChartRefObjUtils$$ = $DvtChartAxisUtils$$.$getAxisOffset$($dvt$$2$$);
    if ($DvtSparkChartEventManager$$) {
      var $DvtChartPieLabelUtils$$ = $DvtChartAxisUtils$$.$getXAxisGlobalMinMax$($dvt$$2$$)
    }
    var $DvtChartPieLabelInfo$$ = null;
    null != $DvtSparkChartDefaults$$.viewportMin ? $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.viewportMin : null != $DvtSparkChartDefaults$$.viewportStartGroup ? $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$ ? $DvtChartDataUtils$$.$getGroupIndex$($dvt$$2$$, $DvtSparkChartDefaults$$.viewportStartGroup) - $DvtChartRefObjUtils$$ : $DvtSparkChartDefaults$$.viewportStartGroup : $DvtSparkChartEventManager$$ && ($DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.min);
    var $DvtChartPieRenderUtils$$ = null;
    null != $DvtSparkChartDefaults$$.viewportMax ? $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.viewportMax : null != $DvtSparkChartDefaults$$.viewportEndGroup ? $DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$ ? $DvtChartDataUtils$$.$getGroupIndex$($dvt$$2$$, $DvtSparkChartDefaults$$.viewportEndGroup) + $DvtChartRefObjUtils$$ : $DvtSparkChartDefaults$$.viewportEndGroup : $DvtSparkChartEventManager$$ && ($DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$.max);
    return {min:$DvtChartPieLabelInfo$$, max:$DvtChartPieRenderUtils$$};
  };
  $DvtChartAxisUtils$$.$getXAxisGlobalMinMax$ = function $$DvtChartAxisUtils$$$$getXAxisGlobalMinMax$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().xAxis, $DvtSparkChartDefaults$$ = $DvtChartAxisUtils$$.$hasGroupAxis$($dvt$$2$$), $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$.$getAxisOffset$($dvt$$2$$);
    if (!$DvtSparkChartDefaults$$) {
      var $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getMinMaxValue$($dvt$$2$$, "x")
    }
    var $DvtChartPieLabelUtils$$ = null, $DvtChartPieLabelUtils$$ = null != $DvtSparkChartEventManager$$.min ? $DvtSparkChartEventManager$$.min : $DvtSparkChartDefaults$$ ? 0 - $DvtSparkChartAutomation$$ : $DvtChartRefObjUtils$$.min, $DvtChartPieLabelInfo$$ = null, $DvtChartPieLabelInfo$$ = null != $DvtSparkChartEventManager$$.max ? $DvtSparkChartEventManager$$.max : $DvtSparkChartDefaults$$ ? $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$) - 1 + $DvtSparkChartAutomation$$ : $DvtChartRefObjUtils$$.max;
    return {min:$DvtChartPieLabelUtils$$, max:$DvtChartPieLabelInfo$$};
  };
  $DvtChartAxisUtils$$.$applyInitialZooming$ = function $$DvtChartAxisUtils$$$$applyInitialZooming$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.xAxis, $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$.initialZooming;
    if ($DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && "off" != $DvtSparkChartDefaults$$.zoomAndScroll && "none" != $DvtChartRefObjUtils$$) {
      $DvtSparkChartDefaults$$._initialZoomed && ("last" == $DvtChartRefObjUtils$$ ? $DvtSparkChartAutomation$$.viewportMin = null : $DvtSparkChartAutomation$$.viewportMax = null);
      var $DvtChartPieLabelUtils$$ = $DvtChartAxisUtils$$.$getXAxisViewportMinMax$($dvt$$2$$, !1), $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.min, $DvtChartPieLabelUtils$$ = $DvtChartPieLabelUtils$$.max;
      if (!("last" == $DvtChartRefObjUtils$$ && null != $DvtChartPieLabelInfo$$ || "first" == $DvtChartRefObjUtils$$ && null != $DvtChartPieLabelUtils$$)) {
        var $DvtChartRefObjUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$) ? $DvtSparkChartEventManager$$.$h$ : $DvtSparkChartEventManager$$.$w$, $DvtChartPieRenderUtils$$ = Math.floor($DvtChartRefObjUtils$$ / (2 * $DvtChartAxisUtils$$.$getTickLabelHeight$($dvt$$2$$, "x"))) + $DvtChartAxisUtils$$.$getAxisOffset$($dvt$$2$$), $DvtChartDataChangePyramidSlice$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$) - 1;
        if (!($DvtChartDataChangePyramidSlice$$ <= $DvtChartPieRenderUtils$$)) {
          var $DvtChartSeriesEffectUtils$$;
          $DvtChartAxisUtils$$.$hasGroupAxis$($dvt$$2$$) ? ($DvtChartRefObjUtils$$ = 0, $DvtChartSeriesEffectUtils$$ = $DvtChartDataChangePyramidSlice$$) : ($DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.$getMinMaxValue$($dvt$$2$$, "x"), $DvtChartRefObjUtils$$ = $DvtChartSeriesEffectUtils$$.min, $DvtChartSeriesEffectUtils$$ = $DvtChartSeriesEffectUtils$$.max);
          $DvtChartPieRenderUtils$$ = $DvtChartPieRenderUtils$$ / $DvtChartDataChangePyramidSlice$$ * ($DvtChartSeriesEffectUtils$$ - $DvtChartRefObjUtils$$);
          "last" == $DvtSparkChartDefaults$$.initialZooming ? (null == $DvtChartPieLabelUtils$$ && ($DvtChartPieLabelUtils$$ = $DvtChartSeriesEffectUtils$$), $DvtSparkChartAutomation$$.viewportMin = Math.max($DvtChartPieLabelUtils$$ - $DvtChartPieRenderUtils$$, $DvtChartRefObjUtils$$)) : (null == $DvtChartPieLabelInfo$$ && ($DvtChartPieLabelInfo$$ = $DvtChartRefObjUtils$$), $DvtSparkChartAutomation$$.viewportMax = Math.min($DvtChartPieLabelInfo$$ + $DvtChartPieRenderUtils$$, $DvtChartSeriesEffectUtils$$));
          $DvtSparkChartDefaults$$._initialZoomed = !0;
        }
      }
    }
  };
  $DvtChartAxisUtils$$.$getGroupWidthRatios$ = function $$DvtChartAxisUtils$$$$getGroupWidthRatios$$($DvtSparkChartEventManager$$) {
    if (!$DvtChartTypeUtils$$.$hasBarSeries$($DvtSparkChartEventManager$$) && !$DvtChartTypeUtils$$.$hasCandlestickSeries$($DvtSparkChartEventManager$$) && !$DvtChartTypeUtils$$.$hasBoxPlotSeries$($DvtSparkChartEventManager$$)) {
      return null;
    }
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getBarGapRatio$($DvtSparkChartEventManager$$);
    if (1 <= $DvtSparkChartAutomation$$) {
      return $DvtSparkChartDefaults$$._averageGroupZ = Infinity, null;
    }
    $DvtSparkChartDefaults$$._averageGroupZ = 0;
    for (var $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartAxisUtils$$ = $DvtChartTypeUtils$$.$isSplitDualY$($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getStackCategories$($DvtSparkChartEventManager$$, "bar"), $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$_optionsCache$.$getFromCache$("_hasVaryingBarWidth"), $DvtChartPieRenderUtils$$ = [], $DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$, 
    $DvtChartRangeMarker$$, $DvtChartPolarBar$$ = 0;$DvtChartPolarBar$$ < $DvtChartRefObjUtils$$;$DvtChartPolarBar$$++) {
      $DvtChartSeriesEffectUtils$$ = $DvtChartDataChangePyramidSlice$$ = 0;
      if ($DvtChartPieLabelInfo$$) {
        for ($DvtChartRangeMarker$$ = 0;$DvtChartRangeMarker$$ < $DvtChartPieLabelUtils$$.y.length;$DvtChartRangeMarker$$++) {
          $DvtChartDataChangePyramidSlice$$ += $DvtChartDataUtils$$.$getBarCategoryZ$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$.y[$DvtChartRangeMarker$$], $DvtChartPolarBar$$, !1);
        }
        for ($DvtChartRangeMarker$$ = 0;$DvtChartRangeMarker$$ < $DvtChartPieLabelUtils$$.y2.length;$DvtChartRangeMarker$$++) {
          $DvtChartSeriesEffectUtils$$ += $DvtChartDataUtils$$.$getBarCategoryZ$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$.y2[$DvtChartRangeMarker$$], $DvtChartPolarBar$$, !0);
        }
      } else {
        $DvtChartDataChangePyramidSlice$$ = $DvtChartPieLabelUtils$$.y.length, $DvtChartSeriesEffectUtils$$ = $DvtChartPieLabelUtils$$.y2.length;
      }
      $DvtChartPieRenderUtils$$.push($DvtChartAxisUtils$$ ? Math.max($DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$) : $DvtChartDataChangePyramidSlice$$ + $DvtChartSeriesEffectUtils$$);
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$ArrayUtils$.reduce($DvtChartPieRenderUtils$$, function($dvt$$2$$, $DvtSparkChartEventManager$$) {
      return $dvt$$2$$ + $DvtSparkChartEventManager$$;
    });
    var $DvtChartFunnelSlice$$ = $DvtSparkChartEventManager$$ * $DvtSparkChartAutomation$$ / (1 - $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$ = $dvt$$2$$.$ArrayUtils$.map($DvtChartPieRenderUtils$$, function($dvt$$2$$) {
      return $dvt$$2$$ + $DvtChartFunnelSlice$$ / $DvtChartRefObjUtils$$;
    });
    $DvtSparkChartDefaults$$._averageGroupZ = ($DvtSparkChartEventManager$$ + $DvtChartFunnelSlice$$) / $DvtChartRefObjUtils$$;
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartAxisUtils$$.$isYAdjustmentNeeded$ = function $$DvtChartAxisUtils$$$$isYAdjustmentNeeded$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().styleDefaults.dataLabelPosition, $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$isStackLabelRendered$($dvt$$2$$);
    return $DvtChartTypeUtils$$.$hasBarSeries$($dvt$$2$$) && ("outsideBarEdge" == $DvtSparkChartEventManager$$ || $DvtSparkChartDefaults$$) ? !0 : !1;
  };
  $DvtChartAxisUtils$$.$axisContainsPoint$ = function $$DvtChartAxisUtils$$$$axisContainsPoint$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if (!$dvt$$2$$) {
      return !1;
    }
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$().position, $DvtSparkChartAutomation$$ = "top" == $DvtSparkChartDefaults$$ || "bottom" == $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$ ? 4 : 10, $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$ ? 10 : 4, $DvtSparkChartAutomation$$ = $dvt$$2$$.$_bounds$.clone();
    $DvtSparkChartAutomation$$.x -= $DvtChartRefObjUtils$$;
    $DvtSparkChartAutomation$$.y -= $DvtSparkChartDefaults$$;
    $DvtSparkChartAutomation$$.$w$ += 2 * $DvtChartRefObjUtils$$;
    $DvtSparkChartAutomation$$.$h$ += 2 * $DvtSparkChartDefaults$$;
    $DvtSparkChartDefaults$$ = $dvt$$2$$.$stageToLocal$($DvtSparkChartEventManager$$);
    return $DvtSparkChartAutomation$$.$containsPoint$($DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y);
  };
  var $DvtChartDataUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartDataUtils$$.$hasData$ = function $$DvtChartDataUtils$$$$hasData$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    if (!$DvtSparkChartEventManager$$ || !$DvtSparkChartEventManager$$.series || 1 > $DvtSparkChartEventManager$$.series.length) {
      return !1;
    }
    for (var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$;$DvtSparkChartDefaults$$++) {
      var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartDefaults$$);
      if ($DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.items && 1 <= $DvtSparkChartAutomation$$.items.length) {
        return !0;
      }
    }
    return !1;
  };
  $DvtChartDataUtils$$.$hasInvalidData$ = function $$DvtChartDataUtils$$$$hasInvalidData$$($dvt$$2$$) {
    return !$DvtChartDataUtils$$.$hasData$($dvt$$2$$) || $DvtChartDataUtils$$.$hasInvalidTimeData$($dvt$$2$$);
  };
  $DvtChartDataUtils$$.$hasInvalidTimeData$ = function $$DvtChartDataUtils$$$$hasInvalidTimeData$$($dvt$$2$$) {
    if ($DvtChartTypeUtils$$.$isFunnel$($dvt$$2$$) || $DvtChartTypeUtils$$.$isPie$($dvt$$2$$) || $DvtChartTypeUtils$$.$isPyramid$($dvt$$2$$)) {
      return !1;
    }
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);
    if (!$DvtSparkChartEventManager$$ || !$DvtSparkChartEventManager$$.series || 1 > $DvtSparkChartEventManager$$.series.length || 1 > $DvtSparkChartDefaults$$) {
      return !0;
    }
    var $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);
    if ($DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$)) {
      for ($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtChartRefObjUtils$$;$DvtSparkChartAutomation$$++) {
        for ($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$;$DvtSparkChartEventManager$$++) {
          var $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$);
          if ($DvtChartPieLabelUtils$$ && (null == $DvtChartPieLabelUtils$$.x || isNaN($DvtChartPieLabelUtils$$.x))) {
            return !0;
          }
        }
      }
    } else {
      if ($DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$)) {
        for ($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$;$DvtSparkChartEventManager$$++) {
          if ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtSparkChartEventManager$$), null == $DvtSparkChartAutomation$$ || isNaN($DvtSparkChartAutomation$$)) {
            return !0;
          }
        }
      }
    }
    return !1;
  };
  $DvtChartDataUtils$$.$hasSeriesData$ = function $$DvtChartDataUtils$$$$hasSeriesData$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$).items;
    if ($DvtSparkChartDefaults$$) {
      for (var $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
        if (null != $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$]) {
          return !0;
        }
      }
    }
    return !1;
  };
  $DvtChartDataUtils$$.$processDataObject$ = function $$DvtChartDataUtils$$$$processDataObject$$($DvtSparkChartEventManager$$) {
    if ($DvtChartDataUtils$$.$hasData$($DvtSparkChartEventManager$$)) {
      var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_optionsCache$, $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$);
      $DvtChartTypeUtils$$.$isValidType$($DvtSparkChartEventManager$$) || ($DvtSparkChartDefaults$$.type = "bar");
      var $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$isStock$($DvtSparkChartEventManager$$);
      $DvtChartPieLabelInfo$$ && ($DvtSparkChartAutomation$$.$putToCache$("_hasVolume", !1), 1 < $DvtChartPieLabelUtils$$ && ($DvtSparkChartDefaults$$.series = $DvtSparkChartDefaults$$.series.slice(0, 1), $DvtChartPieLabelUtils$$ = 1));
      var $DvtChartPieRenderUtils$$ = $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$);
      $DvtSparkChartAutomation$$.$putToCache$("_hasVaryingBarWidth", !1);
      $DvtSparkChartAutomation$$.$putToCache$("dataMarkerSizeSet", !1);
      $DvtSparkChartAutomation$$.$putToCache$("dataMarkerDisplayedSet", !1);
      var $DvtChartDataChangePyramidSlice$$ = $DvtChartAxisUtils$$.$isMixedFrequency$($DvtSparkChartEventManager$$), $DvtChartSeriesEffectUtils$$ = 100 < $DvtChartPieLabelUtils$$;
      $DvtSparkChartAutomation$$.$putToCache$("hasLargeSeriesCount", $DvtChartSeriesEffectUtils$$);
      $DvtSparkChartAutomation$$.$putToCache$("hasY2Assignment", !1);
      for (var $DvtChartRangeMarker$$ = 0, $DvtChartPolarBar$$ = $DvtSparkChartEventManager$$.$SeriesStyleArray$, $DvtChartFunnelSlice$$ = 0;$DvtChartFunnelSlice$$ < $DvtChartPieLabelUtils$$;$DvtChartFunnelSlice$$++) {
        var $DvtChartDataCursor$$ = $DvtChartDataUtils$$.$getSeries$($DvtSparkChartEventManager$$, $DvtChartFunnelSlice$$);
        !$DvtChartSeriesEffectUtils$$ && null != $DvtChartDataCursor$$ && 0 > $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartPolarBar$$, $DvtChartDataCursor$$) && $DvtChartPolarBar$$.push($DvtChartDataCursor$$);
        var $DvtChartDataChange$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtChartFunnelSlice$$);
        $DvtChartDataChange$$.items && $DvtChartDataChange$$.items.length > $DvtChartRangeMarker$$ && ($DvtChartRangeMarker$$ = $DvtChartDataChange$$.items.length);
        if ("hidden" == $DvtChartDataChange$$.visibility) {
          var $DvtChartPie$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$);
          0 > $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartPie$$, $DvtChartDataCursor$$) && $DvtChartPie$$.push($DvtChartDataCursor$$);
        }
        $DvtChartDataChange$$.visibility = null;
        "on" == $DvtChartDataChange$$.assignedToY2 && $DvtSparkChartAutomation$$.$putToCache$("hasY2Assignment", !0);
        if ($DvtChartDataChange$$ && $DvtChartDataChange$$.items) {
          for (var $DvtChartPie$$ = $DvtChartDataChange$$.items, $DvtChartDataChangeMarker$$, $DvtChartDataCursor$$ = 0;$DvtChartDataCursor$$ < $DvtChartPie$$.length;$DvtChartDataCursor$$++) {
            $DvtChartPie$$[$DvtChartDataCursor$$] && ($DvtChartDataChangeMarker$$ = $DvtChartPie$$[$DvtChartDataCursor$$], "object" != typeof $DvtChartDataChangeMarker$$ ? $DvtChartDataChangeMarker$$ = Number($DvtChartDataChangeMarker$$) : (!$DvtChartDataChangePyramidSlice$$ && $DvtChartDataChangeMarker$$.x && ($DvtChartDataChangeMarker$$.x = Number($DvtChartDataChangeMarker$$.x)), $DvtChartDataChangeMarker$$.y && ($DvtChartDataChangeMarker$$.y = Number($DvtChartDataChangeMarker$$.y)), $DvtChartDataChangeMarker$$.z && 
            ($DvtChartDataChangeMarker$$.z = Number($DvtChartDataChangeMarker$$.z), $DvtChartPieRenderUtils$$ && 1 != $DvtChartDataChangeMarker$$.z && $DvtSparkChartAutomation$$.$putToCache$("_hasVaryingBarWidth", !0)), $DvtChartDataChangeMarker$$.value && ($DvtChartDataChangeMarker$$.value = Number($DvtChartDataChangeMarker$$.value)), $DvtChartDataChangeMarker$$.targetValue && ($DvtChartDataChangeMarker$$.targetValue = Number($DvtChartDataChangeMarker$$.targetValue)), $DvtChartDataChangeMarker$$.open && 
            ($DvtChartDataChangeMarker$$.open = Number($DvtChartDataChangeMarker$$.open)), $DvtChartDataChangeMarker$$.close && ($DvtChartDataChangeMarker$$.close = Number($DvtChartDataChangeMarker$$.close)), $DvtChartDataChangeMarker$$.low && ($DvtChartDataChangeMarker$$.low = Number($DvtChartDataChangeMarker$$.low)), $DvtChartDataChangeMarker$$.high && ($DvtChartDataChangeMarker$$.high = Number($DvtChartDataChangeMarker$$.high)), $DvtChartDataChangeMarker$$.volume && ($DvtChartDataChangeMarker$$.volume = 
            Number($DvtChartDataChangeMarker$$.volume), $DvtSparkChartAutomation$$.$putToCache$("_hasVolume", !0)), $DvtChartDataChangeMarker$$.markerSize && $DvtSparkChartAutomation$$.$putToCache$("dataMarkerSizeSet", !0), $DvtChartDataChangeMarker$$.markerDisplayed && $DvtSparkChartAutomation$$.$putToCache$("dataMarkerDisplayedSet", !0)), $DvtChartPie$$[$DvtChartDataCursor$$] = $DvtChartDataChangeMarker$$);
          }
        }
      }
      if ($DvtChartPieLabelInfo$$ && $DvtChartDataUtils$$.$hasVolumeSeries$($DvtSparkChartEventManager$$) && !$DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$)) {
        $DvtChartFunnelSlice$$ = $dvt$$2$$.$JsonUtils$.clone($DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, 0));
        $DvtChartFunnelSlice$$.assignedToY2 = "on";
        $DvtSparkChartAutomation$$.$putToCache$("hasY2Assignment", !0);
        $DvtChartFunnelSlice$$.type = "bar";
        $DvtChartFunnelSlice$$.categories = $DvtChartDataUtils$$.$getCategories$($DvtSparkChartEventManager$$, 0);
        $DvtChartFunnelSlice$$.id = "_volume";
        $DvtChartFunnelSlice$$._selectable = "off";
        $DvtChartFunnelSlice$$.items = [];
        for ($DvtChartDataCursor$$ = 0;$DvtChartDataCursor$$ < $DvtChartDataChange$$.items.length;$DvtChartDataCursor$$++) {
          $DvtSparkChartAutomation$$ = {}, $DvtSparkChartAutomation$$.color = $DvtChartStyleUtils$$.$getStockVolumeColor$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$), $DvtSparkChartAutomation$$.x = $DvtChartDataChange$$.items[$DvtChartDataCursor$$].x, $DvtSparkChartAutomation$$.value = $DvtChartDataChange$$.items[$DvtChartDataCursor$$].volume, $DvtChartFunnelSlice$$.items.push($DvtSparkChartAutomation$$);
        }
        $DvtSparkChartDefaults$$.series.push($DvtChartFunnelSlice$$);
      }
      $DvtChartDataChange$$ = $DvtChartRefObjUtils$$.$getRefObjs$($DvtSparkChartEventManager$$);
      for ($DvtChartFunnelSlice$$ = 0;$DvtChartFunnelSlice$$ < $DvtChartDataChange$$.length;$DvtChartFunnelSlice$$++) {
        if ($DvtChartPie$$ = $DvtChartDataChange$$[$DvtChartFunnelSlice$$].items) {
          for ($DvtChartDataCursor$$ = 0;$DvtChartDataCursor$$ < $DvtChartPie$$.length;$DvtChartDataCursor$$++) {
            if ($DvtChartDataChangeMarker$$ = $DvtChartPie$$[$DvtChartDataCursor$$]) {
              "object" != typeof $DvtChartDataChangeMarker$$ ? $DvtChartPie$$[$DvtChartDataCursor$$] = Number($DvtChartDataChangeMarker$$) : (!$DvtChartAxisUtils$$.$isMixedFrequency$($DvtSparkChartEventManager$$) && $DvtChartDataChangeMarker$$.x && ($DvtChartDataChangeMarker$$.x = Number($DvtChartDataChangeMarker$$.x)), $DvtChartDataChangeMarker$$.max && ($DvtChartDataChangeMarker$$.max = Number($DvtChartDataChangeMarker$$.max)), $DvtChartDataChangeMarker$$.min && ($DvtChartDataChangeMarker$$.min = 
              Number($DvtChartDataChangeMarker$$.min)), $DvtChartDataChangeMarker$$.value && ($DvtChartDataChangeMarker$$.value = Number($DvtChartDataChangeMarker$$.value)));
            }
          }
        }
      }
      $DvtSparkChartDefaults$$.groups || ($DvtSparkChartDefaults$$.groups = []);
      $DvtChartDataCursor$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$);
      for ($DvtChartFunnelSlice$$ = 0;$DvtChartFunnelSlice$$ < $DvtChartRangeMarker$$ - $DvtChartDataCursor$$;$DvtChartFunnelSlice$$++) {
        $DvtChartDataChange$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, "labelDefaultGroupName", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "DEFAULT_GROUP_NAME", $DvtSparkChartDefaults$$.groups.length + 1), $DvtSparkChartDefaults$$.groups.push($DvtChartDataChange$$);
      }
      $DvtSparkChartEventManager$$.$_optionsCache$.$putToCache$("groupsArray", null);
      $DvtChartDataUtils$$.$_processTimeAxis$($DvtSparkChartEventManager$$);
      $DvtChartDataChange$$ = $DvtSparkChartDefaults$$.sorting;
      $DvtChartDataChange$$ = "on" == $DvtChartDataChange$$ ? "descending" : "ascending" != $DvtChartDataChange$$ && "descending" != $DvtChartDataChange$$ ? "off" : $DvtChartDataChange$$;
      if ($DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$) && $DvtChartAxisUtils$$.$hasGroupAxis$($DvtSparkChartEventManager$$) && "off" != $DvtChartDataChange$$ && 1 == $DvtChartDataUtils$$.$getNumLevels$($DvtSparkChartEventManager$$)) {
        for (var $DvtChartRangeMarker$$ = $DvtChartDataUtils$$.$getGroups$($DvtSparkChartEventManager$$), $DvtChartDataChangeFunnelSlice$$ = {}, $DvtChartDataCursor$$ = 0;$DvtChartDataCursor$$ < $DvtChartRangeMarker$$.length;$DvtChartDataCursor$$++) {
          for ($DvtChartFunnelSlice$$ = $DvtSparkChartAutomation$$ = 0;$DvtChartFunnelSlice$$ <= $DvtChartPieLabelUtils$$;$DvtChartFunnelSlice$$++) {
            $DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtChartFunnelSlice$$) && !$DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtChartFunnelSlice$$) && ($DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtChartFunnelSlice$$, $DvtChartDataCursor$$), $DvtSparkChartAutomation$$ += null == $DvtChartPieLabelInfo$$ || isNaN($DvtChartPieLabelInfo$$) ? 0 : $DvtChartPieLabelInfo$$);
          }
          $DvtChartDataChangeFunnelSlice$$[$DvtChartRangeMarker$$[$DvtChartDataCursor$$]] = {index:$DvtChartDataCursor$$, total:$DvtSparkChartAutomation$$, group:$DvtSparkChartDefaults$$.groups[$DvtChartDataCursor$$]};
        }
        "ascending" == $DvtChartDataChange$$ ? $DvtChartRangeMarker$$.sort(function($dvt$$2$$, $DvtSparkChartEventManager$$) {
          return $DvtChartDataChangeFunnelSlice$$[$dvt$$2$$].total - $DvtChartDataChangeFunnelSlice$$[$DvtSparkChartEventManager$$].total;
        }) : $DvtChartRangeMarker$$.sort(function($dvt$$2$$, $DvtSparkChartEventManager$$) {
          return $DvtChartDataChangeFunnelSlice$$[$DvtSparkChartEventManager$$].total - $DvtChartDataChangeFunnelSlice$$[$dvt$$2$$].total;
        });
        for ($DvtChartFunnelSlice$$ = 0;$DvtChartFunnelSlice$$ < $DvtChartPieLabelUtils$$;$DvtChartFunnelSlice$$++) {
          $DvtChartDataChange$$ = [];
          for ($DvtChartDataCursor$$ = 0;$DvtChartDataCursor$$ < $DvtChartRangeMarker$$.length;$DvtChartDataCursor$$++) {
            $DvtChartDataChange$$.push($DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtChartFunnelSlice$$, $DvtChartDataChangeFunnelSlice$$[$DvtChartRangeMarker$$[$DvtChartDataCursor$$]].index));
          }
          $DvtSparkChartDefaults$$.series[$DvtChartFunnelSlice$$].items = $DvtChartDataChange$$;
        }
        $DvtChartPieLabelUtils$$ = [];
        for ($DvtChartDataCursor$$ = 0;$DvtChartDataCursor$$ < $DvtChartRangeMarker$$.length;$DvtChartDataCursor$$++) {
          $DvtChartPieLabelUtils$$.push($DvtChartDataChangeFunnelSlice$$[$DvtChartRangeMarker$$[$DvtChartDataCursor$$]].group);
        }
        $DvtSparkChartDefaults$$.groups = $DvtChartPieLabelUtils$$;
        $DvtSparkChartEventManager$$.$_optionsCache$.$putToCache$("groupsArray", null);
        $DvtSparkChartEventManager$$.$_optionsCache$.$putToCache$("value", null);
      }
      $DvtChartDataUtils$$.$_sanitizeAxis$($DvtSparkChartDefaults$$.xAxis);
      $DvtChartDataUtils$$.$_sanitizeAxis$($DvtSparkChartDefaults$$.yAxis);
      $DvtChartDataUtils$$.$_sanitizeAxis$($DvtSparkChartDefaults$$.y2Axis);
    }
  };
  $DvtChartDataUtils$$.$_sanitizeAxis$ = function $$DvtChartDataUtils$$$$_sanitizeAxis$$($dvt$$2$$) {
    $dvt$$2$$.min == $dvt$$2$$.max && ($dvt$$2$$.min = null, $dvt$$2$$.max = null);
  };
  $DvtChartDataUtils$$.$_sanitizeDateTime$ = function $$DvtChartDataUtils$$$$_sanitizeDateTime$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = null, $DvtSparkChartAutomation$$ = $dvt$$2$$.$getLocaleHelpers$.isoToDateConverter;
    if ($DvtSparkChartAutomation$$) {
      try {
        $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$($DvtSparkChartEventManager$$);
      } catch ($DvtChartRefObjUtils$$) {
        $DvtSparkChartDefaults$$ = null;
      }
      null != $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.getTime());
    }
    null == $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = Date.parse($DvtSparkChartEventManager$$));
    isNaN($DvtSparkChartDefaults$$) && ($DvtSparkChartDefaults$$ = Number($DvtSparkChartEventManager$$));
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.$_processTimeAxis$ = function $$DvtChartDataUtils$$$$_processTimeAxis$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getCtx$(), $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);
    if ($DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$)) {
      for ($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtChartPieLabelInfo$$;$DvtSparkChartAutomation$$++) {
        for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartPieRenderUtils$$;$DvtChartPieLabelUtils$$++) {
          var $DvtChartDataChangePyramidSlice$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$);
          null != $DvtChartDataChangePyramidSlice$$ && "string" == typeof $DvtChartDataChangePyramidSlice$$.x && null != $DvtChartDataChangePyramidSlice$$.x && ($DvtChartDataChangePyramidSlice$$.x = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtChartDataChangePyramidSlice$$.x));
        }
      }
    } else {
      if ($DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$)) {
        for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartPieRenderUtils$$;$DvtChartPieLabelUtils$$++) {
          $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtChartPieLabelUtils$$), null != $DvtSparkChartAutomation$$ && ($DvtSparkChartDefaults$$.groups[$DvtChartPieLabelUtils$$] = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$));
        }
        $dvt$$2$$.$_optionsCache$.$putToCache$("groupsArray", null);
      }
    }
    if ($DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$)) {
      for ($DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.xAxis, null != $DvtSparkChartDefaults$$.dataMin && ($DvtSparkChartDefaults$$.dataMin = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.dataMin)), null != $DvtSparkChartDefaults$$.dataMax && ($DvtSparkChartDefaults$$.dataMax = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.dataMax)), null != $DvtSparkChartDefaults$$.min && ($DvtSparkChartDefaults$$.min = 
      $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.min)), null != $DvtSparkChartDefaults$$.max && ($DvtSparkChartDefaults$$.max = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.max)), null != $DvtSparkChartDefaults$$.viewportMin && ($DvtSparkChartDefaults$$.viewportMin = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.viewportMin)), null != $DvtSparkChartDefaults$$.viewportMax && 
      ($DvtSparkChartDefaults$$.viewportMax = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.viewportMax)), null != $DvtSparkChartDefaults$$.viewportStartGroup && ($DvtSparkChartDefaults$$.viewportStartGroup = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.viewportStartGroup)), null != $DvtSparkChartDefaults$$.viewportEndGroup && ($DvtSparkChartDefaults$$.viewportEndGroup = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, 
      $DvtSparkChartDefaults$$.viewportEndGroup)), $dvt$$2$$ = $DvtChartRefObjUtils$$.$getRefObjs$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
        if ($DvtChartPieLabelUtils$$ = $dvt$$2$$[$DvtSparkChartDefaults$$].items) {
          for ($DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtChartPieLabelUtils$$.length;$DvtChartPieRenderUtils$$++) {
            $DvtChartPieLabelUtils$$[$DvtChartPieRenderUtils$$] && null != $DvtChartPieLabelUtils$$[$DvtChartPieRenderUtils$$].x && ($DvtChartPieLabelUtils$$[$DvtChartPieRenderUtils$$].x = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$[$DvtChartPieRenderUtils$$].x));
          }
        }
      }
    }
  };
  $DvtChartDataUtils$$.$isEqualId$ = function $$DvtChartDataUtils$$$$isEqualId$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return null == $DvtSparkChartEventManager$$ || null == $DvtSparkChartDefaults$$ ? !1 : $DvtSparkChartEventManager$$ == $DvtSparkChartDefaults$$ || $dvt$$2$$.$ArrayUtils$.isArray($DvtSparkChartEventManager$$) && $dvt$$2$$.$ArrayUtils$.isArray($DvtSparkChartDefaults$$) && $dvt$$2$$.$ArrayUtils$.$equals$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? !0 : !1;
  };
  $DvtChartDataUtils$$.$getSeriesCount$ = function $$DvtChartDataUtils$$$$getSeriesCount$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().series.length;
  };
  $DvtChartDataUtils$$.$getY2SeriesCount$ = function $$DvtChartDataUtils$$$$getY2SeriesCount$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = 0, $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$;$DvtSparkChartAutomation$$++) {
      $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtSparkChartAutomation$$) && $DvtSparkChartEventManager$$++;
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartDataUtils$$.$getSeries$ = function $$DvtChartDataUtils$$$$getSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$.id ? $DvtSparkChartDefaults$$.id : $DvtSparkChartDefaults$$.name || "" == $DvtSparkChartDefaults$$.name ? $DvtSparkChartDefaults$$.name : String($DvtSparkChartEventManager$$) : null;
  };
  $DvtChartDataUtils$$.$getSeriesLabel$ = function $$DvtChartDataUtils$$$$getSeriesLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$.name || "" == $DvtSparkChartDefaults$$.name) ? $DvtSparkChartDefaults$$.name : null;
  };
  $DvtChartDataUtils$$.$getSeriesIndex$ = function $$DvtChartDataUtils$$$$getSeriesIndex$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$;$DvtSparkChartAutomation$$++) {
      if ($DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartAutomation$$) == $DvtSparkChartEventManager$$) {
        return $DvtSparkChartAutomation$$;
      }
    }
    return -1;
  };
  $DvtChartDataUtils$$.$getSeriesStyleIndex$ = function $$DvtChartDataUtils$$$$getSeriesStyleIndex$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if ($DvtSparkChartEventManager$$.$_optionsCache$.$getFromCache$("hasLargeSeriesCount")) {
      return $DvtSparkChartDefaults$$;
    }
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartAutomation$$ ? $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtSparkChartEventManager$$.$SeriesStyleArray$, $DvtSparkChartAutomation$$) : $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.$getSeriesItem$ = function $$DvtChartDataUtils$$$$getSeriesItem$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if (isNaN($DvtSparkChartEventManager$$) || null == $DvtSparkChartEventManager$$ || 0 > $DvtSparkChartEventManager$$) {
      return null;
    }
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$();
    if ($DvtSparkChartDefaults$$.series && $DvtSparkChartDefaults$$.series.length > $DvtSparkChartEventManager$$) {
      return $DvtSparkChartDefaults$$.series[$DvtSparkChartEventManager$$];
    }
  };
  $DvtChartDataUtils$$.$getDataItem$ = function $$DvtChartDataUtils$$$$getDataItem$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return isNaN($DvtSparkChartDefaults$$) || null == $DvtSparkChartDefaults$$ || 0 > $DvtSparkChartDefaults$$ ? null : ($dvt$$2$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $dvt$$2$$.items && $dvt$$2$$.items.length > $DvtSparkChartDefaults$$ ? $dvt$$2$$.items[$DvtSparkChartDefaults$$] : null;
  };
  $DvtChartDataUtils$$.$getDataItemId$ = function $$DvtChartDataUtils$$$$getDataItemId$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartAutomation$$ ? null != $DvtSparkChartAutomation$$.id ? $DvtSparkChartAutomation$$.id : $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartEventManager$$) + "; " + $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtSparkChartDefaults$$) : null;
  };
  $DvtChartDataUtils$$.$getNestedDataItem$ = function $$DvtChartDataUtils$$$$getNestedDataItem$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return isNaN($DvtSparkChartAutomation$$) || null == $DvtSparkChartAutomation$$ || 0 > $DvtSparkChartAutomation$$ ? null : ($dvt$$2$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $dvt$$2$$.items && $dvt$$2$$.items.length > $DvtSparkChartAutomation$$ ? $dvt$$2$$.items[$DvtSparkChartAutomation$$] : null;
  };
  $DvtChartDataUtils$$.$getNestedDataItemCount$ = function $$DvtChartDataUtils$$$$getNestedDataItemCount$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return ($dvt$$2$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $dvt$$2$$.items ? $dvt$$2$$.items.length : 0;
  };
  $DvtChartDataUtils$$.$getNestedDataItemId$ = function $$DvtChartDataUtils$$$$getNestedDataItemId$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getNestedDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    return $DvtChartRefObjUtils$$ ? null != $DvtChartRefObjUtils$$.id ? $DvtChartRefObjUtils$$.id : $DvtChartDataUtils$$.$getDataItemId$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) + "; " + String($DvtSparkChartAutomation$$) : null;
  };
  $DvtChartDataUtils$$.$getNestedDataItemIndex$ = function $$DvtChartDataUtils$$$$getNestedDataItemIndex$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for (var $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getNestedDataItemCount$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtChartRefObjUtils$$;$DvtChartAxisUtils$$++) {
      var $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getNestedDataItemId$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartAxisUtils$$);
      if ($DvtChartDataUtils$$.$isEqualId$($DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$)) {
        return $DvtChartAxisUtils$$;
      }
    }
    return -1;
  };
  $DvtChartDataUtils$$.$getGroupCount$ = function $$DvtChartDataUtils$$$$getGroupCount$$($dvt$$2$$) {
    return $DvtChartDataUtils$$.$_getGroupsArray$($dvt$$2$$).length;
  };
  $DvtChartDataUtils$$.$getGroup$ = function $$DvtChartDataUtils$$$$getGroup$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if (null != $DvtSparkChartEventManager$$ && 0 <= $DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$ < $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$)) {
      var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$_getGroupsArray$($dvt$$2$$)[$DvtSparkChartEventManager$$];
      if ($DvtSparkChartDefaults$$) {
        return $DvtSparkChartDefaults$$.id ? $DvtSparkChartDefaults$$.id : $DvtSparkChartDefaults$$.name || "" == $DvtSparkChartDefaults$$.name ? $DvtSparkChartDefaults$$.name : String($DvtSparkChartEventManager$$);
      }
    }
    return null;
  };
  $DvtChartDataUtils$$.$getGroupIndex$ = function $$DvtChartDataUtils$$$$getGroupIndex$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for (var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getGroups$($DvtSparkChartEventManager$$), $DvtChartRefObjUtils$$ = 0;$DvtChartRefObjUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartRefObjUtils$$++) {
      if ($DvtSparkChartDefaults$$ instanceof Array && $DvtSparkChartAutomation$$[$DvtChartRefObjUtils$$] instanceof Array ? $dvt$$2$$.$ArrayUtils$.$equals$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$[$DvtChartRefObjUtils$$]) : $DvtSparkChartDefaults$$ == $DvtSparkChartAutomation$$[$DvtChartRefObjUtils$$]) {
        return $DvtChartRefObjUtils$$;
      }
    }
    return -1;
  };
  $DvtChartDataUtils$$.$getGroupLabel$ = function $$DvtChartDataUtils$$$$getGroupLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if (0 <= $DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$ < $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$)) {
      var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$_getGroupsArray$($dvt$$2$$)[$DvtSparkChartEventManager$$];
      if ($DvtSparkChartDefaults$$) {
        return $DvtSparkChartDefaults$$.name ? $DvtSparkChartDefaults$$.name : null != $DvtSparkChartDefaults$$.id ? "" : $DvtSparkChartDefaults$$;
      }
    }
    return null;
  };
  $DvtChartDataUtils$$.$getGroups$ = function $$DvtChartDataUtils$$$$getGroups$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$;$DvtSparkChartAutomation$$++) {
      $DvtSparkChartDefaults$$.push($DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtSparkChartAutomation$$));
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.$_getGroupsArray$ = function $$DvtChartDataUtils$$$$_getGroupsArray$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartDefaults$$ = $dvt$$2$$.$_optionsCache$.$getFromCache$("groupsArray");
    if (!$DvtSparkChartDefaults$$) {
      $DvtSparkChartDefaults$$ = [];
      $DvtSparkChartEventManager$$.groups && ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$_getNestedGroups$($DvtSparkChartEventManager$$.groups, $DvtSparkChartDefaults$$));
      for ($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartEventManager$$++) {
        1 == $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].id.length && ($DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].id = $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].id[0], $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].name = $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].name[0]);
      }
      $dvt$$2$$.$_optionsCache$.$putToCache$("groupsArray", $DvtSparkChartDefaults$$);
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.$_getNestedGroups$ = function $$DvtChartDataUtils$$$$_getNestedGroups$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ($dvt$$2$$) {
      for (var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
        var $DvtSparkChartAutomation$$ = $dvt$$2$$[$DvtSparkChartDefaults$$], $DvtChartRefObjUtils$$ = null, $DvtChartAxisUtils$$ = null;
        null != $DvtSparkChartAutomation$$ && ($DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.id ? $DvtSparkChartAutomation$$.id : $DvtSparkChartAutomation$$.name ? $DvtSparkChartAutomation$$.name : $DvtSparkChartAutomation$$, $DvtChartAxisUtils$$ = $DvtSparkChartAutomation$$.name ? $DvtSparkChartAutomation$$.name : $DvtSparkChartAutomation$$);
        "object" == typeof $DvtChartRefObjUtils$$ && ($DvtChartRefObjUtils$$ = null);
        "object" == typeof $DvtChartAxisUtils$$ && ($DvtChartAxisUtils$$ = null);
        if ($DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.groups) {
          ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$_getNestedGroups$($DvtSparkChartAutomation$$.groups, [])) || ($DvtSparkChartAutomation$$ = [{id:[], name:[]}]);
          for (var $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartPieLabelUtils$$++) {
            $DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$].id.unshift($DvtChartRefObjUtils$$), $DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$].name.unshift($DvtChartAxisUtils$$);
          }
          $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.concat($DvtSparkChartAutomation$$);
        } else {
          $DvtSparkChartEventManager$$.push({id:[$DvtChartRefObjUtils$$], name:[$DvtChartAxisUtils$$]});
        }
      }
      return $DvtSparkChartEventManager$$;
    }
  };
  $DvtChartDataUtils$$.$getNumLevels$ = function $$DvtChartDataUtils$$$$getNumLevels$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$_getGroupsArray$($DvtSparkChartEventManager$$);
    for (var $DvtSparkChartDefaults$$ = 0, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$];
      $DvtChartRefObjUtils$$ && $DvtChartRefObjUtils$$.id && ($DvtChartRefObjUtils$$ = $dvt$$2$$.$ArrayUtils$.isArray($DvtChartRefObjUtils$$.id) ? $DvtChartRefObjUtils$$.id.length : 1, $DvtSparkChartDefaults$$ = Math.max($DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$));
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.getValue = function $$DvtChartDataUtils$$$getValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$ = !isNaN($DvtSparkChartAutomation$$) && null != $DvtSparkChartAutomation$$ && 0 <= $DvtSparkChartAutomation$$;
    if (!$DvtChartAxisUtils$$ && ($DvtChartRefObjUtils$$ = $dvt$$2$$.$_optionsCache$.$getFromCachedMap2D$("value", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), void 0 !== $DvtChartRefObjUtils$$)) {
      return $DvtChartRefObjUtils$$;
    }
    $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$ ? $DvtChartDataUtils$$.$getNestedDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) : $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartRefObjUtils$$ = null;
    null != $DvtSparkChartAutomation$$ && ("object" != typeof $DvtSparkChartAutomation$$ ? $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$ : $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) && null != $DvtSparkChartAutomation$$.close ? $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.close : null != $DvtSparkChartAutomation$$.value ? $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.value : null != $DvtSparkChartAutomation$$.y && ($DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.y));
    $DvtChartRefObjUtils$$ = $DvtChartRefObjUtils$$ || (0 === $DvtChartRefObjUtils$$ ? 0 : null);
    $DvtChartAxisUtils$$ || $dvt$$2$$.$_optionsCache$.$putToCachedMap2D$("value", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$);
    return $DvtChartRefObjUtils$$;
  };
  $DvtChartDataUtils$$.$getCumulativeValue$ = function $$DvtChartDataUtils$$$$getCumulativeValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if (!$DvtChartTypeUtils$$.$isStacked$($dvt$$2$$)) {
      return $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    }
    var $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$ ? "cumValueH" : "cumValue", $DvtChartAxisUtils$$ = $dvt$$2$$.$_cache$.$getFromCachedMap2D$($DvtChartRefObjUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if (void 0 !== $DvtChartAxisUtils$$) {
      return $DvtChartAxisUtils$$;
    }
    for (var $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartDataChangePyramidSlice$$ = $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartSeriesEffectUtils$$ = 
    "bar" == $DvtChartPieLabelUtils$$ ? 0 > $DvtChartPieRenderUtils$$ : $DvtChartDataUtils$$.$isSeriesNegative$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartAxisUtils$$ = 0, $DvtChartRangeMarker$$ = $DvtSparkChartEventManager$$;0 <= $DvtChartRangeMarker$$;$DvtChartRangeMarker$$--) {
      if (($DvtSparkChartAutomation$$ || $DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtChartRangeMarker$$, $DvtSparkChartDefaults$$)) && $DvtChartPieLabelUtils$$ == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartRangeMarker$$) && $DvtChartPieLabelInfo$$ == $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartRangeMarker$$) && $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtChartRangeMarker$$) == $DvtChartDataChangePyramidSlice$$) {
        var $DvtChartPolarBar$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartRangeMarker$$, $DvtSparkChartDefaults$$), $DvtChartFunnelSlice$$ = "bar" == $DvtChartPieLabelUtils$$ ? 0 > $DvtChartPolarBar$$ : $DvtChartDataUtils$$.$isSeriesNegative$($dvt$$2$$, $DvtChartRangeMarker$$);
        if ($DvtChartSeriesEffectUtils$$ && $DvtChartFunnelSlice$$ || !$DvtChartSeriesEffectUtils$$ && !$DvtChartFunnelSlice$$) {
          $DvtChartFunnelSlice$$ = $dvt$$2$$.$_cache$.$getFromCachedMap2D$($DvtChartRefObjUtils$$, $DvtChartRangeMarker$$, $DvtSparkChartDefaults$$);
          if (void 0 !== $DvtChartFunnelSlice$$) {
            $DvtChartAxisUtils$$ = $DvtChartPieRenderUtils$$ + ($DvtChartFunnelSlice$$ || 0);
            break;
          }
          $DvtChartAxisUtils$$ += null == $DvtChartPolarBar$$ || isNaN($DvtChartPolarBar$$) ? 0 : $DvtChartPolarBar$$;
        }
      }
    }
    $dvt$$2$$.$_cache$.$putToCachedMap2D$($DvtChartRefObjUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartAxisUtils$$);
    return $DvtChartAxisUtils$$;
  };
  $DvtChartDataUtils$$.$getLowValue$ = function $$DvtChartDataUtils$$$$getLowValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return null == $DvtSparkChartDefaults$$ ? null : "candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$) ? null == $DvtSparkChartDefaults$$.low && null != $DvtSparkChartDefaults$$.close ? null != $DvtSparkChartDefaults$$.open ? Math.min($DvtSparkChartDefaults$$.close, $DvtSparkChartDefaults$$.open) : $DvtSparkChartDefaults$$.close : $DvtSparkChartDefaults$$.low : null != $DvtSparkChartDefaults$$.low && null == $DvtSparkChartDefaults$$.close ? $DvtSparkChartDefaults$$.low : 
    null;
  };
  $DvtChartDataUtils$$.$getHighValue$ = function $$DvtChartDataUtils$$$$getHighValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return null == $DvtSparkChartDefaults$$ ? null : "candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$) ? null == $DvtSparkChartDefaults$$.high ? null != $DvtSparkChartDefaults$$.open ? Math.max($DvtSparkChartDefaults$$.close, $DvtSparkChartDefaults$$.open) : $DvtSparkChartDefaults$$.close : $DvtSparkChartDefaults$$.high : null != $DvtSparkChartDefaults$$.high && null == $DvtSparkChartDefaults$$.close ? $DvtSparkChartDefaults$$.high : null;
  };
  $DvtChartDataUtils$$.$getXValue$ = function $$DvtChartDataUtils$$$$getXValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if ($DvtChartAxisUtils$$.$hasGroupAxis$($dvt$$2$$)) {
      return $DvtSparkChartDefaults$$;
    }
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if (null == $DvtSparkChartEventManager$$) {
      return null;
    }
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.x;
    return null != $DvtSparkChartEventManager$$ ? $DvtSparkChartEventManager$$ : $DvtChartDataUtils$$.$getGroupLabel$($dvt$$2$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartDataUtils$$.$getTargetValue$ = function $$DvtChartDataUtils$$$$getTargetValue$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, 0);
    return null == $DvtSparkChartDefaults$$ || "object" != typeof $DvtSparkChartDefaults$$ ? null : $DvtSparkChartDefaults$$.targetValue;
  };
  $DvtChartDataUtils$$.$getZValue$ = function $$DvtChartDataUtils$$$$getZValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $dvt$$2$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return null == $dvt$$2$$ || "object" != typeof $dvt$$2$$ ? $DvtSparkChartAutomation$$ : null != $dvt$$2$$.z ? $dvt$$2$$.z : $DvtSparkChartAutomation$$;
  };
  $DvtChartDataUtils$$.$isStockValueRising$ = function $$DvtChartDataUtils$$$$isStockValueRising$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return ($dvt$$2$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) ? $dvt$$2$$.open <= $dvt$$2$$.close : !0;
  };
  $DvtChartDataUtils$$.$getCategories$ = function $$DvtChartDataUtils$$$$getCategories$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getNestedDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) && $DvtSparkChartAutomation$$.categories ? $DvtSparkChartAutomation$$.categories : ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.categories || ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, 
    $DvtSparkChartEventManager$$)) && $DvtSparkChartDefaults$$.categories ? $DvtSparkChartDefaults$$.categories : ($dvt$$2$$ = $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartEventManager$$)) ? [$dvt$$2$$] : [];
  };
  $DvtChartDataUtils$$.$isXValInViewport$ = function $$DvtChartDataUtils$$$$isXValInViewport$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if (isNaN($DvtSparkChartEventManager$$) || null == $DvtSparkChartEventManager$$) {
      return !1;
    }
    var $DvtSparkChartDefaults$$ = $DvtChartAxisUtils$$.$getXAxisViewportMinMax$($dvt$$2$$, !0);
    return !(null != $DvtSparkChartDefaults$$.min && $DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$.min) && !(null != $DvtSparkChartDefaults$$.max && $DvtSparkChartEventManager$$ > $DvtSparkChartDefaults$$.max);
  };
  $DvtChartDataUtils$$.$isXInViewport$ = function $$DvtChartDataUtils$$$$isXInViewport$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$_cache$.$getFromCachedMap2D$("isXInViewport", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    null == $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$isXValInViewport$($dvt$$2$$, $DvtSparkChartAutomation$$), $dvt$$2$$.$_cache$.$putToCachedMap2D$("isXInViewport", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$));
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartDataUtils$$.$isRefObjInViewport$ = function $$DvtChartDataUtils$$$$isRefObjInViewport$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartRefObjUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartAxisUtils$$ = $dvt$$2$$.$_cache$.$getFromCachedMap2D$("isRefObjInViewport", $DvtSparkChartAutomation$$);
    null == $DvtChartAxisUtils$$ && ($DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ - 1), $DvtSparkChartEventManager$$ = $DvtChartRefObjUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ + 1), $DvtChartAxisUtils$$ = $DvtChartDataUtils$$.$isXValInViewport$($dvt$$2$$, $DvtSparkChartAutomation$$) || $DvtChartDataUtils$$.$isXValInViewport$($dvt$$2$$, $DvtChartAxisUtils$$) || $DvtChartDataUtils$$.$isXValInViewport$($dvt$$2$$, 
    $DvtSparkChartEventManager$$), $dvt$$2$$.$_cache$.$putToCachedMap2D$("isRefObjInViewport", $DvtSparkChartAutomation$$, $DvtChartAxisUtils$$));
    return $DvtChartAxisUtils$$;
  };
  $DvtChartDataUtils$$.$isBLACItemInViewport$ = function $$DvtChartDataUtils$$$$isBLACItemInViewport$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return $DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? $DvtChartDataUtils$$.$isXInViewport$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) || $DvtChartDataUtils$$.$isXInViewport$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ - 1) || $DvtChartDataUtils$$.$isXInViewport$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ + 1) : !1;
  };
  $DvtChartDataUtils$$.$getViewportGroupCount$ = function $$DvtChartDataUtils$$$$getViewportGroupCount$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartAxisUtils$$.$getXAxisViewportMinMax$($dvt$$2$$, !0), $DvtSparkChartDefaults$$ = $DvtChartAxisUtils$$.$getXAxisGlobalMinMax$($dvt$$2$$), $DvtSparkChartEventManager$$ = ($DvtSparkChartEventManager$$.max - $DvtSparkChartEventManager$$.min) / ($DvtSparkChartDefaults$$.max - $DvtSparkChartDefaults$$.min);
    return isNaN($DvtSparkChartEventManager$$) ? 1 : $DvtSparkChartEventManager$$ * $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);
  };
  $DvtChartDataUtils$$.$_computeYAlongLine$ = function $$DvtChartDataUtils$$$$_computeYAlongLine$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$) {
    $DvtSparkChartEventManager$$ && ($DvtSparkChartAutomation$$ = $dvt$$2$$.Math.log10($DvtSparkChartAutomation$$), $DvtChartAxisUtils$$ = $dvt$$2$$.Math.log10($DvtChartAxisUtils$$));
    $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$ + ($DvtChartAxisUtils$$ - $DvtSparkChartAutomation$$) * ($DvtChartPieLabelUtils$$ - $DvtSparkChartDefaults$$) / ($DvtChartRefObjUtils$$ - $DvtSparkChartDefaults$$);
    return $DvtSparkChartEventManager$$ ? Math.pow(10, $DvtSparkChartDefaults$$) : $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.$_getViewportEdgeYValues$ = function $$DvtChartDataUtils$$$$_getViewportEdgeYValues$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$).items;
    if (!$DvtSparkChartDefaults$$) {
      return {min:null, max:null};
    }
    for (var $DvtSparkChartAutomation$$ = "withoutRescale" == $DvtChartEventUtils$$.$getHideAndShowBehavior$($dvt$$2$$), $DvtChartRefObjUtils$$ = $DvtChartAxisUtils$$.$getXAxisViewportMinMax$($dvt$$2$$, !0), $DvtChartPieLabelUtils$$ = $DvtChartRefObjUtils$$.min, $DvtChartRefObjUtils$$ = $DvtChartRefObjUtils$$.max, $DvtChartPieLabelInfo$$ = $DvtChartAxisUtils$$.$isLog$($dvt$$2$$, $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtSparkChartEventManager$$) ? "y2" : "y"), $DvtChartPieRenderUtils$$, 
    $DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$, $DvtChartFunnelSlice$$, $DvtChartDataCursor$$ = 0;$DvtChartDataCursor$$ < $DvtSparkChartDefaults$$.length;$DvtChartDataCursor$$++) {
      if ($DvtSparkChartAutomation$$ || $DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartDataCursor$$)) {
        $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartDataCursor$$), $DvtChartDataChangePyramidSlice$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartDataCursor$$, $DvtSparkChartAutomation$$), null != $DvtChartSeriesEffectUtils$$ && (null != $DvtChartPieLabelUtils$$ && $DvtChartPieLabelUtils$$ > $DvtChartSeriesEffectUtils$$ && $DvtChartPieLabelUtils$$ < $DvtChartPieRenderUtils$$ && ($DvtChartPolarBar$$ = 
        $DvtChartDataUtils$$.$_computeYAlongLine$($DvtChartPieLabelInfo$$, $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangePyramidSlice$$, $DvtChartPieLabelUtils$$)), null != $DvtChartRefObjUtils$$ && $DvtChartRefObjUtils$$ > $DvtChartSeriesEffectUtils$$ && $DvtChartRefObjUtils$$ < $DvtChartPieRenderUtils$$ && ($DvtChartFunnelSlice$$ = $DvtChartDataUtils$$.$_computeYAlongLine$($DvtChartPieLabelInfo$$, $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$, 
        $DvtChartPieRenderUtils$$, $DvtChartDataChangePyramidSlice$$, $DvtChartRefObjUtils$$))), $DvtChartSeriesEffectUtils$$ = $DvtChartPieRenderUtils$$, $DvtChartRangeMarker$$ = $DvtChartDataChangePyramidSlice$$;
      }
    }
    return {min:$DvtChartPolarBar$$, max:$DvtChartFunnelSlice$$};
  };
  $DvtChartDataUtils$$.$getMinMaxValue$ = function $$DvtChartDataUtils$$$$getMinMaxValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$ + ($DvtSparkChartDefaults$$ ? "MinMaxDO" : "MinMax"), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$_cache$.$getFromCache$($DvtSparkChartAutomation$$);
    if ($DvtChartPieLabelUtils$$) {
      return $DvtChartPieLabelUtils$$;
    }
    $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"];
    if (null != $DvtChartPieLabelUtils$$.dataMax && null != $DvtChartPieLabelUtils$$.dataMin && $DvtSparkChartDefaults$$) {
      return $DvtChartPieLabelUtils$$ = {min:$DvtChartPieLabelUtils$$.dataMin, max:$DvtChartPieLabelUtils$$.dataMax}, $dvt$$2$$.$_cache$.$putToCache$($DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$), $DvtChartPieLabelUtils$$;
    }
    var $DvtChartPieLabelInfo$$ = "z" != $DvtSparkChartEventManager$$ && $DvtChartAxisUtils$$.$isLog$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = "y2" == $DvtSparkChartEventManager$$;
    $DvtChartPieRenderUtils$$ && ($DvtSparkChartEventManager$$ = "y");
    for (var $DvtChartDataChangePyramidSlice$$ = "y" == $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$ = !$DvtSparkChartDefaults$$ && $DvtChartDataChangePyramidSlice$$ && $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$), $DvtChartSeriesEffectUtils$$ = "withoutRescale" == $DvtChartEventUtils$$.$getHideAndShowBehavior$($dvt$$2$$) || "x" == $DvtSparkChartEventManager$$ && $DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$), $DvtChartRangeMarker$$ = -Infinity, $DvtChartPolarBar$$ = Infinity, $DvtChartFunnelSlice$$ = 
    $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartDataCursor$$ = 0;$DvtChartDataCursor$$ < $DvtChartFunnelSlice$$;$DvtChartDataCursor$$++) {
      var $DvtChartDataChange$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtChartDataCursor$$), $DvtChartDataChangeMarker$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartDataCursor$$), $DvtChartPie$$ = $DvtChartDataChangePyramidSlice$$ && ($DvtChartStyleUtils$$.$isRangeSeries$($dvt$$2$$, $DvtChartDataCursor$$) || "candlestick" == $DvtChartDataChangeMarker$$ || "boxPlot" == $DvtChartDataChangeMarker$$);
      if ($DvtChartSeriesEffectUtils$$ || $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartDataCursor$$)) {
        if ($DvtChartDataChangeMarker$$ = $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartDataCursor$$), !$DvtChartDataChangePyramidSlice$$ || $DvtChartPieRenderUtils$$ == $DvtChartDataChangeMarker$$) {
          var $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataChange$$.items;
          if ($DvtChartDataChangeFunnelSlice$$) {
            for (var $DvtChartDataChangeRangeMarker$$ = 0;$DvtChartDataChangeRangeMarker$$ < $DvtChartDataChangeFunnelSlice$$.length;$DvtChartDataChangeRangeMarker$$++) {
              if ($DvtChartSeriesEffectUtils$$ || $DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtChartDataCursor$$, $DvtChartDataChangeRangeMarker$$)) {
                if ("object" != typeof $DvtChartDataChangeFunnelSlice$$[$DvtChartDataChangeRangeMarker$$] && ($DvtChartDataChangeFunnelSlice$$[$DvtChartDataChangeRangeMarker$$] = {y:$DvtChartDataChangeFunnelSlice$$[$DvtChartDataChangeRangeMarker$$]}), $DvtChartDataChange$$ = $DvtChartDataChangeFunnelSlice$$[$DvtChartDataChangeRangeMarker$$], $DvtChartDataChangeMarker$$ = null, $DvtChartDataChangePyramidSlice$$ ? $DvtChartPie$$ || ($DvtChartDataChangeMarker$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, 
                $DvtChartDataCursor$$, $DvtChartDataChangeRangeMarker$$, $DvtChartSeriesEffectUtils$$)) : "x" == $DvtSparkChartEventManager$$ && $DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$) && !$DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$) ? ($DvtChartDataChangeMarker$$ = $DvtChartDataUtils$$.$getGroupLabel$($dvt$$2$$, $DvtChartDataChangeRangeMarker$$), null != $DvtChartDataChange$$ && ($DvtChartDataChange$$.x = $DvtChartDataChangeMarker$$)) : null != $DvtChartDataChange$$ && ($DvtChartDataChangeMarker$$ = 
                $DvtChartDataChange$$[$DvtSparkChartEventManager$$]), !("z" == $DvtSparkChartEventManager$$ && 0 >= $DvtChartDataChangeMarker$$ || $DvtChartPieLabelUtils$$ && !$DvtChartDataUtils$$.$isXInViewport$($dvt$$2$$, $DvtChartDataCursor$$, $DvtChartDataChangeRangeMarker$$))) {
                  if (!($DvtChartPie$$ || null == $DvtChartDataChangeMarker$$ || "number" != typeof $DvtChartDataChangeMarker$$ || $DvtChartPieLabelInfo$$ && 0 >= $DvtChartDataChangeMarker$$)) {
                    var $DvtChartPyramidSlice$$ = 0;
                    $DvtChartTypeUtils$$.$isBubble$($dvt$$2$$) && !$DvtSparkChartDefaults$$ && "z" != $DvtSparkChartEventManager$$ && ($DvtChartPyramidSlice$$ = $DvtChartMarkerUtils$$.$getBubbleAxisRadius$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartDataChange$$.markerSize));
                    $DvtChartRangeMarker$$ = Math.max($DvtChartRangeMarker$$, $DvtChartPieLabelInfo$$ ? $DvtChartDataChangeMarker$$ * Math.pow(10, $DvtChartPyramidSlice$$) : $DvtChartDataChangeMarker$$ + $DvtChartPyramidSlice$$);
                    $DvtChartPolarBar$$ = Math.min($DvtChartPolarBar$$, $DvtChartPieLabelInfo$$ ? $DvtChartDataChangeMarker$$ / Math.pow(10, $DvtChartPyramidSlice$$) : $DvtChartDataChangeMarker$$ - $DvtChartPyramidSlice$$);
                  }
                  $DvtChartPie$$ && ($DvtChartDataChange$$ = $DvtChartDataUtils$$.$getHighValue$($dvt$$2$$, $DvtChartDataCursor$$, $DvtChartDataChangeRangeMarker$$), $DvtChartDataChangeMarker$$ = $DvtChartDataUtils$$.$getLowValue$($dvt$$2$$, $DvtChartDataCursor$$, $DvtChartDataChangeRangeMarker$$), $DvtChartPieLabelInfo$$ && (0 >= $DvtChartDataChange$$ || 0 >= $DvtChartDataChangeMarker$$) || ($DvtChartRangeMarker$$ = Math.max($DvtChartRangeMarker$$, $DvtChartDataChange$$, $DvtChartDataChangeMarker$$), 
                  $DvtChartPolarBar$$ = Math.min($DvtChartPolarBar$$, $DvtChartDataChange$$, $DvtChartDataChangeMarker$$)));
                }
              }
            }
            $DvtChartPieLabelUtils$$ && ($DvtChartDataChange$$ = $DvtChartDataUtils$$.$_getViewportEdgeYValues$($dvt$$2$$, $DvtChartDataCursor$$), null != $DvtChartDataChange$$.min && ($DvtChartPolarBar$$ = Math.min($DvtChartPolarBar$$, $DvtChartDataChange$$.min), $DvtChartRangeMarker$$ = Math.max($DvtChartRangeMarker$$, $DvtChartDataChange$$.min)), null != $DvtChartDataChange$$.max && ($DvtChartPolarBar$$ = Math.min($DvtChartPolarBar$$, $DvtChartDataChange$$.max), $DvtChartRangeMarker$$ = Math.max($DvtChartRangeMarker$$, 
            $DvtChartDataChange$$.max)));
          }
        }
      }
    }
    $DvtSparkChartDefaults$$ = null;
    "x" == $DvtSparkChartEventManager$$ ? $DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "x") : $DvtChartPieRenderUtils$$ ? $DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y2") : $DvtChartDataChangePyramidSlice$$ && ($DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y"));
    if (null != $DvtSparkChartDefaults$$) {
      for ($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartEventManager$$++) {
        if ($DvtChartDataChangePyramidSlice$$ = $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$], $DvtChartPieRenderUtils$$ = $DvtChartDataChangePyramidSlice$$.items, $DvtChartPieLabelInfo$$ = "withRescale" == $DvtChartEventUtils$$.$getHideAndShowBehavior$($dvt$$2$$) && "hidden" == $DvtChartDataChangePyramidSlice$$.visibility, !$DvtChartPieLabelInfo$$) {
          if ($DvtChartPieRenderUtils$$ && !$DvtChartPieLabelInfo$$) {
            for ($DvtChartDataChangePyramidSlice$$ = 0;$DvtChartDataChangePyramidSlice$$ < $DvtChartPieRenderUtils$$.length;$DvtChartDataChangePyramidSlice$$++) {
              null == $DvtChartPieRenderUtils$$[$DvtChartDataChangePyramidSlice$$] || $DvtChartPieLabelUtils$$ && !$DvtChartDataUtils$$.$isRefObjInViewport$($dvt$$2$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangePyramidSlice$$) || ($DvtChartDataChangeMarker$$ = $DvtChartRefObjUtils$$.$getLowValue$($DvtChartPieRenderUtils$$[$DvtChartDataChangePyramidSlice$$]), $DvtChartDataChange$$ = $DvtChartRefObjUtils$$.$getHighValue$($DvtChartPieRenderUtils$$[$DvtChartDataChangePyramidSlice$$]), $DvtChartPieLabelInfo$$ = 
              isNaN($DvtChartPieRenderUtils$$[$DvtChartDataChangePyramidSlice$$]) ? $DvtChartPieRenderUtils$$[$DvtChartDataChangePyramidSlice$$].value : $DvtChartPieRenderUtils$$[$DvtChartDataChangePyramidSlice$$], null != $DvtChartDataChangeMarker$$ && isFinite($DvtChartDataChangeMarker$$) && ($DvtChartPolarBar$$ = Math.min($DvtChartPolarBar$$, $DvtChartDataChangeMarker$$), $DvtChartRangeMarker$$ = Math.max($DvtChartRangeMarker$$, $DvtChartDataChangeMarker$$)), null != $DvtChartDataChange$$ && isFinite($DvtChartDataChange$$) && 
              ($DvtChartPolarBar$$ = Math.min($DvtChartPolarBar$$, $DvtChartDataChange$$), $DvtChartRangeMarker$$ = Math.max($DvtChartRangeMarker$$, $DvtChartDataChange$$)), null != $DvtChartPieLabelInfo$$ && isFinite($DvtChartPieLabelInfo$$) && ($DvtChartPolarBar$$ = Math.min($DvtChartPolarBar$$, $DvtChartPieLabelInfo$$), $DvtChartRangeMarker$$ = Math.max($DvtChartRangeMarker$$, $DvtChartPieLabelInfo$$)));
            }
          } else {
            $DvtChartDataChangeMarker$$ = $DvtChartRefObjUtils$$.$getLowValue$($DvtChartDataChangePyramidSlice$$), $DvtChartDataChange$$ = $DvtChartRefObjUtils$$.$getHighValue$($DvtChartDataChangePyramidSlice$$), $DvtChartPieLabelInfo$$ = $DvtChartDataChangePyramidSlice$$.value, null != $DvtChartDataChangeMarker$$ && isFinite($DvtChartDataChangeMarker$$) && ($DvtChartPolarBar$$ = Math.min($DvtChartPolarBar$$, $DvtChartDataChangeMarker$$), $DvtChartRangeMarker$$ = Math.max($DvtChartRangeMarker$$, 
            $DvtChartDataChangeMarker$$)), null != $DvtChartDataChange$$ && isFinite($DvtChartDataChange$$) && ($DvtChartPolarBar$$ = Math.min($DvtChartPolarBar$$, $DvtChartDataChange$$), $DvtChartRangeMarker$$ = Math.max($DvtChartRangeMarker$$, $DvtChartDataChange$$)), null != $DvtChartPieLabelInfo$$ && isFinite($DvtChartPieLabelInfo$$) && ($DvtChartPolarBar$$ = Math.min($DvtChartPolarBar$$, $DvtChartPieLabelInfo$$), $DvtChartRangeMarker$$ = Math.max($DvtChartRangeMarker$$, $DvtChartPieLabelInfo$$))
            ;
          }
        }
      }
    }
    $DvtChartPieLabelUtils$$ = {min:$DvtChartPolarBar$$, max:$DvtChartRangeMarker$$};
    $dvt$$2$$.$_cache$.$putToCache$($DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$);
    return $DvtChartPieLabelUtils$$;
  };
  $DvtChartDataUtils$$.$isAssignedToY2$ = function $$DvtChartDataUtils$$$$isAssignedToY2$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if (!$dvt$$2$$.$_optionsCache$.$getFromCache$("hasY2Assignment")) {
      return !1;
    }
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && "on" == $DvtSparkChartDefaults$$.assignedToY2 && $DvtChartTypeUtils$$.$isDualY$($dvt$$2$$) ? !0 : !1;
  };
  $DvtChartDataUtils$$.$getInitialSelection$ = function $$DvtChartDataUtils$$$$getInitialSelection$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$().selection;
    $DvtSparkChartDefaults$$ || ($DvtSparkChartDefaults$$ = []);
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getChartObjPeers$();
    for (var $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartRefObjUtils$$;
      "string" == typeof $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$] || $dvt$$2$$.$ArrayUtils$.isArray($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$]) ? ($DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$], $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$] = {id:$DvtChartRefObjUtils$$}) : $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].id;
      if (!(null == $DvtChartRefObjUtils$$ || $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].series && $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].group)) {
        for (var $DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartAxisUtils$$++) {
          var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$[$DvtChartAxisUtils$$];
          if ($DvtChartDataUtils$$.$isEqualId$($DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$.$getDataItemId$())) {
            $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].series = $DvtChartPieLabelUtils$$.$getSeries$();
            $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].group = $DvtChartPieLabelUtils$$.$getGroup$();
            break;
          }
        }
      }
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.$getCurrentSelection$ = function $$DvtChartDataUtils$$$$getCurrentSelection$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = [];
    if ($dvt$$2$$ = $dvt$$2$$.$getSelectionHandler$()) {
      $dvt$$2$$ = $dvt$$2$$.$getSelectedIds$();
      for (var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
        var $DvtSparkChartAutomation$$ = $dvt$$2$$[$DvtSparkChartDefaults$$];
        $DvtSparkChartEventManager$$.push({series:$DvtSparkChartAutomation$$.$getSeries$(), group:$DvtSparkChartAutomation$$.$getGroup$(), id:$DvtSparkChartAutomation$$.getId()});
      }
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartDataUtils$$.$hasVolumeSeries$ = function $$DvtChartDataUtils$$$$hasVolumeSeries$$($dvt$$2$$) {
    return ($dvt$$2$$ = $dvt$$2$$.$_optionsCache$.$getFromCache$("_hasVolume")) ? $dvt$$2$$ : !1;
  };
  $DvtChartDataUtils$$.$isDataSelected$ = function $$DvtChartDataUtils$$$$isDataSelected$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartAutomation$$ = !isNaN($DvtSparkChartAutomation$$) && null != $DvtSparkChartAutomation$$ && 0 <= $DvtSparkChartAutomation$$ ? $DvtChartDataUtils$$.$getNestedDataItemId$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) : $DvtChartDataUtils$$.$getDataItemId$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtSparkChartDefaults$$);
    ($dvt$$2$$ = $dvt$$2$$.$getOptions$().selection) || ($dvt$$2$$ = []);
    for (var $DvtChartRefObjUtils$$ = 0;$DvtChartRefObjUtils$$ < $dvt$$2$$.length;$DvtChartRefObjUtils$$++) {
      if ($DvtChartDataUtils$$.$isEqualId$($DvtSparkChartAutomation$$, $dvt$$2$$[$DvtChartRefObjUtils$$]) || $DvtChartDataUtils$$.$isEqualId$($DvtSparkChartAutomation$$, $dvt$$2$$[$DvtChartRefObjUtils$$].id) || null == $dvt$$2$$[$DvtChartRefObjUtils$$].id && $DvtChartDataUtils$$.$isEqualId$($DvtSparkChartEventManager$$, $dvt$$2$$[$DvtChartRefObjUtils$$].series) && $DvtChartDataUtils$$.$isEqualId$($DvtSparkChartDefaults$$, $dvt$$2$$[$DvtChartRefObjUtils$$].group)) {
        return !0;
      }
    }
    return !1;
  };
  $DvtChartDataUtils$$.$getDataLabel$ = function $$DvtChartDataUtils$$$$getDataLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    var $DvtChartPieLabelUtils$$;
    $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getDefaultDataLabel$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$);
    var $DvtChartPieLabelInfo$$ = $dvt$$2$$.$getOptions$().dataLabel;
    $DvtChartPieLabelInfo$$ && !$DvtChartAxisUtils$$ && ($DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getDataContext$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$.label = $DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$ = $DvtChartPieLabelInfo$$($DvtChartPieLabelUtils$$), "number" == typeof $DvtChartPieLabelUtils$$ && ($DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$getValueFormat$($dvt$$2$$, "label"), $DvtChartPieLabelUtils$$ = 
    $DvtChartTooltipUtils$$.$formatValue$($dvt$$2$$.$getCtx$(), $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$)));
    return $DvtChartPieLabelUtils$$ ? $DvtChartPieLabelUtils$$ : $DvtChartRefObjUtils$$;
  };
  $DvtChartDataUtils$$.$getDefaultDataLabel$ = function $$DvtChartDataUtils$$$$getDefaultDataLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    if ($DvtChartAxisUtils$$) {
      $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    } else {
      $DvtSparkChartDefaults$$ = !isNaN($DvtSparkChartAutomation$$) && null != $DvtSparkChartAutomation$$ && 0 <= $DvtSparkChartAutomation$$ ? $DvtChartDataUtils$$.$getNestedDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) : $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      if (!$DvtSparkChartDefaults$$) {
        return null;
      }
      $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.label;
      "low" == $DvtChartRefObjUtils$$ ? $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ instanceof Array ? $DvtSparkChartDefaults$$[0] : $DvtSparkChartDefaults$$ : "high" == $DvtChartRefObjUtils$$ && ($DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ instanceof Array ? $DvtSparkChartDefaults$$[1] : null);
    }
    if (null != $DvtSparkChartDefaults$$) {
      if ("number" == typeof $DvtSparkChartDefaults$$) {
        var $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$;
        if ($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtSparkChartEventManager$$) && $dvt$$2$$.$y2Axis$ ? $dvt$$2$$.$y2Axis$ : $dvt$$2$$.$yAxis$) {
          $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.$getInfo$(), $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$.$GlobalMin$, $DvtChartPieLabelInfo$$ = $DvtChartPieRenderUtils$$.$GlobalMax$, $DvtChartPieRenderUtils$$ = $DvtChartPieRenderUtils$$.$getMajorIncrement$();
        }
        $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$getValueFormat$($dvt$$2$$, "label");
        return $DvtChartTooltipUtils$$.$formatValue$($dvt$$2$$.$getCtx$(), $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$);
      }
      return $DvtSparkChartDefaults$$;
    }
    return null;
  };
  $DvtChartDataUtils$$.$getStackCategory$ = function $$DvtChartDataUtils$$$$getStackCategory$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_cache$.$getFromCachedMap$("stackCategory", $DvtSparkChartEventManager$$);
    if ("undefined" != typeof $DvtSparkChartDefaults$$) {
      return $DvtSparkChartDefaults$$;
    }
    $DvtSparkChartDefaults$$ = $DvtChartTypeUtils$$.$isStacked$($dvt$$2$$) ? $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$).stackCategory || null : $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartEventManager$$) || null;
    $dvt$$2$$.$_cache$.$putToCachedMap$("stackCategory", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.$getStackCategories$ = function $$DvtChartDataUtils$$$$getStackCategories$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = [], $DvtChartRefObjUtils$$ = [], $DvtChartAxisUtils$$ = {}, $DvtChartPieLabelUtils$$ = {}, $DvtChartPieLabelInfo$$ = $dvt$$2$$.$_cache$.$getFromCachedMap2D$("stackCategories", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if ($DvtChartPieLabelInfo$$) {
      return $DvtChartPieLabelInfo$$;
    }
    for (var $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtChartPieLabelInfo$$;$DvtChartPieRenderUtils$$++) {
      if ($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartPieRenderUtils$$) || $DvtSparkChartDefaults$$) {
        if ($DvtSparkChartEventManager$$) {
          var $DvtChartDataChangePyramidSlice$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartPieRenderUtils$$);
          if ("candlestick" == $DvtChartDataChangePyramidSlice$$ || "boxPlot" == $DvtChartDataChangePyramidSlice$$) {
            $DvtChartDataChangePyramidSlice$$ = "bar";
          }
          if ($DvtSparkChartEventManager$$ != $DvtChartDataChangePyramidSlice$$) {
            continue;
          }
        }
        $DvtChartDataChangePyramidSlice$$ = $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtChartPieRenderUtils$$);
        $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartPieRenderUtils$$) ? $DvtChartPieLabelUtils$$[$DvtChartDataChangePyramidSlice$$] || ($DvtChartRefObjUtils$$.push($DvtChartDataChangePyramidSlice$$), $DvtChartPieLabelUtils$$[$DvtChartDataChangePyramidSlice$$] = !0) : $DvtChartAxisUtils$$[$DvtChartDataChangePyramidSlice$$] || ($DvtSparkChartAutomation$$.push($DvtChartDataChangePyramidSlice$$), $DvtChartAxisUtils$$[$DvtChartDataChangePyramidSlice$$] = !0);
      }
    }
    $DvtChartPieLabelInfo$$ = {y:$DvtSparkChartAutomation$$, y2:$DvtChartRefObjUtils$$};
    $dvt$$2$$.$_cache$.$putToCachedMap2D$("stackCategories", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$);
    return $DvtChartPieLabelInfo$$;
  };
  $DvtChartDataUtils$$.$getBarCategoryZ$ = function $$DvtChartDataUtils$$$$getBarCategoryZ$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for (var $DvtChartRefObjUtils$$ = 0, $DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);$DvtChartAxisUtils$$++) {
      var $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartAxisUtils$$);
      ("bar" == $DvtChartPieLabelUtils$$ || "candlestick" == $DvtChartPieLabelUtils$$ || "boxPlot" == $DvtChartPieLabelUtils$$) && $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtChartAxisUtils$$) == $DvtSparkChartEventManager$$ && $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartAxisUtils$$) && ($DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartAxisUtils$$), $DvtSparkChartAutomation$$ && $DvtChartPieLabelUtils$$ || !$DvtSparkChartAutomation$$ && 
      !$DvtChartPieLabelUtils$$) && ($DvtChartRefObjUtils$$ = Math.max($DvtChartRefObjUtils$$, $DvtChartDataUtils$$.$getZValue$($dvt$$2$$, $DvtChartAxisUtils$$, $DvtSparkChartDefaults$$, 1)));
    }
    return $DvtChartRefObjUtils$$;
  };
  $DvtChartDataUtils$$.$getBarInfo$ = function $$DvtChartDataUtils$$$$getBarInfo$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartAxisUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.$xAxis$, $DvtChartDataChangePyramidSlice$$ = $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartSeriesEffectUtils$$ = 
    $DvtChartStyleUtils$$.$getBarCategoryOffsetMap$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$), $DvtChartRangeMarker$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartPolarBar$$ = $DvtChartPieRenderUtils$$.$getUnboundedCoordAt$($DvtChartRangeMarker$$), $DvtChartFunnelSlice$$ = $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartDataCursor$$ = 
    $DvtChartFunnelSlice$$ ? $DvtSparkChartEventManager$$.$y2Axis$ : $DvtSparkChartEventManager$$.$yAxis$, $DvtChartPieRenderUtils$$ = $DvtChartDataCursor$$.$getBaselineCoord$(), $DvtChartDataChange$$;
    if ($DvtChartDataChangePyramidSlice$$) {
      var $DvtChartDataChangeMarker$$ = $DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      $DvtChartDataChange$$ = $DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      if (null == $DvtChartDataChangeMarker$$ || isNaN($DvtChartDataChangeMarker$$) || null == $DvtChartDataChange$$ || isNaN($DvtChartDataChange$$)) {
        return null;
      }
      $DvtChartRangeMarker$$ = $DvtChartDataCursor$$.$getBoundedCoordAt$($DvtChartDataChangeMarker$$);
      $DvtChartDataChange$$ = $DvtChartDataCursor$$.$getBoundedCoordAt$($DvtChartDataChange$$);
    } else {
      $DvtChartDataChange$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      $DvtChartDataChangeMarker$$ = $DvtChartDataUtils$$.$getCumulativeValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      if (null == $DvtChartDataChange$$ || isNaN($DvtChartDataChange$$)) {
        return null;
      }
      $DvtChartRangeMarker$$ = $DvtChartDataCursor$$.$getBoundedCoordAt$($DvtChartDataChangeMarker$$);
      $DvtChartDataChange$$ = $DvtChartPieLabelUtils$$ ? $DvtChartDataCursor$$.$getBoundedCoordAt$($DvtChartDataChangeMarker$$ - $DvtChartDataChange$$) : $DvtChartPieRenderUtils$$;
    }
    if ($DvtChartRangeMarker$$ == $DvtChartDataChange$$ && null == $DvtChartDataCursor$$.$getCoordAt$($DvtChartDataChangeMarker$$)) {
      return null;
    }
    $DvtChartDataCursor$$ = $DvtChartDataUtils$$.$getStackCategory$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$getBarWidth$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$ ? $DvtChartStyleUtils$$.$getBarStackWidth$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$, $DvtSparkChartAutomation$$, $DvtChartFunnelSlice$$) : $DvtSparkChartDefaults$$;
    "pixel" == $DvtChartStyleUtils$$.$getBarSpacing$($DvtSparkChartEventManager$$) && $dvt$$2$$.$Agent$.$isPlatformGecko$() && ($DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$ / (1 - $DvtChartStyleUtils$$.$getBarGapRatio$($DvtSparkChartEventManager$$)), 1 < $DvtSparkChartDefaults$$ && 2 > $DvtChartPieLabelUtils$$ - $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$--, $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$));
    $DvtChartSeriesEffectUtils$$ = $DvtChartSeriesEffectUtils$$[$DvtChartFunnelSlice$$ ? "y2" : "y"][$DvtChartDataCursor$$] + .5 * ($DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$);
    $DvtChartAxisUtils$$ = $DvtChartPieLabelInfo$$ && !$DvtChartAxisUtils$$ ? $DvtChartPolarBar$$ - $DvtChartSeriesEffectUtils$$ - $DvtSparkChartDefaults$$ : $DvtChartPolarBar$$ + $DvtChartSeriesEffectUtils$$;
    $DvtChartPieLabelInfo$$ = $DvtChartAxisUtils$$ + $DvtSparkChartDefaults$$;
    $DvtSparkChartEventManager$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($DvtSparkChartEventManager$$, new $dvt$$2$$.$Point$(($DvtChartAxisUtils$$ + $DvtChartPieLabelInfo$$) / 2, $DvtChartDataChangePyramidSlice$$ ? ($DvtChartRangeMarker$$ + $DvtChartDataChange$$) / 2 : $DvtChartRangeMarker$$), $DvtChartRefObjUtils$$);
    return {$x1$:$DvtChartAxisUtils$$, $x2$:$DvtChartPieLabelInfo$$, $axisCoord$:$DvtChartPieRenderUtils$$, $baseCoord$:$DvtChartDataChange$$, $yCoord$:$DvtChartRangeMarker$$, $dataPos$:$DvtSparkChartEventManager$$, $barWidth$:$DvtSparkChartDefaults$$};
  };
  $DvtChartDataUtils$$.$getMarkerPosition$ = function $$DvtChartDataUtils$$$$getMarkerPosition$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$xAxis$, $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? $DvtSparkChartEventManager$$.$y2Axis$ : $DvtSparkChartEventManager$$.$yAxis$, $DvtChartPieRenderUtils$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$), $DvtChartDataChangePyramidSlice$$ = $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartSeriesEffectUtils$$ = 
    !isNaN($DvtChartRefObjUtils$$) && null != $DvtChartRefObjUtils$$ && 0 <= $DvtChartRefObjUtils$$, $DvtChartRangeMarker$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtChartRefObjUtils$$ = $DvtChartSeriesEffectUtils$$ ? $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) : $DvtChartDataUtils$$.$getCumulativeValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    if ($DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$)) {
      if ($DvtChartPieRenderUtils$$ && $DvtChartRefObjUtils$$ < $DvtChartPieLabelInfo$$.$getInfo$().$MinValue$) {
        return null;
      }
      $DvtSparkChartDefaults$$ = $DvtChartPieRenderUtils$$ ? $DvtChartPieLabelUtils$$.$getCoordAt$($DvtChartRangeMarker$$) : $DvtChartPieLabelUtils$$.$getUnboundedCoordAt$($DvtChartRangeMarker$$);
      $DvtSparkChartAutomation$$ = $DvtChartPieLabelInfo$$.$getUnboundedCoordAt$($DvtChartRefObjUtils$$);
    } else {
      $DvtChartDataChangePyramidSlice$$ ? ($DvtChartPieRenderUtils$$ = $DvtChartPieLabelInfo$$.$getCoordAt$($DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)), $DvtChartPieLabelInfo$$ = $DvtChartPieLabelInfo$$.$getCoordAt$($DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)), $DvtSparkChartDefaults$$ = $DvtChartPieLabelUtils$$.$getCoordAt$($DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, 
      $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)), $DvtSparkChartAutomation$$ = ($DvtChartPieRenderUtils$$ + $DvtChartPieLabelInfo$$) / 2) : ($DvtSparkChartDefaults$$ = $DvtChartPieLabelUtils$$.$getCoordAt$($DvtChartRangeMarker$$), $DvtSparkChartAutomation$$ = $DvtChartPieLabelInfo$$.$getCoordAt$($DvtChartRefObjUtils$$));
    }
    return null == $DvtSparkChartDefaults$$ || null == $DvtSparkChartAutomation$$ ? null : $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($DvtSparkChartEventManager$$, new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartAxisUtils$$);
  };
  $DvtChartDataUtils$$.$getScatterBubbleMarkerPosition$ = function $$DvtChartDataUtils$$$$getScatterBubbleMarkerPosition$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$xAxis$, $DvtChartAxisUtils$$ = $DvtSparkChartEventManager$$.$yAxis$, $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtChartRefObjUtils$$ = $DvtChartRefObjUtils$$.$getCoordAt$($DvtChartPieLabelUtils$$);
    $DvtChartAxisUtils$$ = $DvtChartAxisUtils$$.$getCoordAt$($DvtSparkChartEventManager$$);
    return null == $DvtChartRefObjUtils$$ || null == $DvtChartAxisUtils$$ ? null : new $dvt$$2$$.$Point$($DvtChartRefObjUtils$$, $DvtChartAxisUtils$$);
  };
  $DvtChartDataUtils$$.$isSeriesNegative$ = function $$DvtChartDataUtils$$$$isSeriesNegative$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_optionsCache$.$getFromCachedMap$("isSeriesNegative", $DvtSparkChartEventManager$$);
    if (null != $DvtSparkChartDefaults$$) {
      return $DvtSparkChartDefaults$$;
    }
    for (var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$ && !(0 < $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$));$DvtSparkChartAutomation$$++) {
    }
    $DvtSparkChartDefaults$$ = !0;
    $dvt$$2$$.$_optionsCache$.$putToCachedMap$("isSeriesNegative", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.$getDataContext$ = function $$DvtChartDataUtils$$$$getDataContext$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartAxisUtils$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getNestedDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$), $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.$_rawOptions$, 
    $DvtChartDataChangePyramidSlice$$ = $DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) && (null == $DvtSparkChartDefaults$$ || 0 > $DvtSparkChartDefaults$$), $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartRangeMarker$$;
    $DvtChartDataChangePyramidSlice$$ ? ($DvtChartRefObjUtils$$ = $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_OTHER", null), $DvtChartRangeMarker$$ = {id:$DvtChartRefObjUtils$$, series:$DvtChartRefObjUtils$$, value:$DvtChartPieUtils$$.$getOtherValue$($DvtSparkChartEventManager$$), color:$DvtChartSeriesEffectUtils$$.styleDefaults.otherColor}) : $DvtChartPieLabelInfo$$ ? ($DvtChartRangeMarker$$ = $DvtChartPieRenderUtils$$.series[$DvtSparkChartDefaults$$].items[$DvtSparkChartAutomation$$], 
    $DvtChartRangeMarker$$ = {id:$DvtChartDataUtils$$.$getNestedDataItemId$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$), data:[$DvtChartRangeMarker$$, $DvtChartRangeMarker$$.items[$DvtChartRefObjUtils$$]], value:$DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$), y:$DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 
    $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$), color:$DvtChartStyleUtils$$.$getMarkerColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$)}) : $DvtChartPieLabelUtils$$ ? $DvtChartRangeMarker$$ = {id:$DvtChartDataUtils$$.$getDataItemId$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), data:$DvtChartPieRenderUtils$$.series[$DvtSparkChartDefaults$$].items[$DvtSparkChartAutomation$$], value:$DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), targetValue:$DvtChartDataUtils$$.$getTargetValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), x:$DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), y:$DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), z:$DvtChartDataUtils$$.$getZValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), 
    low:$DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), high:$DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), open:$DvtChartPieLabelUtils$$.open, close:$DvtChartPieLabelUtils$$.close, volume:$DvtChartPieLabelUtils$$.volume, color:$DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)} : $DvtChartAxisUtils$$ && 
    ($DvtChartRangeMarker$$ = {id:$DvtChartDataUtils$$.$getSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), color:$DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)});
    if ($DvtChartRangeMarker$$) {
      $DvtChartRangeMarker$$.component = $DvtChartSeriesEffectUtils$$._widgetConstructor;
      if ($DvtChartDataChangePyramidSlice$$ || $DvtChartPieLabelInfo$$ || $DvtChartPieLabelUtils$$) {
        $DvtChartRangeMarker$$.group = $DvtChartDataUtils$$.$getGroup$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartRangeMarker$$.groupData = $DvtChartDataUtils$$.$_getGroupsDataArray$($DvtSparkChartEventManager$$)[$DvtSparkChartAutomation$$];
      }
      !$DvtChartDataChangePyramidSlice$$ && ($DvtChartPieLabelInfo$$ || $DvtChartPieLabelUtils$$ || $DvtChartAxisUtils$$) && ($DvtChartRangeMarker$$.series = $DvtChartDataUtils$$.$getSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartRangeMarker$$.seriesData = $DvtChartPieRenderUtils$$.series[$DvtSparkChartDefaults$$]);
      $DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) && $DvtSparkChartEventManager$$.$pieChart$ && ($DvtChartRangeMarker$$.totalValue = $DvtSparkChartEventManager$$.$pieChart$.$getTotalValue$());
    }
    return $DvtChartRangeMarker$$ || {};
  };
  $DvtChartDataUtils$$.$_getGroupsDataArray$ = function $$DvtChartDataUtils$$$$_getGroupsDataArray$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_optionsCache$.$getFromCache$("groupsDataArray");
    $DvtSparkChartEventManager$$ || ($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$_getNestedGroupsData$($dvt$$2$$.$_rawOptions$.groups), $dvt$$2$$.$_optionsCache$.$putToCache$("groupsDataArray", $DvtSparkChartEventManager$$));
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartDataUtils$$.$_getNestedGroupsData$ = function $$DvtChartDataUtils$$$$_getNestedGroupsData$$($dvt$$2$$) {
    if (!$dvt$$2$$) {
      return [];
    }
    for (var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
      var $DvtSparkChartAutomation$$ = $dvt$$2$$[$DvtSparkChartDefaults$$];
      if ($DvtSparkChartAutomation$$.groups) {
        for (var $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$_getNestedGroupsData$($DvtSparkChartAutomation$$.groups), $DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtChartRefObjUtils$$.length;$DvtChartAxisUtils$$++) {
          $DvtChartRefObjUtils$$[$DvtChartAxisUtils$$].unshift($DvtSparkChartAutomation$$);
        }
        $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.concat($DvtChartRefObjUtils$$);
      } else {
        $DvtSparkChartEventManager$$.push([$DvtSparkChartAutomation$$]);
      }
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartDataUtils$$.$isOutermostBar$ = function $$DvtChartDataUtils$$$$isOutermostBar$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartRefObjUtils$$ = 0 > $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartAxisUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);
    for ($DvtSparkChartEventManager$$ += 1;$DvtSparkChartEventManager$$ < $DvtChartAxisUtils$$;$DvtSparkChartEventManager$$++) {
      if ($DvtSparkChartAutomation$$ == $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtSparkChartEventManager$$) && $DvtChartRefObjUtils$$ == 0 > $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) && "bar" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$) && $DvtChartDataUtils$$.$isBLACItemInViewport$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
        return !1;
      }
    }
    return !0;
  };
  var $DvtChartEventUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartEventUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartEventUtils$$.$getHideAndShowBehavior$ = function $$DvtChartEventUtils$$$$getHideAndShowBehavior$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().hideAndShowBehavior;
  };
  $DvtChartEventUtils$$.$getHoverBehavior$ = function $$DvtChartEventUtils$$$$getHoverBehavior$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().hoverBehavior;
  };
  $DvtChartEventUtils$$.$setVisibility$ = function $$DvtChartEventUtils$$$$setVisibility$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$.$getRefObj$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    null != $DvtChartAxisUtils$$ && ($DvtChartAxisUtils$$.visibility = $DvtSparkChartAutomation$$);
    var $DvtChartAxisUtils$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartAxisUtils$$, $DvtSparkChartDefaults$$);
    "hidden" == $DvtSparkChartAutomation$$ && 0 > $DvtChartPieLabelUtils$$ ? $DvtChartAxisUtils$$.push($DvtSparkChartDefaults$$) : "visible" == $DvtSparkChartAutomation$$ && 0 <= $DvtChartPieLabelUtils$$ && $DvtChartAxisUtils$$.splice($DvtChartPieLabelUtils$$, 1);
    if (($DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getOptions$()) && $DvtSparkChartEventManager$$.legend && $DvtSparkChartEventManager$$.legend.sections) {
      for ($DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtSparkChartEventManager$$.legend.sections.length;$DvtChartAxisUtils$$++) {
        if (($DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.legend.sections[$DvtChartAxisUtils$$]) && $DvtChartPieLabelUtils$$.items) {
          for (var $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartPieLabelUtils$$.items.length;$DvtChartPieLabelInfo$$++) {
            $DvtChartPieLabelUtils$$.items[$DvtChartPieLabelInfo$$].id == $DvtSparkChartDefaults$$ && ($DvtChartPieLabelUtils$$.items[$DvtChartPieLabelInfo$$].categoryVisibility = $DvtSparkChartAutomation$$);
          }
        }
      }
      return !0;
    }
    return !1;
  };
  $DvtChartEventUtils$$.$isScrollable$ = function $$DvtChartEventUtils$$$$isScrollable$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isScrollSupported$($dvt$$2$$) ? "off" != $dvt$$2$$.$getOptions$().zoomAndScroll : !1;
  };
  $DvtChartEventUtils$$.$isZoomable$ = function $$DvtChartEventUtils$$$$isZoomable$$($dvt$$2$$) {
    if (!$DvtChartTypeUtils$$.$isScrollSupported$($dvt$$2$$)) {
      return !1;
    }
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().zoomAndScroll;
    return "live" == $dvt$$2$$ || "delayed" == $dvt$$2$$;
  };
  $DvtChartEventUtils$$.$getZoomDirection$ = function $$DvtChartEventUtils$$$$getZoomDirection$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) ? $dvt$$2$$.$getOptions$().zoomDirection : "auto";
  };
  $DvtChartEventUtils$$.$isLiveScroll$ = function $$DvtChartEventUtils$$$$isLiveScroll$$($dvt$$2$$) {
    if (!$DvtChartTypeUtils$$.$isScrollSupported$($dvt$$2$$)) {
      return !1;
    }
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().zoomAndScroll;
    return "live" == $dvt$$2$$ || "liveScrollOnly" == $dvt$$2$$;
  };
  $DvtChartEventUtils$$.$isDelayedScroll$ = function $$DvtChartEventUtils$$$$isDelayedScroll$$($dvt$$2$$) {
    if (!$DvtChartTypeUtils$$.$isScrollSupported$($dvt$$2$$)) {
      return !1;
    }
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().zoomAndScroll;
    return "delayed" == $dvt$$2$$ || "delayedScrollOnly" == $dvt$$2$$;
  };
  $DvtChartEventUtils$$.$processIds$ = function $$DvtChartEventUtils$$$$processIds$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$];
      $DvtChartRefObjUtils$$.$getSeries$() == $DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$ ? ($DvtChartRefObjUtils$$ = $DvtChartPieUtils$$.$getOtherSliceIds$($dvt$$2$$), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.concat($DvtChartRefObjUtils$$)) : $DvtSparkChartDefaults$$.push($DvtChartRefObjUtils$$);
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartEventUtils$$.$adjustBounds$ = function $$DvtChartEventUtils$$$$adjustBounds$$($dvt$$2$$) {
    null != $dvt$$2$$.x && --$dvt$$2$$.x;
    null != $dvt$$2$$.$w$ && ($dvt$$2$$.$w$ += 2);
    null != $dvt$$2$$.y && --$dvt$$2$$.y;
    null != $dvt$$2$$.$h$ && ($dvt$$2$$.$h$ += 2);
  };
  $DvtChartEventUtils$$.$getSelectedObjects$ = function $$DvtChartEventUtils$$$$getSelectedObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if (!$dvt$$2$$.$_cache$.$getFromCache$("dataFiltered")) {
      return $DvtSparkChartDefaults$$.$getSelectedIds$();
    }
    $DvtSparkChartDefaults$$ = [];
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$_cache$.$getFromCache$("dataPositions");
    if (!$DvtSparkChartAutomation$$) {
      for (var $DvtSparkChartAutomation$$ = [], $DvtChartRefObjUtils$$ = 0;$DvtChartRefObjUtils$$ < $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);$DvtChartRefObjUtils$$++) {
        for (var $DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);$DvtChartAxisUtils$$++) {
          var $DvtChartPieLabelUtils$$;
          if ($DvtChartPieLabelUtils$$ = "bar" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartRefObjUtils$$) ? $DvtChartDataUtils$$.$getBarInfo$($dvt$$2$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$).$dataPos$ : $DvtChartDataUtils$$.$getMarkerPosition$($dvt$$2$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$)) {
            $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getPlotArea$().$localToStage$($DvtChartPieLabelUtils$$), $DvtSparkChartAutomation$$.push({$seriesIndex$:$DvtChartRefObjUtils$$, $groupIndex$:$DvtChartAxisUtils$$, $pos$:$DvtChartPieLabelUtils$$});
          }
        }
      }
      $dvt$$2$$.$_cache$.$putToCache$("dataPositions", $DvtSparkChartAutomation$$);
    }
    for ($DvtChartRefObjUtils$$ = 0;$DvtChartRefObjUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartRefObjUtils$$++) {
      if ($DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$[$DvtChartRefObjUtils$$].$pos$) {
        $DvtChartAxisUtils$$ = null == $DvtSparkChartEventManager$$.y || $DvtChartPieLabelUtils$$.y >= $DvtSparkChartEventManager$$.y && $DvtChartPieLabelUtils$$.y <= $DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$, (null == $DvtSparkChartEventManager$$.x || $DvtChartPieLabelUtils$$.x >= $DvtSparkChartEventManager$$.x && $DvtChartPieLabelUtils$$.x <= $DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$) && $DvtChartAxisUtils$$ && $DvtSparkChartDefaults$$.push(new $DvtChartDataItem$$(null, 
        $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartAutomation$$[$DvtChartRefObjUtils$$].$seriesIndex$), $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtSparkChartAutomation$$[$DvtChartRefObjUtils$$].$groupIndex$)));
      }
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartEventUtils$$.$getBoundedObjects$ = function $$DvtChartEventUtils$$$$getBoundedObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getChartObjPeers$(), $DvtSparkChartAutomation$$ = [], $DvtChartRefObjUtils$$ = 0;$DvtChartRefObjUtils$$ < $DvtSparkChartDefaults$$.length;$DvtChartRefObjUtils$$++) {
      var $DvtChartAxisUtils$$ = $DvtSparkChartDefaults$$[$DvtChartRefObjUtils$$], $DvtChartPieLabelUtils$$ = $DvtChartAxisUtils$$.$_dataPos$;
      if ($DvtChartPieLabelUtils$$) {
        var $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getPlotArea$().$localToStage$($DvtChartPieLabelUtils$$), $DvtChartPieLabelInfo$$ = null == $DvtSparkChartEventManager$$.y || $DvtChartPieLabelUtils$$.y >= $DvtSparkChartEventManager$$.y && $DvtChartPieLabelUtils$$.y <= $DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$;
        (null == $DvtSparkChartEventManager$$.x || $DvtChartPieLabelUtils$$.x >= $DvtSparkChartEventManager$$.x && $DvtChartPieLabelUtils$$.x <= $DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$) && $DvtChartPieLabelInfo$$ && $DvtSparkChartAutomation$$.push($DvtChartAxisUtils$$);
      }
    }
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartEventUtils$$.$getAxisBounds$ = function $$DvtChartEventUtils$$$$getAxisBounds$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$getPlotArea$(), $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$.$stageToLocal$(new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y)), $DvtChartRefObjUtils$$ = $DvtChartRefObjUtils$$.$stageToLocal$(new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.x + $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.y + $DvtSparkChartDefaults$$.$h$));
    null == $DvtSparkChartDefaults$$.x && ($DvtChartAxisUtils$$.x = null, $DvtChartRefObjUtils$$.x = null);
    null == $DvtSparkChartDefaults$$.y && ($DvtChartAxisUtils$$.y = null, $DvtChartRefObjUtils$$.y = null);
    $DvtSparkChartDefaults$$ = $DvtChartEventUtils$$.$_convertToAxisCoord$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$.x, $DvtChartRefObjUtils$$.x, $DvtChartAxisUtils$$.y, $DvtChartRefObjUtils$$.y);
    var $DvtChartAxisUtils$$ = {}, $DvtChartRefObjUtils$$ = {}, $DvtChartPieLabelUtils$$ = {}, $DvtChartPieLabelInfo$$ = {};
    $DvtSparkChartEventManager$$.$xAxis$ && ($DvtChartAxisUtils$$ = $DvtChartEventUtils$$.$_getAxisMinMax$($DvtSparkChartEventManager$$.$xAxis$, $DvtSparkChartDefaults$$.$xMin$, $DvtSparkChartDefaults$$.$xMax$, $DvtSparkChartAutomation$$), $DvtChartPieLabelInfo$$ = $DvtChartEventUtils$$.$getAxisStartEndGroup$($DvtSparkChartEventManager$$.$xAxis$, $DvtChartAxisUtils$$.min, $DvtChartAxisUtils$$.max));
    $DvtSparkChartEventManager$$.$yAxis$ && ($DvtChartRefObjUtils$$ = $DvtChartEventUtils$$.$_getAxisMinMax$($DvtSparkChartEventManager$$.$yAxis$, $DvtSparkChartDefaults$$.$yMin$, $DvtSparkChartDefaults$$.$yMax$, $DvtSparkChartAutomation$$));
    $DvtSparkChartEventManager$$.$y2Axis$ && ($DvtChartPieLabelUtils$$ = $DvtChartEventUtils$$.$_getAxisMinMax$($DvtSparkChartEventManager$$.$y2Axis$, $DvtSparkChartDefaults$$.$yMin$, $DvtSparkChartDefaults$$.$yMax$, $DvtSparkChartAutomation$$));
    return {$xMin$:$DvtChartAxisUtils$$.min, $xMax$:$DvtChartAxisUtils$$.max, $yMin$:$DvtChartRefObjUtils$$.min, $yMax$:$DvtChartRefObjUtils$$.max, $y2Min$:$DvtChartPieLabelUtils$$.min, $y2Max$:$DvtChartPieLabelUtils$$.max, $startGroup$:$DvtChartPieLabelInfo$$.$startGroup$, $endGroup$:$DvtChartPieLabelInfo$$.$endGroup$};
  };
  $DvtChartEventUtils$$.$_getAxisMinMax$ = function $$DvtChartEventUtils$$$$_getAxisMinMax$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if (null == $DvtSparkChartEventManager$$ || null == $DvtSparkChartDefaults$$) {
      return {min:null, max:null};
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$getUnboundedLinearValueAt$($DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$ = $dvt$$2$$.$getUnboundedLinearValueAt$($DvtSparkChartDefaults$$);
    return $DvtSparkChartAutomation$$ ? ($DvtSparkChartAutomation$$ = $dvt$$2$$.$getInfo$().$getMinimumExtent$(), $DvtSparkChartDefaults$$ - $DvtSparkChartEventManager$$ < $DvtSparkChartAutomation$$ && ($DvtSparkChartEventManager$$ = ($DvtSparkChartDefaults$$ + $DvtSparkChartEventManager$$) / 2, $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$ + $DvtSparkChartAutomation$$ / 2, $DvtSparkChartEventManager$$ -= $DvtSparkChartAutomation$$ / 2), $DvtChartEventUtils$$.$_limitToGlobal$($dvt$$2$$, 
    $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) : $DvtChartEventUtils$$.$_getActualMinMax$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartEventUtils$$.$getAxisBoundsByDelta$ = function $$DvtChartEventUtils$$$$getAxisBoundsByDelta$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$_convertToAxisCoord$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
    $DvtSparkChartDefaults$$ = $DvtChartEventUtils$$.$getZoomDirection$($dvt$$2$$);
    $DvtSparkChartAutomation$$ = {};
    $DvtChartRefObjUtils$$ = {};
    var $DvtChartAxisUtils$$ = {}, $DvtChartPieLabelUtils$$ = {};
    $dvt$$2$$.$xAxis$ && "y" != $DvtSparkChartDefaults$$ && ($DvtSparkChartAutomation$$ = $DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($dvt$$2$$.$xAxis$, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$), $DvtChartPieLabelUtils$$ = $DvtChartEventUtils$$.$getAxisStartEndGroup$($dvt$$2$$.$xAxis$, $DvtSparkChartAutomation$$.min, $DvtSparkChartAutomation$$.max));
    $dvt$$2$$.$yAxis$ && "x" != $DvtSparkChartDefaults$$ && ($DvtChartRefObjUtils$$ = $DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($dvt$$2$$.$yAxis$, $DvtSparkChartEventManager$$.$yMin$, $DvtSparkChartEventManager$$.$yMax$));
    $dvt$$2$$.$y2Axis$ && ($DvtChartAxisUtils$$ = $DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($dvt$$2$$.$y2Axis$, $DvtSparkChartEventManager$$.$yMin$, $DvtSparkChartEventManager$$.$yMax$));
    return {$xMin$:$DvtSparkChartAutomation$$.min, $xMax$:$DvtSparkChartAutomation$$.max, $yMin$:$DvtChartRefObjUtils$$.min, $yMax$:$DvtChartRefObjUtils$$.max, $y2Min$:$DvtChartAxisUtils$$.min, $y2Max$:$DvtChartAxisUtils$$.max, $startGroup$:$DvtChartPieLabelUtils$$.$startGroup$, $endGroup$:$DvtChartPieLabelUtils$$.$endGroup$};
  };
  $DvtChartEventUtils$$.$_getAxisMinMaxByDelta$ = function $$DvtChartEventUtils$$$$_getAxisMinMaxByDelta$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getLinearViewportMin$(), $DvtChartRefObjUtils$$ = $dvt$$2$$.$getLinearViewportMax$();
    if ($DvtSparkChartDefaults$$ == $DvtSparkChartEventManager$$ && $dvt$$2$$.$isFullViewport$()) {
      return $DvtChartEventUtils$$.$_getActualMinMax$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
    }
    var $DvtChartAxisUtils$$ = $dvt$$2$$.$getUnboundedLinearValueAt$($DvtSparkChartEventManager$$) - $dvt$$2$$.$getUnboundedLinearValueAt$(0), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getUnboundedLinearValueAt$($DvtSparkChartDefaults$$) - $dvt$$2$$.$getUnboundedLinearValueAt$(0), $DvtChartPieLabelInfo$$ = 1, $DvtChartPieRenderUtils$$ = $DvtChartRefObjUtils$$ + $DvtChartPieLabelUtils$$ - ($DvtSparkChartAutomation$$ + $DvtChartAxisUtils$$), $DvtChartDataChangePyramidSlice$$ = $dvt$$2$$.$getInfo$().$getMinimumExtent$();
    $DvtSparkChartEventManager$$ != $DvtSparkChartDefaults$$ && $DvtChartPieRenderUtils$$ < $DvtChartDataChangePyramidSlice$$ && ($DvtChartPieLabelInfo$$ = ($DvtChartRefObjUtils$$ - $DvtSparkChartAutomation$$ - $DvtChartDataChangePyramidSlice$$) / ($DvtChartAxisUtils$$ - $DvtChartPieLabelUtils$$));
    return $DvtChartEventUtils$$.$_limitToGlobal$($dvt$$2$$, $DvtSparkChartAutomation$$ + $DvtChartAxisUtils$$ * $DvtChartPieLabelInfo$$, $DvtChartRefObjUtils$$ + $DvtChartPieLabelUtils$$ * $DvtChartPieLabelInfo$$);
  };
  $DvtChartEventUtils$$.$_convertToAxisCoord$ = function $$DvtChartEventUtils$$$$_convertToAxisCoord$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    var $DvtChartPieLabelUtils$$ = {}, $DvtChartPieLabelInfo$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$());
    $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? ($DvtChartPieLabelUtils$$.$xMin$ = $DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$.$xMax$ = $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$.$yMin$ = $DvtChartPieLabelInfo$$ ? $DvtSparkChartAutomation$$ : $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$.$yMax$ = $DvtChartPieLabelInfo$$ ? $DvtSparkChartDefaults$$ : $DvtSparkChartAutomation$$) : ($DvtChartPieLabelUtils$$.$xMin$ = $DvtChartPieLabelInfo$$ ? $DvtSparkChartAutomation$$ : 
    $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$.$xMax$ = $DvtChartPieLabelInfo$$ ? $DvtSparkChartDefaults$$ : $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$.$yMin$ = $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$.$yMax$ = $DvtChartRefObjUtils$$);
    return $DvtChartPieLabelUtils$$;
  };
  $DvtChartEventUtils$$.$_limitToGlobal$ = function $$DvtChartEventUtils$$$$_limitToGlobal$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getLinearGlobalMin$(), $DvtChartRefObjUtils$$ = $dvt$$2$$.$getLinearGlobalMax$();
    $DvtSparkChartDefaults$$ - $DvtSparkChartEventManager$$ >= $DvtChartRefObjUtils$$ - $DvtSparkChartAutomation$$ ? ($DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$) : $DvtSparkChartEventManager$$ < $DvtSparkChartAutomation$$ ? ($DvtSparkChartDefaults$$ += $DvtSparkChartAutomation$$ - $DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$) : $DvtSparkChartDefaults$$ > $DvtChartRefObjUtils$$ && ($DvtSparkChartEventManager$$ -= 
    $DvtSparkChartDefaults$$ - $DvtChartRefObjUtils$$, $DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$);
    return $DvtChartEventUtils$$.$_getActualMinMax$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartEventUtils$$.$_getActualMinMax$ = function $$DvtChartEventUtils$$$$_getActualMinMax$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return {min:$dvt$$2$$.$linearToActual$($DvtSparkChartEventManager$$), max:$dvt$$2$$.$linearToActual$($DvtSparkChartDefaults$$)};
  };
  $DvtChartEventUtils$$.$getAxisStartEndGroup$ = function $$DvtChartEventUtils$$$$getAxisStartEndGroup$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return $dvt$$2$$.$isGroupAxis$() && null != $DvtSparkChartEventManager$$ && null != $DvtSparkChartDefaults$$ && ($DvtSparkChartEventManager$$ = Math.ceil($DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$ = Math.floor($DvtSparkChartDefaults$$), $DvtSparkChartDefaults$$ >= $DvtSparkChartEventManager$$) ? ($DvtSparkChartEventManager$$ = $dvt$$2$$.$getInfo$().$getGroup$($DvtSparkChartEventManager$$), $dvt$$2$$ = $dvt$$2$$.$getInfo$().$getGroup$($DvtSparkChartDefaults$$), {$startGroup$:$DvtSparkChartEventManager$$, 
    $endGroup$:$dvt$$2$$}) : {$startGroup$:null, $endGroup$:null};
  };
  $DvtChartEventUtils$$.$setInitialSelection$ = function $$DvtChartEventUtils$$$$setInitialSelection$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getSelectionHandler$();
    if ($DvtSparkChartDefaults$$) {
      for (var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getChartObjPeers$(), $DvtChartRefObjUtils$$ = [], $DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartAxisUtils$$++) {
        for (var $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartPieLabelUtils$$++) {
          var $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$];
          if ($DvtChartPieLabelInfo$$.$isSelectable$()) {
            var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$isEqualId$($DvtChartPieLabelInfo$$.$getDataItemId$(), $DvtSparkChartEventManager$$[$DvtChartAxisUtils$$].id), $DvtChartDataChangePyramidSlice$$ = $DvtChartDataUtils$$.$isEqualId$($DvtChartPieLabelInfo$$.$getSeries$(), $DvtSparkChartEventManager$$[$DvtChartAxisUtils$$].series), $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.$isEqualId$($DvtChartPieLabelInfo$$.$getGroup$(), $DvtSparkChartEventManager$$[$DvtChartAxisUtils$$].group);
            ($DvtChartPieRenderUtils$$ || null == $DvtSparkChartEventManager$$[$DvtChartAxisUtils$$].id && $DvtChartDataChangePyramidSlice$$ && $DvtChartSeriesEffectUtils$$) && $DvtChartRefObjUtils$$.push($DvtChartPieLabelInfo$$.getId());
          }
        }
      }
      $DvtSparkChartDefaults$$.$processInitialSelections$($DvtChartRefObjUtils$$, $DvtSparkChartAutomation$$);
    }
  };
  $DvtChartEventUtils$$.$getKeyboardNavigables$ = function $$DvtChartEventUtils$$$$getKeyboardNavigables$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = [];
    if ($DvtChartTypeUtils$$.$isPie$($dvt$$2$$)) {
      for (var $DvtSparkChartDefaults$$ = $dvt$$2$$.$pieChart$.$_slices$, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
        $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$getSeriesIndex$()) && $DvtSparkChartEventManager$$.push($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$]);
      }
    } else {
      for ($dvt$$2$$ = $dvt$$2$$.$getChartObjPeers$(), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $dvt$$2$$.length;$DvtSparkChartAutomation$$++) {
        $dvt$$2$$[$DvtSparkChartAutomation$$].$isNavigable$() && $DvtSparkChartEventManager$$.push($dvt$$2$$[$DvtSparkChartAutomation$$]);
      }
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartEventUtils$$.$isSeriesDrillable$ = function $$DvtChartEventUtils$$$$isSeriesDrillable$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$ = null != $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$.drilling : "inherit";
    if ("on" == $DvtSparkChartDefaults$$) {
      return !0;
    }
    if ("off" == $DvtSparkChartDefaults$$) {
      return !1;
    }
    $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$().drilling;
    return "on" == $DvtSparkChartDefaults$$ || "seriesOnly" == $DvtSparkChartDefaults$$;
  };
  $DvtChartEventUtils$$.$isDataItemDrillable$ = function $$DvtChartEventUtils$$$$isDataItemDrillable$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getNestedDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) || ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$));
    $DvtSparkChartEventManager$$ = null != $DvtSparkChartAutomation$$ ? $DvtSparkChartAutomation$$.drilling : "inherit";
    if ("on" == $DvtSparkChartEventManager$$) {
      return !0;
    }
    if ("off" == $DvtSparkChartEventManager$$) {
      return !1;
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().drilling;
    return "on" == $DvtSparkChartEventManager$$;
  };
  $DvtChartEventUtils$$.$addEventData$ = function $$DvtChartEventUtils$$$$addEventData$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesIndex$($dvt$$2$$, $DvtSparkChartEventManager$$.series), $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getGroupIndex$($dvt$$2$$, $DvtSparkChartEventManager$$.group), $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getNestedDataItemIndex$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$.id);
    if ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataContext$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$)) {
      $DvtSparkChartEventManager$$.data = $DvtSparkChartDefaults$$.data, $DvtSparkChartEventManager$$.seriesData = $DvtSparkChartDefaults$$.seriesData, $DvtSparkChartEventManager$$.groupData = $DvtSparkChartDefaults$$.groupData;
    }
  };
  var $DvtChartRefObjUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartRefObjUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartRefObjUtils$$.$getRefObjs$ = function $$DvtChartRefObjUtils$$$$getRefObjs$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "x"), $DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y");
    $dvt$$2$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y2");
    return $DvtSparkChartEventManager$$.concat($DvtSparkChartDefaults$$, $dvt$$2$$);
  };
  $DvtChartRefObjUtils$$.$getAxisRefObjs$ = function $$DvtChartRefObjUtils$$$$getAxisRefObjs$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$();
    return $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$ + "Axis"] && $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$ + "Axis"].referenceObjects ? $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$ + "Axis"].referenceObjects : [];
  };
  $DvtChartRefObjUtils$$.$getType$ = function $$DvtChartRefObjUtils$$$$getType$$($dvt$$2$$) {
    return "area" == $dvt$$2$$.type ? "area" : "line";
  };
  $DvtChartRefObjUtils$$.$getLocation$ = function $$DvtChartRefObjUtils$$$$getLocation$$($dvt$$2$$) {
    return "front" == $dvt$$2$$.location ? "front" : "back";
  };
  $DvtChartRefObjUtils$$.$getColor$ = function $$DvtChartRefObjUtils$$$$getColor$$($dvt$$2$$) {
    return $dvt$$2$$.color ? $dvt$$2$$.color : "#333333";
  };
  $DvtChartRefObjUtils$$.$getLineWidth$ = function $$DvtChartRefObjUtils$$$$getLineWidth$$($dvt$$2$$) {
    return $dvt$$2$$.lineWidth ? $dvt$$2$$.lineWidth : 1;
  };
  $DvtChartRefObjUtils$$.$getLineType$ = function $$DvtChartRefObjUtils$$$$getLineType$$($dvt$$2$$) {
    return $dvt$$2$$.lineType ? $dvt$$2$$.lineType : "straight";
  };
  $DvtChartRefObjUtils$$.$isObjectRendered$ = function $$DvtChartRefObjUtils$$$$isObjectRendered$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$);
    if (0 < $DvtSparkChartAutomation$$.length) {
      var $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$.$getRefObjCategories$($DvtSparkChartDefaults$$);
      if ($DvtChartAxisUtils$$ && $dvt$$2$$.$ArrayUtils$.$hasAnyItem$($DvtSparkChartAutomation$$, $DvtChartAxisUtils$$)) {
        return !1;
      }
    }
    return "hidden" != $DvtSparkChartDefaults$$.visibility;
  };
  $DvtChartRefObjUtils$$.getId = function $$DvtChartRefObjUtils$$$getId$($dvt$$2$$) {
    return null != $dvt$$2$$.id ? $dvt$$2$$.id : $dvt$$2$$.text;
  };
  $DvtChartRefObjUtils$$.$getRefObjCategories$ = function $$DvtChartRefObjUtils$$$$getRefObjCategories$$($dvt$$2$$) {
    return $dvt$$2$$.categories ? $dvt$$2$$.categories : [$DvtChartRefObjUtils$$.getId($dvt$$2$$)];
  };
  $DvtChartRefObjUtils$$.$getRefObj$ = function $$DvtChartRefObjUtils$$$$getRefObj$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$.$getRefObjs$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      if ($DvtChartRefObjUtils$$.getId($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$]) == $DvtSparkChartEventManager$$) {
        return $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$];
      }
    }
  };
  $DvtChartRefObjUtils$$.$getLowValue$ = function $$DvtChartRefObjUtils$$$$getLowValue$$($dvt$$2$$) {
    return null == $dvt$$2$$ ? null : null != $dvt$$2$$.min ? $dvt$$2$$.min : $dvt$$2$$.low;
  };
  $DvtChartRefObjUtils$$.$getHighValue$ = function $$DvtChartRefObjUtils$$$$getHighValue$$($dvt$$2$$) {
    return null == $dvt$$2$$ ? null : null != $dvt$$2$$.max ? $dvt$$2$$.max : $dvt$$2$$.high;
  };
  $DvtChartRefObjUtils$$.$getXValue$ = function $$DvtChartRefObjUtils$$$$getXValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$] && null != $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].x ? $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].x : $DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$) && !$DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$) ? $DvtChartDataUtils$$.$getGroupLabel$($dvt$$2$$, $DvtSparkChartDefaults$$) : $DvtSparkChartDefaults$$;
  };
  var $DvtChartSeriesEffectUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartSeriesEffectUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartSeriesEffectUtils$$.$getBarFill$ = function $$DvtChartSeriesEffectUtils$$$$getBarFill$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtChartStyleUtils$$.$getColor$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$ = $DvtChartStyleUtils$$.$getPattern$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtChartSeriesEffectUtils$$.$getRectangleFill$($dvt$$2$$, $DvtChartRefObjUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
  };
  $DvtChartSeriesEffectUtils$$.$getRectangleFill$ = function $$DvtChartSeriesEffectUtils$$$$getRectangleFill$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartAxisUtils$$ = $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$);
    return $DvtSparkChartAutomation$$ ? new $dvt$$2$$.$PatternFill$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$) : "gradient" == $DvtChartAxisUtils$$ && 3 < $DvtChartRefObjUtils$$ ? ($DvtSparkChartAutomation$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? 270 : 0, $DvtChartSeriesEffectUtils$$.$_useAltaGradients$($DvtSparkChartEventManager$$) ? ($DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartDefaults$$, -.09, .04), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartDefaults$$, 
    -.04, -.05)], $DvtSparkChartDefaults$$ = [0, 1]) : ($DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$getBrighter$($DvtSparkChartDefaults$$, .15), $dvt$$2$$.$ColorUtils$.$getBrighter$($DvtSparkChartDefaults$$, .45), $dvt$$2$$.$ColorUtils$.$getBrighter$($DvtSparkChartDefaults$$, .25), $DvtSparkChartDefaults$$, $dvt$$2$$.$ColorUtils$.$getBrighter$($DvtSparkChartDefaults$$, .15), $dvt$$2$$.$ColorUtils$.$getDarker$($DvtSparkChartDefaults$$, .1)], $DvtSparkChartDefaults$$ = [0, .15, .3, .65, 
    .85, 1]), new $dvt$$2$$.$LinearGradientFill$($DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$, null, $DvtSparkChartDefaults$$)) : new $dvt$$2$$.$SolidFill$($DvtSparkChartDefaults$$);
  };
  $DvtChartSeriesEffectUtils$$.$getAreaFill$ = function $$DvtChartSeriesEffectUtils$$$$getAreaFill$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = "lineWithArea" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartRefObjUtils$$;
    ($DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtChartRefObjUtils$$.areaColor ? $DvtChartRefObjUtils$$ = $DvtChartRefObjUtils$$.areaColor : ($DvtChartRefObjUtils$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtSparkChartAutomation$$ && ($DvtChartRefObjUtils$$ = $dvt$$2$$.$ColorUtils$.$setAlpha$($DvtChartRefObjUtils$$, .2)));
    var $DvtChartAxisUtils$$ = $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$);
    return $DvtChartAxisUtils$$ ? new $dvt$$2$$.$PatternFill$($DvtChartAxisUtils$$, $DvtChartRefObjUtils$$) : "gradient" == $DvtChartPieLabelUtils$$ ? ($DvtChartAxisUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? 180 : 270, $DvtSparkChartAutomation$$ ? ($DvtSparkChartAutomation$$ = $dvt$$2$$.$ColorUtils$.$getAlpha$($DvtChartRefObjUtils$$), $DvtSparkChartAutomation$$ = [$dvt$$2$$.$ColorUtils$.$setAlpha$($DvtChartRefObjUtils$$, Math.min($DvtSparkChartAutomation$$ + .2, 
    1)), $dvt$$2$$.$ColorUtils$.$setAlpha$($DvtChartRefObjUtils$$, Math.max($DvtSparkChartAutomation$$ - .15, 0))], $DvtChartRefObjUtils$$ = [0, 1]) : $DvtChartSeriesEffectUtils$$.$_useAltaGradients$($DvtSparkChartEventManager$$) ? ($DvtSparkChartAutomation$$ = [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtChartRefObjUtils$$, -.09, .04), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtChartRefObjUtils$$, -.04, -.05)], $DvtChartRefObjUtils$$ = [0, 1]) : ($DvtSparkChartAutomation$$ = $DvtChartTypeUtils$$.$isSpark$($DvtSparkChartEventManager$$) ? 
    [$dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartRefObjUtils$$, .5), $DvtChartRefObjUtils$$, $dvt$$2$$.$ColorUtils$.$getBrighter$($DvtChartRefObjUtils$$, .5)] : [$dvt$$2$$.$ColorUtils$.$getBrighter$($DvtChartRefObjUtils$$, .5), $DvtChartRefObjUtils$$, $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartRefObjUtils$$, .3)], $DvtChartRefObjUtils$$ = [0, .5, 1]), new $dvt$$2$$.$LinearGradientFill$($DvtChartAxisUtils$$, $DvtSparkChartAutomation$$, null, $DvtChartRefObjUtils$$)) : new $dvt$$2$$.$SolidFill$($DvtChartRefObjUtils$$);
  };
  $DvtChartSeriesEffectUtils$$.$getMarkerFill$ = function $$DvtChartSeriesEffectUtils$$$$getMarkerFill$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartAxisUtils$$ = $DvtChartStyleUtils$$.$getMarkerColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
    if ($DvtChartPieLabelUtils$$) {
      return new $dvt$$2$$.$PatternFill$($DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$);
    }
    if ($DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) && "gradient" == $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$)) {
      if ($DvtChartSeriesEffectUtils$$.$_useAltaGradients$($DvtSparkChartEventManager$$)) {
        return $DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtChartAxisUtils$$, -.09, .04), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtChartAxisUtils$$, -.04, -.05)], new $dvt$$2$$.$LinearGradientFill$(270, $DvtSparkChartEventManager$$, null, [0, 1]);
      }
      if ("human" == $DvtChartStyleUtils$$.$getMarkerShape$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$)) {
        return $DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$getBrighter$($DvtChartAxisUtils$$, .2), $dvt$$2$$.$ColorUtils$.$getBrighter$($DvtChartAxisUtils$$, .1), $DvtChartAxisUtils$$, $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartAxisUtils$$, .2)], new $dvt$$2$$.$LinearGradientFill$(315, $DvtSparkChartEventManager$$, null, [0, .3, .7, 1]);
      }
      $DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$getBrighter$($DvtChartAxisUtils$$, .15), $DvtChartAxisUtils$$, $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartAxisUtils$$, .1), $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartAxisUtils$$, .2)];
      return new $dvt$$2$$.$RadialGradientFill$($DvtSparkChartEventManager$$, null, [0, .5, .75, 1]);
    }
    return new $dvt$$2$$.$SolidFill$($DvtChartAxisUtils$$);
  };
  $DvtChartSeriesEffectUtils$$.$getFunnelPyramidSliceFill$ = function $$DvtChartSeriesEffectUtils$$$$getFunnelPyramidSliceFill$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 0);
    var $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$);
    if ($DvtSparkChartDefaults$$ && !$DvtChartAxisUtils$$) {
      $DvtChartRefObjUtils$$ = new $dvt$$2$$.$PatternFill$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      if ("vertical" == $DvtSparkChartEventManager$$.$getOptions$().orientation || $DvtChartTypeUtils$$.$isPyramid$($DvtSparkChartEventManager$$)) {
        $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? $DvtChartRefObjUtils$$.$setMatrix$(new $dvt$$2$$.$Matrix$(0, -1, 1, 0)) : $DvtChartRefObjUtils$$.$setMatrix$(new $dvt$$2$$.$Matrix$(0, 1, -1, 0));
      }
      return $DvtChartRefObjUtils$$;
    }
    return "gradient" == $DvtChartPieLabelUtils$$ ? ($DvtChartAxisUtils$$ = $DvtChartTypeUtils$$.$isPyramid$($DvtSparkChartEventManager$$) ? 180 : 90, "on" == $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.threeDEffect ? ($DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartAutomation$$, 0, -.1), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartAutomation$$, 0, .12), $DvtSparkChartAutomation$$], $DvtSparkChartAutomation$$ = [0, .65, 1]) : ($DvtSparkChartEventManager$$ = 
    [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartAutomation$$, -.09, .04), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartAutomation$$, -.04, -.05)], $DvtSparkChartAutomation$$ = [0, 1]), new $dvt$$2$$.$LinearGradientFill$($DvtChartAxisUtils$$, $DvtSparkChartEventManager$$, null, $DvtSparkChartAutomation$$, [$DvtChartRefObjUtils$$.x, $DvtChartRefObjUtils$$.y, $DvtChartRefObjUtils$$.$w$, $DvtChartRefObjUtils$$.$h$])) : new $dvt$$2$$.$SolidFill$($DvtSparkChartAutomation$$);
  };
  $DvtChartSeriesEffectUtils$$.$_useAltaGradients$ = function $$DvtChartSeriesEffectUtils$$$$_useAltaGradients$$($dvt$$2$$) {
    return !$DvtChartDefaults$$.$isSkyrosSkin$($dvt$$2$$);
  };
  var $DvtChartStyleUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartStyleUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$ = ["bar", "line", "area"];
  $DvtChartStyleUtils$$.$getSeriesType$ = function $$DvtChartStyleUtils$$$$getSeriesType$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_optionsCache$.$getFromCachedMap$("seriesType", $DvtSparkChartEventManager$$);
    if ($DvtSparkChartDefaults$$) {
      return $DvtSparkChartDefaults$$;
    }
    if (!$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$)) {
      return $dvt$$2$$.$_optionsCache$.$putToCachedMap$("seriesType", $DvtSparkChartEventManager$$, "auto"), "auto";
    }
    $DvtSparkChartDefaults$$ = ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) ? $DvtSparkChartDefaults$$.type : null;
    $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) || "candlestick" != $DvtSparkChartDefaults$$ || ($DvtSparkChartDefaults$$ = "auto");
    $DvtSparkChartDefaults$$ && "auto" != $DvtSparkChartDefaults$$ || ($DvtChartTypeUtils$$.$isBar$($dvt$$2$$) ? $DvtSparkChartDefaults$$ = "bar" : $DvtChartTypeUtils$$.$isLine$($dvt$$2$$) ? $DvtSparkChartDefaults$$ = "line" : $DvtChartTypeUtils$$.$isArea$($dvt$$2$$) ? $DvtSparkChartDefaults$$ = "area" : $DvtChartTypeUtils$$.$isLineWithArea$($dvt$$2$$) ? $DvtSparkChartDefaults$$ = "lineWithArea" : $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? $DvtSparkChartDefaults$$ = "candlestick" : $DvtChartTypeUtils$$.$isBoxPlot$($dvt$$2$$) ? 
    $DvtSparkChartDefaults$$ = "boxPlot" : $DvtChartTypeUtils$$.$isCombo$($dvt$$2$$) && ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesStyleIndex$($dvt$$2$$, $DvtSparkChartEventManager$$) % $DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$.length, $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$[$DvtSparkChartDefaults$$]));
    $dvt$$2$$.$_optionsCache$.$putToCachedMap$("seriesType", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartStyleUtils$$.$isRangeSeries$ = function $$DvtChartStyleUtils$$$$isRangeSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_optionsCache$.$getFromCachedMap$("isRange", $DvtSparkChartEventManager$$);
    if (null != $DvtSparkChartDefaults$$) {
      return $DvtSparkChartDefaults$$;
    }
    var $DvtSparkChartDefaults$$ = !1, $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$);
    if ("bar" == $DvtSparkChartAutomation$$ || "area" == $DvtSparkChartAutomation$$) {
      for ($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);$DvtSparkChartAutomation$$++) {
        if (null != $DvtChartDataUtils$$.$getLowValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) || null != $DvtChartDataUtils$$.$getHighValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$)) {
          $DvtSparkChartDefaults$$ = !0;
          break;
        }
      }
    }
    $dvt$$2$$.$_optionsCache$.$putToCachedMap$("isRange", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartStyleUtils$$.$getSeriesEffect$ = function $$DvtChartStyleUtils$$$$getSeriesEffect$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.seriesEffect;
  };
  $DvtChartStyleUtils$$.$getColor$ = function $$DvtChartStyleUtils$$$$getColor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if ($DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.color || ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartAutomation$$.color) {
      return $DvtSparkChartAutomation$$.color;
    }
    if ("candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$)) {
      return $DvtChartStyleUtils$$.$getStockItemColor$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    }
    $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$().styleDefaults.colors;
    $dvt$$2$$ = $DvtChartDataUtils$$.$getSeriesStyleIndex$($dvt$$2$$, $DvtSparkChartEventManager$$) % $DvtSparkChartDefaults$$.length;
    return $DvtSparkChartDefaults$$[$dvt$$2$$];
  };
  $DvtChartStyleUtils$$.$getStockItemColor$ = function $$DvtChartStyleUtils$$$$getStockItemColor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartDataUtils$$.$isStockValueRising$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? $DvtSparkChartAutomation$$.styleDefaults.stockRisingColor : $DvtSparkChartAutomation$$.styleDefaults.stockFallingColor;
  };
  $DvtChartStyleUtils$$.$getStockVolumeColor$ = function $$DvtChartStyleUtils$$$$getStockVolumeColor$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, 0, $DvtSparkChartEventManager$$);
    if ($DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.color) {
      return $DvtSparkChartDefaults$$.color;
    }
    $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$();
    return $DvtSparkChartDefaults$$.styleDefaults.stockVolumeColor ? $DvtSparkChartDefaults$$.styleDefaults.stockVolumeColor : $DvtChartStyleUtils$$.$getStockItemColor$($dvt$$2$$, 0, $DvtSparkChartEventManager$$);
  };
  $DvtChartStyleUtils$$.$getSplitterPosition$ = function $$DvtChartStyleUtils$$$$getSplitterPosition$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().splitterPosition;
    return null != $DvtSparkChartEventManager$$ ? $DvtSparkChartEventManager$$ : $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? .8 : .5;
  };
  $DvtChartStyleUtils$$.$getPattern$ = function $$DvtChartStyleUtils$$$$getPattern$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    if (($DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getNestedDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$)) && $DvtChartRefObjUtils$$.pattern && "auto" != $DvtChartRefObjUtils$$.pattern || ($DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) && $DvtChartRefObjUtils$$.pattern && "auto" != $DvtChartRefObjUtils$$.pattern) {
      return $DvtChartRefObjUtils$$.pattern;
    }
    $DvtChartRefObjUtils$$ = $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if (("line" == $DvtChartRefObjUtils$$ || "area" == $DvtChartRefObjUtils$$) && null != $DvtSparkChartAutomation$$) {
      return null;
    }
    if (($DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtChartRefObjUtils$$.pattern && "auto" != $DvtChartRefObjUtils$$.pattern) {
      return $DvtChartRefObjUtils$$.pattern;
    }
    if ("pattern" == $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$)) {
      if ($DvtChartTypeUtils$$.$isStock$ && "candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
        return $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$isStockValueRising$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtSparkChartEventManager$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtSparkChartDefaults$$ ? $DvtSparkChartEventManager$$ ? "smallDiagonalLeft" : "smallDiagonalRight" : $DvtSparkChartEventManager$$ ? "smallDiagonalRight" : "smallDiagonalLeft";
      }
      $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.patterns;
      $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesStyleIndex$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) % $DvtSparkChartAutomation$$.length;
      return $DvtSparkChartAutomation$$[$DvtSparkChartEventManager$$];
    }
    return null;
  };
  $DvtChartStyleUtils$$.$getMarkerBorderColor$ = function $$DvtChartStyleUtils$$$$getMarkerBorderColor$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    return ($DvtChartRefObjUtils$$ = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$)) ? $DvtChartRefObjUtils$$ : 0 < $DvtChartStyleUtils$$.$getDataItemGaps$($DvtSparkChartEventManager$$) && "lineWithArea" != $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? $DvtChartStyleUtils$$.$getBackgroundColor$($DvtSparkChartEventManager$$, !0) : $DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) && 
    !$DvtChartDefaults$$.$isSkyrosSkin$($DvtSparkChartEventManager$$) && "gradient" != $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$) && ($DvtSparkChartEventManager$$ = $DvtChartStyleUtils$$.$getMarkerColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) ? $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, .15, -.25) : null;
  };
  $DvtChartStyleUtils$$.$getBorderColor$ = function $$DvtChartStyleUtils$$$$getBorderColor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if (($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getNestedDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) && $DvtSparkChartAutomation$$.borderColor) {
      return $DvtSparkChartAutomation$$.borderColor;
    }
    if (($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.borderColor) {
      return $DvtSparkChartDefaults$$.borderColor;
    }
    if (($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartEventManager$$.borderColor) {
      return $DvtSparkChartEventManager$$.borderColor;
    }
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().styleDefaults;
    return "auto" != $dvt$$2$$.borderColor ? $dvt$$2$$.borderColor : null;
  };
  $DvtChartStyleUtils$$.$getBorderWidth$ = function $$DvtChartStyleUtils$$$$getBorderWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if (($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getNestedDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) && null != $DvtSparkChartAutomation$$.borderWidth) {
      return $DvtSparkChartAutomation$$.borderWidth;
    }
    if (($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && null != $DvtSparkChartDefaults$$.borderWidth) {
      return $DvtSparkChartDefaults$$.borderWidth;
    }
    if (($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && null != $DvtSparkChartEventManager$$.borderWidth) {
      return $DvtSparkChartEventManager$$.borderWidth;
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().styleDefaults;
    return "auto" != $DvtSparkChartEventManager$$.borderWidth ? $DvtSparkChartEventManager$$.borderWidth : $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) || $DvtChartTypeUtils$$.$isLineArea$($dvt$$2$$) ? 1.25 : 1;
  };
  $DvtChartStyleUtils$$.$getMarkerColor$ = function $$DvtChartStyleUtils$$$$getMarkerColor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return $DvtChartStyleUtils$$.$isMarkerDisplayed$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) ? ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getNestedDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) && $DvtSparkChartAutomation$$.color || ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartAutomation$$.color ? 
    $DvtSparkChartAutomation$$.color : ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartAutomation$$.markerColor ? $DvtSparkChartAutomation$$.markerColor : ($DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$().styleDefaults.markerColor) ? $DvtSparkChartAutomation$$ : $DvtChartStyleUtils$$.$getColor$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) : $DvtChartStyleUtils$$.$getColor$($dvt$$2$$, $DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$);
  };
  $DvtChartStyleUtils$$.$getMarkerShape$ = function $$DvtChartStyleUtils$$$$getMarkerShape$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $dvt$$2$$.$getOptions$(), $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$.styleDefaults.markerShape, $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    $DvtChartPieLabelUtils$$ && $DvtChartPieLabelUtils$$.markerShape && ($DvtChartAxisUtils$$ = $DvtChartPieLabelUtils$$.markerShape);
    ($DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtChartPieLabelUtils$$.markerShape && ($DvtChartAxisUtils$$ = $DvtChartPieLabelUtils$$.markerShape);
    ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getNestedDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) && $DvtSparkChartDefaults$$.markerShape && ($DvtChartAxisUtils$$ = $DvtSparkChartDefaults$$.markerShape);
    "auto" == $DvtChartAxisUtils$$ && ($DvtChartTypeUtils$$.$isBubble$($dvt$$2$$) || "boxPlot" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$) || $DvtChartStyleUtils$$.$isRangeSeries$($dvt$$2$$, $DvtSparkChartEventManager$$) ? $DvtChartAxisUtils$$ = "circle" : ($dvt$$2$$ = $DvtChartDataUtils$$.$getSeriesStyleIndex$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartRefObjUtils$$ = $DvtChartRefObjUtils$$.styleDefaults.shapes, $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$[$dvt$$2$$ % 
    $DvtChartRefObjUtils$$.length]));
    return $DvtChartAxisUtils$$;
  };
  $DvtChartStyleUtils$$.$getMarkerSize$ = function $$DvtChartStyleUtils$$$$getMarkerSize$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartEventManager$$ = ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getNestedDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) && null != $DvtSparkChartAutomation$$.markerSize ? Number($DvtSparkChartAutomation$$.markerSize) : ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && null != $DvtSparkChartDefaults$$.markerSize ? Number($DvtSparkChartDefaults$$.markerSize) : 
    ($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && null != $DvtSparkChartEventManager$$.markerSize ? Number($DvtSparkChartEventManager$$.markerSize) : Number($dvt$$2$$.$getOptions$().styleDefaults.markerSize);
    $DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) && ($DvtSparkChartEventManager$$ = Math.ceil(.6 * $DvtSparkChartEventManager$$));
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartStyleUtils$$.$isMarkerDisplayed$ = function $$DvtChartStyleUtils$$$$isMarkerDisplayed$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartDefaults$$ = ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getNestedDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) && null != $DvtSparkChartAutomation$$.markerDisplayed ? $DvtSparkChartAutomation$$.markerDisplayed : ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && null != $DvtSparkChartDefaults$$.markerDisplayed ? $DvtSparkChartDefaults$$.markerDisplayed : 
    ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && null != $DvtSparkChartDefaults$$.markerDisplayed ? $DvtSparkChartDefaults$$.markerDisplayed : $dvt$$2$$.$getOptions$().styleDefaults.markerDisplayed;
    return "on" == $DvtSparkChartDefaults$$ ? !0 : "off" == $DvtSparkChartDefaults$$ ? !1 : $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) || "boxPlot" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$) || "none" == $DvtChartStyleUtils$$.$getLineType$($dvt$$2$$, $DvtSparkChartEventManager$$);
  };
  $DvtChartStyleUtils$$.$getImageSource$ = function $$DvtChartStyleUtils$$$$getImageSource$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    if (($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getNestedDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) && $DvtSparkChartAutomation$$[$DvtChartRefObjUtils$$]) {
      return $DvtSparkChartAutomation$$[$DvtChartRefObjUtils$$];
    }
    if (($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$[$DvtChartRefObjUtils$$]) {
      return $DvtSparkChartDefaults$$[$DvtChartRefObjUtils$$];
    }
    if (($dvt$$2$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $dvt$$2$$[$DvtChartRefObjUtils$$]) {
      return $dvt$$2$$[$DvtChartRefObjUtils$$];
    }
  };
  $DvtChartStyleUtils$$.$getLineWidth$ = function $$DvtChartStyleUtils$$$$getLineWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.lineWidth ? $DvtSparkChartDefaults$$.lineWidth : $DvtSparkChartAutomation$$.styleDefaults.lineWidth ? $DvtSparkChartAutomation$$.styleDefaults.lineWidth : "lineWithArea" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$) ? 
    2 : 3;
    $DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) && ($DvtSparkChartDefaults$$ = Math.ceil(.6 * $DvtSparkChartDefaults$$));
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartStyleUtils$$.$getLineStyle$ = function $$DvtChartStyleUtils$$$$getLineStyle$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.lineStyle ? $DvtSparkChartDefaults$$.lineStyle : $dvt$$2$$.$getOptions$().styleDefaults.lineStyle;
  };
  $DvtChartStyleUtils$$.$getLineType$ = function $$DvtChartStyleUtils$$$$getLineType$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$;
    $DvtSparkChartDefaults$$ = ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartDefaults$$.lineType ? $DvtSparkChartDefaults$$.lineType : $dvt$$2$$.$getOptions$().styleDefaults.lineType;
    "auto" == $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) ? "none" : "straight");
    if ($DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) || $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$)) {
      "centeredSegmented" == $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = "segmented"), "centeredStepped" == $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = "stepped");
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartStyleUtils$$.$getBarSpacing$ = function $$DvtChartStyleUtils$$$$getBarSpacing$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().__sparkBarSpacing;
  };
  $DvtChartStyleUtils$$.$getBarGapRatio$ = function $$DvtChartStyleUtils$$$$getBarGapRatio$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_cache$.$getFromCache$("barGapRatio");
    if ($DvtSparkChartEventManager$$) {
      return $DvtSparkChartEventManager$$;
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().styleDefaults.barGapRatio;
    "string" == typeof $DvtSparkChartEventManager$$ && "%" == $DvtSparkChartEventManager$$.slice(-1) && ($DvtSparkChartEventManager$$ = Number($DvtSparkChartEventManager$$.slice(0, -1)) / 100);
    if (null != $DvtSparkChartEventManager$$ && !isNaN($DvtSparkChartEventManager$$)) {
      return $DvtSparkChartEventManager$$;
    }
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getStackCategories$($dvt$$2$$, "bar"), $DvtSparkChartEventManager$$ = $DvtSparkChartDefaults$$.y.length, $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.y2.length, $DvtSparkChartEventManager$$ = $DvtChartTypeUtils$$.$isSplitDualY$($dvt$$2$$) ? Math.max($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) : $DvtSparkChartEventManager$$ + $DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$ = $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? 
    1 == $DvtSparkChartEventManager$$ ? 0 : .25 : 1 == $DvtSparkChartEventManager$$ ? .37 + .26 / $DvtChartDataUtils$$.$getViewportGroupCount$($dvt$$2$$) : .25;
    $dvt$$2$$.$_cache$.$putToCache$("barGapRatio", $DvtSparkChartEventManager$$);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartStyleUtils$$.$getMaxBarWidth$ = function $$DvtChartStyleUtils$$$$getMaxBarWidth$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().styleDefaults.maxBarWidth;
    return null == $DvtSparkChartEventManager$$ || $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? Infinity : $DvtSparkChartEventManager$$;
  };
  $DvtChartStyleUtils$$.$getBarWidth$ = function $$DvtChartStyleUtils$$$$getBarWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getZValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 1) / $dvt$$2$$.$getOptions$()._averageGroupZ;
    return Math.min($DvtSparkChartEventManager$$ * $DvtChartStyleUtils$$.$getGroupWidth$($dvt$$2$$), $DvtChartStyleUtils$$.$getMaxBarWidth$($dvt$$2$$));
  };
  $DvtChartStyleUtils$$.$getBarStackWidth$ = function $$DvtChartStyleUtils$$$$getBarStackWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$ ? "y2BarStackWidth" : "yBarStackWidth", $DvtChartAxisUtils$$ = $dvt$$2$$.$_cache$.$getFromCachedMap2D$($DvtChartRefObjUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if ($DvtChartAxisUtils$$) {
      return $DvtChartAxisUtils$$;
    }
    $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getBarCategoryZ$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) / $dvt$$2$$.$getOptions$()._averageGroupZ;
    $DvtChartAxisUtils$$ = Math.min($DvtSparkChartAutomation$$ * $DvtChartStyleUtils$$.$getGroupWidth$($dvt$$2$$), $DvtChartStyleUtils$$.$getMaxBarWidth$($dvt$$2$$));
    $dvt$$2$$.$_cache$.$putToCachedMap2D$($DvtChartRefObjUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartAxisUtils$$);
    return $DvtChartAxisUtils$$;
  };
  $DvtChartStyleUtils$$.$getBarCategoryOffsetMap$ = function $$DvtChartStyleUtils$$$$getBarCategoryOffsetMap$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$_cache$.$getFromCachedMap2D$("barCategoryOffsetMap", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if ($DvtSparkChartAutomation$$) {
      return $DvtSparkChartAutomation$$;
    }
    var $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getStackCategories$($dvt$$2$$, "bar"), $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$), $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$isSplitDualY$($dvt$$2$$), $DvtChartPieLabelInfo$$ = {}, $DvtChartPieRenderUtils$$ = {}, $DvtChartDataChangePyramidSlice$$ = 0, $DvtChartSeriesEffectUtils$$ = 0, $DvtChartRangeMarker$$, $DvtChartPolarBar$$;
    if ($DvtSparkChartDefaults$$) {
      for ($DvtChartPolarBar$$ = 0;$DvtChartPolarBar$$ < $DvtChartRefObjUtils$$.y.length;$DvtChartPolarBar$$++) {
        $DvtChartRangeMarker$$ = $DvtChartStyleUtils$$.$getBarStackWidth$($dvt$$2$$, $DvtChartRefObjUtils$$.y[$DvtChartPolarBar$$], $DvtSparkChartEventManager$$, !1), $DvtSparkChartAutomation$$ ? $DvtChartPieLabelInfo$$[$DvtChartRefObjUtils$$.y[$DvtChartPolarBar$$]] = -.5 * $DvtChartRangeMarker$$ : ($DvtChartPieLabelInfo$$[$DvtChartRefObjUtils$$.y[$DvtChartPolarBar$$]] = $DvtChartDataChangePyramidSlice$$, $DvtChartDataChangePyramidSlice$$ += $DvtChartRangeMarker$$);
      }
      $DvtChartPieLabelUtils$$ || ($DvtChartSeriesEffectUtils$$ = $DvtChartDataChangePyramidSlice$$);
      for ($DvtChartPolarBar$$ = 0;$DvtChartPolarBar$$ < $DvtChartRefObjUtils$$.y2.length;$DvtChartPolarBar$$++) {
        $DvtChartRangeMarker$$ = $DvtChartStyleUtils$$.$getBarStackWidth$($dvt$$2$$, $DvtChartRefObjUtils$$.y2[$DvtChartPolarBar$$], $DvtSparkChartEventManager$$, !0), $DvtSparkChartAutomation$$ ? $DvtChartPieRenderUtils$$[$DvtChartRefObjUtils$$.y2[$DvtChartPolarBar$$]] = -.5 * $DvtChartRangeMarker$$ : ($DvtChartPieRenderUtils$$[$DvtChartRefObjUtils$$.y2[$DvtChartPolarBar$$]] = $DvtChartSeriesEffectUtils$$, $DvtChartSeriesEffectUtils$$ += $DvtChartRangeMarker$$);
      }
      $DvtChartPieLabelUtils$$ || ($DvtChartDataChangePyramidSlice$$ = $DvtChartSeriesEffectUtils$$);
    } else {
      for ($DvtChartPolarBar$$ = 0;$DvtChartPolarBar$$ < $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);$DvtChartPolarBar$$++) {
        if ($DvtChartRangeMarker$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartPolarBar$$), ("bar" == $DvtChartRangeMarker$$ || "candlestick" == $DvtChartRangeMarker$$ || "boxPlot" == $DvtChartRangeMarker$$) && $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartPolarBar$$)) {
          var $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartPolarBar$$), $DvtChartFunnelSlice$$ = $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtChartPolarBar$$);
          $DvtChartRangeMarker$$ = $DvtChartStyleUtils$$.$getBarWidth$($dvt$$2$$, $DvtChartPolarBar$$, $DvtSparkChartEventManager$$);
          $DvtChartRefObjUtils$$ ? $DvtSparkChartAutomation$$ ? $DvtChartPieRenderUtils$$[$DvtChartFunnelSlice$$] = -.5 * $DvtChartRangeMarker$$ : ($DvtChartPieRenderUtils$$[$DvtChartFunnelSlice$$] = $DvtChartSeriesEffectUtils$$, $DvtChartSeriesEffectUtils$$ += $DvtChartRangeMarker$$) : $DvtSparkChartAutomation$$ ? $DvtChartPieLabelInfo$$[$DvtChartFunnelSlice$$] = -.5 * $DvtChartRangeMarker$$ : ($DvtChartPieLabelInfo$$[$DvtChartFunnelSlice$$] = $DvtChartDataChangePyramidSlice$$, $DvtChartDataChangePyramidSlice$$ += 
          $DvtChartRangeMarker$$);
        }
      }
    }
    for ($DvtChartFunnelSlice$$ in $DvtChartPieLabelInfo$$) {
      $DvtChartPieLabelInfo$$[$DvtChartFunnelSlice$$] -= $DvtChartPieLabelUtils$$ || $DvtSparkChartDefaults$$ ? $DvtChartDataChangePyramidSlice$$ / 2 : ($DvtChartDataChangePyramidSlice$$ + $DvtChartSeriesEffectUtils$$) / 2;
    }
    for ($DvtChartFunnelSlice$$ in $DvtChartPieRenderUtils$$) {
      $DvtChartPieRenderUtils$$[$DvtChartFunnelSlice$$] -= $DvtChartPieLabelUtils$$ || $DvtSparkChartDefaults$$ ? $DvtChartSeriesEffectUtils$$ / 2 : ($DvtChartDataChangePyramidSlice$$ + $DvtChartSeriesEffectUtils$$) / 2 - $DvtChartDataChangePyramidSlice$$;
    }
    $DvtSparkChartAutomation$$ = {y:$DvtChartPieLabelInfo$$, y2:$DvtChartPieRenderUtils$$};
    $dvt$$2$$.$_cache$.$putToCachedMap2D$("barCategoryOffsetMap", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartStyleUtils$$.$getDataItemGaps$ = function $$DvtChartStyleUtils$$$$getDataItemGaps$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    if ($DvtChartTypeUtils$$.$isFunnel$($dvt$$2$$) && "on" == $DvtSparkChartEventManager$$.styleDefaults.funnelSliceGaps) {
      return 1;
    }
    if (null != $DvtSparkChartEventManager$$.styleDefaults.sliceGaps) {
      return $DvtSparkChartEventManager$$.styleDefaults.sliceGaps;
    }
    $dvt$$2$$ = $DvtSparkChartEventManager$$.styleDefaults.dataItemGaps;
    "auto" == $dvt$$2$$ && ($dvt$$2$$ = "on" == $DvtSparkChartEventManager$$.styleDefaults.threeDEffect ? "0%" : "50%");
    $DvtSparkChartEventManager$$ = $dvt$$2$$ && $dvt$$2$$.indexOf ? $dvt$$2$$.indexOf("%") : -1;
    return 0 <= $DvtSparkChartEventManager$$ ? ($dvt$$2$$ = $dvt$$2$$.substring(0, $DvtSparkChartEventManager$$), $dvt$$2$$ / 100) : 0;
  };
  $DvtChartStyleUtils$$.$isSelectable$ = function $$DvtChartStyleUtils$$$$isSelectable$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartAutomation$$ && "off" == $DvtSparkChartAutomation$$._selectable ? !1 : $dvt$$2$$.$isSelectionSupported$() && null != $DvtSparkChartEventManager$$ && 0 <= $DvtSparkChartEventManager$$ && null != $DvtSparkChartDefaults$$ && 0 <= $DvtSparkChartDefaults$$;
  };
  $DvtChartStyleUtils$$.$isSeriesRendered$ = function $$DvtChartStyleUtils$$$$isSeriesRendered$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$);
    return 0 < $DvtSparkChartAutomation$$.length && $dvt$$2$$.$ArrayUtils$.$hasAnyItem$($DvtSparkChartAutomation$$, $DvtChartDataUtils$$.$getCategories$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) ? !1 : !0;
  };
  $DvtChartStyleUtils$$.$isDataItemRendered$ = function $$DvtChartStyleUtils$$$$isDataItemRendered$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    if ($DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      var $DvtChartAxisUtils$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$);
      if (0 < $DvtChartAxisUtils$$.length) {
        if ($DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isPyramid$($DvtSparkChartEventManager$$)) {
          $DvtSparkChartAutomation$$ = 0;
        }
        if ($dvt$$2$$.$ArrayUtils$.$hasAnyItem$($DvtChartAxisUtils$$, $DvtChartDataUtils$$.$getCategories$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) || $dvt$$2$$.$ArrayUtils$.$hasAnyItem$($DvtChartAxisUtils$$, $DvtChartDataUtils$$.$getCategories$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$))) {
          return !1;
        }
      }
    } else {
      return !1;
    }
    return !0;
  };
  $DvtChartStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtChartStyleUtils$$$$getAnimationOnDisplay$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().animationOnDisplay;
  };
  $DvtChartStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtChartStyleUtils$$$$getAnimationOnDataChange$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().animationOnDataChange;
  };
  $DvtChartStyleUtils$$.$getAnimationDuration$ = function $$DvtChartStyleUtils$$$$getAnimationDuration$$($DvtSparkChartEventManager$$) {
    return $dvt$$2$$.$StyleUtils$.$getTimeMilliseconds$($DvtSparkChartEventManager$$.$getOptions$().styleDefaults.animationDuration) / 1E3;
  };
  $DvtChartStyleUtils$$.$getAnimationIndicators$ = function $$DvtChartStyleUtils$$$$getAnimationIndicators$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.animationIndicators;
  };
  $DvtChartStyleUtils$$.$getAnimationUpColor$ = function $$DvtChartStyleUtils$$$$getAnimationUpColor$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.animationUpColor;
  };
  $DvtChartStyleUtils$$.$getAnimationDownColor$ = function $$DvtChartStyleUtils$$$$getAnimationDownColor$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.animationDownColor;
  };
  $DvtChartStyleUtils$$.$getHiddenCategories$ = function $$DvtChartStyleUtils$$$$getHiddenCategories$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getOptions$();
    $dvt$$2$$.hiddenCategories || ($dvt$$2$$.hiddenCategories = []);
    return $dvt$$2$$.hiddenCategories;
  };
  $DvtChartStyleUtils$$.$getHighlightedCategories$ = function $$DvtChartStyleUtils$$$$getHighlightedCategories$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getOptions$();
    $dvt$$2$$.highlightedCategories || ($dvt$$2$$.highlightedCategories = []);
    return $dvt$$2$$.highlightedCategories;
  };
  $DvtChartStyleUtils$$.$getSelectedInnerColor$ = function $$DvtChartStyleUtils$$$$getSelectedInnerColor$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.selectedInnerColor;
  };
  $DvtChartStyleUtils$$.$getSelectedOuterColor$ = function $$DvtChartStyleUtils$$$$getSelectedOuterColor$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.selectedOuterColor;
  };
  $DvtChartStyleUtils$$.$isSelectionHighlighted$ = function $$DvtChartStyleUtils$$$$isSelectionHighlighted$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().styleDefaults.selectionEffect;
    return "highlight" == $dvt$$2$$ || "highlightAndExplode" == $dvt$$2$$;
  };
  $DvtChartStyleUtils$$.$isSelectionExploded$ = function $$DvtChartStyleUtils$$$$isSelectionExploded$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().styleDefaults.selectionEffect;
    return "explode" == $dvt$$2$$ || "highlightAndExplode" == $dvt$$2$$;
  };
  $DvtChartStyleUtils$$.$getDataLabelStyle$ = function $$DvtChartStyleUtils$$$$getDataLabelStyle$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) {
    var $DvtChartPieRenderUtils$$ = [], $DvtChartDataChangePyramidSlice$$;
    !$DvtChartAxisUtils$$ || "bar" != $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) && !$DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) || "center" != $DvtChartPieLabelUtils$$ && "inBottom" != $DvtChartPieLabelUtils$$ && "inTop" != $DvtChartPieLabelUtils$$ && "inRight" != $DvtChartPieLabelUtils$$ && "inLeft" != $DvtChartPieLabelUtils$$ ? $DvtChartPieRenderUtils$$.push(new $dvt$$2$$.$CSSStyle$("color: #333333;")) : ($DvtChartDataChangePyramidSlice$$ = 
    null != $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) ? "#000000" : $dvt$$2$$.$ColorUtils$.$getContrastingTextColor$($DvtChartAxisUtils$$), $DvtChartPieRenderUtils$$.push(new $dvt$$2$$.$CSSStyle$("color: " + $DvtChartDataChangePyramidSlice$$ + ";")));
    $DvtChartPieRenderUtils$$.push($DvtChartStyleUtils$$.$_parseLowHighArray$($DvtSparkChartEventManager$$.$getOptions$().styleDefaults.dataLabelStyle, $DvtChartPieLabelInfo$$));
    ($DvtChartAxisUtils$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) && $DvtChartPieRenderUtils$$.push(new $dvt$$2$$.$CSSStyle$($DvtChartStyleUtils$$.$_parseLowHighArray$($DvtChartAxisUtils$$.labelStyle, $DvtChartPieLabelInfo$$)));
    ($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getNestedDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$)) && $DvtChartPieRenderUtils$$.push(new $dvt$$2$$.$CSSStyle$($DvtChartStyleUtils$$.$_parseLowHighArray$($DvtSparkChartEventManager$$.labelStyle, $DvtChartPieLabelInfo$$)));
    $DvtChartDataChangePyramidSlice$$ && $dvt$$2$$.$Agent$.$isHighContrast$() && $DvtChartPieRenderUtils$$.push(new $dvt$$2$$.$CSSStyle$("color: " + $DvtChartDataChangePyramidSlice$$ + ";"));
    return $dvt$$2$$.$CSSStyle$.$mergeStyles$($DvtChartPieRenderUtils$$);
  };
  $DvtChartStyleUtils$$.$getDataLabelPosition$ = function $$DvtChartStyleUtils$$$$getDataLabelPosition$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getNestedDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$), $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    if ($DvtChartPieLabelUtils$$) {
      $DvtChartPieLabelInfo$$ = "outsideBarEdge";
    } else {
      if (($DvtChartPieLabelInfo$$ = $DvtChartPieLabelInfo$$ && $DvtChartPieLabelInfo$$.labelPosition ? $DvtChartPieLabelInfo$$.labelPosition : $DvtChartPieRenderUtils$$.labelPosition) || ($DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.dataLabelPosition), $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$_parseLowHighArray$($DvtChartPieLabelInfo$$, $DvtChartAxisUtils$$), "none" == $DvtChartPieLabelInfo$$) {
        return "none";
      }
    }
    var $DvtChartDataChangePyramidSlice$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtChartSeriesEffectUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$), $DvtChartRangeMarker$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$);
    if ($DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isPyramid$($DvtSparkChartEventManager$$)) {
      return "center";
    }
    if ("bar" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      if ("center" == $DvtChartPieLabelInfo$$ || $DvtChartRangeMarker$$) {
        return "center";
      }
      $DvtChartRangeMarker$$ = $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartEventManager$$);
      if ("insideBarEdge" != $DvtChartPieLabelInfo$$) {
        if ($DvtChartRangeMarker$$ && !$DvtChartPieLabelUtils$$) {
          return "center";
        }
        "outsideBarEdge" != $DvtChartPieLabelInfo$$ && ($DvtChartPieLabelInfo$$ = "insideBarEdge");
      }
      "insideBarEdge" != $DvtChartPieLabelInfo$$ || $DvtChartRangeMarker$$ || ($DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.dataLabelStyle, $DvtChartSeriesEffectUtils$$ ? ($DvtChartRangeMarker$$ = $DvtChartDataUtils$$.$getDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$TextUtils$.$getTextStringWidth$($DvtSparkChartEventManager$$.$getCtx$(), 
      $DvtChartRangeMarker$$, $DvtChartPieLabelUtils$$)) : $DvtChartPieLabelUtils$$ = $dvt$$2$$.$TextUtils$.$getTextStringHeight$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieLabelUtils$$), $DvtChartRangeMarker$$ = $DvtChartDataUtils$$.$getBarInfo$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), Math.abs($DvtChartRangeMarker$$.$baseCoord$ - $DvtChartRangeMarker$$.$yCoord$) <= $DvtChartPieLabelUtils$$ && ($DvtChartPieLabelInfo$$ = "outsideBarEdge"));
      $DvtSparkChartEventManager$$ = "low" == $DvtChartAxisUtils$$ ? $DvtChartPieRenderUtils$$.low <= $DvtChartPieRenderUtils$$.high : "high" == $DvtChartAxisUtils$$ ? $DvtChartPieRenderUtils$$.high < $DvtChartPieRenderUtils$$.low : 0 > $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
      return "outsideBarEdge" == $DvtChartPieLabelInfo$$ ? $DvtChartSeriesEffectUtils$$ ? !$DvtSparkChartEventManager$$ && !$DvtChartDataChangePyramidSlice$$ || $DvtSparkChartEventManager$$ && $DvtChartDataChangePyramidSlice$$ ? "right" : "left" : $DvtSparkChartEventManager$$ ? "bottom" : "top" : $DvtChartSeriesEffectUtils$$ ? !$DvtSparkChartEventManager$$ && !$DvtChartDataChangePyramidSlice$$ || $DvtSparkChartEventManager$$ && $DvtChartDataChangePyramidSlice$$ ? "inRight" : "inLeft" : $DvtSparkChartEventManager$$ ? 
      "inBottom" : "inTop";
    }
    if ("center" == $DvtChartPieLabelInfo$$) {
      return "center";
    }
    if ("belowMarker" == $DvtChartPieLabelInfo$$) {
      return "bottom";
    }
    if ("aboveMarker" == $DvtChartPieLabelInfo$$) {
      return "top";
    }
    if ("afterMarker" != $DvtChartPieLabelInfo$$ && "beforeMarker" != $DvtChartPieLabelInfo$$) {
      if ($DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$)) {
        return "center";
      }
      if ("low" != $DvtChartAxisUtils$$ || $DvtChartRangeMarker$$) {
        if ("high" != $DvtChartAxisUtils$$ || $DvtChartRangeMarker$$) {
          $DvtChartPieLabelInfo$$ = "afterMarker";
        } else {
          if ($DvtChartSeriesEffectUtils$$) {
            $DvtChartPieLabelInfo$$ = "afterMarker";
          } else {
            return "top";
          }
        }
      } else {
        if ($DvtChartSeriesEffectUtils$$) {
          $DvtChartPieLabelInfo$$ = "beforeMarker";
        } else {
          return "bottom";
        }
      }
    }
    return !$DvtChartDataChangePyramidSlice$$ && "afterMarker" == $DvtChartPieLabelInfo$$ || $DvtChartDataChangePyramidSlice$$ && "beforeMarker" == $DvtChartPieLabelInfo$$ ? "right" : "left";
  };
  $DvtChartStyleUtils$$.$_parseLowHighArray$ = function $$DvtChartStyleUtils$$$$_parseLowHighArray$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $dvt$$2$$ instanceof Array ? "high" == $DvtSparkChartEventManager$$ ? $dvt$$2$$[1] : $dvt$$2$$[0] : $dvt$$2$$;
  };
  $DvtChartStyleUtils$$.$isOverviewRendered$ = function $$DvtChartStyleUtils$$$$isOverviewRendered$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTypeUtils$$.$isOverviewSupported$($dvt$$2$$) && "off" != $DvtSparkChartEventManager$$.overview.rendered;
  };
  $DvtChartStyleUtils$$.$getOverviewHeight$ = function $$DvtChartStyleUtils$$$$getOverviewHeight$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().overview.height;
    null == $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$ = $DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$) ? .25 : .2);
    return $DvtChartStyleUtils$$.$getSizeInPixels$($DvtSparkChartEventManager$$, $dvt$$2$$.getHeight());
  };
  $DvtChartStyleUtils$$.$getSizeInPixels$ = function $$DvtChartStyleUtils$$$$getSizeInPixels$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ("string" == typeof $dvt$$2$$) {
      if ("%" == $dvt$$2$$.slice(-1)) {
        return $DvtSparkChartEventManager$$ * Number($dvt$$2$$.slice(0, -1)) / 100;
      }
      if ("px" == $dvt$$2$$.slice(-2)) {
        return Number($dvt$$2$$.slice(0, -2));
      }
      $dvt$$2$$ = Number($dvt$$2$$);
    }
    return "number" == typeof $dvt$$2$$ ? 1 >= $dvt$$2$$ ? $DvtSparkChartEventManager$$ * $dvt$$2$$ : $dvt$$2$$ : 0;
  };
  $DvtChartStyleUtils$$.$getBackgroundColor$ = function $$DvtChartStyleUtils$$$$getBackgroundColor$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$();
    return $DvtSparkChartDefaults$$.plotArea.backgroundColor ? $DvtSparkChartDefaults$$.plotArea.backgroundColor : $DvtSparkChartEventManager$$ ? "#FFFFFF" : null;
  };
  $DvtChartStyleUtils$$.$getHoverBehaviorDelay$ = function $$DvtChartStyleUtils$$$$getHoverBehaviorDelay$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.hoverBehaviorDelay;
    return $DvtSparkChartDefaults$$ ? ($DvtSparkChartDefaults$$ = $dvt$$2$$.$StyleUtils$.$getTimeMilliseconds$($DvtSparkChartDefaults$$), $DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isLine$($DvtSparkChartEventManager$$) ? .75 * $DvtSparkChartDefaults$$ : 1.25 * $DvtSparkChartDefaults$$) : 0;
  };
  $DvtChartStyleUtils$$.$optimizeMarkerStroke$ = function $$DvtChartStyleUtils$$$$optimizeMarkerStroke$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) || $DvtChartTypeUtils$$.$isBoxPlot$($dvt$$2$$);
  };
  $DvtChartStyleUtils$$.$getGroupWidth$ = function $$DvtChartStyleUtils$$$$getGroupWidth$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_cache$.$getFromCache$("groupWidth");
    null == $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$ = $dvt$$2$$.$xAxis$.$getInfo$().$getGroupWidth$(), $dvt$$2$$.$_cache$.$putToCache$("groupWidth", $DvtSparkChartEventManager$$));
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartStyleUtils$$.$isStackLabelRendered$ = function $$DvtChartStyleUtils$$$$isStackLabelRendered$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTypeUtils$$.$isStacked$($dvt$$2$$) && "on" == $DvtSparkChartEventManager$$.stackLabel ? !0 : !1;
  };
  $DvtChartStyleUtils$$.$optimizeMarkerFill$ = function $$DvtChartStyleUtils$$$$optimizeMarkerFill$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isLineArea$($dvt$$2$$);
  };
  $DvtChartStyleUtils$$.$getClassName$ = function $$DvtChartStyleUtils$$$$getClassName$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.className ? $DvtSparkChartDefaults$$.className : ($dvt$$2$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $dvt$$2$$.className ? $dvt$$2$$.className : null;
  };
  $DvtChartStyleUtils$$.$getAreaClassName$ = function $$DvtChartStyleUtils$$$$getAreaClassName$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.areaClassName ? $DvtSparkChartDefaults$$.areaClassName : $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.className ? $DvtSparkChartDefaults$$.className : null;
  };
  $DvtChartStyleUtils$$.$getMarkerClassName$ = function $$DvtChartStyleUtils$$$$getMarkerClassName$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getNestedDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) && $DvtSparkChartAutomation$$.className ? $DvtSparkChartAutomation$$.className : ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.className ? $DvtSparkChartDefaults$$.className : ($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, 
    $DvtSparkChartEventManager$$)) && $DvtSparkChartEventManager$$.markerClassName ? $DvtSparkChartEventManager$$.markerClassName : $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) && $DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$.className ? $DvtSparkChartEventManager$$.className : null;
  };
  $DvtChartStyleUtils$$.$getStyle$ = function $$DvtChartStyleUtils$$$$getStyle$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.style ? $DvtSparkChartDefaults$$.style : ($dvt$$2$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $dvt$$2$$.style ? $dvt$$2$$.style : null;
  };
  $DvtChartStyleUtils$$.$getAreaStyle$ = function $$DvtChartStyleUtils$$$$getAreaStyle$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.areaStyle ? $DvtSparkChartDefaults$$.areaStyle : $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.style ? $DvtSparkChartDefaults$$.style : null;
  };
  $DvtChartStyleUtils$$.$getMarkerStyle$ = function $$DvtChartStyleUtils$$$$getMarkerStyle$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getNestedDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) && $DvtSparkChartAutomation$$.style ? $DvtSparkChartAutomation$$.style : ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.style ? $DvtSparkChartDefaults$$.style : ($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, 
    $DvtSparkChartEventManager$$)) && $DvtSparkChartEventManager$$.markerStyle ? $DvtSparkChartEventManager$$.markerStyle : $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) && $DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$.style ? $DvtSparkChartEventManager$$.style : null;
  };
  $DvtChartStyleUtils$$.$getBoxPlotStyleOptions$ = function $$DvtChartStyleUtils$$$$getBoxPlotStyleOptions$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartRefObjUtils$$ = $DvtChartRefObjUtils$$ && $DvtChartRefObjUtils$$.boxPlot ? $DvtChartRefObjUtils$$.boxPlot : {}, $DvtChartAxisUtils$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartAxisUtils$$ = $DvtChartAxisUtils$$ && $DvtChartAxisUtils$$.boxPlot ? $DvtChartAxisUtils$$.boxPlot : {}, 
    $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.boxPlot, $DvtChartRefObjUtils$$ = $dvt$$2$$.$JsonUtils$.$merge$($DvtChartRefObjUtils$$, $dvt$$2$$.$JsonUtils$.$merge$($DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$)), $DvtChartAxisUtils$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtChartRefObjUtils$$._color = $DvtChartAxisUtils$$;
    $DvtChartPieLabelUtils$$ = $dvt$$2$$.$ColorUtils$.$getBrighter$($DvtChartAxisUtils$$, .8);
    $DvtChartRefObjUtils$$.q2Color || ($DvtChartRefObjUtils$$.q2Color = $DvtChartPieLabelUtils$$);
    $DvtChartRefObjUtils$$.q3Color || ($DvtChartRefObjUtils$$.q3Color = $DvtChartPieLabelUtils$$);
    "pattern" == $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$) && ($DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartRefObjUtils$$._q2Pattern = $DvtChartPieLabelUtils$$, $DvtChartRefObjUtils$$._q3Pattern = $DvtChartPieLabelUtils$$);
    $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtChartRefObjUtils$$.borderColor = $DvtChartPieLabelUtils$$ ? $DvtChartPieLabelUtils$$ : $DvtChartAxisUtils$$;
    $DvtChartRefObjUtils$$.borderWidth = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartAxisUtils$$, .1);
    $DvtChartRefObjUtils$$.whiskerStyle.stroke || $DvtChartRefObjUtils$$.whiskerClassName || ($DvtChartRefObjUtils$$.whiskerStyle.stroke = $DvtSparkChartEventManager$$);
    $DvtChartRefObjUtils$$.whiskerEndStyle.stroke || $DvtChartRefObjUtils$$.whiskerEndClassName || ($DvtChartRefObjUtils$$.whiskerEndStyle.stroke = $DvtSparkChartEventManager$$);
    $DvtChartRefObjUtils$$.medianStyle.stroke || $DvtChartRefObjUtils$$.medianClassName || ($DvtChartRefObjUtils$$.medianStyle.stroke = $DvtSparkChartEventManager$$);
    return $DvtChartRefObjUtils$$;
  };
  var $DvtChartTextUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartTextUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartTextUtils$$.$createText$ = function $$DvtChartTextUtils$$$$createText$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$) {
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$OutputText$($DvtSparkChartDefaults$$.$getCtx$(), $DvtSparkChartAutomation$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$);
    $DvtSparkChartAutomation$$.$setCSSStyle$($DvtChartRefObjUtils$$);
    return $dvt$$2$$.$TextUtils$.$fitText$($DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$, $DvtSparkChartDefaults$$) ? ($DvtSparkChartEventManager$$.$associate$($DvtSparkChartAutomation$$, new $dvt$$2$$.$SimpleObjPeer$($DvtSparkChartAutomation$$.$getUntruncatedTextString$())), $DvtSparkChartAutomation$$) : null;
  };
  $DvtChartTextUtils$$.$areTitlesRendered$ = function $$DvtChartTextUtils$$$$areTitlesRendered$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getOptions$();
    return $dvt$$2$$.title.text || $dvt$$2$$.subtitle.text || $dvt$$2$$.footnote.text;
  };
  var $DvtChartTooltipUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartTooltipUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartTooltipUtils$$.$getDatatipColor$ = function $$DvtChartTooltipUtils$$$$getDatatipColor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? $DvtChartStyleUtils$$.$getColor$($dvt$$2$$, 0, $DvtSparkChartDefaults$$) : null != $DvtSparkChartAutomation$$ && 0 <= $DvtSparkChartAutomation$$ ? $DvtChartStyleUtils$$.$getMarkerColor$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) : $DvtChartStyleUtils$$.$getColor$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartTooltipUtils$$.$getDatatip$ = function $$DvtChartTooltipUtils$$$$getDatatip$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    if ($DvtChartTypeUtils$$.$isSpark$($dvt$$2$$) || $DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) || 0 > $DvtSparkChartEventManager$$ || 0 > $DvtSparkChartDefaults$$) {
      return null;
    }
    var $DvtChartAxisUtils$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getOptions$().tooltip, $DvtChartPieLabelUtils$$ = $DvtChartPieLabelUtils$$ ? $DvtChartPieLabelUtils$$.renderer : null;
    if ($DvtChartRefObjUtils$$ && $DvtChartPieLabelUtils$$) {
      return $DvtChartRefObjUtils$$ = $dvt$$2$$.$getCtx$().$getTooltipManager$($DvtChartTooltipUtils$$.$isDataCursorEnabled$($dvt$$2$$) ? $DvtChartDataCursor$$.$TOOLTIP_ID$ : null), $DvtChartAxisUtils$$ = $DvtChartDataUtils$$.$getDataContext$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartTypeUtils$$.$isPie$($dvt$$2$$) ? ($dvt$$2$$ = $DvtChartPieUtils$$.$getSliceBySeriesIndex$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartAxisUtils$$.label = 
      $dvt$$2$$.$_sliceLabelString$) : $DvtChartAxisUtils$$.label = $DvtChartDataUtils$$.$getDataLabel$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartRefObjUtils$$.$getCustomTooltip$($DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$);
    }
    if ($DvtChartAxisUtils$$ && null != $DvtChartAxisUtils$$.shortDesc) {
      return $DvtChartAxisUtils$$.shortDesc;
    }
    $DvtChartPieLabelUtils$$ = "";
    $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? $DvtChartPieLabelUtils$$ += $DvtChartTooltipUtils$$.$getStockDatatip$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$) : ($DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$_addSeriesDatatip$($DvtChartPieLabelUtils$$, $dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$), $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$_addGroupDatatip$($DvtChartPieLabelUtils$$, $dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 
    $DvtChartRefObjUtils$$), $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$_addValueDatatip$($DvtChartPieLabelUtils$$, $dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$));
    return $DvtChartTooltipUtils$$.$_processDatatip$($DvtChartPieLabelUtils$$, $dvt$$2$$, $DvtChartRefObjUtils$$);
  };
  $DvtChartTooltipUtils$$.$getOtherSliceDatatip$ = function $$DvtChartTooltipUtils$$$$getOtherSliceDatatip$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_OTHER", null), $DvtChartAxisUtils$$ = $DvtSparkChartEventManager$$.$getOptions$().tooltip, $DvtChartAxisUtils$$ = $DvtChartAxisUtils$$ ? $DvtChartAxisUtils$$.renderer : null;
    if ($DvtSparkChartAutomation$$ && $DvtChartAxisUtils$$) {
      return $DvtSparkChartDefaults$$ = $DvtChartPieUtils$$.$getSliceBySeriesIndex$($DvtSparkChartEventManager$$, null), $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataContext$($DvtSparkChartEventManager$$, null, 0), $DvtSparkChartAutomation$$.label = $DvtSparkChartDefaults$$.$_sliceLabelString$, $DvtSparkChartEventManager$$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($DvtChartAxisUtils$$, $DvtSparkChartAutomation$$);
    }
    $DvtChartAxisUtils$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$("", $DvtSparkChartEventManager$$, "series", "SERIES", $DvtChartRefObjUtils$$, $DvtSparkChartAutomation$$);
    $DvtChartAxisUtils$$ = $DvtChartTooltipUtils$$.$_addGroupDatatip$($DvtChartAxisUtils$$, $DvtSparkChartEventManager$$, 0, 0, $DvtSparkChartAutomation$$);
    $DvtChartAxisUtils$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtChartAxisUtils$$, $DvtSparkChartEventManager$$, "value", "VALUE", $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    return $DvtChartTooltipUtils$$.$_processDatatip$($DvtChartAxisUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
  };
  $DvtChartTooltipUtils$$.$_processDatatip$ = function $$DvtChartTooltipUtils$$$$_processDatatip$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return "" == $DvtSparkChartEventManager$$ ? null : $DvtSparkChartAutomation$$ ? $dvt$$2$$.$HtmlTooltipManager$.$createStartTag$("table", $DvtSparkChartDefaults$$.$getOptions$().styleDefaults._tooltipStyle) + $DvtSparkChartEventManager$$ + "\x3c/table\x3e" : $DvtSparkChartEventManager$$;
  };
  $DvtChartTooltipUtils$$.$getRefObjTooltip$ = function $$DvtChartTooltipUtils$$$$getRefObjTooltip$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartAxisUtils$$ = $dvt$$2$$.$getOptions$().tooltip;
    if (($DvtChartAxisUtils$$ = $DvtChartAxisUtils$$ ? $DvtChartAxisUtils$$.renderer : null) && null != $DvtSparkChartEventManager$$.id) {
      var $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getCtx$().$getTooltipManager$($DvtChartTooltipUtils$$.$isDataCursorEnabled$($dvt$$2$$) ? $DvtChartDataCursor$$.$TOOLTIP_ID$ : null);
      $dvt$$2$$ = {id:$DvtChartRefObjUtils$$.getId($DvtSparkChartEventManager$$), label:$DvtSparkChartEventManager$$.text, data:$dvt$$2$$.$_rawOptions$[$DvtSparkChartDefaults$$].referenceObjects[$DvtSparkChartAutomation$$], value:$DvtSparkChartEventManager$$.value, low:$DvtChartRefObjUtils$$.$getLowValue$($DvtSparkChartEventManager$$), high:$DvtChartRefObjUtils$$.$getHighValue$($DvtSparkChartEventManager$$), color:$DvtChartRefObjUtils$$.$getColor$($DvtSparkChartEventManager$$)};
      return $DvtChartPieLabelUtils$$.$getCustomTooltip$($DvtChartAxisUtils$$, $dvt$$2$$);
    }
    return $DvtSparkChartEventManager$$.shortDesc;
  };
  $DvtChartTooltipUtils$$.$getStockDatatip$ = function $$DvtChartTooltipUtils$$$$getStockDatatip$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, 0, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addGroupDatatip$("", $dvt$$2$$, 0, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$ && ($DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $dvt$$2$$, "open", "OPEN", $DvtSparkChartAutomation$$.open, $DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $dvt$$2$$, "close", "CLOSE", $DvtSparkChartAutomation$$.close, $DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, 
    $dvt$$2$$, "high", "HIGH", $DvtSparkChartAutomation$$.high, $DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $dvt$$2$$, "low", "LOW", $DvtSparkChartAutomation$$.low, $DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $dvt$$2$$, "volume", "VOLUME", $DvtSparkChartAutomation$$.volume, $DvtSparkChartDefaults$$));
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartTooltipUtils$$.$_addSeriesDatatip$ = function $$DvtChartTooltipUtils$$$$_addSeriesDatatip$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "series", "SERIES", $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
  };
  $DvtChartTooltipUtils$$.$_addGroupDatatip$ = function $$DvtChartTooltipUtils$$$$_addGroupDatatip$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieLabelInfo$$;
    $DvtChartAxisUtils$$.$hasTimeAxis$($DvtSparkChartDefaults$$) ? ($DvtChartPieLabelInfo$$ = $DvtChartTooltipUtils$$.$getValueFormat$($DvtSparkChartDefaults$$, "group"), $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$), $DvtChartPieLabelInfo$$ = $DvtChartTooltipUtils$$.$formatDateValue$($DvtChartPieLabelInfo$$, new Date($DvtSparkChartAutomation$$)), null == $DvtChartPieLabelInfo$$ && ($DvtChartPieLabelInfo$$ = 
    $DvtSparkChartDefaults$$.$xAxis$.$getInfo$().$formatLabel$($DvtSparkChartAutomation$$))) : $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getGroupLabel$($DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$);
    $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getNumLevels$($DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$ = "GROUP";
    if (1 != $DvtChartRefObjUtils$$ && $dvt$$2$$.$ArrayUtils$.isArray($DvtChartPieLabelInfo$$)) {
      for (--$DvtChartRefObjUtils$$;0 <= $DvtChartRefObjUtils$$;$DvtChartRefObjUtils$$--) {
        $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "group", $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$[$DvtChartRefObjUtils$$], $DvtChartPieLabelUtils$$, $DvtChartRefObjUtils$$), $DvtChartPieLabelInfo$$[$DvtChartRefObjUtils$$] && ($DvtSparkChartAutomation$$ = null);
      }
    } else {
      $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "group", $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$);
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartTooltipUtils$$.$_addValueDatatip$ = function $$DvtChartTooltipUtils$$$$_addValueDatatip$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    var $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$), $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getZValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartDataChangePyramidSlice$$ = $DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtChartRefObjUtils$$ = null != $DvtChartRefObjUtils$$ && 0 <= $DvtChartRefObjUtils$$;
    $DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartEventManager$$) ? ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "x", "X", $DvtChartPieLabelInfo$$, $DvtChartAxisUtils$$), $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "y", "Y", $DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$), $DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) && ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, 
    $DvtSparkChartEventManager$$, "z", "Z", $DvtChartPieRenderUtils$$, $DvtChartAxisUtils$$))) : $DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isPyramid$($DvtSparkChartEventManager$$) ? $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "value", "VALUE", $DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$) : $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$) ? ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, 
    $DvtSparkChartEventManager$$, "value", "VALUE", $DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$), $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getTargetValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), null != $DvtChartPieRenderUtils$$ && ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "targetValue", "TARGET_VALUE", $DvtChartPieRenderUtils$$, $DvtChartAxisUtils$$))) : "boxPlot" != $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$) || $DvtChartRefObjUtils$$ ? $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$) && ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? "y2" : "y", null == $DvtChartDataChangePyramidSlice$$ && null == $DvtChartSeriesEffectUtils$$ || $DvtChartRefObjUtils$$ ? null == $DvtChartPieRenderUtils$$ || $DvtChartRefObjUtils$$ ? $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$, "VALUE", $DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$) : ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "Y", $DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$), $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "z", "Z", $DvtChartPieRenderUtils$$, $DvtChartAxisUtils$$)) : ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, 
    "high", "HIGH", $DvtChartSeriesEffectUtils$$, $DvtChartAxisUtils$$), $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "low", "LOW", $DvtChartDataChangePyramidSlice$$, $DvtChartAxisUtils$$), null != $DvtChartPieRenderUtils$$ && ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "z", "Z", $DvtChartPieRenderUtils$$, $DvtChartAxisUtils$$)))) : ($DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "high", "HIGH", $DvtChartSeriesEffectUtils$$, $DvtChartAxisUtils$$), $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "q3", "Q3", $DvtChartPieLabelUtils$$.q3, $DvtChartAxisUtils$$), $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "q2", "Q2", $DvtChartPieLabelUtils$$.q2, 
    $DvtChartAxisUtils$$), $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "q1", "Q1", $DvtChartPieLabelUtils$$.q1, $DvtChartAxisUtils$$), $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "low", "LOW", $DvtChartDataChangePyramidSlice$$, $DvtChartAxisUtils$$), null != $DvtChartPieRenderUtils$$ && ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "z", "Z", $DvtChartPieRenderUtils$$, 
    $DvtChartAxisUtils$$)));
    return $dvt$$2$$;
  };
  $DvtChartTooltipUtils$$.$_addDatatipRow$ = function $$DvtChartTooltipUtils$$$$_addDatatipRow$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$) {
    if (null == $DvtChartPieLabelUtils$$ || "" === $DvtChartPieLabelUtils$$) {
      return $DvtSparkChartEventManager$$;
    }
    var $DvtChartDataChangePyramidSlice$$ = $DvtSparkChartDefaults$$.$getOptions$().styleDefaults, $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.$getValueFormat$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartRangeMarker$$ = $DvtChartSeriesEffectUtils$$.tooltipDisplay;
    if (!$DvtChartRangeMarker$$ || "auto" == $DvtChartRangeMarker$$) {
      if ("series" == $DvtSparkChartAutomation$$ && "none" == $DvtChartDataChangePyramidSlice$$.seriesTooltipType || "group" == $DvtSparkChartAutomation$$ && ("none" == $DvtChartDataChangePyramidSlice$$.groupTooltipType || $DvtChartTypeUtils$$.$isPie$($DvtSparkChartDefaults$$) || $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartDefaults$$)) || "series" != $DvtSparkChartAutomation$$ && "group" != $DvtSparkChartAutomation$$ && "label" != $DvtSparkChartAutomation$$ && "none" == $DvtChartDataChangePyramidSlice$$.valueTooltipType) {
        $DvtChartRangeMarker$$ = "off";
      }
    }
    if ("off" == $DvtChartRangeMarker$$) {
      return $DvtSparkChartEventManager$$;
    }
    var $DvtChartStyleUtils$$;
    "string" === typeof $DvtChartSeriesEffectUtils$$.tooltipLabel ? $DvtChartStyleUtils$$ = $DvtChartSeriesEffectUtils$$.tooltipLabel : $dvt$$2$$.$ArrayUtils$.isArray($DvtChartSeriesEffectUtils$$.tooltipLabel) && ($DvtChartStyleUtils$$ = $DvtChartSeriesEffectUtils$$.tooltipLabel[$DvtChartPieRenderUtils$$ ? $DvtChartPieRenderUtils$$ : 0]);
    null == $DvtChartStyleUtils$$ && ($DvtChartStyleUtils$$ = null == $DvtChartRefObjUtils$$ ? "" : "GROUP" == $DvtChartRefObjUtils$$ && $DvtChartAxisUtils$$.$hasTimeAxis$($DvtSparkChartDefaults$$) ? $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$.$getOptions$(), "labelDate", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_GROUP") : $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_" + $DvtChartRefObjUtils$$, ""));
    "series" != $DvtSparkChartAutomation$$ && "group" != $DvtSparkChartAutomation$$ && ($DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$formatValue$($DvtSparkChartDefaults$$.$getCtx$(), $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$));
    if ($DvtChartPieLabelInfo$$) {
      return $DvtSparkChartDefaults$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartDefaults$$.$getCtx$()), $DvtChartDataChangePyramidSlice$$.tooltipLabelStyle.$setStyle$($dvt$$2$$.$CSSStyle$.$TEXT_ALIGN$, $DvtSparkChartDefaults$$ ? "left" : "right"), $DvtChartDataChangePyramidSlice$$.tooltipValueStyle.$setStyle$($dvt$$2$$.$CSSStyle$.$TEXT_ALIGN$, $DvtSparkChartDefaults$$ ? "right" : "left"), $DvtSparkChartEventManager$$ + "\x3ctr\x3e" + $dvt$$2$$.$HtmlTooltipManager$.$createStartTag$("td", $DvtChartDataChangePyramidSlice$$.tooltipLabelStyle) + 
      $DvtChartStyleUtils$$ + "\x3c/td\x3e" + $dvt$$2$$.$HtmlTooltipManager$.$createStartTag$("td", $DvtChartDataChangePyramidSlice$$.tooltipValueStyle) + $DvtChartPieLabelUtils$$ + "\x3c/td\x3e\x3c/tr\x3e";
    }
    0 < $DvtSparkChartEventManager$$.length && ($DvtSparkChartEventManager$$ += "\x3cbr\x3e");
    return $DvtSparkChartEventManager$$ + $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$]);
  };
  $DvtChartTooltipUtils$$.$getValueFormat$ = function $$DvtChartTooltipUtils$$$$getValueFormat$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$().valueFormats;
    if (!$DvtSparkChartDefaults$$) {
      return {};
    }
    for (var $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      if ($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].type == $DvtSparkChartEventManager$$) {
        return $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$];
      }
    }
    return "group" == $DvtSparkChartEventManager$$ && $DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$) ? $DvtChartTooltipUtils$$.$getValueFormat$($dvt$$2$$, "x") : "y" != $DvtSparkChartEventManager$$ && "y2" != $DvtSparkChartEventManager$$ && "min" != $DvtSparkChartEventManager$$ && "max" != $DvtSparkChartEventManager$$ || !$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) ? {} : $DvtChartTooltipUtils$$.$getValueFormat$($dvt$$2$$, "value");
  };
  $DvtChartTooltipUtils$$.$formatValue$ = function $$DvtChartTooltipUtils$$$$formatValue$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieLabelInfo$$ = "auto", $DvtChartPieRenderUtils$$ = "on", $DvtChartDataChangePyramidSlice$$;
    $DvtSparkChartDefaults$$.scaling && ($DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.scaling);
    $DvtSparkChartDefaults$$.autoPrecision && ($DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.autoPrecision);
    $DvtSparkChartDefaults$$.converter && ($DvtChartDataChangePyramidSlice$$ = $DvtSparkChartDefaults$$.converter);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$LinearScaleAxisValueFormatter$($DvtSparkChartEventManager$$, null != $DvtChartRefObjUtils$$ ? $DvtChartRefObjUtils$$ : $DvtSparkChartAutomation$$, null != $DvtChartAxisUtils$$ ? $DvtChartAxisUtils$$ : $DvtSparkChartAutomation$$, null != $DvtChartPieLabelUtils$$ ? $DvtChartPieLabelUtils$$ : 0, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$);
    return $DvtChartDataChangePyramidSlice$$ && ($DvtChartDataChangePyramidSlice$$.getAsString || $DvtChartDataChangePyramidSlice$$.format) ? $DvtSparkChartEventManager$$.format($DvtSparkChartAutomation$$, $DvtChartDataChangePyramidSlice$$) : $DvtSparkChartEventManager$$.format($DvtSparkChartAutomation$$);
  };
  $DvtChartTooltipUtils$$.$formatDateValue$ = function $$DvtChartTooltipUtils$$$$formatDateValue$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.converter;
    return $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$.getAsString ? $DvtSparkChartDefaults$$.getAsString($DvtSparkChartEventManager$$) : $DvtSparkChartDefaults$$.format ? $DvtSparkChartDefaults$$.format($DvtSparkChartEventManager$$) : null : null;
  };
  $DvtChartTooltipUtils$$.$isDataCursorEnabled$ = function $$DvtChartTooltipUtils$$$$isDataCursorEnabled$$($DvtSparkChartEventManager$$) {
    if ($DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isPyramid$($DvtSparkChartEventManager$$)) {
      return !1;
    }
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$();
    return "on" == $DvtSparkChartDefaults$$.dataCursor ? !0 : "off" == $DvtSparkChartDefaults$$.dataCursor ? !1 : $dvt$$2$$.$Agent$.$isTouchDevice$() && $DvtChartTypeUtils$$.$isLineArea$($DvtSparkChartEventManager$$);
  };
  $DvtChartTooltipUtils$$.$getDataCursorBehavior$ = function $$DvtChartTooltipUtils$$$$getDataCursorBehavior$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().dataCursorBehavior;
    return "snap" == $DvtSparkChartEventManager$$ ? $DvtChartDataCursor$$.$BEHAVIOR_SNAP$ : "smooth" == $DvtSparkChartEventManager$$ ? $DvtChartDataCursor$$.$BEHAVIOR_SMOOTH$ : $DvtChartTypeUtils$$.$isLineArea$($dvt$$2$$) ? $DvtChartDataCursor$$.$BEHAVIOR_SMOOTH$ : $DvtChartDataCursor$$.$BEHAVIOR_SNAP$;
  };
  var $DvtChartTypeUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartTypeUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartTypeUtils$$.$_SUPPORTED_TYPES$ = "bar line area lineWithArea combo pie bubble scatter funnel pyramid stock boxPlot".split(" ");
  $DvtChartTypeUtils$$.$isValidType$ = function $$DvtChartTypeUtils$$$$isValidType$$($DvtSparkChartEventManager$$) {
    return 0 <= $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartTypeUtils$$.$_SUPPORTED_TYPES$, $DvtSparkChartEventManager$$.$getType$());
  };
  $DvtChartTypeUtils$$.$isSpark$ = function $$DvtChartTypeUtils$$$$isSpark$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().__spark;
  };
  $DvtChartTypeUtils$$.$isOverview$ = function $$DvtChartTypeUtils$$$$isOverview$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$()._isOverview;
  };
  $DvtChartTypeUtils$$.$isVertical$ = function $$DvtChartTypeUtils$$$$isVertical$$($dvt$$2$$) {
    return !$DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$);
  };
  $DvtChartTypeUtils$$.$isHorizontal$ = function $$DvtChartTypeUtils$$$$isHorizontal$$($dvt$$2$$) {
    return "horizontal" == $dvt$$2$$.$getOptions$().orientation && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isStock$($dvt$$2$$) && ($DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) || $DvtChartTypeUtils$$.$isFunnel$($dvt$$2$$));
  };
  $DvtChartTypeUtils$$.$isPolar$ = function $$DvtChartTypeUtils$$$$isPolar$$($dvt$$2$$) {
    return "polar" == $dvt$$2$$.$getOptions$().coordinateSystem && !$DvtChartTypeUtils$$.$isStock$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isBoxPlot$($dvt$$2$$);
  };
  $DvtChartTypeUtils$$.$isStacked$ = function $$DvtChartTypeUtils$$$$isStacked$$($dvt$$2$$) {
    return "on" != $dvt$$2$$.$getOptions$().stack || $DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$) ? !1 : $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$);
  };
  $DvtChartTypeUtils$$.$isCombo$ = function $$DvtChartTypeUtils$$$$isCombo$$($dvt$$2$$) {
    return "combo" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isBar$ = function $$DvtChartTypeUtils$$$$isBar$$($dvt$$2$$) {
    return "bar" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isLine$ = function $$DvtChartTypeUtils$$$$isLine$$($dvt$$2$$) {
    return "line" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isLineWithArea$ = function $$DvtChartTypeUtils$$$$isLineWithArea$$($dvt$$2$$) {
    return "lineWithArea" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isArea$ = function $$DvtChartTypeUtils$$$$isArea$$($dvt$$2$$) {
    return "area" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isStock$ = function $$DvtChartTypeUtils$$$$isStock$$($dvt$$2$$) {
    return "stock" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isBoxPlot$ = function $$DvtChartTypeUtils$$$$isBoxPlot$$($dvt$$2$$) {
    return "boxPlot" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isScatter$ = function $$DvtChartTypeUtils$$$$isScatter$$($dvt$$2$$) {
    return "scatter" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isBubble$ = function $$DvtChartTypeUtils$$$$isBubble$$($dvt$$2$$) {
    return "bubble" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isPie$ = function $$DvtChartTypeUtils$$$$isPie$$($dvt$$2$$) {
    return "pie" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isFunnel$ = function $$DvtChartTypeUtils$$$$isFunnel$$($dvt$$2$$) {
    return "funnel" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isPyramid$ = function $$DvtChartTypeUtils$$$$isPyramid$$($dvt$$2$$) {
    return "pyramid" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isDualY$ = function $$DvtChartTypeUtils$$$$isDualY$$($dvt$$2$$) {
    return !$DvtChartTypeUtils$$.$hasAxes$($dvt$$2$$) || $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) || $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? !1 : !0;
  };
  $DvtChartTypeUtils$$.$isSplitDualY$ = function $$DvtChartTypeUtils$$$$isSplitDualY$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) && $DvtChartDataUtils$$.$hasVolumeSeries$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) ? !0 : "on" == $dvt$$2$$.$getOptions$().splitDualY && $DvtChartTypeUtils$$.$hasY2Data$($dvt$$2$$) && !$DvtChartTypeUtils$$.$hasY2DataOnly$($dvt$$2$$);
  };
  $DvtChartTypeUtils$$.$isBLAC$ = function $$DvtChartTypeUtils$$$$isBLAC$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getType$();
    return "bar" == $dvt$$2$$ || "line" == $dvt$$2$$ || "area" == $dvt$$2$$ || "lineWithArea" == $dvt$$2$$ || "combo" == $dvt$$2$$ || "stock" == $dvt$$2$$ || "boxPlot" == $dvt$$2$$;
  };
  $DvtChartTypeUtils$$.$isScatterBubble$ = function $$DvtChartTypeUtils$$$$isScatterBubble$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getType$();
    return "scatter" == $dvt$$2$$ || "bubble" == $dvt$$2$$;
  };
  $DvtChartTypeUtils$$.$isLineArea$ = function $$DvtChartTypeUtils$$$$isLineArea$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getType$();
    return "line" == $dvt$$2$$ || "area" == $dvt$$2$$ || "lineWithArea" == $dvt$$2$$;
  };
  $DvtChartTypeUtils$$.$isScrollSupported$ = function $$DvtChartTypeUtils$$$$isScrollSupported$$($dvt$$2$$) {
    return !$DvtChartTypeUtils$$.$isPie$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isFunnel$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isPyramid$($dvt$$2$$);
  };
  $DvtChartTypeUtils$$.$isOverviewSupported$ = function $$DvtChartTypeUtils$$$$isOverviewSupported$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && $DvtChartTypeUtils$$.$isVertical$($dvt$$2$$);
  };
  $DvtChartTypeUtils$$.$isHorizScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isHorizScrollbarSupported$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getZoomDirection$($dvt$$2$$);
    return $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? !1 : $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && $DvtChartTypeUtils$$.$isVertical$($dvt$$2$$) || $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) && "y" != $DvtSparkChartEventManager$$;
  };
  $DvtChartTypeUtils$$.$isVertScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isVertScrollbarSupported$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getZoomDirection$($dvt$$2$$);
    return $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? !1 : $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$) || $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) && "x" != $DvtSparkChartEventManager$$;
  };
  $DvtChartTypeUtils$$.$hasAxes$ = function $$DvtChartTypeUtils$$$$hasAxes$$($dvt$$2$$) {
    return !("pie" == $dvt$$2$$.$getType$() || "funnel" == $dvt$$2$$.$getType$() || "pyramid" == $dvt$$2$$.$getType$());
  };
  $DvtChartTypeUtils$$.$hasY2DataOnly$ = function $$DvtChartTypeUtils$$$$hasY2DataOnly$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isDualY$($dvt$$2$$) ? $DvtChartDataUtils$$.$getY2SeriesCount$($dvt$$2$$) == $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$) : !1;
  };
  $DvtChartTypeUtils$$.$hasY2Data$ = function $$DvtChartTypeUtils$$$$hasY2Data$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isDualY$($dvt$$2$$) ? 0 < $DvtChartDataUtils$$.$getY2SeriesCount$($dvt$$2$$) : !1;
  };
  $DvtChartTypeUtils$$.$hasY2BarData$ = function $$DvtChartTypeUtils$$$$hasY2BarData$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$hasY2Data$($dvt$$2$$);
  };
  $DvtChartTypeUtils$$.$hasBarSeries$ = function $$DvtChartTypeUtils$$$$hasBarSeries$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$_hasSeriesType$($dvt$$2$$, "bar");
  };
  $DvtChartTypeUtils$$.$hasLineSeries$ = function $$DvtChartTypeUtils$$$$hasLineSeries$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$_hasSeriesType$($dvt$$2$$, "line");
  };
  $DvtChartTypeUtils$$.$hasAreaSeries$ = function $$DvtChartTypeUtils$$$$hasAreaSeries$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$_hasSeriesType$($dvt$$2$$, "area");
  };
  $DvtChartTypeUtils$$.$hasLineWithAreaSeries$ = function $$DvtChartTypeUtils$$$$hasLineWithAreaSeries$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$_hasSeriesType$($dvt$$2$$, "lineWithArea");
  };
  $DvtChartTypeUtils$$.$hasCandlestickSeries$ = function $$DvtChartTypeUtils$$$$hasCandlestickSeries$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$_hasSeriesType$($dvt$$2$$, "candlestick");
  };
  $DvtChartTypeUtils$$.$hasBoxPlotSeries$ = function $$DvtChartTypeUtils$$$$hasBoxPlotSeries$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$_hasSeriesType$($dvt$$2$$, "boxPlot");
  };
  $DvtChartTypeUtils$$.$_hasSeriesType$ = function $$DvtChartTypeUtils$$$$_hasSeriesType$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ($DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$)) {
      for (var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$;$DvtSparkChartAutomation$$++) {
        if ($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartAutomation$$) && $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartAutomation$$) == $DvtSparkChartEventManager$$) {
          return !0;
        }
      }
    }
    return !1;
  };
  $DvtChartTypeUtils$$.$hasCenteredSeries$ = function $$DvtChartTypeUtils$$$$hasCenteredSeries$$($dvt$$2$$) {
    if (!$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$)) {
      return !1;
    }
    for (var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$;$DvtSparkChartDefaults$$++) {
      if ($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartDefaults$$) && "bar" != $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartDefaults$$)) {
        var $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getLineType$($dvt$$2$$, $DvtSparkChartDefaults$$);
        if ("centeredSegmented" == $DvtSparkChartAutomation$$ || "centeredStepped" == $DvtSparkChartAutomation$$) {
          return !0;
        }
      }
    }
    return !1;
  };
  $DvtChartTypeUtils$$.$hasUncenteredSeries$ = function $$DvtChartTypeUtils$$$$hasUncenteredSeries$$($dvt$$2$$) {
    if (!$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$)) {
      return !1;
    }
    for (var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$;$DvtSparkChartDefaults$$++) {
      if ($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartDefaults$$) && "bar" != $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartDefaults$$)) {
        var $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getLineType$($dvt$$2$$, $DvtSparkChartDefaults$$);
        if ("segmented" == $DvtSparkChartAutomation$$ || "stepped" == $DvtSparkChartAutomation$$) {
          return !0;
        }
      }
    }
    return !1;
  };
  $DvtChartTypeUtils$$.$isStandalonePlotArea$ = function $$DvtChartTypeUtils$$$$isStandalonePlotArea$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTextUtils$$.$areTitlesRendered$($dvt$$2$$) || "off" != $DvtSparkChartEventManager$$.legend.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "x") || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y") || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y2") ? !1 : !0;
  };
  $DvtChartTypeUtils$$.$isStandaloneXAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneXAxis$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTextUtils$$.$areTitlesRendered$($dvt$$2$$) || "off" != $DvtSparkChartEventManager$$.legend.rendered || "off" != $DvtSparkChartEventManager$$.plotArea.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y") || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y2") ? !1 : !0;
  };
  $DvtChartTypeUtils$$.$isStandaloneYAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneYAxis$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTextUtils$$.$areTitlesRendered$($dvt$$2$$) || "off" != $DvtSparkChartEventManager$$.legend.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "x") || "off" != $DvtSparkChartEventManager$$.plotArea.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y2") ? !1 : !0;
  };
  $DvtChartTypeUtils$$.$isStandaloneY2Axis$ = function $$DvtChartTypeUtils$$$$isStandaloneY2Axis$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTextUtils$$.$areTitlesRendered$($dvt$$2$$) || "off" != $DvtSparkChartEventManager$$.legend.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "x") || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y") || "off" != $DvtSparkChartEventManager$$.plotArea.rendered ? !1 : !0;
  };
  var $DvtChartMarkerUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartMarkerUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartMarkerUtils$$.$_MIN_BUBBLE_SIZE$ = 6;
  $DvtChartMarkerUtils$$.$_MAX_BUBBLE_SIZE_RATIO$ = .5;
  $DvtChartMarkerUtils$$.$calcBubbleSizes$ = function $$DvtChartMarkerUtils$$$$calcBubbleSizes$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for (var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getMinMaxValue$($DvtSparkChartEventManager$$, "z"), $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.min, $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.max, $DvtChartPieLabelInfo$$ = $DvtChartMarkerUtils$$.$_MIN_BUBBLE_SIZE$, $DvtSparkChartAutomation$$ = $DvtChartMarkerUtils$$.$_MAX_BUBBLE_SIZE_RATIO$ * Math.min($DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$), $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$), 
    $DvtChartDataChangePyramidSlice$$ = "withoutRescale" == $DvtChartEventUtils$$.$getHideAndShowBehavior$($DvtSparkChartEventManager$$), $DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtChartPieRenderUtils$$;$DvtChartSeriesEffectUtils$$++) {
      if ($DvtChartDataChangePyramidSlice$$ || $DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$)) {
        for (var $DvtChartRangeMarker$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$), $DvtChartPolarBar$$ = $DvtChartRangeMarker$$.items ? $DvtChartRangeMarker$$.items.length : 0, $DvtChartFunnelSlice$$ = 0;$DvtChartFunnelSlice$$ < $DvtChartPolarBar$$;$DvtChartFunnelSlice$$++) {
          var $DvtChartDataCursor$$ = $DvtChartRangeMarker$$.items[$DvtChartFunnelSlice$$];
          $DvtChartDataCursor$$ && ($DvtChartDataCursor$$.markerSize = $dvt$$2$$.$LayoutUtils$.$getBubbleSize$($DvtChartDataCursor$$.z, $DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtSparkChartAutomation$$));
        }
      }
    }
    $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$) ? ($DvtChartPieLabelUtils$$ = Infinity, $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$getRadius$()) : ($DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.$w$ - 2.4 * $DvtChartAxisUtils$$.$getTickLabelHeight$($DvtSparkChartEventManager$$, "y"), $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$.$h$ - 1.6 * $DvtChartAxisUtils$$.$getTickLabelHeight$($DvtSparkChartEventManager$$, "x"));
    $DvtChartPieLabelUtils$$ -= .5 * $DvtSparkChartAutomation$$;
    $DvtChartRefObjUtils$$ -= .5 * $DvtSparkChartAutomation$$;
    $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_cache$;
    $DvtChartPieLabelInfo$$ = $DvtChartMarkerUtils$$.$_getAxisValueRange$($DvtSparkChartEventManager$$, "x");
    $DvtSparkChartAutomation$$.$putToCache$("_xAxisBubbleRatio", $DvtChartPieLabelInfo$$ / $DvtChartPieLabelUtils$$);
    $DvtChartPieLabelUtils$$ = $DvtChartMarkerUtils$$.$_getAxisValueRange$($DvtSparkChartEventManager$$, "y");
    $DvtSparkChartAutomation$$.$putToCache$("_yAxisBubbleRatio", $DvtChartPieLabelUtils$$ / $DvtChartRefObjUtils$$);
  };
  $DvtChartMarkerUtils$$.$getBubbleAxisRadius$ = function $$DvtChartMarkerUtils$$$$getBubbleAxisRadius$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$ / 2 * $dvt$$2$$.$_cache$.$getFromCache$("x" == $DvtSparkChartEventManager$$ ? "_xAxisBubbleRatio" : "_yAxisBubbleRatio") : 0;
  };
  $DvtChartMarkerUtils$$.$_getAxisValueRange$ = function $$DvtChartMarkerUtils$$$$_getAxisValueRange$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getOptions$()[$DvtSparkChartDefaults$$ + "Axis"], $DvtChartRefObjUtils$$ = $DvtChartAxisUtils$$.$isLog$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ = !$DvtChartRefObjUtils$$ && "zero" == $DvtChartAxisUtils$$.$getBaselineScaling$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getMinMaxValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 
    !0), $DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$.min;
    null == $DvtChartPieRenderUtils$$ && ($DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$ ? Math.min(0, $DvtChartPieLabelInfo$$.min) : $DvtChartPieLabelInfo$$.min);
    $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$.max;
    null == $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$ ? Math.max(0, $DvtChartPieLabelInfo$$.max) : $DvtChartPieLabelInfo$$.max);
    return $DvtChartRefObjUtils$$ && 0 < $DvtSparkChartAutomation$$ && 0 < $DvtChartPieRenderUtils$$ ? $DvtSparkChartAutomation$$ == $DvtChartPieRenderUtils$$ ? 6 : $dvt$$2$$.Math.log10($DvtSparkChartAutomation$$ / $DvtChartPieRenderUtils$$) : $DvtSparkChartAutomation$$ == $DvtChartPieRenderUtils$$ ? 60 : $DvtSparkChartAutomation$$ - $DvtChartPieRenderUtils$$;
  };
  $DvtChartMarkerUtils$$.$sortMarkers$ = function $$DvtChartMarkerUtils$$$$sortMarkers$$($dvt$$2$$) {
    $dvt$$2$$.sort($DvtChartMarkerUtils$$.$_compareSize$);
  };
  $DvtChartMarkerUtils$$.$sortMarkerInfos$ = function $$DvtChartMarkerUtils$$$$sortMarkerInfos$$($dvt$$2$$) {
    $dvt$$2$$.sort($DvtChartMarkerUtils$$.$_compareInfoSize$);
  };
  $DvtChartMarkerUtils$$.$_compareSize$ = function $$DvtChartMarkerUtils$$$$_compareSize$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.$getSize$() - $dvt$$2$$.$getSize$();
  };
  $DvtChartMarkerUtils$$.$_compareInfoSize$ = function $$DvtChartMarkerUtils$$$$_compareInfoSize$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.size - $dvt$$2$$.size;
  };
  $DvtChartMarkerUtils$$.$checkPixelMap$ = function $$DvtChartMarkerUtils$$$$checkPixelMap$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartAutomation$$ /= 2;
    return $dvt$$2$$.$isObscured$(Math.max(Math.floor($DvtSparkChartEventManager$$ - $DvtSparkChartAutomation$$), 0), Math.max(Math.floor($DvtSparkChartDefaults$$ - $DvtSparkChartAutomation$$), 0), Math.max(Math.ceil($DvtSparkChartEventManager$$ + $DvtSparkChartAutomation$$), 0), Math.max(Math.ceil($DvtSparkChartDefaults$$ + $DvtSparkChartAutomation$$), 0));
  };
  $DvtChartMarkerUtils$$.$updatePixelMap$ = function $$DvtChartMarkerUtils$$$$updatePixelMap$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    $DvtSparkChartAutomation$$ *= .4;
    $dvt$$2$$.$obscure$(Math.max(Math.round($DvtSparkChartEventManager$$ - $DvtSparkChartAutomation$$), 0), Math.max(Math.round($DvtSparkChartDefaults$$ - $DvtSparkChartAutomation$$), 0), Math.max(Math.round($DvtSparkChartEventManager$$ + $DvtSparkChartAutomation$$), 0), Math.max(Math.round($DvtSparkChartDefaults$$ + $DvtSparkChartAutomation$$), 0), $DvtChartRefObjUtils$$);
  };
  var $DvtChartPieUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPieUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$ = "_dvtOther";
  $DvtChartPieUtils$$.$getSliceId$ = function $$DvtChartPieUtils$$$$getSliceId$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, 0), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$.id : null, $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, 0);
    return new $DvtChartDataItem$$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
  };
  $DvtChartPieUtils$$.$getOtherSliceId$ = function $$DvtChartPieUtils$$$$getOtherSliceId$$($dvt$$2$$) {
    $dvt$$2$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, 0);
    return new $DvtChartDataItem$$(null, $DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$, $dvt$$2$$);
  };
  $DvtChartPieUtils$$.$getRenderedSeriesIndices$ = function $$DvtChartPieUtils$$$$getRenderedSeriesIndices$$($dvt$$2$$) {
    return $DvtChartPieUtils$$.$_getSeriesIndicesArrays$($dvt$$2$$).$rendered$;
  };
  $DvtChartPieUtils$$.$hasOtherSeries$ = function $$DvtChartPieUtils$$$$hasOtherSeries$$($dvt$$2$$) {
    return 0 < $DvtChartPieUtils$$.$_getSeriesIndicesArrays$($dvt$$2$$).$other$.length;
  };
  $DvtChartPieUtils$$.$getOtherValue$ = function $$DvtChartPieUtils$$$$getOtherValue$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = $DvtChartPieUtils$$.$_getSeriesIndicesArrays$($dvt$$2$$).$other$, $DvtSparkChartDefaults$$ = 0, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$];
      $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartRefObjUtils$$) && ($DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartRefObjUtils$$, 0), 0 < $DvtChartRefObjUtils$$ && ($DvtSparkChartDefaults$$ += $DvtChartRefObjUtils$$));
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartPieUtils$$.$getOtherSliceIds$ = function $$DvtChartPieUtils$$$$getOtherSliceIds$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = $DvtChartPieUtils$$.$_getSeriesIndicesArrays$($dvt$$2$$).$other$, $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      $DvtSparkChartDefaults$$.push($DvtChartPieUtils$$.$getSliceId$($dvt$$2$$, $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$]));
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartPieUtils$$.$isOtherSliceSelected$ = function $$DvtChartPieUtils$$$$isOtherSliceSelected$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = $DvtChartPieUtils$$.$getOtherSliceIds$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      for (var $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$], $DvtChartAxisUtils$$ = !1, $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartPieLabelUtils$$++) {
        if ($DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$].id && $DvtChartRefObjUtils$$.getId() === $DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$].id || $DvtChartRefObjUtils$$.$getSeries$() === $DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$].series && $DvtChartRefObjUtils$$.$getGroup$() === $DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$].group) {
          $DvtChartAxisUtils$$ = !0;
          break;
        }
      }
      if (!$DvtChartAxisUtils$$) {
        return !1;
      }
    }
    return !0;
  };
  $DvtChartPieUtils$$.$_getSeriesIndicesArrays$ = function $$DvtChartPieUtils$$$$_getSeriesIndicesArrays$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartRefObjUtils$$ = $dvt$$2$$.$getOptions$(), $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$.otherThreshold * $DvtChartPieUtils$$.$getTotalValue$($dvt$$2$$), $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartAutomation$$;$DvtChartPieLabelUtils$$++) {
      var $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartPieLabelUtils$$, 0);
      0 < $DvtChartAxisUtils$$ && $DvtChartPieLabelInfo$$ < $DvtChartAxisUtils$$ ? $DvtSparkChartDefaults$$.push($DvtChartPieLabelUtils$$) : $DvtSparkChartEventManager$$.push($DvtChartPieLabelUtils$$);
    }
    "ascending" == $DvtChartRefObjUtils$$.sorting ? $DvtSparkChartEventManager$$.sort(function($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
      return $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, 0) - $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartDefaults$$, 0);
    }) : "on" != $DvtChartRefObjUtils$$.sorting && "descending" != $DvtChartRefObjUtils$$.sorting || $DvtSparkChartEventManager$$.sort(function($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
      return $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartDefaults$$, 0) - $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, 0);
    });
    return {$rendered$:$DvtSparkChartEventManager$$, $other$:$DvtSparkChartDefaults$$};
  };
  $DvtChartPieUtils$$.$getTotalValue$ = function $$DvtChartPieUtils$$$$getTotalValue$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$;$DvtSparkChartAutomation$$++) {
      var $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartAutomation$$, 0);
      0 < $DvtChartRefObjUtils$$ && ($DvtSparkChartDefaults$$ += $DvtChartRefObjUtils$$);
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartPieUtils$$.$getSliceExplode$ = function $$DvtChartPieUtils$$$$getSliceExplode$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.pieSliceExplode ? $DvtSparkChartDefaults$$.pieSliceExplode : 0;
  };
  $DvtChartPieUtils$$.$getOtherSliceShowPopupBehaviors$ = function $$DvtChartPieUtils$$$$getOtherSliceShowPopupBehaviors$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartPieUtils$$.$getOtherSliceIds$($dvt$$2$$);
    if ($DvtSparkChartEventManager$$ && 1 <= $DvtSparkChartEventManager$$.length) {
      return $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesIndex$($dvt$$2$$, $DvtSparkChartEventManager$$[0].$getSeries$()), $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, 0)._id, $dvt$$2$$.$getShowPopupBehaviors$($DvtSparkChartEventManager$$);
    }
  };
  $DvtChartPieUtils$$.$getSliceBySeriesIndex$ = function $$DvtChartPieUtils$$$$getSliceBySeriesIndex$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = $dvt$$2$$.$pieChart$.$_slices$, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      if ($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$getSeriesIndex$() == $DvtSparkChartEventManager$$) {
        return $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$];
      }
    }
    return null;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPieRenderUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartPieRenderUtils$$.$TWOD$ = "2D";
  $DvtChartPieRenderUtils$$.$THREED$ = "3D";
  $DvtChartPieRenderUtils$$.$CRUST$ = "CRUST";
  $DvtChartPieRenderUtils$$.$SIDE$ = "SIDE";
  $DvtChartPieRenderUtils$$.$BORDER$ = "BORDER";
  $DvtChartPieRenderUtils$$.$SURFACE_CRUST$ = 0;
  $DvtChartPieRenderUtils$$.$SURFACE_LEFT$ = 1;
  $DvtChartPieRenderUtils$$.$SURFACE_RIGHT$ = 2;
  $DvtChartPieRenderUtils$$.$SURFACE_TOP$ = 3;
  $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$ = function $$DvtChartPieRenderUtils$$$$reflectAngleOverYAxis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    $DvtSparkChartEventManager$$ = $dvt$$2$$.Math.$degreesToRads$(360 - $DvtSparkChartEventManager$$);
    return {x:$DvtSparkChartDefaults$$ + Math.cos($DvtSparkChartEventManager$$) * $DvtChartRefObjUtils$$, y:$DvtSparkChartAutomation$$ + Math.sin($DvtSparkChartEventManager$$) * $DvtChartAxisUtils$$};
  };
  $DvtChartPieRenderUtils$$.$getGradientColors$ = function $$DvtChartPieRenderUtils$$$$getGradientColors$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if ($DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$ != $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$) {
      if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$TWOD$ || $DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$THREED$) {
        return [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, -.04, -.05), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, -.09, .04)];
      }
      if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$CRUST$) {
        return [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, -.04, -.05), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, 0, -.14)];
      }
      if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SIDE$) {
        return [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, -.1, .06), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, -.04, -.05)];
      }
    } else {
      if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$TWOD$) {
        return $DvtSparkChartDefaults$$ = [], $DvtSparkChartDefaults$$[0] = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getBrighter$($DvtSparkChartEventManager$$, .1)), $DvtSparkChartDefaults$$[1] = $DvtSparkChartDefaults$$[0], $DvtSparkChartDefaults$$[2] = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getDarker$($DvtSparkChartEventManager$$, .1)), $DvtSparkChartDefaults$$;
      }
      if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$BORDER$) {
        return ["#FFFFFF", "#000000", "#000000"];
      }
      $DvtSparkChartAutomation$$ = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getDarker$($DvtSparkChartEventManager$$, .12));
      var $DvtChartRefObjUtils$$ = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getBrighter$($DvtSparkChartEventManager$$, .05)), $DvtChartAxisUtils$$ = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getBrighter$($DvtSparkChartEventManager$$, .15));
      $DvtSparkChartEventManager$$ = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getBrighter$($DvtSparkChartEventManager$$, .35));
      if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$CRUST$) {
        return [$DvtSparkChartAutomation$$, $DvtChartAxisUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$];
      }
      if ("SIDE" == $DvtSparkChartDefaults$$) {
        return [$DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$];
      }
      if ("3D" == $DvtSparkChartDefaults$$) {
        return [$DvtSparkChartEventManager$$, $DvtChartAxisUtils$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtSparkChartEventManager$$];
      }
    }
  };
  $DvtChartPieRenderUtils$$.$getGradientAlphas$ = function $$DvtChartPieRenderUtils$$$$getGradientAlphas$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = null == $dvt$$2$$ || isNaN($dvt$$2$$) || 0 == $dvt$$2$$ ? 1 : $dvt$$2$$;
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$TWOD$) {
      return [$DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$BORDER$) {
      return [$DvtSparkChartDefaults$$ / 1.59375, $DvtSparkChartDefaults$$ / 5.3125, $DvtSparkChartDefaults$$ / 2.65625];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$THREED$) {
      return [$DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$CRUST$) {
      return [$DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$SIDE$) {
      return [$DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$];
    }
  };
  $DvtChartPieRenderUtils$$.$getGradientRatios$ = function $$DvtChartPieRenderUtils$$$$getGradientRatios$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if ($DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$ != $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$) {
      return [0, 1];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$TWOD$) {
      return [.2, .5, 1];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$BORDER$) {
      return [0, .5, 1];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$THREED$) {
      return [0, .29, .55, .84, 1];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$CRUST$) {
      return [0, .43, .91, 1];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$SIDE$) {
      return [0, 1];
    }
  };
  $DvtChartPieRenderUtils$$.$createTopSurface$ = function $$DvtChartPieRenderUtils$$$$createTopSurface$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_pieChart$, $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.$getCtx$(), $DvtChartAxisUtils$$ = $DvtSparkChartEventManager$$.$getCenter$(), $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getInnerRadius$(), $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$.$is3D$() || $DvtSparkChartEventManager$$.$getSliceGaps$() > Math.sin($dvt$$2$$.Math.$degreesToRads$($DvtSparkChartEventManager$$.$getAngleExtent$())) * $DvtSparkChartEventManager$$.$_radiusX$ + 
    1 ? null : $DvtSparkChartEventManager$$.$getSliceGaps$(), $DvtChartRefObjUtils$$ = new $DvtChartSelectableWedge$$($DvtChartRefObjUtils$$, $DvtChartAxisUtils$$.x, $DvtChartAxisUtils$$.y, $DvtSparkChartEventManager$$.$_radiusX$, $DvtSparkChartEventManager$$.$_radiusY$, $DvtSparkChartEventManager$$.$getAngleStart$(), $DvtSparkChartEventManager$$.$getAngleExtent$(), $DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$), $DvtChartAxisUtils$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($DvtSparkChartAutomation$$.$chart$), 
    $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($DvtSparkChartAutomation$$.$chart$), $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$SolidStroke$($DvtSparkChartEventManager$$.$getStrokeColor$(), null, $DvtSparkChartEventManager$$.$getBorderWidth$()), $DvtChartDataChangePyramidSlice$$ = $DvtSparkChartEventManager$$.$getSeriesIndex$(), $DvtChartSeriesEffectUtils$$ = $DvtChartStyleUtils$$.$getClassName$($DvtSparkChartAutomation$$.$chart$, $DvtChartDataChangePyramidSlice$$, 0), 
    $DvtChartDataChangePyramidSlice$$ = $DvtChartStyleUtils$$.$getStyle$($DvtSparkChartAutomation$$.$chart$, $DvtChartDataChangePyramidSlice$$, 0);
    $DvtChartRefObjUtils$$.$setStyleProperties$($DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$, $DvtSparkChartEventManager$$.$getFillColor$(), $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartDataChangePyramidSlice$$);
    $DvtChartRefObjUtils$$ = [$DvtChartRefObjUtils$$];
    !$DvtSparkChartEventManager$$.$getStrokeColor$() && $DvtSparkChartAutomation$$.$getSkin$() == $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ && $DvtSparkChartAutomation$$.$is3D$() && 0 < $DvtSparkChartEventManager$$.getDepth() && "gradient" == $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartAutomation$$.$chart$) && (180 <= $DvtSparkChartEventManager$$.$getAngleStart$() || 180 <= $DvtSparkChartEventManager$$.$getAngleStart$() + $DvtSparkChartEventManager$$.$getAngleExtent$() || 360 == $DvtSparkChartEventManager$$.$getAngleExtent$()) && 
    ($DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.$_createGradientPieBorder$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtSparkChartAutomation$$.$setTranslate$($DvtSparkChartEventManager$$.$_explodeOffsetX$, $DvtSparkChartEventManager$$.$_explodeOffsetY$), $DvtChartRefObjUtils$$.push($DvtSparkChartAutomation$$));
    $DvtChartPieRenderUtils$$.$associate$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$);
    return $DvtChartRefObjUtils$$;
  };
  $DvtChartPieRenderUtils$$.$associate$ = function $$DvtChartPieRenderUtils$$$$associate$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ($DvtSparkChartEventManager$$) {
      for (var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartDefaults$$++) {
        $dvt$$2$$.$_pieChart$.$chart$.$getEventManager$().$associate$($DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$], $dvt$$2$$);
      }
    }
  };
  $DvtChartPieRenderUtils$$.$_createGradientPieBorder$ = function $$DvtChartPieRenderUtils$$$$_createGradientPieBorder$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.$BORDER$, $DvtChartRefObjUtils$$ = $DvtChartPieRenderUtils$$.$getGradientColors$(null, $DvtSparkChartAutomation$$), $DvtChartAxisUtils$$ = $DvtChartPieRenderUtils$$.$getGradientAlphas$(null, $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.$getGradientRatios$($DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.$getBounds$(), $DvtChartRefObjUtils$$ = new $dvt$$2$$.$LinearGradientStroke$(120, 
    $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$);
    $DvtChartRefObjUtils$$.$setWidth$(1);
    $DvtChartAxisUtils$$ = $DvtSparkChartEventManager$$.$getAngleStart$();
    $DvtSparkChartAutomation$$ = 180 > $DvtChartAxisUtils$$ ? 180 - $DvtChartAxisUtils$$ : 0;
    $DvtChartAxisUtils$$ = 0 < $DvtSparkChartAutomation$$ ? 180 : $DvtChartAxisUtils$$;
    $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getAngleExtent$() - $DvtSparkChartAutomation$$;
    360 < $DvtChartAxisUtils$$ + $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ = 360 - $DvtChartAxisUtils$$);
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$_pieChart$, $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getCenter$(), $DvtChartAxisUtils$$ = new $dvt$$2$$.$Arc$($DvtChartPieLabelUtils$$.$getCtx$(), $DvtChartPieLabelInfo$$.x, $DvtChartPieLabelInfo$$.y, $DvtChartPieLabelUtils$$.$_radiusX$, $DvtChartPieLabelUtils$$.$_radiusY$, $DvtChartAxisUtils$$, $DvtSparkChartAutomation$$, $dvt$$2$$.$Arc$.OPEN);
    $DvtChartAxisUtils$$.$setStroke$($DvtChartRefObjUtils$$);
    return $DvtChartAxisUtils$$;
  };
  $DvtChartPieRenderUtils$$.$createLateralSurface$ = function $$DvtChartPieRenderUtils$$$$createLateralSurface$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if (0 == $DvtSparkChartEventManager$$.$getAngleExtent$()) {
      return [];
    }
    var $DvtChartRefObjUtils$$ = [];
    if (0 < $dvt$$2$$.$ColorUtils$.$getAlpha$($DvtSparkChartEventManager$$.$getFillColor$())) {
      if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_LEFT$ || $DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_RIGHT$) {
        $DvtChartRefObjUtils$$.push($DvtChartPieRenderUtils$$.$_generateLateralShape$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, null, $DvtSparkChartAutomation$$));
      } else {
        if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_CRUST$) {
          for (var $DvtChartAxisUtils$$ = $DvtChartPieRenderUtils$$.$_createCrustPathCommands$($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = $DvtChartAxisUtils$$.length, $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartPieLabelUtils$$;$DvtChartPieLabelInfo$$++) {
            $DvtChartRefObjUtils$$.push($DvtChartPieRenderUtils$$.$_generateLateralShape$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartAxisUtils$$[$DvtChartPieLabelInfo$$], $DvtSparkChartAutomation$$));
          }
        }
      }
    }
    $DvtChartPieRenderUtils$$.$associate$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$);
    return $DvtChartRefObjUtils$$;
  };
  $DvtChartPieRenderUtils$$.$generateLateralGradientFill$ = function $$DvtChartPieRenderUtils$$$$generateLateralGradientFill$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_pieChart$, $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.$getSkin$(), $DvtChartAxisUtils$$ = $DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$CRUST$ ? $DvtSparkChartEventManager$$.getDepth() : 0, $DvtChartPieLabelUtils$$ = $DvtChartRefObjUtils$$ == $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ ? 0 : 270, $DvtChartPieLabelInfo$$ = $DvtChartPieRenderUtils$$.$getGradientColors$($dvt$$2$$.$ColorUtils$.$getRGB$($DvtSparkChartEventManager$$.$getFillColor$()), 
    $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$), $DvtChartDataChangePyramidSlice$$ = $DvtChartPieRenderUtils$$.$getGradientAlphas$($dvt$$2$$.$ColorUtils$.$getAlpha$($DvtSparkChartEventManager$$.$getFillColor$()), $DvtSparkChartDefaults$$), $DvtChartSeriesEffectUtils$$ = $DvtChartPieRenderUtils$$.$getGradientRatios$($DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$), $DvtChartRangeMarker$$ = null;
    $DvtChartRefObjUtils$$ == $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ && ($DvtChartRangeMarker$$ = [Math.floor($DvtSparkChartEventManager$$.$getCenter$().x - $DvtSparkChartAutomation$$.$_radiusX$), Math.floor($DvtSparkChartEventManager$$.$getCenter$().y - $DvtSparkChartAutomation$$.$_radiusY$) + $DvtChartAxisUtils$$, Math.ceil(2 * $DvtSparkChartAutomation$$.$_radiusX$), Math.ceil(2 * $DvtSparkChartAutomation$$.$_radiusY$)]);
    return new $dvt$$2$$.$LinearGradientFill$($DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$);
  };
  $DvtChartPieRenderUtils$$.$_generateLateralShape$ = function $$DvtChartPieRenderUtils$$$$_generateLateralShape$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartAxisUtils$$ = $DvtSparkChartEventManager$$.$_pieChart$.$getCtx$();
    if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_LEFT$ || $DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_RIGHT$) {
      var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getAngleStart$(), $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getAngleExtent$();
      $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getCenter$().x;
      var $DvtChartDataChangePyramidSlice$$ = $DvtSparkChartEventManager$$.$getCenter$().y, $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$_radiusX$, $DvtChartRangeMarker$$ = $DvtSparkChartEventManager$$.$_radiusY$, $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.getDepth();
      $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_LEFT$ ? $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartPieLabelUtils$$ + $DvtChartPieLabelInfo$$, $DvtSparkChartAutomation$$, $DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$) : $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$, $DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$);
      $DvtSparkChartDefaults$$ = $DvtChartPieRenderUtils$$.$_generateInnerPoints$($DvtSparkChartAutomation$$, $DvtChartDataChangePyramidSlice$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtChartStyleUtils$$);
      $DvtSparkChartAutomation$$ = [];
      for ($DvtChartDataChangePyramidSlice$$ = 0;$DvtChartDataChangePyramidSlice$$ < $DvtSparkChartDefaults$$.length;$DvtChartDataChangePyramidSlice$$++) {
        $DvtSparkChartAutomation$$.push($DvtSparkChartDefaults$$[$DvtChartDataChangePyramidSlice$$].x, $DvtSparkChartDefaults$$[$DvtChartDataChangePyramidSlice$$].y);
      }
      $DvtChartAxisUtils$$ = new $dvt$$2$$.$Polygon$($DvtChartAxisUtils$$, $DvtSparkChartAutomation$$);
      $DvtChartAxisUtils$$.$setFill$($DvtChartRefObjUtils$$);
      $DvtSparkChartEventManager$$.$getStrokeColor$() && $DvtChartAxisUtils$$.$setSolidStroke$($DvtSparkChartEventManager$$.$getStrokeColor$());
      return $DvtChartAxisUtils$$;
    }
    return $DvtSparkChartAutomation$$ ? ($DvtChartAxisUtils$$ = new $dvt$$2$$.$Path$($DvtChartAxisUtils$$, null), $DvtChartAxisUtils$$.$setCmds$($DvtSparkChartAutomation$$), $DvtChartAxisUtils$$.$setTranslate$($DvtSparkChartEventManager$$.$_explodeOffsetX$, $DvtSparkChartEventManager$$.$_explodeOffsetY$), $DvtChartAxisUtils$$.$setFill$($DvtChartRefObjUtils$$), $DvtSparkChartEventManager$$.$getStrokeColor$() && $DvtChartAxisUtils$$.$setSolidStroke$($DvtSparkChartEventManager$$.$getStrokeColor$()), 
    $DvtChartAxisUtils$$) : null;
  };
  $DvtChartPieRenderUtils$$.$_createCrustPathCommands$ = function $$DvtChartPieRenderUtils$$$$_createCrustPathCommands$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getAngleStart$(), $DvtSparkChartDefaults$$ = $dvt$$2$$.$getAngleExtent$(), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$ + $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$ = $dvt$$2$$.$getCenter$().x, $DvtChartAxisUtils$$ = $dvt$$2$$.$getCenter$().y, $DvtChartPieLabelUtils$$ = $dvt$$2$$.$_radiusX$, $DvtChartPieLabelInfo$$ = $dvt$$2$$.$_radiusY$;
    $dvt$$2$$ = $dvt$$2$$.getDepth();
    var $DvtChartDataChangePyramidSlice$$ = [];
    180 > $DvtSparkChartEventManager$$ && 360 < $DvtSparkChartAutomation$$ ? ($DvtChartDataChangePyramidSlice$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, $DvtSparkChartEventManager$$, 180 - $DvtSparkChartEventManager$$)), $DvtChartDataChangePyramidSlice$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, 
    $dvt$$2$$, 360, $DvtSparkChartAutomation$$ - 360)), $DvtChartDataChangePyramidSlice$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, 180, 180))) : 360 < $DvtSparkChartAutomation$$ ? ($DvtChartDataChangePyramidSlice$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, $DvtSparkChartEventManager$$, 
    360 - $DvtSparkChartEventManager$$)), $DvtChartDataChangePyramidSlice$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, 360, $DvtSparkChartAutomation$$ - 360))) : 180 > $DvtSparkChartEventManager$$ && 180 < $DvtSparkChartAutomation$$ ? ($DvtChartDataChangePyramidSlice$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, 
    $DvtChartPieLabelInfo$$, $dvt$$2$$, $DvtSparkChartEventManager$$, 180 - $DvtSparkChartEventManager$$)), $DvtChartDataChangePyramidSlice$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, 180, $DvtSparkChartAutomation$$ - 180))) : $DvtChartDataChangePyramidSlice$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, 
    $dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$));
    return $DvtChartDataChangePyramidSlice$$;
  };
  $DvtChartPieRenderUtils$$.$_makeOuterPath$ = function $$DvtChartPieRenderUtils$$$$_makeOuterPath$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) {
    $DvtChartPieLabelInfo$$ = $dvt$$2$$.Math.$degreesToRads$($DvtChartPieLabelInfo$$);
    var $DvtChartDataChangePyramidSlice$$ = -($dvt$$2$$.Math.$degreesToRads$($DvtChartPieLabelUtils$$) + $DvtChartPieLabelInfo$$);
    $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
    $DvtSparkChartEventManager$$ += Math.cos($DvtChartDataChangePyramidSlice$$) * $DvtSparkChartAutomation$$;
    $DvtSparkChartDefaults$$ += Math.sin($DvtChartDataChangePyramidSlice$$) * $DvtChartRefObjUtils$$;
    $DvtChartDataChangePyramidSlice$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartPieLabelUtils$$.x, $DvtChartPieLabelUtils$$.y);
    $DvtChartDataChangePyramidSlice$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartPieLabelInfo$$, 0, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartDataChangePyramidSlice$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ + $DvtChartAxisUtils$$);
    $DvtChartDataChangePyramidSlice$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartPieLabelInfo$$, 1, $DvtChartPieLabelUtils$$.x, $DvtChartPieLabelUtils$$.y + $DvtChartAxisUtils$$);
    return $DvtChartDataChangePyramidSlice$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartPieLabelUtils$$.x, $DvtChartPieLabelUtils$$.y);
  };
  $DvtChartPieRenderUtils$$.$_generateInnerPoints$ = function $$DvtChartPieRenderUtils$$$$_generateInnerPoints$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartAxisUtils$$ = [];
    $DvtChartAxisUtils$$.push({x:$dvt$$2$$, y:$DvtSparkChartEventManager$$});
    $DvtChartAxisUtils$$.push({x:$DvtSparkChartDefaults$$, y:$DvtSparkChartAutomation$$});
    $DvtChartAxisUtils$$.push({x:$DvtSparkChartDefaults$$, y:$DvtSparkChartAutomation$$ + $DvtChartRefObjUtils$$});
    $DvtChartAxisUtils$$.push({x:$dvt$$2$$, y:$DvtSparkChartEventManager$$ + $DvtChartRefObjUtils$$});
    return $DvtChartAxisUtils$$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPieLabelInfo$$, $dvt$$2$$.$Obj$);
  $DvtChartPieLabelInfo$$.prototype.$_init$ = function $$DvtChartPieLabelInfo$$$$$_init$$() {
    this.$_slice$ = this.$_sliceLabel$ = null;
    this.$_initialNumLines$ = this.$_y$ = this.$_x$ = this.$_height$ = this.$_width$ = this.$_position$ = this.$_angle$ = -1;
    this.$_hasFeeler$ = !1;
    this.$_minY$ = this.$_maxY$ = -1;
  };
  $DvtChartPieLabelInfo$$.prototype.$getAngle$ = function $$DvtChartPieLabelInfo$$$$$getAngle$$() {
    return this.$_angle$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setAngle$ = function $$DvtChartPieLabelInfo$$$$$setAngle$$($dvt$$2$$) {
    this.$_angle$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.getHeight = function $$DvtChartPieLabelInfo$$$$getHeight$() {
    return this.$_height$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setHeight$ = function $$DvtChartPieLabelInfo$$$$$setHeight$$($dvt$$2$$) {
    this.$_height$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setMaxY$ = function $$DvtChartPieLabelInfo$$$$$setMaxY$$($dvt$$2$$) {
    this.$_maxY$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setMinY$ = function $$DvtChartPieLabelInfo$$$$$setMinY$$($dvt$$2$$) {
    this.$_minY$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$boundY$ = function $$DvtChartPieLabelInfo$$$$$boundY$$($dvt$$2$$) {
    this.$_minY$ <= this.$_maxY$ && ($dvt$$2$$ = Math.max($dvt$$2$$, this.$_minY$), $dvt$$2$$ = Math.min($dvt$$2$$, this.$_maxY$));
    return $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setHasFeeler$ = function $$DvtChartPieLabelInfo$$$$$setHasFeeler$$($dvt$$2$$) {
    this.$_hasFeeler$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$getPosition$ = function $$DvtChartPieLabelInfo$$$$$getPosition$$() {
    return this.$_position$;
  };
  $DvtChartPieLabelInfo$$.prototype.setPosition = function $$DvtChartPieLabelInfo$$$$setPosition$($dvt$$2$$) {
    this.$_position$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setSlice$ = function $$DvtChartPieLabelInfo$$$$$setSlice$$($dvt$$2$$) {
    this.$_slice$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setSliceLabel$ = function $$DvtChartPieLabelInfo$$$$$setSliceLabel$$($dvt$$2$$) {
    this.$_sliceLabel$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.getWidth = function $$DvtChartPieLabelInfo$$$$getWidth$() {
    return this.$_width$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setWidth$ = function $$DvtChartPieLabelInfo$$$$$setWidth$$($dvt$$2$$) {
    this.$_width$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$getX$ = function $$DvtChartPieLabelInfo$$$$$getX$$() {
    return this.$_x$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setX$ = function $$DvtChartPieLabelInfo$$$$$setX$$($dvt$$2$$) {
    this.$_x$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$getY$ = function $$DvtChartPieLabelInfo$$$$$getY$$() {
    return this.$_y$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setY$ = function $$DvtChartPieLabelInfo$$$$$setY$$($dvt$$2$$) {
    this.$_y$ = $dvt$$2$$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPieLabelUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartPieLabelUtils$$.$_MAX_LINES_PER_LABEL$ = 3;
  $DvtChartPieLabelUtils$$.$_COLLISION_MARGIN$ = 1;
  $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$ = 1;
  $DvtChartPieLabelUtils$$.$_RIGHT_SIDE_LABELS$ = 2;
  $DvtChartPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$ = 1.04;
  $DvtChartPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ = .1;
  $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ = .1;
  $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ = .5;
  $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$ = 3;
  $DvtChartPieLabelUtils$$.$_NO_COLLISION$ = 0;
  $DvtChartPieLabelUtils$$.$_HALF_COLLISION$ = 1;
  $DvtChartPieLabelUtils$$.$_ALL_COLLISION$ = 2;
  $DvtChartPieLabelUtils$$.$layoutLabelsAndFeelers$ = function $$DvtChartPieLabelUtils$$$$layoutLabelsAndFeelers$$($dvt$$2$$) {
    $DvtChartPieLabelUtils$$.$_layoutInsideLabels$($dvt$$2$$, "auto" == $dvt$$2$$.$getLabelPosition$());
    $DvtChartPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$($dvt$$2$$);
  };
  $DvtChartPieLabelUtils$$.$_layoutInsideLabels$ = function $$DvtChartPieLabelUtils$$$$_layoutInsideLabels$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for (var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_slices$, $DvtChartRefObjUtils$$ = 0;$DvtChartRefObjUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartRefObjUtils$$++) {
      var $DvtChartAxisUtils$$ = $DvtSparkChartAutomation$$[$DvtChartRefObjUtils$$], $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getSeriesLabelPosition$($DvtChartAxisUtils$$.$getSeriesIndex$());
      if ("none" != $DvtChartPieLabelInfo$$ && "outsideSlice" != $DvtChartPieLabelInfo$$ && !$DvtChartPieLabelUtils$$.$_skipSliceLabel$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$)) {
        var $DvtChartDataChangePyramidSlice$$ = $DvtChartAxisUtils$$.$getAngleStart$() + $DvtChartAxisUtils$$.$getAngleExtent$() / 2, $DvtChartSeriesEffectUtils$$ = $DvtChartAxisUtils$$.$getInnerRadius$(), $DvtChartRangeMarker$$ = $DvtChartAxisUtils$$.$getCenter$(), $DvtChartStyleUtils$$ = 0, $DvtChartPolarBar$$ = 0, $DvtChartFunnelSlice$$ = $DvtChartPieLabelUtils$$.$_createLabel$($DvtChartAxisUtils$$, !0);
        1 == $DvtSparkChartAutomation$$.length ? ($DvtChartStyleUtils$$ = $DvtChartRangeMarker$$.x, $DvtChartPolarBar$$ = $DvtChartRangeMarker$$.y) : ($DvtChartStyleUtils$$ = Math.max(.45, .65 - .45 * $DvtChartSeriesEffectUtils$$ / Math.max($DvtChartAxisUtils$$.$_radiusY$, .001)), $DvtChartDataChangePyramidSlice$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartDataChangePyramidSlice$$, $DvtChartRangeMarker$$.x, $DvtChartRangeMarker$$.y, $DvtChartSeriesEffectUtils$$ + ($DvtChartAxisUtils$$.$_radiusX$ - 
        $DvtChartSeriesEffectUtils$$) * $DvtChartStyleUtils$$, $DvtChartSeriesEffectUtils$$ + ($DvtChartAxisUtils$$.$_radiusY$ - $DvtChartSeriesEffectUtils$$) * $DvtChartStyleUtils$$), $DvtChartStyleUtils$$ = $DvtChartDataChangePyramidSlice$$.x, $DvtChartPolarBar$$ = $DvtChartDataChangePyramidSlice$$.y);
        $DvtChartFunnelSlice$$.$setX$($DvtChartStyleUtils$$);
        $DvtChartFunnelSlice$$.$setY$($DvtChartPolarBar$$);
        $DvtChartFunnelSlice$$.$alignMiddle$();
        $DvtChartFunnelSlice$$.$alignCenter$();
        for (var $DvtChartDataChangePyramidSlice$$ = $dvt$$2$$.$TextUtils$.$guessTextDimensions$($DvtChartFunnelSlice$$), $DvtChartRangeMarker$$ = $DvtChartSeriesEffectUtils$$ = $DvtChartStyleUtils$$, $DvtChartDataCursor$$ = $DvtChartPolarBar$$ - $DvtChartDataChangePyramidSlice$$.$h$ / 2, $DvtChartPolarBar$$ = $DvtChartPolarBar$$ + $DvtChartDataChangePyramidSlice$$.$h$ / 2;$DvtChartAxisUtils$$.contains($DvtChartSeriesEffectUtils$$, $DvtChartDataCursor$$) && $DvtChartAxisUtils$$.contains($DvtChartSeriesEffectUtils$$, 
        $DvtChartPolarBar$$);) {
          $DvtChartSeriesEffectUtils$$--;
        }
        for (;$DvtChartAxisUtils$$.contains($DvtChartRangeMarker$$, $DvtChartDataCursor$$) && $DvtChartAxisUtils$$.contains($DvtChartRangeMarker$$, $DvtChartPolarBar$$);) {
          $DvtChartRangeMarker$$++;
        }
        $DvtChartSeriesEffectUtils$$ = Math.ceil($DvtChartSeriesEffectUtils$$ + 3);
        $DvtChartRangeMarker$$ = Math.floor($DvtChartRangeMarker$$ - 3);
        $DvtChartStyleUtils$$ = 2 * Math.min($DvtChartStyleUtils$$ - $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$ - $DvtChartStyleUtils$$);
        $DvtChartStyleUtils$$ < $DvtChartDataChangePyramidSlice$$.$w$ && ($DvtChartFunnelSlice$$.$setX$(($DvtChartSeriesEffectUtils$$ + $DvtChartRangeMarker$$) / 2), $DvtChartStyleUtils$$ = $DvtChartRangeMarker$$ - $DvtChartSeriesEffectUtils$$);
        $DvtSparkChartDefaults$$ && "center" != $DvtChartPieLabelInfo$$ ? $DvtChartFunnelSlice$$.$getDimensions$().$w$ < $DvtChartStyleUtils$$ ? $DvtChartAxisUtils$$.$setSliceLabel$($DvtChartFunnelSlice$$) : $DvtChartAxisUtils$$.$setSliceLabel$(null) : ($DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getCtx$().$_stage$, $DvtChartPolarBar$$ = $DvtChartPieLabelUtils$$.$_isTextLabel$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$) ? null : $DvtChartFunnelSlice$$.$getTextString$().length, 
        $dvt$$2$$.$TextUtils$.$fitText$($DvtChartFunnelSlice$$, $DvtChartStyleUtils$$, $DvtChartDataChangePyramidSlice$$.$h$, $DvtChartPieLabelInfo$$, $DvtChartPolarBar$$) && ($DvtChartPieLabelInfo$$.removeChild($DvtChartFunnelSlice$$), $DvtChartAxisUtils$$.$setSliceLabel$($DvtChartFunnelSlice$$)));
        null != $DvtChartAxisUtils$$.$_sliceLabel$ && $DvtChartAxisUtils$$.$setNoOutsideFeeler$();
      }
    }
  };
  $DvtChartPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$ = function $$DvtChartPieLabelUtils$$$$_layoutOutsideLabelsAndFeelers$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = [], $DvtSparkChartDefaults$$ = $DvtChartPieLabelUtils$$.$_generateInitialLayout$($dvt$$2$$), $DvtSparkChartEventManager$$ = $DvtSparkChartDefaults$$[0], $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$[1], $DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$.$_refineInitialLayout$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$), $DvtChartRefObjUtils$$ = $DvtChartPieLabelUtils$$.$_refineInitialLayout$($dvt$$2$$, 
    $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$.$_RIGHT_SIDE_LABELS$);
    $DvtSparkChartAutomation$$ == $DvtChartPieLabelUtils$$.$_HALF_COLLISION$ && $DvtChartRefObjUtils$$ != $DvtChartPieLabelUtils$$.$_NO_COLLISION$ && $DvtChartPieLabelUtils$$.$_columnLabels$($dvt$$2$$, $DvtSparkChartEventManager$$, !0, !0, !0);
    $DvtSparkChartAutomation$$ != $DvtChartPieLabelUtils$$.$_NO_COLLISION$ && $DvtChartRefObjUtils$$ == $DvtChartPieLabelUtils$$.$_HALF_COLLISION$ && $DvtChartPieLabelUtils$$.$_columnLabels$($dvt$$2$$, $DvtSparkChartDefaults$$, !1, !0, !0);
    $DvtChartPieLabelUtils$$.$_setLabelsAndFeelers$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$);
    $DvtChartPieLabelUtils$$.$_setLabelsAndFeelers$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$.$_RIGHT_SIDE_LABELS$);
  };
  $DvtChartPieLabelUtils$$.$_createLabel$ = function $$DvtChartPieLabelUtils$$$$_createLabel$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_pieChart$, $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.$getCtx$(), $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$ ? new $dvt$$2$$.$OutputText$($DvtChartRefObjUtils$$) : new $dvt$$2$$.$MultilineText$($DvtChartRefObjUtils$$), $DvtChartAxisUtils$$ = $DvtSparkChartAutomation$$.$getOptions$().styleDefaults, $DvtChartPieLabelInfo$$ = [$DvtChartAxisUtils$$.dataLabelStyle, new $dvt$$2$$.$CSSStyle$($DvtChartAxisUtils$$.sliceLabelStyle)];
    ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartAutomation$$.$chart$, $DvtSparkChartEventManager$$.$getSeriesIndex$(), 0)) && $DvtChartPieLabelInfo$$.push(new $dvt$$2$$.$CSSStyle$($DvtSparkChartAutomation$$.labelStyle));
    $DvtSparkChartAutomation$$ = $dvt$$2$$.$CSSStyle$.$mergeStyles$($DvtChartPieLabelInfo$$);
    $DvtChartPieLabelInfo$$ = null != $DvtSparkChartAutomation$$.$getStyle$("color");
    !$DvtSparkChartDefaults$$ || $DvtChartPieLabelInfo$$ && !$dvt$$2$$.$Agent$.$isHighContrast$() ? $DvtChartPieLabelInfo$$ || $DvtSparkChartAutomation$$.$setStyle$("color", $DvtChartAxisUtils$$._defaultSliceLabelColor) : ($DvtChartPieLabelInfo$$ = $dvt$$2$$.$ColorUtils$.$getContrastingTextColor$($DvtSparkChartEventManager$$.$getFillColor$()), $DvtSparkChartAutomation$$.$setStyle$("color", $DvtChartPieLabelInfo$$));
    $DvtChartRefObjUtils$$.$setCSSStyle$($DvtSparkChartAutomation$$);
    $DvtChartAxisUtils$$ = $DvtChartPieLabelUtils$$.$generateSliceLabelString$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$.sliceLabelType);
    $DvtChartRefObjUtils$$.$setTextString$($DvtChartAxisUtils$$);
    $DvtSparkChartEventManager$$.$setSliceLabelString$($DvtChartAxisUtils$$);
    return $DvtChartRefObjUtils$$;
  };
  $DvtChartPieLabelUtils$$.$createPieCenter$ = function $$DvtChartPieLabelUtils$$$$createPieCenter$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getCtx$(), $DvtChartRefObjUtils$$ = $DvtChartPieLabelUtils$$.$getPieCenterOptions$($DvtSparkChartDefaults$$), $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$.label, $DvtChartPieLabelInfo$$ = $DvtChartRefObjUtils$$.renderer, $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.$getLabelPosition$(), $DvtChartDataChangePyramidSlice$$ = $DvtSparkChartDefaults$$.tooltip, 
    $DvtChartDataChangePyramidSlice$$ = $DvtChartDataChangePyramidSlice$$ ? $DvtChartDataChangePyramidSlice$$.renderer : null, $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$getCenter$(), $DvtChartRangeMarker$$ = $DvtSparkChartEventManager$$.$getInnerRadius$();
    if ($DvtChartAxisUtils$$ || $DvtChartPieLabelInfo$$) {
      var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.$_radiusX$, $DvtChartRangeMarker$$ = 0 < $DvtChartRangeMarker$$ ? $DvtChartRangeMarker$$ : "outsideSlice" == $DvtChartPieRenderUtils$$ ? .9 * $DvtChartStyleUtils$$ : .5 * $DvtChartStyleUtils$$, $DvtChartPieRenderUtils$$ = $DvtChartRangeMarker$$ * Math.sqrt(2);
      $DvtChartAxisUtils$$ && ($DvtChartStyleUtils$$ = new $dvt$$2$$.$MultilineText$($DvtSparkChartAutomation$$), $DvtChartStyleUtils$$.$setCSSStyle$($DvtChartRefObjUtils$$.labelStyle), "number" === typeof $DvtChartAxisUtils$$ && ($DvtChartAxisUtils$$ = $DvtChartTooltipUtils$$.$formatValue$($DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartAxisUtils$$, $DvtChartAxisUtils$$, 0)), $DvtChartStyleUtils$$.$setTextString$($DvtChartAxisUtils$$), $dvt$$2$$.$TextUtils$.$fitText$($DvtChartStyleUtils$$, 
      $DvtChartPieRenderUtils$$, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$) && ($DvtChartRefObjUtils$$ = $DvtChartStyleUtils$$.$getDimensions$(), $DvtChartStyleUtils$$.$setY$($DvtChartSeriesEffectUtils$$.y - $DvtChartRefObjUtils$$.$h$ / 2), $DvtChartStyleUtils$$.$setX$($DvtChartSeriesEffectUtils$$.x), $DvtChartStyleUtils$$.$alignCenter$(), $DvtChartStyleUtils$$.$isTruncated$() && !$DvtChartDataChangePyramidSlice$$ && $DvtSparkChartEventManager$$.$chart$.$getEventManager$().$associate$($DvtChartStyleUtils$$, 
      new $dvt$$2$$.$SimpleObjPeer$($DvtChartStyleUtils$$.$getTextString$())), $DvtSparkChartEventManager$$.$addChild$($DvtChartStyleUtils$$)));
      $DvtChartDataChangePyramidSlice$$ && ($DvtChartRefObjUtils$$ = new $dvt$$2$$.$Circle$($DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$.x, $DvtChartSeriesEffectUtils$$.y, $DvtChartRangeMarker$$), $DvtChartRefObjUtils$$.$setInvisibleFill$(), $DvtSparkChartEventManager$$.$addChild$($DvtChartRefObjUtils$$), $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.$getCtx$().$getTooltipManager$(), $DvtSparkChartEventManager$$.$chart$.$getEventManager$().$associate$($DvtChartRefObjUtils$$, new $dvt$$2$$.$CustomDatatipPeer$($DvtChartStyleUtils$$, 
      $DvtChartDataChangePyramidSlice$$, "#4b4b4b", {component:$DvtSparkChartDefaults$$._widgetConstructor, label:$DvtChartAxisUtils$$})));
      $DvtChartPieLabelInfo$$ && ($DvtChartAxisUtils$$ = {outerBounds:{x:$DvtChartSeriesEffectUtils$$.x - $DvtChartRangeMarker$$, y:$DvtChartSeriesEffectUtils$$.y - $DvtChartRangeMarker$$, width:2 * $DvtChartRangeMarker$$, height:2 * $DvtChartRangeMarker$$}, innerBounds:{x:$DvtChartSeriesEffectUtils$$.x - $DvtChartPieRenderUtils$$ / 2, y:$DvtChartSeriesEffectUtils$$.y - $DvtChartPieRenderUtils$$ / 2, width:$DvtChartPieRenderUtils$$, height:$DvtChartPieRenderUtils$$}, label:$DvtChartAxisUtils$$, component:$DvtSparkChartDefaults$$._widgetConstructor}, 
      $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$.$_parentDiv$, ($DvtChartDataChangePyramidSlice$$ = $DvtSparkChartEventManager$$.$chart$.$pieCenterDiv$) && $DvtSparkChartDefaults$$.removeChild($DvtChartDataChangePyramidSlice$$), $DvtChartAxisUtils$$ = $DvtChartPieLabelInfo$$($DvtChartAxisUtils$$)) && ($DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$.$createOverlayDiv$(), $DvtChartPieLabelInfo$$.appendChild($DvtChartAxisUtils$$), $DvtSparkChartEventManager$$.$chart$.$pieCenterDiv$ = 
      $DvtChartPieLabelInfo$$, $DvtSparkChartDefaults$$.appendChild($DvtChartPieLabelInfo$$), ($DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.$_overlayAttachedCallback$) && $DvtSparkChartEventManager$$($DvtChartPieLabelInfo$$));
    }
  };
  $DvtChartPieLabelUtils$$.$generateSliceLabelString$ = function $$DvtChartPieLabelUtils$$$$generateSliceLabelString$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$.$getDefaultSliceLabelString$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartRefObjUtils$$ = $dvt$$2$$.$_pieChart$.$getOptions$().dataLabel;
    $DvtChartRefObjUtils$$ && ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataContext$($dvt$$2$$.$_chart$, $dvt$$2$$.$getSeriesIndex$(), 0), $DvtSparkChartDefaults$$.label = $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$($DvtSparkChartDefaults$$), "number" == typeof $DvtSparkChartDefaults$$ && ($DvtChartRefObjUtils$$ = $DvtChartTooltipUtils$$.$getValueFormat$($dvt$$2$$.$_pieChart$.$chart$, "label"), $DvtSparkChartDefaults$$ = $DvtChartTooltipUtils$$.$formatValue$($dvt$$2$$.$_pieChart$.$getCtx$(), 
    $DvtChartRefObjUtils$$, $DvtSparkChartDefaults$$)));
    return $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$ : $DvtSparkChartAutomation$$;
  };
  $DvtChartPieLabelUtils$$.$getDefaultSliceLabelString$ = function $$DvtChartPieLabelUtils$$$$getDefaultSliceLabelString$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_pieChart$, $DvtSparkChartAutomation$$ = $dvt$$2$$.$_customLabel$, $DvtChartRefObjUtils$$ = $DvtChartTooltipUtils$$.$getValueFormat$($DvtSparkChartDefaults$$.$chart$, "label");
    if (null != $DvtSparkChartAutomation$$) {
      return "number" == typeof $DvtSparkChartAutomation$$ ? $DvtChartTooltipUtils$$.$formatValue$($DvtSparkChartDefaults$$.$getCtx$(), $DvtChartRefObjUtils$$, $DvtSparkChartAutomation$$) : $DvtSparkChartAutomation$$;
    }
    var $DvtChartAxisUtils$$ = $dvt$$2$$.getValue(), $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getTotalValue$(), $DvtChartPieLabelUtils$$ = 0 == $DvtSparkChartAutomation$$ ? 0 : $DvtChartAxisUtils$$ / $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$ = .01 > $DvtChartPieLabelUtils$$ ? 3 : .1 > $DvtChartPieLabelUtils$$ ? 2 : 1 > $DvtChartPieLabelUtils$$ ? 1 : 0;
    150 > 2 * $DvtSparkChartDefaults$$.$_radiusX$ && ($DvtChartPieLabelInfo$$ = Math.max($DvtChartPieLabelInfo$$ - 1, 0));
    var $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.$getCtx$().$getNumberConverter$({style:"percent", maximumFractionDigits:$DvtChartPieLabelInfo$$, minimumFractionDigits:$DvtChartPieLabelInfo$$}), $DvtSparkChartAutomation$$ = "";
    $DvtChartPieRenderUtils$$ && $DvtChartPieRenderUtils$$.getAsString ? $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.getAsString($DvtChartPieLabelUtils$$) : $DvtChartPieRenderUtils$$ && $DvtChartPieRenderUtils$$.format ? $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.format($DvtChartPieLabelUtils$$) : ($DvtChartPieLabelUtils$$ *= 100, $DvtSparkChartAutomation$$ = $DvtChartTooltipUtils$$.$formatValue$($DvtSparkChartDefaults$$.$getCtx$(), {}, $DvtChartPieLabelUtils$$, null, null, 
    100 == $DvtChartPieLabelUtils$$ ? 1 : Math.pow(10, -1 * $DvtChartPieLabelInfo$$)) + "%");
    $DvtSparkChartDefaults$$ = $DvtChartTooltipUtils$$.$formatValue$($DvtSparkChartDefaults$$.$getCtx$(), $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$);
    $DvtChartRefObjUtils$$ = $dvt$$2$$.$getSeriesLabel$();
    return "percent" == $DvtSparkChartEventManager$$ ? $DvtSparkChartAutomation$$ : "number" == $DvtSparkChartEventManager$$ ? $DvtSparkChartDefaults$$ : "text" == $DvtSparkChartEventManager$$ ? $DvtChartRefObjUtils$$ : "textAndPercent" == $DvtSparkChartEventManager$$ ? $DvtChartRefObjUtils$$ + ", " + $DvtSparkChartAutomation$$ : null;
  };
  $DvtChartPieLabelUtils$$.$_refineInitialLayout$ = function $$DvtChartPieLabelUtils$$$$_refineInitialLayout$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if ($DvtSparkChartEventManager$$ && 0 < $DvtSparkChartEventManager$$.length) {
      var $DvtSparkChartAutomation$$ = $dvt$$2$$.$_frame$.y, $DvtChartRefObjUtils$$ = !1, $DvtChartAxisUtils$$ = !1, $DvtChartPieLabelInfo$$ = !1, $DvtChartPieRenderUtils$$ = 0, $DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$ = !1, $DvtChartRangeMarker$$ = $DvtChartSeriesEffectUtils$$;
      $DvtChartDataChangePyramidSlice$$ = !1;
      $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ == $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$;
      for (var $DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartStyleUtils$$++) {
        $DvtChartDataChangePyramidSlice$$ = $DvtSparkChartEventManager$$[$DvtChartStyleUtils$$], $DvtChartRangeMarker$$ = $DvtChartSeriesEffectUtils$$, 90 < $DvtChartDataChangePyramidSlice$$.$getPosition$() && ($DvtChartSeriesEffectUtils$$ = !0), $DvtChartPieRenderUtils$$ = $DvtChartDataChangePyramidSlice$$.$getY$() + $DvtChartDataChangePyramidSlice$$.getHeight(), ($DvtChartDataChangePyramidSlice$$ = $DvtSparkChartAutomation$$ - $DvtChartDataChangePyramidSlice$$.$getY$() > $DvtChartPieLabelUtils$$.$_COLLISION_MARGIN$) && 
        ($DvtChartSeriesEffectUtils$$ ? $DvtChartSeriesEffectUtils$$ && !$DvtChartRangeMarker$$ ? $DvtChartAxisUtils$$ = !0 : $DvtChartPieLabelInfo$$ = !0 : $DvtChartRefObjUtils$$ = !0), $DvtChartPieRenderUtils$$ > $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$);
      }
      return $DvtChartRefObjUtils$$ && $DvtChartPieLabelInfo$$ || $DvtChartAxisUtils$$ ? ($DvtChartPieLabelUtils$$.$_columnLabels$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, !0, !0), $DvtChartPieLabelUtils$$.$_ALL_COLLISION$) : $DvtChartRefObjUtils$$ ? ($DvtChartPieLabelUtils$$.$_columnLabels$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, !0, !1), $DvtChartPieLabelUtils$$.$_HALF_COLLISION$) : $DvtChartPieLabelInfo$$ ? ($DvtChartPieLabelUtils$$.$_columnLabels$($dvt$$2$$, 
      $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, !1, !0), $DvtChartPieLabelUtils$$.$_HALF_COLLISION$) : $DvtChartPieLabelUtils$$.$_NO_COLLISION$;
    }
  };
  $DvtChartPieLabelUtils$$.$_setLabelsAndFeelers$ = function $$DvtChartPieLabelUtils$$$$_setLabelsAndFeelers$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if (!(null == $DvtSparkChartEventManager$$ || 0 >= $DvtSparkChartEventManager$$.length)) {
      var $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$ == $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$, $DvtChartPieRenderUtils$$ = $dvt$$2$$.$_frame$, $DvtChartDataChangePyramidSlice$$ = Infinity;
      for ($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartDefaults$$++) {
        $DvtChartAxisUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$], $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$.$_slice$, $DvtChartAxisUtils$$.$_hasFeeler$ ? ($DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$.$_calculateFeeler$($DvtChartAxisUtils$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$), $DvtChartRefObjUtils$$ = $DvtChartPieLabelUtils$$.$getMaxLabelWidth$($dvt$$2$$, $DvtChartAxisUtils$$.$getX$(), $DvtChartPieLabelInfo$$), $DvtChartAxisUtils$$.getWidth() - 
        $DvtSparkChartAutomation$$ >= $DvtChartRefObjUtils$$ || 0 == $DvtChartAxisUtils$$.getWidth() ? $DvtChartAxisUtils$$.$setHasFeeler$(!1) : $DvtChartDataChangePyramidSlice$$ = Math.min($DvtChartDataChangePyramidSlice$$, $DvtSparkChartAutomation$$)) : $DvtSparkChartAutomation$$.$setNoOutsideFeeler$();
      }
      for ($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartDefaults$$++) {
        $DvtChartAxisUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$], $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$.$_slice$, $DvtChartRefObjUtils$$ = $DvtChartAxisUtils$$.$_sliceLabel$, $DvtChartAxisUtils$$.$_hasFeeler$ && ($DvtChartPieLabelInfo$$ ? $DvtChartAxisUtils$$.$setX$($DvtChartAxisUtils$$.$getX$() + $DvtChartDataChangePyramidSlice$$) : $DvtChartAxisUtils$$.$setX$($DvtChartAxisUtils$$.$getX$() - $DvtChartDataChangePyramidSlice$$), $DvtChartPieLabelUtils$$.$_calculateFeeler$($DvtChartAxisUtils$$, 
        $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$), $DvtChartRefObjUtils$$.$setMaxLines$(1)), $DvtChartRefObjUtils$$.$setY$($DvtChartAxisUtils$$.$getY$()), $DvtChartRefObjUtils$$.$setX$($DvtChartAxisUtils$$.$getX$()), $DvtChartAxisUtils$$.$getY$() < $DvtChartPieRenderUtils$$.y || $DvtChartAxisUtils$$.$getY$() + $DvtChartAxisUtils$$.getHeight() > $DvtChartPieRenderUtils$$.y + $DvtChartPieRenderUtils$$.$h$ ? ($DvtSparkChartAutomation$$.$setSliceLabel$(null), $DvtSparkChartAutomation$$.$setNoOutsideFeeler$()) : 
        ($DvtChartPieLabelUtils$$.$_truncateSliceLabel$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtChartAxisUtils$$, $DvtChartPieLabelInfo$$), 0 == $DvtChartAxisUtils$$.getWidth() || 0 == $DvtChartAxisUtils$$.getHeight() ? ($DvtSparkChartAutomation$$.$setSliceLabel$(null), $DvtSparkChartAutomation$$.$setNoOutsideFeeler$()) : $DvtSparkChartAutomation$$.$setSliceLabel$($DvtChartRefObjUtils$$));
      }
    }
  };
  $DvtChartPieLabelUtils$$.$_calculateFeeler$ = function $$DvtChartPieLabelUtils$$$$_calculateFeeler$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$getX$(), $DvtChartAxisUtils$$ = $DvtSparkChartEventManager$$.$getY$() + $DvtSparkChartEventManager$$.getHeight() * $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$, $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ * $DvtSparkChartDefaults$$.$_radiusX$, $DvtChartDataChangePyramidSlice$$;
    $DvtSparkChartAutomation$$ ? ($DvtChartRefObjUtils$$ += $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $DvtChartDataChangePyramidSlice$$ = $DvtChartRefObjUtils$$ + $DvtChartPieLabelInfo$$) : ($DvtChartRefObjUtils$$ -= $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $DvtChartDataChangePyramidSlice$$ = $DvtChartRefObjUtils$$ - $DvtChartPieLabelInfo$$);
    var $DvtChartSeriesEffectUtils$$ = {x:0, y:0};
    $DvtChartDataChangePyramidSlice$$ = {x:$DvtChartDataChangePyramidSlice$$, y:$DvtChartAxisUtils$$};
    $DvtChartRefObjUtils$$ = {x:$DvtChartRefObjUtils$$, y:$DvtChartAxisUtils$$};
    $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$getAngle$();
    $DvtChartAxisUtils$$ = $DvtChartPieLabelUtils$$.$_adjustForDepth$($DvtChartSeriesEffectUtils$$, $DvtSparkChartDefaults$$.getDepth());
    $DvtChartSeriesEffectUtils$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartSeriesEffectUtils$$, $DvtSparkChartDefaults$$.$getCenter$().x, $DvtSparkChartDefaults$$.$getCenter$().y + $DvtChartAxisUtils$$, $DvtSparkChartDefaults$$.$_radiusX$, $DvtSparkChartDefaults$$.$_radiusY$);
    $DvtSparkChartEventManager$$ = $dvt$$2$$.Math.$degreesToRads$($DvtSparkChartEventManager$$.$getPosition$());
    var $DvtChartAxisUtils$$ = Math.abs(Math.atan2($DvtChartDataChangePyramidSlice$$.x - $DvtChartSeriesEffectUtils$$.x, $DvtChartSeriesEffectUtils$$.y - $DvtChartDataChangePyramidSlice$$.y)), $DvtChartRangeMarker$$ = ($DvtChartSeriesEffectUtils$$.y - $DvtChartDataChangePyramidSlice$$.y) * Math.tan($DvtSparkChartEventManager$$);
    if ($DvtSparkChartEventManager$$ > Math.PI / 2 && $DvtChartAxisUtils$$ > Math.PI / 2 && $DvtChartAxisUtils$$ < $DvtSparkChartEventManager$$ || $DvtSparkChartEventManager$$ < Math.PI / 2 && $DvtChartAxisUtils$$ < Math.PI / 2 && $DvtChartAxisUtils$$ > $DvtSparkChartEventManager$$) {
      $DvtChartDataChangePyramidSlice$$.x = $DvtSparkChartAutomation$$ ? $DvtChartSeriesEffectUtils$$.x - $DvtChartRangeMarker$$ : $DvtChartSeriesEffectUtils$$.x + $DvtChartRangeMarker$$;
    }
    $DvtSparkChartDefaults$$.$setOutsideFeelerPoints$($DvtChartSeriesEffectUtils$$, $DvtChartDataChangePyramidSlice$$, $DvtChartRefObjUtils$$);
    return Math.abs($DvtChartRefObjUtils$$.x - $DvtChartDataChangePyramidSlice$$.x) - $DvtChartPieLabelInfo$$;
  };
  $DvtChartPieLabelUtils$$.$_adjustForDepth$ = function $$DvtChartPieLabelUtils$$$$_adjustForDepth$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = 0;
    189 < $dvt$$2$$ && 351 > $dvt$$2$$ && ($DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartPieLabelUtils$$.$_getMiddleLabel$ = function $$DvtChartPieLabelUtils$$$$_getMiddleLabel$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = 91, $DvtSparkChartDefaults$$ = -1, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $dvt$$2$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartRefObjUtils$$ = $dvt$$2$$[$DvtSparkChartAutomation$$].$getPosition$();
      Math.abs($DvtChartRefObjUtils$$ - 90) < $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$ = Math.abs($DvtChartRefObjUtils$$ - 90), $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$);
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartPieLabelUtils$$.$_setOptimalLabelPosition$ = function $$DvtChartPieLabelUtils$$$$_setOptimalLabelPosition$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartDefaults$$.$setX$($DvtSparkChartAutomation$$);
    $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_radiusY$ * (1 + $DvtChartPieLabelUtils$$.$_FEELER_RAD_MINSIZE$);
    var $DvtChartRefObjUtils$$ = $dvt$$2$$.Math.$degreesToRads$($DvtSparkChartDefaults$$.$getPosition$());
    $DvtSparkChartAutomation$$ *= Math.cos($DvtChartRefObjUtils$$);
    $DvtChartRefObjUtils$$ = $DvtChartPieLabelUtils$$.$_adjustForDepth$($DvtSparkChartDefaults$$.$getAngle$(), $DvtSparkChartEventManager$$.getDepth());
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getCenter$().y - $DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$.getHeight() * $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ + $DvtChartRefObjUtils$$;
    $DvtSparkChartDefaults$$.$setY$($DvtSparkChartDefaults$$.$boundY$($DvtSparkChartEventManager$$));
  };
  $DvtChartPieLabelUtils$$.$_getRadFeelerAngle$ = function $$DvtChartPieLabelUtils$$$$_getRadFeelerAngle$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$_slice$, $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.$getCenter$();
    $dvt$$2$$ = $dvt$$2$$.$getAngle$();
    var $DvtChartAxisUtils$$ = $DvtChartPieLabelUtils$$.$_adjustForDepth$($dvt$$2$$, $DvtSparkChartAutomation$$.getDepth()), $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($dvt$$2$$, $DvtChartRefObjUtils$$.x, $DvtChartRefObjUtils$$.y + $DvtChartAxisUtils$$, $DvtSparkChartAutomation$$.$_radiusX$, $DvtSparkChartAutomation$$.$_radiusY$);
    return Math.atan2(Math.abs($DvtSparkChartEventManager$$ - $DvtSparkChartAutomation$$.x), $DvtSparkChartAutomation$$.y - $DvtSparkChartDefaults$$);
  };
  $DvtChartPieLabelUtils$$.$_columnLabels$ = function $$DvtChartPieLabelUtils$$$$_columnLabels$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    var $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$_frame$, $DvtChartPieRenderUtils$$ = $DvtChartPieLabelInfo$$.y, $DvtChartDataChangePyramidSlice$$ = $DvtChartPieLabelInfo$$.y + $DvtChartPieLabelInfo$$.$h$, $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$ = 0, $DvtChartStyleUtils$$, $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getCenter$().x, $DvtChartPolarBar$$;
    $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$_radiusX$ * (1 + $DvtChartPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ + $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$);
    $DvtSparkChartAutomation$$ ? ($DvtChartPieLabelInfo$$ -= $DvtChartSeriesEffectUtils$$, $DvtChartPolarBar$$ = $DvtChartPieLabelInfo$$ + $DvtSparkChartEventManager$$.$_radiusX$ * $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$) : ($DvtChartPieLabelInfo$$ += $DvtChartSeriesEffectUtils$$, $DvtChartPolarBar$$ = $DvtChartPieLabelInfo$$ - $DvtSparkChartEventManager$$.$_radiusX$ * $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$);
    for ($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$], $DvtChartRangeMarker$$ = $dvt$$2$$.Math.$degreesToRads$($DvtChartSeriesEffectUtils$$.$getPosition$()), $DvtChartStyleUtils$$ = $DvtChartPieLabelUtils$$.$_getRadFeelerAngle$($DvtChartSeriesEffectUtils$$, $DvtChartPolarBar$$, $DvtChartPieRenderUtils$$), $DvtChartStyleUtils$$ - $DvtChartRangeMarker$$ > .45 * Math.PI || $DvtChartPieLabelUtils$$.$_skipSliceLabel$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$.$_slice$) ? 
      ($DvtSparkChartDefaults$$.splice($DvtSparkChartAutomation$$, 1), $DvtSparkChartAutomation$$--) : ($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$setMinY$($DvtChartPieRenderUtils$$), $DvtChartPieRenderUtils$$ += $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].getHeight());
    }
    for ($DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.length - 1;0 <= $DvtSparkChartAutomation$$;$DvtSparkChartAutomation$$--) {
      $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$], $DvtChartRangeMarker$$ = $dvt$$2$$.Math.$degreesToRads$($DvtChartSeriesEffectUtils$$.$getPosition$()), $DvtChartStyleUtils$$ = $DvtChartPieLabelUtils$$.$_getRadFeelerAngle$($DvtChartSeriesEffectUtils$$, $DvtChartPolarBar$$, $DvtChartDataChangePyramidSlice$$), $DvtChartRangeMarker$$ - $DvtChartStyleUtils$$ > .45 * Math.PI || $DvtChartPieLabelUtils$$.$_skipSliceLabel$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$.$_slice$) ? 
      $DvtSparkChartDefaults$$.splice($DvtSparkChartAutomation$$, 1) : ($DvtChartDataChangePyramidSlice$$ -= $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].getHeight(), $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$setMaxY$($DvtChartDataChangePyramidSlice$$));
    }
    if (0 != $DvtSparkChartDefaults$$.length) {
      $DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$.$_getMiddleLabel$($DvtSparkChartDefaults$$);
      $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$[$DvtChartPieRenderUtils$$];
      $DvtChartRefObjUtils$$ && !$DvtChartAxisUtils$$ && $DvtSparkChartAutomation$$.$_minY$ + $DvtSparkChartAutomation$$.getHeight() > $DvtSparkChartEventManager$$.$getCenter$().y && ($DvtChartAxisUtils$$ = !0);
      $DvtChartAxisUtils$$ && !$DvtChartRefObjUtils$$ && $DvtSparkChartAutomation$$.$_maxY$ < $DvtSparkChartEventManager$$.$getCenter$().y && ($DvtChartRefObjUtils$$ = !0);
      $DvtChartSeriesEffectUtils$$ = $DvtSparkChartAutomation$$.$getPosition$();
      if ($DvtChartAxisUtils$$ && $DvtChartRefObjUtils$$ || 90 < $DvtChartSeriesEffectUtils$$ && $DvtChartAxisUtils$$ || 90 >= $DvtChartSeriesEffectUtils$$ && $DvtChartRefObjUtils$$) {
        $DvtChartPieLabelUtils$$.$_setOptimalLabelPosition$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$), $DvtSparkChartAutomation$$.$setHasFeeler$(!0);
      }
      $DvtChartDataChangePyramidSlice$$ = $DvtSparkChartAutomation$$.$getY$();
      $DvtChartRangeMarker$$ = $DvtSparkChartAutomation$$.$getY$() + $DvtSparkChartAutomation$$.getHeight();
      if ($DvtChartRefObjUtils$$) {
        for ($DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$ - 1;0 <= $DvtSparkChartAutomation$$;$DvtSparkChartAutomation$$--) {
          $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$], $DvtChartStyleUtils$$ = $DvtChartSeriesEffectUtils$$.getHeight(), $DvtChartPieLabelUtils$$.$_setOptimalLabelPosition$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelInfo$$), $DvtChartSeriesEffectUtils$$.$setHasFeeler$(!0), $DvtChartRefObjUtils$$ = $DvtChartSeriesEffectUtils$$.$getY$(), $DvtChartDataChangePyramidSlice$$ = $DvtChartRefObjUtils$$ + $DvtChartStyleUtils$$ < $DvtChartDataChangePyramidSlice$$ ? 
          $DvtChartRefObjUtils$$ : $DvtChartDataChangePyramidSlice$$ - $DvtChartStyleUtils$$, $DvtChartSeriesEffectUtils$$.$setY$($DvtChartDataChangePyramidSlice$$);
        }
      }
      if ($DvtChartAxisUtils$$) {
        for ($DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$ + 1;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
          $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$], $DvtChartStyleUtils$$ = $DvtChartSeriesEffectUtils$$.getHeight(), $DvtChartPieLabelUtils$$.$_setOptimalLabelPosition$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelInfo$$), $DvtChartSeriesEffectUtils$$.$setHasFeeler$(!0), $DvtChartRefObjUtils$$ = $DvtChartSeriesEffectUtils$$.$getY$(), $DvtChartRangeMarker$$ = $DvtChartRefObjUtils$$ > $DvtChartRangeMarker$$ ? $DvtChartRefObjUtils$$ + 
          $DvtChartStyleUtils$$ : $DvtChartRangeMarker$$ + $DvtChartStyleUtils$$, $DvtChartSeriesEffectUtils$$.$setY$($DvtChartRangeMarker$$ - $DvtChartStyleUtils$$);
        }
      }
    }
  };
  $DvtChartPieLabelUtils$$.$_truncateSliceLabel$ = function $$DvtChartPieLabelUtils$$$$_truncateSliceLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$.$_sliceLabel$, $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$.$getCSSStyle$(), $DvtChartPieLabelInfo$$ = 0, $DvtChartPieLabelInfo$$ = $dvt$$2$$.$getNumChildren$(), $DvtChartPieRenderUtils$$ = !1;
    $dvt$$2$$.contains($DvtChartRefObjUtils$$) || ($dvt$$2$$.$addChild$($DvtChartRefObjUtils$$), $DvtChartPieRenderUtils$$ = !0);
    $DvtChartRefObjUtils$$.$setCSSStyle$($DvtChartAxisUtils$$);
    $DvtChartRefObjUtils$$.$setTextString$($DvtSparkChartEventManager$$.$_sliceLabelString$);
    $DvtChartPieRenderUtils$$ && $dvt$$2$$.$removeChildAt$($DvtChartPieLabelInfo$$);
    $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.$getMaxLabelWidth$($dvt$$2$$, $DvtSparkChartDefaults$$.$getX$(), $DvtSparkChartAutomation$$);
    $dvt$$2$$ = $DvtChartPieLabelUtils$$.$_getTextDimension$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, $DvtChartPieLabelInfo$$, $DvtSparkChartDefaults$$.$_initialNumLines$);
    $DvtSparkChartDefaults$$.$setWidth$($dvt$$2$$.x);
    $DvtSparkChartDefaults$$.getHeight() != $dvt$$2$$.y && $DvtSparkChartDefaults$$.$setHeight$($dvt$$2$$.y);
  };
  $DvtChartPieLabelUtils$$.$_generateInitialLayout$ = function $$DvtChartPieLabelUtils$$$$_generateInitialLayout$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = Array(2), $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = [], $DvtChartRefObjUtils$$ = $dvt$$2$$.$_slices$, $DvtChartAxisUtils$$ = $dvt$$2$$.$_frame$, $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartRefObjUtils$$.length;$DvtChartPieLabelInfo$$++) {
      var $DvtChartDataChangePyramidSlice$$ = $DvtChartRefObjUtils$$[$DvtChartPieLabelInfo$$], $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$getSeriesLabelPosition$($DvtChartDataChangePyramidSlice$$.$getSeriesIndex$());
      if (null == $DvtChartDataChangePyramidSlice$$.$_sliceLabel$ && "none" != $DvtChartSeriesEffectUtils$$ && "center" != $DvtChartSeriesEffectUtils$$ && !$DvtChartPieLabelUtils$$.$_skipSliceLabel$($dvt$$2$$, $DvtChartDataChangePyramidSlice$$)) {
        var $DvtChartSeriesEffectUtils$$ = $DvtChartPieLabelUtils$$.$_createLabel$($DvtChartDataChangePyramidSlice$$, !1), $DvtChartRangeMarker$$ = $DvtChartDataChangePyramidSlice$$.$getAngleStart$() + $DvtChartDataChangePyramidSlice$$.$getAngleExtent$() / 2;
        360 < $DvtChartRangeMarker$$ && ($DvtChartRangeMarker$$ -= 360);
        0 > $DvtChartRangeMarker$$ && ($DvtChartRangeMarker$$ += 360);
        var $DvtChartStyleUtils$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartRangeMarker$$, $dvt$$2$$.$getCenter$().x, $dvt$$2$$.$getCenter$().y, $dvt$$2$$.$_radiusX$ * $DvtChartPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$, $dvt$$2$$.$_radiusY$ * $DvtChartPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$), $DvtChartPolarBar$$ = $DvtChartPieLabelUtils$$.$_getTextDimension$($dvt$$2$$, $DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$.$getMaxLabelWidth$($dvt$$2$$, 
        $DvtChartStyleUtils$$.x, 90 <= $DvtChartRangeMarker$$ && 270 > $DvtChartRangeMarker$$), $DvtChartPieLabelUtils$$.$_MAX_LINES_PER_LABEL$);
        165 > $DvtChartRangeMarker$$ && 15 < $DvtChartRangeMarker$$ ? $DvtChartStyleUtils$$.y -= 1 * $DvtChartPolarBar$$.y : 15 > $DvtChartRangeMarker$$ || 345 < $DvtChartRangeMarker$$ ? ($DvtChartStyleUtils$$.y -= .5 * $DvtChartPolarBar$$.y, $DvtChartStyleUtils$$.x += .2 * $DvtChartPolarBar$$.y) : 165 < $DvtChartRangeMarker$$ && 195 > $DvtChartRangeMarker$$ && ($DvtChartStyleUtils$$.y -= .5 * $DvtChartPolarBar$$.y, $DvtChartStyleUtils$$.x -= .2 * $DvtChartPolarBar$$.y);
        var $DvtChartFunnelSlice$$ = $DvtChartPieLabelUtils$$.$_adjustForDepth$($DvtChartRangeMarker$$, $dvt$$2$$.getDepth());
        $DvtChartStyleUtils$$.y += $DvtChartFunnelSlice$$;
        1 == $DvtChartRefObjUtils$$.length && ($DvtChartStyleUtils$$.x -= $DvtChartPolarBar$$.x / 2);
        $DvtChartStyleUtils$$.y < $DvtChartAxisUtils$$.y || $DvtChartStyleUtils$$.y + $DvtChartPolarBar$$.y > $DvtChartAxisUtils$$.y + $DvtChartAxisUtils$$.$h$ || (90 <= $DvtChartRangeMarker$$ && 270 > $DvtChartRangeMarker$$ ? ($DvtChartSeriesEffectUtils$$.$alignRight$(), $DvtChartFunnelSlice$$ = $DvtChartRangeMarker$$ - 90, $DvtChartPieLabelUtils$$.$_createLabelInfo$($DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$, $DvtChartFunnelSlice$$, $DvtChartPolarBar$$, 
        $DvtChartStyleUtils$$, $DvtSparkChartDefaults$$)) : ($DvtChartFunnelSlice$$ = 90 >= $DvtChartRangeMarker$$ ? Math.abs(90 - $DvtChartRangeMarker$$) : 180 - ($DvtChartRangeMarker$$ - 270), $DvtChartPieLabelUtils$$.$_createLabelInfo$($DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$, $DvtChartFunnelSlice$$, $DvtChartPolarBar$$, $DvtChartStyleUtils$$, $DvtSparkChartAutomation$$)));
      }
    }
    $DvtSparkChartEventManager$$[0] = $DvtSparkChartDefaults$$;
    $DvtSparkChartEventManager$$[1] = $DvtSparkChartAutomation$$;
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartPieLabelUtils$$.$_createLabelInfo$ = function $$DvtChartPieLabelUtils$$$$_createLabelInfo$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$) {
    for (var $DvtChartDataChangePyramidSlice$$ = -1, $DvtChartPieRenderUtils$$, $DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtChartPieLabelUtils$$.length;$DvtChartSeriesEffectUtils$$++) {
      if ($DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$[$DvtChartSeriesEffectUtils$$], $DvtChartPieRenderUtils$$.$getPosition$() > $DvtSparkChartAutomation$$) {
        $DvtChartDataChangePyramidSlice$$ = $DvtChartSeriesEffectUtils$$;
        break;
      }
    }
    -1 == $DvtChartDataChangePyramidSlice$$ && ($DvtChartDataChangePyramidSlice$$ = $DvtChartPieLabelUtils$$.length);
    $DvtChartPieRenderUtils$$ = new $DvtChartPieLabelInfo$$;
    $DvtChartPieRenderUtils$$.setPosition($DvtSparkChartAutomation$$);
    $DvtChartPieRenderUtils$$.$setAngle$($DvtSparkChartDefaults$$);
    $DvtChartPieRenderUtils$$.$setSliceLabel$($DvtSparkChartEventManager$$);
    $DvtChartPieRenderUtils$$.$setSlice$($dvt$$2$$);
    $DvtChartPieRenderUtils$$.$setWidth$($DvtChartRefObjUtils$$.x);
    $DvtChartPieRenderUtils$$.$setHeight$($DvtChartRefObjUtils$$.y);
    $DvtChartPieRenderUtils$$.$setX$($DvtChartAxisUtils$$.x);
    $DvtChartPieRenderUtils$$.$setY$($DvtChartAxisUtils$$.y);
    $DvtChartPieLabelUtils$$.splice($DvtChartDataChangePyramidSlice$$, 0, $DvtChartPieRenderUtils$$);
  };
  $DvtChartPieLabelUtils$$.$_getTextDimension$ = function $$DvtChartPieLabelUtils$$$$_getTextDimension$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    $DvtSparkChartAutomation$$.$setMaxLines$($DvtChartAxisUtils$$);
    $DvtSparkChartDefaults$$ = $DvtChartPieLabelUtils$$.$_isTextLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? null : $DvtSparkChartAutomation$$.$getTextString$().length;
    return $dvt$$2$$.$TextUtils$.$fitText$($DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, Infinity, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? ($DvtSparkChartEventManager$$.$addChild$($DvtSparkChartAutomation$$), $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.$getDimensions$(), $DvtSparkChartEventManager$$.removeChild($DvtSparkChartAutomation$$), {x:$DvtChartRefObjUtils$$.$w$, y:$DvtChartRefObjUtils$$.$h$}) : {x:0, y:0};
  };
  $DvtChartPieLabelUtils$$.$_isTextLabel$ = function $$DvtChartPieLabelUtils$$$$_isTextLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$_customLabel$, $DvtSparkChartAutomation$$ = null != $dvt$$2$$.$getOptions$().dataLabel;
    return -1 != $dvt$$2$$.$getOptions$().styleDefaults.sliceLabelType.indexOf("text") || null != $DvtSparkChartDefaults$$ && "number" != typeof $DvtSparkChartDefaults$$ || $DvtSparkChartAutomation$$;
  };
  $DvtChartPieLabelUtils$$.$getMaxLabelWidth$ = function $$DvtChartPieLabelUtils$$$$getMaxLabelWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $dvt$$2$$ = $dvt$$2$$.$_frame$;
    return $DvtSparkChartDefaults$$ ? $DvtSparkChartEventManager$$ - $dvt$$2$$.x : $dvt$$2$$.x + $dvt$$2$$.$w$ - $DvtSparkChartEventManager$$;
  };
  $DvtChartPieLabelUtils$$.$getPieCenterOptions$ = function $$DvtChartPieLabelUtils$$$$getPieCenterOptions$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$JsonUtils$.clone($DvtSparkChartEventManager$$.pieCenter), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.pieCenterLabel;
    $DvtSparkChartAutomation$$ && ($DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.style, ($DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$.text) && ($DvtSparkChartDefaults$$.label = $DvtSparkChartAutomation$$), $DvtSparkChartEventManager$$ && ($DvtSparkChartDefaults$$.labelStyle = new $dvt$$2$$.$CSSStyle$($DvtSparkChartEventManager$$)));
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartPieLabelUtils$$.$_skipSliceLabel$ = function $$DvtChartPieLabelUtils$$$$_skipSliceLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return 3 > $DvtSparkChartEventManager$$.$getAngleExtent$() && 120 < $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$.$chart$);
  };
  var $DvtChartRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartRenderer$$.$_BUTTON_SIZE$ = 16;
  $DvtChartRenderer$$.$_BUTTON_PADDING$ = 5;
  $DvtChartRenderer$$.$_BUTTON_CORNER_DIST$ = 4;
  $DvtChartRenderer$$.$_BUTTON_OPACITY$ = .8;
  $DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$ = .05;
  $DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ = .2;
  $DvtChartRenderer$$.$render$ = function $$DvtChartRenderer$$$$render$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartRenderer$$.$_renderBackground$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if ($DvtChartDataUtils$$.$hasInvalidData$($dvt$$2$$)) {
      $DvtChartRenderer$$.$renderEmptyText$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    } else {
      $DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) || ($dvt$$2$$.$getOptions$()._maxOverflowCoord = $DvtSparkChartDefaults$$.x + $DvtSparkChartDefaults$$.$w$, $dvt$$2$$.$getOptions$()._minOverflowCoord = $DvtSparkChartDefaults$$.x);
      $DvtChartRenderer$$.$_addOuterGaps$($dvt$$2$$, $DvtSparkChartDefaults$$);
      var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.clone();
      $DvtChartRenderer$$.$_renderTitles$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_adjustAvailSpace$($DvtSparkChartDefaults$$);
      $DvtChartLegendRenderer$$.$render$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_adjustAvailSpace$($DvtSparkChartDefaults$$);
      var $DvtChartRefObjUtils$$ = $DvtChartRenderer$$.$_prerenderHorizScrollbar$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartAxisUtils$$ = $DvtChartRenderer$$.$_prerenderVertScrollbar$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_adjustAvailSpace$($DvtSparkChartDefaults$$);
      $dvt$$2$$.$__setAxisSpace$($DvtSparkChartDefaults$$.clone());
      $DvtChartAxisRenderer$$.$render$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_adjustAvailSpace$($DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_positionLegend$($dvt$$2$$.$legend$, $DvtSparkChartDefaults$$);
      $dvt$$2$$.$__setPlotAreaSpace$($DvtSparkChartDefaults$$.clone());
      $DvtChartRenderer$$.$_setEventHandlers$($dvt$$2$$);
      $DvtChartRenderer$$.$_renderScrollbars$($dvt$$2$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$);
      $DvtChartRenderer$$.$_updateTitles$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_renderPlotArea$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) && $DvtSparkChartEventManager$$.$addChild$($dvt$$2$$.$yAxis$);
      $DvtChartRenderer$$.$_renderDragButtons$($dvt$$2$$);
    }
  };
  $DvtChartRenderer$$.$_setEventHandlers$ = function $$DvtChartRenderer$$$$_setEventHandlers$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getEventManager$();
    if ($DvtChartTypeUtils$$.$hasAxes$($DvtSparkChartEventManager$$) && !$DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$)) {
      var $DvtChartRefObjUtils$$ = new $dvt$$2$$.$Rectangle$(0, 0, $DvtSparkChartEventManager$$.getWidth(), $DvtSparkChartEventManager$$.getHeight()), $DvtChartAxisUtils$$ = $DvtSparkChartEventManager$$.$_plotAreaSpace$, $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$_axisSpace$, $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$Rectangle$($DvtChartAxisUtils$$.x, $DvtChartPieLabelUtils$$.y, $DvtChartAxisUtils$$.$w$, $DvtChartPieLabelUtils$$.$h$), $DvtChartPieLabelUtils$$ = new $dvt$$2$$.$Rectangle$($DvtChartPieLabelUtils$$.x, 
      $DvtChartAxisUtils$$.y, $DvtChartPieLabelUtils$$.$w$, $DvtChartAxisUtils$$.$h$), $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$SolidFill$($DvtSparkChartDefaults$$.styleDefaults.marqueeColor), $DvtChartDataChangePyramidSlice$$ = new $dvt$$2$$.$SolidStroke$($DvtSparkChartDefaults$$.styleDefaults.marqueeBorderColor), $DvtChartSeriesEffectUtils$$;
      $DvtChartEventUtils$$.$isScrollable$($DvtSparkChartEventManager$$) && ($DvtChartSeriesEffectUtils$$ = $DvtChartEventUtils$$.$isDelayedScroll$($DvtSparkChartEventManager$$) ? $DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ : $DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$, $DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$PanZoomHandler$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$, $DvtChartRefObjUtils$$, $DvtChartSeriesEffectUtils$$), $DvtChartSeriesEffectUtils$$.$setPanCursor$($DvtSparkChartDefaults$$._resources.panCursorUp, 
      $DvtSparkChartDefaults$$._resources.panCursorDown), $DvtSparkChartAutomation$$.$setPanZoomHandler$($DvtChartSeriesEffectUtils$$), $DvtChartEventUtils$$.$isZoomable$($DvtSparkChartEventManager$$) && ($DvtChartSeriesEffectUtils$$ = $DvtChartEventUtils$$.$getZoomDirection$($DvtSparkChartEventManager$$), $DvtChartSeriesEffectUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) || "y" == $DvtChartSeriesEffectUtils$$ ? new $dvt$$2$$.$MarqueeHandler$($DvtSparkChartEventManager$$, 
      $DvtChartAxisUtils$$, $DvtChartRefObjUtils$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangePyramidSlice$$, !1, !0, null, $DvtChartPieLabelUtils$$) : $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$) || "x" == $DvtChartSeriesEffectUtils$$ ? new $dvt$$2$$.$MarqueeHandler$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$, $DvtChartRefObjUtils$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangePyramidSlice$$, !0, !1, $DvtChartPieLabelInfo$$, null) : new $dvt$$2$$.$MarqueeHandler$($DvtSparkChartEventManager$$, 
      $DvtChartAxisUtils$$, $DvtChartRefObjUtils$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangePyramidSlice$$, !0, !0, $DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$), $DvtSparkChartAutomation$$.$setMarqueeZoomHandler$($DvtChartSeriesEffectUtils$$)));
      "multiple" == $DvtSparkChartDefaults$$.selectionMode && ($DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$MarqueeHandler$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$, $DvtChartRefObjUtils$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangePyramidSlice$$, !0, !0, $DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$), $DvtSparkChartAutomation$$.$setMarqueeSelectHandler$($DvtChartSeriesEffectUtils$$));
    }
  };
  $DvtChartRenderer$$.$rerenderAxisAndPlotArea$ = function $$DvtChartRenderer$$$$rerenderAxisAndPlotArea$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if (!$DvtChartDataUtils$$.$hasInvalidData$($dvt$$2$$)) {
      var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_axisSpace$.clone(), $DvtSparkChartAutomation$$ = $dvt$$2$$.$getSelectionHandler$();
      if ($DvtSparkChartAutomation$$) {
        var $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.$getSelectedIds$()
      }
      var $DvtChartAxisUtils$$ = $dvt$$2$$.$__cacheChartFocus$();
      $dvt$$2$$.$__cleanUpAxisAndPlotArea$();
      $DvtChartAxisRenderer$$.$render$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_adjustAvailSpace$($DvtSparkChartDefaults$$);
      $dvt$$2$$.$__setPlotAreaSpace$($DvtSparkChartDefaults$$.clone());
      $DvtChartRenderer$$.$_renderPlotArea$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.$processInitialSelections$($DvtChartRefObjUtils$$, $dvt$$2$$.$getChartObjPeers$());
      $dvt$$2$$.$getEventManager$().$autoToggleZoomButton$();
      $DvtChartRenderer$$.$positionDragButtons$($dvt$$2$$);
      $dvt$$2$$.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$($dvt$$2$$));
      $dvt$$2$$.$__restoreChartFocus$($DvtChartAxisUtils$$);
    }
  };
  $DvtChartRenderer$$.$_renderBackground$ = function $$DvtChartRenderer$$$$_renderBackground$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.Rect($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$);
    $DvtSparkChartEventManager$$.$setInvisibleFill$();
    $DvtSparkChartDefaults$$.$addChild$($DvtSparkChartEventManager$$);
  };
  $DvtChartRenderer$$.$_addOuterGaps$ = function $$DvtChartRenderer$$$$_addOuterGaps$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtChartDefaults$$.$getGapWidth$($dvt$$2$$, $DvtSparkChartDefaults$$.layout.outerGapWidth), $DvtChartRefObjUtils$$ = $DvtChartDefaults$$.$getGapHeight$($dvt$$2$$, $DvtSparkChartDefaults$$.layout.outerGapHeight);
    if ("none" == $DvtSparkChartDefaults$$.styleDefaults.padding || $DvtChartTypeUtils$$.$isStandalonePlotArea$($dvt$$2$$) || $DvtChartTypeUtils$$.$isStandaloneXAxis$($dvt$$2$$) || $DvtChartTypeUtils$$.$isStandaloneYAxis$($dvt$$2$$) || $DvtChartTypeUtils$$.$isStandaloneY2Axis$($dvt$$2$$)) {
      $DvtSparkChartAutomation$$ = Math.min($DvtSparkChartAutomation$$, 1), $DvtChartRefObjUtils$$ = Math.min($DvtChartRefObjUtils$$, 1);
    }
    $DvtSparkChartEventManager$$.x += $DvtSparkChartAutomation$$;
    $DvtSparkChartEventManager$$.$w$ -= 2 * $DvtSparkChartAutomation$$;
    $DvtSparkChartEventManager$$.y += $DvtChartRefObjUtils$$;
    $DvtSparkChartEventManager$$.$h$ -= 2 * $DvtChartRefObjUtils$$;
  };
  $DvtChartRenderer$$.$_renderTitles$ = function $$DvtChartRenderer$$$$_renderTitles$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$getOptions$();
    if ($DvtChartRefObjUtils$$.title.text) {
      var $DvtChartAxisUtils$$ = $DvtChartTextUtils$$.$createText$($DvtSparkChartEventManager$$.$getEventManager$(), $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$.title.text, $DvtChartRefObjUtils$$.title.style, $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$), $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$ = null != $DvtChartRefObjUtils$$.title.hAlign ? $DvtChartRefObjUtils$$.title.hAlign : 
      $DvtChartRefObjUtils$$.title.halign, $DvtChartDataChangePyramidSlice$$ = "plotArea" == $DvtChartPieRenderUtils$$.substring(0, 8);
      $DvtChartAxisUtils$$ ? ($DvtChartPieLabelInfo$$ = $DvtChartAxisUtils$$.$getDimensions$(), $DvtChartPieLabelUtils$$ = $DvtChartPieLabelInfo$$.$h$, $DvtChartAxisUtils$$.$setAriaProperty$("hidden", null)) : ($DvtChartPieLabelUtils$$ = 0, $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$Rectangle$(0, 0, 0, 0));
      if ($DvtChartRefObjUtils$$.subtitle.text) {
        var $DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$OutputText$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartRefObjUtils$$.subtitle.text, $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y);
        $DvtChartSeriesEffectUtils$$.$setCSSStyle$($DvtChartRefObjUtils$$.subtitle.style);
        $DvtSparkChartDefaults$$.$addChild$($DvtChartSeriesEffectUtils$$);
        var $DvtChartRangeMarker$$ = $DvtChartSeriesEffectUtils$$.$measureDimensions$(), $DvtChartStyleUtils$$ = $DvtChartDefaults$$.$getGapWidth$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$.layout.titleSubtitleGapWidth), $DvtChartPolarBar$$ = $DvtChartPieLabelInfo$$.$w$ + $DvtChartStyleUtils$$ + $DvtChartRangeMarker$$.$w$;
        $DvtChartPolarBar$$ > $DvtSparkChartAutomation$$.$w$ || $DvtChartDataChangePyramidSlice$$ ? ($DvtChartStyleUtils$$ = $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$.layout.titleSubtitleGapHeight), $DvtChartSeriesEffectUtils$$.$setY$($DvtSparkChartAutomation$$.y + $DvtChartPieLabelUtils$$ + $DvtChartStyleUtils$$), $dvt$$2$$.$TextUtils$.$fitText$($DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$, $DvtSparkChartDefaults$$) && 
        ($DvtChartRangeMarker$$ = $DvtChartSeriesEffectUtils$$.$measureDimensions$(), $DvtChartPieLabelUtils$$ += $DvtChartRangeMarker$$.$h$ + $DvtChartStyleUtils$$, $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) && ($DvtChartSeriesEffectUtils$$ && $DvtChartSeriesEffectUtils$$.$setX$($DvtSparkChartAutomation$$.$w$ - $DvtChartRangeMarker$$.$w$), $DvtChartAxisUtils$$ && $DvtChartAxisUtils$$.$setX$($DvtSparkChartAutomation$$.$w$ - $DvtChartPieLabelInfo$$.$w$)))) : ($DvtChartSeriesEffectUtils$$.$setY$($DvtChartPieLabelInfo$$.$h$ - 
        $DvtChartRangeMarker$$.$h$ + $DvtSparkChartAutomation$$.y), $DvtChartAxisUtils$$ && ($dvt$$2$$.$LayoutUtils$.align($DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$, $DvtChartAxisUtils$$, $DvtChartPolarBar$$), $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? ($DvtChartSeriesEffectUtils$$.$setX$($DvtChartAxisUtils$$.$getX$()), $DvtChartAxisUtils$$ && $DvtChartAxisUtils$$.$setX$($DvtChartAxisUtils$$.$getX$() + $DvtChartRangeMarker$$.$w$ + $DvtChartStyleUtils$$)) : 
        $DvtChartSeriesEffectUtils$$.$setX$($DvtChartAxisUtils$$.$getX$() + $DvtChartPolarBar$$ - $DvtChartRangeMarker$$.$w$)));
        $DvtChartSeriesEffectUtils$$.$setAriaProperty$("hidden", null);
        $DvtSparkChartEventManager$$.$getEventManager$().$associate$($DvtChartSeriesEffectUtils$$, new $dvt$$2$$.$SimpleObjPeer$($DvtChartSeriesEffectUtils$$.$getUntruncatedTextString$()));
      } else {
        $dvt$$2$$.$LayoutUtils$.align($DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelInfo$$.$w$);
      }
      $DvtChartDataChangePyramidSlice$$ && ($DvtSparkChartEventManager$$.$_cache$.$putToCache$("title", $DvtChartAxisUtils$$), $DvtSparkChartEventManager$$.$_cache$.$putToCache$("subtitle", $DvtChartSeriesEffectUtils$$));
      $DvtChartAxisUtils$$ = "on" == $DvtChartRefObjUtils$$.titleSeparator.rendered ? $DvtChartRefObjUtils$$.layout.titleSeparatorGap : $DvtChartRefObjUtils$$.layout.titlePlotAreaGap;
      $DvtSparkChartAutomation$$.y += $DvtChartPieLabelUtils$$ + $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$);
      $DvtSparkChartAutomation$$.$h$ -= $DvtChartPieLabelUtils$$ + $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$);
      "on" == $DvtChartRefObjUtils$$.titleSeparator.rendered && ($DvtChartPieLabelUtils$$ = new $dvt$$2$$.$Line$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y, $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.y), $DvtChartAxisUtils$$ = new $dvt$$2$$.$Line$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y + 1, $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$, 
      $DvtSparkChartAutomation$$.y + 1), $DvtChartPieLabelUtils$$.$setSolidStroke$($DvtChartRefObjUtils$$.titleSeparator.upperColor), $DvtChartAxisUtils$$.$setSolidStroke$($DvtChartRefObjUtils$$.titleSeparator.lowerColor), $DvtSparkChartDefaults$$.$addChild$($DvtChartPieLabelUtils$$), $DvtSparkChartDefaults$$.$addChild$($DvtChartAxisUtils$$), $DvtChartPieLabelUtils$$ = 2 + $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$.layout.titlePlotAreaGap), $DvtSparkChartAutomation$$.y += 
      $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$.$h$ -= $DvtChartPieLabelUtils$$);
    }
    $DvtChartRefObjUtils$$.footnote.text && ($DvtSparkChartDefaults$$ = $DvtChartTextUtils$$.$createText$($DvtSparkChartEventManager$$.$getEventManager$(), $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$.footnote.text, $DvtChartRefObjUtils$$.footnote.style, $DvtSparkChartAutomation$$.x, 0, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$), $DvtChartPieLabelUtils$$ = null != $DvtChartRefObjUtils$$.footnote.hAlign ? $DvtChartRefObjUtils$$.footnote.hAlign : $DvtChartRefObjUtils$$.footnote.halign, 
    $DvtChartAxisUtils$$ = "plotArea" == $DvtChartPieLabelUtils$$.substring(0, 8), $DvtSparkChartDefaults$$ && ($DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.$getDimensions$(), $DvtSparkChartDefaults$$.$setY$($DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ - $DvtChartPieLabelInfo$$.$h$), $DvtSparkChartAutomation$$.$h$ -= $DvtChartPieLabelInfo$$.$h$ + $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$.layout.footnoteGap), $dvt$$2$$.$LayoutUtils$.align($DvtSparkChartAutomation$$, 
    $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$.$w$), $DvtSparkChartDefaults$$.$setAriaProperty$("hidden", null)), $DvtChartAxisUtils$$ && $DvtSparkChartEventManager$$.$_cache$.$putToCache$("footnote", $DvtSparkChartDefaults$$));
  };
  $DvtChartRenderer$$.$_updateTitles$ = function $$DvtChartRenderer$$$$_updateTitles$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $dvt$$2$$.$getOptions$(), $DvtChartAxisUtils$$ = null != $DvtChartRefObjUtils$$.title.hAlign ? $DvtChartRefObjUtils$$.title.hAlign : $DvtChartRefObjUtils$$.title.halign, $DvtChartPieLabelUtils$$ = null != $DvtChartRefObjUtils$$.footnote.hAlign ? $DvtChartRefObjUtils$$.footnote.hAlign : $DvtChartRefObjUtils$$.footnote.halign, $DvtChartPieLabelInfo$$ = $DvtChartRefObjUtils$$.title.text && "plotArea" == $DvtChartAxisUtils$$.substring(0, 8), $DvtChartRefObjUtils$$ = $DvtChartRefObjUtils$$.footnote.text && 
    "plotArea" == $DvtChartPieLabelUtils$$.substring(0, 8);
    $DvtSparkChartDefaults$$.x = $DvtSparkChartAutomation$$.x;
    $DvtSparkChartDefaults$$.$w$ = $DvtSparkChartAutomation$$.$w$;
    if ($DvtChartPieLabelInfo$$) {
      $DvtChartPieLabelInfo$$ = $dvt$$2$$.$_cache$.$getFromCache$("title");
      $DvtSparkChartAutomation$$ = $dvt$$2$$.$_cache$.$getFromCache$("subtitle");
      var $DvtChartPieRenderUtils$$ = $DvtChartPieLabelInfo$$.$getDimensions$();
      $DvtChartRenderer$$.$_alignTextToPlotArea$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartAxisUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$.$w$);
      $DvtSparkChartAutomation$$ && ($DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$.$getDimensions$(), $DvtChartRenderer$$.$_alignTextToPlotArea$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartAxisUtils$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$.$w$));
    }
    $DvtChartRefObjUtils$$ && ($dvt$$2$$ = $dvt$$2$$.$_cache$.$getFromCache$("footnote"), $DvtChartAxisUtils$$ = $dvt$$2$$.$getDimensions$(), $DvtChartRenderer$$.$_alignTextToPlotArea$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $dvt$$2$$, $DvtChartAxisUtils$$.$w$));
  };
  $DvtChartRenderer$$.$_alignTextToPlotArea$ = function $$DvtChartRenderer$$$$_alignTextToPlotArea$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    $dvt$$2$$.$TextUtils$.$fitText$($DvtChartRefObjUtils$$, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$, $DvtSparkChartEventManager$$) && ("plotAreaStart" == $DvtSparkChartAutomation$$ ? $dvt$$2$$.$LayoutUtils$.align($DvtSparkChartDefaults$$, "start", $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) : "plotAreaCenter" == $DvtSparkChartAutomation$$ ? $dvt$$2$$.$LayoutUtils$.align($DvtSparkChartDefaults$$, "center", $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) : "plotAreaEnd" == $DvtSparkChartAutomation$$ && 
    $dvt$$2$$.$LayoutUtils$.align($DvtSparkChartDefaults$$, "end", $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$));
  };
  $DvtChartRenderer$$.$_renderPlotArea$ = function $$DvtChartRenderer$$$$_renderPlotArea$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if ($DvtChartTypeUtils$$.$hasAxes$($DvtSparkChartEventManager$$)) {
      var $DvtChartRefObjUtils$$ = new $dvt$$2$$.$Container$($DvtSparkChartEventManager$$.$getCtx$());
      $DvtChartRefObjUtils$$.$setTranslate$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y);
      $DvtSparkChartDefaults$$.$addChild$($DvtChartRefObjUtils$$);
      $DvtSparkChartEventManager$$.$setPlotArea$($DvtChartRefObjUtils$$);
      $DvtChartPlotAreaRenderer$$.$render$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, new $dvt$$2$$.$Rectangle$(0, 0, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$));
    } else {
      $DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) ? ($DvtChartRefObjUtils$$ = new $DvtChartPie$$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), 0 < $DvtChartRefObjUtils$$.$_slices$.length ? ($DvtSparkChartDefaults$$.$addChild$($DvtChartRefObjUtils$$), $DvtSparkChartEventManager$$.$setPlotArea$($DvtChartRefObjUtils$$), $DvtChartRefObjUtils$$.$render$()) : $DvtChartRenderer$$.$renderEmptyText$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) : 
      $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$) ? $DvtChartFunnelRenderer$$.$render$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) : $DvtChartTypeUtils$$.$isPyramid$($DvtSparkChartEventManager$$) && $DvtChartPyramidRenderer$$.$render$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    }
    $DvtSparkChartAutomation$$.$w$ = 0;
    $DvtSparkChartAutomation$$.$h$ = 0;
  };
  $DvtChartRenderer$$.$renderEmptyText$ = function $$DvtChartRenderer$$$$renderEmptyText$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$getOptions$();
    if ($DvtChartDataUtils$$.$hasInvalidTimeData$($DvtSparkChartEventManager$$) && $DvtChartDataUtils$$.$hasData$($DvtSparkChartEventManager$$)) {
      var $DvtChartAxisUtils$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtChartRefObjUtils$$, "labelInvalidData", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "INVALID_DATA")
    } else {
      ($DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$.emptyText) || ($DvtChartAxisUtils$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtChartRefObjUtils$$, "labelNoData", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "NO_DATA"));
    }
    $dvt$$2$$.$TextUtils$.$renderEmptyText$($DvtSparkChartDefaults$$, $DvtChartAxisUtils$$, new $dvt$$2$$.$Rectangle$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$), $DvtSparkChartEventManager$$.$getEventManager$(), $DvtChartRefObjUtils$$._statusMessageStyle);
  };
  $DvtChartRenderer$$.$_prerenderHorizScrollbar$ = function $$DvtChartRenderer$$$$_prerenderHorizScrollbar$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartAutomation$$.$w$, $DvtChartAxisUtils$$ = 0;
    $DvtChartEventUtils$$.$isScrollable$($DvtSparkChartEventManager$$) && $DvtChartTypeUtils$$.$isHorizScrollbarSupported$($DvtSparkChartEventManager$$) ? $DvtChartStyleUtils$$.$isOverviewRendered$($DvtSparkChartEventManager$$) ? ($DvtChartAxisUtils$$ = Math.min($DvtChartStyleUtils$$.$getOverviewHeight$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$.$h$), 0 < $DvtChartAxisUtils$$ && ($DvtSparkChartEventManager$$.$overview$ = new $DvtChartOverview$$($DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$.$addChild$($DvtSparkChartEventManager$$.$overview$), 
    $dvt$$2$$.$LayoutUtils$.position($DvtSparkChartAutomation$$, "bottom", $DvtSparkChartEventManager$$.$overview$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, 10))) : ($DvtChartAxisUtils$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults._scrollbarHeight, $DvtSparkChartEventManager$$.$xScrollbar$ = new $dvt$$2$$.$SimpleScrollbar$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$.$addChild$($DvtSparkChartEventManager$$.$xScrollbar$), 
    $dvt$$2$$.$LayoutUtils$.position($DvtSparkChartAutomation$$, "bottom", $DvtSparkChartEventManager$$.$xScrollbar$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, 8), $DvtSparkChartEventManager$$.$overview$ = null) : $DvtSparkChartEventManager$$.$overview$ = null;
    return new $dvt$$2$$.$Dimension$($DvtChartRefObjUtils$$, $DvtChartAxisUtils$$);
  };
  $DvtChartRenderer$$.$_prerenderVertScrollbar$ = function $$DvtChartRenderer$$$$_prerenderVertScrollbar$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = 0, $DvtChartAxisUtils$$ = $DvtSparkChartAutomation$$.$h$;
    if ($DvtChartEventUtils$$.$isScrollable$($DvtSparkChartEventManager$$) && $DvtChartTypeUtils$$.$isVertScrollbarSupported$($DvtSparkChartEventManager$$)) {
      var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults._scrollbarHeight, $DvtChartPieLabelUtils$$ = new $dvt$$2$$.$SimpleScrollbar$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
      $DvtSparkChartDefaults$$.$addChild$($DvtChartPieLabelUtils$$);
      $dvt$$2$$.$LayoutUtils$.position($DvtSparkChartAutomation$$, $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? "right" : "left", $DvtChartPieLabelUtils$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, 8);
      $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? $DvtSparkChartEventManager$$.$xScrollbar$ = $DvtChartPieLabelUtils$$ : $DvtSparkChartEventManager$$.$yScrollbar$ = $DvtChartPieLabelUtils$$;
    }
    return new $dvt$$2$$.$Dimension$($DvtChartRefObjUtils$$, $DvtChartAxisUtils$$);
  };
  $DvtChartRenderer$$.$_renderScrollbars$ = function $$DvtChartRenderer$$$$_renderScrollbars$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartAxisUtils$$ = {color:$DvtChartRefObjUtils$$.styleDefaults._scrollbarHandleColor, backgroundColor:$DvtChartRefObjUtils$$.styleDefaults._scrollbarTrackColor}, $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$_plotAreaSpace$;
    $DvtSparkChartEventManager$$.$xScrollbar$ && ($DvtChartAxisUtils$$.min = $DvtSparkChartEventManager$$.$xAxis$.$getLinearGlobalMin$(), $DvtChartAxisUtils$$.max = $DvtSparkChartEventManager$$.$xAxis$.$getLinearGlobalMax$(), $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? ($DvtChartAxisUtils$$.isHorizontal = !1, $DvtChartAxisUtils$$.isReversed = !1, $DvtSparkChartEventManager$$.$xScrollbar$.$setTranslateY$($DvtChartPieLabelUtils$$.y), $DvtSparkChartEventManager$$.$xScrollbar$.$render$($DvtChartAxisUtils$$, 
    $DvtSparkChartAutomation$$.$w$, $DvtChartPieLabelUtils$$.$h$)) : ($DvtChartAxisUtils$$.isHorizontal = !0, $DvtChartAxisUtils$$.isReversed = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtSparkChartEventManager$$.$xScrollbar$.$setTranslateX$($DvtChartPieLabelUtils$$.x), $DvtSparkChartEventManager$$.$xScrollbar$.$render$($DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$.$w$, $DvtSparkChartDefaults$$.$h$)), $DvtSparkChartEventManager$$.$xScrollbar$.$setViewportRange$($DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMin$(), 
    $DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMax$()));
    $DvtSparkChartEventManager$$.$yScrollbar$ && ($DvtChartAxisUtils$$.min = $DvtSparkChartEventManager$$.$yAxis$.$getLinearGlobalMin$(), $DvtChartAxisUtils$$.max = $DvtSparkChartEventManager$$.$yAxis$.$getLinearGlobalMax$(), $DvtChartAxisUtils$$.isHorizontal = !1, $DvtChartAxisUtils$$.isReversed = !0, $DvtSparkChartEventManager$$.$yScrollbar$.$setTranslateY$($DvtChartPieLabelUtils$$.y), $DvtSparkChartEventManager$$.$yScrollbar$.$render$($DvtChartAxisUtils$$, $DvtSparkChartAutomation$$.$w$, $DvtChartPieLabelUtils$$.$h$), 
    $DvtSparkChartEventManager$$.$yScrollbar$.$setViewportRange$($DvtSparkChartEventManager$$.$yAxis$.$getLinearViewportMin$(), $DvtSparkChartEventManager$$.$yAxis$.$getLinearViewportMax$()));
    $DvtSparkChartEventManager$$.$overview$ && ($DvtSparkChartAutomation$$ = {startTime:$DvtSparkChartEventManager$$.$xAxis$.$getLinearGlobalMin$(), endTime:$DvtSparkChartEventManager$$.$xAxis$.$getLinearGlobalMax$(), viewportStartTime:$DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMin$(), viewportEndTime:$DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMax$(), minimumWindowSize:$DvtSparkChartEventManager$$.$xAxis$.$getInfo$().$getMinimumExtent$(), chart:$dvt$$2$$.$JsonUtils$.clone($DvtChartRefObjUtils$$)}, 
    $DvtChartEventUtils$$.$isZoomable$($DvtSparkChartEventManager$$) || ($DvtSparkChartAutomation$$.featuresOff = "zoom"), $DvtSparkChartAutomation$$.chart._minOverflowCoord = $DvtChartRefObjUtils$$._minOverflowCoord - $DvtChartPieLabelUtils$$.x, $DvtSparkChartAutomation$$.chart._maxOverflowCoord = $DvtChartRefObjUtils$$._maxOverflowCoord - $DvtChartPieLabelUtils$$.x, $DvtSparkChartEventManager$$.$overview$.$setTranslateX$($DvtChartPieLabelUtils$$.x), $DvtSparkChartEventManager$$.$overview$.$render$($DvtSparkChartAutomation$$, 
    $DvtChartPieLabelUtils$$.$w$, $DvtSparkChartDefaults$$.$h$), $DvtSparkChartEventManager$$.$overview$.$setViewportRange$($DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMin$(), $DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMax$()));
  };
  $DvtChartRenderer$$.$_positionLegend$ = function $$DvtChartRenderer$$$$_positionLegend$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ($dvt$$2$$) {
      var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getDimensions$(), $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$().orientation;
      "vertical" == $DvtSparkChartAutomation$$ && $DvtSparkChartDefaults$$.$h$ <= $DvtSparkChartEventManager$$.$h$ ? $dvt$$2$$.$setTranslateY$(Math.round($DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$ / 2 - $DvtSparkChartDefaults$$.$h$ / 2)) : "horizontal" == $DvtSparkChartAutomation$$ && $DvtSparkChartDefaults$$.$w$ <= $DvtSparkChartEventManager$$.$w$ && $dvt$$2$$.$setTranslateX$(Math.round($DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$ / 2 - $DvtSparkChartDefaults$$.$w$ / 
      2));
    }
  };
  $DvtChartRenderer$$.$_renderDragButtons$ = function $$DvtChartRenderer$$$$_renderDragButtons$$($DvtSparkChartEventManager$$) {
    if ($DvtChartTypeUtils$$.$hasAxes$($DvtSparkChartEventManager$$) && !$DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$)) {
      var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getEventManager$(), $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$.dragMode;
      if ("user" != $DvtChartRefObjUtils$$) {
        "pan" == $DvtChartRefObjUtils$$ ? $DvtSparkChartAutomation$$.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_PAN$) : "zoom" == $DvtChartRefObjUtils$$ ? $DvtSparkChartAutomation$$.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_ZOOM$) : "select" == $DvtChartRefObjUtils$$ ? $DvtSparkChartAutomation$$.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_SELECT$) : $DvtSparkChartAutomation$$.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_OFF$);
      } else {
        var $DvtChartRefObjUtils$$ = $dvt$$2$$.$Agent$.$isTouchDevice$(), $DvtChartAxisUtils$$ = $DvtChartEventUtils$$.$isScrollable$($DvtSparkChartEventManager$$);
        $DvtSparkChartEventManager$$.$dragButtons$ = new $dvt$$2$$.$Container$($DvtSparkChartEventManager$$.$getCtx$());
        var $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$._resources, $DvtChartPieLabelInfo$$;
        "multiple" == $DvtSparkChartDefaults$$.selectionMode && ($DvtChartRefObjUtils$$ || $DvtChartAxisUtils$$) && ($DvtChartPieLabelInfo$$ = $DvtChartAxisUtils$$ && ($DvtChartRefObjUtils$$ || $DvtChartEventUtils$$.$isZoomable$($DvtSparkChartEventManager$$)) ? "end" : "solo", $DvtSparkChartAutomation$$.$selectButton$ = $DvtChartRenderer$$.$_createDragButton$($DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$.$dragButtons$, $DvtChartPieLabelUtils$$.selectUp, $DvtChartPieLabelUtils$$.selectDown, 
        $DvtSparkChartAutomation$$.$onSelectButtonClick$, $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$), $DvtChartPieLabelInfo$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, "tooltipSelect", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "MARQUEE_SELECT"), $DvtSparkChartAutomation$$.$selectButton$.$setTooltip$($DvtChartPieLabelInfo$$), $DvtSparkChartAutomation$$.$associate$($DvtSparkChartAutomation$$.$selectButton$, $DvtSparkChartAutomation$$.$selectButton$));
        $DvtChartAxisUtils$$ && ($DvtChartPieLabelInfo$$ = null == $DvtSparkChartAutomation$$.$selectButton$ ? "solo" : "start", $DvtChartRefObjUtils$$ ? ($DvtSparkChartAutomation$$.$panButton$ = $DvtChartRenderer$$.$_createDragButton$($DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$.$dragButtons$, $DvtChartPieLabelUtils$$.panUp, $DvtChartPieLabelUtils$$.panDown, $DvtSparkChartAutomation$$.$onPanButtonClick$, $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$), $DvtChartPieLabelInfo$$ = 
        $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, "tooltipPan", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "PAN"), $DvtSparkChartAutomation$$.$panButton$.$setTooltip$($DvtChartPieLabelInfo$$), $DvtSparkChartAutomation$$.$associate$($DvtSparkChartAutomation$$.$panButton$, $DvtSparkChartAutomation$$.$panButton$)) : $DvtChartEventUtils$$.$isZoomable$($DvtSparkChartEventManager$$) && $DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartEventManager$$) && ($DvtSparkChartAutomation$$.$zoomButton$ = 
        $DvtChartRenderer$$.$_createDragButton$($DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$.$dragButtons$, $DvtChartPieLabelUtils$$.zoomUp, $DvtChartPieLabelUtils$$.zoomDown, $DvtSparkChartAutomation$$.$onZoomButtonClick$, $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$), $DvtChartPieLabelInfo$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, "tooltipZoom", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "MARQUEE_ZOOM"), $DvtSparkChartAutomation$$.$zoomButton$.$setTooltip$($DvtChartPieLabelInfo$$), 
        $DvtSparkChartAutomation$$.$associate$($DvtSparkChartAutomation$$.$zoomButton$, $DvtSparkChartAutomation$$.$zoomButton$)));
        $DvtChartRenderer$$.$positionDragButtons$($DvtSparkChartEventManager$$);
        $DvtSparkChartAutomation$$.$setDragMode$(null);
        0 < $DvtSparkChartEventManager$$.$dragButtons$.$getNumChildren$() && ($DvtSparkChartEventManager$$.$addChild$($DvtSparkChartEventManager$$.$dragButtons$), $DvtChartRefObjUtils$$ ? $DvtChartAxisUtils$$ && ($DvtSparkChartAutomation$$.$panButton$.$setToggled$(!0), $DvtSparkChartAutomation$$.$onPanButtonClick$()) : $DvtSparkChartEventManager$$.$hideDragButtons$(), $DvtSparkChartEventManager$$.$dragButtons$.setCursor("default"));
      }
    }
  };
  $DvtChartRenderer$$.$_positionDragButton$ = function $$DvtChartRenderer$$$$_positionDragButton$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? ($DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.x + $DvtChartRenderer$$.$_BUTTON_PADDING$, $DvtSparkChartAutomation$$.x += $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartRenderer$$.$_BUTTON_PADDING$) : $DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ - $DvtChartRenderer$$.$_BUTTON_SIZE$ - $DvtChartRenderer$$.$_BUTTON_PADDING$;
    $DvtSparkChartAutomation$$.$w$ -= $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartRenderer$$.$_BUTTON_PADDING$;
    $DvtSparkChartDefaults$$.$setTranslate$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$.y + $DvtChartRenderer$$.$_BUTTON_PADDING$);
  };
  $DvtChartRenderer$$.$positionDragButtons$ = function $$DvtChartRenderer$$$$positionDragButtons$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_plotAreaSpace$.clone();
    $DvtSparkChartEventManager$$.x += $DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
    $DvtSparkChartEventManager$$.$w$ -= 2 * $DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
    $DvtSparkChartEventManager$$.y += $DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getEventManager$();
    $DvtSparkChartDefaults$$.$selectButton$ && $DvtChartRenderer$$.$_positionDragButton$($dvt$$2$$, $DvtSparkChartDefaults$$.$selectButton$, $DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$.$panButton$ && $DvtChartRenderer$$.$_positionDragButton$($dvt$$2$$, $DvtSparkChartDefaults$$.$panButton$, $DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$.$zoomButton$ && $DvtChartRenderer$$.$_positionDragButton$($dvt$$2$$, $DvtSparkChartDefaults$$.$zoomButton$, $DvtSparkChartEventManager$$);
  };
  $DvtChartRenderer$$.$_createDragButtonBackground$ = function $$DvtChartRenderer$$$$_createDragButtonBackground$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = 2, $DvtChartRefObjUtils$$ = 2, $DvtChartAxisUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$);
    "start" == $DvtSparkChartDefaults$$ ? $DvtChartAxisUtils$$ ? $DvtSparkChartAutomation$$ = 0 : $DvtChartRefObjUtils$$ = 0 : "end" == $DvtSparkChartDefaults$$ && ($DvtChartAxisUtils$$ ? $DvtChartRefObjUtils$$ = 0 : $DvtSparkChartAutomation$$ = 0);
    var $DvtChartAxisUtils$$ = -$DvtChartRenderer$$.$_BUTTON_PADDING$, $DvtChartPieLabelUtils$$ = $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartRenderer$$.$_BUTTON_PADDING$, $DvtSparkChartAutomation$$ = $dvt$$2$$.$PathUtils$.$roundedRectangle$($DvtChartAxisUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartRefObjUtils$$, $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Path$($DvtSparkChartEventManager$$, 
    $DvtSparkChartAutomation$$);
    1 < $dvt$$2$$.$Agent$.$getDevicePixelRatio$() ? ($DvtSparkChartAutomation$$.$setSolidStroke$("#D8DEE3", 1, 1), $DvtSparkChartAutomation$$.$setPixelHinting$()) : $DvtSparkChartAutomation$$.$setSolidStroke$("#B8BDC1", 1, 1);
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartRenderer$$.$_createDragButton$ = function $$DvtChartRenderer$$$$_createDragButton$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) {
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getCtx$();
    var $DvtChartPieRenderUtils$$ = $DvtChartRenderer$$.$_createDragButtonBackground$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$);
    $DvtChartPieRenderUtils$$.$setSolidFill$("#FFFFFF", $DvtChartRenderer$$.$_BUTTON_OPACITY$);
    $DvtChartPieRenderUtils$$.$addChild$(new $dvt$$2$$.Image($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, 0, 0, $DvtChartRenderer$$.$_BUTTON_SIZE$, $DvtChartRenderer$$.$_BUTTON_SIZE$));
    var $DvtChartDataChangePyramidSlice$$ = $DvtChartRenderer$$.$_createDragButtonBackground$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$);
    $DvtChartDataChangePyramidSlice$$.$setSolidFill$("#E2E3E4", $DvtChartRenderer$$.$_BUTTON_OPACITY$);
    $DvtChartDataChangePyramidSlice$$.$addChild$(new $dvt$$2$$.Image($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, 0, 0, $DvtChartRenderer$$.$_BUTTON_SIZE$, $DvtChartRenderer$$.$_BUTTON_SIZE$));
    var $DvtChartSeriesEffectUtils$$ = $DvtChartRenderer$$.$_createDragButtonBackground$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$);
    $DvtChartSeriesEffectUtils$$.$setFill$(new $dvt$$2$$.$LinearGradientFill$(90, ["#0527CE", "#0586F0"], [$DvtChartRenderer$$.$_BUTTON_OPACITY$, $DvtChartRenderer$$.$_BUTTON_OPACITY$]));
    $DvtChartSeriesEffectUtils$$.$addChild$(new $dvt$$2$$.Image($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, 0, 0, $DvtChartRenderer$$.$_BUTTON_SIZE$, $DvtChartRenderer$$.$_BUTTON_SIZE$));
    $DvtSparkChartAutomation$$ = $DvtChartRenderer$$.$_createDragButtonBackground$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$);
    $DvtSparkChartAutomation$$.$setSolidFill$("#0586F0", $DvtChartRenderer$$.$_BUTTON_OPACITY$);
    $DvtSparkChartAutomation$$.$addChild$(new $dvt$$2$$.Image($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, 0, 0, $DvtChartRenderer$$.$_BUTTON_SIZE$, $DvtChartRenderer$$.$_BUTTON_SIZE$));
    $DvtChartRefObjUtils$$ = new $dvt$$2$$.$Button$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$, null, null, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$);
    $DvtChartRefObjUtils$$.$setOverDownState$($DvtSparkChartAutomation$$);
    $DvtChartRefObjUtils$$.$setToggleEnabled$();
    $DvtSparkChartDefaults$$.$addChild$($DvtChartRefObjUtils$$);
    $DvtChartRefObjUtils$$.$addEvtListener$($dvt$$2$$.MouseEvent.$MOUSEDOWN$, function($dvt$$2$$) {
      $dvt$$2$$.stopPropagation();
    });
    $dvt$$2$$.$Agent$.$isTouchDevice$() && ($DvtSparkChartDefaults$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$), $DvtChartAxisUtils$$ = 2 * $DvtChartRenderer$$.$_BUTTON_PADDING$, $DvtChartPieLabelInfo$$ = "solo" == $DvtChartPieLabelInfo$$ ? new $dvt$$2$$.Rect($DvtSparkChartEventManager$$, -$DvtChartAxisUtils$$, -$DvtChartAxisUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartAxisUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartAxisUtils$$) : "start" == $DvtChartPieLabelInfo$$ && 
    !$DvtSparkChartDefaults$$ || "end" == $DvtChartPieLabelInfo$$ && $DvtSparkChartDefaults$$ ? new $dvt$$2$$.Rect($DvtSparkChartEventManager$$, -$DvtChartAxisUtils$$, -$DvtChartAxisUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $DvtChartAxisUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartAxisUtils$$) : new $dvt$$2$$.Rect($DvtSparkChartEventManager$$, -.5 * $DvtChartAxisUtils$$, -$DvtChartAxisUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $DvtChartAxisUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 
    2 * $DvtChartAxisUtils$$), $DvtChartPieLabelInfo$$.$setInvisibleFill$(), $DvtChartRefObjUtils$$.$addChild$($DvtChartPieLabelInfo$$));
    return $DvtChartRefObjUtils$$;
  };
  $DvtChartRenderer$$.$_adjustAvailSpace$ = function $$DvtChartRenderer$$$$_adjustAvailSpace$$($dvt$$2$$) {
    $dvt$$2$$.x = Math.round($dvt$$2$$.x);
    $dvt$$2$$.y = Math.round($dvt$$2$$.y);
    $dvt$$2$$.$w$ = Math.round($dvt$$2$$.$w$);
    $dvt$$2$$.$h$ = Math.round($dvt$$2$$.$h$);
  };
  $DvtChartRenderer$$.$renderDataCursor$ = function $$DvtChartRenderer$$$$renderDataCursor$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = null, $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartAutomation$$ = $dvt$$2$$.$getEventManager$();
    if ($DvtChartTooltipUtils$$.$isDataCursorEnabled$($dvt$$2$$)) {
      $DvtSparkChartEventManager$$ = new $DvtChartDataCursor$$($dvt$$2$$.$getCtx$(), $DvtSparkChartDefaults$$.styleDefaults.dataCursor, $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$));
      $DvtSparkChartEventManager$$.$setBehavior$($DvtChartTooltipUtils$$.$getDataCursorBehavior$($dvt$$2$$));
      $dvt$$2$$.$addChild$($DvtSparkChartEventManager$$);
      var $DvtChartRefObjUtils$$ = new $DvtChartDataCursorHandler$$($dvt$$2$$, $DvtSparkChartEventManager$$);
      $DvtSparkChartAutomation$$.$setDataCursorHandler$($DvtChartRefObjUtils$$);
      $dvt$$2$$.$positionDataCursor$($DvtSparkChartDefaults$$.dataCursorPosition);
    } else {
      $DvtSparkChartAutomation$$.$setDataCursorHandler$(null);
    }
    return $DvtSparkChartEventManager$$;
  };
  var $DvtChartAxisRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAxisRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartAxisRenderer$$.$render$ = function $$DvtChartAxisRenderer$$$$render$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartTypeUtils$$.$hasAxes$($dvt$$2$$) && ($DvtChartAxisUtils$$.$applyInitialZooming$($dvt$$2$$, $DvtSparkChartDefaults$$), $DvtChartTypeUtils$$.$isBubble$($dvt$$2$$) && $DvtChartMarkerUtils$$.$calcBubbleSizes$($dvt$$2$$, $DvtSparkChartDefaults$$), $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? $DvtChartAxisRenderer$$.$_renderPolar$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) : $DvtChartAxisRenderer$$.$_renderCartesian$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$));
  };
  $DvtChartAxisRenderer$$.$_renderCartesian$ = function $$DvtChartAxisRenderer$$$$_renderCartesian$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$isSplitDualY$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$.clone(), $DvtChartDataChangePyramidSlice$$ = $DvtChartAxisUtils$$.$getYAxisPosition$($DvtSparkChartEventManager$$), $DvtChartSeriesEffectUtils$$ = $DvtChartAxisUtils$$.$getY2AxisPosition$($DvtSparkChartEventManager$$);
    $DvtChartAxisRenderer$$.$_addAxisGaps$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
    $DvtChartPieLabelInfo$$ && $DvtChartDataChangePyramidSlice$$ == $DvtChartSeriesEffectUtils$$ && ($DvtChartRefObjUtils$$.yAxis._skipHighestTick = $DvtChartPieLabelUtils$$, $DvtChartRefObjUtils$$.y2Axis._skipHighestTick = !$DvtChartPieLabelUtils$$);
    var $DvtChartRangeMarker$$ = $DvtChartAxisRenderer$$.$_createYAxis$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$), $DvtChartPolarBar$$ = $DvtChartAxisRenderer$$.$_createY2Axis$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$);
    ($DvtChartRefObjUtils$$ = !$DvtChartPieLabelInfo$$ && "on" == $DvtChartRefObjUtils$$.y2Axis.alignTickMarks && null == $DvtChartRefObjUtils$$.y2Axis.step) && $DvtChartRangeMarker$$ && $DvtChartPolarBar$$ && ($DvtChartAxisRenderer$$.$_alignYAxes$($DvtChartRangeMarker$$, $DvtChartPolarBar$$), $DvtChartPieLabelUtils$$ || ($DvtChartPolarBar$$.$dim$ = $DvtChartAxisRenderer$$.$_getPreferredSize$($DvtSparkChartEventManager$$, $DvtChartPolarBar$$.axis, $DvtSparkChartEventManager$$.$y2Axis$, $DvtChartPolarBar$$.options, 
    "y2", $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$)));
    var $DvtChartFunnelSlice$$ = $DvtChartAxisUtils$$.$getTickLabelGapSize$($DvtSparkChartEventManager$$, "y"), $DvtChartDataCursor$$ = $DvtChartAxisUtils$$.$getTickLabelGapSize$($DvtSparkChartEventManager$$, "y2");
    $DvtChartPieLabelInfo$$ && $DvtChartDataChangePyramidSlice$$ == $DvtChartSeriesEffectUtils$$ ? ($DvtChartPieLabelUtils$$ ? ($DvtChartDataChangePyramidSlice$$ = Math.max($DvtChartRangeMarker$$.$dim$.$h$ + $DvtChartFunnelSlice$$, $DvtChartPolarBar$$.$dim$.$h$ + $DvtChartDataCursor$$), $DvtChartRangeMarker$$.$dim$.$h$ = $DvtChartDataChangePyramidSlice$$ - $DvtChartFunnelSlice$$, $DvtChartPolarBar$$.$dim$.$h$ = $DvtChartDataChangePyramidSlice$$ - $DvtChartDataCursor$$) : ($DvtChartDataChangePyramidSlice$$ = 
    Math.max($DvtChartRangeMarker$$.$dim$.$w$ + $DvtChartFunnelSlice$$, $DvtChartPolarBar$$.$dim$.$w$ + $DvtChartDataCursor$$), $DvtChartRangeMarker$$.$dim$.$w$ = $DvtChartDataChangePyramidSlice$$ - $DvtChartFunnelSlice$$, $DvtChartPolarBar$$.$dim$.$w$ = $DvtChartDataChangePyramidSlice$$ - $DvtChartDataCursor$$), $DvtChartAxisRenderer$$.$_positionAxis$($DvtSparkChartAutomation$$.clone(), $DvtChartRangeMarker$$, $DvtChartFunnelSlice$$)) : $DvtChartAxisRenderer$$.$_positionAxis$($DvtSparkChartAutomation$$, 
    $DvtChartRangeMarker$$, $DvtChartFunnelSlice$$);
    $DvtChartAxisRenderer$$.$_positionAxis$($DvtSparkChartAutomation$$, $DvtChartPolarBar$$, $DvtChartDataCursor$$);
    $DvtChartDataChangePyramidSlice$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$);
    "pixel" == $DvtChartStyleUtils$$.$getBarSpacing$($DvtSparkChartEventManager$$) && $DvtChartTypeUtils$$.$isBar$($DvtSparkChartEventManager$$) && $DvtSparkChartAutomation$$.$w$ > $DvtChartDataChangePyramidSlice$$ && ($DvtChartDataChangePyramidSlice$$ *= Math.floor($DvtSparkChartAutomation$$.$w$ / $DvtChartDataChangePyramidSlice$$), $DvtSparkChartAutomation$$.x += ($DvtSparkChartAutomation$$.$w$ - $DvtChartDataChangePyramidSlice$$) / 2, $DvtSparkChartAutomation$$.$w$ = $DvtChartDataChangePyramidSlice$$);
    $DvtSparkChartDefaults$$ = $DvtChartAxisRenderer$$.$_createXAxis$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$);
    $DvtSparkChartDefaults$$.axis.$render$($DvtSparkChartDefaults$$.options, $DvtSparkChartDefaults$$.$dim$.$w$, $DvtSparkChartDefaults$$.$dim$.$h$);
    $DvtChartAxisRenderer$$.$_positionAxis$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartAxisUtils$$.$getTickLabelGapSize$($DvtSparkChartEventManager$$, "x"));
    $DvtChartDataChangePyramidSlice$$ = $DvtChartStyleUtils$$.$getSplitterPosition$($DvtSparkChartEventManager$$);
    $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$());
    $DvtChartPieRenderUtils$$ = $DvtChartAxisRenderer$$.$_getSplitAvailSpace$($DvtSparkChartAutomation$$, $DvtChartDataChangePyramidSlice$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$ && $DvtChartSeriesEffectUtils$$);
    $DvtChartDataChangePyramidSlice$$ = $DvtChartAxisRenderer$$.$_getSplitAvailSpace$($DvtSparkChartAutomation$$, 1 - $DvtChartDataChangePyramidSlice$$, $DvtChartPieLabelUtils$$, !$DvtChartPieLabelUtils$$ || !$DvtChartSeriesEffectUtils$$);
    $DvtChartPieLabelUtils$$ ? ($DvtChartRangeMarker$$ && ($DvtChartRangeMarker$$.axis.$setTranslateX$($DvtSparkChartAutomation$$.x), $DvtChartPieLabelInfo$$ ? $DvtChartRangeMarker$$.axis.$render$($DvtChartRangeMarker$$.options, $DvtChartPieRenderUtils$$.$w$, $DvtChartRangeMarker$$.$dim$.$h$, $DvtChartPieRenderUtils$$.x, 0) : $DvtChartRangeMarker$$.axis.$render$($DvtChartRangeMarker$$.options, $DvtSparkChartAutomation$$.$w$, $DvtChartRangeMarker$$.$dim$.$h$)), $DvtChartRefObjUtils$$ && $DvtChartRangeMarker$$ && 
    $DvtChartPolarBar$$ && $DvtChartAxisRenderer$$.$_alignYAxes$($DvtChartRangeMarker$$, $DvtChartPolarBar$$), $DvtChartPolarBar$$ && ($DvtChartPolarBar$$.axis.$setTranslateX$($DvtSparkChartAutomation$$.x), $DvtChartPieLabelInfo$$ ? $DvtChartPolarBar$$.axis.$render$($DvtChartPolarBar$$.options, $DvtChartDataChangePyramidSlice$$.$w$, $DvtChartPolarBar$$.$dim$.$h$, $DvtChartDataChangePyramidSlice$$.x, 0) : $DvtChartPolarBar$$.axis.$render$($DvtChartPolarBar$$.options, $DvtSparkChartAutomation$$.$w$, 
    $DvtChartPolarBar$$.$dim$.$h$)), $DvtChartAxisRenderer$$.$_setOverflow$($DvtSparkChartAutomation$$, $DvtChartRangeMarker$$, $DvtSparkChartDefaults$$)) : ($DvtChartRangeMarker$$ && ($DvtChartPieLabelInfo$$ ? $DvtChartRangeMarker$$.axis.$render$($DvtChartRangeMarker$$.options, $DvtChartRangeMarker$$.$dim$.$w$, $DvtChartPieRenderUtils$$.$h$, 0, $DvtChartPieRenderUtils$$.y) : $DvtChartRangeMarker$$.axis.$render$($DvtChartRangeMarker$$.options, $DvtChartRangeMarker$$.$dim$.$w$, $DvtSparkChartAutomation$$.$h$)), 
    $DvtChartRefObjUtils$$ && $DvtChartRangeMarker$$ && $DvtChartPolarBar$$ && $DvtChartAxisRenderer$$.$_alignYAxes$($DvtChartRangeMarker$$, $DvtChartPolarBar$$), $DvtChartPolarBar$$ && ($DvtChartPieLabelInfo$$ ? $DvtChartPolarBar$$.axis.$render$($DvtChartPolarBar$$.options, $DvtChartPolarBar$$.$dim$.$w$, $DvtChartDataChangePyramidSlice$$.$h$, 0, $DvtChartDataChangePyramidSlice$$.y) : $DvtChartPolarBar$$.axis.$render$($DvtChartPolarBar$$.options, $DvtChartPolarBar$$.$dim$.$w$, $DvtSparkChartAutomation$$.$h$)), 
    $DvtChartAxisRenderer$$.$_setOverflow$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$));
    $DvtChartAxisRenderer$$.$_storeAxes$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$);
  };
  $DvtChartAxisRenderer$$.$_renderPolar$ = function $$DvtChartAxisRenderer$$$$_renderPolar$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartAxisRenderer$$.$_createXAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$.axis.$setTranslateX$($DvtSparkChartDefaults$$.x);
    $DvtSparkChartAutomation$$.axis.$setTranslateY$($DvtSparkChartDefaults$$.y);
    $DvtSparkChartAutomation$$.axis.$render$($DvtSparkChartAutomation$$.options, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$);
    $DvtSparkChartEventManager$$ = $DvtChartAxisRenderer$$.$_createYAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.axis.$setTranslateX$($DvtSparkChartDefaults$$.x);
    $DvtSparkChartEventManager$$.axis.$setTranslateY$($DvtSparkChartDefaults$$.y);
    $DvtSparkChartEventManager$$.axis.$render$($DvtSparkChartEventManager$$.options, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$);
    $DvtChartAxisRenderer$$.$_storeAxes$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$);
  };
  $DvtChartAxisRenderer$$.$_createXAxis$ = function $$DvtChartAxisRenderer$$$$_createXAxis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartPieLabelInfo$$ = $DvtChartAxisUtils$$.$getXAxisPosition$($DvtSparkChartEventManager$$), $DvtChartDataChangePyramidSlice$$ = $dvt$$2$$.$JsonUtils$.clone($DvtChartPieLabelUtils$$.xAxis);
    $DvtChartDataChangePyramidSlice$$.position = $DvtChartPieLabelInfo$$;
    $DvtChartDataChangePyramidSlice$$.isStandalone = $DvtChartTypeUtils$$.$isStandaloneXAxis$($DvtSparkChartEventManager$$);
    $DvtChartDataChangePyramidSlice$$.groupSeparators = $DvtChartPieLabelUtils$$.styleDefaults.groupSeparators;
    $DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($DvtChartDataChangePyramidSlice$$, "x", $DvtSparkChartEventManager$$);
    $DvtChartDataChangePyramidSlice$$.groups = $DvtChartPieLabelUtils$$.groups;
    $DvtChartDataChangePyramidSlice$$._groupWidthRatios = $DvtChartAxisUtils$$.$getGroupWidthRatios$($DvtSparkChartEventManager$$);
    $DvtChartDataChangePyramidSlice$$.timeAxisType = $DvtChartAxisUtils$$.$getTimeAxisType$($DvtSparkChartEventManager$$);
    $DvtChartDataChangePyramidSlice$$._environment = $DvtChartPieLabelUtils$$._environment;
    $DvtChartDataChangePyramidSlice$$._locale = $DvtChartPieLabelUtils$$._locale;
    $DvtChartDataChangePyramidSlice$$.drilling = $DvtChartPieLabelUtils$$.drilling;
    $DvtChartDataChangePyramidSlice$$._isGroupAxis = $DvtChartAxisUtils$$.$hasGroupAxis$($DvtSparkChartEventManager$$);
    var $DvtChartPieRenderUtils$$ = "top" == $DvtChartPieLabelInfo$$ || "bottom" == $DvtChartPieLabelInfo$$, $DvtChartSeriesEffectUtils$$ = $DvtChartAxisUtils$$.$isGridShifted$($DvtSparkChartEventManager$$);
    "tangential" == $DvtChartPieLabelInfo$$ && $DvtChartAxisUtils$$.$hasGroupAxis$($DvtSparkChartEventManager$$) ? $DvtChartSeriesEffectUtils$$ ? ($DvtChartDataChangePyramidSlice$$.startGroupOffset = .5, $DvtChartDataChangePyramidSlice$$.endGroupOffset = .5) : $DvtChartDataChangePyramidSlice$$.endGroupOffset = 1 : ($DvtChartPieLabelInfo$$ = $DvtChartAxisUtils$$.$getAxisOffset$($DvtSparkChartEventManager$$), $DvtChartDataChangePyramidSlice$$.startGroupOffset = $DvtChartPieLabelInfo$$, $DvtChartDataChangePyramidSlice$$.endGroupOffset = 
    $DvtChartPieLabelInfo$$, $DvtChartTypeUtils$$.$hasUncenteredSeries$($DvtSparkChartEventManager$$) && ($DvtChartDataChangePyramidSlice$$.endGroupOffset += 1), $DvtChartEventUtils$$.$isScrollable$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$) || ($DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartAxisUtils$$.$isAxisRendered$($DvtSparkChartEventManager$$, "y") && $DvtChartAxisUtils$$.$isTickLabelInside$($DvtSparkChartEventManager$$, 
    "y") && ($DvtChartDataChangePyramidSlice$$[($DvtChartPieRenderUtils$$ ? "start" : "end") + "GroupOffset"] += .04 * $DvtChartPieLabelInfo$$), $DvtChartAxisUtils$$.$isAxisRendered$($DvtSparkChartEventManager$$, "y2") && $DvtChartAxisUtils$$.$isTickLabelInside$($DvtSparkChartEventManager$$, "y2") && ($DvtChartDataChangePyramidSlice$$[($DvtChartPieRenderUtils$$ ? "end" : "start") + "GroupOffset"] += .04 * $DvtChartPieLabelInfo$$)));
    $DvtChartDataChangePyramidSlice$$.leftBuffer = $DvtChartPieRenderUtils$$ ? $DvtSparkChartAutomation$$.x - $DvtChartRefObjUtils$$.x : 0;
    $DvtChartDataChangePyramidSlice$$.rightBuffer = $DvtChartPieRenderUtils$$ ? $DvtChartRefObjUtils$$.$w$ + $DvtChartRefObjUtils$$.x - ($DvtSparkChartAutomation$$.$w$ + $DvtSparkChartAutomation$$.x) : 0;
    $DvtChartDataChangePyramidSlice$$._renderGridAtLabels = !$DvtChartSeriesEffectUtils$$ || $DvtChartAxisUtils$$.$hasTimeAxis$($DvtSparkChartEventManager$$);
    $DvtChartPieRenderUtils$$ = new $DvtChartAxis$$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$.$addChild$($DvtChartPieRenderUtils$$);
    $DvtSparkChartEventManager$$ = $DvtChartAxisRenderer$$.$_getPreferredSize$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$.$xAxis$, $DvtChartDataChangePyramidSlice$$, "x", $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
    $DvtChartDataChangePyramidSlice$$._minOverflowCoord = $DvtChartPieLabelUtils$$._minOverflowCoord - $DvtSparkChartAutomation$$.x;
    $DvtChartDataChangePyramidSlice$$._maxOverflowCoord = $DvtChartPieLabelUtils$$._maxOverflowCoord - $DvtSparkChartAutomation$$.x;
    return {axis:$DvtChartPieRenderUtils$$, options:$DvtChartDataChangePyramidSlice$$, $dim$:$DvtSparkChartEventManager$$};
  };
  $DvtChartAxisRenderer$$.$_createYAxis$ = function $$DvtChartAxisRenderer$$$$_createYAxis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getOptions$();
    if ($DvtChartTypeUtils$$.$hasY2DataOnly$($DvtSparkChartEventManager$$)) {
      return null;
    }
    var $DvtChartPieLabelInfo$$ = $dvt$$2$$.$JsonUtils$.clone($DvtChartPieLabelUtils$$.yAxis);
    $DvtChartPieLabelInfo$$.position = $DvtChartAxisUtils$$.$getYAxisPosition$($DvtSparkChartEventManager$$);
    $DvtChartPieLabelInfo$$.isStandalone = $DvtChartTypeUtils$$.$isStandaloneYAxis$($DvtSparkChartEventManager$$);
    $DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($DvtChartPieLabelInfo$$, "y", $DvtSparkChartEventManager$$);
    $DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$($DvtChartPieLabelInfo$$, $DvtSparkChartEventManager$$);
    var $DvtChartDataChangePyramidSlice$$ = new $DvtChartAxis$$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$.$addChild$($DvtChartDataChangePyramidSlice$$);
    $DvtSparkChartDefaults$$ = $DvtChartAxisRenderer$$.$_getPreferredSize$($DvtSparkChartEventManager$$, $DvtChartDataChangePyramidSlice$$, $DvtSparkChartEventManager$$.$yAxis$, $DvtChartPieLabelInfo$$, "y", $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
    $DvtChartAxisRenderer$$.$_adjustYAxisForLabels$($DvtChartDataChangePyramidSlice$$, $DvtChartPieLabelInfo$$, $DvtSparkChartEventManager$$, "y");
    $DvtChartPieLabelUtils$$.yAxis.min = $DvtChartPieLabelInfo$$.min;
    $DvtChartPieLabelUtils$$.yAxis.max = $DvtChartPieLabelInfo$$.max;
    return {axis:$DvtChartDataChangePyramidSlice$$, options:$DvtChartPieLabelInfo$$, $dim$:$DvtSparkChartDefaults$$};
  };
  $DvtChartAxisRenderer$$.$_createY2Axis$ = function $$DvtChartAxisRenderer$$$$_createY2Axis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getOptions$();
    if ($DvtChartTypeUtils$$.$hasY2Data$($DvtSparkChartEventManager$$)) {
      var $DvtChartPieLabelInfo$$ = $dvt$$2$$.$JsonUtils$.clone($DvtChartPieLabelUtils$$.y2Axis);
      $DvtChartPieLabelInfo$$.position = $DvtChartAxisUtils$$.$getY2AxisPosition$($DvtSparkChartEventManager$$);
      $DvtChartPieLabelInfo$$.isStandalone = $DvtChartTypeUtils$$.$isStandaloneY2Axis$($DvtSparkChartEventManager$$);
      $DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($DvtChartPieLabelInfo$$, "y2", $DvtSparkChartEventManager$$);
      $DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$($DvtChartPieLabelInfo$$, $DvtSparkChartEventManager$$);
      var $DvtChartDataChangePyramidSlice$$ = new $DvtChartAxis$$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
      $DvtSparkChartDefaults$$.$addChild$($DvtChartDataChangePyramidSlice$$);
      $DvtSparkChartDefaults$$ = $DvtChartAxisRenderer$$.$_getPreferredSize$($DvtSparkChartEventManager$$, $DvtChartDataChangePyramidSlice$$, $DvtSparkChartEventManager$$.$y2Axis$, $DvtChartPieLabelInfo$$, "y2", $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
      $DvtChartAxisRenderer$$.$_adjustYAxisForLabels$($DvtChartDataChangePyramidSlice$$, $DvtChartPieLabelInfo$$, $DvtSparkChartEventManager$$, "y2");
      $DvtChartPieLabelUtils$$.y2Axis.min = $DvtChartPieLabelInfo$$.min;
      $DvtChartPieLabelUtils$$.y2Axis.max = $DvtChartPieLabelInfo$$.max;
      return {axis:$DvtChartDataChangePyramidSlice$$, options:$DvtChartPieLabelInfo$$, $dim$:$DvtSparkChartDefaults$$};
    }
  };
  $DvtChartAxisRenderer$$.$_addCommonAxisAttributes$ = function $$DvtChartAxisRenderer$$$$_addCommonAxisAttributes$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getOptions$();
    $dvt$$2$$.skin = $DvtSparkChartAutomation$$.skin;
    $dvt$$2$$.tickLabel.position = $DvtChartAxisUtils$$.$isTickLabelInside$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$) ? "inside" : "outside";
    $dvt$$2$$.baselineScaling = $DvtChartAxisUtils$$.$getBaselineScaling$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$);
    if ($DvtChartAxisUtils$$.$isTickLabelInside$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$) || "tangential" == $dvt$$2$$.position) {
      $dvt$$2$$._skipHighestTick = !0;
    }
    $dvt$$2$$.zoomAndScroll = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$) ? "off" : $DvtSparkChartAutomation$$.zoomAndScroll;
    $dvt$$2$$._isOverview = $DvtChartTypeUtils$$.$isOverview$($DvtSparkChartDefaults$$);
    "x" == $DvtSparkChartEventManager$$ && $DvtChartAxisUtils$$.$hasGroupAxis$($DvtSparkChartDefaults$$) || ($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getMinMaxValue$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$), $dvt$$2$$.dataMin = null != $dvt$$2$$.dataMin ? $dvt$$2$$.dataMin : $DvtSparkChartEventManager$$.min, $dvt$$2$$.dataMax = null != $dvt$$2$$.dataMax ? $dvt$$2$$.dataMax : $DvtSparkChartEventManager$$.max);
    $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$) && ($dvt$$2$$.polarGridShape = $DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartDefaults$$) ? "polygon" : "circle", $dvt$$2$$._radius = $DvtSparkChartDefaults$$.$getRadius$());
    $dvt$$2$$.dnd = $DvtSparkChartAutomation$$.dnd;
  };
  $DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$ = function $$DvtChartAxisRenderer$$$$_addCommonYAxisAttributes$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartEventManager$$.timeAxisType = "disabled";
    $DvtChartEventUtils$$.$isLiveScroll$($DvtSparkChartDefaults$$) && $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartDefaults$$) && !$DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$) && ($DvtSparkChartEventManager$$._continuousExtent = "on");
    if ($DvtSparkChartEventManager$$.isStandalone) {
      $DvtSparkChartEventManager$$.leftBuffer = 0, $DvtSparkChartEventManager$$.rightBuffer = 0;
    } else {
      if ($DvtChartTypeUtils$$.$isSplitDualY$($DvtSparkChartDefaults$$)) {
        $DvtSparkChartEventManager$$.leftBuffer = Infinity, $DvtSparkChartEventManager$$.rightBuffer = Infinity;
      } else {
        var $DvtSparkChartAutomation$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartDefaults$$.$getCtx$());
        $DvtSparkChartEventManager$$.leftBuffer = $DvtSparkChartAutomation$$ ? 0 : $dvt$$2$$.$Axis$.$MINIMUM_AXIS_BUFFER$;
        $DvtSparkChartEventManager$$.rightBuffer = $DvtSparkChartAutomation$$ ? $dvt$$2$$.$Axis$.$MINIMUM_AXIS_BUFFER$ : 0;
      }
    }
  };
  $DvtChartAxisRenderer$$.$_adjustYAxisForLabels$ = function $$DvtChartAxisRenderer$$$$_adjustYAxisForLabels$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.$getOptions$();
    if ($DvtChartAxisUtils$$.$isYAdjustmentNeeded$($DvtSparkChartAutomation$$)) {
      var $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.styleDefaults.dataLabelStyle, $DvtChartDataChangePyramidSlice$$ = $DvtChartPieLabelUtils$$.styleDefaults.stackLabelStyle, $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getInfo$(), $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.$isStackLabelRendered$($DvtSparkChartAutomation$$), $DvtChartPieLabelInfo$$ = $dvt$$2$$.$TextUtils$.$getTextStringHeight$($DvtSparkChartAutomation$$.$getCtx$(), $DvtChartPieRenderUtils$$ ? $DvtChartDataChangePyramidSlice$$ : 
      $DvtChartPieLabelInfo$$), $DvtChartDataChangePyramidSlice$$ = 0;
      "log" == $DvtSparkChartDefaults$$.scale ? $DvtChartDataChangePyramidSlice$$ = $DvtSparkChartEventManager$$.$getUnboundedValueAt$($DvtSparkChartEventManager$$.$getUnboundedCoordAt$($DvtChartPieLabelUtils$$.$DataMax$) - $DvtChartPieLabelInfo$$) - $DvtChartPieLabelUtils$$.$DataMax$ : ($DvtSparkChartEventManager$$ = 1, $DvtChartTypeUtils$$.$isSplitDualY$($DvtSparkChartAutomation$$) && ($DvtSparkChartEventManager$$ = "y" == $DvtChartRefObjUtils$$ ? $DvtChartStyleUtils$$.$getSplitterPosition$($DvtSparkChartAutomation$$) : 
      1 - $DvtChartStyleUtils$$.$getSplitterPosition$($DvtSparkChartAutomation$$)), $DvtChartDataChangePyramidSlice$$ = Math.abs($DvtChartPieLabelUtils$$.$MaxValue$ - $DvtChartPieLabelUtils$$.$MinValue$) / (Math.abs($DvtChartPieLabelUtils$$.$getEndCoord$() - $DvtChartPieLabelUtils$$.$getStartCoord$()) * $DvtSparkChartEventManager$$) * $DvtChartPieLabelInfo$$);
      $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartAutomation$$) && ($DvtChartDataChangePyramidSlice$$ *= 4);
      $DvtChartPieLabelUtils$$.$DataMin$ - $DvtChartPieLabelUtils$$.$GlobalMin$ < $DvtChartDataChangePyramidSlice$$ && 0 > $DvtChartPieLabelUtils$$.$DataMin$ && ($DvtSparkChartDefaults$$.dataMin -= $DvtChartDataChangePyramidSlice$$);
      $DvtChartPieLabelUtils$$.$GlobalMax$ - $DvtChartPieLabelUtils$$.$DataMax$ < $DvtChartDataChangePyramidSlice$$ && 0 < $DvtChartPieLabelUtils$$.$DataMax$ && ($DvtSparkChartDefaults$$.dataMax += $DvtChartDataChangePyramidSlice$$);
    }
  };
  $DvtChartAxisRenderer$$.$_getPreferredSize$ = function $$DvtChartAxisRenderer$$$$_getPreferredSize$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangePyramidSlice$$) {
    var $DvtChartPieRenderUtils$$ = $DvtChartRefObjUtils$$.isStandalone, $DvtChartSeriesEffectUtils$$ = $DvtChartRefObjUtils$$.position, $DvtChartRangeMarker$$ = "top" == $DvtChartSeriesEffectUtils$$ || "bottom" == $DvtChartSeriesEffectUtils$$, $DvtChartPolarBar$$ = $DvtChartAxisUtils$$.$getTickLabelGapSize$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$), $DvtChartFunnelSlice$$ = $DvtChartRefObjUtils$$.maxSize, $DvtChartDataCursor$$ = $DvtChartRefObjUtils$$.size;
    $DvtChartPieLabelUtils$$ = $DvtChartPieLabelInfo$$.$w$;
    var $DvtChartDataChange$$ = $DvtChartPieLabelInfo$$.$h$;
    if ("radial" == $DvtChartSeriesEffectUtils$$ || "tangential" == $DvtChartSeriesEffectUtils$$) {
      $DvtChartDataChange$$ = $DvtChartPieLabelUtils$$ = 0;
    } else {
      if ("off" == $DvtChartRefObjUtils$$.rendered) {
        $DvtChartRangeMarker$$ ? $DvtChartDataChange$$ = 0 : $DvtChartPieLabelUtils$$ = 0;
      } else {
        if ($DvtChartPieRenderUtils$$) {
          $DvtChartRangeMarker$$ ? $DvtChartDataChange$$ = $DvtChartPieLabelInfo$$.$h$ - $DvtChartPolarBar$$ : $DvtChartPieLabelUtils$$ = $DvtChartPieLabelInfo$$.$w$ - $DvtChartPolarBar$$;
        } else {
          if (null != $DvtChartDataCursor$$) {
            $DvtChartRangeMarker$$ ? $DvtChartDataChange$$ = $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartDataCursor$$, $DvtChartDataChangePyramidSlice$$.$h$) - $DvtChartPolarBar$$ : $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartDataCursor$$, $DvtChartDataChangePyramidSlice$$.$w$) - $DvtChartPolarBar$$;
          } else {
            if ($DvtSparkChartEventManager$$.$getOptions$()._duringAnimation) {
              $DvtChartRangeMarker$$ ? ($DvtChartPieLabelInfo$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtChartRefObjUtils$$._startOverflow = $DvtChartPieLabelInfo$$ ? $DvtSparkChartAutomation$$.$getRightOverflow$() : $DvtSparkChartAutomation$$.$getLeftOverflow$(), $DvtChartRefObjUtils$$._endOverflow = $DvtChartPieLabelInfo$$ ? $DvtSparkChartAutomation$$.$getLeftOverflow$() : $DvtSparkChartAutomation$$.$getRightOverflow$(), $DvtChartDataChange$$ = $DvtSparkChartAutomation$$.getHeight()) : 
              $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.getWidth();
            } else {
              return $DvtChartRangeMarker$$ ? $DvtSparkChartDefaults$$.$getPreferredSize$($DvtChartRefObjUtils$$, $DvtChartPieLabelInfo$$.$w$, $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartFunnelSlice$$, $DvtChartDataChangePyramidSlice$$.$h$) - $DvtChartPolarBar$$) : $DvtSparkChartDefaults$$.$getPreferredSize$($DvtChartRefObjUtils$$, $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartFunnelSlice$$, $DvtChartDataChangePyramidSlice$$.$w$) - $DvtChartPolarBar$$, $DvtChartPieLabelInfo$$.$h$);
            }
          }
        }
      }
    }
    $DvtChartAxisUtils$$.$isYAdjustmentNeeded$($DvtSparkChartEventManager$$) && $DvtSparkChartDefaults$$.$getPreferredSize$($DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$, $DvtChartDataChange$$);
    return new $dvt$$2$$.$Dimension$($DvtChartPieLabelUtils$$, $DvtChartDataChange$$);
  };
  $DvtChartAxisRenderer$$.$_addAxisGaps$ = function $$DvtChartAxisRenderer$$$$_addAxisGaps$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$), $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$.$getYAxisPosition$($dvt$$2$$), $DvtChartRefObjUtils$$ = $DvtChartAxisUtils$$.$getY2AxisPosition$($dvt$$2$$), $DvtChartPieLabelUtils$$ = $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "x"), $DvtChartPieLabelInfo$$ = $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y"), $DvtChartDataChangePyramidSlice$$ = $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y2"), $DvtChartPieRenderUtils$$ = 
    $dvt$$2$$.$getOptions$().layout.verticalAxisGap, $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$ ? $DvtChartPieRenderUtils$$ * $DvtChartAxisUtils$$.$getGapScalingFactor$($dvt$$2$$, "x") : $DvtChartPieRenderUtils$$ * Math.max($DvtChartAxisUtils$$.$getGapScalingFactor$($dvt$$2$$, "y"), $DvtChartAxisUtils$$.$getGapScalingFactor$($dvt$$2$$, "y2")), $DvtChartPieRenderUtils$$ = Math.ceil($DvtChartPieRenderUtils$$);
    (!$DvtSparkChartDefaults$$ || "top" == $DvtSparkChartAutomation$$ && $DvtChartPieLabelInfo$$ || "top" == $DvtChartRefObjUtils$$ && $DvtChartDataChangePyramidSlice$$) && $DvtSparkChartDefaults$$ || ($DvtSparkChartEventManager$$.y += $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$.$h$ -= $DvtChartPieRenderUtils$$);
    (!$DvtSparkChartDefaults$$ || "bottom" == $DvtSparkChartAutomation$$ && $DvtChartPieLabelInfo$$ || "bottom" == $DvtChartRefObjUtils$$ && $DvtChartDataChangePyramidSlice$$) && ($DvtSparkChartDefaults$$ || $DvtChartPieLabelUtils$$) || ($DvtSparkChartEventManager$$.$h$ -= $DvtChartPieRenderUtils$$);
  };
  $DvtChartAxisRenderer$$.$_positionAxis$ = function $$DvtChartAxisRenderer$$$$_positionAxis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartDefaults$$ && $dvt$$2$$.$LayoutUtils$.position($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.options.position, $DvtSparkChartDefaults$$.axis, $DvtSparkChartDefaults$$.$dim$.$w$, $DvtSparkChartDefaults$$.$dim$.$h$, $DvtSparkChartAutomation$$);
  };
  $DvtChartAxisRenderer$$.$_alignYAxes$ = function $$DvtChartAxisRenderer$$$$_alignYAxes$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.axis.$getInfo$();
    if ($DvtSparkChartDefaults$$) {
      var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getMinorTickCount$(), $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.options;
      $DvtChartRefObjUtils$$._majorTickCount = $DvtSparkChartDefaults$$.$getMajorTickCount$();
      $DvtChartRefObjUtils$$._minorTickCount = $DvtSparkChartAutomation$$;
    }
  };
  $DvtChartAxisRenderer$$.$_getSplitAvailSpace$ = function $$DvtChartAxisRenderer$$$$_getSplitAvailSpace$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $dvt$$2$$.clone();
    $DvtSparkChartDefaults$$ ? ($DvtChartRefObjUtils$$.$w$ = $dvt$$2$$.$w$ * $DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$.x = $DvtSparkChartAutomation$$ ? $dvt$$2$$.$w$ * (1 - $DvtSparkChartEventManager$$) : 0) : ($DvtChartRefObjUtils$$.$h$ = $dvt$$2$$.$h$ * $DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$.y = $DvtSparkChartAutomation$$ ? $dvt$$2$$.$h$ * (1 - $DvtSparkChartEventManager$$) : 0);
    return $DvtChartRefObjUtils$$;
  };
  $DvtChartAxisRenderer$$.$_setOverflow$ = function $$DvtChartAxisRenderer$$$$_setOverflow$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if ($DvtSparkChartEventManager$$) {
      var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.axis.$getLeftOverflow$();
      $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.axis.$getRightOverflow$();
      $dvt$$2$$.x += $DvtChartRefObjUtils$$;
      $dvt$$2$$.$w$ -= $DvtChartRefObjUtils$$ + $DvtSparkChartEventManager$$;
      $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.axis.$setTranslateX$($DvtSparkChartDefaults$$.axis.$getTranslateX$() + ("left" == $DvtSparkChartDefaults$$.options.position ? $DvtChartRefObjUtils$$ : -$DvtSparkChartEventManager$$));
      $DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.axis.$setTranslateX$($DvtSparkChartAutomation$$.axis.$getTranslateX$() + ("left" == $DvtSparkChartAutomation$$.options.position ? $DvtChartRefObjUtils$$ : -$DvtSparkChartEventManager$$));
    }
  };
  $DvtChartAxisRenderer$$.$_storeAxes$ = function $$DvtChartAxisRenderer$$$$_storeAxes$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $dvt$$2$$.$xAxis$ && ($dvt$$2$$.$xAxis$.$destroy$(), $dvt$$2$$.removeChild($dvt$$2$$.$xAxis$));
    $dvt$$2$$.$yAxis$ && ($dvt$$2$$.$yAxis$.$destroy$(), $dvt$$2$$.removeChild($dvt$$2$$.$yAxis$));
    $dvt$$2$$.$y2Axis$ && ($dvt$$2$$.$y2Axis$.$destroy$(), $dvt$$2$$.removeChild($dvt$$2$$.$y2Axis$));
    $dvt$$2$$.$xAxis$ = $DvtSparkChartEventManager$$.axis;
    $dvt$$2$$.$yAxis$ = $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$.axis : null;
    $dvt$$2$$.$y2Axis$ = $DvtSparkChartAutomation$$ ? $DvtSparkChartAutomation$$.axis : null;
  };
  var $DvtChartLegendRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartLegendRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartLegendRenderer$$.$_DEFAULT_LINE_WIDTH_WITH_MARKER$ = 2;
  $DvtChartLegendRenderer$$.$render$ = function $$DvtChartLegendRenderer$$$$render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$.legend.position;
    if (!("off" == $DvtChartRefObjUtils$$.legend.rendered || "auto" == $DvtChartRefObjUtils$$.legend.rendered && $DvtSparkChartEventManager$$.$_optionsCache$.$getFromCache$("hasLargeSeriesCount"))) {
      var $DvtChartPieLabelUtils$$ = $dvt$$2$$.$JsonUtils$.clone($DvtChartRefObjUtils$$.legend);
      delete $DvtChartPieLabelUtils$$.position;
      $DvtChartPieLabelUtils$$.skin = $DvtChartRefObjUtils$$.skin;
      $DvtChartPieLabelUtils$$.hideAndShowBehavior = $DvtChartEventUtils$$.$getHideAndShowBehavior$($DvtSparkChartEventManager$$);
      $DvtChartPieLabelUtils$$.hoverBehavior = $DvtChartEventUtils$$.$getHoverBehavior$($DvtSparkChartEventManager$$);
      $DvtChartPieLabelUtils$$.hoverBehaviorDelay = $DvtChartStyleUtils$$.$getHoverBehaviorDelay$($DvtSparkChartEventManager$$);
      $DvtChartPieLabelUtils$$.hiddenCategories = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$);
      $DvtChartPieLabelUtils$$.highlightedCategories = $DvtChartStyleUtils$$.$getHighlightedCategories$($DvtSparkChartEventManager$$);
      $DvtChartPieLabelUtils$$.dnd = $DvtChartRefObjUtils$$.dnd;
      $DvtChartPieLabelUtils$$._dropColor = $DvtChartRefObjUtils$$._dropColor;
      "auto" == $DvtChartAxisUtils$$ && ($DvtChartAxisUtils$$ = $DvtSparkChartAutomation$$.$w$ >= $DvtSparkChartAutomation$$.$h$ ? "end" : "bottom");
      var $DvtChartPieLabelInfo$$ = "top" == $DvtChartAxisUtils$$ || "bottom" == $DvtChartAxisUtils$$;
      $DvtChartPieLabelUtils$$.orientation = $DvtChartPieLabelInfo$$ ? "horizontal" : "vertical";
      "start" == $DvtChartAxisUtils$$ && ($DvtChartPieLabelUtils$$.halign = "end");
      if ("start" == $DvtChartAxisUtils$$ || "end" == $DvtChartAxisUtils$$) {
        $DvtChartPieLabelUtils$$.valign = "middle";
      }
      "top" == $DvtChartAxisUtils$$ && ($DvtChartPieLabelUtils$$.valign = "bottom");
      if ("top" == $DvtChartAxisUtils$$ || "bottom" == $DvtChartAxisUtils$$) {
        $DvtChartPieLabelUtils$$.halign = "center";
      }
      $DvtChartLegendRenderer$$.$_addLegendData$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$);
      if (0 != $DvtChartPieLabelUtils$$.sections.length) {
        var $DvtChartDataChangePyramidSlice$$ = $dvt$$2$$.$Legend$.newInstance($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
        null != $DvtSparkChartEventManager$$.getId() && $DvtChartDataChangePyramidSlice$$.setId($DvtSparkChartEventManager$$.getId() + "legend");
        $DvtSparkChartDefaults$$.$addChild$($DvtChartDataChangePyramidSlice$$);
        var $DvtChartPieRenderUtils$$;
        if (null != $DvtChartPieLabelUtils$$.size) {
          $DvtChartPieRenderUtils$$ = $DvtChartPieLabelInfo$$ ? new $dvt$$2$$.$Dimension$($DvtSparkChartAutomation$$.$w$, $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartPieLabelUtils$$.size, $DvtSparkChartAutomation$$.$h$)) : new $dvt$$2$$.$Dimension$($DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartPieLabelUtils$$.size, $DvtSparkChartAutomation$$.$w$), $DvtSparkChartAutomation$$.$h$);
        } else {
          $DvtChartPieRenderUtils$$ = $DvtChartPieLabelInfo$$ ? $DvtSparkChartAutomation$$.$w$ : $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartPieLabelUtils$$.maxSize, $DvtSparkChartAutomation$$.$w$);
          var $DvtChartSeriesEffectUtils$$ = $DvtChartPieLabelInfo$$ ? $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartPieLabelUtils$$.maxSize, $DvtSparkChartAutomation$$.$h$) : $DvtSparkChartAutomation$$.$h$;
          $DvtChartPieRenderUtils$$ = $DvtChartDataChangePyramidSlice$$.$getPreferredSize$($DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartSeriesEffectUtils$$);
        }
        $DvtChartDataChangePyramidSlice$$.$render$($DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$.$w$, $DvtChartPieRenderUtils$$.$h$);
        $DvtChartPieLabelUtils$$ = $DvtChartPieLabelInfo$$ ? $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$.layout.legendGapHeight) : $DvtChartDefaults$$.$getGapWidth$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$.layout.legendGapWidth);
        $dvt$$2$$.$LayoutUtils$.position($DvtSparkChartAutomation$$, $DvtChartAxisUtils$$, $DvtChartDataChangePyramidSlice$$, $DvtChartPieRenderUtils$$.$w$, $DvtChartPieRenderUtils$$.$h$, $DvtChartPieLabelUtils$$);
        $DvtSparkChartAutomation$$ = $DvtChartDataChangePyramidSlice$$.$_bounds$;
        $DvtChartPieLabelInfo$$ = $DvtChartDataChangePyramidSlice$$.$localToStage$(new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y));
        $DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$) || ($DvtChartPieRenderUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), "end" == $DvtChartAxisUtils$$ ? $DvtChartPieRenderUtils$$ ? $DvtChartRefObjUtils$$._minOverflowCoord = $DvtChartPieLabelInfo$$.x + $DvtSparkChartAutomation$$.$w$ + $DvtChartPieLabelUtils$$ / 2 : $DvtChartRefObjUtils$$._maxOverflowCoord = $DvtChartPieLabelInfo$$.x - $DvtChartPieLabelUtils$$ / 2 : "start" == $DvtChartAxisUtils$$ && 
        ($DvtChartPieRenderUtils$$ ? $DvtChartRefObjUtils$$._maxOverflowCoord = $DvtChartPieLabelInfo$$.x - $DvtChartPieLabelUtils$$ / 2 : $DvtChartRefObjUtils$$._minOverflowCoord = $DvtChartPieLabelInfo$$.x + $DvtSparkChartAutomation$$.$w$ + $DvtChartPieLabelUtils$$ / 2));
        $DvtSparkChartEventManager$$.$legend$ && ($DvtSparkChartEventManager$$.$legend$.$destroy$(), $DvtSparkChartDefaults$$.removeChild($DvtSparkChartEventManager$$.$legend$));
        $DvtSparkChartEventManager$$.$legend$ = $DvtChartDataChangePyramidSlice$$;
      }
    }
  };
  $DvtChartLegendRenderer$$.$_addLegendData$ = function $$DvtChartLegendRenderer$$$$_addLegendData$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartLegendRenderer$$.$_getSeriesItems$($dvt$$2$$, "vertical" == $DvtSparkChartEventManager$$.orientation);
    if (0 < $DvtSparkChartDefaults$$.length) {
      var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.seriesSection;
      $DvtSparkChartAutomation$$.items = $DvtSparkChartDefaults$$;
      $DvtSparkChartEventManager$$.sections.unshift($DvtSparkChartAutomation$$);
      delete $DvtSparkChartEventManager$$.seriesSection;
    }
    $DvtSparkChartDefaults$$ = $DvtChartLegendRenderer$$.$_getRefObjItems$($dvt$$2$$);
    0 < $DvtSparkChartDefaults$$.length && ($DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.referenceObjectSection, $DvtSparkChartAutomation$$.items = $DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$.referenceObjectTitle && ($DvtSparkChartAutomation$$.title = $DvtSparkChartEventManager$$.referenceObjectTitle), $DvtSparkChartEventManager$$.sections.push($DvtSparkChartAutomation$$), delete $DvtSparkChartEventManager$$.referenceObjectSection);
  };
  $DvtChartLegendRenderer$$.$_getSeriesItems$ = function $$DvtChartLegendRenderer$$$$_getSeriesItems$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = [], $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$;
    if ("pie" == $DvtSparkChartEventManager$$.$getType$() || "pyramid" == $DvtSparkChartEventManager$$.$getType$() || "funnel" == $DvtSparkChartEventManager$$.$getType$()) {
      var $DvtChartPieLabelUtils$$ = $DvtChartPieUtils$$.$getRenderedSeriesIndices$($DvtSparkChartEventManager$$);
      "pyramid" == $DvtSparkChartEventManager$$.$getType$() && $DvtSparkChartDefaults$$ && ($DvtChartPieLabelUtils$$ = $DvtChartPieLabelUtils$$.reverse());
      for (var $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartPieLabelUtils$$.length;$DvtChartPieLabelInfo$$++) {
        $DvtChartAxisUtils$$ = $DvtChartPieLabelUtils$$[$DvtChartPieLabelInfo$$], $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$, 0), 0 <= $DvtChartRefObjUtils$$ && null != $DvtChartRefObjUtils$$ && ($DvtChartRefObjUtils$$ = $DvtChartLegendRenderer$$.$_createLegendItem$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$)) && $DvtSparkChartAutomation$$.push($DvtChartRefObjUtils$$);
      }
      $DvtChartPieUtils$$.$hasOtherSeries$($DvtSparkChartEventManager$$) && ($DvtChartRefObjUtils$$ = {id:$DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$, text:$dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartEventManager$$.$getOptions$(), "labelOther", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_OTHER"), categoryVisibility:0 <= $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$), $DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$) ? "hidden" : "visible", 
      symbolType:"marker", color:$DvtSparkChartEventManager$$.$getOptions$().styleDefaults.otherColor, borderColor:$DvtSparkChartEventManager$$.$getOptions$().styleDefaults.borderColor}, $DvtSparkChartAutomation$$.push($DvtChartRefObjUtils$$));
    } else {
      var $DvtChartPieLabelUtils$$ = {}, $DvtChartPieLabelInfo$$ = {}, $DvtChartDataChangePyramidSlice$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$);
      for ($DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtChartDataChangePyramidSlice$$;$DvtChartAxisUtils$$++) {
        if ($DvtChartRefObjUtils$$ = $DvtChartLegendRenderer$$.$_createLegendItem$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$)) {
          var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getStackCategory$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$);
          $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$) ? $DvtChartPieLabelInfo$$[$DvtChartPieRenderUtils$$] ? $DvtChartPieLabelInfo$$[$DvtChartPieRenderUtils$$].push($DvtChartRefObjUtils$$) : $DvtChartPieLabelInfo$$[$DvtChartPieRenderUtils$$] = [$DvtChartRefObjUtils$$] : $DvtChartPieLabelUtils$$[$DvtChartPieRenderUtils$$] ? $DvtChartPieLabelUtils$$[$DvtChartPieRenderUtils$$].push($DvtChartRefObjUtils$$) : $DvtChartPieLabelUtils$$[$DvtChartPieRenderUtils$$] = 
          [$DvtChartRefObjUtils$$];
        }
      }
      $DvtChartAxisUtils$$ = $DvtChartDataUtils$$.$getStackCategories$($DvtSparkChartEventManager$$, null, !0);
      $DvtChartRefObjUtils$$ = $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartEventManager$$) && $DvtChartTypeUtils$$.$isVertical$($DvtSparkChartEventManager$$) && $DvtSparkChartDefaults$$;
      $DvtSparkChartAutomation$$ = $DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$($DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$.y, $DvtChartRefObjUtils$$, $DvtSparkChartAutomation$$);
      $DvtSparkChartAutomation$$ = $DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$($DvtChartPieLabelInfo$$, $DvtChartAxisUtils$$.y2, $DvtChartRefObjUtils$$, $DvtSparkChartAutomation$$);
    }
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$ = function $$DvtChartLegendRenderer$$$$_getSeriesItemsForAxis$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for (var $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartAxisUtils$$++) {
      ($DvtChartRefObjUtils$$ = $dvt$$2$$[$DvtSparkChartEventManager$$[$DvtChartAxisUtils$$]]) && ($DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$ ? $DvtSparkChartAutomation$$.concat($DvtChartRefObjUtils$$.reverse()) : $DvtSparkChartAutomation$$.concat($DvtChartRefObjUtils$$));
    }
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartLegendRenderer$$.$_createLegendItem$ = function $$DvtChartLegendRenderer$$$$_createLegendItem$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$getType$(), $DvtChartAxisUtils$$ = $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$.displayInLegend;
    if (!$DvtSparkChartAutomation$$ || "off" == $DvtChartPieLabelInfo$$ || "on" != $DvtChartPieLabelInfo$$ && ($DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isPyramid$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isStock$($DvtSparkChartEventManager$$)) || "on" != $DvtChartPieLabelInfo$$ && !$DvtChartDataUtils$$.$hasSeriesData$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      return null;
    }
    var $DvtChartDataChangePyramidSlice$$ = $DvtChartDataUtils$$.$getSeriesLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if ("on" != $DvtChartPieLabelInfo$$ && (!$DvtChartDataChangePyramidSlice$$ || 0 >= $dvt$$2$$.$StringUtils$.trim($DvtChartDataChangePyramidSlice$$).length)) {
      return null;
    }
    $DvtChartPieLabelInfo$$ = {id:$DvtChartDataUtils$$.$getSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), text:$DvtChartDataChangePyramidSlice$$, categories:$DvtChartDataUtils$$.$getCategories$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), categoryVisibility:$DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? "visible" : "hidden", _dataContext:$DvtChartDataUtils$$.$getDataContext$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 
    -1)};
    "line" == $DvtChartAxisUtils$$ || "lineWithArea" == $DvtChartAxisUtils$$ || "scatter" == $DvtChartRefObjUtils$$ || "bubble" == $DvtChartRefObjUtils$$ ? ($DvtChartPieLabelInfo$$.lineStyle = $DvtChartStyleUtils$$.$getLineStyle$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelInfo$$.lineWidth = $DvtChartStyleUtils$$.$getLineWidth$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartStyleUtils$$.$isMarkerDisplayed$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? 
    ($DvtChartRefObjUtils$$ = $DvtChartStyleUtils$$.$getImageSource$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, null, null, "source")) ? ($DvtChartPieLabelInfo$$.symbolType = "image", $DvtChartPieLabelInfo$$.source = $DvtChartRefObjUtils$$) : ($DvtChartPieLabelInfo$$.symbolType = "none" == $DvtChartPieLabelUtils$$ ? "marker" : "lineWithMarker", "lineWithMarker" == $DvtChartPieLabelInfo$$.symbolType && ($DvtChartPieLabelInfo$$.lineWidth = Math.min($DvtChartLegendRenderer$$.$_DEFAULT_LINE_WIDTH_WITH_MARKER$, 
    $DvtChartPieLabelInfo$$.lineWidth)), $DvtChartPieLabelInfo$$.markerShape = $DvtChartStyleUtils$$.$getMarkerShape$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelInfo$$.markerColor = $DvtChartStyleUtils$$.$getMarkerColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) : $DvtChartPieLabelInfo$$.symbolType = "line") : "boxPlot" == $DvtChartAxisUtils$$ ? ($DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getBoxPlotStyleOptions$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), 
    $DvtChartPieLabelUtils$$.q2Color != $DvtChartPieLabelUtils$$.q3Color ? ($DvtChartPieLabelInfo$$.symbolType = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? "_horizontalBoxPlot" : "_verticalBoxPlot", $DvtChartPieLabelInfo$$._boxPlot = $DvtChartPieLabelUtils$$) : $DvtChartPieLabelInfo$$.symbolType = "marker") : ($DvtChartPieLabelInfo$$.symbolType = "marker", "none" == $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) && ($DvtChartPieLabelInfo$$.markerShape = 
    $DvtChartStyleUtils$$.$getMarkerShape$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)));
    $DvtChartPieLabelInfo$$.color = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPieLabelInfo$$.borderColor = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPieLabelInfo$$.pattern = $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPieLabelInfo$$.style = "area" == $DvtChartAxisUtils$$ ? $DvtChartStyleUtils$$.$getAreaStyle$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) : $DvtChartStyleUtils$$.$getStyle$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPieLabelInfo$$.className = "area" == $DvtChartAxisUtils$$ ? $DvtChartStyleUtils$$.$getAreaClassName$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) : $DvtChartStyleUtils$$.$getClassName$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPieLabelInfo$$.markerStyle = $DvtChartStyleUtils$$.$getMarkerStyle$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPieLabelInfo$$.markerClassName = $DvtChartStyleUtils$$.$getMarkerClassName$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPieLabelInfo$$.action = $DvtSparkChartAutomation$$.action;
    $DvtChartPieLabelInfo$$._spb = $DvtSparkChartEventManager$$.$getShowPopupBehaviors$($DvtSparkChartAutomation$$._id);
    $DvtChartPieLabelInfo$$.drilling = $DvtChartEventUtils$$.$isSeriesDrillable$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? "on" : "off";
    $DvtChartPieLabelInfo$$.shortDesc = $DvtSparkChartAutomation$$.shortDesc;
    return $DvtChartPieLabelInfo$$;
  };
  $DvtChartLegendRenderer$$.$_getRefObjItems$ = function $$DvtChartLegendRenderer$$$$_getRefObjItems$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartRefObjUtils$$.$getRefObjs$($dvt$$2$$);
    if (0 >= $DvtSparkChartEventManager$$.length) {
      return [];
    }
    for (var $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartAxisUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$];
      if ($DvtChartAxisUtils$$ && "on" == $DvtChartAxisUtils$$.displayInLegend && $DvtChartAxisUtils$$.text) {
        var $DvtChartPieLabelUtils$$ = $DvtChartRefObjUtils$$.$getType$($DvtChartAxisUtils$$);
        $DvtSparkChartDefaults$$.push({symbolType:"area" == $DvtChartPieLabelUtils$$ ? "square" : "line", text:$DvtChartAxisUtils$$.text, color:$DvtChartRefObjUtils$$.$getColor$($DvtChartAxisUtils$$), lineStyle:$DvtChartAxisUtils$$.lineStyle, lineWidth:$DvtChartRefObjUtils$$.$getLineWidth$($DvtChartAxisUtils$$), categories:$DvtChartRefObjUtils$$.$getRefObjCategories$($DvtChartAxisUtils$$), categoryVisibility:$DvtChartRefObjUtils$$.$isObjectRendered$($dvt$$2$$, $DvtChartAxisUtils$$) ? "visible" : 
        "hidden", shortDesc:$DvtChartAxisUtils$$.shortDesc, style:$DvtChartAxisUtils$$.style, className:$DvtChartAxisUtils$$.className});
      }
    }
    return $DvtSparkChartDefaults$$;
  };
  var $DvtChartPlotAreaRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPlotAreaRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ = 16;
  $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ = 4;
  $DvtChartPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$ = 3;
  $DvtChartPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$ = 1E4;
  $DvtChartPlotAreaRenderer$$.$render$ = function $$DvtChartPlotAreaRenderer$$$$render$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    "off" == $dvt$$2$$.$getOptions$().plotArea.rendered ? $DvtChartPlotAreaRenderer$$.$_renderAxisLines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) : 0 < $DvtSparkChartDefaults$$.$w$ && 0 < $DvtSparkChartDefaults$$.$h$ && ($dvt$$2$$.$_currentMarkers$ = [], $dvt$$2$$.$_currentAreas$ = [], $DvtChartPlotAreaRenderer$$.$_renderBackgroundObjects$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPlotAreaRenderer$$.$_renderTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$), $DvtChartPlotAreaRenderer$$.$_renderForegroundObjects$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$));
  };
  $DvtChartPlotAreaRenderer$$.$_renderBackgroundObjects$ = function $$DvtChartPlotAreaRenderer$$$$_renderBackgroundObjects$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartAxisUtils$$ = $DvtChartPlotAreaRenderer$$.$_getBackgroundShape$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getBackgroundColor$($DvtSparkChartEventManager$$);
    $DvtChartPieLabelUtils$$ ? $DvtChartAxisUtils$$.$setSolidFill$($DvtChartPieLabelUtils$$) : $DvtChartAxisUtils$$.$setInvisibleFill$();
    $DvtSparkChartDefaults$$.$addChild$($DvtChartAxisUtils$$);
    $DvtSparkChartEventManager$$.$_cache$.$putToCache$("plotAreaBackground", $DvtChartAxisUtils$$);
    if ($DvtChartRefObjUtils$$.xAxis.referenceObjects || $DvtChartRefObjUtils$$.yAxis.referenceObjects || $DvtChartRefObjUtils$$.y2Axis.referenceObjects) {
      $DvtChartRefObjUtils$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartRefObjRenderer$$.$renderBackgroundObjects$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, $DvtSparkChartAutomation$$);
    }
    $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$) && ($DvtChartRefObjUtils$$ = new $dvt$$2$$.$Container$($DvtSparkChartEventManager$$.$getCtx$()), $DvtSparkChartDefaults$$.$addChild$($DvtChartRefObjUtils$$), $DvtSparkChartEventManager$$.$__setAreaContainer$($DvtChartRefObjUtils$$), $DvtChartTypeUtils$$.$hasAreaSeries$($DvtSparkChartEventManager$$) && $DvtChartPlotAreaRenderer$$.$_renderAreas$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, $DvtSparkChartAutomation$$, !1));
  };
  $DvtChartPlotAreaRenderer$$.$_getBackgroundShape$ = function $$DvtChartPlotAreaRenderer$$$$_getBackgroundShape$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$;
    $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getCtx$();
    if ($DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$)) {
      var $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$.x + $DvtSparkChartDefaults$$.$w$ / 2, $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.y + $DvtSparkChartDefaults$$.$h$ / 2;
      $DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartEventManager$$) ? ($DvtChartRefObjUtils$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$($DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$, $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$.$getRadius$()), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Polygon$($DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$)) : $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Circle$($DvtSparkChartAutomation$$, 
      $DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$.$getRadius$());
    } else {
      $DvtSparkChartAutomation$$ = new $dvt$$2$$.Rect($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$);
    }
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartPlotAreaRenderer$$.$_renderTicks$ = function $$DvtChartPlotAreaRenderer$$$$_renderTicks$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $dvt$$2$$.$xAxis$ && $DvtChartAxisUtils$$.$isMinorTickRendered$($dvt$$2$$, "x") && $DvtChartPlotAreaRenderer$$.$_renderMinorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$xAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$yAxis$ && $DvtChartAxisUtils$$.$isMinorTickRendered$($dvt$$2$$, "y") && $DvtChartPlotAreaRenderer$$.$_renderMinorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$yAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$y2Axis$ && $DvtChartAxisUtils$$.$isMinorTickRendered$($dvt$$2$$, "y2") && $DvtChartPlotAreaRenderer$$.$_renderMinorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$y2Axis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$xAxis$ && $DvtChartAxisUtils$$.$isMajorTickRendered$($dvt$$2$$, "x") && $DvtChartPlotAreaRenderer$$.$_renderMajorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$xAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$yAxis$ && $DvtChartAxisUtils$$.$isMajorTickRendered$($dvt$$2$$, "y") && $DvtChartPlotAreaRenderer$$.$_renderMajorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$yAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$y2Axis$ && $DvtChartAxisUtils$$.$isMajorTickRendered$($dvt$$2$$, "y2") && $DvtChartPlotAreaRenderer$$.$_renderMajorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$y2Axis$, $DvtSparkChartDefaults$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderAxisLines$ = function $$DvtChartPlotAreaRenderer$$$$_renderAxisLines$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $dvt$$2$$.$xAxis$ && $dvt$$2$$.$yAxis$ && $DvtChartAxisUtils$$.$isAxisLineRendered$($dvt$$2$$, "x") && $DvtChartPlotAreaRenderer$$.$_renderAxisLine$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$xAxis$, $dvt$$2$$.$yAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$xAxis$ && $dvt$$2$$.$y2Axis$ && $DvtChartAxisUtils$$.$isAxisLineRendered$($dvt$$2$$, "x") && ($dvt$$2$$.$yAxis$ && !$DvtChartTypeUtils$$.$isSplitDualY$($dvt$$2$$) || $DvtChartPlotAreaRenderer$$.$_renderAxisLine$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$xAxis$, $dvt$$2$$.$y2Axis$, $DvtSparkChartDefaults$$));
    $dvt$$2$$.$yAxis$ && $dvt$$2$$.$xAxis$ && $DvtChartAxisUtils$$.$isAxisLineRendered$($dvt$$2$$, "y") && $DvtChartPlotAreaRenderer$$.$_renderAxisLine$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$yAxis$, $dvt$$2$$.$xAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$y2Axis$ && $dvt$$2$$.$xAxis$ && $DvtChartAxisUtils$$.$isAxisLineRendered$($dvt$$2$$, "y2") && $DvtChartPlotAreaRenderer$$.$_renderAxisLine$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$y2Axis$, $dvt$$2$$.$xAxis$, $DvtSparkChartDefaults$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderMajorTicks$ = function $$DvtChartPlotAreaRenderer$$$$_renderMajorTicks$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtChartPlotAreaRenderer$$.$_renderGridlines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.$getOptions$().majorTick, $DvtSparkChartDefaults$$.$getPosition$(), $DvtSparkChartDefaults$$.$getMajorTickCoords$(), $DvtSparkChartDefaults$$.$getBaselineCoord$(), $DvtSparkChartAutomation$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderMinorTicks$ = function $$DvtChartPlotAreaRenderer$$$$_renderMinorTicks$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtChartPlotAreaRenderer$$.$_renderGridlines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.$getOptions$().minorTick, $DvtSparkChartDefaults$$.$getPosition$(), $DvtSparkChartDefaults$$.$getMinorTickCoords$(), null, $DvtSparkChartAutomation$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderAxisLine$ = function $$DvtChartPlotAreaRenderer$$$$_renderAxisLine$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$getOptions$();
    var $DvtChartAxisUtils$$ = $DvtSparkChartDefaults$$.position, $DvtChartAxisUtils$$ = "bottom" == $DvtChartAxisUtils$$ || "right" == $DvtChartAxisUtils$$ || "tangential" == $DvtChartAxisUtils$$ ? $DvtSparkChartAutomation$$.$getMaxCoord$() : $DvtSparkChartAutomation$$.$getMinCoord$();
    $DvtChartPlotAreaRenderer$$.$_renderGridlines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.axisLine, $DvtSparkChartAutomation$$.$getPosition$(), [$DvtChartAxisUtils$$], null, $DvtChartRefObjUtils$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderGridlines$ = function $$DvtChartPlotAreaRenderer$$$$_renderGridlines$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) {
    var $DvtChartDataChangePyramidSlice$$ = $DvtSparkChartAutomation$$.lineColor, $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtChartDataChangePyramidSlice$$, 1, $DvtSparkChartAutomation$$.lineWidth);
    $DvtSparkChartAutomation$$.lineStyle && $DvtChartPieRenderUtils$$.$setStyle$($dvt$$2$$.$Stroke$.$convertTypeString$($DvtSparkChartAutomation$$.lineStyle));
    var $DvtChartSeriesEffectUtils$$ = $DvtChartPieRenderUtils$$.clone();
    "inherit" != $DvtSparkChartAutomation$$.baselineColor && ($DvtChartDataChangePyramidSlice$$ = "auto" == $DvtSparkChartAutomation$$.baselineColor ? $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartDataChangePyramidSlice$$, .6) : $DvtSparkChartAutomation$$.baselineColor, $DvtChartSeriesEffectUtils$$.$setColor$($DvtChartDataChangePyramidSlice$$));
    $DvtChartSeriesEffectUtils$$.$setWidth$(null != $DvtSparkChartAutomation$$.baselineWidth ? $DvtSparkChartAutomation$$.baselineWidth : $DvtSparkChartAutomation$$.lineWidth);
    $DvtChartSeriesEffectUtils$$.$setStyle$($dvt$$2$$.$Stroke$.$convertTypeString$($DvtSparkChartAutomation$$.baselineStyle ? $DvtSparkChartAutomation$$.baselineStyle : $DvtSparkChartAutomation$$.lineStyle));
    for ($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtChartAxisUtils$$.length;$DvtSparkChartAutomation$$++) {
      $DvtChartPlotAreaRenderer$$.$_renderGridline$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$[$DvtSparkChartAutomation$$], null != $DvtChartPieLabelUtils$$ && $DvtChartAxisUtils$$[$DvtSparkChartAutomation$$] == $DvtChartPieLabelUtils$$ ? $DvtChartSeriesEffectUtils$$ : $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$);
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderGridline$ = function $$DvtChartPlotAreaRenderer$$$$_renderGridline$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) {
    var $DvtChartDataChangePyramidSlice$$;
    $DvtChartDataChangePyramidSlice$$ = $DvtSparkChartDefaults$$.$getCtx$();
    var $DvtChartPieRenderUtils$$ = !$dvt$$2$$.$Agent$.$isTouchDevice$() || 1 < $dvt$$2$$.$Agent$.$getDevicePixelRatio$();
    "radial" == $DvtSparkChartAutomation$$ ? ($DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartEventManager$$) ? ($DvtChartRefObjUtils$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$(0, 0, $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartRefObjUtils$$), $DvtChartDataChangePyramidSlice$$ = new $dvt$$2$$.$Polygon$($DvtChartDataChangePyramidSlice$$, $DvtChartRefObjUtils$$)) : $DvtChartDataChangePyramidSlice$$ = new $dvt$$2$$.$Circle$($DvtChartDataChangePyramidSlice$$, 
    0, 0, $DvtChartRefObjUtils$$), $DvtChartDataChangePyramidSlice$$.$setInvisibleFill$(), $DvtChartDataChangePyramidSlice$$.$setTranslate$($DvtChartPieLabelInfo$$.x + $DvtChartPieLabelInfo$$.$w$ / 2, $DvtChartPieLabelInfo$$.y + $DvtChartPieLabelInfo$$.$h$ / 2)) : "tangential" == $DvtSparkChartAutomation$$ ? ($DvtChartDataChangePyramidSlice$$ = new $dvt$$2$$.$Line$($DvtChartDataChangePyramidSlice$$, 0, 0, $DvtSparkChartEventManager$$.$getRadius$() * Math.sin($DvtChartRefObjUtils$$), -$DvtSparkChartEventManager$$.$getRadius$() * 
    Math.cos($DvtChartRefObjUtils$$)), .01 > $DvtChartRefObjUtils$$ % Math.PI / 2 && $DvtChartPieRenderUtils$$ && $DvtChartDataChangePyramidSlice$$.$setPixelHinting$(), $DvtChartDataChangePyramidSlice$$.$setTranslate$($DvtChartPieLabelInfo$$.x + $DvtChartPieLabelInfo$$.$w$ / 2, $DvtChartPieLabelInfo$$.y + $DvtChartPieLabelInfo$$.$h$ / 2)) : ($DvtChartDataChangePyramidSlice$$ = "top" == $DvtSparkChartAutomation$$ || "bottom" == $DvtSparkChartAutomation$$ ? new $dvt$$2$$.$Line$($DvtChartDataChangePyramidSlice$$, 
    $DvtChartRefObjUtils$$, $DvtChartPieLabelInfo$$.y, $DvtChartRefObjUtils$$, $DvtChartPieLabelInfo$$.y + $DvtChartPieLabelInfo$$.$h$) : new $dvt$$2$$.$Line$($DvtChartDataChangePyramidSlice$$, $DvtChartPieLabelInfo$$.x, $DvtChartRefObjUtils$$, $DvtChartPieLabelInfo$$.x + $DvtChartPieLabelInfo$$.$w$, $DvtChartRefObjUtils$$), $DvtChartPieRenderUtils$$ && $DvtChartDataChangePyramidSlice$$.$setPixelHinting$());
    $DvtChartDataChangePyramidSlice$$.$setStroke$($DvtChartPieLabelUtils$$);
    $DvtChartDataChangePyramidSlice$$.$setMouseEnabled$(!1);
    $DvtSparkChartDefaults$$.$addChild$($DvtChartDataChangePyramidSlice$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderForegroundObjects$ = function $$DvtChartPlotAreaRenderer$$$$_renderForegroundObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$(), $DvtChartRefObjUtils$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPlotAreaRenderer$$.$_renderAxisLines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    var $DvtChartAxisUtils$$ = $DvtSparkChartAutomation$$.plotArea.borderColor, $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.plotArea.borderWidth;
    if ($DvtChartAxisUtils$$ && 0 != $DvtChartPieLabelUtils$$) {
      var $DvtChartPieLabelInfo$$ = $DvtChartPlotAreaRenderer$$.$_getBackgroundShape$($dvt$$2$$, $DvtSparkChartDefaults$$);
      $DvtChartPieLabelInfo$$.$setInvisibleFill$();
      $DvtChartPieLabelInfo$$.$setSolidStroke$($DvtChartAxisUtils$$, null, $DvtChartPieLabelUtils$$);
      $DvtChartPieLabelInfo$$.$setMouseEnabled$(!1);
      $DvtSparkChartEventManager$$.$addChild$($DvtChartPieLabelInfo$$);
    }
    $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) ? ($DvtChartTypeUtils$$.$hasLineWithAreaSeries$($dvt$$2$$) && $DvtChartPlotAreaRenderer$$.$_renderAreas$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, !0), $DvtChartTypeUtils$$.$hasBarSeries$($dvt$$2$$) && $DvtChartPlotAreaRenderer$$.$_renderBars$($dvt$$2$$, $DvtChartRefObjUtils$$, $DvtSparkChartDefaults$$), $DvtChartTypeUtils$$.$hasCandlestickSeries$($dvt$$2$$) && $DvtChartPlotAreaRenderer$$.$_renderStock$($dvt$$2$$, $DvtChartRefObjUtils$$), 
    $DvtChartTypeUtils$$.$hasBoxPlotSeries$($dvt$$2$$) && $DvtChartPlotAreaRenderer$$.$_renderBoxPlot$($dvt$$2$$, $DvtChartRefObjUtils$$, $DvtSparkChartDefaults$$), $DvtChartTypeUtils$$.$hasLineSeries$($dvt$$2$$) && $DvtChartPlotAreaRenderer$$.$_renderLines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, $DvtSparkChartDefaults$$)) : $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) && $DvtChartPlotAreaRenderer$$.$_renderScatterBubble$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, 
    $DvtSparkChartDefaults$$);
    if ($DvtSparkChartAutomation$$.xAxis.referenceObjects || $DvtSparkChartAutomation$$.yAxis.referenceObjects || $DvtSparkChartAutomation$$.y2Axis.referenceObjects) {
      $DvtChartRefObjUtils$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartRefObjRenderer$$.$renderForegroundObjects$($dvt$$2$$, $DvtChartRefObjUtils$$, $DvtSparkChartDefaults$$);
    }
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getInitialSelection$($dvt$$2$$);
    $DvtChartEventUtils$$.$setInitialSelection$($dvt$$2$$, $DvtSparkChartEventManager$$);
    $dvt$$2$$.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$($dvt$$2$$));
  };
  $DvtChartPlotAreaRenderer$$.$_renderDataLabel$ = function $$DvtChartPlotAreaRenderer$$$$_renderDataLabel$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangePyramidSlice$$, $DvtChartPieRenderUtils$$) {
    if (!$DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$)) {
      var $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.$getDataLabel$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartDataChangePyramidSlice$$, $DvtChartPieRenderUtils$$);
      if (null != $DvtChartSeriesEffectUtils$$) {
        var $DvtChartRangeMarker$$ = $DvtChartStyleUtils$$.$getDataLabelPosition$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartDataChangePyramidSlice$$, $DvtChartPieRenderUtils$$);
        if ("none" != $DvtChartRangeMarker$$) {
          var $DvtChartPolarBar$$ = new $dvt$$2$$.$OutputText$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartSeriesEffectUtils$$, 0, 0);
          $DvtChartPolarBar$$.$setMouseEnabled$(!1);
          $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$ ? $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.stackLabelStyle : $DvtChartStyleUtils$$.$getDataLabelStyle$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartRangeMarker$$, $DvtChartDataChangePyramidSlice$$);
          $DvtChartPolarBar$$.$setCSSStyle$($DvtChartPieLabelUtils$$);
          $DvtChartPolarBar$$.$setY$($DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2);
          $DvtChartPolarBar$$.$setX$($DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2);
          $DvtChartPolarBar$$.$alignCenter$();
          $DvtChartPolarBar$$.$alignMiddle$();
          $DvtChartPieLabelUtils$$ = $DvtChartPolarBar$$.$measureDimensions$();
          if ("left" == $DvtChartRangeMarker$$) {
            $DvtChartPolarBar$$.$setX$($DvtSparkChartAutomation$$.x - $DvtChartPieLabelUtils$$.$w$ / 2 - $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$);
          } else {
            if ("right" == $DvtChartRangeMarker$$) {
              $DvtChartPolarBar$$.$setX$($DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ + $DvtChartPieLabelUtils$$.$w$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$);
            } else {
              if ("top" == $DvtChartRangeMarker$$) {
                $DvtChartPolarBar$$.$setY$($DvtSparkChartAutomation$$.y - $DvtChartPieLabelUtils$$.$h$ / 2);
              } else {
                if ("bottom" == $DvtChartRangeMarker$$) {
                  $DvtChartPolarBar$$.$setY$($DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ + $DvtChartPieLabelUtils$$.$h$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2);
                } else {
                  if ("bar" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$)) {
                    if ($DvtChartPieLabelUtils$$.$w$ > $DvtSparkChartAutomation$$.$w$ || $DvtChartPieLabelUtils$$.$h$ > $DvtSparkChartAutomation$$.$h$) {
                      return;
                    }
                    "inLeft" == $DvtChartRangeMarker$$ ? $DvtChartPolarBar$$.$setX$($DvtSparkChartAutomation$$.x + $DvtChartPieLabelUtils$$.$w$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inRight" == $DvtChartRangeMarker$$ ? $DvtChartPolarBar$$.$setX$($DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ - $DvtChartPieLabelUtils$$.$w$ / 2 - $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inTop" == $DvtChartRangeMarker$$ ? $DvtChartPolarBar$$.$setY$($DvtSparkChartAutomation$$.y + 
                    $DvtChartPieLabelUtils$$.$h$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inBottom" == $DvtChartRangeMarker$$ && $DvtChartPolarBar$$.$setY$($DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ - $DvtChartPieLabelUtils$$.$h$ / 2 - $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2);
                  } else {
                    if ($DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) && ($DvtSparkChartAutomation$$.x += $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $DvtSparkChartAutomation$$.y += $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $DvtSparkChartAutomation$$.$h$ -= 2 * $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $DvtSparkChartAutomation$$.$w$ -= 2 * $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $DvtChartPieLabelUtils$$ = $DvtChartPolarBar$$.$getOptimalFontSize$($DvtSparkChartAutomation$$), 
                    $DvtChartPolarBar$$.$setFontSize$($DvtChartPieLabelUtils$$), !$dvt$$2$$.$TextUtils$.$fitText$($DvtChartPolarBar$$, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$, $DvtSparkChartDefaults$$, $DvtChartPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$))) {
                      return;
                    }
                  }
                  null != $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) && ($DvtChartPieLabelUtils$$ = $DvtChartPolarBar$$.$getDimensions$(), $DvtChartRefObjUtils$$ = .15 * $DvtChartPieLabelUtils$$.$h$, $DvtChartRefObjUtils$$ = $dvt$$2$$.$PathUtils$.$roundedRectangle$($DvtChartPieLabelUtils$$.x - $DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$.y, $DvtChartPieLabelUtils$$.$w$ + 2 * $DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$.$h$, 
                  2, 2, 2, 2), $DvtChartRefObjUtils$$ = new $dvt$$2$$.$Path$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartRefObjUtils$$), $DvtChartRefObjUtils$$.$setSolidFill$("#FFFFFF", .9), $DvtSparkChartDefaults$$.$addChild$($DvtChartRefObjUtils$$));
                }
              }
            }
          }
          if ($DvtChartTypeUtils$$.$isBar$($DvtSparkChartEventManager$$)) {
            $DvtChartRefObjUtils$$ = $DvtChartPolarBar$$.$getDimensions$();
            $DvtChartAxisUtils$$ = !1;
            $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getPlotArea$().$getDimensions$();
            var $DvtChartFunnelSlice$$;
            if ("left" == $DvtChartRangeMarker$$ && 0 > $DvtChartRefObjUtils$$.x) {
              $DvtChartAxisUtils$$ = !0, $DvtChartFunnelSlice$$ = $DvtSparkChartAutomation$$.x - $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$;
            } else {
              if ("right" == $DvtChartRangeMarker$$ && $DvtChartRefObjUtils$$.x + $DvtChartRefObjUtils$$.$w$ > $DvtChartPieLabelUtils$$.$w$ + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) {
                $DvtChartAxisUtils$$ = !0, $DvtChartFunnelSlice$$ = $DvtChartPieLabelUtils$$.$w$ - $DvtSparkChartAutomation$$.$w$ - $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$;
              } else {
                if ("top" == $DvtChartRangeMarker$$ && 0 > $DvtChartRefObjUtils$$.y || "bottom" == $DvtChartRangeMarker$$ && $DvtChartRefObjUtils$$.y + $DvtChartRefObjUtils$$.$h$ > $DvtChartPieLabelUtils$$.y + $DvtChartPieLabelUtils$$.$h$ + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) {
                  return;
                }
              }
            }
            if ($DvtChartAxisUtils$$) {
              if (isNaN($DvtChartSeriesEffectUtils$$)) {
                if ($dvt$$2$$.$TextUtils$.$fitText$($DvtChartPolarBar$$, $DvtChartFunnelSlice$$, $DvtSparkChartAutomation$$.$h$, $DvtSparkChartDefaults$$, 1)) {
                  $DvtChartPieLabelUtils$$ = $DvtChartPolarBar$$.$measureDimensions$(), "left" == $DvtChartRangeMarker$$ ? $DvtChartPolarBar$$.$setX$($DvtSparkChartAutomation$$.x - $DvtChartPieLabelUtils$$.$w$ / 2 - $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "right" == $DvtChartRangeMarker$$ && $DvtChartPolarBar$$.$setX$($DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ + $DvtChartPieLabelUtils$$.$w$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$);
                } else {
                  return;
                }
              } else {
                return;
              }
            }
          }
          $DvtChartStyleUtils$$.$optimizeMarkerStroke$($DvtSparkChartEventManager$$) && $DvtChartPolarBar$$.$setSolidStroke$("none");
          $DvtSparkChartDefaults$$.$addChild$($DvtChartPolarBar$$);
          $DvtSparkChartEventManager$$.$addDataLabel$($DvtChartPolarBar$$);
        }
      }
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderDataLabelForMarker$ = function $$DvtChartPlotAreaRenderer$$$$_renderDataLabelForMarker$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$getEventManager$().$getLogicalObject$($DvtSparkChartAutomation$$), $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$.$getSeriesIndex$(), $DvtChartPieLabelUtils$$ = $DvtChartRefObjUtils$$.$getGroupIndex$(), $DvtChartRefObjUtils$$ = $DvtChartRefObjUtils$$.$getNestedDataItemIndex$();
    if ($DvtSparkChartAutomation$$ instanceof $dvt$$2$$.$SimpleMarker$) {
      var $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$Rectangle$($DvtSparkChartAutomation$$.$getCx$() - $DvtSparkChartAutomation$$.getWidth() / 2, $DvtSparkChartAutomation$$.$getCy$() - $DvtSparkChartAutomation$$.getHeight() / 2, $DvtSparkChartAutomation$$.getWidth(), $DvtSparkChartAutomation$$.getHeight());
      $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartRefObjUtils$$, $DvtSparkChartAutomation$$.$_dataColor$);
    } else {
      $DvtSparkChartAutomation$$ instanceof $DvtChartRangeMarker$$ && ($DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$.$getBoundingBox1$(), $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartRefObjUtils$$, $DvtSparkChartAutomation$$.$_dataColor$, "low"), $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$.$getBoundingBox2$(), $DvtChartAxisUtils$$, 
      $DvtChartPieLabelUtils$$, $DvtChartRefObjUtils$$, $DvtSparkChartAutomation$$.$_dataColor$, "high"));
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderScatterBubble$ = function $$DvtChartPlotAreaRenderer$$$$_renderScatterBubble$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartAxisUtils$$ = $DvtChartPlotAreaRenderer$$.$_filterScatterBubble$($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$);
    for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartPieLabelInfo$$;$DvtChartPieLabelUtils$$++) {
      "none" != $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$) && $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartRefObjUtils$$);
    }
    var $DvtChartDataChangePyramidSlice$$ = $DvtChartStyleUtils$$.$getMarkerBorderColor$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$), $DvtChartDataChangePyramidSlice$$ = new $dvt$$2$$.$SolidStroke$($DvtChartDataChangePyramidSlice$$, null, $DvtChartPieRenderUtils$$), $DvtChartPieRenderUtils$$ = [];
    if ($DvtChartAxisUtils$$) {
      for ($DvtChartRefObjUtils$$ = ($DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$optimizeMarkerStroke$($DvtSparkChartEventManager$$)) ? $DvtChartDataChangePyramidSlice$$.$getColor$() : null, $DvtChartPieLabelInfo$$ = $DvtChartPieLabelInfo$$ ? $DvtChartDataChangePyramidSlice$$.getWidth() : null, $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartAxisUtils$$.length;$DvtChartPieLabelUtils$$++) {
        var $DvtChartSeriesEffectUtils$$ = $DvtChartPlotAreaRenderer$$.$_createMarker$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$[$DvtChartPieLabelUtils$$], $DvtChartRefObjUtils$$, $DvtChartPieLabelInfo$$);
        $DvtChartPieRenderUtils$$.push($DvtChartSeriesEffectUtils$$);
      }
    } else {
      for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartPieLabelInfo$$;$DvtChartPieLabelUtils$$++) {
        $DvtChartAxisUtils$$ = $DvtChartPlotAreaRenderer$$.$_getMarkersForSeries$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartRefObjUtils$$, $DvtChartDataChangePyramidSlice$$), $DvtChartPieRenderUtils$$ = $DvtChartPieRenderUtils$$.concat($DvtChartAxisUtils$$);
      }
      $DvtChartMarkerUtils$$.$sortMarkers$($DvtChartPieRenderUtils$$);
    }
    $DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) ? $DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangePyramidSlice$$) : $DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangePyramidSlice$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_renderMarkersForSeries$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartAxisUtils$$ = $DvtChartStyleUtils$$.$getMarkerBorderColor$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartAxisUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtChartAxisUtils$$, null, $DvtChartPieLabelUtils$$);
    $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) ? $DvtChartPlotAreaRenderer$$.$_getRangeMarkersForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) : $DvtChartPlotAreaRenderer$$.$_getMarkersForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$);
    $DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartAxisUtils$$);
  };
  $DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$ = function $$DvtChartPlotAreaRenderer$$$$_addMarkersToContainer$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartAxisUtils$$ = $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$optimizeMarkerStroke$($DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$optimizeMarkerFill$($DvtSparkChartEventManager$$);
    if ($DvtChartPieLabelUtils$$ || $DvtChartPieLabelInfo$$) {
      $DvtChartAxisUtils$$ = new $dvt$$2$$.$Container$($DvtSparkChartEventManager$$.$getCtx$()), $DvtChartPieLabelUtils$$ ? $DvtChartAxisUtils$$.$setStroke$($DvtChartRefObjUtils$$) : $DvtChartAxisUtils$$.$setInvisibleFill$(), $DvtSparkChartDefaults$$.$addChild$($DvtChartAxisUtils$$);
    }
    for ($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartAutomation$$.length;$DvtSparkChartDefaults$$++) {
      $DvtChartAxisUtils$$.$addChild$($DvtSparkChartAutomation$$[$DvtSparkChartDefaults$$]), $DvtChartPlotAreaRenderer$$.$_renderDataLabelForMarker$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$, $DvtSparkChartAutomation$$[$DvtSparkChartDefaults$$]);
    }
    $DvtSparkChartEventManager$$.$_currentMarkers$.push($DvtSparkChartAutomation$$);
  };
  $DvtChartPlotAreaRenderer$$.$_getMarkerInfo$ = function $$DvtChartPlotAreaRenderer$$$$_getMarkerInfo$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartDataChangePyramidSlice$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
    if (null == $DvtChartDataChangePyramidSlice$$ || isNaN($DvtChartDataChangePyramidSlice$$) || $DvtChartPlotAreaRenderer$$.$_isDataItemFiltered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) {
      return null;
    }
    var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartDataChangePyramidSlice$$ = $DvtChartStyleUtils$$.$isMarkerDisplayed$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
    if (!$DvtChartDataChangePyramidSlice$$ && (null == $DvtChartRefObjUtils$$ || 0 > $DvtChartRefObjUtils$$)) {
      if ("jet" != $DvtChartPieLabelInfo$$._environment && $DvtChartAxisUtils$$.$isMixedFrequency$($DvtSparkChartEventManager$$)) {
        2 > $DvtChartPieRenderUtils$$ && ($DvtChartDataChangePyramidSlice$$ = !0);
      } else {
        var $DvtChartSeriesEffectUtils$$ = $DvtChartPieRenderUtils$$ - 1, $DvtChartRangeMarker$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $DvtChartRangeMarker$$ && 0 < $DvtChartSeriesEffectUtils$$ && $DvtSparkChartAutomation$$ == $DvtChartSeriesEffectUtils$$ ? 0 : $DvtSparkChartAutomation$$ + 1, $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartRangeMarker$$ && 0 < $DvtChartSeriesEffectUtils$$ && 
        0 == $DvtSparkChartAutomation$$ ? $DvtChartSeriesEffectUtils$$ : $DvtSparkChartAutomation$$ - 1), $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieRenderUtils$$);
        null != $DvtChartSeriesEffectUtils$$ && !isNaN($DvtChartSeriesEffectUtils$$) || null != $DvtChartPieRenderUtils$$ && !isNaN($DvtChartPieRenderUtils$$) || ($DvtChartDataChangePyramidSlice$$ = !0);
      }
    }
    if (!$DvtChartDataChangePyramidSlice$$ && ($DvtChartTypeUtils$$.$isSpark$($DvtSparkChartEventManager$$) || ($DvtChartPieLabelInfo$$._duringAnimation || $DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$)) && !$DvtChartDataUtils$$.$isDataSelected$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$))) {
      return null;
    }
    if (!$DvtChartStyleUtils$$.$isDataItemRendered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$)) {
      return !1;
    }
    $DvtChartPieLabelInfo$$ = !0;
    $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getMarkerPosition$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartPieLabelUtils$$);
    $DvtSparkChartEventManager$$ = $DvtChartStyleUtils$$.$getMarkerSize$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$);
    $DvtChartPieLabelUtils$$ && $DvtChartPieRenderUtils$$ && $DvtSparkChartEventManager$$ && ($DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.$intersects$(new $dvt$$2$$.$Rectangle$($DvtChartPieRenderUtils$$.x - $DvtSparkChartEventManager$$ / 2, $DvtChartPieRenderUtils$$.y - $DvtSparkChartEventManager$$ / 2, $DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$)));
    return $DvtChartPieRenderUtils$$ && $DvtChartPieLabelInfo$$ ? {$seriesIndex$:$DvtSparkChartDefaults$$, $groupIndex$:$DvtSparkChartAutomation$$, $itemIndex$:$DvtChartRefObjUtils$$, x:$DvtChartPieRenderUtils$$.x, y:$DvtChartPieRenderUtils$$.y, size:$DvtSparkChartEventManager$$, $markerDisplayed$:$DvtChartDataChangePyramidSlice$$} : null;
  };
  $DvtChartPlotAreaRenderer$$.$_getScatterBubbleMarkerInfo$ = function $$DvtChartPlotAreaRenderer$$$$_getScatterBubbleMarkerInfo$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if (!$DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      return !1;
    }
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getScatterBubbleMarkerPosition$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartAutomation$$ ? ($dvt$$2$$ = $DvtChartStyleUtils$$.$getMarkerSize$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) ? {$seriesIndex$:$DvtSparkChartEventManager$$, $groupIndex$:$DvtSparkChartDefaults$$, x:$DvtSparkChartAutomation$$.x, y:$DvtSparkChartAutomation$$.y, size:$dvt$$2$$} : null : null;
  };
  $DvtChartPlotAreaRenderer$$.$_getMarkersForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_getMarkersForSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if (!$DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartEventManager$$)) {
      return [];
    }
    var $DvtChartRefObjUtils$$ = $DvtChartStyleUtils$$.$optimizeMarkerStroke$($dvt$$2$$), $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$ ? $DvtSparkChartAutomation$$.$getColor$() : null;
    $DvtSparkChartAutomation$$ = $DvtChartRefObjUtils$$ ? $DvtSparkChartAutomation$$.getWidth() : null;
    for (var $DvtChartRefObjUtils$$ = [], $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$), $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartPieLabelUtils$$;$DvtChartPieLabelInfo$$++) {
      var $DvtChartDataChangePyramidSlice$$ = $DvtChartPlotAreaRenderer$$.$_getMarkerInfo$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$, null, $DvtSparkChartDefaults$$);
      $DvtChartDataChangePyramidSlice$$ && ($DvtChartDataChangePyramidSlice$$ = $DvtChartPlotAreaRenderer$$.$_createMarker$($dvt$$2$$, $DvtChartDataChangePyramidSlice$$, $DvtChartAxisUtils$$, $DvtSparkChartAutomation$$), null != $DvtChartDataChangePyramidSlice$$ && $DvtChartRefObjUtils$$.push($DvtChartDataChangePyramidSlice$$));
    }
    return $DvtChartRefObjUtils$$;
  };
  $DvtChartPlotAreaRenderer$$.$_createMarker$ = function $$DvtChartPlotAreaRenderer$$$$_createMarker$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    var $DvtChartAxisUtils$$ = $dvt$$2$$.$Agent$.$isTouchDevice$(), $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$optimizeMarkerStroke$($DvtSparkChartEventManager$$), $DvtChartDataChangePyramidSlice$$ = $DvtChartStyleUtils$$.$optimizeMarkerFill$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.$seriesIndex$, $DvtChartRangeMarker$$ = $DvtSparkChartDefaults$$.$groupIndex$, $DvtChartPolarBar$$ = 
    $DvtSparkChartDefaults$$.$itemIndex$, $DvtChartFunnelSlice$$ = $DvtChartStyleUtils$$.$getMarkerColor$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$), $DvtChartDataCursor$$ = $DvtChartStyleUtils$$.$getMarkerShape$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$), $DvtChartDataChange$$ = $DvtSparkChartDefaults$$.$markerDisplayed$;
    null == $DvtChartDataChange$$ && ($DvtChartDataChange$$ = $DvtChartStyleUtils$$.$isMarkerDisplayed$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$));
    $DvtChartDataChange$$ ? (($DvtChartDataChangePyramidSlice$$ = $DvtChartStyleUtils$$.$getImageSource$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$, "source")) ? ($DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getImageSource$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$, "sourceSelected"), $DvtChartRefObjUtils$$ = $DvtChartStyleUtils$$.$getImageSource$($DvtSparkChartEventManager$$, 
    $DvtChartPieRenderUtils$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$, "sourceHover"), $DvtChartFunnelSlice$$ = $DvtChartStyleUtils$$.$getImageSource$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$, "sourceHoverSelected"), $DvtChartPieLabelUtils$$ = new $dvt$$2$$.$ImageMarker$($DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.size, $DvtSparkChartDefaults$$.size, null, $DvtChartDataChangePyramidSlice$$, 
    $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartFunnelSlice$$)) : ($DvtChartPieLabelUtils$$ = new $dvt$$2$$.$SimpleMarker$($DvtChartPieLabelUtils$$, $DvtChartDataCursor$$, $DvtSparkChartEventManager$$.$getSkin$(), $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.size, $DvtSparkChartDefaults$$.size, null, null, !0), $DvtChartPieLabelUtils$$.$setFill$($DvtChartSeriesEffectUtils$$.$getMarkerFill$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, 
    $DvtChartRangeMarker$$, $DvtChartPolarBar$$)), $DvtChartDataChangePyramidSlice$$ = $DvtChartStyleUtils$$.$getMarkerBorderColor$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$), $DvtChartDataCursor$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$), $DvtChartDataChangePyramidSlice$$ == $DvtSparkChartAutomation$$ && $DvtChartDataCursor$$ == $DvtChartRefObjUtils$$ || 
    $DvtChartPieLabelUtils$$.$setSolidStroke$($DvtChartDataChangePyramidSlice$$, null, $DvtChartDataCursor$$), $DvtChartPieLabelUtils$$.$setDataColor$($DvtChartFunnelSlice$$, !0), $DvtSparkChartAutomation$$ = $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$($DvtChartFunnelSlice$$), $DvtChartRefObjUtils$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($DvtSparkChartEventManager$$), $DvtChartFunnelSlice$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$.$setHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartRefObjUtils$$, 
    1, 1), new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 3.5)), $DvtChartPieLabelUtils$$.$setSelectedStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartRefObjUtils$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtChartFunnelSlice$$, 1, 4.5)), $DvtChartPieLabelUtils$$.$setSelectedHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartRefObjUtils$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 4.5)), $DvtChartPieLabelUtils$$.$setClassName$($DvtChartStyleUtils$$.$getMarkerClassName$($DvtSparkChartEventManager$$, 
    $DvtChartPieRenderUtils$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$)), $DvtChartPieLabelUtils$$.$setStyle$($DvtChartStyleUtils$$.$getMarkerStyle$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$))), $DvtChartStyleUtils$$.$isSelectable$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartRangeMarker$$) && $DvtChartPieLabelUtils$$.setCursor("pointer"), $DvtChartAxisUtils$$ && $DvtSparkChartDefaults$$.size < $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ && 
    $DvtChartPlotAreaRenderer$$.$_addMarkerHitArea$($DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtChartPieLabelInfo$$)) : ($DvtChartStyleUtils$$.$isSelectable$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartRangeMarker$$) ? ($DvtChartPieLabelUtils$$ = new $DvtChartLineMarker$$($DvtChartPieLabelUtils$$, $DvtChartDataCursor$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.size, $DvtChartPieLabelInfo$$), $DvtChartPieLabelUtils$$.setCursor("pointer"), 
    $DvtChartAxisUtils$$ && $DvtChartPlotAreaRenderer$$.$_addMarkerHitArea$($DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtChartPieLabelInfo$$)) : ($DvtChartAxisUtils$$ && ($DvtSparkChartDefaults$$.size = $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), $DvtChartPieLabelUtils$$ = new $DvtChartLineMarker$$($DvtChartPieLabelUtils$$, $dvt$$2$$.$SimpleMarker$.$SQUARE$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.size, $DvtChartPieLabelInfo$$)), 
    null != $DvtChartPieLabelUtils$$ && ($DvtChartDataChangePyramidSlice$$ || $DvtChartPieLabelUtils$$.$setInvisibleFill$(), $DvtChartPieLabelUtils$$.$setDataColor$($DvtChartFunnelSlice$$)));
    null != $DvtChartPieLabelUtils$$ && $DvtChartObjPeer$$.$associate$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$, $DvtSparkChartDefaults$$);
    return $DvtChartPieLabelUtils$$;
  };
  $DvtChartPlotAreaRenderer$$.$_addMarkerHitArea$ = function $$DvtChartPlotAreaRenderer$$$$_addMarkerHitArea$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$) {
    $DvtSparkChartDefaults$$ = new $dvt$$2$$.Rect($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartDefaults$$ - $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2, $DvtSparkChartAutomation$$ - $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2, $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$, $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$);
    $DvtChartRefObjUtils$$ && $DvtSparkChartDefaults$$.$setSolidStroke$("none");
    $DvtSparkChartDefaults$$.$setInvisibleFill$();
    $DvtSparkChartEventManager$$.$addChild$($DvtSparkChartDefaults$$);
  };
  $DvtChartPlotAreaRenderer$$.$_getRangeMarkersForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_getRangeMarkersForSeries$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if (!$DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      return [];
    }
    for (var $DvtChartRefObjUtils$$ = $dvt$$2$$.$Agent$.$isTouchDevice$(), $DvtChartAxisUtils$$ = $DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$xAxis$, $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? $DvtSparkChartEventManager$$.$y2Axis$ : $DvtSparkChartEventManager$$.$yAxis$, $DvtChartDataChangePyramidSlice$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartPieRenderUtils$$ = 
    $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartPolarBar$$ = [], $DvtChartFunnelSlice$$ = 0;$DvtChartFunnelSlice$$ < $DvtChartPieRenderUtils$$;$DvtChartFunnelSlice$$++) {
      if (!$DvtChartPlotAreaRenderer$$.$_isDataItemFiltered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartFunnelSlice$$) && $DvtChartStyleUtils$$.$isDataItemRendered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartFunnelSlice$$)) {
        var $DvtChartDataCursor$$ = $DvtChartPieLabelUtils$$.$getCoordAt$($DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartFunnelSlice$$)), $DvtChartDataChange$$ = $DvtChartPieLabelInfo$$.$getUnboundedCoordAt$($DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartFunnelSlice$$)), $DvtChartDataChangeMarker$$ = $DvtChartPieLabelInfo$$.$getUnboundedCoordAt$($DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, 
        $DvtSparkChartDefaults$$, $DvtChartFunnelSlice$$));
        if (null != $DvtChartDataCursor$$ && null != $DvtChartDataChange$$ && null != $DvtChartDataChangeMarker$$) {
          var $DvtChartPie$$ = $DvtChartStyleUtils$$.$isMarkerDisplayed$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartFunnelSlice$$);
          if (!$DvtChartPie$$) {
            var $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieRenderUtils$$ - 1, $DvtChartDataChangeRangeMarker$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$), $DvtChartPyramidSlice$$ = $DvtChartDataChangeRangeMarker$$ && 0 < $DvtChartDataChangeFunnelSlice$$ && 0 == $DvtChartFunnelSlice$$ ? $DvtChartDataChangeFunnelSlice$$ : $DvtChartFunnelSlice$$ - 1, $DvtChartOverview$$ = $DvtChartDataChangeRangeMarker$$ && 0 < $DvtChartDataChangeFunnelSlice$$ && $DvtChartFunnelSlice$$ == $DvtChartDataChangeFunnelSlice$$ ? 
            0 : $DvtChartFunnelSlice$$ + 1, $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPyramidSlice$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPyramidSlice$$), $DvtChartOverview$$ = $DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartOverview$$), $DvtChartPyramidSlice$$ = 
            $DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPyramidSlice$$);
            null == $DvtChartDataChangeFunnelSlice$$ && null == $DvtChartDataChangeRangeMarker$$ && null == $DvtChartOverview$$ && null == $DvtChartPyramidSlice$$ && ($DvtChartPie$$ = !0);
          }
          if (!($DvtChartDataChangePyramidSlice$$._duringAnimation || $DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isSpark$($DvtSparkChartEventManager$$)) || $DvtChartPie$$ || $DvtChartDataUtils$$.$isDataSelected$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartFunnelSlice$$)) {
            var $DvtChartDataChange$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($DvtSparkChartEventManager$$, new $dvt$$2$$.$Point$($DvtChartDataCursor$$, $DvtChartDataChange$$), $DvtSparkChartAutomation$$), $DvtChartPyramidSlice$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($DvtSparkChartEventManager$$, new $dvt$$2$$.$Point$($DvtChartDataCursor$$, $DvtChartDataChangeMarker$$), $DvtSparkChartAutomation$$), $DvtChartDataCursor$$ = new $dvt$$2$$.$Point$(($DvtChartDataChange$$.x + $DvtChartPyramidSlice$$.x) / 
            2, ($DvtChartDataChange$$.y + $DvtChartPyramidSlice$$.y) / 2), $DvtChartDataChangeMarker$$ = $DvtChartStyleUtils$$.$getMarkerSize$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartFunnelSlice$$), $DvtChartPie$$ = new $DvtChartRangeMarker$$($DvtChartAxisUtils$$, $DvtChartDataChange$$.x, $DvtChartDataChange$$.y, $DvtChartPyramidSlice$$.x, $DvtChartPyramidSlice$$.y, $DvtChartDataChangeMarker$$, !$DvtChartPie$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartSeriesEffectUtils$$.$getMarkerFill$($DvtSparkChartEventManager$$, 
            $DvtSparkChartDefaults$$, $DvtChartFunnelSlice$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartStyleUtils$$.$getMarkerBorderColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartFunnelSlice$$), $DvtChartOverview$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartFunnelSlice$$), $DvtChartDataChangeRangeMarker$$ = new $dvt$$2$$.$SolidStroke$($DvtChartDataChangeRangeMarker$$, null, $DvtChartOverview$$), $DvtChartOverview$$ = 
            $DvtChartStyleUtils$$.$getMarkerColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartFunnelSlice$$), $DvtChartTextUtils$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($DvtSparkChartEventManager$$), $DvtChartAnimOnDisplay$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($DvtSparkChartEventManager$$);
            $DvtChartPie$$.$setStyleProperties$($DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeRangeMarker$$, $DvtChartOverview$$, $DvtChartTextUtils$$, $DvtChartAnimOnDisplay$$);
            $DvtChartStyleUtils$$.$isSelectable$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartFunnelSlice$$) && $DvtChartPie$$.setCursor("pointer");
            $DvtChartDataChange$$ = new $dvt$$2$$.$Line$($DvtChartAxisUtils$$, $DvtChartDataChange$$.x, $DvtChartDataChange$$.y, $DvtChartPyramidSlice$$.x, $DvtChartPyramidSlice$$.y);
            $DvtChartDataChange$$.$setSolidStroke$("rgba(0,0,0,0)", null, $DvtChartRefObjUtils$$ ? Math.max($DvtChartDataChangeMarker$$, $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$) : $DvtChartDataChangeMarker$$);
            $DvtChartPie$$.$addChild$($DvtChartDataChange$$);
            $DvtChartPolarBar$$.push($DvtChartPie$$);
            $DvtChartObjPeer$$.$associate$($DvtChartPie$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartFunnelSlice$$, null, $DvtChartDataCursor$$);
          }
        }
      }
    }
    return $DvtChartPolarBar$$;
  };
  $DvtChartPlotAreaRenderer$$.$_renderBars$ = function $$DvtChartPlotAreaRenderer$$$$_renderBars$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for (var $DvtChartRefObjUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$), $DvtChartAxisUtils$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$isStock$($DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = "pixel" == $DvtChartStyleUtils$$.$getBarSpacing$($DvtSparkChartEventManager$$), $DvtChartDataChangePyramidSlice$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtChartPieRenderUtils$$ = 
    $DvtChartStyleUtils$$.$isStackLabelRendered$($DvtSparkChartEventManager$$), $DvtChartRangeMarker$$ = $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartEventManager$$), $DvtChartFunnelSlice$$ = 0;$DvtChartFunnelSlice$$ < $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$);$DvtChartFunnelSlice$$++) {
      for (var $DvtChartDataCursor$$ = 0;$DvtChartDataCursor$$ < $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$);$DvtChartDataCursor$$++) {
        if ($DvtChartDataUtils$$.$isBLACItemInViewport$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$, $DvtChartFunnelSlice$$) && "bar" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$)) {
          var $DvtChartDataChange$$ = $DvtChartDataUtils$$.$getBarInfo$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$, $DvtChartFunnelSlice$$, $DvtSparkChartAutomation$$);
          if (null != $DvtChartDataChange$$) {
            var $DvtChartDataChangeMarker$$ = $DvtChartDataChange$$.$yCoord$, $DvtChartPie$$ = $DvtChartDataChange$$.$baseCoord$, $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataChange$$.$axisCoord$, $DvtChartDataChangeRangeMarker$$ = $DvtChartDataChange$$.$x1$, $DvtChartPyramidSlice$$ = $DvtChartDataChange$$.$x2$, $DvtChartOverview$$ = $DvtChartDataChange$$.$barWidth$, $DvtChartTextUtils$$ = !1;
            if (1 > Math.abs($DvtChartDataChangeMarker$$ - $DvtChartPie$$)) {
              if ($DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$)) {
                $DvtChartDataChangeMarker$$--;
              } else {
                if (!$DvtChartRangeMarker$$ || $DvtChartDataUtils$$.$isOutermostBar$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$, $DvtChartFunnelSlice$$)) {
                  $DvtChartTextUtils$$ = !0, $DvtChartDataChangeMarker$$ = $DvtChartDataChangeMarker$$ > $DvtChartPie$$ || $DvtChartRefObjUtils$$ && !$DvtChartDataChangePyramidSlice$$ && $DvtChartDataChangeMarker$$ == $DvtChartPie$$ ? $DvtChartPie$$ + 3 : $DvtChartPie$$ - 3;
                }
              }
            }
            $DvtChartDataChangeMarker$$ = $DvtChartAxisUtils$$ ? new $DvtChartPolarBar$$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartPie$$, $DvtChartDataChangeMarker$$, $DvtChartDataChangeRangeMarker$$, $DvtChartPyramidSlice$$, $DvtSparkChartAutomation$$) : new $DvtChartBar$$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartPie$$, $DvtChartDataChangeMarker$$, $DvtChartDataChangeRangeMarker$$, $DvtChartPyramidSlice$$);
            $DvtSparkChartDefaults$$.$addChild$($DvtChartDataChangeMarker$$);
            $DvtChartStyleUtils$$.$isSelectable$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$, $DvtChartFunnelSlice$$) && $DvtChartDataChangeMarker$$.setCursor("pointer");
            $DvtChartPie$$ = null;
            $DvtChartTextUtils$$ ? $DvtChartOverview$$ = $dvt$$2$$.$SolidFill$.$invisibleFill$() : ($DvtChartOverview$$ = $DvtChartSeriesEffectUtils$$.$getBarFill$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$, $DvtChartFunnelSlice$$, $DvtChartOverview$$), $DvtChartTextUtils$$ = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$, $DvtChartFunnelSlice$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, 
            $DvtChartDataCursor$$, $DvtChartFunnelSlice$$), $DvtChartTextUtils$$ && ($DvtChartPie$$ = new $dvt$$2$$.$SolidStroke$($DvtChartTextUtils$$, null, $DvtChartDataChangeFunnelSlice$$)));
            var $DvtChartTextUtils$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$, $DvtChartFunnelSlice$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($DvtSparkChartEventManager$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($DvtSparkChartEventManager$$), $DvtChartPyramidSlice$$ = $DvtChartStyleUtils$$.$getClassName$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$, $DvtChartFunnelSlice$$), 
            $DvtChartAnimOnDisplay$$ = $DvtChartStyleUtils$$.$getStyle$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$, $DvtChartFunnelSlice$$);
            $DvtChartDataChangeMarker$$.$setStyleProperties$($DvtChartOverview$$, $DvtChartPie$$, $DvtChartTextUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeRangeMarker$$, $DvtChartPyramidSlice$$, $DvtChartAnimOnDisplay$$);
            $DvtChartPieLabelInfo$$ && $DvtChartDataChangeMarker$$.$setPixelHinting$();
            $DvtChartObjPeer$$.$associate$($DvtChartDataChangeMarker$$, $DvtSparkChartEventManager$$, $DvtChartDataCursor$$, $DvtChartFunnelSlice$$, null, $DvtChartDataChange$$.$dataPos$);
            $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$) ? ($DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$.$getBoundingBox$(), $DvtChartDataCursor$$, $DvtChartFunnelSlice$$, null, $DvtChartTextUtils$$, "low"), $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$.$getBoundingBox$(), $DvtChartDataCursor$$, 
            $DvtChartFunnelSlice$$, null, $DvtChartTextUtils$$, "high")) : $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$.$getBoundingBox$(), $DvtChartDataCursor$$, $DvtChartFunnelSlice$$, null, $DvtChartTextUtils$$);
            $DvtChartDataChange$$ = [];
            $DvtChartDataChange$$.push($DvtChartDataChangeMarker$$);
            $DvtChartPieLabelUtils$$ && 0 != $DvtChartDataCursor$$ || $DvtSparkChartEventManager$$.$_currentMarkers$.push($DvtChartDataChange$$);
            $DvtChartPieRenderUtils$$ && $DvtChartDataUtils$$.$isOutermostBar$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$, $DvtChartFunnelSlice$$) && $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$.$getBoundingBox$(), $DvtChartDataCursor$$, $DvtChartFunnelSlice$$, null, null, null, !0);
          }
        }
      }
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderStock$ = function $$DvtChartPlotAreaRenderer$$$$_renderStock$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$xAxis$, $DvtChartAxisUtils$$ = $DvtSparkChartEventManager$$.$yAxis$;
    if ("candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, 0)) {
      for (var $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$);$DvtChartPieLabelUtils$$++) {
        if ($DvtChartDataUtils$$.$isBLACItemInViewport$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelUtils$$)) {
          var $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelUtils$$), $DvtChartDataChangePyramidSlice$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelUtils$$), $DvtChartPieRenderUtils$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$, $DvtChartFunnelSlice$$ = null;
          $DvtChartDataChangePyramidSlice$$ && ($DvtChartPieRenderUtils$$ = $DvtChartDataChangePyramidSlice$$.open, $DvtChartRangeMarker$$ = $DvtChartDataChangePyramidSlice$$.close, $DvtChartPolarBar$$ = $DvtChartDataChangePyramidSlice$$.low, $DvtChartFunnelSlice$$ = $DvtChartDataChangePyramidSlice$$.high);
          var $DvtChartDataCursor$$ = null != $DvtChartPolarBar$$ && null != $DvtChartFunnelSlice$$;
          if (null != $DvtChartPieRenderUtils$$ && null != $DvtChartRangeMarker$$) {
            var $DvtChartPieLabelInfo$$ = $DvtChartRefObjUtils$$.$getUnboundedCoordAt$($DvtChartPieLabelInfo$$), $DvtChartDataChange$$ = $DvtChartStyleUtils$$.$getBarWidth$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelUtils$$), $DvtChartDataChangePyramidSlice$$ = $DvtChartAxisUtils$$.$getBoundedCoordAt$($DvtChartPieRenderUtils$$), $DvtChartDataChangeMarker$$ = $DvtChartAxisUtils$$.$getBoundedCoordAt$($DvtChartRangeMarker$$), $DvtChartPie$$, $DvtChartDataChangeFunnelSlice$$ = null;
            $DvtChartDataCursor$$ && ($DvtChartPie$$ = $DvtChartAxisUtils$$.$getBoundedCoordAt$($DvtChartPolarBar$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartAxisUtils$$.$getBoundedCoordAt$($DvtChartFunnelSlice$$));
            $DvtChartFunnelSlice$$ = new $DvtChartCandlestick$$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieLabelInfo$$, $DvtChartDataChange$$, $DvtChartDataChangePyramidSlice$$, $DvtChartDataChangeMarker$$, $DvtChartPie$$, $DvtChartDataChangeFunnelSlice$$);
            $DvtSparkChartDefaults$$.$addChild$($DvtChartFunnelSlice$$);
            $DvtChartStyleUtils$$.$isSelectable$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelUtils$$) && $DvtChartFunnelSlice$$.setCursor("pointer");
            var $DvtChartDataCursor$$ = $DvtChartSeriesEffectUtils$$.$getBarFill$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelUtils$$, $DvtChartDataChange$$), $DvtChartDataChange$$ = null, $DvtChartDataChangeFunnelSlice$$ = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelUtils$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelUtils$$);
            $DvtChartDataChangeFunnelSlice$$ ? $DvtChartDataChange$$ = new $dvt$$2$$.$SolidStroke$($DvtChartDataChangeFunnelSlice$$, null, $DvtChartDataChangeRangeMarker$$) : $DvtChartDataCursor$$ instanceof $dvt$$2$$.$PatternFill$ && ($DvtChartDataChange$$ = new $dvt$$2$$.$SolidStroke$($DvtChartDataCursor$$.$getColor$(), null, $DvtChartDataChangeRangeMarker$$));
            var $DvtChartDataChangeFunnelSlice$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelUtils$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($DvtSparkChartEventManager$$), $DvtChartPyramidSlice$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($DvtSparkChartEventManager$$), $DvtChartOverview$$ = $DvtSparkChartAutomation$$.styleDefaults.stockRangeColor;
            $DvtChartFunnelSlice$$.$setChangeStyle$($DvtChartDataCursor$$, $DvtChartDataChange$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeRangeMarker$$, $DvtChartPyramidSlice$$);
            $DvtChartFunnelSlice$$.$setRangeStyle$(new $dvt$$2$$.$SolidFill$($DvtChartOverview$$), $DvtChartDataChange$$, $DvtChartOverview$$, $DvtChartPyramidSlice$$);
            $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$Point$($DvtChartPieLabelInfo$$, ($DvtChartDataChangePyramidSlice$$ + $DvtChartDataChangeMarker$$) / 2);
            $DvtChartObjPeer$$.$associate$($DvtChartFunnelSlice$$, $DvtSparkChartEventManager$$, 0, $DvtChartPieLabelUtils$$, null, $DvtChartPieLabelInfo$$);
            $DvtChartPieLabelInfo$$ = [];
            $DvtChartPieLabelInfo$$.push($DvtChartFunnelSlice$$.$_changeShape$);
            $DvtSparkChartEventManager$$.$_currentMarkers$.push($DvtChartPieLabelInfo$$);
          }
        }
      }
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderBoxPlot$ = function $$DvtChartPlotAreaRenderer$$$$_renderBoxPlot$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for (var $DvtChartRefObjUtils$$ = $DvtSparkChartEventManager$$.$xAxis$, $DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$);$DvtChartAxisUtils$$++) {
      for (var $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$);$DvtChartPieLabelUtils$$++) {
        if ($DvtChartDataUtils$$.$isBLACItemInViewport$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$) && "boxPlot" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$)) {
          var $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$), $DvtChartDataChangePyramidSlice$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$), $DvtChartPieRenderUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$, $DvtChartPolarBar$$, $DvtChartFunnelSlice$$ = null;
          $DvtChartDataChangePyramidSlice$$ && ($DvtChartPieRenderUtils$$ = $DvtChartDataChangePyramidSlice$$.low, $DvtChartSeriesEffectUtils$$ = $DvtChartDataChangePyramidSlice$$.q1, $DvtChartRangeMarker$$ = $DvtChartDataChangePyramidSlice$$.q2, $DvtChartPolarBar$$ = $DvtChartDataChangePyramidSlice$$.q3, $DvtChartFunnelSlice$$ = $DvtChartDataChangePyramidSlice$$.high);
          if (null != $DvtChartPieRenderUtils$$ && null != $DvtChartSeriesEffectUtils$$ && null != $DvtChartRangeMarker$$ && null != $DvtChartPolarBar$$ && null != $DvtChartFunnelSlice$$) {
            var $DvtChartDataChangePyramidSlice$$ = $DvtChartStyleUtils$$.$getBarWidth$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$), $DvtChartDataCursor$$ = $DvtChartStyleUtils$$.$getBarCategoryOffsetMap$($DvtSparkChartEventManager$$, $DvtChartAxisUtils$$, !1), $DvtChartDataChange$$ = $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$), $DvtChartDataChangeMarker$$ = $DvtChartDataUtils$$.$getStackCategory$($DvtSparkChartEventManager$$, 
            $DvtChartPieLabelUtils$$), $DvtChartDataCursor$$ = $DvtChartDataCursor$$[$DvtChartDataChange$$ ? "y2" : "y"][$DvtChartDataChangeMarker$$] + $DvtChartDataChangePyramidSlice$$ / 2;
            $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) && $DvtChartTypeUtils$$.$isVertical$($DvtSparkChartEventManager$$) && ($DvtChartDataCursor$$ *= -1);
            var $DvtChartPieLabelInfo$$ = $DvtChartRefObjUtils$$.$getUnboundedCoordAt$($DvtChartPieLabelInfo$$) + $DvtChartDataCursor$$, $DvtChartPie$$ = $DvtChartDataChange$$ ? $DvtSparkChartEventManager$$.$y2Axis$ : $DvtSparkChartEventManager$$.$yAxis$, $DvtChartDataCursor$$ = $DvtChartPie$$.$getBoundedCoordAt$($DvtChartPieRenderUtils$$), $DvtChartDataChangeMarker$$ = $DvtChartPie$$.$getBoundedCoordAt$($DvtChartSeriesEffectUtils$$), $DvtChartDataChange$$ = $DvtChartPie$$.$getBoundedCoordAt$($DvtChartRangeMarker$$), 
            $DvtChartDataChangeFunnelSlice$$ = $DvtChartPie$$.$getBoundedCoordAt$($DvtChartPolarBar$$), $DvtChartFunnelSlice$$ = $DvtChartPie$$.$getBoundedCoordAt$($DvtChartFunnelSlice$$), $DvtChartPie$$ = $DvtChartStyleUtils$$.$getBoxPlotStyleOptions$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$), $DvtChartDataChangePyramidSlice$$ = new $DvtChartBoxAndWhisker$$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangePyramidSlice$$, $DvtChartDataCursor$$, 
            $DvtChartDataChangeMarker$$, $DvtChartDataChange$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartFunnelSlice$$, $DvtChartPie$$);
            $DvtSparkChartDefaults$$.$addChild$($DvtChartDataChangePyramidSlice$$);
            $DvtChartStyleUtils$$.$isSelectable$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$) && $DvtChartDataChangePyramidSlice$$.setCursor("pointer");
            $DvtChartFunnelSlice$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($DvtSparkChartEventManager$$, new $dvt$$2$$.$Point$($DvtChartPieLabelInfo$$, $DvtChartDataChange$$), $DvtSparkChartAutomation$$);
            $DvtChartObjPeer$$.$associate$($DvtChartDataChangePyramidSlice$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$, null, $DvtChartFunnelSlice$$);
            $DvtChartPlotAreaRenderer$$.$_renderBoxPlotMarkers$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartAxisUtils$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$);
            $DvtSparkChartEventManager$$.$_currentMarkers$.push([$DvtChartDataChangePyramidSlice$$.$_medianLine$]);
          }
        }
      }
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderBoxPlotMarkers$ = function $$DvtChartPlotAreaRenderer$$$$_renderBoxPlotMarkers$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$) {
    for (var $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$getMarkerBorderColor$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$), $DvtChartDataChangePyramidSlice$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$), $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtChartPieLabelInfo$$, null, $DvtChartDataChangePyramidSlice$$), $DvtChartSeriesEffectUtils$$ = [], $DvtChartRangeMarker$$ = 
    $DvtChartDataUtils$$.$getNestedDataItemCount$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$), $DvtChartPolarBar$$ = 0;$DvtChartPolarBar$$ < $DvtChartRangeMarker$$;$DvtChartPolarBar$$++) {
      var $DvtChartFunnelSlice$$ = $DvtChartPlotAreaRenderer$$.$_getMarkerInfo$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartPolarBar$$, $DvtChartAxisUtils$$);
      $DvtChartFunnelSlice$$ && ($DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? $DvtChartFunnelSlice$$.y = $DvtChartPieLabelUtils$$ : $DvtChartFunnelSlice$$.x = $DvtChartPieLabelUtils$$, $DvtChartFunnelSlice$$ = $DvtChartPlotAreaRenderer$$.$_createMarker$($DvtSparkChartEventManager$$, $DvtChartFunnelSlice$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangePyramidSlice$$), null != $DvtChartFunnelSlice$$ && $DvtChartSeriesEffectUtils$$.push($DvtChartFunnelSlice$$));
    }
    $DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieRenderUtils$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderLines$ = function $$DvtChartPlotAreaRenderer$$$$_renderLines$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = [], $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);
    for ($DvtChartAxisUtils$$ = 0;$DvtChartAxisUtils$$ < $DvtChartPieLabelUtils$$;$DvtChartAxisUtils$$++) {
      $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartAxisUtils$$) && "line" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartAxisUtils$$) && $DvtChartRefObjUtils$$.push($DvtChartAxisUtils$$);
    }
    for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartRefObjUtils$$.length;$DvtChartPieLabelUtils$$++) {
      $DvtChartAxisUtils$$ = $DvtChartRefObjUtils$$[$DvtChartPieLabelUtils$$], "none" != $DvtChartStyleUtils$$.$getLineType$($dvt$$2$$, $DvtChartAxisUtils$$) && ($DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) || $DvtChartPlotAreaRenderer$$.$_filterPointsForSeries$($dvt$$2$$, $DvtChartAxisUtils$$), $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtChartAxisUtils$$, $DvtSparkChartAutomation$$));
    }
    for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartRefObjUtils$$.length;$DvtChartPieLabelUtils$$++) {
      $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$[$DvtChartPieLabelUtils$$], $DvtSparkChartAutomation$$);
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderAreas$ = function $$DvtChartPlotAreaRenderer$$$$_renderAreas$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for (var $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartAxisUtils$$ = $DvtSparkChartAutomation$$ ? "lineWithArea" : "area", $DvtChartPieLabelUtils$$ = [], $DvtChartPieLabelInfo$$ = [], $DvtChartDataChangePyramidSlice$$ = 0;$DvtChartDataChangePyramidSlice$$ < $DvtChartRefObjUtils$$;$DvtChartDataChangePyramidSlice$$++) {
      $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartDataChangePyramidSlice$$) && $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartDataChangePyramidSlice$$) == $DvtChartAxisUtils$$ && ($DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartDataChangePyramidSlice$$) ? $DvtChartPieLabelInfo$$.push($DvtChartDataChangePyramidSlice$$) : $DvtChartPieLabelUtils$$.push($DvtChartDataChangePyramidSlice$$));
    }
    0 < $DvtChartPieLabelUtils$$.length && $DvtChartPlotAreaRenderer$$.$_renderAreasForAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $dvt$$2$$.$yAxis$.$getBaselineCoord$(), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    0 < $DvtChartPieLabelInfo$$.length && $DvtChartPlotAreaRenderer$$.$_renderAreasForAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$, $dvt$$2$$.$y2Axis$.$getBaselineCoord$(), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderAreasForAxis$ = function $$DvtChartPlotAreaRenderer$$$$_renderAreasForAxis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$) {
    for (var $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartEventManager$$), $DvtChartDataChangePyramidSlice$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartAxisUtils$$), $DvtChartRangeMarker$$ = {}, $DvtChartPolarBar$$ = {}, $DvtChartFunnelSlice$$ = {}, $DvtChartDataCursor$$ = {}, $DvtChartDataChange$$ = [], $DvtChartDataChangeMarker$$ = 
    $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartPie$$ = 0;$DvtChartPie$$ < $DvtChartDataChangeMarker$$;$DvtChartPie$$++) {
      $DvtChartDataChange$$.push(new $DvtChartCoord$$(null, $DvtChartRefObjUtils$$, $DvtChartRefObjUtils$$, $DvtChartPie$$, $DvtChartDataUtils$$.$getGroup$($DvtSparkChartEventManager$$, $DvtChartPie$$), !0));
    }
    for ($DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtSparkChartAutomation$$.length;$DvtChartDataChangeMarker$$++) {
      var $DvtChartPie$$ = $DvtSparkChartAutomation$$[$DvtChartDataChangeMarker$$], $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getStackCategory$($DvtSparkChartEventManager$$, $DvtChartPie$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartDataUtils$$.$isSeriesNegative$($DvtSparkChartEventManager$$, $DvtChartPie$$), $DvtChartPyramidSlice$$ = $DvtChartRangeMarker$$[$DvtChartDataChangeFunnelSlice$$], $DvtChartOverview$$ = $DvtChartPolarBar$$[$DvtChartDataChangeFunnelSlice$$], $DvtChartTextUtils$$ = 
      $DvtChartFunnelSlice$$[$DvtChartDataChangeFunnelSlice$$], $DvtChartAnimOnDisplay$$ = $DvtChartDataCursor$$[$DvtChartDataChangeFunnelSlice$$];
      if ("none" == $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtChartPie$$)) {
        $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPie$$, $DvtChartAxisUtils$$);
      } else {
        var $DvtChartDataChangeBoxAndWhisker$$ = $DvtChartSeriesEffectUtils$$.$getAreaFill$($DvtSparkChartEventManager$$, $DvtChartPie$$), $DvtChartDataChangeLineArea$$ = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtChartPie$$), $DvtChartAnimOnDC$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, $DvtChartPie$$), $DvtChartLineMarker$$ = $DvtChartStyleUtils$$.$getAreaClassName$($DvtSparkChartEventManager$$, $DvtChartPie$$), $DvtChartTooltipUtils$$ = 
        $DvtChartStyleUtils$$.$getAreaStyle$($DvtSparkChartEventManager$$, $DvtChartPie$$), $DvtChartDataChangeBar$$ = $DvtChartDataChangeLineArea$$ ? new $dvt$$2$$.$SolidStroke$($DvtChartDataChangeLineArea$$, null, $DvtChartAnimOnDC$$) : null, $DvtChartAnimOnDC$$ = $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtChartPie$$);
        $DvtChartDataChangePyramidSlice$$ || $DvtChartPlotAreaRenderer$$.$_filterPointsForSeries$($DvtSparkChartEventManager$$, $DvtChartPie$$);
        var $DvtChartPieSlice$$;
        $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtChartPie$$) ? ($DvtChartPieSlice$$ = $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$($DvtSparkChartEventManager$$, $DvtChartPie$$, "high"), $DvtChartPyramidSlice$$ = $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$($DvtSparkChartEventManager$$, $DvtChartPie$$, "low"), $DvtChartOverview$$ = $DvtChartAnimOnDC$$) : $DvtChartDataChangeRangeMarker$$ ? ($DvtChartPieSlice$$ = $DvtChartPlotAreaRenderer$$.$_getAreaCoordsForSeries$($DvtSparkChartEventManager$$, 
        $DvtChartPie$$, $DvtChartTextUtils$$ ? $DvtChartTextUtils$$ : $DvtChartDataChange$$), $DvtChartPyramidSlice$$ = $DvtChartTextUtils$$ ? $DvtChartTextUtils$$ : [], $DvtChartOverview$$ = $DvtChartAnimOnDisplay$$) : ($DvtChartPieSlice$$ = $DvtChartPlotAreaRenderer$$.$_getAreaCoordsForSeries$($DvtSparkChartEventManager$$, $DvtChartPie$$, $DvtChartPyramidSlice$$ ? $DvtChartPyramidSlice$$ : $DvtChartDataChange$$), $DvtChartPyramidSlice$$ = $DvtChartPyramidSlice$$ ? $DvtChartPyramidSlice$$ : []);
        $DvtChartDataChangeBoxAndWhisker$$ = new $DvtChartLineArea$$($DvtSparkChartEventManager$$, !0, $DvtChartAxisUtils$$, $DvtChartRefObjUtils$$, $DvtChartTooltipUtils$$, $DvtChartLineMarker$$, $DvtChartDataChangeBoxAndWhisker$$, $DvtChartDataChangeBar$$, $DvtChartAnimOnDC$$, $DvtChartPieSlice$$, $DvtChartOverview$$, $DvtChartPyramidSlice$$);
        $DvtChartPieRenderUtils$$.$addChild$($DvtChartDataChangeBoxAndWhisker$$);
        $DvtSparkChartEventManager$$.$_currentAreas$.push($DvtChartDataChangeBoxAndWhisker$$);
        $DvtChartObjPeer$$.$associate$($DvtChartDataChangeBoxAndWhisker$$, $DvtSparkChartEventManager$$, $DvtChartPie$$);
        $DvtChartDataChangeRangeMarker$$ ? ($DvtChartFunnelSlice$$[$DvtChartDataChangeFunnelSlice$$] = $DvtChartPieSlice$$, $DvtChartDataCursor$$[$DvtChartDataChangeFunnelSlice$$] = $DvtChartAnimOnDC$$) : ($DvtChartRangeMarker$$[$DvtChartDataChangeFunnelSlice$$] = $DvtChartPieSlice$$, $DvtChartPolarBar$$[$DvtChartDataChangeFunnelSlice$$] = $DvtChartAnimOnDC$$);
        $DvtChartPieLabelInfo$$ || (($DvtChartPieLabelUtils$$ || 0 < $DvtChartStyleUtils$$.$getDataItemGaps$($DvtSparkChartEventManager$$) && !$DvtChartDataChangeLineArea$$) && $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartPie$$, $DvtChartAxisUtils$$, !$DvtChartPieLabelUtils$$), $DvtChartPieLabelUtils$$ || $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPie$$, 
        $DvtChartAxisUtils$$), $DvtChartDataChangeMarker$$ + 1 < $DvtSparkChartAutomation$$.length && ($DvtChartPieRenderUtils$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartAxisUtils$$)));
      }
    }
    for ($DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtSparkChartAutomation$$.length;$DvtChartDataChangeMarker$$++) {
      $DvtChartPie$$ = $DvtSparkChartAutomation$$[$DvtChartDataChangeMarker$$], "none" != $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtChartPie$$) && ($DvtChartRefObjUtils$$ = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtChartPie$$) || $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtChartPie$$ + 1), $DvtChartPieLabelInfo$$ && ($DvtChartPieLabelUtils$$ || 0 < $DvtChartStyleUtils$$.$getDataItemGaps$($DvtSparkChartEventManager$$) && 
      !$DvtChartRefObjUtils$$) && $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartPie$$, $DvtChartAxisUtils$$, !$DvtChartPieLabelUtils$$), ($DvtChartPieLabelInfo$$ || $DvtChartPieLabelUtils$$) && $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPie$$, $DvtChartAxisUtils$$));
    }
  };
  $DvtChartPlotAreaRenderer$$.$_getAreaCoordsForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_getAreaCoordsForSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartEventManager$$ = $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$($dvt$$2$$, $DvtSparkChartEventManager$$);
    for (var $DvtSparkChartAutomation$$ = [], $DvtChartRefObjUtils$$ = 0;$DvtChartRefObjUtils$$ < $DvtSparkChartDefaults$$.length;$DvtChartRefObjUtils$$++) {
      $DvtSparkChartAutomation$$.push($DvtSparkChartDefaults$$[$DvtChartRefObjUtils$$].clone());
    }
    $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.length - 1;
    $dvt$$2$$ = $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$);
    for ($DvtChartRefObjUtils$$ = 0;$DvtChartRefObjUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartRefObjUtils$$++) {
      if (null != $DvtSparkChartEventManager$$[$DvtChartRefObjUtils$$].x) {
        var $DvtChartAxisUtils$$ = $DvtSparkChartAutomation$$[$DvtSparkChartEventManager$$[$DvtChartRefObjUtils$$].$groupIndex$], $DvtChartPieLabelUtils$$ = $dvt$$2$$ && 0 == $DvtChartRefObjUtils$$ ? $DvtSparkChartDefaults$$ : $DvtChartRefObjUtils$$ - 1, $DvtChartPieLabelInfo$$ = $dvt$$2$$ && $DvtChartRefObjUtils$$ == $DvtSparkChartDefaults$$ ? 0 : $DvtChartRefObjUtils$$ + 1;
        0 <= $DvtChartPieLabelUtils$$ && null != $DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$].x && ($DvtChartAxisUtils$$.$y1$ = $DvtSparkChartEventManager$$[$DvtChartRefObjUtils$$].$y1$);
        $DvtChartPieLabelInfo$$ <= $DvtSparkChartDefaults$$ && null != $DvtSparkChartEventManager$$[$DvtChartPieLabelInfo$$].x && ($DvtChartAxisUtils$$.$y2$ = $DvtSparkChartEventManager$$[$DvtChartRefObjUtils$$].$y2$);
        $DvtChartAxisUtils$$.x = $DvtSparkChartEventManager$$[$DvtChartRefObjUtils$$].x;
        $DvtChartAxisUtils$$.$filtered$ = $DvtChartAxisUtils$$.$y1$ == $DvtChartAxisUtils$$.$y2$ ? $DvtSparkChartEventManager$$[$DvtChartRefObjUtils$$].$filtered$ : !1;
      }
    }
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_renderLinesForSeries$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    function $DvtChartPieLabelUtils$$($dvt$$2$$) {
      $dvt$$2$$ = $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $dvt$$2$$);
      $dvt$$2$$ = new $DvtChartLineArea$$($DvtSparkChartEventManager$$, !1, $DvtChartRefObjUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartFunnelSlice$$, $DvtChartPolarBar$$, null, $DvtChartPieLabelInfo$$, $DvtChartRangeMarker$$, $dvt$$2$$);
      $DvtSparkChartDefaults$$.$addChild$($dvt$$2$$);
      $DvtChartObjPeer$$.$associate$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
    }
    var $DvtChartPieLabelInfo$$;
    if ($DvtChartAxisUtils$$) {
      $DvtChartAxisUtils$$ = 2.5 * $DvtChartStyleUtils$$.$getDataItemGaps$($DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$SolidStroke$($DvtChartStyleUtils$$.$getBackgroundColor$($DvtSparkChartEventManager$$, !0), 1, $DvtChartAxisUtils$$);
    } else {
      $DvtChartAxisUtils$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
      var $DvtChartDataChangePyramidSlice$$ = $DvtChartStyleUtils$$.$getLineWidth$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartPieRenderUtils$$ = $dvt$$2$$.$Stroke$.$convertTypeString$($DvtChartStyleUtils$$.$getLineStyle$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$));
      $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$SolidStroke$($DvtChartAxisUtils$$, 1, $DvtChartDataChangePyramidSlice$$);
      $DvtChartPieLabelInfo$$.$setStyle$($DvtChartPieRenderUtils$$);
    }
    var $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) ? $DvtSparkChartEventManager$$.$y2Axis$.$getBaselineCoord$() : $DvtSparkChartEventManager$$.$yAxis$.$getBaselineCoord$(), $DvtChartRangeMarker$$ = $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartPolarBar$$ = $DvtChartStyleUtils$$.$getClassName$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartFunnelSlice$$ = 
    $DvtChartStyleUtils$$.$getStyle$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
    $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) ? ($DvtChartPieLabelUtils$$("high"), $DvtChartPieLabelUtils$$("low")) : $DvtChartPieLabelUtils$$("value");
  };
  $DvtChartPlotAreaRenderer$$.$_filterScatterBubble$ = function $$DvtChartPlotAreaRenderer$$$$_filterScatterBubble$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$);
    if ($DvtSparkChartDefaults$$ * $DvtSparkChartAutomation$$ < $DvtChartPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$) {
      return null;
    }
    for (var $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$ = [], $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartDefaults$$;$DvtChartPieLabelUtils$$++) {
      if ($DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$)) {
        for (var $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtSparkChartAutomation$$;$DvtChartPieLabelInfo$$++) {
          $DvtChartRefObjUtils$$ = $DvtChartPlotAreaRenderer$$.$_getScatterBubbleMarkerInfo$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$), null != $DvtChartRefObjUtils$$ && $DvtChartAxisUtils$$.push($DvtChartRefObjUtils$$);
        }
      }
    }
    if ($DvtChartAxisUtils$$.length < $DvtChartPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$) {
      return null;
    }
    $DvtChartMarkerUtils$$.$sortMarkerInfos$($DvtChartAxisUtils$$);
    for (var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$PixelMap$(25, new $dvt$$2$$.$PixelMap$(5, new $dvt$$2$$.$PixelMap$)), $DvtSparkChartAutomation$$ = [], $DvtChartDataChangePyramidSlice$$ = $DvtChartAxisUtils$$.length - 1;0 <= $DvtChartDataChangePyramidSlice$$;$DvtChartDataChangePyramidSlice$$--) {
      if ($DvtChartRefObjUtils$$ = $DvtChartAxisUtils$$[$DvtChartDataChangePyramidSlice$$], !$DvtChartMarkerUtils$$.$checkPixelMap$($DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$.x, $DvtChartRefObjUtils$$.y, $DvtChartRefObjUtils$$.size)) {
        var $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$.$seriesIndex$, $DvtChartRefObjUtils$$.$groupIndex$), $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.$isMarkerDisplayed$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) ? $dvt$$2$$.$ColorUtils$.$getAlpha$($DvtChartPieRenderUtils$$) : 0;
        0 < $DvtChartPieRenderUtils$$ && ($DvtChartMarkerUtils$$.$updatePixelMap$($DvtSparkChartDefaults$$, $DvtChartRefObjUtils$$.x, $DvtChartRefObjUtils$$.y, $DvtChartRefObjUtils$$.size, $DvtChartPieRenderUtils$$), $DvtSparkChartAutomation$$.push($DvtChartRefObjUtils$$));
      }
    }
    $DvtSparkChartEventManager$$.$_cache$.$putToCache$("dataFiltered", !0);
    $DvtSparkChartAutomation$$.reverse();
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartPlotAreaRenderer$$.$_filterPointsForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_filterPointsForSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_plotAreaSpace$.$w$, $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$).items, $DvtChartRefObjUtils$$ = $dvt$$2$$.$xAxis$.$getInfo$(), $DvtSparkChartDefaults$$ = Math.round($DvtSparkChartAutomation$$.length / (($DvtChartRefObjUtils$$.$DataMax$ - $DvtChartRefObjUtils$$.$DataMin$) / ($DvtChartRefObjUtils$$.$MaxValue$ - $DvtChartRefObjUtils$$.$MinValue$)) * 2 / $DvtSparkChartDefaults$$);
    if (2 >= $DvtSparkChartDefaults$$) {
      for ($DvtChartRefObjUtils$$ = 0;$DvtChartRefObjUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartRefObjUtils$$++) {
        ($DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$[$DvtChartRefObjUtils$$]) && ($DvtChartPieRenderUtils$$._filtered = !1);
      }
    } else {
      for (var $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangePyramidSlice$$, $DvtChartPieRenderUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$ = !1, $DvtChartRefObjUtils$$ = 0;$DvtChartRefObjUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartRefObjUtils$$ += $DvtSparkChartDefaults$$) {
        $DvtChartAxisUtils$$ = -1;
        $DvtChartPieLabelUtils$$ = -Infinity;
        $DvtChartPieLabelInfo$$ = -1;
        $DvtChartDataChangePyramidSlice$$ = Infinity;
        for (var $DvtChartStyleUtils$$ = $DvtChartRefObjUtils$$;$DvtChartStyleUtils$$ < Math.min($DvtChartRefObjUtils$$ + $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$.length);$DvtChartStyleUtils$$++) {
          $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartStyleUtils$$), $DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$[$DvtChartStyleUtils$$], null != $DvtChartSeriesEffectUtils$$ && null != $DvtChartPieRenderUtils$$ && ($DvtChartSeriesEffectUtils$$ > $DvtChartPieLabelUtils$$ && ($DvtChartAxisUtils$$ = $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$ = $DvtChartSeriesEffectUtils$$), $DvtChartSeriesEffectUtils$$ < $DvtChartDataChangePyramidSlice$$ && 
          ($DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$, $DvtChartDataChangePyramidSlice$$ = $DvtChartSeriesEffectUtils$$), $DvtChartRangeMarker$$ = $DvtChartPieRenderUtils$$._filtered = !0);
        }
        for ($DvtChartStyleUtils$$ = $DvtChartRefObjUtils$$;$DvtChartStyleUtils$$ < Math.min($DvtChartRefObjUtils$$ + $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$.length);$DvtChartStyleUtils$$++) {
          $DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$[$DvtChartStyleUtils$$], null == $DvtChartPieRenderUtils$$ || $DvtChartStyleUtils$$ != $DvtChartAxisUtils$$ && $DvtChartStyleUtils$$ != $DvtChartPieLabelInfo$$ || ($DvtChartPieRenderUtils$$._filtered = !1);
        }
      }
      $dvt$$2$$.$_cache$.$putToCache$("dataFiltered", $DvtChartRangeMarker$$);
    }
  };
  $DvtChartPlotAreaRenderer$$.$_isDataItemFiltered$ = function $$DvtChartPlotAreaRenderer$$$$_isDataItemFiltered$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return ($dvt$$2$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $dvt$$2$$._filtered ? !0 : !1;
  };
  $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_getCoordsForSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$xAxis$, $DvtChartRefObjUtils$$ = $dvt$$2$$.$yAxis$;
    $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtSparkChartEventManager$$) && ($DvtChartRefObjUtils$$ = $dvt$$2$$.$y2Axis$);
    for (var $DvtChartAxisUtils$$ = [], $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);$DvtChartPieLabelUtils$$++) {
      var $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtChartPieLabelUtils$$), $DvtChartDataChangePyramidSlice$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$), $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$), $DvtChartSeriesEffectUtils$$ = null;
      "low" == $DvtSparkChartDefaults$$ ? $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.$getLowValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$) : "high" == $DvtSparkChartDefaults$$ ? $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.$getHighValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$) : null != $DvtChartDataChangePyramidSlice$$ && ($DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartEventManager$$, 
      $DvtChartPieLabelUtils$$));
      null == $DvtChartSeriesEffectUtils$$ || isNaN($DvtChartSeriesEffectUtils$$) || !$DvtChartDataUtils$$.$isBLACItemInViewport$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$) ? $DvtChartAxisUtils$$.push(new $DvtChartCoord$$(null, null, null, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, !1)) : ($DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) && ($DvtChartSeriesEffectUtils$$ = Math.max($DvtChartSeriesEffectUtils$$, $DvtChartRefObjUtils$$.$getInfo$().$MinValue$)), $DvtChartDataChangePyramidSlice$$ = 
      $DvtSparkChartAutomation$$.$getUnboundedCoordAt$($DvtChartPieRenderUtils$$), $DvtChartSeriesEffectUtils$$ = $DvtChartRefObjUtils$$.$getUnboundedCoordAt$($DvtChartSeriesEffectUtils$$), null == $DvtChartDataChangePyramidSlice$$ || null == $DvtChartSeriesEffectUtils$$ ? $DvtChartAxisUtils$$.push(new $DvtChartCoord$$(null, null, null, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, !1)) : ($DvtChartPieLabelInfo$$ = new $DvtChartCoord$$($DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$, 
      $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPlotAreaRenderer$$.$_isDataItemFiltered$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$)), $DvtChartAxisUtils$$.push($DvtChartPieLabelInfo$$)));
    }
    return $DvtChartAxisUtils$$;
  };
  $DvtChartPlotAreaRenderer$$.$createClippedGroup$ = function $$DvtChartPlotAreaRenderer$$$$createClippedGroup$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = new $dvt$$2$$.$Container$($DvtSparkChartDefaults$$.$getCtx$());
    $DvtSparkChartDefaults$$.$addChild$($DvtChartRefObjUtils$$);
    $DvtSparkChartDefaults$$ = new $dvt$$2$$.$ClipPath$($DvtSparkChartEventManager$$.getId());
    var $DvtChartPieLabelUtils$$ = $DvtChartPlotAreaRenderer$$.$_extendClipGroup$($DvtSparkChartEventManager$$);
    $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$) ? ($DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2, $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2, $DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartEventManager$$) ? ($DvtSparkChartEventManager$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$($DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$, $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), 
    $DvtSparkChartEventManager$$.$getRadius$()), $DvtSparkChartDefaults$$.$addPolygon$($DvtSparkChartEventManager$$)) : $DvtSparkChartDefaults$$.$addCircle$($DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$.$getRadius$())) : $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? $DvtSparkChartDefaults$$.$addRect$($DvtSparkChartAutomation$$.x - $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$.y, $DvtSparkChartAutomation$$.$w$ + 2 * $DvtChartPieLabelUtils$$, 
    $DvtSparkChartAutomation$$.$h$) : $DvtSparkChartDefaults$$.$addRect$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y - $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$ + 2 * $DvtChartPieLabelUtils$$);
    $DvtChartRefObjUtils$$.$setClipPath$($DvtSparkChartDefaults$$);
    return $DvtChartRefObjUtils$$;
  };
  $DvtChartPlotAreaRenderer$$.$polarToCartesian$ = function $$DvtChartPlotAreaRenderer$$$$polarToCartesian$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2 + $DvtSparkChartEventManager$$ * Math.sin($DvtSparkChartDefaults$$), $DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2 - $DvtSparkChartEventManager$$ * Math.cos($DvtSparkChartDefaults$$));
  };
  $DvtChartPlotAreaRenderer$$.$convertAxisCoord$ = function $$DvtChartPlotAreaRenderer$$$$convertAxisCoord$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$) ? ($DvtSparkChartEventManager$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.x, $DvtSparkChartAutomation$$), new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y)) : $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.x) : new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.x, 
    $DvtSparkChartDefaults$$.y);
  };
  $DvtChartPlotAreaRenderer$$.$_extendClipGroup$ = function $$DvtChartPlotAreaRenderer$$$$_extendClipGroup$$($dvt$$2$$) {
    if ($DvtChartTypeUtils$$.$hasLineSeries$($dvt$$2$$) || $DvtChartTypeUtils$$.$hasLineWithAreaSeries$($dvt$$2$$)) {
      var $DvtSparkChartEventManager$$ = $DvtChartStyleUtils$$.$getLineWidth$($dvt$$2$$), $DvtSparkChartDefaults$$ = function $$DvtSparkChartDefaults$$$($dvt$$2$$) {
        var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getInfo$();
        $dvt$$2$$ = $DvtSparkChartDefaults$$.$getCoordAt$($DvtSparkChartDefaults$$.$GlobalMax$);
        var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getCoordAt$($DvtSparkChartDefaults$$.$DataMax$), $DvtChartRefObjUtils$$ = $DvtSparkChartDefaults$$.$getCoordAt$($DvtSparkChartDefaults$$.$GlobalMin$), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$getCoordAt$($DvtSparkChartDefaults$$.$DataMin$);
        return null != $dvt$$2$$ && null != $DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$ - $dvt$$2$$ <= $DvtSparkChartEventManager$$ / 2 || null != $DvtChartRefObjUtils$$ && null != $DvtSparkChartDefaults$$ && $DvtChartRefObjUtils$$ - $DvtSparkChartDefaults$$ <= $DvtSparkChartEventManager$$ / 2 ? !0 : !1;
      };
      if ($dvt$$2$$.$yAxis$ && $DvtSparkChartDefaults$$($dvt$$2$$.$yAxis$) || $dvt$$2$$.$y2Axis$ && $DvtSparkChartDefaults$$($dvt$$2$$.$y2Axis$)) {
        return Math.ceil($DvtSparkChartEventManager$$ / 2);
      }
    }
    return 0;
  };
  var $DvtChartFunnelRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartFunnelRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ = 1 / 36;
  $DvtChartFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$ = 1 / 70;
  $DvtChartFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ = .25;
  $DvtChartFunnelRenderer$$.$_GROUP_INDEX$ = 0;
  $DvtChartFunnelRenderer$$.$render$ = function $$DvtChartFunnelRenderer$$$$render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = new $dvt$$2$$.$Container$($DvtSparkChartEventManager$$.$getCtx$());
    $DvtChartRefObjUtils$$.$setTranslate$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y);
    $DvtSparkChartDefaults$$.$addChild$($DvtChartRefObjUtils$$);
    $DvtSparkChartEventManager$$.$setPlotArea$($DvtChartRefObjUtils$$);
    var $DvtChartAxisUtils$$;
    if ("horizontal" == $DvtSparkChartEventManager$$.$getOptions$().orientation) {
      $DvtChartAxisUtils$$ = new $dvt$$2$$.$Rectangle$(0, 0, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$);
    } else {
      var $DvtChartPieLabelUtils$$ = new $dvt$$2$$.$Matrix$;
      $DvtChartAxisUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? -1 : 1;
      $DvtChartPieLabelUtils$$.translate(-$DvtSparkChartAutomation$$.$h$ / 2, -$DvtSparkChartAutomation$$.$w$ / 2);
      $DvtChartPieLabelUtils$$.rotate($DvtChartAxisUtils$$ * Math.PI / 2);
      $DvtChartPieLabelUtils$$.translate($DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2, $DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2);
      $DvtChartAxisUtils$$ = new $dvt$$2$$.$Rectangle$(0, 0, $DvtSparkChartAutomation$$.$h$, $DvtSparkChartAutomation$$.$w$);
      $DvtChartRefObjUtils$$.$setMatrix$($DvtChartPieLabelUtils$$);
    }
    $DvtChartFunnelRenderer$$.$_renderFunnelSlices$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) || $DvtChartRenderer$$.$renderEmptyText$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getInitialSelection$($DvtSparkChartEventManager$$);
    $DvtChartEventUtils$$.$setInitialSelection$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$($DvtSparkChartEventManager$$));
  };
  $DvtChartFunnelRenderer$$.$_renderFunnelSlices$ = function $$DvtChartFunnelRenderer$$$$_renderFunnelSlices$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for (var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$(), $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getDataItemGaps$($dvt$$2$$) * Math.min($DvtChartFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ * $DvtSparkChartDefaults$$.$w$ / ($DvtChartRefObjUtils$$ - 1), ("on" == $DvtSparkChartAutomation$$.styleDefaults.threeDEffect ? $DvtChartFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ : $DvtChartFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$) * 
    $DvtSparkChartDefaults$$.$w$), $DvtChartAxisUtils$$ = 0, $DvtChartPieLabelUtils$$ = 0, $DvtChartPieLabelInfo$$ = 0, $DvtChartDataChangePyramidSlice$$ = 0;$DvtChartDataChangePyramidSlice$$ < $DvtChartRefObjUtils$$;$DvtChartDataChangePyramidSlice$$++) {
      if ($DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtChartDataChangePyramidSlice$$)) {
        var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getTargetValue$($dvt$$2$$, $DvtChartDataChangePyramidSlice$$);
        null == $DvtChartPieRenderUtils$$ && ($DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartDataChangePyramidSlice$$, $DvtChartFunnelRenderer$$.$_GROUP_INDEX$));
        0 >= $DvtChartPieRenderUtils$$ || ($DvtChartAxisUtils$$ += $DvtChartPieRenderUtils$$);
      }
    }
    if (0 == $DvtChartAxisUtils$$) {
      return !1;
    }
    for ($DvtChartDataChangePyramidSlice$$ = $DvtChartRefObjUtils$$ - 1;0 <= $DvtChartDataChangePyramidSlice$$;$DvtChartDataChangePyramidSlice$$--) {
      $DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtChartDataChangePyramidSlice$$) && ($DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartDataChangePyramidSlice$$, $DvtChartFunnelRenderer$$.$_GROUP_INDEX$), $DvtChartRefObjUtils$$ = $DvtChartDataUtils$$.$getTargetValue$($dvt$$2$$, $DvtChartDataChangePyramidSlice$$), 0 >= $DvtChartPieRenderUtils$$ && null == $DvtChartRefObjUtils$$ || null != $DvtChartRefObjUtils$$ && 0 >= $DvtChartRefObjUtils$$ || (null != $DvtChartRefObjUtils$$ ? 
      ($DvtChartPieLabelInfo$$ += $DvtChartRefObjUtils$$ / $DvtChartAxisUtils$$, $DvtChartRefObjUtils$$ = new $DvtChartFunnelSlice$$($dvt$$2$$, $DvtChartDataChangePyramidSlice$$, $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$, 1 - $DvtChartPieLabelInfo$$, $DvtChartRefObjUtils$$ / $DvtChartAxisUtils$$, $DvtChartPieRenderUtils$$ / $DvtChartRefObjUtils$$, $DvtSparkChartAutomation$$)) : ($DvtChartPieLabelInfo$$ += $DvtChartPieRenderUtils$$ / $DvtChartAxisUtils$$, 
      $DvtChartRefObjUtils$$ = new $DvtChartFunnelSlice$$($dvt$$2$$, $DvtChartDataChangePyramidSlice$$, $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$, 1 - $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$ / $DvtChartAxisUtils$$, null, $DvtSparkChartAutomation$$)), $DvtChartPieLabelUtils$$++, $DvtSparkChartEventManager$$.$addChild$($DvtChartRefObjUtils$$), $DvtChartObjPeer$$.$associate$($DvtChartRefObjUtils$$, $dvt$$2$$, $DvtChartDataChangePyramidSlice$$, $DvtChartFunnelRenderer$$.$_GROUP_INDEX$)))
      ;
    }
    return !0;
  };
  var $DvtChartPyramidRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPyramidRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartPyramidRenderer$$.$_DEFAULT_GAP_RATIO$ = 1 / 70;
  $DvtChartPyramidRenderer$$.$_MAX_HEIGHT_FOR_GAPS$ = .25;
  $DvtChartPyramidRenderer$$.$_GROUP_INDEX$ = 0;
  $DvtChartPyramidRenderer$$.$render$ = function $$DvtChartPyramidRenderer$$$$render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = new $dvt$$2$$.$Container$($DvtSparkChartEventManager$$.$getCtx$());
    $DvtChartRefObjUtils$$.$setTranslate$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y);
    $DvtSparkChartDefaults$$.$addChild$($DvtChartRefObjUtils$$);
    $DvtSparkChartEventManager$$.$setPlotArea$($DvtChartRefObjUtils$$);
    $DvtChartPyramidRenderer$$.$_renderPyramidSlices$($DvtSparkChartEventManager$$, $DvtChartRefObjUtils$$, new $dvt$$2$$.$Rectangle$(0, 0, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$)) || $DvtChartRenderer$$.$renderEmptyText$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getInitialSelection$($DvtSparkChartEventManager$$);
    $DvtChartEventUtils$$.$setInitialSelection$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$($DvtSparkChartEventManager$$));
  };
  $DvtChartPyramidRenderer$$.$_renderPyramidSlices$ = function $$DvtChartPyramidRenderer$$$$_renderPyramidSlices$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for (var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartRefObjUtils$$ = $DvtChartStyleUtils$$.$getDataItemGaps$($dvt$$2$$) * Math.min($DvtChartPyramidRenderer$$.$_MAX_HEIGHT_FOR_GAPS$ * $DvtSparkChartDefaults$$.$h$ / ($DvtSparkChartAutomation$$ - 1), $DvtChartPyramidRenderer$$.$_DEFAULT_GAP_RATIO$ * $DvtSparkChartDefaults$$.$h$), $DvtChartAxisUtils$$ = 0, $DvtChartPieLabelUtils$$ = 0, $DvtChartPieLabelInfo$$ = 0, $DvtChartDataChangePyramidSlice$$ = 0;$DvtChartDataChangePyramidSlice$$ < 
    $DvtSparkChartAutomation$$;$DvtChartDataChangePyramidSlice$$++) {
      if ($DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtChartDataChangePyramidSlice$$)) {
        var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartDataChangePyramidSlice$$, $DvtChartPyramidRenderer$$.$_GROUP_INDEX$);
        0 >= $DvtChartPieRenderUtils$$ || ($DvtChartAxisUtils$$ += $DvtChartPieRenderUtils$$);
      }
    }
    if (0 == $DvtChartAxisUtils$$) {
      return !1;
    }
    for ($DvtChartDataChangePyramidSlice$$ = 0;$DvtChartDataChangePyramidSlice$$ < $DvtSparkChartAutomation$$;$DvtChartDataChangePyramidSlice$$++) {
      if ($DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtChartDataChangePyramidSlice$$) && ($DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartDataChangePyramidSlice$$, $DvtChartPyramidRenderer$$.$_GROUP_INDEX$), !(0 >= $DvtChartPieRenderUtils$$))) {
        var $DvtChartSeriesEffectUtils$$ = new $DvtChartPyramidSlice$$($dvt$$2$$, $DvtChartDataChangePyramidSlice$$, $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$ / $DvtChartAxisUtils$$, $DvtChartRefObjUtils$$), $DvtChartPieLabelInfo$$ = $DvtChartPieLabelInfo$$ + $DvtChartPieRenderUtils$$ / $DvtChartAxisUtils$$;
        $DvtChartPieLabelUtils$$++;
        $DvtSparkChartEventManager$$.$addChild$($DvtChartSeriesEffectUtils$$);
        $DvtChartObjPeer$$.$associate$($DvtChartSeriesEffectUtils$$, $dvt$$2$$, $DvtChartDataChangePyramidSlice$$, $DvtChartPyramidRenderer$$.$_GROUP_INDEX$);
      }
    }
    return !0;
  };
  var $DvtChartRefObjRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartRefObjRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartRefObjRenderer$$.$renderBackgroundObjects$ = function $$DvtChartRefObjRenderer$$$$renderBackgroundObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartRefObjRenderer$$.$_renderObjects$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "back");
  };
  $DvtChartRefObjRenderer$$.$renderForegroundObjects$ = function $$DvtChartRefObjRenderer$$$$renderForegroundObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartRefObjRenderer$$.$_renderObjects$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "front");
  };
  $DvtChartRefObjRenderer$$.$_renderObjects$ = function $$DvtChartRefObjRenderer$$$$_renderObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtChartRefObjRenderer$$.$_renderObjectsForAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $dvt$$2$$.$xAxis$, $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "x"));
    $DvtChartRefObjRenderer$$.$_renderObjectsForAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $dvt$$2$$.$yAxis$, $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y"));
    $DvtChartRefObjRenderer$$.$_renderObjectsForAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $dvt$$2$$.$y2Axis$, $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y2"));
  };
  $DvtChartRefObjRenderer$$.$_renderObjectsForAxis$ = function $$DvtChartRefObjRenderer$$$$_renderObjectsForAxis$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartAxisUtils$$, $DvtChartPieLabelUtils$$) {
    if ($DvtChartPieLabelUtils$$ && $DvtChartAxisUtils$$) {
      for (var $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartPieLabelUtils$$.length;$DvtChartPieLabelInfo$$++) {
        var $DvtChartDataChangePyramidSlice$$ = $DvtChartPieLabelUtils$$[$DvtChartPieLabelInfo$$];
        if ($DvtChartRefObjUtils$$.$isObjectRendered$($dvt$$2$$, $DvtChartDataChangePyramidSlice$$) && $DvtChartDataChangePyramidSlice$$ && $DvtChartRefObjUtils$$.$getLocation$($DvtChartDataChangePyramidSlice$$) == $DvtSparkChartAutomation$$) {
          var $DvtChartPieRenderUtils$$, $DvtChartSeriesEffectUtils$$ = $DvtChartRefObjUtils$$.$getType$($DvtChartDataChangePyramidSlice$$);
          "area" == $DvtChartSeriesEffectUtils$$ ? $DvtChartPieRenderUtils$$ = $DvtChartRefObjRenderer$$.$_createReferenceArea$($DvtChartDataChangePyramidSlice$$, $dvt$$2$$, $DvtSparkChartDefaults$$, $DvtChartAxisUtils$$) : "line" == $DvtChartSeriesEffectUtils$$ && ($DvtChartPieRenderUtils$$ = $DvtChartRefObjRenderer$$.$_createReferenceLine$($DvtChartDataChangePyramidSlice$$, $dvt$$2$$, $DvtSparkChartDefaults$$, $DvtChartAxisUtils$$));
          null != $DvtChartPieRenderUtils$$ && ($DvtChartDataChangePyramidSlice$$ = new $DvtChartRefObjPeer$$($dvt$$2$$, [$DvtChartPieRenderUtils$$], $DvtChartDataChangePyramidSlice$$, $DvtChartPieLabelInfo$$, $DvtChartAxisUtils$$ == $dvt$$2$$.$xAxis$ ? "xAxis" : $DvtChartAxisUtils$$ == $dvt$$2$$.$yAxis$ ? "yAxis" : "y2Axis"), $dvt$$2$$.$registerObject$($DvtChartDataChangePyramidSlice$$), $dvt$$2$$.$getEventManager$().$associate$($DvtChartPieRenderUtils$$, $DvtChartDataChangePyramidSlice$$), $DvtSparkChartEventManager$$.$addChild$($DvtChartPieRenderUtils$$));
        }
      }
    }
  };
  $DvtChartRefObjRenderer$$.$_createReferenceArea$ = function $$DvtChartRefObjRenderer$$$$_createReferenceArea$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.$getCtx$(), $DvtChartDataChangePyramidSlice$$ = $DvtChartPieLabelUtils$$.$getPosition$(), $DvtChartPieRenderUtils$$ = "top" == $DvtChartDataChangePyramidSlice$$ || "bottom" == $DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$ = "radial" == $DvtChartDataChangePyramidSlice$$, $DvtChartDataChangePyramidSlice$$ = $DvtChartRefObjUtils$$.$getColor$($DvtSparkChartEventManager$$), $DvtChartRangeMarker$$ = $DvtChartRefObjUtils$$.$getLineType$($DvtSparkChartEventManager$$), 
    $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.style, $DvtChartPolarBar$$ = $DvtSparkChartEventManager$$.className;
    if (null == $DvtSparkChartEventManager$$.items || $DvtChartPieLabelUtils$$ != $DvtSparkChartDefaults$$.$yAxis$ && $DvtChartPieLabelUtils$$ != $DvtSparkChartDefaults$$.$y2Axis$) {
      $DvtChartRangeMarker$$ = $DvtChartRefObjUtils$$.$getLowValue$($DvtSparkChartEventManager$$);
      $DvtSparkChartEventManager$$ = $DvtChartRefObjUtils$$.$getHighValue$($DvtSparkChartEventManager$$);
      if (null == $DvtChartRangeMarker$$ || -Infinity == $DvtChartRangeMarker$$) {
        $DvtChartRangeMarker$$ = $DvtChartPieLabelUtils$$.$getInfo$().$GlobalMin$;
      }
      if (null == $DvtSparkChartEventManager$$ || Infinity == $DvtSparkChartEventManager$$) {
        $DvtSparkChartEventManager$$ = $DvtChartPieLabelUtils$$.$getInfo$().$GlobalMax$;
      }
      $DvtChartRangeMarker$$ = $DvtChartRefObjRenderer$$.$_getAxisCoord$($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartRangeMarker$$);
      $DvtChartPieLabelUtils$$ = $DvtChartRefObjRenderer$$.$_getAxisCoord$($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$);
      $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$) ? ($DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2, $DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2, $DvtChartSeriesEffectUtils$$ ? $DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartDefaults$$) ? ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartDefaults$$), $DvtSparkChartDefaults$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$($DvtChartPieRenderUtils$$, 
      $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, 1), $DvtSparkChartAutomation$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$($DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartRangeMarker$$, 0), $DvtSparkChartAutomation$$ = $dvt$$2$$.$PathUtils$.$polyline$($DvtSparkChartDefaults$$) + $dvt$$2$$.$PathUtils$.$polyline$($DvtSparkChartAutomation$$) + $dvt$$2$$.$PathUtils$.closePath()) : $DvtSparkChartAutomation$$ = 
      $dvt$$2$$.$PathUtils$.moveTo($DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$ - $DvtChartPieLabelUtils$$) + $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$, Math.PI, 1, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$ + $DvtChartPieLabelUtils$$) + $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$, Math.PI, 1, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$ - $DvtChartPieLabelUtils$$) + $dvt$$2$$.$PathUtils$.moveTo($DvtChartPieRenderUtils$$, 
      $DvtSparkChartEventManager$$ - $DvtChartRangeMarker$$) + $dvt$$2$$.$PathUtils$.arcTo($DvtChartRangeMarker$$, $DvtChartRangeMarker$$, Math.PI, 0, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$ + $DvtChartRangeMarker$$) + $dvt$$2$$.$PathUtils$.arcTo($DvtChartRangeMarker$$, $DvtChartRangeMarker$$, Math.PI, 0, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$ - $DvtChartRangeMarker$$) + $dvt$$2$$.$PathUtils$.closePath() : ($DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$getRadius$(), 
      $DvtChartSeriesEffectUtils$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$, $DvtChartRangeMarker$$, $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$) + $dvt$$2$$.$PathUtils$.lineTo($DvtChartSeriesEffectUtils$$.x, $DvtChartSeriesEffectUtils$$.y) + 
      $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$ - $DvtChartRangeMarker$$, $dvt$$2$$.$Agent$.$isRightToLeft$($DvtChartPieLabelInfo$$) ? 0 : 1, $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y) + $dvt$$2$$.$PathUtils$.lineTo($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y) + $dvt$$2$$.$PathUtils$.closePath()), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Path$($DvtChartPieLabelInfo$$, $DvtSparkChartAutomation$$)) : $DvtSparkChartAutomation$$ = 
      new $dvt$$2$$.$Polygon$($DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$ ? [$DvtChartRangeMarker$$, 0, $DvtChartPieLabelUtils$$, 0, $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$.$h$, $DvtChartRangeMarker$$, $DvtSparkChartAutomation$$.$h$] : [0, $DvtChartRangeMarker$$, 0, $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$.$w$, $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$.$w$, $DvtChartRangeMarker$$]);
      $DvtSparkChartAutomation$$.$setSolidFill$($DvtChartDataChangePyramidSlice$$);
      $DvtSparkChartAutomation$$.$setStyle$($DvtChartStyleUtils$$).$setClassName$($DvtChartPolarBar$$);
    } else {
      $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.items;
      $DvtChartSeriesEffectUtils$$ = [];
      $DvtChartPieRenderUtils$$ = [];
      if ($DvtSparkChartDefaults$$.$xAxis$.$isGroupAxis$()) {
        for (;$DvtChartPieLabelInfo$$.length < $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartDefaults$$);) {
          $DvtChartPieLabelInfo$$.push(null);
        }
      }
      for ($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtChartPieLabelInfo$$.length;$DvtSparkChartEventManager$$++) {
        var $DvtChartFunnelSlice$$ = $DvtChartPieLabelInfo$$[$DvtSparkChartEventManager$$], $DvtChartDataCursor$$ = $DvtChartRefObjUtils$$.$getLowValue$($DvtChartFunnelSlice$$), $DvtChartFunnelSlice$$ = $DvtChartRefObjUtils$$.$getHighValue$($DvtChartFunnelSlice$$);
        if (null == $DvtChartDataCursor$$ || null == $DvtChartFunnelSlice$$) {
          $DvtChartSeriesEffectUtils$$.push(new $DvtChartCoord$$), $DvtChartPieRenderUtils$$.push(new $DvtChartCoord$$);
        } else {
          var $DvtChartDataCursor$$ = $DvtChartPieLabelUtils$$.$getUnboundedCoordAt$($DvtChartDataCursor$$), $DvtChartFunnelSlice$$ = $DvtChartPieLabelUtils$$.$getUnboundedCoordAt$($DvtChartFunnelSlice$$), $DvtChartDataChange$$ = $DvtSparkChartDefaults$$.$xAxis$.$getUnboundedCoordAt$($DvtChartRefObjUtils$$.$getXValue$($DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$, $DvtSparkChartEventManager$$));
          $DvtChartSeriesEffectUtils$$.push(new $DvtChartCoord$$($DvtChartDataChange$$, $DvtChartFunnelSlice$$, $DvtChartFunnelSlice$$));
          $DvtChartPieRenderUtils$$.push(new $DvtChartCoord$$($DvtChartDataChange$$, $DvtChartDataCursor$$, $DvtChartDataCursor$$));
        }
      }
      $DvtSparkChartAutomation$$ = new $DvtChartLineArea$$($DvtSparkChartDefaults$$, !0, $DvtSparkChartAutomation$$, null, $DvtChartStyleUtils$$, $DvtChartPolarBar$$, new $dvt$$2$$.$SolidFill$($DvtChartDataChangePyramidSlice$$), null, $DvtChartRangeMarker$$, $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$, $DvtChartPieRenderUtils$$);
    }
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartRefObjRenderer$$.$_createReferenceLine$ = function $$DvtChartRefObjRenderer$$$$_createReferenceLine$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.$getPosition$(), $DvtChartDataChangePyramidSlice$$ = "top" == $DvtChartPieLabelInfo$$ || "bottom" == $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$ = "radial" == $DvtChartPieLabelInfo$$, $DvtChartSeriesEffectUtils$$ = "tangential" == $DvtChartPieLabelInfo$$, $DvtChartPieLabelInfo$$ = $DvtChartRefObjUtils$$.$getLineWidth$($DvtSparkChartEventManager$$), $DvtChartRangeMarker$$ = $DvtChartRefObjUtils$$.$getLineType$($DvtSparkChartEventManager$$), 
    $DvtChartStyleUtils$$ = $DvtChartRefObjUtils$$.$getColor$($DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$SolidStroke$($DvtChartStyleUtils$$, 1, $DvtChartPieLabelInfo$$), $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.style, $DvtChartPolarBar$$ = $DvtSparkChartEventManager$$.className;
    $DvtSparkChartEventManager$$.lineStyle && $DvtChartPieLabelInfo$$.$setStyle$($dvt$$2$$.$Stroke$.$convertTypeString$($DvtSparkChartEventManager$$.lineStyle));
    var $DvtChartFunnelSlice$$ = $DvtSparkChartDefaults$$.$getCtx$();
    if (null == $DvtSparkChartEventManager$$.items || $DvtChartPieLabelUtils$$ != $DvtSparkChartDefaults$$.$yAxis$ && $DvtChartPieLabelUtils$$ != $DvtSparkChartDefaults$$.$y2Axis$) {
      if ($DvtSparkChartEventManager$$.value) {
        $DvtSparkChartEventManager$$ = $DvtChartRefObjRenderer$$.$_getAxisCoord$($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$.value);
        if (null == $DvtSparkChartEventManager$$ || Infinity == $DvtSparkChartEventManager$$ || -Infinity == $DvtSparkChartEventManager$$) {
          return null;
        }
        $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2;
        $DvtChartRangeMarker$$ = $DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2;
        $DvtChartPieRenderUtils$$ ? ($DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartDefaults$$) ? ($DvtChartPieRenderUtils$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$($DvtChartPieLabelUtils$$, $DvtChartRangeMarker$$, $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Polygon$($DvtChartFunnelSlice$$, $DvtChartPieRenderUtils$$)) : $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Circle$($DvtChartFunnelSlice$$, 
        $DvtChartPieLabelUtils$$, $DvtChartRangeMarker$$, $DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$.$setFill$(null)) : $DvtChartSeriesEffectUtils$$ ? ($DvtSparkChartDefaults$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$.$getRadius$(), $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Line$($DvtChartFunnelSlice$$, $DvtChartPieLabelUtils$$, $DvtChartRangeMarker$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y)) : 
        ($DvtSparkChartDefaults$$ = $DvtChartDataChangePyramidSlice$$ ? new $dvt$$2$$.$Line$($DvtChartFunnelSlice$$, $DvtSparkChartEventManager$$, 0, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$.$h$) : new $dvt$$2$$.$Line$($DvtChartFunnelSlice$$, 0, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$.$setPixelHinting$());
        $DvtSparkChartDefaults$$.$setStroke$($DvtChartPieLabelInfo$$);
        $DvtSparkChartDefaults$$.$setStyle$($DvtChartStyleUtils$$).$setClassName$($DvtChartPolarBar$$);
      } else {
        return null;
      }
    } else {
      $DvtChartDataChangePyramidSlice$$ = $DvtSparkChartEventManager$$.items;
      $DvtChartPieRenderUtils$$ = [];
      if ($DvtSparkChartDefaults$$.$xAxis$.$isGroupAxis$()) {
        for (;$DvtChartDataChangePyramidSlice$$.length < $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartDefaults$$);) {
          $DvtChartDataChangePyramidSlice$$.push(null);
        }
      }
      $DvtChartPieRenderUtils$$ = [];
      for ($DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtChartDataChangePyramidSlice$$.length;$DvtChartSeriesEffectUtils$$++) {
        $DvtChartFunnelSlice$$ = $DvtChartDataChangePyramidSlice$$[$DvtChartSeriesEffectUtils$$], $DvtSparkChartEventManager$$ = null, null != $DvtChartFunnelSlice$$ && ("object" != typeof $DvtChartFunnelSlice$$ ? $DvtSparkChartEventManager$$ = $DvtChartFunnelSlice$$ : null != $DvtChartFunnelSlice$$.value && ($DvtSparkChartEventManager$$ = $DvtChartFunnelSlice$$.value)), null == $DvtSparkChartEventManager$$ ? $DvtChartPieRenderUtils$$.push(new $DvtChartCoord$$) : ($DvtChartFunnelSlice$$ = $DvtChartPieLabelUtils$$.$getUnboundedCoordAt$($DvtSparkChartEventManager$$), 
        $DvtSparkChartEventManager$$ = $DvtSparkChartDefaults$$.$xAxis$.$getUnboundedCoordAt$($DvtChartRefObjUtils$$.$getXValue$($DvtSparkChartDefaults$$, $DvtChartDataChangePyramidSlice$$, $DvtChartSeriesEffectUtils$$)), $DvtChartPieRenderUtils$$.push(new $DvtChartCoord$$($DvtSparkChartEventManager$$, $DvtChartFunnelSlice$$, $DvtChartFunnelSlice$$)));
      }
      $DvtSparkChartDefaults$$ = new $DvtChartLineArea$$($DvtSparkChartDefaults$$, !1, $DvtSparkChartAutomation$$, null, $DvtChartStyleUtils$$, $DvtChartPolarBar$$, null, $DvtChartPieLabelInfo$$, $DvtChartRangeMarker$$, $DvtChartPieRenderUtils$$);
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartRefObjRenderer$$.$_getAxisCoord$ = function $$DvtChartRefObjRenderer$$$$_getAxisCoord$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return $DvtSparkChartEventManager$$.$isGroupAxis$() && ($dvt$$2$$ = $DvtChartDataUtils$$.$getGroupIndex$($dvt$$2$$, $DvtSparkChartDefaults$$), 0 <= $dvt$$2$$) ? $DvtSparkChartEventManager$$.$getUnboundedCoordAt$($dvt$$2$$) : isNaN($DvtSparkChartDefaults$$) ? null : $DvtSparkChartEventManager$$.$getUnboundedCoordAt$($DvtSparkChartDefaults$$);
  };
  $dvt$$2$$.$SparkChart$ = function $$dvt$$2$$$$SparkChart$$() {
  };
  $dvt$$2$$.$Obj$.$createSubclass$($dvt$$2$$.$SparkChart$, $dvt$$2$$.$BaseComponent$);
  $dvt$$2$$.$SparkChart$.newInstance = function $$dvt$$2$$$$SparkChart$$newInstance$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartRefObjUtils$$ = new $dvt$$2$$.$SparkChart$;
    $DvtChartRefObjUtils$$.Init($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    return $DvtChartRefObjUtils$$;
  };
  $dvt$$2$$.$SparkChart$.$getDefaults$ = function $$dvt$$2$$$$SparkChart$$$getDefaults$$($dvt$$2$$) {
    return (new $DvtSparkChartDefaults$$).$getDefaults$($dvt$$2$$);
  };
  $dvt$$2$$.$SparkChart$.prototype.Init = function $$dvt$$2$$$$SparkChart$$$Init$($DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$) {
    $dvt$$2$$.$SparkChart$.$superclass$.Init.call(this, $DvtSparkChartAutomation$$, $DvtChartRefObjUtils$$, $DvtChartAxisUtils$$);
    this.$Defaults$ = new $DvtSparkChartDefaults$$;
    this.$EventManager$ = new $DvtSparkChartEventManager$$(this);
    this.$EventManager$.$addListeners$(this);
    this.$_chart$ = $dvt$$2$$.$Chart$.newInstance($DvtSparkChartAutomation$$, this.$_onRenderEnd$, this);
    this.$addChild$(this.$_chart$);
    $dvt$$2$$.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(new $dvt$$2$$.$KeyboardHandler$(this.$EventManager$, this));
    this.$_tooltipMask$ = new $dvt$$2$$.Rect($DvtSparkChartAutomation$$);
    this.$addChild$(this.$_tooltipMask$);
    this.setId("sparkChart1000" + Math.floor(1E9 * Math.random()));
  };
  $dvt$$2$$.$SparkChart$.prototype.$SetOptions$ = function $$dvt$$2$$$$SparkChart$$$$SetOptions$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($DvtSparkChartEventManager$$), $dvt$$2$$.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = this.$GetDefaults$());
  };
  $dvt$$2$$.$SparkChart$.prototype.setId = function $$dvt$$2$$$$SparkChart$$$setId$($DvtSparkChartEventManager$$) {
    $dvt$$2$$.$SparkChart$.$superclass$.setId.call(this, $DvtSparkChartEventManager$$);
    this.$_chart$ && this.$_chart$.setId($DvtSparkChartEventManager$$ + "chart");
  };
  $dvt$$2$$.$SparkChart$.prototype.$render$ = function $$dvt$$2$$$$SparkChart$$$$render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    this.$SetOptions$($DvtSparkChartEventManager$$);
    isNaN($DvtSparkChartDefaults$$) || isNaN($DvtSparkChartAutomation$$) || (this.$Width$ = $DvtSparkChartDefaults$$, this.$Height$ = $DvtSparkChartAutomation$$);
    this.$_isDoneRendering$ = this.$_eventReceived$ = !1;
    $DvtSparkChartRenderer$$.$render$(this, this.$Width$, this.$Height$);
    $DvtSparkChartEventManager$$ = this.$Options$.shortDesc;
    this.$_tooltipMask$.$setWidth$(this.$Width$);
    this.$_tooltipMask$.$setHeight$(this.$Height$);
    this.$_tooltipMask$.$setInvisibleFill$();
    $DvtSparkChartDefaults$$ = ($DvtSparkChartDefaults$$ = this.$Options$.tooltip) ? $DvtSparkChartDefaults$$.renderer : null;
    $DvtSparkChartAutomation$$ = this.$Options$.color;
    $DvtSparkChartDefaults$$ ? ($DvtSparkChartEventManager$$ = {component:this.$Options$._widgetConstructor, color:$DvtSparkChartAutomation$$}, this.$_peer$ = new $dvt$$2$$.$CustomDatatipPeer$(this.$getCtx$().$getTooltipManager$(), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$), this.$EventManager$.$associate$(this.$_tooltipMask$, this.$_peer$)) : $DvtSparkChartEventManager$$ ? (this.$_peer$ = new $dvt$$2$$.$SimpleObjPeer$(null, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), 
    this.$EventManager$.$associate$(this.$_tooltipMask$, this.$_peer$)) : this.$_peer$ = null;
    this.$Options$._selectingCursor && this.setCursor("pointer");
    this.$UpdateAriaAttributes$();
    this.$_eventReceived$ && this.$RenderComplete$();
    this.$_isDoneRendering$ = !0;
  };
  $dvt$$2$$.$SparkChart$.prototype.$_onRenderEnd$ = function $$dvt$$2$$$$SparkChart$$$$_onRenderEnd$$($dvt$$2$$) {
    this.$_eventReceived$ = !0;
    "ready" == $dvt$$2$$.type && this.$_isDoneRendering$ && this.$RenderComplete$();
  };
  $dvt$$2$$.$SparkChart$.prototype.$getAutomation$ = function $$dvt$$2$$$$SparkChart$$$$getAutomation$$() {
    return new $DvtSparkChartAutomation$$(this);
  };
  $dvt$$2$$.$SparkChart$.prototype.$GetComponentDescription$ = function $$dvt$$2$$$$SparkChart$$$$GetComponentDescription$$() {
    return $dvt$$2$$.$Bundle$.$getTranslation$(this.$getOptions$(), "componentName", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "CHART");
  };
  $dvt$$2$$.$SparkChart$.prototype.$UpdateAriaAttributes$ = function $$dvt$$2$$$$SparkChart$$$$UpdateAriaAttributes$$() {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$Displayable$.$generateAriaLabel$($dvt$$2$$.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$()), this.$Options$.shortDesc ? [this.$Options$.shortDesc] : null);
    this.$IsParentRoot$() ? (this.$getCtx$().$setAriaRole$("img"), this.$getCtx$().$setAriaLabel$($dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "DATA_VISUALIZATION"), $DvtSparkChartEventManager$$]))) : (this.$setAriaRole$("img"), this.$setAriaProperty$("label", $DvtSparkChartEventManager$$));
  };
  $dvt$$2$$.$SparkChart$.prototype.$__getLogicalObject$ = function $$dvt$$2$$$$SparkChart$$$$__getLogicalObject$$() {
    return this.$_peer$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtSparkChartAutomation$$, $dvt$$2$$.$Automation$);
  $DvtSparkChartAutomation$$.prototype.$getDataItem$ = function $$DvtSparkChartAutomation$$$$$getDataItem$$($dvt$$2$$) {
    return ($dvt$$2$$ = this.$_sparkChart$.$_chart$.$getAutomation$().$getDataItem$(0, $dvt$$2$$)) ? {borderColor:$dvt$$2$$.borderColor, color:$dvt$$2$$.color, date:$dvt$$2$$.x, low:$dvt$$2$$.low, high:$dvt$$2$$.high, value:null == $dvt$$2$$.low || null == $dvt$$2$$.high ? $dvt$$2$$.value : $dvt$$2$$.high - $dvt$$2$$.low} : null;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtSparkChartDefaults$$, $dvt$$2$$.$BaseComponentDefaults$);
  $DvtSparkChartDefaults$$.$SKIN_ALTA$ = {skin:$dvt$$2$$.$CSSStyle$.$SKIN_ALTA$, color:"#267db3"};
  $DvtSparkChartDefaults$$.$VERSION_1$ = {skin:$dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$, type:"line", animationOnDisplay:"none", animationOnDataChange:"none", emptyText:null, color:"#666699", firstColor:null, lastColor:null, highColor:null, lowColor:null, visualEffects:"auto", baselineScaling:"min", barSpacing:"auto", lineWidth:1, lineStyle:"solid", lineType:"straight", markerSize:5, markerShape:"auto", barGapRatio:.25, _statusMessageStyle:new $dvt$$2$$.$CSSStyle$("font-size: 12px; color: #404259;")};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtSparkChartEventManager$$, $dvt$$2$$.$EventManager$);
  $DvtSparkChartEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtSparkChartEventManager$$$$$ProcessKeyboardEvent$$($DvtSparkChartEventManager$$) {
    if (!this.$KeyboardHandler$) {
      return !1;
    }
    if ($DvtSparkChartEventManager$$.keyCode == $dvt$$2$$.KeyboardEvent.$TAB$) {
      var $DvtSparkChartDefaults$$ = this.$_sparkChart$.$getCtx$().$getStageAbsolutePosition$();
      this.$ProcessObjectTooltip$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, this.$_sparkChart$.$__getLogicalObject$(), this.$_sparkChart$);
    }
    return !1;
  };
  $DvtSparkChartEventManager$$.prototype.$OnBlur$ = function $$DvtSparkChartEventManager$$$$$OnBlur$$($dvt$$2$$) {
    $DvtSparkChartEventManager$$.$superclass$.$OnBlur$.call(this, $dvt$$2$$);
    this.$hideTooltip$();
  };
  var $DvtSparkChartRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtSparkChartRenderer$$, $dvt$$2$$.$Obj$);
  $DvtSparkChartRenderer$$.$render$ = function $$DvtSparkChartRenderer$$$$render$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$_chart$, $DvtChartRefObjUtils$$ = $DvtSparkChartRenderer$$.$_convertOptionsObj$($dvt$$2$$), $DvtChartAxisUtils$$ = $dvt$$2$$.$getOptions$();
    if ("area" == $DvtChartAxisUtils$$.type || "line" == $DvtChartAxisUtils$$.type || "lineWithArea" == $DvtChartAxisUtils$$.type) {
      $dvt$$2$$ = $DvtSparkChartRenderer$$.$_getDataItems$($dvt$$2$$);
      var $DvtChartPieLabelUtils$$ = !1;
      if ($DvtChartAxisUtils$$.firstColor || $DvtChartAxisUtils$$.lastColor || $DvtChartAxisUtils$$.highColor || $DvtChartAxisUtils$$.lowColor) {
        $DvtChartPieLabelUtils$$ = !0;
      } else {
        for (var $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $dvt$$2$$.length;$DvtChartPieLabelInfo$$++) {
          if ($dvt$$2$$[$DvtChartPieLabelInfo$$] && "on" == $dvt$$2$$[$DvtChartPieLabelInfo$$].markerDisplayed) {
            $DvtChartPieLabelUtils$$ = !0;
            break;
          }
        }
      }
      if ($DvtChartPieLabelUtils$$ && 0 < $dvt$$2$$.length || "none" == $DvtChartAxisUtils$$.lineType) {
        $DvtChartAxisUtils$$ = $DvtChartAxisUtils$$.markerSize / 2, $DvtSparkChartEventManager$$ -= 2 * $DvtChartAxisUtils$$, $DvtSparkChartDefaults$$ -= 2 * $DvtChartAxisUtils$$, $DvtSparkChartAutomation$$.$setTranslate$($DvtChartAxisUtils$$, $DvtChartAxisUtils$$);
      }
    }
    $DvtSparkChartAutomation$$.$render$($DvtChartRefObjUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtSparkChartRenderer$$.$_getDataItems$ = function $$DvtSparkChartRenderer$$$$_getDataItems$$($dvt$$2$$) {
    return ($dvt$$2$$ = $dvt$$2$$.$getOptions$()) && $dvt$$2$$.items ? $dvt$$2$$.items : [];
  };
  $DvtSparkChartRenderer$$.$_convertOptionsObj$ = function $$DvtSparkChartRenderer$$$$_convertOptionsObj$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = {styleDefaults:{}, xAxis:{}, yAxis:{}, groups:[]};
    $DvtSparkChartAutomation$$.translations = $DvtSparkChartDefaults$$.translations;
    var $DvtChartRefObjUtils$$ = "floatingBar" == $DvtSparkChartDefaults$$.type, $DvtChartAxisUtils$$ = [], $DvtChartPieLabelUtils$$ = -1, $DvtChartPieLabelInfo$$ = -1, $DvtChartDataChangePyramidSlice$$ = -Infinity, $DvtChartPieRenderUtils$$ = Infinity;
    $DvtSparkChartEventManager$$ = $DvtSparkChartRenderer$$.$_getDataItems$($DvtSparkChartEventManager$$);
    for (var $DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartSeriesEffectUtils$$++) {
      var $DvtChartRangeMarker$$ = $DvtSparkChartEventManager$$[$DvtChartSeriesEffectUtils$$], $DvtChartStyleUtils$$ = {};
      $DvtChartRangeMarker$$ instanceof Object ? ($DvtChartRefObjUtils$$ ? ($DvtChartStyleUtils$$.low = $DvtChartRangeMarker$$.floatValue, $DvtChartStyleUtils$$.high = $DvtChartRangeMarker$$.floatValue + $DvtChartRangeMarker$$.value) : ($DvtChartStyleUtils$$.value = $DvtChartRangeMarker$$.value, $DvtChartStyleUtils$$.low = $DvtChartRangeMarker$$.low, $DvtChartStyleUtils$$.high = $DvtChartRangeMarker$$.high), $DvtChartRangeMarker$$.date && ($DvtSparkChartAutomation$$.timeAxisType = "enabled", $DvtSparkChartAutomation$$.groups.push($DvtChartRangeMarker$$.date)), 
      "on" == $DvtChartRangeMarker$$.markerDisplayed && ($DvtChartStyleUtils$$.markerDisplayed = "on"), $DvtChartRangeMarker$$.color && ($DvtChartStyleUtils$$.color = $DvtChartRangeMarker$$.color), $DvtChartRangeMarker$$.borderColor && ($DvtChartStyleUtils$$.borderColor = $DvtChartRangeMarker$$.borderColor), $DvtChartRangeMarker$$.markerShape && ($DvtChartStyleUtils$$.markerShape = $DvtChartRangeMarker$$.markerShape), $DvtChartRangeMarker$$.markerSize && ($DvtChartStyleUtils$$.markerSize = $DvtChartRangeMarker$$.markerSize), 
      $DvtChartRangeMarker$$.className && ($DvtChartStyleUtils$$.className = $DvtChartRangeMarker$$.className), $DvtChartRangeMarker$$.style && ($DvtChartStyleUtils$$.style = $DvtChartRangeMarker$$.style)) : $DvtChartStyleUtils$$.value = $DvtChartRangeMarker$$;
      $DvtChartAxisUtils$$.push($DvtChartStyleUtils$$);
      $DvtChartRangeMarker$$ = null != $DvtChartStyleUtils$$.value ? $DvtChartStyleUtils$$.value : Math.max($DvtChartStyleUtils$$.low, $DvtChartStyleUtils$$.high);
      $DvtChartDataChangePyramidSlice$$ < $DvtChartRangeMarker$$ && ($DvtChartDataChangePyramidSlice$$ = $DvtChartRangeMarker$$, $DvtChartPieLabelUtils$$ = $DvtChartSeriesEffectUtils$$);
      $DvtChartStyleUtils$$ = null != $DvtChartStyleUtils$$.value ? $DvtChartStyleUtils$$.value : Math.min($DvtChartStyleUtils$$.low, $DvtChartStyleUtils$$.high);
      $DvtChartPieRenderUtils$$ > $DvtChartStyleUtils$$ && ($DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$, $DvtChartPieLabelInfo$$ = $DvtChartSeriesEffectUtils$$);
    }
    $DvtSparkChartDefaults$$.highColor && 0 <= $DvtChartPieLabelUtils$$ && ($DvtChartAxisUtils$$[$DvtChartPieLabelUtils$$].markerDisplayed = "on", $DvtChartAxisUtils$$[$DvtChartPieLabelUtils$$].color || ($DvtChartAxisUtils$$[$DvtChartPieLabelUtils$$].color = $DvtSparkChartDefaults$$.highColor));
    $DvtSparkChartDefaults$$.lowColor && 0 <= $DvtChartPieLabelInfo$$ && ($DvtChartAxisUtils$$[$DvtChartPieLabelInfo$$].markerDisplayed = "on", $DvtChartAxisUtils$$[$DvtChartPieLabelInfo$$].color || ($DvtChartAxisUtils$$[$DvtChartPieLabelInfo$$].color = $DvtSparkChartDefaults$$.lowColor));
    $DvtSparkChartDefaults$$.firstColor && 0 < $DvtChartAxisUtils$$.length && ($DvtChartAxisUtils$$[0].markerDisplayed = "on", $DvtChartAxisUtils$$[0].color || ($DvtChartAxisUtils$$[0].color = $DvtSparkChartDefaults$$.firstColor));
    $DvtSparkChartDefaults$$.lastColor && 0 < $DvtChartAxisUtils$$.length && ($DvtChartAxisUtils$$[$DvtChartAxisUtils$$.length - 1].markerDisplayed = "on", $DvtChartAxisUtils$$[$DvtChartAxisUtils$$.length - 1].color || ($DvtChartAxisUtils$$[$DvtChartAxisUtils$$.length - 1].color = $DvtSparkChartDefaults$$.lastColor));
    $DvtSparkChartAutomation$$.series = [{items:$DvtChartAxisUtils$$, areaColor:$DvtSparkChartDefaults$$.areaColor, className:$DvtSparkChartDefaults$$.className, style:$DvtSparkChartDefaults$$.style, areaClassName:$DvtSparkChartDefaults$$.areaClassName, areaStyle:$DvtSparkChartDefaults$$.areaStyle}];
    $DvtSparkChartDefaults$$.referenceObjects && ($DvtSparkChartAutomation$$.yAxis.referenceObjects = $DvtSparkChartDefaults$$.referenceObjects);
    $DvtSparkChartAutomation$$.__spark = !0;
    $DvtChartAxisUtils$$ = $DvtSparkChartDefaults$$.barSpacing;
    "auto" == $DvtChartAxisUtils$$ && ($DvtChartAxisUtils$$ = 1 < $dvt$$2$$.$Agent$.$getDevicePixelRatio$() ? "subpixel" : "pixel");
    $DvtSparkChartAutomation$$.__sparkBarSpacing = $DvtChartAxisUtils$$;
    $DvtSparkChartAutomation$$.type = $DvtChartRefObjUtils$$ ? "bar" : $DvtSparkChartDefaults$$.type;
    $DvtSparkChartAutomation$$.animationOnDataChange = $DvtSparkChartDefaults$$.animationOnDataChange;
    $DvtSparkChartAutomation$$.animationOnDisplay = $DvtSparkChartDefaults$$.animationOnDisplay;
    $DvtSparkChartAutomation$$.emptyText = $DvtSparkChartDefaults$$.emptyText;
    $DvtSparkChartAutomation$$.styleDefaults.colors = [$DvtSparkChartDefaults$$.color];
    $DvtSparkChartAutomation$$.styleDefaults.animationDuration = $DvtSparkChartDefaults$$.animationDuration;
    $DvtSparkChartAutomation$$.styleDefaults.animationIndicators = "none";
    $DvtSparkChartAutomation$$.styleDefaults.lineWidth = $DvtSparkChartDefaults$$.lineWidth;
    $DvtSparkChartAutomation$$.styleDefaults.lineStyle = $DvtSparkChartDefaults$$.lineStyle;
    $DvtSparkChartAutomation$$.styleDefaults.lineType = $DvtSparkChartDefaults$$.lineType;
    $DvtSparkChartAutomation$$.styleDefaults.markerSize = $DvtSparkChartDefaults$$.markerSize;
    $DvtSparkChartAutomation$$.styleDefaults.markerShape = $DvtSparkChartDefaults$$.markerShape;
    $DvtSparkChartAutomation$$.styleDefaults.barGapRatio = $DvtSparkChartDefaults$$.barGapRatio;
    $DvtSparkChartAutomation$$.styleDefaults.dataItemGaps = "0%";
    $DvtSparkChartAutomation$$.xAxis.rendered = "off";
    $DvtSparkChartAutomation$$.yAxis.rendered = "off";
    $DvtChartRefObjUtils$$ = "zero" == $DvtSparkChartDefaults$$.baselineScaling;
    $DvtChartAxisUtils$$ = $DvtChartDataChangePyramidSlice$$ != $DvtChartPieRenderUtils$$ ? .1 * ($DvtChartDataChangePyramidSlice$$ - $DvtChartPieRenderUtils$$) : .1 * Math.abs($DvtChartDataChangePyramidSlice$$);
    $DvtSparkChartAutomation$$.yAxis.min = $DvtChartRefObjUtils$$ && 0 <= $DvtChartPieRenderUtils$$ ? 0 : $DvtChartPieRenderUtils$$ - $DvtChartAxisUtils$$;
    $DvtSparkChartAutomation$$.yAxis.max = $DvtChartRefObjUtils$$ && 0 >= $DvtChartDataChangePyramidSlice$$ ? 0 : $DvtChartDataChangePyramidSlice$$ + $DvtChartAxisUtils$$;
    $DvtSparkChartAutomation$$.styleDefaults.seriesEffect = "none" == $DvtSparkChartDefaults$$.visualEffects || "area" != $DvtSparkChartDefaults$$.type && "lineWithArea" != $DvtSparkChartDefaults$$.type ? "color" : "gradient";
    $DvtSparkChartAutomation$$.layout = {gapWidthRatio:0, gapHeightRatio:0};
    $DvtSparkChartAutomation$$.legend = {rendered:"off"};
    $DvtSparkChartAutomation$$._statusMessageStyle = $DvtSparkChartDefaults$$._statusMessageStyle;
    return $DvtSparkChartAutomation$$;
  };
  $dvt$$2$$.$exportProperty$($dvt$$2$$, "Chart", $dvt$$2$$.$Chart$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$, "newInstance", $dvt$$2$$.$Chart$.newInstance);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "destroy", $dvt$$2$$.$Chart$.prototype.$destroy$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "getAutomation", $dvt$$2$$.$Chart$.prototype.$getAutomation$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "getDefaults", $dvt$$2$$.$Chart$.prototype.$getDefaults$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "getValuesAt", $dvt$$2$$.$Chart$.prototype.$getValuesAt$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "highlight", $dvt$$2$$.$Chart$.prototype.$highlight$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "positionDataCursor", $dvt$$2$$.$Chart$.prototype.$positionDataCursor$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "render", $dvt$$2$$.$Chart$.prototype.$render$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "select", $dvt$$2$$.$Chart$.prototype.select);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getDomElementForSubId", $DvtChartAutomation$$.prototype.$getDomElementForSubId$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getDataItem", $DvtChartAutomation$$.prototype.$getDataItem$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getGroup", $DvtChartAutomation$$.prototype.$getGroup$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getSeries", $DvtChartAutomation$$.prototype.$getSeries$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getGroupCount", $DvtChartAutomation$$.prototype.$getGroupCount$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getSeriesCount", $DvtChartAutomation$$.prototype.$getSeriesCount$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getTitle", $DvtChartAutomation$$.prototype.$getTitle$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getLegend", $DvtChartAutomation$$.prototype.$getLegend$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getPlotArea", $DvtChartAutomation$$.prototype.$getPlotArea$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getXAxis", $DvtChartAutomation$$.prototype.$getXAxis$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getYAxis", $DvtChartAutomation$$.prototype.$getYAxis$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getY2Axis", $DvtChartAutomation$$.prototype.$getY2Axis$);
  $dvt$$2$$.$exportProperty$($DvtChartDataItem$$.prototype, "getId", $DvtChartDataItem$$.prototype.getId);
  $dvt$$2$$.$exportProperty$($DvtChartDataItem$$.prototype, "getSeries", $DvtChartDataItem$$.prototype.$getSeries$);
  $dvt$$2$$.$exportProperty$($DvtChartDataItem$$.prototype, "getGroup", $DvtChartDataItem$$.prototype.$getGroup$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$, "SparkChart", $dvt$$2$$.$SparkChart$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$SparkChart$, "newInstance", $dvt$$2$$.$SparkChart$.newInstance);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$SparkChart$.prototype, "destroy", $dvt$$2$$.$SparkChart$.prototype.$destroy$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$SparkChart$.prototype, "getAutomation", $dvt$$2$$.$SparkChart$.prototype.$getAutomation$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$SparkChart$.prototype, "getDefaults", $dvt$$2$$.$SparkChart$.prototype.$getDefaults$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$SparkChart$.prototype, "render", $dvt$$2$$.$SparkChart$.prototype.$render$);
  $dvt$$2$$.$exportProperty$($DvtSparkChartAutomation$$.prototype, "getDataItem", $DvtSparkChartAutomation$$.prototype.$getDataItem$);
})(dvt);
