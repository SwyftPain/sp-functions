## Swyft Functions

Install like:
``npm i swyft-functions``

Define in your project any of the functions in the following way:
```js
const { onlyLetters, time, capitalizeFirst, onlyNumbers, timeformat } = require('swyft-functions');
```

There is JS-DOC for each function explaining what they are doing.

In short:

```js
onlyLetters(arg);
```
Returns only letters from an array.

```js
time(array);
```
Returns time, for example if your array contained "2M 5S", it would return "2m and 5s".

```js
capitalizeFirst(str);
```
Capitalizes the first letter of the first word in the string.

```js
onlyNumbers(arg);
```
Returns only numbers from an array

```js
timeformat(array);
```
Returns time as an object, such as:
```js
{ day: 1, hour: 2, minute: 3, second: 4 }
```

```js
random(min, max);
```
Returns random number between min and max values

```js
formatter(countryCode, style, currency);
```
Returns formatted currency or percentage

```js
percentage(partialValue, totalValue);
```
Returns the percentage of the total value compared to the partial value

```js
anyMentions(message);
```
Returns boolean indicating whether the member is mentioned in a discord message

```js
theuser(message, mention);
```
Returns the user object with properties of id, tag, username, discriminator and avatar

```js
ifempty(string, newline);
```
Checks whether the value of a string is empty and ``newline`` is used to tell it whether to return a new line after the empty string or not.
It is not a boolean, if a value of variable does not exist, will return an empty string, otherwise will return the string that was passed to the constructor.

```js
embedError(message);
embedSuccess(message);
embedInfo(message);
embedWarn(message);
```
Return embed objects with proper colors and titles and pass the message property as the embed description method.