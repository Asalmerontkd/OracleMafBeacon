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
 * Internal utility.
 */
var DateFormatUtils = {}; // for testing, exposed as TrDateTimeConverter._utils

/**
 * Internal test for localeSymbols.
 * @param {string} locale the lowecase locale to test, e.g. "en-us".
 * @return {Promise} a promise that when resolved will provide a locale info array with entries for localeSymbols, loadedLocale, and localeList when resolved or just a reason string if rejected
 */
DateFormatUtils._testForLocale = function(locale)
{
  return new adf.mf.internal.BasePromise(
    function(resolve, reject)
    {
      var localeList = adf.mf.locale.generateLocaleList(locale.toLowerCase(), true);
      var baseUrl = adf.mf.environment.profile.messageBundleBaseUrl;
      if (baseUrl == null)
        baseUrl = "js";
      adf.mf.internal.loadTrinidadLocaleElements(baseUrl, localeList,
        function (loadedLocale)
        {
          if (loadedLocale === null)
          {
            // for this low-level method, always send in the english string (do not translate)
            reject("Warning failed to load LocaleElements due to null loadedLocale baseUrl=" +
              baseUrl + ", localeList=" + localeList);
          }
          else
          {
            var localeSymbols = getLocaleSymbols(loadedLocale);
            var monthPrinter = function(dateWhoseMonthToPrint)
              {
                // Prepare the day of week header (with proper first day of week)
                var dowAbbr = [ "Su", "M ", "Tu", "W ", "Th", "F ", "Sa" ];
                var sb = [];
                var dateString = [];
                dateString.push(dowAbbr[dateWhoseMonthToPrint.getDay()]);
                dateString.push(" ");
                dateString.push(dateWhoseMonthToPrint.getFullYear());
                dateString.push(".");
                dateString.push(_getPaddedNumber(dateWhoseMonthToPrint.getMonth()+1, 2, 2));
                dateString.push(".");
                dateString.push(_getPaddedNumber(dateWhoseMonthToPrint.getDate(), 2, 2));
                sb.push("+----+----+----+----+----+----+----+ " + dateString.join(""));
                var fdow = localeSymbols.getFirstDayOfWeekNumber();
                var min1stWeek = localeSymbols.getMinimalDaysInFirstWeekNumber();
                var week = [];
                for (var i = 0+fdow; i < 7+fdow; ++i)
                {
                  week.push("| " + dowAbbr[i%7] + " ");
                }
                week.push("| " + loadedLocale + " min1stWeek=" + min1stWeek);
                sb.push(week.join(""));
                sb.push("+====+====+====+====+====+====+====+ " + localeList);

                // Print out the weeks
                var firstOfMonth = new Date(dateWhoseMonthToPrint);
                firstOfMonth.setDate(1);
                var firstPrintedDate = 
                  DateFormatUtils._getFirstDateOfWeekThatBelongsToThisDate(firstOfMonth, localeSymbols);
                var dateToPrint = firstPrintedDate;
                for (var w=0; w<5; ++w) // print 5 weeks
                {
                  week = [];
                  for (var d=0; d<7; ++d)
                  {
                    week.push("| " + _getPaddedNumber(dateToPrint.getDate(), 2, 2) + " ");
                    dateToPrint.setDate(dateToPrint.getDate() + 1);
                  }
                  week.push("|");
                  sb.push(week.join(""));
                  sb.push("+----+----+----+----+----+----+----+");
                }

                // Log and return the month data
                var message = sb.join("\n");
                console.log("%c" + message, "font-family: monospace");
                return message;
              };
            var localeInfo = [localeSymbols, loadedLocale, localeList, monthPrinter];
            resolve(localeInfo);
          }
        });
    });
};

// External variables used:
//  _df2DYS: Sets the two-digit year start.

var _AD_ERA = null;
var _THAI_BUDDHIST_YEAR_OFFSET = 543;

// For each month in the Gregorian calendar, the DAY_OF_YEAR for the last date in that month
// Used to determine the month for a DAY_OF_YEAR value - if the value is greater than the
// DAY_OF_YEAR for that month's last date, it does not belong to that month.
var _GREGORIAN_MONTHS_LASTDAYOFYEAR_NONLEAP = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
var _GREGORIAN_MONTHS_LASTDAYOFYEAR_LEAP = [31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];

var _MILLIS_PER_DAY = 86400000;

function _getADEra()
{
  if (_AD_ERA == null)
  {
    _AD_ERA = new Date(0);
    _AD_ERA.setFullYear(1);
  }

  return _AD_ERA;
}


/**
 * Determine whether the parsed time is a strictly parsed value.
 */
function _isStrict(parseContext, parsedTime)
{
  var checks = ["FullYear", "Month", "Date", "Hours", "Minutes",
                "Seconds", "Milliseconds"];

  for (var i=0; i < checks.length; i++)
  {
    var parsed = "parsed" + checks[i];

    if (parseContext[parsed] != null &&
        parseContext[parsed] != parsedTime["get" + checks[i]]())
    {
      // failure for strict parsing
      return false;
    }
  }

  return true;
}


/**
 * Clump up similar runs of pattern characters from the format patter and
 * call the subfunction for each result. Return whether the clumping
 * succeeded.
 */
function _doClumping(
  formatPattern,
  localeSymbols,
  locale,
  subFunction,
  param,
  outValue)
{
  var formatLength = formatPattern.length;
  var inQuote      = false;
  var kindCount    = 0;
  var lastChar     = void 0;
  var startIndex   = 0;
  var quoteIndex = null;

  for (var i = 0; i < formatLength; i++)
  {
    var currChar = formatPattern.charAt(i);

    if (inQuote)
    {
      if (currChar == "\'")
      {
        // test strings to test escaping working properly
        // "'one '' two '' three''' 'four '' five'"   ->     "one ' two ' three' four ' five
        // "HH:mm:ss 'o''clock' z"                    ->     "[time] o'clock [timezone]"
        // "HH:mm:ss 'oclock' z"                      ->     "[time] oclock [timezone]"
        // "HH:mm:ss '' z"                            ->     "[time] ' [timezone]"

        inQuote = false;

        // handle to single quotes in a row as escaping the quote
        // by not skipping it when outputting
        if (kindCount != 1 && startIndex != quoteIndex)
        {
          startIndex++;
          kindCount--;
        }

        // output the quoted text
        if (!subFunction(formatPattern,
                         localeSymbols,
                         locale,
                         "\'",
                         startIndex,
                         kindCount,
                         param,
                         outValue))
        {
          // failure
          // alert("failure at " + startIndex + " with " + lastChar);
          return false;
        }

        var nextIndex = i + 1;

        if (nextIndex < formatLength)
        {
          var nextChar = formatPattern.charAt(nextIndex);

          if (nextChar == "\'")
          {
            quoteIndex = nextIndex;
          }
        }

        kindCount = 0;
        lastChar  = void 0;
      }
      else
      {
        // keep adding characters to the escaped String
        kindCount++;
      }
    }
    else
    {
      // the characters that we are collecting have changed
      if (currChar != lastChar)
      {
        if (kindCount != 0)
        {
          // output the previously collected string
          if (!subFunction(formatPattern,
                           localeSymbols,
                           locale,
                           lastChar,
                           startIndex,
                           kindCount,
                           param,
                           outValue))
          {
            // failure
            //alert("failure at " + startIndex + " with " + lastChar);
            return false;
          }

          kindCount = 0;
          lastChar  = void 0;
        }

        if (currChar == '\'')
        {
          inQuote = true;
        }

        startIndex = i;
        lastChar = currChar;
      }

      // keep collecting this kind of character together
      kindCount++;
    }
  }

  // output any left over substring being collected
  if (kindCount != 0)
  {
    if (!subFunction(formatPattern,
                     localeSymbols,
                     locale,
                     lastChar,
                     startIndex,
                     kindCount,
                     param,
                     outValue))
    {
      // failure
      //alert("failure at " + startIndex + " with " + lastChar);
      return false;
    }
  }

  // success
  return true;
}

/**
 * Format a clump of pattern elements using the specified time.
 */
