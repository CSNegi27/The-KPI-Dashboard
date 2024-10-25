// DateFilter.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateFilter.scss';

const DateFilter = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
    onDateChange(date);
  };

  return (
    <div className="date-filter">
      <DatePicker selected={startDate} onChange={handleDateChange} />
    </div>
  );
};

export default DateFilter;
