# select-keys [![Build Status](https://secure.travis-ci.org/mmalecki/select-keys.png)](http://travis-ci.org/mmalecki/select-keys)
Select certain keys from an object

## Installation

    npm install select-keys

## Usage
```js
var selectKeys = require('select-keys');
selectKeys({ a: 42, b: 'foo', c: 1337 }, ['a', 'c']); // => { a: 42, c: 1337 }
```
