import axios from "axios";

const _sourceLink = "https://63483f1a0b382d796c6d9668.mockapi.io/api";

export const getOwners = () => {
  return axios
    .get(`${_sourceLink}/pethotelOwners`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getOwnerId = (id) => {
  return axios
    .get(`${_sourceLink}/pethotelOwners?id${id}`)
    .catch((err) => console.log(err));
};

export const postOwner = (data) => {
  return axios
    .post(`${_sourceLink}/pethotelOwners`, { ...data })
    .catch((err) => console.log(err));
};

export const getPets = () => {
  return axios
    .get(`${_sourceLink}/pethotelPets`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
