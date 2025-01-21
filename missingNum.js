function missing(arr1) {
  for (let i = 1; i < arr1.length; i++) {
    let flag = 0;
    for (let j = 0; j < arr1.length - 1; j++) {
      if (arr1[j] == i) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      console.log(i);
      return i;
    }
  }
}
let arr1 = [1, 2, 4, 5];
console.log(missing(arr1));
