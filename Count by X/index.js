function countBy(x, n) {
  return [...Array(n).keys()].map(i => (i + 1) * x);
}

// simplified from this
/*
function countBy(x, n) {
  return [...Array(n+1).keys()].map(i => i * x).slice(1);
}
*/