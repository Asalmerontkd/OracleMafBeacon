(function($dvt$$6$$) {
  function $DvtNBoxAutomation$$($dvt$$6$$) {
    this.Init($dvt$$6$$);
  }
  function $DvtNBoxKeyboardHandler$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    this.Init($dvt$$6$$, $DvtNBoxAutomation$$);
  }
  function $DvtNBoxEventManager$$($dvt$$6$$) {
    this.Init($dvt$$6$$.$getCtx$(), $dvt$$6$$.$processEvent$, $dvt$$6$$);
    this.$_nbox$ = $dvt$$6$$;
  }
  function $DvtNBoxDataAnimationHandler$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    this.Init($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
  }
  function $DvtNBoxDrawer$$() {
  }
  function $DvtNBoxCategoryRolloverHandler$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    $DvtNBoxCategoryRolloverHandler$$.$superclass$.constructor.call(this, $dvt$$6$$, $DvtNBoxAutomation$$);
    this.$_nbox$ = $DvtNBoxAutomation$$;
  }
  function $DvtNBoxCategoryNode$$() {
  }
  function $DvtNBoxNodeOverflow$$() {
  }
  function $DvtNBoxNode$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    this.Init($dvt$$6$$, $DvtNBoxAutomation$$);
  }
  function $DvtNBoxCell$$() {
  }
  function $DvtNBoxDefaults$$() {
    this.Init({skyros:$DvtNBoxDefaults$$.$VERSION_1$, alta:$DvtNBoxDefaults$$.$SKIN_ALTA$});
  }
  $dvt$$6$$.$NBox$ = function $$dvt$$6$$$$NBox$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    this.Init($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
  };
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$NBox$, $dvt$$6$$.$BaseComponent$);
  $dvt$$6$$.$NBox$.newInstance = function $$dvt$$6$$$$NBox$$newInstance$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    return new $dvt$$6$$.$NBox$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
  };
  $dvt$$6$$.$NBox$.$getDefaults$ = function $$dvt$$6$$$$NBox$$$getDefaults$$($dvt$$6$$) {
    return (new $DvtNBoxDefaults$$).$getDefaults$($dvt$$6$$);
  };
  $dvt$$6$$.$NBox$.prototype.Init = function $$dvt$$6$$$$NBox$$$Init$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$) {
    $dvt$$6$$.$NBox$.$superclass$.Init.call(this, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$);
    this.$Defaults$ = new $DvtNBoxDefaults$$;
    this.$EventManager$ = new $DvtNBoxEventManager$$(this);
    this.$EventManager$.$addListeners$(this);
    this.$_dragSource$ = new $dvt$$6$$.$DragSource$($DvtNBoxAutomation$$);
    this.$EventManager$.$setDragSource$(this.$_dragSource$);
    $dvt$$6$$.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(this.$CreateKeyboardHandler$(this.$EventManager$));
    this.setId("nbox1000" + Math.floor(1E9 * Math.random()));
    this.$legend$ = null;
    this.$_peers$ = [];
    this.$_animationAllowed$ = !0;
  };
  $dvt$$6$$.$NBox$.prototype.$SetOptions$ = function $$dvt$$6$$$$NBox$$$$SetOptions$$($DvtNBoxAutomation$$) {
    $DvtNBoxAutomation$$ || ($DvtNBoxAutomation$$ = this.$getSanitizedOptions$());
    $DvtNBoxAutomation$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($DvtNBoxAutomation$$), $DvtNBoxDataUtils$$.$processDataObject$(this), $dvt$$6$$.$Agent$.$isEnvironmentBrowser$() || (this.$Options$[$dvt$$6$$.$NBoxConstants$.$ANIMATION_ON_DISPLAY$] = "none", this.$Options$[$dvt$$6$$.$NBoxConstants$.$ANIMATION_ON_DATA_CHANGE$] = "none")) : this.$Options$ || (this.$Options$ = this.$GetDefaults$());
    this.$_displayables$ = [];
    $DvtNBoxAutomation$$ = this.$Options$[$dvt$$6$$.$NBoxConstants$.$SELECTION_MODE$];
    this.$_selectionHandler$ = "single" == $DvtNBoxAutomation$$ ? new $dvt$$6$$.$SelectionHandler$($dvt$$6$$.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == $DvtNBoxAutomation$$ ? new $dvt$$6$$.$SelectionHandler$($dvt$$6$$.$SelectionHandler$.$TYPE_MULTIPLE$) : null;
    this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$);
  };
  $dvt$$6$$.$NBox$.prototype.$render$ = function $$dvt$$6$$$$NBox$$$$render$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDrawer$$ = $DvtNBoxStyleUtils$$.$getAnimationOnDataChange$(this), $DvtNBoxCategoryRolloverHandler$$ = null;
    this.$Options$ && "none" !== $DvtNBoxDrawer$$ && ($DvtNBoxCategoryRolloverHandler$$ = {options:this.$Options$, getOptions:function $$DvtNBoxCategoryRolloverHandler$$$getOptions$() {
      return this.options;
    }, displayables:this.$_displayables$, getDisplayables:function $$DvtNBoxCategoryRolloverHandler$$$getDisplayables$() {
      return this.displayables;
    }, id:this.getId(), getId:function $$DvtNBoxCategoryRolloverHandler$$$getId$() {
      return this.id;
    }}, $DvtNBoxCategoryRolloverHandler$$.$getOptions$ = $DvtNBoxCategoryRolloverHandler$$.getOptions, $DvtNBoxCategoryRolloverHandler$$.$getDisplayables$ = $DvtNBoxCategoryRolloverHandler$$.getDisplayables, $DvtNBoxCategoryRolloverHandler$$.getId = $DvtNBoxCategoryRolloverHandler$$.getId);
    this.$__cleanUp$();
    this.$SetOptions$($DvtNBoxAutomation$$);
    isNaN($DvtNBoxKeyboardHandler$$) || isNaN($DvtNBoxEventManager$$) || (this.$Width$ = $DvtNBoxKeyboardHandler$$, this.$Height$ = $DvtNBoxEventManager$$);
    $DvtNBoxKeyboardHandler$$ = new $dvt$$6$$.$Container$(this.$getCtx$());
    this.$addChild$($DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$render$(this, $DvtNBoxKeyboardHandler$$, new $dvt$$6$$.$Rectangle$(0, 0, this.$Width$, this.$Height$));
    $DvtNBoxEventManager$$ = [this];
    var $DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getLegend$(this);
    if ($DvtNBoxCategoryNode$$ && $DvtNBoxCategoryNode$$.sections) {
      var $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this, $DvtNBoxCategoryNode$$, "panelDrawer");
      $DvtNBoxCell$$ && ($DvtNBoxEventManager$$.push($DvtNBoxCell$$), $DvtNBoxCell$$.$isDisclosed$() && ($DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this, $DvtNBoxCategoryNode$$, "legend"), $DvtNBoxEventManager$$.push($DvtNBoxCategoryNode$$)));
    }
    this.$getCtx$().$setKeyboardFocusArray$($DvtNBoxEventManager$$);
    $DvtNBoxAutomation$$ && $DvtNBoxDataUtils$$.$getDrawer$(this) && $DvtNBoxDataUtils$$.$getGrouping$(this) && ($DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this, $DvtNBoxDataUtils$$.$getDrawer$(this)), this.$EventManager$.$setFocus$($DvtNBoxEventManager$$), this.$EventManager$.$setFocused$(!1));
    this.$_updateKeyboardFocusEffect$();
    this.$StopAnimation$();
    var $DvtNBoxCategoryNode$$ = $DvtNBoxStyleUtils$$.$getAnimationOnDisplay$(this), $DvtNBoxCell$$ = $DvtNBoxStyleUtils$$.$getAnimationDuration$(this), $DvtNBoxNodeOverflow$$ = new $dvt$$6$$.$Rectangle$(0, 0, this.$Width$, this.$Height$);
    $DvtNBoxEventManager$$ = !1;
    this.$_container$ ? "none" != $DvtNBoxDrawer$$ && $DvtNBoxAutomation$$ && ((this.$Animation$ = $dvt$$6$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$(this.$getCtx$(), $DvtNBoxDrawer$$, this.$_container$, $DvtNBoxKeyboardHandler$$, $DvtNBoxNodeOverflow$$, $DvtNBoxCell$$)) ? $DvtNBoxEventManager$$ = !0 : (this.$_deleteContainer$ = new $dvt$$6$$.$Container$(this.$getCtx$(), "DeleteContainer"), this.$addChild$(this.$_deleteContainer$), $DvtNBoxDrawer$$ = new $DvtNBoxDataAnimationHandler$$(this.$getCtx$(), 
    this.$_deleteContainer$, $DvtNBoxCategoryRolloverHandler$$, this), $DvtNBoxCategoryNode$$ = $DvtNBoxRenderer$$.$getNodeOrderFunction$(this), $DvtNBoxDrawer$$.$constructAnimation$([$DvtNBoxCategoryRolloverHandler$$], [this]), this.$Animation$ = $DvtNBoxDrawer$$.$getAnimation$(), $dvt$$6$$.$Playable$.$appendOnEnd$(this.$Animation$, $DvtNBoxCategoryNode$$, this))) : "none" !== $DvtNBoxCategoryNode$$ && (this.$Animation$ = $dvt$$6$$.$BlackBoxAnimationHandler$.$getInAnimation$(this.$getCtx$(), $DvtNBoxCategoryNode$$, 
    $DvtNBoxKeyboardHandler$$, $DvtNBoxNodeOverflow$$, $DvtNBoxCell$$));
    this.$Animation$ ? (this.$setMouseEnabled$(!1), $dvt$$6$$.$Playable$.$appendOnEnd$(this.$Animation$, this.$_getOnAnimationEndFunction$($DvtNBoxAutomation$$), this), this.$Animation$.play()) : this.$_getOnAnimationEndFunction$($DvtNBoxAutomation$$).call(this);
    $DvtNBoxEventManager$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$());
    this.$_container$ = $DvtNBoxKeyboardHandler$$;
    this.$UpdateAriaAttributes$();
  };
  $dvt$$6$$.$NBox$.prototype.$__cleanUp$ = function $$dvt$$6$$$$NBox$$$$__cleanUp$$() {
    this.$EventManager$.$hideTooltip$();
    this.$_peers$.length = 0;
  };
  $dvt$$6$$.$NBox$.prototype.$_getOnAnimationEndFunction$ = function $$dvt$$6$$$$NBox$$$$_getOnAnimationEndFunction$$($DvtNBoxAutomation$$) {
    return function() {
      this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = null);
      this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$.$destroy$());
      this.$_deleteContainer$ = null;
      this.$setMouseEnabled$(!0);
      this.$AnimationStopped$ || (this.$Animation$ && $dvt$$6$$.$Agent$.$isPlatformIE$() && 12 <= $dvt$$6$$.$Agent$.$getVersion$() && (this.$Animation$ = null, this.$setAnimationAllowed$(!1), this.$render$($DvtNBoxAutomation$$), this.$setAnimationAllowed$(!0)), this.$RenderComplete$());
      this.$Animation$ = null;
      this.$AnimationStopped$ = !1;
    };
  };
  $dvt$$6$$.$NBox$.prototype.$CreateKeyboardHandler$ = function $$dvt$$6$$$$NBox$$$$CreateKeyboardHandler$$($dvt$$6$$) {
    return new $DvtNBoxKeyboardHandler$$($dvt$$6$$, this);
  };
  $dvt$$6$$.$NBox$.prototype.$getChildContainer$ = function $$dvt$$6$$$$NBox$$$$getChildContainer$$() {
    return this.$_container$;
  };
  $dvt$$6$$.$NBox$.prototype.$getDisplayables$ = function $$dvt$$6$$$$NBox$$$$getDisplayables$$() {
    return this.$_displayables$;
  };
  $dvt$$6$$.$NBox$.prototype.$_updateKeyboardFocusEffect$ = function $$dvt$$6$$$$NBox$$$$_updateKeyboardFocusEffect$$() {
    var $dvt$$6$$ = this.$EventManager$.$getFocus$(), $DvtNBoxAutomation$$ = !1;
    if ($dvt$$6$$) {
      var $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$ = $dvt$$6$$.$isShowingKeyboardFocusEffect$();
      $dvt$$6$$.$getKeyboardFocusDisplayable$ && ($DvtNBoxKeyboardHandler$$ = $dvt$$6$$.$getKeyboardFocusDisplayable$());
      $DvtNBoxKeyboardHandler$$ && $DvtNBoxAutomation$$ && $DvtNBoxKeyboardHandler$$.$showKeyboardFocusEffect$();
      this.$EventManager$.$setFocus$($DvtNBoxKeyboardHandler$$);
    }
  };
  $dvt$$6$$.$NBox$.prototype.$processEvent$ = function $$dvt$$6$$$$NBox$$$$processEvent$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.type, $DvtNBoxEventManager$$ = this.$getSanitizedOptions$();
    "categoryHide" == $DvtNBoxKeyboardHandler$$ || "categoryShow" == $DvtNBoxKeyboardHandler$$ ? $DvtNBoxAutomation$$ = this.$_processHideShowEvent$($DvtNBoxAutomation$$) : "categoryHighlight" == $DvtNBoxKeyboardHandler$$ ? $DvtNBoxAutomation$$ = this.$_processRolloverEvent$($DvtNBoxAutomation$$) : "selection" == $DvtNBoxKeyboardHandler$$ ? $DvtNBoxAutomation$$ = this.$_processSelectionEvent$($DvtNBoxAutomation$$) : $DvtNBoxEventManager$$._legend && $DvtNBoxKeyboardHandler$$ == $dvt$$6$$.$PanelDrawerEvent$.$TYPE$ && 
    ($DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getSubType$() == $dvt$$6$$.$PanelDrawerEvent$.$SUBTYPE_HIDE$ ? "undisclosed" : "disclosed", $DvtNBoxAutomation$$ = $dvt$$6$$.$EventFactory$.$newAdfPropertyChangeEvent$($dvt$$6$$.$NBoxConstants$.$LEGEND_DISCLOSURE$, $DvtNBoxKeyboardHandler$$), $DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$LEGEND_DISCLOSURE$] = $DvtNBoxKeyboardHandler$$, this.$render$($DvtNBoxEventManager$$));
    $DvtNBoxAutomation$$ && this.dispatchEvent($DvtNBoxAutomation$$);
  };
  $dvt$$6$$.$NBox$.prototype.$_processHideShowEvent$ = function $$dvt$$6$$$$NBox$$$$_processHideShowEvent$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = this.$getSanitizedOptions$(), $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$HIDDEN_CATEGORIES$];
    $DvtNBoxEventManager$$ || ($DvtNBoxEventManager$$ = []);
    var $DvtNBoxDataAnimationHandler$$ = $dvt$$6$$.$ArrayUtils$.$getIndex$($DvtNBoxEventManager$$, $DvtNBoxAutomation$$.category);
    "categoryHide" == $DvtNBoxAutomation$$.type && -1 == $DvtNBoxDataAnimationHandler$$ && $DvtNBoxEventManager$$.push($DvtNBoxAutomation$$.category);
    "categoryShow" == $DvtNBoxAutomation$$.type && -1 != $DvtNBoxDataAnimationHandler$$ && $DvtNBoxEventManager$$.splice($DvtNBoxDataAnimationHandler$$, 1);
    0 == $DvtNBoxEventManager$$.length && ($DvtNBoxEventManager$$ = null);
    $DvtNBoxAutomation$$ = $dvt$$6$$.$EventFactory$.$newAdfPropertyChangeEvent$($dvt$$6$$.$NBoxConstants$.$HIDDEN_CATEGORIES$, $DvtNBoxEventManager$$);
    $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$HIDDEN_CATEGORIES$] = $DvtNBoxEventManager$$;
    this.$render$($DvtNBoxKeyboardHandler$$);
    return $DvtNBoxAutomation$$;
  };
  $dvt$$6$$.$NBox$.prototype.$_processRolloverEvent$ = function $$dvt$$6$$$$NBox$$$$_processRolloverEvent$$($dvt$$6$$) {
    this.$_processHighlighting$($dvt$$6$$.categories);
    return $dvt$$6$$;
  };
  $dvt$$6$$.$NBox$.prototype.$_processSelectionEvent$ = function $$dvt$$6$$$$NBox$$$$_processSelectionEvent$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.selection, $DvtNBoxEventManager$$ = null;
    if ($DvtNBoxKeyboardHandler$$) {
      $DvtNBoxAutomation$$ = {};
      for ($DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxEventManager$$++) {
        $DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$]] = !0;
      }
      var $DvtNBoxKeyboardHandler$$ = this.$getObjects$(), $DvtNBoxDataAnimationHandler$$ = null;
      if ($DvtNBoxDataUtils$$.$getGrouping$(this)) {
        for ($DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxEventManager$$++) {
          if ($DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$] instanceof $DvtNBoxCategoryNode$$) {
            if ($DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$].getId()]) {
              $DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$].getId()] = !1;
              for (var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$].getData().nodeIndices, $DvtNBoxCell$$ = 0;$DvtNBoxCell$$ < $DvtNBoxCategoryRolloverHandler$$.length;$DvtNBoxCell$$++) {
                var $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$(this, $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxCell$$]);
                $DvtNBoxAutomation$$[$DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.ID]] = !0;
              }
            }
          } else {
            $DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$] instanceof $DvtNBoxDrawer$$ && ($DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$]);
          }
        }
      }
      var $DvtNBoxKeyboardHandler$$ = [], $DvtNBoxEventManager$$ = [], $DvtNBoxNode$$;
      for ($DvtNBoxNode$$ in $DvtNBoxAutomation$$) {
        $DvtNBoxAutomation$$[$DvtNBoxNode$$] && ($DvtNBoxKeyboardHandler$$.push($DvtNBoxNode$$), $DvtNBoxEventManager$$.push($DvtNBoxNode$$));
      }
      $DvtNBoxAutomation$$ = $dvt$$6$$.$EventFactory$.$newSelectionEvent$($DvtNBoxKeyboardHandler$$);
    }
    $DvtNBoxDataUtils$$.$setSelectedItems$(this, $DvtNBoxEventManager$$);
    $DvtNBoxDataAnimationHandler$$ && $DvtNBoxDataAnimationHandler$$.$UpdateAccessibilityAttributes$();
    return $DvtNBoxAutomation$$;
  };
  $dvt$$6$$.$NBox$.prototype.$registerObject$ = function $$dvt$$6$$$$NBox$$$$registerObject$$($dvt$$6$$) {
    this.$_peers$.push($dvt$$6$$);
  };
  $dvt$$6$$.$NBox$.prototype.$getObjects$ = function $$dvt$$6$$$$NBox$$$$getObjects$$() {
    return this.$_peers$;
  };
  $dvt$$6$$.$NBox$.prototype.getWidth = function $$dvt$$6$$$$NBox$$$getWidth$() {
    return this.$Width$;
  };
  $dvt$$6$$.$NBox$.prototype.getHeight = function $$dvt$$6$$$$NBox$$$getHeight$() {
    return this.$Height$;
  };
  $dvt$$6$$.$NBox$.prototype.$getSelectionHandler$ = function $$dvt$$6$$$$NBox$$$$getSelectionHandler$$() {
    return this.$_selectionHandler$;
  };
  $dvt$$6$$.$NBox$.prototype.$isSelectionSupported$ = function $$dvt$$6$$$$NBox$$$$isSelectionSupported$$() {
    return this.$_selectionHandler$ ? !0 : !1;
  };
  $dvt$$6$$.$NBox$.prototype.$getShowPopupBehaviors$ = function $$dvt$$6$$$$NBox$$$$getShowPopupBehaviors$$($dvt$$6$$) {
    return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$dvt$$6$$] : null;
  };
  $dvt$$6$$.$NBox$.prototype.$animateUpdate$ = function $$dvt$$6$$$$NBox$$$$animateUpdate$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    $DvtNBoxRenderer$$.$animateUpdate$($dvt$$6$$, $DvtNBoxAutomation$$, this);
  };
  $dvt$$6$$.$NBox$.prototype.$getSanitizedOptions$ = function $$dvt$$6$$$$NBox$$$$getSanitizedOptions$$() {
    return $dvt$$6$$.$JsonUtils$.clone(this.$getOptions$(), function($dvt$$6$$) {
      return 0 != $dvt$$6$$.indexOf("__");
    });
  };
  $dvt$$6$$.$NBox$.prototype.$getSubcomponentStyles$ = function $$dvt$$6$$$$NBox$$$$getSubcomponentStyles$$() {
    return {};
  };
  $dvt$$6$$.$NBox$.prototype.$__isDragAvailable$ = function $$dvt$$6$$$$NBox$$$$__isDragAvailable$$($dvt$$6$$) {
    return this.$_selectionHandler$ ? $dvt$$6$$[0] : null;
  };
  $dvt$$6$$.$NBox$.prototype.$__getDragTransferable$ = function $$dvt$$6$$$$NBox$$$$__getDragTransferable$$($DvtNBoxAutomation$$) {
    $DvtNBoxAutomation$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($DvtNBoxAutomation$$, !1), this.$EventManager$.$fireSelectionEvent$());
    $DvtNBoxAutomation$$ = [];
    for (var $DvtNBoxKeyboardHandler$$ = {}, $DvtNBoxEventManager$$ = this.$_selectionHandler$.getSelection(), $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxEventManager$$.length;$DvtNBoxDataAnimationHandler$$++) {
      var $DvtNBoxDrawer$$ = $DvtNBoxEventManager$$[$DvtNBoxDataAnimationHandler$$];
      if ($DvtNBoxDrawer$$ instanceof $DvtNBoxNode$$) {
        $DvtNBoxDrawer$$ = $DvtNBoxDrawer$$.getData()[$dvt$$6$$.$NBoxConstants$.ID], $DvtNBoxAutomation$$.push($DvtNBoxDrawer$$), $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$] = !0;
      } else {
        if ($DvtNBoxDrawer$$ instanceof $DvtNBoxCategoryNode$$) {
          for (var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDrawer$$.getData().nodeIndices, $DvtNBoxCell$$ = 0;$DvtNBoxCell$$ < $DvtNBoxCategoryRolloverHandler$$.length;$DvtNBoxCell$$++) {
            var $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$(this, $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxCell$$])[$dvt$$6$$.$NBoxConstants$.ID];
            $DvtNBoxAutomation$$.push($DvtNBoxNodeOverflow$$);
            $DvtNBoxKeyboardHandler$$[$DvtNBoxNodeOverflow$$] = !0;
          }
          $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$.getData()[$dvt$$6$$.$NBoxConstants$.ID]] = !0;
        }
      }
    }
    $DvtNBoxEventManager$$ = this.$_selectionHandler$.$getSelectedIds$();
    for ($DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxEventManager$$.length;$DvtNBoxDataAnimationHandler$$++) {
      if ($DvtNBoxDrawer$$ = $DvtNBoxEventManager$$[$DvtNBoxDataAnimationHandler$$], !$DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$]) {
        if (!isNaN($DvtNBoxDataUtils$$.$getNodeIndex$(this, $DvtNBoxDrawer$$))) {
          $DvtNBoxAutomation$$.push($DvtNBoxDrawer$$), $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$] = !0;
        } else {
          if ($DvtNBoxDataUtils$$.$getGrouping$(this) && $DvtNBoxDataUtils$$.$getCategoryNode$(this, $DvtNBoxDrawer$$)) {
            $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this, $DvtNBoxDrawer$$).nodeIndices;
            for ($DvtNBoxCell$$ = 0;$DvtNBoxCell$$ < $DvtNBoxCategoryRolloverHandler$$.length;$DvtNBoxCell$$++) {
              $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$(this, $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxCell$$])[$dvt$$6$$.$NBoxConstants$.ID], $DvtNBoxKeyboardHandler$$[$DvtNBoxNodeOverflow$$] || ($DvtNBoxAutomation$$.push($DvtNBoxNodeOverflow$$), $DvtNBoxKeyboardHandler$$[$DvtNBoxNodeOverflow$$] = !0);
            }
            $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$] = !0;
          }
        }
      }
    }
    return $DvtNBoxAutomation$$;
  };
  $dvt$$6$$.$NBox$.prototype.$__getDragFeedback$ = function $$dvt$$6$$$$NBox$$$$__getDragFeedback$$() {
    return this.$_selectionHandler$.getSelection().slice(0);
  };
  $dvt$$6$$.$NBox$.prototype.$getAutomation$ = function $$dvt$$6$$$$NBox$$$$getAutomation$$() {
    this.$Automation$ || (this.$Automation$ = new $DvtNBoxAutomation$$(this));
    return this.$Automation$;
  };
  $dvt$$6$$.$NBox$.prototype.$GetComponentDescription$ = function $$dvt$$6$$$$NBox$$$$GetComponentDescription$$() {
    return $dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$UTIL_PREFIX$, "NBOX", $DvtNBoxDataUtils$$.$getColumnCount$(this) * $DvtNBoxDataUtils$$.$getRowCount$(this));
  };
  $dvt$$6$$.$NBox$.prototype.$highlight$ = function $$dvt$$6$$$$NBox$$$$highlight$$($DvtNBoxAutomation$$) {
    this.$Options$.highlightedCategories = $dvt$$6$$.$JsonUtils$.clone($DvtNBoxAutomation$$);
    this.$_processHighlighting$($DvtNBoxAutomation$$);
  };
  $dvt$$6$$.$NBox$.prototype.$_processHighlighting$ = function $$dvt$$6$$$$NBox$$$$_processHighlighting$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = this.$getNodeDisplayables$(), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRowCount$(this) * $DvtNBoxDataUtils$$.$getColumnCount$(this);
    this.$getOptions$().__highlightedMap = null;
    for ($DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxEventManager$$;$DvtNBoxCategoryRolloverHandler$$++) {
      var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getCell$(this, $DvtNBoxCategoryRolloverHandler$$), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this, $DvtNBoxDataAnimationHandler$$);
      $DvtNBoxCellRenderer$$.$renderHeader$(this, $DvtNBoxDataAnimationHandler$$, $DvtNBoxDrawer$$, !1);
    }
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$(this);
    $DvtNBoxEventManager$$ = {};
    if ($DvtNBoxDataAnimationHandler$$) {
      for (var $DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxCategoryRolloverHandler$$++) {
        $DvtNBoxEventManager$$[$DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryRolloverHandler$$][$dvt$$6$$.$NBoxConstants$.ID]] = !0;
      }
    }
    for ($DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxCategoryRolloverHandler$$++) {
      if ($DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$ && 0 < $DvtNBoxAutomation$$.length) {
        a: {
          $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$];
          if ($DvtNBoxDataAnimationHandler$$ instanceof $DvtNBoxNode$$) {
            if ($DvtNBoxDataAnimationHandler$$.$getCategories$()) {
              $DvtNBoxDataAnimationHandler$$ = "all" == this.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$HIGHLIGHT_MATCH$] ? $dvt$$6$$.$ArrayUtils$.$hasAllItems$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$.$getCategories$()) : $dvt$$6$$.$ArrayUtils$.$hasAnyItem$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$.$getCategories$());
              break a;
            }
          } else {
            if ($DvtNBoxDataAnimationHandler$$ instanceof $DvtNBoxCategoryNode$$) {
              for (var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataAnimationHandler$$.getData(), $DvtNBoxDrawer$$ = $DvtNBoxDataAnimationHandler$$.nodeIndices.length, $DvtNBoxCell$$ = 0;$DvtNBoxCell$$ < $DvtNBoxDrawer$$;$DvtNBoxCell$$++) {
                var $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$(this, $DvtNBoxDataAnimationHandler$$.nodeIndices[$DvtNBoxCell$$]);
                if ($DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.$CATEGORIES$] && ("all" == this.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$HIGHLIGHT_MATCH$] ? $dvt$$6$$.$ArrayUtils$.$hasAllItems$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.$CATEGORIES$]) : $dvt$$6$$.$ArrayUtils$.$hasAnyItem$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.$CATEGORIES$]))) {
                  $DvtNBoxDataAnimationHandler$$ = !0;
                  break a;
                }
              }
            }
          }
          $DvtNBoxDataAnimationHandler$$ = !1;
        }
        $DvtNBoxDataAnimationHandler$$ = !$DvtNBoxDataAnimationHandler$$;
      }
      $DvtNBoxDataAnimationHandler$$ ? $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$].$setAlpha$($DvtNBoxStyleUtils$$.$getFadedNodeAlpha$(this)) : $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$].$setAlpha$(1);
      if ($DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$] instanceof $DvtNBoxCategoryNode$$) {
        $DvtNBoxDrawer$$ = 0;
        $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$].getData();
        for ($DvtNBoxCell$$ = 0;$DvtNBoxCell$$ < $DvtNBoxDataAnimationHandler$$.nodeIndices.length;$DvtNBoxCell$$++) {
          $DvtNBoxEventManager$$[$DvtNBoxDataAnimationHandler$$.nodeIndices[$DvtNBoxCell$$]] && ($DvtNBoxDrawer$$ += 1);
        }
        $DvtNBoxDataAnimationHandler$$.highlightedCount = $DvtNBoxDrawer$$;
        $DvtNBoxDrawer$$ = null != $DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$(this, $DvtNBoxDataAnimationHandler$$) || null != $DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$(this, $DvtNBoxDataAnimationHandler$$);
        $DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$(this, $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$].getData(), $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$], $DvtNBoxDataAnimationHandler$$.__scale, $DvtNBoxDrawer$$, $DvtNBoxDataAnimationHandler$$.__gap);
      }
    }
  };
  $dvt$$6$$.$NBox$.prototype.$getNodeDisplayables$ = function $$dvt$$6$$$$NBox$$$$getNodeDisplayables$$() {
    for (var $DvtNBoxAutomation$$ = [], $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getNodeCount$(this), $DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxKeyboardHandler$$;$DvtNBoxEventManager$$++) {
      $DvtNBoxAutomation$$.push($DvtNBoxDataUtils$$.$getNode$(this, $DvtNBoxEventManager$$));
    }
    $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$(this);
    if ($DvtNBoxKeyboardHandler$$ = this.$getOptions$().__groups) {
      if ($DvtNBoxEventManager$$ == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
        for (var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getRowCount$(this) * $DvtNBoxDataUtils$$.$getColumnCount$(this), $DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxDataAnimationHandler$$;$DvtNBoxEventManager$$++) {
          var $DvtNBoxDrawer$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$ + ""], $DvtNBoxCategoryRolloverHandler$$;
          for ($DvtNBoxCategoryRolloverHandler$$ in $DvtNBoxDrawer$$) {
            $DvtNBoxAutomation$$.push($DvtNBoxDrawer$$[$DvtNBoxCategoryRolloverHandler$$]);
          }
        }
      } else {
        for ($DvtNBoxCategoryRolloverHandler$$ in $DvtNBoxKeyboardHandler$$) {
          $DvtNBoxAutomation$$.push($DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$]);
        }
      }
    }
    $DvtNBoxCategoryRolloverHandler$$ = [];
    for ($DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxAutomation$$.length;$DvtNBoxEventManager$$++) {
      ($DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this, $DvtNBoxAutomation$$[$DvtNBoxEventManager$$])) && $DvtNBoxCategoryRolloverHandler$$.push($DvtNBoxKeyboardHandler$$);
    }
    return $DvtNBoxCategoryRolloverHandler$$;
  };
  $dvt$$6$$.$NBox$.prototype.$setAnimationAllowed$ = function $$dvt$$6$$$$NBox$$$$setAnimationAllowed$$($dvt$$6$$) {
    this.$_animationAllowed$ = $dvt$$6$$;
  };
  $dvt$$6$$.$NBox$.prototype.$isDragAvailable$ = function $$dvt$$6$$$$NBox$$$$isDragAvailable$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return this.$_dragSource$.$isDragAvailable$($DvtNBoxKeyboardHandler$$);
  };
  $dvt$$6$$.$NBox$.prototype.$getDragTransferable$ = function $$dvt$$6$$$$NBox$$$$getDragTransferable$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    return this.$_dragSource$.$getDragTransferable$($dvt$$6$$, $DvtNBoxAutomation$$);
  };
  $dvt$$6$$.$NBox$.prototype.$getDragOverFeedback$ = function $$dvt$$6$$$$NBox$$$$getDragOverFeedback$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    return this.$_dragSource$.$getDragOverFeedback$($dvt$$6$$, $DvtNBoxAutomation$$);
  };
  $dvt$$6$$.$NBox$.prototype.$getDragOffset$ = function $$dvt$$6$$$$NBox$$$$getDragOffset$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    return this.$_dragSource$.$getDragOffset$($dvt$$6$$, $DvtNBoxAutomation$$);
  };
  $dvt$$6$$.$NBoxConstants$ = {};
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$NBoxConstants$, $dvt$$6$$.$Obj$);
  $dvt$$6$$.$NBoxConstants$.$COLUMN$ = "column";
  $dvt$$6$$.$NBoxConstants$.$COLUMNS$ = "columns";
  $dvt$$6$$.$NBoxConstants$.$COLUMNS_TITLE$ = "columnsTitle";
  $dvt$$6$$.$NBoxConstants$.$COLUMNS_TITLE_STYLE$ = "columnsTitleStyle";
  $dvt$$6$$.$NBoxConstants$.$COLUMN_LABEL_STYLE$ = "columnLabelStyle";
  $dvt$$6$$.$NBoxConstants$.$MAXIMIZED_COLUMN$ = "maximizedColumn";
  $dvt$$6$$.$NBoxConstants$.$ROW$ = "row";
  $dvt$$6$$.$NBoxConstants$.$ROWS$ = "rows";
  $dvt$$6$$.$NBoxConstants$.$ROWS_TITLE$ = "rowsTitle";
  $dvt$$6$$.$NBoxConstants$.$ROWS_TITLE_STYLE$ = "rowsTitleStyle";
  $dvt$$6$$.$NBoxConstants$.$ROW_LABEL_STYLE$ = "rowLabelStyle";
  $dvt$$6$$.$NBoxConstants$.$MAXIMIZED_ROW$ = "maximizedRow";
  $dvt$$6$$.$NBoxConstants$.$CELL$ = "cell";
  $dvt$$6$$.$NBoxConstants$.$CELLS$ = "cells";
  $dvt$$6$$.$NBoxConstants$.$CELL_DEFAULTS$ = "cellDefaults";
  $dvt$$6$$.$NBoxConstants$.$NODES$ = "nodes";
  $dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$ = "nodeDefaults";
  $dvt$$6$$.$NBoxConstants$.$CATEGORIES$ = "categories";
  $dvt$$6$$.$NBoxConstants$.$ICON$ = "icon";
  $dvt$$6$$.$NBoxConstants$.$ICON_DEFAULTS$ = "iconDefaults";
  $dvt$$6$$.$NBoxConstants$.$INDICATOR$ = "indicator";
  $dvt$$6$$.$NBoxConstants$.$INDICATOR_ICON$ = "indicatorIcon";
  $dvt$$6$$.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$ = "indicatorIconDefaults";
  $dvt$$6$$.$NBoxConstants$.$INDICATOR_COLOR$ = "indicatorColor";
  $dvt$$6$$.$NBoxConstants$.$X_PERCENTAGE$ = "xPercentage";
  $dvt$$6$$.$NBoxConstants$.$Y_PERCENTAGE$ = "yPercentage";
  $dvt$$6$$.$NBoxConstants$.$SELECTION$ = "selection";
  $dvt$$6$$.$NBoxConstants$.$SELECTION_MODE$ = "selectionMode";
  $dvt$$6$$.$NBoxConstants$.$SELECTION_INFO$ = "selectionInfo";
  $dvt$$6$$.$NBoxConstants$.$HAS_SELECTION_LISTENER$ = "hasSelectionListener";
  $dvt$$6$$.$NBoxConstants$.$HIGHLIGHTED_CATEGORIES$ = "highlightedCategories";
  $dvt$$6$$.$NBoxConstants$.$HIGHLIGHT_MATCH$ = "highlightMatch";
  $dvt$$6$$.$NBoxConstants$.$HIDDEN_CATEGORIES$ = "hiddenCategories";
  $dvt$$6$$.$NBoxConstants$.$HOVER_BEHAVIOR$ = "hoverBehavior";
  $dvt$$6$$.$NBoxConstants$.$GROUP_CATEGORY$ = "groupCategory";
  $dvt$$6$$.$NBoxConstants$.$GROUP_ATTRIBUTES$ = "groupAttributes";
  $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR$ = "groupBehavior";
  $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ = "withinCell";
  $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$ = "acrossCells";
  $dvt$$6$$.$NBoxConstants$.$OTHER_COLOR$ = "otherColor";
  $dvt$$6$$.$NBoxConstants$.$OTHER_THRESHOLD$ = "otherThreshold";
  $dvt$$6$$.$NBoxConstants$.$ANIMATION_ON_DATA_CHANGE$ = "animationOnDataChange";
  $dvt$$6$$.$NBoxConstants$.$ANIMATION_ON_DISPLAY$ = "animationOnDisplay";
  $dvt$$6$$.$NBoxConstants$.$ANIMATION_DURATION$ = "animationDuration";
  $dvt$$6$$.$NBoxConstants$.$DRAWER$ = "_drawer";
  $dvt$$6$$.$NBoxConstants$.$LEGEND$ = "_legend";
  $dvt$$6$$.$NBoxConstants$.$LEGEND_DISCLOSURE$ = "legendDisclosure";
  $dvt$$6$$.$NBoxConstants$.ID = "id";
  $dvt$$6$$.$NBoxConstants$.$LABEL$ = "label";
  $dvt$$6$$.$NBoxConstants$.$LABEL_STYLE$ = "labelStyle";
  $dvt$$6$$.$NBoxConstants$.$LABEL_HALIGN$ = "labelHalign";
  $dvt$$6$$.$NBoxConstants$.$SECONDARY_LABEL$ = "secondaryLabel";
  $dvt$$6$$.$NBoxConstants$.$SECONDARY_LABEL_STYLE$ = "secondaryLabelStyle";
  $dvt$$6$$.$NBoxConstants$.$SHORT_DESC$ = "shortDesc";
  $dvt$$6$$.$NBoxConstants$.$SHOW_COUNT$ = "showCount";
  $dvt$$6$$.$NBoxConstants$.STYLE = "style";
  $dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$ = "styleDefaults";
  $dvt$$6$$.$NBoxConstants$.$BORDER_COLOR$ = "borderColor";
  $dvt$$6$$.$NBoxConstants$.$BORDER_RADIUS$ = "borderRadius";
  $dvt$$6$$.$NBoxConstants$.$BORDER_WIDTH$ = "borderWidth";
  $dvt$$6$$.$NBoxConstants$.$COLOR$ = "color";
  $dvt$$6$$.$NBoxConstants$.$PATTERN$ = "pattern";
  $dvt$$6$$.$NBoxConstants$.$OPACITY$ = "opacity";
  $dvt$$6$$.$NBoxConstants$.$SHAPE$ = "shape";
  $dvt$$6$$.$NBoxConstants$.$SOURCE$ = "source";
  $dvt$$6$$.$NBoxConstants$.$HEIGHT$ = "height";
  $dvt$$6$$.$NBoxConstants$.$WIDTH$ = "width";
  $dvt$$6$$.$Bundle$.$addDefaultStrings$($dvt$$6$$.$Bundle$.$NBOX_PREFIX$, {HIGHLIGHTED_COUNT:"{0}/{1}", COMMA_SEP_LIST:"{0}, {1}", OTHER:"Other", LEGEND:"Legend", GROUP_NODE:"Group", ADDITIONAL_DATA:"Additional Data", SIZE:"Size"});
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxDefaults$$, $dvt$$6$$.$BaseComponentDefaults$);
  $DvtNBoxDefaults$$.$VERSION_1$ = {skin:$dvt$$6$$.$CSSStyle$.$SKIN_ALTA$, selectionMode:"multiple", animationOnDataChange:"none", animationOnDisplay:"none", cellMaximize:"on", cellContent:"auto", legendDisplay:"auto", legendDisclosure:"disclosed", groupBehavior:"withinCell", otherColor:"#636363", otherThreshold:0, hoverBehavior:"none", highlightMatch:"all", highlightedCategories:[], touchResponse:"auto", styleDefaults:{animationDuration:500, hoverBehaviorDelay:200, columnLabelStyle:new $dvt$$6$$.$CSSStyle$($dvt$$6$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$ + 
  "color: #252525;"), rowLabelStyle:new $dvt$$6$$.$CSSStyle$($dvt$$6$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$ + "color: #252525;"), columnsTitleStyle:new $dvt$$6$$.$CSSStyle$($dvt$$6$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_14$ + "color: #252525;"), rowsTitleStyle:new $dvt$$6$$.$CSSStyle$($dvt$$6$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_14$ + "color: #252525;"), cellDefaults:{_style:new $dvt$$6$$.$CSSStyle$("background-color:#e9e9e9"), _maximizedStyle:new $dvt$$6$$.$CSSStyle$("background-color:#dddddd"), 
  _minimizedStyle:new $dvt$$6$$.$CSSStyle$("background-color:#e9e9e9"), labelStyle:new $dvt$$6$$.$CSSStyle$($dvt$$6$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$ + "color: #252525;"), countLabelStyle:new $dvt$$6$$.$CSSStyle$($dvt$$6$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_14$ + "color: #252525;"), bodyCountLabelStyle:new $dvt$$6$$.$CSSStyle$($dvt$$6$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$ + "color: #252525;"), dropTargetStyle:new $dvt$$6$$.$CSSStyle$("background-color:rgba(217, 244, 250, .75);border-color:#ccf6ff"), 
  showCount:"auto", showMaximize:"on"}, __scrollbar:{scrollbarBackground:"linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)", scrollbarBorderColor:"#dce2e7", scrollbarHandleColor:"#abb0b4", scrollbarHandleHoverColor:"#333333", scrollbarHandleActiveColor:"#333333"}, __drawerDefaults:{background:"#e9e9e9", borderColor:"#bcc7d2", borderRadius:1, headerBackground:"linear-gradient(to bottom, #f5f5f5 0%, #f0f0f0 100%)", labelStyle:new $dvt$$6$$.$CSSStyle$("color: #252525;" + $dvt$$6$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$), 
  countLabelStyle:new $dvt$$6$$.$CSSStyle$($dvt$$6$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$), countBorderRadius:1}, nodeDefaults:{color:"#FFFFFF", labelStyle:new $dvt$$6$$.$CSSStyle$($dvt$$6$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$), secondaryLabelStyle:new $dvt$$6$$.$CSSStyle$($dvt$$6$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_11$), alphaFade:.2, borderRadius:1, hoverColor:"#FFFFFF", selectionColor:"#000000", iconDefaults:{preferredSize:19, preferredSizeTouch:34, shapePaddingRatio:.15, 
  sourcePaddingRatio:0, opacity:1, pattern:"none", borderColor:"#000000", borderWidth:0, borderRadius:0, shape:$dvt$$6$$.$SimpleMarker$.$CIRCLE$}, indicatorIconDefaults:{width:10, height:10, opacity:1, pattern:"none", borderColor:"#000000", borderWidth:0, borderRadius:0, shape:$dvt$$6$$.$SimpleMarker$.$CIRCLE$}}, __legendDefaults:{sectionStyle:"color: #252525;" + $dvt$$6$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_12$, itemStyle:"color: #252525;" + $dvt$$6$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$, 
  markerColor:"#808080"}, __categoryNodeDefaults:{labelStyle:new $dvt$$6$$.$CSSStyle$($dvt$$6$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}}, __layout:{componentGap:8, titleGap:4, titleComponentGap:4, nodeLabelOnlyStartLabelGap:5, nodeStartLabelGap:3, nodeEndLabelGap:5, nodeSingleLabelGap:2, nodeDualLabelGap:2, nodeInterLabelGap:0, nodeIndicatorGap:3, nodeSwatchSize:10, categoryNodeLabelGap:5, minimumCellSize:34, cellGap:3, gridGap:6, cellStartGap:6, cellEndGap:6, cellTopGap:6, cellBottomGap:6, 
  cellLabelGap:6, cellCloseGap:6, countLabelGap:10, markerGap:3, minimumLabelWidth:55, maximumLabelWidth:148, drawerButtonGap:6, drawerCountHorizontalGap:5, drawerCountVerticalGap:3, drawerStartGap:6, drawerLabelGap:6, drawerHeaderHeight:31, legendBottomGap:10}};
  $DvtNBoxDefaults$$.$SKIN_ALTA$ = {};
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxCell$$, $dvt$$6$$.$Container$);
  $DvtNBoxCell$$.newInstance = function $$DvtNBoxCell$$$newInstance$($dvt$$6$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = new $DvtNBoxCell$$;
    $DvtNBoxKeyboardHandler$$.Init($dvt$$6$$, $DvtNBoxAutomation$$);
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxCell$$.prototype.Init = function $$DvtNBoxCell$$$$Init$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$ROW$]), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$COLUMN$]);
    $DvtNBoxCell$$.$superclass$.Init.call(this, $DvtNBoxAutomation$$.$getCtx$(), null, "c:" + $DvtNBoxEventManager$$ + "," + $DvtNBoxDataAnimationHandler$$);
    this.$_nbox$ = $DvtNBoxAutomation$$;
    this.$_data$ = $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxCell$$.prototype.getData = function $$DvtNBoxCell$$$$getData$() {
    return this.$_data$;
  };
  $DvtNBoxCell$$.prototype.$render$ = function $$DvtNBoxCell$$$$$render$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    $dvt$$6$$.$addChild$(this);
    $DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
    $DvtNBoxCellRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $DvtNBoxAutomation$$);
    this.$_nbox$.$EventManager$.$associate$(this, this);
  };
  $DvtNBoxCell$$.prototype.$getChildContainer$ = function $$DvtNBoxCell$$$$$getChildContainer$$() {
    return this.$_childContainer$;
  };
  $DvtNBoxCell$$.prototype.$setChildContainer$ = function $$DvtNBoxCell$$$$$setChildContainer$$($dvt$$6$$) {
    this.$_childContainer$ = $dvt$$6$$;
  };
  $DvtNBoxCell$$.prototype.$animateUpdate$ = function $$DvtNBoxCell$$$$$animateUpdate$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    $DvtNBoxCellRenderer$$.$animateUpdate$($dvt$$6$$, $DvtNBoxAutomation$$, this);
  };
  $DvtNBoxCell$$.prototype.$animateDelete$ = function $$DvtNBoxCell$$$$$animateDelete$$($dvt$$6$$) {
    $DvtNBoxCellRenderer$$.$animateDelete$($dvt$$6$$, this);
  };
  $DvtNBoxCell$$.prototype.$animateInsert$ = function $$DvtNBoxCell$$$$$animateInsert$$($dvt$$6$$) {
    $DvtNBoxCellRenderer$$.$animateInsert$($dvt$$6$$, this);
  };
  $DvtNBoxCell$$.prototype.$isDoubleClickable$ = function $$DvtNBoxCell$$$$$isDoubleClickable$$() {
    return $DvtNBoxDataUtils$$.$isMaximizeEnabled$(this.$_nbox$);
  };
  $DvtNBoxCell$$.prototype.$handleDoubleClick$ = function $$DvtNBoxCell$$$$$handleDoubleClick$$() {
    if (this.$isDoubleClickable$()) {
      var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $DvtNBoxEventManager$$ = this.$_nbox$.$getSanitizedOptions$(), $DvtNBoxDataAnimationHandler$$ = $dvt$$6$$.$EventFactory$.$newAdfPropertyChangeEvent$($dvt$$6$$.$NBoxConstants$.$DRAWER$, null);
      $DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$DRAWER$] = null;
      $DvtNBoxAutomation$$ == this.$_data$[$dvt$$6$$.$NBoxConstants$.$ROW$] && $DvtNBoxKeyboardHandler$$ == this.$_data$[$dvt$$6$$.$NBoxConstants$.$COLUMN$] ? ($DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_ROW$] = null, $DvtNBoxDataAnimationHandler$$.properties[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_ROW$] = null, $DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_COLUMN$] = null, $DvtNBoxDataAnimationHandler$$.properties[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_COLUMN$] = null) : 
      ($DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_ROW$] = this.$_data$[$dvt$$6$$.$NBoxConstants$.$ROW$], $DvtNBoxDataAnimationHandler$$.properties[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_ROW$] = this.$_data$[$dvt$$6$$.$NBoxConstants$.$ROW$], $DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_COLUMN$] = this.$_data$[$dvt$$6$$.$NBoxConstants$.$COLUMN$], $DvtNBoxDataAnimationHandler$$.properties[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_COLUMN$] = this.$_data$[$dvt$$6$$.$NBoxConstants$.$COLUMN$]);
      var $DvtNBoxDrawer$$;
      ($DvtNBoxAutomation$$ = this.$_nbox$.$EventManager$.$getFocus$()) ? $DvtNBoxAutomation$$ instanceof $DvtNBoxNode$$ ? $DvtNBoxDrawer$$ = this.$getCellIndex$() != $DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, $DvtNBoxAutomation$$.getData()) : $DvtNBoxAutomation$$ instanceof $DvtNBoxNodeOverflow$$ ? $DvtNBoxDrawer$$ = this != $DvtNBoxAutomation$$.$_cell$ : $DvtNBoxAutomation$$ instanceof $DvtNBoxCell$$ ? $DvtNBoxDrawer$$ = this.$getCellIndex$() != $DvtNBoxAutomation$$.$getCellIndex$() : $DvtNBoxAutomation$$ instanceof 
      $DvtNBoxCategoryNode$$ && ($DvtNBoxDrawer$$ = this.$getCellIndex$() != $DvtNBoxAutomation$$.getData().cell) : this.$_nbox$.$EventManager$.$setFocusObj$(this);
      $DvtNBoxDrawer$$ && (this.$_nbox$.$EventManager$.$setFocusObj$(this), this.$_nbox$.$EventManager$.$setFocused$(!1));
      this.$_nbox$.$processEvent$($DvtNBoxDataAnimationHandler$$);
      this.$_nbox$.$render$($DvtNBoxEventManager$$);
    }
  };
  $DvtNBoxCell$$.prototype.contains = function $$DvtNBoxCell$$$$contains$($dvt$$6$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.$_data$, "background"), $DvtNBoxEventManager$$ = this.$getTranslateX$() + $DvtNBoxKeyboardHandler$$.$getX$(), $DvtNBoxDataAnimationHandler$$ = this.$getTranslateY$() + $DvtNBoxKeyboardHandler$$.$getY$(), $DvtNBoxDrawer$$ = $DvtNBoxEventManager$$ + $DvtNBoxKeyboardHandler$$.getWidth(), $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataAnimationHandler$$ + $DvtNBoxKeyboardHandler$$.getHeight();
    return $DvtNBoxEventManager$$ <= $dvt$$6$$ && $dvt$$6$$ <= $DvtNBoxDrawer$$ && $DvtNBoxDataAnimationHandler$$ <= $DvtNBoxAutomation$$ && $DvtNBoxAutomation$$ <= $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxCell$$.prototype.$renderDropSiteFeedback$ = function $$DvtNBoxCell$$$$$renderDropSiteFeedback$$() {
    return $DvtNBoxCellRenderer$$.$renderDropSiteFeedback$(this.$_nbox$, this);
  };
  $DvtNBoxCell$$.prototype.$HandleKeyboardEvent$ = function $$DvtNBoxCell$$$$$HandleKeyboardEvent$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $DvtNBoxKeyboardHandler$$ = $DvtNBoxKeyboardHandler$$ == this.$_data$[$dvt$$6$$.$NBoxConstants$.$ROW$] && $DvtNBoxEventManager$$ == this.$_data$[$dvt$$6$$.$NBoxConstants$.$COLUMN$] ? !0 : !1;
    (!$DvtNBoxKeyboardHandler$$ && $DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$ENTER$ || $DvtNBoxKeyboardHandler$$ && $DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$ESCAPE$) && this.$handleDoubleClick$();
  };
  $DvtNBoxCell$$.prototype.$getAriaLabel$ = function $$DvtNBoxCell$$$$$getAriaLabel$$() {
    var $DvtNBoxAutomation$$ = this.$getCellIndex$(), $DvtNBoxKeyboardHandler$$ = [];
    $DvtNBoxDataUtils$$.$isCellMaximized$(this.$_nbox$, $DvtNBoxAutomation$$) ? $DvtNBoxKeyboardHandler$$.push($dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$UTIL_PREFIX$, "STATE_MAXIMIZED")) : $DvtNBoxDataUtils$$.$isCellMinimized$(this.$_nbox$, $DvtNBoxAutomation$$) && $DvtNBoxKeyboardHandler$$.push($dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$UTIL_PREFIX$, "STATE_MINIMIZED"));
    $DvtNBoxKeyboardHandler$$.push([$dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$NBOX_PREFIX$, "SIZE"), this.$getNodeCount$()]);
    return $dvt$$6$$.$Displayable$.$generateAriaLabel$(this.getData().shortDesc, $DvtNBoxKeyboardHandler$$);
  };
  $DvtNBoxCell$$.prototype.$getKeyboardBoundingBox$ = function $$DvtNBoxCell$$$$$getKeyboardBoundingBox$$($dvt$$6$$) {
    return $DvtNBoxKeyboardHandler$$.$getKeyboardBoundingBox$(this, $dvt$$6$$);
  };
  $DvtNBoxCell$$.prototype.$getTargetElem$ = function $$DvtNBoxCell$$$$$getTargetElem$$() {
    return this.$getElem$();
  };
  $DvtNBoxCell$$.prototype.$showKeyboardFocusEffect$ = function $$DvtNBoxCell$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").show();
  };
  $DvtNBoxCell$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtNBoxCell$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").$hide$();
  };
  $DvtNBoxCell$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtNBoxCell$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtNBoxCell$$.prototype.$getNextNavigable$ = function $$DvtNBoxCell$$$$$getNextNavigable$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = null;
    this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($DvtNBoxAutomation$$) && ($DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$OPEN_BRACKET$ ? this.$_getFirstNavigableChild$($DvtNBoxAutomation$$) : this.$_getNextSibling$($DvtNBoxAutomation$$));
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxCell$$.prototype.$_getNextSibling$ = function $$DvtNBoxCell$$$$$_getNextSibling$$($DvtNBoxAutomation$$) {
    for (var $DvtNBoxKeyboardHandler$$ = [], $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRowCount$(this.$_nbox$) * $DvtNBoxDataUtils$$.$getColumnCount$(this.$_nbox$), $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxEventManager$$;$DvtNBoxDataAnimationHandler$$++) {
      $DvtNBoxKeyboardHandler$$.push($DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $DvtNBoxDataAnimationHandler$$)));
    }
    return $dvt$$6$$.$KeyboardHandler$.$getNextNavigable$(this, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
  };
  $DvtNBoxCell$$.prototype.$_getFirstNavigableChild$ = function $$DvtNBoxCell$$$$$_getFirstNavigableChild$$($DvtNBoxAutomation$$) {
    var $DvtNBoxEventManager$$ = null, $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$);
    if ($DvtNBoxDrawer$$ && $DvtNBoxEventManager$$ == this.getData()[$dvt$$6$$.$NBoxConstants$.$ROW$] && $DvtNBoxDataAnimationHandler$$ == this.getData()[$dvt$$6$$.$NBoxConstants$.$COLUMN$]) {
      $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxDrawer$$);
    } else {
      if ($DvtNBoxEventManager$$ = this.$getChildContainer$(), $DvtNBoxEventManager$$.$getScrollingPane$ && ($DvtNBoxEventManager$$ = $DvtNBoxEventManager$$.$_container$), 0 < $DvtNBoxEventManager$$.$getNumChildren$() && ($DvtNBoxEventManager$$.$getChildAt$(0) instanceof $DvtNBoxNode$$ || $DvtNBoxEventManager$$.$getChildAt$(0) instanceof $DvtNBoxNodeOverflow$$)) {
        $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getFirstNavigableNode$(this.$_nbox$, $DvtNBoxEventManager$$);
      } else {
        $DvtNBoxDataAnimationHandler$$ = [];
        for ($DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxEventManager$$.$getNumChildren$();$DvtNBoxDrawer$$++) {
          var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxEventManager$$.$getChildAt$($DvtNBoxDrawer$$);
          $DvtNBoxCategoryRolloverHandler$$ instanceof $DvtNBoxCategoryNode$$ && $DvtNBoxDataAnimationHandler$$.push($DvtNBoxCategoryRolloverHandler$$);
        }
        $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getNextNavigableCategoryNode$(null, $DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
      }
    }
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxCell$$.prototype.$getCellIndex$ = function $$DvtNBoxCell$$$$$getCellIndex$$() {
    return $DvtNBoxDataUtils$$.$getCellIndexByRowColumn$(this.$_nbox$, this.getData()[$dvt$$6$$.$NBoxConstants$.$ROW$], this.getData()[$dvt$$6$$.$NBoxConstants$.$COLUMN$]);
  };
  $DvtNBoxCell$$.prototype.$getLabel$ = function $$DvtNBoxCell$$$$$getLabel$$() {
    var $DvtNBoxAutomation$$ = this.getData()[$dvt$$6$$.$NBoxConstants$.$LABEL$];
    return $DvtNBoxAutomation$$ ? $DvtNBoxAutomation$$ : null;
  };
  $DvtNBoxCell$$.prototype.$getCountLabel$ = function $$DvtNBoxCell$$$$$getCountLabel$$() {
    var $dvt$$6$$ = this.getData(), $DvtNBoxAutomation$$ = this.$_nbox$.$getOptions$().countLabel;
    return $DvtNBoxAutomation$$ ? ($dvt$$6$$ = {row:$dvt$$6$$.row, column:$dvt$$6$$.column, nodeCount:this.$getNodeCount$(), highlightedNodeCount:this.$getHighlightedNodeCount$(), totalNodeCount:$DvtNBoxDataUtils$$.$getNodeCount$(this.$_nbox$)}, $DvtNBoxAutomation$$($dvt$$6$$)) : $dvt$$6$$.countLabel;
  };
  $DvtNBoxCell$$.prototype.$getBackground$ = function $$DvtNBoxCell$$$$$getBackground$$() {
    var $DvtNBoxAutomation$$ = $DvtNBoxStyleUtils$$.$getCellStyle$(this.$_nbox$, this.$getCellIndex$()), $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getStyle$($dvt$$6$$.$CSSStyle$.$BACKGROUND$), $DvtNBoxAutomation$$ = $DvtNBoxAutomation$$.$getStyle$($dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$);
    return $DvtNBoxKeyboardHandler$$ ? $DvtNBoxKeyboardHandler$$ : $DvtNBoxAutomation$$;
  };
  $DvtNBoxCell$$.prototype.$getNodeCount$ = function $$DvtNBoxCell$$$$$getNodeCount$$() {
    return $DvtNBoxRenderer$$.$getCellCounts$(this.$_nbox$).total[this.$getCellIndex$()];
  };
  $DvtNBoxCell$$.prototype.$getHighlightedNodeCount$ = function $$DvtNBoxCell$$$$$getHighlightedNodeCount$$() {
    var $dvt$$6$$ = $DvtNBoxRenderer$$.$getCellCounts$(this.$_nbox$);
    return $dvt$$6$$.highlighted ? $dvt$$6$$.highlighted[this.$getCellIndex$()] : null;
  };
  $DvtNBoxCell$$.prototype.$getNode$ = function $$DvtNBoxCell$$$$$getNode$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = this.$_nbox$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$NODES$];
    if ($DvtNBoxKeyboardHandler$$) {
      for (var $DvtNBoxEventManager$$ = 0, $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxDataAnimationHandler$$++) {
        if (this.getData()[$dvt$$6$$.$NBoxConstants$.$ROW$] == $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$][$dvt$$6$$.$NBoxConstants$.$ROW$] && this.getData()[$dvt$$6$$.$NBoxConstants$.$COLUMN$] == $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$][$dvt$$6$$.$NBoxConstants$.$COLUMN$] && !$DvtNBoxDataUtils$$.$isNodeHidden$(this.$_nbox$, $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$])) {
          if ($DvtNBoxAutomation$$ == $DvtNBoxEventManager$$) {
            return $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$];
          }
          $DvtNBoxEventManager$$++;
        }
      }
    }
    return null;
  };
  $DvtNBoxCell$$.prototype.$getDisplayable$ = function $$DvtNBoxCell$$$$$getDisplayable$$() {
    return this;
  };
  $DvtNBoxCell$$.prototype.$getKeyboardFocusDisplayable$ = function $$DvtNBoxCell$$$$$getKeyboardFocusDisplayable$$() {
    return $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$ && this.$_nbox$.$getOptions$().__groups ? null : $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, this.getData())));
  };
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxNode$$, $dvt$$6$$.$Container$);
  $DvtNBoxNode$$.prototype.Init = function $$DvtNBoxNode$$$$Init$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    $DvtNBoxNode$$.$superclass$.Init.call(this, $DvtNBoxAutomation$$.$getCtx$(), null, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.ID]);
    this.$_nbox$ = $DvtNBoxAutomation$$;
    this.$_data$ = $DvtNBoxKeyboardHandler$$;
    this.$_nbox$.$registerObject$(this);
    var $DvtNBoxEventManager$$ = this.$_nbox$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$SELECTION_MODE$];
    ("single" == $DvtNBoxEventManager$$ || "multiple" == $DvtNBoxEventManager$$ || this.$getAction$()) && this.setCursor("pointer");
    this.$_maxAlpha$ = 1;
  };
  $DvtNBoxNode$$.prototype.getData = function $$DvtNBoxNode$$$$getData$() {
    return this.$_data$;
  };
  $DvtNBoxNode$$.prototype.$getAction$ = function $$DvtNBoxNode$$$$$getAction$$() {
    return this.$_data$.action;
  };
  $DvtNBoxNode$$.prototype.$render$ = function $$DvtNBoxNode$$$$$render$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    $DvtNBoxNodeRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $DvtNBoxAutomation$$);
    $dvt$$6$$.$addChild$(this);
    $DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
    this.$_nbox$.$EventManager$.$associate$(this, this);
  };
  $DvtNBoxNode$$.prototype.$isSelectable$ = function $$DvtNBoxNode$$$$$isSelectable$$() {
    return !0;
  };
  $DvtNBoxNode$$.prototype.$isSelected$ = function $$DvtNBoxNode$$$$$isSelected$$() {
    return this.$getSelectionShape$().$isSelected$();
  };
  $DvtNBoxNode$$.prototype.$setSelected$ = function $$DvtNBoxNode$$$$$setSelected$$($dvt$$6$$) {
    this.$getSelectionShape$().$setSelected$($dvt$$6$$);
    this.$UpdateAccessibilityAttributes$();
  };
  $DvtNBoxNode$$.prototype.$showHoverEffect$ = function $$DvtNBoxNode$$$$$showHoverEffect$$() {
    this.$getSelectionShape$().$showHoverEffect$();
  };
  $DvtNBoxNode$$.prototype.$hideHoverEffect$ = function $$DvtNBoxNode$$$$$hideHoverEffect$$() {
    this.$getSelectionShape$().$hideHoverEffect$();
  };
  $DvtNBoxNode$$.prototype.$setSelectionShape$ = function $$DvtNBoxNode$$$$$setSelectionShape$$($dvt$$6$$) {
    this.$_selectionShape$ = $dvt$$6$$;
  };
  $DvtNBoxNode$$.prototype.$getSelectionShape$ = function $$DvtNBoxNode$$$$$getSelectionShape$$() {
    return this.$_selectionShape$;
  };
  $DvtNBoxNode$$.prototype.$getDatatip$ = function $$DvtNBoxNode$$$$$getDatatip$$() {
    var $dvt$$6$$ = this.$_nbox$.$getOptions$().tooltip;
    if ($dvt$$6$$ = $dvt$$6$$ ? $dvt$$6$$.renderer : null) {
      var $DvtNBoxAutomation$$ = {id:this.$_data$.id, label:this.$_data$.label, secondaryLabel:this.$_data$.secondaryLabel, row:this.$_data$.row, column:this.$_data$.column, color:$DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nbox$, this.$_data$), indicatorColor:$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$(this.$_nbox$, this.$_data$)};
      return this.$_nbox$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($dvt$$6$$, $DvtNBoxAutomation$$);
    }
    return this.$getShortDesc$();
  };
  $DvtNBoxNode$$.prototype.$getShortDesc$ = function $$DvtNBoxNode$$$$$getShortDesc$$() {
    return this.$_data$[$dvt$$6$$.$NBoxConstants$.$SHORT_DESC$];
  };
  $DvtNBoxNode$$.prototype.$getDatatipColor$ = function $$DvtNBoxNode$$$$$getDatatipColor$$() {
    return $DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nbox$, this.$_data$);
  };
  $DvtNBoxNode$$.prototype.$setMaxAlpha$ = function $$DvtNBoxNode$$$$$setMaxAlpha$$($dvt$$6$$) {
    this.$_maxAlpha$ = $dvt$$6$$;
    this.$setAlpha$(this.$getAlpha$());
  };
  $DvtNBoxNode$$.prototype.$setAlpha$ = function $$DvtNBoxNode$$$$$setAlpha$$($dvt$$6$$) {
    $DvtNBoxNode$$.$superclass$.$setAlpha$.call(this, Math.min($dvt$$6$$, this.$_maxAlpha$));
  };
  $DvtNBoxNode$$.prototype.$animateUpdate$ = function $$DvtNBoxNode$$$$$animateUpdate$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    $DvtNBoxNodeRenderer$$.$animateUpdate$($dvt$$6$$, $DvtNBoxAutomation$$, this);
  };
  $DvtNBoxNode$$.prototype.$animateDelete$ = function $$DvtNBoxNode$$$$$animateDelete$$($dvt$$6$$) {
    $DvtNBoxNodeRenderer$$.$animateDelete$($dvt$$6$$, this);
  };
  $DvtNBoxNode$$.prototype.$animateInsert$ = function $$DvtNBoxNode$$$$$animateInsert$$($dvt$$6$$) {
    $DvtNBoxNodeRenderer$$.$animateInsert$($dvt$$6$$, this);
  };
  $DvtNBoxNode$$.prototype.$isDoubleClickable$ = function $$DvtNBoxNode$$$$$isDoubleClickable$$() {
    return !0;
  };
  $DvtNBoxNode$$.prototype.$handleDoubleClick$ = function $$DvtNBoxNode$$$$$handleDoubleClick$$() {
    this.$_getParentContainer$().$handleDoubleClick$();
  };
  $DvtNBoxNode$$.prototype.$getShowPopupBehaviors$ = function $$DvtNBoxNode$$$$$getShowPopupBehaviors$$() {
    if (!this.$_showPopupBehaviors$) {
      this.$_showPopupBehaviors$ = [];
      var $DvtNBoxAutomation$$ = this.$_data$.showPopupBehaviors;
      if ($DvtNBoxAutomation$$) {
        for (var $DvtNBoxKeyboardHandler$$ = 0;$DvtNBoxKeyboardHandler$$ < $DvtNBoxAutomation$$.length;$DvtNBoxKeyboardHandler$$++) {
          this.$_showPopupBehaviors$.push(new $dvt$$6$$.$ShowPopupBehavior$($DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$].popupId, $DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$].triggerType, $DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$].alignId, $DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$].align));
        }
      }
    }
    return this.$_showPopupBehaviors$;
  };
  $DvtNBoxNode$$.prototype.$getPopupBounds$ = function $$DvtNBoxNode$$$$$getPopupBounds$$($DvtNBoxAutomation$$) {
    if ($DvtNBoxAutomation$$ && $DvtNBoxAutomation$$.$getAlign$()) {
      $DvtNBoxAutomation$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$(this);
      var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.$_data$, "background");
      return new $dvt$$6$$.$Rectangle$($DvtNBoxAutomation$$.$_tx$ + $DvtNBoxKeyboardHandler$$.$getX$(), $DvtNBoxAutomation$$.$_ty$ + $DvtNBoxKeyboardHandler$$.$getY$(), $DvtNBoxKeyboardHandler$$.getWidth(), $DvtNBoxKeyboardHandler$$.getHeight());
    }
    return null;
  };
  $DvtNBoxNode$$.prototype.$isDragAvailable$ = function $$DvtNBoxNode$$$$$isDragAvailable$$($dvt$$6$$) {
    return this.$_nbox$.$__isDragAvailable$($dvt$$6$$);
  };
  $DvtNBoxNode$$.prototype.$getDragTransferable$ = function $$DvtNBoxNode$$$$$getDragTransferable$$() {
    return this.$_nbox$.$__getDragTransferable$(this);
  };
  $DvtNBoxNode$$.prototype.$getDragFeedback$ = function $$DvtNBoxNode$$$$$getDragFeedback$$() {
    return this.$_nbox$.$__getDragFeedback$();
  };
  $DvtNBoxNode$$.prototype.$_getParentContainer$ = function $$DvtNBoxNode$$$$$_getParentContainer$$() {
    var $dvt$$6$$;
    $dvt$$6$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$);
    $dvt$$6$$ || ($dvt$$6$$ = $DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, this.$_data$), $dvt$$6$$ = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $dvt$$6$$));
    return $dvt$$6$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $dvt$$6$$);
  };
  $DvtNBoxNode$$.prototype.$UpdateAccessibilityAttributes$ = function $$DvtNBoxNode$$$$$UpdateAccessibilityAttributes$$() {
    if (!$dvt$$6$$.$Agent$.$deferAriaCreation$()) {
      var $DvtNBoxAutomation$$ = this.$getAriaLabel$();
      $DvtNBoxAutomation$$ && this.$setAriaProperty$($dvt$$6$$.$NBoxConstants$.$LABEL$, $DvtNBoxAutomation$$);
    }
  };
  $DvtNBoxNode$$.prototype.$getAriaLabel$ = function $$DvtNBoxNode$$$$$getAriaLabel$$() {
    return $DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, this.$getShortDesc$(), this.$isSelected$());
  };
  $DvtNBoxNode$$.prototype.$getCategories$ = function $$DvtNBoxNode$$$$$getCategories$$() {
    return this.getData()[$dvt$$6$$.$NBoxConstants$.$CATEGORIES$] ? this.getData()[$dvt$$6$$.$NBoxConstants$.$CATEGORIES$] : [];
  };
  $DvtNBoxNode$$.prototype.$getKeyboardBoundingBox$ = function $$DvtNBoxNode$$$$$getKeyboardBoundingBox$$($dvt$$6$$) {
    return $DvtNBoxKeyboardHandler$$.$getKeyboardBoundingBox$(this, $dvt$$6$$);
  };
  $DvtNBoxNode$$.prototype.$getTargetElem$ = function $$DvtNBoxNode$$$$$getTargetElem$$() {
    return this.$getElem$();
  };
  $DvtNBoxNode$$.prototype.$showKeyboardFocusEffect$ = function $$DvtNBoxNode$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    this.$showHoverEffect$();
    var $dvt$$6$$ = $DvtNBoxDataUtils$$.$getNodeScrollableContainer$(this.$_nbox$, this);
    $dvt$$6$$ && $dvt$$6$$.scrollIntoView(this);
  };
  $DvtNBoxNode$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtNBoxNode$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    this.$hideHoverEffect$();
  };
  $DvtNBoxNode$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtNBoxNode$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtNBoxNode$$.prototype.$getNextNavigable$ = function $$DvtNBoxNode$$$$$getNextNavigable$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = null;
    if ($DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$SPACE$ && $DvtNBoxAutomation$$.ctrlKey) {
      return this;
    }
    this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($DvtNBoxAutomation$$) ? $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$CLOSE_BRACKET$ ? this.$_getParentContainer$() : $DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$OPEN_BRACKET$ ? this : $DvtNBoxDataUtils$$.$getNextNavigableNode$(this.$_nbox$, this, $DvtNBoxAutomation$$) : $DvtNBoxAutomation$$.type == $dvt$$6$$.MouseEvent.$CLICK$ && ($DvtNBoxKeyboardHandler$$ = this);
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxNode$$.prototype.$HandleKeyboardEvent$ = function $$DvtNBoxNode$$$$$HandleKeyboardEvent$$($DvtNBoxAutomation$$) {
    if ($DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$) && $DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$ESCAPE$) {
      this.$handleDoubleClick$();
    } else {
      var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $DvtNBoxKeyboardHandler$$ = $DvtNBoxKeyboardHandler$$ == this.$_data$[$dvt$$6$$.$NBoxConstants$.$ROW$] && $DvtNBoxEventManager$$ == this.$_data$[$dvt$$6$$.$NBoxConstants$.$COLUMN$] ? !0 : !1;
      (!$DvtNBoxKeyboardHandler$$ && $DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$ENTER$ || $DvtNBoxKeyboardHandler$$ && $DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$ESCAPE$) && this.$handleDoubleClick$();
    }
  };
  $DvtNBoxNode$$.prototype.$getDisplayable$ = function $$DvtNBoxNode$$$$$getDisplayable$$() {
    return this;
  };
  $DvtNBoxNode$$.prototype.$getKeyboardFocusDisplayable$ = function $$DvtNBoxNode$$$$$getKeyboardFocusDisplayable$$() {
    var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, $DvtNBoxDataUtils$$.$getNodeIndex$(this.$_nbox$, this.getData()[$dvt$$6$$.$NBoxConstants$.ID]));
    if ($DvtNBoxAutomation$$) {
      var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxAutomation$$);
      if ($DvtNBoxKeyboardHandler$$) {
        return $DvtNBoxKeyboardHandler$$;
      }
      $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, $DvtNBoxAutomation$$));
      $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxAutomation$$);
      $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getLastNavigableNode$(this.$_nbox$, $DvtNBoxAutomation$$.$getChildContainer$());
      return $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxNodeOverflow$$ ? $DvtNBoxKeyboardHandler$$ : ($DvtNBoxKeyboardHandler$$ = this.$_getParentDrawer$()) ? $DvtNBoxKeyboardHandler$$.$getKeyboardFocusDisplayable$() : $DvtNBoxAutomation$$.$getKeyboardFocusDisplayable$();
    }
    return null;
  };
  $DvtNBoxNode$$.prototype.$_getParentDrawer$ = function $$DvtNBoxNode$$$$$_getParentDrawer$$() {
    for (var $dvt$$6$$ = this;$dvt$$6$$ && $dvt$$6$$.getParent;) {
      if ($dvt$$6$$ = $dvt$$6$$.getParent(), $dvt$$6$$ instanceof $DvtNBoxDrawer$$) {
        return $dvt$$6$$;
      }
    }
    return null;
  };
  $DvtNBoxNode$$.prototype.$getChildContainer$ = function $$DvtNBoxNode$$$$$getChildContainer$$($DvtNBoxAutomation$$) {
    if (!$DvtNBoxAutomation$$ || this.$_childContainer$) {
      return this.$_childContainer$;
    }
    this.$_childContainer$ = new $dvt$$6$$.$Container$(this.$getCtx$());
    this.$addChild$(this.$_childContainer$);
    return this.$_childContainer$;
  };
  $DvtNBoxNode$$.prototype.$setChildContainer$ = function $$DvtNBoxNode$$$$$setChildContainer$$($dvt$$6$$) {
    this.$_childContainer$ = $dvt$$6$$;
  };
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxNodeOverflow$$, $dvt$$6$$.$Container$);
  $DvtNBoxNodeOverflow$$.newInstance = function $$DvtNBoxNodeOverflow$$$newInstance$($dvt$$6$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = new $DvtNBoxNodeOverflow$$;
    $DvtNBoxKeyboardHandler$$.Init($dvt$$6$$, $DvtNBoxAutomation$$);
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxNodeOverflow$$.prototype.Init = function $$DvtNBoxNodeOverflow$$$$Init$($dvt$$6$$, $DvtNBoxAutomation$$) {
    $DvtNBoxNodeOverflow$$.$superclass$.Init.call(this, $dvt$$6$$.$getCtx$());
    this.$_nbox$ = $dvt$$6$$;
    this.$_cell$ = $DvtNBoxAutomation$$;
    this.$_button$;
  };
  $DvtNBoxNodeOverflow$$.prototype.$render$ = function $$DvtNBoxNodeOverflow$$$$$render$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = this.$_nbox$.$getOptions$(), $DvtNBoxDrawer$$ = $DvtNBoxDataAnimationHandler$$._resources.overflow_ena.width, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataAnimationHandler$$._resources.overflow_ena.height, $DvtNBoxCategoryNode$$ = 1;
    if ($DvtNBoxKeyboardHandler$$ < $DvtNBoxDrawer$$ || $DvtNBoxEventManager$$ < $DvtNBoxCategoryRolloverHandler$$) {
      $DvtNBoxCategoryNode$$ = Math.min($DvtNBoxKeyboardHandler$$ / $DvtNBoxDrawer$$, $DvtNBoxEventManager$$ / $DvtNBoxCategoryRolloverHandler$$);
    }
    var $DvtNBoxDrawer$$ = $DvtNBoxCategoryNode$$ * $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryNode$$ * $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCategoryNode$$ = ($DvtNBoxKeyboardHandler$$ - $DvtNBoxDrawer$$) / 2, $DvtNBoxCell$$ = ($DvtNBoxEventManager$$ - $DvtNBoxCategoryRolloverHandler$$) / 2, $DvtNBoxNodeOverflow$$ = this.$_nbox$.$getCtx$(), $DvtNBoxNode$$ = new $dvt$$6$$.Rect($DvtNBoxNodeOverflow$$, 0, 0, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$), $DvtNBoxCategoryNodeRenderer$$ = 
    new $dvt$$6$$.Rect($DvtNBoxNodeOverflow$$, 0, 0, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$), $DvtNBoxRenderer$$ = new $dvt$$6$$.Rect($DvtNBoxNodeOverflow$$, 0, 0, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$), $DvtNBoxDefaults$$ = new $dvt$$6$$.Rect($DvtNBoxNodeOverflow$$, 0, 0, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxNode$$.$setInvisibleFill$();
    $DvtNBoxCategoryNodeRenderer$$.$setInvisibleFill$();
    $DvtNBoxRenderer$$.$setInvisibleFill$();
    $DvtNBoxDefaults$$.$setInvisibleFill$();
    var $DvtNBoxCellRenderer$$ = new $dvt$$6$$.$Container$($DvtNBoxNodeOverflow$$), $DvtNBoxDrawerRenderer$$ = new $dvt$$6$$.$Container$($DvtNBoxNodeOverflow$$), $DvtNBoxNodeRenderer$$ = new $dvt$$6$$.$Container$($DvtNBoxNodeOverflow$$), $DvtNBoxStyleUtils$$ = new $dvt$$6$$.$Container$($DvtNBoxNodeOverflow$$);
    $DvtNBoxCellRenderer$$.$addChild$($DvtNBoxNode$$);
    $DvtNBoxDrawerRenderer$$.$addChild$($DvtNBoxCategoryNodeRenderer$$);
    $DvtNBoxNodeRenderer$$.$addChild$($DvtNBoxRenderer$$);
    $DvtNBoxStyleUtils$$.$addChild$($DvtNBoxDefaults$$);
    $DvtNBoxCellRenderer$$.$addChild$(new $dvt$$6$$.Image($DvtNBoxNodeOverflow$$, $DvtNBoxDataAnimationHandler$$._resources.overflow_ena.src, $DvtNBoxCategoryNode$$, $DvtNBoxCell$$, $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$));
    $DvtNBoxDrawerRenderer$$.$addChild$(new $dvt$$6$$.Image($DvtNBoxNodeOverflow$$, $DvtNBoxDataAnimationHandler$$._resources.overflow_ovr.src, $DvtNBoxCategoryNode$$, $DvtNBoxCell$$, $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$));
    $DvtNBoxNodeRenderer$$.$addChild$(new $dvt$$6$$.Image($DvtNBoxNodeOverflow$$, $DvtNBoxDataAnimationHandler$$._resources.overflow_dwn.src, $DvtNBoxCategoryNode$$, $DvtNBoxCell$$, $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$));
    $DvtNBoxStyleUtils$$.$addChild$(new $dvt$$6$$.Image($DvtNBoxNodeOverflow$$, $DvtNBoxDataAnimationHandler$$._resources.overflow_dis.src, $DvtNBoxCategoryNode$$, $DvtNBoxCell$$, $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$));
    this.$_button$ = new $dvt$$6$$.$Button$($DvtNBoxNodeOverflow$$, $DvtNBoxCellRenderer$$, $DvtNBoxDrawerRenderer$$, $DvtNBoxNodeRenderer$$, $DvtNBoxStyleUtils$$, null, this.$HandleClick$, this);
    $DvtNBoxDataUtils$$.$isMaximizeEnabled$(this.$_nbox$) || (this.$_button$.$setEnabled$(!1), this.$_button$.$drawDisabledState$());
    this.$addChild$(this.$_button$);
    $DvtNBoxKeyboardHandler$$ = new $dvt$$6$$.$KeyboardFocusEffect$(this.$_nbox$.$getCtx$(), this, new $dvt$$6$$.$Rectangle$(-1, -1, $DvtNBoxKeyboardHandler$$ + 2, $DvtNBoxEventManager$$ + 2));
    $DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this, $DvtNBoxKeyboardHandler$$, "focusEffect");
    $DvtNBoxAutomation$$.$addChild$(this);
    this.$_addAccessibilityAttributes$();
    this.$_nbox$.$EventManager$.$associate$(this, this);
  };
  $DvtNBoxNodeOverflow$$.prototype.$HandleClick$ = function $$DvtNBoxNodeOverflow$$$$$HandleClick$$($DvtNBoxAutomation$$) {
    $dvt$$6$$.$EventManager$.$consumeEvent$($DvtNBoxAutomation$$);
    this.$_cell$.$handleDoubleClick$(!0);
  };
  $DvtNBoxNodeOverflow$$.prototype.$HandleKeyboardEvent$ = function $$DvtNBoxNodeOverflow$$$$$HandleKeyboardEvent$$($DvtNBoxAutomation$$) {
    $DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$ENTER$ && this.$_cell$.$handleDoubleClick$();
  };
  $DvtNBoxNodeOverflow$$.prototype.$_addAccessibilityAttributes$ = function $$DvtNBoxNodeOverflow$$$$$_addAccessibilityAttributes$$() {
    this.$setAriaRole$("button");
    if (!$dvt$$6$$.$Agent$.$deferAriaCreation$()) {
      var $DvtNBoxAutomation$$ = this.$getAriaLabel$();
      $DvtNBoxAutomation$$ && this.$setAriaProperty$($dvt$$6$$.$NBoxConstants$.$LABEL$, $DvtNBoxAutomation$$);
    }
  };
  $DvtNBoxNodeOverflow$$.prototype.$getDatatip$ = function $$DvtNBoxNodeOverflow$$$$$getDatatip$$() {
    return $dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$NBOX_PREFIX$, "ADDITIONAL_DATA");
  };
  $DvtNBoxNodeOverflow$$.prototype.$getAriaLabel$ = function $$DvtNBoxNodeOverflow$$$$$getAriaLabel$$() {
    return this.$getDatatip$();
  };
  $DvtNBoxNodeOverflow$$.prototype.$getKeyboardBoundingBox$ = function $$DvtNBoxNodeOverflow$$$$$getKeyboardBoundingBox$$($dvt$$6$$) {
    return $DvtNBoxKeyboardHandler$$.$getKeyboardBoundingBox$(this, $dvt$$6$$);
  };
  $DvtNBoxNodeOverflow$$.prototype.$getTargetElem$ = function $$DvtNBoxNodeOverflow$$$$$getTargetElem$$() {
    return this.$getElem$();
  };
  $DvtNBoxNodeOverflow$$.prototype.$showKeyboardFocusEffect$ = function $$DvtNBoxNodeOverflow$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this, "focusEffect").show();
  };
  $DvtNBoxNodeOverflow$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtNBoxNodeOverflow$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this, "focusEffect").$hide$();
  };
  $DvtNBoxNodeOverflow$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtNBoxNodeOverflow$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtNBoxNodeOverflow$$.prototype.$getNextNavigable$ = function $$DvtNBoxNodeOverflow$$$$$getNextNavigable$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = null;
    this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($DvtNBoxAutomation$$) && ($DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$CLOSE_BRACKET$ ? this.$_cell$ : $DvtNBoxDataUtils$$.$getNextNavigableNode$(this.$_nbox$, this, $DvtNBoxAutomation$$));
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxNodeOverflow$$.prototype.$getDisplayable$ = function $$DvtNBoxNodeOverflow$$$$$getDisplayable$$() {
    return this;
  };
  $DvtNBoxNodeOverflow$$.prototype.$getKeyboardFocusDisplayable$ = function $$DvtNBoxNodeOverflow$$$$$getKeyboardFocusDisplayable$$() {
    var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, $DvtNBoxDataUtils$$.$getNodeIndex$(this.$_nbox$, this.__prev[$dvt$$6$$.$NBoxConstants$.ID])).__next;
    return $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxAutomation$$);
  };
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxCategoryNode$$, $dvt$$6$$.$Container$);
  $DvtNBoxCategoryNode$$.newInstance = function $$DvtNBoxCategoryNode$$$newInstance$($dvt$$6$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = new $DvtNBoxCategoryNode$$;
    $DvtNBoxKeyboardHandler$$.Init($dvt$$6$$, $DvtNBoxAutomation$$);
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxCategoryNode$$.prototype.Init = function $$DvtNBoxCategoryNode$$$$Init$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    $DvtNBoxCategoryNode$$.$superclass$.Init.call(this, $DvtNBoxAutomation$$.$getCtx$(), null, isNaN($DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$CELL$]) ? $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.ID] : $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$CELL$] + ":" + $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.ID]);
    this.$_nbox$ = $DvtNBoxAutomation$$;
    this.$_data$ = $DvtNBoxKeyboardHandler$$;
    this.$_nbox$.$registerObject$(this);
    this.setCursor("pointer");
    this.$_maxAlpha$ = 1;
  };
  $DvtNBoxCategoryNode$$.prototype.getData = function $$DvtNBoxCategoryNode$$$$getData$() {
    return this.$_data$;
  };
  $DvtNBoxCategoryNode$$.prototype.$render$ = function $$DvtNBoxCategoryNode$$$$$render$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    $DvtNBoxCategoryNodeRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $dvt$$6$$.$addChild$(this);
    $DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
    this.$_nbox$.$EventManager$.$associate$(this, this);
  };
  $DvtNBoxCategoryNode$$.prototype.$isSelectable$ = function $$DvtNBoxCategoryNode$$$$$isSelectable$$() {
    return "multiple" == this.$_nbox$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$SELECTION_MODE$];
  };
  $DvtNBoxCategoryNode$$.prototype.$isSelected$ = function $$DvtNBoxCategoryNode$$$$$isSelected$$() {
    return this.$getSelectionShape$().$isSelected$();
  };
  $DvtNBoxCategoryNode$$.prototype.$setSelected$ = function $$DvtNBoxCategoryNode$$$$$setSelected$$($dvt$$6$$) {
    this.$getSelectionShape$().$setSelected$($dvt$$6$$);
    this.$UpdateAccessibilityAttributes$();
  };
  $DvtNBoxCategoryNode$$.prototype.$showHoverEffect$ = function $$DvtNBoxCategoryNode$$$$$showHoverEffect$$() {
    this.$getSelectionShape$().$showHoverEffect$();
  };
  $DvtNBoxCategoryNode$$.prototype.$hideHoverEffect$ = function $$DvtNBoxCategoryNode$$$$$hideHoverEffect$$() {
    this.$getSelectionShape$().$hideHoverEffect$();
  };
  $DvtNBoxCategoryNode$$.prototype.$setSelectionShape$ = function $$DvtNBoxCategoryNode$$$$$setSelectionShape$$($dvt$$6$$) {
    this.$_selectionShape$ = $dvt$$6$$;
  };
  $DvtNBoxCategoryNode$$.prototype.$getSelectionShape$ = function $$DvtNBoxCategoryNode$$$$$getSelectionShape$$() {
    return this.$_selectionShape$;
  };
  $DvtNBoxCategoryNode$$.prototype.$getLabel$ = function $$DvtNBoxCategoryNode$$$$$getLabel$$() {
    for (var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCategoryNodeLabels$(this.$_nbox$, this.$_data$);1 < $DvtNBoxAutomation$$.length;) {
      var $DvtNBoxKeyboardHandler$$ = $dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$NBOX_PREFIX$, "COMMA_SEP_LIST", [$DvtNBoxAutomation$$[0], $DvtNBoxAutomation$$[1]]);
      $DvtNBoxAutomation$$.splice(0, 2, $DvtNBoxKeyboardHandler$$);
    }
    return $DvtNBoxAutomation$$[0];
  };
  $DvtNBoxCategoryNode$$.prototype.$getDatatip$ = function $$DvtNBoxCategoryNode$$$$$getDatatip$$() {
    var $DvtNBoxAutomation$$ = this.$_nbox$.$getOptions$().tooltip;
    if ($DvtNBoxAutomation$$ = $DvtNBoxAutomation$$ ? $DvtNBoxAutomation$$.renderer : null) {
      var $DvtNBoxKeyboardHandler$$ = {id:this.$_data$.id, color:$DvtNBoxStyleUtils$$.$getCategoryNodeColor$(this.$_nbox$, this.$_data$), indicatorColor:$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$(this.$_nbox$, this.$_data$), size:this.$_data$.nodeIndices.length};
      "withinCell" == $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) && ($DvtNBoxKeyboardHandler$$.row = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.cell).row, $DvtNBoxKeyboardHandler$$.column = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.cell).column);
      return this.$_nbox$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    }
    return this.$getShortDesc$() + "\n" + $dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$NBOX_PREFIX$, "SIZE"), this.$_data$.nodeIndices.length]);
  };
  $DvtNBoxCategoryNode$$.prototype.$getShortDesc$ = function $$DvtNBoxCategoryNode$$$$$getShortDesc$$() {
    return $DvtNBoxDataUtils$$.$getCategoryNodeLabels$(this.$_nbox$, this.$_data$).join("\n");
  };
  $DvtNBoxCategoryNode$$.prototype.$getDatatipColor$ = function $$DvtNBoxCategoryNode$$$$$getDatatipColor$$() {
    return $DvtNBoxStyleUtils$$.$getCategoryNodeColor$(this.$_nbox$, this.$_data$);
  };
  $DvtNBoxCategoryNode$$.prototype.$setMaxAlpha$ = function $$DvtNBoxCategoryNode$$$$$setMaxAlpha$$($dvt$$6$$) {
    this.$_maxAlpha$ = $dvt$$6$$;
    this.$setAlpha$(this.$getAlpha$());
  };
  $DvtNBoxCategoryNode$$.prototype.$setAlpha$ = function $$DvtNBoxCategoryNode$$$$$setAlpha$$($dvt$$6$$) {
    $DvtNBoxCategoryNode$$.$superclass$.$setAlpha$.call(this, Math.min($dvt$$6$$, this.$_maxAlpha$));
  };
  $DvtNBoxCategoryNode$$.prototype.$isDoubleClickable$ = function $$DvtNBoxCategoryNode$$$$$isDoubleClickable$$() {
    return this.$isSelectable$();
  };
  $DvtNBoxCategoryNode$$.prototype.$handleDoubleClick$ = function $$DvtNBoxCategoryNode$$$$$handleDoubleClick$$() {
    this.$isSelectable$() && this.$openDrawer$();
  };
  $DvtNBoxCategoryNode$$.prototype.$openDrawer$ = function $$DvtNBoxCategoryNode$$$$$openDrawer$$() {
    var $DvtNBoxAutomation$$ = this.$_nbox$.$getSanitizedOptions$();
    $DvtNBoxAutomation$$[$dvt$$6$$.$NBoxConstants$.$DRAWER$] = {id:this.getId()};
    var $DvtNBoxKeyboardHandler$$ = $dvt$$6$$.$EventFactory$.$newAdfPropertyChangeEvent$($dvt$$6$$.$NBoxConstants$.$DRAWER$, this.getId());
    this.$_nbox$.$processEvent$($DvtNBoxKeyboardHandler$$);
    this.$_nbox$.$render$($DvtNBoxAutomation$$);
  };
  $DvtNBoxCategoryNode$$.prototype.$animateUpdate$ = function $$DvtNBoxCategoryNode$$$$$animateUpdate$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    $DvtNBoxCategoryNodeRenderer$$.$animateUpdate$($dvt$$6$$, $DvtNBoxAutomation$$, this);
  };
  $DvtNBoxCategoryNode$$.prototype.$animateDelete$ = function $$DvtNBoxCategoryNode$$$$$animateDelete$$($dvt$$6$$) {
    $DvtNBoxCategoryNodeRenderer$$.$animateDelete$($dvt$$6$$, this);
  };
  $DvtNBoxCategoryNode$$.prototype.$animateInsert$ = function $$DvtNBoxCategoryNode$$$$$animateInsert$$($dvt$$6$$) {
    $DvtNBoxCategoryNodeRenderer$$.$animateInsert$($dvt$$6$$, this);
  };
  $DvtNBoxCategoryNode$$.prototype.$isDragAvailable$ = function $$DvtNBoxCategoryNode$$$$$isDragAvailable$$($dvt$$6$$) {
    return this.$_nbox$.$__isDragAvailable$($dvt$$6$$);
  };
  $DvtNBoxCategoryNode$$.prototype.$getDragTransferable$ = function $$DvtNBoxCategoryNode$$$$$getDragTransferable$$() {
    return this.$_nbox$.$__getDragTransferable$(this);
  };
  $DvtNBoxCategoryNode$$.prototype.$getDragFeedback$ = function $$DvtNBoxCategoryNode$$$$$getDragFeedback$$() {
    return this.$_nbox$.$__getDragFeedback$();
  };
  $DvtNBoxCategoryNode$$.prototype.$HandleKeyboardEvent$ = function $$DvtNBoxCategoryNode$$$$$HandleKeyboardEvent$$($DvtNBoxAutomation$$) {
    if ($DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$ENTER$) {
      this.$openDrawer$();
    } else {
      if ($DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$ESCAPE$ && $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
        var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.$cell$);
        $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxKeyboardHandler$$).$HandleKeyboardEvent$($DvtNBoxAutomation$$);
      }
    }
  };
  $DvtNBoxCategoryNode$$.prototype.$UpdateAccessibilityAttributes$ = function $$DvtNBoxCategoryNode$$$$$UpdateAccessibilityAttributes$$() {
    if (!$dvt$$6$$.$Agent$.$deferAriaCreation$()) {
      var $DvtNBoxAutomation$$ = this.$getAriaLabel$();
      $DvtNBoxAutomation$$ && this.$setAriaProperty$($dvt$$6$$.$NBoxConstants$.$LABEL$, $DvtNBoxAutomation$$);
    }
  };
  $DvtNBoxCategoryNode$$.prototype.$getAriaLabel$ = function $$DvtNBoxCategoryNode$$$$$getAriaLabel$$() {
    return $DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, this.$getShortDesc$(), this.$isSelected$());
  };
  $DvtNBoxCategoryNode$$.prototype.$getCategories$ = function $$DvtNBoxCategoryNode$$$$$getCategories$$() {
    var $DvtNBoxAutomation$$ = this.getData()[$dvt$$6$$.$NBoxConstants$.$CATEGORIES$];
    if (!$DvtNBoxAutomation$$) {
      for (var $DvtNBoxKeyboardHandler$$ = function $$DvtNBoxKeyboardHandler$$$($dvt$$6$$, $DvtNBoxAutomation$$) {
        return $dvt$$6$$.filter(function($dvt$$6$$) {
          return -1 < $DvtNBoxAutomation$$.indexOf($dvt$$6$$);
        });
      }, $DvtNBoxEventManager$$ = this.getData().nodeIndices, $DvtNBoxAutomation$$ = null, $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxEventManager$$.length;$DvtNBoxDataAnimationHandler$$++) {
        var $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, $DvtNBoxEventManager$$[$DvtNBoxDataAnimationHandler$$])[$dvt$$6$$.$NBoxConstants$.$CATEGORIES$];
        if (!$DvtNBoxDrawer$$) {
          $DvtNBoxAutomation$$ = [];
          break;
        }
        $DvtNBoxAutomation$$ = null == $DvtNBoxAutomation$$ ? $DvtNBoxDrawer$$ : $DvtNBoxKeyboardHandler$$($DvtNBoxAutomation$$, $DvtNBoxDrawer$$);
      }
      this.getData()[$dvt$$6$$.$NBoxConstants$.$CATEGORIES$] = $DvtNBoxAutomation$$;
    }
    return $DvtNBoxAutomation$$;
  };
  $DvtNBoxCategoryNode$$.$compareSize$ = function $$DvtNBoxCategoryNode$$$$compareSize$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $dvt$$6$$.nodeIndices.length, $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.nodeIndices.length;
    return $DvtNBoxKeyboardHandler$$ == $DvtNBoxEventManager$$ ? 0 : $DvtNBoxKeyboardHandler$$ < $DvtNBoxEventManager$$ ? 1 : -1;
  };
  $DvtNBoxCategoryNode$$.prototype.$getKeyboardBoundingBox$ = function $$DvtNBoxCategoryNode$$$$$getKeyboardBoundingBox$$($dvt$$6$$) {
    return $DvtNBoxKeyboardHandler$$.$getKeyboardBoundingBox$(this, $dvt$$6$$);
  };
  $DvtNBoxCategoryNode$$.prototype.$getTargetElem$ = function $$DvtNBoxCategoryNode$$$$$getTargetElem$$() {
    return this.$getElem$();
  };
  $DvtNBoxCategoryNode$$.prototype.$showKeyboardFocusEffect$ = function $$DvtNBoxCategoryNode$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    this.$showHoverEffect$();
  };
  $DvtNBoxCategoryNode$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtNBoxCategoryNode$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    this.$hideHoverEffect$();
  };
  $DvtNBoxCategoryNode$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtNBoxCategoryNode$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtNBoxCategoryNode$$.prototype.$getNextNavigable$ = function $$DvtNBoxCategoryNode$$$$$getNextNavigable$$($DvtNBoxAutomation$$) {
    var $DvtNBoxEventManager$$ = null;
    if ($DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$SPACE$ && $DvtNBoxAutomation$$.ctrlKey) {
      return this;
    }
    if ($DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$CLOSE_BRACKET$ && $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.getData()[$dvt$$6$$.$NBoxConstants$.$CELL$]), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxAutomation$$);
    } else {
      if ($DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$CLOSE_BRACKET$ || $DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$OPEN_BRACKET$) {
        $DvtNBoxEventManager$$ = this;
      } else {
        if (this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($DvtNBoxAutomation$$)) {
          if ($DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
            var $DvtNBoxEventManager$$ = this.$_nbox$.$getOptions$().__groups, $DvtNBoxDataAnimationHandler$$ = [], $DvtNBoxDrawer$$;
            for ($DvtNBoxDrawer$$ in $DvtNBoxEventManager$$) {
              var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxEventManager$$[$DvtNBoxDrawer$$]);
              $DvtNBoxCategoryRolloverHandler$$ && $DvtNBoxDataAnimationHandler$$.push($DvtNBoxCategoryRolloverHandler$$);
            }
            $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getNextNavigableCategoryNode$(this, $DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
          } else {
            $DvtNBoxDrawer$$ = this.getParent();
            $DvtNBoxEventManager$$ = [];
            for ($DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxDrawer$$.$getNumChildren$();$DvtNBoxDataAnimationHandler$$++) {
              $DvtNBoxDrawer$$.$getChildAt$($DvtNBoxDataAnimationHandler$$) instanceof $DvtNBoxCategoryNode$$ && $DvtNBoxEventManager$$.push($DvtNBoxDrawer$$.$getChildAt$($DvtNBoxDataAnimationHandler$$));
            }
            $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getNextNavigableCategoryNode$(this, $DvtNBoxAutomation$$, $DvtNBoxEventManager$$);
          }
        } else {
          $DvtNBoxAutomation$$.type == $dvt$$6$$.MouseEvent.$CLICK$ && ($DvtNBoxEventManager$$ = this);
        }
      }
    }
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxCategoryNode$$.prototype.$getDisplayable$ = function $$DvtNBoxCategoryNode$$$$$getDisplayable$$() {
    return this;
  };
  $DvtNBoxCategoryNode$$.prototype.$getKeyboardFocusDisplayable$ = function $$DvtNBoxCategoryNode$$$$$getKeyboardFocusDisplayable$$() {
    var $dvt$$6$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$);
    return $dvt$$6$$ || $DvtNBoxDataUtils$$.$getGrouping$(this.$_nbox$) && ($dvt$$6$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getId())) ? $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $dvt$$6$$) : null;
  };
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxCategoryRolloverHandler$$, $dvt$$6$$.$CategoryRolloverHandler$);
  $DvtNBoxCategoryRolloverHandler$$.prototype.$GetRolloverCallback$ = function $$DvtNBoxCategoryRolloverHandler$$$$$GetRolloverCallback$$($DvtNBoxAutomation$$) {
    return $dvt$$6$$.$Obj$.$createCallback$(this, function() {
      this.$SetHighlightMode$(!0);
      this.$_nbox$.$processEvent$($DvtNBoxAutomation$$);
      this.$_callback$ && this.$_callback$.call(this.$_callbackObj$, $DvtNBoxAutomation$$, this.$_source$);
    });
  };
  $DvtNBoxCategoryRolloverHandler$$.prototype.$GetRolloutCallback$ = function $$DvtNBoxCategoryRolloverHandler$$$$$GetRolloutCallback$$($DvtNBoxAutomation$$) {
    return $dvt$$6$$.$Obj$.$createCallback$(this, function() {
      this.$SetHighlightModeTimeout$();
      this.$_nbox$.$processEvent$($DvtNBoxAutomation$$);
      this.$_callback$ && this.$_callback$.call(this.$_callbackObj$, $DvtNBoxAutomation$$, this.$_source$);
    });
  };
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxDrawer$$, $dvt$$6$$.$Container$);
  $DvtNBoxDrawer$$.newInstance = function $$DvtNBoxDrawer$$$newInstance$($dvt$$6$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = new $DvtNBoxDrawer$$;
    $DvtNBoxKeyboardHandler$$.Init($dvt$$6$$, $DvtNBoxAutomation$$);
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxDrawer$$.prototype.Init = function $$DvtNBoxDrawer$$$$Init$($dvt$$6$$, $DvtNBoxAutomation$$) {
    $DvtNBoxDrawer$$.$superclass$.Init.call(this, $dvt$$6$$.$getCtx$(), null, $DvtNBoxAutomation$$.id + "_d");
    this.$_nbox$ = $dvt$$6$$;
    this.$_data$ = $DvtNBoxAutomation$$;
    this.$_nbox$.$registerObject$(this);
  };
  $DvtNBoxDrawer$$.prototype.getData = function $$DvtNBoxDrawer$$$$getData$() {
    return this.$_data$;
  };
  $DvtNBoxDrawer$$.prototype.$render$ = function $$DvtNBoxDrawer$$$$$render$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    $dvt$$6$$.$addChild$(this);
    $DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
    $DvtNBoxDrawerRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $DvtNBoxAutomation$$);
    this.$_nbox$.$EventManager$.$associate$(this, this);
  };
  $DvtNBoxDrawer$$.prototype.$getChildContainer$ = function $$DvtNBoxDrawer$$$$$getChildContainer$$() {
    return this.$_childContainer$;
  };
  $DvtNBoxDrawer$$.prototype.$setChildContainer$ = function $$DvtNBoxDrawer$$$$$setChildContainer$$($dvt$$6$$) {
    this.$_childContainer$ = $dvt$$6$$;
  };
  $DvtNBoxDrawer$$.prototype.$isDoubleClickable$ = function $$DvtNBoxDrawer$$$$$isDoubleClickable$$() {
    return !0;
  };
  $DvtNBoxDrawer$$.prototype.$handleDoubleClick$ = function $$DvtNBoxDrawer$$$$$handleDoubleClick$$() {
    this.$closeDrawer$();
  };
  $DvtNBoxDrawer$$.prototype.$closeDrawer$ = function $$DvtNBoxDrawer$$$$$closeDrawer$$() {
    var $DvtNBoxAutomation$$ = this.$_nbox$.$getSanitizedOptions$();
    $DvtNBoxAutomation$$[$dvt$$6$$.$NBoxConstants$.$DRAWER$] = null;
    var $DvtNBoxKeyboardHandler$$ = $dvt$$6$$.$EventFactory$.$newAdfPropertyChangeEvent$($dvt$$6$$.$NBoxConstants$.$DRAWER$, null);
    this.$_nbox$.$processEvent$($DvtNBoxKeyboardHandler$$);
    this.$_nbox$.$render$($DvtNBoxAutomation$$);
  };
  $DvtNBoxDrawer$$.prototype.$animateUpdate$ = function $$DvtNBoxDrawer$$$$$animateUpdate$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    $DvtNBoxDrawerRenderer$$.$animateUpdate$($dvt$$6$$, $DvtNBoxAutomation$$, this);
  };
  $DvtNBoxDrawer$$.prototype.$animateDelete$ = function $$DvtNBoxDrawer$$$$$animateDelete$$($dvt$$6$$) {
    $DvtNBoxDrawerRenderer$$.$animateDelete$($dvt$$6$$, this);
  };
  $DvtNBoxDrawer$$.prototype.$animateInsert$ = function $$DvtNBoxDrawer$$$$$animateInsert$$($dvt$$6$$) {
    $DvtNBoxDrawerRenderer$$.$animateInsert$($dvt$$6$$, this);
  };
  $DvtNBoxDrawer$$.prototype.$HandleKeyboardEvent$ = function $$DvtNBoxDrawer$$$$$HandleKeyboardEvent$$($DvtNBoxAutomation$$) {
    $DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$ESCAPE$ && this.$closeDrawer$();
  };
  $DvtNBoxDrawer$$.prototype.$UpdateAccessibilityAttributes$ = function $$DvtNBoxDrawer$$$$$UpdateAccessibilityAttributes$$() {
    if (!$dvt$$6$$.$Agent$.$deferAriaCreation$()) {
      var $DvtNBoxAutomation$$ = this.$getAriaLabel$();
      $DvtNBoxAutomation$$ && ($dvt$$6$$.$Agent$.$isTouchDevice$() ? $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "background") : this).$setAriaProperty$("label", $DvtNBoxAutomation$$);
    }
  };
  $DvtNBoxDrawer$$.prototype.$getAriaLabel$ = function $$DvtNBoxDrawer$$$$$getAriaLabel$$() {
    var $dvt$$6$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getData().id)), $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$isDrawerSelected$(this.$_nbox$, $dvt$$6$$);
    return $DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, $dvt$$6$$.$getShortDesc$(), $DvtNBoxAutomation$$);
  };
  $DvtNBoxDrawer$$.prototype.$getKeyboardBoundingBox$ = function $$DvtNBoxDrawer$$$$$getKeyboardBoundingBox$$($dvt$$6$$) {
    return $DvtNBoxKeyboardHandler$$.$getKeyboardBoundingBox$(this, $dvt$$6$$);
  };
  $DvtNBoxDrawer$$.prototype.$getTargetElem$ = function $$DvtNBoxDrawer$$$$$getTargetElem$$() {
    return this.$getElem$();
  };
  $DvtNBoxDrawer$$.prototype.$showKeyboardFocusEffect$ = function $$DvtNBoxDrawer$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").show();
  };
  $DvtNBoxDrawer$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtNBoxDrawer$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").$hide$();
  };
  $DvtNBoxDrawer$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtNBoxDrawer$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtNBoxDrawer$$.prototype.$getNextNavigable$ = function $$DvtNBoxDrawer$$$$$getNextNavigable$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = null;
    this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($DvtNBoxAutomation$$) && ($DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$OPEN_BRACKET$ ? ($DvtNBoxAutomation$$ = this.$getChildContainer$(), $DvtNBoxAutomation$$.$getScrollingPane$ && ($DvtNBoxAutomation$$ = $DvtNBoxAutomation$$.$_container$), $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getFirstNavigableNode$(this.$_nbox$, $DvtNBoxAutomation$$)) : $DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$CLOSE_BRACKET$ && 
    ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getMaximizedCellIndex$(this.$_nbox$), $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $DvtNBoxAutomation$$))));
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxDrawer$$.prototype.$getDisplayable$ = function $$DvtNBoxDrawer$$$$$getDisplayable$$() {
    return this;
  };
  $DvtNBoxDrawer$$.prototype.$getKeyboardFocusDisplayable$ = function $$DvtNBoxDrawer$$$$$getKeyboardFocusDisplayable$$() {
    if (this.$_nbox$.$getOptions$()._drawer) {
      return this;
    }
    var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getData()[$dvt$$6$$.$NBoxConstants$.ID]);
    return $DvtNBoxAutomation$$ ? $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxAutomation$$) : null;
  };
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxDataAnimationHandler$$, $dvt$$6$$.$DataAnimationHandler$);
  $DvtNBoxDataAnimationHandler$$.$DELETE$ = 0;
  $DvtNBoxDataAnimationHandler$$.$UPDATE$ = 1;
  $DvtNBoxDataAnimationHandler$$.$INSERT$ = 2;
  $DvtNBoxDataAnimationHandler$$.prototype.Init = function $$DvtNBoxDataAnimationHandler$$$$Init$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxDataAnimationHandler$$.$superclass$.Init.call(this, $dvt$$6$$, $DvtNBoxAutomation$$);
    this.$_oldNBox$ = $DvtNBoxKeyboardHandler$$;
    this.$_newNBox$ = $DvtNBoxEventManager$$;
  };
  $DvtNBoxDataAnimationHandler$$.prototype.$getAnimationDuration$ = function $$DvtNBoxDataAnimationHandler$$$$$getAnimationDuration$$() {
    return $DvtNBoxStyleUtils$$.$getAnimationDuration$(this.$_oldNBox$);
  };
  $dvt$$6$$.$Obj$.$createSubclass$(function($dvt$$6$$) {
    this.$_view$ = $dvt$$6$$;
  }, $dvt$$6$$.$DropTarget$);
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxEventManager$$, $dvt$$6$$.$EventManager$);
  $DvtNBoxEventManager$$.prototype.$OnClickInternal$ = function $$DvtNBoxEventManager$$$$$OnClickInternal$$($dvt$$6$$) {
    $dvt$$6$$ = this.$GetLogicalObject$($dvt$$6$$.target);
    this.$_processActionEvent$($dvt$$6$$);
    $dvt$$6$$ instanceof $DvtNBoxCategoryNode$$ && !$dvt$$6$$.$isSelectable$() && $dvt$$6$$.$openDrawer$();
  };
  $DvtNBoxEventManager$$.prototype.$OnDblClickInternal$ = function $$DvtNBoxEventManager$$$$$OnDblClickInternal$$($dvt$$6$$) {
    this.$_handleDblClick$(this.$GetCurrentTargetForEvent$($dvt$$6$$));
  };
  $DvtNBoxEventManager$$.prototype.$HandleTouchDblClickInternal$ = function $$DvtNBoxEventManager$$$$$HandleTouchDblClickInternal$$($dvt$$6$$) {
    this.$_handleDblClick$(this.$GetCurrentTargetForEvent$($dvt$$6$$));
  };
  $DvtNBoxEventManager$$.prototype.$HandleTouchHoverEndInternal$ = function $$DvtNBoxEventManager$$$$$HandleTouchHoverEndInternal$$($dvt$$6$$) {
    $dvt$$6$$ = this.$GetLogicalObject$($dvt$$6$$.target);
    this.$_processActionEvent$($dvt$$6$$);
  };
  $DvtNBoxEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtNBoxEventManager$$$$$HandleTouchClickInternal$$($dvt$$6$$) {
    $dvt$$6$$ = this.$GetLogicalObject$($dvt$$6$$.target);
    this.$_processActionEvent$($dvt$$6$$);
    $dvt$$6$$ instanceof $DvtNBoxCategoryNode$$ && !$dvt$$6$$.$isSelectable$() && $dvt$$6$$.$openDrawer$();
  };
  $DvtNBoxEventManager$$.prototype.$_handleDblClick$ = function $$DvtNBoxEventManager$$$$$_handleDblClick$$($dvt$$6$$) {
    ($dvt$$6$$ = this.$GetLogicalObject$($dvt$$6$$)) && $dvt$$6$$.$isDoubleClickable$ && $dvt$$6$$.$isDoubleClickable$() && $dvt$$6$$.$handleDoubleClick$ && $dvt$$6$$.$handleDoubleClick$();
  };
  $DvtNBoxEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtNBoxEventManager$$$$$ProcessKeyboardEvent$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = !1, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.keyCode, $DvtNBoxDrawer$$ = this.$getFocus$();
    if ($DvtNBoxDataAnimationHandler$$ == $dvt$$6$$.KeyboardEvent.$ENTER$ || $DvtNBoxDataAnimationHandler$$ == $dvt$$6$$.KeyboardEvent.$ESCAPE$) {
      $DvtNBoxDrawer$$ && $DvtNBoxDrawer$$.$HandleKeyboardEvent$ && $DvtNBoxDrawer$$.$HandleKeyboardEvent$($DvtNBoxAutomation$$);
    } else {
      if ($DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$SPACE$ && $DvtNBoxAutomation$$.ctrlKey) {
        if ($DvtNBoxDrawer$$ instanceof $DvtNBoxCategoryNode$$ || $DvtNBoxDrawer$$ instanceof $DvtNBoxNode$$) {
          $DvtNBoxKeyboardHandler$$ = $DvtNBoxEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $DvtNBoxAutomation$$);
        }
      } else {
        $DvtNBoxKeyboardHandler$$ = $DvtNBoxEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $DvtNBoxAutomation$$);
      }
    }
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtNBoxEventManager$$$$$ProcessRolloverEvent$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxAutomation$$ = this.$_nbox$.$getOptions$();
    "dim" == $DvtNBoxAutomation$$.hoverBehavior && ($DvtNBoxKeyboardHandler$$ = $DvtNBoxKeyboardHandler$$.$getCategories$ ? $DvtNBoxKeyboardHandler$$.$getCategories$() : [], $DvtNBoxAutomation$$.highlightedCategories = $DvtNBoxEventManager$$ ? $DvtNBoxKeyboardHandler$$.slice() : null, $DvtNBoxEventManager$$ = $dvt$$6$$.$EventFactory$.$newCategoryHighlightEvent$($DvtNBoxAutomation$$.highlightedCategories, $DvtNBoxEventManager$$), $DvtNBoxKeyboardHandler$$ = $dvt$$6$$.$StyleUtils$.$getTimeMilliseconds$($DvtNBoxAutomation$$.styleDefaults.hoverBehaviorDelay), 
    this.$RolloverHandler$.$processEvent$($DvtNBoxEventManager$$, this.$_nbox$.$getNodeDisplayables$(), $DvtNBoxKeyboardHandler$$, "any" == $DvtNBoxAutomation$$.highlightMatch));
  };
  $DvtNBoxEventManager$$.prototype.$CreateCategoryRolloverHandler$ = function $$DvtNBoxEventManager$$$$$CreateCategoryRolloverHandler$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    return new $DvtNBoxCategoryRolloverHandler$$($dvt$$6$$, $DvtNBoxAutomation$$);
  };
  $DvtNBoxEventManager$$.prototype.$_processActionEvent$ = function $$DvtNBoxEventManager$$$$$_processActionEvent$$($DvtNBoxAutomation$$) {
    $DvtNBoxAutomation$$ && $DvtNBoxAutomation$$.$getAction$ && $DvtNBoxAutomation$$.$getAction$() && this.$FireEvent$($dvt$$6$$.$EventFactory$.$newActionEvent$("action", $DvtNBoxAutomation$$.$getAction$(), $DvtNBoxAutomation$$.getId()));
  };
  $DvtNBoxEventManager$$.prototype.$GetTouchResponse$ = function $$DvtNBoxEventManager$$$$$GetTouchResponse$$() {
    var $DvtNBoxAutomation$$ = this.$_nbox$.$getOptions$(), $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $DvtNBoxDataUtils$$.$getMaximizedCellIndex$(this.$_nbox$));
    return $DvtNBoxKeyboardHandler$$ && $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxKeyboardHandler$$).$getChildContainer$().$hasScrollingContent$() || $DvtNBoxEventManager$$ && $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxEventManager$$).$getChildContainer$().$hasScrollingContent$() ? $dvt$$6$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : $DvtNBoxAutomation$$.touchResponse === $dvt$$6$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$ ? $dvt$$6$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$ : 
    $dvt$$6$$.$EventManager$.$TOUCH_RESPONSE_AUTO$;
  };
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxKeyboardHandler$$, $dvt$$6$$.$KeyboardHandler$);
  $DvtNBoxKeyboardHandler$$.prototype.Init = function $$DvtNBoxKeyboardHandler$$$$Init$($dvt$$6$$, $DvtNBoxAutomation$$) {
    $DvtNBoxKeyboardHandler$$.$superclass$.Init.call(this, $dvt$$6$$);
    this.$_nbox$ = $DvtNBoxAutomation$$;
  };
  $DvtNBoxKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtNBoxKeyboardHandler$$$$$processKeyDown$$($DvtNBoxAutomation$$) {
    if ($DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$TAB$) {
      var $DvtNBoxEventManager$$ = this.$_eventManager$.$getFocus$(), $DvtNBoxDataAnimationHandler$$ = null;
      $dvt$$6$$.$EventManager$.$consumeEvent$($DvtNBoxAutomation$$);
      if ($DvtNBoxEventManager$$) {
        $DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$;
      } else {
        if ($DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$)) {
          $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxEventManager$$);
        } else {
          if ($DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$ && ($DvtNBoxEventManager$$ = this.$_nbox$.$getOptions$().__groups)) {
            var $DvtNBoxDataAnimationHandler$$ = [], $DvtNBoxDrawer$$;
            for ($DvtNBoxDrawer$$ in $DvtNBoxEventManager$$) {
              var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxEventManager$$[$DvtNBoxDrawer$$]);
              $DvtNBoxCategoryRolloverHandler$$ && $DvtNBoxDataAnimationHandler$$.push($DvtNBoxCategoryRolloverHandler$$);
            }
            $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$.$getNextNavigableCategoryNode$(null, $DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
          }
        }
        $DvtNBoxDataAnimationHandler$$ || ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getColumnCount$(this.$_nbox$) * ($DvtNBoxDataUtils$$.$getRowCount$(this.$_nbox$) - 1), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $DvtNBoxAutomation$$)));
      }
      return $DvtNBoxDataAnimationHandler$$;
    }
    return $DvtNBoxKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtNBoxAutomation$$);
  };
  $DvtNBoxKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtNBoxKeyboardHandler$$$$$isSelectionEvent$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$TAB$ ? !1 : this.$isNavigationEvent$($DvtNBoxAutomation$$) && !$DvtNBoxAutomation$$.ctrlKey;
  };
  $DvtNBoxKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtNBoxKeyboardHandler$$$$$isMultiSelectEvent$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.keyCode == $dvt$$6$$.KeyboardEvent.$SPACE$ && $DvtNBoxAutomation$$.ctrlKey;
  };
  $DvtNBoxKeyboardHandler$$.$getKeyboardBoundingBox$ = function $$DvtNBoxKeyboardHandler$$$$getKeyboardBoundingBox$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getDimensions$(), $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$localToStage$(new $dvt$$6$$.$Point$($DvtNBoxKeyboardHandler$$.x, $DvtNBoxKeyboardHandler$$.y));
    $DvtNBoxAutomation$$ = $DvtNBoxAutomation$$.$localToStage$(new $dvt$$6$$.$Point$($DvtNBoxKeyboardHandler$$.x + $DvtNBoxKeyboardHandler$$.$w$, $DvtNBoxKeyboardHandler$$.y + $DvtNBoxKeyboardHandler$$.$h$));
    return new $dvt$$6$$.$Rectangle$($DvtNBoxEventManager$$.x, $DvtNBoxEventManager$$.y, $DvtNBoxAutomation$$.x - $DvtNBoxEventManager$$.x, $DvtNBoxAutomation$$.y - $DvtNBoxEventManager$$.y);
  };
  $DvtNBoxKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtNBoxKeyboardHandler$$$$$isNavigationEvent$$($DvtNBoxAutomation$$) {
    var $DvtNBoxEventManager$$ = !1;
    switch($DvtNBoxAutomation$$.keyCode) {
      case $dvt$$6$$.KeyboardEvent.$OPEN_BRACKET$:
      ;
      case $dvt$$6$$.KeyboardEvent.$CLOSE_BRACKET$:
        $DvtNBoxEventManager$$ = !0;
        break;
      default:
        $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $DvtNBoxAutomation$$);
    }
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxKeyboardHandler$$.$getNextNavigableCategoryNode$ = function $$DvtNBoxKeyboardHandler$$$$getNextNavigableCategoryNode$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    if (!$DvtNBoxEventManager$$ || 0 >= $DvtNBoxEventManager$$.length) {
      return null;
    }
    $DvtNBoxEventManager$$[0] instanceof $DvtNBoxCategoryNode$$ && $DvtNBoxEventManager$$.sort(function($dvt$$6$$, $DvtNBoxAutomation$$) {
      return $DvtNBoxCategoryNode$$.$compareSize$($dvt$$6$$.getData(), $DvtNBoxAutomation$$.getData());
    });
    if (null == $DvtNBoxAutomation$$) {
      return $DvtNBoxEventManager$$[0];
    }
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$;
    $DvtNBoxKeyboardHandler$$ = $DvtNBoxKeyboardHandler$$.keyCode == $dvt$$6$$.KeyboardEvent.$RIGHT_ARROW$ || $DvtNBoxKeyboardHandler$$.keyCode == $dvt$$6$$.KeyboardEvent.$DOWN_ARROW$ ? !0 : !1;
    for (var $DvtNBoxDrawer$$ = $DvtNBoxEventManager$$.length, $DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxDrawer$$;$DvtNBoxCategoryRolloverHandler$$++) {
      if ($DvtNBoxEventManager$$[$DvtNBoxCategoryRolloverHandler$$] === $DvtNBoxAutomation$$) {
        $DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$[$DvtNBoxKeyboardHandler$$ ? $DvtNBoxCategoryRolloverHandler$$ + 1 < $DvtNBoxDrawer$$ ? $DvtNBoxCategoryRolloverHandler$$ + 1 : $DvtNBoxCategoryRolloverHandler$$ : 0 <= $DvtNBoxCategoryRolloverHandler$$ - 1 ? $DvtNBoxCategoryRolloverHandler$$ - 1 : $DvtNBoxCategoryRolloverHandler$$];
        break;
      }
    }
    return $DvtNBoxDataAnimationHandler$$;
  };
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxAutomation$$, $dvt$$6$$.$Automation$);
  $DvtNBoxAutomation$$.prototype.Init = function $$DvtNBoxAutomation$$$$Init$($dvt$$6$$) {
    this.$_nBox$ = $dvt$$6$$;
  };
  $DvtNBoxAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtNBoxAutomation$$$$$GetSubIdForDomElement$$($DvtNBoxAutomation$$) {
    for (var $DvtNBoxKeyboardHandler$$ = this.$_getParentObject$($DvtNBoxAutomation$$, $DvtNBoxCell$$), $DvtNBoxEventManager$$ = this.$_getParentObject$($DvtNBoxAutomation$$, $DvtNBoxDrawer$$);$DvtNBoxAutomation$$ && !($DvtNBoxAutomation$$ instanceof $dvt$$6$$.$NBox$);) {
      var $DvtNBoxDataAnimationHandler$$ = this.$getComponent$(), $DvtNBoxCategoryRolloverHandler$$, $action$$22$$;
      if ($DvtNBoxAutomation$$ instanceof $DvtNBoxNode$$) {
        return $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getNodeIndex$($DvtNBoxDataAnimationHandler$$, $DvtNBoxAutomation$$.getData().id), $DvtNBoxCategoryRolloverHandler$$ = this.$_createBrackets$([$DvtNBoxAutomation$$]), $DvtNBoxCategoryRolloverHandler$$ = "node" + $DvtNBoxCategoryRolloverHandler$$, this.$_createSubId$($DvtNBoxCategoryRolloverHandler$$, $action$$22$$);
      }
      if ($DvtNBoxKeyboardHandler$$) {
        $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$.getData().row;
        var $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxKeyboardHandler$$.getData().column;
        $DvtNBoxKeyboardHandler$$.$getChildContainer$();
        $DvtNBoxCategoryRolloverHandler$$ = this.$_createBrackets$([$DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCategoryNodeRenderer$$]);
        $DvtNBoxCategoryRolloverHandler$$ = "cell" + $DvtNBoxCategoryRolloverHandler$$;
        if ($DvtNBoxAutomation$$ instanceof $DvtNBoxCell$$) {
          return this.$_createSubId$($DvtNBoxCategoryRolloverHandler$$, $action$$22$$);
        }
        if ($DvtNBoxAutomation$$ instanceof $dvt$$6$$.$Button$) {
          if (this.$_getParentObject$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$)) {
            return $action$$22$$ = "overflow", this.$_createSubId$($DvtNBoxCategoryRolloverHandler$$, $action$$22$$);
          }
          if ($DvtNBoxAutomation$$ == $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxDataAnimationHandler$$, $DvtNBoxKeyboardHandler$$.getData(), "closeButton")) {
            return $action$$22$$ = "closeButton", this.$_createSubId$($DvtNBoxCategoryRolloverHandler$$, $action$$22$$);
          }
        }
        if ($DvtNBoxAutomation$$ instanceof $DvtNBoxCategoryNode$$) {
          return $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.getData().id, $action$$22$$ = "groupNode", $action$$22$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxDataAnimationHandler$$, $DvtNBoxAutomation$$.getData().nodeIndices[0]).groupCategory ? $action$$22$$ + this.$_createBrackets$([$DvtNBoxKeyboardHandler$$]) : $action$$22$$ + this.$_createBraces$($DvtNBoxKeyboardHandler$$.split(";")), this.$_createSubId$($DvtNBoxCategoryRolloverHandler$$, $action$$22$$);
        }
      }
      if ($DvtNBoxEventManager$$) {
        $DvtNBoxCategoryRolloverHandler$$ = "dialog";
        if ($DvtNBoxAutomation$$ instanceof $DvtNBoxDrawer$$) {
          return this.$_createSubId$($DvtNBoxCategoryRolloverHandler$$, $action$$22$$);
        }
        if ($DvtNBoxAutomation$$ instanceof $dvt$$6$$.$Button$) {
          return $action$$22$$ = "closeButton", this.$_createSubId$($DvtNBoxCategoryRolloverHandler$$, $action$$22$$);
        }
      }
      if ($DvtNBoxAutomation$$ instanceof $DvtNBoxCategoryNode$$) {
        return $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.getData().id, $DvtNBoxCategoryRolloverHandler$$ = "groupNode", $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxDataAnimationHandler$$, $DvtNBoxAutomation$$.getData().nodeIndices[0]).groupCategory ? $DvtNBoxCategoryRolloverHandler$$ + this.$_createBrackets$([$DvtNBoxKeyboardHandler$$]) : $DvtNBoxCategoryRolloverHandler$$ + this.$_createBraces$($DvtNBoxKeyboardHandler$$.split(";")), this.$_createSubId$($DvtNBoxCategoryRolloverHandler$$, 
        $action$$22$$);
      }
      $DvtNBoxAutomation$$ = $DvtNBoxAutomation$$.getParent();
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$_createSubId$ = function $$DvtNBoxAutomation$$$$$_createSubId$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $dvt$$6$$;
    $DvtNBoxAutomation$$ && ($DvtNBoxKeyboardHandler$$ += "#" + $DvtNBoxAutomation$$);
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtNBoxAutomation$$$$$getDomElementForSubId$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = this.$getComponent$();
    if ($DvtNBoxAutomation$$ == $dvt$$6$$.$Automation$.$TOOLTIP_SUBID$) {
      return this.$GetTooltipElement$($DvtNBoxKeyboardHandler$$);
    }
    $DvtNBoxAutomation$$ = this.$_parseSubId$($DvtNBoxAutomation$$);
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.component, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.action, $DvtNBoxCategoryRolloverHandler$$ = null, $DvtNBoxCell$$ = null;
    $DvtNBoxAutomation$$ = null;
    0 === $DvtNBoxEventManager$$.lastIndexOf("node", 0) && ($DvtNBoxCategoryRolloverHandler$$ = this.$_parseBrackets$($DvtNBoxEventManager$$, !0), $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryRolloverHandler$$[0]), $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxCell$$));
    if (0 === $DvtNBoxEventManager$$.lastIndexOf("cell", 0)) {
      $DvtNBoxCategoryRolloverHandler$$ = this.$_parseBrackets$($DvtNBoxEventManager$$);
      $DvtNBoxCell$$ = this.$_getCellIndexFromValues$($DvtNBoxCategoryRolloverHandler$$);
      $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxKeyboardHandler$$, $DvtNBoxCell$$);
      if (!$DvtNBoxCell$$) {
        return null;
      }
      $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxCell$$);
      if ($DvtNBoxDataAnimationHandler$$) {
        $DvtNBoxCell$$ = $DvtNBoxEventManager$$.$getChildContainer$();
        $DvtNBoxCell$$.$getScrollingPane$ && ($DvtNBoxCell$$ = $DvtNBoxCell$$.$_container$);
        if ("overflow" == $DvtNBoxDataAnimationHandler$$) {
          for (var $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxCell$$.$getNumChildren$();0 < $DvtNBoxCategoryNodeRenderer$$;$DvtNBoxCategoryNodeRenderer$$--) {
            if ($DvtNBoxCell$$.$getChildAt$($DvtNBoxCategoryNodeRenderer$$ - 1) instanceof $DvtNBoxNodeOverflow$$) {
              $DvtNBoxAutomation$$ = $DvtNBoxCell$$.$getChildAt$($DvtNBoxCategoryNodeRenderer$$ - 1).$_button$;
              break;
            }
          }
        }
        "closeButton" == $DvtNBoxDataAnimationHandler$$ && ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$.getData(), "closeButton"));
        if (0 === $DvtNBoxDataAnimationHandler$$.lastIndexOf("node", 0)) {
          $DvtNBoxCategoryRolloverHandler$$ = this.$_parseBrackets$($DvtNBoxDataAnimationHandler$$, !0);
          $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxCategoryRolloverHandler$$[0];
          if (0 > $DvtNBoxCategoryNodeRenderer$$) {
            return null;
          }
          for (var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getFirstNavigableNode$($DvtNBoxKeyboardHandler$$, $DvtNBoxCell$$), $DvtNBoxRenderer$$ = 0;$DvtNBoxEventManager$$ instanceof $DvtNBoxNode$$;) {
            if ($DvtNBoxRenderer$$ == $DvtNBoxCategoryNodeRenderer$$) {
              $DvtNBoxAutomation$$ = $DvtNBoxEventManager$$;
              break;
            }
            $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$.getData().__next);
            $DvtNBoxRenderer$$++;
          }
        }
        if (0 === $DvtNBoxDataAnimationHandler$$.lastIndexOf("groupNode", 0)) {
          var $DvtNBoxDefaults$$;
          -1 < $DvtNBoxDataAnimationHandler$$.indexOf("{") ? $DvtNBoxCategoryRolloverHandler$$ = this.$_parseBraces$($DvtNBoxDataAnimationHandler$$) : $DvtNBoxDefaults$$ = $DvtNBoxDataAnimationHandler$$.substring($DvtNBoxDataAnimationHandler$$.indexOf("[") + 1, $DvtNBoxDataAnimationHandler$$.indexOf("]"));
          for ($DvtNBoxCategoryNodeRenderer$$ = 0;$DvtNBoxCategoryNodeRenderer$$ < $DvtNBoxCell$$.$getNumChildren$();$DvtNBoxCategoryNodeRenderer$$++) {
            if ($DvtNBoxEventManager$$ = $DvtNBoxCell$$.$getChildAt$($DvtNBoxCategoryNodeRenderer$$), $DvtNBoxEventManager$$ instanceof $DvtNBoxCategoryNode$$) {
              if ($DvtNBoxKeyboardHandler$$ = $DvtNBoxEventManager$$.getData().id, $DvtNBoxCategoryRolloverHandler$$ && this.$_compareCategories$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$.split(";"))) {
                $DvtNBoxAutomation$$ = $DvtNBoxEventManager$$;
                break;
              } else {
                if ($DvtNBoxDefaults$$ && $DvtNBoxDefaults$$ == $DvtNBoxKeyboardHandler$$) {
                  $DvtNBoxAutomation$$ = $DvtNBoxEventManager$$;
                  break;
                }
              }
            }
          }
        }
      } else {
        $DvtNBoxAutomation$$ = $DvtNBoxEventManager$$;
      }
    } else {
      if (0 === $DvtNBoxEventManager$$.lastIndexOf("groupNode", 0)) {
        for ($DvtNBoxCell$$ = $DvtNBoxKeyboardHandler$$.$getChildContainer$(), -1 < $DvtNBoxEventManager$$.indexOf("{") ? $DvtNBoxCategoryRolloverHandler$$ = this.$_parseBraces$($DvtNBoxEventManager$$) : $DvtNBoxDefaults$$ = $DvtNBoxEventManager$$.substring($DvtNBoxEventManager$$.indexOf("[") + 1, $DvtNBoxEventManager$$.indexOf("]")), $DvtNBoxCategoryNodeRenderer$$ = 0;$DvtNBoxCategoryNodeRenderer$$ < $DvtNBoxCell$$.$getNumChildren$();$DvtNBoxCategoryNodeRenderer$$++) {
          if ($DvtNBoxEventManager$$ = $DvtNBoxCell$$.$getChildAt$($DvtNBoxCategoryNodeRenderer$$), $DvtNBoxEventManager$$ instanceof $DvtNBoxCategoryNode$$) {
            if ($DvtNBoxKeyboardHandler$$ = $DvtNBoxEventManager$$.getData().id, $DvtNBoxCategoryRolloverHandler$$ && this.$_compareCategories$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$.split(";"))) {
              $DvtNBoxAutomation$$ = $DvtNBoxEventManager$$;
              break;
            } else {
              if ($DvtNBoxDefaults$$ && $DvtNBoxDefaults$$ == $DvtNBoxKeyboardHandler$$) {
                $DvtNBoxAutomation$$ = $DvtNBoxEventManager$$;
                break;
              }
            }
          }
        }
      } else {
        if ("dialog" === $DvtNBoxEventManager$$ && ($DvtNBoxCell$$ = $DvtNBoxKeyboardHandler$$.$getChildContainer$())) {
          for ($DvtNBoxCategoryNodeRenderer$$ = 0;$DvtNBoxCategoryNodeRenderer$$ < $DvtNBoxCell$$.$getNumChildren$();$DvtNBoxCategoryNodeRenderer$$++) {
            if ($DvtNBoxCell$$.$getChildAt$($DvtNBoxCategoryNodeRenderer$$) instanceof $DvtNBoxDrawer$$) {
              $DvtNBoxDefaults$$ = $DvtNBoxCell$$.$getChildAt$($DvtNBoxCategoryNodeRenderer$$);
              if ($DvtNBoxDataAnimationHandler$$) {
                if ("closeButton" == $DvtNBoxDataAnimationHandler$$) {
                  for ($DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxDefaults$$.$getNumChildren$();$DvtNBoxCategoryRolloverHandler$$++) {
                    $DvtNBoxDefaults$$.$getChildAt$($DvtNBoxCategoryRolloverHandler$$) instanceof $dvt$$6$$.$Button$ && ($DvtNBoxAutomation$$ = $DvtNBoxDefaults$$.$getChildAt$($DvtNBoxCategoryRolloverHandler$$));
                  }
                }
                if (0 === $DvtNBoxDataAnimationHandler$$.lastIndexOf("node", 0)) {
                  $DvtNBoxDefaults$$ = $DvtNBoxDefaults$$.$getChildContainer$().$_container$;
                  $DvtNBoxCategoryRolloverHandler$$ = this.$_parseBrackets$($DvtNBoxDataAnimationHandler$$, !0);
                  $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxCategoryRolloverHandler$$[0];
                  if (0 > $DvtNBoxCategoryNodeRenderer$$) {
                    return null;
                  }
                  $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getFirstNavigableNode$($DvtNBoxKeyboardHandler$$, $DvtNBoxDefaults$$);
                  for ($DvtNBoxRenderer$$ = 0;$DvtNBoxEventManager$$ instanceof $DvtNBoxNode$$;) {
                    if ($DvtNBoxRenderer$$ == $DvtNBoxCategoryNodeRenderer$$) {
                      $DvtNBoxAutomation$$ = $DvtNBoxEventManager$$;
                      break;
                    }
                    $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$.getData().__next);
                    $DvtNBoxRenderer$$++;
                  }
                }
              } else {
                $DvtNBoxAutomation$$ = $DvtNBoxDefaults$$;
              }
              break;
            }
          }
        }
      }
    }
    return $DvtNBoxAutomation$$ ? $DvtNBoxAutomation$$.$getElem$() : null;
  };
  $DvtNBoxAutomation$$.prototype.$_parseSubId$ = function $$DvtNBoxAutomation$$$$$_parseSubId$$($dvt$$6$$) {
    var $DvtNBoxAutomation$$ = null, $DvtNBoxKeyboardHandler$$ = null, $DvtNBoxEventManager$$ = $dvt$$6$$.indexOf("#");
    -1 !== $DvtNBoxEventManager$$ ? ($DvtNBoxAutomation$$ = $dvt$$6$$.substring(0, $DvtNBoxEventManager$$), $DvtNBoxKeyboardHandler$$ = $dvt$$6$$.substring($DvtNBoxEventManager$$ + 1)) : $DvtNBoxAutomation$$ = $dvt$$6$$;
    return {component:$DvtNBoxAutomation$$, action:$DvtNBoxKeyboardHandler$$};
  };
  $DvtNBoxAutomation$$.prototype.$getComponent$ = function $$DvtNBoxAutomation$$$$$getComponent$$() {
    return this.$_nBox$;
  };
  $DvtNBoxAutomation$$.prototype.$_parseBrackets$ = function $$DvtNBoxAutomation$$$$$_parseBrackets$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $dvt$$6$$.substring($dvt$$6$$.indexOf("[") + 1, $dvt$$6$$.indexOf("]")).split(",");
    if ($DvtNBoxAutomation$$) {
      for (var $DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxEventManager$$++) {
        $DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$] = parseInt($DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$]);
      }
    }
    return 0 < $DvtNBoxKeyboardHandler$$.length ? $DvtNBoxKeyboardHandler$$ : null;
  };
  $DvtNBoxAutomation$$.prototype.$_createBrackets$ = function $$DvtNBoxAutomation$$$$$_createBrackets$$($dvt$$6$$) {
    return 0 < $dvt$$6$$.length ? "[" + $dvt$$6$$.join(",") + "]" : "";
  };
  $DvtNBoxAutomation$$.prototype.$_parseBraces$ = function $$DvtNBoxAutomation$$$$$_parseBraces$$($dvt$$6$$) {
    return $dvt$$6$$.substring($dvt$$6$$.indexOf("{") + 1, $dvt$$6$$.lastIndexOf("}")).split(",");
  };
  $DvtNBoxAutomation$$.prototype.$_createBraces$ = function $$DvtNBoxAutomation$$$$$_createBraces$$($dvt$$6$$) {
    for (var $DvtNBoxAutomation$$ = "{", $DvtNBoxKeyboardHandler$$ = 0;$DvtNBoxKeyboardHandler$$ < $dvt$$6$$.length;$DvtNBoxKeyboardHandler$$++) {
      $DvtNBoxAutomation$$ += $dvt$$6$$[$DvtNBoxKeyboardHandler$$].trim() + ",";
    }
    return $DvtNBoxAutomation$$.substring(0, $DvtNBoxAutomation$$.length - 1) + "}";
  };
  $DvtNBoxAutomation$$.prototype.$_compareCategories$ = function $$DvtNBoxAutomation$$$$$_compareCategories$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    if ($dvt$$6$$.length != $DvtNBoxAutomation$$.length) {
      return !1;
    }
    $dvt$$6$$.sort();
    $DvtNBoxAutomation$$.sort();
    for (var $DvtNBoxKeyboardHandler$$ = 0;$DvtNBoxKeyboardHandler$$ < $dvt$$6$$.length;$DvtNBoxKeyboardHandler$$++) {
      if ($dvt$$6$$[$DvtNBoxKeyboardHandler$$].trim() != $DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$].trim()) {
        return !1;
      }
    }
    return !0;
  };
  $DvtNBoxAutomation$$.prototype.$_getCellIndexFromValues$ = function $$DvtNBoxAutomation$$$$$_getCellIndexFromValues$$($dvt$$6$$) {
    var $DvtNBoxAutomation$$ = this.$getComponent$(), $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $dvt$$6$$[0]);
    $dvt$$6$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $dvt$$6$$[1]);
    return null != $dvt$$6$$ && null != $DvtNBoxEventManager$$ ? $dvt$$6$$ + $DvtNBoxKeyboardHandler$$ * $DvtNBoxEventManager$$ : null;
  };
  $DvtNBoxAutomation$$.prototype.$_getParentObject$ = function $$DvtNBoxAutomation$$$$$_getParentObject$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    for (var $DvtNBoxKeyboardHandler$$ = $dvt$$6$$;$DvtNBoxKeyboardHandler$$;) {
      if ($DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxAutomation$$) {
        return $DvtNBoxKeyboardHandler$$;
      }
      $DvtNBoxKeyboardHandler$$ = $DvtNBoxKeyboardHandler$$.getParent();
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.getData = function $$DvtNBoxAutomation$$$$getData$($dvt$$6$$, $DvtNBoxAutomation$$) {
    if (this.$_nBox$) {
      if ("rowsTitle" == $dvt$$6$$) {
        if (this.$_nBox$.$getOptions$().rowsTitle) {
          return this.$_nBox$.$getOptions$().rowsTitle;
        }
      } else {
        if ("rowCount" == $dvt$$6$$) {
          var $DvtNBoxKeyboardHandler$$ = this.$_nBox$.$getOptions$().rows;
          if ($DvtNBoxKeyboardHandler$$) {
            return $DvtNBoxKeyboardHandler$$.length;
          }
        } else {
          if ("row" == $dvt$$6$$) {
            if (0 <= $DvtNBoxDataUtils$$.$getRowIndex$(this.$_nBox$, $DvtNBoxAutomation$$)) {
              return $DvtNBoxKeyboardHandler$$ = {}, $DvtNBoxKeyboardHandler$$.label = $DvtNBoxDataUtils$$.$getRowLabel$(this.$_nBox$, $DvtNBoxAutomation$$), $DvtNBoxKeyboardHandler$$;
            }
          } else {
            if ("columnsTitle" == $dvt$$6$$) {
              if (this.$_nBox$.$getOptions$().columnsTitle) {
                return this.$_nBox$.$getOptions$().columnsTitle;
              }
            } else {
              if ("columnCount" == $dvt$$6$$) {
                if ($DvtNBoxKeyboardHandler$$ = this.$_nBox$.$getOptions$().columns) {
                  return $DvtNBoxKeyboardHandler$$.length;
                }
              } else {
                if ("column" == $dvt$$6$$) {
                  if (0 <= $DvtNBoxDataUtils$$.$getColumnIndex$(this.$_nBox$, $DvtNBoxAutomation$$)) {
                    return $DvtNBoxKeyboardHandler$$ = {}, $DvtNBoxKeyboardHandler$$.label = $DvtNBoxDataUtils$$.$getColumnLabel$(this.$_nBox$, $DvtNBoxAutomation$$), $DvtNBoxKeyboardHandler$$;
                  }
                } else {
                  if ("groupBehavior" == $dvt$$6$$) {
                    return $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$);
                  }
                }
              }
            }
          }
        }
      }
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$getGroupNode$ = function $$DvtNBoxAutomation$$$$$getGroupNode$$($DvtNBoxAutomation$$) {
    if ($DvtNBoxAutomation$$ && $DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$) && $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$) == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
      if ("string" === typeof $DvtNBoxAutomation$$) {
        return this.$_getGroupNodeData$($DvtNBoxAutomation$$);
      }
      var $DvtNBoxKeyboardHandler$$ = "", $DvtNBoxEventManager$$;
      for ($DvtNBoxEventManager$$ in $DvtNBoxAutomation$$) {
        $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$[$DvtNBoxEventManager$$] ? $DvtNBoxKeyboardHandler$$ + ($DvtNBoxEventManager$$ + ":" + $DvtNBoxAutomation$$[$DvtNBoxEventManager$$] + ";") : $DvtNBoxKeyboardHandler$$ + ($DvtNBoxEventManager$$ + ";");
      }
      return this.$_getGroupNodeData$($DvtNBoxKeyboardHandler$$.substring(0, $DvtNBoxKeyboardHandler$$.length - 1));
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$_getGroupNodeData$ = function $$DvtNBoxAutomation$$$$$_getGroupNodeData$$($dvt$$6$$) {
    var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nBox$, $dvt$$6$$);
    if ($DvtNBoxAutomation$$) {
      var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $DvtNBoxAutomation$$);
      if ($DvtNBoxKeyboardHandler$$) {
        return $dvt$$6$$ = {}, $dvt$$6$$.selected = $DvtNBoxKeyboardHandler$$.$isSelected$(), $dvt$$6$$.color = $DvtNBoxStyleUtils$$.$getCategoryNodeColor$(this.$_nBox$, $DvtNBoxAutomation$$), $dvt$$6$$.indicatorColor = $DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$(this.$_nBox$, $DvtNBoxAutomation$$), $dvt$$6$$.tooltip = $DvtNBoxKeyboardHandler$$.$getShortDesc$(), $dvt$$6$$.size = $DvtNBoxAutomation$$.nodeIndices ? $DvtNBoxAutomation$$.nodeIndices.length : -1, $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, 
        $DvtNBoxAutomation$$, "indicatorIcon"), $dvt$$6$$.indicatorIcon = this.$_getMarkerData$($DvtNBoxAutomation$$), $dvt$$6$$;
      }
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$getCell$ = function $$DvtNBoxAutomation$$$$$getCell$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getCellByRowColumn$(this.$_nBox$, $dvt$$6$$, $DvtNBoxAutomation$$);
    if ($DvtNBoxKeyboardHandler$$) {
      var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getCellIndex$(), $DvtNBoxDataAnimationHandler$$ = {};
      $DvtNBoxDataAnimationHandler$$.label = $DvtNBoxKeyboardHandler$$.$getLabel$();
      $DvtNBoxDataAnimationHandler$$.background = $DvtNBoxKeyboardHandler$$.$getBackground$();
      $DvtNBoxDataAnimationHandler$$.getNodeCount = function $$DvtNBoxDataAnimationHandler$$$getNodeCount$() {
        return $DvtNBoxKeyboardHandler$$.$getNodeCount$();
      };
      $DvtNBoxDataAnimationHandler$$.rowValue = $dvt$$6$$;
      $DvtNBoxDataAnimationHandler$$.columnValue = $DvtNBoxAutomation$$;
      $DvtNBoxDataAnimationHandler$$.cellIndex = $DvtNBoxEventManager$$;
      return $DvtNBoxDataAnimationHandler$$;
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$getCellNode$ = function $$DvtNBoxAutomation$$$$$getCellNode$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    if (this.$_nBox$ && !$DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$)) {
      var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getCellByRowColumn$(this.$_nBox$, $dvt$$6$$.rowValue, $dvt$$6$$.columnValue).$getNode$($DvtNBoxAutomation$$);
      return this.$_getNode$($DvtNBoxKeyboardHandler$$);
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$getNode$ = function $$DvtNBoxAutomation$$$$$getNode$$($dvt$$6$$) {
    $dvt$$6$$ = $DvtNBoxDataUtils$$.$getNode$(this.$_nBox$, $dvt$$6$$);
    return this.$_getNode$($dvt$$6$$);
  };
  $DvtNBoxAutomation$$.prototype.$_getNode$ = function $$DvtNBoxAutomation$$$$$_getNode$$($dvt$$6$$) {
    if ($dvt$$6$$) {
      var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $dvt$$6$$);
      if ($DvtNBoxAutomation$$) {
        var $DvtNBoxKeyboardHandler$$ = {};
        $DvtNBoxKeyboardHandler$$.selected = $DvtNBoxAutomation$$.$isSelected$();
        $DvtNBoxKeyboardHandler$$.tooltip = $DvtNBoxAutomation$$.$getShortDesc$();
        $DvtNBoxKeyboardHandler$$.color = $DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nBox$, $dvt$$6$$);
        $DvtNBoxKeyboardHandler$$.indicatorColor = $DvtNBoxStyleUtils$$.$getNodeIndicatorColor$(this.$_nBox$, $dvt$$6$$);
        $dvt$$6$$.label && ($DvtNBoxKeyboardHandler$$.label = $dvt$$6$$.label);
        $dvt$$6$$.secondaryLabel && ($DvtNBoxKeyboardHandler$$.secondaryLabel = $dvt$$6$$.secondaryLabel);
        $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $dvt$$6$$, "icon");
        $DvtNBoxKeyboardHandler$$.icon = this.$_getMarkerData$($DvtNBoxAutomation$$);
        $dvt$$6$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $dvt$$6$$, "indicatorIcon");
        $DvtNBoxKeyboardHandler$$.indicatorIcon = this.$_getMarkerData$($dvt$$6$$);
        return $DvtNBoxKeyboardHandler$$;
      }
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$getCellGroupNode$ = function $$DvtNBoxAutomation$$$$$getCellGroupNode$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if ($DvtNBoxKeyboardHandler$$ && $DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$) && $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$) == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      if ("string" === typeof $DvtNBoxKeyboardHandler$$) {
        return this.$_getGroupNodeData$($DvtNBoxAutomation$$.cellIndex + ":" + $DvtNBoxKeyboardHandler$$);
      }
      var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.cellIndex + ":", $DvtNBoxDataAnimationHandler$$;
      for ($DvtNBoxDataAnimationHandler$$ in $DvtNBoxKeyboardHandler$$) {
        $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$] ? $DvtNBoxEventManager$$ + ($DvtNBoxDataAnimationHandler$$ + ":" + $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$] + ";") : $DvtNBoxEventManager$$ + ($DvtNBoxDataAnimationHandler$$ + ";");
      }
      return this.$_getGroupNodeData$($DvtNBoxEventManager$$.substring(0, $DvtNBoxEventManager$$.length - 1));
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$_getMarkerData$ = function $$DvtNBoxAutomation$$$$$_getMarkerData$$($DvtNBoxAutomation$$) {
    if ($DvtNBoxAutomation$$) {
      var $DvtNBoxKeyboardHandler$$ = {};
      $DvtNBoxKeyboardHandler$$.shape = $DvtNBoxAutomation$$ instanceof $dvt$$6$$.$SimpleMarker$ ? $DvtNBoxAutomation$$.$getType$() : "none";
      $DvtNBoxAutomation$$.$getFill$() && ($DvtNBoxKeyboardHandler$$.color = $DvtNBoxAutomation$$.$getFill$().$getColor$());
      return $DvtNBoxKeyboardHandler$$;
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$getDialog$ = function $$DvtNBoxAutomation$$$$$getDialog$$() {
    var $dvt$$6$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nBox$);
    if ($dvt$$6$$) {
      var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nBox$, $dvt$$6$$.id);
      if ($DvtNBoxAutomation$$) {
        var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $DvtNBoxAutomation$$), $dvt$$6$$ = {};
        $dvt$$6$$.label = $DvtNBoxKeyboardHandler$$.$getLabel$();
        $dvt$$6$$.getNodeCount = function $$dvt$$6$$$getNodeCount$() {
          return $DvtNBoxAutomation$$.nodeIndices ? $DvtNBoxAutomation$$.nodeIndices.length : -1;
        };
        for (var $DvtNBoxKeyboardHandler$$ = {}, $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.id.split(";"), $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxEventManager$$.length;$DvtNBoxDataAnimationHandler$$++) {
          var $DvtNBoxDrawer$$ = $DvtNBoxEventManager$$[$DvtNBoxDataAnimationHandler$$].split(":");
          $DvtNBoxDrawer$$ && 2 == $DvtNBoxDrawer$$.length && ($DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$[0]] = $DvtNBoxDrawer$$[1]);
        }
        $dvt$$6$$.groupInfo = $DvtNBoxKeyboardHandler$$;
        return $dvt$$6$$;
      }
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$getDialogNode$ = function $$DvtNBoxAutomation$$$$$getDialogNode$$($dvt$$6$$) {
    var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nBox$);
    return $DvtNBoxAutomation$$ && ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nBox$, $DvtNBoxAutomation$$.id)) && $DvtNBoxAutomation$$.nodeIndices && null != $DvtNBoxAutomation$$.nodeIndices[$dvt$$6$$] ? ($dvt$$6$$ = $DvtNBoxDataUtils$$.$getNode$(this.$_nBox$, $DvtNBoxAutomation$$.nodeIndices[$dvt$$6$$]), this.$_getNode$($dvt$$6$$)) : null;
  };
  $DvtNBoxAutomation$$.prototype.$getNodeIdFromIndex$ = function $$DvtNBoxAutomation$$$$$getNodeIdFromIndex$$($dvt$$6$$) {
    return $DvtNBoxDataUtils$$.$getNode$(this.$_nBox$, $dvt$$6$$).id;
  };
  $DvtNBoxAutomation$$.prototype.$getNodeIndexFromId$ = function $$DvtNBoxAutomation$$$$$getNodeIndexFromId$$($dvt$$6$$) {
    return $DvtNBoxDataUtils$$.$getNodeIndex$(this.$_nBox$, $dvt$$6$$);
  };
  var $DvtNBoxRenderer$$ = {};
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxRenderer$$, $dvt$$6$$.$Obj$);
  $DvtNBoxRenderer$$.$render$ = function $$DvtNBoxRenderer$$$$render$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    $DvtNBoxRenderer$$.$_renderBackground$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$_renderLegend$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$_adjustAvailSpace$($DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$_renderTitles$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$_adjustAvailSpace$($DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$_renderCells$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$_renderNodes$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$_renderInitialSelection$($dvt$$6$$);
    $DvtNBoxRenderer$$.$_fixZOrder$($dvt$$6$$);
  };
  $DvtNBoxRenderer$$.$_renderBackground$ = function $$DvtNBoxRenderer$$$$_renderBackground$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxAutomation$$ = new $dvt$$6$$.Rect($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxEventManager$$.x, $DvtNBoxEventManager$$.y, $DvtNBoxEventManager$$.$w$, $DvtNBoxEventManager$$.$h$);
    $DvtNBoxAutomation$$.$setInvisibleFill$();
    $DvtNBoxKeyboardHandler$$.$addChild$($DvtNBoxAutomation$$);
    $DvtNBoxAutomation$$ = new $dvt$$6$$.$ClipPath$;
    $DvtNBoxAutomation$$.$addRect$($DvtNBoxEventManager$$.x, $DvtNBoxEventManager$$.y, $DvtNBoxEventManager$$.$w$, $DvtNBoxEventManager$$.$h$);
    $DvtNBoxKeyboardHandler$$.$setClipPath$($DvtNBoxAutomation$$);
  };
  $DvtNBoxRenderer$$.$_renderLegend$ = function $$DvtNBoxRenderer$$$$_renderLegend$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getLegend$($DvtNBoxAutomation$$);
    if ($DvtNBoxDataAnimationHandler$$ && $DvtNBoxDataAnimationHandler$$.sections) {
      var $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxCategoryRolloverHandler$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxCategoryNode$$ = new $dvt$$6$$.$PanelDrawer$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxAutomation$$.$processEvent$, $DvtNBoxAutomation$$, "pd1");
      $DvtNBoxCategoryNode$$.$addEvtListener$($dvt$$6$$.$PanelDrawerEvent$.$TYPE$, $DvtNBoxAutomation$$.$processEvent$, !1, $DvtNBoxAutomation$$);
      $DvtNBoxCategoryNode$$.$setDockSide$($dvt$$6$$.$PanelDrawer$.$DOCK_TOP$);
      $DvtNBoxCategoryNode$$.$setMaxHeight$($DvtNBoxEventManager$$.$h$ - $DvtNBoxDrawer$$.__layout.legendBottomGap);
      $DvtNBoxCategoryNode$$.$setMaxWidth$($DvtNBoxEventManager$$.$w$ / 3);
      $DvtNBoxKeyboardHandler$$.$addChild$($DvtNBoxCategoryNode$$);
      var $DvtNBoxCell$$ = $dvt$$6$$.$Legend$.newInstance($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxAutomation$$.$processEvent$, $DvtNBoxAutomation$$);
      $DvtNBoxKeyboardHandler$$.$addChild$($DvtNBoxCell$$);
      var $DvtNBoxNodeOverflow$$ = $DvtNBoxCell$$.$getPreferredSize$($DvtNBoxDataAnimationHandler$$, $DvtNBoxCategoryNode$$.$getMaxContentWidth$(), $DvtNBoxCategoryNode$$.$getMaxContentHeight$());
      $DvtNBoxCell$$.$render$($DvtNBoxDataAnimationHandler$$, $DvtNBoxNodeOverflow$$.$w$, $DvtNBoxNodeOverflow$$.$h$);
      $DvtNBoxKeyboardHandler$$.removeChild($DvtNBoxCell$$);
      var $DvtNBoxNodeOverflow$$ = $DvtNBoxDrawer$$._resources.legend_ena, $DvtNBoxNode$$ = $DvtNBoxDrawer$$._resources.legend_ovr;
      $DvtNBoxKeyboardHandler$$ = $DvtNBoxDrawer$$._resources.legend_dwn;
      $DvtNBoxNodeOverflow$$ = new $dvt$$6$$.Image($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxNodeOverflow$$.src, 0, 0, $DvtNBoxNodeOverflow$$.width, $DvtNBoxNodeOverflow$$.height);
      $DvtNBoxNode$$ = new $dvt$$6$$.Image($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxNode$$.src, 0, 0, $DvtNBoxNode$$.width, $DvtNBoxNode$$.height);
      $DvtNBoxKeyboardHandler$$ = new $dvt$$6$$.Image($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxKeyboardHandler$$.src, 0, 0, $DvtNBoxKeyboardHandler$$.width, $DvtNBoxKeyboardHandler$$.height);
      $DvtNBoxCategoryNode$$.$addPanel$($DvtNBoxCell$$, $DvtNBoxNodeOverflow$$, $DvtNBoxNode$$, $DvtNBoxKeyboardHandler$$, $dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$UTIL_PREFIX$, "LEGEND"), "legend");
      $DvtNBoxCategoryRolloverHandler$$ && $DvtNBoxCategoryNode$$.$setDiscloseDirection$($dvt$$6$$.$PanelDrawer$.$DIR_RIGHT$);
      $DvtNBoxCategoryNode$$.$renderComponent$();
      "disclosed" == $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$LEGEND_DISCLOSURE$] && ($DvtNBoxCategoryNode$$.$setDisplayedPanelId$("legend"), $DvtNBoxCategoryNode$$.$setDisclosed$(!0, !0));
      $DvtNBoxDrawer$$ = $DvtNBoxCategoryNode$$.$getDimensions$();
      $DvtNBoxCategoryNode$$.$setTranslate$($DvtNBoxCategoryRolloverHandler$$ ? 0 : $DvtNBoxEventManager$$.$w$, 0);
      $DvtNBoxCategoryRolloverHandler$$ && ($DvtNBoxEventManager$$.x += $DvtNBoxDrawer$$.$w$);
      $DvtNBoxEventManager$$.$w$ -= $DvtNBoxDrawer$$.$w$;
      $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxCell$$, "legend");
      $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxCategoryNode$$, "panelDrawer");
    }
  };
  $DvtNBoxRenderer$$.$_renderTitles$ = function $$DvtNBoxRenderer$$$$_renderTitles$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$), $DvtNBoxCategoryNode$$ = $DvtNBoxDataAnimationHandler$$.__layout.componentGap, $DvtNBoxCell$$ = $DvtNBoxDataAnimationHandler$$.__layout.titleGap, $DvtNBoxNodeOverflow$$ = $DvtNBoxDataAnimationHandler$$.__layout.titleComponentGap, $DvtNBoxNode$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$());
    $DvtNBoxEventManager$$.x += $DvtNBoxCategoryNode$$;
    $DvtNBoxEventManager$$.y += $DvtNBoxCategoryNode$$;
    $DvtNBoxEventManager$$.$w$ -= 2 * $DvtNBoxCategoryNode$$;
    $DvtNBoxEventManager$$.$h$ -= 2 * $DvtNBoxCategoryNode$$;
    var $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$), $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryNodeRenderer$$ ? $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$) : -1, $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$), $DvtNBoxDrawerRenderer$$ = $DvtNBoxDefaults$$ ? $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$) : -1, $DvtNBoxNodeRenderer$$ = null, 
    $rowsTitle$$ = null, $columnLabels$$ = [], $rowLabels$$ = [], $columnsTitleHeight$$ = 0, $rowsTitleWidth$$ = 0, $rowTitleGap$$ = 0, $columnTitleGap$$ = 0, $columnLabelsHeight$$ = 0, $rowLabelsWidth$$ = 0, $rowTitleComponentGap$$ = 0, $columnTitleComponentGap$$ = 0;
    $DvtNBoxDataAnimationHandler$$[$dvt$$6$$.$NBoxConstants$.$COLUMNS_TITLE$] && ($DvtNBoxNodeRenderer$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxDataAnimationHandler$$[$dvt$$6$$.$NBoxConstants$.$COLUMNS_TITLE$], $DvtNBoxDataAnimationHandler$$[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$COLUMNS_TITLE_STYLE$], $dvt$$6$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$), $DvtNBoxKeyboardHandler$$.$addChild$($DvtNBoxNodeRenderer$$), 
    $columnsTitleHeight$$ = $dvt$$6$$.$TextUtils$.$guessTextDimensions$($DvtNBoxNodeRenderer$$).$h$);
    $DvtNBoxDataAnimationHandler$$[$dvt$$6$$.$NBoxConstants$.$ROWS_TITLE$] && ($rowsTitle$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxDataAnimationHandler$$[$dvt$$6$$.$NBoxConstants$.$ROWS_TITLE$], $DvtNBoxDataAnimationHandler$$[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$ROWS_TITLE_STYLE$], $dvt$$6$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$), $DvtNBoxKeyboardHandler$$.$addChild$($rowsTitle$$), $rowsTitleWidth$$ = 
    $dvt$$6$$.$TextUtils$.$guessTextDimensions$($rowsTitle$$).$h$);
    for ($DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxDrawer$$;$DvtNBoxDataAnimationHandler$$++) {
      var $column_rowLabel$$2$$ = $DvtNBoxDataUtils$$.$getColumn$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
      if ($column_rowLabel$$2$$[$dvt$$6$$.$NBoxConstants$.$LABEL$]) {
        var $columnLabel$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $column_rowLabel$$2$$[$dvt$$6$$.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getColumnLabelStyle$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$), $dvt$$6$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$), $columnLabelsHeight$$ = Math.max($columnLabelsHeight$$, $dvt$$6$$.$TextUtils$.$guessTextDimensions$($columnLabel$$).$h$);
        $DvtNBoxCategoryNodeRenderer$$ && $DvtNBoxCategoryNodeRenderer$$ != $column_rowLabel$$2$$[$dvt$$6$$.$NBoxConstants$.ID] || ($columnLabels$$[$DvtNBoxDataAnimationHandler$$] = $columnLabel$$, $DvtNBoxKeyboardHandler$$.$addChild$($columnLabels$$[$DvtNBoxDataAnimationHandler$$]));
      }
    }
    for ($DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxCategoryRolloverHandler$$;$DvtNBoxDataAnimationHandler$$++) {
      $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getRow$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$), $DvtNBoxCategoryNodeRenderer$$[$dvt$$6$$.$NBoxConstants$.$LABEL$] && ($column_rowLabel$$2$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCategoryNodeRenderer$$[$dvt$$6$$.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getRowLabelStyle$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$), $dvt$$6$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$), 
      $rowLabelsWidth$$ = Math.max($rowLabelsWidth$$, $dvt$$6$$.$TextUtils$.$guessTextDimensions$($column_rowLabel$$2$$).$h$), $DvtNBoxDefaults$$ && $DvtNBoxDefaults$$ != $DvtNBoxCategoryNodeRenderer$$[$dvt$$6$$.$NBoxConstants$.ID] || ($rowLabels$$[$DvtNBoxDataAnimationHandler$$] = $column_rowLabel$$2$$, $DvtNBoxKeyboardHandler$$.$addChild$($rowLabels$$[$DvtNBoxDataAnimationHandler$$])));
    }
    if ($rowsTitleWidth$$ || $rowLabelsWidth$$) {
      $rowTitleComponentGap$$ = $DvtNBoxNodeOverflow$$, $rowsTitleWidth$$ && $rowLabelsWidth$$ && ($rowTitleGap$$ = $DvtNBoxCell$$);
    }
    if ($columnsTitleHeight$$ || $columnLabelsHeight$$) {
      $columnTitleComponentGap$$ = $DvtNBoxNodeOverflow$$, $columnsTitleHeight$$ && $columnLabelsHeight$$ && ($columnTitleGap$$ = $DvtNBoxCell$$);
    }
    $DvtNBoxCell$$ = $rowsTitleWidth$$ + $rowTitleGap$$ + $rowLabelsWidth$$ + $rowTitleComponentGap$$;
    $DvtNBoxNodeOverflow$$ = $columnsTitleHeight$$ + $columnTitleGap$$ + $columnLabelsHeight$$ + $columnTitleComponentGap$$;
    $DvtNBoxEventManager$$.x += $DvtNBoxNode$$ ? 0 : $DvtNBoxCell$$;
    $DvtNBoxEventManager$$.$w$ -= $DvtNBoxCell$$;
    $DvtNBoxEventManager$$.$h$ -= $DvtNBoxNodeOverflow$$;
    $DvtNBoxNodeRenderer$$ && $dvt$$6$$.$TextUtils$.$fitText$($DvtNBoxNodeRenderer$$, $DvtNBoxEventManager$$.$w$, $columnsTitleHeight$$, $DvtNBoxKeyboardHandler$$) && ($DvtNBoxRenderer$$.$positionText$($DvtNBoxNodeRenderer$$, $DvtNBoxEventManager$$.x + $DvtNBoxEventManager$$.$w$ / 2, $DvtNBoxEventManager$$.y + $DvtNBoxEventManager$$.$h$ + $DvtNBoxNodeOverflow$$ - $columnsTitleHeight$$ / 2), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxNodeRenderer$$, 
    $dvt$$6$$.$NBoxConstants$.$COLUMNS_TITLE$));
    $rowsTitle$$ && $dvt$$6$$.$TextUtils$.$fitText$($rowsTitle$$, $DvtNBoxEventManager$$.$h$, $rowsTitleWidth$$, $DvtNBoxKeyboardHandler$$) && ($DvtNBoxRenderer$$.$positionText$($rowsTitle$$, $DvtNBoxEventManager$$.x + ($DvtNBoxNode$$ ? $DvtNBoxEventManager$$.$w$ : 0) + ($DvtNBoxNode$$ ? 1 : -1) * ($DvtNBoxCell$$ - $rowsTitleWidth$$ / 2), $DvtNBoxEventManager$$.y + $DvtNBoxEventManager$$.$h$ / 2, $DvtNBoxNode$$ ? Math.PI / 2 : -Math.PI / 2), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, 
    $DvtNBoxAutomation$$.$getOptions$(), $rowsTitle$$, $dvt$$6$$.$NBoxConstants$.$ROWS_TITLE$));
    for ($DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxDrawer$$;$DvtNBoxDataAnimationHandler$$++) {
      $columnLabels$$[$DvtNBoxDataAnimationHandler$$] && ($DvtNBoxNodeRenderer$$ = $DvtNBoxCellRenderer$$.$getCellDimensions$($DvtNBoxAutomation$$, -1 == $DvtNBoxDrawerRenderer$$ ? 0 : $DvtNBoxDrawerRenderer$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxEventManager$$), $dvt$$6$$.$TextUtils$.$fitText$($columnLabels$$[$DvtNBoxDataAnimationHandler$$], $DvtNBoxNodeRenderer$$.$w$, $columnLabelsHeight$$, $DvtNBoxKeyboardHandler$$) && ($DvtNBoxRenderer$$.$positionText$($columnLabels$$[$DvtNBoxDataAnimationHandler$$], 
      $DvtNBoxNodeRenderer$$.x + $DvtNBoxNodeRenderer$$.$w$ / 2, $DvtNBoxEventManager$$.y + $DvtNBoxEventManager$$.$h$ + $columnTitleComponentGap$$ + $columnLabelsHeight$$ / 2), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDataUtils$$.$getColumn$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$), $columnLabels$$[$DvtNBoxDataAnimationHandler$$], $dvt$$6$$.$NBoxConstants$.$LABEL$)));
    }
    for ($DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxCategoryRolloverHandler$$;$DvtNBoxDataAnimationHandler$$++) {
      $rowLabels$$[$DvtNBoxDataAnimationHandler$$] && ($DvtNBoxNodeRenderer$$ = $DvtNBoxCellRenderer$$.$getCellDimensions$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$, -1 == $DvtNBoxCategoryNode$$ ? 0 : $DvtNBoxCategoryNode$$, $DvtNBoxEventManager$$), $dvt$$6$$.$TextUtils$.$fitText$($rowLabels$$[$DvtNBoxDataAnimationHandler$$], $DvtNBoxNodeRenderer$$.$h$, $rowLabelsWidth$$, $DvtNBoxKeyboardHandler$$) && ($DvtNBoxRenderer$$.$positionText$($rowLabels$$[$DvtNBoxDataAnimationHandler$$], $DvtNBoxEventManager$$.x + 
      ($DvtNBoxNode$$ ? $DvtNBoxEventManager$$.$w$ : 0) + ($DvtNBoxNode$$ ? 1 : -1) * ($rowTitleComponentGap$$ + $rowLabelsWidth$$ / 2), $DvtNBoxNodeRenderer$$.y + $DvtNBoxNodeRenderer$$.$h$ / 2, $DvtNBoxNode$$ ? Math.PI / 2 : -Math.PI / 2), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDataUtils$$.$getRow$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$), $rowLabels$$[$DvtNBoxDataAnimationHandler$$], $dvt$$6$$.$NBoxConstants$.$LABEL$)));
    }
  };
  $DvtNBoxRenderer$$.$createText$ = function $$DvtNBoxRenderer$$$$createText$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxDrawer$$) {
    $DvtNBoxAutomation$$ = new $dvt$$6$$.$OutputText$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, 0, 0);
    $DvtNBoxAutomation$$.$setCSSStyle$($DvtNBoxEventManager$$);
    $DvtNBoxAutomation$$.$setHorizAlignment$($DvtNBoxDataAnimationHandler$$);
    $DvtNBoxAutomation$$.$setVertAlignment$($DvtNBoxDrawer$$);
    return $DvtNBoxAutomation$$;
  };
  $DvtNBoxRenderer$$.$_renderCells$ = function $$DvtNBoxRenderer$$$$_renderCells$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    for (var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRowCount$($dvt$$6$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getColumnCount$($dvt$$6$$), $DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxEventManager$$;$DvtNBoxDrawer$$++) {
      for (var $DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxDataAnimationHandler$$;$DvtNBoxCategoryRolloverHandler$$++) {
        var $DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getCell$($dvt$$6$$, $DvtNBoxDrawer$$ * $DvtNBoxDataAnimationHandler$$ + $DvtNBoxCategoryRolloverHandler$$);
        $DvtNBoxCell$$.newInstance($dvt$$6$$, $DvtNBoxCategoryNode$$).$render$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
      }
    }
  };
  $DvtNBoxRenderer$$.$getCellCounts$ = function $$DvtNBoxRenderer$$$$getCellCounts$$($dvt$$6$$) {
    return $dvt$$6$$.$getOptions$().__cellCounts || $DvtNBoxRenderer$$.$_calculateCellCounts$($dvt$$6$$);
  };
  $DvtNBoxRenderer$$.$_calculateCellCounts$ = function $$DvtNBoxRenderer$$$$_calculateCellCounts$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$ * $DvtNBoxEventManager$$, $DvtNBoxKeyboardHandler$$ = [], $DvtNBoxEventManager$$ = null, $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($DvtNBoxAutomation$$), $DvtNBoxCategoryRolloverHandler$$ = {};
    if ($DvtNBoxDrawer$$) {
      for (var $DvtNBoxEventManager$$ = [], $DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxDrawer$$.length;$DvtNBoxCategoryNode$$++) {
        $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDrawer$$[$DvtNBoxCategoryNode$$][$dvt$$6$$.$NBoxConstants$.ID]] = !0;
      }
    }
    for ($DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxDataAnimationHandler$$;$DvtNBoxCategoryNode$$++) {
      $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryNode$$] = 0, $DvtNBoxEventManager$$ && ($DvtNBoxEventManager$$[$DvtNBoxCategoryNode$$] = 0);
    }
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$);
    for ($DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxDataAnimationHandler$$;$DvtNBoxCategoryNode$$++) {
      if ($DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxCategoryNode$$), !$DvtNBoxDataUtils$$.$isNodeHidden$($DvtNBoxAutomation$$, $DvtNBoxDrawer$$)) {
        var $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxAutomation$$, $DvtNBoxDrawer$$);
        $DvtNBoxKeyboardHandler$$[$DvtNBoxCell$$]++;
        $DvtNBoxEventManager$$ && $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.ID]] && $DvtNBoxEventManager$$[$DvtNBoxCell$$]++;
      }
    }
    $DvtNBoxCategoryRolloverHandler$$ = {};
    $DvtNBoxCategoryRolloverHandler$$.total = $DvtNBoxKeyboardHandler$$;
    $DvtNBoxEventManager$$ && ($DvtNBoxCategoryRolloverHandler$$.highlighted = $DvtNBoxEventManager$$);
    return $DvtNBoxAutomation$$.$getOptions$().__cellCounts = $DvtNBoxCategoryRolloverHandler$$;
  };
  $DvtNBoxRenderer$$.$calculateNodeOrders$ = function $$DvtNBoxRenderer$$$$calculateNodeOrders$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = ["normal"], $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = {};
    if ($DvtNBoxEventManager$$) {
      for (var $DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxEventManager$$.length;$DvtNBoxDrawer$$++) {
        $DvtNBoxDataAnimationHandler$$[$DvtNBoxEventManager$$[$DvtNBoxDrawer$$][$dvt$$6$$.$NBoxConstants$.ID]] = !0;
      }
    }
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getSelectedItems$($DvtNBoxAutomation$$), $DvtNBoxCategoryNode$$ = {};
    if ($DvtNBoxCategoryRolloverHandler$$) {
      for ($DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxCategoryRolloverHandler$$.length;$DvtNBoxDrawer$$++) {
        $DvtNBoxCategoryNode$$[$DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDrawer$$]] = !0;
      }
    }
    $DvtNBoxEventManager$$ ? $DvtNBoxKeyboardHandler$$ = $DvtNBoxCategoryRolloverHandler$$ ? ["highlighted-selected", "highlighted-unselected", "unhighlighted-selected", "unhighlighted-unselected"] : ["highlighted-unselected", "unhighlighted-unselected"] : $DvtNBoxCategoryRolloverHandler$$ && ($DvtNBoxKeyboardHandler$$ = ["unhighlighted-selected", "unhighlighted-unselected"]);
    $DvtNBoxEventManager$$ = {};
    $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$);
    for ($DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxCategoryRolloverHandler$$++) {
      for (var $DvtNBoxCell$$ = 0;$DvtNBoxCell$$ < $DvtNBoxDrawer$$;$DvtNBoxCell$$++) {
        var $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxCell$$);
        if (!$DvtNBoxDataUtils$$.$isNodeHidden$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$) && ("normal" == $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$] || "highlighted-selected" == $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$] && $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.ID]] && $DvtNBoxCategoryNode$$[$DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.ID]] || "highlighted-unselected" == $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$] && 
        $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.ID]] && !$DvtNBoxCategoryNode$$[$DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.ID]] || "unhighlighted-selected" == $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$] && !$DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.ID]] && $DvtNBoxCategoryNode$$[$DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.ID]] || "unhighlighted-unselected" == $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$] && 
        !$DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.ID]] && !$DvtNBoxCategoryNode$$[$DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.ID]])) {
          var $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$);
          $DvtNBoxDataUtils$$.$isCellMinimized$($DvtNBoxAutomation$$, $DvtNBoxNode$$) || ($DvtNBoxEventManager$$[$DvtNBoxNode$$] || ($DvtNBoxEventManager$$[$DvtNBoxNode$$] = []), $DvtNBoxEventManager$$[$DvtNBoxNode$$].push($DvtNBoxNodeOverflow$$));
        }
      }
    }
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxRenderer$$.$_renderNodes$ = function $$DvtNBoxRenderer$$$$_renderNodes$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if (0 < $DvtNBoxDataUtils$$.$getNodeCount$($dvt$$6$$)) {
      if ("counts" == $DvtNBoxDataUtils$$.$getCellContent$($dvt$$6$$)) {
        $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getRowCount$($dvt$$6$$);
        $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getColumnCount$($dvt$$6$$);
        for (var $DvtNBoxEventManager$$ = [], $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxAutomation$$;$DvtNBoxDataAnimationHandler$$++) {
          for (var $DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxKeyboardHandler$$;$DvtNBoxDrawer$$++) {
            $DvtNBoxEventManager$$.push($DvtNBoxDataAnimationHandler$$ * $DvtNBoxKeyboardHandler$$ + $DvtNBoxDrawer$$);
          }
        }
        $DvtNBoxCellRenderer$$.$renderBodyCountLabels$($dvt$$6$$, $DvtNBoxEventManager$$);
      } else {
        $DvtNBoxDataUtils$$.$getGrouping$($dvt$$6$$) ? ($DvtNBoxRenderer$$.$_renderCategoryNodes$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxRenderer$$.$_renderDrawer$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$)) : $DvtNBoxRenderer$$.$_renderIndividualNodes$($dvt$$6$$);
      }
    }
  };
  $DvtNBoxRenderer$$.$_renderIndividualNodes$ = function $$DvtNBoxRenderer$$$$_renderIndividualNodes$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getOptions$().__layout.gridGap, $DvtNBoxEventManager$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($DvtNBoxAutomation$$), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($DvtNBoxAutomation$$), $DvtNBoxCategoryRolloverHandler$$ = {};
    if ($DvtNBoxDrawer$$) {
      for (var $DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxDrawer$$.length;$DvtNBoxCategoryNode$$++) {
        $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDrawer$$[$DvtNBoxCategoryNode$$][$dvt$$6$$.$NBoxConstants$.ID]] = !0;
      }
    }
    for (var $DvtNBoxCell$$ = $DvtNBoxRenderer$$.$calculateNodeOrders$($DvtNBoxAutomation$$), $DvtNBoxCategoryNode$$ = $DvtNBoxNodeRenderer$$.$calculateNodeLayout$($DvtNBoxAutomation$$, $DvtNBoxCell$$), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxCategoryNode$$.indicatorSectionWidth + $DvtNBoxCategoryNode$$.iconSectionWidth + $DvtNBoxCategoryNode$$.labelSectionWidth + $DvtNBoxKeyboardHandler$$, $DvtNBoxDefaults$$ = $DvtNBoxCategoryNode$$.nodeHeight + $DvtNBoxKeyboardHandler$$, $DvtNBoxDrawerRenderer$$ = 
    $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$), $columnCount$$4$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $r$$36$$ = 0;$r$$36$$ < $DvtNBoxDrawerRenderer$$;$r$$36$$++) {
      for (var $c$$21$$ = 0;$c$$21$$ < $columnCount$$4$$;$c$$21$$++) {
        var $cellIndex$$5_cellLayout$$1$$ = $r$$36$$ * $columnCount$$4$$ + $c$$21$$, $nodes$$13$$ = $DvtNBoxCell$$[$cellIndex$$5_cellLayout$$1$$];
        if ($nodes$$13$$ && $nodes$$13$$.length) {
          var $cell$$12$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $cellIndex$$5_cellLayout$$1$$), $cellIndex$$5_cellLayout$$1$$ = $DvtNBoxCategoryNode$$.cellLayouts[$cellIndex$$5_cellLayout$$1$$], $cellRows_gridXOrigin_prevNode$$ = $cellIndex$$5_cellLayout$$1$$.cellRows, $cellColumns_overflowContainer$$ = $cellIndex$$5_cellLayout$$1$$.cellColumns;
          if (!(0 == $cellRows_gridXOrigin_prevNode$$ || 0 == $cellColumns_overflowContainer$$ || 1 == $cellRows_gridXOrigin_prevNode$$ && 1 == $cellColumns_overflowContainer$$ && $cellIndex$$5_cellLayout$$1$$.overflow)) {
            for (var $maxNodes$$ = $cellRows_gridXOrigin_prevNode$$ * $cellColumns_overflowContainer$$ - ($cellIndex$$5_cellLayout$$1$$.overflow ? 1 : 0), $n$$18$$ = 0;$n$$18$$ < $nodes$$13$$.length;$n$$18$$++) {
              var $node$$260$$ = $nodes$$13$$[$n$$18$$];
              if (0 > $maxNodes$$ || $n$$18$$ < $maxNodes$$) {
                var $cellContainer$$1$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $cell$$12$$).$getChildContainer$(), $scrolling$$ = $cellContainer$$1$$ instanceof $dvt$$6$$.$SimpleScrollableContainer$, $nodeContainer$$ = new $DvtNBoxNode$$($DvtNBoxAutomation$$, $node$$260$$), $cellRows_gridXOrigin_prevNode$$ = $cell$$12$$.__childArea.x + ($cell$$12$$.__childArea.$w$ - $cellIndex$$5_cellLayout$$1$$.cellColumns * $DvtNBoxCategoryNodeRenderer$$ + $DvtNBoxKeyboardHandler$$) / 2, $gridYOrigin$$ = 
                $scrolling$$ ? $DvtNBoxKeyboardHandler$$ : $cell$$12$$.__childArea.y, $gridColumn$$ = $n$$18$$ % $cellColumns_overflowContainer$$;
                $DvtNBoxEventManager$$ && ($gridColumn$$ = $cellColumns_overflowContainer$$ - $gridColumn$$ - 1);
                var $gridRow$$ = Math.floor($n$$18$$ / $cellColumns_overflowContainer$$);
                $nodeContainer$$.$setTranslate$($cellRows_gridXOrigin_prevNode$$ + $DvtNBoxCategoryNodeRenderer$$ * $gridColumn$$, $gridYOrigin$$ + $DvtNBoxDefaults$$ * $gridRow$$);
                $nodeContainer$$.$render$($scrolling$$ ? $cellContainer$$1$$.$_container$ : $cellContainer$$1$$, $DvtNBoxCategoryNode$$);
                $DvtNBoxDrawer$$ && !$DvtNBoxCategoryRolloverHandler$$[$node$$260$$[$dvt$$6$$.$NBoxConstants$.ID]] && $nodeContainer$$.$setAlpha$($DvtNBoxDataAnimationHandler$$);
                if ($cellRows_gridXOrigin_prevNode$$ = 0 < $n$$18$$ ? $nodes$$13$$[$n$$18$$ - 1] : null) {
                  $node$$260$$.__prev = $cellRows_gridXOrigin_prevNode$$, $cellRows_gridXOrigin_prevNode$$.__next = $node$$260$$;
                }
              }
            }
          }
        }
      }
    }
    $DvtNBoxDrawerRenderer$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$);
    $columnCount$$4$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$);
    $DvtNBoxDataAnimationHandler$$ = [];
    for ($r$$36$$ = 0;$r$$36$$ < $DvtNBoxDrawerRenderer$$;$r$$36$$++) {
      for ($c$$21$$ = 0;$c$$21$$ < $columnCount$$4$$;$c$$21$$++) {
        $DvtNBoxDrawer$$ = $r$$36$$ * $columnCount$$4$$ + $c$$21$$, $DvtNBoxDataUtils$$.$isCellMinimized$($DvtNBoxAutomation$$, $DvtNBoxDrawer$$) || ($DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxDrawer$$), $cell$$12$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxCategoryRolloverHandler$$), $cellIndex$$5_cellLayout$$1$$ = $DvtNBoxCategoryNode$$.cellLayouts[$DvtNBoxDrawer$$], $cellIndex$$5_cellLayout$$1$$.overflow && ($cellRows_gridXOrigin_prevNode$$ = 
        $cellIndex$$5_cellLayout$$1$$.cellRows, $cellColumns_overflowContainer$$ = $cellIndex$$5_cellLayout$$1$$.cellColumns, 0 == $cellRows_gridXOrigin_prevNode$$ || 0 == $cellColumns_overflowContainer$$ || 1 == $cellRows_gridXOrigin_prevNode$$ && 1 == $cellColumns_overflowContainer$$ && $cellIndex$$5_cellLayout$$1$$.overflow ? $DvtNBoxDataAnimationHandler$$.push($DvtNBoxDrawer$$) : ($cellColumns_overflowContainer$$ = $DvtNBoxNodeOverflow$$.newInstance($DvtNBoxAutomation$$, $cell$$12$$), ($cellRows_gridXOrigin_prevNode$$ = 
        $DvtNBoxDataUtils$$.$getLastNavigableNode$($DvtNBoxAutomation$$, $cell$$12$$.$getChildContainer$())) && $cellRows_gridXOrigin_prevNode$$ instanceof $DvtNBoxNode$$ && ($cellColumns_overflowContainer$$.__prev = $cellRows_gridXOrigin_prevNode$$.getData(), $cellRows_gridXOrigin_prevNode$$.getData().__next = $cellColumns_overflowContainer$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $cellColumns_overflowContainer$$, $cellColumns_overflowContainer$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, 
        $DvtNBoxCategoryRolloverHandler$$, $cellColumns_overflowContainer$$, "overflow"), $cellRows_gridXOrigin_prevNode$$ = $DvtNBoxCategoryRolloverHandler$$.__childArea.x + ($DvtNBoxCategoryRolloverHandler$$.__childArea.$w$ - $cellIndex$$5_cellLayout$$1$$.cellColumns * $DvtNBoxCategoryNodeRenderer$$ + $DvtNBoxKeyboardHandler$$) / 2, $gridYOrigin$$ = $DvtNBoxCategoryRolloverHandler$$.__childArea.y, $gridColumn$$ = $cellIndex$$5_cellLayout$$1$$.cellColumns - 1, $DvtNBoxEventManager$$ && ($gridColumn$$ = 
        0), $gridRow$$ = $cellIndex$$5_cellLayout$$1$$.cellRows - 1, $cellColumns_overflowContainer$$.$setTranslate$($cellRows_gridXOrigin_prevNode$$ + $DvtNBoxCategoryNodeRenderer$$ * $gridColumn$$, $gridYOrigin$$ + $DvtNBoxDefaults$$ * $gridRow$$), $cellColumns_overflowContainer$$.$render$($cell$$12$$.$getChildContainer$(), $DvtNBoxCategoryNodeRenderer$$ - $DvtNBoxKeyboardHandler$$, $DvtNBoxDefaults$$ - $DvtNBoxKeyboardHandler$$)))), $DvtNBoxDataUtils$$.$isCellMaximized$($DvtNBoxAutomation$$, $DvtNBoxDrawer$$) && 
        ($cellContainer$$1$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxDrawer$$)).$getChildContainer$(), $cellContainer$$1$$.$prepareContentPane$());
      }
    }
    0 < $DvtNBoxDataAnimationHandler$$.length && $DvtNBoxCellRenderer$$.$renderBodyCountLabels$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
  };
  $DvtNBoxRenderer$$.$_renderCategoryNodes$ = function $$DvtNBoxRenderer$$$$_renderCategoryNodes$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = {}, $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$), $DvtNBoxCell$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($DvtNBoxAutomation$$), $DvtNBoxNode$$ = {};
    if ($DvtNBoxNodeOverflow$$) {
      for (var $DvtNBoxCategoryNodeRenderer$$ = 0;$DvtNBoxCategoryNodeRenderer$$ < $DvtNBoxNodeOverflow$$.length;$DvtNBoxCategoryNodeRenderer$$++) {
        $DvtNBoxNode$$[$DvtNBoxNodeOverflow$$[$DvtNBoxCategoryNodeRenderer$$][$dvt$$6$$.$NBoxConstants$.ID]] = !0;
      }
    }
    for ($DvtNBoxCategoryNodeRenderer$$ = 0;$DvtNBoxCategoryNodeRenderer$$ < $DvtNBoxDrawer$$;$DvtNBoxCategoryNodeRenderer$$++) {
      if ($DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$), !$DvtNBoxDataUtils$$.$isNodeHidden$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$)) {
        var $DvtNBoxDefaults$$ = $DvtNBoxDataAnimationHandler$$;
        if ($DvtNBoxCategoryRolloverHandler$$ == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
          var $DvtNBoxCellRenderer$$ = $DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$) + "", $DvtNBoxDefaults$$ = $DvtNBoxDataAnimationHandler$$[$DvtNBoxCellRenderer$$];
          $DvtNBoxDefaults$$ || ($DvtNBoxDefaults$$ = {}, $DvtNBoxDataAnimationHandler$$[$DvtNBoxCellRenderer$$] = $DvtNBoxDefaults$$);
        }
        var $DvtNBoxCellRenderer$$ = $DvtNBoxDataUtils$$.$getNodeGroupId$($DvtNBoxNodeOverflow$$), $DvtNBoxDrawerRenderer$$ = $DvtNBoxDefaults$$[$DvtNBoxCellRenderer$$];
        $DvtNBoxDrawerRenderer$$ || ($DvtNBoxDrawerRenderer$$ = {}, $DvtNBoxDrawerRenderer$$[$dvt$$6$$.$NBoxConstants$.ID] = $DvtNBoxCellRenderer$$, $DvtNBoxCategoryRolloverHandler$$ == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($DvtNBoxDrawerRenderer$$[$dvt$$6$$.$NBoxConstants$.$CELL$] = $DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$)), $DvtNBoxDrawerRenderer$$.nodeIndices = [], $DvtNBoxDrawerRenderer$$.highlightedCount = 0, $DvtNBoxDefaults$$[$DvtNBoxCellRenderer$$] = 
        $DvtNBoxDrawerRenderer$$);
        $DvtNBoxDrawerRenderer$$.nodeIndices.push($DvtNBoxCategoryNodeRenderer$$);
        $DvtNBoxNode$$[$DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$)[$dvt$$6$$.$NBoxConstants$.ID]] && $DvtNBoxDrawerRenderer$$.highlightedCount++;
      }
    }
    if ($DvtNBoxCategoryRolloverHandler$$ == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      var $DvtNBoxCategoryNodeRenderer$$ = {}, $DvtNBoxNodeRenderer$$;
      for ($DvtNBoxNodeRenderer$$ in $DvtNBoxDataAnimationHandler$$) {
        $DvtNBoxCategoryNodeRenderer$$[$DvtNBoxNodeRenderer$$] = $DvtNBoxRenderer$$.$_processOtherThreshold$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeRenderer$$]);
      }
    } else {
      $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxRenderer$$.$_processOtherThreshold$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
    }
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxCategoryNodeRenderer$$;
    $DvtNBoxAutomation$$.$getOptions$().__groups = $DvtNBoxDataAnimationHandler$$;
    if ($DvtNBoxCategoryRolloverHandler$$ == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
      $DvtNBoxNodeRenderer$$ = [];
      for ($DvtNBoxDrawerRenderer$$ in $DvtNBoxDataAnimationHandler$$) {
        $DvtNBoxNodeRenderer$$.push($DvtNBoxDrawerRenderer$$);
      }
      $DvtNBoxNodeRenderer$$.sort(function($dvt$$6$$, $DvtNBoxAutomation$$) {
        return $DvtNBoxCategoryNode$$.$compareSize$($DvtNBoxDataAnimationHandler$$[$dvt$$6$$], $DvtNBoxDataAnimationHandler$$[$DvtNBoxAutomation$$]);
      });
      $DvtNBoxCategoryRolloverHandler$$ = Math.sqrt(.15 * $DvtNBoxEventManager$$.$w$ * $DvtNBoxEventManager$$.$h$ / $DvtNBoxDrawer$$);
      for ($DvtNBoxCategoryNodeRenderer$$ = 0;$DvtNBoxCategoryNodeRenderer$$ < $DvtNBoxNodeRenderer$$.length;$DvtNBoxCategoryNodeRenderer$$++) {
        $DvtNBoxDrawerRenderer$$ = $DvtNBoxNodeRenderer$$[$DvtNBoxCategoryNodeRenderer$$];
        $DvtNBoxDefaults$$ = $DvtNBoxNode$$ = 0;
        $DvtNBoxDrawer$$ = $DvtNBoxDataAnimationHandler$$[$DvtNBoxDrawerRenderer$$].nodeIndices.length;
        for ($DvtNBoxCellRenderer$$ = 0;$DvtNBoxCellRenderer$$ < $DvtNBoxDrawer$$;$DvtNBoxCellRenderer$$++) {
          $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxDrawerRenderer$$].nodeIndices[$DvtNBoxCellRenderer$$]), $DvtNBoxNode$$ += $DvtNBoxDataUtils$$.$getXPercentage$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$), $DvtNBoxDefaults$$ += $DvtNBoxDataUtils$$.$getYPercentage$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$);
        }
        $DvtNBoxNode$$ /= $DvtNBoxDrawer$$;
        $DvtNBoxDefaults$$ /= $DvtNBoxDrawer$$;
        $DvtNBoxDrawer$$ = $DvtNBoxCategoryNode$$.newInstance($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxDrawerRenderer$$]);
        $DvtNBoxDrawer$$.$setTranslate$($DvtNBoxEventManager$$.x + ($DvtNBoxCell$$ ? 1 - $DvtNBoxNode$$ : $DvtNBoxNode$$) * $DvtNBoxEventManager$$.$w$, $DvtNBoxEventManager$$.y + (1 - $DvtNBoxDefaults$$) * $DvtNBoxEventManager$$.$h$);
        $DvtNBoxDrawer$$.$render$($DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryRolloverHandler$$, 0);
        $DvtNBoxDrawer$$.$setMaxAlpha$(.8);
      }
    } else {
      if ($DvtNBoxCategoryRolloverHandler$$ == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
        $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$);
        $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$);
        $DvtNBoxKeyboardHandler$$ *= $DvtNBoxCategoryNodeRenderer$$;
        $DvtNBoxEventManager$$ = [];
        for ($DvtNBoxCategoryNodeRenderer$$ = 0;$DvtNBoxCategoryNodeRenderer$$ < $DvtNBoxKeyboardHandler$$;$DvtNBoxCategoryNodeRenderer$$++) {
          $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNodeRenderer$$] && !$DvtNBoxDataUtils$$.$isCellMinimized$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$) && ($DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$), $DvtNBoxEventManager$$[$DvtNBoxCategoryNodeRenderer$$] = $DvtNBoxRenderer$$.$_forceLayoutGroups$($DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNodeRenderer$$], $DvtNBoxCell$$.__childArea.$w$, $DvtNBoxCell$$.__childArea.$h$));
        }
        $DvtNBoxCategoryRolloverHandler$$ = 40;
        for ($DvtNBoxCategoryNodeRenderer$$ = 0;$DvtNBoxCategoryNodeRenderer$$ < $DvtNBoxKeyboardHandler$$;$DvtNBoxCategoryNodeRenderer$$++) {
          $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNodeRenderer$$] && !$DvtNBoxDataUtils$$.$isCellMinimized$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$) && ($DvtNBoxCategoryRolloverHandler$$ = Math.min($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxEventManager$$[$DvtNBoxCategoryNodeRenderer$$].scale));
        }
        for ($DvtNBoxCategoryNodeRenderer$$ = 0;$DvtNBoxCategoryNodeRenderer$$ < $DvtNBoxKeyboardHandler$$;$DvtNBoxCategoryNodeRenderer$$++) {
          if ($DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNodeRenderer$$] && !$DvtNBoxDataUtils$$.$isCellMinimized$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$)) {
            for ($DvtNBoxDrawerRenderer$$ in $DvtNBoxNodeOverflow$$ = $DvtNBoxEventManager$$[$DvtNBoxCategoryNodeRenderer$$].positions, $DvtNBoxNodeRenderer$$ = $DvtNBoxEventManager$$[$DvtNBoxCategoryNodeRenderer$$].center, $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$), $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxCell$$).$getChildContainer$(), $DvtNBoxDefaults$$ = $DvtNBoxNode$$ instanceof $dvt$$6$$.$SimpleScrollableContainer$, 
            $DvtNBoxNodeOverflow$$) {
              $DvtNBoxDrawer$$ = $DvtNBoxCategoryNode$$.newInstance($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNodeRenderer$$][$DvtNBoxDrawerRenderer$$]), $DvtNBoxDrawer$$.$setTranslate$($DvtNBoxCell$$.__childArea.x + $DvtNBoxCell$$.__childArea.$w$ / 2 + $DvtNBoxCategoryRolloverHandler$$ * ($DvtNBoxNodeOverflow$$[$DvtNBoxDrawerRenderer$$].x - $DvtNBoxNodeRenderer$$.x), ($DvtNBoxDefaults$$ ? 0 : $DvtNBoxCell$$.__childArea.y) + $DvtNBoxCell$$.__childArea.$h$ / 2 + $DvtNBoxCategoryRolloverHandler$$ * 
              ($DvtNBoxNodeOverflow$$[$DvtNBoxDrawerRenderer$$].y - $DvtNBoxNodeRenderer$$.y)), $DvtNBoxDrawer$$.$render$($DvtNBoxDefaults$$ ? $DvtNBoxNode$$.$_container$ : $DvtNBoxNode$$, $DvtNBoxCategoryRolloverHandler$$, 3);
            }
          }
        }
      }
    }
  };
  $DvtNBoxRenderer$$.$getRowDimensions$ = function $$DvtNBoxRenderer$$$$getRowDimensions$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$);
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$.$h$ / $DvtNBoxAutomation$$;
    return new $dvt$$6$$.$Rectangle$($DvtNBoxEventManager$$.x, $DvtNBoxEventManager$$.y + ($DvtNBoxAutomation$$ - $DvtNBoxKeyboardHandler$$ - 1) * $DvtNBoxDataAnimationHandler$$, $DvtNBoxEventManager$$.$w$, $DvtNBoxDataAnimationHandler$$);
  };
  $DvtNBoxRenderer$$.$getColumnDimensions$ = function $$DvtNBoxRenderer$$$$getColumnDimensions$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$.$w$ / $DvtNBoxDataAnimationHandler$$;
    $DvtNBoxAutomation$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$());
    return new $dvt$$6$$.$Rectangle$($DvtNBoxEventManager$$.x + ($DvtNBoxAutomation$$ ? $DvtNBoxEventManager$$.$w$ - $DvtNBoxDataAnimationHandler$$ : 0) + ($DvtNBoxAutomation$$ ? -1 : 1) * $DvtNBoxKeyboardHandler$$ * $DvtNBoxDataAnimationHandler$$, $DvtNBoxEventManager$$.y, $DvtNBoxDataAnimationHandler$$, $DvtNBoxEventManager$$.$h$);
  };
  $DvtNBoxRenderer$$.$_adjustAvailSpace$ = function $$DvtNBoxRenderer$$$$_adjustAvailSpace$$($dvt$$6$$) {
    $dvt$$6$$.x = Math.round($dvt$$6$$.x);
    $dvt$$6$$.y = Math.round($dvt$$6$$.y);
    $dvt$$6$$.$w$ = Math.round($dvt$$6$$.$w$);
    $dvt$$6$$.$h$ = Math.round($dvt$$6$$.$h$);
  };
  $DvtNBoxRenderer$$.$positionText$ = function $$DvtNBoxRenderer$$$$positionText$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $dvt$$6$$.$setX$($DvtNBoxAutomation$$);
    $dvt$$6$$.$setY$($DvtNBoxKeyboardHandler$$);
    if ($DvtNBoxEventManager$$) {
      var $DvtNBoxDataAnimationHandler$$ = $dvt$$6$$.$getMatrix$();
      $DvtNBoxDataAnimationHandler$$.translate(-$DvtNBoxAutomation$$, -$DvtNBoxKeyboardHandler$$);
      $DvtNBoxDataAnimationHandler$$.rotate($DvtNBoxEventManager$$);
      $DvtNBoxDataAnimationHandler$$.translate($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
      $dvt$$6$$.$setMatrix$($DvtNBoxDataAnimationHandler$$);
    }
  };
  $DvtNBoxRenderer$$.$_renderInitialSelection$ = function $$DvtNBoxRenderer$$$$_renderInitialSelection$$($DvtNBoxAutomation$$) {
    if ($DvtNBoxAutomation$$.$isSelectionSupported$()) {
      var $DvtNBoxKeyboardHandler$$ = {}, $DvtNBoxEventManager$$ = [], $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getSelectedItems$($DvtNBoxAutomation$$);
      if ($DvtNBoxDataAnimationHandler$$) {
        for (var $DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxDrawer$$++) {
          $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$[$DvtNBoxDrawer$$]] = !0;
        }
        var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$getObjects$();
        if ($DvtNBoxDataUtils$$.$getGrouping$($DvtNBoxAutomation$$)) {
          for ($DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxCategoryRolloverHandler$$.length;$DvtNBoxDrawer$$++) {
            if ($DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDrawer$$] instanceof $DvtNBoxCategoryNode$$) {
              for (var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDrawer$$].getData().nodeIndices, $DvtNBoxCell$$ = !0, $DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxNodeOverflow$$++) {
                var $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$]);
                if (!$DvtNBoxKeyboardHandler$$[$DvtNBoxNode$$[$dvt$$6$$.$NBoxConstants$.ID]]) {
                  $DvtNBoxCell$$ = !1;
                  break;
                }
              }
              if ($DvtNBoxCell$$ && ($DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxAutomation$$), !$DvtNBoxCell$$ || $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.ID] !== $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDrawer$$].getId())) {
                for ($DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxNodeOverflow$$++) {
                  $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$]), $DvtNBoxKeyboardHandler$$[$DvtNBoxNode$$[$dvt$$6$$.$NBoxConstants$.ID]] = !1;
                }
                $DvtNBoxEventManager$$.push($DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDrawer$$].getId());
              }
            }
          }
        }
        for (var $DvtNBoxCategoryNodeRenderer$$ in $DvtNBoxKeyboardHandler$$) {
          $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryNodeRenderer$$] && $DvtNBoxEventManager$$.push($DvtNBoxCategoryNodeRenderer$$);
        }
      }
      $DvtNBoxAutomation$$.$getSelectionHandler$().$processInitialSelections$($DvtNBoxEventManager$$, $DvtNBoxCategoryRolloverHandler$$);
    }
  };
  $DvtNBoxRenderer$$.$_forceLayoutGroups$ = function $$DvtNBoxRenderer$$$$_forceLayoutGroups$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = [], $DvtNBoxDrawer$$;
    for ($DvtNBoxDrawer$$ in $DvtNBoxAutomation$$) {
      $DvtNBoxDataAnimationHandler$$.push($DvtNBoxDrawer$$);
    }
    $DvtNBoxDataAnimationHandler$$.sort(function($dvt$$6$$, $DvtNBoxKeyboardHandler$$) {
      return $DvtNBoxCategoryNode$$.$compareSize$($DvtNBoxAutomation$$[$dvt$$6$$], $DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$]);
    });
    for (var $DvtNBoxCategoryRolloverHandler$$ = {}, $DvtNBoxCell$$ = 2 * Math.PI / $DvtNBoxDataAnimationHandler$$.length, $DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxNodeOverflow$$++) {
      $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$]] = $dvt$$6$$.$VectorUtils$.$createVector$($DvtNBoxNodeOverflow$$ * Math.cos($DvtNBoxCell$$ * $DvtNBoxNodeOverflow$$), $DvtNBoxNodeOverflow$$ * Math.sin($DvtNBoxCell$$ * $DvtNBoxNodeOverflow$$));
    }
    for (var $DvtNBoxCell$$ = 1, $DvtNBoxNode$$ = -.25 * $DvtNBoxEventManager$$ / Math.max($DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$), $DvtNBoxCategoryNodeRenderer$$ = -.25 * $DvtNBoxKeyboardHandler$$ / Math.max($DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);.005 < $DvtNBoxCell$$;) {
      for (var $DvtNBoxRenderer$$ = {}, $DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxNodeOverflow$$++) {
        var $DvtNBoxDefaults$$ = $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$];
        $DvtNBoxDrawer$$ = $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDefaults$$];
        var $DvtNBoxDataUtils$$ = $DvtNBoxAutomation$$[$DvtNBoxDefaults$$].nodeIndices.length;
        $DvtNBoxRenderer$$[$DvtNBoxDefaults$$] = $dvt$$6$$.$VectorUtils$.$createVector$($DvtNBoxCell$$ * $DvtNBoxNode$$ * $DvtNBoxDrawer$$.x, $DvtNBoxCell$$ * $DvtNBoxCategoryNodeRenderer$$ * $DvtNBoxDrawer$$.y);
        for (var $DvtNBoxCellRenderer$$ = 0;$DvtNBoxCellRenderer$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxCellRenderer$$++) {
          if ($DvtNBoxNodeOverflow$$ != $DvtNBoxCellRenderer$$) {
            for (var $DvtNBoxDrawerRenderer$$ = $DvtNBoxDataAnimationHandler$$[$DvtNBoxCellRenderer$$], $DvtNBoxNodeRenderer$$ = $DvtNBoxAutomation$$[$DvtNBoxDrawerRenderer$$].nodeIndices.length, $DvtNBoxDrawerRenderer$$ = $dvt$$6$$.$VectorUtils$.$subtractVectors$($DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDrawerRenderer$$]), $DvtNBoxStyleUtils$$ = $dvt$$6$$.$VectorUtils$.$getMagnitude$($DvtNBoxDrawerRenderer$$), $angle$$35_minimumDistance$$ = Math.atan2($DvtNBoxDrawerRenderer$$.y, 
            $DvtNBoxDrawerRenderer$$.x);0 > $angle$$35_minimumDistance$$;) {
              $angle$$35_minimumDistance$$ += Math.PI / 2;
            }
            for (;$angle$$35_minimumDistance$$ >= Math.PI / 2;) {
              $angle$$35_minimumDistance$$ -= Math.PI / 2;
            }
            $angle$$35_minimumDistance$$ = $angle$$35_minimumDistance$$ < Math.PI / 4 ? .5 * (Math.sqrt($DvtNBoxDataUtils$$) + Math.sqrt($DvtNBoxNodeRenderer$$)) / Math.cos($angle$$35_minimumDistance$$) : .5 * (Math.sqrt($DvtNBoxDataUtils$$) + Math.sqrt($DvtNBoxNodeRenderer$$)) / Math.sin($angle$$35_minimumDistance$$);
            $DvtNBoxStyleUtils$$ < $angle$$35_minimumDistance$$ && ($DvtNBoxRenderer$$[$DvtNBoxDefaults$$] = $dvt$$6$$.$VectorUtils$.$addVectors$($DvtNBoxRenderer$$[$DvtNBoxDefaults$$], $dvt$$6$$.$VectorUtils$.$scaleVector$($DvtNBoxDrawerRenderer$$, ($angle$$35_minimumDistance$$ - $DvtNBoxStyleUtils$$) / $DvtNBoxStyleUtils$$ * ($DvtNBoxNodeRenderer$$ / ($DvtNBoxDataUtils$$ + $DvtNBoxNodeRenderer$$)) * (1 - $DvtNBoxCell$$))));
          }
        }
      }
      for ($DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxNodeOverflow$$++) {
        $DvtNBoxDefaults$$ = $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$], $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDefaults$$] = $dvt$$6$$.$VectorUtils$.$addVectors$($DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDefaults$$], $DvtNBoxRenderer$$[$DvtNBoxDefaults$$]);
      }
      $DvtNBoxCell$$ *= .98;
    }
    $DvtNBoxCell$$ = Number.MAX_VALUE;
    $DvtNBoxNode$$ = -Number.MAX_VALUE;
    $DvtNBoxCategoryNodeRenderer$$ = Number.MAX_VALUE;
    $DvtNBoxRenderer$$ = -Number.MAX_VALUE;
    for ($DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxNodeOverflow$$++) {
      $DvtNBoxDrawer$$ = $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$], $DvtNBoxDefaults$$ = Math.sqrt($DvtNBoxAutomation$$[$DvtNBoxDrawer$$].nodeIndices.length), $DvtNBoxDrawer$$ = $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDrawer$$], $DvtNBoxCell$$ = Math.min($DvtNBoxCell$$, $DvtNBoxDrawer$$.x - $DvtNBoxDefaults$$ / 2), $DvtNBoxNode$$ = Math.max($DvtNBoxNode$$, $DvtNBoxDrawer$$.x + $DvtNBoxDefaults$$ / 2), $DvtNBoxCategoryNodeRenderer$$ = Math.min($DvtNBoxCategoryNodeRenderer$$, $DvtNBoxDrawer$$.y - 
      $DvtNBoxDefaults$$ / 2), $DvtNBoxRenderer$$ = Math.max($DvtNBoxRenderer$$, $DvtNBoxDrawer$$.y + $DvtNBoxDefaults$$ / 2);
    }
    return {scale:Math.min($DvtNBoxKeyboardHandler$$ / ($DvtNBoxNode$$ - $DvtNBoxCell$$), $DvtNBoxEventManager$$ / ($DvtNBoxRenderer$$ - $DvtNBoxCategoryNodeRenderer$$)), center:new $dvt$$6$$.$Point$(($DvtNBoxCell$$ + $DvtNBoxNode$$) / 2, ($DvtNBoxCategoryNodeRenderer$$ + $DvtNBoxRenderer$$) / 2), positions:$DvtNBoxCategoryRolloverHandler$$};
  };
  $DvtNBoxRenderer$$.$_processOtherThreshold$ = function $$DvtNBoxRenderer$$$$_processOtherThreshold$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getOtherThreshold$($DvtNBoxAutomation$$) * $DvtNBoxEventManager$$;
    if (1 >= $DvtNBoxEventManager$$) {
      return $DvtNBoxKeyboardHandler$$;
    }
    var $DvtNBoxDataAnimationHandler$$ = {}, $DvtNBoxDrawer$$ = {};
    if ($DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$) == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      for (var $DvtNBoxCategoryRolloverHandler$$ in $DvtNBoxKeyboardHandler$$) {
        var $DvtNBoxCategoryNode$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$];
        $DvtNBoxDrawer$$.cell = $DvtNBoxCategoryNode$$.cell;
        break;
      }
    }
    $DvtNBoxDrawer$$.id = "other";
    $DvtNBoxDrawer$$.nodeIndices = [];
    $DvtNBoxDrawer$$.otherNode = !0;
    for ($DvtNBoxCategoryRolloverHandler$$ in $DvtNBoxKeyboardHandler$$) {
      if ($DvtNBoxCategoryNode$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$], $DvtNBoxCategoryNode$$.nodeIndices.length < $DvtNBoxEventManager$$) {
        for (var $DvtNBoxCell$$ = 0;$DvtNBoxCell$$ < $DvtNBoxCategoryNode$$.nodeIndices.length;$DvtNBoxCell$$++) {
          $DvtNBoxDrawer$$.nodeIndices.push($DvtNBoxCategoryNode$$.nodeIndices[$DvtNBoxCell$$]);
        }
      } else {
        $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryRolloverHandler$$] = $DvtNBoxCategoryNode$$;
      }
    }
    0 < $DvtNBoxDrawer$$.nodeIndices.length && ($DvtNBoxDataAnimationHandler$$.other = $DvtNBoxDrawer$$);
    return $DvtNBoxDataAnimationHandler$$;
  };
  $DvtNBoxRenderer$$.$_renderDrawer$ = function $$DvtNBoxRenderer$$$$_renderDrawer$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxAutomation$$);
    $DvtNBoxDataAnimationHandler$$ && ($DvtNBoxDataUtils$$.$getCategoryNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$.id) ? $DvtNBoxDrawer$$.newInstance($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$).$render$($DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) : ($DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$DRAWER$] = null, $DvtNBoxKeyboardHandler$$ = $dvt$$6$$.$EventFactory$.$newAdfPropertyChangeEvent$($dvt$$6$$.$NBoxConstants$.$DRAWER$, null), $DvtNBoxAutomation$$.$processEvent$($DvtNBoxKeyboardHandler$$)));
  };
  $DvtNBoxRenderer$$.$getGlobalMatrix$ = function $$DvtNBoxRenderer$$$$getGlobalMatrix$$($dvt$$6$$) {
    var $DvtNBoxAutomation$$ = $dvt$$6$$.$getMatrix$().clone();
    for ($dvt$$6$$ = $dvt$$6$$.getParent();$dvt$$6$$;) {
      var $DvtNBoxKeyboardHandler$$ = $dvt$$6$$.$getMatrix$();
      $DvtNBoxAutomation$$.translate($DvtNBoxKeyboardHandler$$.$_tx$, $DvtNBoxKeyboardHandler$$.$_ty$);
      $dvt$$6$$ = $dvt$$6$$.getParent();
    }
    return $DvtNBoxAutomation$$;
  };
  $DvtNBoxRenderer$$.$animateUpdate$ = function $$DvtNBoxRenderer$$$$animateUpdate$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    $DvtNBoxRenderer$$.$_animateCells$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$_animateNodes$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxAutomation$$), $DvtNBoxEventManager$$ = $DvtNBoxEventManager$$ ? $DvtNBoxEventManager$$.id : null, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxKeyboardHandler$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataAnimationHandler$$ ? $DvtNBoxDataAnimationHandler$$.id : null;
    $DvtNBoxEventManager$$ != $DvtNBoxDataAnimationHandler$$ && $DvtNBoxRenderer$$.$_animateDrawer$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
  };
  $DvtNBoxRenderer$$.$_animateCells$ = function $$DvtNBoxRenderer$$$$_animateCells$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    for (var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxKeyboardHandler$$), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxEventManager$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxKeyboardHandler$$), $DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxEventManager$$), $DvtNBoxCell$$ = $DvtNBoxDataAnimationHandler$$ * $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxNodeOverflow$$ = $DvtNBoxDrawer$$ * 
    $DvtNBoxCategoryNode$$, $DvtNBoxNode$$ = [], $DvtNBoxCategoryNodeRenderer$$ = [], $DvtNBoxRenderer$$ = 0;$DvtNBoxRenderer$$ < $DvtNBoxCell$$;$DvtNBoxRenderer$$++) {
      $DvtNBoxNode$$.push($DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxDataUtils$$.$getCell$($DvtNBoxKeyboardHandler$$, $DvtNBoxRenderer$$)));
    }
    for ($DvtNBoxRenderer$$ = 0;$DvtNBoxRenderer$$ < $DvtNBoxNodeOverflow$$;$DvtNBoxRenderer$$++) {
      $DvtNBoxCategoryNodeRenderer$$.push($DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxEventManager$$, $DvtNBoxDataUtils$$.$getCell$($DvtNBoxEventManager$$, $DvtNBoxRenderer$$)));
    }
    if ($DvtNBoxDataAnimationHandler$$ == $DvtNBoxDrawer$$ && $DvtNBoxCategoryRolloverHandler$$ == $DvtNBoxCategoryNode$$) {
      $DvtNBoxDataAnimationHandler$$ = !0;
      for ($DvtNBoxRenderer$$ = 0;$DvtNBoxRenderer$$ < $DvtNBoxDrawer$$;$DvtNBoxRenderer$$++) {
        if ($DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getRow$($DvtNBoxKeyboardHandler$$, $DvtNBoxRenderer$$)[$dvt$$6$$.$NBoxConstants$.ID], $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getRow$($DvtNBoxEventManager$$, $DvtNBoxRenderer$$)[$dvt$$6$$.$NBoxConstants$.ID], $DvtNBoxCategoryRolloverHandler$$ != $DvtNBoxCell$$) {
          $DvtNBoxDataAnimationHandler$$ = !1;
          break;
        }
      }
      if ($DvtNBoxDataAnimationHandler$$) {
        for ($DvtNBoxRenderer$$ = 0;$DvtNBoxRenderer$$ < $DvtNBoxCategoryNode$$;$DvtNBoxRenderer$$++) {
          if ($DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getColumn$($DvtNBoxKeyboardHandler$$, $DvtNBoxRenderer$$)[$dvt$$6$$.$NBoxConstants$.ID], $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getColumn$($DvtNBoxEventManager$$, $DvtNBoxRenderer$$)[$dvt$$6$$.$NBoxConstants$.ID], $DvtNBoxDrawer$$ != $DvtNBoxCategoryRolloverHandler$$) {
            $DvtNBoxDataAnimationHandler$$ = !1;
            break;
          }
        }
      }
      if ($DvtNBoxDataAnimationHandler$$) {
        $DvtNBoxAutomation$$.$constructAnimation$($DvtNBoxNode$$, $DvtNBoxCategoryNodeRenderer$$);
        return;
      }
    }
    $DvtNBoxAutomation$$.$constructAnimation$($DvtNBoxNode$$, []);
    $DvtNBoxAutomation$$.$constructAnimation$([], $DvtNBoxCategoryNodeRenderer$$);
  };
  $DvtNBoxRenderer$$.$_animateNodes$ = function $$DvtNBoxRenderer$$$$_animateNodes$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    for (var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxKeyboardHandler$$), $DvtNBoxDrawer$$ = [], $DvtNBoxCategoryRolloverHandler$$ = [], $DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxEventManager$$;$DvtNBoxCategoryNode$$++) {
      $DvtNBoxDrawer$$.push($DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxCategoryNode$$)));
    }
    for ($DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxDataAnimationHandler$$;$DvtNBoxCategoryNode$$++) {
      $DvtNBoxCategoryRolloverHandler$$.push($DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxDataUtils$$.$getNode$($DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryNode$$)));
    }
    $dvt$$6$$.$constructAnimation$($DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$);
    $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxAutomation$$);
    $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxKeyboardHandler$$) || ($DvtNBoxDataAnimationHandler$$ = $DvtNBoxRenderer$$.$_getSortedGroups$($DvtNBoxAutomation$$), $DvtNBoxDrawer$$ = $DvtNBoxRenderer$$.$_getSortedGroups$($DvtNBoxKeyboardHandler$$), $DvtNBoxEventManager$$ && ($DvtNBoxDataUtils$$.$getMaximizedCellIndex$($DvtNBoxAutomation$$) != $DvtNBoxDataUtils$$.$getMaximizedCellIndex$($DvtNBoxKeyboardHandler$$) ? ($DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataAnimationHandler$$.filter(function($dvt$$6$$) {
      return $dvt$$6$$.getData().cell != $DvtNBoxDataUtils$$.$getMaximizedCellIndex$($DvtNBoxAutomation$$);
    }), $DvtNBoxDrawer$$ = $DvtNBoxDrawer$$.filter(function($dvt$$6$$) {
      return $dvt$$6$$.getData().cell != $DvtNBoxDataUtils$$.$getMaximizedCellIndex$($DvtNBoxAutomation$$);
    })) : $DvtNBoxDrawer$$ = $DvtNBoxDataAnimationHandler$$ = null), $dvt$$6$$.$constructAnimation$($DvtNBoxDataAnimationHandler$$, $DvtNBoxDrawer$$));
  };
  $DvtNBoxRenderer$$.$_getSortedGroups$ = function $$DvtNBoxRenderer$$$$_getSortedGroups$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$), $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$().__groups, $DvtNBoxDataAnimationHandler$$ = [];
    if ($DvtNBoxEventManager$$) {
      if ($DvtNBoxKeyboardHandler$$ == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
        for (var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $DvtNBoxKeyboardHandler$$ = $DvtNBoxKeyboardHandler$$ * $DvtNBoxDrawer$$, $DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxKeyboardHandler$$;$DvtNBoxDrawer$$++) {
          for (var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$[$DvtNBoxDrawer$$ + ""]), $DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxCategoryRolloverHandler$$.length;$DvtNBoxCategoryNode$$++) {
            $DvtNBoxDataAnimationHandler$$.push($DvtNBoxCategoryRolloverHandler$$[$DvtNBoxCategoryNode$$]);
          }
        }
      } else {
        $DvtNBoxDataAnimationHandler$$ = $DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$);
      }
    }
    return $DvtNBoxDataAnimationHandler$$;
  };
  $DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$ = function $$DvtNBoxRenderer$$$$_getSortedGroupsFromContainer$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = [], $DvtNBoxEventManager$$;
    for ($DvtNBoxEventManager$$ in $DvtNBoxAutomation$$) {
      var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($dvt$$6$$, $DvtNBoxAutomation$$[$DvtNBoxEventManager$$]);
      $DvtNBoxDataAnimationHandler$$ && $DvtNBoxKeyboardHandler$$.push($DvtNBoxDataAnimationHandler$$);
    }
    $DvtNBoxKeyboardHandler$$.sort(function($dvt$$6$$, $DvtNBoxAutomation$$) {
      var $DvtNBoxKeyboardHandler$$ = $dvt$$6$$.getId(), $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.getId();
      return $DvtNBoxKeyboardHandler$$ == $DvtNBoxEventManager$$ ? 0 : $DvtNBoxKeyboardHandler$$ < $DvtNBoxEventManager$$ ? -1 : 1;
    });
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxRenderer$$.$_animateDrawer$ = function $$DvtNBoxRenderer$$$$_animateDrawer$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxAutomation$$), $DvtNBoxEventManager$$ = $DvtNBoxEventManager$$ ? [$DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$)] : null;
    $DvtNBoxAutomation$$ = ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxKeyboardHandler$$)) ? [$DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$)] : [];
    $dvt$$6$$.$constructAnimation$($DvtNBoxEventManager$$, $DvtNBoxAutomation$$);
  };
  $DvtNBoxRenderer$$.$setFill$ = function $$DvtNBoxRenderer$$$$setFill$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if (0 == $DvtNBoxKeyboardHandler$$.indexOf("linear-gradient")) {
      var $DvtNBoxEventManager$$ = $dvt$$6$$.$GradientParser$.$parseCSSGradient$($DvtNBoxKeyboardHandler$$);
      $DvtNBoxEventManager$$ && $DvtNBoxAutomation$$.$setFill$(new $dvt$$6$$.$LinearGradientFill$($DvtNBoxEventManager$$.$getAngle$(), $DvtNBoxEventManager$$.$_arColors$, $DvtNBoxEventManager$$.$_arAlphas$, $DvtNBoxEventManager$$.$_arRatios$));
    } else {
      $DvtNBoxAutomation$$.$setSolidFill$($DvtNBoxKeyboardHandler$$);
    }
  };
  $DvtNBoxRenderer$$.$_fixZOrder$ = function $$DvtNBoxRenderer$$$$_fixZOrder$$($dvt$$6$$) {
    var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getLegend$($dvt$$6$$);
    $DvtNBoxAutomation$$ && $DvtNBoxAutomation$$.sections && ($dvt$$6$$ = $DvtNBoxDataUtils$$.$getDisplayable$($dvt$$6$$, $DvtNBoxAutomation$$, "panelDrawer")) && $dvt$$6$$.getParent().$addChild$($dvt$$6$$);
  };
  $DvtNBoxRenderer$$.$getNodeOrderFunction$ = function $$DvtNBoxRenderer$$$$getNodeOrderFunction$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = [], $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxAutomation$$);
    if ($DvtNBoxEventManager$$) {
      for (var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$).$getChildContainer$().$_container$, $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxEventManager$$.$getNumChildren$();$DvtNBoxDataAnimationHandler$$++) {
        $DvtNBoxKeyboardHandler$$.push($DvtNBoxEventManager$$.$getChildAt$($DvtNBoxDataAnimationHandler$$));
      }
    } else {
      for ($DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$) * $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxEventManager$$;$DvtNBoxDataAnimationHandler$$++) {
        var $DvtNBoxDrawer$$ = [], $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxCategoryRolloverHandler$$).$getChildContainer$();
        $DvtNBoxCategoryRolloverHandler$$ instanceof $dvt$$6$$.$SimpleScrollableContainer$ && ($DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryRolloverHandler$$.$_container$);
        for (var $DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxCategoryRolloverHandler$$.$getNumChildren$();$DvtNBoxCategoryNode$$++) {
          $DvtNBoxDrawer$$.push($DvtNBoxCategoryRolloverHandler$$.$getChildAt$($DvtNBoxCategoryNode$$));
        }
        $DvtNBoxKeyboardHandler$$.push($DvtNBoxDrawer$$);
      }
    }
    return function() {
      if ($DvtNBoxKeyboardHandler$$.length) {
        if ($DvtNBoxKeyboardHandler$$[0] && isNaN($DvtNBoxKeyboardHandler$$[0].length)) {
          var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxAutomation$$);
          if ($DvtNBoxEventManager$$) {
            for (var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$).$getChildContainer$().$_container$, $DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxEventManager$$++) {
              $DvtNBoxDataAnimationHandler$$.$addChild$($DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$]);
            }
          }
        } else {
          for ($DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxDataAnimationHandler$$++) {
            var $DvtNBoxDrawer$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$], $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
            if ($DvtNBoxDrawer$$.length && $DvtNBoxEventManager$$) {
              var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$).$getChildContainer$();
              $DvtNBoxCategoryRolloverHandler$$ instanceof $dvt$$6$$.$SimpleScrollableContainer$ && ($DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryRolloverHandler$$.$_container$);
              for ($DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxDrawer$$.length;$DvtNBoxEventManager$$++) {
                $DvtNBoxCategoryRolloverHandler$$.$addChild$($DvtNBoxDrawer$$[$DvtNBoxEventManager$$]);
              }
            }
          }
        }
      }
    };
  };
  var $DvtNBoxCellRenderer$$ = {};
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxCellRenderer$$, $dvt$$6$$.$Obj$);
  $DvtNBoxCellRenderer$$.$render$ = function $$DvtNBoxCellRenderer$$$$render$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    var $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDrawer$$.__layout.cellGap, $DvtNBoxCategoryNode$$ = $DvtNBoxDrawer$$.__layout.cellStartGap, $DvtNBoxCell$$ = $DvtNBoxDrawer$$.__layout.cellEndGap, $DvtNBoxNodeOverflow$$ = $DvtNBoxDrawer$$.__layout.cellTopGap, $DvtNBoxDrawer$$ = $DvtNBoxDrawer$$.__layout.cellBottomGap, $DvtNBoxNode$$ = $DvtNBoxCellRenderer$$.$getCellLayout$($DvtNBoxAutomation$$), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, 
    $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$ROW$]), $DvtNBoxRenderer$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$COLUMN$]), $DvtNBoxDefaults$$ = $DvtNBoxCellRenderer$$.$getCellDimensions$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxRenderer$$, $DvtNBoxDataAnimationHandler$$);
    $DvtNBoxEventManager$$.$setTranslate$($DvtNBoxDefaults$$.x + $DvtNBoxCategoryRolloverHandler$$ / 2, $DvtNBoxDefaults$$.y + $DvtNBoxCategoryRolloverHandler$$ / 2);
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxCategoryNodeRenderer$$ * $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$) + $DvtNBoxRenderer$$;
    $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$6$$.Rect($DvtNBoxAutomation$$.$getCtx$(), 0, 0, Math.max($DvtNBoxDefaults$$.$w$ - $DvtNBoxCategoryRolloverHandler$$, 0), Math.max($DvtNBoxDefaults$$.$h$ - $DvtNBoxCategoryRolloverHandler$$, 0));
    $DvtNBoxCategoryRolloverHandler$$.$setPixelHinting$();
    $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxStyleUtils$$.$getCellStyle$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
    $DvtNBoxCellRenderer$$.$_applyStyleToRect$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCategoryNodeRenderer$$);
    $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxStyleUtils$$.$getCellStyleObject$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
    $DvtNBoxCategoryRolloverHandler$$.$setStyle$($DvtNBoxCategoryNodeRenderer$$);
    $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxStyleUtils$$.$getCellClassName$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
    $DvtNBoxCategoryRolloverHandler$$.$setClassName$($DvtNBoxCategoryNodeRenderer$$);
    $DvtNBoxEventManager$$.$addChild$($DvtNBoxCategoryRolloverHandler$$);
    $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryRolloverHandler$$, "background");
    $DvtNBoxCategoryNodeRenderer$$ = new $dvt$$6$$.$KeyboardFocusEffect$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxEventManager$$, new $dvt$$6$$.$Rectangle$(-1, -1, $DvtNBoxCategoryRolloverHandler$$.getWidth() + 2, $DvtNBoxCategoryRolloverHandler$$.getHeight() + 2));
    $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryNodeRenderer$$, "focusEffect");
    $DvtNBoxCellRenderer$$.$renderHeader$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, !1);
    $DvtNBoxDataAnimationHandler$$ = ($DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$isCellMaximized$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$)) ? $DvtNBoxNode$$.maximizedHeaderSize : $DvtNBoxNode$$.headerSize;
    $DvtNBoxNode$$ = $DvtNBoxCategoryNodeRenderer$$ ? $DvtNBoxNode$$.maximizedLabelHeight : $DvtNBoxNode$$.labelHeight;
    $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxCategoryNodeRenderer$$ ? new $dvt$$6$$.$SimpleScrollableContainer$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCategoryRolloverHandler$$.getWidth(), $DvtNBoxCategoryRolloverHandler$$.getHeight() - $DvtNBoxDataAnimationHandler$$) : new $dvt$$6$$.$Container$($DvtNBoxAutomation$$.$getCtx$());
    $DvtNBoxEventManager$$.$addChild$($DvtNBoxCategoryNodeRenderer$$);
    $DvtNBoxEventManager$$.$setChildContainer$($DvtNBoxCategoryNodeRenderer$$);
    $DvtNBoxEventManager$$ = null;
    $DvtNBoxNode$$ ? ($DvtNBoxEventManager$$ = $DvtNBoxCellRenderer$$.$_isLabelVertical$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) ? new $dvt$$6$$.$Rectangle$($DvtNBoxDataAnimationHandler$$, $DvtNBoxNodeOverflow$$, $DvtNBoxCategoryRolloverHandler$$.getWidth() - $DvtNBoxDataAnimationHandler$$ - $DvtNBoxCell$$, $DvtNBoxCategoryRolloverHandler$$.getHeight() - $DvtNBoxNodeOverflow$$ - $DvtNBoxDrawer$$) : new $dvt$$6$$.$Rectangle$($DvtNBoxCategoryNode$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxCategoryRolloverHandler$$.getWidth() - 
    $DvtNBoxCategoryNode$$ - $DvtNBoxCell$$, $DvtNBoxCategoryRolloverHandler$$.getHeight() - $DvtNBoxDataAnimationHandler$$ - $DvtNBoxDrawer$$), $DvtNBoxCategoryNodeRenderer$$ instanceof $dvt$$6$$.$SimpleScrollableContainer$ && $DvtNBoxCategoryNodeRenderer$$.$setTranslate$(0, $DvtNBoxDataAnimationHandler$$)) : $DvtNBoxEventManager$$ = new $dvt$$6$$.$Rectangle$($DvtNBoxCategoryNode$$, $DvtNBoxNodeOverflow$$, $DvtNBoxCategoryRolloverHandler$$.getWidth() - $DvtNBoxCategoryNode$$ - $DvtNBoxCell$$, $DvtNBoxCategoryRolloverHandler$$.getHeight() - 
    $DvtNBoxNodeOverflow$$ - $DvtNBoxDrawer$$);
    $DvtNBoxEventManager$$.$w$ = Math.max($DvtNBoxEventManager$$.$w$, 0);
    $DvtNBoxEventManager$$.$h$ = Math.max($DvtNBoxEventManager$$.$h$, 0);
    $DvtNBoxKeyboardHandler$$.__childArea = $DvtNBoxEventManager$$;
  };
  $DvtNBoxCellRenderer$$.$renderHeader$ = function $$DvtNBoxCellRenderer$$$$renderHeader$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    var $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $dvt$$6$$.$NBoxConstants$.$LABEL$);
    $DvtNBoxDrawer$$ && ($DvtNBoxDrawer$$.getParent().removeChild($DvtNBoxDrawer$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, null, $dvt$$6$$.$NBoxConstants$.$LABEL$));
    if ($DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, "countLabel")) {
      $DvtNBoxDrawer$$.getParent().removeChild($DvtNBoxDrawer$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, null, "countLabel");
    }
    if ($DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, "closeButton")) {
      $DvtNBoxDrawer$$.getParent().removeChild($DvtNBoxDrawer$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, null, "closeButton");
    }
    if ($DvtNBoxKeyboardHandler$$) {
      var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxDrawer$$ = $DvtNBoxCategoryRolloverHandler$$.__layout.countLabelGap, $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryRolloverHandler$$.__layout.cellCloseGap, $DvtNBoxCell$$ = $DvtNBoxCategoryRolloverHandler$$.__layout.cellStartGap, $DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryRolloverHandler$$.__layout.cellEndGap, $DvtNBoxNode$$ = $DvtNBoxCategoryRolloverHandler$$.__layout.cellTopGap, $DvtNBoxCategoryNodeRenderer$$ = 
      $DvtNBoxCellRenderer$$.$getCellLayout$($DvtNBoxAutomation$$), $DvtNBoxDefaults$$ = $DvtNBoxRenderer$$.$getCellCounts$($DvtNBoxAutomation$$), $DvtNBoxDrawerRenderer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, "background"), $DvtNBoxNodeRenderer$$ = $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$ROW$]), $c$$25_cellIndex$$7$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$COLUMN$]), 
      $c$$25_cellIndex$$7$$ = $DvtNBoxNodeRenderer$$ * $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$) + $c$$25_cellIndex$$7$$, $DvtNBoxNodeRenderer$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$ = 0;
      if ($DvtNBoxDataUtils$$.$isCellMaximized$($DvtNBoxAutomation$$, $c$$25_cellIndex$$7$$)) {
        var $closeEna_closeEnaImg_countLabelY$$ = $DvtNBoxCategoryRolloverHandler$$._resources.close_ena, $closeWidth_halign$$14$$ = $closeEna_closeEnaImg_countLabelY$$.width;
        $DvtNBoxDrawerRenderer$$.getWidth() - $DvtNBoxCell$$ - $DvtNBoxNodeOverflow$$ > $closeWidth_halign$$14$$ && ($cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$ = $DvtNBoxCategoryRolloverHandler$$._resources.close_ovr, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryRolloverHandler$$._resources.close_dwn, $closeEna_closeEnaImg_countLabelY$$ = new $dvt$$6$$.Image($DvtNBoxAutomation$$.$getCtx$(), $closeEna_closeEnaImg_countLabelY$$.src, 0, 0, $closeEna_closeEnaImg_countLabelY$$.width, 
        $closeEna_closeEnaImg_countLabelY$$.height), $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$ = new $dvt$$6$$.Image($DvtNBoxAutomation$$.$getCtx$(), $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$.src, 0, 0, $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$.width, $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$.height), $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$6$$.Image($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCategoryRolloverHandler$$.src, 0, 
        0, $DvtNBoxCategoryRolloverHandler$$.width, $DvtNBoxCategoryRolloverHandler$$.height), $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$6$$.$Button$($DvtNBoxAutomation$$.$getCtx$(), $closeEna_closeEnaImg_countLabelY$$, $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$, $DvtNBoxCategoryRolloverHandler$$, null, null, $DvtNBoxEventManager$$.$handleDoubleClick$, $DvtNBoxEventManager$$), $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$ = $DvtNBoxNodeRenderer$$ ? Math.min(($DvtNBoxDrawerRenderer$$.getWidth() - 
        $closeWidth_halign$$14$$) / 2, $DvtNBoxNodeOverflow$$) : Math.max(($DvtNBoxDrawerRenderer$$.getWidth() - $closeWidth_halign$$14$$) / 2, $DvtNBoxDrawerRenderer$$.getWidth() - $DvtNBoxNodeOverflow$$ - $closeWidth_halign$$14$$), $DvtNBoxCategoryRolloverHandler$$.$setTranslate$($cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$, $DvtNBoxNode$$), $DvtNBoxEventManager$$.$addChild$($DvtNBoxCategoryRolloverHandler$$), $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$ = $closeWidth_halign$$14$$ + 
        $DvtNBoxCategoryNode$$, $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryRolloverHandler$$, "closeButton"));
      }
      if ($DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$LABEL$]) {
        var $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryNodeRenderer$$.labelHeight, $skipLabel$$ = !1, $closeWidth_halign$$14$$ = $DvtNBoxStyleUtils$$.$getLabelHalign$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $countLabelWidthWithGap$$ = $DvtNBoxCategoryRolloverHandler$$ = 0, $DvtNBoxCategoryNodeRenderer$$ = null, $closeEna_closeEnaImg_countLabelY$$ = $DvtNBoxCategoryRolloverHandler$$ = 0, $countText$$ = null, $showCount$$ = $DvtNBoxStyleUtils$$.$getCellShowCount$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
        $DvtNBoxDataAnimationHandler$$ || "off" == $showCount$$ || (($DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$).$getCountLabel$()) ? $countText$$ = $DvtNBoxDataAnimationHandler$$ : "on" == $showCount$$ && ($countText$$ = "" + $DvtNBoxDefaults$$.total[$c$$25_cellIndex$$7$$], $DvtNBoxDefaults$$.highlighted && ($countText$$ = $dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$NBOX_PREFIX$, "HIGHLIGHTED_COUNT", [$DvtNBoxDefaults$$.highlighted[$c$$25_cellIndex$$7$$], 
        $countText$$]))));
        $DvtNBoxCellRenderer$$.$_isLabelVertical$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) ? ($countText$$ && ($DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $countText$$, $DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($DvtNBoxAutomation$$), $dvt$$6$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$), $dvt$$6$$.$TextUtils$.$fitText$($DvtNBoxCategoryNodeRenderer$$, $DvtNBoxDrawerRenderer$$.getHeight() - $DvtNBoxCell$$ - 
        $DvtNBoxNodeOverflow$$, $DvtNBoxDrawerRenderer$$.getWidth() - 2 * $DvtNBoxNode$$, $DvtNBoxEventManager$$) ? ($DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryNodeRenderer$$, "countLabel"), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryNodeRenderer$$.$getDimensions$().$w$, $countLabelWidthWithGap$$ = $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxDrawer$$, $closeEna_closeEnaImg_countLabelY$$ = $DvtNBoxDrawerRenderer$$.getHeight() / 2, 
        $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxNode$$ + $DvtNBoxCategoryNode$$ / 2) : $skipLabel$$ = !0), $DvtNBoxDataAnimationHandler$$ = 0, $skipLabel$$ || ($DvtNBoxDefaults$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getCellLabelStyle$($DvtNBoxAutomation$$, $c$$25_cellIndex$$7$$), $dvt$$6$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$), $dvt$$6$$.$TextUtils$.$fitText$($DvtNBoxDefaults$$, 
        $DvtNBoxDrawerRenderer$$.getHeight() - $DvtNBoxCell$$ - $DvtNBoxNodeOverflow$$ - $countLabelWidthWithGap$$, $DvtNBoxDrawerRenderer$$.getWidth() - 2 * $DvtNBoxNode$$, $DvtNBoxEventManager$$) && ($DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDefaults$$, $dvt$$6$$.$NBoxConstants$.$LABEL$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDefaults$$.$getDimensions$().$w$, $DvtNBoxRenderer$$.$positionText$($DvtNBoxDefaults$$, $DvtNBoxNode$$ + $DvtNBoxCategoryNode$$ / 
        2, ($DvtNBoxDrawerRenderer$$.getHeight() + $countLabelWidthWithGap$$) / 2, $DvtNBoxNodeRenderer$$ ? Math.PI / 2 : -Math.PI / 2), $DvtNBoxDataAnimationHandler$$ = ($DvtNBoxDataAnimationHandler$$ + $DvtNBoxDrawer$$) / 2)), $DvtNBoxCategoryNodeRenderer$$ && $DvtNBoxRenderer$$.$positionText$($DvtNBoxCategoryNodeRenderer$$, $DvtNBoxCategoryRolloverHandler$$, $closeEna_closeEnaImg_countLabelY$$ - $DvtNBoxDataAnimationHandler$$, $DvtNBoxNodeRenderer$$ ? Math.PI / 2 : -Math.PI / 2)) : ($countText$$ && 
        ($DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $countText$$, $DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($DvtNBoxAutomation$$), $closeWidth_halign$$14$$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$), $dvt$$6$$.$TextUtils$.$fitText$($DvtNBoxCategoryNodeRenderer$$, $DvtNBoxDrawerRenderer$$.getWidth() - $DvtNBoxCell$$ - $DvtNBoxNodeOverflow$$ - $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$, $DvtNBoxDrawerRenderer$$.getHeight() - 
        2 * $DvtNBoxNode$$, $DvtNBoxEventManager$$) ? ($DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryNodeRenderer$$, "countLabel"), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryNodeRenderer$$.$getDimensions$().$w$, $countLabelWidthWithGap$$ = $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$ = $closeWidth_halign$$14$$ == $dvt$$6$$.$OutputText$.$H_ALIGN_CENTER$ ? $DvtNBoxDrawerRenderer$$.getWidth() / 
        2 : $closeWidth_halign$$14$$ == $dvt$$6$$.$OutputText$.$H_ALIGN_RIGHT$ ? $DvtNBoxDrawerRenderer$$.getWidth() - $DvtNBoxNodeOverflow$$ : $DvtNBoxCell$$, $closeEna_closeEnaImg_countLabelY$$ = $DvtNBoxNode$$ + $DvtNBoxCategoryNode$$ / 2, $DvtNBoxRenderer$$.$positionText$($DvtNBoxCategoryNodeRenderer$$, $DvtNBoxCategoryRolloverHandler$$, $closeEna_closeEnaImg_countLabelY$$)) : $skipLabel$$ = !0), $DvtNBoxDataAnimationHandler$$ = 0, $skipLabel$$ || ($DvtNBoxDefaults$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), 
        $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getCellLabelStyle$($DvtNBoxAutomation$$, $c$$25_cellIndex$$7$$), $closeWidth_halign$$14$$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$), $dvt$$6$$.$TextUtils$.$fitText$($DvtNBoxDefaults$$, $DvtNBoxDrawerRenderer$$.getWidth() - $DvtNBoxCell$$ - $DvtNBoxNodeOverflow$$ - $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$ - $countLabelWidthWithGap$$, $DvtNBoxDrawerRenderer$$.getHeight() - 2 * $DvtNBoxNode$$, 
        $DvtNBoxEventManager$$) && ($DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDefaults$$, $dvt$$6$$.$NBoxConstants$.$LABEL$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDefaults$$.$getDimensions$().$w$, $closeWidth_halign$$14$$ == $dvt$$6$$.$OutputText$.$H_ALIGN_CENTER$ ? ($DvtNBoxCell$$ = ($DvtNBoxDrawerRenderer$$.getWidth() - ($DvtNBoxNodeRenderer$$ ? -1 : 1) * $countLabelWidthWithGap$$) / 2, $DvtNBoxDataAnimationHandler$$ = ($DvtNBoxNodeRenderer$$ ? 
        -1 : 1) * ($DvtNBoxDataAnimationHandler$$ + $DvtNBoxDrawer$$) / 2) : $closeWidth_halign$$14$$ == $dvt$$6$$.$OutputText$.$H_ALIGN_RIGHT$ ? ($DvtNBoxCell$$ = $DvtNBoxDrawerRenderer$$.getWidth() - $DvtNBoxNodeOverflow$$ - ($DvtNBoxNodeRenderer$$ ? 0 : 1) * $countLabelWidthWithGap$$, $DvtNBoxDataAnimationHandler$$ = ($DvtNBoxNodeRenderer$$ ? -1 : 0) * ($DvtNBoxDataAnimationHandler$$ + $DvtNBoxDrawer$$)) : ($DvtNBoxCell$$ += ($DvtNBoxNodeRenderer$$ ? 1 : 0) * $countLabelWidthWithGap$$, $DvtNBoxDataAnimationHandler$$ = 
        ($DvtNBoxNodeRenderer$$ ? 0 : 1) * ($DvtNBoxDataAnimationHandler$$ + $DvtNBoxDrawer$$)), $DvtNBoxRenderer$$.$positionText$($DvtNBoxDefaults$$, $DvtNBoxCell$$, $DvtNBoxNode$$ + $DvtNBoxCategoryNode$$ / 2))), $DvtNBoxCategoryNodeRenderer$$ && $DvtNBoxDataAnimationHandler$$ && $DvtNBoxRenderer$$.$positionText$($DvtNBoxCategoryNodeRenderer$$, $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxDataAnimationHandler$$, $closeEna_closeEnaImg_countLabelY$$));
      }
    }
    $DvtNBoxCellRenderer$$.$_addAccessibilityAttributes$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
  };
  $DvtNBoxCellRenderer$$.$renderBodyCountLabels$ = function $$DvtNBoxCellRenderer$$$$renderBodyCountLabels$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$().__layout.cellTopGap, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$().__layout.cellStartGap, $DvtNBoxDrawer$$ = $DvtNBoxCellRenderer$$.$getCellLayout$($DvtNBoxAutomation$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxRenderer$$.$getCellCounts$($DvtNBoxAutomation$$), $DvtNBoxCategoryNode$$ = Number.MAX_VALUE, $DvtNBoxCell$$ = !1, $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[0]), 
    $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, $dvt$$6$$.$NBoxConstants$.$LABEL$), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, "countLabel"), $DvtNBoxDefaults$$ = $DvtNBoxNode$$ && $DvtNBoxNode$$.$getCSSStyle$() ? $DvtNBoxNode$$.$getCSSStyle$().$getFontSize$() : null, $DvtNBoxDrawerRenderer$$ = $DvtNBoxCategoryNodeRenderer$$ && $DvtNBoxCategoryNodeRenderer$$.$getCSSStyle$() ? 
    $DvtNBoxCategoryNodeRenderer$$.$getCSSStyle$().$getFontSize$() : null, $DvtNBoxDefaults$$ = isNaN($DvtNBoxDefaults$$) ? parseFloat($DvtNBoxDefaults$$) : $DvtNBoxDefaults$$, $DvtNBoxDrawerRenderer$$ = isNaN($DvtNBoxDrawerRenderer$$) ? parseFloat($DvtNBoxDrawerRenderer$$) : $DvtNBoxDrawerRenderer$$;
    isNaN($DvtNBoxDefaults$$) && isNaN($DvtNBoxDrawerRenderer$$) || ($DvtNBoxCategoryNode$$ = isNaN($DvtNBoxDefaults$$) ? $DvtNBoxDrawerRenderer$$ : isNaN($DvtNBoxDrawerRenderer$$) ? $DvtNBoxDefaults$$ : Math.max($DvtNBoxDefaults$$, $DvtNBoxDrawerRenderer$$));
    for (var $DvtNBoxDefaults$$ = [], $DvtNBoxDrawerRenderer$$ = [], $DvtNBoxNodeRenderer$$ = 0;$DvtNBoxNodeRenderer$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxNodeRenderer$$++) {
      $DvtNBoxNodeOverflow$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxNodeRenderer$$], $DvtNBoxDataUtils$$.$isCellMinimized$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$) ? $DvtNBoxDrawerRenderer$$.push($DvtNBoxNodeOverflow$$) : $DvtNBoxDefaults$$.push($DvtNBoxNodeOverflow$$);
    }
    for (var $maximizedLabels$$ = [], $minimizedLabels$$ = [], $DvtNBoxNodeRenderer$$ = 0;$DvtNBoxNodeRenderer$$ < $DvtNBoxDefaults$$.length;$DvtNBoxNodeRenderer$$++) {
      $DvtNBoxNodeOverflow$$ = $DvtNBoxDefaults$$[$DvtNBoxNodeRenderer$$], $DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryRolloverHandler$$.total[$DvtNBoxNodeOverflow$$], $maximizedLabels$$[$DvtNBoxNodeRenderer$$] = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), "" + $DvtNBoxNodeOverflow$$, $DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$($DvtNBoxAutomation$$), $dvt$$6$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$);
    }
    for ($DvtNBoxNodeRenderer$$ = 0;$DvtNBoxNodeRenderer$$ < $DvtNBoxDrawerRenderer$$.length;$DvtNBoxNodeRenderer$$++) {
      $DvtNBoxNodeOverflow$$ = $DvtNBoxDrawerRenderer$$[$DvtNBoxNodeRenderer$$], $DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryRolloverHandler$$.total[$DvtNBoxNodeOverflow$$], $minimizedLabels$$[$DvtNBoxNodeRenderer$$] = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), "" + $DvtNBoxNodeOverflow$$, $DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$($DvtNBoxAutomation$$), $dvt$$6$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$);
    }
    $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$, $maximizedLabels$$);
    if ($DvtNBoxCategoryRolloverHandler$$ <= $DvtNBoxCategoryNode$$ || $DvtNBoxCategoryNodeRenderer$$ && !$DvtNBoxNode$$) {
      $DvtNBoxCell$$ = !0;
    }
    var $minimizedFontSize$$ = $DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($DvtNBoxAutomation$$, $DvtNBoxDrawerRenderer$$, $minimizedLabels$$);
    if ($minimizedFontSize$$ <= $DvtNBoxCategoryNode$$ || $DvtNBoxCategoryNodeRenderer$$ && !$DvtNBoxNode$$) {
      $DvtNBoxCell$$ = !0;
    }
    if ($DvtNBoxCell$$) {
      for ($DvtNBoxNodeRenderer$$ = 0;$DvtNBoxNodeRenderer$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxNodeRenderer$$++) {
        $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$DvtNBoxNodeRenderer$$]), $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, $dvt$$6$$.$NBoxConstants$.$LABEL$), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, "countLabel"), $DvtNBoxCategoryNode$$ = $DvtNBoxNodeOverflow$$.__childArea, $DvtNBoxCategoryRolloverHandler$$ = 
        !1, $DvtNBoxNode$$ && ($DvtNBoxNode$$.getParent().removeChild($DvtNBoxNode$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, null, $dvt$$6$$.$NBoxConstants$.$LABEL$), $DvtNBoxCategoryRolloverHandler$$ = !0), $DvtNBoxCategoryNodeRenderer$$ && ($DvtNBoxCategoryNodeRenderer$$.getParent().removeChild($DvtNBoxCategoryNodeRenderer$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, null, "countLabel"), $DvtNBoxCategoryRolloverHandler$$ = 
        !0), $DvtNBoxCategoryRolloverHandler$$ && ($DvtNBoxCellRenderer$$.$_isLabelVertical$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$) ? ($DvtNBoxCategoryNode$$.x -= $DvtNBoxDrawer$$.headerSize - $DvtNBoxDataAnimationHandler$$, $DvtNBoxCategoryNode$$.$w$ += $DvtNBoxDrawer$$.headerSize - $DvtNBoxDataAnimationHandler$$) : ($DvtNBoxCategoryNode$$.y -= $DvtNBoxDrawer$$.headerSize - $DvtNBoxEventManager$$, $DvtNBoxCategoryNode$$.$h$ += $DvtNBoxDrawer$$.headerSize - $DvtNBoxEventManager$$), $DvtNBoxNodeOverflow$$.__childArea = 
        $DvtNBoxCategoryNode$$);
      }
      $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$, $maximizedLabels$$);
      $minimizedFontSize$$ = $DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($DvtNBoxAutomation$$, $DvtNBoxDrawerRenderer$$, $minimizedLabels$$);
    }
    for ($DvtNBoxNodeRenderer$$ = 0;$DvtNBoxNodeRenderer$$ < $DvtNBoxDefaults$$.length;$DvtNBoxNodeRenderer$$++) {
      $DvtNBoxNodeOverflow$$ = $DvtNBoxDefaults$$[$DvtNBoxNodeRenderer$$], $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$), $DvtNBoxCategoryNode$$ = $DvtNBoxNodeOverflow$$.__childArea, $maximizedLabels$$[$DvtNBoxNodeRenderer$$].$setFontSize$($DvtNBoxCategoryRolloverHandler$$), $dvt$$6$$.$TextUtils$.$fitText$($maximizedLabels$$[$DvtNBoxNodeRenderer$$], 
      $DvtNBoxCategoryNode$$.$w$, $DvtNBoxCategoryNode$$.$h$, $DvtNBoxEventManager$$) && ($DvtNBoxCell$$ || $DvtNBoxCellRenderer$$.$renderHeader$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, $DvtNBoxEventManager$$, !0), $DvtNBoxRenderer$$.$positionText$($maximizedLabels$$[$DvtNBoxNodeRenderer$$], $DvtNBoxCategoryNode$$.x + $DvtNBoxCategoryNode$$.$w$ / 2, $DvtNBoxCategoryNode$$.y + $DvtNBoxCategoryNode$$.$h$ / 2));
    }
    for ($DvtNBoxNodeRenderer$$ = 0;$DvtNBoxNodeRenderer$$ < $DvtNBoxDrawerRenderer$$.length;$DvtNBoxNodeRenderer$$++) {
      $DvtNBoxNodeOverflow$$ = $DvtNBoxDrawerRenderer$$[$DvtNBoxNodeRenderer$$], $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$), $DvtNBoxCategoryNode$$ = $DvtNBoxNodeOverflow$$.__childArea, $minimizedLabels$$[$DvtNBoxNodeRenderer$$].$setFontSize$($minimizedFontSize$$), $dvt$$6$$.$TextUtils$.$fitText$($minimizedLabels$$[$DvtNBoxNodeRenderer$$], 
      $DvtNBoxCategoryNode$$.$w$, $DvtNBoxCategoryNode$$.$h$, $DvtNBoxEventManager$$) && ($DvtNBoxCell$$ || $DvtNBoxCellRenderer$$.$renderHeader$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, $DvtNBoxEventManager$$, !0), $DvtNBoxRenderer$$.$positionText$($minimizedLabels$$[$DvtNBoxNodeRenderer$$], $DvtNBoxCategoryNode$$.x + $DvtNBoxCategoryNode$$.$w$ / 2, $DvtNBoxCategoryNode$$.y + $DvtNBoxCategoryNode$$.$h$ / 2));
    }
  };
  $DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$ = function $$DvtNBoxCellRenderer$$$$getBodyCountLabelsFontSize$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    for (var $DvtNBoxEventManager$$ = Number.MAX_VALUE, $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxAutomation$$.length;$DvtNBoxDataAnimationHandler$$++) {
      var $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getCell$($dvt$$6$$, $DvtNBoxAutomation$$[$DvtNBoxDataAnimationHandler$$]).__childArea, $DvtNBoxEventManager$$ = Math.min($DvtNBoxEventManager$$, $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$].$getOptimalFontSize$($DvtNBoxDrawer$$))
    }
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxCellRenderer$$.$_isLabelVertical$ = function $$DvtNBoxCellRenderer$$$$_isLabelVertical$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$);
    return !$DvtNBoxEventManager$$ || $DvtNBoxEventManager$$ == $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$COLUMN$] || $DvtNBoxDataAnimationHandler$$ && $DvtNBoxDataAnimationHandler$$ != $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$ROW$] ? !1 : !0;
  };
  $DvtNBoxCellRenderer$$.$getCellDimensions$ = function $$DvtNBoxCellRenderer$$$$getCellDimensions$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    var $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$getOptions$().__layout.cellGap, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCellRenderer$$.$getCellLayout$($DvtNBoxAutomation$$), $DvtNBoxCategoryNode$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDrawer$$ + $DvtNBoxCategoryRolloverHandler$$.minimumCellSize, $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), 
    $DvtNBoxNodeOverflow$$ = $DvtNBoxRenderer$$.$getRowDimensions$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$), $DvtNBoxNode$$ = $DvtNBoxRenderer$$.$getColumnDimensions$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$), $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$), $DvtNBoxDrawerRenderer$$ = $DvtNBoxNode$$.x, 
    $DvtNBoxNodeRenderer$$ = $DvtNBoxNodeOverflow$$.y, $DvtNBoxNode$$ = $DvtNBoxNode$$.$w$, $DvtNBoxNodeOverflow$$ = $DvtNBoxNodeOverflow$$.$h$, $DvtNBoxStyleUtils$$ = !0;
    $DvtNBoxCategoryNodeRenderer$$ && ($DvtNBoxNodeRenderer$$ = $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$), $DvtNBoxCategoryNodeRenderer$$ = Math.min($DvtNBoxDataAnimationHandler$$.$h$ / (3 * ($DvtNBoxCell$$ - 1)), $DvtNBoxCategoryRolloverHandler$$), $DvtNBoxKeyboardHandler$$ < $DvtNBoxNodeRenderer$$ ? ($DvtNBoxNodeRenderer$$ = $DvtNBoxDataAnimationHandler$$.y + $DvtNBoxDataAnimationHandler$$.$h$ - ($DvtNBoxKeyboardHandler$$ + 1) * $DvtNBoxCategoryNodeRenderer$$, 
    $DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxStyleUtils$$ = !1) : $DvtNBoxKeyboardHandler$$ == $DvtNBoxNodeRenderer$$ ? ($DvtNBoxNodeRenderer$$ = $DvtNBoxDataAnimationHandler$$.y + ($DvtNBoxCell$$ - $DvtNBoxKeyboardHandler$$ - 1) * $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxNodeOverflow$$ = $DvtNBoxDataAnimationHandler$$.$h$ - ($DvtNBoxCell$$ - 1) * $DvtNBoxCategoryNodeRenderer$$) : ($DvtNBoxNodeRenderer$$ = $DvtNBoxDataAnimationHandler$$.y + ($DvtNBoxCell$$ - $DvtNBoxKeyboardHandler$$ - 
    1) * $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxStyleUtils$$ = !1));
    $DvtNBoxDefaults$$ && $DvtNBoxStyleUtils$$ && ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$), $DvtNBoxKeyboardHandler$$ = Math.min($DvtNBoxDataAnimationHandler$$.$w$ / (3 * ($DvtNBoxDrawer$$ - 1)), $DvtNBoxCategoryRolloverHandler$$), $DvtNBoxEventManager$$ < $DvtNBoxAutomation$$ ? ($DvtNBoxNode$$ = $DvtNBoxKeyboardHandler$$, $DvtNBoxDrawerRenderer$$ = $DvtNBoxDataAnimationHandler$$.x + ($DvtNBoxCategoryNode$$ ? $DvtNBoxDataAnimationHandler$$.$w$ - 
    $DvtNBoxKeyboardHandler$$ : 0) + ($DvtNBoxCategoryNode$$ ? -1 : 1) * $DvtNBoxEventManager$$ * $DvtNBoxKeyboardHandler$$) : $DvtNBoxEventManager$$ == $DvtNBoxAutomation$$ ? ($DvtNBoxNode$$ = $DvtNBoxDataAnimationHandler$$.$w$ - ($DvtNBoxDrawer$$ - 1) * $DvtNBoxKeyboardHandler$$, $DvtNBoxDrawerRenderer$$ = $DvtNBoxDataAnimationHandler$$.x + ($DvtNBoxCategoryNode$$ ? $DvtNBoxDataAnimationHandler$$.$w$ - $DvtNBoxNode$$ : 0) + ($DvtNBoxCategoryNode$$ ? -1 : 1) * $DvtNBoxEventManager$$ * $DvtNBoxKeyboardHandler$$) : 
    ($DvtNBoxNode$$ = $DvtNBoxKeyboardHandler$$, $DvtNBoxDrawerRenderer$$ = $DvtNBoxDataAnimationHandler$$.x + ($DvtNBoxCategoryNode$$ ? -$DvtNBoxKeyboardHandler$$ : $DvtNBoxDataAnimationHandler$$.$w$) + ($DvtNBoxCategoryNode$$ ? 1 : -1) * ($DvtNBoxDrawer$$ - $DvtNBoxEventManager$$) * $DvtNBoxKeyboardHandler$$));
    return new $dvt$$6$$.$Rectangle$($DvtNBoxDrawerRenderer$$, $DvtNBoxNodeRenderer$$, $DvtNBoxNode$$, $DvtNBoxNodeOverflow$$);
  };
  $DvtNBoxCellRenderer$$.$getCellLayout$ = function $$DvtNBoxCellRenderer$$$$getCellLayout$$($dvt$$6$$) {
    return $dvt$$6$$.$getOptions$().__layout.__cellLayout || $DvtNBoxCellRenderer$$.$_calculateCellLayout$($dvt$$6$$);
  };
  $DvtNBoxCellRenderer$$.$_calculateCellLayout$ = function $$DvtNBoxCellRenderer$$$$_calculateCellLayout$$($DvtNBoxAutomation$$) {
    for (var $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxEventManager$$ = $DvtNBoxRenderer$$.$getCellCounts$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$.__layout.cellTopGap, $DvtNBoxDrawer$$ = $DvtNBoxKeyboardHandler$$.__layout.cellBottomGap, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$.__layout.cellLabelGap, $DvtNBoxCategoryNode$$ = $DvtNBoxKeyboardHandler$$.__layout.minimumCellSize, $DvtNBoxCell$$ = 0, $DvtNBoxNodeOverflow$$ = 
    0, $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$) * $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $DvtNBoxCategoryNodeRenderer$$ = 0;$DvtNBoxCategoryNodeRenderer$$ < $DvtNBoxNode$$;$DvtNBoxCategoryNodeRenderer$$++) {
      var $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$);
      if ($DvtNBoxDefaults$$ && $DvtNBoxDefaults$$[$dvt$$6$$.$NBoxConstants$.$LABEL$]) {
        var $DvtNBoxCellRenderer$$ = $DvtNBoxDefaults$$[$dvt$$6$$.$NBoxConstants$.$LABEL_HALIGN$], $DvtNBoxDrawerRenderer$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxDefaults$$[$dvt$$6$$.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getCellLabelStyle$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$), $DvtNBoxCellRenderer$$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$), $DvtNBoxDrawerRenderer$$ = $dvt$$6$$.$TextUtils$.$guessTextDimensions$($DvtNBoxDrawerRenderer$$).$h$;
        "on" == $DvtNBoxStyleUtils$$.$getCellShowCount$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$) && ($DvtNBoxDefaults$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxEventManager$$.total[$DvtNBoxCategoryNodeRenderer$$], $DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($DvtNBoxAutomation$$), $DvtNBoxCellRenderer$$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$), $DvtNBoxDefaults$$ = $dvt$$6$$.$TextUtils$.$guessTextDimensions$($DvtNBoxDefaults$$).$h$, $DvtNBoxDrawerRenderer$$ = 
        Math.max($DvtNBoxDrawerRenderer$$, $DvtNBoxDefaults$$));
        $DvtNBoxCell$$ = Math.max($DvtNBoxCell$$, $DvtNBoxDrawerRenderer$$);
      }
    }
    $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$) && $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$) && ($DvtNBoxNodeOverflow$$ = Math.max($DvtNBoxCell$$, $DvtNBoxKeyboardHandler$$._resources.close_ena.height));
    $DvtNBoxCategoryNode$$ = Math.max($DvtNBoxCell$$ + $DvtNBoxDataAnimationHandler$$ + $DvtNBoxDrawer$$, $DvtNBoxCategoryNode$$);
    $DvtNBoxAutomation$$ = {labelHeight:$DvtNBoxCell$$, headerSize:$DvtNBoxCell$$ + $DvtNBoxDataAnimationHandler$$ + $DvtNBoxCategoryRolloverHandler$$, maximizedLabelHeight:$DvtNBoxNodeOverflow$$, maximizedHeaderSize:$DvtNBoxNodeOverflow$$ + $DvtNBoxDataAnimationHandler$$ + $DvtNBoxCategoryRolloverHandler$$, minimumCellSize:$DvtNBoxCategoryNode$$};
    return $DvtNBoxKeyboardHandler$$.__layout.__cellLayout = $DvtNBoxAutomation$$;
  };
  $DvtNBoxCellRenderer$$.$animateUpdate$ = function $$DvtNBoxCellRenderer$$$$animateUpdate$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$_oldNBox$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxCategoryNode$$ = new $dvt$$6$$.$CustomAnimation$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxEventManager$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxCell$$ = $DvtNBoxEventManager$$.$getChildContainer$(), $DvtNBoxNodeOverflow$$ = $DvtNBoxCell$$.$getMatrix$();
    $DvtNBoxCell$$.$setMatrix$($DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCell$$));
    var $DvtNBoxNode$$ = $DvtNBoxEventManager$$.getParent();
    $DvtNBoxNode$$.$addChildAt$($DvtNBoxCell$$, $DvtNBoxNode$$.$getChildIndex$($DvtNBoxEventManager$$) + 1);
    var $DvtNBoxNode$$ = $DvtNBoxEventManager$$.$getTranslateX$(), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxEventManager$$.$getTranslateY$();
    $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_MATRIX$, $DvtNBoxEventManager$$, $DvtNBoxEventManager$$.$getMatrix$, $DvtNBoxEventManager$$.$setMatrix$, $DvtNBoxEventManager$$.$getMatrix$());
    $DvtNBoxEventManager$$.$setMatrix$($DvtNBoxKeyboardHandler$$.$getMatrix$());
    var $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxDrawer$$, $DvtNBoxKeyboardHandler$$.getData(), "background"), $DvtNBoxDrawerRenderer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxEventManager$$.getData(), "background"), $DvtNBoxNodeRenderer$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxCategoryRolloverHandler$$.$getCtx$()) ? 0 : $DvtNBoxDrawerRenderer$$.getWidth() - $DvtNBoxDefaults$$.getWidth();
    $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_FILL$, $DvtNBoxDrawerRenderer$$, $DvtNBoxDrawerRenderer$$.$getFill$, $DvtNBoxDrawerRenderer$$.$setFill$, $DvtNBoxDrawerRenderer$$.$getFill$());
    $DvtNBoxDrawerRenderer$$.$setFill$($DvtNBoxDefaults$$.$getFill$());
    $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxDrawerRenderer$$, $DvtNBoxDrawerRenderer$$.getWidth, $DvtNBoxDrawerRenderer$$.$setWidth$, $DvtNBoxDrawerRenderer$$.getWidth());
    $DvtNBoxDrawerRenderer$$.$setWidth$($DvtNBoxDefaults$$.getWidth());
    $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxDrawerRenderer$$, $DvtNBoxDrawerRenderer$$.getHeight, $DvtNBoxDrawerRenderer$$.$setHeight$, $DvtNBoxDrawerRenderer$$.getHeight());
    $DvtNBoxDrawerRenderer$$.$setHeight$($DvtNBoxDefaults$$.getHeight());
    $DvtNBoxEventManager$$.$isShowingKeyboardFocusEffect$() && ($DvtNBoxDrawerRenderer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxEventManager$$.getData(), "focusEffect").$getEffect$()) && ($DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxDrawerRenderer$$, $DvtNBoxDrawerRenderer$$.getWidth, $DvtNBoxDrawerRenderer$$.$setWidth$, $DvtNBoxDrawerRenderer$$.getWidth()), $DvtNBoxDrawerRenderer$$.$setWidth$($DvtNBoxDefaults$$.getWidth() + 
    2), $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxDrawerRenderer$$, $DvtNBoxDrawerRenderer$$.getHeight, $DvtNBoxDrawerRenderer$$.$setHeight$, $DvtNBoxDrawerRenderer$$.getHeight()), $DvtNBoxDrawerRenderer$$.$setHeight$($DvtNBoxDefaults$$.getHeight() + 2));
    $DvtNBoxCellRenderer$$.$_animateLabels$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, "countLabel");
    $DvtNBoxCellRenderer$$.$_animateLabels$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $dvt$$6$$.$NBoxConstants$.$LABEL$);
    $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxDrawer$$, $DvtNBoxKeyboardHandler$$.getData(), "closeButton");
    $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxEventManager$$.getData(), "closeButton");
    $DvtNBoxKeyboardHandler$$ ? $DvtNBoxDrawer$$ ? ($DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_MATRIX$, $DvtNBoxDrawer$$, $DvtNBoxDrawer$$.$getMatrix$, $DvtNBoxDrawer$$.$setMatrix$, $DvtNBoxDrawer$$.$getMatrix$()), $DvtNBoxDrawer$$.$setMatrix$($DvtNBoxKeyboardHandler$$.$getMatrix$())) : ($DvtNBoxDrawer$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxKeyboardHandler$$), $DvtNBoxKeyboardHandler$$.$setTranslate$($DvtNBoxKeyboardHandler$$.$getTranslateX$() + $DvtNBoxNodeRenderer$$ + 
    $DvtNBoxNode$$, $DvtNBoxKeyboardHandler$$.$getTranslateY$() + $DvtNBoxCategoryNodeRenderer$$), $DvtNBoxAutomation$$.add(new $dvt$$6$$.$AnimFadeOut$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$UPDATE$), $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_MATRIX$, $DvtNBoxKeyboardHandler$$, $DvtNBoxKeyboardHandler$$.$getMatrix$, $DvtNBoxKeyboardHandler$$.$setMatrix$, 
    $DvtNBoxKeyboardHandler$$.$getMatrix$()), $DvtNBoxKeyboardHandler$$.$setMatrix$($DvtNBoxDrawer$$), $DvtNBoxCategoryRolloverHandler$$.$_deleteContainer$.$addChild$($DvtNBoxKeyboardHandler$$)) : $DvtNBoxDrawer$$ && ($DvtNBoxAutomation$$.add(new $dvt$$6$$.$AnimFadeIn$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxDrawer$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$UPDATE$), $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_MATRIX$, 
    $DvtNBoxDrawer$$, $DvtNBoxDrawer$$.$getMatrix$, $DvtNBoxDrawer$$.$setMatrix$, $DvtNBoxDrawer$$.$getMatrix$()), $DvtNBoxDrawer$$.$setTranslate$($DvtNBoxDrawer$$.$getTranslateX$() - $DvtNBoxNodeRenderer$$, $DvtNBoxDrawer$$.$getTranslateY$()), $DvtNBoxDrawer$$.$setAlpha$(0));
    $dvt$$6$$.$Playable$.$appendOnEnd$($DvtNBoxCategoryNode$$, function() {
      $DvtNBoxEventManager$$.$addChild$($DvtNBoxCell$$);
      $DvtNBoxCell$$.$setMatrix$($DvtNBoxNodeOverflow$$);
    });
    $DvtNBoxAutomation$$.add($DvtNBoxCategoryNode$$, $DvtNBoxDataAnimationHandler$$.$UPDATE$);
  };
  $DvtNBoxCellRenderer$$.$_animateLabels$ = function $$DvtNBoxCellRenderer$$$$_animateLabels$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDrawer$$) {
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$_oldNBox$, $DvtNBoxCategoryNode$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$.getData(), $DvtNBoxDrawer$$), $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxCategoryNode$$, $DvtNBoxEventManager$$.getData(), $DvtNBoxDrawer$$);
    $DvtNBoxKeyboardHandler$$ = $DvtNBoxCellRenderer$$.$_isLabelVertical$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$.getData());
    $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCellRenderer$$.$_isLabelVertical$($DvtNBoxCategoryNode$$, $DvtNBoxEventManager$$.getData());
    if ($DvtNBoxCell$$ || $DvtNBoxNodeOverflow$$) {
      if ($DvtNBoxCell$$ && $DvtNBoxNodeOverflow$$ && $DvtNBoxKeyboardHandler$$ == $DvtNBoxCategoryRolloverHandler$$) {
        $DvtNBoxKeyboardHandler$$ = new $dvt$$6$$.$CustomAnimation$($DvtNBoxCategoryNode$$.$getCtx$(), $DvtNBoxNodeOverflow$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
        var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCell$$.$getHorizAlignment$(), $DvtNBoxNode$$ = $DvtNBoxNodeOverflow$$.$getHorizAlignment$(), $DvtNBoxCategoryRolloverHandler$$ = (("left" == $DvtNBoxNode$$ ? -1 : "center" == $DvtNBoxNode$$ ? 0 : 1) - ("left" == $DvtNBoxCategoryRolloverHandler$$ ? -1 : "center" == $DvtNBoxCategoryRolloverHandler$$ ? 0 : 1)) * $DvtNBoxNodeOverflow$$.$measureDimensions$().$w$ / 2;
        $DvtNBoxKeyboardHandler$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxNodeOverflow$$, $DvtNBoxNodeOverflow$$.$getX$, $DvtNBoxNodeOverflow$$.$setX$, $DvtNBoxNodeOverflow$$.$getX$());
        $DvtNBoxNodeOverflow$$.$setX$($DvtNBoxCell$$.$getX$() + $DvtNBoxCategoryRolloverHandler$$);
        $DvtNBoxKeyboardHandler$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxNodeOverflow$$, $DvtNBoxNodeOverflow$$.$getY$, $DvtNBoxNodeOverflow$$.$setY$, $DvtNBoxNodeOverflow$$.$getY$());
        $DvtNBoxNodeOverflow$$.$setY$($DvtNBoxCell$$.$getY$());
        $DvtNBoxKeyboardHandler$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_MATRIX$, $DvtNBoxNodeOverflow$$, $DvtNBoxNodeOverflow$$.$getMatrix$, $DvtNBoxNodeOverflow$$.$setMatrix$, $DvtNBoxNodeOverflow$$.$getMatrix$());
        $DvtNBoxNodeOverflow$$.$setMatrix$($DvtNBoxCell$$.$getMatrix$());
        $DvtNBoxAutomation$$.add($DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$.$UPDATE$);
        "countLabel" == $DvtNBoxDrawer$$ && $DvtNBoxCell$$.$getTextString$() != $DvtNBoxNodeOverflow$$.$getTextString$() && ($DvtNBoxNodeOverflow$$.$setAlpha$(0), $DvtNBoxEventManager$$.$addChild$($DvtNBoxCell$$), $DvtNBoxEventManager$$ = new $dvt$$6$$.$AnimFadeOut$($DvtNBoxCategoryNode$$.$getCtx$(), $DvtNBoxCell$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxNodeOverflow$$ = new $dvt$$6$$.$AnimFadeIn$($DvtNBoxCategoryNode$$.$getCtx$(), $DvtNBoxNodeOverflow$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), 
        $DvtNBoxAutomation$$.add($DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$.$UPDATE$), $DvtNBoxAutomation$$.add($DvtNBoxNodeOverflow$$, $DvtNBoxDataAnimationHandler$$.$INSERT$), $dvt$$6$$.$Playable$.$appendOnEnd$($DvtNBoxEventManager$$, function() {
          $DvtNBoxCategoryNode$$.$_deleteContainer$.$addChild$($DvtNBoxCell$$);
        }));
      } else {
        $DvtNBoxCell$$ && ($DvtNBoxCell$$.$setMatrix$($DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCell$$)), $DvtNBoxCategoryNode$$.$_deleteContainer$.$addChild$($DvtNBoxCell$$), $DvtNBoxAutomation$$.add(new $dvt$$6$$.$AnimFadeOut$($DvtNBoxCategoryNode$$.$getCtx$(), $DvtNBoxCell$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$UPDATE$)), $DvtNBoxNodeOverflow$$ && ($DvtNBoxNodeOverflow$$.$setAlpha$(0), $DvtNBoxAutomation$$.add(new $dvt$$6$$.$AnimFadeIn$($DvtNBoxCategoryNode$$.$getCtx$(), 
        $DvtNBoxNodeOverflow$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$UPDATE$));
      }
    }
  };
  $DvtNBoxCellRenderer$$.$animateDelete$ = function $$DvtNBoxCellRenderer$$$$animateDelete$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxDrawer$$ = $DvtNBoxKeyboardHandler$$.$getChildContainer$();
    if ($DvtNBoxDrawer$$) {
      var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxDrawer$$), $DvtNBoxCategoryNode$$ = $DvtNBoxKeyboardHandler$$.getParent();
      $DvtNBoxCategoryNode$$.$addChildAt$($DvtNBoxDrawer$$, $DvtNBoxCategoryNode$$.$getChildIndex$($DvtNBoxKeyboardHandler$$) + 1);
      $DvtNBoxDrawer$$.$setMatrix$($DvtNBoxCategoryRolloverHandler$$);
    }
    $DvtNBoxEventManager$$.$_deleteContainer$.$addChild$($DvtNBoxKeyboardHandler$$);
    $DvtNBoxAutomation$$.add(new $dvt$$6$$.$AnimFadeOut$($DvtNBoxEventManager$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$UPDATE$);
  };
  $DvtNBoxCellRenderer$$.$animateInsert$ = function $$DvtNBoxCellRenderer$$$$animateInsert$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxDrawer$$ = $DvtNBoxKeyboardHandler$$.$getChildContainer$(), $DvtNBoxCategoryRolloverHandler$$ = null;
    if ($DvtNBoxDrawer$$) {
      var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDrawer$$.$getMatrix$(), $DvtNBoxCategoryNode$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxKeyboardHandler$$), $DvtNBoxCell$$ = $DvtNBoxKeyboardHandler$$.getParent();
      $DvtNBoxCell$$.$addChildAt$($DvtNBoxDrawer$$, $DvtNBoxCell$$.$getChildIndex$($DvtNBoxKeyboardHandler$$) + 1);
      $DvtNBoxDrawer$$.$setMatrix$($DvtNBoxCategoryNode$$);
    }
    $DvtNBoxKeyboardHandler$$.$setAlpha$(0);
    $DvtNBoxEventManager$$ = new $dvt$$6$$.$AnimFadeIn$($DvtNBoxEventManager$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
    $DvtNBoxDrawer$$ && $dvt$$6$$.$Playable$.$appendOnEnd$($DvtNBoxEventManager$$, function() {
      $DvtNBoxKeyboardHandler$$.$addChild$($DvtNBoxDrawer$$);
      $DvtNBoxDrawer$$.$setMatrix$($DvtNBoxCategoryRolloverHandler$$);
    });
    $DvtNBoxAutomation$$.add($DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$.$UPDATE$);
  };
  $DvtNBoxCellRenderer$$.$renderDropSiteFeedback$ = function $$DvtNBoxCellRenderer$$$$renderDropSiteFeedback$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$.getData(), "background"), $DvtNBoxDataAnimationHandler$$ = new $dvt$$6$$.Rect($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxEventManager$$.$getX$(), $DvtNBoxEventManager$$.$getY$(), $DvtNBoxEventManager$$.getWidth(), $DvtNBoxEventManager$$.getHeight());
    $DvtNBoxDataAnimationHandler$$.$setPixelHinting$();
    var $DvtNBoxDrawer$$ = $DvtNBoxStyleUtils$$.$getCellDropTargetStyle$($DvtNBoxAutomation$$);
    $DvtNBoxCellRenderer$$.$_applyStyleToRect$($DvtNBoxDataAnimationHandler$$, $DvtNBoxDrawer$$);
    $DvtNBoxKeyboardHandler$$.$addChildAt$($DvtNBoxDataAnimationHandler$$, $DvtNBoxKeyboardHandler$$.$getChildIndex$($DvtNBoxEventManager$$) + 1);
    return $DvtNBoxDataAnimationHandler$$;
  };
  $DvtNBoxCellRenderer$$.$_applyStyleToRect$ = function $$DvtNBoxCellRenderer$$$$_applyStyleToRect$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getStyle$($dvt$$6$$.$CSSStyle$.$BACKGROUND$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$.$getStyle$($dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$);
    ($DvtNBoxEventManager$$ = $DvtNBoxEventManager$$ ? $DvtNBoxEventManager$$ : $DvtNBoxDataAnimationHandler$$) && $DvtNBoxRenderer$$.$setFill$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$);
    "solid" == $DvtNBoxKeyboardHandler$$.$getStyle$($dvt$$6$$.$CSSStyle$.$BORDER_STYLE$) && ($DvtNBoxEventManager$$ = ($DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getStyle$($dvt$$6$$.$CSSStyle$.$BORDER_COLOR$)) ? $DvtNBoxEventManager$$ : "#000000", $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$.$getStyle$($dvt$$6$$.$CSSStyle$.$BORDER_WIDTH$), $DvtNBoxDataAnimationHandler$$ = null == $DvtNBoxDataAnimationHandler$$ ? 1 : parseFloat($DvtNBoxDataAnimationHandler$$), $DvtNBoxAutomation$$.$setSolidStroke$($DvtNBoxEventManager$$, 
    null, $DvtNBoxDataAnimationHandler$$));
  };
  $DvtNBoxCellRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxCellRenderer$$$$_addAccessibilityAttributes$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxAutomation$$ = $dvt$$6$$.$Agent$.$isTouchDevice$() ? $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, "background") : $DvtNBoxEventManager$$;
    $DvtNBoxAutomation$$.$setAriaRole$("img");
    $dvt$$6$$.$Agent$.$deferAriaCreation$() || ($DvtNBoxEventManager$$ = $DvtNBoxEventManager$$.$getAriaLabel$()) && $DvtNBoxAutomation$$.$setAriaProperty$($dvt$$6$$.$NBoxConstants$.$LABEL$, $DvtNBoxEventManager$$);
  };
  var $DvtNBoxNodeRenderer$$ = {};
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxNodeRenderer$$, $dvt$$6$$.$Obj$);
  $DvtNBoxNodeRenderer$$.$_MIN_CORNER_RADIUS$ = 2.5;
  $DvtNBoxNodeRenderer$$.$_ASPECT_RATIO_SCALING$ = "xMidYMid slice";
  $DvtNBoxNodeRenderer$$.$render$ = function $$DvtNBoxNodeRenderer$$$$render$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxNodeRenderer$$.$_renderNodeBackground$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxNodeRenderer$$.$_renderNodeIndicator$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxNodeRenderer$$.$_renderNodeIcon$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxNodeRenderer$$.$_renderNodeLabels$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxNodeRenderer$$.$_addAccessibilityAttributes$($dvt$$6$$, $DvtNBoxKeyboardHandler$$);
    ($DvtNBoxAutomation$$ = $DvtNBoxKeyboardHandler$$.$getChildContainer$()) && $DvtNBoxNodeRenderer$$.$_clipIfNecessary$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxEventManager$$);
  };
  $DvtNBoxNodeRenderer$$.$calculateNodeLayout$ = function $$DvtNBoxNodeRenderer$$$$calculateNodeLayout$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    for (var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$.__layout.gridGap, $DvtNBoxDrawer$$ = $DvtNBoxEventManager$$.__layout.nodeStartLabelGap, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxEventManager$$.__layout.nodeLabelOnlyStartLabelGap, $DvtNBoxCategoryNode$$ = $DvtNBoxEventManager$$.__layout.nodeEndLabelGap, $DvtNBoxCell$$ = $DvtNBoxEventManager$$.__layout.nodeSwatchSize, $DvtNBoxNodeOverflow$$ = $DvtNBoxEventManager$$.__layout.maximumLabelWidth, 
    $DvtNBoxNode$$ = $DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$($DvtNBoxAutomation$$), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxNode$$.nodeHeight, $DvtNBoxRenderer$$ = $DvtNBoxNode$$.indicatorSectionWidth, $DvtNBoxDefaults$$ = $DvtNBoxNode$$.iconSectionWidth, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxRenderer$$ || $DvtNBoxDefaults$$ ? $DvtNBoxDrawer$$ : $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawerRenderer$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, 0), $DvtNBoxCellRenderer$$ = 
    $DvtNBoxDataUtils$$.$getIndicatorIcon$($DvtNBoxAutomation$$, $DvtNBoxDrawerRenderer$$), $icon$$40_widestLabel$$ = $DvtNBoxDataUtils$$.$getIcon$($DvtNBoxAutomation$$, $DvtNBoxDrawerRenderer$$), $labelSectionWidth_rowCount$$9$$ = 0, $DvtNBoxDrawer$$ = [], $cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$ = 0, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = 0, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = 
    $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$), $cellArea_ci$$3_maximizedColumn$$7$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$), $labelSectionWidth_rowCount$$9$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$), $columnCount$$9_label$$65_secondaryLabel$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $nodeCount$$8_r$$39$$ = 0;$nodeCount$$8_r$$39$$ < $labelSectionWidth_rowCount$$9$$;$nodeCount$$8_r$$39$$++) {
      for (var $c$$26_nodeCellIndex$$ = 0;$c$$26_nodeCellIndex$$ < $columnCount$$9_label$$65_secondaryLabel$$;$c$$26_nodeCellIndex$$++) {
        $DvtNBoxDrawer$$.push({cellRows:0, cellColumns:0, overflow:!1});
      }
    }
    for (var $maximizedCellIndex$$1_nodeCounts$$ = [], $nodeCount$$8_r$$39$$ = $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$), $cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$ = 0;$cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$ < $nodeCount$$8_r$$39$$;$cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$++) {
      var $cellIndex$$9_n$$22$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$);
      $DvtNBoxDataUtils$$.$isNodeHidden$($DvtNBoxAutomation$$, $cellIndex$$9_n$$22$$) || ($c$$26_nodeCellIndex$$ = $DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxAutomation$$, $cellIndex$$9_n$$22$$), isNaN($maximizedCellIndex$$1_nodeCounts$$[$c$$26_nodeCellIndex$$]) && ($maximizedCellIndex$$1_nodeCounts$$[$c$$26_nodeCellIndex$$] = 0), $maximizedCellIndex$$1_nodeCounts$$[$c$$26_nodeCellIndex$$]++);
    }
    if ($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ && $cellArea_ci$$3_maximizedColumn$$7$$) {
      $maximizedCellIndex$$1_nodeCounts$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $cellArea_ci$$3_maximizedColumn$$7$$) + $columnCount$$9_label$$65_secondaryLabel$$ * $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$);
      $cellArea_ci$$3_maximizedColumn$$7$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $maximizedCellIndex$$1_nodeCounts$$).__childArea;
      $labelSectionWidth_rowCount$$9$$ = $DvtNBoxNode$$.labelSectionWidth;
      null == $labelSectionWidth_rowCount$$9$$ && ("ifRequired" != $DvtNBoxEventManager$$.labelTruncation ? $labelSectionWidth_rowCount$$9$$ = $DvtNBoxNodeOverflow$$ + $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxCategoryNode$$ : ($DvtNBoxNode$$ = $DvtNBoxKeyboardHandler$$[$maximizedCellIndex$$1_nodeCounts$$], $labelSectionWidth_rowCount$$9$$ = Math.max($DvtNBoxNodeOverflow$$, $DvtNBoxNodeRenderer$$.$_getMaxLabelWidth$($DvtNBoxAutomation$$, $DvtNBoxNode$$)) + $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxCategoryNode$$), 
      $labelSectionWidth_rowCount$$9$$ = Math.min($labelSectionWidth_rowCount$$9$$, $cellArea_ci$$3_maximizedColumn$$7$$.$w$ - $DvtNBoxRenderer$$ - $DvtNBoxDefaults$$));
      $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / ($DvtNBoxRenderer$$ + $DvtNBoxDefaults$$ + $labelSectionWidth_rowCount$$9$$ + $DvtNBoxDataAnimationHandler$$));
      $DvtNBoxDrawerRenderer$$[$dvt$$6$$.$NBoxConstants$.$LABEL$] && ($DvtNBoxDataAnimationHandler$$ = new $dvt$$6$$.$Container$, $DvtNBoxNodeOverflow$$ = !1, $columnCount$$9_label$$65_secondaryLabel$$ = $DvtNBoxDataUtils$$.$getNodeLabel$($DvtNBoxAutomation$$, $DvtNBoxDrawerRenderer$$), $cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$ = $dvt$$6$$.$TextUtils$.$guessTextDimensions$($columnCount$$9_label$$65_secondaryLabel$$).$h$, $dvt$$6$$.$TextUtils$.$fitText$($columnCount$$9_label$$65_secondaryLabel$$, 
      $labelSectionWidth_rowCount$$9$$ - $DvtNBoxCategoryRolloverHandler$$ - $DvtNBoxCategoryNode$$, $cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$, $DvtNBoxDataAnimationHandler$$) && ($DvtNBoxNodeOverflow$$ = !0), $DvtNBoxDrawerRenderer$$[$dvt$$6$$.$NBoxConstants$.$SECONDARY_LABEL$] && ($columnCount$$9_label$$65_secondaryLabel$$ = $DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($DvtNBoxAutomation$$, $DvtNBoxDrawerRenderer$$), $cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$ = $dvt$$6$$.$TextUtils$.$guessTextDimensions$($columnCount$$9_label$$65_secondaryLabel$$).$h$, 
      $dvt$$6$$.$TextUtils$.$fitText$($columnCount$$9_label$$65_secondaryLabel$$, $labelSectionWidth_rowCount$$9$$ - $DvtNBoxCategoryRolloverHandler$$ - $DvtNBoxCategoryNode$$, $cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$, $DvtNBoxDataAnimationHandler$$) && ($DvtNBoxNodeOverflow$$ = !0)), $DvtNBoxNodeOverflow$$ || ($labelSectionWidth_rowCount$$9$$ = 0, $DvtNBoxDrawerRenderer$$[$dvt$$6$$.$NBoxConstants$.$COLOR$] && ($DvtNBoxCellRenderer$$ && !$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($DvtNBoxAutomation$$, 
      $DvtNBoxDrawerRenderer$$) || $icon$$40_widestLabel$$ && !$icon$$40_widestLabel$$[$dvt$$6$$.$NBoxConstants$.$SOURCE$] || ($labelSectionWidth_rowCount$$9$$ = Math.max(0, Math.min($DvtNBoxCell$$, $cellArea_ci$$3_maximizedColumn$$7$$.$w$ - $DvtNBoxRenderer$$ - $DvtNBoxDefaults$$))))));
      if (0 > $cellArea_ci$$3_maximizedColumn$$7$$.$w$ - $DvtNBoxRenderer$$ - $DvtNBoxDefaults$$) {
        var $iconWidth$$9$$ = $DvtNBoxDefaults$$, $DvtNBoxDefaults$$ = Math.max(0, $cellArea_ci$$3_maximizedColumn$$7$$.$w$ - $DvtNBoxRenderer$$)
      }
      0 > $cellArea_ci$$3_maximizedColumn$$7$$.$w$ - $DvtNBoxRenderer$$ && ($DvtNBoxRenderer$$ = $cellArea_ci$$3_maximizedColumn$$7$$.$w$);
      $DvtNBoxDrawer$$[$maximizedCellIndex$$1_nodeCounts$$] = {cellRows:-1, cellColumns:$cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$, overflow:!1};
    } else {
      $DvtNBoxCell$$ = [];
      if ($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$) {
        for ($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$), $c$$26_nodeCellIndex$$ = 0;$c$$26_nodeCellIndex$$ < $columnCount$$9_label$$65_secondaryLabel$$;$c$$26_nodeCellIndex$$++) {
          $DvtNBoxCell$$.push($c$$26_nodeCellIndex$$ + $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ * $columnCount$$9_label$$65_secondaryLabel$$);
        }
      } else {
        if ($cellArea_ci$$3_maximizedColumn$$7$$) {
          for ($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $cellArea_ci$$3_maximizedColumn$$7$$), $nodeCount$$8_r$$39$$ = 0;$nodeCount$$8_r$$39$$ < $labelSectionWidth_rowCount$$9$$;$nodeCount$$8_r$$39$$++) {
            $DvtNBoxCell$$.push($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ + $nodeCount$$8_r$$39$$ * $columnCount$$9_label$$65_secondaryLabel$$);
          }
        } else {
          for ($cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$ = 0;$cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$ < $DvtNBoxDrawer$$.length;$cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$++) {
            $DvtNBoxCell$$.push($cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$);
          }
        }
      }
      if (null != $DvtNBoxNode$$.labelSectionWidth) {
        $labelSectionWidth_rowCount$$9$$ = $DvtNBoxNode$$.labelSectionWidth, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxCell$$[0]), $cellArea_ci$$3_maximizedColumn$$7$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$.__childArea, $cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$h$ + 
        $DvtNBoxDataAnimationHandler$$) / ($DvtNBoxCategoryNodeRenderer$$ + $DvtNBoxDataAnimationHandler$$)), $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / ($DvtNBoxRenderer$$ + $DvtNBoxDefaults$$ + $labelSectionWidth_rowCount$$9$$ + $DvtNBoxDataAnimationHandler$$));
      } else {
        for ($cellArea_ci$$3_maximizedColumn$$7$$ = $DvtNBoxDrawerRenderer$$ = 0;$cellArea_ci$$3_maximizedColumn$$7$$ < $DvtNBoxCell$$.length;$cellArea_ci$$3_maximizedColumn$$7$$++) {
          !isNaN($maximizedCellIndex$$1_nodeCounts$$[$DvtNBoxCell$$[$cellArea_ci$$3_maximizedColumn$$7$$]]) && $maximizedCellIndex$$1_nodeCounts$$[$DvtNBoxCell$$[$cellArea_ci$$3_maximizedColumn$$7$$]] > $maximizedCellIndex$$1_nodeCounts$$[$DvtNBoxDrawerRenderer$$] && ($DvtNBoxDrawerRenderer$$ = $DvtNBoxCell$$[$cellArea_ci$$3_maximizedColumn$$7$$]);
        }
        if ("ifRequired" != $DvtNBoxEventManager$$.labelTruncation) {
          if ($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxDrawerRenderer$$), $cellArea_ci$$3_maximizedColumn$$7$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$.__childArea, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$h$ + $DvtNBoxDataAnimationHandler$$) / 
          ($DvtNBoxCategoryNodeRenderer$$ + $DvtNBoxDataAnimationHandler$$)), $DvtNBoxCellRenderer$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / ($DvtNBoxRenderer$$ + $DvtNBoxDefaults$$ + $DvtNBoxEventManager$$.__layout.minimumLabelWidth + $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxCategoryNode$$ + $DvtNBoxDataAnimationHandler$$)), $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ * $DvtNBoxCellRenderer$$ < 
          $maximizedCellIndex$$1_nodeCounts$$[$DvtNBoxDrawerRenderer$$]) {
            $labelSectionWidth_rowCount$$9$$ = Math.floor(Math.min($DvtNBoxEventManager$$.__layout.maximumLabelWidth + $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxCategoryNode$$, ($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / $DvtNBoxCellRenderer$$ - ($DvtNBoxRenderer$$ + $DvtNBoxDefaults$$ + $DvtNBoxDataAnimationHandler$$))), $cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$, 
            $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxCellRenderer$$;
          } else {
            $DvtNBoxNodeOverflow$$ = $DvtNBoxCellRenderer$$;
            for ($labelSectionWidth_rowCount$$9$$ = Math.floor(Math.min($DvtNBoxEventManager$$.__layout.maximumLabelWidth + $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxCategoryNode$$, ($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / $DvtNBoxNodeOverflow$$ - ($DvtNBoxRenderer$$ + $DvtNBoxDefaults$$ + $DvtNBoxDataAnimationHandler$$)));$labelSectionWidth_rowCount$$9$$ < $DvtNBoxEventManager$$.__layout.maximumLabelWidth + $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxCategoryNode$$;) {
              if (($DvtNBoxNodeOverflow$$ - 1) * $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ >= $maximizedCellIndex$$1_nodeCounts$$[$DvtNBoxDrawerRenderer$$]) {
                $DvtNBoxNodeOverflow$$--, $labelSectionWidth_rowCount$$9$$ = Math.floor(Math.min($DvtNBoxEventManager$$.__layout.maximumLabelWidth + $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxCategoryNode$$, ($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / $DvtNBoxNodeOverflow$$ - ($DvtNBoxRenderer$$ + $DvtNBoxDefaults$$ + $DvtNBoxDataAnimationHandler$$)));
              } else {
                break;
              }
            }
            $cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$;
            $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxNodeOverflow$$;
          }
        } else {
          for (var $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxCell$$[0]), $cellArea_ci$$3_maximizedColumn$$7$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$.__childArea, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$h$ + $DvtNBoxDataAnimationHandler$$) / 
          ($DvtNBoxCategoryNodeRenderer$$ + $DvtNBoxDataAnimationHandler$$)), $DvtNBoxCellRenderer$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / ($DvtNBoxRenderer$$ + $DvtNBoxDefaults$$ + $DvtNBoxEventManager$$.__layout.minimumLabelWidth + $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxCategoryNode$$ + $DvtNBoxDataAnimationHandler$$)), $cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$, 
          $startIndex$$9$$ = $icon$$40_widestLabel$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = 0;$cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ <= $DvtNBoxCellRenderer$$;) {
            $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$++;
            var $maxLabelWidth$$6$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ - ($DvtNBoxRenderer$$ + $DvtNBoxDefaults$$ + $DvtNBoxDataAnimationHandler$$));
            if ($icon$$40_widestLabel$$ > $maxLabelWidth$$6$$) {
              $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.max($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ - 1, 1);
              break;
            }
            for (var $maxNodes$$1$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ * $cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$, $nodeArray$$ = [], $nodeCount$$8_r$$39$$ = 0;$nodeCount$$8_r$$39$$ < $labelSectionWidth_rowCount$$9$$;$nodeCount$$8_r$$39$$++) {
              for ($c$$26_nodeCellIndex$$ = 0;$c$$26_nodeCellIndex$$ < $columnCount$$9_label$$65_secondaryLabel$$;$c$$26_nodeCellIndex$$++) {
                if ($cellIndex$$9_n$$22$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $c$$26_nodeCellIndex$$) + $columnCount$$9_label$$65_secondaryLabel$$ * $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $nodeCount$$8_r$$39$$), ($DvtNBoxNode$$ = $DvtNBoxKeyboardHandler$$[$cellIndex$$9_n$$22$$]) && $DvtNBoxNode$$.length) {
                  var $numNodes$$3$$ = Math.min($DvtNBoxNode$$.length, $maxNodes$$1$$);
                  $DvtNBoxNode$$.length > $maxNodes$$1$$ && $numNodes$$3$$--;
                  for ($cellIndex$$9_n$$22$$ = $startIndex$$9$$;$cellIndex$$9_n$$22$$ < $numNodes$$3$$;$cellIndex$$9_n$$22$$++) {
                    $nodeArray$$.push($DvtNBoxNode$$[$cellIndex$$9_n$$22$$]);
                  }
                }
              }
            }
            $icon$$40_widestLabel$$ = Math.max($icon$$40_widestLabel$$, Math.ceil($DvtNBoxNodeRenderer$$.$_getMaxLabelWidth$($DvtNBoxAutomation$$, $nodeArray$$) + $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxCategoryNode$$));
            if ($icon$$40_widestLabel$$ > $maxLabelWidth$$6$$) {
              $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.max($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ - 1, 1);
              break;
            }
            if ($maxNodes$$1$$ >= $maximizedCellIndex$$1_nodeCounts$$[$DvtNBoxDrawerRenderer$$]) {
              break;
            }
            $startIndex$$9$$ = $maxNodes$$1$$;
          }
          $maxLabelWidth$$6$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ - ($DvtNBoxRenderer$$ + $DvtNBoxDefaults$$ + $DvtNBoxDataAnimationHandler$$));
          $labelSectionWidth_rowCount$$9$$ = $icon$$40_widestLabel$$ > $maxLabelWidth$$6$$ ? $maxLabelWidth$$6$$ : Math.max($icon$$40_widestLabel$$, Math.min($maxLabelWidth$$6$$, $DvtNBoxNodeOverflow$$ + $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxCategoryNode$$));
          $labelSectionWidth_rowCount$$9$$ < $DvtNBoxEventManager$$.__layout.minimumLabelWidth && ($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = 0);
        }
      }
      for ($cellArea_ci$$3_maximizedColumn$$7$$ = 0;$cellArea_ci$$3_maximizedColumn$$7$$ < $DvtNBoxCell$$.length;$cellArea_ci$$3_maximizedColumn$$7$$++) {
        $cellIndex$$9_n$$22$$ = $DvtNBoxCell$$[$cellArea_ci$$3_maximizedColumn$$7$$], $DvtNBoxCategoryNode$$ = !1, $maximizedCellIndex$$1_nodeCounts$$[$cellIndex$$9_n$$22$$] > $cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$ * $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ && ($DvtNBoxCategoryNode$$ = !0), $DvtNBoxDrawer$$[$cellIndex$$9_n$$22$$] = {cellRows:$cellRows$$1_i$$562_labelHeight$$9_secondaryLabelHeight$$, cellColumns:$cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$, 
        overflow:$DvtNBoxCategoryNode$$};
      }
    }
    $DvtNBoxCategoryNodeRenderer$$ = {nodeHeight:$DvtNBoxCategoryNodeRenderer$$, indicatorSectionWidth:$DvtNBoxRenderer$$, iconSectionWidth:$DvtNBoxDefaults$$, iconWidth:$iconWidth$$9$$, labelSectionWidth:$labelSectionWidth_rowCount$$9$$, cellLayouts:$DvtNBoxDrawer$$};
    return $DvtNBoxEventManager$$.__layout.__nodeLayout = $DvtNBoxCategoryNodeRenderer$$;
  };
  $DvtNBoxNodeRenderer$$.$calculateNodeDrawerLayout$ = function $$DvtNBoxNodeRenderer$$$$calculateNodeDrawerLayout$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxDrawer$$ = $DvtNBoxDataAnimationHandler$$.__layout.gridGap, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataAnimationHandler$$.__layout.nodeStartLabelGap, $DvtNBoxCategoryNode$$ = $DvtNBoxDataAnimationHandler$$.__layout.nodeLabelOnlyStartLabelGap, $DvtNBoxCell$$ = $DvtNBoxDataAnimationHandler$$.__layout.nodeEndLabelGap, $DvtNBoxNodeOverflow$$ = $DvtNBoxDataAnimationHandler$$.__layout.nodeSwatchSize, $DvtNBoxNode$$ = 
    $DvtNBoxDataAnimationHandler$$.__layout.maximumLabelWidth, $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, 0), $DvtNBoxRenderer$$ = $DvtNBoxDataUtils$$.$getIndicatorIcon$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$), $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getIcon$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$), $DvtNBoxDrawerRenderer$$ = $DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$($DvtNBoxAutomation$$), $DvtNBoxCellRenderer$$ = $DvtNBoxDrawerRenderer$$.nodeHeight, 
    $indicatorSectionWidth$$1$$ = $DvtNBoxDrawerRenderer$$.indicatorSectionWidth, $iconSectionWidth$$1$$ = $DvtNBoxDrawerRenderer$$.iconSectionWidth, $DvtNBoxCategoryRolloverHandler$$ = $indicatorSectionWidth$$1$$ || $iconSectionWidth$$1$$ ? $DvtNBoxCategoryRolloverHandler$$ : $DvtNBoxCategoryNode$$;
    $DvtNBoxKeyboardHandler$$ = $DvtNBoxKeyboardHandler$$.__childArea;
    $DvtNBoxDrawerRenderer$$ = $DvtNBoxDrawerRenderer$$.labelSectionWidth;
    null == $DvtNBoxDrawerRenderer$$ && ($DvtNBoxDrawerRenderer$$ = "ifRequired" != $DvtNBoxDataAnimationHandler$$.labelTruncation ? $DvtNBoxNode$$ + $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxCell$$ : Math.max($DvtNBoxNode$$, $DvtNBoxNodeRenderer$$.$_getMaxLabelWidth$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$)) + $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxCell$$, $DvtNBoxDrawerRenderer$$ = Math.min($DvtNBoxDrawerRenderer$$, $DvtNBoxKeyboardHandler$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$));
    $DvtNBoxEventManager$$ = Math.floor(($DvtNBoxKeyboardHandler$$.$w$ + $DvtNBoxDrawer$$) / ($indicatorSectionWidth$$1$$ + $iconSectionWidth$$1$$ + $DvtNBoxDrawerRenderer$$ + $DvtNBoxDrawer$$));
    if ($DvtNBoxCategoryNodeRenderer$$[$dvt$$6$$.$NBoxConstants$.$LABEL$]) {
      var $DvtNBoxDrawer$$ = new $dvt$$6$$.$Container$, $DvtNBoxNode$$ = !1, $DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getNodeLabel$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$), $labelHeight$$10_secondaryLabelHeight$$1$$ = $dvt$$6$$.$TextUtils$.$guessTextDimensions$($DvtNBoxCategoryNode$$).$h$;
      $dvt$$6$$.$TextUtils$.$fitText$($DvtNBoxCategoryNode$$, $DvtNBoxDrawerRenderer$$ - $DvtNBoxCategoryRolloverHandler$$ - $DvtNBoxCell$$, $labelHeight$$10_secondaryLabelHeight$$1$$, $DvtNBoxDrawer$$) && ($DvtNBoxNode$$ = !0);
      $DvtNBoxCategoryNodeRenderer$$[$dvt$$6$$.$NBoxConstants$.$SECONDARY_LABEL$] && ($DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$), $labelHeight$$10_secondaryLabelHeight$$1$$ = $dvt$$6$$.$TextUtils$.$guessTextDimensions$($DvtNBoxCategoryNode$$).$h$, $dvt$$6$$.$TextUtils$.$fitText$($DvtNBoxCategoryNode$$, $DvtNBoxDrawerRenderer$$ - $DvtNBoxCategoryRolloverHandler$$ - $DvtNBoxCell$$, $labelHeight$$10_secondaryLabelHeight$$1$$, 
      $DvtNBoxDrawer$$) && ($DvtNBoxNode$$ = !0));
      $DvtNBoxNode$$ || ($DvtNBoxDrawerRenderer$$ = 0, $DvtNBoxCategoryNodeRenderer$$[$dvt$$6$$.$NBoxConstants$.$COLOR$] && ($DvtNBoxRenderer$$ && !$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$) || $DvtNBoxDefaults$$ && !$DvtNBoxDefaults$$[$dvt$$6$$.$NBoxConstants$.$SOURCE$] || ($DvtNBoxDrawerRenderer$$ = Math.max(0, Math.min($DvtNBoxNodeOverflow$$, $DvtNBoxKeyboardHandler$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$)))));
    }
    if (0 > $DvtNBoxKeyboardHandler$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$) {
      var $iconWidth$$10$$ = $iconSectionWidth$$1$$, $iconSectionWidth$$1$$ = Math.max(0, $DvtNBoxKeyboardHandler$$.$w$ - $indicatorSectionWidth$$1$$)
    }
    0 > $DvtNBoxKeyboardHandler$$.$w$ - $indicatorSectionWidth$$1$$ && ($indicatorSectionWidth$$1$$ = $DvtNBoxKeyboardHandler$$.$w$);
    $DvtNBoxAutomation$$ = {nodeHeight:$DvtNBoxCellRenderer$$, indicatorSectionWidth:$indicatorSectionWidth$$1$$, iconSectionWidth:$iconSectionWidth$$1$$, iconWidth:$iconWidth$$10$$, labelSectionWidth:$DvtNBoxDrawerRenderer$$, drawerLayout:{rows:-1, columns:$DvtNBoxEventManager$$}};
    return $DvtNBoxDataAnimationHandler$$.__layout.__nodeDrawerLayout = $DvtNBoxAutomation$$;
  };
  $DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$ = function $$DvtNBoxNodeRenderer$$$$_calculateSimpleNodeLayout$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.__layout.nodeIndicatorGap, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$.__layout.nodeSingleLabelGap, $DvtNBoxDrawer$$ = $DvtNBoxKeyboardHandler$$.__layout.nodeDualLabelGap, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$.__layout.nodeInterLabelGap, $DvtNBoxCategoryNode$$ = $DvtNBoxKeyboardHandler$$.__layout.nodeSwatchSize, $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, 
    0), $DvtNBoxNodeOverflow$$ = $DvtNBoxKeyboardHandler$$ = 0, $DvtNBoxNode$$ = 0, $DvtNBoxCategoryNodeRenderer$$ = null, $DvtNBoxRenderer$$ = $DvtNBoxDataUtils$$.$getIndicatorIcon$($DvtNBoxAutomation$$, $DvtNBoxCell$$), $DvtNBoxDefaults$$ = $DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($DvtNBoxAutomation$$, $DvtNBoxCell$$), $DvtNBoxDrawerRenderer$$ = $DvtNBoxDataUtils$$.$getIcon$($DvtNBoxAutomation$$, $DvtNBoxCell$$);
    $DvtNBoxRenderer$$ ? ($DvtNBoxDefaults$$ = $DvtNBoxRenderer$$[$dvt$$6$$.$NBoxConstants$.$HEIGHT$], $DvtNBoxNodeOverflow$$ = $DvtNBoxRenderer$$[$dvt$$6$$.$NBoxConstants$.$WIDTH$] + 2 * $DvtNBoxEventManager$$, $DvtNBoxKeyboardHandler$$ = Math.max($DvtNBoxKeyboardHandler$$, $DvtNBoxDefaults$$ + 2 * $DvtNBoxEventManager$$)) : $DvtNBoxDefaults$$ && ($DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryNode$$);
    $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$LABEL$] ? ($DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getNodeLabel$($DvtNBoxAutomation$$, $DvtNBoxCell$$), $DvtNBoxEventManager$$ = $dvt$$6$$.$TextUtils$.$guessTextDimensions$($DvtNBoxEventManager$$).$h$, $DvtNBoxKeyboardHandler$$ = Math.max($DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$ + 2 * $DvtNBoxDataAnimationHandler$$), $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$SECONDARY_LABEL$] && ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($DvtNBoxAutomation$$, 
    $DvtNBoxCell$$), $DvtNBoxAutomation$$ = $dvt$$6$$.$TextUtils$.$guessTextDimensions$($DvtNBoxAutomation$$).$h$, $DvtNBoxKeyboardHandler$$ = Math.max($DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$ + $DvtNBoxAutomation$$ + 2 * $DvtNBoxDrawer$$ + $DvtNBoxCategoryRolloverHandler$$))) : ($DvtNBoxCategoryNodeRenderer$$ = 0, $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$COLOR$] && ($DvtNBoxRenderer$$ && !$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($DvtNBoxAutomation$$, $DvtNBoxCell$$) || $DvtNBoxDrawerRenderer$$ && 
    !$DvtNBoxDrawerRenderer$$[$dvt$$6$$.$NBoxConstants$.$SOURCE$] || ($DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxNodeOverflow$$ ? $DvtNBoxNodeOverflow$$ : $DvtNBoxCategoryNode$$)));
    $DvtNBoxDrawerRenderer$$ && ($DvtNBoxNode$$ = Math.max($DvtNBoxKeyboardHandler$$, $dvt$$6$$.$Agent$.$isTouchDevice$() ? $DvtNBoxDrawerRenderer$$.preferredSizeTouch : $DvtNBoxDrawerRenderer$$.preferredSize), $DvtNBoxDrawer$$ = ($DvtNBoxDrawerRenderer$$[$dvt$$6$$.$NBoxConstants$.$SOURCE$] ? $DvtNBoxDrawerRenderer$$.sourcePaddingRatio : $DvtNBoxDrawerRenderer$$.shapePaddingRatio) * $DvtNBoxNode$$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDrawerRenderer$$[$dvt$$6$$.$NBoxConstants$.$HEIGHT$] ? 
    $DvtNBoxDrawerRenderer$$[$dvt$$6$$.$NBoxConstants$.$HEIGHT$] : $DvtNBoxNode$$ - 2 * $DvtNBoxDrawer$$, $DvtNBoxNode$$ = ($DvtNBoxDrawerRenderer$$[$dvt$$6$$.$NBoxConstants$.$WIDTH$] ? $DvtNBoxDrawerRenderer$$[$dvt$$6$$.$NBoxConstants$.$WIDTH$] : $DvtNBoxNode$$ - 2 * $DvtNBoxDrawer$$) + 2 * $DvtNBoxDrawer$$, $DvtNBoxKeyboardHandler$$ = Math.max($DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryRolloverHandler$$ + 2 * $DvtNBoxDrawer$$));
    return {nodeHeight:$DvtNBoxKeyboardHandler$$, indicatorSectionWidth:$DvtNBoxNodeOverflow$$, iconSectionWidth:$DvtNBoxNode$$, labelSectionWidth:$DvtNBoxCategoryNodeRenderer$$};
  };
  $DvtNBoxNodeRenderer$$.$_renderNodeBackground$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeBackground$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    var $DvtNBoxDrawer$$ = $DvtNBoxDataAnimationHandler$$.indicatorSectionWidth + $DvtNBoxDataAnimationHandler$$.iconSectionWidth + $DvtNBoxDataAnimationHandler$$.labelSectionWidth, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataAnimationHandler$$.nodeHeight;
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxStyleUtils$$.$getNodeBorderRadius$($DvtNBoxAutomation$$);
    var $DvtNBoxCategoryNode$$ = $DvtNBoxStyleUtils$$.$getNodeHoverColor$($DvtNBoxAutomation$$), $DvtNBoxCell$$ = $DvtNBoxStyleUtils$$.$getNodeSelectionColor$($DvtNBoxAutomation$$), $DvtNBoxNodeOverflow$$ = new $dvt$$6$$.Rect($DvtNBoxAutomation$$.$getCtx$(), 0, 0, $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$);
    $DvtNBoxNodeOverflow$$.$setFill$(null);
    $DvtNBoxDataAnimationHandler$$ && ($DvtNBoxNodeOverflow$$.$setRx$($DvtNBoxDataAnimationHandler$$), $DvtNBoxNodeOverflow$$.$setRy$($DvtNBoxDataAnimationHandler$$));
    $DvtNBoxNodeOverflow$$.$setHoverStroke$(new $dvt$$6$$.$SolidStroke$($DvtNBoxCategoryNode$$, null, 2), new $dvt$$6$$.$SolidStroke$($DvtNBoxCell$$, null, 4));
    $DvtNBoxNodeOverflow$$.$setSelectedStroke$(new $dvt$$6$$.$SolidStroke$($DvtNBoxCell$$, null, 4), null);
    $DvtNBoxNodeOverflow$$.$setSelectedHoverStroke$(new $dvt$$6$$.$SolidStroke$($DvtNBoxCategoryNode$$, null, 2), new $dvt$$6$$.$SolidStroke$($DvtNBoxCell$$, null, 6));
    $DvtNBoxEventManager$$.$addChild$($DvtNBoxNodeOverflow$$);
    $DvtNBoxEventManager$$.$setSelectionShape$($DvtNBoxNodeOverflow$$);
    $DvtNBoxDrawer$$ = new $dvt$$6$$.Rect($DvtNBoxAutomation$$.$getCtx$(), 0, 0, $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$);
    $DvtNBoxDataAnimationHandler$$ && ($DvtNBoxDrawer$$.$setRx$($DvtNBoxDataAnimationHandler$$), $DvtNBoxDrawer$$.$setRy$($DvtNBoxDataAnimationHandler$$));
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxStyleUtils$$.$getNodeColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxDrawer$$.$setSolidFill$($DvtNBoxDataAnimationHandler$$);
    $DvtNBoxStyleUtils$$.$getNodeBorderColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) && $DvtNBoxStyleUtils$$.$getNodeBorderWidth$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) && $DvtNBoxDrawer$$.$setSolidStroke$($DvtNBoxStyleUtils$$.$getNodeBorderColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), null, $DvtNBoxStyleUtils$$.$getNodeBorderWidth$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$));
    $DvtNBoxDrawer$$.$setStyle$($DvtNBoxKeyboardHandler$$.style).$setClassName$($DvtNBoxKeyboardHandler$$.className);
    $DvtNBoxEventManager$$.$addChild$($DvtNBoxDrawer$$);
    $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDrawer$$, "background");
  };
  $DvtNBoxNodeRenderer$$.$_renderNodeIndicator$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeIndicator$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    var $DvtNBoxDrawer$$ = $DvtNBoxStyleUtils$$.$getNodeColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxCategoryRolloverHandler$$ = $dvt$$6$$.$ColorUtils$.$getContrastingTextColor$($DvtNBoxDrawer$$), $DvtNBoxCategoryNode$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()) ? $DvtNBoxDataAnimationHandler$$.labelSectionWidth + $DvtNBoxDataAnimationHandler$$.iconSectionWidth : 0, $DvtNBoxCell$$ = $DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    if ($DvtNBoxCell$$) {
      var $DvtNBoxCategoryRolloverHandler$$ = $dvt$$6$$.$ColorUtils$.$getContrastingTextColor$($DvtNBoxCell$$), $DvtNBoxNodeOverflow$$ = new $dvt$$6$$.Rect($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCategoryNode$$, 0, $DvtNBoxDataAnimationHandler$$.indicatorSectionWidth, $DvtNBoxDataAnimationHandler$$.nodeHeight);
      $DvtNBoxNodeOverflow$$.$setSolidFill$($DvtNBoxCell$$);
      $DvtNBoxNodeRenderer$$.$_clipIfNecessary$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, $DvtNBoxDataAnimationHandler$$);
      $DvtNBoxEventManager$$.$addChild$($DvtNBoxNodeOverflow$$);
      $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxNodeOverflow$$, $dvt$$6$$.$NBoxConstants$.$INDICATOR$);
    }
    if ($DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getIndicatorIcon$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$)) {
      var $DvtNBoxNodeOverflow$$ = $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$WIDTH$], $DvtNBoxNode$$ = $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$HEIGHT$], $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxCategoryNode$$ + $DvtNBoxDataAnimationHandler$$.indicatorSectionWidth / 2, $DvtNBoxRenderer$$ = $DvtNBoxDataAnimationHandler$$.nodeHeight / 2, $DvtNBoxCategoryNode$$ = $DvtNBoxNodeOverflow$$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$COLOR$] ? $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$COLOR$] : 
      $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDefaults$$ = $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$BORDER_COLOR$], $DvtNBoxDrawerRenderer$$ = $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$BORDER_WIDTH$], $DvtNBoxCellRenderer$$ = $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$BORDER_RADIUS$], $indicatorIconPattern$$ = $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$PATTERN$];
      $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$SOURCE$] ? ($DvtNBoxNodeOverflow$$ = new $dvt$$6$$.$ImageMarker$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxRenderer$$, $DvtNBoxNodeOverflow$$, $DvtNBoxNode$$, $DvtNBoxCellRenderer$$, $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$SOURCE$]), $DvtNBoxNodeOverflow$$.$setPreserveAspectRatio$($DvtNBoxNodeRenderer$$.$_ASPECT_RATIO_SCALING$)) : ($DvtNBoxNodeOverflow$$ = new $dvt$$6$$.$SimpleMarker$($DvtNBoxAutomation$$.$getCtx$(), 
      $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$SHAPE$], $dvt$$6$$.$CSSStyle$.$SKIN_ALTA$, $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxRenderer$$, $DvtNBoxNodeOverflow$$, $DvtNBoxNode$$, $DvtNBoxCellRenderer$$), 0 < $DvtNBoxDrawerRenderer$$ && ($DvtNBoxCategoryNode$$ += $DvtNBoxDrawerRenderer$$));
      $DvtNBoxDrawerRenderer$$ && $DvtNBoxNodeOverflow$$.$setSolidStroke$($DvtNBoxDefaults$$, null, $DvtNBoxDrawerRenderer$$);
      "none" != $indicatorIconPattern$$ ? $DvtNBoxNodeOverflow$$.$setFill$(new $dvt$$6$$.$PatternFill$($indicatorIconPattern$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$)) : $DvtNBoxNodeOverflow$$.$setSolidFill$($DvtNBoxCategoryRolloverHandler$$);
      $DvtNBoxNodeOverflow$$.$setStyle$($DvtNBoxCell$$.style).$setClassName$($DvtNBoxCell$$.className);
      $DvtNBoxCategoryNode$$ > $DvtNBoxDataAnimationHandler$$.indicatorSectionWidth ? $DvtNBoxCellRenderer$$ && $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$SOURCE$] ? $DvtNBoxEventManager$$.$getChildContainer$(!0).$addChild$($DvtNBoxNodeOverflow$$) : ($DvtNBoxNodeRenderer$$.$_clipIfNecessary$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, $DvtNBoxDataAnimationHandler$$), $DvtNBoxEventManager$$.$addChild$($DvtNBoxNodeOverflow$$)) : $DvtNBoxEventManager$$.$addChild$($DvtNBoxNodeOverflow$$);
      $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxNodeOverflow$$, $dvt$$6$$.$NBoxConstants$.$INDICATOR_ICON$);
    }
  };
  $DvtNBoxNodeRenderer$$.$_renderNodeIcon$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeIcon$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    var $DvtNBoxDrawer$$ = $DvtNBoxStyleUtils$$.$getNodeColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxCategoryRolloverHandler$$ = $dvt$$6$$.$ColorUtils$.$getContrastingTextColor$($DvtNBoxDrawer$$), $DvtNBoxCategoryNode$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getIcon$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    if ($DvtNBoxCell$$) {
      var $DvtNBoxNodeOverflow$$ = ($DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$SOURCE$] ? $DvtNBoxCell$$.sourcePaddingRatio : $DvtNBoxCell$$.shapePaddingRatio) * $DvtNBoxDataAnimationHandler$$.nodeHeight, $DvtNBoxNode$$ = $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$WIDTH$] ? $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$WIDTH$] : $DvtNBoxDataAnimationHandler$$.iconWidth ? $DvtNBoxDataAnimationHandler$$.iconWidth : $DvtNBoxDataAnimationHandler$$.iconSectionWidth - 2 * $DvtNBoxNodeOverflow$$, $DvtNBoxNodeOverflow$$ = 
      $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$HEIGHT$] ? $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$HEIGHT$] : $DvtNBoxDataAnimationHandler$$.nodeHeight - 2 * $DvtNBoxNodeOverflow$$, $DvtNBoxCategoryNode$$ = $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNode$$ ? "labelSectionWidth" : "indicatorSectionWidth"] + Math.max($DvtNBoxDataAnimationHandler$$.iconSectionWidth / 2, $DvtNBoxDataAnimationHandler$$.iconWidth ? $DvtNBoxDataAnimationHandler$$.iconWidth / 2 : 0), $DvtNBoxCategoryNodeRenderer$$ = 
      $DvtNBoxDataAnimationHandler$$.nodeHeight / 2, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$COLOR$] ? $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$COLOR$] : $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxRenderer$$ = $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$BORDER_COLOR$], $DvtNBoxDefaults$$ = $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$BORDER_WIDTH$], $DvtNBoxDrawerRenderer$$ = $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$BORDER_RADIUS$], $DvtNBoxCellRenderer$$ = $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$PATTERN$];
      $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$SOURCE$] ? ($DvtNBoxNode$$ = new $dvt$$6$$.$ImageMarker$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCategoryNode$$, $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxNode$$, $DvtNBoxNodeOverflow$$, $DvtNBoxDrawerRenderer$$, $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$SOURCE$]), $DvtNBoxNode$$.$setPreserveAspectRatio$($DvtNBoxNodeRenderer$$.$_ASPECT_RATIO_SCALING$)) : $DvtNBoxNode$$ = new $dvt$$6$$.$SimpleMarker$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$SHAPE$], 
      $dvt$$6$$.$CSSStyle$.$SKIN_ALTA$, $DvtNBoxCategoryNode$$, $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxNode$$ - $DvtNBoxDefaults$$, $DvtNBoxNodeOverflow$$ - $DvtNBoxDefaults$$, $DvtNBoxDrawerRenderer$$);
      $DvtNBoxDefaults$$ && $DvtNBoxNode$$.$setSolidStroke$($DvtNBoxRenderer$$, null, $DvtNBoxDefaults$$);
      "none" != $DvtNBoxCellRenderer$$ ? $DvtNBoxNode$$.$setFill$(new $dvt$$6$$.$PatternFill$($DvtNBoxCellRenderer$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$)) : $DvtNBoxNode$$.$setSolidFill$($DvtNBoxCategoryRolloverHandler$$);
      $DvtNBoxNode$$.$setStyle$($DvtNBoxCell$$.style).$setClassName$($DvtNBoxCell$$.className);
      0 == $DvtNBoxDataAnimationHandler$$.indicatorSectionWidth || 0 == $DvtNBoxDataAnimationHandler$$.labelSectionWidth ? $DvtNBoxDrawerRenderer$$ && $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$SOURCE$] ? $DvtNBoxEventManager$$.$getChildContainer$(!0).$addChild$($DvtNBoxNode$$) : ($DvtNBoxNodeRenderer$$.$_clipIfNecessary$($DvtNBoxAutomation$$, $DvtNBoxNode$$, $DvtNBoxDataAnimationHandler$$), $DvtNBoxEventManager$$.$addChild$($DvtNBoxNode$$)) : $DvtNBoxEventManager$$.$addChild$($DvtNBoxNode$$);
      $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxNode$$, $dvt$$6$$.$NBoxConstants$.$ICON$);
    }
  };
  $DvtNBoxNodeRenderer$$.$_renderNodeLabels$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeLabels$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    var $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDrawer$$.__layout.nodeInterLabelGap, $DvtNBoxCategoryNode$$ = $DvtNBoxDrawer$$.__layout.nodeLabelOnlyStartLabelGap, $DvtNBoxCell$$ = $DvtNBoxDrawer$$.__layout.nodeStartLabelGap, $DvtNBoxDrawer$$ = $DvtNBoxDrawer$$.__layout.nodeEndLabelGap, $DvtNBoxCategoryNode$$ = $DvtNBoxDataAnimationHandler$$.indicatorSectionWidth || $DvtNBoxDataAnimationHandler$$.iconSectionWidth ? $DvtNBoxCell$$ : $DvtNBoxCategoryNode$$, 
    $DvtNBoxCell$$ = $DvtNBoxStyleUtils$$.$getNodeColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxCell$$ = $dvt$$6$$.$ColorUtils$.$getContrastingTextColor$($DvtNBoxCell$$), $DvtNBoxNodeOverflow$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()) ? $DvtNBoxDataAnimationHandler$$.labelSectionWidth - $DvtNBoxCategoryNode$$ : $DvtNBoxDataAnimationHandler$$.indicatorSectionWidth + $DvtNBoxDataAnimationHandler$$.iconSectionWidth + $DvtNBoxCategoryNode$$;
    if ($DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$LABEL$]) {
      var $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getNodeLabel$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxCategoryNodeRenderer$$ = $dvt$$6$$.$TextUtils$.$guessTextDimensions$($DvtNBoxNode$$).$h$;
      $dvt$$6$$.$TextUtils$.$fitText$($DvtNBoxNode$$, $DvtNBoxDataAnimationHandler$$.labelSectionWidth - $DvtNBoxCategoryNode$$ - $DvtNBoxDrawer$$, $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxEventManager$$) && ($DvtNBoxRenderer$$.$positionText$($DvtNBoxNode$$, $DvtNBoxNodeOverflow$$, $DvtNBoxDataAnimationHandler$$.nodeHeight / 2), $DvtNBoxNode$$.$getCSSStyle$() && $DvtNBoxNode$$.$getCSSStyle$().$getStyle$("color") ? $DvtNBoxNode$$.$setSolidFill$($DvtNBoxNode$$.$getCSSStyle$().$getStyle$("color")) : 
      $DvtNBoxNode$$.$setSolidFill$($DvtNBoxCell$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxNode$$, $dvt$$6$$.$NBoxConstants$.$LABEL$));
      if ($DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$SECONDARY_LABEL$]) {
        var $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxDrawerRenderer$$ = $dvt$$6$$.$TextUtils$.$guessTextDimensions$($DvtNBoxDefaults$$).$h$;
        $dvt$$6$$.$TextUtils$.$fitText$($DvtNBoxDefaults$$, $DvtNBoxDataAnimationHandler$$.labelSectionWidth - $DvtNBoxCategoryNode$$ - $DvtNBoxDrawer$$, $DvtNBoxDrawerRenderer$$, $DvtNBoxEventManager$$) && ($DvtNBoxEventManager$$ = ($DvtNBoxDataAnimationHandler$$.nodeHeight - $DvtNBoxCategoryNodeRenderer$$ - $DvtNBoxDrawerRenderer$$ - $DvtNBoxCategoryRolloverHandler$$) / 2, $DvtNBoxRenderer$$.$positionText$($DvtNBoxNode$$, $DvtNBoxNodeOverflow$$, $DvtNBoxEventManager$$ + $DvtNBoxCategoryNodeRenderer$$ / 
        2), $DvtNBoxRenderer$$.$positionText$($DvtNBoxDefaults$$, $DvtNBoxNodeOverflow$$, $DvtNBoxEventManager$$ + $DvtNBoxCategoryNodeRenderer$$ + $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxDrawerRenderer$$ / 2), $DvtNBoxDefaults$$.$getCSSStyle$() && $DvtNBoxDefaults$$.$getCSSStyle$().$getStyle$("color") ? $DvtNBoxDefaults$$.$setSolidFill$($DvtNBoxDefaults$$.$getCSSStyle$().$getStyle$("color")) : $DvtNBoxDefaults$$.$setSolidFill$($DvtNBoxCell$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, 
        $DvtNBoxKeyboardHandler$$, $DvtNBoxDefaults$$, $dvt$$6$$.$NBoxConstants$.$SECONDARY_LABEL$));
      }
    }
  };
  $DvtNBoxNodeRenderer$$.$_getMaxLabelWidth$ = function $$DvtNBoxNodeRenderer$$$$_getMaxLabelWidth$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    for (var $DvtNBoxEventManager$$ = new $dvt$$6$$.$Container$, $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxDataAnimationHandler$$++) {
      var $DvtNBoxDrawer$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$];
      $DvtNBoxEventManager$$.$addChild$($DvtNBoxDataUtils$$.$getNodeLabel$($DvtNBoxAutomation$$, $DvtNBoxDrawer$$));
      $DvtNBoxEventManager$$.$addChild$($DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($DvtNBoxAutomation$$, $DvtNBoxDrawer$$));
    }
    $DvtNBoxAutomation$$.$addChild$($DvtNBoxEventManager$$);
    for ($DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$.$getDimensions$().$w$;0 < $DvtNBoxEventManager$$.$getNumChildren$();) {
      $DvtNBoxEventManager$$.removeChild($DvtNBoxEventManager$$.$getChildAt$(0));
    }
    $DvtNBoxAutomation$$.removeChild($DvtNBoxEventManager$$);
    return $DvtNBoxDataAnimationHandler$$;
  };
  $DvtNBoxNodeRenderer$$.$_clipIfNecessary$ = function $$DvtNBoxNodeRenderer$$$$_clipIfNecessary$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxAutomation$$ = $DvtNBoxStyleUtils$$.$getNodeBorderRadius$($DvtNBoxAutomation$$);
    if ($DvtNBoxAutomation$$ = $DvtNBoxAutomation$$ < $DvtNBoxNodeRenderer$$.$_MIN_CORNER_RADIUS$ ? 0 : $DvtNBoxAutomation$$) {
      var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$.indicatorSectionWidth + $DvtNBoxEventManager$$.iconSectionWidth + $DvtNBoxEventManager$$.labelSectionWidth;
      $DvtNBoxEventManager$$ = $DvtNBoxEventManager$$.nodeHeight;
      var $DvtNBoxDrawer$$ = new $dvt$$6$$.$ClipPath$;
      $DvtNBoxDrawer$$.$addRect$(0, 0, $DvtNBoxDataAnimationHandler$$, $DvtNBoxEventManager$$, $DvtNBoxAutomation$$, $DvtNBoxAutomation$$);
      $DvtNBoxKeyboardHandler$$.$setClipPath$($DvtNBoxDrawer$$);
    }
  };
  $DvtNBoxNodeRenderer$$.$animateUpdate$ = function $$DvtNBoxNodeRenderer$$$$animateUpdate$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$_oldNBox$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxCategoryNode$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxKeyboardHandler$$), $DvtNBoxCell$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxEventManager$$), $DvtNBoxNodeOverflow$$ = $DvtNBoxEventManager$$.$getMatrix$(), $DvtNBoxNode$$ = $DvtNBoxEventManager$$.getParent();
    $DvtNBoxKeyboardHandler$$.$setAlpha$(0);
    $DvtNBoxAutomation$$.$_newNBox$.$addChild$($DvtNBoxEventManager$$);
    $DvtNBoxEventManager$$.$setMatrix$($DvtNBoxCategoryNode$$);
    var $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getNodeScrollableContainer$($DvtNBoxDrawer$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getNodeScrollableContainer$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxEventManager$$);
    if ($DvtNBoxCategoryNodeRenderer$$ || $DvtNBoxDefaults$$) {
      var $DvtNBoxCategoryNode$$ = new $dvt$$6$$.$ClipPath$, $DvtNBoxDrawerRenderer$$;
      if ($DvtNBoxCategoryNodeRenderer$$) {
        $DvtNBoxDrawerRenderer$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCategoryNodeRenderer$$);
        $DvtNBoxDrawerRenderer$$ = new $dvt$$6$$.$Rectangle$($DvtNBoxDrawerRenderer$$.$_tx$, $DvtNBoxDrawerRenderer$$.$_ty$, $DvtNBoxCategoryNodeRenderer$$.getWidth(), $DvtNBoxCategoryNodeRenderer$$.getHeight());
        var $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxDrawer$$, $DvtNBoxKeyboardHandler$$.getData()), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxDrawer$$, $DvtNBoxCategoryNodeRenderer$$), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxDrawer$$, $DvtNBoxCategoryNodeRenderer$$, "background"), $DvtNBoxCellRenderer$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCategoryNodeRenderer$$), $DvtNBoxCategoryNodeRenderer$$ = 
        new $dvt$$6$$.$Rectangle$($DvtNBoxCellRenderer$$.$_tx$, $DvtNBoxCellRenderer$$.$_ty$, $DvtNBoxCategoryNodeRenderer$$.getWidth(), $DvtNBoxCategoryNodeRenderer$$.getHeight());
        $DvtNBoxDrawerRenderer$$ = $DvtNBoxDrawerRenderer$$.$getUnion$($DvtNBoxCategoryNodeRenderer$$);
      }
      $DvtNBoxDefaults$$ && ($DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxDefaults$$), $DvtNBoxDefaults$$ = new $dvt$$6$$.$Rectangle$($DvtNBoxCategoryNodeRenderer$$.$_tx$, $DvtNBoxCategoryNodeRenderer$$.$_ty$, $DvtNBoxDefaults$$.getWidth(), $DvtNBoxDefaults$$.getHeight()), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxEventManager$$.getData()), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxCategoryRolloverHandler$$, 
      $DvtNBoxCategoryNodeRenderer$$), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCategoryNodeRenderer$$, "background"), $DvtNBoxCellRenderer$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCategoryNodeRenderer$$), $DvtNBoxCategoryNodeRenderer$$ = new $dvt$$6$$.$Rectangle$($DvtNBoxCellRenderer$$.$_tx$, $DvtNBoxCellRenderer$$.$_ty$, $DvtNBoxCategoryNodeRenderer$$.getWidth(), $DvtNBoxCategoryNodeRenderer$$.getHeight()), $DvtNBoxDefaults$$ = 
      $DvtNBoxDefaults$$.$getUnion$($DvtNBoxCategoryNodeRenderer$$), $DvtNBoxDrawerRenderer$$ = $DvtNBoxDrawerRenderer$$ ? $DvtNBoxDrawerRenderer$$.$getUnion$($DvtNBoxDefaults$$) : $DvtNBoxDefaults$$);
      $DvtNBoxDrawerRenderer$$ && ($DvtNBoxCategoryNode$$.$addRect$($DvtNBoxDrawerRenderer$$.x, $DvtNBoxDrawerRenderer$$.y, $DvtNBoxDrawerRenderer$$.$w$, $DvtNBoxDrawerRenderer$$.$h$), $DvtNBoxEventManager$$.$setClipPath$($DvtNBoxCategoryNode$$));
    }
    $DvtNBoxCell$$ = new $dvt$$6$$.$AnimMoveTo$($DvtNBoxEventManager$$.$getCtx$(), $DvtNBoxEventManager$$, new $dvt$$6$$.$Point$($DvtNBoxCell$$.$_tx$, $DvtNBoxCell$$.$_ty$), $DvtNBoxAutomation$$.$getAnimationDuration$());
    $dvt$$6$$.$Playable$.$appendOnEnd$($DvtNBoxCell$$, function() {
      $DvtNBoxNode$$.$addChild$($DvtNBoxEventManager$$);
      $DvtNBoxEventManager$$.$setMatrix$($DvtNBoxNodeOverflow$$);
      $DvtNBoxEventManager$$.$setClipPath$(null);
    });
    $DvtNBoxAutomation$$.add($DvtNBoxCell$$, $DvtNBoxDataAnimationHandler$$.$UPDATE$);
    $DvtNBoxCell$$ = new $dvt$$6$$.$CustomAnimation$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxEventManager$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
    $DvtNBoxNodeRenderer$$.$_animateFill$($DvtNBoxCell$$, $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, "background");
    $DvtNBoxNodeRenderer$$.$_animateFill$($DvtNBoxCell$$, $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $dvt$$6$$.$NBoxConstants$.$LABEL$);
    $DvtNBoxNodeRenderer$$.$_animateFill$($DvtNBoxCell$$, $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $dvt$$6$$.$NBoxConstants$.$SECONDARY_LABEL$);
    $DvtNBoxNodeRenderer$$.$_animateFill$($DvtNBoxCell$$, $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $dvt$$6$$.$NBoxConstants$.$INDICATOR$);
    $DvtNBoxNodeRenderer$$.$_animateFill$($DvtNBoxCell$$, $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $dvt$$6$$.$NBoxConstants$.$INDICATOR_ICON$);
    $DvtNBoxNodeRenderer$$.$_animateFill$($DvtNBoxCell$$, $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $dvt$$6$$.$NBoxConstants$.$ICON$);
    $DvtNBoxAutomation$$.add($DvtNBoxCell$$, $DvtNBoxDataAnimationHandler$$.$UPDATE$);
  };
  $DvtNBoxNodeRenderer$$.$_animateFill$ = function $$DvtNBoxNodeRenderer$$$$_animateFill$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$) {
    $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$.getData(), $DvtNBoxCategoryRolloverHandler$$);
    $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxEventManager$$, $DvtNBoxDrawer$$.getData(), $DvtNBoxCategoryRolloverHandler$$);
    $DvtNBoxKeyboardHandler$$ && $DvtNBoxEventManager$$ && ($DvtNBoxAutomation$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_FILL$, $DvtNBoxEventManager$$, $DvtNBoxEventManager$$.$getFill$, $DvtNBoxEventManager$$.$setFill$, $DvtNBoxEventManager$$.$getFill$()), $DvtNBoxEventManager$$.$setFill$($DvtNBoxKeyboardHandler$$.$getFill$()));
  };
  $DvtNBoxNodeRenderer$$.$animateDelete$ = function $$DvtNBoxNodeRenderer$$$$animateDelete$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$DELETE$, $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$_oldNBox$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxCategoryNode$$ = $DvtNBoxDrawer$$.$getOptions$().__layout.__nodeLayout;
    if ($DvtNBoxCategoryNode$$) {
      var $DvtNBoxCell$$ = $DvtNBoxKeyboardHandler$$.getData(), $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNodeIndex$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.ID]);
      if (!isNaN($DvtNBoxNodeOverflow$$) && ($DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxNodeOverflow$$), !$DvtNBoxDataUtils$$.$isNodeHidden$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxNodeOverflow$$))) {
        if ($DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$UPDATE$, $DvtNBoxDataUtils$$.$getGrouping$($DvtNBoxCategoryRolloverHandler$$)) {
          if ($DvtNBoxCell$$ = $DvtNBoxCategoryRolloverHandler$$.$getOptions$().__groups, $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxCategoryRolloverHandler$$) == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($DvtNBoxCell$$ = $DvtNBoxCell$$[$DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxNodeOverflow$$)]), $DvtNBoxNodeOverflow$$ = $DvtNBoxCell$$[$DvtNBoxDataUtils$$.$getNodeGroupId$($DvtNBoxNodeOverflow$$)]) {
            if ($DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxNodeOverflow$$)) {
              $DvtNBoxNodeOverflow$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxNodeOverflow$$), $DvtNBoxCategoryNode$$ = new $dvt$$6$$.$Point$(($DvtNBoxCategoryNode$$.indicatorSectionWidth + $DvtNBoxCategoryNode$$.iconSectionWidth + $DvtNBoxCategoryNode$$.labelSectionWidth) / 2, $DvtNBoxCategoryNode$$.nodeHeight / 2), $DvtNBoxAutomation$$.add(new $dvt$$6$$.$AnimMoveTo$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, new $dvt$$6$$.$Point$($DvtNBoxNodeOverflow$$.$_tx$ - 
              $DvtNBoxCategoryNode$$.x, $DvtNBoxNodeOverflow$$.$_ty$ - $DvtNBoxCategoryNode$$.y), $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxEventManager$$);
            }
          }
        } else {
          if ($DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$ROW$] != $DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.$ROW$] || $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.$COLUMN$] != $DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.$COLUMN$]) {
            $DvtNBoxDrawer$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxKeyboardHandler$$);
            $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getDimensions$();
            $DvtNBoxAutomation$$.$_newNBox$.$addChild$($DvtNBoxKeyboardHandler$$);
            $DvtNBoxKeyboardHandler$$.$setMatrix$($DvtNBoxDrawer$$);
            $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getCellByRowColumn$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.$ROW$], $DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.$COLUMN$]);
            ($DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCell$$.getData(), "overflow")) ? ($DvtNBoxCategoryNode$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxDrawer$$), $DvtNBoxAutomation$$.add(new $dvt$$6$$.$AnimMoveTo$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, new $dvt$$6$$.$Point$($DvtNBoxCategoryNode$$.$_tx$, $DvtNBoxCategoryNode$$.$_ty$), $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$UPDATE$)) : 
            ($DvtNBoxDrawer$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCell$$), $DvtNBoxCell$$ = $DvtNBoxCell$$.$getDimensions$(), $DvtNBoxCategoryNode$$ = new $dvt$$6$$.$Point$(($DvtNBoxCategoryNode$$.indicatorSectionWidth + $DvtNBoxCategoryNode$$.iconSectionWidth + $DvtNBoxCategoryNode$$.labelSectionWidth) / 2, $DvtNBoxCategoryNode$$.nodeHeight / 2), $DvtNBoxAutomation$$.add(new $dvt$$6$$.$AnimMoveTo$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, new $dvt$$6$$.$Point$($DvtNBoxDrawer$$.$_tx$ + 
            $DvtNBoxCell$$.$w$ / 2 - $DvtNBoxCategoryNode$$.x, $DvtNBoxDrawer$$.$_ty$ + $DvtNBoxCell$$.$h$ / 2 - $DvtNBoxCategoryNode$$.y), $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$UPDATE$));
            $DvtNBoxCategoryNode$$ = new $dvt$$6$$.$CustomAnimation$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxNodeOverflow$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
            $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxKeyboardHandler$$, $DvtNBoxKeyboardHandler$$.$getScaleX$, $DvtNBoxKeyboardHandler$$.$setScaleX$, .01);
            $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxKeyboardHandler$$, $DvtNBoxKeyboardHandler$$.$getScaleY$, $DvtNBoxKeyboardHandler$$.$setScaleY$, .01);
            $dvt$$6$$.$Playable$.$appendOnEnd$($DvtNBoxCategoryNode$$, function() {
              $DvtNBoxCategoryRolloverHandler$$.$_deleteContainer$.$addChild$($DvtNBoxKeyboardHandler$$);
            });
            $DvtNBoxAutomation$$.add($DvtNBoxCategoryNode$$, $DvtNBoxDataAnimationHandler$$.$INSERT$);
            $DvtNBoxAutomation$$.add(new $dvt$$6$$.$AnimMoveBy$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, new $dvt$$6$$.$Point$($DvtNBoxEventManager$$.$w$ / 2, $DvtNBoxEventManager$$.$h$ / 2), $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$INSERT$);
            $DvtNBoxAutomation$$.add(new $dvt$$6$$.$AnimFadeOut$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$INSERT$);
            return;
          }
        }
      }
      $DvtNBoxKeyboardHandler$$.$setMatrix$($DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxKeyboardHandler$$));
      if ($DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNodeScrollableContainer$($DvtNBoxDrawer$$, $DvtNBoxKeyboardHandler$$)) {
        $DvtNBoxCategoryNode$$ = new $dvt$$6$$.$ClipPath$, $DvtNBoxDrawer$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxNodeOverflow$$), $DvtNBoxNodeOverflow$$ = new $dvt$$6$$.$Rectangle$($DvtNBoxDrawer$$.$_tx$, $DvtNBoxDrawer$$.$_ty$, $DvtNBoxNodeOverflow$$.$_width$, $DvtNBoxNodeOverflow$$.$_height$), $DvtNBoxCategoryNode$$.$addRect$($DvtNBoxNodeOverflow$$.x, $DvtNBoxNodeOverflow$$.y, $DvtNBoxNodeOverflow$$.$w$, $DvtNBoxNodeOverflow$$.$h$), $DvtNBoxKeyboardHandler$$.$setClipPath$($DvtNBoxCategoryNode$$)
        ;
      }
      $DvtNBoxAutomation$$.add(new $dvt$$6$$.$AnimFadeOut$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxEventManager$$);
      $DvtNBoxCategoryRolloverHandler$$.$_deleteContainer$.$addChild$($DvtNBoxKeyboardHandler$$);
    }
  };
  $DvtNBoxNodeRenderer$$.$animateInsert$ = function $$DvtNBoxNodeRenderer$$$$animateInsert$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$INSERT$, $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$_oldNBox$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryRolloverHandler$$.$getOptions$().__layout.__nodeLayout;
    if ($DvtNBoxCategoryNode$$) {
      var $DvtNBoxCell$$ = $DvtNBoxKeyboardHandler$$.getData()[$dvt$$6$$.$NBoxConstants$.ID], $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getNodeIndex$($DvtNBoxDrawer$$, $DvtNBoxCell$$);
      if (!isNaN($DvtNBoxCell$$) && ($DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxDrawer$$, $DvtNBoxCell$$), !$DvtNBoxDataUtils$$.$isNodeHidden$($DvtNBoxDrawer$$, $DvtNBoxCell$$) && ($DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$UPDATE$, $DvtNBoxDataUtils$$.$getGrouping$($DvtNBoxDrawer$$)))) {
        var $DvtNBoxNodeOverflow$$ = $DvtNBoxDrawer$$.$getOptions$().__groups;
        $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxDrawer$$) == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($DvtNBoxNodeOverflow$$ = $DvtNBoxNodeOverflow$$[$DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxDrawer$$, $DvtNBoxCell$$)]);
        if ($DvtNBoxCell$$ = $DvtNBoxNodeOverflow$$[$DvtNBoxDataUtils$$.$getNodeGroupId$($DvtNBoxCell$$)]) {
          if ($DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxDrawer$$, $DvtNBoxCell$$)) {
            var $DvtNBoxNode$$ = $DvtNBoxKeyboardHandler$$.$getMatrix$(), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxKeyboardHandler$$.getParent(), $DvtNBoxDrawer$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxKeyboardHandler$$), $DvtNBoxCell$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCell$$), $DvtNBoxCategoryNode$$ = new $dvt$$6$$.$Point$(($DvtNBoxCategoryNode$$.indicatorSectionWidth + $DvtNBoxCategoryNode$$.iconSectionWidth + $DvtNBoxCategoryNode$$.labelSectionWidth) / 2, $DvtNBoxCategoryNode$$.nodeHeight / 
            2);
            $DvtNBoxCell$$.translate(-$DvtNBoxCategoryNode$$.x, -$DvtNBoxCategoryNode$$.y);
            $DvtNBoxCategoryRolloverHandler$$.$addChild$($DvtNBoxKeyboardHandler$$);
            $DvtNBoxKeyboardHandler$$.$setMatrix$($DvtNBoxCell$$);
            $DvtNBoxCategoryNode$$ = new $dvt$$6$$.$AnimMoveTo$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, new $dvt$$6$$.$Point$($DvtNBoxDrawer$$.$_tx$, $DvtNBoxDrawer$$.$_ty$), $DvtNBoxAutomation$$.$getAnimationDuration$());
            $dvt$$6$$.$Playable$.$appendOnEnd$($DvtNBoxCategoryNode$$, function() {
              $DvtNBoxKeyboardHandler$$.$setMatrix$($DvtNBoxNode$$);
              $DvtNBoxCategoryNodeRenderer$$.$addChild$($DvtNBoxKeyboardHandler$$);
            });
            $DvtNBoxAutomation$$.add($DvtNBoxCategoryNode$$, $DvtNBoxEventManager$$);
          }
        }
      }
      $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$6$$.$CustomAnimation$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
      $DvtNBoxCategoryRolloverHandler$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxKeyboardHandler$$, $DvtNBoxKeyboardHandler$$.$getAlpha$, $DvtNBoxKeyboardHandler$$.$setAlpha$, $DvtNBoxKeyboardHandler$$.$getAlpha$());
      $DvtNBoxAutomation$$.add($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxEventManager$$);
      $DvtNBoxKeyboardHandler$$.$setAlpha$(0);
    }
  };
  $DvtNBoxNodeRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxNodeRenderer$$$$_addAccessibilityAttributes$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    $DvtNBoxKeyboardHandler$$.$setAriaRole$("img");
    if (!$dvt$$6$$.$Agent$.$deferAriaCreation$()) {
      var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getAriaLabel$();
      $DvtNBoxEventManager$$ && $DvtNBoxKeyboardHandler$$.$setAriaProperty$($dvt$$6$$.$NBoxConstants$.$LABEL$, $DvtNBoxEventManager$$);
    }
  };
  var $DvtNBoxCategoryNodeRenderer$$ = {};
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxCategoryNodeRenderer$$, $dvt$$6$$.$Obj$);
  $DvtNBoxCategoryNodeRenderer$$.$render$ = function $$DvtNBoxCategoryNodeRenderer$$$$render$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    $DvtNBoxCategoryNodeRenderer$$.$_renderNodeBackground$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$);
    var $DvtNBoxDrawer$$ = $DvtNBoxCategoryNodeRenderer$$.$_renderNodeIndicator$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$);
    $DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDrawer$$, $DvtNBoxDataAnimationHandler$$);
    $DvtNBoxCategoryNodeRenderer$$.$_addAccessibilityAttributes$($dvt$$6$$, $DvtNBoxKeyboardHandler$$);
  };
  $DvtNBoxCategoryNodeRenderer$$.$_renderNodeBackground$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeBackground$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxDrawer$$) {
    $DvtNBoxKeyboardHandler$$.__scale = $DvtNBoxDataAnimationHandler$$;
    $DvtNBoxKeyboardHandler$$.__gap = $DvtNBoxDrawer$$;
    $DvtNBoxDrawer$$ = Math.max(0, $DvtNBoxCategoryNodeRenderer$$.$getSideLength$($DvtNBoxKeyboardHandler$$));
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxStyleUtils$$.$getNodeBorderRadius$($DvtNBoxAutomation$$);
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxStyleUtils$$.$getNodeHoverColor$($DvtNBoxAutomation$$), $DvtNBoxCategoryNode$$ = $DvtNBoxStyleUtils$$.$getNodeSelectionColor$($DvtNBoxAutomation$$), $DvtNBoxCell$$ = new $dvt$$6$$.Rect($DvtNBoxAutomation$$.$getCtx$(), -$DvtNBoxDrawer$$ / 2, -$DvtNBoxDrawer$$ / 2, $DvtNBoxDrawer$$, $DvtNBoxDrawer$$);
    $DvtNBoxCell$$.$setFill$(null);
    $DvtNBoxDataAnimationHandler$$ && ($DvtNBoxCell$$.$setRx$($DvtNBoxDataAnimationHandler$$), $DvtNBoxCell$$.$setRy$($DvtNBoxDataAnimationHandler$$));
    $DvtNBoxCell$$.$setHoverStroke$(new $dvt$$6$$.$SolidStroke$($DvtNBoxCategoryRolloverHandler$$, null, 2), new $dvt$$6$$.$SolidStroke$($DvtNBoxCategoryNode$$, null, 4));
    $DvtNBoxCell$$.$setSelectedStroke$(new $dvt$$6$$.$SolidStroke$($DvtNBoxCategoryNode$$, null, 4), null);
    $DvtNBoxCell$$.$setSelectedHoverStroke$(new $dvt$$6$$.$SolidStroke$($DvtNBoxCategoryRolloverHandler$$, null, 2), new $dvt$$6$$.$SolidStroke$($DvtNBoxCategoryNode$$, null, 6));
    $DvtNBoxEventManager$$.$addChild$($DvtNBoxCell$$);
    $DvtNBoxEventManager$$.$setSelectionShape$($DvtNBoxCell$$);
    $DvtNBoxDrawer$$ = new $dvt$$6$$.Rect($DvtNBoxAutomation$$.$getCtx$(), -$DvtNBoxDrawer$$ / 2, -$DvtNBoxDrawer$$ / 2, $DvtNBoxDrawer$$, $DvtNBoxDrawer$$);
    $DvtNBoxDataAnimationHandler$$ && ($DvtNBoxDrawer$$.$setRx$($DvtNBoxDataAnimationHandler$$), $DvtNBoxDrawer$$.$setRy$($DvtNBoxDataAnimationHandler$$));
    $DvtNBoxAutomation$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxDrawer$$.$setSolidFill$($DvtNBoxAutomation$$);
    $DvtNBoxEventManager$$.$addChild$($DvtNBoxDrawer$$);
  };
  $DvtNBoxCategoryNodeRenderer$$.$getSideLength$ = function $$DvtNBoxCategoryNodeRenderer$$$$getSideLength$$($dvt$$6$$) {
    return $dvt$$6$$.__scale * Math.sqrt($dvt$$6$$.nodeIndices.length) - $dvt$$6$$.__gap;
  };
  $DvtNBoxCategoryNodeRenderer$$.$_renderNodeIndicator$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeIndicator$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxDrawer$$) {
    var $DvtNBoxCategoryRolloverHandler$$ = !1, $DvtNBoxCategoryNode$$ = $DvtNBoxAutomation$$.$getOptions$().__layout.markerGap, $DvtNBoxCell$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxNodeOverflow$$ = $DvtNBoxDataAnimationHandler$$ * Math.sqrt($DvtNBoxKeyboardHandler$$.nodeIndices.length) - $DvtNBoxDrawer$$;
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    var $DvtNBoxNode$$ = $dvt$$6$$.$ColorUtils$.$getContrastingTextColor$($DvtNBoxDataAnimationHandler$$), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxNodeOverflow$$ / 4, $DvtNBoxDefaults$$ = 1, $DvtNBoxRenderer$$ = $DvtNBoxCell$$ ? $DvtNBoxNodeOverflow$$ / 2 - $DvtNBoxCategoryNodeRenderer$$ : -$DvtNBoxNodeOverflow$$ / 2;
    ($DvtNBoxDrawer$$ = $DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$)) && ($DvtNBoxDefaults$$ = Math.min($DvtNBoxCategoryNodeRenderer$$ / ($DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$WIDTH$] + 2 * $DvtNBoxCategoryNode$$), $DvtNBoxNodeOverflow$$ / ($DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$HEIGHT$] + 2 * $DvtNBoxCategoryNode$$)));
    if ($DvtNBoxCategoryNode$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$)) {
      $DvtNBoxNode$$ = $dvt$$6$$.$ColorUtils$.$getContrastingTextColor$($DvtNBoxCategoryNode$$), $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$6$$.Rect($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxRenderer$$, -$DvtNBoxNodeOverflow$$ / 2, $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxNodeOverflow$$), $DvtNBoxCategoryRolloverHandler$$.$setSolidFill$($DvtNBoxCategoryNode$$), $DvtNBoxEventManager$$.$addChild$($DvtNBoxCategoryRolloverHandler$$), $DvtNBoxCategoryRolloverHandler$$ = !0;
    }
    $DvtNBoxDrawer$$ && ($DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$COLOR$] ? $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$COLOR$] : $DvtNBoxNode$$, $DvtNBoxCell$$ = new $dvt$$6$$.$SimpleMarker$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$SHAPE$], $dvt$$6$$.$CSSStyle$.$SKIN_ALTA$, ($DvtNBoxCell$$ ? 1 : -1) * ($DvtNBoxNodeOverflow$$ - $DvtNBoxCategoryNodeRenderer$$) / 2, 0, $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$WIDTH$] * $DvtNBoxDefaults$$, 
    $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$HEIGHT$] * $DvtNBoxDefaults$$, $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$BORDER_RADIUS$]), $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$BORDER_WIDTH$] && $DvtNBoxCell$$.$setSolidStroke$($DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$BORDER_COLOR$], null, $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$BORDER_WIDTH$]), $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$PATTERN$] && "none" != $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$PATTERN$] ? $DvtNBoxCell$$.$setFill$(new $dvt$$6$$.$PatternFill$($DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$PATTERN$], 
    $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDataAnimationHandler$$)) : $DvtNBoxCell$$.$setSolidFill$($DvtNBoxCategoryRolloverHandler$$), $DvtNBoxCell$$.$setStyle$($DvtNBoxDrawer$$.style).$setClassName$($DvtNBoxDrawer$$.className), $DvtNBoxEventManager$$.$addChild$($DvtNBoxCell$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxCell$$, $dvt$$6$$.$NBoxConstants$.$INDICATOR_ICON$), $DvtNBoxCategoryRolloverHandler$$ = !0);
    return $DvtNBoxCategoryRolloverHandler$$;
  };
  $DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeCount$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$) {
    var $DvtNBoxCategoryNode$$ = $DvtNBoxAutomation$$.$getOptions$().__layout.categoryNodeLabelGap, $DvtNBoxCell$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxNodeOverflow$$ = $DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($DvtNBoxAutomation$$), $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($DvtNBoxAutomation$$), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, "label");
    if ($DvtNBoxNode$$) {
      if ($DvtNBoxNode$$ = $DvtNBoxKeyboardHandler$$.highlightedCount, 0 == $DvtNBoxNode$$) {
        $DvtNBoxCategoryNodeRenderer$$ && $DvtNBoxCategoryNodeRenderer$$.$setTextString$("");
        $DvtNBoxEventManager$$.$setAlpha$($DvtNBoxNodeOverflow$$);
        return;
      }
    } else {
      $DvtNBoxNode$$ = $DvtNBoxKeyboardHandler$$.nodeIndices.length;
    }
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataAnimationHandler$$ * Math.sqrt($DvtNBoxKeyboardHandler$$.nodeIndices.length) - $DvtNBoxCategoryRolloverHandler$$;
    $DvtNBoxDrawer$$ = $DvtNBoxDrawer$$ ? .75 * $DvtNBoxDataAnimationHandler$$ : $DvtNBoxDataAnimationHandler$$;
    $DvtNBoxCell$$ = ($DvtNBoxCell$$ ? -1 : 1) * ($DvtNBoxDataAnimationHandler$$ - $DvtNBoxDrawer$$) / 2;
    $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxCategoryRolloverHandler$$ = $dvt$$6$$.$ColorUtils$.$getContrastingTextColor$($DvtNBoxCategoryRolloverHandler$$);
    $DvtNBoxNodeOverflow$$ = new $dvt$$6$$.$Rectangle$(0, 0, $DvtNBoxDrawer$$ - 2 * $DvtNBoxCategoryNode$$, $DvtNBoxDataAnimationHandler$$ - 2 * $DvtNBoxCategoryNode$$);
    $DvtNBoxCategoryNodeRenderer$$ ? $DvtNBoxCategoryNodeRenderer$$.$setTextString$("" + $DvtNBoxNode$$) : ($DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), "" + $DvtNBoxNode$$, $DvtNBoxStyleUtils$$.$getCategoryNodeLabelStyle$($DvtNBoxAutomation$$), $dvt$$6$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryNodeRenderer$$, "label"));
    $DvtNBoxAutomation$$ = $DvtNBoxCategoryNodeRenderer$$.$getOptimalFontSize$($DvtNBoxNodeOverflow$$);
    $DvtNBoxCategoryNodeRenderer$$.$setFontSize$($DvtNBoxAutomation$$);
    $dvt$$6$$.$TextUtils$.$fitText$($DvtNBoxCategoryNodeRenderer$$, $DvtNBoxDrawer$$ - 2 * $DvtNBoxCategoryNode$$, $DvtNBoxDataAnimationHandler$$ - 2 * $DvtNBoxCategoryNode$$, $DvtNBoxEventManager$$) && ($DvtNBoxRenderer$$.$positionText$($DvtNBoxCategoryNodeRenderer$$, $DvtNBoxCell$$, 0), $DvtNBoxCategoryNodeRenderer$$.$setSolidFill$($DvtNBoxCategoryRolloverHandler$$));
  };
  $DvtNBoxCategoryNodeRenderer$$.$animateUpdate$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateUpdate$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDrawer$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxKeyboardHandler$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxEventManager$$), $DvtNBoxCategoryNode$$ = $DvtNBoxEventManager$$.$getMatrix$(), $DvtNBoxCell$$ = $DvtNBoxEventManager$$.getParent();
    $DvtNBoxKeyboardHandler$$.$setAlpha$(0);
    $DvtNBoxAutomation$$.$_newNBox$.$addChild$($DvtNBoxEventManager$$);
    $DvtNBoxEventManager$$.$setMatrix$($DvtNBoxDrawer$$);
    $DvtNBoxKeyboardHandler$$ = new $dvt$$6$$.$AnimMoveTo$($DvtNBoxEventManager$$.$getCtx$(), $DvtNBoxEventManager$$, new $dvt$$6$$.$Point$($DvtNBoxCategoryRolloverHandler$$.$_tx$, $DvtNBoxCategoryRolloverHandler$$.$_ty$), $DvtNBoxAutomation$$.$getAnimationDuration$());
    $dvt$$6$$.$Playable$.$appendOnEnd$($DvtNBoxKeyboardHandler$$, function() {
      $DvtNBoxCell$$.$addChild$($DvtNBoxEventManager$$);
      $DvtNBoxEventManager$$.$setMatrix$($DvtNBoxCategoryNode$$);
    });
    $DvtNBoxAutomation$$.add($DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$.$UPDATE$);
  };
  $DvtNBoxCategoryNodeRenderer$$.$animateDelete$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateDelete$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$UPDATE$, $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$_oldNBox$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$_newNBox$;
    $DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$($DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$) && $DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$($DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$) && ($DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$DELETE$);
    $DvtNBoxDrawer$$ = new $dvt$$6$$.$AnimScaleTo$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, new $dvt$$6$$.$Point$(.01, .01), $DvtNBoxAutomation$$.$getAnimationDuration$());
    $DvtNBoxAutomation$$.add($DvtNBoxDrawer$$, $DvtNBoxEventManager$$);
    $DvtNBoxDrawer$$ = new $dvt$$6$$.$AnimFadeOut$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
    $DvtNBoxAutomation$$.add($DvtNBoxDrawer$$, $DvtNBoxEventManager$$);
    $DvtNBoxKeyboardHandler$$.$setMatrix$($DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxKeyboardHandler$$));
    $DvtNBoxCategoryRolloverHandler$$.$_deleteContainer$.$addChild$($DvtNBoxKeyboardHandler$$);
  };
  $DvtNBoxCategoryNodeRenderer$$.$animateInsert$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateInsert$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$UPDATE$, $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$_oldNBox$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$_newNBox$;
    $DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$($DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$) && $DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$($DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$) && ($DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$INSERT$);
    $DvtNBoxKeyboardHandler$$.$setScaleX$(.01);
    $DvtNBoxKeyboardHandler$$.$setScaleY$(.01);
    $DvtNBoxDrawer$$ = new $dvt$$6$$.$AnimScaleTo$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, new $dvt$$6$$.$Point$(1, 1), $DvtNBoxAutomation$$.$getAnimationDuration$());
    $DvtNBoxAutomation$$.add($DvtNBoxDrawer$$, $DvtNBoxEventManager$$);
    $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$6$$.$CustomAnimation$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
    $DvtNBoxCategoryRolloverHandler$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxKeyboardHandler$$, $DvtNBoxKeyboardHandler$$.$getAlpha$, $DvtNBoxKeyboardHandler$$.$setAlpha$, $DvtNBoxKeyboardHandler$$.$getAlpha$());
    $DvtNBoxAutomation$$.add($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxKeyboardHandler$$.$setAlpha$(0);
  };
  $DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$ = function $$DvtNBoxCategoryNodeRenderer$$$$isGroupingEqual$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$($dvt$$6$$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getNodeCount$($dvt$$6$$), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$), $DvtNBoxCategoryRolloverHandler$$ = !1;
    if ($DvtNBoxKeyboardHandler$$ == $DvtNBoxEventManager$$ && $DvtNBoxDataAnimationHandler$$ == $DvtNBoxDrawer$$) {
      for ($DvtNBoxCategoryRolloverHandler$$ = !0, $DvtNBoxKeyboardHandler$$ = 0;$DvtNBoxKeyboardHandler$$ < $DvtNBoxDataAnimationHandler$$;$DvtNBoxKeyboardHandler$$++) {
        if ($DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getNodeGroupId$($DvtNBoxDataUtils$$.$getNode$($dvt$$6$$, $DvtNBoxKeyboardHandler$$)), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getNodeGroupId$($DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$)), $DvtNBoxEventManager$$ != $DvtNBoxDrawer$$) {
          $DvtNBoxCategoryRolloverHandler$$ = !1;
          break;
        }
      }
    }
    return $DvtNBoxCategoryRolloverHandler$$;
  };
  $DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$ = function $$DvtNBoxCategoryNodeRenderer$$$$isMaximizeEqual$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($dvt$$6$$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($dvt$$6$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$);
    return $DvtNBoxKeyboardHandler$$ == $DvtNBoxDataAnimationHandler$$ && $DvtNBoxEventManager$$ == $DvtNBoxDrawer$$;
  };
  $DvtNBoxCategoryNodeRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxCategoryNodeRenderer$$$$_addAccessibilityAttributes$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    $DvtNBoxKeyboardHandler$$.$setAriaRole$("img");
    if (!$dvt$$6$$.$Agent$.$deferAriaCreation$()) {
      var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getAriaLabel$();
      $DvtNBoxEventManager$$ && $DvtNBoxKeyboardHandler$$.$setAriaProperty$($dvt$$6$$.$NBoxConstants$.$LABEL$, $DvtNBoxEventManager$$);
    }
  };
  var $DvtNBoxDrawerRenderer$$ = {};
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxDrawerRenderer$$, $dvt$$6$$.$Obj$);
  $DvtNBoxDrawerRenderer$$.$render$ = function $$DvtNBoxDrawerRenderer$$$$render$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDrawerRenderer$$.$getDrawerBounds$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$);
    $DvtNBoxKeyboardHandler$$.__drawerBounds = $DvtNBoxDataAnimationHandler$$;
    $DvtNBoxEventManager$$.$setTranslate$($DvtNBoxDataAnimationHandler$$.x, $DvtNBoxDataAnimationHandler$$.y);
    $DvtNBoxDataAnimationHandler$$ = new $dvt$$6$$.$KeyboardFocusEffect$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxEventManager$$, new $dvt$$6$$.$Rectangle$(-1, -1, $DvtNBoxDataAnimationHandler$$.$w$ + 2, $DvtNBoxDataAnimationHandler$$.$h$ + 2));
    $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$, "focusEffect");
    $DvtNBoxDrawerRenderer$$.$_renderBody$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxDrawerRenderer$$.$_renderHeader$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxDrawerRenderer$$.$_addAccessibilityAttributes$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
  };
  $DvtNBoxDrawerRenderer$$.$_renderHeader$ = function $$DvtNBoxDrawerRenderer$$$$_renderHeader$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxDrawer$$ = $DvtNBoxDataAnimationHandler$$.__layout.drawerButtonGap, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataAnimationHandler$$.__layout.drawerStartGap, $DvtNBoxCategoryNode$$ = $DvtNBoxDataAnimationHandler$$.__layout.drawerLabelGap, $DvtNBoxCell$$ = $DvtNBoxDataAnimationHandler$$.__layout.drawerCountHorizontalGap, $DvtNBoxNodeOverflow$$ = $DvtNBoxDataAnimationHandler$$.__layout.drawerCountVerticalGap, $DvtNBoxNode$$ = 
    $DvtNBoxDataAnimationHandler$$.__layout.drawerHeaderHeight, $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataAnimationHandler$$.__layout.nodeIndicatorGap, $DvtNBoxDefaults$$ = $DvtNBoxDataAnimationHandler$$.__layout.nodeSwatchSize, $DvtNBoxDrawerRenderer$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxCellRenderer$$ = $DvtNBoxDataUtils$$.$getCategoryNode$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.ID]), $DvtNBoxNodeRenderer$$ = $DvtNBoxCellRenderer$$.nodeIndices.length;
    $DvtNBoxKeyboardHandler$$ = $DvtNBoxKeyboardHandler$$.__drawerBounds;
    var $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$ = $DvtNBoxDataAnimationHandler$$._resources.close_ena, $closeWidth$$1$$ = $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$.width;
    if ($DvtNBoxKeyboardHandler$$.$w$ > $closeWidth$$1$$) {
      var $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$ = $DvtNBoxDataAnimationHandler$$._resources.close_ovr, $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ = $DvtNBoxDataAnimationHandler$$._resources.close_dwn, $DvtNBoxDataAnimationHandler$$ = $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$.height, $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$ = new $dvt$$6$$.Image($DvtNBoxAutomation$$.$getCtx$(), $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$.src, 0, 0, $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$.width, 
      $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$.height), $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$ = new $dvt$$6$$.Image($DvtNBoxAutomation$$.$getCtx$(), $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$.src, 0, 0, $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$.width, $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$.height), $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ = new $dvt$$6$$.Image($DvtNBoxAutomation$$.$getCtx$(), $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$.src, 
      0, 0, $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$.width, $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$.height), $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$ = new $dvt$$6$$.$Button$($DvtNBoxAutomation$$.$getCtx$(), $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$, $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$, $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$, null, null, $DvtNBoxEventManager$$.$closeDrawer$, $DvtNBoxEventManager$$);
      $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$.$setTranslate$($DvtNBoxDrawerRenderer$$ ? Math.min(($DvtNBoxKeyboardHandler$$.$w$ - $closeWidth$$1$$) / 2, $DvtNBoxDrawer$$) : Math.max(($DvtNBoxKeyboardHandler$$.$w$ - $closeWidth$$1$$) / 2, $DvtNBoxKeyboardHandler$$.$w$ - $DvtNBoxDrawer$$ - $closeWidth$$1$$), $DvtNBoxNode$$ / 2 - $DvtNBoxDataAnimationHandler$$ / 2);
      $DvtNBoxEventManager$$.$addChild$($closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$);
    }
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeColor$($DvtNBoxAutomation$$, $DvtNBoxCellRenderer$$), $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$ = $dvt$$6$$.$ColorUtils$.$getContrastingTextColor$($DvtNBoxDataAnimationHandler$$), $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$ = ($closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$($DvtNBoxAutomation$$, $DvtNBoxCellRenderer$$)) ? $dvt$$6$$.$ColorUtils$.$getContrastingTextColor$($closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$) : 
    $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$, $indicatorIcon$$7$$ = $DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$($DvtNBoxAutomation$$, $DvtNBoxCellRenderer$$), $countLabelSectionWidth_indicatorIconWidth$$3$$ = $DvtNBoxDefaults$$, $indicatorMarker$$2_scale$$52$$ = 1;
    if ($indicatorIcon$$7$$) {
      var $halign$$16_indicatorIconW$$ = $indicatorIcon$$7$$[$dvt$$6$$.$NBoxConstants$.$WIDTH$], $indicatorMarker$$2_scale$$52$$ = $DvtNBoxDefaults$$ / $indicatorIcon$$7$$[$dvt$$6$$.$NBoxConstants$.$HEIGHT$], $countLabelSectionWidth_indicatorIconWidth$$3$$ = $indicatorMarker$$2_scale$$52$$ * $halign$$16_indicatorIconW$$, $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$ = $indicatorIcon$$7$$[$dvt$$6$$.$NBoxConstants$.$COLOR$] ? $indicatorIcon$$7$$[$dvt$$6$$.$NBoxConstants$.$COLOR$] : $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$
    }
    var $countBorderRadius_indicatorSection_indicatorSectionPath$$ = $DvtNBoxStyleUtils$$.$getDrawerCountBorderRadius$($DvtNBoxAutomation$$), $halign$$16_indicatorIconW$$ = $DvtNBoxDrawerRenderer$$ ? $dvt$$6$$.$OutputText$.$H_ALIGN_RIGHT$ : $dvt$$6$$.$OutputText$.$H_ALIGN_LEFT$, $DvtNBoxNodeRenderer$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), "" + $DvtNBoxNodeRenderer$$, $DvtNBoxStyleUtils$$.$getDrawerCountLabelStyle$($DvtNBoxAutomation$$), $halign$$16_indicatorIconW$$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$), 
    $countLabelDims_indicatorX$$2$$ = $DvtNBoxNodeRenderer$$.$measureDimensions$(), $DvtNBoxNodeOverflow$$ = $countLabelDims_indicatorX$$2$$.$h$ + 2 * $DvtNBoxNodeOverflow$$, $DvtNBoxDefaults$$ = $indicatorIcon$$7$$ ? $countLabelSectionWidth_indicatorIconWidth$$3$$ + 2 * $DvtNBoxCategoryNodeRenderer$$ : $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ ? $DvtNBoxDefaults$$ : 0, $countLabelSectionWidth_indicatorIconWidth$$3$$ = $countLabelDims_indicatorX$$2$$.$w$ + 2 * $DvtNBoxCell$$, $DvtNBoxCategoryNodeRenderer$$ = 
    $DvtNBoxDefaults$$ + $countLabelSectionWidth_indicatorIconWidth$$3$$, $countIndicatorPath_countIndicatorShape$$;
    $DvtNBoxKeyboardHandler$$.$w$ - $closeWidth$$1$$ - 2 * $DvtNBoxDrawer$$ - $DvtNBoxCategoryRolloverHandler$$ > $DvtNBoxCategoryNodeRenderer$$ && ($countIndicatorPath_countIndicatorShape$$ = $dvt$$6$$.$PathUtils$.$roundedRectangle$(0, 0, $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxNodeOverflow$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$), 
    $countIndicatorPath_countIndicatorShape$$ = new $dvt$$6$$.$Path$($DvtNBoxAutomation$$.$getCtx$(), $countIndicatorPath_countIndicatorShape$$), $countIndicatorPath_countIndicatorShape$$.$setSolidFill$($DvtNBoxDataAnimationHandler$$), $DvtNBoxEventManager$$.$addChild$($countIndicatorPath_countIndicatorShape$$), $countLabelDims_indicatorX$$2$$ = $DvtNBoxDrawerRenderer$$ ? $countLabelSectionWidth_indicatorIconWidth$$3$$ : 0, 0 < $DvtNBoxDefaults$$ && ($closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ && 
    ($countBorderRadius_indicatorSection_indicatorSectionPath$$ = $dvt$$6$$.$PathUtils$.$roundedRectangle$($countLabelDims_indicatorX$$2$$, 0, $DvtNBoxDefaults$$, $DvtNBoxNodeOverflow$$, $DvtNBoxDrawerRenderer$$ ? 0 : $countBorderRadius_indicatorSection_indicatorSectionPath$$, $DvtNBoxDrawerRenderer$$ ? $countBorderRadius_indicatorSection_indicatorSectionPath$$ : 0, $DvtNBoxDrawerRenderer$$ ? $countBorderRadius_indicatorSection_indicatorSectionPath$$ : 0, $DvtNBoxDrawerRenderer$$ ? 0 : $countBorderRadius_indicatorSection_indicatorSectionPath$$), 
    $countBorderRadius_indicatorSection_indicatorSectionPath$$ = new $dvt$$6$$.$Path$($DvtNBoxAutomation$$.$getCtx$(), $countBorderRadius_indicatorSection_indicatorSectionPath$$), $countBorderRadius_indicatorSection_indicatorSectionPath$$.$setSolidFill$($closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$), $countIndicatorPath_countIndicatorShape$$.$addChild$($countBorderRadius_indicatorSection_indicatorSectionPath$$)), $indicatorIcon$$7$$ && ($indicatorMarker$$2_scale$$52$$ = new $dvt$$6$$.$SimpleMarker$($DvtNBoxAutomation$$.$getCtx$(), 
    $indicatorIcon$$7$$[$dvt$$6$$.$NBoxConstants$.$SHAPE$], $dvt$$6$$.$CSSStyle$.$SKIN_ALTA$, $countLabelDims_indicatorX$$2$$ + $DvtNBoxDefaults$$ / 2, $DvtNBoxNodeOverflow$$ / 2, $indicatorIcon$$7$$[$dvt$$6$$.$NBoxConstants$.$WIDTH$] * $indicatorMarker$$2_scale$$52$$, $indicatorIcon$$7$$[$dvt$$6$$.$NBoxConstants$.$HEIGHT$] * $indicatorMarker$$2_scale$$52$$, $indicatorIcon$$7$$[$dvt$$6$$.$NBoxConstants$.$BORDER_RADIUS$]), $indicatorIcon$$7$$[$dvt$$6$$.$NBoxConstants$.$BORDER_WIDTH$] && $indicatorMarker$$2_scale$$52$$.$setSolidStroke$($indicatorIcon$$7$$[$dvt$$6$$.$NBoxConstants$.$BORDER_COLOR$], 
    null, $indicatorIcon$$7$$[$dvt$$6$$.$NBoxConstants$.$BORDER_WIDTH$]), $indicatorIcon$$7$$[$dvt$$6$$.$NBoxConstants$.$PATTERN$] && "none" != $indicatorIcon$$7$$[$dvt$$6$$.$NBoxConstants$.$PATTERN$] ? $indicatorMarker$$2_scale$$52$$.$setFill$(new $dvt$$6$$.$PatternFill$($indicatorIcon$$7$$[$dvt$$6$$.$NBoxConstants$.$PATTERN$], $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$, $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ ? $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ : $DvtNBoxDataAnimationHandler$$)) : 
    $indicatorMarker$$2_scale$$52$$.$setSolidFill$($closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$), $indicatorMarker$$2_scale$$52$$.$setStyle$($indicatorIcon$$7$$.style).$setClassName$($indicatorIcon$$7$$.className), $countIndicatorPath_countIndicatorShape$$.$addChild$($indicatorMarker$$2_scale$$52$$))), $countIndicatorPath_countIndicatorShape$$.$addChild$($DvtNBoxNodeRenderer$$), $DvtNBoxNodeRenderer$$.$setSolidFill$($closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$), $DvtNBoxRenderer$$.$positionText$($DvtNBoxNodeRenderer$$, 
    $DvtNBoxDrawerRenderer$$ ? $countLabelSectionWidth_indicatorIconWidth$$3$$ - $DvtNBoxCell$$ : $DvtNBoxDefaults$$ + $DvtNBoxCell$$, $DvtNBoxNodeOverflow$$ / 2));
    $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxCellRenderer$$).$getLabel$();
    $DvtNBoxAutomation$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCell$$, $DvtNBoxStyleUtils$$.$getDrawerLabelStyle$($DvtNBoxAutomation$$), $halign$$16_indicatorIconW$$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$);
    $DvtNBoxCell$$ = 0;
    $dvt$$6$$.$TextUtils$.$fitText$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$.$w$ - $DvtNBoxCategoryRolloverHandler$$ - $DvtNBoxCategoryNode$$ - $DvtNBoxCategoryNodeRenderer$$ - 2 * $DvtNBoxDrawer$$ - $closeWidth$$1$$, $DvtNBoxNode$$, $DvtNBoxEventManager$$) && ($DvtNBoxRenderer$$.$positionText$($DvtNBoxAutomation$$, $DvtNBoxDrawerRenderer$$ ? $DvtNBoxKeyboardHandler$$.$w$ - $DvtNBoxCategoryRolloverHandler$$ : $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxNode$$ / 2), $DvtNBoxCell$$ = $DvtNBoxAutomation$$.$measureDimensions$().$w$ + 
    $DvtNBoxCategoryNode$$);
    $countIndicatorPath_countIndicatorShape$$ && $countIndicatorPath_countIndicatorShape$$.$setTranslate$($DvtNBoxDrawerRenderer$$ ? $DvtNBoxKeyboardHandler$$.$w$ - $DvtNBoxCategoryRolloverHandler$$ - $DvtNBoxCategoryNodeRenderer$$ - $DvtNBoxCell$$ : $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxCell$$, ($DvtNBoxNode$$ - $DvtNBoxNodeOverflow$$) / 2);
  };
  $DvtNBoxDrawerRenderer$$.$_renderBody$ = function $$DvtNBoxDrawerRenderer$$$$_renderBody$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxDrawer$$ = $DvtNBoxDataAnimationHandler$$.__layout.gridGap, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataAnimationHandler$$.__layout.drawerHeaderHeight, $DvtNBoxCategoryNode$$ = $DvtNBoxKeyboardHandler$$.__drawerBounds, $DvtNBoxDataAnimationHandler$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxCell$$ = $DvtNBoxStyleUtils$$.$getDrawerBorderRadius$($DvtNBoxAutomation$$), $DvtNBoxNodeOverflow$$ = 
    $DvtNBoxStyleUtils$$.$getDrawerBorderColor$($DvtNBoxAutomation$$), $DvtNBoxCell$$ = $dvt$$6$$.$PathUtils$.$roundedRectangle$(0, 0, $DvtNBoxCategoryNode$$.$w$, $DvtNBoxCategoryNode$$.$h$, $DvtNBoxCell$$, $DvtNBoxCell$$, $DvtNBoxCell$$, $DvtNBoxCell$$), $DvtNBoxCell$$ = new $dvt$$6$$.$Path$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCell$$);
    $DvtNBoxRenderer$$.$setFill$($DvtNBoxCell$$, $DvtNBoxStyleUtils$$.$getDrawerBackground$($DvtNBoxAutomation$$));
    $DvtNBoxCell$$.$setSolidStroke$($DvtNBoxNodeOverflow$$);
    $DvtNBoxCell$$.$setPixelHinting$();
    $DvtNBoxEventManager$$.$addChild$($DvtNBoxCell$$);
    $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxCell$$, "background");
    $DvtNBoxKeyboardHandler$$.__childArea = new $dvt$$6$$.$Rectangle$($DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxDrawer$$, Math.max($DvtNBoxCategoryNode$$.$w$ - 2 * $DvtNBoxDrawer$$, 0), Math.max($DvtNBoxCategoryNode$$.$h$ - $DvtNBoxCategoryRolloverHandler$$ - 2 * $DvtNBoxDrawer$$, 0));
    $DvtNBoxCategoryNode$$ = new $dvt$$6$$.$SimpleScrollableContainer$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCategoryNode$$.$w$, $DvtNBoxCategoryNode$$.$h$ - $DvtNBoxCategoryRolloverHandler$$);
    $DvtNBoxCategoryNode$$.$setTranslate$(0, $DvtNBoxCategoryRolloverHandler$$);
    $DvtNBoxEventManager$$.$addChild$($DvtNBoxCategoryNode$$);
    $DvtNBoxEventManager$$.$setChildContainer$($DvtNBoxCategoryNode$$);
    $DvtNBoxEventManager$$ = $DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($DvtNBoxAutomation$$);
    $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($DvtNBoxAutomation$$);
    $DvtNBoxCategoryNode$$ = {};
    if ($DvtNBoxCategoryRolloverHandler$$) {
      for ($DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxCategoryRolloverHandler$$.length;$DvtNBoxNodeOverflow$$++) {
        $DvtNBoxCategoryNode$$[$DvtNBoxCategoryRolloverHandler$$[$DvtNBoxNodeOverflow$$][$dvt$$6$$.$NBoxConstants$.ID]] = !0;
      }
    }
    for (var $DvtNBoxNodeOverflow$$ = $DvtNBoxDrawerRenderer$$.$calculateNodeOrders$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxCell$$ = $DvtNBoxNodeRenderer$$.$calculateNodeDrawerLayout$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxNodeOverflow$$), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxCell$$.indicatorSectionWidth + $DvtNBoxCell$$.iconSectionWidth + $DvtNBoxCell$$.labelSectionWidth + $DvtNBoxDrawer$$, $DvtNBoxDefaults$$ = $DvtNBoxCell$$.nodeHeight + $DvtNBoxDrawer$$, 
    $DvtNBoxCellRenderer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$).$getChildContainer$(), $n$$24$$ = 0;$n$$24$$ < $DvtNBoxNodeOverflow$$.length;$n$$24$$++) {
      var $node$$277$$ = $DvtNBoxNodeOverflow$$[$n$$24$$];
      if (0 != $DvtNBoxCell$$.drawerLayout[$dvt$$6$$.$NBoxConstants$.$COLUMNS$] && 0 != $DvtNBoxCell$$.drawerLayout[$dvt$$6$$.$NBoxConstants$.$ROWS$]) {
        var $nodeContainer$$11_prevNode$$1$$ = new $DvtNBoxNode$$($DvtNBoxAutomation$$, $node$$277$$), $gridXOrigin$$1$$ = $DvtNBoxKeyboardHandler$$.__childArea.x + ($DvtNBoxKeyboardHandler$$.__childArea.$w$ - $DvtNBoxCell$$.drawerLayout[$dvt$$6$$.$NBoxConstants$.$COLUMNS$] * $DvtNBoxCategoryNodeRenderer$$ + $DvtNBoxDrawer$$) / 2, $gridYOrigin$$1$$ = $DvtNBoxDrawer$$, $gridColumn$$1$$ = $n$$24$$ % $DvtNBoxCell$$.drawerLayout[$dvt$$6$$.$NBoxConstants$.$COLUMNS$];
        $DvtNBoxDataAnimationHandler$$ && ($gridColumn$$1$$ = $DvtNBoxCell$$.drawerLayout[$dvt$$6$$.$NBoxConstants$.$COLUMNS$] - $gridColumn$$1$$ - 1);
        $nodeContainer$$11_prevNode$$1$$.$setTranslate$($gridXOrigin$$1$$ + $DvtNBoxCategoryNodeRenderer$$ * $gridColumn$$1$$, $gridYOrigin$$1$$ + $DvtNBoxDefaults$$ * Math.floor($n$$24$$ / $DvtNBoxCell$$.drawerLayout[$dvt$$6$$.$NBoxConstants$.$COLUMNS$]));
        $nodeContainer$$11_prevNode$$1$$.$render$($DvtNBoxCellRenderer$$.$_container$, $DvtNBoxCell$$);
        $DvtNBoxCategoryRolloverHandler$$ && !$DvtNBoxCategoryNode$$[$node$$277$$[$dvt$$6$$.$NBoxConstants$.ID]] && $nodeContainer$$11_prevNode$$1$$.$setAlpha$($DvtNBoxEventManager$$);
        if ($nodeContainer$$11_prevNode$$1$$ = 0 < $n$$24$$ ? $DvtNBoxNodeOverflow$$[$n$$24$$ - 1] : null) {
          $node$$277$$.__prev = $nodeContainer$$11_prevNode$$1$$, $nodeContainer$$11_prevNode$$1$$.__next = $node$$277$$;
        }
      }
    }
    $DvtNBoxCellRenderer$$.$prepareContentPane$();
  };
  $DvtNBoxDrawerRenderer$$.$calculateNodeOrders$ = function $$DvtNBoxDrawerRenderer$$$$calculateNodeOrders$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = ["normal"], $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($DvtNBoxAutomation$$), $DvtNBoxDrawer$$ = {};
    if ($DvtNBoxDataAnimationHandler$$) {
      for (var $DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxCategoryRolloverHandler$$++) {
        $DvtNBoxDrawer$$[$DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryRolloverHandler$$][$dvt$$6$$.$NBoxConstants$.ID]] = !0;
      }
    }
    var $DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getSelectedItems$($DvtNBoxAutomation$$), $DvtNBoxCell$$ = {};
    if ($DvtNBoxCategoryNode$$) {
      for ($DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxCategoryNode$$.length;$DvtNBoxCategoryRolloverHandler$$++) {
        $DvtNBoxCell$$[$DvtNBoxCategoryNode$$[$DvtNBoxCategoryRolloverHandler$$]] = !0;
      }
    }
    $DvtNBoxDataAnimationHandler$$ ? $DvtNBoxEventManager$$ = $DvtNBoxCategoryNode$$ ? ["highlighted-selected", "highlighted-unselected", "unhighlighted-selected", "unhighlighted-unselected"] : ["highlighted-unselected", "unhighlighted-unselected"] : $DvtNBoxCategoryNode$$ && ($DvtNBoxEventManager$$ = ["unhighlighted-selected", "unhighlighted-unselected"]);
    for (var $DvtNBoxDataAnimationHandler$$ = [], $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getCategoryNode$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.ID]), $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryRolloverHandler$$.nodeIndices.length, $DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxEventManager$$.length;$DvtNBoxNodeOverflow$$++) {
      for (var $DvtNBoxNode$$ = 0;$DvtNBoxNode$$ < $DvtNBoxCategoryNode$$;$DvtNBoxNode$$++) {
        var $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxCategoryRolloverHandler$$.nodeIndices[$DvtNBoxNode$$]);
        ("normal" == $DvtNBoxEventManager$$[$DvtNBoxNodeOverflow$$] || "highlighted-selected" == $DvtNBoxEventManager$$[$DvtNBoxNodeOverflow$$] && $DvtNBoxDrawer$$[$DvtNBoxCategoryNodeRenderer$$[$dvt$$6$$.$NBoxConstants$.ID]] && $DvtNBoxCell$$[$DvtNBoxCategoryNodeRenderer$$[$dvt$$6$$.$NBoxConstants$.ID]] || "highlighted-unselected" == $DvtNBoxEventManager$$[$DvtNBoxNodeOverflow$$] && $DvtNBoxDrawer$$[$DvtNBoxCategoryNodeRenderer$$[$dvt$$6$$.$NBoxConstants$.ID]] && !$DvtNBoxCell$$[$DvtNBoxCategoryNodeRenderer$$[$dvt$$6$$.$NBoxConstants$.ID]] || 
        "unhighlighted-selected" == $DvtNBoxEventManager$$[$DvtNBoxNodeOverflow$$] && !$DvtNBoxDrawer$$[$DvtNBoxCategoryNodeRenderer$$[$dvt$$6$$.$NBoxConstants$.ID]] && $DvtNBoxCell$$[$DvtNBoxCategoryNodeRenderer$$[$dvt$$6$$.$NBoxConstants$.ID]] || "unhighlighted-unselected" == $DvtNBoxEventManager$$[$DvtNBoxNodeOverflow$$] && !$DvtNBoxDrawer$$[$DvtNBoxCategoryNodeRenderer$$[$dvt$$6$$.$NBoxConstants$.ID]] && !$DvtNBoxCell$$[$DvtNBoxCategoryNodeRenderer$$[$dvt$$6$$.$NBoxConstants$.ID]]) && $DvtNBoxDataAnimationHandler$$.push($DvtNBoxCategoryNodeRenderer$$);
      }
    }
    return $DvtNBoxDataAnimationHandler$$;
  };
  $DvtNBoxDrawerRenderer$$.$getDrawerBounds$ = function $$DvtNBoxDrawerRenderer$$$$getDrawerBounds$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$().__layout.gridGap, $DvtNBoxDrawer$$ = $DvtNBoxCellRenderer$$.$getCellLayout$($DvtNBoxAutomation$$), $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$6$$.$Rectangle$($DvtNBoxEventManager$$.x + $DvtNBoxDataAnimationHandler$$, $DvtNBoxEventManager$$.y + $DvtNBoxDataAnimationHandler$$, Math.max($DvtNBoxEventManager$$.$w$ - 2 * $DvtNBoxDataAnimationHandler$$, 0), Math.max($DvtNBoxEventManager$$.$h$ - 2 * $DvtNBoxDataAnimationHandler$$, 
    0));
    $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$) == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($DvtNBoxKeyboardHandler$$ = parseInt($DvtNBoxKeyboardHandler$$.id.substring(0, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.ID].indexOf(":"))), $DvtNBoxDataUtils$$.$isCellMaximized$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) && ($DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxCategoryRolloverHandler$$ = 
    $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$ROW$]), $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$COLUMN$]), $DvtNBoxAutomation$$ = $DvtNBoxCellRenderer$$.$getCellDimensions$($DvtNBoxAutomation$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$), $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$6$$.$Rectangle$($DvtNBoxAutomation$$.x + 
    $DvtNBoxDataAnimationHandler$$, $DvtNBoxAutomation$$.y + $DvtNBoxDataAnimationHandler$$ + $DvtNBoxDrawer$$.maximizedHeaderSize, Math.max($DvtNBoxAutomation$$.$w$ - 2 * $DvtNBoxDataAnimationHandler$$, 0), Math.max($DvtNBoxAutomation$$.$h$ - $DvtNBoxDrawer$$.maximizedHeaderSize - 2 * $DvtNBoxDataAnimationHandler$$, 0))));
    return $DvtNBoxCategoryRolloverHandler$$;
  };
  $DvtNBoxDrawerRenderer$$.$animateUpdate$ = function $$DvtNBoxDrawerRenderer$$$$animateUpdate$$() {
    console.log("********************* DvtNBoxDrawerRenderer.animateUpdate *********************");
  };
  $DvtNBoxDrawerRenderer$$.$animateDelete$ = function $$DvtNBoxDrawerRenderer$$$$animateDelete$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$UPDATE$, $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$.getData().__drawerBounds, $DvtNBoxCategoryNode$$ = $DvtNBoxKeyboardHandler$$.getData()[$dvt$$6$$.$NBoxConstants$.ID], $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getCategoryNode$($DvtNBoxDrawer$$, $DvtNBoxCategoryNode$$);
    if ($DvtNBoxCell$$) {
      var $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryNodeRenderer$$.$getSideLength$($DvtNBoxCell$$), $DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryNode$$ / $DvtNBoxCategoryRolloverHandler$$.$w$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryNode$$ / $DvtNBoxCategoryRolloverHandler$$.$h$;
      if ($DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxDrawer$$, $DvtNBoxCell$$)) {
        $DvtNBoxCell$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCell$$), $DvtNBoxCategoryNode$$ = new $dvt$$6$$.$Matrix$($DvtNBoxNodeOverflow$$, 0, 0, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCell$$.$_tx$ - $DvtNBoxCategoryNode$$ / 2, $DvtNBoxCell$$.$_ty$ - $DvtNBoxCategoryNode$$ / 2), $DvtNBoxNodeOverflow$$ = new $dvt$$6$$.$CustomAnimation$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxNodeOverflow$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_MATRIX$, 
        $DvtNBoxKeyboardHandler$$, $DvtNBoxKeyboardHandler$$.$getMatrix$, $DvtNBoxKeyboardHandler$$.$setMatrix$, $DvtNBoxCategoryNode$$), $DvtNBoxAutomation$$.add($DvtNBoxNodeOverflow$$, $DvtNBoxEventManager$$);
      }
    }
    $DvtNBoxDrawer$$.$_deleteContainer$.$addChild$($DvtNBoxKeyboardHandler$$);
    $DvtNBoxDrawer$$ = new $dvt$$6$$.$AnimFadeOut$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
    $DvtNBoxAutomation$$.add($DvtNBoxDrawer$$, $DvtNBoxEventManager$$);
  };
  $DvtNBoxDrawerRenderer$$.$animateInsert$ = function $$DvtNBoxDrawerRenderer$$$$animateInsert$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$UPDATE$, $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$.getData().__drawerBounds, $DvtNBoxCategoryNode$$ = $DvtNBoxKeyboardHandler$$.getData()[$dvt$$6$$.$NBoxConstants$.ID], $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getCategoryNode$($DvtNBoxDrawer$$, $DvtNBoxCategoryNode$$);
    if ($DvtNBoxCell$$) {
      var $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryNodeRenderer$$.$getSideLength$($DvtNBoxCell$$), $DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryNode$$ / $DvtNBoxCategoryRolloverHandler$$.$w$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryNode$$ / $DvtNBoxCategoryRolloverHandler$$.$h$;
      if ($DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxDrawer$$, $DvtNBoxCell$$)) {
        $DvtNBoxCell$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCell$$);
        $DvtNBoxCategoryNode$$ = new $dvt$$6$$.$Matrix$($DvtNBoxNodeOverflow$$, 0, 0, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCell$$.$_tx$ - $DvtNBoxCategoryNode$$ / 2, $DvtNBoxCell$$.$_ty$ - $DvtNBoxCategoryNode$$ / 2);
        $DvtNBoxNodeOverflow$$ = new $dvt$$6$$.$CustomAnimation$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
        $DvtNBoxNodeOverflow$$.$_animator$.$addProp$($dvt$$6$$.$Animator$.$TYPE_MATRIX$, $DvtNBoxKeyboardHandler$$, $DvtNBoxKeyboardHandler$$.$getMatrix$, $DvtNBoxKeyboardHandler$$.$setMatrix$, $DvtNBoxKeyboardHandler$$.$getMatrix$());
        var $DvtNBoxNode$$ = $DvtNBoxKeyboardHandler$$.getParent();
        $DvtNBoxDrawer$$.$addChild$($DvtNBoxKeyboardHandler$$);
        $dvt$$6$$.$Playable$.$appendOnEnd$($DvtNBoxNodeOverflow$$, function() {
          $DvtNBoxNode$$.$addChild$($DvtNBoxKeyboardHandler$$);
        });
        $DvtNBoxKeyboardHandler$$.$setMatrix$($DvtNBoxCategoryNode$$);
        $DvtNBoxAutomation$$.add($DvtNBoxNodeOverflow$$, $DvtNBoxEventManager$$);
      }
    }
    $DvtNBoxKeyboardHandler$$.$setAlpha$(0);
    $DvtNBoxDrawer$$ = new $dvt$$6$$.$AnimFadeIn$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
    $DvtNBoxAutomation$$.add($DvtNBoxDrawer$$, $DvtNBoxEventManager$$);
  };
  $DvtNBoxDrawerRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxDrawerRenderer$$$$_addAccessibilityAttributes$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxAutomation$$ = $dvt$$6$$.$Agent$.$isTouchDevice$() ? $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, "background") : $DvtNBoxEventManager$$;
    $DvtNBoxAutomation$$.$setAriaRole$("img");
    $dvt$$6$$.$Agent$.$deferAriaCreation$() || ($DvtNBoxEventManager$$ = $DvtNBoxEventManager$$.$getAriaLabel$()) && $DvtNBoxAutomation$$.$setAriaProperty$($dvt$$6$$.$NBoxConstants$.$LABEL$, $DvtNBoxEventManager$$);
  };
  var $DvtNBoxDataUtils$$ = {};
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxDataUtils$$, $dvt$$6$$.$Obj$);
  $DvtNBoxDataUtils$$.$processDataObject$ = function $$DvtNBoxDataUtils$$$$processDataObject$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$CELLS$], $DvtNBoxDataAnimationHandler$$ = {};
    if ($DvtNBoxEventManager$$) {
      for (var $DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxEventManager$$.length;$DvtNBoxDrawer$$++) {
        var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxEventManager$$[$DvtNBoxDrawer$$], $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryRolloverHandler$$[$dvt$$6$$.$NBoxConstants$.$ROW$];
        $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNode$$] || ($DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNode$$] = {});
        var $DvtNBoxCell$$ = $DvtNBoxCategoryRolloverHandler$$[$dvt$$6$$.$NBoxConstants$.$COLUMN$];
        $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNode$$][$DvtNBoxCell$$] = $DvtNBoxCategoryRolloverHandler$$;
      }
    }
    for (var $DvtNBoxCategoryRolloverHandler$$ = [], $DvtNBoxDrawer$$ = {}, $DvtNBoxEventManager$$ = {}, $DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$);$DvtNBoxNodeOverflow$$++) {
      $DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getRow$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$), $DvtNBoxDrawer$$[$DvtNBoxCategoryNode$$[$dvt$$6$$.$NBoxConstants$.ID]] = $DvtNBoxNodeOverflow$$;
    }
    $DvtNBoxKeyboardHandler$$.__rowMap = $DvtNBoxDrawer$$;
    for (var $DvtNBoxNode$$ = 0;$DvtNBoxNode$$ < $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$);$DvtNBoxNode$$++) {
      $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getColumn$($DvtNBoxAutomation$$, $DvtNBoxNode$$), $DvtNBoxEventManager$$[$DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.ID]] = $DvtNBoxNode$$;
    }
    $DvtNBoxKeyboardHandler$$.__columnMap = $DvtNBoxEventManager$$;
    for ($DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$);$DvtNBoxNodeOverflow$$++) {
      for ($DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getRow$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$), $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryNode$$[$dvt$$6$$.$NBoxConstants$.ID], $DvtNBoxNode$$ = 0;$DvtNBoxNode$$ < $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$);$DvtNBoxNode$$++) {
        $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getColumn$($DvtNBoxAutomation$$, $DvtNBoxNode$$), $DvtNBoxCell$$ = $DvtNBoxCell$$[$dvt$$6$$.$NBoxConstants$.ID], $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNode$$] && $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNode$$][$DvtNBoxCell$$] ? $DvtNBoxCategoryRolloverHandler$$.push($DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNode$$][$DvtNBoxCell$$]) : $DvtNBoxCategoryRolloverHandler$$.push({row:$DvtNBoxCategoryNode$$, column:$DvtNBoxCell$$});
      }
    }
    $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$CELLS$] = $DvtNBoxCategoryRolloverHandler$$;
    $DvtNBoxDataAnimationHandler$$ = {};
    $DvtNBoxCategoryNode$$ = !1;
    for ($DvtNBoxCell$$ = 0;$DvtNBoxCell$$ < $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$);$DvtNBoxCell$$++) {
      $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxCell$$), $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryRolloverHandler$$[$dvt$$6$$.$NBoxConstants$.ID]] = $DvtNBoxCell$$, !$DvtNBoxCategoryNode$$ && ($DvtNBoxCategoryRolloverHandler$$[$dvt$$6$$.$NBoxConstants$.$GROUP_CATEGORY$] || $DvtNBoxCategoryRolloverHandler$$._groupCategories || $DvtNBoxCategoryRolloverHandler$$._groupLabels) && ($DvtNBoxCategoryNode$$ = !0);
    }
    $DvtNBoxKeyboardHandler$$.__nodeMap = $DvtNBoxDataAnimationHandler$$;
    $DvtNBoxKeyboardHandler$$.__grouping = "none" != $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR$] ? $DvtNBoxCategoryNode$$ : !1;
    $DvtNBoxDataUtils$$.$getGrouping$($DvtNBoxAutomation$$) && $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$) == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$ && ($DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_ROW$] = null, $DvtNBoxDataUtils$$.$fireSetPropertyEvent$($DvtNBoxAutomation$$, $dvt$$6$$.$NBoxConstants$.$MAXIMIZED_ROW$), $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_COLUMN$] = null, $DvtNBoxDataUtils$$.$fireSetPropertyEvent$($DvtNBoxAutomation$$, 
    $dvt$$6$$.$NBoxConstants$.$MAXIMIZED_COLUMN$));
    if ($DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_ROW$] && isNaN($DvtNBoxDrawer$$[$DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_ROW$]]) || $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_COLUMN$] && isNaN($DvtNBoxEventManager$$[$DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_COLUMN$]])) {
      $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_ROW$] = null, $DvtNBoxDataUtils$$.$fireSetPropertyEvent$($DvtNBoxAutomation$$, $dvt$$6$$.$NBoxConstants$.$MAXIMIZED_ROW$), $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_COLUMN$] = null, $DvtNBoxDataUtils$$.$fireSetPropertyEvent$($DvtNBoxAutomation$$, $dvt$$6$$.$NBoxConstants$.$MAXIMIZED_COLUMN$);
    }
    if (($DvtNBoxAutomation$$ = $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$LEGEND$]) && $DvtNBoxAutomation$$.sections) {
      var $DvtNBoxCategoryNodeRenderer$$ = "color iconFill iconShape iconPattern indicatorColor indicatorIconColor indicatorIconShape indicatorIconPattern".split(" ");
      $DvtNBoxAutomation$$.sections = $DvtNBoxAutomation$$.sections.slice(0);
      $DvtNBoxAutomation$$.sections.sort(function($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
        return $dvt$$6$$.$ArrayUtils$.$getIndex$($DvtNBoxCategoryNodeRenderer$$, $DvtNBoxAutomation$$.type) - $dvt$$6$$.$ArrayUtils$.$getIndex$($DvtNBoxCategoryNodeRenderer$$, $DvtNBoxKeyboardHandler$$.type);
      });
      $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$HIDDEN_CATEGORIES$];
      $DvtNBoxAutomation$$.hideAndShowBehavior = "on";
      $DvtNBoxAutomation$$.textStyle = $DvtNBoxKeyboardHandler$$.styleDefaults.__legendDefaults.itemStyle;
      $DvtNBoxAutomation$$.layout = {rowGap:2};
      $DvtNBoxAutomation$$.symbolWidth = 16;
      $DvtNBoxAutomation$$.symbolHeight = 16;
      for ($DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxAutomation$$.sections.length;$DvtNBoxDrawer$$++) {
        for ($DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.sections[$DvtNBoxDrawer$$], $DvtNBoxDataAnimationHandler$$.titleStyle = $DvtNBoxKeyboardHandler$$.styleDefaults.__legendDefaults.sectionStyle, $DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxDataAnimationHandler$$.items.length;$DvtNBoxCategoryNode$$++) {
          $DvtNBoxCell$$ = $DvtNBoxDataAnimationHandler$$.items[$DvtNBoxCategoryNode$$], $DvtNBoxCell$$.categoryVisibility = -1 != $dvt$$6$$.$ArrayUtils$.$getIndex$($DvtNBoxEventManager$$, $DvtNBoxCell$$.categories && 0 < $DvtNBoxCell$$.categories.length ? $DvtNBoxCell$$.categories[0] : $DvtNBoxCell$$.id) ? "hidden" : null, $DvtNBoxCell$$.indicatorColor && ($DvtNBoxCell$$.color = $DvtNBoxCell$$.indicatorColor), $DvtNBoxCell$$.color || ($DvtNBoxCell$$.color = $DvtNBoxKeyboardHandler$$.styleDefaults.__legendDefaults.markerColor), 
          $DvtNBoxCell$$.shape && ($DvtNBoxCell$$.markerShape = $DvtNBoxCell$$.shape);
        }
      }
    }
  };
  $DvtNBoxDataUtils$$.$getColumnCount$ = function $$DvtNBoxDataUtils$$$$getColumnCount$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$COLUMNS$].length;
  };
  $DvtNBoxDataUtils$$.$getRowCount$ = function $$DvtNBoxDataUtils$$$$getRowCount$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$ROWS$].length;
  };
  $DvtNBoxDataUtils$$.$getColumnLabel$ = function $$DvtNBoxDataUtils$$$$getColumnLabel$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getColumn$($DvtNBoxAutomation$$, $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$));
    return $DvtNBoxEventManager$$ && $DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$LABEL$] ? $DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$LABEL$] : null;
  };
  $DvtNBoxDataUtils$$.$getRowLabel$ = function $$DvtNBoxDataUtils$$$$getRowLabel$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRow$($DvtNBoxAutomation$$, $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$));
    return $DvtNBoxEventManager$$ && $DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$LABEL$] ? $DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$LABEL$] : null;
  };
  $DvtNBoxDataUtils$$.$getCellByRowColumn$ = function $$DvtNBoxDataUtils$$$$getCellByRowColumn$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCell$($dvt$$6$$, $DvtNBoxDataUtils$$.$getCellIndexByRowColumn$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$))) ? $DvtNBoxDataUtils$$.$getDisplayable$($dvt$$6$$, $DvtNBoxAutomation$$) : null;
  };
  $DvtNBoxDataUtils$$.$getCellIndexByRowColumn$ = function $$DvtNBoxDataUtils$$$$getCellIndexByRowColumn$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxDataUtils$$.$getColumnIndex$($dvt$$6$$, $DvtNBoxKeyboardHandler$$) + $DvtNBoxDataUtils$$.$getRowIndex$($dvt$$6$$, $DvtNBoxAutomation$$) * $DvtNBoxDataUtils$$.$getColumnCount$($dvt$$6$$);
  };
  $DvtNBoxDataUtils$$.$getColumn$ = function $$DvtNBoxDataUtils$$$$getColumn$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$COLUMNS$][$DvtNBoxKeyboardHandler$$];
  };
  $DvtNBoxDataUtils$$.$getRow$ = function $$DvtNBoxDataUtils$$$$getRow$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$ROWS$][$DvtNBoxKeyboardHandler$$];
  };
  $DvtNBoxDataUtils$$.$getMaximizedRow$ = function $$DvtNBoxDataUtils$$$$getMaximizedRow$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_ROW$];
  };
  $DvtNBoxDataUtils$$.$getMaximizedColumn$ = function $$DvtNBoxDataUtils$$$$getMaximizedColumn$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$MAXIMIZED_COLUMN$];
  };
  $DvtNBoxDataUtils$$.$getRowIndex$ = function $$DvtNBoxDataUtils$$$$getRowIndex$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    return $dvt$$6$$.$getOptions$().__rowMap[$DvtNBoxAutomation$$];
  };
  $DvtNBoxDataUtils$$.$getColumnIndex$ = function $$DvtNBoxDataUtils$$$$getColumnIndex$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    return $dvt$$6$$.$getOptions$().__columnMap[$DvtNBoxAutomation$$];
  };
  $DvtNBoxDataUtils$$.$getCell$ = function $$DvtNBoxDataUtils$$$$getCell$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$CELLS$][$DvtNBoxKeyboardHandler$$];
  };
  $DvtNBoxDataUtils$$.$getNodeCount$ = function $$DvtNBoxDataUtils$$$$getNodeCount$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$NODES$] ? $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$NODES$].length : 0;
  };
  $DvtNBoxDataUtils$$.$getNode$ = function $$DvtNBoxDataUtils$$$$getNode$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$NODES$][$DvtNBoxKeyboardHandler$$];
  };
  $DvtNBoxDataUtils$$.$getNodeIndex$ = function $$DvtNBoxDataUtils$$$$getNodeIndex$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    return $dvt$$6$$.$getOptions$().__nodeMap[$DvtNBoxAutomation$$];
  };
  $DvtNBoxDataUtils$$.$getCellIndex$ = function $$DvtNBoxDataUtils$$$$getCellIndex$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$ROW$]), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$COLUMN$]), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$);
    return $DvtNBoxDataAnimationHandler$$ + $DvtNBoxEventManager$$ * $DvtNBoxDrawer$$;
  };
  $DvtNBoxDataUtils$$.$getIcon$ = function $$DvtNBoxDataUtils$$$$getIcon$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$ICON$] ? $DvtNBoxStyleUtils$$.$getStyledIcon$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$ICON$]) : null;
  };
  $DvtNBoxDataUtils$$.$getIndicatorIcon$ = function $$DvtNBoxDataUtils$$$$getIndicatorIcon$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$INDICATOR_ICON$] ? $DvtNBoxStyleUtils$$.$getStyledIndicatorIcon$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$INDICATOR_ICON$]) : null;
  };
  $DvtNBoxDataUtils$$.$getSelectedItems$ = function $$DvtNBoxDataUtils$$$$getSelectedItems$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$SELECTION$];
  };
  $DvtNBoxDataUtils$$.$setSelectedItems$ = function $$DvtNBoxDataUtils$$$$setSelectedItems$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$SELECTION$] = $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxDataUtils$$.$getHighlightedItems$ = function $$DvtNBoxDataUtils$$$$getHighlightedItems$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$HIGHLIGHTED_CATEGORIES$];
    if ($DvtNBoxEventManager$$ && 0 < $DvtNBoxEventManager$$.length) {
      for ($DvtNBoxKeyboardHandler$$ = [], $DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$);$DvtNBoxEventManager$$++) {
        var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$);
        $DvtNBoxDataUtils$$.$isNodeHighlighted$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$) && $DvtNBoxKeyboardHandler$$.push($DvtNBoxDataAnimationHandler$$);
      }
    }
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxDataUtils$$.$getGrouping$ = function $$DvtNBoxDataUtils$$$$getGrouping$$($dvt$$6$$) {
    return $dvt$$6$$.$getOptions$().__grouping;
  };
  $DvtNBoxDataUtils$$.$getGroupAttributes$ = function $$DvtNBoxDataUtils$$$$getGroupAttributes$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$GROUP_ATTRIBUTES$];
  };
  $DvtNBoxDataUtils$$.$getGroupBehavior$ = function $$DvtNBoxDataUtils$$$$getGroupBehavior$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR$];
  };
  $DvtNBoxDataUtils$$.$getNodeGroupId$ = function $$DvtNBoxDataUtils$$$$getNodeGroupId$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$[$dvt$$6$$.$NBoxConstants$.$GROUP_CATEGORY$] ? $DvtNBoxAutomation$$[$dvt$$6$$.$NBoxConstants$.$GROUP_CATEGORY$] : ($DvtNBoxAutomation$$ = $DvtNBoxAutomation$$._groupCategories) && 0 < $DvtNBoxAutomation$$.length ? $DvtNBoxAutomation$$.join(";") : null;
  };
  $DvtNBoxDataUtils$$.$getXPercentage$ = function $$DvtNBoxDataUtils$$$$getXPercentage$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if (!isNaN($DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$X_PERCENTAGE$])) {
      return $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$X_PERCENTAGE$];
    }
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$);
    return ($DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$COLUMN$]) + .5) / $DvtNBoxEventManager$$;
  };
  $DvtNBoxDataUtils$$.$getYPercentage$ = function $$DvtNBoxDataUtils$$$$getYPercentage$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if (!isNaN($DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$Y_PERCENTAGE$])) {
      return $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$Y_PERCENTAGE$];
    }
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$);
    return ($DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$ROW$]) + .5) / $DvtNBoxEventManager$$;
  };
  $DvtNBoxDataUtils$$.$getOtherThreshold$ = function $$DvtNBoxDataUtils$$$$getOtherThreshold$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$OTHER_THRESHOLD$];
  };
  $DvtNBoxDataUtils$$.$getOtherColor$ = function $$DvtNBoxDataUtils$$$$getOtherColor$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$OTHER_COLOR$];
  };
  $DvtNBoxDataUtils$$.$getDrawer$ = function $$DvtNBoxDataUtils$$$$getDrawer$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$DRAWER$];
  };
  $DvtNBoxDataUtils$$.$getCategoryNode$ = function $$DvtNBoxDataUtils$$$$getCategoryNode$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$().__groups, $DvtNBoxDrawer$$ = $DvtNBoxKeyboardHandler$$;
    $DvtNBoxEventManager$$ == $dvt$$6$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.substring(0, $DvtNBoxKeyboardHandler$$.indexOf(":")), $DvtNBoxDrawer$$ = $DvtNBoxKeyboardHandler$$.substring($DvtNBoxKeyboardHandler$$.indexOf(":") + 1), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataAnimationHandler$$[$DvtNBoxEventManager$$]);
    return $DvtNBoxDataAnimationHandler$$ ? $DvtNBoxDataAnimationHandler$$[$DvtNBoxDrawer$$] : null;
  };
  $DvtNBoxDataUtils$$.$getCategoryNodeLabels$ = function $$DvtNBoxDataUtils$$$$getCategoryNodeLabels$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if ($DvtNBoxKeyboardHandler$$.__labels) {
      return $DvtNBoxKeyboardHandler$$.__labels;
    }
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$.nodeIndices[0]);
    if ($DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$GROUP_CATEGORY$]) {
      return $DvtNBoxKeyboardHandler$$.__labels = [$DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$GROUP_CATEGORY$]];
    }
    $DvtNBoxKeyboardHandler$$.__labels = [];
    if ($DvtNBoxEventManager$$._groupCategories) {
      for (var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$()._groupLabels, $DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxEventManager$$._groupCategories.length;$DvtNBoxDrawer$$++) {
        $DvtNBoxKeyboardHandler$$.__labels[$DvtNBoxDrawer$$] = $DvtNBoxDataAnimationHandler$$ && $DvtNBoxDataAnimationHandler$$[$DvtNBoxEventManager$$._groupCategories[$DvtNBoxDrawer$$]] ? $DvtNBoxDataAnimationHandler$$[$DvtNBoxEventManager$$._groupCategories[$DvtNBoxDrawer$$]] : $DvtNBoxEventManager$$._groupCategories[$DvtNBoxDrawer$$];
      }
    }
    return $DvtNBoxKeyboardHandler$$.__labels;
  };
  $DvtNBoxDataUtils$$.$setDisplayable$ = function $$DvtNBoxDataUtils$$$$setDisplayable$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $dvt$$6$$ = $dvt$$6$$.$getDisplayables$();
    $DvtNBoxEventManager$$ = $DvtNBoxEventManager$$ ? "__displayable:" + $DvtNBoxEventManager$$ : "__displayable";
    $DvtNBoxAutomation$$[$DvtNBoxEventManager$$] ? $dvt$$6$$[$DvtNBoxAutomation$$[$DvtNBoxEventManager$$]] = $DvtNBoxKeyboardHandler$$ : ($DvtNBoxAutomation$$[$DvtNBoxEventManager$$] = $dvt$$6$$.length, $dvt$$6$$.push($DvtNBoxKeyboardHandler$$));
  };
  $DvtNBoxDataUtils$$.$getDisplayable$ = function $$DvtNBoxDataUtils$$$$getDisplayable$$($dvt$$6$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if (!$DvtNBoxAutomation$$) {
      return null;
    }
    $DvtNBoxAutomation$$ = $DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$ ? "__displayable:" + $DvtNBoxKeyboardHandler$$ : "__displayable"];
    $dvt$$6$$ = $dvt$$6$$.$getDisplayables$();
    return null == $DvtNBoxAutomation$$ ? null : $dvt$$6$$[$DvtNBoxAutomation$$];
  };
  $DvtNBoxDataUtils$$.$isMaximizeEnabled$ = function $$DvtNBoxDataUtils$$$$isMaximizeEnabled$$($dvt$$6$$) {
    return "off" != $dvt$$6$$.$getOptions$().cellMaximize;
  };
  $DvtNBoxDataUtils$$.$getCellContent$ = function $$DvtNBoxDataUtils$$$$getCellContent$$($dvt$$6$$) {
    return "counts" == $dvt$$6$$.$getOptions$().cellContent ? "counts" : "auto";
  };
  $DvtNBoxDataUtils$$.$isCellMinimized$ = function $$DvtNBoxDataUtils$$$$isCellMinimized$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$);
    if (!$DvtNBoxEventManager$$ && !$DvtNBoxDataAnimationHandler$$) {
      return !1;
    }
    var $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$ROW$], $DvtNBoxDrawer$$ = $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$COLUMN$];
    return $DvtNBoxEventManager$$ && $DvtNBoxDataAnimationHandler$$ ? $DvtNBoxEventManager$$ != $DvtNBoxCategoryRolloverHandler$$ || $DvtNBoxDataAnimationHandler$$ != $DvtNBoxDrawer$$ : $DvtNBoxEventManager$$ != $DvtNBoxCategoryRolloverHandler$$ && $DvtNBoxDataAnimationHandler$$ != $DvtNBoxDrawer$$;
  };
  $DvtNBoxDataUtils$$.$isCellMaximized$ = function $$DvtNBoxDataUtils$$$$isCellMaximized$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$COLUMN$];
    return $DvtNBoxEventManager$$ == $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$ROW$] && $DvtNBoxDataAnimationHandler$$ == $DvtNBoxCategoryRolloverHandler$$;
  };
  $DvtNBoxDataUtils$$.$getLegend$ = function $$DvtNBoxDataUtils$$$$getLegend$$($dvt$$6$$) {
    return $dvt$$6$$.$getOptions$()._legend;
  };
  $DvtNBoxDataUtils$$.$isNodeHidden$ = function $$DvtNBoxDataUtils$$$$isNodeHidden$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$();
    $DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$HIDDEN_CATEGORIES$] && !$DvtNBoxEventManager$$.__hiddenMap && ($DvtNBoxEventManager$$.__hiddenMap = $dvt$$6$$.$ArrayUtils$.$createBooleanMap$($DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$HIDDEN_CATEGORIES$]));
    return $dvt$$6$$.$ArrayUtils$.$hasAnyMapItem$($DvtNBoxEventManager$$.__hiddenMap, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$CATEGORIES$]);
  };
  $DvtNBoxDataUtils$$.$isNodeHighlighted$ = function $$DvtNBoxDataUtils$$$$isNodeHighlighted$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$();
    $DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$HIGHLIGHTED_CATEGORIES$] && !$DvtNBoxEventManager$$.__highlightedMap && ($DvtNBoxEventManager$$.__highlightedMap = $dvt$$6$$.$ArrayUtils$.$createBooleanMap$($DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$HIGHLIGHTED_CATEGORIES$]));
    return "all" == $DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$HIGHLIGHT_MATCH$] ? $dvt$$6$$.$ArrayUtils$.$hasAllMapItems$($DvtNBoxEventManager$$.__highlightedMap, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$CATEGORIES$]) : $dvt$$6$$.$ArrayUtils$.$hasAnyMapItem$($DvtNBoxEventManager$$.__highlightedMap, $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$CATEGORIES$]);
  };
  $DvtNBoxDataUtils$$.$getNodeScrollableContainer$ = function $$DvtNBoxDataUtils$$$$getNodeScrollableContainer$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    if (!$DvtNBoxAutomation$$) {
      return null;
    }
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDrawer$($dvt$$6$$);
    if ($DvtNBoxKeyboardHandler$$ && ($DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($dvt$$6$$, $DvtNBoxKeyboardHandler$$))) {
      return $DvtNBoxKeyboardHandler$$.$getChildContainer$();
    }
    $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getCellIndex$($dvt$$6$$, $DvtNBoxAutomation$$.getData());
    return $DvtNBoxDataUtils$$.$isCellMaximized$($dvt$$6$$, $DvtNBoxKeyboardHandler$$) ? ($DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getCell$($dvt$$6$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxDataUtils$$.$getDisplayable$($dvt$$6$$, $DvtNBoxKeyboardHandler$$).$getChildContainer$()) : null;
  };
  $DvtNBoxDataUtils$$.$getNodeLabel$ = function $$DvtNBoxDataUtils$$$$getNodeLabel$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if (!$DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$LABEL$]) {
      return null;
    }
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $dvt$$6$$.$NBoxConstants$.$LABEL$);
    if ($DvtNBoxEventManager$$) {
      return $DvtNBoxEventManager$$;
    }
    $DvtNBoxEventManager$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()) ? $dvt$$6$$.$OutputText$.$H_ALIGN_RIGHT$ : $dvt$$6$$.$OutputText$.$H_ALIGN_LEFT$;
    $DvtNBoxEventManager$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getNodeLabelStyle$($DvtNBoxAutomation$$), $DvtNBoxEventManager$$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$);
    $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $dvt$$6$$.$NBoxConstants$.$LABEL$);
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxDataUtils$$.$getNodeSecondaryLabel$ = function $$DvtNBoxDataUtils$$$$getNodeSecondaryLabel$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if (!$DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$SECONDARY_LABEL$]) {
      return null;
    }
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $dvt$$6$$.$NBoxConstants$.$SECONDARY_LABEL$);
    if ($DvtNBoxEventManager$$) {
      return $DvtNBoxEventManager$$;
    }
    $DvtNBoxEventManager$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()) ? $dvt$$6$$.$OutputText$.$H_ALIGN_RIGHT$ : $dvt$$6$$.$OutputText$.$H_ALIGN_LEFT$;
    $DvtNBoxEventManager$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$SECONDARY_LABEL$], $DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$($DvtNBoxAutomation$$), $DvtNBoxEventManager$$, $dvt$$6$$.$OutputText$.$V_ALIGN_MIDDLE$);
    $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $dvt$$6$$.$NBoxConstants$.$SECONDARY_LABEL$);
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxDataUtils$$.$fireSetPropertyEvent$ = function $$DvtNBoxDataUtils$$$$fireSetPropertyEvent$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $dvt$$6$$.$EventFactory$.$newAdfPropertyChangeEvent$($DvtNBoxKeyboardHandler$$, null);
    $DvtNBoxAutomation$$.$processEvent$($DvtNBoxEventManager$$);
  };
  $DvtNBoxDataUtils$$.$getMaximizedCellIndex$ = function $$DvtNBoxDataUtils$$$$getMaximizedCellIndex$$($dvt$$6$$) {
    var $DvtNBoxAutomation$$ = null, $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($dvt$$6$$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($dvt$$6$$);
    $DvtNBoxKeyboardHandler$$ && $DvtNBoxEventManager$$ && ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getColumnCount$($dvt$$6$$), $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($dvt$$6$$, $DvtNBoxEventManager$$) + $DvtNBoxAutomation$$ * $DvtNBoxDataUtils$$.$getRowIndex$($dvt$$6$$, $DvtNBoxKeyboardHandler$$));
    return $DvtNBoxAutomation$$;
  };
  $DvtNBoxDataUtils$$.$isDrawerSelected$ = function $$DvtNBoxDataUtils$$$$isDrawerSelected$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = !1, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getSelectedItems$($DvtNBoxAutomation$$);
    if ($DvtNBoxDataAnimationHandler$$) {
      for (var $DvtNBoxDrawer$$ = {}, $DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxEventManager$$++) {
        $DvtNBoxDrawer$$[$DvtNBoxDataAnimationHandler$$[$DvtNBoxEventManager$$]] = !0;
      }
      for (var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$.getData().nodeIndices, $DvtNBoxEventManager$$ = !0, $DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxCategoryRolloverHandler$$++) {
        var $DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryRolloverHandler$$]);
        if (!$DvtNBoxDrawer$$[$DvtNBoxCategoryNode$$[$dvt$$6$$.$NBoxConstants$.ID]]) {
          $DvtNBoxEventManager$$ = !1;
          break;
        }
      }
    }
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxDataUtils$$.$buildAriaDesc$ = function $$DvtNBoxDataUtils$$$$buildAriaDesc$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxCategoryNode$$ || $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxDrawer$$ ? $dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$NBOX_PREFIX$, "GROUP_NODE"), $DvtNBoxEventManager$$]) : $DvtNBoxEventManager$$;
    var $DvtNBoxCategoryRolloverHandler$$ = [];
    $DvtNBoxDataAnimationHandler$$ ? $DvtNBoxCategoryRolloverHandler$$.push($dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$UTIL_PREFIX$, "STATE_SELECTED")) : $DvtNBoxCategoryRolloverHandler$$.push($dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$UTIL_PREFIX$, "STATE_UNSELECTED"));
    $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxCategoryNode$$ ? ($DvtNBoxAutomation$$ = $DvtNBoxKeyboardHandler$$.getData().nodeIndices.length, $DvtNBoxCategoryRolloverHandler$$.push($dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$UTIL_PREFIX$, "STATE_COLLAPSED")), $DvtNBoxCategoryRolloverHandler$$.push($dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$NBOX_PREFIX$, "SIZE"), $DvtNBoxAutomation$$]))) : 
    $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxDrawer$$ && ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCategoryNode$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$.getData()[$dvt$$6$$.$NBoxConstants$.ID]).nodeIndices.length, $DvtNBoxCategoryRolloverHandler$$.push($dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$UTIL_PREFIX$, "STATE_EXPANDED")), $DvtNBoxCategoryRolloverHandler$$.push($dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$NBOX_PREFIX$, 
    "SIZE"), $DvtNBoxAutomation$$])));
    return $dvt$$6$$.$Displayable$.$generateAriaLabel$($DvtNBoxEventManager$$, $DvtNBoxCategoryRolloverHandler$$);
  };
  $DvtNBoxDataUtils$$.$getFirstNavigableNode$ = function $$DvtNBoxDataUtils$$$$getFirstNavigableNode$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = null;
    if (0 < $DvtNBoxAutomation$$.$getNumChildren$()) {
      var $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getChildAt$(0), $DvtNBoxEventManager$$;
      do {
        $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxNode$$ ? $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.getData().__prev : $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxNodeOverflow$$ && ($DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.__prev), $DvtNBoxKeyboardHandler$$ = $DvtNBoxEventManager$$ ? $DvtNBoxDataUtils$$.$getDisplayable$($dvt$$6$$, $DvtNBoxEventManager$$) : $DvtNBoxKeyboardHandler$$;
      } while ($DvtNBoxEventManager$$);
    }
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxDataUtils$$.$getLastNavigableNode$ = function $$DvtNBoxDataUtils$$$$getLastNavigableNode$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = null, $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getNumChildren$();
    if (0 < $DvtNBoxEventManager$$) {
      $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getChildAt$($DvtNBoxEventManager$$ - 1);
      do {
        $DvtNBoxKeyboardHandler$$ = ($DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxNode$$ ? $DvtNBoxKeyboardHandler$$.getData().__next : null) ? $DvtNBoxDataUtils$$.$getDisplayable$($dvt$$6$$, $DvtNBoxEventManager$$) : $DvtNBoxKeyboardHandler$$;
      } while ($DvtNBoxEventManager$$);
    }
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxDataUtils$$.$getNextNavigableNode$ = function $$DvtNBoxDataUtils$$$$getNextNavigableNode$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxEventManager$$ = $DvtNBoxEventManager$$.keyCode == $dvt$$6$$.KeyboardEvent.$RIGHT_ARROW$ || $DvtNBoxEventManager$$.keyCode == $dvt$$6$$.KeyboardEvent.$DOWN_ARROW$ ? !0 : !1;
    var $DvtNBoxDataAnimationHandler$$;
    $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxNode$$ ? $DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$ ? $DvtNBoxKeyboardHandler$$.getData().__next : $DvtNBoxKeyboardHandler$$.getData().__prev : $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxNodeOverflow$$ && ($DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$ ? null : $DvtNBoxKeyboardHandler$$.__prev);
    return $DvtNBoxDataAnimationHandler$$ ? $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$) : $DvtNBoxKeyboardHandler$$;
  };
  var $DvtNBoxStyleUtils$$ = {};
  $dvt$$6$$.$Obj$.$createSubclass$($DvtNBoxStyleUtils$$, $dvt$$6$$.$Obj$);
  $DvtNBoxStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtNBoxStyleUtils$$$$getAnimationOnDisplay$$($DvtNBoxAutomation$$) {
    if (!$DvtNBoxAutomation$$.$_animationAllowed$) {
      return "none";
    }
    $DvtNBoxAutomation$$ = $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$ANIMATION_ON_DISPLAY$];
    "auto" == $DvtNBoxAutomation$$ && ($DvtNBoxAutomation$$ = $dvt$$6$$.$BlackBoxAnimationHandler$.$ALPHA_FADE$);
    return $DvtNBoxAutomation$$;
  };
  $DvtNBoxStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtNBoxStyleUtils$$$$getAnimationOnDataChange$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$_animationAllowed$ ? $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$ANIMATION_ON_DATA_CHANGE$] : "none";
  };
  $DvtNBoxStyleUtils$$.$getAnimationDuration$ = function $$DvtNBoxStyleUtils$$$$getAnimationDuration$$($DvtNBoxAutomation$$) {
    return $dvt$$6$$.$StyleUtils$.$getTimeMilliseconds$($DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$ANIMATION_DURATION$]) / 1E3;
  };
  $DvtNBoxStyleUtils$$.$getColumnLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getColumnLabelStyle$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$COLUMN_LABEL_STYLE$], $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getColumn$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    return $DvtNBoxDataAnimationHandler$$[$dvt$$6$$.$NBoxConstants$.$LABEL_STYLE$] ? $dvt$$6$$.$JsonUtils$.$merge$(new $dvt$$6$$.$CSSStyle$($DvtNBoxDataAnimationHandler$$[$dvt$$6$$.$NBoxConstants$.$LABEL_STYLE$]), $DvtNBoxEventManager$$) : $DvtNBoxEventManager$$;
  };
  $DvtNBoxStyleUtils$$.$getRowLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getRowLabelStyle$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$ROW_LABEL_STYLE$], $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getRow$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    return $DvtNBoxDataAnimationHandler$$[$dvt$$6$$.$NBoxConstants$.$LABEL_STYLE$] ? $dvt$$6$$.$JsonUtils$.$merge$(new $dvt$$6$$.$CSSStyle$($DvtNBoxDataAnimationHandler$$[$dvt$$6$$.$NBoxConstants$.$LABEL_STYLE$]), $DvtNBoxEventManager$$) : $DvtNBoxEventManager$$;
  };
  $DvtNBoxStyleUtils$$.$getCellStyle$ = function $$DvtNBoxStyleUtils$$$$getCellStyle$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxStyleUtils$$.$_getCellStyleKey$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxDrawer$$ = $DvtNBoxStyleUtils$$.$_getCellStyleOption$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$CELL_DEFAULTS$]["_" + $DvtNBoxDataAnimationHandler$$], 
    $DvtNBoxCategoryNode$$ = new $dvt$$6$$.$CSSStyle$;
    $dvt$$6$$.$ArrayUtils$.forEach($DvtNBoxStyleUtils$$.$_getCellStyleProperties$(), function($DvtNBoxAutomation$$) {
      var $DvtNBoxKeyboardHandler$$ = $dvt$$6$$.$CSSStyle$.$cssStringToObjectProperty$($DvtNBoxAutomation$$), $DvtNBoxKeyboardHandler$$ = $DvtNBoxDrawer$$ && null != $DvtNBoxDrawer$$[$DvtNBoxKeyboardHandler$$] ? $DvtNBoxDrawer$$[$DvtNBoxKeyboardHandler$$] : $DvtNBoxCategoryRolloverHandler$$.$getStyle$($DvtNBoxAutomation$$);
      $DvtNBoxCategoryNode$$.$setStyle$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    });
    return $DvtNBoxCategoryNode$$;
  };
  $DvtNBoxStyleUtils$$.$getCellStyleObject$ = function $$DvtNBoxStyleUtils$$$$getCellStyleObject$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxStyleUtils$$.$_getCellStyleKey$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxStyleUtils$$.$_getCellStyleOption$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxDataAnimationHandler$$ && $dvt$$6$$.$ArrayUtils$.forEach($DvtNBoxStyleUtils$$.$_getCellStyleProperties$(), function($DvtNBoxAutomation$$) {
      delete $DvtNBoxDataAnimationHandler$$[$dvt$$6$$.$CSSStyle$.$cssStringToObjectProperty$($DvtNBoxAutomation$$)];
    });
    return $DvtNBoxDataAnimationHandler$$;
  };
  $DvtNBoxStyleUtils$$.$_getCellStyleKey$ = function $$DvtNBoxStyleUtils$$$$_getCellStyleKey$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $dvt$$6$$.$NBoxConstants$.STYLE, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$);
    $DvtNBoxDataUtils$$.$isCellMinimized$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) ? $DvtNBoxEventManager$$ = "minimizedStyle" : !$DvtNBoxDataAnimationHandler$$ && !$DvtNBoxDrawer$$ || $DvtNBoxDataUtils$$.$isCellMinimized$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) || ($DvtNBoxEventManager$$ = "maximizedStyle");
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxStyleUtils$$.$_getCellStyleOption$ = function $$DvtNBoxStyleUtils$$$$_getCellStyleOption$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$();
    $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataAnimationHandler$$[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$CELL_DEFAULTS$][$DvtNBoxEventManager$$];
    !$DvtNBoxDataAnimationHandler$$ || $DvtNBoxDataAnimationHandler$$ instanceof Object || ($DvtNBoxDataAnimationHandler$$ = $dvt$$6$$.$CSSStyle$.$cssStringToObject$($DvtNBoxDataAnimationHandler$$));
    ($DvtNBoxEventManager$$ = $DvtNBoxAutomation$$[$DvtNBoxEventManager$$]) ? ($DvtNBoxEventManager$$ instanceof Object || ($DvtNBoxEventManager$$ = $dvt$$6$$.$CSSStyle$.$cssStringToObject$($DvtNBoxEventManager$$)), $DvtNBoxEventManager$$ = $dvt$$6$$.$JsonUtils$.$merge$($DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$)) : $DvtNBoxDataAnimationHandler$$ && ($DvtNBoxEventManager$$ = $dvt$$6$$.$JsonUtils$.clone($DvtNBoxDataAnimationHandler$$));
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxStyleUtils$$.$_getCellStyleProperties$ = function $$DvtNBoxStyleUtils$$$$_getCellStyleProperties$$() {
    return [$dvt$$6$$.$CSSStyle$.$BACKGROUND$, $dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$, $dvt$$6$$.$CSSStyle$.$BORDER_STYLE$, $dvt$$6$$.$CSSStyle$.$BORDER_COLOR$, $dvt$$6$$.$CSSStyle$.$BORDER_WIDTH$];
  };
  $DvtNBoxStyleUtils$$.$getCellClassName$ = function $$DvtNBoxStyleUtils$$$$getCellClassName$$($dvt$$6$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = "className", $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($dvt$$6$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($dvt$$6$$);
    $DvtNBoxDataUtils$$.$isCellMinimized$($dvt$$6$$, $DvtNBoxAutomation$$) ? $DvtNBoxKeyboardHandler$$ = "minimizedClassName" : !$DvtNBoxEventManager$$ && !$DvtNBoxDataAnimationHandler$$ || $DvtNBoxDataUtils$$.$isCellMinimized$($dvt$$6$$, $DvtNBoxAutomation$$) || ($DvtNBoxKeyboardHandler$$ = "maximizedClassName");
    return $DvtNBoxDataUtils$$.$getCell$($dvt$$6$$, $DvtNBoxAutomation$$)[$DvtNBoxKeyboardHandler$$];
  };
  $DvtNBoxStyleUtils$$.$getCellLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellLabelStyle$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$CELL_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$LABEL_STYLE$], $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    return $DvtNBoxDataAnimationHandler$$[$dvt$$6$$.$NBoxConstants$.$LABEL_STYLE$] ? $dvt$$6$$.$JsonUtils$.$merge$(new $dvt$$6$$.$CSSStyle$($DvtNBoxDataAnimationHandler$$[$dvt$$6$$.$NBoxConstants$.$LABEL_STYLE$]), $DvtNBoxEventManager$$) : $DvtNBoxEventManager$$;
  };
  $DvtNBoxStyleUtils$$.$getCellShowCount$ = function $$DvtNBoxStyleUtils$$$$getCellShowCount$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$SHOW_COUNT$] ? $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$SHOW_COUNT$] : $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$CELL_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$SHOW_COUNT$];
  };
  $DvtNBoxStyleUtils$$.$getCellCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellCountLabelStyle$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$CELL_DEFAULTS$].countLabelStyle;
  };
  $DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellBodyCountLabelStyle$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$CELL_DEFAULTS$].bodyCountLabelStyle;
  };
  $DvtNBoxStyleUtils$$.$getCellDropTargetStyle$ = function $$DvtNBoxStyleUtils$$$$getCellDropTargetStyle$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$CELL_DEFAULTS$].dropTargetStyle;
  };
  $DvtNBoxStyleUtils$$.$getNodeLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getNodeLabelStyle$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$LABEL_STYLE$];
  };
  $DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getNodeSecondaryLabelStyle$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$SECONDARY_LABEL_STYLE$];
  };
  $DvtNBoxStyleUtils$$.$getNodeColor$ = function $$DvtNBoxStyleUtils$$$$getNodeColor$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$COLOR$] ? $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$COLOR$] : $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$COLOR$];
  };
  $DvtNBoxStyleUtils$$.$getNodeBorderColor$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderColor$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$BORDER_COLOR$] ? $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$BORDER_COLOR$] : $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$BORDER_COLOR$];
    return $DvtNBoxEventManager$$ ? $DvtNBoxEventManager$$ : null;
  };
  $DvtNBoxStyleUtils$$.$getNodeBorderWidth$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderWidth$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$BORDER_WIDTH$] ? $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$BORDER_WIDTH$] : $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$BORDER_WIDTH$];
    return $DvtNBoxEventManager$$ ? $DvtNBoxEventManager$$ : null;
  };
  $DvtNBoxStyleUtils$$.$getNodeIndicatorColor$ = function $$DvtNBoxStyleUtils$$$$getNodeIndicatorColor$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$INDICATOR_COLOR$] ? $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$INDICATOR_COLOR$] : $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$INDICATOR_COLOR$];
  };
  $DvtNBoxStyleUtils$$.$getStyledIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledIcon$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $dvt$$6$$.$JsonUtils$.$merge$($DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$ICON_DEFAULTS$]);
  };
  $DvtNBoxStyleUtils$$.$getStyledIndicatorIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledIndicatorIcon$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $dvt$$6$$.$JsonUtils$.$merge$($DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$]);
  };
  $DvtNBoxStyleUtils$$.$getFadedNodeAlpha$ = function $$DvtNBoxStyleUtils$$$$getFadedNodeAlpha$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$].alphaFade;
  };
  $DvtNBoxStyleUtils$$.$getScrollbarStyleMap$ = function $$DvtNBoxStyleUtils$$$$getScrollbarStyleMap$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$].__scrollbar;
  };
  $DvtNBoxStyleUtils$$.$getCategoryNodeColor$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeColor$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if ("none" == $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$) || $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$) && -1 == $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$).indexOf("color")) {
      return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$COLOR$];
    }
    if ($DvtNBoxKeyboardHandler$$.otherNode) {
      return $DvtNBoxDataUtils$$.$getOtherColor$($DvtNBoxAutomation$$);
    }
    var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.nodeIndices, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$[0])[$dvt$$6$$.$NBoxConstants$.$COLOR$];
    if (!$DvtNBoxDataAnimationHandler$$) {
      return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$COLOR$];
    }
    for (var $DvtNBoxDrawer$$ = 1;$DvtNBoxDrawer$$ < $DvtNBoxEventManager$$.length;$DvtNBoxDrawer$$++) {
      var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$[$DvtNBoxDrawer$$]);
      if ($DvtNBoxDataAnimationHandler$$ != $DvtNBoxCategoryRolloverHandler$$[$dvt$$6$$.$NBoxConstants$.$COLOR$]) {
        return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$COLOR$];
      }
    }
    return $DvtNBoxDataAnimationHandler$$;
  };
  $DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeIndicatorColor$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if ("none" == $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$) || $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$) && -1 == $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$).indexOf("indicatorColor")) {
      return null;
    }
    var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.nodeIndices, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$[0])[$dvt$$6$$.$NBoxConstants$.$INDICATOR_COLOR$];
    if (!$DvtNBoxDataAnimationHandler$$) {
      return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$INDICATOR_COLOR$];
    }
    for (var $DvtNBoxDrawer$$ = 1;$DvtNBoxDrawer$$ < $DvtNBoxEventManager$$.length;$DvtNBoxDrawer$$++) {
      var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$[$DvtNBoxDrawer$$]);
      if ($DvtNBoxDataAnimationHandler$$ != $DvtNBoxCategoryRolloverHandler$$[$dvt$$6$$.$NBoxConstants$.$INDICATOR_COLOR$]) {
        return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$INDICATOR_COLOR$];
      }
    }
    return $DvtNBoxDataAnimationHandler$$;
  };
  $DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledCategoryIndicatorIcon$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if ("none" == $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$) || $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$) && -1 == $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$).indexOf("indicatorIconShape") && -1 == $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$).indexOf("indicatorIconColor") && -1 == $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$).indexOf("indicatorIconPattern")) {
      return null;
    }
    var $DvtNBoxEventManager$$ = {}, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$.nodeIndices, $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[0])[$dvt$$6$$.$NBoxConstants$.$INDICATOR_ICON$];
    if (!$DvtNBoxDrawer$$) {
      return null;
    }
    $DvtNBoxDrawer$$.width && ($DvtNBoxEventManager$$.width = $DvtNBoxDrawer$$.width);
    $DvtNBoxDrawer$$.height && ($DvtNBoxEventManager$$.height = $DvtNBoxDrawer$$.height);
    $DvtNBoxDrawer$$.borderWidth && ($DvtNBoxEventManager$$.borderWidth = $DvtNBoxDrawer$$.borderWidth);
    $DvtNBoxDrawer$$.borderStyle && ($DvtNBoxEventManager$$.borderStyle = $DvtNBoxDrawer$$.borderStyle);
    $DvtNBoxDrawer$$.borderColor && ($DvtNBoxEventManager$$.borderColor = $DvtNBoxDrawer$$.borderColor);
    $DvtNBoxDrawer$$.borderRadius && ($DvtNBoxEventManager$$.borderRadius = $DvtNBoxDrawer$$.borderRadius);
    $DvtNBoxDrawer$$.style && ($DvtNBoxEventManager$$.style = $DvtNBoxDrawer$$.style);
    $DvtNBoxDrawer$$.className && ($DvtNBoxEventManager$$.className = $DvtNBoxDrawer$$.className);
    var $DvtNBoxCategoryRolloverHandler$$ = !0;
    if (!$DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$) || -1 != $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$).indexOf("indicatorIconShape")) {
      for (var $DvtNBoxCategoryNode$$ = $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$SHAPE$], $DvtNBoxCell$$ = 1;$DvtNBoxCell$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxCell$$++) {
        var $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxCell$$])[$dvt$$6$$.$NBoxConstants$.$INDICATOR_ICON$];
        $DvtNBoxNodeOverflow$$ && $DvtNBoxCategoryNode$$ != $DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.$SHAPE$] && ($DvtNBoxCategoryRolloverHandler$$ = !1);
      }
      $DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$SHAPE$] = $DvtNBoxCategoryRolloverHandler$$ ? $DvtNBoxCategoryNode$$ : $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$SHAPE$];
    }
    $DvtNBoxCategoryRolloverHandler$$ = !0;
    if (!$DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$) || -1 != $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$).indexOf("indicatorIconColor")) {
      $DvtNBoxCategoryNode$$ = $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$COLOR$];
      for ($DvtNBoxCell$$ = 1;$DvtNBoxCell$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxCell$$++) {
        ($DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxCell$$])[$dvt$$6$$.$NBoxConstants$.$INDICATOR_ICON$]) && $DvtNBoxCategoryNode$$ != $DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.$COLOR$] && ($DvtNBoxCategoryRolloverHandler$$ = !1);
      }
      $DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$COLOR$] = $DvtNBoxCategoryRolloverHandler$$ ? $DvtNBoxCategoryNode$$ : $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$COLOR$];
    }
    $DvtNBoxCategoryRolloverHandler$$ = !0;
    if (!$DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$) || -1 != $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$).indexOf("indicatorIconPattern")) {
      $DvtNBoxDrawer$$ = $DvtNBoxDrawer$$[$dvt$$6$$.$NBoxConstants$.$PATTERN$];
      for ($DvtNBoxCategoryNode$$ = 1;$DvtNBoxCategoryNode$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxCategoryNode$$++) {
        ($DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNode$$])[$dvt$$6$$.$NBoxConstants$.$INDICATOR_ICON$]) && $DvtNBoxDrawer$$ != $DvtNBoxNodeOverflow$$[$dvt$$6$$.$NBoxConstants$.$PATTERN$] && ($DvtNBoxCategoryRolloverHandler$$ = !1);
      }
      $DvtNBoxEventManager$$[$dvt$$6$$.$NBoxConstants$.$PATTERN$] = $DvtNBoxCategoryRolloverHandler$$ ? $DvtNBoxDrawer$$ : $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$PATTERN$];
    }
    return $dvt$$6$$.$JsonUtils$.$merge$($DvtNBoxEventManager$$, $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$]);
  };
  $DvtNBoxStyleUtils$$.$getDrawerBackground$ = function $$DvtNBoxStyleUtils$$$$getDrawerBackground$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults.background;
  };
  $DvtNBoxStyleUtils$$.$getDrawerHeaderBackground$ = function $$DvtNBoxStyleUtils$$$$getDrawerHeaderBackground$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults.headerBackground;
  };
  $DvtNBoxStyleUtils$$.$getDrawerBorderColor$ = function $$DvtNBoxStyleUtils$$$$getDrawerBorderColor$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults[$dvt$$6$$.$NBoxConstants$.$BORDER_COLOR$];
  };
  $DvtNBoxStyleUtils$$.$getDrawerBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getDrawerBorderRadius$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults[$dvt$$6$$.$NBoxConstants$.$BORDER_RADIUS$];
  };
  $DvtNBoxStyleUtils$$.$getDrawerLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getDrawerLabelStyle$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults[$dvt$$6$$.$NBoxConstants$.$LABEL_STYLE$];
  };
  $DvtNBoxStyleUtils$$.$getDrawerCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getDrawerCountLabelStyle$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults.countLabelStyle;
  };
  $DvtNBoxStyleUtils$$.$getDrawerCountBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getDrawerCountBorderRadius$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults.countBorderRadius;
  };
  $DvtNBoxStyleUtils$$.$getCategoryNodeLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeLabelStyle$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$].__categoryNodeDefaults.labelStyle;
  };
  $DvtNBoxStyleUtils$$.$getNodeBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderRadius$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$BORDER_RADIUS$];
  };
  $DvtNBoxStyleUtils$$.$getNodeHoverColor$ = function $$DvtNBoxStyleUtils$$$$getNodeHoverColor$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$].hoverColor;
  };
  $DvtNBoxStyleUtils$$.$getNodeSelectionColor$ = function $$DvtNBoxStyleUtils$$$$getNodeSelectionColor$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$NODE_DEFAULTS$].selectionColor;
  };
  $DvtNBoxStyleUtils$$.$getLabelHalign$ = function $$DvtNBoxStyleUtils$$$$getLabelHalign$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$[$dvt$$6$$.$NBoxConstants$.$LABEL_HALIGN$];
    $DvtNBoxEventManager$$ || ($DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$()[$dvt$$6$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$CELL_DEFAULTS$][$dvt$$6$$.$NBoxConstants$.$LABEL_HALIGN$]);
    var $DvtNBoxDataAnimationHandler$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$());
    return "end" == $DvtNBoxEventManager$$ ? $DvtNBoxDataAnimationHandler$$ ? $dvt$$6$$.$OutputText$.$H_ALIGN_LEFT$ : $dvt$$6$$.$OutputText$.$H_ALIGN_RIGHT$ : "center" == $DvtNBoxEventManager$$ ? $dvt$$6$$.$OutputText$.$H_ALIGN_CENTER$ : $DvtNBoxDataAnimationHandler$$ ? $dvt$$6$$.$OutputText$.$H_ALIGN_RIGHT$ : $dvt$$6$$.$OutputText$.$H_ALIGN_LEFT$;
  };
  $dvt$$6$$.$exportProperty$($dvt$$6$$, "NBox", $dvt$$6$$.$NBox$);
  $dvt$$6$$.$exportProperty$($dvt$$6$$.$NBox$, "newInstance", $dvt$$6$$.$NBox$.newInstance);
  $dvt$$6$$.$exportProperty$($dvt$$6$$.$NBox$.prototype, "render", $dvt$$6$$.$NBox$.prototype.$render$);
  $dvt$$6$$.$exportProperty$($dvt$$6$$.$NBox$.prototype, "getAutomation", $dvt$$6$$.$NBox$.prototype.$getAutomation$);
  $dvt$$6$$.$exportProperty$($dvt$$6$$.$NBox$.prototype, "highlight", $dvt$$6$$.$NBox$.prototype.$highlight$);
  $dvt$$6$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getDomElementForSubId", $DvtNBoxAutomation$$.prototype.$getDomElementForSubId$);
  $dvt$$6$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getData", $DvtNBoxAutomation$$.prototype.getData);
  $dvt$$6$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getGroupNode", $DvtNBoxAutomation$$.prototype.$getGroupNode$);
  $dvt$$6$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getCell", $DvtNBoxAutomation$$.prototype.$getCell$);
  $dvt$$6$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getCellNode", $DvtNBoxAutomation$$.prototype.$getCellNode$);
  $dvt$$6$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getNode", $DvtNBoxAutomation$$.prototype.$getNode$);
  $dvt$$6$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getCellGroupNode", $DvtNBoxAutomation$$.prototype.$getCellGroupNode$);
  $dvt$$6$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getDialog", $DvtNBoxAutomation$$.prototype.$getDialog$);
  $dvt$$6$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getDialogNode", $DvtNBoxAutomation$$.prototype.$getDialogNode$);
  $dvt$$6$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getNodeIdFromIndex", $DvtNBoxAutomation$$.prototype.$getNodeIdFromIndex$);
  $dvt$$6$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getNodeIndexFromId", $DvtNBoxAutomation$$.prototype.$getNodeIndexFromId$);
})(dvt);
