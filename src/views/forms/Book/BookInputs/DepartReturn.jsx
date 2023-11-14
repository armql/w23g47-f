import React, { Fragment, useState } from "react";

export default function DepartReturn() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [activeMonth, setActiveMonth] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setDropdown(!dropdown);
  };

  const activeM = () => {
    setActiveMonth(!activeMonth);
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setDropdown(false);
  };

  // TODO: Connect with database instead of dynamic data
  // useEffect(() => {
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <Fragment>
      <div
        className={`relative w-full border-r-2 border-indigo-200 px-1.5 py-1.5 transition duration-100 md:px-1.5 md:py-1.5 xl:px-2 xl:py-1.5 ${
          isOpen
            ? "z-10 cursor-alias bg-indigo-200 text-white ring ring-indigo-400"
            : "cursor-pointer bg-white"
        }`}
      >
        <div className="flex w-full flex-row items-center justify-start">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 lg:h-8 lg:w-8"
          >
            <path
              d="M10 5.77778C10 5.34822 10.5858 5 11 5C11.4142 5 12 5.34822 12 5.77778V7.33333H10V5.77778Z"
              fill="#6E7491"
            />
            <path
              d="M20 5.77778C20 5.34822 20.5858 5 21 5C21.4142 5 22 5.34822 22 5.77778V7.33333H20V5.77778Z"
              fill="#6E7491"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 7.33333H7.75C7.33579 7.33333 7 7.68156 7 8.11111V25.2222C7 25.6518 7.33579 26 7.75 26H24.25C24.6642 26 25 25.6518 25 25.2222V8.11111C25 7.68156 24.6642 7.33333 24.25 7.33333H22H20H12H10ZM23.5 12H8.5V24.4444H23.5V12Z"
              fill="#6E7491"
            />
            <path
              d="M10 15.5C10 14.6716 10.6716 14 11.5 14C12.3284 14 13 14.6716 13 15.5C13 16.3284 12.3284 17 11.5 17C10.6716 17 10 16.3284 10 15.5Z"
              fill="#6E7491"
            />
            <path
              d="M22 18.5C22 17.6716 21.3284 17 20.5 17C19.6716 17 19 17.6716 19 18.5C19 19.3284 19.6716 20 20.5 20C21.3284 20 22 19.3284 22 18.5Z"
              fill="#6E7491"
            />
          </svg>
          <button
            onClick={toggleDropdown}
            type="button"
            className={`w-24 whitespace-nowrap border-2 border-transparent bg-transparent text-sm capitalize text-gray-400 ring-2 ring-transparent transition duration-300 md:text-sm xl:text-sm ${
              isOpen ? "placeholder:text-indigo-950" : ""
            }`}
          >
            Depart Return
          </button>
        </div>
      </div>
      {dropdown && (
        <div className="absolute bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center rounded-sm border-2 border-indigo-200 bg-white text-[16px] font-light shadow-sm">
            <div className="flex flex-row items-center justify-center gap-4 border-b-2 p-2 text-xs text-gray-400">
              <div className="flex items-center justify-center gap-2">
                <input
                  type="radio"
                  name="roundTrip"
                  id="roundTrip"
                  className="border-black"
                />
                Round Trip
              </div>
              <div className="flex items-center justify-center gap-2">
                <input type="radio" name="roundTrip" id="roundTrip" /> One Way
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="flex flex-row items-center gap-2 rounded-sm border-2 border-indigo-600 px-2 py-1">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                  >
                    <path
                      d="M10 5.77778C10 5.34822 10.5858 5 11 5C11.4142 5 12 5.34822 12 5.77778V7.33333H10V5.77778Z"
                      fill="#6E7491"
                    />
                    <path
                      d="M20 5.77778C20 5.34822 20.5858 5 21 5C21.4142 5 22 5.34822 22 5.77778V7.33333H20V5.77778Z"
                      fill="#6E7491"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 7.33333H7.75C7.33579 7.33333 7 7.68156 7 8.11111V25.2222C7 25.6518 7.33579 26 7.75 26H24.25C24.6642 26 25 25.6518 25 25.2222V8.11111C25 7.68156 24.6642 7.33333 24.25 7.33333H22H20H12H10ZM23.5 12H8.5V24.4444H23.5V12Z"
                      fill="#6E7491"
                    />
                    <path
                      d="M10 15.5C10 14.6716 10.6716 14 11.5 14C12.3284 14 13 14.6716 13 15.5C13 16.3284 12.3284 17 11.5 17C10.6716 17 10 16.3284 10 15.5Z"
                      fill="#6E7491"
                    />
                    <path
                      d="M22 18.5C22 17.6716 21.3284 17 20.5 17C19.6716 17 19 17.6716 19 18.5C19 19.3284 19.6716 20 20.5 20C21.3284 20 22 19.3284 22 18.5Z"
                      fill="#6E7491"
                    />
                  </svg>
                  <div className="pr-5">Depart - Arrive</div>
                </div>
                <button
                  type="button"
                  onClick={closeDropdown}
                  className="rounded-sm border-2 border-indigo-500 bg-indigo-500 px-4 py-2 text-white"
                >
                  Done
                </button>
              </div>
            </div>
            <div className="flex w-full flex-row items-center justify-between gap-6 px-4 py-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <div className="flex w-full justify-around gap-2">
                <div
                  onClick={activeM}
                  className={`flex flex-col gap-2 border-2 px-4 py-4 transition duration-300 ${
                    activeMonth ? "border-indigo-400" : "border-transparent"
                  }`}
                >
                  <div className={`px-2 text-xs font-normal text-indigo-800`}>
                    January 2021
                  </div>
                  <div className="pt-42 grid grid-cols-7 items-center justify-center gap-4 px-4 pt-1 text-center text-[10px] font-normal">
                    <div>S</div>
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                  </div>
                  <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 text-center text-[10px] font-normal">
                    <div className="text-gray-400">27</div>
                    <div className="text-gray-400">28</div>
                    <div className="text-gray-400">29</div>
                    <div className="text-gray-400">30</div>
                    <div className="text-gray-400">31</div>
                    <div>1</div>
                    <div>2</div>
                  </div>
                  <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 text-center text-[10px] font-normal">
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                  </div>
                  <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 text-center text-[10px] font-normal">
                    <div>10</div>
                    <div>11</div>
                    <div>12</div>
                    <div>13</div>
                    <div>14</div>
                    <div>15</div>
                    <div>16</div>
                  </div>
                  <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 text-center text-[10px] font-normal">
                    <div>17</div>
                    <div>18</div>
                    <div>19</div>
                    <div>20</div>
                    <div>21</div>
                    <div>22</div>
                    <div>23</div>
                  </div>
                  <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 text-center text-[10px] font-normal">
                    <div>24</div>
                    <div>25</div>
                    <div>26</div>
                    <div>27</div>
                    <div>28</div>
                    <div>29</div>
                    <div>30</div>
                  </div>
                  <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 pb-2 text-center text-[10px] font-normal">
                    <div>31</div>
                    <div className="text-gray-400">1</div>
                    <div className="text-gray-400">2</div>
                    <div className="text-gray-400">3</div>
                    <div className="text-gray-400">4</div>
                    <div className="text-gray-400">5</div>
                    <div className="text-gray-400">6</div>
                  </div>
                </div>
                <div
                  onClick={() => {}}
                  className={`flex flex-col gap-2 border-2 px-4 py-4 transition duration-300 ${
                    activeMonth === false
                      ? "border-indigo-400"
                      : "border-transparent"
                  }`}
                >
                  <div className="px-2 text-xs font-normal text-black">
                    February 2021
                  </div>
                  <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 pt-1 text-center text-[10px] font-normal">
                    <div>S</div>
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                  </div>
                  <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 text-center text-[10px] font-normal">
                    <div className="text-gray-400">31</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                  </div>
                  <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 text-center text-[10px] font-normal">
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>
                    <div>12</div>
                    <div>13</div>
                  </div>
                  <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 text-center text-[10px] font-normal">
                    <div>14</div>
                    <div>15</div>
                    <div>16</div>
                    <div>17</div>
                    <div>18</div>
                    <div>19</div>
                    <div>20</div>
                  </div>
                  <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 text-center text-[10px] font-normal">
                    <div>21</div>
                    <div>22</div>
                    <div>23</div>
                    <div>24</div>
                    <div>25</div>
                    <div>26</div>
                    <div>27</div>
                  </div>
                  <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 text-center text-[10px] font-normal">
                    <div className="text-gray-400">28</div>
                    <div className="text-gray-400">1</div>
                    <div className="text-gray-400">2</div>
                    <div className="text-gray-400">3</div>
                    <div className="text-gray-400">4</div>
                    <div className="text-gray-400">5</div>
                    <div className="text-gray-400">6</div>
                  </div>
                  <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 pb-2 text-center text-[10px] font-normal">
                    <div className="text-gray-400">7</div>
                    <div className="text-gray-400">8</div>
                    <div className="text-gray-400">9</div>
                    <div className="text-gray-400">10</div>
                    <div className="text-gray-400">11</div>
                    <div className="text-gray-400">12</div>
                    <div className="text-gray-400">13</div>
                  </div>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
