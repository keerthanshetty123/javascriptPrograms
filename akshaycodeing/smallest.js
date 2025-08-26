
function smallest(arr)
{
let smaller=+Infinity;
for(let i=1;i<arr.length;i++)
{
    if(arr[i]<smaller)
    {
        smaller=arr[i];
    }
}
return smaller;
}
let arr=[6,7,8,9,2,45,67,-4];
console.log(smallest(arr));