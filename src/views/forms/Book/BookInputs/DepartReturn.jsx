import React, { Fragment, useEffect, useState } from "react";
import Draggable from "react-draggable";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
} from "date-fns";

export default function DepartArrive() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [activeMonth, setActiveMonth] = useState("first");
  const [currentMonth1, setCurrentMonth1] = useState(new Date());
  const [currentMonth2, setCurrentMonth2] = useState(
    addMonths(currentMonth1, 1),
  );

  const [departureDate, setDepartureDate] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);

  const handleDayClick = (day) => {
    const currentDate = new Date(
      currentMonth1.getFullYear(),
      currentMonth1.getMonth(),
      parseInt(format(day, "d")),
    );

    const isDayInCurrentMonth =
      currentDate.getMonth() === currentMonth1.getMonth();

    if (isDayInCurrentMonth) {
      if (!departureDate) {
        setDepartureDate(currentDate);
      } else if (!arrivalDate) {
        setArrivalDate(currentDate);
      }
    }
  };

  const handleMonthChange = (direction) => {
    if (direction === "next") {
      setCurrentMonth1((prevMonth) => addMonths(prevMonth, 1));
      setCurrentMonth2((prevMonth) => addMonths(prevMonth, 1));
    } else {
      setCurrentMonth1((prevMonth) => subMonths(prevMonth, 1));
      setCurrentMonth2((prevMonth) => subMonths(prevMonth, 1));
    }
  };

  useEffect(() => {
    setCurrentMonth2(addMonths(currentMonth1, 1));
  }, [currentMonth1]);

  const renderCalendar = (currentMonth, isActive) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

    const firstDayOfMonth = new Date(monthStart);
    const lastDayOfMonth = new Date(monthEnd);
    const firstDayIndex = firstDayOfMonth.getDay();
    const lastDayIndex = lastDayOfMonth.getDay();
    const firstDaysToAdd = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
    const lastDaysToAdd = lastDayIndex === 0 ? 0 : 7 - lastDayIndex;

    const daysFromPreviousMonth = [];
    for (let i = firstDaysToAdd; i > 0; i--) {
      const prevMonthDay = new Date(firstDayOfMonth);
      prevMonthDay.setDate(prevMonthDay.getDate() - i);
      daysFromPreviousMonth.push({
        day: format(prevMonthDay, "d"),
        isCurrentMonth: false,
      });
    }

    const daysFromNextMonth = [];
    for (let i = 1; i <= lastDaysToAdd; i++) {
      const nextMonthDay = new Date(lastDayOfMonth);
      nextMonthDay.setDate(nextMonthDay.getDate() + i);
      daysFromNextMonth.push({
        day: format(nextMonthDay, "d"),
        isCurrentMonth: false,
      });
    }

    const daysInCurrentMonth = days.map((day) => ({
      day: format(day, "d"),
      isCurrentMonth: true,
    }));

    const allDays = [
      ...daysFromPreviousMonth.slice(0, 1),
      ...daysFromPreviousMonth.slice(1).map((day) => ({
        ...day,
        isCurrentMonth: false,
      })),
      ...daysInCurrentMonth,
      ...daysFromNextMonth,
    ];

    if (isActive) {
      return (
        <div className="h-[260px]">
          <div className={`px-2 text-[13px] font-normal text-indigo-800`}>
            {format(currentMonth, "MMMM yyyy")}
          </div>
          <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 pt-3 text-center text-[11px] font-normal">
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>
          <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 pt-2 text-center text-[10px] font-normal">
            {allDays.map((day, index) => {
              const currentDate = new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth(),
                parseInt(day.day),
              );

              const isDayInCurrentMonth = day.isCurrentMonth;

              let buttonClass = `flex items-center p-[3px] justify-center text-center ${
                isDayInCurrentMonth
                  ? "text-black"
                  : "text-gray-400 dark:text-indigo-300"
              }`;

              if (!isDayInCurrentMonth) {
                buttonClass += " cursor-not-allowed";
              } else {
                if (isSameDay(currentDate, departureDate)) {
                  buttonClass += " bg-indigo-200 dark:bg-indigo-400";
                } else if (
                  arrivalDate &&
                  currentDate > departureDate &&
                  currentDate < arrivalDate
                ) {
                  buttonClass += " bg-indigo-50 dark:bg-indigo-200";
                } else if (isSameDay(currentDate, arrivalDate)) {
                  buttonClass += " bg-indigo-200 dark:bg-indigo-400";
                }
              }

              return (
                <button
                  key={index}
                  type="button"
                  className={buttonClass}
                  onClick={() => {
                    if (isDayInCurrentMonth) {
                      handleDayClick(currentDate);
                    }
                  }}
                >
                  {day.day}
                </button>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="h-[260px]">
          <div className={`px-2 text-[13px] font-normal text-indigo-800`}>
            {format(currentMonth, "MMMM yyyy")}
          </div>
          <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 pt-3 text-center text-[11px] font-normal">
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>
          <div className="grid grid-cols-7 items-center justify-center gap-4 px-4 pt-2 text-center text-[10px] font-normal">
            {allDays.map((day, index) => {
              const currentDate = new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth(),
                parseInt(day.day),
              );

              const isDayInCurrentMonth = day.isCurrentMonth;

              let buttonClass = `flex items-center p-[3px] justify-center text-center ${
                isDayInCurrentMonth
                  ? "text-black"
                  : "text-gray-400 dark:text-indigo-300"
              }`;

              if (!isDayInCurrentMonth) {
                buttonClass += " cursor-not-allowed";
              } else {
                if (isSameDay(currentDate, departureDate)) {
                  buttonClass += " bg-indigo-200 dark:bg-indigo-400";
                } else if (
                  arrivalDate &&
                  currentDate > departureDate &&
                  currentDate < arrivalDate
                ) {
                  buttonClass += " bg-indigo-50 dark:bg-indigo-200";
                } else if (isSameDay(currentDate, arrivalDate)) {
                  buttonClass += " bg-indigo-200 dark:bg-indigo-400";
                }
              }

              return (
                <button key={index} type="button" className={buttonClass}>
                  {day.day}
                </button>
              );
            })}
          </div>
        </div>
      );
    }
  };

  const handleMonths = (direction) => {
    if (direction === "first") {
      setActiveMonth(true);
    } else if (direction === "second") {
      setActiveMonth(false);
    } else {
      return (
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-white p-4">
          Internal request error please try again later.
        </div>
      );
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setDropdown(!dropdown);
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
            ? "z-10 cursor-alias border-indigo-200 bg-indigo-200 text-indigo-950 ring ring-indigo-400 dark:border-indigo-700 dark:bg-indigo-700 dark:ring-white"
            : "cursor-pointer bg-white dark:border-indigo-700 dark:bg-indigo-200"
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
            style={{ fill: "currentColor" }}
          >
            <path
              d="M10 5.77778C10 5.34822 10.5858 5 11 5C11.4142 5 12 5.34822 12 5.77778V7.33333H10V5.77778Z"
              className={` ${
                isOpen
                  ? "text-indigo-950 dark:text-white"
                  : "text-gray-500 dark:text-indigo-950"
              }`}
            />
            <path
              d="M20 5.77778C20 5.34822 20.5858 5 21 5C21.4142 5 22 5.34822 22 5.77778V7.33333H20V5.77778Z"
              className={` ${
                isOpen
                  ? "text-indigo-950 dark:text-white"
                  : "text-gray-500 dark:text-indigo-950"
              }`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 7.33333H7.75C7.33579 7.33333 7 7.68156 7 8.11111V25.2222C7 25.6518 7.33579 26 7.75 26H24.25C24.6642 26 25 25.6518 25 25.2222V8.11111C25 7.68156 24.6642 7.33333 24.25 7.33333H22H20H12H10ZM23.5 12H8.5V24.4444H23.5V12Z"
              className={` ${
                isOpen
                  ? "text-indigo-950 dark:text-white"
                  : "text-gray-500 dark:text-indigo-950"
              }`}
            />
            <path
              d="M10 15.5C10 14.6716 10.6716 14 11.5 14C12.3284 14 13 14.6716 13 15.5C13 16.3284 12.3284 17 11.5 17C10.6716 17 10 16.3284 10 15.5Z"
              className={` ${
                isOpen
                  ? "text-indigo-950 dark:text-white"
                  : "text-gray-500 dark:text-indigo-950"
              }`}
            />
            <path
              d="M22 18.5C22 17.6716 21.3284 17 20.5 17C19.6716 17 19 17.6716 19 18.5C19 19.3284 19.6716 20 20.5 20C21.3284 20 22 19.3284 22 18.5Z"
              className={` ${
                isOpen
                  ? "text-indigo-950 dark:text-white"
                  : "text-gray-500 dark:text-indigo-950"
              }`}
            />
          </svg>
          <button
            onClick={toggleDropdown}
            type="button"
            className={`
    capitalizering-2 w-28 whitespace-nowrap border-2 border-transparent bg-transparent 
    text-start text-sm ring-transparent transition duration-300 
    md:text-sm xl:text-sm 
    ${
      isOpen
        ? "placeholder:text-indigo-950 dark:text-white dark:placeholder:text-white"
        : "text-black dark:text-indigo-950 dark:placeholder:text-indigo-950"
    } `}
          >
            {departureDate && arrivalDate ? (
              <>
                {format(departureDate, "do")} - {format(arrivalDate, "do")}
              </>
            ) : (
              <div className="text-gray-400 dark:text-indigo-950">
                Depart - Return
              </div>
            )}
          </button>
        </div>
      </div>
      {dropdown && (
        <Draggable>
          <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center active:cursor-grabbing">
            <div className="flex flex-col items-center justify-center rounded-sm border-2 border-indigo-200 bg-white text-[16px] font-light shadow-sm dark:bg-indigo-50">
              <div className="flex flex-row items-center justify-center gap-4 border-b-2 p-2 text-xs text-gray-400">
                <div className="flex items-center justify-center gap-2 text-gray-400 dark:text-indigo-500">
                  <input
                    type="radio"
                    name="roundTrip"
                    id="roundTrip"
                    className="border-black"
                  />
                  Round Trip
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-400 dark:text-indigo-500">
                  <input type="radio" name="roundTrip" id="roundTrip" /> One Way
                </div>
                <div className="flex flex-row items-center justify-center gap-2">
                  <div className="flex flex-row items-center gap-2 rounded-sm border-2 border-indigo-600 bg-indigo-50 px-2 py-1 dark:bg-indigo-100">
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
                        fillRule="evenodd"
                        clipRule="evenodd"
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
                    <div
                      className={`w-28 pr-5 ${
                        departureDate
                          ? "text-indigo-950 dark:text-indigo-950"
                          : "text-gray-400 dark:text-indigo-800"
                      }`}
                    >
                      {departureDate && arrivalDate ? (
                        <>
                          {format(departureDate, "do")} -{" "}
                          {format(arrivalDate, "do")}
                        </>
                      ) : (
                        "Depart - Return"
                      )}
                    </div>
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
                <button type="button" onClick={() => handleMonthChange("prev")}>
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
                </button>
                <div className="flex w-full justify-around gap-2">
                  <div
                    onClick={() => handleMonths("first")}
                    className={`flex cursor-pointer flex-col gap-2 border-2 px-4 py-4 transition duration-300 active:cursor-pointer ${
                      activeMonth ? " border-indigo-400" : "border-transparent"
                    }`}
                  >
                    {renderCalendar(
                      currentMonth1,
                      activeMonth === true ? true : false,
                    )}
                  </div>
                  <div
                    onClick={() => handleMonths("second")}
                    className={`flex cursor-pointer flex-col gap-2 border-2 px-4 py-4 transition duration-300 active:cursor-pointer ${
                      activeMonth === false
                        ? " border-indigo-400"
                        : "border-transparent"
                    }`}
                  >
                    {renderCalendar(
                      currentMonth2,
                      activeMonth === false ? true : false,
                    )}
                  </div>
                </div>
                <button type="button" onClick={() => handleMonthChange("next")}>
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
                </button>
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </Fragment>
  );
}
