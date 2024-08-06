function youRang() {
  document.getElementById("main-text").innerHTML += " you rang...";
  console.log("you rang...");
}

let button = document.getElementById("ring-button");

button.addEventListener("click", youRang);
