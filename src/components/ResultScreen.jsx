import React from 'react';
import { Trophy, Zap, Target, Share2, RefreshCw } from 'lucide-react';

const ResultScreen = ({ score, maxCombo, accuracy, onRestart }) => {
    // 命中率によるランク付け
    const getRank = () => {
        if (accuracy >= 95) return { name: "神速の打鍵士", color: "text-yellow-400" };
        if (accuracy >= 80) return { name: "熟練の魔導師", color: "text-purple-400" };
        if (accuracy >= 60) return { name: "見習い修行中", color: "text-blue-400" };
        return { name: "キーボードの初心者", color: "text-gray-400" };
    };

    const rank = getRank();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl animate-in fade-in zoom-in duration-300 font-sans">
            <div className="w-full max-w-sm dragon-glass-card bg-[#1a1a1a] border-4 border-white/20 p-8 relative overflow-hidden shadow-2xl">
                {/* 背景グロウ */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-yellow-500/5 blur-[100px]" />

                {/* Victory Banner Style */}
                <div className="text-center mb-10 relative">
                    <div className="text-sm font-black text-yellow-500 tracking-[0.4em] uppercase mb-2">作戦完了</div>
                    <h2 className="text-6xl font-black text-white italic tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">除霊成功!!</h2>
                    <div className={`text-xs font-black mt-4 px-4 py-1 rounded-full bg-white text-black inline-block uppercase tracking-widest`}>
                        {rank.name}
                    </div>
                </div>

                {/* 統計リスト */}
                <div className="space-y-3 mb-10 relative">
                    <div className="flex items-center justify-between p-4 bg-black/40 rounded-3xl border-2 border-white/5">
                        <div className="flex items-center gap-2 text-white/40">
                            <Trophy size={16} />
                            <span className="text-[10px] font-black uppercase tracking-widest">獲得魔力</span>
                        </div>
                        <div className="text-2xl font-black text-white italic">{score.toLocaleString()} <span className="text-xs not-italic opacity-40">MP</span></div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-black/40 rounded-3xl border-2 border-white/5">
                        <div className="flex items-center gap-2 text-white/40">
                            <Zap size={16} />
                            <span className="text-[10px] font-black uppercase tracking-widest">最高コンボ</span>
                        </div>
                        <div className="text-2xl font-black text-white italic">{maxCombo}</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-black/40 rounded-3xl border-2 border-white/5">
                        <div className="flex items-center gap-2 text-white/40">
                            <Target size={16} />
                            <span className="text-[10px] font-black uppercase tracking-widest">的中率</span>
                        </div>
                        <div className="text-2xl font-black text-white italic">{accuracy}%</div>
                    </div>
                </div>

                {/* アクションボタン */}
                <div className="grid grid-cols-2 gap-4 relative">
                    <button
                        onClick={onRestart}
                        className="stage-select-btn flex flex-col items-center justify-center p-4 bg-white text-black font-black italic active:translate-y-1 shadow-[0_6px_0_#ccc] active:shadow-none transition-all"
                    >
                        <RefreshCw size={24} className="mb-1" />
                        <span className="text-xs">再挑戦</span>
                    </button>
                    <button
                        className="stage-select-btn flex flex-col items-center justify-center p-4 bg-neon-cyan text-black font-black italic active:translate-y-1 shadow-[0_6px_0_#06b6d4] active:shadow-none transition-all"
                        onClick={() => alert('結果をシェアしました！')}
                    >
                        <Share2 size={24} className="mb-1" />
                        <span className="text-xs">シェア</span>
                    </button>
                </div>

                {/* フッター */}
                <div className="text-center mt-8 text-white/20 text-[10px] font-bold tracking-widest uppercase">
                    デジタル除霊局所属 - 第12支部
                </div>
            </div>
        </div>
    );
};

export default ResultScreen;
