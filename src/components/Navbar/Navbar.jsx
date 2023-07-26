import React from "react";
import { FaBars } from "react-icons/fa";
import { links as navLinks } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { CartButtons } from "../CartButtons/CartButtons";
import { useFilter } from "../../context/filterContext";
export const Navbar = () => {
  const { filters, updateFilters } = useFilter();
  const navigate = useNavigate();
  return (
    <nav className="w-screen">
      <section
        className="flex
      justify-between items-center mx-auto py-2 sm:py-4 w-11/12   sm:container "
      >
        <div className="flex items-center justify-between w-full md:w-auto ">
          <Link to="/">
            <h1 className="text-3xl lg:text-4xl text-primary">DEKOR</h1>
          </Link>
          <button className="md:hidden text-3xl text">
            <FaBars />
          </button>
        </div>
        <ul className=" gap-6 hidden md:flex lg:gap-8 items-center">
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
        <div className="flex gap-6 items-center">
          <input
            onClick={() => navigate("/products")}
            type="text"
            name="text"
            value={filters?.text}
            placeholder="search"
            onChange={updateFilters}
            className="w-64 p-1 border border-primary outline-none
              text-md text-black font-bold "
          />
          <div className="hidden md:flex md:items-center">
            <CartButtons />
          </div>
        </div>
      </section>
    </nav>
  );
};
