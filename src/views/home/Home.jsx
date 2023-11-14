import React from "react";
import Book from "../forms/Book/Book";

export default function Home() {
  return (
    <div className="relative w-screen h-screen bg-indigo-50">
      <div>Header Goes here</div>
      <div className="flex flex-col items-center justify-center h-full">
        <Book />
      </div>
    </div>
  );
}
