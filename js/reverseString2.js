let product = "apple";
let food = "orange";
let personality = "bananas";

function reverseString(str) {
  str = str.split("");
  str = str.reverse("");
  str = str.join("");
  return str;
}

console.log(reverseString(product));
console.log(reverseString(food));
console.log(reverseString(personality));