function _subformat(
  inString,
  localeSymbols,
  locale,
  formatType,
  startIndex,
  charCount,
  time,
  stringHolder)
{
  // string to append to the toString
  var appendString = null;
  if ((formatType >= 'A') && (formatType <= 'Z') ||
      (formatType >= 'a') && (formatType <= 'z'))
  {
    switch (formatType)
    {
      case 'a': // am/pm marker
        var amPMs = localeSymbols.getAmPmStrings();
        appendString = _isPM(time.getHours()) ? amPMs[1] : amPMs[0];
        break;
      case 'd': // day in month
        appendString = _getPaddedNumber(time.getDate(), charCount);
        break;
      case 'D': // day in year
        appendString = _getPaddedNumber(DateFormatUtils._getDayInYearNumber(time), charCount);
        break;
      case 'E': // day in week
        var dayOfWeek = time.getDay();
        appendString = (charCount <= 3)
                         ? localeSymbols.getShortWeekdays()[dayOfWeek]
                         : localeSymbols.getWeekdays()[dayOfWeek];
        break;
      case 'F': // day of week in month
        // Bug 14032368 (KPALMER)
        // Before:
        // appendString = "(Day of week in month)";
        // After:
        appendString = _getPaddedNumber(Math.floor((time.getDate() - 1) / 7) + 1, charCount);
        break;
      case 'G': // era designator
        var eras = localeSymbols.getEras();
        appendString = (time.getTime() < _getADEra().getTime()) ? eras[0] : eras[1];
        break;
      case 'h': // hour in am/pm (1-12)
        hours = time.getHours();

        if (_isPM(hours))
          hours -= 12;

        if (hours == 0)
          hours = 12;

        appendString = _getPaddedNumber(hours, charCount);
        break;
      case 'H': // hour in day (0-23)
        appendString = _getPaddedNumber(time.getHours(), charCount);
        break;
      case 'K': // hour in am/pm (0-11)
         hours = time.getHours();

        if (_isPM(hours))
           hours -= 12;

        appendString = _getPaddedNumber(hours, charCount);
        break;
      case 'k': // hour in day (1-24)
        hours = time.getHours();
        if (hours == 0)
          hours = 24;
        appendString = _getPaddedNumber(hours, charCount);
        break;
      case 'L': // "standalone form" of the month in year
        var monthIndex = time.getMonth();
        if (charCount <= 2) // use the month number
          appendString = _getPaddedNumber(monthIndex + 1, charCount);
        else if (charCount == 3) // use the month abbreviation
          appendString = localeSymbols.getShortMonths()[13+monthIndex];
        else // use the full month name
          appendString = localeSymbols.getMonths()[13+monthIndex];
        break;
      case 'm': // minute in hour (0 - 59)
        appendString = _getPaddedNumber(time.getMinutes(), charCount);
        break;
      case 'M': // "context sensitive" month in year
        var monthIndex = time.getMonth();
        if (charCount <= 2) // use the month number
          appendString = _getPaddedNumber(monthIndex + 1, charCount);
        else if (charCount == 3) // use the month abbreviation
          appendString = localeSymbols.getShortMonths()[monthIndex];
        else // use the full month name
          appendString = localeSymbols.getMonths()[monthIndex];
        break;
      case 's': // seconds in minute (0 - 59)
        appendString = _getPaddedNumber(time.getSeconds(), charCount);
        break;
      case 'S': // millisecond (0 - 999)
        appendString = _getPaddedNumber(time.getMilliseconds(), charCount);
        break;
      case 'u': // Day number of week (1 = Monday, ..., 7 = Sunday)
        var dayIndex = time.getDay();
        var dayNumberOfWeek = (dayIndex == 0 ? 7 : dayIndex);
        appendString = _getPaddedNumber(dayNumberOfWeek, charCount);
        break;
      case 'w': // week in year
        appendString = _getPaddedNumber(DateFormatUtils._getWeekOfYearNumber(time, localeSymbols), charCount);
        break;
      case 'W': // week in month
        appendString = _getPaddedNumber(DateFormatUtils._getWeekOfMonthNumber(time, localeSymbols), charCount);
        break;
      case 'X': // ISO-8601 time zone
        appendString = DateFormatUtils._getIso8601TimeZone(time, charCount);
        break;
      case 'y': // year
        var year = DateFormatUtils._getYearNumber(time, locale);
        appendString = DateFormatUtils._getYearString(year, charCount);
        break;
      case 'Y': // week year; may be different than the calendar year
        var weekYear = DateFormatUtils._getWeekYearNumber(time, localeSymbols, locale);
        appendString = DateFormatUtils._getYearString(weekYear, charCount);
        break;
      case 'z': // GMT timezone - "GMT Sign Hours : Minutes"
        appendString = DateFormatUtils._getGeneralTimeZone(time);
        break;
      case 'Z': // RFC 822 timeZone - "Sign TwoDigitHours Minutes"
        appendString = DateFormatUtils._getRcf822TimeZone(time);
        break;
      default:
        // do nothing rather than throw an exception
        appendString = "";
    }
  }
  else
  {
    // all other results are literal
    appendString = inString.substring(startIndex, startIndex + charCount);
  }

  stringHolder.value += appendString;

  // formatting should never fail
  return true;
}

/**
 * Get the time zone offset from GMT in an array.
 * @param {Date} time the date object
 * @param {boolean} rcfFormat whether to use an RCF format for the offset
 * @return {Array<String>} an offset array with value [0] = "+/-HH" and [1] = "mm"
 */
function _getTimeZoneOffsetArray(time, rfcFormat)
{
  // The JavaScript date time zone offset gives the wrong sign, so inverting it.
  var timeZnOffset = -1* time.getTimezoneOffset();

  // LRN 20120113 - Commented the following line as it will always
  // zero the offset. I suspect this is a copy/paste bug since the
  // comment on _getLocaleTimeZoneDifference refers to the potential
  // discrepancy between server tz offset and browser tz offset, but
  // every time zone in this calculation originates in the browser.
  // timeZnOffset += _getLocaleTimeZoneDifference();

  if (rfcFormat || timeZnOffset != 0)
  {
    var timeOffsetArray = new Array(2);
    // sign
    if (timeZnOffset < 0)
    {
      timeOffsetArray[0] = "-";
      // abs value
      timeZnOffset = -timeZnOffset
    }
    else
    {
      timeOffsetArray[0] = "+";
    }

    // HH
    timeOffsetArray[0] += _getPaddedNumber(Math.floor(timeZnOffset / 60), 2);

    // mm
    timeOffsetArray[1] = _getPaddedNumber(timeZnOffset % 60, 2);

    return timeOffsetArray;
  }
}

/**
 * compare the time zone that is on the client with the time zone that
 * came from the localeContext on the server, and return the difference
 * in hours.
 * This can be used to adjust the date/time value that will be displayed in
 * the date field to use the timezone set on the locale context on the
 * server instead of the timezone we get from javascript's getTimezoneOffset.
 * see bug 3167883
 */
function _getLocaleTimeZoneDifference()
{
  var currentDate = new Date();
  // timeZoneOffset in javascript appears to give
  // the wrong sign, so I am switching it.
  // the timeZoneOffset is in minutes.
  var currentDateTzOffset = currentDate.getTimezoneOffset() * -1;
  var tzOffsetDiff = 0;

  return tzOffsetDiff - currentDateTzOffset;
}

/*
 * Returns true if year is a leap year
 */
function _isLeapYear (year)
{
  if (year % 4)
    return false;
  else if (year % 100)
    return true;
  else if (year % 400)
    return false;
  else
    return true;
}

/**
 * Parse a substring using a clump of format elements.
 */
