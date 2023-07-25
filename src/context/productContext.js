import React, { useContext, useEffect, useReducer } from "react";

import {
  getAllProductsService,
  getProductService,
  getAllCategoriesService,
} from "../services/productServices";

import { productsReducer } from "../reducers/productsReducer";

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
import { toast } from "react-hot-toast";

const initialProductsState = {
  isSidebarOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
  singleProduct: null,
  singleProductLoading: false,
  singleProductError: false,
  categories: [],
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
      } = await getAllProductsService();
      if (status === 200) {
        productsDispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
      }
    } catch (error) {
      productsDispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (productID) => {
    productsDispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const {
        data: { product: singleProduct },
        status,
      } = await getProductService(productID);
      if (status === 200) {
        productsDispatch({
          type: GET_SINGLE_PRODUCT_SUCCESS,
          payload: singleProduct,
        });
      }
    } catch (error) {
      productsDispatch({ type: GET_SINGLE_PRODUCT_ERROR });
      toast.error("Something Went Wrong !!!");
    }
  };
  const fetchAllCategories = async () => {
    try {
      const {
        status,
        data: { categories },
      } = await getAllCategoriesService();
      if (status === 200) {
        productsDispatch({ type: GET_ALL_CATEGORIES, payload: categories });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
    fetchAllCategories();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...productsState,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
