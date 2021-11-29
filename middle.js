const middle = function(array) {
  const middleElements = [];
  const middleIndex = parseInt(array.length / 2);
  
  if (array.length < 2) {
    return [];
  } else if (array.length % 2 === 0) {
    middleElements.push(array[middleIndex - 1]);
  }
  middleElements.push(array[middleIndex]);
  
  return middleElements;
};

module.exports = middle;