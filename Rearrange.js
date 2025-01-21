function Rearrange(array) {
  let positive = [];
  let nagative = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positive.push(array[i]);
    } else {
      nagative.push(array[i]);
    }
  }
  for (let i = 0; i < array.length / 2; i++) {
    array[2 * i] = positive[i];
    array[2 * i + 1] = nagative[i];
  }
  console.log(array);
  return array;
}
let array = [-3, -2, 1, 2, -3, 1];
console.log(Rearrange(array));
