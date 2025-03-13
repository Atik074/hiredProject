import { useContext, useEffect, useState } from "react";
import useJobData from "@/hooks/useData";
import FeatureJobCard from "../featureJobs/FeatureJobCard";
import { JobDataContext } from "@/context/AuthContext";
import "./AllJobs.css"

const AllJobs = () => {
  const { jobs } = useJobData();
  const [inView, setInView] = useState(true);
  const { setJob } = useContext(JobDataContext);
  const [filterJobs, setFilterJobs] = useState(jobs);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage =6;

  // Handle pagination for job data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobsItem = filterJobs.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // For showing all jobs data in UI
  useEffect(() => {
    setFilterJobs(jobs);
  }, [jobs]);

  // Collect all categories from jobs data
  const allCategoryJobs = [...new Set(jobs.map((job) => job.category))];
  
  // Collect all locations from jobs data
  const allJobsLocation = [...new Set(jobs.map((job) => job.location))];

  const handleJobDetails = (job) => {
    setJob(job);
  };

  // handle search by category
  const handleSearchCategory = (e, categoryItem) => {
    const isChecked = e.target.checked;
    const newAllCategory = [...selectedCategories, categoryItem];
    const removeCategory = selectedCategories.filter(
      (category) => category !== categoryItem
    );

    let updateCategories = isChecked ? newAllCategory : removeCategory;
    setSelectedCategories(updateCategories);

    setFilterJobs(
      updateCategories.length > 0
        ? jobs.filter((job) => updateCategories.includes(job.category))
        : jobs
    );
    setCurrentPage(1);
  };

  // handle search by location
  const handleSearchLocation = (e, locationItem) => {
    const isChecked = e.target.checked;
    
    setSelectedLocation(prevLocations => {
      const updatedLocations = isChecked
        ? [...prevLocations, locationItem]  // Add location
        : prevLocations.filter(location => location !== locationItem);  
      
   
      setFilterJobs(
        updatedLocations.length > 0
          ? jobs.filter(job => updatedLocations.includes(job.location))  
          : jobs  
      );
      setCurrentPage(1);  
      return updatedLocations;  
    });
  };
  

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8   allJobs">
      <h3 className="text-center font-semibold mb-8 jobsTitle">Our All Jobs  In Hirred</h3>
      <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] gap-12">
        {/* Sidebar */}
        <div className="sidebar">
          <h2 className="text-[24px] font-semibold mb-3 border-b-2">
            Search by Categories
          </h2>

          {allCategoryJobs.map((category) => (
            <div key={category} className="flex items-center gap-2 my-1">
              <input
                onChange={(e) => handleSearchCategory(e, `${category}`)}
                className="w-4 h-4 border-2 border-sky-700"
                type="checkbox"
                name="checkbox"
                value={selectedCategories}
                id="checkbox"
              />
              <label className="text-[19px]">{category}</label>
            </div>
          ))}

          <h2 className="text-[24px] font-semibold mb-3 mt-12 border-b-2">
            Search by Location
          </h2>
          {allJobsLocation.map((jobLocation) => (
            <div key={jobLocation} className="flex items-center gap-2 my-1">
              <input
                onChange={(e) => handleSearchLocation(e, `${jobLocation}`)}
                className="w-4 h-4 border-2 border-sky-700"
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label className="text-[19px]">{jobLocation}</label>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="mainPart">
          <h2 className="text-[23px] font-medium">Latest Jobs Available Here</h2>
          <p className="text-[18px] text-[#706d6d]">
            Get your Dream job from top companies by{" "}
            <span className="text-[23px] font-bold">Hirrd</span>
          </p>

          {currentJobsItem.length === 0 && (
            <p className="text-2xl text-red-600 text-center rounded font-medium my-12">
              No jobs are matched. Please select another type.
            </p>
          )}

          <div
            className={`mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}
          >
            {currentJobsItem.map((job) => (
              <FeatureJobCard
                key={job.id}
                job={job}
                onJobDetails={handleJobDetails}
                inView={inView}
              />
            ))}
          </div>

         
          {/* Pagination */}
{filterJobs.length > 9 && (
  <div className="flex justify-center mt-12">
    {[1, 2, 3, 4, 5].map((page) => (
      <button
        key={page}
        onClick={() => paginate(page)}
        className={`px-4 py-2 mx-1 border rounded ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        {page}
      </button>
    ))}
  </div>
)}



        </div>
      </div>
    </div>
  );
};

export default AllJobs;