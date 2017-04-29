module.exports = function(quantity) {
  let results = [];
  for (let i = 0; i < quantity; i++) {
    if (i === 0) {
      results.push(0);
    } else if (i === 1) {
      results.push(1);
    } else {
      results.push(results[i-1] + results[i-2]);
    }
  }
  return results;
}
