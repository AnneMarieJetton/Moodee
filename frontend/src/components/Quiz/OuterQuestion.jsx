// React Imports
import React from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// Custom Components
import PropTypes from 'prop-types';

// Styling
import '../../styles/Quiz.css';

const OuterQuestionContainer = ({ QuestionComponent, onNext, onPrevious }) => {
  return (
    <div className='OuterQuestionContainer'>
      <FaArrowAltCircleLeft size={75} onClick={onPrevious} style={{ cursor: 'pointer' }}/>
      <div className='OuterQuestion'>
        <QuestionComponent />
      </div>
      <FaArrowAltCircleRight size={75} onClick={onNext} style={{ cursor: 'pointer' }}/>
    </div>
  );
}

OuterQuestionContainer.propTypes = {
  QuestionComponent: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
}

export default OuterQuestionContainer;