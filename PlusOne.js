function plusOne(digits) {
    let result="";
    let result2=[];
    for(let i=0;i<digits.length;i++)
    {
    result+=digits[i];
    }
    console.log(result);
    result=Number(result);
    console.log(result);
    let myArr = String(result).split("").map((result) => {
        return Number(result+1)
    })
    return myArr;
};
let num=[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(plusOne(num))