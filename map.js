const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callbackFn) {
  const results = [];
  for (const item of array) {
    results.push(callbackFn(item));
  }
  return results;
};

const eqArrays = function(arg1, arg2) {
  if (arg1.length !== arg2.length) {
    return false;
  }
  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] !== arg2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return console.log('✅✅✅ Assertion Passed: Array #1 === Array #2');
  } else {
    return console.log('❌❌❌ Assertion Failed: Array #1 !== Array #2');
  }
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word.length > 3);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, [true, true, false, true, false]);