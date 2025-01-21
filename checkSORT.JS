
function checkSort()
{
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]>=arr[i-1])
        {

        }
        else{
            return false;
        }
    }
  return true;
}
let arr=[5,6,7,1,9];
console.log(checkSort(arr));