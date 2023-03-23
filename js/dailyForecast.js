function displayDailyForecast(resp) {
  console.log("daily", resp);
  let hourlyInfo = resp.data.hourly;
  let dailyForecastElement = document.querySelector("#daily-forecast");
  let maxHoursResults = hourlyInfo.slice(0, 25);

  let dailyForecastHTML = ``;

  maxHoursResults.forEach(function (hour, i) {
      dailyForecastHTML += `
            <div class="daily-slide">
            <span class="hour">
            ${i === 0 ? "Now" : formatDateForecast(hour.dt, false)}
            </span>
            <span class="icon-weather-hourly">
            ${setWeatherIcon(hour.weather[0])}
            </span>
            <span class="temperature">
            ${Math.round(hour.temp)}º
            </span>
            </div>
            `;
  });
  dailyForecastElement.innerHTML = dailyForecastHTML;
}
