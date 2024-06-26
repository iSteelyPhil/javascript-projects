let breadTypes = ["wheat", "white", "italian"];
let fillingTypes = ["Turkey", "Chicken", "Beef"];
let condimentTypes = ["Mayo", "Thousand Island", "Ranch"];

function makeSandwich(breadType, fillingType, condiments) {
    // Create the sandwich object
    let sandwich = {
        breadType: breadType,
        fillingType: fillingType,
        condiments: condiments
    };

    // Return the sandwich object
    return sandwich;
}

// Test the function
let mySandwich = makeSandwich(breadTypes[1], fillingTypes[0], [condimentTypes[2], "Lettuce", "Tomato"]);
console.log(mySandwich);
