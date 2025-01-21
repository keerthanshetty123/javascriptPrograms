function Union(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let i = 0;
  let j = 0;
  let arr3 = [];
  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[1]) {
      j++;
    } else {
      arr3.push(arr1[i]);
      i++;
      j++;
    }
  }
  console.log(arr3);
}

let arr1 = [4, 5, 6, 7, 8, 8, 9, 9];
let arr2 = [4, 5, 8, 9, 10];
console.log(Union(arr1, arr2));
