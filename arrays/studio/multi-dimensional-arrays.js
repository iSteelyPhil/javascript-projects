let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(',').sort();
let equipmentArray = equipment.split(',').sort();
let petsArray = pets.split(',').sort();
let sleepAidsArray = sleepAids.split(',').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
cargoHold = [];
cargoHold.push(foodArray, equipmentArray, petsArray, sleepAidsArray);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
//
let cargoQuery = input.question('Please select from cabins 0 through 3 ');
let cabinItem = input.question('enter an item to search for in the cabin ')

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (cargoQuery >= 0 && cargoQuery <= 3) {
    console.log(`Cabin Contents \n ${cargoQuery}:`);
    console.log(cargoHold[cargoQuery]);
} else {
    console.log("Invalid cabinet number entered.");
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
if (cargoQuery >= 0 && cargoQuery <= 3) {
    if (cargoHold[cargoQuery].includes(cabinItem)) {
        console.log(`${cargoQuery} DOES includes ${cabinItem}`);
    } else {
    console.log(`${cargoQuery} DOES NOT include ${cabinItem}`);
    }
} else {
    console.log("Invalid cabinet number entered.");
}

