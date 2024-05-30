// React Imports
import React, { useState } from 'react';

// Custom Components
import ProgressBar from '../components/Quiz/ProgressBar';
import OuterQuestionContainer from '../components/Quiz/OuterQuestion';
import SkipButton from '../components/Quiz/SkipButton';
    // Questions
import QuestionOne from '../components/Quiz/QuestionOne';

// Styling
import '../styles/Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className='Quiz'>
      <ProgressBar currentQuestion={currentQuestion} />
      <OuterQuestionContainer QuestionComponent={QuestionOne} />
      <SkipButton />
    </div>
  );
};

export default Quiz;