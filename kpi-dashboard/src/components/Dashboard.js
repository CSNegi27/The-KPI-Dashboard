import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import LineChart from './LineChart';
import DateFilter from './DateFilter';
import './Dashboard.scss';

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    values: [14277, 15189, 15960, 17682, 19307, 20817, 22017],
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const fetchDataBasedOnDate = async (date) => {
   
    const response = await fetch(`your-api-endpoint?date=${date.toISOString()}`);
    const data = await response.json();
    return {
      labels: data.labels, // Adjust based on your API response
      values: data.values, // Adjust based on your API response
    };
  };

  useEffect(() => {
    const fetchChartData = async () => {
      const data = await fetchDataBasedOnDate(selectedDate);
      setChartData(data);
    };

    fetchChartData();
  }, [selectedDate]);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          <h2>Symptom Severity Trends</h2>
          <DateFilter onDateChange={handleDateChange} />
          <LineChart data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
