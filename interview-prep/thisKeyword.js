// what is the 'this' keyword and how is it used?

// this refers to whatever object it is directly inside of, e.g. the properties within developer{}

const developer = {
  name: "jr",
  dob: 1986,
  currentYear: 2020,
  favoriteLanguage: "javascript",
  getAgeOfDeveloper: function () {
    return developer.currentYear - developer.dob;
  },
  favoriteFramework: "React",
};

console.log(developer.favoriteLanguage); // will return -> javascript
console.log(developer.getAgeOfDeveloper()); // will return -> 21 ;) lol

// another simple example
const engineer = {
  name: "jr",
  dob: 1986,
  currentYear: 2020,
  favoriteLanguage: "javascript",
  getAgeOfDeveloper: function () {
    return this.currentYear - this.dob; //this keyword is referring to engineer object itself, currentyear and dob will still refer to those properties
  },
  favoriteFramework: "React",
};

console.log(engineer.favoriteLanguage); // will return -> javascript
console.log(engineer.getAgeOfDeveloper()); //
