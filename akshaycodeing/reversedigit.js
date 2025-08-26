function reverseDigit(num) {
  let orginal = num;
  num = Math.abs(num);
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10);
  }
  console.log(rev);
  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit) return 0;
  return orginal < 0 ? -rev : rev;
}
let num = -678;
console.log(reverseDigit(num));
