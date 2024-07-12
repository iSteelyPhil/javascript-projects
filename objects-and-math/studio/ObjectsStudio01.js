// Code your selectRandomEntry function here:
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
// Code your buildCrewArray function here:
 function buildCrew(arr1, arr2){
  crew = [];
  for ( let animal of arr1){
    if(arr2.includes(animal.astronautID))
      crew.push(animal);
  }
  console.log(`${crew[0].name}, ${crew[1].name}, ${crew[2].name} are going to space`)
  return crew
}
 
let idNumbers = [291, 414, 503, 599, 796, 890];
let luckyNumbers = tripleRandom(idNumbers);


// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
console.log(tripleRandom(idNumbers));
buildCrew(animals, luckyNumbers);
