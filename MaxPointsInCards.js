function MaxPointCard(array, k) {
  let leftSum = 0;
  let rightSum = 0;
  let MaxSum = 0;
  for (let i = 0; i < k - 1; i++) {
    leftSum = leftSum + array[i];
    MaxSum = leftSum;
  }
  let rightIndex = array.length - 1;
  for (let j = k - 1; j >= 0; j--) {
    leftSum = leftSum - array[j];
    rightSum = rightSum + array[rightIndex];
    rightIndex = rightIndex - 1;
    MaxSum = Math.max(MaxSum, leftSum + rightSum);
  }
  return MaxSum;
}
let array = [6, 2, 4, 3, 2, 4, 6, 7, 1];
let k = 4;
console.log(MaxPointCard(array, k));
