import { useEffect } from 'react';

// Custom hook for managing idle income
export const useIdleIncome = (idleIncomePerSecond, onIncome) => {
    useEffect(() => {
        if (idleIncomePerSecond <= 0) return;

        const interval = setInterval(() => {
            onIncome(idleIncomePerSecond);
        }, 1000);

        return () => clearInterval(interval);
    }, [idleIncomePerSecond, onIncome]);
};
