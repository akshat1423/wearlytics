import React from 'react';
import logo from './assets/logo.png';  // Path to your logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
    <div className="header">
        <img src={logo} alt="Wearlytics Logo" className="logo" />
        <h2>
            <FontAwesomeIcon icon={faUser} /> Welcome to Wearlytics, Vanita
        </h2>
        <button className="header-button">
            <FontAwesomeIcon icon={faUser} /> Profile
        </button>
    </div>
);

export default Header;
