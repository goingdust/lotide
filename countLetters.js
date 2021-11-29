const countLetters = function(stringToCount) {
  const results = {};
  const stringWithoutSpace = stringToCount.split(' ').join('');

  for (const letter of stringWithoutSpace) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;