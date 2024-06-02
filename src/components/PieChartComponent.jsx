import  { useEffect, useState } from "react";
import { Tooltip, Pie, Cell, PieChart, ResponsiveContainer } from "recharts";
import JsonData from "./../constants/eve.json";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const FilterByCategory = (array) => {
  const CategoryObj = {};

  array.forEach((temp) => {
    const category = temp.alert && temp.alert.category; // Add a check for temp.alert
    if (category) {
      if (CategoryObj[category]) {
        CategoryObj[category]++;
      } else {
        CategoryObj[category] = 1;
      }
    }
  });

  return Object.keys(CategoryObj).map((item) => ({
    name: item,
    count: CategoryObj[item],
  }));
};

const PieChartComponent = () => {
  const [PieData, setPieData] = useState([]);
  
  useEffect(() => {
    const tempData = FilterByCategory(JsonData);
    setPieData(tempData);
  }, []);
  
  console.log("PieData", PieData);

  if (!PieData.length) {
    return null;
  }

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <ResponsiveContainer width="100%" height="50%">
      <PieChart width={400} height={400}>
          <Pie
            data={PieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="count"
          >
            {PieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        
      </ResponsiveContainer>
      <div style={{ padding: '20px' }}>
        <h3>Category List</h3>
        <ul>
          {PieData.map((entry, index) => (
            <li key={`list-item-${index}`} style={{ color: COLORS[index % COLORS.length] }}>
              {entry.name}: {entry.count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PieChartComponent;
