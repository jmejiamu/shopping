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

// POST - CHECKOUT
export const postDataService = async (endpoint, body) => {
  try {
    const response = await fetch(BASE_URL + endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const resJson = await response.json();
    return resJson;
  } catch (error) {
    console.log(error.message);
  }
};
