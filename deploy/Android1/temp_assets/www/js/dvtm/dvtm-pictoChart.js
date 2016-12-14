/* Copyright (c) 2013, 2014, Oracle and/or its affiliates. All rights reserved. */
/*
 *    nBox/NBoxDefaults.js
 */
(function() {

  adf.mf.internal.dvt.DvtmObject.createPackage('adf.mf.internal.dvt.pictoChart');

  adf.mf.internal.dvt.pictoChart.DefaultPictoChartStyle =
    {
      'styleDefaults':
        {
          // default color palette
          'color': ["#267db3", "#68c182", "#fad55c", "#ed6647", "#8561c8", "#6ddbdb", "#ffb54d", "#e371b2", "#47bdef", "#a2bf39", "#a75dba", "#f7f37b"],
          // default shapes
          'shape': ['circle', 'square', 'plus', 'diamond', 'triangleUp', 'triangleDown', 'human']
        }
    };
})();
/* Copyright (c) 2013, 2014, Oracle and/or its affiliates. All rights reserved. */
/*
 *    pictoChart/PictoChartItemRenderer.js
 */
(function() {

  var AttributeProcessor = adf.mf.internal.dvt.AttributeProcessor;
  var AttributeGroupManager = adf.mf.internal.dvt.common.attributeGroup.AttributeGroupManager;


  var PictoChartItemRenderer = function()
  {};

  adf.mf.internal.dvt.DvtmObject.createSubclass(PictoChartItemRenderer, 'adf.mf.internal.dvt.BaseRenderer', 'adf.mf.internal.dvt.pictoChart.PictoChartItemRenderer');


  PictoChartItemRenderer.prototype.ProcessAttributes = function (options, amxNode, context)
  {
    var item = {
      'id': amxNode.getId()
    };

    options.items.push(item);

    // process marker attributes
    var attributeGroupsNodes = amxNode.getChildren();
    for (var i = 0; i < attributeGroupsNodes.length; i++)
    {
      var attrGroupsNode = attributeGroupsNodes[i];

      if (attrGroupsNode.isAttributeDefined('rendered') && adf.mf.api.amx.isValueFalse(attrGroupsNode.getAttribute('rendered')))
        continue;// skip unrendered nodes

      AttributeGroupManager.processAttributeGroup(attrGroupsNode, context.amxNode, context);
    }

    // add the marker to the model
    AttributeGroupManager.registerDataItem(context, item, null);    
    
    return PictoChartItemRenderer.superclass.ProcessAttributes.call(this, item, amxNode, context);
  };

  PictoChartItemRenderer.prototype.GetAttributesDefinition = function ()
  {
    var attrs = PictoChartItemRenderer.superclass.GetAttributesDefinition.call(this);
    attrs['borderColor'] = {'path' : 'borderColor', 'type' : AttributeProcessor['TEXT']};
    attrs['borderWidth'] = {'path' : 'borderWidth', 'type' : AttributeProcessor['TEXT']};
    attrs['color'] = {'path' : 'color', 'type' : AttributeProcessor['TEXT']};
    attrs['columnSpan'] = {'path' : 'columnSpan', 'type' : AttributeProcessor['INTEGER']};
    attrs['count'] = {'path' : 'count', 'type' : AttributeProcessor['FLOAT']};
    attrs['drilling'] = {'path' : 'drilling', 'type' : AttributeProcessor['TEXT']};
    attrs['name'] = {'path' : 'name', 'type' : AttributeProcessor['TEXT']};
    attrs['rowSpan'] = {'path' : 'rowSpan', 'type' : AttributeProcessor['INTEGER']};
    attrs['shape'] = {'path' : 'shape', 'type' : AttributeProcessor['TEXT']};
    attrs['shortDesc'] = {'path' : 'shortDesc', 'type' : AttributeProcessor['TEXT']};
    attrs['source'] = {'path' : 'source', 'type' : RELATIVE_PATH};
    attrs['sourceHover'] = {'path' : 'sourceHover', 'type' : RELATIVE_PATH};
    attrs['sourceHoverSelected'] = {'path' : 'sourceHoverSelected', 'type' : RELATIVE_PATH};
    attrs['sourceSelected'] = {'path' : 'sourceSelected', 'type' : RELATIVE_PATH};
    return attrs;
  };
  
  var RELATIVE_PATH = function (value)
  {
    if(value !== null)
    {
      return adf.mf.api.amx.buildRelativePath('' + value);
    } 
    return undefined;
  };
  
})();
/* Copyright (c) 2013, 2014, Oracle and/or its affiliates. All rights reserved. */
/*
 *    nBox/PictoChartRenderer.js
 */
