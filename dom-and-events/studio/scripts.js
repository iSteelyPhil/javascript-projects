// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
  let shuttleHeight = document.querySelector("#spaceShuttleHeight");
  let numHeight = 0;

  document.querySelector("#takeoff").addEventListener("click", function () {
    window.confirm("Confirm that the shuttle is ready for takeoff");
    if (confirm) {
      document.querySelector("#flightStatus").innerHTML = "Shuttle in flight.";
      document.querySelector("#shuttleBackground").style.backgroundColor =
        "blue";
      numHeight += 10000;
      shuttleHeight.innerHTML = numHeight;
    }
  });
  document.querySelector("#landing").addEventListener("click", function () {
    window.alert("The shuttle is landing. Landing gear engaged.");
    document.querySelector("#flightStatus").innerHTML =
      "The shuttle has landed.";
    document.querySelector("#shuttleBackground").style.backgroundColor =
      "green";
    numHeight = 0;
    shuttleHeight.innerHTML = numHeight;
  });
  document
    .querySelector("#missionAbort")
    .addEventListener("click", function () {
      window.confirm("Confirm that you want to abort the mission.");
      if (confirm) {
        document.querySelector("#flightStatus").innerHTML = "Mission Aboarted.";
        document.querySelector("#shuttleBackground").style.backgroundColor =
          "red";
        numHeight = 0;
        shuttleHeight.innerHTML = numHeight;
      }
    });
  document.querySelector("#up").addEventListener("click", function () {
    numHeight += 10000;
    shuttleHeight.innerHTML = numHeight;
  });
}
window.addEventListener("load", init);
