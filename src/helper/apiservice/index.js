import { BASE_URL } from "../constants ";

// I Dont need this
export const fetchDataService = async (endpoint) => {
  try {
    const response = await fetch(BASE_URL + endpoint);
    const resJson = await response.json();
    console.log(resJson);
  } catch (error) {
    console.log(error.message);
  }
};
