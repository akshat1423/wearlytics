import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';

const HealthSummary = ({ name }) => (
    <div className="card">
        <h2><FaHeartbeat /> Today's Health Summary</h2>
        {name !== "Guest" ? (
            <p>Your smartwatch health summary indicates a stable heart rate and consistent physical activity.</p>
        ) : (
            <p>Please log in or connect your smartwatch to view your health summary.</p>
        )}
    </div>
);

export default HealthSummary;
