import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_ALL_CATEGORIES,
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
  if (type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      singleProductLoading: true,
      singleProductError: false,
    };
  }
  if (type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      singleProductLoading: false,
      singleProduct: payload,
    };
  }
  if (type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      singleProductLoading: false,
      singleProductError: true,
    };
  }
  if (type === GET_ALL_CATEGORIES) {
    return {
      ...state,
      categories: [...payload],
    };
  }
  throw new Error(`No Matching "${type}" - action type`);
};
