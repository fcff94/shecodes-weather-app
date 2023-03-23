function displayWeeklyForecast(resp) {
  let dailyInfo = resp.data.daily;
  let weeklyForecastElement = document.querySelector("#weekly-forecast");

  let weeklyForecastHTML = `<h2>Weekly Forecast</h2>`;

  dailyInfo.forEach(function (day, i) {

    weeklyForecastHTML += `
          <div class="weekly-card">
              <div class="weekly-card-body">
                  <span class="date">
                  ${i === 0 ? "Today" : formatDateForecast(day.dt, true)}
                  </span>
                  <span class="icon-weather-weekly">
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