function _subparse(
  inString,      // the pattern string, such as "yyMMdd"
  localeSymbols,
  locale,
  formatType,    // the current format char, such as 'y'
  startIndex,    // index into inString
  charCount,     // the number of chars of type formatType
  parseContext,  // information pertaining to the user input string
  parsedTime)
{
  // Start index of the string being parsed (as opposed
  // to startIndex, which is the index on the format mask)
  var inStartIndex = parseContext.currIndex;

  var nextFormatType = (startIndex + charCount < inString.length) ?
    inString.charAt(startIndex + charCount) : null;

  // Consider the pattern "yyMMdd". Say that formatType is 'y' and nextFormatType is 'M'. Normally
  // we would allow for leniency such that the user could input 2 or 4 digits for the year, but
  // since this pattern contains no date separators and both the year and month can consist of
  // digits, there's no easy way of telling whether the first 4 digits apply to just the year, or
  // to both the year and month. Therefore, if nextFormatType is one of the reserved format types,
  // then we go into strict parsing mode for formatType, where charCount represents the maximum
  // number of user input characters that will be parsed when matching the current formatType.
  var isStrict = ("DFHKMSWYdhkmsuwy".indexOf(nextFormatType) != -1);

  if ((formatType >= 'A') && (formatType <= 'Z') ||
      (formatType >= 'a') && (formatType <= 'z'))
  {
    switch (formatType)
    {
      case 'D': // day in year
        var dayOfYear = _accumulateNumber(parseContext, !isStrict ? 3 : charCount);
        if (dayOfYear == null)
          return false;
        else
          parseContext.parsedDayOfYear = dayOfYear;
        break;

      case 'E': // day in week
      {
        // extract the day but do nothing with it, as there is not setDay()
        // on Date TODO should we add support though? if not then why?
        var dayIndex = _matchArray(parseContext,
                                   (charCount <= 3)
                                     ? localeSymbols.getShortWeekdays()
                                     : localeSymbols.getWeekdays());

        if (dayIndex == null)
        {
          return false;
        }
      }
      break;

      case 'F': // day of week in month
        // skip this number TODO why?
        if (_accumulateNumber(parseContext, !isStrict ? 2 : charCount) == null)
        {
          return false;
        }
        break;

      case 'G': // era designator
      {
        var eraIndex = _matchArray(parseContext, localeSymbols.getEras());

        if (eraIndex != null)
        {
          if (eraIndex == 0)
          {
            parseContext.parsedBC = true;
          }
        }
        else
        {
          return false;
        }
      }
      break;

      case 'M': // month in year
      {
        var monthIndex;
        var monthOffset = 0;

        if (charCount <= 2)
        {
          // match month number
          monthIndex = _accumulateNumber(parseContext, !isStrict ? 2 : charCount);

          // subtract 1 from the monthIndex to make it 0-based
          monthOffset = -1;
        }
        else
        {
          var nameArray = (charCount == 3)
                            ? localeSymbols.getShortMonths()
                            : localeSymbols.getMonths();

          monthIndex = _matchArray(parseContext, nameArray);
        }

        if (monthIndex != null)
        {
          parseContext.parsedMonth = (monthIndex + monthOffset);
        }
        else
        {
          return false;
        }
      }
      break;

      case 'S': // millisecond (0 - 999)
      {
        var milliseconds = _accumulateNumber(parseContext, !isStrict ? 3 : charCount);

        if (milliseconds != null)
        {
          parseContext.parsedMilliseconds = milliseconds;
        }
        else
        {
          return false;
        }
      }
      break;

      case 'W': // week in month
        // skip this number TODO why?
        if (_accumulateNumber(parseContext, !isStrict ? 2 : charCount) == null)
        {
          return false;
        }
        break;

      case 'a': // am/pm marker
      {
        var amPMIndex = _matchArray(parseContext, localeSymbols.getAmPmStrings());

        if (amPMIndex == null)
        {
          return false;
        }
        else
        {
          if (amPMIndex == 1)
          {
            parseContext.isPM = true;
          }
        }
      }
      break;

      case 'd': // day in month
      {
        var dayOfMonth = _accumulateNumber(parseContext, !isStrict ? 2 : charCount);

        if (dayOfMonth != null)
        {
          parseContext.parsedDate = dayOfMonth;
        }
        else
        {
          return false;
        }
      }
      break;

      case 'h': // hour in am/pm (1-12)
      case 'k': // hour in day (1-24)
      case 'H': // hour in day (0-23)
      case 'K': // hour in am/pm (0-11)
      {
        var hour = _accumulateNumber(parseContext, !isStrict ? 2 : charCount);

        if (hour != null)
        {
          if ((formatType == 'h') && (hour == 12))
            hour = 0;
          if ((formatType == 'k') && (hour == 24))
            hour = 0;

          parseContext.parsedHour = hour;
        }
        else
        {
          return false;
        }
      }
      break;


      case 'm': // minute in hour 0 - 59)
      {
        var minutes = _accumulateNumber(parseContext, !isStrict ? 2 : charCount);

        if (minutes != null)
        {
          parseContext.parsedMinutes = minutes;
        }
        else
        {
          return false;
        }
      }
      break;

      case 's': // seconds in minute 0 - 59)
      {
        var seconds = _accumulateNumber(parseContext, !isStrict ? 2 : charCount);

        if (seconds != null)
        {
          parseContext.parsedSeconds = seconds;
        }
        else
        {
          return false;
        }
      }
      break;

      case 'u': // Day number of week (1 = Monday, ..., 7 = Sunday)
        // extract the day but do nothing with it, as there is not setDay()
        // on Date TODO add support?
        var dayNumberOfWeek = _accumulateNumber(parseContext, 1);
        var dayIndex = (dayNumberOfWeek == 7 ? 0 : dayNumberOfWeek);
        if (dayIndex == null)
        {
          return false;
        }
        break;

      case 'w': // week in year
        // skip this number TODO why?
        if (_accumulateNumber(parseContext, !isStrict ? 2 : charCount) == null)
        {
          return false;
        }
        break;

      case 'X': // ISO-8601 time zone (e.g. -08; -0800; -08:00)
        // The number of pattern letters designates the format for both formatting and
        // parsing as follows:
        //   ISO8601TimeZone:
        //     OneLetterISO8601TimeZone -- +/-HH or Z
        //     TwoLetterISO8601TimeZone -- +/-HHmm or Z
        //     ThreeLetterISO8601TimeZone -- +/-HH:mm or Z
        //   OneLetterISO8601TimeZone:
        //     Sign TwoDigitHours
        //     Z
        //   TwoLetterISO8601TimeZone:
        //     Sign TwoDigitHours Minutes
        //     Z
        //   ThreeLetterISO8601TimeZone:
        //     Sign TwoDigitHours : Minutes
        //     Z
        // Other definitions are as for general time zones or RFC 822 time zones.
        // For formatting, if the offset value from GMT is 0, "Z" is produced. If the
        // number of pattern letters is 1, any fraction of an hour is ignored. For
        // example, if the pattern is "X" and the time zone is "GMT+05:30", "+05" is
        // produced.
        //
        // For parsing, "Z" is parsed as the UTC time zone designator. General time zones
        // are not accepted.
        //
        // If the number of pattern letters is 4 or more, IllegalArgumentException is
        // thrown when constructing a SimpleDateFormat or applying a pattern.
        if (charCount > 3)
          break; // not supported
        if (_matchText(parseContext, "Z"))
        {
          parseContext.hourOffset = 0;
          parseContext.minOffset = 0;
        }
        else // non-Z values
        {
          // ISO-8601 TimeZone format should have up to 1 to 6 chars (+/-HH:mm or just Z)
          if (charCount == 1 &&
            (parseContext.parseString.length - parseContext.currIndex) < 3)
          {
            // The non-Z value for the "X" pattern must be 3 character long
            return false;
          }
          else if (charCount == 2 &&
            (parseContext.parseString.length - parseContext.currIndex) < 5)
          {
            // The non-Z value for the "XX" pattern must be 5 character long
            return false;
          }
          else if (charCount == 3 &&
            (parseContext.parseString.length - parseContext.currIndex) < 6)
          {
            // The non-Z value for the "XXX" pattern must be 6 character long
            return false;
          }

          // consume the plus or minus
          var hourMultiplier = 1;
          if (_matchText(parseContext, "-"))
            hourMultiplier == -1;
          else if (!_matchText(parseContext, "+"))
            return false; // didn't have either "-" nor "+"

          // accumulate the hour offset number
          var hourOffset = _accumulateNumber(parseContext, 2);
          if (hourOffset == null)
          {
            // The non-Z value for the "X", "XX", or "XXX" patterns must contain hours
            return false;
          }
          parseContext.hourOffset = hourOffset * hourMultiplier;

          if (charCount == 1) // "X"
          {
            parseContext.minOffset = 0;
          }
          else // "XX" or "XXX"
          {
            // consume the separator between HH and mm
            if (charCount == 3 && !_matchText(parseContext, ":"))
            {
              // The non-Z value for the "XXX" pattern must contain a ":"
              return false;
            }

            // accumulate the minute offset number
            var minOffset = _accumulateNumber(parseContext, 2);
            if (minOffset == null)
            {
              // The non-Z value for the "XX" or "XXX" patterns must contain minutes
              return false;
            }
            parseContext.minOffset = minOffset;
          }
        }
        break;

      case 'y': // year
      {
        // Trinidad-2386: Javascript accepts up to 6 digit year lengths, use maxLength = 6
        var year = _accumulateNumber(parseContext, !isStrict ? 6 : charCount);
        var enteredChars = parseContext.currIndex - inStartIndex;
        // if we have a 2-digit year, add in the default year
        if (year != null)
        {
          if ((enteredChars > 2) &&
              (charCount <= 2) &&
              (year <= 999))
          {
            // Block bonus characters; if they've specified
            // a two-year mask, and there's more than two characters,
            // there might be a problem. But allow four digits.
            return false;
          }
          else if ((charCount <= 2) && (year >= 0) && (year <= 100))
          {
            year = _fix2DYear(year, locale);
          }
          else if (charCount == 4)
          {
            // Bug 2169562: For four-digit year formats, reject
            // three-year entries. Fair enough!
            if (enteredChars == 3)
              return false;
            if (enteredChars <= 2)
              year = _fix2DYear(year);
          }

          // There is no year "0"
          if (year == 0)
            return false;

          // Trinidad-2013: Thai Buddhist Calendar is offset by 543 years
          if (locale == "th-th")
            year -= _THAI_BUDDHIST_YEAR_OFFSET;

          parseContext.parsedFullYear = year;
        }
        else
        {
          return false;
        }
      }
      break;

      case 'Y': // week year; may be different than the calendar year
        // Trinidad-2386: Javascript accepts up to 6 digit year lengths, use maxLength = 6
        var year = _accumulateNumber(parseContext, !isStrict ? 6 : charCount);
        var enteredChars = parseContext.currIndex - inStartIndex;
        // if we have a 2-digit year, add in the default year
        if (year != null)
        {
          if ((enteredChars > 2) &&
              (charCount <= 2) &&
              (year <= 999))
          {
            // Block bonus characters; if they've specified
            // a two-year mask, and there's more than two characters,
            // there might be a problem. But allow four digits.
            return false;
          }
          else if ((charCount <= 2) && (year >= 0) && (year <= 100))
          {
            year = _fix2DYear(year, locale);
          }
          else if (charCount == 4)
          {
            // Bug 2169562: For four-digit year formats, reject
            // three-year entries. Fair enough!
            if (enteredChars == 3)
              return false;
            if (enteredChars <= 2)
              year = _fix2DYear(year);
          }

          // There is no year "0"
          if (year == 0)
            return false;

          // Trinidad-2013: Thai Buddhist Calendar is offset by 543 years
          if (locale == "th-th")
            year -= _THAI_BUDDHIST_YEAR_OFFSET;

          if (localeSymbols.isWeekDateSupported())
          {
            // there is not enough detail here to convert "week year" to "year" so simply
            // note the week year value here and then later we might be able to convert it
            // into a year value:
            parseContext.parsedWeekYear = year;
          }
          else
          {
            // The "week year" and "year" are the same values:
            parseContext.parsedFullYear = year;
          }
        }
        else
        {
          return false;
        }
        break;

      case 'z': // GMT timezone - "GMT Sign Hours : Minutes"
      {
        // consume the GMT portion
        if (!_matchText(parseContext, "GMT"))
        {
          // GMT is must for timeZone entry. TODO why?
          return false;
        }

        // if we have any more chars then parse the remaining "+HH:mm" string.
        if ((parseContext.parseString.length - parseContext.currIndex) > 0)
        {
          // consume the plus or minus
          var hourMultiplier = 1;
          if (_matchText(parseContext, "-"))
            hourMultiplier == -1;
          else if (!_matchText(parseContext, "+"))
            return false; // didn't have either "-" nor "+"

          // accumulate the hour offset number
          var hourOffset = _accumulateNumber(parseContext, 2);
          if (hourOffset == null)
          {
            return false;
          }
          parseContext.hourOffset = hourOffset * hourMultiplier;

          // consume the separator between HH and mm
          if (!_matchText(parseContext, ":"))
          {
            return false;
          }

          // accumulate minute offset number (should have 2 digits)
          var minOffset;
          if (((parseContext.parseString.length - parseContext.currIndex) < 2) ||
             (minOffset = _accumulateNumber(parseContext, 2)) == null)
          {
            return false;
          }
          parseContext.minOffset = minOffset;
        }
      }
      break;

      case 'Z': // RFC 822 timezone - "Sign TwoDigitHours Minutes"
      {
        // RFC 822 TimeZone format should have 5 chars (+/-HHmm)
        if ((parseContext.parseString.length - parseContext.currIndex) < 5)
        {
          return false;
        }

        // consume the plus or minus
        var hourMultiplier = 1;
        if (_matchText(parseContext, "-"))
          hourMultiplier == -1;
        else if (!_matchText(parseContext, "+"))
          return false; // didn't have either "-" nor "+"

        // accumulate the hour offset number
        var hourOffset = _accumulateNumber(parseContext, 2);
        if (hourOffset == null)
        {
          return false;
        }
        parseContext.hourOffset = hourOffset * hourMultiplier;

        // accumulate the minute offset number
        var minOffset = _accumulateNumber(parseContext, 2);
        if (minOffset == null)
        {
          return false;
        }
        parseContext.minOffset = minOffset;
      }
      break;

      default:
    }
  }
  else
  {
    // consume constants
    return _matchText(parseContext,
                      inString.substring(startIndex, startIndex + charCount));
  }

  // match succeeded
  return true;
}


