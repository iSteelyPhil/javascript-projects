// Define the elements as arrays
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

// Create a 2-dimensional array 'table' containing the elements
let table = [];
table.push(element1, element2, element26);

// Add another level to represent properties of each element
let element1Properties = {
    name: 'hydrogen',
    symbol: 'H',
    mass: 1.008
};

let element2Properties = {
    name: 'helium',
    symbol: 'He',
    mass: 4.003
};

let element26Properties = {
    name: 'iron',
    symbol: 'Fe',
    mass: 55.85
};

// Create a 3-dimensional array containing the elements and their properties
let threeDimensionalArray = [
    [element1, element1Properties],
    [element2, element2Properties],
    [element26, element26Properties]
];

// Print out one entry from each level in the array
console.log(threeDimensionalArray[0]); // Print element1 and its properties
console.log(threeDimensionalArray[1]); // Print element2 and its properties
console.log(threeDimensionalArray[2]); // Print element26 and its properties
