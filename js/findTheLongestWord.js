// find the longest word in a string
// ex. the "quick brown fox jumped over the lazy dog"
// ex. "what if we try a super-long word such as otorhinolaryngology"

function findLongestWord(str) {
  var words = str.split(" "); //each word will have space around them so we'll split the strings based on empty spaces
  var maxLength = 0; //so we can find the max length of the longest word
  for (var i = 0; i < words.length; i++) { 
    if (words[i].length > maxLength) { //if its greater then 0 or not an empty space
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

console.log(findLongestWord("quick brown fox jumped over the lazy dog")); //returns 6
console.log(findLongestWord("what if we try a super-long word such as otorhinolaryngology")); // returns 19
