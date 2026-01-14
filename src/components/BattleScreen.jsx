import React, { useMemo } from 'react';
import { Flame, Droplets, Zap, Wind, Sun, Moon, Snowflake, Mountain, Skull, Orbit, Ghost, Shield, HeartPulse, Hourglass, Rocket, Leaf, CloudLightning, Star, Sparkles, Dna, Cloud, Thermometer, Waves, Layers, Volume2, Sunrise, Activity, Crown, Feather, Flower, Bone, Settings, Tv, Box, Bug, Target, Swords } from 'lucide-react';
import { gameConfig } from '../utils/gameConfig';
import DragonFamiliar from './DragonFamiliar';
import useScreenShake from '../hooks/useScreenShake';

const iconMap = {
    FIRE: Flame,
    WATER: Droplets,
    THUNDER: Zap,
    WIND: Wind,
    LIGHT: Sun,
    DARK: Moon,
    ICE: Snowflake,
    EARTH: Mountain,
    TOXIC: Skull,
    GRAVITY: Orbit,
    SOUL: Ghost,
    METAL: Shield,
    BLOOD: HeartPulse,
    TIME: Hourglass,
    SPACE: Rocket,
    NATURE: Leaf,
    STORM: CloudLightning,
    STAR: Star,
    HOLY: Sparkles,
    CHAOS: Dna,
    MAGMA: Flame,
    STEAM: Cloud,
    PLASMA: Zap,
    QUAKE: Mountain,
    ZERO: Thermometer,
    AURA: Waves,
    MIRROR: Layers,
    ECHO: Volume2,
    ABYSS: Moon,
    ZENITH: Sunrise,
    PULSE: Activity,
    DRAGON: Crown,
    FEATHER: Feather,
    PETAL: Flower,
    BONE: Bone,
    GEAR: Settings,
    NEON: Tv,
    PIXEL: Box,
    VIRUS: Bug,
    CORE: Target,
};

const formatNumber = (num) => {
    if (num < 1000) return Math.floor(num).toString();
    const suffixes = ['', 'k', 'M', 'B', 'T', 'P', 'E'];
    const suffixNum = Math.floor(("" + Math.floor(num)).length / 3);
    let shortValue = parseFloat((suffixNum !== 0 ? (num / Math.pow(1000, suffixNum)) : num).toPrecision(3));
    if (shortValue % 1 != 0) {
        shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum];
};

