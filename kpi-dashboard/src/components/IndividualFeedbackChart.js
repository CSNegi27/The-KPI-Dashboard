import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current.getContext('2d');

    const chart = new Chart(chartInstance, {
      type: 'pie',  // or 'doughnut'
      data: {
        labels: ['Positive', 'Neutral', 'Negative'],
        datasets: [
          {
            label: 'Feedback',
            data: [55, 30, 15],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(192, 75, 75, 0.6)', 'rgba(255, 205, 86, 0.6)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(192, 75, 75, 1)', 'rgba(255, 205, 86, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || '';
                const value = context.raw || 0;
                return `${label}: ${value}%`;
              },
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();  
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default PieChart;
