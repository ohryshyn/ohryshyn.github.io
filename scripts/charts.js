const redColor = "rgba(206, 40, 80)";
const grayColor = "rgba(64, 64, 64)";

// MFG Sales by Province -- Horizontal Bar Chart

let ctx3 = document.getElementById("horizontal-bar").getContext("2d");
let horizontalChart = new Chart(ctx3, {
  type: "horizontalBar",
  data: {
    labels: ["NL", "PE", "NS", "NB", "QC", "ON", "MA", "SK", "AB", "BC"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: redColor,
        data: [-1.4, -3.8, -6.2, 5, 0.1, -0.8, -1.8, 0.8, 1.4, -4.2],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Predicted world population (millions) in 2050",
    },
    scales: {
      xAxes: [
        {
          display: false, //this will remove all the x-axis grid lines
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)", //this will color gridlines in white
          },
        },
      ],
    },
  },
});

// Unfilled Orders -- Two Lines Charts
let ctx5 = document.getElementById("dline-orders").getContext("2d");
let doubleLineChart = new Chart(ctx5, {
  type: "line",
  data: {
    labels: [
      "Nov-15",
      "May-16",
      "Nov-16",
      "May-17",
      "Nov-17",
      "May-18",
      "Nov-18",
      "May-19",
      "Nov-19",
      "May-20",
      "Nov-20",
    ],
    datasets: [
      {
        data: Array.from({ length: 11 }, () => Math.floor(Math.random() * 80)),
        label: "Total",
        borderColor: redColor,
        fill: false,
      },
      {
        data: Array.from({ length: 11 }, () => Math.floor(Math.random() * 80)),
        label: "Total, excluding aerospace",
        borderColor: grayColor,
        fill: false,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Unfilled Orders",
    },
  },
});

// Capacity Utilization Rate -- Line Chart
let ctx6 = document.getElementById("util-chart").getContext("2d");
let myChart = new Chart(ctx6, {
  type: "line",
  data: {
    labels: [
      "Nov-18",
      "Feb-19",
      "May-19",
      "Aug-19",
      "Nov-19",
      "Feb-20",
      "May-20",
      "Aug-20",
      "Nov-20",
    ],
    datasets: [
      {
        label: "Capacity Utilization Rate",
        data: Array.from({ length: 9 }, () => Math.floor(Math.random() * 80)),
        borderColor: redColor,
        fill: false,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Capacity Utilization Rate",
    },
  },
});
