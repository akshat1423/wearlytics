import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';

const HealthSummary = () => (
    <div className="card">
        <h2><FaHeartbeat /> Today's Health Summary</h2>
        <p>Your smartwatch health summary indicates a stable heart rate and consistent physical activity.</p>
    </div>
);

export default HealthSummary;
