function displayTemperature(response) {
  let data = response.data;
  // Main Weather Info
  let dateElement = document.querySelector("#date");
  let cityElement = document.querySelector("#city");
  let countryElement = document.querySelector("#country");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#weather-description");
  let iconElement = document.querySelector("#icon-weather");
  
  dateElement.innerHTML = formatDate(data.dt, "fullTimestamp");
  cityElement.innerHTML = data.name + ", ";
  countryElement.innerHTML = data.sys.country;
  celsiusTemp = data.main.temp;
  temperatureElement.innerHTML = Math.round(celsiusTemp) + "ºC";
  descriptionElement.innerHTML = data.weather[0].description;
  iconElement.innerHTML = setWeatherIcon(data.weather[0]);

  // Min and Max Temperatures
  let minimumTempElement = document.querySelector("#min-temp");
  let maximumTempElement = document.querySelector("#max-temp");

  minTemp = data.main.temp_min;
  maxTemp = data.main.temp_max;

  minimumTempElement.innerHTML = Math.round(minTemp) + "ºC";
  maximumTempElement.innerHTML = Math.round(maxTemp) + "ºC";

  // Extra Info
  let sunriseElement = document.querySelector("#sunrise");
  let precipitationElement = document.querySelector("#precipitation");
  let windElement = document.querySelector("#wind");
  let sunsetElement = document.querySelector("#sunset");
  let humidityElement = document.querySelector("#humidity");
  let thermalSensationElement = document.querySelector("#thermal-sensation");
  let lastUpdateElement = document.querySelector("#last-update");

  sunriseElement.innerHTML = formatDate(data.sys.sunrise, "hoursMinsTimestamp");
  precipitationElement.innerHTML = "10";
  windElement.innerHTML = data.wind.speed;
  sunsetElement.innerHTML = formatDate(data.sys.sunset, "hoursMinsTimestamp");
  humidityElement.innerHTML = data.main.humidity;
  thermalSensationElement.innerHTML = Math.round(thermalSensationTemp) + "ºC";
  lastUpdateElement.innerHTML = "Last update: " + formatDate(data.dt, "dayHoursMinsTimestamp");

  thermalSensationTemp = data.main.feels_like;

  getCoordinates(data.coord);
}



function handleSearch(e) {
  e.preventDefault();
  let searchInputValue = document.querySelector("#search-input").value;
  getCity(searchInputValue);
}



let searchForm = document.querySelector("#search-city-form");
searchForm.addEventListener("click", handleSearch);

getCity("Lisbon");
