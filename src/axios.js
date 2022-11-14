import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://63483f1a0b382d796c6d9668.mockapi.io/api",
});

export const getRequest = (url) =>
  axiosInstance
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log(`error: GET ${url}`));
