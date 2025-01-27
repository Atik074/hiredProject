import React from "react";
import { Link } from "react-router-dom";

const JobDetailsSideCard = () => {
  return (
    <div className="w-[30%] relative">
      <img
        className="mb-8 w-full h-[260px]"
        src="https://shorturl.at/cUQVZ"
        alt=""
      />

      <div className="absolute top-16">
        <h3 className="text-[27px] mb-4  text-center text-white">
          Your logic building is your foundation
        </h3>
        <Link
          to=""
          className="bg-red-600 px-14 py-2 rounded text-xl text-white font-medium text-center mx-28 hover:text-white "
        >
          Learn
        </Link>
      </div>

      <img
        className="mb-8 w-full h-[260px] "
        src="https://shorturl.at/ma4hP"
        alt=""
      />

      <div className="absolute top-[350px]">
        <h3 className="text-[27px]  mb-4  text-center text-white">
          To catch fundamental is our priority
        </h3>
        <Link
          to=""
          className="bg-red-600 px-14 py-2 rounded text-xl text-white font-medium text-center mx-28 hover:text-white "
        >
          Achieve
        </Link>
      </div>

      <img
        className="mb-8 w-full h-[260px]"
        src="https://shorturl.at/D26Jt"
        alt=""
      />

      <div className="absolute top-[645px]">
        <h3 className="text-[27px] mb-4  text-center text-white">
          {" "}
          Problem solving skill gives oppurtunity
        </h3>
        <Link
          to=""
          className="bg-red-600 px-14 py-2 rounded text-xl text-white font-medium text-center mx-28 hover:text-white "
        >
          Test
        </Link>
      </div>
      <img
        className="mb-8 w-full h-[260px]"
        src="https://shorturl.at/aIlIJ"
        alt=""
      />

      <div className="absolute bottom-[440px]">
        <h3 className="text-[27px] mb-4 text-center text-white">
          Communication skill opens a new window
        </h3>
        <Link
          to=""
          className="bg-red-600 px-14 py-2 rounded text-xl text-white font-medium text-center mx-28 hover:text-white "
        >
          Learn
        </Link>
      </div>
      <img
        className="mb-8 w-full h-[260px]"
        src="https://shorturl.at/uFa8Y"
        alt=""
      />

      <div className="absolute bottom-[155px] ">
        <h3 className="text-[27px] mb-4 text-center  text-white">
          Your leadship mind helps to grow
        </h3>
        <Link
          to=""
          className="bg-red-600 px-14 py-2 rounded text-xl text-white font-medium text-center mx-28 hover:text-white "
        >
          Gain
        </Link>
      </div>
    </div>
  );
};

export default JobDetailsSideCard;
