var stickCommCfg = function(cfg) {
  cfg.comm = {
    INIT_COIN: 0,
  };

  cfg.hero = {
    '0': { name: '顽皮猴' },
    '1': { name: '美猴王' },
    '2': { name: '毛猴子' },
    '3': { name: '卡卡罗特' },
    '4': { name: '二师兄' }
  };

  cfg.buy = {
    '1': { name: '美猴王', cy: 0, price: 100, hero: 1 },
    '2': { name: '毛猴子', cy: 0, price: 180, hero: 2 },
    '3': { name: '卡卡罗特', cy: 2, price: 96, hero: 3, itemid: 1550, ios_itemid: 1551 },
    '4': { name: '二师兄', cy: 2, price: 48, hero: 4, itemid: 2621, ios_itemid: 2622 },

    '10': { name: '第一次复活', cy: 2, price: 8, itemid: 1552, ios_itemid: 1555 },
    '11': { name: '第二次复活', cy: 2, price: 16, itemid: 1553, ios_itemid: 1556 },
    '12': { name: '第三次复活', cy: 2, price: 32, itemid: 1554,
    ios_itemid: 1557 },

    '20': { name: '去广告', cy: 2, price: 40, itemid: 1558, ios_itemid: 1559 },

    '30': { name: '增加仙桃', cy: 0, price: 0, coin: 1 }
  };

  cfg.updatePriceByCh = function() {
    if (cfg.ch === cfg.chDef.FIVE_MIAO) {
      cfg.buy['3'].price = 6;
      cfg.buy['4'].price = 3;
      cfg.buy['10'].price = 1;
      cfg.buy['11'].price = 2;
      cfg.buy['12'].price = 3;
    }
  };

  cfg.updatePriceByCh();
};

if (typeof (module) !== 'undefined') {
  module.exports = stickCommCfg;
}
