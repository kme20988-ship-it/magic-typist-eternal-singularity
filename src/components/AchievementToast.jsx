import React, { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';

const AchievementToast = ({ achievement, onComplete }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 600);
        }, 4000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`
            fixed top-20 right-6 z-[2000] 
            transition-all duration-500 ease-out
            ${isVisible ? 'translate-x-0' : 'translate-x-[120%]'}
        `}>
            <div className="bg-gradient-to-r from-yellow-500 via-orange-600 to-yellow-500 p-[2px] rounded-2xl shadow-[0_0_30px_rgba(234,179,8,0.4)]">
                <div className="bg-[#1a1a1a] rounded-2xl px-6 py-4 flex items-center gap-4 border border-white/10">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                        <Trophy size={28} className="text-black" />
                    </div>
                    <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500/80">Achievement Unlocked!</div>
                        <h3 className="text-lg font-black text-white italic leading-tight">{achievement.name}</h3>
                        <p className="text-[10px] font-bold text-white/40 uppercase mt-1">Reward: {achievement.reward}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementToast;
