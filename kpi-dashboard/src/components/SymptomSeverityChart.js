import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Symptom Severity',
      data: [14000, 15100, 16300, 17600, 18900, 20200, 22000],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: false,
      min: 14000,
    },
  },
};

export default function SymptomSeverityChart() {
  return (
    <div>
      <h2>Symptom Severity Trends</h2>
      <Line data={data} options={options} />
    </div>
  );
}
