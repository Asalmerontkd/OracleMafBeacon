/*
 *  Licensed to the Apache Software Foundation (ASF) under one
 *  or more contributor license agreements.  See the NOTICE file
 *  distributed with this work for additional information
 *  regarding copyright ownership.  The ASF licenses this file
 *  to you under the Apache License, Version 2.0 (the
 *  "License"); you may not use this file except in compliance
 *  with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 */

/**
 * Constructor for TrNumberFormat.
 * @param type Can be one of: 'number', 'percent' or 'currency'
 * @param locale Locale object
 * @param config An optional configuration object.
 *   Supported configuration paramters are:
 *     1. 'currencyCode'      The ISO 4217 currency code, applied when formatting currencies.
 *                            This currency code will substitute the locale's default currency symbol for number formatting,
 *                            provided type is set to 'currency'.
 *                            However the placement of the currencyCode is determined by the locale.
 *     2. 'currencySymbol'    Currency symbol applied when formatting currencies.
 *                            If currency code is set then symbol will be ignored.
                              This currency symbol will substitute the locale's default currency symbol for number
                              formatting, provided type is set to 'currency'.
                              However the placement of the currencySymbol is determined by the locale.
 *     3. 'negativePrefix'    Prefix for a negative number
 *     4. 'negativeSuffix'    Suffix for a negative number
 *     5. 'isGroupingUsed'    true, if number grouping has to be supported.
 *     6. 'maxFractionDigits' Sets the maximum number of fraction digits that are printed when formatting.
 *                            If the maximum is less than the number of fraction digits, the least significant digits are truncated.
 *     7. 'maxIntegerDigits'  Used to specify the new maximum count of integer digits that are printed
 *                            when formatting. If the maximum is less than the number of integer digits,
 *                            the most significant digits are truncated.
 *     8. 'minFractionDigits' Sets the minimum number of fraction digits that are printed when formatting.
 *     9. 'minIntegerDigits'  Sets the minimum number of integer digits that are printed when formatting.
 */
window.TrNumberFormat = function(type, locale, config)
{
  if(!type)
    alert("type for TrNumberFormat not defined!");

  this._type = type;

  this._localeSymbols = getLocaleSymbols(locale);

  if (!config)
  {
    config = {};
  }

  TrNumberFormat.CURRENCY_CODE       = "currencyCode";
  TrNumberFormat.CURRENCY_SYMBOL     = "currencySymbol";
  TrNumberFormat.NEGATIVE_PREFIX     = "negativePrefix";
  TrNumberFormat.NEGATIVE_SUFFIX     = "negativeSuffix";
  TrNumberFormat.IS_GROUPING_USED    = "isGroupingUsed";
  TrNumberFormat.MAX_FRACTION_DIGITS = "maxFractionDigits";
  TrNumberFormat.MAX_INTEGER_DIGITS  = "maxIntegerDigits";
  TrNumberFormat.MIN_FRACTION_DIGITS = "minFractionDigits";
  TrNumberFormat.MIN_INTEGER_DIGITS  = "minIntegerDigits";
  TrNumberFormat.ROUNDING_MODE       = "roundingMode";

  // Legacy MAF:
  var hasCustomMaxIntegerDigits = (config[TrNumberFormat.MAX_INTEGER_DIGITS] != null);
  var maxIntegerDigits = hasCustomMaxIntegerDigits ? config[TrNumberFormat.MAX_INTEGER_DIGITS] : 40;

  var hasCustomMaxFractionDigits = (config[TrNumberFormat.MAX_FRACTION_DIGITS] != null);
  var maxFractionDigits = hasCustomMaxFractionDigits ? config[TrNumberFormat.MAX_FRACTION_DIGITS] : 3;

  var hasCustomMinFractionDigits = (config[TrNumberFormat.MIN_FRACTION_DIGITS] != null);
  var minFractionDigits = hasCustomMinFractionDigits ? config[TrNumberFormat.MIN_FRACTION_DIGITS] : 0;

  var hasCustomMinIntegerDigits = (config[TrNumberFormat.MIN_INTEGER_DIGITS] != null);
  var minIntegerDigits = (hasCustomMinIntegerDigits ? config[TrNumberFormat.MIN_INTEGER_DIGITS] : 1);

  var hasGroupingUsed = (config[TrNumberFormat.IS_GROUPING_USED] != null);
  var groupingUsed = (hasGroupingUsed ? config[TrNumberFormat.IS_GROUPING_USED] : true);

  var hasRoundingMode = config[TrNumberFormat.ROUNDING_MODE] != null;
  var roundingMode = null;

  if (this._type == "currency")
  {
    if (!hasCustomMaxFractionDigits && !hasCustomMinFractionDigits)
    {
      // If neither max nor min were specified, use the defaults
      var maxCurrencyFractionDigits = this._localeSymbols.getCurrencyMaximumFractionDigits();
      var minCurrencyFractionDigits = this._localeSymbols.getCurrencyMinimumFractionDigits();
      if (maxCurrencyFractionDigits == -1)
        maxCurrencyFractionDigits = 2;
      if (minCurrencyFractionDigits == -1)
        minCurrencyFractionDigits = 0;
      maxFractionDigits = maxCurrencyFractionDigits;
      minFractionDigits = minCurrencyFractionDigits;
    }
    else if (!hasCustomMinFractionDigits)
    {
      minFractionDigits = 2;
    }
  }
  else if (this._type == "percent")
  {
    if (!hasCustomMaxIntegerDigits)
      maxIntegerDigits = this._localeSymbols.getPercentMaximumIntegerDigits();
    if (!hasCustomMaxFractionDigits)
      maxFractionDigits = this._localeSymbols.getPercentMaximumFractionDigits();
    if (!hasCustomMinFractionDigits)
      minFractionDigits = this._localeSymbols.getPercentMinimumFractionDigits();
    if (!hasCustomMinIntegerDigits)
      minIntegerDigits = this._localeSymbols.getPercentMinimumIntegerDigits();
  }

  if (hasCustomMaxFractionDigits && !hasCustomMinFractionDigits)
    minFractionDigits = Math.min(maxFractionDigits, minFractionDigits);
  else if (!hasCustomMaxFractionDigits && hasCustomMinFractionDigits)
    maxFractionDigits = Math.max(maxFractionDigits, minFractionDigits);

  // Set the default values:
  if (!hasCustomMaxIntegerDigits)
    this._maxIntegerDigits = maxIntegerDigits;
  if (!hasCustomMaxFractionDigits)
    this._maxFractionDigits = maxFractionDigits;
  if (!hasCustomMinFractionDigits)
    this._minFractionDigits = minFractionDigits;
  if (!hasCustomMinIntegerDigits)
    this._minIntegerDigits = minIntegerDigits;
  if (!hasGroupingUsed)
    this._groupingUsed = groupingUsed;
  if (!hasRoundingMode)
    this._roundingMode = roundingMode;

  // Set the override values:
  if (hasCustomMaxIntegerDigits)
    this.setMaximumIntegerDigits(maxIntegerDigits);
  if (hasCustomMaxFractionDigits)
    this.setMaximumFractionDigits(maxFractionDigits);
  if (hasCustomMinFractionDigits)
    this.setMinimumFractionDigits(minFractionDigits);
  if (hasCustomMinIntegerDigits)
    this.setMinimumIntegerDigits(minIntegerDigits);
  if (hasGroupingUsed)
    this.setGroupingUsed(groupingUsed);
  if (hasRoundingMode)
    this.setRoundingMode(roundingMode);

  this._updateLocaleAndSymbols(locale, config);
}

