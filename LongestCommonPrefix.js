function longestPrefix(str)
{
let a=str[0];
let b=str[str.length-1];
let ans="";
for(let i=0;i<str[0].length;i++)
{
    if(a[i]==b[i])
    {
     ans=ans+a[i]
    }
    else{
        break;
    }
}
return ans;
}
let str= ["flower","flow","flight"];
console.log(longestPrefix(str));