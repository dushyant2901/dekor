import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
export const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const { loginHandler } = useAuth();

  const handleLoginDetails = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleLoginBtn = (e) => {
    // e.preventDefault();
    if (!loginDetails.username && !loginDetails.password) {
      // toast.error("Kindly fill all the fields!!");
      return;
    }
    loginHandler({ ...loginDetails });
  };

  const handleGuestLoginBtn = (e) => [
    // e.preventDefault(),
    // loginHandler({ ...guestLoginDetails }),
  ];

  return (
    <article className="bg-lightPrimary absolute inset-0 flex items-center justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" border border-primary p-8 flex flex-col gap-2 bg-white rounded-md shadow-md"
      >
        <h5 className="text-xl md:text-2xl text-center mb-6">Login</h5>
        <div className="flex flex-col gap-4">
          <label htmlFor="email" className="text-lg md:text-xl">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={loginDetails.email}
            onChange={handleLoginDetails}
            className="text-lg md:text-xl outline-primary p-1.5 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="password" className="text-lg md:text-xl">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={loginDetails.password}
            onChange={handleLoginDetails}
            className="text-lg md:text-xl outline-primary border border-primary p-1.5 rounded-sm"
          />
        </div>
        <button type="submit" onClick={handleLoginBtn}>
          Submit
        </button>
        <Link to="/signup">Signup</Link>
      </form>
    </article>
  );
};
