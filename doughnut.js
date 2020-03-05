var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Brandstof', 'zuurstof'],
        datasets: [{
            label: 'Voertuig informatie',
            data: [52, 45],
                backgroundColor: [
                    '#884C98',
                    '#254093',

                ],
        }]
    },


    options: {
        responsive: true,
        maintainAspectRatio:false,
        
        scales: {
            xAxes: [{
                display: false,
                ticks: {
                    beginAtZero: true
                }

            }],
            yAxes: [{
                display: false,
            
        }]
        }
    }
});
