/* Copyright (c) 2013, 2014, Oracle and/or its affiliates. All rights reserved. */
/*
 *    timeline/TimeAxisRenderer.js
 */
(function()
{
  var AttributeProcessor = adf.mf.internal.dvt.AttributeProcessor;
  
  var TimeAxisRenderer = function()
  {};
  
  adf.mf.internal.dvt.DvtmObject.createSubclass(TimeAxisRenderer, 'adf.mf.internal.dvt.BaseComponentRenderer', 'adf.mf.internal.dvt.timeline.TimeAxisRenderer');
 
  TimeAxisRenderer.prototype.GetAttributesDefinition = function ()
  {
    var attrs = TimeAxisRenderer.superclass.GetAttributesDefinition.call(this);
        
    attrs['inlineStyle'] = {'path' :  'style', 'type' : AttributeProcessor['TEXT']};
    attrs['styleClass'] = {'path' : 'styleClass', 'type' : AttributeProcessor['TEXT']};
    attrs['scale'] = {'path' : 'scale', 'type' : AttributeProcessor['TEXT']};
    
    return attrs;
  };
  
  TimeAxisRenderer.prototype.ProcessAttributes = function (options, axisNode, context)
  {
    var axisOptions = options['minorAxis'];
    if (axisNode.isAttributeDefined('type'))
    {
      var type = axisNode.getAttribute('type');
      if (type === 'major')
      {
        axisOptions = options['majorAxis'];
      }
      else if (type === 'minor')
      {
        axisOptions = options['minorAxis'];
      }
      else
      {
        // invalid axis type, do nothing
        return false;
      }
    }
    
    var changed = TimeAxisRenderer.superclass.ProcessAttributes.call(this, axisOptions, axisNode, context);
    
    var converter = axisNode.getConverter();
    if (converter)
    {
      changed = true;
      //if(!options[this._type]) options[this._type] = {};
      axisOptions['converter'] = converter;     
    }
    
    return changed;
  }
  
})();
/* Copyright (c) 2013, 2014, Oracle and/or its affiliates. All rights reserved. */
/*
 *    timeline/TimelineDefaults.js
 */
(function(){
  
  adf.mf.internal.dvt.DvtmObject.createPackage('adf.mf.internal.dvt.timeline');
  
  adf.mf.internal.dvt.timeline.DefaultTimelineStyle = 
  {
    // text to be displayed, if no data is provided
    'emptyText' : null,

    // default style values
    'styleDefaults': 
    {
      'timelineSeries': 
      {
         'colors': ["#267db3", "#68c182", "#fad55c", "#ed6647", "#8561c8", "#6ddbdb", "#ffb54d", "#e371b2", "#47bdef", "#a2bf39", "#a75dba", "#f7f37b"]
      }
   },
   '_resources' : 
   { 
     'scrollLeft' :   'css/images/timeline/scroll_l.svg', 
     'scrollRight' :  'css/images/timeline/scroll_r.svg', 
     'scrollUp' :     'css/images/timeline/scroll_t.svg', 
     'scrollDown' :   'css/images/timeline/scroll_d.svg',
     'zoomIn' :       'css/images/timeline/control-magnify-ena.png',
     'zoomIn_a' :     'css/images/timeline/control-magnify-dwn.png',
     'zoomOut' :      'css/images/timeline/control-deMagnify-ena.png',
     'zoomOut_a' :    'css/images/timeline/control-deMagnify-dwn.png',
     'overviewHandleHor' :  'css/images/timeline/drag_horizontal.png',
     'overviewHandleVert' : 'css/images/timeline/drag_vertical.png'
   } 
  };  
})();
/* Copyright (c) 2013, 2014, Oracle and/or its affiliates. All rights reserved. */
/*
 *    timeline/TimelineItemRenderer.js
 */
