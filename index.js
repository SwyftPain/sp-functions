/**
 * Filters an array to return only elements that are strings
 * @param {array} array - The array to filter
 * @returns {string} The string elements of the array, joined by a space
 * @example
 * ```js
 * const array = [1, 2, 3, 4, "hi", "there"];
 * const letters = onlyLetters(array);
 * console.log(letters); // "hi there"
 * ```
 */
function onlyLetters(array) {
    let arr2 = [];
    for (let i = 0; i < array.length; i++) {
      if (/[a-z]/.test(array[i])) {
        // you can use regex instead of all characters
        arr2.push(array[i]);
      }
    }
    return arr2.join(" ");
  }
  
  
  /**
   * Formats a string of time in a human-readable way, with the largest unit first
   * @param {array} array - The array of time elements (e.g. ["1D", "2H", "3M", "4S"])
   * @returns {string} The formatted time string, or "Permanently" if the array contains the string "T"
   * @example
   * ```js
   * const test =  "5H 9M";
   * const response = time(test);
   * console.log(response); // "5h and 9m"
   * ```
   */
  function time(array) {
    const str = array.join(" ");
    // days
    const day_ = str.substring(0, str.lastIndexOf("D"));
    const daytoarray = day_.split(" ");
    const day = daytoarray.slice(-1).pop();
    // hours
    const hour_ = str.substring(0, str.lastIndexOf("H"));
    const hourtoarray = hour_.split(" ");
    const hour = hourtoarray.slice(-1).pop();
    // minutes
    const min_ = str.substring(0, str.lastIndexOf("M"));
    const mintoarray = min_.split(" ");
    const minute = mintoarray.slice(-1).pop();
    // seconds
    const sec_ = str.substring(0, str.lastIndexOf("S"));
    const sectoarray = sec_.split(" ");
    const second = sectoarray.slice(-1).pop();
    // non timed
    const nt_ = str.substring(0, str.lastIndexOf("T"));
    const nttoarray = nt_.split(" ");
    var nt = nttoarray.slice(-1).pop();
    if (nt_) {
      nt = nttoarray.slice(-1).pop() + 999999999 * 1000;
    }
    // add all in an object
    const time = [];
    if (day) time.push(day + "d");
    if (hour) time.push(hour + "h");
    if (minute) time.push(minute + "m");
    if (second) time.push(second + "s");
    if (nt) time.push("Permanently");
    var check = "";
    if (
      !isNaN(day) &&
      !isNaN(hour) &&
      !isNaN(minute) &&
      !isNaN(second) &&
      time[1]
    ) {
      let last = time.pop();
      const thetime = time.join(", ");
      check = thetime + " and " + last;
    } else if (!isNaN(day) && !isNaN(hour) && !isNaN(minute) && !isNaN(second)) {
      const thetime = time.join(", ");
      check = thetime;
    } else if (!isNaN(nt)) {
      const thetime = time.join(", ");
      check = thetime;
    } else {
      check = false;
    }
    return check;
  }
  
  /**
   * Converts an array of time elements (e.g. ["1D", "2H", "3M", "4S"]) into an object with keys for each unit of time
   * @param {array} array - The array of time elements
   * @returns {object} An object with keys for "day", "hour", "minute", and "second"
   * @example
   * ```js
   * const array = ["1D", "2H", "3M", "4S"];
   * const time = timeformat(array);
   * console.log(time); // { day: 1, hour: 2, minute: 3, second: 4 }
   * ```
   */
  function timeformat(array) {
    const str = array.join(" ");
    // days
    const day_ = str.substring(0, str.lastIndexOf("D"));
    const daytoarray = day_.split(" ");
    const day = daytoarray.slice(-1).pop();
    // hours
    const hour_ = str.substring(0, str.lastIndexOf("H"));
    const hourtoarray = hour_.split(" ");
    const hour = hourtoarray.slice(-1).pop();
    // minutes
    const min_ = str.substring(0, str.lastIndexOf("M"));
    const mintoarray = min_.split(" ");
    const minute = mintoarray.slice(-1).pop();
    // seconds
    const sec_ = str.substring(0, str.lastIndexOf("S"));
    const sectoarray = sec_.split(" ");
    const second = sectoarray.slice(-1).pop();
    // non timed
    const nt_ = str.substring(0, str.lastIndexOf("T"));
    const nttoarray = nt_.split(" ");
    const nt = nttoarray.slice(-1).pop();
    // add all in an object
    const time = {};
    if (day) time.day = day;
    if (hour) time.hour = hour;
    if (minute) time.minute = minute;
    if (second) time.second = second;
    if (nt) time.time = nt;
    return time;
  }
  
  /**
   * Capitalizes the first letter of a string
   * @param {string} str - The string to capitalize
   * @returns {string} The original string with the first letter capitalized
   * @example
   * ```js
   * const test =  "hello world";
   * const response = capitalizeFirst(test);
   * console.log(response); // "Hello world"
   * ```
   */
  const capitalizeFirst = function (str) {
    const splitStr = str.toLowerCase().split(" ");
    splitStr[0] = splitStr[0].charAt(0).toUpperCase() + splitStr[0].slice(1);
    // Directly return the joined string
    return splitStr.join(" ");
  };
  
  /**
   * Filters an array to return only elements that are numbers
   * @param {array} array - The array to filter
   * @returns {string} The numeric elements of the array, joined by a space
   * @example
   * ```js
   * const array = [1, 2, 3, 4, "hi", "there"];
   * const numbers = onlyNumbers(array);
   * console.log(numbers); // "1 2 3 4"
   * ```
   */
  function onlyNumbers(array) {
    let arr2 = [];
    for (let i = 0; i < array.length; i++) {
      if (/[0-9]/.test(array[i])) {
        // you can use regex instead of all characters
        arr2.push(array[i]);
      }
    }
    return arr2.join(" ");
  }
  
  module.exports = {
    onlyLetters: onlyLetters,
    time: time,
    capitalizeFirst: capitalizeFirst,
    onlyNumbers: onlyNumbers,
    timeformat: timeformat,
  };