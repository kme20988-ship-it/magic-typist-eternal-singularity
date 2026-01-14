import React, { useEffect } from 'react';

// Particle effect component for visual feedback
const ParticleEffect = ({ x, y, value, color = '#06ffa5', onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 1000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div
            className="particle animate-float-up text-2xl font-bold"
            style={{
                left: `${x}px`,
                top: `${y}px`,
                color: color,
            }}
        >
            +{value}
        </div>
    );
};

export default ParticleEffect;
