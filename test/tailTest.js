const assert = require('chai').assert;
const _ = require('../index');

describe ('#tail', () => {
  it ('should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(_.tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it ('should return [2, 3, 4, 5, 6] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(_.tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]);
  });
  it ('should return "ello" for "Hello"', () => {
    assert.deepEqual(_.tail('Hello'), 'ello');
  });
});