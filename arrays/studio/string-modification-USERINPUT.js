const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
newstr = str.replace('LaunchCode', 'nchCodeLau')
console.log(newstr)

let firstThreeStr = str.substring(0, 3);
console.log(firstThreeStr)

let restOfStr = str.substring(3, 10)

let newbieStr = restOfStr + firstThreeStr
console.log(newbieStr)
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Hey Check out how I changed the code of ${str} so now it reads as ${newbieStr}!`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let strInput = input.question("Enter the number of letters (no more than three) to relocate in the word 'LaunchCode': ");
strInput = parseInt(strInput)
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (strInput > 1 && strInput <= 3){
    let firstSub = str.substring(0, strInput)
    let restOfSub = str.substring(strInput)
    let outputStr = restOfSub + firstSub
    console.log(outputStr)
} else{
    let onlyThreeSub = str.substring(0,3);
    let restOfSub = str.substring(strInput)
    let onlyThreeOutput = restOfSub + onlyThreeSub
    console.log(`Error make sure input is within 3 integers, as a result, we will only move the first three characters: ${onlyThreeSub}`)
    console.log(onlyThreeOutput)
}