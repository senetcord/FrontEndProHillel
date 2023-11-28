const dateField = document.querySelector(".js--weather__date");
const timeField = document.querySelector(".js--weather__time");
const humidityField = document.querySelector(".js--weather__humidity");
const pressureField = document.querySelector(".js--weather__pressure");
const windField = document.querySelector(".js--weather__wind");
const imgField = document.querySelector(".js--weather__img");
const tempField = document.querySelector(".js--weather__temp");
const feelTempField = document.querySelector(".js--weather__feels-like-temp");
const descriptionField = document.querySelector(".js--weather__description");

const updateInfoButton = document.querySelector(".js--weather__update__button");

updateInfoButton.addEventListener("click", updateWeather);

async function updateWeather() {
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=Bila%20Tserkva&units=metric&appid=933f9fddb7d5ff98d6ac51d61f421df6"
  );
  const result = await response.json();

  humidityField.textContent = `Humidity: ${result.main.humidity}%`;
  pressureField.textContent = `Pressure: ${result.main.pressure} hPa`;
  windField.textContent = `Wind: ${result.wind.speed} km/h SSE`;
  imgField.src = `http://openweathermap.org/img/w/${result.weather[0].icon}.png`;
  imgField.alt = "something went wrong";
  tempField.textContent = `${result.main.temp}°C`;
  feelTempField.textContent = `Feels Like ${result.main.feels_like}°C`;
  descriptionField.textContent = `${result.weather[0].description}`;

  updateTime();
}

function updateTime() {
  const now = new Date();
  const formattedDate = now.toLocaleString("uk-UA", "Europe/Kiev");
  const info = formattedDate.split(", ");

  const [currDate, currTime] = info;

  dateField.textContent = currDate;
  timeField.textContent = currTime;
}
