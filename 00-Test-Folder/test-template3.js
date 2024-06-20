//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
element1 = ['hydrogen', 'H', 1.008]
element2 = ['helium', 'He', 4.003]
element26 = ['iron', 'Fe', 55.85]
//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table = [];

table.push(element1, element2, element26);


//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

let element1details = ['name: hydrogen', 'symbol: H', 'mass: 1.008'];
let element2details = ['name: helium', 'symbol: He', 'mass: 4.003'];
let element26details = ['name: iron', 'symbol: Fe', 'mass: 55.85'];

let table2 = []
table2.push(element1details, element2details, element26details)


let thirdDimension = (table, table2) 
console.log(thirdDimension[0][1]);
console.log(thirdDimension[0][0]);
console.log(thirdDimension[0]);
console.log(thirdDimension[1]);
