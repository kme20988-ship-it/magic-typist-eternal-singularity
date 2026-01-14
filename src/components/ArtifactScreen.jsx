import React from 'react';
import { X, ArrowUp } from 'lucide-react';
import { artifactData } from '../data/artifactData';
import { getArtifactCost } from '../utils/rebirthSystem';

const ArtifactScreen = ({ spiritOrbs, artifacts, onBuyArtifact, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in zoom-in duration-300">
            <div className="w-full max-w-4xl h-[80vh] flex flex-col dragon-glass-card bg-[#1a1a1a] border-4 border-white/20 rounded-3xl overflow-hidden relative shadow-2xl">

                {/* Header */}
                <div className="p-6 border-b-2 border-white/10 flex justify-between items-center bg-black/40">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-400 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)] animate-pulse">
                            <span className="text-2xl">🔮</span>
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-white italic tracking-tighter">古代遺物保管庫</h2>
                            <div className="text-sm font-bold text-neon-purple tracking-widest uppercase">
                                霊珠: {spiritOrbs.toLocaleString()}
                            </div>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <X size={32} className="text-white" />
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {artifactData.map((artifact) => {
                            const currentLevel = artifacts.find(a => a.id === artifact.id)?.level || 0;
                            const cost = getArtifactCost(artifact, currentLevel);
                            const canAfford = spiritOrbs >= cost;
                            const isMax = currentLevel >= artifact.maxLevel;
                            const Icon = artifact.icon;

                            return (
                                <div key={artifact.id} className={`dragon-glass-card p-4 relative group ${isMax ? 'border-yellow-400/50 bg-yellow-400/5' : 'border-white/10 bg-white/5'}`}>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-3 rounded-xl bg-black/40 border border-white/10 ${artifact.color}`}>
                                            <Icon size={24} />
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] uppercase font-black tracking-widest text-white/40">魔導レベル</span>
                                            <span className={`text-2xl font-black ${isMax ? 'text-yellow-400' : 'text-white'}`}>
                                                {currentLevel}<span className="text-sm text-white/40">/{artifact.maxLevel}</span>
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-black text-white italic mb-1">{artifact.name}</h3>
                                    <p className="text-xs font-bold text-white/60 mb-2 min-h-[2.5em]">{artifact.description}</p>
                                    <div className="text-[10px] font-bold text-neon-cyan mb-4">{artifact.effectDescription}</div>

                                    <button
                                        onClick={() => onBuyArtifact(artifact.id, cost)}
                                        disabled={!canAfford || isMax}
                                        className={`
                                            w-full py-3 rounded-xl font-black flex items-center justify-center gap-2
                                            transition-all active:scale-95
                                            ${isMax
                                                ? 'bg-white/10 text-white/40 cursor-not-allowed'
                                                : canAfford
                                                    ? 'bg-neon-purple text-white shadow-[0_4px_0_#4c1d95] hover:brightness-110'
                                                    : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                            }
                                        `}
                                    >
                                        {isMax ? (
                                            <span>限界到達</span>
                                        ) : (
                                            <>
                                                <span>魔力注入</span>
                                                <div className="px-2 py-0.5 bg-black/40 rounded-lg text-xs flex items-center gap-1">
                                                    <span>🔮</span>
                                                    <span>{cost.toLocaleString()}</span>
                                                </div>
                                            </>
                                        )}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtifactScreen;
