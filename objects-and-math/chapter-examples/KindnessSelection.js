function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
let finalArr =[];

for (i=0; i < 8; i++){
  console.log(randomSelection(happiness));
}

let bothArr = [happiness, words];
let chosenArr = randomSelection(bothArr);


function randomArr(){

  let randomItem = randomSelection(chosenArr);
   
  return randomItem;

}

finalArr = randomArr();
console.log(finalArr);
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.