import React from 'react';
import { X, Globe, Zap, Infinity as InfinityIcon, ChevronRight, Lock } from 'lucide-react';
import { gameConfig } from '../utils/gameConfig';

const WorldSelectionModal = ({ currentWorldId, worldProgress, onSelect, onClose }) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-[#1a1a1a] w-full max-w-2xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="p-8 flex items-center justify-between border-b border-white/5">
                    <div>
                        <h2 className="text-3xl font-black italic tracking-tighter text-white uppercase">World Selection</h2>
                        <p className="text-white/40 text-sm font-bold tracking-widest uppercase">
                            Choose your next battlefield
                        </p>
                    </div>
                    <button onClick={onClose} className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
                        <X size={24} className="text-white/60" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-4">
                    {gameConfig.worlds.map((world, idx) => {
                        const isUnlocked = idx === 0 || worldProgress[gameConfig.worlds[idx - 1].id] >= 10; // Simplified unlock: clearing chapter 1 of prev world
                        const isActive = currentWorldId === world.id;
                        const progress = worldProgress[world.id] || 0;
                        const completion = Math.min(100, (progress / 50) * 100);

                        const worldThemes = {
                            GENESIS: 'from-blue-500/20 to-cyan-500/20 shadow-blue-500/20 border-blue-500',
                            CYBERIA: 'from-purple-500/20 to-neon-purple/20 shadow-purple-500/20 border-purple-500',
                            ETERNITY: 'from-indigo-500/20 to-violet-500/20 shadow-indigo-500/20 border-indigo-500',
                            LEGEND: 'from-red-600/20 to-orange-600/20 shadow-red-600/30 border-red-600',
                        };

                        return (
                            <div
                                key={world.id}
                                onClick={() => isUnlocked && onSelect(world.id)}
                                className={`
                                    relative group overflow-hidden rounded-[2rem] border-2 transition-all duration-500
                                    ${isUnlocked ? 'cursor-pointer' : 'cursor-not-allowed opacity-50 grayscale'}
                                    ${isActive
                                        ? `bg-gradient-to-r ${worldThemes[world.id]} shadow-[0_0_30px_rgba(0,255,255,0.15)]`
                                        : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                                    }
                                `}
                            >
                                <div className="p-6 flex items-center gap-6 relative z-10">
                                    <div className={`
                                        w-16 h-16 rounded-2xl flex items-center justify-center
                                        ${isActive ? 'bg-white text-black' : 'bg-white/10 text-white/40'}
                                    `}>
                                        {world.id === 'GENESIS' && <Globe size={32} />}
                                        {world.id === 'CYBERIA' && <Zap size={32} />}
                                        {world.id === 'ETERNITY' && <InfinityIcon size={32} />}
                                        {world.id === 'LEGEND' && <Swords size={32} className="text-red-500" />}
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-xl font-black italic text-white uppercase tracking-tighter">
                                                {world.name}
                                            </h3>
                                            {!isUnlocked && <Lock size={14} className="text-white/40" />}
                                            {world.id === 'LEGEND' && (
                                                <span className="bg-red-600 text-[8px] px-1.5 py-0.5 rounded font-black text-white animate-pulse">HARD</span>
                                            )}
                                        </div>
                                        <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">
                                            {world.description}
                                        </p>

                                        {/* Progress Bar */}
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 h-1.5 bg-black/40 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full transition-all duration-1000 ${isActive ? 'bg-white' : 'bg-white/40'}`}
                                                    style={{ width: `${completion}%` }}
                                                />
                                            </div>
                                            <span className="text-[10px] font-black text-white/60 tracking-widest whitespace-nowrap">
                                                STAGE {progress + 1}
                                            </span>
                                        </div>
                                    </div>

                                    <ChevronRight size={24} className={`transition-transform group-hover:translate-x-1 ${isActive ? 'text-white' : 'text-white/20'}`} />
                                </div>

                                {/* World Subtitle Decal */}
                                <div className="absolute top-4 right-8 font-black text-4xl italic opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                                    {world.id}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WorldSelectionModal;
