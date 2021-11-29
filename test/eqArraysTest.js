const assert = require('chai').assert;
const _ = require('../index');

describe ('#eqArrays', () => {
  it ('should return true for ([1, 2, 3], [1, 2, 3])', () => {
    assert.isTrue(_.eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it ('should return false for ([1, 2, 3], [3, 2, 1])', () => {
    assert.isFalse(_.eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it ('should return true for (["1", "2", "3"], ["3", "2", "1"])', () => {
    assert.isTrue(_.eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });
  it ('should return false for (["1", "2", "3"], ["3", "2", 1])', () => {
    assert.isFalse(_.eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });
  it ('should return true for ([[2, 3], [4]], [[2, 3], [4]])', () => {
    assert.isTrue(_.eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });
  it ('should return false for ([[2, 3], [4]], [[2, 3], [4, 5]])', () => {
    assert.isFalse(_.eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });
});