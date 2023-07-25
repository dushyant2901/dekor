import React from "react";
import { LinkButton } from "../LinkButton/LinkButton";
export const OrderPlaced = ({ setOrderPlaced }) => {
  return (
    <article className="bg-lightPrimary fixed inset-0 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 border-primary border shadow-md rounded-md bg-white relative p-4 w-9/12 md:w-1/3">
        <h4 className="text-3xl font-bold">Order Placed SuccessFully !!!</h4>
        <LinkButton
          to="/products"
          onClick={() => setOrderPlaced(false)}
          text={" Shop For More Products"}
        />
      </div>
    </article>
  );
};
