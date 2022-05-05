function mergeSortedArrays(leftArray, rightArray, arr) {
  try {
    let n1 = leftArray.length;
    let n2 = rightArray.length;
    let counter1 = 0, counter2 = 0, j =0;
    while(counter1 < n1 &&  counter2 < n2) {
      if (leftArray[counter1] > rightArray[counter2]) {
        arr[j++] = rightArray[counter2++];
      } else if (leftArray[counter1] < rightArray[counter2]) {
          arr[j++] =  leftArray[counter1++];
      } else {
         arr[j++] = rightArray[counter2++];
         arr[j++] =  leftArray[counter1++];
      }
    }
   while(counter1 < n1) {
     arr[j++] =  leftArray[counter1++];
   }
   while(counter2 < n2) {
     arr[j++] = rightArray[counter2++];
   }
} catch (e) {
    throw e;
}
}
function MergeSort(arr) {
  try {
    let result = [];
    let n = arr.length;
    if (n < 2) {
      return arr;
    }
  let mid = parseInt(n/2);
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < mid; i++) {
    leftArray.push(arr[i]);
  }
  for (let i = mid; i<= n-1; i++) {
    rightArray.push(arr[i]);
  }
  MergeSort(leftArray);
  MergeSort(rightArray);
  mergeSortedArrays(leftArray, rightArray, arr)
} catch (e) {
    throw e;
}
}
const A = [9,3,2,1,0];
MergeSort(A)
console.log(A);
Output: [ 0, 1, 2, 3, 9 ]

Time Complexity: O(nlogn) — Worst Case

MergeSort(left): T(n/2)

MergeSort(right): T(n/2)
