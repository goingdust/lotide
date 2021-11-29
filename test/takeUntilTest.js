const assert = require('chai').assert;
const _ = require('../index');

describe ('#takeUntil', () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const data3 = ['Used', 'to', 'always', 'wanna', 'feel', 'safe'];

  it ('should return [1, 2, 5, 7, 2] for (data1, x => x < 0)', () => {
    assert.deepEqual(_.takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });
  it ('should return ["I\'ve", "been", "to", "Hollywood"] for (data2, x => x === ",")', () => {
    assert.deepEqual(_.takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });
  it ('should return ["Used", "to", "always", "wanna", "feel", "safe"] for (data3, x => x === 1)', () => {
    assert.deepEqual(_.takeUntil(data3, x => x === 1), ['Used', 'to', 'always', 'wanna', 'feel', 'safe']);
  });
});