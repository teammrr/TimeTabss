import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

function HomePage() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="px-8 text-center ">
          <h1 className="mb-2 text-4xl lg:text-5xl font-bold text-[#032654]">
            Welcome to{" "}
            {/* <span class="bg-blue-300 to-transparent bg-repeat bg-size bg-position"> */}
            TimeTabs
            {/* </span> */}
          </h1>
          <h3 className="mb-4 text-xl lg:text-2xl font-bold text-[#47555e]">
            View your schedule at a glance :D
          </h3>
          {/* <img src="/1222.png" alt="TimeTabs" className="w-96" /> */}

          <Link to="/years" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#032654] rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#032654] group-hover:-rotate-180 ease"></span>
              <span className="relative">Click here</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#032654] rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
