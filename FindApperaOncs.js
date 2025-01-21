function AppearOne(num) {
  let maxi = 0;
  for (let i = 0; i < num.length; i++) {
    maxi = Math.max(num[i]);
  }
  let hash = new Array(maxi).fill(0);
  for (let i = 0; i < num.length; i++) {
    hash[num[i]]++;
  }
  for (let i = 0; i < num.length; i++) {
    if (hash[num[i]] == 1) {
      return num[i];
    }
  }
}
let num = [1, 1, 2, 3, 3, 4, 4];
console.log(AppearOne(num));
