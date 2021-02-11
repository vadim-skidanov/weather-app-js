import dateConfig from "../date/date";

export const displayData = async (cityForecastData) => {
  if (cityForecastData === null) return;

  const tempParent = document.querySelector(".weather__data");
  const iconParent = document.querySelector(".weather__icon");
  const dateParent = document.querySelector(".weather__date");

  const { month, date, day } = dateConfig;

  const temp = Math.round(cityForecastData.main.temp);
  const weatherDescription = cityForecastData.weather[0].description;
  const city = cityForecastData.name;
  const country = cityForecastData.sys.country;
  const icon = `http://openweathermap.org/img/w/${cityForecastData.weather[0].icon}.png`;

  tempParent.innerHTML = `
    <div class="weather__data-temp">${temp}&deg;</div>
    <div class="weather__data-description">${weatherDescription}</div>
    <div class="weather__data-location">${city}, ${country}</div>
  `;

  iconParent.innerHTML = `<img src="${icon}" alt="" class="weather__icon-content"></img>`;

  dateParent.innerHTML = `
    <div class="weather__date-month">${month}</div>
    <div class="weather__date-date">${date}</div>
    <div class="weather__date-weekday">${day}</div>
    `;
};
