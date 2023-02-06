function formatDate(timestamp, typeTimestamp) {
    let date = new Date(timestamp * 1000);
    let months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    let month = months[date.getMonth()];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekday = days[date.getDay()];
    let day = date.getDate();
    
    switch(day) {
        case 1:
            day = `${day}st`;
            break;
        case 2:
            day = `${day}nd`;
            break;
        default:
            day = `${day}th`;
    }

    if(typeTimestamp === "fullTimestamp") {
        return `${weekday}, ${month} ${day}, ${hours}:${minutes}`;
    } else if (typeTimestamp === "hoursMinsTimestamp") {
        return `${hours}:${minutes}`;
    }
}

function displayTemperature(response) {
    console.log(response.data);
    let data = response.data;
    // Main Weather Info 
    let dateElement = document.querySelector("#date");
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement = document.querySelector("#weather-description");

    dateElement.innerHTML = formatDate(data.dt, "fullTimestamp");
    cityElement.innerHTML = data.name;
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

let apiKey = "15b6ba0523386a8a73b38b2440a74dea";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);