import React from "react";
import { useCart } from "../../context/cartContext";
import { useWishlist } from "../../context/wishlistContext";
import { LinkButton } from "../LinkButton/LinkButton";
import { isAlreadyInCart } from "../../utils/helpers";
export const WishlistItem = ({ wishlistItem }) => {
  const { _id: productId, image, name, price } = wishlistItem ?? {};
  const { removeFromWishlist } = useWishlist();
  const { addToCart, cart, updateCartItemQty } = useCart();

  const handleMoveToCartBtn = (e) => {
    e.preventDefault();
    isAlreadyInCart(cart, productId)
      ? updateCartItemQty(productId, "increment")
      : addToCart(wishlistItem);
    removeFromWishlist(productId);
  };

  return (
    <article className="flex gap-5 items-center bg-lightPrimary border border-primary rounded-md shadow-sm justify-between px-6">
      <img src={image} alt="" className="h-32" />
      <h3>{name}</h3>
      <h3>{price}</h3>

      <button
        className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-2 py-1  "
        onClick={handleMoveToCartBtn}
      >
        Move To Cart
      </button>

      {/* {isAlreadyInCart(cart, productId) ? (
        <LinkButton text="Go to Cart" to="/cart" />
      ) : (
        <button
          className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-2 py-1  "
          onClick={(e) => {
            e.preventDefault();
            addToCart(wishlistItem);
          }}
        >
          Add To Cart
        </button>
      )} */}
      <button
        className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-2 py-1  "
        onClick={(e) => {
          e.preventDefault();
          removeFromWishlist(productId);
        }}
      >
        Remove
      </button>
    </article>
  );
};
