var ctx = document.getElementById('line').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1 jaar', '2 jaar', '3 jaar', '4 jaar'],
        datasets: [{
            label: 'Afstand afgelegd x  10000',
            data: [65, 66, 70, 85],
                backgroundColor:    [
                    '#254093',
                    

                ],
                borderColor:    [
                    '#884C98',
                    '#884C98',
                    '#884C98',
                    '#884C98',
                ],
                borderWidth: 5
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
            
        }]
        }
    }
});
