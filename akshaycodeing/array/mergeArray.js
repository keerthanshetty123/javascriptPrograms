function mergeArray(num1, num2, m, n) {
  let p1=m-1;
  let p2=n-1;
  for(let i=m+n-1;i>=0;i--)
  {
    if(p2<0)
    {
      break;
    }
    if(p1>=0 && num1[p1]>num2[p2]){
      num1[i]=num1[p1];
      p1--;
    }else{
      num1[i]=num2[p2];
      p2--;
    }
    
  }
  return num1;
}
let num1 = [2, 3, 4, 0, 0, 0];
let num2 = [4, 5, 6];
let m = 3;
let n = 3;
console.log(mergeArray(num1, num2, m, n));
