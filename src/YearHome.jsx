import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./components/footer";

function YearHome() {
  // var proxy = 'https://cors-anywhere.herokuapp.com/'
  const [years, setYears] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url =
    "https://corsproxy.io/?" +
    encodeURIComponent(
      "https://school-management-api.xeersoft.co.th/api/timetable/allyesr"
    );

  async function getYearArray() {
    try {
      const response = await axios(url);
      const responseJson = await response.data;
      setYears(responseJson);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getYearArray();
  }, []);

  const yearElements = years
    .filter((year) => year.lv_tt_link !== null)
    .map((year) => {
      return (
        <div key={year.lv_tt_code}>
          <div className="">
            <Link
              to={`year/${year.lv_tt_code}`}
              className=" text-lg text-[#032654]  "
            >
              <div className="rounded-lg overflow-hidden transition duration-500 ease-in-out hover:scale-105  ">
                <div
                  key={year.lv_title}
                  className=" rounded-lg items-stretch bg-[#D0D7DC] backdrop-blur-lg m-0.5 hover:bg-[#d0d7dc92] transition duration-500 ease-in-out  "
                >
                  <div className="p-4 text-center ">{year.lv_title}</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      );
    });

  return (
    <>
      <div className="text-center">
        <h1 className="pt-10 text-4xl font-bold text-[#032654]">TimeTabs :P</h1>
        <h3 className="mb-8 text-xl font-bold text-[#47555e]">
          Select Your Year
        </h3>
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
          <div className="grid grid-cols-2 gap-4 ml-6 mr-6">{yearElements}</div>
        )}
      </div>
      <Footer />
    </>
  );
}
export default YearHome;