(function()
{
  var AttributeProcessor = adf.mf.internal.dvt.AttributeProcessor;
  var AttributeGroupManager = adf.mf.internal.dvt.common.attributeGroup.AttributeGroupManager;

  var TimelineItemRenderer = function()
  { }

  adf.mf.internal.dvt.DvtmObject.createSubclass(TimelineItemRenderer, 'adf.mf.internal.dvt.BaseRenderer', 'adf.mf.internal.dvt.timeline.TimelineItemRenderer');
 
  TimelineItemRenderer.prototype.GetAttributesDefinition = function ()
  {
    var attrs = TimelineItemRenderer.superclass.GetAttributesDefinition.call(this);
    attrs['description'] = {'path' : 'description', 'type' : AttributeProcessor['TEXT']};
    attrs['endTime'] = {'path' : 'end', 'type' : AttributeProcessor['DATETIME']};
    attrs['inlineStyle'] = {'path' :  'style', 'type' : AttributeProcessor['TEXT']};
    attrs['startTime'] = {'path' : 'start', 'type' : AttributeProcessor['DATETIME']};
    attrs['styleClass'] = {'path' : 'styleClass', 'type' : AttributeProcessor['TEXT']};
    attrs['title'] = {'path' : 'title', 'type' : AttributeProcessor['TEXT']};
    attrs['durationFillColor'] = {'path' : 'durationFillColor', 'type' : AttributeProcessor['TEXT']};
    return attrs;
  };

  TimelineItemRenderer.prototype.ProcessAttributes = function (options, timelineItemNode, context)
  {
    var series = context["series"];
    var amxNode = context['amxNode'];

    var timelineItem = {};
    timelineItem['id'] = timelineItemNode.getId();
    timelineItem['_rowKey'] = context['_rowKey'];
    
    if(context["selectedRowKeys"] && context["selectedRowKeys"].indexOf(context['_rowKey']) > -1)
    {
      if(!series["selectedItems"])
      {
        series["selectedItems"] = [];
      }
      series["selectedItems"].push(timelineItem['id']);
    }
            
    if (timelineItemNode.isAttributeDefined('action'))
    {
      timelineItem['action'] = context['_rowKey'];
    }
    else
    {
      var actionTags;
      var firesAction = false;
      // should fire action, if there are any 'setPropertyListener' or 'showPopupBehavior' child tags
      actionTags = timelineItemNode.getTag().findTags(adf.mf.internal.dvt.AMX_NAMESPACE, 'setPropertyListener');
      if (actionTags.length > 0)
        firesAction = true;
      else
      {
        actionTags = timelineItemNode.getTag().findTags(adf.mf.internal.dvt.AMX_NAMESPACE, 'showPopupBehavior');
        if (actionTags.length > 0)
          firesAction = true;
      }
      if (firesAction)
      {
        // need to set 'action' to some value to make the event fire
        timelineItem['action'] = context['_rowKey'];
      }
    }

    TimelineItemRenderer.superclass.ProcessAttributes.call(this, timelineItem, timelineItemNode, context);

    if (timelineItem['start'] === timelineItem['end'])
    {
      delete timelineItem['end'];
    }

    series['items'].push(timelineItem);

    var attributeGroupsNodes = timelineItemNode.getChildren();
    var iter = adf.mf.api.amx.createIterator(attributeGroupsNodes);
    while (iter.hasNext())
    {
      var attrGroupsNode = iter.next();

      if (attrGroupsNode.getTag().getName() !== 'attributeGroups' || (attrGroupsNode.isAttributeDefined('rendered') && adf.mf.api.amx.isValueFalse(attrGroupsNode.getAttribute('rendered'))))
        continue;         // skip non attr groups and unrendered attr groups

      AttributeGroupManager.processAttributeGroup(attrGroupsNode, amxNode, context);
    }

    AttributeGroupManager.registerDataItem(context, timelineItem, null);

    return true;
  };
  
    
})();
/* Copyright (c) 2013, 2014, Oracle and/or its affiliates. All rights reserved. */
/*
 *    timeline/TimelineRenderer.js
 */
