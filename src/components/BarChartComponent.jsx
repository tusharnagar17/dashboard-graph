import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  import JsonData from "../constants/eve.json";
  
 
  const getCatergoryCounts = (data) => {

    const categoryCounts = {};
  
  
    data.forEach((alert) => {
      const tempCategory = alert?.alert?.signature;
      if (categoryCounts[tempCategory]) {
        categoryCounts[tempCategory]++;
      } else {
        categoryCounts[tempCategory] = 1;
      }
    });
  
    return Object.keys(categoryCounts).map((category) => ({
      name: category,
      alert: categoryCounts[category],
    }));
  };
  
  const BarData = getCatergoryCounts(JsonData);
  
  const BarChartComponent = () => {
    console.log("BarData", BarData);
    const newData = BarData.filter(item => item.alert>7)
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={newData}
          margin={{
            right: 30,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" label={{ value: 'By Signature', position: 'insideBottomRight', offset: -10 }} /> {/* Use type "number" for the XAxis */}
          <YAxis dataKey="alert" label={{ value: 'Number of Alerts', angle: -90, position: 'insideLeft' }} /> {/* Use type "category" for the YAxis */}
          <Tooltip />
          <Bar dataKey="alert" fill="#2563eb" />
          <Legend />
          {/* <Bar dataKey="profit" fill="#8b5cf6" /> */}
        </BarChart>
      </ResponsiveContainer>
    );
  };
  
  export default BarChartComponent;
  