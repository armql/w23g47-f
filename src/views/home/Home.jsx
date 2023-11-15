import React from "react";
import Book from "../forms/Book/Book";

export default function Home() {
  return (
    <div className="relative h-full w-full bg-transparent">
      <div className="flex h-screen w-full flex-col items-center justify-center gap-12 ">
        <div className="text-center text-4xl font-bold text-indigo-700 dark:text-white">
          Header Goes here
        </div>
        <div>
          <Book />
        </div>
      </div>
    </div>
  );
}