(function()
{    
  var AttributeProcessor = adf.mf.internal.dvt.AttributeProcessor;
  var StyleProcessor = adf.mf.internal.dvt.StyleProcessor;
  var AttributeGroupManager = adf.mf.internal.dvt.common.attributeGroup.AttributeGroupManager;
  var OverviewRenderer = adf.mf.internal.dvt.common.overview.OverviewRenderer;

  var TimelineRenderer = function()
  { }

  adf.mf.internal.dvt.DvtmObject.createSubclass(TimelineRenderer, 'adf.mf.internal.dvt.BaseComponentRenderer', 'adf.mf.internal.dvt.timeline.TimelineRenderer');
  
  TimelineRenderer.prototype.GetStyleClassesDefinition = function ()
  {
    var styleClasses = TimelineRenderer.superclass.GetStyleClassesDefinition.call(this);

    // timeline time axis styles
    styleClasses['timeAxis-backgroundColor'] = {'path' : 'styleDefaults/timeAxis/backgroundColor', 'type' : StyleProcessor['COLOR']};
    styleClasses['timeAxis-borderColor'] = {'path' : 'styleDefaults/timeAxis/borderColor', 'type' : StyleProcessor['COLOR']};
    styleClasses['timeAxis-borderWidth'] = {'path' : 'styleDefaults/timeAxis/borderWidth', 'type' : StyleProcessor['WIDTH']};
    styleClasses['timeAxis-labelStyle'] = {'path' : 'styleDefaults/timeAxis/labelStyle', 'type' : StyleProcessor['CSS_TEXT'], 'ignoreEmpty' : true};
    styleClasses['timeAxis-separatorColor'] = {'path' : 'styleDefaults/timeAxis/separatorColor', 'type' : StyleProcessor['COLOR']};

    // timeline item styles
    styleClasses['timelineItem-backgroundColor'] =  {'path' : 'styleDefaults/timelineItem/backgroundColor', 'type' : StyleProcessor['COLOR']};
    styleClasses['timelineItem-selectedBackgroundColor'] =  {'path' : 'styleDefaults/timelineItem/selectedBackgroundColor', 'type' : StyleProcessor['COLOR']};
    styleClasses['timelineItem-borderColor'] =  {'path' : 'styleDefaults/timelineItem/borderColor', 'type' : StyleProcessor['COLOR']};
    styleClasses['timelineItem-selectedBorderColor'] =  {'path' : 'styleDefaults/timelineItem/selectedBorderColor', 'type' : StyleProcessor['COLOR']};
    styleClasses['timelineItem-borderWidth'] =  {'path' : 'styleDefaults/timelineItem/borderWidth', 'type' : StyleProcessor['WIDTH']};
    styleClasses['timelineItem-selectedBorderWidth'] =  {'path' : 'styleDefaults/timelineItem/selectedBorderWidth', 'type' : StyleProcessor['WIDTH']};
    styleClasses['timelineItem-feelerColor'] =  {'path' : 'styleDefaults/timelineItem/feelerColor', 'type' : StyleProcessor['COLOR']};
    styleClasses['timelineItem-selectedFeelerColor'] =  {'path' : 'styleDefaults/timelineItem/selectedFeelerColor', 'type' : StyleProcessor['COLOR']};
    styleClasses['timelineItem-feelerWidth'] =  {'path' : 'styleDefaults/timelineItem/feelerWidth', 'type' : StyleProcessor['WIDTH']};
    styleClasses['timelineItem-selectedFeelerWidth'] =  {'path' : 'styleDefaults/timelineItem/selectedFeelerWidth', 'type' : StyleProcessor['WIDTH']};
    styleClasses['timelineItem-descriptionStyle'] = {'path' : 'styleDefaults/timelineItem/descriptionStyle', 'type' : StyleProcessor['CSS_TEXT'], 'ignoreEmpty' : true};
    styleClasses['timelineItem-titleStyle'] = {'path' : 'styleDefaults/timelineItem/titleStyle', 'type' : StyleProcessor['CSS_TEXT'], 'ignoreEmpty' : true};
    
    // timeline series styles
    styleClasses['timelineSeries-backgroundColor'] =  {'path' : 'styleDefaults/timelineSeries/backgroundColor', 'type' : StyleProcessor['COLOR']};
    styleClasses['timelineSeries-labelStyle'] = {'path' : 'styleDefaults/timelineSeries/labelStyle', 'type' : StyleProcessor['CSS_TEXT'], 'ignoreEmpty' : true};
    styleClasses['timelineSeries-emptyTextStyle'] = {'path' : 'styleDefaults/timelineSeries/emptyTextStyle', 'type' : StyleProcessor['CSS_TEXT'], 'ignoreEmpty' : true};

    return styleClasses;
  };

  /**
   * @param {String} facetName an optional name of the facet containing the items to be rendered
   * @return object that describes child renderers of the component.
   */
  TimelineRenderer.prototype.GetChildRenderers = function (facetName)
  {
    if(this._renderers === undefined)
    {
      var TimelineSeriesRenderer = adf.mf.internal.dvt.timeline.TimelineSeriesRenderer;
      var TimeAxisRenderer = adf.mf.internal.dvt.timeline.TimeAxisRenderer;
      var OverviewRenderer = adf.mf.internal.dvt.common.overview.OverviewRenderer;
      this._renderers = 
        {
          'overview' : { 'renderer' : new OverviewRenderer(), 'order' : 3, 'maxOccurences' : 1 },
          'timelineSeries' : { 'renderer' : new TimelineSeriesRenderer() },
          'timeAxis' : { 'renderer' : new TimeAxisRenderer() }
        };
    }
    return this._renderers;
  }; 

  TimelineRenderer.prototype.GetAttributesDefinition = function (amxNode)
  {
    var attrs = TimelineRenderer.superclass.GetAttributesDefinition.call(this);

    attrs['id'] = {'path' : 'id', 'type' : AttributeProcessor['TEXT']};
    attrs['inlineStyle'] = {'path' : 'style', 'type' : AttributeProcessor['TEXT']};    
    attrs['itemSelection'] = {'path' : 'selectionMode', 'type' : AttributeProcessor['TEXT']}; 
    attrs['orientation'] = {'path' : 'orientation', 'type' : AttributeProcessor['TEXT']}; 
    attrs['selectionMode'] = {'path' : 'selectionMode', 'type' : AttributeProcessor['TEXT']}; 
    attrs['shortDesc'] = {'path' : 'shortDesc', 'type' : AttributeProcessor['TEXT']};     
    attrs['styleClass'] = {'path' : 'styleClass', 'type' : AttributeProcessor['TEXT']};

    if (!adf.mf.environment.profile.dtMode)
    {
      attrs['endTime'] = {'path' : 'end', 'type' : AttributeProcessor['DATETIME']};  
      attrs['startTime'] = {'path' : 'start', 'type' : AttributeProcessor['DATETIME']}; 
      attrs['viewportEnd'] = {'path' : 'viewportEnd', 'type' : AttributeProcessor['DATETIME']};  
      attrs['viewportStart'] = {'path' : 'viewportStart', 'type' : AttributeProcessor['DATETIME']}; 
    }

    return attrs;
  };

  /**
   * Initialize generic options for all chart component.
   */
  TimelineRenderer.prototype.InitComponentOptions = function (amxNode, options)
  {
    TimelineRenderer.superclass.InitComponentOptions.call(this, amxNode, options);

    options["type"] = "timeline";
    options['series'] = [];
    options['minorAxis'] = {};
    options['majorAxis'] = {};

    if (adf.mf.environment.profile.dtMode)
    {
      var definition = adf.mf.internal.dvt.ComponentDefinition.getComponentDefinition(amxNode.getTag().getName());
      var dtModeData = definition.getDTModeData();
      for(var prop in dtModeData)
      {
        options[prop] = dtModeData[prop];  
      }
      
      var children = amxNode.getChildren();
      var containsSeries = false;
      for(var i=0; i < children.length; i++) 
      {
        if(children[i].getTag().getName() === 'timelineSeries') {
          containsSeries = true;
          break;
        }
      }
      if(!containsSeries)
      {
        // add series
        definition = adf.mf.internal.dvt.ComponentDefinition.getComponentDefinition('timelineSeries');
        dtModeData = definition.getDTModeData();
        
        var series = {};
        series['id'] = 'timelineSeries' + Math.random();
        series['items'] = dtModeData['items0'];
        series['label'] = 'Label 0';
        options['series'][0] = series;
        
        series = {};
        series['id'] = 'timelineSeries' + Math.random();
        series['items'] = dtModeData['items1'];
        series['label'] = 'Label 1';
        options['series'][1] = series;
      }
    }
    
    amxNode["_seriesOrder"] = [];

    amxNode['_stylesResolved'] = false;
    
    AttributeGroupManager.reset(amxNode);
  };

  TimelineRenderer.prototype.GetCustomStyleProperty = function (amxNode)
  {
    return 'CustomTimelineStyle';
  };

  TimelineRenderer.prototype.GetDefaultStyles = function (amxNode)
  {
    return adf.mf.internal.dvt.timeline.DefaultTimelineStyle;
  };

  TimelineRenderer.prototype.MergeComponentOptions = function(amxNode, options)
  {
    options = TimelineRenderer.superclass.MergeComponentOptions.call(this, amxNode, options);

    // extract default colors from styleDefaults that will be used when attribute groups are defined
    var styleDefaults = options['styleDefaults'];
    if (styleDefaults)
    {
      if (styleDefaults['timelineSeries'] && styleDefaults['timelineSeries']['colors'])
      {
        amxNode['_durationBarFillColor'] = styleDefaults['timelineSeries']['colors'];
      }
    }
    return options;
  };

  TimelineRenderer.prototype.ProcessAttributes = function (options, amxNode, context)
  {
    var changed = TimelineRenderer.superclass.ProcessAttributes.call(this, options, amxNode, context);

    var selection = amxNode.getAttribute('_selection');
    if (selection !== undefined && selection !== null)
    {
      options['selectedItems'] = selection;
    }

    return changed;
  };

  TimelineRenderer.prototype.ProcessEvent = function(amxNode, event, component)
  {
    TimelineRenderer.superclass.ProcessEvent.call(this, amxNode, event, component);
    var renderer = this;

    var clientId, itemNode;
    var _selection = [];

    if (event['type'] === 'selection')
    {
      // check if anything is selected
      if (event['selection'] && event['selection'].length > 0)
      {
        // find the timelineSeriesNode to fire on
        clientId = event['selection'][0];
        itemNode = renderer.findAmxNode(amxNode, clientId);
        if (itemNode)
        {
          _selection.push(itemNode.getStampKey());
        }
        itemNode = itemNode ? itemNode.getParent() : null;
      }
      else
      {
        // empty selection, get the last firing timelineSeries node
        var lastSourceId = amxNode.getAttribute('_lastSelectionSourceId');
        itemNode = renderer.findAmxNode(amxNode, lastSourceId);
      }

      if (itemNode)
      {
        // fire the event
        var userSelection = amxNode.getAttribute('_selection') || [];
        // filter all removed keys
        var removedKeys = renderer.filterArray(userSelection, function(key)
        {
          return _selection.indexOf(key) === -1;
        });

        var se = new adf.mf.api.amx.SelectionEvent(removedKeys, _selection);
        adf.mf.api.amx.processAmxEvent(itemNode, 'selection', undefined, undefined, se, null);
        // store the last selection info
        amxNode.setAttributeResolvedValue('_selection', _selection);
        amxNode.setAttributeResolvedValue('_lastSelectionSourceId', itemNode.getId());
      }
    }
    else if (event['type'] === 'action')
    {
      // action event support
      clientId = event['clientId'];
      itemNode = renderer.findAmxNode(amxNode, clientId);

      if (itemNode)
      {
        // fire ActionEvent and then process the 'action' attribute
        var ae = new adf.mf.api.amx.ActionEvent();
        adf.mf.api.amx.processAmxEvent(itemNode, 'action', undefined, undefined, ae,
          function ()
          {
            var action = itemNode.getAttributeExpression("action", true);
            if (action != null)
            {
              adf.mf.api.amx.doNavigation(action);
            }
          });
      }
    }
  };

  /**
   * Function creates new instance of Timeline
   */
  TimelineRenderer.prototype.GetToolkitClass = function()
  {
    return adf.mf.internal.dvt.util.JSONPath('adf.mf.internal.dvt.toolkit.Timeline');
  };

  /**
   * Function renders instance of the component
   */
  TimelineRenderer.prototype.RenderComponent = function(instance, width, height, amxNode)
  {
    // we need to send data object always because of the bug that prevents only simple resize of the 
    // component
    var data = this.GetDataObject(amxNode);
    var dim = this.AdjustStageDimensions({'width' : width, 'height' : height});
    instance.render(data, dim['width'], dim['height']);
  };

  // register them to amx layer
  adf.mf.api.amx.TypeHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_DVTM, 'timeline', TimelineRenderer); 
})();
/* Copyright (c) 2013, 2014, Oracle and/or its affiliates. All rights reserved. */
/*
 *    timeline/TimelineSeriesRenderer.js
 */
