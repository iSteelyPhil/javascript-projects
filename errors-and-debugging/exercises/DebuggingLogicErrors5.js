// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelLevel = 21000;
let crewStatus = true;
let computerStatus = 'green';
let fuelcheck = false

if (fuelLevel >= 20000) {
   console.log('Fuel levels cleared.');
   fuelcheck = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelcheck = false;
}

console.log("Fuel Check Status:", fuelcheck);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew and computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

if (fuelcheck) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}