// Button.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import './Button.css';

const Button = ({ icon, text }) => {
  return (
    <button className="carousel-button">
      <FontAwesomeIcon icon={icon} className="button-icon" />
      {text}
    </button>
  );
};

export default Button;