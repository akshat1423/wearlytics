import React from 'react';
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faWalking, faBed } from '@fortawesome/free-solid-svg-icons';

const HealthReportDetails = () => {
  // Example data for the health report (dynamic in a real scenario)
  const sleepData = [7, 6.5, 7, 8, 7.5, 7.2, 7];
  const heartRateData = [72, 70, 75, 71, 69, 72, 74];
  const stepsData = [10000, 12000, 15000, 11000, 13000, 10000, 9000];

  // Chart data for sleep patterns
  const sleepChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Sleep Hours',
        data: sleepData,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      },
    ],
  };

  // Chart data for heart rate
  const heartRateChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Heart Rate (BPM)',
        data: heartRateData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  // Chart data for steps
  const stepsChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Steps',
        data: stepsData,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

return (
    <div className="card">
        <h2>
            <FontAwesomeIcon icon={faHeartbeat} /> Health Report Details
        </h2>
        <p>Your smartwatch data for the past week shows consistent sleep patterns with an average of 7 hours per night, stable heart rate around 72 BPM, and daily step count averaging 10,000 steps.</p>
        
        {/* Sleep Chart */}
        <h3>
            <FontAwesomeIcon icon={faBed} /> Sleep Pattern
        </h3>
        <Line data={sleepChartData} />

        {/* Heart Rate Chart */}
        <h3>
            <FontAwesomeIcon icon={faHeartbeat} /> Heart Rate Over the Week
        </h3>
        <Line data={heartRateChartData} />

        {/* Steps Chart */}
        <h3>
            <FontAwesomeIcon icon={faWalking} /> Step Count Over the Week
        </h3>
        <Line data={stepsChartData} />
    </div>
);
};

export default HealthReportDetails;
