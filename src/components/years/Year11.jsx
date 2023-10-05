import React from 'react';
import Nav from '../Nav';


 
function Year11() {
    let room = [
        {name: 'Biz A',id: 'y11-biza'},
        {name: 'Biz B',id: 'y11-bizb'},
        {name: 'Biz C',id: 'y11-bizc'},
        {name: 'Com A',id: 'y11-coma'},
        {name: 'Com B',id: 'y11-comb'},
        {name: 'Med A',id: 'y11-meda'},
        {name: 'Med B',id: 'y11-medb'},
        {name: 'New A',id: 'y11-newa'},
    ]

    return(
        <>
        <Nav />
        <div>
            <div class="flex flex-col gap-4 items-center mt-48 ">
			<div class="flex justify-center w-full rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-110 text-lg font-bold mb-5 text-[#2e346b] ">Year 11</div>
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

export default Year11