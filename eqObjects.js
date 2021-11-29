const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let equality;
  const object1Keys = Object.keys(object1);

  if (object1Keys.length !== Object.keys(object2).length) {
    return false;
  }

  for (const key of object1Keys) {
    if (
      Array.isArray(object1[key]) &&
      Array.isArray(object2[key]) &&
      eqArrays(object1[key], object2[key])
    ) {
      equality = true;
    } else if (object1[key] === object2[key]) {
      equality = true;
    } else if (
      !(Array.isArray(object1[key])) &&
      !(Array.isArray(object2[key])) &&
      eqObjects(object1[key], object2[key])
    ) {
      equality = true;
    } else {
      return false;
    }
  }
  return equality;
};

module.exports = eqObjects;
