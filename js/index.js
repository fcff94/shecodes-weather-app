function displayTemperature(response) {
  let data = response.data;
  // Main Weather Info
  let dateElement = document.querySelector("#date");
  let cityElement = document.querySelector("#city");
  let countryElement = document.querySelector("#country");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#weather-description");
  let iconElement = document.querySelector("#icon-weather");
  iconElement.innerHTML = setWeatherIcon(data.weather[0]);

  dateElement.innerHTML = formatDate(data.dt, "fullTimestamp");
  cityElement.innerHTML = data.name + ", ";
  countryElement.innerHTML = data.sys.country;
  celsiusTemp = data.main.temp;
  temperatureElement.innerHTML = Math.round(celsiusTemp) + "ºC";
  descriptionElement.innerHTML = data.weather[0].description;

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

  sunriseElement.innerHTML = formatDate(data.sys.sunrise, "hoursMinsTimestamp");
  precipitationElement.innerHTML = "10";
  windElement.innerHTML = data.wind.speed;
  sunsetElement.innerHTML = formatDate(data.sys.sunset, "hoursMinsTimestamp");
  humidityElement.innerHTML = data.main.humidity;
  thermalSensationElement.innerHTML = Math.round(thermalSensationTemp) + "ºC";

  thermalSensationTemp = data.main.feels_like;

  getCoordinates(data.coord);
}

function handleSearch(e) {
  e.preventDefault();
  let searchInputValue = document.querySelector("#search-input").value;
  getCity(searchInputValue);
}

function getCity(city) {
  let apiKey = "15b6ba0523386a8a73b38b2440a74dea";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.querySelector("#search-city-form");
searchForm.addEventListener("click", handleSearch);

getCity("London");
