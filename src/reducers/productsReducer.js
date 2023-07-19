import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../utils/actions";

export const productsReducer = (state, { type, payload }) => {
  if (type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (type === GET_PRODUCTS_BEGIN) {
    return { ...state, productsLoading: true };
  }
  if (type === GET_PRODUCTS_SUCCESS) {
    return {
      ...state,
      productsLoading: false,
      products: payload,
    };
  }
  if (type === GET_PRODUCTS_ERROR) {
    return { ...state, productsLoading: false, productsError: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
