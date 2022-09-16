import { getResultData, handleApiError, instance } from "@/api";
const { API_URL_CITIES } = require("../constants");

export const getDataCities = () => {
  const transformData = (data) => {
    const dataCities = data.edges || [];
    const mainCitiesData = dataCities.reduce((res, city) => {
      if (
        city?.node?.name != "Mumbai" &&
        city?.node?.name != "Ho Chi Minh City"
      ) {
        res.push({
          city: city.node.name,
          latitude: city.node.latitude,
          longitude: city.node.longitude,
        });
      }
      return res;
    }, []);

    return mainCitiesData;
  };
  return instance(API_URL_CITIES)
    .get()
    .then(getResultData)
    .then(transformData)
    .catch(handleApiError);
};
