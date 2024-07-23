// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
let divide = function(numerator,denominator){
    result = "";
    if(denominator ===0){
        throw TypeError("Attempted to divide by zero!")
    }
    result = numerator / denominator
    return result
}
// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
module.exports = divide;