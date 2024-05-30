// React Imports
import React from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// Custom Components
import PropTypes from 'prop-types';

// Styling

import '../../styles/Quiz.css';

const OuterQuestionContainer = ({ QuestionComponent }) => {
  return (
    <div className='OuterQuestionContainer'>
      <FaArrowAltCircleLeft size={75}/>
      <div className='OuterQuestion'>
        <QuestionComponent />
      </div>
      <FaArrowAltCircleRight size={75}/>
    </div>
  );
}

OuterQuestionContainer.propTypes = {
  QuestionComponent: PropTypes.func.isRequired,
}

export default OuterQuestionContainer;