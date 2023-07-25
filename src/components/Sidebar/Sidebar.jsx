import React from "react";
import { links as sidebarLinks } from "../../utils/constants";
import { Link } from "react-router-dom";
import { CartButtons } from "../CartButtons/CartButtons";
import { FaTimes } from "react-icons/fa";
export const Sidebar = () => {
  return (
    <aside className="absolute inset-0 z-10 bg-teal-200  sm:hidden p-6 flex flex-col gap-10">
      {" "}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl">DEKOR</h1>
        <button className="text-3xl ">
          <FaTimes />
        </button>
      </div>
      <ul className="flex flex-col gap-4 my-8">
        {sidebarLinks.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id} className="text-3xl text-center">
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
      <CartButtons sidebar />
    </aside>
  );
};
