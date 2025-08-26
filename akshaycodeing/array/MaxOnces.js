var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxcount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
       
    } else {
     maxcount=Math.max(count,maxcount);
      count = 0;
    }
  }
  return maxcount;
};
let nums=[1,1,0,1,1,1]
console.log(findMaxConsecutiveOnes(nums));