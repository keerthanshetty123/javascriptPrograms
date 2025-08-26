function jump(arr)
{
let final_postion=arr.length-1;
for(let i=arr.length-2;i>=0;i--)
{
    if(i+ arr[i]>=final_postion)
    {
        final_postion=i;
    }
}
if(final_postion==0)
{
    return true;
}
else
{
    return false;
}
}
let arr=[2,3,1,0,0,0,4];
console.log(jump(arr));