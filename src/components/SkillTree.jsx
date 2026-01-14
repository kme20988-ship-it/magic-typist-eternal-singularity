import React from 'react';
import { Target, Zap, Clock, Shield, Sparkles, X } from 'lucide-react';

const SKILLS = [
    {
        id: 'crit_master',
        name: '会心の一撃',
        description: '10%の確率でダメージが3倍になる。',
        icon: Target,
        cost: 5000,
        color: 'from-orange-500 to-red-600'
    },
    {
        id: 'combo_shield',
        name: 'コンボ維持',
        description: 'ミスしても一度だけコンボがリセットされない。',
        icon: Shield,
        cost: 15000,
        color: 'from-blue-500 to-cyan-600'
    },
    {
        id: 'time_bend',
        name: '時空の歪み',
        description: 'コンボ受付時間がさらに1秒延長される。',
        icon: Clock,
        cost: 30000,
        color: 'from-purple-500 to-indigo-600'
    },
    {
        id: 'mana_surge',
        name: '魔力奔流',
        description: '詠唱破棄ゲージのチャージ速度が2倍になる。',
        icon: Zap,
        cost: 100000,
        color: 'from-yellow-400 to-orange-500'
    }
];

const SkillTree = ({ money, unlockedSkills = [], onUnlock, onClose }) => {
    return (
        <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in zoom-in duration-300">
            <div className="bg-[#1a1a1a] w-full max-w-lg h-[80vh] rounded-[2.5rem] border-2 border-neon-cyan/30 shadow-[0_0_50px_rgba(0,255,255,0.2)] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="p-8 border-b border-white/10 flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-black text-white italic tracking-tighter flex items-center gap-3">
                            <Sparkles className="text-neon-cyan animate-pulse" />
                            スキル解放
                        </h2>
                        <p className="text-white/40 text-[8px] font-black uppercase tracking-[0.3em] mt-1">Ancient Magic Upgrade Tree</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all active:scale-95"
                    >
                        <X size={24} className="text-white/60" />
                    </button>
                </div>

                {/* Money Display */}
                <div className="px-8 py-4 bg-white/3 text-center">
                    <span className="text-xs font-bold text-white/40 uppercase tracking-widest">所持魔力 : </span>
                    <span className="text-xl font-black text-neon-cyan tracking-tight">{Math.floor(money).toLocaleString()} MP</span>
                </div>

                {/* Skill List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {SKILLS.map((skill) => {
                        const Icon = skill.icon;
                        const isUnlocked = unlockedSkills.includes(skill.id);
                        const canAfford = money >= skill.cost;

                        return (
                            <div
                                key={skill.id}
                                className={`
                  relative p-5 rounded-3xl border-2 transition-all duration-300
                  ${isUnlocked
                                        ? 'bg-gradient-to-br from-white/10 to-transparent border-neon-cyan/50 shadow-[0_10px_30px_rgba(0,255,255,0.1)]'
                                        : 'bg-white/5 border-white/5 opacity-80'}
                `}
                            >
                                <div className="flex items-center gap-5">
                                    <div className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg
                    bg-gradient-to-br ${skill.color}
                    ${isUnlocked ? 'animate-pulse' : 'grayscale'}
                  `}>
                                        <Icon size={32} className="text-white" />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="text-lg font-black text-white italic">{skill.name}</h3>
                                            {isUnlocked ? (
                                                <span className="text-[10px] font-black text-neon-cyan bg-neon-cyan/10 px-2 py-1 rounded-full uppercase tracking-tighter">解放済み</span>
                                            ) : (
                                                <span className="text-xs font-black text-white/60">{skill.cost.toLocaleString()} MP</span>
                                            )}
                                        </div>
                                        <p className="text-xs text-white/40 font-medium leading-relaxed">{skill.description}</p>
                                    </div>
                                </div>

                                {!isUnlocked && (
                                    <button
                                        disabled={!canAfford}
                                        onClick={() => onUnlock(skill.id, skill.cost)}
                                        className={`
                      w-full mt-4 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all active:scale-95
                      ${canAfford
                                                ? 'bg-neon-cyan text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]'
                                                : 'bg-white/10 text-white/20 cursor-not-allowed'}
                    `}
                                    >
                                        {canAfford ? 'スキルを習得する' : '魔力が不足しています'}
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="p-6 text-center text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] border-t border-white/5">
                    古の魔道。その到達者。
                </div>
            </div>
        </div>
    );
};

export default SkillTree;
