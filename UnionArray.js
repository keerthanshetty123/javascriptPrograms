function Union(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  let arr3 = [];
  let k = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 1; j < arr1.length - 1; j++) {
      if (arr1[i] != arr1[j]) {
        arr3[k] = arr1[i];
        k++;
      }
    }
  }
  console.log(arr3);
}
let arr1 = [4, 5, 6, 7, 8];
let arr2 = [4, 5, 8, 9, 10, 11, 12];
console.log(Union(arr1, arr2));
