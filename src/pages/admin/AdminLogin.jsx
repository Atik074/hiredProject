import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const generalUser = localStorage.getItem('user');
  console.log("token", generalUser);

  const adminInfo = {
    email: "admin@gmail.com",
    password: "admin123",
  };
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // handle admin login info
  const handleAdminLogin = (e) => {
    e.preventDefault();

    if (
      adminInfo.email === "admin@gmail.com" &&
      adminInfo.password === "admin123"
    ) {
      localStorage.setItem("adminToken", "jwt-token");
      navigate("/admin-dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Admin Login</h2>
        <form onSubmit={handleAdminLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={adminInfo.email}
              readOnly
              className="w-full p-3 border border-sky-500 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 font-medium mb-2">Password:</label>
            <input
              type="password"
              id="password"
              value={adminInfo.password}
              readOnly
              className="w-full p-3 border border-sky-500 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-sky-500 text-white font-semibold rounded-md hover:bg-sky-600 focus:outline-none text-xl focus:ring-2 focus:ring-sky-500"
          >
            Login
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default AdminLogin;
