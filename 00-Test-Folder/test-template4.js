//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log(dnaTwo.slice(16,19));
//4) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dnaTwo.length} characters long`);
//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
console.log(`${dnaTwo.slice(4,7).toLocaleLowerCase()}0
${dnaTwo.indexOf("CAT").toLocaleLowerCase()})


console.log(`${dna.slice(4,7).toLowerCase()}o ${dna.slice(dna.indexOf('CAT'),dna.indexOf('CAT')+3).toLowerCase()}`);