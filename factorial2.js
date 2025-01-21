function factorial2(n) {
  let sum = 1;
  while (n >= 1) {
    sum = sum * n;
    n--;
  }
  return sum;
}
let n = 5;
console.log(factorial2(n));
