import React, { useContext, useEffect, useReducer } from "react";
import { useAuth } from "./authContext";
import {
  ADD_TO_CART,
  LOAD_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QTY,
} from "../utils/actions";
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
    if (!token) return;
    const getUserCart = async () => {
      try {
        const {
          status,
          data: { cart },
        } = await getUserCartService(token);
        if (status === 200 || status === 201) {
          cartDispatch({ type: LOAD_CART, payload: cart });
        }
      } catch (error) {
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
      if (status === 200 || status === 201) {
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
  // const updateCartItemQty = async (id, type) => {
  //   try {
  //     const res = await updateCartItemQtyService({ id, type }, token);
  //     if (res.status === 200 || res.status === 201) {
  //       const dataFetched = await res.json();
  //       console.log({ dataFetched });
  //       //  setCartData(dataFetched?.cart);
  //       toast.success("Went Wrong !!!");
  //     }
  //   } catch (error) {
  //     toast.error("Something Went Wrong !!!");
  //   }
  // };
  const updateCartItemQty = async (productId, type) => {
    try {
      const response = await updateCartItemQtyService(productId, token, type);
      const {
        status,
        data: { cart },
      } = response;
      if (status === 200) {
        // if (type === "increment")
        //   setCartManager({ type: "INCREASEQUANT", payload: cart });
        // else setCartManager({ type: "DECREASEQUANT", payload: cart });
        cartDispatch({ type: UPDATE_CART_QTY, payload: cart });
        toast.success(
          type === "increment"
            ? `Cart quantity increased successfully!`
            : `Cart quantity decreased successfully!`
          // {
          //   position: toast.POSITION.BOTTOM_RIGHT,
          // }
        );
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
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
