import React from "react";
import { Link } from "react-router-dom";

const JobDetailsSideCard = () => {
  return (
    <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[30%] mx-auto">
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        {/* First Card */}
        <div className="relative">
          <img
            className="w-full h-[220px] sm:h-[260px] object-cover"
            src="https://shorturl.at/cUQVZ"
            alt="Foundation"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h3 className="text-[22px] sm:text-[27px] mb-4 text-white">
              Your logic building is your foundation
            </h3>
            <Link
              to=""
              className="bg-red-600 px-8 sm:px-14 py-2 rounded text-xl text-white font-medium mx-4 sm:mx-28 hover:text-white mb-6 sm:mb-8 lg:mb-10 "
            >
              Learn
            </Link>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative">
          <img
            className="w-full h-[220px] sm:h-[260px] object-cover"
            src="https://shorturl.at/ma4hP"
            alt="Priority"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h3 className="text-[22px] sm:text-[27px] mb-4 text-white">
              To catch fundamental is our priority
            </h3>
            <Link
              to=""
              className="bg-red-600 px-8 sm:px-14 py-2 rounded text-xl text-white font-medium mx-4 sm:mx-28 hover:text-white mb-6 sm:mb-8 lg:mb-10"
            >
              Achieve
            </Link>
          </div>
        </div>

        {/* Third Card */}
        <div className="relative">
          <img
            className="w-full h-[220px] sm:h-[260px] object-cover"
            src="https://shorturl.at/D26Jt"
            alt="Problem Solving"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h3 className="text-[22px] sm:text-[27px] mb-4 text-white">
              Problem solving skill gives opportunity
            </h3>
            <Link
              to=""
              className="bg-red-600 px-8 sm:px-14 py-2 rounded text-xl text-white font-medium mx-4 sm:mx-28 hover:text-white mb-6 sm:mb-8 lg:mb-10"
            >
              Test
            </Link>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="relative">
          <img
            className="w-full h-[220px] sm:h-[260px] object-cover"
            src="https://shorturl.at/aIlIJ"
            alt="Communication Skill"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h3 className="text-[22px] sm:text-[27px] mb-4 text-white">
              Communication skill opens a new window
            </h3>
            <Link
              to=""
              className="bg-red-600 px-8 sm:px-14 py-2 rounded text-xl text-white font-medium mx-4 sm:mx-28 hover:text-white mb-6 sm:mb-8 lg:mb-10"
            >
              Learn
            </Link>
          </div>
        </div>

        {/* Fifth Card */}
        <div className="relative">
          <img
            className="w-full h-[220px] sm:h-[260px] object-cover"
            src="https://shorturl.at/uFa8Y"
            alt="Leadership Mind"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h3 className="text-[22px] sm:text-[27px] mb-4 text-white">
              Your leadership mind helps to grow
            </h3>
            <Link
              to=""
              className="bg-red-600 px-8 sm:px-14 py-2 rounded text-xl text-white font-medium mx-4 sm:mx-28 hover:text-white mb-6 sm:mb-8 lg:mb-10"
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
