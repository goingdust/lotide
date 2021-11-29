const assertEqual = function(actual, expected) {
  const pass = '🐳🐳🐳';
  const fail = '🤬🤬🤬';
  
  if (actual === expected) {
    return console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;