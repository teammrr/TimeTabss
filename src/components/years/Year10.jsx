import React from 'react';
import { Link } from 'react-router-dom';

 
function Year10() {
    let room = [
        {name: 'Room A',id: 'y10-a'},
        {name: 'Room B',id: 'y10-b'},
        {name: 'Room C',id: 'y10-c'},
        {name: 'Room D',id: 'y10-d'},
        {name: 'Room E',id: 'y10-e'},
        {name: 'Room F',id: 'y10-f'},
    ]
    
    return(
        <>
        <div>
            <div class="flex flex-col gap-4 items-center mt-16">
			{/* <div class="flex justify-center w-full rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-110 text-lg font-bold mb-5 text-[#2e346b] ">Year 10</div> */}
                <div className='grid grid-cols-2 gap-4'>
                {room.map(room =>(
                    <div>
                    <Link to={room.id} class="text-[#3765bf] font-bold text-justify">
                        <div class="flex justify-center w-full rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-110 ">
                            <div key={room.name} class=" max-w-sm rounded-lg items-stretch bg-[#D0D7DC] backdrop-blur-lg m-0.5 ">
                                <div class="px-6 py-4 text-justify ">
                                    {room.name}
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                ))}
        </div>
	</div>
        </div>
        </>
    )

}

export default Year10