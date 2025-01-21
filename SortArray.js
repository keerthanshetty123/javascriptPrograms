function SortArray(num) {
  for (let i = 0; i < num.length - 1; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] < num[j]) {
        let temp = num[j];
        num[j] = num[i];
        num[i] = temp;
      }
    }
  }
  
  console.log(num);
}
let num = [4, 2, 7, 3, 8, 9, 10];
console.log(SortArray(num));
