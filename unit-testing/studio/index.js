let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(input){
    let result = "";
    if(input %2===0){
   result += "Launch";
    }if(input  % 3===0){
      result += "Code";
    }if(input  % 5===0){
      result += "Rocks";
    } 
    return result +"!"
  }
}

module.exports = launchcode;

