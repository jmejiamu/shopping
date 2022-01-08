import { fetchDataService, postDataService } from "../../helper/apiservice";
import {
  ADD_PRODUCT,
  API_FAILED,
  API_LOADING,
  API_SUCCESS,
  BASE_URL,
  CHECKOUT_PRODUCT,
  DELETE_PRODUCT,
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

export const addProduct = (
  id,
  pro_name,
  pro_url,
  price,
  quantity,
  uniqueId
) => {
  return {
    type: ADD_PRODUCT,
    product: {
      id,
      pro_name,
      pro_url,
      price,
      quantity,
      uniqueId,
    },
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    id,
  };
};

export const checkoutProduct = (body) => {
  return {
    type: CHECKOUT_PRODUCT,
    body,
  };
};

export function fetchData() {
  return async (dispatch) => {
    dispatch(fetchingData());

    try {
      const response = await fetchDataService("/products");
      // const resJson = await response.json();
      dispatch(getProductsSuccess(response));
    } catch (error) {
      dispatch(fetchingDataFail(error));
    }
  };
}

export function checkOut(body) {
  return async (dispatch) => {
    try {
      const response = await postDataService("/checkout", body);
      dispatch(checkoutProduct(response));
    } catch (error) {
      console.log(error.message);
    }
  };
}
