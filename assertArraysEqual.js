const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqArrays(actual, expected)) {
    return console.log(`🐳🐳🐳 ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`🤬🤬🤬 ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertArraysEqual;