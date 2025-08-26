function BubbleSort(array) {
  let n = array.length;
  for (let i = n - 1; i >= 1; i--) {
    let didswap = 0;
    for (let j = 0; j < i - 2; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        didswap = 1;
      }
    }
    if (didswap == 0) {
      break;
    }
  }

  console.log(array);
}
let array = [5, 4, 2, 1, 7, 3, 9, 0];
console.log(BubbleSort(array));
