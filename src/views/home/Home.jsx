import React, { Fragment, useRef } from "react";
import Book from "../forms/Book/Book";
import Spline from "@splinetool/react-spline";
import bg from "../../assets/images/hero-bg.png";
import TravelDeals from "../features/summaries/TravelDeals";

export default function Home() {
  return (
    <Fragment>
      <div className="relative h-full w-full bg-transparent">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-indigo-50 dark:bg-indigo-900">
          {/* <Spline scene="https://prod.spline.design/VUbPkLw74PeIfeYg/scene.splinecode" /> */}
          <img
            src={bg}
            alt=""
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover md:object-contain"
          />
        </div>
        <div className="flex h-screen w-full flex-col items-center justify-center gap-12 ">
          <div className="z-10 w-[500px] bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text px-2 text-center text-4xl font-bold text-transparent dark:from-violet-200 dark:to-violet-400 sm:px-0 md:h-36 md:w-[600px] md:text-5xl lg:w-[800px] xl:h-52 xl:text-6xl">
            Because getting there should be as fun as being there.
          </div>
          <div>
            <Book />
          </div>
        </div>
      </div>
      <TravelDeals />
    </Fragment>
  );
}
