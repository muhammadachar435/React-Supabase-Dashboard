import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels); // Register plugin here

const Barchart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Speed", "Strength", "Agility", "Stamina", "Skill"],
        datasets: [
          {
            label: "Team A",
            data: [65, 59, 5, 8, 56],
            backgroundColor: "#1664c0",
            borderColor: "#1664c0",
            borderWidth: 1,
            barThickness: 10,
            borderRadius: 20,
          },
          {
            label: "Team B",
            data: [45, 59, 60, 9, 6],
            backgroundColor: "#84c5fa",
            borderColor: "#84c5fa",
            borderWidth: 1,
            barThickness: 10,
            borderRadius: 20,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              boxWidth: 4, // Increase width of the point
              boxHeight: 4, // Optional, improves symmetry in newer Chart.js versions
              padding: 15,
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || "";
                if (label) {
                  label += ": ";
                }
                if (context.parsed.y !== null) {
                  label += Math.round(context.parsed.y);
                }
                return label;
              },
            },
          },
          datalabels: {
            display: false,
            anchor: "end",
            align: "start",
            color: "#000",
            font: {
              weight: "bold",
            },
            formatter: Math.round,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 70,
            title: {
              display: true,
              text: "Performance",
            },
            ticks: {
              stepSize: 10,
            },
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
    <div className="flex justify-center mt-4  sm:w-[250px] sm:h-[200px] mymob:w-[290px] mymob:h-[240px] myiphone:w-[342px] myiphone:mx-auto tablet:w-[335px] tablet:h-[295px] desktop:w-[430px] desktop:h-[265px]  xll:w-[450px] xll:h-[275px] biglap:w-[650px] biglap:h-[400px] mx-auto p-1 rounded-lg">
      <canvas
        ref={chartRef}
        className="sm:w-[250px] sm:h-[230px]  tablet:w-[330px] tablet:h-auto desktop:w-[400px] desktop:h-auto biglap:w-[650px] biglap:h-auto"
      />
    </div>
  );
};

export default Barchart;
