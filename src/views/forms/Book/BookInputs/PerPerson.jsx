import React from "react";

export default function PerPerson() {
  return (
    <div className="py-1.5 px-2 text-sm bg-white border-indigo-200">
      <div className="flex flex-row justify-center items-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="11" r="4" fill="#6E7491" />
          <path
            d="M10 24C8.89543 24 7.97435 23.0907 8.24685 22.0202C9.12788 18.5595 12.265 16 16 16C19.735 16 22.8721 18.5595 23.7531 22.0202C24.0257 23.0907 23.1046 24 22 24H10Z"
            fill="#6E7491"
          />
        </svg>
        <input
          type="search"
          name="fromWhere"
          id="fromWhere"
          placeholder="How many?"
          className="border-2 ring-2 ring-transparent border-transparent"
        />
      </div>
    </div>
  );
}
