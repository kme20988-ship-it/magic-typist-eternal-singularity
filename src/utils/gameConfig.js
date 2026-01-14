// Game configuration and balance
export const gameConfig = {
    baseTypingReward: 20,
    comboMultiplier: 0.5,
    moneyMilestones: [100, 500, 1000, 5000, 10000, 50000, 100000],

    // Magic Attributes
    attributes: [
        { id: 'FIRE', name: '火', color: 'from-orange-500 to-red-600', glow: 'shadow-orange-500/50', icon: 'Flame', stats: { atk: 5, spd: 3, crit: 1 } },
        { id: 'WATER', name: '水', color: 'from-blue-400 to-blue-600', glow: 'shadow-blue-500/50', icon: 'Droplets', stats: { atk: 3, spd: 5, crit: 1 } },
        { id: 'THUNDER', name: '雷', color: 'from-yellow-300 to-yellow-500', glow: 'shadow-yellow-400/50', icon: 'Zap', stats: { atk: 4, spd: 6, crit: 2 } },
        { id: 'WIND', name: '風', color: 'from-green-400 to-emerald-600', glow: 'shadow-emerald-500/50', icon: 'Wind', stats: { atk: 2, spd: 8, crit: 1 } },
        { id: 'LIGHT', name: '光', color: 'from-amber-300 to-yellow-500 text-amber-950', glow: 'shadow-yellow-500/50', icon: 'Sun', stats: { atk: 7, spd: 4, crit: 3 } },
        { id: 'DARK', name: '闇', color: 'from-purple-800 to-black', glow: 'shadow-purple-900/50', icon: 'Moon', stats: { atk: 8, spd: 2, crit: 4 } },
        { id: 'ICE', name: '氷', color: 'from-cyan-200 to-blue-400 text-blue-900', glow: 'shadow-cyan-400/50', icon: 'Snowflake', stats: { atk: 4, spd: 4, crit: 2 } },
        { id: 'EARTH', name: '土', color: 'from-yellow-700 to-amber-900', glow: 'shadow-amber-900/50', icon: 'Mountain', stats: { atk: 6, spd: 2, crit: 1 } },
        { id: 'TOXIC', name: '毒', color: 'from-lime-400 to-purple-600', glow: 'shadow-lime-500/50', icon: 'Skull', stats: { atk: 3, spd: 3, crit: 5 } },
        { id: 'GRAVITY', name: '重', color: 'from-indigo-900 to-black', glow: 'shadow-indigo-500/50', icon: 'Orbit', stats: { atk: 10, spd: 1, crit: 2 } },
        { id: 'SOUL', name: '魂', color: 'from-teal-300 to-emerald-500', glow: 'shadow-teal-400/50', icon: 'Ghost', stats: { atk: 5, spd: 5, crit: 5 } },
        { id: 'METAL', name: '金', color: 'from-slate-300 to-slate-500 text-slate-900', glow: 'shadow-slate-400/50', icon: 'Shield', stats: { atk: 7, spd: 2, crit: 2 } },
        { id: 'BLOOD', name: '血', color: 'from-red-600 to-red-900', glow: 'shadow-red-700/50', icon: 'HeartPulse', stats: { atk: 8, spd: 5, crit: 6 } },
        { id: 'TIME', name: '時', color: 'from-amber-200 to-yellow-500', glow: 'shadow-yellow-500/50', icon: 'Hourglass', stats: { atk: 2, spd: 12, crit: 3 } },
        { id: 'SPACE', name: '空', color: 'from-indigo-900 to-purple-900', glow: 'shadow-purple-700/50', icon: 'Rocket', stats: { atk: 12, spd: 3, crit: 8 } },
        { id: 'NATURE', name: '森', color: 'from-green-500 to-emerald-800', glow: 'shadow-green-600/50', icon: 'Leaf', stats: { atk: 4, spd: 9, crit: 2 } },
        { id: 'STORM', name: '嵐', color: 'from-slate-400 to-blue-900', glow: 'shadow-blue-900/50', icon: 'CloudLightning', stats: { atk: 8, spd: 8, crit: 4 } },
        { id: 'STAR', name: '星', color: 'from-yellow-100 to-white text-yellow-900', glow: 'shadow-white/50', icon: 'Star', stats: { atk: 10, spd: 10, crit: 10 } },
        { id: 'HOLY', name: '聖', color: 'from-pink-100 to-white text-pink-900', glow: 'shadow-pink-300/50', icon: 'Sparkles', stats: { atk: 15, spd: 5, crit: 5 } },
        { id: 'CHAOS', name: '混', color: 'from-fuchsia-900 to-black', glow: 'shadow-fuchsia-900/50', icon: 'Dna', stats: { atk: 20, spd: 15, crit: 15 } },
        // --- Hyper Density Expansions ---
        { id: 'MAGMA', name: '溶', color: 'from-orange-600 to-red-900', glow: 'shadow-red-600/50', icon: 'Flame', stats: { atk: 12, spd: 2, crit: 3 } },
        { id: 'STEAM', name: '蒸', color: 'from-slate-200 to-blue-300 text-slate-900', glow: 'shadow-blue-300/50', icon: 'Cloud', stats: { atk: 5, spd: 7, crit: 2 } },
        { id: 'PLASMA', name: '電', color: 'from-purple-400 to-blue-600', glow: 'shadow-blue-500/50', icon: 'Zap', stats: { atk: 14, spd: 6, crit: 4 } },
        { id: 'QUAKE', name: '震', color: 'from-stone-600 to-black', glow: 'shadow-stone-700/50', icon: 'Mountain', stats: { atk: 18, spd: 1, crit: 2 } },
        { id: 'ZERO', name: '零', color: 'from-white to-sky-100 text-sky-900', glow: 'shadow-white/70', icon: 'Thermometer', stats: { atk: 12, spd: 4, crit: 8 } },
        { id: 'AURA', name: '気', color: 'from-emerald-300 to-teal-500 text-emerald-950', glow: 'shadow-teal-400/50', icon: 'Waves', stats: { atk: 6, spd: 12, crit: 3 } },
        { id: 'MIRROR', name: '鏡', color: 'from-gray-100 to-gray-400 text-gray-900', glow: 'shadow-gray-300/50', icon: 'Layers', stats: { atk: 8, spd: 8, crit: 8 } },
        { id: 'ECHO', name: '反', color: 'from-indigo-300 to-indigo-600', glow: 'shadow-indigo-500/50', icon: 'Volume2', stats: { atk: 4, spd: 18, crit: 2 } },
        { id: 'ABYSS', name: '淵', color: 'from-black to-purple-950', glow: 'shadow-purple-950/50', icon: 'Moon', stats: { atk: 25, spd: 1, crit: 5 } },
        { id: 'ZENITH', name: '頂', color: 'from-yellow-400 to-orange-500 text-white', glow: 'shadow-orange-400/50', icon: 'Sunrise', stats: { atk: 18, spd: 5, crit: 10 } },
        { id: 'PULSE', name: '脈', color: 'from-lime-400 to-green-600', glow: 'shadow-lime-500/50', icon: 'Activity', stats: { atk: 5, spd: 22, crit: 3 } },
        { id: 'DRAGON', name: '龍', color: 'from-red-700 to-amber-600', glow: 'shadow-red-800/50', icon: 'Crown', stats: { atk: 22, spd: 8, crit: 8 } },
        { id: 'FEATHER', name: '羽', color: 'from-cyan-100 to-white text-cyan-900', glow: 'shadow-cyan-100/50', icon: 'Feather', stats: { atk: 3, spd: 25, crit: 2 } },
        { id: 'PETAL', name: '花', color: 'from-pink-300 to-rose-500', glow: 'shadow-rose-400/50', icon: 'Flower', stats: { atk: 6, spd: 15, crit: 5 } },
        { id: 'BONE', name: '骨', color: 'from-slate-100 to-slate-300 text-slate-900', glow: 'shadow-slate-300/50', icon: 'Bone', stats: { atk: 12, spd: 4, crit: 12 } },
        { id: 'GEAR', name: '歯', color: 'from-orange-800 to-stone-900 text-orange-200', glow: 'shadow-orange-900/50', icon: 'Settings', stats: { atk: 10, spd: 12, crit: 4 } },
        { id: 'NEON', name: '電', color: 'from-fuchsia-500 to-cyan-500', glow: 'shadow-fuchsia-500/50', icon: 'Tv', stats: { atk: 15, spd: 15, crit: 15 } },
        { id: 'PIXEL', name: '画', color: 'from-yellow-400 via-red-500 to-blue-500 text-white', glow: 'shadow-yellow-400/50', icon: 'Box', stats: { atk: 10, spd: 10, crit: 10 } },
        { id: 'VIRUS', name: '感', color: 'from-purple-600 via-green-600 to-black', glow: 'shadow-green-600/50', icon: 'Bug', stats: { atk: 8, spd: 30, crit: 5 } },
        { id: 'CORE', name: '核', color: 'from-white via-red-500 to-black text-white', glow: 'shadow-red-600/50', icon: 'Target', stats: { atk: 50, spd: 1, crit: 1 } },
    ],

    // Fever Mode
    feverTriggerCombo: 30,
    feverMultiplier: 3,

    // Upgrade definitions - Kimo-Kawaii / Kid Friendly Lore
    upgrades: [
        {
            id: 'apprentice',
            name: 'ドジっ子見習い',
            description: '1秒ごとに魔力を拾ってくる',
            lore: 'キーボードの「A」と「S」しか押せない残念な子。よく転んでコンセントを抜いてしまう。好物はコーラ。',
            baseIncome: 1,
            baseCost: 50,
            costMultiplier: 1.15,
            icon: 'Cpu',
            image: '/assets/apprentice_icon.png',
        },
        {
            id: 'pot',
            name: '謎のやかん',
            description: '沸騰した魔力を注いでくる',
            lore: 'ただのやかんに見えるが、中身は無限のカップ麺スープらしい。夜中に勝手に沸く音がする。',
            baseIncome: 5,
            baseCost: 250,
            costMultiplier: 1.2,
            icon: 'Bot',
            image: '/assets/upgrades/pot.png',
        },
        {
            id: 'array',
            name: '地下のヒミツ基地',
            description: '地面から謎パワーを集める',
            lore: '団地の地下に勝手に作った秘密基地。マンガ本が3000冊置いてある。たまにお母さんに怒られる。',
            baseIncome: 25,
            baseCost: 1000,
            costMultiplier: 1.25,
            icon: 'Zap',
            image: '/assets/upgrades/base.png',
        },
        {
            id: 'homunculus',
            name: 'フラスコ人間',
            description: '主に代わって宿題をやってくれる',
            lore: '理科の実験で生まれた緑色のスライム人間。「ボクハ、ワルメナラ、ナイ」と片言で喋る。意外といいやつ。',
            baseIncome: 120,
            baseCost: 5500,
            costMultiplier: 1.3,
            icon: 'Server',
            image: '/assets/homunculus_icon.png',
        },
        {
            id: 'philosopher',
            name: 'ピカピカの石',
            description: '持っているだけでなんかスゴイ',
            lore: '川原で拾った変な石。油性ペンで顔が描いてある。暗闇で光るので、トイレに行くときに便利。',
            baseIncome: 500,
            baseCost: 25000,
            costMultiplier: 1.4,
            icon: 'Brain',
            image: '/assets/upgrades/stone.png',
        },
    ],

    // Secret Lore Logs - Kid Friendly Mysteries
    loreLogs: [
        {
            id: 'log-001',
            title: 'ヒミツ日記：その１',
            content: '今日は変なドラゴンを拾った。パソコンの画面から出てきて、オレのポテチを勝手に食べた！許さん！でも、キーボードを叩くと喜ぶみたいだ。',
            unlockThreshold: 1000,
        },
        {
            id: 'log-002',
            title: '敵の正体',
            content: '敵の「バグ軍団」は、実は書きかけの宿題や、テストの0点の答案がモンスターになった姿らしい。だから倒すとスッキリするのか！',
            unlockThreshold: 5000,
        },
        {
            id: 'log-003',
            title: 'ドラゴンの進化',
            content: 'こいつ、だんだん大きくなってきた。昨日はキーボードの上で寝てたのに、今日は冷蔵庫を開けて牛乳を飲んでた。最終的にどうなっちゃうの！？',
            unlockThreshold: 20000,
        },
    ],

    // Animation durations (ms)
    animations: {
        particleDuration: 1000,
        moneyPopDuration: 600,
        screenFlashDuration: 300,
        milestoneDuration: 1000,
    },

    // Combo thresholds
    comboThresholds: {
        0: 'cyber-gradient-1',
        5: 'cyber-gradient-2',
        10: 'cyber-gradient-3',
        15: 'cyber-gradient-4',
        20: 'cyber-gradient-5',
        25: 'cyber-gradient-extreme',
    },
    // World definitions (Intuitive Chapters)
    worlds: [
        {
            id: 'GENESIS',
            name: '始まりの草原',
            description: '旅の始まりだ。まずはここを制覇せよ。',
            theme: 'Nature/Green',
            hpScale: 1.0,
            rewardScale: 1.0,
            mechanic: 'NORMAL',
            bg: '/assets/worlds/genesis.png'
        },
        {
            id: 'CYBERIA',
            name: '魔力の砂漠',
            description: '魔力が渦巻く乾燥地帯。バリアを持つ敵が立ちふさがるだろう。',
            theme: 'Desert/Sand',
            hpScale: 2.5,
            rewardScale: 2.0,
            mechanic: 'BARRIER',
            bg: '/assets/worlds/cyberia.png'
        },
        {
            id: 'ETERNITY',
            name: '天空の魔宮',
            description: '雲の上にそびえ立つ宮殿。重力が君の魔力を試すはずだ。',
            theme: 'Sky/Ancient',
            hpScale: 6.0,
            rewardScale: 4.0,
            mechanic: 'GRAVITY',
            bg: '/assets/worlds/eternity.png'
        },
        {
            id: 'LEGEND',
            name: '伝説の聖戦',
            description: '語り継がれる究極の戦場。覚悟して挑むが良い。',
            theme: 'Holy/Epic',
            hpScale: 12.0,
            rewardScale: 10.0,
            mechanic: 'LEGENDAY',
            bg: '/assets/worlds/legend.png'
        }
    ],
};

