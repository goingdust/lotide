const assert = require('chai').assert;
const _ = require('../index');

describe ('#letterPositions', () => {
  it ('should return [0, 11] for ("lighthouse labs").l', () => {
    assert.deepEqual(_.letterPositions('lighthouse labs').l, [0, 11]);
  });
});