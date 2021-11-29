const findKeyByValue = function(object, value) {
  for (const property in object) {
    if (value === object[property]) {
      return property;
    }
  }
};

module.exports = findKeyByValue;
