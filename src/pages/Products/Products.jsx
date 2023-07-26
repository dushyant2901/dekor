import React from "react";
import { Filters, Loader, ProductCard } from "../../components";
import { useProducts } from "../../context/productContext";
import { useFilter } from "../../context/filterContext";
import { Sort } from "../../components/Sort/Sort";

export const Products = () => {
  const { productsLoading: isLoading, productsError: error } = useProducts();
  const { filteredProducts: products } = useFilter();
  return (
    <main className="w-11/12 md:container mx-auto flex flex-col md:flex-row py-2 ">
      <aside className="min-w-[15rem]  h-screen ">
        <Filters />
      </aside>
      <div className="flex gap-3 flex-col w-full ">
        <Sort />
        <section className=" flex gap-6 flex-wrap items-start justify-evenly px-4">
          {isLoading && <Loader />}
          {!isLoading && error && (
            <p className="text-3xl text-center text-red-500">
              Something went wrong!!!
            </p>
          )}
          {!isLoading && !error && products?.length === 0 && (
            <p className="text-3xl text-center text-red-500">
              No Products Found !!!
            </p>
          )}
          {!isLoading &&
            !error &&
            products.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
        </section>
      </div>
    </main>
  );
};
