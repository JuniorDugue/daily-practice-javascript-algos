{
  /*
Good code can be described in two words, readability(is your code clean? can others read it?) and scability(code that can scale)

create a function that'll receive an array
our array is 'nemo', loop thru the array, since i = 0, and the array length is 1, we'll loop 
how can we measure the performance of this code? 


runtime

*/
}

// READABILITY
const nemo = ["nemo"];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      //will turn into if('nemo' === 'nemo') and since it's true will consolelog nemo
      console.log("FOUND NEMO!"); //FOUND NEMO!
    }
  }
}

findNemo(nemo);

// SCALABILITY
const nemo1 = ["nemo"];

function findNemo(array) {
  let t0 = performance.now(); //
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("FOUND NEMO!"); //FOUND NEMO!
    }
  }

  let t1 = performance.now(); //
  console.log("this call to find Nemo took " + (t1 - t0) + " milliseconds to run");
}
