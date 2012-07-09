var assert = require('assert'),
    selectKeys = require('../');

assert.deepEqual(selectKeys({ a: 42, b: 'foo', c: 1337 }, ['a', 'c']), { a: 42, c: 1337 });