/**
 * Fix two-digit years.
 */
function _fix2DYear(year, locale)
{
  var defaultCentury;

  if (_df2DYS != null)
  {
    // year               51    01
    // offsetYear       1950  1950
    // defaultCentury   1900  1900
    // year             1951  1901
    // year             1951  2001
    var offsetYear = _df2DYS;

    // Trinidad-2224: _fix2DYear should take into account the Thai Buddhist calendar.
    // Here, two-digit-year-start is specified as a Gregorian year, so if the
    // locale is Thai Buddhist, it needs to be translated into the Thai equivalent
    if (locale == "th-th")
      offsetYear += _THAI_BUDDHIST_YEAR_OFFSET;
    defaultCentury = offsetYear - (offsetYear % 100);

    year += defaultCentury;
    if (year < offsetYear)
      year += 100;
  }
  else
  {
    var currentYear = new Date().getFullYear();

    // Trinidad-2224: _fix2DYear should take into account the Thai Buddhist calendar.
    // Here, currentYear is a Gregorian Year, so it needs to be translated into the Thai equivalent
    if (locale == "th-th")
      currentYear += _THAI_BUDDHIST_YEAR_OFFSET;
    defaultCentury = currentYear - (currentYear % 100) - 100;

    year += defaultCentury;

    // if the new year is now more than 80 years in the past,
    // then it is actually a date in the future, so add the 100 years
    // back in. The 80 years rule, matches Java's spec
    if (year + 80 < currentYear)
    {
      year += 100;
    }
  }

  return year;
}


/**
 * Match the current text against an array of possibilities, returning
 * the index of the longest succesful match, or undefined if no match succeeded.
 */
function _matchArray(parseContext, matchArray)
{
  var longestMatchLength = 0;
  var longestMatchIndex = -1;
  for (var i = 0; i < matchArray.length; i++)
  {
    if (_matchText(parseContext, matchArray[i], false))
    {
      // TRINIDAD-2269: In some locales, the matchArray contains strings which are substrings of later entries
      // When the parseContext's string is actually the longer string, returning for the first match is incorrect and
      // we should instead keep walking the array for the full match.
      if (matchArray[i].length > longestMatchLength)
      {
        longestMatchIndex  = i;
        longestMatchLength = matchArray[i].length;
      }
    }//end-if _matchText succeeds
  }// end-for all matchArray

  if (longestMatchIndex != -1)
  {
    // update the parse context manually
    parseContext.currIndex += longestMatchLength;
    return longestMatchIndex;
  }

  // no match
  return null;
}


/**
 * Match the specified text in a case insensitive manner,
 * returning true and updating the
 * <code>parseContext</code> if the match succeeded.
 */
function _matchText(parseContext, text, updateParseContext)
{
  // if no text to match then match will fail
  if (!text)
    return false;

  // get the length of the text to match
  var textLength  = text.length;

  var currIndex   = parseContext.currIndex;
  var parseString = parseContext.parseString;

  // determine whether we have enough of the parseString left to match
  if (textLength > parseString.length - currIndex)
  {
    return false;
  }

  //
  // Convert to lowercase for case insensitive match
  //
  // =-= bts Maybe toLocaleLowerCase would be better, but that would cause
  //         problems if the browser locale were different from the application
  //         locale.
  //
  var parseText  = parseString.substring(currIndex, currIndex + textLength);
  var parseMatch = parseText.toLowerCase();
  var textMatch  = text.toLowerCase();

  if (parseMatch != textMatch)
    return false;

  // update the current parseContext
  // TRINIDAD-2269: When called from _matchArray, _matchText may return prematurely (when the current string is
  // a substring of the string to match). Thus we have to scan the whole array against the original parseContext
  // before declaring a match, at which point _matchArray will update parseContext manually.
  if (updateParseContext != false)
    parseContext.currIndex += textLength;

  return true;
}


/**
 * Accumlates and returns a number at this location or undefined, if
 * there is no number.
 */
function _accumulateNumber(parseContext, maxLength)
{
  var startIndex  = parseContext.currIndex;
  var currIndex   = startIndex;
  var parseString = parseContext.parseString;
  var parseLength = parseString.length;
  if (parseLength > currIndex + maxLength)
    parseLength = currIndex + maxLength;

  var currValue = 0;

  // gather up all of the digits
  while (currIndex < parseLength)
  {
    var currDigit = parseDigit(parseString.charAt(currIndex));

    if (!isNaN(currDigit))
    {
      // add on the digit and shift over the results
      currValue *= 10;
      currValue += currDigit;

      currIndex++;
    }
    else
    {
      break;
    }
  }

  if (startIndex != currIndex)
  {
    // update the current parseContext
    parseContext.currIndex = currIndex;

    // return the numeric version
    return currValue;
  }
  else
  {
    // no number at this location
    return null;
  }
}


/**
 * Returns true if the hour index is considered PM.
 */
function _isPM(hours)
{
  return (hours >= 12);
}

/**
 * Internal utility.
 * Get the day in year value ('D') for the given time.
 * @param {Date} time the date object
 * @return {Number} the day in year value
 */
DateFormatUtils._getDayInYearNumber = function(time)
{
  // Bug 13940707 (KPALMER)
  // Before:
  // return "(Day in Year)";
  // After:
  var millisecsPerDay = 86400000;
  var janFirstThisYear = new Date(time.getFullYear(), 0, 1);
  var dayInYear = Math.ceil((time - janFirstThisYear) / millisecsPerDay);
  return dayInYear;
}

/**
 * Internal utility.
 * Get the number of days that belong to the first calendar week of a month.
 * @param {Number} firstDayOfWeekNumber this locale's first day of week, e.g. 0=Sun, 1=Mon
 * @param {Number} month1stDayOfWeekNumber the day of week for 1st of month
 */
DateFormatUtils._getNumberOfDaysInFirstCalendarWeekOfMonth = function(
  firstDayOfWeekNumber,
  month1stDayOfWeekNumber)
{
  // 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
  if (month1stDayOfWeekNumber >= firstDayOfWeekNumber)
    return 7 + firstDayOfWeekNumber - month1stDayOfWeekNumber;
  else
    return firstDayOfWeekNumber - month1stDayOfWeekNumber;
}

/**
 * Internal utility.
 * Get whether the first calendar week of the specified month matches week-month 1 based
 * on locale data. Week year numbers are non-zero positive numbers. Week month numbers are
 * non-negative (zero means the week is not part of the minimum full week).
 * @param {Number} fullYearNumber the year of the month to evaluate
 * @param {Number} monthIndex the month index to evaluate (e.g. 0 = Jan)
 * @param {LocaleSymbols} localeSymbols the LocaleSymbols for the current locale
 * @return {boolean} whether the first calendar week belongs to the week month
 */
DateFormatUtils._getWhetherFirstCalWeekMatchesWeekMonth1 = function(fullYearNumber, monthIndex, localeSymbols)
{
  var firstDayOfWeekNumber = localeSymbols.getFirstDayOfWeekNumber(); // 0 = Sun, 1 = Mon
  var minimalDaysInFirstWeekNumber = localeSymbols.getMinimalDaysInFirstWeekNumber();

  var janFirstDate = new Date(fullYearNumber, monthIndex, 1);
  var janFirstDayNumber = janFirstDate.getDay();

  var numberOfDaysInFirstCalWeekOfJan =
    DateFormatUtils._getNumberOfDaysInFirstCalendarWeekOfMonth(firstDayOfWeekNumber, janFirstDayNumber);

  return numberOfDaysInFirstCalWeekOfJan >= minimalDaysInFirstWeekNumber;
}

