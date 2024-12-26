import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./chart.css"

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 2400, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 5300, amt: 2500 },
  { name: 'Jui', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Aou', uv: 3000, pv: 7652, amt: 2210 },
  { name: 'Sep', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Oct', uv: 2780, pv: 6200, amt: 2000 },
  { name: 'Nov', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Dec', uv: 2390, pv: 3800, amt: 2500 },
];

const Chart = ({ isMobile, className, hideInDesktop }) => {
  return (
    <div
    className={`chart-container ${className} ${
      !isMobile && hideInDesktop ? "hidden-desktop" : ""
    }`}
  >
      {!isMobile && <h2>just a graph</h2>}
      <ResponsiveContainer
        width="100%"
        height={isMobile ? 50 : 300} // Ajuste la hauteur pour mobile
      >
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          {!isMobile && <XAxis dataKey="name" />} 
          {!isMobile && <YAxis />} 
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;