function SubArray(string1, string2, m, n) {
  if (m == 0) {
    return true;
  }
  if (n == 0) {
    return false;
  }
  if (string1[m] == string2[n]) {
    return SubArray(string1, string2, m - 1, n - 1);
  }
  return SubArray(string1, string2, m, n - 1);
}
let string1 = "abcv";
let string2 = "abcv";
let m = string1.length;
let n = string2.length;
console.log(SubArray(string1, string2, m, n));
