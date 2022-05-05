function InsertionSort(arr) {
  try {
    const n = arr.length;
    for (let i = 1; i< n; i++) {
      let temp = arr[i];
      let index = i;
      while(index && arr[index-1] > temp) {
        arr[index] = arr[index-1];
        index --;
      }
      arr[index] = temp;
    }
    console.log(arr);
  } catch (e) {
    throw e;
  }
}
InsertionSort([9,8,7,2,3,4,5])
Output: [ 2, 3, 4, 5, 7, 8, 9 ]

Complexity: O(n) — Best Case Already Sorted

O(n²) — Worst Case
