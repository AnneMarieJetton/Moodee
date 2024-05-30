import React, { useState } from 'react';
import ProgressBar from '../components/Quiz/ProgressBar';
import '../styles/Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className='Quiz'>
      <ProgressBar currentQuestion={currentQuestion} />
      {/* Outer Question Component (that takes in a question component) */}
      {/* Skip Button */}
    </div>
  );
};

export default Quiz;