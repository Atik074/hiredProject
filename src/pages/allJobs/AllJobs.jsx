import { useContext, useState } from "react";
import useJobData from "@/hooks/useData";
import FeatureJobCard from "../featureJobs/FeatureJobCard";
import { JobDataContext } from "@/context/AuthContext";

const AllJobs = () => {
  const { jobs } = useJobData();
  const [inView, setInView] = useState(true);
  const { setJob } = useContext(JobDataContext);
  const [filterJobs , setFilterJobs] = useState(jobs)
  const [selectedCategories , setSelectedCategories] = useState([])



  //collect all category from jobs data 
   const allCategoryJobs  = [ ...new  Set(jobs.map(job=>job.category))]


  const handleJobDetails = (job) => {
    setJob(job);
  };
    

 console.log(filterJobs)

const handleSearchByCheck =(e,categoryItem)=>{
  
      const isChecked = e.target.checked
    
     let  newCategoryJobs = isChecked ? [...selectedCategories ,categoryItem] : selectedCategories.filter(category => category !== categoryItem)
      setSelectedCategories(newCategoryJobs)

      setFilterJobs(
        newCategoryJobs.length > 0 ? jobs.filter(job => newCategoryJobs.includes(job.category)) : jobs
      )

  
 

}


  return (
    <div className="container  grid grid-cols-[250px,1fr] mt-12  h-screen gap-12 p-10">
      <div className="sidebar">

       

        <h2 className="text-xl mb-3 border-b-2">Search by Categories</h2>

           {
             allCategoryJobs.map(category =><div 
                key={category}
             className="flex items-center  gap-2">
              <input
                 onClick={(e)=>handleSearchByCheck(e ,`${category}`)}
                className="w-4 h-4 border-2 border-sky-700"
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label className="text-[19px]">{category}</label>
            </div>)
           }
       
      

        {/* ////////////// */}
        <h2 className="text-xl mb-3 border-b-2 mt-6">Job type</h2>
        <div className="flex items-center  gap-2">
          <input
            className="w-4 h-4 border-2 border-sky-700"
            type="checkbox"
            name="checkbox"
            id="checkbox"
          />
          <label className="text-[19px]">Software</label>
        </div>
        <div className="flex items-center  gap-2">
          <input
            className="w-4 h-4 border-2 border-sky-700"
            type="checkbox"
            name="checkbox"
            id="checkbox"
          />
          <label className="text-[19px]">Software</label>
        </div>
        <div className="flex items-center  gap-2">
          <input
            className="w-4 h-4 border-2 border-sky-700"
            type="checkbox"
            name="checkbox"
            id="checkbox"
          />
          <label className="text-[19px]">Software</label>
        </div>
        <div className="flex items-center  gap-2">
          <input
            className="w-4 h-4 border-2 border-sky-700"
            type="checkbox"
            name="checkbox"
            id="checkbox"
          />
          <label className="text-[19px]">Software</label>
        </div>
        {/* /////// */}
      </div>

      <div className="mainPart">
        <div className="w-full h-12 border-2 border-red-800"></div>
        <h2 className="text-[23px] font-medium">Latest Jobs Available Here</h2>
        <p className="text-[18px] text-[#706d6d]">
          Get your Dream job from top companies by Hirrd
        </p>

        <div
          className={`${inView === true ? `mt-8 grid grid-cols-3 gap-6` : ``}`}
        >
          {filterJobs.map((job) => (
            <FeatureJobCard
              key={job.id}
              job={job}
              onJobDetails={handleJobDetails}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
