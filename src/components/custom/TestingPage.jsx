import React, { useState } from "react";
import OutlineDropdown from "../common/dropdowns/OutlineDropdown";

export default function TestingPage() {
  const [dropdowns, setDropdowns] = useState({
    maxPrice: false,
    shops: false,
    times: false,
    airlines: false,
    seatClass: false,
    more: false,
  });

  const toggleDropdown = (dropdownType) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [dropdownType]: !prevDropdowns[dropdownType],
    }));
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-row gap-2 px-4 py-4">
        <div className="relative">
          <OutlineDropdown
            name={"Max price"}
            onClick={() => toggleDropdown("maxPrice")}
            isOpen={dropdowns.maxPrice}
          />
          {dropdowns.maxPrice && (
            <div className="absolute left-0 right-0 top-10 border bg-white px-4 py-1">
              <div className="">
                <div className="text-xs font-light md:text-[13px]">Low</div>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <OutlineDropdown
            name={"Shops"}
            onClick={() => toggleDropdown("shops")}
            isOpen={dropdowns.shops}
          />
          {dropdowns.shops && (
            <div className="absolute left-0 right-0 top-10 border bg-white px-4 py-1">
              <div className="">
                <div className="text-xs font-light md:text-[13px]">Low</div>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <OutlineDropdown
            name={"Times"}
            onClick={() => toggleDropdown("times")}
            isOpen={dropdowns.times}
          />
          {dropdowns.times && (
            <div className="absolute left-0 right-0 top-10 border bg-white px-4 py-1">
              <div className="">
                <div className="text-xs font-light md:text-[13px]">Low</div>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <OutlineDropdown
            name={"Airlines"}
            onClick={() => toggleDropdown("airlines")}
            isOpen={dropdowns.airlines}
          />
          {dropdowns.airlines && (
            <div className="absolute left-0 right-0 top-10 border bg-white px-4 py-1">
              <div className="">
                <div className="text-xs font-light md:text-[13px]">Low</div>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <OutlineDropdown
            name={"Seat class"}
            onClick={() => toggleDropdown("seatClass")}
            isOpen={dropdowns.seatClass}
          />
          {dropdowns.seatClass && (
            <div className="absolute left-0 right-0 top-10 border bg-white px-4 py-1">
              <div className="">
                <div className="text-xs font-light md:text-[13px]">Low</div>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <OutlineDropdown
            name={"More"}
            onClick={() => toggleDropdown("more")}
            isOpen={dropdowns.more}
          />
          {dropdowns.seatClass && (
            <div className="absolute left-0 right-0 top-10 border bg-white px-4 py-1">
              <div className="">
                <div className="text-xs font-light md:text-[13px]">Low</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
