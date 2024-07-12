let tortoiseOne = {
    species: "Galapagos Tortoise",
    name: "Pete",
    weight: 919,
    age: 85,
    diet: ["pumpkins", "lettuce", "cabbage"],
    sign: function(){
        return this.name + "is a" + this.species;
    }
};
console.log(tortoiseOne)

tortoiseOne.age = 120;
tortoiseOne["speed"] = "So freakin' fast"
console.log(tortoiseOne.speed);
console.log(tortoiseOne.age)
tortoiseOne.sign();
console.log(tortoiseOne.sign)