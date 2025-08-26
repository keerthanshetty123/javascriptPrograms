function reverString(string)
{
    let n=string.length;
    let reversed="";
for(let i=n-1;i>=0;i--)
{
reversed+=string[i];
}
return reversed;
}
let string="keerthan";
console.log(reverString(string));