function mergeArray(num1, num2, m, n) {
  let num1Copy = num1.slice(0, m);
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    if (p1 > n || (p2 < m && num1Copy[p1] < num2[p2])) {
      num1[i] = num1Copy[p1];
      p1++;
    } else {
      num1[i] = num2[p2];
      p2++;
    }
  }
  return num1;
}
let num1 = [2, 3, 4, 0, 0, 0];
let num2 = [4, 5, 6];
let m = 3;
let n = 3;
console.log(mergeArray(num1, num2, m, n));
