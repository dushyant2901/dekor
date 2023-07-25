import React, { useContext, useEffect, useReducer } from "react";
import { useAuth } from "./authContext";
import {
  ADD_TO_WISHLIST,
  LOAD_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../utils/actions";
import {
  addToWishlistService,
  getUserWishlistService,
  removeFromWishlistService,
} from "../services/wishlistServices";
import { wishlistReducer } from "../reducers/wishlistReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const initialWishlistState = { wishlist: [] };

const WishlistContext = React.createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );
  const navigate = useNavigate();
  const { token, loggedUser } = useAuth();
  useEffect(() => {
    const getUserWishlist = async () => {
      try {
        const {
          status,
          data: { wishlist },
        } = await getUserWishlistService(token);
        if (status === 200) {
          wishlistDispatch({ type: LOAD_WISHLIST, payload: wishlist });
        }
      } catch (error) {
        console.log(error);
        toast.error("Something Went Wrong !!!");
      }
    };
    getUserWishlist();
  }, [token]);

  const addToWishlist = async (product) => {
    if (!loggedUser) {
      toast.error("Kindly Login First !!!");
      return;
    }
    try {
      const {
        status,
        // data: { wishlist },
      } = await addToWishlistService(product, token);
      if (status === 201) {
        wishlistDispatch({ type: ADD_TO_WISHLIST, payload: product });
        toast.success("Added To Wishlist !!!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong !!!");
    }
  };
  const removeFromWishlist = async (productId) => {
    try {
      const {
        status,
        // data: { wishlist },
      } = await removeFromWishlistService(productId, token);
      console.log({ status });
      if (status === 201 || status === 200) {
        wishlistDispatch({ type: REMOVE_FROM_WISHLIST, payload: productId });
        toast.success("Removed From Wishlist !!!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong !!!");
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        ...wishlistState,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
