import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const FatChart = () => {
  const data = [
    {
      name: "Strength",
      uv: 75,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Cardio",
      uv: 30,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Fat Burning",
      uv: 75,
      pv: 9800,
      amt: 2290,
    },
  ];

  return (
    <div>
      <BarChart
        className="text-green-500 mt-12"
        width={400}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="name" padding={{ left: 40, right: 20 }} />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey="uv" fill="#8884d8" data={data} />
      </BarChart>
    </div>
  );
};

export default FatChart;
