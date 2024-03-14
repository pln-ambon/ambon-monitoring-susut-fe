import {
  ChartOptions,
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Chart, Doughnut } from "react-chartjs-2";

interface DoughnutChartProps {
  data: ChartData<"doughnut">;
  options?: ChartOptions<"doughnut">;
}

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data, options }: DoughnutChartProps) => {
  return (
    <>
      <div>
        <Doughnut data={data} options={options}/>
      </div>
    </>
  );
};

export default DoughnutChart;
