import React from "react";
import { Link } from "react-router-dom";
import { MdFavorite, MdStar, MdFavoriteBorder } from "react-icons/md";
import { useCart } from "../../context/cartContext";
import { useWishlist } from "../../context/wishlistContext";
import { isAlreadyInCart, isAlreadyInWishlist } from "../../utils/helpers";
export const ProductCard = (product) => {
  const { name, image, _id: id, price, rating } = product;
  const { cart, addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  return (
    <article className="border border-primary border-s rounded-md shadow-md hover:shadow-xl overflow-hidden ">
      <Link to={`/products/${id}`}>
        <header className="relative">
          <img src={image} alt={name} className="w-52 md:w-60" />
          {isAlreadyInWishlist(wishlist, id) ? (
            <button
              className="absolute top-3 right-3 text-2xl text-red-500 "
              onClick={() => removeFromWishlist(id)}
            >
              <MdFavorite />
            </button>
          ) : (
            <button
              className="absolute top-3 right-3 text-2xl "
              onClick={() => addToWishlist(product)}
            >
              <MdFavoriteBorder />
            </button>
          )}
        </header>
        <footer className="py-3 px-2 bg-lightPrimary">
          <h4 className="text-lg">{name || "chair"}</h4>
          <div className="flex justify-between items-center my-2">
            <p>{price || "2000"}</p>
            <p className="flex gap-0.5 items-center text-lg ">
              {rating || "2"}{" "}
              <span className="text-xl">
                <MdStar />
              </span>
            </p>
          </div>
        </footer>
      </Link>
      {isAlreadyInCart(cart, id) ? (
        <Link
          to="/cart"
          className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5 w-full  "
        >
          Go to Cart
        </Link>
      ) : (
        <button
          className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5 w-full  "
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </article>
  );
};
