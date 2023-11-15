import React from "react";
import Book from "../forms/Book/Book";

export default function Home() {
  return (
    <div className="relative h-full w-full bg-transparent">
      <div className="flex h-screen w-full flex-col items-center justify-center gap-12 ">
        <div className="w-[500px] bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text px-2 text-center text-4xl font-bold text-transparent dark:from-violet-200 dark:to-violet-400 sm:px-0 md:h-36 md:w-[600px] md:text-5xl lg:w-[800px] xl:h-52 xl:text-6xl">
          Because getting there should be as fun as being there.
        </div>
        <div>
          <Book />
        </div>
      </div>
    </div>
  );
}
