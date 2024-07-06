let tortoiseOne = {
    species: "Galapagos Tortoise",
    diet: ["pumpkins", "lettuce", "cabbage"]
 };

 let tortoiseTwo = {
    species: "Galapagos Tortoise",
    diet: ["pumpkins", "lettuce", "cabbage"]
 };

 console.log(tortoiseOne.species === tortoiseTwo.species);

 let giraffe = {
    species: "Reticulated Giraffe",
    name: "Cynthia",
    weight: 1500,
    age: 15,
    diet: "leaves"
  };

  for (item in giraffe) {
     console.log(item + ",, " + giraffe[item]);
  }