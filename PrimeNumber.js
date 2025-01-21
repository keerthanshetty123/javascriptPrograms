function PrimeNumber(array) {
  let array2 = [];

  for (let i = 2; i <= array / 2; i++) {
    if (array % i !== 0) {
      return true;
      break;
    }
  }
  return false;
}
let array = 9;
console.log(PrimeNumber(array));
