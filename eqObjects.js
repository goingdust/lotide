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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

const dc2 = { d: ["2", 3, 4], c: "1" };
assertEqual(eqObjects(cd2, dc2), true);

const totals1 = {
  April: 50.00,
  Peter: [40.00, 60.00],
  Gary: 25.00
}

const totals2 = {
  Gary: 25.00,
  April: 50.00,
  Peter: [45.00, 60.00]
}

console.log(eqObjects(totals1, totals2));