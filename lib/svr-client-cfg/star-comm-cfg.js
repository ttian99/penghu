var starCommCfg = function (cfg) {
  cfg.comm = {
    INIT_COIN: 688,  // 初始金币数
    INIT_DIAM: 28,  // 初始钻石数
    DAY_INC_STA: 5,   // 每日新增体力数
    MAX_STA: 150,     // 最大体力数
    SPEND_STA_STAGE: 1, // 单局消耗体力数
    FREE_MATCH_TIMES: 2, // 每日世锦赛免费次数
    SEND_STA_TIME: 10800, // 赠送体力间隔时长 3个小时 3 * 60 * 60
    SEND_STA_NUN: 1,  // 每次送体力个数
    MAX_RANK_NUM: 20,  // 世界排行榜最多人数
    MATCH_TICKET_PRICE: 10,  // 世锦赛门票价格
    FREE_SEND_STA_COUNT: 3,  // 每日免费送体力次数
    FREE_SEND_STA_NUM: 2     // 每日免费送体力每次的个数
  };

  // 英雄定义
  // perLvlCostCoin：num  每升一级花费的金币价格
  // perLvlCostDiam：num  每升一级花费的钻石价格
  // maxLvl： num 英雄的最高等级
  cfg.hero = {
    '0': { name: '小都都', perLvlCostCoin: 100, perLvlCostDiam: 10, maxLvl: 20 },
    '1': { name: '红裤衩儿', perLvlCostCoin: 200, perLvlCostDiam: 20, maxLvl: 30 },
    '2': { name: '小蜘蛛', perLvlCostCoin: 0, perLvlCostDiam: 5, maxLvl: 40 },
    '3': { name: '球敏俊', perLvlCostCoin: 0, perLvlCostDiam: 10, maxLvl: 50 },
    '4': { name: '猫女', perLvlCostCoin: 0, perLvlCostDiam: 10, maxLvl: 50 }
  };

  // 道具
  cfg.prop = {
    '0': { name: '调色板' },
    '1': { name: '王大锤' },
    '2': { name: '方块刷新' },
    '3': { name: '茶叶蛋' },
    '4': { name: '火箭' },
    '5': { name: '炸弹' },
    '6': { name: '教授指令' },
    '7': { name: '双倍x30秒' },
    '8': { name: '超人' },
    '9': { name: '招财陶猫' },
    '10': { name: '双倍x5秒' },
    '11': { name: '双倍x10秒' },
    '12': { name: '双倍x60秒' },
    '13': { name: '三倍x30秒' },
    '14': { name: '招财金猫' },
    '15': { name: '蜘蛛侠' },
    '16': { name: '神射手' },
    '17': { name: '猫女' }
  };

  cfg.heroUp = function (doc, body, buyInfo) {
    var ff = _.findWhere(doc.heroes, { id: buyInfo.heroUp });
    if (ff) {
      return _.merge(_.clone(buyInfo), cfg.getHeroPriceInfo(buyInfo.heroUp, ff.lvl));
    }
    return null;
  };

  cfg.buy = {
    '0': { name: '调色板', cy: 0, price: 640, prop: { id: 0, num: 1 } },
    '1': { name: '王大锤', cy: 0, price: 240, prop: { id: 1, num: 1 } }, // 5折
    '2': { name: '方块刷新', cy: 0, price: 900, prop: { id: 2, num: 1 } },
    '3': { name: '茶叶蛋', cy: 1, price: 10, egg: 1 },
    '4': { name: '火箭', cy: 1, price: 10, prop: { id: 4, num: 1 } },
    '5': { name: '炸弹', cy: 1, price: 38, prop: { id: 5, num: 1 } },
    '6': { name: '教授指令', cy: 1, price: 68, prop: { id: 6, num: 1 } },
    '7': { name: '双倍x30秒', cy: 1, price: 100, prop: { id: 7, num: 1 } },
    '8': { name: '超人', cy: 1, price: 128, prop: { id: 8, num: 1 } },
    '9': { name: '招财陶猫', cy: 1, price: 128, prop: { id: 9, num: 1 } },
    '10': { name: '双倍x5秒', cy: 1, price: 17, prop: { id: 10, num: 1 } },
    '11': { name: '双倍x10秒', cy: 1, price: 35, prop: { id: 11, num: 1 } },
    '12': { name: '双倍x60秒', cy: 1, price: 200, prop: { id: 12, num: 1 } },
    '13': { name: '三倍x30秒', cy: 1, price: 150, prop: { id: 13, num: 1 } },
    '14': { name: '招财金猫', cy: 1, price: 288, prop: { id: 14, num: 1 } },
    '15': { name: '蜘蛛侠', cy: 1, price: 188, prop: { id: 15, num: 1 } },
    '16': { name: '神射手', cy: 1, price: 999, prop: { id: 16, num: 1 } },
    '17': { name: '猫女', cy: 1, price: 888, prop: { id: 17, num: 1 } },

    '30': { name: '一个蛋', cy: 2, price: 10, itemid: 1460, ios_itemid: 1461, egg: 1 },
    '31': { name: '十个蛋', cy: 2, price: 90, itemid: 1462, ios_itemid: 1463, egg: 10 },

    '50': { name: '超值神奇蛋', cy: 2, price: 350, itemid: 977, ios_itemid: 978, coin: 8000, diam: 100, props: [{ id: 4, num: 1 }, { id: 7, num: 1 }], hero: 2 },
    '51': { name: '脱单礼包', cy: 2, price: 298, itemid: 2724, ios_itemid: 2725, coin: 8000, diam: 100, props: [{ id: 4, num: 1 }, { id: 7, num: 1 }], hero: 2 },
    '52': { name: '红包', cy: 2, price: 298, itemid: 1417, ios_itemid: 1419, coin: 8000, diam: 100, props: [{ id: 4, num: 1 }, { id: 7, num: 1 }], hero: 4 },

    '70': { name: '炫耀/求助送金币', cy: 0, price: 0, coin: 100 },

    '80': { name: '第一次复活', cy: 1, price: 20 },
    '81': { name: '第二次复活', cy: 1, price: 40 },
    '82': { name: '第三次复活', cy: 1, price: 80 },
    '83': { name: '第四次复活', cy: 1, price: 160 },
    '84': { name: '第五次复活', cy: 1, price: 320 },

    '100': { name: '购买金币500', cy: 1, price: 10, coin: 500 },
    '101': { name: '购买金币2550', cy: 1, price: 50, coin: 2550 },
    '102': { name: '购买金币5300', cy: 1, price: 100, coin: 5300 },
    '103': { name: '购买金币11000', cy: 1, price: 200, coin: 11000 },
    '104': { name: '购买金币29000', cy: 1, price: 500, coin: 29000 },

    '110': { name: '购买钻石1408', cy: 2, price: 1200, itemid: 33, ios_itemid: 34, diam: 1408, attachHero: 3 },
    '111': { name: '购买钻石10', cy: 2, price: 10, itemid: 215, ios_itemid: 216, diam: 10 },
    '112': { name: '购买钻石62', cy: 2, price: 60, itemid: 27, ios_itemid: 28, diam: 62 },
    '113': { name: '购买钻石129', cy: 2, price: 120, itemid: 26, ios_itemid: 25, diam: 129 },
    '114': { name: '购买钻石199', cy: 2, price: 180, itemid: 29, ios_itemid: 30, diam: 199 },
    '115': { name: '购买钻石340', cy: 2, price: 300, itemid: 31, ios_itemid: 32, diam: 340, prop: { id: 17, num: 1 } },

    '120': { name: '购买体力5', cy: 1, price: 15, sta: 5 },
    '121': { name: '购买体力11', cy: 1, price: 30, sta: 11 },
    '122': { name: '购买体力23', cy: 1, price: 60, sta: 23 },
    '123': { name: '购买体力50', cy: 1, price: 120, sta: 50 },
    '124': { name: '购买体力130', cy: 1, price: 300, sta: 130 },

    '201': { name: '红裤衩儿', cy: 1, price: 88, hero: 1 },

    '210': { name: '小嘟嘟升级', dynaPrice: cfg.heroUp, heroUp: 0 }, // 动态价格
    '211': { name: '红裤衩儿升级', dynaPrice: cfg.heroUp, heroUp: 1 }, // 动态价格
    '212': { name: '小蜘蛛升级', dynaPrice: cfg.heroUp, heroUp: 2 }, // 动态价格
    '213': { name: '球敏俊升级', dynaPrice: cfg.heroUp, heroUp: 3 }, // 动态价格
    '214': { name: '猫女升级', dynaPrice: cfg.heroUp, heroUp: 4 } // 动态价格
  };

  cfg.getHeroPriceInfo = function (heroid, lvl) {
    var ret = null;
    var lim = cfg.hero[heroid + ''].maxLvl / 2;
    var costCoin = cfg.hero[heroid + ''].perLvlCostCoin;
    var costDiam = cfg.hero[heroid + ''].perLvlCostDiam;

    if (heroid < 2) {
      if (lvl < lim - 1) {
        ret = { cy: 0, price: 400 + (costCoin * lvl) };
      } else {
        ret = { cy: 1, price: 10 + (costDiam * (lvl - lim + 1)) };
      }
    } else {
      ret = { cy: 1, price: 10 + (costDiam * lvl) };
    }

    return ret;
  };

  // 每日登录礼包
  cfg.dailyGift = {
    '0': { diam: 10 },
    '1': { coin: 600 },
    '2': { diam: 30 },
    '3': { coin: 1500 },
    '4': { diam: 80 },
    '5': { coin: 2800 },
    '6': { diam: 200 }
  };

  // 抽奖
  //  weight 抽选到的权重，使用全部的权重，然后得到一个
  cfg.luckyDraw = [
    { id: 0, weight: 1900, prop: { id: 0, num: 1 } },
    { id: 1, weight: 1400, prop: { id: 1, num: 1 } },
    { id: 2, weight: 800, prop: { id: 2, num: 1 } },
    { id: 3, weight: 1900, coin: 250 },
    { id: 4, weight: 1000, coin: 1000 },
    { id: 5, weight: 116, coin: 2500 },
    { id: 6, weight: 50, coin: 10000 },
    { id: 7, weight: 379, prop: { id: 4, num: 1 } },
    { id: 8, weight: 596, prop: { id: 5, num: 1 } },
    { id: 9, weight: 153, prop: { id: 7, num: 1 } },
    { id: 10, weight: 66, diam: 10 },
    { id: 11, weight: 50, diam: 99 },
    { id: 12, weight: 320, prop: { id: 9, num: 1 } },
    { id: 13, weight: 390, prop: { id: 14, num: 1 } },
    { id: 14, weight: 500, prop: { id: 10, num: 1 } },
    { id: 15, weight: 200, prop: { id: 11, num: 1 } },
    { id: 16, weight: 80, prop: { id: 12, num: 1 } },
    { id: 17, weight: 100, prop: { id: 13, num: 1 } }
  ];

  // 每周排行榜获得钻石数
  cfg.rankGain = [
    888, 488, 388, 220, 210,
    200, 190, 180, 170, 160,
    120, 110, 100, 90, 80,
    70, 60, 50, 40, 30
  ];

  // 下一次刷新排行榜信息时间
  cfg.nextFreshRankTime = null;
};

if (typeof(module) !== 'undefined') {
  var _ = require('lodash');
  module.exports = starCommCfg;
}