import React from 'react';
import '../../styles/Graphs.css';

const SquareGraph = () => {
    const numbers = Array.from({ length: 365 }, (_, index) => index + 1);

    // Function to generate a random color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div className='SquareGraph'>
            <div className='GraphTitle'>The World's Mood</div>
            <div className='GraphBody'>
                <div className='SquareGraphSquares'>
                    {numbers.map(number => (
                        <div key={number} className='SquareGraphSquare' style={{ backgroundColor: getRandomColor() }}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SquareGraph;