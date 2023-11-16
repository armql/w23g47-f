import React, { useState } from "react";

export default function OutlineDropdown({ name, isOpen, onClick }) {
  return (
    <div className="">
      <button
        type="button"
        onClick={onClick}
        className="flex cursor-pointer flex-row items-center justify-between gap-2 rounded-sm border border-zinc-300 p-2 shadow-sm hover:bg-zinc-50"
      >
        <div className="px-2 text-sm font-light text-black">{name}</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`h-2 w-2 text-gray-600 transition duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        </div>
      </button>
    </div>
  );
}
