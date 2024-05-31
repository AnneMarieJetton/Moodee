import React from 'react';
import '../../../styles/Questions.css';

const QuestionOne = () => {
  const emotions = [
    "Happiness", "Sadness", "Anger", "Fear", "Surprise",
    "Love", "Disgust", "Excitement", "Guilt", "Confusion"
  ];

  return (
    <div className='QuestionOne'>
      <div className='QuestionTitle'>
        What were the top 3 emotions you felt today?
      </div>
      <div 
        style={{flex: 1}}
      >
        <div className='EmotionsContainer'>
        {emotions.map((emotion, index) => (
          <div className='Emotion' key={index}>{emotion}</div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default QuestionOne;