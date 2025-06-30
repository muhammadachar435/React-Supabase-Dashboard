import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels); // Register the plugin

const Radarjsx = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

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
            backgroundColor: "#b2dfdb",
            borderColor: "#3673b4",
            pointBackgroundColor: "#b2dfdb",
          },

          {
            label: "Series 2",
            data: [28, 48, 40, 19, 96, 27],
            fill: true,
            backgroundColor: "#fff59d",
            borderColor: "#1d80b3",
            pointBackgroundColor: "#fff59d",
          },
          {
            label: "Series 3",
            data: [38, 78, 10, 69, 76, 77],
            fill: true,
            backgroundColor: "#ffcc80",
            borderColor: "#cf7529",
            pointBackgroundColor: "#ffcc80",
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
            pointLabels: {
              font: {
                size: 7,
              },
              color: "#000",
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
                size: 9,
              },
              color: "#333",
              padding: 20,
            },
          },
          datalabels: {
            color: "gray",
            formatter: Math.round,
            anchor: "end",
            align: "top",
            offset: 6,
          },
          font: {
            size: 8, // 👈 Make this number smaller or bigger as needed
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative flex justify-center mt-4  sm:w-[250px] mymob:w-[290px] mymob:h-[240px] myiphone:w-[342px] myiphone:mx-auto tablet:w-[320px] tablet:h-[320px] desktop:w-[430px] desktop:h-[290px]  xll:w-[430px] xll:h-[300px] biglap:w-[650px] biglap:h-[425px] mx-auto p-1 rounded-lg">
        <canvas ref={chartRef} className="" />
        <div className="border border-dashed sm:w-60 mymob:w-[280px] myiphone:w-[336px] tablet:w-[310px] desktop:w-[416px] absolute bottom-8 text-slate-300"></div>
      </div>
    </>
  );
};

export default Radarjsx;