// Helper functions
export const getUpgradeCost = (upgrade, level) => {
    return Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, level));
};

// --- STAGE DATA EXPANSION (Intuitive Original) ---
const AREA_THEMES = [
    { name: '静かなほとり', bg: '/assets/deep_web_arena_bg.png', element: 'WATER', prefix: 'River' },
    { name: 'ささやきの森', bg: '/assets/snack_world_battle_bg.png', element: 'WIND', prefix: 'Forest' },
    { name: '燃える洞窟', bg: '/assets/deep_web_arena_bg.png', element: 'FIRE', prefix: 'Cave' },
    { name: 'いにしえの遺跡', bg: '/assets/deep_web_arena_bg.png', element: 'EARTH', prefix: 'Ruin' },
    { name: '裁きの雷', bg: '/assets/deep_web_arena_bg.png', element: 'THUNDER', prefix: 'Thunder' },
    { name: '影の谷', bg: '/assets/deep_web_arena_bg.png', element: 'DARK', prefix: 'Shadow' },
];

const ENEMY_NAMES = [
    'スライム', 'ゴブリン', 'オーク', 'スケルトン', 'ウルフ', 'コウモリ',
    'ゴーレム', '死神', 'キマイラ', 'ドラゴン'
];

const CUSTOM_IMAGES = [
    '/assets/custom_units/magi_unit_192221.png',
    '/assets/custom_units/magi_unit_213515.png',
    '/assets/custom_units/magi_unit_213510.png',
    '/assets/custom_units/magi_unit_190839.png',
    '/assets/custom_units/magi_unit_190851.png'
];

