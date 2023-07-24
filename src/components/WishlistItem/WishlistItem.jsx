import React from "react";
import { useCart } from "../../context/cartContext";
import { useWishlist } from "../../context/wishlistContext";
import { LinkButton } from "../LinkButton/LinkButton";

export const WishlistItem = ({ wishlistItem }) => {
  const { _id: productId, image, name, price } = wishlistItem;
  const { removeFromWishlist } = useWishlist();
  const { addToCart, cart } = useCart();
  const isAlreadyInCart = (cart, productId) =>
    cart?.some(({ _id }) => _id === productId);
  // const handleAddToCartBtn = (e) => {
  //   if (isAlreadyInCart(cart, _id)) {
  //     //toast
  //     return;
  //   }
  //   addToCart(wishlistItem);
  // };

  return (
    <article className="flex gap-5 items-center bg-lightPrimary border border-primary rounded-md shadow-sm justify-between px-6">
      <img src={image} alt="" className="h-32" />
      <h3>{name}</h3>
      <h3>{price}</h3>

      {isAlreadyInCart(cart, productId) ? (
        <LinkButton text="Go to Cart" to="/cart" />
      ) : (
        <button
          className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-2 py-1  "
          onClick={() => addToCart(wishlistItem)}
        >
          Add To Cart
        </button>
      )}
      <button
        className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-2 py-1  "
        onClick={() => removeFromWishlist(productId)}
      >
        Remove
      </button>
    </article>
  );
};