/**
 * Internal utility.
 * Get the first date object representing the first date of the first week that contains
 * days in the specified week year.
 * @param {Number} weekYear the week year to evaluate
 * @param {LocaleSymbols} localeSymbols the LocaleSymbols for the current locale
 * @return {Date} the first date object in January of the week year
 */
DateFormatUtils._getFirstDateOfFirstWeekOfWeekYear = function(weekYear, localeSymbols)
{
  if (DateFormatUtils._getWhetherFirstCalWeekMatchesWeekMonth1(weekYear, 0, localeSymbols))
  {
    // January 1st is in the first week of the week year. So now just get the date for the
    // first day in this particular week:
    return DateFormatUtils._getFirstDateOfWeekThatBelongsToThisDate(new Date(weekYear, 0, 1), localeSymbols);
  }
  else
  {
    // January 1st is in the last week of the previous week year. So now just get the
    // date for the first day in the week that follows this calendar week:
    return DateFormatUtils._getFirstDateOfWeekThatBelongsToThisDate(new Date(weekYear, 0, 8), localeSymbols);
  }
}

/**
 * Internal utility.
 * Get the first date of the week that belongs to the given date.
 * @param {Date} dateBelongingToWeek some date that belongs to the week
 * @param {LocaleSymbols} localeSymbols the LocaleSymbols for the current locale
 * @return {Date} the first date of the specified week
 */
DateFormatUtils._getFirstDateOfWeekThatBelongsToThisDate = function(dateBelongingToWeek, localeSymbols)
{
  var givenDay = dateBelongingToWeek.getDay();
  var firstDay = localeSymbols.getFirstDayOfWeekNumber(); // 0 = Sun, 1 = Mon
  for (var i = 0; i < 7; ++i)
  {
    var incrementedDay = firstDay + i;
    if (incrementedDay > 6)
      incrementedDay %= 7;
    if (givenDay == incrementedDay)
      break;
  }
  var distanceBetweenDays = i;
  var firstDate =
    new Date(
      dateBelongingToWeek.getFullYear(),
      dateBelongingToWeek.getMonth(),
      dateBelongingToWeek.getDate());
  firstDate.setDate(firstDate.getDate()-distanceBetweenDays);
  return firstDate;
}

/**
 * Internal utility.
 * Get the number of days (not necessarily a whole number) between the two given Date objects.
 * @param {Date} d1 the earlier date
 * @param {Date} d2 the later date
 * @return {Number} the number of days as a floating point number between d2 and d1 (negative if d1 is after d2)
 */
DateFormatUtils._getNumberOfDaysBetweenDates = function(d1, d2)
{
  // Date subtraction gives milliseconds so divide by:
  // - 1000 for ms per second
  // - 60 for seconds per minute
  // - 60 for minutes per hours
  // - 24 for hours per day
  // So millisecsPerDay = 86400000 = 1000*60*60*24
  return (d2-d1)/86400000;
}

/**
 * Internal utility.
 * Get the week of year value ('w') for the given time.
 * @param {Date} time the date object
 * @return {Number} the week of year value
 */
DateFormatUtils._getWeekOfYearNumber = function(time, localeSymbols)
{
  var calendarYear = time.getFullYear();
  var jan = 0; // month index
  var dec = 11; // month index
  var firstCalWeekOfThisJanMatchesWeekMonth1 =
    DateFormatUtils._getWhetherFirstCalWeekMatchesWeekMonth1(calendarYear, jan, localeSymbols);
  var firstDateOfLastCalWeekOfThisDec =
    DateFormatUtils._getFirstDateOfWeekThatBelongsToThisDate(new Date(calendarYear, dec, 31), localeSymbols);

  var dayInJanuary = (time.getMonth() == jan);
  var dayInDecember = (time.getMonth() == dec);
  var dayOfMonth = time.getDate();
  var inFirstCalWeek = false;
  if (dayInJanuary)
  {
    // January 1st is in the first week of the week year. So now just get the date for the
    // first day in this particular week:
    var firstDateOfFirstCalWeekOfThisJan =
      DateFormatUtils._getFirstDateOfWeekThatBelongsToThisDate(new Date(calendarYear, 0, 1), localeSymbols);
    inFirstCalWeek = DateFormatUtils._getNumberOfDaysBetweenDates(firstDateOfFirstCalWeekOfThisJan, time) < 7;
  }
  var inLastCalWeek =
    (dayInDecember && time.getTime() >= firstDateOfLastCalWeekOfThisDec.getTime());
  var beginningOfWeekYear;

  if (inFirstCalWeek)
  {
    if (firstCalWeekOfThisJanMatchesWeekMonth1)
    {
      // It belongs to the first week of the week year (1):
      return 1;
    }
    else
    {
      // It belongs to the last week of the previous week year (52 or 53):
      beginningOfWeekYear = DateFormatUtils._getFirstDateOfFirstWeekOfWeekYear(calendarYear - 1, localeSymbols);
    }
  }
  else if (inLastCalWeek)
  {
    var beginningOfNextWeekYear =
      DateFormatUtils._getFirstDateOfFirstWeekOfWeekYear(calendarYear + 1, localeSymbols);
    var partOfFirstWeekNextWeekYear = beginningOfNextWeekYear.getTime() <= time.getTime();
    if (partOfFirstWeekNextWeekYear)
    {
      // It belongs to the first week of the next week year (1):
      return 1;
    }
    else
    {
      // It belongs to the last week of the calendar year (52, 53):
      beginningOfWeekYear = DateFormatUtils._getFirstDateOfFirstWeekOfWeekYear(calendarYear, localeSymbols);
    }
  }
  else
  {
    // It belongs to some week in this week year:
    beginningOfWeekYear = DateFormatUtils._getFirstDateOfFirstWeekOfWeekYear(calendarYear, localeSymbols);
  }

  // Figure out the week number that the given time falls in based on a beginning date:
  return Math.ceil((1 + Math.floor(DateFormatUtils._getNumberOfDaysBetweenDates(beginningOfWeekYear, time)))/7) + "";
}

/**
 * Internal utility.
 * Get the week of month value ('W') for the given time.
 * @param {Date} time the date object
 * @return {Number} the week of year value
 */
DateFormatUtils._getWeekOfMonthNumber = function(time, localeSymbols)
{
  var fullYear = time.getFullYear();
  var monthIndex = time.getMonth();
  var firstDayThisMonth = new Date(fullYear, monthIndex, 1);
  var firstDayOfWeekNumber = localeSymbols.getFirstDayOfWeekNumber(); // 0 = Sun, 1 = Mon
  var firstDayNumber = firstDayThisMonth.getDay();
  var numberOfDaysInFirstCalWeek =
    DateFormatUtils._getNumberOfDaysInFirstCalendarWeekOfMonth(firstDayOfWeekNumber, firstDayNumber);

  var minimalDaysInFirstWeekNumber = localeSymbols.getMinimalDaysInFirstWeekNumber();
  var firstDateOfWeekContainingTheFirst =
    DateFormatUtils._getFirstDateOfWeekThatBelongsToThisDate(firstDayThisMonth, localeSymbols);
  var weekOfMonthNumber =
    Math.ceil((1 + Math.floor(DateFormatUtils._getNumberOfDaysBetweenDates(firstDateOfWeekContainingTheFirst, time)))/7);
  if (numberOfDaysInFirstCalWeek < minimalDaysInFirstWeekNumber)
  {
    // The first week is counted as 0 (not 1) so subtract 1
    --weekOfMonthNumber;
  }
  return weekOfMonthNumber + "";
}

/**
 * Internal utility.
 * Get the year value ('y') for the given time.
 * @param {Date} time the date object
 * @param {String} locale the locale string for the current locale
 * @return {Number} the year value
 */
DateFormatUtils._getYearNumber = function(time, locale)
{
  var year = time.getFullYear();

  // Trinidad-2013: Thai Buddhist Calendar is offset by 543 years
  if (locale == "th-th")
    year += _THAI_BUDDHIST_YEAR_OFFSET;

  return year;
}

/**
 * Internal utility.
 * Get the week year value ('Y') for the given time.
 * @param {Date} time the date object
 * @param {LocaleSymbols} localeSymbols the LocaleSymbols for the current locale
 * @param {String} locale the locale string for the current locale
 * @return {Number} the week year value
 */
