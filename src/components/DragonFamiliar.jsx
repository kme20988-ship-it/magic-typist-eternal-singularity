import React, { useState, useEffect } from 'react';

const DRAGON_STAGES = [
    "Egg", "Young Dragon", "Mature Dragon", "Ancient Dragon", "Legendary Dragon", "Mythical Dragon", "Transcendent Dragon", "Transcendent God"
];

const DragonFamiliar = ({ level = 1, isAttacking = false, dialogue = "", isIdle = false }) => {
    const [frame, setFrame] = useState(0);
    const [visibleDialogue, setVisibleDialogue] = useState("");
    const [isPetting, setIsPetting] = useState(false);
    const [hearts, setHearts] = useState([]);

    // Idle animation
    useEffect(() => {
        const interval = setInterval(() => {
            setFrame(prev => (prev + 1) % 4);
        }, 200);
        return () => clearInterval(interval);
    }, []);

    // Handle dialogue animation
    useEffect(() => {
        if (dialogue) {
            setTimeout(() => setVisibleDialogue(dialogue), 0);
            const timer = setTimeout(() => setVisibleDialogue(""), 3000);
            return () => clearTimeout(timer);
        } else if (isIdle && !visibleDialogue) {
            // Random sleep talk
            const sleepTalk = ["うぅーむ...", "魔力回路が繋がる...", "もっと...詠唱を...", "zZZ...", "至高の...魔導..."];
            const interval = setInterval(() => {
                if (Math.random() > 0.7) {
                    setVisibleDialogue(sleepTalk[Math.floor(Math.random() * sleepTalk.length)]);
                    setTimeout(() => setVisibleDialogue(""), 3000);
                }
            }, 10000);
            return () => clearInterval(interval);
        }
    }, [dialogue, isIdle, visibleDialogue]);

    // Determine evolution stage based on level
    const getEvolutionStage = (lvl) => {
        if (lvl >= 500) return 8; // NEW: God Stage
        if (lvl >= 200) return 7;
        if (lvl >= 100) return 6;
        if (lvl >= 50) return 5;
        if (lvl >= 20) return 4;
        if (lvl >= 10) return 3;
        if (lvl >= 5) return 2;
        return 1;
    };

    const handlePetting = (e) => {
        if (e) e.stopPropagation();
        setIsPetting(true);
        setTimeout(() => setIsPetting(false), 500);

        // Add heart particle
        if (e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const newHeart = { id: Date.now(), x, y };
            setHearts(prev => [...prev, newHeart]);
            setTimeout(() => setHearts(prev => prev.filter(h => h.id !== newHeart.id)), 1000);
        }

        // Random dialogue
        const loveTalk = ["きゅ〜！", "もっと撫でて！", "我が主よ...", "力が...湧いてくる...", "んふふ..."];
        setVisibleDialogue(loveTalk[Math.floor(Math.random() * loveTalk.length)]);
        setTimeout(() => setVisibleDialogue(""), 1500);
    };

    const stage = getEvolutionStage(level);
    const size = stage >= 8 ? 80 : 40 + stage * 8;

    return (
        <div className="relative" style={{ width: size, height: size }}>
            {/* Speech Bubble */}
            {visibleDialogue && (
                <div className={`absolute -top-16 left-1/2 -translate-x-1/2 w-32 ${stage >= 8 ? 'bg-yellow-400 text-black border-white' : 'bg-white text-black border-neon-purple'} p-2 rounded-xl text-[10px] font-black italic shadow-2xl border-2 animate-in slide-in-from-bottom-2 fade-in`}>
                    <div className="relative">
                        {visibleDialogue}
                        <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 border-8 border-transparent ${stage >= 8 ? 'border-t-yellow-400' : 'border-t-white'}`} />
                    </div>
                </div>
            )}

            <div
                className={`
                    absolute inset-0 transition-all duration-200
                    ${isAttacking ? 'animate-bounce' : ''}
                    ${isIdle ? 'animate-sleep-breath opacity-80' : ''}
                    ${isPetting ? 'scale-110 rotate-3 filter brightness-125' : ''}
                    cursor-pointer hover:scale-105
                `}
                onClick={handlePetting}
                style={{
                    transform: `translateY(${Math.sin(frame * 0.5) * 2}px)`,
                }}
            >
                {stage === 1 ? (
                    <svg viewBox="0 0 32 32" className="w-full h-full">
                        <rect x="8" y="12" width="16" height="12" fill="#3b82f6" />
                        <rect x="20" y="8" width="8" height="8" fill="#3b82f6" />
                        {isIdle ? (
                            <rect x="24" y="11" width="2" height="1" fill="#000" opacity="0.6" />
                        ) : (
                            <rect x="24" y="10" width="2" height="2" fill="#FF0000" />
                        )}
                        <polygon points="8,12 4,8 4,16" fill="#60a5fa" opacity="0.8" />
                        <polygon points="24,12 28,8 28,16" fill="#60a5fa" opacity="0.8" />
                        <rect x="4" y="16" width="4" height="4" fill="#3b82f6" />
                        <rect x="2" y="18" width="2" height="2" fill="#3b82f6" />
                    </svg>
                ) : (
                    <div className="relative w-full h-full group">
                        {stage >= 8 && <div className="absolute inset-0 bg-yellow-400/40 blur-3xl animate-soul rounded-full" />}
                        <img
                            src={`/assets/dragon/stage_${Math.min(stage, 8)}.png`}
                            alt={`Dragon Stage ${stage}`}
                            className={`w-full h-full object-contain ${stage >= 8 ? 'drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]' : 'drop-shadow-2xl'}`}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                            }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${stage >= 5 ? 'from-yellow-400/20' : 'from-neon-purple/20'} to-transparent rounded-2xl pointer-events-none`} />
                    </div>
                )}
            </div>

            {/* Effects */}
            {stage >= 5 && (
                <div
                    className="absolute inset-0 rounded-full blur-md animate-pulse pointer-events-none"
                    style={{
                        background: `radial-gradient(circle, ${stage >= 8 ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 215, 0, 0.3)'} 0%, transparent 70%)`,
                        transform: 'scale(1.8)'
                    }}
                />
            )}

            {/* Level badge */}
            <div className={`absolute -bottom-2 -right-2 ${stage >= 8 ? 'bg-yellow-500' : 'bg-neon-purple'} text-white text-[8px] font-bold px-2 rounded-full border border-white/20 shadow-lg`}>
                Lv.{level}
            </div>

            {/* Particles */}
            {isIdle && (
                <div className="absolute -top-4 -right-2 pointer-events-none">
                    <div className="animate-zzz text-white/40 font-black text-xs absolute" style={{ animationDelay: '0s' }}>Z</div>
                    <div className="animate-zzz text-white/30 font-black text-[10px] absolute" style={{ animationDelay: '1.5s', right: '-10px', top: '5px' }}>Z</div>
                </div>
            )}
            {hearts.map(h => (
                <div key={h.id} className="absolute text-neon-pink text-xs animate-float-up font-bold pointer-events-none" style={{ left: h.x, top: h.y }}>♥</div>
            ))}
        </div>
    );
};

export default DragonFamiliar;
