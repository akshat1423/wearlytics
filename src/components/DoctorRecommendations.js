import React, { useState } from 'react';
import './DoctorRecommendations.css';
import ReactStars from 'react-rating-stars-component'; // Import the library

const doctorsList = [
  {
    name: 'Dr. Aamir Khan',
    specialization: 'Endocrinologist',
    rating: 4.5,
    review: 'Great doctor for diabetes treatment, got cured in 2 months',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Dr. Sarah Lee',
    specialization: 'Cardiologist',
    rating: 4.8,
    review: 'Helped me manage my high blood pressure, highly recommend!',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Dr. James Smith',
    specialization: 'Dermatologist',
    rating: 4.2,
    review: 'Excellent treatment for skin issues, saw improvements quickly.',
    image: 'https://via.placeholder.com/150',
  },
];

const DoctorRecommendations = () => {
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState(0);

  const handleNext = () => {
    setCurrentDoctorIndex((prevIndex) => (prevIndex + 1) % doctorsList.length);
  };

  const handlePrev = () => {
    setCurrentDoctorIndex((prevIndex) => 
      (prevIndex - 1 + doctorsList.length) % doctorsList.length
    );
  };

  const doctor = doctorsList[currentDoctorIndex];

  return (
    <div className="card doctor-recommendation">
      <h2>Doctor Recommendations</h2>
      <div className="carousel">
        <button className="carousel-button left" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="doctor-info">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="doctor-image"
          />
          <div className="doctor-details">
            <h3>{doctor.name}</h3>
            <p><strong>{doctor.specialization}</strong></p>
            <div className="doctor-rating">
              <ReactStars
                count={5} // Maximum number of stars
                value={doctor.rating} // The rating value
                size={24} // Size of the stars
                edit={false} // Prevent users from editing
                activeColor="black" // Gold color for the stars
              />
            </div>
            <p className="doctor-review">
              <em>{doctor.review}</em>
            </p>
            <div className="doctor-actions">
              <button className="schedule-btn">Schedule Appointment</button>
              <button className="chat-btn">Chat with Doctor</button>
            </div>
          </div>
        </div>
        <button className="carousel-button right" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default DoctorRecommendations;
