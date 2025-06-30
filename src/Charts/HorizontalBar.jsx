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
import { RxPadding } from "react-icons/rx";

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

// ✅ Draw dotted lines above every country label
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
    ctx.fillStyle = "white";
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

const HorizontalBarChart = () => {
  const labels = ["Italy", "Japan", "China", "Canada", "France"];

  const data = {
    labels,
    datasets: [
      {
        label: "2022",
        data: [44, 25, 60, 35, 50],
        backgroundColor: "#ffa300",
        borderColor: "#ffa300",
        borderWidth: 1,
        barThickness: 12,
        borderRadius: 8,
      },
      {
        label: "2023",
        data: [13, 30, 55, 45, 40],
        backgroundColor: "#5ad45a",
        borderColor: "#5ad45a",
        borderWidth: 1,
        borderRadius: 8,
        barThickness: 12,
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
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.x}`,
        },
      },
      datalabels: {
        color: "white",
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
          drawBorder: false,
          drawTicks: false,
          color: "#e0e0e0",
        },
        ticks: {
          color: "black", // visible on light bg
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
          color: "white", // white labels on dark bg
          font: {
            family: "Arial",
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div className=" flex justify-center mt-4 bg-slate-300 sm:w-[250px] mymob:w-[290px] mymob:h-[240px] myiphone:w-[342px] myiphone:mx-auto tablet:w-[320px] desktop:w-[430px] desktop:h-[260px]  xll:w-[450px] xll:h-[290px] biglap:w-[650px] biglap:h-[400px] mx-auto p-1 rounded-lg">
      <Bar
        data={data}
        options={options}
        plugins={[dottedLinePlugin, ChartDataLabels]}
      />
    </div>
  );
};

export default HorizontalBarChart;
