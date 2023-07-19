import React from "react";
import { Link } from "react-router-dom";
export const Banner = () => {
  return (
    <section className="w-11/12 sm:container flex bg-teal-200 mx-auto my-4 md:my-8 ">
      <article className="md:w-1/2 py-16 px-4 ">
        <h1 className="text-4xl md:text-5xl">
          design your <br />
          comfort zone
        </h1>
        <p className="text-2xl my-4 md:text-3xl md:my-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link to="/products">shop now</Link>
      </article>
      <article className="hidden md:block"></article>
    </section>
  );
};