//***********************
// static
//***********************

/**
 * Gets a rounded representation of the given number.
 * @param {String} roundingMode the rounding mode to use, e.g. { "UP", "DOWN", "CEILING", "FLOOR", "HALF_UP", "HALF_DOWN", "HALF_EVEN", "UNNECESSARY"}; if null, "HALF_UP" is used -- at this time only null or "HALF_UP" is supported otherwise "UNNECESSARY" is used
 * @param {Number} number the number to round
 * @param {Number} maxFractionDigits null or the maximum number of digits to round to
 * @return {Object} either a Number if unmodified or a String representing the result
 */
TrNumberFormat.getRoundedValue = function(roundingMode, number, maxFractionDigits)
{
  if (maxFractionDigits == null)
    return number;

  number = parseFloat(number);
  if (isNaN(number))
    return number;

  // The default rounding mode in JS is HALF-UP.
  switch (roundingMode)
  {
    case "UP":
      // Rounding mode to round away from zero.
      return number; // TODO add support for this mode
    case "DOWN":
      // Rounding mode to round towards zero.
      return number; // TODO add support for this mode
    case "CEILING":
      // Rounding mode to round towards positive infinity.
      return number; // TODO add support for this mode
    case "FLOOR":
      // Rounding mode to round towards negative infinity.
      return number; // TODO add support for this mode
    case "HALF_DOWN":
      // Rounding mode to round towards "nearest neighbor" unless both neighbors are
      // equidistant, in which case round down.
      return number; // TODO add support for this mode
    case "HALF_EVEN":
      // Rounding mode to round towards the "nearest neighbor" unless both neighbors are
      // equidistant, in which case, round towards the even neighbor.
      return number; // TODO add support for this mode
    case "UNNECESSARY":
      // Rounding mode to assert that the requested operation has an exact result, hence
      // no rounding is necessary.
      return number;
    default: // null or HALF_UP
      // Rounding mode to round towards "nearest neighbor" unless both neighbors are
      // equidistant, in which case round up.
      return number.toFixed(maxFractionDigits);
  }
}

/**
 * Returns a number formater.
 * @param locale Locale object
 * @param config Optional configuration object.
 *   Supported configuration paramters are:
 *     1. 'currencyCode'      The ISO 4217 currency code, applied when formatting currencies.
 *                            This currency code will substitute the locale's default currency symbol for number formatting,
 *                            provided type is set to 'currency'.
 *                            However the placement of the currencyCode is determined by the locale.
 *     2. 'currencySymbol'    Currency symbol applied when formatting currencies.
 *                            If currency code is set then symbol will be ignored.
                              This currency symbol will substitute the locale's default currency symbol for number
                              formatting, provided type is set to 'currency'.
                              However the placement of the currencySymbol is determined by the locale.
 *     3. 'negativePrefix'    Prefix for a negative number
 *     4. 'negativeSuffix'    Suffix for a negative number
 *     5. 'isGroupingUsed'    true, if number grouping has to be supported.
 *     6. 'maxFractionDigits' Sets the maximum number of fraction digits that are printed when formatting.
 *                            If the maximum is less than the number of fraction digits, the least significant digits are truncated.
 *     7. 'maxIntegerDigits'  Used to specify the new maximum count of integer digits that are printed
 *                            when formatting. If the maximum is less than the number of integer digits,
 *                            the most significant digits are truncated.
 *     8. 'minFractionDigits' Sets the minimum number of fraction digits that are printed when formatting.
 *     9. 'minIntegerDigits'  Sets the minimum number of integer digits that are printed when formatting.
 */
TrNumberFormat.getNumberInstance = function(locale, config)
{
  return new TrNumberFormat("number", locale, config);
}

