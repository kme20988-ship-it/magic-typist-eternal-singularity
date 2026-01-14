import React from 'react';

// Progress Bar Component
const ProgressBar = ({ current, max, label }) => {
    const percentage = Math.min((current / max) * 100, 100);

    return (
        <div className="w-full max-w-md mx-auto mb-4">
            {label && (
                <div className="flex justify-between text-sm text-cyber-green mb-1">
                    <span>{label}</span>
                    <span>{current} / {max}</span>
                </div>
            )}
            <div className="cyber-progress-bar">
                <div
                    className="cyber-progress-fill"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
