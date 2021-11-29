const assert = require('chai').assert;
const _ = require('../index');

describe ('#map', () => {
  const words = ["ground", "control", "to", "major", "tom"];
  
  it ('should return ["g", "c", "t", "m", "t"] for (words, word => word[0])', () => {
    assert.deepEqual(_.map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it ('should return [6, 7, 2, 5, 3] for (words, word => word.length)', () => {
    assert.deepEqual(_.map(words, word => word.length), [6, 7, 2, 5, 3]);
  });
  it ('should return [true, true, false, true, false] for (words, word => word.length > 3)', () => {
    assert.deepEqual(_.map(words, word => word.length > 3), [true, true, false, true, false]);
  });
});