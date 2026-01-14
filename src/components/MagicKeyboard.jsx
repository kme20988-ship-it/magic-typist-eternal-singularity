import React, { useCallback } from 'react';
import { Flame, Droplets, Zap, Wind, Sun, Moon, Snowflake, Mountain, Skull, Orbit, Ghost, Shield, HeartPulse, Hourglass, Rocket, Leaf, CloudLightning, Star, Sparkles, Dna, Cloud, Thermometer, Waves, Layers, Volume2, Sunrise, Activity, Crown, Feather, Flower, Bone, Settings, Tv, Box, Bug, Target } from 'lucide-react';
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

const MagicKeyboard = ({ onInput, disabled, activeElements = [], keyMapping = [] }) => {
    const handleTap = useCallback((attrId) => {
        if (disabled) return;

        // Play visual "haptic" feedback (handled via state in parent or CSS class)
        onInput(attrId);
    }, [onInput, disabled]);

    return (
        <div
            data-tutorial-id="magic-keyboard"
            className="grid grid-cols-3 gap-3 w-full max-w-sm mx-auto p-4 select-none pb-12"
            data-tutorial-target="magic-keyboard"
        >
            {gameConfig.attributes.map((attr) => {
                if (!activeElements.includes(attr.id)) return null;
                const Icon = iconMap[attr.icon];
                return (
                    <button
                        key={attr.id}
                        onClick={() => handleTap(attr.id)}
                        disabled={disabled}
                        data-tutorial-id="magic-button"
                        data-tutorial-target={`magic-button-${attr.id}`}
                        className={`
                            relative h-24 dragon-glass-card flex items-center gap-4 px-6
                            bg-gradient-to-br ${attr.color} border-white/40
                            text-white shadow-[0_6px_0_rgba(0,0,0,0.3)]
                            active:translate-y-1 active:shadow-[0_2px_0_rgba(0,0,0,0.3)]
                            transition-all duration-75
                            disabled:opacity-40 disabled:grayscale
                            touch-none
                        `}
                    >
                        {/* ユニットアイコン風 */}
                        <div className="w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center border-2 border-white/20">
                            <Icon size={28} strokeWidth={3} />
                        </div>

                        <div className="flex flex-col items-start translate-y-[-1px]">
                            <span className="font-black text-[10px] uppercase tracking-widest opacity-60">CAST [{keyMapping[activeElements.indexOf(attr.id)]?.toUpperCase()}]</span>
                            <span className="font-black text-xl italic tracking-tighter">{attr.name}</span>
                        </div>

                        {/* Stat Indicators */}
                        <div className="absolute bottom-2 right-4 flex gap-1 opacity-40">
                            {[...Array(Math.floor(attr.stats.atk / 2))].map((_, i) => (
                                <div key={i} className="w-1 h-3 bg-white/60 rounded-full" />
                            ))}
                        </div>

                        {/* 光沢エフェクト */}
                        <div className="absolute top-0 right-0 w-8 h-8 bg-white/20 rounded-bl-[100%] pointer-events-none" />
                    </button>
                );
            })}
        </div>
    );
};

export default MagicKeyboard;
