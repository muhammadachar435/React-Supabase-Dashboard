import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels); // Register the plugin

const Doughjsx = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Europe", "Asia", "Africa", "America"],
        datasets: [
          {
            label: "# of Votes",
            data: [18.5, 6.3, 31.3, 43.5],
            borderWidth: 1,
            backgroundColor: [
              "#ab47bc", // Purple
              "#ef5350", // Red
              "#ffee58", // Yellow
              "#81d4fa", // Light Blue
            ],
            borderColor: ["#b968c7", "#ee534f", "#ff9700", "#42a5f6"],
          },
        ],
      },
      options: {
        responsive: true,
        layout: {
          padding: {
            bottom: 10,
          },
        },
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              boxWidth: 10,
              boxHeight: 10,
              padding: 20,
              font: {
                size: 7,
                // weight: "bold",
              },
              generateLabels: (chart) => {
                const data = chart.data;
                const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                return data.labels.map((label, i) => {
                  const value = data.datasets[0].data[i];
                  const percentage = ((value / total) * 100).toFixed(1);
                  return {
                    text: `${label}: ${value} (${percentage}%)`,
                    fillStyle: data.datasets[0].backgroundColor[i],
                    strokeStyle: data.datasets[0].borderColor[i],
                    lineWidth: 0,
                    pointStyle: "circle",
                    index: i,
                  };
                });
              },
            },
          },
          datalabels: {
            color: "white",
            font: {
              weight: "bold",
              size: 12,
            },
            formatter: (value) => value,
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
    <div className="flex justify-center mt-4 sm:w-[250px] sm:h-[250px] mymob:w-[290px] mymob:h-[270px] myiphone:w-[342px] myiphone:mx-auto tablet:w-[325px] tablet:h-[320px] desktop:w-[430px] desktop:h-[290px]  xll:w-[450px] xll:h-[305px] biglap:w-[650px] biglap:h-[400px] mx-auto p-1 rounded-lg">
      <canvas ref={chartRef} />
    </div>
  );
};

export default Doughjsx;
