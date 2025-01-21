function Duplicate(n) {
  let k = 0;
  for (let i = 1; i < n.length - 1; i++) {
    if (n[i] !==n[k]) {
        k++;
      n[k+1] = n[i];
  
    }
  }
  return k + 1;
}
let n = [5, 6, 7, 8, 5,6,7];
console.log(Duplicate(n));
