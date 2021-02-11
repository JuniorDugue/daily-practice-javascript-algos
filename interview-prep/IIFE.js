// simple function

/*
function doubleNumber(num){
  return num * 2;
}
 */

// normal way would be doubleNumber(5) which would result in 10, but to make this function into an IIFE, wrap the entire declaration in ()


// IIFE function
(function doubleNumber(num){
  return num * 2;
})(10)

// will return 20 because

/*
to make the simple function into a IIFE, wrap the entire function declartion in ()

then we want to immediately invoke our function by placing (), which will invoke our IIFE

first we're defining the function, then immediately invoking it with another set of ()

*/