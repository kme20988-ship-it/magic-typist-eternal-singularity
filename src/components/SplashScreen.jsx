import React, { useState, useEffect } from 'react';
import { Sparkles, Play, RotateCcw, FastForward } from 'lucide-react';
import audioManager from '../utils/AudioManager';

const SplashScreen = ({ onComplete }) => {
    const [isLeaving, setIsLeaving] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [hasSaveData] = useState(() => {
        return !!localStorage.getItem('magic_idle_money');
    });

    useEffect(() => {
        // Show options after a short initial animation
        const timer = setTimeout(() => {
            setShowOptions(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleStart = (mode) => {
        audioManager.init();
        audioManager.playSFX('click');
        setIsLeaving(true);
        setTimeout(() => {
            onComplete(mode);
        }, 800);
    };

    return (
        <div
            className={`
                fixed inset-0 z-[1000] flex flex-col items-center justify-center
                bg-[#0a0a0a] transition-all duration-700 ease-in-out
                ${isLeaving ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'}
            `}
        >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 cyber-grid opacity-20" />

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 blur-[120px] rounded-full animate-pulse" />

            {/* Key Visual Section */}
            <div className="relative mb-12 group">
                <div className="absolute inset-0 bg-neon-purple/40 blur-3xl rounded-full animate-pulse-glow" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-110">
                    <img
                        src="/assets/splash_kv.png"
                        alt="MAGITYPE: ORBITAL Key Visual"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
            </div>

            {/* Title Section */}
            <div className="text-center relative z-10 mb-12">
                <h1 className="text-6xl md:text-7xl font-black text-white italic tracking-tighter mb-4 drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]">
                    MAGITYPE
                </h1>
                <div className="flex items-center justify-center gap-3">
                    <div className="h-[2px] w-8 bg-neon-purple-light" />
                    <span className="text-sm text-neon-purple-light font-bold uppercase tracking-[0.4em]">
                        魔導バトル版
                    </span>
                    <div className="h-[2px] w-8 bg-neon-purple-light" />
                </div>
            </div>

            {/* Interaction Section */}
            <div className="relative z-10 w-full max-w-sm px-6">
                {showOptions ? (
                    <div className="flex flex-col gap-4 animate-in fade-in zoom-in duration-500">
                        {/* Continue Button (Conditional) */}
                        {hasSaveData && (
                            <button
                                onClick={() => handleStart('continue')}
                                className="group relative flex items-center justify-center gap-4 py-5 rounded-2xl bg-white text-black font-black text-xl hover:bg-neon-purple hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-neon-purple/50 active:scale-95"
                            >
                                <Play size={24} fill="currentColor" />
                                前のままで遊ぶ
                                <div className="absolute inset-0 rounded-2xl bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }} />
                            </button>
                        )}

                        {/* New Adventure / Reset Button */}
                        <button
                            onClick={() => handleStart('new')}
                            className={`
                                group relative flex items-center justify-center gap-4 py-4 rounded-2xl font-bold transition-all duration-300 active:scale-95
                                ${hasSaveData
                                    ? 'bg-white/5 text-white/60 border border-white/10 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50'
                                    : 'bg-white text-black text-xl font-black hover:bg-neon-purple hover:text-white shadow-[0_0_40px_rgba(255,255,255,0.2)]'}
                            `}
                        >
                            <RotateCcw size={20} className={hasSaveData ? "group-hover:rotate-180 transition-transform duration-500" : ""} />
                            新しく作り直す
                        </button>

                        <div className="mt-4 flex items-center justify-center gap-2 text-white/20 text-[10px] uppercase font-bold tracking-[0.2em]">
                            <FastForward size={12} />
                            物語を選択してください
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center gap-2 h-24 items-center">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="w-3 h-3 rounded-full bg-neon-purple-light animate-bounce"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Credits / Footer */}
            <div className="absolute bottom-10 text-white/40 text-[10px] uppercase font-bold tracking-widest flex items-center gap-4">
                <span>© 2026 MAGITYPE ORBITAL</span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span>無断転載禁止</span>
            </div>
        </div>
    );
};

export default SplashScreen;
