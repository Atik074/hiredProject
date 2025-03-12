import React, { useEffect, useState } from 'react';
import Notification from './Notification';
 

const UserDashboard = () => {
  const [notification, setNotification] = useState(null);
console.log(notification)
  // On component mount, check if there's a notification in localStorage
  useEffect(() => {
    const storedNotification = localStorage.getItem("notify");
    if (storedNotification) {
      setNotification(storedNotification); 
    }
  }, []);



  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header Section */}
      <header className="bg-sky-600 text-white p-6 rounded-lg flex justify-between items-center mb-8">
        <h1 className="text-xl font-semibold">Welcome to Your Dashboard</h1>
    
      </header>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* My Applications Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">My Applications</h2>
          <ul className="space-y-4">
            <li>Software Engineer - Applied on 03/01/2025</li>
            <li>Product Manager - Applied on 02/28/2025</li>
            <li>UX Designer - Applied on 02/15/2025</li>
          </ul>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
            View All
          </button>
        </div>

        {/* Notifications Card */}
        <Notification />

        {/* Job Offers Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Job Offers</h2>
          <p>No offers at the moment.</p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
            View All Offers
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
