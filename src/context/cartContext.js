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
import { toast } from "react-hot-toast";
const initialCartState = {
  cart: [],
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
        }
      } catch (e) {
        console.log(error);
      }
    };
    getUserCart();
  }, [token]);

  const addToCart = async (product) => {
    if (!loggedUser) {
      toast.error("Kindly Login First !!!");
      return;
    }
    try {
      const {
        status,
        // data: { cart },
      } = await addToCartService(product, token);
      if (status === 201) {
        cartDispatch({ type: ADD_TO_CART, payload: product });
        toast.success("Added To Cart !!!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong !!!");
    }
  };
  const removeFromCart = async (productId) => {
    try {
      const {
        status,
        // data: { cart },
      } = await removeFromCartService(productId, token);
      if (status === 201 || status === 200) {
        cartDispatch({ type: REMOVE_FROM_CART, payload: productId });
        toast.success("Removed From Cart !!!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong !!!");
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
    } catch (error) {
      toast.error("Something Went Wrong !!!");
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
