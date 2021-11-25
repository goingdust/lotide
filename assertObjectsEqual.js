const eqArrays = function(arg1, arg2) {
  if (arg1.length !== arg2.length) {
    return false;
  }
  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] !== arg2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let equality;
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
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
    } else {
      return false;
    }
  }
  return equality;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const totals1 = {
  April: 50.00,
  Peter: [40.00, 60.00, 50],
  Gary: 25.00
};

const totals2 = {
  Gary: 25.00,
  April: 50.00,
  Peter: [40.00, 60.00, 50]
};

assertObjectsEqual(totals1, totals2);