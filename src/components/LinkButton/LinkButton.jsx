import React from "react";
import { Link } from "react-router-dom";

export const LinkButton = ({ text, url }) => {
  return (
    <Link
      to={url}
      className="text-white bg-primary hover:opacity-90  rounded-lg text-lg md:text-xl px-5 py-2.5  "
    >
      {text}
    </Link>
  );
};
