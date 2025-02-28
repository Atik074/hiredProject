import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [users, setUsers] = useState([
        { id: 1, email: 'user1@example.com', status: 'active' },
        { id: 2, email: 'user2@example.com', status: 'active' },
        { id: 3, email: 'user3@example.com', status: 'inactive' },
    ]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    // Redirect if the admin is not logged in
    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/'); // If no admin token, redirect to login page
        }
    }, [navigate]);

    // Admin logout
    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/');
    };

    return (
        <div className="flex h-screen p-12  justify-center w-[100%] gap-12  container">
           <div className="border-2 border-red-600 w-[20%]">
             <h3>Lorem ipsum dolor sit amet.</h3>
             <h3>Lorem ipsum dolor sit amet.</h3>
             <h3>Lorem ipsum dolor sit amet.</h3>
             <h3>Lorem ipsum dolor sit amet.</h3>
           </div>
            {/* Sidebar */}
            <div
                className={`fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden ${sidebarOpen ? '' : 'hidden'}`}
                onClick={() => setSidebarOpen(false)}
            >
               
               
            </div>
            <div
                className={`lg:w-64 w-48 bg-white border border-red-500 shadow-lg p-6 fixed top-0 left-0 h-full transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>

            {/* Main Content */}
            <div className="flex-1 p-6   border-2 border-blue-600   w-[60%]">
                
                <div className="bg-white p-8 rounded-lg ">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h2>
                        <h2 className="text-3xl font-semibold text-red-800 font-thin">The Page is under contruction.please wait unit it recover..</h2>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                            Logout
                        </button>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">Manage Users</h3>
                    <div className="overflow-x-auto bg-white rounded-lg ">
                        <table className="min-w-full table-auto">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-4 py-2 text-left text-gray-600 font-medium">Email</th>
                                    <th className="px-4 py-2 text-left text-gray-600 font-medium">Status</th>
                                    <th className="px-4 py-2 text-left text-gray-600 font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id} className="border-t hover:bg-gray-50">
                                        <td className="px-4 py-3">{user.email}</td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-white ${
                                                    user.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                                                }`}
                                            >
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <button className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
