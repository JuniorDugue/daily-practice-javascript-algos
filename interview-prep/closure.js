// what is a closure? and code an example that functions correctly

const globalVariable = "global var";

function outterFunc(param1) {
  const variable1 = "var one";

  function innerFunc(param2) {
    const variable2 = "var two";

    console.log("globalVariable: ", globalVariable); // will return -> globalVariable: global var
    console.log("variable1: ", variable1); // will return -> variable1: var  one
    console.log("variable2: ", variable2); // will return -> variable2: var two
    console.log("param1: ", param1); // will return -> param1: param two
    console.log("param2: ", param2); // will return -> param2: param one
  }
  innerFunc("param one");
}
outterFunc("param two");
