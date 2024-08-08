//Code Your Solution Below

document.querySelector("form").addEventListener("submit", function (event) {
  const testName = document.querySelector("input[name='testName']").value;
  const testDate = document.querySelector("input[name='testDate']").value;
  const rocketType = document.querySelector("select[name='rocketType']").value;
  const boosterCount = document.querySelector(
    "input[name='boosterCount']"
  ).value;
  const windRating = document.querySelector("input[name='windRating']:checked");
  const productionServers = document.querySelector(
    "input[name='productionServers']"
  ).checked;

  if (!testName || !testDate || !rocketType || !boosterCount || !windRating) {
    alert("Please fill out all fields.");
    event.preventDefault();
  }
});
