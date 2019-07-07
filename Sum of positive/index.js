function positiveSum(arr) {
  return arr.filter((i) => i > 0).reduce((a, b) => { return a + b }, 0);
}