import React, { useEffect, useContext, useReducer } from "react";
import {
  UPDATE_FILTERS,
  CLEAR_FILTERS,
  LOAD_PRODUCTS,
  FILTER_PRODUCTS,
} from "../utils/actions";
import { filterReducer } from "../reducers/filterReducer";
import { useProducts } from "./productContext";
const initialFilterState = {
  allProducts: [],
  filteredProducts: [],
  filters: {
    text: "",

    category: "all",

    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
    rating: "all",
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProducts();
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );
  useEffect(() => {
    filterDispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    filterDispatch({ type: FILTER_PRODUCTS });
  }, [filterState?.filters]);

  const updateFilters = (e) => {
    let { name, value } = e.target;
    if (name === "category") {
      value = e.target.textContent;
    }

    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    filterDispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {
    filterDispatch({ type: CLEAR_FILTERS });
  };
  return (
    <FilterContext.Provider
      value={{
        ...filterState,

        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
