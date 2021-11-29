const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] && sentence[i] !== 0) {
      results[sentence[i]].push(i);
    } else if (sentence[i] !== ' ') {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;