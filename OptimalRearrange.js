function Rearrange(array) {
  let pos = 0;
  let neg = 1;
  let ans = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      ans[pos] = array[i];
      pos += 2;
    } else {
      ans[neg] = array[i];
      neg += 2;
    }
  }
  return ans;
}
let array = [-3, -2, 1, 2, -3, 1,5,6];
console.log(Rearrange(array));
