const assert = require('chai').assert;
const _ = require('../index');

describe ('#eqObjects', () => {
  it ('should return true for ({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" })', () => {
    assert.isTrue(_.eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }));
  });
  it ('should return false for ({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] })', () => {
    assert.isFalse(_.eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }));
  });
  it ('should return true for ({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })', () => {
    assert.isTrue(_.eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it ('should return false for ({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })', () => {
    assert.isFalse(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
});