/* Copyright (c) 2011, 2016, Oracle and/or its affiliates. All rights reserved. */
/* ------------------------------------------------------ */
/* --------------- amx-collections.js ------------------- */
/* ------------------------------------------------------ */

(function()
{
  /**
   * Bulk load a set of providers so they cached and accessibly locally.
   * @param {Object} treeNodeIterator is the tree node iterator to load the provider from
   * @param {number} startingPoint to load from, typically 0 but recursive calls will change those to
   *        be page/set boundary markers
   * @param {number} numberOfRows to load up to the number of providers in the collection. Represents
   *        the total number of rows, not relative to the starting point
   * @param {function} success the callback to invoke when all the providers have been loaded
   * @param {function} failed the callback to invoke on error
   */
  adf.mf.api.amx.bulkLoadProviders = function(
    treeNodeIterator,
    startingPoint,
    numberOfRows,
    success,
    failed)
  {
    // Do not process bulk loads during navigation
    if (adf.mf.internal.amx._navigationInProgress)
    {
      if (failed != null)
      {
        var loadIgnoredMessage = adf.mf.resource.getInfoString(
          "AMXErrorBundle", "ERROR_BULK_LOAD_IGNORED_DUE_TO_NAVIGATION");

        failed(loadIgnoredMessage, null); // invoke failure callback; load was invalid
      }

      return;
    }

    var navigationIdAtStart = adf.mf.internal.amx._navigationId;
    var scb = success;
    var fcb = failed;

    var tnb = treeNodeIterator.getTreeNodeBindings();

    // Get the number of cached rows after the starting point
    var cachedRows = treeNodeIterator.getCachedRowCount(startingPoint);
    // Get the total number of rows in the collection model (not just cached)
    var maxRows = tnb.keys.length;
    // Get the desired number of rows that should be cached (from 0, aka total)
    var desiredRowCount =
      (
        (numberOfRows == -1) ||
        (maxRows < numberOfRows &&
          (
            !tnb ||
            !tnb.hasMoreKeys
          )
        )
      ) ? maxRows : numberOfRows;

    if (cachedRows + startingPoint < desiredRowCount)
    {
      // fetch more data - note this will call nextSet and then recurse to fetch any remaining rows
      // if need be
      var newIndex = startingPoint + cachedRows;
      var isFetchingMoreRows = false;
      if (newIndex < 0)
      {
        newIndex = 0;
      }
      else if (newIndex >= maxRows)
      {
        newIndex = maxRows - 1;
        isFetchingMoreRows = true;
      }
      treeNodeIterator.setCurrentIndex(newIndex);

      var hasMoreKeys = tnb.hasMoreKeys;

      treeNodeIterator.nextSet(
        function()
        {
          // If the page has been navigated when we got here after we started the load, then
          // there's nothing for us to do with the fetched data so we must ignore it:
          if (navigationIdAtStart != adf.mf.internal.amx._navigationId || adf.mf.internal.amx._navigationInProgress)
          {
            var loadIgnoredMessage =
              adf.mf.resource.getInfoString(
                "AMXErrorBundle", "ERROR_BULK_LOAD_IGNORED_DUE_TO_NAVIGATION");
            fcb(loadIgnoredMessage, null); // invoke failure callback; load was invalid
            return;
          }

          // See if the last call was supposed to load more than the maximum number of rows
          if (isFetchingMoreRows)
          {
            tnb = treeNodeIterator.getTreeNodeBindings();
            var newMaxRows = tnb.keys.length;
            if (newMaxRows <= maxRows)
            {
              if (!tnb.hasMoreKeys && hasMoreKeys)
              {
                // If the flag for hasMoreKeys was true but is now false, then the load was
                // successful but there were no rows to be loaded
                scb(null, null);
                return;
              }
              else
              {
                // See if the number of cached rows changed. If so, then call the success callback,
                // else treat this as a failure since no rows were loaded with no apparent reason
                var newCachedRows = treeNodeIterator.getCachedRowCount(startingPoint);

                // Get the total number of rows in the collection model (not just cached)
                if (newCachedRows > cachedRows)
                {
                  scb(null, null);
                }
                else
                {
                  fcb(null, null);
                }
                return;
              }
            }
          }

          if (isFetchingMoreRows)
          {
            ++newIndex;
          }
          adf.mf.api.amx.bulkLoadProviders(treeNodeIterator, newIndex, desiredRowCount,
            success, failed);
        },
        fcb);
    }
    else
    {
      // we have the data already cached
      try
      {
        scb(null, null);
      }
      catch(fe)
      {
        fcb(fe, null);
      }
    }
  };

  // TODO: add more comments to the iterator implementation classes below
  /**
   * Iterator object to support iterating over a JavaScript items array with hasNext and next methods
   * @constructor
   */
  function ArrayIterator(items)
  {
    // Empty arrays are currently sent to the JavaScript side as nulls by the embedded side. As
    // such, convert the value into an empty array
    this._items = items || [];
    this._index = -1;
    this._length = this._items.length;
  }

  ArrayIterator.prototype =
  {
    next: function()
    {
      return this.hasNext() ? this._items[++this._index] : undefined;
    },

    hasNext: function()
    {
      return this._index + 1 < this._length;
    },

    previous: function()
    {
      return this.hasPrevious() ? this._items[--this._index] : undefined;
    },

    hasPrevious: function()
    {
      return this._index > 0 && this._index - 1 < this._length;
    },

    getCurrent: function()
    {
      return this._index >= 0 && this._index <= this._length ? this._items[this._index] : undefined;
    },

    getCurrentIndex: function()
    {
      return this._index;
    },

    isTreeNodeIterator: function()
    {
      return false;
    },

    isAllDataLoaded: function()
    {
      // Arrays cannot implement the behavior of notifying the consumer that more data may be able
      // to be loaded. It is up to the page author to configure the loading of more information
      // manually
      return true;
    },

    getAvailableCount: function()
    {
      return this._length;
    },

    getTotalCount: function()
    {
      return this._length;
    },

    getRowKey: function()
    {
      if (this._index == -1)
      {
        return null;
      }

      var currentItem = this._items[this._index];
      return currentItem == null ? null :
        typeof currentItem["rowKey"] === "function" ?
          currentItem.rowKey() : this._index;
    },

    /**
     * Sets the index to the value specified. Note that calling next will cause
     * the item after this index to be returned. Therefore, calling the function
     * with -1 will cause the next item to load to be the first item (index 0).
     */
    setCurrentIndex: function(index)
    {
      this._index = index;
    },

    /**
     * Sets the current item by the row key
     * @param {string} rowKey the row key
     * @return {boolean} true if the rowKey was found, false otherwise
     */
    setCurrentRowKey: function(rowKey)
    {
      this._index = -1;
      while (this.hasNext())
      {
        this.next();
        if (this.getRowKey() == rowKey)
        {
          return true;
        }
      }

      return false;
    }
  };

  /**
   * Iterator object to use with TreeNodeIterator with hasNext and next methods
   * @constructor
   */
  function TreeNodeIteratorWrapper(items)
  {
    this._first = true;
    this._items = items;
    // cache available size of the iterator to avoid
    // multiple calculations
    // Iterator is not suppose to life longer than one iteration
    // so this is safe to do here since any data change
    // during the iteration will corrupt data anyway and it should
    // be avoided in a code that uses this iterator.
    this._availableCount = items.getCachedRowCount(0);
    this._totalCount = items.getTreeNodeBindings().keys.length;
  }

  TreeNodeIteratorWrapper.prototype =
  {
    /**
     * @return {TreeNode} representation of the next row in the collection
     */
    next: function()
    {
      if (this._first)
      {
        this._first = false;
        return this._items.localFirst();
      }

      return this._items.localNext();
    },

    /**
     * @return {Boolean} true if the next row is available in local collection
     */
    hasNext: function()
    {
      if (this._first)
      {
        return this._items.localFirst() !== undefined;
      }
      return this._items.getCurrentIndex() < this._availableCount - 1;
    },

    /**
     * @return {TreeNode} representation of the previous row in the collection or undefined
     *         if already at the beginning
     */
    previous: function()
    {
      return this._first ? undefined : this._items.localPrevious();
    },

    /**
     * @return {Boolean} true if the previous row is available in local collection
     */
    hasPrevious: function()
    {
      return this._first == false;
    },

    /**
     * @return {TreeNode} representation of the row on current index
     */
    getCurrent: function()
    {
      return this._items.getCurrentRow();
    },

    /**
     * @return {Integer} index of the current position in collection
     */
    getCurrentIndex: function()
    {
      return this._items.getCurrentIndex();
    },

    isTreeNodeIterator: function()
    {
      return true;
    },

    /**
     * @return true if there are more data to be loaded from the backend
     */
    isAllDataLoaded: function()
    {
      return this._items.getTreeNodeBindings().hasMoreKeys !== true;
    },

    /**
     * @return {Integer} number of all available items on the backend
     */
    getAvailableCount: function()
    {
      return this._availableCount;
    },

   /**
    * @return {Integer} total number of items in collection on backend
    */
    getTotalCount: function()
    {
      return this._totalCount;
    },

   /**
    * @return {String} rowKey of the current position in collection
    */
    getRowKey: function()
    {
      if (this._first)
      {
        return null;
      }

      return this._items.getCurrentKey();
    },

    /**
     * Sets the index to the value specified. Note that calling next will cause
     * the item after this index to be returned. Therefore, calling the function
     * with -1 will cause the next item to load to be the first item (index 0).
     */
    setCurrentIndex: function(index)
    {
      this._items.setCurrentIndex(index);
      this._first = index == -1;
    },

    /**
     * Sets the current item by the row key
     * @param {string} rowKey the row key
     * @return {boolean} true if the rowKey was found, false otherwise
     */
    setCurrentRowKey: function(rowKey)
    {
      this._first = false;
      return this._items.setCurrentRowKey(rowKey);
    }
  };

  /**
   * Create an iterator that will support either a JavaScript array of objects or iterator over a
   * tree node iterator (collection model).
   * @param {(Array|TreeNodeIterator)} the items to iterate over
   * @return {Object} iterator object with "next", "hasNext", and "isTreeNodeIterator" functions
   *                           where "next" will return undefined when no more objects are available.
   */
  adf.mf.api.amx.createIterator = function(items)
  {
    if (items != null && items[".type"] === "TreeNodeIterator")
    {
      return new TreeNodeIteratorWrapper(items);
    }
    else
    {
      return new ArrayIterator(items);
    }
  };
})();
