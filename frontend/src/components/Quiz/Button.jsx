// React Imports
import React from 'react';
import PropTypes from 'prop-types';

// Styling
import '../../styles/Quiz.css';

const Button = ({ buttonTitle, onClick }) => {
  return (
    <div className="Button" onClick={onClick}>
      {buttonTitle}
    </div>
  )
}

Button.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button;