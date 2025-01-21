function MisingNumber(num) {
  let xor1 = 0;
  let xor2 = 0;
  for (let i = 0; i < num.length - 1; i++) {
    xor2 = xor2 ^ num[i];
    xor1 = xor1 ^ (i + 1);
  }
  xor1=xor1 ^ num.length-1;
  return xor1 ^ xor2;
}

let num = [1, 2, 3, 5];
console.log(MisingNumber(num));
