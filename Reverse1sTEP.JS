function Reverse1step(num) {
  let temp = num[0];
  for (let i = 1; i < num.length; i++) {
    num[i - 1] = num[i];
  }
  num[num.length - 1] = temp;
  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
  }
}
let num = [4, 6, 7, 8, 9, 10];
console.log(Reverse1step(num));
