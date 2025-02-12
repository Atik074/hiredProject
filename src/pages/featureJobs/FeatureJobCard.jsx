import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiMoneyWavyThin } from "react-icons/pi";
import { PiSubtitlesLight } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FeatureJobCard = ({ job ,onJobDetails,inView }) => {
  const {id ,image ,post_name,job_type,salary_range ,location ,category,description} =job
  




  
  return (
    <Card className={`${inView === true  ? `hover:shadow-xl  border border-[#dcdde1]` : `flex items-center  hover:border-l-8 border-amber-600   hover:shadow-xl    hover:scale-[1.02]   mb-8 `} transition-all`}>
      <CardHeader>
        <img className={`${inView  === true ? `w-full rounded`:`w-24 h-24 rounded-full`}`} src={image} alt="companyLogo" />
      </CardHeader>

      <CardContent className="mt-5 basis-[72%]">
        <div>
             {
              inView === true ? <p></p> :  <span className="bg-[#e0f5d7] text-[#449626] text-[16px] px-2 rounded">
              {job_type}
            </span>
             }
          <CardTitle className="mt-2 mb-4">{post_name}</CardTitle>


          <div className={`${inView === true ? `flex justify-between` : `flex gap-x-4`} mb-4`}>
            <p className={`${inView === true ? `` :`flex item-center justify-center  shadow-sm p-1 rounded   border border-[#c6bcbc7e] font-medium`}`}>
              <PiMoneyWavyThin className={`${inView === true ? `hidden`   : `text-[20px] mx-2`}`} />
              {
                inView ===  true ? 
                 <span className="rounded border  bg-blue-50 border-blue-200 text-[15px] px-2 text-center">{location}
                </span> 
                 :
                <span className="text-[16px] mr-2">{salary_range}</span> 
              }
              
            </p>

            {
              inView === true ?  <p className="rounded  bg-red-50 border mb-3 border-red-200 text-[15px] text-center px-2">{job_type}
        </p> : <p className="flex item-center justify-center  shadow-sm p-1 rounded     border border-[#c6bcbc7e]  font-medium">
              <CiLocationOn className="text-[20px] mx-2" />
              <span className="mr-2  text-[16px]">{location}</span>
            </p>
            }

           

            {
              inView === true ? <p></p>  :
             <p className="flex item-center items-center justify-center  shadow-sm p-1 rounded   border border-[#c6bcbc7e] font-medium">
              <PiSubtitlesLight className="text-[20px] ml-2" />
              <span className="mx-2  text-[16px]">{category}</span>
            </p> }

          </div>

          
          {inView === true ? <CardDescription className="text-[17px] text-justify leading-relaxed ">
                    {description.slice(0, 80)}
                  </CardDescription> : <p></p>}


        </div>
      </CardContent>
      <Link to={`/${id}`}>
        <Button onClick={()=>onJobDetails(job)} className={`${inView === true ? `w-[60%]  mb-5 mx-14 ` : `basis-[12%]`} text-[18px] font-normal`} variant="green" size="lg">
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default FeatureJobCard;
