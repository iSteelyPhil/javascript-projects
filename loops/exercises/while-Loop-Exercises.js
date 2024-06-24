//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');

let startingFuel = "";
let crewAboard = "";
let = crewMax = 7
let shuttleAltitude = 0


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
 
while (startingFuel <= 5000 || startingFuel >= 30000){
    startingFuel = input.question("ENTER STARTING FUEL HERE: ");
    startingFuel = Number(startingFuel);
    if (startingFuel <= 5000 || startingFuel >= 30000) {
        console.log("ERROR PLEASE ENTER APPRPORIATE AMOUNT OF FUEL BETWEEN 5000 and 30000 ");
    }
}
console.log("FUEL WITHIN APPROPRIATE THRESHOLD,", startingFuel);


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (crewAboard <= 0 || crewAboard > crewMax) {
  crewAboard = input.question("Enter the number of Astronauts: ");
  crewAboard = Number(crewAboard);
  if (crewAboard <= 0 || crewAboard > crewMax) {
    console.log("ERROR: CREW COUNT EXCEEDED. CREW NEEDED: 1 - 7");
  }
}
console.log("ALL CREW ACCOUNTED FOR:", crewAboard)
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startingFuel > 0){
   startingFuel -= (crewAboard * 100);
   shuttleAltitude += 50;
   if (startingFuel <=0){
    startingFuel = 0;
    break
   }
}



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log("Remaining Fuel:", startingFuel);
console.log("The shuttle gained an altitude of", shuttleAltitude, "km.");

if (shuttleAltitude >= 2000){
    console.log("Orbit Achieved!");
} else{
    console.log("Failed to reach orbit")
}

