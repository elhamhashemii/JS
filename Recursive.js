function fib(n) {
  if (n == 1 || n == 2) return 1;
  else return fib(n - 1) + fib(n - 2);
}

function fact(n) {
  if (n == 0 || n == 1) return 1;
  else return fact(n - 1) * n;
}

function findMaximum(arr) {
  if (arr.length == 1) return arr[0];
  let max = findMaximum(arr.slice(1));
  if (max > arr[0]) {
    return max;
  } else {
    return arr[0];
  }
}

function findSum(arr) {
  if (arr.length == 1) return arr[0];
  let sum = findSum(arr.slice(1));
  return sum + arr[0];
}


// let testArr = [3, 39, 10, 1, 5, 75, 8]

var p = document.createElement("p");
p.appendChild(document.createTextNode(findSum(testArr)));
document.body.appendChild(p);
