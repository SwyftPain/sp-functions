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