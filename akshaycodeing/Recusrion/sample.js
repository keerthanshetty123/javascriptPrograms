let sum=0;
function recursive(num) {
  if (num == 0) {
 
    return 0;
  }

 return num+recursive(num-1);
}
let num = 5;


console.log(recursive(num));
