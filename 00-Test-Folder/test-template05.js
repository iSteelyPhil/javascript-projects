let condiments = ["Mayo", "Thousand Island", "Ranch"]
function makeSandwich(breadType, fillingType, condiments) {
  
    let sandwich = {
        breadType: breadType,
        fillingType: fillingType,
        condiments: condiments
    };


    return sandwich;
}


let mySandwich = makeSandwich("wheat", "Turkey", condiments[0]);
console.log(mySandwich);
