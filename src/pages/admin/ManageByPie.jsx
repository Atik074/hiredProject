import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Legend } from "recharts";

const jobData = [
  { name: "Frontend Developer", value: 276 },
  { name: "Backend Developer", value: 368 },
  { name: "Full Stack Developer", value: 270 },
  { name: "UI/UX Designer", value: 250 },
  { name: "Product Manager", value: 293 },
  { name: "Data Scientist", value: 242 },
  { name: "Software Engineer", value: 312 },
  { name: "DevOps Engineer", value: 300 },
  { name: "Full-Time", value: 240 },
  { name: "Part-Time", value: 230 },
  { name: "Freelance", value: 220 },
  { name: "Internship", value: 310 },
];

const COLORS = [
  "#2e86de", "#ff6b6b", "#feca57", "#48dbfb", "#1dd1a1",
  "#ff9f43", "#5f27cd", "#54a0ff", "#01a3a4", "#ee5253",
  "#10ac84", "#f368e0"
];

const ManageByPie = () => {
  return (
    <div className="w-full flex flex-col items-center mt-8 px-4 mb-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-sky-600 mb-4 text-center">
        Job Categories Distribution
      </h2>
      <ResponsiveContainer width="100%" height={window.innerWidth < 640 ? 300 : 400}>
        <PieChart>
          <Pie
            dataKey="value"
            data={jobData}
            cx="50%"
            cy="50%"
            outerRadius={window.innerWidth < 640 ? 90 : window.innerWidth < 1024 ? 120 : 150}
            label={(entry) => (window.innerWidth > 768 ? entry.name : '')}
          >
            {jobData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              fontSize: window.innerWidth < 768 ? '13px' : '15px',
              marginBottom:window.innerWidth < 768 ? '-70px' : '-40px',
            }}
            
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ManageByPie;
