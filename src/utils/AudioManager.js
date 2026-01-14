class AudioManager {
    constructor() {
        this.sounds = {};
        this.bgm = null;
        this.currentBgmKey = null;
        this.enabled = true;
        this.volume = 0.5;
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;

        // SFX preloading
        const sfx = {
            click: '/assets/sounds/click.mp3',
            error: '/assets/sounds/error.mp3',
            levelup: '/assets/sounds/levelup.mp3',
            hit: '/assets/sounds/hit.mp3',
            defeat: '/assets/sounds/defeat.mp3',
            gacha: '/assets/sounds/gacha.mp3',
        };

        for (const [key, path] of Object.entries(sfx)) {
            this.sounds[key] = new Audio(path);
            this.sounds[key].preload = 'auto';
        }

        this.bgmList = {
            home: '/assets/sounds/bgm_home.mp3',
            battle: '/assets/sounds/bgm_battle.mp3',
        };

        this.initialized = true;
    }

    setEnabled(enabled) {
        this.enabled = enabled;
        if (!enabled && this.bgm) {
            this.bgm.pause();
        } else if (enabled && this.bgm) {
            this.bgm.play().catch(() => console.log("BGM play interrupted"));
        }
    }

    setVolume(volume) {
        this.volume = volume;
        if (this.bgm) this.bgm.volume = volume;
    }

    playSFX(key, volumeMult = 1) {
        if (!this.enabled || !this.sounds[key]) return;

        // Clone for overlapping sounds
        const sound = this.sounds[key].cloneNode();
        sound.volume = this.volume * volumeMult;
        sound.play().catch(() => { });
    }

    playBGM(key) {
        if (this.currentBgmKey === key) return;

        if (this.bgm) {
            this.bgm.pause();
            this.bgm = null;
        }

        this.currentBgmKey = key;
        if (this.bgmList[key]) {
            this.bgm = new Audio(this.bgmList[key]);
            this.bgm.loop = true;
            this.bgm.volume = this.volume;
            if (this.enabled) {
                this.bgm.play().catch(() => {
                    console.log("BGM autoplay prevented, will play on next interaction");
                });
            }
        }
    }
}

const audioManager = new AudioManager();
export default audioManager;
