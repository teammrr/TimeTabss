import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./components/footer";

function YearHome() {
  // var proxy = 'https://cors-anywhere.herokuapp.com/'
  const [years, setYears] = useState([]);

  async function getYearArray() {
    const url =
      "https://corsproxy.io/?" +
      encodeURIComponent(
        "https://school-management-api.xeersoft.co.th/api/timetable/allyesr"
      );
    const response = await axios(url);
    const responseJson = await response.data;
    setYears(responseJson);
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
        <div className="grid grid-cols-2 gap-4 ml-6 mr-6">{yearElements}</div>
      </div>
      <Footer />
    </>
  );
}
export default YearHome;
