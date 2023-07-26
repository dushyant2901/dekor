import {
  LOAD_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../utils/actions";

export const wishlistReducer = (state, { type, payload }) => {
  if (type === LOAD_WISHLIST) {
    console.log({ payload });
    return {
      ...state,
      wishlist: payload,
    };
  }
  if (type === ADD_TO_WISHLIST) {
    console.log({ payload, from: "add to wishlist" });
    return {
      ...state,
      wishlist: payload,
    };
  }
  if (type === REMOVE_FROM_WISHLIST) {
    console.log({ payload, from: "remove from wishlist" });
    return {
      ...state,
      wishlist: payload,
    };
  }

  throw new Error(`No Matching "${type}" - action type`);
};
