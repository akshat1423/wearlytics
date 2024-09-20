import React from 'react';

const HealthReports = () => (
  <div className="card">
    <h2>Health Reports</h2>
    <input type="text" placeholder="Search reports" style={{ width: '100%', padding: '10px', margin: '10px 0' }} />
    <button>Search</button>
    <button>Share with Doctor</button>
    <button>Share with Family</button>
  </div>
);

export default HealthReports;
