import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FormatTime(time) {
    return time.slice(0, 5);
  }

function YearSchedule(){
    console.log("Loading...")
    const [sched, setSched] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { yearId } = useParams(); 

    async function getSched(id){
        try {
            const url = 'https://corsproxy.io/?' + encodeURIComponent(`https://school-management-api.xeersoft.co.th/api/timetable/class-year/${id}`);
            const response = await axios(url)
            const responseJson = await response.data
            setSched(responseJson);
            setIsLoading(false);
        } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
        getSched(yearId);
    },[yearId])

    const scheduleTitle = sched && sched.length > 0 ? (
        <div className='mb-4'>
        <h1 className="m text-4xl font-bold text-[#032654]">{sched[0].lv_title}</h1>
        </div>
      ) : (
        <p className="m text-4xl font-bold text-[#032654]">No schedule found :(</p>
      );

    const scheduleElements = sched && sched.length > 0 ? sched.map(sched => { 
        return (
            <div className="flex items-center justify-center" key={sched.tt_header_date}>
                <div className="w-72 rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-110">
                    <div className="max-w-sm flex flex-col rounded-lg items-stretch bg-[#D0D7DC] backdrop-blur-lg m-0.5 h-full">
                        <div className="px-4 py-4 text-justify">
                            <div className="font-bold text-[#032654] text-xl mb-2">{sched.tt_header_date}</div>
                            <div className="font-bold text-[#021B3B] text-lg mb-2">{FormatTime(sched.tt_time_zone)} - {sched.tt_time_end}</div>
                            <p className="text-[#39637f] text-justify">{sched.tt_title}</p>
                        </div>
                        <div className="px-4 pb-2 text-justify">
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#032654] mr-2 mb-2">{sched.room || "Not assigned"}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#032654] mr-2 mb-2">{sched.fl_code || "Not assigned"}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }) : <p className='m text-xl font-bold text-[#032654] '>Please go back</p>;

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
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
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
                <div className="gap-5 grid grid-cols-1 lg:grid-cols-4 lg:gap-10 mx-auto">{scheduleElements}</div>
              </>
            )}
          </div>
        </>
      );
}

export default YearSchedule