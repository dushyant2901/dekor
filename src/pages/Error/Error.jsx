import React from "react";
import { LinkButton } from "../../components";

export const Error = () => {
  return (
    <main className="bg-lightPrimary flex items-center justify-center">
      <div className="border-primary border rounded-lg bg-white p-6 md:p-8">
        <h3 className="text-black text-2xl md:text-3xl mb-4 text-center">
          404: Looks like something is missing!
        </h3>
        <h4 className="text-xl md:text-2xl text-center mb-2">
          Go back to explore products
        </h4>
        <div className="w-1/3">
          <LinkButton to="/products" text="    Browse Products" />
        </div>
      </div>
    </main>
  );
};
