function ArrayLeaders(array) {
  let maxi = 0;
  let k = array.length - 1;
  let Leader = [];
  while (k >= 0) {
    if (array[k] > maxi) {
      maxi = array[k];
      Leader.push(array[k]);
    }
    k--;
  }
  console.log(Leader);
  return Leader;
}
let array = [5, 22, 3, 6, 4, 2, 3];
console.log(ArrayLeaders(array));
