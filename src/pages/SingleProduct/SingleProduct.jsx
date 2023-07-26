import React, { useEffect } from "react";
import { useProducts } from "../../context/productContext";
import { useParams } from "react-router-dom";
import { LinkButton, Loader } from "../../components";
import { useCart } from "../../context/cartContext";
import { useWishlist } from "../../context/wishlistContext";
import { isAlreadyInCart, isAlreadyInWishlist } from "../../utils/helpers";
export const SingleProduct = () => {
  const {
    singleProduct: product,
    singleProductLoading: isLoading,
    singleProductError: error,
    fetchSingleProduct,
  } = useProducts();

  const { addToCart, cart } = useCart();

  const { addToWishlist, wishlist, removeFromWishlist } = useWishlist();

  const { id: productId } = useParams();

  useEffect(() => {
    fetchSingleProduct(productId);
  }, [productId]);

  const { name, price, description, category, image } = product ?? {};

  return (
    <main>
      {isLoading && <Loader />}
      {!isLoading && error && (
        <p className="text-3xl text-red-500">Such product does not exist !!!</p>
      )}
      {!isLoading && !error && (
        <section className="w-11/12 sm:container mx-auto my-4 md:my-8 ">
          <LinkButton text="Back To Products" to="/products" />
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <article className="block md:w-1/2 overflow-hidden h-[50rem] ">
              <img src={image} alt={name} />
            </article>
            <article className="md:w-1/2 flex flex-col gap-4">
              <h2 className="text-xl">{name}</h2>

              <h5 className="text-lg">Rs {price}</h5>
              <h5 className="text-lg">
                <span>Category : </span>
                {category}
              </h5>

              <p className="text-lg w-3/4">{description}</p>

              <div className="my-4 flex gap-5">
                {isAlreadyInCart(cart, productId) ? (
                  <LinkButton text="Go to Cart" to="/cart" />
                ) : (
                  <button
                    onClick={() => addToCart(product)}
                    className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5 w-max  "
                  >
                    Add To Cart
                  </button>
                )}

                {isAlreadyInWishlist(wishlist, productId) ? (
                  <button
                    onClick={() => removeFromWishlist(productId)}
                    className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5 w-max  "
                  >
                    Remove From Wishlist
                  </button>
                ) : (
                  <button
                    onClick={() => addToWishlist(product)}
                    className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5 w-max  "
                  >
                    Add To Wishlist
                  </button>
                )}
              </div>
            </article>
          </div>
        </section>
      )}
    </main>
  );
};
