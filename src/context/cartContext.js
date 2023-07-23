import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { useAuth } from "./authContext";
import { ADD_TO_CART, LOAD_CART, REMOVE_FROM_CART } from "../utils/actions";
import {
  addToCartService,
  getUserCartService,
  removeFromCartService,
  updateCartItemQtyService,
} from "../services/cartServices";
import { cartReducer } from "../reducers/cartReducer";
import { useNavigate } from "react-router-dom";
const initialCartState = {
  cart: null,
  totalPrice: 0,
  totalQuantity: 0,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  const navigate = useNavigate();
  const { token, loggedUser } = useAuth();
  useEffect(() => {
    const getUserCart = async () => {
      try {
        const {
          status,
          data: { cart },
        } = await getUserCartService(token);
        if (status === 200) {
          cartDispatch({ type: LOAD_CART, payload: cart });
          console.log({ cart });
          console.log("first");
        }
      } catch (e) {
        console.error({
          message: e.message,
          code: e.code,
          where: "getCartItemsHandler",
        });
      }
    };
    getUserCart();

    console.log({ cartState });
  }, [token]);

  const addToCart = async (product) => {
    if (!loggedUser) {
      navigate("/login");
      return;
    }
    try {
      const {
        status,
        // data: { cart },
      } = await addToCartService(product, token);
      if (status === 201) {
        cartDispatch({ type: ADD_TO_CART, payload: product });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeFromCart = async (productId) => {
    try {
      const {
        status,
        // data: { cart },
      } = await removeFromCartService(productId, token);
      console.log({ status });
      if (status === 201 || status === 200) {
        cartDispatch({ type: REMOVE_FROM_CART, payload: productId });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateCartItemQty = async (id, type) => {
    try {
      const res = await updateCartItemQtyService({ id, type }, token);
      if (res.status === 200 || res.status === 201) {
        const dataFetched = await res.json();
        console.log({ dataFetched });
        //  setCartData(dataFetched?.cart);
      }
    } catch (e) {
      console.error("Error:", e);
      //  notifyToast("error", "An error occurred. Please try again later!");
    }
  };

  return (
    <CartContext.Provider
      value={{
        ...cartState,
        addToCart,
        removeFromCart,
        updateCartItemQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
