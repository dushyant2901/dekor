import axios from "axios";

export const getUserWishlistService = async (encodedToken) =>
  await axios.get(`/api/user/wishlist`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const addToWishlistService = async (product, encodedToken) =>
  await axios.post(
    `/api/user/cart`,
    { product },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const removeFromWishlistService = async (productId, encodedToken) =>
  await axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
