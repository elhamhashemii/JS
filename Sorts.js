function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function merge(arr1, arr2) {
  // let i = 0;
  // let j = 0;
  let mergedArr = [];
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
  while (arr1.length && arr2.length) {
    mergedArr.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }
  return [...mergedArr, ...arr1, ...arr2];
}

function mergeSort(mainArr) {
  if (mainArr.length == 1) return mainArr;
  // todo: find the element in the middle of array
  let indexInTheMiddleOfArr = Math.round(mainArr.length / 2);
  // todo: make two new array from main arr using "indexInTheMiddleOfArr"
  let rightArr = mainArr.slice(0, indexInTheMiddleOfArr);
  let leftArr = mainArr.slice(indexInTheMiddleOfArr, mainArr.length);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
  // todo: do it recursively to have arrays with only 1 element
  // todo: move this one element arrays and merge them together
  // let a = mergeSort(arr.slice(indexInTheMiddleOfArr));
  // if (a > arr[0]) {
  //   swap(arr, a, arr[0])
  // }
  // return arr
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

//   let i = left;
//   let j = right;
//   let pivot = arr[findIndexOfRandomPivot(arr)];
//   // let IndexOfpivot = findIndexOfRandomPivot(arr);
//   while (i <= j) {
//     while (arr[i] < pivot) {
//       i++;
//     }
//     while (arr[j] > pivot) {
//       j--;
//     }
//     if (i <= j) {
//       swap(arr, i, j);
//       i++;
//       j--;
//     }
//   }
//   return i;
// }

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

  // // todo: find the Finish state
  // if (arr.length == 1) return arr;
  // let partitioningIndex = partitioning(arr, left, right)
  // if (left < partitioningIndex) {
  //   quickSort(arr, left, partitioningIndex - 1)
  // }
  // if (partitioningIndex < right) {
  //   quickSort(arr, partitioningIndex, right)
  // }
  // return arr
  // // todo: find the pivot (random)
  // // let pivot = arr[findIndexOfRandomPivot(arr)];
  // // let IndexOfpivot = findIndexOfRandomPivot(arr);
  // // todo: break array into two subarrays
  // // let leftArr = arr.slice(0, IndexOfpivot);
  // // let rightArr = arr.slice(IndexOfpivot + 1, arr.length);
  // // todo: check every element in left side arr with pivot ( before pivot )
  // // todo: if it is greater than pivot, move it to the right side arr ( after pivot )
  // // todo: else, keep it there
}

let testArr = [3, 39, 10, 1, 5, 75, 8]
let firstArr = [3, 39, 10];
let secondArr = [1, 5, 75, 8];  

var p = document.createElement("p");
p.appendChild(document.createTextNode(quickSort(testArr, 0, testArr.length - 1)));
document.body.appendChild(p);
