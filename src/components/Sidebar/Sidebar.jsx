import React from "react";
import { links as sidebarLinks } from "../../utils/constants";
import { Link } from "react-router-dom";
import { CartButtons } from "../CartButtons/CartButtons";
export const Sidebar = () => {
  return (
    <aside>
      {" "}
      <ul className="flex gap-2">
        {sidebarLinks.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
      <CartButtons />
    </aside>
  );
};
