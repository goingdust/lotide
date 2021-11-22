const assertEqual = function(actual, expected) {
  const pass = 0x2705;
  const fail = 0x274C;
  
  if (actual === expected) {
    return console.log(`${pass}${pass}${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${fail}${fail}${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");