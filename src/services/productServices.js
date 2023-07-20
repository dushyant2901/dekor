import axios from "axios";

export const getAllProductsService = async () => axios.get("/api/products");

export const getProductService = async (productId) =>
  await axios.get(`/api/products/${productId}`);

export const getAllCategoriesService = async () =>
  await axios.get("/api/categories");
