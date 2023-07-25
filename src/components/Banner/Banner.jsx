import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "../../assets/banner.jpg";
import { LinkButton } from "../LinkButton/LinkButton";
export const Banner = () => {
  return (
    <section className="w-11/12 sm:container flex mx-auto my-4 md:my-8 items-center">
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
        <LinkButton text="Shop Now" url="/products" />
      </article>
      <article className="hidden md:block md:w-1/2 overflow-hidden h-[50rem] ">
        <img src={BannerImg} alt="banner" />
      </article>
    </section>
  );
};
