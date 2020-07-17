// Name Swap
// Challenge
// Reverse the order of two provided SVGStringList.apply

// Examples
// "Abraham Lincoln" -> "Lincoln Abraham"
// "Hank Aaron" -> "Aaron Hank"

// Approach 1 - //Using Built in Functions

// Tools
// String.prototype.split()
// http://bit.ly/string-split
// Array.prototype.reverse()
// http://bit.ly/array-reverse-method
// Array.prototype.join()
// http://bit.ly/array-join

const name = `junior dugue`

console.log(name.split(''));
// no spaces will output each character into an array
console.log(name.split(' '));
// a space will output each word into an array



// reverse method reverses an array in place.1st array element becomes the last and the last array element becomes the 1st
const reverseArray = ["junior", "dugue"]
console.log(reverseArray.reverse());
// will output ['dugue, 'junior]



// join method joins all elements of an array or an array like object into a string a returns this string
const reverseJoinedArray = [`dugue`, `jr`]
console.log(reverseJoinedArray.join(''));
// will output `duguejr`
console.log(reverseJoinedArray.join(' '));
// will output `dugue jr`

function nameSwap(str){

// step 1 -> split string into an array
const stringToArray = str.split(' ');

// step 2 -> reverse array
const reverseArray = stringToArray.reverse();
// step 3 -> join array into string

// step 4 -> return string

// alternative -> one line of code

}

console.log(nameSwap('Abraham Lincoln'));
console.log(nameSwap('Hank Aaron'));

