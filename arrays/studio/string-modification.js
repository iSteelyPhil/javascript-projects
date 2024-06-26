const input = require('readline-sync');
const { strings } = require('./array-string-conversion/array-testing');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let firstThreeStr = str.slice(0, 3);
console.log(firstThreeStr)
let restOfStr = str.slice(3, str.length)
console.log(restOfStr)

let newbieStr = restOfStr + firstThreeStr
console.log(newbieStr)
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Hey Check out how I changed the code of ${str} so now it reads as ${newbieStr}!`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let strInput = input.question("Enter the number of letters (no more than three) to relocate in the word 'LaunchCode': ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (strInput > 0 && strInput <= str.length){
    let firstSub = str.slice(0, strInput)
    let restOfSub = str.slice(strInput)
    let outputStr = restOfSub + firstSub
    console.log(outputStr)
} else if (strInput > str.length) {
    let onlyThreeSub = str.slice(0,3);
    let restOfSub = str.slice(3,10)
    let onlyThreeOutput = restOfSub + onlyThreeSub
    console.log(`Error make sure input is within 3 integers, as a result, we will only move the first three characters: ${onlyThreeSub}`)
    console.log(onlyThreeOutput)
}
 