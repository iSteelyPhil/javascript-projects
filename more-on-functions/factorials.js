function factorial(integer) {
    if (integer === 0 || integer === 1) {
        // Base case: 0! = 1 and 1! = 1
        return 1;
    } else if (integer < 0) {
        // Factorial is not defined for negative numbers
        return "Factorial is not defined for negative numbers";
    } else {
        // Recursive case
        return integer * factorial(integer - 1);
    }
}

// Test cases
console.log(factorial(4)); // Expected output: 24
console.log(factorial(5)); // Expected output: 120
console.log(factorial(0)); // Expected output: 1
console.log(factorial(1)); // Expected output: 1
console.log(factorial(-1)); // Expected output: "Factorial is not defined for negative numbers"
