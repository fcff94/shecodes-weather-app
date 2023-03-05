let currentLocationBtn = document.querySelector("#current-location");
currentLocationBtn.addEventListener("click", handleCurrentLocation);


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