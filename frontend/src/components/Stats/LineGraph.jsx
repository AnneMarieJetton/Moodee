import React from 'react';
import '../../styles/Graphs.css';

const LineGraph = () => {
    const numbers = Array.from({ length: 10 }, (_, index) => index + 1);


    return (

        <div className = 'LineGraph'>
            <div className='GraphTitle'>The World's Rating</div>
            <div className='GraphBody'>
                <div className='LineGraphLines'>
                    {numbers.map(number => (
                        <div key={number} className='LineGraphContainer'>
                            <div className='LineGraphLine'></div>
                            <div className='LineGraphCircle'></div>
                        </div>
                    ))}
                    <div className='LineGraphMainLine'></div>
                </div>
            </div>
        </div>
    );
};

export default LineGraph