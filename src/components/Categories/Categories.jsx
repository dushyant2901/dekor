import React from "react";
import { CategoryCard } from "../CategoryCard/CategoryCard";

export const Categories = () => {
  const Categories = ["Table", "chair", "lamps", "bed", "carpet"];
  return (
    <section className="w-11/12 sm:container bg-teal-200 mx-auto my-4 md:my-8 py-4 md:py-8">
      <h4 className="text-2xl md:text-3xl">Shop By Categories</h4>
      <div className="flex flex-wrap justify-evenly gap-4 md:gap-6 my-4 md:my-6">
        {Categories.map((category) => (
          <CategoryCard />
        ))}
      </div>
    </section>
  );
};
