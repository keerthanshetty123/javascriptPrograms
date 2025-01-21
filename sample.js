let arr=[5,6,7,8,9];
let updatedArr=arr.map((val)=>val+1);
console.log(updatedArr);
let arr1=[5,6,7,8,9];
let updatedArr1=arr.filter((val)=>val<8);
console.log(updatedArr1);
let arr2= [2,4,8,10]
let updatedArr2 = arr2.reduce((prev, curr)=> curr= prev+curr)
setTimeout(function(){
    console.log(updatedArr2);
},5000)
