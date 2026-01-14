import React, { useEffect, useState } from 'react';

const ChantBreakOverlay = ({ isActive, onComplete }) => {
    const [intensity, setIntensity] = useState(0);

    useEffect(() => {
        if (!isActive) return;

        // Increase intensity over time
        const interval = setInterval(() => {
            setIntensity(prev => Math.min(prev + 0.1, 1));
        }, 50);

        // Auto-complete after 3 seconds
        const timeout = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
            setIntensity(0);
        };
    }, [isActive, onComplete]);

    if (!isActive) return null;

    return (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            {/* Noise overlay */}
            <div
                className="absolute inset-0 bg-black opacity-30 animate-noise-anim"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.8'/%3E%3C/svg%3E")`,
                    opacity: intensity * 0.5
                }}
            />

            {/* Scanlines */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                        style={{
                            top: `${(i * 5 + (intensity * 100)) % 100}%`,
                            opacity: intensity * 0.6,
                            animation: `scanline-run ${0.5 + i * 0.1}s linear infinite`
                        }}
                    />
                ))}
            </div>

            {/* Manual Burst Visuals */}
            <div className="absolute inset-0 bg-[#ffd700]/10 mix-blend-overlay animate-pulse" />
            <div className={`absolute inset-0 flex flex-col items-center justify-center ${intensity > 0.5 ? 'animate-shake' : ''}`}>
                <div
                    className="text-6xl md:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-yellow-200 to-yellow-500 animate-in zoom-in-150 duration-500"
                    style={{
                        textShadow: `0 0 ${20 * intensity}px rgba(255,215,0,0.8), 0 0 ${40 * intensity}px rgba(255,215,0,0.4)`
                    }}
                >
                    MANUAL BURST
                </div>

                {/* Layered Pulse Text */}
                <div className="relative mt-8">
                    <div className="text-xl md:text-3xl font-black text-white animate-ping absolute inset-0 opacity-40">
                        連打セヨ！ MASH!!
                    </div>
                    <div className="text-xl md:text-3xl font-black text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                        連打セヨ！ MASH!!
                    </div>
                </div>

                <div className="mt-8 text-xs md:text-sm font-bold text-neon-cyan bg-black/80 px-8 py-2 rounded-full border-2 border-neon-cyan/50 shadow-[0_0_20px_rgba(0,255,255,0.3)] animate-bounce">
                    詠唱破棄：高密度魔力解放中！
                </div>
            </div>

            {/* Flash effect */}
            <div
                className="absolute inset-0 bg-yellow-400"
                style={{
                    opacity: Math.sin(intensity * Math.PI * 4) * 0.3 * intensity
                }}
            />

            {/* Particle burst */}
            <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => {
                    const angle = (i / 30) * Math.PI * 2;
                    const distance = intensity * 500;
                    return (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                            style={{
                                left: '50%',
                                top: '50%',
                                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
                                opacity: 1 - intensity,
                                boxShadow: '0 0 10px rgba(255, 215, 0, 0.8)'
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ChantBreakOverlay;
