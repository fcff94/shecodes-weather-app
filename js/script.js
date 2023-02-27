function formatDate(timestamp, typeTimestamp) {
  let date = new Date(timestamp * 1000);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  let hours = "0" + date.getHours();
  let minutes = "0" + date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = days[date.getDay()];
  //   let day = date.getDate().toString();

  //   addDaySuffix(day);
  let day = addDaySuffix(date.getDate().toString());

  if (typeTimestamp === "fullTimestamp") {
    return `${weekday}, ${month} ${day}, ${hours.substring(
      hours.length >= 3 ? 1 : 0,
      hours.length
    )}:${minutes.substring(minutes.length >= 3 ? 1 : 0, minutes.length)}`;
  } else if (typeTimestamp === "hoursMinsTimestamp") {
    return `${hours.substring(
      hours.length >= 3 ? 1 : 0,
      hours.length
    )}:${minutes.substring(minutes.length >= 3 ? 1 : 0, minutes.length)}`;
  }
}

function addDaySuffix(day) {
  if (day === "1") {
    day = `${day}st`;
  } else if (day === "2") {
    day = `${day}nd`;
  } else if (day === "3") {
    day = `${day}rd`;
  } else if (day[1] === "1") {
    day = `${day}st`;
  } else if (day[1] === "2") {
    day = `${day}nd`;
  } else if (day[1] === "3") {
    day = `${day}rd`;
  } else {
    day = `${day}th`;
  }

  return day;
}

function setWeatherIcon(data) {
  let iconWeatherElement = document.querySelector(".icon-weather");
  console.log(iconWeatherElement);
  let iconWeatherElementCode = data.weather[0].icon;
  let iconWeatherElementID = data.weather[0].id;

  if (
    iconWeatherElementCode === "11d" &&
    (iconWeatherElementID === 200 ||
      iconWeatherElementID === 201 ||
      iconWeatherElementID === 202)
  ) {
    iconWeatherElement.innerHTML =
      '<i class="bi bi-cloud-lightning-rain-fill"></i>';
  } else {
    iconWeatherElement.innerHTML = '<i class="bi bi-cloud-lightning-fill"></i>';
  }

  if (
    (iconWeatherElementCode === "13d" || iconWeatherElementCode === "13n") &&
    (iconWeatherElementID === 611 ||
      iconWeatherElementID === 612 ||
      iconWeatherElementID === 613)
  ) {
    iconWeatherElement.innerHTML = '<i class="bi bi-cloud-sleet-fill"></i>';
  } else {
    iconWeatherElement.innerHTML = '<i class="bi bi-cloud-snow-fill"></i>';
  }

  switch (iconWeatherElementCode) {
    case "01d":
      iconWeatherElement.innerHTML = '<i class="bi bi-sun-fill"></i>';
      break;
    case "01n":
      iconWeatherElement.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
      break;
    case "02d":
      iconWeatherElement.innerHTML = '<i class="bi bi-cloud-sun-fill"></i>';
      break;
    case "02n":
      iconWeatherElement.innerHTML = '<i class="bi bi-cloud-moon-fill"></i>';
      break;
    case "03d":
    case "03n":
      iconWeatherElement.innerHTML = '<i class="bi bi-cloud-fill"></i>';
      break;
    case "04d":
    case "04n":
      iconWeatherElement.innerHTML = '<i class="bi bi-clouds-fill"></i>';
      break;
    case "09d":
    case "09n":
      iconWeatherElement.innerHTML =
        '<i class="bi bi-cloud-rain-heavy-fill"></i>';
      break;
    case "10d":
    case "10n":
      iconWeatherElement.innerHTML = '<i class="bi bi-cloud-rain-fill"></i>';
      break;
    case "50d":
    case "50n":
      iconWeatherElement.innerHTML = '<i class="bi bi-cloud-haze2-fill"></i>';
      break;
  }
}

function displayTemperature(response) {
  console.log(response.data);
  let data = response.data;
  // Main Weather Info
  let dateElement = document.querySelector("#date");
  let cityElement = document.querySelector("#city");
  let countryElement = document.querySelector("#country");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#weather-description");
  setWeatherIcon(data);

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

function handleCurrentLocation(e) {
  e.preventDefault();
  navigator.geolocation.getCurrentPosition(getCurrentLocation);
}

function getCurrentLocation(data) {
  let lat = data.coords.latitude;
  let lon = data.coords.longitude;
  let apiKey = "15b6ba0523386a8a73b38b2440a74dea";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayTemperature);
}

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

function formatDateForecast(timestamp) {
  let date = new Date(timestamp * 1000);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let month = months[date.getMonth()];
  let weekday = days[date.getDay()];
  let day = addDaySuffix(date.getDate().toString());

  //   day = addDaySuffix(day);

  return `${weekday}, ${month} ${day}`;
}

function displayWeeklyForecast(resp) {
  let dailyInfo = resp.data.daily;
  let weeklyForecastElement = document.querySelector("#weekly-forecast");

  let weeklyForecastHTML = `<h2>Weekly Forecast</h2>`;

  dailyInfo.forEach(function (day, i) {
    weeklyForecastHTML += `
        <div class="weekly-card">
            <div class="weekly-card-body">
                <span class="date">${
                  i === 0 ? "Today" : formatDateForecast(day.dt)
                }</span>
                <span class="weather icon-weather" id="daily-icon-weather">
                </span>
                <span class="min-max-temp">
                ${Math.round(day.temp.min)}º / ${Math.round(day.temp.max)}º
                </span>
                </div>
                </div>
                `;
  });
  weeklyForecastElement.innerHTML = weeklyForecastHTML;
}

function getCoordinates(coordinates) {
  console.log(coordinates);
  let apiKey = "ed238469f9b5e9d801834270e65449bc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeeklyForecast);
}

let celsiusTemp = null;
let minTemp = null;
let maxTemp = null;
let thermalSensationTemp = null;

let searchForm = document.querySelector("#search-city-form");
searchForm.addEventListener("click", handleSearch);

let currentLocationBtn = document.querySelector("#current-location");
currentLocationBtn.addEventListener("click", handleCurrentLocation);

let toFahrenheit = document.querySelector("#fahrenheit");
toFahrenheit.addEventListener("click", changeToFahrenheit);

let toCelsius = document.querySelector("#celsius");
toCelsius.addEventListener("click", changeToCelsius);
getCity("London");
