import React from "react";
import { Banner, Catalogue, Categories } from "../../components";

export const Home = () => {
  return (
    <main className="h-screen">
      <Banner />
      <Catalogue title="Shop By Categories" />
      <Catalogue title="Shop By Brands" />
    </main>
  );
};
