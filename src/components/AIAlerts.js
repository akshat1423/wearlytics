import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';

const AIAlerts = () => (
    <div className="card">
        <h2><FaExclamationTriangle /> AI Alerts</h2>
        <p>You haven’t slept properly last night and walked more than 15,000 steps. You should rest!</p>
        <button>
            Chat more with Health AI <FaComments />
        </button>
    </div>
);

export default AIAlerts;
