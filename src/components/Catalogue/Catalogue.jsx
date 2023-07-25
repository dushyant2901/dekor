import React from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { CatalogueCard } from "../CatalogueCard/CatalogueCard";

export const Catalogue = ({ title, data }) => {
  return (
    <section className="py-8 md:py-12 w-11/12 mx-auto md:container bg-lightPrimary my-4 md:my-20">
      <SectionTitle title={title} />
      <div className="flex flex-wrap justify-evenly gap-4 md:gap-6 my-3 md:my-5 ">
        {data?.map((item) => (
          <CatalogueCard key={item?._id} {...item} />
        ))}
      </div>
    </section>
  );
};
