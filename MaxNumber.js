function MaxNumber(num) {
  let max = num[0];
  for (let i = 1; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  return max;
}
let num = [1, 2, 10, 4, 5, 3, 8, 6, 2, 3, 4, 5, 16];
console.log(MaxNumber(num));
