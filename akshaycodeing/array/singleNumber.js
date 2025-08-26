function singleNumber(num)
{
let xor=0;
for(let i=0;i<num.length;i++)
{
    xor=xor^num[i];
}
return xor;
}
let num=[2,1,2,1,3];
console.log(singleNumber(num))