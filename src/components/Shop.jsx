import React, { useState, useRef, useCallback, useEffect, memo } from 'react';
import { Sparkles, FlaskConical, Scroll, Ghost, Skull, Lock } from 'lucide-react';
import { getUpgradeCost } from '../utils/gameConfig';

// Icon mapping for magic theme
const iconMap = {
    Cpu: Sparkles,
    Bot: FlaskConical,
    Zap: Scroll,
    Server: Ghost,
    Brain: Skull,
};

const generateParticles = (centerX, centerY) => {
    const newParticles = [];
    for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const distance = 100;
        newParticles.push({
            id: Date.now() + i + Math.random(),
            x: centerX,
            y: centerY,
            tx: Math.cos(angle) * distance,
            ty: Math.sin(angle) * distance,
        });
    }
    return newParticles;
};

const Shop = memo(({ money, upgrades, onPurchase }) => {
    const [purchaseAnimation, setPurchaseAnimation] = useState(null);
    const [particles, setParticles] = useState([]);
    const buttonRefs = useRef({});
    const timeoutRefs = useRef([]);

    useEffect(() => {
        return () => {
            timeoutRefs.current.forEach(clearTimeout);
        };
    }, []);

    const handlePurchase = (upgradeId) => {
        const upgrade = upgrades.find(u => u.id === upgradeId);
        const cost = getUpgradeCost(upgrade, upgrade.level);

        if (money >= cost) {
            onPurchase(upgradeId);
            setPurchaseAnimation(upgradeId);

            // Create particle burst effect
            const button = buttonRefs.current[upgradeId];
            if (button) {
                const rect = button.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const newParticles = generateParticles(centerX, centerY);
                setParticles(prev => [...prev.slice(-36), ...newParticles]);

                const timeout = setTimeout(() => {
                    setPurchaseAnimation(null);
                    setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
                    timeoutRefs.current = timeoutRefs.current.filter(t => t !== timeout);
                }, 800);
                timeoutRefs.current.push(timeout);
            }
        }
    };

    const formatNumber = useCallback((num) => {
        if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
        if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
        return num.toString();
    }, []);

    return (
        <div className="w-full max-w-md mx-auto space-y-4 relative">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-black text-white italic tracking-tighter">魔導購買部</h2>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">除霊を効率化するツールや使い魔の契約</div>
            </div>

            <div className="grid grid-cols-1 gap-4 pb-24">
                {upgrades.map((upgrade) => {
                    const cost = getUpgradeCost(upgrade, upgrade.level);
                    const canAfford = money >= cost;
                    const Icon = iconMap[upgrade.icon] || Sparkles;
                    const isAnimating = purchaseAnimation === upgrade.id;

                    return (
                        <div
                            key={upgrade.id}
                            className={`
                              relative bg-white/5 border rounded-2xl p-4 transition-all overflow-hidden
                              ${canAfford ? 'border-white/20' : 'border-white/5 opacity-60'}
                              ${isAnimating ? 'animate-money-pop scale-105' : ''}
                            `}
                        >
                            {/* レベル帯 */}
                            <div className="absolute top-0 right-0 bg-neon-purple text-white px-4 py-1 rounded-bl-2xl text-[10px] font-black italic shadow-lg z-10">
                                LV.{upgrade.level}
                            </div>

                            <div className="flex items-center gap-5 relative z-10">
                                {/* キャラクターアイコン */}
                                <div className={`
                                    w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center border-4
                                    ${canAfford ? 'border-white/40' : 'border-white/10'}
                                    bg-black/40 shadow-inner
                                `}>
                                    {upgrade.image ? (
                                        <img src={upgrade.image} alt={upgrade.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <Icon size={32} />
                                    )}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-black text-white italic tracking-tighter truncate">
                                        {upgrade.name}
                                    </h3>
                                    <p className="text-[10px] text-white/50 leading-tight line-clamp-2 mt-1 mb-2">
                                        {upgrade.lore}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <div className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                                            +{(upgrade.baseIncome * upgrade.level).toLocaleString()} MP/秒
                                        </div>
                                    </div>
                                </div>

                                {/* パワーアップボタン */}
                                <button
                                    ref={el => buttonRefs.current[upgrade.id] = el}
                                    onClick={() => handlePurchase(upgrade.id)}
                                    disabled={!canAfford}
                                    className={`
                                      flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-2xl font-black transition-all min-w-[90px]
                                      ${canAfford
                                            ? 'bg-white text-black shadow-[0_6px_0_#cccccc] active:translate-y-1 active:shadow-[0_2px_0_#cccccc]'
                                            : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/10'
                                        }
                                    `}
                                >
                                    <span className="text-[10px] uppercase opacity-60">Level Up</span>
                                    <div className="text-xs">
                                        {canAfford ? `${formatNumber(cost)}` : <Lock size={14} className="mx-auto" />}
                                    </div>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Purchase particles */}
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="purchase-particle"
                    style={{
                        position: 'fixed',
                        left: `${particle.x}px`,
                        top: `${particle.y}px`,
                        '--tx': `${particle.tx}px`,
                        '--ty': `${particle.ty}px`,
                        zIndex: 100
                    }}
                />
            ))}
        </div>
    );
});

Shop.displayName = 'Shop';

export default Shop;
