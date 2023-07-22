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
  Signup,
  Login,
} from "../pages";
import { Layout } from "../Layout/Layout";
import { RequiresAuth } from "./RequiresAuth";
export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="cart"
            element={
              <RequiresAuth>
                <Cart />
              </RequiresAuth>
            }
          />
          <Route
            path="wishlist"
            element={
              <RequiresAuth>
                <Wishlist />
              </RequiresAuth>
            }
          />
          <Route path="products" element={<Products />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route
            path="checkout"
            element={
              <RequiresAuth>
                <Checkout />
              </RequiresAuth>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};