const BattleScreen = ({
    currentSpell,
    currentProgress,
    monsterHealth = 0,
    monsterMaxHealth = 100,
    combo,
    isFever,
    dragonLevel = 1,
    chantBreakGauge = 0,
    isSpellComplete = false,
    // onSpellComplete removed
    monsterElement = 'FIRE',
    bossName = null,
    stageData = {},
    stageIndex = 1,
    lastDamage = 0,
    familiarDialogue = "",
    isVictorious = false,
    keyMapping = [],
    equippedElements = [],
    // recommendedActionId removed
}) => {
    const [isHit, setIsHit] = React.useState(false);
    const [damageNumbers, setDamageNumbers] = React.useState([]);
    const { shakeClass, triggerShake } = useScreenShake();

    // Handle floating damage numbers
    React.useEffect(() => {
        if (lastDamage > 0) {
            setIsHit(true);
            triggerShake(lastDamage > monsterMaxHealth * 0.1 ? 'high' : 'medium');
            setTimeout(() => setIsHit(false), 150);

            const id = Date.now();
            const x = Math.random() * 40 - 20;
            const y = Math.random() * 40 - 20;
            setDamageNumbers(prev => [...prev, { id, damage: lastDamage, x, y }]);
            setTimeout(() => {
                setDamageNumbers(prev => prev.filter(d => d.id !== id));
            }, 1000);
        }
    }, [lastDamage, monsterMaxHealth, triggerShake]);

    // Determine Monster Image
    const monsterImageSrc = useMemo(() => {
        return stageData.image || "/assets/glitch_phantom.jpg";
    }, [stageData]);

    const monsterHealthPercent = useMemo(() => {
        return monsterMaxHealth > 0 ? (monsterHealth / monsterMaxHealth) * 100 : 0;
    }, [monsterHealth, monsterMaxHealth]);

    const monsterIcon = useMemo(() => (
        <div className={`
            relative 
            ${stageData.isBoss ? 'w-48 h-48 md:w-56 md:h-56' : 'w-32 h-32 md:w-40 md:h-40'} 
            ${isSpellComplete ? 'animate-shake' : 'animate-bounce'}
            ${isHit ? 'animate-hit-flash brightness-[4] scale-95' : ''}
            ${isVictorious ? 'opacity-0 scale-150 transition-all duration-1000' : ''}
            transition-all duration-150
        `}>
            <img
                src={monsterImageSrc}
                alt="Monster"
                className={`w-full h-full object-cover rounded-full border-4 ${stageData.isBoss ? 'border-red-600 shadow-[0_0_50px_rgba(255,0,0,0.8)]' : 'border-neon-purple shadow-[0_0_30px_rgba(168,85,247,0.6)]'}`}
            />
            {stageData.isBoss && (
                <div className="absolute -top-4 -right-4 bg-red-600 text-white font-black px-2 py-1 rounded text-xs animate-pulse">
                    WARNING
                </div>
            )}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

            {/* Floating Damage Numbers */}
            {damageNumbers.map(d => (
                <div
                    key={d.id}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{ transform: `translate(${d.x}px, ${d.y}px)` }}
                >
                    <span className="text-4xl font-black text-white italic drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-float-up">
                        {Math.floor(d.damage)}
                    </span>
                </div>
            ))}
        </div>
    ), [monsterImageSrc, stageData.isBoss, damageNumbers, isSpellComplete, isHit, isVictorious]);

    return (
        <div className={`
      relative w-full h-full flex flex-col items-center justify-between p-4 overflow-hidden
      ${isFever ? 'animate-fever-bg' : ''}
      ${shakeClass}
      transition-colors duration-500
    `}>
            {/* 舞台背景 (Dynamic) */}
            <div
                className="absolute inset-0 z-0 opacity-40 mix-blend-overlay bg-center bg-cover pointer-events-none transition-all duration-1000"
                style={{ backgroundImage: `url(${stageData.bg || '/assets/deep_web_arena_bg.png'})` }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />

            {/* Monster Area */}
            <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full">
                {/* Stage Info */}
                <div className="absolute top-4 w-full flex items-center justify-between px-6">
                    <div className="flex flex-col">
                        <span className="text-[8px] md:text-[10px] font-black text-neon-cyan tracking-widest uppercase">
                            STAGE : {String(stageIndex).padStart(2, '0')}
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="text-xl md:text-2xl font-black text-white italic tracking-tighter drop-shadow-lg">
                                {bossName || stageData.name || '深淵のデジタルグリッチ'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Dragon Familiar (Left Side like unit) */}
                <div className="absolute bottom-1/4 left-10 transform scale-150">
                    <DragonFamiliar level={dragonLevel} isAttacking={isSpellComplete} dialogue={familiarDialogue} />
                </div>

                <div className={`
                  relative p-4 transform transition-transform duration-300
                  ${isFever ? 'animate-pulse' : ''}
                  ${isSpellComplete ? 'scale-90' : 'scale-100'}
                `}>
                    {monsterIcon}

                    {/* Monster HP Bar */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 max-w-md space-y-2">
                        <div className="h-6 w-full bg-black/40 rounded-full border border-white/10 overflow-hidden relative shadow-inner">
                            <div
                                className={`h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300 relative`}
                                style={{ width: `${monsterHealthPercent}%` }}
                            >
                                <div className="absolute inset-0 bg-white/20 animate-pulse" />
                            </div>
                            {/* Numerical HP Display */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="text-[10px] font-black text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] tracking-widest uppercase">
                                    {formatNumber(monsterHealth)} / {formatNumber(monsterMaxHealth)} HP
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Monster Element Badge */}
                    <div className="absolute top-0 right-0 z-20 transform translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 group">
                        <div className={`
                            w-14 h-14 rounded-full border-4 border-white shadow-xl flex items-center justify-center
                            bg-gradient-to-br ${gameConfig.attributes.find(a => a.id === monsterElement)?.color || 'from-gray-500 to-gray-700'}
                            animate-bounce
                        `}>
                            {(() => {
                                const attr = gameConfig.attributes.find(a => a.id === monsterElement);
                                const Icon = iconMap[attr?.id] || Flame;
                                return <Icon size={28} className="text-white drop-shadow-md" />;
                            })()}
                        </div>
                        {/* Elemental Hint */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md px-2 py-1 rounded border border-white/20 text-[8px] font-bold text-white whitespace-nowrap">
                            Weak to: {
                                monsterElement === 'FIRE' ? 'WATER' :
                                    monsterElement === 'WATER' ? 'THUNDER' :
                                        monsterElement === 'THUNDER' ? 'EARTH' :
                                            monsterElement === 'EARTH' ? 'WIND' :
                                                monsterElement === 'WIND' ? 'FIRE' : '???'
                            }
                        </div>
                    </div>
                </div>

                {/* Combo Display (Dragon Glass Bubble) */}
                {combo > 0 && (
                    <div
                        className={`
                          absolute top-1/3 right-10 transform translate-x-1/4
                          dragon-glass-card bg-white text-black font-black px-6 py-3 rounded-full text-3xl shadow-2xl
                          ${combo >= 30 ? 'animate-bounce' : ''}
                        `}
                        data-tutorial-target="combo-display"
                    >
                        {combo} <span className="text-sm tracking-tighter">COMBO</span>
                    </div>
                )}
            </div>

            {/* Spell Command Area */}
            <div className="w-full space-y-3 z-20">
                {/* Chant Break Gauge */}
                <div className="w-full bg-black/40 backdrop-blur-md rounded-xl p-3 border border-neon-purple/30">
                    <div className="flex items-center justify-between mb-2">
                        <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">パワーアップ・ゲージ</div>
                        <div className="text-xs text-neon-purple-light font-black">{Math.floor(chantBreakGauge)}%</div>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden border border-white/10">
                        <div
                            className="h-full bg-gradient-to-r from-neon-purple via-yellow-400 to-neon-blue transition-all duration-300 shadow-lg"
                            style={{
                                width: `${chantBreakGauge}%`,
                                boxShadow: chantBreakGauge >= 80 ? '0 0 20px rgba(255, 215, 0, 0.8)' : '0 0 10px rgba(168, 85, 247, 0.5)'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Spell Commands */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
                <div className="flex flex-col items-center gap-2 mb-4">
                    <div className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black">Chant Sequence</div>
                    <div className="h-1 w-12 bg-neon-purple rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                </div>
                <div className="flex items-center justify-center gap-4">
                    {currentSpell.map((attrId, idx) => {
                        const Icon = iconMap[attrId];
                        const isCompleted = idx < currentProgress;
                        const isActive = idx === currentProgress;
                        // const attr removed
                        const keyHint = keyMapping[equippedElements.indexOf(attrId)]?.toUpperCase();

                        return (
                            <div key={idx} className="flex flex-col items-center gap-2">
                                <div
                                    className={`
                                          w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 relative
                                          ${isCompleted
                                            ? `bg-white text-black scale-90 border-transparent shadow-[0_0_20px_rgba(255,255,255,0.3)]`
                                            : 'bg-black/40 border-white/5 shadow-inner'}
                                          ${isActive ? 'ring-4 ring-neon-purple scale-110 shadow-[0_0_30px_rgba(168,85,247,0.6)] border-white/40 animate-pulse' : ''}
                                        `}
                                >
                                    <Icon size={28} className={isCompleted ? 'text-black' : isActive ? 'text-white' : 'text-white/10'} />

                                    {/* Small checkmark for completed */}
                                    {isCompleted && (
                                        <div className="absolute -top-1 -right-1 bg-neon-cyan text-black w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shadow-lg">
                                            ✓
                                        </div>
                                    )}
                                </div>
                                <div className={`
                                    text-[10px] font-black tracking-tighter transition-all duration-300
                                    ${isActive ? 'text-neon-purple scale-125' : 'text-white/20'}
                                `}>
                                    {keyHint || '?'}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Victory Overlay */}
            {isVictorious && (
                <div className="absolute inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-500">
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-5xl md:text-7xl font-black text-white italic tracking-tighter animate-stage-clear drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]">
                            STAGE CLEAR!
                        </div>
                        <div className="px-6 py-2 bg-neon-cyan/80 text-black font-black uppercase tracking-widest rounded-full animate-bounce">
                            ごほうび ゲット！
                        </div>
                    </div>
                </div>
            )}

            {/* Fever Overlay */}
            {isFever && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-[100]">
                    <div className="text-6xl font-black text-white italic animate-fever-text drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] tracking-tighter">
                        フィーバー！！
                    </div>
                </div>
            )}
        </div>
    );
};

export default BattleScreen;
