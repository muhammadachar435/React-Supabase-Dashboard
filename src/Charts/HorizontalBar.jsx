import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

// Register chart components and plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

// Draw dotted lines above every country label
const dottedLinePlugin = {
  id: "dottedLinesAll",
  afterDatasetsDraw(chart) {
    const {
      ctx,
      chartArea: { top, bottom, left, right },
      scales: { y },
    } = chart;

    const labels = y.getLabels();
    const tickHeight = (bottom - top) / labels.length;

    ctx.save();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = "#999";

    labels.forEach((_, index) => {
      const yPosition = y.getPixelForTick(index) - tickHeight / 2;
      ctx.beginPath();
      ctx.moveTo(left, yPosition);
      ctx.lineTo(right, yPosition);
      ctx.stroke();
    });

    const lastY = y.getPixelForTick(labels.length - 1) + tickHeight / 2;
    ctx.beginPath();
    ctx.moveTo(left, lastY);
    ctx.lineTo(right, lastY);
    ctx.stroke();

    ctx.restore();
  },
};

const HorizontalBarChart = ({ darkMode }) => {
  const labels = ["Italy", "Japan", "China", "Canada", "France"];

  const data = {
    labels,
    datasets: [
      {
        label: "2022",
        data: [44, 25, 60, 35, 50],
        backgroundColor: "#1564be",
        borderColor: "#1564be",
        borderWidth: 1,
        barThickness: 12,
        datalabels: {
          color: darkMode ? "white" : "white", // ✅ Dark: white, Light: white for 2022
        },
      },
      {
        label: "2023",
        data: [13, 30, 55, 45, 40],
        backgroundColor: "rgba(173, 216, 230, 1)",
        borderColor: "rgba(135, 206, 255, 1)",
        borderWidth: 1,
        barThickness: 12,
        datalabels: {
          color: darkMode ? "white" : "black", // ✅ Dark: white, Light: black for 2023
        },
      },
    ],
  };

  const options = {
    indexAxis: "y",
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      tooltip: {
        backgroundColor: darkMode ? "#333" : "rgba(255, 255, 255, 0.5)",
        titleColor: darkMode ? "#fff" : "#000",
        bodyColor: darkMode ? "#fff" : "#000",
        borderColor: "#ccc",
        borderWidth: 1,
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || "";
            const currentValue = context.parsed.x;
            const dataIndex = context.dataIndex;

            const chart = context.chart;
            const total = chart.data.datasets.reduce((sum, dataset) => {
              const value = dataset.data[dataIndex];
              return sum + (typeof value === "number" ? value : 0);
            }, 0);

            const percentage = total
              ? ((currentValue / total) * 100).toFixed(1)
              : "0.0";

            return `${label}: ${percentage}%`;
          },
        },
      },
      datalabels: {
        font: {
          weight: "bold",
        },
        formatter: (value) => value,
        anchor: "end",
        align: "left",
        offset: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false,
          color: "#e0e0e0",
        },
        ticks: {
          color: "slategray",
        },
      },
      y: {
        grid: {
          drawBorder: false,
          drawTicks: false,
          color: "transparent",
        },
        ticks: {
          display: true,
          color: "slategray",
          font: {
            family: "Arial",
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center mt-4 sm:w-[250px] mymob:w-[290px] mymob:h-[240px] myiphone:w-[342px] myiphone:mx-auto tablet:w-[320px] desktop:w-[430px] desktop:h-[260px] xll:w-[450px] xll:h-[290px] biglap:w-[650px] biglap:h-[400px] mx-auto p-1 rounded-lg">
      <Bar
        data={data}
        options={options}
        plugins={[dottedLinePlugin, ChartDataLabels]}
      />
    </div>
  );
};

export default HorizontalBarChart;
