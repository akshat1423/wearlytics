import React from 'react';
import './SmartwatchCard.css';
import smartwatchImage from './assets/watch.png'; 

const SmartwatchConnectedCard = ({ name }) => {
  return (
    <div className="smartwatch-connected-card">
      <img
        src={smartwatchImage}
        alt="Smartwatch"
        className="smartwatch-image"
      />
      <div className="smartwatch-info">
        {name !== "Guest" ? (
          <>
            <h3>Connected</h3>
            <p>Data Being Synced</p>
            <p>Health AI Active</p>
          </>
        ) : (
          <>
            <h3 className="disconnected">Disconnected</h3> {/* Apply the disconnected class */}
            <p>Please connect your smartwatch to sync data.</p>
            <p>Health AI Inactive</p>
          </>
        )}
        <p className='disclaimer'>*This website is optimized for </p>
        <p className='disclaimer'>smartwatch users in mobile view</p>
      </div>
    </div>
  );
};

export default SmartwatchConnectedCard;