/**
 * Returns a currency formatter
 * @param locale Locale object
 * @param config Optional configuration object.
 *   Supported configuration paramters are:
 *     1. 'currencyCode'      The ISO 4217 currency code, applied when formatting currencies.
 *                            This currency code will substitute the locale's default currency symbol for number formatting,
 *                            provided type is set to 'currency'.
 *                            However the placement of the currencyCode is determined by the locale.
 *     2. 'currencySymbol'    Currency symbol applied when formatting currencies.
 *                            If currency code is set then symbol will be ignored.
                              This currency symbol will substitute the locale's default currency symbol for number
                              formatting, provided type is set to 'currency'.
                              However the placement of the currencySymbol is determined by the locale.
 *     3. 'negativePrefix'    Prefix for a negative number
 *     4. 'negativeSuffix'    Suffix for a negative number
 *     5. 'isGroupingUsed'    true, if number grouping has to be supported.
 *     6. 'maxFractionDigits' Sets the maximum number of fraction digits that are printed when formatting.
 *                            If the maximum is less than the number of fraction digits, the least significant digits are truncated.
 *     7. 'maxIntegerDigits'  Used to specify the new maximum count of integer digits that are printed
 *                            when formatting. If the maximum is less than the number of integer digits,
 *                            the most significant digits are truncated.
 *     8. 'minFractionDigits' Sets the minimum number of fraction digits that are printed when formatting.
 *     9. 'minIntegerDigits'  Sets the minimum number of integer digits that are printed when formatting.
 */
TrNumberFormat.getCurrencyInstance = function(locale, config)
{
  return new TrNumberFormat("currency", locale, config);
}

/**
 * Returns a percent formater.
 * @param locale Locale object
 * @param config Optional configuration object.
 *   Supported configuration paramters are:
 *     1. 'currencyCode'      The ISO 4217 currency code, applied when formatting currencies.
 *                            This currency code will substitute the locale's default currency symbol for number formatting,
 *                            provided type is set to 'currency'.
 *                            However the placement of the currencyCode is determined by the locale.
 *     2. 'currencySymbol'    Currency symbol applied when formatting currencies.
 *                            If currency code is set then symbol will be ignored.
                              This currency symbol will substitute the locale's default currency symbol for number
                              formatting, provided type is set to 'currency'.
                              However the placement of the currencySymbol is determined by the locale.
 *     3. 'negativePrefix'    Prefix for a negative number
 *     4. 'negativeSuffix'    Suffix for a negative number
 *     5. 'isGroupingUsed'    true, if number grouping has to be supported.
 *     6. 'maxFractionDigits' Sets the maximum number of fraction digits that are printed when formatting.
 *                            If the maximum is less than the number of fraction digits, the least significant digits are truncated.
 *     7. 'maxIntegerDigits'  Used to specify the new maximum count of integer digits that are printed
 *                            when formatting. If the maximum is less than the number of integer digits,
 *                            the most significant digits are truncated.
 *     8. 'minFractionDigits' Sets the minimum number of fraction digits that are printed when formatting.
 *     9. 'minIntegerDigits'  Sets the minimum number of integer digits that are printed when formatting.
 */
TrNumberFormat.getPercentInstance = function(locale, config)
{
  return new TrNumberFormat("percent", locale, config);
}

/**
 * Sets whether this NumberFormat formats and parses numbers using a
 * grouping separator.
 *
 * @param value true when a grouping separator is used, false otherwise
 */
TrNumberFormat.prototype.setGroupingUsed = function(groupingUsed)
{
  this._groupingUsed = groupingUsed;
}

/**
 * Answers whether this NumberFormat formats and parses numbers using a
 * grouping separator.
 *
 * @return true when a grouping separator is used, false otherwise
 */
TrNumberFormat.prototype.isGroupingUsed = function()
{
  return this._groupingUsed;
}

/**
 * Sets the chosen decimal rounding mode.
 *
 * @param Rounding mode can be one of:
 * {null, "UP", "DOWN", "CEILING", "FLOOR", "HALF_UP", "HALF_DOWN", "HALF_EVEN", "UNNECESSARY"}
 */
TrNumberFormat.prototype.setRoundingMode = function(roundingMode)
{
  this._roundingMode = roundingMode;
}

/**
 * Gets the decimal rouding mode.
 *
 * @return Rounding mode, can be one of:
 * {null, "UP", "DOWN", "CEILING", "FLOOR", "HALF_UP", "HALF_DOWN", "HALF_EVEN", "UNNECESSARY"}
 */
TrNumberFormat.prototype.getRoundingMode = function()
{
  return this._roundingMode;
}

/**
 * @return true if a decimal rounding mode is specifed
 */
TrNumberFormat.prototype.isRoundingModeSpecified = function()
{
  return this.getRoundingMode() != null;
}

/**
 * Used to specify the new maximum count of integer digits that are printed
 * when formatting. If the maximum is less than the number of integer
 * digits, the most significant digits are truncated.
 *
 * @param value the new maximum number of integer numerals for display
 */
TrNumberFormat.prototype.setMaximumIntegerDigits = function(number)
{
  //taken from the Apache Harmony project
  if(number != null)
  {
    this._maxIntegerDigits = number < 0 ? 0 : number;
    if (this._minIntegerDigits > this._maxIntegerDigits)
    {
      this._minIntegerDigits = this._maxIntegerDigits;
    }
  }
}

/**
 * Answers the maximum number of integer digits that are printed when
 * formatting. If the maximum is less than the number of integer digits, the
 * most significant digits are truncated.
 *
 * @return the maximum number of integer digits
 */
TrNumberFormat.prototype.getMaximumIntegerDigits = function()
{
  //taken from the Apache Harmony project
  return this._maxIntegerDigits;
}

/**
 * Sets the maximum number of fraction digits that are printed when
 * formatting. If the maximum is less than the number of fraction digits,
 * the least significant digits are truncated.
 *
 * @param value the maximum number of fraction digits
 */
TrNumberFormat.prototype.setMaximumFractionDigits = function(number)
{
  //taken from the Apache Harmony project
  if(number != null)
  {
    this._maxFractionDigits = number < 0 ? 0 : number;
    if (this._maxFractionDigits < this._minFractionDigits)
    {
      this._minFractionDigits = this._maxFractionDigits;
    }
    this._isMaxFractionDigitsSet  = true;
  }
}

/**
 * Answers the maximum number of fraction digits that are printed when
 * formatting. If the maximum is less than the number of fraction digits,
 * the least significant digits are truncated.
 *
 * @return the maximum number of fraction digits
 */
