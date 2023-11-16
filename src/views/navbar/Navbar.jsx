import React, { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";

const navlinks = [
  {
    title : "Home",
    link: "/",
  },
  {
    title : "About",
    link: "/about",
  },
  {
    title : "Services",
    link: "/services",
  },
  {
    title : "Contact",
    link: "/contact",
  },
]

export default function Navbar() {
    const [open, setOpen] = useState(false);
    

    const handleMenu = () => {
      setOpen((prev) => !prev);
      console.log(open)
    }
  return (
    <div className="bg-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="flex items-center justify-between h-16">
          <div className="flex item-center">
              <a href="/" className="text-white">
                AFT ✈
              </a>
          </div>
          {/* navlinks */}
          <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                  {navlinks.map((link, index) => (
                    <a key={index} className="text-gray-300 transition-all duration-500
                     hover:bg-gray-600 hover:text-white  px-3 py-2 rounded-md
                      text-md font-medium" 
                       href={link.link}>{link.title}
                    </a>
                  ))}
              </div>
        </div>
          {/* hamburger button */}
          <div className="-mr-2 flex md:hidden">
                    <button type="button" onClick={handleMenu} className="inline-flex items-center justify-center p-2
                     rounded-md text-gray-400 hover:text-white hover:bg-gray-700
                     focus:outline-none focus:ring-2 focus:ring-offset-2
                     focus:ring-offset-gray-800 focus:ring-white ">
                        <span className="sr-only">Open Main Menu</span>
                        {open === true ? <FaTimes /> : <FaBars/> } 
                    </button>
               
          </div>
        </div>
      </div>
      {/* {mobile-menu} */}
      {open ? (
        <div className="md:hiddem">
          <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navlinks.map((link, index) => (
                <a 
                key={index}
                 className="text-gray-300 hover:bg-gray-700 hover:text-white 
                 block px-3 py-2 rounded-md text-base font-medium"
                  href={link.link}>{link.title}
               </a>
            ))}

          </div>

        </div>
      ) : null }

    </div>

  );
};

