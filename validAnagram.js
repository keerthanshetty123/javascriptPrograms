function validAnagaram(s, t) {
  let hashmap = new Map();
  let hashmap2 = new Map();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count = 0;
    if (!hashmap.has(s[i])) {
      hashmap.set(s[i], 1 + count);
    } else if (hashmap.has(s[i])) {
      count++;
      hashmap.set(s[i], 1 + count);
    }
  }
  for (let i = 0; i < t.length; i++) {
    count = 0;
    if (!hashmap2.has(t[i])) {
      hashmap2.set(t[i], 1 + count);
    } else if (hashmap2.has(t[i])) {
      count++;
      hashmap2.set(t[i], 1 + count);
    }
  }
  console.log(hashmap == hashmap2);
  if (hashmap == hashmap2) {
    return true;
  } else {
    return false;
  }
  console.log(hashmap);
  console.log(hashmap2);
}
let s = "geeks";
let t = "kseeg";
console.log(validAnagaram(s, t));