TrNumberFormat.prototype.getMaximumFractionDigits = function()
{
  //taken from the Apache Harmony project
  return this._maxFractionDigits;
}

/**
 * Sets the minimum number of integer digits that are printed when
 * formatting.
 *
 * @param value the minimum number of integer digits
 */
TrNumberFormat.prototype.setMinimumIntegerDigits = function(number)
{
  //taken from the Apache Harmony project
  if(number != null)
  {
    this._minIntegerDigits = number < 0 ? 0 : number;
    if(this._minIntegerDigits > this._maxIntegerDigits)
    {
      this._maxIntegerDigits = this._minIntegerDigits;
    }
  }
}

/**
 * Answers the minimum number of integer digits that are printed when
 * formatting.
 *
 * @return the minimum number of integer digits
 */
TrNumberFormat.prototype.getMinimumIntegerDigits = function()
{
  //taken from the Apache Harmony project
  return this._minIntegerDigits;
}

/**
 * Sets the minimum number of fraction digits that are printed when
 * formatting.
 *
 * @param value the minimum number of fraction digits
 */
TrNumberFormat.prototype.setMinimumFractionDigits = function(number)
{
  //taken from the Apache Harmony project
  if(number != null)
  {
    this._minFractionDigits = number < 0 ? 0 : number;
    if (this._maxFractionDigits < this._minFractionDigits)
    {
      this._maxFractionDigits = this._minFractionDigits;
    }
  }
}

/**
 * Answers the minimum number of fraction digits that are printed when
 * formatting.
 *
 * @return the minimum number of fraction digits
 */
TrNumberFormat.prototype.getMinimumFractionDigits = function()
{
  //taken from the Apache Harmony project
  return this._minFractionDigits;
}

/**
 * Based on the type this func returns a percentage, currency or number string.
 */
TrNumberFormat.prototype.format = function(number)
{
  if (this._type=="percent")
    return this.percentageToString(number);
  else if (this._type=="currency")
    return this.currencyToString(number);
  else if (this._type=="number")
    return this.numberToString(number);
}

/**
 * Based on the type this func returns a number result, from the given formatted string.
 */
TrNumberFormat.prototype.parse = function(string)
{
  if(this._type=="percent")
    return this.stringToPercentage(string);
  else if (this._type=="currency")
    return this.stringToCurrency(string);

  // ELSE: assume this._type=="number"
  return this.stringToNumber(string);
}

/**
 * Formats a number string into a number.
 * @param numberString Number in string form
 * @return Number
 */
TrNumberFormat.prototype.stringToNumber = function(numberString)
{
  var hasPrefixNSuffix =  this.hasPrefixOrSuffix(numberString);
  // multiplier = 1 for positive numbers, -1 for negative numbers
  var multiplier = 1;

  if (hasPrefixNSuffix)
  {
    var arr = this.removePrefixAndSuffix(numberString);
    numberString = arr[0]
    var isPosNum = arr[1];

    if (!isPosNum)
      multiplier = -1;
  }

  // parseFloat("123abc45") returns 123, but 123abc45 is considered an invalid number on the server,
  // so check for a valid number first. Exclude non-numbers and disallow exponential notation.
  if (isNaN(numberString) || numberString.indexOf('e') != -1 || numberString.indexOf('E') != -1)
  {
    throw new TrParseException("not able to parse number");
  }

  return parseFloat(numberString) * multiplier;
}

/**
 * Returns true if there is a prefix and suffix in the string
 */
TrNumberFormat.prototype.hasPrefixOrSuffix = function(numberString)
{
  var negP = numberString.indexOf(this._nPrefix);
  var nSufNoSpace = this._nSuffix;
  if (nSufNoSpace && (nSufNoSpace.charAt(0) == ' ' || nSufNoSpace.charAt(0) == '\xa0'))
  {
    nSufNoSpace = nSufNoSpace.substring(1);
  }

  // Treat "" string as null to prevent indexOf returning 0 for "" suffix
  var negS = numberString.indexOf((nSufNoSpace == "")? null : nSufNoSpace);

  // insist that prefix always starts at 0
  if(negP == 0 || negS != -1)
  {
    return true;
  }
  else
  {
    var posP = numberString.indexOf(this._pPrefix);
    var pSufNoSpace = this._pSuffix;

    if (pSufNoSpace && (pSufNoSpace.charAt(0) == ' ' || pSufNoSpace.charAt(0) == '\xa0'))
    {
      pSufNoSpace = pSufNoSpace.substring(1);
    }

    // Treat "" string as null to prevent indexOf returning 0 for "" suffix
    var posS = numberString.indexOf((pSufNoSpace == "")? null : pSufNoSpace);

    // insist that prefix always starts at 0
    if(posP == 0 || posS != -1)
    {
      return true;
    }
  }

  return false;
}

/**
 * Formats a currency string into a number.
 */
TrNumberFormat.prototype.stringToCurrency = function(numberString)
{
  return this.stringToNumber(numberString);
}

/**
 * Removes the locale specific prefix and suffix from a numberString
 * and returns an array with 2 elements,
 *     arr[0]  -> converted string
 *     arr[1]  -> boolean, true if number is positive, false if number is negative
 */
