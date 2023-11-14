import React from "react";
import Book from "../forms/Book/Book";

export default function Home() {
  return (
    <div className="relative h-screen w-screen bg-indigo-50">
      <div>Header Goes here</div>
      <div className="flex h-full flex-col items-center justify-center">
        <Book />
      </div>
    </div>
  );
}
