const map = function(array, callbackFn) {
  const results = [];
  for (const item of array) {
    results.push(callbackFn(item));
  }
  return results;
};

module.exports = map;