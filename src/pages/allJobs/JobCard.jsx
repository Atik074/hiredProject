import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";

export const JobCard = ({ job ,onJobDetails }) => {
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
      <Link to={`/${id}`}>
        <Button onClick={()=>onJobDetails(job)} className="basis-[12%] text-[18px] font-normal" variant="green" size="lg">
          View Details
        </Button>
      </Link>
      </CardContent>
    </Card>
  );
};