DateFormatUtils._getWeekYearNumber = function(time, localeSymbols, locale)
{
  var year = DateFormatUtils._getYearNumber(time, locale);

   // Convert year to week year
  if (localeSymbols.isWeekDateSupported())
  {
    // The first day of the first week is the first day of the week year.
    //
    // A week year ('Y') is in sync with a WEEK_OF_YEAR ('w') cycle. All weeks
    // between the first and last weeks (inclusive) have the same week year value.
    // Therefore, the first and last days of a week year may have different calendar
    // year values.
    //
    // For example, January 1, 1998 is a Thursday. If getFirstDayOfWeek() is MONDAY
    // and getMinimalDaysInFirstWeek() is 4 (ISO 8601 standard compatible setting),
    // then week 1 of 1998 starts on December 29, 1997, and ends on January 4, 1998.
    // The week year is 1998 for the last three days of calendar year 1997. If,
    // however, getFirstDayOfWeek() is SUNDAY, then week 1 of 1998 starts on January
    // 4, 1998, and ends on January 10, 1998; the first three days of 1998 then are
    // part of week 53 of 1997 and their week year is 1997.
    //
    // Source:
    // http://docs.oracle.com/javase/7/docs/api/java/util/GregorianCalendar.html
    var weekOfYear = DateFormatUtils._getWeekOfYearNumber(time, localeSymbols);
    var monthIndex = time.getMonth();
    if (monthIndex == 0) // January
    {
      if (weekOfYear >= 52) // last week of previous week year
      {
        --year;
      }
    }
    else // not January
    {
      if (weekOfYear == 1) // first week of next week year
      {
        ++year;
      }
    }
  }
  
  return year;
}

/**
 * Internal utility.
 * Get the ISO-8601 time zone value ('X') for the given time.
 * @param {Date} time the date object
 * @param {Number} charCount the number of 'X' chars in the pattern
 * @return {String} the ISO-8601 time zone value
 */
DateFormatUtils._getIso8601TimeZone = function(time, charCount)
{
  // The number of pattern letters designates the format for both formatting and
  // parsing as follows:
  //   ISO8601TimeZone:
  //     OneLetterISO8601TimeZone -- +/-HH or Z
  //     TwoLetterISO8601TimeZone -- +/-HHmm or Z
  //     ThreeLetterISO8601TimeZone -- +/-HH:mm or Z
  //   OneLetterISO8601TimeZone:
  //     Sign TwoDigitHours
  //     Z
  //   TwoLetterISO8601TimeZone:
  //     Sign TwoDigitHours Minutes
  //     Z
  //   ThreeLetterISO8601TimeZone:
  //     Sign TwoDigitHours : Minutes
  //     Z
  // Other definitions are as for general time zones or RFC 822 time zones.
  // For formatting, if the offset value from GMT is 0, "Z" is produced. If the
  // number of pattern letters is 1, any fraction of an hour is ignored. For
  // example, if the pattern is "X" and the time zone is "GMT+05:30", "+05" is
  // produced.
  //
  // For parsing, "Z" is parsed as the UTC time zone designator. General time zones
  // are not accepted.
  //
  // If the number of pattern letters is 4 or more, IllegalArgumentException is
  // thrown when constructing a SimpleDateFormat or applying a pattern.
  if (charCount > 3)
  {
    return ""; // not supported
  }
  var timeZone;
  var tzString = _getTimeZoneOffsetArray(time, true);
  var tzHours = tzString[0];
  if (charCount == 1)
  {
    if ("+00" == tzHours || "-00" == tzHours)
      timeZone = "Z";
    else
      timeZone = tzString[0];
  }
  else // ZZ or ZZZ
  {
    var tzMinutes = tzString[1];
    if (("+00" == tzHours || "-00" == tzHours) && "00" == tzMinutes)
    {
      timeZone = "Z";
    }
    else // non-zero
    {
      timeZone = tzString[0];
      if (charCount == 3)
      {
        timeZone += ":";
      }
      timeZone += tzString[1];
    }
  }
  return timeZone;
}

/**
 * Internal utility.
 * Get the general time zone value ('z') for the given time.
 * @param {Date} time the date object
 * @return {String} the general time zone value
 */
DateFormatUtils._getGeneralTimeZone = function(time)
{
  var timeZone = "GMT";

  var offsetArray = _getTimeZoneOffsetArray(time, false);
  if (offsetArray)
  {
    // +/-HH:mm
    timeZone += offsetArray[0];
    timeZone += ":"
    timeZone += offsetArray[1];
  }
  return timeZone;
}

/**
 * Internal utility.
 * Get the general time zone value ('Z') for the given time.
 * @param {Date} time the date object
 * @return {String} the RCF-822 time zone value
 */
DateFormatUtils._getRcf822TimeZone = function(time, charCount)
{
  var timeZone;
  var offsetArray = _getTimeZoneOffsetArray(time, true);
  if (offsetArray)
  {
    // +/-HHmm
    timeZone = offsetArray[0];
    timeZone += offsetArray[1];
  }
  else
  {
    timeZone = "";
  }
  return timeZone;
}

/**
 * Internal utility.
 * Get a year or week year string from the given year number.
 * @param {Number} yearOrWeekYearNumber the year or week year
 * @param {Number} charCount the number of year pattern chars in the pattern
 * @return {String} the string representation of the year or week year
 */
DateFormatUtils._getYearString = function(yearOrWeekYearNumber, charCount)
{
  if (charCount == 1)
  {
    // Do no padding nor truncation:
    return "" + yearOrWeekYearNumber;
  }
  else
  {
    // truncate 2 digit years to that number of digits otherwise don't truncate
    var maxDigits = (charCount == 2) ? charCount : null;
    return _getPaddedNumber(yearOrWeekYearNumber, charCount, maxDigits);
  }
}

/**
 * Pad out a number with leading 0's to meet the minDigits digits or
 * truncate to meet the minDigits.
 * @param {Number} number the number to pad or truncate
 * @param {Number} minDigits null or the minimum number of digits
 * @param {Number} maxDigits null or the maximum number of digits
 * @return {String} the resulting string
 */
function _getPaddedNumber(number, minDigits, maxDigits)
{
  var stringNumber = number.toString();

  //
  // pad out any number strings that are too short
  //
  if (minDigits != null)
  {
    var addedDigits = minDigits - stringNumber.length;

    while (addedDigits > 0)
    {
      stringNumber = "0" + stringNumber;
      addedDigits--;
    }
  }

  //
  // truncate any number strings that are too long
  //
  if (maxDigits != null)
  {
    var extraDigits = stringNumber.length - maxDigits;

    if (extraDigits > 0)
    {
      stringNumber = stringNumber.substring(extraDigits,
                                            extraDigits + maxDigits);
    }
  }

  return stringNumber;
}


/**
 * External variable for TrDateTimeConverter. Maps locales to lists of
 * convenience patterns.
 */
var _CONVENIENCE_PATTERNS = null;

/**
 * Construct a TrDateTimeConverter with the specifed date pattern for
 * the specified locale.
 */
window.TrDateTimeConverter = function(
  pattern,
  locale,
  exampleString,
  type,
  messages)
{
  // for debugging
  this._class = "TrDateTimeConverter";
  this._exampleString = exampleString;
  this._type = type;
  this._messages = messages;
  this._offset = null;

  // save the Locale elements for the specified locale, or client locale
  // if no locale is specified
  this._localeSymbols = getLocaleSymbols(locale);

  // =-= bts need to change default pattern to match JDK
  if (pattern == null)
    pattern = this._localeSymbols.getShortDatePatternString();

  var patterns = this._initPatterns(pattern, locale);

  // Stash away the patterns for later use.
  this._pattern = patterns;

  // Use a fallback example string if necessary
  if (this._exampleString == null && patterns != null && patterns.length > 0)
    this._exampleString = patterns[0];

  this._locale = (locale != null) ? locale : getJavaLanguage(locale);
};

TrDateTimeConverter.prototype = new TrConverter();

TrDateTimeConverter.prototype.getFormatHint = function()
{
  //customized hint
  if (this._messages && this._messages["hint"])
  {
    return TrMessageFactory.createCustomMessage(
      this._messages["hint"],
      ""+this._exampleString);
  }
  else
  {
    //no customized hint
    var key = "org.apache.myfaces.trinidad.convert.DateTimeConverter." + this._type + "_HINT";
    return TrMessageFactory.createMessage(
      key,
      ""+this._exampleString);
  }
}

TrDateTimeConverter.prototype.getAsString = function(formatTime)
{
  //correct Date Time ?
  if (this._offset)
  {
    var min = formatTime.getMinutes();
    formatTime.setMinutes((+min) - parseInt(this._offset));
  }
  var stringHolder = new Object();
  stringHolder.value ="";

  var pattern = this._pattern;
  if (typeof pattern != "string")
    pattern = pattern[0];

  _doClumping(pattern,
              this._localeSymbols,
              this._locale,
              _subformat,
              formatTime,
              stringHolder);

  if (this._offset)
  {
    var gmtDiff = (((this._offset + formatTime.getTimezoneOffset()) * -1) / 60);
    if (parseInt(gmtDiff) > 0)
    {
      stringHolder.value = stringHolder.value + "+"
    }
    stringHolder.value = stringHolder.value + gmtDiff + ":00";
  }
  return stringHolder.value;
}

TrDateTimeConverter.prototype.setDiffInMins = function(offset)
{
  this._offset = offset;
}

TrDateTimeConverter.prototype.getDiffInMins = function()
{
  return this._offset;
}

TrDateTimeConverter.prototype.getLocaleSymbols = function()
{
  return this._localeSymbols;
}


/**
 * Parses a String into a Date using the current object's pattern. If the
 * parsing fails, undefined will be returned.
 */
