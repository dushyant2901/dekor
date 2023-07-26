import {
  LOAD_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QTY,
} from "../utils/actions";

export const cartReducer = (state, { type, payload }) => {
  if (type === LOAD_CART) {
    console.log({ payload });
    return {
      ...state,
      cart: payload,
    };
  }
  if (type === ADD_TO_CART) {
    console.log({ payload, from: "add to cart" });
    return {
      ...state,
      cart: payload,
    };
  }
  if (type === REMOVE_FROM_CART) {
    console.log({ payload, from: "remove from cart" });
    return {
      ...state,
      cart: payload,
      // cart: state.cart.filter(({ _id }) => _id !== payload),
    };
  }
  if (type === UPDATE_CART_QTY) {
    console.log({ payload, from: "update from cart" });
    return {
      ...state,
      cart: payload,
    };
  }

  throw new Error(`No Matching "${type}" - action type`);
};
