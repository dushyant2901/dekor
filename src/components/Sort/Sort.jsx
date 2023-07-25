import React from "react";
import { useFilter } from "../../context/filterContext";

export const Sort = () => {
  const { sort, updateSort } = useFilter();
  return (
    <article className="flex px-8 items-center gap-2">
      <div className="w-full h-1 bg-primary "></div>
      <form className="border border-primary rounded-md flex flex-col items-center p-2 ">
        <label htmlFor="sort" className="text-lg font-bold">
          Sort-by
        </label>
        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={updateSort}
          className="text-primary font-bold"
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a - z)</option>
          <option value="name-z">name (z - a)</option>
        </select>
      </form>
    </article>
  );
};
