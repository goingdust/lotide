const assertEqual = function(actual, expected) {
  const pass = '✅✅✅';
  const fail = '❌❌❌';
  
  if (actual === expected) {
    return console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arg1, arg2) {
  let equality;
  let biggerArray;
  let smallerArray;
  
  if (arg1.length >= arg2.length) {
    biggerArray = arg1;
    smallerArray = arg2;
  } else {
    biggerArray = arg2;
    smallerArray = arg1;
  }
  for (let i = 0; i < biggerArray.length; i++) {
    if (biggerArray[i] === smallerArray[i]) {
      equality = true;
    } else {
      return false;
    } 
  }
  return equality;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([45, 50], [40, 50]), false);