function selectionSort(array) {
  let n = array.length;
  for (let i = 0; i <= n - 2; i++) {
    let mini = i;
    for (let j = i; j <= n - 1; j++) {
      if (array[j] < array[i]) {
        mini = j;
      }
    }
    let temp = array[mini];
    array[mini] = array[i];
    array[i] = temp;
  }
  console.log(array);
}
let array = [5, 4, 2, 1, 7, 3, 9, 0];
console.log(selectionSort(array));
