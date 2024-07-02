function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function merge(arr1, arr2) {
  let mergedArr = [];
  while (arr1.length && arr2.length) {
    mergedArr.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }
  return [...mergedArr, ...arr1, ...arr2];
}

function mergeSort(mainArr) {
  if (mainArr.length == 1) return mainArr;
  let indexInTheMiddleOfArr = Math.round(mainArr.length / 2);
  let rightArr = mainArr.slice(0, indexInTheMiddleOfArr);
  let leftArr = mainArr.slice(indexInTheMiddleOfArr, mainArr.length);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function findIndexOfRandomPivot(arr) {
  let total = arr.length;
  let pivot = Math.round(Math.random() * 10);
  if (pivot < total) return pivot;
  return findIndexOfRandomPivot(arr);
}

function partitioning(arr, left, right) {
  let pIndex = Math.floor((right + left) / 2);
  let pivot = arr[pIndex];
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(arr, left, right) {
  let pIndex;
  if (arr.length > 1) {
    pIndex = partitioning(arr, left, right);
    if (left < pIndex - 1) {
      quickSort(arr, left, pIndex - 1);
    }
    if (pIndex < right) {
      quickSort(arr, pIndex, right);
    }
  }

  return arr;
}

let testArr = [3, 39, 10, 1, 5, 75, 8]
let firstArr = [3, 39, 10];
let secondArr = [1, 5, 75, 8];  

var p = document.createElement("p");
p.appendChild(document.createTextNode(quickSort(testArr, 0, testArr.length - 1)));
document.body.appendChild(p);
