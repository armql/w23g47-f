import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { Fragment, useEffect, useRef, useState } from "react";

export default function PerPerson() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setDropdown(!dropdown);
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setDropdown(false);
  };

  const handleAdult = (action) => {
    if (action === "add") {
      setAdult((prevAdult) => prevAdult + 1);
    } else if (action === "remove" && adult > 0) {
      setAdult((prevAdult) => prevAdult - 1);
    }
  };

  const handleChildren = (action) => {
    if (action === "add") {
      setChildren((prevChild) => prevChild + 1);
    } else if (action === "remove" && children > 0) {
      setChildren((prevChild) => prevChild - 1);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // TODO: Connect with database instead of dynamic data
  // useEffect(() => {
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <div
      className={`relative w-full select-none rounded-bl-lg border-r-2 px-1.5 py-1.5 transition duration-100 sm:rounded-none md:rounded-none md:px-1.5 md:py-1.5 xl:px-2 xl:py-1.5 ${
        isOpen
          ? "z-10 cursor-alias border-indigo-200 bg-indigo-200 text-indigo-950 ring ring-indigo-400 dark:border-indigo-700 dark:bg-indigo-700 dark:ring-white"
          : "cursor-pointer border-indigo-200 bg-white dark:border-indigo-700 dark:bg-indigo-200"
      }`}
    >
      <div className="flex w-full flex-row items-center justify-start">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 lg:h-8 lg:w-8"
          style={{ fill: "currentColor" }}
        >
          <circle
            cx="16"
            cy="11"
            r="4"
            className={` ${
              isOpen
                ? "text-indigo-950 dark:text-white"
                : "text-gray-500 dark:text-indigo-950"
            }`}
          />
          <path
            d="M10 24C8.89543 24 7.97435 23.0907 8.24685 22.0202C9.12788 18.5595 12.265 16 16 16C19.735 16 22.8721 18.5595 23.7531 22.0202C24.0257 23.0907 23.1046 24 22 24H10Z"
            className={` ${
              isOpen
                ? "text-indigo-950 dark:text-white"
                : "text-gray-500 dark:text-indigo-950"
            }`}
          />
        </svg>
        <button
          onClick={toggleDropdown}
          onBlur={closeDropdown}
          type="button"
          name="perPerson"
          id="perPerson"
          className={`whitespace-nowrap border-2 border-transparent bg-transparent text-start text-sm text-indigo-950 ring-2 ring-transparent transition duration-300 md:w-32 md:text-sm xl:text-sm ${
            isOpen
              ? "placeholder:text-indigo-950 dark:text-white dark:placeholder:text-white"
              : "text-indigo-950 dark:text-indigo-950 dark:placeholder:text-indigo-950"
          } `}
        >
          {!adult <= 0 || !children <= 0 ? (
            <>
              {!adult <= 0 ? adult + " " : "X "}
              adult,
              {!children <= 0 ? children + " " : " X "}
              children
            </>
          ) : (
            <div
              className={`${
                isOpen
                  ? "placeholder:text-indigo-950 dark:text-white dark:placeholder:text-white"
                  : "text-gray-400 dark:text-indigo-950 dark:placeholder:text-indigo-950"
              }`}
            >
              How many?
            </div>
          )}
        </button>
        {dropdown && (
          <div
            ref={dropdownRef}
            className="xl:top-13 absolute left-0 right-0 top-11 flex h-24 flex-col rounded-sm border-2 border-indigo-200 bg-white text-[16px] font-light shadow-sm md:top-11 lg:top-12"
          >
            <div className="flex items-center justify-between px-2 py-2 text-[16px] text-indigo-950">
              <div className="font-normal">Adult</div>
              <div className="flex items-center gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => handleAdult("add")}
                  className="rounded-sm bg-indigo-50 px-1 py-0.5 text-indigo-700 hover:bg-indigo-100 active:bg-indigo-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => handleAdult("remove")}
                  disabled={adult === 0}
                  className={`rounded-sm px-1 py-0.5 ${
                    adult === 0
                      ? "cursor-not-allowed bg-gray-100 text-gray-700"
                      : "bg-red-50 text-red-700 hover:bg-red-100 active:bg-red-200"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 py-2 text-[16px] text-indigo-950">
              <div className="font-normal">Minor</div>
              <div className="flex items-center gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => handleChildren("add")}
                  className="rounded-sm bg-indigo-50 px-1 py-0.5 text-indigo-700 hover:bg-indigo-100 active:bg-indigo-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  disabled={children === 0}
                  onClick={() => handleChildren("remove")}
                  className={`rounded-sm px-1 py-0.5 ${
                    children === 0
                      ? "cursor-not-allowed bg-gray-100 text-gray-700"
                      : "bg-red-50 text-red-700 hover:bg-red-100 active:bg-red-200"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
