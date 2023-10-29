import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function FormatTime(time) {
  return time.slice(0, 5);
}

function YearSchedule() {
  let newDate = new Date();
  let curDate = newDate.toISOString().slice(0, 10);
  const [sched, setSched] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState(curDate);
  const { yearId } = useParams();

  async function getSched(id, date) {
    try {
      const url =
        "https://corsproxy.io/?" +
        encodeURIComponent(
          `https://school-management-api.xeersoft.co.th/api/timetable/date/${date}`
        );
      const response = await axios(url);
      const responseJson = await response.data.filter(
        (item) => item.lv_tt_code === `${id}`
      );
      setSched(responseJson);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getSched(yearId, date);
  }, [yearId, date]);

  function handlePrevDay() {
    const newDate = new Date(date);
    newDate.setDate(new Date(date).getDate() - 1);
    setDate(newDate.toISOString().slice(0, 10));
  }

  function handleNextDay() {
    const newDate = new Date(date);
    newDate.setDate(new Date(date).getDate() + 1);
    setDate(newDate.toISOString().slice(0, 10));
  }

  const scheduleTitle =
    sched && sched.length > 0 ? (
      <div className="mb-4">
        <h1 className="m text-4xl font-bold text-[#032654]">
          {sched[0].lv_title}
        </h1>
        <h1 className="m text-sm font-bold text-[#032654]">
          Date: {sched[0].tt_date}
        </h1>
      </div>
    ) : (
      <div className="mb-4">
        <h1 className="m text-4xl font-bold text-[#032654]">;-;</h1>
        <h1 className="m text-sm font-bold text-[#032654]">Date: {date}</h1>
      </div>
    );

  const scheduleElements = useMemo(() => {
    if (!sched || !Array.isArray(sched) || sched.length === 0) {
      return (
        <p className="flex items-center justify-center mt-60 ml-20 mr-20  text-xl font-bold text-[#032654] ">
          Try looking for another date maybe?
        </p>
      );
    }

    return sched.map((sched) => {
      const timeStart = `${sched.tt_time_zone}`;
      const duration = `${sched.tt_duration_time}`;
      const startTime = new Date(`2000-01-01T${timeStart}Z`);
      const durationTime = new Date(`2000-01-01T${duration}Z`);
      const endTime = new Date(startTime.getTime() + durationTime.getTime());
      const timeEnd = endTime.toISOString().slice(11, 16);

      const date = new Date(sched.tt_date);
      const formattedDate = date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
      const key = `${sched.tt_date}-${sched.tt_title}-${sched.tt_time_zone}-${sched.tt_duration_time}-${sched.room}-${sched.fl_code}`;
      return (
        <div className="flex items-center justify-center" kemy={key}>
          <div className="w-72 rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-110">
            <div className="max-w-sm flex flex-col rounded-lg items-stretch bg-[#D0D7DC] backdrop-blur-lg m-0.5 h-full">
              <div className="px-4 py-4 text-justify">
                <div className="font-bold text-[#032654] text-xl mb-2">
                  {formattedDate}
                </div>
                <div className="font-bold text-[#021B3B] text-lg mb-2">
                  {FormatTime(sched.tt_time_zone)} - {timeEnd}
                </div>
                <p className="text-[#39637f] text-justify">{sched.tt_title}</p>
              </div>
              <div className="px-4 pb-2 text-justify">
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#032654] mr-2 mb-2">
                  {sched.room || "Not assigned"}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#032654] mr-2 mb-2">
                  {sched.fl_code || "Not assigned"}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }, [sched]);

  return (
    <>
      <div className="py-10 text-center">
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <svg
              className="animate-spin -ml-1 mr-3 h-10 w-10 text-[#032654]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 00-8-8V0c6.627 0 12 5.373 12 12h-4zm-4 4a4 4 0 110-8 4 4 0 010 8z"
              ></path>
            </svg>
            <span>Loading...</span>
          </div>
        ) : (
          <>
            {scheduleTitle}
            <div className="flex gap-6 items-center justify-center mb-4 mt-4">
              <button
                onClick={handlePrevDay}
                className="text-[#032654] bg-[#8daac2] hover:bg-[#7c9eb9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-[#7c9eb9k:focus:ring-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                  />
                </svg>
                Yesterday
                <span className="sr-only">Prev Day</span>
              </button>
              <button
                onClick={handleNextDay}
                className="text-[#032654] bg-[#8daac2] hover:bg-[#7c9eb9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-[#7c9eb9k:focus:ring-blue-800"
              >
                Tomorrow
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <span className="sr-only">Next Day</span>
              </button>
            </div>
            <div className="gap-4 grid grid-cols-1 lg:grid-cols-1 lg:gap-2 mx-auto">
              {scheduleElements}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default YearSchedule;
