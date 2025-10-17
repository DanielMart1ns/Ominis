function firstBarGraph(canvasId, chartType) {
  console.log('entrou 1');

  const dados = [
    { year: 'Dia 1', count: 10 },
    { year: 'Dia 2', count: 20 },
    { year: 'Dia 3', count: 15 },
    { year: 'Dia 4', count: 25 },
    { year: 'Dia 5', count: 22 },
    { year: 'Dia 6', count: 30 },
    { year: 'Dia 7', count: 28 },
  ];

  let ctx = document.getElementById(canvasId);

  return new Chart(ctx, {
    type: chartType,
    data: {
      labels: dados.map((element) => element.year),
      datasets: [
        {
          data: dados.map((element) => element.count),
          // backgroundColor: 'rgba(60, 192, 192, 0.2)',
          borderWidth: 1,
          borderColor: '#1b6ec2',
        },
        {
          data: dados.map((element) => element.count),
          label: 'Acquisitions by year',
          backgroundColor: '#26b04f82',
          borderWidth: 1,
          borderColor: 'green',
          borderWidth: 1,
          borderRadius: 28,
          type: 'bar',
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}

function secondBarGraph(canvasId, chartType) {
  const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  new Chart(canvasId, {
    type: chartType,
    data: {
      labels: xValues,
      datasets: [
        {
          data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
          backgroundColor: 'pink',
          borderColor: 'red',
          fill: false,
        },
        {
          data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
          backgroundColor: 'lightgreen',
          borderColor: 'green',
          fill: false,
        },
        {
          data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
          backgroundColor: 'lightblue',
          borderColor: 'blue',
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}
