import { JobDataContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiSubtitlesLight } from "react-icons/pi";

const FeatureJobDetails = () => {
  const { job } = useContext(JobDataContext);
  const { image, post_name, job_type, salary_range, location, category } = job;

  return (
    <div className="jobDetails">
      <div className="relative">
        <img
          className="w-full h-[400px] opacity-[.5]"
          src="https://t4.ftcdn.net/jpg/08/74/45/91/360_F_874459169_2l9z0RzWwI8mVxs3er3UWR27RyNVaVoH.jpg"
          alt=""
        />
      </div>
      <div className=" mx-12 flex items-center gap-x-8 absolute top-[20%]">
        <img className="w-40 h-40 rounded-full" src={image} alt="companyLogo" />

        <div>
          <span className="bg-[#e0f5d7] text-[#449626] text-[16px] px-2 rounded">
            {job_type}
          </span>
          <h2 className="mt-2 mb-3 text-3xl font-semibold text-white">{post_name}</h2>
          <div className="flex gap-x-4">
            <p className="flex item-center justify-center  shadow-sm p-1 rounded text-white    border border-[#c6bcbc7e]  font-medium">
              <CiLocationOn className="text-[20px] mx-2" />
              <span className="mr-2  text-[16px] ">{location}</span>
            </p>
            <p className="flex item-center items-center justify-center  shadow-sm p-1 rounded text-white  border border-[#c6bcbc7e] font-medium">
              <PiSubtitlesLight className="text-[20px] ml-2" />
              <span className="mx-2 text-[16px]">{category}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureJobDetails;
