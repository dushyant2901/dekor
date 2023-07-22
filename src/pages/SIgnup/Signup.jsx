import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
export const Signup = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSignUpFieldDetails = (e) => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  const { signUpHandler } = useAuth();

  return (
    <article className="bg-lightPrimary absolute inset-0 flex items-center justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" border border-primary p-8 flex flex-col gap-2 bg-white rounded-md shadow-md"
      >
        <h5 className="text-xl md:text-2xl text-center mb-6">Signup</h5>
        <div className="flex flex-col gap-4">
          <label htmlFor="username" className="text-lg md:text-xl">
            Username
          </label>
          <input
            type="username"
            name="username"
            id="username"
            placeholder="Username"
            value={signUpDetails.username}
            onChange={handleSignUpFieldDetails}
            className="text-lg md:text-xl outline-primary p-1.5 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="email" className="text-lg md:text-xl">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={signUpDetails.email}
            onChange={handleSignUpFieldDetails}
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
            value={signUpDetails.password}
            onChange={handleSignUpFieldDetails}
            className="text-lg md:text-xl outline-primary border border-primary p-1.5 rounded-sm"
          />
        </div>
        <button type="submit" onClick={signUpHandler}>
          Submit
        </button>
        <Link to="/login">Login</Link>
      </form>
    </article>
  );
};
