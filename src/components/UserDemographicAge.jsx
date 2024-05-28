// src/components/UserDemographicAge.jsx
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: '18-25', value: 50 },
  { name: '26-32', value: 30 },
  { name: '50+', value: 20 },
];

const COLORS = ['#FFBB28', '#FF8042', '#00C49F'];

const UserDemographicAge = () => (
  <div className="bg-white p-4 shadow rounded">
    <h3 className="text-xl font-semibold mb-4">User Demographic (Age)</h3>
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        outerRadius={80}
        fill="#82ca9d"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </div>
);

export default UserDemographicAge;
