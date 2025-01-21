function TwoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] == target) {
        console.log(array[i]);
        console.log(array[j]);
        return array[i], array[j];
      }
    }
  }
}
let array = [5, 6, 7, 8, 3, 4, 5];
let target = 13;
console.log(TwoSum(array, target));
