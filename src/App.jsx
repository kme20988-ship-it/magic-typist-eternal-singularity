import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { Swords, RotateCcw, HelpCircle, Map } from 'lucide-react';
import BattleScreen from './components/BattleScreen';
import MagicKeyboard from './components/MagicKeyboard';
import MoneyDisplay from './components/MoneyDisplay';
import ResultScreen from './components/ResultScreen';
import SplashScreen from './components/SplashScreen';
import ChantBreakOverlay from './components/ChantBreakOverlay';
import InteractiveTutorial from './components/InteractiveTutorial';
import { useIdleIncome } from './hooks/useIdleIncome';
import { gameConfig, generateSpell } from './utils/gameConfig';
import { unitData } from './data/unitData';
import raidData from './data/raidData.json';
import { canRebirth } from './utils/rebirthSystem';
import HomeScreen from './components/HomeScreen';
import ObjectiveBanner from './components/ObjectiveBanner';
import CyberpunkBackground from './components/CyberpunkBackground';
import audioManager from './utils/AudioManager';
import { ACHIEVEMENT_LIST } from './data/achievementData';
import AchievementToast from './components/AchievementToast';
import AchievementList from './components/AchievementList';
import CriticalHit from './components/CriticalHit';


// Wasm Integration
import init, {
  calculate_upgrade_cost,
  calculate_idle_income,
  calculate_damage,
  calculate_reward,
  calculate_rebirth_orbs,
  calculate_monster_hp
} from "./wasm_pkg/magic_engine";

import SettingsMenu from './components/SettingsMenu';
import LoreTerminal from './components/LoreTerminal';
import ArtifactScreen from './components/ArtifactScreen';
import SkillTree from './components/SkillTree';
import MagicSelectionModal from './components/MagicSelectionModal';
import WorldSelectionModal from './components/WorldSelectionModal';


