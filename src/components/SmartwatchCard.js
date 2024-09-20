import React from 'react';
import './SmartwatchCard.css';
import smartwatchImage from './assets/watch.png'; 

const SmartwatchConnectedCard = () => {
  return (
    <div className="smartwatch-connected-card">
      <img
        src={smartwatchImage}
        alt="Smartwatch"
        className="smartwatch-image"
      />
      <div className="smartwatch-info">
        <h3>Connected</h3>
        <p>Data Being Synced</p>
        <p>Health AI Active</p>
        <p className='disclaimer'>*This website is optimised for </p>
        <p className='disclaimer'>smartwatch users in mobile view</p>
      </div>
    </div>
  );
};

export default SmartwatchConnectedCard;
