// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "Ready"
let averageAstronautMassKg = 80.7
let crewMassKg = (astronautCount * averageAstronautMassKg)
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg)
let maximumMassLimit = 850000
let fuelTempCelsius = -225
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = "100%"
let weatherStatus = "Clear"
let preparedForLiftOff = true

console.log("All systerms are a go! Initizlizing shuttle launch sequence.")
console.log("------------------------------------------------------------")

console.log("Date:", date);
console.log("Time:", time);

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7){
    console.log("Astronaut Count:", astronautCount);
} else if (astronautCount > 7){
    console.log("Astronaut Count:", "ABORT: TOO MANY ASTRONUGHTS EXCEED WEIGHT");
    preparedForLiftOff = false;
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "Ready"){
        console.log("Astronauts Ready");
    } else {
        console.log("ABORT: ASTRONAUTS NOT READY");
        preparedForLiftOff = false
    }
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit){
    console.log("Total Mass:", totalMassKg);
} else {
    console.log("ABORT: TOO MUCH PAYLOAD");
    preparedForLiftOff = false
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp){
    console.log("Fuel Temperature:", fuelTempCelsius);
} else {
    console.log("ABORT: TEMP MALFUNCTION");
    preparedForLiftOff = false
}
// add logic below to verify the fuel level is at 100%
    if (fuelLevel === "100%"){
        console.log("FUEL FULL")
    } else {
        console.log("ABORT: LOW FUEL")
        preparedForLiftOff = false
    }
// add logic below to verify the weather status is clear
    if (weatherStatus === "Clear"){
        console.log("Weather Status:", weatherStatus)
    } else {
        console.log("ABORT: WAIT FOR BETTER WEATHER")
        preparedForLiftOff = false
    }
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff){
    console.log("Go for Launch!");
} else {
    console.log("ABORT LAUNCH")
}

console.log("------------------------------------------------------------")


if (preparedForLiftOff){
    console.log("HAVE A SAFE TRIP ASTRONAUTS");
}
