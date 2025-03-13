import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reply, setReply] = useState("");

  console.log("select", selectedMessage);
  const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

  const messages = appliedJobs.map((job, index) => ({
    id: index,
    name: job.name,
    email: job.email,
    post_name: job.post_name,
    message: job.message,
    status: "Pending",
  }));

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
  };

  const handleReplySubmit = (replyMsg) => {
    if (selectedMessage) {
      const existingData = JSON.parse(localStorage.getItem("notify")) || {};

      if (!existingData[selectedMessage.post_name]) {
        existingData[selectedMessage.post_name] = [];
      }

      existingData[selectedMessage.post_name].push(replyMsg);

      localStorage.setItem("notify", JSON.stringify(existingData));

      Swal.fire({
        title: "Reply successful",
        icon: "success",
        draggable: true,
      });

      setReply("");
      setSelectedMessage(null);
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {/* Contact List */}
      <div className="col-span-1 border rounded-lg p-4 bg-white shadow-md">
        <h2 className="text-2xl mb-4 font-semibold">Messages</h2>
        {messages.length === 0 ? (
          <p className="text-center  text-2xl  px-1 text-red-500 font-semibold ">No messages found</p>
        ) : (
          <ul>
            {messages.map((msg) => (
              <li
                key={msg.id}
                className={`p-3 mb-2 border rounded cursor-pointer transition-colors ${
                  selectedMessage?.id === msg.id
                    ? "bg-blue-300"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => handleSelectMessage(msg)}
              >
                <p className="font-medium">
                  {msg.name} - {msg.post_name}
                </p>
                <p className="text-sm text-gray-600">Status: {msg.status}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Message Details & Reply Form */}
      <div className="col-span-2 border rounded-lg p-4 bg-white shadow-md flex flex-col">
        {selectedMessage ? (
          <div>
            <h2 className="text-xl mb-2 font-semibold">Message Details</h2>
            <p>
              <strong>Name:</strong> {selectedMessage.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedMessage.email}
            </p>
            <p>
              <strong>Message:</strong>{" "}
              <span className="text-lg underline capitalize text-blue-600 font-semibold">
                {selectedMessage.message}
              </span>
            </p>

            <div className="mt-4">
              <textarea
                className="w-full border rounded p-2 mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
                placeholder="Write your reply..."
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full sm:w-auto"
                onClick={() => handleReplySubmit(reply)}
              >
                Send Reply
              </button>
            </div>
          </div>
        ) : (
          <p className="text-lg text-center text-gray-600">
            Select a message to view details and reply.
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
