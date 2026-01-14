import React from 'react';
import { Sword, Zap, Target, Sparkles } from 'lucide-react';

const PassiveStatusCard = ({ deckStats, artifactStats, magicStats }) => {
    return (
        <div className="w-full max-w-md bg-black/40 backdrop-blur-md rounded-[2.5rem] border border-white/10 p-6 space-y-4">
            <div className="flex items-center justify-between mb-2 px-2">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Active Passives</span>
                <span className="text-[10px] font-black text-neon-cyan animate-pulse">STATUS: OPTIMIZED</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-neon-purple">
                        <Sword size={14} />
                        <span className="text-[8px] font-black uppercase">Battle Power</span>
                    </div>
                    <div className="text-xl font-black text-white">x{(deckStats.attack * artifactStats.damageMult).toFixed(1)}</div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-neon-cyan">
                        <Sparkles size={14} />
                        <span className="text-[8px] font-black uppercase">Magic Income</span>
                    </div>
                    <div className="text-xl font-black text-white">x{(artifactStats.incomeMult).toFixed(1)}</div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-yellow-400">
                        <Target size={14} />
                        <span className="text-[8px] font-black uppercase">Crit Chance</span>
                    </div>
                    <div className="text-xl font-black text-white">{Math.floor(magicStats.crit)}%</div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-emerald-400">
                        <Zap size={14} />
                        <span className="text-[8px] font-black uppercase">Combo Shield</span>
                    </div>
                    <div className="text-xl font-black text-white">{artifactStats.comboTime / 1000}s</div>
                </div>
            </div>
        </div>
    );
};

export default PassiveStatusCard;
