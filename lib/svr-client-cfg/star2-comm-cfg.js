var star2CommCfg = function (cfg) {
  cfg.comm = {
    INIT_COIN: 3000,  // 初始金币
    INIT_STA: 30, // 初始体力
    DAILY_SHARE_STA_COUNT: 2, // 每日可分享送体力次数
    DAILY_SHARE_STA_NUM: 5, // 分享送体力点数
    SPEND_STA_STAGE: 5, // 单局消耗体力点数
    RES_STA_INTERVAL: 300, // 耐力恢复间隔，5 * 60s = 5分钟
    DESKTOP_COIN: 8888, // 发送快捷键到桌面获取金币数
    SHARE_COIN: 188, // 分享送金币
    MAX_RANK_NUM: 100 // 排行榜最大位数
  };

  cfg.prop = {
    '0': { name: '王大锤' },
    '1': { name: '刷新' },
    '2': { name: '火箭' },
    '3': { name: '炸弹' },
  };

  cfg.buy = {
    '0': { name: '王大锤', cy: 0, price: 2800, prop: { id: 0, num: 1 } },
    '1': { name: '刷新', cy: 0, price: 2800, prop: { id: 1, num: 1 } },
    '2': { name: '火箭', cy: 2, price: 20, itemid: 4117, ios_itemid: 4121, prop: { id: 2, num: 1 } },
    '3': { name: '炸弹', cy: 2, price: 30, itemid: 4118, ios_itemid: 4122, prop: { id: 3, num: 1 } },

    '10': { name: '5杯啤酒', cy: 0, price: 2000, sta: 5 },
    '11': { name: '恢复满体力', cy: 2, price: 30, itemid: 2399, ios_itemid: 2400, fullSta: true },

    '20': { name: '3000金币', cy: 2, price: 10, itemid: 2401, ios_itemid: 2402, coin: 3000 },
    '21': { name: '10000金币', cy: 2, price: 30, itemid: 2403, ios_itemid: 2404, coin: 10000 },
    '22': { name: '40000金币', cy: 2, price: 100, itemid: 2405, ios_itemid: 2406, coin: 40000 },

    '30': { name: '战斗复活', cy: 2, price: 30, itemid: 2443, ios_itemid: 2444 },
    '31': { name: '战斗复活', cy: 2, price: 10, itemid: 3080, ios_itemid: 3081 },
    '32': { name: '战斗复活', cy: 2, price: 20, itemid: 3082, ios_itemid: 3083 },
    '33': { name: '战斗复活', cy: 2, price: 40, itemid: 3084, ios_itemid: 3085 },
    '34': { name: '战斗复活', cy: 2, price: 80, itemid: 3086, ios_itemid: 3087 },
    '35': { name: '战斗复活', cy: 2, price: 160, itemid: 3088, ios_itemid: 3089 },

    '50': { name: '金币大礼包', cy: 2, price: 190, itemid: 4119, ios_itemid: 4123, coin: 80000, props: [{ id: 0, num: 2 }, { id: 1, num: 2 }, { id: 2, num: 1 }] },

    '100': { name: '分享送金币', cy: 0, price: 0, coin: cfg.comm.SHARE_COIN },
    '101': { name: '免费道具', cy: 0, price: 0, props: [{ id: 0, num: 1 }, { id: 2, num: 1 }] },
    '105': { name: '免费送道具', cy: 0, price: 0, props: [{ id: 0, num: 2 }, { id: 1, num: 2 }, { id: 2, num: 2 }, { id: 3, num: 2 }]},
    
    '120': { name: '限购3000金币', cy: 2, price: 1, itemid: 4485, ios_itemid: 4486, coin: 3000 },
    '121': { name: '限购补满体力', cy: 2, price: 1, itemid: 4485, ios_itemid: 4486, fullSta: true }
  };

  cfg.updatePriceByCh = function () {
    if (cfg.ch !== cfg.chDef.WANBA && cfg.ch !== cfg.chDef.RUN_QZ) {
      cfg.buy['0'].price = 4000;
      cfg.buy['1'].cy = 2;
      cfg.buy['1'].price = 1;
      cfg.buy['2'].price = 3;
      cfg.buy['3'].price = 4;
      cfg.buy['10'].cy = 2;
      cfg.buy['10'].price = 1;
      cfg.buy['11'].price = 5;
      cfg.buy['20'].price = 2;
      cfg.buy['21'].price = 5;
      cfg.buy['22'].price = 9;
      cfg.buy['22'].coin = 30000;
      cfg.buy['30'].price = 3;
      cfg.buy['31'].price = 3;
      cfg.buy['32'].price = 6;
      cfg.buy['33'].price = 9;
      cfg.buy['34'].price = 12;
      cfg.buy['35'].price = 15;
      cfg.buy['50'].price = 15;
    }
  };

  // 每周排行榜获得钻石数
  cfg.rankGain = [
    888, 488, 388, 220, 210,
    200, 190, 180, 170, 160,
    120, 110, 100, 90, 80,
    70, 60, 50, 40, 30
  ];

  cfg.bdSecretKey = 'bkc1WXcGxy9VcPbM3X23IKKf3GrVKFgG';

  cfg.x5 = {
    appid: '8601554899',
    appkey: 'FsVDCSD8t7fhkcfm',
    transKey: 'a46Qx5Kn1ocaLQuS'
  };

  cfg.desktop = { coin: cfg.comm.DESKTOP_COIN };

  cfg.updatePriceByCh();
};

if (typeof (module) !== 'undefined') {
  module.exports = star2CommCfg;
}