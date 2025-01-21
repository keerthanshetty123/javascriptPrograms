function SubArraySum(array, k) {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let sum = 0;
  let n = array.length;
  while (right < n) {
    while (left <= right && sum > k) {
      sum -= array[left];
      left++;
    }
    if (sum == k) {
      maxLength = Math.max(maxLength, right - left);
    }
    right++;
    if (right < n) {
      sum += array[right];
    }
  }
  console.log(maxLength);
  return maxLength;
}
let array = [1, 2, 1, 1, 1, 2, 3, 1];
let k = 3;
console.log(SubArraySum(array, k));
