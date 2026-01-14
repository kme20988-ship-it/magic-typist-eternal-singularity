import React, { useState, useMemo } from 'react';
import { X, Check, Flame, Droplets, Zap, Wind, Sun, Moon, Snowflake, Mountain, Skull, Orbit, Ghost, Shield, Info, HeartPulse, Hourglass, Rocket, Leaf, CloudLightning, Star, Sparkles, Dna, Cloud, Thermometer, Waves, Layers, Volume2, Sunrise, Activity, Crown, Feather, Flower, Bone, Settings, Tv, Box, Bug, Target } from 'lucide-react';
import { gameConfig } from '../utils/gameConfig';

const iconMap = {
    Flame: Flame,
    Droplets: Droplets,
    Zap: Zap,
    Wind: Wind,
    Sun: Sun,
    Moon: Moon,
    Snowflake: Snowflake,
    Mountain: Mountain,
    Skull: Skull,
    Orbit: Orbit,
    Ghost: Ghost,
    Shield: Shield,
    HeartPulse: HeartPulse,
    Hourglass: Hourglass,
    Rocket: Rocket,
    Leaf: Leaf,
    CloudLightning: CloudLightning,
    Star: Star,
    Sparkles: Sparkles,
    Dna: Dna,
    Cloud: Cloud,
    Thermometer: Thermometer,
    Waves: Waves,
    Layers: Layers,
    Volume2: Volume2,
    Sunrise: Sunrise,
    Activity: Activity,
    Crown: Crown,
    Feather: Feather,
    Flower: Flower,
    Bone: Bone,
    Settings: Settings,
    Tv: Tv,
    Box: Box,
    Bug: Bug,
    Target: Target,
};

const MagicSelectionModal = ({ unlockedElements, equippedElements, onSave, onClose }) => {
    const [selected, setSelected] = useState([...equippedElements]);

    const toggleElement = (id) => {
        let newSelected;
        if (selected.includes(id)) {
            // Can't have fewer than 1, but we really want exactly 6 if possible
            if (selected.length > 1) {
                newSelected = selected.filter(x => x !== id);
            } else {
                newSelected = selected; // Don't allow deselecting if only one is left
            }
        } else {
            if (selected.length < 6) {
                newSelected = [...selected, id];
            } else {
                newSelected = selected; // Don't allow selecting more than 6
            }
        }
        setSelected(newSelected);
    };

    const canSave = selected.length === Math.min(unlockedElements.length, 6);

    const attributes = useMemo(() => {
        return gameConfig.attributes.filter(attr => unlockedElements.includes(attr.id));
    }, [unlockedElements]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-[#1a1a1a] w-full max-w-2xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="p-8 flex items-center justify-between border-b border-white/5">
                    <div>
                        <h2 className="text-3xl font-black italic tracking-tighter text-white uppercase">Magic Equipment</h2>
                        <p className="text-white/40 text-sm font-bold tracking-widest uppercase">
                            Select {Math.min(unlockedElements.length, 6)} Elements for Battle ({selected.length}/6)
                        </p>
                    </div>
                    <button onClick={onClose} className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
                        <X size={24} className="text-white/60" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar bg-black/40">
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                        {attributes.map(attr => {
                            const Icon = iconMap[attr.icon];
                            const isSelected = selected.includes(attr.id);
                            return (
                                <button
                                    key={attr.id}
                                    onClick={() => toggleElement(attr.id)}
                                    className={`
                                        relative group flex flex-col items-center p-3 rounded-[1.5rem] border-2 transition-all duration-300
                                        ${isSelected
                                            ? `bg-gradient-to-br ${attr.color} border-white/40 shadow-lg scale-[1.02]`
                                            : 'bg-white/5 border-transparent hover:bg-white/10'
                                        }
                                    `}
                                >
                                    <div className={`
                                        w-10 h-10 rounded-xl flex items-center justify-center mb-1 transition-transform group-hover:rotate-6
                                        ${isSelected ? 'bg-black/20' : 'bg-white/5'}
                                    `}>
                                        <Icon size={20} className={isSelected ? 'text-white' : 'text-white/40'} />
                                    </div>
                                    <span className={`font-black text-[10px] italic mb-2 truncate w-full text-center ${isSelected ? 'text-white' : 'text-white/60'}`}>
                                        {attr.name}
                                    </span>

                                    {/* Density Stats */}
                                    <div className="w-full space-y-[2px] opacity-40 group-hover:opacity-100 transition-opacity">
                                        <div className="h-[2px] w-full bg-black/20 rounded-full overflow-hidden">
                                            <div className="h-full bg-white/80" style={{ width: `${Math.min(100, attr.stats.atk * 4)}%` }} />
                                        </div>
                                        <div className="h-[2px] w-full bg-black/20 rounded-full overflow-hidden">
                                            <div className="h-full bg-cyan-400/80" style={{ width: `${Math.min(100, attr.stats.spd * 4)}%` }} />
                                        </div>
                                    </div>

                                    {isSelected && (
                                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-white text-black rounded-full flex items-center justify-center shadow-lg animate-in zoom-in">
                                            <Check size={12} strokeWidth={4} />
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-8 p-6 bg-white/5 rounded-3xl border border-white/10 flex items-start gap-4">
                        <Info size={24} className="text-neon-cyan shrink-0 mt-1" />
                        <p className="text-white/60 text-sm leading-relaxed">
                            <span className="text-white font-bold">Why equip only 6?</span> By limiting your deck, your incantations become more predictable and powerful. Mix elements to find the most efficient combination for your typing style!
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-8 border-t border-white/5 bg-black/20">
                    <button
                        onClick={() => onSave(selected)}
                        disabled={!canSave}
                        className={`
                            w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all
                            ${canSave
                                ? 'bg-neon-cyan text-black shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:scale-[1.02] active:scale-95'
                                : 'bg-white/5 text-white/20 cursor-not-allowed'
                            }
                        `}
                    >
                        Save Loadout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MagicSelectionModal;
