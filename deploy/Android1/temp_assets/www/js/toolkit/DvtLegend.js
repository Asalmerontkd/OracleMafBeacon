(function($dvt$$5$$) {
  function $DvtLegendObjPeer$$($dvt$$5$$, $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$) {
    this.Init($dvt$$5$$, $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$);
  }
  function $DvtLegendKeyboardHandler$$($dvt$$5$$, $DvtLegendObjPeer$$) {
    this.Init($dvt$$5$$, $DvtLegendObjPeer$$);
  }
  function $DvtLegendEventManager$$($dvt$$5$$) {
    this.Init($dvt$$5$$.$getCtx$(), $dvt$$5$$.$processEvent$, $dvt$$5$$);
    this.$_legend$ = $dvt$$5$$;
  }
  function $DvtLegendDefaults$$() {
    this.Init({skyros:$DvtLegendDefaults$$.$VERSION_1$, alta:$DvtLegendDefaults$$.$SKIN_ALTA$, next:$DvtLegendDefaults$$.$SKIN_NEXT$});
  }
  function $DvtLegendAutomation$$($dvt$$5$$) {
    this.$_legend$ = $dvt$$5$$;
    this.$_options$ = this.$_legend$.$getOptions$();
  }
  $dvt$$5$$.$Legend$ = function $$dvt$$5$$$$Legend$$() {
  };
  $dvt$$5$$.$Obj$.$createSubclass$($dvt$$5$$.$Legend$, $dvt$$5$$.$BaseComponent$);
  $dvt$$5$$.$Legend$.newInstance = function $$dvt$$5$$$$Legend$$newInstance$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$) {
    var $DvtLegendDefaults$$ = new $dvt$$5$$.$Legend$;
    $DvtLegendDefaults$$.Init($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$);
    return $DvtLegendDefaults$$;
  };
  $dvt$$5$$.$Legend$.$getDefaults$ = function $$dvt$$5$$$$Legend$$$getDefaults$$($dvt$$5$$) {
    return (new $DvtLegendDefaults$$).$getDefaults$($dvt$$5$$);
  };
  $dvt$$5$$.$Legend$.prototype.Init = function $$dvt$$5$$$$Legend$$$Init$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$) {
    $dvt$$5$$.$Legend$.$superclass$.Init.call(this, $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$);
    this.setId("legend1000" + Math.floor(1E9 * Math.random()));
    this.$Defaults$ = new $DvtLegendDefaults$$;
    this.$EventManager$ = new $DvtLegendEventManager$$(this);
    this.$EventManager$.$addListeners$(this);
    this.$_peers$ = [];
    this.$_navigablePeers$ = [];
    this.$_bounds$ = null;
    this.$_titles$ = [];
  };
  $dvt$$5$$.$Legend$.prototype.$SetOptions$ = function $$dvt$$5$$$$Legend$$$$SetOptions$$($dvt$$5$$) {
    this.$_optionsCache$.$clearCache$();
    $dvt$$5$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($dvt$$5$$), this.$_transferVisibilityProperties$(this.$Options$.sections)) : this.$Options$ || (this.$Options$ = this.$GetDefaults$());
  };
  $dvt$$5$$.$Legend$.prototype.$getPreferredSize$ = function $$dvt$$5$$$$Legend$$$$getPreferredSize$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$) {
    this.$SetOptions$($DvtLegendObjPeer$$);
    this.$getOptions$().isLayout = !0;
    $DvtLegendObjPeer$$ = $DvtLegendRenderer$$.$render$(this, new $dvt$$5$$.$Rectangle$(0, 0, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$));
    this.$getOptions$().isLayout = !1;
    return new $dvt$$5$$.$Dimension$($DvtLegendObjPeer$$.$w$, $DvtLegendObjPeer$$.$h$);
  };
  $dvt$$5$$.$Legend$.prototype.$render$ = function $$dvt$$5$$$$Legend$$$$render$$($DvtLegendObjPeer$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$) {
    this.$_cache$.$clearCache$();
    this.$SetOptions$($DvtLegendObjPeer$$);
    isNaN($DvtLegendEventManager$$) || isNaN($DvtLegendDefaults$$) || (this.$Width$ = $DvtLegendEventManager$$, this.$Height$ = $DvtLegendDefaults$$);
    this.$getOptions$().isLayout = !1;
    this.$removeChildren$();
    this.$_peers$ = [];
    this.$_navigablePeers$ = [];
    this.$_bounds$ = null;
    this.$_titles$ = [];
    $dvt$$5$$.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(new $DvtLegendKeyboardHandler$$(this.$EventManager$, this));
    this.$UpdateAriaAttributes$();
    this.$_contentDimensions$ = $DvtLegendRenderer$$.$render$(this, new $dvt$$5$$.$Rectangle$(0, 0, this.$Width$, this.$Height$));
    ($DvtLegendObjPeer$$ = this.$getOptions$().highlightedCategories) && 0 < $DvtLegendObjPeer$$.length && this.$highlight$($DvtLegendObjPeer$$);
    this.$RenderComplete$();
    return this.$_contentDimensions$;
  };
  $dvt$$5$$.$Legend$.prototype.$highlight$ = function $$dvt$$5$$$$Legend$$$$highlight$$($DvtLegendObjPeer$$) {
    this.$getOptions$().highlightedCategories = $DvtLegendObjPeer$$ && 0 < $DvtLegendObjPeer$$.length ? $DvtLegendObjPeer$$.slice() : null;
    $dvt$$5$$.$CategoryRolloverHandler$.$highlight$($DvtLegendObjPeer$$, this.$_peers$, !0);
  };
  $dvt$$5$$.$Legend$.prototype.$processEvent$ = function $$dvt$$5$$$$Legend$$$$processEvent$$($dvt$$5$$, $DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = $dvt$$5$$.type;
    if ("categoryHighlight" == $DvtLegendKeyboardHandler$$ && "dim" == this.$getOptions$().hoverBehavior) {
      var $DvtLegendEventManager$$ = this.$_peers$;
      this != $DvtLegendObjPeer$$ && this.$highlight$($dvt$$5$$.categories);
      for (var $DvtLegendDefaults$$ = 0;$DvtLegendDefaults$$ < $DvtLegendEventManager$$.length;$DvtLegendDefaults$$++) {
        if ($DvtLegendEventManager$$[$DvtLegendDefaults$$].getId() == $dvt$$5$$.categories) {
          this.$container$.scrollIntoView($DvtLegendEventManager$$[$DvtLegendDefaults$$].$getDisplayables$()[0]);
          break;
        }
      }
    }
    this != $DvtLegendObjPeer$$ && "adfShowPopup" != $DvtLegendKeyboardHandler$$ && "adfHidePopup" != $DvtLegendKeyboardHandler$$ || this.dispatchEvent($dvt$$5$$);
  };
  $dvt$$5$$.$Legend$.prototype.$__registerObject$ = function $$dvt$$5$$$$Legend$$$$__registerObject$$($DvtLegendObjPeer$$) {
    if ($DvtLegendObjPeer$$.$getDisplayables$()[0] instanceof $dvt$$5$$.$Button$) {
      this.$_navigablePeers$.push($DvtLegendObjPeer$$);
    } else {
      var $DvtLegendKeyboardHandler$$ = this.$getOptions$().hideAndShowBehavior;
      (null != $DvtLegendObjPeer$$.$getDatatip$() || null != $DvtLegendObjPeer$$.$getAction$() || $DvtLegendObjPeer$$.$isDrillable$() || "none" != $DvtLegendKeyboardHandler$$ && "off" != $DvtLegendKeyboardHandler$$) && this.$_navigablePeers$.push($DvtLegendObjPeer$$);
      this.$_peers$.push($DvtLegendObjPeer$$);
    }
  };
  $dvt$$5$$.$Legend$.prototype.$__setBounds$ = function $$dvt$$5$$$$Legend$$$$__setBounds$$($dvt$$5$$) {
    this.$_bounds$ = $dvt$$5$$.clone();
  };
  $dvt$$5$$.$Legend$.prototype.$__registerTitle$ = function $$dvt$$5$$$$Legend$$$$__registerTitle$$($dvt$$5$$) {
    this.$_titles$.push($dvt$$5$$);
  };
  $dvt$$5$$.$Legend$.prototype.$getAutomation$ = function $$dvt$$5$$$$Legend$$$$getAutomation$$() {
    return new $DvtLegendAutomation$$(this);
  };
  $dvt$$5$$.$Legend$.prototype.$getKeyboardFocus$ = function $$dvt$$5$$$$Legend$$$$getKeyboardFocus$$() {
    return null != this.$EventManager$ ? this.$EventManager$.$getFocus$() : null;
  };
  $dvt$$5$$.$Legend$.prototype.$setKeyboardFocus$ = function $$dvt$$5$$$$Legend$$$$setKeyboardFocus$$($dvt$$5$$, $DvtLegendObjPeer$$) {
    if (null != this.$EventManager$) {
      for (var $DvtLegendKeyboardHandler$$ = this.$_navigablePeers$, $DvtLegendEventManager$$ = 0;$DvtLegendEventManager$$ < $DvtLegendKeyboardHandler$$.length;$DvtLegendEventManager$$++) {
        if ($DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$].getId() == $dvt$$5$$.getId()) {
          this.$EventManager$.$setFocusObj$($DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$]);
          $DvtLegendObjPeer$$ && $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$].$showKeyboardFocusEffect$();
          break;
        }
      }
      if ($DvtLegendKeyboardHandler$$ = this.$getKeyboardFocus$()) {
        $DvtLegendEventManager$$ = $DvtLegendKeyboardHandler$$.$getDisplayables$()[0], $DvtLegendEventManager$$.$setAriaProperty$("label", $DvtLegendKeyboardHandler$$.$getAriaLabel$()), this.$getCtx$().$setActiveElement$($DvtLegendEventManager$$);
      }
    }
  };
  $dvt$$5$$.$Legend$.prototype.$getDimensions$ = function $$dvt$$5$$$$Legend$$$$getDimensions$$($DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = new $dvt$$5$$.$Rectangle$(0, 0, this.$Width$, this.$Height$);
    return $DvtLegendObjPeer$$ && $DvtLegendObjPeer$$ !== this ? this.$ConvertCoordSpaceRect$($DvtLegendKeyboardHandler$$, $DvtLegendObjPeer$$) : $DvtLegendKeyboardHandler$$;
  };
  $dvt$$5$$.$Legend$.prototype.$getContentDimensions$ = function $$dvt$$5$$$$Legend$$$$getContentDimensions$$($dvt$$5$$) {
    return $dvt$$5$$ && $dvt$$5$$ !== this ? this.$ConvertCoordSpaceRect$(this.$_contentDimensions$, $dvt$$5$$) : this.$_contentDimensions$;
  };
  $dvt$$5$$.$Legend$.prototype.$GetComponentDescription$ = function $$dvt$$5$$$$Legend$$$$GetComponentDescription$$() {
    return $dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "LEGEND");
  };
  $dvt$$5$$.$Legend$.prototype.$_transferVisibilityProperties$ = function $$dvt$$5$$$$Legend$$$$_transferVisibilityProperties$$($DvtLegendObjPeer$$) {
    if ($DvtLegendObjPeer$$ && !(0 >= $DvtLegendObjPeer$$.length)) {
      for (var $DvtLegendKeyboardHandler$$ = this.$getOptions$().hiddenCategories, $DvtLegendEventManager$$ = 0;$DvtLegendEventManager$$ < $DvtLegendObjPeer$$.length;$DvtLegendEventManager$$++) {
        var $DvtLegendDefaults$$ = $DvtLegendObjPeer$$[$DvtLegendEventManager$$];
        $DvtLegendDefaults$$.sections && ($DvtLegendKeyboardHandler$$ = this.$_transferVisibilityProperties$($DvtLegendDefaults$$.sections));
        if (($DvtLegendDefaults$$ = $DvtLegendDefaults$$.items) && !(0 >= $DvtLegendDefaults$$.length)) {
          for (var $DvtLegendAutomation$$ = 0;$DvtLegendAutomation$$ < $DvtLegendDefaults$$.length;$DvtLegendAutomation$$++) {
            var $item$$20$$ = $DvtLegendDefaults$$[$DvtLegendAutomation$$], $itemCategory$$ = $DvtLegendRenderer$$.$getItemCategory$($item$$20$$);
            "hidden" == $item$$20$$.categoryVisibility && 0 > $dvt$$5$$.$ArrayUtils$.$getIndex$($DvtLegendKeyboardHandler$$, $itemCategory$$) && $DvtLegendKeyboardHandler$$.push($itemCategory$$);
            $item$$20$$.categoryVisibility = null;
          }
        }
      }
    }
  };
  $dvt$$5$$.$Legend$.prototype.$UpdateAriaAttributes$ = function $$dvt$$5$$$$Legend$$$$UpdateAriaAttributes$$() {
    if (this.$IsParentRoot$()) {
      var $DvtLegendObjPeer$$ = this.$getOptions$(), $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$.hideAndShowBehavior;
      if ("off" != $DvtLegendKeyboardHandler$$ && "none" != $DvtLegendKeyboardHandler$$ || "dim" == $DvtLegendObjPeer$$.hoverBehavior) {
        this.$getCtx$().$setAriaRole$("application"), this.$getCtx$().$setAriaLabel$($dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "DATA_VISUALIZATION"), $dvt$$5$$.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$())]));
      }
    }
  };
  $dvt$$5$$.$Legend$.prototype.$isNavigable$ = function $$dvt$$5$$$$Legend$$$$isNavigable$$() {
    return 0 < this.$_navigablePeers$.length;
  };
  $dvt$$5$$.$Legend$.$getItemCount$ = function $$dvt$$5$$$$Legend$$$getItemCount$$($DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$.$_optionsCache$.$getFromCache$("itemsCount");
    if (null != $DvtLegendKeyboardHandler$$) {
      return $DvtLegendKeyboardHandler$$;
    }
    for (var $DvtLegendKeyboardHandler$$ = 0, $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$getOptions$().sections, $DvtLegendDefaults$$ = 0;$DvtLegendDefaults$$ < $DvtLegendEventManager$$.length;$DvtLegendDefaults$$++) {
      $DvtLegendKeyboardHandler$$ += $dvt$$5$$.$Legend$.$getSectionItemsCount$($DvtLegendEventManager$$[$DvtLegendDefaults$$]);
    }
    $DvtLegendObjPeer$$.$_optionsCache$.$putToCache$("itemsCount", $DvtLegendKeyboardHandler$$);
    return $DvtLegendKeyboardHandler$$;
  };
  $dvt$$5$$.$Legend$.$getSectionItemsCount$ = function $$dvt$$5$$$$Legend$$$getSectionItemsCount$$($DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = 0;
    $DvtLegendObjPeer$$.items && ($DvtLegendKeyboardHandler$$ += $DvtLegendObjPeer$$.items.length);
    if ($DvtLegendObjPeer$$.$sections$) {
      $DvtLegendObjPeer$$ = $DvtLegendObjPeer$$.$sections$;
      for (var $DvtLegendEventManager$$ = 0;$DvtLegendEventManager$$ < $DvtLegendObjPeer$$.length;$DvtLegendEventManager$$++) {
        $DvtLegendKeyboardHandler$$ += $dvt$$5$$.$Legend$.$getSectionItemsCount$($DvtLegendObjPeer$$[$DvtLegendEventManager$$]);
      }
    }
    return $DvtLegendKeyboardHandler$$;
  };
  $dvt$$5$$.$Obj$.$createSubclass$($DvtLegendAutomation$$, $dvt$$5$$.$Automation$);
  $DvtLegendAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtLegendAutomation$$$$$GetSubIdForDomElement$$($dvt$$5$$) {
    return ($dvt$$5$$ = this.$_legend$.$getEventManager$().$GetLogicalObject$($dvt$$5$$)) && $dvt$$5$$ instanceof $DvtLegendObjPeer$$ && ($dvt$$5$$ = $dvt$$5$$.getData(), $dvt$$5$$ = this.$_getIndicesFromItem$($dvt$$5$$, this.$_options$)) ? "section" + $dvt$$5$$ : null;
  };
  $DvtLegendAutomation$$.prototype.$_getIndicesFromItem$ = function $$DvtLegendAutomation$$$$$_getIndicesFromItem$$($dvt$$5$$, $DvtLegendObjPeer$$) {
    if ($DvtLegendObjPeer$$.sections && 0 < $DvtLegendObjPeer$$.sections.length) {
      for (var $DvtLegendKeyboardHandler$$ = 0;$DvtLegendKeyboardHandler$$ < $DvtLegendObjPeer$$.sections.length;$DvtLegendKeyboardHandler$$++) {
        if ($DvtLegendObjPeer$$.sections[$DvtLegendKeyboardHandler$$] == $dvt$$5$$) {
          return "[" + $DvtLegendKeyboardHandler$$ + "]";
        }
        var $DvtLegendEventManager$$ = this.$_getIndicesFromItem$($dvt$$5$$, $DvtLegendObjPeer$$.sections[$DvtLegendKeyboardHandler$$]);
        if ($DvtLegendEventManager$$) {
          return "[" + $DvtLegendKeyboardHandler$$ + "]" + $DvtLegendEventManager$$;
        }
      }
      return null;
    }
    if ($DvtLegendObjPeer$$.items && 0 < $DvtLegendObjPeer$$.items.length) {
      for ($DvtLegendKeyboardHandler$$ = 0;$DvtLegendKeyboardHandler$$ < $DvtLegendObjPeer$$.items.length;$DvtLegendKeyboardHandler$$++) {
        if ($DvtLegendObjPeer$$.items[$DvtLegendKeyboardHandler$$] == $dvt$$5$$) {
          return ":item[" + $DvtLegendKeyboardHandler$$ + "]";
        }
      }
      return null;
    }
  };
  $DvtLegendAutomation$$.prototype.$getIndicesFromSeries$ = function $$DvtLegendAutomation$$$$$getIndicesFromSeries$$($dvt$$5$$, $DvtLegendObjPeer$$) {
    if ($DvtLegendObjPeer$$.sections && 0 < $DvtLegendObjPeer$$.sections.length) {
      for (var $DvtLegendKeyboardHandler$$ = 0;$DvtLegendKeyboardHandler$$ < $DvtLegendObjPeer$$.sections.length;$DvtLegendKeyboardHandler$$++) {
        var $DvtLegendEventManager$$ = this.$getIndicesFromSeries$($dvt$$5$$, $DvtLegendObjPeer$$.sections[$DvtLegendKeyboardHandler$$]);
        if ($DvtLegendEventManager$$) {
          return "[" + $DvtLegendKeyboardHandler$$ + "]" + $DvtLegendEventManager$$;
        }
      }
      return null;
    }
    if ($DvtLegendObjPeer$$.items && 0 < $DvtLegendObjPeer$$.items.length) {
      for ($DvtLegendKeyboardHandler$$ = 0;$DvtLegendKeyboardHandler$$ < $DvtLegendObjPeer$$.items.length;$DvtLegendKeyboardHandler$$++) {
        if ($DvtLegendObjPeer$$.items[$DvtLegendKeyboardHandler$$].text == $dvt$$5$$.name) {
          return ":item[" + $DvtLegendKeyboardHandler$$ + "]";
        }
      }
      return null;
    }
  };
  $DvtLegendAutomation$$.prototype.$getLegendItem$ = function $$DvtLegendAutomation$$$$$getLegendItem$$($dvt$$5$$, $DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$.indexOf("["), $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.indexOf("]");
    if (0 <= $DvtLegendKeyboardHandler$$ && 0 <= $DvtLegendEventManager$$) {
      var $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$.substring($DvtLegendKeyboardHandler$$ + 1, $DvtLegendEventManager$$), $DvtLegendDefaults$$ = $DvtLegendObjPeer$$.indexOf(":");
      $DvtLegendObjPeer$$ = $DvtLegendObjPeer$$.substring($DvtLegendEventManager$$ + 1);
      $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.indexOf("]");
      return 0 <= $DvtLegendObjPeer$$.indexOf("[") && 0 <= $DvtLegendEventManager$$ ? this.$getLegendItem$($dvt$$5$$.sections[$DvtLegendKeyboardHandler$$], $DvtLegendObjPeer$$) : 0 == $DvtLegendDefaults$$ ? $dvt$$5$$.items[$DvtLegendKeyboardHandler$$] : $dvt$$5$$.sections[$DvtLegendKeyboardHandler$$];
    }
  };
  $DvtLegendAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtLegendAutomation$$$$$getDomElementForSubId$$($DvtLegendObjPeer$$) {
    if ($DvtLegendObjPeer$$ == $dvt$$5$$.$Automation$.$TOOLTIP_SUBID$) {
      return this.$GetTooltipElement$(this.$_legend$);
    }
    $DvtLegendObjPeer$$ = this.$getLegendItem$(this.$_options$, $DvtLegendObjPeer$$);
    for (var $DvtLegendKeyboardHandler$$ = this.$_legend$.$_peers$, $DvtLegendEventManager$$ = 0;$DvtLegendEventManager$$ < $DvtLegendKeyboardHandler$$.length;$DvtLegendEventManager$$++) {
      var $DvtLegendDefaults$$ = $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$].getData();
      if ($DvtLegendObjPeer$$ == $DvtLegendDefaults$$) {
        return $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$].$getDisplayables$()[0].$getElem$();
      }
    }
    return null;
  };
  $DvtLegendAutomation$$.prototype.$getTitle$ = function $$DvtLegendAutomation$$$$$getTitle$$() {
    return this.$_options$.title;
  };
  $DvtLegendAutomation$$.prototype.getItem = function $$DvtLegendAutomation$$$$getItem$($dvt$$5$$) {
    for (var $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$ = $dvt$$5$$.shift(), $DvtLegendEventManager$$ = this.$_options$;void 0 != $DvtLegendKeyboardHandler$$;) {
      0 < $dvt$$5$$.length ? $DvtLegendEventManager$$ = $DvtLegendEventManager$$.sections[$DvtLegendKeyboardHandler$$] : $DvtLegendObjPeer$$ = $DvtLegendEventManager$$.items[$DvtLegendKeyboardHandler$$], $DvtLegendKeyboardHandler$$ = $dvt$$5$$.shift();
    }
    return $DvtLegendObjPeer$$ ? {text:$DvtLegendObjPeer$$.text ? $DvtLegendObjPeer$$.text : null} : null;
  };
  $DvtLegendAutomation$$.prototype.$getSection$ = function $$DvtLegendAutomation$$$$$getSection$$($dvt$$5$$) {
    for (var $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$ = $dvt$$5$$.shift(), $DvtLegendEventManager$$ = this.$_options$;void 0 != $DvtLegendKeyboardHandler$$;) {
      0 < $dvt$$5$$.length ? $DvtLegendEventManager$$ = $DvtLegendEventManager$$.sections[$DvtLegendKeyboardHandler$$] : $DvtLegendObjPeer$$ = $DvtLegendEventManager$$.sections[$DvtLegendKeyboardHandler$$], $DvtLegendKeyboardHandler$$ = $dvt$$5$$.shift();
    }
    return {title:$DvtLegendObjPeer$$.title ? $DvtLegendObjPeer$$.title : null, items:$DvtLegendObjPeer$$.items ? this.$_generateItemObjects$($DvtLegendObjPeer$$.items) : null, sections:$DvtLegendObjPeer$$.sections ? this.$_generateSectionObjects$($DvtLegendObjPeer$$.sections) : null};
  };
  $DvtLegendAutomation$$.prototype.$_generateItemObjects$ = function $$DvtLegendAutomation$$$$$_generateItemObjects$$($dvt$$5$$) {
    for (var $DvtLegendObjPeer$$ = [], $DvtLegendKeyboardHandler$$ = 0;$DvtLegendKeyboardHandler$$ < $dvt$$5$$.length;$DvtLegendKeyboardHandler$$++) {
      $DvtLegendObjPeer$$.push({text:$dvt$$5$$[$DvtLegendKeyboardHandler$$].text});
    }
    return $DvtLegendObjPeer$$;
  };
  $DvtLegendAutomation$$.prototype.$_generateSectionObjects$ = function $$DvtLegendAutomation$$$$$_generateSectionObjects$$($dvt$$5$$) {
    for (var $DvtLegendObjPeer$$ = [], $DvtLegendKeyboardHandler$$ = 0;$DvtLegendKeyboardHandler$$ < $dvt$$5$$.length;$DvtLegendKeyboardHandler$$++) {
      $DvtLegendObjPeer$$.push({title:$dvt$$5$$[$DvtLegendKeyboardHandler$$].title ? $dvt$$5$$[$DvtLegendKeyboardHandler$$].title : null, items:$dvt$$5$$[$DvtLegendKeyboardHandler$$].items ? this.$_generateItemObjects$($dvt$$5$$[$DvtLegendKeyboardHandler$$].items) : null, sections:$dvt$$5$$[$DvtLegendKeyboardHandler$$].sections ? this.$_generateSectionObjects$($dvt$$5$$[$DvtLegendKeyboardHandler$$].sections) : null});
    }
    return $DvtLegendObjPeer$$;
  };
  $dvt$$5$$.$Obj$.$createSubclass$($DvtLegendDefaults$$, $dvt$$5$$.$BaseComponentDefaults$);
  $DvtLegendDefaults$$.$SKIN_NEXT$ = {skin:$dvt$$5$$.$CSSStyle$.$SKIN_NEXT$, titleStyle:new $dvt$$5$$.$CSSStyle$("color: #737373;"), _sectionTitleStyle:new $dvt$$5$$.$CSSStyle$("color: #737373;"), layout:{titleGapWidth:17, titleGapHeight:9, symbolGapWidth:7, symbolGapHeight:4, rowGap:4, columnGap:10, sectionGapHeight:16, sectionGapWidth:24}};
  $DvtLegendDefaults$$.$SKIN_ALTA$ = {skin:$dvt$$5$$.$CSSStyle$.$SKIN_ALTA$, textStyle:new $dvt$$5$$.$CSSStyle$($dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$), titleStyle:new $dvt$$5$$.$CSSStyle$($dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_11$ + "color: #333333;"), _sectionTitleStyle:new $dvt$$5$$.$CSSStyle$($dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_11$ + "color: #333333;")};
  $DvtLegendDefaults$$.$VERSION_1$ = {skin:$dvt$$5$$.$CSSStyle$.$SKIN_SKYROS$, orientation:"vertical", position:null, backgroundColor:null, borderColor:null, textStyle:new $dvt$$5$$.$CSSStyle$($dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 11px; color: #333333;"), titleStyle:new $dvt$$5$$.$CSSStyle$($dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 12px; color: #003d5b;"), titleHalign:"start", hiddenCategories:[], hideAndShowBehavior:"off", hoverBehavior:"none", 
  hoverBehaviorDelay:200, scrolling:"asNeeded", halign:"start", valign:"top", drilling:"off", _color:"#a6acb1", _markerShape:"square", _lineWidth:3, layout:{outerGapWidth:3, outerGapHeight:3, titleGapWidth:8, titleGapHeight:3, symbolGapWidth:5, symbolGapHeight:4, rowGap:0, columnGap:8, sectionGapHeight:6, sectionGapWidth:15}, isLayout:!1};
  $DvtLegendDefaults$$.$getGapSize$ = function $$DvtLegendDefaults$$$$getGapSize$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = Math.min($dvt$$5$$.$TextUtils$.$getTextStringHeight$($DvtLegendObjPeer$$.$getCtx$(), $DvtLegendObjPeer$$.$getOptions$().textStyle) / 14, 1);
    return Math.ceil($DvtLegendKeyboardHandler$$ * $DvtLegendEventManager$$);
  };
  $DvtLegendDefaults$$.prototype.$getNoCloneObject$ = function $$DvtLegendDefaults$$$$$getNoCloneObject$$() {
    return {sections:{items:{_dataContext:!0}}};
  };
  $dvt$$5$$.$Obj$.$createSubclass$($DvtLegendEventManager$$, $dvt$$5$$.$EventManager$);
  $DvtLegendEventManager$$.prototype.$OnClick$ = function $$DvtLegendEventManager$$$$$OnClick$$($dvt$$5$$) {
    $DvtLegendEventManager$$.$superclass$.$OnClick$.call(this, $dvt$$5$$);
    var $DvtLegendObjPeer$$ = this.$GetLogicalObject$($dvt$$5$$.target);
    if ($DvtLegendObjPeer$$) {
      var $DvtLegendKeyboardHandler$$ = this.$processHideShowEvent$($DvtLegendObjPeer$$), $DvtLegendObjPeer$$ = this.$handleClick$($DvtLegendObjPeer$$, $dvt$$5$$);
      ($DvtLegendKeyboardHandler$$ || $DvtLegendObjPeer$$) && $dvt$$5$$.stopPropagation();
    }
  };
  $DvtLegendEventManager$$.prototype.$OnMouseOver$ = function $$DvtLegendEventManager$$$$$OnMouseOver$$($DvtLegendObjPeer$$) {
    $DvtLegendEventManager$$.$superclass$.$OnMouseOver$.call(this, $DvtLegendObjPeer$$);
    if ($DvtLegendObjPeer$$ = this.$GetLogicalObject$($DvtLegendObjPeer$$.target)) {
      var $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$ instanceof $dvt$$5$$.$SimpleObjPeer$ ? $DvtLegendObjPeer$$.$_params$ : null;
      $DvtLegendKeyboardHandler$$ && $DvtLegendKeyboardHandler$$.isCollapsible && $DvtLegendKeyboardHandler$$.button && $DvtLegendKeyboardHandler$$.button.$drawOverState$();
      this.$UpdateActiveElement$($DvtLegendObjPeer$$);
    }
  };
  $DvtLegendEventManager$$.prototype.$OnMouseOut$ = function $$DvtLegendEventManager$$$$$OnMouseOut$$($DvtLegendObjPeer$$) {
    $DvtLegendEventManager$$.$superclass$.$OnMouseOut$.call(this, $DvtLegendObjPeer$$);
    ($DvtLegendObjPeer$$ = this.$GetLogicalObject$($DvtLegendObjPeer$$.target)) && ($DvtLegendObjPeer$$ = $DvtLegendObjPeer$$ instanceof $dvt$$5$$.$SimpleObjPeer$ ? $DvtLegendObjPeer$$.$_params$ : null) && $DvtLegendObjPeer$$.isCollapsible && $DvtLegendObjPeer$$.button && $DvtLegendObjPeer$$.button.$drawUpState$();
  };
  $DvtLegendEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtLegendEventManager$$$$$HandleTouchClickInternal$$($dvt$$5$$) {
    var $DvtLegendObjPeer$$ = this.$GetLogicalObject$($dvt$$5$$.target);
    if ($DvtLegendObjPeer$$) {
      var $DvtLegendKeyboardHandler$$ = $dvt$$5$$.$touchEvent$, $DvtLegendEventManager$$ = this.$processHideShowEvent$($DvtLegendObjPeer$$);
      $dvt$$5$$ = this.$handleClick$($DvtLegendObjPeer$$, $dvt$$5$$);
      ($DvtLegendEventManager$$ || $dvt$$5$$) && $DvtLegendKeyboardHandler$$ && $DvtLegendKeyboardHandler$$.preventDefault();
    }
  };
  $DvtLegendEventManager$$.prototype.$processHideShowEvent$ = function $$DvtLegendEventManager$$$$$processHideShowEvent$$($DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = this.$_legend$.$getOptions$().hideAndShowBehavior;
    if ("none" == $DvtLegendKeyboardHandler$$ || "off" == $DvtLegendKeyboardHandler$$) {
      return !1;
    }
    var $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$getCategories$ ? $DvtLegendObjPeer$$.$getCategories$() : null;
    if (!$DvtLegendEventManager$$ || 0 >= $DvtLegendEventManager$$.length) {
      return !1;
    }
    for (var $DvtLegendDefaults$$ = $DvtLegendObjPeer$$.$getCategories$()[0], $DvtLegendKeyboardHandler$$ = this.$_legend$.$getOptions$().hiddenCategories || [], $DvtLegendKeyboardHandler$$ = $DvtLegendKeyboardHandler$$.slice(), $DvtLegendAutomation$$ = $DvtLegendObjPeer$$.$getDisplayables$(), $i$$520$$ = 0;$i$$520$$ < $DvtLegendAutomation$$.length;$i$$520$$++) {
      var $displayable$$43$$ = $DvtLegendAutomation$$[$i$$520$$];
      $displayable$$43$$ instanceof $dvt$$5$$.$SimpleMarker$ ? $displayable$$43$$.$setHollow$($DvtLegendObjPeer$$.$getColor$()) : $displayable$$43$$ instanceof $dvt$$5$$.Rect && $DvtLegendObjPeer$$.$updateAriaLabel$();
    }
    $DvtLegendObjPeer$$ = $DvtLegendEventManager$$[0];
    $DvtLegendRenderer$$.$isCategoryHidden$($DvtLegendDefaults$$, this.$_legend$) ? ($DvtLegendKeyboardHandler$$.splice($dvt$$5$$.$ArrayUtils$.$getIndex$($DvtLegendKeyboardHandler$$, $DvtLegendDefaults$$), 1), $DvtLegendObjPeer$$ = $dvt$$5$$.$EventFactory$.$newCategoryShowEvent$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$)) : ($DvtLegendKeyboardHandler$$.push($DvtLegendDefaults$$), $DvtLegendObjPeer$$ = $dvt$$5$$.$EventFactory$.$newCategoryHideEvent$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$));
    this.$_legend$.$getOptions$().hiddenCategories = $DvtLegendKeyboardHandler$$;
    this.$FireEvent$($DvtLegendObjPeer$$, this.$_legend$);
    return !0;
  };
  $DvtLegendEventManager$$.prototype.$handleClick$ = function $$DvtLegendEventManager$$$$$handleClick$$($DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$) {
    if ($DvtLegendKeyboardHandler$$ && $DvtLegendKeyboardHandler$$.$getAction$ && $DvtLegendKeyboardHandler$$.$getAction$()) {
      return this.$FireEvent$($dvt$$5$$.$EventFactory$.$newActionEvent$("action", $DvtLegendKeyboardHandler$$.$getAction$(), $DvtLegendKeyboardHandler$$.getId()), this.$_legend$), !0;
    }
    if ($DvtLegendKeyboardHandler$$ instanceof $DvtLegendObjPeer$$ && $DvtLegendKeyboardHandler$$.$isDrillable$()) {
      var $DvtLegendDefaults$$ = $DvtLegendKeyboardHandler$$.getId();
      this.$FireEvent$($dvt$$5$$.$EventFactory$.$newChartDrillEvent$($DvtLegendDefaults$$, $DvtLegendDefaults$$, null), this.$_legend$);
      return !0;
    }
    return ($DvtLegendDefaults$$ = $DvtLegendKeyboardHandler$$ instanceof $dvt$$5$$.$SimpleObjPeer$ ? $DvtLegendKeyboardHandler$$.$_params$ : null) && $DvtLegendDefaults$$.isCollapsible ? (this.$toggleSectionCollapse$($DvtLegendEventManager$$, $DvtLegendDefaults$$.id), !0) : !1;
  };
  $DvtLegendEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtLegendEventManager$$$$$ProcessRolloverEvent$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$) {
    $DvtLegendObjPeer$$ = this.$_legend$.$getOptions$();
    "none" == $DvtLegendObjPeer$$.hoverBehavior || $DvtLegendKeyboardHandler$$.$getDisplayables$ && $DvtLegendKeyboardHandler$$.$getDisplayables$()[0] instanceof $dvt$$5$$.$Button$ || ($DvtLegendKeyboardHandler$$ = $DvtLegendKeyboardHandler$$.$getCategories$ ? $DvtLegendKeyboardHandler$$.$getCategories$() : [], $DvtLegendObjPeer$$.highlightedCategories = $DvtLegendEventManager$$ ? $DvtLegendKeyboardHandler$$.slice() : null, $DvtLegendEventManager$$ = $dvt$$5$$.$EventFactory$.$newCategoryHighlightEvent$($DvtLegendObjPeer$$.highlightedCategories, 
    $DvtLegendEventManager$$), $DvtLegendObjPeer$$ = $dvt$$5$$.$StyleUtils$.$getTimeMilliseconds$($DvtLegendObjPeer$$.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($DvtLegendEventManager$$, this.$_legend$.$_peers$, $DvtLegendObjPeer$$, !0));
  };
  $DvtLegendEventManager$$.prototype.$onCollapseButtonClick$ = function $$DvtLegendEventManager$$$$$onCollapseButtonClick$$($dvt$$5$$, $DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$.getId();
    this.$toggleSectionCollapse$($dvt$$5$$, $DvtLegendKeyboardHandler$$);
  };
  $DvtLegendEventManager$$.prototype.$toggleSectionCollapse$ = function $$DvtLegendEventManager$$$$$toggleSectionCollapse$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    for (var $DvtLegendEventManager$$ = this.$_legend$.$getOptions$(), $DvtLegendDefaults$$ = 0;$DvtLegendDefaults$$ < $DvtLegendKeyboardHandler$$.length;$DvtLegendDefaults$$++) {
      $DvtLegendEventManager$$ = $DvtLegendEventManager$$.sections[$DvtLegendKeyboardHandler$$[$DvtLegendDefaults$$]];
    }
    $DvtLegendEventManager$$.expanded = "off" == $DvtLegendEventManager$$.expanded ? "on" : "off";
    $DvtLegendObjPeer$$.type == $dvt$$5$$.MouseEvent.$CLICK$ && ($DvtLegendEventManager$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($DvtLegendObjPeer$$)), $DvtLegendEventManager$$.$getNextNavigable$ && this.$setFocusObj$($DvtLegendEventManager$$.$getNextNavigable$($DvtLegendObjPeer$$)));
    $DvtLegendDefaults$$ = ($DvtLegendEventManager$$ = this.$_legend$.$getKeyboardFocus$()) ? $DvtLegendEventManager$$.$isShowingKeyboardFocusEffect$() : !1;
    this.$_legend$.$render$();
    $DvtLegendEventManager$$ && this.$_legend$.$setKeyboardFocus$($DvtLegendEventManager$$, $DvtLegendDefaults$$);
    this.$hideTooltip$();
    $DvtLegendEventManager$$ = this.$_legend$.$getContentDimensions$();
    this.$FireEvent$(new $dvt$$5$$.$ResizeEvent$($DvtLegendEventManager$$.$w$, $DvtLegendEventManager$$.$h$, $DvtLegendEventManager$$.x, $DvtLegendEventManager$$.y), this.$_legend$);
  };
  $DvtLegendEventManager$$.prototype.$GetTouchResponse$ = function $$DvtLegendEventManager$$$$$GetTouchResponse$$() {
    return this.$_legend$.$getOptions$()._isScrollingLegend ? $dvt$$5$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : $dvt$$5$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$;
  };
  $DvtLegendEventManager$$.prototype.$getComponent$ = function $$DvtLegendEventManager$$$$$getComponent$$() {
    return this.$_legend$;
  };
  $DvtLegendEventManager$$.prototype.$isDndSupported$ = function $$DvtLegendEventManager$$$$$isDndSupported$$() {
    return !0;
  };
  $DvtLegendEventManager$$.prototype.$GetDragSourceType$ = function $$DvtLegendEventManager$$$$$GetDragSourceType$$() {
    var $dvt$$5$$ = this.$DragSource$.$_dragObj$;
    return $dvt$$5$$ instanceof $DvtLegendObjPeer$$ && null != $dvt$$5$$.getData()._dataContext ? "series" : null;
  };
  $DvtLegendEventManager$$.prototype.$GetDragDataContexts$ = function $$DvtLegendEventManager$$$$$GetDragDataContexts$$() {
    var $dvt$$5$$ = this.$DragSource$.$_dragObj$;
    return $dvt$$5$$ instanceof $DvtLegendObjPeer$$ ? [$dvt$$5$$.getData()._dataContext] : [];
  };
  $DvtLegendEventManager$$.prototype.$GetDropTargetType$ = function $$DvtLegendEventManager$$$$$GetDropTargetType$$($dvt$$5$$) {
    $dvt$$5$$ = this.$_legend$.$stageToLocal$(this.$getCtx$().$pageToStageCoords$($dvt$$5$$.pageX, $dvt$$5$$.pageY));
    return this.$_legend$.$_bounds$.$containsPoint$($dvt$$5$$.x, $dvt$$5$$.y) ? "legend" : null;
  };
  $DvtLegendEventManager$$.prototype.$GetDropEventPayload$ = function $$DvtLegendEventManager$$$$$GetDropEventPayload$$() {
    return {};
  };
  $DvtLegendEventManager$$.prototype.$ShowDropEffect$ = function $$DvtLegendEventManager$$$$$ShowDropEffect$$($dvt$$5$$) {
    if ("legend" == this.$GetDropTargetType$($dvt$$5$$)) {
      $dvt$$5$$ = this.$_legend$.$getOptions$()._dropColor;
      var $DvtLegendObjPeer$$ = this.$_legend$.$_cache$.$getFromCache$("background");
      $DvtLegendObjPeer$$ && $DvtLegendObjPeer$$.$setSolidFill$($dvt$$5$$);
    }
  };
  $DvtLegendEventManager$$.prototype.$ClearDropEffect$ = function $$DvtLegendEventManager$$$$$ClearDropEffect$$() {
    var $dvt$$5$$ = this.$_legend$.$_cache$.$getFromCache$("background");
    if ($dvt$$5$$) {
      var $DvtLegendObjPeer$$ = this.$_legend$.$getOptions$().backgroundColor;
      $DvtLegendObjPeer$$ ? $dvt$$5$$.$setSolidFill$($DvtLegendObjPeer$$) : $dvt$$5$$.$setInvisibleFill$();
    }
  };
  $dvt$$5$$.$Obj$.$createSubclass$($DvtLegendKeyboardHandler$$, $dvt$$5$$.$KeyboardHandler$);
  $DvtLegendKeyboardHandler$$.prototype.Init = function $$DvtLegendKeyboardHandler$$$$Init$($dvt$$5$$, $DvtLegendObjPeer$$) {
    $DvtLegendKeyboardHandler$$.$superclass$.Init.call(this, $dvt$$5$$);
    this.$_legend$ = $DvtLegendObjPeer$$;
  };
  $DvtLegendKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtLegendKeyboardHandler$$$$$processKeyDown$$($DvtLegendObjPeer$$) {
    var $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.keyCode, $DvtLegendDefaults$$ = this.$_eventManager$.$getFocus$(), $DvtLegendAutomation$$ = $DvtLegendDefaults$$ && $DvtLegendDefaults$$.$getDisplayables$()[0] instanceof $dvt$$5$$.$Button$, $DvtLegendRenderer$$ = null;
    null == $DvtLegendDefaults$$ && $DvtLegendEventManager$$ == $dvt$$5$$.KeyboardEvent.$TAB$ ? ($DvtLegendEventManager$$ = this.$_legend$.$_navigablePeers$, 0 < $DvtLegendEventManager$$.length && ($dvt$$5$$.$EventManager$.$consumeEvent$($DvtLegendObjPeer$$), $DvtLegendRenderer$$ = this.$getDefaultNavigable$($DvtLegendEventManager$$))) : $DvtLegendDefaults$$ && ($DvtLegendEventManager$$ == $dvt$$5$$.KeyboardEvent.$TAB$ ? ($dvt$$5$$.$EventManager$.$consumeEvent$($DvtLegendObjPeer$$), $DvtLegendRenderer$$ = 
    $DvtLegendDefaults$$) : $DvtLegendEventManager$$ == $dvt$$5$$.KeyboardEvent.$ENTER$ || $DvtLegendEventManager$$ == $dvt$$5$$.KeyboardEvent.$SPACE$ ? ($DvtLegendEventManager$$ == $dvt$$5$$.KeyboardEvent.$ENTER$ && this.$_eventManager$.$handleClick$($DvtLegendDefaults$$, $DvtLegendObjPeer$$), $DvtLegendAutomation$$ ? this.$_eventManager$.$onCollapseButtonClick$($DvtLegendObjPeer$$, $DvtLegendDefaults$$.$getDisplayables$()[0]) : this.$_eventManager$.$processHideShowEvent$($DvtLegendDefaults$$), 
    $dvt$$5$$.$EventManager$.$consumeEvent$($DvtLegendObjPeer$$)) : !$DvtLegendAutomation$$ || $DvtLegendEventManager$$ != $dvt$$5$$.KeyboardEvent.$LEFT_ARROW$ && $DvtLegendEventManager$$ != $dvt$$5$$.KeyboardEvent.$RIGHT_ARROW$ ? $DvtLegendRenderer$$ = $DvtLegendKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtLegendObjPeer$$) : (this.$_eventManager$.$onCollapseButtonClick$($DvtLegendObjPeer$$, $DvtLegendDefaults$$.$getDisplayables$()[0]), $dvt$$5$$.$EventManager$.$consumeEvent$($DvtLegendObjPeer$$)));
    $DvtLegendRenderer$$ && this.$_legend$.$container$.scrollIntoView($DvtLegendRenderer$$.$getDisplayables$()[0]);
    return $DvtLegendRenderer$$;
  };
  $dvt$$5$$.$Obj$.$createSubclass$($DvtLegendObjPeer$$, $dvt$$5$$.$Obj$);
  $DvtLegendObjPeer$$.prototype.Init = function $$DvtLegendObjPeer$$$$Init$($dvt$$5$$, $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$) {
    this.$_legend$ = $dvt$$5$$;
    this.$_displayables$ = $DvtLegendObjPeer$$;
    this.$_item$ = $DvtLegendKeyboardHandler$$;
    this.$_id$ = (this.$_category$ = $DvtLegendRenderer$$.$getItemCategory$(this.$_item$)) ? this.$_category$ : $DvtLegendKeyboardHandler$$.title;
    this.$_action$ = $DvtLegendKeyboardHandler$$.action;
    this.$_drillable$ = $DvtLegendAutomation$$;
    this.$_spb$ = $DvtLegendKeyboardHandler$$._spb;
    this.$_tooltip$ = $DvtLegendEventManager$$;
    this.$_datatip$ = $DvtLegendDefaults$$;
    this.$_isShowingKeyboardFocusEffect$ = !1;
    if (this.$_action$ || this.$_drillable$) {
      for ($dvt$$5$$ = 0;$dvt$$5$$ < this.$_displayables$.length;$dvt$$5$$++) {
        this.$_displayables$[$dvt$$5$$].setCursor("pointer");
      }
    }
  };
  $DvtLegendObjPeer$$.$associate$ = function $$DvtLegendObjPeer$$$$associate$$($dvt$$5$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$) {
    if (!$dvt$$5$$ || !$DvtLegendEventManager$$) {
      return null;
    }
    $DvtLegendEventManager$$ = new $DvtLegendObjPeer$$($DvtLegendKeyboardHandler$$, $dvt$$5$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$);
    $DvtLegendKeyboardHandler$$.$__registerObject$($DvtLegendEventManager$$);
    for ($DvtLegendDefaults$$ = 0;$DvtLegendDefaults$$ < $dvt$$5$$.length;$DvtLegendDefaults$$++) {
      $DvtLegendKeyboardHandler$$.$getEventManager$().$associate$($dvt$$5$$[$DvtLegendDefaults$$], $DvtLegendEventManager$$);
    }
    return $DvtLegendEventManager$$;
  };
  $DvtLegendObjPeer$$.prototype.getData = function $$DvtLegendObjPeer$$$$getData$() {
    return this.$_item$;
  };
  $DvtLegendObjPeer$$.prototype.$getColor$ = function $$DvtLegendObjPeer$$$$$getColor$$() {
    return this.$_item$.color;
  };
  $DvtLegendObjPeer$$.prototype.getId = function $$DvtLegendObjPeer$$$$getId$() {
    return this.$_id$;
  };
  $DvtLegendObjPeer$$.prototype.$getDisplayables$ = function $$DvtLegendObjPeer$$$$$getDisplayables$$() {
    return this.$_displayables$;
  };
  $DvtLegendObjPeer$$.prototype.$getCategories$ = function $$DvtLegendObjPeer$$$$$getCategories$$() {
    return null != this.$_category$ ? [this.$_category$] : null;
  };
  $DvtLegendObjPeer$$.prototype.$getAction$ = function $$DvtLegendObjPeer$$$$$getAction$$() {
    return this.$_action$;
  };
  $DvtLegendObjPeer$$.prototype.$isDrillable$ = function $$DvtLegendObjPeer$$$$$isDrillable$$() {
    return this.$_drillable$;
  };
  $DvtLegendObjPeer$$.prototype.$getShowPopupBehaviors$ = function $$DvtLegendObjPeer$$$$$getShowPopupBehaviors$$() {
    return this.$_spb$;
  };
  $DvtLegendObjPeer$$.prototype.$getAriaLabel$ = function $$DvtLegendObjPeer$$$$$getAriaLabel$$() {
    var $DvtLegendObjPeer$$ = [], $DvtLegendKeyboardHandler$$ = this.$_legend$.$getOptions$(), $DvtLegendEventManager$$ = this.$_legend$.$getOptions$().hideAndShowBehavior, $DvtLegendDefaults$$ = $DvtLegendRenderer$$.$isCategoryHidden$(this.$_category$, this.$_legend$), $DvtLegendAutomation$$ = this.getData();
    if (this.$_displayables$[0] instanceof $dvt$$5$$.$Button$) {
      return $DvtLegendObjPeer$$.push($dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "off" == $DvtLegendAutomation$$.expanded ? "STATE_COLLAPSED" : "STATE_EXPANDED")), $dvt$$5$$.$Displayable$.$generateAriaLabel$($DvtLegendAutomation$$.title, $DvtLegendObjPeer$$);
    }
    "off" != $DvtLegendEventManager$$ && "none" != $DvtLegendEventManager$$ && $DvtLegendObjPeer$$.push($dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, $DvtLegendDefaults$$ ? "STATE_HIDDEN" : "STATE_VISIBLE"));
    this.$isDrillable$() && $DvtLegendObjPeer$$.push($dvt$$5$$.$Bundle$.$getTranslation$($DvtLegendKeyboardHandler$$, "stateDrillable", $dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
    return null != $DvtLegendAutomation$$.shortDesc ? $dvt$$5$$.$Displayable$.$generateAriaLabel$($DvtLegendAutomation$$.shortDesc, $DvtLegendObjPeer$$) : 0 < $DvtLegendObjPeer$$.length ? $dvt$$5$$.$Displayable$.$generateAriaLabel$($DvtLegendAutomation$$.text, $DvtLegendObjPeer$$) : null;
  };
  $DvtLegendObjPeer$$.prototype.$updateAriaLabel$ = function $$DvtLegendObjPeer$$$$$updateAriaLabel$$() {
    !$dvt$$5$$.$Agent$.$deferAriaCreation$() && this.$_displayables$[0] && this.$_displayables$[0].$setAriaProperty$("label", this.$getAriaLabel$());
  };
  $DvtLegendObjPeer$$.prototype.$getNextNavigable$ = function $$DvtLegendObjPeer$$$$$getNextNavigable$$($DvtLegendObjPeer$$) {
    return $DvtLegendObjPeer$$.type == $dvt$$5$$.MouseEvent.$CLICK$ ? this : $dvt$$5$$.$KeyboardHandler$.$getNextNavigable$(this, $DvtLegendObjPeer$$, this.$_legend$.$_navigablePeers$, !0);
  };
  $DvtLegendObjPeer$$.prototype.$getKeyboardBoundingBox$ = function $$DvtLegendObjPeer$$$$$getKeyboardBoundingBox$$($DvtLegendObjPeer$$) {
    return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($DvtLegendObjPeer$$) : new $dvt$$5$$.$Rectangle$(0, 0, 0, 0);
  };
  $DvtLegendObjPeer$$.prototype.$getTargetElem$ = function $$DvtLegendObjPeer$$$$$getTargetElem$$() {
    return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : null;
  };
  $DvtLegendObjPeer$$.prototype.$showKeyboardFocusEffect$ = function $$DvtLegendObjPeer$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    this.$_displayables$[0] && (this.$_displayables$[0] instanceof $dvt$$5$$.$Button$ ? this.$_displayables$[0].$drawOverState$() : this.$_displayables$[0].$setSolidStroke$($dvt$$5$$.$Agent$.$getFocusColor$()));
  };
  $DvtLegendObjPeer$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtLegendObjPeer$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    this.$_displayables$[0] && (this.$_displayables$[0] instanceof $dvt$$5$$.$Button$ ? this.$_displayables$[0].$drawUpState$() : this.$_displayables$[0].$setStroke$(null));
  };
  $DvtLegendObjPeer$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtLegendObjPeer$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtLegendObjPeer$$.prototype.$getTooltip$ = function $$DvtLegendObjPeer$$$$$getTooltip$$() {
    return this.$_tooltip$;
  };
  $DvtLegendObjPeer$$.prototype.$getDatatip$ = function $$DvtLegendObjPeer$$$$$getDatatip$$() {
    return this.$_datatip$;
  };
  $DvtLegendObjPeer$$.prototype.$getDatatipColor$ = function $$DvtLegendObjPeer$$$$$getDatatipColor$$() {
    return this.$_item$.color;
  };
  $DvtLegendObjPeer$$.prototype.$isDragAvailable$ = function $$DvtLegendObjPeer$$$$$isDragAvailable$$() {
    return !0;
  };
  $DvtLegendObjPeer$$.prototype.$getDragTransferable$ = function $$DvtLegendObjPeer$$$$$getDragTransferable$$() {
    return [this.getId()];
  };
  $DvtLegendObjPeer$$.prototype.$getDragFeedback$ = function $$DvtLegendObjPeer$$$$$getDragFeedback$$() {
    return this.$getDisplayables$();
  };
  var $DvtLegendRenderer$$ = {};
  $dvt$$5$$.$Obj$.$createSubclass$($DvtLegendRenderer$$, $dvt$$5$$.$Obj$);
  $DvtLegendRenderer$$.$_DEFAULT_LINE_WIDTH_WITH_MARKER$ = 2;
  $DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$ = .6;
  $DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$ = 10;
  $DvtLegendRenderer$$.$_BUTTON_SIZE$ = 12;
  $DvtLegendRenderer$$.$_FOCUS_GAP$ = 2;
  $DvtLegendRenderer$$.$render$ = function $$DvtLegendRenderer$$$$render$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$getOptions$(), $DvtLegendAutomation$$ = $DvtLegendObjPeer$$.$getCtx$(), $contentDims_isRTL$$43_valign$$11$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtLegendAutomation$$);
    $DvtLegendObjPeer$$.$__setBounds$($DvtLegendKeyboardHandler$$);
    $DvtLegendEventManager$$.isLayout || $DvtLegendRenderer$$.$_renderBackground$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$);
    var $container$$133_translateX$$ = new $dvt$$5$$.$SimpleScrollableContainer$($DvtLegendAutomation$$, $DvtLegendKeyboardHandler$$.$w$, $DvtLegendKeyboardHandler$$.$h$), $contentContainer$$3_i$$524$$ = new $dvt$$5$$.$Container$($DvtLegendAutomation$$);
    $container$$133_translateX$$.$_container$.$addChild$($contentContainer$$3_i$$524$$);
    $DvtLegendObjPeer$$.$addChild$($container$$133_translateX$$);
    $DvtLegendObjPeer$$.$container$ = $container$$133_translateX$$;
    var $gapWidth$$2$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $DvtLegendEventManager$$.layout.outerGapWidth), $gapHeight$$2$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $DvtLegendEventManager$$.layout.outerGapHeight);
    $DvtLegendKeyboardHandler$$.x += $gapWidth$$2$$;
    $DvtLegendKeyboardHandler$$.y += $gapHeight$$2$$;
    $DvtLegendKeyboardHandler$$.$w$ -= 2 * $gapWidth$$2$$;
    $DvtLegendKeyboardHandler$$.$h$ -= 2 * $gapHeight$$2$$;
    if (0 >= $DvtLegendKeyboardHandler$$.$w$ || 0 >= $DvtLegendKeyboardHandler$$.$h$) {
      return new $dvt$$5$$.$Dimension$(0, 0);
    }
    $DvtLegendAutomation$$ = $DvtLegendRenderer$$.$_renderContents$($DvtLegendObjPeer$$, $contentContainer$$3_i$$524$$, new $dvt$$5$$.$Rectangle$($DvtLegendKeyboardHandler$$.x, $DvtLegendKeyboardHandler$$.y, $DvtLegendKeyboardHandler$$.$w$, $DvtLegendKeyboardHandler$$.$h$));
    if (0 == $DvtLegendAutomation$$.$w$ || 0 == $DvtLegendAutomation$$.$h$) {
      return new $dvt$$5$$.$Dimension$(0, 0);
    }
    $container$$133_translateX$$.$prepareContentPane$();
    $DvtLegendAutomation$$.$h$ > $DvtLegendKeyboardHandler$$.$h$ ? ($DvtLegendAutomation$$.$h$ = $DvtLegendKeyboardHandler$$.$h$, $DvtLegendEventManager$$._isScrollingLegend = !0) : $DvtLegendEventManager$$._isScrollingLegend = !1;
    var $translateY$$ = $container$$133_translateX$$ = 0, $halign$$12$$ = null != $DvtLegendEventManager$$.hAlign ? $DvtLegendEventManager$$.hAlign : $DvtLegendEventManager$$.halign;
    "center" == $halign$$12$$ ? $container$$133_translateX$$ = $DvtLegendKeyboardHandler$$.x - $DvtLegendAutomation$$.x + ($DvtLegendKeyboardHandler$$.$w$ - $DvtLegendAutomation$$.$w$) / 2 : "end" == $halign$$12$$ && ($container$$133_translateX$$ = $contentDims_isRTL$$43_valign$$11$$ ? $DvtLegendKeyboardHandler$$.x - $DvtLegendAutomation$$.x : $DvtLegendKeyboardHandler$$.x - $DvtLegendAutomation$$.x + $DvtLegendKeyboardHandler$$.$w$ - $DvtLegendAutomation$$.$w$);
    $contentDims_isRTL$$43_valign$$11$$ = null != $DvtLegendEventManager$$.vAlign ? $DvtLegendEventManager$$.vAlign : $DvtLegendEventManager$$.valign;
    "middle" == $contentDims_isRTL$$43_valign$$11$$ ? $translateY$$ = $DvtLegendKeyboardHandler$$.y - $DvtLegendAutomation$$.y + ($DvtLegendKeyboardHandler$$.$h$ - $DvtLegendAutomation$$.$h$) / 2 : "bottom" == $contentDims_isRTL$$43_valign$$11$$ && ($translateY$$ = $DvtLegendKeyboardHandler$$.y - $DvtLegendAutomation$$.y + $DvtLegendKeyboardHandler$$.$h$ - $DvtLegendAutomation$$.$h$);
    $contentDims_isRTL$$43_valign$$11$$ = new $dvt$$5$$.$Rectangle$($DvtLegendAutomation$$.x + $container$$133_translateX$$ - $gapWidth$$2$$, $DvtLegendAutomation$$.y + $translateY$$ - $gapHeight$$2$$, $DvtLegendAutomation$$.$w$ + 2 * $gapWidth$$2$$, $DvtLegendAutomation$$.$h$ + 2 * $gapHeight$$2$$);
    if ($DvtLegendEventManager$$.isLayout) {
      return $contentDims_isRTL$$43_valign$$11$$;
    }
    ($container$$133_translateX$$ || $translateY$$) && $contentContainer$$3_i$$524$$.$setTranslate$($container$$133_translateX$$, $translateY$$);
    $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$_titles$;
    for ($contentContainer$$3_i$$524$$ = 0;$contentContainer$$3_i$$524$$ < $DvtLegendEventManager$$.length;$contentContainer$$3_i$$524$$++) {
      $dvt$$5$$.$LayoutUtils$.align($DvtLegendAutomation$$, $DvtLegendEventManager$$[$contentContainer$$3_i$$524$$].$halign$, $DvtLegendEventManager$$[$contentContainer$$3_i$$524$$].text, $DvtLegendEventManager$$[$contentContainer$$3_i$$524$$].text.$measureDimensions$().$w$);
    }
    return $contentDims_isRTL$$43_valign$$11$$;
  };
  $DvtLegendRenderer$$.$_renderContents$ = function $$DvtLegendRenderer$$$$_renderContents$$($dvt$$5$$, $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = $dvt$$5$$.$getOptions$();
    $DvtLegendKeyboardHandler$$ = $DvtLegendKeyboardHandler$$.clone();
    var $DvtLegendAutomation$$ = $DvtLegendRenderer$$.$_renderTitle$($dvt$$5$$, $DvtLegendObjPeer$$, $DvtLegendEventManager$$.title, $DvtLegendKeyboardHandler$$, null, !0);
    if ($DvtLegendAutomation$$) {
      var $titleDim$$ = $DvtLegendAutomation$$.$measureDimensions$(), $titleGap$$ = $DvtLegendDefaults$$.$getGapSize$($dvt$$5$$, $DvtLegendEventManager$$.layout.titleGapHeight);
      $DvtLegendKeyboardHandler$$.y += $titleDim$$.$h$ + $titleGap$$;
      $DvtLegendKeyboardHandler$$.$h$ -= Math.floor($titleDim$$.$h$ + $titleGap$$);
    }
    $dvt$$5$$ = $DvtLegendRenderer$$.$_renderSections$($dvt$$5$$, $DvtLegendObjPeer$$, $DvtLegendEventManager$$.sections, $DvtLegendKeyboardHandler$$, []);
    return $DvtLegendAutomation$$ ? $titleDim$$.$getUnion$($dvt$$5$$) : $dvt$$5$$;
  };
  $DvtLegendRenderer$$.$_renderBackground$ = function $$DvtLegendRenderer$$$$_renderBackground$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$getOptions$(), $DvtLegendDefaults$$ = $DvtLegendEventManager$$.backgroundColor, $DvtLegendAutomation$$ = $DvtLegendEventManager$$.borderColor, $DvtLegendEventManager$$ = $DvtLegendEventManager$$.dnd ? $DvtLegendEventManager$$.dnd.drop.legend : {};
    if ($DvtLegendDefaults$$ || $DvtLegendAutomation$$ || 0 < Object.keys($DvtLegendEventManager$$).length) {
      $DvtLegendEventManager$$ = new $dvt$$5$$.Rect($DvtLegendObjPeer$$.$getCtx$(), $DvtLegendKeyboardHandler$$.x, $DvtLegendKeyboardHandler$$.y, $DvtLegendKeyboardHandler$$.$w$, $DvtLegendKeyboardHandler$$.$h$), $DvtLegendDefaults$$ ? $DvtLegendEventManager$$.$setSolidFill$($DvtLegendDefaults$$) : $DvtLegendEventManager$$.$setInvisibleFill$(), $DvtLegendAutomation$$ && ($DvtLegendEventManager$$.$setSolidStroke$($DvtLegendAutomation$$), $DvtLegendEventManager$$.$setPixelHinting$()), $DvtLegendObjPeer$$.$addChild$($DvtLegendEventManager$$), 
      $DvtLegendObjPeer$$.$_cache$.$putToCache$("background", $DvtLegendEventManager$$);
    }
  };
  $DvtLegendRenderer$$.$_renderTitle$ = function $$DvtLegendRenderer$$$$_renderTitle$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$, $id$$137$$, $button$$65$$) {
    var $options$$219$$ = $DvtLegendObjPeer$$.$getOptions$(), $context$$266_titleStyle$$3$$ = $DvtLegendKeyboardHandler$$.$getCtx$(), $isRTL$$44$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($context$$266_titleStyle$$3$$);
    if (!$DvtLegendEventManager$$) {
      return null;
    }
    $DvtLegendEventManager$$ = new $dvt$$5$$.$OutputText$($context$$266_titleStyle$$3$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$.x, $DvtLegendDefaults$$.y);
    $context$$266_titleStyle$$3$$ = $options$$219$$.titleStyle;
    $DvtLegendAutomation$$ && $DvtLegendAutomation$$.titleStyle ? $context$$266_titleStyle$$3$$ = new $dvt$$5$$.$CSSStyle$($DvtLegendAutomation$$.titleStyle) : $DvtLegendAutomation$$ && $options$$219$$._sectionTitleStyle && ($context$$266_titleStyle$$3$$ = $options$$219$$._sectionTitleStyle);
    $DvtLegendEventManager$$.$setCSSStyle$($context$$266_titleStyle$$3$$);
    return $dvt$$5$$.$TextUtils$.$fitText$($DvtLegendEventManager$$, $DvtLegendDefaults$$.$w$, Infinity, $DvtLegendKeyboardHandler$$) ? ($isRTL$$44$$ && $DvtLegendEventManager$$.$setX$($DvtLegendDefaults$$.x + $DvtLegendDefaults$$.$w$ - $DvtLegendEventManager$$.$measureDimensions$().$w$), $options$$219$$.isLayout ? $DvtLegendKeyboardHandler$$.removeChild($DvtLegendEventManager$$) : ($DvtLegendKeyboardHandler$$ = {id:$id$$137$$, button:$button$$65$$}, $DvtLegendKeyboardHandler$$.isCollapsible = $DvtLegendAutomation$$ && 
    ("on" == $DvtLegendAutomation$$.collapsible || 1 == $DvtLegendAutomation$$.collapsible), $DvtLegendObjPeer$$.$getEventManager$().$associate$($DvtLegendEventManager$$, new $dvt$$5$$.$SimpleObjPeer$($DvtLegendEventManager$$.$getUntruncatedTextString$(), null, null, $DvtLegendKeyboardHandler$$)), $DvtLegendRenderer$$ && $DvtLegendObjPeer$$.$__registerTitle$({text:$DvtLegendEventManager$$, $halign$:$DvtLegendAutomation$$ && $DvtLegendAutomation$$.titleHalign ? $DvtLegendAutomation$$.titleHalign : 
    $options$$219$$.titleHalign})), $DvtLegendEventManager$$) : null;
  };
  $DvtLegendRenderer$$.$_renderSections$ = function $$DvtLegendRenderer$$$$_renderSections$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendAutomation$$, $id$$138$$) {
    var $isHoriz$$17_options$$220$$ = $DvtLegendObjPeer$$.$getOptions$();
    null == $isHoriz$$17_options$$220$$.symbolWidth && null == $isHoriz$$17_options$$220$$.symbolHeight ? ($isHoriz$$17_options$$220$$.symbolWidth = $DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$, $isHoriz$$17_options$$220$$.symbolHeight = $DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$) : (null == $isHoriz$$17_options$$220$$.symbolWidth ? $isHoriz$$17_options$$220$$.symbolWidth = $isHoriz$$17_options$$220$$.symbolHeight : null == $isHoriz$$17_options$$220$$.symbolHeight && ($isHoriz$$17_options$$220$$.symbolHeight = 
    $isHoriz$$17_options$$220$$.symbolWidth), $isHoriz$$17_options$$220$$.symbolWidth = parseInt($isHoriz$$17_options$$220$$.symbolWidth), $isHoriz$$17_options$$220$$.symbolHeight = parseInt($isHoriz$$17_options$$220$$.symbolHeight));
    for (var $sectionGapHeight$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $isHoriz$$17_options$$220$$.layout.sectionGapHeight), $titleGapHeight$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $isHoriz$$17_options$$220$$.layout.titleGapHeight), $gapWidth$$3$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $isHoriz$$17_options$$220$$.layout.sectionGapWidth), $rowHeight$$2$$ = $DvtLegendRenderer$$.$_getRowHeight$($DvtLegendObjPeer$$), $isHoriz$$17_options$$220$$ = 
    "vertical" != $isHoriz$$17_options$$220$$.orientation, $totalDim$$1$$ = null, $horizAvailSpace$$ = $DvtLegendAutomation$$.clone(), $sectionDim$$, $i$$525$$ = 0;$i$$525$$ < $DvtLegendEventManager$$.length;$i$$525$$++) {
      var $sectionId$$2$$ = $id$$138$$.concat([$i$$525$$]), $gapHeight$$3$$ = "off" == $DvtLegendEventManager$$[$i$$525$$].expanded || 0 == $DvtLegendEventManager$$[$i$$525$$].expanded ? $titleGapHeight$$ : $sectionGapHeight$$;
      $isHoriz$$17_options$$220$$ ? ($sectionDim$$ = $DvtLegendRenderer$$.$_renderHorizontalSection$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$[$i$$525$$], $horizAvailSpace$$, $rowHeight$$2$$), $sectionDim$$.$w$ > $horizAvailSpace$$.$w$ ? ($horizAvailSpace$$.$w$ < $DvtLegendAutomation$$.$w$ && ($DvtLegendAutomation$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $DvtLegendAutomation$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$), $sectionDim$$ = $sectionDim$$.$w$ <= $DvtLegendAutomation$$.$w$ ? 
      $DvtLegendRenderer$$.$_renderHorizontalSection$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$[$i$$525$$], $DvtLegendAutomation$$, $rowHeight$$2$$) : $DvtLegendRenderer$$.$_renderVerticalSection$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$[$i$$525$$], $DvtLegendAutomation$$, $rowHeight$$2$$, $sectionId$$2$$, !0), $DvtLegendAutomation$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $DvtLegendAutomation$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$, 
      $horizAvailSpace$$ = $DvtLegendAutomation$$.clone()) : ($horizAvailSpace$$.$w$ -= $sectionDim$$.$w$ + $gapWidth$$3$$, $dvt$$5$$.$Agent$.$isRightToLeft$($DvtLegendObjPeer$$.$getCtx$()) || ($horizAvailSpace$$.x += $sectionDim$$.$w$ + $gapWidth$$3$$))) : ($sectionDim$$ = $DvtLegendRenderer$$.$_renderVerticalSection$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$[$i$$525$$], $DvtLegendAutomation$$, $rowHeight$$2$$, $sectionId$$2$$, !1), $DvtLegendAutomation$$.y += $sectionDim$$.$h$ + 
      $gapHeight$$3$$, $DvtLegendAutomation$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$);
      $totalDim$$1$$ = $totalDim$$1$$ ? $totalDim$$1$$.$getUnion$($sectionDim$$) : $sectionDim$$;
    }
    return $totalDim$$1$$;
  };
  $DvtLegendRenderer$$.$_createButton$ = function $$DvtLegendRenderer$$$$_createButton$$($DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $prefix$$5$$, $x$$173$$, $y$$153$$, $tooltip$$21$$, $id$$139$$, $callback$$129$$, $callbackObj$$56$$) {
    var $upState$$12$$ = $DvtLegendRenderer$$.$_createButtonImage$($DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$, $prefix$$5$$ + "Enabled", $x$$173$$, $y$$153$$), $overState$$9$$ = $DvtLegendRenderer$$.$_createButtonImage$($DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$, $prefix$$5$$ + "Over", $x$$173$$, $y$$153$$);
    $DvtLegendAutomation$$ = $DvtLegendRenderer$$.$_createButtonImage$($DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$, $prefix$$5$$ + "Down", $x$$173$$, $y$$153$$);
    $DvtLegendKeyboardHandler$$ = new $dvt$$5$$.$Button$($DvtLegendKeyboardHandler$$, $upState$$12$$, $overState$$9$$, $DvtLegendAutomation$$, null, $id$$139$$, $callback$$129$$, $callbackObj$$56$$);
    $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$associate$([$DvtLegendKeyboardHandler$$], $DvtLegendEventManager$$, $DvtLegendDefaults$$, $tooltip$$21$$, null, !1);
    $DvtLegendKeyboardHandler$$.$setAriaRole$("button");
    $DvtLegendEventManager$$.$updateAriaLabel$();
    return $DvtLegendKeyboardHandler$$;
  };
  $DvtLegendRenderer$$.$_createButtonImage$ = function $$DvtLegendRenderer$$$$_createButtonImage$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$) {
    var $suffix$$2$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtLegendObjPeer$$) ? "RTL" : "";
    $DvtLegendObjPeer$$ = new $dvt$$5$$.Image($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$ + $suffix$$2$$] ? $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$ + $suffix$$2$$] : $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$], $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$.$_BUTTON_SIZE$, $DvtLegendRenderer$$.$_BUTTON_SIZE$);
    $DvtLegendObjPeer$$.$setInvisibleFill$();
    return $DvtLegendObjPeer$$;
  };
  $DvtLegendRenderer$$.$_renderVerticalSection$ = function $$DvtLegendRenderer$$$$_renderVerticalSection$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendAutomation$$, $rowHeight$$3$$, $id$$140_nestedSectionDim_numRows$$, $minimizeNumRows_numCols$$) {
    if ($DvtLegendEventManager$$) {
      var $options$$221_textSpace$$ = $DvtLegendObjPeer$$.$getOptions$(), $currRow_symbolGap$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$221_textSpace$$.layout.symbolGapWidth), $rowGap$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$221_textSpace$$.layout.rowGap), $colGap$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$221_textSpace$$.layout.columnGap), $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$ = $DvtLegendObjPeer$$.$getCtx$(), 
      $isRTL$$45$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$);
      $DvtLegendAutomation$$ = $DvtLegendAutomation$$.clone();
      "off" != $options$$221_textSpace$$.scrolling && ($DvtLegendAutomation$$.$h$ = Infinity);
      var $buttonDim_buttonX_colInitY$$, $colInfo_colWidth_isCollapsible_titleGap$$1$$ = "on" == $DvtLegendEventManager$$.collapsible || 1 == $DvtLegendEventManager$$.collapsible, $button$$67_buttonType_contentWidth$$3_currCol$$;
      if ($colInfo_colWidth_isCollapsible_titleGap$$1$$) {
        $buttonDim_buttonX_colInitY$$ = $isRTL$$45$$ ? $DvtLegendAutomation$$.x + $DvtLegendAutomation$$.$w$ - $DvtLegendRenderer$$.$_BUTTON_SIZE$ : $DvtLegendAutomation$$.x;
        if (!$options$$221_textSpace$$.isLayout) {
          var $buttonTooltip_isCollapsed_numItems$$4$$ = "off" == $DvtLegendEventManager$$.expanded || 0 == $DvtLegendEventManager$$.expanded;
          $button$$67_buttonType_contentWidth$$3_currCol$$ = $buttonTooltip_isCollapsed_numItems$$4$$ ? "closed" : "open";
          var $buttonTooltip_isCollapsed_numItems$$4$$ = $dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, $buttonTooltip_isCollapsed_numItems$$4$$ ? "EXPAND" : "COLLAPSE", null), $em$$4_i$$526$$ = $DvtLegendObjPeer$$.$getEventManager$();
          $button$$67_buttonType_contentWidth$$3_currCol$$ = $DvtLegendRenderer$$.$_createButton$($buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$, $DvtLegendObjPeer$$, $DvtLegendEventManager$$, $options$$221_textSpace$$._resources, $button$$67_buttonType_contentWidth$$3_currCol$$, $buttonDim_buttonX_colInitY$$, $DvtLegendAutomation$$.y, $buttonTooltip_isCollapsed_numItems$$4$$, $id$$140_nestedSectionDim_numRows$$, $em$$4_i$$526$$.$onCollapseButtonClick$, $em$$4_i$$526$$);
          $DvtLegendKeyboardHandler$$.$addChild$($button$$67_buttonType_contentWidth$$3_currCol$$);
        }
        $buttonDim_buttonX_colInitY$$ = new $dvt$$5$$.$Rectangle$($buttonDim_buttonX_colInitY$$, $DvtLegendAutomation$$.y, $DvtLegendRenderer$$.$_BUTTON_SIZE$, $DvtLegendRenderer$$.$_BUTTON_SIZE$);
        $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$221_textSpace$$.layout.symbolGapWidth);
        $isRTL$$45$$ || ($DvtLegendAutomation$$.x += $DvtLegendRenderer$$.$_BUTTON_SIZE$ + $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$);
        $DvtLegendAutomation$$.$w$ -= $DvtLegendRenderer$$.$_BUTTON_SIZE$ + $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$;
      }
      $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$ = ($buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$ = $DvtLegendRenderer$$.$_renderTitle$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$.title, $DvtLegendAutomation$$, $DvtLegendEventManager$$, !$colInfo_colWidth_isCollapsible_titleGap$$1$$ && 1 >= $id$$140_nestedSectionDim_numRows$$.length, $id$$140_nestedSectionDim_numRows$$, $button$$67_buttonType_contentWidth$$3_currCol$$)) ? $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$.$measureDimensions$() : 
      new $dvt$$5$$.$Rectangle$($isRTL$$45$$ ? $DvtLegendAutomation$$.x + $DvtLegendAutomation$$.$w$ : $DvtLegendAutomation$$.x, $DvtLegendAutomation$$.y, 0, 0);
      $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$ = $buttonDim_buttonX_colInitY$$ ? $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$.$getUnion$($buttonDim_buttonX_colInitY$$) : $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$;
      if (!$DvtLegendEventManager$$.items && !$DvtLegendEventManager$$.sections || "off" == $DvtLegendEventManager$$.expanded || 0 == $DvtLegendEventManager$$.expanded) {
        return $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$;
      }
      0 < $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$.$h$ && ($colInfo_colWidth_isCollapsible_titleGap$$1$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$221_textSpace$$.layout.titleGapHeight), $DvtLegendAutomation$$.y += $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$.$h$ + $colInfo_colWidth_isCollapsible_titleGap$$1$$, $DvtLegendAutomation$$.$h$ -= $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$.$h$ + $colInfo_colWidth_isCollapsible_titleGap$$1$$);
      $DvtLegendEventManager$$.sections && ($id$$140_nestedSectionDim_numRows$$ = $DvtLegendRenderer$$.$_renderSections$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$.sections, $DvtLegendAutomation$$, $id$$140_nestedSectionDim_numRows$$), $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$ = $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$.$getUnion$($id$$140_nestedSectionDim_numRows$$));
      if (!$DvtLegendEventManager$$.items) {
        return $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$;
      }
      $colInfo_colWidth_isCollapsible_titleGap$$1$$ = $DvtLegendRenderer$$.$_calcColumns$($DvtLegendObjPeer$$, $DvtLegendAutomation$$, $rowHeight$$3$$, $DvtLegendEventManager$$.items, $minimizeNumRows_numCols$$);
      $minimizeNumRows_numCols$$ = $colInfo_colWidth_isCollapsible_titleGap$$1$$.numCols;
      $id$$140_nestedSectionDim_numRows$$ = $colInfo_colWidth_isCollapsible_titleGap$$1$$.numRows;
      $colInfo_colWidth_isCollapsible_titleGap$$1$$ = $colInfo_colWidth_isCollapsible_titleGap$$1$$.width;
      $buttonDim_buttonX_colInitY$$ = $DvtLegendAutomation$$.y;
      if (0 == $id$$140_nestedSectionDim_numRows$$ || 0 == $minimizeNumRows_numCols$$) {
        return $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$;
      }
      $button$$67_buttonType_contentWidth$$3_currCol$$ = Math.min($minimizeNumRows_numCols$$ * ($colInfo_colWidth_isCollapsible_titleGap$$1$$ + $colGap$$) - $colGap$$, $DvtLegendAutomation$$.$w$);
      $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$ = $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$.$getUnion$(new $dvt$$5$$.$Rectangle$($isRTL$$45$$ ? $DvtLegendAutomation$$.x + $DvtLegendAutomation$$.$w$ - $button$$67_buttonType_contentWidth$$3_currCol$$ : $DvtLegendAutomation$$.x, $DvtLegendAutomation$$.y, $button$$67_buttonType_contentWidth$$3_currCol$$, $id$$140_nestedSectionDim_numRows$$ * ($rowHeight$$3$$ + $rowGap$$) - $rowGap$$));
      if ($options$$221_textSpace$$.isLayout) {
        return $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$;
      }
      $options$$221_textSpace$$ = $colInfo_colWidth_isCollapsible_titleGap$$1$$ - $options$$221_textSpace$$.symbolWidth - $currRow_symbolGap$$;
      $currRow_symbolGap$$ = 0;
      $button$$67_buttonType_contentWidth$$3_currCol$$ = 1;
      $buttonTooltip_isCollapsed_numItems$$4$$ = $DvtLegendEventManager$$.items.length;
      for ($em$$4_i$$526$$ = 0;$em$$4_i$$526$$ < $buttonTooltip_isCollapsed_numItems$$4$$ && ($DvtLegendRenderer$$.$_createLegendItem$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$.items[$em$$4_i$$526$$], $DvtLegendAutomation$$, $options$$221_textSpace$$, $rowHeight$$3$$, $em$$4_i$$526$$), $DvtLegendAutomation$$.y += $rowHeight$$3$$ + $rowGap$$, $currRow_symbolGap$$++, $currRow_symbolGap$$ === $id$$140_nestedSectionDim_numRows$$ && $button$$67_buttonType_contentWidth$$3_currCol$$ !== 
      $minimizeNumRows_numCols$$ && ($DvtLegendAutomation$$.y = $buttonDim_buttonX_colInitY$$, $DvtLegendAutomation$$.$w$ -= $colInfo_colWidth_isCollapsible_titleGap$$1$$ + $colGap$$, $isRTL$$45$$ || ($DvtLegendAutomation$$.x += $colInfo_colWidth_isCollapsible_titleGap$$1$$ + $colGap$$), $currRow_symbolGap$$ = 0, $button$$67_buttonType_contentWidth$$3_currCol$$++), $currRow_symbolGap$$ !== $id$$140_nestedSectionDim_numRows$$);$em$$4_i$$526$$++) {
      }
      return $buttonGap_context$$269_sectionDim$$1_title$$17_titleDim$$1$$;
    }
  };
  $DvtLegendRenderer$$.$_renderHorizontalSection$ = function $$DvtLegendRenderer$$$$_renderHorizontalSection$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendAutomation$$, $rowHeight$$4$$) {
    if ($DvtLegendEventManager$$) {
      var $options$$222$$ = $DvtLegendObjPeer$$.$getOptions$(), $symbolWidth$$ = $options$$222$$.symbolWidth, $symbolGap$$1$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$222$$.layout.symbolGapWidth), $colGap$$1$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$222$$.layout.columnGap), $textWidths_titleGap$$2$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$222$$.layout.titleGapWidth), $numItems$$5$$ = $DvtLegendEventManager$$.items.length, 
      $isRTL$$46$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtLegendObjPeer$$.$getCtx$()), $sectionSpace$$1$$ = $DvtLegendAutomation$$.clone(), $title$$18$$ = $DvtLegendRenderer$$.$_renderTitle$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$.title, $DvtLegendAutomation$$, $DvtLegendEventManager$$, !1), $sectionDim$$2_titleDim$$2$$ = $title$$18$$ ? $title$$18$$.$measureDimensions$() : new $dvt$$5$$.$Rectangle$($isRTL$$46$$ ? $DvtLegendAutomation$$.x + $DvtLegendAutomation$$.$w$ : 
      $DvtLegendAutomation$$.x, $DvtLegendAutomation$$.y, 0, 0);
      if (!$DvtLegendEventManager$$.items) {
        return $sectionDim$$2_titleDim$$2$$;
      }
      0 < $sectionDim$$2_titleDim$$2$$.$w$ && ($sectionSpace$$1$$.$w$ -= $sectionDim$$2_titleDim$$2$$.$w$ + $textWidths_titleGap$$2$$, $isRTL$$46$$ || ($sectionSpace$$1$$.x += $sectionDim$$2_titleDim$$2$$.$w$ + $textWidths_titleGap$$2$$));
      var $textWidths_titleGap$$2$$ = [], $totalWidth$$5$$ = $DvtLegendAutomation$$.$w$ - $sectionSpace$$1$$.$w$, $item$$30_textWidth$$2$$, $i$$527$$;
      for ($i$$527$$ = 0;$i$$527$$ < $numItems$$5$$;$i$$527$$++) {
        $item$$30_textWidth$$2$$ = $DvtLegendEventManager$$.items[$i$$527$$], $item$$30_textWidth$$2$$ = Math.ceil($dvt$$5$$.$TextUtils$.$getTextStringWidth$($DvtLegendObjPeer$$.$getCtx$(), $item$$30_textWidth$$2$$.text, $options$$222$$.textStyle)), $totalWidth$$5$$ += $item$$30_textWidth$$2$$ + $symbolWidth$$ + $symbolGap$$1$$ + $colGap$$1$$, $textWidths_titleGap$$2$$.push($item$$30_textWidth$$2$$);
      }
      0 < $numItems$$5$$ && ($totalWidth$$5$$ -= $colGap$$1$$);
      $sectionDim$$2_titleDim$$2$$ = new $dvt$$5$$.$Rectangle$($isRTL$$46$$ ? $DvtLegendAutomation$$.x + $DvtLegendAutomation$$.$w$ - $totalWidth$$5$$ : $DvtLegendAutomation$$.x, $DvtLegendAutomation$$.y, $totalWidth$$5$$, Math.max($rowHeight$$4$$, $sectionDim$$2_titleDim$$2$$.$h$));
      if ($options$$222$$.isLayout || $totalWidth$$5$$ > $DvtLegendAutomation$$.$w$) {
        return $DvtLegendKeyboardHandler$$.removeChild($title$$18$$), $sectionDim$$2_titleDim$$2$$;
      }
      for ($i$$527$$ = 0;$i$$527$$ < $numItems$$5$$;$i$$527$$++) {
        $item$$30_textWidth$$2$$ = $DvtLegendEventManager$$.items[$i$$527$$], $DvtLegendRenderer$$.$_createLegendItem$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $item$$30_textWidth$$2$$, $sectionSpace$$1$$, $textWidths_titleGap$$2$$[$i$$527$$], $rowHeight$$4$$, $i$$527$$), $DvtLegendAutomation$$ = $textWidths_titleGap$$2$$[$i$$527$$] + $symbolWidth$$ + $symbolGap$$1$$, $sectionSpace$$1$$.$w$ -= $DvtLegendAutomation$$ + $colGap$$1$$, $isRTL$$46$$ || ($sectionSpace$$1$$.x += $DvtLegendAutomation$$ + 
        $colGap$$1$$);
      }
      return $sectionDim$$2_titleDim$$2$$;
    }
  };
  $DvtLegendRenderer$$.$_calcColumns$ = function $$DvtLegendRenderer$$$$_calcColumns$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$) {
    for (var $options$$223$$ = $DvtLegendObjPeer$$.$getOptions$(), $hasLargeItemsCount_symbolWidth$$1$$ = 100 < $dvt$$5$$.$Legend$.$getItemCount$($DvtLegendObjPeer$$), $fullColWidth_textWidth$$3$$ = 0, $i$$528_rowGap$$1$$ = 0;$i$$528_rowGap$$1$$ < $DvtLegendAutomation$$.length;$i$$528_rowGap$$1$$++) {
      var $item$$31_outputText_symbolGap$$2_tempWidth$$ = $DvtLegendAutomation$$[$i$$528_rowGap$$1$$];
      $hasLargeItemsCount_symbolWidth$$1$$ ? ($item$$31_outputText_symbolGap$$2_tempWidth$$ = new $dvt$$5$$.$OutputText$($DvtLegendObjPeer$$.$getCtx$(), $item$$31_outputText_symbolGap$$2_tempWidth$$.text), $item$$31_outputText_symbolGap$$2_tempWidth$$.$setCSSStyle$($options$$223$$.textStyle), $item$$31_outputText_symbolGap$$2_tempWidth$$ = $dvt$$5$$.$TextUtils$.$guessTextDimensions$($item$$31_outputText_symbolGap$$2_tempWidth$$).$w$) : $item$$31_outputText_symbolGap$$2_tempWidth$$ = $dvt$$5$$.$TextUtils$.$getTextStringWidth$($DvtLegendObjPeer$$.$getCtx$(), 
      $item$$31_outputText_symbolGap$$2_tempWidth$$.text, $options$$223$$.textStyle);
      $item$$31_outputText_symbolGap$$2_tempWidth$$ > $fullColWidth_textWidth$$3$$ && ($fullColWidth_textWidth$$3$$ = $item$$31_outputText_symbolGap$$2_tempWidth$$);
    }
    $hasLargeItemsCount_symbolWidth$$1$$ = $options$$223$$.symbolWidth;
    $item$$31_outputText_symbolGap$$2_tempWidth$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$223$$.layout.symbolGapWidth);
    $i$$528_rowGap$$1$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$223$$.layout.rowGap);
    $DvtLegendObjPeer$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$223$$.layout.columnGap);
    $fullColWidth_textWidth$$3$$ = Math.ceil($hasLargeItemsCount_symbolWidth$$1$$ + $item$$31_outputText_symbolGap$$2_tempWidth$$ + $fullColWidth_textWidth$$3$$);
    $DvtLegendRenderer$$ ? ($DvtLegendRenderer$$ = Math.min(Math.floor(($DvtLegendKeyboardHandler$$.$w$ + $DvtLegendObjPeer$$) / ($fullColWidth_textWidth$$3$$ + $DvtLegendObjPeer$$)), $DvtLegendAutomation$$.length), $DvtLegendEventManager$$ = Math.min(Math.floor(($DvtLegendKeyboardHandler$$.$h$ + $i$$528_rowGap$$1$$) / ($DvtLegendEventManager$$ + $i$$528_rowGap$$1$$)), Math.ceil($DvtLegendAutomation$$.length / $DvtLegendRenderer$$)), $DvtLegendRenderer$$ = Math.ceil($DvtLegendAutomation$$.length / 
    $DvtLegendEventManager$$), $DvtLegendEventManager$$ = Math.ceil($DvtLegendAutomation$$.length / $DvtLegendRenderer$$)) : Infinity == $DvtLegendKeyboardHandler$$.$h$ ? ($DvtLegendRenderer$$ = 1, $DvtLegendEventManager$$ = $DvtLegendAutomation$$.length) : ($DvtLegendEventManager$$ = Math.min(Math.floor(($DvtLegendKeyboardHandler$$.$h$ + $i$$528_rowGap$$1$$) / ($DvtLegendEventManager$$ + $i$$528_rowGap$$1$$)), $DvtLegendAutomation$$.length), $DvtLegendRenderer$$ = Math.ceil($DvtLegendAutomation$$.length / 
    $DvtLegendEventManager$$), $DvtLegendEventManager$$ = Math.ceil($DvtLegendAutomation$$.length / $DvtLegendRenderer$$));
    $DvtLegendKeyboardHandler$$ = Math.min($fullColWidth_textWidth$$3$$, ($DvtLegendKeyboardHandler$$.$w$ - $DvtLegendObjPeer$$ * ($DvtLegendRenderer$$ - 1)) / $DvtLegendRenderer$$);
    return $DvtLegendKeyboardHandler$$ < $hasLargeItemsCount_symbolWidth$$1$$ ? {width:0, numCols:0, numRows:0} : {width:$DvtLegendKeyboardHandler$$, numCols:$DvtLegendRenderer$$, numRows:$DvtLegendEventManager$$};
  };
  $DvtLegendRenderer$$.$_getRowHeight$ = function $$DvtLegendRenderer$$$$_getRowHeight$$($DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$.$getOptions$(), $DvtLegendEventManager$$ = new $dvt$$5$$.$OutputText$($DvtLegendObjPeer$$.$getCtx$(), "Test");
    $DvtLegendEventManager$$.$setCSSStyle$($DvtLegendKeyboardHandler$$.textStyle);
    $DvtLegendEventManager$$.$alignMiddle$();
    $DvtLegendEventManager$$ = $dvt$$5$$.$TextUtils$.$guessTextDimensions$($DvtLegendEventManager$$).$h$;
    $DvtLegendObjPeer$$ = $DvtLegendKeyboardHandler$$.symbolHeight + $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$.layout.symbolGapHeight);
    return Math.ceil(Math.max($DvtLegendEventManager$$, $DvtLegendObjPeer$$));
  };
  $DvtLegendRenderer$$.$_createLegendItem$ = function $$DvtLegendRenderer$$$$_createLegendItem$$($DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendAutomation$$, $availSpace$$101_itemRect$$, $textSpace$$1$$, $rowHeight$$6$$) {
    var $hideAndShow$$4_options$$225$$ = $DvtLegendKeyboardHandler$$.$getOptions$(), $context$$270$$ = $DvtLegendKeyboardHandler$$.$getCtx$(), $isRTL$$47$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($context$$270$$), $symbolWidth$$2$$ = $hideAndShow$$4_options$$225$$.symbolWidth, $symbolGap$$3$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendKeyboardHandler$$, $hideAndShow$$4_options$$225$$.layout.symbolGapWidth), $symbolX$$ = $isRTL$$47$$ ? $availSpace$$101_itemRect$$.x + $availSpace$$101_itemRect$$.$w$ - 
    $symbolWidth$$2$$ : $availSpace$$101_itemRect$$.x, $textX$$ = $isRTL$$47$$ ? $availSpace$$101_itemRect$$.x + $availSpace$$101_itemRect$$.$w$ - $symbolWidth$$2$$ - $symbolGap$$3$$ : $availSpace$$101_itemRect$$.x + $symbolWidth$$2$$ + $symbolGap$$3$$, $marker$$11$$ = $DvtLegendRenderer$$.$_createLegendSymbol$($DvtLegendKeyboardHandler$$, $symbolX$$, $availSpace$$101_itemRect$$.y, $rowHeight$$6$$, $DvtLegendAutomation$$), $label$$60$$ = $DvtLegendAutomation$$.text, $peer$$28_text$$69$$;
    $label$$60$$ && ($peer$$28_text$$69$$ = $DvtLegendRenderer$$.$_createLegendText$($DvtLegendEventManager$$, $textSpace$$1$$, $label$$60$$, $hideAndShow$$4_options$$225$$.textStyle)) && ($peer$$28_text$$69$$.$setX$($textX$$), $dvt$$5$$.$TextUtils$.$centerTextVertically$($peer$$28_text$$69$$, $availSpace$$101_itemRect$$.y + $rowHeight$$6$$ / 2), $isRTL$$47$$ && $peer$$28_text$$69$$.$alignRight$());
    $DvtLegendEventManager$$.$addChild$($marker$$11$$);
    $availSpace$$101_itemRect$$ = new $dvt$$5$$.Rect($context$$270$$, $isRTL$$47$$ ? $textX$$ - $textSpace$$1$$ - $DvtLegendRenderer$$.$_FOCUS_GAP$ : $symbolX$$ - $DvtLegendRenderer$$.$_FOCUS_GAP$, $availSpace$$101_itemRect$$.y - $DvtLegendRenderer$$.$_FOCUS_GAP$, $symbolWidth$$2$$ + $symbolGap$$3$$ + $textSpace$$1$$ + 2 * $DvtLegendRenderer$$.$_FOCUS_GAP$, $rowHeight$$6$$ + 2 * $DvtLegendRenderer$$.$_FOCUS_GAP$);
    $availSpace$$101_itemRect$$.$setInvisibleFill$();
    $hideAndShow$$4_options$$225$$ = $hideAndShow$$4_options$$225$$.hideAndShowBehavior;
    "none" != $hideAndShow$$4_options$$225$$ && "off" != $hideAndShow$$4_options$$225$$ && $availSpace$$101_itemRect$$.setCursor("pointer");
    $DvtLegendEventManager$$.$addChild$($availSpace$$101_itemRect$$);
    $DvtLegendEventManager$$ = [$availSpace$$101_itemRect$$, $marker$$11$$];
    null != $peer$$28_text$$69$$ && $DvtLegendEventManager$$.push($peer$$28_text$$69$$);
    $peer$$28_text$$69$$ = $DvtLegendObjPeer$$.$associate$($DvtLegendEventManager$$, $DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$, null != $peer$$28_text$$69$$ ? $peer$$28_text$$69$$.$getUntruncatedTextString$() : null, $DvtLegendAutomation$$.shortDesc, $DvtLegendRenderer$$.$_isItemDrillable$($DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$));
    $DvtLegendRenderer$$.$isCategoryHidden$($DvtLegendRenderer$$.$getItemCategory$($DvtLegendAutomation$$), $DvtLegendKeyboardHandler$$) && ($marker$$11$$.$setHollow$($peer$$28_text$$69$$.$getColor$()), $marker$$11$$.$setStyle$().$setClassName$());
    if ("none" != $hideAndShow$$4_options$$225$$ && "off" != $hideAndShow$$4_options$$225$$ || null != $DvtLegendAutomation$$.shortDesc) {
      $availSpace$$101_itemRect$$.$setAriaRole$("img"), $peer$$28_text$$69$$.$updateAriaLabel$();
    }
  };
  $DvtLegendRenderer$$.$_isItemDrillable$ = function $$DvtLegendRenderer$$$$_isItemDrillable$$($dvt$$5$$, $DvtLegendObjPeer$$) {
    return "on" == $DvtLegendObjPeer$$.drilling ? !0 : "off" == $DvtLegendObjPeer$$.drilling ? !1 : "on" == $dvt$$5$$.$getOptions$().drilling;
  };
  $DvtLegendRenderer$$.$_createLegendText$ = function $$DvtLegendRenderer$$$$_createLegendText$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$) {
    $DvtLegendEventManager$$ = new $dvt$$5$$.$OutputText$($DvtLegendObjPeer$$.$getCtx$(), $DvtLegendEventManager$$);
    $DvtLegendEventManager$$.$setCSSStyle$($DvtLegendDefaults$$);
    return $DvtLegendEventManager$$ = $dvt$$5$$.$TextUtils$.$fitText$($DvtLegendEventManager$$, $DvtLegendKeyboardHandler$$, Infinity, $DvtLegendObjPeer$$) ? $DvtLegendEventManager$$ : null;
  };
  $DvtLegendRenderer$$.$_createLegendSymbol$ = function $$DvtLegendRenderer$$$$_createLegendSymbol$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$) {
    var $legendOptions$$6_symbolHeight$$1$$ = $DvtLegendObjPeer$$.$getOptions$(), $context$$271_symbol$$2$$ = $DvtLegendObjPeer$$.$getCtx$(), $symbolType$$ = null != $DvtLegendAutomation$$.type ? $DvtLegendAutomation$$.type : $DvtLegendAutomation$$.symbolType;
    $DvtLegendAutomation$$.markerShape || ($DvtLegendAutomation$$.markerShape = $legendOptions$$6_symbolHeight$$1$$._markerShape);
    $DvtLegendAutomation$$.color || ($DvtLegendAutomation$$.color = $legendOptions$$6_symbolHeight$$1$$._color);
    $DvtLegendAutomation$$.lineWidth || ($DvtLegendAutomation$$.lineWidth = "lineWithMarker" == $symbolType$$ ? $DvtLegendRenderer$$.$_DEFAULT_LINE_WIDTH_WITH_MARKER$ : $legendOptions$$6_symbolHeight$$1$$._lineWidth);
    var $symbolWidth$$3$$ = $legendOptions$$6_symbolHeight$$1$$.symbolWidth, $legendOptions$$6_symbolHeight$$1$$ = $legendOptions$$6_symbolHeight$$1$$.symbolHeight, $cy$$26$$ = $DvtLegendEventManager$$ + $DvtLegendDefaults$$ / 2, $cx$$25$$ = $DvtLegendKeyboardHandler$$ + $symbolWidth$$3$$ / 2;
    "line" == $symbolType$$ ? $context$$271_symbol$$2$$ = $DvtLegendRenderer$$.$_createLine$($context$$271_symbol$$2$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $symbolWidth$$3$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$) : "lineWithMarker" == $symbolType$$ ? ($context$$271_symbol$$2$$ = $DvtLegendRenderer$$.$_createLine$($context$$271_symbol$$2$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $symbolWidth$$3$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$), $DvtLegendRenderer$$.$isCategoryHidden$($DvtLegendRenderer$$.$getItemCategory$($DvtLegendAutomation$$), 
    $DvtLegendObjPeer$$) || $context$$271_symbol$$2$$.$addChild$($DvtLegendRenderer$$.$_createMarker$($DvtLegendObjPeer$$, $cx$$25$$, $cy$$26$$, $symbolWidth$$3$$ * $DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$, $legendOptions$$6_symbolHeight$$1$$ * $DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$, $DvtLegendAutomation$$))) : "image" == $symbolType$$ ? $context$$271_symbol$$2$$ = $DvtLegendRenderer$$.$_createImage$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $symbolWidth$$3$$, 
    $legendOptions$$6_symbolHeight$$1$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$) : "_verticalBoxPlot" == $symbolType$$ ? ($legendOptions$$6_symbolHeight$$1$$ = Math.max(4 * Math.round($legendOptions$$6_symbolHeight$$1$$ / 4), 4), $context$$271_symbol$$2$$ = new $dvt$$5$$.$Container$($context$$271_symbol$$2$$), $context$$271_symbol$$2$$.$addChild$($DvtLegendRenderer$$.$_createMarker$($DvtLegendObjPeer$$, $cx$$25$$, $cy$$26$$ + $legendOptions$$6_symbolHeight$$1$$ / 4, $symbolWidth$$3$$, $legendOptions$$6_symbolHeight$$1$$ / 
    2, $DvtLegendRenderer$$.$_getBoxPlotOptions$($DvtLegendAutomation$$, "q2"))), $context$$271_symbol$$2$$.$addChild$($DvtLegendRenderer$$.$_createMarker$($DvtLegendObjPeer$$, $cx$$25$$, $cy$$26$$ - $legendOptions$$6_symbolHeight$$1$$ / 4, $symbolWidth$$3$$, $legendOptions$$6_symbolHeight$$1$$ / 2, $DvtLegendRenderer$$.$_getBoxPlotOptions$($DvtLegendAutomation$$, "q3")))) : "_horizontalBoxPlot" == $symbolType$$ ? ($DvtLegendKeyboardHandler$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($context$$271_symbol$$2$$), 
    $symbolWidth$$3$$ = Math.max(4 * Math.round($symbolWidth$$3$$ / 4), 4), $DvtLegendKeyboardHandler$$ = $symbolWidth$$3$$ / 4 * ($DvtLegendKeyboardHandler$$ ? 1 : -1), $context$$271_symbol$$2$$ = new $dvt$$5$$.$Container$($context$$271_symbol$$2$$), $context$$271_symbol$$2$$.$addChild$($DvtLegendRenderer$$.$_createMarker$($DvtLegendObjPeer$$, $cx$$25$$ + $DvtLegendKeyboardHandler$$, $cy$$26$$, $symbolWidth$$3$$ / 2, $legendOptions$$6_symbolHeight$$1$$, $DvtLegendRenderer$$.$_getBoxPlotOptions$($DvtLegendAutomation$$, 
    "q2"))), $context$$271_symbol$$2$$.$addChild$($DvtLegendRenderer$$.$_createMarker$($DvtLegendObjPeer$$, $cx$$25$$ - $DvtLegendKeyboardHandler$$, $cy$$26$$, $symbolWidth$$3$$ / 2, $legendOptions$$6_symbolHeight$$1$$, $DvtLegendRenderer$$.$_getBoxPlotOptions$($DvtLegendAutomation$$, "q3")))) : $context$$271_symbol$$2$$ = $DvtLegendRenderer$$.$_createMarker$($DvtLegendObjPeer$$, $cx$$25$$, $cy$$26$$, $symbolWidth$$3$$, $legendOptions$$6_symbolHeight$$1$$, $DvtLegendAutomation$$);
    return $context$$271_symbol$$2$$;
  };
  $DvtLegendRenderer$$.$_createImage$ = function $$DvtLegendRenderer$$$$_createImage$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$, $item$$35$$) {
    return new $dvt$$5$$.$ImageMarker$($DvtLegendObjPeer$$.$getCtx$(), $DvtLegendKeyboardHandler$$ + $DvtLegendDefaults$$ / 2, $DvtLegendEventManager$$ + $DvtLegendRenderer$$ / 2, $DvtLegendDefaults$$, $DvtLegendAutomation$$, null, $item$$35$$.source);
  };
  $DvtLegendRenderer$$.$_createMarker$ = function $$DvtLegendRenderer$$$$_createMarker$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$) {
    var $context$$273$$ = $DvtLegendObjPeer$$.$getCtx$(), $legendOptions$$7$$ = $DvtLegendObjPeer$$.$getOptions$();
    $DvtLegendObjPeer$$ = $DvtLegendRenderer$$.markerShape;
    var $color$$47$$ = $DvtLegendRenderer$$.markerColor ? $DvtLegendRenderer$$.markerColor : $DvtLegendRenderer$$.color, $style$$91$$ = $DvtLegendRenderer$$.markerStyle ? $DvtLegendRenderer$$.markerStyle : $DvtLegendRenderer$$.style, $className$$19$$ = $DvtLegendRenderer$$.markerClassName ? $DvtLegendRenderer$$.markerClassName : $DvtLegendRenderer$$.className, $pattern$$7$$ = $DvtLegendRenderer$$.pattern;
    $pattern$$7$$ && "none" != $pattern$$7$$ ? ($DvtLegendDefaults$$ = new $dvt$$5$$.$SimpleMarker$($context$$273$$, $DvtLegendObjPeer$$, $legendOptions$$7$$.skin, 0, 0, $DvtLegendDefaults$$, $DvtLegendAutomation$$, null, null, !0), $DvtLegendDefaults$$.$setFill$(new $dvt$$5$$.$PatternFill$($pattern$$7$$, $color$$47$$, "#FFFFFF")), $DvtLegendDefaults$$.$setTranslate$($DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$)) : ($DvtLegendDefaults$$ = new $dvt$$5$$.$SimpleMarker$($context$$273$$, $DvtLegendObjPeer$$, 
    $legendOptions$$7$$.skin, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, null, null, !0), $DvtLegendDefaults$$.$setSolidFill$($color$$47$$));
    $DvtLegendRenderer$$.borderColor && $DvtLegendDefaults$$.$setSolidStroke$($DvtLegendRenderer$$.borderColor, null, $DvtLegendRenderer$$._borderWidth ? $DvtLegendRenderer$$._borderWidth : 1);
    "square" != $DvtLegendObjPeer$$ && "rectangle" != $DvtLegendObjPeer$$ || $DvtLegendDefaults$$.$setPixelHinting$();
    $DvtLegendDefaults$$.$setClassName$($className$$19$$).$setStyle$($style$$91$$);
    return $DvtLegendDefaults$$;
  };
  $DvtLegendRenderer$$.$_createLine$ = function $$DvtLegendRenderer$$$$_createLine$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$) {
    $DvtLegendEventManager$$ += $DvtLegendAutomation$$ / 2;
    $DvtLegendObjPeer$$ = new $dvt$$5$$.$Line$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendKeyboardHandler$$ + $DvtLegendDefaults$$, $DvtLegendEventManager$$);
    $DvtLegendKeyboardHandler$$ = new $dvt$$5$$.$SolidStroke$($DvtLegendRenderer$$.color, 1, $DvtLegendRenderer$$.lineWidth);
    $DvtLegendDefaults$$ = $DvtLegendRenderer$$.lineStyle;
    "dashed" == $DvtLegendDefaults$$ ? $DvtLegendKeyboardHandler$$.$setType$($dvt$$5$$.$Stroke$.$convertTypeString$($DvtLegendDefaults$$), "4,2,4") : "dotted" == $DvtLegendDefaults$$ && $DvtLegendKeyboardHandler$$.$setType$($dvt$$5$$.$Stroke$.$convertTypeString$($DvtLegendDefaults$$), "2");
    $DvtLegendObjPeer$$.$setClassName$($DvtLegendRenderer$$.className).$setStyle$($DvtLegendRenderer$$.style);
    $DvtLegendObjPeer$$.$setStroke$($DvtLegendKeyboardHandler$$);
    $DvtLegendObjPeer$$.$setPixelHinting$();
    return $DvtLegendObjPeer$$;
  };
  $DvtLegendRenderer$$.$_getBoxPlotOptions$ = function $$DvtLegendRenderer$$$$_getBoxPlotOptions$$($dvt$$5$$, $DvtLegendObjPeer$$) {
    return {markerShape:"rectangle", color:$dvt$$5$$._boxPlot[$DvtLegendObjPeer$$ + "Color"], pattern:$dvt$$5$$._boxPlot["_" + $DvtLegendObjPeer$$ + "Pattern"], className:$dvt$$5$$._boxPlot[$DvtLegendObjPeer$$ + "ClassName"], style:$dvt$$5$$._boxPlot[$DvtLegendObjPeer$$ + "Style"]};
  };
  $DvtLegendRenderer$$.$getItemCategory$ = function $$DvtLegendRenderer$$$$getItemCategory$$($dvt$$5$$) {
    var $DvtLegendObjPeer$$ = null;
    return $DvtLegendObjPeer$$ = $dvt$$5$$.categories && 0 < $dvt$$5$$.categories.length ? $dvt$$5$$.categories[0] : $dvt$$5$$.id ? $dvt$$5$$.id : $dvt$$5$$.text;
  };
  $DvtLegendRenderer$$.$isCategoryHidden$ = function $$DvtLegendRenderer$$$$isCategoryHidden$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = $DvtLegendKeyboardHandler$$.$getOptions$().hiddenCategories;
    return !$DvtLegendEventManager$$ || 0 >= $DvtLegendEventManager$$.length ? !1 : -1 !== $dvt$$5$$.$ArrayUtils$.$getIndex$($DvtLegendEventManager$$, $DvtLegendObjPeer$$);
  };
  $dvt$$5$$.$exportProperty$($dvt$$5$$, "Legend", $dvt$$5$$.$Legend$);
  $dvt$$5$$.$exportProperty$($dvt$$5$$.$Legend$, "newInstance", $dvt$$5$$.$Legend$.newInstance);
  $dvt$$5$$.$exportProperty$($dvt$$5$$.$Legend$.prototype, "destroy", $dvt$$5$$.$Legend$.prototype.$destroy$);
  $dvt$$5$$.$exportProperty$($dvt$$5$$.$Legend$.prototype, "getAutomation", $dvt$$5$$.$Legend$.prototype.$getAutomation$);
  $dvt$$5$$.$exportProperty$($dvt$$5$$.$Legend$.prototype, "getPreferredSize", $dvt$$5$$.$Legend$.prototype.$getPreferredSize$);
  $dvt$$5$$.$exportProperty$($dvt$$5$$.$Legend$.prototype, "highlight", $dvt$$5$$.$Legend$.prototype.$highlight$);
  $dvt$$5$$.$exportProperty$($dvt$$5$$.$Legend$.prototype, "render", $dvt$$5$$.$Legend$.prototype.$render$);
  $dvt$$5$$.$exportProperty$($DvtLegendAutomation$$.prototype, "getDomElementForSubId", $DvtLegendAutomation$$.prototype.$getDomElementForSubId$);
  $dvt$$5$$.$exportProperty$($DvtLegendAutomation$$.prototype, "getItem", $DvtLegendAutomation$$.prototype.getItem);
  $dvt$$5$$.$exportProperty$($DvtLegendAutomation$$.prototype, "getSection", $DvtLegendAutomation$$.prototype.$getSection$);
  $dvt$$5$$.$exportProperty$($DvtLegendAutomation$$.prototype, "getTitle", $DvtLegendAutomation$$.prototype.$getTitle$);
})(dvt);
