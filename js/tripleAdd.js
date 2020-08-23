// tripleAdd(10)(20)(30);
// returns total of all 3 numbers added together

/*  
must return a function, that returns another function, that returns the answer

*/

function tripleAdd(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

//
function tripleAdd1(num1, num2, num3) {
  return num1 + num2 + num3;
}

tripleAdd(10)(20)(30);
tripleAdd1(10, 20, 30);

console.log(tripleAdd);
console.log(tripleAdd1);
