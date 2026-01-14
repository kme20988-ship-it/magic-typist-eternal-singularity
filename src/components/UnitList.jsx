import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { unitData } from '../data/unitData';

const UnitList = ({ collectedUnits = [], onClose }) => {
    const [selectedUnit, setSelectedUnit] = useState(null);

    const getRarityColor = (rarity) => {
        switch (rarity) {
            case 'UR': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400';
            case 'SR': return 'text-red-400 bg-red-400/20 border-red-400';
            case 'R': return 'text-blue-400 bg-blue-400/20 border-blue-400';
            default: return 'text-gray-400 bg-gray-400/20 border-gray-400';
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in zoom-in duration-300">
            <div className="w-full max-w-4xl h-[85vh] dragon-glass-card bg-black/95 backdrop-blur-xl border-4 border-white/20 rounded-[40px] overflow-hidden relative shadow-2xl flex flex-col">

                {/* Header */}
                <div className="p-6 border-b-2 border-white/10 flex justify-between items-center bg-black/40">
                    <div>
                        <h2 className="text-3xl font-black text-white italic tracking-tighter">ユニット図鑑</h2>
                        <div className="text-[10px] text-neon-cyan font-bold tracking-widest uppercase">
                            収集状況: {collectedUnits.length} / {unitData.length}
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <X size={32} className="text-white" />
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-hidden flex">
                    {/* List Grid */}
                    <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                            {unitData.map((unit) => {
                                const isCollected = collectedUnits.includes(unit.id);
                                return (
                                    <button
                                        key={unit.id}
                                        onClick={() => isCollected && setSelectedUnit(unit)}
                                        disabled={!isCollected}
                                        className={`
                                            aspect-square rounded-xl border-2 relative overflow-hidden transition-all group
                                            ${isCollected
                                                ? `bg-white/5 border-white/20 hover:border-neon-cyan hover:scale-105 active:scale-95 cursor-pointer`
                                                : 'bg-black/40 border-white/5 opacity-50 cursor-not-allowed grayscale'
                                            }
                                            ${selectedUnit?.id === unit.id ? 'ring-4 ring-neon-cyan border-transparent' : ''}
                                        `}
                                    >
                                        {isCollected ? (
                                            <>
                                                <div className="absolute inset-0 p-2">
                                                    <img src={unit.image} alt={unit.name} className="w-full h-full object-contain drop-shadow-xl" />
                                                </div>
                                                <div className={`absolute top-1 left-1 px-1.5 py-0.5 rounded text-[8px] font-black ${getRarityColor(unit.rarity)} border`}>
                                                    {unit.rarity}
                                                </div>
                                            </>
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Search size={24} className="text-white/20" />
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Detail Panel */}
                    <div className="w-80 bg-black/60 border-l-2 border-white/10 p-6 flex flex-col overflow-y-auto">
                        {selectedUnit ? (
                            <div className="animate-in slide-in-from-right duration-300">
                                <div className="aspect-square bg-white/5 rounded-2xl border-2 border-white/10 mb-6 flex items-center justify-center p-4 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <img src={selectedUnit.image} alt={selectedUnit.name} className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-10" />
                                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-sm font-black ${getRarityColor(selectedUnit.rarity)} border-2 z-20`}>
                                        {selectedUnit.rarity}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black text-white italic tracking-tighter mb-2 leading-none">
                                    {selectedUnit.name}
                                </h3>

                                <div className="space-y-4">
                                    <div className="text-sm font-bold text-white/60 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                                        {selectedUnit.description}
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                            <div className="text-[10px] text-white/40 font-black uppercase tracking-widest">パワー</div>
                                            <div className="text-xl font-black text-white">{selectedUnit.stats.attack}</div>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                            <div className="text-[10px] text-white/40 font-black uppercase tracking-widest">スピード</div>
                                            <div className="text-xl font-black text-white">{selectedUnit.stats.speed}</div>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 col-span-2">
                                            <div className="text-[10px] text-white/40 font-black uppercase tracking-widest">出撃コスト</div>
                                            <div className="text-xl font-black text-neon-cyan">{selectedUnit.stats.cost} MP</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-white/20 text-center gap-4">
                                <Search size={48} />
                                <div className="text-sm font-bold">
                                    ユニットを選択して<br />詳細を表示
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnitList;
