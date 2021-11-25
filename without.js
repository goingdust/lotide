const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return console.log('✅✅✅ Assertion Passed: Array #1 === Array #2');
  } else {
    return console.log('❌❌❌ Assertion Failed: Array #1 !== Array #2');
  }
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

const without = function(source, itemstoRemove) {
  let matchedItems = [];

  sourceCursor: for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemstoRemove.length; j++) {
      if (source[i] === itemstoRemove[j]) {
        continue sourceCursor;
      }
    }
    matchedItems.push(source[i]);
  }
  return matchedItems;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']);
assertArraysEqual(without(['hello', 'how', 'are', 'you'], ['I\'m', 'you']), ['hello', 'how', 'are']);