function App() {
  const [wasmReady, setWasmReady] = useState(false);

  useEffect(() => {
    init().then(() => setWasmReady(true));
    audioManager.init();
  }, []);

  const [money, setMoney] = useState(0);
  const [totalEarned, setTotalEarned] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [currentScene, setCurrentScene] = useState('home');

  const [upgrades, setUpgrades] = useState(gameConfig.upgrades.map(u => ({ ...u, level: 0 })));
  const [settings, setSettings] = useState({ haptic: true, particle: true, music: 50, sfx: 50 });
  const [collectedUnits, setCollectedUnits] = useState(['n_egg']);
  const [unitLevels, setUnitLevels] = useState({ 'n_egg': 1 });
  const [spiritOrbs, setSpiritOrbs] = useState(0);
  const [artifacts, setArtifacts] = useState([]);
  const [unlockedSkills, setUnlockedSkills] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHaptic, setIsHaptic] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [activeAchievementToast, setActiveAchievementToast] = useState(null);
  const [showAchievementList, setShowAchievementList] = useState(false);
  const [showCriticalOverlay, setShowCriticalOverlay] = useState(false);

  // Sync settings with AudioManager
  useEffect(() => {
    audioManager.setEnabled(settings.sound);
    audioManager.setVolume(settings.music / 100);
  }, [settings.sound, settings.music]);
  const [activeTutorial, setActiveTutorial] = useState(null);
  const [completedTutorials, setCompletedTutorials] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [showLore, setShowLore] = useState(false);
  const [showArtifacts, setShowArtifacts] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showMagicSelection, setShowMagicSelection] = useState(false);
  const [showWorldSelection, setShowWorldSelection] = useState(false);
  const [isVictorious, setIsVictorious] = useState(false);

  // Manual Burst System (Formerly Chant Break)
  const [chantBreakGauge, setChantBreakGauge] = useState(0);
  const [isManualBurst, setIsManualBurst] = useState(false);
  const [dragonLevel, setDragonLevel] = useState(1);
  const [familiarDialogue, setFamiliarDialogue] = useState("");
  const tapTimestamps = useRef([]);

  // Magic Battle State
  const [currentSpell, setCurrentSpell] = useState([]);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [monsterElement, setMonsterElement] = useState('FIRE');
  const [stageIndex, setStageIndex] = useState(0);
  const [monsterMaxHealth, setMonsterMaxHealth] = useState(100);
  const [totalTaps, setTotalTaps] = useState(0);
  const [correctTaps, setCorrectTaps] = useState(0);
  const [currentBossName, setCurrentBossName] = useState(null);
  const [lastDamage, setLastDamage] = useState(0);
  const [unlockedElements, setUnlockedElements] = useState(['FIRE', 'WATER']);
  const [equippedElements, setEquippedElements] = useState(['FIRE', 'WATER']);
  const [currentWorldId, setCurrentWorldId] = useState('GENESIS');
  const [worldProgress, setWorldProgress] = useState({ GENESIS: 0, CYBERIA: 0, ETERNITY: 0, LEGEND: 0 });

  const comboResetTimer = useRef(null);
  const [offlineEarnings, setOfflineEarnings] = useState(0);

  // Trigger dialogue helper
  const triggerDialogue = useCallback((text) => {
    setFamiliarDialogue(text);
    setTimeout(() => setFamiliarDialogue(""), 3000);
  }, []);

  const [showLevelUpEffect, setShowLevelUpEffect] = useState(false);
  const prevDragonLevel = useRef(dragonLevel);

  useEffect(() => {
    if (dragonLevel > prevDragonLevel.current) {
      setShowLevelUpEffect(true);
      audioManager.playSFX('levelup');
      triggerDialogue("力が...進化したぞ！");
      setTimeout(() => setShowLevelUpEffect(false), 2000);
      prevDragonLevel.current = dragonLevel;
    }
  }, [dragonLevel, triggerDialogue]);

  // Load state
  useEffect(() => {
    if (!wasmReady) return;
    const saved = {
      money: localStorage.getItem('magic_idle_money'),
      total: localStorage.getItem('magic_idle_total'),
      upgrades: localStorage.getItem('magic_idle_upgrades'),
      maxCombo: localStorage.getItem('magic_idle_maxCombo'),
      tutorialCompleted: localStorage.getItem('magic_idle_tutorial_completed'),
      completedTutorials: localStorage.getItem('magic_idle_completedTutorials'),
      settings: localStorage.getItem('magic_idle_settings'),
      collectedUnits: localStorage.getItem('magic_idle_collectedUnits'),
      unitLevels: localStorage.getItem('magic_idle_unitLevels'),
      spiritOrbs: localStorage.getItem('magic_idle_spiritOrbs'),
      artifacts: localStorage.getItem('magic_idle_artifacts'),
      stageIndex: localStorage.getItem('magic_idle_stageIndex'),
      skills: localStorage.getItem('magic_idle_skills'),
      unlockedElements: localStorage.getItem('magic_idle_unlockedElements'),
      equippedElements: localStorage.getItem('magic_idle_equippedElements'),
      currentWorldId: localStorage.getItem('magic_idle_currentWorldId'),
      worldProgress: localStorage.getItem('magic_idle_worldProgress')
    };

    // Wrap updates in setTimeout to avoid sync render warnings
    setTimeout(() => {
      if (saved.money) setMoney(parseFloat(saved.money));
      if (saved.total) setTotalEarned(parseFloat(saved.total));
      if (saved.maxCombo) setMaxCombo(parseInt(saved.maxCombo));
      if (saved.stageIndex) setStageIndex(parseInt(saved.stageIndex));
      if (saved.spiritOrbs) setSpiritOrbs(parseInt(saved.spiritOrbs));
      if (saved.skills) setUnlockedSkills(JSON.parse(saved.skills));
      if (saved.unitLevels) setUnitLevels(JSON.parse(saved.unitLevels));
      if (saved.collectedUnits) setCollectedUnits(JSON.parse(saved.collectedUnits));
      if (saved.settings) setSettings(JSON.parse(saved.settings));
      if (saved.artifacts) setArtifacts(JSON.parse(saved.artifacts));
      if (saved.currentWorldId) setCurrentWorldId(saved.currentWorldId);
      if (localStorage.getItem('magic_idle_achievements')) {
        setUnlockedAchievements(JSON.parse(localStorage.getItem('magic_idle_achievements')));
      }
      if (saved.worldProgress) {
        let parsedProgress = JSON.parse(saved.worldProgress);
        // Legacy Migration
        if (parsedProgress.EARTH !== undefined) {
          parsedProgress.GENESIS = parsedProgress.EARTH;
          delete parsedProgress.EARTH;
        }
        if (parsedProgress.FUTURE !== undefined) {
          parsedProgress.CYBERIA = parsedProgress.FUTURE;
          delete parsedProgress.FUTURE;
        }
        if (parsedProgress.COSMOS !== undefined) {
          parsedProgress.ETERNITY = parsedProgress.COSMOS;
          delete parsedProgress.COSMOS;
        }
        if (saved.currentWorldId === 'EARTH') setCurrentWorldId('GENESIS');
        if (saved.currentWorldId === 'FUTURE') setCurrentWorldId('CYBERIA');
        if (saved.currentWorldId === 'COSMOS') setCurrentWorldId('ETERNITY');

        setWorldProgress(parsedProgress);
      }

      const loadedStage = saved.stageIndex ? parseInt(saved.stageIndex) : 0;
      const worldId = saved.currentWorldId === 'EARTH' ? 'GENESIS' :
        (saved.currentWorldId === 'FUTURE' ? 'CYBERIA' :
          (saved.currentWorldId === 'COSMOS' ? 'ETERNITY' : (saved.currentWorldId || 'GENESIS')));
      const worldData = gameConfig.worlds.find(w => w.id === worldId);
      const initialMaxHp = calculate_monster_hp(100.0 * worldData.hpScale, 1.8, loadedStage, loadedStage % 10 === 0 && loadedStage > 0);
      setMonsterMaxHealth(initialMaxHp);
      setMonsterHealth(initialMaxHp);

      // Calculate Offline Earnings
      const lastLogin = localStorage.getItem('magic_idle_lastLogin');
      if (lastLogin && saved.money && saved.upgrades) {
        const now = Date.now();
        const diffSeconds = Math.floor((now - parseInt(lastLogin)) / 1000);
        if (diffSeconds > 60) {
          const currentUpgrades = JSON.parse(saved.upgrades);
          const baseIncome = currentUpgrades.reduce((total, up) => {
            return total + calculate_idle_income(up.baseIncome, up.level);
          }, 0);
          const earned = baseIncome * diffSeconds * 0.8;
          if (earned > 0) {
            setOfflineEarnings(earned);
            setMoney(prev => prev + earned);
            setTotalEarned(prev => prev + earned);
          }
        }
      }


      if (saved.completedTutorials) {
        setCompletedTutorials(JSON.parse(saved.completedTutorials));
      } else if (saved.tutorialCompleted) {
        setCompletedTutorials(['INTRO']); // Migration for old players
      }

      if (!saved.tutorialCompleted && !showSplash) {
        setActiveTutorial('INTRO');
      }

      // Load unlocked elements or default to FIRE/WATER
      const loadedElements = saved.unlockedElements ? JSON.parse(saved.unlockedElements) : ['FIRE', 'WATER'];
      setUnlockedElements(loadedElements);
      setUnlockedElements(loadedElements);

      if (saved.equippedElements) {
        setEquippedElements(JSON.parse(saved.equippedElements));
      } else {
        setEquippedElements(loadedElements.slice(0, 6));
      }

      setCurrentSpell(generateSpell(4, saved.equippedElements ? JSON.parse(saved.equippedElements) : loadedElements.slice(0, 6)));
      setIsLoaded(true);
    }, 0);
  }, [showSplash, wasmReady]);

  // Save state
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem('magic_idle_money', money.toString());
    localStorage.setItem('magic_idle_total', totalEarned.toString());
    localStorage.setItem('magic_idle_upgrades', JSON.stringify(upgrades));
    localStorage.setItem('magic_idle_maxCombo', maxCombo.toString());
    localStorage.setItem('magic_idle_skills', JSON.stringify(unlockedSkills));
    localStorage.setItem('magic_idle_settings', JSON.stringify(settings));
    localStorage.setItem('magic_idle_collectedUnits', JSON.stringify(collectedUnits));
    localStorage.setItem('magic_idle_unitLevels', JSON.stringify(unitLevels));
    localStorage.setItem('magic_idle_spiritOrbs', spiritOrbs.toString());
    localStorage.setItem('magic_idle_artifacts', JSON.stringify(artifacts));
    localStorage.setItem('magic_idle_stageIndex', stageIndex.toString());
    localStorage.setItem('magic_idle_lastLogin', Date.now().toString());
    localStorage.setItem('magic_idle_equippedElements', JSON.stringify(equippedElements));
    localStorage.setItem('magic_idle_currentWorldId', currentWorldId);
    localStorage.setItem('magic_idle_worldProgress', JSON.stringify(worldProgress));
    localStorage.setItem('worldProgress', JSON.stringify(worldProgress));
    localStorage.setItem('magic_idle_completedTutorials', JSON.stringify(completedTutorials));
    localStorage.setItem('magic_idle_achievements', JSON.stringify(unlockedAchievements));
  }, [money, totalEarned, upgrades, maxCombo, unlockedSkills, settings, collectedUnits, unitLevels, spiritOrbs, artifacts, stageIndex, isLoaded, unlockedElements, equippedElements, currentWorldId, worldProgress, completedTutorials, unlockedAchievements]);

  // BGM Switching
  useEffect(() => {
    if (showSplash) return;
    if (currentScene === 'battle') {
      audioManager.playBGM('battle');
    } else {
      audioManager.playBGM('home');
    }
  }, [currentScene, showSplash]);


  const magicStats = useMemo(() => {
    const equippedObjs = gameConfig.attributes.filter(a => equippedElements.includes(a.id));
    return {
      atk: equippedObjs.reduce((sum, a) => sum + (a.stats?.atk || 0), 0) / 6,
      spd: equippedObjs.reduce((sum, a) => sum + (a.stats?.spd || 0), 0) / 6,
      crit: equippedObjs.reduce((sum, a) => sum + (a.stats?.crit || 0), 0) / 6
    };
  }, [equippedElements]);

  // Deck Power Calculation
  const deckStats = useMemo(() => {
    let attack = 0;
    let income = 0;
    collectedUnits.forEach(unitId => {
      const unit = unitData.find(u => u.id === unitId);
      const level = unitLevels[unitId] || 1;
      if (unit) {
        const multiplier = 1 + (0.5 * (level - 1));
        attack += unit.stats.attack * multiplier;
        income += unit.stats.speed * multiplier;
      }
    });
    return { attack, income };
  }, [collectedUnits, unitLevels]);

  // Artifact Bonus Calculation
  const artifactStats = useMemo(() => {
    let damageMult = 1;
    let incomeMult = 1;
    let comboTime = 0;
    artifacts.forEach(a => {
      if (a.id === 'gold_keyboard') damageMult += (0.5 * a.level);
      if (a.id === 'greed_wallet') incomeMult += (0.2 * a.level);
      if (a.id === 'time_stopper') comboTime += (500 * a.level);
    });
    return { damageMult, incomeMult, comboTime };
  }, [artifacts]);

  const idleTotal = wasmReady ? upgrades.reduce((total, upgrade) => {
    return total + calculate_idle_income(upgrade.baseIncome, upgrade.level);
  }, 0) : 0;
  const idleIncome = (idleTotal + deckStats.income) * artifactStats.incomeMult;

  const handleIdleIncome = useCallback((income) => {
    setMoney(p => p + income);
    setTotalEarned(p => p + income);
  }, []);
  useIdleIncome(idleIncome, handleIdleIncome);

  // Objective Logic
  const currentObjective = useMemo(() => {
    if (showSplash) return null;

    // 1. Initial State
    if (stageIndex === 0 && currentScene === 'home') {
      return { text: "戦の準備を整えよ。", type: 'FIGHT', actionId: 'fight-button' };
    }

    // 2. Rebirth Recommendation
    const rebirthOrbs = calculate_rebirth_orbs(totalEarned, 1000000.0, 1000000.0);
    if (rebirthOrbs >= 10 && currentScene === 'home') {
      return { text: "秘めたる魂を解放し、新たな高みへ転生せよ。", type: 'REBIRTH', actionId: 'rebirth-button' };
    }

    // 3. Upgrade Recommendation
    const nextUpgrade = upgrades.find(u => money >= calculate_upgrade_cost(u.baseCost, u.costMultiplier, u.level));
    if (nextUpgrade && currentScene === 'home') {
      return { text: "魔導具を強化し、力を蓄えるのだ。", type: 'UPGRADE', actionId: 'shop-tab' };
    }
    if (nextUpgrade && currentScene === 'battle') {
      return { text: "一度退き、戦力を立て直すべきだろう。", type: 'UPGRADE', actionId: 'back-to-home' };
    }

    // 4. Combat Status
    if (currentScene === 'battle') {
      if (monsterHealth / monsterMaxHealth > 0.8 && combo < 10) {
        return { text: "詠唱を急げ！光を刻み込むのだ。", type: 'FIGHT', actionId: 'magic-keyboard' };
      }
      return { text: "その調子だ。グリッチのコアを貫け！", type: 'FIGHT', actionId: null };
    }

    // Default
    return { text: "深淵の調査を再開するぞ。", type: 'FIGHT', actionId: 'fight-button' };
  }, [money, totalEarned, stageIndex, currentScene, upgrades, showSplash, monsterHealth, monsterMaxHealth, combo]);

  const handleMagicInput = useCallback((attrId) => {
    setTotalTaps(prev => prev + 1);
    const now = Date.now();
    tapTimestamps.current.push(now);
    if (tapTimestamps.current.length > 10) tapTimestamps.current.shift();
    const recentTaps = tapTimestamps.current.filter(t => now - t < 1000);
    const tapsPerSecond = recentTaps.length;
    const isRapidTap = tapsPerSecond >= 5;
    const isElementMatch = attrId === monsterElement;

    // Critical Hit logic (Visual part)
    if (Math.random() < 0.02 && !showCriticalOverlay) {
      setShowCriticalOverlay(true);
      triggerDialogue("リミットブレイカー始動...クリティカル・ハック！");
    }

    if (attrId === currentSpell[currentProgress]) {
      audioManager.playSFX('click');
      setCorrectTaps(prev => prev + 1);
      const nextProgress = currentProgress + 1;
      if (settings.haptic) {
        setIsHaptic(true);
        setTimeout(() => setIsHaptic(false), 100);
      }

      const hasSurge = unlockedSkills.includes('mana_surge');
      if (!isManualBurst) {
        setChantBreakGauge(prev => {
          const spdBonus = 1 + (magicStats.spd / 10);
          const gain = (isRapidTap ? 5 : 2) * (hasSurge ? 2 : 1) * spdBonus;
          const newGauge = Math.min(prev + gain, 100);
          if (newGauge >= 100) {
            setIsManualBurst(true);
            triggerDialogue("マニュアル・バースト！連撃を叩き込め！");
            setTimeout(() => {
              setIsManualBurst(false);
              setChantBreakGauge(0);
            }, 3000);
          }
          return newGauge;
        });
      }

      if (nextProgress === currentSpell.length) {
        const isFever = combo >= gameConfig.feverTriggerCombo;
        let multiplier = isFever ? gameConfig.feverMultiplier : 1;
        if (isManualBurst) multiplier *= 3;
        if (isRapidTap) multiplier *= 1.5;

        // Intensity Density: Factor in Magic Stats ATK
        multiplier *= (1 + (magicStats.atk / 10));

        const hasCrit = unlockedSkills.includes('crit_master');
        const critSource = hasCrit ? 0.2 : 0.05;
        const totalCritChance = critSource + (magicStats.crit / 100);
        const isCrit = Math.random() < totalCritChance;
        if (isCrit) {
          multiplier *= 2;
          triggerDialogue("会心の一撃だ！");
        }

        const worldData = gameConfig.worlds.find(w => w.id === currentWorldId);
        const reward = calculate_reward(
          gameConfig.baseTypingReward * worldData.rewardScale,
          combo,
          gameConfig.comboMultiplier,
          multiplier
        );
        setMoney(p => p + reward);
        setTotalEarned(p => {
          const newTotal = p + reward;
          setDragonLevel(Math.floor(newTotal / 1000) + 1);
          return newTotal;
        });
        setCombo(p => {
          const newCombo = p + 1;
          if (newCombo > maxCombo) setMaxCombo(newCombo);
          if (newCombo % 10 === 0) triggerDialogue(`${newCombo} コンボ！実に見事だ。`);
          return newCombo;
        });

        setMonsterHealth(prev => {
          // worldData unused
          const totalDmg = calculate_damage(
            20.0,
            deckStats.attack,
            isElementMatch,
            isRapidTap,
            artifactStats.damageMult,
            multiplier
          );
          setLastDamage(totalDmg);
          audioManager.playSFX('hit');

          // World Mechanics: ETERNITY Gravity
          let damageToApply = totalDmg;
          if (currentWorldId === 'ETERNITY') {
            damageToApply *= 0.5;
          }
          if (currentWorldId === 'LEGEND') {
            damageToApply *= 0.3; // Even more penalty for Legend
          }

          const next = prev - damageToApply;
          if (next <= 0 && !isVictorious) {
            setIsVictorious(true);
            audioManager.playSFX('defeat');
            setTimeout(() => {
              triggerDialogue("敵を屠った。次なる標的へ。");
              const attrs = gameConfig.attributes;
              setMonsterElement(attrs[Math.floor(Math.random() * attrs.length)].id);

              const nextIdx = stageIndex + 1;
              setStageIndex(nextIdx);
              setWorldProgress(prevProgress => ({ ...prevProgress, [currentWorldId]: nextIdx }));

              // Check for Raid Boss
              const isBossStage = nextIdx % 10 === 0;
              let newMaxHp;
              let bossName = null;

              if (isBossStage) {
                // Find a boss based on Tier (approx 1 tier per 50 stages) or loop
                const tier = Math.min(4, Math.floor(nextIdx / 50) + 1);
                const availableBosses = raidData.raidBosses.filter(b => b.tier === tier);
                const boss = availableBosses.length > 0
                  ? availableBosses[nextIdx % availableBosses.length]
                  : raidData.raidBosses[0];

                newMaxHp = boss.health * (1 + (nextIdx * 0.1)); // Scale boss HP
                bossName = boss.name;
                triggerDialogue(`警告: ${boss.name} が出現！`);
              } else {
                const worldData = gameConfig.worlds.find(w => w.id === currentWorldId);
                newMaxHp = calculate_monster_hp(100.0 * worldData.hpScale, 1.8, nextIdx, false);
                bossName = null;
              }

              setCurrentBossName(bossName);
              setMonsterMaxHealth(newMaxHp);
              setMonsterHealth(newMaxHp);
              setIsVictorious(false);
            }, 1200);
            return 0;
          }
          return next;
        });

        setCurrentSpell(generateSpell(Math.min(8, 3 + Math.floor(combo / 10)), equippedElements));
        setCurrentProgress(0);
      } else {
        setCurrentProgress(nextProgress);
      }

      if (comboResetTimer.current) clearTimeout(comboResetTimer.current);
      const hasTimeBend = unlockedSkills.includes('time_bend');
      const resetTime = 4000 + artifactStats.comboTime + (hasTimeBend ? 1000 : 0);
      comboResetTimer.current = setTimeout(() => {
        setCombo(0);
        if (combo > 10) triggerDialogue("集中力が切れたか...");
      }, resetTime);
    } else {
      audioManager.playSFX('error');
      const hasShield = unlockedSkills.includes('combo_shield');
      if (hasShield && !localStorage.getItem('combo_shield_used')) {
        localStorage.setItem('combo_shield_used', 'true');
        triggerDialogue("守護の風だ。主を守り切ったか。");
        setCurrentProgress(0);
      } else {
        setCombo(0);
        setCurrentProgress(0);
      }
    }
  }, [currentSpell, currentProgress, combo, maxCombo, isManualBurst, deckStats, artifactStats, monsterElement, settings.haptic, unlockedSkills, triggerDialogue, stageIndex, equippedElements, magicStats, currentWorldId, isVictorious]);

  // Keyboard Mapping
  const KEY_MAPPING = useMemo(() => ['q', 'w', 'e', 'r', 't', 'y'], []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentScene !== 'battle' || isManualBurst || isVictorious) return;
      const key = e.key.toLowerCase();
      const index = KEY_MAPPING.indexOf(key);
      if (index !== -1 && index < equippedElements.length) {
        handleMagicInput(equippedElements[index]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScene, isManualBurst, isVictorious, equippedElements, handleMagicInput, KEY_MAPPING]);

  // Progressive Unlock System (Ultra Density Edition)
  useEffect(() => {
    const milestones = [
      { s: 3, id: 'THUNDER' }, { s: 10, id: 'WIND' }, { s: 20, id: 'LIGHT' }, { s: 30, id: 'DARK' },
      { s: 40, id: 'ICE' }, { s: 50, id: 'EARTH' }, { s: 60, id: 'TOXIC' }, { s: 70, id: 'GRAVITY' },
      { s: 80, id: 'SOUL' }, { s: 90, id: 'METAL' }, { s: 100, id: 'BLOOD' }, { s: 120, id: 'TIME' },
      { s: 140, id: 'SPACE' }, { s: 160, id: 'NATURE' }, { s: 180, id: 'STORM' }, { s: 200, id: 'STAR' },
      { s: 220, id: 'HOLY' }, { s: 250, id: 'CHAOS' }, { s: 270, id: 'MAGMA' }, { s: 290, id: 'STEAM' },
      { s: 310, id: 'PLASMA' }, { s: 330, id: 'QUAKE' }, { s: 350, id: 'ZERO' }, { s: 370, id: 'AURA' },
      { s: 390, id: 'MIRROR' }, { s: 410, id: 'ECHO' }, { s: 430, id: 'ABYSS' }, { s: 450, id: 'ZENITH' },
      { s: 470, id: 'PULSE' }, { s: 490, id: 'DRAGON' }, { s: 510, id: 'FEATHER' }, { s: 530, id: 'PETAL' },
      { s: 550, id: 'BONE' }, { s: 570, id: 'GEAR' }, { s: 590, id: 'NEON' }, { s: 610, id: 'PIXEL' },
      { s: 630, id: 'VIRUS' }, { s: 650, id: 'CORE' }
    ];

    milestones.forEach(m => {
      if (stageIndex >= m.s - 1 && !unlockedElements.includes(m.id)) {
        setUnlockedElements(prev => [...prev, m.id]);
        const attr = gameConfig.attributes.find(a => a.id === m.id);
        triggerDialogue(`新しい属性【${attr.name}】の理を理解したようだな。`);
      }
    });
  }, [stageIndex, unlockedElements, triggerDialogue]);

  useEffect(() => {
    if (currentProgress === 0) localStorage.removeItem('combo_shield_used');
  }, [currentProgress]);

  const handleSkillUnlock = useCallback((skillId, cost) => {
    if (money >= cost) {
      setMoney(prev => prev - cost);
      setUnlockedSkills(prev => [...prev, skillId]);
    }
  }, [money]);

  const handlePurchase = useCallback((upgradeId) => {
    setUpgrades(prev => {
      const upgradeIndex = prev.findIndex(u => u.id === upgradeId);
      const upgrade = prev[upgradeIndex];
      const cost = calculate_upgrade_cost(upgrade.baseCost, upgrade.costMultiplier, upgrade.level);
      if (money >= cost) {
        setMoney(currentMoney => currentMoney - cost);
        audioManager.playSFX('levelup');
        const newUpgrades = [...prev];
        newUpgrades[upgradeIndex] = { ...newUpgrades[upgradeIndex], level: newUpgrades[upgradeIndex].level + 1 };
        return newUpgrades;
      }
      return prev;
    });
  }, [money]);

  const handlePullGacha = useCallback((newUnit) => {
    setCollectedUnits(prev => prev.includes(newUnit.id) ? prev : [...prev, newUnit.id]);
    setUnitLevels(prev => ({ ...prev, [newUnit.id]: (prev[newUnit.id] || 0) + 1 }));
  }, []);

  const handleSpentMoney = useCallback((amount) => setMoney(prev => Math.max(0, prev - amount)), []);

  // Achievement Check Logic
  useEffect(() => {
    if (!isLoaded) return;
    const gameState = {
      stageIndex,
      maxCombo,
      totalEarned,
      collectedUnits,
      dragonLevel,
      worldProgress,
      totalTaps
    };

    ACHIEVEMENT_LIST.forEach(ach => {
      if (!unlockedAchievements.includes(ach.id) && ach.condition(gameState)) {
        setUnlockedAchievements(prev => [...prev, ach.id]);
        setActiveAchievementToast(ach);
        audioManager.playSFX('gacha'); // Reuse gacha sound for achievement
      }
    });
  }, [stageIndex, maxCombo, totalEarned, collectedUnits, dragonLevel, worldProgress, totalTaps, unlockedAchievements, isLoaded]);

  const handleRebirth = useCallback(() => {
    const orbs = calculate_rebirth_orbs(totalEarned, 1000000.0, 1000000.0);
    if (orbs > 0) {
      setSpiritOrbs(prev => prev + orbs);
      setMoney(0);
      setTotalEarned(0);
      setCombo(0);
      setMaxCombo(0);
      setUnlockedSkills([]);
      setDragonLevel(1);
      const initialMaxHp = calculate_monster_hp(100.0, 1.8, 0, false);
      setMonsterMaxHealth(initialMaxHp);
      setMonsterHealth(initialMaxHp);
      setMonsterElement('FIRE');
      setTotalTaps(0);
      setCorrectTaps(0);
      setUnlockedElements(['FIRE', 'WATER']);
      setEquippedElements(['FIRE', 'WATER']);
      setUpgrades(gameConfig.upgrades.map(u => ({ ...u, level: 0 })));
      setCurrentScene('home');
    }
  }, [totalEarned]);

  const handleBuyArtifact = useCallback((artifactId, cost) => {
    if (spiritOrbs >= cost) {
      setSpiritOrbs(prev => prev - cost);
      setArtifacts(prev => {
        const index = prev.findIndex(a => a.id === artifactId);
        if (index >= 0) {
          const newArr = [...prev];
          newArr[index] = { ...newArr[index], level: newArr[index].level + 1 };
          return newArr;
        }
        return [...prev, { id: artifactId, level: 1 }];
      });
    }
  }, [spiritOrbs]);

  const switchWorld = useCallback((worldId) => {
    const nextIdx = worldProgress[worldId] || 0;
    setCurrentWorldId(worldId);
    setStageIndex(nextIdx);

    const worldData = gameConfig.worlds.find(w => w.id === worldId);
    const newMaxHp = calculate_monster_hp(100.0 * worldData.hpScale, 1.8, nextIdx, nextIdx % 10 === 0);
    setMonsterMaxHealth(newMaxHp);
    setMonsterHealth(newMaxHp);

    setCurrentSpell(generateSpell(4, equippedElements));
    setCurrentProgress(0);
    setShowWorldSelection(false);
    triggerDialogue(`${worldData.name} へ転移した。`);
  }, [worldProgress, equippedElements, triggerDialogue]);

  // startTutorial removed

  const handleTutorialComplete = useCallback(() => {
    setCompletedTutorials(prev => {
      if (prev.includes(activeTutorial)) return prev;
      return [...prev, activeTutorial];
    });
    const type = activeTutorial;
    setActiveTutorial(null);
    if (type === 'INTRO') {
      localStorage.setItem('magic_idle_tutorial_completed', 'true');
      setCurrentScene('battle');
    }
  }, [activeTutorial]);

  const handleSplashComplete = useCallback((mode) => {
    if (mode === 'new') {
      localStorage.clear();
      setMoney(0);
      setTotalEarned(0);
      setCombo(0);
      setMaxCombo(0);
      setUnlockedSkills([]);
      setCollectedUnits(['n_egg']);
      setUnitLevels({ 'n_egg': 1 });
      setDragonLevel(1);
      const initialMaxHp = calculate_monster_hp(100.0, 1.8, 0, false);
      setMonsterMaxHealth(initialMaxHp);
      setMonsterHealth(initialMaxHp);
      setMonsterElement('FIRE');
      setTotalTaps(0);
      setCorrectTaps(0);
      setUnlockedElements(['FIRE', 'WATER']);
      setEquippedElements(['FIRE', 'WATER']);
      setUpgrades(gameConfig.upgrades.map(u => ({ ...u, level: 0 })));
      setActiveTutorial('INTRO');
    } else if (localStorage.getItem('magic_idle_tutorial_completed')) {
      setCurrentScene('home');
    }
    setShowSplash(false);
  }, []);

  // Hub/Battle Tutorial Trigger
  useEffect(() => {
    if (showSplash || !isLoaded) return;

    if (currentScene === 'home' && !completedTutorials.includes('HUB')) {
      setTimeout(() => setActiveTutorial('HUB'), 0);
    } else if (currentScene === 'battle' && !completedTutorials.includes('BATTLE')) {
      setTimeout(() => setActiveTutorial('BATTLE'), 0); // Async to avoid render cycle
    }
  }, [currentScene, showSplash, isLoaded, completedTutorials]);

  const isFever = combo >= gameConfig.feverTriggerCombo;
  const accuracy = totalTaps > 0 ? Math.round((correctTaps / totalTaps) * 100) : 100;

  if (showSplash) return <SplashScreen onComplete={handleSplashComplete} />;

  return (
    <div className={`fixed inset-0 bg-[#0a0a0a] text-white overflow-hidden flex flex-col ${isHaptic ? 'haptic-vibrate' : ''} `}>
      <CyberpunkBackground combo={combo} worldId={currentWorldId} />
      {currentScene === 'home' ? (
        <HomeScreen
          money={money}
          totalEarned={totalEarned}
          dragonLevel={dragonLevel}
          maxCombo={maxCombo}
          unlockedAchievements={unlockedAchievements}
          onOpenAchievements={() => setShowAchievementList(true)}
          onStartBattle={() => setCurrentScene('battle')}
          upgrades={upgrades}
          onPurchase={handlePurchase}
          unlockedSkills={unlockedSkills}
          onUnlock={handleSkillUnlock}
          onOpenSettings={() => setShowSettings(true)}
          onOpenLore={() => setShowLore(true)}
          onOpenArtifacts={() => setShowArtifacts(true)}
          onOpenSkills={() => setShowSkills(true)}
          onOpenMagicSelection={() => setShowMagicSelection(true)}
          onOpenWorldSelection={() => setShowWorldSelection(true)}
          currentWorldId={currentWorldId}
          collectedUnits={collectedUnits}
          onPullGacha={handlePullGacha}
          onSpentMoney={handleSpentMoney}
          recommendedActionId={currentObjective?.actionId}
          deckStats={deckStats}
          artifactStats={artifactStats}
          magicStats={magicStats}
        />
      ) : (
        <>
          <div className="flex-[45] relative">
            <BattleScreen
              currentSpell={currentSpell}
              // onSpellComplete removed
              monsterHealth={monsterHealth}
              monsterMaxHealth={monsterMaxHealth}
              bossName={currentBossName}
              stageData={gameConfig.stages?.[stageIndex] || {}}
              combo={combo}
              isFever={isFever}
              dragonLevel={dragonLevel}
              chantBreakGauge={chantBreakGauge}
              isSpellComplete={currentProgress === 0 && currentSpell.length > 0}
              monsterElement={monsterElement}
              stageIndex={stageIndex + 1}
              lastDamage={lastDamage}
              familiarDialogue={familiarDialogue}
              isVictorious={isVictorious}
              currentProgress={currentProgress}
              keyMapping={KEY_MAPPING}
              equippedElements={equippedElements}
              recommendedActionId={currentObjective?.actionId}
            />
            <div className="absolute top-4 left-4 z-20">
              <MoneyDisplay money={money} idleIncome={idleIncome} />
            </div>
            <button
              onClick={() => setActiveTutorial(currentScene === 'home' ? 'HUB' : 'BATTLE')}
              className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-neon-purple/80 hover:bg-neon-purple flex items-center justify-center shadow-lg border-2 border-white/20 transition-all hover:scale-110"
            >
              <HelpCircle size={24} className="text-white" />
            </button>
            <button
              onClick={() => setShowWorldSelection(true)}
              className="absolute top-4 right-20 z-20 w-12 h-12 rounded-full bg-neon-blue/80 hover:bg-neon-blue flex items-center justify-center shadow-lg border-2 border-white/20 transition-all hover:scale-110"
            >
              <Map size={24} className="text-white" />
            </button>
          </div>
          <div className="flex-[55] bg-[#1a1a1a] rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-10 flex flex-col p-6">
            <div className="flex-[1] flex flex-col items-center justify-center relative">
              <MagicKeyboard
                onInput={handleMagicInput}
                activeElements={equippedElements}
                keyMapping={KEY_MAPPING}
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => { setCurrentScene('home'); setCombo(0); }}
                className={`flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all active:scale-95 border border-white/10 ${currentObjective?.actionId === 'back-to-home' ? 'animate-recommend border-neon-purple text-white bg-neon-purple/20' : ''}`}
              >
                <RotateCcw size={18} />
                <span className="text-xs font-black uppercase tracking-widest">拠点へ戻る</span>
              </button>
            </div>
          </div>
        </>
      )}

      <ObjectiveBanner objective={currentObjective} />

      {showSkills && <SkillTree money={money} unlockedSkills={unlockedSkills} onUnlock={handleSkillUnlock} onClose={() => setShowSkills(false)} />}

      {activeTutorial && (
        <InteractiveTutorial
          type={activeTutorial}
          onComplete={handleTutorialComplete}
          onSkip={() => setActiveTutorial(null)}
          currentSpell={currentSpell}
          currentProgress={currentProgress}
        />
      )}

      {offlineEarnings > 0 && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-neon-cyan/50 text-center max-w-sm shadow-[0_0_50px_rgba(0,255,255,0.2)]">
            <div className="text-4xl mb-4">💤</div>
            <h3 className="text-2xl font-black text-white italic mb-2">おかえりなさい！</h3>
            <p className="text-3xl font-black text-neon-cyan mb-8">+{Math.floor(offlineEarnings).toLocaleString()} MP</p>
            <button onClick={() => setOfflineEarnings(0)} className="w-full py-4 bg-neon-cyan text-black font-black uppercase tracking-widest rounded-xl">回収する</button>
          </div>
        </div>
      )}
      {showResult && <ResultScreen score={totalEarned} maxCombo={maxCombo} accuracy={accuracy} onRestart={() => setShowResult(false)} />}
      <ChantBreakOverlay isActive={isManualBurst} onComplete={() => { setIsManualBurst(false); setChantBreakGauge(0); }} />
      {showMagicSelection && <MagicSelectionModal unlockedElements={unlockedElements} equippedElements={equippedElements} onClose={() => setShowMagicSelection(false)} onSave={(newEquipped) => { setEquippedElements(newEquipped); setShowMagicSelection(false); setCurrentSpell(generateSpell(4, newEquipped)); setCurrentProgress(0); }} />}
      {showWorldSelection && <WorldSelectionModal currentWorldId={currentWorldId} worldProgress={worldProgress} onSelect={switchWorld} onClose={() => setShowWorldSelection(false)} />}

      {showSettings && <SettingsMenu settings={settings} onUpdate={(s) => setSettings(p => ({ ...p, ...s }))} onClose={() => setShowSettings(false)} canRebirth={canRebirth(totalEarned)} nextRebirthOrbs={calculate_rebirth_orbs(totalEarned, 1000000.0, 1000000.0)} totalMoney={totalEarned} onRebirth={handleRebirth} />}
      {showLore && <LoreTerminal totalEarned={totalEarned} onClose={() => setShowLore(false)} stageIndex={stageIndex + 1} />}
      {showArtifacts && <ArtifactScreen spiritOrbs={spiritOrbs} artifacts={artifacts} onBuyArtifact={handleBuyArtifact} onClose={() => setShowArtifacts(false)} />}

      {activeAchievementToast && <AchievementToast achievement={activeAchievementToast} onComplete={() => setActiveAchievementToast(null)} />}
      {showAchievementList && <AchievementList unlockedAchievements={unlockedAchievements} onClose={() => setShowAchievementList(false)} />}
      {showCriticalOverlay && <CriticalHit onComplete={() => setShowCriticalOverlay(false)} />}

      {showLevelUpEffect && (
        <div className="fixed inset-0 z-[300] pointer-events-none flex items-center justify-center bg-white/10 backdrop-blur-sm animate-in fade-in duration-500">
          <div className="text-6xl font-black text-yellow-400 italic animate-bounce scale-150 drop-shadow-[0_0_30px_white]">
            DRAGON EVOLUTION!
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
