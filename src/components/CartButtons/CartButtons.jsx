import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { toast } from "react-hot-toast";

export const CartButtons = ({ sidebar }) => {
  const { logoutHandler, loggedUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleCartBtn = () => {
    if (!loggedUser) {
      toast.error("Kindly Login First !!!");
      return;
    }
    navigate("/cart", { from: location });
  };
  const handleWishListBtn = () => {
    if (!loggedUser) {
      toast.error("Kindly Login First !!!");
      return;
    }
    navigate("/wishlist");
  };
  return (
    <div
      className={`${
        sidebar ? "flex justify-evenly  " : "flex gap-4 items-center"
      }`}
    >
      <button
        to="/cart"
        className="text-xl flex flex-col-reverse items-center gap-1"
        onClick={handleCartBtn}
      >
        <p className={`${sidebar ? "block" : "hidden lg:block"}`}>Cart</p>
        <span className="text-3xl">
          <FaShoppingCart />
        </span>
      </button>
      <button
        onClick={handleWishListBtn}
        className="text-xl flex items-center gap-1  flex-col-reverse "
      >
        {" "}
        <p className={`${sidebar}?'block':'hidden lg:block'}`}>WishList</p>
        <span className="text-3xl">
          <FaShoppingCart />
        </span>
      </button>
      {loggedUser ? (
        <button
          onClick={logoutHandler}
          type="button"
          className="text-xl flex flex-col-reverse items-center gap-1"
        >
          Logout{" "}
          <span className="text-3xl">
            <FaUserMinus />
          </span>
        </button>
      ) : (
        <button
          onClick={() => navigate("/login")}
          type="button"
          className="text-xl flex flex-col-reverse items-center"
        >
          Login
          <span className="text-3xl">
            <FaUserPlus />
          </span>
        </button>
      )}
    </div>
  );
};
