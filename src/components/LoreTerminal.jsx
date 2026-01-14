import React, { useState, useEffect } from 'react';
import { X, Terminal, Lock, Database, FileText, ChevronRight } from 'lucide-react';
import { gameConfig } from '../utils/gameConfig';

const LoreTerminal = ({ totalEarned, onClose }) => {
    const [selectedLog, setSelectedLog] = useState(null);
    const [displayText, setDisplayText] = useState("");


    // タイピングエフェクト
    useEffect(() => {
        if (selectedLog) {
            setDisplayText("");
            let i = 0;
            const content = selectedLog.content;
            const timer = setInterval(() => {
                setDisplayText(content.slice(0, i + 1));
                i++;
                if (i >= content.length) clearInterval(timer);
            }, 15);
            return () => clearInterval(timer);
        }
    }, [selectedLog]);

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-500">
            <div className="w-full max-w-4xl h-[80vh] bg-[#050505] border border-neon-cyan/20 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,255,255,0.05)] flex flex-col md:flex-row font-sans relative">
                {/* 背景画像 */}
                <div
                    className="absolute inset-0 z-0 opacity-40 mix-blend-screen bg-center bg-cover pointer-events-none"
                    style={{ backgroundImage: 'url(/assets/terminal_bg.jpg)' }}
                />
                <div className="absolute inset-0 z-0 bg-black/60 backdrop-blur-[2px] pointer-events-none" />

                {/* 左サイド：ログ一覧 */}
                <div className="w-full md:w-80 border-r border-white/5 bg-white/[0.01] flex flex-col relative z-10">
                    <div className="p-6 border-b border-white/5 flex items-center gap-2">
                        <Terminal size={18} className="text-neon-cyan" />
                        <h2 className="text-sm font-black text-white/80 uppercase tracking-widest italic">機密アーカイブ</h2>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                        {gameConfig.loreLogs.map(log => {
                            const isLocked = totalEarned < log.unlockThreshold;
                            return (
                                <button
                                    key={log.id}
                                    disabled={isLocked}
                                    onClick={() => setSelectedLog(log)}
                                    className={`
                                        w-full p-4 rounded-2xl flex items-center justify-between transition-all group
                                        ${isLocked ? 'opacity-20 cursor-not-allowed' : 'hover:bg-white/5 active:scale-95'}
                                        ${selectedLog?.id === log.id ? 'bg-neon-cyan/10 border border-neon-cyan/30' : 'border border-transparent'}
                                    `}
                                >
                                    <div className="flex items-center gap-3">
                                        {isLocked ? <Lock size={14} className="text-white/20" /> : <Database size={14} className="text-neon-cyan" />}
                                        <div className="text-left">
                                            <div className={`text-[10px] font-black uppercase tracking-widest ${selectedLog?.id === log.id ? 'text-neon-cyan' : 'text-white/40'}`}>
                                                {log.id}
                                            </div>
                                            <div className="text-xs font-bold text-white/80">{isLocked ? '機密事項' : log.title}</div>
                                        </div>
                                    </div>
                                    {!isLocked && <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                                </button>
                            );
                        })}
                    </div>

                    {/* 同期進行度 */}
                    <div className="p-6 border-t border-white/5 bg-black/40">
                        <div className="text-[10px] font-black text-white/20 uppercase mb-2">アーカイブ同期状況</div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-neon-cyan shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all duration-1000"
                                style={{ width: `${Math.min(100, (totalEarned / 20000) * 100)}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* 右メイン：内容表示 */}
                <div className="flex-1 flex flex-col relative overflow-hidden z-10">
                    {/* ヘッダー */}
                    <div className="p-6 border-b border-white/5 flex items-center justify-between bg-black/20">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                            <div className="text-[10px] tracking-widest text-white/40 uppercase">局への接続: 安定</div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/5 rounded-xl transition-colors text-white/40 hover:text-white"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex-1 p-8 overflow-y-auto custom-scrollbar flex flex-col">
                        {selectedLog ? (
                            <div className="animate-in fade-in duration-500">
                                <div className="flex items-center gap-2 mb-8 text-neon-cyan">
                                    <FileText size={16} />
                                    <span className="text-xs font-black uppercase tracking-[0.3em]">{selectedLog.title}</span>
                                </div>
                                <div className="text-white/80 leading-relaxed text-sm whitespace-pre-wrap font-mono">
                                    {displayText}
                                    <span className="inline-block w-2 h-4 bg-neon-cyan ml-1 animate-pulse" />
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center opacity-20">
                                <Terminal size={64} className="mb-6 rotate-12" />
                                <div className="text-xs font-black uppercase tracking-[0.4em] mb-2">アーカイブにアクセス</div>
                                <div className="text-[10px] tracking-widest">記録を選択して復号を開始してください...</div>
                            </div>
                        )}
                    </div>

                    {/* スキャンラインエフェクト */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />
                </div>
            </div>
        </div>
    );
};

export default LoreTerminal;
