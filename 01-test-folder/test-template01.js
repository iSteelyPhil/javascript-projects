function factorial(n) {
  // Base case: if n is 0 or 1, return 1
  if ( n === 1) {
    return 1;
  }
  // Recursive case: multiply n by the factorial of n-1
  return n * factorial(n - 1);
}

console.log(factorial(2)); // Output: 120
