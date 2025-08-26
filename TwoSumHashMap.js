function optimeSum(num)
{
  let hashMap=new Map();
for(let i=0;i<num.length;i++)
{
let sum=target-num[i];
if(hashMap.has(sum))
{
  return[hashMap.get(sum),i];
}
hashMap.set(num[i],i);
}
}
let num=[3,2,4];
let target=6;
console.log(optimeSum(num));