const without = function(source, itemstoRemove) {
  let matchedItems = [];

  sourceCursor: for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemstoRemove.length; j++) {
      if (source[i] === itemstoRemove[j]) {
        continue sourceCursor;
      }
    }
    matchedItems.push(source[i]);
  }
  return matchedItems;
};

module.exports = without;
