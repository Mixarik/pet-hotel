import { getRequest } from "../axios";

export const getPetOwners = () => getRequest("/pethotelOwners");
