import React, { Fragment, useState } from "react";

export default function Banner({ type }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleStatus = () => {
    setIsOpen(false);
  };

  const bannerType = (type) => {
    switch (type) {
      case "promotion":
        return (
          <div className="relative flex flex-row items-center justify-between bg-indigo-500 p-3.5 text-center text-sm font-light text-white md:items-start md:justify-around md:text-base">
            <div className="w-[420px] text-start sm:w-full md:text-center">
              Join us today and save up to 20% on your flight using code TRAVEL
              at checkout. Promotion valid for new users only.
            </div>
            <button
              type="button"
              onClick={toggleStatus}
              className="flex cursor-pointer items-center justify-center rounded-full hover:scale-105 active:scale-110 active:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 md:h-6 md:w-6"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
        );
      case "outage":
        return (
          <div className="relative flex flex-row items-center justify-between bg-red-500 p-3.5 text-center text-sm font-light text-white md:items-start md:justify-around md:text-base">
            <div className="w-[420px] text-start sm:w-full md:text-center">
              We are currently experiencing an outage. We appreciate your
              patience. Stay up to date at status.company.com.
            </div>
            <div className="flex cursor-pointer items-center justify-center rounded-full hover:scale-105 active:scale-110 active:opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 md:h-6 md:w-6"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
          </div>
        );
      case "maintenance":
        return (
          <div className="relative flex flex-row items-center justify-between bg-amber-500 p-3.5 text-center text-sm font-light text-white dark:text-black md:items-start md:justify-around md:text-base">
            <div className="w-[420px] text-start sm:w-full md:text-center">
              We will be undergoing routine maintenance in 30 minutes. We expect
              this to take no longer than 15 minutes. Stay up to date at
              status.company.com.
            </div>
            <div className="flex cursor-pointer items-center justify-center rounded-full hover:scale-105 active:scale-110 active:opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 md:h-6 md:w-6"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
          </div>
        );
      default:
        break;
    }
  };

  return (
    <Fragment>
      {isOpen && <div className="parent">{bannerType(type)}</div>}
    </Fragment>
  );
}
