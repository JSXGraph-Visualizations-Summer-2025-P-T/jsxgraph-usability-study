// js/visualizations.js
const ctx = document.getElementById('interactionChart').getContext('2d');
let interactionChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: '# of Interactions',
            data: [],
            backgroundColor: '#007bff',
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true }
        }
    }
});

function updateChart() {
    const counts = {};
    interactionLog.forEach(log => {
        counts[log.type] = (counts[log.type] || 0) + 1;
    });
    interactionChart.data.labels = Object.keys(counts);
    interactionChart.data.datasets[0].data = Object.values(counts);
    interactionChart.update();
}
