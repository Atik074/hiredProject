import React, { useState, useEffect } from "react";
import { IoMdNotifications } from "react-icons/io";
import Swal from "sweetalert2";

const Notification = () => {
  const [replies, setReplies] = useState({});

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("notify")) || {};
    const repliesForJobs = Object.keys(storedData).reduce((acc, postName) => {
      const repliesForPost = storedData[postName] || [];
      acc[postName] = repliesForPost[repliesForPost.length - 1] || "";
      return acc;
    }, {});

    setReplies(repliesForJobs);
  }, []);


  //handle clear notification 
  const clearNotifications = () => {
    Swal.fire({
      title: "Are you want to clear?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear it!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("notify");
        setReplies({});
        Swal.fire({
          title: "Clear!",
          text: "All notification has been deleted.",
          icon: "success"
        });
      }
    });
 
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <div className="flex gap-2">
        <IoMdNotifications className="text-3xl" />
        <h2 className="text-2xl sm:text-2xl font-semibold mb-6">Notifications</h2>
      </div>

      {Object.keys(replies).length === 0 ? (
        <p className="text-lg text-gray-600">No notifications available.</p>
      ) : (
        <ul className="space-y-4">
          {Object.keys(replies).map((postName) => (
            <li key={postName} className="text-lg sm:text-[18px] mb-4">
              Your applied jobs for the {postName} is{" "}
              <span>"{replies[postName]}"</span>
            </li>
          ))}
        </ul>
      )}


{Object.keys(replies).length > 0 && (
        <button
          onClick={clearNotifications}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition hover:border-none border-0"
        >
          Clear Notifications
        </button>
      )}
    </div>
  );
};

export default Notification;
