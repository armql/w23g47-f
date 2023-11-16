import React, { Fragment, useState } from "react";

export default function Callout({ type }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleStatus = () => {
    setIsOpen(false);
  };

  const calloutType = (type) => {
    switch (type) {
      case "requirement":
        return (
          <div className="flex flex-row items-center gap-2 rounded-lg border border-orange-400 bg-orange-50 px-4 py-3.5 text-xs font-light text-orange-500 shadow-sm">
            <div>
              A visa issued from the Consulate General of the People's Republic
              of China is required to board this flight.
            </div>
            <div>
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
          </div>
        );
      case "rejection":
        return (
          <div className="flex flex-row items-center gap-2 rounded-lg border border-red-400 bg-red-50 px-4 py-3.5 text-xs font-light text-red-500 shadow-sm">
            <div>
              Your credit card payment was rejected by your bank. Please try
              again and contact your bank for assistance.
            </div>
            <div>
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
          </div>
        );
      case "success":
        return (
          <div className="flex flex-row items-center gap-2 rounded-lg border border-teal-400 bg-teal-50 px-4 py-3.5 text-xs font-light text-teal-500 shadow-sm">
            <div>
              Your flight has been booked successfully! Have a great trip!
            </div>
            <div>
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
          </div>
        );
      case "promotion":
        return (
          <div className="flex flex-row items-center gap-2 rounded-lg border border-teal-400 bg-teal-50 px-4 py-3.5 text-xs font-light text-teal-500 shadow-sm">
            <div>
              This hotel is offering a special promotion to Tripma users.
            </div>
            <div>
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
          </div>
        );
      default:
        break;
    }
  };

  return (
    <Fragment>
      {isOpen && (
        <div className="absolute right-0 top-0 z-20 select-none p-4">
          {calloutType(type)}
        </div>
      )}
    </Fragment>
  );
}
