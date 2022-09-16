import { getResultData, handleApiError, instance } from "@/api";
const { API_URL_WEATHER } = require("@/constants");

export const getDataWeather = (lat, lon) => {
  const transformData = (data) => {
    const dataWeather = data || [];

    return {
      city: dataWeather.name,
      country: dataWeather.sys.country,
      desc: dataWeather.weather[0].description,
      temp: dataWeather.main.temp,
      feelsLike: dataWeather.main.feels_like,
      pressure: dataWeather.main.pressure,
      humidity: dataWeather.main.humidity,
      visibility: dataWeather.visibility,
      windSpeed: dataWeather.wind.speed,
      windDeg: dataWeather.wind.deg,
      img: {
        icon: dataWeather.weather[0].icon,
        alt: dataWeather.weather[0].main,
      },
    };
  };

  return instance(`${API_URL_WEATHER}&lat=${lat}&lon=${lon}`)
    .get()
    .then(getResultData)
    .then(transformData)
    .catch(handleApiError);
};
