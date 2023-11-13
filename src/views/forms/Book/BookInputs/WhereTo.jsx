import React from "react";

export default function WhereTo() {
  return (
    <div className="py-1.5 px-2 text-sm bg-white border-r-2 border-indigo-200">
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
            d="M6.84158 9.47874C6.5711 9.39085 6.28644 9.56688 6.24422 9.84813L5.73758 13.2229C5.66501 13.7064 5.95257 14.1714 6.41748 14.3224L23.6768 19.9303C24.4832 20.1924 25.3494 19.751 25.6115 18.9445C25.8839 18.1062 25.3961 17.2112 24.5439 16.9858L19.2323 15.5804L17.9042 6.20718C17.8491 5.81828 17.5773 5.49473 17.2037 5.37335C16.5777 5.16995 15.9245 5.59876 15.8621 6.254L15.102 14.2383L7.84577 12.2958L7.14245 9.79199C7.10084 9.64384 6.98794 9.52629 6.84158 9.47874ZM25.6776 22.952H5.14764V24.5313H25.6776V22.952Z"
            fill="#6E7491"
          />
        </svg>
        <input
          type="search"
          name="fromWhere"
          id="fromWhere"
          placeholder="Where to?"
          className="border-2 ring-2 ring-transparent border-transparent"
        />
      </div>
    </div>
  );
}
