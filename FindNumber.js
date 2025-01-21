function findNumber(num, target) {
  for (let i = 0; i < num.length; i++) {
    if (target == num[i]) {
      return i;
    } else if (target > num[num.length]) {
      return num.length + 1;
    }
    else {
        return i;
    }
  }
}
let num = [1, 3, 5, 6];
let target = 5;
console.log(findNumber(num, target));
