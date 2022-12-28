const { EasyEmbed } = require("sp-easyembed");

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

/**
 *
 * @param {number} partialValue the amount you have at the moment
 * @param {number} totalValue The maximum amount to compare it to
 * @example
 * ```js
 * const xp = 50;
 * const xpneeded = 200;
 * console.log(percentage(xp,xpneeded)) // 25
 * ```
 * @returns {number} percentage of total amount from partialValue to totalValue
 */
const percentage = (partialValue, totalValue) =>
  (100 * partialValue) / totalValue;

/**
 * Formats a number according to the specified country code, style, and currency.
 *
 * @param {string} countryCode - The country code to use for formatting.
 * @param {string} style - The style to use for formatting. Valid values are 'decimal', 'currency', or 'percent'.
 * @param {string} currency - The currency to use for formatting.
 * @return {Intl.NumberFormat} The formatted number.
 *
 * @example
 * const formatter = formatter('en-US', 'currency', 'USD', items.coins);
 * formatter.format(12345.67); // => '$12,345.67'
 *
 * @example
 * const formatter = formatter('de-DE', 'decimal', 'EUR', items.coins);
 * formatter.format(12345.67); // => '12.345,67'
 *
 * @example
 * const formatter = formatter('ja-JP', 'percent', 'JPY', items.coins);
 * formatter.format(0.5); // => '50%'
 */
const formatter = function (countryCode, style, currency = null, variable) {
  let formatStyle;
  switch (style) {
    case "decimal":
      formatStyle = { style: "decimal" };
      break;
    case "currency":
      formatStyle = { style: "currency", currency: currency };
      break;
    case "percent":
      formatStyle = { style: "percent" };
      break;
    default:
      throw new Error(
        'Invalid style specified. Valid styles are "decimal", "currency", or "percent".'
      );
  }
  const format = new Intl.NumberFormat(countryCode, formatStyle);
  return format.format(variable);
};

/**
 *
 * @param {number} min minimum number
 * @param {number} max maximum number
 * @example
 * ```js
 * const coinGenerator = random(1,5);
 * ```
 * @returns {number} random number between min and max value
 */
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/**
 *
 * @remarks This checks if any user is mention, if yes, returns true otherwise returns false
 * @example
 * ```ts
 * const mentions = anyMentions(message);
 * const response = mentions ? true : false;
 * ```
 * @param {Message} message Pass the message object to check for mentions
 * @returns {boolean} true if the message contains a mention
 */
const anyMentions = (message) =>
  message.mentions.users.first() ? true : false;

/**
 *
 * @param {Message} message Pass the message object to check for mentions
 * @param {Boolean} mention Check if mention should be present
 * @example
 * ```ts
 * const user = theuser(Message, true);
 * ```
 * This will return the user object with the following properties:
 * - `id`: The user id
 * - `tag`: The tag (user#discriminator)
 * - `username`: The username (display name)
 * - `discriminator`: The discriminator (#XXXX)
 * - `avatar`: The url of the avatar
 * @example
 * You can access using:
 * ```ts
 * user.id
 * ```
 * @returns {parameter} user object
 */
const theuser = function (message, mention = false) {
  if (mention) {
    var user = {
      id: message.mentions.users.first().id,
      tag: message.mentions.users.first().tag,
      username: message.mentions.users.first().username,
      discriminator: message.mentions.users.first().discriminator,
      avatar: message.mentions.users
        .first()
        .displayAvatarURL({ dynamic: true, size: 64 }),
    };
    return user;
  } else {
    var user = {
      id: message.author.id,
      tag: message.author.tag,
      username: message.author.username,
      discriminator: message.author.discriminator,
      avatar: message.author.displayAvatarURL({
        dynamic: true,
        size: 64,
      }),
    };
    return user;
  }
};

/**
 *
 * @remarks If empty object is passed, it will return null or undefined
 * @param {var} callback Pass the object to check if empty
 * @param {Boolean} newline Should a new line be added after the message
 * @example
 * ```ts
 * const check = ifempty(user.mentions, false);
 * ```
 * @returns {string} a string if available
 */
const ifempty = function (callback = " ", newline = false) {
  if (callback.length < 1) {
    var a = " ";
    return a;
  } else if (callback.length > 0 && !newline) {
    var a = callback;
    return a;
  } else if (callback.length > 0 && newline) {
    var a = callback + " ";
    return a;
  } else {
    var a = callback.length < 1 ? " " : callback;
    return a;
  }
};

/**
 *
 * @param {string} description The message to show in an embed
 * @example
 * ```js
 * const embed = embedError("Error");
 * message.channel.send({embeds: [embed]})
 * ```
 * @returns {embed} Embed with a red embed color and "Error" in the title
 */
const embedError = function (description) {
  const embed = new EasyEmbed();
  embed.setTitle("Error");
  embed.setDescription(description);
  embed.setColor("Red");
  return embed;
};

/**
 *
 * @param {string} description The message to show in an embed
 * @example
 * ```js
 * const embed = embedSuccess("Success");
 * message.channel.send({embeds: [embed]})
 * ```
 * @returns {embed} Embed with a green embed color and "Success" in the title
 */
const embedSuccess = function (description) {
  const embed = new EasyEmbed();
  embed.setTitle("Success");
  embed.setDescription(description);
  embed.setColor("Green");
  return embed;
};

/**
 *
 * @param {string} description The message to show in an embed
 * @example
 * ```js
 * const embed = embedInfo("Info");
 * message.channel.send({embeds: [embed]})
 * ```
 * @returns {embed} Embed with a yellow embed color and "Info" in the title
 */
const embedInfo = function (description) {
  const embed = new EasyEmbed();
  embed.setTitle("Info");
  embed.setDescription(description);
  embed.setColor("Yellow");
  return embed;
};

/**
 *
 * @param {string} description The message to show in an embed
 * @example
 * ```js
 * const embed = embedWarn("Warning");
 * message.channel.send({embeds: [embed]})
 * ```
 * @returns {embed} Embed with an orange embed color and "Warning" in the title
 */
const embedWarn = function (description) {
  const embed = new EasyEmbed();
  embed.setTitle("Warning");
  embed.setDescription(description);
  embed.setColor("Orange");
  return embed;
};

module.exports = {
  onlyLetters: onlyLetters,
  time: time,
  capitalizeFirst: capitalizeFirst,
  onlyNumbers: onlyNumbers,
  timeformat: timeformat,
  random: random,
  formatter: formatter,
  percentage: percentage,
  anyMentions: anyMentions,
  theuser: theuser,
  ifempty: ifempty,
  embedError: embedError,
  embedSuccess: embedSuccess,
  embedInfo: embedInfo,
  embedWarn: embedWarn,
};
