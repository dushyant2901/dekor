import React from "react";
import { Filters, Loader, ProductCard } from "../../components";
import { useProducts } from "../../context/productContext";

export const Products = () => {
  const {
    products,
    productsLoading: isLoading,
    productsError: error,
  } = useProducts();
  console.log(products);
  return (
    <main className="w-11/12 md:container mx-auto flex flex-col md:flex-row  ">
      <aside className="min-w-[15rem] h-screen">
        <Filters />
      </aside>
      <section className="flex gap-6 flex-wrap items-center justify-evenly px-4">
        {isLoading && <Loader />}
        {!isLoading && error && (
          <p className="text-3xl text-center text-red-500">
            Something went wrong!!!
          </p>
        )}
        {!isLoading &&
          !error &&
          products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
      </section>
    </main>
  );
};
