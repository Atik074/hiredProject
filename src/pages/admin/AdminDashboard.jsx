import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import JobList from "./JobList";
import ManageByPie from "./ManageByPie";
import { MdDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { RiContactsBook3Fill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";
import { getFileFromLocalStorage } from "@/hooks/pdfReader";
import ManageBoard from "@/components/constantUi/ManageBoard";
import Contact from "./Contact";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/");
    }
    const jobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    setAppliedJobs(jobs);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("role");
    navigate("/");
  };

  const handleRemoveJob = (index) => {
    let jobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    jobs.splice(index, 1);
    localStorage.setItem("appliedJobs", JSON.stringify(jobs));
    setAppliedJobs(jobs);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen gap-8 p-4 lg:p-8 my-24">
      {/* Sidebar */}
      <div className={`fixed lg:relative z-40 bg-gray-100 p-4 shadow-md transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 w-64 h-full lg:h-auto py-8`}>
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-gray-600"
        >
          ✖
        </button>
        <ul>
          <li className="mb-2">
            <Link onClick={() => setCurrentPage("dashboard")} className="flex items-center gap-2 text-black text-xl">
              <MdDashboard /> Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link onClick={() => setCurrentPage("jobList")} className="flex items-center gap-2 text-black text-xl">
              <IoIosListBox /> Job List
            </Link>
          </li>
          <li className="mb-2">
            <Link onClick={() => setCurrentPage("manage")} className="flex items-center gap-2 text-black text-xl">
              <IoIosSettings /> Manage
            </Link>
          </li>
          <li className="mb-2">
            <Link onClick={() => setCurrentPage("contact")} className="flex items-center gap-2 text-black text-xl">
              <RiContactsBook3Fill /> Contact
            </Link>
          </li>
          <li className="mb-6">
            <Link to="/" className="flex items-center gap-2 text-black text-xl">
              <FaHome /> Home
            </Link>
          </li>
         
          <li 
  onClick={handleLogout} 
  className="cursor-pointer text-red-500 text-sm sm:text-base md:text-[23px] p-2 sm:px-2 sm:py-[11px] rounded-md w-[60%] text-center border-2 transition-colors duration-200 ease-in-out hover:text-red-700 "
>
  Logout
</li>



        </ul>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden" onClick={() => setSidebarOpen(false)}></div>}

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 bg-indigo-600 text-white p-2 rounded"
      >
        ☰
      </button>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 rounded-md shadow-md overflow-auto">
        {currentPage === "dashboard" && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">User Applied Jobs</h3>
            <div className="overflow-x-auto bg-white rounded-lg">
              <table className="w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-4 px-3 text-left">Name</th>
                    <th className="py-4 px-2 text-left">Email</th>
                    <th className="py-4 px-2 text-left">Post Name</th>
                    <th className="py-4 px-2 text-left">Company Name</th>
                    <th className="py-4 text-left">Actions</th>
                    <th className="py-4 px-3 text-left">Resume</th>
                  </tr>
                </thead>
                <tbody>
                  {appliedJobs.map((job, index) => (
                    <tr key={index}>
                      <td className="py-3 px-2 text-[18px]">{job.name}</td>
                      <td className="py-3 px-2 text-[18px]">{job.email}</td>
                      <td className="py-3 px-2 text-[18px]">{job.post_name}</td>
                      <td className="py-3 px-2 text-[18px]">{job.title}</td>
                      <td className="py-3 px-2 text-[18px]">
                        <button className="text-red-600" onClick={() => handleRemoveJob(index)}>
                          Remove
                        </button>
                      </td>
                      <td>
                        <button onClick={() => getFileFromLocalStorage()}>
                          <FaArrowDown className="text-[18px]" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {currentPage === "jobList" && <JobList />}
        {currentPage === "manage" && <>
          <ManageBoard />
          <ManageByPie/>
        
        </>
        
        } 
        {currentPage === "contact" && <Contact />}
      </div>
    </div>
  );
};

export default AdminDashboard;
