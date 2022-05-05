function selectionSort(arr) {
  try {
    const n = arr.length;
    for (let i =0 ; i < n-1; i++) {
      let iMin = i;
      for (let j = i + 1 ; j<= n -1 ; j++) {
        if (arr[iMin] > arr[j]) {
          iMin = j;
        }
       }
      let temp = arr[i];
      arr[i] = arr[iMin]
      arr[iMin] = temp;
     }
    console.log(arr);
  } catch (e) {
     console.log(e);
     throw e;
  }
}

selectionSort([3, 1, 8, 7, 2, 20])

Output: [ 1, 2, 3, 7, 8, 20 ]
