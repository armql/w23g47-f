import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navlinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };
  return (
    <div className="bg-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="item-center flex">
            <a href="/" className="text-white">
              AFT ✈
            </a>
          </div>
          {/* navlinks */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navlinks.map((link, index) => (
                <a
                  key={index}
                  className="text-md rounded-md px-3
                     py-2 font-medium  text-gray-300 transition-all duration-500
                      hover:bg-gray-600 hover:text-white"
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          {/* hamburger button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center rounded-md
                     p-2 text-gray-400 hover:bg-gray-700 hover:text-white
                     focus:outline-none focus:ring-2 focus:ring-white
                     focus:ring-offset-2 focus:ring-offset-gray-800 "
            >
              <span className="sr-only">Open Main Menu</span>
              {open === true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* {mobile-menu} */}
      {open ? (
        <div className="md:hidden">
          <div className="ox-2 space-y-1 pb-3 pt-2 sm:px-3">
            {navlinks.map((link, index) => (
              <a
                key={index}
                className="block rounded-md px-3 
                 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                href={link.link}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
