function shortJob(arr) {
  let n = arr.length;
  let t = 0;
  let waitTime = 0;
  for (let i = 0; i < n - 1; i++) {
    waitTime += t;
    t += arr[i];
  }
  return waitTime / n - 1;
}
let arr = [4, 3, 7, 1, 2];
console.log(shortJob(arr));
