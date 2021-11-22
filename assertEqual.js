const assertEqual = function(actual, expected) {
  const pass = 0x2705;
  const fail = 0x274C;
  
  if (actual === expected) {
    return console.log(`${pass}${pass}${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${fail}${fail}${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('blue', 'blue');
assertEqual(4, 5);