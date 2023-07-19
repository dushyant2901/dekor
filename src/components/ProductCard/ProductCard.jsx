import React from "react";

export const ProductCard = ({ name, image, _id, price, rating }) => {
  const isAlreadyInCart = true;
  return (
    <article className="border border-primary border-s rounded-md shadow-md hover:shadow-xl overflow-hidden ">
      <header className="relative">
        <img src={image} alt={name} className="w-52 md:w-60" />
        <button className="absolute top-2 right-2">favourite</button>
      </header>
      <footer className="py-3 px-2 bg-lightPrimary">
        <h4 className="text-lg">{name || "default"}</h4>
        <div className="flex justify-between items-center my-2">
          <p>{price || "2000"}</p>
          <p>{rating || "2"}</p>
        </div>
        {isAlreadyInCart ? (
          <button className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5 w-full  ">
            Add to Cart
          </button>
        ) : (
          <button className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5 w-full  ">
            Go to Cart
          </button>
        )}
      </footer>
    </article>
  );
};
