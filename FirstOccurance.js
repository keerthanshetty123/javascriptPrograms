function firstOccurance(haystack, needle) {
  let m = haystack.length;
  let n = needle.length;
  for (let i = 0; i < m - n + 1; ++i) {
    if (haystack.substring(i, i + n) === needle) {
      console.log(haystack.substring(i, i + n));
      return i;
    }
  }
  return -1;
}
let haystack = "hello";
let needle = "ll";
console.log(firstOccurance(haystack, needle));
