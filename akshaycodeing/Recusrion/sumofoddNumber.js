function SumofArray(arr,n)
{
    if(n==0)
    {
        return arr[0];
    }
    return arr[n]+SumofArray(arr,n-1);

}
let num=[5,4,3,2,1];
let n=num.length-1;
console.log(SumofArray(num,n))
