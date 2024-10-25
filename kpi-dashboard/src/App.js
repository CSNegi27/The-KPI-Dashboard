import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SymptomSeverityChart from './components/SymptomSeverityChart';
import MedicationAdherenceChart from './components/MedicationAdherenceChart';
import IndividualFeedbackChart from './components/IndividualFeedbackChart';

function App() {
  return (
    <Router>
      <Routes>
        {/* Dashboard Route */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Individual Routes for Charts */}
        <Route path="/symptom-severity" element={<SymptomSeverityChart />} />
        <Route path="/medication-adherence" element={<MedicationAdherenceChart />} />
        <Route path="/individual-feedback" element={<IndividualFeedbackChart />} />

        {/* Default Route (can be your login or dashboard) */}
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
