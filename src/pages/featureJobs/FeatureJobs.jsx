import React, { useContext } from "react";
import useJobData from "@/hooks/useData";
import FeatureJobCard from "./FeatureJobCard";
import { JobDataContext } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import './Style.css'


const FeatureJobs = () => {
  const { jobs  } = useJobData();
  const { setJob} = useContext(JobDataContext)

 


 

//handle signle job details 
  const handleJobDetails =(job)=>{

    setJob(job)
  

  }

  
  return (
    <div className="mt-40 ">
      <div className="text-center mb-10 px-4">
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
    Get Your Best Profession with Hirred Platform
  </h3>
  <p className="text-[18px] sm:text-[20px] md:text-[22px] text-slate-600">
    Find recent job circular with easy application features
  </p>
</div>


      <div className="cardParent">
        {jobs.slice(0, 6).map((job) => (
          <FeatureJobCard 
          key={job.id}
           job={job}
           onJobDetails={handleJobDetails}

           />
        ))}
      </div>
         
      <div className="text-center mt-6">
  <Link to="/alljobs">
    <Button
      className="w-full md:w-[40%] lg:w-[20%] p-4 md:p-6 text-base md:text-lg lg:text-xl"
      variant="green"
      size="lg"
    >
      More Jobs
    </Button>
  </Link>
</div>

    </div>
  );
};

export default FeatureJobs;
