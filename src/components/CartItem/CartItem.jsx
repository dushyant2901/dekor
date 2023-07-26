import React from "react";
import { useCart } from "../../context/cartContext";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useWishlist } from "../../context/wishlistContext";
import { isAlreadyInWishlist } from "../../utils/helpers";
export const CartItem = ({ cartItem, minDetail }) => {
  const { _id, image, qty, name, price } = cartItem;
  const { removeFromCart, updateCartItemQty } = useCart();
  const { addToWishlist, wishlist } = useWishlist();
  const handleDecrementBtn = () => {
    qty === 1 ? removeFromCart(_id) : updateCartItemQty(_id, "decrement");
  };
  const handleMoveToWishlistBtn = () => {
    removeFromCart(_id);
    if (!isAlreadyInWishlist(wishlist, _id)) {
      addToWishlist(cartItem);
    }
  };
  return (
    <article className="flex gap-5 items-center bg-lightPrimary border border-primary rounded-md shadow-sm justify-between px-6">
      <img src={image} alt="" className="h-32" />
      <h3>{name}</h3>
      <h3>{price}</h3>
      {minDetail && <p className="text-2xl">{qty}</p>}
      {!minDetail && (
        <div className="flex gap-3">
          <button
            className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-2 py-1 w-full  "
            onClick={handleDecrementBtn}
          >
            <FaMinus />
          </button>
          <p className="text-2xl">{qty}</p>
          <button
            className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-2 py-1 w-full "
            onClick={(e) => {
              e.preventDefault();
              updateCartItemQty(_id, "increment");
            }}
          >
            <FaPlus />
          </button>
        </div>
      )}
      {!minDetail && (
        <div className="flex gap-8">
          {" "}
          <button
            className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-2 py-1  "
            onClick={handleMoveToWishlistBtn}
          >
            Move To Wishlist
          </button>
          <button
            className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-2 py-1  "
            onClick={() => removeFromCart(_id)}
          >
            Remove
          </button>
        </div>
      )}
    </article>
  );
};
