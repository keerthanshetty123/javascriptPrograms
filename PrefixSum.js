function preFixSum(array) {
  let prefix = [];
  prefix[0] = array[0];
  for (let i = 1; i < array.length; i++) {
    prefix[i] = prefix[i - 1] + array[i];
  }
  console.log(array);
  console.log(prefix);
}
let array = [2, 3, 4, 5, 6];
console.log(preFixSum(array));
