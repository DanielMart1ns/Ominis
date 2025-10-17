function firstCircle(canvasId, chartType) {
  new Chart(canvasId, {
    type: chartType,
    data: {
      labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
      datasets: [
        {
          data: [860, 2140, 1060, 1060, 1070],
          backgroundColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}

function secondCircle(canvasId, chartType) {
  new Chart(canvasId, {
    type: chartType,
    data: {
      labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
      datasets: [
        {
          data: [860, 2140, 1060, 1060, 1070],
          backgroundColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}
