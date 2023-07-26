import React from "react";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../context/filterContext";
import { UPDATE_FILTERS } from "../../utils/actions";
export const CatalogueCard = ({ image, categoryName }) => {
  const navigate = useNavigate();
  const { filterDispatch } = useFilter();
  const handleCatalogueCardClick = () => {
    filterDispatch({
      type: UPDATE_FILTERS,
      payload: { name: "category", value: categoryName },
    });
    navigate("/products");
  };
  return (
    <article
      className="relative flex-1 min-h-[20rem]  flex justify-center items-center cursor-pointer overflow-hidden object-contain bg-red-50 "
      onClick={handleCatalogueCardClick}
    >
      <h4 className="text-2xl md:text-3xl text-white font-bold   bg-black border-black border rounded-3xl p-4">
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
