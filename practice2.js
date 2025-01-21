function practice() {
    let array=153;
  let sum = 0;
  let n = array.length;
  console.log(array);
  console.log(n);
  for (let i = 0; i <=n; i++) {
    let ans = 1;
    ans = array[i] * n;
    console.log(ans);
    sum += ans;
  }
  return sum;
}
console.log(practice());
