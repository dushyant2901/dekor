import {
  LOAD_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  UPDATE_SORT,
  SORT_PRODUCTS,
} from "../utils/actions";

export const filterReducer = (state, { type, payload }) => {
  if (type === LOAD_PRODUCTS) {
    return {
      ...state,
      allProducts: [...payload],
      filteredProducts: [...payload],
      filters: {
        ...state?.filters,
        maxPrice: Math.max(...payload.map(({ price }) => price)),
        price: Math.max(...payload.map(({ price }) => price)),
      },
    };
  }

  if (type === UPDATE_FILTERS) {
    const { name, value } = payload;
    return { ...state, filters: { ...state?.filters, [name]: value } };
  }
  if (type === FILTER_PRODUCTS) {
    const { allProducts, filters } = state;
    const { text, category, rating, price } = filters;
    let _products = [...allProducts];
    if (text) {
      _products = _products?.filter((product) =>
        product.name.toLowerCase().startsWith(text)
      );
    }
    if (category !== "all") {
      _products = _products?.filter((product) => product.category === category);
    }
    if (rating !== "all") {
      _products = _products?.filter(
        (product) => Number(product.rating) >= Number(rating)
      );
    }

    // filter by price
    _products = _products?.filter((product) => product.price <= price);

    return { ...state, filteredProducts: _products };
  }
  if (type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state?.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state?.filters.maxPrice,
        shipping: false,
      },
    };
  }
  if (type === UPDATE_SORT) {
    return { ...state, sort: payload };
  }
  if (type === SORT_PRODUCTS) {
    const { sort, filteredProducts } = state;
    let _products = [];
    if (sort === "price-lowest") {
      _products = filteredProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      _products = filteredProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      _products = filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "name-z") {
      _products = filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    return { ...state, filteredProducts: _products };
  }
  throw new Error(`No Matching "${type}" - action type`);
};
