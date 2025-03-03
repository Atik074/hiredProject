import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PostJobs from "../PostJobs/PostJobs";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState("dashboard"); // State to track current page
  const navigate = useNavigate();

  // Redirect if the admin is not logged in
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/");
    }
    const jobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

    setAppliedJobs(jobs);
  }, [navigate]);

  // Admin logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("role");
    navigate("/");
  };

  // Handle removing a job from applied jobs list
  const handleRemoveJob = (index) => {
    // Get the applied jobs array from localStorage
    let jobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

    // Remove the job from the array by its index
    jobs.splice(index, 1);

    // Save the updated jobs array back to localStorage
    localStorage.setItem("appliedJobs", JSON.stringify(jobs));

    // Update the state to reflect the changes in the UI
    setAppliedJobs(jobs);
  };

  return (
    <div className="flex justify-center w-[100%] gap-8 container">
      <div className=" w-[16%] mt-[90px]">
        <ul>
          <li>
            <button
              onClick={() => setCurrentPage("dashboard")}
              className="text-[19px] mb-2 text-black"
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage("jobList")}
              className="text-[19px] mb-2 text-black"
            >
              Job List
            </button>
          </li>
          <li>
          <button
  onClick={() => {/* Your onClick handler here */}}
  className="text-[18px] font-medium p-3 mb-4 text-black hover:text-indigo-600 focus:outline-none"
>
  Normal Button
</button>

          </li>
        </ul>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden ${
          sidebarOpen ? "" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <div
        className={`lg:w-64 w-48 bg-white border border-red-500 shadow-lg p-6 fixed top-0 left-0 h-full transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Panel</h2>
        <ul>
          <li>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-700 py-2 px-4 w-full text-left hover:bg-gray-100 rounded-md"
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-700 py-2 px-4 w-full text-left hover:bg-gray-100 rounded-md"
            >
              Manage Users
            </button>
          </li>
          <li>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-700 py-2 px-4 w-full text-left hover:bg-gray-100 rounded-md"
            >
              Settings
            </button>
          </li>
        </ul>
      </div>

      {/* Sidebar Toggle Button (visible only on mobile) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden text-white bg-indigo-600 p-2 rounded-md m-4 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Main Content */}
      <div className="flex-1 p-6  w-[60%]">
        <div className="bg-white p-8 rounded-lg">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              Admin Dashboard
            </h2>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Logout
            </button>
          </div>

          {/* Conditional Rendering based on currentPage */}
          {currentPage === "dashboard" && (
            <>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                User Applied Jobs
              </h3>
              <div className="overflow-x-auto bg-white rounded-lg">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-600 font-medium text-[18px]">
                        Name
                      </th>
                      <th className="px-4 py-2 text-left text-gray-600 font-medium text-[18px]">
                        Email
                      </th>
                      <th className="px-4 py-2 text-left text-gray-600 font-medium text-[18px]">
                        Post Name
                      </th>
                      <th className="px-4 py-2 text-left text-gray-600 font-medium text-[18px]">
                        Company Name
                      </th>
                      <th className="px-4 py-2 text-left text-gray-600 font-medium text-[18px]">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {appliedJobs.map((job, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3">{job.name}</td>
                        <td className="px-4 py-3">{job.email}</td>
                        <td className="px-4 py-3">{job.post_name}</td>
                        <td className="px-4 py-3">{job.title}</td>
                        <td className="px-4 py-3 ">
                          <button
                            className="px-4 py-3 text-red-600"
                            onClick={() => handleRemoveJob(index)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Add content for other pages like 'Job List' and 'Settings' */}
          {currentPage === "jobList" && (
            <div>
              <PostJobs/>
            </div>
          )}

          {currentPage === "settings" && (
            <div>
              <h3>Settings Page</h3>
              {/* Add settings content here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
