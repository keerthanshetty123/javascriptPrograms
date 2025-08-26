function secondLarge(arr) {
    if(arr.length<2)
    {
        return "must have 2 values";
    }
  let largest = -Infinity;
  let seocndlarge = -Infinity;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largest) {
      secondLarge = largest;
      largest = arr[i];
    } else if (arr[i] > secondLarge && arr[i]!=largest) {
      secondLarge = arr[i];
    }
  }
  return secondLarge;
}
arr = [2,3,3];
console.log(secondLarge(arr));
