export const isAlreadyInCart = (cart, productId) =>
  cart?.some(({ _id }) => _id === productId);
export const isAlreadyInWishlist = (wishlist, productId) =>
  wishlist?.some(({ _id }) => _id === productId);
