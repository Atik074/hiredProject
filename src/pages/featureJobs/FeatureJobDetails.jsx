import { JobDataContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiSubtitlesLight } from "react-icons/pi";
import { TbFileDescription } from "react-icons/tb";
import { IoMdArrowForward } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineOtherHouses } from "react-icons/md";








const FeatureJobDetails = () => {
  const { job } = useContext(JobDataContext);
  const { image, post_name, job_type, salary_range, location, category,description,requirements } = job;

 

  return (
    <div className="jobDetails">
      <div className="w-full h-[400px] opacity-[.7] bg-cover  bg-[url('https://shorturl.at/VZCnr')]">
     
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

      <div className="container my-[120px ">
       <img className="w-[70%]" src="https://shorturl.at/PTyMD" alt="" />
         <div className="bg-gray-700 flex items-center gap-x-2 p-3 my-6 rounded ">
       <TbFileDescription className="  border border-[#898686] bg-white rounded-full w-9 h-9 p-[6px]" /> 
       <h2 className="text-[21px] font-medium  text-white">Job Descrition</h2>
         </div>
         <p className="text-justify text-[19px]">{description}</p>


         <div className="bg-gray-700 flex items-center gap-x-2 p-3 my-6 rounded ">
       <IoBagHandleOutline className="border border-[#898686] bg-white rounded-full w-9 h-9 p-[6px]" /> 
       <h2 className="text-[21px] font-medium  text-white"> Required Skills and Abilities</h2>
         </div>
         <p className="text-justify text-[19px]">{requirements.map(item =><li key={item}
         className="list-none flex items-center gap-x-2 mb-2"
         >
          <IoMdArrowForward className="text-[19px] text-amber-600 font-medium"/>{item }
          </li>)}</p>


          <div className="bg-gray-700 flex items-center gap-x-2 p-3 my-6 rounded ">
       <MdOutlineOtherHouses className="  border border-[#898686] bg-white rounded-full w-9 h-9 p-[6px]" /> 
       <h2 className="text-[21px] font-medium  text-white">Others Information</h2>
         </div>
         <li className="text-justify text-[20px] font-normal">salary_range : {salary_range}</li>
         <li className="text-justify text-[20px] font-normal">category : {salary_range}</li>
         <li className="text-justify text-[20px] font-normal">vacancy : {salary_range}</li>
         <li className="text-justify text-[19px] font-normal">title : {salary_range}</li>



        

          <div className="w-[30%]">
              
          </div>
      </div>
    </div>
  );
};

export default FeatureJobDetails;