const generateStagesForWorld = (worldId, totalChapters) => {
    let allStages = [];
    const worldInfo = gameConfig.worlds.find(w => w.id === worldId);
    if (!worldInfo) return [];

    const hpScale = worldInfo.hpScale;

    for (let ch = 1; ch <= totalChapters; ch++) {
        const theme = AREA_THEMES[(ch - 1) % AREA_THEMES.length];
        const difficultyMult = Math.pow(1.8, ch - 1) * hpScale;

        for (let st = 1; st <= 10; st++) {
            const isBoss = st === 10;
            const stageName = `${worldInfo.name} ${ch}-${st} ${theme.name}`;
            const enemyName = isBoss ? `【ボス】 ${theme.prefix} ロード` : ENEMY_NAMES[Math.floor(Math.random() * ENEMY_NAMES.length)];

            let hp = Math.floor(100 * difficultyMult * st);
            if (isBoss) hp *= 5;

            if (hp > Number.MAX_SAFE_INTEGER) hp = Number.MAX_SAFE_INTEGER;

            allStages.push({
                chapter: ch,
                stage: st,
                name: stageName,
                enemy: enemyName,
                element: theme.element,
                bg: worldInfo.bg || theme.bg,
                image: CUSTOM_IMAGES[(ch + st) % CUSTOM_IMAGES.length],
                isBoss: isBoss
            });
        }
    }
    return allStages;
};

