function SecondLrage(arr) {
  let largest = 0;
  let secLarge = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secLarge && arr[i] != largest) {
      secLarge = arr[i];
    }
  }
  console.log(largest);
  console.log(secLarge);
  return secLarge;
}
let arr = [5, 4, 3, 8, 9, 12];
console.log(SecondLrage(arr));
