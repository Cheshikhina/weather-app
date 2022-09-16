import axios from "axios";

export const createInstance = (baseURL, requestConfig) =>
  axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
    ...requestConfig,
  });

export const instance = createInstance;
export const getResultData = (response) => {
  if (response) {
    return response.data;
  }

  throw new Error(response + " ошибка сервера");
};

export const handleApiError = (e) => {
  console.warn(e.message);

  throw e;
};
