export const tutorialContent = {
    INTRO: [
        {
            title: "目覚めよ、魔導士よ",
            description: "ここはデジタル世界の深淵。グリッチどもが暴れているようだな。\nまずは「除霊開始」で、奴らを一掃しに行くぞ。",
            target: "fight-button",
            position: "bottom",
            action: "tap-fight-button"
        },
        {
            title: "魔力の紡ぎ方",
            description: "詠唱ボタンを叩き、魔法を織り成せ。\n流れる紋章と同じ色のキーを、正確に刻むのだ。",
            target: "magic-keyboard",
            position: "top",
            action: "tap-magic-button"
        },
        {
            title: "連鎖の共鳴（コンボ）",
            description: "途切れぬ詠唱は共鳴（コンボ）を生む。\n共鳴が深まるほど、獲得できる魔力（MP）は膨れ上がるぞ。",
            target: "combo-display",
            position: "center",
            action: "auto"
        }
    ],
    HUB: [
        {
            title: "術式の最適化",
            description: "「魔法編成」で、君の使う術式をカスタマイズできる。\n敵の弱点を貫く、至高の構成を組み上げるのだ。",
            target: "magic-loadout-btn",
            position: "center",
            action: "auto"
        },
        {
            title: "叡智の書（アーカイブ）",
            description: "ここには奴らの記録が記されている。\n世界を知ることは、勝利への近道となるはずだ。",
            target: "archive-btn",
            position: "center",
            action: "auto"
        }
    ],
    BATTLE: [
        {
            title: "共振の法則",
            description: "敵と同属性の術式は、強力な共振を引き起こす。\n色を合わせ、一撃で沈めるのだ。",
            target: "monster-element",
            position: "center",
            action: "auto"
        },
        {
            title: "神速の連撃",
            description: "魔力を叩き込む速度が、そのまま威力へと変換される。\nリズムを掴み、神速の連撃を叩き込め。",
            target: "magic-keyboard",
            position: "top",
            action: "auto"
        }
    ],
    SYSTEM: [
        {
            title: "魔力の昇華",
            description: "集めたMPを使い、術式や魔力回路を強化できる。\n「ショップ」でさらなる高みを目指すのだ。",
            target: "shop-tab",
            position: "bottom",
            action: "auto"
        },
        {
            title: "至高の魔導器（アーティファクト）",
            description: "「古代遺物」は、君の魂に刻まれる永続の力だ。\n転生（リバースト）で得る「魂の欠片」で、これを顕現させよ。",
            target: "artifact-btn",
            position: "center",
            action: "auto"
        }
    ]
};
