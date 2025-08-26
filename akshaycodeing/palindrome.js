function palindrome(num) {
    let orginal=num;
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = (10 * rev) + rem;
    num = Math.floor(num / 10);
  }
  console.log(rev);
  if (rev === orginal) {
    return true;
  } else {
    return false;
  }
}
let num = 121;
console.log(palindrome(num));
