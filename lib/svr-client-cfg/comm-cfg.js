var commCfg = function (cfg) {
  // 操作系统定义
  cfg.osDef = {
    OTH: 0,
    AND: 1,
    IOS: 2
  };

  // 渠道定义
  cfg.chDef = {
    WANBA: 'wanba',
    RUN_X5: 'run-x5',
    RUN_BD: 'run-bd',
    RUN_QZ: 'run-qz',
    RUN_QG: 'run-qg',
    FIVE_MIAO: '5miao', // 5秒
    H5_QQGAME: 'h5qqgame',
  };

  // 货币类型 currency
  cfg.cy = {
    '0': { name: '金币' },
    '1': { name: '钻石' },
    '2': { name: '现实货币' }, // 玩吧里面是星星币，runtime中是实际货币
    '3': { name: '道具' } // 游戏道具替换
  };
};

if (typeof(module) !== 'undefined') {
  module.exports = commCfg;
}