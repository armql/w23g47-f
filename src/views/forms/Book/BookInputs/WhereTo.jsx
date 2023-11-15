import React, { useEffect, useState } from "react";

const airportData = [
  {
    city: "New York",
    airport: "Teterboro Airport",
    code: "TEB",
    cityCode: "NYC",
    location: {
      latitude: 40.8505,
      longitude: -74.0603,
    },
    terminals: ["Main Terminal", "Jet Aviation Terminal", "Meridian Terminal"],
    airlines: ["NetJets", "Jet Aviation", "Meridian", "Wheels Up"],
  },
  {
    city: "New York",
    airport: "John F. Kennedy International Airport",
    code: "JFK",
    cityCode: "NYC",
    location: {
      latitude: 40.6413,
      longitude: -73.7781,
    },
    terminals: [
      "Terminal 1",
      "Terminal 2",
      "Terminal 4",
      "Terminal 5",
      "Terminal 7",
      "Terminal 8",
    ],
    airlines: [
      "American Airlines",
      "Delta Air Lines",
      "JetBlue Airways",
      "British Airways",
      "Lufthansa",
    ],
  },
  {
    city: "Los Angeles",
    airport: "Los Angeles International Airport",
    code: "LAX",
    cityCode: "LAX",
    location: {
      latitude: 33.9416,
      longitude: -118.4085,
    },
    terminals: [
      "Tom Bradley International Terminal",
      "Terminal 1",
      "Terminal 2",
      "Terminal 3",
      "Terminal 4",
      "Terminal 5",
      "Terminal 6",
      "Terminal 7",
      "Terminal 8",
    ],
    airlines: [
      "United Airlines",
      "American Airlines",
      "Delta Air Lines",
      "Southwest Airlines",
      "Alaska Airlines",
    ],
  },
  {
    city: "London",
    airport: "Heathrow Airport",
    code: "LHR",
    cityCode: "LON",
    location: {
      latitude: 51.47,
      longitude: -0.4543,
    },
    terminals: ["Terminal 2", "Terminal 3", "Terminal 4", "Terminal 5"],
    airlines: [
      "British Airways",
      "Virgin Atlantic",
      "American Airlines",
      "Qatar Airways",
    ],
  },
  {
    city: "Paris",
    airport: "Charles de Gaulle Airport",
    code: "CDG",
    cityCode: "PAR",
    location: {
      latitude: 49.0097,
      longitude: 2.5479,
    },
    terminals: [
      "Terminal 1",
      "Terminal 2A",
      "Terminal 2B",
      "Terminal 2C",
      "Terminal 2D",
      "Terminal 2E",
      "Terminal 2F",
    ],
    airlines: ["Air France", "Delta Air Lines", "Emirates", "Lufthansa"],
  },
  {
    city: "Tokyo",
    airport: "Haneda Airport",
    code: "HND",
    cityCode: "TYO",
    location: {
      latitude: 35.5494,
      longitude: 139.7798,
    },
    terminals: ["Terminal 1", "Terminal 2", "International Terminal"],
    airlines: [
      "Japan Airlines",
      "All Nippon Airways",
      "Delta Air Lines",
      "Singapore Airlines",
    ],
  },
  {
    city: "Beijing",
    airport: "Beijing Capital International Airport",
    code: "PEK",
    cityCode: "BJS",
    location: {
      latitude: 40.0799,
      longitude: 116.6031,
    },
    terminals: ["Terminal 1", "Terminal 2", "Terminal 3"],
    airlines: [
      "Air China",
      "China Eastern Airlines",
      "China Southern Airlines",
      "Hainan Airlines",
    ],
  },
  {
    city: "Dubai",
    airport: "Dubai International Airport",
    code: "DXB",
    cityCode: "DXB",
    location: {
      latitude: 25.2532,
      longitude: 55.3657,
    },
    terminals: ["Terminal 1", "Terminal 2", "Terminal 3"],
    airlines: ["Emirates", "Flydubai", "Qatar Airways", "British Airways"],
  },
];

export default function WhereTo() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [term, setTerm] = useState(false);
  const [filteredAirports, setFilteredAirports] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

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
    setSelectedAirport(null); // Reset selected airport when searching
  };

  const handleBlur = (e) => {
    const isClickInsideDropdown = e.relatedTarget?.closest(".dropdown");
    setIsOpen(false);
    if (!isClickInsideDropdown) {
      setIsOpen(false);
      setDropdown(false);
    }
  };

  // TODO: Connect with database instead of dynamic data
  // useEffect(() => {
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <div
      className={`duration-102 relative flex w-full border-r-2 border-indigo-200 px-1.5 py-1.5 transition sm:rounded-bl-lg md:rounded-bl-lg md:px-1.5 md:py-1.5 lg:rounded-bl-lg xl:rounded-none xl:px-2 xl:py-1.5 ${
        isOpen
          ? "z-10 cursor-alias bg-indigo-200 text-white ring ring-indigo-400"
          : "cursor-pointer bg-white"
      }`}
    >
      <div className="flex w-full flex-row items-center justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="h-7 w-7 lg:h-8 lg:w-8"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.84158 9.47874C6.5711 9.39085 6.28644 9.56688 6.24422 9.84813L5.73758 13.2229C5.66501 13.7064 5.95257 14.1714 6.41748 14.3224L23.6768 19.9303C24.4832 20.1924 25.3494 19.751 25.6115 18.9445C25.8839 18.1062 25.3961 17.2112 24.5439 16.9858L19.2323 15.5804L17.9042 6.20718C17.8491 5.81828 17.5773 5.49473 17.2037 5.37335C16.5777 5.16995 15.9245 5.59876 15.8621 6.254L15.102 14.2383L7.84577 12.2958L7.14245 9.79199C7.10084 9.64384 6.98794 9.52629 6.84158 9.47874ZM25.6776 22.952H5.14764V24.5313H25.6776V22.952Z"
            fill="#6E7491"
          />
        </svg>
        <input
          onFocus={toggleDropdown}
          onBlur={handleBlur}
          onChange={handleSearch}
          type="search"
          name="whereTo"
          id="whereTo"
          placeholder="Where to?"
          value={selectedAirport ? selectedAirport.airport : searchTerm}
          className={`w-full border-2 border-transparent bg-transparent text-sm capitalize text-indigo-950 ring-2 ring-transparent transition duration-300 md:w-full xl:w-72 xl:text-sm ${
            isOpen ? "placeholder:text-indigo-950" : ""
          }`}
        />
        {dropdown && (
          <div
            onBlur={() => setDropdown(false)}
            tabIndex={0}
            className="dropdown absolute left-0 right-0 top-9 z-20 flex h-40 flex-col overflow-y-auto overscroll-y-auto rounded-sm border-2 border-indigo-200 bg-indigo-100 text-[16px] font-light shadow-sm sm:top-12"
          >
            {term ? (
              filteredAirports.map((airport) => (
                <div
                  key={airport.code}
                  onClick={() => handleInput(airport)}
                  className="group flex cursor-pointer flex-row items-center justify-between px-4 py-4 text-indigo-700 transition hover:bg-white hover:text-indigo-900"
                >
                  <div className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]">
                    {airport.airport}
                  </div>
                  <div className="flex flex-col gap-2 text-xs">
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
                <div className="sm:text-[13px] md:text-[13px] lg:text-[14px] xl:text-[16px]">
                  No airports were found
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
