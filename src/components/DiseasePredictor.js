import React from 'react';
import ChartComponent from './ChartComponent'; // Import the chart
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const DiseasePredictor = () => {
  const bloodPressureData = [120, 125, 130, 135, 140, 145]; // Example dynamic data

return (
    <div className="card">
        <h2>
            <FontAwesomeIcon icon={faHeartbeat} /> Disease Possibility Predictor
        </h2>
        <p>140/95 mmHg - You might have high blood pressure, please consult a doctor.</p>
        <ChartComponent data={bloodPressureData} /> {/* Insert the chart */}
        <button>
            <FontAwesomeIcon icon={faInfoCircle} /> More Info
        </button>
    </div>
);
};

export default DiseasePredictor;
