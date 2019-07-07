function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((a,b) => a + b);
  let avg = sum / classPoints.length;
  if (avg < yourPoints) return true;
  return false;
}