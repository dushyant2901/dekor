import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { CartItem } from "../../components/CartItem/CartItem";
import { CartTotal } from "../../components/CartTotal/CartTotal";
import { LinkButton } from "../../components";
import { useAuth } from "../../context/authContext";

export const Cart = () => {
  const { cart } = useCart();
  const { loggedUser } = useAuth();
  return (
    <main>
      <h4 className="text-center my-6 text-3xl">Your Cart</h4>

      {cart?.length === 0 && (
        <article className="w-11/12 md:container mx-auto flex justify-center">
          <p>No Items In The Cart !!!</p>
          <Link to="/products">Shop Now</Link>
        </article>
      )}

      <section className="w-11/12 md:container mx-auto flex flex-col gap-5">
        {cart?.map((cartItem) => (
          <CartItem cartItem={cartItem} />
        ))}
        {cart.length > 0 && <CartTotal />}
        {loggedUser && cart.length > 0 && (
          <div className="w-28">
            <LinkButton text="checkout" to="/checkout" />
          </div>
        )}
      </section>
    </main>
  );
};
