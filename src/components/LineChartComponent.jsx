import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import JsonData from "./../constants/eve.json";

const filterByDate = (data) => {
  const alertCountsByHour = {};

  data.forEach((alert) => {
    const hour = new Date(alert.timestamp).getHours(); // Extract the hour

    if (alertCountsByHour[hour]) {
      alertCountsByHour[hour]++;
    } else {
      alertCountsByHour[hour] = 1;
    }
  });

  return Object.keys(alertCountsByHour).map((hour) => ({
    hour: parseInt(hour, 10),
    alert: alertCountsByHour[hour],
  }));
}

const DayData = filterByDate(JsonData);
  
const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={DayData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="hour" scale="band" label={{ value: 'Hour of the Day', position: 'insideBottomRight', offset: -10 }} />
        <YAxis label={{ value: 'Number of Alerts', angle: -90, position: 'insideLeft' }}  />
        <Tooltip />
        <Legend />
        <Bar dataKey="alert" barSize={20} fill="#414141" />
        <Line type="monotone" dataKey="alert" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
