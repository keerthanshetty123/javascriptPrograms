function intersection(arr1, arr2) {
  let insertion = [];
  let visted = new Array(arr2.length).fill(0);
  console.log(visted);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j] && visted[j] == 0) {
        insertion.push(arr1[i]);
        visted[j] = 1;
      }
      if (arr2[j] > arr1[i]) {
        break;
      }
    }
  }
  console.log(insertion);
}
let arr1 = [4, 5, 6, 7, 8, 8, 9, 9];
let arr2 = [5, 8, 9, 9, 10];
console.log(intersection(arr1, arr2));
