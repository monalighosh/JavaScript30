"use strict";

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Is at least one person 19 or older?
const resultSome = people.some(function(person){
  const now = new Date().getFullYear();
  const age = now - person.year;
  return age >= 19;
});
console.log("Is at least one person 19 or older?");
console.log(resultSome);
console.log("----------------------");


// Is everyone 19 or older?
const resultEvery = people.every(function(person){
  const now = new Date().getFullYear();
  const age = now - person.year;
  return age >= 19;
});
console.log("Is everyone 19 or older?");
console.log(resultEvery);
console.log("----------------------");

// Find the comment with the ID of 823423