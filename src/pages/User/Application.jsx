import { useEffect, useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Application = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    setAppliedJobs(jobs);
  }, [navigate]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex gap-2 ">
        <IoIosInformationCircle className="text-3xl" />
        <h2 className="text-2xl sm:text-2xl font-semibold mb-6">
          Notifications
        </h2>
      </div>

      {appliedJobs.length === 0 ? (
        <p className="text-lg text-gray-600">No jobs have been applied to yet.</p>
      ) : (
        <ul className="space-y-4">
          {appliedJobs.map((job, index) => (
            <li key={index} className="text-lg sm:text-[18px]  mb-4">
              {job.post_name} - {job.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Application;
