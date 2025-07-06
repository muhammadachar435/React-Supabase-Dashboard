import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels); // Register the plugin

const Doughjsx = ({ darkMode }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Define colors based on darkMode
    const backgroundColor = darkMode
      ? ["slategray", "red", "yellow", "lightgreen"]
      : ["#b968c7", "#ee534f", "#ff9700", "#42a5f6"];

    const borderColor = darkMode
      ? ["slategray", "red", "yellow", "lightgreen"]
      : ["#b968c7", "#ee534f", "#ff9700", "#42a5f6"];

    // Calculate dynamic font size based on window width
    const getResponsiveFontSize = () => {
      const width = window.innerWidth;
      if (width < 400) return 6; // very small devices
      if (width < 768) return 7; // mobiles
      if (width < 1024) return 8; // tablets
      return 9; // desktops
    };

    chartInstanceRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Europe", "Asia", "Africa", "America"],
        datasets: [
          {
            label: "# of Votes",
            data: [18.5, 6.3, 31.3, 43.5],
            borderWidth: 1,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
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
                size: getResponsiveFontSize(),
              },
              generateLabels: (chart) => {
                const data = chart.data;
                const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                return data.labels.map((label, i) => {
                  const value = data.datasets[0].data[i];
                  const percentage = ((value / total) * 100).toFixed(1);

                  // Set specific label text colors for dark mode
                  let fontColor = darkMode
                    ? ["Europe", "Asia", "America", "Africa"].includes(label)
                      ? "white"
                      : "black"
                    : "black";

                  return {
                    text: `${label}: ${value} (${percentage}%)`,
                    fillStyle: data.datasets[0].backgroundColor[i],
                    strokeStyle: data.datasets[0].borderColor[i],
                    lineWidth: 0,
                    pointStyle: "circle",
                    index: i,
                    fontColor: fontColor, // ⚠️ custom property to access below
                  };
                });
              },
              color: (ctx) => {
                // ctx is {chart, dataset, dataIndex}
                const labelItem = ctx.chart.legend.legendItems[ctx.dataIndex];
                return labelItem.fontColor || (darkMode ? "white" : "black");
              },
            },
          },
          tooltip: {
            backgroundColor: "rgba(0,0,0,0)", // Fully transparent background
            titleColor: "#000",
            bodyColor: "#000",
            borderColor: "#ccc",
            borderWidth: 1,
            callbacks: {
              label: function (context) {
                const dataIndex = context.dataIndex;
                const chart = context.chart;
                const dataset = chart.data.datasets[0];
                const total = dataset.data.reduce((a, b) => a + b, 0);
                const value = dataset.data[dataIndex];
                const percentage = total
                  ? ((value / total) * 100).toFixed(1)
                  : "0.0";
                return `${percentage}%`;
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
  }, [darkMode]);

  return (
    <div className="flex justify-center mt-4 sm:w-[250px] sm:h-[250px] mymob:w-[290px] mymob:h-[270px] myiphone:w-[342px] myiphone:mx-auto tablet:w-[325px] tablet:h-[320px] desktop:w-[430px] desktop:h-[290px] xll:w-[450px] xll:h-[305px] biglap:w-[650px] biglap:h-[400px] mx-auto p-1 rounded-lg">
      <canvas ref={chartRef} />
    </div>
  );
};

export default Doughjsx;
