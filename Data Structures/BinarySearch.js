const A = [1, 24, 32 , 87, 90];

const BinarySearch = (A, element) => {
let start = 0;
let end = A.length - 1;
  while (end >= start) {
    let mid = parseInt((start + end) / 2);
    if (A[mid] === element) {
      return mid;
    } else if (element < A[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(BinarySearch(A, 87));