(function ()
{
  var AttributeProcessor = adf.mf.internal.dvt.AttributeProcessor;
  var StyleProcessor = adf.mf.internal.dvt.StyleProcessor;
  var AttributeGroupManager = adf.mf.internal.dvt.common.attributeGroup.AttributeGroupManager;

  /**
   * Chart Drill event
   * @param {Number} id
   * @param {Number} rowkey
   * @param {String} series
   * @param {String} group
   */
  ChartDrillEvent = function(id, rowkey, series, group)
  {
    this.id = id;
    this.rowkey = rowkey;
    this.series = series;
    this.group = group;
    this[".type"] = "oracle.adfmf.amx.event.ChartDrillEvent";
  };

  var PictoChartRenderer = function ()
  {};

  adf.mf.internal.dvt.DvtmObject.createSubclass(PictoChartRenderer, 'adf.mf.internal.dvt.DataStampRenderer', 'adf.mf.internal.dvt.pictoChart.PictoChartRenderer');

  PictoChartRenderer.prototype.GetDefaultStyles = function (amxNode)
  {
    return adf.mf.internal.dvt.pictoChart.DefaultPictoChartStyle;
  };
  
  /**
   * @param facetName name of the facet for which the map of the renderers is requested
   * @return map of the child renderers for given facetName
   */
  PictoChartRenderer.prototype.GetChildRenderers = function (facetName)
  {
    if (this._renderers === undefined)
    {
      this._renderers = 
      {
        'pictoChartItem' : 
        {
          'renderer' : new adf.mf.internal.dvt.pictoChart.PictoChartItemRenderer()
        }
      };
    }

    return this._renderers;
  };

  PictoChartRenderer.prototype.GetStampedFacetNames = function()
  {
    return [null];
  };

  PictoChartRenderer.prototype.GetFacetNames = function()
  {
    return [];
  };

  PictoChartRenderer.prototype.ProcessAttributes = function (options, amxNode, context)
  {
    var changed = PictoChartRenderer.superclass.ProcessAttributes.call(this, options, amxNode, context);
    
    // HACK 
    // there is lazy evaluation of child nodes. 
    if (amxNode.isAttributeDefined('selectedRowKeys') /*&& ((typeof options['selection'] == undefined) || (!options['selection']))*/)
    {
      var _selection = [];
      var selection = AttributeProcessor['ROWKEYARRAY'](amxNode.getAttribute('selectedRowKeys'));
      for (i = 0;i < selection.length;i++)
      {
        var dataForRowKey = amxNode.getChildren(null, selection[i]);
        if ((Object.prototype.toString.call(dataForRowKey) === '[object Array]') && (dataForRowKey.length > 0))
        {
          _selection.push(dataForRowKey[0].getId());
        }
      }
      options['selection'] = _selection;
      amxNode.setAttributeResolvedValue("_selection", _selection);
    }

    return changed;
  };
  
  PictoChartRenderer.prototype.GetAttributesDefinition = function ()
  {
    var attrs = PictoChartRenderer.superclass.GetAttributesDefinition.call(this);
    attrs['animationDuration'] = {'path' : 'animationDuration', 'type' : AttributeProcessor['INTEGER']};
    attrs['animationOnDataChange'] = {'path' : 'animationOnDataChange', 'type' : AttributeProcessor['TEXT']};
    attrs['animationOnDisplay'] = {'path' : 'animationOnDisplay', 'type' : AttributeProcessor['TEXT']};
    attrs['columnCount'] = {'path' : 'columnCount', 'type' : AttributeProcessor['INTEGER']};
    attrs['columnWidth'] = {'path' : 'columnWidth', 'type' : AttributeProcessor['INTEGER']};
    attrs['dataSelection'] = {'path' : 'selectionMode', 'type' : AttributeProcessor['TEXT']};
    attrs['drilling'] = {'path' : 'drilling', 'type' : AttributeProcessor['TEXT']};
    attrs['emptyText'] = {'path' : 'translations/labelNoData', 'type' : AttributeProcessor['TEXT']};//PENDING
    attrs['layout'] = {'path' : 'layout', 'type' : AttributeProcessor['TEXT']};
    attrs['layoutOrigin'] = {'path' : 'layoutOrigin', 'type' : AttributeProcessor['TEXT']};
    attrs['rolloverBehavior'] = {'path' : 'hoverBehavior', 'type' : AttributeProcessor['TEXT']};//PENDING
    attrs['rolloverBehaviorDelay'] = {'path' : 'hoverBehaviorDelay', 'type' : AttributeProcessor['INTEGER']};//PENDING
    attrs['rowCount'] = {'path' : 'rowCount', 'type' : AttributeProcessor['INTEGER']};
    attrs['rowHeight'] = {'path' : 'rowHeight', 'type' : AttributeProcessor['INTEGER']};
    attrs['shortDesc'] = {'path' : 'shortDesc', 'type' : AttributeProcessor['TEXT']};//PENDING
    return attrs;
  };

  PictoChartRenderer.prototype.InitComponentOptions = function (amxNode, options)
  {
    PictoChartRenderer.superclass.InitComponentOptions.call(this, amxNode, options);
    options['items'] = [];
    AttributeGroupManager.reset(amxNode);
  };
  
  PictoChartRenderer.prototype.ProcessStampedChildren = function (options, amxNode, context, facetName)
  {
    AttributeGroupManager.init(context);
    var changed = PictoChartRenderer.superclass.ProcessStampedChildren.call(this, options, amxNode, context, facetName);
    var config = this.CreateAttributeGroupConfig();
    
    amxNode['_defaultColors'] = adf.mf.internal.dvt.pictoChart.DefaultPictoChartStyle.styleDefaults.color;
    amxNode['_defaultShapes'] = adf.mf.internal.dvt.pictoChart.DefaultPictoChartStyle.styleDefaults.shapes;
    AttributeGroupManager.applyAttributeGroups(amxNode, config, context);
    return changed;
  };

  PictoChartRenderer.prototype.CreateAttributeGroupConfig = function ()
  {
    var config = new adf.mf.internal.dvt.common.attributeGroup.AttributeGroupConfig();
    config.setUpdateCategoriesCallback(function(attrGrp, dataItem, valueIndex, exceptionRules) {
      // do nothing
    });    
    return config;
  };

  PictoChartRenderer.prototype.ProcessEvent = function(amxNode, event, component)
  {
    PictoChartRenderer.superclass.ProcessEvent.call(this, amxNode, event, component);
    var that = this;

    var type = event['type'];
    if (type === 'selection')
    {
      // selectionChange event support
      var selection = event['selection'];;
      var map = {};
      if (selection !== undefined)
      {
        for (var i = 0; i < selection.length; i++) {
          selection [i] = selection [i];
          var node = that.findAmxNode(amxNode, selection [i]);
          var stampedKey = null;
          if (node)
            stampedKey = node.getStampKey();
          if (stampedKey)
            selection [i] = stampedKey;
          map [selection [i]] = true;
        }

        var currentSelection = amxNode.getAttribute("_selection") || [];
        var removed = [];
        for (var i = 0; i < currentSelection.length; i++)
          if (!map [currentSelection [i]])
            removed.push (currentSelection [i]);

        var se = new adf.mf.api.amx.SelectionEvent(removed, selection);
        adf.mf.api.amx.processAmxEvent(amxNode, 'selection', undefined, undefined, se);
        amxNode.setAttributeResolvedValue("_selection", selection);
      }
    }
    else if (type === 'drill')
    {
      var id = event['id'];
      var rowKey = null;
      if (id)
      {
        var stampedNode = that.findAmxNode(amxNode, id);
        if (stampedNode)
        {
          rowKey = stampedNode.getStampKey();
        }
      }
      var drillEvent = new ChartDrillEvent(id, rowKey);
      adf.mf.api.amx.processAmxEvent(amxNode, 'drill', undefined, undefined, drillEvent);
    }
  };
  
  PictoChartRenderer.prototype.GetToolkitClass = function()
  {
    return adf.mf.internal.dvt.util.JSONPath('adf.mf.internal.dvt.toolkit.PictoChart');
  };

  PictoChartRenderer.prototype.RenderComponent = function (instance, width, height, amxNode)
  {
    var data = null;
    if (this.IsOptionsDirty(amxNode))
    {
      data = this.GetDataObject(amxNode);
    }

    instance.render(data, width, height);
  };

  adf.mf.api.amx.TypeHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_DVTM, 'pictoChart', PictoChartRenderer);
})();
