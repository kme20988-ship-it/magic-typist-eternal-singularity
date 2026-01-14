import { Zap, Clock, Coins, Tag, Shield, Sword } from 'lucide-react';

export const artifactData = [
    {
        id: 'gold_keyboard',
        name: '黄金のキーボード',
        description: 'タップ攻撃力が永続的に上昇する',
        effectDescription: '攻撃力 +50% / Lv',
        baseCost: 1,
        costMultiplier: 1.5,
        maxLevel: 50,
        effectType: 'damage_multiplier',
        effectValue: 0.5,
        icon: Zap,
        color: 'text-yellow-400'
    },
    {
        id: 'time_stopper',
        name: '時間停止の砂時計',
        description: 'コンボの受付時間が延長される',
        effectDescription: '受付時間 +0.5秒 / Lv',
        baseCost: 3,
        costMultiplier: 2.0,
        maxLevel: 10,
        effectType: 'combo_duration',
        effectValue: 500, // ms
        icon: Clock,
        color: 'text-blue-400'
    },
    {
        id: 'greed_wallet',
        name: '強欲のガマ口',
        description: 'コイン獲得量が永続的に上昇する',
        effectDescription: '獲得量 +20% / Lv',
        baseCost: 2,
        costMultiplier: 1.4,
        maxLevel: 100,
        effectType: 'income_multiplier',
        effectValue: 0.2,
        icon: Coins,
        color: 'text-green-400'
    },
    {
        id: 'gacha_coupon',
        name: 'ガチャ優待券',
        description: 'ガチャのコストが減少する',
        effectDescription: 'コスト -5% / Lv',
        baseCost: 5,
        costMultiplier: 2.5,
        maxLevel: 10,
        effectType: 'gacha_discount',
        effectValue: 0.05,
        icon: Tag,
        color: 'text-pink-400'
    },
    {
        id: 'ancient_shield',
        name: '古のプロテクター',
        description: 'チャントブレイクのゲージ上昇量アップ',
        effectDescription: '上昇量 +10% / Lv',
        baseCost: 4,
        costMultiplier: 1.8,
        maxLevel: 20,
        effectType: 'break_bonus',
        effectValue: 0.1,
        icon: Shield,
        color: 'text-purple-400'
    }
];
