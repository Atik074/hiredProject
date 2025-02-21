import React from "react";
import { Link } from "react-router-dom";

const JobDetailsSideCard = () => {
  return (
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
      <div className="grid gap-6 grid-cols-1">
        {/* First Card */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            src="https://shorturl.at/cUQVZ"
            alt="Foundation"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 sm:p-6">
            <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold text-white mb-4">
              Your logic building is your foundation
            </h3>
            <Link
              to=""
              className="bg-red-600 px-6 sm:px-10 py-2 rounded text-lg sm:text-xl text-white font-medium hover:bg-red-700 mb-4"
            >
              Learn
            </Link>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            src="https://shorturl.at/ma4hP"
            alt="Priority"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 sm:p-6">
            <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold text-white mb-4">
              To catch fundamental is our priority
            </h3>
            <Link
              to=""
              className="bg-red-600 px-6 sm:px-10 py-2 rounded text-lg sm:text-xl text-white font-medium hover:bg-red-700 mb-4"
            >
              Achieve
            </Link>
          </div>
        </div>

        {/* Third Card */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            src="https://shorturl.at/D26Jt"
            alt="Problem Solving"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 sm:p-6">
            <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold text-white mb-4">
              Problem solving skill gives opportunity
            </h3>
            <Link
              to=""
              className="bg-red-600 px-6 sm:px-10 py-2 rounded text-lg sm:text-xl text-white font-medium hover:bg-red-700 mb-4"
            >
              Test
            </Link>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            src="https://shorturl.at/aIlIJ"
            alt="Communication Skill"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 sm:p-6">
            <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold text-white mb-4">
              Communication skill opens a new window
            </h3>
            <Link
              to=""
              className="bg-red-600 px-6 sm:px-10 py-2 rounded text-lg sm:text-xl text-white font-medium hover:bg-red-700 mb-4"
            >
              Learn
            </Link>
          </div>
        </div>

        {/* Fifth Card */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            src="https://shorturl.at/uFa8Y"
            alt="Leadership Mind"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 sm:p-6">
            <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold text-white mb-4">
              Your leadership mind helps to grow
            </h3>
            <Link
              to=""
              className="bg-red-600 px-6 sm:px-10 py-2 rounded text-lg sm:text-xl text-white font-medium hover:bg-red-700 mb-4"
            >
              Gain
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsSideCard;
