import React from 'react';
import '../../styles/Graphs.css';

const BarGraph = () => {
    const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

    // Function to generate a random color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const getRandomHeight = () => {
        return Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    };

    return (

        <div className = 'BarGraph'>
            <div className='GraphTitle'>The World's Emotions</div>
            <div className='GraphBody'>
                <div className='BarGraphBars'>
                    {numbers.map(number => (
                        <div key={number} className='BarGraphBar' style={{ height: `${getRandomHeight()}%`, backgroundColor: getRandomColor() }}></div>
                    ))}
                </div>
                <div className='BarGraphLabels'>
                    {numbers.map(number => (
                        <div className='BarGraphLabelContainer'>
                            <span key={number} className='BarGraphLabel'>stuff</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BarGraph