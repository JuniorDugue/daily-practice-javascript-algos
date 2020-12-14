// factorialize a number
// 2nd solution
// if num equals 0 then return 1, then return num * factorializing  the num minus 1

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

console.log(factorialize(1));
console.log(factorialize(9));
console.log(factorialize(5));
console.log(factorialize(4));
