import React from 'react';
import ChartComponent from './ChartComponent'; // Import the chart

const DiseasePredictor = () => {
  const bloodPressureData = [120, 125, 130, 135, 140, 145]; // Example dynamic data

  return (
    <div className="card">
      <h2>Disease Possibility Predictor</h2>
      <p>140/95 mmHg - You might have high blood pressure, please consult a doctor.</p>
      <ChartComponent data={bloodPressureData} /> {/* Insert the chart */}
    </div>
  );
};

export default DiseasePredictor;
