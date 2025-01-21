function preFixSum(array, start, end) {
  let prefix = [];
  for (let i = 1; i < array.length; i++) {
    array[i] = array[i - 1] + array[i];
  }
  console.log(array);
  let sum = array[end] - array[start-1];
  console.log(sum);
}

let array = [2, 3, 4, 5, 6];
let start = 1;
let end = 3;
console.log(preFixSum(array, start, end));
