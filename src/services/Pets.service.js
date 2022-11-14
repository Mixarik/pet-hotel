import { getRequest } from "../axios";

export const getPets = () => getRequest("/pethotelPets");
