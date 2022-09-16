const API_KEY_WEATHER = "a0c97956cd1aee1565f86238a01bae17";
const API_KEY_CITIES = "M3ZtA6M7u6EGM7AAVFDX-Y52XiRUIt";

const API_URL_WEATHER = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY_WEATHER}&units=metric`;
const API_URL_CITIES = `https://data-api.oxilor.com/rest/regions?lng=en&type=city&key=${API_KEY_CITIES}`;

module.exports = {
  API_URL_WEATHER,
  API_URL_CITIES,
};
