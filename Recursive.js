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

function swap(arr, i, j) {
  i = 0;
  for (j = i + 1; j < arr.length; j++) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function merge(arr1, arr2) {
  // let i = 0;
  // let j = 0;
  // let mergedArr = [];
  // while (i < arr1.length && j < arr2.length) {
  //   if (arr1[i] < arr2[j]) {
  //     mergedArr.push(arr1[i]);
  //     i++;
  //   } else {
  //     mergedArr.push(arr2[j]);
  //     j++;
  //   }
  //   while (arr1.length) {
  //     mergedArr.push(arr1[i])
  //     i++
  //   }
  //   while (arr2.length) {
  //     mergedArr.push(arr2[j])
  //     j++
  //   }
  // }
  // return mergedArr;
  const sortedWhileArraysAreNotCompletelyShifted = [];
  while (arr1.length && arr2.length) {
    sortedWhileArraysAreNotCompletelyShifted.push(
      arr1[0] < arr2[0] ? arr1.shift() : arr2.shift()
    );
  }
  return [...sortedWhileArraysAreNotCompletelyShifted, ...arr1, ...arr2];
}


function mergeSort(mainArr) {
  if (mainArr.length == 1) return mainArr;
  // todo: find the element in the middle of array
  let indexInTheMiddleOfArr = Math.round(mainArr.length / 2);
  // todo: make two new array from main arr using "indexInTheMiddleOfArr"
  let rightArr = mainArr.slice(0, indexInTheMiddleOfArr);
  let leftArr = mainArr.slice(indexInTheMiddleOfArr, mainArr.length)
  return merge(mergeSort(leftArr) , mergeSort(rightArr))
  // todo: do it recursively to have arrays with only 1 element
  // todo: move this one element arrays and merge them together
  // let a = mergeSort(arr.slice(indexInTheMiddleOfArr));
  // if (a > arr[0]) {
  //   swap(arr, a, arr[0])
  // }
  // return arr
}

let testArr = [3, 39, 10, 5, 75, 8];
let firstArr = [3, 39, 10];
let secondArr = [1,5, 75, 8];

var span = document.createElement("span");
span.appendChild(document.createTextNode(mergeSort(testArr)));
document.body.appendChild(span);

// fib()
