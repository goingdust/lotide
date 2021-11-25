const assertEqual = function(actual, expected) {
  const pass = '✅✅✅';
  const fail = '❌❌❌';
  
  if (actual === expected) {
    return console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(results1, 'noma');

tvShows = {
  'Sex And The City': { cast: 4 },
  'The Sopranos': { cast: 1 },
  'Game of Thrones': { cast: 4},
  'Seinfeld': { cast: 1},
  'The Witcher': { cast: 3},
  'Boardwalk Empire': { cast: 1 }
};

results2 = findKey(tvShows, x => x.cast === 1);
assertEqual(results2, 'The Sopranos');