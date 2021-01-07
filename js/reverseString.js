// REVERSE A STRING
// ex.  "hello"
// ex. "ayyyoooooo"
// ex. "fullstack javascript developer"
// ex. "im a software engineer"

// 1st solution, split the strings & turn them into an array
function reverseString(str) {
  str = str.split("");
  str = str.reverse("");
  str = str.join("");
  return str;
}

console.log(reverseString("hello"));
console.log(reverseString("ayyyoooooo"));
console.log(reverseString("fullstack javascript developer"));
console.log(reverseString("im a software engineer"));

// 2nd solution using a for loop
function reverseString2(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString2("pizza"));
console.log(reverseString2("cookies"));
console.log(reverseString2("chicken wings"));
console.log(reverseString2("donuts"));
