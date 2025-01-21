function MoveZero(num) {
  let number = [];
  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] != 0) {
      number.push(num[i]);
    }
  }
  let nz = number.length;
  for (let i = 0; i < nz; i++) {
    num[i] = number[i];
  }
  for (let i = nz; i < num.length; i++) {
    num[i] = 0;
  }
  console.log(num);
}
let num = [4, 5, 0, 6, 0, 8, 0, 9, 4];
console.log(MoveZero(num));
