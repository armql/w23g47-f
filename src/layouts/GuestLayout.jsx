import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../views/navbar/Navbar";

export default function GuestLayout() {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
}
