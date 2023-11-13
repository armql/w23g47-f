import React, { Fragment } from "react";
import FromWhere from "./BookInputs/FromWhere";
import PerPerson from "./BookInputs/PerPerson";
import WhereTo from "./BookInputs/WhereTo";
import DepartReturn from "./BookInputs/DepartReturn";

export default function Book() {
  return (
    <Fragment>
      <div className="flex flex-row items-center justify-center mt-20">
        <div className="flex flex-row items-center justify-center mx-auto border-2 border-indigo-200 rounded-l-lg shadow-sm">
          <FromWhere />
          <WhereTo />
          <DepartReturn />
          <PerPerson />
        </div>
        <button
          type="button"
          className="active:bg-indigo-400 active:border-indigo-400 hover:bg-indigo-600 font-light hover:text-white hover:border-indigo-600 transition duration-100 border-indigo-200 border-2 w-full h-full py-2 px-4 text-indigo-700 rounded-r-lg shadow-sm"
        >
          Search
        </button>
      </div>
    </Fragment>
  );
}
