function setWeatherIcon(data, className) {
    let iconWeatherElement = document.querySelector("." + className);
    let iconWeatherElementCode = data.icon;
    let iconWeatherElementID = data.id;
  
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