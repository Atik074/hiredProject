import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reply, setReply] = useState('');
  const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];

  
  const messages = appliedJobs.map((job, index) => ({
    id: index,
    name: job.name,
    email: job.email,
    post_name: job.post_name,
    message: job.message,
    status: 'Pending'
  }));

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
    setReply('');
  };

  //handle reply function
  const handleReplySubmit = () => {
    Swal.fire({
        title: "Reply successfull",
        icon: "success",
        draggable: true
      });
    setReply('');
    setSelectedMessage(null);
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Contact List */}
      <div className="col-span-1 border rounded-lg p-4 bg-white">
        <h2 className="text-2xl mb-4">Messages</h2>
        <ul>
          {messages.map((msg) => (
            <li
              key={msg.id}
              className={`p-2 mb-2 border rounded cursor-pointer transition-colors ${selectedMessage?.id === msg.id ? 'bg-blue-200' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => handleSelectMessage(msg)}
            >
              <p><strong>{msg.name}</strong> - {msg.post_name}</p>
              <p className="text-sm text-gray-600">Status: {msg.status}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Message Details & Reply Form */}
      <div className="col-span-2 border rounded-lg p-4 bg-white">
        {selectedMessage ? (
          <div>
            <h2 className="text-xl mb-2">Message Details</h2>
            <p><strong>Name:</strong> {selectedMessage.name}</p>
            <p><strong>Email:</strong> {selectedMessage.email}</p>
            <p><strong>Message:</strong> <span className='text-[19px] underline capitalize text-blue-600 font-semibold'>{selectedMessage.message}</span></p>
            <div className="mt-4">
              <textarea
                className="w-full border rounded p-2 mb-2"
                rows="4"
                placeholder="Write your reply..."
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={handleReplySubmit}
              >
                Send Reply
              </button>
            </div>
          </div>
        ) : (
          <p className='text-[19px]'>Select a message to view details and reply.</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
