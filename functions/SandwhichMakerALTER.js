let condiments = ["Mayo", "Thousand Island", "Ranch"]
function makeSandwich(breadType, fillingType, condiments) {
  
    let sandwich = {
        Bread: breadType,
        Filling: fillingType,
        Condiment: condiments
    };


    return sandwich;
}


let mySandwich = makeSandwich("Wheat", "Turkey", condiments[0]);
console.log(mySandwich);
