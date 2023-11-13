import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

export default function ClientLayout() {
  return (
    <Fragment>
      ClientLayout
      <Outlet />
    </Fragment>
  );
}
