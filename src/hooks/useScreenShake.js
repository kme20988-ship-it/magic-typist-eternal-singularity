import { useState, useCallback } from 'react';

const useScreenShake = () => {
    const [shake, setShake] = useState(false);
    const [intensity, setIntensity] = useState('medium'); // 'low', 'medium', 'high'

    const triggerShake = useCallback((level = 'medium') => {
        setIntensity(level);
        setShake(true);
        setTimeout(() => setShake(false), level === 'high' ? 500 : 200);
    }, []);

    const shakeClass = shake
        ? (intensity === 'high' ? 'animate-shake-hard' : intensity === 'medium' ? 'animate-shake' : 'animate-shake-soft')
        : '';

    return { shakeClass, triggerShake };
};

export default useScreenShake;
