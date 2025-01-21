function ArrayLeaders(array) {
  let leader;
  let LeaderArray = [];
  for (let i = 0; i < array.length; i++) {
    leader = true; /*Important line Leader means right value should be smaller than the leader */
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[i]) {
        leader = false;
      }
    }
    if (leader == true) {
      LeaderArray.push(array[i]);
    }
  }
  console.log(LeaderArray);
}
let array = [5, 22, 3, 6, 4, 2, 3];
console.log(ArrayLeaders(array));
