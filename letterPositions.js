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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return console.log('✅✅✅ Assertion Passed: Array #1 === Array #2');
  } else {
    return console.log('❌❌❌ Assertion Failed: Array #1 !== Array #2');
  }
};

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] && sentence[i] !== 0) {
      results[sentence[i]].push(i);
    } else if (sentence[i] !== ' ') {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

const result1 = letterPositions('lighthouse labs');

console.log(letterPositions('lighthouse labs'));
assertArraysEqual(letterPositions('lighthouse labs').l, [0, 11]);