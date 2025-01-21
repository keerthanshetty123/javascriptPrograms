function missing(arr1) {
  let vistes = new Array(arr1.length).fill(0);
  for (let i = 0; i < arr1.length; i++) {
    vistes[arr1[i]] = 1;
  }
  for (let i = 1; i < vistes.length; i++) {
    if (vistes[i] != 1) {
      return i;
    }
  }
}
let arr1 = [1, 2, 4, 5];
console.log(missing(arr1));
