const assert = require('chai').assert;
const _ = require('../index');

describe ('#findKeyByValue', () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  it ('should return "drama" for (bestTVShowsByGenre, "The Wire")', () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it ('should return undefined for (bestTVShowsByGenre, "That \'70s Show")', () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it ('should return "comedy" for (bestTVShowsByGenre, "Brooklyn Nine-Nine")', () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'), "comedy");
  });
});