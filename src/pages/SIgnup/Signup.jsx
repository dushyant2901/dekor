import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
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

  const handleSignupBtn = (e) => {
    e.preventDefault();
    if (
      signUpDetails.email === "" &&
      signUpDetails.password === "" &&
      signUpDetails.username === ""
    ) {
      toast.error("Kindly fill all the fields!!");
      return;
    }
    signUpHandler({ ...signUpDetails });
  };
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
        <button
          type="submit"
          onClick={handleSignupBtn}
          className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5 w-full "
        >
          Submit
        </button>
        <p>
          Already Have An Account ? <Link to="/login">Login</Link>
        </p>
      </form>
    </article>
  );
};