(function()
{
  var AttributeProcessor = adf.mf.internal.dvt.AttributeProcessor;
  var StyleProcessor = adf.mf.internal.dvt.StyleProcessor;
  var AttributeGroupManager = adf.mf.internal.dvt.common.attributeGroup.AttributeGroupManager;

  /**
   * Timeline renderer
   */
  var TimelineSeriesRenderer = function ()
  {};

  adf.mf.internal.dvt.DvtmObject.createSubclass(TimelineSeriesRenderer, 'adf.mf.internal.dvt.DataStampRenderer', 'adf.mf.internal.dvt.timeline.TimelineSeriesRenderer');

  TimelineSeriesRenderer.prototype.GetFacetNames = function()
  {
    return [];
  };

  /**
   * @param {String} facetName an optional name of the facet containing the items to be rendered
   * @return object that describes child renderers of the component.
   */
  TimelineSeriesRenderer.prototype.GetChildRenderers = function (facetName)
  {
    if (this._renderers === undefined)
    {
      this._renderers = 
      {
        'timelineItem' : { 'renderer' : new adf.mf.internal.dvt.timeline.TimelineItemRenderer(), 'order' : 1}
      };
    }

    return this._renderers;
  };

  TimelineSeriesRenderer.prototype.GetAttributesDefinition = function ()
  {
    var attrs = TimelineSeriesRenderer.superclass.GetAttributesDefinition.call(this);

    attrs['emptyText'] = {'path' : 'emptyText', 'type' : AttributeProcessor['TEXT']};
    attrs['inlineStyle'] = {'path' : 'style', 'type' : AttributeProcessor['TEXT']};
    attrs['label'] = {'path' : 'label', 'type' : AttributeProcessor['TEXT']};
    attrs['styleClass'] = {'path' : 'styleClass', 'type' : AttributeProcessor['TEXT']};

    return attrs;
  };

  TimelineSeriesRenderer.prototype.updateTimelineNode = function (seriesAmxNode)
  {
    // update series order
    var timelineNode = seriesAmxNode.getParent();
    var seriesId = seriesAmxNode.getId();
    if (timelineNode["_seriesOrder"].indexOf(seriesId) == -1)
    {
      timelineNode["_seriesOrder"].push(seriesId);
    }
  };

  TimelineSeriesRenderer.prototype.ProcessAttributes = function (options, seriesAmxNode, context)
  {
    this.updateTimelineNode(seriesAmxNode);

    var timelineAmxNode = seriesAmxNode.getParent();
    var seriesId = seriesAmxNode.getId();

    var series = {};

    series['id'] = seriesId;
    series['items'] = [];

    context['series'] = series;
    TimelineSeriesRenderer.superclass.ProcessAttributes.call(this, series, seriesAmxNode, context);

    // set either processed series or null (when rendered equals false)
    // when dual series is null do not add it to the array
    var seriesIndex = timelineAmxNode["_seriesOrder"].indexOf(seriesId);
    if(!(seriesIndex === 1 && series === null))
    {
      options['series'][seriesIndex] = series;
    }

    return true;
  };

  /**
   * Check if renderer is running in dtmode. If so then load only dummy data. In other case leave processing on the
   * parent.
   */
  TimelineSeriesRenderer.prototype.ProcessChildren = function (options, seriesAmxNode, context)
  {
    if (adf.mf.environment.profile.dtMode)
    {
      var definition = adf.mf.internal.dvt.ComponentDefinition.getComponentDefinition(seriesAmxNode.getTag().getName());
      var dtModeData = definition.getDTModeData();

      var series = {};
      series['id'] = seriesAmxNode.getId();

      var timelineAmxNode = seriesAmxNode.getParent();
      var seriesIndex = timelineAmxNode["_seriesOrder"].indexOf(seriesAmxNode.getId());
      if(!(seriesIndex == 1 && series === null))
      {
        series['items'] = dtModeData['items'+seriesIndex];
        series['label'] = ('Label '+ seriesIndex);

        options['series'][seriesIndex] = series;
      }

      return true;
    }
    else
    {
      AttributeGroupManager.init(context);

      context["selectedRowKeys"] = seriesAmxNode.isAttributeDefined("selectedRowKeys") ? seriesAmxNode.getAttribute("selectedRowKeys") : null;

      var changed = TimelineSeriesRenderer.superclass.ProcessChildren.call(this, options, seriesAmxNode, context);
      
      delete context["selectedRowKeys"];

      var config = new adf.mf.internal.dvt.common.attributeGroup.AttributeGroupConfig();
      config.addTypeToDefaultPaletteMapping('durationFillColor', 'durationBarFillColor');
      config.setUpdateCategoriesCallback(function(attrGrp, dataItem, valueIndex, exceptionRules) {
        // do nothing
      });

      AttributeGroupManager.applyAttributeGroups(seriesAmxNode.getParent(), config, context);

      return changed;
    }
  };

  // register data layer rendered for timeLineSeries tag
  adf.mf.api.amx.TypeHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_DVTM, 'timelineSeries', adf.mf.internal.dvt.common.layer.DataLayerRenderer);
})();
