function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
function rotate(nums, k) {
  k = k % nums.length;
  console.log(k);
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  console.log(nums);
}
let nums = [5, 6, 7, 8, 9, 10, 11, 12];
let k = 3;
console.log(rotate(nums, k));
