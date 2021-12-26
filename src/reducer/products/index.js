import { API_FAILED, API_LOADING, API_SUCCESS } from "../../helper/constants ";

const initialState = {
  apiloading: false,
  failed: null,
  productsList: null,
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

    default:
      return state;
  }
};

export default reducer;
