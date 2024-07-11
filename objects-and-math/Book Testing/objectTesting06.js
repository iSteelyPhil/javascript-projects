function calculateCircumference(radius) {
    let PI = Math.PI;
    let circumference = 2 * PI * radius;
    return Math.round(circumference);
  }
  
  function missionDuration(orbits, radius = 6371 + 2000, speed = 28000) {
    let circumference = calculateCircumference(radius);
    let distance = circumference * orbits;
    let time = distance / speed;
    return time.toFixed(2);
  }
  
  let orbits = 5;
  let duration = missionDuration(orbits);
  let circumference = calculateCircumference(6371 + 2000);
  let distance = circumference * orbits;
  
  console.log(`The mission will travel ${distance} km around the planet, and it will take ${duration} hours to complete.`);