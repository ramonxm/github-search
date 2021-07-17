import axios from "axios";

const api = axios.create({
  baseURL: `https://api.github.com/users`,
  timeout: 1000,
});

const responseHandler = (response) => {
  if (response.status === 404) {
    alert("Deu ruim!");
    return;
  }
  return response;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

api.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export { api };
