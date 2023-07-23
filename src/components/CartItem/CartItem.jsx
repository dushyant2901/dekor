import React from "react";
import { useCart } from "../../context/cartContext";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

export const CartItem = ({ cartItem }) => {
  const { _id, image, qty, name, price } = cartItem;
  const { removeFromCart, updateCartItemQty } = useCart();
  return (
    <article className="flex gap-5 items-center bg-lightPrimary border border-primary rounded-md shadow-sm justify-between px-6">
      <img src={image} alt="" className="h-32" />
      <h3>{name}</h3>
      <h3>{price}</h3>
      <div className="flex gap-3">
        <button
          className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-2 py-1 w-full  "
          onClick={() => updateCartItemQty(_id, "decrement")}
        >
          <FaMinus />
        </button>
        <p className="text-2xl">{qty}</p>
        <button
          className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-2 py-1 w-full "
          onClick={() => updateCartItemQty(_id, "increment")}
        >
          <FaPlus />
        </button>
      </div>
      <button
        className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-2 py-1  "
        onClick={() => removeFromCart(_id)}
      >
        Remove
      </button>
    </article>
  );
};
