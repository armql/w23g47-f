import React from "react";
import Book from "../forms/Book/Book";

export default function Home() {
  return (
    <div className="relative w-screen h-screen bg-gray-50">
      <div>Its more than just a trip</div>
      <div className="flex flex-col items-center justify-center">
        <Book />
      </div>
    </div>
  );
}
