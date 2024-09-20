import React from 'react';
import { FaHeartbeat, FaFireAlt, FaShoePrints, FaChartLine } from 'react-icons/fa'; // Import icons

const Insights = () => {
  // Dynamic values for health metrics
  const heartRate = 74; 
  const calories = 97;
  const steps = 2556;

return (
    <div className="card">
        <h2>
            <FaChartLine size={20} color="BLACK" /> Insights at a glance
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <FaHeartbeat size={32} color="red" />
                <p>{heartRate} BPM</p>
            </div>
            <div>
                <FaFireAlt size={32} color="orange" />
                <p>{calories} CAL</p>
            </div>
            <div>
                <FaShoePrints size={32} color="blue" />
                <p>{steps} Steps</p>
            </div>
        </div>
    </div>
);
};

export default Insights;
