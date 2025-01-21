function lengthofLastWord(string)
{
    let length=0;
for(let i=0;i<string.length;i++)
{
    if(string[i]==' ')
    {
        length=0;
    }
    else{
        length++;
    }
}
return length;
}
let string="keerthan shetty"
console.log(lengthofLastWord(string));