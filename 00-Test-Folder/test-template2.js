let num = 1001;
let numstring = num.toString();
let numlength = numstring.length

//Returns 'undefined'.


//Use type conversion to print the length (number of digits) of an integer.
console.log(numlength);
//Follow up: Print the number of digits in a DECIMAL value.
let Num = 123.45;
let decimalNumString = Num.toString().replace('.','');
let decimalNumLength = decimalNumString.length;
console.log(decimalNumLength);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

if (String(num).includes('.')){
    console.log(String(num).length-1);
    } else {
    console.log(String(num).length);
    }

