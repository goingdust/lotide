const assertEqual = function(actual, expected) {
  const pass = 0x2705;
  const fail = 0x274C;
  
  if (actual === expected) {
    return console.log(`${pass}${pass}${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${fail}${fail}${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");