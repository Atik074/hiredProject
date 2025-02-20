import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiMoneyWavyThin } from "react-icons/pi";
import { PiSubtitlesLight } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import "./Style.css"

const FeatureJobCard = ({ job, onJobDetails, inView }) => {
  const { id, image, post_name, job_type, salary_range, location, category, description } = job;

  return (
    <Card
      className={`${inView
        ? "hover:shadow-xl border border-[#dcdde1]" 
        : "flex flex-col md:flex-row items-center hover:border-l-8 border-amber-600 hover:shadow-xl hover:scale-[1.02] mb-8 p-4" 
      } transition-all duration-300`}
    >
      {/* Image Section */}
      <CardHeader className={`${inView ? "text-center" : "md:mr-6"}`}>
        <img
          className={`${inView ? "w-full rounded" : "w-24 h-24 rounded-full"}`}
          src={image}
          alt="companyLogo"
        />
      </CardHeader>

    
      <CardContent className={`${inView ? "mt-5" : "flex-1"}`}>
        <div>
        
          {!inView && (
            <span className="bg-[#e0f5d7] text-[#449626] text-[16px] px-2 rounded">
              {job_type}
            </span>
          )}

      
          <CardTitle className="mt-2   font-semibold title">{post_name}</CardTitle>

    
          <div
            className={`${inView
              ? "flex flex-col md:flex-row justify-between gap-4 mb-4" 
              : "flex flex-col md:flex-row gap-4 mb-4" 
            }`}
          >
          
            <p
              className={`${inView
                ? "flex items-center justify-center"
                : "flex items-center justify-center shadow-sm p-2 rounded border border-[#c6bcbc7e] font-medium"
              }`}
            >
              {inView ? (
                <span className="rounded border bg-blue-50 border-blue-200 text-[15px] px-2 text-center ">
                  {location}
                </span>
              ) : (
                <>
                  <PiMoneyWavyThin className="text-[20px] mx-2" />
                  <span className="text-[16px]">{salary_range}</span>
                </>
              )}
            </p>

         
            {inView ? (
              <p className="rounded bg-red-50 border border-red-200 text-[15px] text-center px-2 jobType ">
                {job_type}
              </p>
            ) : (
              <p className="flex items-center justify-center shadow-sm p-2 rounded border border-[#c6bcbc7e] font-medium ">
                <CiLocationOn className="text-[20px] mx-2" />
                <span className="text-[16px]">{location}</span>
              </p>
            )}

      
            {!inView && (
              <p className="flex items-center justify-center shadow-sm p-2 rounded border border-[#c6bcbc7e] font-medium">
                <PiSubtitlesLight className="text-[20px] ml-2" />
                <span className="mx-2 text-[16px]">{category}</span>
              </p>
            )}
          </div>

         
          {inView && (
  <CardDescription className="text-[17px] text-justify description overflow-hidden text-ellipsis whitespace-nowrap md:whitespace-normal md:max-h-40">
    {description}
  </CardDescription>
)}

        </div>
      </CardContent>

      {/* View Details Button */}
      <Link to={`/${id}`} className={`${inView ? "w-full text-center" : "md:w-auto"}`}>
        <Button
          onClick={() => onJobDetails(job)}
          className={`${inView
            ? "w-[60%] mb-5 ml-12 btnInView" 
            : "w-full md:w-auto md:basis-[12%] text-[18px] font-normal" 
          }`}
          variant="green"
          size="lg"
        >
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default FeatureJobCard;