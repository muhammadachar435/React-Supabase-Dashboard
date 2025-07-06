import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels); // Register plugin

const Barchart = ({ darkMode }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy existing chart instance before creating new one
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const gridColor = "slategray";
    const labelColor = darkMode ? "white" : "slategray";

    // Bar colors based on dark mode
    const teamAColor = darkMode ? "#44a5f4" : "#1564c0";
    const teamBColor = darkMode ? "#9ca7ad" : "#88c6f9";

    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        datasets: [
          {
            label: "Team A",
            data: [65, 59, 45, 50, 56, 40, 35, 48, 36],
            backgroundColor: teamAColor,
            borderColor: teamAColor,
            borderWidth: 1,
            barThickness: 10,
            borderRadius: 20,
          },
          {
            label: "Team B",
            data: [45, 59, 60, 29, 46, 55, 33, 50, 25],
            backgroundColor: teamBColor,
            borderColor: teamBColor,
            borderWidth: 1,
            barThickness: 10,
            borderRadius: 20,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // allows resizing
        devicePixelRatio: window.devicePixelRatio || 1, // HD clarity
        plugins: {
          legend: {
            position: "top",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              boxWidth: 4,
              boxHeight: 4,
              padding: 15,
              color: labelColor,
            },
          },
          tooltip: {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            titleColor: "#000",
            bodyColor: "#000",
            borderColor: "#ccc",
            borderWidth: 1,
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || "";
                if (label) label += ": ";

                const dataIndex = context.dataIndex;
                const chart = context.chart;

                const total = chart.data.datasets.reduce((sum, dataset) => {
                  const val = dataset.data[dataIndex];
                  return sum + (typeof val === "number" ? val : 0);
                }, 0);

                const currentValue = context.parsed.y;
                const percentage = total
                  ? ((currentValue / total) * 100).toFixed(1)
                  : "0.0";

                label += `${percentage}%`;
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
          x: {
            grid: {
              display: false, // hide vertical grid lines (x-axis)
              drawBorder: false,
              drawTicks: false,
            },
            ticks: {
              color: labelColor,
            },
          },
          y: {
            beginAtZero: true,
            max: 80,
            grid: {
              color: gridColor, // horizontal grid line color
              display: true,
              drawBorder: false, // disable here, define below
              drawTicks: false,
              borderDash: [4, 4], // dotted grid lines
              lineWidth: 1,
              drawOnChartArea: true,
            },
            border: {
              display: true, // show y-axis border line
              color: gridColor,
              width: 1,
              dash: [], // solid line (empty array)
            },
            title: {
              display: true,
              text: "Performance",
              color: labelColor,
            },
            ticks: {
              stepSize: 20,
              color: labelColor,
            },
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    // Cleanup on unmount
    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, [darkMode]);

  return (
    <div className="flex justify-center mt-4 w-full max-w-[400px] h-[250px] sm:max-w-[450px] sm:h-[280px] tablet:max-w-[500px] tablet:h-[320px] desktop:max-w-[600px] desktop:h-[350px] biglap:h-[360px] mx-auto p-1 rounded-lg">
      <canvas ref={chartRef} />
    </div>
  );
};

export default Barchart;
