
function largest(arr)
{
let large=-Infinity;
for(let i=1;i<arr.length;i++)
{
    if(arr[i]>large)
    {
        large=arr[i];
    }
}
return large;
}
let arr=[6,7,8,9,2,45,67,4];
console.log(largest(arr));