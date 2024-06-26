let breadType = ["wheat", "white", "italian"];
let fillingType = ["Turkey", "Chicken", "Beef"];
let condiments = ["Mayo", "Thousand Island", "Ranch"]

function makeSandwich(breadType, fillingType, condiments) {
let sandwich = [breadType, fillingType, condiments]

    // TODO: make a sandwich with the given ingredients
   
   
    
    return sandwich;
}
let newSandwich = makeSandwich(breadType[1], fillingType[0], condiments[2]);
console.log(newSandwich);