import React from "react";
import { Navbar, Sidebar } from "../components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}

      <Outlet />
    </>
  );
};
