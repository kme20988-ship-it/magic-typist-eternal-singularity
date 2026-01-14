export const ACHIEVEMENT_LIST = [
    {
        id: 'first_hack',
        name: '初ハック',
        description: 'モンスターを1体倒す。',
        condition: (state) => state.stageIndex >= 1,
        reward: '全ダメージ +5%',
        icon: '⚔️'
    },
    {
        id: 'combo_novice',
        name: 'コンボの使い手',
        description: '10コンボを達成する。',
        condition: (state) => state.maxCombo >= 10,
        reward: 'MP獲得量 +10%',
        icon: '⚡'
    },
    {
        id: 'collector',
        name: 'コレクター',
        description: 'ユニットを10種類集める。',
        condition: (state) => state.collectedUnits.length >= 10,
        reward: 'ガチャ運 +5%',
        icon: '🎴'
    },
    {
        id: 'rich_hacker',
        name: '富豪ハッカー',
        description: '累計魔力(MP) 100万を突破。',
        condition: (state) => state.totalEarned >= 1000000,
        reward: '全ダメージ +15%',
        icon: '💰'
    },
    {
        id: 'dragon_master',
        name: '竜の導き手',
        description: 'ドラゴンの進化段階が4以上に到達。',
        condition: (state) => state.dragonLevel >= 150, // Stage 4 logic approx
        reward: 'コンボ受付時間 +0.5s',
        icon: '🐉'
    },
    {
        id: 'world_traveler',
        name: '世界を超えし者',
        description: '2つ目の世界（CYBERIA）に到達する。',
        condition: (state) => state.worldProgress.GENESIS >= 50,
        reward: '全収益 +20%',
        icon: '🌍'
    },
    {
        id: 'speed_demon',
        name: 'スピード狂',
        description: '50コンボを達成する。',
        condition: (state) => state.maxCombo >= 50,
        reward: 'クールタイム短縮 10%',
        icon: '🚀'
    },
    {
        id: 'god_hacker',
        name: '神の指',
        description: '累計タップ数が 10,000回を突破。',
        condition: (state) => state.totalTaps >= 10000,
        reward: 'クリティカル率 +10%',
        icon: '🖐️'
    },
    {
        id: 'ultimate_evolution',
        name: '不滅の神龍',
        description: 'ドラゴンの最終形態「超越神龍」に到達。',
        condition: (state) => state.dragonLevel >= 500,
        reward: '全ダメージ +50%',
        icon: '👑'
    }
];
