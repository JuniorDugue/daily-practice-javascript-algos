// find the longest word in a string
// ex. the "quick brown fox jumped over the lazy dog"
// ex. "what if we try a super-long word such as otorhinolaryngology"
// intermediate solution

function findLongestWord(str) {
  return str.split(" ").reduce(function (x, y) {
    return Math.max(x, y.length);
  }, 0);
}

console.log(findLongestWord("quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("what if we try a super-long word such as otorhinolaryngology"));
