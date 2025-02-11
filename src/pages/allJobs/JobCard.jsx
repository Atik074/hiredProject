import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

export const JobCard = ({ job }) => {
  const {
    id,
    image,
    post_name,
    job_type,
    salary_range,
    location,
    category,
    description,
  } = job;
  console.log(job);

  return (
    <Card>
      <CardHeader>
        <div>
          <img className="w-full rounded" src={image} alt="logo" />
        </div>
        <CardTitle>{post_name}</CardTitle>
        <div className="flex justify-between">
        <p className="rounded border  bg-blue-50 border-blue-200 text-[15px] px-2 text-center">{location}
        </p>
        <p className="rounded  bg-red-50 border  border-red-200 text-[15px] text-center px-2">{job_type}
        </p>
      
        </div>
        <CardDescription className="text-[17px] text-justify leading-relaxed">
          {description.slice(0, 100)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
};
