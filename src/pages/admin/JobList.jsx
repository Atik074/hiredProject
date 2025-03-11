import useJobData from "@/hooks/useData";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import CreateJob from "./CreateJob";
import Swal from "sweetalert2";

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
      resetForm();

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Job Edited successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const newJobPost = { ...newJob, id: (jobs.length + 1).toString() };
      setJobs([...jobs, newJobPost]);
      resetForm();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "New job created successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const resetForm = () => {
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

  const handleDeleteJob = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const restJobs = jobs.filter((job) => job.id !== id);
        setJobs(restJobs);
        Swal.fire({
          title: "Deleted!",
          text: "Job has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleEditJob = (job) => {
    setNewJob(job);
    setIsEdit(true);
    setShowForm(true);
    setJobEdit(job);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {showForm !== true && (
          <h3 className="text-2xl font-semibold mb-4 sm:mb-0">Current Job Listings</h3>
        )}
        {showForm !== true && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
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
          onReset={resetForm}
        />
      )}

      {showForm !== true && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg mt-4 text-lg">
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
                  <td className="p-4 text-lg">{job.title}</td>
                  <td className="p-4 text-lg">{job.post_name}</td>
                  <td className="p-4 text-lg">{job.location}</td>
                  <td className="flex space-x-2 p-4">
                    <Button onClick={() => handleEditJob(job)} className="bg-red-500 text-white px-3 py-1 rounded">
                      <FaPen />
                    </Button>
                    <Button onClick={() => handleDeleteJob(job.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                      <MdDelete />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default JobList;
