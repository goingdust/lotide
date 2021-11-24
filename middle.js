const eqArrays = function (arg1, arg2) {
  let equality;
  
  for (let i = 0; i < arg1.length; i++) {
    for (let j = 0; j < arg2.length; j++) {
      if (i === j && arg1[i] === arg2[j]) {
        equality = true;
      } else {
        equality = false;
      }
    } 
  }
  return equality;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    return console.log('✅✅✅ Assertion Passed: Array #1 === Array #2');
  } else {
    return console.log('❌❌❌ Assertion Failed: Array #1 !== Array #2');
  }
};

const middle = function (array) {
  const middleElements = [];
  const middleIndex = parseInt(array.length / 2);
  
  if (array.length < 2) {
    return [];
  } else if (array.length % 2 === 0) {
    middleElements.push(array[middleIndex - 1]);
  }
  middleElements.push(array[middleIndex]);
  
  return middleElements;
};

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);