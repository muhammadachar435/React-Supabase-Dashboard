import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels); // Register the plugin

const Radarjsx = ({ darkMode }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const legendLabelColor = darkMode ? "white" : "black";

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "radar",
      data: {
        labels: [
          "English",
          "Math",
          "Chinese",
          "History",
          "Physics",
          "Geography",
        ],
        datasets: [
          {
            label: "Series 1",
            data: [35, 59, 9, 80, 46, 55],
            fill: true,
            borderColor: "#0f73d9",
            pointBackgroundColor: "#0f73d9",
          },
          {
            label: "Series 2",
            data: [28, 48, 40, 19, 96, 27],
            fill: true,
            borderColor: "#e56f0d",
            pointBackgroundColor: "#e56f0d",
          },
          {
            label: "Series 3",
            data: [38, 78, 10, 69, 76, 77],
            fill: true,
            borderColor: "#0389c9",
            pointBackgroundColor: "#0389c9",
          },
        ],
      },
      options: {
        responsive: true,
        elements: {
          line: { borderWidth: 2 },
        },
        scales: {
          r: {
            beginAtZero: true,
            suggestedMin: 0,
            suggestedMax: 100,
            grid: {
              color: "#ccc",
            },
            pointLabels: {
              font: {
                size: 9,
              },
              color: "slategray",
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              font: {
                size: 10,
              },
              color: legendLabelColor, // dynamic based on darkMode prop
              padding: 20,
            },
          },
          tooltip: {
            backgroundColor: "rgba(255, 255, 255, 0.5)", // white bg with opacity
            titleColor: "#000", // black title
            bodyColor: "#000", // black body
            borderColor: "#ccc",
            borderWidth: 1,
            callbacks: {
              label: function (context) {
                const label = context.dataset.label || "";
                const value = context.parsed.r;
                const index = context.dataIndex;

                // Total from all datasets at the same point
                const chart = context.chart;
                const total = chart.data.datasets.reduce((sum, dataset) => {
                  const val = dataset.data[index];
                  return sum + (typeof val === "number" ? val : 0);
                }, 0);

                const percentage = total
                  ? ((value / total) * 100).toFixed(1)
                  : "0.0";

                return `${label}: ${percentage}%`;
              },
            },
          },
          datalabels: {
            color: "gray",
            formatter: Math.round,
            anchor: "end",
            align: "top",
            offset: 6,
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, [darkMode]);

  return (
    <div className="relative flex justify-center mt-4 sm:w-[250px] mymob:w-[290px] mymob:h-[240px] myiphone:w-[342px] myiphone:mx-auto tablet:w-[320px] tablet:h-[320px] tablet:mt-8 desktop:w-[440px] desktop:h-[350px]  xll:w-[360px] xll:h-auto biglap:w-[650px] biglap:h-[425px] mx-auto p-1 rounded-lg">
      <canvas ref={chartRef} />
      <div className="border border-dashed sm:w-60 mymob:w-[280px] myiphone:w-[336px] tablet:w-[310px] desktop:w-[416px] absolute bottom-8 text-slate-300"></div>
    </div>
  );
};

export default Radarjsx;
