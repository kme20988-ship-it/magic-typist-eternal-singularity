import React, { useState, useEffect } from 'react';
import { Swords, Trophy, Zap, Shield, Sparkles, Layout, ShoppingCart, Home as HomeIcon, Settings, ChevronRight, Map } from 'lucide-react';
import audioManager from '../utils/AudioManager';
import DragonFamiliar from './DragonFamiliar';
import Shop from './Shop';
import SkillTree from './SkillTree';
import GachaScreen from './GachaScreen';
import UnitList from './UnitList';
import PassiveStatusCard from './PassiveStatusCard';

const HomeScreen = ({
    money,
    totalEarned,
    dragonLevel,
    maxCombo,
    onStartBattle,
    upgrades,
    onPurchase,
    unlockedSkills,
    onUnlock,
    onOpenSettings,
    onOpenLore,
    onOpenArtifacts,
    // onOpenSkills removed
    onOpenMagicSelection,
    onOpenWorldSelection,
    currentWorldId,
    collectedUnits,
    onPullGacha,
    onSpentMoney,
    recommendedActionId,
    unlockedAchievements,
    onOpenAchievements,
    deckStats,
    artifactStats,
    magicStats
}) => {
    const [activeTab, setActiveTab] = useState('hub'); // 'hub', 'shop', 'skills', 'gacha'
    const [showUnitList, setShowUnitList] = useState(false);
    const [isIdle, setIsIdle] = useState(false);

    // Inactivity Detection
    useEffect(() => {
        let timer;
        const resetTimer = () => {
            setIsIdle(false);
            clearTimeout(timer);
            timer = setTimeout(() => setIsIdle(true), 15000); // 15 seconds for testing/impact, can be 30s
        };

        window.addEventListener('mousemove', resetTimer);
        window.addEventListener('mousedown', resetTimer);
        window.addEventListener('keydown', resetTimer);
        window.addEventListener('touchstart', resetTimer);

        resetTimer();

        return () => {
            window.removeEventListener('mousemove', resetTimer);
            window.removeEventListener('mousedown', resetTimer);
            window.removeEventListener('keydown', resetTimer);
            window.removeEventListener('touchstart', resetTimer);
            clearTimeout(timer);
        };
    }, []);

    const [orbs] = useState(() => [...Array(6)].map((_, i) => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        dx: (Math.random() - 0.5) * 200,
        dy: (Math.random() - 0.5) * 200,
        delay: i * 1.5
    })));

    /* useEffect removed */

    return (
        <div className="flex-1 flex flex-col items-center overflow-hidden relative">
            {/* Ambient Magic Orbs (Idle only) */}
            {isIdle && (
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    {orbs.map((orb, i) => (
                        <div
                            key={i}
                            className="absolute w-4 h-4 rounded-full bg-neon-cyan/20 blur-xl animate-magic-orb"
                            style={{
                                left: `${orb.left}%`,
                                top: `${orb.top}%`,
                                '--dx': `${orb.dx}px`,
                                '--dy': `${orb.dy}px`,
                                animationDelay: `${orb.delay}s`,
                            }}
                        />
                    ))}
                </div>
            )}
            {/* メインスクロールエリア */}
            <div className="flex-1 w-full overflow-y-auto px-6 pb-32 custom-scrollbar">
                {activeTab === 'hub' && (
                    <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500 py-6">
                        {/* 拠点：ドラゴンとミッション */}
                        <div className="relative w-full max-w-md bg-white/5 border-4 border-white/10 rounded-[40px] p-8 mb-8 overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple opacity-50" />

                            <div className="flex flex-col items-center">
                                <div className="relative z-10 mb-8 transform hover:scale-110 transition-transform duration-500">
                                    <DragonFamiliar level={dragonLevel} dialogue={isIdle ? "" : "主よ、準備は良いか？"} isIdle={isIdle} />
                                </div>

                                <div className="text-center z-10">
                                    <div className="text-3xl font-black text-white italic tracking-tighter mb-1">
                                        LV.{dragonLevel} ウィザード・ドラゴン
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="text-[10px] text-neon-cyan font-bold tracking-[0.2em] shadow-neon-cyan/20 uppercase">
                                            {dragonLevel >= 200 ? '伝説の神話級' : dragonLevel >= 100 ? '覚醒の超魔導' : '未熟な使い魔'}
                                        </div>
                                        <div className="px-2 py-[2px] rounded-full bg-white/10 text-[8px] font-black text-white/60 border border-white/10">
                                            WORLD: {currentWorldId}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Passive Stats Dashboard */}
                        <div className="w-full max-w-md mb-8">
                            <PassiveStatusCard
                                deckStats={deckStats}
                                artifactStats={artifactStats}
                                combo={maxCombo}
                                magicStats={magicStats}
                            />
                        </div>

                        {/* ミッション開始バー */}
                        <div className="w-full max-w-md space-y-4">
                            {/* --- 戦闘準備エリア --- */}
                            <div className="w-full space-y-2">
                                <div className="text-[10px] font-black text-white/40 tracking-[0.2em] uppercase mb-1 px-2">Preparation</div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <div
                                        onClick={onOpenMagicSelection}
                                        className="group dragon-glass-card p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all border-neon-cyan/20"
                                    >
                                        <div className="flex flex-col">
                                            <div className="text-[8px] font-black text-neon-cyan tracking-widest uppercase mb-1">LOADOUT</div>
                                            <div className="text-xs font-bold text-white">魔法装備</div>
                                        </div>
                                        <Layout size={16} className="text-neon-cyan/50 group-hover:text-neon-cyan" />
                                    </div>
                                    <div
                                        onClick={() => setShowUnitList(true)}
                                        className="group dragon-glass-card p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all border-yellow-400/20"
                                    >
                                        <div className="flex flex-col">
                                            <div className="text-[8px] font-black text-yellow-400 tracking-widest uppercase mb-1">UNITS</div>
                                            <div className="text-xs font-bold text-white">部隊編成</div>
                                        </div>
                                        <ChevronRight className="text-white/20 w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* --- 探索・研究エリア --- */}
                            <div className="w-full space-y-2">
                                <div className="text-[10px] font-black text-white/40 tracking-[0.2em] uppercase mb-1 px-2">Research & Proof</div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <div
                                        onClick={onOpenWorldSelection}
                                        className="group dragon-glass-card p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all border-emerald-400/20"
                                    >
                                        <div className="flex flex-col">
                                            <div className="text-[8px] font-black text-emerald-400 tracking-widest uppercase mb-1">WORLD</div>
                                            <div className="text-xs font-bold text-white">世界地図</div>
                                        </div>
                                        <Map size={16} className="text-emerald-400/50 group-hover:text-emerald-400" />
                                    </div>
                                    <div
                                        onClick={onOpenAchievements}
                                        className="group dragon-glass-card p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all border-yellow-500/20"
                                    >
                                        <div className="flex flex-col">
                                            <div className="text-[8px] font-black text-yellow-500 tracking-widest uppercase mb-1">PROOFS</div>
                                            <div className="text-xs font-bold text-white">実力証明</div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-[10px] text-yellow-500 font-black italic">{unlockedAchievements?.length || 0}</span>
                                            <Trophy size={14} className="text-yellow-500/50 group-hover:text-yellow-500" />
                                        </div>
                                    </div>
                                    <div
                                        onClick={onOpenLore}
                                        className="group dragon-glass-card p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all border-neon-cyan/20"
                                    >
                                        <div className="flex flex-col">
                                            <div className="text-[8px] font-black text-neon-cyan tracking-widest uppercase mb-1">ARCHIVE</div>
                                            <div className="text-xs font-bold text-white">魔導書録</div>
                                        </div>
                                        <ChevronRight className="text-white/20 w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* --- 秘宝エリア --- */}
                            <div className="w-full">
                                <div
                                    onClick={onOpenArtifacts}
                                    data-tutorial-id="artifact-btn"
                                    className="w-full group dragon-glass-card p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all border-neon-purple/20"
                                >
                                    <div className="flex flex-col">
                                        <div className="text-[8px] font-black text-neon-purple tracking-widest uppercase mb-1">ARTIFACTS</div>
                                        <div className="text-xs font-bold text-white">至高の秘宝</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-neon-purple animate-pulse">強化可能</span>
                                        <ChevronRight className="text-white/20 w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={onStartBattle}
                                data-tutorial-id="fight-button"
                                className={`w-full stage-select-btn py-6 flex flex-col items-center justify-center gap-1 group relative overflow-hidden ${recommendedActionId === 'fight-button' ? 'animate-recommend border-4 border-neon-cyan' : ''}`}
                            >
                                <div className="flex items-center gap-3 relative z-10">
                                    <Swords size={28} className="group-hover:rotate-12 transition-transform" />
                                    <span className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase">戦闘開始</span>
                                </div>
                                <span className="text-[10px] font-bold opacity-40 relative z-10">消費魔力 : 0 (テスト用)</span>

                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </button>
                        </div>

                        {/* 簡易ステータス */}
                        <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-8">
                            <div className="dragon-glass-card p-4 flex flex-col items-center justify-center text-center">
                                <Trophy className="text-yellow-400 mb-1" size={18} />
                                <div className="text-[8px] font-black text-white/30 uppercase tracking-widest">あつめた合計</div>
                                <div className="text-sm font-black text-white">{(Math.floor(totalEarned) / 1000).toFixed(1)}k MP</div>
                            </div>
                            <div className="dragon-glass-card p-4 flex flex-col items-center justify-center text-center">
                                <Zap className="text-neon-cyan mb-1" size={18} />
                                <div className="text-[8px] font-black text-white/30 uppercase tracking-widest">コンボのきろく</div>
                                <div className="text-sm font-black text-white">{maxCombo} Combo</div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'shop' && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500 py-6">
                        <Shop
                            money={money}
                            upgrades={upgrades}
                            onPurchase={onPurchase}
                        />
                    </div>
                )}

                {activeTab === 'skills' && (
                    <div className="animate-in fade-in slide-in-from-left-4 duration-500 py-6">
                        <SkillTree
                            money={money}
                            unlockedSkills={unlockedSkills}
                            onUnlock={onUnlock}
                        />
                    </div>
                )}

                {activeTab === 'gacha' && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500 py-6">
                        <GachaScreen
                            money={money}
                            onPullGacha={onPullGacha}
                            onSpentMoney={onSpentMoney}
                        />
                    </div>
                )}
            </div>

            {/* Unit List Overlay */}
            {showUnitList && (
                <UnitList
                    collectedUnits={collectedUnits}
                    onClose={() => setShowUnitList(false)}
                />
            )}

            {/* 下部固定ナビゲーション (ドラゴン・マギ風) */}
            <div className="fixed bottom-0 left-0 w-full h-20 md:h-24 bg-[#0a0a0a] border-t-4 border-white/5 flex items-center justify-around px-2 md:px-4 z-[50] shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
                <button
                    onClick={() => {
                        setActiveTab('hub');
                        audioManager.playSFX('click');
                    }}
                    data-tutorial-id="hub-tab"
                    className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'hub' ? 'scale-110 text-white' : 'opacity-40 text-white/50 hover:opacity-100'}`}
                >
                    <div className={`p-3 rounded-2xl ${activeTab === 'hub' ? 'bg-neon-cyan/20 shadow-lg' : ''}`}>
                        <HomeIcon size={24} className="tab-icon-glow text-neon-cyan" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-neon-cyan">拠点</span>
                </button>

                <button
                    onClick={() => {
                        setActiveTab('skills');
                        audioManager.playSFX('click');
                    }}
                    data-tutorial-id="skills-tab"
                    className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'skills' ? 'scale-110 text-white' : 'opacity-40 text-white/50 hover:opacity-100'}`}
                >
                    <div className={`p-3 rounded-2xl ${activeTab === 'skills' ? 'bg-neon-blue/20 shadow-lg' : ''}`}>
                        <Zap size={24} className="tab-icon-glow text-neon-blue" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-neon-blue">術式</span>
                </button>

                <button
                    onClick={() => {
                        setActiveTab('shop');
                        audioManager.playSFX('click');
                    }}
                    data-tutorial-id="shop-tab"
                    className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'shop' ? 'scale-110 text-white' : 'opacity-40 text-white/50 hover:opacity-100'} ${recommendedActionId === 'shop-tab' ? 'animate-recommend' : ''}`}
                >
                    <div className={`p-3 rounded-2xl ${activeTab === 'shop' ? 'bg-neon-purple/20 shadow-lg' : ''}`}>
                        <ShoppingCart size={24} className="tab-icon-glow text-neon-purple" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-neon-purple">店</span>
                </button>

                <button
                    onClick={() => {
                        setActiveTab('gacha');
                        audioManager.playSFX('click');
                    }}
                    data-tutorial-id="gacha-tab"
                    className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'gacha' ? 'scale-110 text-white' : 'opacity-40 text-white/50 hover:opacity-100'}`}
                >
                    <div className={`p-3 rounded-2xl ${activeTab === 'gacha' ? 'bg-yellow-400/20 shadow-lg' : ''}`}>
                        <Sparkles size={24} className="tab-icon-glow text-yellow-400" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">召喚</span>
                </button>

                <button
                    onClick={() => {
                        onOpenSettings();
                        audioManager.playSFX('click');
                    }}
                    className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-all"
                >
                    <div className="p-3">
                        <Settings size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">設定</span>
                </button>
            </div>
        </div>
    );
};

export default HomeScreen;
