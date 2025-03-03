import useJobData from "@/hooks/useData";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import CreateJob from "./CreateJob";

const JobList = () => {
  const { jobs, setJobs } = useJobData();
  const [showForm, setShowForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [jobEdit, setJobEdit] = useState(null);
  const [newJob, setNewJob] = useState({
    title: "",
    image: "",
    vacancy: "",
    post_name: "",
    job_type: "",
    requirements: ["", "", "", ""],
    experience_required: "",
    salary_range: "",
    category: "",
    description: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({
      ...newJob,
      [name]: value,
    });
  };

  const handleRequirementsChange = (e, index) => {
    const updatedRequirements = [...newJob.requirements];
    updatedRequirements[index] = e.target.value;
    setNewJob({
      ...newJob,
      requirements: updatedRequirements,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      const editJobs = jobs.map((job) =>
        job.id === jobEdit.id ? { ...job, ...newJob } : job
      );

      setJobs(editJobs);
      setIsEdit(false);
      setJobEdit(null);
      resetFrom();
    } else {
      const newJobPost = { ...newJob, id: (jobs.length + 1).toString() };
      setJobs([...jobs, newJobPost]);
      resetFrom();
    }
  };

  const resetFrom = () => {
    setNewJob({
      title: "",
      image: "",
      vacancy: "",
      post_name: "",
      job_type: "",
      requirements: ["", "", "", ""],
      experience_required: "",
      salary_range: "",
      category: "",
      description: "",
      location: "",
    });
    setShowForm(false);
  };

  // handle delete
  const handleDeleteJob = (id) => {
    const restJobs = jobs.filter((job) => job.id !== id);
    setJobs(restJobs);
  };

  // handle edit job
  const handleEditJob = (job) => {
    setNewJob(job);
    setIsEdit(true);
    setShowForm(true);
    setJobEdit(job);
  };

  return (
    <div className="max-w-screen-lg mx-auto ">
      <div className="flex justify-between mt-12">
        <h3 className="text-xl font-semibold">Current Job Listings</h3>
        {showForm !== true && (
          <button
            className="bg-blue-500 text-white  rounded-md hover:bg-blue-600 transition duration-300"
            onClick={() => {
              setShowForm(true);
              setIsEdit(false);
            }}
          >
            Create Job
          </button>
        )}
      </div>

      {showForm && (
        <CreateJob
          onSubmit={handleSubmit}
          newJob={newJob}
          onInputChange={handleInputChange}
          onRequirementsChange={handleRequirementsChange}
          setShowForm={setShowForm}
          isEdit={isEdit}
          onReset={resetFrom}
        />
      )}

      {showForm !== true && (
        <table className="min-w-full bg-white border border-gray-300 rounded-lg mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Job Title</th>
              <th className="p-4 text-left">Post Name</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-b border-gray-200">
                <td className="p-4">{job.title}</td>
                <td className="p-4">{job.post_name}</td>
                <td className="p-4">{job.location}</td>
                <td>
                  <Button
                    onClick={() => handleEditJob(job)}
                    className="mr-6 border-none bg-red-500"
                  >
                    {" "}
                    <FaPen />
                  </Button>
                  <Button
                    onClick={() => handleDeleteJob(job.id)}
                    className="mr-6 border-none bg-red-500"
                  >
                    <MdDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default JobList;
