import BarChartComponent from "./components/BarChartComponent";
import LineChartComponent from "./components/LineChartComponent";
import PieChartComponent from "./components/PieChartComponent";
import PropsTypes from "prop-types"

const App = () => {
  
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        
       <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
        <GridItem title="Pie Chart -Sort By Category">
          <PieChartComponent />
        </GridItem>

        <GridItem title="Bar Chart -Sort By Signature">
          <BarChartComponent />
        </GridItem>

        <GridItem title="Line Chart-Sort By Hour of the day">
          <LineChartComponent />
        </GridItem>
      </div>
    </main>
  );
};

export default App;



const GridItem = ({ title, children }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-4 border border-slate-900
      bg-slate-900/50 rounded-xl h-[400px]"
    >
      <h3 className="text-2xl text-center font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
};

GridItem.propTypes = {
    title: PropsTypes.string.isRequired,
    children: PropsTypes.element.isRequired,
  };

  