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

export default function FromWhere() {
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
          airport.code.toLowerCase().includes(word)
      );
    });

    setFilteredAirports(filtered);
    setDropdown(!!term);
    setTerm(!!filtered.length);
    setSelectedAirport(null); // Reset selected airport when searching
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
      className={`relative py-1.5 px-2 text-sm border-r-2 rounded-l-md border-indigo-200 transition duration-100 ${
        isOpen
          ? "bg-indigo-200 cursor-alias text-white ring ring-indigo-400 z-10"
          : "bg-white cursor-pointer"
      }`}
    >
      <div className="flex flex-row justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.29285 15.8155C4.02797 15.919 3.91945 16.2356 4.06513 16.4799L5.81319 19.4108C6.06359 19.8306 6.58081 20.0079 7.0361 19.8299L23.9381 13.223C24.7279 12.9143 25.1179 12.0237 24.8092 11.234C24.4883 10.413 23.5436 10.0302 22.7417 10.3961L17.7432 12.6773L10.773 6.27125C10.4838 6.00546 10.0685 5.9276 9.70266 6.0706C9.08964 6.31023 8.85636 7.05604 9.22358 7.60227L13.6983 14.2584L6.85554 17.3571L4.72413 15.8669C4.59802 15.7787 4.43618 15.7594 4.29285 15.8155ZM25.6776 22.9521H5.14764V24.5313H25.6776V22.9521Z"
            fill="#6E7491"
          />
        </svg>
        <input
          onFocus={toggleDropdown}
          onBlur={closeDropdown}
          onChange={handleSearch}
          type="search"
          name="fromWhere"
          id="fromWhere"
          placeholder="From where?"
          value={selectedAirport ? selectedAirport.airport : searchTerm}
          className={`border-2 capitalize ring-2 ring-transparent transition duration-300 border-transparent bg-transparent text-indigo-950 ${
            isOpen ? "placeholder:text-indigo-950" : ""
          }`}
        />
        {dropdown && (
          <div className="absolute border-2 border-indigo-200 rounded-sm shadow-sm h-40 overscroll-y-auto overflow-y-auto top-12 bg-indigo-100 left-0 right-0 font-light text-[16px] flex flex-col">
            {term ? (
              filteredAirports.map((airport) => (
                <div
                  key={airport.code}
                  onClick={() => handleInput(airport)}
                  className="hover:text-indigo-900 hover:bg-white transition cursor-pointer group text-indigo-700 py-4 px-4 flex flex-row justify-between items-center"
                >
                  {airport.airport}
                  <div className="flex flex-col text-xs gap-2">
                    <div className="bg-white p-1 rounded-lg group-hover:bg-indigo-50 transition duration-300">
                      {airport.code}
                    </div>
                    <div className="bg-sky-500 text-white p-1 rounded-lg">
                      {airport.cityCode}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="m-auto text-indigo-500 font-normal flex justify-center items-center">
                <div>No airports were found</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
