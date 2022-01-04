import { BASE_URL } from "../constants ";

// GET ALL PRODUCT - HOMEPAGE
export const fetchDataService = async (endpoint) => {
  try {
    const response = await fetch(BASE_URL + endpoint);
    const resJson = await response.json();
    return resJson;
  } catch (error) {
    console.log(error.message);
  }
};
