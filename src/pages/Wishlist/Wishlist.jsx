import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/wishlistContext";
import { WishlistItem } from "../../components/WishlistItem/WishlistItem";
import { useCart } from "../../context/cartContext";

export const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <main>
      <h4 className="text-center my-6 text-3xl">Your Wishlist</h4>
      {wishlist?.length === 0 && (
        <article className="w-11/12 md:container mx-auto flex justify-center">
          <p>No Items In The Wishlist !!!</p>
          <Link to="/products">Shop Now</Link>
        </article>
      )}

      <section className="w-11/12 md:container mx-auto flex flex-col gap-5">
        {wishlist?.map((wishlistItem) => (
          <WishlistItem wishlistItem={wishlistItem} />
        ))}
      </section>
    </main>
  );
};
