function MINISubArray(num, target) {
  let sum = 0;
  let left = 0;
  let minLength = Infinity;
  for (let right = 0; right < num.length; right++) {
    sum = sum + num[right];
    while (sum>= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= num[left];
      left++;
    }
   
  }
   return minLength == Infinity ? 0 : minLength;
}
let target = 7;
let num = [2, 3, 1, 2, 4, 3];
console.log(MINISubArray(num, target));
