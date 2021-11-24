const assertEqual = function(actual, expected) {
  const pass = '✅✅✅';
  const fail = '❌❌❌';
  
  if (actual === expected) {
    return console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(stringToCount) {
  const results = {};
  const stringWithoutSpace = stringToCount.split(' ').join('');

  for (const letter of stringWithoutSpace) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

const result1 = countLetters('lighthouse labs');

console.log(countLetters('lighthouse labs'));
assertEqual(result1['l'], 2);