function binarysearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + right / 2);
    if (arr[mid] === target) {
      console.log(mid);
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
let arr = [5, 10, 12, 15, 18];
let target = 15;
binarysearch(arr, target);
