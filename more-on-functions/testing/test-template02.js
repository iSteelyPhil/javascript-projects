const input = require('readline-sync');

function getValidInput(prompt, isValid) {

 
    let userInput = input.question(prompt);

 
    while (!isValid(userInput)) {
    console.log("Invalid input. Try again.");
    userInput = input.question(prompt);
    }

    return userInput;
};

let isColor = function(userInput) {
  return userInput.toLowerCase() === "red";
};


console.log(getValidInput('What color is this line? ', isColor));