// Map stages by world
gameConfig.allStages = {
    GENESIS: generateStagesForWorld('GENESIS', 30),
    CYBERIA: generateStagesForWorld('CYBERIA', 30),
    ETERNITY: generateStagesForWorld('ETERNITY', 30),
    LEGEND: generateStagesForWorld('LEGEND', 50) // More content for Legend
};

// Default stages for legacy support
gameConfig.stages = gameConfig.allStages.GENESIS;

// ==========================================
// 📜 HIDDEN LORE (BACK STORY)
// ==========================================
gameConfig.lore = {
    1: "【システムログ 001】\nシミュレーションを開始します。被験者：人類。目的：魔力（MP）による現実改変の可能性の検証。",
    5: "【管理者メモ】\n被験者の適応速度が予想を上回っている。キーボード入力による詠唱プロセスは、脳の言語野を直接刺激しているようだ。",
    10: "【警告】\nセクター10にて「特異点」を観測。AIが自我を持ち始めた形跡あり。削除を推奨します。",
    20: "【断片データ】\n...助けて...ここはゲームじゃない...私の意識は...コードに...変換されて...",
    30: "【システムログ 303】\nイーサ界の深層にて、旧時代のインターネットの残骸を発見。「掲示板」と呼ばれる古代のコミュニケーションツールの成れの果てだ。",
    50: "【真実の啓示】\n君が戦っている「敵」の正体がわかったか？ あれはバグではない。かつてこの世界に存在していた「忘れられた情報」たちの怨念だ。",
    75: "【崩壊の予兆】\n世界のテクスチャが剥がれ落ちていく。君の「指」の動きだけが、この崩壊を繋ぎ止めている唯一の楔だ。",
    90: "【管理者権限譲渡】\nもう限界だ。私は消える。これより先の権限を、最も優れた「プレイヤー」である君に譲渡する。頼んだぞ。",
    99: "【最終警告】\n次の扉を開けば、もう元の現実には戻れない。それでも進むか？",
    100: "【THE END OF WORLD】\n接続完了。ようこそ、新しい神よ。"
};

// Generate a random spell sequence (with difficulty scaling and unlock checks)
export const generateSpell = (length, availableAttributes = ['FIRE', 'WATER']) => {
    const spell = [];
    const pool = gameConfig.attributes.filter(attr => availableAttributes.includes(attr.id));

    // Fallback if something goes wrong and pool is empty (shouldn't happen)
    const effectivePool = pool.length > 0 ? pool : [gameConfig.attributes[0]];

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * effectivePool.length);
        spell.push(effectivePool[randomIndex].id);
    }
    return spell;
};
