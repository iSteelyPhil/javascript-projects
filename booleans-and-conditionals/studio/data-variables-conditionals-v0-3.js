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

if (astronautCount <=7){
    if (astronautStatus === "Ready"){
        if (totalMassKg <= maximumMassLimit){
            if (fuelTempCelsius >= minimumFuelTemp || fuelTempCelsius <= maximumFuelTemp){
                if (fuelLevel === "100%"){
                    if (weatherStatus === "Clear"){
                        if (preparedForLiftOff){
console.log("Astronaut Count:", astronautCount);
    console.log("Astronauts Status", astronautStatus);
        console.log("Total Mass:", totalMassKg);
            console.log("Fuel Temp:", fuelTempCelsius);
                console.log("Fuel Full");
                    console.log("Weather Status", weatherStatus);
                        console.log("All systems go")
                        }
                    }
                }
            }
        }      
    }     
} else {
    console.log("ABORT")
}




// Verify shuttle launch can proceed based on above conditions
