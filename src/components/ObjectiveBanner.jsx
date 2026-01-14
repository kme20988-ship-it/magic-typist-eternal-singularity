import React from 'react';
import { Target, Sparkles, ChevronRight } from 'lucide-react';

const ObjectiveBanner = ({ objective }) => {
    if (!objective) return null;

    const { text, type } = objective;

    const getColors = () => {
        switch (type) {
            case 'UPGRADE': return 'bg-neon-purple/20 border-neon-purple text-neon-purple';
            case 'FIGHT': return 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan';
            case 'REBIRTH': return 'bg-neon-blue/20 border-neon-blue text-neon-blue';
            default: return 'bg-white/10 border-white/20 text-white';
        }
    };

    return (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[400] w-[90%] max-w-sm pointer-events-none animate-in slide-in-from-top duration-500">
            <div className={`
                flex items-center gap-3 px-4 py-2 rounded-2xl border-2 backdrop-blur-md shadow-2xl
                ${getColors()}
            `}>
                <div className="flex-shrink-0 p-1.5 rounded-lg bg-white/10">
                    <Target size={16} className="animate-pulse" />
                </div>

                <div className="flex-1">
                    <div className="text-[8px] font-black uppercase tracking-[0.2em] opacity-60">Next Mission</div>
                    <div className="text-xs font-black italic tracking-tight flex items-center gap-1">
                        {text}
                        <Sparkles size={10} className="animate-bounce" />
                    </div>
                </div>

                <div className="flex-shrink-0 animate-bounce-horizontal">
                    <ChevronRight size={16} />
                </div>
            </div>
        </div>
    );
};

export default ObjectiveBanner;
