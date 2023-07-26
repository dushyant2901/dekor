import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { ProductsProvider } from "./context/productContext";
import { FilterProvider } from "./context/filterContext";
import { AuthProvider } from "./context/authContext";
import { CartProvider, useCart } from "./context/cartContext";
import { WishlistProvider, useWishlist } from "./context/wishlistContext";
import { AdressProvider } from "./context/adressContext";
makeServer();
export { useCart, useWishlist };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <WishlistProvider>
                <AdressProvider>
                  <App />
                </AdressProvider>
              </WishlistProvider>
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
