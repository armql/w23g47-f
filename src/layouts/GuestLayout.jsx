import React, { Fragment, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../views/navbar/Navbar";
import Spline from "@splinetool/react-spline";

export default function GuestLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const cube = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName("Cube");
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // save it in a ref for later use
    cube.current = obj;
  }

  function toggleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <Fragment>
      <Navbar />
      <div className={`relative ${isDarkMode ? "dark" : ""}`}>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-indigo-50 dark:bg-indigo-900">
          <Spline
            scene="https://prod.spline.design/VUbPkLw74PeIfeYg/scene.splinecode"
            onLoad={onLoad}
          />
        </div>
        <div className="absolute bottom-4 left-4 z-10">
          <button
            onClick={toggleDarkMode}
            type="button"
            className="rounded-md bg-white px-4 py-2 text-lg shadow-md dark:bg-gray-800"
          >
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
}
