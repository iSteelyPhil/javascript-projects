// Code your orbitCircumference function here:
function calculateCircumference(radius){
  let pie = Math.PI;
  let circumference = 2 * pie * radius;
  return Math.round(circumference);

}

// Code your missionDuration function here:
function missionDuration(orbits, radius = 2000, speed = 28000){
  let circumference = calculateCircumference(radius);
  let time  = (circumference / speed) * orbits;
  time =  Math.round(time*100)/100
  console.log(`The mission will travel ${circumference} km around the planet, and it will take ${time} hours to complete.`)
  return time;
}

// Copy/paste your selectRandomEntry function here:
function randomSelection(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index]
}
function tripleRandom(array) {
  let newArray = [];
  while(newArray.length < 3) {
    let numbers = randomSelection(array);
    if (!newArray.includes(numbers)) {
      newArray.push(numbers);
    }
  

}
    return newArray;
  }

// Code your oxygenExpended function here:

function oxygenExpended(Candidate){
  let orbits = 3
  let spaceWalk = missionDuration(orbits);
  let oxUsed = Candidate.o2Used(spaceWalk)
  oxUsed = Math.round(oxUsed*1000)/1000
  console.log(`${Candidate.name} will perform the spacewalk, which will last ${spaceWalk} hours and require ${oxUsed} kg of oxygen.`);
  return oxUsed
}
// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };


 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
missionDuration(5);
oxygenExpended(randomSelection(crew));