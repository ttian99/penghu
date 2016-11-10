import _ from 'lodash';

function catsCommCfg(cfg) {
  cfg.comm = {
    INIT_COIN: 688,  // 初始金币数
    INIT_DIAM: 88,   // 初始钻石数
    INIT_STA: 30, // 初始体力数
    RES_STA_INTERVAL: 300, // 耐力恢复间隔，5 * 60s = 5分钟
  };

  /**
   * [hero description]
   * @type {Object}
   * name：英雄名称
   * typeid：type和id的综合体
   * type： 颜色类型
   * id：索引
   * maxLv：最大等级
   * atk：攻击力
   * strike_rate：暴击率
   * up_exp：升到下一级所需的经验
   * lock_star：技能学习栏第三栏解锁所需达到的英雄星级
   * talentSkill：天赋技能
   * desc：英雄描述
   */

  cfg.heroTypes = ['red', 'yellow', 'purple', 'green', 'blue'];

  cfg.heroNames = {
    annie: 'annie',
    luffy: 'luffy',
    saizeriya: 'saizeriya',
    timo: 'timo',
    rogers: 'rogers',
    sparta: 'sparta',
  };

  //*
  cfg.hero = {
    'annie': { uni: 0, idx: 0, name: '安妮', type: 'red', maxLv: 40, maxStar: 5, lockStar: 3, talentSkill: 1101, desc: '别看她可爱乖巧得不要不要的，一旦被激怒就会祭出泰迪大熊，践踏四方！' },
    'luffy': { uni: 1, idx: 0, name: '路小飞', type: 'yellow', maxLv: 40, maxStar: 5, lockStar: 3, talentSkill: 2101, desc: '来自《海贼王》之喵，擅长橡胶拳攻击，具备超凡的冒险精神和领导才能。' },
    'saizeriya': { uni: 2, idx: 0, name: '萨莉亚', type: 'purple', maxLv: 40, maxStar: 5, lockStar: 3, talentSkill: 3101, desc: '来自朝鲜半岛的魔法师，手中的星星法杖可腾云驾雾，呼风唤雷。' },
    'timo': { uni: 3, idx: 0, name: '提莫', type: 'green', maxLv: 40, maxStar: 5, lockStar: 3, talentSkill: 4101, desc: '迅捷斥候喵，负责班德尔城安全的侦察兵首领，拥有起死回生的神技。' },
    'rogers': { uni: 4, idx: 0, name: '罗杰斯', type: 'blue', maxLv: 40, maxStar: 5, lockStar: 3, talentSkill: 5101, desc: '“正义主旋律”美国队长，初期身材弱小，培养后却可爆发惊人能量。善盾。' },
    'sparta': { uni: 5, idx: 1, name: '潘神', type: 'yellow', maxLv: 40, maxStar: 5, lockStar: 3, talentSkill: 2101, desc: '潘神测试' },
  };
  //*/

  /**
   * [skill description]
   * @type {Object}
   * type: 1主动技能，0被动技能
   * maxLevel最大等级
   */
  cfg.skill = {
    '1101': { name: '提伯斯之怒', type: 1, maxLevel: 5, desc: '放出泰迪熊提伯斯，焚烧<%= num %>个棋盘单元冲击敌人并额外造成持续<%= round %>回合灼伤扣<%= hurt %>血。', descEx: '增加安妮暴击率<%= addStrickRate %>%，<%= round %>回合'},
    '2101': { name: '橡胶机关枪', type: 1, maxLevel: 5, desc: '发动机关枪打碎棋盘个<%= num %>随机单元，若包含特殊方块可对其直接引爆。', descEx: '增加路小飞攻击力<%= addAtk %>%，<%= round %>回合'},
    '3101': { name: '哈姆雷特', type: 1, maxLevel: 5, desc: '将棋盘<%= num %>个随机非紫色方块单元全部转换成紫色，优先转换负面元素单元。', descEx: '将棋盘N个随机非紫色方块单元全部转换成紫色炸弹，优先转换负面元素单元。'},
    '4101': { name: '增步蘑菇', type: 1, maxLevel: 5, desc: '提莫丢出<%= num %>个绿蘑菇，玩家每消除1个可增加1步。', descEx: '蘑菇带毒性。'},
    '5101': { name: '神盾', type: 1, maxLevel: 5, desc: '释放神盾笼罩棋盘，持续阻挡boss投掷出来的<%= num %>个负面元素。', descEx: ''},
    '8001': { name: '学习技能1', type: 1, maxLevel: 5, desc: '', descEx: ''},
    '8002': { name: '学习技能2', type: 1, maxLevel: 5, desc: '', descEx: ''},
  };

  cfg.itemType = {
    NORMAL: 'normal',
    BATTLE: 'battle',  // 战斗中可用
  };

  cfg.item = {
    '0': { name: '钥匙', desc: '打开幽灵百宝箱的神奇钥匙，通过关卡奖励或购买获取', openBox: true, itemType: cfg.itemType.NORMAL},

    '1': { name: '鱼骨头', desc: '使用后英雄经验增加100，通过关卡、百宝箱获取', addExp: 100, itemType: cfg.itemType.NORMAL},
    '2': { name: '猫粮', desc: '使用后英雄经验增加300，通过关卡、幽灵百宝箱获取', addExp: 300, itemType: cfg.itemType.NORMAL},
    '3': { name: '鱼罐头', desc: '使用后英雄经验增加1000，通过关卡、百宝箱获取', addExp: 1000, itemType: cfg.itemType.NORMAL},
    '4': { name: '三文鱼', desc: '使用后，英雄经验增加3000，可通过关卡、百宝箱获取', addExp: 3000, itemType: cfg.itemType.NORMAL},

    '5': { name: '红色能量瓶', desc: '将红色系英雄蓄满能量', itemType: cfg.itemType.BATTLE},
    '6': { name: '黄色能量瓶', desc: '将黄色系英雄蓄满能量', itemType: cfg.itemType.BATTLE},
    '7': { name: '蓝色能量瓶', desc: '将蓝色系英雄蓄满能量', itemType: cfg.itemType.BATTLE},
    '8': { name: '绿色能量瓶', desc: '将绿色系英雄蓄满能量', itemType: cfg.itemType.BATTLE},
    '9': { name: '紫色能量瓶', desc: '将紫色系英雄蓄满能量', itemType: cfg.itemType.BATTLE},

    '10': { name: '星星卡', desc: '英雄升星的必备物品，通过关卡、百宝箱获取', upStar: true, itemType: cfg.itemType.NORMAL},
    '11': { name: '技能卡', desc: '升级英雄技能的必须品，通过关卡、幽灵百宝箱获取', upSkill: true, itemType: cfg.itemType.NORMAL},
    '12': { name: '小红书', desc: '英雄学习新技能的消耗品，通过关卡、百宝箱获取', learnSkill: true, itemType: cfg.itemType.NORMAL},

    '13': { name: '大力丸', desc: '临时提升某个英雄攻击力40%，有效期当次战斗', itemType: cfg.itemType.BATTLE},
    '14': { name: '超级大力丸', desc: '临时提升全体英雄攻击力25%，有效期当次战斗', itemType: cfg.itemType.BATTLE},
    '15': { name: '暴击丸', desc: '临时提升某个英雄暴击率40%，有效期当次战斗', itemType: cfg.itemType.BATTLE},
    '16': { name: '超级暴击丸', desc: '临时提升全体英雄暴击率25%，有效期当次战斗', itemType: cfg.itemType.BATTLE},

    '17': { name: '2点体力卡', sta: 2, desc: '使用后增加2点体力', itemType: cfg.itemType.NORMAL},
    '18': { name: '5点体力卡', sta: 5, desc: '使用后增加5点体力', itemType: cfg.itemType.NORMAL},
    '19': { name: '10点体力卡', sta: 10, desc: '使用后增加10点体力', itemType: cfg.itemType.NORMAL},
    '20': { name: '20点体力卡', sta: 20, desc: '使用后增加20点体力', itemType: cfg.itemType.NORMAL},
    '21': { name: '满体力卡', fullSta: true, desc: '使用后补满体力', itemType: cfg.itemType.NORMAL},
    '22': { name: '30点体力卡', sta: 30, desc: '使用后增加30点体力', itemType: cfg.itemType.NORMAL},

    '31': { name: '蓄能饮料(红)', desc: '将红色系英雄蓄满能量', itemType: cfg.itemType.BATTLE},
    '32': { name: '蓄能饮料(黄)', desc: '将黄色系英雄蓄满能量', itemType: cfg.itemType.BATTLE},
    '33': { name: '蓄能饮料(紫)', desc: '将紫色系英雄蓄满能量', itemType: cfg.itemType.BATTLE},
    '34': { name: '蓄能饮料(绿)', desc: '将绿色系英雄蓄满能量', itemType: cfg.itemType.BATTLE},
    '35': { name: '蓄能饮料(蓝)', desc: '将蓝色系英雄蓄满能量', itemType: cfg.itemType.BATTLE},

    '36': { name: '暴击蛋(红)', desc: '临时提升红色系英雄暴击率40%，有效期当次战斗', itemType: cfg.itemType.BATTLE},
    '37': { name: '暴击蛋(黄)', desc: '临时提升黄色系英雄暴击率40%，有效期当次战斗', itemType: cfg.itemType.BATTLE},
    '38': { name: '暴击蛋(紫)', desc: '临时提升紫色系英雄暴击率40%，有效期当次战斗', itemType: cfg.itemType.BATTLE},
    '39': { name: '暴击蛋(绿)', desc: '临时提升绿色系英雄暴击率40%，有效期当次战斗', itemType: cfg.itemType.BATTLE},
    '40': { name: '暴击蛋(蓝)', desc: '临时提升蓝色系英雄暴击率40%，有效期当次战斗', itemType: cfg.itemType.BATTLE},

    '41': { name: '攻击棒棒糖(红)', desc: '临时提升红色系英雄攻击力40%，有效期当次战斗', itemType: cfg.itemType.BATTLE},
    '42': { name: '攻击棒棒糖(黄)', desc: '临时提升黄色系英雄攻击力40%，有效期当次战斗', itemType: cfg.itemType.BATTLE},
    '43': { name: '攻击棒棒糖(紫)', desc: '临时提升紫色系英雄攻击力40%，有效期当次战斗', itemType: cfg.itemType.BATTLE},
    '44': { name: '攻击棒棒糖(绿)', desc: '临时提升绿色系英雄攻击力40%，有效期当次战斗', itemType: cfg.itemType.BATTLE},
    '45': { name: '攻击棒棒糖(蓝)', desc: '临时提升蓝色系英雄攻击力40%，有效期当次战斗', itemType: cfg.itemType.BATTLE},

    '46': { name: '罗杰斯碎片', desc: '集齐10个可合成英雄罗杰斯', compose: 10, rToDiam: 15, bToDiam: 5, heroid: 'rogers', itemType: cfg.itemType.NORMAL},
    '47': { name: '萨莉亚碎片', desc: '集齐30个可合成英雄萨莉亚', compose: 30, rToDiam: 30, bToDiam: 10, heroid: 'saizeriya', itemType: cfg.itemType.NORMAL},
    '48': { name: '提莫碎片', desc: '集齐20个可合成英雄提莫', compose: 20, rToDiam: 30, bToDiam: 10, heroid: 'timo', itemType: cfg.itemType.NORMAL},
    '49': { name: '安妮碎片', desc: '集齐20个可合成英雄按钮', compose: 20, rToDiam: 30, bToDiam: 15, heroid: 'annie', itemType: cfg.itemType.NORMAL},
    '50': { name: '圣诞猫女碎片', desc: '集齐40个可合成英雄圣诞猫女', compose: 40, rToDiam: 30, bToDiam: 20, heroid: 'luffy', itemType: cfg.itemType.NORMAL},
  };

  /**
   * cy: 货币类型 ['coin', 'item', 'rmb', 'mix']
   *   coin - 金币   price 是一个整数
   *   item - 道具   price 是一个对象 { itemid, num }
   *   rmb  - 人民币 price 是一个整数
   *   mix  - 混合   price此时是一个函数，传参是base基础数据
   */
  cfg.buy = {
    '100': { name: '购买金币500', cy: 'rmb', price: 10, coin: 500 },
    '101': { name: '购买金币1000', cy: 'rmb', price: 20, coin: 1000 },
    '102': { name: '购买金币2000', cy: 'rmb', price: 30, coin: 2000 },
    '103': { name: '购买金币5000', cy: 'rmb', price: 40, coin: 5000 },
    '104': { name: '购买金币9999', cy: 'rmb', price: 50, coin: 9999 },

    '201': { name: '畅玩礼包', cy: 'diam', price: 200, coin: 5000, items: [{itemid: 22, num: 2}, {itemid: 18, num: 2}] },
    '202': { name: '英雄养成礼包', cy: 'diam', price: 300, items: [{itemid: 10, num: 5}, {itemid: 11, num: 5}, {itemid: 12, num: 5}] },
    '203': { name: '畅玩礼包', cy: 'rmb', price: 6, diam: 100, items: [{itemid: 0, num: 5}, {itemid: 22, num: 2}, {itemid: 47, num: 10}] },

    '301': { name: '钥匙', cy: 'diam', price: 10, item: {itemid: 0, num: 1} },
    '302': { name: '5点体力卡', cy: 'diam', price: 20, item: {itemid: 18, num: 1} },
    '303': { name: '30点体力卡', cy: 'diam', price: 100, item: {itemid: 22, num: 1} },

    '401': { name: '购买钻石60', cy: 'rmb', price: 6, diam: 60 },
    '402': { name: '购买钻石120', cy: 'rmb', price: 12, diam: 120 },
    '403': { name: '购买钻石300', cy: 'rmb', price: 30, diam: 300 },
    '404': { name: '购买钻石1280', cy: 'rmb', price: 128, diam: 1280 },
  };

  // 抽奖
  // 索引分别为幽灵数和抽奖次数
  cfg.luckyDraw = {
    '1': {
      '1': [
        { id: 0, weight: 2609, item: { id: 17, num: 1 } },
        { id: 1, weight: 2609, coin: 500 },
        { id: 2, weight: 1304, item: { id: 1, num: 1 } },
        { id: 3, weight: 1304, item: { id: 18, num: 1 } },
        { id: 4, weight: 1304, coin: 1000 },
        { id: 5, weight: 870, item: { id: 0, num: 1 } },
      ],
      '2': [
        { id: 0, weight: 2400, coin: 1000 },
        { id: 1, weight: 1600, item: { id: 0, num: 1 } },
        { id: 2, weight: 1200, item: { id: 19, num: 1 } },
        { id: 3, weight: 1200, coin: 2000 },
        { id: 3, weight: 1200, item: { id: 2, num: 1 } },
        { id: 4, weight: 1200, item: { id: 31, num: 1 } },
        { id: 5, weight: 1200, item: { id: 32, num: 1 } },
      ],
      '3': [
        { id: 0, weight: 1250, item: { id: 35, num: 1 } },
        { id: 1, weight: 1250, item: { id: 34, num: 1 } },
        { id: 2, weight: 1250, item: { id: 33, num: 1 } },
        { id: 3, weight: 1250, item: { id: 36, num: 1 } },
        { id: 4, weight: 1250, item: { id: 37, num: 1 } },
        { id: 5, weight: 1250, item: { id: 40, num: 1} },
        { id: 6, weight: 1250, item: { id: 39, num: 1} },
        { id: 7, weight: 1250, item: { id: 38, num: 1 } },
      ],
      '4': [
        { id: 0, weight: 972, item: { id: 41, num: 1 } },
        { id: 1, weight: 917, item: { id: 42, num: 1 } },
        { id: 2, weight: 917, item: { id: 45, num: 1 } },
        { id: 3, weight: 917, item: { id: 44, num: 1 } },
        { id: 4, weight: 917, item: { id: 43, num: 1 } },
        { id: 5, weight: 917, coin: 5000 },
        { id: 6, weight: 764, item: { id: 20, num: 1 } },
        { id: 7, weight: 764, item: { id: 3, num: 1 } },
        { id: 8, weight: 573, item: { id: 22, num: 1 } },
        { id: 9, weight: 459, item: { id: 46, num: 1 } },
        { id: 10, weight: 459, item: { id: 11, num: 1 } },
        { id: 11, weight: 459, item: { id: 12, num: 1 } },
        { id: 12, weight: 459, coin: 9999 },
      ],
      '5': [
        { id: 0, weight: 1404, item: { id: 11, num: 1 } },
        { id: 1, weight: 1404, item: { id: 12, num: 1 } },
        { id: 2, weight: 1404, coin: 9999 },
        { id: 3, weight: 1404, item: { id: 10, num: 1 } },
        { id: 4, weight: 936, item: { id: 4, num: 1 } },
        { id: 5, weight: 780, item: { id: 47, num: 1 } },
        { id: 6, weight: 702, item: { id: 48, num: 1 } },
        { id: 7, weight: 702, item: { id: 49, num: 1 } },
        { id: 8, weight: 702, item: { id: 50, num: 1 } },
      ],
    },
    '2': {
      '1': [
        { id: 0, weight: 1967, item: { id: 17, num: 1 } },
        { id: 1, weight: 1967, coin: 500 },
        { id: 2, weight: 984, item: { id: 1, num: 1 } },
        { id: 3, weight: 984, item: { id: 18, num: 1 } },
        { id: 4, weight: 984, coin: 1000 },
        { id: 5, weight: 656, item: { id: 0, num: 1 } },
        { id: 6, weight: 492, item: { id: 19, num: 1 } },
        { id: 7, weight: 492, coin: 2000 },
        { id: 8, weight: 492, item: { id: 2, num: 1 } },
        { id: 9, weight: 492, item: { id: 31, num: 1 } },
        { id: 10, weight: 492, item: { id: 32, num: 1 } },
      ],
      '2': [
        { id: 0, weight: 714, item: { id: 35, num: 1 } },
        { id: 1, weight: 714, item: { id: 34, num: 1 } },
        { id: 2, weight: 714, item: { id: 33, num: 1 } },
        { id: 3, weight: 714, item: { id: 36, num: 1 } },
        { id: 4, weight: 714, item: { id: 37, num: 1 } },
        { id: 5, weight: 714, item: { id: 40, num: 1} },
        { id: 6, weight: 714, item: { id: 39, num: 1} },
        { id: 7, weight: 714, item: { id: 38, num: 1 } },
        { id: 8, weight: 714, item: { id: 41, num: 1 } },
        { id: 9, weight: 714, item: { id: 42, num: 1 } },
        { id: 10, weight: 714, item: { id: 45, num: 1 } },
        { id: 11, weight: 714, item: { id: 44, num: 1 } },
        { id: 12, weight: 714, item: { id: 43, num: 1 } },
        { id: 13, weight: 714, coin: 5000 },
        { id: 14, weight: 595, item: { id: 20, num: 1 } },
      ],
      '3': [
        { id: 0, weight: 1039, item: { id: 42, num: 1 } },
        { id: 1, weight: 1039, item: { id: 45, num: 1 } },
        { id: 2, weight: 1039, item: { id: 44, num: 1 } },
        { id: 3, weight: 1039, item: { id: 43, num: 1 } },
        { id: 4, weight: 1039, coin: 5000 },
        { id: 5, weight: 866, item: { id: 20, num: 1 } },
        { id: 6, weight: 866, item: { id: 3, num: 1 } },
        { id: 7, weight: 649, item: { id: 22, num: 1 } },
        { id: 8, weight: 519, item: { id: 46, num: 1 } },
        { id: 9, weight: 519, item: { id: 11, num: 1 } },
        { id: 10, weight: 519, item: { id: 12, num: 1 } },
      ],
      '4': [
        { id: 0, weight: 1493, item: { id: 22, num: 1 } },
        { id: 1, weight: 1194, item: { id: 46, num: 1 } },
        { id: 2, weight: 1194, item: { id: 11, num: 1 } },
        { id: 3, weight: 1194, item: { id: 12, num: 1 } },
        { id: 4, weight: 1194, coin: 9999 },
        { id: 5, weight: 796, item: { id: 10, num: 1 } },
        { id: 6, weight: 664, item: { id: 4, num: 1 } },
        { id: 7, weight: 597, item: { id: 47, num: 1 } },
        { id: 8, weight: 597, item: { id: 48, num: 1 } },
        { id: 9, weight: 597, item: { id: 49, num: 1 } },
        { id: 10, weight: 478, item: { id: 50, num: 1 } },
      ],
    },
    '3': {
      '1': [
        { id: 0, weight: 1496, item: { id: 17, num: 1 } },
        { id: 1, weight: 1496, coin: 500 },
        { id: 2, weight: 748, item: { id: 1, num: 1 } },
        { id: 3, weight: 748, item: { id: 18, num: 1 } },
        { id: 4, weight: 748, coin: 1000 },
        { id: 5, weight: 499, item: { id: 0, num: 1 } },
        { id: 6, weight: 374, item: { id: 19, num: 1 } },
        { id: 7, weight: 374, coin: 2000 },
        { id: 8, weight: 374, item: { id: 2, num: 1 } },
        { id: 9, weight: 374, item: { id: 31, num: 1 } },
        { id: 10, weight: 374, item: { id: 32, num: 1 } },
        { id: 11, weight: 299, item: { id: 35, num: 1 } },
        { id: 12, weight: 299, item: { id: 34, num: 1 } },
        { id: 13, weight: 299, item: { id: 33, num: 1 } },
        { id: 14, weight: 299, item: { id: 36, num: 1 } },
        { id: 15, weight: 299, item: { id: 37, num: 1 } },
        { id: 16, weight: 299, item: { id: 40, num: 1} },
        { id: 17, weight: 299, item: { id: 39, num: 1} },
        { id: 18, weight: 299, item: { id: 38, num: 1 } },
      ],
      '2': [
        { id: 0, weight: 782, item: { id: 37, num: 1 } },
        { id: 1, weight: 782, item: { id: 40, num: 1} },
        { id: 2, weight: 782, item: { id: 39, num: 1} },
        { id: 3, weight: 782, item: { id: 38, num: 1 } },
        { id: 4, weight: 782, item: { id: 41, num: 1 } },
        { id: 5, weight: 782, item: { id: 42, num: 1 } },
        { id: 6, weight: 782, item: { id: 45, num: 1 } },
        { id: 7, weight: 782, item: { id: 44, num: 1 } },
        { id: 8, weight: 782, item: { id: 43, num: 1 } },
        { id: 9, weight: 782, coin: 5000 },
        { id: 10, weight: 651, item: { id: 20, num: 1 } },
        { id: 11, weight: 651, item: { id: 3, num: 1 } },
        { id: 12, weight: 489, item: { id: 22, num: 1 } },
        { id: 13, weight: 391, item: { id: 46, num: 1 } },
      ],
      '3': [
        { id: 0, weight: 1404, item: { id: 46, num: 1 } },
        { id: 1, weight: 1404, item: { id: 11, num: 1 } },
        { id: 2, weight: 1404, item: { id: 12, num: 1 } },
        { id: 3, weight: 1404, coin: 9999 },
        { id: 4, weight: 936, item: { id: 10, num: 1 } },
        { id: 5, weight: 780, item: { id: 4, num: 1 } },
        { id: 6, weight: 702, item: { id: 47, num: 1 } },
        { id: 7, weight: 702, item: { id: 48, num: 1 } },
        { id: 8, weight: 702, item: { id: 49, num: 1 } },
        { id: 9, weight: 562, item: { id: 50, num: 1 } },
      ],
    },
  };

  // 关卡掉落
  cfg.postDrop = {
    'PLANT_1': [
      { id: 0, item: { id: 1, num: 1 } },
      { id: 1, item: { id: 0, num: 1 } },
      { id: 2, item: { id: 10, num: 1 } },
    ],
    'POST_1': [
      { id: 0, item: { id: 2, num: 1 } },
      { id: 1, item: { id: 10, num: 1 } },
      { id: 2, item: { id: 11, num: 1 } },
    ],
    'PLANT_2': [
      { id: 0, item: { id: 11, num: 1 } },
      { id: 1, coin: 3000 },
      { id: 2, item: { id: 3, num: 1 } },
    ],
    'POST_2': [
      { id: 0, item: { id: 10, num: 1 } },
      { id: 1, item: { id: 11, num: 1 } },
      { id: 2, item: { id: 3, num: 1 } },
    ],
    'PLANT_3': [
      { id: 0, item: { id: 10, num: 1 } },
      { id: 1, coin: 8888 },
      { id: 2, item: { id: 12, num: 1 } },
    ],
    'POST_3': [
      { id: 0, item: { id: 10, num: 1 } },
      { id: 1, item: { id: 0, num: 3 } },
      { id: 2, item: { id: 4, num: 1 } },
    ],
    'PLANT_4': [
      { id: 0, item: { id: 11, num: 1 } },
      { id: 1, item: { id: 10, num: 3 } },
      { id: 2, item: { id: 4, num: 1 } },
    ],
  };

  cfg.battleResult = {
    'PLANT_1': [
      { id: 0, weight: 2428, item: { id: 1, num: 1 } },
      { id: 1, weight: 2028, coin: 500 },
      { id: 2, weight: 1328, item: { id: 0, num: 1 } },
      { id: 3, weight: 1264, coin: 1000 },
      { id: 4, weight: 1264, item: { id: 2, num: 1 } },
      { id: 5, weight: 366, item: { id: 11, num: 1 } },
      { id: 6, weight: 366, item: { id: 10, num: 1 } },
      { id: 7, weight: 313, item: { id: 12, num: 1 } },
      { id: 8, weight: 113, item: { id: 46, num: 1 } },
      { id: 9, weight: 213, diam: 2 },
      { id: 10, weight: 213, coin: 2000 },
      { id: 11, weight: 106, diam: 5 },
    ],
    'POST_1': [
      { id: 0, weight: 300, item: { id: 1, num: 1 } },
      { id: 1, weight: 2328, coin: 500 },
      { id: 2, weight: 1847, item: { id: 0, num: 1 } },
      { id: 3, weight: 1264, coin: 1000 },
      { id: 4, weight: 1441, item: { id: 2, num: 1 } },
      { id: 5, weight: 800, item: { id: 4, num: 1 } },
      { id: 6, weight: 366, item: { id: 11, num: 1 } },
      { id: 7, weight: 366, item: { id: 10, num: 1 } },
      { id: 8, weight: 313, item: { id: 12, num: 1 } },
      { id: 9, weight: 413, item: { id: 46, num: 1 } },
      { id: 10, weight: 213, coin: 2000 },
      { id: 11, weight: 117, item: { id: 48, num: 1 } },
      { id: 12, weight: 117, item: { id: 49, num: 1 } },
      { id: 11, weight: 117, diam: 5 },
    ],
    'PLANT_2': [
      { id: 0, weight: 400, item: { id: 1, num: 1 } },
      { id: 1, weight: 2224, coin: 500 },
      { id: 2, weight: 2337, item: { id: 0, num: 1 } },
      { id: 3, weight: 1441, item: { id: 2, num: 1 } },
      { id: 4, weight: 800, item: { id: 4, num: 1 } },
      { id: 5, weight: 234, item: { id: 3, num: 1 } },
      { id: 6, weight: 392, item: { id: 11, num: 1 } },
      { id: 7, weight: 492, item: { id: 10, num: 1 } },
      { id: 8, weight: 264, item: { id: 12, num: 1 } },
      { id: 9, weight: 334, item: { id: 46, num: 1 } },
      { id: 10, weight: 534, diam: 2 },
      { id: 11, weight: 234, coin: 2000 },
      { id: 12, weight: 117, coin: 5000 },
      { id: 13, weight: 317, item: { id: 48, num: 1 } },
      { id: 14, weight: 117, item: { id: 49, num: 1 } },
      { id: 15, weight: 367, diam: 5 },
      { id: 16, weight: 78, item: { id: 47, num: 1 } },
      { id: 17, weight: 78, diam: 10 },
      { id: 18, weight: 47, diam: 88 },
    ],
    'POST_2': [
      { id: 0, weight: 2871, coin: 500 },
      { id: 1, weight: 1935, coin: 1000 },
      { id: 2, weight: 1935, item: { id: 2, num: 1 } },
      { id: 3, weight: 484, item: { id: 11, num: 1 } },
      { id: 4, weight: 484, item: { id: 10, num: 1 } },
      { id: 5, weight: 587, diam: 2 },
      { id: 6, weight: 587, coin: 2000 },
      { id: 7, weight: 394, coin: 5000 },
      { id: 8, weight: 394, diam: 5 },
      { id: 9, weight: 329, diam: 10 },
    ],
    'PLANT_3': [
      { id: 0, weight: 3084, item: { id: 1, num: 1 } },
      { id: 1, weight: 1984, item: { id: 0, num: 1 } },
      { id: 2, weight: 1542, item: { id: 2, num: 1 } },
      { id: 3, weight: 617, item: { id: 4, num: 1 } },
      { id: 4, weight: 441, item: { id: 3, num: 1 } },
      { id: 5, weight: 585, item: { id: 11, num: 1 } },
      { id: 6, weight: 585, item: { id: 10, num: 1 } },
      { id: 7, weight: 508, item: { id: 12, num: 1 } },
      { id: 8, weight: 654, item: { id: 48, num: 1 } },
    ],
    'POST_3': [
      { id: 0, weight: 1000, item: { id: 2, num: 1 } },
      { id: 1, weight: 2000, item: { id: 4, num: 1 } },
      { id: 2, weight: 500, item: { id: 11, num: 1 } },
      { id: 3, weight: 500, item: { id: 10, num: 1 } },
      { id: 4, weight: 500, item: { id: 12, num: 1 } },
      { id: 5, weight: 500, item: { id: 46, num: 1 } },
      { id: 6, weight: 500, diam: 2 },
      { id: 7, weight: 1000, coin: 2000 },
      { id: 8, weight: 500, item: { id: 48, num: 1 } },
      { id: 9, weight: 1000, item: { id: 49, num: 1 } },
      { id: 10, weight: 1000, diam: 5 },
      { id: 11, weight: 1000, item: { id: 47, num: 1 } },
    ],
    'PLANT_4': [
      { id: 0, weight: 1000, item: { id: 1, num: 1 } },
      { id: 1, weight: 1201, coin: 500 },
      { id: 2, weight: 1401, item: { id: 0, num: 1 } },
      { id: 3, weight: 951, coin: 1000 },
      { id: 4, weight: 951, item: { id: 2, num: 1 } },
      { id: 5, weight: 380, item: { id: 4, num: 1 } },
      { id: 6, weight: 272, item: { id: 3, num: 1 } },
      { id: 7, weight: 438, item: { id: 11, num: 1 } },
      { id: 8, weight: 438, item: { id: 10, num: 1 } },
      { id: 9, weight: 400, item: { id: 12, num: 1 } },
      { id: 10, weight: 190, item: { id: 46, num: 1 } },
      { id: 11, weight: 190, diam: 2 },
      { id: 12, weight: 190, coin: 2000 },
      { id: 13, weight: 95, coin: 5000 },
      { id: 14, weight: 95, item: { id: 48, num: 1 } },
      { id: 15, weight: 595, item: { id: 49, num: 1 } },
      { id: 16, weight: 95, diam: 5 },
      { id: 17, weight: 563, item: { id: 47, num: 1 } },
      { id: 18, weight: 563, diam: 10 },
    ],
  };
}

export default catsCommCfg;
