function ReverseDplace(num, k) {
  let temp = [];
  temp = num.slice(0, k);
  console.log(temp);

  for (let i = k; i < num.length; i++) {
    num[i - k] = num[i];
  }
  let j = 0;
  for (let i = num.length - k; i < num.length; i++) {
    num[i] = temp[i - (num.length - k)];
    j++;
  }
  console.log(num);
}
let num = [5, 6, 7, 8, 9, 10, 11];
let k = 3;
console.log(ReverseDplace(num, k));
