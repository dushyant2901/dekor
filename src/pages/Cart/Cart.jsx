import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { CartItem } from "../../components/CartItem/CartItem";
import { CartTotal } from "../../components/CartTotal/CartTotal";

export const Cart = () => {
  const { cart } = useCart();
  return (
    <main>
      {cart?.length === 0 && (
        <article className="w-11/12 md:container mx-auto flex justify-center">
          <p>No Items In The Cart !!!</p>
          <Link to="/products">Shop Now</Link>
        </article>
      )}
      <h4 className="text-center my-6 text-3xl">Your Cart</h4>
      <section className="w-11/12 md:container mx-auto flex flex-col gap-5">
        {cart?.map((cartItem) => (
          <CartItem cartItem={cartItem} />
        ))}
        <CartTotal />
      </section>
    </main>
  );
};
