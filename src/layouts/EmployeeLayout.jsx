import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

export default function EmployeeLayout() {
  return (
    <Fragment>
      EmployeeLayout
      <Outlet />
    </Fragment>
  );
}
