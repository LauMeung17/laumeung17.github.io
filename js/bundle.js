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
  var CANVAS_WIDTH = 1200;
  var CANVAS_HEIGHT = 800;
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
      const topPanel = this.createTopPanel();
      this.levelInfo = topPanel.levelInfo;
      this.killsInfo = topPanel.killsInfo;
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
    createStartScreen() {
      const panel = new Laya.Sprite();
      panel.graphics.drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, "#101010");
      const title = new Laya.Label("地狱突围 - 重装版");
      title.fontSize = 56;
      title.bold = true;
      title.color = "#FFD700";
      title.width = CANVAS_WIDTH;
      title.align = "center";
      title.y = 180;
      panel.addChild(title);
      const btn = this.createButton("开始游戏", 260, 70, "#4CAF50");
      btn.pos(CANVAS_WIDTH / 2 - 130, 330);
      btn.on(Laya.Event.CLICK, this, () => {
        var _a;
        this.startScreen.visible = false;
        (_a = this.startHandler) == null ? void 0 : _a.call(this);
      });
      panel.addChild(btn);
      const hint = new Laya.Label("WASD: 移动\n鼠标左键: 射击");
      hint.fontSize = 24;
      hint.color = "#CCCCCC";
      hint.leading = 12;
      hint.width = CANVAS_WIDTH;
      hint.align = "center";
      hint.y = 450;
      panel.addChild(hint);
      return panel;
    }
    createTopPanel() {
      const left = new Laya.Sprite();
      left.pos(16, 12);
      this.root.addChild(left);
      const levelInfo = new Laya.Label("第1关");
      levelInfo.name = "levelInfo";
      levelInfo.fontSize = 26;
      levelInfo.bold = true;
      levelInfo.color = "#FFD700";
      left.addChild(levelInfo);
      const killsInfo = new Laya.Label("击杀数: 0 / 目标: 30");
      killsInfo.name = "killsInfo";
      killsInfo.fontSize = 20;
      killsInfo.color = "#FFFFFF";
      killsInfo.y = 40;
      left.addChild(killsInfo);
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
      healthText.align = "center";
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
      return { levelInfo, killsInfo, healthText, expText, healthBarFill, expBarFill };
    }
    createEvolutionPanel() {
      const panel = new Laya.Sprite();
      panel.graphics.drawRect(0, 0, 340, 80, "rgba(0,0,0,0.65)");
      panel.pos(CANVAS_WIDTH / 2 - 170, CANVAS_HEIGHT - 100);
      this.root.addChild(panel);
      const bulletsLabel = new Laya.Label("弹幕数量");
      bulletsLabel.fontSize = 16;
      bulletsLabel.color = "#AAAAAA";
      bulletsLabel.pos(45, 14);
      panel.addChild(bulletsLabel);
      const evoBullets = new Laya.Label("1 / 5");
      evoBullets.fontSize = 24;
      evoBullets.bold = true;
      evoBullets.color = "#FFD700";
      evoBullets.pos(45, 40);
      panel.addChild(evoBullets);
      const speedLabel = new Laya.Label("射速加成");
      speedLabel.fontSize = 16;
      speedLabel.color = "#AAAAAA";
      speedLabel.pos(205, 14);
      panel.addChild(speedLabel);
      const evoSpeed = new Laya.Label("0%");
      evoSpeed.fontSize = 24;
      evoSpeed.bold = true;
      evoSpeed.color = "#FFD700";
      evoSpeed.pos(205, 40);
      panel.addChild(evoSpeed);
      return { evoBullets, evoSpeed };
    }
    createSkillModal() {
      const modal = new Laya.Sprite();
      modal.graphics.drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, "rgba(0,0,0,0.85)");
      modal.visible = false;
      const title = new Laya.Label("升级！选择一个技能");
      title.fontSize = 36;
      title.bold = true;
      title.color = "#FFD700";
      title.width = CANVAS_WIDTH;
      title.align = "center";
      title.y = 130;
      modal.addChild(title);
      const countdown = new Laya.Label("10秒后自动随机选择");
      countdown.name = "skillCountdown";
      countdown.fontSize = 24;
      countdown.color = "#FFFFFF";
      countdown.width = CANVAS_WIDTH;
      countdown.align = "center";
      countdown.y = 190;
      modal.addChild(countdown);
      const cardsWrap = new Laya.Sprite();
      cardsWrap.name = "skillCardsWrap";
      cardsWrap.pos(CANVAS_WIDTH / 2, 300);
      modal.addChild(cardsWrap);
      return { modal, skillCardsWrap: cardsWrap, skillCountdown: countdown };
    }
    createButton(text, width, height, color) {
      const button = new Laya.Sprite();
      button.graphics.drawRect(0, 0, width, height, color);
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
      button.addChild(label);
      return button;
    }
    bindStart(handler) {
      this.startHandler = handler;
    }
    bindSkillPick(handler) {
      this.skillPickHandler = handler;
    }
    showStart(show) {
      this.startScreen.visible = show;
    }
    updateKills(kills, target) {
      this.killsInfo.text = `击杀数: ${kills} / 目标: ${target}`;
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
  function checkCollisions(game, timestamp) {
    for (let i = game.bullets.length - 1; i >= 0; i--) {
      const bullet = game.bullets[i];
      for (let j = game.enemies.length - 1; j >= 0; j--) {
        const enemy = game.enemies[j];
        const hitRadius = bullet.radius + enemy.radius;
        if (game.getDistanceSq(bullet.x, bullet.y, enemy.x, enemy.y) >= hitRadius * hitRadius) {
          continue;
        }
        enemy.health -= bullet.damage;
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
        if (enemy.health <= 0) {
          if (enemy.isBoss) {
            game.enemies.splice(j, 1);
            game.isBossActive = false;
            game.levelComplete = true;
            game.levelTransitionAt = Math.max(game.levelTransitionAt, timestamp + 3e3);
            game.pushExplosion({ x: enemy.x, y: enemy.y, radius: 10, maxRadius: 130, alpha: 1, growth: 10, fade: 0.04, color: "255,180,80", ring: true, lineWidth: 4 });
            game.pushExplosion({ x: enemy.x, y: enemy.y, radius: 20, maxRadius: 180, alpha: 0.8, growth: 13, fade: 0.045, color: "255,120,40", ring: false });
            game.showLevelNotice("BOSS击破！奖励技能选择");
            game.triggerSkillSelection();
          } else {
            game.pushExplosion({ x: enemy.x, y: enemy.y, radius: 6, maxRadius: 48, alpha: 1, growth: 8, fade: 0.06, color: enemy.isHorde ? "255,90,90" : "255,180,120", ring: false });
            game.pushExplosion({ x: enemy.x, y: enemy.y, radius: 0, maxRadius: 64, alpha: 0.7, growth: 7, fade: 0.05, color: enemy.isHorde ? "255,150,150" : "255,230,180", ring: true, lineWidth: 2 });
            game.killEnemy(enemy);
          }
        }
        if (bullet.pierceLeft > 0) {
          bullet.pierceLeft--;
        } else {
          game.bullets.splice(i, 1);
        }
        break;
      }
    }
    if (game.player.invincible <= 0) {
      for (let i = game.enemyBullets.length - 1; i >= 0; i--) {
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
  }

  // src/game/systems/enemySystem.ts
  function spawnEnemy(game, timestamp) {
    if (game.isBossActive || game.levelComplete || game.waitingForBoss || game.enemies.length >= LEVEL_CONFIG[game.currentLevel].maxEnemyCount) {
      return;
    }
    if (timestamp - game.lastHordeSpawn > Math.max(6e3, 14e3 - game.currentLevel * 180) && game.enemies.length <= Math.floor(LEVEL_CONFIG[game.currentLevel].maxEnemyCount * 0.6) && Math.random() < 0.18) {
      const hordeCount = 12 + Math.floor(Math.random() * 6);
      const side2 = Math.floor(Math.random() * 4);
      for (let i = 0; i < hordeCount; i++) {
        const edgeOffset = i * 16 + Math.random() * 20;
        let x2 = 0;
        let y2 = 0;
        switch (side2) {
          case 0:
            x2 = CANVAS_WIDTH / (hordeCount + 1) * (i + 1) + game.random(-16, 16);
            y2 = -40 - edgeOffset;
            break;
          case 1:
            x2 = CANVAS_WIDTH + 40 + edgeOffset;
            y2 = CANVAS_HEIGHT / (hordeCount + 1) * (i + 1) + game.random(-16, 16);
            break;
          case 2:
            x2 = CANVAS_WIDTH / (hordeCount + 1) * (i + 1) + game.random(-16, 16);
            y2 = CANVAS_HEIGHT + 40 + edgeOffset;
            break;
          default:
            x2 = -40 - edgeOffset;
            y2 = CANVAS_HEIGHT / (hordeCount + 1) * (i + 1) + game.random(-16, 16);
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
      game.showLevelNotice("尸潮来袭！", 1500);
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
        x = Math.random() * CANVAS_WIDTH;
        y = -50;
        break;
      case 1:
        x = CANVAS_WIDTH + 50;
        y = Math.random() * CANVAS_HEIGHT;
        break;
      case 2:
        x = Math.random() * CANVAS_WIDTH;
        y = CANVAS_HEIGHT + 50;
        break;
      default:
        x = -50;
        y = Math.random() * CANVAS_HEIGHT;
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
      const dist = distSq > 0 ? Math.sqrt(distSq) : 0;
      if (enemy.isRanged) {
        if (dist > 300) {
          if (dist > 0) {
            enemy.x += dx / dist * enemy.speed;
            enemy.y += dy / dist * enemy.speed;
          }
        } else if (dist < 200) {
          if (dist > 0) {
            enemy.x -= dx / dist * enemy.speed;
            enemy.y -= dy / dist * enemy.speed;
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
      } else if (dist > 0) {
        enemy.x += dx / dist * enemy.speed;
        enemy.y += dy / dist * enemy.speed;
      }
      enemy.x = game.clamp(enemy.x, enemy.radius, CANVAS_WIDTH - enemy.radius);
      enemy.y = game.clamp(enemy.y, enemy.radius, CANVAS_HEIGHT - enemy.radius);
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
    game.levelProgress++;
    game.ui.updateKills(game.kills, LEVEL_CONFIG[game.currentLevel].killTarget);
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
      x: CANVAS_WIDTH / 2,
      y: 100
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
        for (let i = 0; i < 36; i++) {
          const bulletAngle = i * 10 * Math.PI / 180;
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
          x: game.clamp(game.player.x, boss.radius, CANVAS_WIDTH - boss.radius),
          y: game.clamp(game.player.y, boss.radius, CANVAS_HEIGHT - boss.radius)
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
            x: game.clamp(game.player.x + Math.cos(angle) * distance, 60, CANVAS_WIDTH - 60),
            y: game.clamp(game.player.y + Math.sin(angle) * distance, 60, CANVAS_HEIGHT - 60),
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
                vx: Math.cos(angle) * 1.8,
                vy: Math.sin(angle) * 1.8,
                radius: 6,
                color: "#800080",
                damage: boss.damage,
                isHoming: true,
                homingAccel: 0.08,
                maxSpeed: 3.2,
                life: 2200,
                pierceLeft: 0
              });
            }
          });
        }
        break;
      case "LAVA_POOL":
        for (let i = 0; i < 5; i++) {
          game.pushEnemyBullet({
            x: game.random(100, CANVAS_WIDTH - 100),
            y: game.random(100, CANVAS_HEIGHT - 100),
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
    game.enemies.forEach((boss) => {
      if (!boss.isBoss) {
        return;
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
        return;
      }
      if (boss.isChargeAiming) {
        boss.chargeAimTimer = (boss.chargeAimTimer || 0) - deltaTime;
        if ((boss.chargeAimTimer || 0) <= 0) {
          boss.isChargeAiming = false;
          boss.isChargeWarning = true;
          boss.chargeWarningTimer = 420;
        }
        return;
      }
      if (boss.isChargeWarning) {
        boss.chargeWarningTimer = (boss.chargeWarningTimer || 0) - deltaTime;
        if ((boss.chargeWarningTimer || 0) <= 0) {
          boss.isChargeWarning = false;
          boss.isCharging = true;
        }
        return;
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
        const maxX = CANVAS_WIDTH - boss.radius;
        const minY = boss.radius;
        const maxY = CANVAS_HEIGHT - boss.radius;
        if (boss.x <= minX || boss.x >= maxX || boss.y <= minY || boss.y >= maxY || (boss.chargeDistanceLeft || 0) <= 0) {
          boss.x = game.clamp(boss.x, minX, maxX);
          boss.y = game.clamp(boss.y, minY, maxY);
          boss.isCharging = false;
        }
      }
    });
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
    game.ui.updateKills(game.kills, LEVEL_CONFIG[game.currentLevel].killTarget);
    game.showLevelNotice(`第${game.currentLevel}关`);
  }
  function resetGameState(game) {
    game.gameState = "PLAYING";
    game.currentLevel = 1;
    game.levelProgress = 0;
    game.kills = 0;
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
    game.player.x = CANVAS_WIDTH / 2;
    game.player.y = CANVAS_HEIGHT / 2;
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
    game.ui.updateKills(0, LEVEL_CONFIG[1].killTarget);
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
    game.player.x = game.clamp(game.player.x, game.player.radius, CANVAS_WIDTH - game.player.radius);
    game.player.y = game.clamp(game.player.y, game.player.radius, CANVAS_HEIGHT - game.player.radius);
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
      if (bullet.x < 0 || bullet.x > CANVAS_WIDTH || bullet.y < 0 || bullet.y > CANVAS_HEIGHT) {
        game.bullets.splice(i, 1);
      }
    }
    for (let i = game.enemyBullets.length - 1; i >= 0; i--) {
      const bullet = game.enemyBullets[i];
      if (bullet.isHoming) {
        const homingAccel = bullet.homingAccel === void 0 ? 0.2 : bullet.homingAccel;
        const maxSpeed = bullet.maxSpeed === void 0 ? 6 : bullet.maxSpeed;
        const angle = Math.atan2(game.player.y - bullet.y, game.player.x - bullet.x);
        bullet.vx += Math.cos(angle) * homingAccel;
        bullet.vy += Math.sin(angle) * homingAccel;
        const speed = Math.sqrt(bullet.vx * bullet.vx + bullet.vy * bullet.vy);
        if (speed > maxSpeed) {
          bullet.vx = bullet.vx / speed * maxSpeed;
          bullet.vy = bullet.vy / speed * maxSpeed;
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
      if (bullet.x < -50 || bullet.x > CANVAS_WIDTH + 50 || bullet.y < -50 || bullet.y > CANVAS_HEIGHT + 50) {
        if (bullet.life === void 0) {
          game.enemyBullets.splice(i, 1);
        }
      }
    }
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
    game.enemies.forEach((boss) => {
      if (!boss.isBoss) {
        return;
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
    });
    game.bossBombs.forEach((bomb) => {
      const blinkFast = bomb.timer < 700;
      const blink = blinkFast ? Math.floor(bomb.timer / 80) % 2 === 0 : Math.floor(bomb.timer / 150) % 2 === 0;
      const fill = blink ? "rgba(255,60,60,0.9)" : "rgba(180,40,40,0.8)";
      g.drawCircle(bomb.x, bomb.y, bomb.radius, fill);
      g.drawCircle(bomb.x, bomb.y, bomb.blastRadius, null, "rgba(255,70,70,0.85)", 2);
    });
  }
  function drawSpaceBackground(game, g, timestamp) {
    g.drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, "#040510");
    for (let i = 0; i < 10; i++) {
      const alpha = 0.07 - i * 5e-3;
      g.drawCircle(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.25, 260 + i * 50, `rgba(30,60,120,${Math.max(0, alpha)})`);
    }
    for (const star of game.stars) {
      const driftY = timestamp * star.speed % CANVAS_HEIGHT;
      const y = (star.y + driftY) % CANVAS_HEIGHT;
      const twinkle = 0.45 + Math.sin(timestamp * 3e-3 + star.twinkle) * 0.35;
      g.drawCircle(star.x, y, star.size, `rgba(255,255,255,${Math.max(0.15, twinkle)})`);
    }
  }
  function drawBossBody(g, boss, timestamp) {
    const pulse = 0.85 + Math.sin(timestamp * 0.01) * 0.12;
    if (!boss.name) {
      g.drawCircle(boss.x, boss.y, boss.radius, boss.color);
      return;
    }
    if (boss.name.indexOf("狂怒") >= 0) {
      g.drawCircle(boss.x, boss.y, boss.radius, "#8B0000");
      g.drawCircle(boss.x, boss.y, boss.radius * 0.7, "#F44336");
      for (let i = 0; i < 8; i++) {
        const angle = Math.PI * 2 / 8 * i + timestamp * 1e-3;
        g.drawLine(
          boss.x + Math.cos(angle) * boss.radius * 0.8,
          boss.y + Math.sin(angle) * boss.radius * 0.8,
          boss.x + Math.cos(angle) * boss.radius * 1.25,
          boss.y + Math.sin(angle) * boss.radius * 1.25,
          "#FF8A80",
          3
        );
      }
      return;
    }
    if (boss.name.indexOf("终焉") >= 0) {
      g.drawCircle(boss.x, boss.y, boss.radius * 1.15, "rgba(20,20,20,0.92)");
      g.drawCircle(boss.x, boss.y, boss.radius * 0.62, "#5C6BC0");
      g.drawCircle(boss.x, boss.y, boss.radius * (0.9 + 0.06 * pulse), null, "rgba(200,200,255,0.6)", 3);
      drawRotatedRect(g, boss.x, boss.y, boss.radius * 1.6, boss.radius * 0.42, timestamp * 25e-4, "rgba(124,77,255,0.26)", "rgba(179,157,219,0.85)", 2);
      return;
    }
    if (boss.name.indexOf("飞天") >= 0) {
      g.drawCircle(boss.x, boss.y, boss.radius * 0.82, "#8D6E63");
      g.drawEllipse(boss.x - boss.radius * 1.3, boss.y - boss.radius * 0.5, boss.radius * 1.2, boss.radius * 0.8, "rgba(255,193,7,0.55)", "rgba(255,245,157,0.8)", 1);
      g.drawEllipse(boss.x + boss.radius * 0.1, boss.y - boss.radius * 0.5, boss.radius * 1.2, boss.radius * 0.8, "rgba(255,193,7,0.55)", "rgba(255,245,157,0.8)", 1);
      return;
    }
    if (boss.name.indexOf("弹幕") >= 0) {
      g.drawCircle(boss.x, boss.y, boss.radius, "#FF7043");
      for (let i = 0; i < 4; i++) {
        const angle = Math.PI / 2 * i + timestamp * 9e-4;
        g.drawRect(
          boss.x + Math.cos(angle) * boss.radius * 0.65 - 8,
          boss.y + Math.sin(angle) * boss.radius * 0.65 - 8,
          16,
          16,
          "#FFF176"
        );
      }
      return;
    }
    g.drawCircle(boss.x, boss.y, boss.radius, boss.color);
    g.drawCircle(boss.x, boss.y, boss.radius * (0.58 + 0.1 * pulse), "rgba(255,255,255,0.2)");
  }
  function drawFighter(game, g, timestamp) {
    const px = game.player.x;
    const py = game.player.y;
    const angle = Math.atan2(game.mouse.y - py, game.mouse.x - px);
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const noseX = px + cos * 20;
    const noseY = py + sin * 20;
    const leftWingX = px + Math.cos(angle + 2.45) * 18;
    const leftWingY = py + Math.sin(angle + 2.45) * 18;
    const rightWingX = px + Math.cos(angle - 2.45) * 18;
    const rightWingY = py + Math.sin(angle - 2.45) * 18;
    const tailX = px - cos * 16;
    const tailY = py - sin * 16;
    g.drawPoly(0, 0, [noseX, noseY, rightWingX, rightWingY, tailX, tailY, leftWingX, leftWingY], "#90CAF9", "#E3F2FD", 2);
    g.drawPoly(0, 0, [px + cos * 7, py + sin * 7, rightWingX, rightWingY, tailX, tailY, leftWingX, leftWingY], "#1E3A8A");
    if (game.playerShield) {
      g.drawCircle(px, py, game.player.radius + 7, null, "#00E5FF", 3);
    }
    const muzzleOn = Laya.timer.currTimer - game.lastShotTime < 95;
    if (muzzleOn) {
      const flameLen = 22 + Math.sin(timestamp * 0.08) * 5;
      drawRotatedRect(g, noseX + cos * 4, noseY + sin * 4, flameLen, 8, angle, "rgba(255,180,40,0.7)", "rgba(255,235,120,0.85)", 1);
    }
    const moveSpeed = Math.sqrt(game.playerMoveVX * game.playerMoveVX + game.playerMoveVY * game.playerMoveVY);
    if (moveSpeed > 0.35) {
      const trailLen = 20 + moveSpeed * 2 + Math.sin(timestamp * 0.05) * 4;
      drawRotatedRect(g, tailX, tailY, trailLen, 10, angle + Math.PI, "rgba(255,90,40,0.55)", "rgba(255,190,90,0.8)", 1);
    }
  }
  function drawPlayerBullets(g, bullets) {
    bullets.forEach((bullet) => {
      const angle = Math.atan2(bullet.vy, bullet.vx);
      drawRotatedRect(g, bullet.x, bullet.y, 16, 4, angle, bullet.color, "#FFF8E1", 1);
    });
  }
  function renderWorld(game, deltaTime) {
    const g = game.world.graphics;
    const timestamp = Laya.timer.currTimer;
    g.clear();
    drawSpaceBackground(game, g, timestamp);
    if (game.gameState === "GAME_OVER") {
      g.drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, "rgba(0,0,0,0.8)");
      g.fillText("游戏结束", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 80, "bold 48px Arial", "#FFFFFF", "center");
      g.fillText(`最终击杀: ${game.kills} | 到达: 第${game.currentLevel}关`, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 20, "24px Arial", "#FFFFFF", "center");
      g.drawRect(CANVAS_WIDTH / 2 - 100, CANVAS_HEIGHT / 2 + 20, 200, 60, "#4CAF50");
      g.fillText("重新开始", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 58, "bold 24px Arial", "#FFFFFF", "center");
      return;
    }
    if (game.gameState === "CLEAR") {
      g.drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, "rgba(0,0,0,0.8)");
      g.fillText("恭喜通关！", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 40, "bold 48px Arial", "#FFD700", "center");
      return;
    }
    for (let i = game.explosions.length - 1; i >= 0; i--) {
      const exp = game.explosions[i];
      exp.radius += exp.growth || 5;
      exp.alpha -= exp.fade || 0.05;
      if (exp.alpha <= 0 || exp.radius >= (exp.maxRadius || 9999)) {
        game.explosions.splice(i, 1);
        continue;
      }
      if (exp.ring) {
        g.drawCircle(exp.x, exp.y, exp.radius, null, `rgba(${exp.color || "255,100,0"},${exp.alpha})`, exp.lineWidth || 3);
      } else {
        g.drawCircle(exp.x, exp.y, exp.radius, `rgba(${exp.color || "255,100,0"},${exp.alpha})`);
      }
    }
    if (game.player.skills.THORN_AURA) {
      const range = 100 + (game.player.skills.THORN_AURA.level - 1) * 20;
      g.drawCircle(game.player.x, game.player.y, range, null, "rgba(120,80,220,0.5)", 2);
    }
    game.mines.forEach((mine) => {
      const fill = mine.timer < 1e3 ? Math.floor(mine.timer / 100) % 2 === 0 ? "#FF0000" : "#FF5722" : mine.color;
      g.drawCircle(mine.x, mine.y, mine.radius, fill);
      g.drawCircle(mine.x, mine.y, mine.radius + 3, null, "#FFFFFF", 1);
    });
    game.turrets.forEach((turret) => {
      g.drawCircle(turret.x, turret.y, turret.radius, "#4CAF50");
      g.drawCircle(turret.x, turret.y, turret.radius * 0.5, "#B2FF59");
    });
    game.expOrbs.forEach((orb) => {
      g.drawCircle(orb.x, orb.y, orb.radius + 1, "#64B5F6");
      g.drawCircle(orb.x, orb.y, orb.radius * 0.5, "#E3F2FD");
    });
    game.drops.forEach((drop) => {
      if (drop.life !== void 0) {
        drop.life -= deltaTime;
        if (drop.life < 2e3 && Math.floor(drop.life / 100) % 2 === 0) {
          return;
        }
      }
      g.drawRect(drop.x - 10, drop.y - 10, 20, 20, "#E91E63");
      g.drawRect(drop.x - 6, drop.y - 2, 12, 4, "#FFFFFF");
      g.drawRect(drop.x - 2, drop.y - 6, 4, 12, "#FFFFFF");
    });
    drawBossTelegraph(game, g, timestamp);
    game.enemies.forEach((enemy) => {
      if (enemy.isBoss) {
        drawBossBody(g, enemy, timestamp);
      } else {
        g.drawCircle(enemy.x, enemy.y, enemy.radius, enemy.isHorde ? "#FF8A80" : enemy.color);
        if (enemy.isHorde) {
          g.drawCircle(enemy.x, enemy.y, enemy.radius * 0.4, "#FFF3E0");
        }
      }
      if (enemy.health < enemy.maxHealth) {
        const barWidth = enemy.radius * 2;
        g.drawRect(enemy.x - barWidth / 2, enemy.y - enemy.radius - 10, barWidth, 4, "#555555");
        g.drawRect(enemy.x - barWidth / 2, enemy.y - enemy.radius - 10, barWidth * (enemy.health / enemy.maxHealth), 4, enemy.isBoss ? "#FFD700" : "#00FF00");
      }
      if (enemy.isBoss && enemy.name) {
        g.fillText(enemy.name, enemy.x, enemy.y - enemy.radius - 20, "14px Arial", "#FFFFFF", "center");
      }
    });
    drawPlayerBullets(g, game.bullets);
    game.enemyBullets.forEach((bullet) => {
      g.drawCircle(bullet.x, bullet.y, bullet.radius, bullet.color);
    });
    if (!(game.player.invincible > 0 && Math.floor(game.player.invincible / 3) % 2 === 0)) {
      drawFighter(game, g, timestamp);
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
      this.mouse = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2, left: false };
      this.gameState = "START";
      this.currentLevel = 1;
      this.levelProgress = 0;
      this.kills = 0;
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
      this.levelTransitionAt = 0;
      this.healthDropsThisLevel = 0;
      this.touchMoveActive = false;
      this.joystickVector = { x: 0, y: 0 };
      this.playerMoveVX = 0;
      this.playerMoveVY = 0;
      this.playerShield = false;
      this.shieldCooldown = 0;
      this.player = {
        x: CANVAS_WIDTH / 2,
        y: CANVAS_HEIGHT / 2,
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
      this.world = new Laya.Sprite();
      this.world.pos(0, 0);
      stage.addChild(this.world);
      this.isTouchDevice = this.detectTouchDevice();
      this.stars = this.createStarField();
      this.ui = new GameUI(stage);
      this.ui.bindStart(() => this.startGame());
      this.ui.bindSkillPick((skillId) => this.selectSkill(skillId));
      this.ui.updateHealth(this.player.health, this.player.maxHealth);
      this.ui.updateExp(this.playerLevel, this.playerExp, this.expToNextLevel);
      this.ui.updateEvolution(this.player.evolution.bulletCount, this.player.evolution.fireRateBoost);
      this.ui.updateKills(this.kills, LEVEL_CONFIG[1].killTarget);
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
      this.mouse.x = event.stageX;
      this.mouse.y = event.stageY;
    }
    onMouseDown(event) {
      if (this.isTouchDevice) {
        if (this.gameState === "GAME_OVER") {
          const clickX2 = event.stageX;
          const clickY2 = event.stageY;
          if (clickX2 > CANVAS_WIDTH / 2 - 100 && clickX2 < CANVAS_WIDTH / 2 + 100 && clickY2 > CANVAS_HEIGHT / 2 + 20 && clickY2 < CANVAS_HEIGHT / 2 + 80) {
            this.resetGame();
          }
          return;
        }
        if (this.gameState === "PLAYING" && event.stageX < CANVAS_WIDTH * 0.6) {
          this.beginTouchMove(event.stageX, event.stageY);
        }
        return;
      }
      if (event.button !== 0) {
        return;
      }
      this.mouse.left = true;
      if (this.gameState !== "GAME_OVER") {
        return;
      }
      const clickX = event.stageX;
      const clickY = event.stageY;
      if (clickX > CANVAS_WIDTH / 2 - 100 && clickX < CANVAS_WIDTH / 2 + 100 && clickY > CANVAS_HEIGHT / 2 + 20 && clickY < CANVAS_HEIGHT / 2 + 80) {
        this.resetGame();
      }
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
    startGame() {
      this.resetGame();
      this.lastFrameTime = Laya.timer.currTimer;
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
    pushExplosion(exp) {
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
      damagePlayer(this, amount);
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
      renderWorld(this, deltaTime);
    }
    resetGame() {
      resetGameState(this);
      this.endTouchMove();
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
      this.accumulator += deltaTime;
      while (this.accumulator >= FRAME_TIME) {
        if (!this.isPaused && this.gameState === "PLAYING") {
          this.updatePlayer(FRAME_TIME, timestamp);
          this.spawnEnemy(timestamp);
          this.updateEnemies(FRAME_TIME, timestamp);
          this.enemies.forEach((enemy) => {
            if (enemy.isBoss) {
              this.updateBossSkills(enemy, timestamp);
            }
          });
          this.updateBossStates(FRAME_TIME, timestamp);
          this.updateBossBombs(FRAME_TIME);
          this.updateSkills(FRAME_TIME, timestamp);
          this.updateMines(FRAME_TIME, timestamp);
          this.updateExpOrbs();
          this.updateBullets(FRAME_TIME);
          this.checkCollisions(timestamp);
        }
        this.accumulator -= FRAME_TIME;
      }
      if (this.levelComplete && this.gameState === "PLAYING" && !this.isChoosingSkill && this.levelTransitionAt > 0 && timestamp >= this.levelTransitionAt) {
        this.levelTransitionAt = 0;
        this.enterNextLevel();
      }
      this.render(deltaTime);
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
      base.pos(130, CANVAS_HEIGHT - 130);
      base.visible = false;
      this.stage.addChild(base);
      const stick = new Laya.Sprite();
      stick.graphics.drawCircle(0, 0, 26, "rgba(173,216,255,0.8)", "#E3F2FD", 2);
      stick.pos(130, CANVAS_HEIGHT - 130);
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
        const bx = this.clamp(x, 70, CANVAS_WIDTH * 0.5);
        const by = this.clamp(y, CANVAS_HEIGHT * 0.45, CANVAS_HEIGHT - 70);
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
    stage.width = CANVAS_WIDTH;
    stage.height = CANVAS_HEIGHT;
    stage.scaleMode = "showall";
    stage.bgColor = "#1A1A1A";
    stage.screenMode = "none";
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
