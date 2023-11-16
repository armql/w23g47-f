import React from "react";

export default function DealsCard({ img, title, description, price }) {
  return (
    <div className="h-full w-96 rounded-lg shadow-sm">
      <img src={img} alt="" className="h-96 w-96 rounded-t-lg object-cover" />
      <div className="flex flex-col rounded-b-sm border-b-2 border-indigo-500 bg-white px-4 py-4 text-start text-sm dark:border-black dark:bg-gray-50 md:text-[15px]">
        <div className="flex flex-row justify-between">
          <div className="text-sm tracking-wide text-indigo-950 dark:text-indigo-600 md:text-[15px]">
            {title}
          </div>
          <div className="font-bold text-indigo-950 dark:text-indigo-700">
            {price}EUR
          </div>
        </div>
        <p className="text-[12px] font-light tracking-wide text-gray-400 md:text-[13px]">
          {description}
        </p>
      </div>
    </div>
  );
}
