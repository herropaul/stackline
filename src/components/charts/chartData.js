import { useSelector } from "react-redux";

export const lineChartDataOverallRevenue = [
    {
      name: "Retail Sales",
      data: [70, 75, 69, 80, 55, 59, 67, 65, 59]
    },
    {
      name: "Wholesale Sales",
      data: [60, 55, 75, 77, 68, 69, 57, 50, 61]
    }
  ];

export const lineChartOptionsOverallRevenue = {
    chart: {
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true,
        top: 13,
        left: 0,
        blur: 10,
        opacity: 0.1,
        color: "#4318FF"
      }
    },
    colors: ["#4318FF", "#39B8FF"],
    markers: {
      size: 0,
      colors: "white",
      strokeColors: "#7551FF",
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      showNullDataPoints: true
    },
    tooltip: {
      theme: "dark"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      type: "line"
    },
    xaxis: {
      type: "numeric",
      categories: ["JAN", "FEB", "MAR", "APR", "MAY",
      "JUNE", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500"
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    legend: {
      show: false
    },
    grid: {
      show: false,
      column: {
        color: ["#7551FF", "#39B8FF"],
        opacity: 0.5
      }
    },
    color: ["#7551FF", "#39B8FF"]
  };