function MajorityElemt(array) {
  let count = 0;
  let element;
  for (let i = 0; i < array.length; i++) {
    if (count == 0) {
      count++;
      element = array[i];
    } else if (element == array[i]) {
      count++;
    } else {
      count--;
    }
  }
  let count2 = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      count2++;
    }
  }
  if (count2 >= array.length / 2) {
    console.log(element);
    return element;
  }
  return -1;
}
let array = [4, 4, 6, 4, 2, 4, 4, 2, 4, 2, 2];
console.log(MajorityElemt(array));
