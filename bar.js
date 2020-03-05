var ctx = document.getElementById('bar').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Groenten', 'Water', 'Fruit'],
        datasets: [{
            label: 'Voorraad aan boord',
            data: [45, 65, 55],
                backgroundColor: [
                    '#884C98',
                    '#254093',
                    '#85C599',
              
                ],
        }]
    },


    options: {
        responsive: true,
        maintainAspectRatio:false,
        
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }

            }],
            yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true
                }
            
        }]
        }
    }
});
