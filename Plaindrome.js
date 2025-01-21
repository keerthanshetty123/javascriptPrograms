function practice(string1) {
  let arrayString = [];
  arrayString = string1.split("");
  let start = 0;
  let end = arrayString.length - 1;
  for (let i = start; i < end; i++) {
    let temp = "";
    temp = arrayString[end];
    arrayString[end] = arrayString[start];
    arrayString[start] = temp;
    start++;
    end--;
  }
  console.log(arrayString);
  let ans = [];
  ans = string1.split("");
  console.log(ans);
  if (JSON.stringify(arrayString) === JSON.stringify(ans)) {
    return true;
  } else {
    return false;
  }
}
let string1 = "madam";
console.log(practice(string1));
