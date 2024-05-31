// React Imports
import React, { useState } from 'react';

// Custom Components
import ProgressBar from '../components/Quiz/ProgressBar';
import OuterQuestionContainer from '../components/Quiz/OuterQuestion';
import Button from '../components/Quiz/Button';
    // Questions
import QuestionOne from '../components/Quiz/Questions/QuestionOne';
import QuestionTwo from '../components/Quiz/Questions/QuestionTwo';
import QuestionThree from '../components/Quiz/Questions/QuestionThree';
import QuestionFour from '../components/Quiz/Questions/QuestionFour';
import QuestionFive from '../components/Quiz/Questions/QuestionFive';

// Styling
import '../styles/Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

   const questionComponents = [
    QuestionOne,
    QuestionTwo,
    QuestionThree,
    QuestionFour,
    QuestionFive
  ];

  const goToNextQuestion = () => {
    if (currentQuestion < 4) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPreviousQuestion = () => {
     if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const onSkip = () => {
    onSubmit()
  }

  const onSubmit = () => {
    // code to submit things
    console.log("SUBMIT!");
  } 
  
  return (
    <div className='Quiz'>
      <ProgressBar currentQuestion={currentQuestion} />
      <OuterQuestionContainer 
        QuestionComponent={questionComponents[currentQuestion]} 
        onNext={goToNextQuestion}
        onPrevious={goToPreviousQuestion}
        />
        { currentQuestion === 4 ? (
            <div className='ButtonsGrouped'>
                <Button 
                    buttonTitle='Skip' 
                    onClick={onSkip}
                />
                <Button 
                    buttonTitle='Submit' 
                    onClick={onSubmit}
                />
            </div>
        ) : (
             <div className='SingleButton'>
                <Button 
                    buttonTitle='Skip' 
                    onClick={goToNextQuestion}
                />
             </div>
        )}
     
    </div>
  );
};

export default Quiz;