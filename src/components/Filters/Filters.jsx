import React from "react";
import { useFilter } from "../../context/filterContext";
import { useProducts } from "../../context/productContext";
import { formatPrice } from "../../utils/helpers";
export const Filters = () => {
  const { filters, updateFilters, clearFilters } = useFilter();
  const { categories } = useProducts();
  let _categories = [
    "all",
    ...categories.map(({ categoryName }) => categoryName),
  ];
  const { category, rating, minPrice, price, maxPrice } = filters ?? {};
  const ratings = ["all", "1", "2", " 3", "4", " 5"];

  return (
    <>
      <div className="w-2/3 md:w-auto  ">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* category */}
          <div className="my-2.5">
            <h5 className="text-xl mb-1.5 md:mb-2 md:text-2xl">Category</h5>
            <div className="flex gap-2 flex-wrap">
              {_categories.map((categoryName, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="category"
                    className={`hover:opacity-90  rounded-md text-lg md:text-xl px-2.5 py-0.5  ${
                      categoryName === category
                        ? "text-white bg-primary border border-transparent"
                        : "border border-black"
                    }`}
                  >
                    {categoryName}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of category */}
          {/* ratings */}
          <div className="my-3">
            <h5 className="text-xl mb-1.5 md:mb-2 md:text-2xl">Rating</h5>
            <select
              name="rating"
              value={rating}
              onChange={updateFilters}
              className="border border-primary flex text-lg font-semibold"
            >
              {ratings.map((rating, index) => {
                return (
                  <option
                    key={index}
                    value={rating}
                    className="flex justify-center bg-lightPrimary text-lg font-medium"
                  >
                    {rating}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of rating */}

          {/* price */}
          <div className="my-3">
            <h5 className="text-xl mb-1.5 md:mb-2 md:text-2xl">Price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={minPrice}
              max={maxPrice}
              value={price}
            />
          </div>
          {/* end of price */}
        </form>
        <button
          type="button"
          className="hover:opacity-90  rounded-md text-lg md:text-xl px-2.5 py-1 bg-primary text-white
                    "
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    </>
  );
};
