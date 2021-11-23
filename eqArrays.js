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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);