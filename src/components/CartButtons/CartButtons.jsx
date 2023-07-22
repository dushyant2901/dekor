import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const CartButtons = ({ sidebar }) => {
  const { logoutHandler, loggedUser } = useAuth();
  const navigate = useNavigate();
  return (
    <div className={`${sidebar ? "flex justify-evenly  " : "flex gap-4"}`}>
      <Link to="/cart" className="text-3xl flex items-center gap-1">
        <p className={`${sidebar ? "block" : "hidden lg:block"}`}>Cart</p>
        <span>
          <FaShoppingCart />
        </span>
      </Link>
      <Link to="/wishlist" className="text-3xl flex items-center gap-1">
        {" "}
        <p className={`${sidebar}?'block':'hidden lg:block'}`}>WishList</p>
        <span>
          <FaShoppingCart />
        </span>
      </Link>
      {loggedUser ? (
        <button
          onClick={logoutHandler}
          type="button"
          className="text-3xl flex items-center gap-1"
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button
          onClick={() => navigate("/login")}
          type="button"
          className="text-3xl flex items-center"
        >
          Login <FaUserPlus />
        </button>
      )}
    </div>
  );
};
