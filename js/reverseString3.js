// reverse a string

function reverseString(str) {
  let reverse = "";
  str.split("");
  for (var i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(reverseString("lambda"));
console.log(reverseString("school"));
console.log(reverseString("graduate"));
