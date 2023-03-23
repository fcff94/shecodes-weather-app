function displayWeeklyForecast(resp) {
  let dailyInfo = resp.data.daily;
  let weeklyForecastElement = document.querySelector("#weekly-forecast");

  let weeklyForecastHTML = `<h2>Weekly Forecast</h2>`;

  dailyInfo.forEach(function (day, i) {

    weeklyForecastHTML += `
          <div class="weekly-card">
              <div class="weekly-card-body">
                  <span class="date">
                  ${i === 0 ? "Today" : formatDateForecast(day.dt)}
                  </span>
                  <span class="icon-weather icon-weather-weekly">
                  ${setWeatherIcon(day.weather[0])}
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
  let apiKey = "ed238469f9b5e9d801834270e65449bc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeeklyForecast);
}

function formatDateForecast(timestamp) {
  let date = new Date(timestamp * 1000);
  let month = months[date.getMonth()];
  let weekday = days[date.getDay()];
  let day = addDaySuffix(date.getDate().toString());

  return `${weekday}, ${month} ${day}`;
}
