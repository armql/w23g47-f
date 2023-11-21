import { useEffect, useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
} from "date-fns";

function useDatepicker({ currentMonthValue }) {
  const [departureDate, setDepartureDate] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [isOneWay, setIsOneWay] = useState(false);
  const [activeMonth, setActiveMonth] = useState("first");
  const [currentMonth, setCurrentMonth] = useState(currentMonthValue);
  const [currentMonth1, setCurrentMonth1] = useState(new Date());
  const [currentMonth2, setCurrentMonth2] = useState(
    addMonths(currentMonth1, 1),
  );

  const handleRoundTrip = () => {
    setIsOneWay(false);

    if (arrivalDate) {
      setDepartureDate(arrivalDate);
      setArrivalDate(null);
    }
  };

  const handleOneWay = () => {
    setIsOneWay(true);

    if (departureDate) {
      setDepartureDate(departureDate);
      setArrivalDate(departureDate);
    }
  };

  const handleDayClick = (day) => {
    const currentDate = new Date(
      currentMonth1.getFullYear(),
      currentMonth1.getMonth(),
      parseInt(format(day, "d")),
    );

    const isDayInCurrentMonth =
      currentDate.getMonth() === currentMonth1.getMonth();
    if (!isOneWay) {
      if (isDayInCurrentMonth) {
        if (!departureDate) {
          setDepartureDate(currentDate);
        } else if (!arrivalDate) {
          if (departureDate && departureDate <= currentDate) {
            if (isOneWay) {
              setArrivalDate(currentDate);
            } else {
              if (currentDate > departureDate) {
                setArrivalDate(currentDate);
              }
            }
          }
        } else if (
          departureDate &&
          arrivalDate &&
          departureDate === arrivalDate
        ) {
          setDepartureDate(currentDate);
          setArrivalDate(null);
        }
      }
    } else if (isOneWay) {
      if (isDayInCurrentMonth) {
        if (!departureDate) {
          setDepartureDate(currentDate);
          setArrivalDate(currentDate);
        } else if (!arrivalDate) {
          if (departureDate && departureDate <= currentDate) {
            setArrivalDate(currentDate);
          }
        } else if (
          departureDate &&
          arrivalDate &&
          departureDate === arrivalDate
        ) {
          setDepartureDate(currentDate);
          setArrivalDate(currentDate);
        }
      }
    } else {
      return (
        <div className="absolute bottom-0 left-0 right-0 top-0 border-2 border-red-200 bg-white p-4">
          System error please try again later.
        </div>
      );
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

  const clearDates = () => {
    setDepartureDate(null);
    setArrivalDate(null);
  };

  const renderCalendar = (currentMonth, isActive) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    console.log("Current month:", currentMonth);

    const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
    console.log("Month start:", monthStart);
    console.log("Month end:", monthEnd);

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

  return {
    departureDate,
    arrivalDate,
    handleMonths,
    isOneWay,
    currentMonth,
    handleRoundTrip,
    handleOneWay,
    handleMonthChange,
    clearDates,
    renderCalendar,
    activeMonth,
  };
}

export default useDatepicker;
