import React, { Fragment } from "react";
import FromWhere from "./BookInputs/FromWhere";
import PerPerson from "./BookInputs/PerPerson";
import WhereTo from "./BookInputs/WhereTo";
import DepartReturn from "./BookInputs/DepartReturn";

export default function Book() {
  // TODO: Connect with database instead of dynamic data
  // useEffect(() => {
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <Fragment>
      <div className="flex h-full w-full flex-row items-center justify-center">
        <div className="z-10 mx-auto flex h-full w-full flex-col items-center justify-center rounded-l-lg border-2 border-indigo-200 shadow-sm dark:border-indigo-700 sm:flex-row">
          <div className="flex h-full w-full flex-col xl:flex-row">
            <FromWhere />
            <WhereTo />
          </div>
          <div className="flex h-full w-full flex-col xl:flex-row">
            <DepartReturn />
            <PerPerson />
          </div>
        </div>
        <button
          type="button"
          className="h-full w-full -translate-x-2 scale-95 rounded-r-lg border-2 border-indigo-200 bg-white px-4 py-2 font-normal text-indigo-700 ring-transparent transition duration-300 hover:scale-100 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white active:translate-x-0 active:scale-100 active:border-indigo-400 active:bg-indigo-400 dark:border-transparent dark:bg-indigo-700 dark:text-white"
        >
          Search
        </button>
      </div>
    </Fragment>
  );
}
