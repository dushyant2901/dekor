import React from "react";

export const SectionTitle = ({ title }) => {
  return (
    <div className="relative flex justify-center mb-12 md:mb-20">
      <h2 className="text-3xl md:text-4xl ">{title}</h2>;
      <div className="absolute -bottom-5 w-28 h-2 bg-primary "></div>
    </div>
  );
};
