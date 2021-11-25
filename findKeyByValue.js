const assertEqual = function(actual, expected) {
  const pass = '✅✅✅';
  const fail = '❌❌❌';
  
  if (actual === expected) {
    return console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (const property in object) {
    if (value === object[property]) {
      return property;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'), 'comedy');
