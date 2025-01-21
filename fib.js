function fib(n, memo) {
  if (n <= 1) {
    return 1;
  }
  memo = fib(n - 1) + fib(n - 2);
  return memo;
}
let memo = {};
let n = 10;
for (let i = 0; i < n ; i++) {
  console.log(fib(i));
}
