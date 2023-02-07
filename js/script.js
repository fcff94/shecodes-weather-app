function formatDate(timestamp, typeTimestamp) {
    let date = new Date(timestamp * 1000);
    let months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    let month = months[date.getMonth()];
    let hours = "0" + date.getHours();
    let minutes = "0" + date.getMinutes();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekday = days[date.getDay()];
    let day = date.getDate().toString();
    
    switch (day) {
        case "1":
            day = `${day}st`;
            break;
        case "2":
            day = `${day}nd`;
            break;
        case "3":
            day = `${day}rd`;
            break;
        default:
            day = `${day}th`;
    }

    switch (day[1]) {
        case "1":
            day = `${day}st`;
            break;
        case "2":
            day = `${day}nd`;
            break;
        case "3":
            day = `${day}rd`;
            break;
    }

    if (typeTimestamp === "fullTimestamp") {
        return `${weekday}, ${month} ${day}, ${hours.substring((hours.length >= 3 ? 1 : 0), hours.length)}:${minutes.substring((minutes.length >= 3 ? 1 : 0), minutes.length)}`;
    } else if (typeTimestamp === "hoursMinsTimestamp") {
        return `${hours.substring((hours.length >= 3 ? 1 : 0), hours.length)}:${minutes.substring((minutes.length >= 3 ? 1 : 0), minutes.length)}`;
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

    dateElement.innerHTML = formatDate(data.dt, "fullTimestamp");
    cityElement.innerHTML = data.name + ", ";
    countryElement.innerHTML = data.sys.country;
    temperatureElement.innerHTML = Math.round(data.main.temp);
    descriptionElement.innerHTML = data.weather[0].description;

    // Min and Max Temperatures
    let minimumTempElement = document.querySelector("#min-temp");
    let maximumTempElement = document.querySelector("#max-temp");

    minimumTempElement.innerHTML = Math.round(data.main.temp_min);
    maximumTempElement.innerHTML = Math.round(data.main.temp_max);

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
    thermalSensationElement.innerHTML = Math.round(data.main.feels_like);
}

function handleSearch(e) {
    console.log('ggg');
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

let searchForm = document.querySelector("#search-city-form");
searchForm.addEventListener('click', handleSearch);

let currentLocationBtn = document.querySelector("#current-location");
currentLocationBtn.addEventListener('click', handleCurrentLocation);