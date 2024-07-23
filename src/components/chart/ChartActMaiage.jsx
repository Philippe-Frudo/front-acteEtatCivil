import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Enregistrez les composants nécessaires pour Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            callbacks: {
                label: (tooltipItem) => {
                    const label = tooltipItem.label || '';
                    const value = tooltipItem.raw || '';
                    return `${label}: ${value}`;
                },
            },
        },
    },
};

const ChartActMaiage = () => {
    return (
        <div className="normal">
            <Pie data={data} options={options} />
        </div>
    );
};

export default ChartActMaiage;
