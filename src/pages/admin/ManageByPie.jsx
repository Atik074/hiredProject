
import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';


// Your job category data
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
  
  

const ManageByPie = () => {
   

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="value"
          data={jobData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#2e86de"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ManageByPie;