TrNumberFormat.prototype.removePrefixAndSuffix = function(numberString)
{
  //is the string negative ?
  var retArr = [];
  var negP = numberString.indexOf(this._nPrefix);
  var nSufNoSpace = this._nSuffix;

  if (nSufNoSpace && (nSufNoSpace.charAt(0) == ' ' || nSufNoSpace.charAt(0) == '\xa0'))
  {
    nSufNoSpace = nSufNoSpace.substring(1);
  }

  var negS = numberString.indexOf(nSufNoSpace);

  // TRINIDAD-1958: In Arabic the values for negPrefix and posPrefix are the same, so it is insufficient to test for
  // the presence of (only) negPrefix to determine if the number is negative.
  if(negP != -1 && negS != -1)
  {
    retArr.push(numberString.substr(this._nPrefix.length, numberString.length - (this._nPrefix.length + nSufNoSpace.length)));
    retArr.push(false);
    return retArr;
  }
  else
  {
    var posP = numberString.indexOf(this._pPrefix);
    var pSufNoSpace = this._pSuffix;

    if (pSufNoSpace && (pSufNoSpace.charAt(0) == ' ' || pSufNoSpace.charAt(0) == '\xa0'))
    {
      pSufNoSpace = pSufNoSpace.substring(1);
    }

    var posS = numberString.indexOf(pSufNoSpace);

    if(posP != -1 && posS != -1)
    {
      retArr.push(numberString.substr(this._pPrefix.length, numberString.length - (this._pPrefix.length + pSufNoSpace.length)));
      retArr.push(true);
      return retArr;
    }
    else
    {
       throw new TrParseException("not able to parse number");
    }//end-if we could not find a positive or negative prefix/suffix pair
  }//end-if not negative
}

/**
 * Formats a percent string into a number.
 */
TrNumberFormat.prototype.stringToPercentage = function(percentString)
{
  // Check for presence of %age symbol in the number string
  // Trimming of locale specific percentage symbol is required, because some locales have a white-space
  // before the %age symbol, but the user input may not always have the locale mandated space character before %age.
  var percentSymbl = this._localeSymbols.getPercentSuffix().trim();

  // Some locales like tr_TR, put the %age in prefix
  // The assumption here is that any locale that uses percentage symbol as prefix does not repeat the symbol in the suffix
  // In case we support a new locale where this assumption is proved wrong the following scheme will have to be thought-through again.
  // The assumption holds good for all the locales supported currently.
  if(!percentSymbl)
    percentSymbl = this._localeSymbols.getPercentPositivePrefix().trim();

  var isPercentage = (percentString.indexOf(percentSymbl) != -1);

  if (!isPercentage)
  {
    throw new TrParseException("not able to parse number");
  }

  var numberString = percentString.replace(new RegExp(percentSymbl, 'g'), '');
  return this.stringToNumber(numberString);
}

/**
 * Formats a number into a a formatted string.
 * @param number The number to be represented in string form
 * @param suffixSymbol An optional suffix that needs to be appended to the number. Generally this is '%'.
 * If a custom suffix is specified this would be added before the formater's _pSuffix or _nSuffix is applied
 * @param prefixSymbolIfSuffixAbsent An optional prefix that needs to be prefixed to the number in absence of suffix data.
 * If a custom prefix is specified this would be prepended before the formater's _pPrefix or _nPrefix is applied
 * Generally this is '%'
*/
TrNumberFormat.prototype.numberToString = function(number, suffixSymbol, prefixSymbolIfSuffixAbsent)
{
  //negative ?
  var negative = number<0;
  if(negative)
    number = (number*-1);

  var numberString = number + "";

  // check for scientific notation
  numberString = TrNumberFormat.scientificToExpanded(numberString);

  var index = numberString.indexOf(".");
  var numberStringLength = numberString.length;
  var ints;
  var fracs;
  if(index != -1)
  {
    ints = numberString.substring(0, index);
    fracs = numberString.substring(index+1, numberStringLength);
  }
  else
  {
    ints = numberString;
    fracs = "";
  }

  var fracsResult = this._formatFractions(fracs);
  fracs = fracsResult["fracs"];
  if (fracsResult["needToAdd1"])
  {
    // The rounding of the fractions caused the integers to increase by 1 so do that:
    var intsNumber = parseInt(ints, 10); // change it to a Number
    ints = "" + ++intsNumber; // increment the Number change it back to a String
  }

  ints  = this._formatIntegers(ints);

  var decimalSeparator = this._localeSymbols.getDecimalSeparator();

  if(fracs!="")
    numberString = (ints+decimalSeparator+fracs);
  else
    numberString = (ints);

  // Apply the custom prefix and suffix before the formatter configured appendages are added
  if (suffixSymbol)
  {
    numberString = numberString + suffixSymbol;
  }
  else if(prefixSymbolIfSuffixAbsent)
  {
    // putting the prefix in else may seem odd at first, but here the assumption is that they are mutually exclusive
    numberString = prefixSymbolIfSuffixAbsent + numberString;
  }

  if(negative)
  {
    // If we have either the negative prefix or suffix, then merge them into the number string,
    // else we just prefix the negative sign
    if (this._nPrefix || this._nSuffix)
    {
      numberString = this.addPrefixAndSuffix(numberString, false);
    }
    else
    {
      numberString = "-" + numberString;
    }
  }
  else
  {
    if (this._pPrefix || this._pSuffix)
    {
      numberString = this.addPrefixAndSuffix(numberString, true);
    }
  }

  return numberString;
}

/**
 * Adds locale specific prefix and suffix to the number string
 */
TrNumberFormat.prototype.addPrefixAndSuffix = function(numberString, hasPositivePrefix)
{
  if(hasPositivePrefix)
  {
    return ((this._pPrefix)? this._pPrefix : '') + numberString + ((this._pSuffix)? this._pSuffix : '');
  }
  else
  {
    return ((this._nPrefix)? this._nPrefix : '') + numberString + ((this._nSuffix)? this._nSuffix : '');
  }
}

/**
 * Formats a number into a a formatted currency string.
 */
TrNumberFormat.prototype.currencyToString = function(number)
{
  return this.numberToString(number);
}

/**
 * Formats a number into a a formatted percent string.
 */
