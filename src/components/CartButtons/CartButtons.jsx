import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
export const CartButtons = () => {
  const myUser = true;
  return (
    <div className="flex gap-4">
      <Link to="/cart" className="text-3xl flex items-center gap-1">
        <p className="hidden lg:block">Cart</p>
        <span>
          <FaShoppingCart />
        </span>
      </Link>
      <Link to="/wishlist" className="text-3xl flex items-center gap-1">
        {" "}
        <p className="hidden lg:block">WishList</p>
        <span>
          <FaShoppingCart />
        </span>
      </Link>
      {myUser ? (
        <button type="button" className="text-3xl flex items-center gap-1">
          Logout <FaUserMinus />
        </button>
      ) : (
        <button type="button" className="text-3xl flex items-center">
          Login <FaUserPlus />
        </button>
      )}
    </div>
  );
};
