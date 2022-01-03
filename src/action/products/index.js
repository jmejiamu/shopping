import {
  ADD_PRODUCT,
  API_FAILED,
  API_LOADING,
  API_SUCCESS,
  BASE_URL,
} from "../../helper/constants ";

export const fetchingData = () => {
  return {
    type: API_LOADING,
  };
};

export const fetchingDataFail = (failed) => {
  return {
    type: API_FAILED,
    failed,
  };
};

export const getProductsSuccess = (products) => {
  return {
    type: API_SUCCESS,
    products,
  };
};

export const addProduct = (id, pro_name, pro_url, price) => {
  return {
    type: ADD_PRODUCT,
    product: {
      id,
      pro_name,
      pro_url,
      price,
    },
  };
};

export function fetchData() {
  return async (dispatch) => {
    dispatch(fetchingData());

    try {
      const response = await fetch(BASE_URL + "/products");
      const resJson = await response.json();
      dispatch(getProductsSuccess(resJson));
    } catch (error) {
      dispatch(fetchingDataFail(error));
    }
  };
}
