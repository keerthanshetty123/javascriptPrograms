function LongestSubArray(num) {
  let k = 3;
  let length = 0;
  for (let i = 0; i < num.length; i++) {
    for (let j = i; j < num.length; j++) {
      for (let m = i; m < j; m++) {
        let sum = 0;
        sum += num[m];
        console.log(sum, "sum");
        if (sum == k) {
          length = Math.max(length, j - i + 1);
        }
      }
    }
  }
  console.log(length);
}
let num = [1, 2, 3, 1, 1, 1, 3, 1, 1];
console.log(LongestSubArray(num));
