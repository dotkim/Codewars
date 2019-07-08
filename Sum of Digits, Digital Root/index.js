function digital_root(n) {
  let sum = [...n+''].map(i=>+i).reduce((a, b) => a + b);
  if (sum > 9) return digital_root(sum);
  else return sum;
}