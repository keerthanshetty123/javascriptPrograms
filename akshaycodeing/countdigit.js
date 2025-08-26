function countDiigt(n)
{
let count=0;
n=Math.abs(n);
if(n==0)
{return 1;}
while(n>0)
{
    n=Math.floor(n/10);
    count++;
}
return count;
}
let num=-789;
console.log(countDiigt(num))  