import React from "react";
import { useCart } from "../../context/cartContext";

export const CartTotal = () => {
  const { cart } = useCart();
  const getTotalPrice = () =>
    cart?.reduce((total, product) => total + product.qty * product.price, 0);
  return (
    <article className="bg-primary border text-white border-primary rounded-sm p-4 shadow-md flex gap-4 flex-col w-max ml-auto my-4">
      <div className="flex gap-4 justify-center items-centers">
        <h3 className="text-xl">Total Price :</h3>
        <p>Rs {getTotalPrice()}</p>
      </div>
    </article>
  );
};
