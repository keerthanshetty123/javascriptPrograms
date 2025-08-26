function removeDuplicate(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x+1;
}
nums = [2, 3, 4, 5, 5, 6, 7, 7, 8, 8];
console.log(removeDuplicate(nums));
