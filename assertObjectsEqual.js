const eqArrays = function (arg1, arg2) {
  let equality;
  let biggerArray;
  let smallerArray;
  
  if (arg1.length >= arg2.length) {
    biggerArray = arg1;
    smallerArray = arg2;
  } else {
    biggerArray = arg2;
    smallerArray = arg1;
  }
  for (let i = 0; i < biggerArray.length; i++) {
    if (biggerArray[i] === smallerArray[i]) {
      equality = true;
    } else {
      return false;
    } 
  }
  return equality;
};

const eqObjects = function(object1, object2) {
  let equality;
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length === object2Keys.length) {
    equality = true;
  } else {
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
}

const totals2 = {
  Gary: 25.00,
  April: 50.00,
  Peter: [40.00, 60.00, 50]
}

assertObjectsEqual(totals1, totals2);