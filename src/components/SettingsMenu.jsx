import React, { useState } from 'react';
import { X, Volume2, VolumeX, Smartphone, Monitor, ShieldCheck, Bug } from 'lucide-react';

const SettingsMenu = ({ settings, onUpdate, onClose, onRebirth, canRebirth, nextRebirthOrbs, totalMoney, version = "v2.5.1" }) => {
    const [clickCount, setClickCount] = useState(0);
    const [isAdvanced, setIsAdvanced] = useState(false);
    const [showRebirthConfirm, setShowRebirthConfirm] = useState(false);

    const handleVersionClick = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);
        if (newCount >= 7) {
            setIsAdvanced(true);
            setClickCount(0);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="w-full max-w-md bg-[#1a1a1a] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 font-sans">
                {/* ヘッダー */}
                <div className="flex items-center justify-between p-8 pb-4">
                    <h2 className="text-3xl font-black text-white italic tracking-tighter">環境設定</h2>
                    <button
                        onClick={onClose}
                        className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors"
                    >
                        <X size={24} className="text-white/60" />
                    </button>
                </div>

                {/* Rebirth Modal Overlay */}
                {showRebirthConfirm && (
                    <div className="absolute inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300">
                        <div className="text-4xl mb-4">🔮</div>
                        <h3 className="text-2xl font-black text-white mb-2">転生しますか？</h3>
                        <p className="text-sm text-gray-400 mb-6">
                            所持金・ステージ進行・通常アップグレードがリセットされます。<br />
                            代わりに <span className="text-neon-purple font-bold">{nextRebirthOrbs} 個の魂のオーブ</span> を獲得します。<br />
                            <span className="text-xs text-gray-500 mt-2 block">※ガチャで集めたユニットとアーティファクトは引き継がれます。</span>
                        </p>
                        <div className="flex gap-4 w-full">
                            <button
                                onClick={() => setShowRebirthConfirm(false)}
                                className="flex-1 py-3 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-colors"
                            >
                                キャンセル
                            </button>
                            <button
                                onClick={() => {
                                    onRebirth();
                                    setShowRebirthConfirm(false);
                                    onClose();
                                }}
                                className="flex-1 py-3 rounded-xl bg-neon-purple text-white font-bold hover:bg-neon-purple/80 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                            >
                                転生を実行
                            </button>
                        </div>
                    </div>
                )}

                {/* コンテンツ */}
                <div className="p-8 pt-4 space-y-6">
                    {/* 基本設定 */}
                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">基本設定</label>

                        {/* サウンド */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-5 bg-white/5 rounded-3xl border border-white/5 group hover:border-neon-purple/50 transition-all pb-2">
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-2xl ${settings?.sound ? 'bg-neon-purple text-white' : 'bg-white/5 text-white/20'}`}>
                                        {settings?.sound ? <Volume2 size={24} /> : <VolumeX size={24} />}
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">サウンド設定</div>
                                        <div className="text-xs text-white/40 italic">効果音とBGM</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => onUpdate({ sound: !settings?.sound })}
                                    className={`w-16 h-8 rounded-full relative transition-all ${settings?.sound ? 'bg-neon-purple shadow-neon-purple/50 shadow-lg' : 'bg-white/10'}`}
                                >
                                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${settings?.sound ? 'left-9' : 'left-1'}`} />
                                </button>
                            </div>
                            {settings?.sound && (
                                <div className="px-5 pb-5 pt-2 animate-in slide-in-from-top-2 duration-300">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-bold text-white/30 uppercase w-12 text-right">{settings.music}%</span>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={settings.music}
                                            onChange={(e) => onUpdate({ music: parseInt(e.target.value) })}
                                            className="flex-1 accent-neon-purple bg-white/10 h-1 rounded-full appearance-none cursor-pointer"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 振動 */}
                        <div className="flex items-center justify-between p-5 bg-white/5 rounded-3xl border border-white/5 group hover:border-neon-cyan/50 transition-all">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-2xl ${settings?.haptic ? 'bg-neon-cyan text-black' : 'bg-white/5 text-white/20'}`}>
                                    <Smartphone size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-white">振動フィードバック</div>
                                    <div className="text-xs text-white/40 italic">タイピング時の感触</div>
                                </div>
                            </div>
                            <button
                                onClick={() => onUpdate({ haptic: !settings?.haptic })}
                                className={`w-16 h-8 rounded-full relative transition-all ${settings?.haptic ? 'bg-neon-cyan shadow-neon-cyan/50 shadow-lg' : 'bg-white/10'}`}
                            >
                                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${settings?.haptic ? 'left-9' : 'left-1'}`} />
                            </button>
                        </div>
                    </div>

                    {/* Rebirth Section */}
                    <div className="space-y-4 pt-4 border-t border-white/5">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">転生システム</label>
                        <div className={`
                            p-5 rounded-3xl border transition-all relative overflow-hidden group
                            ${canRebirth ? 'bg-neon-purple/20 border-neon-purple/50 cursor-pointer hover:bg-neon-purple/30' : 'bg-white/5 border-white/5 opacity-50'}
                        `}>
                            <button
                                onClick={() => canRebirth && setShowRebirthConfirm(true)}
                                disabled={!canRebirth}
                                className="w-full flex items-center justify-between relative z-10 text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-2xl bg-black/40 text-neon-purple shadow-lg">
                                        <span className="text-xl">🔮</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">転生 (Rebirth)</div>
                                        {canRebirth ? (
                                            <div className="text-xs text-neon-purple font-bold animate-pulse">
                                                獲得可能オーブ: {nextRebirthOrbs}個
                                            </div>
                                        ) : (
                                            <div className="text-[10px] text-white/40">
                                                必要MP: {1000000 - totalMoney} MP
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="text-neon-purple">Run &gt;</div>
                            </button>

                            {canRebirth && (
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                            )}
                        </div>
                    </div>

                    {/* 上級者設定 */}
                    {isAdvanced && (
                        <div className="space-y-4 pt-4 border-t border-white/5 animate-in slide-in-from-top-4 duration-500">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-neon-purple-light flex items-center gap-2">
                                <Bug size={12} />
                                上級者向けマトリクス設定
                            </label>

                            {/* 画面の揺れ */}
                            <div className="flex items-center justify-between p-5 bg-neon-purple/10 rounded-3xl border border-neon-purple/20">
                                <div className="flex items-center gap-4">
                                    <Monitor size={20} className="text-neon-purple-light" />
                                    <div>
                                        <div className="font-bold text-white text-sm">画面の揺れ効果</div>
                                        <div className="text-[10px] text-white/40 italic uppercase">躍動感のある演出</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => onUpdate({ shake: !settings?.shake })}
                                    className={`w-12 h-6 rounded-full relative transition-all ${settings?.shake ? 'bg-neon-purple' : 'bg-white/10'}`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings?.shake ? 'left-7' : 'left-1'}`} />
                                </button>
                            </div>

                            {/* 軽量化 */}
                            <div className="flex items-center justify-between p-5 bg-neon-cyan/10 rounded-3xl border border-neon-cyan/20">
                                <div className="flex items-center gap-4">
                                    <ShieldCheck size={20} className="text-neon-cyan" />
                                    <div>
                                        <div className="font-bold text-white text-sm">エフェクトの軽量化</div>
                                        <div className="text-[10px] text-white/40 italic uppercase">低スペック端末向け</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => onUpdate({ lowDetail: !settings?.lowDetail })}
                                    className={`w-12 h-6 rounded-full relative transition-all ${settings?.lowDetail ? 'bg-neon-cyan' : 'bg-white/10'}`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings?.lowDetail ? 'left-7' : 'left-1'}`} />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* フッター */}
                    <div className="pt-4 flex flex-col items-center gap-4">
                        <button
                            onClick={handleVersionClick}
                            className={`text-[10px] font-bold tracking-[0.2em] transition-all hover:scale-110 active:scale-95 py-2 px-4 rounded-full ${isAdvanced ? 'text-neon-purple bg-neon-purple/10' : 'text-white/20 hover:text-white/40'}`}
                        >
                            バージョン {version} {isAdvanced && "(マトリクス解放済み)"}
                        </button>

                        {!isAdvanced && clickCount > 0 && clickCount < 7 && (
                            <div className="text-[10px] text-white/20 animate-pulse uppercase tracking-widest">
                                あと {7 - clickCount} 回タップでマトリクスを解放...
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsMenu;
