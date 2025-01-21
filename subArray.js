function subArray(string1, string2, m, n) {
  if (m == 0) {
    return true;
  }
  if (n == 0) {
    return false;
  }
  if (string1[m - 1] == string2[n - 1]) {
    return subArray(string1, string2, m - 1, n - 1);
  }
  return subArray(string1, string2, m, n - 1);
}
let string1 = "ab";
let string2 = "abdefg";

let m = string1.length;
let n = string2.length;
console.log(subArray(string1, string2, m, n));
