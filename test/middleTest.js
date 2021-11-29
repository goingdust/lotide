const assert = require('chai').assert;
const _ = require('../index');

describe ('#middle', () => {
  it ('should return [2] for [1, 2, 3]', () => {
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  });
  it ('should return [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5]), [3]);
  });
  it ('should return [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(_.middle([1, 2, 3, 4]), [2, 3]);
  });
  it ('should return [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it ('should return ["a"] for "brake"', () => {
    assert.deepEqual(_.middle("brake"), ["a"]);
  });
  it ('should return ["r", "i"] for "sprite"', () => {
    assert.deepEqual(_.middle("sprite"), ["r", "i"]);
  });
});