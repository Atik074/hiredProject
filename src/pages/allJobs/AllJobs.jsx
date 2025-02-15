import { useContext, useEffect, useState } from "react";
import useJobData from "@/hooks/useData";
import FeatureJobCard from "../featureJobs/FeatureJobCard";
import { JobDataContext } from "@/context/AuthContext";

const AllJobs = () => {
  const { jobs } = useJobData();
  const [inView, setInView] = useState(true);
  const { setJob } = useContext(JobDataContext);
  const [filterJobs, setFilterJobs] = useState(jobs);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedlocation, setSelectedLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Handle pagination for job data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobsItem = filterJobs.slice(indexOfFirstItem, indexOfLastItem);
  

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //  for showing all jobs data in ui
  useEffect(() => {
    setFilterJobs(jobs);
  }, [jobs]);

  //collect all category from jobs data
  const allCategoryJobs = [...new Set(jobs.map((job) => job.category))];
  //collect all locatin from jobs data
  const allJobsLocation = [...new Set(jobs.map((job) => job.location))];

  const handleJobDetails = (job) => {
    setJob(job);
  };

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

  const handleSearchLocation = (e, locationItem) => {
    const isChecked = e.target.value;
    const NewAllLocation = [...selectedlocation, locationItem];
    const removeLocation = selectedCategories.filter(
      (location) => location !== locationItem
    );

    let updatedLocation = isChecked ? NewAllLocation : removeLocation;
    setSelectedLocation(updatedLocation);

    setFilterJobs(
      updatedLocation.length > 0
        ? jobs.filter((job) => updatedLocation.includes(job.location))
        : jobs
    );
    setCurrentPage(1);
  };

  return (
    <div className="container  grid grid-cols-[250px,1fr] mt-12  h-screen gap-12 p-10">
      <div className="sidebar">
        <h2 className="text-[24px] font-semibold mb-3 border-b-2">
          Search by Categories
        </h2>

        {allCategoryJobs.map((category) => (
          <div key={category} className="flex items-center  gap-2 my-1">
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
          <div key={jobLocation} className="flex items-center  gap-2 my-1">
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

      <div className="mainPart">
       
        <h2 className="text-[23px] font-medium">Latest Jobs Available Here</h2>
        <p className="text-[18px] text-[#706d6d]">
          Get your Dream job from top companies by{" "}
          <span className="text-[23px] font-bold">Hirrd</span>
        </p>

        {currentJobsItem.length === 0 && (
            <p className="text-2xl text-red-600 text-center rounded  font-medium my-12 ">
              No jobs are matched.please select another types.
            </p>
          )}

        <div
          className={`${inView === true ? `mt-8 grid grid-cols-3 gap-6` : ``}`}
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

        <div className=" flex justify-center mt-6">
          <button
            onClick={() => paginate(1)}
            className={`px-4 py-2 mx-1 border rounded ${
              currentPage === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            1
          </button>
          <button
            onClick={() => paginate(2)}
            className={`px-4 py-2 mx-1 border rounded ${
              currentPage === 2 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            2
          </button>
          <button
            onClick={() => paginate(3)}
            className={`px-4 py-2 mx-1 border rounded ${
              currentPage === 3 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            3
          </button>
          <button
            onClick={() => paginate(4)}
            className={`px-4 py-2 mx-1 border rounded ${
              currentPage === 4 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            4
          </button>
          <button
            onClick={() => paginate(5)}
            className={`px-4 py-2 mx-1 border rounded ${
              currentPage === 5 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            5
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
