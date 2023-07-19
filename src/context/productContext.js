import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";

import { getAllProducts, getProduct } from "../services/productServices";

import { productsReducer } from "../reducers/productsReducer";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../utils/actions";

const initialProductsState = {
  isSidebarOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    initialProductsState
  );

  const openSidebar = () => {
    productsDispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    productsDispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async () => {
    productsDispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const {
        status,
        data: { products },
      } = await getAllProducts();
      productsDispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      productsDispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...productsState,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
