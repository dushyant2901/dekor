export const isAlreadyInCart = (cart, productId) =>
  cart?.some(({ _id }) => _id === productId);
export const isAlreadyInWishlist = (wishlist, productId) =>
  wishlist?.some(({ _id }) => _id === productId);

export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};
