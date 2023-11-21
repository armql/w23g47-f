import React, { useState } from "react";
import useToggle from "../../../../hooks/useToggle";
import airportData from "../../../../data/AirportData";

export default function FromWhere() {
  const [searchTerm, setSearchTerm] = useState("");
  const [term, setTerm] = useState(false);
  const [filteredAirports, setFilteredAirports] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState(null);
  const { auto, close, effect } = useToggle(false);

  const handleInput = (airport) => {
    setSelectedAirport(airport);
    setSearchTerm(airport.airport);
    setFilteredAirports([]);
    setDropdown(false);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = airportData.filter((airport) => {
      const searchWords = term.split(" ");

      return searchWords.some(
        (word) =>
          airport.city.toLowerCase().includes(word) ||
          airport.airport.toLowerCase().includes(word) ||
          airport.code.toLowerCase().includes(word),
      );
    });

    setFilteredAirports(filtered);
    setDropdown(!!term);
    setTerm(!!filtered.length);
    setSelectedAirport(null);
  };

  const handleBlur = (e) => {
    const isClickInsideDropdown = e.relatedTarget?.closest(".dropdown");

    close(false);
    if (!isClickInsideDropdown) {
      close(false);
      setDropdown(false);
    }
  };

  return (
    <div
      className={`relative w-full rounded-tl-md border-r-2  
                px-1.5 py-1.5 transition duration-100 md:rounded-tl-md md:px-1.5 md:py-1.5 
                xl:rounded-l-md xl:px-2 xl:py-1.5 ${
                  effect
                    ? "z-10 cursor-alias border-indigo-200 bg-indigo-200 text-indigo-950 ring ring-indigo-400 dark:border-indigo-700 dark:bg-indigo-700 dark:ring-white"
                    : "cursor-pointer border-indigo-200 bg-white dark:border-indigo-700 dark:bg-indigo-200"
                }`}
    >
      <div className="flex w-full flex-row items-center justify-start">
        <div className="flex w-full flex-row items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="h-7 w-7 lg:h-8 lg:w-8"
            style={{ fill: "currentColor" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.29285 15.8155C4.02797 15.919 3.91945 16.2356 4.06513 16.4799L5.81319 19.4108C6.06359 19.8306 6.58081 20.0079 7.0361 19.8299L23.9381 13.223C24.7279 12.9143 25.1179 12.0237 24.8092 11.234C24.4883 10.413 23.5436 10.0302 22.7417 10.3961L17.7432 12.6773L10.773 6.27125C10.4838 6.00546 10.0685 5.9276 9.70266 6.0706C9.08964 6.31023 8.85636 7.05604 9.22358 7.60227L13.6983 14.2584L6.85554 17.3571L4.72413 15.8669C4.59802 15.7787 4.43618 15.7594 4.29285 15.8155ZM25.6776 22.9521H5.14764V24.5313H25.6776V22.9521Z"
              className={` ${
                effect
                  ? "text-indigo-950 dark:text-white"
                  : "text-gray-500 dark:text-indigo-950"
              }`}
            />
          </svg>
        </div>
        <input
          onFocus={auto}
          onBlur={handleBlur}
          onChange={handleSearch}
          type="search"
          name="fromWhere"
          id="fromWhere"
          placeholder="From where?"
          value={selectedAirport ? selectedAirport.airport : searchTerm}
          className={`border-2 border-transparent bg-transparent text-sm capitalize ring-2 ring-transparent transition duration-300 md:text-sm xl:text-sm ${
            effect
              ? " placeholder:text-indigo-950 dark:text-white dark:placeholder:text-white"
              : "text-indigo-950 dark:text-indigo-950 dark:placeholder:text-indigo-950"
          }`}
        />
      </div>
      {dropdown && (
        <div
          onBlur={() => setDropdown(false)}
          tabIndex={0}
          className="dropdown absolute left-0 right-0 top-11 z-20 flex h-40 translate-y-0 flex-col overflow-y-auto overscroll-y-auto rounded-sm border-2 border-indigo-200 bg-indigo-100 font-light shadow-sm md:top-11 lg:top-9 lg:translate-y-3 xl:top-9"
        >
          {term ? (
            filteredAirports.map((airport) => (
              <div
                key={airport.code}
                onClick={() => handleInput(airport)}
                className="group flex cursor-pointer flex-row items-center justify-between gap-2 px-4 py-2 text-indigo-700 transition hover:bg-white hover:text-indigo-900 md:py-3 xl:py-4"
              >
                <div className="text-xs md:text-[13px] lg:text-[14px] xl:text-[16px]">
                  {airport.airport}
                </div>
                <div className="flex flex-col items-center justify-center gap-2 text-xs">
                  <div className="rounded-lg bg-white p-1 transition duration-300 group-hover:bg-indigo-50">
                    {airport.code}
                  </div>
                  <div className="rounded-lg bg-sky-500 p-1 text-white">
                    {airport.cityCode}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="m-auto flex items-center justify-center font-normal text-indigo-500">
              <div>No airports were found</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
