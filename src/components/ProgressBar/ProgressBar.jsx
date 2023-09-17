import React from 'react';

const ProgressBar = ({ progressValue, progressColor }) => {
    const progressStyle = {
        width: `${progressValue}%`,
        backgroundColor: progressColor,
        height: '10px',
    };

    return (
        <div className="progress-bar">
            <div className="progress-fill" style={progressStyle}></div>
        </div>
    );
};

export default ProgressBar;