TrNumberFormat.prototype.percentageToString = function(number)
{
  // First multiply by 100, since the percentages are internally stored as decimal
  // fractions. Ex: 29% is 0.29
  // The obvious thing to do is multiply the number by 100, but doing so will expose
  // floating point precision errors.
  // Ex: 1.16 * 100 = 115.99999999999999, 0.07*100=7.000000000000001
  // Hence convert the number to string form and right shift the decimal point by 2
  // places, suffixing zeros in the process if required.
  // Convert back to number once the decimal is shifted
  number = this.moveDecimalRight(number);

  if (isNaN(number))
  {
    throw new TrParseException("not able to parse number");
  }

  // Get the percent suffix. I.e. in French the suffix is " %", not just "%". The following assumes
  // the percent suffix is the same when the number is positive or negative. It also assumes that
  // the locale indeed uses a percent suffix ; if that assumption is
  // wrong, we should be notified by the following exception. If any changes need to be made, you
  // should start by looking at _getPercentData() in:
  // maven-i18n-plugin\src\main\java\org\apache\myfaces\trinidadbuild\plugin\i18n\uixtools\JSLocaleElementsGenerator.java
  // Suffix is usually "%", except in case of tr locale where the symbol is prefixed
  var positivePercentSuffix = this._localeSymbols.getPercentSuffix();
  var positivePercentPrefix = this._localeSymbols.getPercentPositivePrefix();

  //we require either prefix or suffix to be not null
  if ((!positivePercentSuffix || positivePercentSuffix == "") && (!positivePercentPrefix || positivePercentPrefix == ""))
  {
    throw new TrParseException("suffix AND prefix are undefined, require at least one to be not null");
  }

  return this.numberToString(number, positivePercentSuffix, positivePercentPrefix);
}

/**
 * Static utility function.
 * Converts a number string from scientific notation to standard expanded notation.
 */
TrNumberFormat.scientificToExpanded = function(numberString)
{
  // check for scientific notation
  var expIndex = numberString.indexOf('e');
  if (expIndex == -1)
    return numberString;

  var prefix = "";
  if (numberString.charAt(0) == '-')
  {
    prefix = "-";
    numberString = numberString.substring(1);
    expIndex -= 1;
  }

  var isPosExp = numberString.charAt(expIndex + 1) == '+';
  var exp = parseInt(numberString.substring(expIndex + 2));
  var nFractionDigits = expIndex - 2;
  var zeroes = "";

  // The exponent should always be greater than the number of fraction digits.
  if (isPosExp)
  {
    for (var i = 0; i < exp - nFractionDigits; ++i)
      zeroes += "0";

    return prefix + numberString.charAt(0) + numberString.substring(2, expIndex) + zeroes;
  }

  // ELSE: negative exponent
  for (var i = 0; i < exp - 1; ++i)
    zeroes += "0";

  return prefix + "0." + zeroes + numberString.charAt(0) + numberString.substring(2, expIndex);
}

/**
 * Static utility function.
 * Trims extraneous leading zeroes.
 */
TrNumberFormat.trimLeadingZeroes = function(numberString)
{
  var strbuf = [];
  var i, ch;
  for (i = 0; i < numberString.length; ++i)
  {
    ch = numberString.charAt(i);

    if ((ch >= '1' && ch <= '9') || ch == '.')
      break;

    if (ch == '0' && i+1 < numberString.length && numberString.charAt(i+1) != '.')
      continue;

    strbuf.push(ch);
  }

  return strbuf.join('') + numberString.substring(i);
}

/**
 * helper for rounding values
 */
TrNumberFormat.prototype.getRounded = function(val)
{
  val = this.moveDecimalRight(val);
  val = Math.round(val);
  val = this.moveDecimalLeft(val);
  return val;
}

/**
 * Helper for shifting decimal point in a number by 2 places to the right from its current position,
 * simulating multiplication by 100.
 * Use this API to work around floating point arithmetic errors, like for ex: 0.29 * 100 = 28.999999999999996
 * @param val decimal number
 */
TrNumberFormat.prototype.moveDecimalRight = function(val)
{
  var newVal = '';
  newVal = this.moveDecimal(val, false);
  return newVal;
}

/**
 * Helper for shifting decimal point in a number by 2 places to the left from its current position,
 * simulating division by 100.
 * Use this API to work around floating point arithmetic errors, like for ex: 6.56 / 100 = 6.5599999999999999
 * @param val decimal number
 */
TrNumberFormat.prototype.moveDecimalLeft = function (val)
{
  var newVal = '';
  newVal = this.moveDecimal(val, true);
  return newVal;
}

/**
 * Helper for shifting decimal point in a number by 2 places to the left or right
 * from its current position.
 * @param val decimal number
 * @param left true to shift the decimal point left by 2 positions, false to right shift decimal point by 2 places
 */
TrNumberFormat.prototype.moveDecimal = function(val, left)
{
  var newVal = '';
  newVal = this.moveDecimalAsString(val, left);
  return parseFloat(newVal);
}

/**
 * Helper for shifting decimal point in a string by 2 places to the left or right
 * from its current position.
 * @param val decimal number
 * @param left true to shift the decimal point left by 2 positions, false to right shift decimal point by 2 places
 */
TrNumberFormat.prototype.moveDecimalAsString = function(val, left)
{
  //TODO: matzew make it nicer....
  var spaces = 2;
  if (spaces <= 0)
    return val;
  var newVal = val + '';
  var extraZ = this.getZeros(spaces);
  var re1 = new RegExp('([0-9.]+)');
  if (left)
  {
    newVal = newVal.replace(re1, extraZ + '$1');
    var re2 = new RegExp('(-?)([0-9]*)([0-9]{' + spaces + '})(\\.?)');
    newVal = newVal.replace(re2, '$1$2.$3');
  }
  else
  {
    var reArray = re1.exec(newVal);
    if (reArray != null)
    {
      newVal = newVal.substring(0,reArray.index) + reArray[1] + extraZ + newVal.substring(reArray.index + reArray[0].length);
    }
    var re2 = new RegExp('(-?)([0-9]*)(\\.?)([0-9]{' + spaces + '})');
    newVal = newVal.replace(re2, '$1$2$4.');
  }
  newVal = newVal.replace(/\.$/, '');
  return newVal;
}

/**
 *
 */
TrNumberFormat.prototype.getZeros = function(places)
{
  var extraZ = '';
  var i;
  for (i=0; i<places; i++) {
    extraZ += '0';
  }
  return extraZ;
}

//***********************
// PRIVATE
//***********************

