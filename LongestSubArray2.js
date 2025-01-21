function LongestSubArray(array, m) {
  let maxLength = 0;
  let left = 0;
  let right = 0;
  let sum = 0;
  let n = array.length;
  while (right < n) {
    while (left <= right && sum > m) {
      sum -= array[left];
      left++;
    }
    if (sum == m) {
      maxLength = Math.max(maxLength, (right - left) + 1);
    }
    right++;
    if (right < n) {
      sum += array[right];
    }
  }
  return maxLength;
}
let array = [1, 1, 1, 2, 1, 3, 1, 2];
let m = 5;
console.log(LongestSubArray(array, m));
