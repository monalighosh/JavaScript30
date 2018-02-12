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

const currentYear = new Date().getFullYear();

// Is at least one person 19 or older?
// Uses an array method some to find if at least one item satisfies the criteria
const resultSome = people.some((person) => {
  const age = currentYear - person.year;
  return age >= 19;
});
console.log(`Is at least one person 19 or older? ${resultSome}
---------------------------`);

// Is everyone 19 or older?
// Uses an array method every to find if every item satisfies the criteria
const resultEvery = people.every((person) => {
  const age = currentYear - person.year;
  return age >= 19;
});
console.log(`Is everyone 19 or older? ${resultEvery}
---------------------------`);

// Find the comment with the ID of 823423
// Uses an array method find to find an item that satisfies the test
const resultFind = comments.find((comment) => comment.id === 823423);
console.log("Find the comment with the ID of 823423"); 
console.table(resultFind);
console.log("---------------------------");

// Find and delete the comment with the ID of 823423
// Uses an array method findIndex to find an index of the item that satisfies the test and then uses array splice method to delete that item from an array
const resultIndex = comments.findIndex((comment) => comment.id === 823423);
comments.splice(resultIndex, 1);
console.log("Find and delete the comment with the ID of 823423");
console.table(comments);
