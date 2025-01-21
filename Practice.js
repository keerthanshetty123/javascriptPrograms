function posneg(array)
{
let pos=0;
let neg=1;
let array2=[];
for(let i=0;i<array.length;i++)
{
    if(array[i]<0)
    {
        array2[neg]=array[i];
        neg+=2;
    }
  else if(array[i]>=0)
  {
      array2[pos]=array[i];
      pos+=2;
      
  }
}
return array2;
}
let array=[9,2,-2,-1,6,-3];
console.log(posneg(array));

