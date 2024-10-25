import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="path_to_profile_image" alt="User" />
        <h2>Chaitanya</h2>
      </div>
      <nav>
        <ul>
          {/* Link to Symptom Severity Trends */}
          <li>
            <Link to="/symptom-severity">Symptom Severity Trends</Link>
          </li>

          {/* Link to Medication Adherence */}
          <li>
            <Link to="/medication-adherence">Medication Adherence</Link>
          </li>

          {/* Link to Individual Feedback */}
          <li>
            <Link to="/individual-feedback">Individual Feedback</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;