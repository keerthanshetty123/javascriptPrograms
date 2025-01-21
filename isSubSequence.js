function IsSubquence(str, target) {
  let s = 0;
  let t = 0;
  let result = "";
  while (s < str.length) {
    if (str[s] != target[t]) {
      s++;
    } else {
      result = result + str[s];
      s++;
      t++;
    }
  }
  if (t == target.length) {
    return true;
  }
  return false;
}
let target = "abc";
let str = "ahbgdc";
console.log(IsSubquence(str, target));
