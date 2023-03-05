let celsiusTemp = null;
let minTemp = null;
let maxTemp = null;
let thermalSensationTemp = null;

function convertAllTemperatures(temperatureType, unit) {
  if (unit === "f") {
    let fahrenheitFormula = Math.round(temperatureType * 1.8 + 32) + "ºF";
    return fahrenheitFormula;
  } else if (unit === "c") {
    return Math.round(temperatureType) + "ºC";
  }
}

function changeToFahrenheit(e) {
  e.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let minTemperatureElement = document.querySelector("#min-temp");
  let maxTemperatureElement = document.querySelector("#max-temp");
  let thermalSensationElement = document.querySelector("#thermal-sensation");

  toCelsius.classList.remove("d-none");
  toFahrenheit.classList.add("d-none");

  temperatureElement.innerHTML = convertAllTemperatures(celsiusTemp, "f");
  minTemperatureElement.innerHTML = convertAllTemperatures(minTemp, "f");
  maxTemperatureElement.innerHTML = convertAllTemperatures(maxTemp, "f");
  thermalSensationElement.innerHTML = convertAllTemperatures(
    thermalSensationTemp,
    "f"
  );
}

function changeToCelsius(e) {
  e.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let minTemperatureElement = document.querySelector("#min-temp");
  let maxTemperatureElement = document.querySelector("#max-temp");
  let thermalSensationElement = document.querySelector("#thermal-sensation");

  toCelsius.classList.add("d-none");
  toFahrenheit.classList.remove("d-none");

  temperatureElement.innerHTML = convertAllTemperatures(celsiusTemp, "c");
  minTemperatureElement.innerHTML = convertAllTemperatures(minTemp, "c");
  maxTemperatureElement.innerHTML = convertAllTemperatures(maxTemp, "c");
  thermalSensationElement.innerHTML = convertAllTemperatures(
    thermalSensationTemp,
    "c"
  );
}

let toFahrenheit = document.querySelector("#fahrenheit");
toFahrenheit.addEventListener("click", changeToFahrenheit);

let toCelsius = document.querySelector("#celsius");
toCelsius.addEventListener("click", changeToCelsius);
