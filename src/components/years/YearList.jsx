import React from 'react';
import Footer from '../footer';

function YearList(){
    return(
        <div className='flex items-center justify-center h-screen'>
        <div class="px-6 py-20 text-center ">
            <h1 class="mb-2 text-5xl font-bold text-[#032654]">Select Your Year</h1>
            <h3 class="mb-8 text-2xl font-bold text-[#47555e]">TimeTabs :P</h3>
            <div className=' sm:grid sm:grid-rows-1 sm:grid-flow-row sm:gap-8 lg:flex lg:flex-row items-center '>
            <a href="/year10"  class="relative inline-block text-lg group">
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#032654] rounded-lg ">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 "></span>
                <span class="relative">Year 10</span>
                </span>
                <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#032654] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>
            <a href="/year11"  class="relative inline-block text-lg group">
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#032654] rounded-lg ">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 "></span>
                <span class="relative">Year 11</span>
                </span>
                <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#032654] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>
            <a href="/year12"  class="relative inline-block text-lg group">
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#032654] rounded-lg ">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 "></span>
                <span class="relative">Year 12</span>
                </span>
                <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#032654] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>
            <a href="/year13"  class="relative inline-block text-lg group">
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#032654] rounded-lg ">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 "></span>
                <span class="relative">Year 13</span>
                </span>
                <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#032654] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default YearList 