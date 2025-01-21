function palindrome(string) {
  let length = string.length;
  for (let i = 0; i < length / 2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    }
  };
  return true;
}
let string = "madam";
console.log(palindrome(string));
