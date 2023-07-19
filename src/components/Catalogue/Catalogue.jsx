import React from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { CatalogueCard } from "../CatalogueCard/CatalogueCard";

export const Catalogue = ({ title, data }) => {
  return (
    <section>
      <SectionTitle title={title} />
      <div className="flex flex-wrap justify-evenly gap-4 md:gap-6 my-4 md:my-6">
        {data?.map((item) => (
          <CatalogueCard item={item} />
        ))}
      </div>
    </section>
  );
};
