let giraffe = {
    species: "Reticulated Giraffe",
    name: "Cynthia",
    weight: 1500,
    age: 15,
    diet: "leaves",
    birthday: function(){
         return this.age += 1 ;
    }
  };
  console.log(giraffe.age);
  giraffe.birthday();
  console.log(giraffe.age);