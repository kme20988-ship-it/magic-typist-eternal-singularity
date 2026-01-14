import React, { useMemo } from 'react';

// Pre-generate random weather data to ensure component purity
const INITIAL_WEATHER_DATA = {
    matrix: [...Array(20)].map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 1 + Math.random() * 2,
        chars: [
            String.fromCharCode(0x30A0 + Math.random() * 96),
            String.fromCharCode(0x30A0 + Math.random() * 96),
            String.fromCharCode(0x30A0 + Math.random() * 96)
        ]
    })),
    petals: [...Array(15)].map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 5
    })),
    stars: [...Array(30)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3
    }))
};

// Cyberpunk Background Effects Component
const CyberpunkBackground = ({ combo, worldId = 'GENESIS' }) => {
    // Determine neon edge glow intensity based on combo
    const getNeonClass = () => {
        if (combo >= 25) return 'combo-extreme';
        if (combo >= 15) return 'combo-high';
        if (combo >= 5) return 'combo-medium';
        return 'combo-low';
    };

    const weatherData = INITIAL_WEATHER_DATA;

    const WeatherEffect = useMemo(() => {
        switch (worldId) {
            case 'CYBERIA':
                return (
                    <div className="absolute inset-0 overflow-hidden opacity-30">
                        {weatherData.matrix.map((item, i) => (
                            <div
                                key={i}
                                className="absolute text-matrix-green font-mono text-xs animate-digital-rain"
                                style={{
                                    left: `${item.left}%`,
                                    animationDelay: `${item.delay}s`,
                                    animationDuration: `${item.duration}s`
                                }}
                            >
                                {item.chars[0]}
                                <br />
                                {item.chars[1]}
                                <br />
                                {item.chars[2]}
                            </div>
                        ))}
                    </div>
                );
            case 'GENESIS':
                return (
                    <div className="absolute inset-0 overflow-hidden opacity-40">
                        {weatherData.petals.map((item, i) => (
                            <div
                                key={i}
                                className="absolute w-4 h-4 bg-pink-300/60 rounded-full animate-petal blur-[1px]"
                                style={{
                                    left: `${item.left}%`,
                                    top: `-5%`,
                                    animationDelay: `${item.delay}s`,
                                    animationDuration: `${item.duration}s`
                                }}
                            />
                        ))}
                    </div>
                );
            case 'ETERNITY':
                return (
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent animate-pulse" />
                        {weatherData.stars.map((item, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]"
                                style={{
                                    left: `${item.left}%`,
                                    top: `${item.top}%`,
                                    animationDelay: `${item.delay}s`
                                }}
                            />
                        ))}
                    </div>
                );
            case 'LEGEND':
                return (
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10" />
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-[200%] h-32 bg-gradient-to-r from-transparent via-yellow-200/5 to-transparent -rotate-45 animate-scan"
                                style={{ top: `${i * 25}%`, animationDelay: `${i * 0.5}s` }}
                            />
                        ))}
                    </div>
                );
            default:
                return null;
        }
    }, [worldId, weatherData.matrix, weatherData.petals, weatherData.stars]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-950">
            {/* Base grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            {/* Weather Effects */}
            {WeatherEffect}

            {/* Dynamic scanning line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent h-[200%] animate-scan pointer-events-none" />

            {/* Static/Noise overlay */}
            <div className="noise-overlay opacity-30" />

            {/* Neon edge glow based on combo */}
            {combo > 0 && (
                <div className={`neon-edge-glow ${getNeonClass()}`} />
            )}

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/20 to-transparent" />
        </div>
    );
};

export default CyberpunkBackground;
