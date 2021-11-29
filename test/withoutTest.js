const assert = require('chai').assert;
const _ = require('../index');

describe ('#without', () => {
  it ('should return [2, 3] for ([1, 2, 3], [1])', () => {
    assert.deepEqual(_.without([1, 2, 3], [1]), [2, 3]);
  });
  it ('should return ["1", "2"] for (["1", "2", "3"], [1, 2, "3"])', () => {
    assert.deepEqual(_.without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it ('should return ["hello", "how", "are"] for (["hello", "how", "are", "you"], ["I\'m", "you"])', () => {
    assert.deepEqual(_.without(["hello", "how", "are", "you"], ["I\'m", "you"]), ["hello", "how", "are"]);
  });
});