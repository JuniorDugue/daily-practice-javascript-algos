// find the longest word in a string
// ex. the "quick brown fox jumped over the lazy dog"
// ex. "what if we try a super-long word such as otorhinolaryngology"
// another solution

function findLongestWord(str) {
  str = str.split(" ");

  if (str.length == 1) {
    return str[0].length;
  }

  if (str[0].length >= str[1].length) {
    str.splice(1, 1);
    return findLongestWord(str.join(" "));
  }

  if (str[0].length <= str[1].length) {
    return findLongestWord(str.slice(1, str.length).join(" "));
  }
  return str.length;
}

console.log(findLongestWord("quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("what if we try a super-long word such as otorhinolaryngology"));
