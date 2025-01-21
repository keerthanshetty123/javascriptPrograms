function kadensAlgo(array, target) {
  let sum = 0;
  let max = 0;
  let arraystart = 0;
  let arrayEnd = 0;
  let start = 0;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (sum == 0) {
      start = i;
    }
    sum += array[i];

    if (sum > max) {
      max = sum;
      arraystart = start;
      arrayEnd = i;
    }
    if (sum < 0) {
      arrayEnd = i;
      sum = 0;
    }
  }
  for (let i = arraystart; i < array.length; i++) {
    if (array[i] > 0) {
      result.push(array[i]);
    }
  }
  console.log(Math.max(...result));
  return max;
}
let array = [-1, -2, 5, -2, 3, 4];
let target = 7;
console.log(kadensAlgo(array, target));
