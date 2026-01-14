// Rebirth Thresholds
const REBIRTH_THRESHOLD_MONEY = 1000000; // 1 Million MP required
const ORB_DIVISOR = 1000000;

export const canRebirth = (totalLifetimeMoney) => {
    return totalLifetimeMoney >= REBIRTH_THRESHOLD_MONEY;
};

export const calculateRebirthOrbs = (totalLifetimeMoney) => {
    if (totalLifetimeMoney < REBIRTH_THRESHOLD_MONEY) return 0;
    // Standard Idle Game Formula: Floor( (Total / Divisor) ^ 0.5 )
    return Math.floor(Math.pow(totalLifetimeMoney / ORB_DIVISOR, 0.5));
};

export const getArtifactCost = (artifact, currentLevel) => {
    return Math.floor(artifact.baseCost * Math.pow(artifact.costMultiplier, currentLevel));
};

export const calculateArtifactBonus = () => {
    // artifacts is array of { id, level } handled in App.jsx
    return 0;
};
