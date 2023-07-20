import React from "react";
import { Filters, Loader, ProductCard } from "../../components";
import { useProducts } from "../../context/productContext";
import { useFilter } from "../../context/filterContext";

export const Products = () => {
  const {
    productsLoading: isLoading,
    productsError: error,
    categories,
  } = useProducts();
  const { filteredProducts: products } = useFilter();
  console.log({ categories });
  return (
    <main className="w-11/12 md:container mx-auto flex flex-col md:flex-row py-10 ">
      <aside className="min-w-[18 rem]  h-screen ">
        <Filters />
      </aside>
      <section className="flex gap-6 flex-wrap items-start justify-evenly px-4">
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
