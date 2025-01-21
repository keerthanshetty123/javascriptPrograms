var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 3;

for (i = 0; i <= array.length - 1; i++) {
  if (array[i] > largest) {
    var largest = array[i];
  }
}

console.log(largest);
