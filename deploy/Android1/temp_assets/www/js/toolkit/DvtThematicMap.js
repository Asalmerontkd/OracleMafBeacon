(function($dvt$$12$$) {
  function $DvtThematicMapControlPanel$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  }
  function $DvtThematicMapJsonParser$$($dvt$$12$$) {
    this.Init($dvt$$12$$);
  }
  function $DvtThematicMapEventManager$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  }
  function $DvtThematicMapKeyboardHandler$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$);
  }
  function $DvtMapDataLayer$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
  }
  function $DvtMapCustomAreaLayer$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
  }
  function $DvtMapAreaLayer$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
  }
  function $DvtMapLayer$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  }
  function $DvtMapArea$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$);
  }
  function $DvtMapLinkPeer$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$);
  }
  function $DvtMapAreaPeer$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
  }
  function $DvtMapObjPeer$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
  }
  function $DvtMapLabel$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$);
  }
  function $DvtThematicMapCategoryWrapper$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$);
  }
  function $DvtCustomDataItem$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  }
  function $DvtDrillablePath$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$);
  }
  function $DvtThematicMapAutomation$$($dvt$$12$$) {
    this.$_tmap$ = $dvt$$12$$;
  }
  function $DvtThematicMapDefaults$$() {
    this.Init({fusion:$DvtThematicMapDefaults$$.DEFAULT, alta:$DvtThematicMapDefaults$$.$SKIN_ALTA$});
  }
  $dvt$$12$$.$AmxThematicMap$ = function $$dvt$$12$$$$AmxThematicMap$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  };
  $dvt$$12$$.$Obj$.$createSubclass$($dvt$$12$$.$AmxThematicMap$, $dvt$$12$$.$Container$);
  $dvt$$12$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$ = 10;
  $dvt$$12$$.$AmxThematicMap$.prototype.Init = function $$dvt$$12$$$$AmxThematicMap$$$Init$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $dvt$$12$$.$AmxThematicMap$.$superclass$.Init.call(this, $DvtThematicMapControlPanel$$);
    this.$_tmap$ = new $dvt$$12$$.$ThematicMap$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
    this.$_tmapContainer$ = new $dvt$$12$$.$Container$($DvtThematicMapControlPanel$$);
    this.$_tmapContainer$.$addChild$(this.$_tmap$);
    this.$addChild$(this.$_tmapContainer$);
    this.$Defaults$ = new $DvtThematicMapDefaults$$;
  };
  $dvt$$12$$.$AmxThematicMap$.newInstance = function $$dvt$$12$$$$AmxThematicMap$$newInstance$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    return new $dvt$$12$$.$AmxThematicMap$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
  };
  $dvt$$12$$.$AmxThematicMap$.prototype.$render$ = function $$dvt$$12$$$$AmxThematicMap$$$$render$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    this.$Options$ = this.$Defaults$.$calcOptions$($DvtThematicMapControlPanel$$);
    this.$_width$ = $DvtThematicMapJsonParser$$;
    this.$_height$ = $DvtThematicMapEventManager$$;
    $DvtThematicMapJsonParser$$ = new $dvt$$12$$.$Rectangle$(0, 0, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
    this.$_renderLegend$(this, $DvtThematicMapJsonParser$$);
    this.$_tmap$.$render$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$.$w$, $DvtThematicMapJsonParser$$.$h$);
  };
  $dvt$$12$$.$AmxThematicMap$.prototype.$_renderLegend$ = function $$dvt$$12$$$$AmxThematicMap$$$$_renderLegend$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.$_legend$ && ($DvtThematicMapControlPanel$$.removeChild(this.$_legend$), this.$_legend$ = null);
    var $DvtThematicMapEventManager$$ = new $dvt$$12$$.$Rectangle$($dvt$$12$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$, $dvt$$12$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$, $DvtThematicMapJsonParser$$.$w$ - 2 * $dvt$$12$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$, $DvtThematicMapJsonParser$$.$h$ - 2 * $dvt$$12$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$), $DvtThematicMapKeyboardHandler$$ = this.$Options$, $DvtMapDataLayer$$ = $DvtThematicMapKeyboardHandler$$.legend.rendered, $DvtMapCustomAreaLayer$$ = 
    $DvtThematicMapKeyboardHandler$$.legend.scrolling, $DvtMapAreaLayer$$ = $dvt$$12$$.$JsonUtils$.clone($DvtThematicMapKeyboardHandler$$.legend);
    this.$_addLegendData$(this.$Options$, $DvtMapAreaLayer$$);
    var $DvtMapLayer$$ = $DvtMapAreaLayer$$.sections;
    if ($DvtMapDataLayer$$ && (!$DvtMapLayer$$ || 0 != $DvtMapLayer$$.length) && ($DvtMapDataLayer$$ = $DvtThematicMapKeyboardHandler$$.legend.position, delete $DvtMapAreaLayer$$.position, $DvtMapAreaLayer$$.layout.gapRatio = this.$getGapRatio$(), $DvtMapAreaLayer$$.hideAndShowBehavior = "none", $DvtMapAreaLayer$$.rolloverBehavior = "none", $DvtMapAreaLayer$$.scrolling = $DvtThematicMapKeyboardHandler$$.legend.scrolling, $DvtMapLayer$$ = $dvt$$12$$.$Legend$.newInstance(this.$_tmap$.$getCtx$()), $DvtThematicMapControlPanel$$.$addChild$($DvtMapLayer$$), 
    "auto" == $DvtMapDataLayer$$ && "asNeeded" !== $DvtMapCustomAreaLayer$$ ? $DvtMapDataLayer$$ = "bottom" : "auto" == $DvtMapDataLayer$$ && "asNeeded" == $DvtMapCustomAreaLayer$$ && ($DvtMapDataLayer$$ = "end"), $DvtMapCustomAreaLayer$$ = $dvt$$12$$.$Agent$.$isRightToLeft$($DvtThematicMapControlPanel$$.$getCtx$()), "start" == $DvtMapDataLayer$$ ? $DvtMapDataLayer$$ = $DvtMapCustomAreaLayer$$ ? "right" : "left" : "end" == $DvtMapDataLayer$$ && ($DvtMapDataLayer$$ = $DvtMapCustomAreaLayer$$ ? "left" : 
    "right"), $DvtMapAreaLayer$$.orientation = "left" == $DvtMapDataLayer$$ || "right" == $DvtMapDataLayer$$ ? "vertical" : "horizontal", $DvtMapCustomAreaLayer$$ = "top" == $DvtMapDataLayer$$ || "bottom" == $DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$ = $DvtMapLayer$$.$getPreferredSize$($DvtMapAreaLayer$$, $DvtMapCustomAreaLayer$$ ? $DvtThematicMapEventManager$$.$w$ : $DvtThematicMapKeyboardHandler$$.layout.legendMaxSize * $DvtThematicMapEventManager$$.$w$, $DvtMapCustomAreaLayer$$ ? $DvtThematicMapKeyboardHandler$$.layout.legendMaxSize * 
    $DvtThematicMapEventManager$$.$h$ : $DvtThematicMapEventManager$$.$h$), 0 < $DvtMapCustomAreaLayer$$.$w$ && 0 < $DvtMapCustomAreaLayer$$.$h$)) {
      switch($DvtMapLayer$$.$render$($DvtMapAreaLayer$$, $DvtMapCustomAreaLayer$$.$w$, $DvtMapCustomAreaLayer$$.$h$), this.$_legend$ = $DvtMapLayer$$, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapDefaults$$.$getGapSize$(this, $DvtThematicMapKeyboardHandler$$.layout.legendGap), $dvt$$12$$.$LayoutUtils$.position($DvtThematicMapEventManager$$, $DvtMapDataLayer$$, $DvtMapLayer$$, $DvtMapCustomAreaLayer$$.$w$, $DvtMapCustomAreaLayer$$.$h$, $DvtThematicMapKeyboardHandler$$), $DvtMapDataLayer$$) {
        case "top":
          this.$_tmapContainer$.$setTranslateY$($DvtMapCustomAreaLayer$$.$h$ + $dvt$$12$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$);
        case "bottom":
          $DvtThematicMapJsonParser$$.$h$ -= $DvtMapCustomAreaLayer$$.$h$ + $dvt$$12$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$;
          break;
        case "left":
          this.$_tmapContainer$.$setTranslateX$($DvtMapCustomAreaLayer$$.$w$ + $dvt$$12$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$);
        case "right":
          $DvtThematicMapJsonParser$$.$w$ -= $DvtMapCustomAreaLayer$$.$w$ + $dvt$$12$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$;
      }
    }
  };
  $dvt$$12$$.$AmxThematicMap$.prototype.$getGapRatio$ = function $$dvt$$12$$$$AmxThematicMap$$$$getGapRatio$$() {
    return null === this.$Options$.layout.gapRatio || isNaN(this.$Options$.layout.gapRatio) ? Math.min(Math.min(this.$_width$ / 400, 1), Math.min(this.$_height$ / 300, 1)) : this.$Options$.layout.gapRatio;
  };
  $dvt$$12$$.$AmxThematicMap$.prototype.$_addLegendData$ = function $$dvt$$12$$$$AmxThematicMap$$$$_addLegendData$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtThematicMapControlPanel$$.title = $dvt$$12$$.legend ? $dvt$$12$$.legend.title : null;
    $DvtThematicMapControlPanel$$.sections = [];
    if ($dvt$$12$$ && $dvt$$12$$.legend && $dvt$$12$$.legend.sections) {
      for (var $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $dvt$$12$$.legend.sections.length;$DvtThematicMapJsonParser$$++) {
        var $DvtThematicMapEventManager$$ = $dvt$$12$$.legend.sections[$DvtThematicMapJsonParser$$];
        $DvtThematicMapEventManager$$ && $DvtThematicMapControlPanel$$.sections.push({title:$DvtThematicMapEventManager$$.title, items:$DvtThematicMapEventManager$$.items, sections:$DvtThematicMapEventManager$$.sections});
      }
    }
    return $DvtThematicMapControlPanel$$;
  };
  $dvt$$12$$.$AmxThematicMap$.prototype.$getDomElementForSubId$ = function $$dvt$$12$$$$AmxThematicMap$$$$getDomElementForSubId$$($dvt$$12$$) {
    var $DvtThematicMapControlPanel$$;
    this.$_legend$ && ($DvtThematicMapControlPanel$$ = this.$_legend$.$getAutomation$().$getDomElementForSubId$($dvt$$12$$));
    return $DvtThematicMapControlPanel$$ ? $DvtThematicMapControlPanel$$ : this.$_tmap$.$getAutomation$().$getDomElementForSubId$($dvt$$12$$);
  };
  $dvt$$12$$.$AmxThematicMap$.prototype.$getSubIdForDomElement$ = function $$dvt$$12$$$$AmxThematicMap$$$$getSubIdForDomElement$$($dvt$$12$$) {
    var $DvtThematicMapControlPanel$$;
    this.$_legend$ && ($DvtThematicMapControlPanel$$ = this.$_legend$.$getAutomation$().$getSubIdForDomElement$($dvt$$12$$));
    return $DvtThematicMapControlPanel$$ ? $DvtThematicMapControlPanel$$ : this.$_tmap$.$getAutomation$().$getSubIdForDomElement$($dvt$$12$$);
  };
  $dvt$$12$$.$ThematicMap$ = function $$dvt$$12$$$$ThematicMap$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.Init($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  };
  $dvt$$12$$.$Obj$.$createSubclass$($dvt$$12$$.$ThematicMap$, $dvt$$12$$.$PanZoomComponent$);
  $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_PAN$ = 1;
  $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_ZOOM$ = 2;
  $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOM$ = 3;
  $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_ZOOMTOFIT$ = 4;
  $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOMTOFIT$ = 5;
  $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_ZOOM_ZOOMTOFIT$ = 6;
  $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_ALL$ = 7;
  $dvt$$12$$.$ThematicMap$.$_COLLAPSIBLE_PANEL_OFFSET$ = 5;
  $dvt$$12$$.$ThematicMap$.$_ELEM_RESOURCES_CONTROLPANEL$ = "controlPanelResources";
  $dvt$$12$$.$ThematicMap$.$_ELEM_RESOURCES_LEGEND$ = "legendResources";
  $dvt$$12$$.$ThematicMap$.$_ELEM_RESOURCES_PANEL_DRAWER$ = "panelDrawerResources";
  $dvt$$12$$.$ThematicMap$.$_ELEM_RESOURCES$ = "resources";
  $dvt$$12$$.$ThematicMap$.$DEFAULT_MAX_ZOOM_FACTOR$ = 6;
  $dvt$$12$$.$ThematicMap$.prototype.Init = function $$dvt$$12$$$$ThematicMap$$$Init$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $dvt$$12$$.$ThematicMap$.$superclass$.Init.call(this, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
    this.$_createHandlers$();
    this.$_layers$ = [];
    this.$_drillAnimFadeOutObjs$ = [];
    this.$_legendData$ = this.$_legendPanel$ = this.$_legend$ = null;
    this.$_bBaseMapChanged$ = !1;
    this.$_drilledRowKeys$ = [];
    this.$_initDrilled$ = {};
    this.$_processingInitDrilled$ = !1;
    this.$_drillDataLayer$ = {};
    this.$_childToParent$ = {};
    this.$_drilled$ = [];
    this.$_createLayers$();
    this.$_panning$ = this.$_zooming$ = this.$_initialZooming$ = !1;
    this.$_maxZoomFactor$ = $dvt$$12$$.$ThematicMap$.$DEFAULT_MAX_ZOOM_FACTOR$;
    this.$_isMarkerZoomBehaviorFixed$ = !0;
    this.$_selectedAreas$ = {};
    this.$_bListenersRemoved$ = !1;
    this.$_showPopupBehaviors$ = null;
    this.$setDisplayedControls$($dvt$$12$$.$ControlPanel$.$CONTROLS_ALL$);
    this.$Defaults$ = new $DvtThematicMapDefaults$$;
    this.$EventManager$.$associate$(this, this);
    this.$_bRendered$ = !1;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_createLayers$ = function $$dvt$$12$$$$ThematicMap$$$$_createLayers$$() {
    this.$_areaLayers$ = new $dvt$$12$$.$Container$(this.$getCtx$());
    this.$_dataAreaLayers$ = new $dvt$$12$$.$Container$(this.$getCtx$());
    this.$_dataPointLayers$ = new $dvt$$12$$.$Container$(this.$getCtx$());
    this.$_labelLayers$ = new $dvt$$12$$.$Container$(this.$getCtx$());
    this.$_linkLayers$ = new $dvt$$12$$.$Container$(this.$getCtx$());
  };
  $dvt$$12$$.$ThematicMap$.newInstance = function $$dvt$$12$$$$ThematicMap$$newInstance$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    return new $dvt$$12$$.$ThematicMap$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$SetOptions$ = function $$dvt$$12$$$$ThematicMap$$$$SetOptions$$($DvtThematicMapControlPanel$$) {
    $dvt$$12$$.$ThematicMap$.$superclass$.$SetOptions$.call(this, $DvtThematicMapControlPanel$$);
    $dvt$$12$$.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnMapChange = "none", this.$Options$.animationOnDrill = "none");
    (new $DvtThematicMapJsonParser$$(this)).parse(this.$Options$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setStyleDefaults$ = function $$dvt$$12$$$$ThematicMap$$$$setStyleDefaults$$($dvt$$12$$) {
    this.$_styleDefaults$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$getMaxZoomFactor$ = function $$dvt$$12$$$$ThematicMap$$$$getMaxZoomFactor$$() {
    return this.$_zooming$ ? this.$_maxZoomFactor$ : 1;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setMaxZoomFactor$ = function $$dvt$$12$$$$ThematicMap$$$$setMaxZoomFactor$$($dvt$$12$$) {
    this.$_maxZoomFactor$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setMarkerZoomBehavior$ = function $$dvt$$12$$$$ThematicMap$$$$setMarkerZoomBehavior$$($dvt$$12$$) {
    this.$_isMarkerZoomBehaviorFixed$ = "fixed" == $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$addPointLayer$ = function $$dvt$$12$$$$ThematicMap$$$$addPointLayer$$($dvt$$12$$) {
    this.$_layers$.push($dvt$$12$$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$addLayer$ = function $$dvt$$12$$$$ThematicMap$$$$addLayer$$($dvt$$12$$) {
    this.$_layers$.push($dvt$$12$$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$getLayer$ = function $$dvt$$12$$$$ThematicMap$$$$getLayer$$($dvt$$12$$) {
    for (var $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < this.$_layers$.length;$DvtThematicMapControlPanel$$++) {
      if (this.$_layers$[$DvtThematicMapControlPanel$$].$LayerName$ == $dvt$$12$$) {
        return this.$_layers$[$DvtThematicMapControlPanel$$];
      }
    }
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setMapName$ = function $$dvt$$12$$$$ThematicMap$$$$setMapName$$($dvt$$12$$) {
    this.$_bBaseMapChanged$ = this.$_mapName$ && this.$_mapName$ != $dvt$$12$$;
    this.$_mapName$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setAnimationOnDisplay$ = function $$dvt$$12$$$$ThematicMap$$$$setAnimationOnDisplay$$($dvt$$12$$) {
    this.$_animationOnDisplay$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setAnimationOnMapChange$ = function $$dvt$$12$$$$ThematicMap$$$$setAnimationOnMapChange$$($dvt$$12$$) {
    this.$_animationOnMapChange$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setAnimationDuration$ = function $$dvt$$12$$$$ThematicMap$$$$setAnimationDuration$$($dvt$$12$$) {
    this.$_animationDuration$ = parseFloat($dvt$$12$$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$getAnimationDuration$ = function $$dvt$$12$$$$ThematicMap$$$$getAnimationDuration$$() {
    return this.$_animationDuration$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setDisplayTooltips$ = function $$dvt$$12$$$$ThematicMap$$$$setDisplayTooltips$$($dvt$$12$$) {
    this.$_displayTooltips$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setFeaturesOff$ = function $$dvt$$12$$$$ThematicMap$$$$setFeaturesOff$$($DvtThematicMapControlPanel$$) {
    $DvtThematicMapControlPanel$$ = parseInt($DvtThematicMapControlPanel$$);
    var $DvtThematicMapJsonParser$$ = this.$_displayedControls$;
    if ($DvtThematicMapControlPanel$$ == $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_PAN$ || $DvtThematicMapControlPanel$$ == $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOM$ || $DvtThematicMapControlPanel$$ == $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOMTOFIT$ || $DvtThematicMapControlPanel$$ == $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_ALL$) {
      $DvtThematicMapJsonParser$$ &= ~$dvt$$12$$.$ControlPanel$.$CONTROLS_CENTER_BUTTON$, this.$setPanning$(!1);
    }
    if ($DvtThematicMapControlPanel$$ == $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_ZOOM$ || $DvtThematicMapControlPanel$$ == $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOM$ || $DvtThematicMapControlPanel$$ == $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_ZOOM_ZOOMTOFIT$ || $DvtThematicMapControlPanel$$ == $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_ALL$) {
      $DvtThematicMapJsonParser$$ &= ~$dvt$$12$$.$ControlPanel$.$CONTROLS_ZOOM$, this.$setZooming$(!1);
    }
    if ($DvtThematicMapControlPanel$$ == $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_ZOOMTOFIT$ || $DvtThematicMapControlPanel$$ == $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOMTOFIT$ || $DvtThematicMapControlPanel$$ == $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_ZOOM_ZOOMTOFIT$ || $DvtThematicMapControlPanel$$ == $dvt$$12$$.$ThematicMap$.$_FEATURES_OFF_ALL$) {
      $DvtThematicMapJsonParser$$ &= ~$dvt$$12$$.$ControlPanel$.$CONTROLS_ZOOM_TO_FIT_BUTTON$;
    }
    this.$setDisplayedControls$($DvtThematicMapJsonParser$$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setInitialCenterX$ = function $$dvt$$12$$$$ThematicMap$$$$setInitialCenterX$$($dvt$$12$$) {
    this.$_initialCenterX$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setInitialCenterY$ = function $$dvt$$12$$$$ThematicMap$$$$setInitialCenterY$$($dvt$$12$$) {
    this.$_initialCenterY$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setInitialZoom$ = function $$dvt$$12$$$$ThematicMap$$$$setInitialZoom$$($dvt$$12$$) {
    this.$_initialZoom$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setAnimationOnDrill$ = function $$dvt$$12$$$$ThematicMap$$$$setAnimationOnDrill$$($dvt$$12$$) {
    this.$_animationOnDrill$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setDrillMode$ = function $$dvt$$12$$$$ThematicMap$$$$setDrillMode$$($dvt$$12$$) {
    this.$_drillMode$ = $dvt$$12$$;
    this.$EventManager$.$setDrillMode$($dvt$$12$$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setInitialZooming$ = function $$dvt$$12$$$$ThematicMap$$$$setInitialZooming$$($dvt$$12$$) {
    this.$_initialZooming$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$PreRender$ = function $$dvt$$12$$$$ThematicMap$$$$PreRender$$() {
    $dvt$$12$$.$ThematicMap$.$superclass$.$PreRender$.call(this);
    !this.$_isResize$ && this.$_pzcContainer$ && (this.$_layers$ = [], this.$_drilledRowKeys$ = [], this.$_initDrilled$ = {}, this.$_drillDataLayer$ = {}, this.$_childToParent$ = {}, this.$_drilled$ = [], this.removeChild(this.$_legendPanel$), this.$_legendData$ = this.$_legend$ = this.$_legendPanel$ = null, this.$setDisplayedControls$($dvt$$12$$.$ControlPanel$.$CONTROLS_ALL$), this.$_panning$ = this.$_zooming$ = !0, this.$_oldPzc$ = this.$_pzc$, this.$_createLayers$(), this.$_showPopupBehaviors$ = 
    null, this.$EventManager$.$removeListeners$(this), this.$_createHandlers$(), this.$_bListenersRemoved$ = !1, this.$EventManager$.$hideTooltip$(), this.$EventManager$.$associate$(this, this));
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_createHandlers$ = function $$dvt$$12$$$$ThematicMap$$$$_createHandlers$$() {
    this.$EventManager$ = new $DvtThematicMapEventManager$$(this.$getCtx$(), this.dispatchEvent, this);
    this.$EventManager$.$addListeners$(this);
    $dvt$$12$$.$Agent$.$isTouchDevice$() ? this.$_keyboardHandler$ = null : (this.$_keyboardHandler$ = new $DvtThematicMapKeyboardHandler$$(this, this.$EventManager$), this.$EventManager$.$setKeyboardHandler$(this.$_keyboardHandler$));
  };
  $dvt$$12$$.$ThematicMap$.prototype.$HandleLegendResize$ = function $$dvt$$12$$$$ThematicMap$$$$HandleLegendResize$$($DvtThematicMapControlPanel$$) {
    $dvt$$12$$.$Agent$.$isRightToLeft$(this.$getCtx$()) || ($DvtThematicMapControlPanel$$ = this.getWidth() - 5 - $DvtThematicMapControlPanel$$.getWidth(), this.$_legendPanel$.$setTranslateX$($DvtThematicMapControlPanel$$));
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_renderLegend$ = function $$dvt$$12$$$$ThematicMap$$$$_renderLegend$$() {
    if (this.$_legendData$) {
      this.$_legendPanel$ && (this.$_legendPanel$.$destroy$(), this.removeChild(this.$_legendPanel$));
      var $DvtThematicMapControlPanel$$ = "true" == this.$_legendData$.disclosed, $DvtThematicMapJsonParser$$ = "fixed" == this.$_legendData$.display || $dvt$$12$$.$Agent$.$isEnvironmentBatik$();
      if (!$DvtThematicMapJsonParser$$ || $DvtThematicMapControlPanel$$) {
        var $DvtThematicMapEventManager$$ = this.$_legendData$.maxWidth, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapEventManager$$.indexOf("%"), $DvtThematicMapEventManager$$ = -1 != $DvtThematicMapKeyboardHandler$$ ? parseFloat($DvtThematicMapEventManager$$.substring(0, $DvtThematicMapKeyboardHandler$$)) / 100 * this.getWidth() : parseFloat($DvtThematicMapEventManager$$), $DvtThematicMapKeyboardHandler$$ = this.getHeight() - 2 * $dvt$$12$$.$ThematicMap$.$_COLLAPSIBLE_PANEL_OFFSET$;
        this.$_skinName$ == $dvt$$12$$.$CSSStyle$.$SKIN_ALTA$ ? (this.$_legendPanel$ = new $dvt$$12$$.$PanelDrawer$(this.$getCtx$(), null, this, "pd"), this.$_legendPanel$.$addEvtListener$($dvt$$12$$.$PanelDrawerEvent$.$TYPE$, this.$HandleLegendEvent$, !1, this), this.$_legendPanel$.$setMaxWidth$($DvtThematicMapEventManager$$), this.$_legendPanel$.$setMaxHeight$($DvtThematicMapKeyboardHandler$$), this.$_legendPanel$.$setFixed$($DvtThematicMapJsonParser$$), $dvt$$12$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? 
        (this.$_legendPanel$.$setDiscloseDirection$($dvt$$12$$.$PanelDrawer$.$DIR_RIGHT$), this.$_legendPanel$.$setTranslateX$(0)) : this.$_legendPanel$.$setTranslateX$(this.getWidth())) : (this.$_legendPanel$ = new $dvt$$12$$.$CollapsiblePanel$(this.$getCtx$(), $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $dvt$$12$$.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$, this.$getResourcesMap$(), this.$getSubcomponentStyles$(), $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$), this.$_legendPanel$.$addEvtListener$($dvt$$12$$.$CollapsiblePanelEvent$.$TYPE$, 
        this.$HandleLegendEvent$, !1, this), this.$_legendPanel$.$addEvtListener$($dvt$$12$$.$ResizeEvent$.$RESIZE_EVENT$, this.$HandleLegendResize$, !1, this), this.$_legendPanel$.$setButtonTooltips$(this.$_legendData$.expandTooltip, this.$_legendData$.collapseTooltip));
        $DvtThematicMapEventManager$$ = this.$_legendData$;
        this.$_legend$ = $dvt$$12$$.$Legend$.newInstance(this.$getCtx$(), this.$processLegendEvent$, this);
        this.$addChild$(this.$_legendPanel$);
        this.$addChild$(this.$_legend$);
        $DvtThematicMapKeyboardHandler$$ = this.$_legend$.$getPreferredSize$($DvtThematicMapEventManager$$, this.$_legendPanel$.$getMaxContentWidth$(), this.$_legendPanel$.$getMaxContentHeight$());
        this.$_legend$.$render$($DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$.$w$, $DvtThematicMapKeyboardHandler$$.$h$);
        var $DvtMapDataLayer$$;
        if (this.$_skinName$ == $dvt$$12$$.$CSSStyle$.$SKIN_ALTA$) {
          this.$_legendPanel$.$setMaxContainerHeight$(this.$_legend$.$getContentDimensions$().$h$);
          this.removeChild(this.$_legend$);
          var $DvtThematicMapEventManager$$ = new $dvt$$12$$.Image(this.$getCtx$(), this.$getResourcesMap$()[$dvt$$12$$.$PanelDrawer$.$PANEL_LEGEND_ICON_ENA$], 0, 0, $dvt$$12$$.$PanelDrawer$.$IMAGE_SIZE$, $dvt$$12$$.$PanelDrawer$.$IMAGE_SIZE$), $DvtThematicMapKeyboardHandler$$ = new $dvt$$12$$.Image(this.$getCtx$(), this.$getResourcesMap$()[$dvt$$12$$.$PanelDrawer$.$PANEL_LEGEND_ICON_OVR$], 0, 0, $dvt$$12$$.$PanelDrawer$.$IMAGE_SIZE$, $dvt$$12$$.$PanelDrawer$.$IMAGE_SIZE$), $DvtMapCustomAreaLayer$$ = 
          new $dvt$$12$$.Image(this.$getCtx$(), this.$getResourcesMap$()[$dvt$$12$$.$PanelDrawer$.$PANEL_LEGEND_ICON_DWN$], 0, 0, $dvt$$12$$.$PanelDrawer$.$IMAGE_SIZE$, $dvt$$12$$.$PanelDrawer$.$IMAGE_SIZE$), $DvtMapAreaLayer$$ = $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "LEGEND");
          this.$_legendPanel$.$addPanel$(this.$_legend$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapCustomAreaLayer$$, $DvtMapAreaLayer$$, $dvt$$12$$.$PanelDrawer$.$PANEL_LEGEND$);
          this.$_legendPanel$.$renderComponent$();
          $DvtThematicMapControlPanel$$ && this.$_legendPanel$.$setDisclosed$(!0, !0);
        } else {
          this.$_legendPanel$.$addContent$(this.$_legend$), $DvtMapDataLayer$$ = this.$_legendPanel$.$getDimensions$(), $DvtThematicMapControlPanel$$ = $dvt$$12$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? 5 : this.getWidth() - 5 - $DvtMapDataLayer$$.$w$ - $DvtMapDataLayer$$.x, this.$_legendPanel$.$setTranslate$($DvtThematicMapControlPanel$$, 5), $DvtMapDataLayer$$.$w$ += 5;
        }
        if (this.$_isFixedLegend$ = $DvtThematicMapJsonParser$$) {
          $DvtMapDataLayer$$ || ($DvtMapDataLayer$$ = this.$_legendPanel$.$getDimensions$()), this.$_legendWidth$ = $DvtMapDataLayer$$.$w$, this.$_pzc$.$setSize$(this.getWidth() - this.$_legendWidth$, this.getHeight(), !0);
        }
      }
    }
  };
  $dvt$$12$$.$ThematicMap$.prototype.$Render$ = function $$dvt$$12$$$$ThematicMap$$$$Render$$() {
    $dvt$$12$$.$ThematicMap$.$superclass$.$Render$.call(this);
    var $DvtThematicMapControlPanel$$ = new $dvt$$12$$.$Container$(this.$getCtx$()), $DvtThematicMapJsonParser$$ = new $dvt$$12$$.$Container$(this.$getCtx$());
    this.$_pzc$ = this.$_panZoomCanvas$;
    this.$_pzc$.$addChild$($DvtThematicMapControlPanel$$);
    this.$_pzc$.$_contentPane$.$addChild$($DvtThematicMapJsonParser$$);
    this.$_render$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
    if (this.$_topLayer$) {
      (this.$_controlPanel$ = this.$_pzc$.$_controlPanel$) && this.$_pzc$.$addChild$(this.$_controlPanel$);
      this.$StopAnimation$(!0);
      $DvtThematicMapJsonParser$$ = new $dvt$$12$$.$Rectangle$(0, 0, this.getWidth(), this.getHeight());
      if (this.$_bRendered$ || this.$_oldPzc$) {
        var $DvtThematicMapEventManager$$ = null;
        this.$_bBaseMapChanged$ && !this.$_isResize$ ? $DvtThematicMapEventManager$$ = this.$_animationOnMapChange$ : this.$_topLayer$ && this.$_topLayer$.$LayerName$ != this.$_oldTopLayerName$ && ($DvtThematicMapEventManager$$ = this.$_topLayer$.$getAnimation$());
        $dvt$$12$$.$BlackBoxAnimationHandler$.isSupported($DvtThematicMapEventManager$$) && (this.$Animation$ = $dvt$$12$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$(this.$getCtx$(), $DvtThematicMapEventManager$$, this.$_oldPzc$, this.$_pzc$, $DvtThematicMapJsonParser$$, this.$_animationDuration$)) && this.$addChild$(this.$_oldPzc$);
      } else {
        $dvt$$12$$.$BlackBoxAnimationHandler$.isSupported(this.$_animationOnDisplay$) && (this.$Animation$ = $dvt$$12$$.$BlackBoxAnimationHandler$.$getInAnimation$(this.$getCtx$(), this.$_animationOnDisplay$, this.$_pzc$, $DvtThematicMapJsonParser$$, this.$_animationDuration$));
      }
      this.$Animation$ ? (this.$_controlPanel$ && this.$addChild$(this.$_controlPanel$), this.$EventManager$.$hideTooltip$(), this.$EventManager$.$removeListeners$(this), this.$_bListenersRemoved$ = !0, this.$Animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$Animation$.play()) : this.$OnAnimationEnd$();
      this.$_pzcContainer$ = $DvtThematicMapControlPanel$$;
      this.$_topLayer$ && (this.$_oldTopLayerName$ = this.$_topLayer$.$LayerName$);
      this.$getCtx$().$setKeyboardFocusArray$([this]);
      this.$_bRendered$ = !0;
    }
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_calcMinZoom$ = function $$dvt$$12$$$$ThematicMap$$$$_calcMinZoom$$() {
    var $dvt$$12$$ = this.$_pzc$.$_zoomToFitPadding$, $DvtThematicMapControlPanel$$ = this.$_topLayer$.$getLayerDim$(), $DvtThematicMapJsonParser$$ = this.$_pzc$.$getSize$();
    return Math.min(($DvtThematicMapJsonParser$$.$w$ - 2 * $dvt$$12$$) / $DvtThematicMapControlPanel$$.$w$, ($DvtThematicMapJsonParser$$.$h$ - 2 * $dvt$$12$$) / $DvtThematicMapControlPanel$$.$h$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_render$ = function $$dvt$$12$$$$ThematicMap$$$$_render$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    this.$_renderLegend$();
    $DvtThematicMapControlPanel$$.$addChild$(this.$_areaLayers$);
    $DvtThematicMapControlPanel$$.$addChild$(this.$_dataAreaLayers$);
    this.$_isMarkerZoomBehaviorFixed$ ? $dvt$$12$$.$addChild$(this.$_dataPointLayers$) : $DvtThematicMapControlPanel$$.$addChild$(this.$_dataPointLayers$);
    $dvt$$12$$.$addChild$(this.$_labelLayers$);
    $dvt$$12$$.$addChild$(this.$_linkLayers$);
    var $DvtThematicMapJsonParser$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
    this.$_topLayerRendered$ = !1;
    for (var $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < this.$_layers$.length;$DvtThematicMapEventManager$$++) {
      var $DvtThematicMapKeyboardHandler$$ = this.$_layers$[$DvtThematicMapEventManager$$];
      if (!this.$_topLayerRendered$ && $DvtThematicMapKeyboardHandler$$ instanceof $DvtMapAreaLayer$$ || !($DvtThematicMapKeyboardHandler$$ instanceof $DvtMapAreaLayer$$)) {
        $DvtThematicMapKeyboardHandler$$.$render$($DvtThematicMapJsonParser$$), !this.$_topLayerRendered$ && $DvtThematicMapKeyboardHandler$$ instanceof $DvtMapAreaLayer$$ && (this.$_topLayerRendered$ = !0, this.$_topLayer$ = $DvtThematicMapKeyboardHandler$$);
      }
    }
    this.$_topLayer$ && ($DvtThematicMapJsonParser$$ = this.$_topLayer$.$_isolatedArea$, this.$_isolatedArea$ != $DvtThematicMapJsonParser$$ && (this.$_isolatedArea$ = $DvtThematicMapJsonParser$$, this.$setInitialCenterX$(null), this.$setInitialCenterY$(null), this.$setInitialZoom$(null)), this.$_setInitialKeyboardFocus$(), this.$_pzc$.$setMinZoom$(null), this.$_pzc$.$setMaxZoom$(null), this.$_pzc$.$setZoomingEnabled$(!0), this.$_pzc$.$setPanningEnabled$(!0), this.$_bBaseMapChanged$ || this.$_isResize$ || 
    null == this.$_initialZoom$ ? this.$_pzc$.$zoomToFit$(null, this.$_topLayer$.$getLayerDim$()) : (this.$_pzc$.$zoomTo$(this.$_initialZoom$), this.$_pzc$.$panTo$(this.$_initialCenterX$, this.$_initialCenterY$)), this.$_processInitialDrilled$(), this.$_updateZoomLimits$(), this.$_pzc$.$setZoomingEnabled$(this.$_zooming$), this.$_pzc$.$setPanningEnabled$(this.$_panning$));
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_setInitialKeyboardFocus$ = function $$dvt$$12$$$$ThematicMap$$$$_setInitialKeyboardFocus$$() {
    if (this.$_keyboardHandler$) {
      var $dvt$$12$$ = this.$getNavigableAreas$();
      0 == $dvt$$12$$.length && ($dvt$$12$$ = this.$getNavigableMarkers$());
      0 == $dvt$$12$$.length && ($dvt$$12$$ = this.$getNavigableLinks$());
      this.$EventManager$.$setInitialFocus$($dvt$$12$$[0]);
    }
  };
  $dvt$$12$$.$ThematicMap$.prototype.$updateLayer$ = function $$dvt$$12$$$$ThematicMap$$$$updateLayer$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$) {
    this.$_bRendered$ = !1;
    this.$StopAnimation$(!0);
    (new $DvtThematicMapJsonParser$$(this)).$ParseDataLayers$([$dvt$$12$$], this.$getLayer$($DvtThematicMapControlPanel$$), this.$_topLayer$.$LayerName$, $DvtThematicMapEventManager$$);
    this.$_renderLegend$();
    this.$_bRendered$ = !0;
    this.$_setInitialKeyboardFocus$();
    this.$getCtx$().$setKeyboardFocusArray$([this]);
    this.$_updateZoomLimits$();
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_renderCompleted$ = function $$dvt$$12$$$$ThematicMap$$$$_renderCompleted$$() {
    this.$AnimationStopped$ || this.$RenderComplete$();
    this.$Animation$ = null;
    this.$AnimationStopped$ = !1;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_updateZoomLimits$ = function $$dvt$$12$$$$ThematicMap$$$$_updateZoomLimits$$() {
    var $dvt$$12$$ = this.$_calcMinZoom$();
    this.$_pzc$.$setMinZoom$($dvt$$12$$);
    this.$_pzc$.$setMaxZoom$($dvt$$12$$ * this.$getMaxZoomFactor$());
  };
  $dvt$$12$$.$ThematicMap$.prototype.$OnUpdateLayerEnd$ = function $$dvt$$12$$$$ThematicMap$$$$OnUpdateLayerEnd$$() {
    this.$_topLayer$.$_isolatedArea$ && this.$_pzc$.$zoomToFit$(null, this.$_topLayer$.$getLayerDim$());
    this.$_processInitialDrilled$();
    this.$_initialZooming$ && this.$_zoomData$();
    this.$_renderCompleted$();
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setLegendData$ = function $$dvt$$12$$$$ThematicMap$$$$setLegendData$$($dvt$$12$$) {
    this.$_legendData$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setRolloverBehavior$ = function $$dvt$$12$$$$ThematicMap$$$$setRolloverBehavior$$($dvt$$12$$) {
    this.$_rolloverBehavior$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_transformContainers$ = function $$dvt$$12$$$$ThematicMap$$$$_transformContainers$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = new $dvt$$12$$.$Matrix$;
    $DvtThematicMapJsonParser$$.translate($DvtThematicMapControlPanel$$.$_tx$, $DvtThematicMapControlPanel$$.$_ty$);
    this.$_isMarkerZoomBehaviorFixed$ && this.$_dataPointLayers$.$setMatrix$($DvtThematicMapJsonParser$$);
    this.$_labelLayers$.$setMatrix$($DvtThematicMapJsonParser$$);
    this.$_linkLayers$.$setMatrix$($DvtThematicMapJsonParser$$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$HandleLegendEvent$ = function $$dvt$$12$$$$ThematicMap$$$$HandleLegendEvent$$($DvtThematicMapControlPanel$$) {
    $DvtThematicMapControlPanel$$ = $dvt$$12$$.$EventFactory$.$newAdfPropertyChangeEvent$($dvt$$12$$.$PanZoomComponent$.$LEGEND_DISCLOSED_EVENT_KEY$, $DvtThematicMapControlPanel$$.$getSubType$() == $dvt$$12$$.$CollapsiblePanelEvent$.$SUBTYPE_SHOW$);
    this.dispatchEvent($DvtThematicMapControlPanel$$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_constrainPanning$ = function $$dvt$$12$$$$ThematicMap$$$$_constrainPanning$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_pzc$.$_zoomToFitPadding$, $DvtThematicMapEventManager$$ = this.$_pzc$.$getSize$(), $DvtThematicMapJsonParser$$ = new $dvt$$12$$.$Rectangle$($DvtThematicMapJsonParser$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$.$w$ - 2 * $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$.$h$ - 2 * $DvtThematicMapJsonParser$$), $DvtThematicMapKeyboardHandler$$ = this.$_topLayer$.$getLayerDim$(), $DvtMapDataLayer$$ = $DvtThematicMapKeyboardHandler$$.x * 
    $DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$ = $DvtThematicMapKeyboardHandler$$.y * $DvtThematicMapControlPanel$$, $DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$.$w$ * $DvtThematicMapControlPanel$$;
    $DvtThematicMapControlPanel$$ *= $DvtThematicMapKeyboardHandler$$.$h$;
    $DvtThematicMapKeyboardHandler$$ = 0;
    $DvtMapCustomAreaLayer$$ > $DvtThematicMapJsonParser$$.$w$ ? (this.$_isFixedLegend$ && $dvt$$12$$.$Agent$.$isRightToLeft$(this.$getCtx$()) && ($DvtThematicMapKeyboardHandler$$ = this.$_legendWidth$), this.$_pzc$.$setMinPanX$($DvtThematicMapJsonParser$$.x + $DvtThematicMapJsonParser$$.$w$ + $DvtThematicMapKeyboardHandler$$ - ($DvtMapDataLayer$$ + $DvtMapCustomAreaLayer$$)), this.$_pzc$.$setMaxPanX$($DvtThematicMapJsonParser$$.x - $DvtMapDataLayer$$ + $DvtThematicMapKeyboardHandler$$)) : (this.$_isFixedLegend$ && 
    $dvt$$12$$.$Agent$.$isRightToLeft$(this.$getCtx$()) && ($DvtThematicMapKeyboardHandler$$ = 2 * this.$_legendWidth$), $DvtMapDataLayer$$ = ($DvtThematicMapJsonParser$$.x + $DvtThematicMapJsonParser$$.$w$ + $DvtThematicMapKeyboardHandler$$) / 2 - ($DvtMapDataLayer$$ + $DvtMapCustomAreaLayer$$ / 2), this.$_pzc$.$setMinPanX$($DvtMapDataLayer$$), this.$_pzc$.$setMaxPanX$($DvtMapDataLayer$$));
    $DvtThematicMapControlPanel$$ > $DvtThematicMapJsonParser$$.$h$ ? (this.$_pzc$.$setMinPanY$($DvtThematicMapJsonParser$$.y + $DvtThematicMapJsonParser$$.$h$ - ($DvtThematicMapEventManager$$ + $DvtThematicMapControlPanel$$)), this.$_pzc$.$setMaxPanY$($DvtThematicMapJsonParser$$.y - $DvtThematicMapEventManager$$)) : ($DvtThematicMapJsonParser$$ = ($DvtThematicMapJsonParser$$.y + $DvtThematicMapJsonParser$$.$h$) / 2 - ($DvtThematicMapEventManager$$ + $DvtThematicMapControlPanel$$ / 2), this.$_pzc$.$setMinPanY$($DvtThematicMapJsonParser$$), 
    this.$_pzc$.$setMaxPanY$($DvtThematicMapJsonParser$$));
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_updateAnimator$ = function $$dvt$$12$$$$ThematicMap$$$$_updateAnimator$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$.$_animator$;
    if ($DvtThematicMapEventManager$$) {
      var $DvtThematicMapKeyboardHandler$$ = this.$_pzc$.$_contentPane$, $DvtMapDataLayer$$ = $DvtThematicMapEventManager$$.$getDestVal$($DvtThematicMapKeyboardHandler$$, $DvtThematicMapKeyboardHandler$$.$getMatrix$);
      $DvtThematicMapJsonParser$$ && (this.$_currentAnimMatrix$ = $DvtThematicMapKeyboardHandler$$.$getMatrix$(), $DvtThematicMapEventManager$$.$addProp$($dvt$$12$$.$Animator$.$TYPE_MATRIX$, this, this.$_getCenteredObjsMatrix$, this.$_setCenteredObjsMatrix$, $DvtMapDataLayer$$));
      $DvtThematicMapKeyboardHandler$$ = new $dvt$$12$$.$Matrix$(1, 0, 0, 1, $DvtMapDataLayer$$.$_tx$, $DvtMapDataLayer$$.$_ty$);
      this.$_isMarkerZoomBehaviorFixed$ && $DvtThematicMapEventManager$$.$addProp$($dvt$$12$$.$Animator$.$TYPE_MATRIX$, this.$_dataPointLayers$, this.$_dataPointLayers$.$getMatrix$, this.$_dataPointLayers$.$setMatrix$, $DvtThematicMapKeyboardHandler$$);
      $DvtThematicMapEventManager$$.$addProp$($dvt$$12$$.$Animator$.$TYPE_MATRIX$, this.$_labelLayers$, this.$_labelLayers$.$getMatrix$, this.$_labelLayers$.$setMatrix$, $DvtThematicMapKeyboardHandler$$);
      $DvtThematicMapEventManager$$.$addProp$($dvt$$12$$.$Animator$.$TYPE_MATRIX$, this.$_linkLayers$, this.$_linkLayers$.$getMatrix$, this.$_linkLayers$.$setMatrix$, $DvtThematicMapKeyboardHandler$$);
    }
  };
  $dvt$$12$$.$ThematicMap$.prototype.$HandleZoomEvent$ = function $$dvt$$12$$$$ThematicMap$$$$HandleZoomEvent$$($DvtThematicMapControlPanel$$) {
    switch($DvtThematicMapControlPanel$$.$getSubType$()) {
      case $dvt$$12$$.$ZoomEvent$.$SUBTYPE_ADJUST_PAN_CONSTRAINTS$:
        this.$_panning$ && this.$_constrainPanning$($DvtThematicMapControlPanel$$.$_newZoom$);
        break;
      case $dvt$$12$$.$ZoomEvent$.$SUBTYPE_ZOOMING$:
      ;
      case $dvt$$12$$.$ZoomEvent$.$SUBTYPE_ELASTIC_ANIM_BEGIN$:
        this.$_updateAnimator$($DvtThematicMapControlPanel$$, !0);
        break;
      case $dvt$$12$$.$ZoomEvent$.$SUBTYPE_ZOOMED$:
        var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.$_newZoom$;
        if (null != $DvtThematicMapJsonParser$$) {
          var $DvtThematicMapEventManager$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
          $DvtThematicMapControlPanel$$.$_animator$ = null;
          this.dispatchEvent($dvt$$12$$.$EventFactory$.$newThematicMapViewportChangeEvent$($DvtThematicMapEventManager$$.$_tx$, $DvtThematicMapEventManager$$.$_ty$, $DvtThematicMapJsonParser$$));
          this.$_transformContainers$($DvtThematicMapEventManager$$);
          for ($DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < this.$_layers$.length;$DvtThematicMapJsonParser$$++) {
            this.$_layers$[$DvtThematicMapJsonParser$$].$HandleZoomEvent$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$);
          }
        }
        break;
      case $dvt$$12$$.$ZoomEvent$.$SUBTYPE_ZOOM_AND_CENTER$:
        this.$fitSelectedRegions$();
        break;
      case $dvt$$12$$.$ZoomEvent$.$SUBTYPE_ZOOM_TO_FIT_END$:
        this.dispatchEvent($dvt$$12$$.$EventFactory$.$newThematicMapViewportChangeEvent$());
    }
  };
  $dvt$$12$$.$ThematicMap$.prototype.$HandlePanEvent$ = function $$dvt$$12$$$$ThematicMap$$$$HandlePanEvent$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.$getSubType$();
    if ($DvtThematicMapJsonParser$$ == $dvt$$12$$.$PanEvent$.$SUBTYPE_ELASTIC_ANIM_BEGIN$) {
      this.$_updateAnimator$($DvtThematicMapControlPanel$$, !1);
    } else {
      if ($DvtThematicMapJsonParser$$ == $dvt$$12$$.$PanEvent$.$SUBTYPE_PANNED$ && null != $DvtThematicMapControlPanel$$.$_newX$) {
        var $DvtThematicMapEventManager$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
        $DvtThematicMapControlPanel$$.$_animator$ = null;
        this.dispatchEvent($dvt$$12$$.$EventFactory$.$newThematicMapViewportChangeEvent$($DvtThematicMapEventManager$$.$_tx$, $DvtThematicMapEventManager$$.$_ty$, this.$_pzc$.$getZoom$()));
        this.$_transformContainers$($DvtThematicMapEventManager$$);
        for ($DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < this.$_layers$.length;$DvtThematicMapControlPanel$$++) {
          this.$_layers$[$DvtThematicMapControlPanel$$].$HandlePanEvent$($DvtThematicMapEventManager$$);
        }
      }
    }
    this.$_legendPanel$ && (this.$_skinName$ == $dvt$$12$$.$CSSStyle$.$SKIN_ALTA$ ? $DvtThematicMapJsonParser$$ === $dvt$$12$$.$PanEvent$.$SUBTYPE_DRAG_PAN_BEGIN$ ? this.$_legendPanel$.$setMouseEnabled$(!1) : $DvtThematicMapJsonParser$$ === $dvt$$12$$.$PanEvent$.$SUBTYPE_DRAG_PAN_END$ && this.$_legendPanel$.$setMouseEnabled$(!0) : ($DvtThematicMapEventManager$$ = this.$getSubcomponentStyles$(), $DvtThematicMapControlPanel$$ = this.$_legendPanel$.$_background$.$getStroke$().clone(), $DvtThematicMapJsonParser$$ === 
    $dvt$$12$$.$PanEvent$.$SUBTYPE_DRAG_PAN_BEGIN$ ? (this.$_legend$.$setAlpha$($DvtThematicMapEventManager$$[$dvt$$12$$.$ControlPanel$.$BG_DRAG_ALPHA$]), $DvtThematicMapControlPanel$$.$setAlpha$($DvtThematicMapEventManager$$[$dvt$$12$$.$ControlPanel$.$FRAME_DRAG_ALPHA$]), this.$_legendPanel$.$_background$.$setStroke$($DvtThematicMapControlPanel$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($DvtThematicMapEventManager$$[$dvt$$12$$.$ControlPanel$.$FRAME_DRAG_ALPHA$]), 
    this.$_legendPanel$.$setMouseEnabled$(!1)) : $DvtThematicMapJsonParser$$ === $dvt$$12$$.$PanEvent$.$SUBTYPE_DRAG_PAN_END$ && (this.$_legend$.$setAlpha$(1), $DvtThematicMapControlPanel$$.$setAlpha$($DvtThematicMapEventManager$$[$dvt$$12$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]), this.$_legendPanel$.$_background$.$setStroke$($DvtThematicMapControlPanel$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($DvtThematicMapEventManager$$[$dvt$$12$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]), 
    this.$_legendPanel$.$setMouseEnabled$(!0))));
  };
  $dvt$$12$$.$ThematicMap$.prototype.$GetControlPanelBehavior$ = function $$dvt$$12$$$$ThematicMap$$$$GetControlPanelBehavior$$() {
    return "none" != this.$_drillMode$ || this.$_zooming$ || this.$_panning$ && this.$_skinName$ != $dvt$$12$$.$CSSStyle$.$SKIN_ALTA$ ? $dvt$$12$$.$ThematicMap$.$superclass$.$GetControlPanelBehavior$.call(this) : $dvt$$12$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_HIDDEN$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$GetControlPanel$ = function $$dvt$$12$$$$ThematicMap$$$$GetControlPanel$$() {
    var $DvtThematicMapJsonParser$$ = this.$GetControlPanelBehavior$();
    return $DvtThematicMapJsonParser$$ != $dvt$$12$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_HIDDEN$ ? new $DvtThematicMapControlPanel$$(this.$getCtx$(), this, $DvtThematicMapJsonParser$$ == $dvt$$12$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED$ ? $dvt$$12$$.$ControlPanel$.$STATE_COLLAPSED$ : $dvt$$12$$.$ControlPanel$.$STATE_EXPANDED$) : null;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setZooming$ = function $$dvt$$12$$$$ThematicMap$$$$setZooming$$($dvt$$12$$) {
    this.$_zooming$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setPanning$ = function $$dvt$$12$$$$ThematicMap$$$$setPanning$$($dvt$$12$$) {
    this.$_panning$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$addDrilledLayer$ = function $$dvt$$12$$$$ThematicMap$$$$addDrilledLayer$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    this.$_initDrilled$[$dvt$$12$$] = $DvtThematicMapControlPanel$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_processInitialDrilled$ = function $$dvt$$12$$$$ThematicMap$$$$_processInitialDrilled$$() {
    this.$_processingInitDrilled$ = !0;
    for (var $dvt$$12$$ = 0;$dvt$$12$$ < this.$_layers$.length;$dvt$$12$$++) {
      var $DvtThematicMapControlPanel$$ = this.$_layers$[$dvt$$12$$].$LayerName$;
      $DvtThematicMapControlPanel$$ in this.$_initDrilled$ && (this.$_selectedAreas$[$DvtThematicMapControlPanel$$] = this.$_initDrilled$[$DvtThematicMapControlPanel$$][1], this.$_clickedLayerName$ = $DvtThematicMapControlPanel$$, this.$_clickedDataLayerId$ = this.$_initDrilled$[$DvtThematicMapControlPanel$$][0], this.$drillDown$());
    }
    this.$_processingInitDrilled$ = !1;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$resetMap$ = function $$dvt$$12$$$$ThematicMap$$$$resetMap$$() {
    this.$StopAnimation$(!0);
    for (var $dvt$$12$$ = [], $DvtThematicMapControlPanel$$ = [], $DvtThematicMapJsonParser$$ = this.$_layers$.length - 1;-1 < $DvtThematicMapJsonParser$$;$DvtThematicMapJsonParser$$--) {
      this.$_layers$[$DvtThematicMapJsonParser$$].$LayerName$ == this.$_topLayer$.$LayerName$ ? this.$_layers$[$DvtThematicMapJsonParser$$].reset($DvtThematicMapControlPanel$$) : this.$_layers$[$DvtThematicMapJsonParser$$].reset($dvt$$12$$);
    }
    for ($DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $dvt$$12$$.length;$DvtThematicMapJsonParser$$++) {
      if ($dvt$$12$$[$DvtThematicMapJsonParser$$]) {
        var $DvtThematicMapEventManager$$ = $dvt$$12$$[$DvtThematicMapJsonParser$$].getParent();
        $DvtThematicMapEventManager$$ && $DvtThematicMapEventManager$$.removeChild($dvt$$12$$[$DvtThematicMapJsonParser$$]);
      }
    }
    for ($DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapJsonParser$$++) {
      $DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$] && $DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].$setAlpha$(1);
    }
    this.$_drilledRowKeys$ = [];
    this.$fitMap$();
    this.$_drilled$ = [];
    this.$_controlPanel$ && "none" != this.$_drillMode$ && (this.$_controlPanel$.$setEnabledDrillDownButton$(!1), this.$_controlPanel$.$setEnabledDrillUpButton$(!1));
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_zoomData$ = function $$dvt$$12$$$$ThematicMap$$$$_zoomData$$() {
    var $DvtThematicMapControlPanel$$ = this.$_dataAreaLayers$.$getDimensions$(), $DvtThematicMapJsonParser$$ = this.$_dataPointLayers$.$getDimensions$();
    if (this.$_isMarkerZoomBehaviorFixed$) {
      var $DvtThematicMapEventManager$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
      $DvtThematicMapJsonParser$$.$w$ /= $DvtThematicMapEventManager$$.$_a$;
      $DvtThematicMapJsonParser$$.$h$ /= $DvtThematicMapEventManager$$.$_d$;
      $DvtThematicMapJsonParser$$.x /= $DvtThematicMapEventManager$$.$_a$;
      $DvtThematicMapJsonParser$$.y /= $DvtThematicMapEventManager$$.$_d$;
    }
    $DvtThematicMapControlPanel$$ = $DvtThematicMapControlPanel$$.$getUnion$($DvtThematicMapJsonParser$$);
    this.$StopAnimation$(!0);
    var $DvtThematicMapKeyboardHandler$$;
    this.$_pzc$.$_bZoomingEnabled$ || ($DvtThematicMapKeyboardHandler$$ = this.$_pzc$.$getMaxZoom$(), this.$_pzc$.$setMaxZoom$($DvtThematicMapKeyboardHandler$$ * this.$_maxZoomFactor$));
    var $DvtMapDataLayer$$;
    $dvt$$12$$.$Agent$.$isEnvironmentBrowser$() && ($DvtMapDataLayer$$ = new $dvt$$12$$.$Animator$(this.$getCtx$(), .3));
    0 < $DvtThematicMapControlPanel$$.$w$ && 0 < $DvtThematicMapControlPanel$$.$h$ ? this.$_pzc$.$zoomToFit$($DvtMapDataLayer$$, $DvtThematicMapControlPanel$$) : this.$_pzc$.$zoomToFit$($DvtMapDataLayer$$, this.$_topLayer$.$getLayerDim$());
    $DvtMapDataLayer$$ && $DvtMapDataLayer$$.play();
    $DvtThematicMapKeyboardHandler$$ && this.$_pzc$.$setMaxZoom$($DvtThematicMapKeyboardHandler$$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_zoomToFitBounds$ = function $$dvt$$12$$$$ThematicMap$$$$_zoomToFitBounds$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = new $dvt$$12$$.$Animator$(this.$getCtx$(), .3);
    this.$_pzc$.$zoomToFit$($DvtThematicMapJsonParser$$, $DvtThematicMapControlPanel$$);
    $DvtThematicMapJsonParser$$.play();
  };
  $dvt$$12$$.$ThematicMap$.prototype.$fitRegion$ = function $$dvt$$12$$$$ThematicMap$$$$fitRegion$$($dvt$$12$$) {
    $dvt$$12$$ || ($dvt$$12$$ = this.$_zoomToFitObject$);
    $dvt$$12$$ || ($dvt$$12$$ = this.$_clickedObject$);
    this.$_zoomToFitBounds$($dvt$$12$$.$getDimensions$());
  };
  $dvt$$12$$.$ThematicMap$.prototype.$fitSelectedRegions$ = function $$dvt$$12$$$$ThematicMap$$$$fitSelectedRegions$$() {
    if (this.$_clickedDataLayerId$) {
      var $dvt$$12$$ = this.$getLayer$(this.$_clickedLayerName$).$getDataLayer$(this.$_clickedDataLayerId$);
      if ($dvt$$12$$ && ($dvt$$12$$ = $dvt$$12$$.$_selectionHandler$)) {
        for (var $dvt$$12$$ = $dvt$$12$$.getSelection(), $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < $dvt$$12$$.length;$DvtThematicMapControlPanel$$++) {
          $dvt$$12$$[$DvtThematicMapControlPanel$$] = $dvt$$12$$[$DvtThematicMapControlPanel$$].$getDisplayable$();
        }
        if (0 < $dvt$$12$$.length) {
          for (var $DvtThematicMapJsonParser$$ = $dvt$$12$$[0].$getDimensions$(), $DvtThematicMapControlPanel$$ = 1;$DvtThematicMapControlPanel$$ < $dvt$$12$$.length;$DvtThematicMapControlPanel$$++) {
            $DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.$getUnion$($dvt$$12$$[$DvtThematicMapControlPanel$$].$getDimensions$());
          }
          this.$_zoomToFitBounds$($DvtThematicMapJsonParser$$);
        }
      }
    }
  };
  $dvt$$12$$.$ThematicMap$.prototype.$fitMap$ = function $$dvt$$12$$$$ThematicMap$$$$fitMap$$() {
    var $DvtThematicMapControlPanel$$ = new $dvt$$12$$.$Animator$(this.$getCtx$(), .3);
    this.$_pzc$.$zoomToFit$($DvtThematicMapControlPanel$$);
    $DvtThematicMapControlPanel$$.play();
  };
  $dvt$$12$$.$ThematicMap$.prototype.$getDrillParentLayer$ = function $$dvt$$12$$$$ThematicMap$$$$getDrillParentLayer$$($dvt$$12$$) {
    $dvt$$12$$ = $DvtBaseMapManager$$.$getParentLayerName$(this.$_mapName$, $dvt$$12$$);
    return this.$getLayer$($dvt$$12$$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$getDrillChildLayer$ = function $$dvt$$12$$$$ThematicMap$$$$getDrillChildLayer$$($dvt$$12$$) {
    $dvt$$12$$ = $DvtBaseMapManager$$.$getChildLayerName$(this.$_mapName$, $dvt$$12$$);
    return this.$getLayer$($dvt$$12$$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$getNavigableAreas$ = function $$dvt$$12$$$$ThematicMap$$$$getNavigableAreas$$() {
    var $dvt$$12$$ = [];
    if (this.$_topLayer$) {
      for (var $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < this.$_layers$.length;$DvtThematicMapControlPanel$$++) {
        var $DvtThematicMapJsonParser$$ = this.$_layers$[$DvtThematicMapControlPanel$$].$DataLayers$, $DvtThematicMapEventManager$$;
        for ($DvtThematicMapEventManager$$ in $DvtThematicMapJsonParser$$) {
          $dvt$$12$$ = this.$_topLayer$.$LayerName$ == this.$_layers$[$DvtThematicMapControlPanel$$].$LayerName$ ? $dvt$$12$$.concat($DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$].$getNavigableAreaObjects$()) : $dvt$$12$$.concat($DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$].$getNavigableDisclosedAreaObjects$());
        }
      }
    }
    return $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$getNavigableMarkers$ = function $$dvt$$12$$$$ThematicMap$$$$getNavigableMarkers$$() {
    var $dvt$$12$$ = [];
    if (this.$_topLayer$) {
      for (var $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < this.$_layers$.length;$DvtThematicMapControlPanel$$++) {
        var $DvtThematicMapJsonParser$$ = this.$_layers$[$DvtThematicMapControlPanel$$].$DataLayers$;
        if (this.$_topLayer$.$LayerName$ == this.$_layers$[$DvtThematicMapControlPanel$$].$LayerName$ || !(this.$_layers$[$DvtThematicMapControlPanel$$] instanceof $DvtMapAreaLayer$$)) {
          for (var $DvtThematicMapEventManager$$ in $DvtThematicMapJsonParser$$) {
            $dvt$$12$$ = $dvt$$12$$.concat($DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$].$_markerObjs$);
          }
        }
      }
    }
    return $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$getNavigableLinks$ = function $$dvt$$12$$$$ThematicMap$$$$getNavigableLinks$$() {
    var $dvt$$12$$ = [];
    if (this.$_topLayer$) {
      for (var $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < this.$_layers$.length;$DvtThematicMapControlPanel$$++) {
        var $DvtThematicMapJsonParser$$ = this.$_layers$[$DvtThematicMapControlPanel$$].$DataLayers$;
        if (this.$_topLayer$.$LayerName$ == this.$_layers$[$DvtThematicMapControlPanel$$].$LayerName$ || !(this.$_layers$[$DvtThematicMapControlPanel$$] instanceof $DvtMapAreaLayer$$)) {
          for (var $DvtThematicMapEventManager$$ in $DvtThematicMapJsonParser$$) {
            $dvt$$12$$ = $dvt$$12$$.concat($DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$].$_linkObjs$);
          }
        }
      }
    }
    return $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_setCenteredObjsMatrix$ = function $$dvt$$12$$$$ThematicMap$$$$_setCenteredObjsMatrix$$($dvt$$12$$) {
    this.$_currentAnimMatrix$ = $dvt$$12$$;
    if (this.$_isMarkerZoomBehaviorFixed$) {
      for (var $DvtThematicMapControlPanel$$ = this.$getNavigableMarkers$(), $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapJsonParser$$++) {
        $DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].$HandleZoomEvent$($dvt$$12$$);
      }
      $DvtThematicMapControlPanel$$ = this.$_labelLayers$.$getNumChildren$();
      for ($DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapControlPanel$$;$DvtThematicMapJsonParser$$++) {
        for (var $DvtThematicMapEventManager$$ = this.$_labelLayers$.$getChildAt$($DvtThematicMapJsonParser$$), $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapEventManager$$.$getNumChildren$(), $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtThematicMapKeyboardHandler$$;$DvtMapDataLayer$$++) {
          var $DvtMapCustomAreaLayer$$ = $DvtThematicMapEventManager$$.$getChildAt$($DvtMapDataLayer$$);
          $DvtMapCustomAreaLayer$$ instanceof $DvtMapLabel$$ && $DvtMapCustomAreaLayer$$.update($dvt$$12$$);
        }
      }
    }
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_getCenteredObjsMatrix$ = function $$dvt$$12$$$$ThematicMap$$$$_getCenteredObjsMatrix$$() {
    return this.$_currentAnimMatrix$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$drillDown$ = function $$dvt$$12$$$$ThematicMap$$$$drillDown$$() {
    this.$StopAnimation$(!0);
    var $dvt$$12$$ = this.$getDrillChildLayer$(this.$_clickedLayerName$), $DvtThematicMapControlPanel$$ = this.$getLayer$(this.$_clickedLayerName$), $DvtThematicMapJsonParser$$ = [];
    if ($dvt$$12$$) {
      this.$_drillDataLayer$[this.$_clickedLayerName$] = this.$_clickedDataLayerId$;
      for (var $DvtThematicMapEventManager$$ = this.$_selectedAreas$[this.$_clickedLayerName$], $DvtThematicMapKeyboardHandler$$ = [], $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtThematicMapEventManager$$.length;$DvtMapDataLayer$$++) {
        this.$_getAreaFromDataLayer$($DvtThematicMapEventManager$$[$DvtMapDataLayer$$], $DvtThematicMapControlPanel$$.$getDataLayer$(this.$_clickedDataLayerId$)).$isDrilled$() || $DvtThematicMapKeyboardHandler$$.push($DvtThematicMapEventManager$$[$DvtMapDataLayer$$]);
      }
      this.$_processingInitDrilled$ || "single" != this.$_drillMode$ || (this.$_drilled$.pop(), $DvtThematicMapControlPanel$$.reset($DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$), $dvt$$12$$.reset(this.$_drillAnimFadeOutObjs$));
      $DvtThematicMapEventManager$$ = [];
      for ($DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtThematicMapKeyboardHandler$$.length;$DvtMapDataLayer$$++) {
        var $DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$[$DvtMapDataLayer$$], $DvtMapAreaLayer$$ = $DvtThematicMapControlPanel$$.$getChildrenForArea$($DvtMapCustomAreaLayer$$);
        $DvtThematicMapEventManager$$.push($DvtMapAreaLayer$$[0]);
        for (var $DvtMapLayer$$ = 0;$DvtMapLayer$$ < $DvtMapAreaLayer$$.length;$DvtMapLayer$$++) {
          this.$_childToParent$[$DvtMapAreaLayer$$[$DvtMapLayer$$]] = $DvtMapCustomAreaLayer$$;
        }
        $dvt$$12$$.$discloseAreas$($DvtMapAreaLayer$$, $DvtThematicMapJsonParser$$);
        ($DvtMapAreaLayer$$ = $DvtThematicMapControlPanel$$.$getDataLayer$(this.$_clickedDataLayerId$)) && $DvtMapAreaLayer$$.$drill$($DvtMapCustomAreaLayer$$, this.$_drillAnimFadeOutObjs$);
        this.$_drilled$.push($DvtMapCustomAreaLayer$$);
      }
      this.$_handleDrillAnimations$(this.$_drillAnimFadeOutObjs$, $DvtThematicMapJsonParser$$, !1);
      this.$_updateDrillButton$($dvt$$12$$.$LayerName$, !0);
      this.$_clickedLayerName$ = $dvt$$12$$.$LayerName$;
      this.$_selectedAreas$[this.$_clickedLayerName$] = $DvtThematicMapEventManager$$;
    }
  };
  $dvt$$12$$.$ThematicMap$.prototype.$drillUp$ = function $$dvt$$12$$$$ThematicMap$$$$drillUp$$() {
    this.$StopAnimation$(!0);
    for (var $DvtThematicMapControlPanel$$ = this.$getLayer$(this.$_clickedLayerName$), $DvtThematicMapJsonParser$$ = this.$getDrillParentLayer$(this.$_clickedLayerName$), $DvtThematicMapEventManager$$ = [], $DvtThematicMapKeyboardHandler$$ = [], $DvtMapDataLayer$$ = this.$_selectedAreas$[this.$_clickedLayerName$], $DvtMapCustomAreaLayer$$ = 0;$DvtMapCustomAreaLayer$$ < $DvtMapDataLayer$$.length;$DvtMapCustomAreaLayer$$++) {
      var $DvtMapAreaLayer$$ = this.$_childToParent$[$DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$]];
      $DvtThematicMapKeyboardHandler$$.push($DvtMapAreaLayer$$);
      -1 != $dvt$$12$$.$ArrayUtils$.$getIndex$(this.$_drilled$, $DvtMapAreaLayer$$) && ($DvtThematicMapControlPanel$$.$undiscloseAreas$($DvtThematicMapJsonParser$$.$getChildrenForArea$($DvtMapAreaLayer$$), this.$_drillAnimFadeOutObjs$), $DvtThematicMapJsonParser$$.$getDataLayer$(this.$_drillDataLayer$[$DvtThematicMapJsonParser$$.$LayerName$]).$undrill$($DvtMapAreaLayer$$, $DvtThematicMapEventManager$$), $DvtMapAreaLayer$$ = $dvt$$12$$.$ArrayUtils$.$getIndex$(this.$_drilled$, $DvtMapAreaLayer$$), 
      -1 != $DvtMapAreaLayer$$ && this.$_drilled$.splice($DvtMapAreaLayer$$, 1));
    }
    this.$_handleDrillAnimations$(this.$_drillAnimFadeOutObjs$, $DvtThematicMapEventManager$$, !0);
    this.$_clickedLayerName$ = $DvtThematicMapJsonParser$$.$LayerName$;
    this.$_clickedDataLayerId$ = this.$_drillDataLayer$[this.$_clickedLayerName$];
    this.$_selectedAreas$[this.$_clickedLayerName$] = $DvtThematicMapKeyboardHandler$$;
    this.$_updateDrillButton$(this.$_clickedLayerName$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_handleDrillAnimations$ = function $$dvt$$12$$$$ThematicMap$$$$_handleDrillAnimations$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    this.$_pzc$.$_contentPane$.$getMatrix$();
    if ("zoomToFit" == this.$_animationOnDrill$ && !this.$_processingInitDrilled$) {
      var $DvtThematicMapKeyboardHandler$$ = new $dvt$$12$$.$Animator$(this.$getCtx$(), .3);
      $dvt$$12$$.$Agent$.$isEnvironmentBrowser$() || ($DvtThematicMapKeyboardHandler$$ = null);
      $DvtThematicMapEventManager$$ ? this.$_pzc$.$zoomToFit$($DvtThematicMapKeyboardHandler$$) : this.$fitSelectedRegions$();
      $DvtThematicMapKeyboardHandler$$ && $DvtThematicMapKeyboardHandler$$.play();
    }
    this.$StopAnimation$(!0);
    !$dvt$$12$$.$Agent$.$isEnvironmentBrowser$() || "alphaFade" != this.$_animationOnDrill$ && "auto" != this.$_animationOnDrill$ || (this.$Animation$ = $dvt$$12$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$(this.$getCtx$(), "alphaFade", $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, null, .5));
    this.$Animation$ ? (this.$EventManager$.$hideTooltip$(), this.$EventManager$.$removeListeners$(this), this.$Animation$.$setOnEnd$(this.$OnDrillAnimationEnd$, this), this.$Animation$.play()) : this.$_cleanUpDrilledObjects$();
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setClickInfo$ = function $$dvt$$12$$$$ThematicMap$$$$setClickInfo$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.$_clickedLayerName$ = $DvtThematicMapControlPanel$$;
    this.$_clickedDataLayerId$ = $dvt$$12$$;
    this.$_clickedObject$ = $DvtThematicMapJsonParser$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setEventClientId$ = function $$dvt$$12$$$$ThematicMap$$$$setEventClientId$$($dvt$$12$$) {
    this.$_eventClientId$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.dispatchEvent = function $$dvt$$12$$$$ThematicMap$$$dispatchEvent$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.type;
    if ("selection" == $DvtThematicMapJsonParser$$) {
      this.$_handleSelectionEvent$($DvtThematicMapControlPanel$$);
    } else {
      if ($DvtThematicMapJsonParser$$ == $dvt$$12$$.$MapDrillEvent$.$TYPE$) {
        this.$_handleDrillEvent$($DvtThematicMapControlPanel$$);
      } else {
        if ("adfShowPopup" == $DvtThematicMapJsonParser$$ || "adfHidePopup" == $DvtThematicMapJsonParser$$) {
          $DvtThematicMapControlPanel$$.clientId = this.$_eventClientId$;
        }
      }
    }
    $dvt$$12$$.$ThematicMap$.$superclass$.dispatchEvent.call(this, $DvtThematicMapControlPanel$$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_handleSelectionEvent$ = function $$dvt$$12$$$$ThematicMap$$$$_handleSelectionEvent$$($DvtThematicMapControlPanel$$) {
    this.$_clickedDataLayerId$ ? (this.$_selectedRowKeys$ = $DvtThematicMapControlPanel$$.selection, this.$_selectedAreas$[this.$_clickedLayerName$] = this.$getLayer$(this.$_clickedLayerName$).$getDataLayer$(this.$_clickedDataLayerId$).$getSelectedAreas$(this.$_selectedRowKeys$), this.$_updateDrillButton$(this.$_clickedLayerName$), $DvtThematicMapControlPanel$$.clientId = this.$_clickedDataLayerId$, !this.$_clickedObject$ || this.$_clickedObject$ instanceof $dvt$$12$$.$SimpleMarker$ || this.$_clickedObject$ instanceof 
    $dvt$$12$$.$ImageMarker$ || (this.$_zoomToFitObject$ = this.$_clickedObject$)) : (this.$_updateDrillButton$(null), this.$_zoomToFitObject$ = null);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_updateDrillButton$ = function $$dvt$$12$$$$ThematicMap$$$$_updateDrillButton$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    if (this.$_controlPanel$ && this.$_drillMode$ && "none" != this.$_drillMode$) {
      var $DvtThematicMapJsonParser$$ = this.$getDrillChildLayer$($dvt$$12$$), $DvtThematicMapEventManager$$ = this.$getDrillParentLayer$($dvt$$12$$);
      $DvtThematicMapJsonParser$$ && !$DvtThematicMapControlPanel$$ ? this.$_controlPanel$.$setEnabledDrillDownButton$(!0) : this.$_controlPanel$.$setEnabledDrillDownButton$(!1);
      $DvtThematicMapEventManager$$ ? this.$_controlPanel$.$setEnabledDrillUpButton$(!0) : this.$_controlPanel$.$setEnabledDrillUpButton$(!1);
    }
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_handleDrillEvent$ = function $$dvt$$12$$$$ThematicMap$$$$_handleDrillEvent$$($DvtThematicMapControlPanel$$) {
    $DvtThematicMapControlPanel$$.$addParam$("clientId", this.$_eventClientId$);
    this.$_drilledRowKeys$ = "multiple" == this.$_drillMode$ ? this.$_drilledRowKeys$.concat(this.$_selectedRowKeys$) : this.$_selectedRowKeys$;
    var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.$_drillType$;
    $DvtThematicMapJsonParser$$ == $dvt$$12$$.$MapDrillEvent$.$DRILL_UP$ && this.$drillUp$();
    $DvtThematicMapJsonParser$$ == $dvt$$12$$.$MapDrillEvent$.$DRILL_DOWN$ ? this.$drillDown$() : $DvtThematicMapJsonParser$$ == $dvt$$12$$.$MapDrillEvent$.$RESET$ && this.$resetMap$();
    $DvtThematicMapControlPanel$$.$setDisclosed$(this.$_drilledRowKeys$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$destroy$ = function $$dvt$$12$$$$ThematicMap$$$$destroy$$() {
    for (var $DvtThematicMapControlPanel$$ = this.$_layers$, $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapJsonParser$$++) {
      $DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].$destroy$();
    }
    $dvt$$12$$.$ThematicMap$.$superclass$.$destroy$.call(this);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$OnAnimationEnd$ = function $$dvt$$12$$$$ThematicMap$$$$OnAnimationEnd$$() {
    this.$_controlPanel$ && this.$_pzc$.$addChild$(this.$_controlPanel$);
    this.$_oldPzc$ && (this.removeChild(this.$_oldPzc$), this.$_oldPzc$ = null);
    this.$_renderCompleted$();
    this.$_initialZooming$ && this.$_zoomData$();
    this.$Options$.highlightedCategories && 0 < this.$Options$.highlightedCategories.length && this.$highlight$(this.$Options$.highlightedCategories);
    this.$_bListenersRemoved$ && (this.$EventManager$.$addListeners$(this), this.$_bListenersRemoved$ = !1);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$OnDrillAnimationEnd$ = function $$dvt$$12$$$$ThematicMap$$$$OnDrillAnimationEnd$$() {
    this.$_cleanUpDrilledObjects$();
    this.$Animation$ = null;
    this.$EventManager$.$addListeners$(this);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_cleanUpDrilledObjects$ = function $$dvt$$12$$$$ThematicMap$$$$_cleanUpDrilledObjects$$() {
    if (0 < this.$_drillAnimFadeOutObjs$.length) {
      for (var $dvt$$12$$ = 0;$dvt$$12$$ < this.$_drillAnimFadeOutObjs$.length;$dvt$$12$$++) {
        var $DvtThematicMapControlPanel$$ = this.$_drillAnimFadeOutObjs$[$dvt$$12$$];
        if ($DvtThematicMapControlPanel$$) {
          if ($DvtThematicMapControlPanel$$ instanceof $DvtMapLabel$$) {
            $DvtThematicMapControlPanel$$.reset();
          } else {
            if ($DvtThematicMapControlPanel$$.$isDrilled$ && $DvtThematicMapControlPanel$$.$isDrilled$()) {
              $DvtThematicMapControlPanel$$.$setAlpha$(0);
            } else {
              var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.getParent();
              $DvtThematicMapJsonParser$$ && $DvtThematicMapJsonParser$$.removeChild($DvtThematicMapControlPanel$$);
            }
          }
        }
      }
      this.$_drillAnimFadeOutObjs$ = [];
    }
  };
  $dvt$$12$$.$ThematicMap$.prototype.$getShowPopupBehaviors$ = function $$dvt$$12$$$$ThematicMap$$$$getShowPopupBehaviors$$() {
    return this.$_showPopupBehaviors$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$setShowPopupBehaviors$ = function $$dvt$$12$$$$ThematicMap$$$$setShowPopupBehaviors$$($dvt$$12$$) {
    this.$_showPopupBehaviors$ = $dvt$$12$$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$getAutomation$ = function $$dvt$$12$$$$ThematicMap$$$$getAutomation$$() {
    this.$Automation$ || (this.$Automation$ = new $DvtThematicMapAutomation$$(this));
    return this.$Automation$;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$GetComponentDescription$ = function $$dvt$$12$$$$ThematicMap$$$$GetComponentDescription$$() {
    return $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "THEMATIC_MAP");
  };
  $dvt$$12$$.$ThematicMap$.prototype.$processLegendEvent$ = function $$dvt$$12$$$$ThematicMap$$$$processLegendEvent$$($DvtThematicMapControlPanel$$) {
    $DvtThematicMapControlPanel$$.type == $dvt$$12$$.$ResizeEvent$.$RESIZE_EVENT$ && this.$_legend$ && this.$_legend$.$FireListener$($DvtThematicMapControlPanel$$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$highlight$ = function $$dvt$$12$$$$ThematicMap$$$$highlight$$($DvtThematicMapControlPanel$$) {
    this.$Options$.highlightedCategories = $dvt$$12$$.$JsonUtils$.clone($DvtThematicMapControlPanel$$);
    $dvt$$12$$.$CategoryRolloverHandler$.$highlight$($DvtThematicMapControlPanel$$, this.$getNavigableAreas$().concat(this.$getNavigableMarkers$()).concat(this.$getNavigableLinks$()), "any" == this.$Options$.highlightMatch);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$processDefaultHoverEffect$ = function $$dvt$$12$$$$ThematicMap$$$$processDefaultHoverEffect$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_getDataItemById$($dvt$$12$$);
    $DvtThematicMapJsonParser$$ && $DvtThematicMapJsonParser$$.$processDefaultHoverEffect$($DvtThematicMapControlPanel$$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$processDefaultSelectionEffect$ = function $$dvt$$12$$$$ThematicMap$$$$processDefaultSelectionEffect$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_getDataItemById$($dvt$$12$$);
    $DvtThematicMapJsonParser$$ && $DvtThematicMapJsonParser$$.$processDefaultSelectionEffect$($DvtThematicMapControlPanel$$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$processDefaultFocusEffect$ = function $$dvt$$12$$$$ThematicMap$$$$processDefaultFocusEffect$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_getDataItemById$($dvt$$12$$);
    $DvtThematicMapJsonParser$$ && $DvtThematicMapJsonParser$$.$processDefaultFocusEffect$($DvtThematicMapControlPanel$$);
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_getDataItemById$ = function $$dvt$$12$$$$ThematicMap$$$$_getDataItemById$$($dvt$$12$$) {
    for (var $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < this.$_layers$.length;$DvtThematicMapControlPanel$$++) {
      var $DvtThematicMapJsonParser$$ = this.$_layers$[$DvtThematicMapControlPanel$$].$DataLayers$, $DvtThematicMapEventManager$$;
      for ($DvtThematicMapEventManager$$ in $DvtThematicMapJsonParser$$) {
        for (var $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$].$_markerObjs$, $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtThematicMapKeyboardHandler$$.length;$DvtMapDataLayer$$++) {
          if ($DvtThematicMapKeyboardHandler$$[$DvtMapDataLayer$$].getId() === $dvt$$12$$) {
            return $DvtThematicMapKeyboardHandler$$[$DvtMapDataLayer$$];
          }
        }
      }
    }
    return null;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_getAreaFromDataLayer$ = function $$dvt$$12$$$$ThematicMap$$$$_getAreaFromDataLayer$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    for (var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.$_areaObjs$, $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $DvtThematicMapJsonParser$$.length;$DvtThematicMapEventManager$$++) {
      if ($DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$].$getLocation$() === $dvt$$12$$) {
        return $DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$];
      }
    }
    return null;
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtThematicMapDefaults$$, $dvt$$12$$.$BaseComponentDefaults$);
  $DvtThematicMapDefaults$$.DEFAULT = {animationDuration:500, animationOnDisplay:"none", animationOnDrill:"none", animationOnMapChange:"none", controlPanelBehavior:"hidden", drilling:"none", highlightMatch:"all", hoverBehavior:"none", initialZooming:"none", markerZoomBehavior:"fixed", panning:"none", tooltipDisplay:"auto", touchResponse:"auto", visualEffects:"none", zooming:"none", styleDefaults:{skin:"alta", _areaStyle:{backgroundColor:"#B8CDEC", borderColor:"#FFFFFF"}, hoverBehaviorDelay:200, dataAreaDefaults:{borderColor:"#FFFFFF", 
  drilledInnerColor:"#FFFFFF", drilledOuterColor:"#000000", hoverColor:"#FFFFFF", opacity:1, selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}, dataMarkerDefaults:{borderColor:"#FFFFFF", borderStyle:"solid", borderWidth:.5, color:"#000000", height:8, labelStyle:"font-family:Tahoma;font-size:13pt;color:#000000", opacity:.4, scaleX:1, scaleY:1, shape:"circle", width:8}, linkDefaults:{color:"#9bb2c7", _hoverColor:"#FFFFFF", _selectedColor:"#000000", width:2}, labelStyle:"font-family:Tahoma;font-size:11pt;"}, 
  legend:{position:"auto", rendered:!0, layout:{gapRatio:1}}, layout:{gapRatio:null, legendMaxSize:.3, legendGap:10}, resources:{images:{}, translations:{}}};
  $DvtThematicMapDefaults$$.$SKIN_ALTA$ = {styleDefaults:{_areaStyle:{backgroundColor:"#DDDDDD", borderColor:"#FFFFFF"}, dataAreaDefaults:{drilledOuterColor:"#0572CE"}, dataMarkerDefaults:{color:"rgb(51,51,51)", labelStyle:$dvt$$12$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$ + "color:#333333", opacity:1}, labelStyle:$dvt$$12$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$}};
  $DvtThematicMapDefaults$$.$DEFAULT_AREA_LAYER$ = {animationOnLayerChange:"none", labelDisplay:"auto", labelType:"short"};
  $DvtThematicMapDefaults$$.$DEFAULT_DATA_LAYER$ = {animationOnDataChange:"none", selectionMode:"none"};
  $DvtThematicMapDefaults$$.prototype.$calcAreaLayerOptions$ = function $$DvtThematicMapDefaults$$$$$calcAreaLayerOptions$$($DvtThematicMapControlPanel$$) {
    return $dvt$$12$$.$JsonUtils$.$merge$($DvtThematicMapControlPanel$$, $DvtThematicMapDefaults$$.$DEFAULT_AREA_LAYER$);
  };
  $DvtThematicMapDefaults$$.prototype.$calcDataLayerOptions$ = function $$DvtThematicMapDefaults$$$$$calcDataLayerOptions$$($DvtThematicMapControlPanel$$) {
    return $dvt$$12$$.$JsonUtils$.$merge$($DvtThematicMapControlPanel$$, $DvtThematicMapDefaults$$.$DEFAULT_DATA_LAYER$);
  };
  $DvtThematicMapDefaults$$.$getGapSize$ = function $$DvtThematicMapDefaults$$$$getGapSize$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    return Math.ceil($DvtThematicMapControlPanel$$ * $dvt$$12$$.$getGapRatio$());
  };
  $dvt$$12$$.$ThematicMap$.prototype.$_getCurrentDragSource$ = function $$dvt$$12$$$$ThematicMap$$$$_getCurrentDragSource$$() {
    for (var $dvt$$12$$ = 0;$dvt$$12$$ < this.$_layers$.length;$dvt$$12$$++) {
      var $DvtThematicMapControlPanel$$ = this.$_layers$[$dvt$$12$$].$DataLayers$, $DvtThematicMapJsonParser$$;
      for ($DvtThematicMapJsonParser$$ in $DvtThematicMapControlPanel$$) {
        var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].$_dragSource$;
        if ($DvtThematicMapEventManager$$ && $DvtThematicMapEventManager$$.$_dragCandidate$) {
          return $DvtThematicMapEventManager$$;
        }
      }
    }
    return null;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$isDragAvailable$ = function $$dvt$$12$$$$ThematicMap$$$$isDragAvailable$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    return ($dvt$$12$$ = this.$_getCurrentDragSource$()) ? $dvt$$12$$.$isDragAvailable$($DvtThematicMapJsonParser$$) : !1;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$getDragTransferable$ = function $$dvt$$12$$$$ThematicMap$$$$getDragTransferable$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_getCurrentDragSource$();
    return $DvtThematicMapJsonParser$$ ? $DvtThematicMapJsonParser$$.$getDragTransferable$($dvt$$12$$, $DvtThematicMapControlPanel$$) : null;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$getDragOverFeedback$ = function $$dvt$$12$$$$ThematicMap$$$$getDragOverFeedback$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_getCurrentDragSource$();
    return $DvtThematicMapJsonParser$$ ? $DvtThematicMapJsonParser$$.$getDragOverFeedback$($dvt$$12$$, $DvtThematicMapControlPanel$$) : null;
  };
  $dvt$$12$$.$ThematicMap$.prototype.$getDragOffset$ = function $$dvt$$12$$$$ThematicMap$$$$getDragOffset$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_getCurrentDragSource$();
    return $DvtThematicMapJsonParser$$ ? $DvtThematicMapJsonParser$$.$getDragOffset$($dvt$$12$$, $DvtThematicMapControlPanel$$) : null;
  };
  $dvt$$12$$.$Obj$.$createSubclass$(function() {
  }, $dvt$$12$$.$DropTarget$);
  $dvt$$12$$.$Obj$.$createSubclass$($DvtThematicMapAutomation$$, $dvt$$12$$.$Automation$);
  $DvtThematicMapAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtThematicMapAutomation$$$$$GetSubIdForDomElement$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_tmap$.$getEventManager$().$GetLogicalObject$($DvtThematicMapControlPanel$$);
    if ($DvtThematicMapJsonParser$$ && ($DvtThematicMapJsonParser$$ instanceof $DvtMapAreaPeer$$ || $DvtThematicMapJsonParser$$ instanceof $DvtMapObjPeer$$)) {
      return this.$_getSubId$($DvtThematicMapJsonParser$$);
    }
    var $DvtThematicMapEventManager$$ = this.$_tmap$.$_panZoomCanvas$.$_controlPanel$;
    if ($DvtThematicMapEventManager$$ && ($DvtThematicMapJsonParser$$ = $DvtThematicMapEventManager$$.$getEventManager$().$GetLogicalObject$($DvtThematicMapControlPanel$$)) && $DvtThematicMapJsonParser$$ instanceof $dvt$$12$$.$Button$) {
      $DvtThematicMapControlPanel$$ = "disclosure zoomIn zoomOut zoomToFit drillDown drillUp reset".split(" ");
      for (var $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapKeyboardHandler$$++) {
        if ($DvtThematicMapEventManager$$.$getActionDisplayable$($DvtThematicMapControlPanel$$[$DvtThematicMapKeyboardHandler$$]) === $DvtThematicMapJsonParser$$) {
          return "controlPanel#" + $DvtThematicMapControlPanel$$[$DvtThematicMapKeyboardHandler$$];
        }
      }
    }
    return null;
  };
  $DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtThematicMapAutomation$$$$$getDomElementForSubId$$($DvtThematicMapControlPanel$$) {
    if ($DvtThematicMapControlPanel$$ == $dvt$$12$$.$Automation$.$TOOLTIP_SUBID$) {
      return this.$GetTooltipElement$(this.$_tmap$);
    }
    var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.indexOf(":"), $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$.indexOf("[");
    return 0 < $DvtThematicMapJsonParser$$ && 0 < $DvtThematicMapEventManager$$ ? this.$_getDomElement$($DvtThematicMapControlPanel$$.substring(0, $DvtThematicMapJsonParser$$), $DvtThematicMapControlPanel$$.substring($DvtThematicMapJsonParser$$ + 1, $DvtThematicMapEventManager$$), parseInt($DvtThematicMapControlPanel$$.substring($DvtThematicMapEventManager$$ + 1, $DvtThematicMapControlPanel$$.length - 1))) : 0 === $DvtThematicMapControlPanel$$.lastIndexOf("controlPanel") && ($DvtThematicMapJsonParser$$ = 
    $DvtThematicMapControlPanel$$.indexOf("#"), 0 < $DvtThematicMapJsonParser$$ && ($DvtThematicMapControlPanel$$ = $DvtThematicMapControlPanel$$.substring($DvtThematicMapJsonParser$$ + 1), ($DvtThematicMapJsonParser$$ = this.$_tmap$.$_panZoomCanvas$.$_controlPanel$) && $DvtThematicMapControlPanel$$)) ? ($DvtThematicMapControlPanel$$ = $DvtThematicMapJsonParser$$.$getActionDisplayable$($DvtThematicMapControlPanel$$)) ? $DvtThematicMapControlPanel$$.$getElem$() : null : null;
  };
  $DvtThematicMapAutomation$$.prototype.getData = function $$DvtThematicMapAutomation$$$$getData$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    return ($dvt$$12$$ = this.$_getDataObject$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$)) ? ($DvtThematicMapControlPanel$$ = {}, $DvtThematicMapControlPanel$$.color = $dvt$$12$$.$getDatatipColor$(), $DvtThematicMapControlPanel$$.tooltip = $dvt$$12$$.$getShortDesc$(), $DvtThematicMapJsonParser$$ = $dvt$$12$$.$getLabel$(), $DvtThematicMapControlPanel$$.label = $DvtThematicMapJsonParser$$ ? $DvtThematicMapJsonParser$$.$getTextString$() : null, $DvtThematicMapControlPanel$$.selected = 
    $dvt$$12$$.$isSelected$(), $DvtThematicMapControlPanel$$) : null;
  };
  $DvtThematicMapAutomation$$.prototype.$_getDomElement$ = function $$DvtThematicMapAutomation$$$$$_getDomElement$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    return ($dvt$$12$$ = this.$_getDataObject$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$)) ? $dvt$$12$$.$getDisplayable$().$getElem$() : null;
  };
  $DvtThematicMapAutomation$$.prototype.$_getSubId$ = function $$DvtThematicMapAutomation$$$$$_getSubId$$($DvtThematicMapControlPanel$$) {
    for (var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.$getDisplayable$(), $DvtThematicMapEventManager$$ = this.$_tmap$.$_layers$, $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $DvtThematicMapEventManager$$.length;$DvtThematicMapKeyboardHandler$$++) {
      var $DvtMapDataLayer$$ = $DvtThematicMapEventManager$$[$DvtThematicMapKeyboardHandler$$].$DataLayers$, $DvtMapCustomAreaLayer$$;
      for ($DvtMapCustomAreaLayer$$ in $DvtMapDataLayer$$) {
        if ($DvtThematicMapJsonParser$$ instanceof $dvt$$12$$.$Path$) {
          for (var $DvtMapAreaLayer$$ = $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$].$_areaObjs$, $DvtMapLayer$$ = 0;$DvtMapLayer$$ < $DvtMapAreaLayer$$.length;$DvtMapLayer$$++) {
            if ($DvtMapAreaLayer$$[$DvtMapLayer$$] === $DvtThematicMapControlPanel$$) {
              return this.$_getDataLayerId$($DvtMapCustomAreaLayer$$) + ":area[" + $DvtMapLayer$$ + "]";
            }
          }
          $DvtMapAreaLayer$$ = $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$].$_linkObjs$;
          for ($DvtMapLayer$$ = 0;$DvtMapLayer$$ < $DvtMapAreaLayer$$.length;$DvtMapLayer$$++) {
            if ($DvtMapAreaLayer$$[$DvtMapLayer$$] === $DvtThematicMapControlPanel$$) {
              return this.$_getDataLayerId$($DvtMapCustomAreaLayer$$) + ":link[" + $DvtMapLayer$$ + "]";
            }
          }
        } else {
          if ($DvtThematicMapJsonParser$$ instanceof $dvt$$12$$.$SimpleMarker$ || $DvtThematicMapJsonParser$$ instanceof $dvt$$12$$.$ImageMarker$) {
            for ($DvtMapAreaLayer$$ = $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$].$_markerObjs$, $DvtMapLayer$$ = 0;$DvtMapLayer$$ < $DvtMapAreaLayer$$.length;$DvtMapLayer$$++) {
              if ($DvtMapAreaLayer$$[$DvtMapLayer$$] === $DvtThematicMapControlPanel$$) {
                return this.$_getDataLayerId$($DvtMapCustomAreaLayer$$) + ":marker[" + $DvtMapLayer$$ + "]";
              }
            }
          }
        }
      }
    }
    return null;
  };
  $DvtThematicMapAutomation$$.prototype.$_getDataObject$ = function $$DvtThematicMapAutomation$$$$$_getDataObject$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    for (var $DvtThematicMapEventManager$$ = this.$_tmap$.$_layers$, $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $DvtThematicMapEventManager$$.length;$DvtThematicMapKeyboardHandler$$++) {
      var $DvtMapDataLayer$$ = $DvtThematicMapEventManager$$[$DvtThematicMapKeyboardHandler$$].$DataLayers$, $DvtMapCustomAreaLayer$$;
      for ($DvtMapCustomAreaLayer$$ in $DvtMapDataLayer$$) {
        if (this.$_getDataLayerId$($DvtMapCustomAreaLayer$$) == $dvt$$12$$) {
          if ("area" == $DvtThematicMapControlPanel$$) {
            return $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$].$_dataAreaCollection$[$DvtThematicMapJsonParser$$];
          }
          if ("marker" == $DvtThematicMapControlPanel$$) {
            return $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$].$_dataMarkerCollection$[$DvtThematicMapJsonParser$$];
          }
          if ("link" == $DvtThematicMapControlPanel$$) {
            return $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$].$_dataLinkCollection$[$DvtThematicMapJsonParser$$];
          }
        }
      }
    }
    return null;
  };
  $DvtThematicMapAutomation$$.prototype.$_getDataLayerId$ = function $$DvtThematicMapAutomation$$$$$_getDataLayerId$$($dvt$$12$$) {
    var $DvtThematicMapControlPanel$$ = $dvt$$12$$.lastIndexOf(":");
    return 0 < $DvtThematicMapControlPanel$$ ? $dvt$$12$$.substring($DvtThematicMapControlPanel$$ + 1) : $dvt$$12$$;
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtDrillablePath$$, $dvt$$12$$.$Path$);
  $DvtDrillablePath$$.$HOVER_STROKE_WIDTH$ = 2;
  $DvtDrillablePath$$.$SELECTED_INNER_STROKE_WIDTH$ = 1;
  $DvtDrillablePath$$.$SELECTED_OUTER_STROKE_WIDTH$ = 4;
  $DvtDrillablePath$$.$SELECTED_HOVER_OUTER_STROKE_WIDTH$ = 6;
  $DvtDrillablePath$$.$DISCLOSED_INNER_STROKE_WIDTH$ = 2;
  $DvtDrillablePath$$.$DISCLOSED_OUTER_STROKE_WIDTH$ = 4;
  $DvtDrillablePath$$.prototype.Init = function $$DvtDrillablePath$$$$Init$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtDrillablePath$$.$superclass$.Init.call(this, $dvt$$12$$);
    this.$_disclosedOuterShape$ = this.$_disclosedInnerShape$ = this.$_disclosedOuterStroke$ = this.$_disclosedInnerStroke$ = null;
    this.$_isDrilled$ = !1;
    this.Zoom = 1;
    this.$_bSupportsVectorEffects$ = $DvtThematicMapControlPanel$$;
  };
  $DvtDrillablePath$$.prototype.$isDrilled$ = function $$DvtDrillablePath$$$$$isDrilled$$() {
    return this.$_isDrilled$;
  };
  $DvtDrillablePath$$.prototype.$setDrilled$ = function $$DvtDrillablePath$$$$$setDrilled$$($dvt$$12$$) {
    this.$_isDrilled$ != $dvt$$12$$ && (this.$_isDrilled$ = $dvt$$12$$, this.$isDrilled$() ? (this.$_disclosedInnerShape$ = this.$copyShape$(), this.$_disclosedInnerShape$.$setFill$(null), this.$_disclosedInnerShape$.$setMouseEnabled$(!1), this.$_disclosedOuterShape$ = this.$copyShape$(), this.$_disclosedOuterShape$.$setFill$(null), this.$_disclosedOuterShape$.$setMouseEnabled$(!1), $dvt$$12$$ = this.getParent(), $dvt$$12$$.$addChild$(this.$_disclosedOuterShape$), $dvt$$12$$.$addChild$(this.$_disclosedInnerShape$), 
    this.$_disclosedInnerShape$.$setStroke$(this.$_adjustStrokeZoomWidth$(this.$_disclosedInnerStroke$, $DvtDrillablePath$$.$DISCLOSED_INNER_STROKE_WIDTH$)), this.$_disclosedOuterShape$.$setStroke$(this.$_adjustStrokeZoomWidth$(this.$_disclosedOuterStroke$, $DvtDrillablePath$$.$DISCLOSED_OUTER_STROKE_WIDTH$)), this.$setMouseEnabled$(!1), this.$IsShowingHoverEffect$ = !1) : (this.$IsShowingHoverEffect$ && (this.$UpdateSelectionEffect$(), this.$InnerShape$.$setStroke$(this.$_adjustStrokeZoomWidth$(this.$HoverInnerStroke$, 
    1), $DvtDrillablePath$$.$HOVER_STROKE_WIDTH$)), this.$_disclosedOuterShape$.getParent().removeChild(this.$_disclosedOuterShape$), this.$_disclosedInnerShape$.getParent().removeChild(this.$_disclosedInnerShape$), this.$setMouseEnabled$(!0), this.$setAlpha$(1)));
  };
  $DvtDrillablePath$$.prototype.$setSelected$ = function $$DvtDrillablePath$$$$$setSelected$$($dvt$$12$$) {
    this.$IsSelected$ != $dvt$$12$$ && ($dvt$$12$$ && (this.$IsShowingHoverEffect$ ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = this.$_adjustStrokeZoomWidth$(this.$SelectedHoverInnerStroke$, $DvtDrillablePath$$.$HOVER_STROKE_WIDTH$), this.$SelectedHoverOuterStroke$ = this.$_adjustStrokeZoomWidth$(this.$SelectedHoverOuterStroke$, $DvtDrillablePath$$.$SELECTED_HOVER_OUTER_STROKE_WIDTH$)) : (this.$SelectedInnerStroke$ = this.$_adjustStrokeZoomWidth$(this.$SelectedInnerStroke$, 
    $DvtDrillablePath$$.$SELECTED_INNER_STROKE_WIDTH$), this.$SelectedOuterStroke$ = this.$_adjustStrokeZoomWidth$(this.$SelectedOuterStroke$, $DvtDrillablePath$$.$SELECTED_OUTER_STROKE_WIDTH$))), $DvtDrillablePath$$.$superclass$.$setSelected$.call(this, $dvt$$12$$));
  };
  $DvtDrillablePath$$.prototype.$showHoverEffect$ = function $$DvtDrillablePath$$$$$showHoverEffect$$() {
    this.$isSelected$() ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = this.$_adjustStrokeZoomWidth$(this.$SelectedHoverInnerStroke$, $DvtDrillablePath$$.$HOVER_STROKE_WIDTH$), this.$SelectedHoverOuterStroke$ = this.$_adjustStrokeZoomWidth$(this.$SelectedHoverOuterStroke$, $DvtDrillablePath$$.$SELECTED_HOVER_OUTER_STROKE_WIDTH$)) : this.$HoverInnerStroke$ = this.$_adjustStrokeZoomWidth$(this.$HoverInnerStroke$, $DvtDrillablePath$$.$HOVER_STROKE_WIDTH$);
    $DvtDrillablePath$$.$superclass$.$showHoverEffect$.call(this);
  };
  $DvtDrillablePath$$.prototype.$CreateSelectedHoverStrokes$ = function $$DvtDrillablePath$$$$$CreateSelectedHoverStrokes$$() {
    this.$SelectedHoverInnerStroke$ || (this.$SelectedHoverInnerStroke$ = this.$HoverInnerStroke$.clone(), this.$SelectedHoverInnerStroke$.$setWidth$($DvtDrillablePath$$.$HOVER_STROKE_WIDTH$), this.$_bSupportsVectorEffects$ && this.$SelectedHoverInnerStroke$.$setFixedWidth$(!0));
    this.$SelectedHoverOuterStroke$ || (this.$SelectedHoverOuterStroke$ = this.$SelectedOuterStroke$.clone(), this.$SelectedHoverOuterStroke$.$setWidth$($DvtDrillablePath$$.$SELECTED_HOVER_OUTER_STROKE_WIDTH$), this.$_bSupportsVectorEffects$ && this.$SelectedHoverOuterStroke$.$setFixedWidth$(!0));
  };
  $DvtDrillablePath$$.prototype.$hideHoverEffect$ = function $$DvtDrillablePath$$$$$hideHoverEffect$$() {
    this.$isSelected$() && (this.$SelectedInnerStroke$ = this.$_adjustStrokeZoomWidth$(this.$SelectedInnerStroke$, $DvtDrillablePath$$.$SELECTED_INNER_STROKE_WIDTH$), this.$SelectedOuterStroke$ = this.$_adjustStrokeZoomWidth$(this.$SelectedOuterStroke$, $DvtDrillablePath$$.$SELECTED_OUTER_STROKE_WIDTH$));
    $DvtDrillablePath$$.$superclass$.$hideHoverEffect$.call(this);
  };
  $DvtDrillablePath$$.prototype.$setHoverStroke$ = function $$DvtDrillablePath$$$$$setHoverStroke$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtDrillablePath$$.$superclass$.$setHoverStroke$.call(this, $dvt$$12$$, $DvtThematicMapControlPanel$$);
    this.$_bSupportsVectorEffects$ && (this.$HoverInnerStroke$ && this.$HoverInnerStroke$.$setFixedWidth$(!0), this.$HoverOuterStroke$ && this.$HoverOuterStroke$.$setFixedWidth$(!0));
    return this;
  };
  $DvtDrillablePath$$.prototype.$setSelectedStroke$ = function $$DvtDrillablePath$$$$$setSelectedStroke$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtDrillablePath$$.$superclass$.$setSelectedStroke$.call(this, $dvt$$12$$, $DvtThematicMapControlPanel$$);
    this.$_bSupportsVectorEffects$ && (this.$SelectedInnerStroke$ && this.$SelectedInnerStroke$.$setFixedWidth$(!0), this.$SelectedOuterStroke$ && this.$SelectedOuterStroke$.$setFixedWidth$(!0));
    return this;
  };
  $DvtDrillablePath$$.prototype.$setSelectedHoverStroke$ = function $$DvtDrillablePath$$$$$setSelectedHoverStroke$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtDrillablePath$$.$superclass$.$setSelectedHoverStroke$.call(this, $dvt$$12$$, $DvtThematicMapControlPanel$$);
    this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$ && this.$SelectedHoverInnerStroke$.$setFixedWidth$(!0), this.$SelectedHoverOuterStroke$ && this.$SelectedHoverOuterStroke$.$setFixedWidth$(!0));
    return this;
  };
  $DvtDrillablePath$$.prototype.$setDisclosedStroke$ = function $$DvtDrillablePath$$$$$setDisclosedStroke$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    (this.$_disclosedInnerStroke$ = $dvt$$12$$) && this.$_bSupportsVectorEffects$ && this.$_disclosedInnerStroke$.$setFixedWidth$(!0);
    (this.$_disclosedOuterStroke$ = $DvtThematicMapControlPanel$$) && this.$_bSupportsVectorEffects$ && this.$_disclosedOuterStroke$.$setFixedWidth$(!0);
  };
  $DvtDrillablePath$$.prototype.$savePatternFill$ = function $$DvtDrillablePath$$$$$savePatternFill$$($dvt$$12$$) {
    this.$_ptFill$ = $dvt$$12$$;
  };
  $DvtDrillablePath$$.prototype.$_updateStrokeZoomWidth$ = function $$DvtDrillablePath$$$$$_updateStrokeZoomWidth$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    if (!this.$_bSupportsVectorEffects$) {
      var $DvtThematicMapJsonParser$$ = $dvt$$12$$.$getStroke$();
      $DvtThematicMapJsonParser$$ && ($DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.clone(), $DvtThematicMapJsonParser$$.$setWidth$($DvtThematicMapControlPanel$$ / this.Zoom), $dvt$$12$$.$setStroke$($DvtThematicMapJsonParser$$));
    }
  };
  $DvtDrillablePath$$.prototype.$_adjustStrokeZoomWidth$ = function $$DvtDrillablePath$$$$$_adjustStrokeZoomWidth$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    if (!this.$_bSupportsVectorEffects$) {
      var $DvtThematicMapJsonParser$$ = $dvt$$12$$.clone();
      $DvtThematicMapJsonParser$$.$setWidth$($DvtThematicMapControlPanel$$ / this.Zoom);
      return $DvtThematicMapJsonParser$$;
    }
    return $dvt$$12$$;
  };
  $DvtDrillablePath$$.prototype.$handleZoomEvent$ = function $$DvtDrillablePath$$$$$handleZoomEvent$$($dvt$$12$$) {
    this.Zoom = $dvt$$12$$.$_a$;
    this.$isDrilled$() ? (this.$_updateStrokeZoomWidth$(this.$_disclosedInnerShape$, $DvtDrillablePath$$.$DISCLOSED_INNER_STROKE_WIDTH$), this.$_updateStrokeZoomWidth$(this.$_disclosedOuterShape$, $DvtDrillablePath$$.$DISCLOSED_OUTER_STROKE_WIDTH$)) : this.$isSelected$() ? this.$IsShowingHoverEffect$ ? (this.$_updateStrokeZoomWidth$(this.$InnerShape$, $DvtDrillablePath$$.$HOVER_STROKE_WIDTH$), this.$_updateStrokeZoomWidth$(this, $DvtDrillablePath$$.$SELECTED_HOVER_OUTER_STROKE_WIDTH$)) : (this.$_updateStrokeZoomWidth$(this.$InnerShape$, 
    $DvtDrillablePath$$.$SELECTED_INNER_STROKE_WIDTH$), this.$_updateStrokeZoomWidth$(this, $DvtDrillablePath$$.$SELECTED_OUTER_STROKE_WIDTH$)) : this.$IsShowingHoverEffect$ ? this.$_updateStrokeZoomWidth$(this.$InnerShape$, $DvtDrillablePath$$.$HOVER_STROKE_WIDTH$) : this.$_updateStrokeZoomWidth$(this, 1);
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtCustomDataItem$$, $dvt$$12$$.$Container$);
  $DvtCustomDataItem$$.$_RECT_PADDING$ = 5;
  $DvtCustomDataItem$$.prototype.Init = function $$DvtCustomDataItem$$$$Init$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtCustomDataItem$$.$superclass$.Init.call(this, $DvtThematicMapControlPanel$$);
    this.$_dataItem$ = $DvtThematicMapJsonParser$$;
    $DvtThematicMapJsonParser$$ instanceof $dvt$$12$$.$BaseComponent$ ? (this.$_width$ = $DvtThematicMapJsonParser$$.getWidth(), this.$_height$ = $DvtThematicMapJsonParser$$.getHeight(), this.$addChild$($DvtThematicMapJsonParser$$)) : (this.$getElem$().appendChild($DvtThematicMapJsonParser$$), $DvtThematicMapJsonParser$$ = $dvt$$12$$.$DisplayableUtils$.$getDimensionsForced$($DvtThematicMapControlPanel$$, this), this.$_width$ = $DvtThematicMapJsonParser$$.$w$, this.$_height$ = $DvtThematicMapJsonParser$$.$h$);
    this.$_boundingRect$ = new $dvt$$12$$.Rect($DvtThematicMapControlPanel$$, -$DvtCustomDataItem$$.$_RECT_PADDING$, -$DvtCustomDataItem$$.$_RECT_PADDING$, this.$_width$ + 2 * $DvtCustomDataItem$$.$_RECT_PADDING$, this.$_height$ + 2 * $DvtCustomDataItem$$.$_RECT_PADDING$);
    this.$_boundingRect$.$setInvisibleFill$();
    $DvtThematicMapControlPanel$$ = new $dvt$$12$$.$SolidStroke$($DvtThematicMapEventManager$$.selectedInnerColor, 1, 2);
    $DvtThematicMapJsonParser$$ = new $dvt$$12$$.$SolidStroke$("rgb(235, 236, 237)", 1, 4);
    var $DvtThematicMapKeyboardHandler$$ = new $dvt$$12$$.$SolidStroke$($DvtThematicMapEventManager$$.selectedInnerColor, 1, 2), $DvtMapDataLayer$$ = new $dvt$$12$$.$SolidStroke$($DvtThematicMapEventManager$$.selectedOuterColor, 1, 4), $DvtMapCustomAreaLayer$$ = new $dvt$$12$$.$SolidStroke$($DvtThematicMapEventManager$$.selectedInnerColor, 1, 2);
    $DvtThematicMapEventManager$$ = new $dvt$$12$$.$SolidStroke$($DvtThematicMapEventManager$$.selectedOuterColor, 1, 6);
    this.$_boundingRect$.$setHoverStroke$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$).$setSelectedStroke$($DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$).$setSelectedHoverStroke$($DvtMapCustomAreaLayer$$, $DvtThematicMapEventManager$$);
    this.$addChildAt$(this.$_boundingRect$, 0);
  };
  $DvtCustomDataItem$$.prototype.$setAriaProperty$ = function $$DvtCustomDataItem$$$$$setAriaProperty$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    $dvt$$12$$.$Agent$.$isTouchDevice$() ? this.$_boundingRect$.$setAriaProperty$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) : $DvtCustomDataItem$$.$superclass$.$setAriaProperty$.call(this, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  };
  $DvtCustomDataItem$$.prototype.$setAriaRole$ = function $$DvtCustomDataItem$$$$$setAriaRole$$($DvtThematicMapControlPanel$$) {
    $dvt$$12$$.$Agent$.$isTouchDevice$() ? this.$_boundingRect$.$setAriaRole$($DvtThematicMapControlPanel$$) : $DvtCustomDataItem$$.$superclass$.$setAriaRole$.call(this, $DvtThematicMapControlPanel$$);
  };
  $DvtCustomDataItem$$.prototype.getWidth = function $$DvtCustomDataItem$$$$getWidth$() {
    return this.$_width$;
  };
  $DvtCustomDataItem$$.prototype.getHeight = function $$DvtCustomDataItem$$$$getHeight$() {
    return this.$_height$;
  };
  $DvtCustomDataItem$$.prototype.$setSelectable$ = function $$DvtCustomDataItem$$$$$setSelectable$$($dvt$$12$$) {
    this.$_boundingRect$.$setSelectable$($dvt$$12$$);
  };
  $DvtCustomDataItem$$.prototype.$isSelectable$ = function $$DvtCustomDataItem$$$$$isSelectable$$() {
    return this.$_boundingRect$.$isSelectable$();
  };
  $DvtCustomDataItem$$.prototype.$isSelected$ = function $$DvtCustomDataItem$$$$$isSelected$$() {
    return this.$_boundingRect$.$isSelected$();
  };
  $DvtCustomDataItem$$.prototype.$setSelected$ = function $$DvtCustomDataItem$$$$$setSelected$$($dvt$$12$$) {
    this.$_boundingRect$.$setSelected$($dvt$$12$$);
  };
  $DvtCustomDataItem$$.prototype.$showHoverEffect$ = function $$DvtCustomDataItem$$$$$showHoverEffect$$() {
    this.$_boundingRect$.$showHoverEffect$();
  };
  $DvtCustomDataItem$$.prototype.$hideHoverEffect$ = function $$DvtCustomDataItem$$$$$hideHoverEffect$$() {
    this.$_boundingRect$.$hideHoverEffect$();
  };
  $DvtCustomDataItem$$.prototype.$updateRootElement$ = function $$DvtCustomDataItem$$$$$updateRootElement$$($DvtThematicMapControlPanel$$) {
    this.$_dataItem$ !== $DvtThematicMapControlPanel$$ && (this.$_dataItem$ && (this.$_dataItem$ instanceof $dvt$$12$$.$BaseComponent$ ? this.removeChild(this.$_dataItem$) : this.$getElem$().removeChild(this.$_dataItem$)), $DvtThematicMapControlPanel$$ instanceof $dvt$$12$$.$BaseComponent$ ? this.$addChild$($DvtThematicMapControlPanel$$) : this.$getElem$().appendChild($DvtThematicMapControlPanel$$), this.$_dataItem$ = $DvtThematicMapControlPanel$$);
  };
  $DvtCustomDataItem$$.prototype.$fireKeyboardListener$ = function $$DvtCustomDataItem$$$$$fireKeyboardListener$$($DvtThematicMapControlPanel$$) {
    this.$_dataItem$ instanceof $dvt$$12$$.$BaseComponent$ && this.$_dataItem$.$fireKeyboardListener$($DvtThematicMapControlPanel$$);
  };
  var $DvtBaseMapManager$$;
  this ? this.DvtBaseMapManager ? $DvtBaseMapManager$$ = this.DvtBaseMapManager : (this.DvtBaseMapManager = $DvtBaseMapManager$$ = {}, $DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []], $DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = [[]]) : window.DvtBaseMapManager ? $DvtBaseMapManager$$ = window.DvtBaseMapManager : ($DvtBaseMapManager$$ = {}, window.DvtBaseMapManager = $DvtBaseMapManager$$, $DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []], $DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = 
  [[]]);
  $dvt$$12$$.$Obj$.$createSubclass$($DvtBaseMapManager$$, $dvt$$12$$.$Obj$, "DvtBaseMapManager");
  $DvtBaseMapManager$$.$TYPE_LABELS$ = 0;
  $DvtBaseMapManager$$.$TYPE_PATH$ = 1;
  $DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$ = 2;
  $DvtBaseMapManager$$.$TYPE_LABELINFO$ = 3;
  $DvtBaseMapManager$$.$TYPE_DIM$ = 4;
  $DvtBaseMapManager$$.$_INDEX$ = "__index";
  $DvtBaseMapManager$$.$_GLOBAL_MAPS$ = {};
  $DvtBaseMapManager$$.$getBaseMapDim$ = function $$DvtBaseMapManager$$$$getBaseMapDim$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapEventManager$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$DvtThematicMapControlPanel$$][$DvtThematicMapJsonParser$$];
    return $DvtThematicMapEventManager$$ && ($DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$[$DvtBaseMapManager$$.$TYPE_DIM$]) ? new $dvt$$12$$.$Rectangle$($DvtThematicMapEventManager$$[0], $DvtThematicMapEventManager$$[1], $DvtThematicMapEventManager$$[2], $DvtThematicMapEventManager$$[3]) : null;
  };
  $DvtBaseMapManager$$.$getAreaLabelInfo$ = function $$DvtBaseMapManager$$$$getAreaLabelInfo$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$][$DvtThematicMapControlPanel$$];
    return $DvtThematicMapJsonParser$$ ? $DvtThematicMapJsonParser$$[$DvtBaseMapManager$$.$TYPE_LABELINFO$] : null;
  };
  $DvtBaseMapManager$$.$getAreaIds$ = function $$DvtBaseMapManager$$$$getAreaIds$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = [], $DvtThematicMapEventManager$$ = $DvtBaseMapManager$$.$getAreaPaths$($dvt$$12$$, $DvtThematicMapControlPanel$$), $DvtThematicMapKeyboardHandler$$;
    for ($DvtThematicMapKeyboardHandler$$ in $DvtThematicMapEventManager$$) {
      $DvtThematicMapJsonParser$$.push($DvtThematicMapKeyboardHandler$$);
    }
    return $DvtThematicMapJsonParser$$;
  };
  $DvtBaseMapManager$$.$getAreaLabels$ = function $$DvtBaseMapManager$$$$getAreaLabels$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$][$DvtThematicMapControlPanel$$];
    return $DvtThematicMapJsonParser$$ ? $DvtThematicMapJsonParser$$[$DvtBaseMapManager$$.$TYPE_LABELS$] : null;
  };
  $DvtBaseMapManager$$.$getLongAreaLabel$ = function $$DvtBaseMapManager$$$$getLongAreaLabel$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    $dvt$$12$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$][$DvtThematicMapControlPanel$$];
    var $DvtThematicMapEventManager$$;
    $dvt$$12$$ && ($DvtThematicMapEventManager$$ = $dvt$$12$$[$DvtBaseMapManager$$.$TYPE_LABELS$]);
    return $DvtThematicMapEventManager$$ && $DvtThematicMapEventManager$$[$DvtThematicMapJsonParser$$] ? $DvtThematicMapEventManager$$[$DvtThematicMapJsonParser$$][1] : null;
  };
  $DvtBaseMapManager$$.$getCityCoordinates$ = function $$DvtBaseMapManager$$$$getCityCoordinates$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapEventManager$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$DvtThematicMapControlPanel$$];
    return $DvtThematicMapEventManager$$ && ($DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$.cities) && ($DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$[$DvtBaseMapManager$$.$TYPE_PATH$][$DvtThematicMapJsonParser$$]) ? new $dvt$$12$$.$Point$($DvtThematicMapEventManager$$[0], $DvtThematicMapEventManager$$[1]) : null;
  };
  $DvtBaseMapManager$$.$getCityLabel$ = function $$DvtBaseMapManager$$$$getCityLabel$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$];
    return $DvtThematicMapJsonParser$$ && ($DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.cities) && ($DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$[$DvtBaseMapManager$$.$TYPE_LABELS$][$DvtThematicMapControlPanel$$]) ? $DvtThematicMapJsonParser$$[1] : null;
  };
  $DvtBaseMapManager$$.$getAreaCenter$ = function $$DvtBaseMapManager$$$$getAreaCenter$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapKeyboardHandler$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$DvtThematicMapControlPanel$$];
    if ($DvtThematicMapKeyboardHandler$$ && ($DvtThematicMapKeyboardHandler$$ = $DvtThematicMapKeyboardHandler$$[$DvtThematicMapJsonParser$$])) {
      if (($DvtThematicMapKeyboardHandler$$ = $DvtThematicMapKeyboardHandler$$[$DvtBaseMapManager$$.$TYPE_LABELINFO$]) && $DvtThematicMapKeyboardHandler$$[$DvtThematicMapEventManager$$]) {
        return $dvt$$12$$.$Rectangle$.create($DvtThematicMapKeyboardHandler$$[$DvtThematicMapEventManager$$][0]).$getCenter$();
      }
      $DvtThematicMapControlPanel$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$DvtThematicMapControlPanel$$][$DvtThematicMapJsonParser$$][$DvtBaseMapManager$$.$TYPE_PATH$][$DvtThematicMapEventManager$$];
      if (!$DvtThematicMapControlPanel$$) {
        return null;
      }
      $DvtThematicMapControlPanel$$ = $dvt$$12$$.$PathUtils$.$createPathArray$($DvtThematicMapControlPanel$$);
      return $dvt$$12$$.$PathUtils$.$getDimensions$($DvtThematicMapControlPanel$$).$getCenter$();
    }
    return null;
  };
  $DvtBaseMapManager$$.$getChildLayerName$ = function $$DvtBaseMapManager$$$$getChildLayerName$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$][$DvtThematicMapControlPanel$$];
    return $DvtThematicMapJsonParser$$ ? $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$][$DvtBaseMapManager$$.$_INDEX$][$DvtThematicMapJsonParser$$.__index + 1] : null;
  };
  $DvtBaseMapManager$$.$getParentLayerName$ = function $$DvtBaseMapManager$$$$getParentLayerName$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    return $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$][$DvtThematicMapControlPanel$$] ? $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$][$DvtBaseMapManager$$.$_INDEX$][$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$][$DvtThematicMapControlPanel$$].__index - 1] : null;
  };
  $DvtBaseMapManager$$.$getAreaPaths$ = function $$DvtBaseMapManager$$$$getAreaPaths$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    return $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$][$DvtThematicMapControlPanel$$][$DvtBaseMapManager$$.$TYPE_PATH$];
  };
  $DvtBaseMapManager$$.$getPathForArea$ = function $$DvtBaseMapManager$$$$getPathForArea$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    return $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$][$DvtThematicMapControlPanel$$][$DvtBaseMapManager$$.$TYPE_PATH$][$DvtThematicMapJsonParser$$];
  };
  $DvtBaseMapManager$$.$getChildrenForLayerAreas$ = function $$DvtBaseMapManager$$$$getChildrenForLayerAreas$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$.$getChildLayerName$($dvt$$12$$, $DvtThematicMapControlPanel$$);
    return $DvtThematicMapJsonParser$$ && ($DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$][$DvtThematicMapJsonParser$$][$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$]) ? $DvtThematicMapJsonParser$$ : [];
  };
  $DvtBaseMapManager$$.$getMapLayerName$ = function $$DvtBaseMapManager$$$$getMapLayerName$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    return $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$][$DvtBaseMapManager$$.$_INDEX$][$DvtThematicMapControlPanel$$];
  };
  $DvtBaseMapManager$$.$registerBaseMapLayer$ = function $$DvtBaseMapManager$$$$registerBaseMapLayer$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$, $DvtMapAreaLayer$$) {
    var $DvtMapLayer$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$];
    $DvtMapLayer$$ || ($DvtMapLayer$$ = {}, $DvtMapLayer$$[$DvtBaseMapManager$$.$_INDEX$] = [], $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$] = $DvtMapLayer$$);
    $dvt$$12$$ = $DvtMapLayer$$[$DvtThematicMapControlPanel$$];
    $dvt$$12$$ || ($dvt$$12$$ = {}, $DvtMapLayer$$[$DvtThematicMapControlPanel$$] = $dvt$$12$$, null != $DvtMapCustomAreaLayer$$ && ($DvtMapLayer$$[$DvtBaseMapManager$$.$_INDEX$][$DvtMapCustomAreaLayer$$] = $DvtThematicMapControlPanel$$));
    $dvt$$12$$[$DvtBaseMapManager$$.$TYPE_LABELS$] = $DvtThematicMapJsonParser$$;
    $dvt$$12$$[$DvtBaseMapManager$$.$TYPE_PATH$] = $DvtThematicMapEventManager$$;
    $dvt$$12$$[$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $DvtThematicMapKeyboardHandler$$;
    $dvt$$12$$[$DvtBaseMapManager$$.$TYPE_LABELINFO$] = $DvtMapDataLayer$$;
    $dvt$$12$$[$DvtBaseMapManager$$.$TYPE_DIM$] = $DvtMapAreaLayer$$;
    $dvt$$12$$[$DvtBaseMapManager$$.$_INDEX$] = $DvtMapCustomAreaLayer$$;
  };
  $DvtBaseMapManager$$.$registerResourceBundle$ = function $$DvtBaseMapManager$$$$registerResourceBundle$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$];
    $DvtThematicMapEventManager$$ || ($DvtThematicMapEventManager$$ = {}, $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$] = $DvtThematicMapEventManager$$);
    $dvt$$12$$ = $DvtThematicMapEventManager$$[$DvtThematicMapControlPanel$$];
    $dvt$$12$$ || ($dvt$$12$$ = {}, $DvtThematicMapEventManager$$[$DvtThematicMapControlPanel$$] = $dvt$$12$$);
    ($dvt$$12$$ = $DvtThematicMapEventManager$$[$DvtThematicMapControlPanel$$]) && ($dvt$$12$$[$DvtBaseMapManager$$.$TYPE_LABELS$] = $DvtThematicMapJsonParser$$);
  };
  $DvtBaseMapManager$$.$updateResourceBundle$ = function $$DvtBaseMapManager$$$$updateResourceBundle$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    if ($dvt$$12$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$]) {
      if ($DvtThematicMapControlPanel$$ = $dvt$$12$$[$DvtThematicMapControlPanel$$]) {
        for (var $DvtThematicMapEventManager$$ in $DvtThematicMapJsonParser$$) {
          $DvtThematicMapControlPanel$$[$DvtBaseMapManager$$.$TYPE_LABELS$][$DvtThematicMapEventManager$$] = $DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$];
        }
      }
    }
  };
  $DvtBaseMapManager$$.$_processUnprocessedMaps$ = function $$DvtBaseMapManager$$$$_processUnprocessedMaps$$() {
    var $dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$._UNPROCESSED_MAPS;
    if ($DvtThematicMapJsonParser$$) {
      for ($dvt$$12$$ = 0;$dvt$$12$$ < $DvtThematicMapJsonParser$$[0].length;$dvt$$12$$++) {
        $DvtThematicMapControlPanel$$ = $DvtThematicMapJsonParser$$[0][$dvt$$12$$], $DvtBaseMapManager$$.$registerBaseMapLayer$($DvtThematicMapControlPanel$$[0], $DvtThematicMapControlPanel$$[1], $DvtThematicMapControlPanel$$[2], $DvtThematicMapControlPanel$$[3], $DvtThematicMapControlPanel$$[4], $DvtThematicMapControlPanel$$[5], $DvtThematicMapControlPanel$$[6], $DvtThematicMapControlPanel$$[7]);
      }
      for ($dvt$$12$$ = 0;$dvt$$12$$ < $DvtThematicMapJsonParser$$[1].length;$dvt$$12$$++) {
        $DvtThematicMapControlPanel$$ = $DvtThematicMapJsonParser$$[1][$dvt$$12$$], $DvtBaseMapManager$$.$registerResourceBundle$($DvtThematicMapControlPanel$$[0], $DvtThematicMapControlPanel$$[1], $DvtThematicMapControlPanel$$[2]);
      }
      for ($dvt$$12$$ = 0;$dvt$$12$$ < $DvtThematicMapJsonParser$$[2].length;$dvt$$12$$++) {
        $DvtThematicMapControlPanel$$ = $DvtThematicMapJsonParser$$[2][$dvt$$12$$], $DvtBaseMapManager$$.$updateResourceBundle$($DvtThematicMapControlPanel$$[0], $DvtThematicMapControlPanel$$[1], $DvtThematicMapControlPanel$$[2]);
      }
      $DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []];
    }
    if ($DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES) {
      for ($dvt$$12$$ = 0;$dvt$$12$$ < $DvtThematicMapJsonParser$$[0].length;$dvt$$12$$++) {
        $DvtThematicMapControlPanel$$ = $DvtThematicMapJsonParser$$[0][$dvt$$12$$];
        var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$[1], $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$[2], $DvtMapDataLayer$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$DvtThematicMapControlPanel$$[0]], $DvtMapCustomAreaLayer$$;
        if ($DvtMapDataLayer$$) {
          if ($DvtThematicMapEventManager$$ = $DvtMapDataLayer$$[$DvtThematicMapEventManager$$]) {
            for ($DvtThematicMapEventManager$$[$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $DvtThematicMapControlPanel$$[3], $DvtMapCustomAreaLayer$$ = $DvtThematicMapEventManager$$[$DvtBaseMapManager$$.$TYPE_DIM$], $dvt$$12$$ = $DvtThematicMapEventManager$$[$DvtBaseMapManager$$.$_INDEX$], $DvtThematicMapEventManager$$ = $DvtMapDataLayer$$[$DvtBaseMapManager$$.$_INDEX$], $DvtThematicMapEventManager$$.splice($dvt$$12$$, 0, $DvtThematicMapKeyboardHandler$$), $DvtMapDataLayer$$[$DvtThematicMapKeyboardHandler$$][$DvtBaseMapManager$$.$_INDEX$] = 
            $dvt$$12$$, $dvt$$12$$ += 1;$dvt$$12$$ < $DvtThematicMapEventManager$$.length;$dvt$$12$$++) {
              ($DvtThematicMapKeyboardHandler$$ = $DvtMapDataLayer$$[$DvtThematicMapEventManager$$[$dvt$$12$$]]) && $DvtThematicMapKeyboardHandler$$[$DvtBaseMapManager$$.$_INDEX$]++;
            }
          }
          ($DvtThematicMapEventManager$$ = $DvtMapDataLayer$$[$DvtThematicMapControlPanel$$[2]]) && ($DvtThematicMapEventManager$$[$DvtBaseMapManager$$.$TYPE_DIM$] = $DvtMapCustomAreaLayer$$);
        }
      }
      $DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = [[]];
    }
  };
  $DvtBaseMapManager$$.$simplifyAreaPaths$ = function $$DvtBaseMapManager$$$$simplifyAreaPaths$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$) {
    if (0 < $DvtMapCustomAreaLayer$$) {
      $DvtThematicMapJsonParser$$ = 1 / (Math.min($DvtThematicMapKeyboardHandler$$ / $DvtThematicMapJsonParser$$, $DvtMapDataLayer$$ / $DvtThematicMapEventManager$$) * $DvtMapCustomAreaLayer$$);
      if (1 >= $DvtThematicMapJsonParser$$) {
        return $DvtThematicMapControlPanel$$;
      }
      $DvtThematicMapEventManager$$ = [];
      if ($DvtThematicMapControlPanel$$) {
        for (var $DvtMapAreaLayer$$ in $DvtThematicMapControlPanel$$) {
          $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$[$DvtMapAreaLayer$$], isNaN($DvtThematicMapKeyboardHandler$$) && ($DvtThematicMapKeyboardHandler$$ = $dvt$$12$$.$PathUtils$.$createPathArray$($DvtThematicMapControlPanel$$[$DvtMapAreaLayer$$])), $DvtThematicMapEventManager$$[$DvtMapAreaLayer$$] = $dvt$$12$$.$PathUtils$.$simplifyPath$($DvtThematicMapKeyboardHandler$$, $DvtThematicMapJsonParser$$);
        }
      }
      return $DvtThematicMapEventManager$$;
    }
    return $DvtThematicMapControlPanel$$;
  };
  $DvtBaseMapManager$$.$getLayerIds$ = function $$DvtBaseMapManager$$$$getLayerIds$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$12$$][$DvtThematicMapControlPanel$$], $DvtThematicMapEventManager$$ = {};
    if ($DvtThematicMapJsonParser$$) {
      var $DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$[$DvtBaseMapManager$$.$TYPE_LABELS$], $DvtThematicMapKeyboardHandler$$;
      for ($DvtThematicMapKeyboardHandler$$ in $DvtThematicMapJsonParser$$) {
        $DvtThematicMapEventManager$$[$DvtThematicMapKeyboardHandler$$] = $DvtThematicMapJsonParser$$[$DvtThematicMapKeyboardHandler$$][1];
      }
      if ("cities" !== $DvtThematicMapControlPanel$$ && !$DvtThematicMapJsonParser$$) {
        for ($DvtThematicMapKeyboardHandler$$ = $DvtBaseMapManager$$.$getAreaIds$($dvt$$12$$, $DvtThematicMapControlPanel$$), $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapKeyboardHandler$$.length;$DvtThematicMapJsonParser$$++) {
          $DvtThematicMapEventManager$$[$DvtThematicMapKeyboardHandler$$[$DvtThematicMapJsonParser$$]] = null;
        }
      }
    }
    return $DvtThematicMapEventManager$$;
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtThematicMapCategoryWrapper$$, $dvt$$12$$.$Obj$);
  $DvtThematicMapCategoryWrapper$$.prototype.Init = function $$DvtThematicMapCategoryWrapper$$$$Init$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    this.$_displayable$ = $dvt$$12$$;
    this.$_category$ = $DvtThematicMapControlPanel$$;
  };
  $DvtThematicMapCategoryWrapper$$.prototype.$getCategories$ = function $$DvtThematicMapCategoryWrapper$$$$$getCategories$$() {
    return this.$_category$;
  };
  $DvtThematicMapCategoryWrapper$$.prototype.$getDisplayables$ = function $$DvtThematicMapCategoryWrapper$$$$$getDisplayables$$() {
    return [this.$_displayable$];
  };
  $dvt$$12$$.$MapDrillEvent$ = function $$dvt$$12$$$$MapDrillEvent$$($DvtThematicMapControlPanel$$) {
    this.Init($dvt$$12$$.$MapDrillEvent$.$TYPE$);
    this.$_drillType$ = $DvtThematicMapControlPanel$$;
  };
  $dvt$$12$$.$Obj$.$createSubclass$($dvt$$12$$.$MapDrillEvent$, $dvt$$12$$.$BaseComponentEvent$);
  $dvt$$12$$.$MapDrillEvent$.$TYPE$ = "drill";
  $dvt$$12$$.$MapDrillEvent$.$DRILL_UP$ = 0;
  $dvt$$12$$.$MapDrillEvent$.$DRILL_DOWN$ = 1;
  $dvt$$12$$.$MapDrillEvent$.$RESET$ = 2;
  $dvt$$12$$.$MapDrillEvent$.prototype.$setDisclosed$ = function $$dvt$$12$$$$MapDrillEvent$$$$setDisclosed$$($dvt$$12$$) {
    this.$_disclosed$ = $dvt$$12$$;
  };
  $dvt$$12$$.$MapActionEvent$ = function $$dvt$$12$$$$MapActionEvent$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    this.Init($dvt$$12$$.$MapActionEvent$.$TYPE$);
    this.item = $DvtThematicMapControlPanel$$;
    this.rowKey = $DvtThematicMapJsonParser$$;
    this.action = $DvtThematicMapEventManager$$;
  };
  $dvt$$12$$.$Obj$.$createSubclass$($dvt$$12$$.$MapActionEvent$, $dvt$$12$$.$BaseComponentEvent$);
  $dvt$$12$$.$MapActionEvent$.$TYPE$ = "action";
  $dvt$$12$$.$MapActionEvent$.prototype.$getClientId$ = function $$dvt$$12$$$$MapActionEvent$$$$getClientId$$() {
    return this.item;
  };
  $dvt$$12$$.$MapActionEvent$.prototype.$getAction$ = function $$dvt$$12$$$$MapActionEvent$$$$getAction$$() {
    return this.action;
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtMapLabel$$, $dvt$$12$$.$OutputText$);
  $DvtMapLabel$$.prototype.Init = function $$DvtMapLabel$$$$Init$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$) {
    $DvtMapLabel$$.$superclass$.Init.call(this, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, 0, 0);
    this.$_bSupportsVectorEffects$ = $DvtMapCustomAreaLayer$$;
    this.$_boundRectangle$ = [];
    this.$setMouseEnabled$(!1);
    this.$alignCenter$();
    this.$alignMiddle$();
    this.$_center$ = null;
    this.$_labelDisplay$ = $DvtThematicMapKeyboardHandler$$;
    this.$_parentContainer$ = $DvtMapDataLayer$$;
    if ($DvtThematicMapEventManager$$ && (this.$_boundRectangle$.push($dvt$$12$$.$Rectangle$.create($DvtThematicMapEventManager$$[0])), 1 < $DvtThematicMapEventManager$$.length)) {
      for (this.$_leaderLines$ = [], $DvtThematicMapJsonParser$$ = 1;$DvtThematicMapJsonParser$$ < $DvtThematicMapEventManager$$.length;$DvtThematicMapJsonParser$$++) {
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapEventManager$$[$DvtThematicMapJsonParser$$], this.$_boundRectangle$.push($dvt$$12$$.$Rectangle$.create($DvtThematicMapKeyboardHandler$$[0])), $DvtThematicMapKeyboardHandler$$ = new $dvt$$12$$.$Polyline$($DvtThematicMapControlPanel$$, $DvtThematicMapKeyboardHandler$$[1]), $DvtThematicMapKeyboardHandler$$.$setPixelHinting$(), $DvtMapDataLayer$$ = new $dvt$$12$$.$SolidStroke$("#000000"), this.$_bSupportsVectorEffects$ && $DvtMapDataLayer$$.$setFixedWidth$(!0), 
        $DvtThematicMapKeyboardHandler$$.$setStroke$($DvtMapDataLayer$$), this.$_leaderLines$.push($DvtThematicMapKeyboardHandler$$);
      }
    }
  };
  $DvtMapLabel$$.prototype.$addBounds$ = function $$DvtMapLabel$$$$$addBounds$$($dvt$$12$$) {
    this.$_boundRectangle$.push($dvt$$12$$);
  };
  $DvtMapLabel$$.prototype.$hasBounds$ = function $$DvtMapLabel$$$$$hasBounds$$() {
    return 0 < this.$_boundRectangle$.length;
  };
  $DvtMapLabel$$.prototype.update = function $$DvtMapLabel$$$$update$($DvtThematicMapControlPanel$$) {
    $DvtThematicMapControlPanel$$ = $DvtThematicMapControlPanel$$.$_a$;
    for (var $DvtThematicMapJsonParser$$ = -1, $DvtThematicMapEventManager$$ = $dvt$$12$$.$TextUtils$.$guessTextDimensions$(this), $DvtThematicMapKeyboardHandler$$ = !1, $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < this.$_boundRectangle$.length;$DvtMapDataLayer$$++) {
      var $DvtMapCustomAreaLayer$$ = this.$_boundRectangle$[$DvtMapDataLayer$$].$w$ * $DvtThematicMapControlPanel$$;
      if ($DvtThematicMapEventManager$$.$h$ <= this.$_boundRectangle$[$DvtMapDataLayer$$].$h$ * $DvtThematicMapControlPanel$$) {
        if ($DvtThematicMapEventManager$$.$w$ <= $DvtMapCustomAreaLayer$$) {
          $DvtThematicMapJsonParser$$ = $DvtMapDataLayer$$;
          break;
        } else {
          if (this.getParent() || ($DvtThematicMapKeyboardHandler$$ = !0, this.$_parentContainer$.$addChild$(this)), this.$getDimensions$().$w$ <= $DvtMapCustomAreaLayer$$) {
            $DvtThematicMapJsonParser$$ = $DvtMapDataLayer$$;
            break;
          }
        }
      }
    }
    -1 == $DvtThematicMapJsonParser$$ && "on" == this.$_labelDisplay$ && ($DvtThematicMapJsonParser$$ = this.$_boundRectangle$.length - 1);
    this.$_currentState$ != $DvtThematicMapJsonParser$$ ? (-1 == $DvtThematicMapJsonParser$$ ? this.reset() : (this.getParent() || this.$_parentContainer$.$addChild$(this), $DvtThematicMapEventManager$$ = this.$_boundRectangle$[$DvtThematicMapJsonParser$$].$getCenter$(), this.$setCenter$($DvtThematicMapEventManager$$), this.$_leaderLines$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = null, 0 < $DvtThematicMapJsonParser$$ ? (this.$_leaderLine$ = this.$_leaderLines$[$DvtThematicMapJsonParser$$ - 
    1], this.$_parentContainer$.$addChild$(this.$_leaderLine$), $DvtThematicMapKeyboardHandler$$ = this.$getCSSStyle$(), $DvtThematicMapKeyboardHandler$$.$setStyle$($dvt$$12$$.$CSSStyle$.$COLOR$, "#000000"), this.$setCSSStyle$($DvtThematicMapKeyboardHandler$$), $DvtThematicMapKeyboardHandler$$ = this.$_boundRectangle$[$DvtThematicMapJsonParser$$], $DvtMapDataLayer$$ = this.$_leaderLine$.$getPoints$(), $DvtMapCustomAreaLayer$$ = $DvtMapDataLayer$$.length, $DvtThematicMapKeyboardHandler$$.x > $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$ - 
    2] ? (this.$alignLeft$(), this.$alignMiddle$(), this.$setCenter$(new $dvt$$12$$.$Point$($DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapEventManager$$.y))) : $DvtThematicMapKeyboardHandler$$.y > $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$ - 1] ? (this.$alignTop$(), this.$alignCenter$(), this.$setCenter$(new $dvt$$12$$.$Point$($DvtThematicMapEventManager$$.x, $DvtThematicMapKeyboardHandler$$.y))) : $DvtThematicMapKeyboardHandler$$.x + $DvtThematicMapKeyboardHandler$$.$w$ < $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$ - 
    2] ? (this.$alignRight$(), this.$alignMiddle$(), this.$setCenter$(new $dvt$$12$$.$Point$($DvtThematicMapKeyboardHandler$$.x + $DvtThematicMapKeyboardHandler$$.$w$, $DvtThematicMapEventManager$$.y))) : $DvtThematicMapKeyboardHandler$$.y + $DvtThematicMapKeyboardHandler$$.$h$ < $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$ - 1] && (this.$alignBottom$(), this.$alignCenter$(), this.$setCenter$(new $dvt$$12$$.$Point$($DvtThematicMapEventManager$$.x, $DvtThematicMapKeyboardHandler$$.y + $DvtThematicMapKeyboardHandler$$.$h$)))) : 
    (this.$alignCenter$(), this.$alignMiddle$(), $DvtThematicMapKeyboardHandler$$ = this.$getCSSStyle$(), $DvtThematicMapKeyboardHandler$$.$setStyle$($dvt$$12$$.$CSSStyle$.$COLOR$, this.$_labelColor$), this.$setCSSStyle$($DvtThematicMapKeyboardHandler$$)))), this.$_currentState$ = $DvtThematicMapJsonParser$$) : -1 == $DvtThematicMapJsonParser$$ && $DvtThematicMapKeyboardHandler$$ && this.$_parentContainer$.removeChild(this);
    -1 != this.$_currentState$ && ($DvtThematicMapJsonParser$$ = new $dvt$$12$$.$Matrix$, $DvtThematicMapJsonParser$$.translate($DvtThematicMapControlPanel$$ * this.$_center$.x - this.$_center$.x, $DvtThematicMapControlPanel$$ * this.$_center$.y - this.$_center$.y), this.$setMatrix$($DvtThematicMapJsonParser$$), this.$_leaderLine$ && (this.$_leaderLine$.$setMatrix$(new $dvt$$12$$.$Matrix$($DvtThematicMapControlPanel$$, 0, 0, $DvtThematicMapControlPanel$$)), this.$_bSupportsVectorEffects$ || ($DvtThematicMapJsonParser$$ = 
    this.$_leaderLine$.$getStroke$().clone(), $DvtThematicMapJsonParser$$.$setWidth$(1 / $DvtThematicMapControlPanel$$), this.$_leaderLine$.$setStroke$($DvtThematicMapJsonParser$$))));
  };
  $DvtMapLabel$$.prototype.$setCenter$ = function $$DvtMapLabel$$$$$setCenter$$($dvt$$12$$) {
    this.$_center$ = $dvt$$12$$;
    this.$setX$($dvt$$12$$.x);
    this.$setY$($dvt$$12$$.y);
  };
  $DvtMapLabel$$.prototype.$getCenter$ = function $$DvtMapLabel$$$$$getCenter$$() {
    return this.$_center$;
  };
  $DvtMapLabel$$.prototype.$setCSSStyle$ = function $$DvtMapLabel$$$$$setCSSStyle$$($DvtThematicMapControlPanel$$) {
    $DvtMapLabel$$.$superclass$.$setCSSStyle$.call(this, $DvtThematicMapControlPanel$$);
    this.$_labelColor$ || (this.$_labelColor$ = $DvtThematicMapControlPanel$$.$getStyle$($dvt$$12$$.$CSSStyle$.$COLOR$));
  };
  $DvtMapLabel$$.prototype.reset = function $$DvtMapLabel$$$$reset$() {
    this.$_parentContainer$.removeChild(this);
    this.$_currentState$ = -1;
    this.$_leaderLine$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = null);
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtMapObjPeer$$, $dvt$$12$$.$Obj$, "DvtMapObjPeer");
  $DvtMapObjPeer$$.$ANIMATION_DELETE_PRIORITY$ = 0;
  $DvtMapObjPeer$$.$ANIMATION_UPDATE_PRIORITY$ = 1;
  $DvtMapObjPeer$$.$ANIMATION_INSERT_PRIORITY$ = 2;
  $DvtMapObjPeer$$.prototype.Init = function $$DvtMapObjPeer$$$$Init$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    this.$_data$ = $DvtThematicMapControlPanel$$;
    this.$_dataLayer$ = $DvtThematicMapJsonParser$$;
    this.$Displayable$ = $DvtThematicMapEventManager$$;
    this.$_isShowingKeyboardFocusEffect$ = this.$_isShowingHoverEffect$ = this.$_isSelected$ = !1;
    this.$Displayable$.$setDataColor$ && this.$Displayable$.$setDataColor$($DvtThematicMapControlPanel$$.color);
    this.$_label$ = $DvtThematicMapKeyboardHandler$$;
    this.$_center$ = $DvtMapDataLayer$$;
    this.Zoom = 1;
    this.$_view$ = $DvtThematicMapJsonParser$$.$_tmap$;
    this.$_data$.categories || this.$_label$ && (this.$_data$.categories = [this.$_label$.$getTextString$()]);
    $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$.location;
    this.$_locationName$;
    $DvtThematicMapEventManager$$ && ($DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.$_parentLayer$, this.$_locationName$ = !($DvtThematicMapJsonParser$$ instanceof $DvtMapAreaLayer$$) || $DvtThematicMapJsonParser$$ instanceof $DvtMapCustomAreaLayer$$ ? $DvtBaseMapManager$$.$getCityLabel$(this.$_view$.$_mapName$, $DvtThematicMapEventManager$$) : $DvtBaseMapManager$$.$getLongAreaLabel$(this.$_view$.$_mapName$, $DvtThematicMapJsonParser$$.$LayerName$, $DvtThematicMapEventManager$$));
    "auto" == this.$_view$.$_displayTooltips$ && this.$_locationName$ && (this.$_data$.shortDesc = $DvtThematicMapControlPanel$$.shortDesc ? this.$_locationName$ + ": " + $DvtThematicMapControlPanel$$.shortDesc : this.$_locationName$);
    this.$Displayable$ && (this.$Displayable$.$setStyle$($DvtThematicMapControlPanel$$.style).$setClassName$($DvtThematicMapControlPanel$$.className), $DvtThematicMapControlPanel$$.destination ? (this.$Displayable$.$setAriaRole$("link"), this.$_linkCallback$ = $dvt$$12$$.$ToolkitUtils$.$getLinkCallback$("_blank", $DvtThematicMapControlPanel$$.destination)) : this.$Displayable$.$setAriaRole$("img"));
    this.$UpdateAriaLabel$();
    this.$setSelectable$(this.$isSelectable$());
  };
  $DvtMapObjPeer$$.prototype.getId = function $$DvtMapObjPeer$$$$getId$() {
    return this.$_data$.id;
  };
  $DvtMapObjPeer$$.prototype.$getClientId$ = function $$DvtMapObjPeer$$$$$getClientId$$() {
    return this.$_data$.clientId;
  };
  $DvtMapObjPeer$$.prototype.$getLocation$ = function $$DvtMapObjPeer$$$$$getLocation$$() {
    return this.$_data$.location;
  };
  $DvtMapObjPeer$$.prototype.$getCenter$ = function $$DvtMapObjPeer$$$$$getCenter$$() {
    return this.$_center$;
  };
  $DvtMapObjPeer$$.prototype.$_setCenter$ = function $$DvtMapObjPeer$$$$$_setCenter$$($dvt$$12$$) {
    this.$_center$ = $dvt$$12$$;
    this.$__recenter$();
  };
  $DvtMapObjPeer$$.prototype.$getDisplayable$ = function $$DvtMapObjPeer$$$$$getDisplayable$$() {
    return this.$Displayable$;
  };
  $DvtMapObjPeer$$.prototype.$getLabel$ = function $$DvtMapObjPeer$$$$$getLabel$$() {
    return this.$_label$;
  };
  $DvtMapObjPeer$$.prototype.$getDataLayer$ = function $$DvtMapObjPeer$$$$$getDataLayer$$() {
    return this.$_dataLayer$;
  };
  $DvtMapObjPeer$$.prototype.$hasAction$ = function $$DvtMapObjPeer$$$$$hasAction$$() {
    return null != this.$getAction$();
  };
  $DvtMapObjPeer$$.prototype.$getAction$ = function $$DvtMapObjPeer$$$$$getAction$$() {
    return this.$_data$.action;
  };
  $DvtMapObjPeer$$.prototype.$setVisible$ = function $$DvtMapObjPeer$$$$$setVisible$$($dvt$$12$$) {
    this.$Displayable$.$setVisible$($dvt$$12$$);
    this.$_label$ && this.$_label$.$setVisible$($dvt$$12$$);
  };
  $DvtMapObjPeer$$.prototype.$getShortDesc$ = function $$DvtMapObjPeer$$$$$getShortDesc$$() {
    return this.$_data$.shortDesc;
  };
  $DvtMapObjPeer$$.prototype.$removeLabel$ = function $$DvtMapObjPeer$$$$$removeLabel$$() {
    this.$_label$ = null;
  };
  $DvtMapObjPeer$$.prototype.$getSize$ = function $$DvtMapObjPeer$$$$$getSize$$() {
    return this.$Displayable$.getWidth ? this.$Displayable$.getWidth() * this.$Displayable$.getHeight() : 0;
  };
  $DvtMapObjPeer$$.prototype.$getCategories$ = function $$DvtMapObjPeer$$$$$getCategories$$() {
    var $dvt$$12$$ = this.$_data$.categories;
    return $dvt$$12$$ ? $dvt$$12$$ : [];
  };
  $DvtMapObjPeer$$.prototype.$getDatatip$ = function $$DvtMapObjPeer$$$$$getDatatip$$() {
    if ("none" != this.$_view$.$_displayTooltips$) {
      var $dvt$$12$$ = this.$_view$.$getOptions$()._tooltip;
      return $dvt$$12$$ ? this.$_view$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($dvt$$12$$, this.$getDataContext$()) : this.$getShortDesc$();
    }
    return null;
  };
  $DvtMapObjPeer$$.prototype.$getDataContext$ = function $$DvtMapObjPeer$$$$$getDataContext$$() {
    return {color:this.$getDatatipColor$(), component:this.$_view$.$getOptions$()._widgetConstructor, data:this.$_data$, id:this.getId(), label:this.$_label$ ? this.$_label$.$getTextString$() : null, location:this.$getLocation$(), locationName:this.$_locationName$, tooltip:this.$getShortDesc$(), x:this.$_data$.x, y:this.$_data$.y};
  };
  $DvtMapObjPeer$$.prototype.$getLinkCallback$ = function $$DvtMapObjPeer$$$$$getLinkCallback$$() {
    return this.$_linkCallback$;
  };
  $DvtMapObjPeer$$.prototype.$getDatatipColor$ = function $$DvtMapObjPeer$$$$$getDatatipColor$$() {
    return this.$_data$.color ? this.$_data$.color : "#000000";
  };
  $DvtMapObjPeer$$.prototype.$getAriaLabel$ = function $$DvtMapObjPeer$$$$$getAriaLabel$$() {
    var $DvtThematicMapControlPanel$$ = [];
    this.$isSelectable$() && $DvtThematicMapControlPanel$$.push($dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
    return $dvt$$12$$.$Displayable$.$generateAriaLabel$(this.$getShortDesc$(), $DvtThematicMapControlPanel$$);
  };
  $DvtMapObjPeer$$.prototype.$getDisplayables$ = function $$DvtMapObjPeer$$$$$getDisplayables$$() {
    return [this.$getDisplayable$()];
  };
  $DvtMapObjPeer$$.prototype.$UpdateAriaLabel$ = function $$DvtMapObjPeer$$$$$UpdateAriaLabel$$() {
    if (!$dvt$$12$$.$Agent$.$deferAriaCreation$()) {
      var $DvtThematicMapControlPanel$$ = this.$getAriaLabel$();
      $DvtThematicMapControlPanel$$ && this.$Displayable$.$setAriaProperty$("label", $DvtThematicMapControlPanel$$);
    }
  };
  $DvtMapObjPeer$$.prototype.$setSelectable$ = function $$DvtMapObjPeer$$$$$setSelectable$$($dvt$$12$$) {
    var $DvtThematicMapControlPanel$$ = this.$getLabel$();
    this.$Displayable$.$setSelectable$ && (this.$Displayable$.$setSelectable$($dvt$$12$$), $DvtThematicMapControlPanel$$ && $dvt$$12$$ && $DvtThematicMapControlPanel$$.setCursor("pointer"));
    this.$_data$.destination && (this.$Displayable$.setCursor("pointer"), $DvtThematicMapControlPanel$$ && $DvtThematicMapControlPanel$$.setCursor("pointer"));
  };
  $DvtMapObjPeer$$.prototype.$isSelectable$ = function $$DvtMapObjPeer$$$$$isSelectable$$() {
    return this.$Displayable$.$isSelectable$ ? "off" !== this.$_data$.selectable ? this.$_dataLayer$.$isSelectable$() : !1 : !1;
  };
  $DvtMapObjPeer$$.prototype.$isSelected$ = function $$DvtMapObjPeer$$$$$isSelected$$() {
    return this.$_isSelected$;
  };
  $DvtMapObjPeer$$.prototype.$setSelected$ = function $$DvtMapObjPeer$$$$$setSelected$$($dvt$$12$$) {
    if (this.$isSelectable$()) {
      var $DvtThematicMapControlPanel$$ = this.$_getState$();
      this.$_isSelected$ = $dvt$$12$$;
      this.$_dataLayer$.$getOptions$().selectionRenderer ? this.$_callCustomRenderer$(this.$_dataLayer$.$getOptions$().selectionRenderer, this.$_getState$(), $DvtThematicMapControlPanel$$) : this.$processDefaultSelectionEffect$($dvt$$12$$);
      this.$UpdateAriaLabel$();
    }
  };
  $DvtMapObjPeer$$.prototype.$showHoverEffect$ = function $$DvtMapObjPeer$$$$$showHoverEffect$$() {
    var $dvt$$12$$ = this.$_getState$();
    this.$_isShowingHoverEffect$ = !0;
    this.$_dataLayer$.$getOptions$().hoverRenderer ? this.$_callCustomRenderer$(this.$_dataLayer$.$getOptions$().hoverRenderer, this.$_getState$(), $dvt$$12$$) : this.$processDefaultHoverEffect$(!0);
  };
  $DvtMapObjPeer$$.prototype.$hideHoverEffect$ = function $$DvtMapObjPeer$$$$$hideHoverEffect$$() {
    var $dvt$$12$$ = this.$_getState$();
    this.$_isShowingHoverEffect$ = !1;
    this.$_dataLayer$.$getOptions$().hoverRenderer ? this.$_callCustomRenderer$(this.$_dataLayer$.$getOptions$().hoverRenderer, this.$_getState$(), $dvt$$12$$) : this.$processDefaultHoverEffect$(!1);
  };
  $DvtMapObjPeer$$.prototype.$setShowPopupBehaviors$ = function $$DvtMapObjPeer$$$$$setShowPopupBehaviors$$($dvt$$12$$) {
    this.$_showPopupBehaviors$ = $dvt$$12$$;
  };
  $DvtMapObjPeer$$.prototype.$getShowPopupBehaviors$ = function $$DvtMapObjPeer$$$$$getShowPopupBehaviors$$() {
    return this.$_showPopupBehaviors$;
  };
  $DvtMapObjPeer$$.prototype.$isDragAvailable$ = function $$DvtMapObjPeer$$$$$isDragAvailable$$($dvt$$12$$) {
    for (var $DvtThematicMapControlPanel$$ = this.$_dataLayer$.$getClientId$(), $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $dvt$$12$$.length && $dvt$$12$$[$DvtThematicMapJsonParser$$] != $DvtThematicMapControlPanel$$;$DvtThematicMapJsonParser$$++) {
    }
    return $DvtThematicMapControlPanel$$;
  };
  $DvtMapObjPeer$$.prototype.$getDragTransferable$ = function $$DvtMapObjPeer$$$$$getDragTransferable$$() {
    return this.$_dataLayer$.$__getDragTransferable$(this);
  };
  $DvtMapObjPeer$$.prototype.$getDragFeedback$ = function $$DvtMapObjPeer$$$$$getDragFeedback$$() {
    return this.$_dataLayer$.$__getDragFeedback$();
  };
  $DvtMapObjPeer$$.prototype.$getNextNavigable$ = function $$DvtMapObjPeer$$$$$getNextNavigable$$($DvtThematicMapControlPanel$$) {
    if ($DvtThematicMapControlPanel$$.type == $dvt$$12$$.MouseEvent.$CLICK$ || $DvtThematicMapControlPanel$$.keyCode == $dvt$$12$$.KeyboardEvent.$SPACE$ && $DvtThematicMapControlPanel$$.ctrlKey) {
      return this;
    }
    if (($DvtThematicMapControlPanel$$.keyCode == $dvt$$12$$.KeyboardEvent.$OPEN_ANGLED_BRACKET$ || $dvt$$12$$.KeyboardEvent.$CLOSE_ANGLED_BRACKET$) && $DvtThematicMapControlPanel$$.altKey) {
      var $DvtThematicMapJsonParser$$ = this.$getDataLayer$().$getNavigableLinksForNodeId$(this.getId());
      return $DvtThematicMapKeyboardHandler$$.$getFirstNavigableLink$(this, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
    }
    return $dvt$$12$$.$KeyboardHandler$.$getNextAdjacentNavigable$(this, $DvtThematicMapControlPanel$$, this.$GetNavigables$());
  };
  $DvtMapObjPeer$$.prototype.$GetNavigables$ = function $$DvtMapObjPeer$$$$$GetNavigables$$() {
    return this.$getDataLayer$().$_tmap$.$getNavigableMarkers$();
  };
  $DvtMapObjPeer$$.prototype.$getKeyboardBoundingBox$ = function $$DvtMapObjPeer$$$$$getKeyboardBoundingBox$$($DvtThematicMapControlPanel$$) {
    return this.$Displayable$.getParent() ? this.$Displayable$.$getDimensions$($DvtThematicMapControlPanel$$ ? $DvtThematicMapControlPanel$$ : this.$Displayable$.$getCtx$().$_stage$) : new $dvt$$12$$.$Rectangle$(0, 0, 0, 0);
  };
  $DvtMapObjPeer$$.prototype.$getTargetElem$ = function $$DvtMapObjPeer$$$$$getTargetElem$$() {
    return this.$Displayable$.$getElem$();
  };
  $DvtMapObjPeer$$.prototype.$showKeyboardFocusEffect$ = function $$DvtMapObjPeer$$$$$showKeyboardFocusEffect$$() {
    var $dvt$$12$$ = this.$_getState$();
    this.$_isShowingKeyboardFocusEffect$ = !0;
    this.$_dataLayer$.$getOptions$().focusRenderer ? this.$_callCustomRenderer$(this.$_dataLayer$.$getOptions$().focusRenderer, this.$_getState$(), $dvt$$12$$) : this.$processDefaultFocusEffect$(!0);
  };
  $DvtMapObjPeer$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtMapObjPeer$$$$$hideKeyboardFocusEffect$$() {
    if (this.$isShowingKeyboardFocusEffect$()) {
      var $dvt$$12$$ = this.$_getState$();
      this.$_isShowingKeyboardFocusEffect$ = !1;
      this.$_dataLayer$.$getOptions$().focusRenderer ? this.$_callCustomRenderer$(this.$_dataLayer$.$getOptions$().focusRenderer, this.$_getState$(), $dvt$$12$$) : this.$processDefaultFocusEffect$(!1);
    }
  };
  $DvtMapObjPeer$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtMapObjPeer$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtMapObjPeer$$.prototype.$HandleZoomEvent$ = function $$DvtMapObjPeer$$$$$HandleZoomEvent$$($dvt$$12$$) {
    this.$Displayable$.getParent() && (this.Zoom = $dvt$$12$$.$_a$, this.$__recenter$());
  };
  $DvtMapObjPeer$$.prototype.$positionLabel$ = function $$DvtMapObjPeer$$$$$positionLabel$$() {
    if (this.$_label$) {
      this.$_label$.$alignCenter$();
      var $DvtThematicMapControlPanel$$ = this.$Displayable$.$getCx$() * this.Zoom, $DvtThematicMapJsonParser$$ = this.$Displayable$.$getCy$() * this.Zoom, $DvtThematicMapEventManager$$ = this.$Displayable$.getHeight(), $DvtThematicMapKeyboardHandler$$ = this.$Displayable$ instanceof $dvt$$12$$.$SimpleMarker$ ? this.$Displayable$.$getType$() : "image", $DvtMapDataLayer$$ = this.$_data$.labelPosition;
      "top" == $DvtMapDataLayer$$ ? ($DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$ - $DvtThematicMapEventManager$$ / 2 - 4, this.$_label$.$alignBottom$()) : "bottom" == $DvtMapDataLayer$$ ? ($DvtThematicMapJsonParser$$ += $DvtThematicMapEventManager$$ / 2, this.$_label$.$alignTop$()) : ($DvtThematicMapJsonParser$$ = $DvtThematicMapKeyboardHandler$$ == $dvt$$12$$.$SimpleMarker$.$TRIANGLE_UP$ ? $DvtThematicMapJsonParser$$ + $DvtThematicMapEventManager$$ / 6 : $DvtThematicMapKeyboardHandler$$ == 
      $dvt$$12$$.$SimpleMarker$.$TRIANGLE_DOWN$ ? $DvtThematicMapJsonParser$$ - $DvtThematicMapEventManager$$ / 6 : $DvtThematicMapJsonParser$$, this.$_label$.$alignMiddle$());
      this.$_label$.$setX$($DvtThematicMapControlPanel$$).$setY$($DvtThematicMapJsonParser$$);
    }
  };
  $DvtMapObjPeer$$.prototype.$__recenter$ = function $$DvtMapObjPeer$$$$$__recenter$$() {
    var $DvtThematicMapControlPanel$$ = this.$Displayable$.getWidth(), $DvtThematicMapJsonParser$$ = this.$Displayable$.getHeight();
    if (null != $DvtThematicMapControlPanel$$ && null != $DvtThematicMapJsonParser$$ && this.$Displayable$.getParent()) {
      var $DvtThematicMapEventManager$$ = 0, $DvtThematicMapKeyboardHandler$$ = this.$_center$.x, $DvtThematicMapEventManager$$ = this.$_center$.y;
      this.$Displayable$.$getRotation$ && ($DvtThematicMapEventManager$$ = this.$Displayable$.$getRotation$(), $DvtThematicMapKeyboardHandler$$ = this.$_center$.x * Math.cos($DvtThematicMapEventManager$$) - this.$_center$.y * Math.sin($DvtThematicMapEventManager$$), $DvtThematicMapEventManager$$ = this.$_center$.x * Math.sin($DvtThematicMapEventManager$$) + this.$_center$.y * Math.cos($DvtThematicMapEventManager$$));
      $DvtThematicMapKeyboardHandler$$ = this.$_center$.x * this.Zoom - $DvtThematicMapKeyboardHandler$$;
      $DvtThematicMapEventManager$$ = this.$_center$.y * this.Zoom - $DvtThematicMapEventManager$$;
      this.$Displayable$ instanceof $DvtCustomDataItem$$ && ($DvtThematicMapKeyboardHandler$$ += this.$_center$.x - $DvtThematicMapControlPanel$$ / 2, $DvtThematicMapEventManager$$ += this.$_center$.y - $DvtThematicMapJsonParser$$ / 2);
      this.$Displayable$.$setTranslate$($DvtThematicMapKeyboardHandler$$, $DvtThematicMapEventManager$$);
      $dvt$$12$$.$Agent$.$workaroundFirefoxRepaint$(this.$Displayable$);
      this.$positionLabel$();
    }
  };
  $DvtMapObjPeer$$.prototype.$animateUpdate$ = function $$DvtMapObjPeer$$$$$animateUpdate$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = new $dvt$$12$$.$CustomAnimation$(this.$_view$.$getCtx$(), this.$Displayable$, this.$getDataLayer$().$getAnimationDuration$()), $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapJsonParser$$.$getDisplayable$();
    if (this.$Displayable$.$getFill$) {
      var $DvtMapDataLayer$$ = $DvtThematicMapKeyboardHandler$$.$getFill$(), $DvtMapCustomAreaLayer$$ = this.$Displayable$.$getFill$();
      $DvtMapCustomAreaLayer$$ instanceof $dvt$$12$$.$SolidFill$ && ($DvtMapCustomAreaLayer$$.$getColor$() != $DvtMapDataLayer$$.$getColor$() || $DvtMapCustomAreaLayer$$.$getAlpha$() != $DvtMapDataLayer$$.$getAlpha$()) && (this.$Displayable$.$setFill$($DvtMapDataLayer$$), $DvtThematicMapJsonParser$$.$getLabel$() && this.$_label$ && ($DvtMapDataLayer$$ = this.$_label$.$getFill$(), this.$_label$.$setFill$($DvtThematicMapJsonParser$$.$getLabel$().$getFill$().clone()), $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$12$$.$Animator$.$TYPE_FILL$, 
      this.$_label$, this.$_label$.$getFill$, this.$_label$.$setFill$, $DvtMapDataLayer$$)), $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$12$$.$Animator$.$TYPE_FILL$, this.$Displayable$, this.$Displayable$.$getFill$, this.$Displayable$.$setFill$, $DvtMapCustomAreaLayer$$));
    }
    this.$Displayable$.$getCenterDimensions$ && ($DvtMapCustomAreaLayer$$ = $DvtThematicMapJsonParser$$.$getDisplayable$().$getCenterDimensions$(), $DvtMapDataLayer$$ = this.$Displayable$.$getCenterDimensions$(), $DvtMapCustomAreaLayer$$.x != $DvtMapDataLayer$$.x || $DvtMapCustomAreaLayer$$.y != $DvtMapDataLayer$$.y || $DvtMapCustomAreaLayer$$.$w$ != $DvtMapDataLayer$$.$w$ || $DvtMapCustomAreaLayer$$.$h$ != $DvtMapDataLayer$$.$h$) && (this.$Displayable$.$setCenterDimensions$($DvtMapCustomAreaLayer$$), 
    $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$12$$.$Animator$.$TYPE_RECTANGLE$, this.$Displayable$, this.$Displayable$.$getCenterDimensions$, this.$Displayable$.$setCenterDimensions$, $DvtMapDataLayer$$));
    $DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$.$getRotation$();
    $DvtMapDataLayer$$ = this.$Displayable$.$getRotation$();
    if ($DvtMapCustomAreaLayer$$ != $DvtMapDataLayer$$) {
      var $DvtMapAreaLayer$$ = $DvtMapCustomAreaLayer$$ - $DvtMapDataLayer$$;
      $DvtMapAreaLayer$$ > Math.PI ? $DvtMapCustomAreaLayer$$ -= 2 * Math.PI : $DvtMapAreaLayer$$ < -Math.PI && ($DvtMapCustomAreaLayer$$ += 2 * Math.PI);
      this.$Displayable$.$setRotation$($DvtMapCustomAreaLayer$$);
      $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$12$$.$Animator$.$TYPE_NUMBER$, this.$Displayable$, this.$Displayable$.$getRotation$, this.$Displayable$.$setRotation$, $DvtMapDataLayer$$);
    }
    var $DvtMapAreaLayer$$ = $DvtThematicMapJsonParser$$.$getCenter$(), $DvtMapLayer$$ = this.$getCenter$();
    $DvtMapAreaLayer$$ && $DvtMapLayer$$ && ($DvtMapAreaLayer$$.x != $DvtMapLayer$$.x || $DvtMapAreaLayer$$.y != $DvtMapLayer$$.y || $DvtMapCustomAreaLayer$$ != $DvtMapDataLayer$$) && (this.$_setCenter$(new $dvt$$12$$.$Point$($DvtMapAreaLayer$$.x, $DvtMapAreaLayer$$.y)), $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$12$$.$Animator$.$TYPE_POINT$, this, this.$getCenter$, this.$_setCenter$, new $dvt$$12$$.$Point$($DvtMapLayer$$.x, $DvtMapLayer$$.y)));
    this.$_label$ && $DvtThematicMapJsonParser$$.$getLabel$() ? ($DvtMapCustomAreaLayer$$ = $DvtThematicMapJsonParser$$.$getLabel$().$getX$(), $DvtMapDataLayer$$ = this.$_label$.$getX$(), $DvtMapCustomAreaLayer$$ != $DvtMapDataLayer$$ && (this.$_label$.$setX$($DvtMapCustomAreaLayer$$), $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$12$$.$Animator$.$TYPE_NUMBER$, this.$_label$, this.$_label$.$getX$, this.$_label$.$setX$, $DvtMapDataLayer$$)), $DvtMapCustomAreaLayer$$ = $DvtThematicMapJsonParser$$.$getLabel$().$getY$(), 
    $DvtMapDataLayer$$ = this.$_label$.$getY$(), $DvtMapCustomAreaLayer$$ != $DvtMapDataLayer$$ && (this.$_label$.$setY$($DvtMapCustomAreaLayer$$), $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$12$$.$Animator$.$TYPE_NUMBER$, this.$_label$, this.$_label$.$getY$, this.$_label$.$setY$, $DvtMapDataLayer$$)), $DvtThematicMapJsonParser$$.$getLabel$().$setAlpha$(0)) : $DvtThematicMapJsonParser$$.$getLabel$() && $DvtThematicMapJsonParser$$.$getLabel$().$setAlpha$(0);
    $DvtThematicMapKeyboardHandler$$.$setAlpha$(0);
    $DvtThematicMapControlPanel$$.add($DvtThematicMapEventManager$$, $DvtMapObjPeer$$.$ANIMATION_UPDATE_PRIORITY$);
  };
  $DvtMapObjPeer$$.prototype.$animateDelete$ = function $$DvtMapObjPeer$$$$$animateDelete$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = [this.$Displayable$], $DvtThematicMapEventManager$$ = this.$getLabel$();
    $DvtThematicMapEventManager$$ && $DvtThematicMapJsonParser$$.push($DvtThematicMapEventManager$$);
    $DvtThematicMapJsonParser$$ = new $dvt$$12$$.$AnimFadeOut$(this.$_view$.$getCtx$(), $DvtThematicMapJsonParser$$, this.$getDataLayer$().$getAnimationDuration$());
    $DvtThematicMapControlPanel$$.add($DvtThematicMapJsonParser$$, $DvtMapObjPeer$$.$ANIMATION_DELETE_PRIORITY$);
  };
  $DvtMapObjPeer$$.prototype.$animateInsert$ = function $$DvtMapObjPeer$$$$$animateInsert$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = [this.$Displayable$];
    this.$Displayable$.$setAlpha$(0);
    var $DvtThematicMapEventManager$$ = this.$getLabel$();
    $DvtThematicMapEventManager$$ && ($DvtThematicMapEventManager$$.$setAlpha$(0), $DvtThematicMapJsonParser$$.push($DvtThematicMapEventManager$$));
    $DvtThematicMapJsonParser$$ = new $dvt$$12$$.$AnimFadeIn$(this.$_view$.$getCtx$(), $DvtThematicMapJsonParser$$, this.$getDataLayer$().$getAnimationDuration$());
    $DvtThematicMapControlPanel$$.add($DvtThematicMapJsonParser$$, $DvtMapObjPeer$$.$ANIMATION_INSERT_PRIORITY$);
  };
  $DvtMapObjPeer$$.prototype.$processDefaultSelectionEffect$ = function $$DvtMapObjPeer$$$$$processDefaultSelectionEffect$$($dvt$$12$$) {
    this.$Displayable$.$setSelected$ && this.$Displayable$.$setSelected$($dvt$$12$$);
  };
  $DvtMapObjPeer$$.prototype.$processDefaultFocusEffect$ = function $$DvtMapObjPeer$$$$$processDefaultFocusEffect$$($dvt$$12$$) {
    this.$processDefaultHoverEffect$($dvt$$12$$);
  };
  $DvtMapObjPeer$$.prototype.$processDefaultHoverEffect$ = function $$DvtMapObjPeer$$$$$processDefaultHoverEffect$$($dvt$$12$$) {
    $dvt$$12$$ ? this.$Displayable$.$showHoverEffect$ && this.$Displayable$.$showHoverEffect$() : this.$Displayable$.$hideHoverEffect$ && !this.$isShowingKeyboardFocusEffect$() && this.$Displayable$.$hideHoverEffect$();
  };
  $DvtMapObjPeer$$.prototype.$_callCustomRenderer$ = function $$DvtMapObjPeer$$$$$_callCustomRenderer$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    if (this.$Displayable$ instanceof $DvtCustomDataItem$$) {
      var $DvtThematicMapEventManager$$ = this.$_view$.$getOptions$()._contextHandler;
      $DvtThematicMapEventManager$$ && ($DvtThematicMapControlPanel$$ = $DvtThematicMapEventManager$$(this.$Displayable$.$getElem$(), this.$Displayable$.$_dataItem$, this.$_data$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$), $dvt$$12$$ = $dvt$$12$$($DvtThematicMapControlPanel$$), this.$Displayable$.$updateRootElement$($dvt$$12$$));
    }
  };
  $DvtMapObjPeer$$.prototype.$_getState$ = function $$DvtMapObjPeer$$$$$_getState$$() {
    return {hovered:this.$_isShowingHoverEffect$, selected:this.$isSelected$(), focused:this.$isShowingKeyboardFocusEffect$()};
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtMapAreaPeer$$, $DvtMapObjPeer$$, "DvtMapAreaPeer");
  $DvtMapAreaPeer$$.prototype.Init = function $$DvtMapAreaPeer$$$$Init$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtMapAreaPeer$$.$superclass$.Init.call(this, $dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
  };
  $DvtMapAreaPeer$$.prototype.$setAreaLayer$ = function $$DvtMapAreaPeer$$$$$setAreaLayer$$($dvt$$12$$) {
    this.$_dataAreaLayer$ = $dvt$$12$$;
  };
  $DvtMapAreaPeer$$.prototype.$setSelected$ = function $$DvtMapAreaPeer$$$$$setSelected$$($dvt$$12$$) {
    this.$isSelectable$() && ($dvt$$12$$ && !this.$_isShowingHoverEffect$ && this.$_dataAreaLayer$.$addChild$(this.$Displayable$), $DvtMapAreaPeer$$.$superclass$.$setSelected$.call(this, $dvt$$12$$));
  };
  $DvtMapAreaPeer$$.prototype.$showHoverEffect$ = function $$DvtMapAreaPeer$$$$$showHoverEffect$$() {
    this.$_dataAreaLayer$.$addChild$(this.$Displayable$);
    $DvtMapAreaPeer$$.$superclass$.$showHoverEffect$.call(this);
  };
  $DvtMapAreaPeer$$.prototype.$hideHoverEffect$ = function $$DvtMapAreaPeer$$$$$hideHoverEffect$$() {
    this.$isSelected$() ? this.$_dataAreaLayer$.$addChild$(this.$Displayable$) : this.$_dataAreaLayer$.$addChildAt$(this.$Displayable$, 0);
    $DvtMapAreaPeer$$.$superclass$.$hideHoverEffect$.call(this);
  };
  $DvtMapAreaPeer$$.prototype.$isDrilled$ = function $$DvtMapAreaPeer$$$$$isDrilled$$() {
    return this.$Displayable$.$isDrilled$();
  };
  $DvtMapAreaPeer$$.prototype.$setDrilled$ = function $$DvtMapAreaPeer$$$$$setDrilled$$($dvt$$12$$) {
    $dvt$$12$$ ? this.$_dataAreaLayer$.$addChild$(this.$Displayable$) : this.$_dataAreaLayer$.$addChildAt$(this.$Displayable$, 0);
    this.$Displayable$.$setDrilled$($dvt$$12$$);
  };
  $DvtMapAreaPeer$$.prototype.$HandleZoomEvent$ = function $$DvtMapAreaPeer$$$$$HandleZoomEvent$$($dvt$$12$$) {
    $DvtMapAreaPeer$$.$superclass$.$HandleZoomEvent$.call(this, $dvt$$12$$);
    this.$Displayable$.getParent() && (this.$Displayable$.$handleZoomEvent$($dvt$$12$$), this.$isDrilled$() || this.$positionLabel$($dvt$$12$$));
  };
  $DvtMapAreaPeer$$.prototype.$positionLabel$ = function $$DvtMapAreaPeer$$$$$positionLabel$$($dvt$$12$$) {
    this.$getLabel$() && this.$getLabel$().update($dvt$$12$$);
  };
  $DvtMapAreaPeer$$.prototype.$GetNavigables$ = function $$DvtMapAreaPeer$$$$$GetNavigables$$() {
    return this.$getDataLayer$().$_tmap$.$getNavigableAreas$();
  };
  $DvtMapAreaPeer$$.prototype.$animateUpdate$ = function $$DvtMapAreaPeer$$$$$animateUpdate$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtMapAreaPeer$$.$superclass$.$animateUpdate$.call(this, $dvt$$12$$, $DvtThematicMapControlPanel$$);
    this.$getDataLayer$().$_parentLayer$.$setAreaRendered$(this.$getLocation$(), !1);
  };
  $DvtMapAreaPeer$$.prototype.$__recenter$ = function $$DvtMapAreaPeer$$$$$__recenter$$() {
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtMapLinkPeer$$, $DvtMapObjPeer$$, "DvtMapLinkPeer");
  $DvtMapLinkPeer$$.prototype.Init = function $$DvtMapLinkPeer$$$$Init$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$) {
    $DvtMapLinkPeer$$.$superclass$.Init.call(this, $dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
    this.$_startPt$ = $DvtThematicMapEventManager$$;
    this.$_endPt$ = $DvtThematicMapKeyboardHandler$$;
    this.$_startMarker$ = $DvtMapDataLayer$$;
    this.$_endMarker$ = $DvtMapCustomAreaLayer$$;
  };
  $DvtMapLinkPeer$$.prototype.$getNextNavigable$ = function $$DvtMapLinkPeer$$$$$getNextNavigable$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_dataLayer$.$_tmap$.$EventManager$.$KeyboardHandler$;
    return $DvtThematicMapControlPanel$$.type == $dvt$$12$$.MouseEvent.$CLICK$ || $DvtThematicMapControlPanel$$.keyCode == $dvt$$12$$.KeyboardEvent.$SPACE$ && $DvtThematicMapControlPanel$$.ctrlKey ? this : $DvtThematicMapJsonParser$$.$_linkNavType$ === $DvtThematicMapKeyboardHandler$$.$LINK_NODE_NAV$ ? $DvtThematicMapControlPanel$$.keyCode === $dvt$$12$$.KeyboardEvent.$UP_ARROW$ ? ($DvtThematicMapControlPanel$$ = $DvtThematicMapJsonParser$$.$_linkMarker$.getId(), $DvtThematicMapControlPanel$$ = this.$getDataLayer$().$getNavigableLinksForNodeId$($DvtThematicMapControlPanel$$), 
    $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.indexOf(this), $DvtThematicMapJsonParser$$++, $DvtThematicMapJsonParser$$ === $DvtThematicMapControlPanel$$.length && ($DvtThematicMapJsonParser$$ = 0), $DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$]) : $DvtThematicMapControlPanel$$.keyCode === $dvt$$12$$.KeyboardEvent.$DOWN_ARROW$ ? ($DvtThematicMapControlPanel$$ = $DvtThematicMapJsonParser$$.$_linkMarker$.getId(), $DvtThematicMapControlPanel$$ = this.$getDataLayer$().$getNavigableLinksForNodeId$($DvtThematicMapControlPanel$$), 
    $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.indexOf(this), $DvtThematicMapJsonParser$$--, -1 === $DvtThematicMapJsonParser$$ && ($DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.length - 1), $DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$]) : $DvtThematicMapControlPanel$$.keyCode === $dvt$$12$$.KeyboardEvent.$LEFT_ARROW$ ? this.$_startPt$.x <= this.$_endPt$.x ? this.$_startMarker$ : this.$_endMarker$ : $DvtThematicMapControlPanel$$.keyCode === $dvt$$12$$.KeyboardEvent.$RIGHT_ARROW$ ? 
    this.$_startPt$.x >= this.$_endPt$.x ? this.$_startMarker$ : this.$_endMarker$ : this : $dvt$$12$$.$KeyboardHandler$.$getNextAdjacentNavigable$(this, $DvtThematicMapControlPanel$$, this.$GetNavigables$());
  };
  $DvtMapLinkPeer$$.prototype.$GetNavigables$ = function $$DvtMapLinkPeer$$$$$GetNavigables$$() {
    return this.$getDataLayer$().$_tmap$.$getNavigableLinks$();
  };
  $DvtMapLinkPeer$$.prototype.$__recenter$ = function $$DvtMapLinkPeer$$$$$__recenter$$() {
    if (this.$Displayable$.getParent()) {
      var $DvtThematicMapControlPanel$$ = new $dvt$$12$$.$Point$(this.$_startPt$.x * this.Zoom, this.$_startPt$.y * this.Zoom), $DvtThematicMapEventManager$$ = new $dvt$$12$$.$Point$(this.$_endPt$.x * this.Zoom, this.$_endPt$.y * this.Zoom), $DvtThematicMapControlPanel$$ = $DvtThematicMapJsonParser$$.$calcCurve$(this.$_dataLayer$, this.$_startPt$, this.$_endPt$, $DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$);
      this.$Displayable$.$setCmds$($DvtThematicMapControlPanel$$);
      $dvt$$12$$.$Agent$.$workaroundFirefoxRepaint$(this.$Displayable$);
    }
  };
  $DvtMapLinkPeer$$.prototype.$animateUpdate$ = function $$DvtMapLinkPeer$$$$$animateUpdate$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = new $dvt$$12$$.$CustomAnimation$(this.$_view$.$getCtx$(), this.$Displayable$, this.$getDataLayer$().$getAnimationDuration$()), $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapJsonParser$$.$getDisplayable$(), $DvtMapDataLayer$$ = $DvtThematicMapKeyboardHandler$$.$getStroke$(), $DvtMapCustomAreaLayer$$ = this.$Displayable$.$getStroke$();
    $DvtMapCustomAreaLayer$$.$getColor$() != $DvtMapDataLayer$$.$getColor$() && (this.$Displayable$.$setStroke$($DvtMapDataLayer$$), $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$12$$.$Animator$.$TYPE_STROKE$, this.$Displayable$, this.$Displayable$.$getStroke$, this.$Displayable$.$setStroke$, $DvtMapCustomAreaLayer$$));
    var $DvtMapDataLayer$$ = $DvtThematicMapJsonParser$$.$_endPt$, $DvtMapCustomAreaLayer$$ = this.$_endPt$, $DvtMapAreaLayer$$ = !0;
    $DvtThematicMapJsonParser$$.$_startPt$.$equals$(this.$_startPt$) && $DvtMapDataLayer$$.$equals$($DvtMapCustomAreaLayer$$) || ($DvtMapAreaLayer$$ = !1, this.$Displayable$.$setAlpha$(0), $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$12$$.$Animator$.$TYPE_NUMBER$, this.$Displayable$, this.$Displayable$.$getAlpha$, this.$Displayable$.$setAlpha$, 1), $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$12$$.$Animator$.$TYPE_NUMBER$, $DvtThematicMapKeyboardHandler$$, $DvtThematicMapKeyboardHandler$$.$getAlpha$, 
    $DvtThematicMapKeyboardHandler$$.$setAlpha$, 0));
    $DvtMapAreaLayer$$ && $DvtThematicMapKeyboardHandler$$.$setAlpha$(0);
    $DvtThematicMapControlPanel$$.add($DvtThematicMapEventManager$$, $DvtMapObjPeer$$.$ANIMATION_UPDATE_PRIORITY$);
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtMapArea$$, $dvt$$12$$.$Container$);
  $DvtMapArea$$.$_DEFAULT_STROKE_WIDTH$ = 1;
  $DvtMapArea$$.prototype.Init = function $$DvtMapArea$$$$Init$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    $DvtMapArea$$.$superclass$.Init.call(this, $dvt$$12$$);
    this.$_isSelected$ = this.$_bSelectable$ = !1;
    this.$_areaId$ = $DvtThematicMapEventManager$$;
    this.$_areaName$ = $DvtThematicMapKeyboardHandler$$;
    this.$_shape$ = $DvtThematicMapJsonParser$$;
    this.$addChild$(this.$_shape$);
    this.$_view$ = $DvtThematicMapControlPanel$$;
    this.$_bSupportsVectorEffects$ = $DvtMapDataLayer$$;
    if ($dvt$$12$$ = $DvtThematicMapJsonParser$$.$getStroke$()) {
      this.$_areaStrokeWidth$ = $dvt$$12$$.getWidth();
    }
  };
  $DvtMapArea$$.prototype.$getDatatip$ = function $$DvtMapArea$$$$$getDatatip$$() {
    var $dvt$$12$$ = this.$_view$.$getOptions$()._tooltip;
    return $dvt$$12$$ ? this.$_view$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($dvt$$12$$, this.$getDataContext$()) : this.$_tooltip$;
  };
  $DvtMapArea$$.prototype.$setDatatip$ = function $$DvtMapArea$$$$$setDatatip$$($dvt$$12$$) {
    this.$_tooltip$ = $dvt$$12$$;
  };
  $DvtMapArea$$.prototype.$getDataContext$ = function $$DvtMapArea$$$$$getDataContext$$() {
    return {color:null, component:this.$_view$.$getOptions$()._widgetConstructor, data:null, id:null, label:null, location:this.$_areaId$, locationName:this.$_areaName$, tooltip:this.$_tooltip$, x:null, y:null};
  };
  $DvtMapArea$$.prototype.$getStroke$ = function $$DvtMapArea$$$$$getStroke$$() {
    return this.$_shape$ instanceof $dvt$$12$$.$Shape$ ? this.$_shape$.$getStroke$() : null;
  };
  $DvtMapArea$$.prototype.$setStroke$ = function $$DvtMapArea$$$$$setStroke$$($DvtThematicMapControlPanel$$) {
    this.$_shape$ instanceof $dvt$$12$$.$Shape$ && this.$_shape$.$setStroke$($DvtThematicMapControlPanel$$);
  };
  $DvtMapArea$$.prototype.$setFill$ = function $$DvtMapArea$$$$$setFill$$($DvtThematicMapControlPanel$$) {
    this.$_shape$ instanceof $dvt$$12$$.$Shape$ && this.$_shape$.$setFill$($DvtThematicMapControlPanel$$);
  };
  $DvtMapArea$$.prototype.$getFill$ = function $$DvtMapArea$$$$$getFill$$() {
    return this.$_shape$ instanceof $dvt$$12$$.$Shape$ ? this.$_shape$.$getFill$() : null;
  };
  $DvtMapArea$$.prototype.$getCmds$ = function $$DvtMapArea$$$$$getCmds$$() {
    return this.$_shape$ instanceof $dvt$$12$$.$Path$ ? this.$_shape$.$getCmds$() : null;
  };
  $DvtMapArea$$.prototype.$setCmds$ = function $$DvtMapArea$$$$$setCmds$$($DvtThematicMapControlPanel$$) {
    this.$_shape$ instanceof $dvt$$12$$.$Path$ && this.$_shape$.$setCmds$($DvtThematicMapControlPanel$$);
  };
  $DvtMapArea$$.prototype.$setSrc$ = function $$DvtMapArea$$$$$setSrc$$($DvtThematicMapControlPanel$$) {
    this.$_shape$ instanceof $dvt$$12$$.Image && this.$_shape$.$setSrc$($DvtThematicMapControlPanel$$);
  };
  $DvtMapArea$$.prototype.contains = function $$DvtMapArea$$$$contains$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$getDimensions$();
    return $dvt$$12$$ >= $DvtThematicMapJsonParser$$.x && $dvt$$12$$ <= $DvtThematicMapJsonParser$$.x + $DvtThematicMapJsonParser$$.$w$ && $DvtThematicMapControlPanel$$ >= $DvtThematicMapJsonParser$$.y && $DvtThematicMapControlPanel$$ <= $DvtThematicMapJsonParser$$.y + $DvtThematicMapJsonParser$$.$h$;
  };
  $DvtMapArea$$.prototype.$HandleZoomEvent$ = function $$DvtMapArea$$$$$HandleZoomEvent$$($dvt$$12$$) {
    if (!this.$_bSupportsVectorEffects$ && this.$_shape$ && this.$_areaStrokeWidth$) {
      var $DvtThematicMapControlPanel$$ = this.$_shape$.$getStroke$().clone();
      $DvtThematicMapControlPanel$$.$setWidth$(this.$_areaStrokeWidth$ / $dvt$$12$$.$_a$);
      this.$_shape$.$setStroke$($DvtThematicMapControlPanel$$);
    }
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtMapLayer$$, $dvt$$12$$.$Obj$);
  $DvtMapLayer$$.prototype.Init = function $$DvtMapLayer$$$$Init$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    this.$_tmap$ = $DvtThematicMapControlPanel$$;
    this.$LayerName$ = $DvtThematicMapJsonParser$$;
    this.$EventHandler$ = $DvtThematicMapEventManager$$;
    this.$DataLayers$ = {};
    this.$PzcMatrix$ = new $dvt$$12$$.$Matrix$;
  };
  $DvtMapLayer$$.prototype.$addDataLayer$ = function $$DvtMapLayer$$$$$addDataLayer$$($dvt$$12$$) {
    this.$DataLayers$[$dvt$$12$$.$getClientId$()] = $dvt$$12$$;
  };
  $DvtMapLayer$$.prototype.$PreDataLayerUpdate$ = function $$DvtMapLayer$$$$$PreDataLayerUpdate$$() {
  };
  $DvtMapLayer$$.prototype.$PostDataLayerUpdate$ = function $$DvtMapLayer$$$$$PostDataLayerUpdate$$() {
  };
  $DvtMapLayer$$.prototype.$updateDataLayer$ = function $$DvtMapLayer$$$$$updateDataLayer$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.$_animation$ && this.$_animation$.stop(!0);
    this.$PzcMatrix$ = $DvtThematicMapJsonParser$$;
    this.$_oldDataLayer$ = this.$getDataLayer$($DvtThematicMapControlPanel$$.$getClientId$());
    this.$addDataLayer$($DvtThematicMapControlPanel$$);
    $DvtThematicMapControlPanel$$.$render$(this.$PzcMatrix$);
    $DvtThematicMapControlPanel$$.$HandleZoomEvent$(new $dvt$$12$$.$ZoomEvent$($dvt$$12$$.$ZoomEvent$.$SUBTYPE_ZOOMED$), this.$PzcMatrix$);
    if (this.$_oldDataLayer$) {
      var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$.$getAnimation$(), $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$.$getAnimationDuration$();
      if ("auto" == $DvtThematicMapEventManager$$) {
        var $DvtMapDataLayer$$ = new $dvt$$12$$.$DataAnimationHandler$(this.$_tmap$.$getCtx$());
        $DvtMapDataLayer$$.$constructAnimation$(this.$_oldDataLayer$.$getAllObjects$(), $DvtThematicMapControlPanel$$.$getAllObjects$());
        this.$_animation$ = $DvtMapDataLayer$$.$getAnimation$();
      } else {
        if ($dvt$$12$$.$BlackBoxAnimationHandler$.isSupported($DvtThematicMapEventManager$$)) {
          this.$_removeAnimRect$ = !0;
          for (var $DvtMapCustomAreaLayer$$ = new $dvt$$12$$.$Rectangle$(0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight()), $DvtMapAreaLayer$$ = this.$_oldDataLayer$.$getNonScaledContainers$(), $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtMapAreaLayer$$.length;$DvtMapDataLayer$$++) {
            var $DvtMapLayer$$ = new $dvt$$12$$.Rect(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight());
            $DvtMapLayer$$.$setFill$(null);
            $DvtMapAreaLayer$$[$DvtMapDataLayer$$].$addChild$($DvtMapLayer$$);
          }
          for (var $DvtCustomDataItem$$ = $DvtThematicMapControlPanel$$.$getNonScaledContainers$(), $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtCustomDataItem$$.length;$DvtMapDataLayer$$++) {
            $DvtMapLayer$$ = new $dvt$$12$$.Rect(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight()), $DvtMapLayer$$.$setFill$(null), $DvtCustomDataItem$$[$DvtMapDataLayer$$].$addChild$($DvtMapLayer$$);
          }
          $DvtMapCustomAreaLayer$$ = $dvt$$12$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$(this.$_tmap$.$getCtx$(), $DvtThematicMapEventManager$$, $DvtMapAreaLayer$$, $DvtCustomDataItem$$, $DvtMapCustomAreaLayer$$, $DvtThematicMapKeyboardHandler$$);
          $DvtMapAreaLayer$$ = new $dvt$$12$$.$Rectangle$(0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$);
          $DvtCustomDataItem$$ = this.$_oldDataLayer$.$getScaledContainers$();
          for ($DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtCustomDataItem$$.length;$DvtMapDataLayer$$++) {
            $DvtMapLayer$$ = new $dvt$$12$$.Rect(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$), $DvtMapLayer$$.$setFill$(null), $DvtCustomDataItem$$[$DvtMapDataLayer$$].$addChild$($DvtMapLayer$$);
          }
          for (var $DvtMapLinkPeer$$ = $DvtThematicMapControlPanel$$.$getScaledContainers$(), $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtMapLinkPeer$$.length;$DvtMapDataLayer$$++) {
            $DvtMapLayer$$ = new $dvt$$12$$.Rect(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$), $DvtMapLayer$$.$setFill$(null), $DvtMapLinkPeer$$[$DvtMapDataLayer$$].$addChild$($DvtMapLayer$$);
          }
          $DvtMapDataLayer$$ = $dvt$$12$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$(this.$_tmap$.$getCtx$(), $DvtThematicMapEventManager$$, $DvtCustomDataItem$$, $DvtMapLinkPeer$$, $DvtMapAreaLayer$$, $DvtThematicMapKeyboardHandler$$);
          this.$_animation$ = new $dvt$$12$$.$ParallelPlayable$(this.$_tmap$.$getCtx$(), [$DvtMapCustomAreaLayer$$, $DvtMapDataLayer$$]);
        } else {
          for ($DvtThematicMapEventManager$$ = this.$_oldDataLayer$.$getContainers$(), $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtThematicMapEventManager$$.length;$DvtMapDataLayer$$++) {
            $DvtThematicMapEventManager$$[$DvtMapDataLayer$$].getParent().removeChild($DvtThematicMapEventManager$$[$DvtMapDataLayer$$]);
          }
        }
      }
      this.$PreDataLayerUpdate$();
      if (this.$_animation$) {
        this.$EventHandler$.$removeListeners$(this.$_callbackObj$);
        var $DvtMapArea$$ = this;
        this.$_animation$.$setOnEnd$(function() {
          $DvtMapArea$$.$OnAnimationEnd$($DvtThematicMapControlPanel$$);
        }, this);
        this.$_animation$.play();
      }
    } else {
      this.$PostDataLayerUpdate$(), this.$_tmap$.$OnUpdateLayerEnd$();
    }
  };
  $DvtMapLayer$$.prototype.$getDataLayer$ = function $$DvtMapLayer$$$$$getDataLayer$$($dvt$$12$$) {
    return this.$DataLayers$ ? this.$DataLayers$[$dvt$$12$$] : null;
  };
  $DvtMapLayer$$.prototype.$render$ = function $$DvtMapLayer$$$$$render$$($dvt$$12$$) {
    this.$PzcMatrix$ = $dvt$$12$$;
    for (var $DvtThematicMapControlPanel$$ in this.$DataLayers$) {
      this.$DataLayers$[$DvtThematicMapControlPanel$$].$render$($dvt$$12$$);
    }
  };
  $DvtMapLayer$$.prototype.reset = function $$DvtMapLayer$$$$reset$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    for (var $DvtThematicMapJsonParser$$ in this.$DataLayers$) {
      this.$DataLayers$[$DvtThematicMapJsonParser$$].reset($dvt$$12$$, $DvtThematicMapControlPanel$$);
    }
  };
  $DvtMapLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapLayer$$$$$HandleZoomEvent$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    this.$PzcMatrix$ = $DvtThematicMapControlPanel$$;
    for (var $DvtThematicMapJsonParser$$ in this.$DataLayers$) {
      this.$DataLayers$[$DvtThematicMapJsonParser$$].$HandleZoomEvent$($dvt$$12$$, $DvtThematicMapControlPanel$$);
    }
  };
  $DvtMapLayer$$.prototype.$HandlePanEvent$ = function $$DvtMapLayer$$$$$HandlePanEvent$$($dvt$$12$$) {
    this.$PzcMatrix$ = $dvt$$12$$;
    for (var $DvtThematicMapControlPanel$$ in this.$DataLayers$) {
      this.$DataLayers$[$DvtThematicMapControlPanel$$].$HandlePanEvent$($dvt$$12$$);
    }
  };
  $DvtMapLayer$$.prototype.$OnAnimationEnd$ = function $$DvtMapLayer$$$$$OnAnimationEnd$$($dvt$$12$$) {
    if (this.$_oldDataLayer$) {
      for (var $DvtThematicMapControlPanel$$ = this.$_oldDataLayer$.$getContainers$(), $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapJsonParser$$++) {
        var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].getParent();
        $DvtThematicMapEventManager$$ && $DvtThematicMapEventManager$$.removeChild($DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$]);
      }
    }
    if (this.$_removeAnimRect$) {
      this.$_removeAnimRect$ = !1;
      $DvtThematicMapControlPanel$$ = $dvt$$12$$.$getNonScaledContainers$();
      for ($DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapJsonParser$$++) {
        $DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].$removeChildAt$($DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].$getNumChildren$() - 1);
      }
      $dvt$$12$$ = $dvt$$12$$.$getScaledContainers$();
      for ($DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $dvt$$12$$.length;$DvtThematicMapJsonParser$$++) {
        $dvt$$12$$[$DvtThematicMapJsonParser$$].$removeChildAt$($dvt$$12$$[$DvtThematicMapJsonParser$$].$getNumChildren$() - 1);
      }
    }
    this.$PostDataLayerUpdate$();
    this.$_tmap$.$OnUpdateLayerEnd$();
    this.$_animation$ = null;
    this.$EventHandler$.$addListeners$(this.$_callbackObj$);
  };
  $DvtMapLayer$$.prototype.$destroy$ = function $$DvtMapLayer$$$$$destroy$$() {
    var $dvt$$12$$ = this.$DataLayers$, $DvtThematicMapControlPanel$$;
    for ($DvtThematicMapControlPanel$$ in $dvt$$12$$) {
      $dvt$$12$$[$DvtThematicMapControlPanel$$].$destroy$();
    }
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtMapAreaLayer$$, $DvtMapLayer$$);
  $DvtMapAreaLayer$$.$_SHORT_NAME$ = 0;
  $DvtMapAreaLayer$$.$_LONG_NAME$ = 1;
  $DvtMapAreaLayer$$.prototype.Init = function $$DvtMapAreaLayer$$$$Init$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    $DvtMapAreaLayer$$.$superclass$.Init.call(this, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtMapDataLayer$$);
    this.$_labelDisplay$ = $DvtThematicMapEventManager$$;
    this.$_labelType$ = $DvtThematicMapKeyboardHandler$$;
    this.$_areaLabels$ = {};
    this.$Areas$ = {};
    this.$AreaShapes$ = {};
    this.$_labelInfo$ = this.$AreaLabels$ = null;
    this.$_disclosed$ = [];
    this.$_renderArea$ = {};
    this.$_renderLabel$ = {};
    this.$_renderedLabels$ = {};
    this.$AreaContainer$ = new $dvt$$12$$.$Container$(this.$_tmap$.$getCtx$());
    this.$LabelContainer$ = new $dvt$$12$$.$Container$(this.$_tmap$.$getCtx$());
    this.$_tmap$.$_areaLayers$.$addChildAt$(this.$AreaContainer$, 0);
    this.$_tmap$.$_labelLayers$.$addChildAt$(this.$LabelContainer$, 0);
  };
  $DvtMapAreaLayer$$.prototype.$setAnimation$ = function $$DvtMapAreaLayer$$$$$setAnimation$$($dvt$$12$$) {
    this.$_animType$ = $dvt$$12$$;
  };
  $DvtMapAreaLayer$$.prototype.$getAnimation$ = function $$DvtMapAreaLayer$$$$$getAnimation$$() {
    return this.$_animType$;
  };
  $DvtMapAreaLayer$$.prototype.$setAnimationDuration$ = function $$DvtMapAreaLayer$$$$$setAnimationDuration$$($dvt$$12$$) {
    this.$_animDur$ = $dvt$$12$$;
  };
  $DvtMapAreaLayer$$.prototype.$getAnimationDuration$ = function $$DvtMapAreaLayer$$$$$getAnimationDuration$$() {
    return this.$_animDur$;
  };
  $DvtMapAreaLayer$$.prototype.$setAreaShapes$ = function $$DvtMapAreaLayer$$$$$setAreaShapes$$($dvt$$12$$) {
    this.$AreaShapes$ = $dvt$$12$$;
    for (var $DvtThematicMapControlPanel$$ in $dvt$$12$$) {
      this.$setAreaRendered$($DvtThematicMapControlPanel$$, !0);
    }
  };
  $DvtMapAreaLayer$$.prototype.$setAreaLabels$ = function $$DvtMapAreaLayer$$$$$setAreaLabels$$($dvt$$12$$) {
    this.$AreaLabels$ = $dvt$$12$$;
    for (var $DvtThematicMapControlPanel$$ in $dvt$$12$$) {
      this.$setLabelRendered$($DvtThematicMapControlPanel$$, !0);
    }
  };
  $DvtMapAreaLayer$$.prototype.$getShortAreaName$ = function $$DvtMapAreaLayer$$$$$getShortAreaName$$($dvt$$12$$) {
    return this.$AreaLabels$ && this.$AreaLabels$[$dvt$$12$$] ? this.$AreaLabels$[$dvt$$12$$][$DvtMapAreaLayer$$.$_SHORT_NAME$] : null;
  };
  $DvtMapAreaLayer$$.prototype.$getLongAreaName$ = function $$DvtMapAreaLayer$$$$$getLongAreaName$$($dvt$$12$$) {
    return this.$AreaLabels$ && this.$AreaLabels$[$dvt$$12$$] ? this.$AreaLabels$[$dvt$$12$$][$DvtMapAreaLayer$$.$_LONG_NAME$] : null;
  };
  $DvtMapAreaLayer$$.prototype.$setAreaLabelInfo$ = function $$DvtMapAreaLayer$$$$$setAreaLabelInfo$$($dvt$$12$$) {
    this.$_labelInfo$ = $dvt$$12$$;
  };
  $DvtMapAreaLayer$$.prototype.$getLabelInfoForArea$ = function $$DvtMapAreaLayer$$$$$getLabelInfoForArea$$($dvt$$12$$) {
    return this.$_labelInfo$ ? this.$_labelInfo$[$dvt$$12$$] : null;
  };
  $DvtMapAreaLayer$$.prototype.$setAreaChildren$ = function $$DvtMapAreaLayer$$$$$setAreaChildren$$($dvt$$12$$) {
    this.$_children$ = $dvt$$12$$;
  };
  $DvtMapAreaLayer$$.prototype.$getChildrenForArea$ = function $$DvtMapAreaLayer$$$$$getChildrenForArea$$($dvt$$12$$) {
    return this.$_children$[$dvt$$12$$] ? this.$_children$[$dvt$$12$$].split(",") : [];
  };
  $DvtMapAreaLayer$$.prototype.$getAreaShape$ = function $$DvtMapAreaLayer$$$$$getAreaShape$$($dvt$$12$$) {
    return this.$AreaShapes$[$dvt$$12$$];
  };
  $DvtMapAreaLayer$$.prototype.$getLabelDisplay$ = function $$DvtMapAreaLayer$$$$$getLabelDisplay$$() {
    return this.$_labelDisplay$;
  };
  $DvtMapAreaLayer$$.prototype.$setLayerCSSStyle$ = function $$DvtMapAreaLayer$$$$$setLayerCSSStyle$$($dvt$$12$$) {
    this.$_layerCSSStyle$ = $dvt$$12$$;
  };
  $DvtMapAreaLayer$$.prototype.$getLayerCSSStyle$ = function $$DvtMapAreaLayer$$$$$getLayerCSSStyle$$() {
    return new $dvt$$12$$.$CSSStyle$(this.$_layerCSSStyle$);
  };
  $DvtMapAreaLayer$$.prototype.$setAreaRendered$ = function $$DvtMapAreaLayer$$$$$setAreaRendered$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    this.$_renderArea$[$dvt$$12$$] = $DvtThematicMapControlPanel$$;
  };
  $DvtMapAreaLayer$$.prototype.$setLabelRendered$ = function $$DvtMapAreaLayer$$$$$setLabelRendered$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    this.$_renderLabel$[$dvt$$12$$] = $DvtThematicMapControlPanel$$;
  };
  $DvtMapAreaLayer$$.prototype.$setIsolatedArea$ = function $$DvtMapAreaLayer$$$$$setIsolatedArea$$($dvt$$12$$) {
    this.$_isolatedArea$ = $dvt$$12$$;
    this.$_layerDim$ = null;
    for (var $DvtThematicMapControlPanel$$ in this.$AreaShapes$) {
      $DvtThematicMapControlPanel$$ != $dvt$$12$$ && (this.$_renderArea$[$DvtThematicMapControlPanel$$] = !1);
    }
  };
  $DvtMapAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapAreaLayer$$$$$getLayerDim$$() {
    if (!this.$_layerDim$) {
      if (this.$_isolatedArea$) {
        this.$_layerDim$ = $dvt$$12$$.$PathUtils$.$getDimensions$($dvt$$12$$.$PathUtils$.$createPathArray$($DvtBaseMapManager$$.$getPathForArea$(this.$_tmap$.$_mapName$, this.$LayerName$, this.$_isolatedArea$)));
      } else {
        if ("world" != this.$_tmap$.$_mapName$ && "worldRegions" != this.$_tmap$.$_mapName$ && (this.$_layerDim$ = $DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$)), !this.$_layerDim$) {
          var $DvtThematicMapControlPanel$$ = this.$AreaContainer$.$getDimensions$().$getUnion$(this.$_tmap$.$_dataAreaLayers$.$getDimensions$()).$getUnion$(this.$_tmap$.$_dataPointLayers$.$getDimensions$()).$getUnion$(this.$_tmap$.$_linkLayers$.$getDimensions$());
          0 < $DvtThematicMapControlPanel$$.$w$ && 0 < $DvtThematicMapControlPanel$$.$h$ && (this.$_layerDim$ = $DvtThematicMapControlPanel$$);
        }
      }
    }
    return this.$_layerDim$;
  };
  $DvtMapAreaLayer$$.prototype.$_createAreaAndLabel$ = function $$DvtMapAreaLayer$$$$$_createAreaAndLabel$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = this.$AreaShapes$[$DvtThematicMapControlPanel$$];
    if ($DvtThematicMapEventManager$$) {
      !$DvtThematicMapJsonParser$$ && this.$Areas$[$DvtThematicMapControlPanel$$] || this.$updateAreaShape$($DvtThematicMapControlPanel$$);
      if (!this.$Areas$[$DvtThematicMapControlPanel$$]) {
        var $DvtThematicMapKeyboardHandler$$ = this.$AreaLabels$ && this.$AreaLabels$[$DvtThematicMapControlPanel$$] ? this.$AreaLabels$[$DvtThematicMapControlPanel$$][$DvtMapAreaLayer$$.$_LONG_NAME$] : null, $DvtMapDataLayer$$ = new $DvtMapArea$$(this.$_tmap$.$getCtx$(), this.$_tmap$, $DvtThematicMapEventManager$$, $DvtThematicMapControlPanel$$, $DvtThematicMapKeyboardHandler$$, this.$_tmap$.$_bSupportsVectorEffects$);
        this.$Areas$[$DvtThematicMapControlPanel$$] = $DvtMapDataLayer$$;
        this.$EventHandler$.$associate$($DvtThematicMapEventManager$$, $DvtMapDataLayer$$);
        $DvtMapDataLayer$$.$setDatatip$($DvtThematicMapKeyboardHandler$$);
      }
      this.$_renderLabel$[$DvtThematicMapControlPanel$$] && ($DvtThematicMapKeyboardHandler$$ = this.$_areaLabels$[$DvtThematicMapControlPanel$$], !$DvtThematicMapKeyboardHandler$$ && "off" != this.$_labelDisplay$ && this.$AreaLabels$ && ($DvtThematicMapKeyboardHandler$$ = "short" == this.$_labelType$ ? this.$AreaLabels$[$DvtThematicMapControlPanel$$][$DvtMapAreaLayer$$.$_SHORT_NAME$] : this.$AreaLabels$[$DvtThematicMapControlPanel$$][$DvtMapAreaLayer$$.$_LONG_NAME$])) && (this.$_labelInfo$ && this.$_labelInfo$[$DvtThematicMapControlPanel$$] ? 
      $DvtThematicMapKeyboardHandler$$ = new $DvtMapLabel$$(this.$_tmap$.$getCtx$(), $DvtThematicMapKeyboardHandler$$, this.$_labelInfo$[$DvtThematicMapControlPanel$$], this.$_labelDisplay$, this.$LabelContainer$, this.$_tmap$.$_bSupportsVectorEffects$) : ($DvtThematicMapEventManager$$ = $dvt$$12$$.$DisplayableUtils$.$getDimensionsForced$(this.$_tmap$.$getCtx$(), $DvtThematicMapEventManager$$), $DvtThematicMapKeyboardHandler$$ = new $DvtMapLabel$$(this.$_tmap$.$getCtx$(), $DvtThematicMapKeyboardHandler$$, 
      [[$DvtThematicMapEventManager$$.x, $DvtThematicMapEventManager$$.y, $DvtThematicMapEventManager$$.$w$, $DvtThematicMapEventManager$$.$h$]], this.$_labelDisplay$, this.$LabelContainer$, this.$_tmap$.$_bSupportsVectorEffects$)), this.$_areaLabels$[$DvtThematicMapControlPanel$$] = $DvtThematicMapKeyboardHandler$$, this.$_layerCSSStyle$ && $DvtThematicMapKeyboardHandler$$.$setCSSStyle$(this.$_layerCSSStyle$));
    }
  };
  $DvtMapAreaLayer$$.prototype.$_addAreaAndLabel$ = function $$DvtMapAreaLayer$$$$$_addAreaAndLabel$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    if (this.$AreaShapes$[$dvt$$12$$]) {
      this.$AreaContainer$.$addChild$(this.$Areas$[$dvt$$12$$]);
      var $DvtThematicMapJsonParser$$ = this.$_areaLabels$[$dvt$$12$$];
      $DvtThematicMapJsonParser$$ && (this.$_renderLabel$[$dvt$$12$$] ? $DvtThematicMapJsonParser$$.update(this.$PzcMatrix$) : $DvtThematicMapJsonParser$$.reset(), this.$_renderedLabels$[$dvt$$12$$] = this.$_renderLabel$[$dvt$$12$$]);
      $DvtThematicMapControlPanel$$ && ($DvtThematicMapControlPanel$$.push(this.$Areas$[$dvt$$12$$]), $DvtThematicMapJsonParser$$ && ($DvtThematicMapControlPanel$$.push($DvtThematicMapJsonParser$$), $DvtThematicMapControlPanel$$.push($DvtThematicMapJsonParser$$.$_leaderLine$)));
    }
  };
  $DvtMapAreaLayer$$.prototype.$updateAreaShape$ = function $$DvtMapAreaLayer$$$$$updateAreaShape$$($dvt$$12$$) {
    if (!this.$_paths$ || this.$_bUpdateShapesForRender$) {
      this.$_bUpdateShapesForRender$ = !1;
      var $DvtThematicMapControlPanel$$;
      this.$_paths$ = ($DvtThematicMapControlPanel$$ = "world" == this.$_tmap$.$_mapName$ || "worldRegions" == this.$_tmap$.$_mapName$ ? $DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$) : this.$getLayerDim$()) ? $DvtBaseMapManager$$.$simplifyAreaPaths$($DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$), $DvtThematicMapControlPanel$$.$w$, $DvtThematicMapControlPanel$$.$h$, this.$_tmap$.getWidth(), this.$_tmap$.getHeight(), this.$_tmap$.$getMaxZoomFactor$()) : 
      $DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$);
    }
    $DvtThematicMapControlPanel$$ = this.$_paths$[$dvt$$12$$];
    this.$AreaShapes$[$dvt$$12$$] && $DvtThematicMapControlPanel$$ ? this.$AreaShapes$[$dvt$$12$$].$setCmds$($DvtThematicMapControlPanel$$) : delete this.$AreaShapes$[$dvt$$12$$];
  };
  $DvtMapAreaLayer$$.prototype.$resetRenderedAreas$ = function $$DvtMapAreaLayer$$$$$resetRenderedAreas$$() {
    for (var $dvt$$12$$ in this.$AreaLabels$) {
      this.$setAreaRendered$($dvt$$12$$, !0), this.$setLabelRendered$($dvt$$12$$, !0);
    }
  };
  $DvtMapAreaLayer$$.prototype.$updateDataLayer$ = function $$DvtMapAreaLayer$$$$$updateDataLayer$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    $DvtMapAreaLayer$$.$superclass$.$updateDataLayer$.call(this, $dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
    if ($DvtThematicMapJsonParser$$ == this.$LayerName$) {
      for (var $DvtThematicMapEventManager$$ in this.$AreaShapes$) {
        this.$_createAreaAndLabel$($DvtThematicMapEventManager$$, !0), this.$_renderArea$[$DvtThematicMapEventManager$$] && this.$_addAreaAndLabel$($DvtThematicMapEventManager$$);
      }
    }
  };
  $DvtMapAreaLayer$$.prototype.$render$ = function $$DvtMapAreaLayer$$$$$render$$($dvt$$12$$) {
    this.$_bUpdateShapesForRender$ = !0;
    for (var $DvtThematicMapControlPanel$$ in this.$AreaShapes$) {
      this.$_createAreaAndLabel$($DvtThematicMapControlPanel$$, !0), this.$_renderArea$[$DvtThematicMapControlPanel$$] && this.$_addAreaAndLabel$($DvtThematicMapControlPanel$$);
    }
    $DvtMapAreaLayer$$.$superclass$.$render$.call(this, $dvt$$12$$);
  };
  $DvtMapAreaLayer$$.prototype.$PreDataLayerUpdate$ = function $$DvtMapAreaLayer$$$$$PreDataLayerUpdate$$() {
    for (var $dvt$$12$$ in this.$_renderArea$) {
      this.$_renderArea$[$dvt$$12$$] || (this.$_createAreaAndLabel$($dvt$$12$$, !1), this.$_addAreaAndLabel$($dvt$$12$$));
    }
  };
  $DvtMapAreaLayer$$.prototype.$PostDataLayerUpdate$ = function $$DvtMapAreaLayer$$$$$PostDataLayerUpdate$$() {
    for (var $dvt$$12$$ in this.$_renderArea$) {
      if (!this.$_renderArea$[$dvt$$12$$]) {
        this.$AreaContainer$.removeChild(this.$Areas$[$dvt$$12$$]);
        var $DvtThematicMapControlPanel$$ = this.$_areaLabels$[$dvt$$12$$];
        $DvtThematicMapControlPanel$$ && (this.$_renderedLabels$[$dvt$$12$$] = !1, this.$LabelContainer$.removeChild($DvtThematicMapControlPanel$$), ($DvtThematicMapControlPanel$$ = $DvtThematicMapControlPanel$$.$_leaderLine$) && this.$LabelContainer$.removeChild($DvtThematicMapControlPanel$$));
      }
    }
  };
  $DvtMapAreaLayer$$.prototype.$_renderSelectedAreasAndLabels$ = function $$DvtMapAreaLayer$$$$$_renderSelectedAreasAndLabels$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    for (var $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $dvt$$12$$.length;$DvtThematicMapJsonParser$$++) {
      this.$_createAreaAndLabel$($dvt$$12$$[$DvtThematicMapJsonParser$$], !1), this.$_renderArea$[$dvt$$12$$[$DvtThematicMapJsonParser$$]] && this.$_addAreaAndLabel$($dvt$$12$$[$DvtThematicMapJsonParser$$], $DvtThematicMapControlPanel$$);
    }
  };
  $DvtMapAreaLayer$$.prototype.$discloseAreas$ = function $$DvtMapAreaLayer$$$$$discloseAreas$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    this.$_renderSelectedAreasAndLabels$($dvt$$12$$, $DvtThematicMapControlPanel$$);
    for (var $DvtThematicMapJsonParser$$ in this.$DataLayers$) {
      this.$DataLayers$[$DvtThematicMapJsonParser$$].$discloseAreas$($dvt$$12$$, $DvtThematicMapControlPanel$$, this.$PzcMatrix$);
    }
    this.$_disclosed$ = this.$_disclosed$.concat($dvt$$12$$);
  };
  $DvtMapAreaLayer$$.prototype.$undiscloseAreas$ = function $$DvtMapAreaLayer$$$$$undiscloseAreas$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    for (var $DvtThematicMapEventManager$$ in this.$DataLayers$) {
      this.$DataLayers$[$DvtThematicMapEventManager$$].$undiscloseAreas$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
    }
    $DvtThematicMapEventManager$$ = this.$_tmap$.$getDrillChildLayer$(this.$LayerName$);
    for (var $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapKeyboardHandler$$++) {
      var $DvtMapDataLayer$$ = $DvtThematicMapControlPanel$$[$DvtThematicMapKeyboardHandler$$];
      if (this.$Areas$[$DvtMapDataLayer$$]) {
        var $DvtMapCustomAreaLayer$$ = $dvt$$12$$.$ArrayUtils$.$getIndex$(this.$_disclosed$, $DvtMapDataLayer$$);
        -1 !== $DvtMapCustomAreaLayer$$ && (this.$_disclosed$.splice($DvtMapCustomAreaLayer$$, 1), $DvtThematicMapJsonParser$$.push(this.$Areas$[$DvtMapDataLayer$$]));
      }
      $DvtThematicMapEventManager$$ && $DvtThematicMapEventManager$$.$undiscloseAreas$(this.$getChildrenForArea$($DvtMapDataLayer$$), $DvtThematicMapJsonParser$$);
    }
  };
  $DvtMapAreaLayer$$.prototype.reset = function $$DvtMapAreaLayer$$$$reset$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtMapAreaLayer$$.$superclass$.reset.call(this, $dvt$$12$$, $DvtThematicMapControlPanel$$);
    "none" != this.$_tmap$.$_drillMode$ && (this.$undiscloseAreas$(this.$_disclosed$, $dvt$$12$$), this.$_disclosed$ = []);
  };
  $DvtMapAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapAreaLayer$$$$$HandleZoomEvent$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtMapAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $dvt$$12$$, $DvtThematicMapControlPanel$$);
    if (!this.$_tmap$.$_bSupportsVectorEffects$) {
      for (var $DvtThematicMapJsonParser$$ in this.$Areas$) {
        this.$Areas$[$DvtThematicMapJsonParser$$].$HandleZoomEvent$($DvtThematicMapControlPanel$$);
      }
    }
    for ($DvtThematicMapJsonParser$$ in this.$_renderedLabels$) {
      if (this.$_renderedLabels$[$DvtThematicMapJsonParser$$]) {
        var $DvtThematicMapEventManager$$ = this.$_areaLabels$[$DvtThematicMapJsonParser$$];
        $DvtThematicMapEventManager$$ && $DvtThematicMapEventManager$$.update($DvtThematicMapControlPanel$$);
      }
    }
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtMapCustomAreaLayer$$, $DvtMapAreaLayer$$);
  $DvtMapCustomAreaLayer$$.prototype.Init = function $$DvtMapCustomAreaLayer$$$$Init$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$) {
    $DvtMapCustomAreaLayer$$.$superclass$.Init.call(this, $dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
  };
  $DvtMapCustomAreaLayer$$.prototype.$updateAreaShape$ = function $$DvtMapCustomAreaLayer$$$$$updateAreaShape$$() {
  };
  $DvtMapCustomAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapCustomAreaLayer$$$$$getLayerDim$$() {
    return new $dvt$$12$$.$Rectangle$(0, 0, this.$_layerWidth$, this.$_layerHeight$);
  };
  $DvtMapCustomAreaLayer$$.prototype.$_selectImageBasedOnResolution$ = function $$DvtMapCustomAreaLayer$$$$$_selectImageBasedOnResolution$$() {
    for (var $dvt$$12$$ = this.$_tmap$.getWidth(), $DvtThematicMapControlPanel$$ = this.$_tmap$.getHeight(), $DvtThematicMapJsonParser$$ = this.$_areaLayerImages$, $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $DvtThematicMapJsonParser$$.length;$DvtThematicMapEventManager$$++) {
      var $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$], $DvtMapDataLayer$$ = $DvtThematicMapKeyboardHandler$$.source, $DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$.width, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapKeyboardHandler$$.height;
      if ($DvtMapDataLayer$$ && -1 < $DvtMapDataLayer$$.search(".svg") || $DvtMapCustomAreaLayer$$ >= $dvt$$12$$ && $DvtThematicMapKeyboardHandler$$ >= $DvtThematicMapControlPanel$$ || $DvtThematicMapEventManager$$ == $DvtThematicMapJsonParser$$.length - 1) {
        return $DvtMapDataLayer$$;
      }
    }
  };
  $DvtMapCustomAreaLayer$$.prototype.$setAreaLayerImage$ = function $$DvtMapCustomAreaLayer$$$$$setAreaLayerImage$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = null, $DvtThematicMapEventManager$$ = $dvt$$12$$.$Agent$.$isRightToLeft$(this.$_tmap$.$getCtx$());
    if ($DvtThematicMapControlPanel$$ && 0 < $DvtThematicMapControlPanel$$.length) {
      var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$[0].width, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$[0].height;
      this.$_layerWidth$ = $DvtThematicMapJsonParser$$;
      this.$_layerHeight$ = $DvtThematicMapKeyboardHandler$$;
      for (var $DvtMapDataLayer$$ = [], $DvtMapCustomAreaLayer$$ = 0;$DvtMapCustomAreaLayer$$ < $DvtThematicMapControlPanel$$.length;$DvtMapCustomAreaLayer$$++) {
        $DvtThematicMapEventManager$$ && "rtl" == $DvtThematicMapControlPanel$$[$DvtMapCustomAreaLayer$$].dir ? $DvtMapDataLayer$$.push($DvtThematicMapControlPanel$$[$DvtMapCustomAreaLayer$$]) : $DvtThematicMapEventManager$$ || "ltr" != $DvtThematicMapControlPanel$$[$DvtMapCustomAreaLayer$$].dir || $DvtMapDataLayer$$.push($DvtThematicMapControlPanel$$[$DvtMapCustomAreaLayer$$]);
      }
      this.$_areaLayerImages$ = 0 < $DvtMapDataLayer$$.length ? $DvtMapDataLayer$$ : $DvtThematicMapControlPanel$$;
      this.$_imageSrc$ = this.$_selectImageBasedOnResolution$();
      $DvtThematicMapJsonParser$$ = new $dvt$$12$$.Image(this.$_tmap$.$getCtx$(), this.$_imageSrc$, 0, 0, $DvtThematicMapJsonParser$$, $DvtThematicMapKeyboardHandler$$);
    }
    $DvtThematicMapJsonParser$$ && (this.$setAreaLabels$({image:[null, null]}), this.$setAreaShapes$({image:$DvtThematicMapJsonParser$$}));
  };
  $DvtMapCustomAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapCustomAreaLayer$$$$$HandleZoomEvent$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtMapCustomAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $dvt$$12$$, $DvtThematicMapControlPanel$$);
    if (this.$Areas$.image) {
      var $DvtThematicMapJsonParser$$ = this.$_selectImageBasedOnResolution$();
      $DvtThematicMapJsonParser$$ != this.$_imageSrc$ && (this.$_imageSrc$ = $DvtThematicMapJsonParser$$, this.$Areas$.image.$setSrc$(this.$_imageSrc$));
    }
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtMapDataLayer$$, $dvt$$12$$.$Obj$);
  $DvtMapDataLayer$$.prototype.Init = function $$DvtMapDataLayer$$$$Init$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    this.$_tmap$ = $DvtThematicMapControlPanel$$;
    this.$_clientId$ = $DvtThematicMapEventManager$$;
    this.$_options$ = $DvtMapDataLayer$$;
    this.$_areaObjs$ = [];
    this.$_markerObjs$ = [];
    this.$_linkObjs$ = [];
    this.$_dataAreaCollection$ = [];
    this.$_dataMarkerCollection$ = [];
    this.$_dataLinkCollection$ = [];
    this.$_eventHandler$ = $DvtThematicMapKeyboardHandler$$;
    this.$_linkMap$ = {};
    this.$_dragSource$ = new $dvt$$12$$.$DragSource$($DvtThematicMapControlPanel$$.$getCtx$());
    this.$_eventHandler$.$setDragSource$(this.$_dragSource$);
    this.$_dataAreaLayer$ = new $dvt$$12$$.$Container$(this.$_tmap$.$getCtx$());
    this.$_dataPointLayer$ = new $dvt$$12$$.$Container$(this.$_tmap$.$getCtx$());
    this.$_dataLabelLayer$ = new $dvt$$12$$.$Container$(this.$_tmap$.$getCtx$());
    this.$_dataLinkLayer$ = new $dvt$$12$$.$Container$(this.$_tmap$.$getCtx$());
    this.$_tmap$.$_dataAreaLayers$.$addChildAt$(this.$_dataAreaLayer$, 0);
    this.$_tmap$.$_dataPointLayers$.$addChildAt$(this.$_dataPointLayer$, 0);
    this.$_tmap$.$_labelLayers$.$addChildAt$(this.$_dataLabelLayer$, 0);
    this.$_tmap$.$_linkLayers$.$addChildAt$(this.$_dataLinkLayer$, 0);
    this.$_parentLayer$ = $DvtThematicMapJsonParser$$;
    this.$_disclosed$ = [];
    this.$_drilled$ = [];
  };
  $DvtMapDataLayer$$.prototype.$getOptions$ = function $$DvtMapDataLayer$$$$$getOptions$$() {
    return this.$_options$;
  };
  $DvtMapDataLayer$$.prototype.$getContainers$ = function $$DvtMapDataLayer$$$$$getContainers$$() {
    return [this.$_dataAreaLayer$, this.$_dataPointLayer$, this.$_dataLabelLayer$, this.$_dataLinkLayer$];
  };
  $DvtMapDataLayer$$.prototype.$getScaledContainers$ = function $$DvtMapDataLayer$$$$$getScaledContainers$$() {
    return [this.$_dataAreaLayer$];
  };
  $DvtMapDataLayer$$.prototype.$getNonScaledContainers$ = function $$DvtMapDataLayer$$$$$getNonScaledContainers$$() {
    var $dvt$$12$$ = [this.$_dataLabelLayer$, this.$_dataLinkLayer$];
    this.$_tmap$.$_isMarkerZoomBehaviorFixed$ && $dvt$$12$$.push(this.$_dataPointLayer$);
    return $dvt$$12$$;
  };
  $DvtMapDataLayer$$.prototype.$getAllObjects$ = function $$DvtMapDataLayer$$$$$getAllObjects$$() {
    return this.$_markerObjs$.concat(this.$_areaObjs$).concat(this.$_linkObjs$);
  };
  $DvtMapDataLayer$$.prototype.$getNavigableAreaObjects$ = function $$DvtMapDataLayer$$$$$getNavigableAreaObjects$$() {
    for (var $dvt$$12$$ = [], $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < this.$_areaObjs$.length;$DvtThematicMapControlPanel$$++) {
      this.$_areaObjs$[$DvtThematicMapControlPanel$$].$isDrilled$() || $dvt$$12$$.push(this.$_areaObjs$[$DvtThematicMapControlPanel$$]);
    }
    return $dvt$$12$$;
  };
  $DvtMapDataLayer$$.prototype.$getNavigableDisclosedAreaObjects$ = function $$DvtMapDataLayer$$$$$getNavigableDisclosedAreaObjects$$() {
    for (var $dvt$$12$$ = [], $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < this.$_areaObjs$.length;$DvtThematicMapControlPanel$$++) {
      for (var $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < this.$_disclosed$.length;$DvtThematicMapJsonParser$$++) {
        this.$_areaObjs$[$DvtThematicMapControlPanel$$].$getLocation$() == this.$_disclosed$[$DvtThematicMapJsonParser$$] && (this.$_areaObjs$[$DvtThematicMapControlPanel$$].$isDrilled$() || $dvt$$12$$.push(this.$_areaObjs$[$DvtThematicMapControlPanel$$]));
      }
    }
    return $dvt$$12$$;
  };
  $DvtMapDataLayer$$.prototype.$addMarkerObject$ = function $$DvtMapDataLayer$$$$$addMarkerObject$$($dvt$$12$$) {
    this.$_dataMarkerCollection$.push($dvt$$12$$);
    if ($dvt$$12$$) {
      this.$_markerObjs$.push($dvt$$12$$);
      this.$_eventHandler$.$associate$($dvt$$12$$.$getDisplayable$(), $dvt$$12$$);
      var $DvtThematicMapControlPanel$$ = $dvt$$12$$.$getLabel$();
      $DvtThematicMapControlPanel$$ && this.$_eventHandler$.$associate$($DvtThematicMapControlPanel$$, $dvt$$12$$);
    }
  };
  $DvtMapDataLayer$$.prototype.$addAreaObject$ = function $$DvtMapDataLayer$$$$$addAreaObject$$($dvt$$12$$) {
    this.$_dataAreaCollection$.push($dvt$$12$$);
    $dvt$$12$$ && (this.$_areaObjs$.push($dvt$$12$$), this.$_eventHandler$.$associate$($dvt$$12$$.$getDisplayable$(), $dvt$$12$$), $dvt$$12$$.$setAreaLayer$(this.$_dataAreaLayer$));
  };
  $DvtMapDataLayer$$.prototype.$addLinkObject$ = function $$DvtMapDataLayer$$$$$addLinkObject$$($dvt$$12$$) {
    this.$_dataLinkCollection$.push($dvt$$12$$);
    $dvt$$12$$ && (this.$_linkObjs$.push($dvt$$12$$), this.$_eventHandler$.$associate$($dvt$$12$$.$getDisplayable$(), $dvt$$12$$));
  };
  $DvtMapDataLayer$$.prototype.$trackLink$ = function $$DvtMapDataLayer$$$$$trackLink$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = $DvtMapDataLayer$$.$_getLinkKey$($dvt$$12$$, $DvtThematicMapControlPanel$$);
    this.$_linkMap$[$DvtThematicMapJsonParser$$] ? this.$_linkMap$[$DvtThematicMapJsonParser$$]++ : this.$_linkMap$[$DvtThematicMapJsonParser$$] = 1;
    return this.$_linkMap$[$DvtThematicMapJsonParser$$];
  };
  $DvtMapDataLayer$$.$_getLinkKey$ = function $$DvtMapDataLayer$$$$_getLinkKey$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    return $dvt$$12$$.x < $DvtThematicMapControlPanel$$.x ? $dvt$$12$$.x.toString() + $dvt$$12$$.y.toString() + $DvtThematicMapControlPanel$$.x.toString() + $DvtThematicMapControlPanel$$.y.toString() : $DvtThematicMapControlPanel$$.x.toString() + $DvtThematicMapControlPanel$$.y.toString() + $dvt$$12$$.x.toString() + $dvt$$12$$.y.toString();
  };
  $DvtMapDataLayer$$.prototype.$_removeAreaObject$ = function $$DvtMapDataLayer$$$$$_removeAreaObject$$($dvt$$12$$) {
    $dvt$$12$$ = this.$_areaObjs$.indexOf($dvt$$12$$);
    -1 !== $dvt$$12$$ && this.$_areaObjs$.splice($dvt$$12$$, 1);
  };
  $DvtMapDataLayer$$.prototype.$getClientId$ = function $$DvtMapDataLayer$$$$$getClientId$$() {
    return this.$_clientId$;
  };
  $DvtMapDataLayer$$.prototype.$setAnimation$ = function $$DvtMapDataLayer$$$$$setAnimation$$($dvt$$12$$) {
    this.$_animType$ = $dvt$$12$$;
  };
  $DvtMapDataLayer$$.prototype.$getAnimation$ = function $$DvtMapDataLayer$$$$$getAnimation$$() {
    return this.$_animType$;
  };
  $DvtMapDataLayer$$.prototype.$setAnimationDuration$ = function $$DvtMapDataLayer$$$$$setAnimationDuration$$($dvt$$12$$) {
    this.$_animDur$ = $dvt$$12$$;
  };
  $DvtMapDataLayer$$.prototype.$getAnimationDuration$ = function $$DvtMapDataLayer$$$$$getAnimationDuration$$() {
    return this.$_animDur$;
  };
  $DvtMapDataLayer$$.prototype.$setSelectionMode$ = function $$DvtMapDataLayer$$$$$setSelectionMode$$($DvtThematicMapControlPanel$$) {
    if (this.$_selectionMode$ = $DvtThematicMapControlPanel$$) {
      this.$_selectionHandler$ = new $dvt$$12$$.$SelectionHandler$(this.$_selectionMode$), this.$_eventHandler$.$setSelectionHandler$(this.$_clientId$, this.$_selectionHandler$);
    }
  };
  $DvtMapDataLayer$$.prototype.$isSelectable$ = function $$DvtMapDataLayer$$$$$isSelectable$$() {
    return null != this.$_selectionMode$;
  };
  $DvtMapDataLayer$$.prototype.$_updateAreaShape$ = function $$DvtMapDataLayer$$$$$_updateAreaShape$$($dvt$$12$$) {
    var $DvtThematicMapControlPanel$$ = $dvt$$12$$.$getDisplayable$(), $DvtThematicMapJsonParser$$ = this.$_parentLayer$.$getAreaShape$($dvt$$12$$.$getLocation$());
    if ($DvtThematicMapJsonParser$$) {
      return $DvtThematicMapControlPanel$$.$setCmds$($DvtThematicMapJsonParser$$.$getCmds$()), !0;
    }
    this.$_removeAreaObject$($dvt$$12$$);
    return !1;
  };
  $DvtMapDataLayer$$.prototype.$_renderAreaAndLabel$ = function $$DvtMapDataLayer$$$$$_renderAreaAndLabel$$($dvt$$12$$) {
    if (this.$_updateAreaShape$(this.$_areaObjs$[$dvt$$12$$])) {
      var $DvtThematicMapControlPanel$$ = this.$_areaObjs$[$dvt$$12$$].$getDisplayable$();
      this.$_dataAreaLayer$.$addChild$($DvtThematicMapControlPanel$$);
      if ($dvt$$12$$ = this.$_areaObjs$[$dvt$$12$$].$getLabel$()) {
        $dvt$$12$$.$hasBounds$() || ($DvtThematicMapControlPanel$$ = $DvtThematicMapControlPanel$$.$getDimensions$(), $dvt$$12$$.$addBounds$($DvtThematicMapControlPanel$$)), $dvt$$12$$.update(this.$_pzcMatrix$);
      }
      return !0;
    }
    return !1;
  };
  $DvtMapDataLayer$$.prototype.$render$ = function $$DvtMapDataLayer$$$$$render$$($DvtThematicMapControlPanel$$) {
    this.$_bFixPatterns$ = !0;
    this.$_pzcMatrix$ = $DvtThematicMapControlPanel$$;
    $DvtThematicMapControlPanel$$ = {};
    var $DvtThematicMapJsonParser$$ = this.$_markerObjs$.slice();
    $DvtThematicMapJsonParser$$.sort(function compare($dvt$$12$$, $DvtThematicMapControlPanel$$) {
      return $dvt$$12$$.$getSize$() < $DvtThematicMapControlPanel$$.$getSize$() ? 1 : $dvt$$12$$.$getSize$() > $DvtThematicMapControlPanel$$.$getSize$() ? -1 : 0;
    });
    for (var $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $DvtThematicMapJsonParser$$.length;$DvtThematicMapEventManager$$++) {
      var $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$], $DvtMapDataLayer$$ = $DvtThematicMapKeyboardHandler$$.$getDisplayable$(), $DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$.$getLabel$();
      if ($DvtMapCustomAreaLayer$$) {
        var $DvtMapAreaLayer$$ = new $dvt$$12$$.$Container$($DvtMapDataLayer$$.$getCtx$());
        this.$_dataPointLayer$.$addChild$($DvtMapAreaLayer$$);
        $DvtMapAreaLayer$$.$addChild$($DvtMapDataLayer$$);
        $DvtMapAreaLayer$$.$addChild$($DvtMapCustomAreaLayer$$);
        $DvtThematicMapKeyboardHandler$$.$positionLabel$();
      } else {
        this.$_dataPointLayer$.$addChild$($DvtMapDataLayer$$);
      }
      ($DvtThematicMapKeyboardHandler$$ = $DvtThematicMapKeyboardHandler$$.$getLocation$()) && ($DvtThematicMapControlPanel$$[$DvtThematicMapKeyboardHandler$$] = !0);
    }
    for ($DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < this.$_areaObjs$.length;$DvtThematicMapEventManager$$++) {
      $DvtThematicMapControlPanel$$[this.$_areaObjs$[$DvtThematicMapEventManager$$].$getLocation$()] && this.$_areaObjs$[$DvtThematicMapEventManager$$].$removeLabel$(), this.$_renderAreaAndLabel$($DvtThematicMapEventManager$$) || $DvtThematicMapEventManager$$--;
    }
    for ($DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < this.$_linkObjs$.length;$DvtThematicMapEventManager$$++) {
      this.$_dataLinkLayer$.$addChild$(this.$_linkObjs$[$DvtThematicMapEventManager$$].$getDisplayable$());
    }
    this.$_initSelections$ && this.$_processInitialSelections$();
  };
  $DvtMapDataLayer$$.prototype.$discloseAreas$ = function $$DvtMapDataLayer$$$$$discloseAreas$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.$_pzcMatrix$ = $DvtThematicMapJsonParser$$;
    for (var $DvtThematicMapEventManager$$ = [], $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $dvt$$12$$.length;$DvtThematicMapKeyboardHandler$$++) {
      for (var $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < this.$_areaObjs$.length;$DvtMapDataLayer$$++) {
        if (this.$_areaObjs$[$DvtMapDataLayer$$].$getLocation$() == $dvt$$12$$[$DvtThematicMapKeyboardHandler$$]) {
          $DvtThematicMapEventManager$$.push(this.$_areaObjs$[$DvtMapDataLayer$$].$getLocation$());
          this.$_renderAreaAndLabel$($DvtMapDataLayer$$);
          var $DvtMapCustomAreaLayer$$ = this.$_areaObjs$[$DvtMapDataLayer$$].$getDisplayable$();
          $DvtThematicMapControlPanel$$.push($DvtMapCustomAreaLayer$$);
          $DvtMapCustomAreaLayer$$.$handleZoomEvent$($DvtThematicMapJsonParser$$);
          if ($DvtMapDataLayer$$ = this.$_areaObjs$[$DvtMapDataLayer$$].$getLabel$()) {
            $DvtThematicMapControlPanel$$.push($DvtMapDataLayer$$), ($DvtMapDataLayer$$ = $DvtMapDataLayer$$.$_leaderLine$) && $DvtThematicMapControlPanel$$.push($DvtMapDataLayer$$);
          }
          break;
        }
      }
    }
    for ($DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < this.$_markerObjs$.length;$DvtMapDataLayer$$++) {
      for ($DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $dvt$$12$$.length;$DvtThematicMapKeyboardHandler$$++) {
        $DvtThematicMapJsonParser$$ = this.$_markerObjs$[$DvtMapDataLayer$$].$getLocation$(), $DvtMapCustomAreaLayer$$ = this.$_markerObjs$[$DvtMapDataLayer$$].$getDisplayable$(), null != $DvtThematicMapJsonParser$$ ? $DvtThematicMapJsonParser$$ == $dvt$$12$$[$DvtThematicMapKeyboardHandler$$] && (this.$_dataPointLayer$.$addChild$($DvtMapCustomAreaLayer$$), $DvtThematicMapControlPanel$$.push($DvtMapCustomAreaLayer$$)) : (this.$_dataPointLayer$.$addChild$($DvtMapCustomAreaLayer$$), $DvtThematicMapControlPanel$$.push($DvtMapCustomAreaLayer$$))
        ;
      }
    }
    this.$_disclosed$ = this.$_disclosed$.concat($DvtThematicMapEventManager$$);
  };
  $DvtMapDataLayer$$.prototype.$undiscloseAreas$ = function $$DvtMapDataLayer$$$$$undiscloseAreas$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    for (var $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapEventManager$$++) {
      for (var $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < this.$_areaObjs$.length;$DvtThematicMapKeyboardHandler$$++) {
        if (this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$getLocation$() == $DvtThematicMapControlPanel$$[$DvtThematicMapEventManager$$]) {
          this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$isDrilled$() && this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$setDrilled$(!1);
          this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$isSelected$() && this.$_selectionHandler$.$removeFromSelection$(this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$]);
          var $DvtMapDataLayer$$ = $dvt$$12$$.$ArrayUtils$.$getIndex$(this.$_disclosed$, $DvtThematicMapControlPanel$$[$DvtThematicMapEventManager$$]);
          -1 < $DvtMapDataLayer$$ && (this.$_disclosed$.splice($DvtMapDataLayer$$, 1), $DvtThematicMapJsonParser$$.push(this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$getDisplayable$()), $DvtThematicMapKeyboardHandler$$ = this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$getLabel$()) && ($DvtThematicMapJsonParser$$.push($DvtThematicMapKeyboardHandler$$), $DvtThematicMapJsonParser$$.push($DvtThematicMapKeyboardHandler$$.$_leaderLine$));
          break;
        }
      }
    }
  };
  $DvtMapDataLayer$$.prototype.$drill$ = function $$DvtMapDataLayer$$$$$drill$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    for (var $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < this.$_areaObjs$.length;$DvtThematicMapJsonParser$$++) {
      if (this.$_areaObjs$[$DvtThematicMapJsonParser$$].$getLocation$() == $dvt$$12$$) {
        this.$_areaObjs$[$DvtThematicMapJsonParser$$].$setDrilled$(!0);
        this.$_drilled$.push($dvt$$12$$);
        $DvtThematicMapControlPanel$$.push(this.$_areaObjs$[$DvtThematicMapJsonParser$$].$getDisplayable$());
        if ($DvtThematicMapJsonParser$$ = this.$_areaObjs$[$DvtThematicMapJsonParser$$].$getLabel$()) {
          $DvtThematicMapControlPanel$$.push($DvtThematicMapJsonParser$$), ($DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.$_leaderLine$) && $DvtThematicMapControlPanel$$.push($DvtThematicMapJsonParser$$);
        }
        break;
      }
    }
    for ($DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < this.$_markerObjs$.length;$DvtThematicMapJsonParser$$++) {
      if (this.$_markerObjs$[$DvtThematicMapJsonParser$$].$getLocation$() == $dvt$$12$$) {
        $DvtThematicMapControlPanel$$.push(this.$_markerObjs$[$DvtThematicMapJsonParser$$].$getDisplayable$());
        break;
      }
    }
  };
  $DvtMapDataLayer$$.prototype.$undrill$ = function $$DvtMapDataLayer$$$$$undrill$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    for (var $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < this.$_areaObjs$.length;$DvtThematicMapEventManager$$++) {
      if (this.$_areaObjs$[$DvtThematicMapEventManager$$].$getLocation$() == $DvtThematicMapControlPanel$$) {
        var $DvtThematicMapKeyboardHandler$$ = $dvt$$12$$.$ArrayUtils$.$getIndex$(this.$_drilled$, $DvtThematicMapControlPanel$$);
        this.$_drilled$.splice($DvtThematicMapKeyboardHandler$$, 1);
        this.$_areaObjs$[$DvtThematicMapEventManager$$].$setDrilled$(!1);
        $DvtThematicMapKeyboardHandler$$ = this.$_areaObjs$[$DvtThematicMapEventManager$$].$getDisplayable$();
        this.$_dataAreaLayer$.$addChild$($DvtThematicMapKeyboardHandler$$);
        $DvtThematicMapJsonParser$$.push($DvtThematicMapKeyboardHandler$$);
        if ($DvtThematicMapEventManager$$ = this.$_areaObjs$[$DvtThematicMapEventManager$$].$getLabel$()) {
          $DvtThematicMapEventManager$$.update(this.$_pzcMatrix$), $DvtThematicMapJsonParser$$.push($DvtThematicMapEventManager$$), $DvtThematicMapJsonParser$$.push($DvtThematicMapEventManager$$.$_leaderLine$);
        }
        break;
      }
    }
    for ($DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < this.$_markerObjs$.length;$DvtThematicMapEventManager$$++) {
      if (this.$_markerObjs$[$DvtThematicMapEventManager$$].$getLocation$() == $DvtThematicMapControlPanel$$) {
        $DvtThematicMapKeyboardHandler$$ = this.$_markerObjs$[$DvtThematicMapEventManager$$].$getDisplayable$();
        this.$_dataPointLayer$.$addChild$($DvtThematicMapKeyboardHandler$$);
        $DvtThematicMapJsonParser$$.push($DvtThematicMapKeyboardHandler$$);
        break;
      }
    }
  };
  $DvtMapDataLayer$$.prototype.reset = function $$DvtMapDataLayer$$$$reset$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    if (this.$_selectionHandler$) {
      for (var $DvtThematicMapEventManager$$ = this.$_selectionHandler$.getSelection(), $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $DvtThematicMapEventManager$$.length;$DvtThematicMapKeyboardHandler$$++) {
        (!$DvtThematicMapJsonParser$$ || $DvtThematicMapJsonParser$$ && -1 == $dvt$$12$$.$ArrayUtils$.$getIndex$($DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$[$DvtThematicMapKeyboardHandler$$].$getLocation$())) && this.$_selectionHandler$.$removeFromSelection$($DvtThematicMapEventManager$$[$DvtThematicMapKeyboardHandler$$]);
      }
    }
    if ("none" != this.$_tmap$.$_drillMode$) {
      for ($DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < this.$_drilled$.length;$DvtThematicMapEventManager$$++) {
        for ($DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < this.$_areaObjs$.length;$DvtThematicMapKeyboardHandler$$++) {
          if (this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$getLocation$() == this.$_drilled$[$DvtThematicMapEventManager$$]) {
            this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$setDrilled$(!1);
            var $DvtMapDataLayer$$ = this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$getDisplayable$();
            this.$_dataAreaLayer$.$addChild$($DvtMapDataLayer$$);
            $DvtThematicMapControlPanel$$.push($DvtMapDataLayer$$);
            if ($DvtThematicMapKeyboardHandler$$ = this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$getLabel$()) {
              $DvtThematicMapKeyboardHandler$$.update(this.$_pzcMatrix$), $DvtThematicMapControlPanel$$.push($DvtThematicMapKeyboardHandler$$), $DvtThematicMapControlPanel$$.push($DvtThematicMapKeyboardHandler$$.$_leaderLine$);
            }
            break;
          }
        }
        for ($DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < this.$_markerObjs$.length;$DvtThematicMapKeyboardHandler$$++) {
          if (this.$_markerObjs$[$DvtThematicMapKeyboardHandler$$].$getLocation$() == this.$_drilled$[$DvtThematicMapEventManager$$]) {
            $DvtMapDataLayer$$ = this.$_markerObjs$[$DvtThematicMapKeyboardHandler$$].$getDisplayable$();
            this.$_dataPointLayer$.$addChild$($DvtMapDataLayer$$);
            $DvtThematicMapControlPanel$$.push($DvtMapDataLayer$$);
            break;
          }
        }
      }
    }
    this.$_drilled$ = [];
  };
  $DvtMapDataLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapDataLayer$$$$$HandleZoomEvent$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.$_pzcMatrix$ = $DvtThematicMapJsonParser$$;
    var $DvtThematicMapEventManager$$ = $DvtThematicMapJsonParser$$.$_a$, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$.$getSubType$();
    if (this.$_bFixPatterns$ && $DvtThematicMapKeyboardHandler$$ == $dvt$$12$$.$ZoomEvent$.$SUBTYPE_ZOOMED$) {
      for (this.$_bFixPatterns$ = !1, $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < this.$_areaObjs$.length;$DvtThematicMapKeyboardHandler$$++) {
        var $DvtMapDataLayer$$ = this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$getDisplayable$(), $DvtMapCustomAreaLayer$$ = $DvtMapDataLayer$$.$_ptFill$;
        if ($DvtMapCustomAreaLayer$$) {
          var $DvtMapAreaLayer$$ = new $dvt$$12$$.$PatternFill$;
          $DvtMapCustomAreaLayer$$.$mergeProps$($DvtMapAreaLayer$$);
          $DvtMapAreaLayer$$.$setMatrix$(new $dvt$$12$$.$Matrix$(1 / $DvtThematicMapEventManager$$, null, null, 1 / $DvtThematicMapEventManager$$));
          $DvtMapDataLayer$$.$setFill$($DvtMapAreaLayer$$);
        }
      }
    }
    $DvtThematicMapKeyboardHandler$$ = this.$_areaObjs$;
    for ($DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $DvtThematicMapKeyboardHandler$$.length;$DvtThematicMapEventManager$$++) {
      $DvtThematicMapKeyboardHandler$$[$DvtThematicMapEventManager$$].$HandleZoomEvent$($DvtThematicMapJsonParser$$);
    }
    if (this.$_tmap$.$_isMarkerZoomBehaviorFixed$) {
      for ($DvtThematicMapKeyboardHandler$$ = this.$_markerObjs$, $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $DvtThematicMapKeyboardHandler$$.length;$DvtThematicMapEventManager$$++) {
        $DvtThematicMapKeyboardHandler$$[$DvtThematicMapEventManager$$].$HandleZoomEvent$($DvtThematicMapJsonParser$$);
      }
    }
    this.$_linkMap$ = {};
    $DvtThematicMapKeyboardHandler$$ = this.$_linkObjs$;
    for ($DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $DvtThematicMapKeyboardHandler$$.length;$DvtThematicMapEventManager$$++) {
      $DvtThematicMapKeyboardHandler$$[$DvtThematicMapEventManager$$].$HandleZoomEvent$($DvtThematicMapJsonParser$$);
    }
  };
  $DvtMapDataLayer$$.prototype.$HandlePanEvent$ = function $$DvtMapDataLayer$$$$$HandlePanEvent$$($dvt$$12$$) {
    this.$_pzcMatrix$ = $dvt$$12$$;
  };
  $DvtMapDataLayer$$.prototype.$setInitialSelections$ = function $$DvtMapDataLayer$$$$$setInitialSelections$$($dvt$$12$$) {
    this.$_initSelections$ = $dvt$$12$$;
  };
  $DvtMapDataLayer$$.prototype.$_processInitialSelections$ = function $$DvtMapDataLayer$$$$$_processInitialSelections$$() {
    this.$_selectionHandler$ && (this.$_selectionHandler$.$processInitialSelections$(this.$_initSelections$, this.$getAllObjects$()), this.$_initSelections$ = null);
  };
  $DvtMapDataLayer$$.prototype.$__getDragTransferable$ = function $$DvtMapDataLayer$$$$$__getDragTransferable$$($dvt$$12$$) {
    if (this.$_selectionHandler$) {
      $dvt$$12$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($dvt$$12$$, !1), this.$_eventHandler$.$fireSelectionEvent$($dvt$$12$$));
      $dvt$$12$$ = [];
      for (var $DvtThematicMapControlPanel$$ = this.$_selectionHandler$.getSelection(), $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapJsonParser$$++) {
        $dvt$$12$$.push($DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].getId());
      }
      return $dvt$$12$$;
    }
    return null;
  };
  $DvtMapDataLayer$$.prototype.$__getDragFeedback$ = function $$DvtMapDataLayer$$$$$__getDragFeedback$$() {
    for (var $dvt$$12$$ = [], $DvtThematicMapControlPanel$$ = this.$_selectionHandler$.getSelection(), $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapJsonParser$$++) {
      $dvt$$12$$.push($DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].$getDisplayable$());
    }
    return $dvt$$12$$;
  };
  $DvtMapDataLayer$$.prototype.$getSelectedAreas$ = function $$DvtMapDataLayer$$$$$getSelectedAreas$$($dvt$$12$$) {
    for (var $DvtThematicMapControlPanel$$ = [], $DvtThematicMapJsonParser$$ = this.$_areaObjs$, $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $dvt$$12$$.length;$DvtThematicMapEventManager$$++) {
      for (var $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $DvtThematicMapJsonParser$$.length;$DvtThematicMapKeyboardHandler$$++) {
        if ($DvtThematicMapJsonParser$$[$DvtThematicMapKeyboardHandler$$].getId() == $dvt$$12$$[$DvtThematicMapEventManager$$]) {
          $DvtThematicMapControlPanel$$.push($DvtThematicMapJsonParser$$[$DvtThematicMapKeyboardHandler$$].$getLocation$());
          break;
        }
      }
    }
    return $DvtThematicMapControlPanel$$;
  };
  $DvtMapDataLayer$$.prototype.$destroy$ = function $$DvtMapDataLayer$$$$$destroy$$() {
    for (var $dvt$$12$$ = this.$getAllObjects$(), $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < $dvt$$12$$.length;$DvtThematicMapControlPanel$$++) {
      var $DvtThematicMapJsonParser$$ = $dvt$$12$$[$DvtThematicMapControlPanel$$].$getDisplayable$();
      $DvtThematicMapJsonParser$$ instanceof $DvtCustomDataItem$$ && ($DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.$_dataItem$, $DvtThematicMapJsonParser$$.$destroy$ && $DvtThematicMapJsonParser$$.$destroy$());
    }
    this.$_eventHandler$ = null;
  };
  $DvtMapDataLayer$$.prototype.$getNavigableLinksForNodeId$ = function $$DvtMapDataLayer$$$$$getNavigableLinksForNodeId$$($dvt$$12$$) {
    for (var $DvtThematicMapControlPanel$$ = [], $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < this.$_dataLinkCollection$.length;$DvtThematicMapJsonParser$$++) {
      var $DvtThematicMapEventManager$$ = this.$_dataLinkCollection$[$DvtThematicMapJsonParser$$], $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapEventManager$$.$_startMarker$, $DvtMapDataLayer$$ = $DvtThematicMapEventManager$$.$_endMarker$;
      $DvtThematicMapKeyboardHandler$$ && $DvtThematicMapKeyboardHandler$$.getId() === $dvt$$12$$ ? $DvtThematicMapControlPanel$$.push($DvtThematicMapEventManager$$) : $DvtMapDataLayer$$ && $DvtMapDataLayer$$.getId() === $dvt$$12$$ && $DvtThematicMapControlPanel$$.push($DvtThematicMapEventManager$$);
    }
    return $DvtThematicMapControlPanel$$;
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtThematicMapKeyboardHandler$$, $dvt$$12$$.$PanZoomCanvasKeyboardHandler$);
  $DvtThematicMapKeyboardHandler$$.$LINK_NODE_NAV$ = "linkNode";
  $DvtThematicMapKeyboardHandler$$.$LINK_NAV$ = "link";
  $DvtThematicMapKeyboardHandler$$.prototype.Init = function $$DvtThematicMapKeyboardHandler$$$$Init$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    $DvtThematicMapKeyboardHandler$$.$superclass$.Init.call(this, $dvt$$12$$, $DvtThematicMapControlPanel$$);
    this.$_tmap$ = $dvt$$12$$;
    this.$_linkNavType$ = $DvtThematicMapKeyboardHandler$$.$LINK_NAV$;
  };
  $DvtThematicMapKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtThematicMapKeyboardHandler$$$$$isSelectionEvent$$($dvt$$12$$) {
    return this.$isNavigationEvent$($dvt$$12$$) && !$dvt$$12$$.ctrlKey;
  };
  $DvtThematicMapKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtThematicMapKeyboardHandler$$$$$processKeyDown$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.keyCode, $DvtThematicMapEventManager$$ = this.$_eventManager$.$getFocus$();
    if ($DvtThematicMapJsonParser$$ == $dvt$$12$$.KeyboardEvent.$CLOSE_BRACKET$) {
      this.$_linkNavType$ = $DvtThematicMapKeyboardHandler$$.$LINK_NAV$;
      $DvtThematicMapJsonParser$$ = [];
      $DvtThematicMapEventManager$$ instanceof $DvtMapAreaPeer$$ && ($DvtThematicMapJsonParser$$ = this.$_tmap$.$getNavigableMarkers$());
      if ("DvtMapObjPeer" === $DvtThematicMapEventManager$$.getTypeName() || 0 === $DvtThematicMapJsonParser$$.length) {
        $DvtThematicMapJsonParser$$ = this.$_tmap$.$getNavigableLinks$();
      }
      0 < $DvtThematicMapJsonParser$$.length && ($DvtThematicMapEventManager$$ = $dvt$$12$$.$KeyboardHandler$.$getNextAdjacentNavigable$($DvtThematicMapEventManager$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
      this.$_eventManager$.$SetClickInfo$($DvtThematicMapEventManager$$);
    } else {
      if ($DvtThematicMapJsonParser$$ == $dvt$$12$$.KeyboardEvent.$OPEN_BRACKET$) {
        this.$_linkNavType$ = $DvtThematicMapKeyboardHandler$$.$LINK_NAV$;
        $DvtThematicMapJsonParser$$ = [];
        $DvtThematicMapEventManager$$ instanceof $DvtMapLinkPeer$$ && ($DvtThematicMapJsonParser$$ = this.$_tmap$.$getNavigableMarkers$());
        if ("DvtMapObjPeer" === $DvtThematicMapEventManager$$.getTypeName() || 0 === $DvtThematicMapJsonParser$$.length) {
          $DvtThematicMapJsonParser$$ = this.$_tmap$.$getNavigableAreas$();
        }
        0 < $DvtThematicMapJsonParser$$.length && ($DvtThematicMapEventManager$$ = $dvt$$12$$.$KeyboardHandler$.$getNextAdjacentNavigable$($DvtThematicMapEventManager$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        this.$_eventManager$.$SetClickInfo$($DvtThematicMapEventManager$$);
      } else {
        ($DvtThematicMapControlPanel$$.keyCode == $dvt$$12$$.KeyboardEvent.$OPEN_ANGLED_BRACKET$ || $dvt$$12$$.KeyboardEvent.$CLOSE_ANGLED_BRACKET$) && $DvtThematicMapControlPanel$$.altKey && (this.$_linkMarker$ = $DvtThematicMapEventManager$$, this.$_linkNavType$ = $DvtThematicMapKeyboardHandler$$.$LINK_NODE_NAV$), $DvtThematicMapEventManager$$ = $DvtThematicMapKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtThematicMapControlPanel$$), this.$isNavigationEvent$($DvtThematicMapControlPanel$$) && 
        !$DvtThematicMapControlPanel$$.ctrlKey && this.$_eventManager$.$SetClickInfo$($DvtThematicMapEventManager$$);
      }
    }
    return $DvtThematicMapEventManager$$;
  };
  $DvtThematicMapKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtThematicMapKeyboardHandler$$$$$isMultiSelectEvent$$($DvtThematicMapControlPanel$$) {
    return $DvtThematicMapControlPanel$$.keyCode == $dvt$$12$$.KeyboardEvent.$SPACE$ && $DvtThematicMapControlPanel$$.ctrlKey;
  };
  $DvtThematicMapKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtThematicMapKeyboardHandler$$$$$isNavigationEvent$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = $DvtThematicMapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $DvtThematicMapControlPanel$$);
    switch($DvtThematicMapControlPanel$$.keyCode) {
      case $dvt$$12$$.KeyboardEvent.$OPEN_BRACKET$:
      ;
      case $dvt$$12$$.KeyboardEvent.$CLOSE_BRACKET$:
        $DvtThematicMapJsonParser$$ = !0;
        break;
      case $dvt$$12$$.KeyboardEvent.$OPEN_ANGLED_BRACKET$:
      ;
      case $dvt$$12$$.KeyboardEvent.$CLOSE_ANGLED_BRACKET$:
        $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.altKey ? !0 : !1;
        break;
      default:
        $DvtThematicMapJsonParser$$ = $DvtThematicMapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $DvtThematicMapControlPanel$$);
    }
    return $DvtThematicMapJsonParser$$;
  };
  $DvtThematicMapKeyboardHandler$$.$getFirstNavigableLink$ = function $$DvtThematicMapKeyboardHandler$$$$getFirstNavigableLink$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.keyCode;
    if (!$DvtThematicMapEventManager$$ || 1 > $DvtThematicMapEventManager$$.length || !$DvtThematicMapControlPanel$$) {
      return null;
    }
    for (var $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$.$getCenter$(), $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtThematicMapEventManager$$.length;$DvtMapDataLayer$$++) {
      var $DvtMapCustomAreaLayer$$ = $DvtThematicMapEventManager$$[$DvtMapDataLayer$$], $DvtMapAreaLayer$$;
      $DvtMapAreaLayer$$ = $DvtThematicMapControlPanel$$.getId() === $DvtMapCustomAreaLayer$$.$_startMarker$.getId() ? $DvtMapCustomAreaLayer$$.$_endPt$ : $DvtMapCustomAreaLayer$$.$_startPt$;
      if ($DvtThematicMapJsonParser$$ == $dvt$$12$$.KeyboardEvent.$OPEN_ANGLED_BRACKET$ && $DvtMapAreaLayer$$.x <= $DvtThematicMapKeyboardHandler$$.x || $DvtThematicMapJsonParser$$ == $dvt$$12$$.KeyboardEvent.$CLOSE_ANGLED_BRACKET$ && $DvtMapAreaLayer$$.x >= $DvtThematicMapKeyboardHandler$$.x) {
        break;
      }
    }
    return $DvtMapCustomAreaLayer$$;
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtThematicMapEventManager$$, $dvt$$12$$.$EventManager$);
  $DvtThematicMapEventManager$$.prototype.Init = function $$DvtThematicMapEventManager$$$$Init$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    $DvtThematicMapEventManager$$.$superclass$.Init.call(this, $dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
    this.$_selectionHandlers$ = {};
    this.$_tmap$ = $DvtThematicMapJsonParser$$;
    this.$_bPassOnEvent$ = !1;
  };
  $DvtThematicMapEventManager$$.prototype.$getSelectionHandler$ = function $$DvtThematicMapEventManager$$$$$getSelectionHandler$$($dvt$$12$$) {
    if ($dvt$$12$$ && $dvt$$12$$.$getDataLayer$) {
      return this.$_selectionHandlers$[$dvt$$12$$.$getDataLayer$().$getClientId$()];
    }
  };
  $DvtThematicMapEventManager$$.prototype.$setSelectionHandler$ = function $$DvtThematicMapEventManager$$$$$setSelectionHandler$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    this.$_selectionHandlers$[$dvt$$12$$] = $DvtThematicMapControlPanel$$;
  };
  $DvtThematicMapEventManager$$.prototype.$setDrillMode$ = function $$DvtThematicMapEventManager$$$$$setDrillMode$$($dvt$$12$$) {
    this.$_drillMode$ = $dvt$$12$$;
  };
  $DvtThematicMapEventManager$$.prototype.$removeFromSelection$ = function $$DvtThematicMapEventManager$$$$$removeFromSelection$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_selectionHandlers$[$dvt$$12$$];
    $DvtThematicMapJsonParser$$ && $DvtThematicMapJsonParser$$.$removeFromSelection$($DvtThematicMapControlPanel$$);
  };
  $DvtThematicMapEventManager$$.prototype.$clearSelection$ = function $$DvtThematicMapEventManager$$$$$clearSelection$$($dvt$$12$$) {
    ($dvt$$12$$ = this.$_selectionHandlers$[$dvt$$12$$]) && $dvt$$12$$.$clearSelection$();
  };
  $DvtThematicMapEventManager$$.prototype.$setInitialFocus$ = function $$DvtThematicMapEventManager$$$$$setInitialFocus$$($dvt$$12$$) {
    $dvt$$12$$ && $DvtThematicMapEventManager$$.$superclass$.$setFocus$.call(this, $dvt$$12$$);
  };
  $DvtThematicMapEventManager$$.prototype.$OnMouseOver$ = function $$DvtThematicMapEventManager$$$$$OnMouseOver$$($dvt$$12$$) {
    var $DvtThematicMapControlPanel$$ = this.$GetLogicalObject$($dvt$$12$$.target);
    $DvtThematicMapControlPanel$$ && $DvtThematicMapControlPanel$$.$getShowPopupBehaviors$ && $DvtThematicMapControlPanel$$.$getDataLayer$ && this.$_tmap$.$setEventClientId$($DvtThematicMapControlPanel$$.$getDataLayer$().$getClientId$());
    $DvtThematicMapEventManager$$.$superclass$.$OnMouseOver$.call(this, $dvt$$12$$);
  };
  $DvtThematicMapEventManager$$.prototype.$OnMouseOut$ = function $$DvtThematicMapEventManager$$$$$OnMouseOut$$($dvt$$12$$) {
    this.$_tmap$.$setEventClientId$(null);
    $DvtThematicMapEventManager$$.$superclass$.$OnMouseOut$.call(this, $dvt$$12$$);
  };
  $DvtThematicMapEventManager$$.prototype.$OnClick$ = function $$DvtThematicMapEventManager$$$$$OnClick$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$GetLogicalObject$($DvtThematicMapControlPanel$$.target);
    this.$SetClickInfo$($DvtThematicMapJsonParser$$);
    if (!($DvtThematicMapJsonParser$$ && $DvtThematicMapJsonParser$$.$isSelectable$ && $DvtThematicMapJsonParser$$.$isSelectable$())) {
      for (var $DvtThematicMapKeyboardHandler$$ in this.$_selectionHandlers$) {
        if (this.$_selectionHandlers$[$DvtThematicMapKeyboardHandler$$].$processClick$(null, $DvtThematicMapControlPanel$$.ctrlKey)) {
          var $DvtMapDataLayer$$ = $dvt$$12$$.$EventFactory$.$newSelectionEvent$([]);
          $DvtMapDataLayer$$.clientId = $DvtThematicMapKeyboardHandler$$;
          this.$_callback$.call(this.$_callbackObj$, $DvtMapDataLayer$$);
        }
      }
    }
    $DvtThematicMapEventManager$$.$superclass$.$OnClick$.call(this, $DvtThematicMapControlPanel$$);
    this.$_handleClick$($DvtThematicMapJsonParser$$, $DvtThematicMapControlPanel$$.pageX, $DvtThematicMapControlPanel$$.pageY);
  };
  $DvtThematicMapEventManager$$.prototype.$_handleClick$ = function $$DvtThematicMapEventManager$$$$$_handleClick$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    if ($dvt$$12$$ instanceof $DvtMapObjPeer$$) {
      var $DvtThematicMapEventManager$$ = $dvt$$12$$.$getLinkCallback$();
      $DvtThematicMapEventManager$$ ? $DvtThematicMapEventManager$$.call() : $dvt$$12$$.$hasAction$() ? this.$HandleAction$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) : $dvt$$12$$.$getShowPopupBehaviors$() && this.$_tmap$.$setEventClientId$($dvt$$12$$.$getDataLayer$().$getClientId$());
    }
  };
  $DvtThematicMapEventManager$$.prototype.$HandleAction$ = function $$DvtThematicMapEventManager$$$$$HandleAction$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    var $DvtThematicMapKeyboardHandler$$ = new $dvt$$12$$.$MapActionEvent$($DvtThematicMapControlPanel$$.$getClientId$(), $DvtThematicMapControlPanel$$.getId(), $DvtThematicMapControlPanel$$.$getAction$());
    $DvtThematicMapKeyboardHandler$$.$addParam$("clientId", $DvtThematicMapControlPanel$$.$getDataLayer$().$getClientId$());
    null != $DvtThematicMapJsonParser$$ && null != $DvtThematicMapEventManager$$ && ($DvtThematicMapControlPanel$$ = this.$_tmap$.$getCtx$().$pageToStageCoords$($DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$), $DvtThematicMapKeyboardHandler$$.$addParam$("pointXY", {x:$DvtThematicMapControlPanel$$.x, y:$DvtThematicMapControlPanel$$.y}));
    this.$hideTooltip$();
    this.$_callback$.call(this.$_callbackObj$, $DvtThematicMapKeyboardHandler$$);
  };
  $DvtThematicMapEventManager$$.prototype.$SetClickInfo$ = function $$DvtThematicMapEventManager$$$$$SetClickInfo$$($dvt$$12$$) {
    var $DvtThematicMapControlPanel$$ = null, $DvtThematicMapJsonParser$$ = null, $DvtThematicMapEventManager$$ = null;
    $dvt$$12$$ && ($dvt$$12$$ instanceof $DvtMapObjPeer$$ ? $DvtThematicMapEventManager$$ = $dvt$$12$$.$getDisplayable$() : $dvt$$12$$ instanceof $DvtMapArea$$ && ($DvtThematicMapEventManager$$ = $dvt$$12$$), $dvt$$12$$.$getDataLayer$ && ($dvt$$12$$ = $dvt$$12$$.$getDataLayer$(), $DvtThematicMapControlPanel$$ = $dvt$$12$$.$getClientId$(), $DvtThematicMapJsonParser$$ = $dvt$$12$$.$_parentLayer$.$LayerName$));
    this.$_tmap$.$setClickInfo$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
  };
  $DvtThematicMapEventManager$$.prototype.$OnDblClickInternal$ = function $$DvtThematicMapEventManager$$$$$OnDblClickInternal$$($DvtThematicMapControlPanel$$) {
    $DvtThematicMapControlPanel$$ = this.$GetLogicalObject$($DvtThematicMapControlPanel$$.target);
    this.$getSelectionHandler$($DvtThematicMapControlPanel$$) && this.$_drillMode$ && "none" != this.$_drillMode$ && ($DvtThematicMapControlPanel$$ = new $dvt$$12$$.$MapDrillEvent$($dvt$$12$$.$MapDrillEvent$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $DvtThematicMapControlPanel$$));
  };
  $DvtThematicMapEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtThematicMapEventManager$$$$$ProcessKeyboardEvent$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = !0, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$.keyCode, $DvtMapDataLayer$$ = this.$getFocus$(), $DvtMapCustomAreaLayer$$ = $DvtMapDataLayer$$.$getDisplayable$();
    $DvtThematicMapKeyboardHandler$$ != $dvt$$12$$.KeyboardEvent.$TAB$ && this.$_bPassOnEvent$ ? ($DvtMapCustomAreaLayer$$.$fireKeyboardListener$($DvtThematicMapControlPanel$$), $DvtThematicMapControlPanel$$.preventDefault()) : ($DvtThematicMapKeyboardHandler$$ == $dvt$$12$$.KeyboardEvent.ZERO || $DvtThematicMapKeyboardHandler$$ == $dvt$$12$$.KeyboardEvent.$NUMPAD_ZERO$) && $DvtThematicMapControlPanel$$.ctrlKey && $DvtThematicMapControlPanel$$.shiftKey ? (this.$_tmap$.$resetMap$(), $DvtThematicMapControlPanel$$.preventDefault()) : 
    $DvtThematicMapKeyboardHandler$$ == $dvt$$12$$.KeyboardEvent.$BACK_SLASH$ ? (($DvtMapDataLayer$$ = this.$_tmap$.$_legendPanel$) && ($DvtMapDataLayer$$ instanceof $dvt$$12$$.$CollapsiblePanel$ ? $DvtMapDataLayer$$.$setCollapsed$(!$DvtMapDataLayer$$.isCollapsed()) : $DvtMapDataLayer$$ instanceof $dvt$$12$$.$PanelDrawer$ && $DvtMapDataLayer$$.$setDisclosed$(!$DvtMapDataLayer$$.$isDisclosed$())), $DvtThematicMapControlPanel$$.preventDefault()) : $DvtThematicMapKeyboardHandler$$ == $dvt$$12$$.KeyboardEvent.$ENTER$ ? 
    $DvtMapDataLayer$$ instanceof $DvtMapObjPeer$$ && (($DvtThematicMapKeyboardHandler$$ = $DvtMapDataLayer$$.$getLinkCallback$()) ? $DvtThematicMapKeyboardHandler$$.call() : $DvtMapDataLayer$$.$hasAction$() ? this.$HandleAction$($DvtMapDataLayer$$) : $DvtThematicMapControlPanel$$.shiftKey ? this.$_tmap$.$drillUp$() : this.$_tmap$.$drillDown$(), $DvtThematicMapControlPanel$$.preventDefault()) : $DvtThematicMapKeyboardHandler$$ == $dvt$$12$$.KeyboardEvent.$SPACE$ && $DvtThematicMapControlPanel$$.ctrlKey ? 
    (this.$SetClickInfo$($DvtMapDataLayer$$), this.$ProcessSelectionEventHelper$($DvtMapDataLayer$$, !0), $DvtThematicMapControlPanel$$.preventDefault()) : $DvtThematicMapKeyboardHandler$$ != $dvt$$12$$.KeyboardEvent.ZERO && $DvtThematicMapKeyboardHandler$$ != $dvt$$12$$.KeyboardEvent.$NUMPAD_ZERO$ || !$DvtThematicMapControlPanel$$.ctrlKey ? $DvtThematicMapKeyboardHandler$$ == $dvt$$12$$.KeyboardEvent.$TAB$ && $DvtMapCustomAreaLayer$$ instanceof $DvtCustomDataItem$$ ? !$DvtThematicMapControlPanel$$.shiftKey && 
    $DvtMapDataLayer$$.$isShowingKeyboardFocusEffect$() ? ($DvtMapDataLayer$$.$hideKeyboardFocusEffect$(), $DvtMapCustomAreaLayer$$.$fireKeyboardListener$($DvtThematicMapControlPanel$$), $DvtThematicMapControlPanel$$.preventDefault(), this.$_bPassOnEvent$ = !0) : ($DvtThematicMapControlPanel$$.shiftKey && this.$_bPassOnEvent$ ? (this.$ShowFocusEffect$($DvtThematicMapControlPanel$$, $DvtMapDataLayer$$), $DvtThematicMapControlPanel$$.preventDefault()) : (this.$_bPassOnEvent$ && $DvtMapDataLayer$$.$showKeyboardFocusEffect$(), 
    $DvtThematicMapJsonParser$$ = $DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $DvtThematicMapControlPanel$$)), this.$_bPassOnEvent$ = !1) : $DvtThematicMapJsonParser$$ = $DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $DvtThematicMapControlPanel$$) : ($DvtThematicMapControlPanel$$.altKey ? this.$_tmap$.$fitRegion$($DvtMapCustomAreaLayer$$) : this.$_tmap$.$fitSelectedRegions$(), $DvtThematicMapControlPanel$$.preventDefault());
    return $DvtThematicMapJsonParser$$;
  };
  $DvtThematicMapEventManager$$.prototype.$OnComponentTouchClick$ = function $$DvtThematicMapEventManager$$$$$OnComponentTouchClick$$($DvtThematicMapControlPanel$$) {
    if (!this.$GetEventInfo$($DvtThematicMapControlPanel$$, $dvt$$12$$.$PanZoomCanvasEventManager$.$EVENT_INFO_PANNED_KEY$)) {
      var $DvtThematicMapJsonParser$$ = this.$GetLogicalObject$($DvtThematicMapControlPanel$$.target);
      this.$SetClickInfo$($DvtThematicMapJsonParser$$);
      if ($DvtThematicMapJsonParser$$ instanceof $dvt$$12$$.$ThematicMap$) {
        for (var $DvtThematicMapKeyboardHandler$$ in this.$_selectionHandlers$) {
          if (this.$_selectionHandlers$[$DvtThematicMapKeyboardHandler$$].$processClick$(null, $DvtThematicMapControlPanel$$.ctrlKey)) {
            for (var $DvtMapDataLayer$$ = this.$_selectionHandlers$[$DvtThematicMapKeyboardHandler$$].getSelection(), $DvtMapCustomAreaLayer$$ = [], $DvtMapAreaLayer$$ = 0;$DvtMapAreaLayer$$ < $DvtMapDataLayer$$.length;$DvtMapAreaLayer$$++) {
              $DvtMapCustomAreaLayer$$.push($DvtMapDataLayer$$[$DvtMapAreaLayer$$].getId());
            }
            $DvtMapDataLayer$$ = $dvt$$12$$.$EventFactory$.$newSelectionEvent$($DvtMapCustomAreaLayer$$);
            this.$_callback$.call(this.$_callbackObj$, $DvtMapDataLayer$$);
          }
        }
      }
      $DvtThematicMapEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $DvtThematicMapControlPanel$$);
      this.$_handleClick$($DvtThematicMapJsonParser$$, $DvtThematicMapControlPanel$$.$touch$.pageX, $DvtThematicMapControlPanel$$.$touch$.pageY);
    }
  };
  $DvtThematicMapEventManager$$.prototype.$HandleTouchHoverStartInternal$ = function $$DvtThematicMapEventManager$$$$$HandleTouchHoverStartInternal$$($dvt$$12$$) {
    ($dvt$$12$$ = this.$GetLogicalObject$($dvt$$12$$.target)) && $dvt$$12$$.$getShowPopupBehaviors$ && $dvt$$12$$.$getDataLayer$ ? this.$_tmap$.$setEventClientId$($dvt$$12$$.$getDataLayer$().$getClientId$()) : this.$_tmap$.$setEventClientId$(null);
  };
  $DvtThematicMapEventManager$$.prototype.$HandleTouchHoverOverInternal$ = function $$DvtThematicMapEventManager$$$$$HandleTouchHoverOverInternal$$($dvt$$12$$) {
    ($dvt$$12$$ = this.$GetLogicalObject$($dvt$$12$$.target)) && $dvt$$12$$.$getShowPopupBehaviors$ && $dvt$$12$$.$getDataLayer$ ? this.$_tmap$.$setEventClientId$($dvt$$12$$.$getDataLayer$().$getClientId$()) : this.$_tmap$.$setEventClientId$(null);
  };
  $DvtThematicMapEventManager$$.prototype.$HandleTouchDblClickInternal$ = function $$DvtThematicMapEventManager$$$$$HandleTouchDblClickInternal$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$GetLogicalObject$($DvtThematicMapControlPanel$$.target);
    $DvtThematicMapJsonParser$$ && this.$getSelectionHandler$($DvtThematicMapJsonParser$$) && this.$_drillMode$ && "none" != this.$_drillMode$ && (this.$ProcessSelectionEventHelper$($DvtThematicMapJsonParser$$, $DvtThematicMapControlPanel$$.ctrlKey), $DvtThematicMapControlPanel$$ = new $dvt$$12$$.$MapDrillEvent$($dvt$$12$$.$MapDrillEvent$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $DvtThematicMapControlPanel$$));
  };
  $DvtThematicMapEventManager$$.prototype.$HandleTouchActionsEnd$ = function $$DvtThematicMapEventManager$$$$$HandleTouchActionsEnd$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$GetLogicalObject$($dvt$$12$$.target);
    this.$SetClickInfo$($DvtThematicMapJsonParser$$);
    $DvtThematicMapEventManager$$.$superclass$.$HandleTouchActionsEnd$.call(this, $dvt$$12$$, $DvtThematicMapControlPanel$$);
  };
  $DvtThematicMapEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtThematicMapEventManager$$$$$ProcessRolloverEvent$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtThematicMapControlPanel$$ = this.$_tmap$.$getOptions$();
    "dim" == $DvtThematicMapControlPanel$$.hoverBehavior && ($DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.$getCategories$ ? $DvtThematicMapJsonParser$$.$getCategories$() : [], $DvtThematicMapControlPanel$$.highlightedCategories = $DvtThematicMapEventManager$$ ? $DvtThematicMapJsonParser$$.slice() : null, $DvtThematicMapEventManager$$ = $dvt$$12$$.$EventFactory$.$newCategoryHighlightEvent$($DvtThematicMapControlPanel$$.highlightedCategories, $DvtThematicMapEventManager$$), $DvtThematicMapJsonParser$$ = 
    $dvt$$12$$.$StyleUtils$.$getTimeMilliseconds$($DvtThematicMapControlPanel$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($DvtThematicMapEventManager$$, this.$_tmap$.$getNavigableAreas$().concat(this.$_tmap$.$getNavigableMarkers$()).concat(this.$_tmap$.$getNavigableLinks$()), $DvtThematicMapJsonParser$$, "any" == $DvtThematicMapControlPanel$$.highlightMatch));
  };
  $DvtThematicMapEventManager$$.prototype.$GetTouchResponse$ = function $$DvtThematicMapEventManager$$$$$GetTouchResponse$$() {
    var $DvtThematicMapControlPanel$$ = this.$_tmap$.$getOptions$();
    return "none" !== $DvtThematicMapControlPanel$$.panning || "none" !== $DvtThematicMapControlPanel$$.zooming ? $dvt$$12$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : $DvtThematicMapControlPanel$$.touchResponse === $dvt$$12$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$ ? $dvt$$12$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$ : $dvt$$12$$.$EventManager$.$TOUCH_RESPONSE_AUTO$;
  };
  $DvtThematicMapEventManager$$.prototype.$StoreInfoByEventType$ = function $$DvtThematicMapEventManager$$$$$StoreInfoByEventType$$($DvtThematicMapControlPanel$$) {
    return $DvtThematicMapControlPanel$$ == $dvt$$12$$.$PanZoomCanvasEventManager$.$EVENT_INFO_PANNED_KEY$ ? !1 : $DvtThematicMapEventManager$$.$superclass$.$StoreInfoByEventType$.call(this, $DvtThematicMapControlPanel$$);
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtThematicMapJsonParser$$, $dvt$$12$$.$Obj$);
  $DvtThematicMapJsonParser$$.$_MIN_MARKER_SIZE$ = 6;
  $DvtThematicMapJsonParser$$.$_MAX_MARKER_SIZE_RATIO$ = .5;
  $DvtThematicMapJsonParser$$.$_PZC_PADDING$ = 20;
  $DvtThematicMapJsonParser$$.prototype.Init = function $$DvtThematicMapJsonParser$$$$Init$($dvt$$12$$) {
    this.$_tmap$ = $dvt$$12$$;
    this.$_isCustomBasemap$ = !1;
    this.$_areaLayerStyleObject$ = this.$_areaLayerStyle$ = null;
    this.$_customAreaLayerImages$ = {};
  };
  $DvtThematicMapJsonParser$$.prototype.parse = function $$DvtThematicMapJsonParser$$$$parse$($DvtThematicMapControlPanel$$) {
    this.$_parseMapProperties$($DvtThematicMapControlPanel$$);
    $DvtThematicMapControlPanel$$._legend && this.$_tmap$.$setLegendData$($DvtThematicMapControlPanel$$._legend);
    this.$_parseStyles$($DvtThematicMapControlPanel$$.styleDefaults);
    if (this.$_isCustomBasemap$ && $DvtThematicMapControlPanel$$.sourceXml) {
      var $DvtThematicMapJsonParser$$ = (new $dvt$$12$$.$XmlParser$(this.$_tmap$.$getCtx$())).parse($DvtThematicMapControlPanel$$.sourceXml);
      this.$_parseCustomBasemap$($DvtThematicMapJsonParser$$);
    }
    this.$_parseAreaLayers$($DvtThematicMapControlPanel$$.areaLayers);
    this.$ParseDataLayers$($DvtThematicMapControlPanel$$.pointDataLayers, null, null, !1);
  };
  $DvtThematicMapJsonParser$$.prototype.$_parseMapProperties$ = function $$DvtThematicMapJsonParser$$$$$_parseMapProperties$$($dvt$$12$$) {
    var $DvtThematicMapControlPanel$$ = $dvt$$12$$.animationDuration;
    "string" == typeof $DvtThematicMapControlPanel$$ ? "ms" == $DvtThematicMapControlPanel$$.slice(-2) ? $DvtThematicMapControlPanel$$ = parseInt($DvtThematicMapControlPanel$$.slice(0, -2)) / 1E3 : "s" == $DvtThematicMapControlPanel$$.slice(-1) && ($DvtThematicMapControlPanel$$ = parseFloat($DvtThematicMapControlPanel$$.slice(0, -1))) : $DvtThematicMapControlPanel$$ /= 1E3;
    this.$_tmap$.$setAnimationDuration$($DvtThematicMapControlPanel$$);
    this.$_tmap$.$setAnimationOnDisplay$("auto" == $dvt$$12$$.animationOnDisplay ? "alphaFade" : $dvt$$12$$.animationOnDisplay);
    this.$_tmap$.$setAnimationOnMapChange$("auto" == $dvt$$12$$.animationOnMapChange ? "alphaFade" : $dvt$$12$$.animationOnMapChange);
    this.$_isCustomBasemap$ = null != $dvt$$12$$.source;
    this.$_tmap$.$setMapName$(this.$_isCustomBasemap$ ? "$" + $dvt$$12$$.basemap : $dvt$$12$$.basemap);
    this.$_tmap$.$setFeaturesOff$($dvt$$12$$.featuresOff);
    this.$_tmap$.$setControlPanelBehavior$($dvt$$12$$.controlPanelBehavior);
    $DvtThematicMapControlPanel$$ = $dvt$$12$$.tooltipDisplay;
    "shortDesc" == $DvtThematicMapControlPanel$$ ? $DvtThematicMapControlPanel$$ = "shortDescOnly" : "labelAndShortDesc" == $DvtThematicMapControlPanel$$ && ($DvtThematicMapControlPanel$$ = "auto");
    this.$_tmap$.$setDisplayTooltips$($DvtThematicMapControlPanel$$);
    ($DvtThematicMapControlPanel$$ = $dvt$$12$$.popups) && this.$_tmap$.$setShowPopupBehaviors$(this.$_getShowPopupBehaviors$($DvtThematicMapControlPanel$$));
    this.$_tmap$.$setDrillMode$($dvt$$12$$.drilling);
    this.$_tmap$.$setAnimationOnDrill$($dvt$$12$$.animationOnDrill);
    this.$_tmap$.$setInitialZooming$("auto" == $dvt$$12$$.initialZooming);
    this.$_tmap$.$setMarkerZoomBehavior$($dvt$$12$$.markerZoomBehavior);
    this.$_tmap$.$setPanning$("auto" == $dvt$$12$$.panning);
    this.$_tmap$.$setZooming$("auto" == $dvt$$12$$.zooming);
    this.$_tmap$.$setInitialCenterX$($dvt$$12$$.panX);
    this.$_tmap$.$setInitialCenterY$($dvt$$12$$.panY);
    this.$_tmap$.$setInitialZoom$($dvt$$12$$.zoom);
    isNaN($dvt$$12$$.maxZoom) || this.$_tmap$.$setMaxZoomFactor$(Math.max($dvt$$12$$.maxZoom, 1));
  };
  $DvtThematicMapJsonParser$$.prototype.$_parseAreaLayers$ = function $$DvtThematicMapJsonParser$$$$$_parseAreaLayers$$($DvtThematicMapControlPanel$$) {
    for (var $DvtThematicMapEventManager$$ = this.$_tmap$.$_mapName$, $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapKeyboardHandler$$++) {
      var $DvtMapDataLayer$$ = this.$_tmap$.$Defaults$.$calcAreaLayerOptions$($DvtThematicMapControlPanel$$[$DvtThematicMapKeyboardHandler$$]), $DvtMapLayer$$ = $DvtMapDataLayer$$.layer;
      if ($DvtMapLayer$$) {
        var $DvtCustomDataItem$$;
        if ($DvtCustomDataItem$$ = $DvtMapDataLayer$$.areaStyle) {
          $DvtCustomDataItem$$ instanceof Object || ($DvtCustomDataItem$$ = $dvt$$12$$.$CSSStyle$.$cssStringToObject$($DvtCustomDataItem$$));
          var $DvtMapLinkPeer$$ = $DvtThematicMapJsonParser$$.$_getAreaCSSStyle$($DvtCustomDataItem$$);
          this.$_areaLayerStyleObject$ = $dvt$$12$$.$JsonUtils$.$merge$($DvtCustomDataItem$$, this.$_areaLayerStyleObject$);
          this.$_areaLayerStyle$.$merge$($DvtMapLinkPeer$$);
        }
        $DvtMapDataLayer$$.labelStyle && this.$_areaLayerStyle$.$parseInlineStyle$($DvtMapDataLayer$$.labelStyle);
        this.$_isCustomBasemap$ ? ($DvtCustomDataItem$$ = new $DvtMapCustomAreaLayer$$(this.$_tmap$, $DvtMapLayer$$, $DvtMapDataLayer$$.labelDisplay, $DvtMapDataLayer$$.labelType, this.$_tmap$.$getEventManager$()), $DvtCustomDataItem$$.$setAreaLayerImage$(this.$_customAreaLayerImages$[$DvtMapLayer$$])) : ($DvtCustomDataItem$$ = new $DvtMapAreaLayer$$(this.$_tmap$, $DvtMapLayer$$, $DvtMapDataLayer$$.labelDisplay, $DvtMapDataLayer$$.labelType, this.$_tmap$.$getEventManager$()), $DvtCustomDataItem$$.$setAreaShapes$(this.$_createPathShapes$($DvtBaseMapManager$$.$getAreaIds$($DvtThematicMapEventManager$$, 
        $DvtMapLayer$$))), $DvtCustomDataItem$$.$setAreaLabels$($DvtBaseMapManager$$.$getAreaLabels$($DvtThematicMapEventManager$$, $DvtMapLayer$$)), $DvtCustomDataItem$$.$setAreaLabelInfo$($DvtBaseMapManager$$.$getAreaLabelInfo$($DvtThematicMapEventManager$$, $DvtMapLayer$$)), $DvtCustomDataItem$$.$setAreaChildren$($DvtBaseMapManager$$.$getChildrenForLayerAreas$(this.$_tmap$.$_mapName$, $DvtMapLayer$$)));
        $DvtCustomDataItem$$.$setLayerCSSStyle$(this.$_areaLayerStyle$);
        $DvtCustomDataItem$$.$setAnimation$("auto" == $DvtMapDataLayer$$.animationOnLayerChange ? "alphaFade" : $DvtMapDataLayer$$.animationOnLayerChange);
        $DvtCustomDataItem$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
        this.$_tmap$.$addLayer$($DvtCustomDataItem$$);
        $DvtMapDataLayer$$.areaDataLayer && this.$ParseDataLayers$([$DvtMapDataLayer$$.areaDataLayer], $DvtCustomDataItem$$, null, !0);
        $DvtMapDataLayer$$.pointDataLayers && this.$ParseDataLayers$($DvtMapDataLayer$$.pointDataLayers, $DvtCustomDataItem$$, null, !1);
      }
    }
  };
  $DvtThematicMapJsonParser$$.prototype.$ParseDataLayers$ = function $$DvtThematicMapJsonParser$$$$$ParseDataLayers$$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapCustomAreaLayer$$) {
    if ($DvtThematicMapControlPanel$$) {
      for (var $DvtCustomDataItem$$ = 0;$DvtCustomDataItem$$ < $DvtThematicMapControlPanel$$.length;$DvtCustomDataItem$$++) {
        var $DvtMapLinkPeer$$ = this.$_tmap$.$Defaults$.$calcDataLayerOptions$($DvtThematicMapControlPanel$$[$DvtCustomDataItem$$]);
        $DvtMapLinkPeer$$.legend && this.$_tmap$.$setLegendData$($DvtMapLinkPeer$$.legend);
        $DvtThematicMapEventManager$$ ? $DvtThematicMapEventManager$$ instanceof $DvtMapAreaLayer$$ && $DvtMapCustomAreaLayer$$ && $DvtThematicMapEventManager$$.$resetRenderedAreas$() : ($DvtThematicMapEventManager$$ = new $DvtMapLayer$$(this.$_tmap$, $DvtMapLinkPeer$$.id, this.$_tmap$.$getEventManager$()), this.$_tmap$.$addPointLayer$($DvtThematicMapEventManager$$));
        var $DvtMapArea$$ = new $DvtMapDataLayer$$(this.$_tmap$, $DvtThematicMapEventManager$$, $DvtMapLinkPeer$$.id, this.$_tmap$.$getEventManager$(), $DvtMapLinkPeer$$);
        $DvtMapCustomAreaLayer$$ = $DvtMapLinkPeer$$.selectionMode;
        "single" == $DvtMapCustomAreaLayer$$ ? $DvtMapArea$$.$setSelectionMode$($dvt$$12$$.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == $DvtMapCustomAreaLayer$$ && $DvtMapArea$$.$setSelectionMode$($dvt$$12$$.$SelectionHandler$.$TYPE_MULTIPLE$);
        $DvtMapArea$$.$setAnimation$($DvtMapLinkPeer$$.animationOnDataChange);
        $DvtMapArea$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
        var $DvtMapObjPeer$$ = null;
        $DvtThematicMapEventManager$$ instanceof $DvtMapAreaLayer$$ && ($DvtMapObjPeer$$ = $DvtMapLinkPeer$$.isolatedItem);
        var $DvtThematicMapAutomation$$ = $DvtMapLinkPeer$$.disclosedItems, $DvtMapAreaPeer$$ = [], $DvtDrillablePath$$;
        $DvtMapCustomAreaLayer$$ = $DvtThematicMapEventManager$$ instanceof $DvtMapAreaLayer$$;
        var $DvtMapLabel$$;
        $DvtMapLinkPeer$$.popups && ($DvtMapLabel$$ = this.$_getShowPopupBehaviors$($DvtMapLinkPeer$$.popups));
        var $DvtThematicMapDefaults$$ = this.$_tmap$.$getOptions$().hiddenCategories, $DvtThematicMapProjections$$ = $DvtMapLinkPeer$$.areas;
        if ($DvtThematicMapProjections$$) {
          for (var $DvtBaseMapManager$$ = 0;$DvtBaseMapManager$$ < $DvtThematicMapProjections$$.length;$DvtBaseMapManager$$++) {
            if ($DvtThematicMapDefaults$$ && $dvt$$12$$.$ArrayUtils$.$hasAnyItem$($DvtThematicMapDefaults$$, $DvtThematicMapProjections$$[$DvtBaseMapManager$$].categories)) {
              $DvtMapArea$$.$addAreaObject$(null);
            } else {
              var $DvtThematicMapCategoryWrapper$$ = $DvtThematicMapProjections$$[$DvtBaseMapManager$$].location;
              if ($DvtMapObjPeer$$) {
                if ($DvtMapObjPeer$$ != $DvtThematicMapProjections$$[$DvtBaseMapManager$$].id) {
                  continue;
                } else {
                  $DvtDrillablePath$$ = $DvtThematicMapCategoryWrapper$$;
                }
              }
              $DvtThematicMapAutomation$$ && -1 != $dvt$$12$$.$ArrayUtils$.$getIndex$($DvtThematicMapAutomation$$, $DvtThematicMapProjections$$[$DvtBaseMapManager$$].id) && $DvtMapAreaPeer$$.push($DvtThematicMapCategoryWrapper$$);
              if ($DvtThematicMapCategoryWrapper$$ = this.$_createArea$($DvtThematicMapEventManager$$, $DvtMapArea$$, $DvtThematicMapProjections$$[$DvtBaseMapManager$$])) {
                $DvtMapLabel$$ && $DvtThematicMapCategoryWrapper$$.$setShowPopupBehaviors$($DvtMapLabel$$), $DvtMapArea$$.$addAreaObject$($DvtThematicMapCategoryWrapper$$);
              }
            }
          }
        }
        var $DvtThematicMapProjections$$ = $DvtMapLinkPeer$$.renderer, $markers$$12$$ = $DvtMapLinkPeer$$.markers;
        if ($markers$$12$$ && !$DvtThematicMapProjections$$) {
          for ($DvtThematicMapJsonParser$$.$_calcBubbleSizes$(this.$_tmap$, $markers$$12$$), $DvtBaseMapManager$$ = 0;$DvtBaseMapManager$$ < $markers$$12$$.length;$DvtBaseMapManager$$++) {
            if ($DvtThematicMapDefaults$$ && $dvt$$12$$.$ArrayUtils$.$hasAnyItem$($DvtThematicMapDefaults$$, $markers$$12$$[$DvtBaseMapManager$$].categories)) {
              $DvtMapArea$$.$addMarkerObject$(null);
            } else {
              $DvtThematicMapCategoryWrapper$$ = $markers$$12$$[$DvtBaseMapManager$$].location;
              if ($DvtMapObjPeer$$) {
                if ($DvtMapObjPeer$$ != $markers$$12$$[$DvtBaseMapManager$$].id) {
                  continue;
                } else {
                  $DvtDrillablePath$$ = $DvtThematicMapCategoryWrapper$$;
                }
              }
              if ($DvtThematicMapCategoryWrapper$$ = this.$_createMarker$($DvtThematicMapEventManager$$, $DvtMapArea$$, $markers$$12$$[$DvtBaseMapManager$$], $DvtMapCustomAreaLayer$$)) {
                $DvtMapLabel$$ && $DvtThematicMapCategoryWrapper$$.$setShowPopupBehaviors$($DvtMapLabel$$), $DvtMapArea$$.$addMarkerObject$($DvtThematicMapCategoryWrapper$$);
              }
            }
          }
        }
        var $images$$22_links$$11$$ = $DvtMapLinkPeer$$.images;
        if ($images$$22_links$$11$$) {
          for ($DvtBaseMapManager$$ = 0;$DvtBaseMapManager$$ < $images$$22_links$$11$$.length;$DvtBaseMapManager$$++) {
            $DvtThematicMapCategoryWrapper$$ = $images$$22_links$$11$$[$DvtBaseMapManager$$].location;
            if ($DvtMapObjPeer$$) {
              if ($DvtMapObjPeer$$ != $images$$22_links$$11$$[$DvtBaseMapManager$$].id) {
                continue;
              } else {
                $DvtDrillablePath$$ = $DvtThematicMapCategoryWrapper$$;
              }
            }
            if ($DvtThematicMapCategoryWrapper$$ = this.$_createImage$($DvtThematicMapEventManager$$, $DvtMapArea$$, $images$$22_links$$11$$[$DvtBaseMapManager$$], $DvtMapCustomAreaLayer$$)) {
              $DvtMapLabel$$ && $DvtThematicMapCategoryWrapper$$.$setShowPopupBehaviors$($DvtMapLabel$$), $DvtMapArea$$.$addMarkerObject$($DvtThematicMapCategoryWrapper$$);
            }
          }
        }
        if ($images$$22_links$$11$$ = $DvtMapLinkPeer$$.links) {
          for ($DvtBaseMapManager$$ = 0;$DvtBaseMapManager$$ < $images$$22_links$$11$$.length;$DvtBaseMapManager$$++) {
            $DvtThematicMapDefaults$$ && $dvt$$12$$.$ArrayUtils$.$hasAnyItem$($DvtThematicMapDefaults$$, $images$$22_links$$11$$[$DvtBaseMapManager$$].categories) ? $DvtMapArea$$.$addAreaObject$(null) : ($DvtThematicMapCategoryWrapper$$ = this.$_createLink$($DvtMapArea$$, $images$$22_links$$11$$[$DvtBaseMapManager$$])) && $DvtMapArea$$.$addLinkObject$($DvtThematicMapCategoryWrapper$$);
          }
        }
        if ($DvtThematicMapProjections$$) {
          for ($DvtBaseMapManager$$ = 0;$DvtBaseMapManager$$ < $markers$$12$$.length;$DvtBaseMapManager$$++) {
            $DvtThematicMapCategoryWrapper$$ = $markers$$12$$[$DvtBaseMapManager$$].location;
            if ($DvtMapObjPeer$$) {
              if ($DvtMapObjPeer$$ != $markers$$12$$[$DvtBaseMapManager$$].id) {
                continue;
              } else {
                $DvtDrillablePath$$ = $DvtThematicMapCategoryWrapper$$;
              }
            }
            $DvtThematicMapAutomation$$ && -1 != $dvt$$12$$.$ArrayUtils$.$getIndex$($DvtThematicMapAutomation$$, $markers$$12$$[$DvtBaseMapManager$$].id) && $DvtMapAreaPeer$$.push($DvtThematicMapCategoryWrapper$$);
            $DvtThematicMapDefaults$$ = this.$_tmap$.$getOptions$()._contextHandler(this.$_tmap$.$getElem$(), null, $markers$$12$$[$DvtBaseMapManager$$], {hovered:!1, selected:!1, focused:!1}, null);
            $DvtThematicMapDefaults$$ = $DvtThematicMapProjections$$($DvtThematicMapDefaults$$);
            $DvtThematicMapCategoryWrapper$$ = this.$_createCustomDataItem$($DvtThematicMapEventManager$$, $DvtMapArea$$, $markers$$12$$[$DvtBaseMapManager$$], $DvtThematicMapDefaults$$, $DvtMapCustomAreaLayer$$);
            $DvtMapLabel$$ && $DvtThematicMapCategoryWrapper$$.$setShowPopupBehaviors$($DvtMapLabel$$);
            $DvtThematicMapCategoryWrapper$$ && $DvtMapArea$$.$addMarkerObject$($DvtThematicMapCategoryWrapper$$);
          }
        }
        $DvtDrillablePath$$ && $DvtThematicMapEventManager$$.$setIsolatedArea$($DvtDrillablePath$$);
        ($DvtMapLinkPeer$$ = $DvtMapLinkPeer$$.selection) && 0 < $DvtMapLinkPeer$$.length && $DvtMapArea$$.$setInitialSelections$($DvtMapLinkPeer$$);
        $DvtMapAreaPeer$$ && 0 < $DvtMapAreaPeer$$.length && this.$_tmap$.$addDrilledLayer$($DvtThematicMapEventManager$$.$LayerName$, [$DvtMapArea$$.$getClientId$(), $DvtMapAreaPeer$$]);
        $DvtThematicMapKeyboardHandler$$ ? $DvtThematicMapEventManager$$.$updateDataLayer$($DvtMapArea$$, this.$_tmap$.$_panZoomCanvas$.$_contentPane$.$getMatrix$(), $DvtThematicMapKeyboardHandler$$) : $DvtThematicMapEventManager$$.$addDataLayer$($DvtMapArea$$);
      }
    }
  };
  $DvtThematicMapJsonParser$$.prototype.$_parseStyles$ = function $$DvtThematicMapJsonParser$$$$$_parseStyles$$($DvtThematicMapControlPanel$$) {
    this.$_tmap$.$parseComponentJson$($DvtThematicMapControlPanel$$);
    var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$.areaStyle;
    !$DvtThematicMapEventManager$$ || $DvtThematicMapEventManager$$ instanceof Object || ($DvtThematicMapEventManager$$ = $dvt$$12$$.$CSSStyle$.$cssStringToObject$($DvtThematicMapEventManager$$));
    $DvtThematicMapEventManager$$ = $dvt$$12$$.$JsonUtils$.$merge$($DvtThematicMapEventManager$$, $DvtThematicMapControlPanel$$._areaStyle);
    this.$_areaLayerStyle$ = $DvtThematicMapJsonParser$$.$_getAreaCSSStyle$($DvtThematicMapEventManager$$);
    this.$_areaLayerStyleObject$ = $DvtThematicMapEventManager$$;
    this.$_areaLayerStyle$.$parseInlineStyle$($DvtThematicMapControlPanel$$.labelStyle);
    new $dvt$$12$$.$CSSStyle$($DvtThematicMapControlPanel$$.dropTargetStyle);
    this.$_tmap$.$setStyleDefaults$($DvtThematicMapControlPanel$$);
  };
  $DvtThematicMapJsonParser$$.$_getAreaCSSStyle$ = function $$DvtThematicMapJsonParser$$$$_getAreaCSSStyle$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = new $dvt$$12$$.$CSSStyle$;
    $dvt$$12$$.$ArrayUtils$.forEach([$dvt$$12$$.$CSSStyle$.$BORDER_COLOR$, $dvt$$12$$.$CSSStyle$.$BACKGROUND_COLOR$], function($DvtThematicMapEventManager$$) {
      var $DvtThematicMapKeyboardHandler$$ = null, $DvtMapDataLayer$$ = $dvt$$12$$.$CSSStyle$.$cssStringToObjectProperty$($DvtThematicMapEventManager$$);
      $DvtThematicMapControlPanel$$ && null != $DvtThematicMapControlPanel$$[$DvtMapDataLayer$$] && ($DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$[$DvtMapDataLayer$$], delete $DvtThematicMapControlPanel$$[$DvtMapDataLayer$$]);
      $DvtThematicMapJsonParser$$.$setStyle$($DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
    });
    return $DvtThematicMapJsonParser$$;
  };
  $DvtThematicMapJsonParser$$.prototype.$_parseCustomBasemap$ = function $$DvtThematicMapJsonParser$$$$$_parseCustomBasemap$$($dvt$$12$$) {
    $dvt$$12$$ = $dvt$$12$$.$getChildNodes$();
    for (var $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $dvt$$12$$.length;$DvtThematicMapEventManager$$++) {
      $DvtThematicMapControlPanel$$ = $dvt$$12$$[$DvtThematicMapEventManager$$], $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.getName(), "layer" == $DvtThematicMapJsonParser$$ ? this.$_parseCustomLayer$($DvtThematicMapControlPanel$$) : "points" == $DvtThematicMapJsonParser$$ && this.$_parseCustomPoints$($DvtThematicMapControlPanel$$);
    }
  };
  $DvtThematicMapJsonParser$$.prototype.$_parseCustomLayer$ = function $$DvtThematicMapJsonParser$$$$$_parseCustomLayer$$($dvt$$12$$) {
    var $DvtThematicMapControlPanel$$ = $dvt$$12$$.$getChildNodes$();
    $dvt$$12$$ = $dvt$$12$$.$getAttr$("id");
    for (var $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$ = [], $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtThematicMapControlPanel$$.length;$DvtMapDataLayer$$++) {
      if ($DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$[$DvtMapDataLayer$$], $DvtThematicMapEventManager$$ = $DvtThematicMapJsonParser$$.getName(), "image" == $DvtThematicMapEventManager$$) {
        $DvtThematicMapEventManager$$ = {};
        $DvtThematicMapEventManager$$.source = $DvtThematicMapJsonParser$$.$getAttr$("source");
        $DvtThematicMapEventManager$$.width = Number($DvtThematicMapJsonParser$$.$getAttr$("width"));
        $DvtThematicMapEventManager$$.height = Number($DvtThematicMapJsonParser$$.$getAttr$("height"));
        var $DvtMapCustomAreaLayer$$ = $DvtThematicMapJsonParser$$.$getAttr$("bidi");
        $DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.$getAttr$("dir");
        $DvtThematicMapEventManager$$.dir = "true" == $DvtMapCustomAreaLayer$$ || "rtl" == $DvtThematicMapJsonParser$$ ? "rtl" : "ltr";
        $DvtThematicMapKeyboardHandler$$.push($DvtThematicMapEventManager$$);
      }
    }
    this.$_customAreaLayerImages$[$dvt$$12$$] = $DvtThematicMapKeyboardHandler$$;
  };
  $DvtThematicMapJsonParser$$.prototype.$_parseCustomPoints$ = function $$DvtThematicMapJsonParser$$$$$_parseCustomPoints$$($dvt$$12$$) {
    $dvt$$12$$ = $dvt$$12$$.$getChildNodes$();
    for (var $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$ = {}, $DvtThematicMapKeyboardHandler$$ = {}, $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $dvt$$12$$.length;$DvtMapDataLayer$$++) {
      $DvtThematicMapControlPanel$$ = $dvt$$12$$[$DvtMapDataLayer$$], $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.getName(), "point" == $DvtThematicMapJsonParser$$ && ($DvtThematicMapEventManager$$[$DvtThematicMapControlPanel$$.$getAttr$("name")] = [Number($DvtThematicMapControlPanel$$.$getAttr$("x")), Number($DvtThematicMapControlPanel$$.$getAttr$("y"))], $DvtThematicMapKeyboardHandler$$[$DvtThematicMapControlPanel$$.$getAttr$("name")] = [null, $DvtThematicMapControlPanel$$.$getAttr$("longLabel")])
      ;
    }
    $DvtBaseMapManager$$.$registerBaseMapLayer$(this.$_tmap$.$_mapName$, "cities", $DvtThematicMapKeyboardHandler$$, $DvtThematicMapEventManager$$, null, null, 1);
  };
  $DvtThematicMapJsonParser$$.prototype.$_createPathShapes$ = function $$DvtThematicMapJsonParser$$$$$_createPathShapes$$($DvtThematicMapControlPanel$$) {
    for (var $DvtThematicMapJsonParser$$ = {}, $DvtThematicMapEventManager$$ = this.$_tmap$.$getCtx$(), $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapKeyboardHandler$$++) {
      var $DvtMapDataLayer$$ = $DvtThematicMapControlPanel$$[$DvtThematicMapKeyboardHandler$$];
      $DvtThematicMapJsonParser$$[$DvtMapDataLayer$$] = new $dvt$$12$$.$Path$($DvtThematicMapEventManager$$);
      var $DvtMapCustomAreaLayer$$ = this.$_areaLayerStyle$.$getStyle$($dvt$$12$$.$CSSStyle$.$BORDER_COLOR$);
      $DvtMapCustomAreaLayer$$ && "transparent" != $DvtMapCustomAreaLayer$$ && ($DvtMapCustomAreaLayer$$ = new $dvt$$12$$.$SolidStroke$($DvtMapCustomAreaLayer$$), this.$_tmap$.$_bSupportsVectorEffects$ && $DvtMapCustomAreaLayer$$.$setFixedWidth$(!0), $DvtThematicMapJsonParser$$[$DvtMapDataLayer$$].$setStroke$($DvtMapCustomAreaLayer$$));
      $DvtMapCustomAreaLayer$$ = this.$_areaLayerStyle$.$getStyle$($dvt$$12$$.$CSSStyle$.$BACKGROUND_COLOR$);
      "transparent" != $DvtMapCustomAreaLayer$$ ? $DvtThematicMapJsonParser$$[$DvtMapDataLayer$$].$setSolidFill$($DvtMapCustomAreaLayer$$) : $DvtThematicMapJsonParser$$[$DvtMapDataLayer$$].$setFill$(null);
      this.$_areaLayerStyleObject$ && $DvtThematicMapJsonParser$$[$DvtMapDataLayer$$].$setStyle$(this.$_areaLayerStyleObject$);
    }
    return $DvtThematicMapJsonParser$$;
  };
  $DvtThematicMapJsonParser$$.prototype.$_createArea$ = function $$DvtThematicMapJsonParser$$$$$_createArea$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    var $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapEventManager$$.location;
    if ($DvtThematicMapControlPanel$$.$getAreaShape$($DvtThematicMapKeyboardHandler$$)) {
      $DvtThematicMapControlPanel$$.$setAreaRendered$($DvtThematicMapKeyboardHandler$$, !1);
      $DvtThematicMapKeyboardHandler$$ = new $DvtDrillablePath$$(this.$_tmap$.$getCtx$(), this.$_tmap$.$_bSupportsVectorEffects$);
      $DvtThematicMapEventManager$$ = $dvt$$12$$.$JsonUtils$.$merge$($DvtThematicMapEventManager$$, this.$_tmap$.$_styleDefaults$.dataAreaDefaults);
      $DvtThematicMapEventManager$$.labelStyle || ($DvtThematicMapEventManager$$.labelStyle = this.$_tmap$.$_styleDefaults$.labelStyle);
      var $DvtMapDataLayer$$ = new $dvt$$12$$.$SolidStroke$($DvtThematicMapEventManager$$.hoverColor, 1, $DvtDrillablePath$$.$HOVER_STROKE_WIDTH$), $DvtMapCustomAreaLayer$$ = new $dvt$$12$$.$SolidStroke$($DvtThematicMapEventManager$$.selectedInnerColor, 1, $DvtDrillablePath$$.$SELECTED_INNER_STROKE_WIDTH$), $DvtMapAreaLayer$$ = new $dvt$$12$$.$SolidStroke$($DvtThematicMapEventManager$$.selectedOuterColor, 1, $DvtDrillablePath$$.$SELECTED_OUTER_STROKE_WIDTH$);
      $DvtThematicMapKeyboardHandler$$.$setHoverStroke$($DvtMapDataLayer$$, null).$setSelectedStroke$($DvtMapCustomAreaLayer$$, $DvtMapAreaLayer$$);
      $DvtMapDataLayer$$ = new $dvt$$12$$.$SolidStroke$($DvtThematicMapEventManager$$.drilledInnerColor, 1, $DvtDrillablePath$$.$DISCLOSED_INNER_STROKE_WIDTH$);
      $DvtMapCustomAreaLayer$$ = new $dvt$$12$$.$SolidStroke$($DvtThematicMapEventManager$$.drilledOuterColor, 1, $DvtDrillablePath$$.$DISCLOSED_OUTER_STROKE_WIDTH$);
      $DvtThematicMapKeyboardHandler$$.$setDisclosedStroke$($DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$);
      $DvtThematicMapControlPanel$$.$setLabelRendered$($DvtThematicMapEventManager$$.location, !1);
      this.$_styleDisplayable$($DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
      $DvtThematicMapControlPanel$$ = this.$_createLabel$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, !0);
      return new $DvtMapAreaPeer$$($DvtThematicMapEventManager$$, $DvtThematicMapJsonParser$$, $DvtThematicMapKeyboardHandler$$, $DvtThematicMapControlPanel$$);
    }
    return null;
  };
  $DvtThematicMapJsonParser$$.prototype.$_createMarker$ = function $$DvtThematicMapJsonParser$$$$$_createMarker$$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    var $DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$._size, $DvtMapAreaLayer$$;
    $DvtMapAreaLayer$$ = ($DvtMapAreaLayer$$ = this.$_tmap$.$getOptions$().mapProvider) && null != $DvtMapAreaLayer$$.geo ? new $dvt$$12$$.$Point$($DvtThematicMapKeyboardHandler$$.x, -$DvtThematicMapKeyboardHandler$$.y) : $DvtThematicMapJsonParser$$.$getCenter$($DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$.location, $DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapKeyboardHandler$$.y);
    if (!$DvtMapAreaLayer$$ || 0 === $DvtMapCustomAreaLayer$$) {
      return null;
    }
    var $DvtMapLayer$$ = this.$_tmap$.$_styleDefaults$.dataMarkerDefaults, $DvtCustomDataItem$$ = new $dvt$$12$$.$CSSStyle$($DvtMapLayer$$.labelStyle);
    $DvtCustomDataItem$$.$parseInlineStyle$($DvtThematicMapKeyboardHandler$$.labelStyle);
    $DvtThematicMapKeyboardHandler$$ = $dvt$$12$$.$JsonUtils$.$merge$($DvtThematicMapKeyboardHandler$$, $DvtMapLayer$$);
    $DvtThematicMapKeyboardHandler$$.labelStyle = $DvtCustomDataItem$$.toString();
    if (null != $DvtMapCustomAreaLayer$$) {
      $DvtMapLayer$$ = $DvtMapCustomAreaLayer$$;
    } else {
      $DvtMapLayer$$ = $DvtThematicMapKeyboardHandler$$.scaleX;
      null == $DvtMapLayer$$ && ($DvtMapLayer$$ = 1);
      $DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$.scaleY;
      null == $DvtMapCustomAreaLayer$$ && ($DvtMapCustomAreaLayer$$ = 1);
      var $DvtMapLinkPeer$$ = $DvtThematicMapKeyboardHandler$$.width;
      null == $DvtMapLinkPeer$$ && ($DvtMapLinkPeer$$ = this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.width);
      $DvtCustomDataItem$$ = $DvtThematicMapKeyboardHandler$$.height;
      null == $DvtCustomDataItem$$ && ($DvtCustomDataItem$$ = this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.height);
      $DvtMapLayer$$ *= $DvtMapLinkPeer$$;
      $DvtMapCustomAreaLayer$$ *= $DvtCustomDataItem$$;
    }
    $DvtCustomDataItem$$ = $DvtThematicMapKeyboardHandler$$.borderRadius;
    $DvtThematicMapKeyboardHandler$$.source ? $DvtMapLayer$$ = new $dvt$$12$$.$ImageMarker$(this.$_tmap$.$getCtx$(), $DvtMapAreaLayer$$.x, $DvtMapAreaLayer$$.y, $DvtMapLayer$$, $DvtMapCustomAreaLayer$$, $DvtCustomDataItem$$, $DvtThematicMapKeyboardHandler$$.source, $DvtThematicMapKeyboardHandler$$.sourceSelected, $DvtThematicMapKeyboardHandler$$.sourceHover, $DvtThematicMapKeyboardHandler$$.sourceHoverSelected) : ($DvtMapLinkPeer$$ = $DvtThematicMapKeyboardHandler$$.shape ? $DvtThematicMapKeyboardHandler$$.shape : 
    this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.shape, $DvtMapLayer$$ = new $dvt$$12$$.$SimpleMarker$(this.$_tmap$.$getCtx$(), $DvtMapLinkPeer$$, this.$_tmap$.$_skinName$, $DvtMapAreaLayer$$.x, $DvtMapAreaLayer$$.y, $DvtMapLayer$$, $DvtMapCustomAreaLayer$$, $DvtCustomDataItem$$));
    ($DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$.rotation) && $DvtMapLayer$$.$setRotation$($DvtMapCustomAreaLayer$$ * Math.PI / 180);
    $DvtMapDataLayer$$ && $DvtThematicMapControlPanel$$.$setLabelRendered$($DvtThematicMapKeyboardHandler$$.location, !1);
    this.$_styleDisplayable$($DvtThematicMapKeyboardHandler$$, $DvtMapLayer$$);
    $DvtThematicMapControlPanel$$ = this.$_createLabel$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapLayer$$, $DvtMapDataLayer$$);
    return new $DvtMapObjPeer$$($DvtThematicMapKeyboardHandler$$, $DvtThematicMapEventManager$$, $DvtMapLayer$$, $DvtThematicMapControlPanel$$, $DvtMapAreaLayer$$);
  };
  $DvtThematicMapJsonParser$$.prototype.$_createImage$ = function $$DvtThematicMapJsonParser$$$$$_createImage$$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    var $DvtMapCustomAreaLayer$$ = $DvtThematicMapJsonParser$$.$getCenter$($DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$.location, $DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapKeyboardHandler$$.y);
    if (!$DvtMapCustomAreaLayer$$) {
      return null;
    }
    var $DvtMapAreaLayer$$ = new $dvt$$12$$.Image(this.$_tmap$.$getCtx$(), $DvtThematicMapKeyboardHandler$$.url), $DvtMapLayer$$ = $DvtThematicMapKeyboardHandler$$.width, $DvtCustomDataItem$$ = $DvtThematicMapKeyboardHandler$$.height;
    null != $DvtMapLayer$$ && null != $DvtCustomDataItem$$ && ($DvtMapAreaLayer$$.$setX$($DvtMapCustomAreaLayer$$.x - $DvtMapLayer$$ / 2), $DvtMapAreaLayer$$.$setY$($DvtMapCustomAreaLayer$$.y - $DvtCustomDataItem$$ / 2), $DvtMapAreaLayer$$.$setWidth$($DvtMapLayer$$), $DvtMapAreaLayer$$.$setHeight$($DvtCustomDataItem$$));
    $DvtMapDataLayer$$ && $DvtThematicMapControlPanel$$.$setLabelRendered$($DvtThematicMapKeyboardHandler$$.location, !1);
    var $DvtMapLinkPeer$$ = new $DvtMapObjPeer$$($DvtThematicMapKeyboardHandler$$, $DvtThematicMapEventManager$$, $DvtMapAreaLayer$$, null, $DvtMapCustomAreaLayer$$);
    $DvtMapLayer$$ && $DvtCustomDataItem$$ || $dvt$$12$$.$ImageLoader$.$loadImage$(this.$_tmap$.$getCtx$(), $DvtThematicMapKeyboardHandler$$.url, function($dvt$$12$$) {
      $dvt$$12$$ && $dvt$$12$$.width && $dvt$$12$$.height && ($DvtMapAreaLayer$$.$setWidth$($dvt$$12$$.width), $DvtMapAreaLayer$$.$setHeight$($dvt$$12$$.height), $DvtMapAreaLayer$$.$setX$($DvtMapCustomAreaLayer$$.x - $dvt$$12$$.width / 2), $DvtMapAreaLayer$$.$setY$($DvtMapCustomAreaLayer$$.y - $dvt$$12$$.height / 2), $DvtMapLinkPeer$$.$__recenter$());
    });
    return $DvtMapLinkPeer$$;
  };
  $DvtThematicMapJsonParser$$.prototype.$_createCustomDataItem$ = function $$DvtThematicMapJsonParser$$$$$_createCustomDataItem$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    var $DvtMapCustomAreaLayer$$ = $DvtThematicMapJsonParser$$.$getCenter$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$.location, $DvtThematicMapEventManager$$.x, $DvtThematicMapEventManager$$.y);
    if (!$DvtMapCustomAreaLayer$$) {
      return null;
    }
    $DvtMapDataLayer$$ && $dvt$$12$$.$setLabelRendered$($DvtThematicMapEventManager$$.location, !1);
    $dvt$$12$$ = new $DvtCustomDataItem$$(this.$_tmap$.$getCtx$(), $DvtThematicMapKeyboardHandler$$, this.$_tmap$.$_styleDefaults$.dataAreaDefaults);
    return new $DvtMapObjPeer$$($DvtThematicMapEventManager$$, $DvtThematicMapControlPanel$$, $dvt$$12$$, null, $DvtMapCustomAreaLayer$$);
  };
  $DvtThematicMapJsonParser$$.prototype.$_createLink$ = function $$DvtThematicMapJsonParser$$$$$_createLink$$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$) {
    var $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapEventManager$$.startLocation, $DvtMapDataLayer$$ = $DvtThematicMapEventManager$$.endLocation, $DvtMapCustomAreaLayer$$, $DvtMapAreaLayer$$;
    if ($DvtThematicMapKeyboardHandler$$.id) {
      for (var $DvtMapLayer$$ = $DvtThematicMapControlPanel$$.$_dataMarkerCollection$, $DvtCustomDataItem$$ = 0;$DvtCustomDataItem$$ < $DvtMapLayer$$.length;$DvtCustomDataItem$$++) {
        var $DvtMapArea$$ = $DvtMapLayer$$[$DvtCustomDataItem$$];
        if ($DvtMapArea$$ && $DvtMapArea$$.getId() == $DvtThematicMapKeyboardHandler$$.id) {
          $DvtMapAreaLayer$$ = $DvtMapArea$$;
          $DvtMapCustomAreaLayer$$ = $DvtMapArea$$.$getCenter$();
          break;
        }
      }
      if (!$DvtMapAreaLayer$$) {
        for ($DvtMapLayer$$ = $DvtThematicMapControlPanel$$.$_dataAreaCollection$, $DvtCustomDataItem$$ = 0;$DvtCustomDataItem$$ < $DvtMapLayer$$.length;$DvtCustomDataItem$$++) {
          if (($DvtMapArea$$ = $DvtMapLayer$$[$DvtCustomDataItem$$]) && $DvtMapArea$$.getId() == $DvtThematicMapKeyboardHandler$$.id) {
            $DvtMapAreaLayer$$ = $DvtMapArea$$;
            $DvtMapCustomAreaLayer$$ = this.$_getPtFromLocation$($DvtThematicMapControlPanel$$, {location:$DvtMapArea$$.$getLocation$()});
            break;
          }
        }
      }
    } else {
      $DvtMapCustomAreaLayer$$ = this.$_getPtFromLocation$($DvtThematicMapControlPanel$$, $DvtThematicMapKeyboardHandler$$);
    }
    var $DvtMapObjPeer$$, $DvtThematicMapAutomation$$;
    if ($DvtMapDataLayer$$.id) {
      $DvtMapLayer$$ = $DvtThematicMapControlPanel$$.$_dataMarkerCollection$;
      for ($DvtCustomDataItem$$ = 0;$DvtCustomDataItem$$ < $DvtMapLayer$$.length;$DvtCustomDataItem$$++) {
        if (($DvtMapArea$$ = $DvtMapLayer$$[$DvtCustomDataItem$$]) && $DvtMapArea$$.getId() == $DvtMapDataLayer$$.id) {
          $DvtThematicMapAutomation$$ = $DvtMapArea$$;
          $DvtMapObjPeer$$ = $DvtMapArea$$.$getCenter$();
          break;
        }
      }
      if (!$DvtThematicMapAutomation$$) {
        for ($DvtMapLayer$$ = $DvtThematicMapControlPanel$$.$_dataAreaCollection$, $DvtCustomDataItem$$ = 0;$DvtCustomDataItem$$ < $DvtMapLayer$$.length;$DvtCustomDataItem$$++) {
          if (($DvtMapArea$$ = $DvtMapLayer$$[$DvtCustomDataItem$$]) && $DvtMapArea$$.getId() == $DvtMapDataLayer$$.id) {
            $DvtThematicMapAutomation$$ = $DvtMapArea$$;
            $DvtMapObjPeer$$ = this.$_getPtFromLocation$($DvtThematicMapControlPanel$$, {location:$DvtMapArea$$.$getLocation$()});
            break;
          }
        }
      }
    } else {
      $DvtMapObjPeer$$ = this.$_getPtFromLocation$($DvtThematicMapControlPanel$$, $DvtMapDataLayer$$);
    }
    if (!$DvtMapObjPeer$$ || !$DvtMapCustomAreaLayer$$) {
      return null;
    }
    $DvtThematicMapKeyboardHandler$$ = new $dvt$$12$$.$Path$(this.$_tmap$.$getCtx$(), $DvtThematicMapJsonParser$$.$calcCurve$($DvtThematicMapControlPanel$$, $DvtMapCustomAreaLayer$$, $DvtMapObjPeer$$, $DvtMapCustomAreaLayer$$, $DvtMapObjPeer$$));
    $DvtThematicMapKeyboardHandler$$.$setFill$(null);
    var $DvtCustomDataItem$$ = this.$_tmap$.$_styleDefaults$.linkDefaults, $DvtMapAreaPeer$$ = $DvtThematicMapEventManager$$.color;
    $DvtMapAreaPeer$$ || ($DvtMapAreaPeer$$ = $DvtCustomDataItem$$.color);
    ($DvtMapDataLayer$$ = $DvtThematicMapEventManager$$.width) || ($DvtMapDataLayer$$ = $DvtCustomDataItem$$.width);
    $DvtMapLayer$$ = new $dvt$$12$$.$SolidStroke$($DvtMapAreaPeer$$, 1, $DvtMapDataLayer$$);
    $DvtMapLayer$$.$setFixedWidth$(!0);
    $DvtThematicMapKeyboardHandler$$.$setStroke$($DvtMapLayer$$);
    var $DvtMapArea$$ = $DvtCustomDataItem$$._hoverColor, $DvtDrillablePath$$ = $DvtCustomDataItem$$._selectedColor, $DvtCustomDataItem$$ = new $dvt$$12$$.$SolidStroke$($DvtMapArea$$, 1, $DvtMapDataLayer$$), $DvtMapLayer$$ = new $dvt$$12$$.$SolidStroke$($DvtMapAreaPeer$$, 1, $DvtMapDataLayer$$ + 2), $DvtMapAreaPeer$$ = new $dvt$$12$$.$SolidStroke$($DvtMapAreaPeer$$, 1, $DvtMapDataLayer$$), $DvtMapLabel$$ = new $dvt$$12$$.$SolidStroke$($DvtDrillablePath$$, 1, $DvtMapDataLayer$$ + 2), $DvtMapArea$$ = 
    new $dvt$$12$$.$SolidStroke$($DvtMapArea$$, 1, $DvtMapDataLayer$$), $DvtMapDataLayer$$ = new $dvt$$12$$.$SolidStroke$($DvtDrillablePath$$, 1, $DvtMapDataLayer$$ + 2);
    $DvtThematicMapKeyboardHandler$$.$setHoverStroke$($DvtCustomDataItem$$, $DvtMapLayer$$).$setSelectedStroke$($DvtMapAreaPeer$$, $DvtMapLabel$$).$setSelectedHoverStroke$($DvtMapArea$$, $DvtMapDataLayer$$);
    return new $DvtMapLinkPeer$$($DvtThematicMapEventManager$$, $DvtThematicMapControlPanel$$, $DvtThematicMapKeyboardHandler$$, $DvtMapCustomAreaLayer$$, $DvtMapObjPeer$$, $DvtMapAreaLayer$$, $DvtThematicMapAutomation$$);
  };
  $DvtThematicMapJsonParser$$.prototype.$_getPtFromLocation$ = function $$DvtThematicMapJsonParser$$$$$_getPtFromLocation$$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$) {
    var $DvtThematicMapKeyboardHandler$$ = this.$_tmap$.$getOptions$().mapProvider;
    return $DvtThematicMapKeyboardHandler$$ && null != $DvtThematicMapKeyboardHandler$$.geo ? new $dvt$$12$$.$Point$($DvtThematicMapEventManager$$.x, -$DvtThematicMapEventManager$$.y) : $DvtThematicMapJsonParser$$.$getCenter$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$.location, $DvtThematicMapEventManager$$.x, $DvtThematicMapEventManager$$.y);
  };
  $DvtThematicMapJsonParser$$.prototype.$_createLabel$ = function $$DvtThematicMapJsonParser$$$$$_createLabel$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    var $DvtMapCustomAreaLayer$$ = $DvtThematicMapEventManager$$.location, $DvtMapAreaLayer$$ = $DvtThematicMapEventManager$$.label, $DvtMapLayer$$ = $DvtMapAreaLayer$$ ? "on" : "off";
    $DvtMapDataLayer$$ && ($DvtMapLayer$$ = $DvtThematicMapControlPanel$$.$getLabelDisplay$());
    $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapKeyboardHandler$$ instanceof $dvt$$12$$.$Path$;
    !$DvtMapAreaLayer$$ && $DvtMapDataLayer$$ && ($DvtThematicMapKeyboardHandler$$ && "off" != $DvtMapLayer$$ || !$DvtThematicMapKeyboardHandler$$ && "on" == $DvtMapLayer$$) && ($DvtMapAreaLayer$$ = "long" == $DvtThematicMapControlPanel$$.$_labelType$ ? $DvtThematicMapControlPanel$$.$getLongAreaName$($DvtMapCustomAreaLayer$$) : $DvtThematicMapControlPanel$$.$getShortAreaName$($DvtMapCustomAreaLayer$$));
    if ($DvtMapAreaLayer$$) {
      var $DvtCustomDataItem$$ = this.$_tmap$.$getCtx$(), $DvtCustomDataItem$$ = $DvtThematicMapKeyboardHandler$$ ? new $DvtMapLabel$$($DvtCustomDataItem$$, $DvtMapAreaLayer$$, $DvtThematicMapControlPanel$$.$getLabelInfoForArea$ ? $DvtThematicMapControlPanel$$.$getLabelInfoForArea$($DvtMapCustomAreaLayer$$) : null, $DvtMapLayer$$, $DvtThematicMapJsonParser$$.$_dataLabelLayer$, this.$_tmap$.$_bSupportsVectorEffects$) : new $dvt$$12$$.$OutputText$($DvtCustomDataItem$$, $DvtMapAreaLayer$$, 0, 0);
      $DvtThematicMapJsonParser$$ = new $dvt$$12$$.$CSSStyle$;
      $DvtThematicMapKeyboardHandler$$ && $DvtThematicMapJsonParser$$.$merge$($DvtThematicMapControlPanel$$.$getLayerCSSStyle$());
      $DvtThematicMapEventManager$$.labelStyle && $DvtThematicMapJsonParser$$.$parseInlineStyle$($DvtThematicMapEventManager$$.labelStyle);
      $DvtThematicMapControlPanel$$ = $DvtThematicMapJsonParser$$.$getStyle$($dvt$$12$$.$CSSStyle$.$COLOR$);
      $DvtThematicMapJsonParser$$.$setStyle$($dvt$$12$$.$CSSStyle$.$COLOR$, null);
      $DvtCustomDataItem$$.$setCSSStyle$($DvtThematicMapJsonParser$$);
      $DvtThematicMapEventManager$$.color && $DvtCustomDataItem$$ instanceof $DvtMapLabel$$ && ($dvt$$12$$.$Agent$.$isHighContrast$() || !$DvtThematicMapControlPanel$$) && ($DvtThematicMapControlPanel$$ = $dvt$$12$$.$ColorUtils$.$getContrastingTextColor$($DvtThematicMapEventManager$$.color));
      $DvtThematicMapControlPanel$$ && $DvtCustomDataItem$$.$setSolidFill$($DvtThematicMapControlPanel$$);
    }
    return $DvtCustomDataItem$$;
  };
  $DvtThematicMapJsonParser$$.prototype.$_styleDisplayable$ = function $$DvtThematicMapJsonParser$$$$$_styleDisplayable$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$.pattern, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$.color, $DvtMapDataLayer$$ = $dvt$$12$$.$Agent$.$isTouchDevice$() || this.$_tmap$.$_skinName$ == $dvt$$12$$.$CSSStyle$.$SKIN_ALTA$ ? "none" : $DvtThematicMapControlPanel$$.visualEffects;
    if ($DvtThematicMapJsonParser$$ instanceof $dvt$$12$$.$SimpleMarker$) {
      if ("none" != $DvtThematicMapControlPanel$$.borderStyle) {
        var $DvtMapCustomAreaLayer$$ = $DvtThematicMapControlPanel$$.borderWidth;
        "string" == typeof $DvtMapCustomAreaLayer$$ && ($DvtMapCustomAreaLayer$$ = "px" == $DvtMapCustomAreaLayer$$.slice(-2) ? parseFloat($DvtThematicMapControlPanel$$.borderWidth.slice(0, -2)) : parseFloat($DvtThematicMapControlPanel$$.borderWidth));
        var $DvtMapAreaLayer$$ = new $dvt$$12$$.$SolidStroke$($DvtThematicMapControlPanel$$.borderColor, 1, $DvtMapCustomAreaLayer$$);
        this.$_tmap$.$_isMarkerZoomBehaviorFixed$ || $DvtMapAreaLayer$$.$setFixedWidth$(!0);
        $DvtMapAreaLayer$$.$setType$($dvt$$12$$.$Stroke$.$convertTypeString$($DvtThematicMapControlPanel$$.borderStyle));
        $DvtThematicMapJsonParser$$.$setStroke$($DvtMapAreaLayer$$);
      }
      $DvtMapCustomAreaLayer$$ = $DvtThematicMapControlPanel$$.opacity;
      "none" != $DvtMapDataLayer$$ ? $DvtThematicMapJsonParser$$.$setFill$(new $dvt$$12$$.$MarkerGradient$.$createMarkerGradient$($DvtThematicMapKeyboardHandler$$, $DvtThematicMapJsonParser$$, $DvtMapCustomAreaLayer$$)) : $DvtThematicMapEventManager$$ ? $DvtThematicMapJsonParser$$.$setFill$(new $dvt$$12$$.$PatternFill$($DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, "#FFFFFF")) : $DvtThematicMapKeyboardHandler$$ && $DvtThematicMapJsonParser$$.$setSolidFill$($DvtThematicMapKeyboardHandler$$, 
      $DvtMapCustomAreaLayer$$);
    } else {
      if ($DvtThematicMapJsonParser$$ instanceof $dvt$$12$$.$Path$) {
        if ($DvtMapDataLayer$$ = $DvtThematicMapControlPanel$$.borderColor) {
          $DvtMapAreaLayer$$ = new $dvt$$12$$.$SolidStroke$($DvtMapDataLayer$$), this.$_tmap$.$_bSupportsVectorEffects$ && $DvtMapAreaLayer$$.$setFixedWidth$(!0), $DvtThematicMapJsonParser$$.$setStroke$($DvtMapAreaLayer$$);
        }
        $DvtThematicMapEventManager$$ ? $DvtThematicMapJsonParser$$.$savePatternFill$(new $dvt$$12$$.$PatternFill$($DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, "#FFFFFF")) : $DvtThematicMapJsonParser$$.$setSolidFill$($DvtThematicMapKeyboardHandler$$, $DvtMapCustomAreaLayer$$);
      }
    }
  };
  $DvtThematicMapJsonParser$$.$getCenter$ = function $$DvtThematicMapJsonParser$$$$getCenter$$($dvt$$12$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    var $DvtThematicMapKeyboardHandler$$ = $dvt$$12$$.$_tmap$.$_mapName$;
    return $DvtThematicMapControlPanel$$ ? (($dvt$$12$$ = $DvtBaseMapManager$$.$getAreaCenter$($DvtThematicMapKeyboardHandler$$, $dvt$$12$$.$_parentLayer$.$LayerName$, $DvtThematicMapControlPanel$$)) || ($dvt$$12$$ = $DvtBaseMapManager$$.$getCityCoordinates$($DvtThematicMapKeyboardHandler$$, $DvtThematicMapControlPanel$$)), $dvt$$12$$) : $DvtThematicMapProjections$$.$project$($DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
  };
  $DvtThematicMapJsonParser$$.prototype.$_getShowPopupBehaviors$ = function $$DvtThematicMapJsonParser$$$$$_getShowPopupBehaviors$$($DvtThematicMapControlPanel$$) {
    for (var $DvtThematicMapJsonParser$$ = [], $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapEventManager$$++) {
      $DvtThematicMapJsonParser$$.push(new $dvt$$12$$.$ShowPopupBehavior$($DvtThematicMapControlPanel$$[$DvtThematicMapEventManager$$].popupId, $DvtThematicMapControlPanel$$[$DvtThematicMapEventManager$$].triggerType, null, $DvtThematicMapControlPanel$$[$DvtThematicMapEventManager$$].align));
    }
    return $DvtThematicMapJsonParser$$;
  };
  $DvtThematicMapJsonParser$$.$_calcBubbleSizes$ = function $$DvtThematicMapJsonParser$$$$_calcBubbleSizes$$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$) {
    for (var $DvtThematicMapKeyboardHandler$$ = -Infinity, $DvtMapDataLayer$$ = Infinity, $DvtMapCustomAreaLayer$$ = 0;$DvtMapCustomAreaLayer$$ < $DvtThematicMapEventManager$$.length;$DvtMapCustomAreaLayer$$++) {
      var $DvtMapAreaLayer$$ = $DvtThematicMapEventManager$$[$DvtMapCustomAreaLayer$$].value;
      null == $DvtMapAreaLayer$$ || 0 >= $DvtMapAreaLayer$$ || ($DvtThematicMapKeyboardHandler$$ = Math.max($DvtThematicMapKeyboardHandler$$, $DvtMapAreaLayer$$), $DvtMapDataLayer$$ = Math.min($DvtMapDataLayer$$, $DvtMapAreaLayer$$));
    }
    if (Infinity !== $DvtMapDataLayer$$) {
      var $DvtMapAreaLayer$$ = 2 * $DvtThematicMapJsonParser$$.$_PZC_PADDING$, $DvtMapCustomAreaLayer$$ = $DvtThematicMapControlPanel$$.getWidth() - $DvtMapAreaLayer$$, $DvtMapAreaLayer$$ = $DvtThematicMapControlPanel$$.getHeight() - $DvtMapAreaLayer$$, $DvtMapLayer$$ = $DvtMapCustomAreaLayer$$ / $DvtMapAreaLayer$$;
      1.3 > $DvtMapLayer$$ ? $DvtMapAreaLayer$$ = 2 * $DvtMapCustomAreaLayer$$ / 3 : 1.7 < $DvtMapLayer$$ && ($DvtMapCustomAreaLayer$$ = 1.5 * $DvtMapAreaLayer$$);
      $DvtMapLayer$$ = $DvtThematicMapJsonParser$$.$_MAX_MARKER_SIZE_RATIO$ * Math.min($DvtMapCustomAreaLayer$$, $DvtMapAreaLayer$$);
      for ($DvtMapCustomAreaLayer$$ = 0;$DvtMapCustomAreaLayer$$ < $DvtThematicMapEventManager$$.length;$DvtMapCustomAreaLayer$$++) {
        $DvtMapAreaLayer$$ = $DvtThematicMapEventManager$$[$DvtMapCustomAreaLayer$$].value, $DvtThematicMapEventManager$$[$DvtMapCustomAreaLayer$$]._size = null == $DvtMapAreaLayer$$ || 0 >= $DvtMapAreaLayer$$ ? 0 : $dvt$$12$$.$LayoutUtils$.$getBubbleSize$($DvtMapAreaLayer$$, $DvtMapDataLayer$$, $DvtThematicMapKeyboardHandler$$, $DvtThematicMapJsonParser$$.$_MIN_MARKER_SIZE$, $DvtMapLayer$$);
      }
    }
  };
  $DvtThematicMapJsonParser$$.$calcCurve$ = function $$DvtThematicMapJsonParser$$$$calcCurve$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    var $DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$.x, $DvtMapAreaLayer$$ = $DvtThematicMapKeyboardHandler$$.y;
    $DvtThematicMapKeyboardHandler$$ = $DvtMapDataLayer$$.x;
    $DvtMapDataLayer$$ = $DvtMapDataLayer$$.y;
    var $DvtMapLayer$$ = $DvtThematicMapControlPanel$$.$_tmap$, $DvtCustomDataItem$$ = $dvt$$12$$.$PathUtils$.moveTo($DvtMapCustomAreaLayer$$, $DvtMapAreaLayer$$);
    $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.$trackLink$($DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
    $DvtThematicMapEventManager$$ = Math.min($DvtMapLayer$$.getWidth(), $DvtMapLayer$$.getHeight()) / 35;
    if (0 === $DvtThematicMapKeyboardHandler$$ - $DvtMapCustomAreaLayer$$ || 0 === $DvtMapDataLayer$$ - $DvtMapAreaLayer$$) {
      var $DvtMapLinkPeer$$;
      1 < $DvtThematicMapJsonParser$$ ? ($DvtThematicMapEventManager$$ *= $DvtThematicMapJsonParser$$ - 1, 0 === $DvtThematicMapKeyboardHandler$$ - $DvtMapCustomAreaLayer$$ ? ($DvtMapLayer$$ = .3 * Math.abs($DvtMapAreaLayer$$ - $DvtMapDataLayer$$), $DvtThematicMapControlPanel$$ = $DvtMapCustomAreaLayer$$ + $DvtThematicMapEventManager$$, $DvtThematicMapJsonParser$$ = $DvtMapAreaLayer$$ > $DvtMapDataLayer$$ ? $DvtMapAreaLayer$$ - $DvtMapLayer$$ : $DvtMapAreaLayer$$ + $DvtMapLayer$$, $DvtMapLinkPeer$$ = 
      $DvtThematicMapControlPanel$$, $DvtMapCustomAreaLayer$$ = $DvtMapDataLayer$$ > $DvtMapAreaLayer$$ ? $DvtMapDataLayer$$ - $DvtMapLayer$$ : $DvtMapDataLayer$$ + $DvtMapLayer$$) : ($DvtMapLayer$$ = .3 * Math.abs($DvtMapCustomAreaLayer$$ - $DvtThematicMapKeyboardHandler$$), $DvtThematicMapControlPanel$$ = $DvtMapCustomAreaLayer$$ > $DvtThematicMapKeyboardHandler$$ ? $DvtMapCustomAreaLayer$$ - $DvtMapLayer$$ : $DvtMapCustomAreaLayer$$ + $DvtMapLayer$$, $DvtThematicMapJsonParser$$ = $DvtMapAreaLayer$$ - 
      $DvtThematicMapEventManager$$, $DvtMapLinkPeer$$ = $DvtThematicMapKeyboardHandler$$ > $DvtMapCustomAreaLayer$$ ? $DvtThematicMapKeyboardHandler$$ - $DvtMapLayer$$ : $DvtThematicMapKeyboardHandler$$ + $DvtMapLayer$$, $DvtMapCustomAreaLayer$$ = $DvtThematicMapJsonParser$$), $DvtCustomDataItem$$ += $dvt$$12$$.$PathUtils$.$cubicTo$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtMapLinkPeer$$, $DvtMapCustomAreaLayer$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$)) : $DvtCustomDataItem$$ += 
      $dvt$$12$$.$PathUtils$.lineTo($DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$);
    } else {
      $DvtMapLayer$$ = Math.sqrt(Math.pow($DvtThematicMapKeyboardHandler$$ - $DvtMapCustomAreaLayer$$, 2), Math.pow($DvtMapDataLayer$$ - $DvtMapAreaLayer$$, 2));
      $DvtThematicMapControlPanel$$ = $DvtMapLayer$$ / 4;
      1 < $DvtThematicMapJsonParser$$ && ($DvtThematicMapControlPanel$$ += ($DvtThematicMapJsonParser$$ - 1) * $DvtThematicMapEventManager$$);
      $DvtThematicMapJsonParser$$ = ($DvtMapDataLayer$$ - $DvtMapAreaLayer$$) / ($DvtThematicMapKeyboardHandler$$ - $DvtMapCustomAreaLayer$$);
      $DvtThematicMapEventManager$$ = -1 / $DvtThematicMapJsonParser$$;
      0 < $DvtThematicMapEventManager$$ && ($DvtThematicMapControlPanel$$ *= -1);
      $DvtMapLinkPeer$$ = .3 * $DvtMapLayer$$ / Math.sqrt(1 + Math.pow($DvtThematicMapJsonParser$$, 2));
      var $DvtMapArea$$ = 0 < $DvtThematicMapKeyboardHandler$$ - $DvtMapCustomAreaLayer$$, $DvtMapLayer$$ = $DvtMapCustomAreaLayer$$ + ($DvtMapArea$$ ? 1 : -1) * $DvtMapLinkPeer$$, $DvtMapArea$$ = $DvtThematicMapKeyboardHandler$$ + ($DvtMapArea$$ ? -1 : 1) * $DvtMapLinkPeer$$;
      $DvtMapLinkPeer$$ = $DvtThematicMapControlPanel$$ / Math.sqrt(1 + Math.pow($DvtThematicMapEventManager$$, 2));
      $DvtThematicMapControlPanel$$ = $DvtMapLayer$$ + $DvtMapLinkPeer$$;
      $DvtMapLinkPeer$$ = $DvtMapArea$$ + $DvtMapLinkPeer$$;
      $DvtCustomDataItem$$ += $dvt$$12$$.$PathUtils$.$cubicTo$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$ * ($DvtThematicMapControlPanel$$ - $DvtMapLayer$$) + ($DvtThematicMapJsonParser$$ * ($DvtMapLayer$$ - $DvtMapCustomAreaLayer$$) + $DvtMapAreaLayer$$), $DvtMapLinkPeer$$, $DvtThematicMapEventManager$$ * ($DvtMapLinkPeer$$ - $DvtMapArea$$) + ($DvtThematicMapJsonParser$$ * ($DvtMapArea$$ - $DvtThematicMapKeyboardHandler$$) + $DvtMapDataLayer$$), $DvtThematicMapKeyboardHandler$$, 
      $DvtMapDataLayer$$);
    }
    return $DvtCustomDataItem$$;
  };
  var $DvtThematicMapProjections$$ = {};
  $dvt$$12$$.$Obj$.$createSubclass$($DvtThematicMapProjections$$, $dvt$$12$$.$Obj$);
  $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$ = new $dvt$$12$$.$Rectangle$(0, 0, 800, 500);
  $DvtThematicMapProjections$$.$_RADIUS$ = 6378206.4;
  $DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$ = new $dvt$$12$$.$Rectangle$(500, 200, 200, 200);
  $DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$ = new $dvt$$12$$.$Rectangle$(163, -49, 17, 17);
  $DvtThematicMapProjections$$.$_AFRICA_BOUNDS$ = new $dvt$$12$$.$Rectangle$(-17.379205428479874, -37.201510854305546, 68.66391442808313, 77.50071544582713);
  $DvtThematicMapProjections$$.$_ASIA_BOUNDS$ = new $dvt$$12$$.$Rectangle$(-.8436866097568272, -.7626456732012923, 1.8336308036296942, 1.5748427214611724);
  $DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$ = new $dvt$$12$$.$Rectangle$(113.29667079927977, -52.89550592498755, 65.25257389065216, 42.123114617504626);
  $DvtThematicMapProjections$$.$_EUROPE_BOUNDS$ = new $dvt$$12$$.$Rectangle$(-.47944476148667076, -.0014669405958800579, .7364925893845453, .6293972741802124);
  $DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$ = new $dvt$$12$$.$Rectangle$(-.6154469465354344, -.24589767758847714, 1.2448236795108683, 1.2631535127174947);
  $DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$ = new $dvt$$12$$.$Rectangle$(-80.60817722658722, -60.796273249672765, 46.608687602908056, 66.96595767361796);
  $DvtThematicMapProjections$$.$_APAC_BOUNDS$ = new $dvt$$12$$.$Rectangle$(68.20516856593524, -52.89892708045518, 111.65739821771903, 116.55460214469134);
  $DvtThematicMapProjections$$.$_EMEA_BOUNDS$ = new $dvt$$12$$.$Rectangle$(-24.543831069368586, -37.202500659225905, 204.54283106936856, 164.9634493690208);
  $DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$ = new $dvt$$12$$.$Rectangle$(-117.12451221229134, -54.95921623126266, 82.33223251442891, 87.67786623127876);
  $DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$ = new $dvt$$12$$.$Rectangle$(-.6154656300926513, .0507209798775865, 1.0153104799231851, .966537441082997);
  $DvtThematicMapProjections$$.$_WORLD_BOUNDS$ = new $dvt$$12$$.$Rectangle$(-171.9, -62.6, 349.8, 150.8);
  $DvtThematicMapProjections$$.$_ALASKA1_RECT$ = new $dvt$$12$$.$Rectangle$(172, 51, 8, 3);
  $DvtThematicMapProjections$$.$_ALASKA2_RECT$ = new $dvt$$12$$.$Rectangle$(-180, 51, 51, 21);
  $DvtThematicMapProjections$$.$_HAWAII_RECT$ = new $dvt$$12$$.$Rectangle$(-178.5, 18.9, 35, 11);
  $DvtThematicMapProjections$$.$_USA_RECT$ = new $dvt$$12$$.$Rectangle$(-124.8, 24.4, 58, 25.5);
  $DvtThematicMapProjections$$.$_ALASKA_BOUNDS$ = new $dvt$$12$$.$Rectangle$(-187.5517578125, 59.82610321044922, 57.562225341796875, 43.83738708496094);
  $DvtThematicMapProjections$$.$_HAWAII_BOUNDS$ = new $dvt$$12$$.$Rectangle$(-160.23606872558594, 18.91549301147461, 5.4374847412109375, 3.3189010620117188);
  $DvtThematicMapProjections$$.$_USA_BOUNDS$ = new $dvt$$12$$.$Rectangle$(-2386803.25, -1183550.5, 4514111, 2908402);
  $DvtThematicMapProjections$$.$_HAWAII_WINDOW$ = new $dvt$$12$$.$Rectangle$(165, 400, 100, 100);
  $DvtThematicMapProjections$$.$_ALASKA_WINDOW$ = new $dvt$$12$$.$Rectangle$(-75, 350, 240, 150);
  $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$ = [[1, 0], [.9986, .0314], [.9954, .0629], [.99, .0943], [.9822, .1258], [.973, .1572], [.96, .1887], [.9427, .2201], [.9216, .2515], [.8962, .2826], [.8679, .3132], [.835, .3433], [.7986, .3726], [.7597, .4008], [.6732, .4532], [.6213, .4765], [.5722, .4951], [.5322, .5072]];
  $DvtThematicMapProjections$$.$project$ = function $$DvtThematicMapProjections$$$$project$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    var $DvtThematicMapKeyboardHandler$$;
    switch($DvtThematicMapEventManager$$) {
      case "africa":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, $DvtThematicMapProjections$$.$_getMercatorProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        break;
      case "asia":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_ASIA_BOUNDS$, $DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(40, 95, 20, 60, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$), $DvtThematicMapProjections$$.$toRadians$(5));
        break;
      case "australia":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAustraliaProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
        break;
      case "europe":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, $DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(35, 25, 40, 65, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$), $DvtThematicMapProjections$$.$toRadians$(10));
        break;
      case "northAmerica":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, $DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        break;
      case "southAmerica":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$), $DvtThematicMapProjections$$.$toRadians$(5));
        break;
      case "apac":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_APAC_BOUNDS$, $DvtThematicMapProjections$$.$_getMercatorProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        break;
      case "emea":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_EMEA_BOUNDS$, $DvtThematicMapProjections$$.$_getMercatorProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        break;
      case "latinAmerica":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        break;
      case "usaAndCanada":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, $DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        break;
      case "worldRegions":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getWorldProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
        break;
      case "usa":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getUSAProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
        break;
      case "world":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getWorldProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
    }
    return $DvtThematicMapKeyboardHandler$$ ? new $dvt$$12$$.$Point$(10 * $DvtThematicMapKeyboardHandler$$.x, 10 * $DvtThematicMapKeyboardHandler$$.y) : null;
  };
  $DvtThematicMapProjections$$.$_getUSAProjection$ = function $$DvtThematicMapProjections$$$$_getUSAProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$;
    $DvtThematicMapProjections$$.$_ALASKA1_RECT$.$containsPoint$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) || $DvtThematicMapProjections$$.$_ALASKA2_RECT$.$containsPoint$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) ? ($DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, $DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_applyAffineTransform$($DvtThematicMapEventManager$$, 
    $DvtThematicMapProjections$$.$_getMercatorProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$))) : $DvtThematicMapProjections$$.$_HAWAII_RECT$.$containsPoint$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) ? ($DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, $DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_applyAffineTransform$($DvtThematicMapEventManager$$, 
    new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$))) : $DvtThematicMapProjections$$.$_USA_RECT$.$containsPoint$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) && ($DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_USA_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_applyAffineTransform$($DvtThematicMapEventManager$$, 
    $DvtThematicMapProjections$$.$_getOrthographicProjection$(new $dvt$$12$$.$Point$(-95, 36), $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$)));
    return $DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $DvtThematicMapEventManager$$);
  };
  $DvtThematicMapProjections$$.$_getWorldProjection$ = function $$DvtThematicMapProjections$$$$_getWorldProjection$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_WORLD_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $DvtThematicMapJsonParser$$ = $DvtThematicMapProjections$$.$_applyAffineTransform$($DvtThematicMapJsonParser$$, $DvtThematicMapProjections$$.$_getRobinsonProjection$($dvt$$12$$, $DvtThematicMapControlPanel$$));
    return $DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $DvtThematicMapJsonParser$$);
  };
  $DvtThematicMapProjections$$.$_getAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getAustraliaProjection$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$;
    $DvtThematicMapJsonParser$$ = $DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$.$containsPoint$($dvt$$12$$, $DvtThematicMapControlPanel$$) ? $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, $DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
    $DvtThematicMapJsonParser$$ = $DvtThematicMapProjections$$.$_applyAffineTransform$($DvtThematicMapJsonParser$$, $DvtThematicMapProjections$$.$_getMercatorProjection$($dvt$$12$$, $DvtThematicMapControlPanel$$));
    return $DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $DvtThematicMapJsonParser$$);
  };
  $DvtThematicMapProjections$$.$_getAffineProjection$ = function $$DvtThematicMapProjections$$$$_getAffineProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtThematicMapControlPanel$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapControlPanel$$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
    if ($DvtThematicMapEventManager$$) {
      var $DvtThematicMapKeyboardHandler$$ = new $dvt$$12$$.$Matrix$;
      $DvtThematicMapKeyboardHandler$$.rotate($DvtThematicMapEventManager$$);
      $DvtThematicMapControlPanel$$ = $DvtThematicMapProjections$$.$_concatAffineTransforms$($DvtThematicMapControlPanel$$, $DvtThematicMapKeyboardHandler$$);
    }
    $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.$transformPoint$($DvtThematicMapJsonParser$$);
    return $DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $DvtThematicMapJsonParser$$);
  };
  $DvtThematicMapProjections$$.$_getBoundedTransformedPoint$ = function $$DvtThematicMapProjections$$$$_getBoundedTransformedPoint$$($dvt$$12$$, $DvtThematicMapControlPanel$$) {
    return $DvtThematicMapControlPanel$$ && $dvt$$12$$.$containsPoint$($DvtThematicMapControlPanel$$.x, $DvtThematicMapControlPanel$$.y) ? $DvtThematicMapControlPanel$$ : null;
  };
  $DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getAlbersEqualAreaConicProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$) {
    $DvtThematicMapJsonParser$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapJsonParser$$);
    $DvtThematicMapControlPanel$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapControlPanel$$);
    $DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapEventManager$$);
    $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapKeyboardHandler$$);
    $DvtThematicMapKeyboardHandler$$ = .5 * (Math.sin($DvtThematicMapEventManager$$) + Math.sin($DvtThematicMapKeyboardHandler$$));
    $DvtThematicMapEventManager$$ = Math.pow(Math.cos($DvtThematicMapEventManager$$), 2) + 2 * $DvtThematicMapKeyboardHandler$$ * Math.sin($DvtThematicMapEventManager$$);
    $DvtThematicMapControlPanel$$ = $DvtThematicMapEventManager$$ - 2 * $DvtThematicMapKeyboardHandler$$ * Math.sin($DvtThematicMapControlPanel$$);
    $DvtThematicMapControlPanel$$ = Math.sqrt($DvtThematicMapControlPanel$$) / $DvtThematicMapKeyboardHandler$$;
    $DvtMapDataLayer$$ = $DvtThematicMapKeyboardHandler$$ * ($DvtThematicMapProjections$$.$toRadians$($DvtMapDataLayer$$) - $DvtThematicMapJsonParser$$);
    $DvtMapCustomAreaLayer$$ = $DvtThematicMapEventManager$$ - 2 * $DvtThematicMapKeyboardHandler$$ * Math.sin($DvtThematicMapProjections$$.$toRadians$($DvtMapCustomAreaLayer$$));
    $DvtMapCustomAreaLayer$$ = Math.sqrt($DvtMapCustomAreaLayer$$) / $DvtThematicMapKeyboardHandler$$;
    return new $dvt$$12$$.$Point$($DvtMapCustomAreaLayer$$ * Math.sin($DvtMapDataLayer$$), $DvtThematicMapControlPanel$$ - $DvtMapCustomAreaLayer$$ * Math.cos($DvtMapDataLayer$$));
  };
  $DvtThematicMapProjections$$.$_getMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getMercatorProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    return new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapProjections$$.$toDegrees$(Math.log(Math.tan(.25 * Math.PI + .5 * $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapJsonParser$$)))));
  };
  $DvtThematicMapProjections$$.$_getOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getOrthographicProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtThematicMapJsonParser$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapJsonParser$$);
    $DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapEventManager$$);
    var $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapControlPanel$$.x);
    $DvtThematicMapControlPanel$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapControlPanel$$.y);
    return new $dvt$$12$$.$Point$(Math.cos($DvtThematicMapEventManager$$) * Math.sin($DvtThematicMapJsonParser$$ - $DvtThematicMapKeyboardHandler$$) * $DvtThematicMapProjections$$.$_RADIUS$, (Math.cos($DvtThematicMapControlPanel$$) * Math.sin($DvtThematicMapEventManager$$) - Math.sin($DvtThematicMapControlPanel$$) * Math.cos($DvtThematicMapEventManager$$) * Math.cos($DvtThematicMapJsonParser$$ - $DvtThematicMapKeyboardHandler$$)) * $DvtThematicMapProjections$$.$_RADIUS$);
  };
  $DvtThematicMapProjections$$.$_getRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getRobinsonProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = Math.floor(Math.abs($DvtThematicMapJsonParser$$) / 5);
    $DvtThematicMapEventManager$$ >= $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
    var $DvtThematicMapKeyboardHandler$$ = (Math.abs($DvtThematicMapJsonParser$$) - 5 * $DvtThematicMapEventManager$$) / 5, $DvtMapDataLayer$$ = $DvtThematicMapControlPanel$$ * ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$][0] + $DvtThematicMapKeyboardHandler$$ * ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$ + 1][0] - $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$][0])), $DvtThematicMapEventManager$$ = 
    $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$][1] + $DvtThematicMapKeyboardHandler$$ * ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$ + 1][1] - $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$][1]);
    0 > $DvtThematicMapJsonParser$$ && ($DvtThematicMapEventManager$$ *= -1);
    return new $dvt$$12$$.$Point$($DvtMapDataLayer$$, 180 * $DvtThematicMapEventManager$$);
  };
  $DvtThematicMapProjections$$.$_applyAffineTransform$ = function $$DvtThematicMapProjections$$$$_applyAffineTransform$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    return new $dvt$$12$$.$Point$($DvtThematicMapJsonParser$$.x * $DvtThematicMapControlPanel$$.$_a$ + $DvtThematicMapControlPanel$$.$_tx$, $DvtThematicMapJsonParser$$.y * $DvtThematicMapControlPanel$$.$_d$ + $DvtThematicMapControlPanel$$.$_ty$);
  };
  $DvtThematicMapProjections$$.$_concatAffineTransforms$ = function $$DvtThematicMapProjections$$$$_concatAffineTransforms$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$.$_a$, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$.$_d$;
    return new $dvt$$12$$.$Matrix$($DvtThematicMapJsonParser$$.$_a$ * $DvtThematicMapEventManager$$, $DvtThematicMapJsonParser$$.$_b$ * $DvtThematicMapEventManager$$, $DvtThematicMapJsonParser$$.$_c$ * $DvtThematicMapKeyboardHandler$$, $DvtThematicMapJsonParser$$.$_d$ * $DvtThematicMapKeyboardHandler$$, $DvtThematicMapControlPanel$$.$_tx$ + $DvtThematicMapJsonParser$$.$_tx$ * $DvtThematicMapEventManager$$, $DvtThematicMapControlPanel$$.$_ty$ + $DvtThematicMapJsonParser$$.$_ty$ * $DvtThematicMapKeyboardHandler$$);
  };
  $DvtThematicMapProjections$$.$_getViewPortTransformation$ = function $$DvtThematicMapProjections$$$$_getViewPortTransformation$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = $DvtThematicMapJsonParser$$.x, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapJsonParser$$.y, $DvtMapDataLayer$$ = $DvtThematicMapControlPanel$$.$w$, $DvtMapCustomAreaLayer$$ = $DvtThematicMapControlPanel$$.$h$, $DvtMapAreaLayer$$ = 0, $DvtMapAreaLayer$$ = $DvtThematicMapJsonParser$$.$w$ / $DvtMapDataLayer$$, $DvtMapLayer$$ = $DvtThematicMapJsonParser$$.$h$ / $DvtMapCustomAreaLayer$$, $DvtMapAreaLayer$$ = $DvtMapAreaLayer$$ <= $DvtMapLayer$$ ? $DvtMapAreaLayer$$ : 
    $DvtMapLayer$$, $DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$ - $DvtThematicMapControlPanel$$.x * $DvtMapAreaLayer$$, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapKeyboardHandler$$ + $DvtThematicMapControlPanel$$.y * $DvtMapAreaLayer$$, $DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$ + ($DvtThematicMapJsonParser$$.$w$ - $DvtMapDataLayer$$ * $DvtMapAreaLayer$$) / 2, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapKeyboardHandler$$ + ($DvtThematicMapJsonParser$$.$h$ - 
    ($DvtThematicMapJsonParser$$.$h$ - $DvtMapCustomAreaLayer$$ * $DvtMapAreaLayer$$) / 2);
    return new $dvt$$12$$.$Matrix$($DvtMapAreaLayer$$, 0, 0, -$DvtMapAreaLayer$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
  };
  $DvtThematicMapProjections$$.$toRadians$ = function $$DvtThematicMapProjections$$$$toRadians$$($dvt$$12$$) {
    return Math.PI / 180 * $dvt$$12$$;
  };
  $DvtThematicMapProjections$$.$toDegrees$ = function $$DvtThematicMapProjections$$$$toDegrees$$($dvt$$12$$) {
    return 180 / Math.PI * $dvt$$12$$;
  };
  $DvtThematicMapProjections$$.$inverseProject$ = function $$DvtThematicMapProjections$$$$inverseProject$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    var $DvtThematicMapKeyboardHandler$$;
    $DvtThematicMapControlPanel$$ /= 10;
    $DvtThematicMapJsonParser$$ /= 10;
    switch($DvtThematicMapEventManager$$) {
      case "africa":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseMercatorProjection$($DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapKeyboardHandler$$.y);
        break;
      case "asia":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_ASIA_BOUNDS$, new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$), $DvtThematicMapProjections$$.$toRadians$(5));
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(40, 95, 20, 60, $DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapKeyboardHandler$$.y);
        break;
      case "australia":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAustraliaProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
        break;
      case "europe":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$), $DvtThematicMapProjections$$.$toRadians$(10));
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(35, 25, 40, 65, $DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapKeyboardHandler$$.y);
        break;
      case "northAmerica":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapKeyboardHandler$$.y);
        break;
      case "southAmerica":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$), $DvtThematicMapProjections$$.$toRadians$(5));
        break;
      case "apac":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_APAC_BOUNDS$, new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseMercatorProjection$($DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapKeyboardHandler$$.y);
        break;
      case "emea":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_EMEA_BOUNDS$, new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseMercatorProjection$($DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapKeyboardHandler$$.y);
        break;
      case "latinAmerica":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        break;
      case "usaAndCanada":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapKeyboardHandler$$.y);
        break;
      case "worldRegions":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseWorldProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
        break;
      case "usa":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseUSAProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
        break;
      case "world":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseWorldProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
    }
    return $DvtThematicMapKeyboardHandler$$ ? $DvtThematicMapKeyboardHandler$$ : new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  };
  $DvtThematicMapProjections$$.$_getInverseUSAProjection$ = function $$DvtThematicMapProjections$$$$_getInverseUSAProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$;
    return $DvtThematicMapProjections$$.$_ALASKA_WINDOW$.$containsPoint$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) ? ($DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, $DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $DvtThematicMapEventManager$$.$invert$(), $DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$.$transformPoint$(new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$)), 
    $DvtThematicMapProjections$$.$_getInverseMercatorProjection$($DvtThematicMapEventManager$$.x, $DvtThematicMapEventManager$$.y)) : $DvtThematicMapProjections$$.$_HAWAII_WINDOW$.$containsPoint$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) ? ($DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, $DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $DvtThematicMapEventManager$$.$invert$(), $DvtThematicMapEventManager$$.$transformPoint$(new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, 
    $DvtThematicMapJsonParser$$))) : $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$.$containsPoint$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) ? ($DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_USA_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $DvtThematicMapEventManager$$.$invert$(), $DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$.$transformPoint$(new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, 
    $DvtThematicMapJsonParser$$)), $DvtThematicMapProjections$$.$_getInverseOrthographicProjection$(new $dvt$$12$$.$Point$(-95, 36), $DvtThematicMapEventManager$$.x, $DvtThematicMapEventManager$$.y)) : new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  };
  $DvtThematicMapProjections$$.$_getInverseWorldProjection$ = function $$DvtThematicMapProjections$$$$_getInverseWorldProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_WORLD_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
    $DvtThematicMapEventManager$$.$invert$();
    $DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$.$transformPoint$(new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
    return $DvtThematicMapProjections$$.$_getInverseRobinsonProjection$($DvtThematicMapEventManager$$.x, $DvtThematicMapEventManager$$.y);
  };
  $DvtThematicMapProjections$$.$_getInverseAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAustraliaProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$;
    $DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$.$containsPoint$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) ? $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, $DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
    $DvtThematicMapEventManager$$.$invert$();
    $DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$.$transformPoint$(new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
    return $DvtThematicMapProjections$$.$_getInverseMercatorProjection$($DvtThematicMapEventManager$$.x, $DvtThematicMapEventManager$$.y);
  };
  $DvtThematicMapProjections$$.$_getInverseAffineProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAffineProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtThematicMapControlPanel$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapControlPanel$$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
    if ($DvtThematicMapEventManager$$) {
      var $DvtThematicMapKeyboardHandler$$ = new $dvt$$12$$.$Matrix$;
      $DvtThematicMapKeyboardHandler$$.rotate($DvtThematicMapEventManager$$);
      $DvtThematicMapControlPanel$$ = $DvtThematicMapProjections$$.$_concatAffineTransforms$($DvtThematicMapControlPanel$$, $DvtThematicMapKeyboardHandler$$);
    }
    $DvtThematicMapControlPanel$$.$invert$();
    return $DvtThematicMapControlPanel$$.$transformPoint$($DvtThematicMapJsonParser$$);
  };
  $DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAlbersEqualAreaConicProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$) {
    $DvtThematicMapJsonParser$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapJsonParser$$);
    $DvtThematicMapControlPanel$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapControlPanel$$);
    $DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapEventManager$$);
    $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapKeyboardHandler$$);
    $DvtThematicMapKeyboardHandler$$ = .5 * (Math.sin($DvtThematicMapEventManager$$) + Math.sin($DvtThematicMapKeyboardHandler$$));
    $DvtThematicMapEventManager$$ = Math.pow(Math.cos($DvtThematicMapEventManager$$), 2) + 2 * $DvtThematicMapKeyboardHandler$$ * Math.sin($DvtThematicMapEventManager$$);
    $DvtThematicMapControlPanel$$ = $DvtThematicMapEventManager$$ - 2 * $DvtThematicMapKeyboardHandler$$ * Math.sin($DvtThematicMapControlPanel$$);
    $DvtThematicMapControlPanel$$ = Math.sqrt($DvtThematicMapControlPanel$$) / $DvtThematicMapKeyboardHandler$$;
    var $DvtMapAreaLayer$$ = Math.sqrt($DvtMapDataLayer$$ * $DvtMapDataLayer$$ + ($DvtThematicMapControlPanel$$ - $DvtMapCustomAreaLayer$$) * ($DvtThematicMapControlPanel$$ - $DvtMapCustomAreaLayer$$));
    return new $dvt$$12$$.$Point$($DvtThematicMapProjections$$.$toDegrees$($DvtThematicMapJsonParser$$ + Math.atan($DvtMapDataLayer$$ / ($DvtThematicMapControlPanel$$ - $DvtMapCustomAreaLayer$$)) / $DvtThematicMapKeyboardHandler$$), $DvtThematicMapProjections$$.$toDegrees$(Math.asin(($DvtThematicMapEventManager$$ - $DvtMapAreaLayer$$ * $DvtMapAreaLayer$$ * $DvtThematicMapKeyboardHandler$$ * $DvtThematicMapKeyboardHandler$$) / (2 * $DvtThematicMapKeyboardHandler$$))));
  };
  $DvtThematicMapProjections$$.$_getInverseMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getInverseMercatorProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    return new $dvt$$12$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapProjections$$.$toDegrees$(2 * Math.atan(Math.exp($DvtThematicMapProjections$$.$toRadians$($DvtThematicMapJsonParser$$))) - .5 * Math.PI));
  };
  $DvtThematicMapProjections$$.$_getInverseOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseOrthographicProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtThematicMapJsonParser$$ /= $DvtThematicMapProjections$$.$_RADIUS$;
    $DvtThematicMapEventManager$$ /= $DvtThematicMapProjections$$.$_RADIUS$;
    var $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapControlPanel$$.y), $DvtMapDataLayer$$ = Math.sqrt($DvtThematicMapJsonParser$$ * $DvtThematicMapJsonParser$$ + $DvtThematicMapEventManager$$ * $DvtThematicMapEventManager$$), $DvtMapCustomAreaLayer$$ = Math.asin($DvtMapDataLayer$$);
    return new $dvt$$12$$.$Point$($DvtThematicMapProjections$$.$toDegrees$($DvtThematicMapProjections$$.$toRadians$($DvtThematicMapControlPanel$$.x) + Math.atan($DvtThematicMapJsonParser$$ * Math.sin($DvtMapCustomAreaLayer$$) / ($DvtMapDataLayer$$ * Math.cos($DvtThematicMapKeyboardHandler$$) * Math.cos($DvtMapCustomAreaLayer$$) - $DvtThematicMapEventManager$$ * Math.sin($DvtThematicMapKeyboardHandler$$) * Math.sin($DvtMapCustomAreaLayer$$)))), $DvtThematicMapProjections$$.$toDegrees$(Math.asin(Math.cos($DvtMapCustomAreaLayer$$) * 
    Math.sin($DvtThematicMapKeyboardHandler$$) + $DvtThematicMapEventManager$$ * Math.sin($DvtMapCustomAreaLayer$$) * Math.cos($DvtThematicMapKeyboardHandler$$) / $DvtMapDataLayer$$)));
  };
  $DvtThematicMapProjections$$.$_getInverseRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getInverseRobinsonProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = Math.floor(Math.abs($DvtThematicMapJsonParser$$) / 5);
    $DvtThematicMapEventManager$$ >= $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
    var $DvtThematicMapKeyboardHandler$$ = (Math.abs($DvtThematicMapJsonParser$$ / 180) - $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$][1]) / ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$ + 1][1] - $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$][1]), $DvtMapDataLayer$$ = 5 * $DvtThematicMapKeyboardHandler$$ + 5 * $DvtThematicMapEventManager$$, $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$ / 
    ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$][0] + $DvtThematicMapKeyboardHandler$$ * ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$ + 1][0] - $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$][0]));
    0 > $DvtThematicMapJsonParser$$ && ($DvtMapDataLayer$$ *= -1);
    return new $dvt$$12$$.$Point$($DvtThematicMapEventManager$$, $DvtMapDataLayer$$);
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtThematicMapControlPanel$$, $dvt$$12$$.$ControlPanel$);
  $DvtThematicMapControlPanel$$.prototype.Init = function $$DvtThematicMapControlPanel$$$$Init$($DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$) {
    $DvtThematicMapControlPanel$$.$superclass$.Init.call(this, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
    this.$_drillMode$ = $DvtThematicMapEventManager$$.$_drillMode$;
    this.$_buttonImages$ = $DvtThematicMapEventManager$$.$getResourcesMap$();
    this.$_drillUpCallback$ = $dvt$$12$$.$Obj$.$createCallback$($DvtThematicMapEventManager$$, $DvtThematicMapEventManager$$.$drillUp$);
    this.$_drillDownCallback$ = $dvt$$12$$.$Obj$.$createCallback$($DvtThematicMapEventManager$$, $DvtThematicMapEventManager$$.$drillDown$);
    this.$_resetCallback$ = $dvt$$12$$.$Obj$.$createCallback$($DvtThematicMapEventManager$$, $DvtThematicMapEventManager$$.$resetMap$);
    this.$_drillDownButton$ = this.$_drillUpButton$ = this.$_resetButton$ = null;
    this.$_drillUpButtonEnabled$ = this.$_drillDownButtonEnabled$ = !1;
    this.$_styleMap$ = $DvtThematicMapEventManager$$.$getSubcomponentStyles$();
  };
  $DvtThematicMapControlPanel$$.prototype.$setEnabledDrillDownButton$ = function $$DvtThematicMapControlPanel$$$$$setEnabledDrillDownButton$$($dvt$$12$$) {
    this.$_drillDownButtonEnabled$ = $dvt$$12$$;
    this.$_drillDownButton$ && this.$_drillDownButton$.$setEnabled$($dvt$$12$$);
  };
  $DvtThematicMapControlPanel$$.prototype.$setEnabledDrillUpButton$ = function $$DvtThematicMapControlPanel$$$$$setEnabledDrillUpButton$$($dvt$$12$$) {
    this.$_drillUpButtonEnabled$ = $dvt$$12$$;
    this.$_drillUpButton$ && this.$_drillUpButton$.$setEnabled$($dvt$$12$$);
  };
  $DvtThematicMapControlPanel$$.prototype.$PopulateHorzContentBar$ = function $$DvtThematicMapControlPanel$$$$$PopulateHorzContentBar$$($DvtThematicMapControlPanel$$) {
    if (this.$_drillMode$ && "none" != this.$_drillMode$) {
      var $DvtThematicMapJsonParser$$ = $dvt$$12$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$12$$.$ControlPanel$.$CP_BUTTON_WIDTH$, 0);
      this.$_resetButton$ = $dvt$$12$$.$ButtonLAFUtils$.$createResetButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
      this.$_resetButton$.$setCallback$(this.$_resetCallback$, this);
      this.$_resetButton$.$setTooltip$($dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_RESET"));
      this.$_eventManager$.$associate$(this.$_resetButton$, this.$_resetButton$);
      $DvtThematicMapControlPanel$$.$addChild$(this.$_resetButton$);
      this.$_drillDownButton$ = $dvt$$12$$.$ButtonLAFUtils$.$createDrillDownButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
      this.$_drillDownButton$.$setCallback$(this.$_drillDownCallback$, this);
      this.$_drillDownButton$.$setTooltip$($dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_DRILLDOWN"));
      this.$_eventManager$.$associate$(this.$_drillDownButton$, this.$_drillDownButton$);
      this.$_drillDownButton$.$setTranslateX$($DvtThematicMapJsonParser$$);
      this.$_drillDownButton$.$setEnabled$(this.$_drillDownButtonEnabled$);
      $DvtThematicMapControlPanel$$.$addChild$(this.$_drillDownButton$);
      this.$_drillUpButton$ = $dvt$$12$$.$ButtonLAFUtils$.$createDrillUpButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
      this.$_drillUpButton$.$setCallback$(this.$_drillUpCallback$, this);
      this.$_drillUpButton$.$setTooltip$($dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_DRILLUP"));
      this.$_eventManager$.$associate$(this.$_drillUpButton$, this.$_drillUpButton$);
      this.$_drillUpButton$.$setTranslateX$(2 * $DvtThematicMapJsonParser$$);
      this.$_drillUpButton$.$setEnabled$(this.$_drillUpButtonEnabled$);
      $DvtThematicMapControlPanel$$.$addChild$(this.$_drillUpButton$);
    }
  };
  $DvtThematicMapControlPanel$$.prototype.$getActionDisplayable$ = function $$DvtThematicMapControlPanel$$$$$getActionDisplayable$$($dvt$$12$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$.$superclass$.$getActionDisplayable$.call(this, $dvt$$12$$, $DvtThematicMapJsonParser$$);
    !$DvtThematicMapEventManager$$ && this.$isDisclosed$() && ("drillDown" == $dvt$$12$$ && this.$_drillDownButton$ && this.$_drillDownButton$.isEnabled() ? $DvtThematicMapEventManager$$ = this.$_drillDownButton$ : "drillUp" == $dvt$$12$$ && this.$_drillUpButton$ && this.$_drillUpButton$.isEnabled() ? $DvtThematicMapEventManager$$ = this.$_drillUpButton$ : "reset" == $dvt$$12$$ && this.$_resetButton$ && this.$_resetButton$.isEnabled() && ($DvtThematicMapEventManager$$ = this.$_resetButton$));
    return $DvtThematicMapEventManager$$;
  };
  $dvt$$12$$.$exportProperty$($dvt$$12$$, "AmxThematicMap", $dvt$$12$$.$AmxThematicMap$);
  $dvt$$12$$.$exportProperty$($dvt$$12$$.$AmxThematicMap$, "newInstance", $dvt$$12$$.$AmxThematicMap$.newInstance);
  $dvt$$12$$.$exportProperty$($dvt$$12$$.$AmxThematicMap$.prototype, "render", $dvt$$12$$.$AmxThematicMap$.prototype.$render$);
  $dvt$$12$$.$exportProperty$($dvt$$12$$.$AmxThematicMap$.prototype, "getDomElementForSubId", $dvt$$12$$.$AmxThematicMap$.prototype.$getDomElementForSubId$);
  $dvt$$12$$.$exportProperty$($dvt$$12$$.$AmxThematicMap$.prototype, "getSubIdForDomElement", $dvt$$12$$.$AmxThematicMap$.prototype.$getSubIdForDomElement$);
  $dvt$$12$$.$exportProperty$($DvtBaseMapManager$$, "getLayerIds", $DvtBaseMapManager$$.$getLayerIds$);
  $dvt$$12$$.$exportProperty$($dvt$$12$$, "ThematicMap", $dvt$$12$$.$ThematicMap$);
  $dvt$$12$$.$exportProperty$($dvt$$12$$.$ThematicMap$, "newInstance", $dvt$$12$$.$ThematicMap$.newInstance);
  $dvt$$12$$.$exportProperty$($dvt$$12$$.$ThematicMap$.prototype, "updateLayer", $dvt$$12$$.$ThematicMap$.prototype.$updateLayer$);
  $dvt$$12$$.$exportProperty$($dvt$$12$$.$ThematicMap$.prototype, "destroy", $dvt$$12$$.$ThematicMap$.prototype.$destroy$);
  $dvt$$12$$.$exportProperty$($dvt$$12$$.$ThematicMap$.prototype, "getAutomation", $dvt$$12$$.$ThematicMap$.prototype.$getAutomation$);
  $dvt$$12$$.$exportProperty$($dvt$$12$$.$ThematicMap$.prototype, "highlight", $dvt$$12$$.$ThematicMap$.prototype.$highlight$);
  $dvt$$12$$.$exportProperty$($dvt$$12$$.$ThematicMap$.prototype, "processDefaultHoverEffect", $dvt$$12$$.$ThematicMap$.prototype.$processDefaultHoverEffect$);
  $dvt$$12$$.$exportProperty$($dvt$$12$$.$ThematicMap$.prototype, "processDefaultSelectionEffect", $dvt$$12$$.$ThematicMap$.prototype.$processDefaultSelectionEffect$);
  $dvt$$12$$.$exportProperty$($dvt$$12$$.$ThematicMap$.prototype, "processDefaultFocusEffect", $dvt$$12$$.$ThematicMap$.prototype.$processDefaultFocusEffect$);
  $dvt$$12$$.$exportProperty$($DvtThematicMapAutomation$$.prototype, "getDomElementForSubId", $DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$);
  $dvt$$12$$.$exportProperty$($DvtThematicMapAutomation$$.prototype, "getData", $DvtThematicMapAutomation$$.prototype.getData);
})(dvt);
