(function($dvt$$8$$) {
  function $DvtControlPanelEventManager$$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.Init($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
  }
  function $DvtControlPanelEvent$$($dvt$$8$$) {
    this.Init($DvtControlPanelEvent$$.$TYPE$);
    this.$_subtype$ = $dvt$$8$$;
  }
  function $DvtPanControl$$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    this.Init($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$);
  }
  function $DropdownItemSprite$$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    this.Init($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$);
  }
  $dvt$$8$$.$ComboBox$ = function $$dvt$$8$$$$ComboBox$$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.Init($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$ComboBox$, $dvt$$8$$.$Container$);
  $dvt$$8$$.$ComboBox$.$_HIDE_DROPDOWN_DELAY$ = 100;
  $dvt$$8$$.$ComboBox$.$_DROPDOWN_OUTOFFOCUS_CHECK$ = 100;
  $dvt$$8$$.$ComboBox$.prototype.Init = function $$dvt$$8$$$$ComboBox$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    $dvt$$8$$.$ComboBox$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$, null, $DvtControlPanelEvent$$);
    this.$_styleMap$ = $DvtPanControl$$;
    this.$_itemButtonStates$ = [];
    this.$_items$ = [];
    this.$_tooltips$ = [];
    this.$_selectedIndex$ = 0;
    this.$_bRemoveDropdown$ = this.$_bStaticButtonStates$ = !1;
    this.$_maxItemDim$ = new $dvt$$8$$.$Rectangle$(0, 0, 0, 0);
    this.$_itemDim$ = new $dvt$$8$$.$Rectangle$(0, 0, 0, 0);
    this.$_tooltipManager$ = $DvtControlPanelEventManager$$.$getTooltipManager$();
    this.$_isTouchDevice$ = $dvt$$8$$.$Agent$.$isTouchDevice$();
    this.$_button$ = this.$createButton$($DvtControlPanelEvent$$ + "_cl");
    this.$addChild$(this.$_button$);
    this.$_contentArea$ = new $dvt$$8$$.$Container$($DvtControlPanelEventManager$$);
    this.$_contentArea$.$setMouseEnabled$(!1);
    this.$addChild$(this.$_contentArea$);
    this.$_hideDropdownTimer$ = new $dvt$$8$$.$Timer$($DvtControlPanelEventManager$$, $dvt$$8$$.$ComboBox$.$_HIDE_DROPDOWN_DELAY$, this.$HandleHideDropdownTimer$, this, 1);
    this.$_outOfFocusCheckTimer$ = new $dvt$$8$$.$Timer$($DvtControlPanelEventManager$$, $dvt$$8$$.$ComboBox$.$_DROPDOWN_OUTOFFOCUS_CHECK$, this.$HandleOutOfFocusCheckTimer$, this, 1);
    this.$_dropdownItemClickEvent$ = !1;
  };
  $dvt$$8$$.$ComboBox$.prototype.$setSelectedIndex$ = function $$dvt$$8$$$$ComboBox$$$$setSelectedIndex$$($dvt$$8$$) {
    this.$_selectedIndex$ = $dvt$$8$$;
    this.$_bStaticButtonStates$ || this.$UpdateContentArea$();
    this.$FireChangeEvent$($dvt$$8$$);
  };
  $dvt$$8$$.$ComboBox$.prototype.$createButton$ = function $$dvt$$8$$$$ComboBox$$$$createButton$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$ = new $dvt$$8$$.$Button$(this.$getCtx$(), this.$createUpState$($DvtControlPanelEventManager$$), this.$createDownState$($DvtControlPanelEventManager$$), this.$createOverState$($DvtControlPanelEventManager$$), null, $DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$.$setCallback$(this.$HandleExpandClick$, this);
    this.$_isTouchDevice$ || $DvtControlPanelEventManager$$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEDOWN$, this.$HandleButtonDown$, !1, this);
    $DvtControlPanelEventManager$$.$setToggleEnabled$();
    return $DvtControlPanelEventManager$$;
  };
  $dvt$$8$$.$ComboBox$.prototype.$createUpState$ = function $$dvt$$8$$$$ComboBox$$$$createUpState$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = this.$getCtx$();
    $DvtControlPanelEventManager$$ = new $dvt$$8$$.Rect($DvtControlPanelEvent$$, 0, 0, this.$_itemDim$.$w$, this.$_itemDim$.$h$, $DvtControlPanelEventManager$$ + "_up");
    $DvtControlPanelEventManager$$.$setCornerRadius$($dvt$$8$$.$ButtonLAFUtils$.$ROUND_RECT_ELLIPSE$);
    $DvtControlPanelEventManager$$.$setInvisibleFill$();
    $DvtControlPanelEventManager$$.$addChild$($dvt$$8$$.$ComboBox$.$DrawArrow$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$.getWidth(), $DvtControlPanelEventManager$$.getHeight()));
    return $DvtControlPanelEventManager$$;
  };
  $dvt$$8$$.$ComboBox$.prototype.$createOverState$ = function $$dvt$$8$$$$ComboBox$$$$createOverState$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = this.$getCtx$();
    $DvtControlPanelEventManager$$ = new $dvt$$8$$.Rect($DvtControlPanelEvent$$, 0, 0, this.$_itemDim$.$w$, this.$_itemDim$.$h$, $DvtControlPanelEventManager$$ + "_up");
    $DvtControlPanelEventManager$$.$setCornerRadius$($dvt$$8$$.$ButtonLAFUtils$.$ROUND_RECT_ELLIPSE$);
    $DvtControlPanelEventManager$$.$setSolidStroke$($dvt$$8$$.$ButtonLAFUtils$.$BORDER_COLOR$);
    $DvtControlPanelEventManager$$.$setFill$(new $dvt$$8$$.$LinearGradientFill$(0, [$dvt$$8$$.$ButtonLAFUtils$.$GRADIENT_DARK$, $dvt$$8$$.$ButtonLAFUtils$.$GRADIENT_LIGHT$]));
    $DvtControlPanelEventManager$$.$addChild$($dvt$$8$$.$ComboBox$.$DrawArrow$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$.getWidth(), $DvtControlPanelEventManager$$.getHeight()));
    return $DvtControlPanelEventManager$$;
  };
  $dvt$$8$$.$ComboBox$.prototype.$createDownState$ = function $$dvt$$8$$$$ComboBox$$$$createDownState$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = this.$getCtx$();
    $DvtControlPanelEventManager$$ = new $dvt$$8$$.Rect($DvtControlPanelEvent$$, 0, 0, this.$_itemDim$.$w$, this.$_itemDim$.$h$, $DvtControlPanelEventManager$$ + "_up");
    $DvtControlPanelEventManager$$.$setSolidStroke$($dvt$$8$$.$ButtonLAFUtils$.$BORDER_COLOR$);
    $DvtControlPanelEventManager$$.$setFill$(new $dvt$$8$$.$LinearGradientFill$(0, [$dvt$$8$$.$ButtonLAFUtils$.$GRADIENT_LIGHT$, $dvt$$8$$.$ButtonLAFUtils$.$GRADIENT_DARK$]));
    $DvtControlPanelEventManager$$.$setCornerRadius$($dvt$$8$$.$ButtonLAFUtils$.$ROUND_RECT_ELLIPSE$);
    $DvtControlPanelEventManager$$.$addChild$($dvt$$8$$.$ComboBox$.$DrawArrow$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$.getWidth(), $DvtControlPanelEventManager$$.getHeight()));
    return $DvtControlPanelEventManager$$;
  };
  $dvt$$8$$.$ComboBox$.prototype.$setStaticButtonStates$ = function $$dvt$$8$$$$ComboBox$$$$setStaticButtonStates$$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.$_button$.$setUpState$($dvt$$8$$);
    this.$_button$.$setDownState$($DvtControlPanelEvent$$);
    this.$_button$.$setOverState$($DvtControlPanelEventManager$$);
    this.$_bStaticButtonStates$ = !0;
  };
  $dvt$$8$$.$ComboBox$.prototype.$addItem$ = function $$dvt$$8$$$$ComboBox$$$$addItem$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelEventManager$$.$setMouseEnabled$(!1);
    this.$_items$.push($DvtControlPanelEventManager$$);
    this.$_tooltips$.push($DvtControlPanelEvent$$);
    $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_getDimForced$(this.$getCtx$(), $DvtPanControl$$ ? $DvtPanControl$$ : $DvtControlPanelEventManager$$);
    var $maxItemDim$$ = this.$_maxItemDim$;
    $DvtControlPanelEvent$$.$w$ > $maxItemDim$$.$w$ && ($maxItemDim$$.$w$ = $DvtControlPanelEvent$$.$w$, this.$_itemDim$.$w$ = $DvtControlPanelEvent$$.$w$ + 16);
    $DvtControlPanelEvent$$.$h$ > $maxItemDim$$.$h$ && ($maxItemDim$$.$h$ = $DvtControlPanelEvent$$.$h$, this.$_itemDim$.$h$ = $DvtControlPanelEvent$$.$h$);
    this.$_maxItemDim$ = $maxItemDim$$;
    $DvtControlPanelEvent$$ = null;
    $DvtPanControl$$ && $DropdownItemSprite$$ && $DvtControlPanelDefaults$$ && ($DvtControlPanelEvent$$ = [], $DvtControlPanelEvent$$[$dvt$$8$$.$Button$.$STATE_ENABLED$] = $DvtPanControl$$, $DvtControlPanelEvent$$[$dvt$$8$$.$Button$.$STATE_OVER$] = $DropdownItemSprite$$, $DvtControlPanelEvent$$[$dvt$$8$$.$Button$.$STATE_DOWN$] = $DvtControlPanelDefaults$$);
    this.$_itemButtonStates$.push($DvtControlPanelEvent$$);
    this.$_bStaticButtonStates$ || (this.removeChild(this.$_button$), this.$_button$ = this.$createButton$($DvtControlPanelEventManager$$.getId()), this.$addChildAt$(this.$_button$, 0), this.$UpdateContentArea$());
  };
  $dvt$$8$$.$ComboBox$.prototype.getItem = function $$dvt$$8$$$$ComboBox$$$getItem$($dvt$$8$$) {
    return this.$_items$[$dvt$$8$$];
  };
  $dvt$$8$$.$ComboBox$.prototype.$getItemCount$ = function $$dvt$$8$$$$ComboBox$$$$getItemCount$$() {
    return this.$_items$.length;
  };
  $dvt$$8$$.$ComboBox$.prototype.$getSelectedItem$ = function $$dvt$$8$$$$ComboBox$$$$getSelectedItem$$() {
    var $dvt$$8$$ = this.$_selectedIndex$;
    return 0 > $dvt$$8$$ || $dvt$$8$$ > this.$_items$.length - 1 ? null : this.$_items$[$dvt$$8$$];
  };
  $dvt$$8$$.$ComboBox$.prototype.$FireChangeEvent$ = function $$dvt$$8$$$$ComboBox$$$$FireChangeEvent$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$ = new $dvt$$8$$.$ComboBoxEvent$($dvt$$8$$.$ComboBoxEvent$.$SUBTYPE_ITEM_CHANGE$, $DvtControlPanelEventManager$$);
    this.$FireListener$($DvtControlPanelEventManager$$);
  };
  $dvt$$8$$.$ComboBox$.prototype.$HandleExpandClick$ = function $$dvt$$8$$$$ComboBox$$$$HandleExpandClick$$($DvtControlPanelEventManager$$) {
    $dvt$$8$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_bRemoveDropdown$ && this.$RemoveDropdown$();
    $DvtControlPanelEventManager$$ = this.$getCtx$();
    this.$_dropdown$ = this.$createDropdown$();
    var $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_getDimForced$($DvtControlPanelEventManager$$, this.$_dropdown$);
    this.$addChild$(this.$_dropdown$);
    var $DvtPanControl$$ = this.$_button$.$getDimensions$(), $DvtControlPanelEvent$$ = $dvt$$8$$.$Agent$.$isRightToLeft$($DvtControlPanelEventManager$$) ? -$DvtControlPanelEvent$$.$w$ + 1 * $DvtPanControl$$.$w$ / 4 : 3 * $DvtPanControl$$.$w$ / 4;
    this.$_dropdown$.$setTranslate$($DvtControlPanelEvent$$, 3 * $DvtPanControl$$.$h$ / 4);
    this.$_button$.$setMouseEnabled$(!1);
    this.$_button$.$setToggled$(!0);
    this.$FireListener$(new $dvt$$8$$.$ComboBoxEvent$($dvt$$8$$.$ComboBoxEvent$.$SUBTYPE_SHOW_DROPDOWN$));
    ($DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.$_stage$) && (this.$_isTouchDevice$ ? $DvtControlPanelEventManager$$.$addEvtListener$($dvt$$8$$.TouchEvent.$TOUCHSTART$, this.$HandleStageMouseFocusChange$, !0, this) : $DvtControlPanelEventManager$$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEUP$, this.$HandleStageMouseFocusChange$, !0, this));
  };
  $dvt$$8$$.$ComboBox$.prototype.$HandleHideDropdownTimer$ = function $$dvt$$8$$$$ComboBox$$$$HandleHideDropdownTimer$$() {
    this.$HideDropdown$();
    this.$_bStaticButtonStates$ || this.$UpdateContentArea$();
  };
  $dvt$$8$$.$ComboBox$.prototype.$HandleStageMouseFocusChange$ = function $$dvt$$8$$$$ComboBox$$$$HandleStageMouseFocusChange$$() {
    this.$_dropdownItemClickEvent$ = !1;
    this.$_outOfFocusCheckTimer$.reset();
    this.$_outOfFocusCheckTimer$.start();
  };
  $dvt$$8$$.$ComboBox$.prototype.$HandleOutOfFocusCheckTimer$ = function $$dvt$$8$$$$ComboBox$$$$HandleOutOfFocusCheckTimer$$() {
    this.$_dropdownItemClickEvent$ || (this.$_hideDropdownTimer$.reset(), this.$_hideDropdownTimer$.start());
  };
  $dvt$$8$$.$ComboBox$.prototype.$createDropdown$ = function $$dvt$$8$$$$ComboBox$$$$createDropdown$$() {
    function $DvtControlPanelEventManager$$($dvt$$8$$) {
      return {$HandleClick$:function($dvt$$8$$) {
        $thisRef$$37$$.$HandleDropdownItemClick$($dvt$$8$$);
      }, $HandleMouseDown$:function() {
        $thisRef$$37$$.$HandleButtonDown$();
      }, $getTooltip$:function() {
        return $dvt$$8$$;
      }};
    }
    for (var $DvtControlPanelEvent$$ = this.$_styleMap$ ? this.$_styleMap$.comboBox : null, $DvtPanControl$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$ControlPanel$.$CP_PADDING_TOP$, 0), $DropdownItemSprite$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$ControlPanel$.$CP_PADDING_LEFT$, 0), $DvtControlPanelDefaults$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$ControlPanel$.$CP_PADDING_BOTTOM$, 0), $bgColor$$10_rightPadding$$ = 
    $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$ControlPanel$.$CP_PADDING_RIGHT$, 0), $bgAlpha_interItemPadding$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$ControlPanel$.$CP_PADDING_INNER$, 0), $currY$$11$$ = $DvtPanControl$$, $context$$289$$ = this.$getCtx$(), $dim$$56$$, $itemSprite$$2$$, $item$$42$$, $DvtPanControl$$ = new $dvt$$8$$.$Container$($context$$289$$, "__dd"), $thisRef$$37$$ = this, $i$$577$$ = 0;$i$$577$$ < this.$_items$.length;$i$$577$$++) {
      $item$$42$$ = this.$_items$[$i$$577$$], $dim$$56$$ = $dvt$$8$$.$ButtonLAFUtils$.$_getDimForced$($context$$289$$, $item$$42$$), $itemSprite$$2$$ = new $dvt$$8$$.$Container$($context$$289$$, "__it" + $i$$577$$), $itemSprite$$2$$.$setTranslate$($DropdownItemSprite$$, $currY$$11$$), $itemSprite$$2$$.$addChild$($item$$42$$), $item$$42$$.$setMouseEnabled$(!0), $item$$42$$.setCursor("pointer"), $currY$$11$$ += $dim$$56$$.$h$ + $bgAlpha_interItemPadding$$, this.$_eventManager$ && this.$_eventManager$.$associate$($item$$42$$, 
      $DvtControlPanelEventManager$$(this.$_tooltips$[$i$$577$$])), $DvtPanControl$$.$addChild$($itemSprite$$2$$);
    }
    $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$drawDropdownShape$($context$$289$$, this.$_maxItemDim$.$w$ + $DropdownItemSprite$$ + $bgColor$$10_rightPadding$$, $currY$$11$$ + $DvtControlPanelDefaults$$ - $bgAlpha_interItemPadding$$, $DvtControlPanelEvent$$);
    $DvtControlPanelEvent$$.$addChild$($DvtPanControl$$);
    $DropdownItemSprite$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$CSSStyle$.$BORDER_COLOR$, null);
    $DvtControlPanelDefaults$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$, 1);
    $bgColor$$10_rightPadding$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$, null);
    $bgAlpha_interItemPadding$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$ControlPanel$.$BG_ALPHA$, 1);
    $DvtControlPanelEvent$$.$setSolidStroke$($DropdownItemSprite$$, $DvtControlPanelDefaults$$);
    $bgColor$$10_rightPadding$$ && $DvtControlPanelEvent$$.$setSolidFill$($bgColor$$10_rightPadding$$, $bgAlpha_interItemPadding$$);
    return $DvtControlPanelEvent$$;
  };
  $dvt$$8$$.$ComboBox$.prototype.$HandleButtonDown$ = function $$dvt$$8$$$$ComboBox$$$$HandleButtonDown$$() {
    $dvt$$8$$.$EventManager$.$consumeEvent$();
  };
  $dvt$$8$$.$ComboBox$.prototype.$HandleDropdownItemClick$ = function $$dvt$$8$$$$ComboBox$$$$HandleDropdownItemClick$$($DvtControlPanelEventManager$$) {
    this.$_dropdownItemClickEvent$ = !0;
    this.$_hideDropdownTimer$.stop();
    $dvt$$8$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$ = $dvt$$8$$.$ComboBox$.$getRootDropdownItemSprite$($DvtControlPanelEventManager$$.target);
    var $DvtControlPanelEvent$$;
    if (this.$_dropdown$ && $DvtControlPanelEventManager$$) {
      var $DvtPanControl$$ = this.$_dropdown$.$getChildAt$(0);
      $DvtPanControl$$ && ($DvtControlPanelEvent$$ = $DvtPanControl$$.$getChildIndex$($DvtControlPanelEventManager$$));
    }
    this.$HideDropdown$();
    this.$setSelectedIndex$($DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$ComboBox$.$getRootDropdownItemSprite$ = function $$dvt$$8$$$$ComboBox$$$getRootDropdownItemSprite$$($DvtControlPanelEventManager$$) {
    for (var $DvtControlPanelEvent$$, $DvtPanControl$$;$DvtControlPanelEventManager$$;) {
      if (($DvtPanControl$$ = $DvtControlPanelEventManager$$.getId()) && $DvtControlPanelEventManager$$ instanceof $dvt$$8$$.$Container$ && "__it" == $DvtPanControl$$.substr(0, 4)) {
        $DvtControlPanelEvent$$ = $DvtControlPanelEventManager$$;
        break;
      }
      $DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.getParent();
    }
    return $DvtControlPanelEvent$$;
  };
  $dvt$$8$$.$ComboBox$.prototype.$HideDropdown$ = function $$dvt$$8$$$$ComboBox$$$$HideDropdown$$() {
    this.$_dropdown$ && (this.$_dropdown$.$setVisible$(!1), this.$_button$.$setToggled$(!1), this.$FireListener$(new $dvt$$8$$.$ComboBoxEvent$($dvt$$8$$.$ComboBoxEvent$.$SUBTYPE_HIDE_DROPDOWN$)), this.$_bRemoveDropdown$ = !0);
    var $DvtControlPanelEventManager$$ = this.$getCtx$().$_stage$;
    $DvtControlPanelEventManager$$ && (this.$_isTouchDevice$ ? $DvtControlPanelEventManager$$.$removeEvtListener$($dvt$$8$$.TouchEvent.$TOUCHSTART$, this.$HandleStageMouseFocusChange$, !0, this) : $DvtControlPanelEventManager$$.$removeEvtListener$($dvt$$8$$.MouseEvent.$MOUSEUP$, this.$HandleStageMouseFocusChange$, !0, this));
    this.$_button$.$setMouseEnabled$(!0);
  };
  $dvt$$8$$.$ComboBox$.prototype.$RemoveDropdown$ = function $$dvt$$8$$$$ComboBox$$$$RemoveDropdown$$() {
    this.$_bRemoveDropdown$ = !1;
    this.$_dropdown$ && (this.$_dropdown$.$setVisible$(!1), this.$_dropdown$.getParent().removeChild(this.$_dropdown$), this.$_dropdown$ = null);
  };
  $dvt$$8$$.$ComboBox$.prototype.$getDimensions$ = function $$dvt$$8$$$$ComboBox$$$$getDimensions$$() {
    return null != this.$_button$ ? this.$_button$.$getDimensions$() : new $dvt$$8$$.$Rectangle$(0, 0, 0, 0);
  };
  $dvt$$8$$.$ComboBox$.prototype.$getItems$ = function $$dvt$$8$$$$ComboBox$$$$getItems$$() {
    return this.$_items$;
  };
  $dvt$$8$$.$ComboBox$.prototype.$UpdateContentArea$ = function $$dvt$$8$$$$ComboBox$$$$UpdateContentArea$$() {
    var $DvtControlPanelEventManager$$ = !0, $DvtControlPanelEvent$$ = this.$_selectedIndex$;
    this.$_itemButtonStates$ && this.$_itemButtonStates$.length > $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$ = this.$_itemButtonStates$[$DvtControlPanelEvent$$]) && 2 < $DvtControlPanelEvent$$.length && (this.$_button$.$setUpState$($DvtControlPanelEvent$$[$dvt$$8$$.$Button$.$STATE_ENABLED$]), this.$_button$.$setOverState$($DvtControlPanelEvent$$[$dvt$$8$$.$Button$.$STATE_OVER$]), this.$_button$.$setDownState$($DvtControlPanelEvent$$[$dvt$$8$$.$Button$.$STATE_DOWN$]), $DvtControlPanelEventManager$$ = 
    !1);
    $DvtControlPanelEventManager$$ && (0 < this.$_contentArea$.$getNumChildren$() && this.$_contentArea$.$removeChildAt$(0), this.$_contentArea$.$addChild$(this.$getSelectedItem$()));
  };
  $dvt$$8$$.$ComboBox$.$DrawArrow$ = function $$dvt$$8$$$$ComboBox$$$DrawArrow$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = [];
    $DropdownItemSprite$$.push($DvtControlPanelEvent$$ - 12, $DvtPanControl$$ / 2 - 2);
    $DropdownItemSprite$$.push($DvtControlPanelEvent$$ - 4, $DvtPanControl$$ / 2 - 2);
    $DropdownItemSprite$$.push($DvtControlPanelEvent$$ - 8, $DvtPanControl$$ / 2 + 2);
    $DropdownItemSprite$$.push($DvtControlPanelEvent$$ - 12, $DvtPanControl$$ / 2 - 2);
    $DvtControlPanelEventManager$$ = new $dvt$$8$$.$Polygon$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, null);
    $DvtControlPanelEventManager$$.$setSolidStroke$($dvt$$8$$.$ButtonLAFUtils$.$BORDER_COLOR$);
    $DvtControlPanelEventManager$$.$setSolidFill$($dvt$$8$$.$ButtonLAFUtils$.$BORDER_COLOR$);
    $DvtControlPanelEventManager$$.$setMouseEnabled$(!1);
    return $DvtControlPanelEventManager$$;
  };
  $dvt$$8$$.$ComboBox$.prototype.$closeDropdown$ = function $$dvt$$8$$$$ComboBox$$$$closeDropdown$$() {
    this.$HideDropdown$();
  };
  $dvt$$8$$.$ComboBox$.prototype.$setEventManager$ = function $$dvt$$8$$$$ComboBox$$$$setEventManager$$($dvt$$8$$) {
    this.$_eventManager$ = $dvt$$8$$;
  };
  $dvt$$8$$.$Obj$.$createSubclass$($DropdownItemSprite$$, $dvt$$8$$.Rect);
  $DropdownItemSprite$$.prototype.Init = function $$DropdownItemSprite$$$$Init$($DvtControlPanelEventManager$$) {
    $dvt$$8$$.Rect.$superclass$.Init.call(this, $DvtControlPanelEventManager$$);
  };
  $dvt$$8$$.$ComboBoxEvent$ = function $$dvt$$8$$$$ComboBoxEvent$$($dvt$$8$$, $DvtControlPanelEventManager$$) {
    this.Init($dvt$$8$$, $DvtControlPanelEventManager$$);
  };
  $dvt$$8$$.$ComboBoxEvent$.$TYPE$ = "comboBoxEvent";
  $dvt$$8$$.$ComboBoxEvent$.$SUBTYPE_ITEM_CHANGE$ = "cbItemChange";
  $dvt$$8$$.$ComboBoxEvent$.$SUBTYPE_SHOW_DROPDOWN$ = "cbShowDropdown";
  $dvt$$8$$.$ComboBoxEvent$.$SUBTYPE_HIDE_DROPDOWN$ = "cbHideDropdown";
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$ComboBoxEvent$, $dvt$$8$$.$Obj$);
  $dvt$$8$$.$ComboBoxEvent$.prototype.Init = function $$dvt$$8$$$$ComboBoxEvent$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.type = $dvt$$8$$.$ComboBoxEvent$.$TYPE$;
    void 0 === $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$ = -1);
    this.$subtype$ = $DvtControlPanelEventManager$$;
    this.$_index$ = $DvtControlPanelEvent$$;
  };
  $dvt$$8$$.$ComboBoxEvent$.prototype.$getIndex$ = function $$dvt$$8$$$$ComboBoxEvent$$$$getIndex$$() {
    return this.$_index$;
  };
  $DvtPanControl$$.$PAN_TIMER_INTERVAL$ = 50;
  $DvtPanControl$$.$PAN_TIMER_ACCELERATE_COUNT$ = 1E3 / $DvtPanControl$$.$PAN_TIMER_INTERVAL$ * 2;
  $dvt$$8$$.$Obj$.$createSubclass$($DvtPanControl$$, $dvt$$8$$.$Container$);
  $DvtPanControl$$.prototype.Init = function $$DvtPanControl$$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $control$$1$$, $styleMap$$52$$) {
    $DvtPanControl$$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$);
    this.$_panTimer$ = new $dvt$$8$$.$Timer$($DvtControlPanelEventManager$$, $DvtPanControl$$.$PAN_TIMER_INTERVAL$, this.$HandlePanTimer$, this);
    this.$_tooltipManager$ = $DvtControlPanelEventManager$$.$getTooltipManager$();
    this.$_bPanMouseDown$ = !1;
    this.$_panZoomCanvas$ = $DvtControlPanelDefaults$$;
    this.$_panCenter$ = new $dvt$$8$$.$Point$(20, 20);
    this.$_controls$ = $control$$1$$ ? $control$$1$$ : $dvt$$8$$.$ControlPanel$.$CONTROLS_ALL$;
    $DvtControlPanelEvent$$.$addChild$($DropdownItemSprite$$);
    $DropdownItemSprite$$ && (this.$_panCenterSprite$ = $DropdownItemSprite$$, this.$_panCenterSprite$.$setVisible$(!1), this.$_panCenterSprite$.$addEvtListener$($dvt$$8$$.TouchEvent.$TOUCHSTART$, this.$HandlePanCenterClick$, !1, this), $dvt$$8$$.$Agent$.$isTouchDevice$() || (this.$_panCenterSprite$.$addEvtListener$($dvt$$8$$.MouseEvent.$CLICK$, this.$HandlePanCenterClick$, !1, this), this.$_panCenterSprite$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEDOWN$, this.$HandlePanCenterDown$, !1, this), 
    this.$_panCenterSprite$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEUP$, this.$HandlePanCenterUp$, !1, this), this.$_panCenterSprite$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEOVER$, this.$HandlePanCenterRollOver$, !1, this), this.$_panCenterSprite$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEOUT$, this.$HandlePanCenterRollOut$, !1, this)), this.$_panCenterSprite$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEMOVE$, this.$HandlePanCenterMouseMove$, !1, this));
    this.$_panButton$ = $DvtControlPanelEvent$$;
    this.$_panButton$.$addEvtListener$($dvt$$8$$.TouchEvent.$TOUCHSTART$, this.$HandlePanClick$, !1, this);
    $dvt$$8$$.$Agent$.$isTouchDevice$() || (this.$_panButton$.$addEvtListener$($dvt$$8$$.MouseEvent.$CLICK$, this.$HandlePanClick$, !1, this), this.$_panButton$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEDOWN$, this.$HandlePanMouseDown$, !1, this), this.$_panButton$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEUP$, this.$HandlePanMouseUp$, !1, this), this.$_panButton$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEOVER$, this.$HandlePanRollOver$, !1, this), this.$_panButton$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEOUT$, 
    this.$HandlePanRollOut$, !1, this), this.$_panButton$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEMOVE$, this.$HandlePanMouseMove$, !1, this));
    this.$_panControl$ = $dvt$$8$$.$ButtonLAFUtils$.$createPanButtonBackground$($DvtControlPanelEventManager$$, $styleMap$$52$$);
    this.$_panControl$.$addChild$(this.$_panButton$);
    this.$addChild$(this.$_panControl$);
  };
  $DvtPanControl$$.prototype.$HandlePanClick$ = function $$DvtPanControl$$$$$HandlePanClick$$($DvtControlPanelEventManager$$) {
    $dvt$$8$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
  };
  $DvtPanControl$$.prototype.$HandlePanMouseDown$ = function $$DvtPanControl$$$$$HandlePanMouseDown$$($DvtControlPanelEventManager$$) {
    $dvt$$8$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_bPanMouseDown$ = !0;
    this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(!1);
    $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$GetRelativeMousePosition$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$ = this.$_panButton$.$stageToLocal$($DvtControlPanelEventManager$$);
    this.$_rotatePanControlDirectionalArrow$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y, this.$_panButton$.$downState$);
    this.$_panMousePoint$ = new $dvt$$8$$.$Point$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y);
    this.$_panTimer$.start();
    this.$_panTimerCount$ = 0;
  };
  $DvtPanControl$$.prototype.$HandlePanMouseUp$ = function $$DvtPanControl$$$$$HandlePanMouseUp$$($DvtControlPanelEventManager$$) {
    this.$_bPanMouseDown$ && ($dvt$$8$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$), this.$_bPanMouseDown$ = !1, this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(!0), this.$_panTimer$.stop());
    this.$_panButton$.$_mouseOutHandler$($DvtControlPanelEventManager$$);
    this.$_tooltipManager$.$hideTooltip$();
  };
  $DvtPanControl$$.prototype.$HandlePanRollOver$ = function $$DvtPanControl$$$$$HandlePanRollOver$$($DvtControlPanelEventManager$$) {
    this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(!0);
    this.$_tooltipManager$.$showTooltip$($DvtControlPanelEventManager$$.pageX, $DvtControlPanelEventManager$$.pageY, $dvt$$8$$.$Bundle$.$getTranslatedString$($dvt$$8$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_PAN"), $DvtControlPanelEventManager$$.target);
  };
  $DvtPanControl$$.prototype.$HandlePanRollOut$ = function $$DvtPanControl$$$$$HandlePanRollOut$$($dvt$$8$$) {
    this.$HandlePanMouseUp$($dvt$$8$$);
    this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(!1);
  };
  $DvtPanControl$$.prototype.$HandlePanMouseMove$ = function $$DvtPanControl$$$$$HandlePanMouseMove$$($DvtControlPanelEventManager$$) {
    $dvt$$8$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$GetRelativeMousePosition$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$ = this.$_panButton$.$stageToLocal$($DvtControlPanelEventManager$$);
    this.$_bPanMouseDown$ ? (this.$_rotatePanControlDirectionalArrow$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y, this.$_panButton$.$downState$), this.$_panMousePoint$ = new $dvt$$8$$.$Point$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y)) : this.$_rotatePanControlDirectionalArrow$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y, this.$_panButton$.$overState$);
  };
  $DvtPanControl$$.prototype.$HandlePanTimer$ = function $$DvtPanControl$$$$$HandlePanTimer$$() {
    if (this.$_bPanMouseDown$) {
      var $dvt$$8$$ = Math.atan2(this.$_panCenter$.y - this.$_panMousePoint$.y, this.$_panCenter$.x - this.$_panMousePoint$.x), $DvtControlPanelEventManager$$ = Math.cos($dvt$$8$$), $dvt$$8$$ = Math.sin($dvt$$8$$), $DvtControlPanelEvent$$ = 15;
      this.$_panTimerCount$++;
      this.$_panTimerCount$ > $DvtPanControl$$.$PAN_TIMER_ACCELERATE_COUNT$ && ($DvtControlPanelEvent$$ *= 3);
      this.$_panZoomCanvas$.$panBy$($DvtControlPanelEvent$$ * $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$ * $dvt$$8$$);
    }
  };
  $DvtPanControl$$.prototype.$HandlePanCenterClick$ = function $$DvtPanControl$$$$$HandlePanCenterClick$$($DvtControlPanelEventManager$$) {
    $dvt$$8$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_panZoomCanvas$.$zoomAndCenter$();
  };
  $DvtPanControl$$.prototype.$HandlePanCenterDown$ = function $$DvtPanControl$$$$$HandlePanCenterDown$$($DvtControlPanelEventManager$$) {
    $dvt$$8$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
  };
  $DvtPanControl$$.prototype.$HandlePanCenterUp$ = function $$DvtPanControl$$$$$HandlePanCenterUp$$($DvtControlPanelEventManager$$) {
    $dvt$$8$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_tooltipManager$.$hideTooltip$();
  };
  $DvtPanControl$$.prototype.$HandlePanCenterRollOver$ = function $$DvtPanControl$$$$$HandlePanCenterRollOver$$($DvtControlPanelEventManager$$) {
    this.$_tooltipManager$.$showTooltip$($DvtControlPanelEventManager$$.pageX, $DvtControlPanelEventManager$$.pageY, $dvt$$8$$.$Bundle$.$getTranslatedString$($dvt$$8$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_ZOOMANDCENTER"), $DvtControlPanelEventManager$$.target);
    this.$_panCenterSprite$.$setVisible$(!0);
    $dvt$$8$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
  };
  $DvtPanControl$$.prototype.$HandlePanCenterRollOut$ = function $$DvtPanControl$$$$$HandlePanCenterRollOut$$($DvtControlPanelEventManager$$) {
    this.$_tooltipManager$.$hideTooltip$();
    $dvt$$8$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
  };
  $DvtPanControl$$.prototype.$HandlePanCenterMouseMove$ = function $$DvtPanControl$$$$$HandlePanCenterMouseMove$$($DvtControlPanelEventManager$$) {
    $dvt$$8$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
  };
  $DvtPanControl$$.prototype.$_rotatePanControlDirectionalArrow$ = function $$DvtPanControl$$$$$_rotatePanControlDirectionalArrow$$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    $DvtControlPanelEvent$$.$setRotation$(Math.atan2($DvtControlPanelEventManager$$ - this.$_panCenter$.y, $dvt$$8$$ - this.$_panCenter$.x) - Math.PI / 4);
  };
  $dvt$$8$$.$Obj$.$createSubclass$($DvtControlPanelEvent$$, $dvt$$8$$.$BaseComponentEvent$);
  $DvtControlPanelEvent$$.$TYPE$ = "dvtPZCPExpand";
  $DvtControlPanelEvent$$.$SUBTYPE_SHOW$ = "show";
  $DvtControlPanelEvent$$.$SUBTYPE_HIDE$ = "hide";
  $DvtControlPanelEvent$$.prototype.$getSubType$ = function $$DvtControlPanelEvent$$$$$getSubType$$() {
    return this.$_subtype$;
  };
  $dvt$$8$$.$ControlPanel$ = function $$dvt$$8$$$$ControlPanel$$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.Init($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$ControlPanel$, $dvt$$8$$.$Container$);
  $dvt$$8$$.$ControlPanel$.$STATE_COLLAPSED$ = 1;
  $dvt$$8$$.$ControlPanel$.$STATE_EXPANDED$ = 2;
  $dvt$$8$$.$ControlPanel$.$CONTROLS_ALL$ = 16777215;
  $dvt$$8$$.$ControlPanel$.$CONTROLS_ZOOM_SLIDER$ = 1;
  $dvt$$8$$.$ControlPanel$.$CONTROLS_CENTER_BUTTON$ = 16;
  $dvt$$8$$.$ControlPanel$.$CONTROLS_ZOOM_TO_FIT_BUTTON$ = 256;
  $dvt$$8$$.$ControlPanel$.$CONTROLS_ZOOM$ = 4097;
  $dvt$$8$$.$ControlPanel$.$DEFAULT_ZOOM_LEVELS$ = [0, .25, .5, .75, 1];
  $dvt$$8$$.$ControlPanel$.$CONTROL_PANEL_BEHAVIOR_KEY$ = "controlPanelBehavior";
  $dvt$$8$$.$ControlPanel$.$BG_ALPHA$ = "backgroundAlpha";
  $dvt$$8$$.$ControlPanel$.$BG_ROLLOVER_ALPHA$ = "backgroundHoverAlpha";
  $dvt$$8$$.$ControlPanel$.$BG_DRAG_ALPHA$ = "backgroundDragAlpha";
  $dvt$$8$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$ = "borderAlpha";
  $dvt$$8$$.$ControlPanel$.$FRAME_ROLLOVER_ALPHA$ = "borderHoverAlpha";
  $dvt$$8$$.$ControlPanel$.$FRAME_DRAG_ALPHA$ = "borderDragAlpha";
  $dvt$$8$$.$ControlPanel$.$CP_BUTTON_WIDTH$ = "buttonWidth";
  $dvt$$8$$.$ControlPanel$.$CP_BUTTON_HEIGHT$ = "buttonHeight";
  $dvt$$8$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$ = "openCloseButtonWidth";
  $dvt$$8$$.$ControlPanel$.$CP_TAB_SIZE$ = "tabSize";
  $dvt$$8$$.$ControlPanel$.$CP_PADDING_TOP$ = "paddingTop";
  $dvt$$8$$.$ControlPanel$.$CP_PADDING_SIDE$ = "paddingSide";
  $dvt$$8$$.$ControlPanel$.$CP_PADDING_BOTTOM$ = "paddingBottom";
  $dvt$$8$$.$ControlPanel$.$CP_PADDING_LEFT$ = "paddingLeft";
  $dvt$$8$$.$ControlPanel$.$CP_PADDING_RIGHT$ = "paddingRight";
  $dvt$$8$$.$ControlPanel$.$CP_PADDING_INNER$ = "paddingInner";
  $dvt$$8$$.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$ = "panelDrawerStyles";
  $dvt$$8$$.$ControlPanel$.$CP_IMAGE_WIDTH$ = "imageWidth";
  $dvt$$8$$.$ControlPanel$.$CP_IMAGE_HEIGHT$ = "imageHeight";
  $dvt$$8$$.$ControlPanel$.$CP_CENTER_BUTTON_DISPLAYED$ = "centerButtonDisplayed";
  $dvt$$8$$.$ControlPanel$.prototype.Init = function $$dvt$$8$$$$ControlPanel$$$Init$($DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    $dvt$$8$$.$ControlPanel$.$superclass$.Init.call(this, $DvtControlPanelEvent$$);
    this.$_bMouseOver$ = this.$_bMouseDragPanning$ = !1;
    this.$_panZoomCanvas$ = $DvtPanControl$$.$_panZoomCanvas$;
    this.$_controls$ = $DvtPanControl$$.$_displayedControls$;
    this.$_buttonImages$ = $DvtPanControl$$.$getResourcesMap$();
    this.$_tooltipManager$ = $DvtControlPanelEvent$$.$getTooltipManager$();
    this.$_styleMap$ = null;
    if (this.$_view$ = $DvtPanControl$$) {
      this.$_styleMap$ = this.$_view$.$getSubcomponentStyles$(), this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$CP_CENTER_BUTTON_DISPLAYED$] || (this.$_controls$ &= ~$dvt$$8$$.$ControlPanel$.$CONTROLS_CENTER_BUTTON$, this.$_view$.$setDisplayedControls$(this.$_controls$));
    }
    this.$_bTransition$ = !1;
    this.$_bgAlpha$ = this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$BG_ALPHA$];
    this.$_eventManager$ = new $DvtControlPanelEventManager$$($DvtControlPanelEvent$$, null, $DvtPanControl$$);
    this.$_eventManager$.$addRolloverType$($dvt$$8$$.$ControlPanel$);
    this.$_eventManager$.$addListeners$(this);
    this.$_eventManager$.$associate$(this, this);
    this.$_state$ = $DropdownItemSprite$$;
    this.$setPixelHinting$();
  };
  $dvt$$8$$.$ControlPanel$.prototype.$mouseDragPanningStarted$ = function $$dvt$$8$$$$ControlPanel$$$$mouseDragPanningStarted$$() {
    this.$_bMouseDragPanning$ = !0;
    this.$_background$.$setMouseEnabled$(!1);
    this.$_frame$.$setMouseEnabled$(!1);
    this.$_background$.$setAlpha$(this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$BG_DRAG_ALPHA$]);
    this.$_frame$.$setAlpha$(this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$FRAME_DRAG_ALPHA$]);
  };
  $dvt$$8$$.$ControlPanel$.prototype.$mouseDragPanningEnded$ = function $$dvt$$8$$$$ControlPanel$$$$mouseDragPanningEnded$$() {
    this.$_bMouseDragPanning$ = !1;
    this.$_background$.$setMouseEnabled$(!0);
    this.$_frame$.$setMouseEnabled$(!0);
    this.$_bMouseOver$ ? this.$HandleRollOver$(null) : this.$HandleRollOut$(null);
  };
  $dvt$$8$$.$ControlPanel$.prototype.$isSingleHorzRow$ = function $$dvt$$8$$$$ControlPanel$$$$isSingleHorzRow$$() {
    return !0;
  };
  $dvt$$8$$.$ControlPanel$.prototype.$getViewPanelHeight$ = function $$dvt$$8$$$$ControlPanel$$$$getViewPanelHeight$$() {
    var $DvtControlPanelEventManager$$ = 0, $DvtControlPanelEventManager$$ = this.$isSingleHorzRow$() ? $dvt$$8$$.$ControlPanelLAFUtils$.$getViewPanelHalfHeight$() : $dvt$$8$$.$ControlPanelLAFUtils$.$getViewPanelHeight$(), $DvtControlPanelEvent$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$ControlPanel$.$CP_TAB_SIZE$, 0);
    return Math.max($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$);
  };
  $dvt$$8$$.$ControlPanel$.prototype.$getViewPanelWidth$ = function $$dvt$$8$$$$ControlPanel$$$$getViewPanelWidth$$() {
    return $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$ControlPanel$.$CP_TAB_SIZE$, 0);
  };
  $dvt$$8$$.$ControlPanel$.prototype.$RenderCollapsed$ = function $$dvt$$8$$$$ControlPanel$$$$RenderCollapsed$$() {
    var $DvtControlPanelEventManager$$ = this.$getCtx$(), $DvtControlPanelEvent$$ = new $dvt$$8$$.$Container$($DvtControlPanelEventManager$$), $DvtPanControl$$ = this.$getViewPanelHeight$(), $DropdownItemSprite$$ = $dvt$$8$$.$Agent$.$isRightToLeft$($DvtControlPanelEventManager$$);
    this.$_background$ = $dvt$$8$$.$ControlPanelLAFUtils$.$createEmptyViewClosedShape$($DvtControlPanelEventManager$$, $DvtPanControl$$, this.$_styleMap$, $DropdownItemSprite$$);
    this.$_frame$ = $dvt$$8$$.$ControlPanelLAFUtils$.$createEmptyViewClosedFrame$($DvtControlPanelEventManager$$, $DvtPanControl$$, this.$_styleMap$, $DropdownItemSprite$$);
    this.$_collapsedDim$ = $dvt$$8$$.$ButtonLAFUtils$.$_getDimForced$($DvtControlPanelEventManager$$, this.$_frame$);
    this.$_expandButton$ = $dvt$$8$$.$ButtonLAFUtils$.$createExpandButton$(this.$getCtx$(), this.$_buttonImages$, this.$getViewPanelHeight$(), this.$_styleMap$, $DropdownItemSprite$$ ? $dvt$$8$$.$ButtonLAFUtils$.$DIR_RIGHT$ : $dvt$$8$$.$ButtonLAFUtils$.$DIR_LEFT$);
    this.$_expandButton$.$setCallback$(this.$HandleExpandClick$, this);
    this.$_expandButton$.$setTooltip$($dvt$$8$$.$Bundle$.$getTranslatedString$($dvt$$8$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL"));
    this.$_eventManager$.$associate$(this.$_expandButton$, this.$_expandButton$);
    this.$_frame$.$addChild$(this.$_expandButton$);
    $DvtControlPanelEvent$$.$addChild$(this.$_background$);
    $DvtControlPanelEvent$$.$addChild$(this.$_frame$);
    return $DvtControlPanelEvent$$;
  };
  $dvt$$8$$.$ControlPanel$.prototype.$_addZoomToFitButton$ = function $$dvt$$8$$$$ControlPanel$$$$_addZoomToFitButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    if (0 != (this.$_controls$ & $dvt$$8$$.$ControlPanel$.$CONTROLS_ZOOM_TO_FIT_BUTTON$)) {
      var $DvtPanControl$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, $dvt$$8$$.$ControlPanel$.$CP_PADDING_INNER$, 0), $DropdownItemSprite$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, $dvt$$8$$.$ControlPanel$.$CP_PADDING_LEFT$, 0);
      this.$_zoomToFitButton$ = $dvt$$8$$.$ButtonLAFUtils$.$createZoomToFitButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
      this.$_zoomToFitButton$.$setTranslate$($DropdownItemSprite$$, this.$_zoomToFitButton$.$getTranslateY$() + $DvtControlPanelEvent$$);
      this.$_zoomToFitButton$.$setCallback$(this.$HandleZoomToFitClick$, this);
      this.$_zoomToFitButton$.$setTooltip$($dvt$$8$$.$Bundle$.$getTranslatedString$($dvt$$8$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_ZOOMTOFIT"));
      this.$_eventManager$.$associate$(this.$_zoomToFitButton$, this.$_zoomToFitButton$);
      $DropdownItemSprite$$ = $dvt$$8$$.$ButtonLAFUtils$.$_getDimForced$(this.$getCtx$(), this.$_zoomToFitButton$);
      $DvtControlPanelEventManager$$.$addChild$(this.$_zoomToFitButton$);
      $DvtControlPanelEvent$$ += $DropdownItemSprite$$.$h$;
      $DvtControlPanelEvent$$ += $DvtPanControl$$;
    }
    return $DvtControlPanelEvent$$;
  };
  $dvt$$8$$.$ControlPanel$.prototype.$_addZoomControls$ = function $$dvt$$8$$$$ControlPanel$$$$_addZoomControls$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, $dvt$$8$$.$ControlPanel$.$CP_PADDING_INNER$, 0), $DropdownItemSprite$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, $dvt$$8$$.$ControlPanel$.$CP_PADDING_LEFT$, 0);
    if (0 != (this.$_controls$ & $dvt$$8$$.$ControlPanel$.$CONTROLS_ZOOM$)) {
      this.$_zoomInButton$ = $dvt$$8$$.$ButtonLAFUtils$.$createZoomInButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
      this.$_zoomInButton$.$setTranslate$($DropdownItemSprite$$, this.$_zoomInButton$.$getTranslateY$() + $DvtControlPanelEvent$$);
      this.$_zoomInButton$.$setCallback$(this.$HandleZoomInClick$, this);
      this.$_zoomInButton$.$setTooltip$($dvt$$8$$.$Bundle$.$getTranslatedString$($dvt$$8$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_ZOOMIN"));
      this.$_eventManager$.$associate$(this.$_zoomInButton$, this.$_zoomInButton$);
      var $DvtControlPanelDefaults$$ = $dvt$$8$$.$ButtonLAFUtils$.$_getDimForced$(this.$getCtx$(), this.$_zoomInButton$);
      $DvtControlPanelEventManager$$.$addChild$(this.$_zoomInButton$);
      $DvtControlPanelEvent$$ += $DvtControlPanelDefaults$$.$h$ + $DvtPanControl$$;
      this.$_zoomOutButton$ = $dvt$$8$$.$ButtonLAFUtils$.$createZoomOutButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
      this.$_zoomOutButton$.$setTranslate$($DropdownItemSprite$$, this.$_zoomOutButton$.$getTranslateY$() + $DvtControlPanelEvent$$);
      this.$_zoomOutButton$.$setCallback$(this.$HandleZoomOutClick$, this);
      this.$_zoomOutButton$.$setTooltip$($dvt$$8$$.$Bundle$.$getTranslatedString$($dvt$$8$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_ZOOMOUT"));
      this.$_eventManager$.$associate$(this.$_zoomOutButton$, this.$_zoomOutButton$);
      $DvtControlPanelDefaults$$ = $dvt$$8$$.$ButtonLAFUtils$.$_getDimForced$(this.$getCtx$(), this.$_zoomOutButton$);
      $DvtControlPanelEventManager$$.$addChild$(this.$_zoomOutButton$);
      $DvtControlPanelEvent$$ += $DvtControlPanelDefaults$$.$h$;
      this.$enableZoomControls$();
    }
    return $DvtControlPanelEvent$$;
  };
  $dvt$$8$$.$ControlPanel$.prototype.$_createVBarBackground$ = function $$dvt$$8$$$$ControlPanel$$$$_createVBarBackground$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    var $DvtControlPanelDefaults$$ = this.$getCtx$();
    if ($DvtControlPanelEvent$$) {
      var $nVertContentBarChildren_roundedCorner$$ = $DvtControlPanelEvent$$.$getNumChildren$(), $nVertContentBarChildren_roundedCorner$$ = 1 < $nVertContentBarChildren_roundedCorner$$ || null == this.$_zoomToFitButton$ || 1 < $DvtPanControl$$ || 0 < $DvtPanControl$$ && 1 == $nVertContentBarChildren_roundedCorner$$, $openside$$ = null;
      this.$_styleMap$ && this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$] && ($openside$$ = 0 < $DvtPanControl$$ ? $dvt$$8$$.$ControlPanelLAFUtils$.$OPEN_TOP$ : $dvt$$8$$.$ControlPanelLAFUtils$.$OPEN_RIGHT$);
      $DvtControlPanelEventManager$$ = $dvt$$8$$.$ButtonLAFUtils$.$_getDimForced$($DvtControlPanelDefaults$$, $DvtControlPanelEventManager$$);
      $DropdownItemSprite$$ += 4;
      $DropdownItemSprite$$ = $nVertContentBarChildren_roundedCorner$$ ? $DropdownItemSprite$$ : Math.max($DvtControlPanelEventManager$$.$h$, $DropdownItemSprite$$);
      $DvtControlPanelEventManager$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, $dvt$$8$$.$ControlPanel$.$CP_PADDING_BOTTOM$, 0);
      $DropdownItemSprite$$ += $DvtControlPanelEventManager$$;
      $DvtControlPanelEventManager$$ = $dvt$$8$$.$ControlPanelLAFUtils$.$renderEmptyZoomShape$($DvtControlPanelDefaults$$, $DropdownItemSprite$$, this.$_styleMap$, $openside$$, this.$getViewPanelHeight$());
      $DvtControlPanelDefaults$$ = $dvt$$8$$.$ControlPanelLAFUtils$.$renderEmptyZoomFrame$($DvtControlPanelDefaults$$, $DropdownItemSprite$$, $nVertContentBarChildren_roundedCorner$$, this.$_styleMap$, $openside$$, this.$getViewPanelHeight$());
      $DvtControlPanelEventManager$$.$setTranslate$($DvtControlPanelEvent$$.$getTranslateX$(), $DvtControlPanelEvent$$.$getTranslateY$());
      this.$_background$.$addChild$($DvtControlPanelEventManager$$);
      $DvtControlPanelEvent$$.$addChildAt$($DvtControlPanelDefaults$$, 0);
    }
  };
  $dvt$$8$$.$ControlPanel$.prototype.$_positionVBarElements$ = function $$dvt$$8$$$$ControlPanel$$$$_positionVBarElements$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$getCtx$(), $DropdownItemSprite$$ = $dvt$$8$$.$Agent$.$isRightToLeft$($DvtPanControl$$), $DvtControlPanelDefaults$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
    this.$_additionalContent$ || 0 != (this.$_controls$ & $dvt$$8$$.$ControlPanel$.$CONTROLS_CENTER_BUTTON$) ? $DropdownItemSprite$$ && $DvtControlPanelEvent$$ && ($DvtPanControl$$ = $dvt$$8$$.$ButtonLAFUtils$.$_getDimForced$($DvtPanControl$$, $DvtControlPanelEventManager$$), $DropdownItemSprite$$ = this.$getViewPanelWidth$(), $DvtControlPanelEventManager$$.$setTranslateX$(0), $DvtControlPanelEvent$$.$setTranslateX$($DvtPanControl$$.$w$ + $DvtPanControl$$.x - $DropdownItemSprite$$)) : $DropdownItemSprite$$ ? 
    ($DvtControlPanelEventManager$$.$setTranslateX$(0 - $DvtControlPanelEventManager$$.$getTranslateX$()), $DvtControlPanelEventManager$$.$setTranslateY$(0), $DvtControlPanelEvent$$ && ($DvtControlPanelEventManager$$.$setTranslateX$($DvtControlPanelEventManager$$.$getTranslateX$() - $DvtControlPanelDefaults$$), $DvtControlPanelEvent$$.$setTranslateY$(0))) : $DvtControlPanelEvent$$ ? ($DvtPanControl$$ = this.$getViewPanelWidth$(), $DvtControlPanelEvent$$.$setTranslate$(0, 0), $DvtControlPanelEventManager$$.$setTranslate$($DvtControlPanelEventManager$$.$getTranslateX$() + 
    $DvtPanControl$$, 0)) : $DvtControlPanelEventManager$$.$setTranslate$($DvtControlPanelEventManager$$.$getTranslateX$(), 0);
  };
  $dvt$$8$$.$ControlPanel$.prototype.$_createHBarPanControl$ = function $$dvt$$8$$$$ControlPanel$$$$_createHBarPanControl$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = 0, $DvtPanControl$$ = this.$getCtx$(), $DropdownItemSprite$$ = this.$isSingleHorzRow$();
    0 != (this.$_controls$ & $dvt$$8$$.$ControlPanel$.$CONTROLS_CENTER_BUTTON$) && (this.$_panControl$ = $dvt$$8$$.$ButtonLAFUtils$.$createPanControl$($DvtPanControl$$, this.$_panZoomCanvas$, this.$_controls$, this.$_buttonImages$, this.$_styleMap$), $DropdownItemSprite$$ && (this.$_panControlUnderlay$ = $dvt$$8$$.$ButtonLAFUtils$.$createPanButtonUnderlay$($DvtPanControl$$, this.$_styleMap$), this.$_panControlUnderlay2$ = $dvt$$8$$.$ButtonLAFUtils$.$createPanButtonUnderlay$($DvtPanControl$$, this.$_styleMap$), 
    $DvtControlPanelEventManager$$.$addChild$(this.$_panControlUnderlay2$), $DvtControlPanelEventManager$$.$addChild$(this.$_panControlUnderlay$)), $DvtControlPanelEventManager$$.$addChild$(this.$_panControl$), $DvtControlPanelEvent$$++);
    return $DvtControlPanelEvent$$;
  };
  $dvt$$8$$.$ControlPanel$.prototype.$_createHBarAdditionalContent$ = function $$dvt$$8$$$$ControlPanel$$$$_createHBarAdditionalContent$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.$_additionalContent$ = new $dvt$$8$$.$Container$(this.$getCtx$());
    this.$PopulateHorzContentBar$(this.$_additionalContent$);
    0 < this.$_additionalContent$.$getNumChildren$() ? ($DvtControlPanelEventManager$$.$addChild$(this.$_additionalContent$), $DvtControlPanelEvent$$++) : this.$_additionalContent$ = null;
    return $DvtControlPanelEvent$$;
  };
  $dvt$$8$$.$ControlPanel$.prototype.$_createHBarCollapseButton$ = function $$dvt$$8$$$$ControlPanel$$$$_createHBarCollapseButton$$($DvtControlPanelEventManager$$) {
    this.$_collapseButton$ = $dvt$$8$$.$ButtonLAFUtils$.$createCollapseButton$(this.$getCtx$(), this.$_buttonImages$, this.$getViewPanelHeight$(), this.$_styleMap$, $dvt$$8$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? $dvt$$8$$.$ButtonLAFUtils$.$DIR_RIGHT$ : $dvt$$8$$.$ButtonLAFUtils$.$DIR_LEFT$);
    this.$_collapseButton$.$setCallback$(this.$HandleCollapseClick$, this);
    this.$_collapseButton$.$setTooltip$($dvt$$8$$.$Bundle$.$getTranslatedString$($dvt$$8$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL"));
    this.$_eventManager$.$associate$(this.$_collapseButton$, this.$_collapseButton$);
    $DvtControlPanelEventManager$$.$addChild$(this.$_collapseButton$);
  };
  $dvt$$8$$.$ControlPanel$.prototype.$_positionHBarElements$ = function $$dvt$$8$$$$ControlPanel$$$$_positionHBarElements$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$_context$, $DropdownItemSprite$$ = null, $DvtControlPanelDefaults$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0), $buttonWidth$$4$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$ControlPanel$.$CP_BUTTON_WIDTH$, 0), $panelWidth$$ = this.$getViewPanelWidth$(), $panelHeight$$ = this.$getViewPanelHeight$(), $buttonPaddingSide$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$.hbar, 
    $dvt$$8$$.$ControlPanel$.$CP_PADDING_LEFT$, 0), $buttonPaddingInner$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$.hbar, $dvt$$8$$.$ControlPanel$.$CP_PADDING_INNER$, 0);
    $DvtControlPanelEventManager$$ ? (this.$_collapseButton$.$setTranslateX$(0), $DvtControlPanelEvent$$ += $DvtControlPanelDefaults$$, this.$_additionalContent$ && ($DropdownItemSprite$$ = $dvt$$8$$.$ButtonLAFUtils$.$_getDimForced$($DvtPanControl$$, this.$_additionalContent$), $DvtControlPanelEvent$$ += $buttonPaddingInner$$, this.$_additionalContent$.$setTranslate$($DvtControlPanelEvent$$, ($panelHeight$$ - $DropdownItemSprite$$.$h$) / 2), $DvtControlPanelEvent$$ += Math.max($DropdownItemSprite$$.$w$, 
    $buttonWidth$$4$$)), this.$_panControl$ && ($DvtControlPanelEvent$$ += $buttonPaddingInner$$, $DropdownItemSprite$$ = 3.5, this.$_panControl$.$setTranslate$($DvtControlPanelEvent$$, $DropdownItemSprite$$), this.$_panControlUnderlay$ && this.$_panControlUnderlay$.$setTranslate$($DvtControlPanelEvent$$, $DropdownItemSprite$$), this.$_panControlUnderlay2$ && this.$_panControlUnderlay2$.$setTranslate$($DvtControlPanelEvent$$, $DropdownItemSprite$$), $DropdownItemSprite$$ = $dvt$$8$$.$ButtonLAFUtils$.$_getDimForced$($DvtPanControl$$, 
    this.$_panControl$), $DvtControlPanelEvent$$ += $DropdownItemSprite$$.$w$), $DvtControlPanelEvent$$ += $buttonPaddingSide$$) : (this.$_panControl$ && ($DvtControlPanelEvent$$ += $buttonPaddingSide$$, $DropdownItemSprite$$ = 3.5, this.$_panControl$.$setTranslate$($buttonPaddingSide$$, $DropdownItemSprite$$), this.$_panControlUnderlay$ && this.$_panControlUnderlay$.$setTranslate$($buttonPaddingSide$$, $DropdownItemSprite$$), this.$_panControlUnderlay2$ && this.$_panControlUnderlay2$.$setTranslate$($buttonPaddingSide$$, 
    $DropdownItemSprite$$), $DropdownItemSprite$$ = $dvt$$8$$.$ButtonLAFUtils$.$_getDimForced$($DvtPanControl$$, this.$_panControl$), $DvtControlPanelEvent$$ += $buttonPaddingInner$$ + $DropdownItemSprite$$.$w$, $DvtControlPanelEvent$$ += 1), this.$_additionalContent$ && ($DropdownItemSprite$$ = $dvt$$8$$.$ButtonLAFUtils$.$_getDimForced$($DvtPanControl$$, this.$_additionalContent$), 0 == $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$ += $buttonPaddingSide$$), this.$_additionalContent$.$setTranslate$($DvtControlPanelEvent$$, 
    ($panelHeight$$ - $DropdownItemSprite$$.$h$) / 2), $DvtControlPanelEvent$$ += $DropdownItemSprite$$.$w$, $DvtControlPanelEvent$$ = Math.max($DvtControlPanelEvent$$ + $buttonPaddingInner$$, $panelWidth$$)), this.$_collapseButton$.$setTranslateX$($DvtControlPanelEvent$$), $DvtControlPanelEvent$$ += $DvtControlPanelDefaults$$);
    return $DvtControlPanelEvent$$;
  };
  $dvt$$8$$.$ControlPanel$.prototype.$_createHBarBackground$ = function $$dvt$$8$$$$ControlPanel$$$$_createHBarBackground$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $context$$303$$ = this.$_context$, $buttonWidth$$5_viewFrame$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0), $panelWidth$$1$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$ControlPanel$.$CP_TAB_SIZE$, 0), $panelDrawerStyle$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$, null);
    $DvtControlPanelDefaults$$ = $panelDrawerStyle$$ ? $DvtControlPanelDefaults$$ : $DvtControlPanelDefaults$$ - $buttonWidth$$5_viewFrame$$;
    var $backgroundHeight$$1$$ = this.$getViewPanelHeight$(), $backgroundFrameOffsetX$$ = 0, $backgroundShapeOffsetX$$ = 0;
    $panelDrawerStyle$$ ? $panelDrawerStyle$$ && 0 == $DvtPanControl$$ && ($backgroundShapeOffsetX$$ = $DropdownItemSprite$$ ? -$panelWidth$$1$$ : $panelWidth$$1$$) : ($backgroundFrameOffsetX$$ = $DropdownItemSprite$$ ? $buttonWidth$$5_viewFrame$$ : 0, $backgroundShapeOffsetX$$ = $DropdownItemSprite$$ ? $buttonWidth$$5_viewFrame$$ : 0);
    if (0 < $DvtPanControl$$ || $panelDrawerStyle$$) {
      var $r$$42_viewShape$$ = $buttonWidth$$5_viewFrame$$ = null, $r$$42_viewShape$$ = parseInt($dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$CSSStyle$.$BORDER_RADIUS$, 0));
      $panelDrawerStyle$$ ? ($DvtControlPanelEvent$$ = 0 < $DvtPanControl$$ && null != $DvtControlPanelEvent$$ ? $dvt$$8$$.$ControlPanelLAFUtils$.$OPEN_BOTTOM$ : $dvt$$8$$.$ControlPanelLAFUtils$.$OPEN_LEFT$, $buttonWidth$$5_viewFrame$$ = $dvt$$8$$.$ControlPanelLAFUtils$.$makeViewOpenShapeHelperOpenSide$($context$$303$$, $r$$42_viewShape$$, $DvtControlPanelDefaults$$, $backgroundHeight$$1$$, $DvtControlPanelEvent$$, $panelWidth$$1$$), $r$$42_viewShape$$ = $dvt$$8$$.$ControlPanelLAFUtils$.$makeViewOpenShapeHelperOpenSide$($context$$303$$, 
      $r$$42_viewShape$$, $DvtControlPanelDefaults$$, $backgroundHeight$$1$$, $DvtControlPanelEvent$$, $panelWidth$$1$$)) : ($buttonWidth$$5_viewFrame$$ = $dvt$$8$$.$ControlPanelLAFUtils$.$createEmptyViewOpenShape$($context$$303$$, $DvtControlPanelDefaults$$, this.$getViewPanelHeight$(), !$DropdownItemSprite$$, this.$_styleMap$), $r$$42_viewShape$$ = $dvt$$8$$.$ControlPanelLAFUtils$.$createEmptyViewOpenShape$($context$$303$$, $DvtControlPanelDefaults$$, this.$getViewPanelHeight$(), !$DropdownItemSprite$$, 
      this.$_styleMap$));
      $buttonWidth$$5_viewFrame$$.$setSolidStroke$($dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$CSSStyle$.$BORDER_COLOR$, null));
      $buttonWidth$$5_viewFrame$$.$setFill$(null);
      $buttonWidth$$5_viewFrame$$.$setTranslate$($DvtControlPanelEventManager$$.$getTranslateX$() + $backgroundFrameOffsetX$$, $DvtControlPanelEventManager$$.$getTranslateY$());
      $DvtControlPanelEventManager$$.$addChildAt$($buttonWidth$$5_viewFrame$$, 0);
      $r$$42_viewShape$$.$setSolidFill$($dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$, null));
      $r$$42_viewShape$$.$setTranslate$($DvtControlPanelEventManager$$.$getTranslateX$() + $backgroundShapeOffsetX$$, $DvtControlPanelEventManager$$.$getTranslateY$());
      this.$_background$.$addChild$($r$$42_viewShape$$);
    }
  };
  $dvt$$8$$.$ControlPanel$.prototype.$RenderExpanded$ = function $$dvt$$8$$$$ControlPanel$$$$RenderExpanded$$() {
    var $DvtControlPanelEventManager$$ = this.$getCtx$(), $DvtControlPanelEvent$$ = new $dvt$$8$$.$Container$($DvtControlPanelEventManager$$);
    this.$_background$ = new $dvt$$8$$.$Container$($DvtControlPanelEventManager$$);
    this.$_frame$ = new $dvt$$8$$.$Container$($DvtControlPanelEventManager$$);
    $DvtControlPanelEvent$$.$addChild$(this.$_background$);
    $DvtControlPanelEvent$$.$addChild$(this.$_frame$);
    var $DvtPanControl$$ = $dvt$$8$$.$Agent$.$isRightToLeft$($DvtControlPanelEventManager$$), $DropdownItemSprite$$ = 0, $DvtControlPanelDefaults$$ = new $dvt$$8$$.$Container$($DvtControlPanelEventManager$$), $nHorzContentBarChildren$$4$$;
    $nHorzContentBarChildren$$4$$ = this.$_createHBarPanControl$($DvtControlPanelDefaults$$);
    this.$_createHBarCollapseButton$($DvtControlPanelDefaults$$);
    $nHorzContentBarChildren$$4$$ = this.$_createHBarAdditionalContent$($DvtControlPanelDefaults$$, $nHorzContentBarChildren$$4$$);
    var $DropdownItemSprite$$ = this.$_positionHBarElements$($DvtPanControl$$, $DropdownItemSprite$$), $vertContentBar$$5$$ = null, $currY$$16$$ = this.$_getVBarButtonsOffsetY$($nHorzContentBarChildren$$4$$);
    this.$isSingleHorzRow$() && 0 != (this.$_controls$ & $dvt$$8$$.$ControlPanel$.$CONTROLS_CENTER_BUTTON$) && ($currY$$16$$ += $dvt$$8$$.$ControlPanelLAFUtils$.$getViewPanelHeight$() - this.$getViewPanelHeight$());
    if (0 != (this.$_controls$ & $dvt$$8$$.$ControlPanel$.$CONTROLS_ZOOM_TO_FIT_BUTTON$) || 0 != (this.$_controls$ & $dvt$$8$$.$ControlPanel$.$CONTROLS_ZOOM$)) {
      $vertContentBar$$5$$ = new $dvt$$8$$.$Container$($DvtControlPanelEventManager$$), $vertContentBar$$5$$.$setTranslateY$($DvtControlPanelDefaults$$.$getTranslateY$() + this.$getViewPanelHeight$()), $currY$$16$$ = this.$_addZoomToFitButton$($vertContentBar$$5$$, $currY$$16$$), $currY$$16$$ = this.$_addZoomControls$($vertContentBar$$5$$, $currY$$16$$), this.$_frame$.$addChild$($vertContentBar$$5$$);
    }
    this.$_createHBarBackground$($DvtControlPanelDefaults$$, $vertContentBar$$5$$, $nHorzContentBarChildren$$4$$, $DvtPanControl$$, $DropdownItemSprite$$);
    this.$_frame$.$addChild$($DvtControlPanelDefaults$$);
    this.$_positionVBarElements$($DvtControlPanelDefaults$$, $vertContentBar$$5$$);
    this.$_createVBarBackground$($DvtControlPanelDefaults$$, $vertContentBar$$5$$, $nHorzContentBarChildren$$4$$, $currY$$16$$);
    this.$_expandedDim$ = $dvt$$8$$.$ButtonLAFUtils$.$_getDimForced$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
    return $DvtControlPanelEvent$$;
  };
  $dvt$$8$$.$ControlPanel$.prototype.$PopulateHorzContentBar$ = function $$dvt$$8$$$$ControlPanel$$$$PopulateHorzContentBar$$() {
  };
  $dvt$$8$$.$ControlPanel$.prototype.$toggleExpandCollapse$ = function $$dvt$$8$$$$ControlPanel$$$$toggleExpandCollapse$$() {
    this.$_bTransition$ || (this.$_state$ === $dvt$$8$$.$ControlPanel$.$STATE_EXPANDED$ ? this.$_doCollapse$() : this.$_state$ === $dvt$$8$$.$ControlPanel$.$STATE_COLLAPSED$ && this.$_doExpand$());
  };
  $dvt$$8$$.$ControlPanel$.prototype.$HandleExpandClick$ = function $$dvt$$8$$$$ControlPanel$$$$HandleExpandClick$$($DvtControlPanelEventManager$$) {
    $dvt$$8$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_bTransition$ || (this.$_doExpand$(), this.$_tooltipManager$.$hideTooltip$());
  };
  $dvt$$8$$.$ControlPanel$.prototype.$_doExpand$ = function $$dvt$$8$$$$ControlPanel$$$$_doExpand$$() {
    this.$_bTransition$ = !0;
    this.$setMouseEnabled$(!1);
    var $dvt$$8$$ = this.$RenderExpanded$();
    this.$addChild$($dvt$$8$$);
    this.$_applyAlphasForMouse$();
    this.$transitionExpand$(this.$getChildAt$(0), $dvt$$8$$);
    this.$fireExpandEvent$();
  };
  $dvt$$8$$.$ControlPanel$.prototype.$_applyAlphasForMouse$ = function $$dvt$$8$$$$ControlPanel$$$$_applyAlphasForMouse$$() {
    var $dvt$$8$$ = !1;
    this.$getCtx$().$_stage$ && ($dvt$$8$$ = !0);
    $dvt$$8$$ ? this.$_applyAlphasRollover$() : this.$_applyAlphasRollout$();
  };
  $dvt$$8$$.$ControlPanel$.prototype.$HandleCollapseClick$ = function $$dvt$$8$$$$ControlPanel$$$$HandleCollapseClick$$($DvtControlPanelEventManager$$) {
    $dvt$$8$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_bTransition$ || this.$_doCollapse$();
  };
  $dvt$$8$$.$ControlPanel$.prototype.$_doCollapse$ = function $$dvt$$8$$$$ControlPanel$$$$_doCollapse$$() {
    this.$_bTransition$ = !0;
    var $dvt$$8$$ = this.$RenderCollapsed$();
    this.$addChild$($dvt$$8$$);
    this.$_applyAlphasForMouse$();
    this.$transitionCollapse$(this.$getChildAt$(0), $dvt$$8$$);
    this.$fireCollapseEvent$();
  };
  $dvt$$8$$.$ControlPanel$.prototype.$transitionExpand$ = function $$dvt$$8$$$$ControlPanel$$$$transitionExpand$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $DvtControlPanelEventManager$$.$getDimensions$(), $DropdownItemSprite$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
    if ($DvtPanControl$$ && 0 != $DvtPanControl$$.$w$) {
      var $DvtControlPanelDefaults$$ = $DvtControlPanelEvent$$.$getDimensions$(), $animator$$111$$ = new $dvt$$8$$.$Animator$(this.$getCtx$(), .25);
      $DvtControlPanelEventManager$$.$setAlpha$(1);
      $DvtControlPanelEvent$$.$setAlpha$(0);
      $animator$$111$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$.$getAlpha$, $DvtControlPanelEventManager$$.$setAlpha$, 0);
      $animator$$111$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$.$getAlpha$, $DvtControlPanelEvent$$.$setAlpha$, 1);
      $DvtControlPanelEvent$$.$setScaleX$($DvtPanControl$$.$w$ / $DvtControlPanelDefaults$$.$w$);
      $animator$$111$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$.$getScaleX$, $DvtControlPanelEvent$$.$setScaleX$, 1);
      if ($dvt$$8$$.$Agent$.$isRightToLeft$(this.$getCtx$())) {
        $DvtControlPanelEvent$$.$setTranslateX$($DvtControlPanelEventManager$$.$getTranslateX$());
        var $dimWidth$$ = $DvtControlPanelDefaults$$.$w$ + $DvtControlPanelDefaults$$.x;
        $animator$$111$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$.$getTranslateX$, $DvtControlPanelEvent$$.$setTranslateX$, $DvtControlPanelEventManager$$.$getTranslateX$() + $DropdownItemSprite$$ - $dimWidth$$);
      }
      $DvtControlPanelEvent$$.$setScaleY$($DvtPanControl$$.$h$ / $DvtControlPanelDefaults$$.$h$);
      $animator$$111$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$.$getScaleY$, $DvtControlPanelEvent$$.$setScaleY$, 1);
      $animator$$111$$.$setOnEnd$(function() {
        $DvtControlPanelEventManager$$.getParent().removeChild($DvtControlPanelEventManager$$);
        this.$_bTransition$ = !1;
        this.$setMouseEnabled$(!0);
        this.$_state$ = $dvt$$8$$.$ControlPanel$.$STATE_EXPANDED$;
      }, this);
      $animator$$111$$.play();
    } else {
      this.$_state$ = $dvt$$8$$.$ControlPanel$.$STATE_EXPANDED$, $DvtControlPanelEventManager$$.getParent().removeChild($DvtControlPanelEventManager$$), this.$PositionExpanded$($DvtControlPanelEvent$$);
    }
  };
  $dvt$$8$$.$ControlPanel$.prototype.$PositionExpanded$ = function $$dvt$$8$$$$ControlPanel$$$$PositionExpanded$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$;
    if ($dvt$$8$$.$Agent$.$isRightToLeft$(this.$getCtx$())) {
      $DvtControlPanelEvent$$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
      var $DvtPanControl$$ = $dvt$$8$$.$DisplayableUtils$.$getDimensionsForced$(this.$getCtx$(), $DvtControlPanelEventManager$$);
      $DvtControlPanelEvent$$ -= Math.floor($DvtPanControl$$.$w$ + $DvtPanControl$$.x);
    } else {
      $DvtControlPanelEvent$$ = 0;
    }
    $DvtControlPanelEventManager$$.$setTranslate$($DvtControlPanelEvent$$, 0);
  };
  $dvt$$8$$.$ControlPanel$.prototype.$transitionCollapse$ = function $$dvt$$8$$$$ControlPanel$$$$transitionCollapse$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = new $dvt$$8$$.$Animator$(this.$getCtx$(), .25);
    $DvtControlPanelEventManager$$.$setAlpha$(1);
    $DvtControlPanelEvent$$.$setAlpha$(0);
    $DvtPanControl$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$.$getAlpha$, $DvtControlPanelEventManager$$.$setAlpha$, 0);
    $DvtPanControl$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$.$getAlpha$, $DvtControlPanelEvent$$.$setAlpha$, 1);
    var $DropdownItemSprite$$ = this.$_collapsedDim$, $DvtControlPanelDefaults$$ = this.$_expandedDim$;
    $DvtPanControl$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$.$getScaleX$, $DvtControlPanelEventManager$$.$setScaleX$, $DropdownItemSprite$$.$w$ / $DvtControlPanelDefaults$$.$w$);
    $dvt$$8$$.$Agent$.$isRightToLeft$(this.$getCtx$()) && $DvtPanControl$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$.$getTranslateX$, $DvtControlPanelEventManager$$.$setTranslateX$, $DvtControlPanelEvent$$.$getTranslateX$());
    $DvtPanControl$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$.$getScaleY$, $DvtControlPanelEventManager$$.$setScaleY$, $DropdownItemSprite$$.$h$ / $DvtControlPanelDefaults$$.$h$);
    $DvtPanControl$$.$setOnEnd$(function() {
      $DvtControlPanelEventManager$$.getParent().removeChild($DvtControlPanelEventManager$$);
      this.$_bTransition$ = !1;
      this.$_state$ = $dvt$$8$$.$ControlPanel$.$STATE_COLLAPSED$;
    }, this);
    $DvtPanControl$$.play();
  };
  $dvt$$8$$.$ControlPanel$.prototype.$fireExpandEvent$ = function $$dvt$$8$$$$ControlPanel$$$$fireExpandEvent$$() {
    var $dvt$$8$$ = new $DvtControlPanelEvent$$($DvtControlPanelEvent$$.$SUBTYPE_SHOW$);
    this.$FireListener$($dvt$$8$$);
  };
  $dvt$$8$$.$ControlPanel$.prototype.$fireCollapseEvent$ = function $$dvt$$8$$$$ControlPanel$$$$fireCollapseEvent$$() {
    var $dvt$$8$$ = new $DvtControlPanelEvent$$($DvtControlPanelEvent$$.$SUBTYPE_HIDE$);
    this.$FireListener$($dvt$$8$$);
  };
  $dvt$$8$$.$ControlPanel$.prototype.$HandleRollOver$ = function $$dvt$$8$$$$ControlPanel$$$$HandleRollOver$$() {
    this.$_bMouseOver$ = !0;
    this.$_bMouseDragPanning$ || this.$_applyAlphasRollover$();
  };
  $dvt$$8$$.$ControlPanel$.prototype.$HandleRollOut$ = function $$dvt$$8$$$$ControlPanel$$$$HandleRollOut$$() {
    this.$_bMouseOver$ = !1;
    this.$_bMouseDragPanning$ || this.$_applyAlphasRollout$();
  };
  $dvt$$8$$.$ControlPanel$.prototype.$_applyAlphasRollover$ = function $$dvt$$8$$$$ControlPanel$$$$_applyAlphasRollover$$() {
    this.$_background$.$setAlpha$(this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$BG_ROLLOVER_ALPHA$]);
    this.$_frame$.$setAlpha$(this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$FRAME_ROLLOVER_ALPHA$]);
    this.$_panControlUnderlay$ && this.$_panControlUnderlay$.$setAlpha$(this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$BG_ROLLOVER_ALPHA$]);
  };
  $dvt$$8$$.$ControlPanel$.prototype.$_applyAlphasRollout$ = function $$dvt$$8$$$$ControlPanel$$$$_applyAlphasRollout$$() {
    this.$_background$.$setAlpha$(this.$_bgAlpha$);
    this.$_frame$.$setAlpha$(this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
    this.$_panControlUnderlay$ && this.$_panControlUnderlay$.$setAlpha$(this.$_bgAlpha$);
  };
  $dvt$$8$$.$ControlPanel$.prototype.$getDimensions$ = function $$dvt$$8$$$$ControlPanel$$$$getDimensions$$() {
    this.$_dim$ || (this.$_dim$ = $dvt$$8$$.$ControlPanel$.$superclass$.$getDimensions$.call(this));
    return this.$_dim$;
  };
  $dvt$$8$$.$ControlPanel$.prototype.$renderComponent$ = function $$dvt$$8$$$$ControlPanel$$$$renderComponent$$() {
    var $DvtControlPanelEventManager$$;
    this.$_state$ == $dvt$$8$$.$ControlPanel$.$STATE_COLLAPSED$ ? $DvtControlPanelEventManager$$ = this.$RenderCollapsed$() : ($DvtControlPanelEventManager$$ = this.$RenderExpanded$(), this.$PositionExpanded$($DvtControlPanelEventManager$$));
    this.$_background$.$setAlpha$(this.$_bgAlpha$);
    this.$_frame$.$setAlpha$(this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
    this.$addChild$($DvtControlPanelEventManager$$);
  };
  $dvt$$8$$.$ControlPanel$.prototype.$getButtonImages$ = function $$dvt$$8$$$$ControlPanel$$$$getButtonImages$$() {
    return this.$_buttonImages$;
  };
  $dvt$$8$$.$ControlPanel$.prototype.$_getVBarButtonsOffsetY$ = function $$dvt$$8$$$$ControlPanel$$$$_getVBarButtonsOffsetY$$($DvtControlPanelEventManager$$) {
    return this.$_controls$ & $dvt$$8$$.$ControlPanel$.$CONTROLS_CENTER_BUTTON$ || this.$_styleMap$ && this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$] && 0 == $DvtControlPanelEventManager$$ ? $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, $dvt$$8$$.$ControlPanel$.$CP_PADDING_TOP$, 0) : 0;
  };
  $dvt$$8$$.$ControlPanel$.prototype.$enableZoomControls$ = function $$dvt$$8$$$$ControlPanel$$$$enableZoomControls$$() {
    var $dvt$$8$$ = this.$_panZoomCanvas$.$getZoom$(), $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$getNextZoomLevel$($dvt$$8$$), $DvtControlPanelEvent$$ = this.$_panZoomCanvas$.$getPrevZoomLevel$($dvt$$8$$);
    this.$_zoomInButton$ && this.$_zoomInButton$.$setEnabled$($dvt$$8$$ != $DvtControlPanelEventManager$$);
    this.$_zoomOutButton$ && this.$_zoomOutButton$.$setEnabled$($dvt$$8$$ != $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$ControlPanel$.prototype.$enableZoomInControl$ = function $$dvt$$8$$$$ControlPanel$$$$enableZoomInControl$$($dvt$$8$$) {
    this.$_zoomInButton$ && this.$_zoomInButton$.$setEnabled$($dvt$$8$$);
  };
  $dvt$$8$$.$ControlPanel$.prototype.$enableZoomOutControl$ = function $$dvt$$8$$$$ControlPanel$$$$enableZoomOutControl$$($dvt$$8$$) {
    this.$_zoomOutButton$ && this.$_zoomOutButton$.$setEnabled$($dvt$$8$$);
  };
  $dvt$$8$$.$ControlPanel$.prototype.$HandleZoomInClick$ = function $$dvt$$8$$$$ControlPanel$$$$HandleZoomInClick$$() {
    var $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$getZoom$(), $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$getNextZoomLevel$($DvtControlPanelEventManager$$), $DvtControlPanelEvent$$ = new $dvt$$8$$.$Animator$(this.$getCtx$(), this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomTo$($DvtControlPanelEventManager$$, void 0, void 0, $DvtControlPanelEvent$$);
    $DvtControlPanelEvent$$.play();
  };
  $dvt$$8$$.$ControlPanel$.prototype.$HandleZoomOutClick$ = function $$dvt$$8$$$$ControlPanel$$$$HandleZoomOutClick$$() {
    var $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$getZoom$(), $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$getPrevZoomLevel$($DvtControlPanelEventManager$$), $DvtControlPanelEvent$$ = new $dvt$$8$$.$Animator$(this.$getCtx$(), this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomTo$($DvtControlPanelEventManager$$, void 0, void 0, $DvtControlPanelEvent$$);
    $DvtControlPanelEvent$$.play();
  };
  $dvt$$8$$.$ControlPanel$.prototype.$HandleZoomToFitClick$ = function $$dvt$$8$$$$ControlPanel$$$$HandleZoomToFitClick$$() {
    var $DvtControlPanelEventManager$$ = new $dvt$$8$$.$Animator$(this.$getCtx$(), this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomToFit$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$.play();
  };
  $dvt$$8$$.$ControlPanel$.prototype.$getEventManager$ = function $$dvt$$8$$$$ControlPanel$$$$getEventManager$$() {
    return this.$_eventManager$;
  };
  $dvt$$8$$.$ControlPanel$.prototype.$isDisclosed$ = function $$dvt$$8$$$$ControlPanel$$$$isDisclosed$$() {
    return this.$_state$ == $dvt$$8$$.$ControlPanel$.$STATE_EXPANDED$;
  };
  $dvt$$8$$.$ControlPanel$.prototype.$getActionDisplayable$ = function $$dvt$$8$$$$ControlPanel$$$$getActionDisplayable$$($dvt$$8$$) {
    if ("disclosure" == $dvt$$8$$) {
      return this.$isDisclosed$() ? this.$_collapseButton$ : this.$_expandButton$;
    }
    if (this.$isDisclosed$()) {
      if ("zoomToFit" == $dvt$$8$$ && this.$_zoomToFitButton$ && this.$_zoomToFitButton$.isEnabled()) {
        return this.$_zoomToFitButton$;
      }
      if ("zoomIn" == $dvt$$8$$ && this.$_zoomInButton$ && this.$_zoomInButton$.isEnabled()) {
        return this.$_zoomInButton$;
      }
      if ("zoomOut" == $dvt$$8$$ && this.$_zoomOutButton$ && this.$_zoomOutButton$.isEnabled()) {
        return this.$_zoomOutButton$;
      }
    }
    return null;
  };
  var $DvtControlPanelDefaults$$ = {};
  $dvt$$8$$.$Obj$.$createSubclass$($DvtControlPanelDefaults$$, $dvt$$8$$.$Obj$);
  $DvtControlPanelDefaults$$.$SKIN_ALTA$ = {"fill-type":"solid", backgroundAlpha:1, backgroundDragAlpha:1, borderDragAlpha:1, panelDrawerStyles:!0, buttonWidth:42, buttonHeight:42, buttonRadius:0, openCloseButtonWidth:42, tabSize:42, paddingTop:15, paddingSide:-1, imageWidth:24, imageHeight:24, centerButtonDisplayed:!1, scrollbarBackground:"linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)", scrollbarBorderColor:"#dce2e7", scrollbarHandleColor:"#abb0b4", scrollbarHandleHoverColor:"#333333", scrollbarHandleActiveColor:"#333333", 
  comboBox:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0, itemHeight:30, imagePadding:0, itemPadding:10}, vbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}, hbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}};
  $DvtControlPanelDefaults$$.$SKIN_SKYROS$ = {"fill-type":"solid"};
  $DvtControlPanelDefaults$$.DEFAULT = {"fill-type":"gradient", "border-color":"#ffffff", "background-color":"#ffffff", "border-radius":6, backgroundAlpha:.5, backgroundHoverAlpha:1, backgroundDragAlpha:.5, borderAlpha:1, borderHoverAlpha:1, borderDragAlpha:.5, tabSize:26, buttonWidth:22, buttonHeight:22, buttonRadius:3, paddingTop:5, paddingSide:5, imageWidth:22, imageHeight:20, openCloseButtonWidth:10, centerButtonDisplayed:!0, comboBox:{paddingTop:2, paddingBottom:6, paddingLeft:3, paddingRight:3, 
  paddingInner:2, itemHeight:22, radius:4, imagePadding:2, itemPadding:7}, vbar:{paddingTop:2.5, paddingBottom:2.5, paddingLeft:2, paddingRight:2, paddingInner:2}, hbar:{paddingTop:2, paddingBottom:2, paddingLeft:3, paddingRight:3, paddingInner:2}};
  $DvtControlPanelDefaults$$.$calcOptions$ = function $$DvtControlPanelDefaults$$$$calcOptions$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = $DvtControlPanelDefaults$$.$_getDefaults$($DvtControlPanelEventManager$$);
    return $DvtControlPanelEventManager$$ ? $dvt$$8$$.$JsonUtils$.$merge$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) : $DvtControlPanelEvent$$;
  };
  $DvtControlPanelDefaults$$.$_getDefaults$ = function $$DvtControlPanelDefaults$$$$_getDefaults$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = null;
    return $DvtControlPanelEvent$$ = $DvtControlPanelEventManager$$ && "skyros" === $DvtControlPanelEventManager$$.skin ? $dvt$$8$$.$JsonUtils$.$merge$($DvtControlPanelDefaults$$.$SKIN_SKYROS$, $DvtControlPanelDefaults$$.DEFAULT) : $DvtControlPanelEventManager$$ && "alta" === $DvtControlPanelEventManager$$.skin ? $dvt$$8$$.$JsonUtils$.$merge$($DvtControlPanelDefaults$$.$SKIN_ALTA$, $DvtControlPanelDefaults$$.DEFAULT) : $dvt$$8$$.$JsonUtils$.clone($DvtControlPanelDefaults$$.DEFAULT);
  };
  $dvt$$8$$.$Obj$.$createSubclass$($DvtControlPanelEventManager$$, $dvt$$8$$.$EventManager$);
  $DvtControlPanelEventManager$$.prototype.$OnMouseDown$ = function $$DvtControlPanelEventManager$$$$$OnMouseDown$$($dvt$$8$$) {
    var $DvtControlPanelEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$8$$));
    $DvtControlPanelEventManager$$.$superclass$.$OnMouseDown$.call(this, $dvt$$8$$);
    $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$.$HandleMouseDown$ && $DvtControlPanelEvent$$.$HandleMouseDown$($dvt$$8$$), $dvt$$8$$.stopPropagation());
  };
  $DvtControlPanelEventManager$$.prototype.$OnMouseUp$ = function $$DvtControlPanelEventManager$$$$$OnMouseUp$$($dvt$$8$$) {
    var $DvtControlPanelEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$8$$));
    $DvtControlPanelEventManager$$.$superclass$.$OnMouseUp$.call(this, $dvt$$8$$);
    $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$.$HandleMouseUp$ && $DvtControlPanelEvent$$.$HandleMouseUp$(), $dvt$$8$$.stopPropagation());
  };
  $DvtControlPanelEventManager$$.prototype.$OnMouseOut$ = function $$DvtControlPanelEventManager$$$$$OnMouseOut$$($dvt$$8$$) {
    var $DvtControlPanelEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$8$$));
    $DvtControlPanelEventManager$$.$superclass$.$OnMouseOut$.call(this, $dvt$$8$$);
    $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$.$HandleMouseOut$ && $DvtControlPanelEvent$$.$HandleMouseOut$(), $dvt$$8$$.stopPropagation());
  };
  $DvtControlPanelEventManager$$.prototype.$OnClick$ = function $$DvtControlPanelEventManager$$$$$OnClick$$($dvt$$8$$) {
    var $DvtControlPanelEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$8$$));
    $DvtControlPanelEventManager$$.$superclass$.$OnClick$.call(this, $dvt$$8$$);
    $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$.$HandleClick$ && $DvtControlPanelEvent$$.$HandleClick$($dvt$$8$$), $dvt$$8$$.stopPropagation());
  };
  $DvtControlPanelEventManager$$.prototype.$OnRollOver$ = function $$DvtControlPanelEventManager$$$$$OnRollOver$$($dvt$$8$$) {
    $DvtControlPanelEventManager$$.$superclass$.$OnRollOver$.call(this, $dvt$$8$$);
    var $DvtControlPanelEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$8$$));
    $DvtControlPanelEvent$$ && $DvtControlPanelEvent$$.$HandleRollOver$ && $DvtControlPanelEvent$$.$HandleRollOver$($dvt$$8$$);
  };
  $DvtControlPanelEventManager$$.prototype.$OnRollOut$ = function $$DvtControlPanelEventManager$$$$$OnRollOut$$($dvt$$8$$) {
    $DvtControlPanelEventManager$$.$superclass$.$OnRollOut$.call(this, $dvt$$8$$);
    var $DvtControlPanelEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$8$$));
    $DvtControlPanelEvent$$ && $DvtControlPanelEvent$$.$HandleRollOut$ && $DvtControlPanelEvent$$.$HandleRollOut$($dvt$$8$$);
  };
  $DvtControlPanelEventManager$$.prototype.$OnComponentTouchClick$ = function $$DvtControlPanelEventManager$$$$$OnComponentTouchClick$$($dvt$$8$$) {
    var $DvtControlPanelEventManager$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$8$$));
    $DvtControlPanelEventManager$$ && ($DvtControlPanelEventManager$$.$HandleClick$ && $DvtControlPanelEventManager$$.$HandleClick$($dvt$$8$$), $dvt$$8$$.stopPropagation());
  };
  $DvtControlPanelEventManager$$.prototype.$HandleImmediateTouchStartInternal$ = function $$DvtControlPanelEventManager$$$$$HandleImmediateTouchStartInternal$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$.$blockTouchHold$();
    $dvt$$8$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
  };
  $dvt$$8$$.$ControlPanelLAFUtils$ = {};
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$ControlPanelLAFUtils$, $dvt$$8$$.$Obj$);
  $dvt$$8$$.$ControlPanelLAFUtils$.$OPEN_TOP$ = "top";
  $dvt$$8$$.$ControlPanelLAFUtils$.$OPEN_RIGHT$ = "right";
  $dvt$$8$$.$ControlPanelLAFUtils$.$OPEN_LEFT$ = "left";
  $dvt$$8$$.$ControlPanelLAFUtils$.$OPEN_BOTTOM$ = "bottom";
  $dvt$$8$$.$ControlPanelLAFUtils$.$VIEW_PANEL_HEIGHT$ = 47;
  $dvt$$8$$.$ControlPanelLAFUtils$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
  $dvt$$8$$.$ControlPanelLAFUtils$.$SIN_PI_4$ = Math.sin(Math.PI / 4);
  $dvt$$8$$.$ControlPanelLAFUtils$.$TAN_PI_8$ = Math.tan(Math.PI / 8);
  $dvt$$8$$.$ControlPanelLAFUtils$.$getViewPanelHeight$ = function $$dvt$$8$$$$ControlPanelLAFUtils$$$getViewPanelHeight$$() {
    return $dvt$$8$$.$ControlPanelLAFUtils$.$VIEW_PANEL_HEIGHT$;
  };
  $dvt$$8$$.$ControlPanelLAFUtils$.$getViewPanelHalfHeight$ = function $$dvt$$8$$$$ControlPanelLAFUtils$$$getViewPanelHalfHeight$$() {
    return $dvt$$8$$.$ControlPanelLAFUtils$.$VIEW_PANEL_HALF_HEIGHT$;
  };
  $dvt$$8$$.$ControlPanelLAFUtils$.$createEmptyViewOpenShape$ = function $$dvt$$8$$$$ControlPanelLAFUtils$$$createEmptyViewOpenShape$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelEvent$$ || ($DvtControlPanelEvent$$ = 86);
    $DvtPanControl$$ || ($DvtPanControl$$ = 47);
    void 0 === $DropdownItemSprite$$ && ($DropdownItemSprite$$ = !0);
    $DvtControlPanelDefaults$$ = parseInt($dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$CSSStyle$.$BORDER_RADIUS$, 0));
    return $dvt$$8$$.$ControlPanelLAFUtils$.$makeViewOpenShapeHelper$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$ - 2 * $DvtControlPanelDefaults$$, $DvtPanControl$$ - 2 * $DvtControlPanelDefaults$$, $DropdownItemSprite$$);
  };
  $dvt$$8$$.$ControlPanelLAFUtils$.$makeViewOpenShapeHelper$ = function $$dvt$$8$$$$ControlPanelLAFUtils$$$makeViewOpenShapeHelper$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $x$$189$$ = $DvtPanControl$$ + $DvtControlPanelEvent$$, $y$$170$$ = $DropdownItemSprite$$ + $DvtControlPanelEvent$$, $cmds$$20$$ = $dvt$$8$$.$PathUtils$.moveTo($x$$189$$ + $DvtControlPanelEvent$$, $y$$170$$ + $DvtControlPanelEvent$$), $cmds$$20$$ = $cmds$$20$$ + $dvt$$8$$.$PathUtils$.lineTo($x$$189$$ - $DvtPanControl$$, $y$$170$$ + $DvtControlPanelEvent$$), $x$$189$$ = $x$$189$$ - $DvtPanControl$$, $cmds$$20$$ = $cmds$$20$$ + $dvt$$8$$.$PathUtils$.lineTo($x$$189$$ - $DvtControlPanelEvent$$, 
    $y$$170$$ + $DvtControlPanelEvent$$), $cmds$$20$$ = $cmds$$20$$ + $dvt$$8$$.$PathUtils$.lineTo($x$$189$$ - $DvtControlPanelEvent$$, $y$$170$$ - $DropdownItemSprite$$), $y$$170$$ = $y$$170$$ - $DropdownItemSprite$$;
    $DvtControlPanelDefaults$$ ? ($cmds$$20$$ += $dvt$$8$$.$PathUtils$.$quadTo$(-$DvtControlPanelEvent$$ + $x$$189$$, -$dvt$$8$$.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$170$$, -$dvt$$8$$.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $x$$189$$, -$dvt$$8$$.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$170$$) + $dvt$$8$$.$PathUtils$.$quadTo$(-$dvt$$8$$.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $x$$189$$, -$DvtControlPanelEvent$$ + 
    $y$$170$$, $x$$189$$, -$DvtControlPanelEvent$$ + $y$$170$$) + $dvt$$8$$.$PathUtils$.lineTo($x$$189$$, -$DvtControlPanelEvent$$ + $y$$170$$), $cmds$$20$$ += $dvt$$8$$.$PathUtils$.lineTo($x$$189$$ + $DvtPanControl$$ + $DvtControlPanelEvent$$, -$DvtControlPanelEvent$$ + $y$$170$$), $cmds$$20$$ += $dvt$$8$$.$PathUtils$.lineTo($x$$189$$ + $DvtPanControl$$ + $DvtControlPanelEvent$$, $y$$170$$ + $DropdownItemSprite$$)) : ($cmds$$20$$ += $dvt$$8$$.$PathUtils$.lineTo($x$$189$$ - $DvtControlPanelEvent$$, 
    -$DvtControlPanelEvent$$ + $y$$170$$), $cmds$$20$$ += $dvt$$8$$.$PathUtils$.lineTo($x$$189$$ + $DvtPanControl$$, -$DvtControlPanelEvent$$ + $y$$170$$), $x$$189$$ += $DvtPanControl$$, $cmds$$20$$ += $dvt$$8$$.$PathUtils$.$quadTo$($dvt$$8$$.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $x$$189$$, -$DvtControlPanelEvent$$ + $y$$170$$, $dvt$$8$$.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $x$$189$$, -$dvt$$8$$.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + 
    $y$$170$$) + $dvt$$8$$.$PathUtils$.$quadTo$($DvtControlPanelEvent$$ + $x$$189$$, -$dvt$$8$$.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$170$$, $DvtControlPanelEvent$$ + $x$$189$$, $y$$170$$) + $dvt$$8$$.$PathUtils$.lineTo($x$$189$$ + $DvtControlPanelEvent$$, $y$$170$$ + $DropdownItemSprite$$));
    $cmds$$20$$ += $dvt$$8$$.$PathUtils$.closePath();
    return new $dvt$$8$$.$Path$($DvtControlPanelEventManager$$, $cmds$$20$$);
  };
  $dvt$$8$$.$ControlPanelLAFUtils$.$createEmptyViewClosedShape$ = function $$dvt$$8$$$$ControlPanelLAFUtils$$$createEmptyViewClosedShape$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    $DvtControlPanelEvent$$ || ($DvtControlPanelEvent$$ = 47);
    var $DvtControlPanelDefaults$$ = parseInt($dvt$$8$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$8$$.$CSSStyle$.$BORDER_RADIUS$, 0)), $buttonWidth$$6$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$8$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
    $DvtControlPanelEvent$$ = Math.max($DvtControlPanelEvent$$, $dvt$$8$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$8$$.$ControlPanel$.$CP_BUTTON_HEIGHT$, $DvtControlPanelEvent$$));
    $DropdownItemSprite$$ = $dvt$$8$$.$ButtonLAFUtils$.$GetButtonPathCommands$($buttonWidth$$6$$, $DvtControlPanelEvent$$, $DvtControlPanelDefaults$$, $DropdownItemSprite$$);
    $DropdownItemSprite$$ = $DropdownItemSprite$$.concat("Z");
    $DvtControlPanelEventManager$$ = new $dvt$$8$$.$Path$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, "cls_shape");
    ($DropdownItemSprite$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$8$$.$PanelDrawer$.$TAB_BG_COLOR_INACTIVE$, null)) || ($DropdownItemSprite$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$, null));
    $DvtControlPanelEventManager$$.$setSolidFill$($DropdownItemSprite$$);
    return $DvtControlPanelEventManager$$;
  };
  $dvt$$8$$.$ControlPanelLAFUtils$.$createEmptyViewClosedFrame$ = function $$dvt$$8$$$$ControlPanelLAFUtils$$$createEmptyViewClosedFrame$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    $DvtControlPanelEvent$$ || ($DvtControlPanelEvent$$ = 47);
    var $DvtControlPanelDefaults$$ = parseInt($dvt$$8$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$8$$.$CSSStyle$.$BORDER_RADIUS$, 0)), $buttonWidth$$7$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$8$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
    $DvtControlPanelEvent$$ = Math.max($DvtControlPanelEvent$$, $dvt$$8$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$8$$.$ControlPanel$.$CP_BUTTON_HEIGHT$, $DvtControlPanelEvent$$));
    $DropdownItemSprite$$ = $dvt$$8$$.$ButtonLAFUtils$.$GetButtonPathCommands$($buttonWidth$$7$$, $DvtControlPanelEvent$$, $DvtControlPanelDefaults$$, $DropdownItemSprite$$);
    $DropdownItemSprite$$ = $DropdownItemSprite$$.concat("Z");
    $DvtControlPanelEventManager$$ = new $dvt$$8$$.$Path$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, "cls_shape");
    $DvtControlPanelEventManager$$.$setSolidStroke$($dvt$$8$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$8$$.$CSSStyle$.$BORDER_COLOR$, null));
    $DvtControlPanelEventManager$$.$setFill$(null);
    return $DvtControlPanelEventManager$$;
  };
  $dvt$$8$$.$ControlPanelLAFUtils$.$renderEmptyZoomShape$ = function $$dvt$$8$$$$ControlPanelLAFUtils$$$renderEmptyZoomShape$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelEvent$$ || ($DvtControlPanelEvent$$ = 137);
    var $r$$47$$ = parseInt($dvt$$8$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$8$$.$CSSStyle$.$BORDER_RADIUS$, 0)), $cpWidth$$1$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$8$$.$ControlPanel$.$CP_TAB_SIZE$, 0), $ww$$91$$ = $cpWidth$$1$$ - 2 * $r$$47$$, $hh$$76$$ = $DvtControlPanelEvent$$ + 7 - 2 * $r$$47$$;
    $DvtControlPanelEventManager$$ = $DropdownItemSprite$$ && $DvtControlPanelDefaults$$ ? $dvt$$8$$.$ControlPanelLAFUtils$.$makeZoomShapeHelperOpenSide$($DvtControlPanelEventManager$$, $r$$47$$, $cpWidth$$1$$, $DvtControlPanelEvent$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) : $dvt$$8$$.$ControlPanelLAFUtils$.$makeZoomShapeHelper$($DvtControlPanelEventManager$$, $r$$47$$, $ww$$91$$, $hh$$76$$);
    $DvtControlPanelEventManager$$.$setSolidFill$($dvt$$8$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$, null));
    return $DvtControlPanelEventManager$$;
  };
  $dvt$$8$$.$ControlPanelLAFUtils$.$renderEmptyZoomFrame$ = function $$dvt$$8$$$$ControlPanelLAFUtils$$$renderEmptyZoomFrame$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $openSideSize$$1$$) {
    $DvtControlPanelEvent$$ || ($DvtControlPanelEvent$$ = 137);
    $DvtPanControl$$ || ($DvtPanControl$$ = !0);
    var $r$$48$$ = parseInt($dvt$$8$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, $dvt$$8$$.$CSSStyle$.$BORDER_RADIUS$, 0)), $cpWidth$$2$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, $dvt$$8$$.$ControlPanel$.$CP_TAB_SIZE$, 0), $ww$$92$$ = $cpWidth$$2$$ - 2 * $r$$48$$, $hh$$77$$ = $DvtControlPanelEvent$$ + 7 - 2 * $r$$48$$, $mc$$4$$ = null, $mc$$4$$ = $DvtControlPanelDefaults$$ && $openSideSize$$1$$ ? $dvt$$8$$.$ControlPanelLAFUtils$.$makeZoomShapeHelperOpenSide$($DvtControlPanelEventManager$$, 
    $r$$48$$, $cpWidth$$2$$, $DvtControlPanelEvent$$, $DvtControlPanelDefaults$$, $openSideSize$$1$$) : $dvt$$8$$.$ControlPanelLAFUtils$.$makeZoomShapeHelper$($DvtControlPanelEventManager$$, $r$$48$$, $ww$$92$$, $hh$$77$$, $DvtPanControl$$);
    $mc$$4$$.$setSolidStroke$($dvt$$8$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, $dvt$$8$$.$CSSStyle$.$BORDER_COLOR$, null));
    $mc$$4$$.$setFill$(null);
    return $mc$$4$$;
  };
  $dvt$$8$$.$ControlPanelLAFUtils$.$makeZoomShapeHelper$ = function $$dvt$$8$$$$ControlPanelLAFUtils$$$makeZoomShapeHelper$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelDefaults$$ || ($DvtControlPanelDefaults$$ = !0);
    var $x$$190$$ = $DvtPanControl$$ + $DvtControlPanelEvent$$, $y$$171$$ = $DropdownItemSprite$$, $cmds$$21$$ = $dvt$$8$$.$PathUtils$.moveTo($x$$190$$ + $DvtControlPanelEvent$$, $y$$171$$), $cmds$$21$$ = $DvtControlPanelDefaults$$ ? $cmds$$21$$ + ($dvt$$8$$.$PathUtils$.$quadTo$($DvtControlPanelEvent$$ + $x$$190$$, $dvt$$8$$.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$171$$, $dvt$$8$$.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $x$$190$$, $dvt$$8$$.$ControlPanelLAFUtils$.$SIN_PI_4$ * 
    $DvtControlPanelEvent$$ + $y$$171$$) + $dvt$$8$$.$PathUtils$.$quadTo$($dvt$$8$$.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $x$$190$$, $DvtControlPanelEvent$$ + $y$$171$$, $x$$190$$, $DvtControlPanelEvent$$ + $y$$171$$) + $dvt$$8$$.$PathUtils$.lineTo($x$$190$$, $DvtControlPanelEvent$$ + $y$$171$$)) : $cmds$$21$$ + $dvt$$8$$.$PathUtils$.lineTo($x$$190$$ + $DvtControlPanelEvent$$, $y$$171$$ + $DvtControlPanelEvent$$), $cmds$$21$$ = $cmds$$21$$ + $dvt$$8$$.$PathUtils$.lineTo($x$$190$$ - 
    $DvtPanControl$$, $DvtControlPanelEvent$$ + $y$$171$$), $x$$190$$ = $x$$190$$ - $DvtPanControl$$, $cmds$$21$$ = $cmds$$21$$ + ($dvt$$8$$.$PathUtils$.$quadTo$(-$dvt$$8$$.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $x$$190$$, $DvtControlPanelEvent$$ + $y$$171$$, -$dvt$$8$$.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $x$$190$$, $dvt$$8$$.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$171$$) + $dvt$$8$$.$PathUtils$.$quadTo$(-$DvtControlPanelEvent$$ + 
    $x$$190$$, $dvt$$8$$.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$171$$, -$DvtControlPanelEvent$$ + $x$$190$$, $y$$171$$) + $dvt$$8$$.$PathUtils$.lineTo(-$DvtControlPanelEvent$$ + $x$$190$$, $y$$171$$) + $dvt$$8$$.$PathUtils$.lineTo(-$DvtControlPanelEvent$$ + $x$$190$$, $y$$171$$ - $DropdownItemSprite$$)), $y$$171$$ = $y$$171$$ - $DropdownItemSprite$$, $cmds$$21$$ = $cmds$$21$$ + ($dvt$$8$$.$PathUtils$.lineTo($x$$190$$ + $DvtPanControl$$ + $DvtControlPanelEvent$$, $y$$171$$) + 
    $dvt$$8$$.$PathUtils$.lineTo($x$$190$$ + $DvtPanControl$$ + $DvtControlPanelEvent$$, $y$$171$$ + $DropdownItemSprite$$) + $dvt$$8$$.$PathUtils$.closePath());
    return new $dvt$$8$$.$Path$($DvtControlPanelEventManager$$, $cmds$$21$$);
  };
  $dvt$$8$$.$ControlPanelLAFUtils$.$makeZoomShapeHelperOpenSide$ = function $$dvt$$8$$$$ControlPanelLAFUtils$$$makeZoomShapeHelperOpenSide$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $openSideSize$$2$$) {
    $DvtControlPanelEvent$$ = $dvt$$8$$.$ControlPanelLAFUtils$.$GetShapePathCommands$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelEvent$$, $DvtControlPanelDefaults$$, $openSideSize$$2$$);
    return new $dvt$$8$$.$Path$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$ControlPanelLAFUtils$.$makeViewOpenShapeHelperOpenSide$ = function $$dvt$$8$$$$ControlPanelLAFUtils$$$makeViewOpenShapeHelperOpenSide$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $openSideSize$$3$$) {
    $DvtControlPanelEvent$$ = $dvt$$8$$.$ControlPanelLAFUtils$.$GetShapePathCommands$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelEvent$$, $DvtControlPanelDefaults$$, $openSideSize$$3$$);
    return new $dvt$$8$$.$Path$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$ControlPanelLAFUtils$.$GetShapePathCommands$ = function $$dvt$$8$$$$ControlPanelLAFUtils$$$GetShapePathCommands$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $openSideSize$$4$$) {
    var $arPoints$$12$$;
    $DvtControlPanelEventManager$$ = $dvt$$8$$.$Agent$.$isRightToLeft$($DvtControlPanelEventManager$$);
    $DvtControlPanelDefaults$$ != $dvt$$8$$.$ControlPanelLAFUtils$.$OPEN_TOP$ || $DvtControlPanelEventManager$$ || ($arPoints$$12$$ = ["M", $DvtControlPanelEvent$$, 0, "L", $DvtControlPanelEvent$$, $DvtPanControl$$ - $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$ - $DropdownItemSprite$$, $DvtPanControl$$, "L", 0, $DvtPanControl$$, "L", 0, 0]);
    $DvtControlPanelDefaults$$ == $dvt$$8$$.$ControlPanelLAFUtils$.$OPEN_TOP$ && $DvtControlPanelEventManager$$ ? $arPoints$$12$$ = ["M", $DvtControlPanelEvent$$, 0, "L", $DvtControlPanelEvent$$, $DvtPanControl$$, "L", $DropdownItemSprite$$, $DvtPanControl$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, 0, $DvtPanControl$$ - $DropdownItemSprite$$, "L", 0, 0] : $DvtControlPanelDefaults$$ != $dvt$$8$$.$ControlPanelLAFUtils$.$OPEN_RIGHT$ || $DvtControlPanelEventManager$$ ? $DvtControlPanelDefaults$$ == 
    $dvt$$8$$.$ControlPanelLAFUtils$.$OPEN_RIGHT$ && $DvtControlPanelEventManager$$ ? $arPoints$$12$$ = ["M", 0, 0, "L", $DvtControlPanelEvent$$, 0, "L", $DvtControlPanelEvent$$, $DvtPanControl$$, "L", $DropdownItemSprite$$, $DvtPanControl$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, 0, $DvtPanControl$$ - $DropdownItemSprite$$, "L", 0, $openSideSize$$4$$] : $DvtControlPanelDefaults$$ != $dvt$$8$$.$ControlPanelLAFUtils$.$OPEN_LEFT$ || $DvtControlPanelEventManager$$ ? $DvtControlPanelDefaults$$ == 
    $dvt$$8$$.$ControlPanelLAFUtils$.$OPEN_LEFT$ && $DvtControlPanelEventManager$$ ? $arPoints$$12$$ = ["M", $DvtControlPanelEvent$$, $DvtPanControl$$, "L", $DropdownItemSprite$$, $DvtPanControl$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, 0, $DvtPanControl$$ - $DropdownItemSprite$$, "L", 0, $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DropdownItemSprite$$, 0, "L", $DvtControlPanelEvent$$, 0] : $DvtControlPanelDefaults$$ != $dvt$$8$$.$ControlPanelLAFUtils$.$OPEN_BOTTOM$ || 
    $DvtControlPanelEventManager$$ ? $DvtControlPanelDefaults$$ == $dvt$$8$$.$ControlPanelLAFUtils$.$OPEN_BOTTOM$ && $DvtControlPanelEventManager$$ && ($arPoints$$12$$ = ["M", $DvtControlPanelEvent$$, $DvtPanControl$$, "L", $DvtControlPanelEvent$$, 0, "L", $DropdownItemSprite$$, 0, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 0, 0, $DropdownItemSprite$$, "L", 0, $DvtPanControl$$ - $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 0, $DropdownItemSprite$$, 
    $DvtPanControl$$, "L", $DvtControlPanelEvent$$ - $openSideSize$$4$$, $DvtPanControl$$]) : $arPoints$$12$$ = ["M", 0, $DvtPanControl$$, "L", 0, 0, "L", $DvtControlPanelEvent$$ - $DropdownItemSprite$$, 0, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$, $DropdownItemSprite$$, "L", $DvtControlPanelEvent$$, $DvtPanControl$$ - $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$ - $DropdownItemSprite$$, $DvtPanControl$$, 
    "L", $openSideSize$$4$$, $DvtPanControl$$] : $arPoints$$12$$ = ["M", 0, 0, "L", $DvtControlPanelEvent$$ - $DropdownItemSprite$$, 0, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$, $DropdownItemSprite$$, "L", $DvtControlPanelEvent$$, $DvtPanControl$$ - $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$ - $DropdownItemSprite$$, $DvtPanControl$$, "L", 0, $DvtPanControl$$] : $arPoints$$12$$ = ["M", $DvtControlPanelEvent$$, 
    $openSideSize$$4$$, "L", $DvtControlPanelEvent$$, $DvtPanControl$$ - $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$ - $DropdownItemSprite$$, $DvtPanControl$$, "L", 0, $DvtPanControl$$, "L", 0, 0, "L", $DvtControlPanelEvent$$, 0];
    return $arPoints$$12$$;
  };
  $dvt$$8$$.$PanZoomComponent$ = function $$dvt$$8$$$$PanZoomComponent$$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.Init($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$PanZoomComponent$, $dvt$$8$$.$BaseComponent$);
  $dvt$$8$$.$PanZoomComponent$.$BOX_SHADOW$ = "box-shadow";
  $dvt$$8$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED$ = "initCollapsed";
  $dvt$$8$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_EXPANDED$ = "initExpanded";
  $dvt$$8$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_HIDDEN$ = "hidden";
  $dvt$$8$$.$PanZoomComponent$.$PAN_ZOOM_KEY$ = "panZoomInfo";
  $dvt$$8$$.$PanZoomComponent$.$SKIN_NAME$ = "skin";
  $dvt$$8$$.$PanZoomComponent$.$_ATTR_INLINE_STYLE$ = "inlineStyle";
  $dvt$$8$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BACKGROUND_COLOR$ = "cpBackgroundColor";
  $dvt$$8$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_COLOR$ = "cpBorderColor";
  $dvt$$8$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BOX_SHADOW$ = "cpBoxShadow";
  $dvt$$8$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_RADIUS$ = "cpBorderRadius";
  $dvt$$8$$.$PanZoomComponent$.$_ATTR_TAB_BG_COLOR_INACTIVE$ = "tabBgColorInactive";
  $dvt$$8$$.$PanZoomComponent$.$_ATTR_TAB_BORDER_COLOR_INACTIVE$ = "tabBorderColorInactive";
  $dvt$$8$$.$PanZoomComponent$.$LEGEND_DISCLOSED_EVENT_KEY$ = "isLegendDisclosed";
  $dvt$$8$$.$PanZoomComponent$.prototype.Init = function $$dvt$$8$$$$PanZoomComponent$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    $dvt$$8$$.$PanZoomComponent$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$);
    this.$_controlPanelBehavior$ = $dvt$$8$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED$;
    this.$_displayedControls$ = $dvt$$8$$.$PanZoomCanvas$.$DEFAULT_DISPLAYED_CONTROLS$;
    this.$_bSupportsVectorEffects$ = !$dvt$$8$$.$Agent$.$isEnvironmentBatik$() && !($dvt$$8$$.$Agent$.$isPlatformIE$() && 11 >= $dvt$$8$$.$Agent$.$getVersion$());
    this.$_subcomponentStyles$ = this.$_resourcesMap$ = null;
    this.$_skinName$ = "";
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$getResourcesMap$ = function $$dvt$$8$$$$PanZoomComponent$$$$getResourcesMap$$() {
    this.$_resourcesMap$ || (this.$_resourcesMap$ = this.$Options$ ? this.$Options$._resources : {});
    return this.$_resourcesMap$;
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$getSubcomponentStyles$ = function $$dvt$$8$$$$PanZoomComponent$$$$getSubcomponentStyles$$() {
    return this.$_subcomponentStyles$;
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$parseComponentJson$ = function $$dvt$$8$$$$PanZoomComponent$$$$parseComponentJson$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = (new $dvt$$8$$.$CSSStyle$($DvtControlPanelEventManager$$[$dvt$$8$$.$PanZoomComponent$.$_ATTR_INLINE_STYLE$])).$getStyle$($dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$);
    $DvtControlPanelEvent$$ && this.$SetEndGradientColor$($DvtControlPanelEvent$$);
    var $DvtControlPanelEvent$$ = {}, $DvtPanControl$$ = $DvtControlPanelEventManager$$[$dvt$$8$$.$PanZoomComponent$.$SKIN_NAME$];
    $DvtPanControl$$ && (this.$_setSkinName$($DvtPanControl$$), $DvtControlPanelEvent$$[$dvt$$8$$.$PanZoomComponent$.$SKIN_NAME$] = $DvtPanControl$$, "undefined" != typeof $dvt$$8$$.$PanelDrawer$ && ($dvt$$8$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$, $DvtControlPanelEventManager$$[$dvt$$8$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BACKGROUND_COLOR$]), $dvt$$8$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$CSSStyle$.$BORDER_COLOR$, $DvtControlPanelEventManager$$[$dvt$$8$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_COLOR$]), 
    $dvt$$8$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$CSSStyle$.$BORDER_RADIUS$, $DvtControlPanelEventManager$$[$dvt$$8$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_RADIUS$]), $dvt$$8$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$PanZoomComponent$.$BOX_SHADOW$, $DvtControlPanelEventManager$$[$dvt$$8$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BOX_SHADOW$]), $dvt$$8$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$PanelDrawer$.$TAB_BG_COLOR_INACTIVE$, $DvtControlPanelEventManager$$[$dvt$$8$$.$PanZoomComponent$.$_ATTR_TAB_BG_COLOR_INACTIVE$]), 
    $dvt$$8$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$PanelDrawer$.$TAB_BORDER_COLOR_INACTIVE$, $DvtControlPanelEventManager$$[$dvt$$8$$.$PanZoomComponent$.$_ATTR_TAB_BORDER_COLOR_INACTIVE$])), this.$setSubcomponentStyles$($DvtControlPanelDefaults$$.$calcOptions$($DvtControlPanelEvent$$)));
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$parseComponentAttrs$ = function $$dvt$$8$$$$PanZoomComponent$$$$parseComponentAttrs$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = (new $dvt$$8$$.$CSSStyle$($DvtControlPanelEventManager$$.$getAttr$($dvt$$8$$.$PanZoomComponent$.$_ATTR_INLINE_STYLE$))).$getStyle$($dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$);
    $DvtControlPanelEvent$$ && this.$SetEndGradientColor$($DvtControlPanelEvent$$);
    var $DvtControlPanelEvent$$ = {}, $DvtPanControl$$ = $DvtControlPanelEventManager$$.$getAttr$($dvt$$8$$.$PanZoomComponent$.$SKIN_NAME$);
    $DvtPanControl$$ && (this.$_setSkinName$($DvtPanControl$$), $DvtControlPanelEvent$$[$dvt$$8$$.$PanZoomComponent$.$SKIN_NAME$] = $DvtPanControl$$);
    "undefined" != typeof $dvt$$8$$.$PanelDrawer$ && ($dvt$$8$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$, $DvtControlPanelEventManager$$.$getAttr$($dvt$$8$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BACKGROUND_COLOR$)), $dvt$$8$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$CSSStyle$.$BORDER_COLOR$, $DvtControlPanelEventManager$$.$getAttr$($dvt$$8$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_COLOR$)), $dvt$$8$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, 
    $dvt$$8$$.$CSSStyle$.$BORDER_RADIUS$, $DvtControlPanelEventManager$$.$getAttr$($dvt$$8$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_RADIUS$)), $dvt$$8$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$PanZoomComponent$.$BOX_SHADOW$, $DvtControlPanelEventManager$$.$getAttr$($dvt$$8$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BOX_SHADOW$)), $dvt$$8$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$PanelDrawer$.$TAB_BG_COLOR_INACTIVE$, $DvtControlPanelEventManager$$.$getAttr$($dvt$$8$$.$PanZoomComponent$.$_ATTR_TAB_BG_COLOR_INACTIVE$)), 
    $dvt$$8$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$PanelDrawer$.$TAB_BORDER_COLOR_INACTIVE$, $DvtControlPanelEventManager$$.$getAttr$($dvt$$8$$.$PanZoomComponent$.$_ATTR_TAB_BORDER_COLOR_INACTIVE$)));
    this.$setSubcomponentStyles$($DvtControlPanelDefaults$$.$calcOptions$($DvtControlPanelEvent$$));
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$render$ = function $$dvt$$8$$$$PanZoomComponent$$$$render$$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.$Width$ = $DvtControlPanelEventManager$$;
    this.$Height$ = $DvtControlPanelEvent$$;
    this.$_isResize$ = !$dvt$$8$$;
    if (!this.$_isResize$ || this.$_panZoomCanvas$) {
      this.$PreRender$(), this.$_isResize$ || ("object" == typeof $dvt$$8$$ ? this.$SetOptions$($dvt$$8$$) : this.$_loadXml$($dvt$$8$$)), this.$Render$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$), this.$UpdateAriaAttributes$();
    }
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$setControlPanelBehavior$ = function $$dvt$$8$$$$PanZoomComponent$$$$setControlPanelBehavior$$($dvt$$8$$) {
    this.$_controlPanelBehavior$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$setDisplayedControls$ = function $$dvt$$8$$$$PanZoomComponent$$$$setDisplayedControls$$($dvt$$8$$) {
    this.$_displayedControls$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$GetControlPanel$ = function $$dvt$$8$$$$PanZoomComponent$$$$GetControlPanel$$() {
    var $DvtControlPanelEventManager$$ = this.$GetControlPanelBehavior$();
    return $DvtControlPanelEventManager$$ != $dvt$$8$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_HIDDEN$ ? new $dvt$$8$$.$ControlPanel$(this.$getCtx$(), this, $DvtControlPanelEventManager$$ == $dvt$$8$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED$ ? $dvt$$8$$.$ControlPanel$.$STATE_COLLAPSED$ : $dvt$$8$$.$ControlPanel$.$STATE_EXPANDED$) : null;
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$GetControlPanelBehavior$ = function $$dvt$$8$$$$PanZoomComponent$$$$GetControlPanelBehavior$$() {
    return this.$_controlPanelBehavior$;
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$GetXmlDomParser$ = function $$dvt$$8$$$$PanZoomComponent$$$$GetXmlDomParser$$() {
    return null;
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$GetXmlStringParser$ = function $$dvt$$8$$$$PanZoomComponent$$$$GetXmlStringParser$$() {
    return new $dvt$$8$$.$XmlParser$(this.$getCtx$());
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$HandlePanEvent$ = function $$dvt$$8$$$$PanZoomComponent$$$$HandlePanEvent$$() {
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$HandleZoomEvent$ = function $$dvt$$8$$$$PanZoomComponent$$$$HandleZoomEvent$$() {
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$PreRender$ = function $$dvt$$8$$$$PanZoomComponent$$$$PreRender$$() {
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$Render$ = function $$dvt$$8$$$$PanZoomComponent$$$$Render$$() {
    if (this.$_endGradientColor$ || !this.$_skinName$) {
      this.$_backgroundPane$ || (this.$_backgroundPane$ = new $dvt$$8$$.Rect(this.$getCtx$(), 0, 0, 0, 0), this.$addChild$(this.$_backgroundPane$)), this.$_backgroundPane$.$setWidth$(this.getWidth()), this.$_backgroundPane$.$setHeight$(this.getHeight()), this.$_backgroundPane$.$setFill$(this.$_getBackgroundGradient$(this.$_endGradientColor$));
    }
    if (this.$_isResize$) {
      this.$_panZoomCanvas$.$setSize$(this.getWidth(), this.getHeight());
    } else {
      this.$_panZoomCanvas$ && (this.removeChild(this.$_panZoomCanvas$), this.$_panZoomCanvas$ = null);
      this.$_panZoomCanvas$ = new $dvt$$8$$.$PanZoomCanvas$(this.$getCtx$(), this.getWidth(), this.getHeight(), this);
      this.$_panZoomCanvas$.$addEvtListener$($dvt$$8$$.$PanEvent$.$TYPE$, this.$HandlePanEvent$, !1, this);
      this.$_panZoomCanvas$.$addEvtListener$($dvt$$8$$.$ZoomEvent$.$TYPE$, this.$HandleZoomEvent$, !1, this);
      this.$addChild$(this.$_panZoomCanvas$);
      var $DvtControlPanelEventManager$$ = this.$GetControlPanel$();
      $DvtControlPanelEventManager$$ && ($DvtControlPanelEventManager$$.$addEvtListener$($DvtControlPanelEvent$$.$TYPE$, this.$_handleControlPanelEvent$, !1, this), this.$_panZoomCanvas$.$setControlPanel$($DvtControlPanelEventManager$$));
      this.$_panZoomCanvas$.$renderComponent$();
    }
    $DvtControlPanelEventManager$$ = new $dvt$$8$$.$ClipPath$("comp");
    $DvtControlPanelEventManager$$.$addRect$(this.$getTranslateX$(), this.$getTranslateY$(), this.getWidth(), this.getHeight());
    this.$setClipPath$($DvtControlPanelEventManager$$);
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$SetEndGradientColor$ = function $$dvt$$8$$$$PanZoomComponent$$$$SetEndGradientColor$$($dvt$$8$$) {
    this.$_endGradientColor$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$SetOptions$ = function $$dvt$$8$$$$PanZoomComponent$$$$SetOptions$$($dvt$$8$$) {
    this.$Options$ = this.$Defaults$ ? this.$Defaults$.$calcOptions$($dvt$$8$$) : $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$_getBackgroundGradient$ = function $$dvt$$8$$$$PanZoomComponent$$$$_getBackgroundGradient$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = 1;
    if ($DvtControlPanelEventManager$$ && "#7396C8" != $DvtControlPanelEventManager$$) {
      var $DvtControlPanelEvent$$ = $dvt$$8$$.$ColorUtils$.$getAlpha$($DvtControlPanelEventManager$$), $DvtPanControl$$ = ($dvt$$8$$.$ColorUtils$.$getRed$("#AECDEA") - $dvt$$8$$.$ColorUtils$.$getRed$("#7396C8")) / (255 - $dvt$$8$$.$ColorUtils$.$getRed$("#7396C8")), $DropdownItemSprite$$ = ($dvt$$8$$.$ColorUtils$.$getGreen$("#AECDEA") - $dvt$$8$$.$ColorUtils$.$getGreen$("#7396C8")) / (255 - $dvt$$8$$.$ColorUtils$.$getGreen$("#7396C8")), $DvtControlPanelDefaults$$ = ($dvt$$8$$.$ColorUtils$.$getBlue$("#AECDEA") - 
      $dvt$$8$$.$ColorUtils$.$getBlue$("#7396C8")) / (255 - $dvt$$8$$.$ColorUtils$.$getBlue$("#7396C8")), $rr$$3$$ = $dvt$$8$$.$ColorUtils$.$getRed$($DvtControlPanelEventManager$$), $gg$$3$$ = $dvt$$8$$.$ColorUtils$.$getGreen$($DvtControlPanelEventManager$$), $bb$$5$$ = $dvt$$8$$.$ColorUtils$.$getBlue$($DvtControlPanelEventManager$$), $DvtPanControl$$ = $dvt$$8$$.$ColorUtils$.$makeRGB$(Math.round($rr$$3$$ + $DvtPanControl$$ * (255 - $rr$$3$$)), Math.round($gg$$3$$ + $DropdownItemSprite$$ * (255 - 
      $gg$$3$$)), Math.round($bb$$5$$ + $DvtControlPanelDefaults$$ * (255 - $bb$$5$$)));
      $DvtControlPanelEventManager$$ = $dvt$$8$$.$ColorUtils$.$getRGB$($DvtControlPanelEventManager$$);
      $DvtControlPanelEventManager$$ = ["#FFFFFF", "#FFFFFF", $DvtPanControl$$, $DvtControlPanelEventManager$$];
    } else {
      $DvtControlPanelEventManager$$ = ["#FFFFFF", "#FFFFFF", "#AECDEA", "#7396C8"];
    }
    $DvtControlPanelDefaults$$ = this.$Width$;
    $DvtPanControl$$ = 1.7 * $DvtControlPanelDefaults$$ * 1.7;
    $DropdownItemSprite$$ = 1.7 * this.$Height$;
    $DvtControlPanelDefaults$$ = 0 + ($DvtControlPanelDefaults$$ - $DvtPanControl$$) / 2;
    return new $dvt$$8$$.$RadialGradientFill$($DvtControlPanelEventManager$$, [$DvtControlPanelEvent$$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$], [0, 45 / 255, 190 / 255, 1], $DvtControlPanelDefaults$$ + $DvtPanControl$$ / 2, -35 + $DropdownItemSprite$$ / 2, 1.5 * Math.min($DvtPanControl$$ / 2, $DropdownItemSprite$$ / 2), [$DvtControlPanelDefaults$$, -35, $DvtPanControl$$, $DropdownItemSprite$$]);
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$_handleControlPanelEvent$ = function $$dvt$$8$$$$PanZoomComponent$$$$_handleControlPanelEvent$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$ = $dvt$$8$$.$EventFactory$.$newAdfPropertyChangeEvent$($dvt$$8$$.$ControlPanel$.$CONTROL_PANEL_BEHAVIOR_KEY$, $DvtControlPanelEventManager$$.$getSubType$() == $DvtControlPanelEvent$$.$SUBTYPE_SHOW$ ? $dvt$$8$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_EXPANDED$ : $dvt$$8$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED$);
    this.dispatchEvent($DvtControlPanelEventManager$$);
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$_loadXml$ = function $$dvt$$8$$$$PanZoomComponent$$$$_loadXml$$($dvt$$8$$) {
    if (null != $dvt$$8$$ && 0 != $dvt$$8$$.length) {
      var $DvtControlPanelEventManager$$ = this.$GetXmlStringParser$();
      $DvtControlPanelEventManager$$ && ($dvt$$8$$ = $DvtControlPanelEventManager$$.parse($dvt$$8$$)) && ("r" === $dvt$$8$$.getName() && ($dvt$$8$$ = $dvt$$8$$.getFirstChild()), $dvt$$8$$ && this.$GetXmlDomParser$().$loadXmlInitial$($dvt$$8$$));
    }
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$_setSkinName$ = function $$dvt$$8$$$$PanZoomComponent$$$$_setSkinName$$($dvt$$8$$) {
    this.$_skinName$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$setSubcomponentStyles$ = function $$dvt$$8$$$$PanZoomComponent$$$$setSubcomponentStyles$$($dvt$$8$$) {
    this.$_subcomponentStyles$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$_getLegendMaxWidthValue$ = function $$dvt$$8$$$$PanZoomComponent$$$$_getLegendMaxWidthValue$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $DvtControlPanelEvent$$;
    if (!$DvtControlPanelEventManager$$) {
      return $DvtPanControl$$;
    }
    $DvtPanControl$$ = $dvt$$8$$.$StringUtils$.trim($DvtControlPanelEventManager$$);
    $dvt$$8$$.$StringUtils$.endsWith($DvtPanControl$$, "%") ? ($DvtPanControl$$ = $dvt$$8$$.$StringUtils$.trim($DvtPanControl$$.replace(/\%$/, "")), isNaN(parseFloat($DvtPanControl$$)) || ($DvtPanControl$$ = parseFloat($DvtPanControl$$) / 100 * $DvtControlPanelEvent$$)) : $dvt$$8$$.$StringUtils$.endsWith($DvtPanControl$$, "px") && ($DvtPanControl$$ = $DvtPanControl$$.replace(/px$/, ""));
    $DvtPanControl$$ = isNaN(parseFloat($DvtPanControl$$)) ? $DvtControlPanelEvent$$ : parseFloat($DvtPanControl$$);
    return Math.min($DvtPanControl$$, $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$PanZoomComponent$.prototype.$destroy$ = function $$dvt$$8$$$$PanZoomComponent$$$$destroy$$() {
    this.$_panZoomCanvas$ && (this.$_panZoomCanvas$.$destroy$(), this.$_panZoomCanvas$ = null);
    $dvt$$8$$.$PanZoomComponent$.$superclass$.$destroy$.call(this);
  };
  $dvt$$8$$.$PanZoomCanvas$ = function $$dvt$$8$$$$PanZoomCanvas$$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    this.Init($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$);
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$PanZoomCanvas$, $dvt$$8$$.$Container$);
  $dvt$$8$$.$PanZoomCanvas$.$DEFAULT_PAN_INCREMENT$ = 15;
  $dvt$$8$$.$PanZoomCanvas$.$DEFAULT_ZOOM_INCREMENT$ = .05;
  $dvt$$8$$.$PanZoomCanvas$.$DEFAULT_ANIMATION_DURATION$ = .5;
  $dvt$$8$$.$PanZoomCanvas$.$DEFAULT_DISPLAYED_CONTROLS$ = $dvt$$8$$.$ControlPanel$.$CONTROLS_ALL$;
  $dvt$$8$$.$PanZoomCanvas$.prototype.Init = function $$dvt$$8$$$$PanZoomCanvas$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    $dvt$$8$$.$PanZoomCanvas$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$);
    this.$_view$ = $DropdownItemSprite$$;
    this.$_ww$ = $DvtControlPanelEvent$$;
    this.$_hh$ = $DvtPanControl$$;
    this.$_my$ = this.$_mx$ = this.$_py$ = this.$_px$ = 0;
    this.$_maxPanY$ = this.$_minPanY$ = this.$_maxPanX$ = this.$_minPanX$ = null;
    this.$_minZoom$ = .1;
    this.$_maxZoom$ = 1;
    this.$_panIncrement$ = $dvt$$8$$.$PanZoomCanvas$.$DEFAULT_PAN_INCREMENT$;
    this.$_zoomIncrement$ = $dvt$$8$$.$PanZoomCanvas$.$DEFAULT_ZOOM_INCREMENT$;
    this.$_zoomToFitPadding$ = 20;
    this.$_controlPanel$ = null;
    this.$_bPanningEnabled$ = !0;
    this.$_panDirection$ = "auto";
    this.$_bZoomToFitEnabled$ = this.$_bZoomingEnabled$ = !0;
    this.$_backgroundPane$ = new $dvt$$8$$.Rect(this.$getCtx$(), 0, 0, this.$_ww$, this.$_hh$);
    this.$addChild$(this.$_backgroundPane$);
    this.$_backgroundPane$.$setInvisibleFill$();
    this.$_contentPane$ = new $dvt$$8$$.$Container$(this.$getCtx$());
    this.$addChild$(this.$_contentPane$);
    this.$_contentPane$.$setMatrix$(new $dvt$$8$$.$Matrix$);
    this.$_animationDuration$ = $dvt$$8$$.$PanZoomCanvas$.$DEFAULT_ANIMATION_DURATION$;
    this.$_eventManager$ = new $dvt$$8$$.$PanZoomCanvasEventManager$($DvtControlPanelEventManager$$, this.$FireListener$, this);
    this.$_eventManager$.$addListeners$(this);
    this.$SetClipRect$($DvtControlPanelEvent$$, $DvtPanControl$$);
    this.$_bElasticConstraints$ = !1;
    this.$_elasticConstraintsAnim$ = null;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setSize$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setSize$$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.$_ww$ = $dvt$$8$$;
    this.$_hh$ = $DvtControlPanelEventManager$$;
    $DvtControlPanelEvent$$ || (this.$_backgroundPane$.$setWidth$($dvt$$8$$), this.$_backgroundPane$.$setHeight$($DvtControlPanelEventManager$$), this.$_controlPanel$ && this.$PositionControlPanel$(), this.$SetClipRect$($dvt$$8$$, $DvtControlPanelEventManager$$));
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$getSize$ = function $$dvt$$8$$$$PanZoomCanvas$$$$getSize$$() {
    return new $dvt$$8$$.$Dimension$(this.$_ww$, this.$_hh$);
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$SetClipRect$ = function $$dvt$$8$$$$PanZoomCanvas$$$$SetClipRect$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = new $dvt$$8$$.$ClipPath$("pzc");
    $DvtPanControl$$.$addRect$(this.$getTranslateX$(), this.$getTranslateY$(), $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
    this.$setClipPath$($DvtPanControl$$);
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setContentPane$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setContentPane$$($dvt$$8$$) {
    this.$_contentPane$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$getContentPaneMatrix$ = function $$dvt$$8$$$$PanZoomCanvas$$$$getContentPaneMatrix$$($dvt$$8$$) {
    return $dvt$$8$$ && ($dvt$$8$$ = $dvt$$8$$.$getDestVal$(this.$_contentPane$, this.$_contentPane$.$getMatrix$)) ? $dvt$$8$$ : this.$_contentPane$.$getMatrix$();
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$getZoom$ = function $$dvt$$8$$$$PanZoomCanvas$$$$getZoom$$($dvt$$8$$) {
    return this.$getContentPaneMatrix$($dvt$$8$$).$_a$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$getPanX$ = function $$dvt$$8$$$$PanZoomCanvas$$$$getPanX$$($dvt$$8$$) {
    return this.$getContentPaneMatrix$($dvt$$8$$).$_tx$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$getPanY$ = function $$dvt$$8$$$$PanZoomCanvas$$$$getPanY$$($dvt$$8$$) {
    return this.$getContentPaneMatrix$($dvt$$8$$).$_ty$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setZoomToFitPadding$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setZoomToFitPadding$$() {
    this.$_zoomToFitPadding$ = 0;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$panBy$ = function $$dvt$$8$$$$PanZoomCanvas$$$$panBy$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    if (this.$_bPanningEnabled$) {
      var $DropdownItemSprite$$ = this.$getPanX$($DvtPanControl$$), $DvtControlPanelDefaults$$ = this.$getPanY$($DvtPanControl$$), $newX$$5$$ = "y" == this.$getPanDirection$() ? $DropdownItemSprite$$ : this.$ConstrainPanX$($DropdownItemSprite$$ + $DvtControlPanelEventManager$$), $newY$$7$$ = "x" == this.$getPanDirection$() ? $DvtControlPanelDefaults$$ : this.$ConstrainPanY$($DvtControlPanelDefaults$$ + $DvtControlPanelEvent$$);
      $DvtControlPanelEvent$$ = $newX$$5$$ - $DropdownItemSprite$$;
      var $deltaY$$17_fireEndEventFunc$$ = $newY$$7$$ - $DvtControlPanelDefaults$$;
      $DvtControlPanelEventManager$$ = null;
      $DvtPanControl$$ && ($DvtControlPanelEventManager$$ = $DvtPanControl$$.$getDestVal$(this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.clone());
      $DvtControlPanelEventManager$$ || ($DvtControlPanelEventManager$$ = this.$_contentPane$.$getMatrix$().clone());
      $DvtControlPanelEventManager$$.translate($DvtControlPanelEvent$$, $deltaY$$17_fireEndEventFunc$$);
      var $thisRef$$38$$ = this;
      $DvtControlPanelEvent$$ = function $$DvtControlPanelEvent$$$() {
        $thisRef$$38$$.$FirePanEvent$($dvt$$8$$.$PanEvent$.$SUBTYPE_PANNING$, $newX$$5$$, $newY$$7$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $DvtPanControl$$);
      };
      $deltaY$$17_fireEndEventFunc$$ = function $$deltaY$$17_fireEndEventFunc$$$() {
        $thisRef$$38$$.$FirePanEvent$($dvt$$8$$.$PanEvent$.$SUBTYPE_PANNED$, $newX$$5$$, $newY$$7$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $DvtPanControl$$);
      };
      $DvtPanControl$$ ? ($DvtPanControl$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_MATRIX$, this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $DvtControlPanelEventManager$$), $dvt$$8$$.$Playable$.$prependOnInit$($DvtPanControl$$, $DvtControlPanelEvent$$), $dvt$$8$$.$Playable$.$appendOnEnd$($DvtPanControl$$, $deltaY$$17_fireEndEventFunc$$)) : ($DvtControlPanelEvent$$(), this.$_contentPane$.$setMatrix$($DvtControlPanelEventManager$$), $deltaY$$17_fireEndEventFunc$$());
    }
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$panTo$ = function $$dvt$$8$$$$PanZoomCanvas$$$$panTo$$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.$_bPanningEnabled$ && ($dvt$$8$$ -= this.$getPanX$($DvtControlPanelEvent$$), $DvtControlPanelEventManager$$ -= this.$getPanY$($DvtControlPanelEvent$$), this.$panBy$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$));
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$zoomBy$ = function $$dvt$$8$$$$PanZoomCanvas$$$$zoomBy$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    if (this.$_bZoomingEnabled$) {
      $DvtControlPanelEvent$$ || 0 === $DvtControlPanelEvent$$ || ($DvtControlPanelEvent$$ = this.$_ww$ / 2);
      $DvtPanControl$$ || 0 === $DvtPanControl$$ || ($DvtPanControl$$ = this.$_hh$ / 2);
      var $DvtControlPanelDefaults$$ = this.$getZoom$($DropdownItemSprite$$), $newZoom$$4$$ = this.$ConstrainZoom$($DvtControlPanelDefaults$$ * $DvtControlPanelEventManager$$);
      this.$adjustZoomControls$($newZoom$$4$$);
      if ($dvt$$8$$.$PanZoomCanvas$.$RoundFloatForCompare$($DvtControlPanelDefaults$$) != $dvt$$8$$.$PanZoomCanvas$.$RoundFloatForCompare$($newZoom$$4$$)) {
        var $deltaZoom_fireStartEventFunc$$1$$ = $newZoom$$4$$ / $DvtControlPanelDefaults$$;
        $DvtControlPanelEventManager$$ = null;
        $DropdownItemSprite$$ && ($DvtControlPanelEventManager$$ = $DropdownItemSprite$$.$getDestVal$(this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.clone());
        $DvtControlPanelEventManager$$ || ($DvtControlPanelEventManager$$ = this.$_contentPane$.$getMatrix$().clone());
        $DvtControlPanelEventManager$$.scale($deltaZoom_fireStartEventFunc$$1$$, $deltaZoom_fireStartEventFunc$$1$$, $DvtControlPanelEvent$$, $DvtPanControl$$);
        var $xDiff$$ = this.$ConstrainPanX$($DvtControlPanelEventManager$$.$_tx$) - $DvtControlPanelEventManager$$.$_tx$, $yDiff$$ = this.$ConstrainPanY$($DvtControlPanelEventManager$$.$_ty$) - $DvtControlPanelEventManager$$.$_ty$;
        this.$FireZoomEvent$($dvt$$8$$.$ZoomEvent$.$SUBTYPE_ADJUST_PAN_CONSTRAINTS$, $newZoom$$4$$, $DvtControlPanelDefaults$$, $DropdownItemSprite$$, null, $DvtControlPanelEvent$$, $DvtPanControl$$, $xDiff$$, $yDiff$$);
        $xDiff$$ = this.$ConstrainPanX$($DvtControlPanelEventManager$$.$_tx$) - $DvtControlPanelEventManager$$.$_tx$;
        $yDiff$$ = this.$ConstrainPanY$($DvtControlPanelEventManager$$.$_ty$) - $DvtControlPanelEventManager$$.$_ty$;
        $DvtControlPanelEventManager$$.translate($xDiff$$, $yDiff$$);
        var $thisRef$$39$$ = this, $deltaZoom_fireStartEventFunc$$1$$ = function $$deltaZoom_fireStartEventFunc$$1$$$() {
          $thisRef$$39$$.$FireZoomEvent$($dvt$$8$$.$ZoomEvent$.$SUBTYPE_ZOOMING$, $newZoom$$4$$, $DvtControlPanelDefaults$$, $DropdownItemSprite$$, null, $DvtControlPanelEvent$$, $DvtPanControl$$, $xDiff$$, $yDiff$$);
        }, $fireEndEventFunc$$1$$ = function $$fireEndEventFunc$$1$$$() {
          $thisRef$$39$$.$FireZoomEvent$($dvt$$8$$.$ZoomEvent$.$SUBTYPE_ZOOMED$, $thisRef$$39$$.$getZoom$(), $DvtControlPanelDefaults$$, $DropdownItemSprite$$, null, $DvtControlPanelEvent$$, $DvtPanControl$$, $xDiff$$, $yDiff$$);
        };
        $DropdownItemSprite$$ ? ($DropdownItemSprite$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_MATRIX$, this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $DvtControlPanelEventManager$$), $dvt$$8$$.$Playable$.$prependOnInit$($DropdownItemSprite$$, $deltaZoom_fireStartEventFunc$$1$$), $dvt$$8$$.$Playable$.$appendOnEnd$($DropdownItemSprite$$, $fireEndEventFunc$$1$$)) : ($deltaZoom_fireStartEventFunc$$1$$(), this.$_contentPane$.$setMatrix$($DvtControlPanelEventManager$$), 
        $fireEndEventFunc$$1$$());
      }
    }
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$zoomTo$ = function $$dvt$$8$$$$PanZoomCanvas$$$$zoomTo$$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    this.$_bZoomingEnabled$ && ($dvt$$8$$ /= this.$getZoom$($DvtPanControl$$), this.$zoomBy$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$));
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$center$ = function $$dvt$$8$$$$PanZoomCanvas$$$$center$$($dvt$$8$$, $DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = this.$_bPanningEnabled$, $DvtPanControl$$ = this.$getPanDirection$();
    this.$setPanningEnabled$(!0);
    this.$setPanDirection$("auto");
    var $DropdownItemSprite$$ = $DvtControlPanelEventManager$$;
    $DropdownItemSprite$$ || ($DropdownItemSprite$$ = this.$_contentPane$.$getDimensions$());
    var $DvtControlPanelDefaults$$ = ($DropdownItemSprite$$.x + $DropdownItemSprite$$.$w$ / 2) * this.$getZoom$(), $DropdownItemSprite$$ = ($DropdownItemSprite$$.y + $DropdownItemSprite$$.$h$ / 2) * this.$getZoom$();
    this.$panTo$(this.$_ww$ / 2 - $DvtControlPanelDefaults$$, this.$_hh$ / 2 - $DropdownItemSprite$$, $dvt$$8$$);
    this.$setPanningEnabled$($DvtControlPanelEvent$$);
    this.$setPanDirection$($DvtPanControl$$);
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$zoomToFit$ = function $$dvt$$8$$$$PanZoomCanvas$$$$zoomToFit$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    if (this.$_bZoomToFitEnabled$) {
      var $DvtPanControl$$ = this.$_bPanningEnabled$, $DropdownItemSprite$$ = this.$getPanDirection$(), $DvtControlPanelDefaults$$ = this.$_bZoomingEnabled$;
      this.$setPanningEnabled$(!0);
      this.$setPanDirection$("auto");
      this.$setZoomingEnabled$(!0);
      try {
        var $bounds$$111$$ = $DvtControlPanelEvent$$ ? $DvtControlPanelEvent$$ : this.$_contentPane$.$getDimensions$();
        if ($bounds$$111$$ = this.$FireZoomEvent$($dvt$$8$$.$ZoomEvent$.$SUBTYPE_ZOOM_TO_FIT_CALC_BOUNDS$, null, null, $DvtControlPanelEventManager$$, $bounds$$111$$).$_zoomToFitBounds$) {
          var $dz$$6$$ = Math.min((this.$_ww$ - 2 * this.$_zoomToFitPadding$) / $bounds$$111$$.$w$, (this.$_hh$ - 2 * this.$_zoomToFitPadding$) / $bounds$$111$$.$h$), $dz$$6$$ = this.$ConstrainZoom$($dz$$6$$), $dx$$18$$ = this.$_ww$ / 2 - ($bounds$$111$$.x + $bounds$$111$$.$w$ / 2) * $dz$$6$$, $dy$$20$$ = this.$_hh$ / 2 - ($bounds$$111$$.y + $bounds$$111$$.$h$ / 2) * $dz$$6$$, $thisRef$$40$$ = this, $fireStartEventFunc$$2$$ = function $$fireStartEventFunc$$2$$$() {
            $thisRef$$40$$.$FireZoomEvent$($dvt$$8$$.$ZoomEvent$.$SUBTYPE_ZOOM_TO_FIT_BEGIN$, null, null, $DvtControlPanelEventManager$$, $bounds$$111$$);
          }, $fireEndEventFunc$$2$$ = function $$fireEndEventFunc$$2$$$() {
            $thisRef$$40$$.$FireZoomEvent$($dvt$$8$$.$ZoomEvent$.$SUBTYPE_ZOOM_TO_FIT_END$, null, null, $DvtControlPanelEventManager$$, $bounds$$111$$);
          };
          $DvtControlPanelEventManager$$ ? $dvt$$8$$.$Playable$.$prependOnInit$($DvtControlPanelEventManager$$, $fireStartEventFunc$$2$$) : $fireStartEventFunc$$2$$();
          this.$zoomTo$($dz$$6$$, 0, 0, $DvtControlPanelEventManager$$);
          this.$panTo$($dx$$18$$, $dy$$20$$, $DvtControlPanelEventManager$$);
          $DvtControlPanelEventManager$$ ? $dvt$$8$$.$Playable$.$appendOnEnd$($DvtControlPanelEventManager$$, $fireEndEventFunc$$2$$) : $fireEndEventFunc$$2$$();
        }
      } finally {
        this.$setPanningEnabled$($DvtPanControl$$), this.$setPanDirection$($DropdownItemSprite$$), this.$setZoomingEnabled$($DvtControlPanelDefaults$$);
      }
    }
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$calcZoomToFitScale$ = function $$dvt$$8$$$$PanZoomCanvas$$$$calcZoomToFitScale$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$ || ($DvtControlPanelEventManager$$ = this.$_contentPane$.$getDimensions$());
    $DvtControlPanelEventManager$$ = this.$FireZoomEvent$($dvt$$8$$.$ZoomEvent$.$SUBTYPE_ZOOM_TO_FIT_CALC_BOUNDS$, null, null, null, $DvtControlPanelEventManager$$).$_zoomToFitBounds$;
    $DvtControlPanelEventManager$$ = Math.min((this.$_ww$ - 2 * this.$_zoomToFitPadding$) / $DvtControlPanelEventManager$$.$w$, (this.$_hh$ - 2 * this.$_zoomToFitPadding$) / $DvtControlPanelEventManager$$.$h$);
    return $DvtControlPanelEventManager$$ = this.$ConstrainZoom$($DvtControlPanelEventManager$$);
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$getViewport$ = function $$dvt$$8$$$$PanZoomCanvas$$$$getViewport$$() {
    var $DvtControlPanelEventManager$$ = this.$localToStage$(new $dvt$$8$$.$Point$(0, 0)), $DvtControlPanelEvent$$ = this.$localToStage$(new $dvt$$8$$.$Point$(this.$_ww$, this.$_hh$)), $DvtControlPanelEventManager$$ = this.$_contentPane$.$stageToLocal$($DvtControlPanelEventManager$$), $DvtControlPanelEvent$$ = this.$_contentPane$.$stageToLocal$($DvtControlPanelEvent$$);
    return new $dvt$$8$$.$Rectangle$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y, $DvtControlPanelEvent$$.x - $DvtControlPanelEventManager$$.x, $DvtControlPanelEvent$$.y - $DvtControlPanelEventManager$$.y);
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$SetElasticConstraints$ = function $$dvt$$8$$$$PanZoomCanvas$$$$SetElasticConstraints$$($DvtControlPanelEventManager$$) {
    if (this.$_bElasticConstraints$ = $DvtControlPanelEventManager$$) {
      this.$_elasticConstraintsAnim$ && (this.$_elasticConstraintsAnim$.$isRunning$() && this.$_elasticConstraintsAnim$.stop(), this.$_elasticConstraintsAnim$ = null);
    } else {
      $DvtControlPanelEventManager$$ = this.$getPanX$();
      var $DvtControlPanelEvent$$ = this.$getPanY$(), $DvtPanControl$$ = this.$getZoom$();
      this.$_bElasticPan$ = $DvtControlPanelEventManager$$ != this.$ConstrainPanX$($DvtControlPanelEventManager$$) || $DvtControlPanelEvent$$ != this.$ConstrainPanY$($DvtControlPanelEvent$$);
      this.$_bElasticZoom$ = $DvtPanControl$$ != this.$ConstrainZoom$($DvtPanControl$$);
      if (this.$_bElasticPan$ || this.$_bElasticZoom$) {
        this.$_elasticConstraintsAnim$ = new $dvt$$8$$.$Animator$(this.$getCtx$(), .4), this.$_elasticConstraintsAnim$.$setEasing$($dvt$$8$$.$Easing$.$cubicOut$), this.$_bElasticZoom$ && this.$zoomBy$(1, .5 * this.$_ww$, .5 * this.$_hh$, this.$_elasticConstraintsAnim$), this.$_bElasticPan$ && this.$panBy$(0, 0, this.$_elasticConstraintsAnim$), $dvt$$8$$.$Playable$.$appendOnEnd$(this.$_elasticConstraintsAnim$, this.$_elasticConstraintsAnimOnEnd$, this), this.$_bElasticPan$ && this.$FirePanEvent$($dvt$$8$$.$PanEvent$.$SUBTYPE_ELASTIC_ANIM_BEGIN$, 
        null, null, null, null, this.$_elasticConstraintsAnim$), this.$_bElasticZoom$ && this.$FireZoomEvent$($dvt$$8$$.$ZoomEvent$.$SUBTYPE_ELASTIC_ANIM_BEGIN$, null, null, null, null, this.$_elasticConstraintsAnim$), this.$_elasticConstraintsAnim$.play();
      }
    }
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$_elasticConstraintsAnimOnEnd$ = function $$dvt$$8$$$$PanZoomCanvas$$$$_elasticConstraintsAnimOnEnd$$() {
    this.$_elasticConstraintsAnim$ = null;
    this.$_bElasticPan$ && this.$FirePanEvent$($dvt$$8$$.$PanEvent$.$SUBTYPE_ELASTIC_ANIM_END$);
    this.$_bElasticZoom$ && this.$FireZoomEvent$($dvt$$8$$.$ZoomEvent$.$SUBTYPE_ELASTIC_ANIM_END$);
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$_panDampingFunc$ = function $$dvt$$8$$$$PanZoomCanvas$$$$_panDampingFunc$$($dvt$$8$$, $DvtControlPanelEventManager$$) {
    return Math.sqrt(.04 * $DvtControlPanelEventManager$$ * $dvt$$8$$);
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$_zoomDampingFunc$ = function $$dvt$$8$$$$PanZoomCanvas$$$$_zoomDampingFunc$$($dvt$$8$$, $DvtControlPanelEventManager$$) {
    return Math.sqrt(.008 * $DvtControlPanelEventManager$$ * $dvt$$8$$);
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$ConstrainPanX$ = function $$dvt$$8$$$$PanZoomCanvas$$$$ConstrainPanX$$($dvt$$8$$) {
    null != this.$_minPanX$ && $dvt$$8$$ < this.$_minPanX$ && (this.$_bElasticConstraints$ ? ($dvt$$8$$ = this.$_minPanX$ - $dvt$$8$$, $dvt$$8$$ = this.$_minPanX$ - this.$_panDampingFunc$($dvt$$8$$, this.$_ww$)) : $dvt$$8$$ = this.$_minPanX$);
    null != this.$_maxPanX$ && $dvt$$8$$ > this.$_maxPanX$ && (this.$_bElasticConstraints$ ? ($dvt$$8$$ -= this.$_maxPanX$, $dvt$$8$$ = this.$_maxPanX$ + this.$_panDampingFunc$($dvt$$8$$, this.$_ww$)) : $dvt$$8$$ = this.$_maxPanX$);
    return $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$ConstrainPanY$ = function $$dvt$$8$$$$PanZoomCanvas$$$$ConstrainPanY$$($dvt$$8$$) {
    null != this.$_minPanY$ && $dvt$$8$$ < this.$_minPanY$ && (this.$_bElasticConstraints$ ? ($dvt$$8$$ = this.$_minPanY$ - $dvt$$8$$, $dvt$$8$$ = this.$_minPanY$ - this.$_panDampingFunc$($dvt$$8$$, this.$_hh$)) : $dvt$$8$$ = this.$_minPanY$);
    null != this.$_maxPanY$ && $dvt$$8$$ > this.$_maxPanY$ && (this.$_bElasticConstraints$ ? ($dvt$$8$$ -= this.$_maxPanY$, $dvt$$8$$ = this.$_maxPanY$ + this.$_panDampingFunc$($dvt$$8$$, this.$_hh$)) : $dvt$$8$$ = this.$_maxPanY$);
    return $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$ConstrainZoom$ = function $$dvt$$8$$$$PanZoomCanvas$$$$ConstrainZoom$$($dvt$$8$$) {
    $dvt$$8$$ = Math.max(0, $dvt$$8$$);
    this.$_minZoom$ && $dvt$$8$$ < this.$_minZoom$ && (this.$_bElasticConstraints$ ? ($dvt$$8$$ = this.$_minZoom$ - $dvt$$8$$, $dvt$$8$$ = this.$_minZoom$ - this.$_zoomDampingFunc$($dvt$$8$$, this.$_maxZoom$ - this.$_minZoom$)) : $dvt$$8$$ = this.$_minZoom$);
    this.$_maxZoom$ && $dvt$$8$$ > this.$_maxZoom$ && (this.$_bElasticConstraints$ ? ($dvt$$8$$ -= this.$_maxZoom$, $dvt$$8$$ = this.$_maxZoom$ + this.$_zoomDampingFunc$($dvt$$8$$, this.$_maxZoom$ - this.$_minZoom$)) : $dvt$$8$$ = this.$_maxZoom$);
    return $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.$RoundFloatForCompare$ = function $$dvt$$8$$$$PanZoomCanvas$$$RoundFloatForCompare$$($dvt$$8$$) {
    return Math.round(1E5 * $dvt$$8$$);
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$renderComponent$ = function $$dvt$$8$$$$PanZoomCanvas$$$$renderComponent$$() {
    var $dvt$$8$$ = this.$_controlPanel$;
    $dvt$$8$$ && (this.$addChild$($dvt$$8$$), this.$PositionControlPanel$(), $dvt$$8$$.$renderComponent$());
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setControlPanel$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setControlPanel$$($dvt$$8$$) {
    this.$_controlPanel$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$PositionControlPanel$ = function $$dvt$$8$$$$PanZoomCanvas$$$$PositionControlPanel$$() {
    var $DvtControlPanelEventManager$$ = this.$_view$.$getSubcomponentStyles$(), $DvtControlPanelEvent$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelEventManager$$, $dvt$$8$$.$ControlPanel$.$CP_PADDING_SIDE$, 0), $DvtPanControl$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelEventManager$$, $dvt$$8$$.$ControlPanel$.$CP_PADDING_TOP$, 0), $DvtControlPanelEventManager$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelEventManager$$, $dvt$$8$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 
    0), $DvtControlPanelEvent$$ = $dvt$$8$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$_ww$ - $DvtControlPanelEventManager$$ - $DvtControlPanelEvent$$ : $DvtControlPanelEvent$$;
    this.$_controlPanel$.$setTranslate$($DvtControlPanelEvent$$, $DvtPanControl$$);
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$GetRelativeMousePosition$ = function $$dvt$$8$$$$PanZoomCanvas$$$$GetRelativeMousePosition$$($dvt$$8$$) {
    return this.$getCtx$().$pageToStageCoords$($dvt$$8$$.pageX, $dvt$$8$$.pageY);
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$FirePanEvent$ = function $$dvt$$8$$$$PanZoomCanvas$$$$FirePanEvent$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $animator$$126$$) {
    $DvtControlPanelEventManager$$ = new $dvt$$8$$.$PanEvent$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $animator$$126$$);
    this.$FireListener$($DvtControlPanelEventManager$$);
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$FireZoomEvent$ = function $$dvt$$8$$$$PanZoomCanvas$$$$FireZoomEvent$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $xx$$46$$, $yy$$46$$, $tx$$19$$, $ty$$20$$) {
    $DvtControlPanelEventManager$$ = new $dvt$$8$$.$ZoomEvent$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, new $dvt$$8$$.$Point$($xx$$46$$, $yy$$46$$), $tx$$19$$, $ty$$20$$);
    this.$FireListener$($DvtControlPanelEventManager$$);
    return $DvtControlPanelEventManager$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$zoomAndCenter$ = function $$dvt$$8$$$$PanZoomCanvas$$$$zoomAndCenter$$() {
    this.$FireZoomEvent$($dvt$$8$$.$ZoomEvent$.$SUBTYPE_ZOOM_AND_CENTER$);
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$getNextZoomLevel$ = function $$dvt$$8$$$$PanZoomCanvas$$$$getNextZoomLevel$$($dvt$$8$$) {
    $dvt$$8$$ += this.$_zoomIncrement$;
    $dvt$$8$$ > this.$getMaxZoom$() && ($dvt$$8$$ = this.$getMaxZoom$());
    return $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$getPrevZoomLevel$ = function $$dvt$$8$$$$PanZoomCanvas$$$$getPrevZoomLevel$$($dvt$$8$$) {
    $dvt$$8$$ -= this.$_zoomIncrement$;
    $dvt$$8$$ < this.$getMinZoom$() && ($dvt$$8$$ = this.$getMinZoom$());
    return $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setMinZoom$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setMinZoom$$($dvt$$8$$) {
    this.$_minZoom$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$getMinZoom$ = function $$dvt$$8$$$$PanZoomCanvas$$$$getMinZoom$$() {
    return this.$_minZoom$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setMaxZoom$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setMaxZoom$$($dvt$$8$$) {
    0 > $dvt$$8$$ && ($dvt$$8$$ = 1);
    this.$_maxZoom$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$getMaxZoom$ = function $$dvt$$8$$$$PanZoomCanvas$$$$getMaxZoom$$() {
    return this.$_maxZoom$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setMinPanX$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setMinPanX$$($dvt$$8$$) {
    this.$_minPanX$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setMaxPanX$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setMaxPanX$$($dvt$$8$$) {
    this.$_maxPanX$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setMinPanY$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setMinPanY$$($dvt$$8$$) {
    this.$_minPanY$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setMaxPanY$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setMaxPanY$$($dvt$$8$$) {
    this.$_maxPanY$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setAnimationDuration$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setAnimationDuration$$($dvt$$8$$) {
    this.$_animationDuration$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$getAnimationDuration$ = function $$dvt$$8$$$$PanZoomCanvas$$$$getAnimationDuration$$() {
    return this.$_animationDuration$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setPanningEnabled$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setPanningEnabled$$($dvt$$8$$) {
    this.$_bPanningEnabled$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setPanDirection$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setPanDirection$$($dvt$$8$$) {
    this.$_panDirection$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$getPanDirection$ = function $$dvt$$8$$$$PanZoomCanvas$$$$getPanDirection$$() {
    return this.$_panDirection$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setZoomingEnabled$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setZoomingEnabled$$($dvt$$8$$) {
    this.$_bZoomingEnabled$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setZoomToFitEnabled$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setZoomToFitEnabled$$($dvt$$8$$) {
    this.$_bZoomToFitEnabled$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$adjustZoomControls$ = function $$dvt$$8$$$$PanZoomCanvas$$$$adjustZoomControls$$($dvt$$8$$) {
    if (this.$_controlPanel$) {
      var $DvtControlPanelEventManager$$ = this.$getZoom$();
      $dvt$$8$$ == this.$getMinZoom$() && $dvt$$8$$ == this.$getMaxZoom$() ? (this.$_controlPanel$.$enableZoomInControl$(!1), this.$_controlPanel$.$enableZoomOutControl$(!1)) : $DvtControlPanelEventManager$$ <= $dvt$$8$$ && $dvt$$8$$ == this.$getMaxZoom$() ? (this.$_controlPanel$.$enableZoomInControl$(!1), this.$_controlPanel$.$enableZoomOutControl$(!0)) : $DvtControlPanelEventManager$$ >= $dvt$$8$$ && $dvt$$8$$ == this.$getMinZoom$() ? (this.$_controlPanel$.$enableZoomInControl$(!0), this.$_controlPanel$.$enableZoomOutControl$(!1)) : 
      (this.$_controlPanel$.$enableZoomInControl$(!0), this.$_controlPanel$.$enableZoomOutControl$(!0));
    }
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setCurrentTouchTargets$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setCurrentTouchTargets$$($dvt$$8$$) {
    this.$_currTargets$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$setInteractionEnabled$ = function $$dvt$$8$$$$PanZoomCanvas$$$$setInteractionEnabled$$($dvt$$8$$) {
    $dvt$$8$$ ? this.$_eventManager$.$addListeners$(this) : this.$_eventManager$.$removeListeners$(this);
  };
  $dvt$$8$$.$PanZoomCanvas$.prototype.$destroy$ = function $$dvt$$8$$$$PanZoomCanvas$$$$destroy$$() {
    this.$_elasticConstraintsAnim$ && (this.$_elasticConstraintsAnim$.stop(!0), this.$_elasticConstraintsAnim$ = null);
    this.$_eventManager$ && (this.$_eventManager$.$removeListeners$(this), this.$_eventManager$.$destroy$(), this.$_eventManager$ = null);
    $dvt$$8$$.$PanZoomCanvas$.$superclass$.$destroy$.call(this);
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.Init($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$PanZoomCanvasEventManager$, $dvt$$8$$.$EventManager$);
  $dvt$$8$$.$PanZoomCanvasEventManager$.$EVENT_INFO_PANNED_KEY$ = "panned";
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.Init = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    $dvt$$8$$.$PanZoomCanvasEventManager$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$);
    this.$_pzc$ = $DvtPanControl$$;
    this.$_zoomAnimator$ = null;
    this.$_bDragging$ = this.$_bZooming$ = this.$_bPanned$ = this.$_bPanning$ = !1;
    this.$_bMomentumPanning$ = !0;
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$ = "panTouch";
  $dvt$$8$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$ = "zoomTouch";
  $dvt$$8$$.$PanZoomCanvasEventManager$.$_MOMENTUM_START_TIMER_INTERVAL$ = 50;
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$addListeners$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$addListeners$$($DvtControlPanelEventManager$$) {
    $dvt$$8$$.$PanZoomCanvasEventManager$.$superclass$.$addListeners$.call(this, $DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEWHEEL$, this.$OnMouseWheel$, !1, this);
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$removeListeners$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$removeListeners$$($DvtControlPanelEventManager$$) {
    $dvt$$8$$.$PanZoomCanvasEventManager$.$superclass$.$removeListeners$.call(this, $DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$.$removeEvtListener$($dvt$$8$$.MouseEvent.$MOUSEWHEEL$, this.$OnMouseWheel$, !1, this);
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$OnMouseDown$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$OnMouseDown$$($DvtControlPanelEventManager$$) {
    this.$_bPanned$ = this.$_bDragging$ = !1;
    $DvtControlPanelEventManager$$.button != $dvt$$8$$.MouseEvent.$RIGHT_CLICK_BUTTON$ && ($DvtControlPanelEventManager$$ = this.$_callbackObj$.$GetRelativeMousePosition$($DvtControlPanelEventManager$$), this.$_mx$ = $DvtControlPanelEventManager$$.x, this.$_my$ = $DvtControlPanelEventManager$$.y, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_bDown$ = !0, this.$_origPanX$ = this.$_callbackObj$.$getPanX$(), this.$_origPanY$ = this.$_callbackObj$.$getPanY$(), this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), 
    this.$_bMomentumPanning$ && (this.$_currTime$ = (new Date).getTime()));
    this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset());
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$OnMouseMove$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$OnMouseMove$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = this.$_callbackObj$.$GetRelativeMousePosition$($DvtControlPanelEventManager$$);
    if (($DvtControlPanelEvent$$.x !== this.$_px$ || $DvtControlPanelEvent$$.y !== this.$_py$) && this.$_bDown$) {
      this.$_bDragging$ = !0;
      var $DvtControlPanelEvent$$ = this.$_callbackObj$.$GetRelativeMousePosition$($DvtControlPanelEventManager$$), $DvtPanControl$$ = $DvtControlPanelEvent$$.x, $DvtControlPanelEvent$$ = $DvtControlPanelEvent$$.y;
      $DvtControlPanelEventManager$$.ctrlKey ? (this.$_bZooming$ || (this.$_callback$.call(this.$_callbackObj$, new $dvt$$8$$.$ZoomEvent$($dvt$$8$$.$ZoomEvent$.$SUBTYPE_DRAG_ZOOM_BEGIN$)), this.$_bZooming$ = !0, this.$_pzc$.$_controlPanel$ && this.$_pzc$.$_controlPanel$.$mouseDragPanningStarted$(), this.$_callbackObj$.$SetElasticConstraints$(!0)), $DvtControlPanelEventManager$$ = this.$_origZoom$ * Math.pow(1 + .01 * (this.$_py$ >= $DvtControlPanelEvent$$ ? 1 : -1), Math.abs(this.$_py$ - $DvtControlPanelEvent$$)), 
      this.$_callbackObj$.$_bPanningEnabled$ ? this.$_callbackObj$.$zoomTo$($DvtControlPanelEventManager$$, this.$_px$, this.$_py$) : this.$_callbackObj$.$zoomTo$($DvtControlPanelEventManager$$, null, null)) : this.$_handlePanMove$($DvtPanControl$$, $DvtControlPanelEvent$$);
      this.$_mx$ = $DvtPanControl$$;
      this.$_my$ = $DvtControlPanelEvent$$;
    }
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$OnMouseUp$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$OnMouseUp$$($DvtControlPanelEventManager$$) {
    this.$_bDragging$ = this.$_bDown$ = !1;
    this.$_bPanning$ && this.$_handlePanEnd$();
    this.$_bZooming$ && this.$_handleZoomEnd$();
    $dvt$$8$$.$PanZoomCanvasEventManager$.$superclass$.$OnMouseUp$.call(this, $DvtControlPanelEventManager$$);
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$OnClick$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$OnClick$$($DvtControlPanelEventManager$$) {
    if (this.$_bDragging$ || this.$_bPanned$) {
      this.$_bPanned$ = this.$_bDragging$ = !1, $dvt$$8$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    }
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$OnMouseOut$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$OnMouseOut$$($DvtControlPanelEventManager$$) {
    this.$_bDown$ && (this.$_bPanning$ || this.$_bZooming$) && ($DvtControlPanelEventManager$$.relatedTarget && null != $DvtControlPanelEventManager$$.relatedTarget || this.$OnMouseUp$($DvtControlPanelEventManager$$));
    $dvt$$8$$.$PanZoomCanvasEventManager$.$superclass$.$OnMouseOut$.call(this, $DvtControlPanelEventManager$$);
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$OnMouseWheel$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$OnMouseWheel$$($DvtControlPanelEventManager$$) {
    if ($DvtControlPanelEventManager$$.wheelDelta && 0 !== $DvtControlPanelEventManager$$.wheelDelta && this.$_callbackObj$.$_bZoomingEnabled$) {
      var $DvtControlPanelEvent$$ = this.$_callbackObj$.$getZoom$();
      this.$_zoomAnimator$ && ($DvtControlPanelEvent$$ = this.$_zoomAnimator$, this.$_zoomAnimator$.stop(), $DvtControlPanelEvent$$ = this.$_callbackObj$.$getZoom$($DvtControlPanelEvent$$), this.$_zoomAnimator$ = null);
      this.$_zoomAnimator$ = null;
      var $DvtPanControl$$ = $DvtControlPanelEventManager$$.wheelDelta, $DvtControlPanelEvent$$ = $DvtControlPanelEvent$$ * (1 + this.$_callbackObj$.$_zoomIncrement$ * $DvtPanControl$$ / Math.abs($DvtPanControl$$)), $DvtPanControl$$ = this.$_callbackObj$.$GetRelativeMousePosition$($DvtControlPanelEventManager$$);
      this.$getCtx$().$getDocumentUtils$().$cancelDomEvent$($DvtControlPanelEventManager$$);
      this.$_callbackObj$.$_bPanningEnabled$ ? this.$_callbackObj$.$zoomTo$($DvtControlPanelEvent$$, $DvtPanControl$$.x, $DvtPanControl$$.y, this.$_zoomAnimator$) : this.$_callbackObj$.$zoomTo$($DvtControlPanelEvent$$, null, null, this.$_zoomAnimator$);
      this.$_zoomAnimator$ && ($dvt$$8$$.$Playable$.$appendOnEnd$(this.$_zoomAnimator$, this.$_clearZoomAnimator$, this), this.$_zoomAnimator$.play());
    }
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$_clearZoomAnimator$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$_clearZoomAnimator$$() {
    this.$_zoomAnimator$ = null;
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$_handleMomentumStartTimer$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$_handleMomentumStartTimer$$() {
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$_handleMomentumTimer$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$_handleMomentumTimer$$() {
    var $dvt$$8$$ = 1 - .04 * this.$_momentumIterCount$, $dvt$$8$$ = $dvt$$8$$ * $dvt$$8$$, $DvtControlPanelEventManager$$ = this.$_momentumTimer$.$_interval$, $DvtControlPanelEvent$$ = $dvt$$8$$ * this.$_momentumXperMS$ * $DvtControlPanelEventManager$$, $dvt$$8$$ = $dvt$$8$$ * this.$_momentumYperMS$ * $DvtControlPanelEventManager$$;
    this.$_momentumDx$ += $DvtControlPanelEvent$$;
    this.$_momentumDy$ += $dvt$$8$$;
    var $DvtControlPanelEventManager$$ = this.$_origPanX$ + this.$_mx$ - this.$_px$ + this.$_momentumDx$, $DvtPanControl$$ = this.$_origPanY$ + this.$_my$ - this.$_py$ + this.$_momentumDy$;
    this.$_callbackObj$.$panTo$($DvtControlPanelEventManager$$, $DvtPanControl$$);
    var $DropdownItemSprite$$ = !1;
    if (24 <= this.$_momentumIterCount$) {
      $DropdownItemSprite$$ = !0;
    } else {
      var $DvtControlPanelDefaults$$ = this.$_callbackObj$.$getPanX$(), $currY$$18$$ = this.$_callbackObj$.$getPanY$(), $panDirection$$4$$ = this.$_pzc$.$getPanDirection$();
      if (Math.abs($DvtControlPanelDefaults$$ - $DvtControlPanelEventManager$$) > Math.abs($DvtControlPanelEvent$$) && "y" != $panDirection$$4$$ || Math.abs($currY$$18$$ - $DvtPanControl$$) > Math.abs($dvt$$8$$) && "x" != $panDirection$$4$$) {
        $DropdownItemSprite$$ = !0;
      }
    }
    $DropdownItemSprite$$ ? (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset(), this.$_callbackObj$.$SetElasticConstraints$(!1)) : this.$_momentumIterCount$++;
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$HandleImmediateTouchStartInternal$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$HandleImmediateTouchStartInternal$$($dvt$$8$$) {
    this.$_callbackObj$.$_bZoomingEnabled$ && this.$TouchManager$.$processAssociatedTouchAttempt$($dvt$$8$$, this.$ZoomStartTouch$, this);
    this.$_callbackObj$.$_bPanningEnabled$ && this.$TouchManager$.$processAssociatedTouchAttempt$($dvt$$8$$, this.$PanStartTouch$, this);
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$HandleImmediateTouchMoveInternal$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$HandleImmediateTouchMoveInternal$$($DvtControlPanelEventManager$$) {
    this.$_callbackObj$.$_bZoomingEnabled$ && this.$TouchManager$.$processAssociatedTouchMove$($DvtControlPanelEventManager$$, $dvt$$8$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$);
    this.$_callbackObj$.$_bPanningEnabled$ && this.$TouchManager$.$processAssociatedTouchMove$($DvtControlPanelEventManager$$, $dvt$$8$$.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$);
    (this.$_callbackObj$.$_bZoomingEnabled$ || this.$_callbackObj$.$_bPanningEnabled$) && $DvtControlPanelEventManager$$.preventDefault();
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$HandleImmediateTouchEndInternal$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$HandleImmediateTouchEndInternal$$($DvtControlPanelEventManager$$) {
    this.$_callbackObj$.$_bZoomingEnabled$ && this.$TouchManager$.$processAssociatedTouchEnd$($DvtControlPanelEventManager$$, $dvt$$8$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$);
    this.$_callbackObj$.$_bPanningEnabled$ && this.$TouchManager$.$processAssociatedTouchEnd$($DvtControlPanelEventManager$$, $dvt$$8$$.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$);
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$ZoomStartTouch$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$ZoomStartTouch$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$TouchManager$.$getTouchIdsForObj$($dvt$$8$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$);
    1 >= $DvtPanControl$$.length && (this.$TouchManager$.$saveProcessedTouch$($DvtControlPanelEvent$$.identifier, $dvt$$8$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$, $dvt$$8$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$, $dvt$$8$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$, this.$ZoomMoveTouch$, this.$ZoomEndTouch$, this), this.$_mx$ = $DvtControlPanelEvent$$.pageX, this.$_my$ = $DvtControlPanelEvent$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = this.$_callbackObj$.$getPanX$(), 
    this.$_origPanY$ = this.$_callbackObj$.$getPanY$(), this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_origDist$ = null, $DvtPanControl$$ = this.$TouchManager$.$getTouchIdsForObj$($dvt$$8$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$), this.$_callbackObj$.$setCurrentTouchTargets$(this.$TouchManager$.$getStartTargetsByIds$($DvtPanControl$$)));
    this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset());
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$ZoomMoveTouch$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$ZoomMoveTouch$$() {
    var $DvtControlPanelEventManager$$ = this.$TouchManager$.$getTouchIdsForObj$($dvt$$8$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$);
    if (2 == $DvtControlPanelEventManager$$.length) {
      var $DvtControlPanelEvent$$ = this.$TouchManager$.$getMultiTouchData$($DvtControlPanelEventManager$$);
      if ($DvtControlPanelEvent$$) {
        this.$_bZooming$ || (this.$_bZooming$ = !0, this.$TouchManager$.$blockTouchHold$(), this.$_callback$.call(this.$_callbackObj$, new $dvt$$8$$.$ZoomEvent$($dvt$$8$$.$ZoomEvent$.$SUBTYPE_DRAG_ZOOM_BEGIN$)), this.$_pzc$.$_controlPanel$ && this.$_pzc$.$_controlPanel$.$mouseDragPanningStarted$());
        this.$_callbackObj$.$SetElasticConstraints$(!0);
        null == this.$_origDist$ && (this.$_origDist$ = $DvtControlPanelEvent$$.$dist$ - $DvtControlPanelEvent$$.$dz$);
        var $DvtPanControl$$ = $DvtControlPanelEvent$$.$dist$ / this.$_origDist$ * this.$_origZoom$, $DropdownItemSprite$$ = this.$_pzc$.$getCtx$().$pageToStageCoords$($DvtControlPanelEvent$$.$cx$, $DvtControlPanelEvent$$.$cy$);
        this.$hideTooltip$();
        this.$_callbackObj$.$setCurrentTouchTargets$(this.$TouchManager$.$getStartTargetsByIds$($DvtControlPanelEventManager$$));
        this.$_callbackObj$.$zoomTo$($DvtPanControl$$, $DropdownItemSprite$$.x, $DropdownItemSprite$$.y);
        this.$_callbackObj$.$panBy$($DvtControlPanelEvent$$.$dcx$, $DvtControlPanelEvent$$.$dcy$);
      }
    }
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$ZoomEndTouch$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$ZoomEndTouch$$() {
    this.$_bZooming$ && (this.$_origDist$ = null, this.$TouchManager$.$unblockTouchHold$(), this.$_handleZoomEnd$());
    var $DvtControlPanelEventManager$$ = this.$TouchManager$.$getTouchIdsForObj$($dvt$$8$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$);
    this.$_callbackObj$.$setCurrentTouchTargets$(this.$TouchManager$.$getStartTargetsByIds$($DvtControlPanelEventManager$$));
    0 == $DvtControlPanelEventManager$$.length && this.$_callback$.call(this.$_callbackObj$, new $dvt$$8$$.$ZoomEvent$($dvt$$8$$.$ZoomEvent$.$SUBTYPE_ZOOM_END$));
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$PanStartTouch$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$PanStartTouch$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    !this.$_bZooming$ && 1 >= this.$TouchManager$.$getTouchIdsForObj$($dvt$$8$$.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$).length && (this.$TouchManager$.$saveProcessedTouch$($DvtControlPanelEvent$$.identifier, $dvt$$8$$.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$, $dvt$$8$$.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$, $dvt$$8$$.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$, this.$PanMoveTouch$, this.$PanEndTouch$, this), this.$_mx$ = $DvtControlPanelEvent$$.pageX, this.$_my$ = $DvtControlPanelEvent$$.pageY, 
    this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = this.$_callbackObj$.$getPanX$(), this.$_origPanY$ = this.$_callbackObj$.$getPanY$(), this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new Date).getTime()));
    this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset());
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$PanMoveTouch$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$PanMoveTouch$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    if (!this.$_bZooming$ && 1 == this.$TouchManager$.$getTouchIdsForObj$($dvt$$8$$.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$).length) {
      var $DvtPanControl$$ = $DvtControlPanelEvent$$.pageX, $DropdownItemSprite$$ = $DvtControlPanelEvent$$.pageY;
      this.$_handlePanMove$($DvtPanControl$$, $DropdownItemSprite$$);
      this.$_mx$ = $DvtPanControl$$;
      this.$_my$ = $DropdownItemSprite$$;
    }
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$PanEndTouch$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$PanEndTouch$$($dvt$$8$$) {
    !this.$_bZooming$ && this.$_bPanning$ && (this.$_handlePanEnd$(), this.$SetEventInfo$($dvt$$8$$, "panned", !0));
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$_handleZoomEnd$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$_handleZoomEnd$$() {
    this.$_callback$.call(this.$_callbackObj$, new $dvt$$8$$.$ZoomEvent$($dvt$$8$$.$ZoomEvent$.$SUBTYPE_DRAG_ZOOM_END$));
    this.$_bZooming$ = !1;
    this.$_pzc$.$_controlPanel$ && this.$_pzc$.$_controlPanel$.$mouseDragPanningEnded$();
    this.$_callbackObj$.$SetElasticConstraints$(!1);
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$_handlePanMove$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$_handlePanMove$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.$_bPanning$ || (this.$_callback$.call(this.$_callbackObj$, new $dvt$$8$$.$PanEvent$($dvt$$8$$.$PanEvent$.$SUBTYPE_DRAG_PAN_BEGIN$)), this.$_bPanning$ = !0, this.$_pzc$.$_controlPanel$ && this.$_pzc$.$_controlPanel$.$mouseDragPanningStarted$(), this.$_callbackObj$.$SetElasticConstraints$(!0), this.$_bMomentumPanning$ && (this.$_arLastNMouseMoves$ = []));
    this.$_callbackObj$.$panTo$(this.$_origPanX$ + $DvtControlPanelEventManager$$ - this.$_px$, this.$_origPanY$ + $DvtControlPanelEvent$$ - this.$_py$);
    this.$_bMomentumPanning$ && (this.$_lastTime$ = this.$_currTime$, this.$_currTime$ = (new Date).getTime(), this.$_momentumStartTimer$ ? (this.$_momentumStartTimer$.$isRunning$() && this.$_momentumStartTimer$.stop(), this.$_momentumStartTimer$.reset()) : this.$_momentumStartTimer$ = new $dvt$$8$$.$Timer$(this.$_context$, $dvt$$8$$.$PanZoomCanvasEventManager$.$_MOMENTUM_START_TIMER_INTERVAL$, this.$_handleMomentumStartTimer$, this, 1), this.$_arLastNMouseMoves$.push({$dt$:this.$_currTime$ - this.$_lastTime$, 
    $dx$:$DvtControlPanelEventManager$$ - this.$_mx$, $dy$:$DvtControlPanelEvent$$ - this.$_my$}), 5 < this.$_arLastNMouseMoves$.length && this.$_arLastNMouseMoves$.splice(0, 1), this.$_momentumStartTimer$.start());
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$_handlePanEnd$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$_handlePanEnd$$() {
    this.$_callback$.call(this.$_callbackObj$, new $dvt$$8$$.$PanEvent$($dvt$$8$$.$PanEvent$.$SUBTYPE_DRAG_PAN_END$));
    this.$_bPanning$ = !1;
    this.$_bPanned$ = !0;
    this.$_pzc$.$_controlPanel$ && this.$_pzc$.$_controlPanel$.$mouseDragPanningEnded$();
    if (this.$_momentumStartTimer$ && this.$_momentumStartTimer$.$isRunning$()) {
      this.$_momentumStartTimer$.stop();
      this.$_momentumStartTimer$.reset();
      this.$_momentumTimer$ ? this.$_momentumTimer$.reset() : this.$_momentumTimer$ = new $dvt$$8$$.$Timer$(this.$_context$, $dvt$$8$$.$PanZoomCanvasEventManager$.$_MOMENTUM_START_TIMER_INTERVAL$, this.$_handleMomentumTimer$, this);
      for (var $DvtControlPanelEventManager$$ = 0, $DvtControlPanelEvent$$ = 0, $DvtPanControl$$ = 0, $DropdownItemSprite$$ = this.$_arLastNMouseMoves$.length;0 < this.$_arLastNMouseMoves$.length;) {
        var $DvtControlPanelDefaults$$ = this.$_arLastNMouseMoves$.pop(), $DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$ + $DvtControlPanelDefaults$$.$dt$, $DvtControlPanelEvent$$ = $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$.$dx$, $DvtPanControl$$ = $DvtPanControl$$ + $DvtControlPanelDefaults$$.$dy$
      }
      this.$_arLastNMouseMoves$ = null;
      this.$_momentumXperMS$ = $DvtControlPanelEvent$$ / $DvtControlPanelEventManager$$;
      this.$_momentumYperMS$ = $DvtPanControl$$ / $DvtControlPanelEventManager$$;
      this.$_momentumTimer$.setInterval(Math.ceil($DvtControlPanelEventManager$$ / $DropdownItemSprite$$));
      this.$_momentumIterCount$ = 1;
      this.$_momentumDy$ = this.$_momentumDx$ = 0;
      this.$_pzc$.$_bPanningEnabled$ && this.$_momentumTimer$.start();
    } else {
      this.$_callbackObj$.$SetElasticConstraints$(!1);
    }
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$GetTouchResponse$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$GetTouchResponse$$() {
    return this.$_pzc$.$_bPanningEnabled$ || this.$_pzc$.$_bZoomingEnabled$ ? $dvt$$8$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : $dvt$$8$$.$EventManager$.$TOUCH_RESPONSE_AUTO$;
  };
  $dvt$$8$$.$PanZoomCanvasEventManager$.prototype.$StoreInfoByEventType$ = function $$dvt$$8$$$$PanZoomCanvasEventManager$$$$StoreInfoByEventType$$($DvtControlPanelEventManager$$) {
    return $DvtControlPanelEventManager$$ == $dvt$$8$$.$PanZoomCanvasEventManager$.$EVENT_INFO_PANNED_KEY$ ? !1 : $dvt$$8$$.$PanZoomCanvasEventManager$.$superclass$.$StoreInfoByEventType$.call(this, $DvtControlPanelEventManager$$);
  };
  $dvt$$8$$.$PanZoomCanvasKeyboardHandler$ = function $$dvt$$8$$$$PanZoomCanvasKeyboardHandler$$($dvt$$8$$, $DvtControlPanelEventManager$$) {
    this.Init($dvt$$8$$, $DvtControlPanelEventManager$$);
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$PanZoomCanvasKeyboardHandler$, $dvt$$8$$.$KeyboardHandler$);
  $dvt$$8$$.$PanZoomCanvasKeyboardHandler$.prototype.Init = function $$dvt$$8$$$$PanZoomCanvasKeyboardHandler$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    $dvt$$8$$.$PanZoomCanvasKeyboardHandler$.$superclass$.Init.call(this, $DvtControlPanelEvent$$);
    this.$_component$ = $DvtControlPanelEventManager$$;
  };
  $dvt$$8$$.$PanZoomCanvasKeyboardHandler$.prototype.$processKeyDown$ = function $$dvt$$8$$$$PanZoomCanvasKeyboardHandler$$$$processKeyDown$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = $DvtControlPanelEventManager$$.keyCode, $DvtPanControl$$ = this.$_component$.$_panZoomCanvas$;
    if ($DvtControlPanelEvent$$ == $dvt$$8$$.KeyboardEvent.$PAGE_UP$) {
      $DvtControlPanelEventManager$$.ctrlKey || $DvtControlPanelEventManager$$.shiftKey ? $DvtPanControl$$.$panBy$($DvtPanControl$$.$_panIncrement$, 0) : $DvtPanControl$$.$panBy$(0, $DvtPanControl$$.$_panIncrement$);
    } else {
      if ($DvtControlPanelEvent$$ == $dvt$$8$$.KeyboardEvent.$PAGE_DOWN$) {
        $DvtControlPanelEventManager$$.ctrlKey || $DvtControlPanelEventManager$$.shiftKey ? $DvtPanControl$$.$panBy$(-$DvtPanControl$$.$_panIncrement$, 0) : $DvtPanControl$$.$panBy$(0, -$DvtPanControl$$.$_panIncrement$);
      } else {
        if ($DvtControlPanelEvent$$ == $dvt$$8$$.KeyboardEvent.$FORWARD_SLASH$) {
          ($DvtControlPanelEventManager$$ = $DvtPanControl$$.$_controlPanel$) && $DvtControlPanelEventManager$$.$toggleExpandCollapse$();
        } else {
          if ($dvt$$8$$.KeyboardEvent.$isEquals$($DvtControlPanelEventManager$$) || $dvt$$8$$.KeyboardEvent.$isPlus$($DvtControlPanelEventManager$$)) {
            $DvtPanControl$$.$zoomTo$($DvtPanControl$$.$getZoom$() + $DvtPanControl$$.$_zoomIncrement$);
          } else {
            if ($dvt$$8$$.KeyboardEvent.$isMinus$($DvtControlPanelEventManager$$) || $dvt$$8$$.KeyboardEvent.$isUnderscore$($DvtControlPanelEventManager$$)) {
              $DvtPanControl$$.$zoomTo$($DvtPanControl$$.$getZoom$() - $DvtPanControl$$.$_zoomIncrement$);
            } else {
              if ($DvtControlPanelEvent$$ != $dvt$$8$$.KeyboardEvent.ZERO && $DvtControlPanelEvent$$ != $dvt$$8$$.KeyboardEvent.$NUMPAD_ZERO$ || $DvtControlPanelEventManager$$.ctrlKey || $DvtControlPanelEventManager$$.shiftKey) {
                return $dvt$$8$$.$PanZoomCanvasKeyboardHandler$.$superclass$.$processKeyDown$.call(this, $DvtControlPanelEventManager$$);
              }
              $DvtPanControl$$.$zoomToFit$();
            }
          }
        }
      }
    }
  };
  $dvt$$8$$.$CollapsiblePanel$ = function $$dvt$$8$$$$CollapsiblePanel$$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $disclosed$$1$$, $isFixed$$) {
    this.Init($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $disclosed$$1$$, $isFixed$$);
  };
  $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$ = "col_northeast";
  $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_SOUTHEAST$ = "col_southeast";
  $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ = "col_northwest";
  $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$ = "col_southwest";
  $dvt$$8$$.$CollapsiblePanel$.$ANIMATIONDURATION$ = .25;
  $dvt$$8$$.$CollapsiblePanel$.$BODYCOLOR$ = "#EBEFF5";
  $dvt$$8$$.$CollapsiblePanel$.$TITLEBARCLOSEICON_WIDTH$ = 10;
  $dvt$$8$$.$CollapsiblePanel$.$TITLEBARCLOSEICON_HEIGHT$ = 10;
  $dvt$$8$$.$CollapsiblePanel$.$BUTTONHEIGHT$ = 25;
  $dvt$$8$$.$CollapsiblePanel$.$BUTTONWIDTH$ = 10;
  $dvt$$8$$.$CollapsiblePanel$.$_CONTENT_PADDING$ = 5;
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$CollapsiblePanel$, $dvt$$8$$.$Container$);
  $dvt$$8$$.$CollapsiblePanel$.prototype.Init = function $$dvt$$8$$$$CollapsiblePanel$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $styleMap$$61$$, $disclosed$$2$$, $isFixed$$1$$) {
    $dvt$$8$$.$CollapsiblePanel$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$);
    this.$_maxWidth$ = $DvtControlPanelEvent$$;
    this.$_maxHeight$ = $DvtPanControl$$;
    this.$setCollapseDirection$($DropdownItemSprite$$);
    this.$_buttonImages$ = $DvtControlPanelDefaults$$;
    this.$_isFixed$ = $isFixed$$1$$ ? $isFixed$$1$$ : $dvt$$8$$.$Agent$.$isEnvironmentBatik$();
    this.$_animation$ = this.$_collapseTooltip$ = this.$_expandTooltip$ = null;
    this.$_styleMap$ = $styleMap$$61$$;
    this.$_borderColor$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$CSSStyle$.$BORDER_COLOR$, null);
    this.$_borderRadius$ = parseInt($dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$CSSStyle$.$BORDER_RADIUS$, null));
    this.$_bgColor$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$, null);
    this.$_bgAlpha$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$ControlPanel$.$BG_ALPHA$, 1);
    this.$_collapse$ = void 0 !== $disclosed$$2$$ ? !$disclosed$$2$$ : !1;
    this.$_contentContainer$ = new $dvt$$8$$.$Container$($DvtControlPanelEventManager$$);
    this.$addChild$(this.$_contentContainer$);
    this.$_contentContainer$.$setTranslate$($dvt$$8$$.$CollapsiblePanel$.$_CONTENT_PADDING$, $dvt$$8$$.$CollapsiblePanel$.$_CONTENT_PADDING$);
    this.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEOVER$, this.$HandleMouseOver$, !1, this);
    this.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEOUT$, this.$HandleMouseOut$, !1, this);
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$_drawButton$ = function $$dvt$$8$$$$CollapsiblePanel$$$$_drawButton$$() {
    if (!this.$_isFixed$) {
      this.$_buttonFrame$ = $dvt$$8$$.$ControlPanelLAFUtils$.$createEmptyViewClosedFrame$(this.$getCtx$(), $dvt$$8$$.$CollapsiblePanel$.$BUTTONHEIGHT$, this.$_styleMap$, !1);
      this.$_buttonFrame$.$setAlpha$(this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
      this.$addChild$(this.$_buttonFrame$);
      var $DvtControlPanelEventManager$$ = this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$;
      this.isCollapsed() ? this.$_collapseExpandButton$ = $dvt$$8$$.$ButtonLAFUtils$.$createExpandButton$(this.$getCtx$(), this.$_buttonImages$, $dvt$$8$$.$CollapsiblePanel$.$BUTTONHEIGHT$, this.$_styleMap$, $DvtControlPanelEventManager$$ ? $dvt$$8$$.$ButtonLAFUtils$.$DIR_LEFT$ : $dvt$$8$$.$ButtonLAFUtils$.$DIR_RIGHT$) : this.$_collapseExpandButton$ = $dvt$$8$$.$ButtonLAFUtils$.$createCollapseButton$(this.$getCtx$(), this.$_buttonImages$, $dvt$$8$$.$CollapsiblePanel$.$BUTTONHEIGHT$, this.$_styleMap$, 
      $DvtControlPanelEventManager$$ ? $dvt$$8$$.$ButtonLAFUtils$.$DIR_LEFT$ : $dvt$$8$$.$ButtonLAFUtils$.$DIR_RIGHT$);
      this.$_buttonFrame$.$addChild$(this.$_collapseExpandButton$);
      this.$_buttonFrame$.$setTranslateX$($DvtControlPanelEventManager$$ ? this.$_width$ : -$dvt$$8$$.$CollapsiblePanel$.$BUTTONWIDTH$);
      $dvt$$8$$.$Agent$.$isTouchDevice$() ? this.$_collapseExpandButton$.$addEvtListener$($dvt$$8$$.TouchEvent.$TOUCHSTART$, this.$OnButtonClick$, !1, this) : (this.$_collapseExpandButton$.$addEvtListener$($dvt$$8$$.MouseEvent.$CLICK$, this.$OnButtonClick$, !1, this), this.$_collapseExpandButton$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEOVER$, this.$OnButtonHoverOver$, !1, this), this.$_collapseExpandButton$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEOUT$, this.$OnButtonHoverOut$, !1, this));
    }
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$setButtonTooltips$ = function $$dvt$$8$$$$CollapsiblePanel$$$$setButtonTooltips$$($dvt$$8$$, $DvtControlPanelEventManager$$) {
    this.$_expandTooltip$ = $dvt$$8$$;
    this.$_collapseTooltip$ = $DvtControlPanelEventManager$$;
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$addContent$ = function $$dvt$$8$$$$CollapsiblePanel$$$$addContent$$($DvtControlPanelEventManager$$) {
    this.$_contentContainer$.$addChild$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$.$addEvtListener$($dvt$$8$$.$ResizeEvent$.$RESIZE_EVENT$, this.$HandleResize$, !1, this);
    $DvtControlPanelEventManager$$ = this.$_contentContainer$.$getDimensions$();
    this.$_width$ = Math.min(this.$_maxWidth$, $DvtControlPanelEventManager$$.$w$ + 2 * $dvt$$8$$.$CollapsiblePanel$.$_CONTENT_PADDING$);
    this.$_height$ = Math.min(this.$_maxHeight$, $DvtControlPanelEventManager$$.$h$ + 2 * $dvt$$8$$.$CollapsiblePanel$.$_CONTENT_PADDING$);
    this.$_background$ ? (this.$_background$.$setCmds$(this.$_getOutlinePath$(this.$_width$, this.$_height$)), $DvtControlPanelEventManager$$ = this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$, this.$_buttonFrame$ && $DvtControlPanelEventManager$$ && this.$_buttonFrame$.$setTranslateX$(this.$_width$)) : (this.$_background$ = this.$_createRoundRectangle$(this.$_width$, this.$_height$), this.$addChildAt$(this.$_background$, 
    0), this.$_drawButton$());
    this.$_collapse$ && this.$_collapseExpand$(!1);
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$HandleResize$ = function $$dvt$$8$$$$CollapsiblePanel$$$$HandleResize$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = $DvtControlPanelEventManager$$.getWidth() + 2 * $dvt$$8$$.$CollapsiblePanel$.$_CONTENT_PADDING$;
    $DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.getHeight() + 2 * $dvt$$8$$.$CollapsiblePanel$.$_CONTENT_PADDING$;
    this.$_background$.$setCmds$(this.$_getOutlinePath$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$));
    var $DvtPanControl$$ = this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$;
    this.$_buttonFrame$ && $DvtPanControl$$ && this.$_buttonFrame$.$setTranslateX$($DvtControlPanelEvent$$);
    this.$FireListener$(new $dvt$$8$$.$ResizeEvent$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$, 0, 0));
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.isCollapsed = function $$dvt$$8$$$$CollapsiblePanel$$$isCollapsed$() {
    return this.$_collapse$;
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$setCollapsed$ = function $$dvt$$8$$$$CollapsiblePanel$$$$setCollapsed$$($DvtControlPanelEventManager$$) {
    this.$_collapse$ != $DvtControlPanelEventManager$$ && (this.$_collapse$ = $DvtControlPanelEventManager$$, this.$_collapseExpand$(!0), this.$FireListener$(new $dvt$$8$$.$CollapsiblePanelEvent$($DvtControlPanelEventManager$$ ? $dvt$$8$$.$CollapsiblePanelEvent$.$SUBTYPE_HIDE$ : $dvt$$8$$.$CollapsiblePanelEvent$.$SUBTYPE_SHOW$)));
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$setCollapseDirection$ = function $$dvt$$8$$$$CollapsiblePanel$$$$setCollapseDirection$$($DvtControlPanelEventManager$$) {
    this.$_collapseDir$ = $DvtControlPanelEventManager$$ ? $DvtControlPanelEventManager$$ : $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$;
    $dvt$$8$$.$Agent$.$isRightToLeft$(this.$getCtx$()) && (this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$ ? this.$_collapseDir$ = $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ : this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ ? this.$_collapseDir$ = $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$ : this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_SOUTHEAST$ ? this.$_collapseDir$ = $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$ : 
    this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$ && (this.$_collapseDir$ = $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_SOUTHEAST$));
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$getMaxContentWidth$ = function $$dvt$$8$$$$CollapsiblePanel$$$$getMaxContentWidth$$() {
    return this.$_maxWidth$ - 2 * $dvt$$8$$.$CollapsiblePanel$.$_CONTENT_PADDING$;
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$getMaxContentHeight$ = function $$dvt$$8$$$$CollapsiblePanel$$$$getMaxContentHeight$$() {
    return this.$_maxHeight$ - 2 * $dvt$$8$$.$CollapsiblePanel$.$_CONTENT_PADDING$;
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$_getRefPoint$ = function $$dvt$$8$$$$CollapsiblePanel$$$$_getRefPoint$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    return this.isCollapsed() ? $DvtControlPanelEventManager$$ : $DvtControlPanelEvent$$ ? new $dvt$$8$$.$Point$(1 / $DvtControlPanelEventManager$$.x, 1 / $DvtControlPanelEventManager$$.y) : new $dvt$$8$$.$Point$(-$DvtControlPanelEventManager$$.x, -$DvtControlPanelEventManager$$.y);
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$_collapseExpand$ = function $$dvt$$8$$$$CollapsiblePanel$$$$_collapseExpand$$($DvtControlPanelEventManager$$) {
    this.$_animation$ && this.$_animation$.stop(!0);
    var $DvtControlPanelEvent$$ = this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$, $DvtPanControl$$ = this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$, $DropdownItemSprite$$ = $DvtPanControl$$ ? 0 : this.$_width$, $DvtControlPanelDefaults$$ = $DvtControlPanelEvent$$ ? 0 : this.$_height$, $scaleAnim$$1_scalePoint$$ = 
    new $dvt$$8$$.$Point$(1 / this.$_width$, 1 / this.$_height$), $DropdownItemSprite$$ = new $dvt$$8$$.$Point$($DropdownItemSprite$$, $DvtControlPanelDefaults$$), $DvtControlPanelEvent$$ = new $dvt$$8$$.$Point$($DvtPanControl$$ ? -this.$_width$ : this.$_width$, $DvtControlPanelDefaults$$ - ($DvtControlPanelEvent$$ ? 0 : $dvt$$8$$.$CollapsiblePanel$.$BUTTONHEIGHT$));
    $DvtControlPanelEventManager$$ || (this.$_background$.$setAlpha$(0), this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(0));
    $scaleAnim$$1_scalePoint$$ = new $dvt$$8$$.$AnimScaleBy$(this.$getCtx$(), this.$_background$, this.$_getRefPoint$($scaleAnim$$1_scalePoint$$, !0), $DvtControlPanelEventManager$$ ? $dvt$$8$$.$CollapsiblePanel$.$ANIMATIONDURATION$ : 1E-5);
    $DvtControlPanelEvent$$ = new $dvt$$8$$.$AnimMoveBy$(this.$getCtx$(), this.$_buttonFrame$, this.$_getRefPoint$($DvtControlPanelEvent$$), $DvtControlPanelEventManager$$ ? $dvt$$8$$.$CollapsiblePanel$.$ANIMATIONDURATION$ : 1E-5);
    $DvtControlPanelEventManager$$ = new $dvt$$8$$.$AnimMoveBy$(this.$getCtx$(), this.$_background$, this.$_getRefPoint$($DropdownItemSprite$$), $DvtControlPanelEventManager$$ ? $dvt$$8$$.$CollapsiblePanel$.$ANIMATIONDURATION$ : 1E-5);
    this.$_animation$ = new $dvt$$8$$.$ParallelPlayable$(this.$getCtx$(), $scaleAnim$$1_scalePoint$$, $DvtControlPanelEvent$$, $DvtControlPanelEventManager$$), this.$getCtx$().$getTooltipManager$().$hideTooltip$(), this.$removeEvtListener$($dvt$$8$$.MouseEvent.$MOUSEOVER$, this.$HandleMouseOver$, !1, this), this.$removeEvtListener$($dvt$$8$$.MouseEvent.$MOUSEOUT$, this.$HandleMouseOut$, !1, this), this.$_collapseExpandButton$ && (this.$_collapseExpandButton$.$removeEvtListener$($dvt$$8$$.TouchEvent.$TOUCHSTART$, 
    this.$OnButtonClick$, !1, this), this.$_collapseExpandButton$.$removeEvtListener$($dvt$$8$$.MouseEvent.$CLICK$, this.$OnButtonClick$, !1, this), this.$_collapseExpandButton$.$removeEvtListener$($dvt$$8$$.MouseEvent.$MOUSEOVER$, this.$OnButtonHoverOver$, !1, this), this.$_collapseExpandButton$.$removeEvtListener$($dvt$$8$$.MouseEvent.$MOUSEOUT$, this.$OnButtonHoverOut$, !1, this)), this.isCollapsed() && this.$_contentContainer$.$setAlpha$(0), this.$_animation$.$setOnEnd$(this.$OnAnimationEnd$, 
    this), this.$_animation$.play();
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$_createRoundRectangle$ = function $$dvt$$8$$$$CollapsiblePanel$$$$_createRoundRectangle$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = new $dvt$$8$$.$Path$(this.$getCtx$(), this.$_getOutlinePath$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)), $DropdownItemSprite$$ = this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$];
    $DvtPanControl$$.$setSolidFill$(this.$_bgColor$, this.$_bgAlpha$);
    $DvtPanControl$$.$setSolidStroke$(this.$_borderColor$, $DropdownItemSprite$$);
    return $DvtPanControl$$;
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$_getOutlinePath$ = function $$dvt$$8$$$$CollapsiblePanel$$$$_getOutlinePath$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$_borderRadius$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$ = this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$;
    $DvtControlPanelEvent$$ <= $dvt$$8$$.$CollapsiblePanel$.$BUTTONHEIGHT$ && ($DvtControlPanelEvent$$ = $dvt$$8$$.$CollapsiblePanel$.$BUTTONHEIGHT$);
    $DropdownItemSprite$$ = this.$_isFixed$ || $DvtControlPanelDefaults$$ ? $dvt$$8$$.$PathUtils$.moveTo($DvtPanControl$$, 0) : $dvt$$8$$.$PathUtils$.moveTo(0, 0);
    $DropdownItemSprite$$ += $dvt$$8$$.$PathUtils$.lineTo($DvtControlPanelEventManager$$ - $DvtPanControl$$, 0);
    !this.$_isFixed$ && $DvtControlPanelDefaults$$ ? ($DropdownItemSprite$$ += $dvt$$8$$.$PathUtils$.lineTo($DvtControlPanelEventManager$$, 0), $DropdownItemSprite$$ += $dvt$$8$$.$PathUtils$.lineTo($DvtControlPanelEventManager$$, $DvtPanControl$$)) : $DropdownItemSprite$$ += $dvt$$8$$.$PathUtils$.$quadTo$($DvtControlPanelEventManager$$, 0, $DvtControlPanelEventManager$$, $DvtPanControl$$);
    !this.$_isFixed$ && $DvtControlPanelEvent$$ == $dvt$$8$$.$CollapsiblePanel$.$BUTTONHEIGHT$ && $DvtControlPanelDefaults$$ ? $DropdownItemSprite$$ += $dvt$$8$$.$PathUtils$.lineTo($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) : ($DropdownItemSprite$$ += $dvt$$8$$.$PathUtils$.lineTo($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$ - $DvtPanControl$$), $DropdownItemSprite$$ += $dvt$$8$$.$PathUtils$.$quadTo$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtControlPanelEventManager$$ - 
    $DvtPanControl$$, $DvtControlPanelEvent$$));
    $DropdownItemSprite$$ += $dvt$$8$$.$PathUtils$.lineTo($DvtPanControl$$, $DvtControlPanelEvent$$);
    $DropdownItemSprite$$ = this.$_isFixed$ || $DvtControlPanelEvent$$ != $dvt$$8$$.$CollapsiblePanel$.$BUTTONHEIGHT$ || $DvtControlPanelDefaults$$ ? $DropdownItemSprite$$ + $dvt$$8$$.$PathUtils$.$quadTo$(0, $DvtControlPanelEvent$$, 0, $DvtControlPanelEvent$$ - $DvtPanControl$$) : $DropdownItemSprite$$ + $dvt$$8$$.$PathUtils$.lineTo(0, $DvtControlPanelEvent$$);
    if (this.$_isFixed$ || $DvtControlPanelDefaults$$) {
      $DropdownItemSprite$$ += $dvt$$8$$.$PathUtils$.lineTo(0, $DvtPanControl$$), $DropdownItemSprite$$ += $dvt$$8$$.$PathUtils$.$quadTo$(0, 0, $DvtPanControl$$, 0);
    }
    return $DropdownItemSprite$$ += $dvt$$8$$.$PathUtils$.closePath();
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$OnAnimationEnd$ = function $$dvt$$8$$$$CollapsiblePanel$$$$OnAnimationEnd$$() {
    this.$_animation$ = null;
    var $DvtControlPanelEventManager$$ = this.$_background$.$getStroke$().clone();
    $DvtControlPanelEventManager$$.$setAlpha$(this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
    this.$_background$.$setStroke$($DvtControlPanelEventManager$$);
    var $DvtControlPanelEventManager$$ = this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$BG_ROLLOUT_ALPHA$], $DvtControlPanelEvent$$ = this.$_background$.$getFill$().clone();
    $DvtControlPanelEvent$$.$setAlpha$($DvtControlPanelEventManager$$);
    this.$_background$.$setFill$($DvtControlPanelEvent$$);
    this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
    this.isCollapsed() || this.$_contentContainer$.$setAlpha$(1);
    $DvtControlPanelEventManager$$ = this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == $dvt$$8$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$;
    this.$_collapseExpandButton$ && (this.isCollapsed() ? this.$_collapseExpandButton$ = $dvt$$8$$.$ButtonLAFUtils$.$createExpandButton$(this.$getCtx$(), this.$_buttonImages$, $dvt$$8$$.$CollapsiblePanel$.$BUTTONHEIGHT$, this.$_styleMap$, $DvtControlPanelEventManager$$ ? $dvt$$8$$.$ButtonLAFUtils$.$DIR_LEFT$ : $dvt$$8$$.$ButtonLAFUtils$.$DIR_RIGHT$) : this.$_collapseExpandButton$ = $dvt$$8$$.$ButtonLAFUtils$.$createCollapseButton$(this.$getCtx$(), this.$_buttonImages$, $dvt$$8$$.$CollapsiblePanel$.$BUTTONHEIGHT$, 
    this.$_styleMap$, $DvtControlPanelEventManager$$ ? $dvt$$8$$.$ButtonLAFUtils$.$DIR_LEFT$ : $dvt$$8$$.$ButtonLAFUtils$.$DIR_RIGHT$), this.$_buttonFrame$.$addChild$(this.$_collapseExpandButton$), this.$_buttonFrame$.$removeChildAt$(0), $dvt$$8$$.$Agent$.$isTouchDevice$() ? this.$_collapseExpandButton$.$addEvtListener$($dvt$$8$$.TouchEvent.$TOUCHSTART$, this.$OnButtonClick$, !1, this) : (this.$_collapseExpandButton$.$addEvtListener$($dvt$$8$$.MouseEvent.$CLICK$, this.$OnButtonClick$, !1, this), 
    this.$_collapseExpandButton$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEOVER$, this.$OnButtonHoverOver$, !1, this), this.$_collapseExpandButton$.$addEvtListener$($dvt$$8$$.MouseEvent.$MOUSEOUT$, this.$OnButtonHoverOut$, !1, this)));
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$OnButtonClick$ = function $$dvt$$8$$$$CollapsiblePanel$$$$OnButtonClick$$() {
    this.$getCtx$().$getTooltipManager$().$hideTooltip$();
    this.$setCollapsed$(!this.isCollapsed());
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$OnButtonHoverOver$ = function $$dvt$$8$$$$CollapsiblePanel$$$$OnButtonHoverOver$$($dvt$$8$$) {
    var $DvtControlPanelEventManager$$ = this.isCollapsed() ? this.$_expandTooltip$ : this.$_collapseTooltip$;
    null != $DvtControlPanelEventManager$$ && this.$getCtx$().$getTooltipManager$().$showTooltip$($dvt$$8$$.pageX, $dvt$$8$$.pageY, $DvtControlPanelEventManager$$, this.$_collapseExpandButton$, !0);
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$OnButtonHoverOut$ = function $$dvt$$8$$$$CollapsiblePanel$$$$OnButtonHoverOut$$() {
    this.$getCtx$().$getTooltipManager$().$hideTooltip$();
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$HandleMouseOver$ = function $$dvt$$8$$$$CollapsiblePanel$$$$HandleMouseOver$$() {
    var $DvtControlPanelEventManager$$ = this.$_background$.$getStroke$().clone();
    $DvtControlPanelEventManager$$.$setAlpha$(this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$FRAME_ROLLOVER_ALPHA$]);
    this.$_background$.$setStroke$($DvtControlPanelEventManager$$);
    var $DvtControlPanelEventManager$$ = this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$BG_ROLLOVER_ALPHA$], $DvtControlPanelEvent$$ = this.$_background$.$getFill$().clone();
    $DvtControlPanelEvent$$.$setAlpha$($DvtControlPanelEventManager$$);
    this.$_background$.$setFill$($DvtControlPanelEvent$$);
    this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$FRAME_ROLLOVER_ALPHA$]);
  };
  $dvt$$8$$.$CollapsiblePanel$.prototype.$HandleMouseOut$ = function $$dvt$$8$$$$CollapsiblePanel$$$$HandleMouseOut$$() {
    var $DvtControlPanelEventManager$$ = this.$_background$.$getStroke$().clone();
    $DvtControlPanelEventManager$$.$setAlpha$(this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
    this.$_background$.$setStroke$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$ = this.$_background$.$getFill$().clone();
    $DvtControlPanelEventManager$$.$setAlpha$(this.$_bgAlpha$);
    this.$_background$.$setFill$($DvtControlPanelEventManager$$);
    this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$[$dvt$$8$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
  };
  $dvt$$8$$.$CollapsiblePanelEvent$ = function $$dvt$$8$$$$CollapsiblePanelEvent$$($DvtControlPanelEventManager$$) {
    this.Init($dvt$$8$$.$CollapsiblePanelEvent$.$TYPE$);
    this.$_subtype$ = $DvtControlPanelEventManager$$;
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$CollapsiblePanelEvent$, $dvt$$8$$.$BaseComponentEvent$);
  $dvt$$8$$.$CollapsiblePanelEvent$.$TYPE$ = "dvtCollapsiblePanelEvent";
  $dvt$$8$$.$CollapsiblePanelEvent$.$SUBTYPE_HIDE$ = "hide";
  $dvt$$8$$.$CollapsiblePanelEvent$.$SUBTYPE_SHOW$ = "show";
  $dvt$$8$$.$CollapsiblePanelEvent$.prototype.$getSubType$ = function $$dvt$$8$$$$CollapsiblePanelEvent$$$$getSubType$$() {
    return this.$_subtype$;
  };
  $dvt$$8$$.$ImageLAFUtils$ = {};
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$ImageLAFUtils$, $dvt$$8$$.$Obj$);
  $dvt$$8$$.$ImageLAFUtils$.$loadIcon$ = function $$dvt$$8$$$$ImageLAFUtils$$$loadIcon$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = new $dvt$$8$$.Image($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
    $DvtPanControl$$.$setMouseEnabled$(!1);
    $dvt$$8$$.$ImageLoader$.$loadImage$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, function($dvt$$8$$) {
      null != $dvt$$8$$ && $dvt$$8$$.width && $dvt$$8$$.height && ($DvtPanControl$$.$setWidth$($dvt$$8$$.width), $DvtPanControl$$.$setHeight$($dvt$$8$$.height));
    });
    return $DvtPanControl$$;
  };
  $dvt$$8$$.$ButtonLAFUtils$ = {};
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$ButtonLAFUtils$, $dvt$$8$$.$Obj$);
  $dvt$$8$$.$ButtonLAFUtils$.$EXPAND_COLLAPSE_BUTTON_IMG_OFFSET$ = -6;
  $dvt$$8$$.$ButtonLAFUtils$.$CONTROL_BUTTON_WIDTH$ = 23;
  $dvt$$8$$.$ButtonLAFUtils$.$CONTROL_BUTTON_HEIGHT$ = 21;
  $dvt$$8$$.$ButtonLAFUtils$.$ZOOM_BUTTON_HEIGHT$ = 20;
  $dvt$$8$$.$ButtonLAFUtils$.$OPEN_CLOSE_IMAGE_WIDTH$ = 22;
  $dvt$$8$$.$ButtonLAFUtils$.$OPEN_CLOSE_IMAGE_HEIGHT$ = 20;
  $dvt$$8$$.$ButtonLAFUtils$.$VIEW_PANEL_HEIGHT$ = 47;
  $dvt$$8$$.$ButtonLAFUtils$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
  $dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ = Math.sin(Math.PI / 4);
  $dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ = Math.tan(Math.PI / 8);
  $dvt$$8$$.$ButtonLAFUtils$.$BORDER_COLOR$ = "#7C8191";
  $dvt$$8$$.$ButtonLAFUtils$.$GRADIENT_DARK$ = "#E0E1E1";
  $dvt$$8$$.$ButtonLAFUtils$.$GRADIENT_LIGHT$ = "#F0F1F2";
  $dvt$$8$$.$ButtonLAFUtils$.$ROUND_RECT_ELLIPSE$ = 8;
  $dvt$$8$$.$ButtonLAFUtils$.$DEFAULT_FILL_TYPE$ = "solid";
  $dvt$$8$$.$ButtonLAFUtils$.$DEFAULT_BORDER_COLOR$ = "#7BA0D9";
  $dvt$$8$$.$ButtonLAFUtils$.$DEFAULT_MID_COLOR$ = "#3474D3";
  $dvt$$8$$.$ButtonLAFUtils$.$DEFAULT_END_COLOR$ = "#BFD8FB";
  $dvt$$8$$.$ButtonLAFUtils$.$_ZOOMIN_ENA$ = "zoominUp";
  $dvt$$8$$.$ButtonLAFUtils$.$_ZOOMIN_OVR$ = "zoominOver";
  $dvt$$8$$.$ButtonLAFUtils$.$_ZOOMIN_DWN$ = "zoominDown";
  $dvt$$8$$.$ButtonLAFUtils$.$_ZOOMIN_DISABLED$ = "zoominDisabled";
  $dvt$$8$$.$ButtonLAFUtils$.$_ZOOMTOFIT_ENA$ = "zoomtofitUp";
  $dvt$$8$$.$ButtonLAFUtils$.$_ZOOMTOFIT_OVR$ = "zoomtofitOver";
  $dvt$$8$$.$ButtonLAFUtils$.$_ZOOMTOFIT_DWN$ = "zoomtofitDown";
  $dvt$$8$$.$ButtonLAFUtils$.$_ZOOMOUT_ENA$ = "zoomoutUp";
  $dvt$$8$$.$ButtonLAFUtils$.$_ZOOMOUT_OVR$ = "zoomoutOver";
  $dvt$$8$$.$ButtonLAFUtils$.$_ZOOMOUT_DWN$ = "zoomoutDown";
  $dvt$$8$$.$ButtonLAFUtils$.$_ZOOMOUT_DISABLED$ = "zoomoutDisabled";
  $dvt$$8$$.$ButtonLAFUtils$.$_PAN_ENA$ = "pandialUp";
  $dvt$$8$$.$ButtonLAFUtils$.$_PAN_OVR$ = "pandialOver";
  $dvt$$8$$.$ButtonLAFUtils$.$_PAN_DWN$ = "pandialDown";
  $dvt$$8$$.$ButtonLAFUtils$.$_RECENTER_ENA$ = "recenterUp";
  $dvt$$8$$.$ButtonLAFUtils$.$_RECENTER_OVR$ = "recenterOver";
  $dvt$$8$$.$ButtonLAFUtils$.$_RECENTER_DWN$ = "recenterDown";
  $dvt$$8$$.$ButtonLAFUtils$.$_RESET_ENA$ = "resetUp";
  $dvt$$8$$.$ButtonLAFUtils$.$_RESET_OVR$ = "resetOver";
  $dvt$$8$$.$ButtonLAFUtils$.$_RESET_DWN$ = "resetDown";
  $dvt$$8$$.$ButtonLAFUtils$.$_DRILLUP_ENA$ = "drillupUp";
  $dvt$$8$$.$ButtonLAFUtils$.$_DRILLUP_OVR$ = "drillupOver";
  $dvt$$8$$.$ButtonLAFUtils$.$_DRILLUP_DWN$ = "drillupDown";
  $dvt$$8$$.$ButtonLAFUtils$.$_DRILLDOWN_ENA$ = "drilldownUp";
  $dvt$$8$$.$ButtonLAFUtils$.$_DRILLDOWN_OVR$ = "drilldownOver";
  $dvt$$8$$.$ButtonLAFUtils$.$_DRILLDOWN_DWN$ = "drilldownDown";
  $dvt$$8$$.$ButtonLAFUtils$.$_MAX_ENA$ = "maxUp";
  $dvt$$8$$.$ButtonLAFUtils$.$_MAX_OVR$ = "maxOver";
  $dvt$$8$$.$ButtonLAFUtils$.$_MAX_DWN$ = "maxDown";
  $dvt$$8$$.$ButtonLAFUtils$.$_RESTORE_ENA$ = "restoreUp";
  $dvt$$8$$.$ButtonLAFUtils$.$_RESTORE_OVR$ = "restoreOver";
  $dvt$$8$$.$ButtonLAFUtils$.$_RESTORE_DWN$ = "restoreDown";
  $dvt$$8$$.$ButtonLAFUtils$.$_COLLAPSE_ENA$ = "collapseEna";
  $dvt$$8$$.$ButtonLAFUtils$.$_COLLAPSE_OVR$ = "collapseOvr";
  $dvt$$8$$.$ButtonLAFUtils$.$_COLLAPSE_DWN$ = "collapseDwn";
  $dvt$$8$$.$ButtonLAFUtils$.$_EXPAND_ENA$ = "expandEna";
  $dvt$$8$$.$ButtonLAFUtils$.$_EXPAND_OVR$ = "expandOvr";
  $dvt$$8$$.$ButtonLAFUtils$.$_EXPAND_DWN$ = "expandDwn";
  $dvt$$8$$.$ButtonLAFUtils$.$_QUICKQUERY_ENA$ = "quickQueryEna";
  $dvt$$8$$.$ButtonLAFUtils$.$_QUICKQUERY_OVR$ = "quickQueryOvr";
  $dvt$$8$$.$ButtonLAFUtils$.$_QUICKQUERY_DWN$ = "quickQueryDwn";
  $dvt$$8$$.$ButtonLAFUtils$.$_CLEARRESULTS_ENA$ = "clearResultsEna";
  $dvt$$8$$.$ButtonLAFUtils$.$_CLEARRESULTS_OVR$ = "clearResultsOvr";
  $dvt$$8$$.$ButtonLAFUtils$.$_CLEARRESULTS_DWN$ = "clearResultsDwn";
  $dvt$$8$$.$ButtonLAFUtils$.$_UP$ = "Up";
  $dvt$$8$$.$ButtonLAFUtils$.$_OVER$ = "Over";
  $dvt$$8$$.$ButtonLAFUtils$.$_DOWN$ = "Down";
  $dvt$$8$$.$ButtonLAFUtils$.$_SEL$ = "Sel";
  $dvt$$8$$.$ButtonLAFUtils$.$_R2L$ = "_r";
  $dvt$$8$$.$ButtonLAFUtils$.$_SYNC$ = "synchronize";
  $dvt$$8$$.$ButtonLAFUtils$.$DIR_RIGHT$ = "right";
  $dvt$$8$$.$ButtonLAFUtils$.$DIR_LEFT$ = "left";
  $dvt$$8$$.$ButtonLAFUtils$.$createPanControl$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createPanControl$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $styleMap$$62$$) {
    var $panButton$$2_panUpState$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createPanButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$[$dvt$$8$$.$ButtonLAFUtils$.$_PAN_ENA$], $styleMap$$62$$), $panDownState$$ = new $dvt$$8$$.$Container$($DvtControlPanelEventManager$$);
    $panDownState$$.$setTranslate$(20, 20);
    var $downImage_panOverState$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createPanButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$[$dvt$$8$$.$ButtonLAFUtils$.$_PAN_DWN$], $styleMap$$62$$);
    $downImage_panOverState$$.$setTranslate$(-20, -20);
    $panDownState$$.$addChild$($downImage_panOverState$$);
    $downImage_panOverState$$ = new $dvt$$8$$.$Container$($DvtControlPanelEventManager$$);
    $downImage_panOverState$$.$setTranslate$(20, 20);
    var $overImage$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createPanButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$[$dvt$$8$$.$ButtonLAFUtils$.$_PAN_OVR$], $styleMap$$62$$);
    $overImage$$.$setTranslate$(-20, -20);
    $downImage_panOverState$$.$addChild$($overImage$$);
    $panButton$$2_panUpState$$ = new $dvt$$8$$.$Button$($DvtControlPanelEventManager$$, $panButton$$2_panUpState$$, $downImage_panOverState$$, $panDownState$$);
    if (0 < ($DropdownItemSprite$$ & $dvt$$8$$.$ControlPanel$.$CONTROLS_CENTER_BUTTON$)) {
      var $recenterButton$$2$$ = new $dvt$$8$$.$Button$($DvtControlPanelEventManager$$, $dvt$$8$$.$ButtonLAFUtils$.$_createRecenterButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$[$dvt$$8$$.$ButtonLAFUtils$.$_RECENTER_ENA$], $styleMap$$62$$), $dvt$$8$$.$ButtonLAFUtils$.$_createRecenterButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$[$dvt$$8$$.$ButtonLAFUtils$.$_RECENTER_OVR$], $styleMap$$62$$), $dvt$$8$$.$ButtonLAFUtils$.$_createRecenterButtonState$($DvtControlPanelEventManager$$, 
      $DvtControlPanelDefaults$$[$dvt$$8$$.$ButtonLAFUtils$.$_RECENTER_DWN$], $styleMap$$62$$));
      $recenterButton$$2$$.$setTranslate$(9, 9);
    }
    return new $DvtPanControl$$($DvtControlPanelEventManager$$, $panButton$$2_panUpState$$, $recenterButton$$2$$, $DvtControlPanelEvent$$, $DropdownItemSprite$$, $styleMap$$62$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$createDrillUpButton$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createDrillUpButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_DRILLUP_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_DRILLUP_OVR$], $DvtPanControl$$), $dwn$$5$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, 
    $dvt$$8$$.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_DRILLUP_DWN$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_DRILLUP_ENA$], $DvtPanControl$$, null, null, .4);
    return new $dvt$$8$$.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $dwn$$5$$, $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$createDrillDownButton$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createDrillDownButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_DRILLDOWN_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_DRILLDOWN_OVR$], $DvtPanControl$$), $dwn$$6$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, 
    $dvt$$8$$.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_DRILLDOWN_DWN$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_DRILLDOWN_ENA$], $DvtPanControl$$, null, null, .4);
    return new $dvt$$8$$.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $dwn$$6$$, $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$createResetButton$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createResetButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_RESET_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_RESET_OVR$], $DvtPanControl$$), $dwn$$7$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, 
    $dvt$$8$$.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_RESET_DWN$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_RESET_ENA$], $DvtPanControl$$);
    return new $dvt$$8$$.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $dwn$$7$$, $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$createZoomToFitButton$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createZoomToFitButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_ZOOMTOFIT_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_ZOOMTOFIT_OVR$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_ZOOMTOFIT_DWN$], $DvtPanControl$$);
    return new $dvt$$8$$.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$createZoomInButton$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createZoomInButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_ZOOMIN_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_ZOOMIN_OVR$], $DvtPanControl$$), $dwn$$9$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, 
    $dvt$$8$$.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_ZOOMIN_DWN$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_DISABLED$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_ZOOMIN_DISABLED$], $DvtPanControl$$);
    return new $dvt$$8$$.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $dwn$$9$$, $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$createZoomOutButton$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createZoomOutButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_ZOOMOUT_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_ZOOMOUT_OVR$], $DvtPanControl$$), $dwn$$10$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, 
    $dvt$$8$$.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_ZOOMOUT_DWN$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_DISABLED$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_ZOOMOUT_DISABLED$], $DvtPanControl$$);
    return new $dvt$$8$$.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $dwn$$10$$, $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$createLayoutItemButtonState$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createLayoutItemButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $r$$55$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, "buttonRadius", 0), $w$$39$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$ControlPanel$.$CP_BUTTON_WIDTH$, 0), $h$$32$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$ControlPanel$.$CP_BUTTON_WIDTH$, 0), $shape$$67$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createBaseButtonShape$($DvtControlPanelEventManager$$, $r$$55$$, $w$$39$$, $h$$32$$, $DvtControlPanelDefaults$$);
    $dvt$$8$$.$ButtonLAFUtils$.$_setButtonColors$($DvtPanControl$$, $shape$$67$$, $w$$39$$, $h$$32$$ + 2 * $r$$55$$, $DvtControlPanelDefaults$$, !0);
    $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_getLayoutURI$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DvtControlPanelEvent$$);
    ($DvtControlPanelEventManager$$ = $dvt$$8$$.$ButtonLAFUtils$.$_loadIcon$($DvtControlPanelEventManager$$, $DropdownItemSprite$$[$DvtControlPanelEvent$$], $w$$39$$, $h$$32$$)) && $shape$$67$$.$addChild$($DvtControlPanelEventManager$$);
    return $shape$$67$$;
  };
  $dvt$$8$$.$ButtonLAFUtils$.$_getLayoutURI$ = function $$dvt$$8$$$$ButtonLAFUtils$$$_getLayoutURI$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    var $DvtControlPanelDefaults$$ = "";
    $DvtControlPanelEvent$$ == $dvt$$8$$.$Button$.$STATE_ENABLED$ ? $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_UP$ : $DvtControlPanelEvent$$ == $dvt$$8$$.$Button$.$STATE_OVER$ ? $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_OVER$ : $DvtControlPanelEvent$$ == $dvt$$8$$.$Button$.$STATE_DOWN$ && ($DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_DOWN$);
    $DropdownItemSprite$$ && ($DvtPanControl$$ += $dvt$$8$$.$ButtonLAFUtils$.$_SEL$, $dvt$$8$$.$Agent$.$isRightToLeft$($DvtControlPanelEventManager$$) && ($DvtControlPanelDefaults$$ = $dvt$$8$$.$ButtonLAFUtils$.$_R2L$));
    return $DvtPanControl$$ + ($DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$createPanelCardButtonState$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createPanelCardButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    var $DvtControlPanelDefaults$$ = $dvt$$8$$.$ButtonLAFUtils$.$_getLayoutURI$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $dvt$$8$$.$ButtonLAFUtils$.$_SYNC$, !0);
    return $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DropdownItemSprite$$[$DvtControlPanelDefaults$$], $DvtPanControl$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$createPanelCardSyncItemState$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createPanelCardSyncItemState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $r$$56$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, "buttonRadius", 0);
    $DvtControlPanelEventManager$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createBaseButtonShape$($DvtControlPanelEventManager$$, $r$$56$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$);
    $dvt$$8$$.$ButtonLAFUtils$.$_setButtonColors$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$ + 2 * $r$$56$$, $DvtControlPanelDefaults$$, !0);
    return $DvtControlPanelEventManager$$;
  };
  $dvt$$8$$.$ButtonLAFUtils$.$createControlButtonState$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createControlButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_getLayoutURI$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DvtControlPanelEvent$$);
    return $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$[$DvtControlPanelEvent$$], $DvtControlPanelDefaults$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$createExpandButton$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createExpandButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $right$$14$$ = $DvtControlPanelDefaults$$ == $dvt$$8$$.$ButtonLAFUtils$.$DIR_RIGHT$;
    $DvtControlPanelDefaults$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_ENABLED$, $DvtPanControl$$, $right$$14$$ ? $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_COLLAPSE_ENA$] : $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_EXPAND_ENA$], $DropdownItemSprite$$, $right$$14$$);
    var $ovr$$11$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_OVER$, $DvtPanControl$$, $right$$14$$ ? $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_COLLAPSE_OVR$] : $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_EXPAND_OVR$], $DropdownItemSprite$$, $right$$14$$);
    $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_DOWN$, $DvtPanControl$$, $right$$14$$ ? $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_COLLAPSE_DWN$] : $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_EXPAND_DWN$], $DropdownItemSprite$$, $right$$14$$);
    return new $dvt$$8$$.$Button$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$, $ovr$$11$$, $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$createCollapseButton$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createCollapseButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $right$$15$$ = $DvtControlPanelDefaults$$ == $dvt$$8$$.$ButtonLAFUtils$.$DIR_RIGHT$;
    $DvtControlPanelDefaults$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_ENABLED$, $DvtPanControl$$, $right$$15$$ ? $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_EXPAND_ENA$] : $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_COLLAPSE_ENA$], $DropdownItemSprite$$, $right$$15$$);
    var $ovr$$12$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_OVER$, $DvtPanControl$$, $right$$15$$ ? $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_EXPAND_OVR$] : $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_COLLAPSE_OVR$], $DropdownItemSprite$$, $right$$15$$);
    $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, $dvt$$8$$.$Button$.$STATE_DOWN$, $DvtPanControl$$, $right$$15$$ ? $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_EXPAND_DWN$] : $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_COLLAPSE_DWN$], $DropdownItemSprite$$, $right$$15$$);
    return new $dvt$$8$$.$Button$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$, $ovr$$12$$, $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$createQuickQueryButton$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createQuickQueryButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_QUICKQUERY_ENA$]), $DropdownItemSprite$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_QUICKQUERY_OVR$]), $DvtControlPanelDefaults$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_QUICKQUERY_DWN$]);
    return new $dvt$$8$$.$Button$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$createClearResultsButton$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createClearResultsButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_CLEARRESULTS_ENA$]), $DropdownItemSprite$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_CLEARRESULTS_OVR$]), $DvtControlPanelDefaults$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[$dvt$$8$$.$ButtonLAFUtils$.$_CLEARRESULTS_DWN$]);
    return new $dvt$$8$$.$Button$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$_createButtonBaseImage$ = function $$dvt$$8$$$$ButtonLAFUtils$$$_createButtonBaseImage$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $h$$35$$, $alpha$$27$$) {
    var $r$$57$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, "buttonRadius", 0);
    if ("undefined" === $DvtControlPanelDefaults$$ || null == $DvtControlPanelDefaults$$) {
      $DvtControlPanelDefaults$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, $dvt$$8$$.$ControlPanel$.$CP_BUTTON_WIDTH$, 0);
    }
    if ("undefined" === $h$$35$$ || null == $h$$35$$) {
      $h$$35$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, $dvt$$8$$.$ControlPanel$.$CP_BUTTON_WIDTH$, 0);
    }
    $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_drawBaseButton$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $r$$57$$, $DvtControlPanelDefaults$$, $h$$35$$, $DropdownItemSprite$$);
    if ($DvtControlPanelEventManager$$ = $dvt$$8$$.$ButtonLAFUtils$.$_loadIcon$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DvtControlPanelDefaults$$, $h$$35$$)) {
      null != $alpha$$27$$ && $DvtControlPanelEventManager$$.$setAlpha$($alpha$$27$$), $DvtControlPanelEvent$$.$addChild$($DvtControlPanelEventManager$$);
    }
    return $DvtControlPanelEvent$$;
  };
  $dvt$$8$$.$ButtonLAFUtils$.$_loadIcon$ = function $$dvt$$8$$$$ButtonLAFUtils$$$_loadIcon$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    var $DvtControlPanelDefaults$$ = new $dvt$$8$$.Image($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
    $DvtControlPanelDefaults$$.$setMouseEnabled$(!1);
    $dvt$$8$$.$ImageLoader$.$loadImage$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, function($dvt$$8$$) {
      null != $dvt$$8$$ && $dvt$$8$$.width && $dvt$$8$$.height && ($DvtControlPanelDefaults$$.$setWidth$($dvt$$8$$.width), $DvtControlPanelDefaults$$.$setHeight$($dvt$$8$$.height), $DvtControlPanelDefaults$$.$setTranslate$($DvtPanControl$$ / 2 - $dvt$$8$$.width / 2, $DropdownItemSprite$$ / 2 - $dvt$$8$$.height / 2));
    });
    return $DvtControlPanelDefaults$$;
  };
  $dvt$$8$$.$ButtonLAFUtils$.$_createPanButtonState$ = function $$dvt$$8$$$$ButtonLAFUtils$$$_createPanButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = new $dvt$$8$$.$Container$($DvtControlPanelEventManager$$), $DvtControlPanelDefaults$$ = new $dvt$$8$$.$Circle$($DvtControlPanelEventManager$$, 20, 20, 20);
    $DvtControlPanelDefaults$$.$setAlpha$(0);
    $DvtPanControl$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$, null);
    $DvtControlPanelDefaults$$.$setSolidFill$($DvtPanControl$$);
    $DropdownItemSprite$$.$addChild$($DvtControlPanelDefaults$$);
    ($DvtControlPanelEventManager$$ = $dvt$$8$$.$ImageLAFUtils$.$loadIcon$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)) && $DropdownItemSprite$$.$addChild$($DvtControlPanelEventManager$$);
    return $DropdownItemSprite$$;
  };
  $dvt$$8$$.$ButtonLAFUtils$.$_createRecenterButtonState$ = function $$dvt$$8$$$$ButtonLAFUtils$$$_createRecenterButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = new $dvt$$8$$.$Container$($DvtControlPanelEventManager$$), $DvtControlPanelDefaults$$ = new $dvt$$8$$.$Circle$($DvtControlPanelEventManager$$, 11, 11, 8);
    $DvtControlPanelDefaults$$.$setAlpha$(0);
    $DvtPanControl$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$, null);
    $DvtControlPanelDefaults$$.$setSolidFill$($DvtPanControl$$);
    $DropdownItemSprite$$.$addChild$($DvtControlPanelDefaults$$);
    ($DvtControlPanelEventManager$$ = $dvt$$8$$.$ImageLAFUtils$.$loadIcon$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)) && $DropdownItemSprite$$.$addChild$($DvtControlPanelEventManager$$);
    return $DropdownItemSprite$$;
  };
  $dvt$$8$$.$ButtonLAFUtils$.$_createCollapseExpandButtonState$ = function $$dvt$$8$$$$ButtonLAFUtils$$$_createCollapseExpandButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $imageW_right$$16$$) {
    $DvtPanControl$$ || ($DvtPanControl$$ = 47);
    $DvtControlPanelEvent$$ = $dvt$$8$$.$ButtonLAFUtils$.$_drawOpenCloseButtonHelper$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DvtControlPanelDefaults$$, $imageW_right$$16$$);
    if ($DvtControlPanelEventManager$$ = $dvt$$8$$.$ImageLAFUtils$.$loadIcon$($DvtControlPanelEventManager$$, $DropdownItemSprite$$)) {
      $imageW_right$$16$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$ControlPanel$.$CP_IMAGE_WIDTH$, 0), $DropdownItemSprite$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$ControlPanel$.$CP_IMAGE_HEIGHT$, 0), $DvtControlPanelEvent$$.$addChild$($DvtControlPanelEventManager$$), $DvtControlPanelDefaults$$ = ($dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0) - $imageW_right$$16$$) / 
      2, $DvtControlPanelEventManager$$.$setTranslate$($DvtControlPanelDefaults$$, ($DvtPanControl$$ - $DropdownItemSprite$$) / 2);
    }
    return $DvtControlPanelEvent$$;
  };
  $dvt$$8$$.$ButtonLAFUtils$.$_createQuickQueryButtonState$ = function $$dvt$$8$$$$ButtonLAFUtils$$$_createQuickQueryButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $dvt$$8$$.$ImageLAFUtils$.$loadIcon$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
    $DvtPanControl$$.$setMouseEnabled$(!0);
    return $DvtPanControl$$;
  };
  $dvt$$8$$.$ButtonLAFUtils$.$createPanButtonBackground$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createPanButtonBackground$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $dvt$$8$$.$ButtonLAFUtils$.$_drawPanButtonBase$($DvtControlPanelEventManager$$), $DropdownItemSprite$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$, null), $DvtControlPanelDefaults$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$CSSStyle$.$BORDER_COLOR$, null);
    "solid" == $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$CSSStyle$.$FILL_TYPE$, null) ? ($DvtPanControl$$.$setSolidStroke$($DvtControlPanelDefaults$$), $DvtPanControl$$.$setSolidFill$($DropdownItemSprite$$)) : ($DvtPanControl$$.$setStroke$(new $dvt$$8$$.$LinearGradientStroke$(36, ["#8D93A5", "#E0EAEB", $DvtControlPanelDefaults$$], [1, 1, 1], [0, 125 / 255, 1], [0, 0, 40, 40], 1)), $DvtPanControl$$.$setFill$(new $dvt$$8$$.$LinearGradientFill$(90, [$DropdownItemSprite$$, 
    $DropdownItemSprite$$, "#5A83BE", $DropdownItemSprite$$], [.9, .1, 0, .7], [0, 105 / 255, 150 / 255, 1], [0, 0, 40, 40])));
    return $DvtPanControl$$;
  };
  $dvt$$8$$.$ButtonLAFUtils$.$createPanButtonUnderlay$ = function $$dvt$$8$$$$ButtonLAFUtils$$$createPanButtonUnderlay$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $dvt$$8$$.$ButtonLAFUtils$.$_drawPanButtonBase$($DvtControlPanelEventManager$$), $DropdownItemSprite$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$, null);
    $DvtPanControl$$.$setSolidStroke$($DropdownItemSprite$$);
    $DvtPanControl$$.$setSolidFill$($DropdownItemSprite$$);
    return $DvtPanControl$$;
  };
  $dvt$$8$$.$ButtonLAFUtils$.$_drawPanButtonBase$ = function $$dvt$$8$$$$ButtonLAFUtils$$$_drawPanButtonBase$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = $dvt$$8$$.$PathUtils$.moveTo(40, 20) + $dvt$$8$$.$PathUtils$.$quadTo$(40, 20 * $dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 20 * $dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ + 20, 20 * $dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ + 20) + $dvt$$8$$.$PathUtils$.$quadTo$(20 * $dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 40, 20, 40) + $dvt$$8$$.$PathUtils$.$quadTo$(20 * -$dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 40, 20 * -$dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ + 20, 20 * $dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ + 
    20) + $dvt$$8$$.$PathUtils$.$quadTo$(0, 20 * $dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 0, 20) + $dvt$$8$$.$PathUtils$.$quadTo$(0, 20 * -$dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 20 * -$dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ + 20, 20 * -$dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ + 20) + $dvt$$8$$.$PathUtils$.$quadTo$(20 * -$dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 0, 20, 0) + $dvt$$8$$.$PathUtils$.$quadTo$(20 * $dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 0, 20 * $dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ + 
    20, 20 * -$dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ + 20) + $dvt$$8$$.$PathUtils$.$quadTo$(40, 20 * -$dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 40, 20) + $dvt$$8$$.$PathUtils$.closePath();
    return new $dvt$$8$$.$Path$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, "draw_pan_button");
  };
  $dvt$$8$$.$ButtonLAFUtils$.$_setGradientBorder$ = function $$dvt$$8$$$$ButtonLAFUtils$$$_setGradientBorder$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelEventManager$$.$setSolidStroke$("#FFFFFF");
    $DvtControlPanelEventManager$$.$setStroke$(new $dvt$$8$$.$LinearGradientStroke$(63, ["#8D93A5", "#E0EAEB", "#FFFFFF"], [1, 1, 1], [0, 155 / 255, 1], [$DropdownItemSprite$$, $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$, $DvtPanControl$$], 1));
  };
  $dvt$$8$$.$ButtonLAFUtils$.$_setButtonColors$ = function $$dvt$$8$$$$ButtonLAFUtils$$$_setButtonColors$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $isDropdownItem$$) {
    if ($dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$, null)) {
      !$isDropdownItem$$ || $isDropdownItem$$ && $DvtControlPanelEventManager$$ == $dvt$$8$$.$Button$.$STATE_ENABLED$ ? $DvtControlPanelEvent$$.$setInvisibleFill$() : $DvtControlPanelEventManager$$ != $dvt$$8$$.$Button$.$STATE_OVER$ && $DvtControlPanelEventManager$$ != $dvt$$8$$.$Button$.$STATE_DOWN$ || $DvtControlPanelEvent$$.$setFill$(new $dvt$$8$$.$SolidFill$("#EBECED"));
    } else {
      if ($DvtControlPanelDefaults$$[$dvt$$8$$.$PanZoomComponent$.$SKIN_NAME$] == $dvt$$8$$.$CSSStyle$.$SKIN_SKYROS$) {
        switch($DvtControlPanelEventManager$$) {
          case $dvt$$8$$.$Button$.$STATE_OVER$:
            $DvtControlPanelEvent$$.$setFill$(new $dvt$$8$$.$SolidFill$("#FFFFFF", .7));
            $DvtControlPanelEvent$$.$setStroke$(new $dvt$$8$$.$SolidStroke$($dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$CSSStyle$.$BORDER_COLOR$, null)));
            break;
          case $dvt$$8$$.$Button$.$STATE_DOWN$:
            $DvtControlPanelEvent$$.$setFill$(new $dvt$$8$$.$SolidFill$("#B3C6DB"));
            $DvtControlPanelEvent$$.$setStroke$(new $dvt$$8$$.$SolidStroke$($dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$CSSStyle$.$BORDER_COLOR$, null)));
            break;
          default:
            $DvtControlPanelEvent$$.$setInvisibleFill$();
        }
      } else {
        var $fill_colors$$10$$, $fill_alphas$$10$$, $fill_ratios$$10$$;
        switch($DvtControlPanelEventManager$$) {
          case $dvt$$8$$.$Button$.$STATE_DISABLED$:
          ;
          case $dvt$$8$$.$Button$.$STATE_ENABLED$:
            $fill_colors$$10$$ = ["#5B868A", "#FFFFFF", "#FFFFFF", "#5B868A"];
            $fill_alphas$$10$$ = [.01, 0, .05, .01];
            $fill_ratios$$10$$ = [0, 120 / 255, 130 / 255, 1];
            break;
          case $dvt$$8$$.$Button$.$STATE_OVER$:
            $dvt$$8$$.$ButtonLAFUtils$.$_setGradientBorder$($DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, 0, 0);
            $fill_colors$$10$$ = ["#FFFFFF", "#4671B0", "#4671B0", "#FFFFFF"];
            $fill_alphas$$10$$ = [.5, .2, .1, .7];
            $fill_ratios$$10$$ = [0, 120 / 255, 130 / 255, 1];
            break;
          case $dvt$$8$$.$Button$.$STATE_DOWN$:
            $dvt$$8$$.$ButtonLAFUtils$.$_setGradientBorder$($DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, 0, 0), $fill_colors$$10$$ = ["#E0EAEB", "#5B868A", "#4671B0"], $fill_alphas$$10$$ = [.1, .3, .6], $fill_ratios$$10$$ = [0, 130 / 255, 1];
        }
        $DvtControlPanelEvent$$.$setFill$(new $dvt$$8$$.$LinearGradientFill$(90, $fill_colors$$10$$, $fill_alphas$$10$$, $fill_ratios$$10$$, [0, 0, $DvtPanControl$$, $DropdownItemSprite$$]));
      }
    }
  };
  $dvt$$8$$.$ButtonLAFUtils$.$_setCloseButtonColors$ = function $$dvt$$8$$$$ButtonLAFUtils$$$_setCloseButtonColors$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    if ($dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$, null)) {
      $DvtControlPanelEvent$$.$setInvisibleFill$();
    } else {
      var $borderColor$$43_stroke$$85$$, $fillType$$11$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$CSSStyle$.$FILL_TYPE$, null);
      $borderColor$$43_stroke$$85$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$CSSStyle$.$BORDER_COLOR$, null);
      if ("solid" == $fillType$$11$$) {
        $DvtPanControl$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$, null);
        var $bgAlpha$$2$$, $strokeAlpha$$2$$;
        switch($DvtControlPanelEventManager$$) {
          case $dvt$$8$$.$Button$.$STATE_ENABLED$:
            $bgAlpha$$2$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$ControlPanel$.$BG_ALPHA$, 1);
            $strokeAlpha$$2$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$, 1);
            break;
          case $dvt$$8$$.$Button$.$STATE_DOWN$:
          ;
          case $dvt$$8$$.$Button$.$STATE_OVER$:
            $bgAlpha$$2$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$ControlPanel$.$BG_ROLLOVER_ALPHA$, 1), $strokeAlpha$$2$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$8$$.$ControlPanel$.$FRAME_ROLLOVER_ALPHA$, 1);
        }
        $DvtControlPanelEventManager$$ = new $dvt$$8$$.$SolidFill$($DvtPanControl$$, $bgAlpha$$2$$);
        $borderColor$$43_stroke$$85$$ = new $dvt$$8$$.$SolidStroke$($borderColor$$43_stroke$$85$$, $strokeAlpha$$2$$);
      } else {
        var $fill_colors$$11$$, $fill_alphas$$11$$, $fill_ratios$$11$$;
        switch($DvtControlPanelEventManager$$) {
          case $dvt$$8$$.$Button$.$STATE_ENABLED$:
            $fill_colors$$11$$ = ["#FFFFFF", "#5B868A", "#5B868A"];
            $fill_alphas$$11$$ = [0, .2, .3];
            $fill_ratios$$11$$ = [0, 130 / 255, 1];
            break;
          case $dvt$$8$$.$Button$.$STATE_OVER$:
            $fill_colors$$11$$ = ["#FFFFFF", "#FFFFFF", "#4671B0", "#4671B0"];
            $fill_alphas$$11$$ = [.1, .2, .1, .6];
            $fill_ratios$$11$$ = [0, 120 / 255, 130 / 255, 1];
            break;
          case $dvt$$8$$.$Button$.$STATE_DOWN$:
            $fill_colors$$11$$ = ["#4671B0", "#5B868A", "#5B868A"], $fill_alphas$$11$$ = [.5, .2, .4], $fill_ratios$$11$$ = [0, 130 / 255, 1];
        }
        $DvtControlPanelEventManager$$ = new $dvt$$8$$.$LinearGradientFill$(0, $fill_colors$$11$$, $fill_alphas$$11$$, $fill_ratios$$11$$, [0, 0, $DvtPanControl$$, $DropdownItemSprite$$]);
        $borderColor$$43_stroke$$85$$ = new $dvt$$8$$.$SolidStroke$($borderColor$$43_stroke$$85$$, 1, .8);
      }
      $DvtControlPanelEvent$$.$setStroke$($borderColor$$43_stroke$$85$$);
      $DvtControlPanelEvent$$.$setFill$($DvtControlPanelEventManager$$);
    }
  };
  $dvt$$8$$.$ButtonLAFUtils$.$_setSliderButtonColors$ = function $$dvt$$8$$$$ButtonLAFUtils$$$_setSliderButtonColors$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $yy$$54$$) {
    var $fill_colors$$12$$, $fill_alphas$$12$$, $fill_ratios$$12$$;
    switch($DvtControlPanelEventManager$$) {
      case $dvt$$8$$.$Button$.$STATE_ENABLED$:
        $DvtControlPanelEvent$$.$setSolidStroke$("#FFFFFF", 1, .25);
        $fill_colors$$12$$ = ["#FFFFFF", "#4671B0", "#E0EAEB", "#FFFFFF"];
        $fill_alphas$$12$$ = [.6, .3, .3, .8];
        $fill_ratios$$12$$ = [0, 125 / 255, 130 / 255, 1];
        break;
      case $dvt$$8$$.$Button$.$STATE_OVER$:
        $dvt$$8$$.$ButtonLAFUtils$.$_setGradientBorder$($DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $yy$$54$$);
        $fill_colors$$12$$ = ["#4671B0", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
        $fill_alphas$$12$$ = [.4, .3, .7, 1];
        $fill_ratios$$12$$ = [0, 70 / 255, 200 / 255, 1];
        break;
      case $dvt$$8$$.$Button$.$STATE_DOWN$:
        $dvt$$8$$.$ButtonLAFUtils$.$_setGradientBorder$($DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $yy$$54$$), $fill_colors$$12$$ = ["#FFFFFF", "#4671B0", "#E0EAEB"], $fill_alphas$$12$$ = [.6, .5, .8], $fill_ratios$$12$$ = [0, 130 / 255, 1];
    }
    $DvtControlPanelEvent$$.$setFill$(new $dvt$$8$$.$LinearGradientFill$(90, $fill_colors$$12$$, $fill_alphas$$12$$, $fill_ratios$$12$$, [$DvtControlPanelDefaults$$, $yy$$54$$, $DvtPanControl$$, $DropdownItemSprite$$]));
  };
  $dvt$$8$$.$ButtonLAFUtils$.$GetButtonPathCommands$ = function $$dvt$$8$$$$ButtonLAFUtils$$$GetButtonPathCommands$$($dvt$$8$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    return $DvtPanControl$$ ? ["M", $dvt$$8$$, 0, "L", $DvtControlPanelEvent$$, 0, "A", $DvtControlPanelEvent$$, $DvtControlPanelEvent$$, 0, 0, 0, 0, $DvtControlPanelEvent$$, "L", 0, $DvtControlPanelEventManager$$ - $DvtControlPanelEvent$$, "A", $DvtControlPanelEvent$$, $DvtControlPanelEvent$$, 0, 0, 0, $DvtControlPanelEvent$$, $DvtControlPanelEventManager$$, "L", $dvt$$8$$, $DvtControlPanelEventManager$$] : ["M", 0, 0, "L", $dvt$$8$$ - $DvtControlPanelEvent$$, 0, "A", $DvtControlPanelEvent$$, $DvtControlPanelEvent$$, 
    0, 0, 1, $dvt$$8$$, $DvtControlPanelEvent$$, "L", $dvt$$8$$, $DvtControlPanelEventManager$$ - $DvtControlPanelEvent$$, "A", $DvtControlPanelEvent$$, $DvtControlPanelEvent$$, 0, 0, 1, $dvt$$8$$ - $DvtControlPanelEvent$$, $DvtControlPanelEventManager$$, "L", 0, $DvtControlPanelEventManager$$];
  };
  $dvt$$8$$.$ButtonLAFUtils$.$_drawOpenCloseButtonHelper$ = function $$dvt$$8$$$$ButtonLAFUtils$$$_drawOpenCloseButtonHelper$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtPanControl$$ || ($DvtPanControl$$ = 47);
    var $r$$61$$ = parseInt($dvt$$8$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, $dvt$$8$$.$CSSStyle$.$BORDER_RADIUS$, 0)), $buttonWidth$$11$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, $dvt$$8$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
    $DvtPanControl$$ = Math.max($DvtPanControl$$, $dvt$$8$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, $dvt$$8$$.$ControlPanel$.$CP_BUTTON_HEIGHT$, $DvtPanControl$$));
    $DvtControlPanelEventManager$$ = new $dvt$$8$$.$Path$($DvtControlPanelEventManager$$, $dvt$$8$$.$ButtonLAFUtils$.$GetButtonPathCommands$($buttonWidth$$11$$, $DvtPanControl$$, $r$$61$$, $DvtControlPanelDefaults$$));
    $dvt$$8$$.$ButtonLAFUtils$.$_setCloseButtonColors$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$, $buttonWidth$$11$$, $DvtPanControl$$, $DropdownItemSprite$$);
    return $DvtControlPanelEventManager$$;
  };
  $dvt$$8$$.$ButtonLAFUtils$.$_drawBaseButton$ = function $$dvt$$8$$$$ButtonLAFUtils$$$_drawBaseButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $styleMap$$84$$) {
    $DvtControlPanelEventManager$$ = $dvt$$8$$.$ButtonLAFUtils$.$_createBaseButtonShape$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $styleMap$$84$$);
    $dvt$$8$$.$ButtonLAFUtils$.$_setButtonColors$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$ + 2 * $DvtPanControl$$, $styleMap$$84$$);
    return $DvtControlPanelEventManager$$;
  };
  $dvt$$8$$.$ButtonLAFUtils$.$_createBaseButtonShape$ = function $$dvt$$8$$$$ButtonLAFUtils$$$_createBaseButtonShape$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    if ($DvtControlPanelDefaults$$[$dvt$$8$$.$PanZoomComponent$.$SKIN_NAME$] == $dvt$$8$$.$CSSStyle$.$SKIN_SKYROS$) {
      return new $dvt$$8$$.Rect($DvtControlPanelEventManager$$, 0, 0, $DvtPanControl$$, $DropdownItemSprite$$);
    }
    $DvtPanControl$$ -= 2 * $DvtControlPanelEvent$$;
    $DropdownItemSprite$$ -= 2 * $DvtControlPanelEvent$$;
    $DvtControlPanelDefaults$$ = $DvtPanControl$$ + $DvtControlPanelEvent$$;
    var $y$$173$$ = $DropdownItemSprite$$ + $DvtControlPanelEvent$$, $cmds$$24$$ = $dvt$$8$$.$PathUtils$.moveTo($DvtControlPanelDefaults$$ + $DvtControlPanelEvent$$, $y$$173$$) + $dvt$$8$$.$PathUtils$.$quadTo$($DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$173$$, $dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + 
    $y$$173$$) + $dvt$$8$$.$PathUtils$.$quadTo$($dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$ + $y$$173$$, $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$ + $y$$173$$) + $dvt$$8$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$, $y$$173$$ + $DvtControlPanelEvent$$) + $dvt$$8$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$ - $DvtPanControl$$, $DvtControlPanelEvent$$ + $y$$173$$);
    $DvtControlPanelDefaults$$ -= $DvtPanControl$$;
    $cmds$$24$$ += $dvt$$8$$.$PathUtils$.$quadTo$(-$dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$ + $y$$173$$, -$dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$173$$) + $dvt$$8$$.$PathUtils$.$quadTo$(-$DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + 
    $y$$173$$, -$DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $y$$173$$) + $dvt$$8$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$ - $DvtControlPanelEvent$$, $y$$173$$) + $dvt$$8$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$ - $DvtControlPanelEvent$$, $y$$173$$ - $DropdownItemSprite$$);
    $y$$173$$ -= $DropdownItemSprite$$;
    $cmds$$24$$ += $dvt$$8$$.$PathUtils$.$quadTo$(-$DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -$dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$173$$, -$dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -$dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$173$$) + $dvt$$8$$.$PathUtils$.$quadTo$(-$dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -$DvtControlPanelEvent$$ + 
    $y$$173$$, $DvtControlPanelDefaults$$, -$DvtControlPanelEvent$$ + $y$$173$$) + $dvt$$8$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$, -$DvtControlPanelEvent$$ + $y$$173$$) + $dvt$$8$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$ + $DvtPanControl$$, -$DvtControlPanelEvent$$ + $y$$173$$);
    $DvtControlPanelDefaults$$ += $DvtPanControl$$;
    $cmds$$24$$ += $dvt$$8$$.$PathUtils$.$quadTo$($dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -$DvtControlPanelEvent$$ + $y$$173$$, $dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -$dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$173$$) + $dvt$$8$$.$PathUtils$.$quadTo$($DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -$dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + 
    $y$$173$$, $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $y$$173$$) + $dvt$$8$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$ + $DvtControlPanelEvent$$, $y$$173$$ + $DropdownItemSprite$$) + $dvt$$8$$.$PathUtils$.closePath();
    return new $dvt$$8$$.$Path$($DvtControlPanelEventManager$$, $cmds$$24$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$drawDropdownShape$ = function $$dvt$$8$$$$ButtonLAFUtils$$$drawDropdownShape$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    $DropdownItemSprite$$ = $dvt$$8$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, "radius", 0);
    $DvtControlPanelEvent$$ -= 2 * $DropdownItemSprite$$;
    $DvtPanControl$$ -= $DropdownItemSprite$$;
    var $DvtControlPanelDefaults$$ = $DvtControlPanelEvent$$ + $DropdownItemSprite$$, $y$$174$$ = $DvtPanControl$$, $cmds$$25$$ = $dvt$$8$$.$PathUtils$.moveTo($DvtControlPanelDefaults$$ + $DropdownItemSprite$$, $y$$174$$) + $dvt$$8$$.$PathUtils$.$quadTo$($DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DropdownItemSprite$$ + $y$$174$$, $dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ * 
    $DropdownItemSprite$$ + $y$$174$$) + $dvt$$8$$.$PathUtils$.$quadTo$($dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $DropdownItemSprite$$ + $y$$174$$, $DvtControlPanelDefaults$$, $DropdownItemSprite$$ + $y$$174$$) + $dvt$$8$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$, $DropdownItemSprite$$ + $y$$174$$) + $dvt$$8$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$ - $DvtControlPanelEvent$$, $DropdownItemSprite$$ + $y$$174$$), $DvtControlPanelDefaults$$ = 
    $DvtControlPanelDefaults$$ - $DvtControlPanelEvent$$, $cmds$$25$$ = $cmds$$25$$ + ($dvt$$8$$.$PathUtils$.$quadTo$(-$dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $DropdownItemSprite$$ + $y$$174$$, -$dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $dvt$$8$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DropdownItemSprite$$ + $y$$174$$) + $dvt$$8$$.$PathUtils$.$quadTo$(-$DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $dvt$$8$$.$ButtonLAFUtils$.$TAN_PI_8$ * 
    $DropdownItemSprite$$ + $y$$174$$, -$DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $y$$174$$) + $dvt$$8$$.$PathUtils$.lineTo(-$DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $y$$174$$) + $dvt$$8$$.$PathUtils$.lineTo(-$DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $y$$174$$ - $DvtPanControl$$)), $y$$174$$ = $y$$174$$ - $DvtPanControl$$, $cmds$$25$$ = $cmds$$25$$ + ($dvt$$8$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$ + $DvtControlPanelEvent$$ + $DropdownItemSprite$$, $y$$174$$) + 
    $dvt$$8$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$ + $DvtControlPanelEvent$$ + $DropdownItemSprite$$, $y$$174$$ + $DvtPanControl$$) + $dvt$$8$$.$PathUtils$.closePath());
    return new $dvt$$8$$.$Path$($DvtControlPanelEventManager$$, $cmds$$25$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$_getDimForced$ = function $$dvt$$8$$$$ButtonLAFUtils$$$_getDimForced$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    $DvtControlPanelEvent$$ instanceof $dvt$$8$$.$Button$ && ($DvtControlPanelEvent$$ = $DvtControlPanelEvent$$.$getChildAt$(0));
    return $dvt$$8$$.$DisplayableUtils$.$getDimForced$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
  };
  $dvt$$8$$.$ButtonLAFUtils$.$parseStyle$ = function $$dvt$$8$$$$ButtonLAFUtils$$$parseStyle$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $dvt$$8$$.$ButtonLAFUtils$.$DEFAULT_FILL_TYPE$, $DropdownItemSprite$$ = $dvt$$8$$.$ButtonLAFUtils$.$DEFAULT_BORDER_COLOR$, $DvtControlPanelDefaults$$ = $dvt$$8$$.$ButtonLAFUtils$.$DEFAULT_MID_COLOR$, $background$$17$$;
    $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$.$getStyle$($dvt$$8$$.$CSSStyle$.$FILL_TYPE$) && ($DvtPanControl$$ = $DvtControlPanelEvent$$.$getStyle$($dvt$$8$$.$CSSStyle$.$FILL_TYPE$)), $DvtControlPanelEvent$$.$getStyle$($dvt$$8$$.$CSSStyle$.$BORDER_COLOR$) && ($DropdownItemSprite$$ = $DvtControlPanelEvent$$.$getStyle$($dvt$$8$$.$CSSStyle$.$BORDER_COLOR$)), $DvtControlPanelEvent$$.$getStyle$($dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$) && ($DvtControlPanelDefaults$$ = $DvtControlPanelEvent$$.$getStyle$($dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$)), 
    $DvtControlPanelEvent$$.$getStyle$($dvt$$8$$.$CSSStyle$.$BACKGROUND$) && ($background$$17$$ = $DvtControlPanelEvent$$.$getStyle$($dvt$$8$$.$CSSStyle$.$BACKGROUND$)));
    var $DropdownItemSprite$$ = new $dvt$$8$$.$SolidStroke$($DropdownItemSprite$$), $fill$$59_fill_colors$$13_midColor$$11$$;
    if ("solid" == $DvtPanControl$$) {
      $fill$$59_fill_colors$$13_midColor$$11$$ = new $dvt$$8$$.$SolidFill$($DvtControlPanelDefaults$$);
    } else {
      var $endColor$$16_fill_alphas$$13$$, $fill_ratios$$13$$, $degree$$3$$;
      if ($background$$17$$ && 0 <= $background$$17$$.indexOf("linear-gradient")) {
        if ($DvtPanControl$$ = $dvt$$8$$.$GradientParser$.$parseCSSGradient$($background$$17$$)) {
          $degree$$3$$ = $DvtPanControl$$.$getAngle$(), $fill$$59_fill_colors$$13_midColor$$11$$ = $DvtPanControl$$.$_arColors$, $endColor$$16_fill_alphas$$13$$ = $DvtPanControl$$.$_arAlphas$, $fill_ratios$$13$$ = $DvtPanControl$$.$_arRatios$;
        }
      } else {
        $fill$$59_fill_colors$$13_midColor$$11$$ = $DvtControlPanelDefaults$$, $endColor$$16_fill_alphas$$13$$ = $dvt$$8$$.$ButtonLAFUtils$.$DEFAULT_END_COLOR$, $fill$$59_fill_colors$$13_midColor$$11$$ != $dvt$$8$$.$ButtonLAFUtils$.$DEFAULT_MID_COLOR$ && ($endColor$$16_fill_alphas$$13$$ = $dvt$$8$$.$ColorUtils$.$inferColor$($dvt$$8$$.$ButtonLAFUtils$.$DEFAULT_MID_COLOR$, $dvt$$8$$.$ButtonLAFUtils$.$DEFAULT_END_COLOR$, $fill$$59_fill_colors$$13_midColor$$11$$)), $fill$$59_fill_colors$$13_midColor$$11$$ = 
        [$fill$$59_fill_colors$$13_midColor$$11$$, $endColor$$16_fill_alphas$$13$$], $endColor$$16_fill_alphas$$13$$ = [.6, .8], $fill_ratios$$13$$ = [0, 1], $degree$$3$$ = -270;
      }
      $fill$$59_fill_colors$$13_midColor$$11$$ = new $dvt$$8$$.$LinearGradientFill$($degree$$3$$, $fill$$59_fill_colors$$13_midColor$$11$$, $endColor$$16_fill_alphas$$13$$, $fill_ratios$$13$$);
    }
    $DvtControlPanelEventManager$$.$setFill$($fill$$59_fill_colors$$13_midColor$$11$$);
    $DvtControlPanelEventManager$$.$setStroke$($DropdownItemSprite$$);
  };
  $dvt$$8$$.$exportProperty$($dvt$$8$$.$PanZoomComponent$.prototype, "render", $dvt$$8$$.$PanZoomComponent$.prototype.$render$);
})(dvt);
