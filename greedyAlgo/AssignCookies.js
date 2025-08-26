function cookies(greedy, cokies) {
  greedy.sort();
  cokies.sort();
  let m = greedy.size;
  let n = cokies.size;
  let l = 0;
  let r = 0;
  while (l <= m && r <= n) {
    if (greedy[l] <= cokies[r]) {
      r = r + 1;
      console.log(r);
    }
    l = l + 1;
  }
  console.log("satisfied elements are" + r);
  return r;
}
let greedy = [1, 5, 3, 3, 4];
let cokies = [4, 2, 1, 2, 1];
console.log(cookies(greedy, cokies));
