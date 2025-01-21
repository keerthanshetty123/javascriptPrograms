function MaxNumber(num) {
    let max = 0;
    let n = num.length;
    let i = 0;
    console.log(n);
    while (i<n) {
      if (num[i] > max) {
        max = num[i];
      }
      i++;
    }
    console.log(max,'max');
  }
  
  let num = [1, 2, 1, 4, 5, 3, 8, 6, 2, 3, 4, 5,34];
  console.log(MaxNumber(num));