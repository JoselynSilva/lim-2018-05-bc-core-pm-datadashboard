let graphChart = document.getElementById('graphic-chart');

let myChart = new Chart(graphChart, {
    type: 'doughnut',
    data: {
        labels: ["Arequipa", "Mexico", "Guadalajara", "Lima", "Santiago", "Sao Paulo"],
        datasets: [
            {
                backgroundColor: ["#ffb820", "#FF009E", "#56F89A", "#FFE521", "#d6ff20", "#20ddff"],
                data: [10, 1397, 72, 2215, 1618, 2611]
            }
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Total alumnas de Laboratoria'
        }
    }
});