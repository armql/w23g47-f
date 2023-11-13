import React from "react";

export default function DepartReturn() {
  return (
    <div className="py-1.5 px-2 text-sm bg-white border-r-2 border-indigo-200">
      <div className="flex flex-row justify-center items-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5.77778C10 5.34822 10.5858 5 11 5C11.4142 5 12 5.34822 12 5.77778V7.33333H10V5.77778Z"
            fill="#6E7491"
          />
          <path
            d="M20 5.77778C20 5.34822 20.5858 5 21 5C21.4142 5 22 5.34822 22 5.77778V7.33333H20V5.77778Z"
            fill="#6E7491"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 7.33333H7.75C7.33579 7.33333 7 7.68156 7 8.11111V25.2222C7 25.6518 7.33579 26 7.75 26H24.25C24.6642 26 25 25.6518 25 25.2222V8.11111C25 7.68156 24.6642 7.33333 24.25 7.33333H22H20H12H10ZM23.5 12H8.5V24.4444H23.5V12Z"
            fill="#6E7491"
          />
          <path
            d="M10 15.5C10 14.6716 10.6716 14 11.5 14C12.3284 14 13 14.6716 13 15.5C13 16.3284 12.3284 17 11.5 17C10.6716 17 10 16.3284 10 15.5Z"
            fill="#6E7491"
          />
          <path
            d="M22 18.5C22 17.6716 21.3284 17 20.5 17C19.6716 17 19 17.6716 19 18.5C19 19.3284 19.6716 20 20.5 20C21.3284 20 22 19.3284 22 18.5Z"
            fill="#6E7491"
          />
        </svg>

        <input
          type="text"
          name="departReturn"
          id="departReturn"
          placeholder="Depart - Return"
          className="border-2 ring-2 ring-transparent border-transparent"
        />
      </div>
    </div>
  );
}
