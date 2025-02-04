import React, { useContext } from "react";
import useJobData from "@/hooks/useData";
import FeatureJobCard from "./FeatureJobCard";
import { JobDataContext } from "@/context/AuthContext";


const FeatureJobs = () => {
  const { jobs  } = useJobData();
  const { setJob} = useContext(JobDataContext)

 


 

//handle signle job details 
  const handleJobDetails =(job)=>{

    setJob(job)
  

  }

  
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
        {jobs.slice(0, 6).map((job) => (
          <FeatureJobCard 
          key={job.id}
           job={job}
           onJobDetails={handleJobDetails}

           />
        ))}
      </div>
    </div>
  );
};

export default FeatureJobs;
