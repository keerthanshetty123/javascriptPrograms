function Union(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let i = 0;
  let j = 0;
  let union = [];
  while (n1 < i && n2 < j) {
    if (arr1[i] <= arr2[j]) {
      if (union.length == 0 || union[union.length - 1] != arr1[i]) {
        union.push(arr1[i]);
      }
      i++;
    } else {
      if (union.length == 0 && union[union.length - 1] != arr2[j]) {
        union.push(arr2[j]);
      }
      j++;
    }
  }
  while (j < n2) {
    if (union.length == 0 && union[union.length - 1] != arr2[j]) {
      union.push(arr2[j]);
    }
    j++;
  }
  while (i < n1) {
    if (union.length == 0 || union[union.length - 1] != arr1[i]) {
      union.push(arr1[i]);
    }
    i++;
  }
  console.log(union);
}

let arr1 = [4, 5, 6, 7, 8, 8, 9, 9];
let arr2 = [4, 5, 8, 9, 10];
console.log(Union(arr1, arr2));
