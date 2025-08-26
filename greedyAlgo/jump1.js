function jump() {
  let n = arr.length;
  let maxIndex = 0;
  for (let i = 0; i < n; i++) {
    if (i > maxIndex) return false;
    maxIndex = Math.max(maxIndex, i + arr[i]);
  }
  return true;
}
let arr = [2, 3, 1, 0, 4];
console.log(jump(arr));
