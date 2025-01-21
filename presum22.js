function preFixSum(array) {
    let prefix = [];
    for (let i = 1; i < array.length; i++) {
   array[i]=array[i]+array[i-1];
    }
    console.log(array);
    console.log(prefix);
  }
  let array = [2, 3, 4, 5, 6];
  console.log(preFixSum(array));
  