// React Imports
import React, { useState } from 'react';

// Custom Components
import ProgressBar from '../components/Quiz/ProgressBar';
import SkipButton from '../components/Quiz/SkipButton';

// Styling
import '../styles/Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className='Quiz'>
      <ProgressBar currentQuestion={currentQuestion} />
      {/* Outer Question Component (that takes in a question component) */}
      <SkipButton />
    </div>
  );
};

export default Quiz;