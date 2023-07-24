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
  console.log({ productId });
  useEffect(() => {
    fetchSingleProduct(productId);
  }, [productId]);
  console.log({ product });
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    category,
    company,
    image,
  } = product ?? {};

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
            <article className="md:w-1/2">
              <h2>{name}</h2>

              <h5>{price}</h5>
              <h5>{category}</h5>

              <p>{description}</p>
              <p>
                <span>Available : </span>
                {stock > 0 ? "In stock" : "out of stock"}
              </p>

              <p>
                <span>Brand :</span>
                {company}
              </p>
              <div>
                {isAlreadyInCart(cart, productId) ? (
                  <LinkButton text="Go to Cart" />
                ) : (
                  <button onClick={() => addToCart(product)}>
                    Add To Cart
                  </button>
                )}

                {isAlreadyInWishlist(wishlist, productId) ? (
                  <button onClick={() => removeFromWishlist(productId)}>
                    Remove From Wishlist
                  </button>
                ) : (
                  <button onClick={() => addToWishlist(product)}>
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
