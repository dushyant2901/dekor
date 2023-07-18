import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Error,
  Products,
  SingleProduct,
  About,
  Cart,
  Wishlist,
  Checkout,
} from "../pages";
import { Layout } from "../Layout/Layout";
export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};
