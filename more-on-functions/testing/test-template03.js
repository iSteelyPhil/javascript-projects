const input = require('readline-sync');

function getValidInput(prompt, isValid) {

    
    let userInput = input.question(prompt);

    
    while (!isValid(userInput)) {
    console.log("Invalid input. Try again.");
    userInput = input.question(prompt);
    }

    return userInput;
}


let isEven = function(n) {
    return Number(n) % 2 === 0;
};

console.log(getValidInput('Enter an even number:', isEven));