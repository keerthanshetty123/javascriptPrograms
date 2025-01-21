function TwoSum(array, target) {
  let left = 0;
  let right = array.length - 1;
  let sum = 0;
  let number = [];
  while (left <= right) {
    sum = array[left] + array[right];
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else if (sum == target) {
      number.push(left);
      number.push(right);
      return number;
    }
  }
}
let array = [3, 4, 6, 7, 3, 9];
let target = 6;
console.log(TwoSum(array, target));
