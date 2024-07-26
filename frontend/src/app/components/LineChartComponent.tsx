import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineChartComponentProps {
  data: { timestamp: string; value: number }[];
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => new Date(item.timestamp).toLocaleDateString("en-GB")),
    datasets: [
      {
        label: 'Equipment Values',
        data: data.map((item) => item.value),
        borderColor: 'rgba(0, 128, 255, 1)',
        backgroundColor: 'rgba(75, 64, 136, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Equipment Values Over Time',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChartComponent;
