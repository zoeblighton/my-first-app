function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let cityName = searchInputElement.value;

  cityElement.innerHTML = cityName;

  let apiKey = "ad330884483abf7o091c0c43t8ea93ab";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=" +
    cityName +
    "&key=" +
    apiKey +
    "&units=metric";

  axios.get(apiUrl).then(displayWeather);
}
function displayWeather(response) {
  console.log(response.data);
  let temperature = response.data.temperature.current;
  let city = response.data.city;

  let weatherElement = document.querySelector("#current-temperature-value");
  weatherElement.innerHTML = Math.round(temperature);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
