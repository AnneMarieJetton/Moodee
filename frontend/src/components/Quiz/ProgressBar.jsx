import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Quiz.css';

const ProgressBar = ({ currentQuestion }) => {
  // Array to hold the dots
  const dots = Array(5).fill(null);

  return (
    <div className="ProgressBar">
      {/* Map through the dots array to render each dot */}
      {dots.map((_, index) => (
        <div
          key={index}
          className={`dot ${currentQuestion === index ? 'highlighted' : ''}`}
        ></div>
      ))}
    </div>
  );
};

ProgressBar.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
};

export default ProgressBar;