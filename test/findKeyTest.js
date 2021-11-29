const assert = require('chai').assert;
const _ = require('../index');

describe ('#findKey', () => {
  results1 = _.findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2);
  
  it ('should return true for (results1, "noma")', () => {
    assert.strictEqual(results1, "noma");
  });
});

// tvShows = {
//   'Sex And The City': { cast: 4 },
//   'The Sopranos': { cast: 1 },
//   'Game of Thrones': { cast: 4},
//   'Seinfeld': { cast: 1},
//   'The Witcher': { cast: 3},
//   'Boardwalk Empire': { cast: 1 }
// };

// results2 = findKey(tvShows, x => x.cast === 1);
// assertEqual(results2, 'The Sopranos');