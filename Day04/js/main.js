"use strict";

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// 1. Filter the list of inventors for those who were born in the 1500's
// Use of an array filter method which filters out the investor born in the 1500's by checking their year property
const inventorsBornIn1500 = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);
console.log("List of inventors born in the 1500's");
console.table(inventorsBornIn1500);
console.log("------------------------------------");

// 2. Give us an array of the inventors' first and last names
// Use of an array map method which takes the investor's first and last name property and returns the new array
const fullNameList = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
console.log("List of inventors' first and last names");
console.table(fullNameList);
console.log("------------------------------------");

// 3. Sort the inventors by birthdate, oldest to youngest
/* 
Use of an array sort method which takes the investor's year property, 
compares the current investor's and its next investor's year property and returns the new array with the sorted values 
*/
const sortByAge = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.log("List of inventors oldest to youngest");
console.table(sortByAge);
console.log("------------------------------------");

// 4. How many years did all the inventors live?
/* 
Use of an array reduce method which takes the accumulator with initial value of 0. 
It keeps on adding up the difference between investor's year property and passed property, and returns the total number of years lived 
*/
const livedYears = inventors.reduce((acc, inventor) => {
  acc += inventor.passed - inventor.year;
  return acc;
}, 0);
console.log("Years all the inventors live");
console.log(livedYears);
console.log("------------------------------------");

// 5. Sort the inventors by years lived
/* 
Use of an array sort method which takes the difference beetween investor's year and passed property, 
compares it with the next investor's same property difference and returns the new array with the sorted values 
*/
const numYearsLived = inventors.sort((a, b) => ((a.passed - a.year) > (b.passed - b.year)) ? -1 : 1);
console.log("List of inventors by years lived");
console.table(numYearsLived);
console.log("------------------------------------");

// 6. Sort the people alphabetically by last name
/* 
Use of an array sort method which first splits the name into an array of first name and last name,
destructures it and makes both two separate variables, and then compares the last name of the current inventor 
with the next one on the list and returns the new array
*/
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 
'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 
'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 
'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
const sortByLastName = people.sort(function(a, b){
  const[alast, afirst] = a.split(", ");
  const[blast, bfirst] = b.split(", ");
  return alast > blast ? 1 : -1;
});
console.log("List of people alphabetically by last name");
console.table(sortByLastName);
console.log("------------------------------------");

// 7. Sum up the instances of each of these
/* 
Use of an array reduce method which takes an empty object as an accumulator to store the items and number of its instances.
Then it iterates over each item and checks if it exists in an object if not, it adds the item with the initial value 0 and later increments its value by 1 each time
*/
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const dataInstances = data.reduce(function(obj, instance){
  if(!obj[instance]) {
    obj[instance] = 0;
  }
  obj[instance]++;
  return obj;
}, {});
console.log("List of instances in data array");
console.log(dataInstances);