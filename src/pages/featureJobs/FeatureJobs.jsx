import React from "react";
import useJobData from "@/hooks/useData";
import FeatureJobCard from "./FeatureJobCard";

const FeatureJobs = () => {
  const { jobs } = useJobData();


  return (
    <div>
      <div className="text-center mb-10 ">
        <h3 className="text-2xl font-semibold mb-1">
          Get Your Best Profession with Hirred Platform
        </h3>
        <p className="text-[18px] text-slate-600 ">
          Find recent job circular with easy application features
        </p>
      </div>

      <div className="p-8">
        {jobs.slice(0, 10).map((job) => (
          <FeatureJobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FeatureJobs;
