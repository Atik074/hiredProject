import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiMoneyWavyThin } from "react-icons/pi";
import { PiSubtitlesLight } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FeatureJobCard = ({ job }) => {
  return (
    <Card className="mb-8 flex items-center    hover:border-l-8 border-amber-600 transition-all  hover:shadow-xl    hover:scale-[1.02] ">
      <CardHeader>
        <img className="w-24 h-24 rounded-full" src={job.image} alt="" />
      </CardHeader>

      <CardContent className="mt-5 basis-[72%]">
        <div>
          <span className="bg-[#e0f5d7] text-[#449626] text-[16px] px-2 rounded">
            {job.job_type}
          </span>
          <CardTitle className="mt-2 mb-4">{job.post_name}</CardTitle>
          <div className="flex gap-x-4">
            <p className=" flex item-center justify-center  shadow-sm p-1 rounded   border border-[#c6bcbc7e] font-medium  text-semibold">
              <PiMoneyWavyThin className="text-[20px] mx-2" />
              <span className="text-[16px] mr-2">{job.salary_range}</span>
            </p>

            <p className="flex item-center justify-center  shadow-sm p-1 rounded     border border-[#c6bcbc7e] text-semibold font-medium">
              <CiLocationOn className="text-[20px] mx-2" />
              <span className="mr-2  text-[16px]">{job.location}</span>
            </p>
            <p className="flex item-center justify-center  shadow-sm p-1 rounded   border border-[#c6bcbc7e]  text-semibold font-medium">
              <PiSubtitlesLight className="text-[20px] ml-2" />
              <span className="mr-2  text-[16px]">{job.category}</span>
            </p>
          </div>
        </div>
      </CardContent>
      <Link to="/jobs">
        <Button className="basis-[12%]" variant="green" size="lg">
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default FeatureJobCard;
