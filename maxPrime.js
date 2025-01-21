function PrimeNumber(num) {
  let n = num.length;
  let max = 0;
  let count = 0;
  for (let i = n; i > 0; i--) {
    if (num[i] % 2 == 0 && num[i] != 1) {
      max = num[i];
      count++;
    }
    if (count == 3) {
      return max;
    }
  }
  return -1;
}
let num = [1, 3, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 19, 21, 22, 23];
console.log(PrimeNumber(num));
