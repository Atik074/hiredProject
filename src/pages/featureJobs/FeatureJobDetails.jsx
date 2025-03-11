import { JobDataContext } from "@/context/AuthContext";
import React, { useContext, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiSubtitlesLight } from "react-icons/pi";
import { TbFileDescription } from "react-icons/tb";
import { IoMdArrowForward } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineOtherHouses } from "react-icons/md";
import { Button } from "@/components/ui/button";
import JobDetailsSideCard from "@/components/constantUi/JobDetailsSideCard";
import JobAppliedModal from "./JobAppliedModal";

const FeatureJobDetails = () => {
  const { job } = useContext(JobDataContext);
  const {
    image,
    post_name,
    job_type,
    salary_range,
    location,
    description,
    requirements,
    title,
    vacancy,
    category,
  } = job;
  const [showModal, setShowModal] = useState(false);
  
 

  return (
    <div>
      <div className="w-full h-[400px] opacity-[.7] bg-cover bg-[url('https://shorturl.at/VZCnr')] mb-20 md:mb-30 lg:mb-52"></div>
    
      
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 absolute top-[40%]">
        <img className="w-32 h-32 sm:w-40 sm:h-40 rounded-full" src={image} alt="companyLogo" />
        <div className="text-center sm:text-left">
          <span className="bg-[#e0f5d7] text-[#449626] text-[14px] sm:text-[16px] px-2 rounded">
            {job_type}
          </span>
          <h2 className="mt-2 mb-3 text-xl sm:text-3xl font-semibold text-white">
            {post_name}
          </h2>
          <div className="flex justify-center sm:justify-start gap-x-4">
            <p className="flex items-center justify-center shadow-sm p-1 rounded text-white border border-[#c6bcbc7e] font-medium">
              <CiLocationOn className="text-[20px] mx-2" />
              <span className="mr-2 text-[14px] sm:text-[16px]">{location}</span>
            </p>
            <p className="flex items-center justify-center shadow-sm p-1 rounded text-white border border-[#c6bcbc7e] font-medium">
              <PiSubtitlesLight className="text-[20px] ml-2" />
              <span className="mx-2 text-[14px] sm:text-[16px]">{category}</span>
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-[32px] text-center font-semibold mb-11 underline underline-offset-8"><span className="text-sky-600 hover:text-sky-700 ">{post_name}</span> Job Details</h2>

      <div className="container flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 md:gap-16 px-4 sm:px-8 md:px-12">
        <div className="w-full lg:w-[67%]">
        
          <img className="w-full sm:w-[100%] rounded" src="https://shorturl.at/PTyMD" alt="" />
          
          <div className="bg-gray-700 flex items-center gap-x-2 p-3 my-6 rounded">
            <TbFileDescription className="border border-[#898686] bg-white rounded-full w-9 h-9 p-[6px]" />
            <h2 className="text-[18px] sm:text-[21px] font-medium text-white">Job Description</h2>
          </div>
          <p className="text-justify text-[16px] sm:text-[19px]">{description}</p>

          <div className="bg-gray-700 flex items-center gap-x-2 p-3 my-6 rounded">
            <IoBagHandleOutline className="border border-[#898686] bg-white rounded-full w-9 h-9 p-[6px]" />
            <h2 className="text-[18px] sm:text-[21px] font-medium text-white">Required Skills and Abilities</h2>
          </div>
          <p className="text-justify text-[16px] sm:text-[19px]">
            {requirements.map((item) => (
              <li key={item} className="list-none flex items-center gap-x-2 mb-2">
                <IoMdArrowForward className="text-[19px] text-amber-600 font-medium" />
                {item}
              </li>
            ))}
          </p>

          <div className="bg-gray-700 flex items-center gap-x-2 p-3 my-6 rounded">
            <MdOutlineOtherHouses className="border border-[#898686] bg-white rounded-full w-9 h-9 p-[6px]" />
            <h2 className="text-[18px] sm:text-[21px] font-medium text-white">Other Information</h2>
          </div>
          <h2 className="text-[22px] sm:text-[24px] mb-3 underline underline-offset-8">Primary Responsibility:</h2>
          <p className="text-[16px] sm:text-[19px] text-justify mb-6">
            Depending on the role, you may be responsible for managing or coordinating specific projects...
          </p>

          <div className="flex items-center gap-x-3 text-[16px] sm:text-[20px] font-normal mb-2">
            <IoMdArrowForward className="text-[19px] text-amber-600 font-medium" />
            <p className="-mt-2">Company: {title}</p>
          </div>
          <div className="flex items-center gap-x-3 text-[16px] sm:text-[20px] font-normal mb-2">
            <IoMdArrowForward className="text-[19px] text-amber-600 font-medium" />
            <p className="-mt-2">Category: {category}</p>
          </div>
          <div className="flex items-center gap-x-3 text-[16px] sm:text-[20px] font-normal mb-2">
            <IoMdArrowForward className="text-[19px] text-amber-600 font-medium" />
            <p className="-mt-2">Vacancy: {vacancy}</p>
          </div>
          <div className="flex items-center gap-x-3 text-[16px] sm:text-[20px] font-normal mb-12">
            <IoMdArrowForward className="text-[19px] text-amber-600 font-medium" />
            <p className="-mt-2">Yearly Range: {salary_range}</p>
          </div>
        </div>
        <JobDetailsSideCard />
      </div>

      <div className="mt-10 sm:mt-20 mx-8 sm:mx-20 mb-20 sm:mb-72 flex justify-center">
  <Button
    onClick={() => setShowModal(true)}
    className="text-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-xl py-3 mt-12"
    variant="destructive"
    size="lg"
  >
    Apply for Job
  </Button>
</div>



      {showModal && <JobAppliedModal setShowModal={setShowModal} />}
    </div>
  );
};

export default FeatureJobDetails;
