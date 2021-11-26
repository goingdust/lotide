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

const assertEqual = function(actual, expected) {
  const pass = '✅✅✅';
  const fail = '❌❌❌';
  
  if (actual === expected) {
    return console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

const dc2 = { d: ["2", 3, 4], c: "1" };
assertEqual(eqObjects(cd2, dc2), true);

const totals1 = {
  April: 50.00,
  Peter: [45.00, 60.00],
  Gary: 25.00
};

const totals2 = {
  Gary: 25.00,
  April: 50.00,
  Peter: [45.00, 60.00]
};

console.log(eqObjects(totals1, totals2));

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
