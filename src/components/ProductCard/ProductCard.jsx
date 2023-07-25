import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdFavorite, MdStar, MdFavoriteBorder } from "react-icons/md";
import { useCart } from "../../context/cartContext";
import { useWishlist } from "../../context/wishlistContext";
import { isAlreadyInCart, isAlreadyInWishlist } from "../../utils/helpers";
export const ProductCard = (product) => {
  const { name, image, _id: id, price, rating } = product;
  const { cart, addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const navigate = useNavigate();

  const handleCardClick = (e) => {
    e.stopPropagation();
    if (e.target.type !== "wishlist") {
      navigate(`/products/${id}`);
    }
  };
  return (
    <article className="border border-primary border-s rounded-md shadow-md hover:shadow-xl overflow-hidden relative ">
      {" "}
      {isAlreadyInWishlist(wishlist, id) ? (
        <button
          type="wishlist"
          className="absolute top-3 right-3 text-2xl text-red-500 p-3"
          onClick={(e) => {
            removeFromWishlist(id);
          }}
        >
          <MdFavorite />
        </button>
      ) : (
        <button
          className="absolute top-3 right-3 text-2xl p-3"
          onClick={(e) => {
            addToWishlist(product);
          }}
          type="wishlist"
        >
          <MdFavoriteBorder />
        </button>
      )}
      <div onClick={handleCardClick} className="w-full" type="product">
        <header className="relative">
          <img src={image} alt={name} className="w-52 md:w-60" />
        </header>
        <footer className="pt-3 px-2 bg-lightPrimary">
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
      </div>
      {isAlreadyInCart(cart, id) ? (
        <Link
          to="/cart"
          className="w-full text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5  block text-center"
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
