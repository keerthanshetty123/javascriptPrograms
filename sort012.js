function Sort012(array) {
  let low = 0;
  let high = array.length - 1;
  let mid = 0;
  while (mid <= high) {
    if (array[mid] == 0) {
      let temp = 0;
      temp = array[low];
      array[low] = array[mid];
      array[mid] = temp;
      mid++;
      low++;
    } else if (array[mid] == 1) {
      mid++;
    } else {
      let temp = 0;
      temp = array[mid];
      array[mid] = array[high];
      array[high] = temp;
      high--;
    }
  }
  console.log(array);
}
let array = [0, 1, 1, 0, 2, 1, 1, 2, 0, 1];
console.log(Sort012(array));
