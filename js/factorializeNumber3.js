// factorialize a number
// 3rd solution
// use a for loop, let a equal one initialized then num greater then or equal to 1, and decrement num by 1  

function factorialize(num) {
  for (var a = 1; num >= 1; num--) {
    a *= num;
  }
  return a;
}

console.log(factorialize(100));
console.log(factorialize(75));
console.log(factorialize(50));
console.log(factorialize(25));
