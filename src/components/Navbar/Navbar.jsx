import React from "react";
import { FaBars } from "react-icons/fa";
import { links as navLinks } from "../../utils/constants";
import { Link } from "react-router-dom";
import { CartButtons } from "../CartButtons/CartButtons";
export const Navbar = () => {
  return (
    <nav className="w-screen">
      <section
        className="flex
      justify-between items-center mx-auto py-2 sm:py-4 w-11/12   sm:container "
      >
        <div className="flex items-center justify-between w-full sm:w-auto ">
          <Link to="/">
            <h1 className="text-3xl lg:text-4xl ">DEKOR</h1>
          </Link>
          <button className="md:hidden text-3xl text">
            <FaBars />
          </button>
        </div>
        <ul className=" gap-2 hidden sm:flex lg:gap-4">
          {navLinks.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} className="text-3xl ">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>{" "}
        <div className="hidden sm:flex">
          <CartButtons />
        </div>
      </section>
    </nav>
  );
};
