let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};
for (values in tortoiseOne)
   console.log(values + ",,," + tortoiseOne[values]);
// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.