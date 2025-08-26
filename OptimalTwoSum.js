function TwoSum(num, target) {
  let left = 0;
  let right = num.length - 1;

  // Sort numerically
  num.sort((a, b) => a - b);

  while (left < right) {
    let sum = num[left] + num[right];

    if (sum === target) {
      return [num[left], num[right]]; // return the numbers
    } else if (sum < target) {
      left++;
    } else {
      right--; // ✅ move right pointer left
    }
  }

  return null; // no pair found
}

let array = [3, 4, 6, 7, 3, 9];
let target = 6;
console.log(TwoSum(array, target));

