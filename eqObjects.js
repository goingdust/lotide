const eqArrays = function (arg1, arg2) {
  let equality;
  
  for (let i = 0; i < arg1.length; i++) {
    for (let j = 0; j < arg2.length; j++) {
      if (i === j && arg1[i] === arg2[j]) {
        equality = true;
      } else {
        equality = false;
      }
    } 
  }
  return equality;
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
  const object2Keys = Object.keys(object2);

  if (object1Keys.length === object2Keys.length) {
    equality = true;
  } else {
    return false;
  }

  for (const key of object1Keys) {
    if (object1[key] === object2[key] || eqArrays(object1[key], object2[key])) {
      equality = true;
    } else {
      equality = false;
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
