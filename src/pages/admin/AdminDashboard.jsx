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
    let jobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

    jobs.splice(index, 1);

    localStorage.setItem("appliedJobs", JSON.stringify(jobs));

    setAppliedJobs(jobs);
  };

  return (
    <div className="container flex justify-center  mx-auto gap-8 py-24 ">
     
      <div className=" w-[20%] bg-gray-100 rounded shadow-md    p-4">
        <ul className="mx-4 mt-4">
          <li className="list-none mb-2 ">
            <Link
              onClick={() => setCurrentPage("dashboard")}
              className="text-[19px]  text-black  flex items-center  gap-2"
            >
              < MdDashboard/>
              Dashboard
            </Link>
          </li>
        
         
          <li className="list-none mb-2">
            <Link
              onClick={() => setCurrentPage("jobList")}
              className="text-[19px] mb-2 text-black flex items-center  gap-2"
            >
              <IoIosListBox/>
              Job List
            </Link>
          </li>
          <li className="list-none mb-2">
            <Link
              onClick={() => setCurrentPage("manage")}
              className="text-[19px] mb-2 text-black flex items-center  gap-2"
            >
              <IoIosSettings/>
             Manage
            </Link>
          </li>
      
          <li className="list-none mb-2">
            <Link
              onClick={() => setCurrentPage("contact")}
              className="text-[19px] mb-2 text-black flex items-center  gap-2"
            >
              <RiContactsBook3Fill/>
            Contact
            </Link>
          </li>
          <li className="list-none mb-6">
            <Link
               to="/"
              className="text-[19px]  text-black flex items-center  gap-2"
            >
              <FaHome/>
             Home
            </Link>
          </li>
          <li  
          onClick={handleLogout}
           className="list-none"
           >
            <Link
              
              className="py-2 px-4 rounded-md  text-left focus:outline-none focus:ring-2 focus:ring-red-400  text-[19px] mb-2 text-black border-2"
             
            >
              Logout
            </Link>
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
      <div className="flex-1  w-[60%] bg-gray-100  shadow-md rounded-md">
        <div className="bg-white m-8">
        

          {/* Conditional Rendering based on currentPage */}
          {currentPage === "dashboard" && (
            <div className="p-6 rounded-md">
              <div className="flex justify-between  items-center mb-6 ">
          
          </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                User Applied Jobs
              </h3>
            <div className="overflow-x-auto bg-white rounded-lg">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="py-4 px-3 text-left text-gray-600 font-medium text-[18px]">
                        Name
                      </th>
                      <th className="py-4 px-2  text-left text-gray-600 font-medium text-[18px]">
                        Email
                      </th>
                      <th className="py-4 px-2  text-left text-gray-600 font-medium text-[18px]">
                        Post Name
                      </th>
                      <th className="py-4 px-2  text-left text-gray-600 font-medium text-[18px]">
                        Company Name
                      </th>
                      <th className="py-4   text-left text-gray-600 font-medium text-[18px]">
                        Actions
                      </th>
                      <th className="py-4 px-3  text-left text-gray-600 font-medium text-[18px]">
                        Resume
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {appliedJobs.map((job, index) => (
                      <tr key={index}>
                        <td className="py-3 px-2">{job.name}</td>
                        <td className="py-3 px-2">{job.email}</td>
                        <td className="py-3 px-2">{job.post_name}</td>
                        <td className="py-3 px-2">{job.title}</td>
                        <td className="py-3 px-2">
                          <button
                            className="px-3 text-red-600"
                            onClick={() => handleRemoveJob(index)}
                          >
                            Remove
                          </button>
                        </td>
                        <td >
                        <button onClick={()=>getFileFromLocalStorage()} className="px-6 ml-4">
                          <FaArrowDown className="text-[18px]"/>
                          
                        </button>
                        </td>

                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Add content for other pages like 'Job List' and 'Settings' */}
          {currentPage === "jobList" && (
            <div className="p-6 rounded-md">
             <JobList/>
            </div>
          )}

          {currentPage === "manage" && (
            <div>
              <h3 className="text-2xl text-sky-600 text-center  font-bold  p-6">Over All Summery Of The Year</h3>
               <ManageBoard/>
               
             <ManageByPie/>
            </div>
          )}
            {currentPage === "contact" && (
            <div>
             <Contact/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
