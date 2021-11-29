const assert = require('chai').assert;
const _ = require('../index');

describe ('#countLetters', () => {
  const result1 = _.countLetters('lighthouse labs');
  
  it ('should return 2 for result1["l"]', () => {
    assert.strictEqual(result1["l"], 2);
  });
});