/**
 * Updates the locale symbols and Currency prefix and suffixes
 * @param locale Locale object
 * @param config Configuration object.
 *   Supported configuration paramters are:
 *     1. TrNumberFormat.CURRENCY_CODE  The ISO 4217 currency code, applied when formatting currencies.
 *                                      This currency code will substitute the locale's default currency symbol
 *                                      for number formatting, provided type is set to 'currency'.
 *                                      However the placement of the currencyCode is determined by the locale.
 *     2. TrNumberFormat.CURRENCY_SYMBOL Currency symbol applied when formatting currencies.
 *                                      If currency code is set then symbol will be ignored.
 *                                      This currency symbol will substitute the locale's default currency symbol for
 *                                      number formatting, provided type is set to 'currency'.
 *                                      However the placement of the currencySymbol is determined by the locale.
 *     3. TrNumberFormat.NEGATIVE_PREFIX negativePrefix Prefix for a negative number
 *     4. TrNumberFormat.NEGATIVE_SUFFIX negativeSuffix Suffix for a negative number
 */
TrNumberFormat.prototype._updateLocaleAndSymbols = function(locale, config)
{
  var currencyCode = (config)? config[TrNumberFormat.CURRENCY_CODE] : null;
  var currencySymbol = (config)? config[TrNumberFormat.CURRENCY_SYMBOL] : null;
  var negPrefix = (config)? config[TrNumberFormat.NEGATIVE_PREFIX] : null;
  var negSuffix = (config)? config[TrNumberFormat.NEGATIVE_SUFFIX] : null;
  this._localeSymbols = getLocaleSymbols(locale);

  if (this._type=="percent" || this._type=="number")
  {
    this._nPrefix = (negPrefix)? negPrefix : null;
    this._nSuffix = (negSuffix)? negSuffix : null;

    // No support as yet for positive prefix/suffix on percent and number data
    this._pPrefix = null;;
    this._pSuffix = null;
  }
  else
  {
    // assume _type=="currency"
    // We have some additional processing for currencies.
    // 1. If negPrefix and/or negSuffix is specified, replace the non-currency formatting characters in
    //    the localized negative currency prefix and suffix string with negPrefix/negSuffix
    //    Ex: If locale default negative currency prefix is '($ ' and negPrefix is '[', then resultant custom prefix
    //        will be '[$ '.
    // 2. If custom currencyCode/CurrencySymbol is speified, then replace the currency symbol in the locale default
    //    +ve/-ve currency prefix/suffix with custom code/symbol.

    // Localized prefix and suffix format for positive currency data
    // This will mostly contain just the currency symbol of the specified locale,
    // however presence of additional formatting characters like + cannot be ruled out
    // Customizing positive prefix/suffix is not supported, so we settle with the locale defaults
    this._pPrefix = this._localeSymbols.getPositivePrefix();
    this._pSuffix = this._localeSymbols.getPositiveSuffix();

    // Localized prefix and suffix format for negative currency data
    // In addition to the currency symbol of the specified locale,
    // the prefix and suffix can contain some additioanl formatting characters like (,),-
    var nCurrencyPrefix = this._localeSymbols.getNegativePrefix();
    var nCurrencySuffix = this._localeSymbols.getNegativeSuffix();
    var localeDefaultCurSymb = this._localeSymbols.getCurrencySymbol();

    // Replace the formatting characters in 'nCurrencyPrefix' with negPrefix, leave the currency symbol alone
    this._nPrefix = this._replaceFormattingPrefixAndSuffix(nCurrencyPrefix, localeDefaultCurSymb, negPrefix, true);

    // Replace the formatting characters in 'nCurrencySuffix' with negSuffix, leave the currency symbol alone
    this._nSuffix = this._replaceFormattingPrefixAndSuffix(nCurrencySuffix, localeDefaultCurSymb, negSuffix, false);

    // If custom currency is supplied, override the locale default currency representation
    if (currencyCode)
    {
      var localeDefaultCurCode = this._localeSymbols.getCurrencyCode();

      // First check if the locale default currency code matches the custom currency code
      // If so, we want to retain the localized currency symbol
      // Example: If locale is en_US and currency code is "INR", then we use INR as currency prefix/suffix (positioning
      // is determined by the formatting locale in_IN). So "INR 1,000.00" is okay
      // But if the locale is in_IN, if the currency code is "INR", then we have the ability to display "Rs." prefix
      // instead of generic INR prefix. So in this case we display "Rs. 1,000.00"
      if (localeDefaultCurCode != currencyCode)
      {
        // if currencyCode is set we honour currency code.
        // Replaces all occurrences of locale default currency symbol with currencyCode
        this._replaceCurrencyPrefixAndSuffix(localeDefaultCurSymb, currencyCode);
      }
    }
    else if (currencySymbol)
    {
      // if only currencySymbol is (currencyCode is null) set we honour currency symbol.
      // Replaces all occurrences of locale default currency symbol with custom currencySymbol
      this._replaceCurrencyPrefixAndSuffix(localeDefaultCurSymb, currencySymbol);
    }
  }
}

/**
 * Replaces the locale default currency symbol in prefix/suffix with custom currency symbol
 */
TrNumberFormat.prototype._replaceCurrencyPrefixAndSuffix = function(localeDefault, customCurrency)
{
  this._pPrefix = this._pPrefix.replace(localeDefault, customCurrency);
  this._pSuffix = this._pSuffix.replace(localeDefault, customCurrency);
  this._nPrefix = this._nPrefix.replace(localeDefault, customCurrency);
  this._nSuffix = this._nSuffix.replace(localeDefault, customCurrency);
}

/**
 * Replaces the locale specific formatting characters in the prefix/suffix with custom formatting, leaving the currency
 * symbol intact.
 * @param localePattern Locale specific currency prefix or suffix
 * @param localeDefaultCurSymbol The currency symbol used in 'localePattern'
 * @param customPattern The replacement for the locale specific formatting characters
 * @param isPrefix true if localePattern is used as prefix, false if localePattern is a suffix
 * @return The customized prefix/suffix string
 */
