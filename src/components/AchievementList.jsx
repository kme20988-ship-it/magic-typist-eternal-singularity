import React from 'react';
import { X, Trophy, CheckCircle2, Lock } from 'lucide-react';
import { ACHIEVEMENT_LIST } from '../data/achievementData';

const AchievementList = ({ unlockedAchievements = [], onClose }) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="w-full max-w-2xl h-[80vh] bg-[#1a1a1a] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-8 pb-4">
                    <div>
                        <h2 className="text-3xl font-black text-white italic tracking-tighter flex items-center gap-3">
                            <Trophy className="text-yellow-500" />
                            実力証明 (Achievements)
                        </h2>
                        <p className="text-white/40 text-[10px] uppercase font-black tracking-widest mt-1">Proof of your hacking prowess</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors"
                    >
                        <X size={24} className="text-white/60" />
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="px-8 py-4 bg-white/3 flex items-center justify-between">
                    <span className="text-xs font-bold text-white/40 uppercase tracking-widest">達成率</span>
                    <div className="flex-1 mx-4 h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-1000"
                            style={{ width: `${(unlockedAchievements.length / ACHIEVEMENT_LIST.length) * 100}%` }}
                        />
                    </div>
                    <span className="text-sm font-black text-yellow-500 italic">{unlockedAchievements.length}/{ACHIEVEMENT_LIST.length}</span>
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto p-8 space-y-4 custom-scrollbar">
                    {ACHIEVEMENT_LIST.map((ach) => {
                        const isUnlocked = unlockedAchievements.includes(ach.id);
                        return (
                            <div
                                key={ach.id}
                                className={`
                                    p-5 rounded-3xl border-2 transition-all flex items-center gap-6
                                    ${isUnlocked
                                        ? 'bg-gradient-to-br from-yellow-500/10 to-transparent border-yellow-500/30'
                                        : 'bg-white/5 border-white/5 opacity-50 grayscale'}
                                `}
                            >
                                <div className={`
                                    w-16 h-16 rounded-2xl flex items-center justify-center text-3xl
                                    ${isUnlocked ? 'bg-yellow-500 shadow-lg shadow-yellow-500/20' : 'bg-white/5'}
                                `}>
                                    {isUnlocked ? ach.icon : <Lock size={24} className="text-white/20" />}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-lg font-black text-white italic leading-none">{ach.name}</h3>
                                        {isUnlocked && <CheckCircle2 size={14} className="text-yellow-500" />}
                                    </div>
                                    <p className="text-[10px] font-bold text-white/40 uppercase mb-2">{ach.description}</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[9px] font-black text-yellow-500 uppercase tracking-widest bg-yellow-500/10 px-2 py-0.5 rounded">報酬: {ach.reward}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AchievementList;
