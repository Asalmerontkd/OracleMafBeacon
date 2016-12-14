/* Copyright (c) 2013, 2015, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* --------------- amx-elDependencies.js ---------------- */
/* ------------------------------------------------------ */

(function()
{
  /**
   * Object to parse the EL dependencies for attributes and maintain a map for what EL
   * dependencies are used by certain attributes. Internal object used by AmxTag and
   * AmxNode.
   * @constructor adf.mf.internal.amx.AmxElDependencies
   * @augments adf.mf.api.AdfObject
   */
  function AmxElDependencies(
    attributes)
  {
    this.Init(attributes);
  }

  adf.mf.internal.amx.AmxElDependencies = AmxElDependencies;
  adf.mf.api.AdfObject.createSubclass(
    adf.mf.internal.amx.AmxElDependencies,
    adf.mf.api.AdfObject,
    "adf.mf.internal.amx.AmxElDependencies");

  /**
   * Initialization method. Using adf.mf.internal.amx.acceptAttributeForElProcessing, this function
   * will gather all the EL dependencies of the attributes so that they may be hooked into the
   * data change event framework.
   *
   * @param {Object.<string, string>} a map of the attribute names as keys and the raw value from
   *                                  the amx or amxf file for the attribute.
   * @protected
   */
  adf.mf.internal.amx.AmxElDependencies.prototype.Init = function(attributes)
  {
    AmxElDependencies.superclass.Init.call(this);

    this._attributeElDependencies = {};
    this._elTokens = [];

    for (var attrName in attributes)
    {
      var attrVal = attributes[attrName];
      if (typeof attrVal == "string" || attrVal instanceof String)
      {
        attrVal = adf.mf.internal.el.parser.parse(attrVal);
      }

      if (adf.mf.internal.amx.acceptAttributeForElProcessing(attrName, attrVal))
      {
        var dependencies = attrVal.getIndexedDependencies();
        for (var i = 0, size = dependencies.length; i < size; ++i)
        {
          var dependency = dependencies[i];
          var attrDependencies = this._attributeElDependencies[dependency];
          if (attrDependencies == null)
          {
            this._attributeElDependencies[dependency] = [ attrName ];
          }
          else
          {
            attrDependencies.push(attrName);
          }

          // Avoid duplicates:
          if (this._elTokens.indexOf(dependency) == -1)
          {
            this._elTokens.push(dependency);
          }
        }
      }
    }
  };

  /**
   * Get the names of the attributes that are affected by a change
   * to the given EL dependency.
   *
   * @param {adf.mf.internal.el.parser.ELExpression} valueExpression the value expression
   *        containing one term
   * @return {Array.<string>} array of attribute names.
   */
  adf.mf.internal.amx.AmxElDependencies.prototype.getAttributesForElDependency = function(
    valueExpression)
  {
    var attrs = this._attributeElDependencies[valueExpression.getIndexedRepresentation()];
    return attrs == null ? [] : attrs;
  };

  /**
   * Get the EL tokens that all the attributes are dependent on.
   *
   * @return {Array.<string>} the EL tokens
   */
  adf.mf.internal.amx.AmxElDependencies.prototype.getElTokens = function()
  {
    return this._elTokens;
  };

})();
