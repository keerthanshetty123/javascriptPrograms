const addTwoNumbers = function (l1, l2) {
  function convnumber(arr) {
    let num = 0;
    for (let i = arr.length-1; i>=0; i--) {
      num = num * 10 + arr[i];
    }
    return num;
  }
  let num1=convnumber(l1);
  let num2=convnumber(l2);
  return num1+num2;
};
let l1 = [2, 7, 4];
let l2 = [3, 4, 5];
console.log(l1.length);
console.log(addTwoNumbers(l1, l2));
