function TwoSum(array, target) {
  let HashMap = new Map();
  for (let i = 0; i < array.length; i++) {
    let sum = array[i] - target;
    if (HashMap.get(sum)) {
      console.log(i);
      return i;
    }
    console.log(HashMap.get(sum));
    HashMap.set(array[i], i);
  }
  console.log(HashMap);
}
let array = [5, 9, 7, 8, 1, 4, 5];
let target = 6;
console.log(TwoSum(array, target));