TrDateTimeConverter.prototype.getAsObject  = function(parseString, label)
{
  // The following are from the javadoc for DateTimeConverter
  // If the specified String is null, return a null. Otherwise, trim leading and trailing whitespace before proceeding.
  // If the specified String - after trimming - has a zero length, return null.
  if (parseString == null)
    return null;

  parseString = TrFormatUtils.trim(parseString);
  if (parseString.length == 0)
    return null;

  var pattern = this._pattern;

  var invalidFormatMsg;
  var key = "org.apache.myfaces.trinidad.convert.DateTimeConverter.CONVERT_"+this._type;
  if (this._messages && this._messages["detail"])
  {
    invalidFormatMsg = _createCustomFacesMessage(TrMessageFactory.getSummaryString(key),
                                          this._messages["detail"],
                                          label,
                                          parseString,
                                          this._exampleString);
  }
  else
  {
    invalidFormatMsg = _createFacesMessage( key,
                                          label,
                                          parseString,
                                          this._exampleString);
  }

  var invalidDateMsg = _createFacesMessage ("org.apache.myfaces.trinidad.convert.DateTimeConverter.CONVERT_DATE_INVALID_DATE",
                                            label,
                                            parseString);

  if (typeof pattern == "string")
  {
    return this._simpleDateParseImpl(parseString,
                                pattern,
                                this._localeSymbols,
                                this._locale,
                                invalidFormatMsg,
                                invalidDateMsg);
  }
  else
  {
    var i;
    for (i = 0; i < pattern.length; i++)
    {
      try{
        var date = this._simpleDateParseImpl(parseString,
                                        pattern[i],
                                        this._localeSymbols,
                                        this._locale,
                                        invalidFormatMsg,
                                        invalidDateMsg);
        return date;
      }
      catch (e)
      {
        // Trinidad-1634: If the format is valid, but the date is invalid,
        // return that error instead of trying other formats.
        if (e.isDateInvalid)
          throw e;

        // if we're not on the last pattern try the next one,
        // but if we're on the last pattern, throw the exception
        if (i == pattern.length-1)
          throw e;
      }
    }
  }
}

TrDateTimeConverter.prototype._endsWith = function(value, suffix)
{
  var startPos = value.length - suffix.length;
  if (startPos < 0)
    return false;
  return (value.lastIndexOf(suffix, startPos) == startPos);
}

