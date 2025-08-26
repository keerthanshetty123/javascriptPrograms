function MoveZero(num) {
  let x = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] != 0) {
      num[x] = num[i];
      x++;
    }
  }
  for (let i = x; i < num.length; i++) {
    num[i] = 0;
  }
  return num;
}
let num = [0,1,0,3,12];
console.log(MoveZero(num));