TrNumberFormat.prototype._replaceFormattingPrefixAndSuffix = function(
  localePattern,
  localeDefaultCurSymb,
  customPattern,
  isPrefix)
{
  var newPattern = localePattern;

  if (customPattern)
  {
    // Spare the currency symbol while replacing the negative formatting characters
    var curSymblIdx = localePattern.trim().indexOf(localeDefaultCurSymb);

    if (curSymblIdx == -1)
    {
      // No currency symbol found in the localized currency prefix/suffix string
      // Replace the locale pattern entirely with the custom pattern
      newPattern = customPattern;
    }
    else
    {
      // if the localized currency prefix/suffix string only has the currency symbol
      if (localePattern.trim() == localeDefaultCurSymb)
      {
        // In case of prefix formatting: put the custom prefix before the currency symbol. Ex: '(' + 'Rs.'
        // In case of suffix formatting: put the currency symbol before the custom prefix. Ex: 'Rs.' + ' )'
        // Use the original localePattern (which may include whitespace) while building the new pattern,
        // retaining the original whitespace characteristics.
        // Ex: locale="de_DE" has currency suffix as " $", so the resulting suffix pattern should be " $#"
        newPattern = (isPrefix)? customPattern + localePattern : localePattern + customPattern;
      }
      else if (curSymblIdx == 0)
      {
        // If currency code is located at the head of the localized prefix/suffix string
        // we can safely assume that the formatting chars follow the currency symbol in the pattern

        // when suffixing custom pattern to the currency, retain the whitespaces that appear before the currency symbol in localePattern
        // Ex: if the localePattern is " $)", then the new pattern should be " $#"
        var startIndexOfCurSymb = localePattern.indexOf(localeDefaultCurSymb);
        newPattern = localePattern.substring(0, startIndexOfCurSymb) + (localeDefaultCurSymb + customPattern);
      }
      else
      {
        // we can safely assume that the formatting chars come before the currency symbol in the prefix

        var curSymbLength = localeDefaultCurSymb.length;

        // Check if the currency symbol in localePattern is followed by some whitespace characters that we would like to retain
        if (localePattern.trim().length == curSymbLength + curSymblIdx)
        {
          // when prefixing custom pattern to the currency, retain the whitespaces that appear after the currency symbol in localePattern
          // Ex: if the localePattern is "($ ", then the new pattern should be "#$ "

          var startIndexOfCurSymb = localePattern.indexOf(localeDefaultCurSymb);
          newPattern = (customPattern + localeDefaultCurSymb) + localePattern.substring(startIndexOfCurSymb + curSymbLength, localePattern.length);
        }
        else
        {
          newPattern = customPattern + localeDefaultCurSymb;
        }
      }
    }
  }

  return newPattern;
}

/**
 * Formats the integer part of a number
 */
TrNumberFormat.prototype._formatIntegers = function(ints)
{
  var intsLength = ints.length;
  var maxInt = this.getMaximumIntegerDigits();
  var minInt = this.getMinimumIntegerDigits();

  var gap;
  if(intsLength>maxInt)
  {
    gap = intsLength-maxInt;
    ints = ints.substring(gap, intsLength);
  }
  else if(intsLength<minInt)
  {
    gap = minInt-intsLength;
    var leadingZeros = "";

    //we need some more leadingZeros
    while(gap>0)
    {
      leadingZeros = "0"+leadingZeros;
      --gap;
    }

    ints = leadingZeros + ints;
  }

  if(this.isGroupingUsed())
  {
    ints = this._addGroupingSeparators(ints);
  }

  return ints;
}

/**
 * Formats the fraction part of a number
 */
TrNumberFormat.prototype._formatFractions = function(fracs)
{
  var fracsLength = fracs.length;
  var maxFra = this.getMaximumFractionDigits();
  var minFra = this.getMinimumFractionDigits();
  var needToAdd1 = false;

  if(fracsLength > maxFra && maxFra >= minFra)
  {
    // Do not attempt to truncate fractional digits if rounding is enabled
    var fracsToRetain = (this.isRoundingModeSpecified())? fracsLength : maxFra;
    fracs =
      TrNumberFormat.getRoundedValue(
        this._roundingMode,
        parseFloat("0."+fracs),
        fracsToRetain);
    if (isNaN(fracs))
    {
      fracs = "";
    }
    else
    {
      if (fracs >= 1) // if 0. changes to 1. then update the non-fracs part
        needToAdd1 = true;
      fracs = fracs.substring(2); // Strip off the "0." or "1."
    }
  }
  if(fracsLength <minFra)
  {
    var gap = minFra-fracsLength;

    //we need to add some zeros
    while(gap>0)
    {
      fracs = fracs + "0";
      --gap;
    }
  }
  
  return {
    "fracs": fracs,
    "needToAdd1": needToAdd1
  };
}

/**
 * Adds localized grouping separators to a number string.
 */
TrNumberFormat.prototype._addGroupingSeparators = function(ints)
{
  var counter = ints.length;
  var toMuch = counter%3;
  var balance;
  var toFormat;
  var formatted = "";
  var groupingSeparator = this._localeSymbols.getGroupingSeparator();

  if(toMuch>0)
  {
    balance = (counter < 4) ? ints.substring(0, toMuch) : ints.substring(0, toMuch) + groupingSeparator;
    toFormat = ints.substring(toMuch, counter);
  }
  else
  {
    balance = "";
    toFormat = ints;
  }

  for(i=0; i < toFormat.length; i++)
  {
    if(i%3==0 && i!=0)
    {
      formatted += groupingSeparator;
    }
    formatted += toFormat.charAt(i);
  }
  ints = balance + formatted;
  return ints;
}
/**
 * TrParseException is an exception thrown by the TrNumberFormater.
 * TODO: loclized messages ?
 */
window.TrParseException = function(message)
{
  this._message = message;
};

TrParseException.prototype.getMessage = function()
{
  return this._message;
}
