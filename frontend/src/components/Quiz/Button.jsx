// React Imports
import React from 'react';
import PropTypes from 'prop-types';

// Styling
import '../../styles/Quiz.css';

const Button = ({ buttonTitle }) => {
  return (
    <div className="Button">
      {buttonTitle}
    </div>
  )
}

Button.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
}

export default Button;