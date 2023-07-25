import React from "react";

export const CatalogueCard = ({ image, categoryName }) => {
  // const { categoryName, image } = data ;
  return (
    <article className="relative flex-1 min-h-[20rem]  flex justify-center items-center cursor-pointer overflow-hidden object-contain bg-red-50 ">
      <h4 className="text-3xl md:text-4xl text-black font-extrabold ">
        {categoryName}
      </h4>
      <img
        src={image}
        alt={categoryName}
        className="absolute inset-0  opacity-50"
      />
    </article>
  );
};
