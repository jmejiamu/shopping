import {
  ADD_PRODUCT,
  API_FAILED,
  API_LOADING,
  API_SUCCESS,
  DELETE_PRODUCT,
} from "../../helper/constants ";

const initialState = {
  apiloading: false,
  failed: null,
  productsList: [],
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case API_LOADING:
      return {
        ...state,
        apiloading: true,
      };
    case API_FAILED:
      return {
        ...state,
        apiloading: false,
        failed: action.failed,
      };
    case API_SUCCESS:
      return {
        ...state,
        productsList: action.products,
        apiloading: false,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, { ...action.product }],
      };
    case DELETE_PRODUCT:
      const id = action.id;
      const product = state.cart.filter((item) => item.uniqueId !== id);
      return {
        ...state,
        cart: product,
      };
    default:
      return state;
  }
};

export default reducer;
