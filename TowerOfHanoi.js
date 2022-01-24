function towerOfHanoi(n, from, to, aux, step) {
  if (n == 0) return step;
  step = towerOfHanoi(n - 1, from, aux, to, step);
  step++;
  console.log("step:", step, "|", "n:", n, " from: ", from, " to: ", to);
  step = towerOfHanoi(n - 1, aux, to, from, step);
  return step;
}

towerOfHanoi(3, "A", "C", "B", 0);
