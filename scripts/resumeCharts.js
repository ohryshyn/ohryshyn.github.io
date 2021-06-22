const labels = ["Before", "After"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Time spend on weekly data entry activities (in minutes)",
      data: [120, 15],
      fill: false,
      borderColor: "rgb(138, 23, 173)",
      pointBorderWidth: 5,
    },
  ],
};
const config = {
  type: "line",
  data: data,
  options: {
    plugins: { legend: { display: false } },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
          callback: function (value) {
            return value === 120 ? value : "";
          },
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        suggestedMin: 0,
        suggestedMax: 100,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 5,
          font: {
            size: 14,
          },
          callback: function (value) {
            return value === 15 ? value : "";
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 14,
          },
          color: "gray",
        },
      },
    },
  },
};
let myChart = new Chart(document.getElementById("myChart"), config);
