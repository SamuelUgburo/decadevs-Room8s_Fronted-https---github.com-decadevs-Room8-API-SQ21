// src/components/UserDemographicSex.jsx
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Female', value: 60 },
  { name: 'Male', value: 40 },
];

const COLORS = ['#0088FE', '#00C49F'];

const UserDemographicSex = () => (
  <div className="bg-white p-4 shadow rounded">
    <h3 className="text-xl font-semibold mb-4">User Demographic (Sex)</h3>
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </div>
);

export default UserDemographicSex;
