let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//1) Replace the gene "GCT" with "AGG", and then print the altered strand.
dnaTwo = dnaTwo.replace("GCT","AGG");
console.log(dnaTwo);
//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
if (dnaTwo.indexOf("CAT") !== -1){
    console.log("CAT GENE FOUND");
} else {
    console.log("CAT gene NOT found");
}



//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log(dnaTwo.slice(16,19));
//4) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dnaTwo.length} characters long`);
//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.

console.log(`${dnaTwo.slice(4,7).toLowerCase()}o ${dnaTwo.slice(dnaTwo.indexOf("CAT"),dnaTwo.indexOf("CAT")+3).toLowerCase()}`);
