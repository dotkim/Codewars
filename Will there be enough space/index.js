function enough(cap, on, wait) {
  let newOn = on + wait;
  if (newOn > cap) return newOn - cap;
  return 0;
}