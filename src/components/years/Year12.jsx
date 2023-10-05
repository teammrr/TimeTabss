import React from 'react';
 
function Year12() {
    let room = [
        {name: 'Com A',id: 'y12-coma'},
        {name: 'Com B',id: 'y12-comb'},
        {name: 'Med A',id: 'y12-meda'},
        {name: 'Med B',id: 'y12-medb'},
        {name: 'NBS A',id: 'y12-nbsa'},
        {name: 'NBS B',id: 'y12-nbsb'},
        {name: 'Hum A',id: 'y12-huma'},
        {name: 'Sci A',id: 'y12-scia'},
    ]
    return(
        <>
        <div>
            <div class="flex flex-col gap-4 items-center mt-16 ">
			{/* <div class="flex justify-center w-full rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-110 text-lg font-bold mb-5 text-[#2e346b] ">Year 12</div> */}
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

export default Year12