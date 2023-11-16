import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../views/navbar/Navbar";
import Callout from "../components/common/Callout";

export default function GuestLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  // TODO: Logic for banner in case of outage runs outage, in case of maintenance runs maintenance, and mainly runs promotions.

  return (
    <Fragment>
      <div className={`relative ${isDarkMode ? "dark" : ""}`}>
        {/* <Callout type={"rejection"} />  */}
        <Navbar />
        <Outlet />
      </div>
      <div className="fixed bottom-4 left-4 z-10">
        <button
          onClick={toggleDarkMode}
          type="button"
          className="z-40 rounded-md bg-white px-4 py-2 text-lg shadow-md dark:bg-gray-800"
        >
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </Fragment>
  );
}
