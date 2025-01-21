function wordPattern(pattern, s) {
  let words = [];
  words = s.split(" ");
  let ans = true;
  let HashMap = new Map();
  for (let i = 0; i < words.length; i++) {
    if (!HashMap.has(pattern[i])) {
      HashMap.set(pattern[i], words[i]);
    }
  }
  for (let i = 0; i < words.length; i++) {
    if (HashMap[pattern[i]] == words[i]) {
      ans = true;
    } else if (!HashMap[pattern[i]] == words[i]) {
      ans = false;
    }
  }
  console.log(HashMap);
  console.log(ans);
}

let pattern = "abba";
let s = "dog cat cat fish";
console.log(wordPattern(pattern, s));
