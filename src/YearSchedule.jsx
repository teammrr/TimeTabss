import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FormatTime(time) {
    return time.slice(0, 5);
  }

function YearSchedule(){
    console.log("Hello")
    const [sched, setSched] = useState({});
    const { yearId } = useParams(); 

    async function getSched(id){
        const response = await axios(`https://school-management-api.xeersoft.co.th/api/timetable/class-year/${id}`)
        const responseJson = await response.data
        setSched(responseJson);
        console.log(responseJson)   
    }   

    useEffect(() => {
        getSched(yearId);
    },[yearId])

const scheduleElements = sched && sched.length > 0 && sched.map(sched => { 
    return (
        <div className="flex items-center justify-center">
            <div className=" gap-5 grid grid-cols-1 lg:grid-cols-4 lg:gap-10 mx-auto">
                <div className="w-full rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-110 ">
                    <div className=" max-w-sm flex flex-col rounded-lg items-stretch bg-[#D0D7DC] backdrop-blur-lg m-0.5 ">
                        <div className="px-6 py-4 text-justify ">
                            <div key={sched.tt_header_date} className="font-bold text-[#032654] text-xl mb-2">{sched.tt_header_date}</div>
                            <div key={sched.tt_time_zone} className="font-bold text-[#021B3B] text-lg mb-2">{FormatTime(sched.tt_time_zone)} - {sched.tt_time_end}</div>
                            <p key={sched.tt_title} className="text-[#39637f] text-justify">{sched.tt_title}</p>
                        </div>
                        <div className="px-6 pb-2 text-justify">
                            <span key={sched.room} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#032654] mr-2 mb-2">{sched.room || "Not assigned"}</span>
                            <span key={sched.fl_code} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#032654] mr-2 mb-2">{sched.fl_code || "Not assigned"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
    // const scheduleElements = sched.map(sched => { 
    //     return(
    //         <div className="flex items-center justify-center">
    //         {sched.length > 0 && (
    //             <div className=" gap-5 grid grid-cols-1 lg:grid-cols-4 lg:gap-10 mx-auto">
    //             {sched.map(sched =>(
    //                 <div className="w-full rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-110 ">
    //                 <div className=" max-w-sm flex flex-col rounded-lg items-stretch bg-[#D0D7DC] backdrop-blur-lg m-0.5 ">
    //                     <div className="px-6 py-4 text-justify ">
    //                         <div key={sched.tt_header_date} className="font-bold text-[#032654] text-xl mb-2">{sched.tt_header_date}</div>
    //                         <div key={sched.tt_time_zone} className="font-bold text-[#021B3B] text-lg mb-2">{FormatTime(sched.tt_time_zone)}:00 - {sched.tt_time_end}</div>
    //                         <p key={sched.tt_title} className="text-[#39637f] text-justify">{sched.tt_title}</p>
    //                     </div>
    //                     <div className="px-6 pb-2 text-justify">
    //                         <span key={sched.room} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#032654] mr-2 mb-2">{sched.room || "Not assigned"}</span>
    //                         <span key={sched.fl_code} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#032654] mr-2 mb-2">{sched.fl_code || "Not assigned"}</span>
    //                     </div>
    //                 </div>
    //             </div>
    //         ))}
    //                 </div>
    //                 )}
    //                 </div>
    //     )
    // })

    return(
        <>
        <div className="py-10 text-center">
            <h1 className="m text-4xl font-bold text-[#032654]">{sched.lv_title}</h1>
            {/* <h3 className="mb-8 text-xl font-bold text-[#47555e]">Select Your Year</h3> */}
            <div className="grid grid-cols-2 gap-4 ml-6 mr-6 mb-2">
            {scheduleElements}
            </div>
        </div>
        <div className=" mb-12 text-[#032654] text-sm font-semibold text-center">
        <span>
            Made with ♡ by Teamm | <a href="https://instagram.com/teammteam"> :D</a>
        </span>
        </div>
        </>
    )
}

export default YearSchedule