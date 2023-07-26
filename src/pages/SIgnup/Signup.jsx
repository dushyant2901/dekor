import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { guestSignupDetails } from "../../utils/constants";
export const Signup = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    confirmPassword: "",
    hideIcon: { password: true, confirmPassword: true },
  });
  const showDetail = (type) => {
    setSignUpDetails({
      ...signUpDetails,
      hideIcon: { ...signUpDetails.hideIcon, [type]: false },
    });
  };
  const hideDetail = (type) => {
    setSignUpDetails({
      ...signUpDetails,
      hideIcon: { ...signUpDetails.hideIcon, [type]: true },
    });
  };
  const handleSignUpFieldDetails = (e) => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  const { signUpHandler } = useAuth();

  const handleSignupBtn = (e) => {
    console.log({ signUpDetails });
    e.preventDefault();
    if (
      !signUpDetails.email ||
      !signUpDetails.password ||
      !signUpDetails.username ||
      !signUpDetails.firstname ||
      !signUpDetails.lastname ||
      !signUpDetails.confirmPassword
    ) {
      toast.error("Kindly fill all the fields!!");
      return;
    }
    if (signUpDetails.confirmPassword !== signUpDetails.password) {
      toast.error("Password and Confirm Password mismatch !!!");
      return;
    }
    signUpHandler({ ...signUpDetails });
  };
  const handleGuestSignup = () => setSignUpDetails({ ...guestSignupDetails });
  return (
    <article className="bg-lightPrimary absolute inset-0 flex items-center justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" border border-primary p-8 flex flex-col  gap-6 bg-white rounded-md shadow-md"
      >
        <h5 className="text-xl md:text-2xl text-center mb-6">Signup</h5>

        <div className="flex  gap-4 items-center">
          <label htmlFor="firstname" className="text-lg md:text-xl w-1/3">
            FirstName
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="firstname"
            value={signUpDetails.firstname}
            onInput={handleSignUpFieldDetails}
            className="text-lg md:text-xl outline-primary p-1.5 rounded-sm w-2/3 border border-primary"
          />
        </div>
        <div className="flex  gap-4 items-center">
          <label htmlFor="lastname" className="text-lg md:text-xl w-1/3">
            Lastname
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="lastname"
            value={signUpDetails.lastname}
            onInput={handleSignUpFieldDetails}
            className="text-lg md:text-xl outline-primary p-1.5 rounded-sm w-2/3 border border-primary"
          />
        </div>
        <div className="flex  gap-4 items-center">
          <label htmlFor="username" className="text-lg md:text-xl w-1/3">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={signUpDetails.username}
            onInput={handleSignUpFieldDetails}
            className="text-lg md:text-xl outline-primary p-1.5 rounded-sm w-2/3 border border-primary"
          />
        </div>
        <div className="flex  gap-4 items-center">
          <label htmlFor="email" className="text-lg md:text-xl w-1/3">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={signUpDetails.email}
            onInput={handleSignUpFieldDetails}
            className="text-lg md:text-xl outline-primary p-1.5 rounded-sm w-2/3 border border-primary"
          />
        </div>
        <div className="flex  gap-4 items-center">
          <label htmlFor="password" className="text-lg md:text-xl w-1/3">
            Password
          </label>
          <div className="text-lg md:text-xl outline-primary border border-primary p-1.5 rounded-sm flex  items-center w-2/3">
            <input
              type={signUpDetails.hideIcon.password ? "password" : "text"}
              name="password"
              id="password"
              placeholder="Password"
              value={signUpDetails.password}
              onInput={handleSignUpFieldDetails}
              className="outline-none border border-none bg-transparent"
            />

            {signUpDetails.hideIcon.password ? (
              <FaEyeSlash onClick={() => showDetail("password")} />
            ) : (
              <FaEye onClick={() => hideDetail("password")} />
            )}
          </div>
        </div>
        <div className="flex  gap-4 items-center">
          <label htmlFor="confirmPassword" className="text-lg md:text-xl w-1/3">
            ConfirmPwd
          </label>{" "}
          <div className="text-lg md:text-xl outline-primary border border-primary p-1.5 rounded-sm flex  items-center w-2/3">
            <input
              type={
                signUpDetails.hideIcon.confirmPassword ? "password" : "text"
              }
              name="confirmPassword"
              id="confirmPassword"
              placeholder="confirmPassword"
              value={signUpDetails.confirmPassword}
              onInput={handleSignUpFieldDetails}
              className="outline-none border border-none bg-transparent"
            />{" "}
            {signUpDetails.hideIcon.confirmPassword ? (
              <FaEyeSlash onClick={() => showDetail("confirmPassword")} />
            ) : (
              <FaEye onClick={() => hideDetail("confirmPassword")} />
            )}
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSignupBtn}
          className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5 w-full "
        >
          Submit
        </button>
        <button
          type="submit"
          onClick={handleGuestSignup}
          className="text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5 w-full "
        >
          Guest Signup Details
        </button>
        <p>
          Already Have An Account ?{" "}
          <Link to="/login" className="text-primary font-bold">
            Login
          </Link>
        </p>
      </form>
    </article>
  );
};
