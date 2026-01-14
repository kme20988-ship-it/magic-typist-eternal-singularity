import { unitData } from '../data/unitData';

const RARITY_RATES = {
    UR: 0.05, // 5%
    SR: 0.15, // 15%
    R: 0.30,  // 30%
    N: 0.50   // 50%
};

const GACHA_COST = 500; // MP cost per pull

export const gachaConfig = {
    cost: GACHA_COST,
    rates: RARITY_RATES
};

export const pullGacha = (userMoney) => {
    if (userMoney < GACHA_COST) {
        return { success: false, error: 'MPが足りません！' };
    }

    const rand = Math.random();
    let selectedRarity = 'N';

    if (rand < RARITY_RATES.UR) {
        selectedRarity = 'UR';
    } else if (rand < RARITY_RATES.UR + RARITY_RATES.SR) {
        selectedRarity = 'SR';
    } else if (rand < RARITY_RATES.UR + RARITY_RATES.SR + RARITY_RATES.R) {
        selectedRarity = 'R';
    }

    // Filter units by rarity
    const pool = unitData.filter(u => u.rarity === selectedRarity);

    // Pick specific unit from pool
    const unit = pool[Math.floor(Math.random() * pool.length)];

    return {
        success: true,
        unit: unit,
        cost: GACHA_COST
    };
};
