function factorial(integer) {
    if (integer === 0 || integer === 1) {
      
        return 1;
    } else if (integer < 0) {
       
        return "Factorial is not defined for negative numbers";
    } else {
       
        return integer * factorial(integer - 1);
    }
}


console.log(factorial(4)); 
console.log(factorial(5)); 
console.log(factorial(0)); 
console.log(factorial(1)); 
console.log(factorial(-1)); 
