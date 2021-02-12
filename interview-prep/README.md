# Interview Prep

[Back to main README.md](../README.md)

#### table of contents

- [IIFE](#IIFE)
- [Closures](#closure)
- [This Keyword](#this-keyword)
- [Hoisting](#hoisting)
- [Scope and "self"](#scope-and-"self")
- [Equals vs strict Equals](#equals-vs-strict-equals)
- [Log Number Functions](#log-number-functions)
- [Use Strict](#use-strict)
- [Curry Function](#curry-function)
- [Counter Function](#counter-function)
- [Misc Questions](#misc-questions)

---

## [IIFE](IIFE.js)

### What is an IIFE and why are they used?
- IIFE = Immedidately Invoked Function Expression
- Which is a function that is executed right after it is created e.g.
  ![](./assets/iife2.jpg)

another example with jquery

![](./assets/iife3.jpg)

and

![](./assets/iife4.jpg)

---

## [Closure](closure.js)

### What is an closure?

- A closure is an inner function that has access to the scope of an enclosing function

- Closures has access to variables in 3 separate scopes: 
1. variables in its own scope
2. variables in the scope of the outer function
3. variables in the global scope

The closure also has access to:
1. its own parameters
2. parameters of outer function(s)

here's a code example of closures
  ![example of closure](./assets/closure1.png)
  ![closure](./assets/closure.jpg)

## [This Keyword](thisKeyword.js)

- global window object return when console logging `this` since in this example we're not inside any other object

![global window object return when console logging `this`](./assets/this.jpg)

- `this` keyword references whatever object it's inside of, so if you just console.log(this) it'll out the global window object, but if you create an object, you can use `this` to reference any given property inside the { }

![global window object return when console logging `this`](./assets/this1.jpg)

- few examples of using `this` keyword within a couple of {objects}
  ![example with the developer object console logging `this`](./assets/this.png)

---

## Hoisting

---

## Scope and "self"

---

## Equals vs strict Equals

---

## Log Number Functions

---

## use strict

---

## Curry Function

---

## Counter Function

---

## Misc Questions

<details>
<summary><strong>How do we add JS onto a page?</strong></summary>
  <p>Generally you can place</p>
  <xmp><script type="text/javascript"></script></xmp>
  <p>if the script is small in the head title or bottom of page, or if your script is large</p>
  <xmp><script type="text/javascript" src="jsfile.js"></script></xmp>
  <p>Another alternative is via script tags e.g.<xmp><script>js inside</script></xmp></p>
</details>

<details>
<summary><strong>What are the types used in JS?</strong></summary>
  <p>Strings, Numbers, Booleans, Functions, Objects, Null, and Undefined</p>
</details>

<details>
<summary><strong>What are the boolean operators supported by JS?</strong></summary>
  <p>And Operator: &&</p>
  <p>Or Opperator: ||</p>
  <p>Not Operator: !</p>
</details>

<details>
<summary><strong>Short The difference between "==" and "==="?</strong></summary>
  <p>"==" checks equality only</p>
  <p>"===" checks for equality as well as the type</p>
</details>

<details>
<summary><strong>How to access the value of a textbox using JS?</strong></summary>
  <xmp><body>
    Full name: <input type="text" id="txtFullName" name="firstName" value="Jr">
    <script>
      let name = document.getElementById('txtFullName').value; alert(name);
    </script>
  </body></xmp>

  or the old way:
  <pre><script>
  document.forms[0].myButton
  let name = document.forms[0].firstName.value;
  alert(name);
  </script></pre>
</details>

<details>
<summary><strong>How will you get the checkbox status whether its checked or not?</strong></summary>
 <pre>
  let status = document.getElementById("checkbox").checked;
  alert(status);
  //will return true or false
 </pre>
</details>

<details>
<summary><strong>How to create arrays</strong></summary>
 <p>There are two ways</p>
 <p>1st way is to declare an array e.g.</p>
  <pre>
    let names = new Array();
    Add Elements in Array:
    names[0] = "Jr";
    names[1] = "Junior";
    names[2] = "J"
  </pre>
 <p>The other way to create arrays</p>
  <pre>
    let names = new Array("Jr", "junior", "J");
  </pre>
</details>

<details>
<summary><strong>If an array with name as "names" contain 3 elements, how will you print the 3rd element?</strong></summary>
  <pre>
    document.write(names[2]);
  </pre>
</details>

<details>
<summary><strong>How to submit a form using JS</strong></summary>
  <pre>
    document.forms[0].submit()
  </pre>
</details>

<details>
<summary><strong>What does isNaN function do?</strong></summary>
  <p>it returns true if the arg is not a number</p>
</details>

---
