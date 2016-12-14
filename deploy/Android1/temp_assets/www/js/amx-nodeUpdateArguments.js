/* Copyright (c) 2011, 2013, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* ------------ amx-nodeUpdateArguments.js -------------- */
/* ------------------------------------------------------ */

(function()
{
  /**
   * Internal object for the arguments to the markNodeForUpdate function
   * @constructor adf.mf.api.amx.AmxNodeUpdateArguments
   * @augments adf.mf.api.AdfObject
   */
  function AmxNodeUpdateArguments()
  {
    this.Init();
  }

  /**
   * @deprecated
   */
  adf.mf.internal.amx.AmxNodeUpdateArguments = AmxNodeUpdateArguments;

  /*
   * Object for the arguments passed into the adf.mf.api.amx.markNodeForUpdate function.
   */
  adf.mf.api.amx.AmxNodeUpdateArguments = AmxNodeUpdateArguments;

  adf.mf.api.AdfObject.createSubclass(
    adf.mf.api.amx.AmxNodeUpdateArguments,
    adf.mf.api.AdfObject,
    "adf.mf.api.amx.AmxNodeUpdateArguments");

  adf.mf.api.amx.AmxNodeUpdateArguments.prototype.Init = function()
  {
    AmxNodeUpdateArguments.superclass.Init.call(this);
    this._amxNodes = [];
    this._affectedAttributes = {};
    this._collectionChanges = {};
    this._affectedTagInstances = {};
    this._affectedTagInstanceAttributes = {};
    this._canceled = false;
  };

  /**
   * Check if the update has been canceled
   * @return {boolean} true if canceled
   */
  adf.mf.api.amx.AmxNodeUpdateArguments.prototype.isCanceled = function()
  {
    return this._canceled;
  };

  /**
   * Request that the update be canceled. If the update has been queued, calling this function
   * will prevent the update from being executed. This may be used if an asynchronous event has
   * occurred while the update has been queued that makes the update undesirable. If the update
   * has already run or is in progress this function will not have an effect.
   */
  adf.mf.api.amx.AmxNodeUpdateArguments.prototype.cancel = function()
  {
    this._canceled = true;
  };

  /**
   * Get an array of affected AmxNodes
   * @return {Array.<adf.mf.api.amx.AmxNode>} array of nodes
   */
  adf.mf.api.amx.AmxNodeUpdateArguments.prototype.getAffectedNodes = function()
  {
    return this._amxNodes;
  };

  /**
   * Get an object representing the affected attributes for a given AmxNode ID
   * @param {string} amxNodeId the AmxNode ID
   * @return {Object<string, boolean>} an object with the changed
   *         attributes as keys and "true" as the value.
   */
  adf.mf.api.amx.AmxNodeUpdateArguments.prototype.getAffectedAttributes = function(amxNodeId)
  {
    var affected = this._affectedAttributes[amxNodeId];
    return affected == null ? {} : affected;
  };

  /**
   * Get the collection changes for a given AmxNode and property
   * @param {string} amxNodeId the AmxNode ID
   * @return {(Object<string, adf.mf.api.amx.AmxCollectionChange>|undefined)} an object with the
   *         attributes as keys and the collection change objects for the values. May
   *         be undefined if there are no changes for a given AmxNode
   */
  adf.mf.api.amx.AmxNodeUpdateArguments.prototype.getCollectionChanges = function(amxNodeId)
  {
    return this._collectionChanges[amxNodeId];
  };

  /**
   * Mark an attribute of an AmxNode as affected
   * @param {adf.mf.api.amx.AmxNode} amxNode the affected AmxNode
   * @param {string} attributeName the name of the affected attribute
   */
  adf.mf.api.amx.AmxNodeUpdateArguments.prototype.setAffectedAttribute = function(
    amxNode,
    attributeName)
  {
    var amxNodeId = amxNode.getId();
    var affected = this._affectedAttributes[amxNodeId];
    if (affected == null)
    {
      affected = {};
      this._affectedAttributes[amxNodeId] = affected;

      // Mark the node dirty if it hasn't already
      if (this._affectedTagInstances[amxNode] == null)
      {
        this._amxNodes.push(amxNode);
      }
    }

    affected[attributeName] = true;
  };

  /**
   * Set the collection changes for a given AmxNode's attribute
   * @param {string} amxNodeId the AMX node ID
   * @param {string} attributeName the name of the attribute that the collection had changes
   * @param {adf.mf.api.amx.AmxCollectionChange} collectionChanges the changes for the collection
   */
  adf.mf.api.amx.AmxNodeUpdateArguments.prototype.setCollectionChanges = function(
    amxNodeId,
    attributeName,
    collectionChanges)
  {
    var obj = this._collectionChanges[amxNodeId];
    if (obj == null)
    {
      obj = {};
      this._collectionChanges[amxNodeId] = obj;
    }

    obj[attributeName] = collectionChanges;
  };

  /**
   * Internal function to get a list of affected tag instance IDs for a given AMX node.
   *
   * @param {string} amxNodeId the AMX node ID
   * @return {Array.<string>} IDs of the affected tag instances. Will return an empty array if
   *         there are not IDs.
   * @ignore
   */
  adf.mf.api.amx.AmxNodeUpdateArguments.prototype.__getAffectedTagInstanceIds = function(
    amxNodeId)
  {
    var affected = this._affectedTagInstances[amxNodeId];
    return affected == null ? [] : affected;
  };

  /**
   * Internal function to get the affected attribute names for an AMX node and its tag instance ID
   *
   * @param {string} amxNodeId the ID of the affected AMX node
   * @param {string} amxTagId the ID of the affected AMX tag ID
   * @return {Array.<string>} array of affected attributes. Will return an empty array if there are
   *         none.
   * @ignore
   */
  adf.mf.api.amx.AmxNodeUpdateArguments.prototype.__getAffectedAttributesForTagInstance = function(
    amxNodeId,
    amxTagId)
  {
    var key = amxNodeId + "/" + amxTagId;
    var affected = this._affectedTagInstanceAttributes[key];
    return affected == null ? [] : affected;
  };

  /**
   * Internal function to mark a tag's attribute as dirty
   *
   * @param {adf.mf.internal.amx.AmxTagInstance} tagInstance the affected tag instance
   * @param {string} attributeName the name of the affected attribute
   * @ignore
   */
  adf.mf.api.amx.AmxNodeUpdateArguments.prototype.__setAffectedAttributeForTagInstance = function(
    tagInstance,
    attributeName)
  {
    var amxNode = tagInstance.getParentAmxNode();
    var amxTagId = tagInstance.getTag().getAttribute("id");
    var amxNodeId = amxNode.getId();
    var affectedTagInstanceIds = this._affectedTagInstances[amxNodeId];

    // Mark the instance dirty
    if (affectedTagInstanceIds == null)
    {
      affectedTagInstanceIds = [ amxTagId ];
      this._affectedTagInstances[amxNodeId] = affectedTagInstanceIds;

      // Mark the node dirty if it has not already
      if (this._affectedAttributes[amxNodeId] == null)
      {
        this._amxNodes.push(amxNode);
      }
    }
    else if (affectedTagInstanceIds.indexOf(amxTagId) == -1)
    {
      // Mark the instance as dirty
      affectedTagInstanceIds.push(amxTagId);
    }

    // Mark the attribute dirty
    var key = amxNodeId + "/" + amxTagId;

    var affectedAttributes = this._affectedTagInstanceAttributes[key];

    if (affectedAttributes == null)
    {
      this._affectedTagInstanceAttributes[key] = [ attributeName ];
    }
    else if (affectedAttributes.indexOf(attributeName) == -1)
    {
      affectedAttributes.push(attributeName);
    }
  };

})();
