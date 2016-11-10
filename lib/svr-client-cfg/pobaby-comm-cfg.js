function gameCfg(cfg) {
  cfg.defaultHero = 'pobaby';
  cfg.comm = {
    RES_STA_INTERVAL: 300, // 5分钟恢复一点体力
    SPEND_STA_STAGE: 6,    // 单局消耗体力数，一局6点
    GAIN_LUCKY_STAGE: 5,   // 每5局获得一次抽奖机会
    INIT_COIN: 200,  // 初始金币数
    INIT_DIAM: 0,   // 初始钻石数
    INIT_STA: 30, // 初始体力数
  };

  cfg.talent = {
    0: { desc: '我是一个平凡的人（无任何效果）' },
    1: { desc: '初始多重选择次数+3' },
    2: { desc: '每天都可以使用一次刷新功能' },
    3: { desc: '只能沿对角线相邻方向选择' },
    4: { desc: '可以沿任意相邻方向选择' },
    5: { desc: '每三个回合点随机亮一个食物' },
    6: { desc: '每个回合为任意一个食物+1' },
    7: { desc: '拥有特殊技能“X号面粉”' },
    8: { desc: '拥有特殊技能“置换”' },
    9: { desc: '每次完美消除都有50%的几率获得一次步数奖励' },
    10: { desc: '每次完美消除都会充满所有技能' },
    11: { desc: '复活所需的道具数减1' },
  };

  /**
   * s{number} - 技能id
   * hotSkillIdx: {string} - 突出显示技能索引，[0 - 3]
   * spend{number} - 技能初始费用
   * skillGrowCount - 技能可成才次数 只可能是5或8
   * initStep - 可选择的初始步数（属于天赋）
   * stepGrowCount - 步数可成长次数 只可能是5或8
   * talentid - 天赋id
   * gain: 获得方式 ['coin', 'diam', 'rmb', 'item']
   *   coin: price是number
   *   diam: price是number
   *   rmb:  price是number
   *   item: price是{ itemid, num }
   */
  cfg.hero = {
    'pobaby': {
      name: '小破孩',
      s0: 0, s1: 1, s2: 3, s3: 4, hotSkillIdx: 0,
      spend0: 12, spend1: 14, spend2: 16, spend3: 18,
      skillGrowCount: 5,
      initStep: 4, stepGrowCount: 5,
      talentid: 0,
      gain: { cy: 'coin', price: 0 },
      gender: 'boy',
      uni: 0,
    },

    'xy': {
      name: '小丫',
      s0: 0, s1: 1, s2: 3, s3: 4, hotSkillIdx: 0,
      spend0: 10, spend1: 14, spend2: 16, spend3: 18,
      skillGrowCount: 5,
      initStep: 7, stepGrowCount: 5,
      talentid: 1,
      gain: { cy: 'coin', price: 4500 },
      gender: 'girl',
      uni: 1,
    },

    'xdj': {
      name: '小当家',
      s0: 0, s1: 1, s2: 3, s3: 4, hotSkillIdx: 2,
      spend0: 12, spend1: 14, spend2: 13, spend3: 18,
      skillGrowCount: 5,
      initStep: 4, stepGrowCount: 5,
      talentid: 11,
      gain: { cy: 'diam', price: 1200 },
      gender: 'girl',
      uni: 2,
    },

    'plx': {
      name: '破锣侠',
      s0: 0, s1: 1, s2: 3, s3: 4, hotSkillIdx: 3,
      spend0: 12, spend1: 14, spend2: 16, spend3: 15,
      skillGrowCount: 8,
      initStep: 4, stepGrowCount: 8,
      talentid: 2,
      gain: { cy: 'coin', price: 18000 },
      gender: 'boy',
      uni: 3,
    },

    'dx': {
      name: '大侠',
      s0: 0, s1: 2, s2: 3, s3: 4, hotSkillIdx: 1,
      spend0: 12, spend1: 11, spend2: 16, spend3: 18,
      skillGrowCount: 5,
      initStep: 4, stepGrowCount: 5,
      talentid: 7,
      gain: { cy: 'coin', price: 25000 },
      gender: 'boy',
      uni: 4,
    },

    'nxs': {
      name: '女学生',
      s0: 0, s1: 1, s2: 3, s3: 4, hotSkillIdx: -1,
      spend0: 11, spend1: 14, spend2: 16, spend3: 17,
      skillGrowCount: 8,
      initStep: 4, stepGrowCount: 8,
      talentid: 6,
      gain: { cy: 'diam', price: 2400 },
      gender: 'girl',
      uni: 5,
    },

    'np': {
      name: '女仆',
      s0: 0, s1: 1, s2: 3, s3: 4, hotSkillIdx: 1,
      spend0: 12, spend1: 11, spend2: 15, spend3: 18,
      skillGrowCount: 8,
      initStep: 4, stepGrowCount: 8,
      talentid: 3,
      gain: { cy: 'diam', price: 2900 },
      gender: 'girl',
      uni: 6,
    },

    'zgd': {
      name: '掌柜的',
      s0: 0, s1: 1, s2: 3, s3: 5, hotSkillIdx: 3,
      spend0: 12, spend1: 14, spend2: 16, spend3: 15,
      skillGrowCount: 8,
      initStep: 4, stepGrowCount: 8,
      talentid: 8,
      gain: { cy: 'item', price: {itemid: 0, num: 20} },
      gender: 'girl',
      uni: 7,
    },

    'nz': {
      name: '牛仔',
      s0: 0, s1: 1, s2: 3, s3: 4, hotSkillIdx: -1,
      spend0: 12, spend1: 15, spend2: 15, spend3: 17,
      skillGrowCount: 8,
      initStep: 4, stepGrowCount: 8,
      talentid: 5,
      gain: { cy: 'item', price: {itemid: 1, num: 20} },
      gender: 'boy',
      uni: 8,
    },

    'cmx': {
      name: '草帽侠',
      s0: 0, s1: 1, s2: 3, s3: 4, hotSkillIdx: -1,
      spend0: 11, spend1: 14, spend2: 16, spend3: 19,
      skillGrowCount: 8,
      initStep: 4, stepGrowCount: 8,
      talentid: 9,
      gain: { cy: 'item', price: {itemid: 2, num: 30} },
      gender: 'boy',
      uni: 9,
    },

    'bnz': {
      name: '白娘子',
      s0: 0, s1: 1, s2: 3, s3: 4, hotSkillIdx: -1,
      spend0: 12, spend1: 13, spend2: 15, spend3: 18,
      skillGrowCount: 8,
      initStep: 4, stepGrowCount: 8,
      talentid: 10,
      gain: { cy: 'item', price: {itemid: 3, num: 30} },
      gender: 'girl',
      uni: 10,
    },

    'cr': {
      name: '超人',
      s0: 0, s1: 1, s2: 3, s3: 4, hotSkillIdx: -1,
      spend0: 13, spend1: 14, spend2: 17, spend3: 17,
      skillGrowCount: 8,
      initStep: 4, stepGrowCount: 5,
      talentid: 4,
      gain: { cy: 'item', price: {itemid: 4, num: 40} },
      gender: 'boy',
      uni: 11,
    },
  };

  cfg.skill = {
    0: { name: '爆炸包' },
    1: { name: '+号面粉' },
    2: { name: 'x号面粉' },
    3: { name: '蒸笼' },
    4: { name: '翻转' },
    5: { name: '置换' },
  };

  cfg.buy = {
    0: { name: '获得1000钻石', cy: 'rmb', price: 0, diam: 1000 },
    1: { name: '1000钻石换10000金币', cy: 'diam', price: 1000, coin: 10000 },

    100: { name: '获得160元宝', cy: 'rmb', price: 2, diam: 160 },
    101: { name: '获得500元宝', cy: 'rmb', price: 6, diam: 500 },
    102: { name: '获得1200元宝', cy: 'rmb', price: 12, diam: 1200 },
    103: { name: '获得2400元宝', cy: 'rmb', price: 20, diam: 2400 },
    // 104: { name: '获得1480元宝', cy: 'rmb', price: 128, diam: 1480 },
    // 105: { name: '获得3000元宝', cy: 'rmb', price: 258, diam: 3000 },

    200: { name: '获得300纸币', cy: 'diam', price: 50, coin: 300 },
    201: { name: '获得1500纸币', cy: 'diam', price: 200, coin: 1500 },
    202: { name: '获得4000纸币', cy: 'diam', price: 500, coin: 4000 },
    203: { name: '获得9000纸币', cy: 'diam', price: 1000, coin: 9000 },
    204: { name: '获得30000纸币', cy: 'diam', price: 3000, coin: 30000 },
    205: { name: '获得60000纸币', cy: 'diam', price: 5000, coin: 60000 },

    300: { name: '获得1把钥匙', cy: 'diam', price: 100, item: { itemid: 20, num: 1 } },
    301: { name: '获得11把钥匙', cy: 'diam', price: 900, item: { itemid: 20, num: 11 } },

    400: { name: '获得1体力', cy: 'diam', price: 50, sta: 1, desc: '+1'},
    401: { name: '获得6体力', cy: 'diam', price: 250, sta: 6, desc: '+6' },
    402: { name: '获得12体力', cy: 'diam', price: 450, sta: 12, desc: '+12' },
    403: { name: '获得30体力', cy: 'diam', price: 1000, sta: 30, desc: '+30' },
    404: { name: '获得50体力', cy: 'diam', price: 1500, sta: 50, desc: '+50' },
    405: { name: '体力上限加1', cy: 'diam', price: 200, staUpLimit: 1, desc: '体力上限+1' },

    501: { name: '新手礼包', cy: 'rmb', price: 0.1, gift: [ { item: { itemid: 20, num: 3 } }, { coin: 1000 } ], desc: '钥匙3把，纸币（coin）1000', giftid: 'gift1'},
    502: { name: '限时礼包', cy: 'rmb', price: 6, gift: [ { item: { itemid: 20, num: 3 } }, { diam: 666 }, { item: { itemid: 10, num: 3 } } ], desc: '钥匙3把，元宝（diam）666，沙漏3个', giftid: 'gift2'},
    503: { name: '超级礼品盒', cy: 'rmb', price: 20, gift: [ { item: { itemid: 20, num: 5 } }, { diam: 888 }, { item: { itemid: 10, num: 5 } }, { hero: 'plx' } ], desc: '钥匙3把，元宝（diam）888，沙漏3个, 破锣侠', giftid: 'gift3'},
    504: { name: '大侠宝箱', cy: 'rmb', price: 20, gift: [ { item: { itemid: 10, num: 3 } }, { diam: 500 }, { hero: 'dx' }], desc: '元宝（diam）500，沙漏3个, 大侠', giftid: 'gift4'},
    505: { name: '充值礼包', cy: 'rmb', price: 20, gift: [ { diam: 2400 } ], desc: '元宝（diam）2400', giftid: 'gift5'},

    601: { name: '增加一步', cy: 'rmb', price: 2},
  };

  cfg.item = {
    0: { name: '扇子', desc: '掌柜的', heroid: 'zgd' },
    1: { name: '手枪', desc: '牛仔', heroid: 'nz' },
    2: { name: '草帽', desc: '草帽侠', heroid: 'cmx' },
    3: { name: '花伞', desc: '白娘子', heroid: 'bnz' },
    4: { name: '红裤衩', desc: '超人', heroid: 'cr' },

    10: { name: '沙漏', desc: '复活' },
    20: { name: '钥匙', desc: '抽奖用' },
  };

  cfg.skillUpPrice = {
    5: [100, 200, 500, 1500, 3000],
    8: [200, 500, 1000, 2000, 3500, 5000, 8000, 12000],
  };

  cfg.stepUpPrice = {
    5: [200, 800, 2000, 5000, 8000],
    8: [500, 1000, 2500, 5000, 8000, 15000, 25000, 40000],
  };

  // 抽奖
  cfg.luckyDraw = [
    {id: 0, coin: 100, weight: 100},
    {id: 1, coin: 200, weight: 200},
    {id: 2, coin: 300, weight: 200},
    {id: 3, coin: 500, weight: 100},
    {id: 4, coin: 1000, weight: 30},
    {id: 5, coin: 10000, weight: 2},
    {id: 6, diam: 10, weight: 150},
    {id: 7, diam: 20, weight: 100},
    {id: 8, diam: 50, weight: 33},
    {id: 9, item: { itemid: 20, num: 1 }, weight: 50},
    {id: 10, item: { itemid: 10, num: 1 }, weight: 10},
    {id: 11, item: { itemid: 10, num: 2 }, weight: 5},
    {id: 12, heroItem: true, weight: 20},
  ];

  // rmb抽奖
  cfg.rmbLuckyDraw = [
    {id: 0, heroItem: true, weight: 750 },
    {id: 1, item: { itemid: 10, num: 1 }, weight: 100 },
    {id: 2, item: { itemid: 10, num: 2 }, weight: 50 },
    {id: 3, coin: 1000, weight: 95 },
    {id: 4, coin: 10000, weight: 5 },
  ];

  // 每日签到
  /**
  * 共4大类：
  * 1.元宝: [{diam: 200}]
  * 2.道具: [{item: {itemid: 1, num: 1}}]
  * 3.随机道具: [{rand: 1}]
  * 4.礼包: [{rand: 1}, {diam: 100},{item: {itemid: 1, num: 2}}]
  */
  cfg.dailyGift = {
    '0': [{diam: 60}],
    '1': [{diam: 60}],
    '2': [{item: {itemid: 20, num: 1}}],
    '3': [{diam: 60}],
    '4': [{rand: 1}],
    '5': [{diam: 80}],
    '6': [{item: {itemid: 20, num: 1}}, {item: {itemid: 10, num: 1}}, {rand: 1}],
  };

  cfg.appid = '1105128268';

  cfg.updatePriceByPt = () => {
    console.log('------------ cfg.updatePriceByPt ----------');
    if (cfg.pt === 'ctcc') {
      cfg.buy['100'].alias = 'TOOL1';
      cfg.buy['101'].alias = 'TOOL2';
      cfg.buy['102'].alias = 'TOOL3';
      cfg.buy['103'].alias = 'TOOL4';
      cfg.buy['505'].alias = 'TOOL5';
      cfg.buy['501'].alias = 'TOOL6';
      cfg.buy['502'].alias = 'TOOL7';
      cfg.buy['503'].alias = 'TOOL8';
      cfg.buy['601'].alias = 'TOOL9';
      cfg.buy['504'].alias = 'TOOL10';
    } else if (cfg.pt === 'cucc') {
      cfg.buy['100'].alias = '001';
      cfg.buy['101'].alias = '002';
      cfg.buy['102'].alias = '003';
      cfg.buy['103'].alias = '004';
      cfg.buy['505'].alias = '005';
      cfg.buy['501'].alias = '006';
      cfg.buy['502'].alias = '007';
      cfg.buy['503'].alias = '008';
      cfg.buy['601'].alias = '009';
      cfg.buy['504'].alias = '010';
      cfg.buy['601'].price = 3;
    } else if (cfg.pt === 'cmcc') {
      cfg.buy['100'].alias = '001';
      cfg.buy['101'].alias = '002';
      cfg.buy['102'].alias = '003';
      cfg.buy['103'].alias = '004';
      cfg.buy['505'].alias = '005';
      cfg.buy['501'].alias = '006';
      cfg.buy['502'].alias = '007';
      cfg.buy['503'].alias = '008';
      cfg.buy['601'].alias = '009';
      cfg.buy['504'].alias = '010';
      cfg.buy['601'].price = 3;
    } else if (cfg.pt === 'huawei') {
      cfg.buy['100'].alias = '1';
      cfg.buy['101'].alias = '2';
      cfg.buy['102'].alias = '3';
      cfg.buy['103'].alias = '4';
      cfg.buy['505'].alias = '5';
      cfg.buy['501'].alias = '6';
      cfg.buy['502'].alias = '7';
      cfg.buy['503'].alias = '8';
      cfg.buy['601'].alias = '9';
      cfg.buy['504'].alias = '10';
      cfg.buy['601'].price = 3;
    } else if (cfg.pt === 'jinli') {
      // 给每个计费点添加sdk支付类型
      for (const idx in cfg.buy) {
        if (cfg.buy.hasOwnProperty(idx)) {
          cfg.buy[idx + ''].sdk_pay_type = cfg.sdk_pay_type;
        }
      }

      cfg.buy['100'].alias = '1';
      cfg.buy['101'].alias = '2';
      cfg.buy['102'].alias = '3';
      cfg.buy['103'].alias = '4';
      cfg.buy['505'].alias = '5';
      cfg.buy['501'].alias = '6';
      cfg.buy['502'].alias = '7';
      cfg.buy['503'].alias = '8';
      cfg.buy['601'].alias = '9';
      cfg.buy['504'].alias = '10';
      cfg.buy['601'].price = 3;
    }
  };
  cfg.updatePriceByPt();
}

if (typeof (module) !== 'undefined') {
  module.exports = gameCfg;
}
