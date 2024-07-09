let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)},
   crewReports: function(){
      return this.name + " is a " + this.species + ". They are " + this.age + " year(s) old and " + this.mass + " kilograms. Thier ID is " + this.astronautID + ".";
   } 
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)},
   crewReports: function(){
      return this.name + " is a " + this.species + ". They are " + this.age + " year(s) old and " + this.mass + " kilograms. Thier ID is " + this.astronautID + ".";
   } 
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)},
   crewReports: function(){
      return this.name + " is a " + this.species + ". They are " + this.age + " year(s) old and " + this.mass + " kilograms. Thier ID is " + this.astronautID + ".";
   } 
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)},
   crewReports: function(){
      return this.name + " is a " + this.species + ". They are " + this.age + " year(s) old and " + this.mass + " kilograms. Thier ID is " + this.astronautID + ".";
   } 
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function () {return Math.floor(Math.random()*11)},
   crewReports: function(){
      return this.name + " is a " + this.species + ". They are " + this.age + " year(s) old and " + this.mass + " kilograms. Thier ID is " + this.astronautID + ".";
   } 
};
// After you have created the other object literals, add the astronautID property to each one.


superChimpOne["astronautID"] = 1
salamander["astronautID"] = 2
superChimpTwo["astronautID"] = 3
beagle["astronautID"] = 4
tardigrade["astronautID"] = 5



// Add a move method to each animal object




// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, salamander, beagle, tardigrade];
// Print out the relevant information about each animal.
console.log(superChimpOne.crewReports());
console.log(salamander.crewReports());
console.log(superChimpTwo.crewReports());
console.log(beagle.crewReports());
console.log(tardigrade.crewReports());

console.log("TEST BREAK");
// Start an animal race!
function fitnessTest(candidates){
   let results = [], steps, turns;
   for (i = 0; i<candidates.length; i++){
      steps = 0
      turns = 0
   while (steps <= 20){
      steps += candidates[i].move();
      turns++
   }
   results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`)
   }

return results;
}
console.log(fitnessTest(crew));