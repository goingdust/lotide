const assert = require('chai').assert;
const _ = require('../index');

describe ('#countOnly', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result1 = _.countOnly(firstNames, {
     "Jason": true,
     "Karima": true,
     "Fang": true,
     "Agouhanna": false 
    });

  it ('should return 1 for result1["Jason"]', () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it ('should return undefined for result1["Karima"]', () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it ('should return 2 for result1["Fang"]', () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it ('should return undefined for result1["Agouhanna"]', () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});