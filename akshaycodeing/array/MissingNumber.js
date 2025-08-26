 function missingNumber(nums) {
    let sum=0;
    let n=nums.length;
    const nNumber= n*(n+1)/2;
    for(let i=0;i<nums.length;i++)
    {
        sum=sum+nums[i];
    }
    return nNumber-sum;
};
let nums=[0,1,2,3,5];
console.log(missingNumber(nums))