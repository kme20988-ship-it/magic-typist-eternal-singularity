import React, { useState, useEffect, useMemo } from 'react';
import { X, Sparkles, ArrowDown } from 'lucide-react';
import { tutorialContent } from '../data/tutorialContent';
import { gameConfig } from '../utils/gameConfig';

const InteractiveTutorial = ({ type = 'INTRO', onComplete, onSkip, currentSpell, currentProgress }) => {
    const [showWelcome, setShowWelcome] = useState(type === 'INTRO');
    const [currentStep, setCurrentStep] = useState(0);
    const [waitingForAction, setWaitingForAction] = useState(false);

    const tutorialSteps = useMemo(() => tutorialContent[type] || tutorialContent.INTRO, [type]);

    // Get the name and ID of the magic button to press for the current step
    const targetInfo = useMemo(() => {
        if (!currentSpell || currentSpell.length === 0 || currentProgress >= currentSpell.length) return null;
        const targetId = currentSpell[currentProgress];
        const attr = gameConfig.attributes.find(a => a.id === targetId);
        return attr ? { id: targetId, name: attr.name } : null;
    }, [currentSpell, currentProgress]);

    const step = tutorialSteps[currentStep];
    const isLastStep = currentStep === tutorialSteps.length - 1;

    const handleNext = React.useCallback(() => {
        if (isLastStep) {
            onComplete();
        } else {
            setCurrentStep(prev => prev + 1);
        }
    }, [isLastStep, onComplete]);

    useEffect(() => {
        if (step.action === 'auto') {
            setTimeout(() => setWaitingForAction(false), 0);
        } else {
            setTimeout(() => setWaitingForAction(true), 0);
        }
    }, [currentStep, step.action]);

    // ユーザーアクションの監視
    useEffect(() => {
        if (!waitingForAction) return;

        const handleAction = (e) => {
            const target = e.target.closest('[data-tutorial-id]');
            if (!target) return;

            const actionId = target.getAttribute('data-tutorial-id');

            if (
                (step.action === 'tap-fight-button' && actionId === 'fight-button') ||
                (step.action === 'tap-magic-button' && actionId === 'magic-button')
            ) {
                setWaitingForAction(false);
                setTimeout(() => {
                    handleNext();
                }, 400);
            }
        };

        document.addEventListener('click', handleAction, true);
        return () => document.removeEventListener('click', handleAction, true);
    }, [waitingForAction, step.action, currentStep, handleNext]);


    const handleStartTutorial = () => setShowWelcome(false);
    const handleSkipTutorial = () => onSkip();

    const getPositionClasses = () => {
        switch (step.position) {
            case 'top': return 'top-32 left-1/2 -translate-x-1/2';
            case 'bottom': return 'bottom-32 left-1/2 -translate-x-1/2';
            case 'center':
            default: return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
        }
    };

    const interpolatedDescription = useMemo(() => {
        return step.description.replace('${targetInfo?.name}', targetInfo?.name || '魔法');
    }, [step.description, targetInfo]);

    if (showWelcome) {
        return (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 font-sans">
                <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
                <div className="relative w-full max-w-md dragon-glass-card bg-[#1a1a1a] border-4 border-white/20 p-8 rounded-3xl shadow-2xl text-center">
                    <div className="mb-6 inline-flex p-4 bg-neon-cyan/20 rounded-2xl animate-bounce">
                        <Sparkles className="text-neon-cyan" size={48} />
                    </div>
                    <div className="text-[10px] text-neon-purple font-black tracking-[0.4em] uppercase mb-2">通達</div>
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter italic">
                        {type === 'INTRO' ? '新人除霊師研修' : '新しい機能ガイド'}
                    </h2>
                    <p className="text-white/80 mb-8 leading-relaxed text-sm font-bold">
                        {type === 'INTRO'
                            ? 'デジタル除霊局へようこそ。\nまずは基本的な手順をレクチャーします。'
                            : '新しい力や機能が解放された。\n私が導いてやろう、準備はよいか？'}
                    </p>
                    <div className="space-y-3">
                        <button
                            onClick={handleStartTutorial}
                            className="w-full py-4 rounded-xl font-black text-xl italic bg-white text-black hover:scale-[1.02] active:scale-95 transition-all shadow-[0_4px_0_#ccc]"
                        >
                            ガイドを見る
                        </button>
                        <button
                            onClick={handleSkipTutorial}
                            className="w-full py-3 rounded-xl font-bold text-xs text-white/30 hover:text-white transition-colors"
                        >
                            閉じる
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const currentTarget = step.target === 'magic-button-${targetInfo.id}' && targetInfo
        ? `magic-button-${targetInfo.id}`
        : step.target;

    return (
        <div className="fixed inset-0 z-[1000] pointer-events-none font-sans">
            <div className="absolute inset-0 bg-black/60 pointer-events-none" />

            {currentTarget && (
                <style>{`
                    [data-tutorial-id="${currentTarget}"], [data-tutorial-target="${currentTarget}"] {
                        position: relative !important;
                        z-index: 1250 !important;
                        pointer-events: auto !important;
                        outline: 4px solid #fff !important;
                        outline-offset: 4px !important;
                        box-shadow: 0 0 50px rgba(255, 255, 255, 0.4) !important;
                        animation: tutorial-pulse 1.5s infinite !important;
                    }
                    @keyframes tutorial-pulse {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.02); }
                    }
                `}</style>
            )}

            {(step.action === 'tap-magic-button' || step.action === 'tap-fight-button') && (
                <div className={`absolute left-1/2 -translate-x-1/2 z-[1260] pointer-events-none ${step.position === 'top' ? 'top-[40%]' : 'bottom-[25%]'}`}>
                    <ArrowDown size={64} className="text-neon-cyan animate-bounce drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                </div>
            )}

            <div className={`absolute ${getPositionClasses()} w-[90%] max-w-lg z-[1300] pointer-events-none transition-all duration-500 ease-out`}>
                <div className="bg-[#1a1a1a] border-2 border-white/20 p-6 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] pointer-events-auto relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="flex items-start justify-between mb-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-neon-cyan/20 rounded-lg">
                                <Sparkles className="text-neon-cyan" size={16} />
                            </div>
                            <h3 className="text-lg font-black text-white italic tracking-tight">{step.title}</h3>
                        </div>
                        <button onClick={onSkip} className="text-white/30 hover:text-white transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    <p className="text-white/90 text-sm font-bold leading-relaxed mb-6 whitespace-pre-line relative z-10">
                        {interpolatedDescription}
                    </p>

                    <div className="flex items-center justify-between relative z-10">
                        <div className="flex gap-1.5">
                            {tutorialSteps.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === currentStep ? 'w-8 bg-neon-cyan shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'w-2 bg-white/10'
                                        }`}
                                />
                            ))}
                        </div>

                        {!waitingForAction ? (
                            <button
                                onClick={handleNext}
                                className="py-2 px-6 rounded-xl font-black italic bg-white text-black hover:bg-gray-200 shadow-lg active:scale-95 transition-all"
                            >
                                {isLastStep ? "完了" : "次へ"}
                            </button>
                        ) : (
                            <div className="text-neon-cyan font-black text-[10px] uppercase tracking-widest animate-pulse border border-neon-cyan/30 px-3 py-1 rounded-full bg-neon-cyan/10">
                                待機中...
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveTutorial;
