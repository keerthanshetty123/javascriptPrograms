function MaxRepeate(num)
{
let count=0;
let max=0;
for(let i=0;i<num.length;i++)
{
    if(num[i]==1)
    {
        count++;

    }
    else {
        count=0;
    }
    if(count>max)
    {
        max++;
    }

}
console.log(max,'max');
}
let num=[1,1,0,0,1,1,1,1,0,0];
console.log(MaxRepeate(num));