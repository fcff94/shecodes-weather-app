// function setWeatherIcon(data, className) {
//   let iconWeatherElement = document.querySelector("." + className);
//   let iconWeatherElementCode = data.icon;
//   let iconWeatherElementID = data.id;

//   let iconWeatherHTML = "";

//   if (
//     iconWeatherElementCode === "11d" &&
//     (iconWeatherElementID === 200 ||
//       iconWeatherElementID === 201 ||
//       iconWeatherElementID === 202)
//   ) {
//     iconWeatherHTML += '<i class="bi bi-cloud-lightning-rain-fill"></i>';
//   } else if (
//     (iconWeatherElementCode === "13d" || iconWeatherElementCode === "13n") &&
//     (iconWeatherElementID === 611 ||
//       iconWeatherElementID === 612 ||
//       iconWeatherElementID === 613)
//   ) {
//     iconWeatherHTML += '<i class="bi bi-cloud-sleet-fill"></i>';
//   } else {
//     switch (iconWeatherElementCode) {
//       case "01d":
//         iconWeatherHTML += '<i class="bi bi-sun-fill"></i>';
//         break;
//       case "01n":
//         iconWeatherHTML += '<i class="bi bi-moon-stars-fill"></i>';
//         break;
//       case "02d":
//         iconWeatherHTML += '<i class="bi bi-cloud-sun-fill"></i>';
//         break;
//       case "02n":
//         iconWeatherHTML += '<i class="bi bi-cloud-moon-fill"></i>';
//         break;
//       case "03d":
//       case "03n":
//         iconWeatherHTML += '<i class="bi bi-cloud-fill"></i>';
//         break;
//       case "04d":
//       case "04n":
//         iconWeatherHTML += '<i class="bi bi-clouds-fill"></i>';
//         break;
//       case "09d":
//       case "09n":
//         iconWeatherHTML += '<i class="bi bi-cloud-rain-heavy-fill"></i>';
//         break;
//       case "10d":
//       case "10n":
//         iconWeatherHTML += '<i class="bi bi-cloud-rain-fill"></i>';
//         break;
//       case "50d":
//       case "50n":
//         iconWeatherHTML += '<i class="bi bi-cloud-haze2-fill"></i>';
//         break;
//     }
//   }
//   iconWeatherElement.innerHTML = iconWeatherHTML;
// }


function setWeatherIcon(data) {
  let iconWeatherElementCode = data.icon;
  let iconWeatherElementID = data.id;

  if (
    iconWeatherElementCode === "11d" &&
    (iconWeatherElementID === 200 ||
      iconWeatherElementID === 201 ||
      iconWeatherElementID === 202)
  ) {
    return '<i class="bi bi-cloud-lightning-rain-fill"></i>';
  } else if (
    (iconWeatherElementCode === "13d" || iconWeatherElementCode === "13n") &&
    (iconWeatherElementID === 611 ||
      iconWeatherElementID === 612 ||
      iconWeatherElementID === 613)
  ) {
    return '<i class="bi bi-cloud-sleet-fill"></i>';
  } else {
    switch (iconWeatherElementCode) {
      case "01d":
        return '<i class="bi bi-sun-fill"></i>';
      case "01n":
        return '<i class="bi bi-moon-stars-fill"></i>';
      case "02d":
        return '<i class="bi bi-cloud-sun-fill"></i>';
      case "02n":
        return '<i class="bi bi-cloud-moon-fill"></i>';
      case "03d":
      case "03n":
        return '<i class="bi bi-cloud-fill"></i>';
      case "04d":
      case "04n":
        return '<i class="bi bi-clouds-fill"></i>';
      case "09d":
      case "09n":
        return '<i class="bi bi-cloud-rain-heavy-fill"></i>';
      case "10d":
      case "10n":
        return '<i class="bi bi-cloud-rain-fill"></i>';
      case "50d":
      case "50n":
        return '<i class="bi bi-cloud-haze2-fill"></i>';
      default:
        return '';
    }
  }
}