TrDateTimeConverter.prototype._initPatterns  = function(pattern, locale)
{
  // We need to build up an Array of all acceptable patterns,
  // which we'll stash away for later use. If we do lenient
  // parsing, then we may end up supporting a variety of patterns
  // that weren't passed in via the "pattern" arg. Previously,
  // if the "pattern" arg is itself an Array, we just tacked
  // any additional lentient patterns right into the "pattern"
  // Array. However, the "pattern" Array is actually referenced
  // from other locations, so we should avoid modifying this
  // array directly. Instead, we create our own "patterns"
  // Array and append all supported patterns into this Array.
  var patterns = new Array();

  // Array from which the patterns array will be constructed.
  var tmpPatterns = new Array();

  // If pattern is non-null, append it to the tmpPatterns array.
  if (pattern)
    tmpPatterns = tmpPatterns.concat(pattern);

  // At this point 'locale' is the value of the locale attribute; if 'locale' is
  // null, we should make sure to grab the same locale that was grabbed by getLocaleSymbols() (i.e.,getJavaLanguage)
  if (!locale)
    locale = getJavaLanguage(locale);

  // Make sure the static map of convenience patterns has been initialized.
  if (!_CONVENIENCE_PATTERNS)
    this._initConveniencePatterns();

  // see TRINIDAD-859
  var convPatterns = _CONVENIENCE_PATTERNS[locale];
  if (convPatterns)
    tmpPatterns = tmpPatterns.concat(convPatterns);

  // Add the tmp patterns and all their lenient pattern variants.
  var len = tmpPatterns.length;
  for (var c = 0; c < len; c++)
  {
    var convPattern = tmpPatterns[c];
    patterns[patterns.length] = convPattern;
    var baseCount = 1;

    // Bug 2002065:
    // Be forgiving of users who prefer a different separator and alternative
    // month styles. We are to be lenient by default with ADF Faces.

    // We should add all the leniency patterns for this default pattern first.
    // First add in replacements for month parsing.
    if (convPattern.indexOf('MMM') != -1)
    {
      patterns[patterns.length] = convPattern.replace(/MMM/g, 'MM');
      patterns[patterns.length] = convPattern.replace(/MMM/g, 'M');
      baseCount = 3;
    }

    // Now add support for all of the above with any of the separators below.
    // The separator is the same for all patterns since we only replaced month.
    var idx = patterns.length - baseCount;
    if (convPattern.indexOf('/') !=  - 1)
    {
      for (var i = idx; i < idx + baseCount; i++)
        patterns[patterns.length] = patterns[i].replace(/\//g, '-');

      for (var i = idx; i < idx + baseCount; i++)
        patterns[patterns.length] = patterns[i].replace(/\//g, '.');
    }
    else if (convPattern.indexOf('-') !=  - 1)
    {
      for (var i = idx; i < idx + baseCount; i++)
        patterns[patterns.length] = patterns[i].replace(/-/g, '/');

      for (var i = idx; i < idx + baseCount; i++)
        patterns[patterns.length] = patterns[i].replace(/-/g, '.');
    }
    else if (convPattern.indexOf('.') !=  - 1)
    {
      for (var i = idx; i < idx + baseCount; i++)
        patterns[patterns.length] = patterns[i].replace(/\./g, '-');

      for (var i = idx; i < idx + baseCount; i++)
        patterns[patterns.length] = patterns[i].replace(/\./g, '/');
    }
  }

  return patterns;
}

/**
 * Initialize the static map of convenience patterns. This should only be called
 * if _CONVENIENCE_PATTERNS is null (so that this map is recreated only when the
 * page is reloaded). All map entries MUST match those of the server map:
 * trinidad-api\src\main\java\org\apache\myfaces\trinidad\convert\DateTimeConverter.java->_CONVENIENCE_PATTERNS
 */
TrDateTimeConverter.prototype._initConveniencePatterns = function()
{
  _CONVENIENCE_PATTERNS = new Object();

  // All map entries added here MUST match the entries added to the server map:
  // trinidad-api\src\main\java\org\apache\myfaces\trinidad\convert\DateTimeConverter.java->_CONVENIENCE_PATTERNS
  _CONVENIENCE_PATTERNS.en_US = ["MMMM dd, yy", "MMMM/dd/yy", "dd-MMMM-yy"];
}

TrDateTimeConverter.prototype._simpleDateParseImpl = function(
  parseString,
  parsePattern,
  localeSymbols,
  locale,
  invalidFormatMsg,
  invalidDateMsg)
{
  // When a pattern (e.g. dd.MM.yyyy HH:mm' Uhr ') requires a whitespace
  // at the end, we should honor that. As the JSF spec (see http://bit.ly/kTelf)
  // wants the converter to trim leading/trailing whitespace, we have to append
  // one, if the pattern requires it at the end...
  if (parseString == null)
    return;
  if (this._endsWith(parsePattern, " '"))
  {
    parseString += " ";
  }

  var parseContext = new Object();
  parseContext.currIndex = 0;
  parseContext.parseString = parseString;
  parseContext.parsedHour = null;
  parseContext.parsedMinutes = null;
  parseContext.parsedSeconds = null;
  parseContext.parsedMilliseconds = null;
  parseContext.isPM = false;
  parseContext.parsedBC = false;
  parseContext.parsedFullYear = null;
  parseContext.parsedWeekYear = null;
  parseContext.parsedMonth = null;
  parseContext.parsedDate = null;
  parseContext.hourOffset = null;
  parseContext.minOffset = null;
  parseContext.parsedDayOfYear = null;

  var parsedTime = new Date(0);
  parsedTime.setDate(1);

  /* TODO consider adopting similar rules to java.util.Calendar for ambiguous scenarios
          instead of simply giving up and not processing an edit. From:
          http://docs.oracle.com/javase/7/docs/api/java/util/Calendar.html

    When computing a date and time from the calendar fields, there may be insufficient information for the computation (such as only year and month with no day of month), or there may be inconsistent information (such as Tuesday, July 15, 1996 (Gregorian) -- July 15, 1996 is actually a Monday). Calendar will resolve calendar field values to determine the date and time in the following way.
  If there is any conflict in calendar field values, Calendar gives priorities to calendar fields that have been set more recently. The following are the default combinations of the calendar fields. The most recent combination, as determined by the most recently set single field, will be used.

  For the date fields:

   YEAR + MONTH + DAY_OF_MONTH
   YEAR + MONTH + WEEK_OF_MONTH + DAY_OF_WEEK
   YEAR + MONTH + DAY_OF_WEEK_IN_MONTH + DAY_OF_WEEK
   YEAR + DAY_OF_YEAR
   YEAR + DAY_OF_WEEK + WEEK_OF_YEAR
 
  For the time of day fields:
   HOUR_OF_DAY
   AM_PM + HOUR
 
  If there are any calendar fields whose values haven't been set in the selected field combination, Calendar uses their default values. The default value of each field may vary by concrete calendar systems. For example, in GregorianCalendar, the default of a field is the same as that of the start of the Epoch: i.e., YEAR = 1970, MONTH = JANUARY, DAY_OF_MONTH = 1, etc.

  Note: There are certain possible ambiguities in interpretation of certain singular times, which are resolved in the following ways:

  23:59 is the last minute of the day and 00:00 is the first minute of the next day. Thus, 23:59 on Dec 31, 1999 < 00:00 on Jan 1, 2000 < 00:01 on Jan 1, 2000.
  Although historically not precise, midnight also belongs to "am", and noon belongs to "pm", so on the same day, 12:00 am (midnight) < 12:01 am, and 12:00 pm (noon) < 12:01 pm
  */

  // parse the time
  if (_doClumping(parsePattern,
                  localeSymbols,
                  locale,
                  _subparse,
                  parseContext,
                  parsedTime))
  {
    if (parseString.length != parseContext.currIndex)
    {
      parseContext.parseException = new TrConverterException (invalidFormatMsg);
      throw parseContext.parseException;
    }

    // give up instantly if we encounter timezone because
    // the client can never correctly convert to a milliseconds
    // value accurately due to lack of timezone and Daylight savings
    // rules in Javascript
    // Undefined is used in _multiValidate as a flag to skip
    // validation and avoid required errors (which returning null would trigger)
    if ((parseContext.hourOffset != null) ||
       (parseContext.minOffset != null))
    {
      // Bug 18712819 - convertDateTime on inputText silently fails with time zones
      return undefined;
    }

    // Set the parsed year, if any; adjust for AD vs. BC
    var year = parseContext.parsedFullYear;
    if (year != null)
    {
      // convert year to BC
      if (parseContext.parsedBC)
      {
        year = _getADEra().getFullYear() - year;
      }

      parsedTime.setFullYear(year);
      parseContext.parsedFullYear = year;
    }
    else
    {
      // TODO try to figure out the full year from parsedWeekYear (if we have enough
      //      context; looks like parsedDayOfYear needs parsedFullYear so might have a
      //      cyclical dependency)
    }

    // Some placeholders require information from other, if available. Process those here.
    // e.g. 'D' - day of year, depends if the year is a leap year.
    if (parseContext.parsedDayOfYear != null)
    {
      // Give precedence to date and month, process day of year only if they are not set
      if ((parseContext.parsedDate == null) || (parseContext.parsedMonth == null))
      {
        // If parse string does not contain year, default to current year
        //
        // Thai Buddhist Calendar uses the same months as Gregorian, so we use the Gregorian equivalent of the Thai
        // year (stored in parsedFullYear) to look up the month array
        var year = (parseContext.parsedFullYear != null) ? parseContext.parsedFullYear : new Date().getFullYear();
        var lastDayOfYearByMonArray = _isLeapYear (year) ? _GREGORIAN_MONTHS_LASTDAYOFYEAR_LEAP:
                                                    _GREGORIAN_MONTHS_LASTDAYOFYEAR_NONLEAP;

        var monIndx = 0;
        for (monIndx = 0; monIndx < 12; monIndx++)
        {
          if (parseContext.parsedDayOfYear <= lastDayOfYearByMonArray[monIndx])
            break;
        }
        parseContext.parsedMonth = monIndx;

        // For the first month, date and day_of_year are the same
        if (monIndx == 0)
          parseContext.parsedDate = parseContext.parsedDayOfYear;
        else
          parseContext.parsedDate = (parseContext.parsedDayOfYear - lastDayOfYearByMonArray [monIndx - 1]);
      }
    }

    // Set the parsed month, if any
    var month = parseContext.parsedMonth;
    if (month != null)
      parsedTime.setMonth(month);

    // Set the parsed day-of-month, if any
    var date = parseContext.parsedDate;
    if (date != null)
      parsedTime.setDate(date);

    // Set the parsed hour, if any. Adjust for AM vs. PM
    var hour = parseContext.parsedHour;
    if (hour != null)
    {
      if (parseContext.isPM && (hour < 12))
      {
        hour += 12;
      }

      parsedTime.setHours(hour);
      parseContext.parsedHour = hour;
    }
    else
    {
      parsedTime.setHours(0);
      parseContext.parsedHour = 0;
    }

    // Set the parsed minutes, if any
    var minutes = parseContext.parsedMinutes;
    if (minutes != null)
      parsedTime.setMinutes(minutes);
    else
      parsedTime.setMinutes(0);

    // Set the parsed seconds, if any
    var seconds = parseContext.parsedSeconds;
    if (seconds != null)
      parsedTime.setSeconds(seconds);
    else
      parsedTime.setSeconds(0);

    // Set the parsed milliseconds, if any
    var milliseconds = parseContext.parsedMilliseconds;
    if (milliseconds != null)
      parsedTime.setMilliseconds(milliseconds);
    else
      parsedTime.setMilliseconds(0);

    // so far we have done a lenient parse
    // now we check for strictness
    if (!_isStrict(parseContext, parsedTime))
    {
      // Trinidad-1634: If the format is correct, but the date doesn't
      // match, throw a different error.
      parseContext.parseException = new TrConverterException(invalidDateMsg);
      parseContext.parseException.isDateInvalid = true;
      throw parseContext.parseException;
    }

    //correct Date Time ?
    if (this._offset)
    {
      var min = parsedTime.getMinutes();
      parsedTime.setMinutes((+min) + parseInt(this._offset));
    }

    return parsedTime;
  }
  else
  {
    // failure
     parseContext.parseException = new TrConverterException (invalidFormatMsg);
     throw parseContext.parseException;
  }
}

/* Used by the automated testing framework. */
TrDateTimeConverter._utils = DateFormatUtils;

/**
 * Internal test for week of year.
 * @param {string} locale the lowecase locale to test, e.g. "en-us".
 * @return {Promise} a promise that when resolved will provide the test result message for the given locale
 */
DateFormatUtils._testWeekOfYear = function(locale)
{
  return new adf.mf.internal.BasePromise(
    function(resolve, reject)
    {
      DateFormatUtils._testForLocale(locale).then(
        function (localeInfo)
        {
          var localeSymbols = localeInfo[0];
          var loadedLocale = localeInfo[1];
          var localeList = localeInfo[2];
          var msg = [];
          msg.push("'w' ");

          msg.push(" -- ");
          msg.push(loadedLocale);
          msg.push(" of [");
          msg.push(localeList);
          msg.push("], fdow=");
          msg.push(localeSymbols.getFirstDayOfWeekNumber());
          msg.push(", mdfw=");
          msg.push(localeSymbols.getMinimalDaysInFirstWeekNumber());

          var jan = 0;
          var dec = 11;
          _appendWeekOfYearTestData(msg, localeSymbols, 1997, dec, 25);
          _appendWeekOfYearTestData(msg, localeSymbols, 1997, dec, 26);
          _appendWeekOfYearTestData(msg, localeSymbols, 1997, dec, 27);
          _appendWeekOfYearTestData(msg, localeSymbols, 1997, dec, 28);
          _appendWeekOfYearTestData(msg, localeSymbols, 1997, dec, 29);
          _appendWeekOfYearTestData(msg, localeSymbols, 1997, dec, 30);
          _appendWeekOfYearTestData(msg, localeSymbols, 1997, dec, 31);
          _appendWeekOfYearTestData(msg, localeSymbols, 1998, jan, 1);
          _appendWeekOfYearTestData(msg, localeSymbols, 1998, jan, 2);
          _appendWeekOfYearTestData(msg, localeSymbols, 1998, jan, 3);
          _appendWeekOfYearTestData(msg, localeSymbols, 1998, jan, 4);
          _appendWeekOfYearTestData(msg, localeSymbols, 1998, jan, 5);
          _appendWeekOfYearTestData(msg, localeSymbols, 1998, jan, 6);
          _appendWeekOfYearTestData(msg, localeSymbols, 1998, jan, 7);

          resolve(msg.join(""));
        },
        function (msg)
        {
          resolve(msg);
        });
    });
};

/**
 * Internal test for patterns.
 * @param {Object} localeInfo the object passed into the resolver of _testForLocale
 * @param {string} pattern the format pattern to use
 * @param {string} date the date to use
 * @return {string} result of the pattern applied to the date with the given localeInfo
 */
DateFormatUtils._testPattern = function(localeInfo, pattern, date)
{
  var localeSymbols = localeInfo[0];
  var locale = localeInfo[1];
  var resultHolder = new Object();
  resultHolder.value = "";
  _doClumping(pattern, localeSymbols, locale, _subformat, date, resultHolder);
  return resultHolder.value;
};

/**
 * Get test data for "week of year".
 * @param {Array<string>} msg the message array to push onto
 * @param {LocaleSymbols} localeSymbols the LocaleSymbols to test
 * @param {number} year the full year to test
 * @param {number} monthIndex the month index to test
 * @param {number} date the day of month to test
 */
function _appendWeekOfYearTestData(
  msg,
  localeSymbols,
  year,
  monthIndex,
  date)
{
  var englishAbbrWeekdays = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];
  var dateObj = new Date(year, monthIndex, date);
  var dayOfWeek = dateObj.getDay();
  msg.push(",\n");
  msg.push(englishAbbrWeekdays[dayOfWeek]);
  msg.push(" ");
  msg.push(year);
  msg.push(".");
  msg.push(monthIndex + 1);
  msg.push(".");
  msg.push(date);
  msg.push(" = ");
  msg.push(DateFormatUtils._getWeekOfYearNumber(dateObj, localeSymbols));
  msg.push(" [fdo 1st w=");
  var firstDayOfWeek =
    DateFormatUtils._getFirstDateOfWeekThatBelongsToThisDate(new Date(year, 0, 1), localeSymbols);
  msg.push(englishAbbrWeekdays[firstDayOfWeek.getDay()]);
  msg.push(" ");
  msg.push(firstDayOfWeek.getFullYear());
  msg.push(".");
  msg.push(firstDayOfWeek.getMonth() + 1);
  msg.push(".");
  msg.push(firstDayOfWeek.getDate());
  msg.push("]");
}
