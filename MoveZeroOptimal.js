function MoveZeroOpt(num) {
  let j = -1;
  for (let i = 0; i < num.length; i++) {
    if (num[i] == 0) {
      j = i;
      break;
    }
  }
  for (let i = j + 1; i < num.length; i++) {
    if (num[i] != 0) {
      let temp = 0;
      temp = num[i];
      num[i] = num[j];
      num[j] = temp;
      j++;
    }
  }
  return num;
}
let num = [0, 5, 0, 6, 0, 8, 0, 9, 4];
console.log(MoveZeroOpt(num));
