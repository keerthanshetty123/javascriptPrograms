function amstrong(num) {
  let temp = num;
  let sum=0;
  while (temp > 0) {
    let reminder = temp % 10;
    sum += reminder * reminder * reminder;
    temp = parseInt(temp / 10);
  }
  if (sum === num) {
    return true;
  } else {
    return false;
  }
}
let num = 1531;
console.log(amstrong(num));
