const redColor = "rgba(209, 33, 21, 0.95)";
const grayColor = "rgba(64, 64, 64)";
const getRandomDataArr = (numberOfPoints, maxLimit) => {
  return Array.from({ length: numberOfPoints }, () =>
    Math.floor(Math.random() * maxLimit)
  );
};

// Total mnf sales -- Combo Chart -- Line and Bar
let ctx1 = document.getElementById("combo-chart").getContext("2d");
let comboChart = new Chart(ctx1, {
  type: "bar",
  data: {
    labels: [
      "Nov-18",
      "Dec-18",
      "Jan-19",
      "Feb-19",
      "Mar-19",
      "Apr-19",
      "May-19",
      "Jun-19",
      "Jul-19",
      "Aug-19",
      "Sep-19",
      "Oct-19",
      "Nov-19",
      "Dec-19",
      "Jan-20",
      "Feb-20",
      "Mar-20",
      "Apr-20",
      "May-20",
      "Jun-20",
      "Jul-20",
      "Aug-20",
      "Sep-20",
      "Oct-20",
      "Nov-20",
    ],
    datasets: [
      {
        label: "Y/Y growth (RHS)",
        borderColor: grayColor,
        data: getRandomDataArr(25, 20),
        type: "line", // changes this ds to line chart
        fill: false,
        order: 1,
      },
      {
        label: "Total (LHS)",
        data: getRandomDataArr(25, 70),
        backgroundColor: redColor,
        fill: false,
        order: 2,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Total Manufacturing Sales",
    },
  },
});

// MFG Sales by Industry -- Horizontal Bar Chart
let ctx2 = document.getElementById("horizontal-chart1").getContext("2d");
let horizontalChart = new Chart(ctx2, {
  type: "horizontalBar",
  data: {
    labels: [
      "Food products",
      "Wood products",
      "Paper products",
      "Petroleum and coal refining",
      "Chemical products",
      "Plastics and rubber products",
      "Primary metals",
      "Fabricated metals",
      "Machinery",
      "Motor vehicle and parts",
      "Aerospace",
      "All others",
    ],
    datasets: [
      {
        label: "Canada (m/m growth, seasonally adjusted)",
        backgroundColor: redColor,
        data: [0.9, -4.1, -3.8, 5.3, 1.7, 0.7, 1.3, 3.4, 1.1, -5.3, -23.8, 1.4],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "MFG. Sales by Industry, November 2020",
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

// MFG Sales by Province -- Horizontal Bar Chart
let ctx3 = document.getElementById("horizontal-bar").getContext("2d");
let horizontalBarChart = new Chart(ctx3, {
  type: "horizontalBar",
  data: {
    labels: ["NL", "PE", "NS", "NB", "QC", "ON", "MA", "SK", "AB", "BC"],
    datasets: [
      {
        label: "(seasonally adjusted, m/m growth)",
        backgroundColor: redColor,
        data: [-1.4, -3.8, -6.2, 5, 0.1, -0.8, -1.8, 0.8, 1.4, -4.2],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "MFG. Sales by Province, November 2020",
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

// Inventory-to-Sales Ratio -- Line Chart
let ctx4 = document.getElementById("its-line-chart").getContext("2d");
let itsChart = new Chart(ctx4, {
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
        label: "Canada (manufacturing sector, seasonally adjusted)",
        data: getRandomDataArr(11, 30),
        borderColor: redColor,
        fill: false,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Inventory-to-Sales Ratio",
    },
    scales: {
      xAxes: [
        {
          display: false, //this will remove all the x-axis grid lines
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
