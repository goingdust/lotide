const eqArrays = function(arg1, arg2) {
  let equality;
  if (arg1.length !== arg2.length) {
    return false;
  }
  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] === arg2[i]) {
      equality = true;
    } else if (Array.isArray(arg1[i]) && Array.isArray(arg2[i]) && eqArrays(arg1[i], arg2[i])) {
      equality = true;
    } else {
      return false;
    }
  }
  return equality;
};

module.exports = eqArrays;