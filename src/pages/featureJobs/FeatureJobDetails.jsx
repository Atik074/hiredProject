import { JobDataContext } from "@/context/AuthContext";
import React, { useContext, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiSubtitlesLight } from "react-icons/pi";
import { TbFileDescription } from "react-icons/tb";
import { IoMdArrowForward } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineOtherHouses } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
  const [showModal , setShowModal] = useState(false)



  return (
    <div>
      <div className="w-full h-[400px] opacity-[.7] bg-cover  bg-[url('https://shorturl.at/VZCnr')] mb-20"></div>
      <div className=" mx-12 flex items-center gap-x-8 absolute top-[20%]">
        <img className="w-40 h-40 rounded-full" src={image} alt="companyLogo" />

        <div>
          <span className="bg-[#e0f5d7] text-[#449626] text-[16px] px-2 rounded">
            {job_type}
          </span>
          <h2 className="mt-2 mb-3 text-3xl font-semibold text-white">
            {post_name}
          </h2>
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

      <div className="container  flex justify-between">
        <div className="w-[67%]">
          <img className="w-[100%]" src="https://shorturl.at/PTyMD" alt="" />
          <div className="bg-gray-700 flex items-center gap-x-2 p-3 my-6 rounded ">
            <TbFileDescription className="  border border-[#898686] bg-white rounded-full w-9 h-9 p-[6px]" />
            <h2 className="text-[21px] font-medium  text-white">
              Job Descrition
            </h2>
          </div>
          <p className="text-justify text-[19px]">{description}</p>

          <div className="bg-gray-700 flex items-center gap-x-2 p-3 my-6 rounded ">
            <IoBagHandleOutline className="border border-[#898686] bg-white rounded-full w-9 h-9 p-[6px]" />
            <h2 className="text-[21px] font-medium  text-white">
              {" "}
              Required Skills and Abilities
            </h2>
          </div>
          <p className="text-justify text-[19px]">
            {requirements.map((item) => (
              <li
                key={item}
                className="list-none flex items-center gap-x-2 mb-2"
              >
                <IoMdArrowForward className="text-[19px] text-amber-600 font-medium" />
                {item}
              </li>
            ))}
          </p>

          <div className="bg-gray-700 flex items-center gap-x-2 p-3 my-6 rounded ">
            <MdOutlineOtherHouses className="  border border-[#898686] bg-white rounded-full w-9 h-9 p-[6px]" />
            <h2 className="text-[21px] font-medium  text-white">
              Others Information
            </h2>
          </div>
          <h2 className="text-[22px]   mb-3 underline underline-offset-8">
            Primary Responsivilty :
          </h2>
          <p className="text-[19px]  text-justify mb-6">
            Depending on the role, you may be responsible for managing or
            coordinating specific projects. This could include setting
            deadlines, allocating resources, tracking progress, and
            communicating with team members or clients.Working effectively with
            others within a team is often essential. If you're in a leadership
            role, you might have additional responsibilities, such as delegating
            tasks, providing feedback, and guiding team members to meet
            objectives
          </p>

          <div className="flex items-center gap-x-3  text-[20px] font-normal mb-2">
            <IoMdArrowForward className="text-[19px] text-amber-600 font-medium" />
            <p className="-mt-2">Company : {title}</p>
          </div>
          <div className="flex items-center gap-x-3  text-[20px] font-normal mb-2">
            <IoMdArrowForward className="text-[19px] text-amber-600 font-medium" />
            <p className="-mt-2">Category : {category}</p>
          </div>
          <div className="flex items-center gap-x-3  text-[20px] font-normal mb-2">
            <IoMdArrowForward className="text-[19px] text-amber-600 font-medium" />
            <p className="-mt-2">Vacancy : {vacancy}</p>
          </div>
          <div className="flex items-center gap-x-3   text-[20px] font-normal mb-12">
            <IoMdArrowForward className="text-[19px] text-amber-600 font-medium" />
            <p className="-mt-2">Yearly Range : {salary_range}</p>
          </div>

          
        </div>
        <JobDetailsSideCard />
      </div>

      <div className="mt-20 mx-60 mb-72">
          <Button
            onClick={()=>setShowModal(true)}
            className="text-white w-1/2  text-xl"
            variant="destructive"
            size="lg"
          >
            Apply for Job
          </Button>
          </div>

           {
              showModal && <JobAppliedModal setShowModal={setShowModal} />
           }


    </div>
  );
};

export default FeatureJobDetails;
