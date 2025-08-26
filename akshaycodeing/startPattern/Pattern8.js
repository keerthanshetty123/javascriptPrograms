let n=5;
 let swtttch=1;
for(let i=0;i<n;i++)
{
    let row="";
   
    for(let j=0;j<=i;j++)
    {
        row=row+swtttch;
        if(swtttch==1)
        {
            swtttch=0;
        }
        else{
            swtttch=1;
        }
    }
    console.log(row);
}