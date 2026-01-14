export const unitData = [
    // --- Normal (N) ---
    {
        id: 'n_slime',
        name: '宿題スライム',
        rarity: 'N',
        description: '夏休みの最終日まで放置された宿題が意思を持った姿。「ドリル、ヤダ」と鳴く。',
        stats: { attack: 10, speed: 10, cost: 50 },
        image: '/assets/units/n_slime.png'
    },
    {
        id: 'n_dog',
        name: 'ファイアウォール犬',
        rarity: 'N',
        description: 'セキュリティソフトのマスコットキャラ。吠えるだけで何もしない。かわいい。',
        stats: { attack: 15, speed: 20, cost: 75 },
        image: '/assets/units/n_dog.png'
    },
    {
        id: 'n_egg',
        name: 'たまご（足つき）',
        rarity: 'N',
        description: '冷蔵庫の奥で賞味期限が切れた卵。歩いて新しい住処を探している。',
        stats: { attack: 5, speed: 30, cost: 30 },
        image: '/assets/units/n_egg.png'
    },
    {
        id: 'n_wifi',
        name: '微弱Wi-Fiお化け',
        rarity: 'N',
        description: 'アンテナが一本しか立たないWi-Fiの怨念。動画を低画質にする呪いをかける。',
        stats: { attack: 12, speed: 15, cost: 60 },
        image: '/assets/units/n_wifi.png'
    },

    // --- Rare (R) ---
    {
        id: 'r_printer',
        name: '紙詰まりプリンター',
        rarity: 'R',
        description: '急いでいる時ほど動かない頑固なプリンター。インク代が高いのが悩み。',
        stats: { attack: 30, speed: 5, cost: 200 },
        image: '/assets/units/r_printer.png'
    },
    {
        id: 'r_mouse',
        name: '暴走ゲーミングマウス',
        rarity: 'R',
        description: '持ち主の手を離れて勝手にFPSをプレイするマウス。エイムがすごい。',
        stats: { attack: 25, speed: 50, cost: 180 },
        image: '/assets/units/r_mouse.png'
    },
    {
        id: 'r_sandwich',
        name: 'スパムサンド',
        rarity: 'R',
        description: '迷惑メールの具材で作ったサンドイッチ。食べると架空請求が届く。',
        stats: { attack: 40, speed: 12, cost: 250 },
        image: '/assets/units/r_sandwich.png'
    },

    // --- Super Rare (SR) ---
    {
        id: 'sr_server',
        name: '竜角サーバー',
        rarity: 'SR',
        description: '最新鋭のAIサーバーだが、なぜか高周波の咆哮を上げるバグがある。冷却ファンがうるさい。',
        stats: { attack: 80, speed: 8, cost: 800 },
        image: '/assets/units/sr_server.png'
    },
    {
        id: 'sr_drake',
        name: 'ニートドラゴン',
        rarity: 'SR',
        description: '働かずに親の金でガチャを回すドラゴン。口から火を吹くが、カップ麺のお湯を沸かすのにしか使わない。',
        stats: { attack: 100, speed: 25, cost: 950 },
        image: '/assets/units/sr_drake.png'
    },

    // --- Uber Super Rare (UR) ---
    {
        id: 'ur_god',
        name: '神ゲーマー竜',
        rarity: 'UR',
        description: '全てのゲームを完全クリアした伝説のドラゴン。複数のキーボードを同時に操作し、現実世界すらもバグらせる。',
        stats: { attack: 500, speed: 60, cost: 3000 },
        image: '/assets/units/ur_god.png'
    },
    {
        id: 'ur_kimo',
        name: '次元を渡る魔導機',
        rarity: 'UR',
        description: 'この世のものではない駆動音を響かせる、未知の演算機。その足取りはデータを超え、現実の理を書き換える。',
        stats: { attack: 50, speed: 100, cost: 2500 },
        image: '/assets/units/ur_kimo.png'
    },

    // --- Curated Custom Units (Manual Selection) ---
    // User requested specific ranks.
    {
        id: 'curated_01',
        name: '始まりの巨神',
        rarity: 'UR',
        description: '【伝説】最初に観測されたデータ。全ての起源。（19:08:39）',
        stats: { attack: 3000, speed: 100, cost: 5000 },
        image: '/assets/custom_units/magi_unit_190839.png'
    },
    {
        id: 'curated_02',
        name: '時空の覇者',
        rarity: 'UR',
        description: '【伝説】二番目に次元を超えた存在。圧倒的威圧感。（19:08:44）',
        stats: { attack: 2800, speed: 90, cost: 4800 },
        image: '/assets/custom_units/magi_unit_190844.png'
    },
    {
        id: 'curated_03',
        name: '次元竜ガルグ',
        rarity: 'UR',
        description: '【伝説】19時08分世代の頂点に立つ竜。（19:08:47）',
        stats: { attack: 2500, speed: 85, cost: 4500 },
        image: '/assets/custom_units/magi_unit_190847.png'
    },

    // --- SSR Class (19:22 Generation) ---
    {
        id: 'curated_04',
        name: '異界の騎士団長',
        rarity: 'SSR',
        description: '【超激レア】19時22分世代のリーダー格。（19:22:07）',
        stats: { attack: 1500, speed: 70, cost: 2500 },
        image: '/assets/custom_units/magi_unit_192207.png'
    },
    {
        id: 'curated_05',
        name: '深淵の魔導師',
        rarity: 'SSR',
        description: '【超激レア】禁断の知識を持つ賢者。（19:22:11）',
        stats: { attack: 1400, speed: 65, cost: 2400 },
        image: '/assets/custom_units/magi_unit_192211.png'
    },
    {
        id: 'curated_06',
        name: '紅蓮の狂戦士',
        rarity: 'SSR',
        description: '【超激レア】怒りで我を忘れた戦士。（19:22:13）',
        stats: { attack: 1600, speed: 60, cost: 2300 },
        image: '/assets/custom_units/magi_unit_192213.png'
    },
    {
        id: 'curated_07',
        name: '天空の射手',
        rarity: 'SSR',
        description: '【超激レア】雲の上から狙撃する。（19:22:18）',
        stats: { attack: 1300, speed: 80, cost: 2200 },
        image: '/assets/custom_units/magi_unit_192218.png'
    },

    // --- SR Class (The Army) ---
    ...[
        '19_22_21', '19_22_23', '19_22_25', '19_22_27', '19_22_32',
        '19_22_34', '19_22_37', '19_22_40'
    ].map((time, i) => ({
        id: `curated_sr_${i}`,
        name: `機動兵器 ${time}`,
        rarity: 'SR',
        description: '【激レア】量産型だが高い性能を誇る機体。',
        stats: { attack: 800, speed: 50, cost: 1200 },
        image: `/assets/custom_units/magi_unit_${time}.png`
    })),

    // --- R Class (The Mass) ---
    ...[
        '19_22_44', '19_22_47', '19_22_50', '19_22_55',
        '19_22_57', '19_23_02', '19_23_05', '19_08_51'
    ].map((time, i) => ({
        id: `curated_r_${i}`,
        name: `歩兵 ${time}`,
        rarity: 'R',
        description: '【レア】戦場の最前線で戦う兵士。',
        stats: { attack: 300, speed: 30, cost: 500 },
        image: `/assets/custom_units/magi_unit_${time}.png`
    })),

    // --- New Expansion: Bosses & Artifacts (Generated) ---
    {
        id: 'boss_01',
        name: 'エラー404ドラゴン',
        rarity: 'UR',
        description: '【伝説】存在しないはずの竜。全てを「無」に帰す。',
        stats: { attack: 4044, speed: 44, cost: 4444 },
        image: '/assets/custom_units/error_404_dragon_boss_1767793402229.png'
    },
    {
        id: 'boss_02',
        name: 'ケーブルの王',
        rarity: 'UR',
        description: '【伝説】全ての配線を支配する王。絡まると解けない。',
        stats: { attack: 3500, speed: 20, cost: 4000 },
        image: '/assets/custom_units/cable_king_boss_1767793465036.png'
    },
    {
        id: 'boss_03',
        name: 'ブルースクリーン',
        rarity: 'SSR',
        description: '【超激レア】強制終了の化身。触れるとフリーズする。',
        stats: { attack: 2000, speed: 10, cost: 3000 },
        image: '/assets/custom_units/blue_screen_golem_boss_1767793423452.png'
    },
    {
        id: 'boss_04',
        name: 'リサイクル巨神',
        rarity: 'SSR',
        description: '【超激レア】捨てられたデータの集合体。',
        stats: { attack: 1800, speed: 30, cost: 2800 },
        image: '/assets/custom_units/recycle_bin_titan_boss_1767793483917.png'
    },
    {
        id: 'boss_05',
        name: 'FWケルベロス',
        rarity: 'SSR',
        description: '【超激レア】鉄壁の防御を誇る地獄の番犬。',
        stats: { attack: 1500, speed: 80, cost: 2600 },
        image: '/assets/custom_units/firewall_cerberus_boss_1767793442759.png'
    },
    {
        id: 'artifact_01',
        name: '黄金のキーボード',
        rarity: 'SSR',
        description: '【至宝】神が記述に用いたと言われる入力装置。',
        stats: { attack: 1000, speed: 100, cost: 2500 },
        image: '/assets/custom_units/golden_keyboard_artifact_1767793514389.png'
    },
    {
        id: 'artifact_02',
        name: '強欲の財布',
        rarity: 'SR',
        description: '【財宝】中身が無限に増えるかもしれない財布。',
        stats: { attack: 500, speed: 150, cost: 1500 },
        image: '/assets/custom_units/greed_wallet_artifact_1767793530505.png'
    },
    {
        id: 'artifact_03',
        name: '時間停止の時計',
        rarity: 'SR',
        description: '【財宝】たまに自分も止まってしまう。',
        stats: { attack: 800, speed: 10, cost: 1200 },
        image: '/assets/custom_units/time_stopper_watch_artifact_1767793549903.png'
    },
    {
        id: 'artifact_04',
        name: 'グリッチ珈琲',
        rarity: 'SR',
        description: '【食品】飲むと世界がバグって見える。',
        stats: { attack: 1200, speed: 120, cost: 800 },
        image: '/assets/custom_units/glitch_coffee_artifact_1767793566311.png'
    },
    {
        id: 'artifact_05',
        name: '無限バッテリー',
        rarity: 'SR',
        description: '【素材】エネルギーが尽きることのない電池。',
        stats: { attack: 600, speed: 200, cost: 1000 },
        image: '/assets/custom_units/infinite_battery_artifact_1767793584960.png'
    },

    // --- Kimo-Kawaii Unit Batch ---
    {
        id: 'unit_shrimp',
        name: 'エビフライコウモリ',
        rarity: 'N',
        description: 'サクサクの衣を纏ったコウモリ。空飛ぶ定食。',
        stats: { attack: 40, speed: 60, cost: 100 },
        image: '/assets/custom_units/fried_shrimp_bat_unit_1767793957033.png'
    },
    {
        id: 'unit_sushi',
        name: 'ニギリグマ（サーモン）',
        rarity: 'N',
        description: 'シャリの体を持つクモ。ネタが新鮮。',
        stats: { attack: 50, speed: 40, cost: 120 },
        image: '/assets/custom_units/sushi_spider_unit_1767793971247.png'
    },
    {
        id: 'unit_icecream',
        name: 'ソフトクリーム幽霊',
        rarity: 'N',
        description: '溶けかかったソフトクリームの霊。シルクハットが似合う。',
        stats: { attack: 30, speed: 70, cost: 90 },
        image: '/assets/custom_units/ice_cream_ghost_unit_1767793990475.png'
    },
    {
        id: 'unit_teddy',
        name: 'クトゥルフ・ベア',
        rarity: 'SR',
        description: '口から触手が生えた恐ろしくも可愛いクマ。',
        stats: { attack: 400, speed: 30, cost: 800 },
        image: '/assets/custom_units/teddy_cthulhu_unit_1767794006316.png'
    },
    {
        id: 'unit_toaster',
        name: 'トースター龍',
        rarity: 'R',
        description: '龍の足が生えたトースター。パンは焦げ気味。',
        stats: { attack: 150, speed: 80, cost: 300 },
        image: '/assets/custom_units/toaster_dragon_basic.png'
    },
    {
        id: 'unit_eyeball',
        name: '時計仕掛けの眼球',
        rarity: 'SR',
        description: '黄金の歯車に囲まれた眼球。全てを見届ける。',
        stats: { attack: 500, speed: 20, cost: 900 },
        image: '/assets/custom_units/clockwork_eyeball_unit_1767794047624.png'
    },
    {
        id: 'unit_teapot',
        name: 'ゾウさん薬缶',
        rarity: 'R',
        description: '鼻が注ぎ口になった不思議な薬缶。',
        stats: { attack: 120, speed: 40, cost: 350 },
        image: '/assets/custom_units/teapot_elephant_unit_1767794067639.png'
    },
    {
        id: 'unit_snail',
        name: '多肉植物カタツムリ',
        rarity: 'R',
        description: '背中が豪華な多肉植物になったカタツムリ。',
        stats: { attack: 100, speed: 10, cost: 400 },
        image: '/assets/custom_units/succulent_snail_unit_1767794085958.png'
    },
    {
        id: 'unit_starfish',
        name: 'ツギハギ・スター',
        rarity: 'N',
        description: 'デニム生地でパッチワークされたヒトデ。',
        stats: { attack: 45, speed: 50, cost: 110 },
        image: '/assets/custom_units/stitched_starfish_unit_1767794103788.png'
    },
    {
        id: 'unit_angler',
        name: 'ペロペロ・アンコウ',
        rarity: 'SR',
        description: 'ペロペロキャンディを提げたアンコウ。',
        stats: { attack: 450, speed: 35, cost: 850 },
        image: '/assets/custom_units/lollipop_anglerfish_unit_1767794120942.png'
    },

    // --- Batch 2.2: Kimo-Kawaii Evolution ---
    {
        id: 'unit_shrimp_v2',
        name: '真・エビフライコウモリ',
        rarity: 'SR',
        description: 'よりジューシーに、より速く進化した空飛ぶ揚げ物。',
        stats: { attack: 300, speed: 120, cost: 1500 },
        image: '/assets/custom_units/fried_shrimp_bat_beast_1767847252323.png'
    },
    {
        id: 'unit_sushi_v2',
        name: '特上ニギリグマ',
        rarity: 'SR',
        description: '厳選されたネタ。職人の技が光る八本脚。',
        stats: { attack: 350, speed: 100, cost: 1600 },
        image: '/assets/custom_units/sushi_spider_beast_1767847268404.png'
    },
    {
        id: 'unit_icecream_v2',
        name: 'ゴースト・サンデー',
        rarity: 'SSR',
        description: '底知れぬ冷気。甘美なる終わり。',
        stats: { attack: 1200, speed: 50, cost: 3000 },
        image: '/assets/custom_units/ice_cream_ghost_beast_v2_1767847283210.png'
    },
    {
        id: 'unit_teddy_v2',
        name: '深淵の超越ベア',
        rarity: 'UR',
        description: 'もう「可愛い」では済まされない。全てを飲み込む恐怖。',
        stats: { attack: 5000, speed: 40, cost: 8000 },
        image: '/assets/custom_units/teddy_cthulhu_beast_v2_1767847299817.png'
    },
    {
        id: 'unit_toaster_v2',
        name: '爆走トースト・ドラコ',
        rarity: 'SSR',
        description: '焦げ。怒り。最高速。',
        stats: { attack: 1500, speed: 200, cost: 4500 },
        image: '/assets/custom_units/toaster_dragon_beast.png'
    },
    {
        id: 'unit_eyeball_v2',
        name: '黄金の真理眼',
        rarity: 'SSR',
        description: '歯車が噛み合い、真実が露わになる。',
        stats: { attack: 2000, speed: 30, cost: 5000 },
        image: '/assets/custom_units/clockwork_eyeball_beast_1767847166966.png'
    },
    {
        id: 'unit_teapot_v2',
        name: 'キング・ゾウ・ケトル',
        rarity: 'SR',
        description: '沸騰する怒り。紅茶の時間は終わりだ。',
        stats: { attack: 800, speed: 60, cost: 2000 },
        image: '/assets/custom_units/teapot_elephant_beast_1767847181967.png'
    },
    {
        id: 'unit_snail_v2',
        name: '太古の多肉植物カブト',
        rarity: 'SR',
        description: '数千年の時を越えた重厚な装甲。',
        stats: { attack: 600, speed: 10, cost: 2500 },
        image: '/assets/custom_units/succulent_snail_beast_1767847195279.png'
    },
    {
        id: 'unit_starfish_v2',
        name: 'デッド・デニム・スター',
        rarity: 'SR',
        description: '破れ、縫い合わされ、再び立ち上がる。',
        stats: { attack: 700, speed: 80, cost: 2200 },
        image: '/assets/custom_units/stitched_starfish_beast_1767847210032.png'
    },
    {
        id: 'unit_angler_v2',
        name: '狂乱のキャンディ・フィッシュ',
        rarity: 'SSR',
        description: '甘い誘惑。その先に待つのは地獄。',
        stats: { attack: 1800, speed: 45, cost: 4800 },
        image: '/assets/custom_units/lollipop_anglerfish_beast_1767847225724.png'
    },

    // --- Batch 3: Glitch Enemy Invasions ---
    {
        id: 'enemy_folder',
        name: 'バイナリ・フォルダ',
        rarity: 'R',
        description: '圧縮されたデータ。解凍された恐怖。',
        stats: { attack: 300, speed: 20, cost: 500 },
        image: '/assets/custom_units/folder_mimic_enemy_1767846992594.png'
    },
    {
        id: 'enemy_fragment',
        name: 'フラグメント・ソウル',
        rarity: 'SR',
        description: '砕け散った意識。光るポリゴン。',
        stats: { attack: 900, speed: 60, cost: 1800 },
        image: '/assets/custom_units/fragmented_soul_enemy_1767847008290.png'
    },
    {
        id: 'enemy_static',
        name: 'スタティック・ストーム',
        rarity: 'SR',
        description: '砂嵐。警告。赤い雷。',
        stats: { attack: 1100, speed: 40, cost: 2200 },
        image: '/assets/custom_units/static_cloud_enemy_1767847023488.png'
    },
    {
        id: 'enemy_window',
        name: 'エラー・スネーク',
        rarity: 'SSR',
        description: '連鎖するダイアログ。止まらない警告。',
        stats: { attack: 2500, speed: 90, cost: 5000 },
        image: '/assets/custom_units/window_snake_enemy_1767847039340.png'
    },
    {
        id: 'enemy_hydra',
        name: 'プリミティブ・ヒドラ',
        rarity: 'UR',
        description: '立方体。球体。四角錐。数学的破壊。',
        stats: { attack: 6000, speed: 50, cost: 10000 },
        image: '/assets/custom_units/low_poly_hydra_enemy_1767847053888.png'
    },
    {
        id: 'enemy_wireframe',
        name: 'ワイヤーフレーム・レイス',
        rarity: 'R',
        description: '線の重なり。実体のない恐怖。',
        stats: { attack: 400, speed: 100, cost: 800 },
        image: '/assets/custom_units/wireframe_ghost_enemy_1767847076319.png'
    },
    {
        id: 'enemy_kernel',
        name: 'カーネル・パニック',
        rarity: 'SSR',
        description: '！。！。！。致命的な不具合。',
        stats: { attack: 3000, speed: 20, cost: 6000 },
        image: '/assets/custom_units/kernel_panic_beast_enemy_1767847093176.png'
    },
    {
        id: 'enemy_buffer',
        name: 'バッファ・オーバーフロー',
        rarity: 'SR',
        description: '溢れ出すピンクの粘液。埋め尽くされるメモリ。',
        stats: { attack: 1200, speed: 30, cost: 2400 },
        image: '/assets/custom_units/buffer_overflow_slime_enemy_1767847109093.png'
    },
    {
        id: 'enemy_null',
        name: 'ヌル・ポインタ',
        rarity: 'SSR',
        description: '何もない。そこにあるのは虚無。',
        stats: { attack: 3500, speed: 70, cost: 7000 },
        image: '/assets/custom_units/null_pointer_spectre_enemy_1767847123340.png'
    },
    {
        id: 'enemy_piranha',
        name: 'カーソル・ピラニア',
        rarity: 'UR',
        description: 'クリック。クリック。喰らい尽くす矢 arrows。',
        stats: { attack: 8000, speed: 200, cost: 15000 },
        image: '/assets/custom_units/cursor_swarm_piranha_enemy_1767847140822.png'
    }
];
