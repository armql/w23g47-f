import React from "react";
import firstDeal from "../../../assets/images/shanghai.jpeg";
import secondDeal from "../../../assets/images/sydney.jpeg";
import thirdDeal from "../../../assets/images/kyoto.png";
import finalDeal from "../../../assets/images/kenya.jpeg";
import DealsCard from "../../../components/common/cards/DealsCard";

const deals = [
  {
    id: 1,
    img: firstDeal,
    title: "The Bund, Shanghai",
    price: 569,
    description: "China’s most international city",
  },
  {
    id: 2,
    img: secondDeal,
    title: "Sydney Opera House, Sydney",
    price: 981,
    description: "Take a stroll along the famous harbory",
  },
  {
    id: 3,
    img: thirdDeal,
    title: "Kōdaiji Temple, Kyoto",
    price: 601,
    description: "Step back in time in the Gion district",
  },
];

export default function TravelDeals() {
  return (
    <div className="h-full w-full border-t-8 border-indigo-900 bg-indigo-50 px-6 dark:bg-indigo-800">
      <div className="flex flex-row justify-between py-4 text-black dark:text-white">
        <div>
          Fly with us and achieve these{" "}
          <span className="text-violet-500 dark:text-indigo-200">
            incredible deals!
          </span>
        </div>
        <div className="group flex cursor-pointer flex-row items-center justify-center gap-2 font-light text-gray-400 transition duration-300 hover:translate-x-2 hover:text-indigo-500 active:translate-x-3 active:text-indigo-700">
          <div>All</div>
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mb-9 mt-4 flex flex-col items-center justify-center gap-8">
        <div className="flex w-full flex-col items-center justify-around gap-4 text-center lg:flex-row">
          {deals.map((deal) => (
            <DealsCard
              key={deal.id}
              img={deal.img}
              title={deal.title}
              price={deal.price}
              description={deal.description}
            />
          ))}
        </div>
        <div className="rounded-lg shadow-sm md:w-[600px] lg:w-[1010px] xl:w-[1200px] 2xl:w-[1500px]">
          <img
            src={finalDeal}
            alt=""
            className="h-96 w-full rounded-t-lg object-cover"
          />
          <div className="z-10 flex w-full flex-col rounded-b-sm border-b-2 border-indigo-500 bg-white px-4 py-4 text-start text-sm dark:border-black dark:bg-gray-50 md:text-[15px]">
            <div className="flex flex-row justify-between">
              <div className="text-sm tracking-wide text-indigo-950 dark:text-indigo-600 md:text-[15px]">
                Tsavo East National Park, Kenya
              </div>
              <div className="font-bold text-indigo-950 dark:text-indigo-700">
                1399EUR
              </div>
            </div>
            <p className="text-[12px] font-light tracking-wide text-gray-400 md:text-[13px]">
              Named after the Tsavo River, and opened in April 1984, Tsavo East
              National Park is one of the oldest parks in Kenya. It is located
              in the semi-arid Taru Desert.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
