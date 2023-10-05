import React from 'react';
import Footer from '../footer';
 
function Year13() {
    let room = [
        {name: 'Com A',id: 'y13-coma'},
        {name: 'Com B',id: 'y13-comb'},
        {name: 'Med A',id: 'y13-meda'},
        {name: 'Med B',id: 'y13-medb'},
        {name: 'NBS A',id: 'y13-nbsa'},
        {name: 'NBS B',id: 'y13-nbsb'},
        {name: 'Hum A',id: 'y13-huma'},
    ]
    return(
        <>
        <div className='flex items-center justify-center mt-16'>
            <div class="flex flex-col gap-4 items-center ">
			{/* <div class="flex justify-center w-full rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-110 text-lg font-bold mb-5 text-[#2e346b] ">Year 13</div> */}
        <div className='grid grid-cols-2 gap-4'>
        {room.map(room =>(
            <div>
            <a href="/years/" class="text-[#3765bf] font-bold text-justify">
                <div class="flex justify-center w-full rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-110 ">
                    <div key={room.name} class=" max-w-sm rounded-lg items-stretch bg-[#D0D7DC] backdrop-blur-lg m-0.5 ">
                        <div class="px-6 py-4 text-justify ">
                            {room.name}
                        </div>
                    </div>
                </div>
            </a>
            </div>
        ))}
        </div>
	</div>
        </div>
        </>
    )

}

export default Year13