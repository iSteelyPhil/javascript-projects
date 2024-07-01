//Create an anonymous function and set it equal to a variable.

let anon = function(outcome){
    
if (typeof outcome === 'number'){
    let i = 0;
    for (i = 0; i < outcome; i++);
    return outcome * 3
} else if (typeof outcome === 'string'){
    return "ARRR!";
} else {
    return outcome;
}
};

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/


console.log(anon(5));    
console.log(anon('Hello'));

let arr = ['Elocution', 21, 'Clean teeth', 100];
let newArr = arr.map(anon).join(' ');
console.log(newArr)
