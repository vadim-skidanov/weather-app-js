import dateConfig from "../date/date";

export const displayData = async (cityForecastData) => {
  const tempParent = document.querySelector(".content");

  if (cityForecastData === null) {
    tempParent.innerHTML = `
      <div class="nothing">Search for a city</div>
    `;
    return;
  }

  const { month, date, day } = dateConfig;

  const temp = Math.round(cityForecastData.main.temp);
  const weatherDescription = cityForecastData.weather[0].description;
  const city = cityForecastData.name;
  const country = cityForecastData.sys.country;
  const icon = `http://openweathermap.org/img/w/${cityForecastData.weather[0].icon}.png`;

  tempParent.innerHTML = `
  <div class="row">
    <div class="weather">
      <div class="weather__data">
        <div class="weather__data-temp">${temp}&deg;</div>
        <div class="weather__data-description">${weatherDescription}</div>
        <div class="weather__data-location">${city}, ${country}</div>
      </div>
      <div class="weather__icon">
        <img src="${icon}" alt="" class="weather__icon-content"></img>
      </div>
      <div class="weather__date">
        <div class="weather__date-month">${month}</div>
        <div class="weather__date-date">${date}</div>
        <div class="weather__date-weekday">${day}</div>
      </div>
    </div>
  </div>
  `;
};
//   iconParent.innerHTML = `<img src="${icon}" alt="" class="weather__icon-content"></img>`;

//   dateParent.innerHTML = `
//     <div class="weather__date-month">${month}</div>
//     <div class="weather__date-date">${date}</div>
//     <div class="weather__date-weekday">${day}</div>
//     `;
// };

//  <div class="row">
//  <div class="weather">
//    <div class="weather__data">
//      <!-- weather data is here -->
//     </div>
//    <div class="weather__icon">
//      <!-- icon is here -->
//    </div>
//    <div class="weather__date">
//      <!-- date is here -->
//    </div>
//  </div>
// </div>
