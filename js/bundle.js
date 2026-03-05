"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/config/gameConfig.ts
  var DESKTOP_CANVAS = { width: 1200, height: 800 };
  var MOBILE_CANVAS = { width: 720, height: 1280 };
  var CANVAS_WIDTH = DESKTOP_CANVAS.width;
  var CANVAS_HEIGHT = DESKTOP_CANVAS.height;
  var WORLD_WIDTH = CANVAS_WIDTH * 2;
  var WORLD_HEIGHT = CANVAS_HEIGHT * 2;
  function setCanvasSize(width, height) {
    CANVAS_WIDTH = width;
    CANVAS_HEIGHT = height;
    WORLD_WIDTH = width * 2;
    WORLD_HEIGHT = height * 2;
  }
  var FPS = 60;
  var FRAME_TIME = 1e3 / FPS;
  var MAX_ENEMY_BULLETS = 450;
  var MAX_EXPLOSIONS = 60;
  var MAX_BOSS_BOMBS = 24;
  var MAX_LEVEL = 25;
  var SKILL_TYPES = {
    BULLET_SPLIT: {
      id: "BULLET_SPLIT",
      name: "弹幕分裂",
      description: "手枪发射的子弹数量+1",
      levelDesc: "当前: %level%/5",
      maxLevel: 5,
      iconColor: "#FFEB3B",
      icon: "弹",
      isEvolution: true
    },
    FIRE_RATE: {
      id: "FIRE_RATE",
      name: "射速超频",
      description: "手枪射击间隔减少10%",
      levelDesc: "当前: %level%/5 (50%)",
      maxLevel: 5,
      iconColor: "#FF9800",
      icon: "速",
      isEvolution: true
    },
    AUTO_TURRET: {
      id: "AUTO_TURRET",
      name: "自动炮台",
      description: "生成固定炮台，自动攻击范围内的敌人",
      levelDesc: "每级+1个炮台",
      maxLevel: 5,
      iconColor: "#4CAF50",
      icon: "炮"
    },
    THORN_AURA: {
      id: "THORN_AURA",
      name: "荆棘光环",
      description: "角色周围生成伤害光圈",
      levelDesc: "每级+范围+伤害",
      maxLevel: 5,
      iconColor: "#9C27B0",
      icon: "环"
    },
    LIFE_STEAL: {
      id: "LIFE_STEAL",
      name: "生命偷取",
      description: "击杀敌人恢复生命值",
      levelDesc: "每级+0.5点恢复",
      maxLevel: 5,
      iconColor: "#E91E63",
      icon: "血"
    },
    BULLET_PIERCE: {
      id: "BULLET_PIERCE",
      name: "贯穿弹",
      description: "子弹可穿透敌人",
      levelDesc: "每级+1穿透",
      maxLevel: 5,
      iconColor: "#00BCD4",
      icon: "穿"
    },
    DAMAGE_BOOST: {
      id: "DAMAGE_BOOST",
      name: "精准射击",
      description: "增加所有伤害",
      levelDesc: "每级+25%伤害",
      maxLevel: 5,
      iconColor: "#F44336",
      icon: "力"
    },
    MOVEMENT_SPEED: {
      id: "MOVEMENT_SPEED",
      name: "疾风步",
      description: "提升移动速度",
      levelDesc: "每级+15%移速",
      maxLevel: 5,
      iconColor: "#76FF03",
      icon: "风"
    },
    MAGNETIC_FIELD: {
      id: "MAGNETIC_FIELD",
      name: "磁力领域",
      description: "增加经验球吸引范围",
      levelDesc: "每级+50%范围",
      maxLevel: 5,
      iconColor: "#AA00FF",
      icon: "磁"
    },
    ENERGY_SHIELD: {
      id: "ENERGY_SHIELD",
      name: "能量护盾",
      description: "每30秒获得一个护盾",
      levelDesc: "每级-5秒冷却",
      maxLevel: 5,
      iconColor: "#00E5FF",
      icon: "盾"
    },
    CRITICAL_STRIKE: {
      id: "CRITICAL_STRIKE",
      name: "致命一击",
      description: "概率造成双倍伤害",
      levelDesc: "每级+10%暴击率",
      maxLevel: 5,
      iconColor: "#FF1744",
      icon: "暴"
    },
    HEAL_ON_LEVEL: {
      id: "HEAL_ON_LEVEL",
      name: "升级回血",
      description: "升级时恢复满血并+1上限",
      levelDesc: "稳健之选",
      maxLevel: 5,
      iconColor: "#69F0AE",
      icon: "愈"
    },
    MAX_HEALTH: {
      id: "MAX_HEALTH",
      name: "强壮体魄",
      description: "直接增加最大生命值",
      levelDesc: "每级+3点上限",
      maxLevel: 5,
      iconColor: "#8D6E63",
      icon: "体"
    },
    LAND_MINE: {
      id: "LAND_MINE",
      name: "诡雷阵地",
      description: "自动在脚下放置地雷，3秒后爆炸造成范围伤害",
      levelDesc: "每级+伤害+爆炸范围",
      maxLevel: 5,
      iconColor: "#FF5722",
      icon: "雷"
    }
  };
  var BOSS_POOL = [
    "MOLTEN_GOLEM",
    "STORM_WRAITH",
    "VENOM_MOTHER",
    "CYBER_GOLEM",
    "FLAME_LORD",
    "ICE_QUEEN",
    "SHADOW_ASSASSIN",
    "BEAM_WIZARD",
    "GRAVITY_MASTER",
    "PLAGUE_BEARER",
    "DRONE_MASTER",
    "FLAME_CANNON",
    "TIDAL_WAVE",
    "SANDSTORM",
    "VOID_WALKER",
    "BLOOD_HOUND",
    "IRON_MAIDEN",
    "NANO_SWARM",
    "SOLAR_FLARE",
    "DARK_MATTER"
  ];
  function generateLevels() {
    const levels = {};
    for (let i = 1; i <= MAX_LEVEL; i++) {
      const normalHealth = Math.round(2 + i * 0.2);
      levels[i] = {
        name: `第${i}关`,
        killTarget: 20 + i * 8,
        enemyStats: {
          normal: {
            health: normalHealth,
            damage: Math.floor(1 + i / 4),
            speed: Math.min(1.2 + i * 0.08, 5)
          },
          ranged: {
            health: Math.max(2, Math.floor(normalHealth * 0.95)),
            damage: Math.floor(1 + i / 4),
            speed: Math.min((1.2 + i * 0.08) * 0.8, 3.5)
          },
          elite: {
            health: Math.floor(4 + i * 0.45),
            damage: Math.floor(2 + i / 3),
            speed: Math.min((1.2 + i * 0.08) * 1.3, 5.5)
          },
          suicide: {
            health: 1 + i * 0.2,
            damage: 2,
            speed: Math.min(2.5 + i * 0.1, 6)
          }
        },
        bossType: i <= 4 ? ["BARRAGE", "JUMP", "CHARGE", "FINAL"][i - 1] : BOSS_POOL[(i - 5) % BOSS_POOL.length],
        maxEnemyCount: 14 + i,
        spawnRate: Math.max(220, 900 - i * 24),
        unlockElite: i >= 3,
        unlockSuicide: i >= 2
      };
    }
    return levels;
  }
  var LEVEL_CONFIG = generateLevels();
  var BOSS_CONFIG = {
    BARRAGE: { name: "弹幕统领", maxHealth: 200, damage: 3, speed: 1.2, radius: 40, color: "#FF5722", skills: ["BARRAGE_CIRCLE", "SPIRAL_SHOT"], aggroTime: 2e3 },
    JUMP: { name: "飞天巨兽", maxHealth: 400, damage: 6, speed: 1, radius: 50, color: "#795548", skills: ["JUMP_STOMP", "QUAKE"], aggroTime: 2e3 },
    CHARGE: { name: "狂怒巨兽", maxHealth: 350, damage: 5, speed: 2, radius: 45, color: "#F44336", skills: ["RUSH_CHARGE", "FRENZY"], aggroTime: 2e3 },
    FINAL: { name: "终焉主宰", maxHealth: 800, damage: 8, speed: 1.5, radius: 55, color: "#000000", skills: ["BARRAGE_CIRCLE", "VOID_RIFT"], aggroTime: 2e3 },
    MOLTEN_GOLEM: { name: "熔岩巨人", maxHealth: 300, damage: 4, speed: 0.8, radius: 45, color: "#FF4500", skills: ["LAVA_POOL", "METEOR"], aggroTime: 2e3 },
    STORM_WRAITH: { name: "风暴幽魂", maxHealth: 250, damage: 3, speed: 2.5, radius: 35, color: "#00CED1", skills: ["LIGHTNING_CHAIN", "TORNADO"], aggroTime: 2e3 },
    VENOM_MOTHER: { name: "蛛毒女皇", maxHealth: 280, damage: 2, speed: 1.5, radius: 40, color: "#9400D3", skills: ["POISON_SPRAY", "WEB_SHOT"], aggroTime: 2e3 },
    CYBER_GOLEM: { name: "赛博金刚", maxHealth: 450, damage: 5, speed: 0.6, radius: 50, color: "#4169E1", skills: ["LASER_SWEEP", "MISSILE_BARRAGE"], aggroTime: 2e3 },
    FLAME_LORD: { name: "炎魔领主", maxHealth: 320, damage: 4, speed: 1.2, radius: 42, color: "#FF6347", skills: ["INFERNO", "FIRE_WALL"], aggroTime: 2e3 },
    ICE_QUEEN: { name: "冰霜女王", maxHealth: 290, damage: 3, speed: 1.4, radius: 38, color: "#E0FFFF", skills: ["BLIZZARD", "ICE_SPIKE"], aggroTime: 2e3 },
    SHADOW_ASSASSIN: { name: "暗影刺客", maxHealth: 220, damage: 7, speed: 3, radius: 30, color: "#2F4F4F", skills: ["TELEPORT", "BACKSTAB"], aggroTime: 2e3 },
    BEAM_WIZARD: { name: "光束魔导", maxHealth: 260, damage: 5, speed: 1, radius: 36, color: "#9932CC", skills: ["BEAM_ARRAY", "PRISMATIC_RAY"], aggroTime: 2e3 },
    GRAVITY_MASTER: { name: "重力大师", maxHealth: 340, damage: 3, speed: 1.1, radius: 44, color: "#4B0082", skills: ["GRAVITY_WELL", "REPULSE"], aggroTime: 2e3 },
    PLAGUE_BEARER: { name: "瘟疫使者", maxHealth: 310, damage: 2, speed: 1.3, radius: 41, color: "#556B2F", skills: ["PLAGUE_CLOUD", "INFECT"], aggroTime: 2e3 },
    DRONE_MASTER: { name: "无人机母巢", maxHealth: 270, damage: 2, speed: 0.9, radius: 43, color: "#708090", skills: ["DRONE_SWARM", "EMP_BLAST"], aggroTime: 2e3 },
    FLAME_CANNON: { name: "烈焰炮台", maxHealth: 380, damage: 6, speed: 0.5, radius: 48, color: "#B22222", skills: ["HEAT_SEEKER", "MAGMA_BLAST"], aggroTime: 2e3 },
    TIDAL_WAVE: { name: "潮汐领主", maxHealth: 300, damage: 4, speed: 1.6, radius: 39, color: "#1E90FF", skills: ["TSUNAMI", "WATER_JET"], aggroTime: 2e3 },
    SANDSTORM: { name: "沙暴暴君", maxHealth: 330, damage: 3, speed: 1.8, radius: 46, color: "#D2691E", skills: ["SANDSTORM", "QUICKSAND"], aggroTime: 2e3 },
    VOID_WALKER: { name: "虚空行者", maxHealth: 280, damage: 5, speed: 2.2, radius: 37, color: "#483D8B", skills: ["VOID_DASH", "DIMENSION_RIFT"], aggroTime: 2e3 },
    BLOOD_HOUND: { name: "嗜血猎犬", maxHealth: 240, damage: 6, speed: 2.8, radius: 34, color: "#8B0000", skills: ["BLOOD_RUSH", "FRENZIED_BITE"], aggroTime: 2e3 },
    IRON_MAIDEN: { name: "铁处女", maxHealth: 400, damage: 4, speed: 0.7, radius: 47, color: "#696969", skills: ["SPIKE_SHIELD", "IRON_MAIDEN"], aggroTime: 2e3 },
    NANO_SWARM: { name: "纳米虫群", maxHealth: 260, damage: 2, speed: 2, radius: 33, color: "#32CD32", skills: ["SWARM", "NANO_DISASSEMBLE"], aggroTime: 2e3 },
    SOLAR_FLARE: { name: "太阳耀斑", maxHealth: 350, damage: 5, speed: 1, radius: 49, color: "#FFD700", skills: ["SOLAR_STRIKE", "FLARE_BURST"], aggroTime: 2e3 },
    DARK_MATTER: { name: "暗物质核心", maxHealth: 500, damage: 7, speed: 0.8, radius: 52, color: "#1a1a2e", skills: ["BLACK_HOLE", "EVAPORATE"], aggroTime: 2e3 }
  };

  // src/game/GameUI.ts
  var GameUI = class {
    constructor(stage) {
      this.skillCards = [];
      this.root = new Laya.Sprite();
      stage.addChild(this.root);
      this.startScreen = this.createStartScreen();
      this.root.addChild(this.startScreen);
      const resources = this.createResourceBar();
      this.staminaText = resources.staminaText;
      this.coinText = resources.coinText;
      const topPanel = this.createTopPanel();
      this.levelInfo = topPanel.levelInfo;
      this.scoreInfo = topPanel.scoreInfo;
      this.healthText = topPanel.healthText;
      this.expText = topPanel.expText;
      this.healthBarFill = topPanel.healthBarFill;
      this.expBarFill = topPanel.expBarFill;
      this.skillIconsWrap = new Laya.Sprite();
      this.skillIconsWrap.pos(CANVAS_WIDTH - 230, 20);
      this.root.addChild(this.skillIconsWrap);
      const evolution = this.createEvolutionPanel();
      this.evoBullets = evolution.evoBullets;
      this.evoSpeed = evolution.evoSpeed;
      const skillModal = this.createSkillModal();
      this.skillModal = skillModal.modal;
      this.skillCardsWrap = skillModal.skillCardsWrap;
      this.skillCountdown = skillModal.skillCountdown;
      this.root.addChild(this.skillModal);
      this.pauseButton = this.createPauseButton();
      this.pauseButton.visible = false;
      this.root.addChild(this.pauseButton);
      this.pauseModal = this.createPauseModal();
      this.pauseModal.visible = false;
      this.root.addChild(this.pauseModal);
      this.levelNotice = new Laya.Label("");
      this.levelNotice.fontSize = 48;
      this.levelNotice.bold = true;
      this.levelNotice.color = "#FFD700";
      this.levelNotice.width = CANVAS_WIDTH;
      this.levelNotice.align = "center";
      this.levelNotice.y = CANVAS_HEIGHT * 0.45;
      this.levelNotice.alpha = 0;
      this.root.addChild(this.levelNotice);
    }
    getOverlaySize() {
      const stageW = Laya.stage && Laya.stage.width || CANVAS_WIDTH;
      const stageH = Laya.stage && Laya.stage.height || CANVAS_HEIGHT;
      const w = Math.max(CANVAS_WIDTH, stageW);
      const h = Math.max(CANVAS_HEIGHT * 2, stageH * 2);
      return { w, h };
    }
    createStartScreen() {
      const size = this.getOverlaySize();
      const panel = new Laya.Sprite();
      panel.graphics.drawRect(0, 0, size.w, size.h, "#101010");
      panel.size(size.w, size.h);
      const title = new Laya.Label("地狱突围 - 重装版");
      title.fontSize = 56;
      title.bold = true;
      title.color = "#FFD700";
      title.width = size.w;
      title.align = "center";
      title.y = 180;
      panel.addChild(title);
      const btn = this.createButton("开始游戏", 260, 70, "#4CAF50");
      btn.pos(size.w / 2 - 130, 330);
      btn.on(Laya.Event.CLICK, this, () => {
        var _a;
        (_a = this.startHandler) == null ? void 0 : _a.call(this);
      });
      panel.addChild(btn);
      const hint = new Laya.Label("WASD: 移动\n鼠标左键: 射击");
      hint.fontSize = 24;
      hint.color = "#CCCCCC";
      hint.leading = 12;
      hint.width = size.w;
      hint.align = "center";
      hint.y = 450;
      panel.addChild(hint);
      return panel;
    }
    createResourceBar() {
      const wrap = new Laya.Sprite();
      wrap.pos(14, 12);
      this.root.addChild(wrap);
      const staminaBox = new Laya.Sprite();
      staminaBox.graphics.drawRoundRect(0, 0, 170, 44, 10, 10, 10, 10, "rgba(0,0,0,0.58)", "#99A4B3", 1);
      wrap.addChild(staminaBox);
      const staminaIcon = new Laya.Label("⚡");
      staminaIcon.fontSize = 22;
      staminaIcon.color = "#FDE68A";
      staminaIcon.pos(10, 8);
      staminaBox.addChild(staminaIcon);
      const staminaText = new Laya.Label("体力: 5/5");
      staminaText.fontSize = 20;
      staminaText.color = "#E5E7EB";
      staminaText.pos(40, 11);
      staminaBox.addChild(staminaText);
      const coinBox = new Laya.Sprite();
      coinBox.graphics.drawRoundRect(184, 0, 170, 44, 10, 10, 10, 10, "rgba(0,0,0,0.58)", "#99A4B3", 1);
      wrap.addChild(coinBox);
      const coinIcon = new Laya.Label("◉");
      coinIcon.fontSize = 22;
      coinIcon.color = "#FACC15";
      coinIcon.pos(194, 8);
      wrap.addChild(coinIcon);
      const coinText = new Laya.Label("金币: 0");
      coinText.fontSize = 20;
      coinText.color = "#E5E7EB";
      coinText.pos(224, 11);
      wrap.addChild(coinText);
      return { staminaText, coinText };
    }
    createTopPanel() {
      const left = new Laya.Sprite();
      left.pos(16, 64);
      this.root.addChild(left);
      const levelInfo = new Laya.Label("第1关");
      levelInfo.name = "levelInfo";
      levelInfo.fontSize = 26;
      levelInfo.bold = true;
      levelInfo.color = "#FFD700";
      left.addChild(levelInfo);
      const scoreInfo = new Laya.Label("积分: 0");
      scoreInfo.name = "scoreInfo";
      scoreInfo.fontSize = 22;
      scoreInfo.color = "#FDE68A";
      scoreInfo.y = 40;
      left.addChild(scoreInfo);
      const healthWrap = new Laya.Sprite();
      healthWrap.pos(0, 78);
      healthWrap.graphics.drawRect(0, 0, 250, 22, "#444444", "#FFFFFF", 1);
      left.addChild(healthWrap);
      const healthBarFill = new Laya.Sprite();
      healthBarFill.name = "healthBarFill";
      healthBarFill.graphics.drawRect(0, 0, 250, 22, "#D32F2F");
      healthWrap.addChild(healthBarFill);
      const healthText = new Laya.Label("10 / 10");
      healthText.name = "healthText";
      healthText.fontSize = 14;
      healthText.bold = true;
      healthText.color = "#FFFFFF";
      healthText.width = 250;
      healthText.height = 22;
      healthText.align = "center";
      healthText.valign = "middle";
      healthText.y = 0;
      healthWrap.addChild(healthText);
      const expWrap = new Laya.Sprite();
      expWrap.pos(0, 108);
      expWrap.graphics.drawRect(0, 0, 250, 12, "#333333", "#666666", 1);
      left.addChild(expWrap);
      const expBarFill = new Laya.Sprite();
      expBarFill.name = "expBarFill";
      expBarFill.graphics.drawRect(0, 0, 0, 12, "#1E88E5");
      expWrap.addChild(expBarFill);
      const expText = new Laya.Label("等级: 1 | 经验: 0 / 10");
      expText.name = "expText";
      expText.fontSize = 16;
      expText.color = "#DDDDDD";
      expText.y = 126;
      left.addChild(expText);
      return { levelInfo, scoreInfo, healthText, expText, healthBarFill, expBarFill };
    }
    createEvolutionPanel() {
      const panel = new Laya.Sprite();
      panel.graphics.drawRect(0, 0, 340, 80, "rgba(0,0,0,0.65)");
      panel.pos(CANVAS_WIDTH / 2 - 170, CANVAS_HEIGHT - 100);
      this.root.addChild(panel);
      const bulletsLabel = new Laya.Label("弹幕数量");
      bulletsLabel.fontSize = 16;
      bulletsLabel.color = "#AAAAAA";
      bulletsLabel.width = 120;
      bulletsLabel.align = "center";
      bulletsLabel.pos(20, 14);
      panel.addChild(bulletsLabel);
      const evoBullets = new Laya.Label("1 / 5");
      evoBullets.fontSize = 24;
      evoBullets.bold = true;
      evoBullets.color = "#FFD700";
      evoBullets.width = 120;
      evoBullets.align = "center";
      evoBullets.pos(20, 40);
      panel.addChild(evoBullets);
      const speedLabel = new Laya.Label("射速加成");
      speedLabel.fontSize = 16;
      speedLabel.color = "#AAAAAA";
      speedLabel.width = 120;
      speedLabel.align = "center";
      speedLabel.pos(200, 14);
      panel.addChild(speedLabel);
      const evoSpeed = new Laya.Label("0%");
      evoSpeed.fontSize = 24;
      evoSpeed.bold = true;
      evoSpeed.color = "#FFD700";
      evoSpeed.width = 120;
      evoSpeed.align = "center";
      evoSpeed.pos(200, 40);
      panel.addChild(evoSpeed);
      return { evoBullets, evoSpeed };
    }
    createSkillModal() {
      const size = this.getOverlaySize();
      const modal = new Laya.Sprite();
      modal.graphics.drawRect(0, 0, size.w, size.h, "rgba(0,0,0,0.85)");
      modal.visible = false;
      const title = new Laya.Label("升级！选择一个技能");
      title.fontSize = 36;
      title.bold = true;
      title.color = "#FFD700";
      title.width = size.w;
      title.align = "center";
      title.y = 130;
      modal.addChild(title);
      const countdown = new Laya.Label("10秒后自动随机选择");
      countdown.name = "skillCountdown";
      countdown.fontSize = 24;
      countdown.color = "#FFFFFF";
      countdown.width = size.w;
      countdown.align = "center";
      countdown.y = 190;
      modal.addChild(countdown);
      const cardsWrap = new Laya.Sprite();
      cardsWrap.name = "skillCardsWrap";
      cardsWrap.pos(size.w / 2, 300);
      modal.addChild(cardsWrap);
      return { modal, skillCardsWrap: cardsWrap, skillCountdown: countdown };
    }
    createButton(text, width, height, color) {
      const button = new Laya.Sprite();
      button.graphics.drawRoundRect(0, 0, width, height, 14, 14, 14, 14, color, "#FFFFFF", 2);
      button.size(width, height);
      button.mouseEnabled = true;
      const label = new Laya.Label(text);
      label.fontSize = 30;
      label.bold = true;
      label.color = "#FFFFFF";
      label.width = width;
      label.height = height;
      label.valign = "middle";
      label.align = "center";
      label.y = 0;
      button.addChild(label);
      return button;
    }
    createPauseButton() {
      const btn = this.createButton("暂停", 108, 52, "rgba(24,34,54,0.82)");
      btn.pos(16, CANVAS_HEIGHT - 74);
      btn.on(Laya.Event.CLICK, this, () => {
        var _a;
        return (_a = this.pauseHandler) == null ? void 0 : _a.call(this);
      });
      return btn;
    }
    createPauseModal() {
      const size = this.getOverlaySize();
      const modal = new Laya.Sprite();
      modal.graphics.drawRect(0, 0, size.w, size.h, "rgba(0,0,0,0.6)");
      const panel = new Laya.Sprite();
      panel.graphics.drawRoundRect(0, 0, 360, 270, 16, 16, 16, 16, "#111827", "#6B7280", 2);
      panel.pos(size.w * 0.5 - 180, size.h * 0.42 - 120);
      modal.addChild(panel);
      const title = new Laya.Label("游戏暂停");
      title.fontSize = 36;
      title.bold = true;
      title.color = "#F9FAFB";
      title.width = 360;
      title.align = "center";
      title.y = 24;
      panel.addChild(title);
      const resumeBtn = this.createButton("恢复游戏", 240, 62, "#2563EB");
      resumeBtn.pos(60, 100);
      resumeBtn.on(Laya.Event.CLICK, this, () => {
        var _a;
        return (_a = this.resumeHandler) == null ? void 0 : _a.call(this);
      });
      panel.addChild(resumeBtn);
      const homeBtn = this.createButton("返回主页面", 240, 62, "#4B5563");
      homeBtn.pos(60, 178);
      homeBtn.on(Laya.Event.CLICK, this, () => {
        var _a;
        return (_a = this.backHomeHandler) == null ? void 0 : _a.call(this);
      });
      panel.addChild(homeBtn);
      return modal;
    }
    bindStart(handler) {
      this.startHandler = handler;
    }
    bindSkillPick(handler) {
      this.skillPickHandler = handler;
    }
    bindPause(handler) {
      this.pauseHandler = handler;
    }
    bindResume(handler) {
      this.resumeHandler = handler;
    }
    bindBackHome(handler) {
      this.backHomeHandler = handler;
    }
    showStart(show) {
      this.startScreen.visible = show;
    }
    updateScore(score) {
      this.scoreInfo.text = `积分: ${score}`;
    }
    updateResources(stamina, coins) {
      this.staminaText.text = `体力: ${stamina}/5`;
      this.coinText.text = `金币: ${coins}`;
    }
    updateLevel(levelText) {
      this.levelInfo.text = levelText;
    }
    updateHealth(health, maxHealth) {
      const progress = Math.max(0, health / Math.max(1, maxHealth));
      this.healthBarFill.scaleX = progress;
      this.healthText.text = `${Math.ceil(health)} / ${Math.ceil(maxHealth)}`;
    }
    updateExp(level, exp, expToNext) {
      const progress = Math.min(exp / Math.max(1, expToNext), 1);
      this.expBarFill.graphics.clear();
      this.expBarFill.graphics.drawRect(0, 0, 250 * progress, 12, "#1E88E5");
      this.expText.text = `等级: ${level} | 经验: ${Math.floor(exp)} / ${expToNext}`;
    }
    updateEvolution(bulletCount, fireRateBoost) {
      this.evoBullets.text = `${bulletCount} / 5`;
      this.evoSpeed.text = `${fireRateBoost * 10}%`;
    }
    updateSkillIcons(skills, playerShield) {
      this.skillIconsWrap.removeChildren();
      let index = 0;
      for (const id in skills) {
        const skill = skills[id];
        const icon = new Laya.Sprite();
        icon.graphics.drawRect(0, 0, 40, 40, skill.iconColor, "#FFFFFF", 2);
        icon.pos(index % 4 * 48, Math.floor(index / 4) * 48);
        this.skillIconsWrap.addChild(icon);
        const text = new Laya.Label(id === "ENERGY_SHIELD" ? playerShield ? "盾" : "充" : skill.icon);
        text.fontSize = 18;
        text.bold = true;
        text.color = "#000000";
        text.width = 40;
        text.height = 40;
        text.align = "center";
        text.valign = "middle";
        icon.addChild(text);
        const levelBadge = new Laya.Label(`${skill.level}`);
        levelBadge.fontSize = 12;
        levelBadge.bold = true;
        levelBadge.color = "#FFFFFF";
        levelBadge.bgColor = "#000000";
        levelBadge.width = 16;
        levelBadge.height = 16;
        levelBadge.align = "center";
        levelBadge.valign = "middle";
        levelBadge.pos(26, 26);
        icon.addChild(levelBadge);
        index++;
      }
    }
    showSkillModal(choices, countdown) {
      this.skillCardsWrap.removeChildren();
      this.skillCards.length = 0;
      this.skillModal.visible = true;
      this.updateSkillCountdown(countdown);
      const cardWidth = 220;
      const gap = 30;
      const totalWidth = choices.length * cardWidth + Math.max(0, choices.length - 1) * gap;
      let left = -totalWidth / 2;
      for (const skill of choices) {
        const card = new Laya.Sprite();
        card.graphics.drawRect(0, 0, cardWidth, 300, "#2D2D2D", "#666666", 3);
        card.pos(left, 0);
        card.size(cardWidth, 300);
        card.mouseEnabled = true;
        card.on(Laya.Event.CLICK, this, () => {
          var _a;
          return (_a = this.skillPickHandler) == null ? void 0 : _a.call(this, skill.id);
        });
        const icon = new Laya.Sprite();
        icon.graphics.drawRect(0, 0, 80, 80, skill.iconColor);
        icon.pos(70, 30);
        card.addChild(icon);
        const iconText = new Laya.Label(skill.icon);
        iconText.fontSize = 36;
        iconText.bold = true;
        iconText.color = "#FFFFFF";
        iconText.width = 80;
        iconText.height = 80;
        iconText.align = "center";
        iconText.valign = "middle";
        icon.addChild(iconText);
        const name = new Laya.Label(skill.name);
        name.fontSize = 24;
        name.bold = true;
        name.color = skill.iconColor;
        name.width = cardWidth;
        name.align = "center";
        name.y = 130;
        card.addChild(name);
        const desc = new Laya.Label(skill.description);
        desc.fontSize = 18;
        desc.color = "#DDDDDD";
        desc.width = cardWidth - 24;
        desc.wordWrap = true;
        desc.leading = 8;
        desc.align = "center";
        desc.pos(12, 180);
        card.addChild(desc);
        this.skillCardsWrap.addChild(card);
        this.skillCards.push(card);
        left += cardWidth + gap;
      }
    }
    updateSkillCountdown(seconds) {
      this.skillCountdown.text = `${seconds}秒后自动随机选择`;
    }
    hideSkillModal() {
      this.skillModal.visible = false;
      this.skillCardsWrap.removeChildren();
      this.skillCards.length = 0;
    }
    showPauseModal(show) {
      this.pauseModal.visible = show;
    }
    setPauseButtonVisible(visible) {
      this.pauseButton.visible = visible;
    }
    showLevelNotice(text, duration) {
      this.levelNotice.text = text;
      this.levelNotice.alpha = 1;
      Laya.Tween.clearAll(this.levelNotice);
      Laya.timer.once(duration, this, () => {
        Laya.Tween.to(this.levelNotice, { alpha: 0 }, 250);
      });
    }
    showFloatText(data) {
      const label = new Laya.Label(data.text);
      label.fontSize = 24;
      label.bold = true;
      label.color = data.color;
      label.pos(data.x - 25, data.y - 20);
      this.root.addChild(label);
      Laya.Tween.to(label, { y: label.y - 50, alpha: 0 }, 900, null, Laya.Handler.create(this, () => label.destroy()));
    }
  };

  // src/game/systems/collisionSystem.ts
  var COLLISION_CELL_SIZE = 96;
  var GRID_WIDTH = 32;
  var enemyGrid = /* @__PURE__ */ new Map();
  var usedGridKeys = [];
  function clearEnemyGrid() {
    for (let i = 0; i < usedGridKeys.length; i++) {
      const key = usedGridKeys[i];
      const bucket = enemyGrid.get(key);
      if (bucket) {
        bucket.length = 0;
      }
    }
    usedGridKeys.length = 0;
  }
  function getGridKey(cx, cy) {
    return cy * GRID_WIDTH + cx;
  }
  function buildEnemyGrid(enemies) {
    clearEnemyGrid();
    for (let i = 0; i < enemies.length; i++) {
      const enemy = enemies[i];
      if (enemy.health <= 0) {
        continue;
      }
      const cx = Math.max(0, Math.floor(enemy.x / COLLISION_CELL_SIZE));
      const cy = Math.max(0, Math.floor(enemy.y / COLLISION_CELL_SIZE));
      const key = getGridKey(cx, cy);
      let bucket = enemyGrid.get(key);
      if (!bucket) {
        bucket = [];
        enemyGrid.set(key, bucket);
      }
      if (bucket.length === 0) {
        usedGridKeys.push(key);
      }
      bucket.push(enemy);
    }
  }
  function checkCollisions(game, timestamp) {
    buildEnemyGrid(game.enemies);
    for (let i = game.bullets.length - 1; i >= 0; i--) {
      const bullet = game.bullets[i];
      const cx = Math.max(0, Math.floor(bullet.x / COLLISION_CELL_SIZE));
      const cy = Math.max(0, Math.floor(bullet.y / COLLISION_CELL_SIZE));
      let hit = false;
      for (let oy = -1; oy <= 1 && !hit; oy++) {
        const gy = cy + oy;
        if (gy < 0) {
          continue;
        }
        for (let ox = -1; ox <= 1 && !hit; ox++) {
          const gx = cx + ox;
          if (gx < 0) {
            continue;
          }
          const bucket = enemyGrid.get(getGridKey(gx, gy));
          if (!bucket || bucket.length === 0) {
            continue;
          }
          for (let j = bucket.length - 1; j >= 0; j--) {
            const enemy = bucket[j];
            if (enemy.health <= 0) {
              continue;
            }
            const hitRadius = bullet.radius + enemy.radius;
            if (game.getDistanceSq(bullet.x, bullet.y, enemy.x, enemy.y) >= hitRadius * hitRadius) {
              continue;
            }
            enemy.health -= bullet.damage;
            if (!game.lowPerformanceMode || enemy.isBoss || (i + j & 1) === 0) {
              game.pushExplosion({
                x: bullet.x,
                y: bullet.y,
                radius: 2,
                maxRadius: 24,
                alpha: 0.9,
                growth: 5,
                fade: 0.08,
                color: enemy.isBoss ? "255,220,120" : "120,200,255",
                ring: true,
                lineWidth: 2
              });
            }
            if (enemy.health <= 0) {
              if (enemy.isBoss) {
                const bossIndex = game.enemies.indexOf(enemy);
                if (bossIndex >= 0) {
                  game.enemies.splice(bossIndex, 1);
                }
                game.isBossActive = false;
                game.levelComplete = true;
                game.levelTransitionAt = Math.max(game.levelTransitionAt, timestamp + 3e3);
                game.pushExplosion({ x: enemy.x, y: enemy.y, radius: 10, maxRadius: 130, alpha: 1, growth: 10, fade: 0.04, color: "255,180,80", ring: true, lineWidth: 4 });
                game.pushExplosion({ x: enemy.x, y: enemy.y, radius: 20, maxRadius: 180, alpha: 0.8, growth: 13, fade: 0.045, color: "255,120,40", ring: false });
                game.showLevelNotice("BOSS击破！奖励技能选择");
                game.triggerSkillSelection();
              } else {
                if (!game.lowPerformanceMode || (timestamp & 1) === 0) {
                  game.pushExplosion({ x: enemy.x, y: enemy.y, radius: 6, maxRadius: 48, alpha: 1, growth: 8, fade: 0.06, color: enemy.isHorde ? "255,90,90" : "255,180,120", ring: false });
                  game.pushExplosion({ x: enemy.x, y: enemy.y, radius: 0, maxRadius: 64, alpha: 0.7, growth: 7, fade: 0.05, color: enemy.isHorde ? "255,150,150" : "255,230,180", ring: true, lineWidth: 2 });
                }
                game.killEnemy(enemy);
              }
            }
            if (bullet.pierceLeft > 0) {
              bullet.pierceLeft--;
            } else {
              game.bullets.splice(i, 1);
            }
            hit = true;
            break;
          }
        }
      }
    }
    if (game.player.invincible <= 0) {
      const step = game.lowPerformanceMode ? 2 : 1;
      for (let i = game.enemyBullets.length - 1; i >= 0; i -= step) {
        const bullet = game.enemyBullets[i];
        const hitRadius = bullet.radius + game.player.radius;
        if (game.getDistanceSq(bullet.x, bullet.y, game.player.x, game.player.y) < hitRadius * hitRadius) {
          game.damagePlayer(bullet.damage);
          if (bullet.life === void 0 || bullet.radius < 20) {
            game.enemyBullets.splice(i, 1);
          }
        }
      }
    }
    if (game.player.invincible <= 0) {
      for (let i = game.enemies.length - 1; i >= 0; i--) {
        const enemy = game.enemies[i];
        const hitRadius = enemy.radius + game.player.radius;
        if (game.getDistanceSq(enemy.x, enemy.y, game.player.x, game.player.y) < hitRadius * hitRadius) {
          if (enemy.isSuicide) {
            game.damagePlayer(2);
            game.pushExplosion({ x: enemy.x, y: enemy.y, radius: 0, maxRadius: 50, alpha: 1, growth: 6, fade: 0.06, color: "255,255,80", ring: false });
            game.enemies.splice(i, 1);
          } else {
            game.damagePlayer(enemy.damage);
          }
        }
      }
    }
    for (let i = game.drops.length - 1; i >= 0; i--) {
      const drop = game.drops[i];
      const hitRadius = drop.radius + game.player.radius;
      if (game.getDistanceSq(drop.x, drop.y, game.player.x, game.player.y) < hitRadius * hitRadius) {
        game.player.health = game.player.maxHealth;
        game.updateHealthUI();
        game.showFloatText("满血！", game.player.x, game.player.y, "#00FF00");
        game.drops.splice(i, 1);
      }
    }
    clearEnemyGrid();
  }

  // src/game/systems/enemySystem.ts
  function spawnEnemy(game, timestamp) {
    if (game.isBossActive || game.levelComplete || game.waitingForBoss || game.enemies.length >= LEVEL_CONFIG[game.currentLevel].maxEnemyCount) {
      return;
    }
    if (timestamp > 2e3 && timestamp - game.lastHordeSpawn > Math.max(6e3, 14e3 - game.currentLevel * 180) && game.enemies.length <= Math.floor(LEVEL_CONFIG[game.currentLevel].maxEnemyCount * 0.6) && Math.random() < 0.18) {
      const hordeCount = game.lowPerformanceMode ? 10 + Math.floor(Math.random() * 4) : 12 + Math.floor(Math.random() * 6);
      for (let i = 0; i < hordeCount; i++) {
        const side2 = Math.floor(Math.random() * 4);
        const edgeOffset = 40 + Math.random() * 120;
        let x2 = 0;
        let y2 = 0;
        switch (side2) {
          case 0:
            x2 = game.clamp(game.player.x + game.random(-CANVAS_WIDTH * 0.45, CANVAS_WIDTH * 0.45), 40, WORLD_WIDTH - 40);
            y2 = game.clamp(game.player.y - CANVAS_HEIGHT * 0.6 - edgeOffset, 40, WORLD_HEIGHT - 40);
            break;
          case 1:
            x2 = game.clamp(game.player.x + CANVAS_WIDTH * 0.6 + edgeOffset, 40, WORLD_WIDTH - 40);
            y2 = game.clamp(game.player.y + game.random(-CANVAS_HEIGHT * 0.45, CANVAS_HEIGHT * 0.45), 40, WORLD_HEIGHT - 40);
            break;
          case 2:
            x2 = game.clamp(game.player.x + game.random(-CANVAS_WIDTH * 0.45, CANVAS_WIDTH * 0.45), 40, WORLD_WIDTH - 40);
            y2 = game.clamp(game.player.y + CANVAS_HEIGHT * 0.6 + edgeOffset, 40, WORLD_HEIGHT - 40);
            break;
          default:
            x2 = game.clamp(game.player.x - CANVAS_WIDTH * 0.6 - edgeOffset, 40, WORLD_WIDTH - 40);
            y2 = game.clamp(game.player.y + game.random(-CANVAS_HEIGHT * 0.45, CANVAS_HEIGHT * 0.45), 40, WORLD_HEIGHT - 40);
            break;
        }
        game.enemies.push({
          x: x2,
          y: y2,
          health: 1,
          maxHealth: 1,
          damage: 1,
          speed: Math.min(2.4 + game.currentLevel * 0.05, 4.4),
          radius: 11,
          color: "#FF6B6B",
          type: "horde",
          exp: 1,
          isHorde: true
        });
      }
      game.lastHordeSpawn = timestamp;
      game.lastEnemySpawn = timestamp;
      return;
    }
    const spawnInterval = LEVEL_CONFIG[game.currentLevel].spawnRate;
    if (timestamp - game.lastEnemySpawn < spawnInterval) {
      return;
    }
    game.lastEnemySpawn = timestamp;
    let x = 0;
    let y = 0;
    const side = Math.floor(Math.random() * 4);
    switch (side) {
      case 0:
        x = game.clamp(game.player.x + game.random(-CANVAS_WIDTH * 0.45, CANVAS_WIDTH * 0.45), 20, WORLD_WIDTH - 20);
        y = game.clamp(game.player.y - CANVAS_HEIGHT * 0.58 - 50, 20, WORLD_HEIGHT - 20);
        break;
      case 1:
        x = game.clamp(game.player.x + CANVAS_WIDTH * 0.58 + 50, 20, WORLD_WIDTH - 20);
        y = game.clamp(game.player.y + game.random(-CANVAS_HEIGHT * 0.45, CANVAS_HEIGHT * 0.45), 20, WORLD_HEIGHT - 20);
        break;
      case 2:
        x = game.clamp(game.player.x + game.random(-CANVAS_WIDTH * 0.45, CANVAS_WIDTH * 0.45), 20, WORLD_WIDTH - 20);
        y = game.clamp(game.player.y + CANVAS_HEIGHT * 0.58 + 50, 20, WORLD_HEIGHT - 20);
        break;
      default:
        x = game.clamp(game.player.x - CANVAS_WIDTH * 0.58 - 50, 20, WORLD_WIDTH - 20);
        y = game.clamp(game.player.y + game.random(-CANVAS_HEIGHT * 0.45, CANVAS_HEIGHT * 0.45), 20, WORLD_HEIGHT - 20);
        break;
    }
    const levelConfig = LEVEL_CONFIG[game.currentLevel];
    const roll = Math.random();
    let enemyType = "normal";
    if (levelConfig.unlockSuicide && roll > 0.85) {
      enemyType = "suicide";
    } else if (levelConfig.unlockElite && roll > 0.9) {
      enemyType = "elite";
    } else if (roll > 0.7) {
      enemyType = "ranged";
    }
    const stats = levelConfig.enemyStats[enemyType];
    const enemyConfig = {
      normal: { radius: 16, color: "#F44336", isRanged: false, exp: 1 },
      ranged: { radius: 14, color: "#FF9800", isRanged: true, exp: 2 },
      elite: { radius: 22, color: "#9C27B0", isRanged: false, exp: 5 },
      suicide: { radius: 12, color: "#FFFF00", isRanged: false, exp: 1, isSuicide: true }
    };
    game.enemies.push(__spreadValues({
      x,
      y,
      health: stats.health,
      damage: stats.damage,
      speed: stats.speed,
      maxHealth: stats.health,
      type: enemyType,
      lastAttack: 0
    }, enemyConfig[enemyType]));
  }
  function updateEnemies(game, timestamp) {
    for (let i = game.enemies.length - 1; i >= 0; i--) {
      const enemy = game.enemies[i];
      if (enemy.isBoss && (enemy.isPreparingStomp || enemy.isChargeAiming || enemy.isChargeWarning || enemy.isCharging)) {
        continue;
      }
      const dx = game.player.x - enemy.x;
      const dy = game.player.y - enemy.y;
      const distSq = dx * dx + dy * dy;
      if (enemy.isRanged) {
        if (distSq > 300 * 300) {
          if (distSq > 0) {
            const invDist = 1 / Math.sqrt(distSq);
            enemy.x += dx * invDist * enemy.speed;
            enemy.y += dy * invDist * enemy.speed;
          }
        } else if (distSq < 200 * 200) {
          if (distSq > 0) {
            const invDist = 1 / Math.sqrt(distSq);
            enemy.x -= dx * invDist * enemy.speed;
            enemy.y -= dy * invDist * enemy.speed;
          }
        }
        if (timestamp - (enemy.lastAttack || 0) > 2e3) {
          enemy.lastAttack = timestamp;
          const angle = Math.atan2(dy, dx);
          game.pushEnemyBullet({
            x: enemy.x,
            y: enemy.y,
            vx: Math.cos(angle) * 5,
            vy: Math.sin(angle) * 5,
            radius: 6,
            color: "#FF5722",
            damage: enemy.damage,
            pierceLeft: 0
          });
        }
      } else if (distSq > 0) {
        const invDist = 1 / Math.sqrt(distSq);
        enemy.x += dx * invDist * enemy.speed;
        enemy.y += dy * invDist * enemy.speed;
      }
      enemy.x = game.clamp(enemy.x, enemy.radius, WORLD_WIDTH - enemy.radius);
      enemy.y = game.clamp(enemy.y, enemy.radius, WORLD_HEIGHT - enemy.radius);
    }
  }
  function killEnemy(game, enemy) {
    if (!enemy.isHorde && game.healthDropsThisLevel < 1) {
      const target = LEVEL_CONFIG[game.currentLevel].killTarget;
      const remainingKills = Math.max(1, target - game.levelProgress);
      const dropChance = 1 / remainingKills;
      if (Math.random() < dropChance) {
        game.drops.push({ x: enemy.x, y: enemy.y, type: "HEALTH_PACK", radius: 15, life: 6e3 });
        game.healthDropsThisLevel++;
      }
    }
    if (!enemy.isHorde && enemy.type === "elite" && game.healthDropsThisLevel < 1 && Math.random() < 0.08) {
      game.drops.push({ x: enemy.x, y: enemy.y, type: "HEALTH_PACK", radius: 15, life: 6e3 });
      game.healthDropsThisLevel++;
    }
    game.gainExp(enemy.exp || 1, enemy.x, enemy.y);
    if (game.player.skills.LIFE_STEAL) {
      const healAmount = 0.5 * game.player.skills.LIFE_STEAL.level;
      game.player.health = Math.min(game.player.maxHealth, game.player.health + healAmount);
      game.updateHealthUI();
    }
    const index = game.enemies.indexOf(enemy);
    if (index > -1) {
      game.enemies.splice(index, 1);
    }
    game.kills++;
    game.score += enemy.isBoss ? 500 : 10;
    game.levelProgress++;
    game.ui.updateScore(game.score);
    if (game.levelProgress >= LEVEL_CONFIG[game.currentLevel].killTarget && !game.isBossActive && !game.waitingForBoss) {
      game.waitingForBoss = true;
      game.showLevelNotice("清理残敌，准备BOSS战！", 3e3);
    }
    if (game.waitingForBoss && game.enemies.length === 0 && !game.isBossActive) {
      game.waitingForBoss = false;
      game.spawnBoss();
    }
  }
  function spawnBoss(game) {
    game.isBossActive = true;
    const bossType = LEVEL_CONFIG[game.currentLevel].bossType;
    const bossBase = BOSS_CONFIG[bossType] || BOSS_CONFIG.BARRAGE;
    const scaledHealth = bossBase.maxHealth * (1 + (game.currentLevel - 1) * 0.5);
    game.enemies.push(__spreadProps(__spreadValues({
      x: game.clamp(game.player.x, bossBase.radius, WORLD_WIDTH - bossBase.radius),
      y: game.clamp(game.player.y - CANVAS_HEIGHT * 0.35, bossBase.radius, WORLD_HEIGHT - bossBase.radius)
    }, bossBase), {
      health: scaledHealth,
      maxHealth: scaledHealth,
      isBoss: true,
      type: "boss",
      spawnTime: Laya.timer.currTimer,
      lastSkill: 0,
      skillCooldown: 3500,
      isPreparingStomp: false,
      stompTimer: 0,
      stompDuration: 0,
      stompTarget: null,
      stompFlash: 0,
      isChargeAiming: false,
      chargeAimTimer: 0,
      isChargeWarning: false,
      chargeWarningTimer: 0,
      isCharging: false,
      chargeAngle: 0,
      chargeDirX: 0,
      chargeDirY: 0,
      chargeDistanceLeft: 0
    }));
    game.showLevelNotice(`BOSS出现！${bossBase.name}`);
  }
  function updateBossSkills(game, boss, timestamp) {
    if (timestamp - (boss.spawnTime || 0) < (boss.aggroTime || 2e3)) {
      return;
    }
    if (boss.isPreparingStomp || boss.isChargeAiming || boss.isChargeWarning || boss.isCharging) {
      return;
    }
    if (timestamp - (boss.lastSkill || 0) < (boss.skillCooldown || 3500)) {
      return;
    }
    boss.lastSkill = timestamp;
    const skills = boss.skills || [];
    const skill = skills[Math.floor(Math.random() * skills.length)];
    switch (skill) {
      case "BARRAGE_CIRCLE":
        {
          const bulletCount = 36;
          for (let i = 0; i < bulletCount; i++) {
            const bulletAngle = Math.PI * 2 / bulletCount * i;
            game.pushEnemyBullet({
              x: boss.x,
              y: boss.y,
              vx: Math.cos(bulletAngle) * 6,
              vy: Math.sin(bulletAngle) * 6,
              radius: 5,
              color: boss.color,
              damage: boss.damage,
              pierceLeft: 0
            });
          }
        }
        break;
      case "SPIRAL_SHOT":
        for (let i = 0; i < 3; i++) {
          Laya.timer.once(i * 300, game, () => {
            if (game.gameState !== "PLAYING") {
              return;
            }
            for (let j = 0; j < 12; j++) {
              const angle = (j * 30 + timestamp / 100 % 360) * Math.PI / 180;
              game.pushEnemyBullet({
                x: boss.x,
                y: boss.y,
                vx: Math.cos(angle) * 5,
                vy: Math.sin(angle) * 5,
                radius: 4,
                color: boss.color,
                damage: boss.damage,
                pierceLeft: 0
              });
            }
          });
        }
        break;
      case "JUMP_STOMP":
        boss.isPreparingStomp = true;
        boss.stompDuration = 1500;
        boss.stompTimer = 1500;
        boss.stompRadius = 200;
        boss.stompFlash = 0;
        boss.stompTarget = {
          x: game.clamp(game.player.x, boss.radius, WORLD_WIDTH - boss.radius),
          y: game.clamp(game.player.y, boss.radius, WORLD_HEIGHT - boss.radius)
        };
        break;
      case "QUAKE":
        for (let i = 0; i < 5; i++) {
          if (game.bossBombs.length >= MAX_BOSS_BOMBS) {
            break;
          }
          const angle = Math.PI * 2 / 5 * i + game.random(-0.25, 0.25);
          const distance = game.random(90, 230);
          game.bossBombs.push({
            x: game.clamp(game.player.x + Math.cos(angle) * distance, 60, WORLD_WIDTH - 60),
            y: game.clamp(game.player.y + Math.sin(angle) * distance, 60, WORLD_HEIGHT - 60),
            timer: 1500 + i * 120,
            radius: 16,
            blastRadius: 100,
            damage: Math.max(2, Math.floor(boss.damage * 1.2))
          });
        }
        break;
      case "RUSH_CHARGE":
        boss.chargeAngle = Math.atan2(game.player.y - boss.y, game.player.x - boss.x);
        boss.chargeDirX = Math.cos(boss.chargeAngle);
        boss.chargeDirY = Math.sin(boss.chargeAngle);
        boss.chargeDistanceLeft = 480;
        boss.chargeSpeed = 17;
        boss.isChargeAiming = true;
        boss.chargeAimTimer = 700;
        boss.isChargeWarning = false;
        boss.isCharging = false;
        for (let i = 0; i < 14; i++) {
          const burstAngle = boss.chargeAngle + (i - 6.5) * 0.12;
          game.pushEnemyBullet({
            x: boss.x,
            y: boss.y,
            vx: Math.cos(burstAngle) * 4.5,
            vy: Math.sin(burstAngle) * 4.5,
            radius: 5,
            color: "#FF5555",
            damage: Math.max(1, Math.floor(boss.damage * 0.8)),
            pierceLeft: 0
          });
        }
        break;
      case "FRENZY":
        if (!boss.frenzyApplied) {
          boss.speed *= 1.4;
          boss.frenzyApplied = true;
        }
        boss.frenzyUntil = timestamp + 5e3;
        break;
      case "VOID_RIFT":
        for (let i = 0; i < 3; i++) {
          Laya.timer.once(i * 500, game, () => {
            if (game.gameState !== "PLAYING") {
              return;
            }
            const baseAngle = Math.atan2(game.player.y - boss.y, game.player.x - boss.x);
            for (let j = 0; j < 6; j++) {
              const angle = baseAngle + (j - 2.5) * 0.12 + game.random(-0.08, 0.08);
              game.pushEnemyBullet({
                x: boss.x,
                y: boss.y,
                vx: Math.cos(angle) * 3.6,
                vy: Math.sin(angle) * 3.6,
                radius: 6,
                color: "#800080",
                damage: boss.damage,
                isHoming: true,
                homingDuration: 2e3,
                homingAccel: 0.12,
                maxSpeed: 6.4,
                pierceLeft: 0
              });
            }
          });
        }
        break;
      case "LAVA_POOL":
        for (let i = 0; i < 5; i++) {
          game.pushEnemyBullet({
            x: game.random(100, WORLD_WIDTH - 100),
            y: game.random(100, WORLD_HEIGHT - 100),
            vx: 0,
            vy: 0,
            radius: 40,
            color: "rgba(255,69,0,0.5)",
            damage: boss.damage,
            life: 5e3,
            pierceLeft: 0
          });
        }
        break;
      case "METEOR":
        for (let i = 0; i < 5; i++) {
          Laya.timer.once(i * 200, game, () => {
            if (game.gameState !== "PLAYING") {
              return;
            }
            const angle = Math.atan2(game.player.y - boss.y, game.player.x - boss.x) + game.random(-0.5, 0.5);
            game.pushEnemyBullet({
              x: boss.x,
              y: boss.y,
              vx: Math.cos(angle) * 8,
              vy: Math.sin(angle) * 8,
              radius: 12,
              color: "#FF4500",
              damage: boss.damage + 1,
              pierceLeft: 0
            });
          });
        }
        break;
      default:
        for (let i = 0; i < 20; i++) {
          const angle = Math.random() * Math.PI * 2;
          game.pushEnemyBullet({
            x: boss.x,
            y: boss.y,
            vx: Math.cos(angle) * 5,
            vy: Math.sin(angle) * 5,
            radius: 5,
            color: boss.color,
            damage: boss.damage,
            pierceLeft: 0
          });
        }
        break;
    }
  }
  function resolveStompImpact(game, boss) {
    boss.isPreparingStomp = false;
    const center = boss.stompTarget || { x: boss.x, y: boss.y };
    const radius = boss.stompRadius || 200;
    const hitRadius = radius + game.player.radius;
    if (game.getDistanceSq(game.player.x, game.player.y, center.x, center.y) < hitRadius * hitRadius) {
      game.damagePlayer(boss.damage * 2);
    }
    game.pushExplosion({ x: center.x, y: center.y, radius: 0, maxRadius: radius * 0.7, alpha: 1, growth: 7, fade: 0.03, color: "255,140,40", ring: true, lineWidth: 4 });
    game.pushExplosion({ x: center.x, y: center.y, radius: 12, maxRadius: radius, alpha: 0.75, growth: 9, fade: 0.035, color: "255,90,40", ring: true, lineWidth: 3 });
    game.pushExplosion({ x: center.x, y: center.y, radius: 24, maxRadius: radius + 40, alpha: 0.55, growth: 11, fade: 0.04, color: "255,60,20", ring: true, lineWidth: 2 });
  }
  function updateBossBombs(game, deltaTime) {
    for (let i = game.bossBombs.length - 1; i >= 0; i--) {
      const bomb = game.bossBombs[i];
      bomb.timer -= deltaTime;
      if (bomb.timer > 0) {
        continue;
      }
      const hitRadius = bomb.blastRadius + game.player.radius;
      if (game.getDistanceSq(game.player.x, game.player.y, bomb.x, bomb.y) < hitRadius * hitRadius) {
        game.damagePlayer(bomb.damage);
      }
      game.pushExplosion({ x: bomb.x, y: bomb.y, radius: 0, maxRadius: bomb.blastRadius, alpha: 1, growth: 8, fade: 0.035, color: "255,80,30", ring: true, lineWidth: 3 });
      game.pushExplosion({ x: bomb.x, y: bomb.y, radius: 10, maxRadius: bomb.blastRadius + 25, alpha: 0.6, growth: 10, fade: 0.05, color: "255,120,60", ring: true, lineWidth: 2 });
      game.bossBombs.splice(i, 1);
    }
  }
  function updateBossStates(game, deltaTime, timestamp) {
    const frameScale = deltaTime / FRAME_TIME;
    for (let i = 0; i < game.enemies.length; i++) {
      const boss = game.enemies[i];
      if (!boss.isBoss) {
        continue;
      }
      if (boss.frenzyApplied && boss.frenzyUntil && timestamp >= boss.frenzyUntil) {
        boss.speed /= 1.4;
        boss.frenzyApplied = false;
        boss.frenzyUntil = 0;
      }
      if (boss.isPreparingStomp) {
        boss.stompTimer = (boss.stompTimer || 0) - deltaTime;
        if ((boss.stompTimer || 0) <= 220 && (boss.stompFlash || 0) <= 0) {
          boss.stompFlash = 180;
          if (boss.stompTarget) {
            boss.x = boss.stompTarget.x;
            boss.y = boss.stompTarget.y;
          }
        }
        if ((boss.stompFlash || 0) > 0) {
          boss.stompFlash = (boss.stompFlash || 0) - deltaTime;
        }
        if ((boss.stompTimer || 0) <= 0) {
          game.resolveStompImpact(boss);
        }
        continue;
      }
      if (boss.isChargeAiming) {
        boss.chargeAimTimer = (boss.chargeAimTimer || 0) - deltaTime;
        if ((boss.chargeAimTimer || 0) <= 0) {
          boss.isChargeAiming = false;
          boss.isChargeWarning = true;
          boss.chargeWarningTimer = 420;
        }
        continue;
      }
      if (boss.isChargeWarning) {
        boss.chargeWarningTimer = (boss.chargeWarningTimer || 0) - deltaTime;
        if ((boss.chargeWarningTimer || 0) <= 0) {
          boss.isChargeWarning = false;
          boss.isCharging = true;
        }
        continue;
      }
      if (boss.isCharging) {
        const step = (boss.chargeSpeed || 17) * frameScale;
        boss.x += (boss.chargeDirX || 0) * step;
        boss.y += (boss.chargeDirY || 0) * step;
        boss.chargeDistanceLeft = (boss.chargeDistanceLeft || 0) - step;
        const hitRadius = boss.radius + game.player.radius;
        if (game.getDistanceSq(boss.x, boss.y, game.player.x, game.player.y) < hitRadius * hitRadius) {
          game.damagePlayer(Math.ceil(boss.damage * 1.2));
        }
        const minX = boss.radius;
        const maxX = WORLD_WIDTH - boss.radius;
        const minY = boss.radius;
        const maxY = WORLD_HEIGHT - boss.radius;
        if (boss.x <= minX || boss.x >= maxX || boss.y <= minY || boss.y >= maxY || (boss.chargeDistanceLeft || 0) <= 0) {
          boss.x = game.clamp(boss.x, minX, maxX);
          boss.y = game.clamp(boss.y, minY, maxY);
          boss.isCharging = false;
        }
      }
    }
  }

  // src/game/systems/flowSystem.ts
  function enterNextLevel(game) {
    game.currentLevel++;
    if (game.currentLevel > MAX_LEVEL) {
      game.gameState = "CLEAR";
      return;
    }
    game.levelProgress = 0;
    game.levelComplete = false;
    game.isBossActive = false;
    game.waitingForBoss = false;
    game.levelTransitionAt = 0;
    game.enemies = [];
    game.enemyBullets = [];
    game.drops = [];
    game.mines = [];
    game.bossBombs = [];
    game.lastEnemySpawn = 0;
    game.lastHordeSpawn = 0;
    game.healthDropsThisLevel = 0;
    game.ui.updateLevel(`第${game.currentLevel}关`);
    game.ui.updateScore(game.score);
    game.showLevelNotice(`第${game.currentLevel}关`);
  }
  function resetGameState(game) {
    game.gameState = "PLAYING";
    game.currentLevel = 1;
    game.levelProgress = 0;
    game.kills = 0;
    game.score = 0;
    game.isPaused = false;
    game.isBossActive = false;
    game.levelComplete = false;
    game.waitingForBoss = false;
    game.levelTransitionAt = 0;
    game.playerExp = 0;
    game.playerLevel = 1;
    game.expToNextLevel = 10;
    game.isChoosingSkill = false;
    game.skillChoices = [];
    game.skillCountdown = 0;
    Laya.timer.clear(game, game.onSkillCountdownTick);
    game.ui.hideSkillModal();
    game.bullets = [];
    game.enemyBullets = [];
    game.enemies = [];
    game.drops = [];
    game.expOrbs = [];
    game.turrets = [];
    game.mines = [];
    game.explosions = [];
    game.bossBombs = [];
    game.player.x = WORLD_WIDTH / 2;
    game.player.y = WORLD_HEIGHT / 2;
    game.player.health = 10;
    game.player.maxHealth = 10;
    game.player.invincible = 0;
    game.player.evolution.bulletCount = 1;
    game.player.evolution.fireRateBoost = 0;
    game.player.skills = {};
    game.playerShield = false;
    game.shieldCooldown = 0;
    game.lastEnemySpawn = 0;
    game.lastHordeSpawn = 0;
    game.healthDropsThisLevel = 0;
    game.ui.updateScore(0);
    game.ui.updateLevel("第1关");
    game.updateHealthUI();
    game.updateExpUI();
    game.updateEvolutionUI();
    game.updateSkillIconsUI();
    game.showLevelNotice("第1关");
  }

  // src/game/systems/playerSystem.ts
  function shootPlayer(game, timestamp) {
    const fireRate = game.player.baseFireRate * (1 - game.player.evolution.fireRateBoost * 0.1);
    if (timestamp - game.lastShotTime < fireRate) {
      return;
    }
    game.lastShotTime = timestamp;
    const baseAngle = Math.atan2(game.mouse.y - game.player.y, game.mouse.x - game.player.x);
    let baseDamage = 1;
    if (game.player.skills.DAMAGE_BOOST) {
      baseDamage *= 1 + game.player.skills.DAMAGE_BOOST.level * 0.25;
    }
    let isCrit = false;
    if (game.player.skills.CRITICAL_STRIKE && Math.random() < game.player.skills.CRITICAL_STRIKE.level * 0.1) {
      baseDamage *= 2;
      isCrit = true;
    }
    const pierceCount = game.player.skills.BULLET_PIERCE ? game.player.skills.BULLET_PIERCE.level : 0;
    const bulletCount = game.player.evolution.bulletCount;
    const spreadAngle = 0.15;
    for (let i = 0; i < bulletCount; i++) {
      let angleOffset = 0;
      if (bulletCount > 1) {
        angleOffset = (i - (bulletCount - 1) / 2) * spreadAngle;
      }
      const angle = baseAngle + angleOffset;
      game.bullets.push({
        x: game.player.x,
        y: game.player.y,
        vx: Math.cos(angle) * 10,
        vy: Math.sin(angle) * 10,
        angle,
        radius: 4,
        color: isCrit ? "#FF0000" : "#FFD700",
        damage: baseDamage,
        pierceLeft: pierceCount
      });
    }
  }
  function updatePlayerMovement(game, timestamp) {
    if (game.player.invincible > 0) {
      game.player.invincible--;
    }
    let dx = game.isTouchDevice ? game.joystickVector.x : 0;
    let dy = game.isTouchDevice ? game.joystickVector.y : 0;
    if (!game.isTouchDevice) {
      if (game.keys.w) {
        dy -= 1;
      }
      if (game.keys.s) {
        dy += 1;
      }
      if (game.keys.a) {
        dx -= 1;
      }
      if (game.keys.d) {
        dx += 1;
      }
    }
    if (dx !== 0 || dy !== 0) {
      const len = Math.sqrt(dx * dx + dy * dy);
      dx /= len;
      dy /= len;
    }
    let speedMod = 1;
    if (game.player.skills.MOVEMENT_SPEED) {
      speedMod = 1 + game.player.skills.MOVEMENT_SPEED.level * 0.15;
    }
    const speed = game.player.baseSpeed * speedMod;
    game.playerMoveVX = dx * speed;
    game.playerMoveVY = dy * speed;
    game.player.x += game.playerMoveVX;
    game.player.y += game.playerMoveVY;
    game.player.x = game.clamp(game.player.x, game.player.radius, WORLD_WIDTH - game.player.radius);
    game.player.y = game.clamp(game.player.y, game.player.radius, WORLD_HEIGHT - game.player.radius);
    if (game.isTouchDevice) {
      const target = findNearestEnemy(game.enemies, game.player.x, game.player.y);
      if (target) {
        game.mouse.x = target.x;
        game.mouse.y = target.y;
        shootPlayer(game, timestamp);
      }
      return;
    }
    if (game.mouse.left) {
      shootPlayer(game, timestamp);
    }
  }
  function updateBulletState(game, deltaTime) {
    if (game.enemyBullets.length > MAX_ENEMY_BULLETS) {
      game.enemyBullets.splice(0, game.enemyBullets.length - MAX_ENEMY_BULLETS);
    }
    for (let i = game.bullets.length - 1; i >= 0; i--) {
      const bullet = game.bullets[i];
      bullet.x += bullet.vx;
      bullet.y += bullet.vy;
      if (bullet.x < 0 || bullet.x > WORLD_WIDTH || bullet.y < 0 || bullet.y > WORLD_HEIGHT) {
        game.bullets.splice(i, 1);
      }
    }
    for (let i = game.enemyBullets.length - 1; i >= 0; i--) {
      const bullet = game.enemyBullets[i];
      if (bullet.isHoming) {
        let canHoming = true;
        if (bullet.homingDuration !== void 0) {
          bullet.homingDuration -= deltaTime;
          if (bullet.homingDuration <= 0) {
            canHoming = false;
            bullet.isHoming = false;
          }
        }
        if (canHoming) {
          const homingAccel = bullet.homingAccel === void 0 ? 0.2 : bullet.homingAccel;
          const maxSpeed = bullet.maxSpeed === void 0 ? 6 : bullet.maxSpeed;
          const frameScale = deltaTime / FRAME_TIME;
          const speed = Math.max(1e-3, Math.sqrt(bullet.vx * bullet.vx + bullet.vy * bullet.vy));
          const currentAngle = Math.atan2(bullet.vy, bullet.vx);
          const targetAngle = Math.atan2(game.player.y - bullet.y, game.player.x - bullet.x);
          const turnRate = 0.085 * frameScale;
          const angleDelta = normalizeAngle(targetAngle - currentAngle);
          const turn = clamp(angleDelta, -turnRate, turnRate);
          const nextAngle = currentAngle + turn;
          const nextSpeed = Math.min(maxSpeed, speed + homingAccel * frameScale);
          bullet.vx = Math.cos(nextAngle) * nextSpeed;
          bullet.vy = Math.sin(nextAngle) * nextSpeed;
        }
      }
      if (bullet.life !== void 0) {
        bullet.life -= deltaTime;
        if (bullet.life <= 0) {
          game.enemyBullets.splice(i, 1);
          continue;
        }
      }
      bullet.x += bullet.vx;
      bullet.y += bullet.vy;
      if (bullet.x < -50 || bullet.x > WORLD_WIDTH + 50 || bullet.y < -50 || bullet.y > WORLD_HEIGHT + 50) {
        if (bullet.life === void 0) {
          game.enemyBullets.splice(i, 1);
        }
      }
    }
  }
  function normalizeAngle(angle) {
    while (angle > Math.PI) {
      angle -= Math.PI * 2;
    }
    while (angle < -Math.PI) {
      angle += Math.PI * 2;
    }
    return angle;
  }
  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }
  function findNearestEnemy(enemies, x, y) {
    let best = null;
    let bestDistSq = Number.POSITIVE_INFINITY;
    for (const enemy of enemies) {
      const dx = enemy.x - x;
      const dy = enemy.y - y;
      const distSq = dx * dx + dy * dy;
      if (distSq < bestDistSq) {
        bestDistSq = distSq;
        best = enemy;
      }
    }
    return best;
  }
  function damagePlayer(game, amount) {
    if (game.player.invincible > 0) {
      return;
    }
    if (game.playerShield) {
      game.playerShield = false;
      game.shieldCooldown = 3e4;
      game.showFloatText("护盾破碎!", game.player.x, game.player.y, "#00E5FF");
      return;
    }
    game.player.health -= amount;
    game.player.invincible = 30;
    game.updateHealthUI();
    game.showFloatText(`-${amount}`, game.player.x, game.player.y - 30, "#FF0000");
    if (game.player.health <= 0) {
      game.gameState = "GAME_OVER";
    }
  }

  // src/game/systems/renderSystem.ts
  var bgRuntime = {
    host: null,
    baseA: null,
    baseB: null,
    starsA: null,
    starsB: null,
    baseTex: null,
    starsTex: null,
    lastTick: 0,
    baseScrollA: 0,
    baseScrollB: -CANVAS_HEIGHT,
    scrollA: 0,
    scrollB: -CANVAS_HEIGHT,
    texW: 0,
    texH: 0
  };
  function getBackgroundTexSize() {
    const stageW = Laya.stage && Laya.stage.width || CANVAS_WIDTH;
    const stageH = Laya.stage && Laya.stage.height || CANVAS_HEIGHT;
    const w = Math.ceil(Math.max(CANVAS_WIDTH, stageW) * 1.8);
    const h = Math.ceil(Math.max(CANVAS_HEIGHT, stageH) * 2.2);
    return { w, h };
  }
  function createTexture(width, height, painter) {
    const canvas = Laya.Browser.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return new Laya.Texture(Laya.Texture2D.whiteTexture);
    }
    painter(ctx);
    const tex2D = new Laya.Texture2D(width, height, Laya.TextureFormat.R8G8B8A8, false, false);
    tex2D.setImageData(canvas, false, false);
    return new Laya.Texture(tex2D);
  }
  function ensureBackgroundTextures(texW, texH) {
    if (bgRuntime.baseTex && bgRuntime.starsTex && bgRuntime.texW === texW && bgRuntime.texH === texH) {
      return;
    }
    bgRuntime.baseTex = createTexture(texW, texH, (ctx) => {
      const grad = ctx.createLinearGradient(0, 0, 0, texH);
      grad.addColorStop(0, "#050818");
      grad.addColorStop(1, "#02030B");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, texW, texH);
    });
    bgRuntime.starsTex = createTexture(texW, texH, (ctx) => {
      const baseArea = CANVAS_WIDTH * CANVAS_HEIGHT;
      const count = Math.min(520, Math.floor(220 * (texW * texH) / Math.max(1, baseArea)));
      for (let i = 0; i < count; i++) {
        const x = Math.random() * texW;
        const y = Math.random() * texH;
        const size = Math.random() < 0.82 ? 0.8 + Math.random() * 1.1 : 1.9 + Math.random() * 1.2;
        const a = 0.28 + Math.random() * 0.6;
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fillRect(x, y, size, size);
      }
    });
    bgRuntime.texW = texW;
    bgRuntime.texH = texH;
  }
  function drawRotatedRect(g, x, y, length, width, angle, fill, stroke, lineWidth = 2) {
    const halfW = width / 2;
    const local = [
      -length * 0.2,
      -halfW,
      length,
      -halfW,
      length,
      halfW,
      -length * 0.2,
      halfW
    ];
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const points = [];
    for (let i = 0; i < local.length; i += 2) {
      const lx = local[i];
      const ly = local[i + 1];
      points.push(x + lx * cos - ly * sin, y + lx * sin + ly * cos);
    }
    g.drawPoly(0, 0, points, fill, stroke, lineWidth);
  }
  function drawBossTelegraph(game, g, timestamp) {
    for (let i = 0; i < game.enemies.length; i++) {
      const boss = game.enemies[i];
      if (!boss.isBoss) {
        continue;
      }
      if (boss.isPreparingStomp && boss.stompTarget) {
        const progress = 1 - (boss.stompTimer || 0) / Math.max(1, boss.stompDuration || 1500);
        const pulse = 0.2 + Math.sin(timestamp / 90) * 0.08;
        const radius = boss.stompRadius || 200;
        g.drawCircle(boss.stompTarget.x, boss.stompTarget.y, radius, `rgba(255,20,20,${0.08 + progress * 0.18 + pulse})`, "rgba(255,80,80,0.95)", 3);
        if ((boss.stompFlash || 0) > 0) {
          const flashAlpha = Math.min(1, (boss.stompFlash || 0) / 180);
          g.drawCircle(boss.stompTarget.x, boss.stompTarget.y, radius * (0.92 + flashAlpha * 0.08), null, `rgba(255,255,255,${flashAlpha})`, 6);
        }
      }
      if (boss.isChargeWarning || boss.isCharging) {
        const length = Math.max(140, boss.chargeDistanceLeft || 480);
        const width = boss.radius * (boss.isCharging ? 1.8 : 2.2);
        const alpha = boss.isCharging ? 0.12 : 0.26 + Math.sin(timestamp / 65) * 0.05;
        drawRotatedRect(g, boss.x, boss.y, length, width, boss.chargeAngle || 0, `rgba(255,0,0,${alpha})`, "rgba(255,110,110,0.95)", 2);
      }
    }
    for (let i = 0; i < game.bossBombs.length; i++) {
      const bomb = game.bossBombs[i];
      const blinkFast = bomb.timer < 700;
      const blink = blinkFast ? Math.floor(bomb.timer / 80) % 2 === 0 : Math.floor(bomb.timer / 150) % 2 === 0;
      const fill = blink ? "rgba(255,60,60,0.9)" : "rgba(180,40,40,0.8)";
      g.drawCircle(bomb.x, bomb.y, bomb.radius, fill);
      g.drawCircle(bomb.x, bomb.y, bomb.blastRadius, null, "rgba(255,70,70,0.85)", 2);
    }
  }
  function ensureBackgroundSprites(game) {
    const texSize = getBackgroundTexSize();
    if (bgRuntime.host === game.background && bgRuntime.baseA && bgRuntime.baseB && bgRuntime.starsA && bgRuntime.starsB && bgRuntime.texW === texSize.w && bgRuntime.texH === texSize.h) {
      return;
    }
    ensureBackgroundTextures(texSize.w, texSize.h);
    if (!bgRuntime.baseTex || !bgRuntime.starsTex) {
      return;
    }
    game.background.graphics.clear();
    game.background.removeChildren();
    const baseA = new Laya.Sprite();
    baseA.texture = bgRuntime.baseTex;
    baseA.pos(0, 0);
    baseA.mouseEnabled = false;
    const baseB = new Laya.Sprite();
    baseB.texture = bgRuntime.baseTex;
    baseB.pos(0, -bgRuntime.texH);
    baseB.mouseEnabled = false;
    const starsA = new Laya.Sprite();
    starsA.texture = bgRuntime.starsTex;
    starsA.pos(0, 0);
    starsA.alpha = 0.82;
    starsA.mouseEnabled = false;
    const starsB = new Laya.Sprite();
    starsB.texture = bgRuntime.starsTex;
    starsB.pos(0, -bgRuntime.texH);
    starsB.alpha = 0.7;
    starsB.mouseEnabled = false;
    game.background.addChild(baseA);
    game.background.addChild(baseB);
    game.background.addChild(starsA);
    game.background.addChild(starsB);
    bgRuntime.host = game.background;
    bgRuntime.baseA = baseA;
    bgRuntime.baseB = baseB;
    bgRuntime.starsA = starsA;
    bgRuntime.starsB = starsB;
    bgRuntime.lastTick = 0;
    bgRuntime.baseScrollA = 0;
    bgRuntime.baseScrollB = -bgRuntime.texH;
    bgRuntime.scrollA = 0;
    bgRuntime.scrollB = -bgRuntime.texH;
  }
  function renderBackgroundLayer(game, timestamp) {
    ensureBackgroundSprites(game);
    if (!bgRuntime.starsA || !bgRuntime.starsB) {
      return;
    }
    const refreshInterval = game.severePerformanceMode ? 66 : game.lowPerformanceMode ? 33 : 16;
    if (timestamp - game.lastBackgroundRenderTime < refreshInterval) {
      return;
    }
    const dt = bgRuntime.lastTick > 0 ? timestamp - bgRuntime.lastTick : refreshInterval;
    bgRuntime.lastTick = timestamp;
    game.lastBackgroundRenderTime = timestamp;
    const speed = game.severePerformanceMode ? 0.018 : game.lowPerformanceMode ? 0.026 : 0.036;
    const drift = dt * speed;
    const baseDrift = drift * 0.42;
    bgRuntime.baseScrollA += baseDrift;
    bgRuntime.baseScrollB += baseDrift;
    const tileH = Math.max(CANVAS_HEIGHT, bgRuntime.texH || CANVAS_HEIGHT);
    if (bgRuntime.baseScrollA >= tileH) {
      bgRuntime.baseScrollA = bgRuntime.baseScrollB - tileH;
    }
    if (bgRuntime.baseScrollB >= tileH) {
      bgRuntime.baseScrollB = bgRuntime.baseScrollA - tileH;
    }
    bgRuntime.scrollA += drift;
    bgRuntime.scrollB += drift;
    if (bgRuntime.scrollA >= tileH) {
      bgRuntime.scrollA = bgRuntime.scrollB - tileH;
    }
    if (bgRuntime.scrollB >= tileH) {
      bgRuntime.scrollB = bgRuntime.scrollA - tileH;
    }
    const camX = game.cameraX || 0;
    const camY = game.cameraY || 0;
    const baseRangeX = Math.max(0, (bgRuntime.texW || CANVAS_WIDTH) - CANVAS_WIDTH);
    const starRangeX = Math.max(0, (bgRuntime.texW || CANVAS_WIDTH) - CANVAS_WIDTH);
    const basePx = baseRangeX > 0 ? -(camX * 0.12 % baseRangeX) : 0;
    const basePy = -camY * 0.12;
    const starPx = starRangeX > 0 ? -(camX * 0.16 % starRangeX) : 0;
    const starPy = -camY * 0.16;
    if (bgRuntime.baseA && bgRuntime.baseB) {
      bgRuntime.baseA.pos(basePx, bgRuntime.baseScrollA + basePy);
      bgRuntime.baseB.pos(basePx, bgRuntime.baseScrollB + basePy);
    }
    bgRuntime.starsA.pos(starPx, bgRuntime.scrollA + starPy);
    bgRuntime.starsB.pos(starPx, bgRuntime.scrollB + starPy);
    const pulseA = 0.76 + Math.sin(timestamp * 16e-4) * 0.12;
    const pulseB = 0.64 + Math.cos(timestamp * 12e-4) * 0.1;
    bgRuntime.starsA.alpha = pulseA;
    bgRuntime.starsB.alpha = pulseB;
  }
  function drawBossBody(g, boss, timestamp) {
    const pulse = 0.85 + Math.sin(timestamp * 0.01) * 0.12;
    if (!boss.name) {
      g.drawCircle(boss.x, boss.y, boss.radius, boss.color);
      return;
    }
    if (boss.name.indexOf("狂怒") >= 0) {
      g.drawCircle(boss.x, boss.y, boss.radius, "#7A0000");
      g.drawCircle(boss.x, boss.y, boss.radius * 0.68, "#F44336");
      for (let i = 0; i < 2; i++) {
        const side = i === 0 ? 1 : -1;
        const hornBaseX = boss.x + side * boss.radius * 0.45;
        const hornBaseY = boss.y - boss.radius * 0.55;
        g.drawPoly(0, 0, [
          hornBaseX,
          hornBaseY,
          hornBaseX + side * boss.radius * 0.55,
          hornBaseY - boss.radius * 0.35,
          hornBaseX + side * boss.radius * 0.08,
          hornBaseY + boss.radius * 0.18
        ], "#FFD54F", "#FFF8E1", 2);
      }
      for (let i = 0; i < 6; i++) {
        const angle = Math.PI * 2 / 6 * i + timestamp * 12e-4;
        g.drawLine(
          boss.x + Math.cos(angle) * boss.radius * 0.8,
          boss.y + Math.sin(angle) * boss.radius * 0.8,
          boss.x + Math.cos(angle) * boss.radius * 1.16,
          boss.y + Math.sin(angle) * boss.radius * 1.16,
          "#FF8A80",
          3
        );
      }
      return;
    }
    if (boss.name.indexOf("终焉") >= 0) {
      g.drawCircle(boss.x, boss.y, boss.radius * 1.2, "rgba(18,24,45,0.96)");
      g.drawCircle(boss.x, boss.y, boss.radius * 1.02, "rgba(39,59,105,0.68)");
      g.drawCircle(boss.x, boss.y, boss.radius * 0.64, "#607D8B");
      g.drawCircle(boss.x, boss.y, boss.radius * (0.88 + 0.06 * pulse), null, "rgba(220,235,255,0.68)", 3);
      drawRotatedRect(g, boss.x, boss.y, boss.radius * 1.7, boss.radius * 0.38, timestamp * 25e-4, "rgba(141,110,255,0.25)", "rgba(209,196,233,0.82)", 2);
      return;
    }
    if (boss.name.indexOf("飞天") >= 0) {
      g.drawCircle(boss.x, boss.y, boss.radius * 0.82, "#8D6E63");
      g.drawCircle(boss.x - boss.radius * 0.45, boss.y + boss.radius * 0.88, boss.radius * 0.33, "#5D4037");
      g.drawCircle(boss.x + boss.radius * 0.45, boss.y + boss.radius * 0.88, boss.radius * 0.33, "#5D4037");
      g.drawEllipse(boss.x - boss.radius * 1.15, boss.y - boss.radius * 0.5, boss.radius * 1.05, boss.radius * 0.72, "rgba(255,193,7,0.55)", "rgba(255,245,157,0.8)", 1);
      g.drawEllipse(boss.x + boss.radius * 0.1, boss.y - boss.radius * 0.5, boss.radius * 1.05, boss.radius * 0.72, "rgba(255,193,7,0.55)", "rgba(255,245,157,0.8)", 1);
      return;
    }
    if (boss.name.indexOf("弹幕") >= 0) {
      g.drawCircle(boss.x, boss.y, boss.radius * 0.88, "#FF7043");
      g.drawCircle(boss.x, boss.y, boss.radius * 0.5, "#FFD54F");
      const spikeCount = 12;
      for (let i = 0; i < spikeCount; i++) {
        const angle = Math.PI * 2 / spikeCount * i + timestamp * 1e-3;
        const baseR = boss.radius * 0.88;
        const tipR = boss.radius * 1.28;
        const sideR = boss.radius * 0.18;
        const cx = Math.cos(angle);
        const cy = Math.sin(angle);
        const px = -cy;
        const py = cx;
        g.drawPoly(0, 0, [
          boss.x + cx * baseR + px * sideR,
          boss.y + cy * baseR + py * sideR,
          boss.x + cx * tipR,
          boss.y + cy * tipR,
          boss.x + cx * baseR - px * sideR,
          boss.y + cy * baseR - py * sideR
        ], "#FFB74D", "#FFE082", 1);
      }
      return;
    }
    g.drawCircle(boss.x, boss.y, boss.radius, boss.color);
    g.drawCircle(boss.x, boss.y, boss.radius * (0.58 + 0.1 * pulse), "rgba(255,255,255,0.2)");
  }
  function renderWorld(game, _deltaTime) {
    const timestamp = Laya.timer.currTimer;
    renderBackgroundLayer(game, timestamp);
    const g = game.world.graphics;
    g.clear();
    if (game.gameState === "GAME_OVER") {
      g.drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, "rgba(0,0,0,0.8)");
      g.fillText("游戏结束", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 80, "bold 48px Arial", "#FFFFFF", "center");
      g.fillText(`最终积分: ${game.score} | 击杀: ${game.kills} | 到达: 第${game.currentLevel}关`, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 20, "24px Arial", "#FFFFFF", "center");
      g.fillText(`可得金币: ${game.pendingCoins}`, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 22, "22px Arial", "#FDE68A", "center");
      const reviveX = CANVAS_WIDTH / 2 - 220;
      const restartX = CANVAS_WIDTH / 2 + 20;
      const btnY = CANVAS_HEIGHT / 2 + 54;
      const btnW = 200;
      const btnH = 64;
      const reviveColor = game.canRevive ? "#2563EB" : "#4B5563";
      g.drawRoundRect(reviveX, btnY, btnW, btnH, 12, 12, 12, 12, reviveColor);
      g.fillText(game.canRevive ? "复活继续" : "已复活", reviveX + btnW / 2, btnY + 16, "bold 24px Arial", "#FFFFFF", "center");
      g.drawRoundRect(restartX, btnY, btnW, btnH, 12, 12, 12, 12, "#16A34A");
      g.fillText("重新开始", restartX + btnW / 2, btnY + 16, "bold 24px Arial", "#FFFFFF", "center");
      return;
    }
    if (game.gameState === "CLEAR") {
      g.drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, "rgba(0,0,0,0.8)");
      g.fillText("恭喜通关！", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 40, "bold 48px Arial", "#FFD700", "center");
      return;
    }
    if (game.player.skills.THORN_AURA) {
      const range = 100 + (game.player.skills.THORN_AURA.level - 1) * 20;
      g.drawCircle(game.player.x, game.player.y, range, null, "rgba(120,80,220,0.5)", 2);
    }
    drawBossTelegraph(game, g, timestamp);
    for (let i = 0; i < game.enemies.length; i++) {
      const enemy = game.enemies[i];
      if (!enemy.isBoss) {
        continue;
      }
      drawBossBody(g, enemy, timestamp);
      if (enemy.health < enemy.maxHealth) {
        const barWidth = enemy.radius * 2;
        g.drawRect(enemy.x - barWidth / 2, enemy.y - enemy.radius - 10, barWidth, 4, "#555555");
        g.drawRect(enemy.x - barWidth / 2, enemy.y - enemy.radius - 10, barWidth * (enemy.health / enemy.maxHealth), 4, enemy.isBoss ? "#FFD700" : "#00FF00");
      }
      if (enemy.isBoss && enemy.name) {
        g.fillText(enemy.name, enemy.x, enemy.y - enemy.radius - 20, "14px Arial", "#FFFFFF", "center");
      }
    }
  }

  // src/game/systems/spriteEntityRenderSystem.ts
  var TEX_URL = {
    playerBullet: "resources/gamefx/player_bullet.png",
    enemyBullet: "resources/gamefx/enemy_bullet.png",
    enemyNormal: "resources/gamefx/enemy_normal.png",
    enemyRanged: "resources/gamefx/enemy_ranged.png",
    enemyElite: "resources/gamefx/enemy_elite.png",
    enemySuicide: "resources/gamefx/enemy_suicide.png",
    enemyHorde: "resources/gamefx/enemy_horde.png",
    expOrb: "resources/gamefx/exp_orb.png",
    drop: "resources/gamefx/drop_pack.png",
    mine: "resources/gamefx/mine.png",
    turret: "resources/gamefx/turret.png"
  };
  var state = {
    layer: null,
    worldLayer: null,
    actorLayer: null,
    fxLayer: null,
    enemyBulletLayer: null,
    playerBulletLayer: null,
    playerOverlayLayer: null,
    playerShipSprite: null,
    playerShieldSprite: null,
    playerMuzzleSprite: null,
    playerTrailSprite: null,
    textures: null,
    loadingStarted: false,
    loadedFromFiles: false,
    pools: {
      playerBullets: [],
      enemyBullets: [],
      enemies: [],
      expOrbs: [],
      drops: [],
      mines: [],
      turrets: [],
      explosions: []
    }
  };
  function createTexture2(width, height, painter) {
    const canvas = Laya.Browser.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return new Laya.Texture(Laya.Texture2D.whiteTexture);
    }
    painter(ctx);
    const tex2D = new Laya.Texture2D(width, height, Laya.TextureFormat.R8G8B8A8, false, false);
    tex2D.setImageData(canvas, false, false);
    return new Laya.Texture(tex2D);
  }
  function drawEnemyTex(ctx, core, ring) {
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.arc(14, 14, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = ring;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  function buildFallbackTextures() {
    return {
      playerBullet: createTexture2(20, 8, (ctx) => {
        const grad = ctx.createLinearGradient(0, 0, 20, 0);
        grad.addColorStop(0, "#FFF8E1");
        grad.addColorStop(0.6, "#FFD54F");
        grad.addColorStop(1, "#FF6F00");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(1, 4);
        ctx.lineTo(15, 1);
        ctx.lineTo(19, 4);
        ctx.lineTo(15, 7);
        ctx.closePath();
        ctx.fill();
      }),
      enemyBullet: createTexture2(14, 14, (ctx) => {
        const grad = ctx.createRadialGradient(7, 7, 1, 7, 7, 7);
        grad.addColorStop(0, "#FFF8E1");
        grad.addColorStop(0.45, "#FF8A65");
        grad.addColorStop(1, "#E53935");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(7, 7, 6, 0, Math.PI * 2);
        ctx.fill();
      }),
      enemyNormal: createTexture2(28, 28, (ctx) => drawEnemyTex(ctx, "#F44336", "#FFCDD2")),
      enemyRanged: createTexture2(28, 28, (ctx) => drawEnemyTex(ctx, "#FF9800", "#FFE0B2")),
      enemyElite: createTexture2(28, 28, (ctx) => drawEnemyTex(ctx, "#9C27B0", "#E1BEE7")),
      enemySuicide: createTexture2(28, 28, (ctx) => drawEnemyTex(ctx, "#FFEB3B", "#FFF9C4")),
      enemyHorde: createTexture2(28, 28, (ctx) => drawEnemyTex(ctx, "#FF8A80", "#FFEBEE")),
      expOrb: createTexture2(14, 14, (ctx) => {
        const grad = ctx.createRadialGradient(7, 7, 1, 7, 7, 7);
        grad.addColorStop(0, "#E3F2FD");
        grad.addColorStop(0.5, "#64B5F6");
        grad.addColorStop(1, "#1E88E5");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(7, 7, 7, 0, Math.PI * 2);
        ctx.fill();
      }),
      drop: createTexture2(24, 24, (ctx) => {
        ctx.fillStyle = "#E91E63";
        ctx.fillRect(2, 2, 20, 20);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(10, 5, 4, 14);
        ctx.fillRect(5, 10, 14, 4);
      }),
      mine: createTexture2(20, 20, (ctx) => {
        ctx.fillStyle = "#FF5722";
        ctx.beginPath();
        ctx.arc(10, 10, 9, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2;
        ctx.stroke();
      }),
      turret: createTexture2(44, 44, (ctx) => {
        ctx.fillStyle = "#4CAF50";
        ctx.beginPath();
        ctx.arc(22, 22, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#C8E6C9";
        ctx.beginPath();
        ctx.arc(22, 22, 8, 0, Math.PI * 2);
        ctx.fill();
      }),
      playerShip: createTexture2(80, 80, (ctx) => {
        ctx.translate(40, 40);
        const grad = ctx.createLinearGradient(-26, 0, 26, 0);
        grad.addColorStop(0, "#9EC8FF");
        grad.addColorStop(0.7, "#E8F2FF");
        grad.addColorStop(1, "#8EB9FF");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(30, 0);
        ctx.lineTo(-12, 17);
        ctx.lineTo(-24, 10);
        ctx.lineTo(-30, 0);
        ctx.lineTo(-24, -10);
        ctx.lineTo(-12, -17);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = "#244A9C";
        ctx.beginPath();
        ctx.moveTo(14, 0);
        ctx.lineTo(-9, 8);
        ctx.lineTo(-18, 0);
        ctx.lineTo(-9, -8);
        ctx.closePath();
        ctx.fill();
      }),
      playerShield: createTexture2(96, 96, (ctx) => {
        const grad = ctx.createRadialGradient(48, 48, 18, 48, 48, 46);
        grad.addColorStop(0, "rgba(120,240,255,0.1)");
        grad.addColorStop(0.65, "rgba(0,220,255,0.15)");
        grad.addColorStop(1, "rgba(0,229,255,0.35)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(48, 48, 44, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(173,255,255,0.92)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(48, 48, 41, 0, Math.PI * 2);
        ctx.stroke();
      }),
      playerMuzzle: createTexture2(48, 20, (ctx) => {
        const grad = ctx.createLinearGradient(0, 10, 48, 10);
        grad.addColorStop(0, "rgba(255,240,120,0.25)");
        grad.addColorStop(0.7, "rgba(255,190,60,0.8)");
        grad.addColorStop(1, "rgba(255,120,40,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(2, 10);
        ctx.lineTo(20, 2);
        ctx.lineTo(46, 10);
        ctx.lineTo(20, 18);
        ctx.closePath();
        ctx.fill();
      }),
      playerTrail: createTexture2(56, 22, (ctx) => {
        const grad = ctx.createLinearGradient(0, 11, 56, 11);
        grad.addColorStop(0, "rgba(255,190,90,0)");
        grad.addColorStop(0.5, "rgba(255,120,40,0.55)");
        grad.addColorStop(1, "rgba(255,90,30,0.85)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(2, 11);
        ctx.lineTo(24, 4);
        ctx.lineTo(54, 11);
        ctx.lineTo(24, 18);
        ctx.closePath();
        ctx.fill();
      }),
      explosionFill: createTexture2(128, 128, (ctx) => {
        const grad = ctx.createRadialGradient(64, 64, 8, 64, 64, 64);
        grad.addColorStop(0, "rgba(255,240,200,1)");
        grad.addColorStop(0.45, "rgba(255,160,70,0.92)");
        grad.addColorStop(1, "rgba(255,80,20,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(64, 64, 62, 0, Math.PI * 2);
        ctx.fill();
      }),
      explosionRing: createTexture2(128, 128, (ctx) => {
        ctx.strokeStyle = "rgba(255,170,90,0.95)";
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(64, 64, 54, 0, Math.PI * 2);
        ctx.stroke();
      })
    };
  }
  function initLayers(layer) {
    if (state.layer === layer && state.actorLayer && state.enemyBulletLayer && state.playerBulletLayer && state.fxLayer) {
      return;
    }
    state.layer = layer;
    state.layer.removeChildren();
    const actorLayer = new Laya.Sprite();
    const fxLayer = new Laya.Sprite();
    const enemyBulletLayer = new Laya.Sprite();
    const playerBulletLayer = new Laya.Sprite();
    actorLayer.mouseEnabled = false;
    fxLayer.mouseEnabled = false;
    enemyBulletLayer.mouseEnabled = false;
    playerBulletLayer.mouseEnabled = false;
    layer.addChild(actorLayer);
    layer.addChild(fxLayer);
    layer.addChild(enemyBulletLayer);
    layer.addChild(playerBulletLayer);
    state.actorLayer = actorLayer;
    state.fxLayer = fxLayer;
    state.enemyBulletLayer = enemyBulletLayer;
    state.playerBulletLayer = playerBulletLayer;
  }
  function initPlayerLayer(world) {
    if (state.worldLayer === world && state.playerOverlayLayer && state.playerShipSprite && state.playerShieldSprite && state.playerMuzzleSprite && state.playerTrailSprite) {
      return;
    }
    state.worldLayer = world;
    if (state.playerOverlayLayer && state.playerOverlayLayer.parent) {
      state.playerOverlayLayer.removeSelf();
    }
    const playerOverlayLayer = new Laya.Sprite();
    playerOverlayLayer.mouseEnabled = false;
    world.addChild(playerOverlayLayer);
    state.playerOverlayLayer = playerOverlayLayer;
    const ship = new Laya.Sprite();
    const shield = new Laya.Sprite();
    const muzzle = new Laya.Sprite();
    const trail = new Laya.Sprite();
    ship.mouseEnabled = false;
    shield.mouseEnabled = false;
    muzzle.mouseEnabled = false;
    trail.mouseEnabled = false;
    playerOverlayLayer.addChild(trail);
    playerOverlayLayer.addChild(ship);
    playerOverlayLayer.addChild(shield);
    playerOverlayLayer.addChild(muzzle);
    state.playerShipSprite = ship;
    state.playerShieldSprite = shield;
    state.playerMuzzleSprite = muzzle;
    state.playerTrailSprite = trail;
  }
  function ensureTexturesLoaded() {
    if (!state.textures) {
      state.textures = buildFallbackTextures();
    }
    if (state.loadingStarted || state.loadedFromFiles) {
      return;
    }
    state.loadingStarted = true;
    const list = Object.keys(TEX_URL).map((k) => ({ url: TEX_URL[k], type: Laya.Loader.IMAGE }));
    Laya.loader.load(
      list,
      Laya.Handler.create(null, () => {
        if (!state.textures) {
          state.textures = buildFallbackTextures();
        }
        const fallback = state.textures;
        state.textures = {
          playerBullet: fallback.playerBullet,
          enemyBullet: fallback.enemyBullet,
          enemyNormal: Laya.loader.getRes(TEX_URL.enemyNormal) || fallback.enemyNormal,
          enemyRanged: Laya.loader.getRes(TEX_URL.enemyRanged) || fallback.enemyRanged,
          enemyElite: Laya.loader.getRes(TEX_URL.enemyElite) || fallback.enemyElite,
          enemySuicide: Laya.loader.getRes(TEX_URL.enemySuicide) || fallback.enemySuicide,
          enemyHorde: Laya.loader.getRes(TEX_URL.enemyHorde) || fallback.enemyHorde,
          expOrb: Laya.loader.getRes(TEX_URL.expOrb) || fallback.expOrb,
          drop: Laya.loader.getRes(TEX_URL.drop) || fallback.drop,
          mine: Laya.loader.getRes(TEX_URL.mine) || fallback.mine,
          turret: Laya.loader.getRes(TEX_URL.turret) || fallback.turret,
          playerShip: fallback.playerShip,
          playerShield: fallback.playerShield,
          playerMuzzle: fallback.playerMuzzle,
          playerTrail: fallback.playerTrail,
          explosionFill: fallback.explosionFill,
          explosionRing: fallback.explosionRing
        };
        state.loadedFromFiles = true;
      })
    );
  }
  function ensurePool(pool, need, parentLayer) {
    if (!parentLayer) {
      return;
    }
    while (pool.length < need) {
      const sp = new Laya.Sprite();
      sp.mouseEnabled = false;
      sp.visible = false;
      parentLayer.addChild(sp);
      pool.push(sp);
    }
  }
  function hideRest(pool, from) {
    for (let i = from; i < pool.length; i++) {
      pool[i].visible = false;
    }
  }
  function applyTexture(sprite, texture) {
    if (sprite.texture !== texture) {
      sprite.texture = texture;
      sprite.pivot(texture.width / 2, texture.height / 2);
    }
  }
  function getEnemyTexture(enemy, tex) {
    if (enemy.isHorde) {
      return tex.enemyHorde;
    }
    if (enemy.type === "elite") {
      return tex.enemyElite;
    }
    if (enemy.type === "ranged") {
      return tex.enemyRanged;
    }
    if (enemy.type === "suicide") {
      return tex.enemySuicide;
    }
    return tex.enemyNormal;
  }
  function syncPlayerBullets(ctx, tex) {
    const pool = state.pools.playerBullets;
    ensurePool(pool, ctx.bullets.length, state.playerBulletLayer);
    const bw = tex.playerBullet.width || 20;
    const bh = tex.playerBullet.height || 8;
    for (let i = 0; i < ctx.bullets.length; i++) {
      const bullet = ctx.bullets[i];
      const sp = pool[i];
      applyTexture(sp, tex.playerBullet);
      sp.visible = true;
      sp.pos(bullet.x, bullet.y);
      sp.rotation = (bullet.angle || Math.atan2(bullet.vy, bullet.vx)) * 180 / Math.PI;
      const scale = Math.max(0.75, bullet.radius / 4) * 2;
      sp.scale(scale, scale);
      sp.pivot(bw / 2, bh / 2);
    }
    hideRest(pool, ctx.bullets.length);
  }
  function syncEnemyBullets(ctx, tex) {
    const pool = state.pools.enemyBullets;
    ensurePool(pool, ctx.enemyBullets.length, state.enemyBulletLayer);
    const bw = tex.enemyBullet.width || 14;
    const bh = tex.enemyBullet.height || 14;
    for (let i = 0; i < ctx.enemyBullets.length; i++) {
      const bullet = ctx.enemyBullets[i];
      const sp = pool[i];
      applyTexture(sp, tex.enemyBullet);
      sp.visible = true;
      sp.pos(bullet.x, bullet.y);
      sp.rotation = 0;
      const scale = Math.max(0.55, bullet.radius * 2 / Math.max(bw, bh)) * 2;
      sp.scale(scale, scale);
      sp.pivot(bw / 2, bh / 2);
    }
    hideRest(pool, ctx.enemyBullets.length);
  }
  function syncEnemies(ctx, tex) {
    const pool = state.pools.enemies;
    ensurePool(pool, ctx.enemies.length, state.actorLayer);
    let write = 0;
    for (let i = 0; i < ctx.enemies.length; i++) {
      const enemy = ctx.enemies[i];
      if (enemy.isBoss) {
        continue;
      }
      const sp = pool[write];
      applyTexture(sp, getEnemyTexture(enemy, tex));
      sp.visible = true;
      sp.pos(enemy.x, enemy.y);
      const scale = Math.max(0.55, enemy.radius / 14);
      sp.scale(scale, scale);
      sp.rotation = 0;
      write++;
    }
    hideRest(pool, write);
  }
  function syncExpOrbs(ctx, tex) {
    const pool = state.pools.expOrbs;
    ensurePool(pool, ctx.expOrbs.length, state.actorLayer);
    for (let i = 0; i < ctx.expOrbs.length; i++) {
      const orb = ctx.expOrbs[i];
      const sp = pool[i];
      applyTexture(sp, tex.expOrb);
      sp.visible = true;
      sp.pos(orb.x, orb.y);
      const scale = Math.max(0.6, orb.radius / 7) * 2;
      sp.scale(scale, scale);
      sp.rotation = 0;
    }
    hideRest(pool, ctx.expOrbs.length);
  }
  function syncDrops(ctx, tex) {
    const pool = state.pools.drops;
    ensurePool(pool, ctx.drops.length, state.actorLayer);
    let write = 0;
    for (let i = 0; i < ctx.drops.length; i++) {
      const drop = ctx.drops[i];
      if (drop.life !== void 0 && drop.life < 2e3 && Math.floor(drop.life / 100) % 2 === 0) {
        continue;
      }
      const sp = pool[write];
      applyTexture(sp, tex.drop);
      sp.visible = true;
      sp.pos(drop.x, drop.y);
      sp.scale(1.7, 1.7);
      sp.rotation = 0;
      write++;
    }
    hideRest(pool, write);
  }
  function syncMines(ctx, tex) {
    const pool = state.pools.mines;
    ensurePool(pool, ctx.mines.length, state.actorLayer);
    for (let i = 0; i < ctx.mines.length; i++) {
      const mine = ctx.mines[i];
      const sp = pool[i];
      applyTexture(sp, tex.mine);
      sp.visible = true;
      sp.pos(mine.x, mine.y);
      sp.scale(1, 1);
      sp.rotation = 0;
    }
    hideRest(pool, ctx.mines.length);
  }
  function syncTurrets(ctx, tex) {
    const pool = state.pools.turrets;
    ensurePool(pool, ctx.turrets.length, state.actorLayer);
    for (let i = 0; i < ctx.turrets.length; i++) {
      const turret = ctx.turrets[i];
      const sp = pool[i];
      applyTexture(sp, tex.turret);
      sp.visible = true;
      sp.pos(turret.x, turret.y);
      sp.scale(Math.max(0.7, turret.radius / 20), Math.max(0.7, turret.radius / 20));
      sp.rotation = 0;
    }
    hideRest(pool, ctx.turrets.length);
  }
  function syncExplosions(ctx, tex) {
    const pool = state.pools.explosions;
    const budget = ctx.severePerformanceMode ? 24 : ctx.lowPerformanceMode ? 40 : 64;
    ensurePool(pool, budget, state.fxLayer);
    let write = 0;
    for (let i = ctx.explosions.length - 1; i >= 0; i--) {
      if (write >= budget) {
        break;
      }
      const exp = ctx.explosions[i];
      const sp = pool[write];
      const texture = exp.ring ? tex.explosionRing : tex.explosionFill;
      applyTexture(sp, texture);
      sp.visible = true;
      sp.pos(exp.x, exp.y);
      const baseRadius = Math.max(1, texture.width * 0.5);
      const scale = Math.max(0.02, exp.radius / baseRadius);
      sp.scale(scale, scale);
      sp.alpha = Math.max(0, exp.alpha);
      sp.rotation = exp.ring ? (Laya.timer.currTimer * 0.08 + write * 17) % 360 : 0;
      write++;
    }
    hideRest(pool, write);
  }
  function syncPlayer(ctx, tex) {
    const ship = state.playerShipSprite;
    const shield = state.playerShieldSprite;
    const muzzle = state.playerMuzzleSprite;
    const trail = state.playerTrailSprite;
    if (!ship || !shield || !muzzle || !trail) {
      return;
    }
    applyTexture(ship, tex.playerShip);
    applyTexture(shield, tex.playerShield);
    applyTexture(muzzle, tex.playerMuzzle);
    applyTexture(trail, tex.playerTrail);
    if (ctx.gameState !== "PLAYING" || ctx.player.invincible > 0 && Math.floor(ctx.player.invincible / 3) % 2 === 0) {
      ship.visible = false;
      shield.visible = false;
      muzzle.visible = false;
      trail.visible = false;
      return;
    }
    const px = ctx.player.x;
    const py = ctx.player.y;
    const angle = Math.atan2(ctx.mouse.y - py, ctx.mouse.x - px);
    const rotation = angle * 180 / Math.PI;
    const shipScale = Math.max(0.75, ctx.player.radius / 18);
    ship.visible = true;
    ship.pos(px, py);
    ship.scale(shipScale, shipScale);
    ship.rotation = rotation;
    ship.alpha = 1;
    shield.visible = ctx.playerShield;
    if (shield.visible) {
      const shieldScale = Math.max(0.72, (ctx.player.radius + 7) / 44);
      shield.pos(px, py);
      shield.scale(shieldScale, shieldScale);
      shield.rotation = 0;
      shield.alpha = 0.86;
    }
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const muzzleOn = Laya.timer.currTimer - ctx.lastShotTime < 95;
    muzzle.visible = muzzleOn;
    if (muzzle.visible) {
      muzzle.pos(px + cos * 26, py + sin * 26);
      muzzle.scale(1, 1);
      muzzle.rotation = rotation;
      muzzle.alpha = 0.9;
    }
    const moveSpeed = Math.sqrt(ctx.playerMoveVX * ctx.playerMoveVX + ctx.playerMoveVY * ctx.playerMoveVY);
    trail.visible = moveSpeed > 0.35;
    if (trail.visible) {
      const s = Math.min(1.7, 0.85 + moveSpeed * 0.12);
      trail.pos(px - cos * 18, py - sin * 18);
      trail.scale(s, s);
      trail.rotation = rotation + 180;
      trail.alpha = Math.min(1, 0.45 + moveSpeed * 0.07);
    }
  }
  function renderEntitySprites(ctx) {
    initLayers(ctx.entityLayer);
    initPlayerLayer(ctx.world);
    ensureTexturesLoaded();
    const tex = state.textures;
    if (!tex || !state.layer) {
      return;
    }
    if (ctx.gameState !== "PLAYING") {
      clearEntitySprites();
      return;
    }
    syncEnemies(ctx, tex);
    syncPlayerBullets(ctx, tex);
    syncEnemyBullets(ctx, tex);
    syncExpOrbs(ctx, tex);
    syncDrops(ctx, tex);
    syncMines(ctx, tex);
    syncTurrets(ctx, tex);
    syncExplosions(ctx, tex);
    syncPlayer(ctx, tex);
  }
  function clearEntitySprites() {
    if (state.playerBulletLayer) {
      state.playerBulletLayer.graphics.clear();
    }
    if (state.enemyBulletLayer) {
      state.enemyBulletLayer.graphics.clear();
    }
    if (state.playerShipSprite) {
      state.playerShipSprite.visible = false;
    }
    if (state.playerShieldSprite) {
      state.playerShieldSprite.visible = false;
    }
    if (state.playerMuzzleSprite) {
      state.playerMuzzleSprite.visible = false;
    }
    if (state.playerTrailSprite) {
      state.playerTrailSprite.visible = false;
    }
    const groups = state.pools;
    for (const key in groups) {
      const arr = groups[key];
      for (let i = 0; i < arr.length; i++) {
        arr[i].visible = false;
      }
    }
  }

  // src/game/systems/skillSystem.ts
  function gainExperience(game, amount, x, y) {
    game.expOrbs.push({ x, y, amount, radius: 5, speed: 3 });
  }
  function checkLevelUp(game) {
    while (game.playerExp >= game.expToNextLevel) {
      game.playerExp -= game.expToNextLevel;
      game.playerLevel++;
      game.expToNextLevel = Math.floor(game.expToNextLevel * 1.4);
      if (game.player.skills.HEAL_ON_LEVEL) {
        game.player.maxHealth += 1;
        game.player.health = game.player.maxHealth;
        game.updateHealthUI();
      }
      triggerSkillSelection(game);
    }
    game.updateExpUI();
  }
  function triggerSkillSelection(game) {
    var _a;
    game.isPaused = true;
    game.isChoosingSkill = true;
    game.skillCountdown = 10;
    const availableSkills = [];
    for (const key in SKILL_TYPES) {
      const skill = SKILL_TYPES[key];
      const currentLevel = ((_a = game.player.skills[skill.id]) == null ? void 0 : _a.level) || 0;
      if (skill.id === "BULLET_SPLIT" && game.player.evolution.bulletCount >= 5) {
        continue;
      }
      if (skill.id === "FIRE_RATE" && game.player.evolution.fireRateBoost >= 5) {
        continue;
      }
      if (currentLevel < skill.maxLevel) {
        availableSkills.push(skill);
      }
    }
    game.skillChoices = [];
    for (let i = 0; i < 3; i++) {
      if (availableSkills.length === 0) {
        break;
      }
      const randomIndex = Math.floor(Math.random() * availableSkills.length);
      game.skillChoices.push(availableSkills.splice(randomIndex, 1)[0]);
    }
    if (game.skillChoices.length === 0) {
      game.isPaused = false;
      game.isChoosingSkill = false;
      return;
    }
    game.ui.showSkillModal(game.skillChoices, game.skillCountdown);
    Laya.timer.clear(game, game.onSkillCountdownTick);
    Laya.timer.loop(1e3, game, game.onSkillCountdownTick);
  }
  function tickSkillCountdown(game) {
    game.skillCountdown--;
    game.ui.updateSkillCountdown(game.skillCountdown);
    if (game.skillCountdown <= 0 && game.skillChoices.length > 0) {
      const randomSkill = game.skillChoices[Math.floor(Math.random() * game.skillChoices.length)];
      selectSkill(game, randomSkill.id);
    }
  }
  function selectSkill(game, skillId) {
    if (!game.isChoosingSkill) {
      return;
    }
    if (skillId === "BULLET_SPLIT") {
      game.player.evolution.bulletCount++;
      game.updateEvolutionUI();
    } else if (skillId === "FIRE_RATE") {
      game.player.evolution.fireRateBoost++;
      game.updateEvolutionUI();
    } else {
      if (!game.player.skills[skillId]) {
        game.player.skills[skillId] = __spreadProps(__spreadValues({}, SKILL_TYPES[skillId]), { id: skillId, level: 1 });
        if (skillId === "AUTO_TURRET") {
          spawnTurret(game);
        }
        if (skillId === "ENERGY_SHIELD") {
          game.playerShield = true;
        }
        if (skillId === "MAX_HEALTH") {
          game.player.maxHealth += 3;
          game.player.health += 3;
          game.updateHealthUI();
        }
      } else {
        game.player.skills[skillId].level++;
        if (skillId === "AUTO_TURRET") {
          spawnTurret(game);
        }
        if (skillId === "MAX_HEALTH") {
          game.player.maxHealth += 3;
          game.player.health += 3;
          game.updateHealthUI();
        }
      }
    }
    Laya.timer.clear(game, game.onSkillCountdownTick);
    game.ui.hideSkillModal();
    game.isPaused = false;
    game.isChoosingSkill = false;
    game.skillChoices = [];
    game.updateSkillIconsUI();
  }
  function spawnTurret(game) {
    game.turrets.push({
      x: game.player.x + game.random(-100, 100),
      y: game.player.y + game.random(-100, 100),
      radius: 20,
      damage: 1,
      range: 300,
      cooldown: 1e3,
      lastShot: 0
    });
  }
  function updateMines(game, deltaTime, timestamp) {
    if (game.player.skills.LAND_MINE && timestamp - game.lastMineDrop > 3e3) {
      game.lastMineDrop = timestamp;
      game.mines.push({
        x: game.player.x,
        y: game.player.y,
        radius: 10,
        timer: 3e3,
        damage: 3 + game.player.skills.LAND_MINE.level * 2,
        range: 60 + game.player.skills.LAND_MINE.level * 20,
        color: "#FF5722"
      });
    }
    for (let i = game.mines.length - 1; i >= 0; i--) {
      const mine = game.mines[i];
      mine.timer -= deltaTime;
      if (mine.timer > 0) {
        continue;
      }
      game.pushExplosion({
        x: mine.x,
        y: mine.y,
        radius: 0,
        maxRadius: mine.range,
        alpha: 1,
        growth: 7,
        fade: 0.05,
        color: "255,100,0",
        ring: false
      });
      for (let j = game.enemies.length - 1; j >= 0; j--) {
        const enemy = game.enemies[j];
        const hitRadius = mine.range + enemy.radius;
        if (game.getDistanceSq(mine.x, mine.y, enemy.x, enemy.y) < hitRadius * hitRadius) {
          enemy.health -= mine.damage;
          if (enemy.health <= 0 && !enemy.isBoss) {
            game.killEnemy(enemy);
          }
        }
      }
      game.mines.splice(i, 1);
    }
  }
  function updateSkillEffects(game, deltaTime, timestamp) {
    const skills = game.player.skills;
    if (skills.AUTO_TURRET) {
      game.turrets.forEach((turret) => {
        let target = null;
        let minDistSq = turret.range * turret.range;
        game.enemies.forEach((enemy) => {
          const distSq = game.getDistanceSq(turret.x, turret.y, enemy.x, enemy.y);
          if (distSq < minDistSq) {
            minDistSq = distSq;
            target = enemy;
          }
        });
        if (target && timestamp - turret.lastShot > 1e3) {
          turret.lastShot = timestamp;
          const angle = Math.atan2(target.y - turret.y, target.x - turret.x);
          game.bullets.push({
            x: turret.x,
            y: turret.y,
            vx: Math.cos(angle) * 8,
            vy: Math.sin(angle) * 8,
            angle,
            radius: 4,
            color: "#4CAF50",
            damage: 1,
            pierceLeft: 0
          });
        }
      });
    }
    if (skills.THORN_AURA) {
      const range = 100 + (skills.THORN_AURA.level - 1) * 20;
      const damage = 0.5 * skills.THORN_AURA.level * (deltaTime / 1e3);
      game.enemies.forEach((enemy) => {
        const hitRadius = range + enemy.radius;
        if (game.getDistanceSq(game.player.x, game.player.y, enemy.x, enemy.y) < hitRadius * hitRadius) {
          enemy.health -= damage;
          if (enemy.health <= 0 && !enemy.isBoss) {
            game.killEnemy(enemy);
          }
        }
      });
    }
    if (skills.ENERGY_SHIELD && !game.playerShield) {
      game.shieldCooldown -= deltaTime;
      if (game.shieldCooldown <= 0) {
        game.playerShield = true;
        game.showFloatText("护盾恢复!", game.player.x, game.player.y, "#00E5FF");
      }
    }
  }
  function updateExpOrbs(game) {
    let magnetRange = 100;
    if (game.player.skills.MAGNETIC_FIELD) {
      magnetRange *= 1 + game.player.skills.MAGNETIC_FIELD.level * 0.5;
    }
    for (let i = game.expOrbs.length - 1; i >= 0; i--) {
      const orb = game.expOrbs[i];
      const dist = game.getDistance(orb.x, orb.y, game.player.x, game.player.y);
      if (dist < magnetRange && dist > 0) {
        const dx = game.player.x - orb.x;
        const dy = game.player.y - orb.y;
        orb.x += dx / dist * orb.speed * 3;
        orb.y += dy / dist * orb.speed * 3;
      }
      if (dist < game.player.radius + orb.radius) {
        game.playerExp += orb.amount;
        game.expOrbs.splice(i, 1);
        checkLevelUp(game);
      }
    }
  }

  // src/game/ShootGame.ts
  var ShootGame = class {
    constructor(stage) {
      this.keys = {};
      this.mouse = { x: WORLD_WIDTH / 2, y: WORLD_HEIGHT / 2, left: false };
      this.maxSimStepsPerFrame = 3;
      this.gameState = "START";
      this.currentLevel = 1;
      this.levelProgress = 0;
      this.kills = 0;
      this.score = 0;
      this.stamina = 5;
      this.coins = 0;
      this.lastStaminaClaimDate = "";
      this.canRevive = true;
      this.pendingCoins = 0;
      this.gameOverRewardSettled = false;
      this.isPaused = false;
      this.isBossActive = false;
      this.levelComplete = false;
      this.waitingForBoss = false;
      this.playerExp = 0;
      this.playerLevel = 1;
      this.expToNextLevel = 10;
      this.isChoosingSkill = false;
      this.skillChoices = [];
      this.skillCountdown = 0;
      this.bullets = [];
      this.enemyBullets = [];
      this.enemies = [];
      this.drops = [];
      this.expOrbs = [];
      this.turrets = [];
      this.mines = [];
      this.explosions = [];
      this.bossBombs = [];
      this.lastFrameTime = 0;
      this.lastEnemySpawn = 0;
      this.lastHordeSpawn = 0;
      this.lastShotTime = 0;
      this.lastMineDrop = 0;
      this.accumulator = 0;
      this.avgFrameTime = FRAME_TIME;
      this.lowPerformanceMode = false;
      this.severePerformanceMode = false;
      this.renderSkipCounter = 0;
      this.simTick = 0;
      this.levelTransitionAt = 0;
      this.lastBackgroundRenderTime = 0;
      this.healthDropsThisLevel = 0;
      this.cameraX = 0;
      this.cameraY = 0;
      this.touchMoveActive = false;
      this.joystickVector = { x: 0, y: 0 };
      this.playerMoveVX = 0;
      this.playerMoveVY = 0;
      this.playerShield = false;
      this.shieldCooldown = 0;
      this.resourceStorageKey = "shootgame_v4_resources";
      this.player = {
        x: WORLD_WIDTH / 2,
        y: WORLD_HEIGHT / 2,
        radius: 15,
        baseSpeed: 3,
        color: "#4CAF50",
        maxHealth: 10,
        health: 10,
        invincible: 0,
        evolution: { bulletCount: 1, fireRateBoost: 0 },
        baseFireRate: 200,
        skills: {},
        skillCooldowns: {}
      };
      this.onKeyDown = (e) => {
        this.keys[e.key.toLowerCase()] = true;
      };
      this.onKeyUp = (e) => {
        this.keys[e.key.toLowerCase()] = false;
      };
      this.stage = stage;
      this.background = new Laya.Sprite();
      this.background.pos(0, 0);
      stage.addChild(this.background);
      this.entityLayer = new Laya.Sprite();
      this.entityLayer.pos(0, 0);
      stage.addChild(this.entityLayer);
      this.world = new Laya.Sprite();
      this.world.pos(0, 0);
      stage.addChild(this.world);
      this.isTouchDevice = this.detectTouchDevice();
      this.stars = this.createStarField();
      this.ui = new GameUI(stage);
      this.loadResourceState();
      this.ui.bindStart(() => this.startGame());
      this.ui.bindSkillPick((skillId) => this.selectSkill(skillId));
      this.ui.bindPause(() => this.pauseGame());
      this.ui.bindResume(() => this.resumeGame());
      this.ui.bindBackHome(() => this.returnToMainMenu());
      this.ui.updateHealth(this.player.health, this.player.maxHealth);
      this.ui.updateExp(this.playerLevel, this.playerExp, this.expToNextLevel);
      this.ui.updateEvolution(this.player.evolution.bulletCount, this.player.evolution.fireRateBoost);
      this.ui.updateScore(this.score);
      this.ui.updateResources(this.stamina, this.coins);
      this.ui.updateLevel("第1关");
      this.initTouchJoystick();
      this.bindInput();
      this.render(0);
      Laya.timer.frameLoop(1, this, this.gameLoop);
    }
    bindInput() {
      Laya.Browser.window.addEventListener("keydown", this.onKeyDown);
      Laya.Browser.window.addEventListener("keyup", this.onKeyUp);
      this.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
      this.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
      this.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
      this.stage.on(Laya.Event.RIGHT_MOUSE_DOWN, this, () => false);
    }
    onMouseMove(event) {
      if (this.isTouchDevice && this.touchMoveActive) {
        this.updateTouchMove(event.stageX, event.stageY);
        return;
      }
      if (this.gameState === "PLAYING") {
        this.mouse.x = event.stageX + this.cameraX;
        this.mouse.y = event.stageY + this.cameraY;
      } else {
        this.mouse.x = event.stageX;
        this.mouse.y = event.stageY;
      }
    }
    onMouseDown(event) {
      if (this.isTouchDevice) {
        if (this.gameState === "GAME_OVER") {
          this.handleGameOverClick(event.stageX, event.stageY);
          return;
        }
        if (this.gameState === "PLAYING" && event.stageY > CANVAS_HEIGHT * 0.35) {
          this.beginTouchMove(event.stageX, event.stageY);
        }
        return;
      }
      if (event.button !== 0) {
        return;
      }
      if (this.gameState === "PLAYING") {
        this.mouse.x = event.stageX + this.cameraX;
        this.mouse.y = event.stageY + this.cameraY;
        this.mouse.left = true;
      }
      if (this.gameState !== "GAME_OVER") {
        return;
      }
      this.handleGameOverClick(event.stageX, event.stageY);
    }
    onMouseUp(event) {
      if (this.isTouchDevice) {
        this.endTouchMove();
        return;
      }
      if (event.button === 0) {
        this.mouse.left = false;
      }
    }
    handleGameOverClick(x, y) {
      const reviveX = CANVAS_WIDTH / 2 - 220;
      const restartX = CANVAS_WIDTH / 2 + 20;
      const btnY = CANVAS_HEIGHT / 2 + 54;
      const btnW = 200;
      const btnH = 64;
      const slop = this.isTouchDevice ? 16 : 10;
      const reviveLeft = reviveX - slop;
      const reviveRight = reviveX + btnW + slop;
      const restartLeft = restartX - slop;
      const restartRight = restartX + btnW + slop;
      const top = btnY - slop;
      const bottom = btnY + btnH + slop;
      if (this.canRevive && x >= reviveLeft && x <= reviveRight && y >= top && y <= bottom) {
        this.reviveFromGameOver();
        return;
      }
      if (x >= restartLeft && x <= restartRight && y >= top && y <= bottom) {
        this.restartFromGameOver();
      }
    }
    pauseGame() {
      if (this.gameState !== "PLAYING" || this.isPaused) {
        return;
      }
      this.isPaused = true;
      this.ui.showPauseModal(true);
      this.ui.setPauseButtonVisible(false);
    }
    resumeGame() {
      if (this.gameState !== "PLAYING") {
        return;
      }
      this.isPaused = false;
      this.ui.showPauseModal(false);
      this.ui.setPauseButtonVisible(true);
    }
    returnToMainMenu() {
      this.isPaused = false;
      this.mouse.left = false;
      this.ui.showPauseModal(false);
      this.ui.setPauseButtonVisible(false);
      this.setTouchJoystickVisible(false);
      clearEntitySprites();
      this.background.removeChildren();
      this.world.graphics.clear();
      this.entityLayer.pos(0, 0);
      this.world.pos(0, 0);
      this.cameraX = 0;
      this.cameraY = 0;
      this.gameState = "START";
      this.ui.showStart(true);
      this.refreshResourceUI();
    }
    settleGameOverRewards() {
      if (this.gameOverRewardSettled) {
        return;
      }
      const coins = Math.max(0, this.pendingCoins);
      this.gameOverRewardSettled = true;
      if (coins > 0) {
        this.addCoins(coins);
        this.showLevelNotice(`获得金币 +${coins}`, 1600);
      }
    }
    reviveFromGameOver() {
      if (!this.canRevive || this.gameState !== "GAME_OVER") {
        return;
      }
      this.canRevive = false;
      this.gameState = "PLAYING";
      this.isPaused = false;
      this.pendingCoins = 0;
      this.gameOverRewardSettled = false;
      this.player.health = Math.max(1, Math.ceil(this.player.maxHealth * 0.5));
      this.player.invincible = 120;
      this.mouse.left = false;
      this.updateHealthUI();
      this.ui.setPauseButtonVisible(true);
      this.showLevelNotice("复活成功！", 1200);
    }
    restartFromGameOver() {
      if (this.gameState !== "GAME_OVER") {
        return;
      }
      this.settleGameOverRewards();
      if (!this.consumeStamina(1)) {
        this.showLevelNotice("体力不足，返回主页面", 1500);
        this.returnToMainMenu();
        return;
      }
      this.resetGame();
      this.lastFrameTime = Laya.timer.currTimer;
      this.mouse.x = this.player.x;
      this.mouse.y = this.player.y;
      this.ui.showStart(false);
      this.ui.setPauseButtonVisible(true);
    }
    startGame() {
      if (!this.consumeStamina(1)) {
        this.showLevelNotice("体力不足，明天再来或等待恢复", 1800);
        this.ui.showStart(true);
        return;
      }
      this.resetGame();
      this.lastFrameTime = Laya.timer.currTimer;
      this.mouse.x = this.player.x;
      this.mouse.y = this.player.y;
      this.ui.showStart(false);
      this.ui.showPauseModal(false);
      this.ui.setPauseButtonVisible(true);
      this.setTouchJoystickVisible(this.isTouchDevice);
    }
    getDistance(x1, y1, x2, y2) {
      return Math.sqrt(__pow(x2 - x1, 2) + __pow(y2 - y1, 2));
    }
    getDistanceSq(x1, y1, x2, y2) {
      return __pow(x2 - x1, 2) + __pow(y2 - y1, 2);
    }
    random(min, max) {
      return Math.random() * (max - min) + min;
    }
    clamp(v, min, max) {
      return Math.max(min, Math.min(max, v));
    }
    getTodayKey() {
      const now = /* @__PURE__ */ new Date();
      const y = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const m = month < 10 ? `0${month}` : `${month}`;
      const d = day < 10 ? `0${day}` : `${day}`;
      return `${y}-${m}-${d}`;
    }
    loadResourceState() {
      try {
        const raw = Laya.Browser.window.localStorage.getItem(this.resourceStorageKey);
        if (raw) {
          const data = JSON.parse(raw);
          this.stamina = Math.max(0, Math.min(5, Number(data.stamina) || 0));
          this.coins = Math.max(0, Math.floor(Number(data.coins) || 0));
          this.lastStaminaClaimDate = typeof data.lastStaminaClaimDate === "string" ? data.lastStaminaClaimDate : "";
        }
      } catch (_e) {
        this.stamina = 5;
        this.coins = 0;
        this.lastStaminaClaimDate = "";
      }
      const today = this.getTodayKey();
      if (this.lastStaminaClaimDate !== today) {
        this.stamina = Math.min(5, this.stamina + 5);
        this.lastStaminaClaimDate = today;
      }
      this.saveResourceState();
    }
    saveResourceState() {
      const data = {
        stamina: this.stamina,
        coins: this.coins,
        lastStaminaClaimDate: this.lastStaminaClaimDate
      };
      try {
        Laya.Browser.window.localStorage.setItem(this.resourceStorageKey, JSON.stringify(data));
      } catch (_e) {
      }
    }
    refreshResourceUI() {
      this.ui.updateResources(this.stamina, this.coins);
    }
    consumeStamina(amount = 1) {
      if (this.stamina < amount) {
        return false;
      }
      this.stamina -= amount;
      this.saveResourceState();
      this.refreshResourceUI();
      return true;
    }
    addCoins(amount) {
      if (amount <= 0) {
        return;
      }
      this.coins += Math.floor(amount);
      this.saveResourceState();
      this.refreshResourceUI();
    }
    vibrateIfSupported(pattern) {
      const nav = Laya.Browser.window.navigator;
      if (!nav || typeof nav.vibrate !== "function") {
        return;
      }
      try {
        nav.vibrate(pattern);
      } catch (_e) {
      }
    }
    pushExplosion(exp) {
      const explosionLimit = this.severePerformanceMode ? 20 : this.lowPerformanceMode ? 38 : MAX_EXPLOSIONS;
      if (this.explosions.length >= explosionLimit) {
        return;
      }
      this.explosions.push(exp);
      if (this.explosions.length > MAX_EXPLOSIONS) {
        this.explosions.splice(0, this.explosions.length - MAX_EXPLOSIONS);
      }
    }
    pushEnemyBullet(bullet) {
      if (this.enemyBullets.length >= MAX_ENEMY_BULLETS) {
        return;
      }
      this.enemyBullets.push(bullet);
    }
    showFloatText(text, x, y, color = "#FFFFFF") {
      this.ui.showFloatText({ text, x, y, color });
    }
    showLevelNotice(text, duration = 3e3) {
      this.ui.showLevelNotice(text, duration);
    }
    shoot(timestamp) {
      shootPlayer(this, timestamp);
    }
    updateEvolutionUI() {
      this.ui.updateEvolution(this.player.evolution.bulletCount, this.player.evolution.fireRateBoost);
    }
    gainExp(amount, x, y) {
      gainExperience(this, amount, x, y);
    }
    checkLevelUp() {
      checkLevelUp(this);
    }
    triggerSkillSelection() {
      triggerSkillSelection(this);
    }
    onSkillCountdownTick() {
      tickSkillCountdown(this);
    }
    selectSkill(skillId) {
      selectSkill(this, skillId);
    }
    spawnTurret() {
      spawnTurret(this);
    }
    updateMines(deltaTime, timestamp) {
      updateMines(this, deltaTime, timestamp);
    }
    updateSkills(deltaTime, timestamp) {
      updateSkillEffects(this, deltaTime, timestamp);
    }
    updateExpOrbs() {
      updateExpOrbs(this);
    }
    updateDrops(deltaTime) {
      for (let i = this.drops.length - 1; i >= 0; i--) {
        const drop = this.drops[i];
        if (drop.life === void 0) {
          continue;
        }
        drop.life -= deltaTime;
        if (drop.life <= 0) {
          this.drops.splice(i, 1);
        }
      }
    }
    updateExplosions(deltaTime) {
      const stepScale = deltaTime / FRAME_TIME;
      for (let i = this.explosions.length - 1; i >= 0; i--) {
        const exp = this.explosions[i];
        exp.radius += (exp.growth || 5) * stepScale;
        exp.alpha -= (exp.fade || 0.05) * stepScale;
        if (exp.alpha <= 0 || exp.radius >= (exp.maxRadius || 9999)) {
          this.explosions.splice(i, 1);
        }
      }
    }
    updateExpUI() {
      this.ui.updateExp(this.playerLevel, this.playerExp, this.expToNextLevel);
    }
    updateSkillIconsUI() {
      this.ui.updateSkillIcons(this.player.skills, this.playerShield);
    }
    spawnEnemy(timestamp) {
      spawnEnemy(this, timestamp);
    }
    updateEnemies(_deltaTime, timestamp) {
      updateEnemies(this, timestamp);
    }
    killEnemy(enemy) {
      killEnemy(this, enemy);
    }
    spawnBoss() {
      spawnBoss(this);
    }
    updateBossSkills(boss, timestamp) {
      updateBossSkills(this, boss, timestamp);
    }
    resolveStompImpact(boss) {
      resolveStompImpact(this, boss);
    }
    updateBossBombs(deltaTime) {
      updateBossBombs(this, deltaTime);
    }
    updateBossStates(deltaTime, timestamp) {
      updateBossStates(this, deltaTime, timestamp);
    }
    enterNextLevel() {
      enterNextLevel(this);
    }
    damagePlayer(amount) {
      const before = this.gameState;
      const beforeHp = this.player.health;
      const beforeShield = this.playerShield;
      damagePlayer(this, amount);
      const hpLoss = beforeHp - this.player.health;
      const shieldBroken = beforeShield && !this.playerShield;
      if (shieldBroken) {
        this.vibrateIfSupported([8, 24, 8]);
      } else if (hpLoss > 0) {
        const vibrationMs = this.gameState === "GAME_OVER" ? 34 : Math.min(28, 14 + Math.ceil(hpLoss * 4));
        this.vibrateIfSupported(vibrationMs);
      }
      if (before !== "GAME_OVER" && this.gameState === "GAME_OVER") {
        this.pendingCoins = Math.floor(this.score / 10);
        this.gameOverRewardSettled = false;
        this.ui.setPauseButtonVisible(false);
        this.ui.showPauseModal(false);
        this.setTouchJoystickVisible(false);
      }
    }
    updateHealthUI() {
      this.ui.updateHealth(this.player.health, this.player.maxHealth);
    }
    updateBullets(deltaTime) {
      updateBulletState(this, deltaTime);
    }
    checkCollisions(timestamp) {
      checkCollisions(this, timestamp);
    }
    updatePlayer(_deltaTime, timestamp) {
      updatePlayerMovement(this, timestamp);
    }
    render(deltaTime) {
      renderEntitySprites(this);
      renderWorld(this, deltaTime);
    }
    updateCamera() {
      if (this.gameState !== "PLAYING") {
        this.cameraX = 0;
        this.cameraY = 0;
        this.entityLayer.pos(0, 0);
        this.world.pos(0, 0);
        return;
      }
      const maxCamX = Math.max(0, WORLD_WIDTH - CANVAS_WIDTH);
      const maxCamY = Math.max(0, WORLD_HEIGHT - CANVAS_HEIGHT);
      this.cameraX = this.clamp(this.player.x - CANVAS_WIDTH * 0.5, 0, maxCamX);
      this.cameraY = this.clamp(this.player.y - CANVAS_HEIGHT * 0.5, 0, maxCamY);
      this.entityLayer.pos(-this.cameraX, -this.cameraY);
      this.world.pos(-this.cameraX, -this.cameraY);
    }
    resetGame() {
      resetGameState(this);
      this.canRevive = true;
      this.pendingCoins = 0;
      this.gameOverRewardSettled = false;
      this.isPaused = false;
      this.lastBackgroundRenderTime = 0;
      this.background.graphics.clear();
      clearEntitySprites();
      this.endTouchMove();
      this.ui.showPauseModal(false);
      this.ui.showStart(false);
      this.setTouchJoystickVisible(this.isTouchDevice && this.gameState === "PLAYING");
    }
    gameLoop() {
      if (this.gameState === "START") {
        return;
      }
      const timestamp = Laya.timer.currTimer;
      const frameTime = this.lastFrameTime > 0 ? timestamp - this.lastFrameTime : FRAME_TIME;
      this.lastFrameTime = timestamp;
      const deltaTime = Math.min(frameTime, 1e3);
      this.avgFrameTime = this.avgFrameTime * 0.92 + deltaTime * 0.08;
      if (!this.lowPerformanceMode && this.avgFrameTime > 20) {
        this.lowPerformanceMode = true;
      } else if (this.lowPerformanceMode && this.avgFrameTime < 16) {
        this.lowPerformanceMode = false;
      }
      if (!this.severePerformanceMode && this.avgFrameTime > 30) {
        this.severePerformanceMode = true;
      } else if (this.severePerformanceMode && this.avgFrameTime < 24) {
        this.severePerformanceMode = false;
      }
      this.accumulator += deltaTime;
      const maxAccumulator = FRAME_TIME * this.maxSimStepsPerFrame;
      if (this.accumulator > maxAccumulator) {
        this.accumulator = maxAccumulator;
      }
      let simSteps = 0;
      while (this.accumulator >= FRAME_TIME && simSteps < this.maxSimStepsPerFrame) {
        if (!this.isPaused && this.gameState === "PLAYING") {
          this.updatePlayer(FRAME_TIME, timestamp);
          this.spawnEnemy(timestamp);
          this.updateEnemies(FRAME_TIME, timestamp);
          for (let i = 0; i < this.enemies.length; i++) {
            const enemy = this.enemies[i];
            if (enemy.isBoss) {
              this.updateBossSkills(enemy, timestamp);
            }
          }
          this.updateBossStates(FRAME_TIME, timestamp);
          this.updateBossBombs(FRAME_TIME);
          this.updateSkills(FRAME_TIME, timestamp);
          this.updateMines(FRAME_TIME, timestamp);
          if (!this.severePerformanceMode || (this.simTick & 1) === 0) {
            this.updateExpOrbs();
          }
          this.updateDrops(FRAME_TIME);
          this.updateBullets(FRAME_TIME);
          if (!this.severePerformanceMode || (this.simTick & 1) === 0) {
            this.checkCollisions(timestamp);
          }
          this.updateExplosions(FRAME_TIME);
        }
        this.accumulator -= FRAME_TIME;
        this.simTick++;
        simSteps++;
      }
      if (this.levelComplete && this.gameState === "PLAYING" && !this.isChoosingSkill && this.levelTransitionAt > 0 && timestamp >= this.levelTransitionAt) {
        this.levelTransitionAt = 0;
        this.enterNextLevel();
      }
      this.updateCamera();
      if (!this.severePerformanceMode) {
        this.render(deltaTime);
      } else {
        this.renderSkipCounter = (this.renderSkipCounter + 1) % 2;
        if (this.renderSkipCounter === 0) {
          this.render(deltaTime);
        }
      }
    }
    detectTouchDevice() {
      const nav = Laya.Browser.window.navigator;
      return "ontouchstart" in Laya.Browser.window || nav && nav.maxTouchPoints > 0;
    }
    createStarField() {
      const stars = [];
      for (let i = 0; i < 150; i++) {
        stars.push({
          x: Math.random() * CANVAS_WIDTH,
          y: Math.random() * CANVAS_HEIGHT,
          size: Math.random() * 1.8 + 0.8,
          twinkle: Math.random() * Math.PI * 2,
          speed: 0.01 + Math.random() * 0.03
        });
      }
      return stars;
    }
    initTouchJoystick() {
      if (!this.isTouchDevice) {
        return;
      }
      const base = new Laya.Sprite();
      base.graphics.drawCircle(0, 0, 58, "rgba(255,255,255,0.12)", "#8FB3FF", 2);
      base.pos(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 130);
      base.visible = false;
      this.stage.addChild(base);
      const stick = new Laya.Sprite();
      stick.graphics.drawCircle(0, 0, 26, "rgba(173,216,255,0.8)", "#E3F2FD", 2);
      stick.pos(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 130);
      stick.visible = false;
      this.stage.addChild(stick);
      this.joystickBase = base;
      this.joystickStick = stick;
    }
    setTouchJoystickVisible(visible) {
      if (!this.joystickBase || !this.joystickStick) {
        return;
      }
      this.joystickBase.visible = visible;
      this.joystickStick.visible = visible;
    }
    beginTouchMove(x, y) {
      this.touchMoveActive = true;
      if (this.joystickBase && this.joystickStick) {
        const bx = this.clamp(x, CANVAS_WIDTH * 0.2, CANVAS_WIDTH * 0.8);
        const by = this.clamp(y, CANVAS_HEIGHT * 0.55, CANVAS_HEIGHT - 70);
        this.joystickBase.pos(bx, by);
        this.joystickStick.pos(bx, by);
      }
      this.updateTouchMove(x, y);
    }
    updateTouchMove(x, y) {
      if (!this.joystickBase || !this.joystickStick) {
        return;
      }
      const maxRadius = 52;
      const dx = x - this.joystickBase.x;
      const dy = y - this.joystickBase.y;
      const len = Math.sqrt(dx * dx + dy * dy);
      let nx = dx;
      let ny = dy;
      if (len > maxRadius && len > 0) {
        nx = dx / len * maxRadius;
        ny = dy / len * maxRadius;
      }
      this.joystickStick.pos(this.joystickBase.x + nx, this.joystickBase.y + ny);
      this.joystickVector.x = nx / maxRadius;
      this.joystickVector.y = ny / maxRadius;
    }
    endTouchMove() {
      this.touchMoveActive = false;
      this.joystickVector.x = 0;
      this.joystickVector.y = 0;
      if (this.joystickBase && this.joystickStick) {
        this.joystickStick.pos(this.joystickBase.x, this.joystickBase.y);
      }
    }
  };
  function bootstrapShootGame() {
    const stage = Laya.stage;
    const nav = Laya.Browser.window.navigator;
    const isTouchDevice = "ontouchstart" in Laya.Browser.window || nav && nav.maxTouchPoints > 0;
    if (isTouchDevice) {
      setCanvasSize(MOBILE_CANVAS.width, MOBILE_CANVAS.height);
    } else {
      setCanvasSize(DESKTOP_CANVAS.width, DESKTOP_CANVAS.height);
    }
    stage.width = CANVAS_WIDTH;
    stage.height = CANVAS_HEIGHT;
    stage.scaleMode = "fixedauto";
    stage.bgColor = "#1A1A1A";
    stage.screenMode = isTouchDevice ? "vertical" : "none";
    return new ShootGame(stage);
  }

  // src/Main.ts
  var { regClass, property } = Laya;
  var Main = class extends Laya.Script {
    onStart() {
      bootstrapShootGame();
    }
  };
  Main = __decorateClass([
    regClass("mlAnoj_RSnGAE0kTsECM-w")
  ], Main);
})();
