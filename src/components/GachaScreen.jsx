import React, { useState } from 'react';
import { Sparkles, Package } from 'lucide-react';
import { gachaConfig, pullGacha } from '../utils/gachaSystem';

const GachaScreen = ({ money, onPullGacha, onSpentMoney }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handlePull = () => {
        if (isAnimating) return;
        setError(null);
        setResult(null);

        const pullResult = pullGacha(money);

        if (!pullResult.success) {
            setError(pullResult.error);
            return;
        }

        // Start animation sequence
        onSpentMoney(pullResult.cost);
        setIsAnimating(true);

        // Simulate wait for animation
        setTimeout(() => {
            setResult(pullResult.unit);
            onPullGacha(pullResult.unit);
            setIsAnimating(false);
        }, 2000);
    };

    const getRarityColor = (rarity) => {
        switch (rarity) {
            case 'UR': return 'text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]';
            case 'SR': return 'text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.8)]';
            case 'R': return 'text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]';
            default: return 'text-gray-400';
        }
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black z-0" />

            {/* Main Capsule Machine UI */}
            <div className="relative z-10 w-full max-w-md flex flex-col items-center">

                {/* Machine Visual */}
                <div className="w-64 h-64 bg-white/5 rounded-full border-4 border-white/10 flex items-center justify-center mb-8 relative group shadow-[0_0_50px_rgba(168,85,247,0.2)]">
                    {isAnimating ? (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-purple via-neon-cyan to-yellow-400 animate-spin blur-xl opacity-50" />
                    ) : (
                        <div className="absolute inset-0 rounded-full bg-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                    )}

                    <Package
                        size={120}
                        className={`text-white/20 transition-all duration-500 ${isAnimating ? 'animate-bounce scale-110 text-white' : 'group-hover:text-white/40'}`}
                    />

                    {/* Result Reveal Overlay */}
                    {result && !isAnimating && (
                        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/90 rounded-full animate-in zoom-in duration-300 border-4 border-neon-cyan/50 shadow-[0_0_50px_rgba(6,182,212,0.5)]">
                            <div className={`text-4xl font-black italic mb-2 ${getRarityColor(result.rarity)} animate-bounce`}>
                                {result.rarity}!!
                            </div>
                            <img src={result.image} alt={result.name} className="w-32 h-32 object-contain mb-2 drop-shadow-2xl" />
                            <div className="text-sm font-black text-white text-center px-4 leading-tight">
                                {result.name}
                            </div>
                            <button
                                onClick={() => setResult(null)}
                                className="mt-4 px-6 py-2 bg-white text-black rounded-full font-bold text-xs hover:bg-neon-cyan transition-colors"
                            >
                                閉じる
                            </button>
                        </div>
                    )}
                </div>

                {/* Error Message */}
                {error && (
                    <div className="absolute top-0 text-red-400 font-bold bg-red-400/10 px-4 py-2 rounded-full border border-red-400/20 animate-bounce">
                        {error}
                    </div>
                )}

                {/* Controls */}
                <div className="w-full space-y-4">
                    <div className="text-center">
                        <div className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-1">RARE GACHA</div>
                        <h2 className="text-2xl font-black text-white italic">極限の魔導召喚</h2>
                    </div>

                    <button
                        onClick={handlePull}
                        disabled={isAnimating || !!result}
                        className={`
                            w-full py-6 rounded-2xl font-black text-xl italic tracking-tighter
                            flex items-center justify-center gap-3 relative overflow-hidden group
                            transition-all duration-200
                            ${isAnimating || !!result
                                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                : 'bg-gradient-to-r from-neon-purple to-indigo-600 text-white shadow-[0_6px_0_#4c1d95] active:translate-y-1 active:shadow-none hover:brightness-110'
                            }
                        `}
                    >
                        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                        <Sparkles size={24} className={isAnimating ? 'animate-spin' : ''} />
                        <span>1回召喚</span>
                        <div className="px-3 py-1 bg-black/40 rounded-lg text-sm font-bold flex items-center gap-1">
                            <span className="text-neon-cyan">{gachaConfig.cost} MP</span>
                        </div>
                    </button>

                    <div className="flex justify-center gap-4 text-[10px] font-bold text-white/30">
                        <span>UR: 5%</span>
                        <span>SR: 15%</span>
                        <span>R: 30%</span>
                        <span>N: 50%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GachaScreen;
