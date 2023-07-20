import React, { useEffect } from "react";
import { useProducts } from "../../context/productContext";
import { useParams } from "react-router-dom";
import { LinkButton, Loader } from "../../components";

export const SingleProduct = () => {
  const {
    singleProduct: product,
    singleProductLoading: isLoading,
    singleProductError: error,
    fetchSingleProduct,
  } = useProducts();

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
  const isAlreadyInCart = false;
  const isAlreadyInWishlist = false;
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
                {isAlreadyInCart ? (
                  <LinkButton text="Go to Cart" />
                ) : (
                  <LinkButton text="Add to Cart" />
                )}

                {isAlreadyInWishlist ? (
                  <LinkButton text="Remove from wishlist" />
                ) : (
                  <LinkButton text="Add to Wishlist" />
                )}
              </div>
            </article>
          </div>
        </section>
      )}
    </main>
  );
};
