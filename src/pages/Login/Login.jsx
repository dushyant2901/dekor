import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import { guestLoginDetails } from "../../utils/constants";
import { toast } from "react-hot-toast";

export const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const { loginHandler } = useAuth();

  const handleLoginDetails = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleLoginBtn = (e) => {
    e.preventDefault();
    if (!loginDetails.email || !loginDetails.password) {
      toast.error("Kindly fill all the fields!!");
      return;
    }
    loginHandler({ ...loginDetails });
  };

  const handleGuestLoginBtn = (e) => [
    e.preventDefault(),
    loginHandler({ ...guestLoginDetails }),
  ];

  return (
    <article className="bg-lightPrimary absolute inset-0 flex items-center justify-center">
      <form className=" border border-primary p-8 flex flex-col gap-4 bg-white rounded-md shadow-md">
        <h5 className="text-xl md:text-2xl text-center mb-6">Login</h5>
        <div className="flex  gap-4 items-center">
          <label htmlFor="email" className="text-lg md:text-xl w-1/3">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={loginDetails.email}
            onChange={handleLoginDetails}
            className="text-lg md:text-xl outline-primary border border-primary p-1.5 rounded-sm w-2/3"
          />
        </div>
        <div className="flex  gap-4 items-center">
          <label htmlFor="password" className="text-lg md:text-xl w-1/3">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={loginDetails.password}
            onChange={handleLoginDetails}
            className="text-lg md:text-xl outline-primary border border-primary p-1.5 rounded-sm w-2/3"
          />
        </div>
        <button
          type="submit"
          onClick={handleLoginBtn}
          className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5 w-full mt-6"
        >
          Submit
        </button>
        <button
          type="submit"
          onClick={handleGuestLoginBtn}
          className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5 w-full "
        >
          Guest Login
        </button>
        <p>
          Don't Have An Account ?
          <Link to="/signup" className="text-lg text-primary">
            Signup
          </Link>
        </p>
      </form>
    </article>
  );
};
