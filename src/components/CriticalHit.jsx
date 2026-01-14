import React, { useEffect } from 'react';

// Critical Hit Overlay Component
const CriticalHit = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 1500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <>
            <div className="critical-overlay">
                <div className="critical-text">
                    CRITICAL HACK!
                </div>
            </div>
            <div className="critical-scanline" />
        </>
    );
};

export default CriticalHit;
