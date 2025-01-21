function LargetsSubArray(array, k) {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let sum = 0;
  while (right < array.length) {
    sum = sum + array[right];
    if (sum < k) {
      sum = sum - array[left];
      left = left + 1;
    }
    if (sum >= k) {
      maxLength = Math.min(maxLength, right - left + 1);
    }
    right = right + 1;
  }
  return maxLength;
}
let array = [2, 5, 1, 6, 10];
let k = 14;
console.log(LargetsSubArray(array, k));
