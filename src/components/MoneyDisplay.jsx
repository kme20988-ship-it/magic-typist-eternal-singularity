import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, TrendingUp } from 'lucide-react';
import { gameConfig } from '../utils/gameConfig';

const MoneyDisplay = ({ money, idleIncome }) => {
    const prevMoneyRef = useRef(money);
    const [showMilestone, setShowMilestone] = useState(false);
    const [animateMoney, setAnimateMoney] = useState(false);

    useEffect(() => {
        const prevMoney = prevMoneyRef.current;
        const milestones = gameConfig.moneyMilestones;
        const crossedMilestone = milestones.find(
            milestone => prevMoney < milestone && money >= milestone
        );

        if (crossedMilestone) {
            setTimeout(() => {
                setShowMilestone(true);
                setTimeout(() => setShowMilestone(false), 1000);
            }, 0);
        }

        if (money !== prevMoney) {
            setTimeout(() => {
                setAnimateMoney(true);
                setTimeout(() => setAnimateMoney(false), 600);
            }, 0);
        }

        prevMoneyRef.current = money;
    }, [money]);

    const formatMoney = (amount) => {
        if (amount >= 1000000) return `${(amount / 1000000).toFixed(2)}M`;
        if (amount >= 1000) return `${(amount / 1000).toFixed(1)}K`;
        return Math.floor(amount).toString();
    };

    return (
        <div className="flex flex-col space-y-1 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-lg">
            {/* Main money display */}
            <div className={`flex items-center space-x-2 ${animateMoney ? 'animate-money-pop' : ''}`}>
                <div className="p-1 px-3 bg-white text-black text-xs font-black rounded-lg">魔力 (MP)</div>
                <div className="text-3xl font-black text-white italic">
                    {formatMoney(money)}
                </div>
            </div>

            {/* Idle income display */}
            {idleIncome > 0 && (
                <div className="flex items-center space-x-1 text-emerald-400 font-bold text-xs uppercase tracking-widest pl-1">
                    <TrendingUp size={12} />
                    <span>+{formatMoney(idleIncome)}/秒</span>
                </div>
            )}

            {/* Milestone celebration */}
            {showMilestone && (
                <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
                    <div className="animate-bounce p-8 rounded-full bg-white/20 backdrop-blur-xl border border-white/50 shadow-2xl">
                        <Sparkles size={100} className="text-white" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MoneyDisplay;
