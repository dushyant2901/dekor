import React from "react";
import { Banner, Catalogue, Categories } from "../../components";
import { useProducts } from "../../context/productContext";

export const Home = () => {
  const { categories } = useProducts();
  return (
    <main className="h-screen">
      <Banner />
      <Catalogue title="Shop By Categories" data={categories} />
      <Catalogue title="Shop By Brands" />
    </main>
  );
};
